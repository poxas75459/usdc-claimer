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
    "4KhVkuT9EcmKfrJ6QWLRFk2Cxm8DiVaUbzgdyeoxhPq9jHJDrpecvQcPhRCUGS9rQhDNo7nYWq56StdHfefsWpqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfY1qRkEiN9aNycs9NSTbaGR29HP8WwqbJG4Xu3PcXsBe4BhG2dtYKzLfBtesUQye8ZLDtvf3V2CeWswemj3ZgT",
  "key1": "3XgEXP2oVxgQUH6Ye5M7nTbwDYAnBG8ABwPkMAyvfwTfHtr7q2MsrD9Gm9oZUtdYXtJt5xwiM4zzmiBk4NYAXejY",
  "key2": "58b7kEaGrBk2iirVi84N8srg8a1WL25hdnK1NCZogPHCHGm4DUetUMBkiNdeV7peACkycXAK8q5yjXBWQANYojTo",
  "key3": "5uhviz1aUitdSMvnc2WYsEn29FXUyh4r3pbMCgyi4Y6CCkJXL3aRUbwecRnAfkEgWoeNo1tcdx8z7o8MYU95hPk1",
  "key4": "2kX1dgqLtpFaqGWAiiXht8sZVkeKzdg1avzES3o7vcbABPwoSjSokJfdgCrKACVkxu6eTHjqnCZK6vKc5mBhWuHQ",
  "key5": "33HN69xaWA7gnhGSMGWa6d1LncmdVdjMLXMzwsFGNYp7aHjR6aT2rSCjLD5kF8feUNDSD4K571YdZ1XrKkYTKC8F",
  "key6": "yC5dqf21bqwt6KQK3TAXdhH2BvbgwWKUqdpAVHadUDPsmzdcXVeVXF5B7XGhnpMjfKFRvtm98kmDVdGzPQ6V4Ww",
  "key7": "29K2b5py3H9jFjdWdHGdah7Ruqj2VEAu91Sw9B3X78WbF6VQGcPDsGoFztrTYy4jky2vhMGdk79SgPhuJZ3cXNE6",
  "key8": "58fPHvMJaiQwKUGWhrvbSu9R1QYrCHMhRiLZVUp7Yf6WJbH4X5tSwhSCR9sCiLBUAW8gVCFMHaad8tLNuN9Bnuz9",
  "key9": "5LLUtHdK2d4iCf8VkHRSwZbAMpyUTdddRVmfhKJxESFErne17EbrjQi1QBkASoJiedQwm7a9bnWzqej7s2kVLdxu",
  "key10": "2FoUVnakCScYX467md7NSdNnipbbRbg5gdb532V8g6XijWLR9jwFjq8vJ6K8Y3RBcZdU1R6r8jVHPFYi7DRKSR4x",
  "key11": "5CUyyL4xZDokKccGxhHTCAsWFKaRnFJBVfUNY1KqRXRX4Jbfe9QtMKtMsk44EFvBEuKszcy989fPPZnbZVfV6E9P",
  "key12": "HBWGYC9KRh9WcshQurnniAp5BzJmqtysbAvjHC49WXQ7qpS6xjNVe47ovxzTtMKv6mLowNATQr1j5XQpjNVcEmF",
  "key13": "np3MZVSVePWKL2B9MT7GqYaz7cYm4yea2nCkz8Ru6K46YeXKqmPzUiWxNoDan7KrCnDo3fokPgbdZG13hriKsQn",
  "key14": "3Bu4FDZhDUbP1GeUzQLiZhzSeQTKS3iaKbMVi9jYDai3uJMbbDftQKtn93J9nzhf9LEEMDPHCZYHAA5DaLMA8tuD",
  "key15": "3B4Jte1TfKKQDbCLMFScMX2hZ45tjE2YvxmzfV5tHXhiZHADPuQynTbvRRzqkXMezX8imYU2YtscxiKozFfazTjF",
  "key16": "2CkrUE6qHDVe1i13aXsX5skuoRP8CL93wJqKqNRKfJ8N3GRin7kyQ4rP1jMDYHrZ3SNbgYR3MJAr8WRoABePajUy",
  "key17": "4WgmkpQ1N4qXt4WV3zGQBCRLNHq9TNmiipKe8CeWauEibsh9E7cbd4cd8hivN1eebUDkE4Ev4TMspiAeUbLrba4W",
  "key18": "25QKnDLXiBN8ywRj1Z7m46tSYDo9kDiZYDN66qkjYU8j2qP6XmmtYNVq572556px1thmwyCLGnxtpkViGXFEtEpH",
  "key19": "21b6KWCnXxcjjrtRAC4xKcqSKryRC2J8a9fM6ox4nJpqLPnYAFjY9EJpxzwGALejfQwVPs7amixLshmqDxTMrRYo",
  "key20": "iF8ugppjzFMqFdkZrwLNZNemRa3xUy5829vTVwQnnM3J8w7kUCvRmVVPiwTbgB6hW5KNVa4oJchP1YQ2uuWQzYE",
  "key21": "493kUrBd8Vg5UHAgSdd6nbNhM9MDJ31eXZYpGBsgmhZDfFuKDcApPhErqvgCcb3EiUQWh8X6WYwHLFbi3CV5t6pF",
  "key22": "4ieWQAReimkDwrqPUzRTGMeYZJhNctB1req6wcZZ7rfdh6oAzwdb19J4KUwaRLcNcttVABfcAFGb3chnVLueh5vg",
  "key23": "4BMmGjcPXJNC9QGwnKrHVt8KqGzVSEDxkPR5CPsyd2Hwou2SGEfHkFeonKzSF4yF4M1YKfJrjJgKALMzW4DGQ8e4",
  "key24": "2NhLeWY1BY68Bc8f63N85M86eenoPCJ9wqwJoj9Kz21ooAW6kG4YCqh8FugSXXcuowaDZV6p3JtDVVtS3dcwgH5r",
  "key25": "3REWBsfWkUCNjWDtErYMXTQqVLU3BAwf3t4cRWVXW1PJLjFwJfDQsW2YmtG3Gi66tPL5kyiFC6cQn8AZK2RwLoDc",
  "key26": "4JDK7ZXfuJ5LMBf2XxgN6gLpe2ruzASN9ZzM1E7SN4Srz7A5uwVM8o7dsjy5ErpG81FAgo14z7NPFyC1rMqLXYWw",
  "key27": "5i2BB1s5uby1F8SEu7SSzHU83gt4imRJix6WiXdgVHgnXVfPDRRuLu71FhMD7D37kL4VCiPwoFteVQDk9nvZ5Xqv",
  "key28": "3qc7SKWRVofbaT2C5HoAmjYi76j8w7X7mPApfPboDgan3rJsRhcat79vdL8dFDny4868cZNU5E11pHknt88Y2xKa",
  "key29": "rHEKsNsRzqeyza9TFJWu69R9uupdwSbPpxssJoVixCC6tTxDg6V9oxSgcHpN7fX5HTP1kjrBTgwU6WfG1A28omG"
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
