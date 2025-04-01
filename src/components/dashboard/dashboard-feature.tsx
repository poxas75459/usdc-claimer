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
    "5FpkNkQ752bfvaWLTBVCie6H7zjjpXJhFEkfne1zJN1YveiY7vVRz7sKaCvNHHbwxiMgNkfGdAm6PkZtoDwzjKA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQTnRfW9Z5b2QvSUBFp5iq9TfcPCen1YXcZoGcKWp5nAcYW9Vo8fnwoJTbKHADHgtU2mpudiqctiWHawE9FQatq",
  "key1": "3sqYHyQe1Kr5GZRx21rpjKNTfrYcgsh5WbxQ9soQK9KTj49fJ3GwncxkBNr2TLcpFYQRQ41ufPb71xUe989v4pF8",
  "key2": "PCwXGDdhfzcH7ydFg7Kbj3JSJmFKNbPzrhYQM2hYkw72vk6FVg4yuAyCMxAr6VE6MFhuGz8qtS9p15vQexZ9f86",
  "key3": "3zt7dsvkd3GkCKpdKX9T5q1XR8M8hB3kffGKmke1TDsTQA8EFS7agY32VYdX3k5d6M7nrcAe5ERzxBa3ibxK4vK3",
  "key4": "43XX3RkYEvV58c4uWQjBdLj9qXWSveFBezjxZLSPsSbXgMPetfNFHeUyUp6hhZgfuQ1YRBFSg6gRoSKVSV7Ry5ME",
  "key5": "2EvC6ruF7UR3RB5uiV8i3EPvrQDAJQtuVK2nt5eKjFqqLZfFpN4d5wySv9WmSPeQwpxf9MwHb9HFRQvjUjyUv5js",
  "key6": "5hhjyVGmXNninL7MBn1FedypxqTsppvVRhbKw4qc6mLNNAqiMVaWWU9hzBgSaSyV9W6XwJCtny5orQGVwfVCv79m",
  "key7": "3wUmYYpqKUt3dYGMh7syQC3XXTE14pBVDG7vMvWrSuozxkmhcciAj9B363PuWMSdPctgj8hoxwgoE6TVHPXqHnud",
  "key8": "2wN3L16toBmLnejK2eocS1PS2KAp6AKsZKx7SYcpvCAC3rqRABoUknh3AvpKjHKfwATXsqZUfauqzsCJSvwc7vFz",
  "key9": "5z5s52P9KK2E74395MrnvjYNotJuy8ify4xFqDoWvwpoXS99GUksAJnwhZb5NMKUmtEFjH8jaxdgp7k9tB6S4Tt1",
  "key10": "3Tv8UpVg6DNhPdHUmTFsnbWEkvX4bk4wAqtsQJM87U5DYKfPoiRPcayHjgKmnKeVxG9CvN8CCnDHgtfWHaRAWnU9",
  "key11": "52Jixy6brqKYRrkuG4exUme27ms5Epw1AumcVwo7kzn13URX1DCn7Aqge6LbxA6rBq692FiHgFx3iQBsCM5JSwM8",
  "key12": "3n4N8gtnQkXQNtmPxhT3aY9PhdrsTxnBdUziwRC6VjFbwtzeVa1Q3kbeekuKNcoq22WHv7rTPLioxafmFqCrmBtT",
  "key13": "rDhE83ezcuzCMr4hK9wysGkWbutq42KLq3KF1FhED9U4YfHSFutCy5DwyxhizMASQaF84PS8v9mmMRP45VXjm3T",
  "key14": "2t5xEKyoraub1imaYAtQpB4hQMythpoyQF6XW5RTAyu7Cf3KipwuQtf7Q11AfFUqCna1WTqjhH8UmXMW5bYugU7X",
  "key15": "5nRFspRoNueD5mCwNJmZHyARG6T9zaJEGRFZrp8JqKtWUVHA5QEBYLnE5nKpPh47vX5jq3ti4Auhpq6QHYvVayFk",
  "key16": "2wdZRLXeYZjwE1oY5ERSrkczrvRXPeUrtwELfQoSTAUZUxxWE92jJSYcKtW6EaEWFq8kWfnUEd7ut84cjEwkg6tK",
  "key17": "57h4WN4mpSDEmtPwuMBRKgsUoyHy773xrwkcB8cty78BoL3EbGqhUtRFdorrMGTRPbibgFxSWGXnrvJ4y1tqCtwk",
  "key18": "4cq5o1rAqunK1GazL7naHr5hYgGRQVZne5nBecCkKdTwX85WSZWZBdm2kRC2aTdvrUomk8s8M9DfbfZs3XQeJNrL",
  "key19": "5uCw7WTdGFyCBY6YCsKLHH1QthWj5adpTpj5qrUKR1hzETZWEki2qL3NSV1Rv6DumD26sh6mjcZoAp1Y9hMwjWW8",
  "key20": "6agaPdu9MqoCt6nj9fHV9xF45wAWKQ6W3Sz9p7Xcu2doMqENzZECEkqANK7eeHNaFhvLhkP5vD7TFdqmtt1e5h2",
  "key21": "2cbUKR2oGfPqkwL6B5audYnfoNkKtX7FU32tVeEHRbxT791HqcrXmhHV8jb84rdnRTy8AepuB9DDdLB5Kh8cisrS",
  "key22": "5BfwKWM19PHPaoaJi3T9syQ6mS2FTtsrkSDFaPGBqyDtjefVFtrFjE3CSNdhvuEYj2fpXakyDPoQMBnN6rF4QArW",
  "key23": "XWjL2yYPBaPtjGQRXv2BoggjDckzfM2uL21QEKVTeUtoaTVhMmDmkMALYPhzkJXckNqJdgdcEf8Es5asZ6hdnTE",
  "key24": "4b5ZFjScnZSrmLr1HQpaaUXK6RWSFhY2VxDGoCCwck8VRvS2TaJ17MW5r9RZ52SuFUuBHMT9nUs2RhwfukAoSmS5",
  "key25": "5SL74wkh8B49wyXUfH4Cmd6GsULDxjzo4hbw6ruLP4pMSdsswN42dBnn51FCrjJBfEXiwZARKF4cgBziTFygyHPU",
  "key26": "5ZhzbzFpefdsaga8PNiu2sxGhqJp41JnB5rw5biwueAZu6zwCUUwdbvBxWda4dXjmqZUQF16w5QTXS2Tn6589Swz",
  "key27": "2b4JL2VPmyN6AUdp4EVGuXNX2TfXgMgnpsWGHwSme2m8sqY7nhmPJFJzTJLefg1LNcyVAEGo8srUD4FCH5ihvpiW",
  "key28": "4gcP7BYNrkp97pJee612zde6f7Z1mxmWtv3zpS1EXeB2jJFqokuoV9voDmwKMRqBbdsDkj1f45NGf15PQ1Dt23MV",
  "key29": "2WjdtTcegbEVrJNwrZQ4nrAcuZ67Lh5dLQEK6WDHw19rTgSxAoeeqjPpkm5cP6D5aay6PiaFjWaZD3RuiryZCiCa",
  "key30": "43GUGJFWRZ11XG6uSgWy7FuDhoGbTfqpoaV3cnVvq9ogrgbqk3z3mG4sp9SDRbP8G3kwy3px2DzEsYeQJqJq1Kqr"
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
