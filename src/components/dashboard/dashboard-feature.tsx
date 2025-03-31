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
    "4X6qccqwhN3y5ddETasHjzoGEJQVkTwY9XyFb9EW81y78SS2FDXmkZQXExZpaWGBoGfL927tHBWpWkqGdGSS6PDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orY24t9yYGHFvGTFs5ZPQZybph3ggFQj4NUvqhKk5vTiyMKwYxggAXU7eCT2ge39eRYuZK1PidqNgkrRdGMj3Kh",
  "key1": "3wTCPxTotTJefmbeuWrDzwiSrNtPnoW8QktJT3sH4CcNSycsngHcvvATypbeRAp2Bqzztw5zr7FM9aWoyogDnShv",
  "key2": "5tHiH9fQ9YvShRkTgEZhgjengrUtMody7J3j1YZ6DLxVQtoVVeRxZ2ztJDmREtnUGYEXuEhjdTMsx4i381ix2aUv",
  "key3": "4ckwsAMCfYpcKdHwK45G1s8psxNEvWcx2MukRfCyMstKd54WY1sTNGfW4YC3MyAEJ67UUz6TGF5ihqPkVfdz34HP",
  "key4": "2gN3mtGKwdTBsFcZj5EsZKQvBZveJ46jQXzNBnbd4pYjkre71CQVLVg6srzujV1LTTDi9hu69PrZg7WBjQG2j8nv",
  "key5": "45HrGDfDZoC9doH7MzYKkNy8TbxqemSVMGch8aASTqhAhYnDSLRJXeUD1HccH4SVtm8FLFAxBYyKWtB7SNbj36bm",
  "key6": "4sspzPy9u5tHu6ARnGR3coEsWg11NK4LbdDCUPPVQGm5najF6jdQ79Tij4qswYrojj8xKWrKELDSST6RAFqFrzV6",
  "key7": "51VaLdUKPLjFZ4AWzFJ3C2Thdz4gaWXodPHjdvQDLgGnjYPfA6wwqKLnvtuF6nG42VYg5iKdmb5Jg3BvDzjZp1pQ",
  "key8": "5thwZLiyUwjBc8tkR2Vw7LEg8nYDFor4Fvo4EVFxXzGYcjryJwa8huzvpLCudQF7Nq2WnxAa3tSpwpa2YAq8L1y6",
  "key9": "4Y3BtExsGgZuJUUcmoVjKAgUVBbTtL4LJRbMxBzwBx7oHRgouHWMVM8KXvhfMTLFd6g8dz82NgRSg3pwywqh1Eqd",
  "key10": "2ns7kofT4K3Upqha2MaD9SFdywWx1FRJ8px4jP629cDpyWiEDGvj5QaZFCByXKaeMXu6Fi1NgxxGVTtunJLwDi5V",
  "key11": "3qdivEK67bWSvRnxCiL19jAugXrJYMvBPf8iqy6NsnRTH75uanJ91s1889ytD1ioGsAFhM6xZPJaBD8Kf2MCMczC",
  "key12": "rRCcN9xk3A4SdkiuJ2kdSPKjhAP85RnkLf7DtceydNVESXshwgQjdqHyujyD71zBLN7FTz2GpgLrgQ5Tpzui8tG",
  "key13": "2FG1xMVfbZEAMXkP5QnhZLsiGN5BCinc6B5kNyRNMMQpndHTesmRps8eiybfmoA2Xk1YgZsB757ZGihSBUdk4GS",
  "key14": "NkCiDZgSvK4tTk3J8EXAVwbRMyRfz8P5FPwTvQbmkGpEKtNsDFo5uS6PUYVqKpJTFqdQccDDA4d4BiqR5gQNSPS",
  "key15": "2L7SkSj1QFhcQ1fHDL5Xd9GJdPFwdZz3SgLy2kd5pDkdPuZT9YG25iAgu5j2gFwnXtPcKa4iFBaz9jRXDCLqf1Av",
  "key16": "5XCqyah4YRncMmR11mrceuWjQiQu1YykKpnE1kXKFWHwuS31i6HCafb3sBnVVL3BY8K9JEu3D1n1RwMFciV92Q43",
  "key17": "tBWuLfoRPRQmrCvR3f52WmFrJMqgM1LvCy8KQ2LEKiMjLqKtJBUtL6z3oHQsS3RRNKbhCGVbkfGoZBR9yqpxJGn",
  "key18": "4gMFK8XzXa5w7UUjEuQf5MesYecM5fp6EGL5aHW8y29vx9HiBZFBFRegDAhmZKWVbAxTv4Kjd9D6p6JfyBHmAKwN",
  "key19": "5aoLcE7R4YrqLTs4PxKsMtu2uAqtHqNsMTtqDCr49L4KeYkZ5mpqq7fK6KU2SytDbAEvQ1numP5a2kfYimo1hPW5",
  "key20": "5WvnRRFJw7Xis9Bbsm17T6xaF5sXRTg9JTUM7JtaneDERGPgNXxvxcGC6ncFHGkwRZX2vaS2W5gLP3hq267ASLF8",
  "key21": "2outU9xJ5QDqsxHS2gtMuujiYxQhqKm2grd1WGSQgMGZCskQ9HmoSd7w6E8XaAt3V3iMmCnhu5bN9BZZPXYSPCnp",
  "key22": "tZpah3GQJzF9T7125fdhUmAUpc6jVQv87nU6TNEDsQq3FQdMM9kYjt38YgSpZpsh58rNAwycd49JcZX5Mtr5CUr",
  "key23": "4Kdo1xvmwE5bpzLB1ngFxYDbyJYuSGq7ty6GoTVoCyiN7Zo9vfV4xRNHfXKPkB6VLHBr5VQaJZSRizBwn1zbQjz1",
  "key24": "M4S3ZXMd73TjWgmijFTaE8YMB47KgYLui8GY7Nexwwuj8GuBVwnPaLQ6ZvEkgakMLrcRbLz7DW8frTzCohiLivD",
  "key25": "4LAzDs2PU1FiLHwPHczAC4AnYGn3iv9XZF2doot13epbRgQG66ka1vrxHNzF8HUxYtwhRj28LMMeSS8iqcmh1u8f",
  "key26": "3unCF9mNdLevvxmNrxLyTiNWiUhUVDS29soh8CHA6HaSeVmjd4Curx33uwe4VQDHzL7Fh4wBpV8GciKjEMosHG4x",
  "key27": "4NayGnQcZHuhDNm6sDyMhSUwhBhFueVoe6KbVPTJTBZJfL79ckLSmpvdPsWY2EkQUcq9tfpHyXP3pJUZZfntTdoW",
  "key28": "4V9gwspUmwQvxKtVCjpgYP6MSAwHXsrRfMBxLRunC7FFLgBUmhDdGvHjzjAC2LPouNuoWTgY6EHjU2XyeEsosp4f",
  "key29": "4ti3a1cC2Q3ixWiaVGrmzn92W2hfUQ4fhDU6FYD8BziyMRLTfP7Z2vrcb5A761ijs5uL5zdRnnUkzfGpJcaPDauN",
  "key30": "2ppRi32CCehATRaK6GPxzTsXGFwaQue2MT3YF5abF4h5h3GjyfAoeU6yQtuGTfuRSGqMmzamEaEpzbrXFoLbizc3",
  "key31": "B3HHwXHJ6nXDNLfQvXBJwcSU4WXB8pqchC1dn2uUhfPCD7J37Jz9hQrS2fUMX1GsvdXBycNyVyzhFkWhi1ipuJk",
  "key32": "e7CTjT89ZZcWZYwjuDufifazzew1B9muUxkNmsDDPeGN4QiwyGh2wrS6i8TiaN1GCrUDXFfyUnvJpD6zfNxk9UJ",
  "key33": "2UaZSWkoRrKZHwo3G81UGXiqzkFihDh5jBQcVgtVa3UNjhkEJW2fPxiChY6jEU4Q4wZVSjoVV5n7gyu9xSH2Epb6",
  "key34": "34gkikUUoQNYc7mNbeB1xmYkbfd4poZ1aKdeZZwTcH3zZ78AEme7RrSPm9LMtEvRvEtbK7UNsAAkrMZmLZ3LdXAz",
  "key35": "5qYnzaJox8f7DiGov2VtWUVdw9YEnsVpyCnFsF9QdvKnGgwXt4ty7i4nmanKSnHHZ2KCTGhghRzdvAftnbcQ6upj",
  "key36": "4emndvzmPzCwmURU7kJAVY9SbHyhgy1amU221WFGYcXQKHtUmGrghPVqEWRgZvuEna2Bh3gUv5aAUVvJ5cPJ6D9t",
  "key37": "324PbRdPiLA7XUHB2YMqodyaySnmo428me9KsbaFTS2sFdwpPfaQEPetP9UB3RbBSc8ugfZSPaP1gSC8u3Hca9kB",
  "key38": "3KiTomSJpjCqyo57RZcyASwEXikePavLgLNnZijEs63o7SaKbPVvZsrB7hK91bHqLBRU5ZN29Psa8nYAe1DLpgfo",
  "key39": "2hbx6pSio4oPDbkR9Z5Knu1EAEnHHYjJj6wscWrnb9D1dNgCG9xY9i4s5sQ1KRFahSRpMzJMG5AshSdvunM9hFuL",
  "key40": "4pw2FJGDFYDwVR55tiCpV9FJW8SfsSpLwZrE3U3amDdvphqX23K1qkzDKcS1SfXQAzqcnXKDMMXs7buPYczNujzA"
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
