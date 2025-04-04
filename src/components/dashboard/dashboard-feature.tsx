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
    "2sLwgJtBTt1kJ8RpHKf7KmNcTirmyaXmvt3uBpXjxp71jdNpjMWGaeNLH5mARnK6uSeoEE7Qeyq7bvjaHEvrirJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwUtkX2bE3jQQuH4uc8huBq6Es2ZyoQQRbwKunyVZH6osHQDgYt3UPYKAvQKKAXh4V8bXYdc3Vk4GTaGTcWmMYi",
  "key1": "hFGrNfk3oEZwqP67nstSPGDW8ZZ2ShSTgqUFLj4eNkq5waPrNY66MFJ1wxzJetRTDvY3MyM2uDtSab3yRmM9FUB",
  "key2": "3tVisaXhtk5MvfbhNcd8epNP51GXjYjQhtXFKoF9EuiguWhqBhNP79zLzYeYVDmC55YczeiT3qLxZB8KfjbuML22",
  "key3": "4T2okyJFHaQQ5JAg5qdqBeADX63trSrW5reJFYxDMfeaBJHsRf8SJBMsoZfZnHUbRgCyf8YudK6e4EYyU1vyhJAR",
  "key4": "2PgttidmQwFcB8xFo8awQP9fu9swfnUgpYxhEDYRZ9Sr5Kmtw55xNrmr8Vykq36ZRsJ9y5Zusc3vopBoRg2bKw7x",
  "key5": "254ERkJqS9qwvkwV3BQU73wAMpGBN8B1G3ykD6GFPQVkBFFbXBauEGwBNXEAug4b9Sq4UTBbezX6hHaT5hxopswx",
  "key6": "4bjUyc73mEDpHdsaR2g5R2AKW5VvGrcCRnnXk6FWP8hvg5BWzywCJVs8LD1S7Dyg5T7Ukyrmt99VfB9XokBen3dN",
  "key7": "3wpmpSGW7kz2pAqFvw2AUXfRyadm2aq9vuBbFRhD1WtjJYkQ6CX4knSFuZVPNUo9fUNMAEegCHXDCKwreUzUiEoD",
  "key8": "2yLGhD4CjdqVoGmLT6PCy57R1n1tSa6QXtunT3Sm63xmB7HVYxQWXmbqjk97WJK3Ctwtn2bWY8FBVWwvAvFZ1oj8",
  "key9": "2sVLYbgq6oQZJW1DZiu5SFrKT85MUR6wca3PZRJ33vmepApwGegWx62cqSoowjpnMVPWXejSeEbGXzQc1DEk1rLu",
  "key10": "43Ar6SqToNQxoWq4eWs4Tarzc19NSLK6ebuagzsDw8g7Nq5yn3UjSPUjz4yezdLGHc98AFAECqpsgfLYqM7ThWv1",
  "key11": "4nWrELZMzKatW5rNac48P6MYn8N3QxZXeV6cr9KY3Wh9ywqRXse7bLGh4fd4EJSqBqjnYBqqm3vkM5URcqo2zPuK",
  "key12": "4zbkmp2dZnkqAYod1hxKG7goVoAWXXK5qhZxigsA5hDzeqBDvRqauDP8we5p63sR7snpEJRbSS8f3dEzeiyL8mbd",
  "key13": "3YjE6AFMuX4y3aLbjDGVLCo4skgyfUTHRn4wmPdebTmnxhV9c4QXWRLGcMXA7JJXC8pafGF5CARevZLY1M7hLyza",
  "key14": "zsyzqkPzeFckfg24RpEVQMr6ExTSbaWB52saUV3J57ScXNXjewaa3nXh3Fy2y2Gdc8h86x3j4DMkJKbJpQq8gGy",
  "key15": "3APnTvjnq1yiAPFgQBRE3cV8CY8PxzdPxN8UZ8PS1HkFrGp3Kp44Rx2VK2PbRQZJpJ4g7JDXnR1oM85jcNEcEbYv",
  "key16": "5jeKueCpZ12Ed85TE7LkLNjrnnodytwjb4PHcHjkp5gD4jmx8XMM9DkN9DBZXRj4JLX4n5tMqUXAdxJrW9XoLyFL",
  "key17": "3rcTEa4nooviTzAsuFS83VuJC1h9iNR7HTYdQEnApbiWY5QE8b9pzZc9SVWNVYZ6aBZNeGYw9RWU7TSQTZvhEyfy",
  "key18": "2BTNrakYaF7UBKm8qQhoxbVKCLATVV87TcYvFMh3kk4tjhLVhAKgo6iKrkXTBtbgN3BcKDjfq9Kw5uuPyH8CLhB5",
  "key19": "5QYiTNRYM8M9X2i1FHxHnL5a4sECGi2EQEaKctyBAUrHHPwd942xJNz7xNi7PQmXUJAF9AJZtbqvEGzR2sxXKsxh",
  "key20": "3MGv6cBqkaoXx4YNK7rsd5mBQxHxih1PpZ7SU76KhSqYo4kpXsGWb4PNS2YziBSNGRCBspML58cQ1nYnP8YtVT3h",
  "key21": "4LBwy1oqRLnJ9tvFRoXQXxJC3UDVGUfZy4p4v1NErdrUAWufUUYj812WBbgcZ6yUdbdYcSX74sgCyUx1kbR6w4Le",
  "key22": "5X6px6nYT6d6GGnNFVfmTmm1cRAo6baFFYjCVKobHCH1ehwG8vyjGSi11oA5Wsm2P4zhA2bMeS93uQ2CMiuSrWRo",
  "key23": "2UhAQDhSCFTie3wjxkyymUQXnReb8MCfNYoFtLxGkn3wxKrHW3T7nkrBAWs5qncUY1hnxqvWcdio78Z8vADiTEA5",
  "key24": "53t1erVPzypv32cqRBtkHNGLbYQqDLU16q2utVGzukok7McsQGLsZWW4SSwdBpqRpekY1mBvjAamhy3qm2BtWhUk",
  "key25": "5vFiYLcNtVyivhKPCWwmdJSoaBGz84YQj6KtDzqupbq3uh6iLkVs4DmBm1desxoCp93aVFax4scBHEQDjQzo4Gen",
  "key26": "2fjb1ZRJHw59Vku68HVPYt6LhN7mHQ6QhbEm7WUeEJ7p9CFQKSUbqBiteJseqeSqGk4LTnQbwwzsxxsJTsJiH2dA",
  "key27": "L1zzpk5oP5YLYETcQmX7vggRJZJaQGD5ddLdBR58L1f1JgCDm6MSmvikDGPWkJj9ivjsMmwKcxnmsjM2zEL8Q75",
  "key28": "2zZuQJzuZQUuX9P3YBpMqEz7RaX2hKiPwf66FaUiMXfZp2LM6745mRnv3EGhjfgAydtzddvuNGLuvjnLTopRTdfX",
  "key29": "3Pn6pNHALiyf7132uo7HuivPuG6w9yKuqwZrnSdq8Ya8o6qB7YY2TnU6Zb2EePFaj1vUNP1xmbrVEUqx254qSjZP",
  "key30": "5YN3cATtQ1xS2MR8383QDqtyAEc9CK9ACWjDD3bvivPxYTkosF8zs9itgyGEMgaUtxLW9DALAsLkMjjC5H4twSSV",
  "key31": "5ngyvbpgZYibFM2Zt8wS6LNVEQ1pe4tny6DBsBSiqRxwLDdWNsG9kVhHGnNAxPqCwZYCg8LKGUUmeQhiW2ifgugT"
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
