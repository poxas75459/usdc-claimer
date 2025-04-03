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
    "QWTGWn8ZzSmdtHczNYm8dzv943NdMptFMqxVzj9Xgparu4tgpxdwogETyPt9NkeVe9zYFh84pF4cUR19Y5DcpBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "464P7K2nxxvsBD86a5GZbfcWhSMxF4hkpjAEBenRestatenweQexzjamTfRLSfPc5qoPC9SYfsztJWSiG5acgRsd",
  "key1": "5U9z158EjEvpFMBdXrSzJgWEssYUWm2Rw48QDLXJtps5yYTy7uot2orYjVz8cxdJyQYCtWVMLJGUrUmUh3Skji91",
  "key2": "4ECAvLFMG9B4mDGEKHcpztHZ416s273G4BrczgUw8dXdSivYVnXRnKxGLycxJE1F3bhawWx6bHBjCQJHre9b4vKe",
  "key3": "4FHdBDY7dojRwerSZ55SFH8qNdf3NaVFAGYhquJNu7BypZv2ZGfSBd2jeafbS5nBYmd47tQdZMGRWMHJepo7J3zD",
  "key4": "3vyPiZy4MAQHLzLdxqihrnvS7WZU4yXyZkgLjhNQxqQLhs1CXRnWHsE9kZywrApjgdDEyL754LR6dogsqcxErUws",
  "key5": "61ppEUG5mSa2bMhs3CFpEvmo342hKHgfcfoTQ8gKWLmfM6cLEUwJqFMQZgwRU9kaNK35uaspH9NFWkbYq6VKhqfj",
  "key6": "29ZzX1wcXPb9JnuvWyRxbkBgcfsAznjJWehotRKyNNVRWP3bFVF6cYBH71YtGNh5CPjwirKqUBDFe8F4K6fgWjBM",
  "key7": "4AuZK4w7YXWnxgEKvnMRHuWLXvvaDmtB2Y8wGjDwcyNRM8fW51ZGdWH3Vw2fiy9i1UohLaJvyqpNSk1YT1GSrZFs",
  "key8": "5DUjU6PD6c5k5EJjfjVToGzdGuEcwG3FMmot28o2YhPtq64LiaXsWMFtLvTd8DdHNUrLzhcqcAeNhZMFqaGnXycT",
  "key9": "5URkLuq4jRTe2hwNYoXjkKfmQUBM17emuFDTk9y5Gj9iqfBEBrjLueiRMLb3j3tPN7VSU47QKQkp48YWe7jX5kqR",
  "key10": "4tPuJuKi34FKztc1mZFsLMg6LfBeSH7EPzhAe3er9AiXd5sBxVvreGXcJib7e5TFjZq1aLxsfkWYfGoGbB4SEo7r",
  "key11": "AnwtBcttac7Kv2hKh4BNztpYMdfB5i61RQvJYfAZvxrdX8HFAtpYwNncpXmNVke5u9eMT7co7pDF4GCf5s998Mt",
  "key12": "hZsHSvck9MELjiDhu4QUCg4uvTezwyyCMVrjKzz9rY3H9tDtXy9bzUZJi6mjqdtGCKV22RKw1uWzm2VEao6t4wH",
  "key13": "2pLkKoyssYyYkeedD7BLSpNM1b7oeQ7qsH9hQS2VPFSGr2r8Tdw4UTkWMoZ2RMj8MWiJLw5h1bKfemYA2brzMWAm",
  "key14": "o8Wsrot4Niu5mvvpF5SUGjDbiJrNhPSgdrvpD4haBFmWSeptJ3vKoXCapd6jpSkMaC3BYwcVzzaYwdd3RBaZPse",
  "key15": "4aoF3fz89em5Dj1gRK43PxEkyL1G4EMUZUMfSY4mvhnm1JUDUWc2AfnCt5Eq6JgQhx7LqC7F76zSSiSnALEDDtNG",
  "key16": "5ZPWgg5ifWd3aBTiS8RVGD2cHRWNVWjyjNqaz9LpttYfuokavNpwsDrDTMcXcd6nvJTzWSUCXLuvNpRrZsHbat7j",
  "key17": "FCsdAQ2nLVEKSdeCRfF3fdo73nrqGQeLNJhP4ER1FwdGvATYTBe2SRXWUJ3usbJkey19v4c51z99hvsBAELfADq",
  "key18": "26SBcVfGoAPL673vbDwiAyP9qtXFnKvKga3CczT8WuQhiUBYpKYn6gKgktn3deEDexsuMDo1Dz8oBBjCS3ZxKQuR",
  "key19": "3Sd9QgWbpoFSpnH7dVCGbETNUjR3fmqrPcmFaPDx8jtZLFWpU3673y9FUmDaLfhaXKEyqEaC4MmfuGeNbSEoSHAt",
  "key20": "5pEMPFqmmVzLhkmGn4on1sXizzgRWfVWR4kVf7Q1eU7LwAMR7U9c9qahzZfAAUfd4uFzXKhvm3AzD2N6Vt2sL7Vs",
  "key21": "AxCwYftc48BKN52jNi3b7Hxa4w2AdnniBZRWesbMV4RPLfQHPobHuhMQzYVJuxcq8XJpK31nfXFkZMpotxoNQ7Z",
  "key22": "oyr23fk7WrsQxC3z8TvWCiuJaMSoS2q9fEwjiXPhxFQgLpExCviFuf6cSUP9sbiDKNFtVw54bkFWHz9JB4tSC7i",
  "key23": "3JxwQVCMNCLLpfnnnmZX5FQ9wSt6iXNf7M25EUcBCfuJiE5dyQtiFPvhtA9TduL5Be8qfbhjUMC4mYzTxkYkKuSb",
  "key24": "kDj5SJNjXJXK4WE4J1H6bN9QBswjeqaBwDRyasnUrXAwtHJve4X5VPXPdMNwYPxCFqMmczJicMd7xnftTUxY7YU",
  "key25": "3HmB8zFvc7DuiJS3FcHA1gLY6EFQuXWcFMXD3AgccBhbzaMA5ukkWR6erqax6fLRnf3XtXbWX4YY2afWCMD93gh8"
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
