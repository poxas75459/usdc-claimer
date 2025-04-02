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
    "4mQ9j9NAf8ekWE1mA1ZjH2ngxmJDtEykTVtyKUZrmjgVHgwNsU5C1R3fSefgJbRFbtH9Jm4MzQ5r2ZDLDjjHghSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EeL1qk5mFR2CeYyYSjUeHgXUk39gLbZXjV7FGoCxMNRGXNdw5pX847wkkJq8eoBTzV37GfztPgWdvfMQ2GGuCWQ",
  "key1": "cVTCvmpGE4UeQddcTiXvhRG4LZLtfjAqjLTJpD1vr7C6jnak4YVLpcMiMYaDgNCcoZYLP9mkmDr2FpRBWJQsz7F",
  "key2": "3c1CFzCaHjrgcyA7bcMHmdQCp4wZrYb7B5tgPdwDodzGpfaHTT36tFS28EiKN2iTm841Pg7WEc2Z5b3h9PtzYBTh",
  "key3": "3PpvXekooVwBCeN4v7RkP3YoDg1vr5a73H7275meCoRZBH2GFfbEV91DhNXqhRYEiW6ErvrZBoDyhBskBVwqMD7o",
  "key4": "5zmhmraJEdRt4wu4itvnd5xQyfEP1crhaxit7qghbwv1DCpf5NgGxQSUGcawayQ3roMYpJ21ZxkKbPCRgpEBQZgk",
  "key5": "5vnTr8qjxeF2uPbLiUMUgVunG1X6vPF3ycjoMuTLaTAUUpYTGpQd3aDEV6dT5b7sj5GMVinutbG6sPddwfPv5tha",
  "key6": "5udbJn4kDHnGyqBZr39VuhqbhXwNWQfuFWt7Wsgmje1QwEcFUQ1Zg3jAZJ3YpvLxmZt23awbotS2YKDBh5oHKJ5j",
  "key7": "JEzyzkM2fbCCxpty5HvuV1NYE1Rr8VV6HxevhxBxDCZzCGSPproENq8oCWKSA9hUZzBSCnFErVsgrMndRmbehAG",
  "key8": "31G39kMKEy3xXVpbNJCVu6MaTfA7qUf3tLi6hpEBttqHYwWyDuopLhyeeYvPF99Ljsgb4G89fDrynX3rMkh2bMMF",
  "key9": "4btG3Pe8WoWE7egwAQTT87umwSL2Jr6eCFgf7rvJaue12yQtBL2LJhjcn7H5FgSAowokYW4Qh4HrTBiaaVUzAHbt",
  "key10": "4Zop5xQ4w7wu6tBQUFtB6fLafty5TEt6PGBTeqYPTBRH6rFzAkL61nyUCboenevxDPKtsP7zUC49wWfQ48KfN1C5",
  "key11": "3YZhMUziphtyJS8Zb4Dx3V4QtWEby5SqWDyJtrfCevwDthsnX1Crh33bzG6nuAhfhgAfKTBCT8JkcVd9zEws93Fc",
  "key12": "4AutNzEEwLNpxzenWjLW555njprLB3gXXTao867pEM6XJE1BgaKHm1SHj3myr3YRjMxwj3oqvPNqYJ8HgvgjVHBG",
  "key13": "2dRSjHtdFXP8dVdjZiz7kWDPaKTLxMCbBtA9xQPz8VexQU1xyLvD7ohPxAsdQ7bjtx7TdFTqFTw3DfjNUB6mgz71",
  "key14": "21eMzE22eU41q2J9k8c3tWGTPA2KEJHN2XfYwc4rooXmmSM47p4AD6RLaHpZEzSGtvwvyutEUhKJFzYGcgHZFXx4",
  "key15": "RAwrq2BMc2jLXVhyRTHFp9ouwsPzyqsego6K7spfG7hs6XHLqH9kEeyEG7V5YPwDJsBKhn4yPUQkN8n8Xyo4AKD",
  "key16": "ZxdBHd2Z76GuWQkYUchhih7ETXGKtWiipU3g2LCqeF2FAEy6w7ATU3LpUCPRgaeDmm7o1tbAZ6utRFLCQtxyKBw",
  "key17": "3HvuddEWTZob2UmmFsjxUazBgUKwAL1uU3284csaxYtBGU652bRXp6BJ2NjAYnPkz9YYkk5z7kY6GYeuQddzyzS9",
  "key18": "zdq1SYdfgtyLSHMqJ6CQgrZCrWP7g9hvXQcNpcA24Sb9B486uimEReypn7kDBuZPAa9ZLSdfxf4nqDPFJnPBtJ8",
  "key19": "2i2wBtxLzc2q1QDA3QQmxJncXKDsmKMuKbja5LNp7C9cYapJZ5t5ACx7a2jmiEvByo6VjxUDqBXDBApZdo73KgXL",
  "key20": "5MAFNLL5qthCuDzpjHKUAb7qyKXFsQ83JjK36ufQSVPwjLPmXGKtNjLiQASrxJjGZNUFvykJ2DFAt12A9LJqrTDV",
  "key21": "2a2McPppEQUZUtwJ4kxkNVd1FDKcxTbEHKtaRhZA5PJ4Fk72XS3MSLYLxd73hHZumXSmvr3ZRfGNiAP5uySxHnyw",
  "key22": "DLbRpdvYk9Qavcgar5EC9WovuGJU4VW8QUhDZZZqW14FE84Z3jmjjMZH543GDLVWowzwvmqMGyhUNY8vaMn8HFQ",
  "key23": "33sMsKBL3kHqhvepM9ukPMPRnVMMDWyACj3GhjnrG1E2dETVonf2UCEyuXas7tdvT7H1REZUsg8SR3Y6EW5EBiG4",
  "key24": "5YXkLqaYFLQnq94grvCEwwxZpLZvC858U63omZ1wxNwxSTg4otb3NNoU5FgAvyFAPCXCDA4zHZFdZqmtafc8GfPb",
  "key25": "BSdvVzZXjNbSwuYsHmU2p2FRfQR7FkkZm7z1gkxyXB9d8imQCpthag5n8eMD43nDvUGK8YkFXdeK2CMBRqYykRu",
  "key26": "4wBtUHRu45Na64EjgtUX4aCcqXhZWf2hi9fU3QQPYvp84UYAZ9z7GwsEwXr7uNBNbLDoqe9ycNWjKTkFHXLu2b4d",
  "key27": "54ZPqQ5VCaPfRdGntVKGYbm2s6oL4u3YzoCYyYCBPmTLEjD8NDETNzHUQbUuyGa6WTjijB1K1HLDWeTBj7q5Ti5N",
  "key28": "3pybAXyW4EoV9xnQZYUbfNWs3AVjbqbp362hPTAwPD5UMKJ3zWLFMUVPL5L3wm1oqCc7oy5HvXAEV9hQdbSjAXFx",
  "key29": "3MYZNCT81xptV95evWWJsiiBi8x5dEvE362PBxcsYU6puzH52274kXTPnz464zYoZzj4rk3aTsHbB1CsxXFcNyhd",
  "key30": "4VZAKEUue4ceA8xH4zX5AR8w3mhuNNV8gaoDMy6nqjPhH28V17PAZKVXdUJGEZ6YPKWHnsY6hNRh5iebGwZJpDK5",
  "key31": "2uXc5jSGKDm5QQKHy7mhyris9rgk71eshqfpkxU4VauxUpoadZR3b7A8zpGRQxQxGcXjVt6yuShEewmRuMokqT1x",
  "key32": "58sJ7ZDyhhy29TVgx9e8b8VqyhPYAuorsemTMx9ZhKEHYnbxRUoudwt1As8wRrAkykGmYyzubqd1ekYig72uzeTg",
  "key33": "h4nfVmEbnR8JV4uUb64BU6mwts5cSKCXykHibVgaMZD6dNjnxQvkVHVr8MmxKqVPi8Lb1446uj7hnPephmJtHaL",
  "key34": "4otJvoTBb54B1kYnonFM74JLsV6FjinunVgdrftg28C6eMr1eT43v4xAQ3VvGSqAv5751UhUFrottabZCamnBqnu",
  "key35": "vRhpn9A2AYorBXUYMJk5KqzXEycAFSRyNshoYT23arZV8HehKwBMdDo7MqP7G63bDzsig7H8RnbdiRfdLB3barW",
  "key36": "4XnFBHUCs7okg9GBa45HjtgxHvbqdaHubNQa5vWMjqcyyHa53xs1YQX5TLuW1NvyaS11ehynJ64g6b7avV4ybsL5",
  "key37": "2wtG4qZ7FrhuJtBqY77X942RnUfVLVxNFHzBGuowH2exkBWzCJH41kr9AmyhAVhU77HU4vu1EsKQM9FBHaGNRMZ9",
  "key38": "4w7cUXpds7KiPGi2XBnXTRYPeUGHBp4poFbLdifq27EUfTcJQGBpiKS3sJk45Xofe9Nq9E2nCpqMg61tBjUWmkZU",
  "key39": "31M96Wb9bk5Bqb5jkqYWDw5AGiVTCstSKdP1k8wxSaX4MHwbNzpZxJYcFtMk2ZM8zZvR4Q9X4mWoqtnYpHHmCDoz",
  "key40": "27MqegYvnv5RGRAVJMh3ZssgYo89jE9HEqwuMfGPXBhSeM77NP3BUULtkDHV2gWiWeZkNjRh82bigdUDQzv2HMRB"
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
