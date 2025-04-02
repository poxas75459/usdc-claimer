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
    "53mLdRmf1tsRZqQJnvMK7Ezjk6cYPAj66D7niiBjJBVzDFUvYyYLH4jWcJCW8BjY7TEnG54BVLJvF6Cr5aFTyNnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sLVupQiH9L54ixizvtqBng34mwtueWudggPvyJuP7zXm9WTHVXNUV1HqNuhuUQsba38Apg3Bzitt7KyaV9iT7MD",
  "key1": "2EcKv92ZJp6skBd9SbsA7njoPj7xGUpQCouFceufnsNoKfYD96Rms8BfBqCFfW8JSJ7nccjQ3kVfXy6XweLyhies",
  "key2": "5FBtjw73JhsVXB2h59caHmwo5jq7E6QDmBUVoE5JV92Ba9Co6Po45vmAMUFkkSNHsosCoyU12vL4rD8nkPAeZTMj",
  "key3": "58VU1AphaRz2hCs19AkSKE5T8n9FqnhuKpNvQ5Mk2Awfd6T6qcc2HuZNiy3XEp9Fwsq4HewE2qjVcA6jBZVjCC8N",
  "key4": "2V3vD8WXuvmkdPkJA6eN1vSVNEotA65XQ3K3p3K5VSgvxEYFCSdzrVv87wkkeBFWWbpSsHGtdYwGNJMuVjjv4DPb",
  "key5": "4e3tzuF2hQy4e5ji6SLU1H5fWhCkFxjAPMus8SE1RpjjR7YHGk88Ph3WuQMhWVLxQ3KWXgEA1B3eWciehGCZCPK7",
  "key6": "49r3bAngFAUNUfDP81LmfyazDVBmVFFLmR21s7jW45JU19xHzXK2qUUBEyMA3aZLrfXTpXAiRJ9yXyBDs9UdnwFv",
  "key7": "41V9EKQdsGnr2ZK5B1v9jeoUvgNcPormvaNj6CSjj5eUoSSzPmYYwmY1rhwEgmLnfUVw7Q7NYo9invvu7eZLLLos",
  "key8": "3hcXRsUbTcWv7KZj3nUcWAmQXcnvrHfnAAMAbBjzpcvMJ5HMDCC8VkpWcTJH8t8jMt543TEegbFVbZKU3i2Qpa8M",
  "key9": "2maXU84M8nW6pLm78V7tuzwFcZxtL27Y9YVX7oAXqz2UZXaBUvc3awnGKQ5c4o2JwGHpTiTURBsXAACs399rd6nj",
  "key10": "LT16p7jd62vxvPt8v8EDDK6zdMPfyuVYuDMAymLjjSuEt78zbUqxW7hH7YsUrUvC3n7Hgp1yQ7cRZcxRaPxRiwe",
  "key11": "2xXxVXTUTegBY2YgGgT6Mn5oRTp5R8it3QQJarw4GL5QnvGs2ixYGkyfp8wjLin4K5ECb8GyuJJGNC3GMwfjX8kh",
  "key12": "2PCopnGNpvdSojKMV55C5zrwY4yoYssP4hJGGYSKpxtJu63vfyYzWDugJJ6s5YeVwN372BqG3w5omTwUj6kEPpV6",
  "key13": "4ZzjoX5ppZgSXqKuGRG7KSCR74RB3hiD8No9YzFqfa99qXh8LPzUdXVz2o2Bt4LzUweu4ZwV5hGmkMHakXkPEpFm",
  "key14": "2Xuv5oJz4CthhCz1cYYRM2XkHg8ZzFzcLeN68HUd5jd2fSFNKUt2EhD41z3mzX5aqrwYctxJ8yWhXAv9ETtY4NiV",
  "key15": "NkQh3XZVaqBMGHLsUbs3NJCw4LR8CobjacvvobnZu2pxjf7aH8xBhXTvSxqM2qBDLNuFoqUXQrXvE6kDkyDqfVR",
  "key16": "3Uah3Uh56oaY6B5cvZqa4CDzmMttL5ZvC4pb7hjGBsCjWS9zdiwPC6YsdiNsKsVGtaLx7BuvMxi3U8iguWWEZ1ni",
  "key17": "4NZw1ddo3QrP48v1SDuwSxfYbiMjgb6UTpAyRbW1o1hKugNwEgtUqyNRafRxZ3NsQrd4BnB3P1DEGAxunTJvxvnc",
  "key18": "43e8f5Z4a9e978oaEVC27jHpx9E32pFXXBTQViSC1ZbqtgnJ2st6jrGs3oPcdzwRjAWDBU4x1N9sS1nY3yfWdBWb",
  "key19": "pvHnBNSgM2vaU5goU69KtKGXszhgP2dWB5Grgymkj4rhDT7zkSJuiUX7FtX8YBEkJ6cRq3vRwQjDFyJ1cgNMGJ1",
  "key20": "SSAafvAuiqPhVkQnWtbjZkqBPgrgj7zz3YuEPNjCkFnsamfSSZsREvH9krQ7uroC957nAbzgQARn82dHg9XVQBG",
  "key21": "5MGY7GumY88TcrJjaJsYibc538GBTZ2GMjSzCRUiMYq8zQ557s2zdaGszTWoxqJWyEmsryzNRV8BDBvHFD6uMxAm",
  "key22": "2YmhtGb9QW6fm1V3LeZasUcQEWsTbf6aYVw6SJ3QHc21VMRUfmJBS33kFpvcif9fVwmd4q4CjbrRCKTWPCTQNbwh",
  "key23": "23obEgGa1Ja2R8X54weBdqvrugyTEPwKXk4AY8de9VhPWrLJBdKeLUHrX1VuGumbQSmhHBiAyGvkLMz1TBdDfRMs",
  "key24": "38WsCh2KYmxUHtLjmShbSCYg6pBRyXcgVBpceuSuGHWPDYn89w2ss8CgNo9SA3mZcTazpKSozoBtDVX3TVQwrAGd",
  "key25": "2iCsAD3wYJjy9re965jga6aiR94sEJ7W5ULEydqSqUzo3qoTYJELk5tZQgK8uhTtYDk3U6GrpT5K4JFsScQ4Ve8v",
  "key26": "4rMTjPMFkAgcWvLUxrpRj5pCzfwAUfAwiNfhnt4h2bBKCaKZ6NC48mTcz6nHUS3JiamGjYBv7TphXgC6oghoeWbC",
  "key27": "2VcQFb6FuumHh5DSqzXfQ35ac1gAKUZFbbpcS6yWPxvMdZMA4RKcdhs8zMZsYq25D2WEgWNxZAR1NUitZZwduGMF",
  "key28": "bvGiMWeMtY242HX8ZGDXkFFUDWtvjiLJgXsBMKt3oTrnpBnhB5xbQscgebMcZ6V5MssPgyCcoh57CHe2qdskUD2",
  "key29": "4eqb3yPPvHNrFbEPYwyZTUsaL2euxwKXMbJJSUThWEENnCrtGjpyWFrckS1yHYpeEZ1P8jmDQV9CGG8kJzRpQ3FD",
  "key30": "5zxpe9AirBU53NLy7pAPuZNNjUAoE45yFfL7kjfkskNQsi27XFh4wdsh946v4pAQnuwMGTUKbRFyBLwQzScK1BDo",
  "key31": "3CHwjxzo5f22jNJRnY1w7voGyysPSdDuYW4Ee3rMhU9MmxHPWwVM34uTteTAiyXwkDa3F2z7kSrzERHoQag36Sqp",
  "key32": "u9oqCCRuhSsQfVJ2325pWhcpHePLEasbSspijXGa9R3nR3qZsH7CwfkT2At2jUftWSr7ETAsTwncqgqWCuRJTR2",
  "key33": "FyJWmeWE74aki2QbgEC1g2mPzCxWwoBvZuAPZxynZvjQvzLKgeqFrP1M1n9yniUxkZHdVE62NndYmpNCByeUVWn",
  "key34": "2At4TKxoLimPpGEpZvTSfwaXaBMNBPhkev1sw5FBJndjpDSbCPsrydt7s277XyFcocPcRs9wJ8N4HaggGZj8k9Ba",
  "key35": "3daLtuG6PNxMo6bdFCxkBYaM4tzGpwn9jddVMBQDViT7eWbA5mevL3jQq4TBZBNosKmFmdJKKZP5su2KW7m45K2c",
  "key36": "376vQapLEVQAHdv6ZDoZ9T4M27TehLEC1JEq2211fWMEogcN78RbmRq1C5wEhqVpf9yr9oCEwKouGeqi5b15QE2c"
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
