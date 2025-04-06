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
    "45UBy9oJvqALA4gwqexQRPYHJruk4Ue3TmzopUuoAxK5aCmVtbVrZsxEPxveNWLw9sFiN1RCycpsJui215T68C8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A971sk9iL9q2Um7eKKJm227yFhuJhynKrgQ1bJxyifrFMpxCyhwMrK19wKPkN3mMGuAeJj51B6vap4SMitjfMid",
  "key1": "6172n4V8eyxP3v7tS11P4EP6fswAEzBTwZup6ntG36eJyUKYyNd4rqNBzhJytWhCgaHx6rDSkfJsQBBNtjfNE4Eb",
  "key2": "4iPcSECvgYJ3BLgrc9wCxHgzvgSjdyAevWFQfxQMyNZBvvh86HmYg3pWVmum9iEdj2ECDMyYYWxWUfGgDaTAvciy",
  "key3": "2gjmFovwLhxreBXzhGijR5j6bSswtr884s6fDjEPoDPVbWBNDfRea8wKsJA2iiinhHUXxAMD7ckscW5ee4gXMmW9",
  "key4": "4Ec67EkQ6nFYWCsDpSsqhdWt2QELqreHwrq3Z3m8j2pDBog6bV27ft9WnYVXv55yBSem4Ct7TyEKk1qTeZf7sL3n",
  "key5": "4T2wShYXfBqb2xKs1G7t88PyYx7Ma11CNHKtYp5J1SEdkin3wu4ybdSvUNxRnKFDYPZBFjfThLGJ6cEDgc3FFhB2",
  "key6": "5meJv81ugXAPK4tWEgkFiG2xfQ7F6DiA3hXvSWELM5rU5HPmjc4w2NKZfkmEUUMoBZHj1zHBLHVVuJpZrCE3gETw",
  "key7": "4Y7zxt8hd6YCgWVELthg58Gq5c6MH8SzujdCxqz4bXQnsR2ngTRiopQmYGuz1wAjuyw1K7BVMmKppLQyoZVY15ty",
  "key8": "4kPReoPZ9gkg2Hi6QHeb7g4szS6F8MhFCjnY52JoZweuPZVLHbHVewP7V4YgyKr4ieWkVT9s4BCPBg3r224q62TG",
  "key9": "5cZ1GkZgT6nQVVD5Tw2NaHg5mGB9KNPraCdbREvgBzB6MngcP7MKHfGRMvjAd3ubs37G4ygNcZpbhbeGaZZmFjes",
  "key10": "3C3bG1krQoynddh2M6XswhGjx55mkeb3AE5F93MJ5LnXsyvcDxx4rPqS6FARTL1iqcVndbD5FEKteqi2ZrNJ47r1",
  "key11": "3rwVYW3E3Q7Qcsgvc7TnsAcVr1Gs8YQFUYcimJj3f8kGWM28k3qDsRw2UyreY9nBmYDDCkzBUEQTLD9qgE7WxF16",
  "key12": "3KK39LxMi3PygcZDwWeCpe66mFsWqfm4YCsK5hcgFiwgYWfn1k8Vj4xbGgFQCReBBXmbLYg9gHjwcLH7mQugV5NT",
  "key13": "28MifsZp99K1FKVWpVsKqW4i576Px8qzPd3K8DkRbcrFX8trctXTU6oxpprjAh8CN2DaRKYURURZDKQawYR8gpTC",
  "key14": "47Attm57pBn4riQgRRtGCU2VpG7XmBAmArLFiM3t6HQR57B5DjqNfWgnSAn9UzxTSvMheyok3SG4EV14GRoGkX5z",
  "key15": "rWpR9JoWKntEhYMvmDKTDFet51wfJdKFBY8UjCu3nUnX7mvhT8SLJct1551qdp5Yy2KsBhHdYdgyFmevKyHb8tm",
  "key16": "2QWC7RynJzVXdRsbM1WbAVosrDKTWUnEqSjiNYvoA3HRGbsaCneWFsWDMVKNKqE8NwrTXakQmnQu54LJMAjVZyPH",
  "key17": "67KR7b4RWGKFyusUy215yGGCohW9PSsavsvd87bKGd9eX19Geb6Cn6mdABfVaXRVHm4daWDqkgTe7FWMydjWH2ZT",
  "key18": "4EX3HgfPMQdUk34XPzjVyrTjtv3Tx5zTmF5ZzNZneU89wysRSVjBAPP62ER76YaQt1sCi8joNe7aU2WNkamoRghC",
  "key19": "3GqbZieUwcUK3dVh2xQJMFoBu26g5ZSYKdZFjZaUbJvW4LkFV4WGCm32dDWqmEhiGyMzqESzZkvMviojDxsHdc37",
  "key20": "64wLGRG1456SA8AuBAG5PscexsPEWa1eH7Lv81xq1coaWqyh5Fs7AxzaLFhe7JkxMMEmLxdW4N5ZMyoK3jnKXpeH",
  "key21": "4VHdLdZFEHP2yvWvMmwGPhgiQBube5pHjPib1STmyVPsGZP92uTADhvku7ngdQrnmrpdWCUuRaiCDK1XBZ8hdiNt",
  "key22": "4ypJAnb7cisCgrThvk74DE4uxUVfb3SAXxWyFZT9tWSVnQoKLbY8Jh6ewr4ymHZt6muvgGTNEj5YVpqTQDv8oktK",
  "key23": "4eSgDjcUS5zEMQWwmMAkdtkJ3u1fbnaWwmGcX7mNJanXtbtWN2491B8438jwAhm5aPN2r1TemeM8rnjGic4E31nH",
  "key24": "57LECHk9yMQGu3qS5NMPrMSiwzJCYLRzEACpnEGeurPUcANEuvRPXUgjhLnXz4UpMW7N9ziVH17CFsUnmnsAgCJh",
  "key25": "3P51eGybrxVTZfpYvHwuYXXQPRih7K5wmKdhpJniTDTyQTPAV6mCSAev7CXoNWcdTrNPU2ax3y4xkW56FDMjyjqg",
  "key26": "B6adE5Y8Zw2dc7dvE53iziamHJHJRApbi1Y3smwo9WGtDUPDjEE6uPVQLVcQuMGtsc5A7oxkS1wcnK84tyHrvao",
  "key27": "4HdXtnpqF5zVwhF8UCUhnzrCRdGyV7yUeeb6NbcYxTkQP9iqSjzkEoVG1T9NBSSxkhNjLSojJNSoXxciJD1E2BJU",
  "key28": "m2dGJe9tnGX3aadwmiqV7GjfPpZYyVyrJTEYbXipZw6PtCTyLGToYCk47S4kjZS5dgCmNk7Y5au6oy8HvELETai",
  "key29": "3FNgXCN8sjNKG8DCYPW73wxjWHkX6oTEDt4AZ4bjnBZ82EiuifqAcr8hJk2skkxncrjtMowbYNBpT81pp96LYgJg",
  "key30": "24CXiDazg8pBcnP5dyrTaKcyvwskNy4AY8adrCiB3SQyufpmDMePDfsFT5LE1DL6X6wXXo9Dj3MKTnfSPBZnLzQ1",
  "key31": "62TmcprraKrNsC8fn2cqvYMPEAdSFEBsJYp9MEti9Qh5Tdt97nhurJQh92Jc5rBb5gp7sBgu9NYy5usw9hKD34uV",
  "key32": "5dzJ1dU7D13XD7rGoANHEuzQ2ALpjJNYsLn3KWKNW8YR7g1NzgA33pPKGSMVeFjYJLgGH5mYRG1Rmd9gvm4TX3oF",
  "key33": "3Bw5GcCdZmT9QJJUxA4viNo8MQVHMHtkxHHjGHypxP4jVJc9vHBKj1vCDw9VWCUspk91hnWthR3tBrFaDvaZ57ph",
  "key34": "5hBhhRVzBf7TndYLKXwAsmU4AarbboAS9tALkuWnj36q5opyUSVgcfvKpx3Y5z6sHFWj97TtHRSLftHd7hsKJXzJ",
  "key35": "4mBP9E5r38sMyWLW1eaVLWFeSogMAZ2w4ZVVug6GY8LQcyxvm5aYsqTKj6McAVhSzTHsDze7Xc3vNuD4uYWAX7PB",
  "key36": "3sb5RcaRvZp4jtbb9tGvDYPnwTGGWnQczaHcE8YHjNzqjyksCsTGFz72qZMCcUfNFMCmwaTLvT8EqCrAjot3x5tM",
  "key37": "3xqNBPQzV4AFj1F4diJEXS6E5k8tb2W4CmRnUVjkKgi6kYyeT4EhNSGQstNdXghn6Au1KpQLziPpCfYA7VTYgYXY"
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
