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
    "22jgSyhGF7QbsEuftbYhfmcVtgrFDLLC2tsLsfM9F4zp2DzPnUETwx8P61MbRvwjVS71DyiwKFnzEteRA23Zg2hK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPsQjJczbMgikdgKKLyXXZf1ViMYrUsCMUEG1At9k8SNVnXXBTkm91UpKwKZATXCd4AQjRCmuJSDhs38WwANv28",
  "key1": "AnWApZJ4f9c7u9PtyuqzYhJgxyagPqXPhCR3tz8v2AYFXW8M6DKwkRDGBeDy9MA4avuUH7Nqpmhpv6e6FnA8fsZ",
  "key2": "3uKzRftFGqthLuh1ozhSqwuu155gsEKeLxv8txEXwhWYq6si8Zt3VmwA9Dhc5jaPPt7PVFdhGZCPL3WSsNQhcxAm",
  "key3": "jtbjFuSouvnpqSvQZdbV1TyaJmrxBDJfZp393sWgox4uC39Cu6da9k2uVfgsrg6VV2Bzi5E53qPW3VF9wGYsw8G",
  "key4": "w5DGmsC4VMRhw1D2hP6nm7gQFTJcmFeHjtcaKfh7JTpMsRSazrvR3GvVFYZ5hK5a23hCwiGqAL7y1AusignLx8n",
  "key5": "38zBFQeRL65WP82LaEqCF7yKD2FZAj5QHevBQx3kow4VrWc55uvewJ81PSrNKjMGjYHzQu1jj3eYdRaG4qFiomrm",
  "key6": "hrXLr4GzztivMsva4EFjAmpofck9DkVo1rcugG8LmnVbtvrpC7CcpeTau791sEJjTKmctxp72vGgstof3fcLhfU",
  "key7": "63vtE3B8qpu1YDLgBn4fXn9xyQJK88wZ2SyHo56ginZSLQux7KbvwuF1nHcu9oP8KRqSrvobnNNaEHv3qdmhSwsZ",
  "key8": "X7pGsfeQRHFxGpDX5jbuuSpMUM6kuexYtHqsMsqQFFf9XrJAnCPf2mT1yqbiTiGTcmsrTPn1NC9qxwUwGHHTt7K",
  "key9": "66Eq7rMEJccThQEebdMrvbQajwV1rcsPyN1K8zhrrK2xCzYZ2RWc8PjfVoHZvtDMUTksFB1YENomoH8fuLWEA9CR",
  "key10": "5dBQRGd7npht2SHvXbxtYQpMSzwVHsjzqWBE9yotAomSe4mh79w5zewAk7JvHzbnh4siYanz9dG1KPXPWBCE7hm8",
  "key11": "3dycecKBqXfFfdmaE2r1aBefKfCu7m6eekZLs4vuFpK4Z3uYLecDsAcDtbzKnpVwK1Fp4aee2sQLDXpaZ35EK1un",
  "key12": "25UxRY1KPuanRDLUKYkwDxSnbDNNQfJnWjtJHeCtc6QwPNGqyPTrCF1an1JusBQ6nnVwui1ATs1kaWivboeWjvxJ",
  "key13": "2h8CfiGKMTbEbkafp1DpjEAH1BDDk6oVraJ5hdxxSk1TtpSfhrDjh9YuA3TPad1TXVpo52b9bEyYStoYVqWnWQGT",
  "key14": "5sppZ6vVRfnpk9fBPdQfVGTuaJqV5QXXWUSDyoazrRqb1Stm9L6qfJZxaAYm4fjhqWwHSf7bh71uQCwkEoCjLYU",
  "key15": "3JMZ8mZMEWP3U4b7AnjF8Q4D9gwTTXWRzgByzD7oSiwFxkpdCXNFp9PZ9Z3nxCpS34cdbWcEaYfSF9XqV96Ha24F",
  "key16": "3MjAfNWrtbw6Qi27TjHt7r1TaVX3LJFGoBpcLE9n6uoJWF5VeWabVmmxuVv8Z2owqMRAHYKrNEQLeNq3GC2BvT1A",
  "key17": "2jipdyPAZCo9ayxGEk64hWA1doUFgP4GYQq2Z6c3hsD3qbRquk6w64BJ5m5JKzDnmwHwtUyf1c4yYcSbF7xj42gv",
  "key18": "3eHv4d8cnR5Q5UMDPeUMRwmaM3Yc8xZFiTCTGe83fpcXEekdtDyNneTq13dSZ3THbS1sA8ioVowuhVnyWGRr6YVV",
  "key19": "2Mybw4bGvsQVoxnCK5XvbFniEMHoBrfDC5CVxxV9oedM5Dwx9QR8aPA3sEy883LMM2WkG8fg4Gfor8SFVWGTfoi9",
  "key20": "2wT5pJVEHze81NUwBvqAAbpmTG8eMTB1rCkeybFbXRc9cotQUReo4rE4GA8uLP7jGwQCtpaNL2vmbVEEtbTZ4eZr",
  "key21": "4hJP1byVQGBeqTTBWd8CBQP6mJ53VrNDM5Ptuv1SKiCYvmZFa2peAkeSHUZUeLVoUwT9bRhKkwpH9vHSXVopeCWz",
  "key22": "3TUC1FhMXgh5Vw6GiRvX3StzyENpofbhGys1gMgBHy5mMLFRhu8oWNdqUDAjR5joG4sJDPiy6XLcTY4o3JCri17",
  "key23": "27J5hVKYbV4vw5n9L6DGHwtSNqQQYX3GvWSDiqirh2rYN6xYHVK3LQFBXjV7zfGtbJVhhQwg9JRcv1Kgd1CU5kz6",
  "key24": "4FRf9fkZs2epTNUzaubts1ur6JHuHgsc45tPsVdyshDbwRqGHGd92Pt7siK7dxr66iim83aBL3bqv4uT8yMZHGhS",
  "key25": "qfBq46Ydpbn4P5uqQvpnR5Raor7vRzeVzAdMfz4n7uQTzF4WQUeS17zoPJcuVHZsYmzFTXCKirtSBBc5b2oJVHt",
  "key26": "5tUfHexN36Ku6Z1KULG7LFuJVaeTGu1eB8nrK4FousT2qhJXjMWEZLzQTDE93cuQmUTRApoYfQ9yWnfGEvWDsqkC",
  "key27": "44D2cXWLGbyLDKvfUweDjhWfsSGe5Ng2LrjCqngSEdHMQjwgRFVHuRButQu6BY4PrXtw3sq3Mr3vnUFRx19yebnr",
  "key28": "2spjnKm6HubqWDbrGrSRhg9hQw92rT7RhANj8LHpREQtiR6yy7mmCBUmYWqkrFGgjBm4Ejf5UVDJwVPUrx953QKR",
  "key29": "2ppmwo9nzGCZ7cXwdwieP7K7vkMuCm69D4cNZ7UZvmFULhZ28i11BzgJYWApXgXd6o5S2TX9ZRwRN4gQCa23xuy7",
  "key30": "4MXvzouYujjL3wZof5uyEKHRtQ7sWa8dDEb8TS1p4rmTtrmnYkF4gYUxPYkSEG38Fmj1skDUTeyfYeHg5PpkGarX",
  "key31": "3UstSqQZStWjDJVhbxoz1uA96hX1DB4PSfP3hJDfPtddPKZPDA1zGToNxE5o3Lt1ct9UrcdAzUMct3BCsTYT91Rm",
  "key32": "4XaoBFYDEkdiCAXf7BCFZdH5coWebmN4kuqtv8Z5ECiBC9sCX6vxSVhmC48c1ab56eUsQ1bGsUw3sb3BSLUWQVx9",
  "key33": "4VEHFeyv5imUTRaifKxsZX8pk1WXtua93yBTv7YMzk1m3hCp3VV7t4NUc5WSTcaLL3WwNBrF8WjwQgaA8wxY8sWt",
  "key34": "3UWRtFn4cKYEsJkXD4xAKCQHuVHM2c2gaU1bNk25GUBN8WWeE2fwJQYTFAYRE7fCXcGxZRq2m9G8bEB8EDU4MiD",
  "key35": "3cWtysR27WgKHs7LuCBi586ztt5p6dSgnZvBzcDGuFGMTZACPP1mFf3d5va2HHLNWMrGvFSQCML4MnjaAaefKSyA",
  "key36": "3urUpbVwwUqvUC9MqoKm7k67PRJV17oMNaGPpLjMY1pBoJPpa6MyAb4GmLXL1PG7Z29jQXCkN67HtoK1Z1ccLEB2",
  "key37": "2JDiHAKUSatE7J4cwHm4vwbH7gEQiTQGbbEoXRsyHQ7kCpMXbLWh1FsLb6gaNt9mpMzWkpCjvJLyDJh7nHjwtcdt",
  "key38": "3mMyCiHLBmm56emqD7MUTGwxMgQY6S2DXQbhc2yz39a1xPUUn3K4W3ZxijtnExdwejtTSc5VsGRzpBpndvKeGi6o",
  "key39": "21BtcY3v2Ta1umdSPo9dLKRgHxMt2q75e2gKiUyd3GwVtQtz5ZXRVUkML7AaJSVsWjENJ334uossa743TyBVLikE",
  "key40": "Jd9UwFG1MrGVwuwAAYLoEMw3mgrDULnsHey7jokFKEiXWgug7yKr5pAF41guc8weAcCKgMaAjMLS8SPCGQAuWP5",
  "key41": "63ieBoAMwLUfC6QGgacs8VXEKase2ZmccYzLBSLU35oxLzKxyH9t79kWZtrk3FtUb99yaLhfwm1vZPz4swRuAXhP",
  "key42": "Kfr8SHHcBrFb6C8Aux5JsiUJrmK8WLoCHzmXGFD1Yk31JfHX4tuqDUKanDTQ2nDj64xyYZ78kbzBiUyKsuN9kWB",
  "key43": "5qgJey7Pq6dSCXhQj34bqoNJXeJ4q142BziZ2dWBA1tSsY2VtbotBGL5UqvHPFyjjZpotkZVR67JiEZyogbTHaK6",
  "key44": "4XfKLgibBsMmn9FVPanXPgs5jJRAbhMJAn2CaMeptisWxXMVDPYS9ZfCaDq7K4zCFJQS45cxNxYpVE7hV4Qfcg1u",
  "key45": "4ufSeHC73CMgFjSXmFqVBG8gLQPZ4hjvXMBp7nJJATwezN6W2hirv45p1a3jespNmLn2KgFw3e1bMh2c3Tu8wQK",
  "key46": "4fWqfM2wHY8LfHdHkRExY9pdEqaMGzTdvmdwVcbGVnPkE7VbfcmYddFPDBsx9hLdNg2rU1rDHicwQ5crxKzDxSgp"
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
