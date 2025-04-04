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
    "8tpuHcVUwMkAUUcraxoKbDLytqiZzWJWv7zSRVMsXagLdWYToP5StJgvvFHyDDmxFvzgVPk4EUGUHPreFhRgs1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHm95zZRhx7nFJUBAYwY2Jbo7gLq1Ap6PeYsHFr3WfQf22bCuigAB9RAn9rmwYP4VSUv8VFRFecBCGKNi1u4hwq",
  "key1": "4TYBGMSWSuhCU9GGSkkbg9Rcjpc4zJ1cSsLYaSy8wEbvW1c9tQqEHYLQ6JUVRbC7iEjhcPtB8rSt7dmUMmsYoes3",
  "key2": "5DmGdsZt8iJcMb5s2A1T8dpf4MPqszX3ntRHLdYDCADcn1YjGYHFnYiNexyDnqMZ1dssn1FKa6oqRPx3jEgmoy4N",
  "key3": "37Phj6Gg8FCt9oDeVKPHK8kXVmpYcb5izvCybiUgHAvN6CUJAk2H3nRjZ7HA1f6Z7nLTcVGXz4ujrATWsf7NikuG",
  "key4": "4Wk2ht56ytW2wGNHE7m3NXYnbiG1HUvFgktv6YDpRDLzQPHnTxcrt5nAEsdzjpvyourDWqZr9EMw3tXFAZbyQSCC",
  "key5": "uJg2XxvudWnRPKrWWnrhhrp2PmMRXBWfKqZG5ZVeifpeiwy8RmyS2LLfPvcmmCTBLteu8PtaJKkJfy5zdoyXQ2B",
  "key6": "5B4bcZ6wZUw7pNccXzvpWBVWosNLS9ZJVuRF2dSwgpqu23VKkhZCGozjY4rnhAY9xSKuG6JPGMy9gpJ3anmCQfoA",
  "key7": "56dcQPwjigHpye37LaNkh7U6P3pDtwqoawDSMj4c6yb8SwrzhC1wtW2cLd5SKwjSnaKca2Mcq6JY127C7LRkXW5y",
  "key8": "3YmdRAvC3yVkrkB7acaNUAL4vg4TJhGiovgAHdDstWMFPdby84wUfJUgDtN1YpFVBq6KNthT87MbWBzjvgaxRaN5",
  "key9": "3FiKEDhiRFtGUKre63tzFBABXiBguduHspYiKvrXjNet4JPmsgbein8tbRGsyd5R3r18xJ2768EAuK2KHxMeMxBa",
  "key10": "2SjC4yDUXxKd6799LNCgmju5Min921ENv65WtYFCWm98uni458RaipXvhHGvV8GkHU3RLVeBoiJh4Ers8Zgw8eEv",
  "key11": "2eGuJRbCQ1yXmNrkUqsQczGMQW3fd59Whdg9sCR2gCTufAaFsRwg6txWRymMB3iuCK1RMkBHMBQFxuakdWW457pm",
  "key12": "21iLGCdbH76YpEwNShvj9kpEfzNiKoVwF7PLu25JqxVapjzJ4hvr7wbA4Yp1CgexFnKyikfiDT5sR8zEfP4fjRS2",
  "key13": "3ePXudUKtGYvowHaQyLDNVY4xXJ8QR9pzhAfprncyeyTAMHnJV14WzcGkCSEUbmzr8JVTMLWcvZANDKSaf5GyxbA",
  "key14": "338JRxarkX1i8N8taq1DkAUtMwTxvRTpjdi4XRz8oMdXzQDrJY5TLNJWjHJSpdWKFDo9PjDgzdFcTS7Yo81npExP",
  "key15": "4y4mo9nGBTsbENzaoxEWnJHJt3q5HazmVAnRZuDVH4ey8n9RWibaA8ADQQk2aBD7rEccvothLpEzzS8R9fAqMSUq",
  "key16": "w7XwNdWVvLczC8b9VMqAKmXqT8fP4hFYXhodz53GT7imzFuTyNiR7kqqoMfSeuj6eNT7vtzKwBy6uSKjzfFUd67",
  "key17": "22Sp7Qr7nBGG1fgWPrUikPF4uDtCJ48dfieEnstzd31t6TeLzaun1UBJCsn48p8wd7QAhHX13iEAenYY2gcxPvTb",
  "key18": "3JS5PG2NYCzMmdisfBYVgKtgmTFAvwJDuju6yJFop88KdYMjXLP6ZhweoyHQWVtTxfCMUF4vjz6mGNSNC1FXZsH",
  "key19": "4cghJtTN3qrboYjaATeFzF47z7Y6jtMsU3L9SySqmdNzse5vQxykaLkwueb5i9mQNqYAYyiv29QBLkpChDTn5bUH",
  "key20": "3tbmFqVqYR2oSgD8zFc7ajRSnVchGUAdsajuDFHvU74Fnar427eYw5icuhdZeHvGSZzW2dEFsH5XG6RPhjKLh49c",
  "key21": "46y9xHaFR8MRu93jLNYVTu3NEYCuwkBbTeBKP16egUJEr94UsmHhuvR8HQbMeEMq8dEh2MFGGmG1qUdkfpxL6EwH",
  "key22": "2x4cAS9dEuk9sq6rLhUiMPKj8aoQqJpL9PthHZmTv47brjVhH5hEBTbM1nu3xUrjQ8qr2zjbLx4LefQNEsTVReU4",
  "key23": "5qZeBUdQ7KAWcE68svgqXXuSji9XWLEpzK5ymZPU3uCUBqbt4SJTLssjYdVr7mw3qqZ13THhnJsVWuiKpTtZbka3",
  "key24": "SWSXicD5WaCWmrT6yhs7VC6E8TC5mRnJ3Ks97W8FUJch2RRZJLKDyRw64BFbZEhc6ygKdmgi4n2X4WNbuFwH1z4",
  "key25": "3y8kwVi3KFsLvyjieV84XxPSMaAVjjwaTe8gFFQNkDZwoE71CRnrcCuBsd8U6w69e3QASTzntmbzxoiR8z5RQfAB",
  "key26": "WMdkjTuaD4VrrzTFwodDgAUPfz8AjTa3Gd1wJeutUFppTjabynN6PHm1PJSTAKAroFr8SXZoQWbUngvGnFqiYvQ"
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
