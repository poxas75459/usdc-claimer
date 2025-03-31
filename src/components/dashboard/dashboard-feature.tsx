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
    "3yRAs7V5PViXdGiugDqGnLKCEd3acKxYhkFBfBKDMwu8WCWhUguPmfC6nr8TBtHdS5Zqf9No6KMJAZNdsRRD5fqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hszf3cQcz7xUAHogDnjj2wr8tr7nxsJkhhcL3z8Dr7tfESVqicLudJ6UXuViv9xymDZrWzmvYfC49rd9uCEm181",
  "key1": "5dBetsvo9m4WjfsLwERt9yiMP6SNZepDA2yJSxycbEZdzX4vtdADV1vpDY21TRecpMSCVdN2bv7UqPyXZnwDVnh9",
  "key2": "394Tr9pvwUEsPW8LXfVtxZGkpr8B7KvtsY1HA9stYMeA6KHg9StnUco3i2stQNKSayaa1Sg8Ldi5vo7QKgGGRP9U",
  "key3": "4fTHa3jeAevqGtb6dnNTbNUGzKAaVU5a9386RS5gpMaPoTaJYX1dz8botz7QJdBDiFwbnX5nCh8ZvrAVzDmEwegg",
  "key4": "3NjG7GPBphTD1RfEoajxp7heJZyjnCPgS1orrhGMp6PwXzng8i8SiHDq4J9fqM1xKcxPqpeMJqRbyK9yzQeYDCEB",
  "key5": "4CuXLVXqxNvsrzZxzGWtZ4Epoyedw3KSNazUPDPmJk6587MCA27xNpUzGTyaicFBHnjKkExU85Lm6UcoF6JHgqMv",
  "key6": "2A8mNqeRyACeg7VCJ1HgxMLxyUjmYjtbsgSqUmE4LTMHr47dcCcV8ZahDhUegatbhor2BjD5Hf3XqQhCdD9dWrbz",
  "key7": "3w8oBmVuNJFeGNZLeAvRAVp1JWHjcFScadWjVWpwcNbNXWJBjhXeFfFkRbvPh17G6QHcrBHyc5DAMwqf2Nmb9kEx",
  "key8": "43WsifRFSKjkyi4GNZzbV5KaUsAnziE3hqFufD859WcCuyU1aR6y4k7euig5ndYbR8qG7tD5DbVuHyTCkhFt1u3B",
  "key9": "2URhV6jvdv2gaa41UAXWKmGycAuKihHB5VudninrybqS62dTuaWeu6iW6s7LhtMX8dGVSWGvNBzcYLePuHTaeF5s",
  "key10": "2hTMyySrQfCo3gu36ABwiE4TGvdftQac3Fr87a7PZ2gN16jmYCq6fHhY3XQ6su9LoPT2awaFuKNt1zbS5Gpy1Hw5",
  "key11": "3qcFd3cJpLQ4sdTdpGKQgGKfAr8VjWB2HT7rkuLcEc7tyBTQP8C1RafrYwP2XxSsLvzhWKJmGJ48soD9Kbn2s2xJ",
  "key12": "4cpWnaPMzo1GfvpN9XpMpsaXRpgv835fzpDD1oFcKfCn7Wctd5U7g1Trv231Qsou7UyNyKCPBjZJg8yEoXfr4mVM",
  "key13": "2oBwfCSURHKjoU99n6VngkEeNqDCxZoGk3evZz48g2C1MBmy8P1BxHMp7aVg7fTHJ4ovfYte8uTmVcWc39fAAKzQ",
  "key14": "62EVdMKDWniX7nBU82EFezobrBCzL5zLXRdw4yFEaYCepjhjPheCLEhdep6MfH8ogJGyTnfxtvpYDfZZxGrYQnQp",
  "key15": "2jczPnACw96DbtS62PVwXLbuqkxiTFHvCdCV8ZhouyDd1u6TWqc4piMywjsbn87DpX4oQy7ctCEHtqJNipc3NuPx",
  "key16": "4TSF1298L1RsXmdBY9Kwki6Repjqaj3kpeePnx6iKps7wfZdqLQvXvtv8GVtNqEq4mY16HuNzZCtkKsLBMwyncWK",
  "key17": "3FrRrEoBNZd8PqkGhknM9KJ1EAPtPL1ySFZJEeQPPFtchQqXwqMr7hHiqGmFnbi97ukQu4MJPKD8dUaS7qyXfuh8",
  "key18": "2kxgcxh8JJ4CCkwbMWJajYEujk1VbiK2EBjD3WCuDmjnAF4q4exHKnghWcCsyTR2hjPHJ2TJHj4VTnwEJQBwMM81",
  "key19": "4rw3xd1gbPoRwJZw5jJHfenYgeHoQx9KmR9H7V7hEcKxrowqXqpJYF8WSqtBtwiPVixQLVGuxscubejo3EXZd5np",
  "key20": "qGntKWVVdfvSeUy8oxrVToBuXuzZ1ao4s9VjNrZygxVs3ha2C6G9GVyqV3EgcHUbL6FRtf7WET18jvYiYsyCTkB",
  "key21": "5JutUxywFiWTjxcFLwiytZQYBZ7wsQuDzE3BALBCqFX6vXQWwFCVkNtURUaDVDW2kDxina5q8WVoddcnYQMqSXxP",
  "key22": "5ighxXQLgowhhzDumyWk2prQHgjboxASArLDKepeUzrAiNmheerg5SuKeS7hi3HfotVZYHqzmp5jTQ1zaz8bTR6v",
  "key23": "2BjhyDBdYwu4ewy2ZGDXtxL8EuBK9qF2Zey7nj9Q2w3JNM1kC3wsdFaW79QTWsaQ4vXgzZ1yqrn26Q6UF14uJBxn",
  "key24": "3Dggg2xnVmW7kERkzSgmKCz4eTfheQDQYQv5jBbztqFSWXaYsswoijsDaPSyz9H5kkWxvJ3K39NL8fQzLJ6DU6BN",
  "key25": "4iVrNBN1DtNW93L3pt374BAhBuCFq9QHKMxWbXL5WZA8Majn6U5kfrb6nuy8k5igD8S2qmKz8jbDiafzCxUMJ7w2",
  "key26": "2dqWvhsJif1f96Pv3RSFDj2oCZCyh6bccs97FEPP5aiNVNB6oLTyg4zKQdBkQe4b6ncRaVzwdpKh4jW1WwtmP3Ek",
  "key27": "5M7Y55n1MCxDB5oPpieM2UJueTRQVjExVj13S2h2MzxZKtaudCE2FPvy2fUJYfqGq6C6rkKc8rUVUuHavYyWye3L",
  "key28": "5TFVwHnK9Bxv73eXnPDH7kv7fk67xeZwVyJgCcozbF1SFWm2xDZdZzDhjzY4aUhg2iHRcn2d22ogHBQVv8febTbZ"
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
