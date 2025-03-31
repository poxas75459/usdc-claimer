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
    "6arCisPo3AnQu1rwAGUG4t3j7GUGEWSFn4eB75H2FWA4NxwjHSG1sdTEauNUzaZsPC7tHLqqT4YoQYiX5JZ4UQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57PjYBNtW7KanEe9dTnXLMWtsLzFcPQykTySHSxHUuHPh3m4uzi9vBoYAKLuyBob7BpsfDzoA9A88ZWPpy3CuFVR",
  "key1": "2v3pq2TAP79jNdavk3dzikbuWG1bbVVxYT2UFtXjrZF9c4guX6VSLonw7tkWMWDk88toggqFLJ5jHPP7SQCa8Ss3",
  "key2": "5CasSJ9pFRQ5DLPAQnPNxjk45ExpwypVWRMM7KfvwzoZPWg4CMcgusRETiYWtpuuxrRufE8tzyPDV5j9SpiAS4ka",
  "key3": "4GNEVepDGNJMXhAXib4ZhTj7Qyb1X3PQ11vdwHU2qCbPExEavzEMAk3bTWJimGDWm5jpRiPoBCGjH4cp34mmwUvP",
  "key4": "39U9rFioi9D6nJ7MizhdRsstG53okymkoX1XCdGgqJtEdzV4VbMhdGWeYvruR6TF5VMh95SBoMab86mSJNhravA2",
  "key5": "5KfapejyyXQqVbUMZ9yWcrmZj76mkDZPZJhWzVMTYZbHR9dezyt7UYGnzpdAR4M7tXSKoGdcm6ddVEpDmcJ3Xq8o",
  "key6": "tsLismpCbiCPDrZHbW8vccgBq9Yazd4u9prfWDUBsRFQdW4VXXKBaHa7jrmu3fJXpa9F8EKyr5ZLJvhWA2dyzAS",
  "key7": "4wAnqwrKXNU5c82TMWf32pL1Qxp1TTonkSRv4qAnQ2E9MXHFfM28FD5XQ4R8U4FMaCrDpM3o7xCrQntLCUEaqDVY",
  "key8": "WHu8DkG2CJ6rzFnNvZjCJ2feETAsZGLXjPoBN6idpzvJrCp452HiDypdyW66K4k37f3nyGEyzWFUv3jUVW6cQRp",
  "key9": "2xb1BD7F9g16YgVmJjrHqYRVNhxxXWpBEcNcM1rnkYQczWZ1uLL4obhguS65CUyTTdeXufvwuymJ5hJi8RbUsMkZ",
  "key10": "3i19WBfgXuPAjzek1XRFGjdkfx1pMjecr2cm6no5AreA6T28SYKCjJ5yHwZsskdMrBzT8cBDNMZnBXyrx7sQ25sk",
  "key11": "5fjRqPttuRxzUNQekEik7CDuXKo72nnSUE3q7D2UdJNC8ndPTjvfiL7H33fyS1A6pQ8oXo3599Z1Cd7xAUjwWECX",
  "key12": "3m17ZtCqyBz5ZV13R6kFGZ7bod4BHA4e1cBoums2tn9GKT74TX4jU6k5KapyQYXH1PKRzLx1KPJuTdy88eAhx6KC",
  "key13": "2oAFVKxkEpzE2dJ83bMpUTqBGGs38LE7szacJcMiCxbwVLDdJFqugFPfB6mnkvkPHcbU7BJEQD5KDro9JQUvSRuf",
  "key14": "4wHD5iSt3bPqK9tTBVD26tzUwaxcPhMEdHQXKX9NQRZGnH2Z1sWLnCYLUUMxg63mCfJeFnr9D7fsGKan3UQvftv1",
  "key15": "cuKb7MCHabUM4ueTiuzdmeSYW5U2UfC6Nth4Kfs3s7j5Bbx37KLDT6goi7Pg3dkuXbKC63UY5SovLMrrgntc7iz",
  "key16": "4wDXVmfGXcJKxc6ob7mnNr1xZGpzJp4FpXDUgaBJjWynXeQTQHEeCYGPTQcJWiMyPiEDs2wGJvkz4cPG7FfpohYs",
  "key17": "676G6dm1fLGhfUg4LHZNR2WCHwvJzYbVzg4zLJjVWXpgUViUMBQUeRC1JdXH1taDepKsCR8fD88o3Zi3GhLKaLBv",
  "key18": "2jpb9kFsmmZ99YByJHqzLaQTC6FXNHowXN5CXNhf1PK58rYnUsCU26wFALUFs8yW86N8tc8UDh8qu1BRYh5tsyde",
  "key19": "4WhL8MNahtSnFvyYjb4rtYYQLx2zZhbbmFkm9rVtd1nzKexmEVYCNjZNFsGBU9VEgN1SXm4oBwn1TaEyj7k98Qx4",
  "key20": "Fse497S2BsAeZE6omh32ZH1o2TydsiuXe7TXcNoFQyEuT2B6v2NzedPWqV14Hjrf8qREWEeggR1tuenteu5Wcpo",
  "key21": "dvEnkQh74dqj6UK23vzTQ6sdavdXhZneHzqRGBz3qYGAzTZgMXXGDgrHSwExKGRR4zHgVpuY8sGB2bXDytYTNQe",
  "key22": "3Gmr3kx567Wkgsc9bNFeCmA3K5qTHNtXVSpYhEtdjxjMV5BUuXt3D5hdRTU7Hw4x3uQUGZ7wsdnDKSpPyB1kQALM",
  "key23": "64VQKmGC153g5FxFZTzwgJ8Khg2sJ2PuXDUpApGCtaopHepjnzMbF11C3kLofrbLxQjLLC1HS5JBDPfHNrxwanmE",
  "key24": "3uW1mrzAPNDoNUZTQoTRrWE8CWoVD6U75bQpf8Dx5jU1hbgiSKSwsn5LbsAzo89s7Ua5YDt1ZTxEgVKA5wqNdwav",
  "key25": "3UNtVZtZ98JBKYTYp9Cv6vBiwzhBtAhuYfWwcPsjLMdMCZuZBw59LdUpAVAVGug7vFHnTKQmgLzZUhhCrWLwXWdQ",
  "key26": "bdqroTLzUrJwcMsiYW33ivFF16x5mzz7FTk4uNs4SdfGbXLPDbV96EzKnr74zV6RtE7wiaTfKpQFK2ZerBgrEUG",
  "key27": "5LVKxSYk4rfgVPAWCevVRpgHriQpYerG5bztoTtbi9VTQkJGd3Xn9fPMuoDb5enauDx9BfF4m91Rw48iC9tZxx2a",
  "key28": "z856zRVAaeRaFTAuJUXStkJgHRT8rbFpp1topwr5zuEde9HLmRkvrZLheB8U9ZNZannmFDrdtMsK14yM3v9GQ4z",
  "key29": "5iR5ru1phZdHgtv1YqSUFc48CPs5sudPpfKTA2RpZPiiapE88CXHzPusTEXsW7qWRv1XD61HrLMaDcxhFTs4JM33",
  "key30": "2cdyPyb6ANAesqcp5zbiMXHeZRcdYyVSyMsLDzFU1wAz5wY3Z4AjxJgeWZLv2pJsmYL5Hmjkxktfmp56Yk6gndA4",
  "key31": "4WaQ8xbPDyqqu8rg4iHDoT6Uk129xW5f7oW7YNUp9Q1wtfghWruoKasza7y56HQNLDJcd6yg4u3GtyQR1TrKZDFS"
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
