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
    "4Rufz9tdfUN9CM6boq5vRr97vLEE7Lu3X7ELm2zDvAnS28XDed9tkQ8uQf7QwbCAbJCc4pMCU2Fy6ixMP3SVXSYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZmE7g1S1LkK76RRTkDs7LbLJtYEPtNdCviduqAbPhetnbBz6obuj9dHixYdrc4m4Um29vjxrAN2tjBt356s3sC",
  "key1": "3n6jG9cPgxcrtsdUqzP6dFYp7XpjDj3jyD76yby4kiwEBNM1uLmakYQ5QBLEu8vnUrtvWey8Y1PPTbRM49dKEho3",
  "key2": "3VgPRjvYBugmgDQkXtU7eEQr1yc4jM9NKaVzs5UyEiuZGTnKa7i2R2AmadziA71EBy7qaz5NGtfyv7xpUtpN7o1y",
  "key3": "YC14oXy2hqgoe35HHeXm7VBX29drWbuT7TANRBRpDVL1YW65QZQ6eQkUSECHxrMERNgg2bjVVvvfJ2EKoAoZ6Bj",
  "key4": "3oDvr7GFdaG2tK9QLjxVH2jU57AaJ6kzjxVQx2BDuYYvFWJkNDthSiXequakHsonxGAxFP5uq5cb8gvSRX6adkEs",
  "key5": "3PeL7gzVRNQwabh5vSstB2sf8KC1ZHwxnRPNe4FpJxkgACQ2CzoJ8LFkUBTBE6NcHjN3ceGq9GGwpNis8RBWcvUS",
  "key6": "3FLT1faCnLTMyyjrnDgm8w6YyjvyoYaUZm3xURSiEB1qXTfTKMbKiGhJmWfaj8kZKp1F6kqGsZ22HAgWTtNqXF16",
  "key7": "GPpTsKYkJkPsxcmQMr5k7ig17RWWRsirtmE5jWHDFYgrrHFoSF7mUR4FwDqy4JEiZaxqaMqSAu3yoG6rdih7xoD",
  "key8": "LCPCM7im9gpFU9udEnD78TbqwxaA48ZVgvwCVzWFcTMCfMEET4aXsMfM1ncJKw2eAkVARBk991trh99xmWX6mio",
  "key9": "21kXejun1gNLFBRprfnGLP34Da3axbdMU2EPPo5U9cKCGfbnpZCdMCCs4m9JSkEUL4XyxExRJY9K9Xgp91GcTwab",
  "key10": "5UuepiAH4PanwHUGC4MefipZA2pPBt4rCPDUpgp2r4npxjyy6ibSKEJgP7MG5rxeqNeb1Z8jwEshJbUtajgQycWU",
  "key11": "657m5X5PC9xJUpkmr4kzbW7bAx9gxX3QECSFpfVfLVbuBA3zUN5So2sHgET9igkZ5kyPUAmb2qsTFxsAd374vTGu",
  "key12": "j9azxrFUQUQBVRd17vmXUWWVLNuR85151JEBA8bpa1WNGRKyxoeX4S27XxD5c7KacqGfmqTtcyVrozyQwiEbuYP",
  "key13": "447ResazaMF4EkR9KwMvRaj8V7CuqLWqHCj2c4PyBzz1ZyYErVKi6ucPS53bYZKdGcVSMyJYeaJLjyTh5JHwVFfP",
  "key14": "4YGNoniP8ViRNeEVGCQePTtT6N58ncQDTdnFa3zpgQimdLUvhNuPCfFF8QFPCwCesgDkPwVMgNtDDCZhAJEG9nZe",
  "key15": "31x5jQAVBTicB4mPkhWSE5b6tSUhZkuejRa3dL5A4AtsLa9Fe4aVvxw3FMvjHZYDsg375Hg7CcJAerDmfrS9aXGY",
  "key16": "4671eGEb4xspzo2vWpN5kVazcAGF7U4hdCdLMnsXwJawBbn4gjH8BDaUg7re2mLa4xbbzEXVR1wMqzAqyxvCz43s",
  "key17": "4rRzaTFDxzGUkRDer6R166hWjjiRcAzxh6YA4cY49EKDYnwvgPr9qUsUTG2WAXDLMJtbMuFQXE1yFJ4V1tBXzoE9",
  "key18": "H85fT5xaqjynokWUbDgDHHsV6NxQAompfwqMHH9z6esAFut5ozqpV9mUYUgSFmYYuhrAsWhHjf2zmfYZw3weErm",
  "key19": "sjFiDqCTuZmJtFqMXP96e4pepbWwew3WV9x1G19CV8H7T6gAdFBHQCJxuzjMGwPMae2jftsFoJwxWRB1j2drTfQ",
  "key20": "BmGBcqy3C8gRE3Di8syPqj85x44JaCrX1Q96guiFp21GfiZWwyAn3ftrCkUNekLNp51jM1ZD6nP3N7PSJDkLcaF",
  "key21": "4wd8DAedaHzuiH2Yn1ubU1Em7fxYwPSf9GeL7BGkFEdqePcXmeDBMnVQvV8bzYer4B3hJX1c7otr5X2N529bdw2S",
  "key22": "3JKoHd3ADNqpjLLE3NHG2zPb728otnJKXPEvoyXkgZHv4ipPDwsMzLsRgNcjMUE1HnHAzh3YkK2sdoDkX67wRuiF",
  "key23": "7W14u4SEA3Npo7QvPTYHBZ215yfSngTC4QWJ4sTsfVS1rRwjoZDR5bzWTNw5bDrPTm1PFi4mVjhL4YTXyrmSYvy",
  "key24": "37WWjL4mRL9tTxeXPkifHG1bjkk63HNMwm53geFbAZSfwpATSSwvBDm5FU4wAXQuvgG3qLMZi4Aevxz1oewiBWGC",
  "key25": "fvtdKHDV6wspoRabXe94tNS4b1j7CurbDG9EwAS3FqeH5e7RJenfosMCAXm9k38VdTLPXrB4rS1WQphb33JXyjh",
  "key26": "2TewEG9rFZD2BXNXqy9hYfG1nAFEyEPAzakyxvVXzH5j5y6haoWLBEoTwuH6fS4icu82J4W6XQVMpCKitP6FkwtU",
  "key27": "2VAXMFB49FrdiT8rTCmirjfzeWqhvkxHpyk5PcYrAeeAHv4FK623yigJmL4Xnuepnm7cP8hXR4tQwBff34encU8b",
  "key28": "4AVxXD7NY9RqeeS7Gmkf42znuBxUVBHN8tKFE8uL8gpb5zRwtREN3LVLJ1crCZZSRztWSE8xL8A8YEjoTQCamYb7",
  "key29": "23Ro6JYSwy4dpAvvDsW6MR13FT8HrzQeyCoJ6Lo9fWyb7oUU3WqCubYFV1MFzJuyRQVYcRysSUTmTECR75oFtHJb",
  "key30": "5ui2V59hND3P4hYupzmN1Y639oVuUBFg5F7onybZqaCCWqVeBgMbeuhB3WERnJLdaUg7XMUfhawYfYHqLW9d9YVv",
  "key31": "4ZQkNKpXwrvcktsKgn1UWSaZuYf5bXJTkxAzRmbKQcxaYdV9sRJrr9aw5gZQUKhZjsXtwncV2uGjaJy81Uuv8bwg",
  "key32": "2rZgbh71at8tCdkEWewBmesa26rwFb8Yc7F6fA8FtTrEkQLUUU77FDur6DLYJba4AomTAu7JqRdn82RYdGmzShTJ"
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
