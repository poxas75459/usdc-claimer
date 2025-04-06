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
    "66YrAzW9oDoMw66CZYA5KgkcnzZJE6qkovdDBM5wgX9LWN5nqdRw4dVhMEMB5CcWQA57uxrHtFcnm9kXEwjvwb7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lwuit7BMj9JE5MWyu5nGj47JAWvyfEnGxGRREgrjiXq9M1uj18qYuS1nRHPBraXKsDvw6LgUfqXDP4DVRBsLF2b",
  "key1": "3b8dJiHmMGBagtnvo6jiyZQTauDoovPsXjW9mxJWnvYL3bBZmL8KFDiMyWQVGWXi3dtTJjzBCCbb1eAxkZXAfQMa",
  "key2": "5jWXSzWM6RKvectZzuYzpP2x4PayPVCQ1xcbF33J8Taa6FxrK6bpQYwqAH7F9ZCqUMb1jmFcXye7MWfxCsncoxSh",
  "key3": "39GLovmCmBtNxjFYtVRADPg2ohyiU49rw1NBi18EURA7yUmuH6pkBWhuEgP2jqULRmJzXZvXYRJtZcugEHdLLTn",
  "key4": "RVqJFv4Nk7AyfKs2VVyFSbAtYfAQtzzySbJ6sSfFboeS2eFMaNwwY96A25LowKGMDLrvfsg9SoPtccmZpUDrqR8",
  "key5": "4WMVZyaa5SEZGgttRQKSwP4829n4DBtGoNF5hBagXntkPiaUc5WPCyNwc5zYdFQDLXv8qRwdjnW8CkiygRtXyGUv",
  "key6": "5drhkgW4bp9gaHXNAhCWE7ZCrJAKzMbBdJgFjRTkrLiJ8F55HG2pJdaRG94MGavx9YfvNyz6njGVc8SwSNmSRyWH",
  "key7": "3kq19y3ELbwFDhGh5JK9pYnymFuoCrFm6EsAk9gqUTere8C9ZBT741P6cGapkVC7XSsCcschoMHgaSBsGuQ6smWK",
  "key8": "ruNj5j8iu9baC5kymjD8Zi7jYBCpid4zjNQBZVgj2ycsDm4uAZxSR2jps8c2rWjPC9oNcaQ5Yd18UFajBLfcfxX",
  "key9": "2sEyYzGUPwh3yRRNofk6LTRCd9EtzxQ5miCe8QoErjUn64q6FNJBbckapztugUC25GZ3DSbEXL3r5taZYYJfDQj1",
  "key10": "nW4Np3nQUmnJ66ECTe91L1pbVx4uJVsJbnNtia3Yz9xdqBKypkSuRsCnpWr6SPJsjZcw7TSKTwV6YkUtjeeoJvw",
  "key11": "2w9hBXkoRNG7zJWiq3d9WAMKNU84PCU3HXejpMbndhKoa8ootqCu4gLBAbGgKQHTL1bz8NepaMwJNSGbtKqTo16N",
  "key12": "XwJLF9nN82kCbbyYQAeXsSt8knMamqJUVuyuXktQWWZHaKBsLvhtU42999NLSAo5qsjp8aXSZBda4x6sdyqjw8Y",
  "key13": "2QqmqrSEmYjPLtL2a3qkWuYAW1AXDcwcVmVe6mJ29VStcrMx8D3EdA7q3cKqbvAG5iaDJQArjQncJtFf7f1gkKe4",
  "key14": "XaNmhzSmiMR8CSvSn2iCvfeUka81x2UPFv1uHP18Ztg3qxJmbN717gSG15UmVVGZomS5McZKaVTWyWLW95src5f",
  "key15": "5ZoYqzTGp9exiobBEYtwytifYi5TBFBemcvRSbX77jXdBtYRotDjfgd4aff7tc8sqZ7zWiF63SQbMMngfmHFED81",
  "key16": "3K4p6FBVjpohkgSTXQNZdhiwLxxx4bUnyeeqWYxFYosU6RKa9LP7bLbFLkYSX1LJVAbsRoPk5BXED1GaNhra7DDh",
  "key17": "kaRbA6mFa5gnk6LVzVJjA4ZaaUhr3qcov5XvjQPbefAeJyuCkomimb5WjHSqeyYAqJq7EU3CDn4bdtsRwcNKmVB",
  "key18": "2CBw42GxNQeeK3bGcnhKujbrCDGuKjfBvKMHTezYCUgJHexKT9iNvkRbFQ3P21x5N9fY9MuFp2cmTmZnFeNi9Hf",
  "key19": "4iQk6jsTage2o85sjJBYZYmoJXesRYXQMKnk2en78hET5DYk3QociFzCcMgHDvkZpGuG8UeMtiY84rFGhTDmwqWq",
  "key20": "5nk5TvPVc4o5XU47fVdyo1ifpWcusCHZTCJr1tUY2UgcEQsr34Gidaexd45rRvUGYVEo69qpoJXb1DVK2yagwUre",
  "key21": "3nkB8GMY4AAMSp4RFjDfPXwHXndmM9SHhKVv7KFvmRFwYG9dr1aM8EYjHo21S59KW82PkEUWcbGEL3W1szsUEaRv",
  "key22": "36uoppkTLYbWBTKuqbDX55PqjrQgaX1TSWYPUsN2e9QVKJdeq82mT3zQsURs93Fv8GRnC7ci6Ja1x5pi3UMMXJM3",
  "key23": "hARkBTgZ5CT73wPkzyEh2DnjR9oi2FxpCxwsqisSXiBt3HCMhqKuq8zzFsgy9P2Kqa7dGDXaL7phFFrUmz4TeY5",
  "key24": "2bfg1UxhK5h2nJbH1AJ58ZP97iSmMPwaqmqS8ShZEp6AZDvfLbhWG5Gu5Dg6jtPBK9GbzqQxkQWdYDPohJFgaqTx",
  "key25": "zCmVo7PQ7JLdd6yp7kUr23sysbZGSpwT6NftJt2LghgXVTYdg3pJ6frH5QqQ1pE9GTAYvch3kWY5vHxYFSqadTJ",
  "key26": "3UpWZHoEniKh8w4SNdFJifcssmSdWJW8oQ93RrdX1GyJbK5EmGBd8Smej8p5qN9bGa97DuVCsQBoYvb25SQYyZAu",
  "key27": "3ZJSUpxaec6ig1WEsXpKXuocALVXUT4USW1K1x7LHqpJeAteAhkJyDQb2noFAfAUef8bwHgmT5ar8SUom8QAqCRC",
  "key28": "316Lpm3QaHjSVJehXwp8a2ZXCsMhbbRjcFWoB6aJxvG7Tx1AzpA84N3KeWZ6BmB9EwWti7aCtkWUQ9SiJgFLX8tn",
  "key29": "4hz6bY2zRiFPP7SHKWvwQ7miFvCfxBmwe371Ef5QhQguT6ro3spmN3EnUuXxLefjQD47FMe81ZJ52DaASYRYrDKj",
  "key30": "3n8R4NTjvQCytnZJoedqqKieEWifqLYCzGTqsQYhys7QfqHaq9yXpn3Ln6eCJ4NdoG5MZnPVpLMDkfVZbwV596Ug",
  "key31": "2GHYTyY1RRre2hRVERAZjRKKmg3ptwSwgVEhnk6xxZV4HpS4SyMEe75ny3GrFfiPyJg2kEbxXrK87CkmBNSoPhZq"
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
