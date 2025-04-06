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
    "3rJao5gXW8Hph515zvtTx3WB1YdMvNfufmro3kWrmUqEmpVWgqFQX8Ts57eoAsjYmh5qk41M4g6WEZHt9mtyFbnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fCdYjBpbkWpMr4kZykph86chuMFbGkbvpNi9osa2xheFgStm3FzxBHniPCF1FCvr6hj8hWJ4kHBwi17hoMzvGpF",
  "key1": "5TJS5YwG3h4QoeSQDK9L1oXciBJtLndeYoVvyQfSDfvGvfc9sxj4oEsiwgmEuEsVu9AKBNfJHL4xXSJYvdVRk3o8",
  "key2": "454i6nJeGAzKMonPXmnEytT1X5JsZNxGwsRc5z9fqhdiN3MG7Lf4K59xpNvxpmXdQ186S2s7aVnHttF2M4droJty",
  "key3": "3at5dWdd3gcq369A8aJMVFF5D4ThZ5FCkmAYW1ippcTP4QM3q6m1Vn2MYWBkypnxsGvPrDPxcirhYDXqf9ynjhXU",
  "key4": "598wWHhT7NBayRQC19qpzJnWWpdBL1dvehZT7WrnYZkn4gdsMZnLPfzSoFATC2DQ6APS9pW54XwtLnA2dApPKyDt",
  "key5": "QYvf61nkz8Zq6Xb6jK1CsqpG6UnsczRBwjmrRN8F7NCpMF8CSZaE1WhmrrwR5tPfjej8TNPaS8D2aRo9S6RqdXC",
  "key6": "3dXaXqqbV6AK2M93dJFuACKiTLJyATyMXmogkpeh76CPDXz2oTFfrYJ6ZffdN6DDrRJpzHSzra4MupDA4XrvSErC",
  "key7": "5G8u3aSZX6ZPcuDWhSD6jdxN9gW8ebdrgi8na8QQEqwKLSgi52KJroGLHayPZpwk2yGUW3iJYLHUUEKxNQfEDwf1",
  "key8": "3hMN1dE2PfWFVRVKkDpgjkQEqJ7CLijn78bLovzYin62jcpbAx3Ltsn24aMkxpC63kskxrxEjtktq1Qx71ZpByEP",
  "key9": "3mcrSMaf4n31HcNxD1RXyc4BAK9vEoNbUBFq32FJU7VFw7SNkjcGb5wJaYb61emKWf6W1KK1TYHki7pBYfwD5FWG",
  "key10": "RJz79aZU6Xx6RubsysGQa3EgyD8jCNshhzrc52Gqd4hKp2Sycvoyqo3nXg5yr8iJrwDZiDtSVHtd4iXt7aNWt9n",
  "key11": "4pe5NyxbZHFPoUxcFr7i2r2h5NtjarHkZqTRKytExu6ZfR5ZfyHkSb5BnjaEquhLrdR8sV439v8kGX4HMPUg4u9k",
  "key12": "39bZDWasDyRH1LPnnsm4XHdR9U6UzhqDWMuVm53owDPrCeraNztAWpZ4hXGdLAd7ZZJoG6NRurSZRmN3MsJb5YAJ",
  "key13": "4rqa1dngKYnda6vDMuASG52iSkrvdbwbEek2D9AqdPNGDMLGXniD91isHaccTockeEiU2LYVLAXe94L6jQ7RY6oP",
  "key14": "3Cz1yFdEB62RJRDkWFcoiBwaKfFPmnZPDwshWga1whtWhBdQAtvJD2nhPwJJHtkzwNqzxcsibwQz1UU6tAfBW3fo",
  "key15": "35M3nXUoU5VT2o1p5siawGTXvi79kexhYpcYWGVRAV2UNV7FudB9SCnSxEDD9ACy8VC9UPq6jRQ3Vea113qvdNJ8",
  "key16": "42s6erSDaSdkvAEpPsSBSoydwu2kmJY57vp6ChQPVmkV8RsjAgVDQ9F7j8AM5vsxAazBFFJjW39GCX3bqdWUoqFj",
  "key17": "2H9ur5miRdCqSVBvpd4esvACDYBA6UskwfMiUZxRcs5R8kYQ2NmDjShTWPLv8bMMXb4xYfLXgzUgiZEDKcsMbhqm",
  "key18": "d2nkbyb745oknxzLiJvpQHVWpkReGYHymG7pAyK17zFj6cmW1DX5maCViZPTKNrnLcWqsQ3sARXUpK2YGuaMYTk",
  "key19": "2fMRr7CBgeRCsRD4cmL3yYYcAgyExeiEjnSYewZ6ZMe4BsnqtRwHrs8E3AYLfYt1uvGoXutyghHiYDQ1gK5KbW2t",
  "key20": "9yUEYdsQQocsTtMbdkrhZXXQPzGj9AXU4NgueuocvR6urpM56wM3c4D9nr34U3AQWBiEVunPsCyTnAZKtM7SiqD",
  "key21": "3CqwU5A2LB2Ju2e2xbtDdm3btyZXFXgoJMKk5x3KeWMzaS4GcWF6pVvuyqCpoZWrTfAXocX3XqorkQpDy71rmA62",
  "key22": "8Lf1D23yfxynoSGfwUQtZokNkN5WWt7hUgoVEBL2pddJPydz6Tqs2uxx8fMGXxhVCiu9wcJTwhGMHm1j9mXd8nq",
  "key23": "2XfeYg44MSDozbrfsM5ZXxynajctEqHWKxbNod9QfFYHM8t2JEFZDYCaiK1JJ3qLCXQucyPV82nZwWSHBLGb9HMj",
  "key24": "5nSp6RAYN966xYQzJGqfWzmR3TXqKEmKGz5BHZp7FgDGJxQvKVEJjdpeSgijtp2CTePEZmgLHTzgBtHN4Xqc9Vbq",
  "key25": "2XjriYoQjPN1Eo1cr2k3DA1UAwxziRkViv37Yc2roxnHhTbKEwLWzvSPigCNF2nrFE5X39MLqGcEACB7VRGwtrZN",
  "key26": "2GFrFtYxpGduH1XvBSgJ5mXDV6prWoDZjLpPtsT6Tuuo32fS9iqeoZAyTs6wKz22RY634xdn68GgvNihLxPqBHU6"
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
