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
    "3q8wxkYJfsqiv4jGrz5y6qC5FQxcVypmPhF5Wgg8H2tpDsSZPzcG1gUgbPQdJ3UiXj9gZ34Wy7545NqT1Uzb863w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2VhzAERBNgALUMzcb68Vehiq7pzjRsvMUDE889ALSQcwWQZe93AsC9U4jeSqXHncYEfJj98v6rWQd7ZJvPLZRj",
  "key1": "3CSKxjzET6WRsrLRHikH3s3jn6WTCPsNBiBfTj76UKbx8tWqyyTgR8JssQYEUvbsGsCdaSkg9p6QFx2KdCV2QGsV",
  "key2": "4i217Cw26k42J9RiHdXUS4M9SuDv3j7ENpCFFxdruBv7U1B2WHC8MZh8eZnMxdWqQReHcr8NfakjQn5316w4XuJC",
  "key3": "5p9goDsFuXB4xaCuYxptQstZ6Mi3oTcnyVkbRg4XeH7ZpC53w9coCbYUV4kKFG394ZceQ7C5UsWVBDwCAScrPSGP",
  "key4": "4dCNw65qJ8SA2jaB8R8EoEwvxXuUJcq2E1mu4wZb2z3wUMvBwcqwVYDFJjbToaQsroRZ32deCriNPpLdXC9mju6r",
  "key5": "4qbqtMgPmJ6Np8veAZsu5EmrAUq6y3hPkF4F7osSGQpZqgdcZrBWtNtB9m9cXCTwcP7WsHuxcbRBU848jjNiyeHd",
  "key6": "3p1a9vtgmAPMYcGz9D27i9AEPRdJLsug1qS2p9VNbti7cbie5iQKoUnCgtYjzW589aMsAcW3oVJ7QgJS7MX5PhPx",
  "key7": "2bpnEPuDFy9ZykGisKY1GYkQzc5ngYfqBEgNop7hc1VSn76CipeSgpGpp53aLW1EzgRLasaC6fi3PWxg3ncYwo4H",
  "key8": "2pWGGDtyfJAGCjzoEURAE5AhzSRsr1uVdyCKGV49nxbEha2gtWjnvMU1nQqW9hQBdrPTitFnDBh5yWtTa6e7Pf83",
  "key9": "41kEHQzcwxC7ERY7UJHdm2xW68e1AE5vNNKTmudr3mg6hc1gvwM2ena9wEbVq4JfTx4bRKEdS6BWT68pbN6eE6Ve",
  "key10": "4gaHw8tJKMa35AXzb816AbUuqu7bfWGhYiFuqLqzrp8YFjP3jKaiXLAHeaW9dWCVZUaBDHzeWyoWLcZmSCFxpUT6",
  "key11": "4d6oo2nauKmYnjSisM29mVKan77JXpfAyuhqh9mUp8oX39nTk9PjzpXUKD7oPTLdQ5LNoLeN7XH1PQfYXYZFVb4M",
  "key12": "ownJtRiA3ngoNGurRsCmft2kgYdmybXRxgEoMSiKGpkUa3MUMJHyNHyfcDWgFWGFUaAA4zy3yYnoP2pDk61p5rP",
  "key13": "K9jgR3NVKyVjnVPxA26nHbe9y2G3dTKQKk43bHQDjATwdCzpEEyT3wwS98enCwB1rAesfJVTj3E6UAYCG3hgzQs",
  "key14": "2UEc12Y3NrzdryCgimiEMNCFYaj4FTmHU2UuC7Ld2AfUWDWQaoFoiPqNd57jwxYNHWqiJytkFxF5YukQ3LzYnnu9",
  "key15": "fZbsRKeFYXJL8NH6Hu82NzLEAmMTfp9QYvhfBxj6QyNpFeeDeFRGDXSBju2GkTnHRys37qJ1BSCZULGKbQQ5Tn2",
  "key16": "5oMUcff8QBXsunLDnTzehhK5hACkwiRVpTycT6nd3S7PVwrfzJyrTpyWZVYzD8qFSgxm51HnqvQ79wd9pdFeEt6j",
  "key17": "44jrj7JtH5P8VtCc9W2Lk4jbHFDN8KEGowJFncC9yzPjc3Q2QiStHgyXp27h6KmGFVy6K4nb6H6YryZc3EfWTBfZ",
  "key18": "gyvrb2zXxYAkk6As7FpPwX5jAwupkYuycy97Y7tSzqPZQrTXvjw9LpEhFftJMW3woMD2VvJ7QxsLa7K4QhJiPzs",
  "key19": "NerZs53UdTcBBrben3vKSKDpAxZNWwReoa9tNPRXYsAC136aXDSo2DYbTWHk6qgDZzq7rPA8EkjHrfqLuJrJgD8",
  "key20": "3XApWKhDgGq9BLMQTDUsL4cUCTw6H7bQc9PbQZLgmp4KMvLEu6EFQGtGYF9iqez3XhudcRmK34JDYfHLEwkyhWcH",
  "key21": "5gjt4ByHs3nchwikJTbJmRh6rQniMoSFjWjjpSy4ibDri7tpvKVLwydgSJEKtr6nuS2xk5A7a8kMgQS8nJ1aHiDw",
  "key22": "44UrAFTi6RmHAgtiediK3t7PcrVzTgRuBZKs1ZEExZDGwJKB6rY72Gpv79fMFb2JE6YN2bDojCpghKLWXGCTPp1w",
  "key23": "2LFHxTbxuKKH3QvP5Ufu5WSUdwNJ4qisqqwfo2MBSXxgG6mpiooGgfXryousBHrYKUVWMvwjejWAyGXD47iztVdS",
  "key24": "Pe8cKf1LSbKTYUtvVqN1XHFe1MpjJmhnSrmQNH3RJwKbpRwHZCjRsFVMWNKAZGxxQYUKX9dcj3f1K3oUMJAsKLv",
  "key25": "fDVhPXH6r2SuoEjUDw7dmp9zBj245HxSQWu5ga8Y2gZByAPiH8Z1pXL9JwFBozgkFDv3uMfgYa2XG7KGAXfmAYt",
  "key26": "4NGziWxtBrBTQstLncAp5aVvtto88ibrnVcnQZVcY3e9PonmwNXbZmZooviQgpDAinz293fD4YUvojoNSwGq29bN",
  "key27": "5ENzAt8ta7ZGfMQBp6iK1362ZhRd993x4ATKoCg3aVwGBsKwycd3RWmH96fsEQMxVA3tDCJaaTAFqPW3BJhNL3Mp",
  "key28": "2N4RcwLpyMt5ktM9VpSdd2VMan5kn45UV8m3vkcMJiXQD4kMu9MfEBGC6z8XNK7XtdadLaMYR7Q349Y6QZAQz9UP",
  "key29": "3CxNsHrWyGjkY72BcYvXxCmynfAb68bvZhMMxrTrgv8kbhQ5ijHteZuaLkypioinw8ExJ95mNLRQLjVpwd78JeTV",
  "key30": "2psjDud9PUuy4kGNHec3yHaaSZYNTGKwH4rTKRMjomJjE3bKEEmX1RGUzHingX4ivLnSYmtQH5v2YsTQ9yMzdGuG",
  "key31": "4V2ES9dbLGt27VkAmR2yicpMDXgF8iFvgJhzPaaNV5Fg7ryPVUJTMWihSPcCALv37gPG5KPZQGf5Sj4FvFngS1hX",
  "key32": "4c1eALdhVTRNpJpPYma5SGYdSfN3fR3RZWu6Znz7pa4yCgdefezcNmXEp6EbUrYw6Q6sxawhHaTap24nTxP5CiME",
  "key33": "2V7pFneMbYazVPsR2u9bzMyR7HtU8D2mtEc4JGt5JahkSpvN9Uu2B9SRHbtt2SqWiXz7fG3uuLAw1iCXexibk2WL",
  "key34": "2WGrCEAjiQaXnnTRAoGHpyEGeU9qiiHmwJuh4p3Y2yCKTPn787jpJFesnUU58pG2QarMLTYC6L8t9cbYJ2AQBv35",
  "key35": "2dinneVmyGFPQYS5xFAqQip9tW1SuXybf2DrHicdQ7ok6CkUq4Jro291gNTD4dZ8cf2CwRxwKvSsTJUD1N1fh6fp",
  "key36": "4frB15WoyU8u9sKLtf8QvgnkVJfHfnm8Mk6Ds7kiLhuatxG6xKKwtNUVX29RZmTUQebaAFYD7YitdcX6CwG3oRs7"
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
