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
    "5Z9MpCfz2Lq7w2uV6ak3Cnosr6LLKNPdwthKgaH9SWo7PVsSZksUyQhK4wZrMnY63ZNmLHgNdiU8SBCWSh9rjB8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4353p9AdmxxfWsssksi7e7hT5fqU6p2pWGL4u2gKZVtnHqqr69BjzjbFwdziVCbdVpmTkEFYZiTF7JZmqbH9z5",
  "key1": "2DJwUjQyp2xBUxoCycwX4Q9VcP5dBDDE9PqfCATcDqLdG75QrWZEZcHYV3ZaznEmfJX3ZkskhoAd7ggRXWd1EeJg",
  "key2": "2K7dZJ7A189eRyHDakyMYfLcr7yDYg6idFLunCeag1B4aSsZPfweypKRnkLNaCArBfBVW2bPvikemmUJcsAKNduq",
  "key3": "vHyD2Q2LsEgwRJRWtCcZn57nFhsYk7k8aYcpYu8M8P8vvtqAXXed1LgfFrVbx8WJzpU3DGUY6R3fWdMMPDAkh3w",
  "key4": "3J7SYQwEUoSuuCStm8A6ySc167x7VLBvR6y5gLTk2k2iMAgiQ6rNBqvsENG5iSPNNcJzQzovRjvP26JZbiF25R23",
  "key5": "5KKdQMJTobogW2ZysuTBmvrbECe6Z7hcwcEWdidSqKLVwQDsNToCfwheQgUqxe3cs4XSSq91V9XysMVDPFaNpM5T",
  "key6": "2mcTMBMofypz5Ptf7dLqoVMWiWiPxtjDxXPAW9GzLMPhQNQsmZEWPJdcakDKQfDoboLfxdUK84Sfy1kCDgfc2eFi",
  "key7": "4D94HdhsdVqttmrUrSBupGZK5Hbp3E6Qw7rGpbK1K7zXo2wS7rsKq9Drz6dmd59HwyVGuK4KZtgh6p1de7F3rzu",
  "key8": "2tQF7xz7WgxptRNT5kS12aXeW6DKwP7p6S1iiM3WXdYCL1Yt7AbLvYnhc6oTxyy3dchLw4GzTzRPFdCbqeMmXMFL",
  "key9": "3reTusFridm56PGcDQbobXH63B8farueivF546cVBHAvRLrodZY4dVaQzJsaXeCrev7T3L1vHXd9eKahndnhCbiM",
  "key10": "4NR2k2KnpAWsekogQB1izqJaMPM528ZT2tPJcktSZzT7MpEPajYuGRRdR71WVGM4VBxmSH8wQbcNzt9utpuYAXNx",
  "key11": "2hSupbFho8RTJJ4yHbSAr9yx9UPzMKrwWDR7d7E261RR5Vk8PsAbf8kszPkypAFtx5NLoxoWPmgAuw92C8y5WmJK",
  "key12": "33tw7XLEXhKD7p9hbdXXsWRruLzeqFKeqnhASoVr1xjs94AdH5rDWENF4i5ewyCdB6jJDkHzuwJW92rG5B3WT6ut",
  "key13": "6659iNXwtoMx4UD7LVR8beyFyKqwCz89D1VyLoSKLbgDXqqku6FTThS4MENsATKVmzaHdAnFBjV8mus4Wgjkaovi",
  "key14": "4UJWGKb9S4MWrpYRvrSSgJF2MaGrqMzCo2W472Qp5TJwnxsM2MoNzwasHzETwMhXrjSdG6tKMXvXwVCEBd4dGmUk",
  "key15": "x2fRLR1MnUHH3DdbB9CAZjjQ36hAbss218P6n9jeUC9nVB9fdCJ25RM9Dpbf2cLAJjuneCTDj9zU9qpFLPP1dW6",
  "key16": "4SjunWMgsH6t248ctUUYAiipFfYP7vhi9QuzFyUPoQff88tiHNg5XT66nMA4SecBvdErNnU66WYVRgNymHFtCojo",
  "key17": "5voZ4Doz9yjoWZfx1p5ArHNWxm7cmKskRchnnm8WjtTRmNAgEYwbWZzGgAjpMCCDkuq3iBPpd5YCBypzdDay9R5w",
  "key18": "2EJLpFecKTocSTUKhvB2jYWH6PuhNkS82wCvMiZX7ADynXwBHYkpk5fYzhmGEyZKknbeiYiWYmNobxy7sE4Pvvws",
  "key19": "38zRY8TPug7DhtaYyjpjnZLiq7Cj97oZ5pjhkdC93cL5y5cYWVZz6p2yuFUrar6zdmhcBVYjCjxnfDpN82kzmrHY",
  "key20": "qyLAZzkDWJ2ogWwEjHrK9bwBjPKgxANTy5QzPehsaH9qh3odPsAPDS7aGAN1YmYZAUVnuFVUeD5z7zrquGKuACp",
  "key21": "AgRSxue69GVySNMtxWtvrHr1C4eijRp8QH1HzxE6v1nWviD5LU2PKfzGzsC3FQbH7Kb33BvdSR4uWvW4hLWpcBj",
  "key22": "qRTUgYPQVfW1tYWCZVL94fLwQy6jaA4J99VjPvnf5LWn1rN3Wgn3ziMRf7DEaJCZTxYksdgB6wVXMkWmTPh2iz5",
  "key23": "rDfwUEbQjKwDaeBR1Fdb6ZeFiJEh52zkbqM69fvKuF3oXY7mRJ1vrJdjohJAXafqJLZmMA3u9Fxbwm6hxdQpF1S",
  "key24": "29nb3hrSLCSGhbGpStMW39KziFCyh98h1FvEiBHbM8SYvBHzj1VT7zsAED5JSuVoCvfhLyU5Fivg9DGqR2H121mg"
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
