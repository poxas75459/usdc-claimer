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
    "4zoU5v6Qp6tqA6NmGW2B8DZbKL1YjKLRyLiZX5pxB7VmraEZCwQYHjifWP4PEcxi6fdepchwGnbtb4CkZ9JYur55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AyFfY4998bv4uFS2BCwgvAvNnM89QW4BXW1xR7q55yawWiBjZi4H6b77vcpLkQeE77HkD5QjW2Y8SVkxqUxCg52",
  "key1": "3yMNKj86KHGnACkaYiLEmsdK8fjXapAAjBGyaeidQz77bwVZYBqz1wXq9yUChVFfrfGRZcQAwmuQ2bm8HqKzWpfv",
  "key2": "5QsvwSj5wc75NkGfkYyHyt5ocvDVckDonZfCFhEZcp1T12mxNxa3LtqiDiBD8k2wboGRVTmxwKSQdgne7csvj8kY",
  "key3": "43vvpgwGAGa68v9YgutsmXGTHXWucugtKvxXj3Z2QYAprE31EVP3FQ3UDZWCjiYPXAgB5dvyASS6FRJ4FiPToDpD",
  "key4": "3eFy2pHYybLWeGns2rvpnaNMH7s9N2vto5j9Cs4KM4vKqQt5TdV85ufB8d7jwc6Ja6iW77h4Y5r149AsEWWhSBPt",
  "key5": "3ujhAXNGisfswcR1fvEDPUSGaDYqd6NFNRYd8jY7g48nmjyfWznZpbstgrncuTmjAGF3PtoKemzGjPhYELTZy2dL",
  "key6": "3WmHZi84G5Mchc7GBibSBxZzLmPU7To2vsNJeNsDdx7RS9jQinua4Xpoe7sQSbFA5GkCyUYt8dy2rrYAgpVXUY8B",
  "key7": "3gM8ZUTSCZhyFz9aZd84QbRWoQNGoF3NC8uDeLEsnLy4cr2Sy62SHrvZEMqm9kEsHNr8YFFnTiHWdQhDAyRMwmcw",
  "key8": "5PtvnZfkxMrNNnZ6L5RytjdqFvdrLSJBoWotupR4E4HxNRfdvyxRfCNqifYGie78pr9HGi49ZQDaDyCRQN1riwTR",
  "key9": "3MqnYpuE7v1Yo5RPjHYSTQj7dMxCRM847GLnyiiAq7QoSgJp5RZZRCELjcK2CE9LdMDraN8UzAEedb4Mu3qnzqCf",
  "key10": "4FFyf8MtAh7AiWauuwC45txLUqHMvvdWMrxUeBcvEDq2idjKRAwnSXVec6oxp1QcDgrGfo4PypKHP3NFTSdDVUBu",
  "key11": "3rwSStaYBkPKwuwx11STpQ3P3RLHLjgWLCq3Ewpm1h76b6dfn4R1LPyL7XaUshhxd51RY2EzBNxmzKt7Bog5NGGD",
  "key12": "5ERRqQsQoyYmkYS2m3shT33FVwyZLav2kjmTkLdsbGs5BzxNTM9VQUJqVy7WDAfdBFtBT7HwFc22eCFE54MJSyK7",
  "key13": "42xar7JJLF9QwrrcbSSWrw6QmPUyZpawqXqNmFThnDsD6dCXZdRNWu5U5zZCW4q1yUvp1FjNwnJXbhgiGLyBu3C2",
  "key14": "jp2jMhUwAHwgjdBcW28CDRMs1CaHAQV9HPQAxyXp9hqK29cAFK6hBAoFCtGfpR1dxUnUhsys9ZsFbmmQWoZf5B7",
  "key15": "BaWwcxGnyDf9JwBBstLwXKyU5UuqyF8ij9T8hczXxvuNfW5G3NEGM1bQZFZNzWwUig1fdGqdZ7khKRHPp4Q2mtg",
  "key16": "4P1YkeZjHxXz6AdGj9ASgDjCWhoJWpd7yfHaS5frambY34ME27vS2hS7JFD7xtRv5CMGDuDvhqrpLs1uzh8K6Fgf",
  "key17": "3N7ZJNkySrw1MmCtRiKN3tm24mvWeDHASLo2ShWysu374gcjDyKbJtDj8Su53jvAprmDrpg8aUW4wDGRiQZ3tqc2",
  "key18": "2DYW4JCCvE7gmJSqh4nBe4Kasqshs3mSGCG7tA5Gi2iZuCEhZy7ng5PL6axtSzsshLXMquUw4Mm4A4a5Xia1eADa",
  "key19": "28SwYsWnnwbh9e3aq1Z5G7GdsvE6BJycboR1CD4qujzQBSCo6j3hdLm5vqHhAvcQyGLgneNUPbJggsKb89QRWSuu",
  "key20": "TDu3bwnKTVLjqif5yYRgCjquRbTrxjdm8WFb3G8XoyacB3f13irgjk9p8P9YQWcDSf3mg92yveG8SgVo4mBi2S2",
  "key21": "q4bMmBsUamwJ6JLBmLGpX2GA7DSz3gxWR8T7vtchsCwKdgLdNGypBjsfE6gCaUCjQKnoidKHWnJg11gEBujvsGN",
  "key22": "TxFBoA6eVYPUjPETxevWneSoT8SFVC5ZpDbw6q1sJAy229XFSCaMUhdX8Tscv6t4ofhPVk84kST97dZWLEsCbnd",
  "key23": "5b35mv4HhtiBTGLfJKB77s4wAttbENViuw7SAyJf4Y25T1LECtZCknCBUrFCnfySb8ci9WmYV6YyBXxnkj6BsndH",
  "key24": "4WKNF96oTj2Td8Ptd9xbzMPdty6piv7zfR6ooPjRqGXinTNL8vVw3MRn3ZvWdFyDaRqxgX7DYR2BmNVv8dtQ5cCc",
  "key25": "2P7ecW5ubFdfZQwf9KJR6gZVCm2gv8UaGC3cEN8hCswkRY2VpFcBxJh7CNpULChpKSwJh3Rt8Jtz5AcjGYJ9NW6C",
  "key26": "66cNqCfRvKipH6XUx7Tpuwt7YyEyVuuHE82WDuMEjftHT5XiQFdPA6P4DAKE7mgjJ74Mkh5UReejTA12TqD85e7m",
  "key27": "4g58c4wUHWgVs5sPrKvxzKgvDq8Jv3ze2ouX9FXuvad3gLcHtyqTr5N9MVXafJ3XbV7Se4LQ84m5GozA4jfxrQRc",
  "key28": "4Sm1CMCdzs5Sn6rmQreXVzFP7xmbL42wxbmp7XEMUFQ8LU1DE7bMJeboP8gWT56KYoM8WPgJXaJen6zrPq9zCCFG",
  "key29": "56SzybV4uHZUgWDUTUXBGfrPRLBYqWRagjmZHYx5JFpZFJxn1QWv8NdZ3Rip1d6VYFcsbXit652P3ZdK9qw3XAds",
  "key30": "bdozXnnxnBdEtJSHFVvRTsRCF69dBNYhqLuYUBaNsEf1kP3V8CX2aXQX2wLoRh1T1cpAt2vU1cmcqstpHWGsdS1",
  "key31": "3BLuYLJAEeYEskMMdWmSoJPp7TPrSLtxLq7Z5tK8s1VSwdFEEKcEyuCf85fnxULxax7nwAGVoz9V3w9Y6AAgbiLd",
  "key32": "3PEXbJbc4Rv21vXxXY2Ne9j3ti5NJj4jsRTSyVDNGYAxaW7d3pHBJvyM3EfaJjtu2iLgzefUnV39yYAgG6PCW7br",
  "key33": "2mi6CQ152XU2nhkFojYchVhD2THx6ocUDAz5yais3V3yBME77ESvGPnFfHvqjtSw7EMKkaQFtQ9danj6z3quRkjg",
  "key34": "4tmbribsPD2g8kFiVbKirAyLkxuDEYwhRnvc5sqUzCUNA7iHyZ6CNxgGWLDw6EvxWpgt7bXnnJ8wvHLjjA46wnxs",
  "key35": "24gfagPP5nhEWLyxXRLDRoJqvMEjDssLHfGu7VNZ2STPxHHLNLGB63q7oGof3wjSC6Gk6AqvkEFeFGA9LhsYXWSz",
  "key36": "21DUfWdL9WGQYWUiBiu37Jc15vyif2dYU8pTi7J478JmRz1HugPDzqaMgbs56vqgLsyEK5cNTuUc4W12jv63CZCX",
  "key37": "2mRa6RPexrAGKcWSUpH4rKW1VpK68XaMWNcn4V4fPe7AUQD1E6qCKXM9P3hyCQiZqZJUCiGqxJzy4QtDpzxpXm44"
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
