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
    "e18r3J4NB8PC1bZUxQj6wfmhqSbY1ttYVTArQWRB38GZaMNyxwKnvn6X3TwrM2CdWPM5J2z4J6dtX7qFpP3n42i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DtEkB2XWtFML85UuvYYighHSP5TkyfRrfN5Ax4pktPN5Jg4mez75D8tixzM9FH4hNDGfv6XMqZR8w7bFszMDPnn",
  "key1": "2Fhn4JBm6TKMZrkxDxQbtCFpaGYfw3aopWE753bzghekHRwiZ6GoDQsrM8smpYPFYSCxr39oUUgwYmEFLXJtRm9F",
  "key2": "373T4Bz37WTtMDi51Aaaf5LSewqqPZQ9AXbgfhM5K6rsnjSZ7nwHwvSiXiscnCumamVHNz3ysc4rqiia4beVddme",
  "key3": "AMthGVNkbLdGryr1YDKBXNS5LJAuiXnC64yWCXqteHNn3UaTvqR6GYY8dGAh9yZFeUfjuT4Za3Ht9zPipobmpQH",
  "key4": "mWkRDFTKLAb2xSTwyntYpu8gbttANGf1BuZfwna3QHhTfTD6MtWt5AqhBAB1Yes63DE8ibv3CvTkYNVXZrSBswb",
  "key5": "5tBU54CJafgXibRozad2T1mjghirU2e5phPYfApVMcR3GsWehEngrdZfdCWkeYfHJPue9s9w5cyZ2D2SnjxAUdZA",
  "key6": "d3tH6CWeVRTqUAnH3rZVPsz2eXRuE9hnHsM1erDEbebahz2ku76oHRRYjxJkvSPtwCipDiPrjvTdSSg5rfHAK9s",
  "key7": "5JCNG8sisMYWLcSENaJLMkvM51Ghn3RwcsTTzqjRTYi8yXxad2UvmiSYpUJLodn8W4F3MbnLSUrfmR1i3Lor26SG",
  "key8": "3YaUdPXoEoqjt9GcvoWpAvbewFkzi4N6jkaAdGRZMUo8H5s6LvRzXBRsiJVUWTZ9yifj4BkFUKkFL4FjCATyn5No",
  "key9": "qrRxgftoUaCZCc5WnbBK1qAaRzq2r48hsHucehcpsXMVrZiHMreHtvbMmmsa8NfULbuQz53q8jNYYarCzREDe3P",
  "key10": "3FbtaFc6d2ZqNyXduK6FwVZZ6mnWZaJHkwE8Pvp4uU2cxPxRJhvyWHu5HkidyftikQad8t8vqjuqNoDYc9C4rTrK",
  "key11": "5BcPBURJiMgVGh1K1nQLY45izDQBDTZ9K27HUMGHPMGvsihKgegU7SMrzQb8BV3fxFisqbHSTGJ6c2LN9sWCtmbQ",
  "key12": "5tYN9JFXRRhr3sJmdtenbvwF6vyTf388k7Ytjakrexe1ybSX2SVvjUJALbp8AJWaGbZwp5thmhZipXqjBFQ8Gzwo",
  "key13": "33gWy499pmc1mr8r24daPakf4XtZq5RyDRQue6bAP5tBrKopSBVU8jie7fnhUsCSoaGVv6WdtwwvpSQYEP31fDtd",
  "key14": "4HvQoi1FaY7eYcLqXdie4usHUhLc5fvKVhtcJFEGBTnAgZLg24BrHrFhsTsTzVm3yM4UFXHWCpbNtdXeUgMpi1CQ",
  "key15": "5Er5SQ1bDRUCpDUrB2BbAQRmiMk1bnCCJBi3bqGS6saJbXxcosWBwsBKJLAbG9ufZ2V2XT7YYYbnkxhJNV3FosQP",
  "key16": "5ET45iHuDdP6FZ2uUSETrskQ7vCgobP8KUcJP6qDHkBibAHrud13obCCtZDbKZjLAXHA5acBHmZmaYnbj1hFvLq7",
  "key17": "62PBfiSmLRDvbc1w8B3myuq3zHgHviRmx5cycA3neQ9L969WE9HGhcK7gnaGBbm1acdvsSJguamaLnFpcWiEtDKp",
  "key18": "3MmbTzAwjChTLgJpfN8NkCm9ADizmheaP5fyJ75dPwYUgEWL5f268uxowzH64iXrSNUYPoeCiVHxBwrmJKgHPe9",
  "key19": "5a3odnUAz9F3TqRLmB7Y6jwkZsnLDU6eH4dgrcnQYeg6VKD962ed8paGUEryHGqwSb3z9Q79DfTwvQaTSEmapBcE",
  "key20": "MqoEUy5RpZJwmfJqz9YVU6rsavuikotZ5PbEp5TvoHGUfvu3m4tBvf8DwPPcDLcgWdn86CuUWVMoM3fojp43roe",
  "key21": "3ZXjA8RygsgB7v1VgdfVoA6L9jNvHhRLCS5UMrJELqD6ZnJqVaaxqwW1Lmh2iXaH2zaTLWeUMriKRrt8QqMGYnay",
  "key22": "5jrSXDmPiPa1SCVzKZNC73BFFuTteptZ75DEAMhdXGz7r9Jbpi5XQtiJg6qsVG8SqdnnRjcMxdNtdmXdFPNcS7nz",
  "key23": "262wAhjepuJB3ZtbNAvqC9mjj44oGsMLQxqyaVTLzbfR8TWVH1PXFULw1saVvnQ43Zkc5prowKSg2NhFJTjBCCMi",
  "key24": "34mX1725AQR7qawxyFzGpewupN63STXdkYAcVckAZa5fEyeCwa3bJfVkaes5NESC8zawWfyP8nrao8JLKMQRfgS9",
  "key25": "2YZLGgBR6dQPf7FDXpFTeet4He3aYxDmqn76ocuAC4fa8PTmnzUCyxrecjTFYxfbbA1WdRWnXs7dPv95GsPzQZVC",
  "key26": "226zhfGzU8sTSct8MGYVpcxj1B78KvaPi6VGucWhZwecmbQ3y121cTfnyMpKYhG1ECznxx8F6bju8F7ZygqWCcMB",
  "key27": "5dpqMTAGHmSKoBju33XNJwsGCMbYSsYqqBPsDcLhzPbqkyYk5LRttJG4ou7r9e9iqMg6z8EbwwzyEU6QwvQ7GCJe",
  "key28": "cvCriaLTqDkiDxxxLEsLgpDnFtyk2GpNbvCstLPZsPNmnELtEy4NNG1bFuBicJdRZ6Su43egrrGBYVVFS6eaUdV",
  "key29": "5zjGUhtUx3Xb8G8cUwoV9XFFzDasX7DZSEMTJBdspjrwpGz2Fnqf9okRtwYaKyFhwSuDdMJJTKdpJ9ggetWEtTxu",
  "key30": "3NtCqQDirL1kDn7hBZRuxwSLzZH9hZkX439pbbCscqggKymKiezjbj6MrKE8s52eU4N1gCgCEVTyrPkWZbJuffRw",
  "key31": "3pFNX9D7BgCzQTgyTSTFUkPRYhTHHuKoLu42qydfM9EjwdyRw43hZ3mMmtxDzszQhodUf2pcE4ET2rjurZjnhGMt",
  "key32": "4GknpoH5EYAGw9Kzn4sZQ3XfH49RaRdY4LdyhCwKz82ijeVyBGsLsL9D8Yn9KAkjNyu8Lw7uD6BSbVAyLz2xjcZF",
  "key33": "43BZPQbn7nKM4Q3yNJSaY9i1ZWcoCcRCNvvimX8PcGM14SoHU3ksaMYcutpBj4VFuFErxMCkBe9rD41wL7XeBgHT",
  "key34": "3d63B4HisEnc255zvM8XNEFpSY7PXp2hx4EspfTJ14oy6E5ZAHiFH2CDXKyF1BvurSZw1PBE8dYxAaywktx8QYmi",
  "key35": "2bv1A4sKmi7WhGkWwzUHbTgd2A1axkM7BF7UqH9SuR46ryvRdktNwZq7XM6jYVa4ACdhoEoZ695vVqpwwh4ajsBm",
  "key36": "2TDwcd8p75rHqb2UqNs5vg6dmjwc5tsd8LYYBzC5s65GVd6fWHHDj7Kh4KikPZHnJ1PJeMX6ZrXfWoLK6w8Tb3ax",
  "key37": "axGHi5hLHqY1dvdjpnuPjjr9G4Nk4VwbCViiQPoKHPzCtGXFVqWaFNdejAFF6cvpbAXrurDqqdAdTjtUNuBdNy5",
  "key38": "5LpgY49c3Hfe76o9iWgQA8VoN76KkhSwPBZKchY7WWje74qEAhYf8WEpMvRwtHQDNfrxVzjVRXcuEABFLQFgtejv",
  "key39": "iaMG1s3EQyCv22Ggx5taZw2pw9mL69nEb5ADS5rHwfBmvf7XCo8rJMXWQusuzWvgyU1zCB5EjQeMuETaLdQDX16",
  "key40": "4xKpCTPicaRxAXGHBzLWoT2pjws7XEQSxD69UEsDDezq6JH2LyGu6q33tLKxr2KzSTosTk9e8TShHdx6tRMbxoVn",
  "key41": "5j87kMhTJkXxk45XSoeiB4gJHUXivmCg1efRwJUPiVTy7bSZBZr6AKcH4pnkWrqtXNwwsX8b9XwbkUwXs5auUQzh",
  "key42": "e4a3S9wsSnU3YtuYz5tPTv32xed1CNJ1gDn4zQpQ1JaURDMEPb1PPmUeDSeN9cJ6MpChqfzfB9dzKBjXYihTqty",
  "key43": "4Qoxi34JcuKVRmBS7B2UJ4hHAu3dHt4KiGHtGMzo9yEm4kguJiymGcefpcKirdD2kKX9nPmiL6Ao36FJARHBZp6U",
  "key44": "2Z9QAtCxNcUKHi4TD4FwwwfaFifuRY83YY26PwbgHAgJEDWNHXPUw72iiFUfGgEykSq6mcXsU3H7796DAHN1pCDN",
  "key45": "5VB9Vo7RtNHNie5FRycvYNzRQwP95gd1RzWie2S5UzrfxTbGUnv2zfJuBn9AZK2vqCdCHkvjLH2rwoQyQ7VcyAo6"
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
