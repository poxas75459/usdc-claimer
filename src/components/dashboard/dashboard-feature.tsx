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
    "3y2bnsEX79Pn1GzBVpmSwRnTfGsMW2kKtMcZk3gCkknEHwUw2AKAfMzfwPepcqLbPna6AWESu1Lt88QbeUwC6jF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCBu9Hj4AvQx4K9gsvHRLs9i9i4fQ7FtGB4MyvaLWnKryYaCVzZ7QrFu5L54SVR3X1SBfrRzR7SE4TpbSw4PxdE",
  "key1": "2sZXVMLPxMaQ88sjE3zBNXQY8qxv8qy8ktWGkNTNRpSgTocvdok9wcfdZjo41FBiFXgszsqjZTn5yQguv1KuQzsR",
  "key2": "53hRpDRQtmfnkU9tbKgAtpVWtLEDDCf5MRA4fSw6YDDkpy92HEFvDeEfmuFf6FHBHjYJ9z3wAWixMdg3fzvdfYc6",
  "key3": "5dSAWL3kN7kgGVXyaYTvM8V7Usb2dJEWDqF8M3vNBrjhwarYUwcWGnWYAgiAwR4vPvTEHJ7cGGtj8bFkezZqErws",
  "key4": "53pToQiCVynKdEg4Red1RuBEMvmGuExbp8eW1DjXtRbkJgNfbnQ1z8ArTWhY4sDG3FW8gQD9rqMLc2zJQQo98s2a",
  "key5": "4c5kom3R3zHkqC6UKGWyEKoDNxty8JBFtthRU7mWMBdQdoAdKmw2FtgPaoN51ahxtor8em4KH931VFj7J65H7a45",
  "key6": "HJWtD6WTrj89xs1L97ViauS1JL7ZSzgFAbs8fM5LrrWwdv2tzpHmbZusvDqvXRsJXc3uxts75zKzYQVA67LrKm4",
  "key7": "4c5aiAiSgCjYfVy2e8hV6T6nogKPwhDcXcrZhdzCK8tQmAPUqusKvKgAcKp3b5SrZgQ6ZJF2se6YHYveRpA87YSe",
  "key8": "3UgLvmX1iZsu2jNG7BGV3JVkeVoWff4r5PBMWMzXBs6fnQ2VfJudHrczfCeR6F9oWtphd5SdC8r8Hf2AhYjTv3gX",
  "key9": "5CcKzimvyERRJn97xV7XdWMfZwz4kKEEdY9eQ7nCvPoQ2Q2AQgpHSwdBuX2AUkiEaE9BwYdCdkmnWiDxtqFHuKSA",
  "key10": "59hZbkrARFgkBjivC5gxVbVnSzU3z7bkboFD5hUgDR2gur9vm2hNXu5764XDvTySi37bcA7x8yGSDKnNJNA5cKXm",
  "key11": "2J8mz4fkw5qLc2J4vqiKDMwp3YCyeRrTYvMzr7vQi8HJyByXdKFCJxr2CAm2gvZ9o5TTHbvUJczoGyvmimPpwD6z",
  "key12": "4JtSovpsUeptAzn9kVagiADSetGDFTZYqPzN6biF9PacQhgsPsbkkAw3rZNAkWeKVgMQHbj821nig8j6Yfbz5zoQ",
  "key13": "2C1k8RJ4zTthjGJgbxX9gLNGVMyW2PyPm2xVEQq7TKBeXzv5TbNm2QEUQ3ANg6zRLooQaL2AZGxtHFdEBjGipoAa",
  "key14": "4xvHjo78meuD8rVjPt2U71orZ48iFAUdSddhoXjnEdyikUWeJxosNjzLa2WE1jRV7X5j9NxUgqtbsthHddbfxY6H",
  "key15": "4wZ2h71SKTfLvenGheTDxvYHTq1tayXprzxDH3B97rpT2rZWVYUPBoAebQbPTS95Q19XiwDzvj7RFJLhXkv7JRod",
  "key16": "22kDkfXUKLXAgo5rf5eqiMKKW9bDKhFUCri12885X1P686oyiTG5ALnrytDJVsCrDmgwhBKtofaEuPyzFbb5fN89",
  "key17": "2JS5aQkHVMKPcJFfX8dyNqdF6ENxut5ZnmMJpQqk3xL2JNcJhumLgQ6yCFAcLkRxvgJrXfRUNCweUi61CTNqefHz",
  "key18": "3BV8yrfLF7UCRwrQ1JfYVSUoymJfdrnMcNddCQ93yypQUBhkSMqcjnd77EdkdEZQvscEgHqivu1DFxjUXZ3JSi3o",
  "key19": "2uLXPvtxfnSHBMBPYAH8Z2VYasJKuMUXPr9FNNL1Gf1i3twjPZg4Th887s4fnQsUwqyX9dPKymE49Unbw66obvUk",
  "key20": "26poH7bqQMVymJ5vkKqBDeUUJYbvKRLAD12ujruEqHp2tLeRGqiSUobGtHjk1CPVZSp9FJPXgmh5xFjFLi1Xhj6A",
  "key21": "4cik4HFaZiPGT6DyZ3rNKzds9ugq1pqi9PbGymJ2f5DsuQs1mLYq3jxAYfaAAEam56xoDFa8ojKZrgxbWT1es4Rs",
  "key22": "3sGzhkt4cXTd5M6U3inSrBKD5RS8HHN5WYYV5tg9EZ3yHMNnHmkDPoLcK9rc8eS4M3cArfhiRAUdZxPy3KzKYaMs",
  "key23": "T5EcAPaCecnC85YvNg8DPhpgDKQY6misKtagkb67puRCFvonKgfM8GMsqdhGfooMPzKMiGxQkaVVEMnWtRwV5u4",
  "key24": "5bMrWsByutE573ouZFG7PZL7G1dZvVDDCvggxijfvkvEP6YuiY8k6AkmzB23x1BvEn3RsZqrD8CrMGkQauT1s4kS",
  "key25": "5sCCFrnAQLYwSzZr83EEkxEqXXsuiQ4m6oaVPcLYGMGQ2jkQUUJ2aMVWzDk82onqNZfdFEGeiq3mr62zNHhi8HV3",
  "key26": "3wTf3FP7H5EnDgcqrC4CzuUkfFaWeU2PDo7LamjuMvy6GzTiKCFJcaokACwn5cgnxFWWf2DK63q4BCoq16Yp9Koo",
  "key27": "5wybw3BXtvNbDVaT65dd7qfnTktJcpQQvQcF9iu4TetVZLpbrhyEa8fViW5xNPSGkocM2Nhgdy8QVT8R5edUGKMj",
  "key28": "mVtaT9DcBsjPGyw2XjGBpkndmH4Km19ypRhAdts9LSGFyREi6e87UQF6mTpvgj9ocB1VsVHMafCK8HASoWs5KmD",
  "key29": "2pBAQcFZiy1CoQPRgENzPggUFTXTDVgbseGL73XSXhyxYMN74YqAzndxpXHeSYJ7K3f9zG5P82awjjLEvwBDbAwQ",
  "key30": "KyvBckXNeM1T5HDXGPmkx9XJS9FXnVZoaKjMtCAfcUvhfFFVk4e1ecweysq5TEGmbx4Li3Ab4DYaUVtcTvJYgPN",
  "key31": "2rVWnP8VkX4FS2qJYWbJbEfA44ByYsm1yBVGdiWZQXsyA6MJ6ZhvLuRozApdh44fEExfewwDm73sAy9ruyqAFxjr",
  "key32": "5AidrJfQmdfao5i5r9ksWhoQ9REQ4NCjZ4CmroSKUtJ1aQNHmWK9raUc6obGrEhveNNiddm2Cz7yDiVBtW5k4Aqg",
  "key33": "2b5EoRBRKtK7fWk8xpbbKzQRLrSKe6BpzDJc1Lt1n9cm5HjQZ97HU5zGSqWmFpNWHxJuPBA8JLw3BXAh1uJMf7Fe",
  "key34": "2dnaKTsMnvJDHYDvxANH4MCoobinabNLdZmU8LiKoNEwjypHu9BftAGBQW53wTzse9ACUVekGuKC1LxKRVnjzCLg",
  "key35": "7DdtVYxc33GNF5dQpG9guVCMHiqLa2fC4tZ1x1Cv2fnSbTeJrTasXpR4ejh5sQu2ewLsM5eaiqz9AxWqMJCiXEL",
  "key36": "3dxrZ5CrMe7KpUWdBD5ELZVyV7DskxcZtagvymqisds8CLjqMJs6jwKf7XKLt76sp2NeELqNKKBvK79j4HgtTkbz",
  "key37": "59ZeL7t117yCcmiCXVimVXwEEN7Gjk2PPvPcCJcBBjwC1X1nFuPYthuBivSnGkDmbEHJfc9E5pBCB9wCeTjkQH3N"
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
