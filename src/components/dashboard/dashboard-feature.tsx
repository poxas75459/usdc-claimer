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
    "2bDgsGEhsBwym61Mjh8GYPaehC1PXNhTpdXsZkTGL4eQtEWgEsXCPfvEfAqtHLRDZ9SQCUb3HY6fTX1T6AX5MB7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpqDntbzEqUE3Xu3E9uvxQqDczpLFapTWJTV5yceH1MUvM3uffq2H27tVGZr52WbuTeg9cMoMxkA9f5rzEqtYWw",
  "key1": "2PUpi1sM9rDdqABWiP1aE5ovCeXuGqq6B2B3RoYki1zGCEB4BVqMGJ64xnZuxGHTFEFmUpgkPxtth5xw8x8A581u",
  "key2": "4bzjPLghT9kiULkjc11FPHZayhcgCWquDXsPCZjm3UFvKMcV9KRBpPZzLygziaagCSQ3d9o1ktEjawvKtCSqw73S",
  "key3": "2oGiNppYmPLgngfXR4vaa96Z9KTTEK2p2KRN3DFiE2Sxz8FgyaPP4NWv8fB1pMoenRGBeQJvVbaYavqWDV1u5Gru",
  "key4": "2Eib9LwUfTQwMRvvDquvsWRqhAUQ8ToK5qcTcUDCyyr4LEEPTezq5RUW9QbbukR2Mv5b7GjHqE7tPFeubZj6HkQr",
  "key5": "x8rtRou3aUxapPeJq3oJQSj7dNmX9HBGb6ryAF2B79PthVVAoG5ZCC1ms127iCZGZe2TuG5BCGMrSH9nx6bsaZu",
  "key6": "5njgbzNpGgANnERPNM2VF5FPtUGFktq5uQEJhqfkBvxES4bJ58sSU6avFdoHwbNzvHZXbBxDYHh4fU29CJRhbJ7P",
  "key7": "AiLTswGHVzqdaWj6gM6F42wxY5DAJnGehsxqraRCSXj3tfscpsiDa56kQpgYyhBQzciztQF3vdkDjrp4gSuND3U",
  "key8": "4ou1JTMQoYwKyoC1UPACh4PWZMYEzqA5dbqFZpsYKrbRUH8gErtrPhVh37KsPEkT6zEF5z7fN5Lk9wtN6dNYhGKb",
  "key9": "5huX27c8z2yifao2wfqEPPCyNw4CagB7cuscuUMrUdZPephg1D1DX6JC1ovhf6W1mR1hGVaWu5ZQDxePwzo8FPmK",
  "key10": "5K8QL31zC9vWXezpupvH4Zx2nLjs1b7Q8p566xss6EbajVZ8gokC6MM5LDDXXoE65jfhyCgeQHHESdUcHHzqAh6t",
  "key11": "3KYm33Yq2iFbQjkCKXVzwvgcBH3WpojCVEhsoQbnpMUpKHQ9W6hmqmge8nu499VRy9ddHj4awAZ4pcQt2fLYK7vy",
  "key12": "4mpezQmEoXKWtCX4jgqymrhnS29nnFvA1gCSo8YeoCsQR3MUTc7fxUpcBaNYThRum6GbCSv1UJzUxyUBmj2afoYF",
  "key13": "gTSB1yHnvBAf1TZGK4gUXzN4mLtHBNrEnRNyuDiawC1ELSmDstAGeWejHA9xWUx2zSmDPjTjmuvJy6jD7ZSKPrm",
  "key14": "2nzDapLRRy6yCgM6AuUoTPJjvSXcbdnfquCae527LEZzRoAv4mNuXG7CNhZiXFbvfKUkMeRdjbNcaqPFSkq5mTqh",
  "key15": "5PYtKKpXrGqCKPNSKxnC6hwv1BptMiEd3XjWuGFio43isRxPFN7bGKuqDiGwLYDxA5ynn2nhTKgKbttgppcabq1A",
  "key16": "U2maodFdqgc2pL4Nq1PxoTHVDFc7gfhtGptdH6PR5bW1SX93zsx6RnK7ZUd5fAwfdC9xCyAWu3Qccrvnwt47KCY",
  "key17": "3xJarfT7cjrnZY9A6V4RLGp8CCyoo8CvrJwssTq5V8oFb4u1bE9qtTfjUGDzCV2iHqnKiE4tXgYmoRTmCZmFYVxP",
  "key18": "3itV5QTZteCv61UUTSpZuErjXz28xcVxYABPdsaSvS3yuasy4S8niszLgkhUDeZ2FJVu61bRV5oa3Zf62C1kmr2R",
  "key19": "boLWTrSLJ826oMbkwkrco44vSudgscUobiPFnACSBH8QtBpiq5tSjYa31yzbnrgrvGtGCGAmNkBnm54FhozsJ7E",
  "key20": "3s9Rg2ctb9FM5G9u5aM1ouWjXTUAjmhnKt1q4XvTnGDjpKfkZaZL2k4YeJ39gVQpVmShotVR1vDaKFgJzZXLr4bu",
  "key21": "22CkdQDRoFB9dT9W7pGRd5nGaNpZpPQiye89CEVHiJHfgHcZ3hjqvGZYfRACH8stRoaN47NZ3pfdvn1Z28Yds12w",
  "key22": "5MzW2FDMKjvLBFScL2u4DzkQF2hzav72cHzK3JtwjaJD9ftPoBvtMU6brpAnUWie4eoWroShYCv9k9PZW8PEFUG5",
  "key23": "2t6XiJ6cRj1mUSrfjXMqVp4NPfFbTxRRVPaUTD4jeYUB2pCgLAu2A1sk5ZkDjD22Z83K389kSf3CQWoHmi3M6z9T",
  "key24": "WRxCN6zUBE8qzmf1E2sqpsy4ZrysTTZus853dmrB2bHnsPAdjA8WyLbEB7tCYRYRJNRzTP8izDRCs25pZpajdLH",
  "key25": "4DZ2i65M8siEi7oFL6CXXd11Jiak7jgaPVARz5yGAteLeRMLjGancRjTtUL4hgP3WkEyunRjTWDP2KWruoAFgCQf",
  "key26": "3fWm9D5KJdZxWw4dDp8Ld6VUwAqVmPidspAPaGKkQwpMEtQG2zb8bzTRvYAXvHza7pZKCAbiQkpgAgbGYZwVhykv",
  "key27": "5g8DR6zDAd7RbHNxpQSBjEwiJT2EoNd2mDGeqfiWKwmM5ahWi9LgZqKSkpTqyUbyCSudpivoN4ac56HP6RjWkd92",
  "key28": "wfQxpm1jKdvsEF2bDMPierBkuzDrMVVwnmVCVomqYe2X9hMs7UExjKtX3ZHZUhKBEFrevcP4ZQXW6QQuZuN9zKg",
  "key29": "4myEgdzQ778j7toKC6z7pMKw27EDBHBFQgiXRBbDSHByPzN4EPeU43WehMPBDQytumP7RNRoNKF1CYwk31zJUejS",
  "key30": "5KASnp1Cs6nPrcMXX23bz48C8ZLH5fLQjskpPYCy6Z4os4yznqAeRmrHyHcT3wQdud2BJHDGV7tjXFR2dE74nGv4"
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
