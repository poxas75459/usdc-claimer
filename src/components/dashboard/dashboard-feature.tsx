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
    "37WLLFoJWxHgxRYFXvSWJKBkgZNXXLFQipXfZqqPTi9CTbBszB1CjdNi5UCk7HP3xU6kz9Xua4EVzN669s4yamX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwocE2itjUNSPEwWh4pEaH36ZumKbtjxE6Ygany65KvPTFXBZiCdATu44VWhE3CYcrzPei6cKpuLV9L8FHjd5g3",
  "key1": "2ijxbfTiyNv6kJTiVSdMtT3bgLJnLNmXcouhqyZnZHZoyY7erk2sadT39NfbCXy7Mmz9DnaoU4TewxPUAUNWYRCc",
  "key2": "42vrJbxZsGCAS7DrGrydfGXyjayB4Qg9wiWSUAat2RDVW9VZyuofDpp8kQY97LTviUUQ8V8CSGob3yQqULDd5enL",
  "key3": "BBjQThcvUbYpEcCZnLY8PXRvQfzaoHZtEHTtSCHtRiYJUfU6hvX1gX9Yq92T68i7y1ZP8qmnfGLfdGDvf2ttqKz",
  "key4": "3dgqQXgk5A2vTpaMJs6FVnpJZEe1KwR6Da8shTb4cmasyChgrk1m7k1NngS9hh6Qe74Gj2SK1RZLoW4XC6f5NrKn",
  "key5": "X8UteeqaSeKsRimiG1jhLWmK1xiydXpWGpmB1E2wjrbkuBmCpQ7jXA4vnKQvcZD6vf96Ldx5s9HzGZHkCnM1d8T",
  "key6": "2dHHEHB1K4U9TqJDGs1gcmo9YeYcX5b1VQ8DxZhjwHKfDELLxi4B4ZSJhakAfPwBymRkmuZQYazg7Tvq7x2WVsVn",
  "key7": "5EJ6S62ttUe1zfGfYKhnmYwyPzm1wdZowAzjPK4bifHsmx8xR9fG3YRJ6MXnAEymsdxgfDG8Qvgt7buzgevpRJMU",
  "key8": "25bdfinsYXQYBPqqb7DkiyjR6fMzpPyVfXnHFC1ud9rfz69NKda4aXUk9pyqibEdTL41yJ3Np4uRTZRqqjBtFd5f",
  "key9": "4BSFyZ2aDLJT92JsKw9NiQz8rGkPqBjCisWW7jQX45CP7115B7srBNzS7GPCcLCuT59fGQ7E4RS54epfXKDXjaya",
  "key10": "2ervjkJtCXcgHVs7hgBbfkrFUn5xd816gtaheaopZMiJWYprBG1QCPQkUKzMfRFKzqL8LdiazFejkuKXCAuf4YA8",
  "key11": "5DQSNLenN2rDkVvFeY6tmbgWJXhUa2qPX7dVvtQqyHXPRhnZ8hexTnrmUaV6B7BdtAjBbsqTVD96ZHWCuHSvjDcj",
  "key12": "51iMBGqvK6vreN4xYFAC8N13rWLeTU7cbwNJ3BQdUVa8ZKE7VfQp433e3fhG3XC6B4dseQsQ4La6FrDP5ee6kYdC",
  "key13": "659JBszNMNeCjerLBN6B8GEdGuZJpTw47YZzbt3QM6f5tPZUHZYME5N2p4tA7VMz7AjaPacSXmrRwHY32hGN3mum",
  "key14": "HSvxGWNeK1CFNNQ6ivb5Yqynzhnd6TusqZusZ8jDDHLvTmPmMn9LWjZYSRKHcg9QjB46aprQzCBgHTGkBWLPvQU",
  "key15": "3sJmkKAKGnzApzEqgXk188NXV255qcA8Pm14sde3eu4hF29Kmbw7oxyZGyVDmNfw3WdRvyA9hQDu7K9BWU6Bfem9",
  "key16": "Ps2o53NSZVp9EFTwVdxxUxLDR6X1PBeQF7ySjm2qn7uZMp827Cfekd6EAghWSKFvofE5imHo8pUkoM3wPSLFKHT",
  "key17": "5MAWCnZGFmgYarZJ7vKPueo7EvmuEWvhSaJqeRNzt6CRcN2c8QyDQn5xVsZH717LrdTteGtAck9nt1N1dqfzDypg",
  "key18": "CbE5bZ4tMn13pP27jxNVxQVwmjnrnVVi4RKxHPdycH8xXrqBb51TUiELUrhrZNseZby2czxzb9TyZEMWWb7mKFS",
  "key19": "3Na9Dgj4XmmN64ybxiKLKZbwU5x1sP9NcJPcxYdTvGkCLW3ngmdzQZnRd5pknYM5pemn1AyrDmzXunohSfKCqnX2",
  "key20": "3NxJcmXL9Dw9WYKeSeVmZwgcWMDEGjZztBEoRrZEjFs5y1RtH4VEu5Fewy5RsLJTfidxoNwJw38XG92a8zyenLLc",
  "key21": "4YmbLyhvBFqRAFddK7CVgxBmNw8eDA9egkczjVQZ9QHPxxQQcF36rBKyyYhBAh4XH6n7BwgSVwFAx5Lsj1ShZRzm",
  "key22": "2Df5pGP4XxPQZu5gRqQagNNCm4m7QigXMmQf26oLWPcCsZxzdbiXrzZ4er3PpPprGNMCnQb1pzrjtFJXk7bG2GB3",
  "key23": "fEbhWnwvGdrdaHipQMNAMLvaXJ5Js14ty9k1zWEbBCfTxpFM8GmQrsBz2rkQvZuvuT685uf2RH7Vksjew2yCv1i",
  "key24": "2vwsc4vuYZcsSdyGxV9mz8wmMHSuF1rne7X4Ks7MZrJh3db6s29U3fA45D8R6YzxHSSV9JPHhjMT9UgeL82Twm3G",
  "key25": "2Yq5W6czT9CWGoz8Fjz6hn3wchj7bGGpqayCaDygGLC83ajRYCyRPjD6xeYa4CF6Qr1QZjAk15uae8zkF7Z2k6hG",
  "key26": "37aza4wQBMzRMCUD3ZRboyyZKKxRbVKkpq6DDfLubjUUbVf8eNoTupbRtdnZhQH5JRcKyLZjHyChza5fgnEYRzDf",
  "key27": "m9ibQ4wQpWDLEgftN1pw4jfXA9wd8hKTmz9E4iKLoMcxoQ7cALTPSs3mZ1WRZGErSHZHPzbnwfsh9zCSPRvEved",
  "key28": "2iCVerxbZbhZ4BL3ssPZ4ivW7jLdKFHywY5v4wBGDVnJ41HPPyzcvBUwEG3Pe9Ck1Az6FMsp2KjKEFqXC6zYpioi",
  "key29": "3qzrzn5AWXx93Ba1F5KqeM5imJHfB8gqcobUahjXXqxHNmVWwUJPxwSnR693Pxnd9ygkGrmu8hkTwTynNr93gum1",
  "key30": "2iAXPwH2FQ1CsjZsAjre9ZBsjzMy1p1uX9jQfdfko1R9DFHPxbdGSGtShRUdq6ftQf1bdJW1ynuakZfxnfd74EnW",
  "key31": "B2Z2Zu9n1q6SRRVmh7xPfUEi3qWuScen947jJcNjdsUgswKooat5X2ECE6n1K3ez7TuZ3c8SFx4gqAGGReD7Yty",
  "key32": "29q4nN8a4PG2j22dMAAPM4D5g1ju6TxAu45sCD2dZmMhBmW2qXcwMLzLc85gQpJWYoVM4FpjYmyxFQqmw9eajhRd",
  "key33": "3ozEtxC2VXRFhzYAWFvYaYvx3qZLhnt4LjZiWvaqm335rTMAkV1U2tb3qJFci6qnAvXvkWVttEmcAc6H1oY6PJ2Q",
  "key34": "4wiWH7AFn8sLeACXUxHUCmkZ6G2A2r4RyM8KctkJ8rnqsbmPHZQBdyeutFoeX7akSVR2cquERbgESg8TM43ikrAJ",
  "key35": "37X5BQaME4Qrjjqy6ZzYvzvafz8ZLveAykxoU1quYLt1pJgmTxnpxvREJFADGe1X55VVMC2jUWhBh5yhsUhUMsTc",
  "key36": "2WWtGCmvrrf32jzsTeK71MQ7Gqyjkwb361VNLRhibVuzNzpxGWM4At7pEzp1FztGCtJ9Kzn1Ay8dP6UqFExU1T9z"
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
