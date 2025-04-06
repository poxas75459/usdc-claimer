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
    "b2izXwrZSEPqzk2744j76ESpwx7XwAt1qxVcy5BBsoDF4fV1gZTeS6MLNmSubTa9F1L8X3bULH25BNa9KAAmVtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SujwfVQCeZ2UngMumzb3EUAjfeg8eZEUTHUwCyoVsQa4ihfqPcYQhNNb5RKnttg5FuZcRSwkB3ZY94QnYGCxfAi",
  "key1": "67PKx8og2PsJV3PNQ5tJnvNK1X6pd8TuVFLSaNEHEdEx8M7gNFrkqm91cmHyBSXfWEPFtYhJs5JAbXvG8qEDmsSZ",
  "key2": "4hoWFTGj37i2cafcPS3D49rJAaMZLwQkW1WJfsJM1aQMc2FzoTkZJ7DBPt8sGG5giR8usp57HEtR4FnyUiSjjCiD",
  "key3": "HWxmpySLB1G7f3rL2sTeeQyZCTfC3ujsiGwnxvJtAR6qRLKoJ9H9UJJuYznVzYHG7rKDCA3nAz5ScRA8dCFsziN",
  "key4": "2i6UpvmfAUhmvLgXi2H6T4c7LBQCUcZBnqfRLn76D5Rk76UNT3YkjbpyqTuHAngVMsQhTJhBTeAvea8f2xYCPpYH",
  "key5": "3coYAe4Wf3FTgDcDp3FxWJHVDy7zjBvakktyXyz6xapaFy49HyqAmqyHeugwMuYQnKEyfJcwgWj3Kcg2rUxRFMpd",
  "key6": "BN8heFcLWN4QXbyipr8ebBnKgCF4pggZAksskN6Wy7GBqL3pZ3NhN9ud1x4GYV2q7PYARJM1azn75XLiHcMAz6K",
  "key7": "3GDx77kSn2kcRWDhtB8eLHMpQWYLzFctsgb2os71rLS5vJSRtxJGffET5auisojJka19GdjfEChFjgcBVtQPctaT",
  "key8": "3T2diysSA2NRvTXfBDyehwDQcnYMafSrrme5zDDqJ3hUHY7QCJWC7AaBgH3aSUsUCWxCMwFKZKp4uommsJrcWF4N",
  "key9": "5s6Htr37vut9xxuwbfFT2gLgxjnyoFEyPjRznTDeGeb21YmuSC4G6B5M2onDnMEKv32ps6CV8sqq6k8ex3nxZtom",
  "key10": "4FUPHvCjNtipNDfBMQXbecLp15omUhq9JMEkDocjSfubJchgS4dBV4hfULDJd37aonQiPP4RNLhKU17CBBg1ZDqv",
  "key11": "2jFBcuZrTRKQcnatrrPuhHTjqBem76WDUdNVvQjSJrNyNpfpDHACUxoNxdrYRsdfRz6W855NwYP3RtfHfdh6Ksdd",
  "key12": "Zk3jVR5mYBjCtzf57Zou1d4yFeoGA9s9VsD6EnYPHLCsW3Z8WQqJkotsHxT7srDa7ZvtkEt3RsEgYN9PZv8VAPy",
  "key13": "3sdNHJwpBDgfz5oT1ejDYVJ8feUtF8Q4obxPAbaRKTRm75NvLgWLSW61XnyfXeCp9KspKn2ozuHC6dfMX2tzZ3Au",
  "key14": "VPNeqw5i3rmkt9JMoiNMUmRpq3VUKQ2MwkuXEfZZD6Ms5rkTC9bwUZzMGtGfR3xhTsMceivkXU7gqCUVyrKd4hj",
  "key15": "28sMuBLdayRvU5CMknxm3uCmNnn3nzZvMpmuAroTEDjoANABCmtXWVHs2iQSA4xpQp4DXRw23XKrE29ZtjJeB3Va",
  "key16": "7iLu7AUXZxrGmFTuEBzTVXwioeeU6j3qSCR7xwqbCy946krptvVAoPPaNN3At5YoneH9gFCkxC5GfmtYvYY7mXP",
  "key17": "2FhWJy1b49WRHyRV1awYCbgShcpxDNp9HWyFnebDC5wA4yKhC2kfH6h6ccbsGwsd6VTFcJvRWrTQBX5BT5tEwU7x",
  "key18": "EHbTnfMJvGJ2GEBHgtXjfg8jHdN3dHWQetpFArPQvtTfDLUEEtMXzJt8R6vbA8S2sE5aiNNq1fZ31A7ciggm5iY",
  "key19": "47n2JrTyciERaFK71WEZ8EHsCJ4FDs5UhsqZnNiVWewUW8BKmYCg11wZEvBQPD3rkBkJztBG5UJ6GH9PetHZXttj",
  "key20": "22mXyRzU98RXVKacfWFG39jBZVetuFDqUP6n2xN2PpB1f1s1M2otLaj1dBEefcFc8yFBvz4Ex1UerprF7gHUsEjg",
  "key21": "525EbP2JhHq6Y7xoDHy5fMuwQhDPUeRVhFvj3CjjrEFwZA8uv6RmTcxrZYipZLD4TxAEETjeN5E2FdCDb8a48hJF",
  "key22": "3vrTLmqot4K3rw7nw3jzD4aVdMSgdrV9ic3vuZq9Hd1c51qnfSQS56Df2ytytzJhm8eW53WYMstfBKRm5BBH8P9t",
  "key23": "55cEXtrpw8sA4ejuia1hiAX2yqdUHmeZGs3cXif7g7N1uR4T4zv5L9HBjQdN64WHTBvv7svyCAtJhRT6Grkkh8tJ",
  "key24": "5HuFucbGdw7DvCAxLWhaxSsporoMEaPVvA5J3m9dDqeG54F4McABzG6aw8SojheC5unN5n1LcfoDt8Gue4mL55sp",
  "key25": "4tSkSktiRK4motZ2sHxikJRBmvnZWsPShH43EEFoTvNhyV5VCFz5P79oNSna4cEjfeeoKjhoi1DEtGdAQGG2uDKt",
  "key26": "3eyrazZ8iVFPUr15xReWwgY6F3seuY5aixBswJS6ufNk9MKSiReHmM1qPrdwSxgZF3xGRLPAwDDfJ6GCE5K5uig1",
  "key27": "h73aN32Sfp4CuAFhT8wTv2iumvSA7bdWREheLc4PEgz9er38XX8QBX7FHSUtLRtNCRCHpGFEKvzhJ2hqBhZopab",
  "key28": "mBcdrbuUgdmMhWz5pAf2qLTSanbGhC43VVNY51w6XijXUVULPjJAqLeaEzBu5jmoJHUP8YxK1XQbWeAc2ajCCZo",
  "key29": "3FY2tisrdpbQ43e8PJjtMrtnUtzTxzFamjarGrHgXZ6Tu3mBM4QaP1sVc7tcBKrzKVQ3432BxizkAHxrats1kFJ8",
  "key30": "3noxAGT8DSmmvXBwy9RbXJx3L5MNj9fXJF5D6QB367hAsQmkxAECW1ufqTc2hUJBjcESWYi6BjvC1YvAFJgoXXVU",
  "key31": "ukQMsWaxTxGSwApKwra9We9pjbUami3TtsihmGjuRNpPTfUfXbWWpYmPPzAVWcW9DaXynY21ns22Lvie8HqMCHh",
  "key32": "4SpchFZQBKCNWXNKJevZkM1WECwTta4p33QExasnC3kY473UBaKNFsatcQtFN8xLyjicVg3NuRFC1FnQdVAYWMBj",
  "key33": "4uk1UiSuGVZZzmz2t163TN2EwetMdSyomv8a1HjYYNyivjeymdLV6uNpAHYrfmqLooPt8MTHokd5vaTgGUMhmpAS",
  "key34": "5PQsvZh61FkehkdfYY5X6abxYbNAKpo8hA42tkBXiQ1rxWJoNsvQYT1KAnDK8A6X7Y7sBC5zawoSuCDqKgjuX7T5",
  "key35": "YohrB3Je2ac8pxQ9ZhjnoPTYx2UV5ZAjppVwdxfVQ5BbjjJEjEJuti8129WKRG5rioWY6WDsKQrnfX6JuR8YQcD",
  "key36": "2ZJkkH7JJCxXJtfPPoHX5ZDyJwfd9iRUG3Hr1JvFyxg334j3kDVSB1wKpVWUQY5KJ7zCgJh5j4XTVZrVqK5cC8ve",
  "key37": "4uFNe8Cg93gAiEBW346f1et27nNcNbJn3qTiiiCkGtDJzxnhcC7NYy3WvHXZQeRavdFBtYG1YKbq65TgKnvUicsi",
  "key38": "4XYuSXc3WZZwhPGRFQRr4zmVbRy6DASzs6L2WQ8mjJPx34xo53dMCL57b1jrKvRm96LmyQbVXtWuvRtCsEyXBUUE"
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
