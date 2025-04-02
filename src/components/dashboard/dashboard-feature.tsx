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
    "3WwCPWhQpcrE4WFEdcfhDsJT4d3tKjjDDd98E5ZHohPaakqWaQKWD8K5PiAjM7X4Aw4eZpfUxFc2Mv66iCG1zeNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DssiD971dRkjXJuUubKqhwTSPHcMGYoRg7b55JiyQ7SbpMBJfum2dRJ45mcxjnYUvs5fW5MYHg4HYtbDhKBobZX",
  "key1": "5S3bMRdj99tHwXkdLBGmiwHQak88hkrSAKTNzSwcNDtYYxMzBSii8xWmjffnuT6YHWJPYYXhm3JCnSTyqc4DFuNP",
  "key2": "2TFvPeG2MaVGWdLr5Zucd7SEWhoPokDqjthnAdQ5PFuKnJsYCUHkm2MbF9ACs3gSiqPJUsEBnzrtw77Px3AwZVvi",
  "key3": "2SMxn4yYmcWJHnVJz11PqVgbtCuD92xsfTGWG6SQYv7fqEBtdcQzRJs3hMHXo8SG24aoz1Kdece8gHadoZhnzqgj",
  "key4": "4v8xMzDuLzBq8szizyT2ZkvQe9vGtybhkcPpSbHZ9B2n51TA42k1dob6gNZSXvjqikb6NgpDRJz26d7W8V8aLLVb",
  "key5": "3dtwQtxHrCmmscXegqvXskQiQ9J8nNtvG2EvxERCLTBN5yWsm7ANZVR2PihZauuQPHsCqjebmGKFdqs2fwJS9X6u",
  "key6": "5JyHnFYjysRaBEqDNCgpsghh3Sx3ad4CpXEParPVBrSc5GA4i2LYmNVg5dNiRAsCo8xyN63ML7RKLfBoPawPrLwU",
  "key7": "4242MBp4pbpeb1Hr3eokfnXFanop52ZPpWadrgeoPAj1NAg3pfjuQJKy7sHPkVvDwW2rr3Ds7BsGFZjTMK7ybWtt",
  "key8": "56YAykotCq5bJNkRFe3UaHESrBpcPsZRCrXeBrToDRpMdwcSKZtzhB3cBFPDRawXfUh1tBbNsifthPiok9GBbqHP",
  "key9": "5tA44dpMK6siWPphUnZTJPFFNModBxnVr3bVXo2snaKs5bWnSNBDAYYaBvGLULmxgssezvpkxDzqG9FjHQ64SHM6",
  "key10": "5mZWr7853Wpg6eGGcLvyv6MNcajxkSiiNrmzkmM9GS2aueBCbFp3evP9Qs5AetP4Cz32N94nbwYchcEXpc22aX9W",
  "key11": "2eLk9y4TmSWpMhqT4biDY7BngZ2e7VAbBYnLgcMVTvNbvkgK621dXg2VdEneCUQJwCRPcAhx7E4hBatwEopwdnNX",
  "key12": "2tsJTswBeqydU2BDY4dmU4JBH1JvqrtRfkpLetvLcGXBhsWdaURbcNrbep6pYpqiJwi2CSLfYz6Vkn39zMAQQV7k",
  "key13": "4cc3gbek8MVdcpPU7k9bJAPBEA7xeCc9KrBH6PGzrZ383FNvkEkqGnTooX16w7SnpK6KWCw4eWc1xEYhf8B74rUH",
  "key14": "4uRh49PPSmsZHhx7yWS22WcAjqQezNAbCpLk87uMjUX3fncKqssDqEpf3L8AuHpVWmyVthUFZdjDiS6t8DZ31Wc8",
  "key15": "4yUyicuCSSaNXnzizbiJXsgHiYKyhyoCni7eUq4nPF3HL6vRZJijjThbfWswgGPoUEC4LQkudSSmofrD663kDC8b",
  "key16": "2ER51qXneDwrvbnkLvBKxkAmEd5p39Yz7BgjEDWPwyVw3ZXjCoFmgbdwG7sxaprkvtg7ewW8z1z9weofnD2E41b5",
  "key17": "dQ3c1bf2C8fyHiTc64hJ1WxUUsQq73it5DERaTMx6MNGBamA99BfgrbNmDRh918EEqTGAVxCGshmrVAv1Hmhwdv",
  "key18": "4dLjcaxZkqiV68LXpSag5zUvZuKj6mpgvR3r43aKkQxWttNFRzcnC3t1ZLwDwy8ACaq9EY3EVfUF4nmp2vPTUpeg",
  "key19": "2RNnJGYK2Kr7JFs1hk4PSvbfp9F9mCVBHgTivRkKpDXLnMnfsVmSbkm2AdbU8Pa8MFyGkF9KaS65CYxbKQu2F9ZD",
  "key20": "4A5ubmo39STtpn1ULUgVzeCgBSV47MEpqZKZR6xpwLvJb6U7bvXEJsDFYSxYa2f2FkxE9Astw9ebnLwr4Da44fir",
  "key21": "G7NtdYjrZHpumSbXbnc5KB8ftQ1mkMtfaqHukTBkBA7JaUJnysEAkvQ4SdDCv2bammycapVfpdL1vjnrJ46NkGy",
  "key22": "2tJ7Tbd1KRgLxwZ4odkw6XLkYzc5NmFZFyZqqxtaj7MC4oQenk3DZgi6J77aHMjSCpTQ4tE71V8KnpNdCXXmDH8B",
  "key23": "47gvkQq298Xwn62qoWFmtiNarNU9rrGZEbn3KgUDk7hgNR4193jK2WtP16gdZxvUcaJzpL4hNm2b4avJPkqCTHh4",
  "key24": "5h8u3YUPrBmY2rxP83LYDkRLGuNmdxpfaVr7WRP5daZUszFzt8u1ms2nCZbxpNKVuWdBw9Wm75socGoAdvtwkfkv",
  "key25": "3bcYCMQNqLCTc1UgVag2sdLRVEWQVhSZey55RZfqo3aKic3iVjVWqicX8MFQNYrY9zmu58nU8BNfWejL2XvCCzEk",
  "key26": "mtEhpYfFE2rsnHLtJGretQ6QDpq8tNCXRWNedgP8qX84d13S5cEUWJ2rZtR51Gp7tPphhwFTp6XocggUYkNXVZm",
  "key27": "2DERUMtdqS8WJSxCu76rUmWPPKMfo7vLmSPfPor7eK6HegumnuKhZdyxtp9qNgZo2XMov4UpACmCRHvaEJrxRJ5r",
  "key28": "4qna8xrzznuM8vvDB9D8nLbULBee1acMiKMCt5AwEYKA8ZMPMGMR2kTEwyDMf9hcaGxXmGM1NhfUucpSg2JPBq7V",
  "key29": "4GVK7HgvNddvbhtnFKmAibqY119FWZfLdK3LVgH1SHS3GrFyPdcKm7RyAcj7kjLf1kFowhtTZjNkxrkv9h2ienRF",
  "key30": "5xj4mphh4ouHC5dH2sb1DEDenydDvXurSWUWWxvNxk2RDuiSXhkRsTGjxyYYwdcSgUy1E4ALeRwFaoDwfemAJL7X",
  "key31": "79hDgREWC3xG2CYTUC77u1hhTFJiYa2k3yyNmG16rQhjNATugCJthLS7UmJH7xn23p2VGaZYFjjMjUshT9Tqzdc",
  "key32": "3pQaxR92DYZYqZVWw1Qp1zHriJMJ334qjsvX5C25YBD9UF4Ae67rdfGiPmBuBbR3Pj42JLeHsitoMj9HwPyWRLpS",
  "key33": "5ttRcczzSpGUR12BsjWoxMpqrLBe467dBqfGyBbgvEqNb34qiTcE58gwtmSdL3tR28A2Ns4RkEjnA6LQ5B249XCN",
  "key34": "5EX5yKJ4dKDFMumzs5P47hC4Xwf7oWj6ie8RP8Ey4W6jDB47QkaNm4anrV92RAwhgpm3zYTGeNzsjajKVEcYpQCz",
  "key35": "4v6D6Aic8kXby2zhJtWtuuw2KZdkoY31Pvonr3R7SZamP6hmotdbg5qmrLYbMfz6yZu2VcFdypEunYSa8cDHUZGe",
  "key36": "7ZGRyEEUw7QLAMY3DWCZWiBJKFTyH9mJUTHThVEJogbkG1cT3cMDpxZBXc8dci39UzTKMG8LhsihiVpdf4T9hCo",
  "key37": "65c9JMpYnSxHETgCu3xZteM34ztkJvRL9RHfEg18fXECpwhn8ToiyEmtiDVVbQJ2kyrubmGVPskSB7FnVUUDz5nK",
  "key38": "21MJWLsxfSQFSf81s5JyksHQmL6xW4rZQ5WZe9YoZvHcK4oHhK5yDBo9QmGZQLiFoiuZ4iMKFi3UqkBmuMX5k4FL",
  "key39": "59beR2rErZoGNwGkHVKq62jx3xjVj4rCD15Y977iQJ9DmGBcf6XW8y3JNr322q4JJe35PRUCpdJgrknKMphJFFg5",
  "key40": "2DYfdn7a1nCbvEjCP8jMT5bHEdcBtwE4EZfMSLp8p2AAgt8bmwUpWZK5DjnKibkRZ3wZvr5yNur5BAP86WM4LAdR",
  "key41": "4ystRVhE8Tc5QJ3YW1nYogK2aixDH9DLqJ95589dGbnUhLGvnvNHP91FUjm5nMwTQi44v9xZo6wX1ggkyYLjsbHg",
  "key42": "3T5fDn9eEEmzEn5RERnFDgkUQwXk4uPUZFPv3uCn8PAkSzqYRqKEg6khcKHkBV3Ua2uHqKn8tPac5ZLeQMJxM6V4"
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
