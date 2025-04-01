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
    "2v4WXPLkVdLw3FRDvsMAbyJHXB9JMeCra5BvhYxtpbxefassikPPc5RkhW15YWSvcSqrXkfEAzms5cy9zxZVncaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9xy2XWdPJDkbUuKCXHgWZZWLAd63z65ydM9S23T34m1oCD6T1aygj52xibPUF2qC6NbvdQsWkgMFPt89okfUiGi",
  "key1": "kMhQSoysikqCdEcnekndqkeoT8aKAEA4U8DxpzZJKNkQURp8uB92XwNC8YNM3F1rRmLZu7n5G8wGV3CZoNL335A",
  "key2": "ERJrWx9ia5GvdEfz34x5ftBj3jZDgW711vNMGugvS4Us7n4g32JvWyNQpPJX4PBh1Kp2XKmBXPNYuTzvWs46kiP",
  "key3": "kUYNGkbqbnoHrGB35fgzHt54ZXcPCXdnGiBxcF6LvSm667qArTqwmJgwSPWQuijK9dSmo94a1uYNZACpw1EZULH",
  "key4": "3aSUbMrekgZnFt4NG3zbVNWZiVPCbbDeFTwe4T31VysaK11jDSxWtw2aPmTQwv1XuWC5sAy2dKidyxwjp5YdBcFm",
  "key5": "4NzjRumrYHTshqV6MScAkcrMpwLBHFhH3i4y6ppBcHscidNs2hJtA4FGNwLUXwSkDaRHTZVGgzftxNjMVz6HNZ6",
  "key6": "5bYTssxr8dkGexWuSqXeJAztHoLdrRUcWL2J1jh9GiUMvhTj1MWW85yRLNWV2VJmfQUCLo5kvMDJVH6buhHpGF4M",
  "key7": "5qrCTK6wB9KYcsSKNjomvXDzAUwHUfSHNdqvVjUcKsq4tCn7KdsD2DRjyzwnZEWKdXnEDWJdpmU9vUNXbChNJBM7",
  "key8": "5qCM5somPk5HnphfiW7Er5KLf7BoqYB54nu8WhMbjGeLvpzGYGBtesVh8mfcymr2my7sXTx6MzcWjKzy6Q4EjPAG",
  "key9": "4Mj9PTWnJyrU8tYrMEk7dtVLRjtRGk83kTs34ts41UBn81PeoUUQPSFxnN6BS8hZf7Ui12RkSFT82J6JuXckcedS",
  "key10": "jt5L5rU7ZTYGDa8DvGLu43zB75k4wnuToN1zJF5MjqCzwN8izYHR3RDQZA89gUkgV7qx1SfRMuHxDDKxNsktAGM",
  "key11": "5it77bkvofw4yVQdGo2a5t4DS962ScWghzov8tPmzqdiAyj7fjZ4vj19Jnpmomee8AZkgc4Z8gmCG1p1dqJddKw6",
  "key12": "dAgMCXh7WSBY8cgEuWpB1521Y15FVHhpLzGpuXn9Fao6RYmgRcMzn23xxk38jK4jQEUCPCRgLa7uFUhfq6ysGRY",
  "key13": "3dJFA6LoYwKuiqAH9W68v7BctBb3tCVDYqPu9Pm4g7zUzXQnzsdBtGWYZqrebZadtxKEYcpJsVvnKto9BcQoK2tp",
  "key14": "4ts9M7m5qb46uFmCuLhXyJ9NsW39Hvgswa7URMWyXgEvQ3giNgkV6JXfubaKmvtXANYb4N4xK329NKe2LqE2ZNp8",
  "key15": "EZn9mHUBKvqrgG4TZZfGH8D15TA8bLDUVnT94TQNobDWHe7HjBMSqav7hfRYYeMTsHTk4h95vjAFJnxjmsnDED1",
  "key16": "ZfAkatH7aa7kCDL77WB49p26ffDHk2rtspvWD71nqifRKgwG2FfGXV1uyDxbxxEHqy8HAFFWeo9e4qTcrrbdVyJ",
  "key17": "4TCqSS9Le5vnQ6zJQsiQHjKhABi49odiFD2cSZYqSBgy9f42b4KoBzcMHzK8xThSzCo4VvFJURfe12ttS8cWHxQZ",
  "key18": "21DMewgE5cqkParkZdQiKH2ngncrrqH4LEgYc2NQ7LpBoG45aBntgu6vARWy4bzrd8v9LgtZu443Rutf1VenbiuV",
  "key19": "5f44XnPoj7oGLhEqjhtqXaVDqbRBgBezu196oT3ZbKDkdR6SUhNYMj2uvkrXbVvxfZMbSSEyJvGWMQCwZ4qxAZhP",
  "key20": "5dPQ3syqhAvuPEzRZXoQKhyzEeNeyNUUWAxXouzxrfhVoFRGdMXeHooEFcFskJF5zNUmA72sPRoiryqT2V2yFjN5",
  "key21": "3DGP3Fv2X5xeVyS8mh1u4cHCRH68Y8do3aE6uv3je1yBR3B81SfXevBrhoEt4jD3EZRzvK9xCcivo8j8JJco3Sti",
  "key22": "5sfmsYPyg1UhWUXXem6ABMpRtkAYjSd4mo5xksitPNPwqTGcyUzeBFqm5MZFDc6LRHMeWJJhcYcgBg33c7z3yzK8",
  "key23": "4bU2VRxHm6WdHvYaF9BbCdKNDEvqf5jjwME7LSnyNQjUonQc8vfLkJX4WStSECSogN5cFqoFigg8ReDEdv85q1bm",
  "key24": "27r9XgVJtdRqogJoqEA11xPCbgHoJ6ueFDBZjcTb4GDJZMBr9Vdoa74qbJMd7Vuo4YUPAu8XRpKW42nSa32HouXg",
  "key25": "5un6cCFvvno8wbC2D5RhN4srafihpFTQRPmVp6yzdTtV1iikziy9kWdVSqT9BMmtCYncxkq42rk4bdGZTVQFmCC1",
  "key26": "5w8dKRrR9fy9a3pRvC4i39xYbsp748sv1zZQyttBKV2HWGvmSjopjJs2UADnfi49t8mBcFTdb7syC86YENK9xBJc",
  "key27": "4zepLPWCFKEshMGNvtXiQeWNrXKcihApE2h86oHUcZySFEnpjBW4h2xQQwwTAZijyevQMrdceWkk9CH6o5zDwCRw",
  "key28": "3jdN8ujbc3X8bVQudsXcCGgDhzr23i1S7qni6YJQP7VJ6coi17fshWE7R8vK77GXsxgtdaTkypWDUmkZxBjutyA",
  "key29": "4S9a8bpkHJHw4hcWGu1ir3QQGwnKwGmDve9kr5rVPynxNiftr2voFQTpVNcTtgxsJ7pHT62wgUp78yzyv2rHiH6R",
  "key30": "4Ru33Z1MXjN3yTBMEurGYLuA8ZWr1hL5vG28WTWQw3LNvy77kHWMqy4PzvQS7iCAovMLtqHvra22A67V6GPjnVkx",
  "key31": "NVEKa88FJcBLtgmtHHi21SzJEXS1aJM2CfCWR6YeHyCFFTwZZjSDjBnbwroTUicsMRruj64hggvpRygSTAQTPv8",
  "key32": "G3vZsywSJJkVFSUTb4Z1XEYEhV9DUYrpmsGy1QDSLqp5M8JNH9mn3YsxATKsx5G2Mgw54MGqsPqvhAfowFmvu3K",
  "key33": "66nqtBGeNUXnJjYqaVGMJgM3pW3UZAuXZi7FTpxAkuvFNEba13vP8pxGWBgg72v7wQArGE8rfNoxsuzQyw1SEYim",
  "key34": "5eYwj51xhupdpySEkxEwngN6Y4gzvUcTyr4NkuQN4ijDMLcDSSpbP49Y1HvtvrbgWG2V9pUePNyQpniTzqLjQFap"
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
