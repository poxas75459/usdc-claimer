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
    "2AZiFvLgbHMRTc3SouVuZCuZ5i1WmxQ5z8ekw1bj3jHDnmZLf9QuvLXWUqJhFPPh2psPDa6P4ZEojpYHtGb35VPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxdg5QPJei8EtVMAYwTEeCEEF9s34kvE3tph3ypPoEBwqANnDoS6RKmcBEnCNsF7A9kcqpYz6QXi9AipXeAnyFf",
  "key1": "5fySof5czjMYTr4dXE8yqG6WpT8z591tE9G6WiyJ5zCWTiDC9gWtTSXZd1qk8X1T2Ms67DeKgnXk15vjf2AzR5bF",
  "key2": "57VxG7YM4gGJ8hELcCCAyfRFowv8mXxKiMLnuAbJ8TDgEqUq11vx5WusRVCeo5J9F3dXQ5tNBhB14DUaPAyegwp",
  "key3": "QJgSsHJoB9XnhRAR1Kf9GHf79mf61Hxoqncnuor7wJobFH9eg5rVvMrddrBDYNiuHSQpbiaQ3LXTRwAWnUVMQ4E",
  "key4": "3MVLkKabaQkfTYBAEM3sswsrzwRvBJkM9hiEov4PZurBJH4oGs1cn2v8AS6hAWx9czazXBcAsiZNdmQuu7eUvtY3",
  "key5": "5AaNi3sgD29fGrmizhFHtZu8VAC8QbsqoAL9jvCog1BoZjx9dsiaQ3iNbe5afTqVLRqJhZt9Gy3ZG7LQtm9zsUaA",
  "key6": "61tYGNC6KsEABYU3sWuCMmB1agk9KT2B5WvVDmNwBt9Y9idyYAAi2FuSQZxKKXW8GZ3DE4eQMHBz48xAjprf4pJR",
  "key7": "4STRAQAxnqxLTuZGhVpfLPxC7GwKLLBF5ohtd2QY86p3y43uRtzD5ys7g4q1r3k1DcahML1q83NcjU69rn4a8kyW",
  "key8": "3sBJR6JVWrFFeP5xm6ZTQzLt12RMvDYoTBHn4NCavd8STce5y4MKcPMK5xprJn35Fd1KZxTS5phhgrXD9wHNMJ4N",
  "key9": "3v94sEiN7sLwdC1VN4ypw9A472rzNvp49xAUaWEWXk6bADNat46Bz48La1ZfV2LbFVXuJsTu1Yt6xtYvbSMUpBbQ",
  "key10": "5tXpR1KfvtCU9Z7ufiuPU2DerRFrLLvQ2QCeD1wrGQw84TyyYK4nqaiwXiYBXczXTUkaBwGmYK9yomvKXhhZsmEX",
  "key11": "2mCUaQmKUF2vMuT5s6f2DnQKBnTer5WDpbjKAuMf864Z1tzwgfEfLjEhZqUByL93hVTWcWHVUbV1pWqjaYCggbud",
  "key12": "3Li7g24hwazNmbDxmXCAjXBogxNWueJa2UjWtGEFQ8BUE1Yjgfc31v3dX5ZD6kFrzLdkDvkoKaF16ptZJPWYbY4o",
  "key13": "53eUPFcdBTwapr2oiyix8RnRc74oazKCy4HggapLKZgqESwatS9Y8B83BxiHFBju6jBNc9RniG6gfe8mvNESjQag",
  "key14": "2DpiLt2XU5azbGYPnPwLoK6YXkCqXjCUSFuNjZa6TiJAAzmHfQGnq7st88KxZaVeqJ59L2gpvZBTezD97zSkCq4m",
  "key15": "43dxYdHrhZwd8nNXZw4kF6PAbugdkfMQFXEGjkAShU3DfQs83C3UUMv9A73PxLysDgPRkxdYYVLsCguCLbnVJ29d",
  "key16": "2ea1sr72S3Q1kLkXfJSXZsyyEuRVCcqKBtN3pGa4oM6XUvhwzAVMFALHcr5cdD9BwdqtE7ByZMR4mvbrDT6WU56h",
  "key17": "3HeFX7mukBMkkLfMYkVZq6Myy7dwXcVsmezggu7gUPAVKMXbnfieNFWLGv3vW5sZeri5xdWvd7ysuu9L6cSLPSmP",
  "key18": "2e3zh9KLq8tnpDRmr3oEBPa4ocmyYmRUGQPaEgZCcvmU1YFVoD9x6rpDt76ySzVnYZoPfqt9xh9zpBXYeJdKgx81",
  "key19": "VqkRSoiCdMd8Pq8VzXWDM8onqjAyeb4QrDN6A8wmHyEqjcyDMvJymxF8ddF94VkqFX9Aoy2Vq4jRQUStrQdTR1z",
  "key20": "SF6UJ9AFa4RaeLpW7TQ5zwD2wnfL2vKTFSrrRiEDfS7TrQ8tFL1fQngTnPgW68U2xYSNkrH9mkobYZCyLJHvMYz",
  "key21": "3pFfy9gbuRDJHq9wxt7tnn7vPd6DBfGDf6CGAvDRyiQnjfi3itLiEd4H84NghkNbRKbEdLurMPMAYw5DFXctUyyH",
  "key22": "H6zDzTXz1ndU7egy2p3UGKQqgwGfYRVGN2Gg6GYnTnhtsSQhaWqCEktpzWAuBkikFpixDu6PwtKqx8BxAkVNKjc",
  "key23": "4JpdDoy9TTmDApvJvedSqhayLWyyu4KNrRopCDGpYuv7HV5TJvtcw7uTafNuJ4DFWZd5YZ1t2bBX1M6knnAee2gy",
  "key24": "5oVZDPQvep33VcwP4hdWpFhgWHpkxjxpnUUTVin1meQKwmbUWzFgyxbXqWT1fQ2PTVTr7ZztPsV9PMR87udLRRUQ",
  "key25": "37TUFjwp9kWvPUj9ePhM9kx4Eoxr9Z9h7UB7mBBgdxiR8fZ89XR8G4D8Kf28Lz5HRYRqEHK5faCpVvbJCPgxyw6E",
  "key26": "2eFJyRepRB3mdHVQnDmPJWYd1KHBzJ7DGPD5MznFpGE5tHkP23Kesg1iARXwRZWkkZZusdBoYdf3zjMp7ZLRLW5f",
  "key27": "2K7MkQJr1fj76HWG1SH7gfRi4K25Doug9GAvdE1vQeXGD6J8uWE8v1VSNnxQwvvLYsYLLQZqNdsf4ct1CfecNymv",
  "key28": "4gFWVE8Pfjh7hw3ZfJooDqbQe3pEobn4LPAovXJEfYRPiGecKFBFFaSBAf14ynbRH1hmXSvSEevDnmt5yAuTK792"
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
