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
    "2zHqoQTsRAvzB8QqPwuGpbTGRTKUuRLXG4oAGq9iu8t99hZuBhUrRaUqcrUC6tWVfSkeMo9zXeo1gPsCwXdCUTZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pmdkvXtRdUizLpSmvgWmqKpXVQtvWYM6eJx7gjA7xfJZpk9ThBNKjC6DvbkTcy3QquDpUD1LSkkETpwjbqrF6F9",
  "key1": "ktBYYTJhHESAeWkhqZfSVZ4yuprwByDnZ31ZZmpyyBZCS6iQNdiQwE2xscpTsB2USAvdxYMGEZ6wdaJ6Yq3fkLh",
  "key2": "3YZx4kEK8yLaDqDjudm6N63tKxzmgnSpknhYtxS7gzUUaKzpp9m9xHkdipyatAY4mFrQh4hhBmjUT4YoqVFV95Q9",
  "key3": "5QKUSyeMcfP3QaDVFhizjZEZgrnwZSHogYkFKY1A9T44mNEZxxEU6WQdFK4uLRpAP5tVCBaEDTQsCDwWG33bt63E",
  "key4": "4vKSsDC9TtgqW8UbAY8JK9km8qGKDSDPqK7VpwpuViqftSUZC281X3MQuty11ZxUqb7pZqRSMQ4HxQ9Ljw69GjGa",
  "key5": "2KiTZwjV6KkY9NPRP1CnT6EegMBpPGT7zYHb3t918BjbZee99f7tBmZ5dPsZ54CNkZpU9NRPvcABzQLxJD9NVtEi",
  "key6": "3FB2UfNapdxKGpZmLdqLec65vUi5garadFvgnKEP4uAjbpGUTJCJSnCLmaRhkNUNfsmvHEB88fsaRD9m7v2fdHco",
  "key7": "5zyt8xVG8tPvuprzxXVbyWrVzA9gEM59CXAArxJCWKTfu5YWdFDgV4mDwjUx22AJkKBJwNyQYCnbY5VxNUZ17VjD",
  "key8": "3r4QZXt3igEdm6qhFXNwaoY5ED7oYVdR6XDqXZcuYPCvqyFbG9RugpT2HmfKcSsEQ1JSoNu6SZdAUxQJ9EWHaq5d",
  "key9": "49USywd5fUCRAzg3C55SSZAz6fqwJH1tcW6BprbLzyyUGC9Xi9imyaTZXY6wr44C9WShafzfzBQgLytK64JZSiGL",
  "key10": "3w8dL5TcDkfsLb9g5KvqFTAP6UqsswQGJcgCKoLa4fpTaQjM8HtMCxN56esVfkGZELFvozJhuW8McGH2hAvdR1A8",
  "key11": "527ubACgkV1JeuMNy2LUe3TtezZ2fHADfMiQhKEG3Ka6eWtmytbvG8Zcb7Gb3E8h2zE5JfJAUp3f46cqAEBaxGM3",
  "key12": "5DaajFnVuBVQxictXBuKM2b4ERJzfqtWa6MtDY3CHgmfwnqtmLfGGLCX662DMsiPoE97yY2ZRSXtnWxKvkw7DWyN",
  "key13": "3Utquhp4tZHpe4btzxJkuw4CFjZwA3UUaWfjoTcz3HE2GhDxMRajTeg3HLsF2cH9YZs3rvLuQMKiCELoJqeyrtWz",
  "key14": "32NhzLtnogZ2fSoNyZxVdoKpDgc57dyMQ1GTUoLffewyro2GrPzicxPjPae2he3f8CCL5kHLKE8hmQyRB7qx3uDo",
  "key15": "43myZRmBaDqXZXczPccnU7BW4a4suP8CPTJzc5TmFeXrHsWyywvNsWGfjmEnt4SFEv4K2odPRiaJMiu3F5xyXPD3",
  "key16": "2PcvpqcRRQiS9Y2xBXpMB1K7zbZiJaYr3yZQGimot3h5fVeRLyoBZ3ZrZK78QB13m5ypYtznB29SzvRyXneW9UJf",
  "key17": "5D28ynwZcJW5wNnSB7EkWgNGi2Vs2VdXacMzy9arBmyUw9yX1H13cjFaurJLq9jvULCcApQmEwFHSFWTTmMpaU8",
  "key18": "ZHdMobqwMrFC8HjmUvW7XUtXKEu3AxGEN7gATAS73SGWgCE7tLLPTJky4nbS5wWYT9wJccagXcAtFLarxMDKqXp",
  "key19": "4ngTnFP9wNgcpKnP8XxR89CNZd4sP4ZkLNFrXNGkNVNMMhmgRYWaxAxF7ytPRPbo6c11fjNsetgvZd4rz3p3ezFS",
  "key20": "21NP3sYTzcMDuAqb5T2nMMecKVDDbC7ptgQdHNfr79yxNTFUoNifYRqZZtNigx2Nn3PjkCYYPFbJa6RMt3tNtuBJ",
  "key21": "4aEx8GMbNcvQ8ibxVy7JezZm3zRTdJg6eYW61WMfgDUuCnWggttQxkvnqRgKh4wsckNXT5K5o63ZVmaQ1Xie9gNN",
  "key22": "3i7fu3aDawrzND1eFzQaeU7p3knfXwkpf3KxNko8PXGRUnptEVJqE5sK9gUVD3kjtXRVQwe4MDxLjmDi212VKMBz",
  "key23": "3gk2qVsdHzYYfznagos9upd4FhCqFs66yLp7CtLJ8V2yZazQGXhTYRn7YXAKooCCCN5c5XgNuzKzbXzat5MYCFh5",
  "key24": "3vcgCw51AvLK7WqHbzUXPE4m6MrdjeXsDQVzin3gvLQoptuy8xUtZDZmEA2Sqq7VgtgBYc2uyqDfGgK61svTidDw",
  "key25": "4oEn9BAKR4E8fzRUA72okW4dmTpYsjf9rBfwoGGtpXZGEptXVauMiapT4L4kMraWLs31KY1CbgBDT7rEt3ZowA1X",
  "key26": "vwHDcBCRzYa8Nh15FDbayakXRHiExf8KnG36sf6HN5FLQBJyRqBqLGesSVw4eGSNMb4QZnXafxmTyz5R6Wo6ghi",
  "key27": "xUsC62f94wfn65a5Myr1kbv2hwKTj2hAHvcfY8YzB2BqxQLjq8FBqw8zVWaDdQc5NoT5UqcEeEbDM1Pk6RaRXrX",
  "key28": "5Eb2ArHYbevVE3CFtb4Q9MbEii69aXoX1FvnBCm2ikWdSM5Gd8myAbAbY82yyVqDZeGs8QB2YJZhp5T4KhofN2Ao",
  "key29": "5h3vEUvyqnxDcFDSf1yfqgaL3uHF8WxLRkxZUtA2jAFuCTQDv1Aw2cwjhJww2b6qxLt3gvp3k4r2oQ3NHCDKKzJe",
  "key30": "5Ccp5CXZxiyyPq6cdMjqpUY8wwZws3EX2TshGYL9VL2kWnDdr3XyB3YZWSaHdZNX4AutDiwCN1K8WubVR3DLR5Te",
  "key31": "2GyBM1PQ2VSmaNxKg4CVug1i3dtmtuHm3wnNXVG76ybkynhXoP6w9b6RftZxyhs8eAuxsLLgSazkZX5eLXKV8jzs",
  "key32": "3VGvi6RB9MvQoKGHAntRCc2CazWBAZjiQiApW711FzQtzuz6ZN9cxJSX8pWArvrtWuEKcQkwc4ebN8tMFrybrPG9",
  "key33": "cF7KNhRN4uqN2DSafwujEHpQkiCjieso1monqSDdcTjKHzvmuyQK9tEaAN3seCpqZ6wHeLT9mjTDfGQJFYhmWSb",
  "key34": "4xYbKUEufZVaH8MeCrn1otgcm3ADmSwxboHE1jNs3JWqMw3HpaQZ5UQSTFL3bNrU4DvxY7JtxhQqUA66DeNh4SGV",
  "key35": "4aCgYyxfmpXMz7xyvZVTNdejtPZphMGrMdZHMw31H4JTvFxeoHk3hydvS99fbND6fnqA9KPWMhct6WVAvjhAvyYy",
  "key36": "578SCage5yj7anyeia4cLnuCVREKNfFa86JoNkovSTaAZcF5RvJnTycPK5wgALG5xMTbzWAwxcfoCBBXmtuJ8qTn",
  "key37": "eqDNeLHSmpGh9WRfxX9KN1gcJNZxpjQCai2idr8cqc4hYx86CypZoZuCTbNTTFCy8qYGmpJervVdC1nXaCNF8QB",
  "key38": "33fiyXt6KeBNvEg9K6fu1Fdhj5oTQCeLN3ihmq2bJ99DhKTi61UtGDQLbSvAEBoMkFN9xkEJXkSbL1uaz9WYX72k",
  "key39": "247maD7B4ZVix5ViunurhNW1ycXsNjnhj2rDC1dDK8EghHiJQHjMhvdvE6D9KnseohzhsD3pxrKZ95u7JjaBruz8",
  "key40": "j6xJ8T6RMb8BGEwFmNRXdSCxwcsGChnwJFmkZf5Jcgbn9yS3Uy15hpDai656vBAcoYCvaqVLFvN7ukg6y4vK8Tc",
  "key41": "5VME9z3qGp9ELuG4spJ1fCxprQuxaMp1LotF9fWwohEyxn8CoJpuUq2BFMhggvF1VCWsvVdtLmkWBHB8wssGPPSg"
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
