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
    "4qczPoVRZTrJUtVydeGKjqpejrWKSjTd7shHvHg9FoqPVUfuSQyNnnk3ponTMX8EuHrWVQCP6mjGGHtPetWiTgcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Xwfd8ayTaT2mjnBiroNv2saWRbJBx3DFBNPhix9oEC6aZ2YQkyndgGVozr6rZoaUZpeYNuuqiE6DkPihTMYtui",
  "key1": "4ov1kaQd7afCDjcC4XUQ1WRVVwV6RFata6w5PYkxdfM5bfMLrDxa1jT6CdRUFfM8wpVE18rg8F9gy6z3idVYZwug",
  "key2": "5W8328b7Ub8tW5J7yhWC7CpVNiLKJh6uhwS9tNgaBzYAbNfrbgwKZG154xAdkM9Cq8pAU2UfgQPXeCRZyHtZCrdm",
  "key3": "2oCfXjLbZj8cf774WyQRgHddFjSwRNvpM4Z1JhQa4xdYgho5rNZh1dnubCXFYzywyq3Zs1n8VJJeaXuYdbUDEPU7",
  "key4": "GWGrKLr3rPNTN9MWvQCfE1NYSTdDJaJAtcqgf7tNvXynMxz4R44qRsx6BCUBxvggzqnAS5VRStWqUqyYMGXZVXQ",
  "key5": "2ysZ5sHAdG4P4Agdk5CWeHQuqhCdGMrvgN8ms1mePn4kNNov1d6jffyCYBYM7hHTGToBqxBbYENxcWRefQucLjvS",
  "key6": "4wGra2RWyAebk5iCv4TqPv6JYjVZh9P4jiGjZfo2JnF72psT1YAAqjZdGbtP6znNpPy4PGb9F5g7aHNcervrv812",
  "key7": "5KHYpatkho4BsA6NWZvfLz4VJHQdy1kcVeCn2YzQywpt53w2DJFXjhg5H9avE2A21dFaUTEjJKpazTPKe9iuHtuo",
  "key8": "3P2bwwCyaUzhYsNRFQk6jzchQ3A2fvk2GGPWHGzdRyDygRvvqceqCFdvq8ZPBDURoJ5hpr3Hri8z8LHw697CVae1",
  "key9": "2mzKVWWcv1NM23oNekn4jbKhKZctH8x8VYRoRUUdM3RuKec3igxHThosKt15RFXoXQGAKP8jUPy5gtjzsQxYAjjK",
  "key10": "4kMU2XwasDmonTmMisSygE5AVM3uKGTD66JAvoZrLZfgBQJg3D4XZNRjFvRrxE8mYjzt26Bgcc8Rwr24zgsnYGLc",
  "key11": "3SyXbyKqRi7jWxkDKrzXcEatJHLqt3keSR2keWzxHc9G4jkQ7RykrehsgtmdVbx2yUPAhC3T1sxvKtnQHrCQD8v",
  "key12": "3Z1qdmj5aP8WpztFKmFDbxq8TAZKhokgLwqg7M6VD6imkrXd8HbQYTiVDifDSHo75NMkoBjbGfEvQaEVfnpmhm2n",
  "key13": "4SBoGSxqGgv1mkZ35DbztEDd8iGr2P5jpMapgvvnoBap1W46Z8WSTADXEaVxToGk41pXFrAkV3UU9EBGuKmtpUE8",
  "key14": "3i3j7fNcZDA2Ji3D29aFGALup7MnbGx1bAXDdVZDB1Fryuut8SWEAb3kfL5uKtmazuL1o6k9Bhv3w2mD7hYHeBhB",
  "key15": "5whu9Hm5A9znhqGgFoddye3bpA2S5HTSJ7FfJa5LvhVi6y8zmv9wyQbtUgGs3Dbie7MgWf2xvLQrY9d8RDzFSVq6",
  "key16": "CGCd6nkwW7waAQgKMQT3LN55Xmgq4kpFgCKPji1tNHWwyBkJjL8YiU3o7zZuqNsfmyKRKv2AJ2WWJnecnUe1D2h",
  "key17": "24B5oNrChbi1TXM7ydqTba94WDqWNnXmfgUGwVzYuoSHSsaeMybYutczo3bHw55Cgu1pLzxwKtnrRsMGz7s5vdiw",
  "key18": "5MRjgG7LQGpuXfxgvAzMT5ahc4pHpDQkfs9wB6ahXgx8PLqEiuNEJKVfthyWb137DdAxrDZefDryKeJ3hrSExZSJ",
  "key19": "2zbewpekgX1NW4w12YrmopGr33Gq7aGTUVq9JusrUin1aARoyV7CSTBF3BFmRFrRuUFNpyyt69BqZnXh3tqCLV6s",
  "key20": "4xgZ1cW5JxQNcZ9uyaPLXavrQi8FK68beurAvSXZ63gC9UNcguJr5srQhVqT8no2d1MVUe7choKu9Ywb4Dhh9W1r",
  "key21": "2gPVzXPUqZAaFDEKPMpDNpp6fykvjvK2j8XpJJvZBzYrk1PFY3QMnxH9fmZAwD9eqe51uZiLcv9QEpwyr8fsB1A7",
  "key22": "4yRhiBxgoYKBsKwxPLG4tYDuYfxEVgNBUZwjgncRf9s8BU3mT7uhJ7qLTVvRVFrtgqwAMYz1hqLEQ25zgzm3uw5i",
  "key23": "A5EudPtqME3UTAeVSdDwRMmHt8rBzNQ1QVFeRkLu8fMKxFakntKvJ6Ttz6i18xzVfNA8b56GLcEi9cJivmZM5Wb",
  "key24": "49Fjx84MRJ89D7qSh4uDTr5ukeSYAvoibtnATGCdW1GBMKE7Dq9FC3RerL6owSBZY2yKH7woNPe4C2HQmhV3UZAi"
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
