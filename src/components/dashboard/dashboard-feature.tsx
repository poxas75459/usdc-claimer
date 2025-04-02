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
    "2LQUfJJvSBSYaQ7jYKWEi7x9xvxtTUW9UuKyvES4ctzw3TSHxuz7kbi5wSuS1LsMMyNsavvup92t5LgnNLQ1r4ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BX1ytVr7GAKT26gyamggAbgLwqdeSjXyqppxMeVrfcTuazDMSvNNLnLE1TSMkVBZ2yjPb93McSGAYB89f8WsXrU",
  "key1": "3NPivECLfqmZn6fJ5n2J6fAXPzwvXcWotZSaYy2W2kyoLa3KJTFFmvxg6L4R7KTMCmceMeH3QADJms1hsNjzFmpn",
  "key2": "5PDQDSiPS9kgP8BbEsHGyu8Jz8FoK89xzAYnhB6QfKPTBR9p597MKo3EJeXN1dsiFKF8i517wiqbLGDZyZiisxus",
  "key3": "3WsgydDXdLysNktiodPxLvKnYC3SQwTnTbtFwg2jfQg5fM5X1298rciswgzq1irg8vQAfCSp4fu9JGjdKQEby7eJ",
  "key4": "2qSeenJYU2XzKiZZzSGAMvEUj1CojGE7M9KRGKn2XHC1xDi42oGgexigUrwKpbhv4E6bEVH5CMveQJkgHR4rRN1s",
  "key5": "3C5NVwuAGMpuPD72y1tz5fitiRTLSPMDmCGTurggrKLhFnu8frzyXBtaftFXCCHR9LoaYszoUG6gCg2Msz87k1nv",
  "key6": "3tmw41BBZ1E44HDhFL6SBDQrRDsomaarC9QaPZCrnjft5b9B5B1fctEnJcejv9Ukbji8XeJiYJ3ZqYHsKo9RaGsS",
  "key7": "5YjN23XxKmJ16V5cmC89CThUgYrkioaVApCgcVTFfNM6rk7eiqyM3thck3xvUf1RRvqsQEJzie7v5Cjs2WZNQmVE",
  "key8": "4xFNSHcx6rT1iSr1jJ6SNjsKHJ2xzx9tprWryzApzHCo75ti9dhLzA7dtzFWCLsu69W57opA2snQw5xNWwGszKpR",
  "key9": "4Uy8jJWiWh2iuNKX2f4a1UuLcAbdm453bbfjtgUU5tWmkYiJVpT3FqUMztBq9JLyP5Lkb5bDqGsQv9nDFCn4SmaK",
  "key10": "52pL7pQ2N5q9ks4Lzk4KmroAky5X6weciG9SRLVYnfU8PLPMQ3CsEHGRrkguvnjYrSePg44SKFTrZL8wpTxGdAYt",
  "key11": "4n2pGJxGFstoW9Z9AgSCkrTp7NkvssEUx5A1d2p4aj9ggHZXeTcTRSQ9Usx65keJiu6awL4ZaETuHQvCQjPoTsKm",
  "key12": "47su3RFF7XByKKR3LZwW4pbFUqGqRWU6hGu8sacVuW7FaLvk3uctYKf6qBnjixRH4DZ12nLfqBu1esHme9kxmQ46",
  "key13": "2mJ4qjWSNhhtVEF7CVGLuDb5rG83Ypj77uAyfP8BpLo58VfBCLWDuEP4mdWSYhitkhKpZtLr1e1UuCbK1WpPT9wE",
  "key14": "2ZSb8tSFRepu4oi9iL5SGGTfLn2juoYWCBXM7vjeakcQcqH6wSQNdhJSHAhjHBvSDeKa4GzC5b1gznmPojK7rebL",
  "key15": "AZcwPvhpQ8AYEU8K2mYTcurJvVmcQj7B8Y8xjuhhdZsGHSG5qSAJVEXPVQTV2VWS6JSjpKvev6ma5BESkbC2QPW",
  "key16": "5S68XfXyhK94Tz26NRFnk626ZcyJoiNoVFsjrgoSjjHbMBgkQWr8JDy8ZHrGgvhQeiX4tpf8YwTpwmnq8mnDNw4k",
  "key17": "411Usyu1mYyeKRwVPLahdRmDrTysjXu2VQvS1fiSceHUbZ4itsziUhfRtqqvLvo7YfYj1E1QKw35Ex7rR4pzq918",
  "key18": "25L6iyK53Dxwoh95tLqcYjpxzKvKvMjax7w4SwkuyZCZBvXwDjCQnMR763hPwQA8RCwb79m1uHPx6ofKKb792L6T",
  "key19": "62h6BMvwTjtQkMiAEKNLqy6oWQ6z7gXKvjqDaavzDdrQv7d7B27GGxDgPf8ZtCN814VTBKAvggFhkqNVDimpfWwy",
  "key20": "3hZUNZngvYPxFCSgJFcqNJVqu1Qv3tpykuGEyLeXBXa6UnuLXWKKpeELdyRjGxtTHqVWznxGFGyMrJACjcVh93qt",
  "key21": "3zysFU7ZM66mUdXGMfUAQDKyni5nEDsZ9QkSjMQnspPNRq1g25z3up2Gubv3tVjFDmyr8kczHGjdDrxb5ja69a4X",
  "key22": "TdAijuvcdRNJSJbks2KJWmtRJAMRz7C99HyyGkCQx5nYDarpUWMFJwBsegSaJ9DnFvVddmLVM4v8x8tSCNMCCi1",
  "key23": "5BhdttVBjLF687yb2pK7vJZMzk1anutcXRMmeBHDvDg1dpgKpm5HqxweiBDNBx1y9eBwHvU6seyag8kRz4vj8i5V",
  "key24": "5Ani3b8X4R3VNgoeLTiv5PNhLdKYWa8FU6aikFmuHr9qgMQEVLGvpZymrMqBxEd47DyHp12yHmRU5rwkexYf9pes",
  "key25": "5wr4ikYpD2ZGKXkdJxYcZwX8BydUtGdaXHaJZz8pkCgWMu4BDE22caTVaeCcWGFme1gmGGwMsqKfubQbrgTX5Fzk"
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
