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
    "53zumjYnqpZeYMgDTjyvEpfk2iWyHe6VMusis7AXBHjrnVsBNUqjULb6Y1bZJk3KRTq1ofT4AZZm8LKkJuA17DKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZRPzxSw6QcJTp69AgGLMDyVT9ByWTrgTD9krzCibgxw67KR1Mcd3FQhbMT3MsmmJVsRyKhJJCMXS4ccePKFGhD9",
  "key1": "5zQWFcrSwz6pmkGqw9rs7JPQoZ8C7YJ1sw4bMxhwqYsH5oVmXGjvXCipqFmXmnq4iNjRS5bKq55c8QAVTejbdh6g",
  "key2": "UgkoN2DKUzp1fNLRYt1Qwx7FKooS1HUhrhN3piKB62fPpnjHoogdnwQ3ZHfhBakKKeS2pi7e5gJEn81C19j1pRw",
  "key3": "3g4fX5MxQSHL66HEjr59D6o7PiPpVRGsCMtr93xTm9cCpmUv9kpbfM4DA9f4D1ofRg5gXANXKXcuChJiBoKhd51K",
  "key4": "55jEreWQrV6uMnKrq9oZHVQbjq3HP2ihpARfEQCZYQynRJHntd9FpC4GLXndzgDv2Xosojohv7BLKGz6JWaciPos",
  "key5": "3FoRdpLBFubSvYtkkb8ALZLX64mfnxpKQU1tuR23VyLZCkMHrjvYuua2etrkCP9YpRJE52nyAyq3CKM1ZyXGTTgb",
  "key6": "2cnJNPFFaG97ewQgU4oUkbSNA6dqomSi8CKb7xCXBddB3FSkAQ2GmfgGtCzHywAQinfnV5AT9pJSZ8tQsVJ2Dzv7",
  "key7": "3D5ZNXaNpPpYskEztbTPmjGmudhZaDmqYDf4R8Br7PF1wqp3yBzj3m89oxqXS4h3Bb5VHfwSkJhKKs1SgnBBhPm5",
  "key8": "5aUPktpWiLsQg5uSTLRziVpB7gYMCUhRvc5JZL3kgERPsYWrdue9Nk5DRQTjgFjRicUFW8SvUuTrix3vTXofF7L9",
  "key9": "2Fed6t9J1awoNzsECzizUBnmweEHLjkkEvrSVxfpc2JTaa2bWtuk6Rbmgqs6GikUrZRuRMeuuJoJJBUeBevgSVPe",
  "key10": "3MA6WomN7XCETHrxmeRJ5qpL6BCexHASjYtkb1TTuxA8Hhwd9ykXTtHGUYhh1o6WHPayX7HCpymdYjwPiiEYWZ9g",
  "key11": "4GrZCE6qxN9baHzVNMkYBAaoR6vLxucEtpDRBgighgQcc16ieXcwMYjqw7kXxuQ2GAi7731puSpwhHmcH4PX2NLi",
  "key12": "24rgBse8L51wfem4j4NbwyvKGERewN87oMpndoMse2m5nNAftVjvDdC6fQWtsZmHJJrQ88AhWSvWes3bPsGdt9VP",
  "key13": "5m69cHEJSW9CcCSK8JU1VobTgdYAdcLBBz6gHzu62QXQ4fRMGthkcpTakTqUupsHcpHHjooyKjLR6JAfRvfrSYdv",
  "key14": "35v4hu2rznoT813SeKU5fGFCeHJmgKWuMtUyZ8UF4qJeMBLCkHX8RdV4eYuq22NEhWYLaLM2nMRec2JVYmSh9R3d",
  "key15": "2a44xHmyav1HbQ7UMNe4jNEHbGTK3VohurMACKo7TcpkifqLkRVTcPzcJAD71RwhNLNdqRsX5Xe6a5VhVw4b8kb5",
  "key16": "64hSBK59eCxZPfTMwXXPV88TveBwJ17Raq9pMghM3WfP7i91sTNiuPhcYkgrVWTrVT5i7HFcL9PmSYESGGLLpgee",
  "key17": "3irnwccCug8GXus5vrCGRPuugGHvSrkTSAJtP6gHiW8gQSqX1ESSyKwh2xPR4Hcx58UnnuJVZr5dVtBZ4CdHzRxT",
  "key18": "4x3AEMLp4QVrQvH24mGbvN3VeMZH9KdSF6v5xWiFgZf9VKXeXyrYpvdrzYwLFLNB3cf74ymuAGo8tBDA2pkLtuyA",
  "key19": "3qtwveWNt1JN1fJHxb8e9LLjGGpuV3z1QzMx4o1U9di8XccVHv157KREmsxxKvFYndrzvpDrp8XVMkYXGqED24pW",
  "key20": "5N9zpFoKN7UiYd4B32roAszE4xCSzV7a31Q35imZPd4jh86f13pE9koCxK8dWmuS9UxNHzRHXxRxP4PdYr4ghzGA",
  "key21": "RuevDBgWSpYveGMWwPwQBG8ZQtF9GP9GwmfhaELb16EW5UzLceG48YT11dn8y2KBdgJ5xxWyRFnKuQAWTXYPF1T",
  "key22": "2mnZ3DLkmDF4KRDN5A2TyKVfh1op9NuUC1yUTx13vowxh7YV2oiFGyzuYJYGuE8o6K4eBSMmkZK9pZLJwsGHERGT",
  "key23": "kYdq8vRn8xQV1VdhSqBQaC7UYB1GD9hMVnwo2u6Yb1EzZXz8n3UJB2iRBSfQvpizCrSWSTbgBM2wuUk5afgRoH6",
  "key24": "51k1P2z9QEY7NYat7Ry8DfWDuJrR8PNJWBqtHNLSDAA3fiu5nHMCGSwQbjwMvvGEaXLx3487x8tgWUJRXH7suW5h",
  "key25": "3tNFSWt5K67KR9mHSePaP1NUdorojmZvJgbymm4zHscakjwyH2TuZFZXVTcPbjABXK6x9E2fTzuWKgDCxSmZTjaD"
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
