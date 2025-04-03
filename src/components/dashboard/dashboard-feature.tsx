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
    "62ZKFTmZYdpCNQTNWEtLoAvS7EWuck3afANn8HVW58NH4pW9ZkGA8TY8RVmrKuB7JBDyrQ5tugN7arReU315QqY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WM1dLMzZgBwHyfhRPFJuLuXAdeoMoTwbvSP8zZBSnLxVDRGVBjmQ5HNkcUgMTdb4qksyneQYeRSbRhgPaXcC5kN",
  "key1": "bdeW6franR1bC7y4BJ1ygiitK5MSDkMZXubXuuJ9BLd8xAPGFG1TnXeiwnN5BHPiQ5V8X6RMPTXfZqHgFUyaVwG",
  "key2": "3FKqt7iW1vmZHjEbmYpBSvKdcwMeof66m9NkuZHWBJ28vE8Scwm7vJrRoutfoRsZXokrKHLdndg5KojXo9RoLBEs",
  "key3": "3hRudvwBrPJFj1VYvpXTv7vMK2wYg1L8Wk6roetp1YWy3kzDBkLBkrErztmAnGkNLj42rUcw7esbsVWHWWB5wYwh",
  "key4": "5KxNtDQCt7yLUCK1fwgcJZxDPbdHTppTCsojgFu5Gpa2tEr5UyTYrLbT7YBJPwBqq6ufcxJDYnHQJpnjxXAhCQ9W",
  "key5": "g89D5mvhkbxCCW2CVqTaWcuVWhncfy9wRjvz2bmidsxJG1RKqForTbvXKpjd8UadTAR6HmpmyjJGhdpinEygjzy",
  "key6": "vecj1fv37tngeLTuf6MEcwXc9DippVZ7zLzQE7ptc2SR5XzqqswzjcB2rBBQqsrgn4DAMdSE4PDba26BG5G3Yiq",
  "key7": "4DCXDowMtwXJLdrwdM49vczdBMYqJy7yhpqs1Gx1hRWbwLFM3FnJGQFCTzQ6AigFsdKGF7ZThnzLAvgCsrz7wJJJ",
  "key8": "5xqrbDv1918qgjTHWVmPBD2KNzKMFSpiBcbkh9ht77z2NvpogNWgiBoidRNTNtw9PF5kmCL2Tjmxg3S6JEGrRsPB",
  "key9": "4kPbGoYyu6Hf6ThSEr7n4vRapAU7m6YhvA3eN74jWG9z2V1wYNAtJygs9ciE3dCodUepYToSJQEusUHCUtWondxz",
  "key10": "2HAv48VCkLBSqYLARaQxxjFUDE7CskpGBABSq2jdwE2D7v5EK5C94m7CPedQijVrRfGfXT2ZZKGCDdxNGxJwaW9X",
  "key11": "4sdbj1LkGBFaL7Dos1KZmfRquBkns8AXq19zovsZPXXdXoLfApti9LsF3fTMwi33CpuLDchdR4rNCCrWb3E8Svx7",
  "key12": "3fq3e8qDgTFa9P5yCK8wQyFJ3Ysq6mACpb7wMc4ofh35tkbamjhRmYZ129DWH5NxuDZHh6p3oQcxXzJKyCFPyGfF",
  "key13": "36Wfn4ZG4Ta4F3Soe6eSUzNHRbxbFkn5g3fTCmvRKHotayLHkuP2iZno1prQdxijKMgrAsKXjfSg8WgMWX4YMty6",
  "key14": "4bnL1xpLiBNjYfa78xq9DxpjfZH6gaxmQqgdXGf1hbH6oMPAFG4iZ9MLYHbJM8HMi4ngnoFFMx4QncJDioXUWWnF",
  "key15": "4fqoAKetC4ZaP1RTpAJowpttKxkHAcmdk1hAdo61KRQRmvPw3ZWCxEALwcWKtbyyepr8JuuncuAT2AcDwRtPZyD7",
  "key16": "Sr5dQtF1ksen8z1Yx2Yv63EbaC4NBSWfP2LmVqxfoSABjFSHjQbGk86WJuavuR3E1xHi1xcTvBwYvzy5ikNGco5",
  "key17": "8fQE85agqZJgingteVwdT65KCnxeMQ4CpwMtxghZPKUz1e2xA1CkKP4EyZV8aNZjEihS8ReWoTax9iEna4ZitmM",
  "key18": "3B4UFBivZNN7btqrRpq4gSWfmYcLjovcDHPmf56ym6DKEQ1wVRi7kR71hDmQvj7M5BaxZGD381mEtRLQzYyX3J9q",
  "key19": "4KtBLX61mwDxZQdDiEacug3SEDYuoxhq18YpWYRbXsJgXYbYAyvqssuhGh8pbUQtEeWrgznXmqjmyf9yv7rL5YAE",
  "key20": "YDAXW3wRRtUyjD5V3EnQwkeR2hJQbPmnxNcBRetJKzEh5j4AmF81CUt6MkJqwR3CT1Et8vHG4GzuLgyqE3fXZog",
  "key21": "3sDSoWJQ1mWg5Mijcqra2G9Ja5N87Yn4qruEssCHR3sZxEeD72R648ovoyaCrd7Rjkt9m2aGtrpRa2LEQgDeCUco",
  "key22": "5qwkSvJGneNozYXyiSwMweWcLWxx69S6rW8aKSpWLsD7nGAxaWGBcYoSM7cQdS25gyT4ecd8XEtT3a8yCDXoSSRE",
  "key23": "b4Jo8oUmsW35ydUuF6W2YMM38sYhWSYZ6pT1dnTe2znKxf3GRXMarHSHJSUGpBpUBvXZ1WkmgMYaN7iajLmkcq3",
  "key24": "5HsrBEM4rbUCHuQn7KmCVsqJpQQrHAd7w2bJW74tDtVW5LE5MHmJgx8th8uZAFu93DSkK9nt9Rcy1aTThvwkizbq",
  "key25": "3MsAAnBLVVDuKUao5aDEG9HWRnx7dEVkpUSWBBbX4y53EAZqp3RNZLsYF6TuXLcQucNp66YN2rkmvd2Nn1X4Hirs",
  "key26": "2uFSUJ1fiF1UZWg31FCTcifSYwFqCmKPpqtWTnzwe6XLBX14GeTpE4cRKEyEZe8hJ4sCg3Pt8VEuvJN6NGvDyFci",
  "key27": "2mpjbFMxZG9WQEkqoonHG1ATY5Cs6XiFhgGcqHFUARA1bdznniQvEptDFQp9eu14sLHEF579sJKyr5deycSWBAKX",
  "key28": "2AV9QMQBnYNw2Aga7WJbxfvMyCqubgkVqroPLiVXwv8FPgJCJycAYthMwzRzcm85jY8uB8mNjf3xpnAjv4EVCYRj",
  "key29": "2jDuzrJZoBYZxHzoEfn94RLf3gM9DL8CUA4YKimqkBhp9ngDXmt3ou7WdmTssnWzrpxTg4jTYMvMRG42X1mVzCwv",
  "key30": "7ETBS3rrQkw4UWUJz3cwriTdeRGLbmvU5JnSa8SakLoUHvCsfspxGTuW8qfycVemiCakYPfmGiDFFWNQKuhJkc8",
  "key31": "43sN4dWxQd5dyY6Mu6XJb8f8cz1bP5JdUhbyZzdrKmNTGFUYfraXPqz3isk8TKHjfZMwwJ9Er9mr8rbU6uW2dntk",
  "key32": "h68dWPDcKFJLiZkc7gRs6USRxMg86TSUmFhW9vf37TMRQ4QBczkwsxdorEXZFBsGmYfkxCjmMPiuhsQCoZ3Bk4K",
  "key33": "pdnDNBs6aAqvYL8hGoBt6MiANdm2N4dp9XunRnojY6zG9SJBeuzVrQPGZzezNeBFNsTfdNdpYGNGtWn2fc4SiWo",
  "key34": "2tpQF7FSxnwGkGdgWvukCaam8YA5QoC3pF2jkb5WrMuu6QFCzuvTn8KVSCAXgKxxb4VQXZrUhPdD2HqM2ua5E5Wv",
  "key35": "97zKr5nSYwZQBUPHDsGahopg1jZSXXc5BidX4f1eAkMvBygpeHoom6HjHiY2jGfLbjyYhBVbTCBmHBJrH2go6z4"
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
