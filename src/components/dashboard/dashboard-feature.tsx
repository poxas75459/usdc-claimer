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
    "2SMy8MkYSY5Yim47CzNva9GiW8ZY5TjJqzvqMr6ymvBqXrfL4YG9s5tP7GfpiDRV2CLujdQ4TTzSZ62UiZeCKiif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SS1DAz7Aw86275jsNHmvjcDuKGNmcwnMQCXDeMdVG6qW4h5ue9WfQf7G6rwRMhesknKKYEya5NWjw7JaivLBbHL",
  "key1": "3kJ4iJdevCCkceHC48bu522arLCk1nniuN1BF3uyEhPd8HGd6ydzDjjQb4rdHe95trxqzinFJeajk1JGCMAZ3D72",
  "key2": "4Yeodozwr8g4DQZnrweUzhgE6qahVG3UBdiud28ZENDbmKUs3JejocXBxgfxSuMFWSZVJoKkKowGNVLB5Pr935eA",
  "key3": "5G7euXREtkRXg9uekqMgXmGSzataApfBVNJGgPg86pGuX7UdjQQxwwD1SwB1fxkz8rikSAoWjHfygadWXwD1GMr9",
  "key4": "5cU31bgFsQzquZHAJMQvAdMNfxop9MZBummYZYB1AnaKvhiM6cTdsPRdKbZskLKbHQbXokvu5pT8hdpk1DgwMYCb",
  "key5": "3SttjWKiFXDgXXBWLmPgKB4QGVtu2hVS6jJmXxKhTqsUBgmvYcezWzrXtnKJB7671vNcwkWeo6dej32BDCkN8KW9",
  "key6": "5ojbRaez5CVRbh8Tca3teqDT9BQYhBayabUe1y3B88pMUkcL9kjVMi9eq5tr3dpRjC3P9hkAZ1qMMLtq4RHMjiK3",
  "key7": "5k7qwdBpjreT4Wx6AZHc9u9qvs1adzrdZLjjbFYQJoPhpqmTm1FciU2HuB9QneR474bwt3BK1KtW8fpAV7cptczf",
  "key8": "4UFxsUYw895CKPogZed5Gt1f8Y2Vhe7eUjKgjAdCr1gQKxhSXbiAYmurDth8f85QUuLorb5xcPkC5kSLySuVr9F3",
  "key9": "4biWYfnaLGS5tPzYdw5geqZrYtiVwPuR6cQ4NbgCbE6DkDKUUKNdPg2JGfhp7iSdW5Pq7auS5jTZm41h2M73dyo8",
  "key10": "4nbe8m9AnNC7E3Gobn9DZXhGEnn9ot1T3cpkaXmcwJXReJ1VHxVrtNkTjeJG6n3gc3xZgciGfXHzjYusyB7HcdZB",
  "key11": "YpvPvnGGfQEbpo2DbUtrSZoggbjMKDBfU1NVeSx2f5urVgd3rvLHV8CbZJTJcgLZq3B28mEKhyNFiNqcXkipRR3",
  "key12": "2Gz2cpZFeCoJh1YbrteGTv7x8Fbac6ZpdzBGrcGbZocTxHbKdhwDi4QjbTmTHxjhoGecAUr2bg1xoVXn48t4bbeE",
  "key13": "4o71hDSFYiYjfVEFyUnCbWGzhN4JwRSvbD2zF3DNBjymg5fsa4r2XnoEKc29fHBJnWzfvU7goAq4GvixqNWYHC3P",
  "key14": "2jFGiutgxESVmZszMbqmm2FjYSXnWFR4jRaDqV3jVnRogSPh5K3eXEfQZyLduN8bKktttCquH7kMxvpGxVnwbGwU",
  "key15": "3PFta2waCHE1qAcqqec63xMv3SU6qD2nxnu5jAHfKkKf5HdzPvu4FxzLobqvUWZSWwzcYdc7RmepDaPvE2598Kbr",
  "key16": "5LzmYZKnCwuajsSvQMwruoXrvgM1AVEFU7NQmLAgbV2a3CLHMnd928jKdHTUkeWQg9zKW7nyE2qHMHdRosuWnjDx",
  "key17": "yMJZCgiVu3P47QYueR9WF1bdiGnn81yqGCCQ61xzJSXMwdvKXgPHyCjQULfMm1edjMiRwSn6jYG7wEuouCufNAH",
  "key18": "5Pmxj6JFPFkfiJGLaspkYk5h2V1xbdrU3oZT21itWDAEdLEEcZmhCLTUHAP21coXunpcrntRBAsRyqD4MLNT9E1B",
  "key19": "42FCuVNY7NdXCnvZt2CAHFgyLF3natw6DZaBuNoSdyax6n9GL4pnHkoTZFyCqnVzJLRSCpBt1kQiGRuWvDa46uw1",
  "key20": "4z6bJLmUqDC3GGGm85rkMQv56wVRYU42cmujkpKwH9hVShhHADk5ssdsiBnPjFN2FabX941k9xidDGiPyeKB1Euh",
  "key21": "3MXRwGxRzAqKZ4H77MsvRxmfGfRfcM3aPWjyBPTChc4TC7UCbRWJa5YsoPoa7HNgEPQLEq9xPhqrGTLNcAK8EtJQ",
  "key22": "44xH1UXWjYARsWrnu3ZZti6x7YsdMjtLw9pdHXTRgGqTrpDtoWTw3SEDZ9paqDHANbwgqsEUn2EfpdZ9eNCMsTrQ",
  "key23": "4B7rb9iZKmFJ2CGS6m23HVuQ79wP4RVoyBAG2bgSYkSnL8o2H3iSpbTcKdR8F33SontmeUqZYfdba1pKAhKMqXhB",
  "key24": "5rPdWtTTCtNitogvsy2WkfbqJdTzLtfheqLszYTJiD9VoKCLMfPfvuZZDFdtZhDXwCQG2JUyshUewZZQjZr9i2R2",
  "key25": "2ocnKQ5ZgjPvQm6qyWfuEpyzDxKcto231gDkn1Pu2G6zcH1viZNJBtGiC7YAcX4PMffeP9hvWRFZpZo7k5VtBEJm",
  "key26": "3PCVy4vm1uwvcvNg5t4EUDr8f3HBcX9D2xU87XeLA3kDjkGoEewXmqvmu9nbUKQkeyMWqVzqZJm7RY8gqTums8H5",
  "key27": "248UNPUTu8NGWPMKMoeS76WMvbmaUD5YrLoAtG3JB136Fx8NV1kZ18HPBhvQ3AoquSGV7rTaCjWLp45EfoYqWtmp",
  "key28": "PQ9MaGmxx3DrHhsDffepCNEC49LcMMt7ALyoXAVhMCYe4guY4p4W2zxjvf9oEGixiYcLD1zwK45Jn7hhKTxRbr5",
  "key29": "5ycu9E5SQ13qti8yRyZv1gnTBmjiMP1X317hG2gA354QQsVR4Jv9yAyUzVf1bs3XjfLMFyBRTZJzLfvEUCoaztPi",
  "key30": "2L8kLJkuwiRWzAU3PRp6yYd3RzevuNkZj5nNAcMj1kdV1H4HAwQHxKUFvXJYsh6dyPjDiDhwScEDyaQEnPPoXJ1f"
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
