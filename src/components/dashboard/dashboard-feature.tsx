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
    "2rJngb1pSPyLCqnRfbhVovUvF1ZcCqSQKhHoeMRFfUGKNM3CtJi43RYVPodQGuwHHjX4qrxCCvdjjVqwPVpF6zmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rTraw5yPnKgdyEpm6SJ4RVS3vKRuWXoSgMvuDZf7LimnCK64GnzETA5uEQUwVetU3ykRsX8nJMMp2B5WTwNAhW9",
  "key1": "2boTPc3hcZtQXyV3mREsR6vULYoNoBUey1BTiL146YNq1BcFeULk4o4nSkohiuJmSw7dNU3dai3ECPAmekyYR6nQ",
  "key2": "wNGK17nvgYtknffLcdSo4w6wSVXW4nPnmHtHNykzC5naYxsEvKChav9HgTiX8UESy914TbsScMjBZnvPWam58Ph",
  "key3": "5Q8ufqDjr45yKxJPxQa96LzCkfzMPcVTjpu7iXkM9TuQ182yiWCxqyxgr9PoRureNmf6MeH5v6yeNKSLyJoRmFV1",
  "key4": "X7GDX2ubtWzkpXnno7fY9eNRSMXHGLUgLATAStXiZ7pbzePR15LEs81eEwnBmwDEq7XCvJmPhLwF5TGDUwTiNFw",
  "key5": "5crJ5umL5M2KpibNDEuJhynmVUcRwZsiE9guNEbze37nVwAn6qEwG3iuAuHjEx3y5KSMND6cvZu1fYJqHnvuB3a2",
  "key6": "4t2nCSHAbsxnzULbdiVECcyAJVZXWyZ2WwG8ESzr8rM8nByZKs5bUW3PFBduwzsq6xEbreL3i2XaqV2oQzb38nF7",
  "key7": "4tYFgHTJdt4zxLtYEzNyqjbRPtxA7Q8ZDE3bpkGtCm8V3Dp1WmRE6Wns7p5kyrGZMFofL6eNiTbUAPzh3DPDMbH5",
  "key8": "mVx4a8EubsgQT1sFme6WDPx1PbGzSES9NgHwM9na8RJuY8RNAvkoemNbBvz4Dfy4DTrJX87eDuoijBKSkxs4czR",
  "key9": "2dyQJB9EvsQHapWshcVnJ3LzRiSKrLkSZRiS6fA6TJ5hw6LoQcaUWvDDLLuBHppDdgP2nFi2r9yMwhfftUGuCCrp",
  "key10": "279cUd4zXkbv938mZbTFboZ67vxQ86aq2KzEKi1v9DDgXVjG2V8PmrQGHHNyAsppAxuF6PeUqcdj63HDSedSUNCd",
  "key11": "wX8GsgWScBts4gXWhwnTD59ZLbfVMM4N8ojoUAAvchzF6wh6jhQDjnfWzbXVaWE9rESREB7XV3BcWG65zYXBm8W",
  "key12": "5AgHhAXJUhc8QENqsEMVoY55UeEjanvckxodYvZJA817SDVBqUHhVy2QTTZCDTYBd6Zgqm6fEpf6sUmFdbKi89FB",
  "key13": "5MgR2oLZpuY5K4nK4jXeCzcv9p4Yman2powwgTJewqA1ZToTgz6ZmkhcXfac4JV5JTjypWAo1aF12FQFqP1epKWL",
  "key14": "T1kSF369dSw1WZQynHKR4naBRwvpf5Nhc1YBiM2qojDGdKYLn49x9kXvHRYJocfbhPnHZEwV9mVzpNkv7iqxzGr",
  "key15": "3f9ohQCAUxTKPmohwjQVwFcdaL1WGCLFkrhGGvP49guMxysYw4XbKkqyTv4j91Ndww93oQ3hCv9sdhd2TwXhiiqH",
  "key16": "mqSDMzjCW4XWt6KjUVgAtob8oNsM4RzehZLgqZYSxtNfrRuPh5JtWoEbMfBbeGTH85Dctzs8FgjPPrjuh9XWqzb",
  "key17": "3T7CRanX5entFEq1hMyzm8HoLCe1njqwpsygPHE6MTi3gyeU9x6pz1G71geocqdE4gYVSib6v8EjdQkgKutGy9s",
  "key18": "4oscncZ9WAz2a2pnQc22ohuxdw8EEV6KnPRGq53BkqTQ8Yt1mgAzWBRdLNFknnv2A9RU2SdCfrMR7T5jM9wJQZry",
  "key19": "2f4QomdJT1XfYUHAB7fyCiRGPgQXHGCTbz6Xz3ypTXdKN6qnV7q9YNeihrRjbmxEQGmVvjXeD5hdyQYWb2NqLqiW",
  "key20": "5bT3YJPtczEHWSboDYuA4KrxTT8XT7YjzotQkTWTzDqnqG8CeGEtFzRyEb7K3CT7wexk5ZAhic7JoVxesAmGfqM3",
  "key21": "3gXbGMgP2E98yc3bGjdPBX5n5ic4BrYjoVyrjz3zsk5FMQK4h896XUs5HG2y3bayBPUsqSGQm98tAth9dH4anCZ9",
  "key22": "5Ca3kTmY2MZDwR3t79bcA5zT2MruewQg6hWBwPC5dLZn7Ai4yaqvCLC4zAfPk5gxfU52ASrTKnmtGWoXJHBKffjZ",
  "key23": "4TRXSxxSmvdFtXsNk74chGU5kNVRKt3WyY7sZBNingLVSunXAqBmq88SEU43g3L4uujwphoHipS12KKVQPo2xyTd",
  "key24": "26Jtnca6weNaEGTrUw5paZqcSsMzzMxUvfi9ZzSFSapGp8fjFgadjR7M2ZMTBCW8TcmWFoXi8jAQHVRpVjYcbdus",
  "key25": "4vyNTi15eK6WbkRruanDJp1FSTTqzu2g3shjmq41KY1YWH3J84wWNN5o8LvYJtXPjCD6EiiYLooaReo5MfwG2hVR",
  "key26": "64ZzTKLFc8VKTL4QNV6g6Vu49zW3NNZWLuobfT2uXbJ2rCiR7Sw7MX4HgbZA8d2nGbb63ejo9NKEetzZp4UqGcqf",
  "key27": "5p5bRmizeAPne4rybDaFPhpdWMaFRw9LHnP4gUy42eoZtKTTBA3URyieGcPqNfVgrsbGfT8VtcmQqRcSrGFVJhxe",
  "key28": "5JLQ2ss7AneAg2iihrvPEs564f32z2eN8LtXnxjaJAPfNpV2rzVxLdozKh1EyCVTP3hcUZ6m8iXQAr3RbqT7Zxo5",
  "key29": "4CcGGWsBU16DxmzC6fE1GvraGgDz6CLKAsGSoDMcabMmidKWJ9RbzHKh2EeNaz5GjHoHrLNPYcrAb5z571LMk3hQ",
  "key30": "3GsLSs63tPHurmRf9hpoZeNUbQjvF9aACRAyFDSkZSzfSwQWDJBwi1HKDVaVGymQTUtHvCSq6y4E6ZBe1qkQ6QEX",
  "key31": "WhQFCic2JNsaDTampTWspzwTqUQZbQENsWzcSF18kNjPDxHFKaHtcWwRUnRuRiNqoWmJ1KcTnHhAX5ceKE5C3Cw",
  "key32": "3ypDRFFRuWg4uPNyFQrsNPZftkh6ozimVjByvvL3WLDegC6Rdok8ZqmstHyR6DEToitYw1yVKKFVxccgK4axYpgx",
  "key33": "8jEo9e4KB9aXc41JwRXqWtejfYuYJiWSCUFyvbMMBPptrFNgkAwvKCoyPMjM91xBK7Z1x7ohBeNmoXiPwMoXyyQ",
  "key34": "5Z4sfNQyQt9DAKs6YCTLaQ6LPqpkZq8urBHCzFQDadgCFKCnFBo4WgqQKcCFCrnVnHdqLtVWd3goJzofdDZMgLwW",
  "key35": "2EMhvcpXTcb1oP6dNbW4QFeYrobRFCM8maERZyUF5WQE4ZpUUhSHeK5xj9FJn63NUCGwGoKZ5cTjfFmGW137ZPYS",
  "key36": "DNWCmnh34RzhbjZHeDHskFiU9CoAUj1nAJ5k4YkPTKygsy1bj58jg67MraohEoqhh9hCZvp3fe1SA1uwtNrUNRr",
  "key37": "ZB6nHMPULHcMDpQkuYHkkHiXzcbJVa2L5eFTpEkkWTEUNReuvSe9KbSvbEtRB2ur3G2Bz5CupfyUeGc7ky2QS61",
  "key38": "4cF21kPLuxASYiSnqwcXRRoTm72seiNR6FKK7jXt4JEiPp6RN24BiA4wNam9cKoCyvKpG75smc1SksMGJa2DmhQH",
  "key39": "3gbkopr8a643TmzpyEtk5Z1nndJ5Bjbe8DEuRELEeeSUQE5AFDi5mxwyakk1tD7s54wmgN2nwvBJui1LC64TegES",
  "key40": "44WFTurTV9bWzgsoBKmujjfuhzpvi5Pcu3zYKWu9wN1GMWakGM3BNXZFyvdg3aiyYoKuBa4pcWzZyy75TtDHifa8"
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
