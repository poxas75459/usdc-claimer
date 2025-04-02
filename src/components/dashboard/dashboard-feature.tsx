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
    "4F1sUq5UEgQThr6GCBA3ZPombG2MhXtaZkwHoRGfFUFt5ihvB1avhNZDmG5gsLDPQiZ1zjHEQ8bzb8wCK8rVrYYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TkuB8nRdoEZR672QZVtCuRaEUqg92ZRfdCCB2ax4Swgzcd7CxcvhW2wjuxnsc1HX1Qn7w2h7D4jUet6sv39sc4P",
  "key1": "2woqe25UsygWQWPZYGnJWSPy4HpjD2zZXDT27xbyeRyDUHoJynRLXDLE522AJpeWw3nM2itaPYKjNFTiLjQQByWn",
  "key2": "4pJmxby6EK38KAvr9x4ztZgKFWHUqqVvBEenUkfpPtEtJq3fRddZ2RS2ErvnjJSzfXaA3oV9vnYjnAYpUxUA6VGN",
  "key3": "3Dvf6p6CkRfsnDdY51yubkfm9CMG9VsHiPsLufWdeSHRvznnn1nEfwPuxDemVkm8FqPD4wrzfdncGhUf443zx8gw",
  "key4": "3f9aLAH9AXg7VcNWQs6wjWWyst6taYJxd3MAMypMe8Cprf2yUt49PWCXpff5XPTnKr6gEEJ2HAE5guhEVVFixjqG",
  "key5": "454tHee5j5YWHjX7CaeWyJK9Lc8x65XeYdhfYcg51H7wvd9JkDmnSjy8hpmSw5VDsDJicNocxhQ5JZ7A2bB2my9B",
  "key6": "wKafKmEacXcWqZDcQ9sDF9aRFnHCe8sFA7Y62GE61TKnzjxKAH3CiL55VsvyozHE51iV7inz7Ddhu6AHxq2bfpK",
  "key7": "WFNLJx8YcfxkoobRowmqaFjbaf9aiatkfEUxrKbEncHeEcnabMD6hAfQtzMdgrM9UaDQPQa9Z3BaJWyTQr1GiWG",
  "key8": "3wqumuox42jfSr623zNzsD6mXJGy7s3gpn1z7cgUysmaYF4JYWsp2TsKy7hbPidwKta7L7PbwevUGnM2Y7LQWj6t",
  "key9": "512shszbXCu5Ks3AYwEQva6W9jyghPFNv1o6SELnqsmCJSqLLWz8Vv1hEiFr7yWxz2dP8pUiVbMagpor4wgnNohR",
  "key10": "51pQcRjMEfiUnnsyqoqTpwYMputPcuHodpkNkLXgouH8DPvjUSDQDNjoxtpuqWX24qfp7hVHPkDSqtJmr9ct7KUa",
  "key11": "2YhtMFrZthKJAs3r2Y3jCdWBuLEUEE56TuarabdeXrsby4pFn1i2mhSn8Jx3HTre5HaAqTd9Ayif3NTmQmeZDWKH",
  "key12": "5pdrGjVabjysY5aJcuYYiciVV34qqRunNLSgHaSW6tu42wpyCX8vYb7nRTZLknukr6QAaAZrnEft4uyZAVJUavk6",
  "key13": "4aVt7p4VuKcP8aNknGt9ty2DnL5ZUzYj5ugd2EsaYHrzNeasjU8JVnerbQSHzLmeHbUjWivayDbrxFojCZ5XLymE",
  "key14": "gxciHcP1BT4X9nxBdtZ1qZKF6zmZ8m6Pge2Rn1M5zCzjp96b8bdc6ixZiNZKGCDqj4ZaWgphKfKfVk3JMMaQ4mk",
  "key15": "53QQ1W4JDKL9x6TSxk7HsLWwQmt7hXBvKFBGM1pkbSHjCanzqznb8agRvNtsseAvG3UNdrbvyw9FX3u3TvL271T1",
  "key16": "2RXaLTHRUcAE1MCKd9gFT4TALkzv5PaAJwiAcXxDUhhCe7fUGxKFGnmGsfswXj7EbuwkAxQijBn12hC18B2gtt7Y",
  "key17": "3GXyYwyQSvYiJGDJGWqWJ5uifquTQhrFyV1bXtuxGNh3pWzN1s5PK8fhfA1QbG82tf8eaH6nsWfHb8Cxyr8ff6rJ",
  "key18": "61ymg1Z7Z7avk3nxwJqbXwQWbA3UQijUeFs5KT1gn59vSEMD49gk2KY6AiYKG4qjZbsscRmGq5BKTa6smQSa3cut",
  "key19": "rHfRqHhPwV15V1dGSWSCpEdaGf4YtWL7jv5SrtsaAeamd5SYWjWq6BGbFu1ewwdwH2FeD3tyAWN28nZjJFgrwSf",
  "key20": "28ivysEv64J1nboibeQEPegeiH6KQ1xYebbqVGwV3dKSPnn2SPVugm7QbCRM8yW5g4C4fpYrYUMTFtVAEJCKt8R6",
  "key21": "3QxQaNjTuP5kzAvHrbiKYy3bn4CYUeJxiBzkQRCvgVCazEDo3Vsi76PpMZR6mVVoFZo8hqnxnWVtm7cikvJZXsue",
  "key22": "3Z2SdNyQz8teSGBQ7QqEaVS2eUPSL2s3YWk1HgrmmUqVeauRJJ2gMVy8dYsknUpn4t5Vq9EaD1CAbUqJDMFMivsL",
  "key23": "216D6z3RuBmCWtcDC5pVTv4Y9ycrVFv32sWdGNQa9PEHRJDJTYUcnKpbUggLPnuCXTJzZxc2jy9RQzqJqxCGBYje",
  "key24": "W15R6qyuKjCur9L819abgzXXJyYmKUqab2Uqr4uYHyRCZoMJisYMeMjLRNiPpLrRpLTSALxd25t2HxfXRCLK5DW",
  "key25": "2qJQTE8iLqeLGsNtHYKvNM8TuRGdZkR1MPas14NVwKvVS33k9caREA2We6tDVfcDtfnHu4cXnBidU4dPFhb2i73o",
  "key26": "3Un4CznNyPRajhNVXLGFQMysK4HoTC9oMdRZbJ3KPQ9msNfzFJjNKTYKF23KMNkHtQLwR2RktJ5XFjDo3irZhmfn",
  "key27": "3qZJM4uVfDHSDaJnZjkyhsCPZeNcVpvKkFyv2Y4b9oQ18T9knLKuTBXAkps22BwhbhrCDYNkke6813tntGBgwMea",
  "key28": "WBSgb3KUYjY5XQhVmech1eWN1bmroqYEExmd38SGxJi1n6xRjKZru9XdziHFAmmg6DvT7jYwhQfi67kjHwGxiVa",
  "key29": "3ysQFV4r6WPmAtJtAxgQdsx4cRqapCrs8Gzr2MUQCkQxyaEPDkAGE6g7uDekYr8CF5HLD2bHoxpbMaNt31BEMeP4",
  "key30": "M27btX9pcTM7VEo8HsMA1wod3GbeqXncH3LAKcz34oXqsnY35J1VAQdhwibfYfdoPvQPpUNFXLJFftNR1rRBCwU",
  "key31": "4fMrq35ThEmdQhRxdkuTiocFZyPRM5FmyADbm7eHcZrZFyJcgiVikrZj4Ecf72e4RcgYscPuCdX5o2FLfMzjbQ2",
  "key32": "29CA91xdkTFMR9vw61UVR1F6JUEsyovd8ki2gAHAWmyCEBdQ4XwChFfVmeoSeM5c1qkYYHi4Bm5CzLBR7Ry6HicM",
  "key33": "3CYe4DFZjK6NtRbHXRdKrGbehGcXXC8W5PEyS71gRLvS6Tx1nnYqCs1XJNiRywaWjh14h6v4NZYy3cExyLihvk8c",
  "key34": "5JJj1LZGrJ6qjkSvp2BBb1oK8zPGJ5GqyopxPy2NxUzC3xejSfJhGaLn3YJ9QNzAEPTdBbihGdZriFn76uFjBFsf",
  "key35": "4Dzdb2xBGpex5H2YDeyy7etKoNDP5KWWQKuUWVtKpHcok9GHQvPJidGbuZ8D1Cuffou4svBFfJw63wU4bFXCmpg3"
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
