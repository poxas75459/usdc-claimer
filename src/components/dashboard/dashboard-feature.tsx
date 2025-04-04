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
    "3WTFFJ4UGvEWzKowYgGg5qigaTwAniQsCr5YQbnahHrEnMoXgupmtcC9zPsmX8XWc9umox8wUvX7ikb1TpS6UYrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LGZe2wALUS4KL8LdLVVLzJ5w77E9mn5LRThtgYskrsDwMm656Su9DqJS6DUWfhknHd5KmVuRUknWVtQPFtYu7UJ",
  "key1": "4e3CW7DRiXTr8pbfm2oLftKsysJ6eoP5cjm3r1Gv7hZb2KJhF1BVAvyVbfaBbEQogYtpUX7fze9nQtKqxfqaQAtv",
  "key2": "5Ymbg4Z3T8a5wnMrnj4UEPY7v5AZt4YuPPzs7B5LhENEVsmT3hwqW9xcx6iub6qMiAndEuHib7cuxQ1gLqQ8V7yG",
  "key3": "4Wcq9zWc7qkPjsJp2kj43MTEuZzq8FtXEbFzxeTVZVzfGG1XNzX2dPJ7UXcoEDrGHNezNjvyaa9tNCfCsd8xoPp6",
  "key4": "rhyrzwa2f81thDw6KAa5vWZsBYXvgqtS1sGGdH8Yf9Kgp15wywM7Mu1eyT5XpJdJGmNUs5omWmy2eYa2ws9zqyi",
  "key5": "47fHuAzFtpHmfv6w4x9ArbMuYhKXrbacJqxERAkqqyxC5ok73u7GjK5uSJy3B2tyNUrwATmf7Syo9iMrwQ6iqPtn",
  "key6": "43BMQf1M8csoFCVmHw7JKg56QNefBZvpFPtTQopPiN8Q1G5qtxi2jPBnt7qFoEPyGfMf8rpqcN96NzLDyygPfE4s",
  "key7": "3Fz1ows9BirvLF4bu69SkbjwVVM7RjeAVELeiA1DEQPpm4Sc9msfVFFqxZgac7e2hWPb8vqnP8GPRYUpdU8Sa684",
  "key8": "3UXThCe6CMPZKREp85jb6PMHPeUJDM9aKp6gCwspbYyzD4je49LxwKG1ZQ6Hby1ZUHnpRSsQCXkkCJ4RspU8aoJA",
  "key9": "4v4ZwRxsv69N44moKiwinim3jKka4Fuos5a3uxMhxyT9FVwCj2DBJ2GwFyKE3PedFLT2oLFjU98FFZ4YgSTevUpe",
  "key10": "38Qk4KQnKuwZRTtGBgbLAhJTKU1YtmsfF9NVBuHNou5CGwS4W3RJHKTw6JEaVei9KeNocDGPuMaTkqwkJHKAWpLa",
  "key11": "3GDVtXu7M1iDTjeKMdLSbDf7e2weuRv231v7WkQAFnXbomMxpsfgvuNDJroTXn3pV11d1mLz75F2BaP7Pe8nzQVp",
  "key12": "3G26RHBjfQx3jEYwf9ajR4e4G2qMYcFLoXSZh4sUTwzQz5VSo7N7MeHXhg63C8YREXGtZfHRScEcmWtseyscMuvU",
  "key13": "4i2HLoHMjBiFJdivBGdSRWXB1VpNRbb6QiGLvaoNsaAvYcJCgmnMhMWcs7tjoVkFTxxqRJnjgbXLayUuFsCY6pff",
  "key14": "4KqQwApvYvS4g4J3h5hgssE3pVZbjCRCmhN9r2Rt9ZrLbhQcn3YwsyvMVvrSKV2wm4gj4CzR1uuQMoJk3nb5UqrW",
  "key15": "5TmQABKb7yvo55xvgCuxFUMLrbxdwbThgZkXUHWeBnG6nUWSm3icpyz4AEp1gr6EAmaD72PvuXAmgFHXAhXUgwLv",
  "key16": "5S8HD9uW2x8fLMBbQCRTuHRcJGeAAY2kPUrniKzX96VsUT5YqYcpo5uajuMmR6jABLKoLpJ8P6N2BuoZ4jyX2ifB",
  "key17": "3612CK4SbdSG6funqQvAPsHPEAAjovCQLRdRKajYnygoCsb9isy5cG6vAjjjvZqTn6nsLWsK1JyLtrTjQCXyHWYJ",
  "key18": "4m1WVe3WgTAoNBLKRcpa4cxxim2US1QF7FJLdpqH35PqK8WHFbD3c6zTWsLk1s1ZaVftiCnq6WhDM1XwJRRVysUx",
  "key19": "4j5d6sWQeS9uiQH3bmtSqde3bGfppv8vY97vdEN64qkLj3BFDELb6QjiggAyCkvHvXA1pQwEjFaL1ANrJEwE6oX1",
  "key20": "5dMGHH5rsxmSED3MjBv6JRkx9zX5McJ8wjB3STEYdQKSbbBg1QnVAhw37RfbwXR1ZLUyNcDy1F4nkzfoe2fVfRb2",
  "key21": "3H7LKh1q6MfeyW5Yf4WS4dpmi5WLyYCwazLDd2nwv9BD9kDSPGtJzx2sQgqav1ZgHj4umtsBsKViRqVnw3VjA5b8",
  "key22": "4E7AHoNME2yejT8QiypxwnrjFMjTNzXWSGyQsPmvkr2mAcrCfDVqMDh9XMaxsaKMihKzQ2sYVQJ4BTtRXU1rNfYu",
  "key23": "4oWzrRXd6aWVxMvncKemSqkb64H43VvJSPK4BBtWQS9tdrq1QBg15gzXG4rEaWQAgUBtMZ2y5Ur7dyNQyaR3V8gW",
  "key24": "5WnHxNZpD1mqSL3szLQZNxdjLbhDjE3LfsUmYcKiuagZ6SukVUsSwp3vMBBRry67faELCbAdGQGk6QNjXyAPy4YD",
  "key25": "5QukVghEQp6HWUXTEPFJK8b777VFaw6md2MxXdPAMErKxuXZTPRys9nESQLgffVpKAJq68grerPm8XmwcJkCeSCY",
  "key26": "3L1z2z2sN3vXCN73NMViPZTHWmLErB3rxN2Kgnywsxh6THpH8dkHDVTjoxUBZajBTwkL2ip8RbZq66K3GqH48b52"
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
