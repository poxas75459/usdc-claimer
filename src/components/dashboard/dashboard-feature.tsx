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
    "4vpFR6WRNG5sMwW1uW6Wo7J28sF4Ng8Bot8A52mYmQKQQh7Xm8tn8LVeiwWpR46UUMJTcmZPYZnGS5EcMzWxD9Vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t42VR69SGcz6WAQNXVid2Tmhi7nZJQ1bG8sjVdec13JV8A2zyBw9GwxBETzEEN6Yhi9ZhjSFp93Bix1fTDJfceb",
  "key1": "GVdoGuNKpZ54nipk1shTAyv3n5ytwraXf4tprg35Zy1BqVdkXY4afK4HGMWdiSRzHTQUq18yRXKwf6kWhNe1p2g",
  "key2": "4FG19j9jHeoA9bNL3gGdQ9XhDwuvD13SB2WUPSj4kEfBiraUoJWVMTgmUYWkkLz5wY7gXUZvxtQVGWrChYqFaDTc",
  "key3": "U4ZxxFQh5miC1d5HeJ9FALirRVX4hZgHRJYvQMm3xocfm2cM3DBkdQAxqBJ3tmJDH1djFhu46Uos7zPAq7nGVA3",
  "key4": "5EnXCZiKupqqTbCMJEWvNbxQU5ajk6ZL4wWE5xGfDSUqhMrr8NKv1f29rhHJF65Yj1Z9vPEVQnpW2KhsHNZohZLy",
  "key5": "3WA2z7t9CfT1wz9nZTgUKfh16gNcrBakpCUNxpLp1v81vvHvyd5LWRXUnQiPPt4JzsC9vnxs6RaEXXjjWhwJVfLy",
  "key6": "2yTcQ5uxRKnn8G8eAb9nT3QQY9LQYcRguiuLdJsEQwiAL4V2vB1zmPQMq8Fjfssj4TTSs6NffjmDZbKnDaUMR7N5",
  "key7": "44NrRj3LGiPAKgL755vt9Nrh6rP5zgChdkYUu17osvVA7Cq855R4kERiF2tsKuhSz9LeuKhTiLGodZ6Aov2YDLVG",
  "key8": "5jAT3YWZY7SBRJp2cRDAkieAK6u3rJegBtqw4Du8CjdHW7q77Pc5v2JjjX99APneQyvwWF5X8nZpYsWYP4aZFtZZ",
  "key9": "4Ghawb2dUEQ3aWmxFXjQfqSkHNE5zGeqzB55u7acpeV2DwV1g6Yk5YM7cwUMRxkgD1m2G8gxrbzEdtaFndzFDfpr",
  "key10": "mutCQU8Avps1uSn1dny5XZMvQXcyCoiK5f3dWiwc6SowwfaT7Lckt9PNH7gmoXegBVf3pirmWuk3EBctevAg9au",
  "key11": "5vXh4otW5TmvJMY4hK3ECPhBrzeZbXDhVyc7WRdzhDBjvnQpvdbnCz9Uvyw8mLUuoS54VgKwHcoirNzjzj3jB6dP",
  "key12": "vcHg1wAzZm3K4bXGk5GTiE1S1maXTdswiwKveAh2enLqX9Gkc3MwV7vwtThBq1oTi8fiGrWYerSgufpfRk1e19Z",
  "key13": "JTsG67D5bmFgTQdR9wpAssfWZ134bvw7mxrA5h4Muc5cnVsnj26JEH6ze27ughUNGvWMGjmTJKerDjsF7mJu8Rh",
  "key14": "5rdGWcPa3CUeE1WUojtr1Rx91oH1ypuKUZvwfwVmDY7KTNGnzTghcrFRoqvRvEDA8nXZSTvXAfi6Xep9Gp37qA5d",
  "key15": "cCrNS2NCstkKnirhZYeTSZRtK8Mi6UUEXkjSGccgztaqVUYzoTzLrooofB82rgb8qiL31c1wBiCKpDdLywtnx6G",
  "key16": "5qiveBdZQgEzStiFjgNJv2UT3FHT2dJUhfjU3E7swYvF93yUEq4BNcHkuYn3c1VFDw75t7wBicjioh7vriqKaMu3",
  "key17": "7W3N57fmdktKY2bccPRZquhW85rhfQkZrgf51Qekj9g8dAyNpcr4rHZ3PE1yGqUwz8ZifnZw9gBiTUFipcfhaW7",
  "key18": "61XNAMG81gK45Wk3pBggAoG6PtxfkeSmK1DHVCk5kZgLK2MGabQ5MChKd1UJriVpMbo2pZQP8L2FozNcZqmnZGuw",
  "key19": "3k5TAuaFmzYdujahVRYkNaR3ZCw7N1qxV42NyKjiRMwVUQnUEy8VFzwKqqxVT2avSpPvYCwhXxDiXteGcyqHZmav",
  "key20": "5zQYpZecC6n6FuvDkzRyhWrVDmHq3iiNYMyNLAAbY6qyMPWW45Vv6DQtVN9wdbDt17uZMjqs5Cjgik3W54G5CFTz",
  "key21": "3BpE9w2vFauTKyWgAKkK63rtEgy3thewAxpq6ruQY7opiZTvwP9qoaRYhxocsrbckgRqYPzfYyohtwvxvhH6tQ8x",
  "key22": "2B4KEPEskob88SKihNeWzgGGNQX3aKv7bxPTijgVPQV39V4rAZ4Lt5Gwpa6D1LQi9apevK4bNL2j6R299V5sqQwj",
  "key23": "3fci3hoAMiY4ecfFKr2V7D9V6p2xwnUAkAMrXr16q1QX8vSFXBKRmsqVNCmE9n3C9Aq1LXBavqg8zF6LMhgpaZxU",
  "key24": "4w49jdMkQzsHoTbDR5xaAcupuwVzY6qXouaiq5UdnyVSpbGZcq8ks6tGqgEo4VkYo9za772QmPR8oD7rZbYtWLjT",
  "key25": "3hT4P6LEGpa3yAXXASHDkADBRoFJ5hYAGGKetbKgUjsVi1FBC9x5wPQFithnDkpzmYJbAs41VusWP1foAgW6e5Bw",
  "key26": "62ceVkVdVcnkKAWFasFzeMiGRZyLJmY6ocn7ZAQVWbpnshod3UZqMMdcsyedD5askzFZkzCV1M2kjPzJqFx4Pp7m",
  "key27": "5f3nyDTYmT3FBLz2B79i9gajTogfDWuYZDunZtvEzdhVYNx493aNCVtuB5gDFK1PEJ3FCqx74nLFEo4MCGSdf6QL",
  "key28": "3K9pQkysSF7SyN4E1ngexGpLWX5S72WKKEy3hNSfozXcqQg3uADkhtuBfoYWc2DFRBnZ5WZfDZ2TiHyKTSs5Y71B",
  "key29": "5CA5PNNdFzWehJnsYA676f3JdCk9npa4boKWb8MQEkH3vWNzUadVHLHuuKry3ugruePmj4gXczry7tyjU5Z2xbdi"
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
