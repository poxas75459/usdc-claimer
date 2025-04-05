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
    "35CYL3Vn5wpmfUuS8arJZCSGAstCr4G1hiyLUSk1BKrKA5Rk5uTHSXF4JGh67CatSpAtc6BfBq1WZZjA2htDyks2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "acxkAiNaXMVW8QMhxZUrfGEogixWK6B3xmu9BTpPoPRjBJbmVzmTaqfv28jqC3SqhrA7ZQkE9D5RRyk6mDTaYAD",
  "key1": "CvjLVcxYizuLCdkkRbnjatePX7X9a3HEZHdxb4fuUHKTsh1beK7NcktCd2bbK1PDvyVujTv9W1BeDnzp5YtKJr1",
  "key2": "5zKCso8pWNWN5rYDJ3oubyW7bZGtbqc5am2FrD5ZyLaLhASkuiM1rRbzobYmdF5p2636UYRNW29rjPbKYDeJXT5N",
  "key3": "5xQwXw4JunWe1F1s64Y9HSPCRbGmBWaFnio3gq5fDxStDoXMveWXn4sbAdk67xR8Pof2ivTmhTikGk8KCaQeCHrp",
  "key4": "3nd2JZJveeVVeEE5XXadBTTAsSHbtxSuhycgEvjfLHByBCskzxtnYZAVC7tNzxQvnpWyXUArycmYysyoYARWQeC",
  "key5": "3MHQEL1RBuLWgjTDkS8XnZCn4j2kt2ouadhe4LFzAMdkWzdVGLvJcHpA2ApBg2PM4vGmnCMYdPs8s6KGG8fp16si",
  "key6": "qqp7Bbbora7XjzA5snQPXRVFXkYp9PVuxvPRvCmWw2DaTVg5ZHCS9Dr4r8s5SX2gBVnDCBcMNpaLesUxENea77x",
  "key7": "49QyH7Vi4umkQkttkR1DGCZygU7itQuVJZG7iAz47NpdDD7JdRPgLgn9p2HRUTgk2jBgQihk7KmcK1W9DZFWAgFF",
  "key8": "3sH78an1XPat8QdoMFGiR9AdRiN15Ez1E5A5vagTLZAT4JVzh6jsqmws3YymkA5gWDoYzaU1T1cbSZGDarzsew4V",
  "key9": "5dfFzS4vGBZVpyGvQ4DUhyDQHADbCfkvJyJDTCQYYzpxqJ5top72wzEYKPxmwGV6WhA56zbNy44cHGDjYv399jMJ",
  "key10": "4QtkibrqADrQ6maJq5RmA8PJYxTh7u4Jx8SudWz28FqgA4ynv6e5rWbD4cKe1UkyBPDwi9LCtsk4vPKwtzr1bDGd",
  "key11": "3Adqw6GrCoPMFmNt1KCRFm5SuUcefozb6p2j7X67E8qj3hL1HpRkDeTv7tHKgn7wA4arwph6KP3BHBJNkGybqPqZ",
  "key12": "3MfAcxPkj4MuSgbvRDTF7jNKDeAdBWiGGuyttpE8UTdzrEaLexbEC7EK8kzzp6yRhLvwweez8UuLQwtepZNomEMm",
  "key13": "3827rfu3tQFNG5ygQBTeaFmJJh6AXGaow7JXMkFzgbkjxrkh41aRiw7WbkjPL5qTeBAVDB1HjWUySBLmBxiqMkQU",
  "key14": "4giWX5RedRVy76SCHTdzbUt35QEovtqrsiGqywJwkEMsWhMeGsxCh13JqSqET2cZH4YyvxL1jT4gBhFQCaQMAezR",
  "key15": "4VbGwcsfDod7SDj3riUksRkzyNNoZrqRjKnXRQkfHZCYXjYzmp57ecVjKsWAfP8gd5YbWHMi55kVnLB5QjnnFifv",
  "key16": "3jdJnMZyKef6sxje3abKtsPaVsAamTZY9PKtMKiCYk9nHQVfWs6J2PvN9BTmaT8xcEREnucBksoUcE466kTzYrWB",
  "key17": "5XT27GnK9p83hu4ywbad8SJS6U2oTLmPtwQAaMX9QVPoiTAj66b3VKxdYHd7KuZ9bY1oy9FrGtVdhZjSDBBeWrEJ",
  "key18": "4miCWxsKzhqtvBqEmdSAqcBY61quM1DsfFv5cBdatnRTE92bHEVDon944g4yhE3vMm8CDLcfJgogJveqoqEK8SdY",
  "key19": "3ZnH7TZCD3pkPD9hvxAZTNhywoQe2s8s56LSADiyCW8zP9BZgU4L88bfvWJsQzDxEDFXKViLyYcAE81JXjiwcd2E",
  "key20": "5RG46p96UcCD7vzQ1EWoHcGAfY3fuupZ41PDKvXFW23gjsrzmgmD7FuemoyHhY7nSkiaDUoN3ghpSDUXvspJrzzu",
  "key21": "4e2QgK5he3qnRG1uJbx9XuZwCwqEh2nYTP4JHX2qbW96sR4dvcbJ1uF8fFuRujNWcx8DYTtbsW257G7kFcnmUsSR",
  "key22": "RyWU8KkU453JWnDLmLkNCeCFgZ6JobJWTKSpsVHNvgjkRUN9WQWp5su22QUKyvNp9pZBzGZWxAEfpW6k4fvxLpN",
  "key23": "2AknzKfHraTUFQ8HrYzU33gMuR3SVbfCu1dgkzxyRJdcRwLHZ1rTFGV8FUtp5V5m4UhvyQAA3txhRTATCLHRm1QZ",
  "key24": "E9nad8zKC6VHyer89YbBQkcPhvL4V18PqVSy9b1hwCuKuDSeQv2gNtJeoRvUbW7cEHjhPprBQcyQiCziLdtW5Rm",
  "key25": "54dnzQA8MXXGhMPRFnNJD9kw7rsVMJuMsFbMxeUhXbd2D1Hj8QM5GfH9MRuawfgMqcmsUakWxnpH55YKuoAjkU7y",
  "key26": "56Pkw93Eyxv6empVYRaRpsPgBB2iJRuXyh4BnoEoeEfyYTiiHbmvcfdGkXuzr7Kf6hTd75X2Msu4fbcBYDbx2nMq",
  "key27": "5r6TwvMjGsoeBQpky3gvYbFGfvhc19wr7cfnFNEXe87wu4KDiwCtEFQcVV52KxnKvpWax8QidiGpMq4M1RDbAweD",
  "key28": "3Pbn7qbjqFLuibkhxeJcv9zpW183g8F82BpTntBpPfxLYotSrJo9kgVRftmsQfWaX15MkwC5oHhHrSwBFjYNJpKh",
  "key29": "3XVmkaHa7KRGpz5twhjGsZgXt4CwQWFhG3LHPs1o9vSVtsJHxCwG5DWmiZupQJnKVWHNBa1vYvKRz9HXNCtKiny4",
  "key30": "4CAbtwPqtCvu9XZq9Semg1bEUtxry1Q8naRogjvDWtNumFVzZNezsy4NpTNfShwiZCfV2nH7y3MzAtvU9wG3uVPn",
  "key31": "4MckzzDStxXgetYMJU2E1z7BPmqZQuV5MPk74rt8aNBo62fwuc88VJuYwoV2H1LYcztjsZudxhehvBu5vwup16qp",
  "key32": "56DutP4xHVsWio9wL6kjiE3HjeYus3fHoftgDCQNLeBwjeK9mHJfa1pgjAb1diZVL3TNFfkUakN3f235XB1FcdH8",
  "key33": "4ABN6GefXUvg31rTuVzp8pLvKyQArLDSM2PxHztKv4DYSr1ZAkvCq3UmFi7pTZB31iumG4nBXPi9tC5mArLoLwSw",
  "key34": "KeUQqLcp3F6RipTcL8jWmdC7D9fVQRSqGHuqjogQzusqmXkjhyCtmNWK9sqYoTPztVWwPsSXYXYipiEhS2c8eGp",
  "key35": "3ZgrHyfVy5JiwBeuZsYQkw1VEff2qNUi398BtaivVx7wr9Q9cNtGKW4TfYT1zPX4tpXNwENQfk94um2HCAw5tgFw",
  "key36": "5TFUYzij9aEW94Cs5quq8JPTQntWgC6Hq9ABDrLP1kx6d9Jp5fFF6Jd7zbJHfho8LatgU6hKW7MkW9Ty94j75JLA",
  "key37": "29pep42dcysbco3MM6dbKP5arAKzQDFoMiU41uGdWuhWk8kcTsuf8fU2GByDy2ubptQFSQHCFJ2kNHHaqaqm1KNL",
  "key38": "Y4L8oxVpPASpweP7s3pSXqMm6upukXxMdiPaRWc6A4jwZreWXf1oVMLapt8ow7LLwHBbABpsck4xrd9dBoGdJLT"
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
