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
    "241aaFk8SztsVc1mkeJL4uFAZP9LCeRUFZnPNCoKdQhCFfySt4x2rn49MWG43BPC5ozA8nmni7M9dQUMtK5LCbWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29fGDCZJX934iNtxfnRj18XWQFQXp4DgUG97nw3FV6GJkqziEzxDUxXK3t8qgWiB3yBdbTquho6rhEVpDhjt1npT",
  "key1": "64nNdm4Nxq75ehTVtP6sGATnKbpYMHnuFhW5t7xHhi4cRmf3UrMzPgMvizbGqTysBtjrLTfaduUCF42Dpq4DozoE",
  "key2": "47JLLmPhuM31oNJ87a9UZeny6v2pmmMcZYMnmcT5A6dK4sNeCRZeF2m4ffaa3gFa2ikPXHikL9YzbGPm8S7J2Zuq",
  "key3": "oehj9awtdMWP3Ca654YpvVwZr6gWfvgnKPguwwLLiozYqLersQAgDc9J8ruZX1XD55RxGdeJF41FBznXi6MmWn1",
  "key4": "4cs18uNWcZa3n2UqgfcesJj2Bpn379pPXJwKyWR8x7taHMk6qrEiaMiK2pujurLK3y8xvWtFE3gkJWgs4apyVKJd",
  "key5": "4WDtX4b1wd7jLQcCCjyc3ZWZiyBR45gq45cAhvRkWkgzDUj7mxbDgrzHKX4uR4dT8wYvTKENeNRZbakxdCZsXey1",
  "key6": "3hksb2tmhtMPC1tQLot9RqVnWWDgYZCNCo6Grz92tuZxXzkMGhtPxMUrsAQtVFcWudxavzeviiD1XA7HieGQRZwk",
  "key7": "3v6m5oJjL3SbnbmwqE83nmspnYCAAquBXxTXf1mvuTmT9cdxwtHNPqemQKcwi341paVgtvWmgTMMCpyYqM1gxFX3",
  "key8": "5BLsoxKkt1APZXgUwLpru8xX2sLMazZ5AbznPu8XqGpwaGcnY4FoQNW84Ekn2496hJZ8TPjCRpNLCE2m8fnHPJc4",
  "key9": "4rzFQASFkn4LTMvAacf3rooXd5ENuaBExYKPhrqq9UHHH98RVWD5z1Ee6SsHwh4fboZWm6oYP7NV9idniYtiXcQZ",
  "key10": "2LsMyAsWGXSjQ4qPX1j2muAKF2coYDtUobwVntRrxGsVGEBxEqT2t3ErddxV4ANmoaKCv8QCthBRCSjkajgK7cg6",
  "key11": "2FCSiFysp5gLGqtd2mGrRA5rqTWbw1cbCADbRoXdYnezNZ9zeP6mYs5XiPGVTmw81w6i98vyEyrChpaHVQA7nmNq",
  "key12": "5PS3AvNxdWypbRe7DmZpJ5FVydnN3JE3AgEed3S2h3nQmDR8MRXEwgTtw8jVc4gWfPa9rMLjFUXeGVisSiReBuDT",
  "key13": "2kzn5gW4TaVM3kzRxs299H5dZManL4ArQvHcgBruKv3zjzp2kpZoswc5XcNQWtrXm3sQPQFB1uGRRxhPD951Tggb",
  "key14": "5NL68hVGtPGPDHKWhHrEdYc7363MG7gX5jcBPp4ZwcRf4RdiBE4C5DfwkgKtShAnR3J3gUSdat1m8TAt5oAnPwho",
  "key15": "3f2RuRdw1DywYZ9uAem84FZNVqxaK6GR3MRqWoCyPz61B8zj7m4KUUQEDSHjmWLMCfvuG1YTBVZLjvSVg3DTcpVW",
  "key16": "3uvA544k3f32nS5vezcgcKJ52jf7zRCSL3nCSSsMeq1wo7zZox4eYpYGEkXDQrDR3PLaUMqPiQ9e1iExJMcpx1T8",
  "key17": "4jAKtfM1GCxfqsWe3R9B6HutZvK3uVeMYTkQ7X3MRsvhshjvzB6FHFf3Lhk1kvgUafTmMV5JNUK3qhzW3XVCg3bn",
  "key18": "4jhXj4G4dCXUTEyTw4n9KojVXNg6HK1jGvnyCbgdLGpKdrs7ZkrMhbY1fZZQeKBLBmzQgfChN3DEyMgsj9WGjynJ",
  "key19": "3mrEMt5tTXYouroW6fsqZMyaBWv7QgQ7RcKMjRjBj9LMf5WHJS3th1nKX7SsrjQN7UsouejHjAgmN4GrRiBWoLut",
  "key20": "2dsYD5xed4Fs5VEAPCdG8PeJVunXthbytGKUA9xkfc1cznve4hD1TQ2BhmjKsHEYmWFCTER63pg8mmJoj9UpTVXo",
  "key21": "28vkNuS2ug7CUFxLos7mL1queRCzoxnkYMGwyBYBRLDwwWMYLZ8fNkoXKaYq2hT6KF3w6qhQ5rTcpP5z6dWoGjbP",
  "key22": "2ejTJAD6PnbTNucXTh8KuJaRg7pMNzZoTbtBfJvEGUR8FNDSupsmwBkz56DfMoRzKYbQEyohk5RC9hgLA7mWqqy7",
  "key23": "41JcR3pQp6zXdAY7PrxWugh3wEJ9KNc15wACQmeiQKTJzab6Aa6yP5ggiHa3Gz4YGcmbpCJwkvmTJuegKh4fE6MC",
  "key24": "4ZTwynmzpp76WTdVrkiB4awiKEhrR6YuWywe7J8AYQoUVNJ83yJFQGJ2uyX3h8qiZeQVckiY9YXxfAnVmeS1eL9C",
  "key25": "4L1r5BYE41HgsWYzsY6KYEmyWDtVX7mZxaDjWWeZCCfpJAvr5Rzv13uiR9sJ97bH7yfh8Q9deiCCj63KqCSeu3TZ",
  "key26": "2U6MjzBAUboGexe559hE7e1hMwXFx74nDpNjQLjqh5typb7C6mS4TSooo8pSCXqqpnpgZi4GNCHQ9HGNhsc7VHFE",
  "key27": "4FdH18zsTXdyA4sAMy4g4dC7RTsgypnWqW4ZnyuhNMDJkwNW13TJ3qhrxSTWeDpGV96NqPDKu11hfRjte2KrwtVA",
  "key28": "xM33tvpawkY2snXdH7h8w6YkVeyjGiuwgdnhPKPSZi8KhFWozXnaUTiFcxP1fAkUdcqk72kp6dBb6mnUNHNYr9D",
  "key29": "29ciUbH2mWFcnwT7vwdZby8XHkd41NvQEMRAtG6ouRxxfkQPo1kchgMQrtWyZLx7V7LBqioANcUoJXMLQH5tC8mE",
  "key30": "4pyxJZCp3wU7ey3ob44znoAGYCcLBVXvzKEL1DCi3QqHqcrp4m94XTvZ48QTtfu6EcbmoS8VTBB8fcU32WXoxTn4",
  "key31": "59NrJLj5KC4L6A2rTiYAqSdHve9hmKENKuJZ8dkVt8kR744hc2BRFf9WAVjRWL7FNdLNU1za3fia88YEuXhFh7Sf",
  "key32": "5wK1dxZBmGmN6AnHU61JuwayQhm6fhBaxBqmUaY89URKFRxe93H6k92os1yyvsrqensidb5ETZLCY8sduTdttoNw",
  "key33": "5uSGvw4edPVjqvR8wTNqcPvpuCb7JAsK4idtyLA4aLaD6aRPvpQy7FN3KnSfRcrqa3uyA8VC94MiV5kqvFyRHfXf",
  "key34": "5gPhtYgwHQCdDSkewMrLSfcpNmE9b1qEFQuMtnfTPuhVoWFj6iR3JxxhLXR7xudGbfnQCtD15ZWKVQp6AYtMN4b1",
  "key35": "4wZaffQFd3hmEkXyc1vbZ58ZiGqgW5A2qsf246K23ARQcZdJztbJNGwv4zdrqDZrAbYLswmKP5KNnKNQYq86bNS1",
  "key36": "56HxfDubk8mdTBWqJNdaeR7SPBNAuxLtprc4h9SRrGErCwyy2uNJbcHie4QJbvVDcd2oHdr5xWd4idBzWehX45ke",
  "key37": "MZ5BSsdm34N351WCTkX31LjbtGs11KDkirzHvK6U6pftgL1D87XmpYfFsadnBhDAh5fUGvbMGJM9nhJx5czqHv7",
  "key38": "5HeSnfYxqaegSH7DQx1VFXgxoa2PB1DRkYEx6RFL5KNLdasrR6k2YyxiJpNBAeoBaRB8RxAAGu2d9pBGQmRVP5X9",
  "key39": "5h5K7kLgYDwj7BzFYR2DUdjYKtGpGHa1vq2hMeQeU6U7dnxQF4yAkttGT2ZiY6Vt4ADvwdz7Q9YbFY1tLWTc7m9U",
  "key40": "32uzMX3sJtchNgqEx3TavNUfMXNjYMSAJgRVxDCfxRFjn9jF3ELXtcmj7U4RWKVbxnXoZUh6iqLcpThsNkAYUnUX",
  "key41": "2JQoxFFKk5FH7d3jMw8hBRQb1H4c9KSk5fRY8fQEV1s4NLeP9bRLBPbYnZRfEQ9RbHoLZVBHBWw7DCNXcSKa8poC",
  "key42": "63FGi2ZnbaJ5JNewoNaubWq2TxVwiCamSgGDCPBdMecPBtTMpAjKTbTKrKVTexYgB9bJ9hLWbGdSxuDfv9hcZ1T",
  "key43": "457hvJYxxAKKQtJmcrv5E2SrrFDAqAYBJfRZQBYjSo6rLMYcxg1REJW9Bdnn8dFafKW45iy3sB1ec34Tb1s5Jh7D",
  "key44": "2hjdnsXciyQ7ACjBLYf8WkXQK6jE6M3EyoQz1rV5uF9QG3H9SxpWGPsTJQSRNXK4K3crUuhAXNivm4d5KGxJR2e1",
  "key45": "5Ap6xTooN3y1t6UynaaVUAdonEDMLdysSTG8ThVU8WhAFvLBT8yGjZGdDZmPUjnGCC1CJpqTVRWAFYwAE6oSU51Y",
  "key46": "3L6kesswvf7HDmxqnmnhXJXsawQ7zAHF6zvqr3xFN7zFV1Un9i456ektZBdSCsvrZ9QKHgvb4jggFnUibGcgogmZ",
  "key47": "r5fTPB2eU2H5TygChgpmBP2fLCkB3hAFxdq5fbqGMyLoKAcDcxxBdUiHGAH6xUKxX43jEhp5sTRBbqEYPqB2zJ3"
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
