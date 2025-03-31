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
    "3szynZKUbcahzGUcot49VVdpQ8UUkSkRKGCyNKKUj439s2boGJYQtwM7u6PaENxqfg5REU5tpP97FqWHdcUi3WML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aD6rpvxZtMuCXgVCFigG9pByCtEq5WhEe9XJGxfu6QfWF3UyVyRqR4T8gLXHteQq2aaZwHmsrKrFx33i5acTxep",
  "key1": "2XZwiw54kKeW1PbiTnMbYnvrCU3Rjbtq9xA4NR7J5igNZ3Mon7YYALMidYtjA4bhpBeY6YXrKKXVGN9TjGcLkXdE",
  "key2": "23N4Lh2tGUbCQXsTtM78qLcYJyJWQv1zrHCfcjBxsKEtZpCvmXfeQ649YXkFhisinAaFGXwKB1yG1uSCBc1CF2Se",
  "key3": "44bqggghghAHGFC5iMdrqMkmcde2ZK26rGrcix18aCsEiy6ARNeQA5MuhsdRDVScZkREs8YoKzDGg9fqNh7C69bX",
  "key4": "2mUCyG39XdKohGTbw4J6swZPdiwzbWJB3JMavYcmP6JEtn1guEnQKRzWRkGze1sjFoDHzi5jNx2mUUCbTLxYAyC8",
  "key5": "3TjtEJqDSEAM7mZhia3zZqdHeSBYJFrJMvFMEMbpUEBCBGbEnpF52VSsnty57xoLZBiX4VzQTVNSTF3uyuS1iZqs",
  "key6": "2QbD2KF1pS57NKXGAFjz3fRwBoyt1S7J4dyAsGL3euGuLzdBbKTxYaUC5AZiafGqh15J2YfmC9SzPtdYJ1EC1DFf",
  "key7": "u2m6KYkrxgEpr8nbCKGNfJJcEgPs4t3MDk3CjwT9LxbBaZy7Hr3XH7BKQ6LgPFpPkg4tvff2qKV6quk1gUkG233",
  "key8": "5dA7n7HC5YaqE58ejwX21UyZpYbRBr22YzSkQuPJfnTRtQ4N8pqdd3Mrz7qo2R24r39yrcjRRQeXyE6yVL1LkFLN",
  "key9": "4uFqV6TCUCSfdUdmQrUXkBW5A8Zt4mvoGT3R8zLDuzZUjykuwENx1oqZmyCTtMnHtqKGYteo2KLyeqx9pkkkMhwt",
  "key10": "pRHftTuPo3JdWpK1rw53T4pL216r8rQGQA1ru4fCwMgxL3vroRW3ze9aGnGFZ8pWVqPd7NbWx3u5M4avxNDRGFd",
  "key11": "5cVmdc4hcBbF4xCPh8UH61CgzPr2ouotb5kPpWPCKx5rTAf6a1ycC1iMpdmn1zt3Y8hFTjzXGCeh88CMaUVFCHpS",
  "key12": "4rN311Jz72tn2N97Dp1LU7Az1wKUZh843sJxzhWJjsxXeR9TCvPJevrw5kjDWs4DiA4UQusMNBGNcoQncNAKrbzp",
  "key13": "2jQb1AazJWZjbH6htfUMrUw9LS8hnnSoU6XL6emNXxem7grnQAdZJcqXJxhfgtip4cL1wd8Zb32VqYERziP17iZZ",
  "key14": "3nYBpRJ7E5aZ8BZqc9V2o5faxVDm5SE3Ad282XDaaqCxCqcFVmChNRQKpWFuLXV7tTvcAVGjXoAFf5MmUQ4wuvw8",
  "key15": "3s4TE6j3e2yarTaJqo7pVDQhrzHkiDKeDeeJyFCnpLsWwcevvaA8bRdm3e7p6Ud8neXmHF2WHDsp4cGwJJStARHa",
  "key16": "51wRpYXszXq2zw484bJq8ytDTgEY148zebk1JnyejjWFaCL8Ji3p3Wi7u4q5RdhrWMWDXiXhyhWEGQHNyw5jv6QC",
  "key17": "49fBKiDZ1pmcdRfNyfbmb6Yr7tVYydbsyZBP9FQQUDksAenNPbs6EG5dVpFzNFPceeBXgdmhCHDssUnv8dcaDui7",
  "key18": "PTBCLmaPZ8gLpVSxxVRq2MR4Tq7ye8eGqud7zqNZHDUhgwaaTCkhrcXNqjsbPc3iDCMUB4qp2jWEhZ7N3nyCMDw",
  "key19": "mCTVaBe6aookfLbxfXaVZXFhajAwMWYvefDV71bixnrxpaQWvtT3J42GLQdKTpvqAkurC2Xe5VnHsq2fQnKpsBu",
  "key20": "3HEtQ6p99hiN7B7fQyhrMY4yJW6yn8saqUM65okgKDERQMF2KteZpEKd6xMqNJaMUruF8wbKDFWjMr9W22hkdvwv",
  "key21": "sNw6W25BsmwUeMS65EjQvLVZMQK24PieTfUDWRTAMZ7Dxj56oT2otWRoRkTBAnsrvhFeXbw3uHQ2niywPQFJWMc",
  "key22": "4VF1pD7eDiBHCeuCMGzXkXhY53rcW56c5G39cynQo6FkBQC66eYtj65rMSvdR4EN5Ervju1FB1STJJJayCM6RRBu",
  "key23": "5PcygLm5Rpw5z1xtVbeY1BnjtL6JmFYe1qmjukuRF5q9p3zFbUcAD2gAurryiGFoNjt5yq9nysHCo5oJJTDjtB44",
  "key24": "2BfPnsEJSKNZME9e8LXkeeSdXdyFeUrpYu1s5n1ensXAZbesYyW1eyM9YNd7NC6k8Rmko5jmfdqx7Rox6gzcm9X1",
  "key25": "4DFPUscPLbgMqVnZURZfznm6gQEiUtBTVfKdzNeSVX7Q5MKAvLPd8vDwAEmf9oq7VZ5wokqRKicEAu259bhiofXJ",
  "key26": "XofKTU9vsKxHA36treYohv8ShswBb2Gp29FDJSqAF2dCda6k16tD9dVCePvfPrtXzzHSTPagqs3bA5Uejjwm1Q7",
  "key27": "48pVqJDH239ozwb8Rrv4WCv2JjpwyTQw6UAtsyMaf3iesfgTzL8zMwffyP8ZNX9pMU2WcjMx2VCsTWdZuBrN16o1",
  "key28": "5rdn8SV9HncuCP6Wg29hbyo8B44cPF9GCrUrtajN6dmsduxnNUbyDKCRD9kWpDd4toeFKAFtmyD7gKdgioG447XT",
  "key29": "5D4eejD1h1arPSLnTi6XznF5GmXqYibZJmTQE2TX5vbBsGYaKyQc7ezX9aaviqaMPw6U5RsCMAcs6YhH9vmBWC2H",
  "key30": "3xiQBXMVzZxLiU9V88Qjeh558J8xgWGvb6j9NQBmn4dA4V786fPDYVyyV9mPVoNUpXjRKG97FZgSoCrRxeS95MYq",
  "key31": "64hPfugsDmvPGW4xLiMAuKtANApJ2uSHzNeFRLdkk1nY2m8SwZvPkbGbDRBAux331onrpgT9HhjkxtxcHe7bQEJj",
  "key32": "4oZ2WasjR7TJ7ErqkzheTSWyy1SWnQTDwzVDKKUoSQPJB6WuGHBEfSUqTbN8u1U89tBXkG4skvWX4ftD8oTn1vUE"
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
