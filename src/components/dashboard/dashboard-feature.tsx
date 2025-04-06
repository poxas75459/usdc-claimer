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
    "2DJMJJZkuqcTkmhbDFKyrQKdo8bqbugnwR2Kkha5EZrwBsHNPyNv5KuTt2L9X3XjrT2dh7CgfpE8VguA1rknogeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KbWVEPxwUPpwux3rhHTNRNRFZP6Ni6vT9tzX7EBNAALuAyq67miXrv93zEYZi9T2AK7CjajriGpLSg2ayMjbwa8",
  "key1": "5WSwRYNquhcN35s8cDSkEA1kkRDvy9Z2pjs7BFiEmoY6q2g3g5JdLt8FHiJwbNuj3wbmPvV4Fj6XV4bWVzR5ZBve",
  "key2": "zea4odUy4vzagXMLgETdW6Yxh7N2cptNUSFJdrTF48PTg6h8n6tyjcUUNGm2X71QyhhGqckckXue711UBS4thCX",
  "key3": "2dYPmr1TzcpsjsVERV6vx2rS1enkuhE2kNYjpf6KgYi5u37XgyqNmbEXx6Yk4xYtX57nsFztZ7gudvgfXghpwVFB",
  "key4": "4uCGRQxA5UUjuPGcyjDjmBKrzirEChAja1vuGNJm3Cs5EYjoNU19YjHpVpwFd9UW5S1nnrGqvxcWzbWwTzvXFtKE",
  "key5": "27DrzU5q9dH5GRDsaHcCr43MiWXBx8yamE1hLH6SHU9whff7kG8JfhGdoTTsn1dNp68ey6H8zjDKpfqqDChFqcvS",
  "key6": "5kTaq7gZqFKvpqDKTvEVbyJMD3wWfq8QCeSih3ZMwLEtgYN1abTaPPnw2T1DFRPh5ygKG96X2XfXK3Qyk9m64X8c",
  "key7": "5aX2eeoqyPyxsecYo31dtWA2W3Dt6CAUb9zxyF5oWjQuv3Bonn4e97UJDPyH5apwnGzAJ9HG2HdE4QQHDGkDTSXZ",
  "key8": "4ji44xHuFAYctEeNHqHsTRHQGPAJrVQpcZPq9k3nTGhyodazPmECRm1hwh9siAes437TCVEHqMHEDLb9KnZPhZfp",
  "key9": "5AwqiubAXFkmMkqqMVt5SQxnsX4eHjPqpZSKWoLQPe9DjN6WDQuZ4Pc8ULzWnPPQmLKn45Xt55V8SrY898AEr8M8",
  "key10": "54zNm4rbuZkimC6ADqqhNjKrR7E8kQZCJh1xjsDEAWC5htvySdbsjDYvk27XmTieXmHSPxdNPnqa69BRi54b8aPC",
  "key11": "4TgXApufoPvfh4KBrVhzYDJdArTNqx1yDYnR9d1qUGPmanQGKFNaUFqq3EoNtP5cXhwC6hLxwFRLzUhRz13Fhmaf",
  "key12": "51zxNnTtSHN4G1h3gii6WStB9R2bYE4fzvVJg8TE2HxLDjCLvHWGRorfnBJq3pYayPnfx4LEVVUg4wUVXrsvHx2",
  "key13": "3k2dqi5T7sWNyFCPkimWCDA97Vx8veLHKZ4HZh1ByVfFZtVYXLCzCydvNrMT4CrzhGTogEHKQR61jcmzmh9ad3Yx",
  "key14": "217ETj8mAC35FDYpt8DKbuMzxDC3NFCHSZjyB5kTR6THRRxGw5fc7jAv9zsUGcnhRjfhgmnhTZKpevEBTRjToQYi",
  "key15": "49LyMvvK9ax598rohgi7tLEpx2zFLQiYBPCiavvcrM8QVA5b4iNGbnS6fykQM4qxsRG25vKqWVTTEgTGMyvcZsKT",
  "key16": "2gjKVAfDmj9Tp7gYu3Mp1mWJiARoECZQRE6FV75wHbvf3DPZxSsSwNjHADh5tNLzJJsoSoW7zDVchULjkQLTAyos",
  "key17": "5FvzDjqrzfFJae5LjmdEd3xD1FzNBeLXwKz8tiVZAnBJbRCFteGpjkySohZqytQmfHQ2u7Ztdw7A7LWXwjvKxpMy",
  "key18": "4a9wNtbC1q8xLsBBZt9LybwXybh4VFEfpzpEd6Z9pNmzPip8HwSpYYMobd28RPK7HDG8PjZejZTFhQi9kDeNPWDa",
  "key19": "44exqvMbrjr4cE3u39xzxWNGnABDZs7Wd6brqPov6vXd7f9jDDkGnuCnfcsmNrKfzNqjQHYygpwSbkWkhUGesgTs",
  "key20": "4cwQzt6mJ5Mz8YU8KSvYWr2Z7KQeV7RqUB7BtjNf8J3b68YFkFVETgQoVYSAodiRnhfnC9uWZVAo4YLBofgsts2M",
  "key21": "25TFD85KAvq71yZuUiEavJaUogkN3JaBj13dBscd89VRZL8nEtwn1crZwA1e7KTboNoHqtzeDvAszF7NbLhEi6xs",
  "key22": "bHa6q6kWDtP6yd2bDkzk45RfGdbRiYTJx7gWdYR8HuDAviJyPzyk5RdDjzSPFbv7hKRsU3wQbDVFD59QvmYHdiU",
  "key23": "52qG1igP4eZgf2jpRJ2crUZ6vpDHhnQSUWTXX4oyQbQRHzzZPmjbBuSspCE3emZKjPK9tCEH6nHufLoCWzJpWZt",
  "key24": "1uRvLXShzSnrgqM2q78CCFGKeXXc5onctwqcoBnzP8ssD3xTJNEXcXNyYRPVN9UUr1GLPjUKooQ9LBo4jeWhYQV",
  "key25": "36i8gBBKq1ZnE9zfQL7gki3McVRu3rymfoNPtSf9BA6NriA5mM7K8LJexyVi57ahhM5RLCSkHFDM3GXZm9HpE4Le",
  "key26": "3xwNf7dzhFbEHXefwwpmL9p3s63gx9pTGQ7wdEhxxsHm5xyqg7VyZ2SauERoPCdnzK6rVwDiuKCGK8XW89k95GCB",
  "key27": "eviSEFDG3NymEkRGZE4oroJZ6Zdmhmfd2CzKoYLcjhcpbjApaGDj2Dn7vT2PBhZm8uRn7bizTAHxpYLTcMpK7rn",
  "key28": "4zUhKxnDCpzBz8wJTc3X2NTs2C5vn5ztz7iiTfBVTfQN2LcGqxsH1XZyn1XAPfSXVLx4amfntvFJroc4LkfdBoct",
  "key29": "3Pov1U5r1LMnLgXmXMD1QJmRi5ngm1iHFwyqFob1RcEnqHEpNgYFuPBUBnuh7RFkyJ1D1VwBxExbsNzYP1Hk72NN",
  "key30": "3iALjG4DLubFrtLsN5o6HMq1FUkKSpTFFVLksu3hLHtn9XpNAsoFkt8uFE5Y5cXxK86avSx9hJgPso4zKp4eKw8G",
  "key31": "5meiQE6UTevrb4hUCUnp2YN3B25WqiQNB589f6CQGa364brXDGUr1RbdwU9ycrkUCiCXaKTG2wvKybyTDmRpH7bH",
  "key32": "3bWff2MNFk1tyNvydWCWtq5ee3kt37ChWKrnYRifAKMjaq2egp7hgGWFKnQNFSxqE2hXfHumPYxNRK3LdNbi4LM1",
  "key33": "2rPRdxNcG5ZewBUE93M2p84LCpxSPVb4fqUbg1QYoN8NurgxBzg6w8geqZsKtfr1HzKgRrgykey9wVLjGGScuEAJ",
  "key34": "3Y393ddpGcKHtCvmFEGAVRA2ivdynXN5bREYkJaBo2anxNWnuerbyHAGn1edzyfszn8AMTQ3fVoizqj7eot281rH",
  "key35": "4KERUoi7j4saMcYXBCct4aoWNvFYQVZBcw6oboNiWgwLn4mnNbzw8SiGhtAc51gSb3PhhFmrmXdLc4BeF8SvG5TC",
  "key36": "45j3DJLqG7AtCzy7ETV7JGNg3dJAo95qgKpxDKT5S8mr8JwFecHnPJLxK52vD1Djne8AhLrpQy1qSswza9XC67XM",
  "key37": "pd8PinsFXLaDyTjRmEi84PBvUFs5NzMdfksQ9nELzUv5naifjwnAYVXykP4Tnw2jQ11gjsWTzMHgiDBzuK6hQZc",
  "key38": "3KdEKssAkhhQa2mA3pm792gwkyx9QuG2XfYrNucywkagzSdgnR3fLLtMHttvveCGPD2XTKAAWG5AhcZuvdGTweVT"
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
