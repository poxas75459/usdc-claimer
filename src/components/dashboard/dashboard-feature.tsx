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
    "3E8DG85sfm2xL7viwtTpwGsoHgvTeuMfTsgCXvm2uQtu7r7sGJp4kvAUuGFbWjhiXzyifGPf5uhNJQKCinbbMhXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5eJxJY5FLktTT6kvH4VEivqgAzPP2Vsed13b7TunqPKZJWwpVeAxLZLkF6yxPrJWWGko4wnHwQYV9fyuinQDFu",
  "key1": "vSJwYBU5FaZ3MYQsWTa3NgEpuvjxexk7vrtdJtStnMesLwfxZJg4fzF71sHmbxPbX48B4VbCpbWUacaAJoiXQnb",
  "key2": "62j7qxZ2Scrgp1AhjkgWmLCJBsyKDeUsiiJpG31QujpU5i1sk6adX8FRde7LDm3NBYXgRL4zHrdbTeEQiubHBa4E",
  "key3": "39jorsT59oCqDeZKjFFKmegvArfn4CQ771WUEcoHVokshqejjAGBDewj85RMHJJBd5mjUptGQbJUHBkXf8gT8nSW",
  "key4": "PoS9BWnCD4moyZRjTv3ERMoUWW6kUeMCPVSvUrWUCG917CFwp7Du7G8KvGo7cA7JnXhbPpE1Km1exEUDy9E7MEW",
  "key5": "V88iUgZoGy7EeJ5a76mf9g9NfdMoD1ansyxykk1aX1RKZnwwLXrT4Tjum4CYwDdXrXHuNhJNFKJzNsUa4BjZCoC",
  "key6": "5bZq7i3acutBVoSDkotX2sKqxwhVX81AcrF7sxztZ6t43bsLJefLHa6z1v9nvTyraKM668FVUK88q8LDU32sbq4m",
  "key7": "3wvkJ7izrJarhS8mwBmj1Vb7kysaVgT3NnZAEFNVEKRrUrwacGQrKywohojxDKNdLHxFwcoHwp43HufqxjtT89y9",
  "key8": "Tbsa8DggHdd6zosvnHfAgVsPEyFNqg5Q5VYYhjYhaeHjne5EAy26AW3NVTf1vSzxuMVaoQojMVs7Uuwx3GR9niw",
  "key9": "3hnS3CVvPNNoc6U2DdoQyfxAHCyZ7qS591pANKKq7SfKC3X4o2MPa6dnvgTA2is2ikQeaSrF9wrWi8w2XaW9NqQx",
  "key10": "DF4gVJ7RmFnGeJpyfZq9ZqWv71pRrpWPDp92BtXUAvqtvrtHGCuNQc3id76nmnf7Qr1uT6qpDE7AY7k2fBjqVSq",
  "key11": "5dakqEYNgCWNbpQX85QZesxrpfWha4zcz6zL3NWreDpQXjxpEyKdC1DMCLyMVVbfXuz7QHH7ZHFAa9GNh4r6C8DK",
  "key12": "2Vy3PedGtujxQvTZfR1peGXW2FTqG8mRKtuVhmTB9VCPR8TMps4CgFWJTwJfQRj9EVvEbN9NTUmXBmG4BQHbPuPv",
  "key13": "3kVGaV1j5DSRG6L4R6f1c5JNVosaAVA7zi48bq48LoX84mFLQ1fv8QWyJCHtGZEgYG6arzHvedzA1g7XygsYoKgQ",
  "key14": "5Ct3bxVYKDKj7J9y9CsqhWG3zb5GnNz19Vf9v7129comJKv6XPK77oQyzRarsNSkHgyd6JQZAZz3ukQNXWXmyie1",
  "key15": "4AGNDVKKKo7WpJoVBMGXdqrqpgJJbdyEBBsQpf6oe6byRAZDfTt7kuwSQLTwZdPH14bXxqtZATE7ybq5mUXoV1zF",
  "key16": "KSzQ3LN52gGa3g7ZYMffenGa3ozjzAE5aZ15YkAHQsm38vJLmXMra5Lp7zZ7bcnQV8taiSGgcNXhECVN7UwCd9i",
  "key17": "4sUHESoj17ieAaBYcsbnJjct4oS3kuBTRuvhbqHW67udHJyDyFpLc9mDn8M5ZSFzdcwW88EGyW6ud2yDKnQoGvBZ",
  "key18": "Vh3PPKDTWPYJ2sE4d69F9ceLHsrRKDrh3vJx8GvbW9Q2k4WnVXgEgYeyBRASQQibkPcttcrpRPw6pXD3XH75rQ5",
  "key19": "TkP1SrFuvjLaSzGRN8wDg51m2ZpRdwvkTLUfDpittohwgZerzCy2bPVaViNiTNBsdyZdw5UKCPLpRXU5c7iuktV",
  "key20": "54rHkYK1EetU7rNxhdSq37h5pbKfQnXmsfMhyRgVNvx2bLg8vZTpmRpP4eZdSFun5sL4zGU2r8QuH2PzSKVqfkYa",
  "key21": "5pZdAPUZGztt3jNVX5uJkm53BHsRFZWdffaooAAJPQbuqE7KpZDYtsccfFUpB7F6GvHFEMNqE4dxKZSWSA2V5mNN",
  "key22": "2o6Urvvt4k72rzuBthwxKPKeoYLhKW27P85YvyP4tbL6F6cJmBjfkeva7XeKDeLZVN6fiX2m8CZSaQpY1kQYei7J",
  "key23": "3htsnp7UwTe9s5YHXc23iQmpMZQH6gA7KoLY4aaarRspAKdwDjEGvoXYjnPaZ8js2eJWiQQxUHgf3hDxJ66uNEf8",
  "key24": "3n4N8MpEXzgqpxQ4yiLn1hLeX9aKcBpxFjudD3pHqJ5BWevGaAWu47mgKEg1CQnKyZs9uCYpCrDjX9ohH9EXmpwc",
  "key25": "3RmyXmNGGBdUozWnwz2V93CGs2tKTb5JhPgrgWEmXZA1o8PPLqNxTahpYZrcvvRzvjmC3mWdKbBPc19L9CX3qjL1",
  "key26": "F6VPJc8cMZPU8CnBD3eSPLuDuBroRFB9RtoxyY9XxSGw4CG1mhqGQ45juiRCmvaaqGuY6YdX5cirgnJEveiALVr",
  "key27": "3ziBHQJCB2AP3nBvYvt6MLh1DS8RTcTu1FzNPD1FGvoGj71HZuXTiWWrXRQqhDYFoe8Ar43YdNdkZisCvt9cPadc",
  "key28": "2uZMvZK2ZCkEMyLU1DDkDfJRPuK2cNYFKxUxNrGGw1gHcPCYe5gSir2VzqMkEAUCLJvnw2XWcU4JVWEfxzAivPXD",
  "key29": "3uz8Th5aWNUykFiB5sBGUeDEYVMF1ptgvyTknFDxt9fWxedj63dP6AbeuKC6DKoNr8h4ujD5K2jSQTa7qZozdbiu"
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
