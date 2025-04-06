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
    "3xnvMKKFYyFh3RnAr2ahssXNxLs3Mzsw9mfT7uamZqRWBmAgxrj2QZssjaJgzEzSCusQqUkbXAjNK9gYi3HCc8nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yi6z9iZMndfaCGKY1E4uSQbgTrWAVEkXygE1LReFfBvejQu1zEUaWMkhzf3PUtzXXm2rmKd2JzTskRoLnZk4Mnq",
  "key1": "nPtMCBkSc3fv1a5yX7NbwzHz3tBjprMZQaYdV72iUVjwwWUqSRAVLt7gaxg6vpQctqvj3jPoXXStmAkourH5mpW",
  "key2": "3XsLkwDAuLs9jjJrA1AhCF4YND242cnL5HeGdnzVtdC9jE599nhdDoWJcztKLToHaE9E8bpUcecLvdcSk4bkVjEQ",
  "key3": "4D2eZBTro1w4Rw4Leu7k1tgfqskdVxHH5JgPbZVBRQzvASoKcTWi6a24mf35AMb8pbEwRi7kk3iAyGzgyYt1i31S",
  "key4": "2D7hWTiQagv5vuLmFTZyBZjr8mKZtfGXT8MCRpYQhdWWLQ1G7gGQaaxeU5bgD4ZmUnVkjo9b8ZEZs6tJzQwx7QoE",
  "key5": "3BuVjEUKF7rNvCGY89fnx5eSfQYmCFzQcKP4C6tQTRArUHDppTesHt8SPxhiM54jk5pXPvd1QxZTnRv9cT4W6jF3",
  "key6": "5HH1C4VwdE9goqd3pkdZUjPmGcL9suzm34zaZT4eutXo4c6ESvrJMTxKXrLtAZ7rVxwmdAELmJKuXJuxNktR1rog",
  "key7": "5swQ5mZTwpFtcekLXH4Y79cTJDRNwKAVk284RNJ7MwyzogbGtwkWGdtc23Q21f5R8VmWjwYn8SHe9gPnX7tWZmCV",
  "key8": "5Z8hkcYcjycoVjyyTp1XJ8UxCiWPNMoVqfUvYajWpH4k1nJi6QDrZx93YWTNn6tsTcV6bbKGWfchHjebT41YqeuV",
  "key9": "2LtJgbS2gnLhWdbCbgPKsMy57XGaFQcTEQTXQ4pQNMZwA3WacHbeUNoQLHTTSbTHb6jdoZT9p7mN6QW6n58Dfpdf",
  "key10": "5maXLtWEJrofMrnwW1ekGEXs4qHCwMpdqdeVmef6CENGm82anWCgaHY1AJ2E1thDbv7TQiKzKKatsyzMorCjcah6",
  "key11": "5aFCrzsQozRgGE5Kv1rtSrqDsrSe37M3SzpecXQ2RnYKHDqv8mY3Q1PZDZcYTPhJgyc9WHqbf3JdQ83uGAiZud39",
  "key12": "4kmFNtwbnmfCehVyK3wSHfrQBTZYeqWj7UhwjLPfCV5kBoa4n3Pz5SYtJnUSg852oQr3DBGJykZ8f6BDEVkFQXav",
  "key13": "45QtEb4Nexy6BmFn1gFSfg7XBcEJ4xZ5ZxXGrqT4Lm1arNtgXjbaDpTcHBwPqoEvDCkqgGACvdbHbbPfvreyQCWs",
  "key14": "5GTUpmPBk2TXSs3ENw5XodCvV4dQzwD9yj6Ep9ELzztjy2UTkGezAnWKUUqdp19hTaJXK1rvyai4RDPSNJQ7gKDn",
  "key15": "2jaYwSKgPwssqoHUFka5YKZvPiBmSUMbSQFjXdESAGjSJRiNqMqDLy1qEBQmQuptG3pucJyNVvbkKPdxpFMXZKZB",
  "key16": "2Qf8u8PBtqfVQ3vywpV8oNRnR7ciWLb54HdKsHtCTUFKn12DStK4ggHtB7f7iechnVna9EEgy4pVqFgyBxLeEQSn",
  "key17": "53KnUkZzD4QsFPNf4kt6GyRwE8efAzdQihVvCjPqUnRxy3TsJVb4vqase7RSB66AurZh49TAdCpB9s7q22Y45rXz",
  "key18": "cLz8Md91AepPGkgYfs6USxgJT4Pfye9T5RaYUMT4hgUdoYbGUPcQ255AotFvLfh4RGYTdTo74Z6z51qXZ67NfPi",
  "key19": "5svzGNXUenJAaPbPL47Pjs4AwEenZbgx7cbnvx8vmvTqvV5YrtzXYmBhHjW43TgkoosVRShGDDG4VyCLKr1BhxNk",
  "key20": "4W29LRvmLdckFb9MKPCYw21t47whjVZqQEcjPUdo9mRBmTioBL9nD1qgw6Sy5PuX18FKtZrBeFa2Zjb2VFMMzUpC",
  "key21": "58oJV8mMccf6jNpes5ZY2DPe8u159Q8RUXEzxebBaPWAurcQnJ9MfVH26izmYCVny2sdCF1NmwLKanGWGY4mZ6bv",
  "key22": "5PorskVFKrT9MDH1X8cpcCx6srn9Fvu5WsAs8F1v99DmFRd9gXBSH4eLfDHqZYPy2Ynec3GBqFHRPA7ZRr9FuPiT",
  "key23": "3BemLcnqVV3aCAuSDZvYuVEGoEEZiDuHaT8yLM8MGkvnaX7PxkjkZDpQcpaCmbTxR3UQo5jimzVaztcdKr5HpRJa",
  "key24": "5qEdvxUVe2B5YjRKi1rGLXNyNgV1Xfirq9zq1sEHNvzLorf7BWVRwpQz9RpvfUgNLr6GDpSCvoHLDjCHhxzX5Bsa",
  "key25": "2TXFHcY1tEg9yvbSRe2FvcW5uba44nNDMvaxK5vuBgmd5jSSRXxqgcXZ4Fg7Vsr8PUP7LhEMLHDF1Tr6d95q9QEw",
  "key26": "44PkzkvEiXMVCDaRoYB5FuNpmxNLacEq6eGKaL3LT3ETDSKoZAxjetDTyGXSfD7YmRuztbzCbUjRcorBz12X65a6",
  "key27": "HU92zMFBQCNLzQ4SC22JmKU4grY3TCn3BdXLj7RNVUkQVaS9VpvmNbXPenJcs7UwQ8NkcaswQkCc24LDQs9EhTX",
  "key28": "3LQYo7j5PF8h9zXXAvFjWjXSh5j1PswbeSN7L7qRxgab6m6KR17Xecy1erY1wLKZHJ8p51Ybe53fsaGvwSZRdsAb",
  "key29": "5X9eEMVLMoyGvNe2jHjUocuNcRojbiHaErBGEMngcoGV3D6eVP5fLSYxkVSDrtEYi2H4hwe8i1QYjAc38stDveCi"
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
