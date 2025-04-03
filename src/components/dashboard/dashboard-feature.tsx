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
    "tuz44SkcZgV4oHjwtyE3a21qrToeNbkYaJPMq1xscvXgyCBqHqBWwvAwbr2L5CuXwHiretYDVhnNhvfZ7Bm9uwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54RVR6FHUpj5qtTis4d9EujLtEa43HjH76LAfdmNm1xBBZo6K8zEYnmWQdT9xHjdK7AtbTEdNKgfQE8ASnL1vT3m",
  "key1": "221VT8GpwYBKdJ441S4fUUsWJqN6YroAgaJK9Sv1oSDkuwtExWUgNiDbW1uRNraqjyyNHXPRUrojEZRoR68PBApm",
  "key2": "4KaHzNQM4SuaDFmegCQzLNmWgbaijgzEdNW3iDLw4ygcNMUnQkF73hSBKT4b4AmKa7p1VprvQRgBS4477kneeNXy",
  "key3": "24qjYVLDacMbMitaTHZB53z1ebpwiQV3e6J3cDnvBhMULP2h3faDnQcbui1sH1Mw5gMWdj6a1cn7Komoj2BEBxsb",
  "key4": "nDC3X71JEW3H4evkRJJ1fzJAttmmW3hGbak2cfWeZsgAfr44QhwzV8tBNtTy4nGNR1tnAASTmn7zJQmmgTPqRf8",
  "key5": "2WBUgfeiJWqVeQNxg1kno41v23rSW2cBB6B28ko7Aez744NByaYiTdnwZfpYeMywkXhB7uQeLPpQHekb5WCpryoX",
  "key6": "23LVdktskusUJ9CbYp7z7s82WVoyoGoT8R5WvnYH8sfcQFzNKnPW2Lq4tQozqtG9siS2bCs43BJcxaLaVGYVGVzW",
  "key7": "jTAyHCZUE9fi2zVRo5PauqbxR2tgjV981ECx6ZhdigUfrErhwiWFcvXLVooTEbEPHtoW8B4FCEmRWpZYS5yCJv9",
  "key8": "vgnw4ipLFG3hZqxt6tyCYeWqDaWiF3dP1KAffEKCyqFdbKL7NbUp6fbptM7h1HepdH1pN4pESStnDDj2sgQQzdn",
  "key9": "3B87Mo8u12wEamAKgKuatSUpdg85oJiQFVHej3UR83MdwR1eBtE1VdPaqPToGdvXejQECaKchMwGH4WCpW2VmLE4",
  "key10": "3nnLYjuxVhEv3QSivrWAxp6jiZN8tmPE1pWg2U5kWKeHJJZBo3o4Pyg62QVGtuHAn1FNzqxsGFjpV2qvS3PgDCPg",
  "key11": "3XWvqDfqHz6NC5m7CPkwo7Nqhb7WRLoecQKRQJN8hAeDqMNFKzxMeq4g5U2ykrJM2gDaiayDYiKdur6kQisVYQ7V",
  "key12": "an9FpGPk2e4QFKiDngZcUnfRCzLJZ3KYabQRYbEBqpFv3SrTvTH5Y2W1KNwm7AMpM67CWmS2ph39hW1RRA6sn56",
  "key13": "5nzBTxM3pprEBtjUcZWbV46rJgEjWryuNetxnEk2iZVp6pCPVgAbveVE9g8wUU3ctxRDJaj9FYT6qMhmMk29JYRY",
  "key14": "67MtPhp3tMpFjyWkBnwHEXMzexhwTXqURTFxYojcR2DPsjg4AyYCBV3Q8QtNoo8znYRgDoCRYRvLUXHiDkz7us9n",
  "key15": "3ShvLryT4NxA7XcRS9WaiuH8ahT76qLkgqZNWGPSPJuD71y1AnxLbX5hfnjntikQUWq9VT566YGeYhegVB5gkRsc",
  "key16": "S13h5KmcwUAf1Xy9VnzDMgzUKVf4WB6q7cHKjxUcEGgkwEp5Xg3WjP8UuBnAdSk7e9SRjBvbS8DgGjvgmag1Tfp",
  "key17": "eDKpHGQoSUeDo816EaHbTVCxZXUZKWpjX8xHUGbuHEsQUju4XGt22AhUtpUBkZXwXPxBVCrSveTZ9VtTap2gdth",
  "key18": "w8GQHLRKeAH9GAXWNPE1jTZJDzamExYA3B1BS5jyAp4PmmXPC1jDJ9FUMBCiEExQ4iTiZ9h2CbuyEH6yyvhDxqR",
  "key19": "2QCCgUdS7vLfc2sXpkeC1RD7SqVM7B6CAoDWy44efQEEPgBJrWQP1DqRGbr3JmnFoJcg1B33JoSDG5K2SYR6Dk99",
  "key20": "44TQVbk7JchGovh9oeYD9wSctkwTyDdEXzNeANbM2dD1enju9VKNmowS2ic1SrxMn99x8cYH5GsMc88vG118ofHG",
  "key21": "4vZCtayN53VSVpqXQEEjEE8Yre6rHigyZgKSYGnEzrTQfvGkmuRQZKapX8FwifRWTWiGDj26wnBKxooj7wbp7fiA",
  "key22": "2mLZsPpjDmi63kjeGuUmNBeDcj1teEWG28fcr1dmTQD4pPRPoMFKN5tpnN49pajo7RKsUmGo8o7hU8BkH7ktRtNK",
  "key23": "526FyCw1XPFNHyshWUoXc48MRbqAXNSFg7gqPw8epKRb4HyySdeLWFGVwbUrZf5D9vKbA2PeQfNmpgwG2JLst3eU",
  "key24": "E5iB2FP1kZ2n1J4XRS92uSeQDsDXVZqVrQqz85jH6Kuewt44B1UL1LWbyPnsYUN1GSbwcycKzy4MGcX66no3eXv",
  "key25": "3cqun2wumubyeaegJV2hXHXBt2DniRDhkJNTLmWx3DbBnS2QCDAm5x5CHC9pvsa5f4NgBK4Bpq7AHQXq3vF7AS7L",
  "key26": "3LcF5Wdx6FKHzkuBuxVNZLY4cDoWCEnv571Yy78Jz4LZ5ubiCn9QuNwsKbC21Ls2bgucg6dqpuYwdUCXUqaF2Aqn",
  "key27": "3GBSBfRicNU7oQV76AXhjcN2hvnQ6a3RXtCfyBitb7Cx2JMVnM28ajqpUGEKXpeA6gogPXHBhUMdg9vfUDKytL2E",
  "key28": "Ly1R46Lsuyi514a78p8DBzU9Fqpz6yEoajDLxg1yLRsJU6qJ1R9FNcrLLfNW6yPBpMkChxwjzFSY4Ed5tG9GbC4",
  "key29": "2xm8jgRm27UVrRTdV9AsYGvyga65h8bK8NxfSC6Tc5m79AUyX1LT9v2YrMu8RSaVDNdo8rgCyqWkTVnA7vUQs5AW",
  "key30": "4VJQWkZ6hhmiGWXSzkhp9hYJMCWnNXEk3HhC9Lz8a9ZpZ79EmyaCz7YDi9LCuMRMuf9XBC4gE19StYqs72BSfNzW"
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
