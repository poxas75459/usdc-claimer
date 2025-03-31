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
    "2EngHjZu8Mn1LTb28vUbRgCCNSnyoGdaq32e2PnSWgdN8zdntv82UFBvrCgeZmVHWDVVRtHTR8NGEkQ1yCg9e7zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vz2Cx9UPrGbwA92YHbQFfJjejBrv3s1fpVK2PNPBi73mxk9R8iBjWuqTWD1jGHfqGRHuPanqQbuh74amkAuavwf",
  "key1": "55k3qgyXQ3FP52fPvgGhpkcP4c9DNSjjBynNon2vR4Xxgw4EWpjJbPhK8msZwRGk6EvcRnZL4dAwf7D8mXpQ3Pfy",
  "key2": "43yUjpRjPpDJYHw9NM3NYaoG1XfRt22CmvFJK5SQD53mHvruk8sShXms47YEHaRgT575VAgAv2z1Fr6eAM6BUxWW",
  "key3": "5rzGtRSwd9D4rQRzGy4eL2S3zKtJLRqE98noc3gRmT5kpfwiWMSGcXbgfrRKwbdAx3w5EBs6LxC7q33BdPFjmJMk",
  "key4": "4rRTNNEe5Pda1i6w6t8MbcgFt1KfaaVJvKCeKKUdYqVCvxQZkpd1TKWUkgEUnC3rCXE1LYg7RwMAuqHNf9jsPWhD",
  "key5": "5QF65f2GZ6xrpHdjLGzUS1MaEDRKpEah56opjX8jRtwqjYDTzNi4rSbazq4kDConhf8SLHorhH47gQjdGSC2og8e",
  "key6": "5XkdM585tqEhNPsuQB97SUsYbgYzCRkJ8K8thtJsFDoET7TNP9NGdipH9XoBraf2AkwD2ux6LeGWMFWeWGBjnuzf",
  "key7": "5P9n7B3wCV8sb52vrWMVQCTapcXQ15F5ZWt4dZhGco5xiWSBJJQLcEeX8yXSG2B5pyfVTsUybTCSzo2deFE9ieS6",
  "key8": "9weRz4cKhk8Ub9FbkyaUquvbTsuS2DRQ2App5iV6F6EYo2uTkAe6126WPi6yLgoY4oZA5QVxyR76QNsBFiHAx1a",
  "key9": "3AcUazmYWvFE7zRx2UXuyKiCeEP18gyKo5qrfLpB1PYLrJ4sobsZevmtbQopNs6ZxwWFdj8PdNVdLTLkcQg4dyGK",
  "key10": "5AXj5rCRgNf4xk7dXLXcRZi2jPuQX7SadTDbeh3eFmj96UAd7fstkxzR5xxwQfw8Y11wRNvQ3KbukxNcGPBAKUMs",
  "key11": "454gpghqD4GNcy9oLNPa9nMTgt3dykg9an2QbBuaHYUGLaJqLgArP2vqFgHLsKmmN6R3o19C2bYaZoifHLjMMgDy",
  "key12": "2YfAhTb59jejNm6gzpsuas8mvZ4yBDxeaV4cmRJgen5ij5XtR5N4EzziSEitLjTTYZCJ8YC9oigBK4oG95PaZZto",
  "key13": "3aV6bgUbGF7VDtL3fuwMk8J38sL32DEhGg9yCf1T7Ft6dreV8WccDZpA6u9xahMpc8KP54wUiCgeKytXYTnFn4cU",
  "key14": "hidbz9UGDeuv3H9P4kGrKw83UA9KXYs492e1VHdym6MQBCjEtdedXAyKF8FDgWcdbxJij17d1RvyyofXHf7xNXv",
  "key15": "geBg8D7MsY4TTVJ4c42FM6HMQCW34jWQwJjSsfmxf8S7gZjjNrBovDd1dQhHK18Cj1xfW9ZMaPxspyM4TJ7593s",
  "key16": "3vUMDSUq9M6imeyJkHd5CE1CQwzLgSqC4YVpBJMwxbk5dWgfELnjdtB1bjkCrzk3gdxHQEHTPiiqv6zy4WtfsrZc",
  "key17": "2h2kj48KiJmAvCtPBBxPTvxdY1HqWyUqiG4s4ZSgH7TBVYbtZTYWWusk4kPH272ckewRSFxAJUnrQ4tGp4Ata5XT",
  "key18": "2igmBcV4xZNzRxMFaTABjFtTi5HQb3rajEuMTAtFkFhwXesMtaQAfNzoEzhjZaXUtFMXTRtKTJZH8x5AfueHmx4T",
  "key19": "47ux3K8K2inNyCf8crSS8rhZ5oopJPGfAMijjqST9w5ZtrjyVvBUdCWPWpyK35ufBtPmeQ8JXFGeu9dTZahf23Wn",
  "key20": "2BoMrTmwzXaCtf83Hhxmy6Z4WTBbPLfgEE2fotLTrqagnkpHAKHB41hEukJYhvMK2Cx18bNTbx5nCs8H5fsq1ZFW",
  "key21": "2nfFym4rQsYaRmwnAExVX3GwTs5Y5f6Pmd4oYLVj6gM6RfF8JZAqk4rd6PFTFx7UKQFA6fanHMJCL9veDBhP3YQ4",
  "key22": "21SCoKd8Qch1ViniDU3LkUSP5VHsfEsMUj7NWqvduycc4rC8ZbAWh1FAy8dMeGwMDGx1HE8HFwtZfH7MmCsBwwF4",
  "key23": "3rDnBSoqXMM53V6rvVzwHuHXVNreYZrshr1EsxxN4qzqo424pVNDM8qTdZY77msbEhq1GqYfdTPcv6REmQSS65wP",
  "key24": "WGFDRHxRMDCSZYgwW199srZBoTcW5kWEXn9hTuGYnchCBbPX92a3XMXyHE7cCw3yfoBg3VXgf9h4gVPTbee8oF3",
  "key25": "61qb2UCLarnGxWcZ8TtdmhPYuUkX2cC3psTi5TvikQmv7DkvR54czYhE9QqEeMLQWBdbQzdueYKBKB2aB7oQgQEQ"
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
