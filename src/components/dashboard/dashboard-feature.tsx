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
    "2KSwNPBojZtDuT6MQqD5oNnRNt3p7puaY89zvCLMQnmvgPsr855w7Y1AtkBageerzhddTtkVmjdCrbcSK1w1RbFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kvUkTehNy3JgpmGM1E9EqsugkffHVTJn1UJmj6BBUifAspcWPab1kV4EmgYNQG3G9EXs4YwyD7Rt5id3oWwFcyi",
  "key1": "5Hi8BPR7UbHjext6PgHBTsyMA83tQtz5qr6WP9ESsEPRR1iSLpPLKJMwEcJiKpXDNdMgb1Lz6fS97iaBqn9uXWYA",
  "key2": "2pDxFAxw8THeadjBMx8QBQVHB4uNmcjDe1KdWs6igVsnrEYPoj9xuQysqu2KtYiPvju1htaKPytpfGtuBXKFGgYe",
  "key3": "5nZKZWX7zCP6bggzccvNKnXmBmky1iPLrVSkfjdwDd87pSky2bT93BiwADzBtZqJzPsmUNtg6jCPBt6oja97J6Zd",
  "key4": "5cWN282kXnmSNSX7DVB8CyGCyrKxthMDm8wXifmP4VFRGKsncuAgoWW1QKq5wED4abXHUw1MuXz1LK1DgjdzpfpB",
  "key5": "2BRJGg93fvJ2RcDxFokmgmWefvpntfy2bafyRsqChRHbGCzHiDDWUzmsSNmiaeF3fZ4AxLdLKoAEBeDZcnXSRguD",
  "key6": "4i51anePuEVHntay7HiyxdeePnv4aP2z3KQ3QkfejUEJyu2zJLYzCCdoKztQdtMBzTYi9AM2oWMwPo2ba7ZVzKqa",
  "key7": "5G6js6z1uhFCDwaZqZQmDCk9h7evtDB21RxBgtN61dScWiNYjUELkarUGsGZDckBtFtRyEWRTx9qnzvK8XdAHh3J",
  "key8": "3HGmiR64PaVDSFNoJeXZLtjRH3NwSZH7uV13GwwS8s4JCJUmdKQf5G2ecPz5njFDNpnJQ6j7rZSVABL9xpKg8dzd",
  "key9": "2r8DanrLmieiHWYizphNhscde7MUsHAoVM9YLaJnzYvZ5oThxSBnkAHozijxK58o8c4y1Q5JBzx9BFnDzLTFK2rJ",
  "key10": "29hm5BjzwTHHZkX4ukZxmD6zrJf9JF1XHPWxMhhMDhnASawHzvC6aqYy8R6rkSPLXtsBHsmSFa4oezBRVVGbPRgS",
  "key11": "CR9RC5ApsLZmFu4Qz1zt2CK3mnhHgRhKUZood65ojdo6NSxnBzoNCnWXVDn6Mur9SBM8x7ocL8AwcZ2qx32kf3V",
  "key12": "5t3ecyFTPLeLC7MDkmm6K1qNET43qie3dtA3WagPBLPLWDgwtc5NsXRtq6SVRqg4pCZYU9Qb5rPRp6qTFTPd3wMZ",
  "key13": "m9hXKUYRmC9Ta9keui9ZQuGHiz9RgVfh8QS2q1Aj7zNKU1mCU6CcFSKmCB8LNwFAzrsCtuRWBdcFCQeV9eWwUCj",
  "key14": "n35tXU37oip3pbWKoMr68Ui5k3qtUEZeRXTDHuUjJujtrgyKgVs4dLoohZ9yFzk8JV8dVuZvaYmPMkSKXN7xviH",
  "key15": "36Pn1bFWZaXaJMurxakQnVPJe727uA5VfWiej2B6Dx6Sq361WURubvwJyCJHtKNCqpx7D2xsz1Mni12CBNvJLHGX",
  "key16": "2ScF37MYyF3paoPh6n4tKcBTo2CepAhgScCzpmS83Eg9APaKPZUQD66QSFqJJDW4kPzezj3L1L55zZxJtJx6B1uA",
  "key17": "46MagWW5vxZBCtGvw5mDTP6QN2Bm5QPKR5RpZXj8hzGwLw8oZo8gnzmdWXcZ7CnCfn1XrfBWgWsV1HzNXcwCpMQF",
  "key18": "37jjTp1cQA7e829BEPoyjBMc37e11NWEaQcWQmzheWQHMw8zXAAyLzZByQd2R4pYet9X6FerVoY5X7ZXaCs8LV3d",
  "key19": "59TMfvBFtZzAM6uk3RLtkrjaT1jdXRoKs8P4jhFN7a1oaaYET5xnHeWZyWU2Qp2XQuxTiHrLrQX18pXEZBmtG44h",
  "key20": "2UvR2UZ9R5EDXTY17Dm5GE49s6WEV8Pf7qzwpyz2v5cP5Hoo3sfyevqh3hvPD6VEKoTkrxFKZ1iPbNPu7Kf27bZo",
  "key21": "3sNDP5MWrLRend6jBcvnp9ywQFyq7iERqfenHtz5HQgXGfzyoDhZtxxgE9MCAwibQTDobBPSnSWWtnZ7ytfv3N4F",
  "key22": "gwdE5SscAiYz7E8mjheQ1129wNZu6JipCDUkLmtd4r9MytE96aKun43Swm4TkWoFfrf6JidYUeiBaEHZUtDfsSH",
  "key23": "5QQbjBPf4jheTF5Gm9CeCWR2EuDt95CQ9sa8d6kpUdA43TRDdUrFq45LhrmK8QHN6rktq3QNJoBLQatHpjAddCM8",
  "key24": "31xiEsZAcfLhaGcGXcouHYVi3QML4mcGMhEbvKnxcKVenBBD7fdXbrYpNsWuKccybNwejvaXk8GwKCsfQ748eU2r",
  "key25": "v7ZibATGLooLYvV2DJSgJtnp12hZLULZZWi3QQEWen4AorRziu64xhHAUbPpg2FaJchRvhbb7pFDv3j64Wob5bz",
  "key26": "52FGcpA7tB6W2MYfGCW6NhHkProWXwAhEUcckSM4PS8QdNeNbHw5XmdTgPMxJixq2zdp1euXFEMjzyAeh2SjQXk2",
  "key27": "3mQvA3crogpMJqS2hxgV5QBT3KqGJuVDhA7otktPfrY2n1tLkD2sXZA8Ui42iPXfTCYLnvxnnBocvgpUeCyEtiHz",
  "key28": "3KXPv3CMJhWZfoPX8Cd2f6j1UJY2NxAkhsyPjyQZmGNmCTfcwmnthxUXhPVogngHBWkd85U9ZYHZePRPqUaxFTAz",
  "key29": "3D8jEkbQx1CSjrKECVVPFKjw1fd8bgmWpb4tNLfQPgJDtB2n3PKreKTWVFhpNYPhWSw5QAmyxhYBJ6QnN5Eu1yBH",
  "key30": "5ESuy9ra3oHgURP1Tc4shg3JWxS9S6xXBE9vJaC6NBR4kG1kwRpbkhuinabZ1bFaofyUY3ef9QLScR5n9PKcH8mN",
  "key31": "XhA3XBNmncLtKHEj71K4xeNx5YYZLAhDZgdpJHARey4wetbnrRtmNTzNqe7sDJAS9rPRSZMqJkdQMo4M2x4LZkb",
  "key32": "3h2wFNLLWDhzFoayRZ4wb5qvyFSFzdonfWGEQBHqVPJboQCJXhoGyZCwFzGAkJaBxYqVrARfr9tcysxqsedGQxxN",
  "key33": "67Vnx1WRGhmEP154cfd8tK1fG2xCRHk3HJ6qkGdDrT8sQ7L22n652XpBEyLCiE1sXdFAEb5u2mUUoz7wPRFPsV1o",
  "key34": "5kf7trAJDxQVJ8ovD8q3cn7Hu3Re5XYdS2xP2ZMyGzk7kDGaCK66nWUGiTkHcJHj3a2N6EEYoRops6k4H52T3F68",
  "key35": "4mPQvPmQJsLpTQsCWMg69KxNEjinnugAJnkMFgXokVHCoLDDfgGyVd6zwLUsJQfoJr5p6GAXa4uT9mS2M4Enwpgt",
  "key36": "3JuivdH7hAS5vVF2NPPLfvSAUKXKsAwAKt2Q7P1ntCejexfS3pQCaZyFZPTiuMyE6uGktwBdtHiiu1aRkZHRMXcF",
  "key37": "2fvyPQ5Sa4suKQn2XiLXbvbiNDoPNpK8aap472XEK2emWukM4k35qcEDggkREDvsBuTUK2qTZKx8m9ts4MGUkEbQ",
  "key38": "4dYiaJyQzXvej59buLggULBBLK4osvvXZkjA6B5exccbqvfrbxsEq7EVb9Kv1Mm51cusbeEMMMv5V4GhKMiwrU6E"
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
