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
    "2bszof43iFm7XMYKUvRHcu6M6djf8TgmWiwDoes92PmJ1AkQWXZWvzdHJEdVEsBjJiXd9uzVoL9tnDQbzhweHV37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yAox88HdRZ398XtvaZBQXUn1pRWaE3Yf7hQp4GizeVFKRo8WvN1u6EAWvFy28m35sH5BFuD6qxYW9STHgznkS9a",
  "key1": "32NWK8EXNEwqjtHUiVCNXrJdTRLjKCYAsPhpJEjs9o4G9WpNfdwjFu3kkiMUy4tCwqfeZi249SahaQvxG474dv8o",
  "key2": "4u4MxPTNUZFLioiewNFw44o1vZ19upQQX7pkVcVkv2LKVPAcg6o2hKKmAcjgbDYxw178MdbcrrJHLW3L1SKWmvQb",
  "key3": "g9oJ431AM1jBagBVoE2oP5T3tB4jLCRBr1e8f5BrNXfgEhY6j42q2C7N8ZtzZghTKQK19paosicY1iLRdDCd3Wq",
  "key4": "25npo82m3J8xMSTL4HQwhaT9xMR7YvmXRADT6Ufutnsq1mNMf3vqULCvuCC3Dk7oa8bsFKEsUWuftt3HecDVz9FL",
  "key5": "5hh5CAhnp7EjdC6tQ7m13YXDWCCKB29mRb1WrQqburVZ88PV73JnPJW49z8jAsKwHBqd6toZ6DJQZtwpB1yWb3g",
  "key6": "wYRJC4eJVgoa8SVZEDgGc9sZDFAdXXBR4M3pbEi5dQb58znfLns4tA81eXYJ7HouB1XMbPHeWAXP6B5dnyaheYQ",
  "key7": "5AGfBaoWo8JhEQfEVKzBgV6dv8irgyizg54nomJ5dLrwiYbKtJYvDH3g11SYfsBbce6xdbWii34F1UkPfTX3Lcya",
  "key8": "5LWCMgySoYtgS9b6aB38cDwBgbaoUXQJddqKbFJThV1yxizvxeYBBHu64T5Yv5G1W6H41xkYu1DgM2rjrU5DpvwS",
  "key9": "34vNhcgo5M9NDa6Vad1C5jmhjkccAtMGSR6T2ue8K7svojTa2ZjNUjtR87fJcQQyzFy1xvmM9XQzz5KEyvG42ySx",
  "key10": "2vD8v6gD1wekmindughuYeRpQzPbEx3dwxCshDxoEJZTSi8ztRh3xJbf6CS6rAERdWDKCFAikeVRbGetCvB9RB9n",
  "key11": "2KnRNMjN96RPwBBLCx47MiMt9TcyoJSNXGup9ki2BCtGoSv3PJPWzy3j88mQskASnyst1VstMSFtAWaYF1K6kN7v",
  "key12": "64GNig581NhNTAaxAsdsJ2qzVCMnfNk4XFL1TYWd9zWWQSUY571gAhWmDEn5TxPFqnug15vYt18pokrguatZ5fLb",
  "key13": "4tALAPw4zb3AdpTiZPpNXBqdtZoFqEvp3pPcXCpiEoVKNrDvHv7f8nRwvQLnm5tGw2RUFnnobgYannEk9rRwHD1Z",
  "key14": "91suY4DKiM3WjqWFsU7NaGL7C7LX1HUP4BcTLBsE4Jc9tBNZXKLjKsDczL14y4pkCQRPMxr1tnkua2X72bZ2GQB",
  "key15": "2GQzk6KMiueWvigaoRXSyGA1RP7SrFUxwnmN61f1fKPyfBnmppm4siQPBdAWsmmgTSsFWZGK3mZ74KdTiCtthmwu",
  "key16": "5uzxdktP2AA3UxzeUcdDVcSx8qmMbD5c45P13rtf16rANnAnusuD3vSZpCUiSWUyLCyXJEWEJWYRs89vhDrub8Ws",
  "key17": "MZdnjqbpWz1XH2WfV96sTsDVw5wm6yLLVofA5jbnzbYDozNZLg1Upm2ifuouWrrTeSTZQCZvN9EAuu7rVPmLN2t",
  "key18": "3VqyzJMNsqRVVe5eA6VAEzex6LGUV5EJpdDBwdsQhLRDs8mVX1Gs47ABXPVCMEqEs2Mdo5HJqwotSi7JE1dB76Vc",
  "key19": "65wH8569qFU4EatKDZNdNbFNmsLXiE149i9RFFosPQ6ExTguVLjCvdodJZtGvpfPwcmZuNLiXv8uB6LNi5qvLKXc",
  "key20": "4rBaoiYsmut9GAiMFn4fDcSt9JRr9EJLaFk95c2pDvfJFoFm5suV1h4wpAeRZKJPVZw6aTpMnDgREtfSLPNh2WfL",
  "key21": "KmB5iouxPHZS4FD6zTdyUNSG4KwM8VsJkP7dpNPzFMQaXSBniutJfhgxa5vxLan8sBJ8sykiwXap473SFjbPN26",
  "key22": "434NVdcfBL95p4BSx7veVNURdFVrVXTdpfQeGcJw3iVT3E8z6RUzic4hKVvuCQCHkWeb8A2AJnBSxLJzb9D3BxAL",
  "key23": "2kpdFYQkyJvuHy59DYTUCeTnyPWvzWMGpfsF4oTDhjLSym8Unfas43Wso6f5TszqsRj2WZn2GSiSwN7waUSYqTQ5",
  "key24": "2uGDQgc21WxjomDEJNAGa66kBW8CVkfGtpr8GbzyaRGX3LPFfVDf44FVZci9JN1FZvyHSSVGCtYbftSUQYMJuEjE",
  "key25": "2ScbgsM462LsfCwNdoVmqzJEh7UKu7RZgwWNuxWsshGcst4wzxWcdV1U2JYdZCjMzhUgk3mQd9B8Vy7DP4BMPXh8",
  "key26": "5x6hFyYUJiBTADPmASbKRxQWE2uSCQpMMSip7V3NBHVKjgNq3d2vJFLB2WMPXGyboLWntUJM9Df5fh9Ce5we5vvM",
  "key27": "4acxZMqQzm4XtuNKCiwFu4zdKui6FdAgQzjhociZXCJGGfxxzQGixjGBKdQt3UfKKvW8eNykRhE3E6W13qWrryJ7",
  "key28": "eLvLG6wMKcbZPzPNvFLn657esLNrvxGyMosDVjq6YCm2vs9UBC8t6Rmg2L9tV51RRA4kSfn5veafXVSwadUN4VE",
  "key29": "4vxxWFMhsYeATq9UqPpaWb2QNXL5eBqzrQ2bCdsnSbWeA3zQG5ZXiZDwPNGEPu9Qi8g1kp6C6xRKZVRB5dSFCtBf",
  "key30": "5z32kXjKRSEQ6KcVUxwopMYQJvzYaiarudBaXjvc8gkS7scWWhcVYfC4c1QE1x488SH63EZNj6v2VGAaqVqoE9QK",
  "key31": "2NW1jictqmnWMxQXp5TDEw1gmVTtURKToSQYRWjHPezi9w3bXwT4JtdEu3TnCafddPYM7VmvQtdDAbnkMqoYtJNX",
  "key32": "4YigvoJwCUoD76NXCh9TRkrYLPcPLYfk1EbzRSPLrY4Xr8Bt3czDrN6Tsg4EJuNyTTD89Jiv9u4ng2HohyHUYwyn",
  "key33": "7rMgQbbxFkAy6TWehaHpUtRpQqWqmTRUHmiiHtXQFBaaM5W8Udem3J2DAf7SCQfrCZYNET3FZZBPwiFo7fVMKpB",
  "key34": "4YRsnqWouQXN7VtUHLstGzRHAeAcYnRJY69CCLeajK1gNnU6SKsbLPCD5Da6vV4ZY5gzgHmdgv2kEmiuND5Xwr4o",
  "key35": "5czEpDFeBc9ger2sUWjLbH1JWP17RV6k1r4Vkkm4TndQ46jfnjut146N16QDU82N1aSj8nqdrpxKWmrKsntbgh27",
  "key36": "3wqBH2xBgviSfUqksUdRPBzL1HrHkexz2oNdQmjkRNJRvDkNEWEhFpaC67LAu9QvUxeY4gJfXEFEcCUMcHrxyCQs"
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
