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
    "3uUsZ6We3oegv3u9DxFQLGqKHiv9UHWf94DqqLUGTTtXP6qGahc2xMHEJFQDZaT3HWMWq46LpDoWKd4UNeeAaDBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYahgtU9v3EM9sg4WV34JJrq6FakbsUeXr6XdwhwX59HQGeU9J6zPx36UTvSUASSm14WaYvA4iZRnSK4CAkvNHc",
  "key1": "KCEBq2qwuyJVJ6qwvtHwYrzhyxL695EucEvmsVyT3M62FEeS5wUpsGYua59Z6WBR564wUfyJQuDebLPFkbRAMMN",
  "key2": "29MF8KeFgnRc3tRwQ4ZrPvcWWydwt7hJssUTiKPwJYquYPQqmt7yqDxciVsg5SV114oJhqFSLYtUGM2XsSL5L7sn",
  "key3": "44Axim53uEcHfyof69qp6oeN3rEwNgNLv6tCdX3pS81Nfu9CTCkTZykSeR5q6vGARvmeLFUwuCsdoVpYn6ZYE3BK",
  "key4": "QP2yBfH248RHfq4uexJ25EheW3a5joFuX5b1cd38dqiF6CCamDiYE9jkgy6Ns6nxBxNofKUYXCoAeKA8NbsFoB6",
  "key5": "V1GVfsdUS1rD8NhuHCsUQ9xqbynQMB7eH2GsrjBYHxpb6fZtX5LxfbtqJK8YLPWB3dDnRffGnLXt633Ei6DRXHg",
  "key6": "2tnr5gJF65v2mo99d3X9YxhEwGWDvqD813hysqAXSXL29siYcayDV2vyyJ5ewYxbNSAapp9QA8XrB4rWaXKQL3qX",
  "key7": "4kdPoAXpDq3Xt2fZSXxyxAo7MifWKhyDSwV6msWQ8cwotBTT2xG6h6PViUd8WmDyGeXzX5Wfe9UKGCGRegMXpPxD",
  "key8": "2nAkA9DSi4GBt2FXvnfZ6AZeL95K9nmuXHtft3oY3ZGGKKMxKCu4KWXaT9Srdpt3Fn16ankBSQoRnYwXegyy5rwe",
  "key9": "3uWWRFV4fPwr1ZU4h4Pd636BZptegPMNYSNfFTSFiirfp97ZWSEF17FS4TR2LDvaRsUq6EU5QSgKZDcaCGes8Kk3",
  "key10": "55sZmFiNUyDfYacfB6GbG1fESkWcJPsuCtVF6Pz2oBXYVbCtGUnAk5bymCoknLBZoeb4NwZJeeanKCztmGJ1iaPw",
  "key11": "2znBPTpdHzDyscqRV6pU3j7j3oqapqg1muBraQvPjcESBRGAa9j9uudCQf1p2bz4hkpbcp8nxtMN8BcNohBT8bUb",
  "key12": "xEWVEPiobwUCHU3cqYLdE4eP8fZr2rKnMPfesmdbzjAjwR4f1aBot3K3aSMeaoXXgtCHRC5s3v8z5oKgr6WvgGM",
  "key13": "4EheCfeb9RF6kA1zT8nzjLA8qjsaycsqJr8nixu6EPboss6ywCszNFm86yxQ6KQiGHwHyqaZVbxTsYT5bZLymJST",
  "key14": "vuxFnexmEdJpNRUiKysrUv3wk5BZA1R2pcTDL5aUbCVPaUpSx8Z8fhoa8T2bivfcWXPv6LdvKbv4oDtoVSZLdTj",
  "key15": "2BbJTZtF2u841yktEXH6YAMdFPmA5nFojoQogQhyD8U1JUopxffS9S3rEXTYcDJtgx25wbBuRTdwp61tsyxKsMn1",
  "key16": "3uR2Yy48gVKXqk2oWzHNUdGMLciNffmp9DiGG2BCCRsAaZ4HHoVdSiDVVWAzxQiZ15cABL3tA5XsYvutPvv9bebi",
  "key17": "3mGBkECo6qkSvLrmLR33cWbNZRKuGHpASxnCjcrSkhNgfwDVPYB9KNfKRfQdKQErauzyXhM1HW2E3HpXkbnFkD1V",
  "key18": "5wJgWt5VLU4caQqk4torgT3jzC6eMgaHnytN7fABmMNAxdborxmbcM6Xj259B5Q6kiZp4wS1Xqc1vuhCHiZBKdvZ",
  "key19": "2E2rKzr2feCpcH6jga2TKFfUnXCmT8KKb5gHhEAkbcrngc9sXo7eFoJtsPGmhUctr48tMuE5kqjcAhfFprpPq4oG",
  "key20": "54Fs9cnKUENKdjD4nSsKLSXfQ7TsGKUecB2Su1poS5YQFVc2BUjhWnNXwtNyeJy9Nmpf5RmGwqs7fW8Wykycjc1B",
  "key21": "2hz5ykXTGpr15mXaAHdy6gpRmNGNEwMGnUPuo5663qzkWpuFgmiVgkL8pvpx6ty3TKhgCJBsmfhLE8XaTTHDKFab",
  "key22": "REBoPqJX4sD7axH4a7sTWCWH7pXiVjnktWybMojxHwXoeuumXPVZcnFzJFttG5XnC5WhEpXRkZCUDkkthrxMaWy",
  "key23": "4npb7mLia4gpBPpgGEKuCZoKY6mW2zbJWH6mLRbvtYC1M2eRKQVEE7egQmwBxS66XTNHfxXYAkTPA21YGuvG836g",
  "key24": "5gXpgq7WQk7Y5it6adzCBGY6fQ4uQxxP5aRChuaYb5Vo7cwGrbXjeMxcPEf63UCd4hJCJn19tSUw1m119xWkWXBh"
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
