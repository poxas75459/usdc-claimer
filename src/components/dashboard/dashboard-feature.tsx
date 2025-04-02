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
    "3TGKcqUbfAtK7Pv1waGZqoL7m9wcqjp87yhHcbmVPFccYBt5aYrgtwDo2UQS5AvoaSDaFtDg9HSFjxiUL7See4ED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJWcFxgwXapj4HPYXJripBeNGJD6Ene6cMTPrRhxMCjzt9STxkTUkr85xzwUxfwmrfR5PFggSJXxmYsjgnjhk6p",
  "key1": "58UXg4pU6PjSozukCPuA6VL61Kt1jdSqt9MgKQi6bxUYaYApdQ4vo5cHDejLHWAthw2zMP1qL2EWT2g3AxqARDFq",
  "key2": "4n6HL6aWnAHeYpHit7t8WTR23HrfmVpegZAA3y3C8FKNaiK2YQ3qKtzovTTcRTyXwwFtj7RoNj1Humg9qEyHmzhV",
  "key3": "4HjAFSHkFmRubd5gHFXPBWtnYVNCv5E59gZSsHp4oQUt2nTVq5wvqUbD67hEiQTYq7ohaihDFABe1dTeBLVPDywq",
  "key4": "2gEFrAWMjoVZDhy2DQwr75eufjoF2RCuQEwNScsWkDebdVzFXxkFsMpTEjCR6Xoq8bmQDRruLZXL7LS5Zbf8hT26",
  "key5": "ANWNv7xRdLNApRYmKVGy2hvaerbA5ARhLYUXb37UWs5tnNnKHkVtXjPbBDCkQxaLamPmJk7MbQUsWjTW8GqLcCR",
  "key6": "2XDzyxij2U5qo516BQ7awWBmQft4NzrKuho2omZ39rR8kfm4aSgELsKjiqxCwJr9iTeTHbFgs1oouwYAwhQRWJv9",
  "key7": "2KJQUuvMQxEz6TAwCDVBTByu1eiD74CTTctfP91EmFuU1ifuCnNQLVyLRge8XjH9G1M7GDqZopqgo5T517GdXxH1",
  "key8": "SDax757Qd3LbgJvkcFFG3pZfG1zxAf8JqF6qyxTNKtAmpV8hY2194bMvVbhTm9haerfN3QjSijjDZvZLyc9Rw4E",
  "key9": "3kMLQzacMzau4GSeL6A24TyEvFFGpnciGASdxJEoETqP1T3itdJZfEauDynkiKK4riuYSETuZVtRGjzGiq3P6eK3",
  "key10": "42dV9GVEPQeScNQ6kfgCGYJm478w7BAmMcrsFhQBXcTY7Y42JLhegmpYbJL7wkYdqMTYSHJXQVdUHaG2VQKVsgY7",
  "key11": "2fQPxF9mVo2stQrb4aeKq6jpW5Jcdrmau928EL8mnHU1tVdZwP3Vtfm3Ar1jCnVNEs5B8aSRDEmpuiwUvd8V3H7h",
  "key12": "5BmWUK86w7fpr3h6FEPaurbeYjoKX1M1zvTXoE4JC394TNTUyfUz38PdGLJMQ7FWyjJsC3ivafQZmc12XUBdwCPG",
  "key13": "3KXo1Vzsz16M1gbbJqQrDWT92T1YCogNhkb4dcKt77RQC9hTQUucmckED5TngXLKJycfUcLL1W1WX6jwJpyS2bn1",
  "key14": "5ZQBSVKFfR68rfT6YfCbg9qgvHzjMZKVpQs314mgHDgmCwWst9wkwaSf7GB4S7HEYqUuuBmSrSciFhwZtN8FMfXh",
  "key15": "BDhk5eHk4KtrsYtacXcQu5486RJo4rxBs5Z6T6WCHXuzWZzc5Y9zBMFeNQ4zYbdDn35KFX4nRU1Xv4YYfUbE9x5",
  "key16": "5aRrnNvyGNj4vqDfgptFsroFQDQHJrjAftj14dELfiTyDfjzxwKspC2gRPcGEKrYFZTytvPFTyZ3jnixtt1RhBet",
  "key17": "2pxPWKva4z7GnHCR8pcVzkdEtCZ4JWpuz2rKaK9mHA2V6dYhvYjREhMm8VXmb91izmFd1TYpHoVAP8Hi2P6md2n6",
  "key18": "3wtzmZeR4bJButtrax5tbQkbjavR6sGEtptjM2eGfqk24xtdiFw2pGZXVkRUGkoBhiHW85AQJ1M498N1GgnyVN1d",
  "key19": "3k3BHdMHdRDQmoSbjBX7Mx9yKVz2d1MZdVcBxcTidHB8dGMZmNASof6823dzMngGxGQ9yViZNnZnmNXMRi8ym7vh",
  "key20": "FCrAvmaXntvVsLwCDVvvGHZyZSb99mztra6CvPg9vKoiFe97YSV2D9GuTNKH9U6KQhWimW54jHnJcT96Tc5G5GA",
  "key21": "3UsKyhR4QQBSCFZaKHLK5uUdmxnAWvfjUQdsWbDixfbkdVEwiTXzXarPWy7wxAXDHzL9L9CqYLMyGLcNzvdGbWJX",
  "key22": "2XRmRXLy5kmhrVaSn6K16ZWt49e7ij4mhSSNgVzm1Hb9bMXBd3UQm62pHvshk1JybxVfofUTCLnDdpdKSikcrm22",
  "key23": "5GqvTwDh3Bs29QMB4B7JVYJdVoXcjtkLPT9hGhsYi43jFaTS7Y3YAUukRAbBkfvyHyfgUSURQvHHKdDJRCuTuoNF",
  "key24": "4ez2yfYm3krVqChLGTKdJtwqCF3YKzT9mPhMFNfz35oXpHBqvszvn1Kgywihbxx9YJ6QJ6AGqqBFMb98xmHtTEnZ",
  "key25": "4LrxRsrQhhhtBPfWKYFCcXUQRM6EdpZMLVcUqqrcEr7K5ceFpRmtFhpqALiKD7nnmTGizUucAJXNbofXezXoZP9Y",
  "key26": "2WbUS1SfcCKaZFweLZpwsruFTb6cyyTGbbXnryPDS4UHNZcm667V9NM7tSEVE2VoApbKgUfqqwWx9naJJ8w3whZ7"
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
