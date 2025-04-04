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
    "3oyq8KqAYBku4DDyASufCRivMVQwpTYeKPZgeMu29zXE5xJBYgrqKu28yRCNjRdgKJiQpNMivT7n2ALuq7ZJswsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABiLAVMcfwe8btHnS8443x6op55bub22jKHnUkEx88TLtyzcNZ8jfVAjoEgm4uLwvaDaJ8XnRjY2dMFZjeeUmhu",
  "key1": "5CJSxbaXPZxBnT44PdfGwPXvQ4AoDjL5RymYU7w7p9SMkEAr2kXEQmi4WwZYzH2vdE6uowFVgp5jed3X9iw7wJcZ",
  "key2": "23kDWSH9e2hSatw8XV9VJr64EFTjNpqALSaqDmMXcD4ZmBuxAjoHKEzoodnp6WmRhA5EwQkqGYELbdXyoDRfEmeq",
  "key3": "NTpsa2fDySi5Jc8637g1sTxe5GVagMrhWTxPBZar1fhDtFxX8GgfvXiFzWhaSnKnt73Q1KwUvhPt7E46KWKJsab",
  "key4": "3bb3Gbk962ZCQGmScoxdo23zw3B1oYMbJ457zaz9NjZvzxrokfZbJLcPfZ39HhLREvqJHWmwe1m1Qq2nzP5Naa2v",
  "key5": "uPU6ts6puMgZZWas7Mo3eaPFeY8E3tLgJkNiyf8GZKa7afqzohRGxP4UtnnjwPikhnDTuMrHQmsBkcNAMvVvsbk",
  "key6": "5afqE4BesMjvc1VT5cHkBbPsZWSEsqi6uUW17zxoV6ucFFzjxSLkdbsZqn65ATS1s2EPQuZ8uVxq3QhX39xZJBD2",
  "key7": "52tbmTFXUM4jr9Bkg7eVUSXErVgvTZm3v2Uhtqw1k7PbdTE72Dp9J15akNMnmahnTvaxz7h1Cz7MffqBREZysq8o",
  "key8": "45mwBA5sLAebbA1Xj1VRW7KETis8vdZZJZpL1BaLGfDKw4C4kXz5FNpeBHfpea7vwKuB2Z6boP2RewuCHcik9SPA",
  "key9": "2ty96KmUqijugcs2GHUCBoGqNvvqzkuH32SF4YpEAm3YM3jCaHbwncSs4FEfFC2H17xLH4HwUFRpdvXR4fUZ4xRf",
  "key10": "2LqtUf5aw51LtusGEDCjt5iqXD5bpQYhy6gbgnL99SEcg4c5EeUFPp2ksRjiKhRJatxsAFvW7tx3nM9kufYgJa4J",
  "key11": "5F71hGarpEKkK5JTKxPrBmn9v8d7hJ1Y3s2GAuZrHDyTmezNLei28iE2mN72EigB3S1sFMFNfnef8zonFiTH3B6H",
  "key12": "H3vZrLsnG2fnU7QZTNphytgCQ8JNiWKDEEYm7HPjiNVipjKHTvjJKV4xZC684RGDnh2UAWzqVScVQSovqbt1mhu",
  "key13": "5pptEZxFRwCgNffGaJHCTBCzEjXwParB3Vkp1tgx7nYu9A2dfT1o9riFA2WwTeH1m29jC11KMsCdemjDo9bPCjsB",
  "key14": "4zKJVoSDYV1xYmgRLdFNnVaKrBGdCR16hU8Nkd9j1RdmkSg9Xhn8jdPsnfc2KpD3FefFzKQ6rbxSAMZ48MRGpaSR",
  "key15": "4JsjHTAzzmAjeuYyafBoV3SrTq9Cxhca8pZ4qJkDdxX4VWtVjTpbucara7oi8P5dFxoV18My8pFH1TstZZyvjDvB",
  "key16": "Cy4LFWYQSAxwDAmvMd7h57EWsJ1XuRLvBbw5s7gKX5kdSA42hCXF4an1MMzu6iEHNhuDQ6NnhFVktEHF5tg6692",
  "key17": "39X26CqWzeDvDrfWdV9BETp5vYyLkaGcYqGEhGJJVkqxsGhiHmws9s3cvieJyfxaifNXLLYVBEZ6CatE3Nyeuqv3",
  "key18": "QcVECN6TgEC4KouxZfWtL7Bw3PgZfVSLS57jgEKtrKGMbTttHDWS7vyWBKkY7odHSFpW48kYp98ZKhwy58NwRxk",
  "key19": "5zUH6dzedso8EqFmTTn8edcsBLyNVSJJkj3GxMcJuxxEXr4vPDC8F4CjM8fVRbnDTfwsaHabWHuh9WwKZmtTnr1h",
  "key20": "nuy6JjkQBkfJt9YeqU4ZnS91fQa34HyaxwUu3PT3YNSJLiyEPBNcKHW9zsSzxsHJRiph48nVuwg4fiCYWfjqpY3",
  "key21": "q4baSf4AHLcNf2bhzMemg4DGq6A3uJxKUu3BfYGxu1QVJcwA4qxzbTsAp9jzptqeaKPweLiHKfPjVdE4G3KYNyY",
  "key22": "2bQDD74RUsuyhNCyRXQLgP21wqDUXBhL5vqaM51F2FFVfdvsGHhPdnFFDPJo7Dwg6LjmeFu4o2f5wGoCSpEcq6fx",
  "key23": "r4iUkzd7FWManXQrMb98S7TAwsk4GEM4fpiD1JGGxeBbheyZEfe4sHZGsmnUhgvnnHL1nxjatMF4gq4qu1sYwHm",
  "key24": "Shg9kaFkXAtAtTR4jqFzBBMs17cNQpA1HJVtthMs8tjHf7SE3K12x9jLUEq7WpuUZhAjThj8T6c3muUX7ir7DLn",
  "key25": "2j7z9PSWBPph872csxpXpbs8DcRkpZqo7v9NLAdiyAuW9hNKd8t9DEtVuCtcQNrrQn74ZVhBJqqdVYhAAk8iucTc",
  "key26": "53oDbGciPgqKUpVwpgxq732rtsJ1aeT84skKcCnPQaK9i1mWS6ihwQ5kbLV2AzQrWKVdgUXCsewJwZZyQiMqMajm",
  "key27": "2P1Veo3usP1KxYnVraLvxetnPtjDaUknMPWoRUoidnMYycZMkqyEUD3TveKUBUWUnAS4ukRgmey3xgrBm3JHPSDb",
  "key28": "5snnHLPHpZ29ciESgJHM7jsUEme17nmoRFhZPbG4JUTHbJPVJUM5wcEtSvwQV8taHK678n2RXQ46edX2rxnpjoQx",
  "key29": "TMjdRnetwzkMqnsKU9X4ZXJHBnWkzmma54Z7PuCCyewBCAdE8sBYjN6iGuhWrwskpSxDu5HUQd3SyDdKkTMTn6n",
  "key30": "4LPySivJN61sk5TnjHDXQou682nSRUcn3ZcSMoV5GYXq1hdAdRRPkv9dMJDHTZQnTGnFbJB9xhipSGVGMf5RafF9",
  "key31": "Sp9JfgUrtJXmtVQzjgP5ZW116CJ91uoufReMgJtJbwJXwXysumTMqFgi1nNetAYTKiC5fR3xSezEBDP3ETe9V4n",
  "key32": "mULHPfgP2RN4kFiedC4z4Pit2Qo7SvBph6gRKWQ862tt4tcYwu1HkFfFnbtVAHNDPYmzoMVUUgCj5AsxVvbE9vZ",
  "key33": "5jGjkKqFGzhDLcT5AsSBYidTFH3gPJD6ZYwtc5TKRGMkVNk8Q5UiFQkoTR4YPG2Hqk1oLdnSQN9CMFYMHQEbyTCf",
  "key34": "5CftSUvxjT1SW9YWBCv4U6LiNdWNTxt71QJRCX7tjjMCHzY53eY1y94Kf3nqZAEc8Q2SUpp2vBYBxt4w1XoqEk3t",
  "key35": "3W4oP2ZFyKT4WSAQq5BPqddnYjEYhos78vgRXUnXEeJJPQ1ufos5aQ3oGMViY5p3v7MUi9kZxiiGFHjiaQaxrtbT",
  "key36": "UEUDmqxFqEZw7CXM5zSohQqoXEkTdni1NDy4byZHbEoctvLEC11GB5jM4qqSUmPT7QittRJhKTpt2X5pSML62Js",
  "key37": "4ehcSBTzD6ogaWYWSoDu9hDDEwDNzSnysCRRKak4a2B9rA5GyzfNxAJeCVu6AGMeon8sKnqqzPb5vUDwJWWNdSU7"
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
