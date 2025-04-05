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
    "2gqnbWLFiZGySMQXjbbJ94bnA2pcZE6uMNWG74eqBWXYJJrCSNZui1CSXy8zkvYRfp2JgC5SJgdrt1S7oveUusdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p2RECRww5aJhJYTNLsyrNajvhJzX75w9XkZnpZyXDmCHxESM4nVi8KR32QoVJeyNKQFauqKEfh6EvZyJieVj3uE",
  "key1": "5SnVwQngyLotPQWNRkCinNUWpgiHBAztuo3Y8AHfhPYExvSVyvKquk4BWJDjRai255Fs1Z8mZMhPtyT7xHrfEm6s",
  "key2": "4tPWHHCgY55VQLVAiXwj4qYvYmHjfife8d5p3m4qvGCVAeVRB8meq3NoZFre6JS9jb1CS6wFyEfRNCXSEcZuq58W",
  "key3": "2K818ESjhv2gxQ5jhGmct3E7YPYsh15j6fiXmFcdy6DRGXS94xkxvKhTgH3DNPesBbeubfNFYhsSp8Nqxv6asYEH",
  "key4": "5xKConfEPyeyzoiuXsdu4qnabxePnnsYHmbPHkJBRuqtRhoF1pmeChMJCXJhUNaVKv1ubhAUnr8qQ5r3VZu6t5aR",
  "key5": "39XJLoGRzn965PJgsnoLpgnLdawaopry8L5WgDhS87SvfducaJTuvv9KHWtBuFi2UydE1kg4NbukFXbE6ch2qUAa",
  "key6": "2Z1Tef7m2NbD87bhYqkV2ReWfLwxJtrbZf7QtY6fvRC82yHwmrCFXPadjCfvwGFRBWiPT7Zrim85zq4FZweGZJti",
  "key7": "YnKpvEFg1YvNk1LRjk5yxAnJZBMe4DtirS5Yd9NYrvpVKUemYj83ceD6m9n66wZUNwHkWgXE56aEidF21DE3C5d",
  "key8": "b8T824K2HSp7ZjXL65aYuWd15BMPbe5RD5wcBcEENwaZC94x9fF5v2Gmk5HcbBhccTvyihTXDLnpE2UDXUKv7QQ",
  "key9": "5ZdKsAMU7grmGkb1APoVYnh4KDpDaw5uqVd9XjJkVU3cqEFNCQLuzFHdwficgJuLoUwP43dLZaAKf5rfuWFQYw5w",
  "key10": "KXGCvdsdS1Brw3KjKoL8b9tUuyis1VkKhr1BNsmoVXUktoANUo7cHxo4d9w1wdpd3n91jQs9MKGEHMXk7aDxjqC",
  "key11": "SVChMCAXmMNU3A83nZNRLbR5EUBVnzi7h7J6w9ypLP8cJxBfR7XAp3fJuFCiMgK2BAYctdvHFCqKU7KecrhN7LV",
  "key12": "66piu7sckTwMHTRRpxL7mLEjhCAXTiEHVVt6DZCMydanQvaLUpwhVAVc6kmcsh8XPhXRQDLP7mTLzeVKYJSiik8G",
  "key13": "2H8wo42HW2at61RVpMR8KNnLPwCe6B2oThGzeHDxkD7Rntjss6nwcJMJ5gvTupKpi2yZEtsBKL3qqb7X5RwrHg91",
  "key14": "48ZqZZEfJWVjHWDawKn2TD2EcTL1TvNDEe4EcAkzqVNDyWZRYn24pXh3j2E72s16hjyvibtNAB1cpgaKzJP2mB5x",
  "key15": "3GevmzM2XuSTZzCMrWQF5MuB4CvxViYYTTQYqaDngqr13nZqTjfSwVDCTGnf7XmDg1kYZTdJF1y13LSmJAUiNWif",
  "key16": "vEudEhHknYzZAyHQwKefMupRttA7tZRvqEhVKYQzJvxYY2h5iB24TejzQXQkhSCwqrp92wDFcHWdM1vDp6tmNL4",
  "key17": "3ssQ5qfy28fsFxHDjh8vrfGkNYXQ1RuNYnNgJppCHSMVXmEWYht38pV1eUMFLi2VBiEDu933L1o92hJFCcoi1qRp",
  "key18": "59eWyJ9aBGvmUcYxTD9EBPDQufcEk8y65FfXPdaPFjMpHc3ESLbNtZ42TDH6123JnRXM8iH8qhvYGh2ZXQAfQto9",
  "key19": "5qfzUmBhrzqDW7YwL4vxni2N28x8eCkfioeqEN2NP4V3UvGQDW2jsSdVTrgQRXCvUA1ZrEPXimteSyYowTDbXVxh",
  "key20": "63DL1VAhi2xnzLUz34wjB8KPjav6Khot5Nc4YABvvWPAdkCb7RkboSr273inamDWPfKzfg8nZ69if4ZmrqkAXXp9",
  "key21": "5Fpf6dGZ4eUm1dpAJE8f5WcXZM4TX1nzQPPS7XaD27D6R9d2N95hxwXFQ7vwppzCaM9beiwAp8uMty2TZpE2WsLZ",
  "key22": "5vRx6ZmcAGPGNZGb7tyzX1q4G1NwhQMnueRYCUdXQPsmfSMj2wJTeRx8yJgJQsqva3S92s11XnAQX3i6mtsuY5h1",
  "key23": "2svvWNR7mEiye3k9StkRxvRxZURT15eZMCfk3GTk9CKRB5Ca9yfFFnncFcjEzdbwc72r82yLhhLqsapKSiRDAbNp",
  "key24": "5hx6VMytbWMfVCSmUJ4WZf8s4VK1X4y7s73Zm7CjButEhZDvWNiMjNnwyJkfF8EcPWHcnfbs2hyXrCN16CawTE7C",
  "key25": "2pDMUbTyfyv6QWhZfaSxiaSHfJDVARC5S4SmjzzvCWE6Mtb1LSbAJF5eUPoHoSjrZ4iLhdAs7uUViwP1xUXVcnUj",
  "key26": "3fCXtK1MB38NHUueCJvqF8rL28fEqzoLK3qS9TpF1dqsKhHkmTPJTrgqrjfh15RfxYkEz2Kts2wi9nXh7Zp31qCR",
  "key27": "41qchVxTo6MgvxmzSz8SqYKRwY3eDtxs6HxbgXnubWxJZVrRZQvkfBEBitzMFq5SSdcrGhKEbEkySBvZQzmXWWXB",
  "key28": "wammBDhbzkBHsDbN57ndF8SVw7EEvTAbBqgzyyowNrTcjfLJfAXtQpqvoJWHP9dEg3isPt9qHSc7z1R1wz4pte9",
  "key29": "4fTnQMU2esWD1woLg1MrAENJdaky7jmupktnSULoErSmt5x6gs5o3CLpVMaSsXyUWXRjM1sEtGrb6Nvco2zrb7NX",
  "key30": "2SxDdNcTNzG5XXf8i4W8xj3xyDgMf7oRFpQTCLXwK6UA2563VUEh2eW32y6ynbVGvcGErVjr4TyVakqRp38xvT4u",
  "key31": "4d8f4yFeisUpa3F4RiCFCaQNq44Ebx1cfoxREfcUxXYUtgBra8fcHdfZrcr6HrpJXZahkbe9jCeivRiePJ5FnYM7",
  "key32": "2VKwhyAV7GRynWxWJLNiLyFq61xxAEh8CTRb8zwM2P9a5Cb1NYw2n4Fv1aiHdmsVSYbbdiTBfWATUM9bbBNcxmj9",
  "key33": "PvQaKzqgjtn11i9davn1NAbSN16kVnAT5M66TerfYeQC9cwa4QV37wQoYy8X4QDgcCaEZLWvoW1y3iDoRssvxXc",
  "key34": "3swCbo2ZfsPx3jvB8C9R5Jg3TbLP3WRETHQaEmDoVV3wbpK7XQ17dYDBkX6MhVxeSLkU94FDw2Qsv3rM5Bp9j4w5",
  "key35": "4EjoxqzEqRJVBHfPnieTt6LbPJnSe4HfwXR6HEMN5iyk5N4soLhMnLW9aY7EZHk9yPkeTGK6UXsQZeQcdSeJ92MB",
  "key36": "2EEon1LpiAbqGAFWirApNQ7h2n2WoZZKEGaQebWkNjMeKZ3jGysTU9xZkduhfrj71MCSMw3GirGcF5dftQ2pzq4j",
  "key37": "4peuGeUFwBZig5hCx6yKiZc97e6agGjBVwUqvejjVRoPthKRst71MQ5NntG555mVfuGp4qzqR5EP5BwsX6ytonLd",
  "key38": "yjdJweKBH987f53Hdatf5q3P2ThA7xNvyJtitgD4TNce6o1faFeTW1QCxQNjtSxGb8F1n87WWs5q2aNTiN2pV1X",
  "key39": "3GGfUrJ1sqUABjcqg5FW17nANEUDopEnfveE59eCsq6DZH3suZFU53JsYYnqxF4Ayoaj6aNsfAGwFP6xbkQ199r3",
  "key40": "2UGZZEhDLGMJ1W68AY7ETUBnXTxRyStXW5jPTxYnj36Kvhn2Z3jxwnaQ4mRNW9owseZ7VkbZBLqSQS4pLAkYWKf9",
  "key41": "4UhS2L24DoViogUpKEwTXkycXim4hDnTeob4ftthi89Sh5hdPEQLPCRRVwhTGKrTHYQsTFULdSBq3HZG82jC579d",
  "key42": "T8ktae5QEwTuf122mw676ETdpo8aY2SjbJjDnT8VyiYN9LN7c3t2NybZwBqm3VgJTRh5iKyve6rNAqp91capXcU",
  "key43": "3otbbSRSDfGtYZohvoF8NSEuMa4duFMS6tKnHLJAQH2BA95jStmJw8rt9EyRj41mdi3xvxLQKATHZTRKDf6DbosS",
  "key44": "3DhCDU2au2RMVm7peXzhxQhFCbv5xnxxTBNJxsou6TALDWAmzB5tPoSrHnmwYUFdFAETB3Q8sAyeaUZsZTF9h9W2",
  "key45": "39Y5FAEE3ocGwWqfZuJhJtd5Rby2aFTXeYYkMWJvp5N9WM5o1FTf18VBTpPQogY4sDitg1Vr3QxRS8hQWm11kyQy",
  "key46": "3ELsPTc4TAWhpLqvg9BrVHxfbqLqToA2HTwwow7YHVVM5aLwS8zVN5zhFF3imvkeqhLWoMHayjFjt4DS417mhCeY",
  "key47": "3ccVQGQ8eFwLEq2fEyZ4rnc1Zim4iTD52cNSf4E7FVNiQAU9Gh5UgMcw7ujg462mFnhnSRZTYaPWZjHNxqNJURjX"
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
