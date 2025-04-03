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
    "2e7QUq1qUJXVeeU2mUSJt3XvdktMPmn1YfYF8ZZgdaUmZ3xnKRAvb9yNAZodYSxszviNf46Fxm8DbVr6i2D2r6Vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gXEmbi6u6wPmoKKJEmuhFZuvpZex8zL3Fd5C7vxgPwA5FBxTXSiv9VUoMbq9PhdUk5DHwCyjPVCHKvFSpTxMyKk",
  "key1": "5wNjNvAf1WKgix7bnwxTtBv2tcywWfvfTCm3njEzs8ZthF34Pa5ofruQgmpGhJNrW8yD7dmndDSccDwtyCGBm7pK",
  "key2": "4wJiEzYreWSAzLZ7CygdYuGZ1hgTQVjTPTV7bM5zM7VFGwWtEh1KD2TFSFLjEeJ4EwYas7fbfRH67oE98eAPWc5e",
  "key3": "2aJ887YSU2jaWn66T3dF43QUpYCyLngy3gyk2NbS4LNY8CwN5qdNXARL5AwhGSqizWps8Jbwzh2JjJw4H2Bukq2b",
  "key4": "SVED4oEmD5GmpNgux6edsa6guAfLChyYhfbuF9Yaq1BJNfXcBMmBDGT8zJA7TxNPkR44h2VuDVGSzudYRXFNNH8",
  "key5": "2XTLL9KuksDwYPh9mMAtdzBx3JbovnpbwXNWkU6fM1YdHhgwULgagzWFoQeAG5RB5REgmgcvZSLh856Xq4JQk2th",
  "key6": "488E8Y9b698XeuSfPnioUHQvGoEzmHXRSfJot8vTwC8uC5aTuraUFWNdNAufC2BEDZ6nbMKCcRECUBWyk3ksD7ji",
  "key7": "37aCgixW6Mjirrzw1CWoA68RkVyYsSBZAmT8fi5qGJm1QYDgYZGo4m3dAmLHG9sia2zfAX8H4QZmj4ntMcf3vnzA",
  "key8": "3Rwyqj6cGGXjnWLdPpzommRYG7kR5CS5NADvHmA16rXJQQvdePLCrZqVZW9yqckKa8aQzv8T8F6C2jDrX1HNVugi",
  "key9": "5migpeCW71PqY65CDPhN1NeVEN1sLPhwfAF7MqsBAkEZybGxbnLoFj2w67Xa9FVdutePkBq9AxaduMu42mQYFL82",
  "key10": "4AwXhzJpivcTJXb4QhUsRQDCKuhid8wvNZJt6tS4Dg8Y1Q4p1xVBgT2GJYnCLrnFWMgSdodLEYCLMUajKBpKSQFt",
  "key11": "2t8xniUKPz8SM2FAsEWBDgVW1QUiLoZKkj2gYuqdZ2yE7ZSU2VCFzvEvbMY52ucCVijcL1vscon22fEzaHpXsWVF",
  "key12": "22nbm6Jz55azyzcPk7RpzA173tTtf4YKBD3Jaoh3qy91UkHWgx4pkg3mReU4iLZAG6jkdCWYW4BdPv9n7DicWEWR",
  "key13": "v4RRkMSRC4okk8hS6SYq72toEEa2UMkfLrxXYo5Zyr8yNG5YRqj93baecgragfvCEDVrERWADPCexgf12hvnCfg",
  "key14": "4T1PLkVTnZqNduN7AGKp919rCKGwTBFL4MUEWNNpu2qpHcS4DvEzm1K9vLo7sJeYyGvbu2Ua78VHafiqfhCXSyXC",
  "key15": "22PJRPosfegbjQx1QNy4VbgHBQe4sfMgvV8VfhH8Q5HkQ5GPzbhiFaMcWJ582hsakS3b1RQw65wP3FzJTKsMCyaY",
  "key16": "49fkDoffGL2ip4bZftBuTJJsyA65DtNjjG29wp2CezJpcfD4iB6co48C1UJA4owoEmxbxd3JWP5zmBw186TKoC19",
  "key17": "2W8QPF817uVZoRvSCnSG8bsy5Ck3n3MpxB5U42TTvpTuCkxZYLx2e7EaZVMAsRooxGVJ9muq8WokzPmZJyXf958f",
  "key18": "5RXpLMD416GNiCJgh5JVGjirQd65GYx2uXghXcJxeeGTkbKp5e5bhJcNqZgup5ea111mxGzfcDFeubDb2F6bc6bU",
  "key19": "5Tam1UEjGXR6xD7hezyzQaNSvWvfAqRZd8Ur9ynDxrT8UFWxZGT66DuwmeEEcSW2qf3WhhnoJdhqz2zaCEtjTfdV",
  "key20": "4jpVgo4quKC5rwtBJwMVkX3LEG2w3bLD9nHhxzcQSvFE7jAbxQceTHtDbgdttZqAYMwKqU4nhwrSU5w61emhEVAC",
  "key21": "3VPyXsXSjSdXuEJA37QoNyoivLcvJdKFXtx6waHvu6tJA43TDcBha61MVZB9fcESHKfsvnoL4YqcuPAox3wYRRib",
  "key22": "2okr7UVmF4Xs2G2mW7rLi6zKofJ3m6Kuxj6RmWTESKEAburdmymtfYBhAkZGSLWkmpHd2JP1WPmV2LgCPW54kymh",
  "key23": "5rowWkDGyTYCpBspYQF4ADtmyDcP8Lc8Ejs8FwB5DDe7RiGkZieBz7vxhgL9EvVMri7ukDxmTz85wEMQTCr4o3hK",
  "key24": "48czvkAroPojbufyhd8aMtkkP4JhMWaHLWJBtA1y4dC6zCVACegHPt4SiWL4bnaHHDPWB5VNQLGMbkM3xVr9hYhV",
  "key25": "3qxjnadeS4Bv3XjXExeCLkJMWfRcgtb45Jxh3624iq266KnLscXwgFTu9AHa4efoEs8sFfYkteWdv2QZibE9DQud",
  "key26": "4b7F8TxQEAay4tNzpacfj6Qmg2pLNrybw3pPAsfQbLQPHyudn5XRu7EgiL6ANqcHRmvyfUNteBSLm1SkscrDtat9",
  "key27": "2qBnyKbiqEVwWRNXRuA7XDq6gQS9i4oV3AsWwdHHTan6UKnkAJkeVL7cn7TtfjgjZ2USvZU5jncsQJUoDRpfYnCG",
  "key28": "2rxSanhuanvRUUa9XjbexyFt87LHsdhQcCLd6buihiRJPFuzcGpzhEXqod5PpnLAvEnTU1B7DyMoay1oU7DGNzm2",
  "key29": "2CLsUxK2cst9J63rKvEYzyx33QyyCEFMj5pVweXsgN3GmujwcT88DXjLQh3JCozyuS83Jjf2aDHMBM1FXBNweS3w",
  "key30": "2r27c3cZ47ePyrm2ncPXWaZc8QbBU5aAambVwXFVea8v1TXXiVvtg6eBzUGw7fg8YNHXpqUhvAVrnhhRkLAdo6so",
  "key31": "eCxXKSAmMBB8d2eiskKjEJCzdDnMChKWmo2RQJq4rayESKMzYRdZf5oMjiGBJfTZVhwcpSMgpxch3Rgv53YchuC",
  "key32": "5aaEPiqXf95yDb1bdwcCVSiaiPhedewUDxtgBErGQ1NaW5mCu9FdzghrHA5j4kpa49AoEmDF8wjyQHN5vPyN3Qt8",
  "key33": "55D5ghwMc7SvB63vPL2VtrGWdHVAaUmxG5fSy3G3dfqsxGusdMoYyfwqo9KeSGhDP2nMf6wSpVbrLoajPX1mdADc",
  "key34": "2X7vE5wu5s8PXJjcJJSEAWbkN6zhEyBThCBi2KDP8dWd1znAhcjbphFgwPKGqsqLmmwzhmYAu16ZAoMGAeTupbjR",
  "key35": "SnDSoc5kw5rKzhjy72x9z29NTbCBgTUUwwhvxa228Cfv7i6kMDv8UpoPHdSwCu5mRBbcixsVbdouyWR4iGPvPnk",
  "key36": "21BtJ9NzzNpLhqNJkZKbwHvrKL6vbAFHFfGXMx1sK3sE3ktPnUrv1bhX2bJcN52hdmxzLq5WFwgYeVX5WmJBCcj1",
  "key37": "5SCmaVPX6A31cgtRyi5YvPGbhEu2fSYmxDdcsctmnH1qZQVQZJifXWYwdkzSzPuMWDQ8ufc5fwnC5ZRgfmxNWto7",
  "key38": "5tYh4Zfe5u7nm6fv5fWJ8YBvBvT83FFogEctRbHQp7j5c2uqxQKdeVhNB9nAyc5Tbr1bBrqZzX6JYBXB9mJmLCVK",
  "key39": "5utJNqfzMZjwfgYudksiGqR74fMYUs8P12D8dh9zk4GoqM6Qvhny6CjvNrkyrPWTVpd1EYJhRGkAxRfX9ZcUAbmH",
  "key40": "saD5uKngRRdg6MacvwumREnBrde24bzpFYCDbH8aJVZJKakhp4kapaU8VT6dCqavmrm8RQTRNorbgA3tX6Hxb5W",
  "key41": "MGW1rnDmSvaZiYtmThcfqEXx4t7hf3cuYGcfcPMpkcvFde5ZK16mPeYi8houUEAJJ5e6mmP2NEusJVKzorBFjDN",
  "key42": "4AvxRvcDVydoRNPEDkBE9G5HjDe8PhSetkVnv3XNGrrChTH6DS2j7wBuLWWmgc7uYuBm6vvRFZtaj9cs9ZdtvPea",
  "key43": "3LXWC4otFj4BD2TPxfX7Sf32cSK4akaVAct4DYJBbZoHMzPhYXyBNmcpizVUwM96qMP8tbjdxxnC8j2ASdiQACkh",
  "key44": "5EeiKKsMtL5kdHuaN24HbtgEMMivpL9zrX5nMPGLwAZx9zZ29BBooysyxcku5d6Jk7KbJNhBzTWx6HTDx4FfkhUN",
  "key45": "2jvtahiH5xaKgpXxrmjZCF9n8M7Jg1PJpWZQWVrgHmdwPax9jL3SqX9EsZXydW9TCpcjkzd46qg7GwycggQEugBh"
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
