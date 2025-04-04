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
    "4JYHTudqmHTBCmT8eShB5hHxrSnR8k1n2KWbzadYCKRgKEj3YpXAwb5XbmzxHjR6ooVBM75Kj69fx7F9QdkvfZrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KUPATcy4ukst7R5dgjuKfxPhTtppGTy9p7S3RmSrFWbZYH1dqGp42uKrndjLjjdDXPv13UF6DMHAcoXuPQixHMk",
  "key1": "5KpciaauLxKPPcn5nnBmhHWDrj4VXmhnZZtDRfb6K1mr1475uke6VCvPShvmMvFuqY6f2dLJW5pmTEoo2kiVrs2E",
  "key2": "5jiZZHewHSJa3KvKAkv3QzpVCuZc38rFghWcZH1vJcgbXrB2mnRFYfARd78G3LzZNYVdBDUnXvcVmtsCaZyaTLS3",
  "key3": "54CAL3T2RaoMLAPY7scu1XHMVQFZLbDo1U9H89Q5PTC7Gap3RDpHhsPCWmxtGx2sWiq4skeLwzBXmjrWxLwJe53R",
  "key4": "4YSxb2wEWrLxYLdSnJC5tNPe7aQqGt3YHF2a4mKF9haHa5VBoBQ2odZX1Kvff4TazodiEkFtBaFRR7SoxgJu6dcJ",
  "key5": "2z1ngNsKQe8MaKjwC2K9SC3aAeRnF8oM82HsiF8RB6icYK1RRTYYXsbrE3YuHZYuyMubFwWEc4EMLDZSmwqytpAP",
  "key6": "2FJjUUfGQUh551VmyEYWjGN8Zg44obtmJsuKCzcUHzPezrrBbQjRBaGfW9NfD7EmVcWBSBdS3fQqLobdM3PnjP9o",
  "key7": "VjN4sZeS48Q9Up8avNP1BhG7CckuzacrEXNBTebzJnzF5nYGWSyEaYAbSJ27SJQAxZ84Av4K2XRn8ni27u5DEBd",
  "key8": "4DyTCvbDiDfVSjuAbU1Hiukp4AVHgA46tW6WixPvqfz8s4oPfw7TFxRhVDgadr16pJDACRRLNBhdADhptZkqZfin",
  "key9": "5hKKB9XqENjhs24kZorbpcLcLzFZMe5QLupaEtNwNWHNySGG9UVbzyJtCRSwQdTZaZSd5N4YxYb9nnsQSsbcsoEZ",
  "key10": "2GXSksfyMBvgcT2YiV3nFi3HKNziJ6Ng2qKPD277nyuTzZaFNtLLhjvk1r8eFBMH2AoRf2U6a3dM2FtQRUJhie6c",
  "key11": "3gd5KcWaWFfhKxMjTe8c8HC8jtjAN6EURBCjt6hoVFauVW4p76fM9USwZavgvKMcRdxZ1212nkkXfQipS7eajBhQ",
  "key12": "3vAsQAKcWwPyHgs3Gc5asvcttCkcD8qk8z5py8ZasA7n2MZYjenNhPMJgGQ41SuPGgJUADwtCoaHC5j8anoUQuGK",
  "key13": "56gqhhWCPKDR7GSRvgV1ro9wgc3TqzHKttfguvGQ9kPgwPqZPJNkTBC8to9s7NZJWXzjfNBmvk1PcRJB2ad8m9JF",
  "key14": "62SpwHkoEJKzwtE4WzW4gYiYk32mnYPenFrVMFwWDJLLmSV5MUzph8mwXtYdpVHE95AhNk23ksV48GGQ2dz68uGj",
  "key15": "Jj1Hm8AoCST842yRTYcLVkjtoB5Bj3xJ636B18f188tr1m1R1yo2DVPyvhmaDeSzqwznSNhNaxQQDcap2szVCkP",
  "key16": "3Hf6MRn9hmYt6mSswKLTMpWGmSMFKJYBfwBYtNA9hHzkne7qJsg7Cv6oXCPKhMKrcc2MCeVcytEyX5ynnRrwwJ8W",
  "key17": "3nd4UUjeb6bBXetSRGV1azsRMXZu6HuCQA259XtB5FiUkai4W3tvPZWf78NTfhoDhvDKhBx6DgvRxTiE3MJYuD6w",
  "key18": "3VAPZv1RK3RXix1UvsVVYy7ccgqfT8HcARVxVpmx19iJgQCUug6Pe68PhixcDKLAPaVCUpLdmdQdEh8oeu131nCr",
  "key19": "bnAKuhv8RSkoPxJLdm1R3Uwt5uGoUaa2ov5M39F3WN3XDkH6c6DqdKNQ4SV6ntVnZcu8USogPvyLEx3ByBzddHf",
  "key20": "4FZ4ttvzsiCjJPiZAG7tKi1YCo6FibhR8NbBujZoN2s1FiXhk8zp8b55uWi1nFQ3MFowNuZ2vczsnHU6wbgisrK4",
  "key21": "2NLz2vBzuq9uXrL6fFx12hgucWBwySQUE3sK6jaFxP7EGBSZnK1UJRYWcYCwPHyDPjX4ggaZJ1Mmu9FWHp53PVJe",
  "key22": "SWEAQBioxsAKsCZtr4usR9igeUnx1ogbQJgYX7vVDT5Gi3iQcNewvYTmgUfckGnV1CUmDysQmGuBRNwgnQfq4g5",
  "key23": "5tesRbmmHrvYQPmct5ZtQmuU1nmUQkHyH58o6s5t9R1hMkgRQeFWg47GtXHdszkwHsakidn2R4QzMkUg6ZzJWyfm",
  "key24": "2UNP4qgt3j72KMbxrmKfvdM45gxho7dDG3zf4ZM7gvuSdFms2ErjmjuMfmodb4E1P35v45Q2bwS6vZF2UvkKN9P1",
  "key25": "oNgGs6GsXPLDJkLAQBeVE8czW2NvNwwzSPjDUq6GhanQptnt8TfkRSK8vRCaCyHupSC6Z3uNLVVfVSXyAVzKXQq",
  "key26": "3zZ31cKyMiu2xjBytbXWFCqsTPoiWUWd4jZMretnoMHRHmt2LpW6MXnPPQpqUUnYR8C1wsJSGQD511u48NUD5vQ1",
  "key27": "5rHBrkTZ3XFfBaRrt6gKZc4UsMuM1Mzmnt6H5vySQ6hCr6ofZNB3aFkQcMihzBW2XBHHSYRGJoXQR76q4nJR9LeG",
  "key28": "UdvTssRZobHYieu1f12vTn3RRwmkFURJadG955E9gWUus6xRg9E55WbXyG3bimCQKPAvN6ZxZFyNsYyMfRBXSR4",
  "key29": "2PKigQf8mJCimHAthBtHsHHXZZGiADfopr2arw2xW9p4y48uPu98WumWF7eoa92xN6xQcMgv1MEycGsaBhJ6Bon9",
  "key30": "tLLKUcb161QuhB5JyoxsUizRGMErWQCHxGUBHiJTdG61eedAWYNkBcS92E9FADnFS1gueUX8E4ZhyaCCfQy9c3v",
  "key31": "35yJLT2PFbC2LdMVYx4ZFj7pvQxgrwjxjxFuXhmLSmZeyp5XDDCChNh1SRyJMwPd9N9rpbodyBPxobCbXqFHVfs9",
  "key32": "5cx2xFi213hu9ysvH3tNVbyX9yZHjRs9Zb393WTD4RuVLJHR7ygNSKsGzPoungnvEKm82cThLbDpNnE4SqwAKwX",
  "key33": "4tSyjmUFNRW4g8w1Gk9vL9nk5czokUpXnK9ksXCMhSN1djFA5RHpH8MnAMnorQFd1DehhkwCbJnYzUMR5WwVj6jW",
  "key34": "cHfgXYa1S12MnTWZ8ZVyHZMFHgwrCQ2w4YYLqkm6mWvsGT6gXgj6Ke6XWDjWcJqQQSt3WyspEgxVv8bmATyULrb",
  "key35": "TbRnLJjbkm1uVaJLx8xm3bMesJ76wfYyLEmcdLyzW4RW1BAKpEDHuxLpPpW7gMs7re1hJZgo8nCMhVUcfQxwibY",
  "key36": "341DsfF4Bvi2QFdB9vieCzstmt1tg1bTbAV1CzonGJgCSHa9dEJXGBxF8ncnFtWZwPmZsEQx9e5vU86HvbCvc9eQ",
  "key37": "VaLNnkUYyqMufgRd9wRMaLoxGeDrBhKnjQ6VMgWjQRrPHMRr5rgAaMr1E7Hfj8eYW4oj8M1bkVea7LEW7R3bU5z",
  "key38": "RzLC1mgwoQNpyEMBZRbTrggHhhPu2MjyitoBZXNUp2aHWM8vBCE6Yu6K3GWqKmPNSx1CkmLkbfMZonxqvLDF6xS",
  "key39": "4dCxPiXeCnNmNfw4hJkaEGmPVWK3h7zuYUqK1zfjjFdHduB9ujJuENpxWSrhUN59V67kYFmreARhNQ1gMoTULHd1",
  "key40": "4t9VwM43noRv8Kf1dPPoZqnDaLELWriqTpEfY3L4yFQZJ39BMNuL2LFdHphWJgSjrJr1aemd5WaETeRGy82eydK1"
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
