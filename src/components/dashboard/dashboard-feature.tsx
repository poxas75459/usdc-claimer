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
    "2TqZGFsr3nKpAmtj6q2GHa6b8ZanjHdsfYBKMJAzc7JZ8tZsciaWrmfiBCFsUQ1DoJSiJdfoq88utLG9iwRDaFAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XUR59aoJWGCtgZREgjEpP2knv8u4PEyLvChM294hsFKLfGHacZiyBH9K2HJzWqzWZ8HwbZkmqikcyFqdowJXKzi",
  "key1": "5Ww4HxZWdXZJ9uditMHnJC3b85K5jejB2h1JxBLgqmFx9orGdbasyirdFH12Fgqhhg7ofhw7ge52EGcKebXhB8gr",
  "key2": "48qGLpVBuBgmWuV1yyteUh4t4SVpYJNPtTLt3YiRCn9BnbnqBM4hwno1QomUnDDACAYcmBBHWvPX7RJ4eUNfJ5S2",
  "key3": "3y649a94ugGDPYcER3vSUJqWtnx8qn9qEEpYbEhQcG8fNwYYA2aDBqxRDNqr57aQ1xCZuF1fA4vbbnivaAr6hBBa",
  "key4": "2dQCu8mFojQKrQaupkH3R9fUD3qeNEsRUKHm4deDDLJw8KUHDHvUFkCvHcTS1vTdP9wkakaiSreBpF5cmP2Zd24J",
  "key5": "5txi73NCgUJDZ5LeM5s8tAwAW61ymLNJsBPxbtLHtutdKAM931PTPWGNuRAvAkkxNmpdczR5M9DDQbBd72gEY5iq",
  "key6": "NCp24EidUXBkqfXAtKcKqgn8epGjJr8AKj4SBkNcHtrwKf8nMjfufzXgNLqD4etarqhMjpYVffHsJdnq4Do11vc",
  "key7": "2ZfCTbKBAirykq4CdpyWL4LfzSFZNAD65N7Tm1Stqkehpxqaw9JutaBnaDWLAZwJRB4pHLurfrdqYLLWA35sUkhk",
  "key8": "2LQE8sycgH2cFjskdmZMS3hZ9Pci7qZC67Fb9hmMYqcikxKfhmYYnboCBuaNWmnxA1icq1M7EDME3YDRnFx6JyvE",
  "key9": "3hfFwX6us67S6BQBY2uKgBaZrbCgbdmqCRygARuwafEPNH4wgx2NuxS8hyPoUvxrc94gF7aug7oosS8yTR5rSF77",
  "key10": "4Z9vFBCoQ2NbsREYuunhysL6Ez9Xq2vEs5PKSDE2A91s4WELWsRfWTjBBL7pnXa29p7hbKm1x6XTbt9Q9gtT8swM",
  "key11": "3i5iCv2dzbMZsRJsCTUpz35VWJyYGJZzttLsyWW9HoK6Emfu23dPERzMGcnZM3HjyxTB9GwXDHfXBRDdhy3WAPme",
  "key12": "4MWHxhs74EKTS1PEhe6sjcMpDk1yzQCCf3Tha4kTqXybhnr62GF8NxQgJuWM16PVyXrnpQVU4eMguisqf6yE9B7N",
  "key13": "2v4Ttp1G3AQ4bCSu51axcUnH64u17DyrSesxZT4T2HWvkt23CrqTpefegCvS33bk3xqf4agkucQqb4FmxERMqPdu",
  "key14": "JLAZQcAfKtp3PUWppwXy8VRbfcC7KPjnPDQ8KoX2xVYwKjZfQhuc7Rd5MiqMHz7ikz4M6Up9YhZZG2F7NbfFZ8V",
  "key15": "2opFGH3wf1q4JweRJHpSn4bB5vcTmSa5VpfzP9aKFe6YbCeAQ8g64nb8DWJcADHPGbvjA1NUohawj7r2iJdvkiAj",
  "key16": "56KuVB6BVGeRTcQC9Remr5ramz6ZQLawf6cc9LYsqeFBWJDuNSxrsAmNYsNhSXCaBYEDd8frvnD1FqF9tUTvhmoH",
  "key17": "3be3kWE3AsF9gwQXGugqoLKeXTvN77ne4r3JCs13cVwkF94kCKhXLe4Xrfxdo8tbmBVk4xHE5EjtfpzDmmgxTav4",
  "key18": "2L5uPqUV6F4FUrqS5rqzPvyEJaCM3mbGrhm5ocWuPhNrsdQHBBNCkjDUfwYiMmVxGxAzS19j4fRbdW15fb3baTuE",
  "key19": "4xNg6mj17cztuN3T2UhuHNmouxsCrF3Zv9Hp1LvrdowmsYoqJZ7LDrkqvuqJmJQL1FJysgS1dkLihhhPEXRXJ749",
  "key20": "V2U4hAKFeM1iCJHymsxatEmqBYWiAPkiKRSzsAsXrDvVRTg7Fc5MLkVzPueG9JVnzq5TcMKqTYL392RCYVYGbeF",
  "key21": "EqBTQASyaCe6ywyyKaJmRkojjMHx69QhmFafHfc1yPmnMSAUtHZBeHzLZnT512vv7uqCMxeiazbwz3CVgrw3brx",
  "key22": "2Wk8VnFFsD5TXoaq4YM1myXFgYJn8DTqX13qLvvM88RVCzii7KxSr7WxkycXqt5aFYrhaBEFUsJb5KsXmhwtsZDz",
  "key23": "Z8SyNKPoLhZyj7ozzQczqBVCUDkpzpK6qrkz3rMtSCVBjLa1TtAL8oqLcne6hFxSHPvnDjLhGSHiZSQsHJJbV1F",
  "key24": "2nmdj8GT57eXL2FAvJtzsfKiHvDEcFFg9bET87GGnkDqcAxCDdJ2oaX51s819qyGCgZTCMf1GjQ53sK2NfYigcmo",
  "key25": "3mfd9mBxBzrmffF3eqAxsW3kw6VNrG3y9nPt1zKLWuctypqnpJmNjiJ9UwZfiyUbCmCYkgKWYrZEG2mtJJpZ1M1w",
  "key26": "43eXNrfjgbAwkoa364jwbLwU5ufVrAXhcesvPw9Er4nAncMRhPE4VWV1jNZgHzg7eyon782ER71z8bxDh5fMixKU",
  "key27": "4cebbjNWhbw8ZsLy47b7qZmcSFxfPBJFghfnKxaryTqHL1wJ8nnFpohyDML33hge8dNdyGaSq919JNYXZnxThUPC",
  "key28": "5DDXyDBWcLfPEqqNy14Ma9CYcodJ4LEuirJu76bcuUsCnYzhs3QeRms1CdhVSnCtJUmb25179PY6fj6ptHtKNRSn",
  "key29": "3daANVhBjSADPEfL41kvLYTR2nr2pwhzjfSYpgBCjqFZTQbegjjgbvqop77vh7tLHexmyTQM4Nteja1tcouHQQyf",
  "key30": "53sWb8y9JiUcemzvoz3CYVjf1CrnZxRbK5yi7gq7eiTdBvLMffVhMFWzVW3YbdDA31epQEFHcYhRnzpVkGRj2kFp",
  "key31": "NuHkSLyyM6mn5sM4hj8rHuSkvr2zFRhtXMKBg2gwSAACoDEX7HxPPL436qPgTZnzEYMrJgDzq5uhLDQfFbchBzh",
  "key32": "FxrrFEE5KP7HTxQAhL3Do2dzLH6QeseaK2tVYppoo5kfSa8MGUm6DxgnwBR39Sv3ADQfMQV1G2D7MLVRrpuutPu",
  "key33": "5aZGpG79UGMMFh9hQnUsBdWVZpddRD738EpsaVGxVt4bkEwq2YVDJCD3DfJcmuv1douFrBxq4ER2BWVyc2qYmLuj",
  "key34": "2Hz1rtdT1a5CS5SwWrswHKeQxNyHTi52bxqBzBZ1Ja7uPAYax748Qi4XRF6tzcCKQLcCMaoBGS1g1sr7te97Aijt",
  "key35": "ZTnf2j8L8axEvV6MV6frW6HWhwuZCcEHEPiL8W8u7nYLoDEmVzqjiDR8mFoMykZRWtNLaGqWKQihaAdsmRZgCMZ",
  "key36": "2mB28N41UaEHJFiSwx2MBM6SYjMVmiRdicwKHncfHBy2vfG5uZYzGjS2KNxUZ9yk3fXNMuc33Jcyv8aHFKnmxrVK",
  "key37": "FiFDYeXUPJB4GPSxNhE1ydorDcDhX8z5zLF68rWatQtvoZ3jpNcea8swWttwN2QKtAcKXjLc96K8R7xiQKGCkYC",
  "key38": "27veA45oKMzRFydtmX3tiMKMTJZn7N878TQKLxjLLNtX9jbkysajuszsKwn34P6nPWVPYsco6AQx9axK5u7wjxhy",
  "key39": "46Q8jiQgf9M3ngbuNesyZjm4k8hxTwsz6UQkznDMDkn3HCdVC9tx91YfLz9QTmw6we3UiE3LkUwfwVfcuaaHAgFg"
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
