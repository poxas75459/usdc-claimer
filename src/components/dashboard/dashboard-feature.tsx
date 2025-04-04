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
    "2xWyYJSGKjbQBY51vTdUmCLvawYnJkJgNewbBnHgpmXAgmM9Zt8h4o6xQX5NQ181VQt8DND7DCT9T6VdhCdjWWa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vy8qEVjPaGGJByHoKRMWauFWppCGc9hYKTpEWNe3joVNVH6zFMZCRsXRUx74yD2qdGmx1aw6P51nKB8SNJkhExW",
  "key1": "2frdmuXW25r59Yc6D1i2YV8xg22ZhkadjmkLep5DQFSS2f6CfDNirAnZM7TRDbcSXeQ5NhuMZExd2zLD5GaHFjnk",
  "key2": "3vV2N6QDijwPGiu2FseAcsSQUvtFUbVJaVC1hUYgH6YfotcWJzmsXJK9rX23yCR383zxcNMg1VC48kMmmW2HrMae",
  "key3": "2aXwbf7LjhLfK2V4phdLvec2uViQ3CJZvBQmzN7AR8aHzmzbxL59reSpJHDYss2LJMYvrRKEZeQaqXnS4AdPQaaY",
  "key4": "JwmViGVDMXpYMRJkFRVyicsgEpbpCHtopUTnMZMSKVFzobStLS8jJSQdGJDPbKfugeo8TSvgyFekwbgUF3eNDGd",
  "key5": "4sydh16Tj3JQCETSbX6vVJZAvWy43C6YchZcYVcX2XoxGSZ72fFrY9qtU4PfimpfXdTUqCcXwpcZahPBG9kpWRjd",
  "key6": "J85JAtyTwvP2gVKYimh9KHi6dX85PPRQ13jakC54yb5AzneuCHE79rKT6r7QwEBS3TeMjHU9rdp14BKRVbZu9py",
  "key7": "2S3mQ46RUcxH6C9qGQng2i4Aebb7W9kJKPjJQJHbDLogsfdwLcPVjKPgLcNYgWzWYjnXpz4bG89qm1iSxNReyJxY",
  "key8": "3Zqa3CM7eQdG7AgYAhWEZuJPDWDXiUbigXKaJ2sCQzxLh9UrMCiczsoA6H7SGHbsL3Qh9GrBmCA48niM9JVr567Q",
  "key9": "5EHQKapdwrtnSb82vE9RDnai8nKYNdojz92SgtstYuHhZjNErZSuhUSsX3sNTo4vXYssLn4BQye7hKTLfQ7Q2QGn",
  "key10": "5yqXCUQpxnDxjNFLGJDyvUbfzT4y8JL7R575cu3MLsH477n3g9RBQKMtCFewL7m9dEfVVFgmEpHcpEPupjCXseax",
  "key11": "4CfharGywVu3TPg8MqeTQAN6ThDE38PkTWjazbhp9GYJoUusWQffEWJRzu6p3Gsn7RCPqBdQraAqJjSFDufSrFeR",
  "key12": "3hsoAxEQB8ePy8UTLgAp87qnkWjpSkaaYezirv5T6tJaVK68TZxT561Sdc78cDJ3DVxiGaUmrb16aBfcfumc5GhM",
  "key13": "Fsj6VdJ6hfwx18mbLYeiKaingfgqS1VMS83aQ32obq951kFvTfaDJ9Vf8iRiL46erGwAaydxiQ4aMNmLSpcrbZm",
  "key14": "5XgeGR6fbvP4Dmg22wPMbiKqgzUuXW71sBw5cbJ68n52ENDzn7F8455qqH3mk2nt2Bk9TeC91KAWiz5d5MRK8yh",
  "key15": "4Sz2Np9Z7YF3SLx7Lyw9N3UwgRwPmQhV4SV6RVjosUJt3vUS6zvzUnRiFGcURnBBx368pigAFnScSeqf14u95GwE",
  "key16": "3st7atCS6QBbTBBFXTo5CCCfGMWczBjCoHsw57ng9xVqf7cHBBdx5zxVUoQ1bgSt8Vb73QZR9eTTcLRjqx5ZvVTy",
  "key17": "5KLh9yYMn8eML1zGhy9WFqq2gYkdTEzvRrvoKCZbUrjhdayH6uxGpCE4REuHnfstoj9GzSKizkGfEjhjrrimzT4Q",
  "key18": "2upZEXjwoJ5KrPDSUqAXT6k9dyFYJzymUjSND6TEKGzQiFPUdzkHp5iBzqQPsZErcXRgkDfBtZmXDnVSD1DE53vT",
  "key19": "5pz8T1hYKFEFv93onGg9e9o1TNEdDLtBZ17LaZUU1KgngK7Ewr1o7G3NHApQfg2ZkLKtSNJZc3tNkwkjxmYxk44z",
  "key20": "QMPRoCaHFTDFRtn1SQNyiuuYfHgkj8MwgJ5uDdRaQdH8DG3axFjJMVoJhnbwBzxoUbb3KyX6yHyQw7zoVhp7vaC",
  "key21": "tE2GXtWSQFvKeTg7PCpGYqGsDdMoUwNL1m6EyXmXNqvwWG9nxEqsBXukA8s834qvhmCoq97z9u4DZcsUU7iTrCD",
  "key22": "k7vChNV5iatKKKm9pVv7hAGFjBRwfMb7fuvgpAv6KBk416uwmq3p4iV7xmEVQ1GfsYntfUKErWJHoV7yjYReyt4",
  "key23": "4RiAKrM5ZuE6tnsh2AcQ6Zb79cpw9no8jR9TsMwUdNVWbyshEN6wDaVKaGGamT6uNU6etPhwcp7wuGHwTitcVKcS",
  "key24": "2akR24bjgrLfcX84UqFDstEgNyFqWAXiBe2mYqaV6jRE1ENKRW4MjdzvMqpWRKWcVWxpiDMxHdqTb8cxLy6w4mBn",
  "key25": "2QL1BrDJQfxk422tHBPW7PCNmyXGekPgvvnZ1mFimVWFcd7rDAWpJ8fxGSmz5nvhjBzEnybVcrHXdViFDsJfHo97",
  "key26": "2c1pHnuMdCjEMp9ys5qb6JxawZpR5g5W18NWjdjgfpbQxzJEHWquoeQcGw1Y4wFQh2MVZpv6Egfrqz3Cz74Timzj",
  "key27": "3CXijx38u48mM6ipQCJ6ZiyjoA2kYRAk7way7q6rtTYeWbu8MgUQvUDG1uz7LES7jfVLUiwbUvqGcEM86JUvuji",
  "key28": "4iPFG7KFe1dZ4cJfmUgg6D68KEGCcpohrEsr1qfSE138XQBpvQQhgs8ojqC2c1874PiCH82DFqyCb71tgZMBnnij",
  "key29": "3y3n9z8TPnmBL5g1rjsmbkDMtg6CZUTKjyN5KnexhABma9bqVQ5tapV33wJbYFpinKUiquMVnGWxJeLAf7VBoRsd",
  "key30": "2HYf6dLBW64cJNNk85i5bTqzysDavZm7Cqd234yFGVsKDXRdMiug9oijFRaE53RjXmvvRhKUHpgwuQ2cBXTCTe32",
  "key31": "5ypiXfw2JwUH3T9Y8ubTGRdk8Mo3gxuCTGNNRhPJQ3tGt877QKD9QQZGb96oQfWcCbxkSV3C1QbZnUEguC5kQTRR",
  "key32": "2zPwQpZUnMJ4pQjXiVeAxiXYbSdP2dH9HVrgQ2rspu9axGgGd1HNFLp14bYCSefgwUx9nY8rZ3ZqakjP4Bzkk2zb"
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
