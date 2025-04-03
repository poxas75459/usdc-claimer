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
    "5V54xAzjKxsMfcCTChMNpEFEAF2ESxfGFnWMsK2v87tiSmugSsYZgi7gLb47xN1t4LzNQxFdC8taaist9iVgHua4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRnwxBDtuEwAV4t6A4SjHfxW15GJ2Y3PDFhnBacWbDYkPCEbwqoUaqMtuFSgVWDAkCjaxLX1hFqHPgS33WEgNzW",
  "key1": "2u7EVjRXB1iHXWhGuy1Pvfi7MUPjrW6P4KqhgSVRS1t35bY9q5LkjcPq6ES12n3B9nmk3yiY6gbSYeB6GRmY6bvo",
  "key2": "JutVBmCudx92m1xdXYSBSjXhhKGy16Qfncwsr4KyZAagviA3rnmZjXkmkX8xXGJ4naLBw2PaGpoQKykNQaVPJJ8",
  "key3": "pKUZg18Z6cTwBjckqpLsywFN2Me3KMAQj39N2twKrA67AW5t5kVLreSGt2UbL2KSQa1m12zRz4v7iX9ZoVeUqH5",
  "key4": "4aHv6fxuvYNYvvAYnZfvKFS4HZjagwa7NaeeVG9PiutauDwKmccr11A9svr1F6nNDGEQywwGD4F91Z1hyKCXHQLL",
  "key5": "46ctABYuXCz5JqUM32oyYm9RUjo4MM2WhpX938E33hqr3TAwRs1FKcCGLhtBQQTLhJtgBCegYUhNSFgqRisowkMW",
  "key6": "4Fzhx3uT1ThwduMfDS5SxWZgR8r394iX5YHcjvnXfJTvuFca8X7zGbk393taThz3rueGxRrkVRzQgVHWofACNeDz",
  "key7": "3ZQ69A8ovdgt62LCw3zDxCaiNDEZAH5CPH7gSG76e4PD7dKMuQxTSBhmGp1knNBBpYL1UgeGzQvuSxhmyk91osXC",
  "key8": "ZAdGwZL4xYcJrSKWD8Ty6JFiGQGnNLuoVj5ViHvUu78VVFgYdoa6BsJegRsyFbLkdD27yZr8cWsSTi3ypJFpxnh",
  "key9": "3kezzfLQHwKNVArNPVthMxynHFgJ9thLnWiXhMA3feyu7u6VDyvGQHHWQzYNVGrXtnmeH8EJmMbn2zQ5Ln9fPP4F",
  "key10": "2SFeswtBiwt8EDsBgpXuzf6xRDmhLnqU1yGw1sVNHyZAZ5mBnnXkydhzx7vUw81Qzw7XAJeTxjST4AHGuByDpqH4",
  "key11": "2sFzP53788mGYhbb7CDpWXRPzP1ahXcs2ATq37bTQYG5ehhYuZRuaAJV2mR3D7xiLaeN6V4uzLNC8FHGAMPt5L2c",
  "key12": "frUXKTS1J7iYUXouy8P1wLmbtMmt2sp34TeG68j2JYTVkev6NyrmNCYmzZgokitYMFigs2SRcfokSZCemmQFiLQ",
  "key13": "QT3yEJDoo61vWPXTP4Xp4ACKWLRXXQ2qGoUsUPFsTovKwCoXCFLUiyK5gCCJmTpNFJUeoVpvHYDD4JwPeWQnCyn",
  "key14": "5VaFoRnrTnhadF4k1EYnY7ABNJoDdPB6XABPUhRr6Kzxs7DPSGhHZwDpZbHkiu5Zf5mxT8a7x3Y6XkuRMGXAoRN3",
  "key15": "16sDbgqYhz6uWKk32fTGsXQcKkxELkL9XcC4t9vxQ1LUKVgM2gBD11qcYGVb7kyGrsde7v2epzZzVMDjLk9QGC8",
  "key16": "36WgLJpDaUsNy3q9VkbPJKBroyTHxNXYWfHWSMxJtJB3FJ6KR2uG4y3Wogmghrx6voohNDeNBJJDykE4ssEG7gWT",
  "key17": "5zyeoSjvnsiXz1uGbn3M1YqffgpjGXE6g3KA68WCWYDRXPFdr3QZRyGJ8pZgTo3XhxieL3RBwtV1215coQhu9NvM",
  "key18": "232vqHqbWAAfW7K8VQCytrCywyAGvHcrd62qgDsqTz1ZJqWyn6J5y4hBXkWBzAaXwh7fUSbCrusf8xdckjt2AYjE",
  "key19": "3VTLUeEVxWzJaZ9ucAbJZYmwq5jYGVzi7pQebZpGdvNRFajM8G8GCRnsE9gcVDnBgr3j8eSjm4c6LdFuMmxB6Zs2",
  "key20": "3QPzZuaBiALyNVcBuC4KRaAFMGMBMSDM5RaLsZuf3a7yW9jHbqwTynaUS5sMuQs41pWeoFtHemkortJBJSZZQPYC",
  "key21": "3DYJHCPbPayW31YngZL8ZGUZujWDoLt74KCBRbVDshC1dUwVM3yWfTw8rzKu3WgTUHn8cnWHAqy2VGaVtoGEVdmp",
  "key22": "2S6CPsedHLkRxaBxcJvK23oETUyYcniVysgkzkAspXWs5SiuuWf2NaMmSteDzvpEoVcDUjTV3jYKebKZw1bz38DZ",
  "key23": "2fEbJbvWpwtrPegUWbUeVTm5k2PQWijmBTAw2YAo5Ryh1nwgt1RF3YDdYkJvA5dx52uKj3VPaKnc48KBtJMr9dWd",
  "key24": "2dLLtf9fBPigMQiomCq9qnxkdXwrmGKVPJ3dvNpcRpaK6kMj8ncFGxkakE31TDRGTVuJkMrNnvcEoswjp2H7KNZ6",
  "key25": "2uBfobhhSQ4UkhHrhZNou821BLA5X7sWGzsqyk4VCeeF5ZgB7CJRG9pHXfqZgzGWyjMFr7VPCEsR8PRb5PXtJcEX",
  "key26": "5RYChpHiwpkEEivc1dc6ZeJY52pRooENZWPKnqjg8wwmFTxGPHuFmpqyrZY3mWkJRxRAWhkWKdnQJ2PsCTRxjf2u",
  "key27": "2AycafowPnB35AhYHfeEiMwsEujN3xVvoWnLpCpkMTukRsyYNkZVF9VnnLtbS1zdT1KeQE7qittzpjt527H59dai",
  "key28": "2s9s4tJbqJEFnaagRgwUatrvabVSMVVeipRfSi3grzpegpLXLovLehCyAQnaAWp6BVJoR3AczyzRRWhFK1NPu2L4",
  "key29": "2Zqo4iDQpkrYwCpYcVUcHteu48HUL6674f3J1WtnZMAhJiRXrU55tLwjx1zcNimjAJgAS2pAv1uRAmkEDuPJaP5d",
  "key30": "5trPH46h3unngzayMp36a4A7A4Z1v8nY6ZeL7A9d7N3qga4jnUxJJuNchtXD3M5zEDRJzXGnGabuJWG5zjvNAFse",
  "key31": "64zwWbQv1KaAnJW9QZ5bbuy9jR1CyiNEjFXTC8zNXECMw3JzEcgwPef5EgPXezNrePiHy8a9RgcoDWHWHzL2Xg9N",
  "key32": "2KnS49o9BWmbqtoFXQeMNWx9kZJDvktM9wGBgWZYSC8ioL4f24Zfrrp2uKaAo8KUiBRmJ3m7q7TyqXspnLHNQEsx",
  "key33": "5aXsizfHdLE8XGn1WjPdbzej48KuFGUmPdJJYLpRFbydZoZr3EffWSt6jZKBpwemZ8gCbkba7uFPPeFscRcWU7yR",
  "key34": "2ELnumL8Jt1UHJomrgHgYsP2t9fcZYR6vChaV7zfMR3a1Kbr8nw34REJCoEdbgphCrzv3ejy6uWSp5nrEE7rUytE",
  "key35": "3My6pGk8eMqTwHx5paanrRao6BkVk7C9SUUD9qBWXDdP9zGRBd74uQNLddsZYMHUXqfoQq9nvrTeEFMiZJXg4Dkj",
  "key36": "GFLGh9tiYY1QuZpxkAtuq1fYBTBxKHBCFAvRvtRZiyFv3DgorJFVk9R6RBYTh9v6LGhUbG5z6HzuXaNBXyBteDr",
  "key37": "4DponrViD9yGTSvXdXmVisQEjrsurxB32AEneyycgtMmo1TMd9fQ9T6i4Tig2jV6aCkoeZfKrYUJ1vuYhym28PMK",
  "key38": "52NoXfrw8c9rsn6yN5hBfRBhxuaFkQ63bamLwyhakeaZWPY6e35UaHeLD4aaJv74hS7Kzy5NwyA14fJfKwHb2EGd",
  "key39": "37RsgKuEPLCSFMzUNu9Zp7hvk8S2p2eNGUNY4afcYVEEcvjJmC3HYgoNYnwWEVyckAJpvcj6NzPYnDSnCJdcnVrT",
  "key40": "3vySsKTaRvBX6QeEwFrWujYAKjTbQ39mUHc8Z96r3M4gRTCdMpygo1M9ZsfUCHEEXjP2mTaWPF2qzpCz5RifbKxx",
  "key41": "2ZrdXCME1kE7MpRSu5zJ18c139scEoNnScw1eA4KraxbzpmHoUJyJYtSHnxZAW6iUemFfEuexQuJb8Ay9bodLG4h",
  "key42": "4iAcQwN3SkmLqY6Y54VB3TtvUPrm7q7VAA4bXcimX59qyEjFEPzogHGbWxZXbNmk4Xzo9yXZUT9CPr6f2raaye4f"
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
