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
    "5G8JwZzFhsyjGUwKNChNrhzR412HpRTrDPYWVcCGSmxFpZVmBXfyudzCEywzgiZxjXqLu9b95uMzowaUK8Sg3Ujj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRpJcntTCwcqSDs8RoPpC3tbJC8pk2rVanmbbaRebmC3aY3jYMj3zqLsJgRTt9ujgyBRBQA5FEetwtCXMoR8RdT",
  "key1": "ndZwReKoCAm8RXa6MGM3igVjeJn923gsTRpjiskhVisWbqxqLK3i8hydSF9KVLjMn9sdKPgCEJsC9wemYuzjBWf",
  "key2": "4oJePsFvqLba5VYq9ijZJ6LPbnmD9oUzGZsvVq8nt9zQLXuRnK5wkKEzrw4qcFt6YDbrBDXV61GmxGbHJLCyy1gP",
  "key3": "Sy81YbQHM3ndiHcTYtWara6c1ywuWRXrn3icYWhxQQhbSCaVjg9S22VPugUcUcvLG5R7NSkbPWzfByWSdp1Q9rM",
  "key4": "4LV1TyrzYoCKXzLF82csRwcov4nGrnfeUzjMiD4Jq5YNjwaTLTPPSXUhjMJsdhhyrnoVU2hbEr3MXT7Zsf9UrT6x",
  "key5": "EJszFiwFXcz7TcXDth2k5axPBrTAFXS66fQSGH5FQCoWDryD8NqnizBUzDzUfJSbK466xngbZngEEhebCFyuBiy",
  "key6": "41bzU9N9pvGWdUoiW1yrjiSkcujz5LqB6uSCZmFUneVNMQ8n8RNa5Qrgza5gSSSCCb9GdZ2xonJC5Jjrg1nH7XmP",
  "key7": "3arBmc61gDFdyPv12JSvjLeGdvKCzp6tV752yEH3nrE55W9fF3zZdAgN7vahjCHsFcDdF4S1FQTjnaZEQPqr3ff5",
  "key8": "5k2vhZxynW6FuybrEqTJw1qMYDjYprD3yyxAzdgTWQt5FvZaZEtnZmd3dqMEGcniYneGN5vovtmZeGfmEzrifSw1",
  "key9": "5XzbMut9n7fdofCVzJ7JzGAHvUPSRHfNMYPcb5tAzeGJTDS71WFs586a57Hrj1fs65Npf4ihkUjrx5849MGVagfd",
  "key10": "2aUN3THCM6ZKLTGgcYPUzEKdaypbYMGdA6PpVdDPoZCRz9rWJ85tckGQMUczD2wn1MjDuRRuipRSryo9j3ZqFyUy",
  "key11": "38qBSx9qTk2wCrZmA4KtHMS4DNxnhrFidHzZPeVaLLAZqeVDHzrPJmQ9N9HJcyFU9ZHsvF9G3Wyw4jgemoEdQqCL",
  "key12": "5jwXpKyLCx9uJvLLaW3EqmYqLefTYLcGYgPtSrAKFs8ijCBqz6V6jXFmVanbATFRV4Qix81pVJhoi9AS8deVStCm",
  "key13": "58viZjLRQk1ZCLf1TWRWLp7B5vMbZ5nNAQFW7ybEoAhU6drwrmmWYdcSdkp3WZ59XQCRC93wvnh1W5vxXNs8EYvB",
  "key14": "4QtyHnhM7rG25UB9dARHGN16ABx1DPue4DaBL7nZKrTetHnWa5b2h7UDKxnycsT1QeVqnRNKea1iqkX9Svi6FAbd",
  "key15": "2QNCzWb8JGR2wUFZakT1q3j937gUs2D7T1cdd2TkgWYLVBHpisSsQA3myjY67myt3tKnnggJusY6eGiRVFSHnhht",
  "key16": "5C9bWAiD6ex9mABkVUVmgDbj1L1U1hd6xUXLaqYF6MPVhavsVhvXZ5DdTfKkGGXRzzRMagJj9AUFLSSgD3Kr1aVD",
  "key17": "4zkL1jZC17KAsHxLEMPwSHFbXJAejdCfm9eFEDRNGohGVVJ2Z9GFngxpjTaczzvWapPS4WcRR5dkiVinm3DtraNi",
  "key18": "51ZmBN5JsUqVLi1FMkZngeQBTTR6MCZnixsyLVHnqr9MpgS1FxarCVLuY3a1NUeLJSC2Tyb8A5qsManb3jayK3Qv",
  "key19": "5nfeaXAr3knAccUiHpcSZ9uhg7LNXe5hB3C5uKcGEbVYTxaL2oX1SSPGg7SRAmcuLquB5bg2oZeF1vCRWQ1nf3bi",
  "key20": "35fYwFFoKPsYKAcVky6xZEAFjgSDqRTMur2mWvpYRnDZBL94PUYgpLapTSfWZbYqziLzgYKNRTxNGR3U3UTr6dnW",
  "key21": "3AttVQ7Jw4E8e2H38dqjnwckfiY2JZj9JTSEDqmnzVbMMuGuqYMvLtofDHnqhT6LWwLmwKmXExwaFanvPSjGc9yN",
  "key22": "5nygU6GTRL4YjQ38kkharECEZ8yHsjyyTsrqRAaU7CZa5PfLjR2sqmNAxA4NrDN3NR5MPMvpM75zPMKmGFCx4qjY",
  "key23": "3mpurRez2KYxCV4k9wpKMQJQWnKNMrahNcCNYScJdPDztGx48ZNd54eKVuEzHzQYpamRME462m95yXHMvPGdP1a1",
  "key24": "31n7mdsaRbU2v1smmhQmGGWjwbdYrnFXe7kkTTQkCNERckDVFRsmT187foqMsGqhCF6a8vkNBHrGDwE5j4ppoEo4",
  "key25": "5dkznqFM74fC1hTgZaC9EbYrPAD3Cv4rDF6urJuTAynnJKCkHhBWhwMoR3coUMPfZtFjLvQrEF19mUW6kBT1YQxA"
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
