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
    "3fHR69yDYsmrUZbRsCkCiFCHMMHuuFhMANZRLP3v82NAudFVESxZL3sXdA45Eerv7yKWK5aDNpmxg77K5BfnNhfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DNK8SrrfookgwKGVtSEGC1md1HgYu56ZM17C8A6zYcP5MgiLAbqg8qb3MLqSmKw2XHcWd7v2WP2tyzNxQkFBbM",
  "key1": "5BCUxD2CswWF9JURuo2X3ZognMBnarDc9DCeETaBRE15enCJEjtftXdJu5mAACGNsWPP9fu92k93UUQEPDY2zeiD",
  "key2": "4VUHURg1vK91at8KQ1Es9dqgQcFERgoiy7RNXrKZpneHiMHD4dj3ckkh9mPWsvVhd1Wd76jLsstZ5p5TQ7Pu21Ye",
  "key3": "2sQSzSHoyGthgHHSmE9uhPF6qEV42PJokH6fBduQWFWDsqnBaKkJdxvTQZsfVMHmPm6nstpj8EPz9u7Q924vP8TM",
  "key4": "DY3xreerq8cjbTgcgVABJzZv38re1qjveepbShQwBAE1dGvyvUC2itspn9AF1wpoG4yNGGfn2uKCxn4gGS6AuKf",
  "key5": "5K2LKYTSyVvcgkqUWC4sG2K2afkMBiPEwKU1azT2dzhJcEHzhLq1VbS8oYgJVHF9SLkaG95MLCUnabYCygzJXB6F",
  "key6": "oH2det969eJMLcQBnfjYwqMRViYVr5dLDhuU9MET9HfoJ466oQAFcNU3wiuebugFk6J25BvfZMsxSjhDE7KMMvH",
  "key7": "2bW3bfDixQ3dsPXipqnozwiKDj58QJMJ3r7xggMNabLviSPNBris5rZB6wDxkLWYG5RHMzEsU9MxPtuEsevJcQ35",
  "key8": "h59TG5C5x8SCYbT2XX8iqrEHiK3D84zQbi9P4DD81FKLuXebz1uPmL1GFLwYPAgpVXjQ7Jfskb3vDz2W2S8DkaG",
  "key9": "CWbfqMqHqQ2nNTeEQLcDAutFZFjbWjRsf5y8E22sjYauRkgfQCkU6Fg2EuMdado4FSTEQLsH241iBt3Y8o6ujuB",
  "key10": "Q9dAgk2dgN5C2WmSqHbq7J6nyJ2czpWP9JfZ2g3GmkcfDvoA1Kto48VCTV5dnNf2CcZhXb6j16dJ2XDV27kbrgu",
  "key11": "K99whgnqNMPDc4wt1RWvsHqwWbsRRJZbNLzM5DtbyKWuUW7NZB7QUkp32QQEdbdMuLinkrYRo3vZbs5BV6ZGc5w",
  "key12": "4zNYxAprd6DYPf8jjCEWhznmk3onoaYhQ33uUSg1YxeqwpShEGpgba766VXs2J78jcemLuhbLihGDYU2XmDYneN4",
  "key13": "2jBWXhjWf3gfDaZbJSpJ6MRaFnKn12kCs76MAiqqyL6Tmo63zwFfx39gWTq4GLQb3T1aEtpqBbEsoSbPCbunsQVb",
  "key14": "GjUWdVM7JebwMCqNzB9Zo79TQrbstTAVcPeGMKFJr6FS82SWMaCdQ88nfQcTVCkRjFhXpukJDyqNeEZr5cujUU9",
  "key15": "65MdTqmnpCQK1np9rtd4qSbraLoi6CKDMpbPbbR2cyCV5q9qa6EoSQwnUYPT3B7rfDtQt4gzGZDrEx538x2xrFKC",
  "key16": "5WroxtfXWAictKVJkLUYA377wVCg2b9bH16nzqzLJzxH21gKTTB2WcgPay8LceoFHbAZd4oTp3kKiCfK3FBZF3K3",
  "key17": "5Ac9CDcdPcFGS9oHkJjsjnUSL1hjwYgb31pMfvixcNh856FEfECCSk9Q4HLja3hEr4od2yrmufefWg9hihTci42p",
  "key18": "5AnCJTfBnNNaCZ18epE6aECWWBa7AfMGXuk1Y99nrezJieUX2Grif5xpM5bz451Qn7Kd8gbuh7G5MQMytX2Mp3WH",
  "key19": "34m52WYk3yKEkj5NmePb6BUw3caWZiZ4qKps2mCLj9bAYNXTifqYizJVn2Ah5ivoAVAQD19igirT1cz182VngJm6",
  "key20": "5FwGBnEG3LJ3USVnqrK1fHejp4y22v8UKpZYGkbEV8vTYijRjA6gheeYXdBgBpXUuodz4SiWrgoU4K3aCdRV58Du",
  "key21": "5AQ314CSETdWkYQaeEg3uaEVn3sZDtfAKcpuzrD3uC7AYtHdpDuRKyteEiw2gHDHubxS1ZaV3CExCD3wK9erDGzP",
  "key22": "5gD3xgJ87J8c13L6dA47dD1xCu7vdoTkXjK7eDD3BsT9cMoLwhWTyAHtYQoHMzsjT4is5fSriCvsobE9DjNau4CF",
  "key23": "3CUkW4ei4McCS8pCoYhUPYhLGKzEEHhudaJhLAX5Gxcox7ZyFXxXts2mLcaFykVwNq8wEdUXqqAwU2JUV1jVFJty",
  "key24": "5LDyWTN37m5YuKmDGUm8Tgtopw7pqbfeX5xNxz4pd9S3jbwSVJejvRkCZXio9V1GqWh6z8Lpim4LYeAgxUNuW7R4"
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
