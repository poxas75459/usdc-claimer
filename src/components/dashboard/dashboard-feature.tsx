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
    "2iQmjBZsicTQq9wqRgoH3mrWb5W4Au9uEF5NSFFDWxZU3Mh8M1orTetHJBXvP2SyoovKTm5euNFmbTb76GZ9gfFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VEJq8DPqi2rkzBsZJibRxCuMoauwi858UakSxd5gWSpbXoMD1nXiv9x2Yp86JdAijx17RRqFgmw7NPkCPA1dbq",
  "key1": "HSmV4bUok8bJ3bvfvt7zQWMKuNUC2iYJ2juu8iqWGZxJaHtVXRzAA4R48Nz7XKJigV4a4C66KzETgXE5tYt5LP5",
  "key2": "5iaSMkCQtirFHaBj2synVUabVkbyJyHKbFYFFJHpba6hfT6xTWHf47oKqu29eBMheL9EDuLh2AcjmUY9L9fPdMd4",
  "key3": "5SFM3bTXg1k3kZw7vk9bJvRFrYZ5qiVNNpvdekvzynciMmy5ice2qLyWZM3G2vWhp6oP5u1tP6pbwj7Fo1nivvPt",
  "key4": "5Wocwv3VVvn6cVNpHNBkpY8qVp7hqRwYzF7oVzZShW3dkkbrtMSzdDUT3w35xP7gZVUce1MQTTZCP8JbKsLT46re",
  "key5": "ZPpxFpAJKMtDGzk9ToCjkWAvthkfNYDy7nNkuZn9LJDfznwF9a5KJj7eSTNRq8mLA4VQebm1vvgAqhqzhRDQh4y",
  "key6": "AiSmrQ3NjkZup9YJgRs28ngtQJDdKtjmRZA9rioyYeGUDuvEqYFNP4jseFm8Ry15UfRWZowrtFNN6cxQoA4tHDu",
  "key7": "48w3Q3rA17xRiC6XbQiuNCss53w9tZowAGWpjgvPNTxqft2twDNUEhjGra32CJUpBaySpoW3zQD9HXGHBpRGncFs",
  "key8": "4TQkaHagfSPrQRsbLqhxY9cgK7Z2WFVxwpaaWBfosTJ2ncHifZEGxPBHWWiaJTdQrEJjGWx4LQSqdEgVs5AbPK7t",
  "key9": "3EDxXdXSuuaA9gZXbT9U3mUXAx6RGsLRWbeijdpDjRb5WNieTR69R1e3j4Sc89E2TngyZWexV8hhLjuRuFJ5cFmd",
  "key10": "4boXnAYsQafSN7wXsqR7KxcJTUqk8odR4KgxashmET6c3H5v7tMn6bqNwv6LFigckizCRSFqVqXKK59qk1MeEb7U",
  "key11": "2Wq1EimzNQ2QV5eZW9iJeQwRohGaoLKGDbzQgZzBxhRT86mMvrAA4CtMhevJXrwQ3NMqPY86MUx1ZfGC3agNzaVJ",
  "key12": "49KbpxGvzdXZ51G9MsnsNeuD4VpWvcNXXuhrVfXiqDT7eeTHFAfnQ16AhM8UcjDJVrA495WrG5Bx5RukBeZyZf8y",
  "key13": "LWVjXPsAdCei9rUXFkpWUD1u8FJXUk7vEgQEPa9EMJMB8fzm6wer4wsi4BTBysBeaU3dJYAxfXwuL6hQJbFCb8S",
  "key14": "4BorC2MpVSUjBtCBqmDpa9p1bKttWQHJYJHQiFREBHSxtiD8FH3Aj1q5XvF94SkHYZQ6DADvfCpiiEis97XhU6Vw",
  "key15": "GMaF4V9H7pEC7qjkshgUUWeEhvD3yq2h5vo15RJjDTHxPkHPW8kF6et7X2vKQaKqDCsRR27dfvxKskXciHgAifb",
  "key16": "2t1x7s8ipBKHm6daGg8fEWYyZALGctmFjy2ZLDiBLavvHZopj8GjudqSNYQFC8AjAaRttLg6u4QftXF1BoBW8LJF",
  "key17": "3YVZm1AdMujfLWAD5SWk8GbykWiL3o3yuqxPa8ZNp9w9gPhuHqmdikPdXDHniv6K9mcKjxX7rZCRJUFESMTp1FVh",
  "key18": "3HDweYY85AR5P7zMUsmbFMjbFA5zqAFeoKf5pq4a7E9z61tf2H5k51oexeFwH56XvV1RMNrDLq3LqFudpbShF1dV",
  "key19": "2hB5jqgKqXd4GRSKeavEF2vruNfwh6GrKh1bDcT1RfJVZ5NNQZwL6xuFvyrFGMBhXRkfrmQt9DVT5jRUtKp2okgK",
  "key20": "5ZFSQ5hKQrJH6tDsiEP1XdfHGwbwdnuqB1nctZR6E7S4fRU7qKcLhLohuyDu9PMm46dhSQQX5WfEYLZEf4ZFhjNy",
  "key21": "wpFs8dAapaB9B3BX8ug5w5wurLYQRZ8VSYDRtRFqdysrVUjzR4Rkmr6PN3oJts9vWgPdANv7pvjPCHja1s8d1bd",
  "key22": "35WygvUqwRej2EMQsza9X4GfvnuEoeFr67VJRckgjvEUobay3dgiGepaZPP1dhP8tqEf6Nb16BFjLUaDKCs6ZCmS",
  "key23": "35QrNzBZK4PANxxZXeETaUF6igwjcQgxng4F2RWWaPwK63XMnqTfq1pSAsL63WufcWpHVY1aMHJdpeew3bTgeLan",
  "key24": "3Qn1ambmrKAQJvQBWjKaKdBYaUuyhrU3dJPY3HPc2HrKnEvSwLjKssWkEHzooeHGEGpq9zaMJeBnCidW9aRAYHzo",
  "key25": "4dw4oEjsTqcaP5d9motFvH9ecr1MGDfVsJ8E6kgbaZ3x6NfzT9rLQpTjt1XSeo35mzW7QnpFyvu45RxHQMx5owDh",
  "key26": "29pNx89WC1iYhp8bc4KpCG5mBjan9hkyqMScjk35zYHRJKXJSKWABKyTvgrGPFY6rZPNbGKy4J2VGfp3UuR7dZBw",
  "key27": "GGrsaZcVGonzSoRCjfFKB4wDwGkgf9W35rkEHLER6uNRHFHuMv63RRL5TNsYjFr9YUYxbRkjo98HyXjuMgv86uW",
  "key28": "Dsmuev9CufcooJZNJxGyUBttaeE5ZveyzyX9JXFWH59iE1NgcB3Nv45RueAaiNE4k6navgbte1nB1DaCCkpd6fX",
  "key29": "2gemhPmMk28Hnoy71nNWEa5nYbgwwUFvSiFGeeZvuBMof8L3MNpPjPpcat2Yhp57dD97emyFvNWcCYju38thJCA1",
  "key30": "iG7DxBsyWRUGuB8cGDh6riy1iwvVtojdhjD1qKBGkt2PVRFBiYvyZ71GnvbUno9tFdwsWDiNheqaxSetgmysdEN",
  "key31": "2bmfndwcW7PhHsQigQAk59vGUcnAnQVVh1xfBtNyA22XN1Q4tL9Y3nxuQBTdiMhgbMzkv16FZVQpELFHyHxvJ52z",
  "key32": "3ssdaigHw7xJaB4xq8hZFRUWKmT1irvJMCQ4Dmokg4nrVnpULyCckVMW3vnRsLCqnH8kBzt5G9JrVyeYSjtF5xTn",
  "key33": "4K4xVQSGge1noYE9D6gfAdWL1bJdNsNr3AhbJnX83iFHNdn46dRvt3cCpNkUduSFSuZ6492wx2QuqLD9nypEWsK3",
  "key34": "5ZN4MHst8keEvz54Y72nmYtxizx3T3z8y1SPAQwZh7N8DSJXSe8h3Qp2gdK2sT1CrqCyk5BSjGHJxPzFqNsLasef",
  "key35": "3qhGu4XZ7b7A5qPtZVDCyqb4RiEmJXZteX9Jf5C35fyUK2NA6saSwJRvuouNk5PgLgyqatCp2CU1yYEiEi8pdejV",
  "key36": "5B6CkC6Xc1XCBR7GjqC2QDPVojPYbKv6noTeXnnyAYVBrupoccnfZ1MucCuPuo6ZhrGX4ZLGWDVhEJejzhko4Nfg",
  "key37": "668r4gdeewTBGzfwzPrV629k3S3atnvfk39xwoqHrMgpuEZytPzZ4ALfimvfaLWrmBZBe2duPRwiHQLD7J9r5ATb",
  "key38": "2bf5NNyLazmPPdHExyfCqhmrDkucSBH6GRtHnF1SENAMsUa1RvmLr8nNyHJEM6GDdjwkscRdHLMGK6P1cJKBLWki",
  "key39": "4gx9wJ8PYH6EQmiFA1HPaCy1G8cXz4Aa8daeekdXts3Y5WM3J3f6xTE7PgrYVF7Vt9BwCzawobomswav9skJqu7r",
  "key40": "4zKRP8RgVDvvcmXuQE3tPgoSJuHKVBRNcECuBgDcLuodEyXFkMF4pjRMKVUm4ggL5iszwSNoQa2qwuBrecxLmhHH",
  "key41": "5BABqkFVrsw3Xw8Wr2Q2HKxH79ydHyswQEvMHfhxpjqpU5iHZa5PKiBTTSdNegX9vmHTRzF1iirMfU23nskGfrSq",
  "key42": "5rGRfXcQ7KZLpW9H5TUzT9mZKwKok5KiRZ2623sKvoLck346Hsk9YZF2GWYcyT5PU9hJPYnBzN2CQctpmmMzxZxF",
  "key43": "5WJmRRWPXKx5pSVDmFejCAGCdtGTWKuUEX51EfGF4kPZ376BCnz6LqW4spPEhZfDErbtSBhW9WrzMRZyXS2Urq4z",
  "key44": "4egyRxVgjhb7s5QU1bevyjVayUndDjMmmVmvCpCEUYsDyY99q11fdh6GbnQ76SzZb5kZ2VA5fcV9A959D9sk8LRv",
  "key45": "2uQd58kfgBSBFSxnLDoEbJjnqJ7SQ4ZRLYf3YnEyVQ8cTMMFqdAcHs1t2niShd2mx7DGEgGb7JTVsuFAGy8AUKYE",
  "key46": "26NgpPTAe8PKTJRAyevSq7dYHULo9oTTjMKwGSLUJnuE5eipBvSCc3aMNtW1LhWbq5yPaCT4PKmYce8NjzFTymC1"
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
