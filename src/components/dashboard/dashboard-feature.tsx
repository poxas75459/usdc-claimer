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
    "2GSUSx4R58KTk3JYdqv2Pr73teL9xtXW7hpUWPSKrusoXS71RLLxUC7Ak2Mbn4jLfzgtXrm1hKYY9hgD1xPCdxjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qeJUHGrYsAPaCuH6y8WjzR1GHgcnfGjZ1KWr7FyEuSyzsvyVhnXBaxwHnf8iK7hbsk4De9uNVkXRnFT5YxWBRWs",
  "key1": "4ScfTEUZDRZ4oZFBVPiZBRcF6XdTdkBsXts4eKjK8Ra2NNn3APRgrLbNvdcRdodqvRzoGCpxUdqq5PLoeVktzjjV",
  "key2": "2s4woVN3rMsoh6ReqMPi3AGqAWVcdvuFjEh1BpVWR9qhA7UHxmC5md1gefB8XaekMUBq7ZRh5hnUoPhr56RLi6Ge",
  "key3": "eq8YbdfffRgob8zKARyJY19BomAjTb2jJmY8qb758HScLFxaYjPcV5dsHwsBCFHkMmywuZLRitBSbMQQhzyr47Z",
  "key4": "3UhcA64ryMfUU6hfjZpSa7YhVbTZiC8FRSPnTBMoUw44KmSgdDcsBuZDhsh7BHEsCyFCrjRTTe3VWRAu5L93W3f5",
  "key5": "44nFBwQSjzsNRtKpsn57nQog4iNizdNwg4VoAyC4jkGmsM4aVNC9wBGDhZ7EodyWoUUZxumwGxCoEmFohGk7XZNi",
  "key6": "32hWqKgpwGiZ4VaTWQFghkVas7w5VVAFYQKS51nKxpwKfcDmrAgz192qpx2F8u4ruDAko3xpw8JwczCt97tE6CQf",
  "key7": "5fHB3yu8q9YeF6uaXKqAUvjmQ27VHf4nquTR7oLfUNE1Hn3GbMvpv8T1ZX8B2RoQyszFXbPJFKu6dzYVvGrtfz87",
  "key8": "4HCjBBrDigESV81zKHbyBAqGyJXyHs6rJjUFTFF1CbNSEFD5U3U5g4N81hKEmYmJjiVdvkVLcQVG5PLv1GCgmPjk",
  "key9": "4gyBqwd3AbEJmMxZbatbZQrQprBkBd2kDHYzoHLo9GP1z1T7oYqsRkmDvaugjJDUSzPrijPgWAM6D96RhqPhThrB",
  "key10": "5H6pYzViLtSjNfUT87Fdn6L2Bh5RGUoH8bFwTKBpQxmMyCaTWyYrgxQxq3ifF8asyT8XgL2nXcUziAm1t3PHc7SQ",
  "key11": "5uibAf186P2RAZGKAAVz7R3fyqch1GLRDH9GCahdKWPocETL1vEZxbq1SaHFry8SbTZ6YPPuZxKtJvtGfzHm9QX5",
  "key12": "4E8fpqPRxzQNFC76ymQErEiXkJuy6wvyaX3SA8TbVS4Sik96SYZwCQPvZEGcrsoVRzeQAxvYypAcCoFkM4i6sdZq",
  "key13": "32PtoXxRtBzrULi1Mv1wQt2QNu5NQbcvqm2q1WYMiMsFJ2FYC2wZsZND5WWM1ywM3sbfmugtwBDvCLpxcbFkgD4k",
  "key14": "5anrvoxUCTp8kYwPKw2QKnGgQobAPuLbGTptfNyD7d9Haz8GEL86wFq8jqn1aAoVXAnFkTUiQKAssqUgLic3cYL6",
  "key15": "49z6fmFrLBhg9mC1skLBMJj2sm4vWExeeS6cjdRMiVTc8DAfNbt26kFBCdx3mHzX5ceyP7GVBCZawdV7VF1hvXQ7",
  "key16": "3dPEDjdL466JLSi4NVTFvaMigK6yvReWHEsPnS12CCsyUajAL6xPp56C41YxzkYrkWZcYfTmBqNX9NJ9HA7ZpK4n",
  "key17": "5FUVjo8zdiGCWnwKASu4hDw5yfthEiCjw6neU9n4DCBVRQnTDpunuSXjRqffQnSLNYWZqVQbgo2nizUffRiyNN9M",
  "key18": "3uZGC3LcUW4UbqSuQjj4d7s6WxnGTUPmLkusUYTyPDrzKP8m3rGQKHcbSR31LBpWR3x5tz2wLds6FtdyXDth2eGT",
  "key19": "LZjudJ6S16YB47Ma9hHmuJTinCvdewsC32wiA5yAX9BV2TTmDPieG68pcQcJne9mvxhjoLGb8sreC4XC89He5HX",
  "key20": "3m1usub2kgTCm99YYrmSZft49UpZ1Ey6jE1qJF5KcZzpq6aaNMrUhNZNy2aJbmTorCtXEf1bvAJWQELa4Edfsord",
  "key21": "5f39RgunUus3qztw5eo5yQVRvSHJ6D7BESRT4utMkLR9c3uGPN7kPeHm8USMe38t2GbR37QSarPpVvxFgSmjwhgu",
  "key22": "2xm49ViEnVPtSfdifbqJDgB35YpruSPmPNpoGs8B1vhKWB34AZy1NUZoRG7fSpSbyzhypqZ7vvbMrg4jSYU9VGEb",
  "key23": "2KQqkqfWWWacdagEgWrwzYjF7HHahg5oeeaS2KT7hLBrN2nqSy4Py4NNbk678FxamHsUKnXhtHTWzEs9U9Vm9qX9",
  "key24": "21tab7Gtq9sqkNbMfVCvxtdHWEv4GhoBAe5wRP2nGoGW51qdoqoVhjv1fBCJzLTMh5MfEJkhw6ob8T5Xrhdq6zaL",
  "key25": "3Cpao2unQT6XnafDqZgU5h9poHGkbJJ3dw7fF8v8bm8Qe8AMymgziX7JpuGjUvuLBpJZdEeEpxm6hudm9EqDDGwc",
  "key26": "7x5MYYcFPquUa196mjnCiGNCmrMtmATu9jkfpDXJHmecj5Kaz87h5FakHadpuMrv4JmVeSyVD4KVCnENzxx24c3",
  "key27": "Lmug5g5iMMvmBxC9V3NAUJ4XvvBfZrQCoBfdtNBY1qVg4JNUnuN3G8xqXPHKZpD1cVAtUqWziM6MT8wNzK92CLZ",
  "key28": "3gPx8To9dCNc6MpP3Jh4DHQ8yzMWUNPoJfdsCLwU3QJUd8KL2dEipBbpRW8uhrCN7Noq3XJ9W1Lh1QJ9adv6bn1j",
  "key29": "4vT7XmzHedNkQuoqyrtxBBkauKTEWFz59ecg5yFbFvU1C8PvNmssjtwTty4RL77EUf1ULuncaqW8daMc22qx9n4h",
  "key30": "QKvX4KsgftiKFyxeGHogHZs4THb4Gw9CoYL5tD216xf3Kj86Zcym15PeXG3Ps5vRcPPHdcj1h98DDqncaFAxq7T",
  "key31": "2wXmjqGqeN8gdFiRnuA5z2u8GCRr3eRKDDVF8NNKQgCbkvfcK6V1TKN87w2oqEDyBCUWdPrYqdvobRKQRjJ6idiY",
  "key32": "3vjbHpScVF3SL9up72FxmjLHUVScZBQZrTZtTa5Kgqx92AnzFgUYAEpkJFfwgrfy33qoAs8FmdickLs2oFSYJXDS",
  "key33": "5YAqjiP5RTocTdvRrJTxBwnu6r7hwiQpfQBX2u58AMQEqKpd6ZtnYZ7bnh6sYQabAnEPRokaLScHnYcApzrpjaMv",
  "key34": "5ZJbDWhUo68GRf69Ra1rHeFsBT62szk842HsXppxRun3jcafjgx7VfYKEY1ZXjtAnp6ZRbAwQxH9fuVZZujAfyUx",
  "key35": "3ypC99nod37WT1V2wFpRWw5Y15rZPVLboaz4zzgDGyKgrFi2K9uoyWpch7SvtNGHbMMhc99woS9LmLGRaiMFCAp3",
  "key36": "5zxHoMkc95T5aZCJAbgisqNHQy8WGg7nCvJve52BgKHAZSvuSmP9ym95LNrGk4Mu8egv5G9Yb6EDJPhXLJzifMrd",
  "key37": "3vozN7YYyBDsy7HrvGBf5rDF76NvgXNgSLdN8Y4KHggxvEVm2hvHzYcaZTrSKCv4xodUNFB4t3JJBr5iQyeKu5DF",
  "key38": "5UcA7w7Js3qw4S2he6635fWcFTkjA6LWh5zAnVfJ1qjbDB4QEHpU7LJv3Uug3qzQFTg6CAMWk3xdoz56E5Up3sQe",
  "key39": "2PxX1iRj6kPvoPR6Hbwqbvm4G6BCqBzrMJ9aRvC5HyyLPuuq9gJoZYfC4X5VQ6et3FsBPxm9DbFPL4zdHdSAREVT",
  "key40": "5ETpjL41W2RssiFgn8ZNpXbJ7RXMtcBkNq4eLrsAERXugKT5NfRS7fprmCukHpNSm4y8am5wYkfAXQZh8f11DVZS",
  "key41": "4rLUqJ5nThbSHzkuJDxhAf2eAmHnqJuCDKc6BfZAZMJygTtvfiZrkeFjsQCudAi3rapCKLyixkHapLHhrGpQgSXT",
  "key42": "2ywnCe89gnWub43v9KiNqKaaBSNYo9QLkN8KZPkNYHypCTo7uYD6phboTRV9F4yDQetrqWwsbXMuALwcojRBkaLS",
  "key43": "2WoTFyoyG44uWbLv8MCQzorvprEMXtAWAfgMH1qAkA86sFpAvT8ZdtPqcvUMdpsmYHPiC18yGuWQLgbB8GziTpRX",
  "key44": "5ahkHHJF9VhcqcAcaLXzWJaHWNJjfPwbHwzKo64iNafTQQz3UTZwYzoynGPEp4bpC9iH8NyufBdmJaevsswGBuy6",
  "key45": "423wS12vQnF5cKgHBYMcXMzAJFGx4MC5aDsKyMCewT5tEeEvdroEbAJMFhdzroeEZ9ZcUsUm1AJxUgsMUg5X8ZNj",
  "key46": "cifHbrkoza4PErdqsGYGwzFxXcfh4gQrUShRoaFLkp7wRnTTDXsPsZeAEcGB3PWJY3tvkie5FU5x2c7JKioBJoc",
  "key47": "xcp6GQcaBx3iQn98AYk29Jxdorrioei5iuaSjRHU61Vm2v9jNwaiPXcEhGHmhZejgJ6TjcVVqxjoFj6gcUDz5wN"
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
