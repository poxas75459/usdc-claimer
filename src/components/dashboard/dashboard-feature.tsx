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
    "4k9wsKGKqBEF7S6NfrCWUv6wVPavQ775Epvk9qt3g66onM6eniXbWjua4Ap1nr2uFSxNAj5cyCeYW3XKZMhwhNWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o7SohWg637QzPvH8vXYCmSKPRVGkeyuPu8Sz5vSTVZdeQK9EiwEBBz17C9UdFniqFUjRvT8qKPPAwWyRiCf1kWb",
  "key1": "2zmJGsPZH5NNYq1sZLsNLx2A6oMaHGJuB1QJqdsi4pMUzzXUDiEafrT6BLU3AY2d6cnNR5NewoaLgraedpw7pgkn",
  "key2": "3ZwWg6QEhw2KErNCbr7HTwftBjJzj3vdFTCGcYGCf8jMUMYqFZAPuvXKZm2MjgXCQtZvJCH1sQaBEvdnrdC7BtJD",
  "key3": "3pgy1AhDAvfac83jE5HMBZStdYQCEQ5suh1SCbTfovkmPYAX9NE5eT4q7uTcVRXBMzWeU4RNpjdz6441rRMQ5L5j",
  "key4": "2t8gAyU4XsSCGMnZaH1SSC3p6YgkSnQ51sVwdqtJorDBgndDAoW1cjM4xwsH6abXRhek9mJqkHuFkPabKuAAMJEu",
  "key5": "4aotGNH48ofEW9WvXj5obHhQcgSPU7nsrQxxH739RxZhmtXv6MeEVyXPS5bY5cHLE2P8tvVZT8XFCV7U93zL8UCv",
  "key6": "4FS44UkTjxw64pv5rPWc7vUjthGii6xUdyyvCiUrfZh29EQoUux5Qufcbzm2R8G1idxXCQxNwrt2aEv9jQanXKtx",
  "key7": "3CqYttnY7Zy5QNk6mPNeWKnK7PMaKW2m866xyyjcLuMgxKX1w42PZpveyLdvkpgpjRztkrZ94uYyjcdpqvhJLFRv",
  "key8": "58H6AdNV9K1caAs4fECtBHhZciWtnrNdNTT8Kho1TtBLPNptZFupNMDX6m2racyTJFX35Q8M4bzd5P1Q8aofKQCo",
  "key9": "4ZnVLnTuVLuXhPC9VsVtKYg9m1xSzp828pSwe9z6jN8BfuuRAYtzBugKDiLyc3wb4nEHDTe2N3QToqV7d7DdmBCa",
  "key10": "5u9i6QEPc2YDhLtmNSDVAMiQ2PrmC9UZLxShYUdubebWy89m1b7LTczAbEK6Km9qhRxWRvs3oxQBvPrZrDw1oeLe",
  "key11": "26nAX9TydHJ2rrXQ9CH3o2yX8o2QyGrv5KWBhEbrUkL5ebSCMenah4vrRe2LbKWFHJK73PVVqYBunDJkWfiWuuw2",
  "key12": "4zjh5RPTuXGJinKqSetz4vmi3KtFVDbjXeGmzeXEdWP3gWw6HcJrjz7ChvAtsD6C21P32tFsSCcj3inj5cb2bZNh",
  "key13": "uKDq6TN7upeJgFpKhVXRg3BDbwyuvusxwQP4h7GiuxzZtJFpJZ7JxoojFbVvErVQLbhxVUUhkVQJGt86gN59Uep",
  "key14": "5EU3MqVSSwNiLDpmLqtG73M1mWJYatwvCUj9Xmnxz1v3kz7o2CjFt9kRnoRMHtaDWLPYMeo5pyTkr5AJU5wiW1qQ",
  "key15": "4ViXrXsFiLE5FjmRCdheWyEbivZ9ZJosUQb6EY67yhyeSSn87ahbNuFFmc5uJRxZshTNA1QBzv9e8pJNZpfm9Rh",
  "key16": "4aZiDB2kDW3RAbd6jGxiqw2J2tmeo8E5kDH54ZsRmW7omR1n95Qpu5UfE6vU3PuoeMoFZspi2WyB3QW99UG8rnCf",
  "key17": "2Kfcy5uxGwzxVtsPGF1XYCznzjJxKBKPW4vVET6zmBxbPQ15AzFvAbH21J1PmE8yFpXQSEUMjL38umNhjQLwupPP",
  "key18": "3NBJkxr3iEZimFEHQMBhj4cPH4kYJACh3Km9EUXTMGc3pz96hQRJUf3a54q1YzxG8FCwkgt464Y7b4bKo6fwqHp7",
  "key19": "3PU4RAqTjtLuSh2okJB43R8SyRoCyKut9Rhh5endTM2uthnKx7m1j9ZimJicyEq91V8cz4jDeSE9PR1W7dJjxDLY",
  "key20": "4AmQkEWy2CcNarjRenThXDaUuqF2B23G1aidrDDjFsAnoAbef7FJz23Bw341vzSnAr4xLkNNN3qppnBDjYXhHL4i",
  "key21": "2sYDa3GHkRxv5n8jo6hEhSMoDH9npd7c1fjjXVvaiBd5Vb2BDhsH8PqPBnjjGyZcrLxocNPf5dKnoYhqYEK2wpSe",
  "key22": "2dZHpPhHG7zdxgzTfzza9e997DmyEiX3ikuK5UUDKZ9dMmTDRkRCXi9d3RH1UH94M3WpVaWLRQkfNM6XEfyyeq2g",
  "key23": "2WDFz6Dp86GdFAtvFEBs8Bw2GzMEhQNQrrNENL6ZyqRraT6RoDbSujpEAwdf6XwERTFmPM8RtsnxS9wQgXsNGxRi",
  "key24": "5KbkThuKwEkJevSqnzczznizJBGTdNNV1dBduepqsaZJUDjxt2XhgWvVBaRmZCWKaXvpcA71guDn8CvHoZnxstqY",
  "key25": "4qja544hneKuZUsqswWMnaXwqy7vsj2CkH59XbgAke7zZXX1HYyrRu3mD8DwfBwkWfqqyqF19iY3E66TAZBPfYj4",
  "key26": "4AdMEKy5qTuLQmM3Q27XWpXBAZ8mei9T1fzSsoC9uwJXoUoRupAZL9Vnmzc3dfA68tq1zKoTFDVGM1Lx8Cdtv8iL"
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
