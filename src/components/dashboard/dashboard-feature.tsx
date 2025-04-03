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
    "9WvpsJPGyi9dvvWeqJmWheM7Q5FoTdXe2YTqccYkN8SAXTNT2xPYj1LkL22eizSYbMGBjJUSQmFatP6GVwGqAQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCSQG5xuXcTWgzYtgCofw9ki1LNpqqACa8MF5PG5TDsbJqsHFh9oSek8TF9sfDxTPvz2QCzYvnUkCwBp25PHwtv",
  "key1": "5VConnvTEoL2anJXFXZ7suNSXmXwuhaFRGyrCKDXwWEW95rcoURXEUCfh3t6HpArMn4fCFxn5K6Pbq7XRA9h4ccB",
  "key2": "2551jzoEanCvzS2ATqvHQGHgwUt7r5i3Avp2Esxkot73t1boY78Wfv8Q8EtieyhroeCKjtS8JzxdS1ZdDRDnPEGi",
  "key3": "4wvP6p1heUyCqwg8QREac67P12CbuXxfTkS14SVUgfM2z44vD5pAVWPBQSH1t8mpcx8nVSnTDb7wbGGYJ8Q92JRB",
  "key4": "3LWVf6brwGXagNddM9iLWuwNAuFjBdzN4dDtHk8SqpTEUYTJrdDRRZtBttbhEr1XxvUQJbgGNBq92JDz38zRC8UJ",
  "key5": "qG92EQKAbxw449nefMjiFtqS6L39i8dEVjMkG1AA7p2QUDoKLuLmCsaBX5Bui52PFZSyHwk5hntdp6uuKEvuogA",
  "key6": "2QBt4HLzfrunZHK5E4rTAHhZ8YN9TRBJ66qnftVxzQK7Cb7fbqZM3KyZ4QQmA3pMvLTs8GNdbWD9tviseQ9GZ3Ns",
  "key7": "3u857fXuTanSbT5WEq9AxJYwYXD1NeeFbK4qZ2ku1j2rMnikPs4bSgSWdCXf6FrQeRy7YUfaiFkAQa119SA2gKvb",
  "key8": "38e72KGeL6jRavCN2NAzJbKUbsCXv2Mq59cKiAf32bwCqi3GU6J4PVD9bEWsz2u3KJrsHWRULX3KNLJHtooninCj",
  "key9": "2fpmM4q2G8mjuamL1rvXjutdfYXLt5cPPYdnUhNd5nCxUhitxB9bDGvciFYsAZX7Eari1ZTeSVZtGaLwC3vsdT6Z",
  "key10": "egX2yUhiZP8ttjGtedroaRqLdzqu4WXL4SMfWkLjsrARMLN7rdYs7hk4QoJYBkK9J7oUUCD4YV1cFpK7QVTskdn",
  "key11": "3M3dUtMFD3UfQonW3SqLsdcXa8wgLrrJdqBnN7U1yje9CrjkEspE2GRH3BWiZ1iyvYa1mpUhfPXtkq6hL5px9HG",
  "key12": "3beeuceomET5uMhUVNEmoDMJZVPR74pDmHcTRMDzAw4nx8z7Z3C1aRqMczyP8HjaWQA8VRsiNyJEA3u8aF9ts5ic",
  "key13": "4azeicHiBXwhQ8GfuVvr3bYkatp1vB4XdXHMWf8j33QuhA7e1mJjieCe9NBky9T1o742uFpGc9tt8yrbooXh4j2w",
  "key14": "2PzsyHBzDDnYsMhajydTtoZZsXyXQedD1j6jmRDqZkEFt91th5thZbBPnp4esxyWDBEzvqKymtr6HVNSdC1phU2p",
  "key15": "4R7Gzv4ke4asVKirN5eDStSFU5G9y3J7g9WyLnSDW4DeZdBJqxFcgKkhZ25je9Qf2cxHNmcj7mMou68AvPvuKCMn",
  "key16": "5r6ZrZwCMRh2NjHTqmyg7vQumYTdreeUFZe48DdYAb7cM1MXRvFsRRwyzwjA2LvT7jNzMovqQFWbxa9a7m7iCeTj",
  "key17": "2LfFYzDpKcrU3kFf63enzXNaFERgGEJqVcyojKbXdmTUc2iLHj1SSJcb6kzwNrG2rFg344yzttETfwonQhCEYqVJ",
  "key18": "5sf8b9gk12QBLqmdMchtvaqRRT2ca6HqgAUPnKd2pHxa8c1NVsZi24mVoaqeLTUtHFbRnFVtETDXhJHcfNY3yVez",
  "key19": "2P6kaBM5YadmdxaaYcCt6qL66VKbPcqBro2uGGgnTwZusq8oGaEVLDfv63FoJe1YQ4zCCFZ7JhqfWMDqBc3txYSy",
  "key20": "3X7LgQQrTto7Fgsbu2cmXAa6X3PE9HrNg5cfmuw6tzJft9b94xYSTcZUdMFn18Dsj4kvZfnPi3jBjYvY1MkjG8mi",
  "key21": "3TAaTGyceXhaJx1vZvdZzEQ1PFq36tHCpEdD1FcAM8PEzEsoJxVNNs5ZytGDqhwmz7ZZ4C4mzVDf3abH6i2GkDWp",
  "key22": "A1Tdb44ECtswLMBiGSRvdXVdonczoNhjWm2WYD2JZ1onJwxh8vxU6n5jWcerTvKAYSpGhs4utCngZMg3iocpi5k",
  "key23": "2yi3Wzj9n9Nzv46BjybVb3omA3Y17Hi4JSFYwKTgBpV5FtBK255xQFCtvKfV4wZ37Fd7rp2WLGn9WcSrqCtBLxir",
  "key24": "2UJofWBbVJVeFdyq61EDtqeoMLMjHRqbKQUJPACqQs6YpQEqDGA47Xix3i9M3tVodxo3nZkF4vnQhBufSLQEUmqb",
  "key25": "5XqfL56rGWiBfG9wXVGGjh7bnorvNHarq7f7GzY4tBNYCgNkYY3PfDzvbDAaAHa4Nz7eCrqGdevShVZowmxM65Eo",
  "key26": "dht1TA1W66JdHT8TPZdHuvWRtuoS6iE1XUnHpEZR6wH6dkJZinGiJ3FHGLWNtzmwzxHMDgfYyF6HKULkYqud5M5",
  "key27": "54NybnNHauoeV2tkRr877egk9CBnguHqm1MdeKLsGJABtHb6d2YmxyA4QK5YuEkFPT9qdWa6FbtMgRrLx2jQemzc",
  "key28": "358n8P55HSsfUxQq5awRqFraEuAKppffyzj2aDzRsyGzQYaR7FQEJ2hTKNdVQHMw1bpVyLdBhupnEoaiRkyhHieG",
  "key29": "3eGJ3Ah25BvRnMHUUN9US2Ly7NHSxHEakX6pok6Ux9KDYCsDL1QPV4S56xLKuwkJJV8GmNq1hedFUBxcid1ZnUhH"
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
