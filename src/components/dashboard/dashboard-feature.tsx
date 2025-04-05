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
    "2WN9DyND4tVW9JA4QnCrdQSn57obQSxSmzcqqdZPCyEMFVVon5UQUwGxBN2WSdPYwD76oACzKFWSx5MBiH56wdNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbfdxDf2mfWbiP8G8tPzkEHefLz4VcFWk7BN1LmQybamyQwVpq8R7RWWYoi7H8toJ5RzUFwj74AVoXpXC59yLGd",
  "key1": "4f12b6iUZmbJfCu8HwDhnm7gpNcXkKspdkvEFsom7Eo3wNh5BdrKuGZvbeYGB7z2ZbgqxCYmL7XHZPbLf2Gg4FKk",
  "key2": "4PXJp1F4R8AXMVFsEkZJ1XesAk6YXYUkkxiGj87NUnNGgnSJQFGydHR6z7Ft2jjic9SjMk5HU6kzdWEJo5rCyCVB",
  "key3": "2g9qKPkSbLGkFB1wdtRdSYbEQXNitrfJ2tPdJGdgMxkPzNPjdFUyv7Lruzx5VNJVB3EgXMwvTSg4gsJFoRBf1Vpr",
  "key4": "oHnVSzjER7Yva6Q93k1faCyB7uqCY9GzT4vKrZdZWWgJubfUNy5MwiaGn3JPp9WuH9e6WRBMpUrdJc4cNSdMjvn",
  "key5": "2y6fGz3sGoi8L22gkfXY8weLF9Hs9ZPQACp2VPW1JrZmLNy3wfUuQFrceUxKdRtTLuHoFxk7Dx72xuFr4tBpHfWg",
  "key6": "54RFRREWRg2jZnPMdjCUkmn1CPMJwyZBPMY5kRQ5QaePfhNnLP744FX7SQENMVvHY87F6zkTzynUvmrzofNj2s7z",
  "key7": "5weoBmAizgdzNkCGTjJsWrDBcSq8Ac543zSr2wcGkgor6uLK5xKUhJ31wevjtv9Y5pYVXSNQus7qJvNmuLCSd2Bn",
  "key8": "5dY4BanMFEQYDsMfiBqPsD63ccGHgV4TSFFhw4TY4gH6f9cLf63hywE2wkbCG4LDaY6S6BczHDSCzrp15yDmVXiw",
  "key9": "3a3hoYxDMiQDbDbYSnPUXn8Dbz2b48Y5UXQByJrDuJHw1bf8LytNAzu91cDF64bEMfFqHRRvpoH3fRvQxs8T28cb",
  "key10": "4tgkeEqM6jogec9x1zxNDq67p5mi8q4XLiVtwXq9gCisMSJyjZFrKEmwA8A3QzyPmx5d8vvSwdtWhqaSv4k7gX61",
  "key11": "3a4scT5r3arTbdYFXp9Bs2q7Rvihpy8cv4zWKJxbteG1JgcDRgTuqhnCDSUmzENnneYUzwTmfSMVTP67tnbJ8UFj",
  "key12": "cQQ4UdwfHmSDfMWnnVQz86rCggPabiSwgKDrhRwsu16KAV2Vrc7AtH2d734qvLuQDPJjMC7UHSPVtov5QDVSay3",
  "key13": "iDZcLMmpSD5NPoX73Qp1C766WqWKrnrmiauVaEFFAT6fP4HAdi2sR4m9JYZbcxQGmCU8a18U9i3o6T3AzCpL9WQ",
  "key14": "5BdFgvu427doP79sMjvmhLSYaomtWj5V9hm751WTf6vhygwnSFifALWmPpaRpo5AdZaAe1SbFxP1CyM9ESnh1VdF",
  "key15": "3UUYNynyn6so9AHvDh8Y6h754Eoh2gU8ihfj7JsziNaQ6DmiDPMepA2CGijoxnjVcAH91H43RYBp5yGkfM1PB8AQ",
  "key16": "4VRAPLyMi4CJU5zRo45WE2wkxcfqc397JrRoYZdCdvzrcbfdhjXY1RECCSFyBQyZexmR1N6WB1HGoMD17QteuNiT",
  "key17": "5BB5sqMnevMsXMjpSJpvLVdcrzQFnXkD3byJqfpvhiE9uZg2JtZNyhvcm1kYkUXEkC3ApQdp9nn49TQbzwJoJZBm",
  "key18": "22nPE7EtQ1tySQhonwYjPyhZ5Vuk5NsaenLWURazRyWbKTk1547x5iZ6MrN7adPrQQhyUQQvcfW4dx8iAFbB7DVL",
  "key19": "5d2CVV4uLAAp5ofzUAaGKjtTBuQksEdE7LbAsJBrq9wkT7MdQJyteLEqgTZTeJSXAzWssrYwu4AcJjvMrcWXzxJd",
  "key20": "2gLQz4jpFaPwdBcB64JTkZ3txzKjSRS3isS9oCSiZNAMVA4Eq1do9Zj4xPsAbcSgf7RE7kVSeH3qpy2LY3Pe1q1v",
  "key21": "xjrBsf5MLKR6KoJoHpMSrr1mg5NVGxtJGkPcsJnpicPFsS47mDaHgvKryi6kudb8NFZseLHrXPZrPTeCurCmYnV",
  "key22": "4rvJ4UDzHb8U6fsUPxfdQ2cVou72mW84zRuFbxBauaTDkEfAMA8sGVe1MNBD1x4z1Kznq1EhrCubtLR69LXK93vP",
  "key23": "eKJAjBMECLGvg2F2JasBVqceHryyGpKJ7S6SgXe8Ut9DrqfmtqansHyz5UTGZxprjAZiNrV7KxY35PQrnwLZ9JM",
  "key24": "nsbbH7qW9briaoqPEwKsaRDD826biquVoLmbHcmMCq8sRC9YSZ7KkzmrBttsiaUu9HCG9W4qvPPVHy4GzkFnTbs",
  "key25": "4hsQvEagd9N3b9Sav7cshKSinFbeHYXEHkT9KZtVK1yHmLY2ZBufNKCgLY9XLjLAqAF89XkXq7LDCSUEqEGKrZqX",
  "key26": "AwTVnxhLbsqk6pHsQEjACX7xubR8oHn1u1BBXMKGFDStVEhVFMcSH1qcSAWsjMMBh8DH14ovN7q88Ru44ngE1AH",
  "key27": "4JpsbYUDq5EjMsZ3J3nfzPCiHNkyCkE5mCcwup4RET5uq4fE2foA9ygCiY2pCi7RsxDz8pzinC1mjb59tayzaw9d",
  "key28": "4rv1KvrmLhpk1NF72FXzLFALfcyBYpWy7PAMg14J1HHV9S53Ve6RAvW2Bk6RmKPjDV5TXwos2nejvyWtCtSXt89u",
  "key29": "3XAjA1aA63xTwUh8UX8U1EoaRPxs5RQDg5RqoDY3KWcvJ9FmVDJogmprecwSUQSCGipzq5xoovhQq9UJztk5dSaT",
  "key30": "t4bXq4vGBthEFH3fD5zo3ra2iumRq37QMNH3qVmUbQyzhDh3DVSA8sG73rHAHcfx29UYKfJ1tMHLmp7h9tyA5Na",
  "key31": "2pH7HRuN7iQHqrTL2k56ARphx9hDS3TGjEzjVGb5Spi4oLdDMGXz78ecapwoasMDREuWSkS6XSQfPU17rhheBg4w",
  "key32": "63VTDbbUHULasBkUH21rJe2VE8yC7TNhBX9xxGZCwhwR4kuwUVaauRx8DhCWtLLSNSbCJ5jPSpcve24gMdXZc6T9",
  "key33": "2mYYtwTbq7tdMgSWvyxNdf12Mb3FHP8dFdpwEVGS98SrRT2bE55kFk1iPmCZroXrSMpAEArHLwNDKiC1jqvcgZ76"
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
