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
    "5Jha766KUE63zGTsTHKwjCfYm9BUhzGyk85eTdSwZDBVsA2HgvgZ626H4Y5F7DPyMdP27A4yack514YkZx9f3ciw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6omWkqotqovhr8Edak4CvJEfeiqbaTakCL4vRED2MvCSACw44MRasPnf4RpspGV3yXKVtzKQgYK5zuQo1ftwTsP",
  "key1": "9H4mXnZcwJrrkeV1AXBHSDnWVV3kQeyKjPQ73UZPMTzTkqhThthfbhwPcqadPKUdEsXGZ2LTuCaNsotQfRDJv9S",
  "key2": "2YDAYxoD2QhqG2suX9oL9seSRuwDQyViAFVBGBPM6QeTFA752Z4sJsZskGt3qzMVnU4ve2pBRpnYjjpP5muLTUmz",
  "key3": "59d1asnYWPRVWchZ8G45seW55ob7vu2NJud4ZMn9BHaa7zpCKUqsUgPwDxHwCidcmrMzqiSJHoyvtztJT2M9iPtz",
  "key4": "2KCtRSJdrsygr11Jh7fpsPcQ1xBKx4yXYWurHBo8kN6varMwjyyrD9KBkuVJ3AYiDhMeHmpZyrk1MKAUGfECMd4o",
  "key5": "zSutPhLaa93scwuYQxwTdaHhE25jKKjaJKwPVqUpdmTPuQ2qdVRjFUYYTWDY82iL1nvQDfkPkcxWF5KwrPC9J56",
  "key6": "4qupLh35pTs6VxYUfn1ihZ7RnvHR1Gzr582xKUYMY8XLuLgyVBhKc1pVg8hwDwsyCrWnBusTwzckpUjhDYrdyQFQ",
  "key7": "4JStSjLmGb1JZqjpHcT3vaDWk1gwtf1rw1Nw9V6cEbL5gP1Pc3gGbRjxyhfZmW4VShHVVGcEzrVkaXzHS9EhpWia",
  "key8": "2cvG8aaXyyEo7WvLjTF3XE5ciPUb9idEGjH2cYpdxbXyYmavYj3VVrw8noR7kbGBHEqE7a5SUr3afrftQV5GzSgA",
  "key9": "4132kn5sS4qdnWwgkdrj5BoAP2AA5XDRGRyyHENGyfsRnqb8WGBhFcnKUZopX1K7cBhYuVCQQixZLGp8dVPMQwn8",
  "key10": "5MLLxf51MpXDkGNKBZ7X7op3wvLZuLz4rwNKgbYMoPLknpgSfAVEEQyPNbTFER6iKvyuMSm5BDrHQ4YkYwkN4vq5",
  "key11": "FG5HyXM8wAwhwu2iyNEwWavFX9ExGRq7Epp6kGX1MrQ5qTtt2fwB5Qeb73evc9wemmoCMtBQvgP5DSMSREGCsA7",
  "key12": "3oiEuMjDcLWAn18vFUCwxhbWowoehZCY2q51HyBaSEoMfGLfXiYnXWX3Q1ikoXEXWuXevPksNdJ36sn2cbdMmiXz",
  "key13": "2gEBEP3UYtzf7QKQ3ez6P3qoWkk4sdqHDMJKoqCHBT2mKzvZ3ftvgvNZ4bVLPivCbe7F4TsHGriH8NpueWPXzHxj",
  "key14": "hE7DjHu1shwENBDZcYofCE73W2Gq4aSRF9MCXRnqGhjzDBS9MfxBBzxFNszY5UEG8Hn8kEgsZacnmTgJLRhFJKP",
  "key15": "TT3EgQYmgyF2dPBYF8eqs4R4jRSx9krfLCDzZRfmpGsnzrMhhfdzSf183tq1SPTLYmkCKbrZpYZuzq7gmENEmT1",
  "key16": "2TScJvjr2PG3cxSTfrMrpUN8WtiFea8zQaY1MzCAwdR5G4wZ5wFJ6Zta8CRzPgdWoU7gNgkjck97y7DDt9ekUxoS",
  "key17": "3FpYobb63zWe1tFeECA2NXvUXyvfrGVsCNep24jbFZKtfpXT43AKMjAj3JQpDeHmWeyLmU5pupPn3ZQB3MUG7te9",
  "key18": "4RzT3RhcUwPi7ngk3A78ckgxBjPxJMxFTEXj2BiPTnNP61CMXr9SZihyBPNPjsZRqX95AXPtsGgVGEfGChhUik2N",
  "key19": "2Rn9UZ7xjPSsr3K4kNLfjzu1naB2vJnbyfphMKYoR7JbWrkp1kSpm3jrEGacRNtFxZBjys7GzH5ZtBBpnoCVdPvD",
  "key20": "278jPeohiovTVASwFKWbr2FDeyyfKHgtMNXfqp2GepJs54CT7tdvQrL7ZNDc9EWqerafASG2SSDmjNBnYZfJcfHQ",
  "key21": "2PBaZtCKdWLch63b7NSNHiGTJEAt3MMSurt5QW51MUoqvJL1eQmCDoa2ygK1RuoTJJK71TfvVdatxq4rBnt6TxKo",
  "key22": "gPYJTDAbPn8473U22cRhX945uj4AXeK6iViDqfJfsmikC3ZqU5Yy2QmjvQjpCXP2HZJWrDyS2RCv7icE553hJE4",
  "key23": "3Nr5rThpfXeYxc9xeST1A8mm2DNKXfFuUoL1x7B7A3iE47okrvUXEdhUvyQc5wp1iTtsGxyTzSM32wKi2EsJi7HX",
  "key24": "fn4UTWD2VGBA7itvG161E5gZm5RhGFij1MpHAfxTBMEUPkRfu2D4LZTi1K9hXySX1ZpAjcpDGarfWxJUhaoV71D",
  "key25": "4Swcw9bBALnCLHpKhXbRqRzFdN8oeFfBiBJJbRdmB4GYbYP4gaPZexFF4bErbxgT8KvnnYTiWmdEV4jXdezyiZUd",
  "key26": "29DQbANm3z8ofMCByZVmbzxQei9WcpuoBCamZiKBs4HDzC1pU6RAGeYAHVvTvbXcZURkHzBtjmXq7uJ3QL3eZ995",
  "key27": "4YHbJsYPB2ybxpBYE4KCANHBhyvr7ToWPEUkmoZLekkKXrvPW5t5NbsduZ8mjXGEMW5DxdjtBYxAcbD65LMJLNXA",
  "key28": "5Y2XeE5KUheCyJWNZRBSyQtKGLLhj1gAWxCWv69JbJz12uKLRLhozNUy1StWkpG6yFXK6s9TS1YhXQFT5P4rimvH",
  "key29": "5rusomHan89WBrxGXYVdZPUUgsZVJAtQ1iu8FhbD72jj859fW5XCJ7e2KhmuwHysWvDeCbMUuB1egG3NhCaB3cET",
  "key30": "4kRzDafmRuFvqF2EcucSLJZKrLZHGwQ6q4d34ibfGN4d7WuSUCsoWVt6MbpicSZhyYBzWAYn1N238egPfnZHXbXB",
  "key31": "5VxEN6k32Z4qHyU7AVCp7dMzcv8u6TjA9XRoPqsPbp1QMBYksYsvrjWjB2UJr1wYHLSQFVhA2z8A2S8NvbNcdbJi",
  "key32": "ojcd1TvEENR1PfhQEunExVbk4YKU4J14o1ZsWcgqXFtkNihynJ8mncGKP3tuV2A5tH38ErSB4e4nhndU8fenF84",
  "key33": "4Jw17qYp8jvrtqx8X93WaFnN2CEdmfd7BmtdP1bwPptk8CceYf8mLjAyW4nB5nqkY7vsN5kaK5qsrs5hcqcbKDY3",
  "key34": "28J678E3cM5Yn5UTsLPtnBuiDW19CApbJWtnye4Vat7bFcg7c8Rg8TXWJ56oK1VYCKKCDjpyEUM7opdtLsSVrvtf",
  "key35": "vJqJz7gN6ZsGj4vvK9A3f3G2htQyRmqpkZ479ECvDzPNSmxde59hF1CnmZXGR9F5Qf1BscziRi24bxknosyGLHo",
  "key36": "5Y2UaDRg7BAkGgdcnuXHw2oV6NMwsR4xMtNZwg3pfRz9uT5NoHcgYRiDErrzx27Ff9LXb3gmPFQqaTU2J4pk1rFR",
  "key37": "276diYB2Nb8XE8pSRgikJhEsxFyoRRmtfuJfcvWikRptrV6zCVjb5N1i5j3EkUzx2aMoMyjywVouwL7butmFMqUy",
  "key38": "4RKcoaAnHqSxsVoiSQ982pT89iVh3RJfPtvLFHnXgpYNMywk42g3yonxRa3Et12K3ieJLo6Lp39sZwYaq99UvTDH"
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
