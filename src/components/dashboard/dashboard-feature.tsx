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
    "5gaNx2B9JeMuA5yYJWaqHJ2CtGdMdEF3YbUtK8p8F8wjJ3t7xkGzo7NZaE9XnKQhzQWfB6A9KhzKmdGLETwXq99L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n8jdDa6Hqa5rsjSrNfEgH4Ydew8ZPuCwp3VWLm6Jjvz2hcr8JM763kcEaqVJbRYYm1H79dujBk6eT8AXyAZY2Pf",
  "key1": "2akAmDtzupWHA4gzPNNExB635cdR6Q4EHv6BSX6LAM1JW2Vb61qtqCEaaAyu8nt2QMwPKNwYLZtpPBARrAWsU32n",
  "key2": "A2SSLAjrQNuhcy5o4bLWWjrxrU4ohbeAgoxsfKBWxQfhxo8QHCh6nq6eZBgYhWFQUDdVMYuq9fsZxqd9nNigBVZ",
  "key3": "2cYN4op75R5frxea4VwKgMYVEPQLWcmvFMeRP17g6kS4iXhVFhrDWksPFZQ4tpxUuB4ZHfcyaPHdYxmPaEt4jvoA",
  "key4": "35seMNQGwaHTfeP8S7dCPyurVEeimxktcNHaQiMxmnwx2kdUhLtGgi3fAPe3jmEpXTTqQt2UCvb9nSWUkhmZHtrs",
  "key5": "4JvfgvDnTW5JwGceHqfGgqsvVLKAh5hmqzjb5yccpB25E1ExHxdDnUpkYidSJqrWyHECrBkKheuU4bMWfpZ1xCUf",
  "key6": "86BMWjfeDMYzyEXQN91qv7d9aw5hVMPmeHMod5s3LqJXp8WLmSgRicC94zNzpXUK5kgwMyLmKxus1Pc9StbMfEs",
  "key7": "3e5LRBiMSKK4kSkR4WNaGSrEz7mtW2X88UUZcJxZQJ5919dZ7uW3fh3Dk39gRzJsuHXMJEPV4v8Ntx7y4QhuiK1A",
  "key8": "5pstwdWnS8MZPGzAGhCUsn5FcnZ2CWBJVvmE4ZCo9kAwdzvMoPVS3c8iEGE4GTXKcD5TS9wHqMcyy3E86DVgJiUG",
  "key9": "4EMS8Bn84ago7YzXa5hLiH9z5ZNdtLbZX13cUTn3DhtUgZRnxw6NKysjpQ7hEzPsH2Q7F8Yqm138fHP8pZWpcj4R",
  "key10": "44zrrTyex88Az2XaYc4e1u7cFxbUC5MDwktbyPp7K3vQvxdbJ7ohU8Q9CLoZbspfqkP5xxtyFcqimufzNTw4U6go",
  "key11": "5n9TdPofYujbHJY98i3gR8A4Ehw5AW3BNJEPyZLzry4V79YUiXz2oozpG7Z4NbQF8p8WEBiur9MpNF5JoU8QZHuc",
  "key12": "ydaim7eJ8MkrNeJUKYiR4aobhez42NwEFodj95D3DzMyAo1WZ8e2Xm4VqN3zpjTNRWWudxMrcoiy6FwCzNny12k",
  "key13": "5BfmensSMx8gK22ppVJ2qKTnGNrcdLiCscTQz7fFqdTTW6QSc8xLep2tuBWhwBuPQr5FWrLErxnbPeqqXaDMQKBD",
  "key14": "5a3u5s6Uaf7ZLAgBen56CGwV8gqjNHVJXHMNpFWXsYXwgjdCbwMHkStg299Hjn8Zt7AVQj77z8CccUc6AxsZ4Zri",
  "key15": "27bnqqEEt583UwTxumJsUyhGGXrVh4UGcP1i8ysJpXoNLi6sbNecuPb6paQwVovigt3SknSAqUdhCaDDnvuMTyGj",
  "key16": "5SgWjDRbtbR9iTKUWmsSRKQUtF3sZSZNiGbianDKiqZUoucbb6V9VtLDQVoQ7LdSJ5AFi1w3j8M6MTcJqb6Xy9Cv",
  "key17": "5nuBG8QUzEC1sPTMtMzURXWZTDSx29dAbD2JMq3ueM4RgXXYQmfkPCe4Y1RBxkhtCVMqvbaQWbUf3Dag47GWvnQ4",
  "key18": "31LYrBZBGBRgmuQjQ6dMVQDCWKgzHBT4XTA4JijV9vQG9SBJht1n7xyrnUn4BGqaRb5RzQM48rw6mUL4gHwPhwKY",
  "key19": "56CBRjbyZinw7TS3s79JBUjPbRh7hLfWXhhoHWQiDv2jwTQpc55EtYth2iwEELuk82KiihYUtMqMBuvpoEpY1CLP",
  "key20": "2WpRpr8jLqBo56Cu2P9LcZvjDCEwiJAiMWLPmpTkppVdFirb5wdErobAC4555bkD9ukKc8sYPEHU79Puam6SbLQX",
  "key21": "2jRmvdHFFQEy3Xdt17C2qxNf7BEKAETj3GiPC3NYVahBRnvvSjQx6ZKDfRuooErZVZUGoV5LVXnS1CPvtXSxosR8",
  "key22": "2ngCv8HJyLcGJoYoTmMexxEE6CrFShUEwiyeiKzXCXCmj22Dj6Km3uSk3qqCLYSUawA7jf6zTAz8BF17njtSJD4i",
  "key23": "5CyiCPJ13RU78dX5agn3XChexSr3sUPA48PGb1HBawA8jzHysAkDwTvGicqD8LJSQBMB6GduXmYqJuqEiBPpJkRm",
  "key24": "3q8LQYx22XDiMeyrNciS1PTHQjbwpsAcpK4gfurEaBJ6cob7TuQab1j8cSuGLM553jhU1WpxJzXKFpdUhr1cUUki",
  "key25": "5rR6uP7EHrcwoavuNPeNej8BY9bg28hVQuSRtX3q3uknzUgtzAFe5LAcmPLsUes4RNEVJKbRD1p4H49MCPW7o1R1",
  "key26": "5GwpghoszF3vrMkHkJWfw6aTAQ2D43WQZy1zS4U7BXaTMzszqErmodfAutfTaiJKLTi53nDXHoUo4Ph4stAHTRsF",
  "key27": "3JTy7TzwWYTxb33rcwLCPRGaSzw5zu6EJLouPkuCdxVzEf7Kr5LKDXqzgVuWLMdYTP6FZp2WyVZzNVPLtyEDMr7D",
  "key28": "4jRCEsHnxXZvHvvwHaSfvcZbgREjiekwhdVeffN9Hd64YGqJmJnjRTitLJB4kGjvyUS178VtWRMdqeit61aAKoWg",
  "key29": "62srEaXuvZ32zXDpzgV23ZsJ4DntMvkBUrEHmfjPHf3Gy1Qwzaj7LumeQ7dKoL82Ab8kBfYhj15aovyeNkAjkg8F",
  "key30": "4z6t6dkgEvfVzHCvQvQKTNpsSXCNJ7uFsbpSyHEqh5ZFdSM8GfdfjfVJppw68JB61qFdFd8Sy63Tuk9P7c7grs5V",
  "key31": "RdDqHKiGPKBWp5QCNseuQu5edRWexTxoDevuyzvPoCD5ttQKpMbBWwHCi8ZSsE3HVJmRwBFZT35zmjJJkAikwor",
  "key32": "5DtdZigbvJRbyGH6gweUvD1XNE3tCmjFqj5KDCr1p6y4YGvBfGJEs1yd5qkBk4FAErn2hqF2dvKxqvtwqsaNa1Tv",
  "key33": "2cM8XWGas3dCsKQyD8PfzTSsLNDM3byQrZ6AVQ9KL23zygvTbKPAkwCozR4oh9nNBgyLBpPtPvejpN23qABBamcD",
  "key34": "24eZgpb7eCwM7piQnmtZnGHbmwre14xCT37LMzke1JX3CVLdZDY7YbG7GCWWnEpFBvHdNLEdbu1yHkorTwajuyg6",
  "key35": "2NwRRMt953haJwHsDp28Lidv1v4WscmJqGKawk97VBvPxwHxrLHU2QHr4YcKgpGBdPrqWyMFwgwMvAD6MnLQ6FVJ",
  "key36": "4foFc6UE3Bmmp6CEXQHGwycbzmqpJDENhaZpqxszEPzG1kGVthc4YTe1vPJEtoQ4VwybPjnsJbDYuPYq4PwvZD17",
  "key37": "cFYRUcPpSYWt8TazZojiDL4KHJHfTvbumXTeZ6fE8eFjWVj9uij7UZSUsPV6TvWgXzL8qGDQaU3z5WHH2FHC5NM",
  "key38": "4w8WgtE2vVHqyzBhUtELnpTNYDcrzGhSLnU5Bn8cGRzxECUqSXr6ryCdUXHV5TsF772bQKdXj2JUNNXc1VecnvA5",
  "key39": "2KHUy8wqFDqyGQoXTSPscB2pb4YDRZJP6oaxKzEKCxLTcJQJHPfQ68aFs7T1NEcHGHrqpqj9YNii7qrtVGfX3NFE",
  "key40": "4G4cU7hGQuiH51URuLqx1WKStq8LXK1JR8CZAa2cVdmm53d6bSY1vWoghRqU24CCZtcTQiqxmXgZmbHqa3ekDkXr"
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
