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
    "4wXdF3p5eK74s3Vi2tQRmDSkxjQKUurHPPPAgVMXXZKpBX5bc7CWpfwUmFCE1hKWssXijV7yHe4pnd64DJXrJaRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyLZsHZvVYqMW2iu4rYdNDjcJipptaXSz61Zah6Rhp6pQJya59hRqpMR5uonp7ngatChmUTsG2sdU3oy1iYZazJ",
  "key1": "3wRuutqjnrYZJdrsEUaJpR6nZCFyCAfd4NbGR9BBByst48kpidZRBmLqPpENKt84Xf7GatbqtypdUETFaxLVntox",
  "key2": "41aGcdHWihUvBrCfNb31FJREGAD8STRJELG5CbheD1rRFAPXp9mUL7tCnqNFhFeNzBj5b4WnjtUvrSpqEuuDqknr",
  "key3": "5nQujYaMF8jX49vFXataXHG26mrQPkyZzE2HMMnN8q5jRvB2hoPzoxMp3Y3a3dgp3EPoFoxNLX8fVV8XJcUzcZ96",
  "key4": "5JYkXvhu4XfrCzPV95PSdSujJcjm5wLfENnm9sApUrFaMAJ73kC1joighAebWYZVLDowd9nqSdU3uZKqNB9hzux9",
  "key5": "4Fi7QMtHqXnav3LfpFb5WKdR3hYRcHBySeM4eg7PTusfX13wqhMYun6PSeghJ8tX49RmXjeFvEPwRcUoAQn3Cm8M",
  "key6": "3HZJ7N1ZTnwi4dA8ZTNjBNTWQoxUjc3tsbojfFtfKEhik1gC4JpMq24eUbo9xuQHKUNeDZsE7HqxfPp5EXrP5NdX",
  "key7": "3uaTsav3H3c5QiVy422Z8zsWjrXwRQ386KppXtEk4v2BC8MmkRZN1GCr5zGCJ3edg1BRUhNPz371o3F8AKBrDZ7G",
  "key8": "2nFsCrqenHaEBQUzZHZHu5x2MNFxBZ8nsB2VWT9A3ZkfpXBcW9QJKPyj83sb5pNjdeWKmGznvj4gZWd7hqzFtrCe",
  "key9": "8qAZKZZ9pFw1VArpZSKZuf7gvBt9vGVqftbusaJoM8zJdB4x52D6KV3Q9ccupF7bkHoxLDodZWkVbJQt7mUtF6p",
  "key10": "GkLhuJvi48vkzKA3s78X2qs9Q7M9rZkP29VPN18ckEq7SQM8bHHqpfGBVgCrst2MgXxWSFVTjabiVtSS2w2ptps",
  "key11": "24VYPsq1FYoQFq99ua7jbqNQScYi3Shy96bvqjVrSoCxWpxziBC1pJXG5G49Vdz5LsFqhpHcY4MU6W72Sojpfzww",
  "key12": "Z77K8w7ghM9qNqTeqPgEevQ8bVjuFrmmKQXSrgVDDCyxmd4viyT5ji9c6mjQfyiy2MY1KUyHUaTQqF5c2Kb36dR",
  "key13": "2wENDzwawRwjrZQQyMbvuoJdAzPpWAiM1rLseL3Mc5VhG3xhBoM2GzWUokY3DapP9vzWhkL6JpsjDo8HDL7zmuNa",
  "key14": "5jSAJxWwRW3FtPfAJ3SHAeNf3VDhPYcjftJvoWJDfYpLF7SFa5xR4C4GWotXRczeQPtair9qzwGSXNSXM1Bed1KH",
  "key15": "4zkfwHHmucLb165JHmSYDA3C2dpMCe7MEMtojW4TRGcJyPFrchH44VjdW8iUC73YB1fUEhRHPZbPEeqK55tEQuJa",
  "key16": "yrvh53FXs3SZZvLrNVYtzK3hajP6XvGuW4AB6kLDJonDnzQxfhAsnHdmdDiisUnBrJp5B6VMyGZNXTnivDFGMGu",
  "key17": "Vpix48YhuKAwqLK5Y5pQ6XRUkGdrJmCkZ67CLjT3k2M1rxQRX7npRTKRY4ezL1kACiMrtQp1xTUrFcvqdFVSpcJ",
  "key18": "61GpWVBuF6JJmpYYWPY86RaaqE69JRURw1qUdQowwGzznwTPWC6oYagNJPFuKZ7xhnQWUb6KBmYZ4oiATcxhCcJf",
  "key19": "5BqvooWDwRE9WPzuBAbh4Mo9cibrXA1J2ho76jHXBF7PxDK1Cxzu6BTKuu9Zqqhb37v5Ru1DnFTtkEWQ5b1xEc2W",
  "key20": "4qqiSw6hbkHrME4ruGQLyEG48KkjzsZ7YQB13rYbt7dVUxi1Jgf9FdDpyQUkEHsqbWVApUxXhc8r4wDdHksYVx8z",
  "key21": "vuKn6murpT9UgNnM4X27Z3GwjexR3QmkaQHj4N9dYH6uDAHpkz4spSaaKjTLhWx4vanZg6gBW7DjaZpPvagr5Q5",
  "key22": "XWzF81qUN4rUsWm8aQSfpXHyo7rwmAgBjwKGHuFjSft1LTLZS752sxcZQ6bgjr152nJ65NyDm3zGCr5CCAsqFA1",
  "key23": "4x12katXB6GYJMJKdv3FsHSFRJCXYDzyvyEsvHhiXGVAiKRmADeB8iJZLhid2w7ecy216Gh1kiznKgHWhLt7HNps",
  "key24": "tQPjcijShU7WpxdYERUC81KirZAu4ewjPakYMSofAWAxdXJoRdreCArxTCM8jxQRewXr85SFegzmbQfjq3fw9aP",
  "key25": "5uefT2mPXzzUiCwsE9rLbs3q5pHca6kjjTbZN4ik5ssRX7dj7LAErVP7AK8q62PusvUNFRkLcBmqkR7t1Vj4Uumk",
  "key26": "2eDDGwF8jUuf7au3UUR6QixeQwZLPV2dEmNGEU1bog5En3cshMLyEphGZxVvGZEBW3uc9Uk8zgMUdEq4GdvinpCm",
  "key27": "3pVB7TEbmXwLyxuujybbeoSokgyx5wQYm2en9JrzJove6M2J9rcvgGgi2Gx4SctQ7Exyog64HoYmHLJ3YAWTjo7e",
  "key28": "3FSsPopC9sBz43qReTpmyvwf2ifCptDfpkbHjER7E2LUYsFhTyc3rvfAL8bYsEnbhbsw9m1Xc2ghZqTR1nQspWUd",
  "key29": "6LLyE977MJRhxsZJgPMt1acchnoLnxKE5WcBYiwXHPhAyvVyEmXrPPhRW3Zwaq1BNd6rvTKN2Lx8XX2TXD7vBWU",
  "key30": "5aG15w8dM6qnqwceERvUyyRxquqfn42n16u51WpyEC6gXz2L6DkR15ig7ajRfTwg3PbPpmGsp8P5Fwi2ToGSM9CH",
  "key31": "4dJaYXi2uA8q8AEXNpDpDU4fkksAvNQgQHyoLwAfdPaLZugDVjEfnxoAZS1jj8Vwfh9dXHCggeXfj8uW3LaPetiw",
  "key32": "YTQ4cfVPdNDjx3xQyXqKs6cPcT298y8a2V5TFg5jEKs2UJG4cxkED35SwL17Y8UcGDGKjVjTU8Bykgxjf4opqXa",
  "key33": "25YhnP1HwYrV5kUqHPYLPFEqFC5RTG59L7vDW75SCEYRPRVRu9NSxQ64Gn7p61j2WutaZ4XG7hT69wCXxCYi8v4w",
  "key34": "3aB9bzbG6aJpQQt76L8tprX7f6Ao573mUkrNkUNqsjVQq41ZXUycNPTZeqPbPNfLuuGfptdwjuXPkqe4wybYaCQn",
  "key35": "2Be4DcXGmQK21HsYZmwSXJfqzqS1tiR4x1aZRrnw6Rt95B4ATYUa3QLZMMXmgwpHV1njmNUPXg12XxBjJBBqTMzE",
  "key36": "39bnHVN7fQ7hJbxocbixhwxpc4REwKepf5DUKk6cUv4cCrNYE3nhozLPiRdsNnYYYKw3Svnu3aiFZtJiMG2ZwYCd",
  "key37": "3hEQXjkVfjQkM2g1N6EpP4PuPgmbvsPtjoPUk9tAk6G4rcZfMkz6CKcNhetAuJm7WzQvQsgxGTzhLhRdqPQuryi6",
  "key38": "3Ld4MGELK4oR7J5gYabVyZuhDfLqCc53jQy3s5Qn3mUg61UyFdPZTDT685TitfwY8e5onbcQnVk4bPatA43MVFMh",
  "key39": "2eDC2AUq1moRK2P5vLaqzLJS3aaKpj7adujffYnPXrPJb7X3rHKD73gAgwLZDPtAu1BXuKER7wfVT5Ap9mLMg64x",
  "key40": "3o29pQcWXqk76ah3x6MyRW1AG9uHN5MgavuPiQmFX1x5CtsrgaeETLKbe2pFxWaqGutDfujiS8Gw5JtfdzbN7PAR",
  "key41": "2g7giNRinDpGVnXRMGoLLit2dvzhTmpizEaodmH6qs7P3z5GSrNLTJk2cM7AeJTPWmcYjBgy7aYco3t9XDgrrF8J",
  "key42": "2fW5iLtuYXt2t4oTKPkzDsLCoPaEwAy4UKvZRyHV9RDDK6JZAWRPTEVxwz6ooKR54ME8pfXS3kZbVDELLiWxs2Mk",
  "key43": "3Atr8uanJ5LPMgLDcni1pJBQhmGPo3uXCCxCz3ptLteFA3oAT2S7e4CFDGRbNHT5dbZQpLgk3hCf9pzp3biBb2W2",
  "key44": "72UrmpeHK41NAXgUY2Viu6YKSveMJYYEn2BedNQfSW8hD1kUxAtpoEtFAUKSqhm9D9K77C21LHCFxJXWwQ6jkSn"
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
