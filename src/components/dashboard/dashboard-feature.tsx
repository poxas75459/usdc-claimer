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
    "5t3nEwfVeQjTAXh63HawHF5YYhqWFongQg6uF7gKzam2bEdPCdR1fNSc5s13QRKzoJ9iKmvd1VkVaoQk9RsR8y8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xP3XHwRtTq9rPokc5eiYgVFaQDrjz3UC7vm9hUoXBfjHSGRtHc7JzrvL2Mb4pJqbXf6cEcfRuJKPfyjFyGcBnnh",
  "key1": "2dRjrJ1CVXNL4YRzhRHkuXihf78qLYZLhLByaxgRq15LWJxUEvigg3Da6FkCXMk4drz5DdD5Pm79QK5gf5mfTMT3",
  "key2": "b2WKpfQhqKpp6nts7Sd7ptDyiSPjyQMCo7tCFRNaLmrFLNsbHbMLbQLtuYn161xf9Yhh6bJ5B8xawbrGjD9RQRi",
  "key3": "3VDbweW1PidUXvaubVRPAKMLiz2iaFiHpq82GcWtAvTfR1fiSKmuSvFDGyKe1tc8ZsqBP15jFTNDZonLstD62m8n",
  "key4": "xT76WRnBmyTVcGReUeDsjkXo3C3H2Xoxwx4P7Niph6BMBxZwbCggBQ4svMKaHxZY1gTWvja9GrXFFSRNHVZL1MK",
  "key5": "2XkKi6tPJFMhLEfEZiJLxSEDLVQDJWmka4MeCjeK1rzPH2JX2XWYhGoffoEAXKmWeD4iSNXJPHExb8NHBGha6USJ",
  "key6": "5CiDpPHU4k8nt2tezDiJVf2sETmb8t6CE5L7xjbikLoJYF3UbAUiDnuRrxCj3mJmGMuUfrvTdx42fELp8Z5tVv25",
  "key7": "F8EM7S5gZqTLDYvVW6bBxd3gDCzseChnwspNdS3rf4SSYjAYhLKhtasMHXfRKEu1aqS3ngwWdHn7NsP7yTvsja6",
  "key8": "3oj1tNwRKXY9PpdcdUxGj1yk1xnz2deFApybCip6Sif8vD3D1LTRyMKc7kWmETFf6iygj6q4v1nDzi1YJLrQnJ1h",
  "key9": "3B8ryR8zgvdepwMBr5EwodfLyXd4mcRPhXUdeCb46TTQGnJcEJUBKzniHRieap4WZtMXNDYWNGmVZUi7y8WRSQQR",
  "key10": "5pQ8UQXS1qkmYFhXmfF9gyZhc7mTBSnWpeo3BNgngNrDCZUuKDFL98B3v7Y37JSmPRebJkgSpG2NwESbUeCwAj79",
  "key11": "3ATd9ii16h94ifP6mvSXnFgGHcjSk8UDqjyBbLbNC8rEnc8ZiVwRTAZxmPpUBPUBBqnoTYUVPFPgpLrL9UiqAMwC",
  "key12": "5gvX6dhL7m8F61JcSDP7sM7WTNK3DGXoSgFRhuZvpmcZdfo1YkC3xUUyRHm2TXXgm8ZUqvSTMw9EKBsgPg6U9XFR",
  "key13": "3WULrS8LLCvRpBQNvLxDnZ9bqvuvX6TJLTKuvGoUMvhzyNDk5CZshMYRpFcnD6mpn6sjT1cCZRP8u5jGpuMkLzC6",
  "key14": "4vRGz3deSeiXgatw9yywwdzif6dJSgt9PD8uSTefPBZgRkWtKEmKsHraz6kAdMZFdctXyyC6Bm11eAhc2gDXPEZ8",
  "key15": "2D4JZm4U5z2rFPB1o4AGSL2qvHiVRqdC2EsG1iy1VJP1w5kj4ZexadPJZSZvW9fq9qZi1iqtSz4MC9SYTrVzv4z6",
  "key16": "4FtZ2HfpWGKjyCm7hkH6QMMUPiZs4Y54YLJUJJh1MNH5BSxKpUNxhz2w856pCDwdxZUkCsvVRu4UnLU9PBk5s21D",
  "key17": "soWugcu1rbyhiTiqnN587fdbEz8EkTDzy9wDSjtxnPiFfHJScvzfREHAD9jc4vqgKCQUAtknAEtPY4xXpnic4WA",
  "key18": "TpWqGR8dkr256WCweqT7dWV94azs3SSQT5EzobVNoKFUfrEa2RvMJe5nfAeAFSbtCzQWfpPL28CXf6gTDoscN1X",
  "key19": "3RMFaPHatJLgaK7cAsxVk2ViXnA1X2g5c9UTRQuVtUNMffkb2XViLxiK9Rg4sfu93fBnyHmJvNKN8U3THaSZdL42",
  "key20": "x9iNcnFUCjTvzCYwK2NrHjqoKSNKXyKxP9iEZpFZocDNcZ9aV1zkkBbvBRU6mu1AD3AtayrQ61TBioZBZS4zdGx",
  "key21": "5pQqHGgzxYWks2vEtfSr3DPjJGFmLyy4RGgJWZHbDL4S2o1T6LhMBLx8piJBfyvEAd4vLcoqx8G6yxbvJyzt2JEt",
  "key22": "P8WzE2CHPoL7GX771qVGJJkRGLEzbJLdNYJWEFho2g3gyxniAA7Mmdr8nig8dWmRUXYcY6kenKXTzFpX4Piu4eC",
  "key23": "2fYuB5xKnEaukk2Q7rznhFuemThQUivBgVzvDmp8eGkUFqaq8jfbjY5B4uwfkXo1RGYR1HV5g81vZB7ibdGy725Q",
  "key24": "5kyPY88six7DjzMErFS3jHd5NrHcBbmhYR6NtCaCtwYWbTzCoCQgS7jPQSWQu8GF36CvDA8gceQFeqq7jyG97L44",
  "key25": "ywnqiBi9Sh484R4WX8BeY1jRbyiw7QP2yaZeYN2fuxGCAqBSsYoJiU3J8TDM6mDbWiV644PTK8t9v2pQBjLhgWb",
  "key26": "4B3ACBJsqiRUQm2ayvUjD4GF1agqdVhpRtrMDAJFt4afmTidooVUkMdfAGf71Qr2ptP84x1U9XL9F16YK2G6mefF",
  "key27": "4vBpAWjXSTXuoqi1m6w7WTyfVRXJUxv7He26fgXwriAHyH6PGTu6njzFTNnx5DBHGMdckJnFrNZLpjyNkQTGsQnW",
  "key28": "5zjmwckZqAd7k1STfhggMtSJ5SQbYJmP7qSHTtDS7G9ZpcnBsLv4n1y9CCzRTA6UdRjs7U5Mzk2xzKYGW7K758wt",
  "key29": "2SbUKf63JwrZLrtVjVzPRCMpFAukU7UoF3PytxG5E9xJkNsnJjBvb1s9dMi1ifiqEKJMkgDbTBWZj1wioHwBs3MX",
  "key30": "KNNCSeiv1fTwo3S9a2ncALJNDAkQsKV2nCaGDbSVAWAY4NDw9woRpFhBYXzraJebeAUfE9PBrdzQwmGhnKtVK6P",
  "key31": "5dBP6d7svBpojFpDb2Vk776Z6T19MsjTrB2LJfP98nfXFzrqwiLFHR9PBv62EVhMva9TepQSV8skoNro6yqsycTo",
  "key32": "5J6Yi7xRa7E5nX38tkwfdongfwJTxgrFT6sDBjLPdYJM5qRVJKVM8VWjKWLrPh3eR2xqKXRKBDcH2DkhePirax6F"
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
