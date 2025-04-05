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
    "GzYsStsB7h1qj6SWV98BT8UQJefADZZFH4vQDNdZKTiAvcUcT2LfDUZXKoK6GCb9wMpUyW481v1tUg2w2qdURsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21beX7swPmaCtuQzTnUuuEtDh2M819aNkncAtT6nj5yQACpsCUL7w4mrEnveeecnEcQwkUGTzqxtaJN3MAXfeoJs",
  "key1": "5z5NMTP7kb7pzYpVKWHhumF5xnEL4jwvvuxg48ZPucT8E2nnjKivm38FpVwDkxEkPT3Bs4Jdcqm4aFD5qyRbS5Ls",
  "key2": "2313EBiPKdEWCU4WUw2UgMkrkGSw7i9d55B48w7VcTKsizaz8hvMaBnDwZkJu5GPcLDn5rvYcQcKscrj4bRMmqdg",
  "key3": "4M3yN1P12huLXx7jnZ1Ct9vD3MxxFp9N1a7K4Zt5Y9PPvRbYwkoMMueX6858UiCFQWT1FUhxR1ESZ6uBhoKMECYQ",
  "key4": "37tnMqjxHP8Jivj9skvsmauXiBHK8tMpLCuk4Dd6BYCmMWT38k2tmcx1BENF289oXeLL9A1no96nSVQFPDkCW6Bi",
  "key5": "2PJ8eXZZBkR3GfFC34LSsXzDETm5S9sYGQpo8xg2waqK62nXtLGkW5r1ZPMLbTEuNAgSNBLqJRR8GD3WfnsiK8ob",
  "key6": "3fxQSKsNMyzEg6FwpYZhz556iPSpQev6y8AikRv4ZpeEu5Ujjbogxdm9Xm3w8rEoLCTFJD18ZBwodAeud1oRZw82",
  "key7": "5StzDZ3oUmkekLnEW6Gm7HUy1gFJ8oEx8yMM5xMq2Gs6F4vcgThLTPrsPXxbG5LeHFr3HN2AZwmo47yXKW1hrWwR",
  "key8": "5ubC8Yy1cRZVa9GUxLPdePnc5HCTSTq2oMZxbNTrWowmdHTedv9TgQCT7ujNk15PhdgF5wGRAYFaE4V8YZnaMCHS",
  "key9": "3nkR9v9FzCMLWKoSnRqFRSDqfoS2v9f4nGG5xETN7H9R7dhdaa3xDacFCQvAumyyQughsfnEJBk8wNNSr8Lntck2",
  "key10": "5yCTi8fYWPwFen2ZGPG9PkJjEqY5tF1HeBikehQZMRgQ4iHcMv1oiygfnCfZ1hUrej6tMNw1VT3rcLy5A6KswEk7",
  "key11": "3TzQdR4GB53yGLn9dEyq1eCasMsFoCxTH3DJDpfQEb6iwfenaQK4MXJtD49H8WNgrXuWF4Nd6ujMwW4jRAYb6xqn",
  "key12": "p6CtgbwLBCG8EbSW86UCEEZm9CDpzPJ5vkN5m84zuaPksQiNDbvnALaohdxvZ3y859bqvk9H4TNHM4Qatw1JGns",
  "key13": "J83LWtxJ65MaKE1NYCnHy4LMi8WrqYmr1QBuX22V1wiRkoTauq47CLnMkBV2cpNtx7jmoo15fRvChHB1dSKC41i",
  "key14": "3JH2NUX95eaXrC67s4c1y1HenzWfnRnGPRyt27htgsLjkzuBydkaEH3H1WgN8sYwm597vVEX6AuXvDNaypSYPLJG",
  "key15": "3EdHcsbyTm3CSiXi3TBtwDGJNLjPJ6b6uruMwzzCsCN6qMfsGc2VF1m4ysZovtWb1SpdVfZnaFCnT87ht5LotMXA",
  "key16": "3zpZJcZZwhjmXFPWuR2LnXscDeUYKL1ha3nHUncCe8pNg618Gm1962uKPvPXHpmk1k3KXYNQ6ERghUsgtmYB6hdP",
  "key17": "2KtEMZjxFLqT8HJKLovgrmGHBZaacu8AnpUzKwdqj8W29jVSTS3hZS7the1QhgJcDktH7wM64KQSd5QXjNi4rtqB",
  "key18": "5fdDCv9NP3yc6pKwuAzviKGhnKqnPCGuRuxp12kX47kjDTKVXBx1bo1RGrfXMbvGapDWkJyzAWk8MK4HnJm5QjfP",
  "key19": "7GAaJEp1XS5pV3d8gmYm3WezWAdpbc7YpGbLK7aVpHUnZaEeDZGT9wCpSdhEYmREugxGHqSWpDHdrj64SRzeH9g",
  "key20": "3NgatutnYVY8m1Xvh2KkpqVxDcTT64JioVyVC92LGWdyGEqi8yUQpGDaUUNLCGGsd7fQGV6Ur1c6GqjabDVE1Vt1",
  "key21": "3FxgSq5Gyz3hMDtL5sDr15ZgZW3ZtYSR3DybU73zrzwzP2GfmdZUzXwoS4S1FzePJRGFLoPDm1fBcgpCJ97e1SLr",
  "key22": "8ySXvADWoSefvG9PLddVRKT6sDATebSYvZ64ZJVnaGsGoSWDmFDYTbNcGW8Yg9HrU4ZnyyNXu7Y9anjfgLGTfFD",
  "key23": "589pJS8ao5hA9t9FzhDMxPZaJsS3LfyuD3NtrX6CeQ3koTCqjxHXkuH58tW1TjKxE74GM3ggfG7iKQJHjcQkFnNJ",
  "key24": "2WQanoWVZSaURAmMqs6PtpmhvnaVRFzhKKQpQJYqTnKiC233mutMgGioszNnPBixf58zB7UAAd5KueJY3gz7kDma",
  "key25": "2TtMNMWbg5ycAatuSrqUqqQu8JLpC6EqayYeQ7Rf75T6re6xC6L6FjuaxJ1xxwCyc9xRJ7ZWmzRb7pixpUZqm63E",
  "key26": "5VRygvwLh23Ak7hW8MBifsyR1kqpELBPCmSGUqb733xPQuM97R1s8aWktm63m9KXXh6NwnvGbr5fSAcV2nkBRdAp",
  "key27": "3MinSvsr1gpJ9n4tNGrZX9Ek4EkLPjfkBgks79bYQ9PGzHjMsSuMkNvKpRVib8UrrZ9BWbsmtTqkracMpeRFaSNX"
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
