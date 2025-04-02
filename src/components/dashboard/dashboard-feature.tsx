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
    "3NjW7HLpynLuzXiD2kMQo6qVfhYBLi9Aq5zpyRNDQUTSZbJDNyE59YpLWEsbkVc9cNrYn3mTTEYVg5JPWbsr3zE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iYidZUQFSwDJk8kSJ9ftKC2m1N7asktTmS9e8om8CuEUQi529ThEEwjThPQQ6iSq4H8F4t3UoZsbgXzFyDDNFJ5",
  "key1": "WimBKDLar2T8M4M3kF6KTXyMfHq6uE4PZJeGKrEEHwc3zNbxgcoJAB1H8UFHJDxhuP1ydRqT5XVVW8ACGsATSnR",
  "key2": "Z69bYFPc6ZvApucNza3QLyo5E5tYbYHFH1juJQrVicmNvfNJ7oxuHLeFGCz228b8ww6J7MXH6i7o2KR8rWyZXq1",
  "key3": "xSMrssGxhWz11A8rvLyuS557ResGwgbRhzk1hKSLrvDSgAThJCk3PJ4Bn6ogQGHZG9nARVkQqBPj5qfiGqCJnwu",
  "key4": "4fNA2LHAij5ewn861ZLerWkJM1mwft4sPDutRMZqucfRQXALpKpCFxczMtgGkjqPNvuq3gRVVzohtSJDktd1NVrL",
  "key5": "2xgHSe1aCTiorTZiNhRRraHyGhymVjvJps9MRJpyg3WhpuZ57NQHWssCHwiL9QjJVeELgHvXZ3n7cYusHTzpmrfm",
  "key6": "3bPDDFeLj6iwDxj7UUJxXU5WC4ULLN7navsuJJvzxGsagNCKDsvStxHCaPa1b3viyMF1kEcKShDJ2h9rQUAU4j2p",
  "key7": "hYTq9Hxx1rhdvVgf1oqo1vuKTWgkMp7mUHV8sSkquHN4yjsuEof1iscPH85p1V36ofSDGeQBgUsxzg2BGer2Vn7",
  "key8": "4Fv66XAWuy4yb5HHbCp9PgCQM5eFU5v2Qgxg6Ko3C4ByoLvyx2HwET7QjAR2Bvj2NBBsB3mzdaj11wX47oCmQjeC",
  "key9": "3s2s18w4HKjMApgzB1GeTRyuvNBVMGnwkmme4nGk5kPcPFaYMXdyFNDMyxs36esWC7VbrciQ3kTSNh2pGjGyD3Nr",
  "key10": "QCMqNgtPwK8QZKSuxwUQZtVMXK25zkoCfFz743nc61EoQxLGX8xCxLmbGFXqJoJ4b7EpAi8ZiPRyMzxxdqLzDUs",
  "key11": "4fEC5xLn8YUkf7kQSPiMympsR8LvFreaJSgedqCepxnFBy9hKWNPz6gTY4FuHojo158b8UdH2o8qaL3QqfRqipUB",
  "key12": "dz1QVmZZevhTj9CG3c4K3fhVdLKFqK47Kh4ueqtPCwKeQx6azAYqtbLFB1pbfTSR1jGwuVcdkZGnfPTccYG4xvo",
  "key13": "gspo9dduXBHkR3R6Me4EvdN8wFQSjaiFV1LQjbNSqMy1WVmEAtBhjnHjMnR2ho3WhsPPSPSb6ihvPrX1ui1KGWv",
  "key14": "2XxBUcbf2BDg2f5oSxbmVjb9mjjPXBcgfVfXFhLe4Xkx3LX9CrSGUHEP1qnrhbPrioK2b6r8rSLHhh3mNZC2evYH",
  "key15": "2FwtSPKUDs4N2v43f5i1pCVysJ1tNzwYejTScpkjqE1mmueZrwgWdMP8giWKeb7jBAxJ6p9nzud3ftQwkwqsysrP",
  "key16": "4m9BSBu2rbrpQUzJaJYTPGH5e7M1y3tLYCLvGZUfDx3w8TREfhTXMBMmhJm5mMhVfJDVM8RLREoj511mxASxmpa9",
  "key17": "32kFfrurFhPj97oD9TqR1TcxSGXmKrypHZdhg2s5TMivXnpDq31BnjPEAEzzCtantAcBVE4Z8P4XvuCEUhGVdJLh",
  "key18": "26XRg1ZmfYVpJVzJhJr3VrWdUxjsKx4jrRnopNFNRdmW7dKcp9hsrGQBx6b3g3kVysaDngYyxCwoggY87576yTnC",
  "key19": "3aG4Z1Tg34PjdAHZbr1TCQLLgwX9rhY2ZBvth1jveboYTtoiwJ55WgiGaYixSDWd8PQfisjxwNEWC1kENRvMRGSR",
  "key20": "3GxZ9opke3KTYpM7L8QqVAugExd3ui3dP8TPGzmBNvRBqidR621WqQGqzF5HUoi1UZqmW7gvR4xR3uxRzmxkfbdX",
  "key21": "2s6ZY6J6Ha2f3YdJW6WooHsMDA4omoCSvVVsjuq6rYmxz7oJmf8yccXixkwGbi342zkGReQNjDv3S6CfgFBxDWgC",
  "key22": "kifHqtMnJFHYRfaXf7VZuENy7Tc6udoLETzuzvpj2c9wzTT7EfeXWk88FSckA17ZryyA7HH4jPdrYbLcPF2SKEB",
  "key23": "5exrdBWAWiTebF83VGGDUK9bKAtT6ARK2CbsrwLTwd5C6RjR8c7KxMPTFnLy79fKYzHHSwGMMQg1xwizpHReUEeR",
  "key24": "45qo5TFVqNskpysEspoV2BVws4bzwFjEaeaWWVrgUAv6dNMaR93ABjz2hS2KuDaGsPKo3c78fTn4RpxsCG4VJnqu",
  "key25": "3AFuh79Rq2PZCvvPB5vMfqv8sf9ZwoYftNtxLrahZZn8A9Q37AfbY1u2qNLwcSKbZyzRrgAbdEziw37S4qKfiWGe",
  "key26": "2zCTLVPWbXuEPJVB5bAixtuaJEeLrxRK8LHRGFip1PSBEEb3T3LNCJxayuv79yBuShzdaAoVDswxfTE8hbYmKdKW"
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
