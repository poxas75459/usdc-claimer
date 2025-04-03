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
    "Pch5rs43mpCgPh3UMFd54DiaCnrFpTsnP3xaG4GGqeReR3Mgb1R1tKfweN583xsgzW8XTpZqrC5nwogqc7bjAEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iRB1YaJ7iKpB1nExQ23rpfnpi6XimkUHWExWaSXi2keyvi6WBGnh9XsQ6B1n88SKWPHEwXZg3ws76mqmEbrbDN7",
  "key1": "L66man8x3kSm7hdbLn51ZCTuWztxuTSt7JJ22zd9Uf5M2SyfoGFopUXThf9mwrjZNErZT62toQw75EQSGvConfN",
  "key2": "2XFbgG7VTAXijAwqdmmHgrDYjnrQdqn4cede9C14Ymd2AfXLscuGaTg1JySmwQZGWTQx22rrqsYvAa3BNGewy2Lk",
  "key3": "4j1EzdiXv7rRGfTN4dDrddUDTkNQ1PNBP9xUVLerHAdwCZFE9pePjW1iN7xK9YU5tb9gtqMsDonHnh5pvYbmYeNo",
  "key4": "4jtcixDeLUYFgzKFpaxPBaFsvK8JQQfNFkaQX6apTCS42QpjQUcKVLWQe9XT5wv6JkhvmW8PRXebzh9VWZ1MSNMD",
  "key5": "4PQyBKWwTrTFwAFG47t5Ah6UumJr31VfBE2w7zrnomDAEEz9GWvKLNDRab2wibeBEmdtGTQ1vE1ZYhSmFSqYRV3u",
  "key6": "2sHsVFhBthsYG8WpJqbhuhhJpvtWFFeM4EWEa2MpzTAXGQPekp8rCgZAZjccNBjZxeHfE1kYfRxXmGzV7BXrpE3Z",
  "key7": "1MCpuyX5FimTmBWz3ok2a2zy5NQjCP8jL6mhWiM9toVRG39iB6p5FykiWqxAdNzqYaijJLCUPH2mHH6exDKXnj8",
  "key8": "5g2mZ8hPhvuCwAXvt4cg1csJrVNLmAa4nWkHjTcgjtz1gZheehEQAqS2iPQFWm3fNSuGvaSRfGg7xJZcRqg6YmZv",
  "key9": "dtg8h4AhkmiZvq9rcYsagNpaKux4N5pRcUikSLjRa4YRa4PFpiisqf6whNVEfetANqBio2T3kGrVPL2cgCufBmr",
  "key10": "2L5gNqebpDQs5FLWyJvBXDiiheo96yq1AfFm9x9ZCingFoF3VYH2TGJEi6f38H4f7Ft1J6CCVBKSUu94Ur4J8JWf",
  "key11": "3QUAFmt9nXdod9tREqZyV9d5x6o3jnd35x3GypL9BaWNdCZ9B1m1B5Y5YJ9wAcnokKcRXzFzAAk8ZPgTMeeKfkpN",
  "key12": "Z6QPW7QvLSkzFntHNzdKbzVWPVr9Ui7ehdsuDr4ibmUn1pekw6nJqYeu2k5ycu1R6dteM4iaenx2mriET7hq64C",
  "key13": "4BXncZXMwqT1buyRrrUEr5ABwmWsPJyNLnxSJ8gejcf6p435wUwtyQCJ3nGFb19TYCriT78qQwUaAxNXP5xr5xbq",
  "key14": "5HLh3ntZ1x3sG39yDiHevTRvE9CrmYAyQ1GmJ9toXeUsEPZejENdM2TR3KxFWim5Mhm2NoBkZ9WxQDAxmTjS83WN",
  "key15": "3YKXwURQfygXJG6PGWx4Zms2ZWcMrJPwWDJ5Kjx88p15tTbxaxuC6UqiJKwv1LqVDmQS6QCwAvgPTngpzMRLPY4N",
  "key16": "2jhwbT5YUkCvExvDXVhP5mU2EJF8s8iLGxCc6F5CnkaGMAKWA723i8HhQWxvJ3o5UcE9TuXqnp1aQUtpP7Zr9exB",
  "key17": "2JhuDFHmhxudoFqoBWiZz5DFpfqBxeuf8Ty2npPtSRNhKkZnxUCoDa39V3J9Xs6AfPKGKDfg3yucvJNuQ6zCMLkM",
  "key18": "3jPggWoku7uzJ5gbxmRRohRPEzo1v7MHML4CCKVFYW9eqEoEPryeyZ2Eo7pwtZzCsM6fZY446Ft5kjNt66UVvz2n",
  "key19": "H2X4eu9SPwELNE1xmFQF6B2XuGF5VeM7WWExkZBcqPaZQk1imS2wQ7M9eXRWrJDnYujy5LtWU7aNz2VCgY8fYLq",
  "key20": "3JvzoB4fT2E6q8dXf7pAk78Z2E7KMPE7xX1re6qYesGrJWg8eDrocphHrPLTNNHDjZqMbNRdGAGZrzw3oJpWhZpT",
  "key21": "2grNZMZtvj2ieAFFmojb2XvnUGwM3iTeE8AUbhL6RiP4Av3feeBiGksQSqL27DxmqpcnrpnRJ7rqWuHGXBkAc8FF",
  "key22": "4YQx2V2WXuUiQ8Fvh42ztf1gKGGhZMr7csPtpwYH8dpN96atJp3rCgunnB9d1nDQRhNYhwrLp6xWnHKnWCRWdHz1",
  "key23": "4hZwQ6fL1XUW976Y7XMWA99vGR7vYJLP2UadVZYsBeY7evTcydaTtVCThP7g3hnxQcQJdZCXN7auRYjjvvvrHJQw",
  "key24": "2STDgMTcNr8S3XY8Q24NyBZZSkQMiZgWo4ee1fwnvUmVxfmfRWeMjYYaXSSYjz9PQ83TuJph3zCCRqevkyG63HZy",
  "key25": "3Y4NxxbQjeLtpZ6sLdEuyvAh6yAAzrJbo6nTFY2YBpsjqJLZkag3WVti5DLiDDVZ3aBEg6jfeBPyMBM7FKTrtH7i",
  "key26": "4rVnvYKSHtZqFy7BDL2MLmU9prhvh4Ev5WF8JhzAQ2LCUQkVfo7XsDUxJSuFhFmqTDHBHEEzCgzB8K6M2hUM9wRA",
  "key27": "YdzFpvY3oE7C3M2qYoWUDUpgNe8UM7K24SkQF6iy7qqfGEoyhHXUvVhTCPxcc2F5icEGxrkncGqVkUFmj89qkFn",
  "key28": "3YAsYj8xRNs8XgKHhLLsaUqDRi4nuQKezEuWWNazvFVdNDfkrxqQ2xq1iH8BoxAnMdJr429VCjKXnupMy2Vm32BD",
  "key29": "9WKo5gEZaFAmybucJYXt5guPkiiUgn5EXjkbmSG5kq1bi92a2GkgxbwQw5nbcRiSpR1Erb91pgkNYqBXKVz8Rjp",
  "key30": "4F7KUgHTmem4L7ZkiE36NAbgodUUJZC4uCHyPk131uVoooMYUxA3F3zsECxQc6vsL5tGZwx9itiLbahL6uc3wV4A",
  "key31": "3XuJkP4WCbFkJijGUkKb2iUSfkneS4TsLMZjjidFdjd37wXSUdYy5Qw4hcqHyp2MG9cU7tygdcYN7jKw5S7P6iCy",
  "key32": "5L2st3bWjPz5X692tETEVpextsKVyLWUr7i2Vc7ByccMTCXe8DbA7XhUh3JTuxbYVpsoQwcMvEnwEXM5zfHnNDaT",
  "key33": "5R7ySufTSr5VzCRJu6UftXEoGJLWK4tAxhaWBPXy7SYhv4fXD6gwyGByD8aLQm54Q27LfFTgYzrxaxecVwKbCpzR",
  "key34": "3T5SSHRMp792iw8jkHTHBkg4WgqbePkt2JCjGUrz1eKvSvjz36smypADXo4NBAzdm68o3UuGx69mBv26Yw1SbCHd",
  "key35": "4XAKopN5mSHPaRgNwagWTzcVbp8nArcuuaceKiuy9QVcycc4H7G4kYjqjxHm6aGbnd11ZM1B94cvDvcZST6poryE",
  "key36": "2Zs7YhKYMAtXixLg7feTUGDixdQmr1KgLbxdsxRE2iBWXTVM1P5oS81KZgkyhdqcVfVe8f8t2HZtSxPmV2FiBueU",
  "key37": "4u9t9AFZ751YVBEutYfudwxh3E6KXX8rtVTtU9gQypm2oAY25sUbX3xDvbatMDPvhCt4qymm8FAMoshKbY6q8kgw",
  "key38": "VEHTGasd5UtnMzK3oe4FWZ1WbhXVJueUmefhpo9ULyuoAGrwAJxipLK3AyRHD9vtncqFiF7AZAGq6U1DnwnsdDs",
  "key39": "2cxBxVjcxcf8qrwpKB2yu7hLq7TuMB6yqB4CoZQGt6aHKppQPXkCaGm3GLYkDanojponMVb1gF3ToBuF2eczve8w",
  "key40": "4TyyyB5cpSiUiuvdfiKjFbzdfdZXehVHKvLMc1vXHc55AJjgaMDwLrfvXHC2Zvm9WRmsdBJDW4Q8skJ4aQfe78jP",
  "key41": "5bAbD6DSoJfVo4yi8zmyMLe4d8vc52V8pRERftcRaqpxUgp895zNir8yeX5NF5o81cy7sCh78MqryGBjbh3mnbnA",
  "key42": "5R5dc9A8vatG1MnBHwyUsTQ3oc3XTqVe7M4ay62QyYM29LPrZrNbpmQeHbrkdQb5Y2Dfn2FK1nrHHcPrHSpf4tqR"
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
