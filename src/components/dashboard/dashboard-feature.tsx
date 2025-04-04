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
    "28BjD8gaEhJ5LBGiQjWdMrND8CDY9duyZ35BsgHNfDv4fyysz1a8faVdpUNmBp7wYnxUjYPEb227Ng4Q1gmy19D7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FnvE1vmSXiAHAMkHw6cEdzzbSgJ1TikbPKKFQfkcjnAGNeDmUg6AgJNdqcJgUEkix1RsGEfBDqSSMbiGvP73kB9",
  "key1": "2zdoPG1Ba3nusZ1Dy2htyMvh4hC776r1HbV4ZQweoppkg1rC8ccc4VURKQBbTSTcJK39d46x9L3DN2geCBSzmVrX",
  "key2": "5Xiij4J7jN7RpfFDRkVnL1GsWpnjmxuyMaLTbNPTJnVoFrtxdTrRP9PhwQmNSpEspQ9qHVE72ZuveUCJQ231iYmg",
  "key3": "4CqWPtG7Zjm4TSWegApDUE2xLGwH5x7cWmsNJcuVn86aSzYBm4YYn6QBz4ySXdzGQgbzisWDQvDW5K7EZqPcSHyq",
  "key4": "5LgTo9uKD3F1DHR4AUF42rvL1rUxJP1eiQSbZPmC8EMwqfs3Bh9bb1VsdDFMy6ckuSxdhhnZEFZefCtUqcB7rxGw",
  "key5": "FDszUvdP8FdJsPUNRwrHfrLDYyUZaC9vriLga3o2Ub8GLy3djngi5mPojpsPJenWPoePcwiZ9hgGWGmsa93DTDU",
  "key6": "2yS8XirC4ac2x7BmJzotScnjCRhpAD5o1yKjUBmhzzZL8LabZUJPnChSPb4FZ8g1KgZ6WfLUotzMo3ZNsEjHm6X8",
  "key7": "3fjCVdNNJtRRJF2doVsKZYeQwh3sPZuhxuZSyWgN2rkZNqZFPaNiMtBBmLycbykbuhpZKjMkyYwKwV54qD3P3EqA",
  "key8": "5imz4C9QGBG6gRmYTekCE7UnpjU7LvbsADu8FsR6i4WsKpiqvJJRAhiNWiMC6FLAyGwuP49FDeifRi1y14Uk9uoa",
  "key9": "HQPePobFYTaSms1Uww2w32WNWrdsCj7xyXQty7HW8KnutjPQd5rHqHn9GhREWtQWn2jMkfoT4A7QjKuqbipxk7E",
  "key10": "4qZEQmKdi41D8opVQXwsyWZeYKmzQK3jT7GTb2VzS5yu6EazphDYGYdeC61fTHHvHSq6RLXx5mixhmVrQfXaCfES",
  "key11": "5DG7ppFa3BbyZFBnZ3pmnUb5sFfR1kvUHh1M3HadAT2mJs7WTMPiEM9NveyTMEU8xjSAxtv9xsNRqpUSD1fabNGR",
  "key12": "5fvGyQhLH7ZugWMg8Nzzk6ioLZ4H3AaqgWRc1GpVVn3D5i7vemFewWC3s8U88p1mbN7vmQjPU9FYQZbVR4P6o3tE",
  "key13": "565C9nUvg7kUma5eZTYUN9Je9LQ1Gz6nA4QVNRxFftTQBAdCxn5wB2XPKmQc64ofo9miZVxE5WzsoKxMq6Pb23Ma",
  "key14": "4dRstPGXrq69nKFMT9M9yuvyH7jRzpM2yFFMvpQDo9bSGu9x9Ut67En8Lo9VMikM6G9svHaycDMWEdbGt2um4WhE",
  "key15": "2kSWT3jgfYb3eKi3fFBWSqVYBtrjEQ2w3v4kzvJhA6wzdfanPfaYeiVhT3uhYc8W57959hRMxUxmmtaRmY77EbXD",
  "key16": "2DafB4f81WhcNBv1qgV6BciSb2cA6daViTXQMuPVJjxwasbx8Sh5VSQE6n7S8pdDKfcFhWhfrv3GCAK38oCFhD71",
  "key17": "3bpXVtSLWMsaoLY93WfxpcNUmSVF3UiSR49v5CHxTiVeu34wzvtP7B6c7kxZgjcJSwTbFKEpWZ2u9bqxzrfSWiAj",
  "key18": "5xvm2NhTSyXW4NwFWW8z1D4gZVRMzsHtaLqpLUyh5p5PebbD7SQ2ki7MxqHLsiqxCaF8buzPbrBWsc6sW4fL2cGH",
  "key19": "3SqmB6dedCLCrzgFXnccGCrQRpR6KcbeVxfW9B2u2tvLShQHNJgMY3a6gmppQxGGav9uZxQVTffgmoBeeRCp79FR",
  "key20": "iH3AHcJBYSefU85SsGUHgd977gAPo2veYN8vyXNx1UnEJXxjwo58jhLdrPwaorXwkkGCiujiiCubND95LPKEpfy",
  "key21": "2kdueYmVvDqAVDG9U2ymb41pd5tQLDQzNANoDo5kLZADyGTGEiMDPGivMjKnPZjvdokoYyfUbk55ntvBLkZsxATY",
  "key22": "LfVtfP1LPbBdafFzRf6bf7ERin7xWfnbWQcK1ecAgqS4QA7BTvrURT7U7UNGw1PA5C4FiH6g7WcADJ6LPUAdSvn",
  "key23": "5z1U4QrN1uMXdAZfDpFdE5XPirfhosvz3DR86d96rLyo4JAALZJYbtDCKUmkpg4yKkKHU29WbE99ofWWNxbPuxnd",
  "key24": "4sErjhFPYrKZrmAkCjGyLT6ScPQdVvpGoeMq7K5mk4Yo5zXxeQ9Jvbh3jPxESwJPUv89S9A87YhqxqQcQxeA5GVb",
  "key25": "uSnjfyEeucfdkLjs6ZkK5nADTfn4W9pbCyJzytVf9FwxbptUA3gHhUn7fQnE6FkmR5A5rvNBP5a7KwzkDV77zo7",
  "key26": "3VX8JPmKZY7Dabtz4UL7r4QyJdae7iqKHBV46qvtC5BXTc9o8WEEchpVXLi8wwsZqLpVBUj5eYGX4cSzXhJQH6To",
  "key27": "n4qXTe9xPk8GGLvntuh8uPMDDA7SMKQbYhbuza5oN48jxtMsNQMHaYVtcG7wvJM83RmPSez2T7qtq4jffDfpgJE",
  "key28": "42PCz2L5FMzYTpHACZZRZXb9zXVZvFRyrC1LWqnWqYLFCpNYKTy974EcFdRJXSUocRtXFZ4EpY3tDr97NTfQ7FEX",
  "key29": "jtdyqY2Af6eK5goVm9Vtvmo2BkMpQdNW3FobsiQ5GX7ECuNk6afkATedRtHtwrLZMwaL2ar234TdmDWe84qutiy",
  "key30": "2LZ1yZYwJ5bKSfFf2P9WKKJd2i197ck9LR53tU5NE3iZnuUzPxunYhQZCPkRH93Z5fpWaUMvep6hA4KaG1Ac318Z",
  "key31": "5CGJdkZsWusmhmMEYireNXEpxm41xS8WWspxoor9NGmUmAfFRam3oqo23dX14jRSMJNyVts8jd1VHxV9N1H27w4o",
  "key32": "36imisUixckKbaxrg8cDQCmRUkp5DoyiM3rerKGoUKWvpmTEdL6xXZvFMEHtyGnvvhDp8B15t2394mydwDFy5Xng",
  "key33": "hFGmYJ13xjpto1SSjdzDW4Qv54DaVHXHxGaMvmqZeMmeftvTzKPXxWUgKfjXhMXuu4drgryhAJMMrfyNYMAbn7D",
  "key34": "45Tc2VB9bE4kssesTrRP95sAaerg3k9hriBZq6iv2xnAtWBX4MXRYkajNkMoGjJExhyC1VMbEzzmZbjcUoQg1tNC",
  "key35": "2FKVsv4kVbHUdm6MaynAVaLXgC1mh32K9FLLHnNtWas9Knk7d9Gsn3kjopSZ1YAhbUBh8PEAPf3PD2Rr9BhMjmqV",
  "key36": "5USGXhsSHn9kKe2oDDUwGuRX5gVJhRhm1atKJgZNop1bStYWzfnKygE42SeBcFVM5mxxUZ4WAfDiMEyQGcbSwoWF",
  "key37": "b2AXcCTvBxA5JLvcKfoWQXNFPoJqaeVyvUyHBwkQdQ6SiZBvJ22am65KaDzdryz4DWZkYoWWavhPhFFSwckNQW3",
  "key38": "4r8wzCJgXxKVqyASHAN5BaPar4UxwNRvUoyWaVsHQJmyVaHXgJmvfJAL4LkeoiNWZZyfVdhqzd2kpBxEkd8hYaEX",
  "key39": "462h5NHiHZ62wHbQpqTj2PyC4uq4JH5rPKgAwJnbuMJUJMgXmynASrJ4xTk4sE8bfGq8pzByNJeCaFfNM8P5e4ha",
  "key40": "5nuxrSxX8qsDqXrL4FqUYraR4ErBMginYq4W3rYSWGCWBPhZ9BF3P4nHyhA8XeZi1FhhQMFnJjWLgSFqipwq9zaa",
  "key41": "67V5Lbwb2YqDM9x3mz9Hyd9a2yC5SXgu1E6kb3t2DhD6quVqiExQ4RNxERxnwA85981u4kXgXqwsSzbsxoYoVVra",
  "key42": "2jEiktHLuhYiQrJ1nWBhR5jbbuxdMi7td391rkuWDfPaqCsDMwS17w24fwFyyZ8npwX9DxPWLHAKvh22g8596iX9",
  "key43": "yHdbCAXzCdtsgnrZLpAmGouCmjxA4NQwSKBQSRDVbPL7FEvkws2MjhDL9AERARV2fif19rqUMiWVLYGsS74HqNE",
  "key44": "4Fi8yTpKYb8HsQj4xLdffynhyM4tHQRJMXGXRzaVLP9ok2dtiugpLxxW5r98qnUPLQTrL7eGCxHcxYnmwjXxsVqk",
  "key45": "4JpfQyPUJ83bfDBXguccSd9qeuuprB6zbJaauD2mPLPEf8krASRwcgXscZhB4bbjMrf69Tzg5qDPJdiVHheY1Xgi"
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
