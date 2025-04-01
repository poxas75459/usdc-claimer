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
    "2ZmHYQPx7oznVcChsCJVoZhnLRnMqCKqpK9EKxjNwers1JBa26S5DoshoRPKy1EQDAdCht1YmsW3ojGt7hhmzwBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PNxSiVqsJGJUQNTRSEgDLyLUwQWv3z2tkHHbVj2rQcpMWq4V4nmePAJc3ZR36QW3p6yB7bJMVi5ovDt6APbtPF5",
  "key1": "G1zQSHRA7EWsc7nJoXjnPXMrd99GDzjxce9EohV4XmfKDWLYUPWsAL7MbWYT8yS7RgVwap6iQpcKKFrMVv5Svk8",
  "key2": "4ow1daCTKyrgdJegFq4WvVY6oTCzx6V9KRcfos4T3RBACLwgky3cgMePjUbxyQA19evEzVKeeQjyC6Hax2QYnBmd",
  "key3": "37tu4kjSrnrC1ACyKniFHE3zQL14aDC3D6TjwiENpcPqWvtKeMmwis48tv2VHGwn5eyLm5oui125NCtZrFs1PA47",
  "key4": "3kjFu7VUsveB3Yc9nmLrhFuyqCdHiUziw7ENiQgcS1DDEhomuvxhPizCT9vsMMZu7DbHKwJXGdhqV77WF8gYUE6r",
  "key5": "FM36kUcwtnrKEPbZiM7zXsEc8s436DoMeKAnmtqU9DsUwNcx2r57isHigf8mdanA5FJLkgVHfzYNyqFtJE7HhLr",
  "key6": "BJNqSf1Rznz6tQ34yeoLdnHCcysGw16jWYYgErHrPp1ytZRMaSfuqMvrfrAbTnFPG7bgMRjzJwXjHnCWKP5MW9H",
  "key7": "oKfQicsr4r4ve1gZZLTTB8rnYyevy9LaAhrekSGo17xxLLX13s1gzm3c6nrXxWyaKXfosc8h3qRFfJzB2SoiuNd",
  "key8": "3oUUfCdXYYJVVyTRkHXziLACgFstiTjFCbAFoCjg2pViP8hYiyxJBEZsZHpzCPHMrmmF96tUivD6z8uYihwAkMxe",
  "key9": "5o6A5Kb5VYuAyaijP3Bq3dTxqgYWeWfYHuU4E97Woomj638dnZfmCZggPpx3K3bicN1eoZ4xRksBHf6eHUe4LFeB",
  "key10": "3sctWn3osaJTa85AXnBZunwtaQzTciAQm3PCbopVZSvDYek8Stv6oUbPGXWUXWPK3SwNudKQSRKxUQAdaYstyiho",
  "key11": "64kYUy6a2CQbZp5kXcJNDTWLJ1TvfbcN8ZzomLkJZ4gSvxwZn9P7oSCJBYb2XBQxzYP5vmFDN6A4ngQGcpsaLZBf",
  "key12": "3W5MSQxfiwmNnNvXZZmqhy962gAwnu8K2PWRhnbqr5D6C5chLC4nzgqVxLhMBwxJLgKmLbT92fAs3WKC84cC8mQY",
  "key13": "5oN9pcJNa77N3xr7VcznM8M1mEUMmdyLdGQYrbi3sK7tCgze7hJkwYaWbMdH4TeyDJ9sryhHbmUfAe2D3JeyFYhb",
  "key14": "5yq1PQNbMgiNiRAEn1gjBqSHSsey1cET3AwCNMHevjKM1N8Ut14QEhoUGRBpMUYnFjGxzbLRgN1hTkjV14w74wBg",
  "key15": "384Sc36R8H12oZE3andYA6AH7YVEVTyxmUg1FE7NyKvkRJ1xgdL2ozm68tDxuz17dw6CeGqLqeqpGimQTnGoAfoq",
  "key16": "5n14LdjsjYbCjR2fJc4Rpazk36c1RN8KjLb9kT9XuQG6uiohVecr1Bf7KVsumBsmiSHjZDaCQnm8UVammiG6oFyR",
  "key17": "qsaRaxmMwr8Z9CBtDHPNAZCibNsX1hdJPEGd2xvFr9ne66F4uEAK3d67nJAHqo5zjmqo1etRH9emPZAAAcuv5SU",
  "key18": "3hCsPyJrPUcMX4NdWzzNEyzmKQtVjhW3CHG3BFLUBEzEQEtvVXvej8WKfEg6QvRajVh7aUKf7ppffjKfdkNBz8xC",
  "key19": "49cPb7rUBP5m3eE7naUsutHFXJRTbDcBWxaRrn8F7Gx22yf9oj1f2Y6MD1vgH6eXUmES4oc8YN4zgjTkJP2cACoY",
  "key20": "3pwr4VURaZfSbRVc9jseBhmCcbvpqicVLtWm6tjCarbyyj81Z4wMoA3NEd2Dc9XNiCRfYA2qKofdUoLvzmBhivWs",
  "key21": "3wL4Xri8AdNwBMddhR1v9Pw37xfp9biM71Uj3P1UpbteZ5r2rgsmVSvJa2VT2vbccmUjYK9LEsXgwdGLgtvoQFMF",
  "key22": "4bELJmkppEjYzEF1rRWcXhvzD5cPiRTnQuvxPqG3ua9Zfi8QVrnH33toVSPkA3AWEYo8VFfJ6ByAUmBK7ULtimev",
  "key23": "4es6SH4XENSYJTL1jNCr4VEiwoXe81hDTSZpj7Eeend7bsbJra2fUrCYsFdko5kXU7isxNf3mukb2xSkhpi7rh5D",
  "key24": "jiiC52hLLW94oRAKPuJjsNoGGVGpA2CVxLbG5dw4iEP1Jez6mqJr6DQvbbrPxSVjQ7FrNZzbkru9cYs24TBbvpj",
  "key25": "F4HYNUuPBN8fdx9ngL6cYegeEgwx9XRA5iGs1dUN88YwfsETELCxk28mZ9HGf8haa6P4szbevxgKtYoErPmoEF4",
  "key26": "3stbud4z1hAt1Nv1JxHJsyjHtKxxsDMYg6sSvzRcRzmB9XB4gLMP5JEKcKqepmf37Yu2CdmSgzfNEUJwc5a34jH",
  "key27": "7xon3FB2nAXE3k972c1rEJeZ2RAYYvE2tLTXdotEUryGaQRcgKkZDJfvDpwJ7zhA48Ec5y4bkfMJYTLjf22cQ44",
  "key28": "rReX1u9TLf5qnBHSjSt8kRPMdbiirhMGMKhFPGZsjLgTMX2ZLvuJhncwnAos3ar7z3fFk3CrWzVj3efiFYFrP6g",
  "key29": "4WeXzK7BEJucWryQoTgjinjPC7kV4jwHkzYjMJXT4LLtgbKGGjjsVe86ES5LTdp2ihxr4ntJLAXAX4vmBG4aPscX",
  "key30": "BXCjLqj7yW8zX56vTUA838d21x8DGuufXCYdMEEwFVvmQgN75Wpugmco3xZW44xfNEtAUt5D2djdc5V7iLRg3zr",
  "key31": "4pnhjN3BrrahTs8Kuk5ZnLrsZJBy8tc1pGye7jxDy5UXK7mSjDS2xh4x5x7juPVQ9gR1425fq7tpzNbqt18pzbvj",
  "key32": "4P2ADwhHySS1jHu7EUwEcF72bPwW9qdEz1U5CDmfpiF8B6jvRwYZSqwcTBdv2GvBaErgGNTHfbWkwxZntYe7cK1H",
  "key33": "TXj29rwtK5AcP3cY9anHHJxDzvC9HvwmpqYvjjCktPiXb3DouyJkTzoseK8o99VwoeZLrdcrB5HWjyXJR8AKFhJ",
  "key34": "agrvsypgr2ym47mAxqjpaW9nAKZntzzvTywvbR11a23ep5xwYdQQyZpVetA2XjWErG7q3dqBpzfv9dMuxtutGNb",
  "key35": "2zUuLfjPuegXCfSMxd58nSKMdqVukbnm1ELkMy1Zw9TFz6PfpxzUW9Bdk8aZ3CASHYfKMtLTNxVXmbxytoENfWkW",
  "key36": "XjX6SaWatEkPEQRiDd9GfNLC4ReYBTGUT73rpdu2ds1Ru4vYqADzYwaiyBLuMMcivdFaTPit2jQnWoGNG8HzCh3",
  "key37": "3kLkzz4DsADpiBCYRLSNHNCEhoRcd7n2RqMydTbns4GE1dnCSbgr5WisxfxFZHqyWDe7vtHLzgry2JySEcaC3Hze",
  "key38": "9DgZPEMk9E9JJ6W2rNNNirbhejEhp85zRzvPwJawjeGX3au46SZrw6LFWL8j49f63JYu1BxcSPyKUzqmnYoPFT7",
  "key39": "ZaTpLTkghc76aYroisWuxfrdmqfwziRSxb2JY2tHc2wMCoFnQsZpvyWEMoVmXWE8cpq9X9hqZeuxhVoGx7DAt3j",
  "key40": "4Yc1LrnZBuHUyuAqSQLd1wJDPy2HaVBuUuvxc539YRY6uwde2osTXG8opQp5FGmqvr94vnXVb98oLiLkpoHm15bg"
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
