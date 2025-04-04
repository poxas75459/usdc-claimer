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
    "2rTw4gNJTUBoXt9R8mcxYYGSKDNVjopYURsGiKP68ihEWG5N1mDfDcFxjmKsbw8dkCayHd2fMvBdCj5zdXuYkqWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUcpqtH3VjejjXyrgV1oWhRTNKSjoJxgzYQYkbxtGUXNJxAva5rmBMsGwkGK6ybm7WkQgC5CBqYpD8wXDAhqrfG",
  "key1": "3jX4gtYaovrTPZeVVVPqimdmHRC5KDtcNbUCLZSv8UcrGESAvg436xbgJwEXZYCNTaVWqTBG4VzYe3tFZBSZkCJx",
  "key2": "T9hqcmEGgqv6LYfa413CZ5Wy8s5kiEBiTab7NTzTpsDUCJETmuFsjdxtw3Pey7SfLKq11QCdm4pLUb6G81yjS5z",
  "key3": "2hdEXYto92jBMdAmHhXgaA5tCoSnWsGcghM7frHm1N1WJ4XbFHgx4e4zjaqDV7JBZWoB67YyX91F4btsUctu9vth",
  "key4": "42DdrV1QKNQPqeesniFKhxKxBjBmRP2oeK3WKKeSdpUhkrWJeojGYisEENJH5LNc82Wye7dwv3YBXZoUJGfed7Su",
  "key5": "3cSXC1tZKwEvfFE8iK1ydzcUwfz7u9gz56GmturPzahf61zkVV88zXdx8WbjL1sDbdk53YewjVBc6KvV7zgRaYTQ",
  "key6": "5WK25NmoLVDe16FJofTkKS1hLcfVpUY4mxiLVdjCkHSkqLJnMBEALu2T7JjATm9oVDF9VZ6eda61shXtygJH1KV2",
  "key7": "4x9JXSEi9dzMKMaiFbBeUKue51ifvJHobXpfxUKi8rVna45XRPCKkhZzzQnrsM7dXSNmzsDRAF4evz8mgcuUKZzQ",
  "key8": "5YDEfkagSJZ8tTGZCsgYs92r9NzFFAJP9bdPNfDfKZomMqoLNhFwCTKe9YZFKo4gmNxqu23jDas9cAUQ2igcfJTt",
  "key9": "2MKtidDguNCG6r4NfdNkxT5i21rAwkjXEoVQ9RTQ9wMse8DFVbuFXPXd2m5M6ionmJHNuQm7e5XYjXkXP5EryyrB",
  "key10": "3pyQV8YxXPShjRB1DRniH5qdDaMHsUnyoKsHh3NFC8Rrecp1H4ZiDxmnBhGQTDsSodvfc5vW2zPVv4B5ESZooV9z",
  "key11": "3LgJze48RQZXeeTx2aNGpMN8sZBdQ6tz4Vh4LgRauE2pdkiaAFBAEXNw6WdpTinxEsgondM1uPd91rj5dS2JWZr",
  "key12": "E2TsF4za7L7Jtk8ruhsMKDW6TBJxpgfeUriiuzaNkJtVMTK8fEcFddWmZGg2rQ9nuDjETwFYcanPTTwYcRJ7pRc",
  "key13": "FhNjgjc3akFw2iFUhsco2sAhkfzqW2wpdVmttWLYSxEFuRcdN2Q83mfUmeAv48KEdfigR93qymnmz9pbZf2cbcx",
  "key14": "2vF6L2aH9tz6Z53FyfpzBcm9TMpGjd8osrNiqPZ7UoqbW3ctAFauBQ9jnNqMYMhEcsjupNB3fJLvm4zyy98Yaykq",
  "key15": "48sYcxQQ9g4cArySkKBJGFdMGt1LjN536wHoQ33MaM91jsNfr4E77QXKaXeuNcNsQipug82a65Yd5fzynFUgxJgA",
  "key16": "4MAo37dHsCbeuc3i8HybZqvkdxWJ6aBPVy5vpJAPtbMeEWH2WT14WxoNkpVg8HDHvSvqxESNUsuiSWU66Zf7crAt",
  "key17": "4rYWu5BmaTV4PQ7vzCQTnN6QTGzsjA8iVAPknqB5ED1syqrJXTB1gzEyNwxic3yqoajsX5LdkWJrjNPXwQ5ycpdp",
  "key18": "2HNg5JnNfmAnu6F8mjBvHJTLrxwJdVd3p9HZXGQsapqnpawBM1wW1ixtXRLoHqzrzmzDWWyAAc6VdQExpSTdBnv9",
  "key19": "3o29rhpjhkeqiJJKoAi6wz2Aomp72Hq6kWTqJj1jQb5qutP5nJtRCmiaeRp8xecnH7YWDaxH5wKq2kLCCLwmHDi3",
  "key20": "6X7ZfiRo68vRMGt5RGz6C7iuD9ikR42WHtUcV9Q3scAW1SAMMX1ZtKtY8RpJf8pQcWg5Jbbww5dRF7mQp1sVSko",
  "key21": "k9CYwki1F5m7gZekYkx7RZaejnECbNXkC5tRteDugZbzYZ2Dedink4nWP5wB8RevMw7BWDe7DyvXon15dr9iYGZ",
  "key22": "2wCnDe4pU6VGaTRhfVFpKmjbzYmxV6wrDwgZ7qAby9Mhzf2PCzRzwGX9NGLaBkD7DiuE7bHMH8gJs2t9YAFQjbvU",
  "key23": "4G5SfkqoY4gS3GEA7u6Qr3ijza7zwzrer2ae42SxsEjrdyHcEmWo4VQi3uybnaaLM4UKMA26gvW3bwRRYDfJuWSz",
  "key24": "38rTccV93buyZsLB7hfvLJhGxkM6qn4WioRWXZ7nuvYSFj4bTmX56Gz2XAfUELtdkZUNo59oGXY3bJ92V8zY3xDS",
  "key25": "5xY8gwpZq8bTQcmNfZN4dAZVGf7pXbWAcr2Z7x44tQfCoxoStAe3Q1agcHwB5xW2EkRc4KZoXZDdx5cmZZ9ZV2Z5",
  "key26": "4nfMFHW52wmvgWQmdLrvGr5xCQWMg9zcEW2QirJju9eUhfqwkp8fzbAmyNMHfm1zWHkBNN3XasDsbtX8zFmZHHsr",
  "key27": "rDjNSZar7pTMFTLVsm51f7k4EtNZaFqdaSpRiLmNqqXRgH1FctAp5rNZkooiYJYGbPNzeeoR7fUgnspGgSgp6Af",
  "key28": "3oHpjHVKzuQEegxiU9A7U3uGdgPfjdghwx6cDcfHFfpKS81EJmFnDRWqQtzNU3rHiiAzrSZdpninx9rbdBxJyidk",
  "key29": "5b3bK1z8WHrjKQeDKSV9gPZkrfRprKVVhGc3XHJ1JK746ML9vEe1RwfYxezQxtUCJQbf3Li6x8K4yJEceDszegkS",
  "key30": "5vuiJNuUUDgoqtiidT3N3a3U7K9ezoi9YEcT9HDiKwc1e4mBetHxNmRt2Bi8nb5Fq9hNaAyxnSP2XsdgWUJmfw7f",
  "key31": "2ykgV3mEknwyQdaZGFdwnZVSE38evNFrZLkWiavxjuZoQmzHJEs9HyH41tJbHV5ReDL2pt2WxpQ1bEd7mjiJXEkU",
  "key32": "ohjy6M1Rc8vHEePrWDWMbxvPMUyvdiE28NKMi87r4HEs3Y8PfeAMoMFAJE6C2CiLCMwuQJ6bCGWq4W47CP6L9V3",
  "key33": "5S8x5VutwXizu2oyk9aTWjpocd6pk9p33jdSjtuZSAXjuBfgPscXzn5RG3GzBHDYfwfJVWr1QLiomsfUpS7L8nD",
  "key34": "YVoSNK1jtH5mt2fxjQBvtu4MnuLQc5Zzg9oSA8t8Lk6SyW8pwotMUkfgM19SUDniVyvnKVneN1qhNaRkqGrzMyS",
  "key35": "HAsJzcUXQ4UWoXgabDPnCUe7D9icPkGkrLhRrKydsaxpUNgjqvRLss6EwYVmNotnf453dy3GoWsRSzso9QJm2SV",
  "key36": "CqpHLvThEiQpfioY1gpSaGwL283GDfSUTrc11vo2ov6YwJHK6fF7rgKBAVyE8z6Vk4zDYe1S6KYiJSr6musmMLw",
  "key37": "4mWU14ryzSP1kondHjiZiYoFPXkULsmxzh9nuKXWoTLnGGymy1sz7yAfGHY4vsYorcEX44uffmPN4vu9PEdVEFiw",
  "key38": "gjUpPrV1a14dqyi3DNCstj9duEB4xzY3FyYowTp9PsaSGuZUSEk3ma2KHTKDK2U19PyzZzkKrTdfRXA729qvJRG",
  "key39": "2AJW6R1oZSNodR3CRQUDyr5HJ6EEZPdNj4F9khDD2ecViQ1WyLFpgoVU13p9fD483enuD25VVY6kXrEJUbnf3nn",
  "key40": "4vmzuBEdwBhEhUhYJcjhz97D2Um2Jy8zpppJB6eFBL4zXPmuZ581GPiEpWssYCqp4227xXcKzjkBNtn728R4DNXZ",
  "key41": "4PiGJxenw29XHtYoPhewZ992vZaFpt2maWEm81rLHLB1amBquNtyQJY5BPLVtaXeF6Z4SzFXvpQ798o2bY18oKSx",
  "key42": "54dQL53dJ7RueNhpmjEg1X524gxFSeJABqVvkTvrvXkqdDrHt5bDrEnM8Wn3K5jQotZjoEY4VzCvwCEr1BZ1KDah",
  "key43": "2iqQK3WMwnk2KRqW1gez81vnozvc2sEG42jqm2DQM6iNYzYYcBV5W5nFbzGEv6gEFbmUs5xx7qNzHDs6RZYC7gdf",
  "key44": "27TXYdhtKAVqMXh1TzkAvs78J2kUE1msXdDfdEHNpx9NbcUGDx3gUi8ffQzEqQKNmttfjUHGm9JN3E8QT6rexPS8",
  "key45": "3mULQb7VpFUFtn3NmcKFCNSeRyidBqKCqu6RwhiQJyz2hDir91ZaFWN4bAyb5tGSxTzZBciLS2AszAvpy2piYAtm",
  "key46": "2H6bCV9Y57SmQWLUXYNTxBxm7qgqb2rLza9oS4bqPYmyzTHqdoSrioMeNqCUS3CVhwsyj41dBP7maj7TvUrFxTua",
  "key47": "4dtc96nqdjEx4iy7z2z6Ux7xiTx31RSjJnJFPcZWKTSJJLKLo6UyS2j57HT1iv3ntG81UtubXBMwiuxg8V1uxVJR",
  "key48": "5WgePa1qN7Z2L8gXNZrPvbqeHBrDsxjY8ygcSARPC9uULjbjGtPithxV8kQwMqKj2mjqZoKmqCHymtmBSMJcche1"
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
