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
    "4hk4arAZQgtg3kgTrVkk7w3PHkdzMDEKViNBnDQT564LY1NyKp1BaGMbXskeuj2m6gZsz2MnL4zvyw1dG868QzNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gScCgaw6E5M5fzi2J7iGjLrDzxKoUCsC6crXMEUBPyV7b7Smb4x9FRk9gaJ8eqEAJAWBAeEbrKVJpd2jFAGdDtK",
  "key1": "5DohFx6qZvVNjhdQSpbd2bRr29AnwJ4AsdfcwZt7SKxPGmCrMeGe2eG12fT91ighavaa6Fy9zzeDaRd3v98pCKm4",
  "key2": "5XxPJSNCzpM9jxurxxrZuZ9uaTpiTWhfqg4Hiat6KjFsmRhRm1ePbNtEdSsoZRMXDXPwWHPeV8NV9Udc58dVCuFv",
  "key3": "5mqRBGPNWj6ExEi427rmpw6LP8s2MiPPoSa2wcf3VCyd5kM9nV8juvBHHqW9W14ptbW8mj3zbSDFRTpgXyEKCR3k",
  "key4": "i5zc2CnYAESLHKe6LNDzjkMoSs4XcqHXr5eiKM6mSX8m9GB2kqLJT3dPQDXe6xTNpb7fpyDA6njqdaQPuaRM3W3",
  "key5": "f3VE2AHx4LSxZ4gwbi8GNxuXr4RXDjH9Lxrx7U7Wk14iRJEPo1HVChzZcDBEhMmyaXH2UuejKJoFexNb3L2Qr5Y",
  "key6": "5dn4RPe75ccxNh9k3cAU3mXE2doVE8KukFMiLoxBGyweZ8aFCAmn6yzUxQDRAekWnAvnAAu7ncyqj1tjGvDKsBD6",
  "key7": "56PJ6MXP26Awboxgx22y2K7mQSLWNtGp8J82MKzvPWWagnCpaT43PJk8eEfKNGkPfCqfXXbCVeCj2kramqGeRiTj",
  "key8": "42rCTRJrrHpCRCzRBYUk31Fi9t6SLnuBYqULHpiCJxoyb1V9bCNcAZcc4rg7aexZGJShjwhjZjvJditf3qVycd4H",
  "key9": "jdtB7szsAZ7wirwrbAf1a647qLEB8XLCjHegihBcNhNKcvJiND21tkMNdbGz59ABKJjrLn7ZKx8tS4HrExgrBAv",
  "key10": "2MEt394XJDxhJhaS5pYyb72bjg3qYb5Fk8u3J28vyPQXP4NdpWMhoKem8K7RM1GXc8nNYD6J7SQueS2J8eUT6Cqf",
  "key11": "ksnUGpRVyrZzythgZKcuoUPo6xj3V6UBjdGVrNEjWJRA1f5a9xqyF7ZcCUo3zrtH1SWJJ5ts4eJiFx6S6JYPzVH",
  "key12": "3L7pgY41pcihvt45X6e3b8JFwDtPuqz4mYUV997AfggYDpSHRCmEfuT8gBB3BJApNYbBurSsVRD2tM3exMt4vbJL",
  "key13": "2gqD7zDwJUeBj6j7fMgbEnoriBzCLHzi2bb9b3ekviatgEN751eDmaTB7SBKUkJvRWKP8UBx5b6fT8M3M4Ubnioz",
  "key14": "2j5ZRJSAq7XqrMGfsCwZSvaSCwoP4wUBWzNbLw8BGJjNNby7NT73JT8p7XV6rM5amD1GWdzL8UzT2GTsA1GADcmK",
  "key15": "5zLq9R1MAWNQ1RTPP9UtkfnxSEpBk39ddQWeCqrKHEwpMD2RM4b5ExASaZMEEji8AZ8TzsKN1ois5ebs1Vx4b2gD",
  "key16": "2is9sWYSESxuF7eTTWwRygBDQtte32QMmRGHVJJ3xgiQa8t6XrHMs9sqUbm9fMVjHLSDBRuwRZFqCi6LztFZDfNq",
  "key17": "61nDU4WGK3QvMNU5bDyR4hNnm77ELJXiS3GG5UCLZwGezFNXijEd5n2z558qVwUzggBcHYYjDX5xgpUQyskr9omz",
  "key18": "4it2VuyLGDqLAm1sjY9nc1yj9iSvw4gg6WXAAGCcunC6u7uPgVitW2gX6gaGYY2PLd58CrAWxfAz1mST2YCXdThV",
  "key19": "51NBCM1yn5Zy6gv3WmGJ3WRTLihvPLbYTbUEfsmB6bo7mTB7s8ZBsXK5JFcmnGMf6huVXSdWQkkje7WN32CWYpb1",
  "key20": "4ihbrnzYgixmm4RJXTqmDk2JkRnd8QhphhNq4PcvLjBGqNydYr13t9WJzSQznAaJudpD6LcbgU1VM1qpPDiXDEr1",
  "key21": "2UYZBqU8TDd1Sp2q91DaWgaPSrNJpeN1SVfYd5YtbkCaXeVp1Dzsy67H2FbywjrRnZhahgWAZcpt8HcG2Zj1X7Pe",
  "key22": "3czp7hxY66DEQFY2QCA2hefk3Eb9aCS4LNiqPRzenTyfcbvtPEXmCDLymGNiLksrKTAPSvAwZGuEXJquQXF61Pet",
  "key23": "4PDkoLeMYUUf1VhibiuH59t7pqYeUJyENzJmuENNDoMi5V2ZkMhTPhb4wpjqKukT5ziovir4pjM3BbFWn9evnWaB",
  "key24": "47aWCA1n69ZFJNBwkj4qUuRAXNEG7E6J9k8g2zNme9NDhrxAbtdYszkKshEKrvauQXCUUtVqfnNdz9KJXFTeyCVh",
  "key25": "4rzZb4Zy2ejVVSAFTANdkSBDxWXrvzeFJ81UdogPMAcjmXW4TN6ejeJtYZmfsLZSfgappYnNtrXHtVTzRQQU9LAe",
  "key26": "jkbiaDkWF9eHQRpRb7KeVkvzcWqCBm4jCU75sB2knGYoth3vFWUPVVUfJ86QzZgcSoUYb9E1bejhp9VRYwANAqA"
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
