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
    "4Trb91sKk4egGKS8DgCToaMDV6KgvBi8MdstM1ea12sqPdDh8mimYDngR2xLYsprHb75ddhpxHjwDT7uZmTtvWq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eftsk9Y4epQ6L3JdYqxnujEbYN1c45WVR9rwWn7T2JS3uR9TLSQ6n45dGRk8ybFbtXUEWSnnnTz2Eya1bxq2LuM",
  "key1": "2rcWmgxe9qhBAYPLeVjtu7Fjb6Yz39VvzZQzLLADoFR5XGNjdHe2R8JRrJqFd6JFtaEAzchkJASWmobZw5smNvgc",
  "key2": "5ZwTkH2xCzTjyioEJ4dQLnDuyHhQSnhPAKhS77wc4txkfJ9ssNJiNeRqxkySzrbyp8aexaCx37HUNdbMXBP5gzXp",
  "key3": "3ZjkyJdogpsthk9Tgskgh6AX64DLPZEfyZoSgTAWstKCuvAPPZJEU1S6H7NGu3txr7x68w6MAqHMirH8UTsD5aAn",
  "key4": "4Dng7uJdKpGoZPjpY921GSpmaaLR6JeKdMQ1sAwTxTQFpmWZUbu3wiXQnW9xHfZf8jEBeaTvsS8d3yX1k5BKkDkx",
  "key5": "5VPUqX5JVShEDBQTQMvTWcbpgZ1pU4Y31EyZ7u1UeHr6w1hR213ZcU2vYbfgkLNhHkHEJqWotszaCzQu7n8xNoFD",
  "key6": "2hCivyYhkCAmceTnekzEkdcKWsUhHF3GNHpBqP6DCgxwYMqdHq81ZBPUwAwgyuJ6tG7v3KFq7MKiZ91doiGeK8q2",
  "key7": "41bAd5hYphZSQvYLQf5d8jnQkWUxb22kxRynJzRsfxKSyDimjC9h4zZ6LbyuziPjpBKBfVopRabjqNMUKmrD7ee9",
  "key8": "NYutfu8dQsPfdQDE1GSghnUGBoApM4wt2iBFaAizk5orhHmrSUxGPpXqrPAELkz8L7MqiUe37N2tZRJipLPNL7V",
  "key9": "5wW5aHn5WTsFHeUw7zhXrooafioZ58XjVHvrWnEckE39VJGArzwnyNJHxMPE27ba1BuNCWVgQywWyokWrxc1cpJM",
  "key10": "fGqVPCMpiRTqQ92UdX4EwisBSHbRRDJ83c6TGJEWwmL4qtcKMhRqh61CiT9yRFxnssLr2H18nVtSY2f2CaSDK1r",
  "key11": "453TNewBuE93wvoL7URdyxJH8yPEuiYysx9FGFan1BSomrMWAZTRc2PNaWQh7a5vYQxfHxvCfKehY8E1p619c4BL",
  "key12": "TLfmh6ZQv16BLw2MpzVQrQDR7aNR4P56jTyNJpx8iwCLjJZD1aqAk2c5u3vWoHGT7r29WiH6hzAndBSMP4MMQ61",
  "key13": "ikKaD56qWmp8aZz16gNZKKdTucaYKZYAWLb4E8Nwj4REisWGUsZLTnv7gFrroVMun9uJ9u3kErcWv1n8DLPSaZ7",
  "key14": "4ioYKnRpNrb2nXqHYVTx1Vvqvv4kUH6NgRrCnczmZ6R69KVbm4cPU5rfTyAGKVjtvaUzfjtjn3gZnTdUoeFPL9RK",
  "key15": "cfiGDPqqbpmnv3xgrw1mBEVihxfQ92pL2wWpNNeHEakFVWaVDxcBDA7VnxCModkRs8ZiL2tcsYTn3Hi24mrQyZa",
  "key16": "2rscWvugVui3i99xmctVqfgJX4dqCRPaGbiJvhGimJnNPrffNT2JnQUetwFjqbci16XDtHh6NtFevxNfiEAAA3KU",
  "key17": "5NrTMoutFrZ2yAz6uLxEgT89eMGPbppCZtSpwn4JjVcfbH58yxGDqpFZdtqmWuu283An5Mk3fvG2oXUiWRt1pZG7",
  "key18": "4msrQMmPaRD1Qb41eNG8KbYLnSLkQnkLVJEpgmxKNRdp1KNEmTDkk6fFs5tHrmT9NwZPpbvGj437UQU89BdewWkC",
  "key19": "5bygkhkCan8Q5M2TrxPvCKWjULH3SjVVeMu1K19T89CX2R179GjEb8Rqwi2ecd2gxAuXYTgEfUPmfhKbqqsAg9bF",
  "key20": "39eLPaJHf5VhAoQePDsUB5QkP6XTCww9kTnBWnsdrC8GBtnVqWQN1AMA6xkWiY119M4rk4hpBQb7BZSDxRoeQvcw",
  "key21": "4WEMrug8TBBUQuXBhAyXf8bGiFU5nFQBw1F5Myn5a3nHJBGx347nfYBGxGtHKucAXAx6bvtnPMjKRKrcU66pvsbb",
  "key22": "5LZekvGoUHhdKEJvHYkDf42WF9VzgzyJ7CBozb4anZGVywgrSXZSjJ7RiacnH5vjMVgRthwKey4UVAo3swAtRPqS",
  "key23": "3PXx63YeBhjRP8yZwHkmyTg6BeJGHnco41LmiLXCSsYmbK8EMAPxC9sRxyEaV4qWzNphrJjwTvb8K8E7FwcUYrnT",
  "key24": "2jLydmbGZBGkpt6wMqHSGQNyanC4HLUeSSTFMFG6LFmj1jN7V1zVAKPhbMs9ENz9F8UtTbGtfk4vP7Muv8oQ7HVr",
  "key25": "3Pfw2euCMXx78W3vdULNxUjGEgYnZEDkKcbtMZ4pmV8F4GD6QtDMSmscgm9MKhHmEENbD4s27LGyxC7dRKecevnv",
  "key26": "4jQUr9WcYZKxBqTdATSy95kaDUfNTUCV3vDTPSwNZj9m3TkVV38oEgfpN46hCWZyzNxQ6Bv2znv2isCKhD8zBHwo",
  "key27": "6mhie7F5HopExzr58ucEcrzoX93XbU9zjR8KvTdhrsGg8yM86w6h9Uu38SAQ5x9uPEkfFdooMMhnNu8SbRKscAc",
  "key28": "2diYWGPch4AKiNjN6TrkK2fwfWXecqchpy1seTZQQmynypDYcWWMb89XwLruVzB9Rvq3mPNGURe6oiZUDkbktNKW",
  "key29": "L46s8YcEiEbndaot8kypo2EB9CXyh1Acr8GsLMbVCoAJYNCQyH6uai9p3u6Ju7bsTRLVNAJw585vFJoSWQiXkcA",
  "key30": "2FKGJwQ6mjoDAEEQsV2qKb9TzDvezAP3DyD6nSYozgyCAZFybsGW3dW7fcdWqcdzZFoVVAxTiQd799dmDacAPUiE",
  "key31": "2hSVDkG6BstSZMfbNzwJZALDMs2iJewR6Xam1Rt3sPFWgxSmvraeUaCm41JmAdDr6oZUVmsDnc9aJhN1UaWcV5nA",
  "key32": "2zPD5ePCY1UvBucHebHW7CnbACEP2KXh5fpKvVTEpU6E1BtkMrqep2Wd976WytgpUtC2XVzAxJ5NMJG7k9FumMeX",
  "key33": "iZKK6qk1oMb6vk1Zpp6G3uufzbjMaWT8wyh4PmJMTkxv85pPFTg3aeu9xtKu4MiGxKnVWzWo84GwfqBFybroSh5",
  "key34": "4cBccqi7n4nxZbyaUBEFdQQXfFEtQiCT6voommSEzZ2o9DvTQykGAAb9go1uzTq6jevkojgHFGEBdFki5zAdgwdx",
  "key35": "dXG7nhJASB9B2v2HyfAGUDjXbACVSeLcivuUChXrwKSWmixcGLhiqxCCgB4mkMJEktQsnyedsMvcYZSdQmMi4xE",
  "key36": "simgB9bxtVPKSxFrs99xGJ3YJ1iEc5WXxVXhXFgRcgbnNiDFLqPH973PGXkF5XgX2FprGkcXecJXpxJekM5hioQ",
  "key37": "3S546zGJFt7U4ghupFckQbPP9Xo7rNpZcUXKao8BQpWbNEx64AMRvqV1mJYG9XdpjkN4atsUvuYck9hHb2QgrmyE",
  "key38": "5rG2EVzbmgS9AAdNhghrsf7ZdqWtWL1u5QbyMmWDg9jZGzyvqkZG4heyw39uE2KHDGMaxg1x4EDmT4mYG2iWYJYr",
  "key39": "nqCkQKPcB6T7u3Siqo69atvJBhaYCSHDTs7Kb65QKzouZGB1AKNVF6q8iKMs1jveRx5vpyxxgkXNeWM3VrxBqwW"
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
