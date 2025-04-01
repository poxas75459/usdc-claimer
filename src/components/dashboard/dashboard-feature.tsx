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
    "nDRPhh4CSXiDnwnRPWNZ3iTzPTsxJs32N6sdto1tCT1ZRD4coVdJPeHjVXMVqspJU2FcuwPHxaGPcwhERDZsNBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9AinnQVuqPbJREqjdzR4tfzvSBYFHcgEe9mNtsncPy8cVAQBk7Rx1qAWFWx3qHjDds8MDPpyZ1LYfFphAa51U8",
  "key1": "3at6CsZaP48XssAmLo6G51YH39agaRmpZoQpFpKvui8RiQKbkwYxQf8d8P97q5BBDB3Wpiw85VccLxbpoSiPGW9P",
  "key2": "3YNz3sENCn8jrmayzbJwgghk4e4K8cQQrZY316vh1n3M6frvTLBmi1GHCW8HBTeBzy7xVCx72XpKwMCbPVy6Ca7M",
  "key3": "2ith2JvDJLrS6SUU9b8j5fvCAHA44BJWUygqyn3MHxF12ViwyRqtYfVbZAAk4cYFqPw8iLcKQyyN7byxp2ZDKdkq",
  "key4": "4VMPeZGPW2rwdzE4o2xDmWY7yjucncECL5WvvqFwR4XtnhGr3U4oZrMtdeJ3iytFmaWsf3k7BBCEoZ7SY5MoHwih",
  "key5": "4qFtSgtu4B7NTvtBBUddBUNbm73v1hK6yi56iP3DcfBrowKFiL1vnZ6bA18N6sX6HYRtmzEwZzUMJz29ZXhjtmYQ",
  "key6": "4zqKXAgipbxEnKeh4aSnQMaN1Dmh5k63fXJxZN6Bhiukzxh2KqqgwHdQze8tmHjN3ms43Vgc28Q42LojCZfb5zuw",
  "key7": "4nQ5Yu5qHfruQhfFTgZdcfZf1NboJbfzvevRKi4AbGKWWatK8EnRfNyH3URJDWaAxzv3SBiL4nk5WNo7mJ75iuR",
  "key8": "3whNc9k8B2f7MUCTUuM85Fp9v4yKj7twLopzGAAth4f3cxJnK2zEjSRhY2Efv4KtiovcVZGy61UD2UZNHJcchx7e",
  "key9": "5NKtmvuXEqhBvekaS4kQMMi52nno7tDBCUPrK9CcKBEfDY4WFFHGDQsfCogGGqT1LegZNuv2moZdTyGbgoCUyL3n",
  "key10": "3ASLuF4brUzwAmV5wXC8HnoVF7eeFSNYj9ywGJ1B6E7g9WWy453rRpXuki5rtMyJoa1UFPvhVGUeF2QMRpdLne9J",
  "key11": "2FTPTb26MYTtRGbZK2CKbjXVaSr4XN3R5cPJY1S6EcRio7MTab2bM98YNka45igposcDSYNzLQHRreksJqngMYqn",
  "key12": "AagqPGmhNW5L4M9aLHfYWb4fJ9DLECofgkyfbkLYtZoo71KwvftrRfqs7sGX5d9i9bLgKF8wUMJHWA6RJbF44Ky",
  "key13": "QPesd5mYWL4hzcbvUb1igTfpw7767eHSwRjZ9k79dWLmKwWCsaPNSSSQbVsjg77VGBnNbsDqRiRFhpiWs2GoZNA",
  "key14": "3P7bdxTQsxzS5ERWDXHsgLefuUU6wNC3Pnv3A7zd23yqc38mJondsfgxcCwf7zHUGLVu1BLNpCcqRPh7WmXXz3jz",
  "key15": "2FDCffGxPXMxHi6x6CPQvf1W9aHZAS7bcUGeCaP2avN3btzyP7Ddyjr2wWV4RE45bjRVwNB9hGKMXGqZktjephMi",
  "key16": "PqwGP7H5HMR4z7RAfKdDSHe5fkbwmP4pjXBYPBkbnqmorVnqA1qiunFtLJ3NJqZe9KURNeWHrS6wA23US1PMcLo",
  "key17": "67PqnftaKxx3LYKSJJdfzyMHaKdsbsdAEBaicpDE3UYAWmue528o4es5fqJuheRYypSQmdsztHytyYJzzFHc7c7k",
  "key18": "4gHZ22ftZQaveD92Q8w8NB4u5imnwhgG7TxdwjtyfBn7NoHJwZimFg3AQ4KgnJH5emWebddeR3i8q4dBEuDTfEPW",
  "key19": "Wm4zYCnrWdhQhDAEMWW8MrqxHtbu2far1ZyoyhjCebPc3dWZ67T7JHSo3TKUCxJyq7BM22PPC3V1HGS141ZLVWR",
  "key20": "5M2uZjLWjLfR3hpVztXMCpJRQtyfLbgzB51ajbnr6niCba7ZVPt2Nfv4k8ZRGrznuFKxcygsAPAqycEMkpifhh9Q",
  "key21": "3HvGYLNmxDCcCSjJ1ZbDrE482TQfJcusRWaSmSABveNiKoqZyMRVu1EgsQEfbxAY5ycG3orJfRs1wyrQn8uaAWpV",
  "key22": "63dFpyFaSoVLAoPX983c4Xj7XS76VUVy85CaEYgFtg7tiamsUUrvNujsGbUHjLRkEzq5bocbgUVNLVohE9spP9eN",
  "key23": "BbNFJVUGSKxdBrpufACB3UuM3e2RZtdXjQj13MWErKPdoEmVDaFixf5CvtP4h1m34JrqMhpCggsBMNJDN1KYXwE",
  "key24": "3pZ1nHq3eGAisfVAMDicqwGJvfY6mTzN621RzXR1kPsChW3Br3Z6Ty7qaeCCptfj9SzpSqeNuLSWcw4jGCcDooeh",
  "key25": "4oavCxkuq6QDBPagC8WVb4MVxaeGzgKguQmMg35YbMLLnGXzW1Y7w4XBLbpcZHUWwFB7rCaQwE6GbqNmc1fDvVSL",
  "key26": "4uqjkdJ1WXT7izshThFzxci6jNUpn2w362AwM5KH2uBJHjx38dWksSZKBcAqc9GxLptSxDN3kNNYAxqcR5ut66Ym",
  "key27": "W4iouVLu8Q4XexbZvwP2NnTifzToo9WjUndkB4wi36oJSfba3upxBD2LwBZRuPbRyR1neUTLBWbiStHyjzFQL4o",
  "key28": "3xNu28fsFVYmW72E4yjoPJJBNW1giF8jbySVdk9waSMNyC7kY9LAHzmk61GSLqZMNaoYNYZjT8FrsJeKX26noXtc",
  "key29": "61RRChUPFPczhiyN3ssdEAbX5b9ANVLJEqpLAtHEv6DsqF7yBnAAjk5Nd6T45bYSaMTrqd4N7jjaKC4cK3rbWPZC",
  "key30": "3uPonQwgE6zosYZCTnFymBjtPH6K6D55BWhicWnrKHqz7BTe9KD41SQzcPHirNF2E4tZcjr5i8Birt8LZpkfEtq5",
  "key31": "2fpKJKJieXporUbFCrH6iw48pfooLzhF3CWCvG9aQFoArhM4JUo1aLSPAGWuRjiWg1PLcdj3Kwk5sW3y6GpRik3d",
  "key32": "5HTkXhrmuXLL5b8TTTkMosZC4YL8HhuZQW31tRUWv83sKmDJNjVFrjEEnrmsXNQsEMQym9CyS1v526CEfCGcLMYA",
  "key33": "MG9HDh7BG9egAnUwoyQUvq76xsuKBhS7ePpvfVqeGGzbwsGNat2sKbSDHq6xt2GaF9HNWr6zkSzAjgXagdjwWdL",
  "key34": "3F7j35LSFpBDDfRGQktWuwJeW5t59vBoxTzh7Z8eVno3y2WUpYJ4QzzzFUeQUe1MvX82KgPhW7kZX1HRdwp3jQ2d",
  "key35": "2hQ6SMsG39yuPy1W4spNbTJS6eg76sc7jJWfa6qr7BReLHqy8E3CtFhXD5vMvbxtCzLcdPC8y7cWQPzakiwcvuTf",
  "key36": "27NwVMpZS7MFaJ6naN1JitRJyg7zAzDUZ3Bwx3XwsZNN41YgLH7NrKWwBzAvEuN4LoRrXQFrzbRrAQGu5f1ocPeZ",
  "key37": "2T5SoZcvh6JbbY6rf13socQb2SsGAmo95wH5n9rwcFZfsHUuqHbCRsynRyGTkgRCxpZpPzc2nVPFGWKJXVpLGrob",
  "key38": "616XyQGymGfSG4j3KNv6j9ayCCnPrquvhPuJu7K3F3Gt1TS97yvrqt8PH1de46jFfQzJnPSD3kbWZDnHmoqWreKE"
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
