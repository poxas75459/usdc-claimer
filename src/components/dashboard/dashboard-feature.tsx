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
    "EmBBWHwZFeXRUefo3tQVsDrPaHNqNVWzWXwtbB9BYJvo7v5GimDkqqBwzYRkC3pvq1qJSYKn1QAreJQSpuCS4Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vuuviPnVyJqg79nWrLpgouYUAtjEFHpUosFh2DXjj4Zk2ppWV751oascqg5S4TGMxbuvRwEeLuN2fKc7dZN1Kxg",
  "key1": "47Q74xjJJEbPbKhZ3bBZkXUNimD8ScuXPnC6H9qaDGCbgKFAzB4LXM2aa58vL33QsGrDUJJfRTALv2buFMLXCWyD",
  "key2": "2SKGXU2v24wqfEAs6HEQKzQv1752cat3MSo7UDXx9CNRLvVYdHHfmTBzhbN8az1iNdgJ7xD1xhJ511Rb3LzYGyj4",
  "key3": "5EXoJLNweff8ySXF2owgqcYWZXhEfoo8x2rD5Bj2msEC7M2aePVDM2sSbzSoftB2D4WdB54eAdbgGJBRTfN5xciZ",
  "key4": "3c1H9J5jA1kM7UTvuKthxAPt8VQJDAa5XWuTgzv9qXSS1KM7RNUPwTg1NHm4Ru93fqQwFYA2ypYe2GhNBPE3crui",
  "key5": "2yD36k6AG7GvwfHwLHHi4feqrQGNicz9iFxceooyhWNt7uNM83awSeQKXagR8qYSHY8kf5HxGbY4gkmqzZQRFvCi",
  "key6": "5poH1D7BcAe5ETYFQsPMF9oqzo752RC4fCY7hR5JgcT7KGyjSqQqWgvQN5mz28eWmnoKJTRKoP3T7SpVsv5tXMXc",
  "key7": "3ihedET5jb9V3oPs341APAEazqvxtp4FidwZPG18owyuSRznanEij29iBtPLfSt92DeyH8JqQTK37SKMnSE92Bu8",
  "key8": "5N46kBKhi55sj78DejShyp8VfrLRsmHGYSepUBR2bygfQgCGjPf1JbnGQ1LCDaZKbis5T59eiwQLhtELNMdTb4DK",
  "key9": "5vyVkiodPZr9ZpvSwoEwFbT4HF6Y6TbKtjNWNiD6DZz8Cw66WQiqbxEzBSHEf1SS7CpsjpXJP6S89ukdCYCrUHA6",
  "key10": "4L3y3JWHYjWRpsexKKUHtZ6udF5HG78ZCfc12N3cFrDVimwaikpQq2HPSXpnnuaUzUc5mC7MXeLtbbZngro79FmM",
  "key11": "5LASyFTfkT4QJBzpJ16DyEgWGuu3Xy2FZ3o3ecggQBE6reif4ivaKb5b3NDE9ZfCwH1W8vZEkdWGFvaL4yapzL8a",
  "key12": "FsJK8KwXYdsyaCsEQN5Qotd49vXU4mu5JkWcLCTTETsNus2cQuzjEBSnN8dmYJUMjsA1KwCQcvMDcPJUmmybodx",
  "key13": "2KuB8PJXsgURM1ZntybUv8eW1rNmx1T91mEV5qNcCjRWjSSxRfhQwvGYSoT6VYkxagEAMbw4RQoB4jwXqqnvLqog",
  "key14": "4y3rkW6AZj3xX8k5ogXvacjuTAbRT5kaRgGbZfD4Dpb1qB6BN3jB2e9PxM4LzNU2GKyiPkqoFGoG7gfXadmKMjcP",
  "key15": "3vbTSAELefxgd7BjXuDfLKCacWHa4VzYVre3yNND3Ev9SLcszKb2kFTonryyvc91aKSFskXEQL158JzVG453CJjJ",
  "key16": "3TtyGsprZQmEeEXm2qScA9v1MRURdBjNtNJF68MBRMKRfjs9ayWRsZu9QKiRrt33XEU1UrSnoyPEHTmBHGYY6nJc",
  "key17": "3GdsaujwrZpbc6jtLxEgeodfatFpvqkueqy6Jw5DKJGZxsDHc61DbZyKV2wMahYhjvCxkf5bDCPxbyzLBYt8VXFJ",
  "key18": "4xAV41G4j8Nmvws49DtsCPgWTs6SK3SLi6V2bfoF7EJBMgTShESus3nmeAe44pjzDLiuTi7AfRp7aXPHBVEtJjYX",
  "key19": "4haS1rzb3hNcWBR1T3DcuJmHAybGTPL2Rni7a33JLmydnHfsrkoe4sDNg72MxqqJewnEmmHLPqxvv5Fbo3riyVNV",
  "key20": "2PeZAvTgL9ZbbHVeLXe29eyqH3CC4f66Zuhn4VFB5J7zSGrWnDfQ7ZCCuq2gVi3AtHV9aqg1e5vonNchpM8xvG6Z",
  "key21": "w63dpHBEAPk4tWDstUxagNKPB3drC9B9zvJRrLFLqhy5JmaBdr1archD17r7RxLnPEViYRema1MpKLcBEC8iWQp",
  "key22": "4udkWsbw5Mj7hEggDuv96jYXKuqztoKtbau5QG1J3mTdnNKtbXRSNdMKURXz4SBo5DoxZ7wbasBQ2ahTFajPkj8D",
  "key23": "2raHDtUrnRQjNmA6NzE3DynVfWvpQuqse7QwrvMaFMZvnkXob2A5NXLUKLDNtpmQQ7aByTEa9ChoRTchKqjaTM1b",
  "key24": "5kmUrPR3kwLEtuxmiEmeREw8wKqkZM1TXuTwNHnk62GNXmBkJ7vDNzQQBWERuG9zdMgTBbHRRyeNYx3tUXAjHyBn",
  "key25": "51n2F8GAicUWMma2guTjvmU3UpZwkP4hzFrNivZUU3bRs2aBeN1Q9QEcdWaWKf37hpu5iiUfTwZbLNsC9wKaWRqc",
  "key26": "Df6BPdGoKDSxRKw2Ym7MjBJMKrNkCehh45HgURLS61CByJ2uJaeGQdr5nuvKUEgVpo23wyvxDqi37aC4jqQgBBP",
  "key27": "3MXoNNawjEKkv5aHYhV7wg1icXtKXaPgr9xNxwJxRy45ds3s3DkA2KduXDs6VwtsZDjztVcyXRhJCghmQ15cZ4Vs",
  "key28": "5Gai29o5Fku2Zepxd3m5gQfoSBVZurV83HjVY1Hv8uTKzQ41PvhwBfo6hUNYnZGStqKuRQSQ7JJmkPjPSEWCNuBV",
  "key29": "2WH4spCRsz9qKpouRh2hGSoDP1nmjKNgjGHmPfbkHW9mW1cqLJ3GUkgucgC1YxezNrY5ZkcEWQXWUnbjNgodXQjH",
  "key30": "zd2B94TgygmThif1N8WRRsvLsBhJzJ99LG5Ns7vWdRUEbCt7gdLhRxB27Co92p3A1kGhP3qe7M9yRgxWjhZt2AM"
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
