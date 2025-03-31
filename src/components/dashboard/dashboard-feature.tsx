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
    "5Nk63xYv8XfuYZDtT3t1fmg1SguqwXvmMWZ8z7SDisu59ENJhCR2yw8apWyo26dUhydh51zRD5wncbYY8oeAxZvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ek1gmjRSSBNiTXmim9AWLx4zofihGFHFmFYAEnWVXG9VdoRm8DmcEy4axCfZPZMt6xX1fYmwc4ipyrrRsfvmozM",
  "key1": "472zAuJF4V14YbouyYVuu8Z6V4SLP5ztTTXgnHuuoNXYswcQcgqom42X74F6wg1rDSoyRpzyQKgK1dZDbRDEdxRD",
  "key2": "3tnuxD5q5c4ijbvjmomZnCn61mxgNgNRk7BPwAgwH1XzC9vSeRTprYNHMBCy1Rz9d6uxQDD1G848cp2ztaNjg8uK",
  "key3": "2WynmSicmVJPjV5pv1XDnT62TLndPudrab75rTV5e1fN4raryyMXRh1vk3oo6vUDeGmJyqhwVZE5Fgn3jFKYT9d2",
  "key4": "3eDWtMEKVuE2ZG5pqENnquMqY2b2JbTs3pEfN9acyZ9krTgrnRMXkAMfZdvDQRqTe7yRSCHWd9RE8YWRN4sUzi4x",
  "key5": "5jTaRCRwF21kaRYWCH94CPYdhnSst1irvicoirg6ph5DyuKpL4hRPzc66B5447qLkhTHahpsG7thk31qwy7PsRHA",
  "key6": "2sj5YBKRAcNVm7kuNYS4xeReT4pZHuf5MREUzKYjtifrGReT4Tm9GXY1a4hxxeXUj5ktv8U4KUPTuStxXweeP1Mu",
  "key7": "27vTZJM1YdzLgpsWdpoQwwZH5qXeTHCNcfB8XHwWWcL1o81B6kHZ6doz1hy7HhdhMkTMYEEpXupHQfoniLR5rvDL",
  "key8": "51Wm9sNcZJFramEBStuaTVDVPa18L7UcotFNKPvVDR927rmTjutfwTPaVjYX56Q73Y2peUrnmVscthq2gtSqgzn1",
  "key9": "FoexckEKruAfhFvNUDf5AE5NdLKae2mBQe1SoqVxxnEkWcjriDmB88pqUR23zvYPCyu7D79fkNsUmdBMLkfkn1b",
  "key10": "52LBf9BaXk2t1bxb9H1FQ5uVRt5voDusELigQNUivQNvD7hxuQrmzQcyqsRPf9ms2hGp4WcmPEqXy6Rbs6qKDWER",
  "key11": "5kVbuM7qw12S3Q74MJcAN1XA22nQS8F7UCdY1pAVThQWaZHMvaDKnMMcKkUAMUM2ewy7XbwJ79T8dhkwnBAfyrd",
  "key12": "5hp57CajnV6k2LeoL39naLGscPFW8UAiwsCa16Vqsf3MvDnQedLfcLesge5G46y1XuhDxZM6vryeBzyHgWGw56TA",
  "key13": "4yajdeB51AzsHSHr1v3rFg4nnhTj2kCQTPsqmhbLQzVwmT1EDg33HUPCwiBbX4Bb3f4zmsvBPbcQUeC7yd8ZMKgi",
  "key14": "7JpGrFNfaWoL4DXPwF27tX6KLzBqBZy35Brex1gv3g9abPAX1eLE7SXeLb4Krk7EBGLktBHfmatzdWv99LdupKY",
  "key15": "55mvyYLEaqwMapjktVFNm9DA2wtARsDy3URYftQEkFSBHgjRsH1sBurdS1butgXNsAkaU6rLZ3SAC56gdfZo4P5c",
  "key16": "2HVb4WC5w3yxZKbttvo6S1HiV4NnDjk1V3rEYaFZFutwP1hqDaNbKydjwTus3AjxXR6H3psqqsXe5kzFrH9hy7TB",
  "key17": "58cJdgbBEdM4qw6Yr4mDnavcLx9XSLve1ky1mSM7tKqCCk9QPH7Ds1NoohknMgarTGofjArYuqD4UQqnu9oXHoi3",
  "key18": "45Lzh9tGBbVQ2W6n6pBrpawKXMuUEjhZEekfPu8HAa4uPsdrUq182rb9Uyd3mGjjsUeA22FbLXFheuZZajyXXs65",
  "key19": "2aYpkmAP24KwWcVJuvPTjD9ZKNiPzzViP11pQR9yvE4m1iPFMjW1wL44LxH8dHzNoVq8BKyPLy1z11o97sHiSw5f",
  "key20": "cBvbMwuEbFSgmPhCMoZBbEbGExac6BPqpaU54FexAVhSEo5JkGAB7eiLhRi63DnyEXnbwnZ37pJBgwZZ2ZMpWa5",
  "key21": "3iRWzERA2K8SWPrbxKYQC3rYh6Emt9i4GFY1NkDKC6PPa9Gr5HbjfQE9izPuc5BH76EGsVy7vYu1Zc5ERYFyLiJY",
  "key22": "4VezceTRiCqc52hLF5CaKFijSyV8VnE5UPiKdjPLiK9veehgKizLSY8JnRNrr2jeNUCEZzV5vn86FGY9gCaRag7c",
  "key23": "ZmAsfDyNB63UTdMJrFMAfJyd1WaGvDLBQzXkuERYTVfQMV4pFkN2RsCmu1nshnwNL1xNFW9dg7eB8CkGcKTxoWW",
  "key24": "4995pVM2CSLhNjt6VmvDwqRrqxfrpzZHWtRttYen3TqibXfnZFx4xoNDe59JDwwMNVJTVdJ4YhELvztdSyvGN8dJ",
  "key25": "3s8p4EWUNqagFL7ppCCvXG8edar4N5rJJy7uD9odLPGDWdg8UspjifBYiWvFEVpqBSpKn8aEtWZ6BMSu9CNjthqU",
  "key26": "5BnKEy4uQ9oiWpiAhcKz24B8pi4qof2jqthZvFo6WJAS6tzkzbE5HMStwCGWGkraJxri4GmFcn9KqQhCwUGsuMCF",
  "key27": "4SaB28E14awa4q8pyq8EoYGf8aQ8qnuf5wC4SyzvzZYGD7RwQkTCqmJbTGoEAQRvzXdRJHiDGW7EVXa63dK5R7hJ",
  "key28": "2AYqsSTSRzq1UUg3pkqNuDWG7xYmj3FtYTLriWq52k1xa7Yq45jRC8BGpjUsSbmsYN9b8nW9ZZo7BnSXAk4QCZLk",
  "key29": "3EmgGAT1GAGS2iBmgQBEHZF6p1eJ6F7netFiS35pNKnGyDNRBGBzFhR9ajdCcsrogEfEKTwKmEdDqTs34e5KeY8v",
  "key30": "3JefZyWktcu9FNJcYPDj6gLq7K3jWRfnfDy3xmkQpgjGSbYc56Rf6MpNZW4z9Nu9UUMV2kffcNHgVkFs2MyBtfGV",
  "key31": "M6QVc5vKbXKmz9NZBL9u1UusnQXip67pyv2BA5MgrGdHPN5Kj6hhAqXP4ZggtJEWrdGKj1dXKf6mGLcyxZc6P4D",
  "key32": "4sv7yf5VebcsmF3GBZivHgva9aswJYPjPBRbuMZ13jFoFsq5HvDUcjNC1w96Z7EBTh5FwZbvhW9pxt7V6EKU34pZ",
  "key33": "44KnhrJuWfBomEicawuxsoycaMvq7jMRKfDNngY4uVpgyZK1FwSmQEwZsMKAb3NDW6dehhmAMdtnAnSGxShx7qoh",
  "key34": "5C5TuF8JZhSnhxb9NRJqqzLRLTeF8FertUbyUvTgXWBvvaQ9Vhjtsn7RdXz9KyBRYauiMA6EKvkKcsqCjiEEpxKv",
  "key35": "3k5hb8CNnYMShhv7D5yEbf7BstGoVtnGiDXeb2zjfQSdc9AzdGzuT9mgREANrmQymPhFd33yPXq42RDGCwJECvKk",
  "key36": "4hfY2auWxzvLG8TeNMXpgfWx7R2d1jRhMdbchtuAUidzsscSvuct5KngcWwbEDbW1HLgEg7BnAxkE4LwAaJZcE3t",
  "key37": "4TDsw16qAKUmFtQd4c9qQLowTWBZ9jHBECZWFX7eqcvXgZgnAc3Xdp4sU9pWctgzrKf1vFk12Ujcuo9wFqk7GNXb",
  "key38": "3SDuL14wagAH6CFRg5nWXQKc6R71ChaasXYcVVQ1VNEwDte18kfCN6c8mmrhiLZyvHxd4Lb9Syf1riQG5eUGn5kK",
  "key39": "4XWxYPTqm6oYVZESk7psPGknMqAUy2cdCupvX8J64y7i2UHA274fmpFbTvKYCx8HTHrSts3Qdspbiii9ARF2QSrq",
  "key40": "2dgFMhzTKT8YmJMeuU2248yKB4PG8PM84aexuxpmY9o2vxX5v8ebMvJ5j8cXTLiYhB9R8upeyR2v3CaKHZCnTi63"
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
