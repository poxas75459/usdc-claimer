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
    "3NL273wgmRKcsraipfSXXe28XdJHMsCTMH3XicENyfZWmWsqgm4KoUJ9m9a7Ff1iFj3C7Hrz3Hwj1HTPiFhg6m85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gwqQ3em77TEu7PrXgTmeN46umaRgLHJNgNUfQifjvYPbAsXcgwgrqbERkporGz3bPJ172zMADJBaWe9B5GZtgFV",
  "key1": "dQmM89mEqwioyo3dDsuhSZ4cTd1G5tgwH8FeA4L5M9qXbz4D57RY8KZCgHALqxVNNDrmJfoRo4RxTbpgDcqWrtq",
  "key2": "2wrMTbvtiijhPiFCh162cNo8YHVyUTzsPtdtkwfF92wagvFi3WBCuY966FVNkFDpUx6H658CTLweLd7qHTyeE5yx",
  "key3": "5BkDv69yo2bhM2sB2vb1hofWSxncQmso1VrdQSPGZpei76qeKHKEFM9uddQkLGsFv7dp6bR4bWqNtAeTVTMUuJbi",
  "key4": "AsTt3GuiBMzss8pnE2otonkmL7pua6WnLA13T2z39Dnjs7eXUEKdT4Jz51JVQGDqC2v2YtVnXTHQpXtDfEBCmRW",
  "key5": "32BvsrG6LS3yEW88kFD9p3NfRm1XTTVoDZKUBtfPyQg1iV2ED74Wy8FGmr7tBHHr4iFzJuLF99rdRcgr6H3FKyoQ",
  "key6": "2kwvsFvXhxb913SjD1DRRyLUHxPJMrcm7tnnQypu6Zo98oMwLdNJuTnizBpLuDkjKvTWVSnbBBqBfEWVW9gp276F",
  "key7": "5CkYCrf8rs8GkMx6USEhQfHtW5jk2okzLvLBYR7MxSZDjzxMoKr1PsHBWfTkeqhWBtccuBiru8ZgGfGfdRGooDP",
  "key8": "5dzfPEfDuCwaH5QqBq6PRdqVRy24BDrcicD4marMobjSqkPL7DJJBtGUzbBeSeoxvB4LsS9xpEmiCaoW2ijgAYs6",
  "key9": "2tWQBLCaw2eUYfWSWdtXEJ3B1FGWdAzoKRHqfrhDwuHN49oMxh675DfCndfvYCbXbBAWWYrxaoTkbp4WXkJGUcQR",
  "key10": "3AeByCW69weuyVGkSfMrSihiNtET5WBEpuuyApNMtFbsvBzQiU2y9rypZNn6gL55efyhdkrGuf4oxbdb8pD6R1X8",
  "key11": "3PWKrtyJX6karwgG2cxSaGpsPxP4pHRZgp1LVFM7ko7YKJm86vP4SqH9EWZDGewS3hYxhtivsckJTW3LfTmnnRQh",
  "key12": "4f5RaregjMYv8hzpCbQMofxMH65rHYz4RnvV3myymK8HwKGfSw1vYghrqKHAA5qTABaZq18p3rbDrqS4jyA3h9Tt",
  "key13": "3TZfkKiDTiPcAAZgiwvwHjzuiQguNPD4pfNVNtuX5Wc41qQPGRoheeDMRT39WtvN4pWXzy15VShjg3V1gKghJDY4",
  "key14": "3iTyCyWrzEWpXizaQHW2YJYFSfpnsM84sUKHz2KQdqfq49Em3hHEENHAQVu97bzdyRXPxu4xzv8o8eHeVyk31ut2",
  "key15": "2ctE7JMpbzqUqFBLi4zgfty5JnSax7exSvJQD621uZxgvoshrhzY6DNKaw6rm1uG2nyxCkFB2X1JjJ1yyKKDnrjk",
  "key16": "42WDinxCrikXZiGJjjEhAUDacjaoA2aTYKQf3KDkmTRMSqGjJSgcPSb3Vm4KhWnDaWpvHKsMiyCAGKBJUZx5dZ1J",
  "key17": "241Kg38y2YS7u7wzb4rQWRFSWRWbqRqhDRizfSQJFLTi3Q5J9TYWxEbNQCiqNtfZQYhoGHyowFjEWvzmBHT6qEta",
  "key18": "3k7dfJFLpWh4KhimRLzBaJQqBWGAXfbWJmJRSodbLsKfnfkWGJyJUR2LgSERg9s5jmYBcinwye5nLUpFJA2r8Mup",
  "key19": "45XnzmF9w7WjUDX86NvLPkmX99xeT4AEmVfRFMpPFTqNH55YSQHznpQphbip3qzVWrRyMBmuKbLsQi5oAavprZKt",
  "key20": "5D5poM61JVJmx1UwzkvQyA1hr2cZdq6bDSyBrHTYCtQeg41yqJmUCi4H6FhZpi8StAsegpegYqmwGxLsHdtDZ56g",
  "key21": "3WsPnxGB3oY4gQBNCtWe2k9Yiwv8WALvrVmfpEvuuUbUBv5NDBr4F8LMUxa8yZHxCDnhFCPLcMud78Rwc8WCr5KM",
  "key22": "5UgqYjYQNTFYb37vU7Atj7aG5TJBnK3BZs3Tqx2abiiCoYeC6mT4zx34tBtPiKSaCxkpiKiMuU8cQaDQsYrG4Wb1",
  "key23": "3n8pS4aM52ZCQCoZ5fnhJMUabEg5tMwk4KQQ4vMV7EMZ45TfCELrFwu9nRGJXhbDr4vCyAUg8aTyhLvaE9dtE4gU",
  "key24": "3TYruQnhNcXy85bsJAYE7Fz3UAsSNLpZCWT1jZkMYwbnnoEEjX2jHrUmugc6naCHEBJ3Kb8MfpBLHzqcuZRECZ23",
  "key25": "47JsYRK6P6gok4hFhEaxi4nf7FaV1pRpaJhvksheWhFU6ZC2vsaNuEqKDpFJVrtubJVudnhyecpMmQZecvDKJfiT"
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
