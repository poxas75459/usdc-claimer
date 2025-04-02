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
    "5YRMeSJZN2fv5xMVVojW2bgwurFCR6yvJCLpkt3FgsW7JqXwq219EnCaDpe2C81CMESWU6viHjz6WEtuMLn4S7Vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rL45S1uxy57C6V16hRfAccTBEBGCmKR8c8jr9KcFaj1V3oCUoxBMfYg8BsLx4v8oAFAQaUBzLGv8QzPfCHMby33",
  "key1": "2D4JsgUMRwgajb5RagPJFs5fmqPEM4QRHN8QLjYB6K2F4gsVQSxttj7uWHdBCEzjPqDjdi8rZzAL6XzCuoaBJf6u",
  "key2": "2dM9m1iBdBzXPntSwJ59TtByede5X5NPeZXRu7tHuz1EgKHKeccURCuzZxvaHJH1RoTq2GnHAgxHNhY6tksUNyGW",
  "key3": "G11mAugKED3ayGvhzky5ELRqWiEFN7BPbCQS4poBEoVdeywuy5sm6KNx7n7gZYhfTtJF9sLZeUERZpehZxioA9f",
  "key4": "2hQyc95hKwB2mm2g1sYqtTKw9hzY3kaGDi95iXLmWXYbsWyrp5UvnqQJqpCcmNYgFuu8G2fCDdxRNXtywXJ9b6zo",
  "key5": "3Uy2iPCEb52HJQV88EtJFbSAEZ2g3Gzn7fmNFeJw9VmUxwmFnMf4RCSM1FGUnNv9iP9HxqioKCjadSg7SS3wxrGM",
  "key6": "3jR7q26SSPQcfjU5UzXv3LgxKqmER7CAafdcwZNvWtPw2k3D2yLdKenPCiVrUjMMh9idpmBXTTzmA5sSpemzRqxk",
  "key7": "2wetQiEtTbp6TzS1BEn2U3rB6XTScJrLQTbUxLRrHCrHD6dv3R9hobNfNbj1CENDeKvL1HUKP5chw5dHFENrUWQv",
  "key8": "D1jifE4ebi9Pg6TjmbYsEGLNnqjikrU1W4YxHkNdBvvJeTbRRSoVPqFgd6n1NRGW6fHMEiMoTgWK7wM3JxG2YMU",
  "key9": "21uaFLGUfvrRq81Y2UDHZTHbcWwYkNrgH6K8uEXqABLTLQRPqeGrdJg8Lp4AhCLgJ8xiddxaeGqyRgZbJyyFnR7T",
  "key10": "3eksvzpR8Y36j7ASrBMA1AC5Uu9yjquBR4rb8g8ywCJvbwXA3DPMzYeTqXuXrD8P8z1T2Rne4Dk2tJ6g2koiQkZs",
  "key11": "47Ctb462485YNyeqW3dSPusW9sFmEZYxVt2HtUTHdBtBXcGPcVZgWzPbktyvx4o14o2iSWa9CZmJnVAWVMrRPppS",
  "key12": "5SGGfsR9K3M5eEgVnuvRVuXpSWeAKqEybbABJdKYU2MEXgosHyMKh2LAzEFbHWTic9g4okwovNKiPJUfeEGekj9z",
  "key13": "2TrdhbP6TAi9g3fUpeGmugYMTKYbGhVbokYTQf8iAmEAAy3La5rH1pBc1egg7nx48u5jNXgWL1Zzoe9j3MAVqTuL",
  "key14": "2vNWzUX4kXT1B4h8LtY8nnQ51c9BrKPFixC7pqyLoN3NbKiz5VKnoRwTvnMyuiPMk8RwWYkQZxghn5G34NQWERHU",
  "key15": "54TcgaT2tGNgt5JQzNjHSgdQi2uSqjg93RMp4kVGsJGYeCN8EaCLaKGHDFf3kHLFkabh2hyxEv1cnvJEqqih6uDG",
  "key16": "5sG7Nr9ovmyWUkgGx8j7BQHBZE2KHPP2ayXhw6mLrjFoud2yz5kxpJFjkEZnYPd8vjU5sV63LT46b9cCjadibHAf",
  "key17": "5CdGWAgbYd7ZDguDGQ7GaoaKrbPtb6GzFHSkkAdk3oR6F28b3Cost4KUQARoxPEv4zFpauajEEmMuabALXusXqkK",
  "key18": "5oqMMfxjmrKXfbJEdWAkB1aLeKw1122gyNCcJopxAD6QKr1dchTDByn1dTx8bMNS3vK7HRZRarVfAGnLdBJ5RzYu",
  "key19": "4WMarWhNsVZzzktedHWzCLXoJbP4nXMbZNvCktSUpTgUYqVmyQdKJaL3VocU8yPhptFdakmYhHaTk2nPsGjNkx5Z",
  "key20": "58acWptU7mPTZrZi2HQUAZVsvQZi8Z6PUsQPv6VVWmcVJ2kgj15Zk9SJa81VL8aYE2fEvpxLER4vmzYiZn3Fhx3s",
  "key21": "46wmo6VPgE3Ms8yn3bakG38VywimBH8NRwJqMT8TPXjTb7JLkASm4PYhYGJtwwtR3MACP1ztvvNfzBeCmzN2dQdw",
  "key22": "4NAJZ9JSVeskw7FmSKZwZ3FUWQx7TbdupLYzHpaRJeQvDPtHpUyRN95FpaX9jTTMyrSpPFr6DGutinATCkmyid9p",
  "key23": "Xgn9ueDUyCiVxmmMZFq2rnQzxjfp9aRfAXoBywHCyHwYZpPjcwSuXanS7MpXjiTQT5FBqfmGG3FaREZ3wuyq3dF",
  "key24": "5X6wTTZ187ZdmsJpJak5xs91wYjTRPD4snFacHjDn5D5s4zrrcsRu9KcxkAtmXbU21WjmgLeQnt46QeWpHntnNMK",
  "key25": "adbzaRioENT2Echx2AdeqYLNp4uv2S2an6ki12FYih4RRDQuKXV5FEnQ3mVBAHJ6sfEJ8YmYDRxhRhvGJK8iwvd",
  "key26": "4a9dXxwBS2bqHsnDBN4kSMqHbPw67qNGq8c8HqFSrFA5M5XPCT2t4Qzjq3kwPk5XSx2uehFWP6XTtRH4KcZjnmC5",
  "key27": "5fJoAR6sAwBTD3dB3VMkSCvkPMShec82S2dmy2nUBywDT8mDNghMarVAQoQNRP17XSKEokabqHHc4RNtjfTpQUGU",
  "key28": "45BQceqLuauKesapJqWZEuPL6V8M1qgKV8QG5WwZSr8muS7WtrUbB4622g1d2b9vL2BvysCf14vmGg22L9tUcHMS",
  "key29": "4hmg4hDMuG2dgwhNEfEGgUW4FM5VWwunHTn3EbzDshtNrAjDAbHkeywqP9vjK1V12TKABUVZw3TZA9XGhUpMAwDQ",
  "key30": "2ZcybcvSTCPgoezvA9ssPgcsRobq5qnAumQsLEMjY38woNEQX3qfiVweQpNcdbVPG3tLC2seuysJLoKDJsQoLb2m",
  "key31": "46eYc6YGkYKGH6aiVbxZhSAZvD75m7YreHW5bxYJ9VmcPHNiZUMHpSnvCUG6h6seXSQvXboF7e4dHHp2moZXqB52",
  "key32": "4SSVPMtTsr5uEntPaLWLE8xxF7tiQLGa3fQfdN827zvSm8nus2p5jySovHte5LPvGTQzTZgCkPBeqSAY2fo7fv5T",
  "key33": "5sELBYWBZiwRvZPzpkH694eeft6oPnzBeXtvWTVHoHSF1S7MUZsNDy61r616k1kcC1QuL8iiTq9h6SViTfT68Ph5",
  "key34": "5wBxHW5MfySP5Ja42af66QnrBsLKmsphtAXXaYeVmkQ9Wgg585p8wT3HWJuP3PFGUAi9b9bLvKVkhWXtEsBqy8Lg",
  "key35": "2zCPnFXatLvQqxNQNKvDMMBe3WPvaUKqKmoFJCrZphj6zgj2twZCq2hYEXyhZL9pN7y7NS5B7PqU3fq8D4KMFXrb"
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
