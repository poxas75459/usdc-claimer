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
    "2Q7zcGUY9eZWysXfYnNz1AVSLTpea6uoL1PYxuQLafUr7wbiqg8pm3qfU8sCpKxRM4cbi5fsTutuwX7i9yPDQw4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAxUTdTyktPL23xixbboxGatp2x9zb4ffYGKubTDmJF5sgFJXqJytNnMNGrk2ffaLgF2RVyvnTmhgTkU9JE6SGv",
  "key1": "4pSMfxjHsNPUTihBVbp8UUGvgRU5jbbqyAQS6KesgfSZyvWxY1f8dEdgmZNvkPiz6ruUHVnvZpaenZ2FbhdYLRk6",
  "key2": "4xBG6VqLtLVF4F8pV4tkgbQgembwYdNTYYwwMA754jNqLz4hCURdxnhmLmisggieNL34NzpWrLXsLhM7MRPSgnV6",
  "key3": "5JJzo2pMwDH1azPhMSgDu2kDNrfMGhmaBrbGQaiPBn1pdkjchBtWKFs4mQmormHhSqMEHjWedkBbsJxBNhGBPwLo",
  "key4": "5xP9A6WNnu5vjptVX8MmRfW2MfeVLarSoCiuChq7z4T5j2aBt2sSjLPraLzHYH1A7AdwmGHsszsJrtZ51x4gvGWv",
  "key5": "4KoEx89mS9tPNpw4qyC6qhs7kbHu3LzUCmo7u45rXk5rhZQuGP461EWieNjUArpkuK4yqcDybHxMXua1LLmWkRmD",
  "key6": "4xMdpjK12vfYGtnXobihHF7jW6soZgoNX3nRgwpiST1cMhwDGV4DAAuww8gmScLqeEQPdcj7x6s8R4KHe4M9Q1QS",
  "key7": "21acFK4y67pduod7StKCfrJdYcMV7iWfJSdtpAWfCSBTybHcyswNP56qaMqruRHWQpQTVF2j3EycAqE8SoAjR1rn",
  "key8": "3R5qTFpTzsiFxAYychKh26uaauHRNzwevSvbArDgiHn2BnFn1tie9uaMndmh6mRsEjPswvtDEyMKEjEAhf6UTRXm",
  "key9": "3emj39PPuta7VTNztGTLHGAH9r1ZXG6h4sAJjFVGNo6EeS2L97wimm76XbWw7nWkmVTPuHsHzgd87dHSYxrpWmh4",
  "key10": "4t5GWk6cU3rTzg5BcZ2cpZoDfzt4KauBvXcmSfRhdPZr7uwRMcMQuBKBhuhoqzg27NqYr1YCGtvh1W4dqrsas7Px",
  "key11": "2rXwdGRGWEJCg7AUr1WuPD9q8fMJYeSXSjbMTXh22ubridJN2X3ikSfa3acDHR4xAjy5WLC5guGg7So8DH8Lk9ZL",
  "key12": "5rwcy9pCQqyXyn3zikudXoXqTJYfLu166Ad1tpu8ZeXKuXnr116J7jKNeqZfVyLYiVVf4CPnPfkw8PFXNMDNtn6Z",
  "key13": "UpbTqKbjCHewMkS4F9Chok5iNNymDB77vMbZrXPp8XPRFn9T5eiPuGsrYTkPZzEiCDzBZcdt6ZVCzGTiS71iXK7",
  "key14": "3QQA449Y4pLyQuNnEYzDi1eFUKhpPN12fqoA67PPhDL5tTnRU1un9KY3nuLKLTKHhr9eRtqFosqRvQfn6am2cFLS",
  "key15": "2M6RVnXnskdsd92DRFJLJGms2GLgnCre85unrzE8ixnDX15TWth1C4W3kfWUWaswu7zMvpXQzKyhEWxAsJbhvQnt",
  "key16": "4PZsuQofeQrhBUHKerDx8eGPi68aDErwLFFcuPKTH5BQWrhzXcW7841kJHjUqjLqPgQ6bXs7vq9D6Yp64TrkTb2A",
  "key17": "51NC8qJX2K1AsyDA8MnvbBsfLpyNKSoYomei2Jic7uAYdL1mhRjT8moqFwjW4nyHyDb6mY12HUC5DSo3rnRaBibp",
  "key18": "3QDeUSN8ZNWNWBi1dbyxEABEyEAScKeoRjyMeURYKfw8xa1rRGsUJ7Fh7PzbrsyrUuQvUzRTVLhfnayHzG9CvKNm",
  "key19": "5rihYQtdfPqBvwFxYVBLXtiVXVECCR5kyWV4yjD3oEkLDnKcQ9gzmvjT6D2Jr33bm1saa8GMe6dwQJjSGDperHZa",
  "key20": "2di3Ey53uQKc7c5Bmdz7BeSTSwL6gz6mGg4S8grtkyfG9rAkjjFGDKcGfhYdrbBZ3x5wtv8ACsc7LA7hm8cyueR",
  "key21": "zjBihfubYfR1rcdB4BFSdY6v3rtA7qwQtXoAGukcqVqNXbVCGFjJe7cATPMDYf49MGh1cM5KseedytAZWGzj13G",
  "key22": "3wuEejSFcRJhKNgRrzUkgnYhNYZPeCn1TP7ojedAgtnCyWp2TH6poozyMPqdLFvbvQkan6SWi7YTsnezkuMyP2F8",
  "key23": "GZdwikY4Y2C26QDtDPHgXrJD4fJXS3zeoZnccWCbNrmprMKPxsPu4FwQJSnjoiRfCoBu1NAehZTQ6enJqh2j745",
  "key24": "446R7GmoNmpB26PverrV5b4nZpwSEvGPsGcCGzV6pvKcX1fPm13dGryE5Po1HYxHgtt9tnmmmAeojYXX1GSSQC2u",
  "key25": "2HdXdvh9webjkckDXiZNWU3iwf1opERMJfRomGuWcuZD2kSnm247hWa9LaeR16MkvonhPNqh9xF6mmj8XjEPteRD",
  "key26": "4anzBSob21dtTD4mJZV5MRRK6MXcZiZEMHJBVECHQrXhhygEYUSwRSUhHViPjZ5qqYKxwHhMVqoVbZKfkVPXjspG",
  "key27": "5KvZ5r5idAGmvW3fhN8wbHCybkRHn4cPLF5EtRKXQYQh18XTqxRWXQmMVak8yGa5rYTLykKPacLtruXiZqaM45YR",
  "key28": "5zb8bTo7FnnZckjjnWzxyNqBBK1VPqy3xjM9zS6qxZKoQ1kjWgDRBMpuiii1PGrsaextWtTDnrbZHPPCLjBLnBmB",
  "key29": "DEFpK7dd9U6X8h9hCnwLdbn73T1LVeSAUr8ueAD5bCBHHFmUAwLC41htD2ZFg6UHSQqPYDCUCBsEF4SJRS4pjcx",
  "key30": "m47qNzxmRqcRww47GNcuXKHztNB87e4AdyqtJZLLZvL3kkE7LRXhUSZdUZ5T3C1jtzoVpYNLbMWKMostLvQVNJP",
  "key31": "4LdbngZCw4d3tyLaJNQo5fRTqPzkr2VerRQ2VLba8FYtBiMjYCJhX7dScade5rRmfYibTsUsuRGLNQappN6xCQDG",
  "key32": "XawK8JiME5MoRJG7Qm5T8NfFmgEn1Rg4weBtvzXrtxNdqfJtLECP3HdqsscoC3dgRLt2uAk6cTPQ5j3ViTBaZoN",
  "key33": "3e2WrVTHUUtncFkpCQTb8HoskWxQLWnKS8cezSZfeRMXJgPyrUs58TxT5fNAGeQqC8SfnyeTpY52YHSECTe5ir1X",
  "key34": "3F1dB38AySiVAVnkw5tbgfEcZMTqB8sbnbP7XwRsEvNmjqDB3zUAasGLvtNg9GtB7HBPiKauMUQqMRyrtXmoKDdS",
  "key35": "2jMteLV3xUhi6Y1RYcvTehAMEadUzpGfBGK24BjXdKbuWs268f9hP73VBXKXfjKmRLZwsdR38zisUQJ6hH8DwBoG",
  "key36": "5GEXGYgaN3sym7Xi6PA5kyWvNhE3BRoVbZvUpumr9hAbYekb11AC4NwyBhUXfatjJ93APQ8Gfahr56yZMhxvpdCi",
  "key37": "62QF2MFWYY1RvzUEWN1nX9RjLNWFxz38yBiHPrz2BfuPQ8FkWcczYYZ7GeTf49nWi9y5HXybYBXvucNC4oRPpJEc",
  "key38": "GdJsNMvoTEzwXy9kpgGvtwAeBX1LhXe7nCmReMci5japvwnYu51ycudh53fGtRdxGufHdg3XYuv4EShCFsoSzKy",
  "key39": "58zaJLB6ZZzBSfY1PWy7jL9cCHAE8YfPdV2SKiXBNXa8qU6V11Ub2YjPHBixGk2nPGNijbHQGVp7QCAFpiccoQr3",
  "key40": "2XS5QezXfG92Tc6jeMffY38p7C1XbtVuBiXagiSoppvyRUovyiMnkqDA1J7UqKL2SW3D7ZyAG8r54JRCoXXavRgH",
  "key41": "4syRvhCCqhXSCkSGQZqSQugt2ztGFXDw76L53YAyg8mkVoAdZQRQNW3LfkwcPDLeL3jj5DdfXHN37dP5wKPfJA61",
  "key42": "4vHM41S9UEqwxevJrAfMJTafdujoBqnJZBXMoKu2q3Pnvu4PaPWNY8VNYTRSyyP3WXoiuybCkr25eCpeRYnEi77x",
  "key43": "5FCRZmpSvaE4U1QmDNUhe2PK3TDt9oS7PyTko93kdWwddekXLf1GtYhY5h3E7Fmun7Ap3cKAznK7967ptrLHCTJQ",
  "key44": "5mJfgSpq2drNpTonhvn2NvtcjnPJpsmp3iWKxCgrhh8RjPj6Z7KRwFU8fbG34xUcyjbVgZtjxSVgVXZfBnsGxBrS",
  "key45": "b3r9G2fv6j4vzuuudNmPLszatX14VFuev5RMtHhtJRSJgPLPz6hMW83EHsepYmdaR49MBCZ5Lsy1e2xgnffuucr",
  "key46": "4umMmevtKTMoYWwBtoQUdhjSCJQ8GYgGWjn3MungtkW2nrimJG4WD4EJkfR2Z28DCTD6fZ5ugzUkNA5Du8ktRSSK",
  "key47": "ZLhxHRcwnQb7XSSGxMgg8B8ZfpT1zu4DZZYCxRXSoUZ1bWXjq1neCuCmMymAKW3AhPArBWCU1xY5CvepKLZjauB",
  "key48": "5qxdfESA9DFsUYASfp3m1mPN5rWDPhFPY45fJiMqnbNLo92dCB51cJUfqiTDLahWQAewPbvPndqFC76U6Fst73h4",
  "key49": "3xGRkYFDHkesD44xcuJRXckUJRX9xUM1MzE8Au1aHH24Y2wE3Avz7SJ89Xq7K44fnv79uH75Xx8g97mBNrSZpmLr"
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
