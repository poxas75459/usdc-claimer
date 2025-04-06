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
    "2GM8n2rTHrojL9JLKQSNzeXzgL3Kx4GvGUAFA2A3WV7ekCFj5SrvYM2433uTFUUfCDJzTcXkJ6WxsJzDuNa6CyXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Uc83dWKgAP7DRdUpwQJEVZRvwYbTxT1eGkDcGSVKbhST4YcJ1WH1sebfUXrxfFG2Fke8yAk48EB6sLDQ3XZeEA",
  "key1": "2e4cUsDsfKjW2HjcvEFmn7N5A6AgwuArAdEK9YQjX7eYPyHf24GA89sChDys9CQ34mWf1XvieckZYUAWShnSBGjs",
  "key2": "2rTLPqS2d6y9yEQt4aT4UP3DMANscsMtTdCTzrpWdcgeTgoiXYwN7SosoUxzKgqC6gv87iJC1JciBPZDikKPvAYd",
  "key3": "4oKhaQUcXdLnbfBiDEskcrhtMURu17FLL9cpeSCA4wCsKDkkdQoQHs6wdNbkTHUEK3qWjZR2E1xj59mKDQDBjwrK",
  "key4": "tqstvMdrHQmbEcvmJFZgxhDVDaDnkLFGvp6oVhVSwwQrCg1ddBjUbFaBYuZdZ7ZkGETKbGLtTnjiPtpU5Dy36RJ",
  "key5": "5eJmEUdDtpZu5zhoocn6qVGttQPCAoZgqGwM5aW3wj1yZpQHTZAGL82Kg7bb7ep3BpdSoCsk7N841gdP5fQqzZ8z",
  "key6": "3VeMwcZSYR5p47hJN8e35rTkx146otDsETsu4qCYa82hH1B1djWG7v3EMjjYEWoBWc66MfLuqXjX1xrp8xan61oq",
  "key7": "5CY6A3Hi1Asa4GCktmEwkGuwJ6XiX6JTCKpKTfk9yjncJ29967cvbMXn21Pq82Y7Q4sShcceUEfwLhtkDshCWFzV",
  "key8": "3j8W538eCXGmnGRHRSnTo9h5azBCeaRYrvHy8kjNquQs33Jk4dogSwRuWNoT4JeVXeekerSuH81aVsNa2APWt8xH",
  "key9": "5T5qX1BP9w6or9ZDCMC7GuMfVsJjJt6BFNV7trxJkCBD8Zv4tzPGVAVj2uWGW2pjuhDrJ77JRVgWqLJUKroQxfrh",
  "key10": "3m2jzxtTgLAk7cxcvMGtfGYcdQipxQtAmamQpcHkK9QLd69nM1MNZdRH6rVN5FyYWMmzwxJb9pSBZcRPUdB8YSQ5",
  "key11": "4wgWUTKM6i6mHJv1Yvm4vyaqfLbKcjSED1aLg1ewBJeRwveUPySP4V1UqKRjQJpsPvgabS7mz4TxM4vgKQfXr6KU",
  "key12": "4pLpAmnaHtC8xYxpDQ67ugNHghbg8Y6DDFU5BjCnnv16g4Y9CwNMVQQRJubX2peep5XWrGSdYJ7pwcyFWoNMhWHc",
  "key13": "45gaqCa862SuAqsWNzg8aoRg6XXPETCrHvmmgno59sHf6UdHFgTmCwp3NJeDs66qmhEwxv5zWyERcvqi5N9eMoqb",
  "key14": "oVoWcXsEcDBwqGs7G2z1FxwoND3QpAp3DwyLwgGumVRM12vV1gtL74UjEwbFvR1smfGgnCT5Eh5hfQXEv8qWsyU",
  "key15": "56M4JB7k93ZCpBbGecVXQ6Q9yAucTh52phAPUvbYTq9R5aoB6E7TsTvevx7askY8VCs3LcmHRhLJdHiQutVcnwC8",
  "key16": "3CSw8bPC4r5knn4PxVbXxZm3XgLZEgMMzH5ZwRg7wmDZKFgjXwkUKy3WVKMrZ3vqcCVjML5RQ9dozGqQ6wxSyP3N",
  "key17": "mL2ZLe7LtTpz6CTJcNntXQbjBXqzyXxJCtKVJkMLa4LhDpEoGMnG8e8EirqfzbR8pnJeRGFF3CXLpm9As9sYRq6",
  "key18": "27zRF8QLNwYB3Kf3NtwRcoN8F2Q4isxYdEZ5nSJLRiNKoKPr8Ji7sNNu5QkMHayVjY1YPwJNX6QycArcWyxk1vNK",
  "key19": "5e1py7nVEm3mVJYSaqLJSvMumP5WkERfXcyA95SQsQCLkPr6vxBbfTg8WBZYdYcCZkHdx6bSx7ojXTMUEcuEvMMQ",
  "key20": "63zfuLrrGJo76M31jHbE863QM1m4nwT4LpgEPk5uWEE1ZSPovVUguKE2VW9mRtgTnQkkXtzEhPkTvkWvziRvR2LU",
  "key21": "59knFyvwEbygRXcYP1j5L3yi8hG2MVsK2zuqw6M8wwz5Ro3EZdPLJ32Nk1nfSwpmfrQujGJzGJah92e5RxMNswNr",
  "key22": "bspQmLjeH81tTSRWLekyEuirxCWmbE8n9CVw3yBNp1A8VHc9FQ91WiAnrL1JZkZw5U6yATGj9cvRmQaAjd32jvL",
  "key23": "2Jw2V2G96hty3RdcWdLnpBAc6qPEZCGF7KonbXYXGVrYLgwXyxTSaosvDfcjVWgYWbxN3Nkec3VSG3BaJAtMfrDY",
  "key24": "49FyFREPLQA3X6L3AzUKE5UJPj4reJPxcWdVnWk9S3Nv8p217FH5VmDgC5NYb4Pncpua4hNe6vnyFttFMMXesLGv",
  "key25": "393Tzz8VKaXAP2GEbuQr3QJcoUyLuWPECtrhyJdZ6bh1Rs21M1KPFw4BqmH9bM34FTtTbnD4YJLM9v1aXowK4cyB",
  "key26": "RefAmZGoWmFgXFPYfM1R1epRA1Zsr9buiZaaq36xymb1piPAnhT6hSf1pN2VQymXgytS4M6eozNX96JSMrAKvh7",
  "key27": "2kuTNftM78mmVyTyc54LDDDECVCnkbCDSsQCxxtnQRrX8vNq7dTq4WmbBd8kgAqfziLB31dsSiQCPPzuiWwH9586",
  "key28": "4cTGS6P6C9N8HCJuj3YR2hJenf7QUGWSPjJqGJrCss3g8zSbRtVFTyfSAryd2xgpDCuu3GEL1p9a58EMLZsxNe5S",
  "key29": "4uFJ3yuPmvPmWTYmJMYdBNmMBQcnFUFJFoaCztQkep7camr8pFFwRJh2KF3Cefjqfu4bRuEbsJm55w7y6fthw17t",
  "key30": "8h81smpNptBByF8qTMaTKB95fEkr9XhYkb62xCqZixvrAMuQLH4CQYqXvmFnUJyPmb7drufknJVuV8QXkcEPdXk"
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
