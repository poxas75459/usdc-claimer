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
    "5YwL5DHFvmRBxgmAP12MjuprVuRMdpQKD8HoWgUbQMCp6cbZYc4bgzp6N8xkb9wczqcCM1rzncwEcMrfCLTTj1XQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPTB1NUdVJ6KmGMnHiF4jTvnJmHdU2WD449UDEh6prYwz2YFwv52GdhTStoGQUjwgf95dU1qsW3CvhsE8zJQQvg",
  "key1": "8bhXpc8jcVTwybxFRaTvYpMfxiFbBmJejvX6Kh8wBGxBYhe9q51yVez3tQaPe6ZgWH57HPuFJuesX9Dccm9WyAk",
  "key2": "22ivMNeN2pfs19dP26ifrEd3ZtY1UmsvTR4gYAZCQBtQoXSzBaD6PUMfxQ2qgmHTCVU1vfhf2srG9zxjXsFpiGWS",
  "key3": "4vtL6XpdPCK1LdeHbBmJs6KTyyyKQjgs1339es8trgqzsKBjDNhRn1oUSGadaE5WrHDjLX76aUvcsY65K9gfFAvX",
  "key4": "oNy1frmj2MZP3A1mYLzLDZFh6mPoPRqXyi4f13we8FD2T3XK6qD9EZkvvnVDpm7KJP8qmgAnuG2Ks2ed2VRFnZF",
  "key5": "4E4RfJ2DD1C2dwmGigAS3VEVKN6YY1jLxjD3k7p1BzTziA2psSJQR7LyqGbtoGoQJwYfTcKGcHu6EAhuWKtG5FWG",
  "key6": "5ZpWC6iAGq7oTQAx14rzLbkirS995XhNaZEos46k18eAvZGxnCLNryEFHgrwHJKn5bTKrNXFLYkAQ7pGgrtoNyQj",
  "key7": "fvgxLUMi8Ha4KreNih16Z5KQxkknPpDuqrqWWjyxfQcMjDqvuczcg3F47iac1V37DNF6cdRuBd7fCVN38dcuL1m",
  "key8": "2mRBNxHfD66yH5uXgpHruXtA8GCkKUbr8M3fef5494uWNtS9xUEtw22fv6X1knnsaprTx9ZoiN6WjA2Xfme1irFk",
  "key9": "7BuBxiHYSKjeeLkaRzEte5MJJ1uoNT1fesW2BMUtqLjSSinJ9jyi2xe9Mp8k4BcAH8ZwiGCHbYDER3ayeukjJHc",
  "key10": "5VP2WMQ4wL9Mec6AjHyQp4KXJ6KS9it6Kfx7tGTjzggL2uxXaqWuVuMFHrb3EbnFUMELVwNjYwsxtM1mEECLYERL",
  "key11": "22tEhUJGWK7tfHBcbgeWH1QZ68e32vENNMoMas3CjPCXZ796iVEbLTmqxyZvom4yhHWQEuU1UGUeNuLack7e2F9X",
  "key12": "xh1oUh4H3LsLYT3iMmS3xfa8qHmMUMtVEptVDmTRoqEGafFmnJc1iMLnJYGfSoDGtfSQMpSxzqdTridxLuT8bXZ",
  "key13": "5GYMZC6oEj1QKTdjPedmY8U8P1oFSfhtsEmGXKxSCyZiCfZJ9x9jq4CHE9Bw7FBTVA8Ho76tT68cXKCQZwBK6hyA",
  "key14": "4WCvRanECM6Q63GA8TXgv5MTNm9pTM5t1at9xQtG2HzTnMy8DgHpS6d6BqeEx4tT4XhsXU23wLHb7tKRPDAScVfM",
  "key15": "4zUPh1oSLXbhs12C1D5pF5yEATUUDSjBVdtXTPg7w4jw7s8we5B4zzNbUzyQ81dWcknf1MtMCpxXkGTTVp3pQZU4",
  "key16": "2yjsdAmKCBHAa2ALMVro2ibCzR9BszcnnvcMYG4PsST8QVVAU5MUkoa3ivbH8H5F6jdXQxs3YncYVbEXJL8q2xrb",
  "key17": "4hjznFnMykobd7ygBA7a5gpMJhb9YXG926pbr8bGXNXXLP3TZ6BFoJ3YFYAxAy5pR5pzYZFohLdimgvZQtjzUqqp",
  "key18": "5XpxKMU2tCmmVkPTKXDsUbyeDiMTKGm5tHZrsYLCnDKcEBVfsX38Pq4ikHFcXEQe896DDZdVghX5wTYRmkgQgpn6",
  "key19": "5ibZN1CjjQJN3y7mmtZt5VLK4WwYTToQRJ6tnXNAkWJgYLhR35sLnm2kQGHqevPAMKAC3H9uQ5UthAZvbhcsehMH",
  "key20": "2kGx9B88sQkAogmKcL3jkhyaSqCt49T76NapsanBcnjUfRXPnbcrtTHXeJpwYVwb1UTYUYkq4A3Rv1XKmRUAuvE2",
  "key21": "2PH7j922pZkKxGki9fj2BGPDnmaKq7RSWJrKMP3uvPFvi5FRCwqwFw4Dwkuda2Mwp6H7YoqLs4Ncjxce4DHnegUT",
  "key22": "3nYMXcSRrqzyo1MNV3Lp9kaFpk4XXcguKj4PAEY45n9we5F7v2GrViicBbkcJ7hmR5t1xpTHewaHTMZVRT1EJaH9",
  "key23": "5vLxqsSQUkTztNF4VZDdcuc1whiuGUBahoxDF9aqUjhU1SoRuv1ar92FxQbvVgiQmPSPq8qjqrMUFgCjEQ6W9gyt",
  "key24": "2uiuDGDw66LfYYF7iKzx3gXFNDw2AL6TsSHuifrK9r6TsLS9CMQwFhfjzZk6yFUSmUbQHPNyDyyTzf6eqtff1eAq",
  "key25": "3zSy88U546N9Y3joRH7LtfCo88s5c2hpGKbp32AbnJZis1PxEoydUx8V7U6xrvykEtc9wqAGxJUS3Wqdh4ns8ntA",
  "key26": "5f6ivGEpmFYg3WSKB1qdVD6xpnYeRjvHcK7rnQaF9xWAcNQsARBK6LgmZqoMwf1dnekGJNDoZLg2xsjSm1U8df2M",
  "key27": "6dsnp4WzS7hq89SuwvJNB3n8VQgkcDXkdf9V3pr1LEfL1AgexJnt49DixfAPBsEECvGJwRXEfXsGLErZMsgmFQj",
  "key28": "5orqFhZC9X8Y1kqZVPByfCvN1NXxQyNg4QexJ6ygL51MqnxZvojE19oNrzAv4PCU8oGFkTbH6pTTx7z2XaN4zrGm",
  "key29": "5aLu5nPhBDiEx9KEaj9fpdDy36cLPkZxh8rqfFot1J4ciT4pJ1DR3Q4G2TmNzdTsWKGbRXtJWGzdeYRHGmKNpZhm",
  "key30": "2dqU8HaTPPdT57MBsxXGQMWemh98EbK8As5FtK3wkiJt5VW786F5Z7enaprtNM12JXauttifmH5kgKrq6PChUsA",
  "key31": "5eymhL3BfiWpfjy9Ey2TFkTeKqyKibsizHf1uQYPUMoKhH1UpcL4kqbxJ8A73gqAzRRg1zb7GyxjVXMirCgT5Ak1",
  "key32": "2KeTh8bdP7LM5tR2JARr4ycAdiauQXk7ESnwjZnFVBWCcd4XoFKCq4dYUx7dv2yu6oMuMYbkPSJJtNM3A1MLTUsv",
  "key33": "37jLHzJP1QRRDMnY5sGNircnxDV8K9yq3mBmQMwSXhRf24aVqKX7s4K4RQs9LRpqgRB4BGY55VvDBzWXnsgTiJcC"
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
