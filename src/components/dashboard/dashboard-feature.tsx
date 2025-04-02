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
    "mkDy2koWCCrcQFfnbUsyvaDvdyYNwb2AEKnj2VvFBvQH1MhGbExN3WzoojRSW9iEpt1yQw7aos4PyP8Jxn5RftF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1QwTz1nBLqFwWPUjzDGafBQRSxNSZv6UDinQGkwxavDXaNVcMBqwhJtrXpsSdzE3pPhzHYkNHvtqm38JhC6fisK",
  "key1": "58xHEK5jRcyFKhgxX25nZd3URK2YDbfNxBvLb6Nief5KFXcFFnS7nSUPng5sf122WsXWskmApv59h9qoufkbTSTs",
  "key2": "3RHLDuWdkqWGuy686YWL6vhEBSyNKhZ2VU4ZfRiZcgGYVQsq5k5i6GVodo9Fn8RRQHUEzYj32NrZ4E1fpnVap74Y",
  "key3": "2P41Er3Avh55zQSevvrPP4TgfRDJqDcL2CRNkLitajGhrBaQCrn4nhY6pHHck91FZuwjd4oUikAsT4VxCKnyDzEJ",
  "key4": "SBqbd4uN7adYMXKyCHreqDi28TiN4JwaTjoWh1SBvBiMQFzvSNzjR9CYUv9geeZmhZjrAeMYbsSeo5XbEFiuGXv",
  "key5": "2TXpoQ51kx79nrvnN1zrQe9AfpimxoxknJPUQtWhz76nTXgF2jdEEyfKM1vh8WgWEA6Aep52Z5p3a63qyRjxAaC8",
  "key6": "2QHmoxS3BeirSP6vDSVhsFAAKajUJFJtTpzHAbApFMaitHTDuGjfXcVzB6hie2vN4KrRVMV4QfbYJX22GT9uJSw9",
  "key7": "2tdM6skGFN5ndZ5NcDBUV2xDtoxYrvvFSa7jmWRhUZ2sZLDmVshHcYCfPp8hm4oYH2Y3PdZaRwkjKmMDAxUUNpTx",
  "key8": "26knPJJKM4cLtyHYcadhYRDLNDeJ6Wn5tEUobzCa2Qc2FYBiiaFDkdC2hXGSah1e8mYZ3Hx3486Q4GN9gYuqkGsH",
  "key9": "4mMyUbSibn6LNWDiQu8sCUswhXPQ3CjnErVTFF1imX5JfFVKb4xm9trAoKsYkg8dMH3L9okPhNc5oF6UZizb9Sji",
  "key10": "4p7JTm5NDPjJti5ChA8smF2gHPqjc7nVStAJuxP6wopc1BmWQrBZo8EaHMBS1M6bvL5JCHkZUdvd5D7mXHAnuJpD",
  "key11": "haScetKp3oeMP7TxiPiqEwACHnFfoYMhm5netjXPLr4zTDuuzZaSeVsmSS4jp7eRNsnCyBNrB436gVUhS1DHqAv",
  "key12": "3Gh8GRJ4d48Eq6uUW3qnXVMfYvbRQyPsHuwoY3kwehpCmD3sx8nRgKJXBRX8FeKotzZMMaKjJCGAD7EKMJKn3SCF",
  "key13": "GVavFhh8sDCqbkqB65WTsMf3fqtAUU2ghabTkzHBNrBqQ2n7bg9H2BnHpJB5qJNGrh4GdNWmB1jP8kwnNm9DVdx",
  "key14": "36ZxZHghwn1krGYX9HGvH6NXHyXonkJU6pExbR8s5SUmmKYvSsZcNEefjDy6pkWxif4QXSAXdwDPoaTD6Rg79PFh",
  "key15": "vtKBDPbZoSkLM3awoVNPx4QNXW8dGysef8RBppbKd9kNjek1mpYqReC5Vcn66v94PtFGXiZGiJ2ed6y4GFLh5X4",
  "key16": "2SDs2uA5d28U7cJisBbpicSd7x5iF9krVazyEoprUcRjAZCtmcUAGp4W2f8BHrbm15aBfwyeQHyzQTsRiT7dYyGH",
  "key17": "aTsM3Qg6DpPVdjUwTrxfvahHKJLapbiM94itubjnm1yeYQe16GtDbN4qfQ1PrZeq1ShHAZFxEUi2nJPCFBWEd4U",
  "key18": "2vRjneKD9jbks6apo4AgoSmGuThY354CNyNfKcnFErW5wmjG9svY6XajAkcByqLnwoNj3x6AjpBgAaSJ6YbXHWTx",
  "key19": "2WAXg7erDP6niowJm3b2zqafMSC5gpLPo4q34C3YmNZRi7xBbzCBKHDHLT7EqrKp7r8ctkw7EM3Q8Ct3B727whZC",
  "key20": "4UR12HciEo6frcPcP6Yxn9aJ4hsdQt2b98CewAEfh1iSwJu7T4C41fURZo38R8mkF7aja5RKXZaNzYgK9X9LXVSz",
  "key21": "5hnBotFwhWgWoxs2wK2MRxvPmYZRtMAGzEqe3TaAyJuBS1gbqp2JSMYwT56UXztKM7b77a8txCTGniVvK69qhchi",
  "key22": "QkrucjXVjV4FPivTk1RHL3EKc7fCbiezjpopxzMMV7HdwjJ2rtHVSCi3i1LTU2oRkxSQtqBzvEp9vrKPoHd6Wo5",
  "key23": "3y1665PWQc3MgLs4mWZVQraWPFBmSyU6McG55G6FWtBVkqGYTNsMLtVhMy4Yxv2KuxJRzXiSUoSPmKixo14qhq2p",
  "key24": "5RrVQJvJpXY89hi9mRrYiPkht5v4TeLi6TbG2GLG1i4rjWdf52jtaM1VTGTfwiGVcWAVC5927iaeps8nC7oqQDsN",
  "key25": "41NN3MLQaEj3XrgGzd4bJtJvHaiUPDfb2FAKWz96SLt2JTKGiutL77kz24ZYdPWaKNjYKSvWfNftrCnsV4ZXpphF",
  "key26": "3ECFqz1p8xbR8PcS89yzAXrxG9kfuB4q2EZSx6fkZekDuHZWzPYTZeA2REpDAw8izhpD1fbYP4MJ1ApwuYT344T",
  "key27": "64K2VaTMd9ay48jyZjdKpQZtMwDp5AAjBykQAz3PmGVcde777omWLeSStfH7NqfyMqPXqQD9gy3SmAe7tAVaTWSr",
  "key28": "4G6P3F7bxdve9nqncY86yzgGaVTc9CzzwP9XRWUeeAuHHAi4TPLFNW36hvY79PzF5EQtLDfbsz719xToR9E5Ginj",
  "key29": "mte8GQDJgJ4NVFMec2NnjYuDxUddtrHnwM2qhRtd9xi31gsXYcBctkZ5Um4VyJHifh3FrmnaRgQoEE6KS1np5o4",
  "key30": "3G4AGsjL1pzZWr4o6cAbndya4hyNKjFMWwr34eE6vv97No6mad24YVe8Z3tBBK5sdTdMATMi1iH72wfLr69sfCzx",
  "key31": "2oa1UdAXcbgebg5QFWs6sdtZXLNLjmK8xYe9AdmvSrFKDaMqYcdQam2mhewmkTUr45e7S2UjkSSb3Hej3MpNTtZy",
  "key32": "29gDFSCG2aA15PW7kLeaoWfT9bQJ21eRYD6ngNyQfoeSCUXWWhEpgb7ATCZEz8ZCNUA9jg28PFUXQbW5BnsUTxpy",
  "key33": "4ty27STpmURGgW4BUMLtoGvjziQYzNMF9f4BgMXs8YTaeinhtSYtj3UoSHR7aSJWHatFwSfRfRCE4TcEKynh674d",
  "key34": "4DK5fu859e8iZ7GWPe8mZo6TXV9UsiNnNw84NoUyttbJKaQbXBC16JggW4ueYs3YxgNTxZ6TqDmSRappQ2qzxZDK",
  "key35": "53RHfura49DwJCz84GPgLzXpqDY6M4wf4VRd5wRo17TvVQxmCJvnCeZzXM7msnyH2jvMpPioaviD8qNidQMv7u4U",
  "key36": "1paBFbyBW3PVo32s3EsdTMi2J2yhaPq3b83ygVc8621nQSpwYLsMmc3c63Qr7o5rJ2nskEKs3u98VhvGqvMhJ4T",
  "key37": "55RmXFrrtdEPGcwuPD1eka29ZtwxcpAxryGyeEpBSL8pEbuSXmxDTNepEQbPtEsH9cjWppQ1ifP2kZDqd8C36re4"
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
