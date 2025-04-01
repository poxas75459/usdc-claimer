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
    "5wWUSLCqyzocy9ruGw3GNwEgVK4VBoNqStPehvvgEYejLay224W31sEn84NDq8GvG8FFEJ3jsDEvw66sdWg4Uzfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26CXRhCspHykBW1J8MSHKL7vvNwujnPMnM7gbYFKHUo923T3Xr7MARYxNHd7n4Zb3cyiHWgxcRMe7YvBvpAV3o3N",
  "key1": "35R7JBw8VLUwiaezfVMoXwpYEQGSqzhgFZmtv9uASBS2i6EGgaR9d4kjCjxxWkp6v4t3fjbRLpRTJ8DjCDbq4NeW",
  "key2": "3ghqarFoEEsQPi7vhaGXiGYpXLBzShNNbmS1hPHpBdHcKRELZjwgZC7MBLhnFRfzctkjD9CxReDbHSpKT2YfrVoU",
  "key3": "2oAjSEyLmuvwGk26L9SLKqmVgDw3sabR2Jbmt1HmL13buZPARh5LjrhcEVbJsZyVS6FtUheon9Ft5fVsjTYu16yG",
  "key4": "5Ljj8qyWhGvis927WXficUwH9qvnKV3fZDPYE9Y65DqRaxU2MQztQbsx5Le3a6y6Qk7jD7aRW6s5XxWmr8D5oBKx",
  "key5": "HJyCyRgD9KGe4Pdmyimjfq4bxDLaWxUJwtYRC7EkH6Sa5Y7wV1hqpb7uvmrYkWYiejoAmuuEr9Jn3eofudhDo1z",
  "key6": "3GEo9gHH4kdZpyUmuQ5YUTxSmr1ByEYzvRh5VZSQUNjipVatrBFwEtuur9RgteK3KfNbfJKQUyniHiR22tcZ4FYu",
  "key7": "5AtcojJJJPjwnGVJFhfQMN2CpLfKpKcpgKaQpSVoKuoACxkBbSF2ntCYozztmCTrdpRMtTJq3ErCy1c1joSggdxg",
  "key8": "5mXSKYvqMfqW5tqEaMzYwBntG2WiHANKpkW95zvDsu3cj2E71kAsfF3mqGkRpCYchMTiM62qcKf9BCFGERqeVUcJ",
  "key9": "4LaWynPxjKzAKympqMzSra3tHMCSxqvTeGaMu4jCWbvxHzrJsBSRgjTYEGYTx5tohV8g629UNZadYiFhrGC7UAjg",
  "key10": "3WTd8y3ZNstVuQcDNCmnxKh4xt5TmGX3oHzpsHdPk8G8wAQfDo4L3y172idDGx17e4HbEuqkuXRYafubxLoqqgdL",
  "key11": "2CtgPuvPjQc2YYRjqb4iz6HaFWjZDzQETTq29gXJH7g9EqSjSCN5SRnYny3zAW5bTH24qJZyYT8pNgZfFyHgnQka",
  "key12": "5w44YDgLoan6Rd4B9oi4CuTK38PAx1f3iecmXqJvrsFkrHPkmWR21eLn22QLJGY47XBJrT3DzDvpVEqTtcsd6tsr",
  "key13": "3Ru8aYa9t4oxjVnRTty1QiHGZw9CuNTEWYPSsad9JFEmYNBYjgLbfrg8NxmW7J2MqnyWUpenGV7nQf66w4UnwdCm",
  "key14": "28vRLvWDBRMs9o49XcSdxHvAsqYmoviXqXef4hGWwMJ2LrtdXAKLYwnZPDMvR8b29oZrhUhLaLeKANDRLLnHWhH2",
  "key15": "61qMyAyrys8fkizWUqVeeCWezQsPEv5LBiYN7a9pGG6j6F57PqDx7hcrU7hJ71zcqZi72fvQoyB2uKVjqJiSvHAi",
  "key16": "2stgKNsgyFHEaWQybnbGZQ1dC2FYCGjxBcnxgmEVq2fx1M5ckVCqY2AW8LF2uCfjh5yF1TqPhhaeMJ2YDm2xU25q",
  "key17": "3pP9KWFtKHyG6zKeAqf2x4d2TAHNaLu7tvJs9ThjACF9gPugdMCc9c4QxF5Pmv6DzfaEhk8rwsnRBXLSHZTVsyK2",
  "key18": "52GMnjV8xRHWCRKgSoxATU3np3gg5AN3FRXRVSLHv9ZkiRRZChSNASVe4k8skoKwPhLJY3o1DS7sffthXwUq8jnN",
  "key19": "2xgNtgNZ8Ngr3rxCxk7xmm8pyxKZQhoojuSDtFBB7MtpQRrQAdDp9W4Nfj4z8rrLCXzX2CZ9gwE56TvszgmvsUvf",
  "key20": "4t8VoWGECP3mAh5uUXpFNeE4itqBi6YJM6hHM7u3cNtejnFQSmEcj77JAn9WVCRVZdEGoLY4N5aFX1hR79AGCtGH",
  "key21": "5jgp8mUL5iD7UuaMTBSFACNN8SgLz498rLJvqkwVMkaH6n8ryEzwQAQRdy4TjqGG4EZSwoqift4TgT7FrBHKestJ",
  "key22": "4EoNNKpe2vkZ9gFegrvf5P7b1WBUzwcxrEi8Fq6o4f1E4vqhnjjik9tVwBvWhtua7DZzGByix4w1bCuUbJRAzrPg",
  "key23": "dCEHg1H4XsT73AYKFjExRPxuueyEBRCAmpX3NwUmCqdhnjNmAN1VeHXMfYjrHq8YpFxNuibt6DKXUfjYUQYsUFa",
  "key24": "fWfEJXt3PHX6cFF9VuVY75issB7z6R87kTssrt2Cbx7zQMC1YsqcgZe2jcQct7VdNfU5voSTPjD5UDa4ZUjAEhX",
  "key25": "5E4h8Jm1H6k5v5Y2j1iyJtMC42mGposH4vtEcf6fs23MHdcRwrigk67MfVqM7ACBHmm53JMBuJnfnxEszKkVgm2E",
  "key26": "2ucqasmjDrKzSK7xwhoVyhAk2XeP2Ddo1RztwpHk5K3ePEkVPuycwx5WivK65cviQiKRhMsxCd93Wd4d1B7YSd2n",
  "key27": "4TkiAscWoa6vqKNWngEXiLygfXEVSapGT5Fvjz2CP8tathowfHSTijvdGtw2YTbj3gNb58emE7WuuMa8PEj6Ryez",
  "key28": "65mVNNv18nb5nWLZX5QkVB7knLU9HZaWdfKq9uhNmDpaWM7N28dxTXrpoeC9frnis5HsYbyNWoKBWqNnzwQxEFma",
  "key29": "5yBHzSGfWcqKma8opKECyaMYKqLBpZFCR2uHzxjHyyGS9Faf4wXX3DXHrY4fboDyoDFAfSujEPzMBY3ckeiT37rT",
  "key30": "5V9mi6r5fZRxsKC9rsQKCoVWtm68aeuT44nBQBTP7vaNiucNqntGT9DXpK27PpvCutNGMVtsApMD2JQdSFLmGdKH",
  "key31": "3HYC5tPLFsbzpL65uJN6J5aybbn57cCW16zMHqM1tqRDf4Q1ohU2Y2rzyhy6ZRqnPpYiUVBQGJW5WFNDovtzK9DT",
  "key32": "21uwVo6QKKavEfa18o9dXUe7m4jx1H8iNdAvoiaad3P2YmmDvEY2f4GcZVJBMUj354bnLdjCvx7AJTRmCEn4VTje",
  "key33": "2kDyeP7C3HzdMoDSaiSJ2bAkEH1GMiXC1wVF39TqkczruJNvQRdhb4ZAjNqUzHBCSS7uaYbgVAZr4vWMULP8tFuE"
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
