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
    "5vxgmJJQSxvLErh4ezG73bAH3abaN57iieJbQUhoRam9KFanBK7QYehVyrhdLWkRxyM3uwwYU3SX678dW4pF82Qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37g6iiXDDFrR2i7twfwM8yR67z2i2N9mF7Q8hF7HL4NBS9yDha9RGZ7YMBcYHNQ6wSHTtYkTBUoXoVWt1yhzAmDg",
  "key1": "4g7rpicN2xmEL9cBoPsTVQ8fGPxU9JbgEMyujQjTrMjRP4YQ5kjfe6rtzBU6o6v97MuL3GQwfJf35M36L7hb4ip7",
  "key2": "2pSV3daM2iShwKcgfw3fmEJR6xq5WW6dN8KjuXLbZ2s7WuRfKwkxjgdG4FqkyF2yd6jER68W4Bw1eJyE6yu3HxmN",
  "key3": "4dBmCovZdVWkJD2fWCYSwWnwFWMFM86RvmpjVDe3vgooXvJfGLQxWW3h2rRtM2wv48siSBHGrZDjyAtz5DTPGZsj",
  "key4": "3czMZS6sQikFUR6ZVBoc8katXYEYr1TU4wJqhddGGDkuvRA5GnjzahUJoUPEWpoHyyNESPS7sW3qydEC5e3aFAwQ",
  "key5": "3f5qv9yYWoSzZCVSAzUJG7NJqM3xtakyrJckG8HQomnTfwYkYr632yV3n6GaRWBfybL1XRsYwq2UM3sJVhg99Kgz",
  "key6": "3Y258qhUjg2xgDNC5G4nKModN65MfknWE8bFMvBBz4P3vRytwZp1w6aW6S89AoP94QWgHzmHcXLGd8fapoYfkpby",
  "key7": "2nm3uubW5Jx7RRtUPmtvfo4VWPWRJi2w4LdqmH3aRmW3yLrA8DZT5a6bZJLTDpsnthfPPequW2fMDD3jnycTdriK",
  "key8": "26KnhE1ixz5qW7RSehEfejCwACpBHv9gPBQwfx1AYGejKUtNWk8kgCnprLnaPvyeUXVqFsTzPgFxeKCxryCy9bwA",
  "key9": "4YeSa33aWMz6EDfUYdg6pZLD3ztdCmKCujcVEhqAYYo43VKU4mRkMCuGjH1kFA7syNjXBP2HC3bPj6qoeaYxYyGz",
  "key10": "3XU66tyrbWguituySWU3gbajacoRuYdQFNgVrzL9me3VNdgNBjixQZbuLgopNPNvdQGrYHZvGtwHU8DzYmnqXT5n",
  "key11": "2daJTjmCA8vJ6DVTqnNkDAM8rWsfQt8i8kVJpZ6rjfCTHCTjbRm3RfaFbjvGMzHXtLFw2ZGFHtHAqEScpSi4TRY6",
  "key12": "ZTHGSttHz9LTNxrXJJfqYtG9z2x1MuPN3mFrnQ28MveeNkau1i8B5qQe6vJxrnbb6p7pZdyc5XXwa4HJvRoWccV",
  "key13": "2Rji1fYCf5TCXnderLpZhakPqNX8Eo9vP53xeH3WQC6z1ejBvvLdjzt7ikvaU2VTkTrNMHLpkeH3Xq7CbQxe4Sqh",
  "key14": "5MeaxccYxrtT3aCm2QXWNcM4gRS6Ptsz9QUUeXnHYkcXa2dn7AUNTL5T3Yw3U6DzZU99HLvH6jDN7uUKSu8sBhPd",
  "key15": "4qZTFW3nBjMbbWtphX9TmmWHpzsC9j4jvRCHfXJYG7B8Cv9jtsBcPu3VVnUhHeM3zWEXCVtV4X5HH1qZtv13cQnd",
  "key16": "5Nefz2XFnxYsDLR5YVmEctYw7nUSt5Bf59T3YLGHFweVi4zkmmuBiYoSWGgmC8L5oQUEJkHpkVN4GLPcSU3xHRmT",
  "key17": "5DjiG5LxzUggTFE1K9ByrcNCUpJbe1PAwkt8EoGfzqj6S9DnZHaTijAMLk8sa38djoqr8DXtrefC8m5Yu62Zg8eF",
  "key18": "2STZr8jiufS9gKKPSUo43z9N91DLrJj3isFPVK6kzk3FsmqJhuAYkjafuvbkr6hUXg1hU6LoU31uAuyNbLMDdtpk",
  "key19": "3uogruWqtNuKmkZDuVeoQnBzUqwo5ww4cirpVac6tQ3w4Dowe1N2mGpfi7RQLpb2hvrCg4du1QMaXY7PVqtVKeEv",
  "key20": "KeVjYJWwvKuu7EzsiwtGfD6e8JpebqZg1VW4U4nLXNhLXqQVJWYbcpJ9u1437XsY9ZjXKEEBGi97gpG32uJkZWn",
  "key21": "ib7B9ddLZ7vgPRXosc2rhjec4pBGNij76ejRhs4PLrVLcj4ahxeXM8uYEvVguvosYpKY8VD7GrjEHaMSq31N215",
  "key22": "2WyHH7jW5oBcX8woxFcvrDEavuxADRXLJAkihpYBpkcCsPoLE75uGuKad8J2nsodQtkCnernnfB3MKij4DfZDs5u",
  "key23": "31nU9tc6qTo2CMSXzfnPzjGCTJ5si12BR4SEvFMYNQVaXVTTcjZQZA9YrasqNoQujzMbECaYDSCNFuW3uv3c32Kw",
  "key24": "5qHZqYwU9DAXUmKFP6qU2fwWXWqQkstvsdcQp7Ba7fgvs3dH1goLxuqxZPiN2piAAiKErdbyZKatoETCsiGjgb47",
  "key25": "3u1RRWbuCpYt3HCZmYyP32LUi35PhBHHxo91Q3uvFSM6Cshgm52N4hwuLVyP7TUGSwfzVEvBcHdeEUzCrrJWDx4q",
  "key26": "2vBvmNAVTMa5qTYjSCXuqN99CdJEoWyqaLAU4QjctqCCJW34zqT7Phfx2hXujFKaQHynXdFq92BJu7jU2mtoNDgp",
  "key27": "5r8K2nDDLPTFeP9PFDNcePZBSUcVvspQN7qXmsz6u5ygAPk7hG1NrdqggSVrWSpQsAB4CB9bzrdYfW5GQqe59tc7",
  "key28": "3fS3CRCwmHhwfM3J4u9o5DZE9TwR6wxNnyPZdyDi5G85RPneGamnS1f95wXzH6u77X5qjuU6MoN1N4VjpnCKWd39",
  "key29": "3fpyvAwhj2E9TT7Z7AbGNakmfLNjKLnxGqpDbxrZmVAKLzRBxF8t6ncTZN9hQv19aj2BdRnGBLx56T2ZCY2GWj4W",
  "key30": "5YgX2sqmpdpDLkGJFgQAVb4PW6hkV9nisckaogMAXX7xhkDrkmiHqvGHqNNxWtWs73d95Lq5KUxKZNFom12k344W",
  "key31": "3mHDbkhG85eEUq48t43E6fCw3RutQSRFpF1TXzNv3wzye3VcRVJ8widykmn89vtvHfwz7cupBep8CcTFqapRb5QN",
  "key32": "Zguqjf88mnHCfSgipQA5Cuf5ZTrYD8C6PYVGWXrRzpGuGPTtq3QbjriikRMU7A8iXwsjcbxHDnZXcCeybttcbgZ",
  "key33": "2UyoexZ9Nsdh8s5SVbYPRLSCHgRKzRWUJDAcUcvDhCv2ZvpND8qpdpX6Zncc5AHiTUkUBJBsd7iPuT9JyoCrPCL"
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
