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
    "5jMnXH7MCebcU6t2215cWaSq6xRr1dK1jZ7MyuFGRGB2XmFQB9vtZCAiSvUpqKignrN4MZ886f4VKQVNxuU1o3W5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRgJYpzytgPL9A7pVkoB33WBEZCk48ZYGU9ptWKX5xEsdH8GZxJhaKjmzr555d8zYnkZSaGHBAuJ4zgYWXqtz6Y",
  "key1": "43DF5EwiDad3pNVVwc9bxUALZGZcT6PMUqAYe4oTsXyYSaHpmqDxrP9xCrqnkH2wFNbRtYoEYayaZDArZQeGbZ5N",
  "key2": "CxWD4WDbsNivF7W1pzU8jsgBhRG5swmoWJChCVrYmKR6emoUCj5HK5HQUiuzc4LkSwGUue6x5ugs6L9CpdwQcBB",
  "key3": "2KAjXLJ6HpfqJimZwbBqko3srPgSC3GY8A97inuTTYwLkoPyKBhCDGJt9d1JkcvF8PSDLdyX3MdFERHqz5EaHw5X",
  "key4": "22g8YLYcq5KRQrBWJGE3RLvDVEeCZGvFPXKUNVrrAbHgDQD9xtQfgYS6XhkV789Kia2ympzaQE454VteqJ8ZTBUU",
  "key5": "EbAUQ92qjN6TLNBnT5C3pMBkoP9cekuPECNZuWfFso7k9RxSWLHX1FUhR83ffYLkYiMYcnSe4Tn4h1za2owi9sd",
  "key6": "5ve2SKsBhXQSat7uCC2RSKHC2hVvd1fHLCjzCJWGz1FwFMPwDC5JUpnYouEAaoFXXCGnPBbLF388WRTQ947Sfdcf",
  "key7": "4pGpNyTnrcMJwHZLutuvTYszy3UAMHDWV1dqh8HwmfhLWNJuhFkmvpMSrroq4QZBwBvMpNjx1deChK7Nif1Nj84z",
  "key8": "cGVXxtcH9UrHzJ88YMiutNeGjZvPsdpzHd9cnRSzbYcCX1d6M3n9vE5Q4vPisEKHbTAwXuwcBEgJLbD2a28MhTg",
  "key9": "3WMtrUuuLKzhsD4DrXk8YLG1vbxAoDob8rfs9y4huHBKXw2x5DD8mJriwpCPDVWBucHesnYk6297aicNTAVBy4RH",
  "key10": "4LDXPyGQFXq6h3QFFDt8zKhMgSgNvnJPH5YxgsWNCXVCCBa7SNMm3NFSjgGQZQhqqKGHVtP5BPsqdeqivaza1L3V",
  "key11": "46RGNKXA3zGUy695ZkKNs6eKSbyLDcwtmtp98LYYpUXe92sVc4YfnxFpkYMpCuTySD7twxSPtKi74z4HoRgwT2Wr",
  "key12": "2DNY2wqCvKzUBMcZvkATWdwG5cS8To7Syj4MVC1XRXKxQmtL3Eb524w9RKmjw851JU13k5qm45cy4cStV783nJbC",
  "key13": "KLRW4tzCq3FZiMHN7jmpxsnwJDSNZ1D5zXJq9tp16g66rPqFyr125BSJarRaHBEuzKi3EMGkmAg5FfKcvUb5i8N",
  "key14": "2E5XzRqapXQnW9z5ze2Z435DyUistvY1evdissgoDdL29fGFSrK6sNkzDkf5obchHWYmEmWFXMMdJ9jLsDjx4Kjj",
  "key15": "3HcKmZAGgR4LrZcZWX5veFf4az3ndKWUNtu6bhuTGZjYzZbHzB66bvAGDvQJRwd2cRhnmCvA5Bw2yYemKU7R3xan",
  "key16": "4Qrd5bRALkLT5bAQpkfG1SMBxt8YWqdhWwt2Typq2zhRn7zK2TwELWzjd5mfpm28aj8xwNUoncYhXgBW4fqZQ2AF",
  "key17": "4MHobshuHkuA3ovt1chfU1ndcXiHHb1GMjkQqZVr16hJrfWmMGoTnPLr1cTgn8SKypovyvrPsQ1vXo7Yng5YfYCe",
  "key18": "5p5Ha8X6SwCeVqrYf6kEV5RXaCdC2JiNE69wP4gRgNZyeb94z1krXWAAe3HRY55jF5Twk22QN4yuY8SazcGZe7qN",
  "key19": "VzJziBz4vTv7VV9HNMVJwNhFysLeokedtJAnLbFMDV2GmwxPNgczPH9PdynDnKhxaaziX7usF79NUos1BsZNjCw",
  "key20": "3oeSzSJfR1eQw5zCHri3srppyEyY7ZhcDNpBh7JXGoZYhcVsgqAyrJAeoG9wU8KZVnoXB2V3ssynUNK4B273n7yD",
  "key21": "4JXPT74qEqPpjpRjakDnU5cbUDVVH8aHUeiDvJsy3yfhzRo2MWATB5Vo3rwmZBe9jd9xYw3R5YKfhrG64rVcsXfb",
  "key22": "4xXX7dS7AM6vEJg1tb7XsSVK2YhSpmMkGMsBaoxTc4AnNRR2J5xjaeZftqayazJNP1kUuAg3R9xFSTtX4xavVV3z",
  "key23": "vF3EkRFqYmHh23NvvgA6xSkZx4WrRxnBEXb2eSWtBN3zR4yWV138D7Y5zSkLmESQ19RzPymvxkoC6wQJSkrFt9C",
  "key24": "2ofToU1iuCxgg2VTC2Fpb3Ni7dVumS9ssHerzYUK7ZsBARkTh3E9oTfHScfHCxSuCwznvXfM44fE4WeKehnxwLLU",
  "key25": "3WhFXCUyXgMtgZy8KTXgaJqYecc3iHHRwPXebfTQqdSKdy1Wh7hmEwAaVzQa5ySr99vqNMXfd1fWkAieJnWhYb2r",
  "key26": "2GsPQe1jPesnrEZhPXubNZ112sDzcYQaBM37xMnFMkVdJ8ZsRc3Ln9MeQDU5asdwnocQduzb5a4UTr7g1NDTZooa",
  "key27": "58RJxpddX6CccqqPzWe11gFeUfHsuuuE1MiwLtDTpQqVkgFe7XfD9jf3J5xyK44iw2SMeoKvVkFxAuiKyp158kqP",
  "key28": "7597XEqUxp2YEG13d2nz12fG7FzKrnvCrQbEiHaJ1zen8KSvLv8ooBGPi9sujkqMCHRE52aPLFYCyEDT1ZL78GZ"
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
