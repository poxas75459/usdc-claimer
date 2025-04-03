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
    "4R8wLN8Dnd1YXGPNktfGLLyv5yiRjNN7EC1QR1QMZrYGHUM9N7AMNgq2dAsdprUD8e38njiJLqbjZD9uDYofPEpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v56MApGuUHUf17MQQDAW2pS93bMyYgrsa467AqQ2ZpALiCH6fz58omCtg2AF6ij2ZXbSecRHkePVZYn8tb3eTjX",
  "key1": "4vvEwscZtJEKEsmvd61fyp5zVZMw626vfeMY1v2aBfLiYrxXNL8iJ1i5DVgMfkuGhgJ6PUys32iDNGoVS45q9rXT",
  "key2": "3smi2dcQiRbsPBBoNpaTUxgCbPeuRfEiq4ukhvgJmDU2Ybft4ecLnm8HjxA226jwWWmA64JioSg7SbbmKBpdhb9P",
  "key3": "2Wu5jZfD4U5RefUPKX1q7rFbaYn9H5QbRhDZH4YYt9cZebJLJSEVrsJqNwosmvm3EA8626e6CqsADEh1XravMUds",
  "key4": "JXbyp2YFtASphMmRyrpGcLqMG85Sa6UPHog2VPr7FzFTz3YSUxaURBg4xA1B8gnf7KSGcZaLNnr29VU6Gefdmd9",
  "key5": "dpBmU996KdzM3fdz2bX7pcahxww2J415Rm2AHrY8cUYMVpcz4Aax8KPYNHKGUgVS2sQTcrpAzvofQ1D8ULQ4Ei1",
  "key6": "3RyELDDKH23gdMayQ3NpAJJh7PGx4xm5XXgT2PGrcgDLZtP2yGGeYiWZDtqAa5sdT59wJvqqEfruc97YNN18KY6e",
  "key7": "2Jq5CPow4di5gXmXGsv1QrTV2iUJXQBkdFn4Z7W4DYNLEWd1j5wHGmfCqCPr7aJ7btJWUXV2kM6KA228bNjVhDra",
  "key8": "3acLxgqQXQxSFweTDN83QwhtUVfaSX9WZUcYQujBd9grUMSe3QvEviabMUDsLG4DrebMs1yf7Vb8PQwa8uvk37La",
  "key9": "5MGGxmVEtYPSssWiGqtMBy1NjcYsNnhtu5u1SgCbtTpE4Ps7yt4Nwo2K2DGK75psyFxNKQDVTX7MTWPiH61RuVbR",
  "key10": "5Shcey4su4LLJYVFm2yv14vR7zmKD5SjdJgfC9Qu39A2vQ9xTKBhxnv7VvmiZYTi1duDx9bS4GsE3nD8jrkRe5yd",
  "key11": "5jSPxXXUHMf4MNeA3mJh6eoLcR4jCUrYYzrZ98VM25shByurb6ws9rMX37ZEPMkHR6Ycho9aFSgvRrtVSQXs8Cm4",
  "key12": "5qzihWnVw1ge5v6rp6FjLHJDW71WEEkYCfQb1pacJTDi2siuZS32zeFhmq53VhRMVEfAiNxwbBdK7iqLcqc4NQMJ",
  "key13": "5nr3bSBGJCwyZz6eqWF1G5cUEZFuuvF6356pstNcinTxBsZBxL6krkW5sDKDv8CCQds9twbcTh5PUSdR18UWvaux",
  "key14": "6j4P7yXVEuA1xGdjvGN2XjmTEGuCamQ483MawcVTBg16Y88HddoybxaoKAqdD7D4wXrSD7UX2ntzTA23tNcYBEZ",
  "key15": "3KPuw6PLjGa6sbSAjKjE2KNtQHT1MDbGa7pSEzW5ufiLLXLRtB3UNfgPPfZ94kYGaZC79cQXBNa4Zc2LP9EusFxk",
  "key16": "2QtLdbC9BbFuQ96imBz48BfXpYGfPQLZink4Dd1eV3uhQLuwqFLcG7My8H8yfxpsHtFgmfRe748oKPzZTe6sAaPL",
  "key17": "23YHTQExSjw1JTKRBBjey9gpxtzaGx265gS4shb7X372aQ8qr6XmRUNrtLtCckBTzRa5CDL8Sfr65vxRFHyRG8BR",
  "key18": "3mWhAadddea8APxPdEUP5q63Vsajjmc1wsu17pHg8sDZLwvf5J4K1TkMdiPhbNzmau2y1YJMTA222MUT4M2XjK5d",
  "key19": "Crx2Se6NXHkMCoby2vEr2kZULETzTSn4fmXW53geDyPJQz65t7rHq6Xw7MnZViVuCPqFsARUVohnwy9c9V5pD8C",
  "key20": "3gqLSM5k5MD7q8p5vYAjDyK34MeYh1vtF2xHF1jYB97KeeRyGnYy8vGq9tiV1xooEheCFHW5zRZpHfCwa4YqiDbx",
  "key21": "51LTavKPWKYmKnr8Wt3RPo4eHS9Rx8pD2LHNrsjQ68qUbJAcwXhamx76uD5npVQ1ccSDoAbjqWgy5yq3tCPSHa1h",
  "key22": "4jborB71LRjTG9AKKJhya1146NAoCZbULD5cggWkWYs1GjXVr1UR7ASwMrXtqjHoBhZYXpCZK8zM8xgYuTM2yLas",
  "key23": "2jCozPUfRtEg6kTGyoLPGvCaX1FPdFDWa2wTVUVWSw85x7gtfG83QkFKf18jHVBLB7UrA8RNWqUQZcdKfkKsQDgQ",
  "key24": "54nLwZ1ENCo4n64i489vJGREkb2vAtnQD2vTfHsfuUq8PrkNC8Mk1r53TjK4GcNq7w4b7mitTJSkoeFVXKteRxTX",
  "key25": "3p6xJvae4YX3zqHHbMwLPWmQyezKGgKRudyVKGbn9zWFyuXyvnCjtwiKmmhZ4DNuFnq8AR8arPQEogophg6aQLz",
  "key26": "3xGnBSkXq8xTksQ65YZpPApF4GHDKoUK64zLe6C5r7ubiR8TKDV3k7bfvRp1tqZwdtTcJxw8XEHeRnNZQcq1LA6h",
  "key27": "5vsTTceVhANrrEodLBiik5cNQ4bbQbcc8PNCmsQ24h1rhSio5sXMNTKqVuV2QTVEVqMptAysycYsYegAAANfM5vj",
  "key28": "3oEJ72JAStonRweVJx7EpfVWxSj5mCXuNXUN9YyuFWq3fKBTYBPWfXvWnNXHPFHvs5wyHW6qa7AKJpa7rbY7JCDn",
  "key29": "4QMxzLWyGUVANJ9bYCNmVapChgKc32cosrCoYMJ2EVXXQMxYH2RRPyjXmMqr7TxVAaHE6FgB6WBe3Q7Fv5XuwniN",
  "key30": "5UCLvn87vpHHdJPqBYhGAR7vb8ge1cTDYcYfRLj7LUxnuDjaYLnWjZPvhAW1JRsPjPv9DLHAmbB9Zgz6veP6KDjv",
  "key31": "53CpQ5nuipnndjMHRCTtFtPmSuXqEQ1zrcojmLka331iec7mcsfHCQ5HL41jvuMB1p4GMg81QSpo2LoRYqZYbgk1",
  "key32": "wBQW5KscsN1vJraJXVyD95cLQeA8SLXxT9AgqJDPZFB5w38t1JRLaZ9SSvuHyRpUp84fvhagJPmLpSK4aN17yjT",
  "key33": "2HDgMFhw8LSBb1jEJrFFgAmWu6w49rDKuXtzMVuau6SdyuKCTJc3rk7UegivPUbUJgq9YvCEEV4WSHoxX8NJ5ZZb",
  "key34": "EuPxng7vH3ixszL2suG4zsvv4GMj7cxWSqGsysVNNXPep3im1B7TUVD7yTsrab2ZuPZkbNwAU52u13UUwVuWg5s",
  "key35": "3iF6Y2MgRW8Ddg2dbjWUhyn7ChC9pBadh4EoDPErARUsGfyUEjxb2mfwkG7Lmm6AYhC4X21sWePniKekfURSaU2e",
  "key36": "3jqWwB3vz3SdsAS25QHHXiEYkZ5Q78hCosiQ9PM5ePLZ3Rc7P2BSHU3DLiEQv5bEUUgxuXuRe1pXdUGRp253iG7v",
  "key37": "2HRYXLqqDfiqfQFNoExQ8Giw9hWxTQLAnpCn5i5YGk6H1UfRs69S53RXofPv3MgeGH3ZZC1hUWgaCAhRxbJXR1Z5",
  "key38": "4Uy6JeDTAcVMxoe5Jd73Ygvrt4qSsTzqhYM7MGFQ9Br1GDMEbSLuBzqwgKaZCyqxRzvKccDgR3kL7a5BjP52SQXx",
  "key39": "QZcJUttdEJfeRVsQZTicYMCKx2LsBXbBJdSSqvvtPQNXZ7CvWaFwfUsg2PqVY1chshKDjFtvpt7UHXX53gzKjKp",
  "key40": "63vUy8L4P63jJoy2qegzxzej4S94vEA2MsGv1tnkyqhjLyt5WQkC3N53oa6Gb5H7Us5VaS252oTaoLT2pmf7kjd3",
  "key41": "3gMSHKdtsi3788uWjKJzUWM1aXeYqe8GGTmevz81xzc2S1C7SoJbBQui6YGfWEdk226tcRg5hYZmWcWNNzRouqd1",
  "key42": "2FFumpPSd2LVAK2uBzGho3XrbqUmx6vkiKwuG8Hm4SAAaJrBXLvgU4r9FFNrMQUQhF1ms8GJX73KQ9fHgQ8Me7Qu",
  "key43": "2vneGfYK7UNT7RPjXqKAtFofLiem2daMRiQcVU8x5porKUVPqmKCbZxp4KUzTrDv81VQZxcCS2fQGY8yWoDUGD7D",
  "key44": "3SMwZ8eFzUQQD7msRYmpWY1Y8Qy3hhkHBA7UvktFMhG4iV228an9Nai3uzWx2LM6c99C8sBip8tyu1MVMfxeF5gd",
  "key45": "2WyyEVn2KzrArfHqaj58ARhnBt9AbAREHhPfpWkHAfySRc9MgoL4DQiVY3sEPqcprjMJEH2uoeLRUji9PK7RyoYC",
  "key46": "2SXNvv1T62YpWUqsXE5tZV15M5ihBPx4pB85LDm7mXLwxnZ9dZUKK78Hye7VFNkkDdUK5kiNiAdLKJQAz7RpZxDA"
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
