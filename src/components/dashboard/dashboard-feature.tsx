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
    "27Sak1p6ggEyctFwSjFoZV95QdnNPHjwsydgjVRTcox6r8Ra4cqqMbu21Z7VeiXLoSijYniT1orbGBWnF8zMya8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u12TQKM2Z7ms9dLBsawS6ga69cxffxQAQ8hT6eVuAYdAj2YZK5LoVN7GLGYynR2FXctA7sDzan11fdDnGgrKAeZ",
  "key1": "3hACB5WenzHrharT25g5bR2tWNp6fazkhjSMJ5HiCsLoUvojraWUtc8subav4G8BRncCqVXNSwFJ1ZwuSqz3oYQy",
  "key2": "2N2hcdCtCJ9v4wRb7CxXn1sfmYMedPMcNT4EGcFtu9Y7tjkuYAQy6ZeZWg4YDDA89pBes6tbgTFRqJpxzZhaocyp",
  "key3": "5pA3TGNZeJZhM2zpuiXZRoER3HaMESksjriMRZeetiqUA1wthx5bMovr71H7svtLqhGeeR2su6n3dPXcmcj3Wet9",
  "key4": "w2aoGVxkHBTz9uJzRzhLey6jrnpfkt4RWzLYmdjVbGCKEjW4TdV4u3kWaQwX1BWZP7xVLoKZmQJ61c7ho2vyihn",
  "key5": "3RPAoV6J8ps85ieCbDfzwKXsRRt3GSMg6rRuLgT5DoheKQLWLgukuELTQQqdbwUnnW5EzjTSNU9drittrHkA11ND",
  "key6": "qSohrtCSBffaXgyrRo74AVXZ6zUXGGCUNTeNo8iycZeVSPCrDLMR8JAKeHgK7vci9Vqpp3fxj1BkM4Y3C5ntABh",
  "key7": "3U7vRLgRJJGaPxXgk4akuwdQE3zi5P5ZAzqsnmFAXNsBh9y9Zxssk4ZtUZpb3FHUTn67rCivT3wCKoDsgcxibAcq",
  "key8": "5x4RbLUjxccR1SvqDiUjVgmDiTiUqbmf9eVbxqxCb92jvvbxWM952a2DqzBQm56XsMNPM3fgk9vVmXQSjifBQQKN",
  "key9": "3MX91W8yvvAbx1yUT7poPwruMyj6Nnk1R5yFF3aELTozzYoGzFn7gasQ2BM8e8vuKgXt8KYKFr4DLt11zc2g7sZa",
  "key10": "4yeWK337zdb4q56iTaNwnEpNXRjhR7uQ8n1Yd7fBTUtfrfQFJeunnf2zLYWppekZyGQXemHX9CCqp9kD5Fd5rcJH",
  "key11": "41ndAP1yWBqBWsRqHWD7ANYfEWMPJWpau4F181SpX1sPMCCP2Mzus6HTXTZUpXDgqb1sEweNxKzM2VkW5wW6ghCV",
  "key12": "3S19w1h6bZFdp5hThGwLKyo3kLgDK9v3zhuQCMei9QPbDutY3SRoaTpBu9S4PkHPaez5V32Pwr3CcetqBTZ7xFFn",
  "key13": "5pbTXPWhyZ3fZT3JwXuG6YjRCvPmQASKGtZmw6TjVBFRSSFpLmzX5zbLUr7iGPJ1QG2TJeZ5RMQBwzmqSt5TWxsC",
  "key14": "4Qk5YUq61Z3MZ5zUcSxQBNZHuTrKrFDm8zTG9Ze7837TXKyDxcWUdHqFKUGYkeGUUheKEqzExoTABGqvvfo76K1F",
  "key15": "265v79JQz57Z6ahRLQXjovgg8BpU1B2JWG3nQRwvHR6rJamgYcdaYYCZ6eSQA1ikFFnu65DdRWVYa6n5EzuVjR39",
  "key16": "5dUv7PTPH3Gx9FvFtvkK79Rj8fKkvBtCKopa8cme9w9ySAnSBamqVLFJQfdkUHDCM7iyF2miCh2Z5A3aVTmfkADp",
  "key17": "614yK9YiV16Mxud6CU48LNYzPUjggxcqt1zTDmLQFPgFFfhHpLggqjjk8SLwnEUC9ynijCQVdShMtPjzf1ZtMrSP",
  "key18": "46vbbDiZFqW4Pbx8mctGNEKP3EiM8pqZa1oQE1SU8VKXyTqW5S8dAAyNoBYbYmnrUxY9LycLtotppRifbZSZFBpa",
  "key19": "5FZdfNcoaFtD5CL9uyk8VQxd4PYzC9oVLFVbFmgvznYFMTu83BqpuXXnCCnQTbaAEVyuh8NwCeuc7q86kpwhZEVp",
  "key20": "5295NWMytGC4tAjL9PyvEGsckvBdLhpA6bnnAzPdtU5aX2GhnAxuNX4iSv6btzzM9w4e7gsHMijs2DirwNsjZehc",
  "key21": "5A7hEu9W9q4ByyV8YzFx5sqJ9kH9RLpXgwikEzaNtYSfkcK8K9mm48iZ4zyYut7HHEvtMnDAgE2Jn7NJsWnyV2KD",
  "key22": "2HD6qAvxDijK9E5j3CSoFqqkKnwgsBrqx1fyRZbjb8YdPmrMJoufCcetrCvViN3NTM6bUoh3vfrHBSFBNGb1BnB5",
  "key23": "2wtzv383fZcEiKtthtgpJU3pp1bPoum5F11ceWDqXpZzboUbH2EvbmYNsx8xgNc6EKYTaudqK5gvHtLHZ6LsxBdV",
  "key24": "ztAjTGDctXs1epmU3PLcrF2C4465cxo9p9kFjSLcEpr1a5JSko5Yv775pfvNme3qaHqKykZX23oRdWEqTtSjVES",
  "key25": "4zqwbLPcgziSMYc69pGZz6FAi6GE3LS8dYy1cycaMJKD5mgD5vont3ZzbhYY2J8M4a3CZUP6pQiB19N2cV3kSueM",
  "key26": "5GDsVqDhZxuAU3kJAJZMsMNyCYzGWubniKMYLMmJGp7cSmTmFpF9y42nJYuA7ECYijLpd8hTH4XkAaVPpRpPxM4C"
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
