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
    "xBndupFH6qRmkxToe8xpUruBNtwF58xJjtzNUDkfF9hLzZn3svmik4YXfPTH4L3PjaVU96yAiU1LpdGAutZkgWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mTPNqHxn1BgcB7ZnKGqej7NyuKRAbNSYjnYT1H696tHvKACEajfwmofSzSJ5YPV5jhPVYaCFq3JKBArnsXCwCrC",
  "key1": "qnAjgLqNyfhbbrbACP7wRzPcnDTqNw51VEhv1ZLdwxozQKPU4kVrkda8Kb3A3eELgGT5amKEFHovWLpNkzSiwnN",
  "key2": "47tQUKLdhvG4KyQbRd1eKyB4zFHgVLoTTk89HT1SSAGYQ3DGsfToQaVh9dpvwnBYffduSdbhYZMNf7REfVXJrbbr",
  "key3": "3C3GHDhXVvt3H4EA5c9uFbJMjaoB5uz4QY28h2Fe6N5GBdxLTQ5jsXGF8VDsQiEhk6CxbmzWPj8SGB3V5cKNNgU8",
  "key4": "5qN3ntGYuLnzBR17Gy9MVtMaBNEBJG2Yp7ARLzXTTK2PbXHVNQyjvmayPZtr5REZWp4tcpGxpp7H81FoHFXuh7hg",
  "key5": "Lgg3Up2PvbUZGegAomERPP2Grr8NCZVFSkv7ymoTq8KkK1u2rMNob4cJuxThK7YCa3soktow52ZNLWw7Qzxfea4",
  "key6": "xB1fVhp3ky3BYQdmdjT2m6xPkEZvTEHXZjQ6H5v4ikk1VPMeEAvcvG7SrpEFWN18rD3Ti2Va348ZPn6LFJz4mfm",
  "key7": "21kLT77EPpVnmR4Q7jTpcuc3PMByddCCqJBnBM9MHzdNAVToLgPmMzN2J5Xhp8bqbKRcFsFwaCLdLfRFnHkrnNgR",
  "key8": "2Zv2SMHZRgjucH8WY3XoTwsFsnZgCV1Aq2o5fAEnk51t9DAwtj1b9twrKMn5ozucjECvuj5LCPnK6xiNREewpiCo",
  "key9": "3iUJQwYdVbZpjJ4u61339QKxFgtsvi649RpTyuR2VsvFuTcfxA9YPtP8H6utfwZ87s2j785PcRmMWGR2JX7F1kuS",
  "key10": "2w2vTTs5DxcHW7ExeddMb3cXWDYa3hx4oQSnt5isjcbXL8C1QiKtN271yWX42GyX3V1tFijQzYuYfbC7q2kALZ9K",
  "key11": "4yshXw7UJMEpLKNsbx2fhe4CFdPbgz4aMEaDpbQjfAQxBhp6frKSTeRBtQw7CdjthadJPCaTypPz3uP28HvfFNf7",
  "key12": "RDJxJM8xzHvK39AfpLheNc9pgcZpAr7TQ2ZLkw1xVdTxsq2SCpccq9DGV8nZk6suqdAGjD2zXQdLFxVc12Ug4y6",
  "key13": "FyxhQ2HUDdt29asRbpX13YwyxgbRns87nEwEJ6nFL3SByyTHrc3HJeTsW7NvugNFpxZY7HF8VuKx7g5dVVWwAHv",
  "key14": "496t7kbrDZ6fF9326MMv1jZY3CZbMq77tbu2vfdRKjMoWznoifecxXHdmJKamJD4sLRHcCFHgvc436TubhrCiTsd",
  "key15": "5r4JtQd2PQLs5AShwAYdmqtMQm4a3HnAWxbu1rdZNp9CE9c7QMNiS1MSjRRLLi1mA3ovaCHoCDda5VLk7Bg6vUgT",
  "key16": "2cEiFRu1j1AiWwnAveHpe9vWabaxFGmP3RpnRnf3EwWb8crro9wQFRuhTA4Z3kxh8KFcDdmB4oWBxqXsHhEotNgj",
  "key17": "4RByBJ1LRoLsdm3AJTtFjpb43uxJp4py2XwSjusPZ1SChvBH4S2cC7TadAs9jUWuMesTcAWXmKvePUWDsF1V64jZ",
  "key18": "RkrJq3ZrikbfS6JLaDsn7nDBm2UdTjfFDWxudDzeepH8Sfm5wB6PNujSKBwFzAcV2pjmrD8H8QoNLoGw4PbBf1N",
  "key19": "3yxqQ3nWv4zxWiRwx2sahXt8UvEs26rtm1p71aHA5SMmg8tXRSpAdJcqCKB9issoPyxdh8aaKvHQqyxNgZLVKNDt",
  "key20": "3UTU6Z1JYNcrrcSwCq5oSXJfVcu817atdwq25DoSYoCkKyuFkcU18cCEnwDAq4dvmBL6Ms69yza5G4ZZYrqaWBYM",
  "key21": "4ftVjyc7ixodJRXTFgJ3dPMB1BMXtZ4QEJpLPsnJHjajppejqZzS4qnx71tUAfBkWpKS5H7BZYSz9b6m4TrXfr5m",
  "key22": "iv6nwg7C7mAgx9NNirH6xBAggqN5qr7NAuPzfocvrsMaUXTUzDGqJMpAuFgS6Z8R4jWk8gbgf9rc14JSAaNwG96",
  "key23": "4NCnyBpLn1DDJ5F21yszxdaNxAKJSvT587ZvxoN7GRdpi93gH74NqKDdjgwE1HowusTcAvnMS5SDcByFb8H9cKpV",
  "key24": "2vzEyH4GYrkGx3upeQBHm9oyxumTdKr36ajpNUzEnC31f5j3mG2yy8sH2Z7Hdtp7v8Hxp31nwZg3KZg7cXjrpvq7",
  "key25": "2aHLMWqAY4LHyjAWisQgBFJrW7KRhaknFZifzY9Boyi5otdtLfvJgwv1oL288hNJao4DXRJKuvUWBG4KWo9qQYuc",
  "key26": "3thdfJRe8G9X7TGnkxSKq3dmfQ9XB84E5iuibzmVvxFo2f6c5gGuajC2oorT5J4p2mjr1fVJMMnBE8rjEXivHadw",
  "key27": "2MTRLztfn3Y3Y1ASQz3mC76hzFgcyuzSp9WYMC2EmwYMSg5tixjHshExQJMitK8ooVBwGttg76CthooopGjt1hvu",
  "key28": "4djKQVQQVsKjqDJ1bbuYjw27qfz5AEygqAiSCerJBCBLtfjzTMRrWtwaF6sRxJdwttFji7A1mcFFwZU2Guc9sPoB",
  "key29": "4k5rcKeJPdZCbseHF7Me28buTnLtaaPsnpRzKoebMiTtp8bVdaFADE4CUmyjvTFSWcQV8dkD2yQeTkptYJjANVb2",
  "key30": "3cJTwLdesRFrrsu4FKcBkqVFV77kvNA4egDiaiBwxCJ3iYHN649n3Wq5ME7Gc8XDzR65gcZucwYEzjUwakUKuzmi",
  "key31": "cL2X66iXggnbiMVSJe7bPqTa4kT6U7NC6xtjidTNa9TyJwknsMnChn4d1UXjsV2zTAAUY5LuNXQA6k5LRVyacmQ",
  "key32": "3P9Rvw35QxjvEv4UwCcVDHS7UBXPi2rKsp2Bd4X9camXzXtw7K8z5p2A8Rq9fzwUmzX5mq6BvtQ7TVnFWtdk56EF",
  "key33": "3WVPnjEyrDUzQrhLLgXDC5J9Th6CJBYZNa34fsfqSpTt5KbhyQRqSo5tCSEySqX3SAjkRup4E4jA769i5NRcTXha",
  "key34": "2GCNLg53vqiR8roFgFMMLDThFrRKNnze4qEXbcRiNT7zoZryAo4jvYDFWVBYNnuNTovcHRxq6LV5r3padj8fHGPf",
  "key35": "5uU7b1Nvuz16UeyLxn64admLRt4QYkMQn7pyDWgPQBHxv1iSAF5tv2EywQbNXS3eKiqvnkubAt2GFoWPWeyUcyy1",
  "key36": "2EzrH2eSBRrNpyfGnBW8YLJLWLmX2XSBuT1H5XBwPzec8igmrqotpAPQ5j29RzF3MwPcJx3u4M17rYTzojMXtWpG",
  "key37": "ZSTn1davja9swQz1sL5DBUYH3PghxvkH7ynXMCPgU3xLqpkQK9vrj2ZGfiMJyvwwwsaco8mRn6imdkLHNbv6s96",
  "key38": "4Yef5YuyWxRAd5hHYK7zW4DfsZFkHdt3jPv6wZgfJeH5SJFd6ncwC8AMdUhsPVfNdywDDX81pM8nSBJSCiY99hDN",
  "key39": "2uW5vn2TTYy2T4bxpMFy7Ttpg9KS3fMGURNCxJC7sXzPniPsQFXeVcED6h1TbVDr9gaqtiuEaLiCQsM5Km1wjbr2",
  "key40": "2H4ffEUUdwgqftxrPs1kLeNwS4VnLQtN7Lk9J1GrKM63LhcsuCbGDvv2wL94mDUqUqoN8AXhHh8Drro2KrstJjZf",
  "key41": "2evQzBFuB1gBUtYF4WvsZb1u2iBQSRqC9EtQb5HDqy1wGig3YdX6gg9tDhbYArinb83Vdton7qekZj6VWRdYdy5W",
  "key42": "5HMbKpC5XFa8oWjd8TzTiRyNEkQVxu7kfEg26HZuv9Gu7gcmeMfnd6AMv2CTP91VmGFcCGB2TtviwKinsiQybRv6",
  "key43": "Yr8jPQs5YY25jDYeEH2vpaQth29eUZ5S821bUVPYkmUb6VYT65GFFnAZvhoVaszvmLDXvHg7ku5BtUHRADmvM5m",
  "key44": "22hXVSGfvtqRK6T2hVFk8NTwNWFmeuehSRVkMT3UTC78sEYtYpYsKDrXKsbyejxox9UsZvjMCkcGYbA4New3Sq5J"
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
