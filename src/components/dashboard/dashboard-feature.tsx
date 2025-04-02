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
    "2mtj6W9HgRNNSC5rfk6aChBbmSK96eZbijcJ1sutkHBq9ZkNL2gxdR6zDh2gFbARfL46i8PEMFGDX2ARpAXsqSLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyoHBSY3KbNH9DgkQNWTe1wAcbcHYpjsEkKfbseeHX1ReRsMGb7mUC3DMy1L4cGBpGpcisCQHcszT4pJVkSoVx8",
  "key1": "3hiYAmEzKDKGRhprZnMESomSTyd8mK7h6fM43XqiaCd3QHxcZXZw67TwqotHXhA9oGqxkhTknWeJ33AMUY1k5U4Q",
  "key2": "aAbgqvHJTkewhc1rQduxRtEqifByc18DaRqof2yzcnW6biX1v1jK9Wj3MFc7phtjoAYMGBibN8DMGR6PNMvc3AC",
  "key3": "SVscKxwSSThproYfbRvhmm9Tr3rvbVHdtHwoCpnajpHmBDPhcogDgRRG6cdg5FwpjCmCkPKNQbDb3zipPfzePZ6",
  "key4": "3yWdiuFWnSsTrsWwqm8AphsoXnSMDHaUtNijHmWcPDK7Zp5v4URPNttq6t8iDhMQka81Kv7EtJxXh7MJzF51uyva",
  "key5": "5QrBzNLRD26pgfGWJcNspofxiBGvChuQcHzXdtghETn3brkQMpi3rrYi6SPK4DeCM4MstGedWWd1YMSLCuXgUguT",
  "key6": "iQpVo3KGd7od1Eii159Zf2wnH9GHDd4WaaAABtCH6oUReCWESjFAPrWuFv9JvMTbnwjPSFH7jtXYuVNgcNsaxzw",
  "key7": "7zpeAirxBETUgt4j7ShG6DfdBAXdXz4CFU4Ydad9xZqgpzoSUeNyvhUaEBycNdY5Ffo3dB7dMxxS7Dby4QBpkQZ",
  "key8": "3bYRzveXMuGSUwQdH8wbpXQb2h7WWMArY2imirKiQuQbQDnZmSpN5cWXSefnpetuLgypHmNRcnVZcc9K5U6cLcTC",
  "key9": "3YXMeoEbEs7ZJWYTowK4PSg3garGEBPCHaSF7STrdT3owhkLKP9CoAyZUMwExGcDYWTEcB7CM9NvHpDzWMc34FJV",
  "key10": "z4y29PygiXWJPjkgaX48RyJb7KFxQvabt89R27nRFXJKWWQbkynrA7nkaFPrQx4QDiFzqoP6qVnvT2TQEPFR2DD",
  "key11": "heNRVoR2WwtKsM5KpMiVuQbGEyvJbBNeLeCn4MG2DsFQvNZ5zqB6djEFuRanYnXxkxEMc2KxP2mceTrjSG1WprA",
  "key12": "4cDoWejfFAQ6b11mVBHJeG21JFdbVnvULPUtXSZjsJziBWftQ62GUt7ayEQEfnUBYtcZ1RRoJ7eNFkqBZtFUZk72",
  "key13": "4QbesTASm8PJF9JxJwK8K7kD56UrHEGvwh8evWraGiVeFR5pEPUXS71RpZbkiUoR4E8G4Hv6CbZRtFYUto54xzhx",
  "key14": "5XZbixyBPTTK1VFcLzjLs5bN9LqYm1vnfi5DM8dn3SncCKckAcBHZaffJZZqq6ap1QWzGpu1cvbAkkhaWRL4eWvQ",
  "key15": "DQc23jZbKXoSPzPoeV5GAAd5uc4B3c8139BYYwuPQRL9XSv1iSUTQXBApUFhaAEh9QsBHoQerqcwS2AUsKFnKMz",
  "key16": "4r3fA17Bd9osBE2dbbkDQL7WPb452Xd9hDEDptCD4rzgQS2xV7YwQTkegjMEMwCmPNRCmTzfx392iZdUXN5i9fYx",
  "key17": "5AFS4YCRpr8aXm8iwVZzTS3mYSkBt5615ZpL6DLvTypDWeDvRP4TN2tKAaPMYC7rpTDKYKm5MyGQ9HuMwG1nthC9",
  "key18": "4zrxmpsQVoifeFqFk7ubVaQ8VvXQQbfgW3iHnfe3jCmT98JXwzZanyYFGP4xKYwpA2ndsxDbhCo5wSUXM6ZbV2P7",
  "key19": "2QksPaa8cFcUaEj9nh1w1aQPtcw8mopij1D9yC6VxqgnRBSvWgZdVeeKwFThymW67CmyLQJVUaKnsPGbG3naPVFW",
  "key20": "3xaVbmEw7iKb7kG1HtUxPq4NXF72HdXfoty7cy42azee7v6BVefqrAdCoWXeNHd6BLEkpJ8fsLS4h2aLh4xVmx3",
  "key21": "3fFvnx3HxTAHpZroYrJpisYPJiCruu43yZNU6tgUw4KAJQ4b9gWB9fVvALmZi1w5Khqd1JkUjjtX9vCAny18LSH8",
  "key22": "2D1kwar52vuA4BSQN7htFMdVo4Yo1StmJ7TTarGHu6FkNujiBwCUvEEMY4KP78X23t1TASVLkABeA7DdWnWtu21T",
  "key23": "3RBgFB2WYHo3NSHbe1EYxVvvp5Ti4CQQfQQrN3qFcCSsSxbqEiVCk5mkuBaDBSVKCYWMNHENmsRWTHGRtAJ1fC3F",
  "key24": "5pWTS1Lm19i4wGXQ6S531jFVzUWNpfCPipx25VMgUY3xQ8aDPLm7ZFhsSmWk8CCHZnkmMMTCReGoyZ9VRkYXYBJz",
  "key25": "67k6WZEWLLiDxkmTCzEQySxXpxWXmwdw97uszxWmSvMvS3jnqEaDzy2zNBY9A2etivDjCuJdRG5ADYgPjFPXQYZt",
  "key26": "dqNy8iKxnMNYGxxdiDqHQw1rEqvjttyCmsoq8gCjGti6HzjfKBKVcKhgw2UCbooj3jo6HFvyUN3XyRukwLuoS1d",
  "key27": "3Fa1HBb53hghv6PMJKpeGSX9DQEpDo5SVEwaiYbRmdHqTLAttwrhcuQY6MCXQ2o1dxe4n9yjbXNB6QMmEc8Uup3i",
  "key28": "5F1gFCWSYCajKTaL9K3hpNeXpW3TK9N162LzPYiecYoparS1L5CqLxwtCX7Ro1QDKGRx7KzaJrjM3BWkzrKaoiFs",
  "key29": "u2FmenoY8ijHyUBfiADSGnxWBXvdsz7Xx4ATDT61Jv5pXT1dbWFhhociAgvfk6SbEpkJ4t13PYbiRtXosfAq1fB",
  "key30": "PhdrgWFaoMeWANKehnis5VaxG6B4a1yHrFQc1zy8nBZWhvYCpipkv5HtaYu6wKcJ2ZhdaK8UE2DBn5PUZJXiaJc",
  "key31": "2dmvMGdVCxRrEjecEPztQ4UXmUV5gcroLTGd4z6QC23Zbvh3Yrjhyc3o4itD6QhCJvz2u57N23huRy8bRrbh42q3",
  "key32": "4SMbY5Z2v4FFJyQDFctMFnbCdMaUufuiyhNW4pFTvnkauFvNWU9ZEDq72Ec9KwPS3TtAUnmonfHhCrRUSWPeDoX",
  "key33": "JuhkwhpAjVKrWdLpAhMcuQejgK6UCPzFduqrTA9Ji5Rg4WSNkTP7RMF2LKe2r9ycbJfVKC3taZU76s2w5QWUxNw",
  "key34": "59nfoUfL8t7pGqLdLvMTqNMBZengpiAZJvaStZ5v4Afp2sv6cJKvR7he5gBVB3uAgeYrJpLW9eHtFtuAWUoFscRm",
  "key35": "56faSBg9JuQL9VfzHtFqyt379dibq1Lx2VCEK1Vzdcta6dW3nXRECcSYz7Mu4YN91Lwrr64X2zHnyktVQNwW3g2V",
  "key36": "32QUUY4eyo2qgpSLVTms7G5zHKCxwMBHtXQCLf9pToVj1vF1Ypk45FptGHanBAuGWXzMJerTNoX5v3BrNd6VWVi7",
  "key37": "5iJNGP4VoGzSCokXkCbk5Pg8ZD9ccReSQjfLkcnZGh7NwYFpKcmr9RiPXtQQhSrHwYkapMbgJSwZ2HdC471GDXd4",
  "key38": "5NFWUjPA6YWYpxARYiPNEv23LT5q3LaFYdgxwYQJH4C69kbXgy1boMRn1Y6RcgbjJS8rWKdydmVNyjmKRbqGL3Lv",
  "key39": "5CWg3kuTx4miwDB8NBceh9BK9SHkPGfJnABLor2WvisAK8V5thibxjRFKgyG1Nh6FfqWsZCGPr1FhQvVJ2xqgyun",
  "key40": "46TizHpUmipn718J3Q98ZdxBLuuBacAJsxXgZgwnCDoucesbb176ApetG6ERj7k4NSxcUyg7wpiLNWCNHvAcCv8K",
  "key41": "31Yb5ejsWatrUqKTLy7piUYSgPtnBJ3rj7B94x18iZ7uQhHwvASx6GgaDCy22UQtJu12qgWmCUsk2zcGuukjY3fe",
  "key42": "58kzJpi8m1sKZdeVU48Rm2FrBD35t77pByhDee95c7RaEdsE6FEwndVjzNWX8d2MF1dU2FsC6CYPiSmPK98DCy53",
  "key43": "2yBDTNFWkJYmsSokwZDpkudXM5HfiQ8FmW74EXzQ9sg78bwZWsc9Y8nEP8oaUYxqadadepVmjS9H211cHtZsEjzG",
  "key44": "5Zw1GQvRjY29RzuLbwfEFxAR2PG2hUdQ8fWc6PJbmtfx13vep9Mq3bmuVySH7BWfH3JH6jtQ7yBg7K9UhJLPxJ5J",
  "key45": "jERFpHq7JroqVdr7PiHtii2Z4HjxkJFenfdc4zbSXNQQSf4h4LDLZoHVGYWLHpdiepELPARaw3x44fomoQXdLKu"
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
