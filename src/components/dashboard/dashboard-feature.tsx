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
    "5Q2wgYssJG4PPxpGPEfXKePjTrRA79XDm18sYWbhLAaiT2MKWxNSd8XjwoPC4VEZwefbvb4ihbNiuwwC2hANx4ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCnYKb1EFAnGk9QcPDv69zw6t1Ly3V6LwfDcMbmGASxUCd9JZtP394k42SAHpGGkcmnhiF8TYxCkbJZAu6Z4UZv",
  "key1": "5eswC7iXTdU6FfE5s3knuNfZBETvEAkUEPWmHYAaytrcdX67jsNFEph5qZzrCqdaJF34TubXoL3rMfJCR5WUAd8t",
  "key2": "4bKoY4YCPaXwV8hjLrGvFmskuLvHoKT9gLHkZ2cZnKzEHzV7tSWCb8ryDUjdVZzDA61oXnYF5TPeEcRJaeBUM2Lp",
  "key3": "3ZDFW3Y7RdjvNEYq6SSWBCCELPwdJNt3qhaJG6TPCgchsG5Wxhvoh5yYRy2zdgrkH1bzhsVQX343xkGpezgJ22uZ",
  "key4": "66Kmt5fq8cLS5z6ZGkTNryM2hcPuHF9bt3habtki8dzdrQcSLP3SnUmUnJZ5oQ9VJrKPAASRZPABcirp4n2AQGzK",
  "key5": "4JVt1KzCwUNwnd4qtrwxJNghvReeB8ei4Adz5gMbPW32ixArtULoMMAdoUBKkKrBMkYwqRHKVbikgKi2z7mqMSRM",
  "key6": "5eWu9nWG91F7qDMCXcUwtLenRqEjjYANCKbve5YiMn3NkFMiE7hByPsRN8xo7qVWo5yq7fFJJbpQfYLmjj1pBRWE",
  "key7": "DWuNeMsMMNPioXSRaak2GAaT9ECySCC6ZfRAwmKSPSEjRTjPsSNspHRRhzLCRHnHAQ7S1WujtpyJgCyBxU1Q4uf",
  "key8": "2MVTArjhpdGcxBqTQsdLGCH1QtrDncspZxST9Fu1czxEeewb6dirrcvZUVhKsE1HGftfdbNVoqD3kxHpDXfXYruv",
  "key9": "4RSVSQNjecVyk2PVwqd6hCVj67uuB427i4V5D6VpUBRz1kzxJv2LGxD58RMJ7bXfWLzSgJ2s8YKXzVkpaBqgz2J2",
  "key10": "283QTjymoFwkL9tZAVDkeHkh6BwWet87Us6quxV3XNa1A3RLRYMaWF2Wg27BSYu6KpCPi68axVQR8JyyPG3kdym9",
  "key11": "UYZ2aAsqA1aWXCVEXTr4e6wpybdBLfugX2dpJbCBo4Asqc6TToauCDhR3vc6Tca69hRFqcALX9XjAsK57iCkWqB",
  "key12": "4pQ3G2JU8DWMbWzhiegxcLvZFBS3jERNVggt4QyMqtBWVFL6vuHdfDmNXPQ1tsYbFFREr2rhbyPD6ihAzDDUxeH",
  "key13": "33fEMcdPdgMhUxieLYGBJt2xdgGMx1gEcAZcKtWHpHNYEJbwgr4KFCv9ajN3h8e9gp4KA2QvKXKmDk7GG2uubtot",
  "key14": "5hbSsVbArhuZXScCBn7VmcucDwhhxV5rjFQFYp9pZEgfeJVTL1DWj5GpYNVHbbHAyvcFreTu99VwYq1pC2syTdor",
  "key15": "2JMok8rsjE81YS1zHLxHJqKQDDTWeVGqDmexnYGRbWommHqGCq6HfFH4jYi4P9CzAo8SQ8srbP6HbWdUVXU1ZDYx",
  "key16": "5bRbq2kEZYBgwRNZoVpqkXGSPTro4q5QfYhtCk6emxAtsvwjC7sRvWythQvXjadPqSZFN3naATxvPZvnKeeuRGwZ",
  "key17": "3oa2gdCvPHadL5dFLfV4Zb4gQhtV9ixNapgjEA93sAZTeCRzX8SjTJqzBt3tAktpZeyH8mzNKMxjWTnEdCgPdH2G",
  "key18": "4mNZBrUSPFUqVmh2Wze4cDVB3njRuAvQYg1bHBiiqt1AhN9awcYVat55WBw5reAxGVndvAdTSwbWa8JtByxU5Yu2",
  "key19": "8NgPQH4znC2hQAGdgeBRBnxBQkX8BAe5bY1ebD61DuLz96LNDbTwKUW62APYgcKzDwH2tpqtZAnvUjtjNVRQiqB",
  "key20": "4N3SawSPnrQFeYnPvbRJzpeuaKimpcFUWDhjrYDwz4x8prGLtARyNKCqdmQfBLhJbAPsayZTcUCwAo7uFbkYDxvb",
  "key21": "6K2ZBEdnNHourAGUKqzWCNP1w4g1DcLKLHz99BQMQucZmmD9mtwvBFsK57R3wTBfUjah9wC8MSWxwDZNc54epEb",
  "key22": "VVQ4AiB7JZUqTq1djat6exQ331j1AST8xE11HQdXKKcJFsqYrJL6QCFAazjzSzSfeCe2Qsr7qvSsziX1qHjeanx",
  "key23": "3hk38UTMXZAiLMS9EUmUy2b6nXLij6KroXiyoZuKd5D162TutyqfoFwF4gEVdw7wncomNLrv1ZWBqZFAhNRUDjz6",
  "key24": "YrT6WL2exm4YH9rnAfvkaRh8AaXFRC1FjNxAQb7UnjmAuyzHvQ27HqrSYvoaB1JyxspPy5NoJB1pVzKVGeiTvEQ",
  "key25": "ZWhkb4yKfnkiuz1y4c6FW8DB5ufExWZRnqHhSQJpoKQ3yPGhSu27Avt7h94TU6y8fxuKo9e3sd23C2azbmxVgud",
  "key26": "5KqsU3QEvqgvSiwXhFVRSCPW2LWWe6DT19JvYmTBD1QKsPyYR6UxCvS75NHCDikRaFNgfSBUoVtuAMaqxhBRmXBQ",
  "key27": "3K253YLkzAn3NQrAfsrgYGZG5YkW5BDJiXBJ6BsrQxS47sBbySZL3LBMyBsz94pP1fvRVVJaVewMsg5FkPvnuD1G",
  "key28": "3FdfVDEGda4LmJQviYFQKLLB5pNkevDk3TuX4hd7KmGcmHezZCuTZwAVbx3D7JvLC72WRvFgNnQoSUjhBRBBkwTp",
  "key29": "3ePyaJDXbVJtA8T7C2dRP8NK7nLW2boamzQYXnLaDs46Scs91rgZdiPg3z7ohwPXZYkUBGPHt7LtnHoy5gDocbw5"
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
