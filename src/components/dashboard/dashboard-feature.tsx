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
    "51iFyXPnoVbCcj9f6yi3GRa8dRXi8YA5FgUKPEe5tCnvqzyS23sSEtTDYfjKp3wvi7x487YcFEP1FAxQoiYobhg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vLfSqE1qi7b4Ly1SsrhgJxK9jF1CQTVTnj91jnqVVpgMLLnjGsopsZXqqa4ttCxtThadSPWhacG4c1dfD3GFZmt",
  "key1": "38JcdoKSfCPGHFX1kmd32y8L31XNb1CEyXx71ZzoAuimjcf18wB9VHAuzhHxXK1Pzb9N6BP1Yp6XTPzVPR71FtF1",
  "key2": "JM9PV68b5VvFzNv5MHsqbbiMDL3LgPntZCWvykFXpWKRVjJGuN6VYe7Ewbz9cu6zecs1w7ncs5iq5deoPSSZ6Dh",
  "key3": "3PpaTrgUzgfmG6gH8q7XCbWqK3iQVMqY7pFaUGvHyfGtwi8NNqbuMV7tfsAPKMov8qYhvgaECPbjAByAM9PyCx67",
  "key4": "4kLgKDDYs4cTTmZ1egD9vu9a6NoHgtTW8F8cGRCsjco8Qqdq2JPy9mKrBmtcKiAmtrbTno1t3z2EEArAW57boPCM",
  "key5": "3WXWm3voy71zisiwWM1rRQPrC6gGGWuwtdZMtQZ5Kbsd5mRX378o81hxQUfUexuRxFM9EVghnsk7CsakLPFHZGUX",
  "key6": "4iHvYqyMkZuG7AHC8P62qjBabRGsHQr5btkSGHNtXEzQzS4GzmahAgf45zBXGzaJE62NUouNJKeNkmGs5nb5r8hH",
  "key7": "4Tifyq91PrDpurwDaP7aw6aRwpRYnNxCeFaaizarAfF7YU4dR9xVuDS4AqRofea58W9Em85xvbTN44UndWgFU3H3",
  "key8": "N9ZTxmH6h9DduKj65Lhjz5jHe4G3fy5A2TSbmChxV8nnQRqnYjVkh48DZJENaCVRiX7n3xnJvMFapGTQGnH98FK",
  "key9": "5aXTqRHUyvAHhfeCpiomkJQp4MRr7Ttt1Cosj8irru8aqp1Avh9FpJuStqy2opXmmKJhWcjtZdtRvLq5s2EB9tvo",
  "key10": "4yktVDoagsEEWVxmFSrfu5i8EhCoSsGPC3krr726aGUndNe2nmVaj9qBkp53FQxt8h7cGR5NhNzVCgvtN1e9CeHC",
  "key11": "bpyLnXtDJ5Ahu85SGaw7dxqeHux4D7MAJcujKF58itqtNxnrgq6Baz9Wzk72DvgnYJeoZ8kUAW2qGd4qcevTuCF",
  "key12": "2pnbD5vH12iSufSn9SjqJvxEBoTpL13tX5jbxFT1DzW9vMDfpaT5BGF4txBH51kweXp4kuo4B9YZqcPLoQ4hTPYk",
  "key13": "5MpcgpY2BA6bPKZ8BE1gbGru5SyVJTSf8Garud3PK4imcEgsYpmyMrSXsY4XtqXPh9RcpBdrNfDeX7wAVVDHrmDy",
  "key14": "8jR3No9TYbyLu9U8ZYX7Fpfcpqm2tsLnB5cNRpFtK8nq9Sj2B1e1dsPsnkPegz6f6ENT7n2qYAoDCHBmkErKqcz",
  "key15": "ycaKzuPaT14TyJLS64DBVn39G3kHSf3uNWxpjUFhPzy1iBn2KjCaKyPSnAjpnJsRH4FDFvfRFtAw2dmgbFLExEa",
  "key16": "4g5seNCE5EqJ1zsbeewtLLazHpCWkksZVYneyCsgapNoebBvBP1EG9QdBz8nSWAZGShmm4Csv8F5kM7x4hV8xUds",
  "key17": "Qj6eeinnJxLjt9u32Bq3vHYntWU7dsrvEpQ4dmMaD6f5jcMgzhFYHbw494Bf2GRHZozMzaqpzRrDvYk4HRLRWhQ",
  "key18": "5eYbmjyHgU7Kwo9renyzmcRBtXuTqA9gdUTFngVZBM1d3x4kSR2ZEsMr4uL9eBgPQoAfX1WGg8SSAhfva5PzSwZp",
  "key19": "3VM11rp6iiM8CDSnjuj8Z5BDD6rY9uNQNZdEHDHTewHzWRzcqXFHRBZjdnQkPRLF3gtDuhCAzdKC1DuZmLJmuPMR",
  "key20": "54JcVDfSd6Mr5Ys5MF5SiFnRunUnAm52WLFXTDCqTUuvTuKXtspcNdv6AXKRtJYmW5n2n2gsTYk6tbCG6Fxpe4o8",
  "key21": "5FfTWTSugo95NyqTnrtrh96Br58HCai4pHf9LRD4b53gEPfj33NxhmG7mQ889sSxtuxVc1HGi1h2xSU9yeL9dSG3",
  "key22": "2U6vN9wdrpyqRMHpoBiG6TxKZR2yUTe6WqEDzTE67sj5oLndcUi5FN5sXi287cPG2rpLuSDAfCBSvdchbdQji4r9",
  "key23": "56Xd1yV8PJ6UshBabRuusai5CVstxJ9cD5P9Kb9hWARJepFKzerGrYMEy1Qc8rF5wo4Jqnc4FMxv74unYjq8egDv",
  "key24": "5GnLGg1mmSHxnyjntsjGpy2HSYYJDfukSUTpjTUbmK5XPkp9HBzYEm59MUJifUA5uUCWTqPwjYnYzLMviLP93Enp",
  "key25": "3d2cG8oKwQeJjP67U7L1P5GJXK6iyqi2eGAY9D4JdusxjsugREEDQ9roKYwAfQhjy1oy7eTAbo3wkDYx35krUG88"
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
