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
    "4y3XRSZGV4h9oKmA8KGJiQ3i1H9oB65GK8FAeZU7ufcjEsupVFyrJ9L981h4YAe4k8mMN3xKy6R6MjTW6q5c1bwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seJG3vwCUGNSisB2DbbkdDPQXKPVXMHsH5PKSUCotBfvKPh2bC82vrrxRhP8SdJ9yWHCbpq1XuUZXTwgAuJ3Wy7",
  "key1": "BhGtsXjrh64VsDK3V2Li8NKE7xdHTTi9aJ1jUCr1yES8kLM1bMVQmux4A6z6yfjCfbKbpnnTXyXqdLXHWw7PukY",
  "key2": "5c31A31QUG5KXEGvoY7WhRWPiis1G4R7z58BrfNwVf87Ykx4w8Ad36wKQmcmazADDnsp8vRRzCJ8KoxzvQpVh5jr",
  "key3": "39M1zcG2dcvkEhXkvGd7CdbPmptMhobj2rw6735y3DJ85DujBawm1AtQ4dDW8cn6hMw9DGacUNVmdvZS6CC3K8gg",
  "key4": "4hDYzpBSaDSmrSSqjgviYKbFgAbykeAqpBh7xWsBZzwNeyswbc1SANYn7XtmUwz1begU3hbKyaxeF1GUUbrzeC58",
  "key5": "3fJsEZy9ZdtQUuUsMdbA3DcKs6E6BRZMmWALBAxXHqMzLZ3TkTqdC21o3ArRTnv127SJLdk8Jbrfi4KTeiRpJoGz",
  "key6": "5dFLGcuaCefyvjegVTYRBqYbtB9dFSHnF2ET9uihLixUtN6RnjxU4PvMcenuMQHsDe89eaEPUMDpxxSvGDtDfgn9",
  "key7": "2X8awzYHwiFGn28167DL2DqBcwob7Jh2CsiXLWJNpXmbUzdbCK1xrpCMBNnPKLjS6n9dTdb6vH3xAzwK6KzNG8pa",
  "key8": "2yFUJv8R64wd5iP9XN9auXjiG2CjrSTsfuRMVqgR9ZW1mpgXyFrQw435u4Ry4jnV59vgpmWpB8SXtKFLHpydxkhc",
  "key9": "Aw5Japth9Eu1SKJbczdaW69or7z2pPBJpcQ8EE6h8VWyBSNGDsh8dqteoj5Hx7MctEiPdH8FJeyc9dd583PG1Rs",
  "key10": "5gYMXdq9vngVRxA3voPmtc6vKkMsoNgJ8Hn1HEPyuuWVb9zv6vko2sia1VPRxGPKdAjhi7sQrdCYxBPjBSaWsPJa",
  "key11": "2P9r5gne9TM9YhV25Pj4Mcbk2TQjUM3PfpC27eFi4hxaTEUo9vdUD7kE8xaxpwBL6SjDX2wa42wdEC3wEogngS2R",
  "key12": "4sj8T8UrvXexcBcLkFnS5SZUrVjZPRY9MtTGSo5LmWK5KCW8ijJkZSqe3wMo12rw6yPyn4j9gQtkZbfkKQxRwXX5",
  "key13": "5tqjCHWkKpf8EuWMHiaJXqgLr3mdPMaAhiUaxML5YhDx33EgCrWgRQB6HjzeuhDqYnWxo3p4d6vc5zyCYZhboEE1",
  "key14": "2xapDSC4Q9kBycKmSQ1LjZ2iRtMZCRp89VwYJKV2boXp571gjcWpZL64YkyS2duwgRMbcWRED9bcTBpXAWFR2hBw",
  "key15": "2H2B9G1JM6LkYNfHdrh5ZCmHwEws7VjaRQKPpakn9AULm1aTJyZYUPm36fuZj625eKAvJU6QfCXE4qpQEjfAofuR",
  "key16": "31Z8nnFVgjTxyqvzHPtb9mjBhwjsLrQUtmAxrWPErtTsVwALxQCnvJQjnHCo2yq7ox66bVyojmLhHerbFx7nna1k",
  "key17": "4zDP29TEfqFap26MR6n4d8TQKpE2qYcdFGAyFAw9THjwrFx5hfjfgCfPgSC8CDmZkHRmFrSYe2cqjLh78Lzg48vq",
  "key18": "4weD2fJeLXNBugX26ZEYj4GMLppBXR77E1GrLjgK621EBRgbR1BxqRuWBnKLiiARDZhu7inLmykfcaH3gm9Nmbaa",
  "key19": "G73ygU9m31eGiebGKn7RyQMdaXaNmquGRdcDkZ3ECJofiYoGVg5AQ4yozo1m7ephELjWQgxuUtFpHnwyjc46QxZ",
  "key20": "5gbFDuuRwC2GQckPVbfBMrcq6etXwTicrrDz5AzZLzgH2B8qmrCRhdJCjJ9GkBT9v9t26hvmgGEUUuuWHkL3JReM",
  "key21": "fJfp5HE67hYBvu99anE2brRNRb7ZxsDJui9b6k2fzkRkz63dxjBqxvKJhAP9EZWn51stFpQ8wGMX3P3fJpM6m19",
  "key22": "3MAaFEXkxjRbNy7acrCBghtPqcMmuQey7RJZeE3ThejwUe9SixN91jGonehCJYPCjpWVUQCyoisemqWD85sLo8JR",
  "key23": "5mms8gpx3Bfvmrs14hW6SP6tkxiJBHWqRPujBV97GwsfxvtXQPFqnr3hPSXTW51bHxsdcYm3BFoVDFzftGiyVBHx",
  "key24": "23TgeBSrNzfKvWnZ9rUAx5aySxfKkbeXXsyzegM6EUYugSwUcVa7kpadbD34veiCsHshMtejuSoZcWM384D5tMrk",
  "key25": "8aDAMLrjeEkW9VB8amqWUvxzBKufQCzscT1pCX9WmVcjWV1RNMP7ZJMgCgGQYhFXE763gRqkeFdWzD8VPvs6c8q",
  "key26": "31mSJ49JgHPABxUP5DJsae5gZ16vStr7q7jsZ41jkGBM86ENs3pP9TArWY8YnmHkzfa1WUbSjtb8Vb6fjtq6cMAQ",
  "key27": "5UJRhPUfYdjEyS2dHgy1cThBwoqsn8vWdxqRxWxk6jhmdyj9ajJAA1bKKNdgrXD28NYEDG52mzedipVBCe8MqLiM",
  "key28": "4eQurxsFLQW93YgAmgcQVL2yiwtQE5es8qZwNsBWm4wVzGwZASKWYAZyZ633y97GYBV1nsuh2EA78hrgHY2Va7JR"
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
