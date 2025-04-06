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
    "339MEdY7p8XYD6neZ8ijRxjJtijvNP3JusbNZ2JUvQzNF8aPeTd498EzwhKnD7H95sFovrsqmFUSzwyyhksVR7iu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZCwmcdLLbw4muhjBhM3KT3mSxzKKfRsFnEwFBWuvqrveWs3igNW5VHNowQfHsPq6UaEEwxgW3TSAWsNzegtk2M",
  "key1": "5zXprWHNoZvdUSkyVqhopkTHnkBfb1JmTiv9p8hLV9QXeojgFJRebmpN5dMSYLBXmDZyg9C2n8zbMsbW8SDY7BdN",
  "key2": "5KYGTf5oHH7MTUEi3iLrWNcWnfmvVVe7WQhM4Ftd377oZhEMGvo69ewNHwiE73zRLEgir6VwsTStLWh5YDygU3n6",
  "key3": "4gU3q5qymifA8UFVDENfx6N3d8TrzYmmnDi3m3oj8RJR1WfnsbjVDd6Xstp4uY5QGxozuR1ug7KhEay1CBrPYovJ",
  "key4": "4z7jSgCmPK3Bqkm5dZrB3StjFgvnmTV5TuGaeBtHUCHs1ztCqYWacWcgjC1MvvUrzwQaqkQgkpDutjuJNCAt8XWC",
  "key5": "2Uve5DxMaXAom5JDQUYxT9ELWBRrL3AFwkGb4aQDqhrwqm7ysXckKPPdoEf67yE6v5gSaom9RRdP6JoXmsH2XcMs",
  "key6": "5n64x1B78wGu5npkf8ovDWdS6dFXwxD6EMSZvyZX5r9hFEGkmKz6BYtcgapAN7uXK9uqS9AJcX9ZU48HMAKECXqh",
  "key7": "pnS3pv8gurpsXFJb6thk2JYbmbSK2f21BiTquRkiQLM7WWjPMa1JDfKZS5y74GRA7cpcvSmVUT9iVYuLSmNS8Ux",
  "key8": "5rqpc6HFfSkCsLXaycHYAvLMgGNe8rxKAfAKrswUv2ChGTp2bzBSuPBWck1MBCKSGMTbgjBibHN7MEbAbMMXY23o",
  "key9": "2FeJutXgqmmkfoC3SNUiQ653q3DnFxb1p5SPCYEMsD5WQA2LhJgjy7K6hyiCdo8ujhURYgqGwmaMKxvE4bcGdjGd",
  "key10": "33c681skBhtNFNaY8EfmY9My69mqH1hdoui45aJ64NUUPPg32gMdnLVBZKDHtrPLKQLd4xfZ9oVrwc8bWMqMekxa",
  "key11": "4g8zeH4TTTwnSGNg8kPpAG69gXRNnTASS8DvFinWR22uptZwjjm3k9KN9rXguaUoqpFdBAbVssA9b74Rom86dwqE",
  "key12": "31LbWGE7uMEvsSPi91jiANVZzkmm1SKeook7Btiy4H87eUYJRBaGQwudCDzumgfa2XaF5LJHu77rXK9Gy66q2kWf",
  "key13": "1WbHYmp2zCVqtLa1GhvRAenVR2Z6ThhkrPwtwRdv9umQ31u5AMrnnW9kqoC1W5U4JjkRsjApzHoN1kaeH2RcNR7",
  "key14": "5WFyHh8RY46svpEESRNphNRbw9vUDtF78ZEmL1R8GZFkQtHcYWDyEvmZpk56EGt2re4TKug54gZ4yJV8Wfc38YAW",
  "key15": "3KuLobZpCTuD2L8zi7tScjheAbmCHxvnkcbAnsvB9jgdKNVgo8avex5vAevXKfkeiTB7YzNeX1KXxmD2t8cdSrKG",
  "key16": "28ZDHRrZUhMve2Hp14BGaRS7CAvCb7y9UrLLuGYvMZsG4xmTYxmbzVPuKZ4HSZJGVrKxxFHLHCajm3wQuNcdQXMU",
  "key17": "2xpCpqs5YLZVaJ9N6j26FCyZjERKdZfvvGqtSk6QnHgbWY9oLPFuRQBd2SFSbcTmETFojG1N21G5VoVC9gpV1FR2",
  "key18": "sYwEaDNBPbEV2qWyDAmAQtB7XjgA6txLncpFq4KKaT6bk3UUyd4Vcyzb1ZZ4AgoSp9HcQr3dZojKJcVrAzse4Ju",
  "key19": "5rNRB5TXuG9qXGL9zojQZmJNghThwshDCoSYyQhyziaERCDxthhtLxqR6BF2gZigG7WezqhLMDtKXfdLNJv4QtBv",
  "key20": "4eHPfLsLWn15MGDgHpy8kfHWj6h9QdZUTYP9ErpCSoUehqeDG4GTwHtnfoz1XbzpYMP9hrfDzTrkvvkv5VkWHNuZ",
  "key21": "4xH6ytMPKnw2Hr8D4bCHkJKr7KKqt6noU9PiPCjhJjGSCpixmR3o2aJ3nV6tBdCigdsqwVJHUARXSegmNrzy8ha7",
  "key22": "5cBZ9nNp49oedFYJ6A4XQQ4kCkfdNS3np4EvLZBkupSdAKSM7jQo7CoaMK2xqZiwgiibeV2mtnSwQezrDJSDt4oF",
  "key23": "3Gc8UvAwEyoippoErVSjTLmK3TE1qh1hSKYYpBdRbxPoU9RqjKYmhkp4HU2koFrR5pyRtEm1bW5HBFBYLhqkYeoL",
  "key24": "3duHgcFhCuUyjH9b3HVhYmCPtM9r59J4jDGgHidi74qQoRg8co2GHzg5XoyGMEy75f15W4vsYjJ8bUy1FtShRhyb",
  "key25": "53BPvTv1PfMYj56A6DAktPPXjPwjRGSbXKxKRpbYZMQtRHvk617vVkvUCNrieQ3LAce8kEUBZDYE2eBthaK5KyDu",
  "key26": "2xVZTrQBwxw8dh5DDr1kwPz1gDTqc2v7QhMYZX8jsW5CY7qh2NWfX4xXtmv3woVoXu3bvrtyQfBv8z2YWfHzvFut",
  "key27": "27By1pvgxVSWYbyCDYfgXo8Uw8NEVsBpd4m4Y4tRQBu43FaNh1RtQ5dukZWQJhPtu1Uv4B33a6vq3pESCtjmJLm7",
  "key28": "2hyfPcEhREDgrMgBy4wjsNbqGq38iX5FaFeJv6SekuqaEGuMUo3oBgwq82Qtn2yJbtjDVTbqdvKQ6P4wfKciHdfw",
  "key29": "4AjnCe3jQgUqiGuU6e6PQpyPubU9Ge2RWmX61sVzw5ML7xtg5kyZ8QghAs9xzq7tfCd3V5feasjCj3GcAd4NZuTk",
  "key30": "3S96QASMtzny6HTTcETv3on8tW3Vr2GkGLDarzy4ixZZDzHwQxDABXGoQ1UtVpXz5X6pSYbkLi3Zcq5aemRFCwxn",
  "key31": "4a1EieNX3mqc28ghp6svN6XcwjyzeqgayJ3ygzysPznoTtK3X4zsRoJgVaHTpRYAH5cEdMGTmT76rMaNv3q7rKAQ",
  "key32": "4EV3xkC6Xg9dto6j7mnYZhbHXQfXrwZCbwFEHFxDZVSuXsHSF7bj3Waj621uTBcgWMQcEwWJw2Eha27EbYtofu11",
  "key33": "5rqriNQ6hP6neTuTVf57M1VMuGBoegHv99EnCoHboTyPJYJcNDiMUuGpE2a3wVbWzX8AxfRHQX6HrPtwyooNEGAs",
  "key34": "4b5rZE6edPBrr7bDQxPMKGGwCnE979z4nM98TEP3dfLwmwwSXjLsJgUWEwa2AzSg5jcEBhXBomCb9muj4NYRBZou"
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
