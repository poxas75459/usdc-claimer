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
    "22LGZyXd3pbZ19YBvU8xtpgkNayvB8FMqbqwBoRiG6kE36252hQCSRqz1ErYhNsgEMmqXJCF5uUaD8ZitNqz1da4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43T6u94iBaDbpQbNcoCE93HBR1mgPhsXcb1FqCXSferpuhCH2ER3N53Hj1et3knVMYJrPAMQ2rnC6gfGrBxtFwMD",
  "key1": "2vHA74cdhi96rSSuttCjHUratDShs5ZgsrPQjQxtw51notKU6DVVmhusqm36TSn2T58TjddKAEMHY6qK8odydepx",
  "key2": "3YRBAijSRoVUExjDWKVmLX5U4PKBJPVJ6JSpTQJKT75BU8oM45dB9DxxFj1JVQoxpntGK3Zein5LUuCLmcUzSqD4",
  "key3": "3WXfJF1q4jbEJjxjPCLwAnyKZTRpJh6Xc4FEenBfz8NyxHcJapXDsxGvHLj5EYchzAvmc3nL5K8H8rvcJgN5pVnT",
  "key4": "24ironUott1WEic5ivQ1t6bgYT9Aw254XjstBa3o95NxHqDJwFRobZFXa3DRdEQUfzKnCUXELUGjdfs4kty3XxdH",
  "key5": "2Xg4ahsjPKvP19QtNyq6DyotNxvwMZcMnYYjkDZKEjFN6VmQuAQmzYgybgbdzMPRdJ8ifQakAfG2ikFHmpdsAxyv",
  "key6": "3Y41vRHnQm5RVcATrYkvogS8NkoN1DESFfYvPZ9iBNHdMreQwZVMbbNfVZGyMCUfcX4fMFvXpqiBvZ3znYYiiqgF",
  "key7": "4kjgBYM9mhZstDsg4Y4qJC769eyHYDoiV5fJcMt23kfev1UiqyoAdBJL8pbAYq9A6xhB9Cz8g5m89h5D4vEg67FE",
  "key8": "5ST8nrkFh1zuHu2bEPNxoizEwVnhCZureir4UfTEXtxTsNyJ2gQc35woFnZjtpPf7vDBcJX2vDy4wMcrCpy1UHeR",
  "key9": "2a7QtHm2P16ottYTWvLbn5WsbMScQGCuHbQN4w48kujgfUh1zYYVfTt95d8nRqGS3nHZ3hpfHvX9y4iFhE6PZvo2",
  "key10": "33LJN5UJoCQ2q49CsEAXU9uDoyp6kzQ6kvAKnJY2XrVK7jHD8t9qUTpeUEwXR7fartXMZCAc27gsrFDnTcQKeY8W",
  "key11": "2dze6V1Rv7sBjkF6joWDuEuNRWnjVzRdQqrC5cbZchMZfsUSSCo3QQrfWnge1BpvfE7xXqAypzRycbH3DKVzWPF2",
  "key12": "3encRodzbec2ivgEgbJDpHPvbHSMr8E8dZDZu3XPN3fR5ULNCopH5DZsEpZf5N7jDdWDhJpJWEmkWuCAUNrEpVCC",
  "key13": "5XYbWfY1CwyQhTfdeV1yiwsEJkRS2q2MFQkoMXo5MjtPtkTQ6Xuxrob46Lrwgm7DN2qZ8MQGB5Gd8JqF1xg3uJhn",
  "key14": "4v1VpM2JcB3GLksJpLNj8GhDxb6pt7S7JA7bmmoR8XCXtQGKayi4ZnhudNWuYv9oGsPYEcs71DMwtuPvKQaYmzzw",
  "key15": "2deGS4oaBRWhkTjnEBpYKNg3wyd64L4hwzfTXjTZCSNeq4j8tjxws3ffe3FxkqSjR3NLj1QCNpXt8eKesqz9hNy8",
  "key16": "5F51N8r25nex7oTKtNMuXvcHc6SHRDk1bEAHas23PFkpt6ZimCsmFvpcn4ePQyQ9C1WKMAi5o1awdv5GRet1sZYt",
  "key17": "3PQ5kFrEps1XWvCNjye5GJekJRvemLKrjZoFeedkv7TUf5EQSPsiwsX9x8TRGx3GsvVfwDCRm8RDENAppnkvxo8",
  "key18": "59eg51Auc5cNX71SZsVAFscLNq4pMRGUusdKCgryF7768mGSHg6bpGNPxTCHvPhmsgiHfZ4RTBGx7d6ruTkorkuy",
  "key19": "2pYu8GULbLitpFmAUvFaiJnkZK1yFopmABSMtbqjnADoiLNJbdwv9vbTitLqrrTX9D1Nru2TSccndVbpuV1cUgtk",
  "key20": "4BdKE5GAMK1BnVxa9Xb2xfjuXvRw4f8LkPyCRh9yDmBF65nN2REXQCHutNncJ5JX8HoAryvnGmVZAz7adZb8XV7v",
  "key21": "5QpmMWkvCg6vQpwer7Lito45yVSg2sBC8uqY6VcYu6gzU6Zt7k8N49fDgkNVcCcKse6txzSNXsZycLBkcj21BLwg",
  "key22": "2tpNRN3nLe3jUinQcc2kBvAWdZM7BJxik2N38UM6ohXjBT4iDxsUfBKcyLXbtRekbwaZLkmpHAXMJwZoNshRzkkE",
  "key23": "3ZzXEZVLUmuTrsJCp9mUhXDAg577dtD2coZa8dWKzScC5Z4BUizhZ7eUxJqf7X3irX6Ztnx2nMVq1oT5hUDvvnoa",
  "key24": "2aYg4bac62AhWumdr2QGSL3FG1114AHVyvx5HXdysK3ifNH8tNxNoiyJNRyVUTUfACkcvGH7RcozLjWFaLWuugMr",
  "key25": "3eVw7uX1xAmeQtjDWhmQywx85xUgd3xMT1Tpy9TxUSCFcuo76DiZZBwDLpt8S9hXkB27nwhG7r9jHG9N35Pd2gN6",
  "key26": "3Mu9xDNCs84ez5ix5eJ4x4T8f7xc42Q2ou3Fxd4tZm58hNG91YWpgbzGnBy8QrTiYtRV4MWFmcsoGz4cQzwwcHJH",
  "key27": "2UasZFcHEVEJb9iu31XmbH7MTHbQtgBnCqwgtRBhtpLiBePsoYXKj6JdePJG4KLGfLwR67cFdCKMCR4WHPG6EZXo",
  "key28": "3wrHe83uGWWrKrPKZ5fAjjRuw36HwzAxbuq2nuxyZQBAZT7Q5iRye1GuqErmo2XcyqdDTzbzTYtYPdC8ZZqPEdg8",
  "key29": "4tMTLKuf56GuVPVKegEDcrNBx42axQeAKHxJxRQikW8qHzzXUp1axyzu2VNvoL345qf7awvivgRCcEqfJVsL3TEw",
  "key30": "5RFGxUGaAmiiM3W2N2q5hBBjzYZPPPihvPCAhy9BQWeoBUNoG6wujpBwDXToWyfCaqLYU8sCiVJtBJ2aUNC7xsEg",
  "key31": "xrCAn7vg8cKD1cdEvPcfHHWRiVPupHvWgBncA9o9Ff2z6XLTPrmsVsmGG1RWNr9KdU4JhgTHB61Mf8j3dSYx7xF"
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
