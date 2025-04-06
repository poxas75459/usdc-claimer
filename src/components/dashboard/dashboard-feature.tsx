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
    "4t8qi9D2C8wuazmN9dWKnBkASy21weC38NDGtha7sHfgYm7oAgDF5zwGquf4rc9hTFpphu7sTnqNKCsFsqdMY2hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "miUteN652TfxzMfyZsUhEzc5o36xxDQBczfXo2Xb3utmmyherdpTvoPVKrxQETXpi1qMxteUgEb4KDWPp2szr8D",
  "key1": "7KHyK3FM9TzKaLc7j592vJNauJG6i759PNHRXhFH9ELbxjHghvhVnzmnW4T6e36UStRCNjJYcs9hscdvTMJRHY8",
  "key2": "NBWtWMSVXkNVpzvfYneYDJ8y6V6EyqvAjU2Yp5AG8rJQPESJ9e7HpkD8yEjiaUWCMcnVrpyHUQk6JVjpX4m4HGM",
  "key3": "4T9Ruw8n2HWY6MgPhV7GYiTq9S8WACRdTL6DZNhaDM1LFqfNBe85DmSj4JLJe1Gwq9EVDaJfRMLKMVfhog8H8kr7",
  "key4": "4V73mUSCe1zrvMZR9zwHb7M7Nthswgz14bLTZjSyQ2xRyUjywpfkRLtvRwaLCrCw4j54tzRxMSH28dAyuVLXRvMV",
  "key5": "MSSewY6UHRbL6BR73oscsSdimZGiYXtToLTfhvtvydzGMDzX8TSq98Mqs8Q9MAoFrqTGjVtRbdtpnpat53sQbvG",
  "key6": "64s5TiNpctXKRF29nYgL1Qs6AfQbkhyynNiMiFMCXNJ4A5rmdJX8sYQFCj4cgofJN1dx3e8sMNUNVHUZZXT6eatL",
  "key7": "4bYEb8EAw5dG4cAmKcrCuvJWvBBaE7wEXSR3zwtWfNrFc47eVasnqoPnTBCuCReQ1Js9kgcfEQamPofaKu1vUYW3",
  "key8": "4GhteqKiHpEPnpWPHK8ETmr3G6Kt21nDDSNL4P7G4AiLqbdi7PGp1FAYRyw5h5eWm3CJXejhR7BhYtx8BMA4MpbH",
  "key9": "4ad99L8AeWYZQVjTNUkbjHMz3WFKaLWSb2r5RTv4K9MrVQbjCzj2aJPc1BbDJknBXyHeTirYEKwU6Q6VJcpJHVxY",
  "key10": "4y4zrprRxKcBsLdY1Cs7FrpporzG1QQxRFCpDUzsYkHr6zYUmDwP6ERdsx1DBz5yKu8vAvtMyfBkMfETQ676B8CS",
  "key11": "2VdbrM3t1j3MRU28aihASXf8iueJG33MuCCmKTc5d4ibD2xyX2JPxMiSYSJ77Eci5qej6M2jfSZsoNiLnCiAM9MP",
  "key12": "4QZPvGSJ1PSoybeT2rVNvz3Vz83bUQSZHTYMPNtbkzfsEDcY7VafjFahez2X5W9tYZkSwk8UQb9S6nmkcoAZW4r6",
  "key13": "QvsRMwxhPSfEjRimTjg4ZCnVu6z9WeSZwavAD8zEgFgwbc6S8mTWAtNKGRGTCg1DbCWS8iKGJA4ufsApnWfecjH",
  "key14": "4W12ZnNp3n6CRyTmxY6LVZEa9VomVmqEamJ2qkn7Uxa7FoBaZH5TkrTHfqXDjfnatgWAfDkno3dqiCiUhRdzYyBN",
  "key15": "3v56gkdsY1xP4JbvkT3HNHqKpaYZaybzZpughQPRSh6y9ZmkwDZKUAn3b95SJ9Nsqm6Zi6bwAt7CocqnG9egy82y",
  "key16": "5weSrj38iBL6KJdaJs9QsyC2PwrFj7GjLEL7J37Hu8bRLtptTFyUXZXdE78LN4HZYCU98QtHPPnmF4i9T54ZeJPs",
  "key17": "4rHZ9F1tyPqcywJ8mbwtVhtJ7cvqvxHQMwAepnjNgyDMvP9HtnJayT4YTQsHo75t79vZFoo5oJsHB6gfmCZ1d9v",
  "key18": "5s3bzbQ2o43YhyYutPVsWEJ8aJHvN9JhPLr9zC21xHdg2eUC1RRWqA3QvSx1cAAGjbCEiUQ1Nt49LncyQJb63aQk",
  "key19": "4smT7V2Xah5Bj4sz72pnycchHFq2idU5oh8wWr71PqQf77ZNrVW6VyiJi2MUh9acXhW4bm4uFNDu6uxnx5QRYmnr",
  "key20": "5Wevyd8CxWE3JF3stjW2C9i1nna5cyi8YD1JT1SK1mtdwPFd1tCcLS6JZtR3ksfbp6aKAJY3WLVQN9uTwJEkJcuW",
  "key21": "SXvdEYgxqf9BgKQ2fFau2EaE8r9b8ZBRgnoCH7XnLp7RrViaZ1xHwxBypEsfDQr3FzEqww368yotDVqwsHgdqxn",
  "key22": "JukDH8EHfHCztKq3e7TAT1n7FTcXRGaMcjYhLqS9ENtnmFyzuWZXVep6Rta44VTeWVe5wftZ31F7ky6tmceSf63",
  "key23": "xrXsQK4PmppHsL4hgtkHdqBq7rbGsH1ALqw2hANGmkZE1r7HU68DBjFUFkoz4q7GwcCLZwUz75RYo7SimMds7fY",
  "key24": "5XvULatMhioR8TEqH7T8445T4Q17kuLoYxbHn93WjwXaMYntSGGByGq9dchDC5hT36REDvQYrVfxZfEQvoTgecdN",
  "key25": "3TBrH7UNapyGZuqiasv6bbiKjGEX54FfJoDyJTqZeKEF9g7xzipCYyiXdJvbZReCAtksm6xb9rYK8pk48Cc97J1o",
  "key26": "2F4R2zYmpaAA3oyFYkA5damzkFY3h7k9izQGkVwxg65R3NYQtsdHe1vzQEirtP548pFVdjhQQphDLCtC2SMc1Xwo",
  "key27": "3KJSpoknM8yEmQxPgrEmaeDP83jaQ9SbZJnqmKpwjyZP53zwxFEqEpxMr5YYCGZdPnuogPQ3wD6RVJbtNjYfjdDw",
  "key28": "4uNpaDZb9kTy7TStwbCsfSZ7feKJRN3T2teemSJu1tU6nmFD7QgLnnDi7nVAazBtgGwidzcH3dorDBb8S1iHt8wk",
  "key29": "2vMoi9uLzsQZvLUt7jJKsdXxk3MLxqbm2V51eiM6KKfy9sF9ASALFRwN5RJ6CZYniEdwJRqe51ML3GDBS7waQcVi",
  "key30": "awEThrQaZyyHEis7BEd1Vf3K9vA8qFi2LQoPQyjCNEMhWMpKazA4kGJvQoHix56X7gVK4ShocqitRvqFFvapbkE",
  "key31": "4HAqZGvPzvZWTPb4rwViLQMMupA3m4Bn3xDxH5REaKhMe1tF7Rq5jKVxpiTAP9B7QUfmoxZJUrV7HoKALAapvumT",
  "key32": "4LH517w6cdScesBDuKMnkw7cPyexXpmTgF1mEuHaqN7qAvZFU17PTL5pW74yQQAdEKxXAVbMqBhCEqAXz7ctZjbC"
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
