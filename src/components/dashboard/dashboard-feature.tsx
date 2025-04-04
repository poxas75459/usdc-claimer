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
    "4FzBAsmFxhihqwREQNup7WWDKcHVfWxw7QijojMmcADKTDYMtAAu5exjBCsaZnZu7Ki5aWofYRpaBR3aCF1kiiFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5urWAZW8dLbwMv2wurr3tq54wmGq6NbrPi9hFzLyCkV4dPMXSFdq2cus222fRoKysgZZ5x4397yncMpWAiBD1HgF",
  "key1": "5djtfPUpkeir9pFuJ2dAmHiHXDbJTp4VFPRkxyCwQdJAZv1zZQ7kpZPLcgkmjh38EgXuEsvB9zYFCacu4tTjjacv",
  "key2": "5JgRqKj3FSya43E57rV9HZVGLQrXw2ubKS5q2EoVqkRcRdWCKzVQJ2pA7SzipWHR5NSmtFZD5EzBVwUf52ET1h99",
  "key3": "SkmXW7QzjYipvXG9rEeAozZfxcysLdyXFZv8ggs4bBFx2DAALV7vJf7jn6WuzhDEjEKa2zHaNYZb1Yh2bd7vt2i",
  "key4": "FtGPqLFtWVjX16EBRgijqL2pTkBX4iya9ZD4GXQmYsAKhaVV5xyEiFNPRTF8uU53BmKsFhZ7zQ9y7QHyqRt6aix",
  "key5": "3NNJVjMVEg8gF4ySzPc2TuWeYwnAYEx8mYHhBwg6wtCSogcQ2s9kb6zZvs7a1vUC3KAgHwVxCyPKKqijTr1ATt68",
  "key6": "3R8srqgy2s3Ua8E6UvDEiePTqwcjbNYHz49VDvETiZyX5X6tZ14qcPBPXBWajycBFjoeAxRZFc91mUzK57nkN6tF",
  "key7": "129LdgSjFfGfLGCLpchyhdo6QPyhG8CDWqZobm1EstgFH8huvvso9mdtPKCoZiRgWrjRkrsKamfaFcfM1219sotU",
  "key8": "5HJcYMWwpmqKtZV3Ere9RCTGAuUzs9KJU8GnFh8dc7NwyGLG34Zw9UYZRFeeJgXdPEmMKVN99DvfAyokfPBMcQS1",
  "key9": "4MnUY9KvvsHeRfswS4uZRprJR9QmMrSsb9QqnzhZsvtwspbxAwiZjyYcJmnZJRmjtMJLPVNXXDxUwAovaj1p9Bpr",
  "key10": "2qNXUpg8YEjtnMCDAR1XyqnXbnFh2Mk5ygmY8L6KTCzfRdLBYJq8gbgtM6mgqJL1hPawD4aNrm9ohqP23kBqz9YZ",
  "key11": "2dh8fGjzYxdqoSNfydnLnhAfxkgBQ8cTC5exdqNWoPRPbFHoKVMzeygsi2MhT748PnRivzZApCxL8fJkeHUxKe7A",
  "key12": "37HAHshXpKBtdNxiJr6xZHsb3CmPvYoWPqDHbcCPEAs6vPuqMbvxXbdx2vSLJQMCob7JAaapHHRfipoS2Y8fyKcT",
  "key13": "2jU1QQwaGRdAmXVzgYGU2etmcT47Ax9x5mJBhjNBNcypJ5kHDu9sjKFYciamARNoigct9Fpp5F6RaMgN7sywyPzy",
  "key14": "21do8KtAbBDoCoszYkjRp1EhRBVFbZZ5mtgvKvT9jbu1uzaSubHM98LRKssuwrVCRS4SKti2uQ1qPKfJTPk5oZjv",
  "key15": "5mRHgF6JBxKmwBTi1UkvRheihj9uSPtsHdWQQhtxcxQJvSj614fd2n8BEwTg4UTxjSuhiR9B9TDJCnqZWBVDqyLk",
  "key16": "5dKqhwWsBr4fdj4DEwWGSVKmxmpwZ5ecXs25yRD6dMcn1MdK35yKePJ9GhpEEDztkSChpPPtcCNdE2u8siRnsLVK",
  "key17": "2N76T4Fa5SFcxnLhxvtwYfAHGKHjQXA2SirowxV7RVS5g3G8UZUh9xRTyM6y2fNAczVhZNJN2Uf7JFP7z4YVyJUE",
  "key18": "4296JQCxXR4BEexqNqJMpfavxr8nPtCPj4vsoBUKL2APWuGSwfeLDhrBqpcYBuznmiDqNZFcziZPtqtBGckaXnUq",
  "key19": "33nJWs5VXTMPuGWnwRBohqNbyRwiHLG99op9ESSjWMuCrig6egeY4Rf8xUbQKKPeRXtDo5X3BtMDGZ9SiDds1zyx",
  "key20": "3KiSr95Dbc9LXWKeXafeaY51XVrEZKB6BByM1i9U7Sq3h3EYk28BiKsN1jXYoJpbfK2SUCSgqefnWywSE529bBmy",
  "key21": "ysZZYUSfesf7j54TViFssnH8bke71uXnzeJexsXpMYqGyAR7hQ7raRC3QAB8aZ6vEeW6cZxiMEy4Hj5UESQjbRq",
  "key22": "34kyD47Z6N6XDtM9t7LbegkSgS7DDeEKSQtA4d83AH5qMPKnP7QoDsTBFNkzd1dJt5fkErzgkipa15u1rEoqynNr",
  "key23": "125Q6Q21DoT4bNVrWj22hKWXBb7BnZrgFXgtHKDkLkND3FURx9g9gDTJp93i3KjSfMQ2B2rkgWTe5WbH6d4JVVAG",
  "key24": "56waynzGqXWN4iHNZSDphGQhZ32pe2VsNTBAgVsaME4wPb4ZGP7MRvF21BHjMxfQRgSxnMZx4Yr7EgE21KVip24W",
  "key25": "4aVpwPSh3BeSnXWtKQjSkz57HuYbVznWeCqmVceS9Xe6XWYVEWJTU2A7K2PDTm1JnCJthrAKLswHggWokyhXPQEp",
  "key26": "4Kzfu5uckvL8JN4vN3x154X3qVYyC5MncSBtFEXjoS4NrDwAXDbH7tfe2tnmUJfVt8BFwKAKsC8MSoY3bhop8VPX",
  "key27": "3vCf4qUeZss84ppL9KSXHXqcSRYwdc1Ktr6uUi459PvVmX2pw2koUmf5BTyXded6yWSW8TnitoWyiZe9TKaAtRYp",
  "key28": "iQsNxqLPm2T58bbCaYQHPrqV23rTFSPJWxiCMv8CDhYYRRuPDGyQhvMbNxUSssgHTgNaoEHcqh31mebURuFNT7D",
  "key29": "379TFvqy7a4q6bVB6wcSS73YzAGuhf6ajzNPyAAd9TKBWYbNugn4qU6K5VHQRcsSucVCwnmACMoqU3W5qaG1Pd4p",
  "key30": "2t7M1B5HHWHppgbNd5VMvR6RRbaoKxM17bmgg68GFPf3t5SFAdUdabuyQKtLG4Rtm91F6RNqDnWKfqUtNzxG1a5t",
  "key31": "2WyQWDuNfLJtL3r3nC1u1cso9G8dWKa1Dpnu9BMhAtjSVrdf5kW2sxNrMV8jv1ShDVVt6jj5Z1frFTqVxS9DRjbA",
  "key32": "1S6k1t3tQVs5V25yQPdeR8RjvbC5HA5QdsgGRmpguYgkaChuVxweCy3Rf3wEm1o4hYm2iDtrksMyPYM5mAPL7cp",
  "key33": "353oY5zjBpyKr9ytvAuWaXRdRxDDMRV6YnCYYnT9pBpDj6ZQXzCMg6o8kS4FeQDf77ZCcRJQnnHgQ8rq6EDqWGue",
  "key34": "4MLLhffrfFLT82Tv98SGPQEFUmx3EqUdcNekstTceUQaCVVCPHsxvHz5DSAFw8zpDrrkm7HNwm8kGKQ1oihJ1bcz",
  "key35": "eJ6ah6hoGv61K1WsumTt45YFdctsV3575PRY6fdqt3mcrUvPhnm9L677hvvEaZnMMFcL1mMM5bHwdVvzAoQWi6T",
  "key36": "55C4KaCpzfobzCzrU24zF3YtEt182cRW3MK5iCXky4zPqWAVxBFPtrNjbUq6m42RV8SkcWxYVkvLMjawSW7B39Et",
  "key37": "4abSZXWZMw42jq4THSyosTCvv5m2Hr92bifMBmWwUX6sY6Lia543TxnmuNTFqN2Xwcj6N9kiNYH5WYGpaUioGVdr",
  "key38": "2y1Kqzep9MRMLAgYsJq3zvPe6RxsyyDVq4qg423LnkN12LYTnEnMZv16Yxcn9amdAF49tq13dSttBQeVfa72unQj",
  "key39": "5QWAXPgvBjnQqm9syzvPd2vKRmYH9bbCpamYyScLgM95HXfNA1sXa7RYU81FzBcj6qeM8WBScE3R8fnScKj4Kepi",
  "key40": "5vA9xeVn6ta2jRjrKWo8Jo44RcTaCxxAbmJGVvdJd412hWLKR5co118qq2cYpD4pLBB8bfqDqD7E6dusLQN8sEmY",
  "key41": "26CSPwCCXVgFipquCoqZhT7amjugY5eMrUN4ZnqhNrVBBmWie9T2ALaKnx7rtDLWqy9MpGComH2zw4XMob3P2y6t",
  "key42": "4b1xKSwE5uoi84WQzsowp9c5DK5Vy8HSYDeshZD4z576AfVybdk3se4GZyT5iotYBSZPjiQg7SEfPskF571RbWXr",
  "key43": "2t1JSG92bbu23sYAZB8RfabaZ2iVm2TViys68d5e7nGLdgHurmVj4FV4cfSLvV793Ubo23pzGqiotatD9cHhQCuN",
  "key44": "58x4ypX5mKznkzDE7Kapg7xJAM9vyxpv7vBMVeCehXZng3HUFGgiZi3qwX2XiZf7qpsE2iWj8ttKwtKxioJybGnf",
  "key45": "ausfEoPECQP4e8syMk4kogRKdFkVk3nEkfmMMVmjK4cUTXnYKxVzQTpfWaNYAob4D6GkR4528pvuSQ6SKnKuqE9",
  "key46": "23dPBA2YWNV7h54Yuad1bCJ7zpy43rsihndwDAJRoNK4hcAnSd78c7eMErhKctFqpgnjYxeYyQZ6hQVMdZq4H5PR",
  "key47": "4Ms43FfoZe3NAmNVfUrbYZfwmDauS8z5acGZ6S2D916xz615HLGv6KrfvUEpozv6FRtydZTVatamWdXuHtq4msAm",
  "key48": "2GRJ4J1LC1mzPE8CymHququGmDkXLrK5YSxkzBmXB1iRwidGNVyUcETFHj9sUJdpi745JoPtnaV1AT8j5BHhe5sv"
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
