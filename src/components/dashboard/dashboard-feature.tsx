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
    "4MXegx5ACzFbMnTUxWcvHs3GLKG65EKqQiRXghf723i7b57NMR5nhEGJdCxa9HfFa1DBWhv5shVwMA9dKSzvaS4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgpTkYS8H59eQ9xKJk6L2aFsPn25cA1TDnWpMDjzu4CG3z4C64SDSRPiU1wBB87Hw8qu7VnNeDtXRseyDaPY7Vu",
  "key1": "5WyCqwUjnP7DmKi7TV4aFKgUtG2PbRXsRBG9TKf5hWVYo2f4mf5XasAKASProWZ5rkMKDUqe1c2YRjq7wWRMJyPL",
  "key2": "2HYKFTBL4ApRAxWWLBMcXYC2BJZovbFkwMgtoUfSvC7baxTAecTmwgX7LbPJDKnTnoXCHaj4Dcgs3XyVsKMZPR6L",
  "key3": "4Pe797CsVd2mWA2Ecerrs4HZmqq2FLt4NPmda5irqcEKwdkRR3C4FUxExCPj7qPfnvdeJWz7SpCeBxbomazBPGzi",
  "key4": "2YUAYJiwjnvFMY77qQ2ZPyNuaG2TTLm2m7gFghruYBsa7CC2sg1ag4R6MjSVLLbbKVNaqcASY1B5hvdbmCR72PJ8",
  "key5": "4aG2uGcQ1c3d9MNuTFcZ9YQggKf7DQeKwCvUVNhFUvc7PFNiHqc9JzP4ExuJKvX4VGxyD3jfgSVnzE7AKX9Nswg6",
  "key6": "26hMA6FKzppDxXKAPHrZ6Mdbnk3Qn7aDtm8GJD2Yb19rUjNCuuW9czBcXoPxWCgVyvELLszZXvx8RJ7xqLG4Ea8e",
  "key7": "3bLBvNjXPhbFWyTnjoKJkcoUiauqvGfPsSmpCC5ZAxUrcah8Cb1H5u5cGcP6BjxP7CMLFPH5yGVUQnmZhWqhdx2x",
  "key8": "SWiEWmvxUw9iBq2fAfnh4Qr1riXDWjBwqmK1G9znAnCfGbTzaYqj7Cz33gMjpZHGmoc6hf1iLHYWxrsU5emUn97",
  "key9": "5LCmR2CirKsXRixzVtkzASrjC4ijTJGReN3e8PnWeRspetGUgK58fCanereHxVufTfezRGMs4roTo2Uax2Mowxnr",
  "key10": "5nEn5vBaRwb3hK7Hk3AwTwmDDb3UGNYDEazPovxuPGNpk2oh76K8nsZnNad7mLJLBJQ6i2MeZL8y3MfW6jjrAC6Q",
  "key11": "3VT89cUXV1zEoEQLQjXWxCXRK9iRyopNYQmruLHDCHtuEwWUq1LwcCS4qkqYNaHELPYma23busjskGNQRNcXq1Ux",
  "key12": "3Cg6SHDtP1LRo1MAYBozPAbK92JbE17cJGutDKxMrNkMuvhgDTzBWqKYZa6CfnsdGEyuvZAeswM3VnP4JJZRetEY",
  "key13": "5ccVnWhs7sqBLj7AZmafopYvL1Bt9caMXnLjLGJhJrLwjgyFhNhfc1UyGXeVMZwogVvnxWTRJXbU8cp3YE8LMoG3",
  "key14": "5ftTVeECLDwA2anPx8nfG2zgazbGRgDRvzkYX2Fgd7cu6JEYrohoBQbUKEQqqDKgKqbb2gBUqL7k7xqk3FE4TsnC",
  "key15": "2PWBySRaDBjX9pCAuejLS9GtJPfajYJw6YTmgFFtK2ntVdT9AYrkpEhkZeEKLcifSfQ9neDi2SKKJ5445yWMRPoK",
  "key16": "4cMkkemcTMkJu4w1G79Nh3BoPoQK5CUwNW2tphSACvBn47T54CrpWMbTZ31rzEq4dj5RwhAH5zrXxKwMfvNHwxGT",
  "key17": "1SSJBCi1Xza4YhNLGJZdFfaDSjed4f71ZGaXBoRBLmULQ3fJMGjSWSWy5FfKpXR3nDyuhF34vLPCAUVR1SvLSYY",
  "key18": "4QKgEKryHskZivc2gtARHAUGEWXFAvoTJyTAKPWyAhdd1LFCY8kg1mSbBzfSoB2AY8PUridU7s6G1VzdcJ1LMHKv",
  "key19": "p8hFzn6kCW74n5vnvaAM9eteCBywhGgaAcLDrjmJoMUdJasH5p1x4xiXnkURtNHW9f9yQcp5hgU7HAkZF2vKYNn",
  "key20": "5frzL5GuDTqCMY1QVtpYQByoJY3XsX4N8Q2JCceevcrYi1a7NbuaTNCUgxCSXUeaMKu3dq5WS6YbFyQ3WgbXzXha",
  "key21": "tUZ9QsNR1tb1TaWJ8QJscQtLfEvN9rQvFt1SFUEMgTZiotRq9SLWesFXrG83j6EJkCXMCZH6ZUxs1ejg4v3fPcu",
  "key22": "KWbmPrs43tNsDwQLgpc8R2p3R831ZNc4dhX5xps1NYm9gCwxi9mZzRPZDGrDkSv8CFYSXwAatpQaBDX86jUdZHe",
  "key23": "3vncu73r1ZpiUVpzAtGFsX92U1NwJ1S55Prt9g7DsRQxjavVsfvPUXfLmzd338n12pUQ5pw3XDGHbNKPYUYBkQsK",
  "key24": "ccJBysYvabLfjCZaTJX23zAmwEMHB1PsoJR3qeQsrAxU4PRJzBkMpXUEja2h9Ff12unSJjKaNZd17X3Wpy4NRXM",
  "key25": "5BbDBmp4YuJvPuQotUW4YJqSL3Q9PY9qtms17RVmfgriF1bLEd4LydmLTn5aCQDsMLUCwnjNGUzp9M415DYVGdwE",
  "key26": "ZnahSQVdedGK8zgXpVqmi2tFLXkKLjamrLGBbpuivE2yqpBp69rbdhXfWqx3hpQ9vpkmZWV5nneVp57sLS66KVJ",
  "key27": "2WLTgAzBTDFLaMx53icaiWfFsWHpA9ep9Ea8R1L2kK6XrKRHt6yRaecazQtJoPFqnz7DgM2iPceYTobhuwQEYc4b",
  "key28": "4iRjKzuKYZwCPZL8gchDzuR5hwsgxMFny9z6nQsmtE5UXSDLAE6DGpmBM2sdx5zfENugoiJ2kh88gXsKyMVXruzp",
  "key29": "51H8P1cu8GHNMsopZR16wCgsqynoYXByXW4b1CAyZzQMFe1K1pHjzNGTdeHBiUfXgyoE2NyfjLzDQzP53bfyaneJ",
  "key30": "2vgHLTAtS6WThfSW6gT2F8As4TQ8XAvdSR79x7cwL489GMJgz8CM4g54g6LzJAgc4aXQ2Ht6iAYumTfSBdK4Gkof",
  "key31": "4v2iHVwwKVdqDX4CyUfTUoviAbu5QKFH6sNsL4QcTozc3eHmZuAPcck71aXGk75cBKThcNw4bPgv4xkktpqG9FrC",
  "key32": "5f9a4pUhCLB7XXE8jjxkEF4Tfy2zyzLBWqCjHJwdyaE1N9BStvFvbtDtnofA9UGPSDiWK5HpbdSghEAapCbYDN8F",
  "key33": "46C7kp87sEMv2v3X6o1DiPXsRdL7rZdP9sQNJqinSoDpRKJ3bCADbgDnZsz6o7LWykv7Qtr2UCWT4D47Gb3ediyd",
  "key34": "qB9tuEJc8fCyuqMTos2oZ4AfibpxemKgMueQVwAqN4VH4p1ET7uBQrGweigzgjfz7cZeMqWckggs4iTGpcquiCG",
  "key35": "4h6oCBJeyaY4rVtyPvw6mrvCN9tn4HhgBDwk5p2FebfRLytChtcZevUZ3QskiaRDvkBakgWuc6Z7no7RkTMWeDCQ"
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
