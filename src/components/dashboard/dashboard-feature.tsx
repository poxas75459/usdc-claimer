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
    "3byjZ5T7sLQ6ed4gSBCEjLnSRyi5EeyqeyFL4TbvEPxFbjrLpDUyKMsSp8RLdE2T5HdPn5kcjvGrvMvSyH6YhBmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3faxK44GgwsD1b9uvp6P2Gkuq8YhCWbi7EEQYpjKTCRii48gUyvVS43RFF28Tc6KtGEmpqeR7Qc3KiRuacXuDc9Z",
  "key1": "4th6S6G26w5pwdCH4AuxeeWFTgbajNcxU9TFsrPJikab1BFUbM1SWPNapV5chkSM6GE8UFpbYu3n8Z4tixUVvPkZ",
  "key2": "5Sc4HNxUiqJebjCEaLUcTsfbi7Zc2uSEVbYJdPyvhUHsC4q4VQDyToJBRhUQf5qrbjPofmFFZi6qxx8JG9JmeJFH",
  "key3": "5bZvnytmckBEo2YFjS9BXg2rzEPxp8gm246Wd2ejxTw5K2WfyP1jLXKMcW9HNwtMPWua6rkvVp6EXBU8wkNF6Sdk",
  "key4": "2rS3trA6E7W2Lk3wyfo6LioHhy1fjkorrLWLwNCb3u68BEZbaKQB7YBryq4hs181iiawRin24YDAcqkkuKV2jWUM",
  "key5": "3Rb7WmWeSf6YCX5bR92iuh1CjamvJXnM3Jn9X5nGFh7MRShzYGbnYD6xqTT47TWLWgsqdvfY2LYxHXuUGe3Hjavn",
  "key6": "5Vhoz5fsZdnRhcbqpAQrupfMjP1spmtuKasPnV2JX6quxsLber3pa5j7tkEbMFhBRw7fQKnLovJsXycTwy4Qr6Fe",
  "key7": "593Rt9oGcoV2LkCvrUwns5KiBR8jDeeubPhtjMayHC3Ym8uJg58PLd59Po4vaX3XSh9B3ZgvmQQPERwxtvET4xiv",
  "key8": "611AP1tbsRSVAmn43okEGzHE8VufZj9T1nKmCLERkCkhkFhHGBqW5CWemnDxM5UczSYsSFPwsfbL9AJvJapsNuNd",
  "key9": "3pqTZgckXcb42vZUiXR2hZeYb3mKiJLTqCj5XEPsriMweK66LEJNyn86iZfrvnUGgrR8eZ5Pa12XpEYdSF89k51v",
  "key10": "3SJJ6Tb6n7mjv7dqJAcS6GsVoP3ouQVyxSf6tQxqjJgWan6cHoLfygM5YRwCjgZEx1csxRoSYRDp2CnvvY7c5SHG",
  "key11": "3pTC3pXVPZCgp6g4hKPuADuV3BLmNtNxAhcAEC7Xrb4QmyMtLDnxrSVMGFYHXwBe1Wvo86vsv2hCsyeobJSUBLJ4",
  "key12": "4m8jJLqDh6HNNNvwS6ABE7Wx65kg4QFZ1khZaNMrQ5So3ynnfCBpKcLZjcD5qQiJY7vDNiPQFozHL7HKyc5mYuNk",
  "key13": "5N35vdzBqAj5MYiHEAt3jw66D3ANdmYgjQSbYcC2zJEfwT3MtZPMJbEL8DMaARB7qPL76GhnwYV5wD2zxQoGRv4B",
  "key14": "5GFauBLbrUASazoXCHw5jaMwCVdr6mdxWwaX1aKhwqb7iSwP1aCfgNodzFNye43VrXV6YgDMYqm1spNQ641pPMMh",
  "key15": "4d15Ahj7pVtuX5eBwricPsyLmCoiVnPAd4Y8VnMfgXbJkfw6bRMaRDsViu7NhbvxdaWX4ndNKi1VwW7TkYFyFefY",
  "key16": "d3x2PRN9qHN5gSVApbmH4SPifi7qSUziBWEmxhjNFT8CQADPntuECZAU1VN2vG1LM9XuFyWx1eXhtD4D3SrYKs3",
  "key17": "4bG3CooUsWV9q33BqG7KpDL3pF8oMvDn3YvfNPfgXrp1UPtgfWLRhEFQmQwY5gE3NFeJBXk4FeDqHXJFtneAgEdE",
  "key18": "2whr23QmUeVpikcav5ufAGxBMqFAmBAYJRqX42ybXfRTvwRkzp438jWxewhK53WZbrCbeixTyi1MEtGHXBeQyuFG",
  "key19": "3s5v4iqGpJCcqU71x2ppp3ugTuAeSz7CijFvdWvCqYNQqFqmnsoAr1GcgcFJRxFccjsdsRibb4ahBnT8EzzDjJ53",
  "key20": "3RksTQpFzPVpSZdvC7qJ5RQrnDVtp8WifLCGp5hDmqcCGxG9DVhmW64bwzJ3PpjSDGdaN3uzinz2Wpko5zYmCWHK",
  "key21": "3Nqu1Yd28DibPQ2qUDhB1CSyrHLrww75KzG1t6Kh94JfsJqj3z4CKwpoWJyeUtVN5GSz6axzU2PFA6oLSjU3f4FW",
  "key22": "11DVryb67FC21jfMLvDL3Tef8PBAVjWXtudV74SL9yz2r4n5Pbgi4W9ff7upCswRbyTSdGpp5sWbpmFf1Kuw8xM",
  "key23": "CdGVfZHNfipNr5JNTRRNw5ny8Uy4v9Y97KZ67AU8NPTGmBU5PUrU9Poka2h4yoyBxcg8tcofgWqXrL6RDuWoZMV",
  "key24": "2wNjA4D5EUZnuhN8Jyuei32U4Yht9BiGLhDSQSNQx4Bzqu9jTZXggNzerLeSnCp3ParQvf52q2pwJubnUQuVbiNS"
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
