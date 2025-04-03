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
    "3PStXfoMLVpivNkE8fLjiNj4Ucom5DWR7zG94o65WHwdhYjh1RfHcSgEHAxY5NU74R2r1YjYPCiFAL9U8ZmvGeAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HNvKYP6CDVqNp4dqmxSc5jKZcDYcJ6bDewcducgUUcjcv765AijaHXBKJ4MYT7KBEyk8yV4pm17YPStRqHzY2Pg",
  "key1": "4EvdigedFEGLCAzEZY6UoUpUQ9767dSy5Pur3rFRHrvBaf6ncnmvnmDFTxmxziT99kA1TCw2K1CxeZatedGi2hEp",
  "key2": "3uN1KFvdoDsKbttWCiXJ2XrMZXQ5x6f5r5Gk4aQZn2fVtdy6SVnbTUMQsAmma3Ymbshcsy9QmBCJjGfbDBWE9LbZ",
  "key3": "515YaaZSq3QQtZ4oz2A6Bv3gQA8pHFKK1rJNsG6g5sw36NwiEMwysrhJsfwSjEE6u5oGpXoJxKCeNC7D2a8Wki4Y",
  "key4": "4xGExbL2j9C2hNDyv5ZYMQGfuiaLteqe27QsQ5i22jiLA322K8mYsnChp12TJQrQZnHyLPPdds9ykfYPS7VpRdFp",
  "key5": "KHtDziENKr3AYB7c79vs9nCT53vQupsB94fvLSvqnSeVBFTuG3au8NNRBkMAfv9RFop9PrBy8ECuDCGhGa6QPqv",
  "key6": "3qgSNFmtZ5DyNrGmiu8DJeQtPfMwgM2S7EKp4DT6igGGzA61kjB24D1vE37NM62HceW4gEuQr6Mk8tHDyUbMgBVt",
  "key7": "2N39GWA6HNZE9g2FUiN1rkYnLjp4z7hVeAi1jDRYD1pvmpib2gegNYeBCYV4rwo1qzBxCDyvmyuadYJ3bCWJGtua",
  "key8": "496x1ogu85bN9j3Ux3dUpYzxtYnZf8BhLBTkPmuXVcv2Ami8bAmUz3rVhN7Wk9cQvaCMkU4njsc8E7S5sVEKWrg5",
  "key9": "2iCqHyjrbB98MRXaTGVccUBtxN1SGEzgFj2859uuauXGeHeWuc5EDHRQRXWjWAWztHJz5GnwUqxy8vqWNdysyNRh",
  "key10": "58jCAty2GS8AzLt9irNauvtaUWeshZwKn746yzNjqu2JN6GBtR4ginrK7iEC8AVxrBopznvfULf7wLU6f5ATPoUC",
  "key11": "5zGN1LEQUhXbSi8K2vnWU6U3m3FR3ok8hBesaALysMco3tVYTGegEaG6vgrrmyn4mo8PjjRyDmHgiVVMdnmxr7vu",
  "key12": "65sNKruci8dHMRA29Azrvza3F3jEWMXqnLqWkcK6VqzRuQxTtDEPQ7xtyABNuA6VaSWDtZxgJaJfjYYTeCrcjQWd",
  "key13": "2BT1aFces5uf22XEFBW4YFhqv4jWE4UyoE2njQthE3SfyChCBCTsfS2aMboyTUnX17FvWRdpNNGDegTAjHyahEcr",
  "key14": "44uKigwTnbPjxNVdrtryV4fqHGwNTY8FmnQeqezQS6jMnNqL7qn64V7utbE5i4ajyL8FQ9S5xzp18hEuJ9TAT8oq",
  "key15": "4AHXF42ZqZSEn4sBKAmnMqrk3ExirmR1MLWeoBtMrDoP3W2misNu2riQxKFnQDrPSzWRSuz5YCsXJwmsXfskyWwx",
  "key16": "2ZuefpSLMdvvK4zS45sQ96HxatfNDRmw4hZbPE9oYJV1fFBeXFJhDMDtykRZmodgBgr8GbraQr7memBSqFUA3e5o",
  "key17": "4EXdUHi4G9irwpVv3sqYZxZ7hob1TGkxAvLgtigQtPHewUEmFpQYdw6wBp3PoDWLLHmWYDUnhREsyBhMGG6KD17s",
  "key18": "PyCEdJptMXGDwLgDPiYSeBoUP9PrXwb13PYtKzZsjaMgMccj3sStZ5CW2JVtCWAzkMctV2F4wWL45s6Kbjczwdd",
  "key19": "Lii33DKyi5yh4X2bTP2ekPH6GX7JZxhDHgD1Vt9Z4YzDcYtuLXrCqRbR9MzfXv1HQ3VPKtWrfrNPaYZhB7DNb6E",
  "key20": "47BNKLrkyU5HsPc7R5NV9RoLJB8ZSVjZW4sPU5SnvopGMpgaCLUVoTdQJcKn9Zm4wwck8iC3Ud7LzGk3tdMu3Jfi",
  "key21": "4fgufAr2eXK3jVuCPDZd4abb2Gex4uXfyZoYBDg5XT1F7gEfHKKSu9hJXjzBNYt3h1x71i871nJiWoGxLQPYYyqZ",
  "key22": "6e5KgTdnx619WrfNE1PUEY8QD7JiVuCx2HoQGkyCdmzD2QMWLEt6z8dTdxqaYxU66YcvRacUDLf5ToEMCW8LdpY",
  "key23": "3CpQZAeF2S3SQ8yrw11CSBjQfDSksq9k9XfyKvPqMF6dDazXiYmMWJh9tP5QGQdyuM1kiX3n2AmDvqDXJNeebmk8",
  "key24": "3VzfESuzf9Nk1gVxw1dotKt8KxsG92ichwjLBURex73z1uXortTQxeKc6cgiW1VW6u9gqbbrMisddQdePzcC5eyV",
  "key25": "2ENdNYvdQ7G4cofZroB4EpYjhiHDosW9DdeZUmRBCkCoBGfhCN95fbHqjeiayaWgWBff5YE84D7ovrQcT18yGV3H",
  "key26": "5KG2tfZ8ysiVtKK7ciMpgGw2RbERs6SkVv45nhm7WGEkc5aoxrtWHm93gnoNPxr3UZjY9kkmWnn2HhHbRbaEqJQ3",
  "key27": "5vrAJLspLXVNpkGo8kQ491fdRgdcsNk8roNrQiNyUMyd9yc7ycK12eFggqPxz19c1CaJiyzamPcBChk3QW98vzP5",
  "key28": "34xptAqzw27shLE8RPtCu6RZM3kkUZFE9qcPYMhJ3Ucr5wkJAn5fUUBGyP8oWaew93L1UfPqNDRdgkpQEeAeohFV"
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
