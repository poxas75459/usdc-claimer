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
    "bCXBwt379jLjKk1XjkU1XiniMFpTtW4x7i1J2v2uoWrFdN1SxPJ8aSefcx5Vg2eNeNVwCmEb6ib98kwAVGXmywR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8HxHh7147oE2cXpWhePKDF2BF7tgDGUo1zB1mRceXNRzskMwxshzyAsMJ2F1p5KnzkQUjT5zaUWc7HHPYboKya",
  "key1": "31AAhRTZj1kaRZ5R4vJNwGsaiuvQBVnBTgARBoFiMapG8S4zpG26LLE7BnVFRsEbDWiphcriMrL2BfGjtejuECt5",
  "key2": "4GnVhVovKurM6NF9dinaPD9VUicNRQLGakpSSYTz6aD9xmqiHZY8QZKjt4VxXybgmTtyK7ycdAx8FN45EsD6rg6n",
  "key3": "A79g7zhwt37PHAbMef4JCPxkeEVpJ9Jr6esHbcBQsDWu8VpGubrfC6iLMhWwWLXBzxP6eYdiZdPYaHnDmtPXoY5",
  "key4": "kb7Pue7tA5NxiBWW7WdTHF6h3eWiQimqQRY3G43T9MCMQYhz2aVnuRStKZrACYBMXPyCbhjdCosyZBC7m6su3y5",
  "key5": "521HVBVyXdxYSyGqoCrz6LvFkMrHahNUg5ppBT25EYqm44VLKs7JN89ReTo1yhtiLK5h6zoGxwFU1KLYzU4jLcgV",
  "key6": "ay2XaYyFyDTnmt3DYB4XwmSF3KyExTJdChsRuSsdYhX8EmgDPY7CEEf1iEhnVV1NBHMRiBUwns4aPgfZEpmAZbp",
  "key7": "4bdjRCXS8rJNnSEGRuKTRvrZ9hESmoxBepJDh1LDE7xxcnBKXWJM93vFQhMGit3YERkevH5asSgZ9dK7LoxRBfwB",
  "key8": "5BZ3xPqijtGUVb2qAqJ7Be1rH7jVrJ2ybfwL5dHSWVa7cX8WCZfCiDMUf8tZ9Qb5p3jWXqocbWarvgKZ7wKc4dyu",
  "key9": "3wqGoD43UncUp6ZTbi2LTaWzwoAXn4K4sHWhFLkMHCNTgTxorSvqbxR1kmUcU6dK1MYwZhhKH2oLc2kfrhX1EVhK",
  "key10": "4Cu6q8RWbh845peG5MEgTd6qc4DkQWrP5X1ZCRDw7Xrhnb2kEjXTGDuxRRVLriAeTADtSfiwTNYadpiyyVjVSSvc",
  "key11": "3nd8Y1Ru9fbzdc2BRtdsT5rctfT4VjGuuPfXQZbFUnPSqB8Yfj2dwpdjb8Sf217Qp5udJDPSn31AvTBs5azKPuyX",
  "key12": "3tDSUA3rYcLWX7DQwvEmLUT2h5ZMdx1f3JJVTspm3Q1roX3UEzWnBy7qcLvg7GyLVTfFkkKjdFukiA9TskNEL4H3",
  "key13": "53xHnZchkndE4NUj63Z6Lc7xa4Y2CSuw26FBYsSd24N1MNALKYCVCoqgfUkbbsbjYrs1vMp13ANvEA44wgKGiBK5",
  "key14": "ehgBqq8jDhQ3U9gZSHfVJ7uFNRyRXMx4NMZZmwmsWUBmCYYJzwukUptGeSLFzJxvqmbgY8LsFPPCfgkj4vQLSZv",
  "key15": "53V5a3J15vjTT9zfhf4g8yBSMZQUcRt1MKnAwVc1q1H2WJuem9CWUNp8af58DBsrwFtF6UXA37WwN2RxjTPMeKun",
  "key16": "ctaUFvwko8YAstNBY4gxrjAZj8qkpqgBhAkYSo8wCLgCeTUrr8dvvsYgEqmbtxwzf4NZgDS1mcgbhynLHeAvV1x",
  "key17": "3KDUjgeTNxRtfnAq7JX7wE8nWMKtx929byzLrdckTxJsMoHBfLgEVuS7oF7hzNqoXmZXNjHE8aFnZKLZ85LiLzgS",
  "key18": "ZdnNFayqgwDwpYmaD5rXWRDN4zkGnUUzqqgrLUErcYmPLgBUNfrwTLwPKUXPTpGXz3ktjcripRLjY7KoNXMehv7",
  "key19": "L2YYTJ1hM5qsT6DZzFZGLJKF8Qo3TFLKwDAxJpRFLJhqkVVZeeaeCsxN6RD6MMrgmHkeD9tsHL5EKY85gBMtAqJ",
  "key20": "UWEE5pRAxjTbSfVNc6jGADuNLgsqbnJoT5EeY8oFoCEQrNeSumpLbL5rCLRH4bCiQLRCcB6EhLrda7zcadyYEs9",
  "key21": "3WtzeyZfjFLk5q82GPbNKadmjizqSrioaBoXg4VJcXL9PvcM7NDN7xXKuxRqX2NRXBmWDieg5uU5JU54HYyH2pd7",
  "key22": "qK1eyhj4Vn7N3Kf5dhzxcwWwSN5fjdEhPc9HG625d5Kwg3gBwGNgqVe1tauKb1SUbRT6HYszatTT2Huv25hEQKg",
  "key23": "iv1f55fCeBdomHiQnmxpwFcN8ozKZrFmXaN7wX1TjYyM1R83D1Yx5i1ymBrr2jxBmh2fyqVa1z5YGSHJ7uXHvGN",
  "key24": "54UoTPRfAMfQPkz7rzfJnUNJtHqbu19xLaky7CWCFoyS78kbvnS5BNaDoQwSByWbXKzKxMtBjM3tFMSndhEjhpFj"
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
