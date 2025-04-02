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
    "2ESn3p5622xmJ9RbChjjuPKVBwqYtdxdZyyH3WDuhAohHV1JPAjxbSgp6Si5pV4EcysuGyZed26Y8fG1VuG1zPfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eLrQnKs5sPcE3rdsWw5HewX4c8XSrvms9DpcwYKLMFV19WrHuevaUwhbPksSt3bzgvZmZmZgNqVziRuzXy7E5gn",
  "key1": "34Ldzp863qG1Hw1CiWBmbfHG5LqzsqFaS8vk2gjUjdEWh6WY8Th479yFPCaBsgVbxZFVC12eGwUbVRtR49Qk4iK1",
  "key2": "E31sUGA7ArKs4EQknu9WDEXo2m8AvfYj8yXdAesUGayC4eAvAGkeX4Q7c7CxP2Epk7zVGWrHMapMVzUxA1z1HSC",
  "key3": "3se1RFe2pSJQR5eGdktxg8v4hE3Q7zkm6MKYbz8fLu8rhwXvSYtTqEuaingnSGaUzMGZMNhTRo16XXaqpy6Rk8nj",
  "key4": "3Bvn5kwVQ5xQcZ4VJSMSbUwvnJeaWseybVJGvpAr5PSMcXdnrHSRMa9TTr63gPUFy2vS9BmJRq3vzDQKgxpXDQkw",
  "key5": "5zGMRhnYeanWDdbnh8JrgzBvmVMHRqMr5uBULryoWyUB4VFRodW4RsEd4yayUhR7rXYctLWFFgtEYjakAC2vyhNV",
  "key6": "34s5xnwhATYgSV9EQZF7SAwGoQbdG3baCCYYNdxD3rfHxzMeEcuspaBvV8e47yckGmnNirVfz1eTYkzG9SPSvNWK",
  "key7": "4J5GB7EZzdCaQkKPS9s71v8eo7S4fWqwfHKufJihgw36aXsTYoqhZkwwYaCKf6GxH9frMVbUfB1UgkDbDydwSRPF",
  "key8": "5HYqeNwD6vcr4jVCLUfZTPVLabgfdPGNwiuJZyiFQny25HSMasLZuGSCjWK8xP7kpMkZ9GdUexiZ1ZfJR5y1pz7F",
  "key9": "5kVzwGkvFnNS1PTPHjwv89Jy5wt8KSpb4m4vXRmybZciJRC2kkESk4KBMeRVnRgHaRf79hgteGHzZs6mh44agQ77",
  "key10": "rbg87c6133omUX5a7bASa1CYWdMrjzRLE4W9BTPsF3tK355XcWuszTyWicy4BDcvcC5a2VXoTVjbRpz7vYRF33k",
  "key11": "5WfN3meCzXzG5kaydjSJygHEcX279ShSFCKvYxcwtTnuPwKV9cDcmtrxg2WcTvbjVNGvyc4ztD5KZSVTLucuiAFi",
  "key12": "3rgN6hsQV43ma9U6DpNARM8GEw7ayywhipGbFA1vENDmwH3zVxtjXq3SVN1oCQPYWcaQRgQFEz2dLon7A1aPfQHZ",
  "key13": "rk8LyKhmBQ382vPjxgTRSHajnzFPTLLFRyMqoXmsqSQ945TTdphF5EbJqhegcntFkkVrsv1n7xao7dGW5RDue7y",
  "key14": "2ujfTQ5gTG9fPY7YY2AV1kYGVtZmgz59Dh73jLwSPmqsbp3CoSFdkPJkqrsTB3nci64DS6poGoWGtvFNxz2QiHHm",
  "key15": "3cWu9XQwjtQ786Hn7VzLy36ejvEAyXLuzH7wTJpSP38stegxDFhrYhSWp8G4wrWktytEXM38aVAX8CeFMtF5MZv7",
  "key16": "4DuH9zPoKx16fz5y6ACaxbrPC38L9DGSvdj2yMTXMTPN5YxW4WMwKE4ASvmNvmCju8ghntbu8wcNLWbWCm3tATZg",
  "key17": "5PkX59Wbc1o4dB9459jXm5vKTopmnzwGcjP5dudku2nmgpn8pkE9ZTW9vcVLFqAQnSWQhpKpJCzPjH5wvWRTmZCw",
  "key18": "3Lsu3M2nxdn1299TcN49ZYVBm9GWrtdGitU5cusEwH4Md455BPbpgGSRa2E6QgxsM7QCMeVJzZFXedxeemwQGQLp",
  "key19": "3CbqPNrush9dTx5QPGuZCTrCZFnERuUurJrk1jbaU5nRYMrgMHyqvifALcxB75uWZs67WTDBMvvmJSaYi4bLY2U4",
  "key20": "3EfThEWwBpsH6LNHbUZZCnkHaXnkH5wDdREJ6vZuGLjFiCr38EP5fqGSq4ynPWipHzpw2V7rmn7c8Ukq1yNNwgTW",
  "key21": "4ewcEQZKX1GGXVHb5ycKKAu8t2s1ZXkKNxncDKmzqy6Rq9YdZ8DgCYRXypQy4bst6vhAvX8joxx3Rm8VGaXgjL62",
  "key22": "4rrYxyU8GFLWjX1bSi57F3GzuNiqJSqLsv7cPEjnxuUu86wAz6Km2qYsPdSUv3VGX8pikySpzo3t1GQQeQoYGdBX",
  "key23": "LqV6BY713SEztuwa8o4Ercdv6KLCfX8Dpz3XCmRMHdaRJnNHAaYHBGNhBZGyY9a3xeiXYjj9K3rSJnGtYdKhovr",
  "key24": "2eKi5m4BKYuSzP8ziDh7Ko93qreGagzBefPjZtNwe23VV4z74Sa5SwmJr5WT7TmGcgjngVep9WGp7FiLkpqnAuT3",
  "key25": "2HmasDjwg5j6n8DRhuSqztV92DWu7tCHTozUAagW3NZbM6zEZbZ6JWZEjpeDg6TiAAfEyfYX43LLPd9CWBR5yhPR",
  "key26": "Y1WvZvLEvzxT2jBXd6G3QoUoNYybzXaRnV3dQhH17pzTPdjuYhbNr8cN6QPLyzaCPv4BS93RNNyVErZAoZqgGWF",
  "key27": "xsyyDiQiV8qU61FaSmJbPaD748KbLGYctkUx3hJeKt6HqFtfuphwfGbk4PGd4kKE3kd38siM1hQPw8fRPJLc3UV",
  "key28": "ubPqePkRN2Tg1rVA7ACg7hoSL49gUco7UVvadrvQXWg7x1s2oiGSMTfPfDHGbqx8QutQACEi7ofy1KsHAy6r84c"
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
