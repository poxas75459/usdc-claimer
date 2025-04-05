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
    "2AvZ2bNQz942wRSwoBJhe3y28tZy8fBUSneWF93hQUYeYbe8KssuwX4nALixa8GG8j5wCtztqkCYtvwLReCNZZ2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ciYnbYRj954K27xns8jbaqbSYmKQrzuEaLzSDy1YtGs6ahGcgWihdoWR9MTkR6R3tjZbQVm8H5cmDCLbGCBxsqw",
  "key1": "4zcqN7u9y4nEAnsKgQw5xKwdMUsi73Zi4WjchaueztJzfjSPmEgo9jiB5BJv49KSWtZU1JnqwBTxzaL2gV1XM55S",
  "key2": "5q4evzq76gqKaaegPBrny7cBz44UPx8kipv4steeDvJgLKyTJk6TQrudniEkpGSa5GC9JkaHLa8DT2bxHTGFZevT",
  "key3": "LXBAB9oRqZzrENkkTj65rDM7AEzohDN44faRWDACw74r574if6DY4TdQ7H64uchvFF5DSx1KBgdgL9LvREsveh5",
  "key4": "55jpKvqDDdWPSM3L1hFfgPnSEAeD48nZdcaE1DdJWd1nMGiMpMdkkZQec4XwP3LCa1B1JDdnGWapQ8tiaJ2stCdj",
  "key5": "5piQTompSTLZPUngQrE3XpU3EM4DFvjETUM2MzQ4nY1XEFDVdYVCE9fZ1utyqYJqseXD3eqo12L7dYNcFwzTN11K",
  "key6": "3kTwtY6QD4mFQLGYAWLF4Gh8x6HbzfGY73M7QQjVSqiNvW8aajD9BwLcUdzH4T61pDzysaVrmRUBMy4s1TYyWswW",
  "key7": "4XFs8v8qoQ21XGF5Kc3bAzW6FaaocFhKAHGEvAfe3qukDXbQP32jRXzttkUogwLfmvmxawGGg6T2zyw94qc5DMzP",
  "key8": "53pAnRuYPnhtgL56DM9DCgr2U9A5cNJuyTReNpHm6AmvMEGwJfBqH2ACbHFT88vi88XsjdEht5R7MuNs5o4ZyCok",
  "key9": "VD89xfndT8DDwDwX9w3H99eHXex3MaNkLV739RVXznLxzjbBq5R9zpsgxzRx2FhCQBjm3psQYoNhfVRNsHJ6Gm2",
  "key10": "4JWUzR78BmuUqSUTkwsqmQWGp8b9VcUpZsJ6sMdSgA1mKYpSDZ6KHTq9jvuSA2wvGxS7Xyg4bvpHddFR8ngBJqaZ",
  "key11": "5y1ySXpjdG241ZVm8GVtAG9L2Tp2zt33SC7UBLrM88LhVEKAoEDQbsE1gPUqxAs1njomPbD1SPCFMuTz8gugRYCS",
  "key12": "4yckh5Awkd6JrF1aGBqeNfAC9PmKsSWBzErxdBnzUXbrjibFTDmpboCnJpFroUtVVbtKHSqxpd5Sqsvgf8pgTs4r",
  "key13": "22Z2zbubJd6wiQQoHXWmZuLyD99Gv8BQdUvDntgtmDSyQJu4MedfM6L8VSKvc3ywBmD5YNEu8hBefKrxxJoiniCk",
  "key14": "2iHT6QBiTg1EAJ8FmbJ9pbTJuKVT1uJ1jV9jq7MEksz1zTZx2nazS9V8y6zGYbuqugDr1BPBz8AUS8u35LAj38dU",
  "key15": "5GnrhDZGqChqp6JHfbzAYaGAzkDtSyCEcXTy3WHz4mNA8ZyhRLrbKZUnY43EkQaB3gy2GXRo3xyEvYCa8H6cruKs",
  "key16": "krzVDWip9kAD6uJ5xAxvtkFLWAUFwecTjsUxrxAZNzXGmNDSroPp7xw2gLorLC5o3U7mENGoSkWsKah2APJxxf6",
  "key17": "3H6t28VtXQL6NMnfL1ts7CktnXCWmXFcWwp523Xcre3F9t5q5H6CUvCRcZEwRmr5NeWds8uxJHtHVkWBv4BTH24",
  "key18": "48Gbnggk98RGqei3BNWfJW683awVqgqTuzjSiL2zK5jQsVAgQRfT6pMbbjWPvBJvkZTrANPtDqJ5iKnU4mXSWEd5",
  "key19": "2H9Zvz7WhqfeVAfsXMLjGgFQYPjVxjyoy18qD8oGEowAHDsGwzkTnfyCU2n1r1DBo5PJHDV2HwqtgXQ23mEBwLMG",
  "key20": "Zh5m5iSwcpkrcXRUgdcFAjgzL2FdPLtTbZ5jVox1p9yG3uJah1dmX1FjnEJGR4iDppJQXixc1FBzGxyYkJRKd5d",
  "key21": "pbKgZFCm11ZMiyF45RwV1RHyzC1PmVX1CrELxmPujLhHL3BJ8cygrkrv7KS4Na4xy29FQEg75ZZyoS6pCiaV8gV",
  "key22": "5RAXDhcSf2qxZBGB92u9hYfwghPpFCHxbQayJBPMxHZhPg4wqDQfeLs5jUfv3hXCHytXnyBRmyvArFQDEbNzZc2L",
  "key23": "nBqaBg29igU6EheZBDUqVZfqVukc9BRPUKbfrWU6z2EaaQmfSsSZHojcsynRG1Niwj7FUsRCboEyTg6zc9TeCQZ",
  "key24": "JDFiCfGro3GLrnvFKafN8Kc7irJUN51dN43rdb2PaayH85HijTwgSEywUpxAnCAXzh3SokoTc1TaNbrswWws52d",
  "key25": "4dPLUq6QhEBQGPkna3BYSUAyRn6wJwWjZfzKJVH5RKQzhfZuWTXk5om54Kcbm4X1wuWoyQDd1yQZRWzvnkKs2YZn",
  "key26": "2BVQvpz8Ag79A5tNXgDbQFpPpckuicviBsnMj5aq1b3fLpDZgXV6cwBnTKkNEATYdMtrW9ZMWMjnej2DpU7y9QmN",
  "key27": "2vh4d6UmF6Z5DF9N877Yk2mLyzRosjK87xQKN4ojkzL99b3Q7dRCyCLYcBr78WULeMb6Gfa4BoweEjT77qhDWEWC",
  "key28": "62snfsyui68hJNzsrEs23psNNvjMxECV5CajSZrHqkDsHueZUTd4gY6WcdGNdzJeWGmt3ZXN1iRmBhF5HEHNHFcA",
  "key29": "oMWj3TJMc7TpRe3FxvtRYirhde24UnxBpvuguyaX2fJhkhotMyGixiyeHnuiKrtAXJ6v7n6zEg6keMBqkvZozav",
  "key30": "2pRjVt8atv5u8j2kKo6GFPEJhQLPubq6vFRktWMVejGFB8aBC3bmrd9ySsPshuJ1inSPXMmUJdvv7WYj9hngabEN",
  "key31": "VAsoRGUbqVqS3Kbh4f38MNDNQvK1U8dyYGcxVJyzhf3AuiQ1eczirJBTb8YaWFaq2xpGL6Qc7XWwCNt1DbZnbji",
  "key32": "2sqBjt3CWPAL9i9iJya7CNyhTSrq39kuzdw6SNsxcrsZRP5rPbgKvFAsoSuCvBk1LuocXv6qEPpWXiaCcQkAPwLF",
  "key33": "3wKsFf6Dr7mjzsnxj8v62gHzBkuj3UqLKJKx2NCRQxwwrziKj17XQ5eH6EVBYfYU3rQ3efXAKRs5Lj1MSKCT9u16",
  "key34": "59Ugonz6LK85nCbcfnU1PCXy4sXPNyhFW5HN9ysRccm4XEqS5tNfaaKdRzUMsQX3eyGUNCkjAYfSnKtak7UU2rDm"
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
