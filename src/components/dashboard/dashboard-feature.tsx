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
    "2nzH2jQQJgkucevKqsqNAdxueaTcmt51dTCSUr67oHh3z3WWDaKgJNvLiNgGB2a9d8JyoxkT2EYhdYUYCe3vjvX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HKAchD4S8BZvRs9PjHfqsZLw24WmrRVn5cvhKZdhiwaa2iLWPGrsZGYRzxKtdH1TJjQwigTGD3iLWbhkSARjDdY",
  "key1": "5eWwHLsHTsTSQ8VKWgPbs1LCnY9npF9iAGbYYFLmWfUSRZWpZhhV3ZDjEmDPS76NFXUiC4Xqw7HYjzpDZxvavCfu",
  "key2": "DwKCufN7yGBgqb3St7j337bdweC2mcJKnyH9fhP3hqkuDNUiodKNbSZMi8C9WwctS3gSx8xgt1zN6MpeyGrnvrf",
  "key3": "635mYNwPuyFQSigeyynSqUq71qT6zhumvjKLyP62kTfGnYkqftjbNxkF4SpGSwCPkK9eNMTDeAcZAR2mvHokbxeU",
  "key4": "g1a1ZTfTjgs8d97CvcuiU3hEvBCg4mrU7FWGhjyQoKkDNC6ecGPqFXk5uriYhr9X4Jw1yBmDqZEU7pVuVn59wLu",
  "key5": "24t9DR3pFYKAUNkzpXFeMLKXCwzXWBh6kDWcpKJjjmS4r68Sf2trhArp3dhuBs29m22WYBMhJ7Zno4pYdjRyd5bV",
  "key6": "4cwmx8T2HacR283h8DLBj12YP2mJ1dpJikCZFkovTyA7a5ZrP12drbZiC2xd3EqQwbFUCU6BxEXwkUwtBKataBti",
  "key7": "4Dd5CB8GsGfkS2zhrLBC1J3scyuSRuN8jEwJzrW3uy4TwBHhHZpg3UYLhewucs5G4Nvafpwh9brBvqwHNPrq6gxL",
  "key8": "2osfgeZuqdr7P2ZP568ramj4upcEB5vhHLf59Li6GQTNsRhKww8Xuxrp2TMqBXZLh9zoUmPjMPSgaaY2QHBoUB8k",
  "key9": "4ehfnHLXcZHzEL2wufuN4HisZgpa3XL9qnMQFMoeSpWmrxcTXpfzJxW77VpKUAjJKdTnKW1B8EYigouYLffXt3QK",
  "key10": "RmDubRg5GjLgZ4B37ysbbi6ZqH4dxNygNot6isoD3JPagQuSCZTm4kJy9sQdr3TWq2WoefXXnegYbxoGJ3jJZDn",
  "key11": "2EJGghAmXbrU94rdm7GnFqHaNpt4hfQDcmFKSQoqJau8KBXSCEKSFYVggxESmvFRUHU5xAsi4SZjqVnPQcW2EFRt",
  "key12": "4gPWQZZeUaz3JXvTyypFdSnWjaGLvbvKaVsd3e4aRbpf4fCi2gaWkNs6uaixYYqD3Hy41nXA1SLFA4T86Dhn39dj",
  "key13": "4pYEWazWEUtuho7V5aUjyQ1JEbFkekTZqs91M9LxqhJuvNJ4xVCTJmUHEyxNzzKi2DQurHwLF3ijKBkYPxsTogoD",
  "key14": "5cUMqovpd2Ho1koYmHqXQ9e3N3HhHJgCCiA8j4YtVb8gSWcyG6bfegw9qk8F58rvExC5y2LJDYWfffasbJMTX3tx",
  "key15": "q4bN7JCDHwwRyFaiAqPpXVku2ihAm1YafjQmWDsSGyzZF7zeGxFSDKnsApQhP3DF54zJG4T9qPHcAV5ioLkTFSf",
  "key16": "2HDhwiP5gsxHJxH4fXAETusvH2KYPLhUUN41BWQgDd895kwbqLEt8sYEdvtTa1SGAJAHzFsDAC8Fq9FMgn7XL69L",
  "key17": "2Qoug3BmPxT8usDUw9D6TSQ1VMiUmCEhZj25ZVcwmMvW1citgPwudXoB1G1qNViTp7Q9FGt51pyAmd9un78fjycd",
  "key18": "5T6ZtcAYS9Vc3iu4g7cS2x2B7Fkv6PWSq4gjBN1G6hMazXNrSRGE9vrxJQnkwETUDJEFRutLGzvPh4K8kkf4z4Ws",
  "key19": "2Q9zGSBG2Tb4UbmQsACVfjxp9hHdfztA98k2Ro8qwRbrp7uiiFMvtjEe5cm7VB61GiUCQXyY4AXoNHhs8i54d5c9",
  "key20": "acUe7FT9e7vRw1PYM1EpfDYnVW2PEtBqUhb2RLJPV2DfCP9kuTPCG31HfzszQFEzRCTM7fyMxEx9e8kAymTmkRx",
  "key21": "5mxkMsmcknk2h5BrteHJLcB8GypKJDYE6i4AEQ6utPDPCd3jKKWJqMCKanRk9yEEuZ8jUoCz84Rkm7FNXboRYeWE",
  "key22": "4TSB4WLcfdmSfMQmSwBzzYgBqmou2z2m3Z4SXY1WHkdYKZikKnESwSP1tTqoybea5H1gNG34rDVSkcKL3HL3UBk7",
  "key23": "zWm6evusNZUabGoMCdbpZBzXt1hKtNsZsKYaz4PxzZzPAC7Up5hqoEQjoZV1s5UH7mZttLLo422ru5o3K9f2znU",
  "key24": "4DYWQPnCAwFqSM3c2rQKS2C6sKeBn16rCiFDwXseMejuQPQ2qED1FB8K7nGJ8zZNienjH3bx6JC5mFYt6RtGgvNS",
  "key25": "5fb1QTPCqF4xP1SHcMuatVAxw8YcFNPQ5MzXiBUCAN89Ab1W1e7XEgrDFHaALoBGNj2HkWxGksVkdNhHPsQ9LSUh",
  "key26": "5fApsS2B9xoekv3bV1QRwV3rs25mUoo6M9vZTJogRz9wn2MAYFtmN2qgppKkC7v51dZBwuAFnfw32GE1qrPHVbD4",
  "key27": "5o4djEfca4APwSert8eqvhEQoP8bbqoPKBKdxFw3KQPpmGe31ygUyTWB4mK65ZKERHAv89HwkxAUtWG67eV9Cb6",
  "key28": "2EyLdu7NzCcTE9qHhVQsQaGwNz5TZ3R781W7f8mQqeSX47atxNTa3bLxupDAms55eaHUY1WDa5DBayWDovY2Scta",
  "key29": "UPwpSmpCipdAkFzyLTaubw7bkqmevusC6WZhn72qFCs7hP2vCEmLL6yjcG31zW8QAdcBkWjevdjKfzg9RVP2MCe",
  "key30": "4ZdKAznqD47ouiMrNNuX59mb29LXMveeocK3ENWvttAYuGNDfr8uvwTKUAZTkLXWgTwNQSJwCw6hvANRaJcmf5T2",
  "key31": "4GGCct2a9oRPgESUrpcABr5V4o6QxdkHxZbn5upjpJsbUUqpqUXgsbfQNMY1ffgvG49JPxC5oxPioYyD8VMqFSHw",
  "key32": "5EjBwtWfiMxpUBJMWMQoSzjrkTUeW7fsyLbkmvitS2YZHLkfdwW3kdCA6g7xCH3D7FGhoTi5T77xYPehzxoZy75j",
  "key33": "4asCDgxwpMabFLswkTstxqTG2G7MUMgsVDXcgnhu6HQspgBNgwt11YHD13bmV3rr7KS7tubqpcotftFVMPUSAGWD",
  "key34": "45pLZHFmFdsM3G4TxnpWFkxRcbLg7bpDWwLkzx87EDWTPkXLChsrLQSN75pb2bGXXVehMjRiH9Koo791eJAYrgp"
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
