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
    "2NqD7FNMLjfSRrWAckkGRF7Zb7Bm7coihzPr2pFYPbtJZ5z76yUaLzsoSDVrmrcM1ekhhW54qYzBi5oroEZu8vvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRcGwT3PK428NyuRKumtS9aedSnbNPff7U2ifmiV3KpY6bQddd6cm9mLE35oybjapCuDLsZNSahzEpYpeWofPin",
  "key1": "32dwQho2iraK2ND7HpfxqqVDjUAf8DMJvpxVWqMLzwwnt7ZcAyubNW2dw6cK5rBsVVrvtn1zRoKso4B8MqjpbSHH",
  "key2": "44dE8yoF2zj7NaPRHhBpfSZjUcCted3zWKp2axs89WPZyr7iSkip1WJ16ipXi45NZoyXK4795DnPh7ASxfyTBtU3",
  "key3": "2HAWoce7e81rtPvAsLyNB7WNLVxvF5Ss5vzq2gziZhEak9ggKnPeKUo16H54zK28pmxhsDXJGRcYW7icodKLpUMi",
  "key4": "3rBN5JzrpbFyLKnofHDk2RogG1x138C3W2Si3tWWSC8maPq333ZzhZWgqxgwwStJUnU6pSo3zqPXGVBnUNtmGziN",
  "key5": "4ntMsCF8Bj83hsHsEzSLenmtEGzgHYX26RC4wdu8coGEjz2LnizC1Ss2DKPdjWweWDji7V5VsWPopZRxKJBbxyqd",
  "key6": "2G6ViYmQyu4aKyY1vmgSAzbsEMhgH4MXeGsByFXMWmAqgVLDg3m753ywpS74QN77ZUYhvitwrfnL4PBWjZN1dVRx",
  "key7": "4nttNDfHNJEXd3Hxw1nmMHLpKZV8coVoMqSCs9mUY3xgXNicNhWMk9mBGRJWJzci6TFm8ySdnSkY67QjqC2Ghb8k",
  "key8": "56RfsevahCsYE5ZfRTphMfEM2Pa1HCq3YzUM6rvFCmKYdXEuxoy99HaPWr2yFWUdXCpjjVTR7ArSa1QhrAVKZSsT",
  "key9": "4kPAB88ASowByiEfXmWUAQwNLTAmgsW1iV15gr92m1wBzAujADsrHC3uPpx1XJ4gbpSxFfg3es3XJ3esSs7444oN",
  "key10": "2jZanBCFB9dL4xT8fnyEq1VeD3D2V5fpkVJExd1UsoBqAK7g4eVwHyReCvg7sHfZYPVkwbUBDG2tEBZimeSiHWap",
  "key11": "2ysoBFZBy7rr6NpwmNh88mdxAqBHEm1wANWom3KzLcqM7vW1UJD8wWfbzNQM99z9EN5hejg6ANQkaNdEN8f8yuQQ",
  "key12": "2joswR4j3LX7FJR4J9tj4GkahNGNqgdV6hxabauct8Nzdx3DQPz85Q373Zn6x31TASwFRJTzbuvy3xMaUNur37sp",
  "key13": "4xG1i4cPSC1ZSk8ghaq83LPA6US3TY733yW3Nq3DBd1GFZDfZzVJAyNq1RPAKwMY7FzhDJQhERZspCAv9AmjfYG5",
  "key14": "hBQ2ZyaJEYJ71N8t8geSyUCGtuy8Ab1Sc1w2NURxPVtPekYYKa5oxTPQktCQo8h56i6g2x8ZU81HoJXSMmVJFeW",
  "key15": "31nCTKyTZ2UXrgUyGLSYYF7BJH2HJ4Vj5doGAHaNCpnKLfxyFeDkesXmoFq5J8zrUo4E6aQT3iNNhhMMNAwt9R1T",
  "key16": "5VdwoZHk4L342NZcNDq7Q1Gn1baU1BqiMBPcQLDEZhoaLjSC6ctFv7gPH315WKcwhBTXrEJompz2D2Xvrw83rvd",
  "key17": "4TUx5HSNCUZ13ZdE6rtc9w8h3MwAR74j9tBMwFpAtCbd8FmiLEo3mkAFyMM7mogMm2UzrRh4rd9jChU3LDQ2AHLi",
  "key18": "yC1VG6eE2PePFs2DaBTbChz1EpdsvteDiUEFdgLtTa8okcvWG6181CmSvz2LAWBYxGwoLymXngaxdSNbDfmQvKD",
  "key19": "32gqStdS3Jz3B9MVzcskFJFtae4VkCa7jAUztm1p6U29rPhGxDY5JF7Q4CnZjJwv3Htiw8PXcCRxghVFoF19Cfya",
  "key20": "3udqz7k4AT9bEfa3D6qarhSMDydatxoD5HTybcn1UJJabtB4He6iq98bKBxSPpEEz88EZWh3fNHm3t4Vj6tRUDVV",
  "key21": "AfRPSesxfQ4h6VFvCeXe5YouczEdkNM3bXhaUL7qGv7inghxEKh98nPCLfGwJfWCrUtgVVSeGfJsVhbsCoJVxun",
  "key22": "4rygXqbNsGN8khVkR16okeLvzo41dJicmXfJGWvGj7UfjFFTqMu5BNEs1x2nvpNqhJjfEenefikw27ZejwsVJLKH",
  "key23": "YRLLxUHS8aSondw5fhjbCBn3QJpardWXJY5DLkJ39ofYgmD8Zzx7jgv9fd8anh6rwJzF9Ge7yi6V7AH99ncJCnV",
  "key24": "5rvFHJ3cmH8iXficjpJJ2gAUxQigmXRdVAPQBWvEqegEC86LMyshRN5Wuha3PkdzpYdu21Xt3fJLnmtLRwjRRAza",
  "key25": "oNSuLCFBZQmHqzyaXQQ7GruMSXwPyKLtHhzfNLnZrM5cYKoW7deMrvzeXqAFMSJVN8UYXUUump9VnsveGC34feS",
  "key26": "26TKLeyQcBR2hPw2iYq6EKmp23sa8nUP1fGXVoxnPkQLohq8vSLZVwJ958nz7qquczeUMa3AVFGKm7rdqZqvakfk",
  "key27": "67F4WqvXc1L8bWS8Mv7udTFfaMMjqB9DEdgJiwPC3XYfPAwhJ2Ks8X8iViFYu3tjVk77D9KJpzo2R65X9KD7Le95",
  "key28": "2nhysLJzqMdRzVSJhcnjQG5F7TKZ3mKESMiEZazA4ZACEQJLpeEHV2nz76nsGR3cdkBkMHX1SQtgdy2Bq9eJViFW",
  "key29": "3tPikoWUYeCDiT8oSY64SJsyhsN1KixwkiXAG89dzJr8M8sE15QDCPAwJMswf4fhUAZc5nysoJPN7LTxaLDUPcXB",
  "key30": "5uz1UvdzbHRdxHDyjNebCY5vGbD979hyKrqdumvoA5mbcyGhT8iKkVGSDmZwMyBnmiyRS2gX2PojuciDT9KYvbvJ",
  "key31": "3fXjW6KJ69R6z186T5vrLUsFk5CDXGpSRNLX2dMwLEbGSEuajV2zfwWKQSbe8YYrUfhMhh4RaLSibofQJZ4U43r3",
  "key32": "4XJqqTbzvPY2n9FdmVn1cEUXp82n5wrE3FGKBz9LtUgW85DJeN6EarmbpbAUNx54PbKyAvGQ257hMkKdriDAiNXp",
  "key33": "5CR1Dud8bg3Nt2nUzmKDBaVthdpcZWMCRKGDe9NTu3ZGunGgERGwDsKPf6e6fVL6hB8Er4RH1DBoLBG7pSSh9jkD",
  "key34": "EjUNQXrfHtgQnWQ3de1HQ8ZfUSYYMikTEeaRq5GEYUi4gCjP8QUNBVaJUEzqyuabNHEZ332tZmygN5bsGyMoLww",
  "key35": "2V3mcQYfwwE8qKaFtAxJhwpgvaaNtDRAUJaJS2ZM1kBdnKhDMamCANot77RbqkNB34xsuCtNixLHBcszuysMVM1k",
  "key36": "3cUkTLmJsFypxJ4eZYa6DNt9uYg9eUPCbEn2duwUDkNCchkp9TQx6DJTaY51Swu7h36W7GQ1fyLV9ewKeh6w5rf3",
  "key37": "3QRkEyVN78skXxcrZLxjSY94XVc9w2ALHJfydfkUNB3A3tvJyqo35fHdK8V2m5TqdETiH9XKMzuvj6pLtHBzKvsX",
  "key38": "5U7uYsHFFdCWsXfAduMspNFQTprr7vhdEmeozqu4AmVgATx1n2dFLwoDrRpZCeT4waLuPZoSFhoHddxYxvV9DVkz",
  "key39": "24D3kv6wJej6vUVXMNn2r5VGEDgnJDArPuykJtnbatYSza7Qnab5BhMLKaLup8N7fPfka7o4Mko8W6iinXjjhTZH",
  "key40": "4ZTPDcfrti2azYRVtdWpaeEypUsUmWzY1NfQYfwKNq51zvkQQbVyuVfVPtxaRExhvUXcGCRXTk58P5UTx6cjRoX7",
  "key41": "49KmKHg7EceTahJnU92GtxgbG5CLcwn1SzwpaYmoheeEBLEE68aQ5wfHk9MKCmmXiYnU4gAo3sKbapZAdnEyPrm5",
  "key42": "zmQFzTSypC3yoBdTq8EAzQzuNRVtz9nDh5K1FMMNTboSmrRxePDk9Nn7KaJaLL5pNo4GjzqkfNtD1dC2GJVYBnK",
  "key43": "5ikB3dRSKybMXr3GTnVB8PhXj42tfdYiEhtk4KCkfN1gLEG1LJs9Lgz4VNTXzio4hUGHGdrVueBEdkWfCm7xy9GM",
  "key44": "21jHs5EMz1uyQXLtX4H5d8Khbno45o1onhrKmRBDjQTB59aNJr7NtT31jGJKN3E1LYk4Pbcd9AxvT4sRKNENNmQJ",
  "key45": "3cJi5aQ6ShwZY82ctEtPzSLPFvskDUTDKQRJ1sni7sm5Pn5geV2gB2u6NMrXtcsXoa6S7EmxDEM7pH15tCFk5pgs",
  "key46": "4FAqKhEjDnodQacu9VYiUCKRdfT9HXQMrvuFtvtVfPUehUPo3s51NeeMoinciQHc5ruVyw2LfDQmzUrhFNhx2JeB",
  "key47": "2jFsybiLP1tT53nFLRpZTQpDGtnCkcJZ85uNEpoG13Qj3xCqSSP8MxboRznzR34kEZNsNCekQGqU5yBWUXPZaoo",
  "key48": "33YQY5Em7bPHkR9DD3PM3bXoywQiuU8HkynpffAoWkBBGHyEPnpbgT2uEGNAFkUYLeSeLHvFCFaaF7JcBvrEEtPN"
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
