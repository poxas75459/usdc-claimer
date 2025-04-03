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
    "4yP1RHTvEXNBQz3zQYNZ5WcMFHLb1ghLEWhV6r8NMi1x1NUA7jvetAPPbSTrpU6eiHtCg4xqAbCnLtL9e1sMg2Ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258RBWSjhJpEKNZDwY2Haj4ETDh8aZtz95drFkBGuQLXCGunPwUxDqvSHkQdxpsaHF9bAuAYv9Rt8dXkmrw9Uvcc",
  "key1": "2L3WQtX1jECBA4XTr3zhWtStaeZQWc16mBg3Rkn1gVV49tpB5VgPXA7ADRwZbU3HZbW2bHscTdXR8BYB2tRF17Y4",
  "key2": "cfXM9ezPpu7YGcVZqAacwb8xgDdLXNiGSozmMsTV9ts7VDyVzxBniMPLkgq7AGyeSHiE2HdwqGyPe63FzuCMEse",
  "key3": "3gu31Tx1FaJTPPhNhWbgMfoh1kFnMs7Gj7c3zD6a7wtrTdEEWdAknMVwepNPZfNCEUFcaubupuPSwquqmguEWM8d",
  "key4": "JZoFx31YcrNaR9HF8oQPm5ox97HCBMdqxD7XCNzKUWxrt6uAa4eA841HaR8TTaJUcLLZCN6R15d3zW36C1tt3UN",
  "key5": "4b3WjrTPHsBHZ1a3cNrRd5jbEwwK3qZmN8KvB1scdRxB2LPNfcxYpu3j9z5tmodm7NdNeYDdivHbYY9XC3BAxG5j",
  "key6": "4wErCvWeF3P1DdvZSLvDnC71PCKfGCN7Yytyp2EqkaQkLPTf4pVMdtU3mcpyS7WyGh9FZTnSw3Eqc9RCDMoJ1qPS",
  "key7": "5yWTwcHhQ6P7Gh1rQhuozqGc7n2RNwwqtNVYoegMMVBNuRr33Ca8n4BtLDVakaDvEYEmHmLe4uS9NFnssYSEWFZP",
  "key8": "5ndtQ5qwVbUWLYVDaRHVDWdTRLTCJoa89imiPAsak9kK8drZ2iFx8EjZoHkmuDARrmLRuBHyZnGaJE6uG5VZycd9",
  "key9": "51cV56x1F9ozkaDEgDZNuGm4SL1bR9gAaXmvQuLukF1aF3HKs2knSfMVLNUunGwWEnVHXEWhJVZbGLnmAFYmx4f9",
  "key10": "44z2y4nJHtXc9s9HoMgnUj37SrRJoUX5MQAsKZ8vRQ9MpLgwNVCSxxa3XKNQGMfWdYoaCUZhurntpwqXNcnqTx3d",
  "key11": "2RBsjzRbKrYHXhQkQTSWUNULz7AbxwbuJEKtb9V2n3VT6s8bCiukQkoSHhzrB6VmJK28cTVrjySFZTJJbN9CFtW",
  "key12": "59dY9kagZ57yrKuMN2c1tHEdkxQ3m3DdD33aX5s4DvZBKt1nLfxBbCNcHKtWQwKTfWuPFBECbenRT6PHFpoqVNnt",
  "key13": "4P9KhD3ucLTbNg676kg2n9G1Vr7VCsSQ7riQU8Twm6jAwWqM9QUyFv7N6ywy5frJEEc7qhmurqRjWyhuphQwF2jY",
  "key14": "2db1htH3BodW89fJUsggk73dSwoccQbBz8FMrwdd9ggrqLnMZCbdpyVsnp4ntZ2Q5AVwDK5gVsdXiVZbYLNJZTej",
  "key15": "4ZYf1vNnTQczr52K5Nh4i198ecLnedqvTrZ238ZjGPEqNFd5cEX8AmKbS8EKEBKkPufGJqkmZDokRSos4MSuSEhj",
  "key16": "ZjFLEwUzivkBv1xrSdMgtNtBXeTmKxS2EjBxCmG7AQ4QCVDnynBYwKoFWgNEePzgCL411SDYbhytiKjZqqA1DjB",
  "key17": "chjRm7xSYYR8qd6qm8ieYkJpKiW9n4D97AtNjVcETVPogM2sV3dREFAdRLJ7cnqUe6CMV2ftocm1aZiaRMrHtqM",
  "key18": "36HKFy2eSvr4oSYpeskMgfP3QtbVEHB2XsZLjRrU1KoAHNZv97q2RpawEsHQQDtBAzByQVpR54HDtLMKZGe7fNK4",
  "key19": "U5KQ6pr6piy9GE3beh9u1iP4Et44fQAPsSdk3iMLTNCsJoXagvamDJYWgq4a7oJsEBtTnMeXNM5V2MvvJNWtzMw",
  "key20": "EHfrP9nUhABbq7tKPX74fJGpFp2odnf3QuETL6y53ARZrsi3Pj5GWjkdQqbkW4N5BY6ZFcvX4HbVWvNheSwGByE",
  "key21": "2PTz8QfA2b37XegqSKHCZjtooK4ysskKodJoTDo3BUAk1HNHiXtuyP5h72BVqvWwK92ypUguohMxX6DFbHfZcGvY",
  "key22": "5KAqYQBRyHnUpvdiBoWePNCGL3Kb5ubYW53JAPZ26ztdCv11JUKZyRFpTEWuA56fSNnRNhCzdg9yU2jDAjKUWohf",
  "key23": "4xKtUtSP7btsx91iE8n3LWRLYTK4fMaoHQ92mLKEhjaxEa8YMmV8fUrrjQZjx6iU5oRS3gg2GjgMPvuwNsUxtaN2",
  "key24": "fxvvzeETGimBitWm9F9EXh2a6bY61hG4aYeE3oBadrUq1RCavJqpDRHV2Sdxr62CxgAjvrn54WNbSiN4NJrpp6B",
  "key25": "3Y7MP7hPAN2QBhfAc2dgTpGZkrXEa5RPpkdCFGHH55vQbcqHjrV4yu4M9RdnJBCj1CLDi4jGs6Hbw5r5bkNAtJ5b",
  "key26": "2tByg8DH8AKh2mB53qCYWMZwd2SoBtVUoBX6s4pbZizPS7cggPC2s1d6PmHKmiavax5XrDAU9euvsx84o1WhCSpn",
  "key27": "Ed9Cb3SNom31tXgzqacBsmjJAEXckTUZ9Zv2xB8xGZuVEUHYvBSEJmFNJpFUXSvC6pMa2LJdw1aMDgEGRdXqnVd",
  "key28": "4brz9cmNr4wdE7dCUL1GePW9HCF8SxeoU2B4X2Xekf53ktcp1aNWJN9kBuvcTEaPb7fXD7myW4oWZeFJp4kaeKzS",
  "key29": "5qsYbbqsRiTNe76SeiKL1j1EtVNHeq8AGDw4HeeBBgxSH56LDRp1xudYBRfh94wJYvBTWtuW1JYetHRViuEqL3Yb",
  "key30": "44vB3LeTQZESCVKEK77BB75duPUTjE9Z4wdjh5orrTpjaTw1CT2hssSXT1oUAvfq7jSoXCc9RvWY1uc3hzH7BtU3",
  "key31": "3sS59exbQ2FuYXtdJPawmZ1NWbf15UiJ9frEFiJnxKmy6TTsxDcnr3gjnjMsRiYti9ZA4m5EiPGAotP9HqaaTGEv",
  "key32": "2ztdyiVNAU4HVsfQsnxBqCgTpwagbRgCfhmztjPxe3got93z1vehAup9cZAQ4TNR77WUUygDPpHZ5wezKdZMms7Y",
  "key33": "sZVGHzAftzCWnDfB763E4hTH1K5JWyUUoQU2Y3DwhxdmVA95PhAoH9PaugCpUtqaWdAnTWFC6oSKCXA4XzWUvuq",
  "key34": "48TrvJEWuV68DM1TgBApe8Cob2QKR6PxdsGSm6wzMSYcAkfXhEpBBf8gMRz6XqYaPtvwXA7vEeubtHawPLQEzbQ4",
  "key35": "4174dgXWzva7xvnTgSiPr1YnN1wJPdqMyByPCwkZ626V6ZM6ftXAn2vbrEMXab2nyGTKeLYDjXLxtwfk8dTrALDe",
  "key36": "E74qnC6E9hRdovTW9V7y9Uj7WgxD8cFVbB1vjMUgBJud9Wot2Mhk67CuaCfkP3dS7FeMSZ7SS3wt513m2P6G6RN",
  "key37": "SkFxB79J8wcvBcYj6nKmPjTYVVmuDy2eJidTBbKaaCn5mWgMKokWnFQ55UrdPLfJKQiV5datPTDqEQehM2ueEcT",
  "key38": "32STRiysCJVttWMB8DK6QC3WVKTqLe5xaFSanmdgDBDUHt8hi2opvJWAMmi3s2TwuBzqG6u3sQ9tGNS4wS8JKhja",
  "key39": "MmDP2CZgmaV4yCVTTybZLqXcYQi8wyJNYYHR5JW8pe154bv2deeGkToAYiszHjFGBeDD169L34fbvVWLbTKTzxd",
  "key40": "NtArgkceYjNppiCqsPeTaoZgfTT2R7qBoNKoLYdqv6EMqqBZ51S8f9gkTee9HvyFAa66yrMfxusZtYBe86PqUyx",
  "key41": "4rr3kBuB3B5Eo6jXCaN4Wk1MgwXuxxawGvoF7jvuDq4Ln4JFVMhureMU8wYCEeAs9H5StV7EFTTiShjMpCdSgDUt",
  "key42": "4nTgajMophacZmNj1pepWwscBqWfMA2h5hkCdDbp1KjFiTQfmgw8vhM1JycXXUbJ9SFrS5GZ4n5P6gqEacVAzxen",
  "key43": "5VvfrNb8FoPm8MVgvHJJfKdpmLrBX8gH9V9AGiWVHAg9G5DDvTafbb9GNWKs8zLoynGLzwNo7qMXLVnRwzL9azrP",
  "key44": "2eGevTgHfNqiLqCjpe1uNaR8632fKCuTRRgmP39bhFx4kEZTy44ywWuXKXzByQSb5KARcgsXG3tTncrfz4XQheXG",
  "key45": "2CRLrYTkJJkpAGE45Pi9RaP4uksxQjmcqxYt6aSnnahtKPdehe3pkvAkcT7dpnvFY6EkeCnWsG7CaMNXfTANL5zg",
  "key46": "4VcBP4fwumEcBKL3VwgtFbqcEzuTPRinUFPFPEHsRcjVACZpWXCfUbkaBfyHqB7zS8JcFzzCwQprbKNyvEP7xN3i",
  "key47": "5W73dtrTGbJApENyBnCrx54r19zUd55R3gNMMAhcBpNpekDULx1xyqYJTRwgbcHdbGoQrrWnTefJcvCmRK9QdfNn",
  "key48": "5ry5ijThKKkgv6H1CW4URXw6Y6H71xveBe3xAgz65Zd98tvUFEJXqWj38cGjmzojuxzq1NGzVfhYprCHmZ88wGd3",
  "key49": "o8bciFgM8ocGTdDsztaQPHfamxTWdoF6rUW3naALdzKeqNnyzEjiHD4xavKsstaN8JfpCqVjcHLe2sQ7fDUjZ9f"
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
