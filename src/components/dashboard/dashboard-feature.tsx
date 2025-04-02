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
    "25axUd5EeapeHSdcdmSaxpUG5JvUPLAkyGoXQf18XB2NrgtE9tQsw5RttCwH1MuhnymUVoLLetEwzTCe5vwKXH6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPNrxeMFuyGjAUDpVbq8Ypnbx3EPo52P9Vs1tvrXSQW2cGGoE3VEztr5xph9QJbk8y1hAXHAW4ehAKLeZbp4jyF",
  "key1": "2znMy8XKfWUNsoeV53X2pcx9dcWiQLYMXCWvuuZL8fk7pfxBoqfcrW4sQmWFuERK7w6ruF6j5tFR1GaPLXE3k61J",
  "key2": "3Mh4im1mQvSCZpKQT81m8VJdc5niLPQLFgUzuXZE18wQVa6nsDHTk4ykL1h5WmnQbiqpDV5qttWVm4xP2XcEzmQP",
  "key3": "5cyJhGE6kzEqcHtiM1RFF75rrDagRckC8x9kLQdkHQRvsbjy4JtJwoSC1yJsqRFeUfYfh31GF8ojChL619qHzn1K",
  "key4": "5yYthK7Z6GTvb9UvbQpWL4atvU8p46kXRi2Rz1Vf8TPB3CNz5etQDGGSzVLLqD8wd4eg1JnjAdzcVbcU5ZKpjzXt",
  "key5": "5Ypy3ndtECUUs77R8KAMcHTKtSDieFjUBTSGcCdPzNT19dE79pBzYHqysUienQPqk1KU7XACMYeK1hVSj8mgoz7P",
  "key6": "3LhXQJeU1tGfdc7XUJmdZQB5u96wE7MYf7HFvgxaDSnEhNsthvhG1iBhqBpzhua4uHFEryPnAfjqkC2tE6oDQQdE",
  "key7": "5bPmDoiSNGBxRQ44m21GazvTZvEUsuC8RcEYwtnnGMz12RNptV9U1WmzNPTPvoausBv1YCuCXgJVmzZsfKEnSqYz",
  "key8": "48JNmUjpWMe2USqtZUmq6njwhANqXmNY8ewQxcduD9jCw285pJzFmnZsyNJESZGidzfQPBQw9My7jNMXM4bdsfvp",
  "key9": "4at6rUZ9MotYPZe3xo6CxJ26j2kuvobbgB1AUsdHpn4Vi5oLuktEoqLqqk7uuRbFwDLthSEMkSaFCSRVf9kVdZJh",
  "key10": "Jwnku9FPft3Xxc4yR4ZtW3yU8tnweNLwM6narLdcPEbQN5ySAJF6EnFKLcqmy3HfoQsZbw1hZT8BXcdA9VpAf4u",
  "key11": "5NZCsJgQdFzMGFBvhW5pPZMHxq2QLhKkuWTBhDfpu4V249uYPndXK4bE74YLJFgpzogysTMtghoyxmqgVCkohEyM",
  "key12": "2MKq5jwSS5DygwiSSFSj6BqRFqqBVfUp7r8sT6CPSLukDxM8wY6hdriLp2xFshQmuiKjuiQfapnrkQ3USVYB9k7W",
  "key13": "2CA4ug7WzoQfxUJTxQeby335scwx2B4AvKqzbcourWV43bhPXM31g9cFiCiV1StgEbUMMJ8URDpNdGYaXtiNtyWL",
  "key14": "581WYDpghwBcoeUY6nCoV2qc3ZSiwPmLyjEZ57JFopHcXLd2JmKHR9SbsjVvqs4qbnLkuG26dznauT24ZKTm5bG1",
  "key15": "9QrrSv9utNHsriNQWNPWSnvn9HhzJQiYxW1nCj3vAuG9sVF7r9qcbxDJ6vb1URE6kpYbJ9cwUzk5VVorFq9PhX1",
  "key16": "4joH5NRzwUiCXZR6Gd9nd8wovybJfZXbq5LC2rq7nrs2uxZBBpTuUzvFqd6TPs8MUm3q3mWNQ5FEw1vpgAiEmaMT",
  "key17": "65etNNej7B6sJpvwtMeUApdPffTxAWu8uBbXMeepH1wtH6PKX6RupWUXgFbHnH8resQgiGdYuZ6NAgmsyyR3JgrJ",
  "key18": "5fVcrdci2MZ4QqrNWekrguooL1EeJWRZEi9pbRSeDREYHPENF3zuJGKytPjSP5nET5MvzDdc9nVT88RMFkAC22yM",
  "key19": "3nBpkEDWFPMA4q8UAzumhHqQoDFsbPRyE3AFuJwsXTAm4TCvW1B2Kvq5T3Ky9BfkdVRvbimv256jhVdmLkReiFQG",
  "key20": "3unfU9L7E2BcffZ1Hw4VqrEMokaLQxb9aPR7voe4Wpvyq7uB59szSPz84Z8eTVZJFPQcKpB1h8HwhLggjakMfUdm",
  "key21": "4u8qVm58Pq5NrSKqA6HLcY1Q1W4eWM5vHJ5o5iG3MBmVtLG68XNKMnu6fDDUiy5s1ZqHo8JJRzZSRMtea6UxqvYH",
  "key22": "4oNy4Ap6s2yt4C2dcmpweUPDAu9sXMnACWNj4CpqSQzjPBnNP4TNCnaPJx4dJ7RrUKQ8PUGNd93ik2kwcNmrVXzy",
  "key23": "5Ynv4ZZzPqb5hdQoAvnHzoMjqkxenPUV5dyiUqn3NmjpqQcFBGFCaAbfj9i4sNWViSWmUrjxeizb7mhjF41hFv7F",
  "key24": "ygSLcCaGhTspoEweLPLrS14BgRQAFXXEac3hnqLyNk6cD42khQMuJAn2C1xYN2FB3ssjNTGuB5w8zqeNLTsGtyt",
  "key25": "45rWfgDFriw89za6wyqoyPyHvtKGFLQaZExd9DJ48PpRYzwoYTXXg32yZGgkFZ3kGj4XUcEctfRxfq8QcQhix3as",
  "key26": "64ZDBPqx7aYLpbuwKWVm7StKWoUEkP1ZCBhKUeV4X5dDFEGEMc1mEwoKrxhMbLVK4MErVrw1KhsCWTPMerV5jueE",
  "key27": "4ugnZTPh5Lrbwp7z9ng3M9Nw7CCqBv5ih69aBEmhddzCzp4QvncBS8rNo8a3GeihFceXSiJzGX4DVJbkyCxwptbn",
  "key28": "2V1hueUrSTEvhWDWDTmkykqcQp7YKuXgz8oPEgvQFuhVNhby2SZA6dgX9xuEfSWjCh5tbchVRUicYeLWH2qpcwkS",
  "key29": "3TkTMqYc1Q1pAE4qtTjqQm2SLJpn1xn4QLfAhRDesS8xV59HmQBp55xquogEkGzzCY42SXMxMDmh8acteKofeowP"
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
