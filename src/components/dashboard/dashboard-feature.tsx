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
    "44M9UsxqgtUo5vX1Q89Fz9bCjxKz8PU6ZDiYsnXYuoXTS2XQZcojY5uGjRjLqnuzGv2knGMd3DmfNdCVudgCiiy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zGkf7obAELxbXRe2ai1rv3NSJ1aeCA7RjBzfQje23fwepE3NewKehrUx9ebhtYrC1bWdK3HRduQPMfXwmHsX3E6",
  "key1": "5q2p9ZVPMStm26ZeC7dseVVafdiD45KM5FY36U6sx6sAJjgvwU18jGimQVwLNZwFydrLmiKV7Axyv54VnSKzfyTX",
  "key2": "2LTpTdjEwgdR4ykf111h7ZFws6cLSRJ7H1DKSQt3zH993iWCncMp18m47VFf4SVNJBx4msjmuu4msAqrLLap46R",
  "key3": "2Te4Nkq7azWHP4XQ1qvdreGJeDu4WwtH9icoK3b7vFZHi3uFSTXymwWUzzdnu5AmmcXiVuPQGzyiWdwG5GhD5cwt",
  "key4": "WzpFPtX9Xcmd8nc8wTaMnjs9YVN6PdtkJDufJHVVfRVHuVwms249ygcg4D6oyQqoJYRaemi5qdkuUES5mDoKD18",
  "key5": "375aqAT7y9V88A6m2eSUL2hyciMQ3avWQeipCDGmovo6yDZPmMaqyVneT3Wi5E1Fk6SB3wbhP9wbrfTsmwW1KxQ5",
  "key6": "5XLbUxiJq6YN7HSm47GioLupG1VsdBP1AWPeEhCwHk1paVSRYBxNDAPyTwG8sKmg5QexeNqrLrAbNDcUBxQBeMJy",
  "key7": "2sp3pFLGgW9v1Zsd7oBuNYUGLqUFuFJUoiTPxZotdcmQn8C1xJv5zSqGH9vHc3QgxiUh96ni46MP2o79j2AGgeXv",
  "key8": "5TKvrjaxRAEomBtcSRH1JqGgSpsoX3A5SxkLrxu54xNWKMKkiwoBqpzZ79zghGzgsyLMd8bx11T7mviu8LafvkXz",
  "key9": "3UmivHFC251acYJagW13YHXwKxx8itqHECbye1H7gZY1gDofPiSUd9gNY1L497mtoYxC4JBTagEY8mpGzC6dEizv",
  "key10": "2a8KWSB7jgUyWdhmiT7fwrouqn4LmnR8nZhUuVJK5yQWFYHCC4SuyyLmD4qwJKwWv7ddz4fzQmEmt8ocWLV5TDMj",
  "key11": "2kJpXRMnB5MCGRDquBfGVYmcXKDcyeKpMKxAewjv2R4wosTXjPfkiEx8YJAvWcAsHdW2MbqwsGvT8FnG8J3ZKdkJ",
  "key12": "5obhkyMQSi981KMRfPgoUdcjqP6NuLU8iZwqdhBCkrHuEueEmQTxRe4nu7611e8q81beX6aHCk2sZjPn4nMRWyuB",
  "key13": "2kgE4x7BmUhRtiDotqFPLCCRijKyPx4QvgVaAcviTqppFU6XH6MXWGf7tjG25jjCUjs6mCRS8cnbkwDe9rq8eTuR",
  "key14": "4vwQV6wTVedgLMnv66SYnpz88imRfy5Y5mChMtqCvYb1FJHeoQUjFQ6jxq9ZbpRwn5sfvLLPZyLBtSF5qDELHHHQ",
  "key15": "5JhBZBwFVWMwtAfqcfTNpSkiDyKQC4duCL4Yqh1ctAdCBVqiYNoqNuGyFsSYnYsDnvGWQyqrNqK7A4h59gSwusYp",
  "key16": "53FUBEnqxX1Ki6H7gce13sXFE8CSBs6P6wkeV6mAqqhePTxgCkkjjvWojumegADYQM8L3JdwPYf94WHxqTGDJsDy",
  "key17": "5W7ww8DvwFnq7udSb5BhvNbH26BoXwTe29geC83Aadh8MPPZUDcPZcwrVijsty6FqgUjAGPQ3kA9QR9jbrUvyKRa",
  "key18": "4MGytackdFCKWh8Wev4XnA5SCX5oWomvLkTWmhN2w7SK2gTPkdKPYQdiu6wGYcTKPCNshPGW9uwQDF8nKi2pST7F",
  "key19": "4qraKMdBa2i1cmb8s3BXeN8oNmDnWXSjoWwjo2R7U8nTxneLy2gYNXmpNGtrCfFAVAZHpZY81nbx6DCvkjTyTnxg",
  "key20": "4woxXyUhrYzcGA6hhg1aZP1CzcYQ584va8EW3k7UaJAoFqF9346EH1QBqLEJK8HNVHtgp4SN4uCYtzdfLBdfYij3",
  "key21": "xzCgWzx2vSC7BZnJvaq5Dy5PqvJ77avPwQtvt4qVyg7WiPy4M1MJrpu194rMRJZfSKpYK1MuyKZDX5665f4gvkY",
  "key22": "3euYCorBsZFnx6xXSTobpcwsVaQxhoDjMvTVVi4XaFBPYiXxKrVvvzcCC8a6t1duV3zMkGXLoYxV81nWZqQJL1KM",
  "key23": "5xFgLN4u5seG8f6PygDbCYXmbfY1qaV2RCyq9LYSS815V8EK2qtY8E6nL3Z2KTjfVB8unqomHVSJXKPTrxE7zDyi",
  "key24": "x9bCXDvpzPqa25oBSv6LDSpQTHohcZvfusVdihUd2jxCbLG9bzYRCxcpHN5e71sMxNLYiydVNqvJHWZ1mg73K9n",
  "key25": "4JchmMmVy5FDnmAweY78Uyj7EQNXR97dm8FxAonHXYVsStaFUZ1r2ghbhFr23NrYnsZgWpeH5tUc4ssTL72ZB4mQ",
  "key26": "67q73UB2MiSwSGxRBnbipa2fmkDA2xu3kcUQeVvJAPtM84oLoQcdUZf2hF6fuqwr46UkabiKWRfb16wSUmXSgwWq"
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
