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
    "3aR8BGvUg7bLGSHMEQ8xRZaTwhJbAShwaK1Kx5ZBeu9GhtfBwpakfwwKDpdNys27Jia3iwbo9jw7ZCziyzWsRE5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nFvbFj83o12mtA7Tici7GpHfAdYLTNQUpczxQvuVzuckStC7vU8ko3SQBDL42ViBN4cDqweA2YhcyDpHzKEN2F",
  "key1": "3MDWnYxrym3Vk1vSB6z61ripnhRzP9kXZXjb3SzgPxLo4R8RZKVkEVmTdhQccELdQjUG1G2B3ecMqmVLqWeD11u6",
  "key2": "52uodmzPEvKQ1RFPuxEaZbp8WejmQk738ki2uo4gpuPUmqvxr2eYA3ad4cpAcGM9n4LezLvES94bWwUVxSykRVk",
  "key3": "4YYGUWZC1JxogYX9kfB7adaFn6WZk3z3WuZScB1cGxJmxwzzUpdQngMu9tEgWwhAuniSRZBoukMZLLr2emk1mx9w",
  "key4": "2e6o4QrZMXoozcwNRRu8Dfxm5mQYu3kyb7iGuNQcdYhpHaDPiecMFCTiRy6QgHTvUY4XuajYrtVwpbUjADm8euUA",
  "key5": "3pZJGpwSMmmjDmj5TQ5czDpewhHC3doBB9m8oeTRda41JBbrdPj9fqpcDkWczdZ2AoACKrEUQi9XespMiysKAcpP",
  "key6": "4h5WJRPjuVtLBjnY2EDrimnDQaWniNNLExUZw6ytSFYQV8yhdtcFM7THMwrSb32Jr9ov3te4kRzRPxNPVj47f3sv",
  "key7": "4KaoUHrz43DiCdrH6pqTWWnMKpbCFqLNSeBpnLerG7owcZCzifgcezE925bNSgVrEwWabKPeYKAJ1rc4F5oCLVZF",
  "key8": "5vx9hSQwsRWvV76sHaTAT4i7iSS7YNCa4DP2WyUAEb5eYbuNSFo4HntkufUWtoH1C814XNRP4hSTg6ewa8nHWQSQ",
  "key9": "4FG8TtiJkKz9JtfeN1cQaVNAHoet6HzLVV7zgKG7xyA9HnspSgcQuXz52aSWSUHAma814K4VHiEKXvLh1tW3bx6s",
  "key10": "5jaQERWDQuxUouGL5vbE1VpE9G3Lc4Epc2mA36FpderkzLJqprQzH3iz1kFdDEWab36k4DrngiM5PgSR3WVKTNb5",
  "key11": "4WVHcPeV7VnPf5WoondgkMHLsWd1z5WqkAEdbobFKrNXeF9Gz8Mjm1HZ71KCTmHtenY16B4DFgaV4YN3dpGqrcAW",
  "key12": "5LL6ViqtAamRZeCbmse62ypsLztNFbyPz6mTJfXGd6jLnb95E5W3tT53u61KxiZbAiQP2eYGhDcGM71XeuBw3bcz",
  "key13": "5peuttFp1uWB3Y6aJfjvNE9SBRKjCptRV1HnwDXUu6Q2FC1FzvD2fff3Hq3vQubEJHAk4ehDK4pE8hcJoSRrxYri",
  "key14": "2gw5vHvc9qZQZ1Mp6dmY8UWWYUV47MyN95BvR3uUsGLoEDk8hqgUrtAf7jZthbAbN1GKpdVQRrWxxc5ZH3iX7cGW",
  "key15": "5wRTgvLeH6XpgM7gpAYnKe6xfVeg2oDPC2dfBXkSW1PNR7eNFtkFMut5SAgnb4J9MW2hUzjcoUubCByAsKhNehX6",
  "key16": "43o6BYoP1ssF13zxEJMMGwGvZ1Ny8meYZGqNzhSHxDcSb1ssJmrAMKLCdEuLtMAkF4pcVdKsjDinF4jzdazfALF8",
  "key17": "3FgYWp2dxFmipyEwSv8AqbYrWTpTQQ5LyDc8SDpPWLmQMNASVHyZcnv9hqThr6DGPSS4vzSNu21GKNTvRHHNEpvF",
  "key18": "xUfhCdMkaCLLb8KzDM8KQ9qfieSGPn387vuBz9nYsGotJcmNfpQwK1bztJZ5d3NHYV5TwKssR39JRw1DVLJTgp1",
  "key19": "3QB9rADoBHwZK6S2vn5ufPycCQoXHnchBbKemFBC9DNB2efnhHmi4j8ujG4EWBVGQUw1CKH9GBYwZ6kqqwqA7jEr",
  "key20": "2c35ghfALPdySbzEfJA44vxoXafaFdD5D6Vocw6tpi462zrfM69pznM46kdKVXweP6sW2Z3g9iLXM2FfnvZvEuYm",
  "key21": "4nsAbDo2UyQTxcwqWSy27yyPq3VVth7Dd3eyd3XpyCNHoyWmiL2ed8HL7BZvNLWVKq9RJ812AgjTxnKKuzraVzhg",
  "key22": "4yRgJF7M8Mg2GG4Q6EaRp5BDNHAg3uSc3thT2vfT23gSebNFTY5FFk5gr7tsqVBueo3k9ewTWJnDiNs17Zuv2pBD",
  "key23": "28hJT33fVEoEeGEuL9UNZAgK2QkyMDe5fBtZ8UcFQwTic6REs91cbP16nhqQrMN9dBCxbZtcrJjhycvSzg6BNUb4",
  "key24": "5gL6FfLK4gfRpmMfffoYNSz6PyhZP3rNzTrHHnVD2SULz9KrirykirQdkXHyjDsCWwyJzNGaMuxBzxCjbrFMHWKZ",
  "key25": "DffMHxFoVGEsLiNQEcWsuw3bX2MLLWEKFVjkebivacgd1RH8MfoK5dFZWDDkUgu5kJVxTZ8PZ1kLgk7PCsQE5G1",
  "key26": "4mV2be75rdaGz4jfiRLjKF4HsAexLaMXdwJSmXdjTNLhjVcM9jh1BxktLipMB91dsWetWVf1VUJSsGEN64LfoKjL",
  "key27": "5okC34tVT7wvtJWD3RmZSzRCk5ii2gwikJhWQT5izDEGNfdqZaeCFb5XfEKJzmTvHtDGf3zGqBswxSW6w7wH5YhQ",
  "key28": "rDBYkRbgasso6h3RBphiQoGfFffEkRDrisCgRuj76zKJcX3yJnyNAG7Jp9PwPS5hHXjTDUzJgZXZKpcauod6sri",
  "key29": "2xs4cw89mpwfSoWPLDqjfbJTu417ddRTG8F4F2dcGPDrEwqUncZ4QBENzE2mraJXJ3DeJ7Q8e13kHwNcaTRbfcS5",
  "key30": "BqrRdp2Rs29rkPMtiYErBCekNXPidx51hX7DZ8h3f9BQdanwJzmt12EFXuPZoPBw4bJ8ThMMFdTSPSNsGBAJjuP",
  "key31": "2etEC7WUUeybsiDQek6Ro1XwiymenVbHeZKQFG3ACrorGe3y4k5bT79grP3fjHJKea3FtsKq96PQfiuDpnMnh9Z4",
  "key32": "4NUnRS5yxqibf4gZRV18gES5xwBB23Pr3quTTHDEAuDkPZQwPwiUGJfPBcE9vY8PVnYKiva64cH1cbCjNVEnGdGp",
  "key33": "3fBXBhDrcFacVE4quGVc6oX2ZBvXrmYaPC6wQKTEQVZv8NN6qzdvZg9R3MgqQoZjGgC5AGeCr4a3AwXYq3p9G4x2",
  "key34": "Z8LqDYLThgKzdWTNhBKJMZdwJY4QhytYV2UQS4SM3dRKWXQ5yEvwcFAvmFNyQegqygNpwU7Th7UGJzwaj6Mo31C",
  "key35": "2qtxTP2nSwPLhRQnZcgm5tZjsX2sSwC9taXqgBettrm2RreheCGFkkqAtoT2duZ7zfroMzzMZXukfg5nmCoVoRPP",
  "key36": "LrY2LojN1r5fUUXfc1xd4yzn61wkYXzCUTLJK2paLGpnQ8EqhTnxfQgZ58p3aMhwVNQN7i6nbFrgfpe2KzrHJyk",
  "key37": "5rAPyhRyPmeuZuBWEXjkkjy1abyyMntVS2gKWk8mYwZ6vGe16ThYUQJv3NXWASaCmyyAV23DpbP5FWviM9E475P6",
  "key38": "5n7hGpiAt1Wjrviq3DCS6WH4TkWxqrFJaHkqkyrz57VcExVLRpxpcWuPmWeAkgW2PNkpewdNYDyh7bg4gcmJr6yF",
  "key39": "3RfuQEYXry4dbGsXHL7L8tYMNyRvgidp6y4KQHvnGWRwMTgNU2ZG1tm3Rc2DT5i3JPmShtctU8nBHeD7VZaSD6Lp",
  "key40": "3jRc1ZRw4HBuwTcNo3cwCfyZuNC7du5GQ1UDsFVbLfku3XWH5Y9AiMDrrpFds4xeqSStSWjoBYfNrwCydRdojY5N",
  "key41": "3YUJcpo164LG2VEWNZfcxJsqcgHCMmyB2QZxVF7HV77hGub7qBPpbMTE95mrF2RWuHjqefzfqWHe3jFHSLQmLKqN",
  "key42": "xDG25yG7p6tnjPjcFsC3AnDLKqcQbHLq6n9XBo4KAkFnoMuUsC9TDSyuMFoqnURQ59SLDYnCX6RgvuuLhyT4xHE",
  "key43": "3G44gB8ahX82nTCDXPMDmSQkfUnoc2RFmKDFkUCFB8Bs1ffqrtKND6bf5jAEMeNXJfDwnrq9URfrp27QQUN2vFJc",
  "key44": "4Wu9gWvj5yUGhNXyYqn6tehEWEXC7oVpKgeMKp1xgEbdWNV2G38BuhGTFVwJaUR8ohZEdhf1gQ5y8aaKy4mnKAwp"
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
