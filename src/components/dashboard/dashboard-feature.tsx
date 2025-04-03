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
    "31C5bkWoN77mV24siAurrBFEXCYuAqufGnm59Jx7TQD7buR83SingHbAyGFF7kxYZfJZ5mxXNzF8gUmBrSMZ92Xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7fWjT74BbHKkYQjQnxwVkuE9LYRh8h7qS3dHzSo9pSNvwgML2JCKYMHcgwiA1RafAFC4DuGe29VhQdeHzLwdiy",
  "key1": "62znxFbj3AmVtXmpUpuoGPrpDvBLi8QvrP5a7ZCu9qmByJkwmRx8XQurvYYQYFrkGd4mc9WnF6zkkcCboN2eK5hP",
  "key2": "4LyZkME2bJTxxnaSSALwTPZeLnw8kaps2tAaZn8xcz4a9rYX8vkhTCedxUyFLxGKtmcYnHzgAFBNNYK4696vQJyT",
  "key3": "2tsXARW1rNrWt3j5znHisk6urAmaCts6gokr8ut29uoyw94ugwa82eTfuhZg35SxzkHH5MuhLVBPf3kw5szbiY9t",
  "key4": "2p7B7y9TJn7XhgJbNSRJg5GKMAosBdsmJjoEDQ3SXkTt2aPUhvnPsGFz6KXyb3mjSE49wWc9f8eV7o3Lk3EYw4Vq",
  "key5": "2x76j8ZQk8eCyZrERZAbscVwBJL8h5y56j5HLErc8HC6MTDz28iyxzxJsd6Ndnd1grsb7RwhWhXbHv1sSXhnYdr1",
  "key6": "2Yb1m3AtKzoGWpMVRv7TYV2nNW9Eiu9KUrnb5Kq85aTR5KoUodErUySZyoYGvYw4xLuYRqZgSf8V3ApZnDsQxuSQ",
  "key7": "8ZeQQeB2PzNuyhC59hZUu1iXQZxunKR3GBMrd36399nXVBLxSCwDWB61wEon2znAnfS4wjTaAfv4daM6626AaFB",
  "key8": "Pv5V6WEycTN3crcaSJADr7NZncMGNe24FNW6VjQ9bLxsyiGtxj2QG9RRPM96zMbzCyzX2cC1Sw9EASR29gQDQ3F",
  "key9": "2TC37xGtCjsd2AkpE6SKSFjy4CrgrSnpZ4jeoX3a1Gw7qnq37Q5jayZnaVXMDvGSBpZ23Rn6TfMUK78GFN5tY2Pq",
  "key10": "6Px2PFsdVG6Gzw4BDanpLz1fYM8T4nBv5v8TuyXdHJ4o3m1C88v87wTfkttaozYheRjRjXWaR2kKt3jjqYWPw7e",
  "key11": "3d6fsMoxEp34c5CQKB4mWwuMJQeWx1PU2FbPFJWP4oBB94tDap3tJhgE58j2gnr8MBuPyx11iZjAtytRq8B9h6nZ",
  "key12": "5noGjPn2cYBgxbMiS8Z8fLZQENeoVSSc45oSvw6X6ZfQH8MLhYni29nJ8M3ChuS46S5AvfCaXKKVgTQwwqeEFQw6",
  "key13": "44gz53AnGeXWQP7TF8fwSCGmwSqRRugy11kpYNs7dwjUNbCDiuSqfqsa85uGAd81r3MXASEu5BtW3FFMJHWrzdi2",
  "key14": "4DqKWhwJ8xkPGv1DTgqufNK9WS1vYpQGZMXXJ6BcJnG3yafBF1Yrdz9WxKuSptd8GwZRoQWJX5ewvgBF3P93fzg9",
  "key15": "4gqHxcRrZhdRLzrJo6VTPdUQRLe8hA16qnU7y2jAwGHZ5CMRrv3rv9FuxuqXKHLwnpbuSMSGZVwosTUqMvx4M9td",
  "key16": "wMCcJYopQQPNTdfTnrpNyjTVXkTvQKVDdCHhveKsmGcwF85FHiWMmfZgMjWSe6qxS11nxtJRzSHdFhPKb1nKoTc",
  "key17": "KbHZ4wwonUJRWemt7m8HMt2YoTAYJPsPQ3CKabLPQnNEWWUitBfNBZht75ma1uhuAELnmSCdtrt5pK5KXD4xfiB",
  "key18": "3tkcJejwfLjF3seteQuj6vERza7VsxSMXLxCk8nxfpGTKz9hhVPCs8Emi1ujanySHCgdVgyRcSHCD9VCFWQFKcqB",
  "key19": "4aWcPqLCZBdhRw38CzZZ3vANfL54nz7HBnSKfbp1akuxBpnmJLfpSxd2BfsHm6LQ5mCaueUHj3ss3xSCBnmTMtFM",
  "key20": "2HrBPJ26xi68BsAB2BmDWTAxxxbyesnNr1HyJ36KRKypTuW1L74GZxd5BHYrRReMB5JCqNhHqteVrWexzSQmiTLT",
  "key21": "5xkUZfidePzbFjSht8HU34H37oxw9EcSisJyuXBw6ZG618cRVKihnFeC2b4p7nfVzSXFCbMyV6pBvvEwaSLS1bQM",
  "key22": "cVCBq9Xj9j3aYhq9hXTBtQpGyWgW3sQtv6sTo4jLFuxiSiscr2wh9FK8feqJz3jP3k5uC2jVnn7bXsZEZvgsjfJ",
  "key23": "2sftBqe9neFGmgiyn8G47hfgpeVU8Fuw9c9oHAoqbWdWYYzvBVEZiuD8rRby1mYur2udzDZPEmbGfRAX64wMEzh7",
  "key24": "nJmRCACupxQ1cHKCWQEa8zeD1d15LTWbrc7XA2qwnC6yNX9SQ8XSrg1Sq6Sw3nsXNYX3jwk1szC6gSDcd7psnHR",
  "key25": "2wZAcjv8WpY932DPSNvncWfmCMf938zQouiD7YCkpPRJJLPWesHcNrBxrd2FvL77H4yrDYR98BsnMMHaL1dfQuGz"
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
