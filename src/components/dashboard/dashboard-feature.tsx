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
    "38bz4xrwup3gygHaHc8vUCA8vDo5yqUygZqQuPwb7svX5FcijvpXDpRN7X4QUgbn7gvszzfkua9B3sruFNh3FuFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YBnapknSaRogX4qYbDuWdZSW8T8s8jUwDi77ThG4RgVEBftcWfkyndyGjvJopYxC6skjGVPcJ9WemYX3kz4wJjb",
  "key1": "48wpSaofRszqfJGjayMNxPVfF4RjmpcgGvJxoceTTMz5BzrdHFs5DyK8yHttQTStMR4zRRcRLDtXXaKNvGYUJWE1",
  "key2": "5eYAREmfsQAAHA7xhGo6cXRQP2bgRW989v9BxrfPtgeCQ1CudpAk8rNoGFtW4da1eSTJjpJuE7eVmKtAoGhzN6Ei",
  "key3": "2mveWpkAH5pA5WsTXybNnrdeKFh2n3uHpXCdok7f9xe8d3UUdWKLFCDgEahYhc6oVJHPvBpQvr4qBZSpJeZsiQEW",
  "key4": "63VhTVS5SoGL5QAPyvwnBht2HLHMvcPRh2PL3PRCPR1pyYu3oUoqkLoZFgi6a6YLt2wwAGzzq8WfbervEAXTNXAA",
  "key5": "2GmEPh9AGrXiJStwoRbpte5E2xBcRhi858DD1PaoVchDdimCCVqWT5RoLV8HCaQmDAzvWtRrXBtVx42M3zmnseAq",
  "key6": "228fAFi9FZ2Z2iMUEAeeF8TmSFJsV7JNNnWXR1CwPVJ8NX5Src19fEbyWh93CKFMQhowHJhAhZhZZLWX7SVJHBCe",
  "key7": "4fNxWG7bAbZGrUdENGUrTQe2fg7QeDN17BopbK1W8A3fezstd8JSYhtcU9PN1azKbL2XYcYieEpMqqysUmNBafFV",
  "key8": "2ydaxvzfAo4Agd8pjvrKtEStHgD8kr9wDsTdx56UXJanoD55T7wmmc5Scm4wq5x9VEx79fj65Lc9WApQ5dHCGtDH",
  "key9": "3TN7XjBJNHHt9sE447QzEse6Mnez7xkc4faB4RSMPDSsB1a9MYxsDhwZRFFsrFUQ8HTKPSwLdGbgzMhFB5m5cWD",
  "key10": "3ZEi7R3AkqxrmGVd21y4yRRYo1mPQDKDt3xeN84m9pgH4U2YgiK9ymBQMj2xteqyUzQ94MvAbjWM1GHukqxwbo8k",
  "key11": "2pBxQA7QmZJKZ5kvWj1pKPxdBefdeGAhn9XeT2C3K95n6ukDHJrsaQXa7wi2avfCsz1QJg3PQ6DpycdwHfmsafgQ",
  "key12": "4bAsQLTYecsXLUyEdjpF8gEVtP4uA7vSK3gVo6e8pUrZEZRHCgXMixSLBbZXYH1LKk1HRm7FCimF6jiiSLd8EZCL",
  "key13": "2oCyeDTNDcg6ekKsvcJAa4MnjL9N2qt1DomwUrhZPQBhdU4z8qGwtzqoq4t1HLNgcWu46t13xLkDXLKzDyEa8dTa",
  "key14": "26jy3GDtvoDWHEAKAP9FEtiFHEvhLbAbQh2DdtfLviFLeY7x5sbXWVFq9hf7cPefNLfb8Q9xNrM8pfnmRaY2pwiu",
  "key15": "3ZKibd95TSoYhy9N3kjsyh21sm4j4S4a6WuekXqNGEpBcB8s2PrZaTnBzkEsB5K3pyUhXD3e9V28pGFKTgpRJnoL",
  "key16": "cvheH5XEbDJJgciq1qEHkzo7NerSpUuzptwpEBLR6BsxNsHHDPrKLcZHTKLJNvTEoRNu2FR77fk2e9WV4cwgq84",
  "key17": "7nE37uvXjGaab5UuhuFRaQKwik8XpE1YShCiXP851er3HWuU3hWujJQGvwJYjjm4ZPhVHF3dZidxtqzTpiF9ndj",
  "key18": "5DfN7bxEUWwGAY4i5h8dVsSHrgkdzcLtadzCbDhjeaNMKDPuwfYM3sf3k2yhFwAkR2JAPDusW2nVsswLYUXJ6tt7",
  "key19": "2W4DULhfW7ap8UxrU53MvqT7CMfKFzcXN556Uhyco4HysBgYNbncj8KhaD6ep6H14iijHeT5RE9S2Eeu1uyJ6d6h",
  "key20": "3AUHLbZjxzUJimPdRyCZ3U8ujhsQs2HpDnzKvvKgvP4iCYuTrEqtFm8we1FHf4E71XNzJ4cBKpopaPi8rp5eeRri",
  "key21": "5xj67mgm1Xk8Sfwb5XgQZKD19ZHDi5vhcBz3GTEMC2vQgJAJ5W9VSYcZ7EHc74X8gHivhmDSNG7AyyMbKdcedXy5",
  "key22": "3NjhbapDZuSS6GiemNBpdZZEzVAne5dpLigmxm3oAYBMZNi8rGPHSeL5DuoNcuTLaZZvqBE7HSoqYVfReDdh9WQG",
  "key23": "64gyxJ349RsEQpQj5WCAvxB3yrsJj2m55aDTnRd5ZgpMCfCH3fy6wYeXp9eenCrNJt5r5SBW8KYFdeBpTUyV3WhD",
  "key24": "2yw5oM9RqSbPanjf7inCzhEqY941GsG7f6STigDDmFJZSahxGFehzfQ5of5sVkyctWpVqV28W6q7YBaBP7JHLaQF",
  "key25": "3JwBQdyj3gYaiRpPau2rQjF61HEByKFGmKB4woSA3csD7fREJT2Z8W78SFypkq3iCopp3UwSWHEUGWeDU5FLLXna",
  "key26": "3RFbFFGFhZr2pHAME9hYAoAq5D2wccMduGwMyPFp5TKjKFYPcCPKrHxrpFNqoARwyDT7nVEZvuLkX4bEh9jgK1eP",
  "key27": "46m5knc3vNindjfPGe9Rivzp99yhde9uS52JRnm4PWCLiixKfcq1YeMxQqxmTNzNR5nRe1hiGnxB2F819UHV1Zaq",
  "key28": "2Di5kjx9RUzri1PDvb6UKdZWrtPD3hRYxD9ArCW1i9HoTQrS7CSNoFkSUESXCjYLLckCwrvAvN5xsC7xWDtcB6bb",
  "key29": "45RumCoxHy9ZZFuPv7SQXrnrKaaTwMutyPyhjVKYTTcYxwDDZggwibHAPRkAKsd9ezLrbjqpHQ6bsNSQSZPeXnMW",
  "key30": "55jKQQ7PsT9NXi5EmYjE7Z8HbDsBpLgWtSpeQ98Kg6pv3iC3r7gzutu36q3oRrwzEp4uqhhTeHjcGswXQ7c4W9yf",
  "key31": "49FE1Y8N6WurEcSrMcyBg9QzjnYniqp8oBew8VFSnvMRFYi1j7DQD8tG1m6PLnXPx1DFRkmqugg9L5KjiKf7uaxX",
  "key32": "83WyvrnTbNhBVDS7enW1u5FLAoFsr7RkMNaDD8Q8T5BsDz72A8dhAez6CuRCRDXaCcP3DmExRCbPzgYfdawj5Uh",
  "key33": "VJXYYin2s7TSfw5RV5McQnYGmCV7XQWfLGmUF24PbAbMZKXiVVwUqMTHTvny6ne9ew6KTvQR5tRp7k9t3hUhK1M",
  "key34": "4gLfUNChLa1PVJjWqWxGM9wDpD3vtZkmMV4tp1prjJWHztPtjZtZxTGpaVA1UQes5XA1U9T1TrptQXz12zvGePUY",
  "key35": "4QfUWCm93KzGAQnewXK3rnwXgUeHN1GtjqUNSY9AA5NL7WLzYrH1X77eTQeoPjtGDRwSwWES6dhMm7zSJgb9ui8G",
  "key36": "2dogv5onQ21MzN1DyhLQzJiZsu49pwkHUrpUfQcsrCXVk6X8646ojgJYd8CKSXRERno6ZiHpg9QwVyVZ5g4NHRzz",
  "key37": "3sJSGnqUvtV5pzi1By3erBT1M34sFMpaHdEdiztatdCpFPSiCCwV1pY83mhmH9c7cGv6EN3APGgXbt1NdZvJfdJ",
  "key38": "4Vars5BuuuMSGkJTDgkA9NXqgmFBAC1qjUx6nuaFn28UMFhL6eMudvt3sS1wLZzsADpC24sUL1a6FThZvtrynjhy",
  "key39": "5UcYzFPr8Sm3JWoiX7G2sAM5nDHfnjjrL6uPRaKRbTpaZEngpMmebvKkDuvsi1f1CyW1TEb2gqTB3794eaKy6PxP",
  "key40": "2rmG1scujYjtGLvp4X3ApCCDGLsZS3rSYarJBBmTw8ds5VTRhNp1gD2wLn6NjHskk8XJgW9PMgZgC6Whqi94XR9v",
  "key41": "5ZukSZFWH74qEXetEdSLmwhbzuQtt8iWnThGhFF51YVnKRPDvY2zq32AbX1BDZwF3mwEjEGyyKEhHzV4jqhtScxs",
  "key42": "2XMakEhgni8vjdQLF4g3ZUaHA3hCZ5pQ4tSYyXm4ogzqPhVqYfS732TgZetF1nvTCgHiSbyyb8UBCd2n8vdbbRe7",
  "key43": "fXJMHaFmViDY4TmJo1zkBcM6Fi2RcXG2p5cuoCbEVg8onbF9GrPYp4mrYw7xquQPmkVVGetEWpa4SWex8o8Q2mA"
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
