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
    "2GvkaTuUrqeexPzWjVpp2mRANcZXCZCffzRtWGeK2YkdCj8aXQpJZLUQ2rohS8meCVLCnnKEqDtoAjBMGBd4dhGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZXC84hnrciCMPFL9fPjGo5wmRSfreNK2jYUr3gNEchBLuRxB7roYTKCUPod9yD8W7yoa9KFjBgQ8LfF9iwLNkXq",
  "key1": "4nTqB7PsEnz5TSsNAP1sN3WP3vLqDuqjuXuGYmiKLdiXcZcBVJbSvQ7DJprtJzv2sNJcUTvQVDQ5wbX8ynvwKLur",
  "key2": "2P5p3cNattd72S6n8x1gPe1oXHKTSGDYVHoX8ZRFotGmzTumktsHgABaqbnLwgxRXbJbyAJc39hsJBJQAbwqKaF5",
  "key3": "yN32454VJiQXt1ZLp2jw2ihocwe2QX2cUncLeWxrjsUCbAzxwqYspDP9zB79Ua8w2HTrU6VTfrGjeEaEsDwrmQ7",
  "key4": "57nub962wFFDvNKLXzmW3RiRDrZUza5Fhoir5GTiX5RbnfVDhjeWEFnxNxD2ByM7ZpGYJnv1yxZSiTmEjCtwUoRk",
  "key5": "3xv2UQJ2jk99kFYiVLT42FSx272Dmp4bhV2tbfPS5RDsNyuM1j1BU3kJcxgihiYgyLq3r9p9FwzXJQTJybuhWZJ6",
  "key6": "5ZoTg9XCu8eZDBQQkZz6VpyvQFrkF5XgTqoME7fnbRPzNjYiYVKDkcagtnN3MxZB3W2tgTdCc3D4er5PALnx8Ru4",
  "key7": "5yTQJwncAh5vrbpuNcPxvZYsnRkduPfyCoQF5mvSZybAWZYKeFpCtthCo2hS9xuV4rKH5efGNwJzoMze9mKkMwiP",
  "key8": "2G12Pn6hhXWJdRogw6nWgkvxKuSXMapERv61yBnTGec9guxCA2HWhzhCsoYQep3fwrQW8B1KPsstTckrfKXpCBCr",
  "key9": "HuXFYPrfvkqgkDcyofhHsvHAFJ5ZNxSjE6sW8Q9mo9b99GZ8ZyM62W9dnFroQDrY9v444b9UG7x2VFoXyzaiXsJ",
  "key10": "21XvfxjonSAfrgbungTr8pNfznFy87Z4XXQsedn7tHMLcuxwj1uirWRdg4WiwX3XprV2gzheapjbYKnzcrkXUcXb",
  "key11": "bzPzCtu9MrnWeqd7orfBwb69RJcmG2XaFtLDBviQk87KgUmppxSE9MJjuS5zAmeJRzW4WFLas9e3uM8tGPDj5nH",
  "key12": "2hs1EzJ7BsaYA7HJpSHEUKmPnyu6UJK1pgGR9QjJaD942DtLQE3jCKnxmYG1rEMVFxQhhatthtbVQWSM4yZwUGof",
  "key13": "2rxQgJ5j5zDZmbS6tq8z1UWs29PwfPY5LLDWe7Vix3DA8qjcmtWAbNMBPyiM7uihLjnHVYwoPsXcTxyUuB4HEJ4P",
  "key14": "VVXt6YbXHJy63zkqBgcsRPN9WZB1oMSPe7stLw1M4VtQHCzcWHWuckEwTwML3WiSyxoso59MgYTPeX56pD94J1N",
  "key15": "3DjfYu24zqkZSEwzmBz4ji9R6C1itGgStijmPKNr83wTjwoLpRyFkcR6wFCiywVk927cd8xcUAFUpwfxuE3548yc",
  "key16": "8XLcBodGXz5HxcfJvFsTLpnmgRemHH3vZWsGrXbuT8U4gHzFzdaQnJK12NHqUqYEZ3SNQqWAFzm1vA2PcF189p3",
  "key17": "3whjvUjdbDVZyHKyPbmS5aRvGVpFy3DrpyKkZKpSZ13aFQLjcwmJAi4CHQqgVTtveMLR2uovksuj9gp4c4s1sjRZ",
  "key18": "4hYgz8TVuH91EgCCyo6JiyGXa4Urz6w9WZNQPFwHCf6cYDkcyye5r9zRcjY8diXQDXQcqaL8LPuKuWTuJrdw2Lxu",
  "key19": "2H4VEGr2qcCA57CzfLBjnzxogmsMu67SrVkMFGefvWHAjpY5gx2ma9YYY5yZ26u1nQAFkcnMqGk3Dex1zLTioX4M",
  "key20": "4xvz59qZwnE3jrT4yUY2L2Ftk76KoaatfEoGEjePvY14HbfXGJGraLZdAaQ87PmVjfK914PenNFGrBESa1zeDjah",
  "key21": "3QaD3abrqARc9EnrNsC1dhEjwkgVVc3TpgtYHyC7o9f7dTNuh626ahre9TTFDRz9eDaU9xpNEAzu5Nw5f1YGGh9D",
  "key22": "JVt9boSmwHuA9ueyRq5gkAJ6fkkcoKUnhL1yGEWVnjMs9Cy5UShrsc2FpdiLXCF6yV5wqhrZpazaSXLpNfaQDGT",
  "key23": "356R45bzx18y3Du1AuEPRX7VJZEUwyNrefoTVrbSotiXiHNtgsGFkLHEgXpaGUBUpWPT2W9c71xRwWzJHjApDoS2",
  "key24": "3JjZT7RRqX3zas7nV42RcUXz8Ba7LjMUbSEURTpwhtLNrDDqkcnxwjicgxMLGxh9Qruuvtdq4X2q3SY6YhU6Kzy2",
  "key25": "4Lo13x2AaorHXFwEJbfQz5Xrgt9YVM6ft4EH7n4f48ED1HnyubbKjaeJDvTDEzRndzaeKg57Rksw8cLgTDPEwcVs",
  "key26": "2BVe3CG2AFBPMVWS8vFeDeyomc2SM26uUC3C2basY2pbbp69QYoYcstm7Ar5YV6kRi1r2dkfoKz1K2WroB8uwGhR",
  "key27": "2MKV43MhbUv7f8Hh4KnX8Atqsg9xtgDtywHh4SnohBxo5QtijLJN2MmGEp8XomocaTzhj5jg7fDTiSr2pWG3Sjje",
  "key28": "3iv5VE6BoDVoMJup4qS31cZcZ19JGNApR9so6S3XnpAjZREPpt3ZMhQ7X5otwYTLETZtNMyiCdyjDnTbncHLBsjk",
  "key29": "3W3pjx48VS4J6g9o2XGKgpLA4w4rftnArxvKbnBvFSvuvppYrHuDqRNCgHbTnMznGzYpq1JVPbcKMtt3nZHba4ir",
  "key30": "2w3uXv8CczVpsxRg2VYYyk45CFvqmA2JbNWf95ktU2BbvP3PJ3GrjHyYj2NiMNArXGvRPR1XXPNE5Y1tvy1ZPY6e",
  "key31": "3k5gPx5FKxkeQg9Yx7Xc9A1JCk6DiKMp3E2Uuxkma5v4519Hucj4VtdQwJzKcwi6mc7cbzA1fBuCSVryNmJK7kwo",
  "key32": "4SBfqWtHGkcfJMaEzsvjo1unYBeccRhVM9uLymNViC4yCGJDHeyXZdUo2p7vZysAewpvQDs2rAhvAJU5ogUzUEEK",
  "key33": "2pvbRGvgoeC4cYSMQ4GfuxRaYMKRhoJF9VpxTs3H1wHGRvJKrSXYW7KsS1US6YK3uFhu1PKQRG4hXDhB8LTBL2PW",
  "key34": "2q5pP3W3qYpbjYB7QWkbJZUNQpv1dhBP7DZYPx2DnoqXr2Hd7byAoTAaQiuDFdc41j2MTxTF5zHQRLGZMNSRyGYP",
  "key35": "42RTQPWA4uCrbgvgCvPkeH4RuwuF32G6v7DQVNp9zPM3DCD5b2P54oGcY5ouwKxdqN6TPtFiq994Xwq1Bt3KXDd5"
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
