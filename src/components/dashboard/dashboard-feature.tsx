/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4tRih6uhvHCYpHrcKq17vEtyxBQPkkew9hpW6EJkyH2md5LM6ajVvxz1HcN5qbpscW3rLLB88tTufNSRqhBTXov7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCabrgueugRvtdHW1gzkySsPay9hiGnoGeNS6YhdzmY9gfkgry1ir9NenGUg5zrscJ8mVArsryDT7oBPKoMgaTj",
  "key1": "5NX2Zds2eXe8KMJNHfrAVbhDS5nTwftTzkPZtmyWiD33vA4YajJPoXxmDQ32DmgbQhMbRfRTCL3DcoeprZPikWFd",
  "key2": "BkbGUkwtWYVcqSkqMAuXSfPjRhFewvcQv89Dowr3dsaeWtFdALP1UXMcEunmrLTPvhv765QMCLraFfZX2wjNbgH",
  "key3": "3ZHJ6H2x21W3gYQK14jbBxufzHTszjovYfu74T5NHSNbgnDBY2Y4B4kABUhmUV5fjXf51Tq6EDPnj3wY5AjRYb7P",
  "key4": "48fHz93wWoqfjbkMvm4W6Lv4LmXtg9ppMWFicUETxD75mHFEPwCWvyp5CV9EjQGSrjTye5ESG7u1jupRjdb3NHLL",
  "key5": "2R6hLHHqpjrVJq7d14DaaTZuhwa4DPviAkjv5puautxVW5RZAfPZxF3oUdTUGSqpLy1TEioH4Bc29mfYvtnbCUAp",
  "key6": "3LWVWwzAsmGg9Ut88Yz552pScizma59LQNnJ9LPFJrrdCCqHDvv7qN69xQQDqLnWLCbD16s2ihYgvBBBuwWjENek",
  "key7": "4KdjvSfi6pRgYXHCMGtRZ8HB7A5YGrGhYP3o7LZ3EkCQPxpoNzNv7Z9w72pWckRmf8xbrNPfPmE6wpi4YTNT3Ysf",
  "key8": "qRAgAHP9h2MXhHhH3ygDhBou3gJXbHsCfTyycgSDb1RJqhTjLMMk5Er9ta4tPpFMKMKiEKx3UNzvXnAnKuJxsWC",
  "key9": "3p8Ue3bsFPfgTRybzu1JTCie5LRemxNhkBUi1w2tEfhCJXUW7sCm5SkgWdt5mXStsf4VnVgKQeswfEuWLXDeWFVe",
  "key10": "UjFyca4Mr1CagXVh6KCP3jU1kmZZzS2mCtBh3U5w6ni7JzdwUuXmXRvcyFxyLQXHHCSkymYsuFnHUgLmuiq49dj",
  "key11": "5AUj3j9sR9JkVFzcJ7rpZ4ae6Uxdw9P9ppBTHNC9kfg88KoQu819S9zv8U2nKk7zxJSWVxSXdv3S4TMNSA69eVGU",
  "key12": "3RsLymRiaoYMrRJjbj1WCVnV27ZcyqMGVUR6yNaptK7z9Kx35DJfVbsx5WXu8f6oCqmojoZG6f4kgvBHxJFZaEJ",
  "key13": "3U7A8giCMLrkhVD2tqhbVUN8VyXnLPWWi8AHF8wCSrid2QaZ9GYv1Gx11Y4JWRrddxhnTHC5tHangbhseFaCz42C",
  "key14": "49i9tPhSeQoXKRGdXfwbAGXoQerXF23Szt3HbfBS4cTkFQcCk1ZSccNcomM1MdGXx2CTojzxb4kePsSuBUbvhsVU",
  "key15": "4DbaM31AYgdWCFAbSStv196RCZ8TdQkQCigGHnpGvW6Yqh1YhHn77YVUovrz48GZ4T4s8tSi4N89VmDL6Auq6w3o",
  "key16": "4XAatFVzczzoVKiZoTaS347DwQKA2cuyDesyJpLjuurQLmLgdqtjhKmVqsiXp8cmUo13UBZ83QJ17pwDUauiAtpx",
  "key17": "4TASfnRB9LHbjCMFeZYCDtwHMoD2GcvTKZWgDtKLyj32R4TEyqxQ4PNjLMLEQqqLZCRiZFC5fSSEikxZaZZ7BxNb",
  "key18": "5BUMSp1vawdhayRr6kyNFr39eACrPhNJubMuhKP2F2eBS9eSSa5eypJwvPnBtCqNw6dYUoDhLAF5ccZCTjp4HZrn",
  "key19": "46QgtKxQVx9Cb5Nw1yVjBY7rvWpFNTsJDoikL8YQenFW8HQ6oEp1qbmFSyZh1hNfE4rUkurRPjXYfCZjj6rgLjUE",
  "key20": "3SHfhdjvaFsqACN5izYpLqJAAB4fdc8pA5YCtPxJ64aNNkChdzpzFbCK23hFHPMX943bV5MuqDLH2T1LRyHJTqpo",
  "key21": "46Fa4hvFPr1vdMMLWfvQHgxDAo2MYKTzmQZ8XTfwoPbLfWy4db7RF6q1WJtWFBSicCR7z1aBSSkRgtBJLmshY97N",
  "key22": "5Q9CpTcApVZszttjw7efAG189oJJREvhGLYsSHQaQMLnY4EBKbFm5ZvuhUKH3xGAkBH4cwgKC2U9FVi3bdfbzrmv",
  "key23": "4uSanTjWwcX4bDBPjjWZcHh9kNNw1socKVWqdHomCzTEMMpVMRv7Emp2g73qrx7hKFNRGjw96oC1ousgJ2Sk83Z4",
  "key24": "5hBfQNLiAJsipM4ifRJ3ZxEZXLGCRLf7KNm99cJYZpxE5TvXba9MKc8vx7WADArAqKhiXRjWCvKiGdsJxay2tpP1",
  "key25": "St5CPHuWPdk6JS5V848qDQgutt2wWeXsJgtMWv1KiwhxL2VSmBAm32na8GUUEDBGq5hR3HytEVzCCac5CDsUjVi",
  "key26": "2TsGEmCxQ4b39q2GKyrGr1jRU97fZaEotU2WqLgLaEbFE9iNDLj36HBip3PtVme5omwkYiw9mRrWfZzvSsRgNco6",
  "key27": "2JoME594Jh7FMgkngTv9aj7jbSU6HY3pGrrq2MgM8Qs15ayPy91uaCfhXfMtHPm5mUhueRTsbd5ujPyipd1yUuDg"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
