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
    "66EediSXDfjAXefDLxFJvxMVS8bwtJK4DQFd6m7VZu7M22BRRQBw6L1DwPy6E4WH8cn2Fr7DkD9TpiiAp9n4AcWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262XeokbtGwvtvDFn1wL42ww28nDXDvNnbj5stzAQLKGiim7XmPn6iHN8TjKgjk6ML41uiG4pNqMMZ8sqkpBCnTg",
  "key1": "54eHqLqUUR8BjveSyiwY9kJeW3hSmiDPcJLGRFjspbVjJFvr8LFS5qvzGqLEuFUCNBZ7vLBYAeapvn83BLV6qN6u",
  "key2": "4SbCaZJG2srYtReZhArNiuK68rujenw8wbQKuJYQDskrpfutZmUFWNGFKqab7RMD3woGQnipeAB5oMPUmPcNHEqW",
  "key3": "c6RFqEuLSTYnWhrjN6QQWfZWbibXoXFkxVwzivQLFwy3YJd66dgULPMmHPM7VRAiRBuVo2rUvro7MUFRuEhpzYn",
  "key4": "34yxXJHZXzVfDMX1Fbsh1ghHyV8NeFHtn7zU6PvA6dzpzDAb3HXRbTpLeM2xpCRFH8sWc4JA6ewq4mWSN6DexLNM",
  "key5": "3dy2npjZ49Ntyjf1G2Q4AZpeVZvmrH8ukmmKNqoqQwedgMoe6dBsWVwxeRndEEStbqqveUtjyPG3RBonnPm49Con",
  "key6": "5RbkpLEb4qmoRqM82finydpmz3xoPjpcAEZhVYXb4exhKHkMxiuGxnoi5yVPWWyndRQe9hnM5fANbF5Y5zDPECh",
  "key7": "59NFLsKyrx5TAM2XtUm5Ay5iGDNnbc3qdWo1sLeyMVbpRXjuwDV24Y6E5dCcApCbHgePRQM3gNjDbrb3SmHJryKE",
  "key8": "3wcnifvGAsGMdS94srYTZpatvBctgbsQvsduKCyTeDuGz81PkXLeQkM6KRFQVQrfPVmuCorsqVA5umt9Xh1FsffN",
  "key9": "5KfEiCnBCrBSobquyP6qRzqDFKKyy3U928L4sABGA4XxHNgSkDByBpLV3MWaUiifvfAaBUnzdbEsTnTuhk6N6Tpi",
  "key10": "2Zunp8FmDGWm45iLAKCCyk1qnJbpfqsPsrjUkCyADP9bZXLgrQ5D31bE94CzjWatvzxJBRs99BZzZveNjHy3HUiE",
  "key11": "2yNHtw5JkjowQawGZadd7uJH3Fyi4KsCvEPvQY8BJ8YBJxSRV7KpKDRbFQryPgqxFkTd4NPrfZor2oQWCCWBeXJg",
  "key12": "5FurVFdbfE1zi4UeCU7Yh1z6nLYMwcDrCFCpqQnsNb4EdPaCwYXCRM6J5Kt39wav3sqcnB2HMxy1fHZKyEDaSTDr",
  "key13": "2n7bquwVSZ2D7sMiqEuBjtgijptg4XQooYizs5KfwKh36gHDwxdXTeyq73WGW56p3EhdapdMcaRyx1uTKXqg1dN6",
  "key14": "3SPoXkNgacpM6nA2UZY1mt7QBQwvjtYqVsW4yBPnK3MdvKXcP8aB1R1S4kjErdRw98fY645u34a4nv2inDwWhcms",
  "key15": "3SK9Z5HRr7YKwNwQadQntBedCbgypw6zwrDZj8fz6o8pgq3FSZx8acML7FhFCnPoPoUm6Zur5waM8n9fpJw8hpzS",
  "key16": "2JnQML9e1tRmuG8Yj5KD3QuaHMXfmFYWhDNLUk9uTGQ9xxXFN6tR7Ld6kifkuf4Go9AfH4Y4x1NDA9ATQcMRvJLW",
  "key17": "3po2hnqCqnoyhPWmNwbtWRcYYz8wroH8qbDyt7xAjUY9xr5xRvsZh3SQ5vUrowfugY1nu8eALLbCDnM5RzWsXFZ",
  "key18": "3Xjhz1SKeXEucAoLEYp8vCvygrTfoPcEkqVu6hgztyB3fEAzaPv5thauaWmd2khcdzonpnL4jpKfPaSuc7uybx2m",
  "key19": "3V5ZwoLSdsKFEQhZCFyGXQ8KBvicoEvmccVJu252jacHterfQDCo2ShHUcyJLUB5A4Mz3xhvXC4C3gBJ83acg2hb",
  "key20": "32z8vKTKzmuAbAzEKxjwKLP81QKeFMCjC9DyUGEK3Lo8CybgpRaZT9D3TumW8mVJQpozhNCV5H3ccreqpzU8cMgv",
  "key21": "2vwLWRhU1vph5r5wBP1cp4yvdAC49cCkU4m2naKx5f8N7BNkVE6GqzBF5jLF3mwNw95r4Ax6Yg8nujFyxpRPCMi3",
  "key22": "32b37BYcT9Tbzh13WaMs2mFMmfzNzX7ytz5ovvyquuurXsvdTuUjboU43XTywj13HKFc9tm5a4ymZiXTXhGXac3Z",
  "key23": "4D7Z4R2xif1Pw3P264PcbMfovDXSN9eSFRvm8oHr5Gs4cFeHnJJA3xBKykDEZgw622hbHyL4EiypqPGF5S2LHURy",
  "key24": "38J15z9T4P1okCFoFoviLYtDtHRWThMYkvf7WAETQZfa8L42DepqGiF9oTbbyHgW7irmpqBEAiCHfxNEMg9aTkBL",
  "key25": "3uEWeCcWVPHBF5xfzVfZqcVMDFQRC11KHeivHzExbkC3m4uryz3Fhnua8BvsVoeHUvg687DFqsQ3dWbjD7qLu7Ux",
  "key26": "2u7NKKTMY7fqLwQChWLUnLZcJSBDKcuxh9y1XTRqLTz7DLyjsEqtp5tGdbRpLLoEzNF6Eq4JwgPxkVfRDw1KB4er",
  "key27": "2ekAjGnQSjR2hpReZhBZkH6y8C3bSEYCfSAWQJ7izMD35FyoQSHiEugCJhmjnaTAo9bYxrpZoyqtbQSQwb9jyEWF",
  "key28": "M9YLAdGQjArfES4mFLK3Ek7nSjfZySSUde3nfG6rAbFG5yXMZxfS437FZD2D9N8rNXiSGVGnPAKqb7HLELiBLq7",
  "key29": "3ksCoiJeuheb8qP2ZhT3WTPNiy1gDwwwVTyHUsqRNJjpKEES4MsPv7Z7e59bgsKdc6wRRmwXhAAU3tB6kzAKrdtZ"
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
