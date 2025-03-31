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
    "3e7uAuvDZv5g7Y8N3N5UHi3kdkDwbxMLYwfiQmPffDsw54Hfsnb8hht9zeTT2vAdnY1RBczZh7gBmuv4UiTtespP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DE7LjrpACWwKkHYN2kLtVQnCeZxZ4PN6E8J1M6MfMiozB4TWSZgRPA4Xc1TjX1DS4XLW7EMRPvXUZmDfbigBnZn",
  "key1": "2TZUfAWoDQobFSgMPgCMbQ9xQihAPypchfdTuKn6irGTJo2413j2nzsJuhF4GEz22g3zm7fWXtBKACC7HMr9Dhoo",
  "key2": "5PzV8q2jTVc4eD8u3sjtfgJHLb4iejMkvfkNj6L6tpzYjWXSFktvStkQGc8Vqc1UwuqDN8Ve8WvSqfeRXZGau8LB",
  "key3": "4dPmoUkyc3WtQXgcoUa2TumDHZq7kFmXhoQvpbKXmFvmHqPdQ2dzY7RD3i1QMzPmCRzQ9Bf1VeFBavvxtKvpRNPi",
  "key4": "2uekt5mgmBiHwS6gnARFud4fXnXt4agZT3aWArmhp9Gk1pGS2SRxPeysaUmi9m4L8ZDRpS6avSVub7SaJKXHMcuU",
  "key5": "4a9DkUNGqr76iDX48p1iYG4x3bziK458KtfDckrPepsaRB3ougQYemjix5rnxdZcLDhjJUTKcUXuLon3xHAfXbqv",
  "key6": "5PARD4HecmuCrsxejiPRGbJmnh87Xx9P5vo5N6zjZ2HrcHrULAkeX1gW1oDVe6Ero6pkUqVsr4mgVqAL4McBuBAQ",
  "key7": "cUdT7btwQBVmrFLD1xn2o1tZEWELxG697W4Djk7tP7aYFzMoKiV1Q4k7eoc4v3sbmtEhrzZCrqn721gBor6Gh4P",
  "key8": "44gNEAs7uZEgzF4AuGwJQnNNcsDtPJ75dQgU21Qy5Kk52NRACerUensT2RhA9yCysBBJWmRbXzBQzdzHsn5K5NKY",
  "key9": "4dakrYtJTG8J25wTazkZS2ADhbedNocTMGSXUkJk9dQd3NiXQoSqcPUrxCSFKujGLG6fgj6xjmVXSrjmB5vvn4Xm",
  "key10": "5tBBRrEJpYxux2hGawv8BRyDgfL6QvG275NV6Hyo5HrAymB9SnkcghJq6Szut9JR3nK6o7Gi287UUVDSEiegS2Gu",
  "key11": "3oAnNQVDx4vFNbS8smnK5YvmwZ5cvpEibmV3bY8zHDboBeMTvABGyfgjEGtJk6i4NjqP7hA26EEUgqSpd1aTvjew",
  "key12": "2EeN8W1J91FBC9MpFNDrqdCpZAPAjgx3AiqD8mfU2KUNeot13naq3XWw9MrMUkT8dDTFhJyfu3kvizc2wGfoe3mf",
  "key13": "5hDKFjoj6SNwobDqesA8JGexggdjKSuhfWteMzqbDavykvSE2dfvCApW4HgJkahbpDnvLbmZbHQRo9pxW7PAX8AC",
  "key14": "5EtSiqUZZnrnSzeicUCeVEoWxH7jB8eLJWfCq2kHJWatH4hPLndVs7Y3qjC1Fd1gNRGSvvmHJKd4GGfh5HtcFGTf",
  "key15": "3WWgebRHeujnZ2cMxoV6a9AtUc9qgkvBGLniZUQb98SFHNqpJMpffDQpVCXiR3Qt4KMJSb56Ytu9TM5ghUpjTPgB",
  "key16": "5Jt9fAGRR4BHK4HRj51UR9jbAWnLWxaB3QJYY1r58J69JJ3gp9U5PHWmNER8kTfnHJP9jMskB8C3MaB8TYWc5nMJ",
  "key17": "42ucWGQN7HjhrpdmDyah69PcVU5xmDoD9hwRZGXjV1k15PLitf5DJpCZ6KhML46ruLJJWVKx98NPUQxCL6KuXio",
  "key18": "2ACRfJabzZy6vr2pFBoU4DWVMCQKGaw4ZE6JdTcZt1NgJLaJoQ5bbaPc1x2CWPQeHdFP66Pm4YcHxiJqQWXpJAs8",
  "key19": "4rYxKdeasx3Qwk4wqR7JNTvw4SPkpKarfzUDiWmMffu6iAsCAjZp6cUfTC4HU5zJgo4m1rUcmd5E5XvqNxZEri3Q",
  "key20": "tg6cU9hoqcwFyQt73bFQ8sm9mkPAivkBURpUas9diRkAct5WcoPznPBDgXdNU38JdXFr6HJXLCABBoJFBeF1wFm",
  "key21": "4PV22JsmffzHiJf8EMzoJ54KZDskEjT9yuhAaCg5PjcJ4vMeaNj8Fu8TpJjeG7StVSWdsbXRhcUL5quxTkPXkL1g",
  "key22": "zXtL6vAo6Ckv7xvvGqAxvwFeJUeNA3bi3ZoTgrA76hKVa6iveSDzULryLuktrJT39LUxMMZ6wtoHrW7RVqS5Xh5",
  "key23": "61N7jJzpsYJ29u1k2z1X3Dv9fLQggjf1noAgFnVnVW6x2fzt3X18T4dg3umgJuKm3EZUy1eZZvJHT5CYQjHhbkAf",
  "key24": "55K2hJYMX3GUXyi8o8efF6LYfYpkVE5srgC9HBU2Vtn6i39RAVTPbGz99WUk8F69cimcpyh5XFB7HHcYE6wwR7MB",
  "key25": "XgNYYKfFfhags2yCBJirRiaNyHVJHnE1UNuPvgx64ZqTKESQHMXh4xc5kuBQmDtfQUp39WXxG41wsFZmLkupMDT"
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
