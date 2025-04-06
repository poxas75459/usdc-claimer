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
    "3C5iaSUyMW7icxua8GuR6C52Bx5iR2bZWQw5938BXsb224hNM2wGWBC5Z7yrQN8jgGQjWugpGWRH6ETDMm1rPTSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FXMuvHBmDmAm6K7sLvHLPQTpLubGYEZ2FX27rXF5YxuS6B7SfN5yCKCG2rT5y6W38e1RteRtVM9graMvnVUwEJs",
  "key1": "gRa3EZyQ9upCVQkPm5UHU1sXBfj4RUe64EjHtnwB6vAX7FXkjWpbti9ji5J4kuQxs31iU2vfmWmKabQ6wGnGmt5",
  "key2": "2kw6prQkj7aCNVt44vE8U31QHTsdfgS81GJBWEDdZwkur9fGkQvhmQtZ8WyN9vJDHZoMc4RxGZXNC5FpA5GhQsVj",
  "key3": "3Qz4TWaZ8gvPJEaMmSDvP93Ynvc5ezQ2dBFmhomwewJoAWdZMvycMx8e57XDYA2n5Kajbu9c88LLxoh6VMhQ7ee5",
  "key4": "4nE384MQA2UYQq2JbtPe2QRm5jFmrUNhstRW3kC67JCy2X6fPff6ai6GBoi8qmwVzW7ZYxio5d6zsHCT97MS3naF",
  "key5": "3dtjSR5Xem7Fhr4AL5zZdzt6DwqYNDqXSXD7C37PETZQvqPU6xE8iwCL7DRah5tVFEkcKKvgi1SRR1WhT46WWfM2",
  "key6": "3U4R4Y5jDaHQxDQ5VCLTi5nuE5jr4fsvSjTai4NFRev2XLAd5QmDcDPV6CwGj66krPXnwbexrJFtrRobG4tuQV3V",
  "key7": "6g1zgf6mEkTH6zXJ2mZ9rmiwGVeUNJ1HwQtJCh4qKKRNuvyLZEJzAaq6mHbtDQuA4C3DC56hCC9dYHnWBdDmeCA",
  "key8": "45wrtxrVEm6CD3sxhhng5ov4VYhsKhEbTCUpDE7tdD6VzL4yAa3MXeKiX6d7EhnM9m7igoixj5DkSYgYAqgB5VXy",
  "key9": "29ogAZ9YJtZ97tAJz9SAawSZ9tgPukmSEbVtppeWsDKvA7hNKE5EbJ7DGNuKcBSwRAdapnHmzn897RLGbqTjjNbV",
  "key10": "65adpSzqDiexunknLGqkn6y88og8qwJp2HAAfCwhcso9bchUuSXG1rso5nY2Q7GYZZtn3jPQCjTixEVAF1NyZveg",
  "key11": "5eLSpw8TmuoQRGifLUyH9SM9MEUckFg5378WudreSe7Kf65L3LyVzmytmZBtzabpbdKQect4NsBEtwQ3FzXfVzwU",
  "key12": "dFqqFyZoNobSd8CFXZcXKm8NLeXBJtgaJpwK4SthRAdd2XY7ZdJ1Y8wN3eoq3UWF5iitCk5sB6hm5YMc9fUWPMU",
  "key13": "4yRpv55qiu5WQwg3pE8SbamJsm43G9cbiLchcojTjoHEpPpuUJTSPz83PoZaHLEEPuhyFfLz4Jegv6c757XnocE4",
  "key14": "52WyCc2yehVwev9hLvGPcraqNJgrqHNaxoe1dGwJ8K4eir5Rf8hVgf5NkM4xmGyTFJpDfhuXxqynQBgEf84LVFKo",
  "key15": "SHaAKYR5MC36z9cTMGFoAyhJ1LzKo4UCJ3qJJtgMHMi7y9eMD4njRB3RsDEqxXeeXuqgXyBRbXoko5nQ8jfCigm",
  "key16": "vMxStCZVFU6719PGFpoSjC6m9xdtg5KATLASz6nhYcQwMWJhsrXn9a8ZUuD4bqYAPwuGNb1Sg9LJ7AHvdkUZBtz",
  "key17": "46Up3MWfookm6w2X1ALrNxQ9edDLcSaHXQUERJ87ZFhSCbFLpDxjer3iGzwehzH6axFf6Jh5ch79YEzGKin4LuY4",
  "key18": "4skDXHJ1CbKNifdVrK91TEj8UgBwmyBUK7ivhVAvZaFxP9AhGgyLnZdFs5MWq8v4UQQCnZYcHLAG3BgVNgdatrnL",
  "key19": "63hK8m4jRbm4pQ6374d38TNMKdUD4PKZfKLh9mD3aCLvqb9rBewdC2z7ynjSKqgYcDtrFGvyontXNNF3RboKf1KN",
  "key20": "65ZYx3vjcWtXQohJF4QJev3R4beRs3YkG2dT1Fmat95WnQxkiKAFDjsxbm1AGM75N7pfLtjViL8ayF7YbKG7NETk",
  "key21": "3gb2YxnRerTXD5DrT9RwZVx9Re4mkiNDiCZy5T51cZsL1KaJpyKW3rkuDTXwcFppMUkkimfHA1L49FpD6Fqg7Ckp",
  "key22": "2BLCsd6bVMos87qcQ11UsJBZAwQcaYtYNRsdNPpXHKMNfuxYFyEaRuys3Qy9CVNQvoQTLHcYTs1thLEuHXTTKnEq",
  "key23": "qzRRzMY6S9pZx2mZjqK6oxpxxaqKfaLpmNRSAR4WtsX9B2ivzxxg7uvvQb6zfgbc5tm2b87oXGpYnoBh6rYcWac",
  "key24": "BnvvWL64vCjgxUUZ5rLg2LLutUiGYFvcZpDCrr5xJfANJ9A4D6BVgFRfsCQYvuF3rZsRvJt98cVqrvUjC1qgGbd",
  "key25": "4ykXg9VtG8ah8qXfKUkq2qNGxBSQibFcDDDGvdJtnaKk8GeAEdU3EEo1gMDyG8r56U8MLniXwErHmityX6Gkp8Yj",
  "key26": "4SXz2MSDJ1RxEWeg2Qq2y2Jh6B93A8KMs6mVDJiTZoxmEaaFPDxR7JTKNsqH6eckidtHtvfjVU2Ked26gqBa3eus",
  "key27": "AHfpu3woEKeAHUKSzMFEPbtLEF4xqahYHKRYRENiu6c3p9LUfh3Wtoz3JBKMBLvApg29vebrEr3aHP9hEBXNAWF"
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
