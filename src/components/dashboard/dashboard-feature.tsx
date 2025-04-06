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
    "4HcZmvXjFenge8QY1exTiop6Esh6Sd9NSd7yQ15G6b7DS2JLRzLWEYz5jTE8K59UQwqJg7gqFkp1iDEoPc51j5CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJaZ5911ZPZkbqLwasx1x8TvCqG4CyF9LdChikdZ5FyRNqzZVxj8KPYsZkHKN9b1WXtQDoCBdbKMD71grCLfq8G",
  "key1": "5QWv2W3DAF2hfqiHbG392FF7xPthZzhYYPbeL73TTeGtbwL8D9jfa35nBntXfJh6p7BTPNRjXMzpw9z6jnNysfmH",
  "key2": "2DRsysu7W6eVsaXDUiVk26yJEQ3GUDPNCnNUAkSDqn7SsZbikEQBYSKVBUXtduB7hN5H1aH929Co9qtQuco6s8rh",
  "key3": "4dQXRwopDfN1Uv2Fg1NkLvuDGE87p3mbsgXAWJ8aFoYuycuvPpVWkKVtyqWrmsEFRR9YDr2yL62eUgAb18Zo7TFn",
  "key4": "3U745g3X3e7RYbsz6RCTvjh5FxjUovFWzUHgk2MtzUh8FWLvE7XnCMBuqKaWyuE7qKCRGLCCAPj5HoMwg88BJzAd",
  "key5": "3wuL95PSEPnNzN3CFWERDjDE7HB7EyASnU99Yp7eukZhUf1VEgX7uCRG377gEGvhzK9zrFm5V1t4Lqgr6vyB5JYw",
  "key6": "43KYwGB3y2hKs64nTse9Bp69LQQDfzTknJz9Gi16KwqWXa4bS3btC7UkW8Gp8BQQPXBz6ioFYmjekcA28NfeVupP",
  "key7": "3Uhsj5qf2qNXW9DD37NYpbgFzK6gvDcHtp9j5QzoCAkurao4RjVvyFqHDmtxEfp2tmAd9ygkmM4XvPFi32D3U5gv",
  "key8": "5K8kWTx2aJcHoHey6fVo7fnBNbj7M1EWPHVZ6zbk23zW3iyzxDHFPAzriCaofLuhMCWg3p56rcpztuZnLhe3ureX",
  "key9": "3iNtFDfakkJVVsiMLFnLA695WfgjfXtfV8A1NChCgBzzb9oMVGaW1a7gt9X131LB5sV4ZAQc3wxMgcfY6vRbAb24",
  "key10": "21jYRAouHinCsGkNp6hvnLpovk6R1XcVBfdLFem1a7fgsYwaU37XPi4cHySXNcjKG5An5D2hFPtochFmpF4x4dA6",
  "key11": "LNQQYth31t4E8W9dLPqpoCfcJcS7b444VF8MF3Y5Z92u1neKurVSGBC5WVmZKwuNJFVJsEYArzBiL72sUkYKbNj",
  "key12": "4q31rPMrTEZn3oE73yvSjW1P59uCWt3ZTSaLL89MUcDikHue4og28jZzH7jaESdBTTo2VDoJARs1yvWX7B9hyEDY",
  "key13": "2cNkkZCyLEVUWnoehrXBwAKcsfkjZkLa7kbfzsy8jb8V9LXJuLmf24b1Yz9B5jpBvbXmZpAf2bD1M2UEfLGE3ukM",
  "key14": "5MAnaque7KmgUWQtJ3tVfiKPtqoXCpJeHNu5HJq1m6s2XpQirFemhvseub48VBoqSUwShtkeRvFpd2kxZR5oR88w",
  "key15": "3vWwNRoow1tgk4CWiEKoPahULQC2eFeXnEVxK7JUuqkb6NTM2kbGqUfSw2qmZiqq6pajTQBpawma1wzLi22Dr5KN",
  "key16": "3MU1ygQH1ZnUiYq1rKb4v3F1FMQdNPXb6pDUpGWvjzrPn2FUAqQKRztLnXMJLaurji5j5mPV9s1dHoFUWt73LrjY",
  "key17": "291rvWnf1cAn6661wmyJqiiEAsAwCTa8tFM4Zono2CSUKaUjqY4QSrLVKqQdBgnKk5eR85LoZfnBqYXKQH9Vp9BH",
  "key18": "3pZ7pJwkqFAeG1qYv1exUmGRLJbu1yQZMkZCNo18ZvGvdDJ69hmb1ZR6iQAAVNipTsnkeF2LLabuvr9z2LBnewCx",
  "key19": "3Qg4JPzXpgNWSx3y9m56g43Xmb1xzSMPb1tdJXnBo29XH726UEVqePm1jGwcLhceN8nvAsuecPR8EuJSjmPnvtEE",
  "key20": "4jYqH2jyaY9wbBE5UJLCZ2uZw2jVxQoXfZPoDjwYSannpP9A6uf3Sbw5FDEt4U5Ek4s6cy35LntuR1z9NC1UJCmd",
  "key21": "53HfqSeQZLsCeom17GfY1sHyjJJuiC6EJ7TyykCLQ26k6EurKbhW88fVi8mr4A5nFkBKPvQ35KpQxg3bMRf2nMjC",
  "key22": "Z9pHiYSQBQ8TUVXLuLNhb311Y5Qj7LZA8pZ95BLF9JWnGqQwPxXLc1wPrcqjckHd8mcMqqPSZc6B6mX3t1p3GMt",
  "key23": "3FYR4eNFagwETqDN9suPqGzo41Gi3tCUVkai2t1RWEBEsmkFzUvwuUNnDhdU4CPVg2SctTCqB5Lj8bYZPbfEZAJ2",
  "key24": "2NCWbLFqHNAGMuU28CTG2rusH9RGPKhS2BQtRADQ4wFqZDHHkXLwpdURjcSNcmEGaCjFS8ZLd7Dg59PuV3YExhaY",
  "key25": "67GH7vi1UdYaTP6FD5NcSThUQA3CnVLpZa62EjSiaLMZcVMz1EbbHhJTdCysXcJrEdErukTreUYu2M1PbzfpeByA",
  "key26": "JWXFLFMMaTvYnaTiLGodUaDcTB79gmY7RXiDWpJiB3oSN9FyScRTwiP6e61U7pCzQPmUwkGNZQqCSpttdYjyX7u",
  "key27": "31TzrvgjemrFqBaA8TAuSqfgu8txYBz8xpbWiAV6LPrpiLqdcn6ao4DQRR9bb2doCAymKdPCgYHEcDenT3qmGZ5H"
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
