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
    "PNKwTK6Gtr3B8iNkRTpR1dhFBBbJsLCYiHiqAvXq8MqcLPGNLYww6zCYgZGfthPBg8kjgBVJxgwcY3FFhaTrrzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T5CPGkt71qwfUq4apvA28a82PscVzFYR3mB79XosTP7fTbUwZ4V5VuUqyfoSzGjA13V7baujUVARtYSr39DswSJ",
  "key1": "5V5cyT7AQVN3rnmtnZ2oRZjBTithdnpmPn6n6SRJSR3CxVvjsuL9AE6QPzibKocLiFv1mPEKkPJeM9DkRFASAF7b",
  "key2": "3PvwBWuN32i6D1jqxuxEHGw4Npey911zyEAk9tu9jX7S47H87UzoageU8fsVrfkc7D1xHUGVdtdq2XzsYKzXpmpu",
  "key3": "5B7EHgyL1QbXKTSBoAdS2fXTjxJL4K7pxgQ9DKf14FhBaLeghUmkaYTDsYMGjQSVL4CbGqMWrKZAsPw8smSqXKHq",
  "key4": "2jZXZQuzk7zuhUn9vATKShFB9VqudfDeTMRLok4TvffD8ECtZZJ1yFSMYefNH9MVikwdCYzMnKUDUEN85dPrvmaG",
  "key5": "1cZ8dfQrh77fA7CUZaqGkyHyKhQm9MFNdneFYuQeT25uFFcoy5DhjhMy5M5JKyMKN6nntMCXFzwUv3bGqUVVdhH",
  "key6": "2Gm7HMbPhJoAk9z49RPeci3XSQQg6mXBkNdm4v1Hn33HzzCksg5CFwpbBwXMJaAUhJYdyFqXXHMAXN7ns1zbgHi1",
  "key7": "CU6cCiEkqgffXuvXocXjvo7MYXz2w2ek6Wd4ZVDe8d1N4whZW76Raxrq4jPUP9WHCR8cN2uL4BNMKK4vectU4pM",
  "key8": "2RPJetTaUA99VCrQEktt7behAPV49pf9iFipTKYop7Gm5PaEqaYTAJoHvhDudcXXZqzxpC5vUHu9bfyF167W3g7H",
  "key9": "65rFKMU8uGKR8FJs1kejhnxRfmfrfqLHBGjyQxeUbmg4zxvt9vithYVqcqukpAAEWE1QGdxj2BpKA8Qs9GHJUX6u",
  "key10": "2MJFCfH5QndNd4buiTg5BiKbR2vkg1wmkAwTgQ5nzC4Ffogt93DTQdCXMw3VunMiqekGgKDtiM22zzCEDFCVB5Uj",
  "key11": "5gYUtoV76n6xPkcjwxbK82T7eaNYYtftVUVqDRytfM1qUJxWXoQfxsecw9FXsBrXdnRfy2gLvyZ3r2Ux9zQFf7sV",
  "key12": "wji6j88KYEFL3P8gvfQtrZSXLLi2zbbdzp8pAnSn39jEEq9Hzf8CjxpEASiFTDtNHkJxybVWNcW13LdoQuCRUn5",
  "key13": "4EwpHFd34t1xENaPwV8xFsEphNBcWiexUFXdG9EfiZYQyrxx3gJLKomQTvtGrGXnQt9DzCYeUxdhykhZxM39TDwc",
  "key14": "3MLVvSpzmmhZW8tJ6dpt7i9ZySSsYPLRJUqQZX7pGZJic7HWP5YaGiy1wn8K8QG8fmHrusMV1UdRTAUJTKCZ8cC4",
  "key15": "4oBisBkoA7Sdbpuj4uKCJmAFumKTMEBEKfTR1x4Cu8sFiYGLpcTx2RA4YjdHTo1gGKPXuCjyieYZWEFnrr36bh8W",
  "key16": "2Trj3FP8JYrNkpCGAjdKemXzVs2smvTfMkCGotzTxF917sH13RpVqKGUguGQesdwbrASvAVFTYvnGyNBsVeefiti",
  "key17": "52fPPVqn1k9JWeEeZbWLd6WC8WY4YqXbpngjpCbcTJ1Tgfa2GyUne6EPSGnWg7m3yZ6fURvTtfc8wAKhSSHJPPNy",
  "key18": "3ewLGoXeYbjQFfCrimSZ6N8sLJqMkoinmPuHQtQ8Q92oGqa7fErWyx9CSXiYwxTeugY38h6L2DbfYmLSdtqjkPK1",
  "key19": "4vncD39gbJDn9UtTAWF7uVgGtzoxGCshpwiukNeevH66ibbmTrVD8CR4xoFhSjPsVkZMg6Fj6uLUeK7JCiE2LoF8",
  "key20": "65RGydW3djnNjnU2Nz8wVXYQvhinR2pQyakmHjz4hcmuQpXh6WKTcFENHjrbnBSuhgpwcTii7qedhNQ8VJ4ppB4K",
  "key21": "5faFWDxk4ByQBxpjWqLX89RTe3Agt6ELChHn4cJXqVdUbCEQfzpYSAWsg7ug17Nrn5Grjm3hy2zsrkBnedUuttrU",
  "key22": "qeCkymwTLm1ra4SCcCEptkmJxRNGLCqMqXAFVSEwwQN9pe3qAKbLWeXWStoTftRp9ZNBvBCao8gghNrFfxSsmwH",
  "key23": "3Bhh4eDiX4y9XRohLRFRJNqEQvSEWHF4C6KpzonA5wbtFd6KNYgb61CocsWi9ivKUZ2vmyzpSFseNU1iqkWUH33b",
  "key24": "2mwVqo7LNEyYVLBzYtJTpv7jSbzGfBTeJ9poZaASE6LRvThw3kZjyWq8kmoD2qJoAh9gU4o55YeKZX2dDYDxkJJK",
  "key25": "5CEwzETVh12Zo3S3Xuf6ppxi11XVtuj3koH59TozWGPWKhH4zJMeJXsHSmyvPydg95WJG5ASSSyUnpzsCe8nAb9Y",
  "key26": "5zEJa97t75djkt1bBTg2UXCtAkX3vSZA8hQv3UznnCCjhrhwhNAjTuByWq5xcctkJkidZkKKoBEW3xP3HQ2sypdL",
  "key27": "mjxZD8h7VfHp8ZK7M7X6NDvyBiHcMFwpy64ct8EUc9PK3woGPRc5fK7DBudTLjXkZKpwap3dnfz78Rw2xq1YfkL",
  "key28": "2tnxdLUpr1cQKvPU6V9MtmtAgoYZWAj5RrmZxFDfRpSrEaMYBezhzkc8MmYB8P5oUTWZyvYZMBGnZVoYpuL3GFdM"
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
