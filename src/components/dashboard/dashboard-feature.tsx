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
    "3Bq6dcaHSQvnem7Hq4k4st3XZsZ8VqVZrpJgP3sUccQVJoCbiqFFqzWEL8e5AVrz2GpZvqYNTnMbLEmsomVNjLPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQmjDfHQQtonoJ3uVzQup4j7tcay3eAjrBn4GMtRxGYVFzhmb4jbQuXfYSZND7uSDoRuPvrmA4gTacJiKdbYZsn",
  "key1": "YYDu9TrYJnvQyj9gsdf2ovJFXzHTqRMabcn1o92QB8drNZdcJR1bWw5GgdjJyywL9VYS6BTar3cQV6SRvmhmj2e",
  "key2": "tuYTynTcpkUvPAM2GX1iPdsMTFdcUn5U12aySHv5ueshR2rnP2zvXe9HuuC5Ymwf2XGBmYQbu5e1rWJ4XRLJNru",
  "key3": "Dy6YJiRsmN4aLbwwmvkEp9shCuTKwib8BJwUXBRgWPAHAiW17fL5G1tb1JS7Y6NVWmENrTDXr3emYPBynXFKx9w",
  "key4": "2zexsap1gyZzQudpVjJkzxbYEqtmzrCGgpjr8N6D8aVRx4z3XhRMqVDzpoHnbawzJdCP8b5zam178mLW8yvvDpwo",
  "key5": "3k3R11s1bJBDhfKmxTLMvkQuRG83dyYkJRQq2RTWXTWXweVYvof5e4qGuGdqp5k1Ss6me6gMSkQU3HPtfD994RwQ",
  "key6": "4wVmYvyySeWcHEyfvR3BnTBYxv5LX4ACfYQ3uF1hvpUSth41owYrZNouDKAvBpArFqGMzhP3ii6kW8VP6uMr9dn9",
  "key7": "33Cp9FuSv8mZHDGEnoqxbAsztXdKEAtfqQyemhWRPPry25s34sApWYK35VBca32sjumZHSuNrkRXn4j9K3cfmYMq",
  "key8": "5skCULqGopchquupJRiALrAFMeqn8Vd7ZqMnQAU9jVMMmJmN457yjhwv1xBDj59sX3TzkPk7FXqgz3YiLdGVqABK",
  "key9": "5ewUi3y1cWZfqb2M6YHSf3qPTTgD5HNgJtWjFtmYVLNWUZCK9sj62GBEXgG5veaFAMQvb5CXgtimuh5x2BTN3DL8",
  "key10": "d9whVXrAFfyf2pLNCDTC3KAEF3ZEkkrdo7vRTfSg3HvfX29t9Ja9phT8GR45VwAemB2kmBKpq15xhpaG2SkWYYH",
  "key11": "3soHfEdm6Z4fCmm9tNFfNtQECV1P18kPJuBSE6b9YqmTCA8ANaDfKJSVxd43NgpU3PJ28xHSKkqBz3v71ar7S7qg",
  "key12": "5DtGDs1sexQqEgF43abeAcDogBDaNgGcWhCXrCFM8XT5Y73X2BuLBqq9k9DoNRu4PLomjeam8E28fjoDfW4ZcGQ",
  "key13": "2FBfDUAtSVo1Nmwv9WaqrGKTpa6ibXdj6FUYv6K4ykJyk5FgG9JLRhp8k2399GebRUUatL43bFiP9aPcWbfNkSUm",
  "key14": "sap7tYnZrddFTNfPfUTXjTQqKEvzN98BrJUrV6FemBfLH3ikVqXPrGPRNhKp2HdCEJFKbKJ4KBnG28XkXKHqHvC",
  "key15": "3vDFq2T8PxzM2GdqVMGemPxKN5FMRJbpKWtoiYY97NahAGbRJXNGeiuGfwJPZHrD6wi57ohuRCrPdkW3U1gQfSZh",
  "key16": "eWhrCLWdgeZ4exgCADZXsJNfwDaM6Pn19p6FopikPsDpSaznLkqmwjRovTdLVuzMzH3KGzZpGYKKnbd3aNBzJsa",
  "key17": "35apmMQQ5SurfxgvjhLtARA5SRMRPEg8c7DBRb4DG62MxufEWWEFayYH8XJtRiD4NYUSNVh6nVez6ABMxfus2q5y",
  "key18": "5UEefmwRfdMqc2hs5hEvAgWJ2FBx4wujNSREFVEwrXmbcb3qfs41GRtiPXAJvYZLd7SHA1Jn9zUzCYNhyWp5LjTC",
  "key19": "3mruygho7YAMv2PQAKcBEVCzMBmwqVcxdnmi6m5MCeGvyx8xDztNAEcJtp3aDoigtdDXun8Vz7ymyDoRfFsFbpx",
  "key20": "46nFCLyqMCy5todjBVzVk63o91ud9No6cxuLS4RGjcmfF7Z97zYr3XQcrGJ9bB83Zd9JnQs4QWTDXyA72bb32aJi",
  "key21": "5jAMtdqxyzu74K78QVs3kRoNgdWHy7fopjNRAQGQxBfcVP4WJGUjrG9aQyZLvg1qLP6wnddj4YSNrB3ru2oAp7jq",
  "key22": "AvMi6G9xBmDV7Fj4hiG8V7Ky5fX3dRvhWCadfybSvRBmyt9vKk2qtZUHJnPmCuo966LwHQp8oN5tuHnqSMRj5Th",
  "key23": "4dxfJ7eeQtMSFxdHNKggGsWHMD6k8tmGUHGXbUTG337RG8e16DW7trAzmryNBBepWMsqErsXcrHrM19ELW41hCju",
  "key24": "5wVtsrr54p1PkuBq9bQxtkdDowKwwgMbfMNEPCCEkzZ2eP9qqk1geM1kyiCXNmALtJTZz3hCSZXUyH5AdnCk6HCB",
  "key25": "2pESS6o5FpqXyMvguLV5SRpcTLjFE8njEAJiQCxf8zv1nt7qhiYkAjU9VrJkyxkyzzcGFcuhHytho7X8azmqDxeu",
  "key26": "oBFN7Xs6JQDwh5sKWPMB48RC6fwMHWHmz7EXzZj3qSsohkSdpukVGMe8K3mpYGeaFPqUof8yLbPCGo2LVugfigT",
  "key27": "5CCBWjnjqpCieFFYVnQFXxz8FawdugdLMahxXZrHpJTAyw2j1HU3n3KRbEZ3bXbsr61aEUhiHLhUVHhd61aQae2n",
  "key28": "5FdoL8XvZJ18wks1M2BR9BQepjkUonnFoHieFsJhzjL6mgZbCrRW9rQry4n6CVwdpQvGNwYNd9p5EPzDWFjHjQJH",
  "key29": "5TghK2twL8SJSdmbMMqnLE2RFuNU7LvyRR7x2To8F6Uhh1kB49FxauTcKFzLPdnF5G7RAdv9t3kTzfMFUkkt3Xyn",
  "key30": "QQhzJ4RaRSQNa1m5FQf6MUd8re8pBwUhFAKwG4gGGPTd6397nVwAapeNR4K7DrpKL4RnhneCmm6UWCp1ZrYF6gT",
  "key31": "4nSjFFHDGb8QAMmTA92gvjPyuxLNzy4KkEK6qHwGbATkKtN4iNYnctJH1DU2yx843pEtyVLUaQhmLW3r8SBestii",
  "key32": "33764VAtRe1tuJQMaJMcLWgASpCdRPV1qCWALDu5yNmo78UL5sBX23tLBNi2WMm9jndjYMKejF4LCv7kz1Jj8ZND"
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
