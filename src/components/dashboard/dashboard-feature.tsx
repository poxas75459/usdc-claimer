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
    "48wew6jmSb5oRCejGXUDW8vUbdbiKL5tX7zftG2TXZ6NVDyCHNtm6ViT2AstHXBmNRZ3Kdi6M55RkSHgW54fNQr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRApeoocdQFHD2M4DAcZidbcqRVEct7M5o4KLzJwXUX7sRUZHz5W7s3SF1UZeo7krnicZ11CKahxc7MduYWnaUp",
  "key1": "zAc5GYKpmg1faPjAQ1QxwNDLRLZyPfADVmGrsauXFyyYJY5V1X65YQQ6xE8vweSnPAJmPbmoDQgt5wFbh4DHtUY",
  "key2": "3CCktiG2XbUpofLCHVL3dbmToGmvcxKz9XPUkwN7GGzxvvraSaeJtQSuxDickfPqGQFnfGsGuMXMi2JbvSm1C8Ad",
  "key3": "5DfynGcV51dzNiQuoKHKaGrhzjiasHD94iCiVE6YUKJYPRYz4Z91RgEEcnifhy6TTReCv37WoxqKNUz1D4LsAHA1",
  "key4": "4WD8tmvMnUYamUNs9Ev7VFAMztxw9TAffHERUuTNiUK8xkjgiK5eRvR9U3YautuFX61WpyX2z3zxTc3pD9pHfhgk",
  "key5": "3acsCz9wePMFP4aq1GxRxywqoqTJmCsdJC492noMakgbf2Etdw3nYGoLQqmuDG13CFfj7xTAWfSfnhz5rf7VvEMy",
  "key6": "64HopZtNW6EC6vPuc3aLMP1JEPMoqN8gZAUUKjg8tAHLdZPExkwPegUoSiYtqBNkTrqrxKUn9x2MERy6AhwvLn73",
  "key7": "3Ep6F94ECLoo2qVqk2mHK5Xn8zmy8tJFKVbYMikBKfTX3T92bomPU1e77tPDT7vXYMviC9vTJFV9RRFoxJ12ZkXq",
  "key8": "34Ut74CMKHkfFspaBJTC4BLqsWXx2xbNuBT2DVrjaufsZD4TRUgFznMPdysyb8uFoPpktT1SeRZVJhR3XeY36MsF",
  "key9": "3rryCtG7fnJqYfY8DCZvDHYW6WkrXMpU9AcQecfPPoWM5ewYrvenK6CWZVM2AZHSZrN9SvNYoK9iLUpCc1KtroiN",
  "key10": "35Nu1ZTF3LFf6JGmgQtrWBsH1JcSwL1jJeGZT6ASBE8RbyoHHTR7RbnaUtF6SnmiUdiPwN5kPupnY63djNLzpJXH",
  "key11": "2a5tckk9jzEd17DN1jpg7VW6imSfQDePYFRZ8UGjA6RXxAYmGjjAoX7GLGkjeWBsuLdyNV4RL66jyKysxv7RA6Qs",
  "key12": "4r2LZhWhg2ExZx2esbkMdtAfU4Q8RFouStwPDcAVEBzZ4JoXUT1tD9YbTsM4aKpkMo5DJ6Bc8PKDttw7woCMzAfb",
  "key13": "2RnJLWVKAdCELHFS2qS2P6uzUvezmUQkBN1cvDYfopzkndzCH5KsqxAXjzfUfNsYagv2WetW9cg9ug2H5smW9MHM",
  "key14": "2y4rW1vYLbtLu1TefbKAA1Np6nq4uG4fDhC1hac3tEq6R5dERReM6vdHK6jiJMheU11R6fKiSUAaBDkTs2E75Qyk",
  "key15": "Zzd6VBUa3SYmPSNXrcdco8qtyZJ4VVokmVwk2CyoM9N7GBnitgnqDYhhNC4vXK2CJDD2vPzzs524m51oyoyjeNd",
  "key16": "36pLk5NgmoHDhDn3Wa5EKYcfWqpY9fkGo4BJvCdv6G6DqcHTf6KNYDwKeLm8SuiaKQXdAQFruq2LyaC7ck2y7oGh",
  "key17": "49NudK42BpeTkqQSggEjQmwg26pSqHn2N18tbKferH8Sivd1Z6Tus5UbJkuzUrSkJ5UvdhsKt77ybU7rLP3rrtKN",
  "key18": "5HoTCUUvMLWSBS3JNewq74gd9tnrJp9D9C6aP7zq1C68YTsHB2zFMtE7HZ4ziJfv4uWzcjjNh54p7GPUXaT1pxjH",
  "key19": "y7h5D7kpQsH5qHu3geA8bo2CuHqkmi9oaTtguRG63E9xb2GJMRdx5r9xUG7yXoucg2vUX5dYZqu3zmr42jk2VAa",
  "key20": "3e9RT85QRNJXx1BKTJtQBaknPqZLLaux5TeyMBSmS9Lw729jZhS7BozoMw21UoCeRT5chzRFVvvVUaBk5SuTRztF",
  "key21": "43SDk7U8tWkBzWirbBofUB7B5omJTeXCAF8tE3BoTB71GHSkP4BtbTamcpVimegEfJLeBtHY4aYDtnugGYTUVKdL",
  "key22": "41wmeJbWta6WRUCkkMTUrjEzEhg4h6KFSeM26JnFyn2iid82NejWWTxtzM29EJgtTeXkx3c8Preywf8q4sHZiXap",
  "key23": "3kK3DgGhVMtePyMT6yJrgsFbvjU2zzyejD13Hc4xUuFGpB4fjJCbvH6Wb5LhHSHH8wai1FACxL4ygZdERyYdvKaQ",
  "key24": "3uaVUokcSgDaw3T9sHLs9L3Mj3fqADN7aZgy8wJ1eppiYPYMhog6pP5y9Yi1S6mGEPH53z9qnjnaCF2gTPWigzc4",
  "key25": "4fNmjJPcFQF236ShEKVWnMVEDCZFwQpMetvUiRsbNQZYCmXExnvPW4JimZ8pfCjQD1d2LvxuJqyPE4GiaFiiRbW2",
  "key26": "45jJGJetucNnYZynTy2Av2GgSxPczAxDuLDuAHrzjTXhsDaKUA7oL8Mey1ogaS39eAj9GNvGNh9NjHvqc5gKqSfh",
  "key27": "1cwNgh1gBbKCizHCFhnRTiCcovGYEXCsuxPAqnNVSYYCD18YDqPJ4cx1yZdfmCGRS2ibXtLzU61YKH1mTrwHQQD",
  "key28": "5xdqo6f2t1zcLvYTsZUb9xCLLEAcPZYN9t74p9ymBX4M4qHBQCb12TF7GLz9mYB1BGXYbUFxeYCUD9xgtVpdMat1",
  "key29": "357VGRjPh6gcdnyvZkAUYPWnn1QeNC9AuWBVW7xnzENMmL98GD9HQFCmjDmrTmsb3u5btcnXTMbnwJQPqyNQgynF",
  "key30": "3RVcw4h2cyatB28s5aixP5J2vuE8GcPLgQEDFkE9TuoqePGgZo7wUj7SYkv4BGVhKZ756UTMH1B8eJC9n19UzHSb"
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
