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
    "3wKNckJbSJHeEua4yUGiPLpAcH6ggBFdZ8fRkHjxyRZFSKg7Yj4h9v9YBFFdwwt2fwViNBKatoSTDSiNJH4mscXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aJ6maBVvRZS2zxiGwkD8JDvjC3HUnnKQjkd1E5hnQnF3S3yU3UtiuXrcatkyojX4N2M4iuPfmMdfqPiLaMLxXsd",
  "key1": "4sxzWtwwFuHMnWBZZVTv42Az7h9x35ZAg25TgZedAVoWbUaK2vDV4iz7z4h7NcVMa1zcxeXrj4UMfzjQW8ydFtTR",
  "key2": "BBX2okYU7FGJRRLyMXjo1YVuAke9Feoizs1WUE98N3tUTABqjrwZu2Uc4dKYkeiz5jfFbFm2cN8bz9GSRqRwRMr",
  "key3": "d6v1LRVJZ6gcSCQR5sRkynfL2dq2D5y2Hvt1FWZd9FKcLGXHQ4oQVonBYSyXFzD5YGG62uhEYKnkc2trFgbXqTR",
  "key4": "3F8brHRm3wGgWAkZpATTCErqtLSz78VmuqdBbJTuxJWeG4uVBVN3S7YxDn7jqmxbydAFDAeVFsoiZLs9z5a2Wp4S",
  "key5": "oJrSam6Kfy1WzayMJsS7iWQojAJ96zSqZpd1dUaV3SZpHjeEXMVMhQ7uVBKy4D9iQyfrQhpqLfCquvTm5mv4J42",
  "key6": "3EfFz4UJRpL9CKZAFCtBBLQPba3AchQdG24d1qyb9DoPnsCZFLWWqtGFqpYwdxtjfYQn9qB68AT7rVwVm9TTsE9o",
  "key7": "4fkU9gsvZJvuS2xn58ZoVvvtemKCNj6umHXF17AgvjDCoJfTGnfECEJpsXjwwUrMf8bGJrwGqHUjtNARrrThEPTg",
  "key8": "5pdxSqbdR5m6jA5gDNqvbMtosiJob8FwAAYqv6dwzcp78ZYEzKPWvVR9AXhTaDSKRtP1rZ1fW4KptNGJvUTHiccY",
  "key9": "4PhxwA2haKzK16Ko4kSPQggsoiZDq9ANacwvZwVMxTib7JaRtgQw21oNisuTAEi6mQhe5VwMuGCfKMrmuyg9BP7w",
  "key10": "pnZumwp9r1sndtUatjxAGaXgo7Vu9YQzsV3d3mripa5irTh947vkdhbvZ3foKj5hERc2yHPnz1egbhuFwq1LTBL",
  "key11": "xwmJCp5RvVa2Ka3eRSobWoWG51QFz4Dc4QrUQbf4y25cJ7seS6ta4yKnPNaZEXGnvzPaXVzuD3HJuoPghsGZ7D6",
  "key12": "2k5o8agMbFs7kHn87yJyQ5F11cbdLGTEet4fkcB6zn6cmUmyYYThxBdycKs3p5Q1WdGVBbErib277qiWwFbxKvB1",
  "key13": "25nd4ZAxX71qNcDDsWLbbT2VWZEHxCXJ4wbzRGBrgEbACAW5sEtvAts29VZrpaNVbv98tDmwUup8TEiRDUdfDaS2",
  "key14": "3CHKrMXgDs7iyTnCWujrqAVuTKra4HfVxfyjpbTUvkaJUw2JNRBkDVjCcDW34LqXt1FDPUQzoWN99QAroA1tTRyv",
  "key15": "4FfqoyZP2zEyautoEbVxBZh8TkFpxjNknTidAjYyefibLV2qa7db2WvPy1HoqF7zaZJ3hb44zWs3t1gAaaqmkLLj",
  "key16": "5qgJEh6kJMNbY7XvjnGYp36pNbjXpV4yxgDwkfzjbKeMckJ7qVF3tjPujci7LaiBzLRfz2cKFu2rgQECSBXREPMs",
  "key17": "3Qh4aw98VVoapfXsr6EEXk7pgBkuvAQeGDzX7gze1fvERRsfzY1YCXbuLQKecUFcP7aHhq8QPAvexQxrgtACaYsE",
  "key18": "5zVQLPnAGY1nuk2jfNtPaWJqrJUMb2ArLoiVPDTESw4dCyLQdz13GGRgqcCHKdTy8oNhdU2q8sf5LgPthWMQf3iW",
  "key19": "UgkEhT6DLpU8T8TDByXGUdkBLRASBxsGXJop4gBujDYTP6uThwQqRo71YJYX9jwwn8jBDYk2ywbkpt2chdFKYWK",
  "key20": "5qAo2hL2Gnp69ynrEcoPFx4cyJHKqzbfQfk447zPVSXqxLis8av3Y1bq8P1GvC11E7cFEcYHLSuL7RGoCvJ2gAfy",
  "key21": "42KH3oqfy8vYr1Ekud4CtoM9wEqdAaLfktLnR8Ui8AuJfngJrYq9vQ6Rhj1yGgSAfK5E2dvrTUFMXyxpfSywCh2w",
  "key22": "3ZcScCnQbRqNWGrTB4vG7YXpMw7ZwJByxt3ufW9tGMfWaigjpMvSkSZXCpcf5SDhD1WTE7qKtiWCDoNc9LLxLVic",
  "key23": "3r5W8NsLFLwmysqQhpq2mNY9CYtbABGaZkwppYwv1wNrguTpeicazNZRCTUbEEsTNzxDT3f1WjZJhPg3oKwRDwsC",
  "key24": "3pn2nBXaijfVwXzUHGhSdj43wrQnpdbwnMvYDP1dLgDfi7MwYyzbu21aCWJiofitpFmPTuX1sSYz7ZE5D9MA3DxV",
  "key25": "5FzAzNGVt72zxE3RejciemjQaonAYcFck3Y5hyL2EyRFWEfioLv5RTuC54ricMTLiCtVyKgbwZW8eScKhQHM1NTF",
  "key26": "2P5GYVgVu1uu1jMRCUN5wPeUL4Tnt5SwwJsNPn4j5XkyRKwsg4RK56WiqhXdKLt9rtppFMFCgSSvy732cHka4V5H"
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
