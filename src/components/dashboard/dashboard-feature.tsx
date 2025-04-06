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
    "3UVwYVPef6xcqoLbRAoisWFQpwkZW4FEcynpto7Xsiz1sHyUymq1aSaC9dMS1Gs8TNrXnyn798RvgNQLFikJyVSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJfTYEbFenz1LByKJKX8NGfiq3yw14BSSd6uFD5wZtYmwJzUjMo2fB6W35vZdCSRXvRBBaxJXeYfptjUaKSYztT",
  "key1": "4No2qmseR3mpi9KhL4H4PEvHUqU17NfVeLpU3Abq9PNCQAXe7ARx3AiyaMU8dE1Sg4zvKAiiMCzi5mziY5xkDSek",
  "key2": "4TqjjZP7gwTFhocmv3L6wh8zr1MFw1zN6v1VZKBgVwSMgb6QP7EHjra1YMeHUzFXJzt6FLCZSkKnEGCWPBDMqSER",
  "key3": "3ELTAyDkvHBKLTj6P48L92RSean13FZBdYSQCHo4PgvSC328KeLmv3f6FXpvzEnge98rhaELvfJTvU8g8noUa8Ph",
  "key4": "3a6QZNzVXKE9oWumcUYaBJKfP9m3n31csPoQEqCpzQgahBjHRPQmS3NeHrjYCdstzQdDKXz2jVcoH5enBP9utRQW",
  "key5": "4qYnS2mjtfa5jPvPXbwdWcSGE2qKiGNHmkqjojFxovfzvEJi7ipdvuqUFLbxf3mdAf4KmTB5Uykzh3HKRgkb36Dk",
  "key6": "2DtrpjPjE9oowowhNJHM7ifcNxonhRVTPqa7Cigq9FGgKa25Md4SefHnLXoskzA8PJ3UyYZgR7vJoYM8vt4G6j19",
  "key7": "33cvw9qorDuGmsWji1rAurvk5shuCXuQCnJHdLZUEzJW9K6KXLG5yHCHcUJbR4sLnHWaasT9rbdQUEhSS7WDcPCs",
  "key8": "2gQnY6gbcegLCxFZHJCH2QE2G3x9ADRTZiY5WPSyfwdQaet4nSvWUtf9gjevFuFc4bS8zVvszA5Gr89CBdQ4Hp5s",
  "key9": "5tK877ZFC73Pq3Xt3KQoTGKDK73t73FAnMsieWP8WDjZ53Ho74ojQoTpNt6Cv9jTEehYgc2wF3tJYY8wP91Hm2Mx",
  "key10": "5B5zzNVcyBSKVh23nvSQLevcLcML35SuhzxA3efLJtQuJ73xnyvchTkbkePrrF72mrNond1MkmSph4aeVUJCiRiF",
  "key11": "B1BAJmg8Be9TBAmREoVmmNbRTayxHUmNcUg3D4Qp2f8kAiSpguoKZFMyDuxWJFBy8fjbjmv6h9Y2NpesW1cj1Yd",
  "key12": "4qxjWetq3JPX4B64PyT6Kfc8oJmjSy1F3GWxCSvSQetP7zBq8eUEWPXgYEyqhGJBujtbK4iQf348Ezg6k3FXioXM",
  "key13": "CU2bZRT5RM2ko1epaXWFbEHZANJE8VQeqZPyupCFC4RGfhr2fkqab7mnGvsyenPWPUE5uL5C7WKHcjAiwoG4bnP",
  "key14": "49derNetNx8FQgWS9vvn4RqN1i9YkDfyc2Xy7T9CYcCunWZK3obRH9anuFoHVzuM6dukZbdpdw5oeapc3fGueNgx",
  "key15": "WhicGZuFJgFTHKtXsABmnVGo3MXvW9uBBy7AEJLrmotunyHqiXAsjjQXfTU77qjjhEYFNG4q4xKo3iJZ68s7A77",
  "key16": "54tv5EUaVZ74jbnnxNdyLf5zEgZ7Hh75vztjbV85upNedUCrfH1orNxv1LRTqJQ98ZihVQT3BSLhX56yGNUMQuWC",
  "key17": "2113WzoVEqUyx25k5WQcJF9CfHMjBi2yop6B95EejLMiQDc47L57NHaiCMFsVgtUkXRo9AK5q1CGEEpdmf3w2T2X",
  "key18": "2ADMU4Rxa6KsAuhc5kbDFmGMFK58b1LMHDXsbPXXySfi8BwCjTmNVuKUm3yT8CHTCgG8pjdwnk1px8kNFpVojnMJ",
  "key19": "4pdwjgtCRZCTDfVXaYbVFJUEs21X9jPhvPoXGT9XUG6i42KgMrb2EGA2Lsaxy58NHF5U7wNrx1K6ycXgoaKpLPTN",
  "key20": "5b7V3vUEhN1HbT7RvKi8cdqvCqSA8mVQBzuxwKXEz5rA59XRRHv7vZATGdNCsBsyZp1NSQ2ZDjR5phKr8GhRGV5w",
  "key21": "4xaAttVHk6WUSeQAM6Mb5tUzUj8krsJexj9RdyRchVmxQAFfZYfTMRYYoBmBDsycmKjmy1qE4q6Ue35hGKo2UaEP",
  "key22": "33HpsCabW17JCNhYihkV43zz65XP5Xn3BJaqDnZ9zb6eB4Lg6z5BYYLTfeDW6Z5aMuQ7X9bsHee71kYgFdRxySSG",
  "key23": "3rcJgk4tFCYN8Khnrq57pdeaMGRCXuqUNwdrxayt4aQx1tNhi1XUmrTzZE521s3yV4TZutSxgPHptSdehSW6NHhP",
  "key24": "2VYg4L8yL6onXtp9YDwa1MUi2Q6cD8WULXsbgNW4wq9hWXaS4EM5aEeSLTzrBMAZ6bLSuQJGCh5vMQX2xJRcXWhm",
  "key25": "4gp6Pys5msnJTdjwanKCq3unBr6oCyAZkrkpXvejivzwwQqrf98m7mKMj7TmiFPVZ9LE6FmLaCRqbw1cHc8kpk58",
  "key26": "Lk4JLHD4RxuJm93uKtodFcc3snozzLMF7VdBWDAZjPQyhNZEJ1E3ZWxTCfK5EVoRgrWrdCtUY7AA74VdK1wwCW1",
  "key27": "5N6h3Vxpw3LS94ZhAm2bNGAmJa383ewgALorbNAiqynm2yzp86Z8qXNexZRkzFqsQnkyA1utsWHHKZLiw3a4EKLT",
  "key28": "4aZPaq576Yso1988XvTqtG7RzNu3bDCX7CAJtqryR2ZikD1BJ3RV6pHx2UZb3Vp9nVuqc4q7gwqvm9Fk3CDu3LVQ",
  "key29": "4uMoBND1hoV8sMQptdE1Qi3edCkUc1aYo4CArbaT8ww26Vd6JStT4tzyEzeUsw4MJL7gtHCLghjKyK2z8a7Y7JsJ",
  "key30": "25Nejk9V83Nke7aynKS4KXVZUj6tsvcdY11cEMjnEKwiFHt8FTeaQx4hqvTnWj8thSzdMeh1wBWEmrheX8wWBno9",
  "key31": "4jHZDPbUmKvYW5gmqgpT2RBsVfV5pDkwj8Khwr6F4cBQ7AScjTMXmZKebvByL46UJ8dJD9CK4VaptJWc8WBXikw6"
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
