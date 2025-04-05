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
    "m7HXAp9Cu8cDQVzAvDuAjVd5BNuRNYLR8kqAsHgWr9nUHjGRRmCMgFzsUhrdyqVJ1vUMRaFVnxTsRpMgbpoWF6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXPKfQ8FomuRDFVPjszh8tNvXAZkZq3sQ49scn9e1SbpAymHD17gir4Z8DfzFmk293xu46RwkbnDiD6JAaqe38x",
  "key1": "4Ga9nEH3ufvney7QhHmGypJywN3Rs27bTTGBrWLkU5u9n9XfWh9Git3eMfTEQzEjMUdQhT4LcZHx9LT14Cw2Z4ob",
  "key2": "4BdtzmR7XzADy9Pk81oZ8uvneh3rsQgbVsXzxkf81U8fAT9JbDxEnYPE26j9kBaqKDvzZCL8uwwNb7pWKC9ursW9",
  "key3": "5dDK5jtNbMgfg6EejEEnfQSMxtzK5iGKhrog8fLrRr6x9VJeJQR2Hkzu2uJ3KvSJqR66TPUTaebuuZ6c76wy2fqf",
  "key4": "4VJcCfTkMi5SNRqEsTNd9NJV7FQtMtVvGZ3fpGUMabSAXv1qfFUgZ9yGayK6msZFKquKCtu3s2oHj6UisxGK1Nnt",
  "key5": "5uhF5ENxwpXfYxoY5664xJNwKK5cfdzweQpunWhvcWgz1AA3UUwHgGSWLUksWYZ2kRdrJ6SjymyJE5HxPUtJdAH9",
  "key6": "45XFp9sgNNwfRczeatyfd6vbF6KxqLNUm5oCEYsbRNVCAJTjEXQXqmAQeLa9PT7bhn77BLdnzw5REwAFBjerrqdh",
  "key7": "2z9hk2iUdWcpmBmenrrriDQGn1Zqvwc2BzVRcH1iZ8nhnpjNhAfLtxsp7CHHccop6Bb62TU28tUbnC5xf6cfeAQi",
  "key8": "4UGKXAzmyeytWujFweVsDqEL6QdF6gVq68R3PfizUCS6NSGBqHzGTLxFnMnLuyaDvhh65Q2u5AaVAvTCP3ARfXsM",
  "key9": "4ZsbFL1nP1ZvqWMAiSnYXrF6YAUT2QesMDH4iP14vvQSkSu3ZWz6d1KwPjEDeF9KpFioPxMjVuxxqCHYWahUkbRu",
  "key10": "3b5W4X478f87T3C3QQuiJvLKC368NAzea7DtoejyRPf1g5kcBNBYa7ZMcDX5afDCn5dbLz9nDmfth5yt88zoPUmG",
  "key11": "4UtRiSkYX5mPiKzRbGYz1fjdC2pDf682fHfRdgmT9PqVDNk8vBVHVjwgSBDxVXWJJ4j5ZQ152gUDg2KFZqQ3hv6S",
  "key12": "58g3tJWgwDVGjNn7hWn7nq2uLKiURY4o2HRkPGFV6d9UH8ru5FUahvn61j9bYUunMK7y48p77HdLCLpf9MhzU28B",
  "key13": "2Sj4qDi6LVQ59EtHuhjMLuquF3yNhXvcKa23LLvdiFPRMMBTmyT1C7HTSGPfNVnLqwaN3M9y5KETC95Msvc46mVT",
  "key14": "5LUKuoYHSMiXdwevdAkATb3nGQB3FURVxw4m4t8nJdEPZCff74eUU4MZbpMsY2PVUq5MdxkzsS9DmqyNqEy3hKLC",
  "key15": "3ZdaKbXR7c3GkbwPuFYu9MbsoRqzHVLZzhqtaPWEmnZZtQNgQZYSjGczwV3dFrWCT2vMyHo4ijDjqwmRsZkTG3L2",
  "key16": "2SSwjSFjgCW7S7RzFwfHh7frJPPzBnaPLVNfwigrnPG2aEdL2P5cjiNo2M347o5SgN8PtbJbx9HgdDbQMvizU6iS",
  "key17": "5sCsfxLMrjvTr8vwyLYQEQgmo9T9EFLqKNnNuj5Q6puvZQdU66AgsNyCtmmmF5XR9Ek8rRBjHBzA5Kbs7syweJXD",
  "key18": "2ZVxBPh91kEptKdMPWPmT4aN8QkePS8uYLg1K5Dp4pMKuZtWiYGT4xG2QNFR6pRww5LmSEpTsS6nwxtv48PGwf8T",
  "key19": "4P8Kng3wRCKLB3CrYZh8HyJ7ginwiJhD92x3oCuEaqjJhxeWd39nar8ri26RgBLZRAYqHa9Pn3UWpWYYR6Swq7j8",
  "key20": "2wrx1z8g8HKSQMJhcesv7onZY4cG9MCaSYDFa9JbauKmGQXAqC796NgoLsmntNJ33QMq5wfGQonZoNCCCQuj6mri",
  "key21": "4ALu2THJDWkvBVLjmYqJsyhtWyYV2GWENqJnYjW3468KqoxFdsFopDTMfJh35iCq2BbcWAgUSHsstEK44y6SpiYq",
  "key22": "4Cs5u85AfAvdARjsoRMBPayd8XBncuhy4hAPuE1ADJSwyPm6W9V9VnQGg8T9jbXn1qnhGNTqPaVxX2H6bSLzEecE",
  "key23": "Rg67xh8AcoUsuDo2GsSTreEwiTSH7nNgqMWgbEfpgG4GXptcS1vq9VojCAuFaN3pZ9hsXbSrvXED8vuNgAwnfnj",
  "key24": "5ZCgetD8c7Xk758nVfd5c8EaJjCsxcVUmqiDAQEWFaYEaRs7tMkMnmxnWYVSy4wq6ESLmJpULa8rrrEr7NaHLSBa"
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
