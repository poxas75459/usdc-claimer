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
    "3bSeeeDvCmG48zTmMgv1dd7D3Hf982AkhLskRBBjk4mUhBBAJFuekd1HdMkabn4jDF1zMbvfebFP3FUUcuKpYR2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CVY4wpiALE2BmL1MZGwdFTGkhf7XneoBLoMGsYUzsG1F44ggWuNJvXmv99ARo7YeJG6jh2qjKuY2Qjp5wuyPYZF",
  "key1": "4DHwLAVd4apH2DgXn65UBY1mJuV45iUJyDE6J6TrQ7g86nVhUhvo2VciRB32jvKf61GTsgZ1p7Xeah9KQXpdJDkB",
  "key2": "3Xgk3c3EWZbmi1aDC8i7wPZ6QG9VzKRpDcfHHn5p4h3D5UVGaPtYd1urCh7S5dGv9dApPFZPR8fAnr171Z5PEs9M",
  "key3": "W7wMtwFoywN3PbYfu6SoRSZYikCXqommKy4eBUZ5dhkzLYqDEgrPrBzgwSC1LRZHQkcFUwhcCS6oirfwUBhGHdy",
  "key4": "e4GVZu6JdREdycd68udSYwvqPpW4c57u9zKVXAwRi2hdPgpLVEYVZ87gagVy6gs7jn3XrmQJxts1dqFzAzshLfC",
  "key5": "5ito1mTdgX3xhP2csfXwPRbun147iej2vU7DLAeu5PcLtkmo59qLKhViM39Knq3N7HxQfKjRGP8L2wtboVTmzANU",
  "key6": "5Evv6DY1RujdcCL2j4udQ9jzmCc2c62MHhEoE44cSa6aEEJNb9NkqFbSv92MFY9yyzaC8Vz2bbSPK8jnBByoGSAN",
  "key7": "5hqhzH7K31jyQyZ8aUSQuHYBgKjvvaY4A2Z42FJ1u5nNkeUVmyohLS6CZ4dDhrHpvMEQWy73vWY659mMjH3yKPdU",
  "key8": "2Ce6Nb83rLmRK9uryn11DRm1Bp8LM8kNjP3Fib73kmPDjyM7B4TEs6bJo3Efmh9A3j6UANeoLzh9KBzq7dGKU3D4",
  "key9": "3yzh1Taqfb5griLeAnfBVSJKwXKX78DYJ4TGNDbgLTWHhShtT3aj6wp63MXM4bxXCTfLXKt3SWheMf5quwbFdLRZ",
  "key10": "3SSm1uZY38V4QKwW1oqtGotLPJMkDsSxCm1Fi6rGpm4UXJq27PGiYUx5pAV2tWdvK1Tv1yJkkm28mgwkVrnreKyD",
  "key11": "3MBA4Ed6YhARXpAb8xbPjuL3p56h352oK74gV4GobwZodPFXnLyfeUgLCVsAxFvsAiJPMnjHTyNbvo7zDhvENUA2",
  "key12": "41QMMq5Twpx2T5FPPSYiK5DqPw6uwrLvgRfdLuVoR1ETpkFSsdgJwYGz9o9nf72iz1wabZJe4uk1m8qxnZDNE4qv",
  "key13": "2MteJQW4d49Cm2Pn2McoyN9ts1x6WCzvH9u7zB2vf2nJt9NqDfifgSVwvnfcyMhq9HwvQ6cbeAMYZAjE1gjwcCqH",
  "key14": "2EuyhNtLpuZLDomrPSmQ7Xxq8DxsxY93Evf7Wnsw27NqfpogEsFH3CMKGNpUnzCb2h8YeY17u7w6FRuTQGThNvif",
  "key15": "3cyfawo1kj6hvBvGGr9YfTgpneSMZUKsQLcooLDzuTozaiLYt8jrkiRt2CtHfBspAew4CyFTdoiagv7t7Kz6Q1Qp",
  "key16": "3W78BapvDm1x5eowCuTzDcrKN6J1zM8CU3FmE5sJPCgVAhpE9HrkgoshYZ86KYpx5tTAwV61hKSEDwLAgxoYhmE9",
  "key17": "49FuShBFx4irUJ1reowiw9Y7rjtMXAYBevkmfmitnmnHaXJa4VwNi74SsPeJsKewu4oVHzR2bCanfVLbXN45eBWA",
  "key18": "64dVGUjXyEdd2pbHZTB6CFFdFTimSDXQWaDc5YoEA1RAp3yzwrBHP7qE8BmYMXKwAknpGkNupMDG5ggY23XfiqxA",
  "key19": "HrUZwaJdxWeZNuHeW5EW8NNeUCSK5ButpZ6c9d1ry4qa1BtLdNpgvwhxqSKz2ZBx33stcxB3HarJ8N63SPrUMjY",
  "key20": "5GPFmrpi3JaAyWMBQ3ZHs6bNRfTA6C8ZDQar75KKnqJxad3ApiBBnFhzixZdoQzUUuBtXo2W5qu9A8aZP932y3p1",
  "key21": "v1qgKbXGbHnqceT2xWyJCYD6reozaPxgr19AeB35oYpqD1Qc6EogdKqLL8T4M2LoWu27qMAwyFbZWEzRgRWbVfe",
  "key22": "h9G779U77cFdLSxSPnmzZ4Y3r1Gkx9ZnfBmR1FLNQLYRQWMH8PyUG2wj5Yb8xUdhFKkQLNfvCpEbeiwuojqHjAy",
  "key23": "3K5rV6TpVVReH5nBByYWTpyrhpdKgAibXghSmPa3sRA5cBTbWsrEiyN2ganfZMSVoFncHp5GpvQgaKLWXxpYYwAN",
  "key24": "2UKmp1pTMHEW92G2SvW3Dphk9rz7bgJ2nLd7hLtkEHhP1Qy3e97eQhaR4mUWsv4sETKUEiju3by4jAGcMWBeHAdy"
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
