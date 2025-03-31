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
    "4eRyPpKBiLpW7jc7h5dpZohfTiQhKf3EFDojve7LaXNRdjmPAgL9v65pVdicFdhmm8mkQgYfvJ7Dxwhxahgv42E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwjiZ3f6chVxe1bfJHMU4d1gjSnS9BKjByinHT2gJ7dN37VKieLWKSSJ1hFQixGzXB762kYQ1cebakZqo7VukPE",
  "key1": "2yx5AAywCMqPGch79XxkrGiLVryifE3waPhrqAEkeEnzb1MVua8xuzbUAN8924HemCp5FeF5XXYQY8Uwk3KeTdgt",
  "key2": "2K5iGKdiqZ3XJzd7srSeyTCm4PMKzQc3zpbKTpbJfo9KeYL2DGPh2vjR7ZyJpETeafToDz3THee6xhyf3VvgnA24",
  "key3": "4DRMHWtZDY3J5TPpFC36rYfX6GFKWnu6M22XU2LixasAtqpkSYUumWXxfzZKmtKbHjbo7LuRWF5BnHLuby2Q1thT",
  "key4": "PLHe7jfChDtzhw6DfF7H8SzHKgQsQLB4w4HZ2miowwr6JVC1iGP7zMpvSRmV1oWsrP44GnNyEcvdSrczWxPN9ev",
  "key5": "FgmaQb23BiYwwGZ8DaPqQj5ZCvS54HZGw9czKMs8xxAi8K5qMzcE1scBHBRFxWa6doRjD8fb9J3CHkJAfLBao9o",
  "key6": "5bqpQaU5RYEjj1Q8aHsp2mQ7KfweCGCTrRaR1BwVXCCXA3XN2mYE2fVM2mnhcFG1sMqM2AaweB1GUFgXNAEoYHeE",
  "key7": "4QsKybiwSMgHJ3PBEptaR3Escq7LWqmUMd9453Nk1hx6bgjZZhPjPQpYzPEkCWrEYwT885ZDy7GtYTR2tV2S2sCc",
  "key8": "57JU88zNHc43h484t7fCFd2jd3ospK46hApmU1k88BBEnTZ9qRXG4yZreQzoisKLqTP6VsaJ54YQB2VVmGcBTwvY",
  "key9": "4G7B2qFbHH23eZPTQKomZNzjWs9BYzaw4jsrBXoZ2dzC5gYygCcU8iSWtBqRKRPnoHMMCbsaYjAisAL57xgbM3Hg",
  "key10": "pknrs6hrQW4Az42PNi27my2K8iWw4tysK3h6LaQoGbvuMYfMdJytAzmqC76jwQvP4CbKQ4Gv6MgyJpYTQGy3mab",
  "key11": "4aX8kq6mHmeinmcwqdht7DoXU1gnyJ3yNB9ieDo6GnEk3HegEJDt2N2V6NXzT5AwQvqe8zHTfuwQNSgZdHPKtKzq",
  "key12": "3FU6Sofqvz1WibC8foK1JcYpP5s6QjsC6HNPQwQ6mbC5L26AgeYQjAtbbYtVbUoeqWaFr3X7vsdjC36s3fjmru16",
  "key13": "2eqpGHbo7f1YfPvc9TjeENkEzzScpJtLLiP6GvTnoZCXv4z1YT4iENMR4xK9uYuyrRQ9T8tog2Q58Scb4hrE9TYA",
  "key14": "5h4xzEHYUjGQgLKhVSiMfy8hFcj9Fyti1QRUNd4SZ9czjN6a4KvVRSujSMi6jEiZRQbtvhCoNyMAV7ToqrE3k8LY",
  "key15": "5fF94g9PsSir6exshCYgwM9M8jG2qAZjcGD5iLKTGFsjgMjeLu5KiaBPEhHc4nPhtRRywbodHXu8KmhEJP3sTx7s",
  "key16": "3Dg78Bxr3QrCQ3kEVpJTSyyAXa2Sf7DYXSzyMCqJkefQ84R38xdVGTzKJNWCEg7iwKd2Ms1kNvZvKRMnzVP7anC3",
  "key17": "3i9PsvphGfaUYRUVBwUC2o7hxgxvVwbRnayGD2RF54Nzr1pswx5sqfUDCxrtV9N4DrzDGE6UEgGnu3yvzvhk2awK",
  "key18": "4PAsada3msa7YHqDspa4TuQuqukpg6mepkehWXteKkGAgXdZSR7cd2wJAcW6WeMgSWR1SHsFFQB4XRfnLEgGAXdw",
  "key19": "5fa8Vza8oHGUghsJaMT7hRQvdMZTPcutC5R8ryBfMaURWEz2JPeLMx8VRgRuPRJKTii4gNZAseQqLtyPr8ds6sCV",
  "key20": "8n6iEomY5z7haRvVCsbaB6ZhSTPGLYJw9fU9j6Rq8fRNEV8tVRvUXGqWMsjUyWFHdeCyjHNt8qLUDrivHy6tVmA",
  "key21": "2rr74BQYzRWHHMXEpNraSej6rn6MjdjVgUdDTspXncacweL44Uuag5LxyJJHh1m5bTAAZkqWkwRJjTYpbvKG53KF",
  "key22": "ooZaLSDAu11TLeSzXrK8ZZhRVY3UEVJL69N7m6sQQ8avTFGHyw5g53W8kq39VYVCxeFLSGV9J1dbY8TgzL2toJs",
  "key23": "5Ve9d5rKYJfraKgxnXyZjWscSa4h6xrUsNwUxfh9sBR4JFP1Bsc6JjoXZrY2ihgytVk2FoVibKUR1KMmYDR19kxL",
  "key24": "j3azocb5KsiUEYRuuuGYjXM5dqGX4E3U2sCvLwG2tM3eaANyqZJQDpQ4YCoiFSAuJC2mDGgcXVDBzJVKYe5XpWs",
  "key25": "DxoPbxzUBJ6zvuzwxLYDMtuWw4zPcNvXCY14RePd6VwYk71d4rFU5sjF9ci19U54GSfAp8pZaKL8K1mT6skUQjE"
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
