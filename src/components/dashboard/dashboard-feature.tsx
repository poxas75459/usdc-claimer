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
    "2jcxNXEL8VPZw1uU5RzJQdSoAdHUUpPwMtjBi2Bv4qyAu9jwhDiMDnukxbn3F4oqwj3VEuiZPgy1sY7vPBGNCDA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AiSJb8s29Rskrgu75bp6uGWGjWebFUz7pXEYcWvLbZfimAdoPFJ9PQdso5r5dymZWxJjFveWDCQAmyUeBKS4Ph",
  "key1": "5PdBmGKcQxhvhC7JKaW2e315jxAs86JFrvS5QYYogmJee839kun7WSx5c8wx4NcvXJCpcsWuHCD1oj88oTpif2ug",
  "key2": "2e4conah5qFq7RAufagVzy14WJdoZP2ysDeB3DUAVvXwf5dW7ozTyRDSuF6fCYr6dxGwF2hiWzxTPEGHhjWEK9eo",
  "key3": "4ZSXZoZNvj5kw1Ybj1soLYbSBsv8pe9VEd8NTcH5KKwzyDeYzUH7SiDkDv3LRFa2VGcP2KuuEatK3QPzbzk7d6ai",
  "key4": "3tvc5o8zqrbf5rQztciPPLK5cyhcK45aHVeQSXrVxHZkiRRuzdMdx12FXUTyTaMDxCeirGZeF192WHyHboWhcfPr",
  "key5": "UyHQJ7M4xRc3wHJ2rYAsCFkHy9DJjhM7hZ39UAASRwsKwbNPHMi6hNR6jJkorjRVqh8ZAWPao8be5PrqK97nPNm",
  "key6": "2GuAVrYC73kGiqjTF3zZs7u9Tt8UfJdA2TCAuZb8cGRGrPp7HaYFMBUkGotTqAysdckdV7jUvMAzSJtZY7D6GrF3",
  "key7": "2AzYzDLkouqnvEJVzsgWB87Xv1CQ5Uk8KJympjCtwc4VwvYjNNTDNPUZ7akR4rHTdo5oKrUnnBKGtRX1qLCTANBx",
  "key8": "4sP4C3pryh7ToefjSDHK8DgMAtMi1Wi6zq9xrFG4tHe88YKh44zfQPZrSgusZuBikrUhKaTHd5rPYtZMVebi4gk",
  "key9": "3hp9DZH4DUzXSL9AaEygq9rgdLrAALGJ1zvr1wpKQgkVMZR2dG86MTjmmSfVT589i7ScRXSqDywHFZDPjGnSfHCT",
  "key10": "3MhvgLX2iDbqh1U1EFtVcDHMWfS1E8zZkBMdn6pdpEiKSwHw7U5ynZR4SRmMmy7TFkhn4UqP7f9WMnivEVGx7rHP",
  "key11": "3huY7XkyyPfJA4XauHsc8jNw8BDkym9LAxkWxFiqmZQu46GnhW2HqLSSYQcgeoePFk4ec3Hv4jZHkRLJN88V962M",
  "key12": "2bww39fYYK4TYsCVC71ywYoGkwBDzCXuR1DEHX7rfUqNqMb7qX5FTcUAfdsKRJm65U6EPDsvbQdYjBAevQaXwTBs",
  "key13": "2EfKdjydqCiMfrMeLbmbX1GS3RRy8CYJhKCF1iscrFy4QXf2nMir76NG2bxW51uKA9h3zgsXMUFdug2se7PgoFBE",
  "key14": "2XB8hWCFSxu43Vrsx64P1TRqAqvuNu1QxKg6uyrYuuyctwt11nRULiibTMwNfzbuJWK4mju8usdXGR7xZDrKPewv",
  "key15": "4yVdXUAi8xaoaQD3MJydmGv6ETgNUdHn8v6r4uE32gZgScK9G6Ax2vhEddEMeh3QNGGkK7Zi5HyWuaFyiXS78AJc",
  "key16": "4zXCP3HNdJ1K8CyuBsJ6cpQefQ5YGUgRnLYCeZW3U2vHKGPFtDwFK2X6QbNr2hydQHYYWKJgpFpzoFeenqfSg3ge",
  "key17": "zqeKqSmCkc5dbXqk7V5twJs9KwSsARBYNLk265HRLnyft8ssyf9mUBWDDUsqvVzkFXagmNp6b1Qsnp96oNRU59h",
  "key18": "EAKS4sSh3tVnhSBesfuYLdhsc8mE8U6Ga59jKDMuFzyD8GpzFwqxMMFkYGcHFmG7mjtcvADK53Eif8suzfH4fNw",
  "key19": "4YWM6zShAR1heRdPb8bMHc5Fncym4ADh16crLFKza6Lsmsg6iTEAXRrfb4obsrqqeofwvB11DdSLTaa2SnGhe2ws",
  "key20": "3kY6PkYKhZzxehE1QBHBjVzHYCkgp9hozC2qqTVYYkcr1m3PaK2qbipzC6QEmq7XtbAjBf1PYkX9YC5GPkcBWM61",
  "key21": "5zaM7QgyTsmSCMENKUxaGzTnE7HJQjRX19AFHKBHZNiekrvs2t8AWRwzW2Sgfwqi8QStRokrj7vrypDkKdoA6qe3",
  "key22": "gw7cZaZpF9LV9whmneZCJBNY96nmrTFkWrAsoY4jAzzrfxCdDBR7pBs2Eb3r41V1zoLGuQbgZRbduogb6pSc2bk",
  "key23": "3ELnqgzvmKZRrGZZDoCCJtP8TUz1guTB2V3EHyLVnzMzk1QEpxcjYJX33SmSYx8VH87jUczbqV2vtAxRcoxBwuGT",
  "key24": "5uWxkrvwRQXA4oLdAQP48V4DdCSk5V8pbsVDZ1JiMXYXXnaQicn2DugfBvXouYo28rBrhAnmPAo6xnfxqVxRZTvx",
  "key25": "EBtZTXxskLRgU7faerRKTeciB43vd5MgeV6d1HV1mxcDtSd3Q92vjtGJ57n1832xrZpQ1BBUFdTPzSZ59aYyYrN",
  "key26": "3HUgzn1WoJZSQSjaytFhk7cdxxj4ZJHL6Fa2nihbnY7QFWJdppmHPVUvcpEnBV4t45EejVEUddDGsQDEEkuLgo76",
  "key27": "3fSxUsKeSkNZPm6r3FVDhRGK792pivNbe9mAX7UZYXVXWWADqQNWjCVoFzHVMmUCeZbke8yneeLubKmCpVRrZaJ3",
  "key28": "djU7hSMZoEFos4WkuwouxLRt5GMQ737LT9NquMXsKCmuHVD8ZVJwEEvQ7vzLaVKna2N5Q8bFra82A8suD3RjYMv",
  "key29": "4bWyhu1BEcLwo8TdhLuEA24UoRJ5nTgwTnv8h7CtYnWtKuV6L1cFFZXC3s5mJXTeypkg2Cp8fxMDxDyGhHX5K1cH",
  "key30": "2octvWTqqjo212c9HhtHPVLUa7sRFvVFawcQrPdRRwx5fPHwAik7VvjbzCmF4EEqzuQ7YTStwmCMSNXVxUiKNnwS",
  "key31": "66j9saEHZVB1EZbwD4cs7nXCcDeEJrMm1vtG8QZafXMcCjHczwqHrZSNSQaj9DHr9VfiySADzXyuJvyE3At869tH",
  "key32": "GJWaP1xTpkA7Xrj7BVyBE2gpMH4oX2gydm12GoXR7ebR4ou71GFBfixH8AzzWr3M3Hx1wKtw2cK9LdX3JyBu8ix",
  "key33": "264MWjDoe1PohzuPnqb1nzcQDHNdCYoRoDS3H7ng1vWzvKPFvBCuiPNsREYhijQmjHXH2HvbxhvWuxZ4t4qTkL7k",
  "key34": "k4imtk8YvF2XV4gujgvPuRmCJBUFt4wtnRx9WCiVpRDmJWkEULMWqJyZwgQiSc4AdG9RcJPjJJXdwbKnFCcbp4z",
  "key35": "pfpxnzVW3653Mxsw3EEh6cBhx7nt2vZau3Uwkpts8aFiaZbzpVnztNmPBDSdMSuZjrDdSRUiTVyKK5hsJ828r28",
  "key36": "2AcF2jSC4wJgFFFydWhayechSeLDyEMkcV7FP8torycso2ajrbRVVj5uhQZy1HnodbDgukMkuLFfaL2MLzyfgXyt",
  "key37": "vGC65JVaT7hbQddXFpmkoxd1T5hAh6bDtqcA84ZJ9s6gHXfUSNqKH4xbpDuxRMSXewsYDJBASAHjYansTyVde38",
  "key38": "2SNCPgvoVEQGTsDQZJ6XTnEmjzfJd2fsE6aFRUuEmZiGBfpTx7ktpKarhyUFkZXFk52TM7kBoZAHwJNuiPcR9eCa",
  "key39": "4znpqnruVUTmBv9c6rKdTvToZd93X5jGHD1ii3e6vmJCYmM3AFBBZMtSvkgD3qyR1iyvADBEC7kowFPRyRAFtVQA",
  "key40": "2awvUbUWnPF4FwmWUS5tqdmwHCiNnRSrttx7XtvCPYdSAkW2ih9osWxPDzTM6cW1BDbmsWwNb1QXzMQxUfQMuqX9",
  "key41": "4JT3qL9KW2GsZ11uuZz3Zrrum2pRMjUf1jFcckT6m6VcRdkkxYw56RoKy1DJ4wuq5HGAvqwG2fHCY2Qh6xhN3j3G",
  "key42": "2s1WnHbtGoAUJu6HMGH6anLyjH6KLJW8tVPdS9obJdckgu3YSCHYhrisPow2o8bRhaNS2spsmr7yQHpHiBvZweoT",
  "key43": "4GZdQSjipzTqYhtPh3CyvUUp3Mt3nd6e8Z8eg8nEqA9ohL5cEJNVX2fvkW9EVYKjmspnBGL5S2xTogZiYbRDdoNz",
  "key44": "5BkAFC46uVgVLeiJioV1g2WebUXxoYVCa7Y6DgiXiLyxEP5Mcty7WAPEoRnNDQta4TxN7uYSvgA4uuAyPFHWxj4r",
  "key45": "3siCodFALinLCzcg2kCxHUb46MPs6qdCpkyJpqDDvHHmp2xZa3s6YGVQJ8XrtWmhXvWc8PiZBAFF4pi96x7iZfXz",
  "key46": "2wPSf5kWArpWqorJbp3CmidVjmdvesLvi2hhfUNGNZXAN4mXoQHFnCwHQHgBhvKj9QX9YZ4xLAwYq1c7zHu2ZgX",
  "key47": "3b5QDdUxJtFkQiwhcnHnH59sTBZTyBjvgPTh6ToegSfoUiQ9Q457D4DRpAtGXbxer5P8Awme4n9siqSy7arpx6CF",
  "key48": "5gH7nnFPcr5FPuBcssoxLLQVL2Y9iH9vHrx3582zykjZCa59MXgYrKHb1dUgpaW9Xf4r93XiGaYQqBPBYYTTz5YK",
  "key49": "5Nh4a7caG8DQ1YepqoEyfwjANd9edh6Vozat3S5D3MsFVNYGq5oEXBT5H2d1ZZMddEgx9Woi9JD6igmHJ4EeoMAu"
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
