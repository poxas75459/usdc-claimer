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
    "5neZDRrdDfwugpfNGcM4J7mSnTQCa5tFXo6YE81yRDxDDHfqBcJ5cVQ8mJ7S85HJDzffNC13RCEZUUVZnsoEwLWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yTMdkNLd2Tx93EEZgKj2ssC7DCXfQYKaci6VvHSkjqFaPsm7e9PaTJRbFdLzzZX21wYBELmhZrXDBq115cRiqQ8",
  "key1": "4GtMLE3UjXP1zttCkmzVVeM32sJWMzNY4oRL2t1vzjrZqT3DzHrAvQRGpfbqcwwTRrGDtJK8B8WpJy8E8Dj6F5Cg",
  "key2": "3mGNR32ZbLvzy71mtivCbMHHRWuKNAFyAyLBjdQ7Y2C1nvcFdk2qksvgEvCkfSc4EsgKkPJNPLfojaWkH4ehJEbm",
  "key3": "5aqeQPAkRBNkx58SzV4SKnsNATA5XRTmQwRqCZrkbat5bufDs8SF29ZJE8dHKdca5MMsZUziJazxDhqLC9hP7yGm",
  "key4": "3J1bkQErHcCdBF8iriqxAniyXcpDQG2Yi2kK9ocogHUM6ZTw8nMvbfURLG7k5mJyBU6coutKFGvRKwZ7VCWbEAiH",
  "key5": "4vEzoCDenuToa5F976yCPEho7DMVd2i2hAtN6k8HDo3kdivgbujt9v4mC8pHJ6X2dLeT2LUrUmNzyFJn2uqD7YCN",
  "key6": "5dF8iDta1egpVTwHq2JFE4Su6bVNHwtfEEAPLoWLsBZf8pcyuqibm7KxfgkJvJWQW5S8iubLn4w9qmQaxXcMXiub",
  "key7": "3G4JF38RUdk4msckXBWnejHJAPL79mVB5tf32qE13KbW928XSF2Rh5KXVcMjGa6rp8g3TmWLX7gpTKQJdbautv64",
  "key8": "5Mpttce7jtD3Lur8YgPTSBJe7fvVt94HGoriHySQ2xerAiaoZ5szJtMQaGDhpv4PugjfbgPE83drgs6GTr9A65rj",
  "key9": "3Hk3MDxd2m2akuqttM25TR5WTFSopfSFDwzDdHJEFEXwVsG5d22pVWQeuqBHWDyAD7Mqa6eS77DXrW2gwrxVU7P5",
  "key10": "22d4mDjwapvfuQmziYZj6AYqRbSM6KZx2G22ukt8fYukLrSP7JbfD9qdZacunb17oYR7nv9W2fJ77nNzsnUKHyeb",
  "key11": "44Cgj8PrcPVVY7XNh4W6HvMtvbQBya7ES9bs41x39kRyXQqpGXWF54RZqAW2K2oShMtoHyTsFZd1MHEnfw5RJTSn",
  "key12": "3gCjjZsKRsQSQw5HxfmvspAbxywJB9nJ8wbR2DyTRSUgfRcZjeAV2rFtXWs7xQgeaB5YuLefTDCBz6SMDE8uzCWe",
  "key13": "59YBTYwp7ePaWUFjk6M332LBt4UXtMLAUMkbnrcr3pkcnEkLgVRdvH6qdNcwm46ghSUQZLEomQ16xGnxdvBV4A28",
  "key14": "2x6gdqbaxmmXJdnpUpKD1gPw7F7pZ2ryfzuJEfwaCL8eKr3YXWSkFrW6SYAYPPJEhgGvvHmMHk7QfKFX4dhxr5Nd",
  "key15": "58nknZPTNZSyTcQ7Sa2f8kavrcvNDw3YaMVr5hk4Xn1bjs2uZCDTjHYJdDDjGDeVnW64yTYRdxznHDUXqsbAMAt8",
  "key16": "b4z5eczkqePiFtzrUUFiqsjuXBpX6ioXLnNvzbwtkpGUBHivxZb8eNgFwnYzK89VxdGf8FxwFkzbVurW9ingtyA",
  "key17": "2TpcygMLrSUA49LBR85Z2YA8kBF13WucBFsaCW6e1icgDJFtqNow4scgshWZAFwZxeR5xT37rRurVTtoQkjv6EdT",
  "key18": "4qiQ5xndGSqike2mCcE16A56xmRDyKgqT3QCE1LHzwirT13iMnT47C9GGnWgE6pW5YWuVVx2iuax5CRhxPkxm6Y8",
  "key19": "4kbPxMv5qQnh4R5cBGKky1u1WjDzmGnooH8Tt3ugLBd1x7B43ZnAJ5Dima4Cv6ideYQ58GmYZgs9ax1S76Y3J3a",
  "key20": "5puRrK19ZpkrgkpA5UM6pEiEnSyQeZRGxmuL5xt6yDE3EhPZyae2odmuMhbeCJ9kKyo9b81KDU9zuwDhddJXZiBg",
  "key21": "uNzC4NKNSqjNABbUKm14wcSX7i39N5cWpkNo8kb8M7AEYTsWb1Sg2nnauzoFzDfYo92Fck8RPaJcdPEZcmp784x",
  "key22": "2yENzeKmecc4hBWhUEBuUmw6gVnNvCvckYLnU2VoaVwh8id3VbbqGz5QZ2QRF3Bt3Cy4RwkyvWuaWp3VrQ4J6yUv",
  "key23": "6Ux12JMfeeECA8gtMDdsYvnitt1fNqLQfJo51VGnEwW5CRKEMvKR7AapFdARsB8dh6qJiLqS7emMLs97FLkbiwm",
  "key24": "TFAF8H6sGG5rEJDmF1A882u5zRSnya19fK53UwY8Jg3Mnf6p8Qiu1Vj2QtN5QbzC9KjCVKhRQGZjpDF4pPh4DH6",
  "key25": "3gdYiHB3joJUaaaoXtYwH8sESEPs4zrN9Saxi5D4PgEyPmcJHLJxFjiCy4C49xLbTvZJCFnwAHeFWJtutpVRHfws",
  "key26": "24SXQxiz4pMCw5PqJhHKVoKNZAAgrB2oHVjAb7JV8yKtmJ2XffGV7SRon7mVShCPJdjwpZruiUmJER5UqH5Z7CCM",
  "key27": "2Hf4N95vPsACJEv7gxZX7KaU6fHcEudzbzXfEFyHL7znMKGj8jT94zh9Gwb2kpd7QginzpAw2nwsXmgvQbmXpTd9",
  "key28": "Yd3Nsz5yPweh1PJFpnUaf1pTcMYhnEZbpTA9j47vFHCGMhm9nbVbKuAfA5dj32jJYEJa8ahrVCUPK5DA7nnUMcb",
  "key29": "vp5hDKqd2cCqbbtZkVwyM7Jux1TcNaZaXbQHEnv4urjqcJZpK4WGqCxanZUMTspfKNTugHC7h1csv4yTcVVg2rQ",
  "key30": "5HY8e735TwFB4zH4SsgSNhtiagN89ukVgxcTERBHbE72iaUqKi2EzNCMjpyN6wyhsD9WmWgtunTKQcdbtC8prjMe",
  "key31": "3FcoUHHm4rM3ZLJyG4DngQoHqDEzGd73r3gkN2Pe8D7yrTWuFBa3SxGYtydQijybqDnjU9powwa5sqUUnAi89bDM",
  "key32": "cpxqqhoAGg7nrVyd5fi3AKpyNL9ckKs5oBRbMMY5j6NHGBQqYqjH5JoP6rmY4GV2knGwLT9Bj4aB9gbSZLje3BN",
  "key33": "5LYFXytBr3Jxwg8yLgKFsNonSjAbw6CeaSw39YsNM43RtzmSizsN22aPTxbSPedSwTPs1eDuNAYqMJcrboPyrL4E",
  "key34": "2mhZpcfV9prcnruGzq2bFLf2g847wpGcXBGVrJZycx6zeRrMS7MmJzHuJnq7CzPmKcdHNQskGGTQv9QvyyScFWKj",
  "key35": "3JSBHRpEAGJMw7VWYjWNLRtqSaXvFKjFX7q9ahyMqBUjN5buikVEhs5zLdCvZR8f2MEX8CcegfKAinwkVXmfoL8q",
  "key36": "4HzNKrUcfK3ZtVAzTxwHWd52CkbJyprWeGfKhkSxoA5qCBSyCpUiurcTPLRWJpYfn9WfvpKfgFQ3YLYVtdg4gJTX",
  "key37": "ENzmTnQaD53Axxms2YUtRGVqJTLySuEYDiZsi6QNxSqN7c866wM5EGELNxhGfiTVi5Az8HoD5JvLW6qv5WxwnDz",
  "key38": "4QMGbBbHiHJNtMbazGvZZJpo2CnkAsYt8Q11PnbkERw2eNFFgenZhaUZikrsnhqXeiM59jZZfm5dEt5VxCMTpgxW",
  "key39": "3bg2Ev5X9Dk5vvJRaFxcynnR4iQNNCa3yhn8ozY9eoBjrsDFw8daCrsfFkbZdYsACju6wSpFsYAwX2e241hoAzW6",
  "key40": "5x6BD1xLFyAGiTii4QLxMpACFGcjMWiou2GLp8oWQaGYBtkzPp6B6pHmiy2mbPvUoqgvMcVXxYtWKNt5huNNFNDt",
  "key41": "3k6HPeTq2EQUpoMjaCJLypx23UjzC1HsYKgm2b8NMa6caxQZeHBv7vsBrhtq3DMMuW3Wh9ue39qBtvsDUuVJPzMe",
  "key42": "5NYWGc3n6kvH1HVhStdxBprMFd1NvxqgXdhGE8uu5nzuZ7NQtBJ6DdcpyTAmDkPuwtposYDwV3cF4whDNcexF6Pk",
  "key43": "WDeVjKPBPppMigrnuDZsZCwkZFyMd4CsS8Yy38JDgm6JUYzPWR7YFKXpGpi7Uewm3TmxKDtBy289ExEjGbSejiL",
  "key44": "2Xe9ZwimWrobrekVR4g7LNBh4dXF8T96qLzZQ398e1RK3wFimWwhYvqoHRaAXuzRrJQnrcruBDKVLeD9ZvYbf37x",
  "key45": "tU67D7J3RjvkeXvtveY8RXazjoAVW3RyMzdijwyfF9MWSr8g4V6yL446BwNbZpn2hB9CUft315Z3uKdhuM7oVAJ",
  "key46": "HAim56zSci9F3PSFpfyr46Da9VN8ajVRR2Djme2BV3eYq9k67WLUjT52LDKmBtjvSi7s5DhMf7VKZSqn3kUwjww",
  "key47": "2d45oHdiE6GU7aAuLH6ka6HvKPJQG8e1QeXzJyhSCFARPPuvyaBBCikx4evWh5siXSPKzDkxwyqJmv4xwXFTndhY",
  "key48": "anT5QtCP4oZV5yBm7F5nWWhGJU8nazZopnMYnTJ2E7rhzUCDkwDX4ayRBBR9zMurhT2rSaVgKbjh5wFCTweKuhU"
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
