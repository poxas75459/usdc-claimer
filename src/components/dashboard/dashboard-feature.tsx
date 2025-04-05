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
    "Boem3meqL2qY1o7N8JitRWrWuJQ3qrMLXoY2hFQtvty9KGQzNUZNjmSFnHtKG24Fnn6sQHEaAq2jgLbJcoKTRJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U33rietqjavrnVqyhS6fTSY3jKsAWo91v1ujdckzqJGcKknJRNJckNquP71VitvwYHLZWZ58825JYEpTD4GBk2q",
  "key1": "3T2u8CSSUwj8uNiDq7AydHGwcCak6FGuwK8xsAe3yUpFngEyoa28f7gjtvYxNeDbuNDBh63C79DssPjxqohJF5eP",
  "key2": "2DDbHA5vWVYKrBLeyz3QVwphBuK6L1LiR1X2gXP4coxTNpBvNF13816fTyn5WpZmurto1i94GfYwSmrvz6y87oW",
  "key3": "4pn4qv9pf1Vpm1p5zy6ijTnDJaudoByexTCBL925vVZ99pFVoZEwt8PTuGiToPzfKsUFMTBebzdW98GDvapjihdK",
  "key4": "4duAHzfXdxCZGM7pUvWtqjXAELdnPW1gwiiXXfAoD3YRCvbZrPwJkhnCSufBZdMKXxzGiZTVxV2Qr1EoZrmxa7q8",
  "key5": "34u4HJLM6uPaxcVLibJorL6JJU51jFRg6trR8fv8RJa6H4hfwSgNJWnW2EefeLFeNVZryPYy1SEugjmTQEjEPy6t",
  "key6": "ScbejkLfrBqoabLry4nZ2nXHPnkTpcPwTE69sQFzzrHESY5AvYMwe8aMh6wYCPp2TAxQ6Ap2kAYhzfbeoNpmNUM",
  "key7": "2P24WN175AwAp1zC5XbvtZt8KGpXXG1GsU7meDnRznTPwZbfB6rk7iuZ3R3VQ1Ng4ZcKLAVvihUXVawAQLu92aSY",
  "key8": "M9d6QCsVAf9NL5LgKpyWGT4uZCE1XGphuRGX75dzPf9ccoTsyTPufUbyHyH8ZfNUSSgrj9WMDc46xtApcxJXLNx",
  "key9": "4j6oFk9FH4o3UQ6EPYrrxe7Rg8XCW56sa1ZJqgyJaGxpoffcm4XTixNKLZ1vtq1Ug1ngtLqxAUzyTstdtsrsBV1r",
  "key10": "2BHvKNym4SZHoD6MPkzsfqRUw5YSjbWRokjQdzfhju5S2LPkzGrxtxeNG4tWz2EHKo3s2XqTuRfTn9Va4PvF8bu6",
  "key11": "5s6cVR3kmMW6x8S3ZhnpuiSdtRKD9DKMwnNwhqb1fNJXyRCZxE694VnYbXtM6TTtgYo6t2xkGu97iGdZm3SYkfgJ",
  "key12": "5de8SNMDyAeiFBoqwEpLeiWzGPA2ervtpvC4ccRYYUhAkpo41wxRdN9gTXiSqNDLr1vTrDCC2ByxA1kJPoBevfgC",
  "key13": "36eMcibioP5xP2yxyoFL7VbzNqWN5EkLM9qT6DsP1fQr7kCs7TZdmH5rpjtXu92XQCyd31TLDQSgnwwKf2tou5CC",
  "key14": "2jtR7GPirqWpsQFJTbDCxT5Yr1wtBgb6p74Rbvpj8JZ1441N515iWqdspEQrG7Sz8uCqnjbrhnDKa3YeQwM6EMjC",
  "key15": "5asYFJ9WbYPToo6Jknyo9Dn1J9n2xoRh8oipfDPGFamH3QkGLpx4QPjNU1QXQ8GHGfUkiwLA5oUJRPeUSkVjBcD5",
  "key16": "42tcRkityS89GaustpjZMKavWS39veRUmKFzwyd6HB7zxqJMnfk5WyU277Z9z9wY2qxy9giNZzt16qEjbSzWVTcb",
  "key17": "4wW1AjtJoaANSwBFtADEDwjxtgMJp92CDHAaTvfQN56vcs1KcdbsJU9WPDuscLjGZhTHnJxaNu3ZQxc6qKz4DnrN",
  "key18": "51nT3JK9tRYMvsuXGCjEEhk8gHrbqrjY2x2eYjsFUVdzStQafxRwpbBgwHZCb7CGJHpHDRny6yM6i7cYG77tKEjk",
  "key19": "2561XBBskSU2v6KpxphUz4u32SMpWg1rmNcbF28tsW3tCBQxsXYBKAY1JUtgbboSyjonMdH398GcNPHd4w6SRDw5",
  "key20": "53DsWGZkQSkpQLnsBRdASc5gbuKy5JprKXQASaW1c4rQudr1Cb35oW77LGWwoxnXRv9eiAtnKrzmhk5PPk7sr455",
  "key21": "5Yb8BbsrUVoSDe5pFXNR8PdDcYzgEVZuiiCSAEVTT7z6pGvMJ3dYwYhU6V5tVbegPjxaJ3Fj9JHsBXSc7jytPA5H",
  "key22": "4QUSMyX73SDiwfcfZnA9mANQhseCVxZFQyMdTN1eL4dEYGdrJNHdYUkvj3PrLgnAsByCrcihtgVUS9VCEpzYb7Lk",
  "key23": "4FPVjuzoyhwThTuUnLKSSMsmXARUQ4ja3iwCCHq3CmC6ZW4cx1QAjKWy2sGPQMxU7mefeWEJv6fyWXhqG9euwEg",
  "key24": "scfRGMSrDSzJxPNHu6tdqr7iX3qDWgkJprx93m9dzhxV2cX4n6kV24ysdkXUEB2KuevfZZxTcqvHSpLHtupCZyN",
  "key25": "4KzwweaHfDUspEoZJUJUozrvFAgNWcBtkDJKrmuGSeU1Pr4TzFxb2rGwNXrRgLJQWZ4jeUctzY7sf828Km3WU3DZ",
  "key26": "gfKUkLZBYVm8BFxYV8shvWHipGT8bZkyKin42S1N3BJqvvoGcwmWg3zzoRac624ypvboB69b57mbCTZ1GxL3Tx3",
  "key27": "2RATJj64tm65TrKTpFZ2iNcHdNhkYtg4eZsX6f5RsbsqUUctGQjYmpTKHeFDMCYKAP3f84i2Tk99Rkdm8xApVmzC",
  "key28": "5dyGVdQJ53cQkLajR5hqyfDjojegKYN534KEe9k7RBrJhi7a7grm3d4ATXkp23ntJmcBN5Bc1ikyJXmYGhQwAxvF"
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
