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
    "5bjCh74tuiwf8zFrpii1aVaeqF2voYZtcovmpxgqeuB5SHiDvd9MYvaJB6M97zwJPxKiskWkSaKHzKaFB8m7yV75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HFxeVEw6Y4QuK9AWVZ6kyAb5Vt7tvnrJcT2PaEAhoXbc1MmchyxR8Dn8ps2TtEVNiuDfmrkgppemrwzdad6dwaB",
  "key1": "3YVkCFeVAwXzmfrj5qaxHyCYuaQBooryAzd5PWBE1htJK5AdeTGjq5urzGcDa47bDa9rg1fKNh6Zp1gkERTSCUMh",
  "key2": "25sTXVU7w6JSjPXWj1xjVQ8JCW5V6o1ToHQ2DvWDS17hqUTqWgW4Jwk79mQTmpJQzifXLuoNQetpaw4gNyrBW1Ad",
  "key3": "J9fucdXmApUr7msAqEVVWMqUtixYkKeyLCnwJCJY7j9jP3t8XQ9sucmEhVAzxuYKhSj9QYPqpxJ37sURWbGfKDs",
  "key4": "31zGLb85M8mUbKdgRHmTjZbxAcviKd5vcyPfsU192NDFYtsofSMyv3TZGgEyctc2SHuKsWqP9jToQq7T4gv7HSNK",
  "key5": "3CaWNtCfGtVgoonHMnhTwtcm8Qa7JxKhyMQ3TbPioTbmUK4EJ1NykKBqHPR2nLz2XcbtnjmmYFKT8WruUWBzGA6K",
  "key6": "efp5JcdsBGizsGeVMXEKHP9NrhNQeSQTPGUZ9cxPKqA8pn7ny3drzUBqv4WNP5meTv3hdzJBaybqLPnQZgR8DcG",
  "key7": "5i69EzVzNkDwTbyQ1aExKZqX9jGeQQqgqdP5Htr8riDJzPD5FrJwnEif4Wsf3A9KUmvtHZnGcxF9VZgr9dK7ZnhC",
  "key8": "2NgdZGUVL2Pknawbup177rRyPhHt8g2SbBTjgJLrM7PiDj26Nip3pP9ErEydBP13veGuJrYXwpTsEfzn4gnpLrY2",
  "key9": "5KfhpnuP737UW8P6yWdjDVtCaGYA9CDXbwJv5niYFV5Sd3JgCwhTAsVRZKYfWtd4VSz3rtKYPfSAymvQZEkSVePf",
  "key10": "51sK4Q9jE7J8eHcwRUe5Bvukm1P1EuYS8w1bSWzpBsZzD5fBAyj2ehsMKUEt6jL9nCUB3NjPjdGahhLbjyBngxNM",
  "key11": "ykx6bPYEgZRZbeYkueDNDLswVGmzrkeYWhd2wkttM85v6qaY9E87JzHS59GnLWdZmGWhiLMTWCTa2bVD8BmyEjn",
  "key12": "5jMo5ACTaw9TuMLrhpk2nJryuuzXVVv22Sbj9jsG6ie8zqSQMVWKcEL4AhNySmzJvRLact7u8sEEzFxDcPPobz4e",
  "key13": "21VeZS2ZSo4kno3kZ5CdP8KfZe632BZVFirR877TrP4m6FpNCUfUPZKyBF12YZbDqyAh6LQcxzRiqoPUaFFekkpN",
  "key14": "4CSKjfSEkz9q9C4H7T2z1LsfK2KxQg1vWXVnjCL4Q2GJXGeF2RtNvaMTBiwt7iGYKqfNAR5U1oH3EXxnyBnXXamP",
  "key15": "5UqB9KVgUu4tcSS2dqSdsFet76gzHGVeg9sEqMyRAuGQ6q4konkc5H4ikNjjxd7ucSFpEpWQ5AQqFLCdawK5jScp",
  "key16": "5GjewqgVmjDq6Mg9YQFSuAuNGhDs9Ddeh2qwhRnLTTkR3fog7JZs5eUsceG5rVk3t8mkB16CgSrCHE8opZhi6Zad",
  "key17": "TFw4ZnY6To16A6DsXYru7RsefosbskffW3ugU5vpXB5h9QRdcn7mK6WbM8wFjPpxKmFLujvdQe5oxUj2hN3vvsq",
  "key18": "3e72JvUSWWCHXsuRkFvApqwaLEpx1CiHfDVRaRrwU8jYp8NHfSjoxLKvi3u2VzyJQPp8jaCS6bwQnBZZ6huYWyNt",
  "key19": "59vaCWWGaJvs2TfhDowadZKBoVNgNPBfrBNcVkjFH1BtCqyamRdEjZwwhJGKhmPp1g2smuHi43zPhjiLjA1ncm5P",
  "key20": "54CVm9e5szgxFdinr55KB5vjxckDdRiCoJLt9q3RrK4SbAfSwDyBQDo84cw5SRNV3uVnG1UWhVqSh1pS74GCo7rv",
  "key21": "5YqVruGdRMbQu6Yg7Zk8Z5qSVEnHf5qHANgSM41JmoFfeBpc9CQufTFWuEG5QKGgaeickwuaBeamZT4YytRgkyXh",
  "key22": "bXHMcwYont8MuSPmD8wEVYCeD3bqi41VVgux4ifweKuwVmQALfqthL7tZHZHWTDNXY4kiPvXAtdMMfi4miojnyM",
  "key23": "5bx8g5mCKJxYAjK9M8Ro4LQaEXGp6GTWdnyByYdBXr8Ar9EaCSZYw5RCA4QQAPjQGRBnrernsufgcWF32Pz2ffrH",
  "key24": "TFnHHvbgncyBDhHScyE2jUhdQerETni2cVDfWfEwo6y5umEh3EcgXq7tTjdDiRXNpod8gu766xn9sySJE1Bth4P",
  "key25": "3GCZb79XJreYSpJNg6XVEbi1V2S8ZXrG8egDTJJhxvAMacLjYktDK8CfbwPg6yW7tiRx1jhTQ7WJQywSyorj8Lga",
  "key26": "5SPHgsT1E3yKY4gDPFSJ9QpREqEkj1K33DSYtaUasdGwzf9AbwQrBttys3EyKZfq3S1iyqGcJt3mD2z3cypcNGVi",
  "key27": "akyXGG3FzL2acxT53fHwMCrLf5Fr4JTCZmxqkHqvt7FGs3HtFh59z3JLgmiRok4grD6crEpeBQYCB9GZmwyrnYh",
  "key28": "3SwhxtYFT2j97E8uAGqBbxtZm6be9BVjUL6hfk29v7bw41gsna5Vu5U4UhGDwA1yZv5d2sFVg7mj1ApC5Lnb4BUv",
  "key29": "2D8AALPJNoBJfgS3v7cje1yScC9tgfuD6PuhVQ77Xgr6fLUBbdp576CauCtRztYFQKW6Dqrp7t3Ss3URqmU4s5tM",
  "key30": "2HKRpK6KQtn9cS3YwUFEy1YhLDNxhK7NHq7gootUdfKGrbtShuV39mgRSHBPYyKFTR7v557waFV6qo27QHWj1DWL",
  "key31": "5P21kumnm7Lo4GHENPzDvWpdP5kH3qNex8JBgE79QyRM9r2u9NHv6m9MVFKd8aNfEctbqcHTh3WG2sDhpnEw6ztj",
  "key32": "55JhShyQad4bLY3sd5Bt1C4YGBxJSWKeBcW22Zb3d1HaE4mYSghpLyCpP3aYhULZQ4xaYW3YMVoDXGNc4jvDUfbm",
  "key33": "5DL5hY4cDBmxuf3ZTrCjvxqoXFLZBz9pXPDvfvRRa6s5SMFn2qhPTpUUxYtSowWpx5zQTGARv43ZPckZXzqsX9LU",
  "key34": "4CywG4sKiDDCcwNpPX1o2qsmpcaWuKedkuFbk6HvBSnnSbVikcfJmE87sdEAWoMmafnCrbS4RMf1aUPVQeMDSFaC"
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
