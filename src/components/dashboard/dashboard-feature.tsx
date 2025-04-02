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
    "43BnYZ6b2kWms2Acww6URsHmaGzo9dRHNqtH8C2RMKdnjstbbfKNtRwdCkBVydx2nizNZ1w2yNF1SiYVVssgc416"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WiYFVdPaDUDN2V61NZePZ2Urj4w7hj8KYkMwavfPff8zGic3kVggEs33zRKFkXNB3dwJ45XhrG1YCZ76vjeQLs9",
  "key1": "4e65584FeJqaocmVFFfVVYK3L3J98Zbkxd3Qcfw46SVh65dbxPFTYvo5yAwrjF2QiARUQAKzpguz7jDsmwYC4ZUH",
  "key2": "2E94rRwWszQh4ybGvSLs5zTEYMBXLTBCGFHnFnicXrN2rxt7WfZ3uP2vzwXYU8aSBgRsUP1Q7Fzwzz8AmdJUFhtq",
  "key3": "2Hkf24yPL89ceEWg51QTcJATV6M7NS2jX7KmFZMB13ohwMfvgCQZ1zbquvK9RytaP2i8qK8qfXNs3Mj6vib5Y22z",
  "key4": "24ptHftvYkorzz1yKmDYjqf5JF1pJYWfkb7jxTmy1S9dw5HM4e6oKputgix47d3XrbSrYqYDeuBgqGP5dBHMQkKc",
  "key5": "36NQuw25CBGamUuB3JrAafVsHKVyKH6FUqmUv2NrtkLnW6U7y1dJAKPBLEzdU3bLhvzMzy8MUaF1hHbf87WAxWLA",
  "key6": "xDomf7K58mfbUx5Sgy9ZH8K1PatdiGqCx3LVc65rntYQewYF8r3hkKoGUJQNcjZJQHkXSfFaZrKk6Gjv6KunpBX",
  "key7": "2aYrtTR23nngXm214T7jkC5xGyAxYYdfGrEii254oHAK1u2ZhMXNC4s7Dx1LspqhdQxTrSthrGBSPYvSX2Ahcufd",
  "key8": "5bDCL7vqJbh5fLw6QUb186w88jQ2FPTKTeJK7eX6kbbvWGQVJ7vpXa6cbm1dWVqaHdPqPfSCi8xtUzpu55itCptu",
  "key9": "58roW2zk7LKKpBNSJqaqFevJT8xaZZ5HoFWLJjBf3vLY9FQZFRsUbvbyCJNxcL6hnfXXgCQ6TYoSJB33odg7i2Du",
  "key10": "4KXJNEfBSaDzxhudEggvctcWVN5DDiRasSawqnQFfpKMrMmVtB1xhNMASucFWyVc7wvwTMNJzkN4rmaAdU6tNCvv",
  "key11": "qF3uJoB9a3hp7kPDT57gXphSSNJ9oDWK7viQUbDVf3QmPaqxkiAcPFe9DQpY3JawpXWApLFcYezw9v9b3bJ4jTJ",
  "key12": "5xM2oGE1GF7KRGKyhdUx2ADxWhwnbWTUS8hSoX3UYvAC1jtS65UroVudtRuPeBgFRFhoTwTqCi851gF1jwGMmL1M",
  "key13": "3yiQaW2zssB9k2NdaXyGaQDx9tCnZD9DHGHS5uDGkTrxKzTWTbujid9S9dP2cfx5hnjnrG13ST9QedpqRuGWfj5Y",
  "key14": "5mQPU8S8VmdKwVWcq6UP6QuaQ6MN3Jjiuvi3RgwTBrGYpjPokqN5pqgyncQAnrq1V64viSCHydVQ93WAY2PRt48H",
  "key15": "28rpugxw4mpovHRcqXiFNPubegfEr3LTdoUHi7TKXB7yGQjxBWZ4KZ2eEuAYaVhdJNC6VdZKtaKnnPWcwgUF8faM",
  "key16": "2Txn9u8sX2d3ZNiVfQRgXHo5xJJPKGXVX9faxxC1sZtUsmDkVCh8UDd33EcWZQxXFT3JYtefBK36neKcAP4ZEJtn",
  "key17": "4yntWKTPXQoNAHBsNMLoCcUheBpBF21ernLfjuGAYiR1ucUiaPQQaeymFnUtuwbuqcut1E6x6kurFz8geydvjTDT",
  "key18": "391sf9ALbUW7qEuxEcaQ8gd924qLMyrChh49dn4X9wG9J4QZhJpMkncvJzrJnSMKBXZBSmji7uCeUcMjWDwqk88U",
  "key19": "2vEBdzWxT4cqr24jFchp7K5n7ga4TpxjKfNxVPg8iRxzgKwLL5XXZT6bpjZWAhoGU9fM3X6yTzNcJGNKQEBpD2tr",
  "key20": "RJJcEWHyMQfYGnLruf7kCXw414SPoeauhotSQp7ypQ6qKBr9QwnA963SqRB8LySyQMXLjiSXdtVjgQw7dRsY2DM",
  "key21": "2jZWpCabhEwLEe8FwimT9sztQW6U4n458fXyAL3gL9v7yWfYEhURbDkYfJqAJvPJNDUA8KqjeyEzrrrfqi94MzqG",
  "key22": "129bhW28s2wEwBTQp2AqhqVwmhCi63WN8vcnqtevXyyW4qGCGCiv5VqyGQwapRuxQxyQmtfit1RUvM4wx3MzKv7S",
  "key23": "4JdAY55WJ2oq2XPyefwGeWrCYwrLZKGyp1TfuXfo2PY2TkvQcbagzXJubK39vyavDxR7aF8cztazCNgVHZJMesXQ",
  "key24": "5M3NrBFaFPbDAB6oCyVKgquxyNDk7YZmkBvUCMaxeL6JvsKPGBNTFTpUHQAbVNwdqTuzsjjAbiWz6Xf35oKn2wBY",
  "key25": "46bhBgvXLJ3gdM39efPswsf9SKvXEGQjK98bjmaNqec2r8t7WFU5G4r7T3iF53cjoNEL7TGG2vXFRwykCo9hqLdC",
  "key26": "4Z6hr3HDazuV8DbtrHcbHRePTPr4pV1VgaDEhkqVBfyMukudKikPwRkeM769siUTw7ke4w2GhWQEWnyNPKQVQoQ9",
  "key27": "3ezVsfVdKMfwti3vM4b8K3Uf6hiinmYCCdys3mhwBpxRgP6PBD6JnGAXGKJB2N8tKEQVWvF7G4BBFfg7KxXB7Z25"
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
