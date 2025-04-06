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
    "3k2fmygxW8z85kME8L2VEYBCwcSwbHP7mirUp7nsh33MvZ5MuxhTxXveDZUdb5ZfEm5v5RNDh97GZsJYTBbS4rd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKpNxxiYPjhiQqx3qPGjcboK61b88355pknVib2FgSbsJ5vh5kVcgZiTTGVmhGwesjkX6zAoyUKTmonWHQ8MtFA",
  "key1": "49gwDK6AuWfhTEkCceqhgxwb3cBDQFYRZamJMJF1631sNaFgEECqmSYoypfzcGj9C2GsfQBvGpRbs3EWCu72sfWH",
  "key2": "4TvFCQkWCYXzyJXTFDaN2BjNsaByye8sM9iU8cGNdxFJFmBYqYA3vRktii5eDXNqvWpSTX5qJtxkcvti3psBMGuC",
  "key3": "zbNSoLiefPJ8Rm84dSEs1mr99nfiVNSi8ghCZKDoChZdd98EXXtrGLuBG7sGGRRZGsDtkWUMFrZiZRg3atTxKnA",
  "key4": "eSyx4ruK8j3W9AzswhFhMJxQbnYurG52hVueBncL1DUnE3RFbYcQBsjsNhTbaGpjVEdSq9udqHmjvhL7YQ3y15C",
  "key5": "f3FVUb9zHidfyPeUgxp8bZmcqGeuLkrXsQzrKfZQHz71xmab9tJ6dXXvJ3FzFcEQyrd5ExYepUsa4NGKhFCTRzu",
  "key6": "3vckwiWiWTDojMP3JVyCTxVGQ1C8ZuEJxEh38QZq2MaYouYsp3VymiVBiEE1zYL1kshmtxDvgmUCvmSJzzXVUNWG",
  "key7": "2XJYgpvVFsYxdiJhX3eDejaKCkxwDhuFi8zmxBFDiu1VEkMDNmoiNkU6U6aTNvcajuFqRs7mVH8PdvwEwcBdk3Qa",
  "key8": "4HXq4ADFotm44nJNg5iRLX8yjYzGewSumQEfj19v3RQXAbEBSRJDG3kA7RMPRAD4AH1jrL2GJsPhMSU9XyGg56Tn",
  "key9": "fd1g2WJg7QuSVFs7PvGZ9Ecuke2XERSMak7t3xxNrSMWYHTK3j7vN7osCjHMRhyYYhWwSmCgmWYiN2f8CRLJAMg",
  "key10": "56R4RFQkFZmF46vWhHTpqK6PjdxvtBRHY8SKKoxpmXtBdhwqxBVTJWgaMzwu2LwW3y9dsNe359kSAy6RGtdwWAT7",
  "key11": "2KybLShk2ozTrLtSrq1kSp6YJNMbin5gDSiLSzdzkTuvd9gztgG4cDgLta3H7ATWbiKS125SaD2vLomxug6FUnAe",
  "key12": "wmRyb4DRUqD2B84kFmPGsiTNsMQDZjwhpuNirU5FzJc1E1tCiNFrmHwgoVNdJ3FPgkYzAaLPgNVSsq7qLUCTZrF",
  "key13": "4tsyNSkMs6JiWy29wrwzgRjFduTGGTgczGegiv2xQpZdnbqWbHFMAB7zgz3vJ2ErHigJUuXh45JaFyWY59wParF7",
  "key14": "3t33Pm74gPHn9TYX4ZZRyYm3ynxkChKstrmXooWoskKmuDtWnwSCE5DeTYfV9ekjrTsBsJavzHZpCK1zLqDgYm91",
  "key15": "4vDF8DL47Ry4YTN9qJsLpPKzs912nXcZYp3LeKBsKgYHXkN5834nXPa5EbKtJX3sTAhNXkdzzUTe72UkqeqUhtYQ",
  "key16": "nuBGQXsKN1QCxUfCVqk31aeSALidT4UHbkVonwgufuEBDyhY9eTVJ4xjzS2DvLAS4DHcnoRUspp79r8Kth8R5ar",
  "key17": "2efT67HegFAfoEmhdmNUg7JrwJH4Hq3Qrp7YDeXwSGS4yAeXXp8wAeNRVPx1CdppMr7pZpGQDqyDpnoYmi1mttNt",
  "key18": "3D9CCJDBZHvS8BhdbdtJLbMFFMxf5yYZ3Ax8rbZYYEsJzykwb5SqWkNh4J1CdMCp4bPwgQybK7RXAotMTygvvTdY",
  "key19": "udF1VGX15Ugaz6hHeUNzvoVuhC3ba21rzxhAWrgYRYRLmvcyaVj1aJqAeGeE9nRa1MgA3sDEaxRv9kcC3yWPUVj",
  "key20": "2D7zufX8Xrda7DPAze5DWg2XDNt35b64akB5xVoDZKDQ3nqiYH6Cnn3d17dzBzZGjuFmHMecX8oHJeuuj8xg9QdU",
  "key21": "tARem6BYmm3DAx7NY4f82HUZUbbwXKmNU5Z9BuCcQWyUjaHUNvs5GjuhbibWX8BA2oAiNyDW3V9sZm6qMK289R6",
  "key22": "54z8wZhPxyKDJmH1Ds7Com2XnFB7UZkGHMHU6LZSP6ydrQk5LsngK4HdVvjCHjTR9S2Bqox76vKLZDgV6swn9tyN",
  "key23": "2U4vBLxKQL3PHQkYa9yyLgpte9kcBF1PzkvuH5aCMnwb5toTXP4WDM8inC8QM7jPNE9su4KdyL2B97i5ox7GyZwX",
  "key24": "2e2DwbC2zVa9q6mQm3VYZv5Y395Ls4YhG37jzVBk7YQohLdTE42F6GiccCGZjw4cP2mauH2Po7Rr1Q166dSaUyoK",
  "key25": "4TFqpsU4iPMzo31qNCCYgcmGi3y4Wkn3GHKfevmYXLMAApFwpaZzBjDSPaJJv7uhCg3VRFjuyimQH7Di1ptXx2T3"
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
