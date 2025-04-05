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
    "5Z4ZUndwtNV7nFXuF5qttbKSCaobQEahjV8nDohgfPk7ZD7vrQ6AjYRRvwAGjErYwTSCMoE5rp1JHMpzyPf3uCRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HMZ6jaWjvxQnvgpojcLZUW7rVgqDAQGKqb5Ls4KjGtUiBWRm1F4hfPjrKEoPZDSEw48pYT9NWce6WAHzD2xyFa",
  "key1": "3f773kW8ajKfuNaU4ZJu8DUeJ4wDJg9ud7uVkjTjwHjArjHU9Dgb1ZA3d2qpTW84tti9zhx2quveAZQcS6eZSVoZ",
  "key2": "5qB7iSqTZ8A33HpkjMm5qEULsqASFmQH9nnNNjhgttvj59cEEEiWg42euMXebgPjfpXnstgyfTSsKiTUddd1iqME",
  "key3": "2c9xMzNbLBU2JsPeMaPxfD7bxamNiXqRWUrXZ9URA6uoJ78mDCDUtHV39KxsXkJev4z9SsfpXD7TrXN6DA1aKCX6",
  "key4": "62AhJRvCxis8WHWm86LuTAYTusRAHSnbc9gERh6NE36nLRergAh2DWhtdYbSwjJ1TLdG3Y9LEou2HuCwttTRzQqz",
  "key5": "3k8t5CQC6ZLzxnfNQXEMgEgpjPHeg6rhWhF7UXeFMZf4WwnSh7UAXLeUy3b8qC3wEMVKwfqVHrNhDEGm8uYBCnYr",
  "key6": "7J4xGs8k1wsvJz8uDPtJzMgLoNQcmyyUuEdPB3sou69xjNYP3cPY9GsJFG6JD5aEuVziWEKhaigaEgLim3R8xPK",
  "key7": "2848d1XD8jKF3HXQVyhzhjQH1BNKa9yXRL1f17ec9qb26dg5NAEfjRdqpmd3F1PtUQAmiEEF2kR15BDtMw7EjhTt",
  "key8": "2FgQTvWMY1TAMRYLR5vtG88vtNchgc9Wggxnnwi2qvnoWhqw3GvJrg5uvNo8MoPgPvHgpQehJh3DMWd3rNb7zrwJ",
  "key9": "3MYy1ANMyvQixHCrurk8E6uTd4EfRDhDs9wWrGbKCK8qavUAfPbnGH89YdEsoZytQvAD4mHH3Yviiv42EkbuH5xA",
  "key10": "wnEGjkfr9iy1p95GDEyTnh3d6vNWHD22FT1pz6HfmnV7epoF5x5TCKgx2dWDCmNSQKc1R4DSLJMZHM3uhwytkjn",
  "key11": "hrAMorbB1JFc6vojsNccbkAdMLaxhim8ieDHwGFMgSp36V3SSqNnyrCA7DuUFQmA3ALMqpdULe1sZVpRQ9WYd6B",
  "key12": "2cws64EFQ8cNKz9Xfh79AkMeVPjmjr4NpjGDjf36dCkVh5nKJJ4BTZC4KxkS6URkDgPonQmSrftL4AAkZ6gHMRTS",
  "key13": "3e9NzKqPLBt9QByyquyb72owPptTYoCcF6pk6uASGh1T3x92BSQUypkThg99wtxhqY9mcEJB18BQD5kb9gLGkkfM",
  "key14": "3s7i5xqTJoeWaUY6QBobeevTDrFek536aAybg34s7iJ9YdSCyA3TYUoUP2EJJ1M7RpZhrC7Tv57S1B5VKGHMqAcm",
  "key15": "vxcBqTM2ZzKSpePDcLZF2yeAYJdfFNiedHTMrBLr62GyeMKsjG2p1R4KTQdxtR7iLSatynXT5FQNN5wsrSquq63",
  "key16": "35BW84fpc64PLTan8Aj2PeU6M2FiU5TNuVU9zahjURbFtfFMZ2wmnKykaLgwepF4oRoNKa9RyyS1ZjNrd9j1jDUt",
  "key17": "F3zGsbZ1tcUbjuRxKvww9QPesXxs6HKpJ12RBm4ikrLkevrGdjnYGs4sKNUZcH1dfnJv1yb8dwP3aQ4u4WD33WH",
  "key18": "eA2X1yEsyYXvcG8xJso5W29BFyxoXrETCQ3UuVEtC52kAhXWTh9DRPyWDzVc5rrTNySy2RcAMwv4asPBx8xv53R",
  "key19": "5zm97GPrvSaYDcvyCy88v8vdWqr28j4Hnnqo4tDYrNbz9eDKTPMnEogCMchVyZ1c3XpHsEHuzSL8mYScMEeZcj3Z",
  "key20": "5oVEVQo6QLvNdWQBskDpsxdHXqu1QnChZCtRn6EDRYoRAE6ryCzMW6YDGPjx23WJwCyHrgbgBdoNFUG4MLfYUhW",
  "key21": "47xdA3vCheymudjkkmSvcWAPz8haXaFVjByM6a33dVbr4DNqPZNmQkivggfXaPJBrm7gCTrXc4eFU4YbPjzZ3VhU",
  "key22": "4GdHcVfttA6wkRCPpVphAEo5nv4g1BjFMT93srVdsxLwADsybEdm1eeRnqjBDo5X8GQw5ibTGGAjRtj9Vo2cmjSL",
  "key23": "BkftVwAwNXSCNg5Xqd1sqhbv99mkJtHLL6FqWH7S3LYzfYnQjQkKiY8L9wf4tyjMLrTKSMUjNDzFgwtukkeW7sV",
  "key24": "63XVGgWXtf1NSQ7PFRwE5EWky4rsZK3KipSyWR6a5VdMqy7HDboW6G9a6yFeWVtTXYMbZniC2yFoXLZQBAeLKTcN",
  "key25": "4pxdF4UtW8cnFADWtyeRDvewWixJA5h1Lv2mLNHWCjfMtpor7C3tXLE1bt1V3ezzygH3FYj76Lqt2Jvmf2aJvWiU",
  "key26": "sr9RGT9qwemVtdKw3fkVG82iGJxWyXHofYDFSJwfR8ByDHLZub2BDk9VNvnbaEF8R6sq37LGRFqkjncuAWnardA",
  "key27": "4LjiHPZia32GpJJYJzsLsLAe2yCeX1dNu5GUf79QwYyh28bixsohSCa1pF1QLdbU2DhCZTtFVE4gTdfiBo9TiKE6",
  "key28": "4bgiz8MTMt72MsDZwCPYrZA5U9R8LHQXyXzQkCKw1mr45zzkXwMKCQfrrUXT5rvkCaZvhje3B7wDYDKf7rtwzuKK",
  "key29": "2G4eD9A6bYB22UysBr9g5tyEntCeDuHyoG859aXGBwXdDFVdxiLjxoPjcfXHiMSjNB2Yxih4eBpx3LW1U7GRe14L",
  "key30": "5L59HTPuLd2nYZYFnW1cNmTaHkX8zv4ubpFNbtACfqct4h7ATJ422h7Lx1qCijTib5eXLs3iFULGuSDLP47Niiuc"
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
