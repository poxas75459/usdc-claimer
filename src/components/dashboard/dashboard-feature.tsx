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
    "4xnuE3nnqAVKfb96PPhXXLBDGBvtc4sCoMwhWoUSpoTXAK2tLLdTjSDYSfejNzjgxVPRSFaPd9aJu4e1GMZ8wufu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43cXqzmzsu38g3RjMZr8JvgN3aVJZXAhGRXENViAgXxDLfJocxvf22EnEEUKCut5tD7WrqPzShXepjdWZdgUtJxg",
  "key1": "RhRTgS9WDenbm23bqph98cP7Pu9T3Aijm6Uvdxpa1kbRHr8wQ7ifc7PPWUFYMjdp9EQijDVx4Pq4aNhYUSnBaJK",
  "key2": "4GkmvMVWKWX95pmL2YqsSgwi4uxsgadHMqWkKvR8skSvm7yHapS1qrRAALTsapxQxX87T2XBNViqPeiEFRNeFPfb",
  "key3": "2YkUsNd1J9gRt97dCfVmbtPZX4RpCCXSVDfmfj5vTEbBQZRpQywB2mJ8t1rd9rR9iWcnMR65aNojTeMCzrERvG3Z",
  "key4": "4edyY6LVh51A7hFcb5qpjvPNNbQ3PZMNmSxRzoL8VGfxJb7BmzRRWVHY91QuwtCPhKwRB3XWVkjQJz9h1xck9cRo",
  "key5": "9dULFNfDLRbjf7QGosQJfL8UTcbR2sWw2cSmcqo9Amg32f3QsM125xsf1FUpDVETwERW6fBRuktNt3mb3TB84xQ",
  "key6": "4agM2rEjSaiRLdWkjyYHKPYLW7pvRrSFkqZ7RchdxQcwv3CFgmr1LVTHGrgEvd2BhCuQp48fvk5NqN9z7KAXBB6k",
  "key7": "571GhVrRdLLzXwT358aJ4dGCRqJLbfNrvRH1aYRRQi7mdvAzqjZLzk5bXMuepFhMs87fadqLkMo1N2n9nUSw4c3V",
  "key8": "59AJaEikrNeSDswmpwEpAaoR2zKoTTkE69mVq6KHxYUWnqmDDiTuv2QergGCybrW1jpHxLTaWzfA1trinDKKwENN",
  "key9": "2SYMQCa17CkqQriE8GDLhyXVQadZM8FFyZKb5fWh3QbBcJDC3wKsPYRKkYuSCzZjGhUgJC16ijmB5fLjMYXyqocD",
  "key10": "3xtYHprcXmRBAmkBr1bX4Su9WPrmRYrwSh8u8rYxqf4oud1pMSJJQNU2qQ6XWLcF864H4tyLW4ohPWXUi9pb9htZ",
  "key11": "WqWR4VRnyMHoVxsp6MhYLhe1B6juJexpxHbHMK49ELJyDUXCcnKz664Rv8xYwJdAXN1fm12N3Cnvc6AZKguuht7",
  "key12": "3f91iqw4WrXqi8Mmj73zXbzMpG5KQQmXaaWEpSaT7DptAN6TH5XKsmTKWxrFVjHj9RYzfJ5TPBEqSqq9oBr6sr8N",
  "key13": "2B9ZYUBDBu67pfbASJUdWR6Cfim3RSpFaX2tSByufAJCuLHhvS6DyGBi2rHUeSMwe8soeaHmGaYVJunHvkw7hy5j",
  "key14": "3s5XtCFSE95PgQEGKSfJD5Dhad7NpC9KNv8xnjJb4cPF3jEbjXf1hg5dLShMRYBaMQPyAK1ATCnQMPDBgVCLJbF2",
  "key15": "4VznCsyr9c2w9r6FHQ2cbpYLBYt64DfWh7BWcwT82RhpoEZGTZ4R9sBSQ1kruVjm2YAKqFm4Sdwx2x4zNs2x5oVd",
  "key16": "29MMms3CsNCeC9tAC3VcA158yqC24stVZZ3jNhgSgkAZrEde19B6DUd2M5QDWeFL6AuAB3ZxUv6oYkqcW5LeasJS",
  "key17": "4sjhSSYSmEfkYuR219UdDXRsZJrtWNr8YheHhk7NsWNUDGma5BTM8J4iuF35UbgyPj9hQ8mtChaQoi2FRstCggCo",
  "key18": "64qeRoKzWxdqi2ihF3fBunwyJiu8b65bjriQamirgE8M3DWsCEcMFTTyx1dCcAZEXAWC55xsaqbxUUuUe13kG2fX",
  "key19": "2jnogoe3tMzYfUmSwwtj82NoKZj67ajsjg2WxiB2Qh2tsMEc8xG7XfsDeZmSEJYyL2MdnRdP4KvuChMLz4Kkfr7W",
  "key20": "3gi7yPzWMpL9DSj7EgfXoS27W5bf5aAn5PkAqboRctrYBcassSiAt4EXDgBXwhruMpntqTnYYm8y7PWffuSNc8UV",
  "key21": "2ZM8dM91WsW79fgRKTykYAJpuUunkBz2T1CAhWJyitLYRg16xBwJsV6vvxQVjrCk1o8Yn6J623WLiqt2yNtpy5Z8",
  "key22": "43SpcmJ7cB2CK8GU7XDn5PcjA5TGVnAeMoVLcr5f7df7gB6948rnfJCMqCNnjM2zDYzAMM9JgzfqnbsLSX4kV9Ck",
  "key23": "3pEaQPKMEbgKaLrsTRKfGoGK3kAC6iCJ3TxFc9BTW4xBSf6x9i6PGB6M7BHD7ANqQmgJx9hjRAUcGrsyDoQDsG5B",
  "key24": "PCXsBAU52LKa7DAMCUorYvy634BMyRDobPoEUsuXYgVGM46uetpAusxUfzCsvaxSJ8gRSzLZpHAHXZvxihBqZzr",
  "key25": "5vcfxmygSMgoCTzmAcKmD8CdAojStv31JfZKkX8UvTZheksHzBEHpvCZpaSw9wXS7seXpgQekhRCwrXFSCAmRRYv",
  "key26": "2GYGG8Hp7VZEGJQhBiqshA9cR7v6jgFdPJxidevu3AoWXkSKacipprnBnAhgFSm2iwa2vkuxXhLiwifYYnQTBW9L",
  "key27": "2nZCQpumGvjongHgbGcNqNbQD53VFnDUnRXCLJtDcBPJAdMx6GeTbwRPKBqX6chMP6pdmDediwg2CYUa3U8RTyi4",
  "key28": "fnZURZ4JLPbozxv3Yxc8jhA3HChjMc5EM3KSMrGKgMkrobZg1jUbYrypPsAqYCm7r7BfoWRsQmt665Yqr6c6gja",
  "key29": "wTF5c3ALHAWbyTs3sTgP7rYJBtk66buuucR8zuQYVg33FWsJaavv6omQXkHS2U9oRzpp4DUZubznMRpUfxuBMGM",
  "key30": "3bXRnKxeM62km6vcYpZzM45jVYuPopBNpZ7LiWc1ibE6yT4QM4ehvZaeTKu21cZDmpNacisYLXjwpaB3eNfZFbYo",
  "key31": "4wAAQXXaXjTonPGbDzSSGrxgzCPkDzku1A84ffHPeyFTXSS8M15PPpDC3NbsHys9xV5tG7XQx4uoyexxc3D1MqQm",
  "key32": "3oJbfneusRxHu44yQhiEkdzGUAuehkMDJbFgX176PiYTvNfvdKtezVacSNXnsqSXzyrqD8qVab8PL8NsuV4gqtQU",
  "key33": "4TLER3NG8xH2RHdMMiDbraXapXdjaVBGLtaVW8ZYhAtmdMtehPvxS1uL3iSZjTHJmRfdweAVqieKpvE2SVLM9fyH",
  "key34": "5X1FFyuTBRAkv33bEWXHM4EMrJ1yMLaoHUVK1p5Zq2Cc3rZWqNbozFLQS2K9owXiFeGLfDFhUZ4xdztZYZuZ3bWc",
  "key35": "3iw2FzDHw3GxGq4rpPjQYapMGcE8jQSdV1ngH2udx57uzy7ZmZDtD8ERC45hCAsh3xBVUnoNR6mQozp2bfATBLxa",
  "key36": "3K2dLsHsFG5ZkaWGbPDpc1932599wMGn69yvrXjSjnWh2zNRB9zhJPeqQQhj49zUhLE3YFKN8W31cupsabBCmpUq"
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
