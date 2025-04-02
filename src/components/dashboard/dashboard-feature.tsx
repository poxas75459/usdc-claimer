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
    "5JAQ5KEGwqWKVm4RVxUpxC6Co7nQe98vp3t4wADm4DXiqJMiUaVTqar5WEWTp48faSGhLhJEMDqwN5gqmxKMMyQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UCWi8o74B9zxDpicERVyKMqGkP21QADLQBjD4VQSu6ULxffQoMuM3QvTg6HQdoTuNgBvJpBa3XuA5aPy8SW7Nhf",
  "key1": "2KBy39hemt4Qdebown5vLqsEKJHU4qs6L7QM1kKfuZRrsFxqrY3zBccqaisuWe5wrwmw7TVg6pfSpQ4hzdPUNjk6",
  "key2": "3Ahohwo8WHb18acZned7F85d5VLvnkrx8BD3MNd63StV8Aa6GynnwWwGx1NaQYDyCoJj9JAvsLe9Pgpx1qifJ7K6",
  "key3": "5SNxwEsLcQuwGguuomaDCDXucR7CTy3fN6f8tg3jNTswBprHTgdKX6oPeCLtySPUUszMHaBEv45drvna1fpNMJFT",
  "key4": "4VyYDimu9VWLcG5CPaQntLtZhV1FotgQpfPynpd7S8cT9mixJXFiNNUnRLc1KrVV89tW28wu49wHLFJigYbz4jVh",
  "key5": "4vFxchhaS8xyJNthgiTx7zGpQaW3zaYtpknSELPLtP7i8EfZ7D2rekjHxTep6ia71JQbxtixZTEy4yMVKdSPX1iY",
  "key6": "5DLYGAzpXDBvreisfsZRpjA8Ug7h6syKWreYZxcyFjEeS8wnata12u1oBAZttckHe4F1tkB5EuFo3M81Bb64eg3F",
  "key7": "41JRvzefWvURTnjkMNcAZkzsEArxDJ9LRk6S7wXP3d2ezsvmmBctUQbfJT6g9eYuJPzBKoRc3MmCHbFjwvgwraDt",
  "key8": "255kN1pzFAwgGrEYMqLszNtJJZLyBQtSE6dNnh1wEprbPCfJrDzkMTsG2bC9iLdH5R928mWusFpQv25utYFKgNh8",
  "key9": "2kAs1Rox3S2Pmu5f8AU2LHmBichrHASAFSVQ7rvcF9JQ5odndm9Dt7mw6nNQK1nRTE9vNh2LbsQwiXM92HjoKKFF",
  "key10": "3bo1tGBkM7w5mTwGtcFgkqsxAD5kcTUczdPW2a96a1BNTAo7ApeetxpAQMTFeyRdYLTT9uyxbVkaLKr7PkcP9Uzs",
  "key11": "2dsRSXdKB3Ecf6yXdeYu1Q6HBS6iq3xp53pbnLUJHDU28ry3w9JiKv1bwCURYDMUbs4DF7PTEigsabPrecWfmfVp",
  "key12": "5UbtMk9gu2onnEfgGmBaxGRXzhgzwTu8aMKMRfUhFQtXKfAmyBiniKgF3F5zPr2sfrXrfiwTULKntwxVnGmtjbgJ",
  "key13": "4Hetbj1jhvTD3ctXMVwdDUng5FAUSicdAcQoFvbnxyLfQWcC7iiwcCtzr7LxUgt5CKoWF1wTS9erGPAjEEpURBzm",
  "key14": "4cUoUcKiF2hmrfbuimLqynNnKV1R1Unoq7QbfXsxLdJctcuiFZ5q3sqK8wUAP6pyYSFXzy2B41pwDPNZYBz2JKsF",
  "key15": "3rEd6MS3WCztZVKQeJvYY1SKL9ehaxWqBxZfSgZ8aPAdp4RvmD8tRbYTxD3qoReaRr97TpXX378kfCQuGnYTdtLv",
  "key16": "4QcPjQus1gvqJxquVEfEj64jHQUKjRb9EPzTm3kXadtqY8YgcDcQG9EsVRgdY6XpwgR441ACoGmSouGjdXkBafC9",
  "key17": "2gqb2hACFMzuv5Lq3wcFVwpaofhCAL12kWS36TS3f1e1CjMoHBQhpS99xG1mo2tWu2vdHdZ17kcYZbiES8gqSf3J",
  "key18": "5Vr3AorsHyJD7UsMohfMBLYw89ut9yukgD2F2txNdJNvLjmm9jMQo6kPP5rXXAsbKTvmBYqvteg7qimkQezAG6DZ",
  "key19": "2PbteTzF25GpBTkQQ1gkdL5jbxUWZ7pssEzPQAd9fNCAn2HCzJDLXzfBFswEEzBeUeQPGZJyhMUcfm11d8kqcRKV",
  "key20": "3yqeVH3zGivMXdF1Jku5VoLUqGrRgryWAxecv86HXH41RcuhaP2f2p9HL6vH2KX44PuYJJQVwfxohfPuUwjWFvaQ",
  "key21": "4pHdQNwfkUByzamjEVg84LdByYNvFtRsDNXJvPd7UREkbKmLntEcRtCSsVhSDThgVYf2XvZtRfwDtV4viXUcpuhJ",
  "key22": "4VhZZCNJdBsb6D9N8aDQydGNcGwd2QRBQNvPrUHCyfxN8MPFnq52B79bBj8VQ4SX9zXcJnscAkq2k6gFAdWrEA9w",
  "key23": "2eeHtW9wg7oVuWkoiWaGM78ToZYEGVdvBFLfN29ZcRtDK5skbYkHxT6GcnYXimR75m796oLzKzUEScfLXYrZ4own",
  "key24": "5CuFKoWjHJP1fMo1DdZ8JHVX67YxcrZgpyMDYqpFHVxf1fzg6e4CUFyoMoUodRrtm4HM39MxpDzbkCPV3Ukpsqfv",
  "key25": "3JFLJVKspzec8GxuWsvBH1Zrri4Mdm7nAtZnDyMQPPESd5APqVVGZEjVLYUqp9MP5ZMh8idkLL68R4VbdsUtPp3F",
  "key26": "3tMB6dELXKaD4M64mNAHX1vBACbBBBPwn7CUH18fGu3iwxUgKJcWdD8UcVHuYWQNgGab5zVrrsZefoARLnUwG92s"
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
