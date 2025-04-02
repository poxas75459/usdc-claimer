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
    "2wkgN298Ga7MMcxWoEjjhgu7yPdJqw9HVBkYLHqQoLRrLbED75xe1E7zq4vhVVzj6DG761Z4E8pB7FFjDRvqdquU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MtF4tDLSuiAtrktMjdGK5KQZm4BsY6gHsqekN6iV8vyuU3xrNoNPc1XbFmtusW3vXRyL4CQqF65itxkRbBgBdwV",
  "key1": "22zkoVvmUoxnzgK2XkzbmQLtAM5WfFwDbgYCMgYox1Tte44fhsB3FbM9cPVfGCmYP4NrpvNvKcWbfowGLhVdquKm",
  "key2": "352cv4nSuijX4rGjPGSjL2USW7BnjasJ3j2DkD2pQ3QP2HJzc7TtuU1eXCKyqBABj1pbho1kMBYaRmc9RQAbsEZU",
  "key3": "4z7fSNrQAtq71EMox9hCij23cocAUnaVvLU7Um3AdKnN3ypARDRn6j6Y2YQ2p5BeERmYpd212QPBouJyS6R9SzNP",
  "key4": "3kMVDu6BsyuGd2Jx42DzmbB2GbUEhypExYV5t6x8Eaw3AhF2kztLVFQENE5pKXwYX5CQtcVWS7MNrQE51TERuuax",
  "key5": "5cuSHoHKExahCadNhDTj2t56GFDcZsZFNPze3snQrVbpdeHU2PRaRZRsLMUNhWdwySaJEovoqwCuhmM8nP9bKPaA",
  "key6": "33eKB2HwtoubjubrxuV3oRpLSFr47qCRnE9FEKrZKdRXk9dM4M775Y9xzbUMwbcmxZAWisXcPLqP7V7emujbdG49",
  "key7": "zgiMjNefFfum5S4XCDWSaVXuJ99Cm1wLLHM3HNrRfi3iJYfBd4PnTpZQJBBmztdmew3igGi7bUqp1KF9QtFQ2C5",
  "key8": "5KR8h53XjV24GYkUQUZgeY4QXovGLKiPhfoyvpFc5LeiAmLadcLjbM7NWz8CnN6VYftwL7J7AnFzjWrR5iFeU1jV",
  "key9": "Hq6jG7hN17QWL5zkMQQfusvzoVuUPrvcRnHArzXxcoa6Bf8mvtWgVuspuATvv8Tq8eRfbRXaL5g26aP3SUjV9K5",
  "key10": "58EDqPasMCk6dEF3SKGdi4H6vAo3tr2ye24ef5eeMbKPJVRVa2Pb7PohNRC7LAjDYvQ8oaA4JcpjaGWUEMfPqjk7",
  "key11": "4cYBhcGLik3NhtJDjoKdiBqAL8VWbTRy7mVrUotKs8nnCa2KdN7ooXm3PwVvhhfeotZnMAZtDYHPNhWTTSWJ1bsZ",
  "key12": "wUTExmd6DMtNzWB3wQ7NQx9JxXJkuDWXbWPmcLXWi9uWcJ8CmNnVpZkJQRfADzSvAiBMFzzii24V7RYuRCWtTG8",
  "key13": "4G89TfRdDtRMrb2qYwcHSKDYqC1ybneVF6gPJfew53NbnzXfURUa3jMzJxMTYL8Vc9io8WU8MmZnnS4AMZmdcr6m",
  "key14": "2qYNyz8WAgASs3Q83Q8VZ5uWwd7gpnpp1gMQQgUkgyykCAGZREAN2SEVJHUepGEY5YdTdKwobynFPLn1ZXbTf2Dm",
  "key15": "43PQ6cB1jMjDEvT2AGpSa2ipXPtMGYu9pQJix62MRFGYYvH9Y43qUJx1NCgJNwrhoFepAuGWGsL5QkH7StVHVirj",
  "key16": "5L7tW7AUSQPKvYHRrxU9sudjwVq6xeC2LnLGeUe5omgV8bFzD5doaMtxFveyGXq2T6YJevGqRFd9FbeFjdH74zij",
  "key17": "VpabUKnw8nphBV9uKwSehksBj9P6sctuG7isyzYTSQhMEDugd9EthtDkyygoZdgA9DiRS932nbpRDdv76aagALF",
  "key18": "56eGipMeV1mAwQwP5AAaNX64rD2ZjxQC3d3Ydb7rovDs597JLzRpc9coJHV3gxpPQdyA7uNPAonooFVGMQxpeD3s",
  "key19": "2PbagFrzzerSVfUbLjQ11i2nwfV6cZUATsuXxf8288UviaBgkSpwDwQwBn6f4zJ3d8EBSWNbKatizYfAqB9hGoBm",
  "key20": "cQZih63PDJAuSRvTFY5NaM9ECzprvkXvBGJV9MzUC1QSAXuCweLSpN1pw1DRQJm5pi8JDYKvVkY8YBMjC4WEhcg",
  "key21": "45Pz5T9YjW6pbdKiQ8xNQg6XCsDKUNotKGKyRzh3AQzsrUEqKc3U4GEPb1XKFFLA1UPCbdQFY5Y839unzuwY3pt7",
  "key22": "5L5UgA1XTuhV8ZWrs9YAPEYJ5uchWuy6phnK2kpfvUpawgZr1q7vjsid1HRvEhymur2wqWuuZoEUhWi9SPUrpY8v",
  "key23": "5hW3VmD6vN4Y6FRnrYEZyUWgrqYsRhwJP4EDRJ1aoeTudir8JF5RWH2t68hjXTuPVq6Sky7HBGbtxdTq8cUJKYSL",
  "key24": "gUDPfGbcBHECuyepNhbrDwznh48ccqRXN5kJDX1djyKYcPCHP8DHuBBXsriW8vk4GtU9ZWdJxiQpBaNQbgxhKY7",
  "key25": "dTRBmjsXnVKdpMuoEJbkXtvPZpL1TcomaCNdgBFbAhp6HGjUb7R73QQX1qvNNKpvR2QBHKXWRSj9VkBPkkFWDkm",
  "key26": "4AVD4kmEQzr1i2bqBVAbC8XWVyRRY64JBzb2cgUUCqxDGUxjBmjx5jW3VVHQwJ9UKf5vXUrfDZR2Q3EF5Wqfk2Eb",
  "key27": "63QMZeqn4EqLfaJWs51kBrRSgwSMmzpCxWgkfKoZt1VhGHPkgGcjmLyrHgyxFrFLPbA2yqnkNPSGhkfBvhpZWzFA",
  "key28": "NR7Me5CYfuJojXaRekQrDWNnZVgdgu7tJqDaYxgvLrARixLMSdwVkz3S7dAXk5fTtQg49Gpvkdv3faCmg8DhAt5",
  "key29": "2YJQeuKuy4YwC3cT4az3CjEVxEoDHB5nVzJjp5khS5BtxSvENKsDaZMToDEob8dyeYWKg1BkF4FESwdzVssthr6G",
  "key30": "5P93iDXrT3un81htRCa14QCsLWmZb8LtyzZMhBvjuEVRfHMaxoNdCeLTL7TU2zTQYXL9Dedsm6KkMzko1HZ9ezcB",
  "key31": "2VEto6UswK2drpwMqDJCEoe6ugWL1u53gbo3JcQjJhHjineUpkT8pFgemmDiw5vvKv8EGHGee1o3rBNftCdipu7Y",
  "key32": "4uT22PF2oUXyncDBAwQgM6PTBxMShUoD3YV1H1hALWYp1TWGQciXQdPEcFKs3xbkR6MfzBTkD4gsdcuBfiRsqzaB"
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
