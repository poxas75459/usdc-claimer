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
    "3VmC6GvLz49zxBz8Uxw6ip3cvowpRD9hUmirGSGy87PX8tK1dWuD4jR87U8S7RXUU3P6V3DHEffrYNSntfLK1aha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Y21QWGR1xYUeweR6cmNhMYaCNYdzwysrxQPvbRgYnDfxJcf1DT9ZsN35zahLJS3MXzMemdzUEdqmgUjr3XX13n",
  "key1": "3FVa7iS7aLr8ePjmQDExtK5ztis4ARN7hPvypergsbDqA4ovWwaWBDC837VHY6tpHjhzXdnahX33Ct9SWYe6tVgY",
  "key2": "5E13AnUPEJWkLCDPnrqYa2XcVyz9ucgZ6zsoukYm8ts3dW6Rtv5mDXHX26J3CP3twpAJZFw8mNFB1kmRfM5D49ki",
  "key3": "65qCcoqbRkV2XzaxTbyyrgmKL2uAnSPN1fwNL2X2j9ZwYXSy9NZg6wmHATVzjGkmQSbX3sqqGGQXYaaLLFZeyyfL",
  "key4": "hhv3PoSz4EvUC9o2fPMVyVHChg3fz9phcNJnHt97SzcoxDtD6gFFXf4mgAjxu2yXVV3dNMu6kRmDdCwxQ94rnf6",
  "key5": "3EWoVPc4deNZ3eTv4X9hNp3CSPZzzMNqoFjMSVM7AnPtFnCpRJDsS91BvWkrdMbbPDwwKWs53q5pJHkU7XnfYmeE",
  "key6": "46nZpvJqdd8UnDXxSsWJzy6UVBvsMpag16KbpTaZ88CThydpRnkqkcjzguCJT1mZsat4w5ZRuyBCWU3E9K8vckgu",
  "key7": "MukNoKTF3ZqRzVK5JtbsmdwhruMqgZmjwTu3vYjUunsfsdGU1LT8V1roiEyBk6ovWUq8C2qCHmNNB99euZZLsoe",
  "key8": "2EJAz4HcyhJnxJ7c1E7B5hJLHejSYfV8mDh8JaeUZQgxt599xVco7WpPdiNqE51G7jjYikjHSFz6TorNi7gca9BP",
  "key9": "4EYzwPhqPZSduxkMyXXjtbvqKYjixfuSkYswrWTg69yAnDMBenKrHUedJ89Yn2yX9EhnyRK3XRhtfyLWnvkdWW4X",
  "key10": "3eiV2DRpUBx4GfbKpBzMQgeuUjX1RWDhBSYNh5VQoA18CwRBYUUVGav5869Dd5HDTeioz7JXo68orDxD7QpgJfaS",
  "key11": "2DWSiswygKgeqQ3tGmWxKA2V3WaZYFUBXTDkTrW3sStSPz48hNBy1Xsb8uvDyA53t697cR7QGg8TaGSp1LpE8iCo",
  "key12": "PU2CbucEfFaTFNQouzxK4WCcghAQ58ELcqER3YqmT7U1z2ZpYg634Vmq44s72yKGtrzjgo79LsaostQ8U7TrJ4U",
  "key13": "5w3gK1JEVL75nfBEYq8JP8AXyCg8eH4AyycfrqMVCJsDMFY4rK1q5Fnh7NPfotPQ2eWfzbaK1GNctDvEFfgh7L3m",
  "key14": "3ZBWxRcAh9b2KmcWSUvHg6DmLPwkD26M3L3mJjrpUgotexmMyqokseWiZvPJeiGPJYgcuj5tN9z5bWdKQRaXyRhE",
  "key15": "3ckY5un32MyiV8cy3yGS6Lqtibytr4Zm6YdEJuwyxfAE7TpsXQLsszDMwuDsn8LVvrMCuWwNr7KGZSiTCfJaR7Jg",
  "key16": "2faZPvPH6WmKhjiqe77jAXb6dLa5sAqErWgPzt1tQcEXfwH5zU8AG6kbLEdAi9Bn5UfMqRmaU9GWx9Pu3kuYRJ6G",
  "key17": "5z11NFhx5AGZDNxq9oqBXikrcNiGpLiNcivKSGjccptqP6HLhRw3es6DZQ5JQeSmmZdso4gqkutJBNfp8xjUdp6p",
  "key18": "uRwzsbZA1KFxsXM6ytL2RG21GPL3xpqYV1wRbXQB9hykj56RkiFhTWC21KpdZMdVZNKJqoko9S62SofAS2oLsUE",
  "key19": "5tUdzUkF475uCJckUMJL9xN6HqfKxhq1LGttDc8RvD35nNzcF5i7HTCavoVqcCUaCwC5daRsgzEheyh6o1vXbB7q",
  "key20": "cCXnpp3epZj1Pe4HnK9buyKtDazvzcJswMp3fec2xTdU9ayEu1QAtmZXrAdtNnogkDKpDHP2bhzkNFtbCJZmGxV",
  "key21": "2eoYjfMjtsHMTEb9DT8kXhqfrDD1fQYd6MRCXc9EKn8597iSv1tB29u1wFVXB5vfFYMTkHmWTofMfVU6E6MSMzw5",
  "key22": "5KC2dUqVGXkxmf6E267Jf1qobsZipzBj6ugye63G7UwpQM45SEde6kYFwovvCcKp2bBnGXkBe5LXiTYcXWF5CktE",
  "key23": "5aZCqRJgW2xSWCS2XU57Eo31y54jJ5PVCTFXhxDg8k1SghnC1Jvip8Zsoi5eDmXLyqiPrKHqNEbgg58B9gdoYpEe",
  "key24": "426VWSWVt9UWkdKVRp44nAhwSEks57GnsXgyUJHde8dKgiSTaBdwUhemRqqTAoJTSCQ4gKxW6jH4svE9mRYTGYo5",
  "key25": "3rbmxp3CATePn7q46oFakhx6Tnrpmbx7DeX8cndmZptbzzhTj2xWw37vSetUUxppFWs57GzYfT8B5U2TsvYS3os4",
  "key26": "4zqFNwVuoACQxfNTvy1kBSa83JrrWFc5F7JTYtNQA7V2nbeKYUExCMQkNPgAJuGRDVxzkJKtUBp6MqVsVJTApxjn",
  "key27": "WKqBPi5nFfnSohK6L6KxQPkk2ccY7tVGxnxDX1VrUGAxBM7MgecmTL4PeqAANY3FhBCys7jrg2th3xNToPBkkVx",
  "key28": "55KDy6bcDaaBXev9ep5QnbsW8AA4L8o6bNMsadqJ1WBiFyzzJkVDTB6SagbXSuqiRvfcsFhg5zAFfnHcWrWnppjS",
  "key29": "4gz4emHdicJFoS2fvSGJNahv2NG3xcZQ2HudzNaZkQ1MxMfYtDmCwj7P1gjikddgiAVMnjfaUgiP5tiPuXtQvsvb"
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
