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
    "5sFLW74xB4bTs7wfcvGMx24w6rDfJcUYCt5vFtHCJPPSJc8nQ1AgwiUAFLq3iV3hkMEn17sNZrtd7Ay56SsXxXfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y5rzNq68SzLGeQ9UWEaDU9Kk4uL8hPNoseugk1WXhpkqheFqiPb5zZQvb1KxGusRSVx69KZmi66KHsHH2NVE7VK",
  "key1": "4TWHUoA19G18arwJn56MMPjCjbdyG23SAunFsCxWRnWsda7ZHgjULjWMR4VycVnJ4AKye1JiWdKCEFR5R7b5a44C",
  "key2": "67ewYHqrmH5kjVVjN9opYyiCu6puj9L5MPd28VEHv1TkdzBJNyrx67vQPaYG5Tcf4GE4CFQf1pqRLHAh3Gsp8dL",
  "key3": "4UJbMmUCeh8urRHQGK9MAk6rNzQMUfV1QRqBYZhprQR1VUsDoEysJSiCJSC5UMNccYJcMeTddm5S1otRfmEhAMZq",
  "key4": "44sMXDtkq1jjgnZjaG9Y751En4cMAxaDmqfVM1AQYPJmkwaiD3ZMp5Mw5L6iGBqYP4m7zdCBQoVKE32i3pWeuPxu",
  "key5": "4HcPwd2hjZzT46H44iHHuKASkspeKZ3Bci1dmEbbXpVRu2sVptF2ndMXgsErHj6qWpWrkxQYwwner6eaJzeZpF8X",
  "key6": "3DLhGQ7kNr3DZ5NiJWDtdQLVSfDW8mjTm6YWeWPJTHQzMf6gfSJcw8rv5NFhgXYW2muCxC79aVXs7WqpJKGxfc6a",
  "key7": "35zqHETuCGNr5MFjaMjYnH17qHq5YcE4MPJ3DAPkxU76mHFB7Rs4wFjztAU2fyCvG1QYKP8WcFGoDnp3A2XujLkq",
  "key8": "3xgPoqJcRQ72UEWxuSX1gfzBxHH6YLb7Lwa3X1s3tgLvZbbuUCPPjHTysQVTdjzBNpVkeA8M3KvrXy2cL4VLySQr",
  "key9": "3dzZWqaTGu1KDUFQAYuRngcEhUvhQbwYHwN5WNj4kgTRyM4cjHfBrMJ8kjiMxoRUPsRZQLAMSkS25dyWyMtw6kzs",
  "key10": "5o8W8Rnc6oWCD2xrwS7euXwxHsgbVSE4DHCtut7kW33jcVu7d48pp7ecvsLHfraATDL3iwVPpPUnhY58tSsAzbdA",
  "key11": "5jPuNdc9fXSTy5bNrtCUax1daJbT4RornAjo2cScR5LM55phogkvHEw7HzmTpdT9hzB6aCsNg46TxDfe29jjAZGU",
  "key12": "2THh6mpb7Gxvh8iBLpnxAJQr5aKwTrm6xUFQ7mJMVuNaRKA2Vm95EA94TRwAyU6yF4T3eGyn78VwFY3C2QsZVGt9",
  "key13": "21BYHmL66q9VEkxZhXGtteU1VtKkK6u1tCQhXhrLeJVx7ZDiBLJ1fPZBPA6bySK41LB7YNEstTp9oNKN647hujWj",
  "key14": "2mNXTSdRLi2u713hSXHL2wQrgU2BmFGqE52XxnD2pHwjwrVH5cyxnRYCrzrPKZXtr9xK7hsbXPz5K6W2jpyZnxay",
  "key15": "DytBxE96meyk46RBpw2F3HwNmvkP6FurAmECQAWUGUcz3uefnP9R5wScN4sEHrBY19roKuNxpz9j4kj6qvqtgyD",
  "key16": "2CjHrt35LDiPFJ122fzobrxmLbcez8XZXxLiPA7ABFeEcrStXzfrmNsBfSo6eVoYwpECBADak6mGod486fY4wpQR",
  "key17": "czdsybJL83sYn9kCERxuDNzLtHf2Wg98G4emN2vQE1BRErkGVXi6vK5p8YLk9gASQrKCnzzzwGE9Ku6SWL3XWGV",
  "key18": "4fCdmiw2FYfQTCB1gdneeeMgLiPWspJYtYJAMt3EdFHURfhJF4TTBMn6EaKCK4pdTMAKdUv7KzAhKkXBFuwLjnWD",
  "key19": "39GYf1qpgHFzajr9kZxCMVTmY1RdK3uEBg5otaLPuKs8GPaSyrbnjwuQX131x1cM5ydYPxAJpTYYTLUeY5VBCH8Y",
  "key20": "ozwU67cX67ebq5KsaDn9aixF2QfY24qEULX813mr5M6i81cpPbbovN85SVzgUfEJgNZjiquCjbJL19kmG2AdkVq",
  "key21": "4RzWkX2jRpFTRhfYh5oGs9YzY4xaBd3sazJ9K86CKK7rjRrz7DaYJdYAo8e6BAEQjGsYNcFyDw4WKnLMiPqQ6HRX",
  "key22": "4LRq4ZGztYTfpcqb9MqR1Rd83V55DNEMBu8Z3ok22KoAR371jSVhTLpKUEsN7MhPctvnToQ9QEz6RyQRCrhroRrd",
  "key23": "33D9iZL2vqtNLNsW6ZP4usXMTer2hwJkqNd4iyBpThVtusDHKGgJtbwhViJMjok1B7DbMD5roxxsRKDay2zTaWE",
  "key24": "362KFfswfRg4EMSFn1ZDdsA11FNo7sZJUj8wwHknPTad7q7FYPtkzvicYBhJFaSdxRz9M3iuZM3yWwarCot3p1Tn",
  "key25": "kYvVYLSpXDj66uqGJAB6EE2iT9ztsse8vues9ogDP1JDNHdBG5ahJhGkWVtmcvfQCe8Yeen2oYvxg318QkR4gNZ",
  "key26": "58Cn3jbUirvXmssLc6TQ8SKHYVaMeLpJYQJ6wmwznwhxC43LuZw8AS7nxyuJmQN7cjzoVCBPj4AgydA3svt58VWr",
  "key27": "3bnC9V2Spuctn8PzUVBpZyR341584dn7FrM9ETc1jYdmc31UL3eCwRU2QePVatJn9QnZD4sShrpWxQYDDNbh4RM4",
  "key28": "5FXD1KLbk5TgasLzKv3D9agC2BWEHC3Wcb1yCCEGGBCtGQXiSHW2f9uQ8YQcFrpiqps7JQZ2c1v1c9s7ypXp1ir1",
  "key29": "275zeCm87NwNMRkMFZbLjr9GRCj16YGe7ABas1ocANDSHp2Ey6nfxi3ZSadcDYYKQaB4swMU2AATgXjEhd6wc9gJ",
  "key30": "4qGGUdf1Cxmnd8L84s3a4KSi4E28HaEJasXTYWFVFd5nDj9D6A8cTY5EHs2ThN2X5JCxFZFtxEjTHrhAYYpwiFcK",
  "key31": "4UwF6s6stmZC4uA6KowN5jc5kbQRrFzEPftPfCvXEMkfVNFvY4Cscc43i5rv37tY4r8tMwpqti5GaswSX9aLTSFs",
  "key32": "5xBVRkDpF8f1KmH1g6zp516RCZuZzyKwVRX8Ub1KdLfMvQ3m2YVBuSZke7Jrkn9qJXvFhBm7Eju8AtVJcmotXqHX",
  "key33": "oZSeCBXiFcwHpLQRW8w9VLmj5JjgreLTmM423yBjqux1ypEWmEVxYwFvwAuekV9QSYAW2FP8BqXLdH1m7zJVoWy",
  "key34": "54PhbBEK8AForw2P9sBFWtib9SV566XzatXUCi3jWX1ShKqVgbTTxTwSNM1qZ3wqNnK5GdXJn1paQhbnbDQjxSc5",
  "key35": "2SM5o5RtrcfvhKr188n1HVuGdGaJHmYfzSbtfZHtgR8WeA8C73tH9p1gGkWUNycazC3yeWqvRqDQRL5GPni7xP3x",
  "key36": "Zj2CctcVpWZiSozoC3Vk9o4hGCEkVpFoFWw6FwT2E2z2xvdJBPKL6BYH8FiVS81ktVY13siquNezH9BJ7qRNjMj",
  "key37": "4gNviENTRxDRLwP4K4WNBeKmYMC4oh4bfcUAn2cMgGBRD5YpvMGV8JkkZLya8NvQfrnAqHLV65q3eM4p4dDDhW9v"
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
