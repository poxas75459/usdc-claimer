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
    "5BwwCXFTt8GDEYEFxD3aDDJpfw2KtPyzFbPtfNpP51vqGhMHmvAPWMsgSwBdvD9q6Sf6kwRhh8p4F24cSANhaASx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gnpfuw5vLEnLw2eJmGFE6WDEcsaWzfmVD6UEavZUxn6q7kZW2qaLPrgkXFu9VD4mmpgM1T2AxBneTFztt8X5ED",
  "key1": "k53cWdsTNXaRf7QyqUZAPBdWFqxHcjW6vG8CjdURkxUE4gCxzXWobm25Fj4yXY2BzRCwNHe77L1EDjucXeVTzGA",
  "key2": "2e2qpGPvTC6FnutuX2Ce1NYjtvyxmR2nbpEscGrfHwjX1rhPkmXNY8NZbKQEP6WvAFTBN4qwkemhAx812PgqEYGj",
  "key3": "24emNP4Q84T1oKZkyhE76TLBinrVxB2dYqC5Az5dfahF2qSRHwufeLGEAVaMV6vyXiyqbKZRSGVsqFWZGRBzxgvp",
  "key4": "yZDKmEWqQ93BH8nqVyztdapvpA6jvBNMZScxfGLHSoh9G51ZzVx9wQXyZfF7fmJcFZdXssYgban6JUaBHcKtzeA",
  "key5": "5yiguvQtSGcjeoaQihRCfRWoKVLwcY5zzppwgUMrZoRX1PDoDqD1SuwgjDBdy31bMcej2y8CnWC2a5haMusr3yNR",
  "key6": "49qtCqiDBM49cgV1EG8XMGgxbLunpt1FU48Wik5b1LmTTtTvsuEp7aL7hhL6Lva8fsGde5DAujWE1Zn7r4ZtLmn4",
  "key7": "5T3697k67jR2RgnNEGvk8QF7zSThjQxpZXcDYjVkEaBMfXfJFpyLrm36EqLHrYMZqitGJG9YHchAACyivGfKTe38",
  "key8": "eLeJvP3UMeUkgdH9vj9EaP4ZBPnUAgthdNDw8mkv1mZeATcmZBNnF2x5AQeZAicw37svJS3n4F4BGaJUoHQhiVJ",
  "key9": "3hFvWe27n2TrLyp9RZ8YWS2sf9j1kddfo8PxHmdTThEBkg9msEMe3qfvRdRHQ29zVy2TrVJewQbNYWmp2975T4RW",
  "key10": "4Ak5qoZkeV2NiRiWsXqwY1HSvN5snR7tSeu1298qHYwEabZHWt6GQKJ7WShiQ8dHDhWF7SMNp5hhzxi6oY4pFUNX",
  "key11": "275o5dtYbXetWNG58qK5xAtUuhvCiKcK7hgtJxT6fQAtk9ciGALfemV62AqM5mdS8m8R1D25Xn2t2goY9D4We1x2",
  "key12": "3BxiLDK1eTy46dtUA8HdGEeHi3JLWE1ZpmSYWDM2GTnDSMmAbobj6vjk5iffzfS6aXtm2FXrFg5nUJ1DLC5zqQ5K",
  "key13": "3ywYUKQ6PmiNkXRp2TPor5h5WUhqanU3iWFmSmiMLU9ghuicXs848spmZ3EWE265s7PuYRbTPjFC4wQfb1s6LKpv",
  "key14": "5MQSZi68zSYL3q8K63rP2SZ4GbRirsb8TZbdyrmu61c1GmaH9fxbPd8e26WH96vtKBRBF5hYS3YrbnTaVm2KyiTT",
  "key15": "qrahtnA4hPCyRJzspJXNKvpJSJxTczdKdRKD2dsW4QGModwRhFAoNgwWjq6UJWivrFdmVK26uFv5X7tQ3LVATHX",
  "key16": "5nFEHw73JyRZeMJqUtS5aHKNHEicdUwJd63WWi9JZgAbHT3mZKT78MDnHFLAkAWfbCYqBsBD6GbusLVbQrZJ1dG6",
  "key17": "MjygkkKmWLLjTfkDLrGLszxrQ3pM648cRfamFH8VmuMwKnQsHsHjX636X3SteUc4vXDYKrXerUCLUNhbTpJDXqW",
  "key18": "5CJnzxLL8GRxgtc7CQgVJqnAfGdLyn1hXijm6MWsVoeeVa7C3Ai5PTxpqz49Bpn2Yms72A1tALSC1PAruG2FWW5D",
  "key19": "24FvHrLW5WDf8Vg6Hf1xqZcbiD1VM7tgvME47PVPdDoDKR2jVBnidjxh4TGfvSXuzN6CjN5eXNccu9pmAsgWoKG8",
  "key20": "4skTn34hVRcZvzcymfmfWPCLdYzPBXWsUPxgfQaSLJRzGKJJtjgKr8ZDBnNzwCVLjpap4CGbZvmnjXPa3DAEuSXJ",
  "key21": "5qKTXoj6YgBnEy4FzDZgVJ7Biw2YpnBgE7b8HqDojws66aZuKKvFPwsJkwC9xXjf48srpxHudLNzUXcmUAz2md4d",
  "key22": "5tUkR4N5i2JeFgYyAoH5TmhjGyj9A8YpaMJS154zwQdghBETjaQTChFRkeafTx5FbPjoVZ9LCGLHZST65reUQNQ7",
  "key23": "4eZsvUvBxgqSSp9YEETm33oQXcomgPxnaZi4dwFza7RmDeNDRp4EU64fzAm2vEFgC2FYrG99LMYSWkJYeyo8sdKR",
  "key24": "4i3YyUQjhfpbfLZcwUvG7aCRpLDKjhAof4GXaNqzQdxeCFvxTL1eTZVJHar84fwqPYiMMLZTJxK16Mz8AVD4yX5q",
  "key25": "2Y24787E2UWo5hvgGvngo76fKZV7yM32aRMaB4ovJNH3aH3i6DyKRGUkm77sjib47RiJfeVfbVAhrS7jcxh2EjUY",
  "key26": "2e9ecPj4rDZhSM28Zjxso6w7Z3TxVGtzrB4kurDvfKPfrpG94L8FgZmAUXr7Q83tviLExBHfc7LaWv3WqGYt89n9",
  "key27": "qHucp2jFjZkWYGNG3jAMSAHDART77785FXdH6iVHNsTKvhBDaxdxFhkkYFAsAPXGo7byuZQk1qsb594qMcmZ6Uf",
  "key28": "4tLmSyUYZW7QuFGirKDEhhXaMNG2hZW4omcTzfDxDVfdfAvRyT9PjyWxtiFoFP8AZ14Rzkg5YjwKDbMRobwjgmm2",
  "key29": "3aktChdkGNSqvvi6rbGvHRyHzmCiLV3A9x8ufemovmyJWWU6VT95K2B2iomWt3D3BTsCnZn7pkrJtQvVFym27ddb",
  "key30": "d2NnFmHQTygb3cnPdNxpxoCsj39CwBwFSzBEjeBz988Xp3sLJEr37vNp23UMiTmgN8o8Jvtgm7X4fJduXXqKnGr",
  "key31": "g8pdCG71vM3V4oQzoyPqTwrpGwP7uHe4e1PXM5oS1foa3gJoZSU47zoaxdvBx7oR8HpYbuiyve4QZ8aPr1AvDYh"
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
