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
    "45sWWDtPuYL2ZKeZtSUF1R3yy6o4zq6JsUFtD4d7bNCgbrRAgHTajEYNfVLDgRgSRTptz3bgTG65RjwZn63tSVox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YkVmF1ema8cYBtv3pxt6vXWu65tCwC96oXYRQ9hbzqXj1C9aCYmGkdCu2ZvAhYfMpd5aqvVKrF1UBhyddMKfScd",
  "key1": "4KjqNc3cCNYgvXYMDvW8jq9j85Sc6ACppjJpsX7reV4exwZq8vhmyJLJuqXMkGobXPdw2jd5tHqdv6QwToWY5Z1A",
  "key2": "W3gd5joLeqJD8mXFWpz3FHhfSREU7gD8qDRYmgyPAavGGJY4tdLsJ6Z8zpcYoWwFTfpuWS8gPcEXc4SMVNykko4",
  "key3": "owtVzWkQv6XRM5vKfCh9VWaNURKxyrZUVs2jpAMtBCX3o24u1xd9LXky6EPUR1zkjsAVBQ9VfHsSts2QjttMM89",
  "key4": "31n6ozTfmGZSgmrLW6GwQ3U5n4h6k9QFovi274PiKcCX3yhwTEBtTtCu2qSLNXyjkErSxRjhyGozkaJoJBJq9Sad",
  "key5": "rLWxAWKFnfx8Sjh25KR6qXdQX9o3f9dSMQc9L3xsv5ssksh69vYj2oTA2rBpvPbvayHfpy2K6AuQfRDR4prApAR",
  "key6": "5QPp3EnQ6FXjULFx8LemKaxFC9af3UmwkAJcXM7XkJ7JH7ELk3zW7cxxJtQbgAFvpTvqVX5kEBbJkmaUyqyNsoiH",
  "key7": "4nmw9zDh95nJJcc4NEdZw8bykkd1kneeUVssV1jAhHgvF9P287QPUu66T4NVjrZMUaFKam9VNmw5hyHggB3CCuVy",
  "key8": "4BJTG4EreUEf9W3AQFkmnVjud35Lk15WitFzPGA3Edm9sWjBhDA9BcrLbrP28t25kLMYxKsbWci92c2pk28Abc5E",
  "key9": "RTgRJgjr4gfSrhQzpJdTg7kCwRV3wYfGNmQUen1Gu6NhHtr1CcuHNC6q2RNHeGguFSqjLKQBsNhJcRQYSSBPF6Z",
  "key10": "wMHSmr91p9HowUvaEHYCH6XYhawBEP9gfFZJ5LrL5wfAad1CmbmpBv29t3XvwfrBiULBnnT5DcfPSu7UhprG2Po",
  "key11": "4Pb9zfvTaKaBmgo8nEYDLmCvfmPcziNhkZXE1D6bEXdmQvr2pWYAyeVo4c9QxNKWXUAEeXgpqRj6FDYoSKGNvE35",
  "key12": "5hWqBgswptUXHDRE219cpfdqe4x7zBxYeFQq3vAUPunQYFzhCi2Wy66VuzgfCG1wSEPPRAr862wjFQZZrgEGDPJr",
  "key13": "EG4EztejKZpq1HUnoNLapwD5zdQF3vjQC6iHs5QJNvoqCvNSuxajZorvye6aNx9QmxaxH27ZmXQ2x735cti7xRP",
  "key14": "42h98ShcApkEeXp6jCuVpTVyjcSdavqMi9YWpiQDH7RhijM2dzMqigLXEPUfGjRQCiMebhwD8ty2BbL9SCjJprZt",
  "key15": "4FcRNKNGxAAcvteK4U3riAkoKfAzjEv6umNd43cwPSa6ieVUpFZryjwwqEBimqgh1w7ZPCcxQnLyoPFLG4qYuhYa",
  "key16": "5ek1gwS4Lm9xckQYQoJcbXnAVNqXeUgZRyFzoLesjFzPxbWPkYGkAG7s8M2h5Rt8Xeju3Su6wpbXsAsJY5956nuN",
  "key17": "3k1KwqiHQudtzpYRpZHhBkg2BBUXwuTWJ6vvPvxBKSw7MS9Ww6T3NgWnX9BZ9WVosoW1kZwUNdRPSbt7qLRd3noM",
  "key18": "4diuUcWWmicQY87aRoxkY9vn2H8oR4G5qCwjSuZDTKS9mUTxPYeH35AJpLzNyPpPAmhfus8RNuy5Xk7sQHvqFKZN",
  "key19": "3jVxHmzz4Zt9JtvoXoEQKLkK24NW8KkzRDzFKkg5SzQamsGX8EXgqCaHHQ56Qq4mkqJhkvcw8z3SCEYz2aUDALEj",
  "key20": "5hjCCdg1uUdqPh14xD8fBh1x1t8r9EfUvfYum3eQouvypPfvKtive8FsLWN6ExY5yJpCAwCKdP7izgELMgm6nYQZ",
  "key21": "29crvC45UgjfknAivvZmQm6CnaZ8mHqWwn94z3EiyxmyuoboixrDZyFTMcnWyHyZaoRn5v6tyLZj165iGNxyPJcq",
  "key22": "5GBQPcVRiVVCQJb7hQu7yrGQWNfD8goZqhid5EzTAxXgzE2ozRQhvN364cMJGcA7s6W7HE4YqsywcSzppMNvmWHy",
  "key23": "2CGtfPPqn5Z1pEa1seVSTF6soSzZGbwCspz35RmuFwF8awXcUEeBKL5mnH83G35gPDyQ2Huz2CtyS4WnW6fNzBQH",
  "key24": "4Eg4ZqFQNmbUYKYFtZ9QgvPaFgqS4Vu8NzdTor4DDZgbi6kdVPqwdn2duPLPDyC8nVP9FwaSp48te7x3faZBvCWm",
  "key25": "4KrMXVJYGC8PZjFkRYYjHzkdGLjWGgT5igok24FAkQP2oZZm93umEKvEFHsLZB3qx547QgD9o3bKTzEPrTe9oHoy",
  "key26": "2JZ5WFfGQS34P7mdsd4LZY31Pdk3PCpCXUECRC8Y2KfgpwJKuB1nqwVqAyufj5zwafeodzaS2a8YFStZNEvk3Pwc",
  "key27": "dCV6ZP2CfCnuWHyMxRhLjB4MTPXWqpEE69hja16PphV5FWTJChQC2SmF8C1bBE1LoUgx5AS8ad3M9515VEdKL2Z",
  "key28": "DrVSYfFe1wbxirvB141Ps4SALdWXRkvJ2zPNGduvc97aHT55YHZXbqtrKX4suU1xxaFnozkyXYEwCFfEDmjvCZ9",
  "key29": "5qNcVjW49i4xWtHFFKCAmV6pghDZj583W7oHhcn26REA8nP3TFS7BRBhVY8yQoGpWU7z73FEY7Zk24uvG87wCPP1",
  "key30": "46CWnAs8MB6XQFRemnYr7wrWFnm6x1M6LVaTAfXTqhZ4i36XEZJXpQMNYMBdFkKq8c1Vn8JmgxqK2MLr4CGp2A4J",
  "key31": "3YkWAykeVHeBSbfknqgD5xXiBXhkSohYQkHk3K8MybujWgDWt1BibkDDYcKfZrcetFQHXtFE2DhKHRX6FsvpvhKq",
  "key32": "4mUChQ4WrZ7co64iLaq6yfT6eJeRoQq4brgviE29aMjPvqhHjLDB7fkZB5NhK24t3kK85ecSfA4jBJDzAUPdy6rb",
  "key33": "5mCu1cZTZZmkDaG9f8tPojyXEi5dk1jGnZeUvifaZiBxAAZVQg8oUBHj34SraaDEYPk6jq9zqVtqs3Lhuw7gdrXe",
  "key34": "7e5pWTBweA4fYqkGq6dYPG7Nh75mGR2MMWD37YPkeFXwrzzSPZG11iRAWdwNpg9fDX1pBjbzaLZaoX8Fo1PimxG",
  "key35": "3cvEZXcBAyo4gjZNffg3RMhRDxzxqsvHP2ELQ8LdAzqHyckjEWvunEfXqZXVNwNrmbMDW3kYddKMAtLzqi9shFCF",
  "key36": "4JZb7FVo2kciukUANAUAW9fDWUKA7FrUEofqqR8z6QwHYT3j9Fz4jzxNrBHgjUEh5QPtTC3DSmhppfRrGxLP9Qs6",
  "key37": "3aW52Q3YgF5vDzavDHvrBRXw4UVY22zPiGjwgjuYxwrQ8Qr2L1tLhAopR3wzySqCfZpA4QW94PW4rwFdb8zP1zfb",
  "key38": "3mfe2qTBVT21vkfdxqUTbDf8P2Us257ownv8buhzrBBv3CvcL8mB1RXDYjPxQgQSVa6pvzt16cy1PnTi8zPsyWLt",
  "key39": "5iXwzuSx1egvPE7tBw3h5LYVHCC1PzTg5T1nuJ8kny5cGwh8tPFFjZCcRyTUTNtFH4Pb4ck3WWmoeCskh7KF3dcU",
  "key40": "Wv4dsPkmjTwtyJ4k8DCL7hVkxVTUe5uX9zM3BYoNft9NwVVo4m7P5wzbMGJN78yfbEuAUiWUxFBL28tgFMXmQja",
  "key41": "4sMj1KZJVxQbxGn5tm4JfGx9Edn2oXYcq78iF1zaiHnvWLbWkJjNfCBZfZhXA9ttiu1MwffsDhjFbbBTCuj7SHMu",
  "key42": "3vcctqa7E2pm4yLSQV3qhf7xcyyWyVxDAubVrQefbEH5jsGBUaH1U9j9dfWqrebpqzcNFNbif7PTaFUKe8JhCqiT",
  "key43": "4jC3ER1ZsL7PzkZ68Ufg18noABJLRiSkEkSuoAXEbyyg8NkWMnDFj6CSD5v2CSkrdLtQVXbs6wFUhJHAyyYwhYx",
  "key44": "3sD4h4StF9Mwn8zaUBkFPnvzqBo3yeuHLtH4zVHFJ5wzincbo5nvffnxhSdD6xsxE3pBuCVSAESvCzGSCKRaRbbE",
  "key45": "AtcM8zVYGSPHfWhBJDAee3ytp1oKb4whAFAsP1pySup1RiUBP5wfhKQKsQ5afup5fckzfmR13PMYEhkkgBsN49o",
  "key46": "63fZM2j3LckfGVE71kcerLRkGhgCHF2MZzoTXjWjwRfLxwCJnyXX5KB3S6pjYKjdLY3DGoibzEmtD8fhpUVR7uAJ",
  "key47": "2cEf4qXfnMiLjC9imA1QBai1qxhbsMuVxchJ27N2QAthTdweFvgAbt2aA7YpjiuGJ5tQ5sUbEsSh8i8DYN9Pb2tv",
  "key48": "4kwis4BAYP1zhMaPkQDAuBX5bELHB9ubwP9D9VST9i4Fjx1ydLGid6P5Xj7mYkuPinkUXBL7rHxFaEBkGbY2HXvE"
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
