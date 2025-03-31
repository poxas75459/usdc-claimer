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
    "5BKNyXdHYa98YW3V31HMLQV6pQJnYoa6URF6f9biw6sq9vmYeDirsHiEDcg2GWY4DbCtFtfRbMpBA9n2W4tv45Nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NGpRzgquoiSCoD35vFpHD4mtqPaM5AenFqb8LjXmnydM1749auPy1WBscQuMPCdTdtKmE5ntp55xvXQAQ4DmVDQ",
  "key1": "2J9dLKstxq8XHwsfiPRzaqEUZmaqaGmLTYweHq1dwDMEpwvisdqZibNGDQj76vsf4yHsPpouPybHDtEneBs61kZD",
  "key2": "3kExZVujgXv9VuqAUsWUnDU9CDS1TG7MBnPNUSB34VitRVYNsqg5ShcS8HevACApbky8ZqTX7VviGtH9xrAb6ofz",
  "key3": "Y2RGz1hwWggKKYJWpX2eAbWzVZAe3ysyNTrjfimWRuJEZEgXjxDTS5qLo74PDTEuPifDQn7cabj4T83KA2qaCy1",
  "key4": "JnN5kPW1VBdGqjn7T9XAbEWH5JwvLj7kautNiqD9a4hiGEwV8xxTzqsYXzRyjPNh8FdW45S4s8dE7mtqApdM1Fd",
  "key5": "33Vxm8bDikndoEZho91QhUxWFCGxJDw6N7kJA6sCZjkDYCNFyPjkzUKdUeYw7GVq8gQ3yAcdaFeAdP8oSsCni5fb",
  "key6": "297ZcYeUQF73eMN5Pz8cK3P9NZo4wwirKbSW6oqZbT8Z9ACuSUC7aRWS5f5yN7DMfhahqoGtDDjeTgNnwaEdif7c",
  "key7": "36M4rwfbmLrXTW5Mqfx3jsHcBfMLii2f2EcGGUZqUdinv7qxTyod2QiViWqNJABkVaeNNgQ3hWVTmnaqQQD5YKnv",
  "key8": "JUcSsvBvmSs8wmVgLuzeYqfJCRjin7RpnXfqsSFcpsqVg8tdm4EEtTG4dDHgj4YiNvDEkUVnVFHTyb64VMJjeuh",
  "key9": "3jEVTPR5B43VCV8F8imUCA6r9MB3wAaxizhrBAEqeYfymABHSLBCCQxz7eV2mj9YUiRMXXYE9o3KtDGVC3ua8KCM",
  "key10": "4UJMrwPvrJh8iFTqXhXBKLCpGmVnMP1dhjFDMXa7hwP3itXWgxMtHgBi85nSz1XvyaeTP1wa8b9DF2yDW25ogEnr",
  "key11": "4wEVqjkQPMuScP74Z7rUDP6b2JLEPmUgaAJ3sYJ19wbjkmaZshWXFdg7K6gZvtGi5uDWDJnsE7Zxyt4WeEDhDBzA",
  "key12": "3guaCXELsEsMrri1rCMe1f9vsuLgFRoHimeSt5Jk2jd9Msbg5UMwAgqkESE1f1r4zvxaFzKWgiSPd2TQdgoeMzGU",
  "key13": "1kei2NBMpDRkk5GYVzMBY9bWQJ4PM6FYBmwLn78jrELQ5WVdBd8ybZrYXS9SPGJJfVHScYVM4ANjQTABJCuc7p6",
  "key14": "wQcS9pVzfFbRdi4ZaJm6rK83rKsEaZAh4z2fQB77tEdjZP9khnzpwwoNiqbXuFLWRHPBBDGGa3pzwQKJ2yWLkUd",
  "key15": "5cy4t7PirETNVVsTiFi1feV7q2R4e8UNTwrxFGdi3f5bLmB6rZtEjVLmJE6kjapq4imBJScgGTRH7Vnoq861iMdV",
  "key16": "4UFD4zHKjJfmVhibdtKFrNX3Emj2jvLFVXsgaqzWypURpSk8VbsNzC2naC5dyy4MKP6z9s8wXeH3FhE4FYrvS5Ee",
  "key17": "2TATRgDLAYGY9K4UCP8NXp1m1Br5kRXfDxmSPL8snxHR1GVzDy3jCzcdxUCjZSWtS2chSgoPpasLTncf1vPPz5cV",
  "key18": "VsEiEE3k86NPTReqhrDCCp7jwtvWNxMnXL4D5byTpqtFuJAD7SAUXu9yhHdVdySWk6bzykn9bwiU2AmQCDtwS7C",
  "key19": "5rRETJmqvhK172qcGrcyB32WFJzzU7aw7c9ZjCWVU2rz8qiZY96e1sB1Bv1hk9qCehpzMZLT8DBLAHDc74XtGCRZ",
  "key20": "3VaQUTgDHfasZrFJZLpk7YjyuPvgDfXh1rc3VnoDBmpu2mVfePNaryZnyoUD9iZ1hhke8R79w8drT8AbkC1dpt2A",
  "key21": "5hPY9CQ6goncEkrpKadWxwTBfzs8DTHXupwoob85sfExzY4qkEyFJp7LG2Ys5weRRv4YvDK6opPeDzoLeuJvnVXH",
  "key22": "2CTbHc86oPxcNWCmqQErhcsjoPNe5g8wQPooqQVgmmS9YsMUhtwFRkzhLiJVbXkuKy5HAK9hSo2MF6jcsnkhmrPY",
  "key23": "LaaYyn4Cna1FcNqaD2sUm4NQh3uBkJ6jbysJKa8Ya69GLzL2qa6iUaSqTXJdvb6RmQ4ZaikWtCuKyxFZXP1EoRZ",
  "key24": "26dDTPhomTrJLyYWGxWuHtBWRPqhZDp6Epj3iZ5YEhwaiCFpxkgqnVahtEYeTVGy3ghefdCmcH6tuHJW1F5BvmyD",
  "key25": "2JQ1kJqsfWRS44DtYi7xAS1SJDLnEnN8T8nuJJcEDTDrzSM51dw6wyKCLnp93hS1i8LovbTSdTJ2ZkumymHRJCeC",
  "key26": "2BkAoPd7aw6mFqgAju28DRCDbP8E2sHnSDdgTCAEUgFCKMbNZig2cFXwp9u9KyUYXS5ipzkjjnt1N9TvbfJYXTkc",
  "key27": "3yRdCgSZhmWZcwbmEpchriZZeqh8GjnzySauSEjHncDpXqt9aA38KrtQVjfv3NHpUuNYryboNBnYAPRaUzGqXMz9",
  "key28": "3jhXzBLYKu8cxMQZnwkVb8CcewC6X9FMXjXFRG5Z9eRTCzrurBswujvBZ31V6rf9zJFdTCYvapxuU6P9K6R9VQe6",
  "key29": "5wGLrHfkmrDyQmKLobuZjCem4hX9GobG1XHKAfaLUfe2JWkfSqjL3RQ6MxyjPuBPpyePwi3gNeyg2SMuTC35GFJw",
  "key30": "3twGGwhZbHWXnn37NVpD3RUiLP4faGgHdiXNzcPmF8swHpMaF2egmDa9jmPpphBRjtbzQbgZRLPhfGj2YaSEfu39",
  "key31": "21yxfp6VzjvgnRfRAMTiybK3F8eeTdxnnQA7HeVRFeaNfpjQCh4XNjeRGTsS145udUYA7HgSUmCUtFW7PWt63d3S",
  "key32": "33awaKi3fcPS5ifLdVs1i4maeqfrS8TgDau8RVYv6AenRrhZMUsmhPHGHGfotQ1dxMGjor42Ex6qnAPnN4H2vapC",
  "key33": "3wfPmZpCxGBYBPqoYEAFk39BDWt93TxHx8bz9dmgDc9LZeLjy8hYGsc5Axch27Tpq2Ex6QLRw6izzz5SFJuwMMKF",
  "key34": "2DUtTiaYXrTuafzXRxBHz9KWs7Wsc5U5H7uSj1WJ4hnBGtRf6sAbAk9AkDMdKrW3QLwEiYtdRRUjKvA3TXwdtkrY",
  "key35": "3EMD7yfMhFo2toicP98zuJJU8X11Ynh3vJfk9M3ArJTSb5k8c8nbPM679io9GNsWVo227qheiYaF6pA71T6qiJjR",
  "key36": "2mKo4FSPhZT47rQyAfcAgzayhZeVzaXaY4rPrN9YNqzgTL1KgMeRwXRf2zhqyxC9LkUWwV8AvsMqLXYrqvbPonwF",
  "key37": "3xKjL7spaApXqMGJTiC7eokRXt3ztd54fD8NQWgQU53APaKA6VHWLK25HH7KeaxyDdp9xywEiZzw2xUvFe5amor5",
  "key38": "4Hu2FrWmbSQftnYamXG7UZb5yJSRAM3MJ2DYNLAHe4MimRBkTfz3H9MytEPcCv8crVQDtRBvH5xiZ1ix8twKs1Fb",
  "key39": "3VyQ9S1NmHTr47QHTtPd4v2F8939GSoHZLHhguiEKBXVaf7H4QfjnEmQsnTnhDWh54gEYt9gyw9rg1JQt2dHCewA",
  "key40": "wWmwk5TASkwf3GihtPdQ33dvw5LrsEadXKHN5QyUS8jH1AnvznrBuzEXXjxzPVqA1RNE4brYifrzL7DBFabT127",
  "key41": "4So9vKRYYTUxHZfpY4EBHRwmqpMf3Rpn9zoia42maFJDhnC1J7exvm8KB8DMw1iF2TQEVVHgHG2S2SV89ULsRXJ8",
  "key42": "3JPZryxj48coZjCJ4UVTAZYWgvv2h57cqW68ed7LYPXUEmWyiXHja8h4oBY4Rzny5ZYVs31DwAiPx36xLxQbPcL9",
  "key43": "QUoXH6XAMTidh2CGGjimvV85AZysHpHKUDFKo8sofdEYkBtqv7eFTLmSnSN1rerHsX6fFw1jTjFu4pqj9tW2ZzZ",
  "key44": "4zm6h7gCmPWeFAs3VCwQXm5sJdmn8uT3XDkv6qe7ik5Ja9orhCdKQUPKxr2QTHSmKMrRS4LJLCiLwBCkEbSMYRcx",
  "key45": "55dBRcaBTKi4qnKL5jZJMnHAydjg2MEv2RhReqCekXFL6SbYK68WZthhPtdqPXdNiH3kGiAeJ3Lx9bYmYtFhggG1",
  "key46": "3S41pdcwzPV59T1XA153ud16robor5WE6qrHjfqv8QvfiPWLdELGgJUFeC73SQuL6mKa1gJNSRm5m6ivsZrEakdZ",
  "key47": "2TtgyvghQPQRu8eXH6Pdwu3gbmSc8njcRyJa5Wj1YgtAQpKgtgs8GDzCWACahtvtjLsWuqCVZXJQrWX2AKHBVY7A",
  "key48": "3zZkxmHTRbydoyfNSK2ibubiUQaEcsQmeLHSxQgW1GNXmMakjrQCxY1aSvKhxJShp7D9HdLtBYyepQiv5A14FpuR",
  "key49": "5npWqnmuCFozfnbdHmCJUbo1sMrQDBYH2TC18iJBVaPxDdRhziwtJZJg3AyjWazhmQmNKQ6MKwAGvTVVXNpjPEyQ"
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
