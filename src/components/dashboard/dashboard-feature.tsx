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
    "3tGaTMuPm48rJc3aXEgqc7wJ3LU8UrHbxuPWCDez4pahBaosY7RHJuJ71LdYuupDtwwFopBS54W1LQHSFteTs8nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFoCTdUjK6S5ujUAiShPE5ogKqA65pCb9vMashEgtK76SM3HHfMRk6SXwwgERPnemQER73962zPNZMZ4iDYg4at",
  "key1": "56cLtfbEDYfkxdnLVsNaAzB7C5Mn6VPwryNNoZqfK4MuVeGtbLHaTR83bKAGQhgSBZnLxnV9AHMkKrUakf6uUKRM",
  "key2": "3v1LvbtgQhRhVnCet6HYet9nSkneJvpsDFNxDhXCZBqhSXwQ6Sxi5R2E5k8SbaYCxHByqDdJqFs1f55K3iyXJg8K",
  "key3": "5fD8v7faQDqpmj5CegiKZwvDTFVNLsZ4kYUwYiAk3yoqj1KqPVtRvwKzbMp5AuzXGJ4owjqwzpeC77K1me9uVL6C",
  "key4": "4FmrQEELgj3YHPfY5XKkuGr1AiGJjrNNJZ5p3V7QV1hVHKvvoG33yo4YjmLCL1Z7ZszpqVjuNfcNDWPsUFCVF3Be",
  "key5": "2RUDE3Hr2hKpxSv35Wp9SFY5vJWEwS7jVLp8ym54JEiRsgb1pZcrRdRH6Nw7pqx1VNR986VeQtifp6Z9RjdJdd3x",
  "key6": "2i41rcBY5dMfp22UhGD7er3uRi9LCLUf7APYyi3nEH9YoxLq5F5LRAzHwfWDpwmJk7AyhZtnk2e3HTAzfSriz5PR",
  "key7": "3QqHUvfLzLyAnE9sjmtyR3AAUvHsoYry6hbHubkcfn5wU9QsCi9d5ZGBXRKwytddyGEkJT8FusyjsPRDaRM5juYn",
  "key8": "KUgqPYfoRoVqrPznfjCeCPs4LQekH7GfeKjJzUoMQbjxCudE7DvoWFX6p2Y18RdVDLrUHQooofZMzsrTiKBLnvt",
  "key9": "5C4rEzTWqxot5XSFRrXTrrAijuS42fa2BA6EVXsDBCZMos6JbikZvf7KAZFvYRAyhWzDxMrpgbz9W6nsdoC396vk",
  "key10": "sRcXCNoGS3kWtJppPwYFv9a356MbJu4y8GAhRmswpKxNwu19BcKM6x2KhosSLa5Pmew4QSrewvsAfkiP62F7EQN",
  "key11": "NiTewdUGMSFNzcHSTHUy2qjZYadqEJjXq2xQ2NtTkrFdxRbVc7nHrw3Zfaj3j79WdKNuejYpmTVyzEGPFwnEpG9",
  "key12": "5zqYF6kVuHQpdmMtUTnFPm1SaCamBtjGnZCPcyetCAzRy9HfGLUQgWM8zXushAKWDkgWTnjJBW1TnoCSKT6uJY76",
  "key13": "33J9WzR2wLmhTQh8tbVKGJbfskNZ6tV9586aM1x2ffFDwiuZsSrQumXGQ51uHqYCtouu65s6bgH5ZBotZGACusj1",
  "key14": "3yNzY7mPBcaLp1vg6ZFurW9habkyehc8YroDhkeMkLB7rT8eFxGeZiPzoWm9dnuVKBBgoX1XFqF3qbp7nz8ewpPd",
  "key15": "2Rg4RbEAsFcRp2sFVJgf3wsnFpjFv9iJ9yRUqfhrYXh8fWocLANWUNaoUEussLeFq2sB4mqcRGNpycN9MhQ2CaDg",
  "key16": "3KyixHTKxvAo7yKropQXRGp5ZYizM9BHmFZqEYfpr5phob5gSeWjmV2X7cDBKT1Qmrgcz9po64agBZu6pK7m7pw9",
  "key17": "TJLW1CLo4ShqrRnmyRDJ27EYCxrfRBrU8TwFbh8rBEXNkya8uMv11EAmTthMXZZHpwVWXH3ZkWT1sWzhKJUZF57",
  "key18": "ZKvPgAdvMb2EY3twFY6ss49nP4mowd1rNfL3nxxyjRHS3Tk4gPJagq8GZTNCfn8hps3yrrciNQ9eq9T8RpTv9wg",
  "key19": "2hkvtmdGfHgKgP28HLVYJ3gsDggmYBo3kLKjURnn1dvebXm89BjBNWCABdji39E9CDhhqHvTY6epfeMAt2B428VR",
  "key20": "4nfn8SvwoyiYHmMs3b6EcTMM62m2GSmjpZAMRDJwFHGto88MdvmvRbhbRHwEEAHut21ja6svbJ9VX8KgPHs5rkD1",
  "key21": "5LaFnJRyXrJo3QDeMbFQRi1nazfRDxtpzKTRFzudXLVComKSgwWdbnfyqRQUwXGRa4phQtduaAKzGDzJApJThSWU",
  "key22": "5dXNsEuwU57BDugEVY17dPefPUrbepM89Gmz7G5oSHSmmLFmnue9kRryTqrPZF8gvxjKptTBJ13mPgZMPFmYGJj2",
  "key23": "2ecVqycWFFnYYHmwGFLTGTHQqavA88c3Sf2PDSKyKmxjNv9AJDRFNAGDLUdwJDy1t9DX1sqKsqkoswZKcDvoziB5",
  "key24": "4uzHKKeaGPtYm8qQgg8N81y3pFhuKsSSmwJyFb79hZg2bPdiLUJHxVvqoyh6R5T22MR2sJeibVqM9FAz8WTaiKx9",
  "key25": "5bRwWTzDKAFgWnjAwVbJnuT7Us7p9YkKnetVz3ChJ1f5vyy6HeimAbtwGTC2BudA1znH1jVBR5c5RozTnCqQNg8b",
  "key26": "66QybQDv6KReNp3PfvSomM6DLjF6znCzRvbBghT1BiiaB56xotVjV7AvctFgNYkXGVjSTiHSwdxJeEzU1KTiUkxa",
  "key27": "28F3JvoxStpzMtgkYExwPeEVMm3RJ2U2Bhko5QbdyoUpsgCTwCC2ETQE7PVmLU6H3pQhuHa4YUHaWggpek6iA3By",
  "key28": "4re8R8WTokQrkzcLazj5vbDJ9poZksydg8KU8tv5Fw3MViZwYr1WvyBEtFEZwf5ZafezqP6fd8HxfFBvXK5G7pgQ",
  "key29": "5eR8D4RnxJRYHzQ8QgYkCiwGkDhGPVWXb9kKwRdU2TfSBt9AJPu3eKSDART8vbq3FStYyoRUGN63JFHksdCSotEt",
  "key30": "5jvJGxzcQ16SHPcUQYYg3MohK8HndotqT5NhYJadF65id6v9iNTuB1wHCUX5XLk5iHUM44QC288quuPaQpweot4i",
  "key31": "4XgHYchdYyu8EXzPHHCm6eQEL1FqPgqFjZoKMTU356fVDaJEsWzc3stwBaS29BvhGZVrpMCG8o3TxtN5fZYcB74N",
  "key32": "3CXxz9ZGN26AqEd4C7QKEg6SkSvySzckWZUWjyCfxrcXDrsNDorBWkqhhutZEZihXKTzyMJSB7onjPFWHRP1kUUB",
  "key33": "53cRvyhyBoCUr7NnDA9iEKTLvo5NDja1qbSFwcyG17S1LPA8VWBytBnNWYhsy2knuhhhfA84QQ6iQbnpFM59nRXX"
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
