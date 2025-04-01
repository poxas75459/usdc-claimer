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
    "m859cxfK7feEztDx7zNBPVB3EUtJq8zNZ7FCAQaTKFh6iVyqaDv9GCn6uhWB8X5wRomc3TAc4bDoKsopxCwqtwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPoRmN38pj8Bm5mSwCMcSqMZrYrJtET8B8CER9odtUts4CYMEgMoE4k7EvRGk7YfnHSknpaUDD5PutEu4XJB5R",
  "key1": "222wv1UQLcyznCqvycDgiUmoXRJ7EM56dT4ozBZj2hCKZfuP5mDJgGa4NFdkdFrjqEUoi2pMgcUjNBx6nvw8eEtF",
  "key2": "5mJC1ZgK4JWoLJUYD1gufDruP2oKkuUser8SdXij6W7sTD7QsBwEZtZsqPEKgv1Sn2CMpAsQaHNnswyFQuTXqAwL",
  "key3": "3bcNMcmjRAXgvcJCbeEKqAj1ggMP9BFfDvEJKxW3VyZojnWYBfr7xhKiCRjuHKiAMtTrQiZDCEuswMghdQ7rQ9Gx",
  "key4": "5dM7iyPHR5HJaF1w2qPqQHFPxbPNRWgzZAtWogY28pHnyxo4uDmPHynPcJ7N2LCYtfJj9Fq9C4PwMnhecEoj95hQ",
  "key5": "35txrk5WcEevBZxquaSYnrNiP6eWZUkGqmRsDGbSp3X88ExT3J7fceuoy5jMvWYdBpg3kp1TUHmDKt7cNtsKvbxY",
  "key6": "4Pet6kJL2PzcVJYdgtcCPic4sY482JZLNNLXr7qhhSeZUtZkUKMKedJeWR96A2sVUBq9CWFKLUyciK5TbH3YteTc",
  "key7": "GS31JixtK447rhUC85qubzsjv4BfNWY8jjT3JrC3PQwoytqAKiSDFFvjGK9ZCNNo3C7yxMP1F6nifb9iytWsVPJ",
  "key8": "3Ara9wH5onvRBqS6mYdseZ5Wa6yxmpiCBrd8KBqEBWq9DN4Zhvd7PqV2o81PUbDHj2waK7zTkncjAMx2NkeCTNB5",
  "key9": "5xxc2MJfDPpHUDkFo5Dr6ks9UgX7djM6zV3FzSGqx951fvp7MbAnsp9HWbN7PQH6uKHJxstXmavm8qDg3YarUo9Q",
  "key10": "3c219jv4QGCC72UajLQbYRbnSxdSuGzmDiiY5igERVTaxWHg8cHJujFBXvGRcKgaMefenRgfeXqzu2mbCsRoJJmf",
  "key11": "4N4daRWUM6g3qjbtEUpyb2tqjUQZuPTocGQgYjVTamJ2RijqmvpZ75GqX2dRWLoRhHaeiuecxpS4p1aEadpcbuBP",
  "key12": "2GhBwcesxFvkC4HciVo61bbnLQh5fdw2niZjV8yiGHVdRvzZNr81WgaYgfMQSutuxfDMUVMbW3w1s3iepYHs4oEX",
  "key13": "3ZKfNSPhVYgXevcvqnuguburmgBegUGvoWSLVN3PbHAPNYXfAi6QdarKBTEYMC8D8uXCWBEH7QLqrUUkGW1hAJVN",
  "key14": "21iiqSBuvK9kcYWofkzesUnRxVwUQgizdT81EzTFkoNXoxxREfF1gsqJ6YUjsnf65QfuYbUHXRMUZkMiV3Ex2HDW",
  "key15": "5DcTWcKJEJ4aca5RXLNT2rzJX6e4VBJ6HkWX7Aj7pJFyZTWCq3G4Fi3fb1HNXhZzBvbP19WhrugkSxMexhy8tfHq",
  "key16": "3J7m4BmZkWqwxU8tX5wMuh3rS2kGHjYmbPWdKPHaZ8Ghjxx4gaziMAJcRbW4Siz5Y7QgTCfGtA8aTCbM9gbm9SXi",
  "key17": "5zpt3jSB5yJFx2SrJLa2ohw8erdVLwLuiCRTJLGdU5zSFpuTzY9CKF3BeLvYEwd474NnoauvfvDbJXzbEscU5ts9",
  "key18": "4pFAmtuA3HmV8RbGyC24gshWhNE4tb7gKSB1NcxoASsyxsfcc6Zvft6oiMnAHKeNKbqnA2QuWi46kFUSsDK1ZVQG",
  "key19": "hxe5WSMxrUWuCu5yDPucGsUQW78mpyeGJNHBo8UnTZw7xmmTPR1dLMZ73VoiACaZEKjrSKAE8CYmaRo9mKkDece",
  "key20": "51rdq59hVcL53C7pHwZCqBJAya9t2fhF6KgTZSAQKwdW6CsMjaheSPbUDDfP4gPv92x1TkL2A4JU1B6sYGCFngpC",
  "key21": "5z354zvV9ayCU7H9eHZWPh9LJj7R8FymJ2qTU1CpC51U1BCgY2UsWymdTGCSKnGkwrN64DegdVQsAUHZyJ2APnkU",
  "key22": "238FVMEWAkbehrUpWf4yEajaY9SksZQHEqz7dPQd3HNu1gSDvTGmYTbJEEHwhBNkbdE1NHddPLY24XtUGPq8J1JW",
  "key23": "5QHsD6xLUas6UHvi8QtpmaFeJ9mXRi7iL4tRLMRVqP7b5Dj5asAGX4VSNfrGD9DMZ2vq4WSHywKwBASx4zKKndpn",
  "key24": "3SDKHAaiXXEhdvUzbmiv4FiQYfVFXtaJh4bpR9VsVdgLkFtuBkoApQD7wgtY1HZXfg3AeemDjSE7TSTEzjx9N2n7",
  "key25": "5pJFP1BsMhCQJM8kCfBfypmbESwa2BcdBC5RFVoh1KkV55UzCM13PJudmtCJonooKNZv2k8KQkYkqJiHxK8RvMwx",
  "key26": "58YXJdxFPmTyd13gMPZVmVrgDQiYSqVSo7cHsc3Pc8bh6pxiZt1BTEc5ZaNeiJgduqqf1TpuaS7ufip7xzZRG3o7",
  "key27": "Lc61HJhmVtjBnHpUQYa8v7AViUL268S11Km2oK8XMS9g4BQkCJnhd3ETLkaPYSNkurrJLxFbCNUdk7yhzKAoHdq",
  "key28": "2sqWoBES55EqtenoWLE3VHZLarQsuHEaL64UTQ66jkMBPZzZkK4sDey8Wooy5j1S7qGECbT4avV3abJoR3T5a5s3",
  "key29": "2JNTeRrHgMmmAsXvNCxNvEg283ZJpnnPwj7JqqYT8Zbhojd73GhXrYmf3QPwTX7W8MtoSCektKB4hgrek5v45j7i"
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
