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
    "2DdcyyKMhggmfYZc4CeaMpsf4CWdF64Dt9wic5XvW9SB1n6TvMzaF3mJikWbNxVSiZ9xSRjCRzB4fZrdy5h379hK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sk4fof12ffMKqtL5aPmHY8zTJhtoypAXEcm56vLLrn9Fp8N5BoKgLZPBua5uDE2AScTaEGXMqreb5fRTrytzuGz",
  "key1": "47RHpnEs23qBAC5uPbPuLaKDx4PKqtbXPppEvv1GSceBFnobRF1P8qLfHu8gaa89WRfhkUSsFzPiA3RVHLUDBF8g",
  "key2": "2EtnhGwqAYtx7ti2aNTz1vQrBE9N47En7iavhuMvWckNsgXQR9xFScHMdc6hqWbLok76weNs5yxMoBMc6LPxGYSk",
  "key3": "5pKwc6qiaq3mMiFnQAbBuYsdcvMV34QN146G8KQdFNACaEd2NvVxFeJfYNZnURTQXfuBu8oNFLccxGywp5bNDHGx",
  "key4": "28pxXxEEviPTfwdWHwH1N37QvGbiBQBCtkcFiDA5DcSf9LKvrwgJRCkmZL8HqnV8p7TE39tT43pjFdo99QtaCavf",
  "key5": "xgHNtj2GQ2VMkNVGA5Eowak4XA2shg3sr5FMTHVVs7nueY9pyVA7BPPSaPa7fnuboym3sQW1iTKEvQ1yMNqSZAe",
  "key6": "2LSdJkYPnjjZJ1UG2Z2toRN255DBxPS7EvEYa8mZ2T48AG1f4KsDvqrV5nr6B7VYbtMSc9HX7dydahoNuzykw2Ex",
  "key7": "4KdvZHnEwiR8VvCJvXSkretgwxY24Lq4hZuHetP44c2BpHoyF75BUBtnpAmJRg6tajuLnZrztQWZ9qSnDXU76z7T",
  "key8": "3HfqfcRWj9gNgbPmLZwxZW6daUgnqFK1ABZpnDxNUJcjzkvUyw2xhwSJni3hutT1TEACR9Ns16jfgBaPUyPXFdrJ",
  "key9": "4d9E8xCBSo13b7DktR5ppEVWN2V4PnjBZ3BRuG42FCDaNbeQTT1VeHE866F6tUys75pWDqevRdBK4iJAJm1paGVw",
  "key10": "5UpjxiePvUKbHoqb2uKQtAA8dUi5N4iEmURjZw75yLijfGMDcxW8WHLou1AU8Z4ouhP8avww1LuaM8GePfa5HqPP",
  "key11": "7DvMjxGG2WhWSYFcqGtREZovMVz1u7FVFu4GWjhp2RHf1KmdXLSVmkSdvrFRCS1ojBXxN1DHCt982M5Fr7r4UT1",
  "key12": "3orf7mUSdkyBexSWQwfPatJ9VFTc1yQ6snphzjaG38Yh8J8e7ZR3PcWXunr1mZibQSNgL9pjsmzQMKPMc67L8eJH",
  "key13": "qAEGcPejmwkxr6VF64ip4aF2b7dwvo6DfW2qYDu8kDpLHmhbHT9tyLq71cVuD5fV3HogquyHmKL4diEgVhbVywX",
  "key14": "2hpC7VgwLVB5XbET7XvJQvf8RK8FTK51ES5DxvPtChyNRk3n5TwNDKv7FVTQWtpYPAzuH8u6MoSEG7JBKvLHDT1d",
  "key15": "35AtLiTPvTpooT8siaYWh4thg9C7DxfVCA3URind5qftkKWhv9rax4MrsepkC45DK3qUEPUG4YYv28L5WY4grTrn",
  "key16": "BquSABYE2KzD576fPCKh8jAR75UySbMjB8k6wPq6hdUueKGB49qZgibMQgfTP47tzzBUMRuQqCgsLXiHkPrD3j3",
  "key17": "qWqbq1LbVMn66rJBUZYmbGWezTjP8LE9w8fedyZukhp8fhiF7isGXd7XAP4jiHpCwtiCcws1phF5WRxeWE7aDHd",
  "key18": "2PwWRi85P2g3cGm965GqPeAH11jLRZkm9x4BYNhBbPAgKXCf9sC9iBsUKaizfPDo7u8raXptFzjTYSR37Tz6rTsi",
  "key19": "3mq5q5Eh6Get3HxPkh6z71FZmn9yDgEVkb7GyWdb89EJHqZctRDRkKpY1x1pWnXo3PjGMNFtSBYX5ZMHmpaiicRh",
  "key20": "4thbdw83auogyLZnVG795jKv9Hrxkb8FNiNCHAq5JTjNoEqA7FmaFAK822J1bZ6oxFvsftYGC7k1R1We9WEQEKTi",
  "key21": "128MpUWhC2SinjCCcmKUSmCvYv24DRDpgTatWAfFNaMG6PRKBvxFMgDYHS73EB2rhNrrMv64gGGjYyd8ur8hjko6",
  "key22": "xjaj1YkPPoRTyQpfKTgGmGkUa3AEsk9JvXbTJuzCGWHDX1tWYbvkRF8ra92pbDyNsTPR566hTxbY5Y9kHhXCnzs",
  "key23": "4xfkAu6N3okafWuDU8Lc1PyLJ191EJrmjS95WJbU7pLdso7VttxLbAjaACx94ZLjvkczvS1qXHw9MftexGAZEvmB",
  "key24": "4JfnbNzLajQHQXRocpNif5amMw46Gfzp7waVHmTwHiAMuVsY9xazKeqcjHiSanqBX8oxHXDqp8nYbVLHsXQXJPrs",
  "key25": "5Tr4uY82mdh7yKzCjgPEbTHYjVigPGA9vLqGsqMoY5arNsZPBboWjXaVSFA4ciWdwhcC9cbJGRDYy9g4AvSr9x13",
  "key26": "UCFAyAkRww3RnnM9utMus1P1CK8qnagyw9iMmTdpGcfRAKy2HVAygXKQyvGYEnQVvhenyCwdWrAY3Vb8fsBJpTK",
  "key27": "ZGNEsUmu96REiWdG2HwqAiYgwaNoXpi52KxVK1rztN1yteRPiXWep8khH23x43ikQHRT9E5AypEa4D1hW9VPtm8",
  "key28": "FzQUuHzDNQaWvMtXqMCAAHE7VazCTsQ4AUeGYx1hEpbj7XczJbNnbPLD7ivMm4YyKY9nP7375yTVhREYc2XYuds",
  "key29": "36AGDrJc5i8vHQMhb32jhZNAdCrQnRbBKwsaJmCxasVKLSuD4GuRVYHGAG5JFm3pFVZ1vDewxvktAv31ghwE9SQb",
  "key30": "24kwGpx6STwmUqQEwqTPxyVfShX3MtDDYkpaQ9ByRxd1vKaJtBKp7bfkM46LYfFgAYJ9wo13dPosgdmkQrKfnHet",
  "key31": "qu2vwvDxDCgn6EdNvAY52GQcdjD5AFEpNFSE8tU5RnxNLsYSiLd5NRfYTJeC9zVPet6hAUdzSEPQg975Vvwy3zB",
  "key32": "34iXiz3rdQmFEPgT9sLWERhTcs67cxoz8b73oJNyA9YrYkGGvyf5qMXJ7urALAnuv6msdT3T1kc46bX2gL2DxEvS",
  "key33": "4MQhnuafK9WKBG7ikPBXZSwi2DcrGWEBf5AN4RgZrCuYLtz1Xb6zJi2ENPsiv1UyP5dv62Eobo2ZHkvXgsutUQH6",
  "key34": "3fUUSAsoj4X8YkuPwTmCyWtujhxHb1VLqNzreggst7FXowJ8dE48ndEdyDuWG5HMdvwLsryQpLbokomswUATm3xH",
  "key35": "5V4ERfKNt47o8h6JCncG3w4vMSf8kKvB6ZhabqmkxSZgKcUtsZYgUSSBdMFDJU9X1tJnJe6iGPkKPpjMbRvCXbhf",
  "key36": "4Ty4zUHugspprJsNxdHfv5PitS6oE8EPTxPoy8NPsKwCowPrsCKrd2mVDhMtjN3uhBTCvcNTdZYL1KwVDssLgR4B",
  "key37": "2MTQtvVFJuavkrriPZ6ZZ9N87P7SMv8giC9cX4WqX7BNAMG6VnCxyxJE3hYS16mnCTZK5qQjBRANKCBSrhfPVAQ9",
  "key38": "3xAtP8JzB7K6L58hukDZKCznL9G2g9QhAAHWqErmiV9nMi2CHPGdBFW8Xdtdg2iLQmLa3pM5YdcETeq5D3JWooeJ",
  "key39": "2B3oJfP2VqWvkXEH6hPhDNsf8KQMZmFn3XLZfXR8ihzeAEH3iMAbmSWuostDki1nMoqY9yy7M4UAT7NWVUTpVVDW",
  "key40": "4xXbnMurpvCBq7KzpVv4NUNvEL3Gzxht1bMfjJipVifoEEuZBBvi3CR4DBjtJZp5AXfB4tnC7UGfFNDBXUGqKrei",
  "key41": "cUTwTZEtTBBqVybgt3rixvuedP6N3kBA5G91AuUJCU4HZcnXrvcqJKUC8qtH3XGngrs63BsQtqysYvRzC4fhMJ5",
  "key42": "3knUbBZM2oYGrSP4u7TLQfAkGmJku6JvL264NEoE3MkRNfSi77h68EtHes8YntEUxLLR4N8DBhd4xnfxSqKor9nd",
  "key43": "4bRS3mTV36bFqu56tN3bR7rWnuKQT9X33wF4qSYLB9Cipa73e9Ea4wh4YgyxaN55KVCtoBRjLYkTtE4Zj3Nmk4gv",
  "key44": "49avWydRLnCRyCG8ByoTi95rMqpxARm589bNgTwMC2yphXCiPTFbfp7LB6ZJ9p2dT9SXkD6GPhoXuB2VZ7eVoCQV",
  "key45": "jCvk2SSVwKfdx42NExNPUDNL1ZEXpXcWHCMgtUE3rffyFNfBCTT5KrGogWt1rXu3KTBrAVSMJYByzucqPcN2wNY",
  "key46": "4VgLyUiexYfeWk3U3gBoWffbReDE7z6zeiBMzhjFD7HsbUgoVV8gNte5d6n7NWPBN8HNpN6h5icNkTbYLdY5GvjC",
  "key47": "uMSux2bUhm4JdES9tHxw6kDtR37LjZakEB1kTz4TNNZPRuneNTdNz24VYCrsNYUC3XpVe7MP2qjFKkbe7rTjye1",
  "key48": "5qWFUGSZi4kbN2R93h1dhHXiuBQT7M7wtkPpnn9SiHVfJYgcUNetgdceFPakUqRqEgNRgDthQeMkKdZ7bYNMbte9"
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
