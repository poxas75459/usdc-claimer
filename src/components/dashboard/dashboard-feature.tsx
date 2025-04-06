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
    "4NWDnAf887PHdgj1YJtP45gt8XWhDwiae67z1peN496qH3ZWgXncBP3WRjykA9A1XxKzV9Vp7ASzLrHrLZ3cV91A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2JVNFYtdVCCwoxSzynzoRdGoNzh5M4FXqBqtN61EV3xqYh5PierkokGvkgviqMdk2AHnecA6ikKYSFNh8aBFKx",
  "key1": "45m5rx5AP8F6Pb6qT45D7n982rwyGvzAPNn8f8MVVxeywckrxwwEtort3kBmiJsTPxFUtUFkz9jdC9RsqfBVYRaq",
  "key2": "2tnH2tVuyCh9xZqDK7ekLJexLVc7NzWapD9t9nvW2wf2VeJ8p25qxCkHaAK5E7SRbgXfQSx9oxPqUS963mY4ueJ4",
  "key3": "31MyCbZkGhfvUE1casxo8bGezUVghVJMhxGHhdEugnthbsBaWws4T7ZyQUYqp1NSAfaNdi6avFnD4smRQdQpba21",
  "key4": "2meDQ4oZPTNHtrVodF82451mGHvMKSAXHe3Sbvyj8ep11sGCuoBm694JCAGzgPuro2Rir8rFpuNxTjZmC5P4D64q",
  "key5": "4WjKKAFfJpNUp2ouX5G6DQJRnFzUUKvABH4tMs1tkVWx2h7c27jHKW1gqj7auT1G3XmB2gUiCpJRDnCDvgXzCw4A",
  "key6": "uhhD2rLeyXRPCyjF9vaPRk7KLvkrbpbEKyFLk8hQGWNbUyebksnp9JjU67f9sjC9ASovBn3SH8Eru1oiddTzLBX",
  "key7": "5UViXjWhv2T9MJH3ugkViQMg4trTBDYhCYR766ieVcE7H9t5jaYH4JpJeY5FfjSrY7CwBvcD5BiswHr15GKsQVw8",
  "key8": "2miTvsMpiX1BZvH9bNe2MRWQtHTkK4JFnDp7XrtdNUNX4oSyNuMdqcYjqtGHAmSm9FunNcXmtm9aoPFja5dfQf6C",
  "key9": "2m7mQQU51rqmGb7DZAsPEcpCNXDDLbbsxQqDukEjVoX8uPVSvsdBkzq5mEbxh5eSLKi78b7uYxDShinGEQmAzr7t",
  "key10": "4ebY6xeh5EuQCLpywtNP2mnvFF56qvTDfirn9HhcuMd1mrM8G75xMQkbkvokzrWrKyUgEbdL55aw6ADxZbW2FCiR",
  "key11": "4yZNuEx5f7oNFte51A9aemSxWrxmPUSQBuY11qYEfQyVntskbwCpZHkTifGMLL3Tqtm1QVrv4MxzWokSPziYTwMV",
  "key12": "37LK74cMH2QX2x5WVKUA2fuu7mdaPTVUCTYeSiPNfmPyAKQEthvCScEccNEDeNchm7F3uGiiYj4cxTmrYyJe7GSW",
  "key13": "3AAWMizjArjoniiWP2StPKHKf7t3VZsgDRhjTjKH1paczA6eiWKsBCjZiazNgdRqt4WNiCF3yUxtefGY4yg8V5vX",
  "key14": "4zUEtraiGwdVKNMS93Vtq7bKt8XPT7449CJ1MdVMHZLfUYx6wDv5wBv12i25MsEaUeA1FfLUpuaE92aUanwo5sSM",
  "key15": "2JPASGsAMjSKxPKnd6QGdjh1eWn9ikXeMpNpLjjoy9TQoUQAzuBNWdexf86VstWT7tuM5k4ta8J4iUsPVJPW3oNE",
  "key16": "36WnrwyEW8iRD2Z1D51rjdSm7nTcK6dDR8vRY5KYRTVa8YjR3gc6hVc569FeKtEN7mZpp5SJoVy4NBug6Fj4ZNAX",
  "key17": "2AQatBeqQkQXfLPKZ8RsrBo4ANSHpxHFXt17Mtfi14ZxpERx9axJSVyKTrgNUL561BAjPDk6G4eUGSptxoDnQo6F",
  "key18": "5Epg5zt6rECJSUgdhfJk61Z24HAJgiyTWtT1FWF6xg3rtEFA2eSWh1ShA1XqpVeAdUSxn2jqpopBTzr1q4pK7FuX",
  "key19": "4RrNZhebfCEGYgvTjrSJ6gAAMUS3mRLG1nXC9KwTRPvChmW1kZsHu2GbxBCFbnTdjj7SpvAfLAwYgeXTeztAFoxz",
  "key20": "3wbcpr3U6MWLJbUvGFNXoEjA27oiGMf31jjkv7GMrmQHq5JWf434e9XCiwjH6Ayc4iqG1r3nBjxbkpkUqfjihYRj",
  "key21": "zqooFTwckNJ3gy8AgWKuUzJZNYYdfDdfxL3P28vhS5RLCthZcnEygxFnc3SjSmM4zHpGL2UW6s4biC8qz9miNmL",
  "key22": "YWtgJLttpKGt5zf27dWD77KJBMTv7Rf5VXCdYQSVvG5fnWxwNndtJShe2K81PUN8KYWuz7QGZphaKW9kxyDMW3j",
  "key23": "2UNh4t4s4TkenHMPDgZaDmjm2mZbif36F9ivZ9Zs9nfRQf2ASnACWKJX5pKzVgE5sWzoHVboLvxF8AbDNCNdUkQy",
  "key24": "3m7LV11H94cDYKGz98Y1b8RL6V58K93Kx4jVvWTz2GweEwZB6BiEn5vzapmoiGwAC46znbBCtybXk2WcFHZejYVF",
  "key25": "28MsVJYDncHs1RwrF8BfvfDqHCCy268Vx5AcH4W6jmhnnrGdzAQ8ejPdZqcy6TnaTQrkAV4K1SDctRbjmKiPLjpF"
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
