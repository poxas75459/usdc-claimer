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
    "3cr76X626fGWu7Hj5oqAhuvGiYCx4kqJGw4TDUFg443CVQ6r3s4QgeRqtAhooiZh2kUzRPyUKGyGjiXnwVxLpWE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284kQKnnwqTxtMSRFa5RbNba8gWR8sLCgMRABia1QddcWbfD5R8YnT8Xga89M7mYxJKjE8TmED5UH98yNkSry6YY",
  "key1": "3aZC34Qo1wWjsgSJMqaUvAhSBDiwXdUa8NSj2bgPx6oTMBqccMQ3rEV1eVZtKKFAu6mmDBiyiPcd4mkGce6YqBkc",
  "key2": "2CdLFguExsCrHgVpRvgRm6nLpXygcudtTEnphpqCgxR3hCyaL1JqEYUu2niQXXpVsGiJLQTMwMhPGPXR5P65B2fm",
  "key3": "5jvcRXfF7Gd6aep1PhMGt3uRpHWRKNJPQSfqmB73YtAF8tVC3gTueGJstZ8CnnVUQikWxMBzbqXXButD1zQzQqVY",
  "key4": "5eEzzPRzyJYBPWLNFvvffHhfHvYGshFiwCqgpnvyaLQp1riufvphGJwAhTcdndzEbM4q38vPvvdWUsQSDHXGp9xY",
  "key5": "3vEMJB5LHjKCUjPqR2JMgWU3vYt7ogiKXiE7qT7nf8Xxbxqsshcu4JSM8MeycxPV2efqReP67yYySd3VCo5KMG77",
  "key6": "3UPwnHSEB5pqvufLm2DddX1su9KrjRWot5rrbxWoL3RHCtXVBDHddvE77LQRRhH36wnNoypZHCi9zu1qrbyTPEs",
  "key7": "hcUsFQDQ8SuG3mWGmTCUTU5rettaKSi8gGJPVZ8Q2mC52uoajbedaB9q1xCFcjU8mxZvRkUY6ToUgBMwb9eXuZD",
  "key8": "48v5cK7v2caV8QPbqvVbgk4SVuX37HUy5gAuDTNwQy9biNQ7cA3HGUsHASNXFN56aUDEk2qkkfTmYCf6ZUWnR3m",
  "key9": "2rDFbTob8p5VDEZHd6PT7RMobqomtooExg3YEE88ZDKLNz6akTP1tB3JrKhYaNQRw4yyATHqW3zr4KrbCemzLcNH",
  "key10": "rSdGwNgDgBKyE9EZoCJ4LWkYWpQymuJFUuNZmLNsKsCztrf7tdAj8srQ2AZN1etvxLCiidLWUFRAJhQXeHC6Kt2",
  "key11": "3XpU2BMdD8V7tNeScqVFoG27z29RJCcitp9THVUbhaV3dMeBHUMN43wLNoKhrvLaLYF9qrPNuekXxGnY3Qr742X7",
  "key12": "4Z6hSHNhq5BnpAJkC9FqPcthSUw5CBM6hXkCyotjxuYbogdUHiULP7KxQ3ZYNa8VqAsTe2cNx3ddD8fUGXLwqbxj",
  "key13": "63xmK38WkLDkYm9bCyhFwZPmAm1kjXqaQbtNg6EyrrtCBDQxriPDbC8VuX8fFUq4ipvP6bNbb3QF7vP65eo3j5Ge",
  "key14": "29rN8DhmSYDAs2VAmd33axWjCxsongwdBeqqyvpXCSBjX5krXBQ4B1DUkDuUupSqK7pj4DTgMwAnkxVppuFGvARB",
  "key15": "298AiBTa24z8MLFwA7unoLdmMdRSFQynyTbYAyoQ5v9ThSd6NHewG9kWyK5WYd3ZXV24BMo3zKfC2ti8wYo4aiNk",
  "key16": "cHEWqLKSQtwcYujY7U2vLrhcWKfVWNeefQ5w1wRBnNJVe5g4HSwEH9UPuRTMPgFS1vufUTyZPthXPNpKh3DGab7",
  "key17": "2Zi5iCmTC18Ga3dajhrpMeo7w3b9Jim34znJrvVRATbCR9EicANHg1pXkqr1tExypc8XaFnrg2dtBndPiX7BjDZM",
  "key18": "4PL8Kmd1131b1W1EHtEpYMYdSrEc4pKK8gtpbKEY2HuM6qBanhkSKLnbRP7xnQ1YSB8ZpKbfFcTHGEamaaXksTqG",
  "key19": "5ZsZqDJzAaZsGUidF62s4nLoTbWHLK3v1sAcEooA2ixb9zGPTxZLCwzmtT1vU35S9SVY9V7aZQQaPDa2UCjTmTF4",
  "key20": "9gtNBsXG4imq7kSqSoXnPHvfRp1cyHhGdgZiRHwLUG7FPxY58fVh8YikFPhQaLVUaMr8TCUBDeQPRLPXFqjeeDp",
  "key21": "4eyuwMUXqn6EPLBbUTZRE4zn2ib51WrAhnaCRz57m95kZzXc1sYjGsdtxTkkrGnD8wiDogjohAiN7idz6QjDeL1V",
  "key22": "4mVP9RLSV4WPviTb1UvR6szUDsFyzuPNWLPVqos27EVwZrfY3kMnFCmF3MzGv1EAQoZE737b9KWAQSKvXZ64wkKu",
  "key23": "DuRTZF7rf9g2tDeqqzFohCv2TpssJ3Zs9W5ZEggPAHtysXXJkn2Q9LhwyFKAmvELoPsdtaTitn4YuvhpbrRZm6o",
  "key24": "4xLusuhjoTpUYSNxMYNB63YwSNTwf57dLT94PovrzBYPZXre6CaWDLD1XrJqCuKUKeqeznyXFKKyN6HTYS3NbL7E",
  "key25": "5LJussipu3tdux1PGXv2wipTHdsvCa9cKzUjoQGz6HcXjgfncGZESuayPHgXkdpaLEwGLYxGc23oWkpGA2wPUZQt",
  "key26": "39cwxz1NwhBeZN2FEdDVZ4kutnzkqTRuUk9PXgV3qA95e7YsUUrty5QePAucC688GymfD5nQ94Zi179rK8dsGmoR",
  "key27": "52a85b3ngBmJ81H4C9Ljmehup5XzXYx3dGaS617rBFceofEBwhBUiUxPsc7AqChgv4yW2bS6qY3f9TTQxT298hsn"
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
