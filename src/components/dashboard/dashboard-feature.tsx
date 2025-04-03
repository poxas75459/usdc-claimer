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
    "2LC1p5E1Y4Bg1PwuX7qeGjtTqN3cu5ipLcH5fdPv7VgYAhBA8gcSaabAZxm4jCk7fvWiSvS2NJ6QXWK7a62EatUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "upZjzvAojzcLrS2LAitg6QuK5kzCoVUPnzhYkNTPXRiS2P548X46NUAEFhCLai3CHjn4igpJ4HidkT7HxLrC1YV",
  "key1": "58F8FBpSeDvw9yFxd65iDwYiC4KNaqcFyFvDdi3T5yxwykmy4BWrFMwE6JoewRgNGcqnVTxRLq6zSsV1cDVV2WQK",
  "key2": "3moYhjJAahDVoTjbEYLmQUiyELcgfW5t23SPyNgpoCiFWz9gap5BMcd7g9aR43zWS8qJGvG2JNPrB1oKsVKVv7ZD",
  "key3": "UtC4ZC7DrhJ611tkAbQ9WvZW3nHvRhuFfRJFgKrQ7UuEgPSeDCydWHVxF235wbJnGxWwqZ26WeipUp6FZWyH2vM",
  "key4": "2qiPxRKsMhEEBddGUrmkncfQX6SdiXquEopf63MnqmrhxUrwLxMfccVCh2Fey4cFDx6daTuANDCUXcXjJu4pHu1m",
  "key5": "4bp1AZdb8AyUHMQbCUHCzhyBh3iT1XXuVKbzgheucRYFmJnbrMgokm7QVFCvCP29QQhe4BewBMCW3dAynqJykZhW",
  "key6": "3QfZdzoeQtJrFnpuAjcAhMCJz12BA7tZGuFGBEfsHXNjQu2CURBbD96VhSJzewUtbqMP86xbaKNzYeoKrF1K6R5m",
  "key7": "55jLamb5Qw6cdF9m3HFnBF9xvWr4Q5gcTo28rV7ZXkcqzprRGD8Rp9Sm67hK9JBPzBaUPnqVCg4zZSHgYqJQXFth",
  "key8": "GyVWHKfsSNoM5VLZKAhMeUgPteXYHDB78gJXUDe3xuHovhuoe4WVo77jM1gJcEDZcjUKVfcbvAnsXM8PWWyc9e7",
  "key9": "63CZE8EJKuF3fwHTrTk8us9ChdkmadMiVtGLcQQGsXzdNDjh5Qhm99NS1WBq4N8ZrMHpCA9wbf8wvwGD8PYAffFU",
  "key10": "26QFmBFMRGzoPBkvRUoyGRh1niyw6cyFwahYfhVCVcAZ6aQeNKNpWHQTnVPYVyaXawz26asYuEnZC8LWNvWUHHbp",
  "key11": "38CP9wR6NikSfrVaTefiKWqoWh3JCwEj6b3A7dugF9xiAfdMYep6j5rAd9SfbfuusNjoj5gV3j9C1AkUY9CsnaPp",
  "key12": "3ea3xNb8cG2dAMnGwUM1DrgVN1ZMRA98eSvjtx1ipSqfHhRCv73PUyH9CWobbzA4cc6st1ZwohWPWBW8R64ktofM",
  "key13": "QD1q2e6j2tXdFy6w2SvLGthJesiMz2upWbvUSGNYLFsrBVDsAWjSJKB1dTeeYg4rcUnVoXWC3yw63xTeDfhQRQH",
  "key14": "2CjiPJmHmfFQ6YCpsbm2VQgvswpvUsErT55AVWyCee1p9oUW21XJPqPi6Ptp5uQ1k7Z7TJqBEvJtZDwTZYXXhNji",
  "key15": "5TME8paNJHaSB72uf8ReDbRkDmKQNvVb4F7vo8ZyFBkSPiemQvcvuLaduG8rAGXCiQUcK97kXUXxWinyetSRJ72n",
  "key16": "5faGYxzx7QbbReFH4DU5zD4HASokiTotS2aRjtqPSGpv8ejFdQm9pCvgPtDWHbmypsBHX4r5f3PLu5UZkupNvPLu",
  "key17": "2btXKFZYhBeybTkNKCqTEQ5C6B1FASGwm9Ph1wFkrp64QDPispSay5RxV7zhj3cjDVcWkiyXDqDkMa2yRgsk2D9Y",
  "key18": "sG7m9fneP7XSK1JhiLZSUZGsGTsb9pPPETSnAVB12gsqVy61qdr5Vw7kRoPwvMMV6AK1qD2Gt1pd8PpzHhYQih3",
  "key19": "oYDBWdaSukVMMJfxef9kbd2VFVt8VUZbgxGWzCm76XCB5XdFtKUbSL8aKu3kLXkqf8d7DSarLXvAXdGSeLp6sZg",
  "key20": "3QyiEdXD2snmZwLNFKxdYciRmMLJCttZ37wv36CuoazzWMn2jp75cAKKgVPrWe8zHS6GKBs8MyCey7NwN3YJpwbj",
  "key21": "7to8qgqaEUHee9Eyz87qWyHTt5wCDDr6eBhWQtigZBxaj4dQ6DiH4F6pZLcYmyX3FhzbB8EFXMLzibR3XSDgnWo",
  "key22": "5ZaPzqyFTVDnzeb8ni8XJtMAqt3YuBtu9MksTrbCWrFQDuv8mobSfrtMr3CkjZG3r2ULD4FKoA4xY4gB6Gin59EU",
  "key23": "o9AxFMeJx2T4Vkvjd1c86ZvtqJRsq1t1gr8xMWM9L1XV4gP9FvkpArPpMqWwa2ibUY1YYSYqKTr4mfwJTtk65KQ",
  "key24": "3fHu1xSbeSBw12ZaukKVfaFiEJN7FcbqvGiXwpvPBVrqsia7EseaRpVhv7MFBcDCXgCCLzqqBH7JkQLjBo9JCuZb",
  "key25": "4YQUaY7aq4hd4GAQugegqUn9oZoXMCUsEBfJqSr46HBUX5ycAPDnCVsF1uggb4mbzxj51CcX8wTMwGZARYAWfqe",
  "key26": "2VQkSPT9X2eUR27Up8F1Fscf1fsQVP3wUFLeUtFx9fCf9snboKPzmjcgJms1fWTT47vRteeFhY6qCr3gZhPdP5e4",
  "key27": "4tmJJh75b2gAKRwEP5T8qqz66oTVxAKphCaw8Rs7WPbv7CEDJ34Wa6yoWxcVCczXEaKWcjMDSNdyPasUyMVTMqpu",
  "key28": "3JsXhmdueiSC3JeMgFXguhdPq9o7jtDoA7Yk66odUfyFsyycEdYHFzXsriUXLJHqCLWVerR7sbpnSbDJ8Ucemjfc",
  "key29": "Hs55QRDt7EsL3zz9XyQ8hHtyFCZD8iBudW8MNU1GcYBKidULhJafRp1om4uPi51shhgMr7fBosvZT7q7kE4AEvq",
  "key30": "4AL6kvMUyfvuD3AsfDsPv3k74xVjkuduHT6TQm8vSZkY39FT5ZnGmwTfeP4V2RGVu6VxpyNNj1wPqYKKoM9k6Jcs",
  "key31": "36XychqbbwV3MbehfvvaLyqgHmHBmVeamJDdXKyHrrty9Yd3v5m81XxSJgWxJxdgo9JaU2YHPKdFhpx4faqjbnVj",
  "key32": "2ASzDzwaPV5Yb9xku5tmUMX6zS2HcdwHjMRNRNkRbc898WmMvW2kL67WSxfE1haS9gwRQNmrSDHyajyJ1DQJr9BR",
  "key33": "4vhqvHdtZhRn9A4pBqZAN7fnSd4zP7HRcWk2Q92A5WjUgeLHhpnZ5PZKe6CL9MrANjgEmKW5nSiSfRDztthBhL2X",
  "key34": "2v3sVDurTz39kDg2vrAeE3hhhL6SFzGPhTRry69nd9GAi5KmHuyTReLXDQ2nUCMfGekBHhJRcRVUTZP1DbFJLLn2",
  "key35": "3GmKAi131mvin5xZ8PXjukyjg7vkx2fQZYpncHDtGqHUYQjQmV8shn1hnAUz9fHyjFWCr7J5TkVbcEUoTuLsUV8J",
  "key36": "3WWEKE79EHhnDFgDP8snP8QADaHq8vsTck8ANBXzGGmWru3CDg2qtxhWbHP8ejryWQr5ENN3MmGeC8RzMtzj37Xi",
  "key37": "SCuhhXPwywwgB8LreuGnZshCcHowekpFsVMSgXMDKhAfACgEeht5eUUvGKrwQ8LZ5QokPxs5zJxhYixc7SFwetA",
  "key38": "63XxjC79LDq21urpuU8zbobCJavxJRQAwFrcUoXxgAfW5cuEASu26xzsftzAJ7J4GqDKnP7RwfN11icSpbvt6Umm",
  "key39": "E58GWqH4cSC3V6kxBsVPGzTZctKHBd1y6v4wvydq4DMseV3qpfouvGx8rCn8gNpx5pjXhbF1oDWoUw1hdCaDisx",
  "key40": "2UMBqYQ15gZPVdvdFLntZviMwcr51JwRGBHQBZNgbZzqswpCCBi9QixqRgRpFx5FT5iPwzSHR9qfAnMVexdMuLdD",
  "key41": "4ofurVZhnaJ2F7xGqKqGz6KQybRS37SyLZ7uMTNBXKQtHTa1mkTsPHnWyUNc2KPrwyrFN5hKY1Sx59ur654v3xyM",
  "key42": "raAnUx5dkE1KZS7KzyymCtgvokuhHztjwR4doa3b69fhyjmd7oDSamg2eqV7Jix9RkKKYuUWqsrkEDYpse7Py21",
  "key43": "3dNTSpxkL884CdCH7hyJ854ZAyY9SkzhHQ18pJStmFohNXDcXnvmhkANU38obSK1k3UxzXmN2HRc4xFceNwSEWcW",
  "key44": "5FwQ5dsNbjTbL7zkQMPvXKtrvusL1cygqiYJ8UHLEmea5EvA2P1YdLuvQJCVkiitHvgt7k9j9cD86Jr4PJj1akEw",
  "key45": "4DaCTerUAQX5Scd3DrvXEazRu4uHjHWk74daQBxfqBa9AZZkLdobhq7EVQdWS7McKje4gnjMoFrgRGsHsG5nhnEV",
  "key46": "4AqRwztcv6c2h4AgGZnP7f7JSrRbFVjvLzRrXCtzBUHZ3rAhHZJUKsDcrik4C2SUB1bisQdhAjMb5RmujM2WFrqa",
  "key47": "zo2g23FpzHT7YEWUB85uyPw7yFbo5KCUujkwFjCDZr6RVKAj3aMVDFai5k7rYiwgHpccAMRXEv5CN7KxVXpQh6H",
  "key48": "4nna2som4VWW1fe8wJWHK2mv25zPJ7pwZpgQAL9xFn4tbQx3Vkvs2Gob5w8TUKQaFzpZEaAoqWrxKgeizMMhnsR",
  "key49": "5rYv4S2jRgFfon6NTb5hYAacr361tmcZnZkGi8RUTF4eXJGc62yLSpoEN2RM1mX6pPvf3yYgAPBAkvCuXmHs2gs"
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
