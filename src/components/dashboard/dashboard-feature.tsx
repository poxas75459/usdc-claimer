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
    "44tygLp5WnNku3fjWoCxxq2FvFyPAGcviKGDpJJ9Pp7qPtgdaCZJmeTviLyjgmEQ8rnDQgdQDDSR7TPqoDZfGghy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286QagjxdVE26Q1vtHubUGhoUXGV4zYL362VP75FmUkstc2Pp5aqpUEj8hQyCkZNWYtTisEcQsnPAmDuV8eE9WQ4",
  "key1": "346jCTgqRh2pxQ6dgvjTAJwQUwYdP8iaYoqVFZAQhHg4g33HZCf8U158EokFhT5LYhALHi8dwaD1Tv1h1VdnuMG2",
  "key2": "5KjToMpRhSVA46B9es2JeYUCrLfQTQigxx9mjTLHivUe1HTAJu55yihqaZaVbiuPDit9EuSfNNUVyg9NrgnGsfTY",
  "key3": "B1oM8ncFPnTXBPs8sG7yva55Enkrx2mGDTfzap8gUBjmQdAWJntP3LnJPHxoVeLmEPfAWBj9Fe9wYGEE7jYuGo3",
  "key4": "Taz7ZMLV9iy2wgyDvGzmkxKkF29D9EWcb2bNqBP2Dr1tibf1K34w5J1TikzrTvSY6JccBq9yK2innjNqjpikuAy",
  "key5": "Cc18zGe4yKbdvcQJ9a75FxBKKDNNg3g5zVRX9WFwcZKorAQ1RrBSZwzC7qp9QmbkqRFGRHeZnr2XpJ3QVN9mUgY",
  "key6": "3bWhxymx2pU45XHNi7QSJDRPg8nnqgPPdh2cXgukkJ8HMAvukMrXavxRkXP3Vc6TgK3Zhki9cB7Wx3ao1qcNTPqf",
  "key7": "4BC4ALmgYMbdfMse4DkZ6fqxfBub3ijbMMNBtBYQfkN61dMYg7tmhya4NuSpiYtBqPvMhaB8Y9YCYhj4Ugh3J75S",
  "key8": "5TD6L2wAroMY12tRyXnu27NnAuVAse4LFYW1o9DQp7ENLBTKnq1GgRPyGXkUJxqhcbkyux7E2v6wyJjEu4cX1NJ6",
  "key9": "WgsWHLp7oYeg9o5hbVXgVVDAp9arH9GAC32p3gnkxwq8dYVU9W8RLHr4NNimcQ8h1NP19CUEmDXKqBaSRpUppJL",
  "key10": "22ihpr58Nm1BFHqHA77TagtWs18kfQakARMhNoN2HshNJhQz8P96D1RwaZAQrTnbynPQaoUC4ormSouz3jYLd5RD",
  "key11": "2hnupdCdy5jWFURfsit4Cssk3cBr3mGBFgmfPQUGMKkF5M1xS4Z9XGfsJ4PgYgNAzwZ1hhdeVsCydW1Q35ci9gMo",
  "key12": "DWRwH6NeNp3dE3mDxfjai9rhq8jkpvYQqGSdtnxuSfKY8azYR1AHkFQZYxHesuB2ApBu9CnQN3vtC8j2Z4ruio4",
  "key13": "4KiPru94ENPoHDaP9Qc3D1WS2mLQEj2Yp9Wuu4T38HPJoAtj32XkaBeMgKaR3JTjNUdpxeMV2FrQqgXz4CfrG3Ls",
  "key14": "3paGU7hspC6nYJWayXtPdKt8622RQGjcszpRXowpAHPyQVQy166EzCEDfcoNBMzXsaWo6iGMZSo92fKR5PNwc2zT",
  "key15": "61t1iB4JVefQvX3s2rqdkjCwLhDsXzBnUCzQv2SjVgGsJynhMSYmEp67BTZU3YNszqULFVGRopwGeQ2oixKvDGZN",
  "key16": "udPJCV4K3W5MApEVhtBzzB8zbar7hDVt6yTtB5ZjRwG1dMW1CoURmdpCg9Z443ve2tHZsScwM9RKa6KyKJ3aZLr",
  "key17": "2ac7bmY5cVaAjPRThSFkx5PMfzUFj2LQR6R3rRaCmLzvRGzq3Cicsz5ALPPwXhm5YuHNSqKby6deA4fiCXcsK9pQ",
  "key18": "2Mb8Gq7xrVFR6LqjGdyV2cGPJ3QXHQDt5YCqWG6EVdvFkAzdEUgZ7b4EkBSZJqf4DacVuXBoApoxqJm35GCPxP2H",
  "key19": "3U8v9VqQvTNBnAEamoQMB41ETKX73BpxsPSugJAM5M6i28Di4XKoCpcP1AZobG4HcrYxEpfmJQTRyxuSMWfrc7za",
  "key20": "2ThjgvmoQwpXu3o5sXJHPkeDdHzkhsqdHZ4kdUAhNLoxA6x5yx34fMuU1qGpLigMrvvajLcCzBGrhq9oq4pphNAu",
  "key21": "4XikZJoSjSjaiecdnqnpRqxtB3tkKaUK3YNWEfkJEeYZoPhrRRxdmg2p4BHE31bWUvuB87Qj3oPxnMsXZTvyAts2",
  "key22": "61sERetGzqSPBVgSC8znwMyVg2AG6jcw8jwsqxChh5noBvxSvncuUDf2nxvNWK6WbRi8Si7Gce3uMhDMyVXKZJGC",
  "key23": "4s2PRmASitzkBKQMKATQd7y762tdXZhZGEGvmU8iatxvp8EMWwFSujjK6AN6JkyGumAtPUomsozANacCDodkXYGe",
  "key24": "2eobSXmGws8M2jvss5t1HrT5D1L1rVCsty721s6mfYsa9swf1UujtLVBPnBZJT9zspK5pqyG4X9Ta2YSisAZS9tS",
  "key25": "61iUJ4REnW9Ycu9zeCQWLKcif7HfSHBFnSnBDGiztr1JWs4nEBYp2Cwh1RnuXQWSaf33TMJQYz8vCzXExceW7xQZ",
  "key26": "2itorf8DsSc5NHUbrUqCa24CwLXvD6sM7yTtWEUT198ADWcwV4SXhRt7k1EZrGbDcPdPXcC9T8w6zXGkR4hXQ9kG",
  "key27": "4VURTFXB92Ss12Cj7czjNbTLLZ5nL7rcS5mpRcVgb6bSpyeZ6iKizZPLAgUwSvDkRwd14bM2GhN8ayaMSjDk6rwM",
  "key28": "4S6XoPfyjFpuFoMpFHQKUT37FNbDWfojRQzmxHr5HMmYdkeFNatp2Fv37kD55ApGdsJGbqpEfvWsuUZ1Myh9ER4j",
  "key29": "4zToSrDozpt7E6B1d1UrUoCjgaRQeiZ55MCZMibQ2UjQ2bK5eY7cwbAnYnfgLMBmrHXLJrGUqKsomZNfH8r2mjV7"
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
