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
    "2aV3QNYmtfKYJ71YqZ9LDPXvdnaQZsy4wT1q3Eg9Ajz1nBi6Cq2FAeMYiGXjtth5e5ju1N8GwLyzfZYGeuwcQbc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gj8yR321LJ2wnqavksvXMA2fcofPtbn4b6VPAM3KypZcRGzshERzNYYJM8PgtNiFsoZuyBfMWePwibV2BjREAS",
  "key1": "2YaGD1YYtfdnAKExhQSQBXwEH5Y14JtBFMtmT3ehfLxMRWi8Y6rmGRicmBrKVEbfySNFyYibSPw7mKqEVi8tYTn",
  "key2": "5P6y2bWqiLsTdg4wz4oH4Seavs7XgbyUZWFN99Eks1vPjZozD9btLSCdYuNFLvDVqNCL6dqEbDMoHX9iaftYPGnD",
  "key3": "4ji5yk64bGj8Cd9LpKuSf485rHeC3sJgt5Nzzbgzc97g3Q6kbyJXNLxm4ui511resZppEd4jKxM5VQaAg8F2AqSX",
  "key4": "3zbthqGTVeoQRGY5gzsTw67NCQR8qdHAMm9PqhnuwWMSBn94qtM1PBQuU4bkgPEp7X8wRNtFjLg2RHRXauq8mHbW",
  "key5": "8Qhg1MQGeyV1HEUvHCGdBiRxh7fJ6U3M26Hna85rX6keroWkWZQTahDyDvQDAy2CMvGa4SAg6MziuzTbiibEP5t",
  "key6": "3TsYwiMkHft6vuVVJWhEFdNw7EhxAGHPx87mwLqaRqoNauMi8LrpzZ84WYpFhiCYCTeyRpVSXAqTSx91aXQbxrZ7",
  "key7": "4kSRP7aJ1XEkL9oZg7x7LHdievKM856LNKKssLgm1rcqVFhyPcNQZaWYTj1JKxqEQcN7TrYkpcd7TJkBAgF2J6Kv",
  "key8": "seNd8SoBwBMCPYbX34uBSSjfURdu6doMXyqXCRzbbHMqb7YsPnKqYEdECmmyq9PHp3djcsHG2eV983Zviq35Ws8",
  "key9": "4vr3M3gfG3uri3K5rNhhJ2YiHHE8hXKPQUEYvewgWyJ1ykyQ811E73aCHRdiyy3kiG71ZJjKgffs9JN4Y8jCAoZo",
  "key10": "4W1WjdTH5VHZvBToXagjo1BdHCgJ4w2dgX4GuMTdkTTLFC4K1TADPnSeWq6C5aFYX7v7h9WAQoRKrJR4aBqmNKRf",
  "key11": "3Fp7819jZsFJQ4MQn3YRGym4Es6PSAGPt5hsBBzM34Ya5fia3BCVfHPTGSG2GeH91Mctj14nNnxzwNFFEEx6RBAH",
  "key12": "279B6FkSSoxbhZtfMzAnUSpCLDpw8JFqPCmtMW5YW5v4nPtFQScB4ZZ92wRQSFPLuMntv6XauaQx5ejFpbfU6xyr",
  "key13": "3nrhR9BqhEd5nRfaSwH7GjZNQwaAmXkPrznvrnepsLrnHmbnYrE87ARK9rWp9oAGadKB2GeHZpFpFV1q3mABZWMR",
  "key14": "61uuENwF6guuJLjYJ3uGwKZyCKFjGu5VjNCV18YuZ3XRYkVM8cXVFpdHvfr9njFD8duECKySTcdEuJqpMKF7miG8",
  "key15": "5ixAssWQBeGk3viPq7ndAz14f8Xj98Eef8Xa2fFUg44gqkXBA6jigy7BmoFo5YR3fB94AhAT3c2ZzJtCfVGzBZ6k",
  "key16": "5w43C3cJamcNNsHwWW4APxpkxGwrPnFY7TDeJg4YPrpeKMzmbWxqGCBnYfwwuZXfyhwhtagLcTiKhBgRmia5RQbP",
  "key17": "5GXwWA9dwcMGSch8MSSznkfheHS66L19yq9uT3VgdEXCFfA7ftSeTvs9jEfXNHk7FwWgv4RxrtrFgrE2ETS4nEdR",
  "key18": "3ssXo8U6EQhbEf5pUweQSzz2unW3UGrrn56DJs1yCWnFWFLQS1XpELBQhfojHYGhrx5eSkiuo6jm5kkPKPXoMgQ9",
  "key19": "3WqYAPCy4nJLqkxddMgbgQL3LgZM6FT9kJ41h2gqM5JVjVuVg3oJFx16ECTYGBCcC3PpDFeTsqKgR3qAqWiqo1gX",
  "key20": "66KFRCseWt4WzMsvNU6is1jG3K5EkaRYBFdar3jrBZAQg46Ej8qw2iUaWTDhMfVMZZ3Nm8La17axZu8JrugDxrX6",
  "key21": "3Sc3YKLbUCSyKrt962SmU3k7uSM1JLV4QcWtnRF4D1oFFKwYgi27h8XaHHTuYsAi7uETrCgdiccLuC1VuHH4grSX",
  "key22": "ozyDjf3MUKMRwzGzcpHjJBNBqwPjsJUf9e3sKWLG7yn8V5baU88hCrLmrzd8rQrzZvVQKTqq6LdDHoVMRUGd1Dv",
  "key23": "64gXhgsbRCY7NsmLtNTn9h5ZwYR1Rok7tn4JChA3uyd8oxi2PUjo4ERvCtkKN9wrxdnVC8VxgDZNuedxnKp4Adep",
  "key24": "5Y1kDGXWWXtjURXU9acYsx4iUiwKMTVWVEH8SKjYCsCnU86wtEab8fL44W37rHayCwPM2NSvgcVrByaLxPbVeQjn",
  "key25": "3EBcxfScahx94UQoehc76YUDgPDyopdRiRuVcyCpVjNnDc78MEpbMK5YBpnCBBHqmYyb6avj8qq9oy9ECyLnGGmb",
  "key26": "29Xf9dCRaMM8nvEhMNE2itDQKSKTGLBJUL37N5imTtLfGLpECgkmVD34u1Xr3H4vSGWijga5A6gKnUduagrAHGNy",
  "key27": "4Qy9RKdMCQyppsDVcEgS1qiLeSNuzRZshy6w8oymSTQZsYuMjNjDcM5T5riJZeud74uAZpKYsEDWpTu7ZEU6trKR",
  "key28": "9YYjmFWG9yW59UgzjcAEmRywu79SaVW7VCp5bBbATqwa8TfchmZBk6LoewmDqtZ9fhridkPC5MuBN6AjWpJtPWF",
  "key29": "2CoLqEe5qj7AYJV4XfFzqyBCTRcep428ergJWTZWzDyMQU5EfwXYpF3czo9X9v1Xu2RvZZRvBcor6TLmcR9tnjFC",
  "key30": "4Rvqs2ZHiN5rt3Dcg1xTgrJPeZC8LPvEpskepQmDj2RojmL97wKGPQxZQsBKMbPsBtEdHjeu55Hbnpey3SiiFRJZ",
  "key31": "5iAD896XTV9RvUFVDSY2nkJazBn6EkPy2UZJSgyjuh8Ned79nt3jWcjisb8cdfFZ1Y3UuWwSiAQbCkmTorUotakJ"
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
