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
    "fqfxGuiLMaE3aUqGkfeYrM3vwEqzDnZgq14uMjVc5pQChA7fWaQC8WYwb33ibvXyWBxQndescx7hce4kYngSCHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pWb6YyNezH37yMror9E8azbjGW5C9JQmwfXM83SsA5VbYVxqm3PfGTC7sdbCajD1Fy1R9tW19sjmdDxo5i6hnWA",
  "key1": "2pvsBQ8tz9Ra7xnwJzySiYW6AeqQJLXi3Z5bPQqDBNV5mCnfa2Zgp1MuPifZhWuTEeJsxqfr6ums6GEK66FrYvss",
  "key2": "5irECEpE6s2DwjKLx4aHWyonFszfZh7sB7NADVFG8dgMqrWv5BtDREyJXfEWof8GonNgcdb7EmxzC12uQXsKevZk",
  "key3": "5fd6qhXRCKZ8QPcxY5M2JL1krJSV2xH3qD7g5pDcHWpgLL1qwadUuYdVCcGf9UoLMZaZvYY3ZLZYGAXix45Pokup",
  "key4": "5UHuCqQjHHJD3nd3HtMgPqrB5TMqLU4App5AdJwcaaGyH9xHfjpfghGYywSwMfjpAmpxGhEhhjRzf1Cc2jASgS4j",
  "key5": "58vU41xziBfPGTUDfbuZZcMvet39qAQhWiFCjEGsqWmZWMWcRqyathMWabPJjCbiPe3tJB9uWJv73vsoT9RmL12C",
  "key6": "2sq2r5hYMNkSTameRkGcUHuVUu1J2G7VZy7uc6t8CfodvsG3FV2yJnDPkfPTPfbrJeAQ53PJiLWwRfZGEuFdrSXA",
  "key7": "2viKWYyvNhw5F9dxAHppyheHBVcqi8KcmS31YDp4HCaJtkknQDFBNSW66GWXjqSigCrYBaHSdg8DoMj1c6Yvs6KM",
  "key8": "32ijC73eTPtQQe9nzuQVU5s4gL47PVhpkcQSbgzbc4cfnM1W4tEY5Ay2qU6ATbyrv9SzRNifGU1RmP6JJj6FgAqS",
  "key9": "5gnuhwdWpfPxX97vWSWQqdWbDDcPtnD1u6mYRdztscC8HVFKT3x9izk67mimDdsmYTu9iMCRYsT8Z5bY66MgiM1y",
  "key10": "6Y1kwrfHQdPDVQmuV7s3bRy3sLt1VTNm7zJmAGQKZNt2JPy3H1Ku8QZr7ivMM3pWFMjJBKo6u89e8Ds3gr3camF",
  "key11": "LEQLhhPKJkSxFzdRhMjMtNFS1k5e8wwSARHMcQfrEjyF1M1VpAHKtK9afntzwfhswa1p9qMUqT9ftJF5wk3mftb",
  "key12": "5cbMZqzukjjLpBAeYFDHoEpHMV8E6EpZVXnp4WGpw9XtVMbx91t9PLv8mT26sxsAPTypApgsQmxJKjPQdvtdYDX6",
  "key13": "2EnmXkwnaheWnAdzaMgiGL8etMPFxsD75hC8pEqq4LVk9SDGGnVouGngnTuHEJumogppg3q6RNqHDuhSypMUKKLo",
  "key14": "2jp2FdEuVo1DYp9LGkYYYZ4okqBNpjvK9nJLtSis1bpRH5gNJvEqDXStU6CbQ1gRXQhUtpaPTi9wkgp3QTqUyuSP",
  "key15": "kuo9r4Pv7AAVTD8uzaSkmcp2P247MkKQ3CnFmo7rrCE2Gu5mKFJ2UBiGgKyYps3GcpmKF192Dzm4H9DWjExPGJU",
  "key16": "ffpE18qNUzR4ePNvrQYP69UcFNLMrf1mV71gMraDz1nnrUkD9Y7famwRp1scfw9NMRs25BS4kxnb8xmfzRGGqA1",
  "key17": "2hW2hygo93vLTg5UgJQA9yuyQQwzbaha9gwEL9CguC8Q4f94RdNuU7aJTVvzofpB4mx9z9fux1eEUGSv7n9L6UKk",
  "key18": "9hMEpWd6mxhxoKjVxiJb5CjwCFV5eZ2XFdJudHmggcQmUjskhvoJw1ymHLvz57SbmGdLUbn2RkFVc51DwYJZ5D5",
  "key19": "w4KCz7p6gYgQ4753uzW3Se137AKUN6DBEyFFveKyNUDmjfWouFCS3pg7MvewYWMs35tdTBsU1zrr5KFgdhMUP8w",
  "key20": "43F3Vx6v7dx8mXsQshxG3wUepQonDcq1eVAzZdQXpDeabT3p9ZaeoffteG5XzXK5BLVySKzc6vLsiKFZyNxsMz1P",
  "key21": "5FzfyNwhq42xEGuZiYDNQApPfFL1hvQXpLXzz8Lyi4TKpW58uiU3g7HkHBTgk3AW3CuZjq6k9shzR29JEAhxep6",
  "key22": "5aSRT2hTyCSGQgtjyAhjC5UQA1FF9uTgkif6MbyeXeCufzPAFzKXC7AVewYnJoYJtqJwQYweYV6tCCXEkH3mTn6r",
  "key23": "21rRy9fkgoBHUvU3HYJpqNbvd1jNjip1Nbkfb8qzEqbEyLhs4yUrdUzdjB2bhdPEwvkSKB63qkaVQhqYUL8LkH4H",
  "key24": "4BowQhqf6Reaqa6xRLyvCizV59WCeYjwqbk7oVptFF5aEvz5L5Rps8CgNjfraLnfCHU1RcwBgwi6ZjMdvkhnjWq5"
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
