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
    "4ns7KhycRwQoAnZu1yyY9Nh8aGHHbzG8Q1mo9RczCpHRgrUrkRjjpsT8cmbKbiECJNXC3cubTKMyqJQ9xwJ5YPd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ZZZqQLCyuqbcqq46wCgRdt1sqvziqFXsabGT9SAGis4SZezAcFFpHpjzyBqpMzwj4x84taSegZHC8cSVui6jry",
  "key1": "5PHVT9NxHh6rrq2pF1Ytqq7ZP3gFuHZzhHcZzXnaN4gK6NouoqxQvja8wehjsSWa5nj76uSZRy7yZ7Yb3ieWBAMp",
  "key2": "4J9SxfgaW3MQdegTY1KGChmcSeBteDvNndvMqs9tUig7SZe5x1G3vXhETA7nqsbPfJ1yfevMxvs4S9YC1jdaCX5z",
  "key3": "Pa1GVzXbtw3RRVA3zrCszEae3piu94Cc3sHxam5Xz9Q54afVm3s6hBhMb3Q4Dva9yYim5zvKvCsAPA3hL5XBpZN",
  "key4": "4DopGb7fzjob3CQ9hk7Cc8DAJf6XhnhZ5YKWURPakYT5q6p2pQpUion8kAKLA1GyMYBGmjHSiTFoYTYqAF2aHVsx",
  "key5": "3UZpBypMe9xCf1D6J94AcHwMtUJHA2v3dZvPiczgkf6iamC6cWWwMFdNZ4c9Tj4p5aTxSSBKp6YoPB89CoyiSuhB",
  "key6": "56u4od7cLgcZMn7KpG7rxqLhBxJij1C4zUnU3W3kxGdJz4f41WAeNJ6WxWYTw47y5oEfnXVNt22nC5ZtyY2XhNci",
  "key7": "2dR54FkNhe97mHExVxMSiTBaxvYD4ji5dhxJJwbSGJxmx3nu131aEGDjkBQbyGyHU72L1cQe8PNWPzvJKwEUnHmp",
  "key8": "34MJy1mtjja1egNwftbe2hHibKovsXBewiAD9xBSN6vZqdQJMQCWLYjUqbBa21BMt4AJ4BQYPp6zD8Do8WMLBNoM",
  "key9": "4iBKfcLZwfBaYRr4m5bHMaTjMfNdd2cFZ54NBJTfxGuUi4uQkSubU7ivsM3cLZ5AvF4vwcneH5CZwqqc8BY3akGr",
  "key10": "FNHg4oeSkgu2F74nEkdsG5XfbnSCTtnPTFuTrASfX6WJKA6gDbXMYFyf3TBBuci2xinDmJ9sNtfbygrUtbncA2g",
  "key11": "4MF3chsyXTb2jSeTLayXhn3MAZUjF683wjpXMTvhZECcvoNHjcNqu4FAiPs5vhGd53K8pNK6xQTzrDUfR9tXAuCc",
  "key12": "5r9MGmm7U9oFqSBeFUPyCxYaZhUXFY87irMdEfT4cRsyv9DfdNNBjpHeBEnbta3AzFQGrJo7E8MMj2uMvH6EzcVd",
  "key13": "47T27NMuMoYF7iFC82TcS2Sak5yWzbFuLXYDAhwtNPLJUWFZjRUyiikhixdkqzWxqvT75YHcTLsM6Lch8kadUjLD",
  "key14": "y9GFn6hpbyrRVCCgcTKw78H8WkryXvzmYYq9GCzR8VtzMMtGvMtnKAKMC51PAy5fBRLKtySzjrdCLdwSL7g9deC",
  "key15": "4sCJjZhxxpMpLkTz3GzQ1XPTB2nuVYa7ABUNRUyMpzq4A3cduJZAxtuWTLbX4BGppxtxqDzpgUfDbFuL1c1iMA1p",
  "key16": "3BjJw25P6TwMFyz6JNcaS3mgN69PBeaFxBAAR95aoj152Rq3A7fjWYiBn4tRNWzPzBL4dNhFyDUWtGUG4PcJ4Dgi",
  "key17": "54u3o1qS7xhrE6fynCGuFpeSVawLoLYUaHCXmxEbyQyBjmHudbT6E42o11U6RTeWBW9zmdJBTVCGTvGR4s6DYATF",
  "key18": "Y2Ev3f5dZsBEoTxrWqxMNw1LCUM9BuGnjhsjJLKf7ryUfENwASSi4okuwvLK7vQ6tpZVqV1VeDvM4sXjQWeDoaJ",
  "key19": "2qpFh9qhFssPYGgVoX8uLmtNSgM3nuJRqPcZupCje6pzqVFB9xXDvyKMnoF2cKVtkyksX2QjoajrrwZ4cfBJVGvX",
  "key20": "5rpohSvekLHe7xjqGuypJDKx6gtHNKKTw6sc2TgjFqDEGPsmZmUtRPgAbW3LMrGA7Eb8SH5Cm5TJUXyn5Vh4oLQd",
  "key21": "3gj2B2CSVACkZMpq3a5SnLkNdm28UeDbXXomz3s2uAFLAEVPrSpu5nmwh5Et72EChfGaKapZapajJKLRbxVr9x3X",
  "key22": "aq7Dnx25o3hvCTkKfW4nbsuJryupjGUNa158T2h4kvxUko2vbYsh58PgrkqACbnJMK7h2Cs2tLxS33jRgsD2hbv",
  "key23": "2V6EpQqvRZhPGRdai1cMUeqYmtXCLfnPT2qi2HnP4YX45e2XAyEEbsxQgd2CA4J5WaxQwHZP9sTVA7MxL3Qyrs7P",
  "key24": "48cXDE7QGZDchoJTJjaxvTyNDyMTBfNTYU25vAQaosJd44P8a55qFzsaYpVBRcckb6mMhnHuY8bgu8H1iiFHDU6y",
  "key25": "2z7iyXQd9xhxZVbSXK7FRM2ZGDC3AxGcYrHQ3Fdnv6nrjKLFE2kzkDznf1MTdVcYectVgAcQVxt3KhF4KuLxg4vH",
  "key26": "43T8SHdzA5J18C9GVmmhqeTo73Y8DTozuiD9o8uQUzFqFEUgcXfkLzitL3QgLXXiycgqbVGbPUf4ux1ajg54ANiq",
  "key27": "5vCXMiv3hUYUnoTXf4xxkJ8k39hxnoNiCS5mGTQCgJtPRMphb3DCFvdx7TR83A7knQzXECDdTY39rpdNw8YeefxX",
  "key28": "4gVEBmdqi2Ukj1SndgqgNoR5XZ7iiDFLLEqH3qwkxsbaQhs71UwfJDYfs5Tx1TGKRSh8SvWqcAFwypcSMHrFvjXd",
  "key29": "ZYQVSHKrUmCBk7JUVGJ4vDx9n5QCY5Vdw1a7uXzJjSrVcYBFn5goxno2KU8mT5fjxDzZcWgneu89jEUX2nHrZEk",
  "key30": "5bFFdYxGtLss3E5qNhMw2CjoBz4uAc4EFhzrpVFtLvbaRUXf6AJk91yQSjowYU8HpbRU1xvVzN1inuALNBpvb9fS",
  "key31": "2jr1yyMHyFgvToBqo26AW4vtikhDyCy9RRUhJuTYyuDLuTs7bE5HibFXNBPjqAk8tZpzvWZaQZt16FnmJ3HKJ8iu"
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
