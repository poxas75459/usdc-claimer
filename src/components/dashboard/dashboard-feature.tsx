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
    "3GtrNZ6qz8b5BHfxvxX1mGWFJmLW7t1nYC7XDwJYM1A5ADWvd3e5Nm1hpRjPsRAWDfM3iuNP5CAkVwLk4Q8mCmxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fA6w9u3vdWraJvENFYFcvHVXMp9NjVxKoUZuaGcQfHiEFJrEM8PwMLF3BS64TCcFUsRBRSiTUTtP1aFQyBzvN6W",
  "key1": "4j8wTyLMDSCqeyCUUuygjQEScHd9xPmaKmWeopLK97ARL7LiQM5iPJmRdTYqFqNTDcmzTybWtXWyVdX5XEzzSWU9",
  "key2": "283mWLdrwLjayfKWEo5EL5asXqpabJ9GFFRracEutWYsUxH9bQffaULFhYDnPdgVYXwUhdjsFmcU5KzP45iimbGW",
  "key3": "3E5WD5GVy6abcCop36w1uGaRws6fAcjxpUaC7FdqDJivA7i1ruWAqXAMyDQAAjXraKx4SFC7kxSYXvTQPSNq5brv",
  "key4": "45RvZCXFjsyf7aRvhFqbSqbBNheAeMw9o5AeZ6wwTLi42w4f8xavhoFatn3hNRqh45EGTQNZUHCX8um5pnDiYREb",
  "key5": "47FLGskaeSZ6fyZq7N8tpQiSz7NLCub7Dz2n4VC9zDdzMoU1hJoD5f5iW6FjRfh8vwpabVPmfE8XoZEAxWtv5hhS",
  "key6": "5nKY2qiDHkqMaGysfQZnTdHwCzVRRbdqemHhRhxWeBnVP7Pbhcek1i2g6pteTKu1AdCpokVgUneeqVGe6Q93XQPL",
  "key7": "2Cy7VjvtRd4vZ6PP9j8E6L2itXo9rdntb2txLGm3hSNkqX6PE7iwjDpihAaxx4AcE5iE8sQz1JjqoZBRq46yPiNf",
  "key8": "YTekErYh8AYv4NkeTxq1UBX5xLoXwX15W7oL3hLzXX1A3xHPsyj8d4oYovsnsr9svgA3YDK2fSQ89smDe7Ks6nL",
  "key9": "5vFBi9QkM2ZwjM5NAoiexHn4hXUdWhUF9AkGmUDGVfknii3KWyCozAMMCRZ4yyT5rFZfeQXE8NPtPDkbm7L2cp8A",
  "key10": "583uqTkwSGUxEyBT1wHMYpYwLAjpCT53xtXr4pEJq7EGnPsY8NuGcf8QKH3T3zQyxzwEVBazA7fFEPGvr8pQv5fx",
  "key11": "51spKD3FCCHhMd2rDbvhQUm54vsX86jh48DLuL3xnzSUyP1eyAKDA1JeVhXA7bFFknbnAQAuZMXF9X1KyozTnNKe",
  "key12": "4dcUNsUDX2H4MfZ8xGoYqopmUKevYXDoJ9qp69pGToSJCSGc5SeWaVSxc5de8LrpkpcSNdi5Xt2pfaobZ7LPMD4s",
  "key13": "nNWNcQtb9BiaVVLYkvks55fQNkHWXn1jfSPgUkybBREUkck18v5m2aZaKqqRrih6jT9u2y5YJNddXMFSm1ST2zk",
  "key14": "44Z6p8QREQCZhwroQj8D8mMSQb5Se1gTH1udQEU3vdJPPkp8BkMGUdNWNLpBVHSbSxFQbmbtpFLFebREtyzvABZD",
  "key15": "2TWaFcimBwXuMLWDKXPRtyP73KdqiL5XpEsZuJktMu1SZDxwUoSAkZSa9WJn9zB3g11hkNg4bKBdHDHJf174xdFg",
  "key16": "3K86vLcH5a21CMzeQ8L4znk3feqrEDtqERD7u2Sr3rFzhrX7cXXnC8iov73GfUVYKEDFB2EbEN1S24s4dJZRXdho",
  "key17": "5hxVmKayFuzdLcsKfqcGnCdfC2UoF1qt76V6tg4ZBmLdSkZwBzgXQhdifBGPTk25ZFXcVRGP6aBhNmcaLnZryT6w",
  "key18": "55NdahoMNADf6sMeeCeLzNBnqFKPRpxpYmDHBFoZRDkzF2oL1xk3hrLn2StkoGmii8cErvRkVGJ1tHRhVMQYqGXw",
  "key19": "4dBVG4woo1e2qz8FDqAkbdAk455NAsQW4n6GJRyDkNvkZKNMKV6ZwLMARXeij76LUwqSy7ASK5b5f957MGx9CRmQ",
  "key20": "Bbmk6SWi4qL9yL66Rw2V64UCPmUfz8J5K6Fy6kVBExapignNUkDoxtAVVSwQhdc7c8ZqZpwHqz27v4z28Eas1mq",
  "key21": "2rDVTmTmZeKSebeXtsRGpkbyS2FXQp2dqqyJpyexn2rwGNRvxNyKP7oodhiRAZuvTB6YUPwbqHJ7VhY2HiZfZx4W",
  "key22": "YA6A2zSG9TJJ7QZ5cy64X2eMijQAkeq8na4tDyZca3YaUWb5P91KvTTtSqnZ71zJauwMA6h65ENG1UURBdGyY1X",
  "key23": "3z7tGFuVWaGzHe1Vrx5EMJodLzeZrAZ1G7BAhRvCKx1R3fScgPXHprdMftbU3J7JqgLsaEWmSAM31Yj2BokNiix3",
  "key24": "5RoJRgPLXKYY39PCRA8fvxfUSMY7ChS1jiAujNwuCPDfWLARQzfbez9LCx2rhejjjV6nBDVZRPzuGyHgGGETuJ1m",
  "key25": "sut2ZPoVgLCijb2aKkTXisJwyVXSvoUpLxAhxLobsWkJiQk6YQ2oGpenfKhcGzJEuuqnLvfGq5YUd1RAGfWvtJK",
  "key26": "fo9W1CR5nXpUBchk2sNWL737pzFsueZwwcqJDfZFqVxzrDF2ADsGkbVJiD7RSx9TSntHzk2h4KKB6Vhf4q8FN8b",
  "key27": "3z7zrLCctg5bc7wamSzsYUDcmP4LpT2tBVLLtz3hup9JJbG5hN2rrPbDXwK12VbBPuqLSf6aqni5JVyikqtD1vM7",
  "key28": "WpjuQj2ybQysNxMmwRY4a78zuyCyJt94xhsoxzXFdp6tsCF9mJLsJ6LgTn5JGpPB2tiWNyJ5swZZA5E1EpuaDYa",
  "key29": "4h1v6uUmRjgDPjFz5yDRQqQVgZbJyLrwEd1cXC6pFh6MaGKwSdZMcEh51xvPq8x6hNG7kZXTDFtvosqNyJWFuoFs",
  "key30": "3iBVrzsDBGbxZLHjqoTczaorzK53gsewYpZLMbMqtU6hQAtCNqsfEfV2qP1YXWpwh8S1aP9rdMJxH5U37uy4MLk3",
  "key31": "5uxt1yoW34aQF7PkxBsan6nPd214wdqm87BbAumA7jhXWqVGRhQDbFY3FaL7dma6DB7CxenRmwfJArjBABYxDGdQ",
  "key32": "iqAF8wzPNRR7m4i5MMLHbq5eTHJM4NrAbAYBfG4YKDfZSEEwSZiBvWp8ZB5pn8TLJrLREPH1RZPyH7aYgewBAK9",
  "key33": "4Zw2oGQnSyMdzK8D4Rs5yLLjXxuPHUrrrf4GBJcde1wNnNeYRrYmboAxPDTZEdRDRF2Yi4MvgrqeggMNEWYrcpVr",
  "key34": "2eMA6RT2LdswNFwEq5JiX4wNT4DEhUanDz6ktoRghYzjbF3CmiNqVEs9LLzQzqMGzyxBKTF5CugaSh5McnMDNdo8",
  "key35": "ZsiyQ5pHeEuVaniaXmwSqntPGnvpr4YjtZ5su8tJxnXGircnAHRvRVkT3eAmSPGW5mLQYUvT6uynMvNf2XSGLGC"
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
