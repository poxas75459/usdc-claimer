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
    "4Cq17yY8MD7fqnZMS8m2rN7oci6NHoZNsVsJ69bhR2ix8GKgqg1M8Hvk9og2UBEnHJHoauXWuuZFGQxZr8i6hpWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoYnzMNTviQESc26Ay5V7rPkhuLSZS5aq5FofL8v6JXYk2VNNFVVx9ciHNNzGaUSTZvLqYG9GJh53Jt7ddWM2T9",
  "key1": "MT8GAQiTYftHCCtJdixBKZRZSMC3agNwzRsa3bKq95r2HTRmAQpMBX3nEQyBVsPtpa3r3YfFtJDNKj7WySMDTd7",
  "key2": "2eYo5Q3kex857dWRDpAkQbxKrSL5V6y5RpUDUZuJ88MyXEtBASRoid5XMGC9wNLKtzsiUfi4ae2TKHTsy6NBu77F",
  "key3": "4HHVGAEsSB1mZxS6v65b5prWnT48aTyn4uJj2FkDqDbMyXbik7Uzwaw7Txkf2MnvxHbF6UZusoWsmjWnq8pHqP2D",
  "key4": "3DPWxLXb6LdCHXfQ9WiYkqV6hCuhFZn8RXQYXekLsL7feEGgHZoje1XkQ3YjNZYP55PQqurPGXqj9fPzdsn4W6oK",
  "key5": "5yjm3XMEMTZAin8cnXPi9oxyjgn8CSsUyoWQNyWcjgtoHRUcy38f6cxwEZMBNg3giWTWLaoMEYAAHoRHb1YW54AJ",
  "key6": "5r86n4Wpyap9h3vXGioURRjDVh7DmobEjTBZpu9QkkAZ2P8X5MseTCKHnaD89RhwfgQXwdSqduHRKNjHNynahKrn",
  "key7": "4nd4PPe6icv2i6U5PpSqD2VFSsLukM91DaKJbCmPAxNTY5uN8aLYuZ9yGnZob2nmATdSPDxrkBkcSdMxiWLcXJ9k",
  "key8": "5WpvV9jGHjoAW9mcoeZdqHBgPMLZSHizVUnNfF3jKJNZ47rUkiRGj2TC7sSVQGaqGzB5ES7kdHTqGWbpRSCTscWU",
  "key9": "6nuNnntf2dbUGqUJMDo9MaidX6REAyfdJcXrbNBNqbueuauhUU7AZ7jjouspduucvmPbC1ProHeHdRfbtUPZNn9",
  "key10": "3ZEmyDgPLrf6mHSsLnCpw7pemFG4fgSmwdyWgjUq1ZCqwg8rqmxLssymjztAcTBRnmtPRc5CFagpvVrAiHq72XnG",
  "key11": "26J5ykvKjd4QZjiZor7ZisBYrBqVj769nufUBG2MBmaMt3Ct6efiasKeovDo5AauDab2LHZ2FDNAe9YDgLfXp1vg",
  "key12": "2pGBUCGQFjjiauX41Wg9cKCJFuksx7rZMRa4qTyubK7zhPCvs6n1XCVaqQXttoymP4avwbXHUBfXgauBGNoAVKip",
  "key13": "3owQH8sb7CC8mHPk8K7HBnY9KFqDoPMn3NFbcXsPVisy3GRnoD44tSSeawpptLhuD9F39TdV7VjdzddhRQGVBzLV",
  "key14": "5vu5KAqp9henYTywdc2Ln5pMYFwSfMxRcLacYViRjBpWkALiwbRrk9YcoCW1GPQqY8Ngic8hqiHPgAmxqnYBvtxt",
  "key15": "cTGEeyR9ofE94uoAUC7qxBvL4WVj9v4miYZEpB49Bq5n3Q6KkfiRErETAUh1rpN6Dm51hj8nBsFUXGyCHfvJkVj",
  "key16": "4oNPLGcjLYYJCs7iibZHH6tca95EZf8yfEtqzyqZ8FJr6ajuTxqcwbkreRx5rxbFmBATYrNFkx4S6ezGqkybpqv8",
  "key17": "vg5TLjsHppi737YzUTZmH8goLLGgzFnNuotxA4XHLqgBWdJtXy3qu5JV7VkB77qAcXBSrkSnzuo2h56BE5xLMu9",
  "key18": "2JZPga5h33JokD5WBHcDbCSLCDErsC8sBpBcDxp9H4Ak7TNryyAJHmwzzGR8gxyiTYq5d32NzPkNebJELZDp6VGj",
  "key19": "og3KKRBGLUiugRHdMy2wCt3YC6827AxRddRUzE8ZBznPoUY1QYCkqV6F1TaUASTWEeBdvkVvWjLWvm1Hv48H4U5",
  "key20": "K1ZwQRZVLA83PL1UyWXz1kYLxG6hKcu1DvRRSvLRtwspLRL9h7cGYGTbVgcXerSLZNwhU7joxQkQ9etkYJJRMzL",
  "key21": "4PmPRnG5smgekhhBeg9PcJBgUT4KUmQDEhT9fijmMFGdtZLk5kbuHBLSXBCv3qrFCYMKZoKKcxDDX5AQTTfxtFsd",
  "key22": "5ya51i5gWPaGctToCiikKh5daB2UWHsp9zTHHo4tdesHncb9F9XNK67En4y6Apk9UaeUzCimNwyREY3igtdYAPcv",
  "key23": "3AoyB6U7MdiYABiJiQHXXkkGe83x8nd5bKPDKv18y1QPFC5AmjXRFxsibGwYCRNAzhErSMY5cgn2JXL6HgperqGd",
  "key24": "5myjUakPBGXRfnr2cS6NsQBRDXtkBN2a2Uj8QcX9U4w7CpsKHqM2pTm7y4fFFXx41av1eBauC7hi63QrHc3tvDeC",
  "key25": "2Ak6ZssiM2ZyYxAfQ9wEH8NmRZ9LvsuWJwAHgpQg9ZhEpGejDscVjptuEe6skUKH2fQp7ed6MRRSswDfKoxymjYt",
  "key26": "24TdozRp9K4tDvmePuwxbQrBGL1Q8sv27871CNDwutWCFErFX8oX2TEnACAwWEwV8mLGi1auuVrEtAGfehs9dWNT",
  "key27": "5WS9r6ZqYFNZN1EeBFibuPKaNhXq8i7qkpF68d7dd9Hn83jEnELhDLMg78yDRBhpE2QTSYsuxGXCJnYN5Aw8zu2G",
  "key28": "46MmBoZsK9jx1kuLBNttynvvekYg3k3R3UXagjGVdnfmVRWLTTs2TpJW4gHxni28Sq6HNWs9jqHuNx4wjrF5wghE",
  "key29": "5rXh6kDNk2zdEuB9cMhBWWXWGLiUNBDR2sBqWMy8JuEAJjiutBEyqNgJtLXfveQo49qpXgUDrGUMa3fxqfEUmSMJ",
  "key30": "23bA4J4npW5YKWwoBW1mGeMia6geCTCraR8v7G8ZLJDhZjMr5LpuGZRSjKhphDwH8HnkLNfKsFksEqXtM98hVobf"
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
