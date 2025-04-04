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
    "WpjjvW9zRrnbL2nMMLasY1ULrwBc2eCrWomtCD3ZsPgY5CdxyWPJwSPiPyzr5fuRMoAEM4kSLdx6znoXYLSJtE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhgknKbna4NAANLmkJwpusRroQN1UaMD3UoANnjLVanMsgRhWp4J2XWutma6wZkC9jHR8bteXypGjzXScbkQBcx",
  "key1": "2PWU81KLbsscDUifJnJfgABbUstSLGSawYbSkk5tCDcuqjXM8W1ZmoBVZEaZUVZXQNLbqN5h79QLcMxL4Mr9uGy4",
  "key2": "QxATYVAvzJYbgqeUMgX8aBkW1mXvJKAgmMs4zsvz8dSAWTRq8cPibUaig7FpfZp8A1aaghf64AiubXfCHjvyH2V",
  "key3": "47uFP86uoWYdVqGXBsabcsxP5JMWjEbvVnRRqNr5ojJuzXBD4Lk1G8kV2PRiy3bnn92q246tMbTgMwLYSPF3dz1F",
  "key4": "oaKiqGpqFs8WRviTWTjekk47SgDQDQJBykWTfVwsp9gMxiMG3djEyUC1BryWZ7ozcDKdKrqb1ypRnZ8eRUttmpb",
  "key5": "255g3mtXHfjgVPkgPH5F68tfNHPaG49qgzdtadfUJK18VLu5QBo4Thgo2TgW4e2NyYRUUSYB2E8gJ3Tq2XWgxJx1",
  "key6": "JvTKn64jninmHVnkt6FYHYRPh51j2BJYdg7jUFz16zDsL3q9naWU89AR4hWsDCcjCnsUtSc8xwHHpEDiY1ecqq2",
  "key7": "1KRn6TgU5mD8W1bQ7C1YQotu6zRHc4ZSyzqZph966LXiCYmgLQZwErCM5mXaAw3Zx8PxR5qbxjiRAoGjPkwESpN",
  "key8": "D52mUHD9YqEeRHeRJwsRW5QHm7Tatu5uv9ZXeCTAx3bj19WadvmH2kqRXpwgu1gEFoDCBTEVJmdQfQFYk25JL2s",
  "key9": "2xg57FrLAR6yZUwta8aZYXa6iLEnTReu8GZ628z4PCUcCwituC2Wtj83K9aQB989PZ7AGyxXUdKz4KCevvbJhD7a",
  "key10": "PfW3vBp84dqPw3K5wn3fgmkeg44mvpKFuceryNscxC6b8zc6xJ72zmF185ReyGaW5qZLY4ybbvXwtS7E4aAG8ai",
  "key11": "j9qTUdguqbJnEomrc3nTcoGbzZLedvexiyVWZRKri3ByumqR3KuruQC3SiS6CvM6J91vy9UQFjM4zJ5djXk3Nc8",
  "key12": "2YmMR5ju2JoWNGj7hpXP3qCfWXJ3zYZ9dWPWCFLE6gPs6whyS1SSkjfWNZw9bvQbTHo63xco7JJWpFxQopeootRa",
  "key13": "3jCZVnv4zBySN9TgTy1mo2iHAky8vaNtNHjKKTQ9kF8dvxH1sAu39xnHg663MhNneEVBP3ykTAa1NEQX7sN3R1mb",
  "key14": "3LhcCjozMfrv7t1QQDPRSHvAcmJaQbnZ4mjXJhFnw6CrQjE1dQtjSu848oA7p9jP5J82F65d8M7x6MVn6KDmxbmg",
  "key15": "51LLCn63ThmrZb5C7F7s4RAegNAYsU2Lz1XNBTQBuREnw4h42NuyLLQSfuTbE1uXKf5uKzKtzhRG7CznrWSUTcy1",
  "key16": "39DwJixnCX8vFfwasnbwFtYh8m8D7azjRCnZUHzqMowHKAHCCvqMHWBd5aJoo8MrdyxGtxC8S5bd637c65pUBZLB",
  "key17": "3rqFjfLsqiytxdCNkEQo3HjgwsYnoLnmTRXvuFUXmm4WYnm4HH2YTWUGyKidphhTbFxLEv6Gvd6R6UNobFkH4FeX",
  "key18": "5nBEH3fuxuJaZsEtk6v9Dyk7tbGmeuwedLthZrJ8xaUYAvJeJjnTp5TNaDSXmPGdVxzr6vMsBdHzKKW7BH7u6zSN",
  "key19": "Dg1n8xSpebDMZyCMrLcaE8oXkpQHmmEa1E1PMYGgGvd6L5fMpds5feFP2Rii8pzRqr7iBYswGaLmvD8aaavkDzR",
  "key20": "3sjNMvJTvFnPKRcqbQorqAMoutRDjiqBavjCjwVFY2adeSntfLQZwuyuAa3tiH2Zc9YWUCkVN5c61cK2SomD4yK9",
  "key21": "5qZVUHE5NRQjRcKMofCSjkhxBQEGk4cSMEUePHYPXv2YxUUch5w5ozRtt7BSUh42dGqNGT9ZGcQ7jpSyEU2ZRin5",
  "key22": "5sYRBtMaiNgpFqR4CZAQCg6FjCAbFPA4gE9vTU5Bw2L8Gcmau5VoWob9ohrDwTy9SWbStXk7aJQRsW8qEgL2GENc",
  "key23": "4N7fkCHcUsVjgnSiSbMxtsW3aPYfA7XCBXmwPLrvZh4RKeh5TpMfzscgvJNMqo9MJ9or5evkSR6TBpZjwGMnnuqr",
  "key24": "3dVxopqC2woYW62vW2uWTZr7SjKxHfvkbw7Zdgj8gyTCKxWAWdLVEW1C86SR1QsqA728JDipokV2d3ajw3G8bxkY",
  "key25": "3S1p9qpiHGGnDFRaAQy3Ri8etYFk93B3UQaBrDX2p3CD7RqqALHPXQixWXJCjQus1U1bH5GvuEdCGCAEi7iQmw5o",
  "key26": "221N7uEvwDCYfSfHUSfKUwoxUwgdAWY2V9q8ed8h7hvHDof5vGTyqcKqY1wUFCKUY59wppspv44HVkuy7w7rebEw",
  "key27": "4ubszP2bRijENy25mHUz2tippyh2oP5M9F7zkKXDj9tTtoum2uth8L3mCHW3GHuux6BEGQMQQzwf1yuruLT7kCPN",
  "key28": "46mUvxwjdLdxSxQk8HQNv5ffSv5Sg6irHEsPNzr9gQqbTHSKViVjwiq8dTkJDU1zmY3NbMsViHkn5ULS9XJVbd4e",
  "key29": "5UKuDFg93Q3qm1Ngudokr8KuomPpi4xe9DUxgmYFe2egKrViuGW98jj5Q5WZW8JbofXWyFHyE5p2JZDrKsZV3kFd",
  "key30": "2LqWajRX95eJ1jQ5KoPUoxsebKpXaNveAhyXRrve5b64TiPeBao6re72u8ZG78QmYwaDP5nEAjDUED3Xsgc532AP",
  "key31": "5Y53NEc9wtgrNCrz2V7Qr6BLdbN6uG78byKURPw7k3Vy5GwkXHJZVgJof3nBNwk8sKH5nwvo7gfGcwiXBPHK4ZMA"
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
