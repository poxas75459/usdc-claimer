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
    "3cvSnxHQhoZFz6jPWCgx6Fojkvw5ASB97Zyr9Ygw9u8rxrJrSvGdF47jGKgv21gHqtMbYCnXJjUaEdMH8Yy3BaYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QDpvs9a3fSdd1pxtebd1rguZuhRjFrXCWKFRRdUukKkqgYoCvcgkVx12CP8hFziLVCH3jR42HNAWk1npCCuVmU",
  "key1": "4CvEQt7jCMZbksGUD6vByBv9ZpPJjU4svmNi5bLgTW8GtqyJGJubvo3etiqxU4aG5iGqRJ6vq9oEgMMRVgPoXtqW",
  "key2": "2FkWnbLH5rmeBLxTGaLrQCo2a9WZgBjU7cWkAxitV6FVKqJBGjFBpZUa18DNypLA6uMycQYxN4LtEdyXB8VD7n4N",
  "key3": "4qxHnHN7CquXZgBi7aLxeU8NHyQPJrSJsi7FKabusWkJRsitPx8rvWRyrBLn8G99M83Y9svb6A8HnAVUnFtpwK4",
  "key4": "3RBCUSjptZLqnDNk2uHuEfooeQw21nEmsC6KCNoTbmpdH92g9EmKZhJNpnS2FhRKUNn9PvTVqcaUxv9ft1DTaesw",
  "key5": "4gHY99TYZytZgkyqunQVXqoesR5W42d6QdjvdfAVKXHB7hd28MGUvZhukhwoo3eaQAzXpExLfmznBdhGy8EeaEbg",
  "key6": "juv4JBSpo19LG55otAXAXTuLA4EYPZx55B4SacGzDkWLk8kPTGWPN6QnXHceTZVepk2MbSn626imcG754rSuo5j",
  "key7": "2z2ycKskwnGgNRAbH9M8UVKqhYYLnVpcDVNUbEMwMwcj8Rwf1VvLzbWnVTr7MzETb24DBky7qEnkjdZmwcuEcxM8",
  "key8": "2t6Gn5jw8p7ypyHmpTYMHfc9s45xxVFDcqSCPmBp1sPqDSDbp7SfyAFyqVUDgmBEtjxzjuCSN1DLDUAYSw6br7xW",
  "key9": "5qkuBh9SZVKhc3earZiFSYwS3XopmktdrS6xmiDXNvvcw4XqQgGRs69uSMUnF4o562YmaLm6bDcTBtR9EJC96zHy",
  "key10": "2xAgao9PWovfaBhWrhveJwQjndqKtybTZqfjSN29m5UYPWyTaEgBXb9jz8F1VBRujF7mZL3m2W7woDfie4yzaEsq",
  "key11": "46GX9WWNXS3DwuqvYAjfScFuDF88RZwWQ6BFDLbiDB9NYcxN5VJZmkFd5W91Z4goyHUsiGvtrV4JQtJexyxpmBpG",
  "key12": "cvH4U3q9KDygMf6dXyaKFrEeQLj6F2nwxsbJ6oFioyKLiSEEgdY1UamYrAtVpE4r2mVMXyAbGPtKqgRube8Dt8o",
  "key13": "3zqkz9EnKx9qce8tMeMaxNwYou3MUJA7sGucM2H7xaaoftn3E3RkaKeTbQEYPuKdBxn5wyQ4KSqhgceJL6H4djJK",
  "key14": "5TP1yNusamsnjH6QAh8m8Zex63uoy2dafM7T7W2SCaGDNcaStrSRVaphnM8aNwzESRJHeH12fvm4Lvkh47ipzwef",
  "key15": "5j7gBLZiAX91k8NuM1uh3wux98kpq412rN7w8fe4y6tAd3zbPCEmddZjnVBwQk23KsaPK3MPGky3xUFVjCxe4CZV",
  "key16": "3EYpwD3t7kBcqKMumWBqsh83rFzZWqFRSda6d4mJJ458FCmig7VXag1XTh3WeCHY7zRex88qYcGYdZf4U43yw3Ru",
  "key17": "3RSuK2NZxUETi8shrvKFAArdUwh6U4qQHRhoegX1as7SJLHVvexbytr8NwKTRbZQg2T4XeT3sofqb9WnT91saN3Q",
  "key18": "511JxJk7iApDszLeFMSKtGLtia4bUscdoYXf1NLKNEBvyScL56gFpxkmbvNiw9w9mBQauLZ5dsP8RhsKMuBy3ezt",
  "key19": "52rB3iHaGVQMUsVdMscxMeKLwb1Z3ScCSE7zcX7EW9nwQ4G31awJYP2CoBLpwdgKbBGC2B41HSp1hWakx8LZDQG6",
  "key20": "4CnKyF8pfCUWcSpiG7s95WdrxiQdWM1f4gR4kkkGrdM7HURzgw9Lo4L592Hz97d49mnUqxw3iWCmjZZLeKuozarV",
  "key21": "2EYdc6PZn2QuvpZYi177NMqpg3RrxehKMd5N45AwUd6dPeVo2acGAEBKq2tTGBaQ1DLwN7eKYd5vcGZ3cSQwjUvP",
  "key22": "3W5cG5LV4PkmTh2PvvJcUpxE5me7cVrmMuCMHZU3gJaVz1fud6NKC8JBFA3bH9zhrX5pff6cw9Tp79RWQEJCNLkt",
  "key23": "fMocXCxfCNiQDAdvJcE891nKKR1SkHexd2NnxfpPk12NCJz6vhdTbWKnAsSJTSXgcWJyZpodExTXnJuJHhoywa3",
  "key24": "4wSoHdnGYFj4fkNjEFtrZ9scm9UDTZVi9GxvNETrTxFwTfbVDpdcdKk86gGXpTVJNt4TWLj7wtqSrBTPmQaDCpbb",
  "key25": "QVduExwQfVEhwBHceDRyD5we1y4u4bim44fpNT8wGUi47kC4vzyrAJJu5oKPwLXDXco74er3Sffw2pdjPvfGr3H",
  "key26": "2GVz9hd3Z7SMWoBWjg2HCuiNbRPtLJKw5FzbtziiVDqH668A3GBpWgBqhGnh1bkWYqqkTbPT6emAhG48sjYRaAXU"
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
