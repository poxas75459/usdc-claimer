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
    "X245ZE2SZgycUZFp9uoXfajueVUDnZHsmhRY2vnYBMz7mgRS2nU5gXL8yjb3Mq3KsPABPzVwWhhadhEuiMj2Ezi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LN5js8BVh6gK5Y6xXmxGppexai6cp373SNGXVJMQzuLaxZrrX9y3eZCviNqMFzRQsFaFaSkt3afLMvGF1zesuuw",
  "key1": "33cSAtNhpEpPJW6tHvWhvp5WimtGhDmR8thj4DNDX6JNKijYaVCRM2uehrBRn22CnoFP9D3e7oBeDALQwKXr9syT",
  "key2": "djgjEUotKkm2XUJbojqfQAgGCeQVrTbQZgdydN1rvSPYW2Mtuq2sqCZvxprPDupgjK8ntBbScWncCoXRhk9kCXc",
  "key3": "2owLCVyvoPxbzvSW7bmF4BR4tXuA3y3SSK7Lyp1RonUZzmLAuELf489qK7mSb7rkLTKbbAjQtSQfpRYY7nZBDUhQ",
  "key4": "3FVpgw6FSEFNxw3obSMdLKCg7GSr9iNiXyHLpP6Vfiq9BYbMine684ZxnxxbBQ8TPAamBVhmhUgw2DszHNFKJevR",
  "key5": "5ESGc8HAF2HAR8ywJbitvdZ6uuumbVpXzS87ddygRgATrDkQR64Vvi3oezN7DPBQvj8NYtQXkyzYux74Wrgts42e",
  "key6": "46dt9NaWYtPvHFnWkPyHofyrw9tJ9wa8HssjKQA7wc15xDfpEF6ousb3S7DhQ722g7V6wC3Tsd8JUkZPftk2teW8",
  "key7": "2gKXM9UZuGbTqjB5LHNL5jG56aA4jL2mU6sy7nHEr95eAs8U82qdsJaZLkR48QxNtVyUdHoXmYgWtnHHF7cBzTt5",
  "key8": "wPyuJ1MKihQyvyfbZs31GyrdSyD98MRMRR4zAkgrKJhFQJMMeyemzaRP47BkWz8FbAXuktQHpJePjHHFHiXkiRa",
  "key9": "5ePG4KZCLNqhUKL5jkghToB43NZ3FeTyjpxUQd5qVCiC4o5Y4B7FUHovgK3BMZaHW9XhNVZiXZs4LwoZmZ93vRNb",
  "key10": "ByGrJAyFiGQW7jVDkDZxGJCji2bUppLtu6Mf9rNGMB8TqrTZ4SGXd4XzpTd5VADfPP1rT8Vc18QE5BuDtErf9ni",
  "key11": "22K7uAcpGhCrjNd4FRx3LCNEPFqyNQAt57qv2wcHderwWJQEKev2nzyg2hBWWRZhxDg4Xp6A2sNCK3wJG79NYx7u",
  "key12": "4SNKDFjBPpFmeEqsidFnWgCy9M52yDL7g56Se9nmmQsdk1xSwXEdfrX2dzDeWbgrTGKy33KNyV7k1YBz5yQWTYzU",
  "key13": "5jvQrs23QHNtRsP4G7w9xWg148Ua6RPjSJvxPfXj5QvLKsqN8ryHgxVxzCJLi5BR7iy9nsYhDFya1guH1ZbmT961",
  "key14": "4k4DCG1goCPDLsS2b5rho1uAsB9CsoduAUyowybu3PU6MTEGMipFJh7EBiSaKAN9pFodGz6Q8qwFHCyUUcAhZXGR",
  "key15": "2JmSaQepAzVX4Pk3Cao5Ac4TqCjfc2k3MwtujpGXgjWgcDi5tYRtCaJoTwHS1m4rdp7yeR6D1SiDHcwfPJVAcXDY",
  "key16": "jDUiXJU4ue1CVyY5KtdSWxny9giYyXXPjJy2kkzu1YnXP53sESXMkbhWBoEk3gQDZxq19tM1KikGoZG2pPuaY1X",
  "key17": "4kWVvSHafs7VxjB4ydiLJoiA72kd1jbrDeRBWcRhsYQTdVy6rsXBP5thqD3renUrjj5ZP6xmiguzCbogBTKJKPT7",
  "key18": "28oTVQCCL91PfNwZXkjc5drJVSbrUYGANaARqkRwDsu3nZUBCMkL1ZJb6GvKbJN1Xcm8xe1iHkcRxU7RqXD1tRS1",
  "key19": "o8du25mNr749cmyMgpksociti1MCY8sMNFRAdB3ARFrGbjVayfsTPa7QLNBz6YrxntDa5AyDiZy7QpupFY2E1cK",
  "key20": "3LX47sntppwL9iUrR7TZk5DJ4QWEFMRtbw4R5CMc3uNuoQTsfmCh4748zeGwbRDkfaT1c9W4rncEk4cDZtm97Efg",
  "key21": "QFwQNdjRSKSYa8XCkczJZubNLXNEqR9ZkzkeRHRp8aeRXeDccu5VSLYiq2zpoXtC24pX15QixDdKPjuGKKHcv1T",
  "key22": "Qa52WWBpgPBBPWtUuVu8YdwP5n1YXNmSydpH7vAJQ2WCsQpzeAafw8AXQKdyZYkXsoLVJWQUV5vf4WA8AC1RfXX",
  "key23": "kAdLFRXnJqznGLkXPvw34ixM7dTBLCa5fiajRyAF93fBKctgY98JAu2EPXJyoh4PjEiZQDtREFu7JZrGGKJPyZq",
  "key24": "5D8A1e2RfDAkiXpYfaHbXbXGsydjbXTqcCmAdCKMqn1vNpdLgo2msLDphdccRbUp8wzK55dHCwhya4X3dbC11dMX",
  "key25": "3Pr61ngLRrnyPhiQEQ9dyBpTGRfG1aH8tTNqJA1dFeRRG37Vp3ovkYGfy6gguhJ8tPTWw5Rib8jjaN53Ftmj31VZ",
  "key26": "4g8JdWLhiubU9Tdz71awEogCivX4o8MaRQquoXDMXYCNy61QvLgZH5W5WdQTqrxiimHeyfECUA7JrZ7wUg45Ceu5",
  "key27": "hvsBDzUaLa4Dcim3ojgSRVszssdecRqjRiH6U959CHNLpwzbrMpyb3desWPXxbF5MXhFnoUuGXqB4bNUdG4dfNx",
  "key28": "5hdv6KidA7Ne5ZVoaKDMZX96LhNLvnG5TmGNA9Xf3ZwRNycwrvozUkBvSK3ZpKtctWxVAfxmTwACAVyiXQcJHPep",
  "key29": "4D2xk66vyxzcjw8Ss8jLtsmLZMMrDUMGoi59Acn12RRaXV5M1KzPDoELzqxFJhG48Bi55GoVM1MF2zR3mfmxhLxh",
  "key30": "3iRURjRKekNapeG2KuwBTBQ546EFBra8gZpzoAkGpENfQj5jWT9ro98tjZvUhiVo1M6GE5CERvZYSv7s4gzWZZ4B",
  "key31": "2xj3qWJ2DVN6MZTe2NeoT3LYUNcyfYokBRkfCCVm6MexvSvFYXsnrED5iPwzLxK7rB4NSmSz9vpnw98ANcKyJhR3",
  "key32": "25CaqNt3uyuy5vCpe2Zd1Ar8sP5dTdPVUQ7LNB5h3xL4kzuUaFeoUgXTUUJsesRbxjqz5FPbEuLHyGbYV8Tj4vas",
  "key33": "3EQsFnDMvvyrVLVDJf3KYNsykHpGS82cTorbvYjS7oEEDMWG42icvSfBQorXUhQmFCcSTGrpu3sdgXHUcmRkA8SG",
  "key34": "3EV1dyepGDQG6aAqV6589KBrGDwE7gAptNwRxXuFQxUksDVJe2PQmEX7G1ayVbV7YBHMwPFJ4nSSzndXtEuYaJ7e",
  "key35": "4z89D8pAn7ufPwSysprnmYDxBVWJCZebZN98ZsqGXJkRYLEBYdiazJZNUgMuxnma9kVFKz2n9MDRVDcBSZPbJPN7"
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
