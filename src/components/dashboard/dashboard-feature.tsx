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
    "2iDSw9qipH2ajzan1Hdmp9sZT5H28FjBb4d4hU1RerJWwv77JHeCzfLUaT7o3fieKFRrFYEviJtEG3qQeAgkp4wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LaqMYBpe9LFniaSmNnWR5XC22rraDjLg2ixSexwm6DuSwBsQ9GktCsM6TpwkcC4KtyfyqUjLKhysqGtXqyuReDh",
  "key1": "5cjhYWTjsXFknKqDmHcgj51QDVWdyBToPtbvREAFAb8EnhBJTcQqFyWxTKM1Bd5AguhHWzyZDkAimQrq6XCpYJiL",
  "key2": "4mVP7wo1KcmcZ4jtLpCuLa7syhCCUEQaucERkoDUwDewjSwxD1CkkmfjLxm686mxDiBAJPwJwn5Hgz6oaqzFQywk",
  "key3": "5ieta5cDV7xwFA2P9uzgeeTRqsJGUnRTsoUELXhpu6G4nxZDBk8VrGbuUdumCZA6BRjbnGA2pNbVGoRduxAHup7i",
  "key4": "2KYwTCYBcNmSNv92hkXcFWAXWgMAayehGdV59yWDRaiYYT1zxGGAK11oftnCTm7my4aJWHM7CsdGCK7oGejuALyJ",
  "key5": "m51cfFJyPDSGoEKuA5ZfNcFUkawhSB1TN7aLvV6EFEn65yjmyYpy7i6rz3J5GQUWwq6rdnCoDMZTPWb5mvwQtN8",
  "key6": "2t2fPMkdewxsuXzabFhsfwxATezirrknVi5RHonU8nLBXYXjhFrbjVbHtacRzov35r7hHmWyF3fHLXLsUXdXXiaw",
  "key7": "2espvd4XzpUxgWUefpkFtKrvsba6msvRQtD3MTEAajKkibd3P1fnHMpcT9H3QWeMRRzGD5nmMzESZ2ienrtuie1S",
  "key8": "4C3AT4GAQj9MC5VxhHGxEwijjUkSwn6Vj2PRbDnGwcdYo91W8M5mLnMejsVmEf25Lq4fEQen8deSvLBA6UtFcxbo",
  "key9": "2r7n1HLJREh2VKdEiMLVScKPQe9a2zqQMWt7NqpzyUWWPBznPpRjNttUhwhfZuWWCrUivZ4UbHJ6rz7RPhJpDfuu",
  "key10": "3DPkaiPP9donzw29MLb3qLSg84Cgzb9BxkPE33DP7mqRDnUVL1GdgpE9K65Sa2X9eyyt9iAR2AMJeUaaKkFRNbyc",
  "key11": "52XhGSSp7YCYt28HXDzMQ19scBeArNnQVbeWMxwBAa6ENi7xKshbPkZnJsWrwoG4URQ1P5DYB4PJgcEiM6ooxCtu",
  "key12": "29rj3uKTwod8PKQdQk2nXw12gDNqmCWARzVh7rFNGTYzqjZ8mVyh9cDYtmUjdLabv9XX2L1PymyXcicb6nypqK8e",
  "key13": "128HgXgLze2q6GyJtjCx3hn9mBAcPHRoZ6VcYT5W2PRCebSgvJkAhP2kYUGZ5miNXH58BfHi7zof76ksmoPyADsX",
  "key14": "4ZWnwdegHzzmjLsXFUXzdmQmMFiHrt7ieZfLf7T7wUopMAMZZsXfrwgwBm3umMMhfWLftsMHCPUUeAALJoHmpYo5",
  "key15": "Da2zbZ7yaFw7WnJHZjk9uNXMG2Go8QF2gYp7C95zup5YJ9DbSSEbaubMVqJtijMzv2iGwcbEZqdJK6GEcMwbKZN",
  "key16": "42p1mmcLPUpG9PMCHVw64aGmm7mzkCS5PsS5y7EUD2yQWpWYHfsnN4yoYJvHn7bt9N5FvGRKakB2wgSMucUaW7rX",
  "key17": "4CsYw6L7xJJAWBY9Ct23U3vzr2gspHQZNqG7AyeaG9S21dGCvhpjGarN8ehqGdRe82ujokmpU9zXRpCFBznykzw4",
  "key18": "aSyFrb7trw6jxEHYaSDMfHyHyBBgh7FqQPQvW4rWmpF8xFTwKavkT9unB94m8GDdjT9VaXr1ojJrdwzxVYGXHNo",
  "key19": "3TiyjxYpEsijDZpuAGk6pUkMxVKwU9dAc6gYydiuj2nxZ8oXf12tjvXGZ8NV5Tv9KwRpkScan3TUrKaWXGPSewhn",
  "key20": "9DpsoMt2n5AStneJ7CuMgewD2oM8NNMp1ZMKWXtwAbZXEqJsAawr4TfTkYTbBDuAFANn47dsxq8JM5Fa6V9qJsT",
  "key21": "5XusULgaDWFoDvot3Yn7kub79wsnXtjb5oX7Y39sXYUyCahRGsrf4WV6Wg2W25pCACWaWmB6xMA5sFacJdXK6RAr",
  "key22": "55S8D1aUeNHgnM3Zi4tfxndRgEAa4R4b9P4aKnv2BVvG7wwTNmEhQwLr5YaAY6rLhx6HjscQVnr2SHQDysKuwuhD",
  "key23": "5jkwBf1Y7i2PtoYDHdMwcM35yGXbn3x28UCFw6mk3CYDWvnspqSjsBb6PvvD5cfhSchnPWzYTTN7iKMJ5dDFqnQL",
  "key24": "52tXEhpDgCifpqRCYqQ71fSuLP6CuWWKZTK9zRKnv4FQSzJSYq1XFWPWdD6wZT4Lh7TJz8GFMsWeW1BWUdmHtQLu",
  "key25": "RckydPkkRJ2ujxoUNqs9ByCgEz3YvzMnnETiCJ61xiFKZ3Y5xrEJkrQvrqgEbypTHqXRi7TbL9VYRVS9sNWCbrp",
  "key26": "5DuVyoQ8BXaHs4vMaxwBWn8KrKcNk4XL7ZKwNtkg97h7dhfhpC63cjg1zcuLqinc4X17hPogcAa8hNzT5y2Yt7U6",
  "key27": "5d2nhdiT5uxugA65fP7WyPTwMNyuTndV2D216ifg2wttGdhVLuePuDSNFSJUDP38LTFWqGtzeMcWgnZA95U3FYQD",
  "key28": "58umceSCbQMCUdMBMJtNSpLR1HDc3xPJNrLFPrzzAJZKBoAmpNR6HsYwUJqLnVpRyH5XtL9VTEn2L4pLyLrcSVCy",
  "key29": "TsHAyMhPJHBUpCqR6GLW1gGJeQKQnUHaXMzPbopXwP3aoygnr4LqZyzR1R5ANqW8YSonbAMW6fai7f9738vybMG",
  "key30": "4fpwe9wWtVciUkxpnHMs9X3gFLMCeDeJszAy7SwGjZTmHDn7uDskPMKyb6Jmx3LqqRzSDR9LoVKq3QTJHJv7Q2ku",
  "key31": "5qcWwztFtz63GeVoWqEL3iyExPcPkWTsZoTTg1p12L1M4wjWETomGD6om8KwvBVdKm4N2MVaCy4HM159QqMTJiAc",
  "key32": "4fUctACJNcJUZKz9LQ2MXp8DPFtWxSHiP2nyo3Ydk5XYwisZ4A6HmszTRJG3z7nQj1VdsQLyQBWFbmJknurBXcRi",
  "key33": "2TYsGoKMVPqCb9Wiu4ruhHangLrRE7v1zEdhozxtVmLTT1wVuiq9NuwfCwnzqXEnj6eHpVPxi2pmcRUFLxxdaEkX",
  "key34": "2T1LD9x5X1fqo82KsdhQqRSHXF3KBX1X9qstRbQeZbnNewkHeFiLNjWTPSoo1WJ1jNZW5DFFcvJ1YpZzv49m44ff",
  "key35": "3YrZMNwiG46MHmEhTin2MGgAfCymrVdmhfFecwd4MVy7gd94aTDjRsC7V1BufAZU1Ebn1kcBauZHzxeQTq9wud9F",
  "key36": "5xJCDrrX8pFgJYq8vyh117ostdq88SsnYckqrmQjckXMgMQ9D8KHSrba97s67adQ7qJ1S6vZYXbtpvgYkUNpFXdF",
  "key37": "4sQKqissLwUdNGg1fTGp3Mx4SSDKCgjtBDgCBjRfjGyjNNrkhNiPScEe8AZ97u3G8ME9gzA8R9y5Cpkd8LiX6LHE",
  "key38": "2nxZ97aV3VSNkJq6L37rQwmyi5Pk9y99b1KD2zD4kZ9A6y3pGwg7DFjqG1BeW2s1pBr6ADcdTP2emmY4Kf1KMyyq",
  "key39": "3D7u3GvuZrgY67STqTNqxfXuwVLh8mZEKyQPMd2tLNHg2CK86CFSjG48tGvZxEA9HFi9beTvLAN5xCoqj5HefqXS",
  "key40": "2ieXcu9SoMoQ2kiynUzs38s4Aqio63AVuy1tjqcpU6cUhbnE8ijGZvBV8mxRN87Bd7hc3K3amZDEGurNQCE4m24E",
  "key41": "4GaDYkrHaYZpT9r4AfxvoCPginRQ81DVJaNKQmUbc75T7B6b9ST88XzDRaJ6DgHopENhTCEdcgGv75hRPjUKzJe",
  "key42": "p7bABE5NCVuqNJ4iwXAwwfzhkygjeCd2ao4LJNNxzjuaxvgbwpKpq1BUMFVhjFDg9PWus353cAr1XmM9qXttzB9",
  "key43": "JPGuptHqLMkk7Ws6iPPeHStEnrKndjV1FqZayLo6KmAmLskN4oeB1fPxL886wuW6PEUcUYZgvtiPnbkNNjSeVm8",
  "key44": "2wf3SYsHf4h5LTSXBuBQSwPpN3hBiWshz5mR3AxmsBgoViRPULxe6NUnrfVQ4dfrSwk3NZ6C6Y4WP1aSWtBZtBr3",
  "key45": "64kPYWhk1oZN4ySqM2Z7hXzHov8F29D9xsXauUoeWRMkShaP74Mw1mVnBtAKnM2N1TkKasQZuBymHZPXpdnPxJhw",
  "key46": "4NPQb8ZCXwcYhMwJjD5StwzhGCTM7HYmP6jH3AJhaaDeYjnCbCVi9PdaetxN5i5Ah1NGHYFe8SVbbkQZwfSiDWwF",
  "key47": "5uZqHo1ae7RVa37rHa8urXveuN7HvRoCU5obVNWk2c4CcQJ1i2tMdPt8Kcu1Hj75KgKEuyJQzoDUcViW6GTPUnsc"
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
