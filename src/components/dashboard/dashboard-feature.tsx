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
    "3oeKBf3q47Kh1fKnYAjTLz4y2UWr7CfHdFfRyvMtqhUCcbBTDHxj8SSgn5ZPvikP31E1D5fDVasgrY4LCFndy5zZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngHxaiAP1W2zpMjZjzMqQPijmFNHwQ5CEzbTuz4cN8HYEuauvZHWJ4VXMTsPXWggyCSrkdD1GX8Jr97C2LbzR5K",
  "key1": "2Ut8Vy86p9uyKT4hjS8yvVBD6m6jrohKuAMgFkSXDZuWKa6UPJpEcmQDzgJcbHf8e56tEw7NHQ1jmD6ZWxgph7CY",
  "key2": "4YQfCngiN7DhyN9GHys8MPmvVK89pF6JwGFuUMokptagP8aW5qDyyMZscmPNsSokZwGG2GPCeodw2NvFLf3PAxv8",
  "key3": "QVnZEXbwDB5Twtaspcm79Ai86M8fkHnuPH49b9Fta5EsiJdyuWqKt7sxKtTYoQr8MWrWcaB2GuDurQ1o8kpSAYa",
  "key4": "2Z3RGeKWkYenmZsLkJb4q2Qwj6Gd7yF4kGcSBmdvR8Zp9hm57HAppH26DtHQgpvh6eLbdqKyu2zxmKNK4xsf5N2Y",
  "key5": "tqkgv6gZZWQPWfJXvRme95vKskJvR1nYNLjzxiaQo3wDbesqxToNAg9iwWEp6nMY46DJBRqXq7wPHqFsdMNqu9a",
  "key6": "FwfpWyPEJYjo2wWyzTZZjQjkPQNSAXwecBuMTZfjUzku1xQWgTiECnX5o7WMzLboJEqbUcrZGvdGGRMnM14Kijf",
  "key7": "3pP97dUxkQwqg2knEMGH95GRiJrsnytEmZmcR2orPYuwa5EEwK1tf2V93nKgRvbERPLnzbNjBNgQgu8W18jMRhe9",
  "key8": "4a8Wa7Rwyj63Pw5tkFU1sWCYznLQhLTcBJRcVzbWWrhue6Kgbt4XXiQE94NXPvz4dkZM2SeXh5Y2L42MaR2px7wn",
  "key9": "24ss1och3WWcwcVVn6tvKntzL2Sp1wzUxEZ7yG4nDd7F4TweBuQWPZXqrdrahvpJ5nEPVzvkqSrZxTTvTmAhJmzE",
  "key10": "2umWLyYdN7BTD77epFEyJnywcJwCmuy5ofYoxby2sSQ8T2LMcXPBXuQRj1bDjmwYj9LTzFbAG8XP8P1UTPYcjNys",
  "key11": "5sHjg8ogpdf5C5zHf94nE25NtD6v4s3g5qsu44mCzLxRrprdQzWtEwPHXP2CrDatnTS1Vq93wR4BA7bTSVhbo2re",
  "key12": "2YFKJAAgK9JZvoZvkZjmWwUNkAkoApMTaRS2DyFK4oSyLJsiihyYSmfXouvfaYiSWLixD4c58wMXT6foiM1KP2Bd",
  "key13": "29oP1dCzJeVgoHvH5Pm5HXJ8zVBdtrAp3dexMRfwyhfwW6mexa33phyP2YjqzxEEywKgoGq5eu6RV4EKb889d1YX",
  "key14": "jtMcomvokaHcbQTPw1SeLyPGx8NATEk343TBfU7yLZkFLYPAkTQummEfwK6HmevhBqFHVZvT7WFQwCYgyGFUBQV",
  "key15": "3NNq6JdDYtXkMP4tNxja1CtCooxfqiJ6esjsbW4SyfqbFpXhZ2Pksnq2KhJvDznYEtyfPTHdNNS4v8xynSUXNVYW",
  "key16": "3hgcQoeyGiPywn6xrf5QWnnt6YqFPpFw7KURszbCjqjJBLrGbQc9AgmCJQEAgJh7auXLbueyav338YnztyxoVQGD",
  "key17": "veYTQUF3R6A2YZHaK1wM6gDQ3T4qsvFi8RNrbZCAgBoVDaSpC8JsQ5m1dVjxfjhpKXhA1YtqV4cCJhcvjbFDMAN",
  "key18": "4qDbMLHDYeFFS5sm1USYSMQjQqBNn9GZ5y8m87ozv7wtXnW7KoyRM9pSEm92mxAFMUjJcjjPMZapD5z2CePmkzSr",
  "key19": "4ECJmCzL4nyay2ns51Qp2oExSDxE21bLVKjsMtoiRxogv1aesn3RvGvzUWAF3uRcXEKwbH2vT9mEWXPfnDuz3FAg",
  "key20": "4nfLAjoA3MFjpKTRR1qH4Ak8WTjg6ecBmgDiwufLaVEUWJSFWJtVAv7wKEH2GfjuUrUjGaL5zpkYAcVFtBpeLPfv",
  "key21": "3ij2FeKTSRmY3iCL3XP8S3Y16nB5pJgZLCKRnzxrPZPrK2FzLCHQCQd7GheSUHsMZdgCWHoL4qd9bw9uHLH3sqWH",
  "key22": "3gr41GDbAkikdhdf9ZYqSTUXxrRwvGHqQ14FY6pHNzg4k6iMTAVuRxcpF6fjAy6o3E6qhzMGTGvJAJqEKKkcKn6K",
  "key23": "6SZWj7rHu5WiGLLjV5UZBiZMNAeLCZkCBKh5dssevfF1MxJWJXHUFs35Yg1uEah31S714tSbH24JwskgnuRp1hr",
  "key24": "3BWXcMpUA1m6WdzcPF9YUFMUjtA2b5daerCDykWQ1N3cCaNFh4CCvoDG1Xb7ep8JSzkepaUSuUPr4TSUiGjabn5s",
  "key25": "5xvk4wf8Emsj6gsSvNN2XrYtnzCUXMAVg41RqBqkWw6TDy59Qpto29dSRPkuWPUch4gnErvj89GZf4tnA9R1ju3j",
  "key26": "3sUepJVhCt3wVonPNowrreSpSaDDK1TBiqYdZccD8it7kNktMRLXdAcEMZVRnYNzAJKsdtujgByiLh6ipbCYT9SM",
  "key27": "2oVnmDFbR9wpQxbaaYjCGZv4aLRcHFT76MFetxGhbKrqjecVhcYC5uFzt6PrfmvJToi6zeKpKNR3D4not9mcLuLS",
  "key28": "5B6hQG8MK8hiPSqvP1SHeCf7gP9eJG6A4Mp8pGNXejuxwpZN1ahfVj4H1dEPkNt6yscgoHR3oJY1TAqaHpAkrkgK",
  "key29": "64hM9PnfTpHVb69fujyEkb9PtDnSSNySfivPE4W9c29ZzckZasFvzPj6BMsDVcpbpgwVpmKa9ZAV7gNX7JDD1pmu",
  "key30": "3476ojNHD9e9ZjQiXX5YkMLNfFJddboNvzJkm2q31K3AYbFc5xZbhmHSpzmwd54jbSaMwxmMCC79phCczCDjLGVM",
  "key31": "2L65tidfkH2398pjWeYrzMcF6Y8bYubXLbcs9CrzsRdMQcTy5d2mta8sUujsgkUvbnb81rBxxmC26ok7JzwvtoEo"
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
