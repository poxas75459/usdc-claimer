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
    "34gG77KuNRXAsZCS3KBWgEBwMiKTRcnQagUieRq2VeMH77MuwtAFC9mFnvGqRMcb2AAoezx8E26RHsPfcKnUxoyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GcVDFdP9jmFt7Mp8SSTKKX99F2ACG47phgyndXtSjgrYAPUj9ztqyLkHaMvC3oHsyvK6rjKAgKa6Y5RNLiLxv6a",
  "key1": "vp6m5sftSvcaT6nx8piFtHAfTyaYk4tY3s1LhF6TRM23g8MheaEcqwCfPmasftEnqduKGjFGudFX9vjq6NSSH6J",
  "key2": "7xfHYuEcyKybGFMjubqjDX2muxVD9PmAqjY2pg2LLVbj2ePZtpiVbY43EE2zm77wdxTt6m162iCc5pBdKtiVMHe",
  "key3": "3AJ383Pm3w59UqsaAkYJgpfJBSz5pkCPEc6Jgie3PVRfHCndtNsvVzKDPTSwbFRngzXoQnidxXr1xMnCW21SUQRN",
  "key4": "38uYkVQow3HCGrbjt1BpB2goA3NiBiwFrg4fx3d5UsqCNjTsCYQxkGGXoz9aMoFAo6ijFP9kvSijE9LkycCWdYap",
  "key5": "4yDSiY2g42mdJFcyWUymEyfHALsKJD1SoEoW2SoaDRR8qFoa6PpmQhpCkkxY9sspH6gDqc2QHgTCzZeiZXQsftbH",
  "key6": "5B28VmL9dmpZen7PvvsJ1qHSBBJYyfoKcAA7xk7EJE2EghDvibHHwGukWvY4LMxVz3DjgCehCbgAuhfgZrxJx7yu",
  "key7": "AnJZ8aRRm9aFwyCq7CrohfmwyxDDBhEYGQmH3QsgLUJv7AyDK7RJMwMMMEMqXKav9fcFuMVLRbQwRcZUorR4R1b",
  "key8": "4fbRXA9ibMd44G71xsnM3jrbQ98poSKa2eYveLN88kp1zukdZjSHVtDGhhChdJLrdB45Sf1RKm4amcbVjomus4hz",
  "key9": "JdwwYCJAogSF1BPQrZxv4MAytqwtyBm7D6e7j66MCZXfTBqBjpxv5UuoQm6XNtrSgAho6fspbwTzQsDjRTuq9ms",
  "key10": "3LeJsRGGbeNJDjXhEAd7K3XH8iPEMFM1FFfbaGgLxvzjt1294QGFb6HuP2UZ2Ze9VjXJFWW3p9ZEHpRSYicM1fiw",
  "key11": "2B9L4LuW2n6TdR4nmA8kL6o4ztYbUaM47LY2sFdAcj92nJ7K3QsXBDfEXX9PW7oioXEd86hWyt9e8TzSYurbbUyU",
  "key12": "5NsgqY7W4SwzCeVCzFitozjHCXLU6FkBPmGyM5nXcmAS8jMKyASJsbSzgjgE65k9tXQPMMZsNGKtmgGRhkF6wFsa",
  "key13": "36EMezTojLTQCD5H8GAQVTF2rReCQXi8yRY8SoC49zhm6koBW6javfrnkom52uyxFqmA7t2XwM58Bz15kKm8NqzT",
  "key14": "opiPZ4LZjQnYqkxXnfoGvkZezyN3mMyyQRizp52WwmgLtj7NLUxZwCMYoVpvMUTk3LJGhsgHoEHid68rtNPmQEo",
  "key15": "Z7wPWbnVfUV59b7WUEimDtGevysswDhAHdB6kFo1F6f4zu8hQDgWHQxH27KpSQRiCJrXYweWcJeRhqfe5xWjdei",
  "key16": "3BW5EWDDPHixHyAmhzAgCTtVGZqh29yMKLX8RzG1GwMzBNjrYKMip9KztCVzkyVy1wPLnJMSvwRoWzGGiQ7VbQhJ",
  "key17": "5UybjAmrQ2nXJw7WYAGoDJ4vrPe3nSUfcH9CMZvR8kFwAugNNC5mLrJH1AJyKW1SKPK6t3XW3LzfPBzaFMhVQhp5",
  "key18": "5zGX22uUtCfMKEPirMuMS5V6JRtCG8KBty2u5rGHaxtoHxBUgYMpv74qjynMFUXVevpX4BQyUYvXQVdbaoCWGxoD",
  "key19": "2NVkhg9jeiyvjPVWoyDyAnUAkfegB1ZEQMDytfr4742MDRySSZQ5LDukEfLqN6u5GDfpkv3q4WYXpeESjxMWLt46",
  "key20": "3NhnyFqBbWSfaKV2LLbMZUs5ajcWhSGynB7PaiY7nkWtKTbf4Y1yR8yg1dKcB5xrYkmzEoJJD7zWKJg1LgyYnPuQ",
  "key21": "3cdm2LcPXckCT4ZBW9mvBSHNx3yVSzSAyyLBGfjBj6CWykiFu8274qw88u24LvNipzHTA2eZhYvmrqaDwRx8uuz8",
  "key22": "3DzjRLb6wzrsSF1WrA2rxpxDPHwJjjJhu3sLHNSdrqix9C7eVTafPqRpX56fuzXUhCpR96nBTt4YyhxSZMjbP4Tc",
  "key23": "23fJAf5brrwc3t6hxVGNSZuTCWn4oR47oqLLGsbQWddd28u7GtryLpSqSo962qJe1AexfV7WS9YoWFRRbVpthkLv",
  "key24": "GJmYqJdbejzY6xM1aaJSFRLARaLMcqUWmmbghuiEaGJNMcGsmXi5Kr59g4uRqREoF6qZa2AGsQbBnjhKmLe5waA",
  "key25": "3zrAVZxBHVFds25ibL7rtWb4KaNjnEpq6QfeDfYfrcmzGm5wzkE3ci83fPVHz8zLoAXoXtpknzXtnKmn5PrGUKzo",
  "key26": "4fqCRgnMNwqERaZWpeGZQ7dxTH9BsechJeYJcwayUiCUcqJ8ib96pMjiUaBegtjAC2jxs7Ysx425dhSiCzwjkcJP",
  "key27": "5dM2R1uDJNv3ZnySRuxR8PRgXrLUmY4u4XTMAUr4MZLw2gaiDY516Ad21JbQJXKpzfiupVV73SCXpoHUmovJ7fTH",
  "key28": "3HPWcYgm3hEmsJhA5jVjTfDXBFboeaWLkFskFtfdQZSEVtpgezX3keeHDtqyZMXHGuq4iU5LzAmbEoDnwSer4Rc",
  "key29": "4CksPf886Armt2tkEgqyFymWLLkguUDmDixKCmawAwzAxzyg3oPQjCorTU32Kx8r7hoVpzN6mNKz1zhTnaM1z6pA",
  "key30": "3ZvPHpttF7Q6tZvShyvjaZtSrn8EyLgbzUQtJinJ2Q3k9PHGeH6Lbgm1Ait7ginC9ojCFLAxHWp5d1fNDQLftoyA",
  "key31": "WBqnVuMF8N8YmpkswuuWFvnTHjQEE8PQnNwjjPcj3yCozMwpqG1DnKkZZ1ZiuH5FATYYtF3jyBVn2R4GAAsSzBv",
  "key32": "4syyHVVumziwSMCm3EDeyy8kgnVxVbY9m86zp1joP1Cx9TUMhwuwziFnFrztZaLoDYtZf2ZWy43ME3jXRFkv3pK3",
  "key33": "4NHBVeBng4NbGLghQrAqV6CGSegJnVbG1GNTpwbEqhb6eWpkidQ3SwftQsfWNSiTpaJ7FJzFZnyMvtchwnubWabi",
  "key34": "pBMmiTaANrTSyXiSwavE48spKiUdhcq9XxGFLW4LEjcRMNvck3BViosxtZf4DuxB67LcR8pSTK9T5EiiCokf2Db",
  "key35": "43jeJorewH3cucsT2SjYWhqWtr8pituQut6TXxuiBTrHdkXvBashzLCnKeR6UiavvdHgQAW8bwRmGsAQ93fLEpaD",
  "key36": "Fuc5NLV8PRwX2E8DA8n95mUXtRNRJnWP613WvCuieC4YdmqnfMPCD4zqo6DDwMoSspCZj3qyYJswu7brxnbu8dw",
  "key37": "3KZkryrr8RLofxa3b8SYJXzkCAnRjSqaX1ZNiKLmMpuNnzjeJQrcCoZgWtY9KxyDG4jUr9xb5vsLAAUMLNXNfwYW",
  "key38": "4T63PvMonmkpLYBnJNgvz7yqy1TQ9dVkvT2pZwGSLFD9fb69ATVp8ZDuqrykKbqvVbM7g5bDht6cYXsVJymaoBbS",
  "key39": "3zxjMj4Hzg7KRfowb5APJiyb2QPpvieJCt3bJcG7Zqo7FXcokBEayQNV8xjt86ufy5hXfpzK3p66y5cX7dNdK6dy",
  "key40": "4vxqSTeJeS9wfkB7XMeb6mkkVL18vUqxBpzLDRDRqwwZpKb8mRY8JnMbRCYxeZU7sJAxKbFvzAAE6NBjnN1JN1sn",
  "key41": "43H5HnXjfnxiZoehRcBK2pybgFRNYVDcdXgmMmiRXFRPP1KTf3YvdrZ8238JNvKu98Yqm1zRafnvLD9v68JQ6Gdg",
  "key42": "4MTNskePQiE5EUwxTzX693EYPHJh8aQSFxnhwBw2hgF5FJLEbnGBz5T3DpbKMLafqwVLdiW41PoW8z9Xe67UbEtY",
  "key43": "2Jt5ew1XfYZgnrgEuKXV7ttterw4ztSEZxBYhjZiRChigtQr3TvjZvVMukMnqB2EyoVBKFDXKWygzHAzi8ss7cEd",
  "key44": "5hdhEQ4ftqLBHY1UYk3D6yRQwP2LfihDSi8VB7WPrau2xjcPViGABzFEWD5hpmHHy2o4PUwwDJaD6y2Se3bSjKup"
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
