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
    "64qh5JSUyUK2Dhgm65KxkaYHxNWasWSv6spDQdR5yQDK2viKY96E33NwV7eWnjeoG3mR4ddSjECNuXjwTfTHAMW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euKGhgcnJ9qVWSqAYXBaVvNj6447NX7QTU9cnBCVtgxZ7W55ytRxzfuQY48WhM4ohKmVV9H43XNMsoFoyEknzNi",
  "key1": "3WVCeGAbevn8hYxCgm7JPaRsT7fgXur71Ac7Ju8W5ACGrPvmXo2PEJArXJjhUrFtJWuqn8mqT9pQC6ffCp2SDNVT",
  "key2": "4v5PpRy7zABveH5DzUf969bqyehfqJtJmBN11G8uYiqCcSa19CBY61gs3QyLrhNFGg3nDHuJL6C61s7xm7X5R5A1",
  "key3": "4PjhXwDK3Q1xxridATgwNssyEkt4zTvUmmnJVHHJkRXgh8RtAMeXrMYYteMYke4BcjhHdhGEWF1TSMj536R171qX",
  "key4": "4RiYNXi76ZcxLwKsnCkiC9AsGPhnTHU1ScbdECSP18iMNzdWcSntMLKvNqXui7kMn2NprtS7okpNaGR3icFfcngG",
  "key5": "AoDyPA8kBK1hZU929WRgvVBc1yWEdgcUYFddJghWSwsAM2DahzUFpY5Nuus1ijuAZgvWdz59ckdvaSqtTVFGBAR",
  "key6": "Gn7U1NhVXbpfcZ1mUzPAMUFS92eFTg1pXFHXqi9gRkWJo7zov9BgyYeAsKhnVfDiBrMp8JVQ54TSGvPejH4hUd3",
  "key7": "qZcyYeQb5kK5qBTSGX4ow933pPggeFyF9b2RUGt9nh8BFsvKQgogHTH8oSoAgFoUH1qhoXjFRfngmBxcUZStZfq",
  "key8": "3ae3zcFjHfPAf4eT4P4nyVYEzp2cDT1XPdjqTZGuXnikYVHcuuZ9VfVENWHnYvCh5iStfNmDody3JzxdWEFaFLeL",
  "key9": "2jQAH5mK7pPgyZAy6nuWJg3DPrJqS26LWKtbjx7bpaWAfybu9Hd7YdxtccMsizprBy3VMFnoscm3UWQbj4QNZtNq",
  "key10": "3HaaQ93ZzJbGMY4T8heUV1zH1NZbvZ82xuSw72df6idcXWqbyKRbMSNgJACBVzgLPjwdsdEJSQ8jujZeUs5aRcqS",
  "key11": "3NYkQqfvf93hHW3JxF72RzdfTbELxd8vaWQPoH23pXwM1coSJD2UGC6JdM9Li6ZsjJ52QQZ83p5uJZzM47tfDvhd",
  "key12": "5A7JAowDtn9TZJKiLSiUKRGrVX7pxi5ZUK4BGSyDnCDeEuqr6xRssU2Ep82As3W7znwjPZjM4ErZSMuGZKcnSm55",
  "key13": "44mQu2HKuAvtgV815Yf2omRjUDZixrQQni1WksCi7ey5FwymUcAEGhrK8FRUmmox4s7PB9nyw1QKrYxEGsgsiRVL",
  "key14": "2mBvfZdTos278ufT2DUrLcAn4cuAYG5Xbg8rAU6dQbFpADSpjTsb5o7qEuWoUguQ868oxQoEofPPukM6RBsQUexR",
  "key15": "Rcg7FJvu3rkUAvCmiv6wZeanvtMn86EL3sTtpbq3tXY2sCAgTJnWgTGzYCH8BCGGD2QA2xTdKGiTunV7cmVyDGS",
  "key16": "2owesA7JwbTt7DURiD6rD9M5x2SvpnyFSScwLYLXqNsgWJ4jGs6fLx2vcHVmDBtWNhC4hevAPr9M2q7jAfPaWkxv",
  "key17": "2PWg1sU55uWBWqybcCpCt4exwojc3zZwuzMSstkRUqy8qdmW1P9giQ3ofqSbCooeY3EZPMsD5SHHex55F7Aiq3fh",
  "key18": "3BefLC5Dzt5nezXgDbk2P1iNG2zcrDzgXzEUa7xeQEchcHBopZhU1UAMRaQMGBrUU5z5ysm4bXHAimn7SqepGbAn",
  "key19": "3LSG7zGEUVYwHf98d4hs2NAEFM6k7uf1yLt3qusnBzX3B7gb91zHH7U3kV3FUJbpUqQp3DRdMH1pb8DzrJKxie6j",
  "key20": "3mJ2gWBM66oVSAdP9s9X3Z8vUXUYwmshDtY2Myf2S8w4Ywm87VT4zgijuh1idxBZYHbzGkodjzEXJScHGrTnWPqP",
  "key21": "QqwBXS5UTy5nMQAM5QYSCPMp79s8PfHLVhPneD824RhmnF14aFixuyRDABz2dJxwG3xPyawdWPTwWrEVJjY4k9q",
  "key22": "4TJ2jJzYGyJkxEUrkpL5TUu4TgiNC9WvXLNr3touE4X68DhVkgtz3KGyEGuzKn3bq4CqEUcHngJ13Y9ksfzWTHLF",
  "key23": "7EwymTPLMSxPMSQFYUTPRvtxsxUm5dnURkfsKHoDfcKZfhP4Dudch8nSR17mqztK2yDw27M8GVrDJ55JvvQb2Rq",
  "key24": "3jXdsEMJbk3KUnBVzKMv9jDWFgTP3B6oegcycXNpLHowNTaCxUdtHiWS2MzdVmVKEe3b6z5xDA3BqLJfWwvGV64g",
  "key25": "5E6QgD4mQ7qHbP9pT1x7TcecNbaV2ehB9B1WwnQNEJZ3ozbsrmCwAouturn9t7p79gkKDcNAinJ97pAThG2qh36w",
  "key26": "2uPsNcFuZgN5Ren1AFm9Cug56fM9wcdmajB4bSYxVF27khS9CFLsutYsGyFGDRMCoHP4Brut8GPXYThG5NnKzQgS",
  "key27": "3ZwMRxYM4cpriwExZhTHNCamnQwpb5ysEAhZXo4fu9b5ZwRYppRaRRM5hJryxC1fXKALcPuRaQPXphDV99bRQbrJ",
  "key28": "3cQgeZQW98kjT9qDZrPdzctnbezAPaDFrB9oZev1iqdP22XAbyNRW51CnPVMaJ7BPhKjmvChf2g2V2gwhCRqrUkb",
  "key29": "Ci9H2eHgYtbCeGVX5ZSu1SBdHfNNtDsApd6pqrugaXvVmid8EuVwYQ15AYMZCXktD7qoK11GxaYPQ1PHnm6kjjE",
  "key30": "2NH3zuarDyU9a61LtCHHmXzQeHjy7Nk12zGXLP6h9rzTstdsgvXfZGcaz9BQMssdudPYqmtENz25F5bEa5rxu1HP"
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
