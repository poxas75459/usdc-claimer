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
    "3U9yqD4cuiGHLT5V8THUtUrcMDvpSCvqrG82wYEsNc9Kh3qxxk5RL6VfGEwp2yT9DRM8DSFoom424ykGH6kRywug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65roSTQDVnjGSbsK9xdjKaVNcBKzmiqzgTj8KhgseQhfNwfVZTBMFuipeZpmDWWLNWMdsKwBNpq9JoMePRt7eMEk",
  "key1": "2aFmvqn5Uz8e26dR4kTiEYDkefPbjBS22At3cm5zPegoNo81YQWqW77Hpez5t2FPJNaxtiSF2U97LJLCMfkkkhS9",
  "key2": "3bKDKV69ufAATipq3aygwZ2A238mcijf4ejdPk97FNpjJvwmzJg4pQGQNu6XT64sSw2S454FZGAwdjcN3SJjJiTt",
  "key3": "4kVLuKt4JwXrjwiSejmkStjKVibByKxVzrLcLB9668XS3zEYcRWZgfEAHsShzVzU42gxoBPjD9cfEmonbvRZeZpG",
  "key4": "2d21XUDhKsktLKAUerRA21vozcmLV9wueHNTf5mFwLp9SGQkULpsz7ZBxacsW44VNA1QTj4JLJjGY3PjTzzUHmVT",
  "key5": "5GGQMwzSjG5utVnpxwYeYMpexYSw9gqze7ZBV3kCktzgFbSQij6ntH5sNumViNzGT2FhtLUwfFJMVEbfeK1xZsQC",
  "key6": "FgFbakf6ByzCESnzEh3g7cnkLkCgUiYTHgD2dZL7TSS6Jnj7zAXMnoABqGPyBsQrN96pXZuTG6HidTmwaw92QGB",
  "key7": "2KL5rxb2robCxMAibud2V9xeei8qm1WZLUnsgL8FJYUwb4iHdVr2tBRg2EfPeExMvusyv8Z5QpKbFP6uYjgNue5H",
  "key8": "2NcnNuDw7NNtcdAueJXjQcN2hwTYPbAetmypkSFef1sChC7F4t6nXt3XekjDiZmbXnbTKVqFidUHn9v3qredxoXZ",
  "key9": "4jQnSFwtnRcubni2aRJAFHfmoTpJzfAFEmUXPf2vfnxnMKm5U6ofHPxADNKayHQDweBHCwUGfyaWWFBJSmFQEUxV",
  "key10": "5oan8pdxx82ec261K6a2WraLS7ckPNsvb7aMEAtHAtBRcC2iV9EqUVU7rzKY7Y7KzptHw2ZwSc4Ue7sCKdokPxWK",
  "key11": "3QsybbtY8Y96w7N6qBanzaLonxk63uo6majYEBpQWTdwq14sNaB7VhkPYfzszoZ9jcXMUKoAX6cooiqNyeywDjJS",
  "key12": "5hP23wzj6qh4XQad4o7PYVAkF4mhiS5Jxp4thzt3QSZTZcqsud1jAtKXhc6888fS6HcSAj8cpRREUSqNKSwNaQ6W",
  "key13": "5XUA1KDLQmND8iD5h6iWtHXStxSXajAZ7D8R9U19k8vhsCeTVYhVFtHCfWw7iWQnskhfyUrH3gkYG8hN3kfze3mi",
  "key14": "ubCQyaHFd6N8gX21EYgQHo5FJohHcmnnnGfX3Xeetz5ozQw8ikCb65xJPZF4wZLRjLfZY2HKJ6qnGCLYnzeqGs3",
  "key15": "5Xq8gaaMizKwMU5yJ1uWJux9ZzE2krHYuJgdR3xMMbZ2bQspYoQnJU1eFraeTXB1o6GiZPmKnPrNzPKmfa2XyAEh",
  "key16": "2Kf2MnyDwjJgECzUUu4MGbf1rA1sMVj2rrYwWc11xucN2XM1ggTsBf8WPt6MWsJnx398mvazknkmVtv45uayR5R1",
  "key17": "3xbkLQUrVWFVBGqKs1rw1NnAAAs6uvdLXe35YL6asrsEYjpMxSnYYwy5srRpUR6djrQfaH8dCisNzKYkphEaFsBf",
  "key18": "4K1UfugM4CmXr6FDdGG1eg6pfUGmE22LPp8xWm5epFcYbNCn4d1MefQxmLQmi2TBSsEbDeyjh7MayxFZom1irrGL",
  "key19": "5SgejrMdrvPZjGnd54a1F9yGsWfjE9gkB8HdqVU3B2No7AdwtsJsURPCqCvULo1Ed1uvekWeDNDazRL3jfzoxFAe",
  "key20": "5Y7e99nWkvGjmrTCosDnSbj9h7MJdzU2xUaC8iXr23SPphBBq2rSHLWbAYvH8Rc4jeytdKkZ7bKyenKme3LpkYUE",
  "key21": "2VWq6SrM71VoWp61bsixsHcovN3ra15QLZZhegizjMhrBd5dd3oPbHULPLCWW6cgZghSnswLyZH1mxuwa8JuNMn2",
  "key22": "3kGo6fX4EmAebXRUNEjffRr3n4Uwm7iyoaqssFe336YfL6kmnmUzKUtS4yBVJ2L8Q5praEPB5H9CU27pzjZQyrpa",
  "key23": "2p91Wf4MrWLmS5Y9QtAeNZgF2zJeuHqYdd4hcLDk6nVrReJSQUTivxCp2YNRgyygkrkRCv54u4GWAjfcSZM3mpHR",
  "key24": "rvAzbHtoLasy1FFrDGmkA9TtoxDufXz94PymAxchzxNJhsUUonmvmiySBDTMA3MBXVSk2TB6o8Knz15ZHguYqnU",
  "key25": "3bd6GGH75NkF4DR7bTxTvB8UegFJthuHJvhwafrTjt3KZ9Hvz3sY19wrXuKaJApS5D6h1PQbnrs5ruB3F2QEhD9b",
  "key26": "35TQx1ByW95Ag1us5L3tqwFqsVWywF38gAJUeeS7GtH5RFvVXERvySbehzRcfGEoiQRwX4u8zZ6YbNwfUVCt1byL",
  "key27": "2Ev2ZWSdgU371ibgqZTLyE1DH29vykvSJJkutqLe3peXjJP9huUKyiUeoQDo8Uc1AszyiNQN5WxvvQMjmGwfAjKU",
  "key28": "fsevxpXWqYT4hQYNCQGmVFTxJqr497DgiGsBMZfTqiw4bhc3MG84KDmNWDGjt5ju3SvKKAjn2ZtB7LHCdCeGY49",
  "key29": "4yiLsA5NB4pfEYNWWEjG3H3EKc6W57r76vBmwaLJiYYYCKoEQvSpFwZAAKB7o2Wfrep47ZhBfDzmJ56GHcWRp1s1",
  "key30": "23QmvywCLK3gw7Q1Xr9oAn78MM43ncZuxq34uqdbyc64VKEZqTCgVWkFPj6M9taG7zrgzmSkGD2MXwQSiLHGs6Lw",
  "key31": "2u5S6RB4NuugrgbTxRr6yaxU9KMRYAgH1pXrw85ArFPbY4oYsZTWPV5zDuYHcPXpsXaRha92648aBtWWdrheRN9o",
  "key32": "4U2gb46MyeeDCX6wLBKL2nd1BfUvGxtaBW77FoV7fQMQsFF8DFrMZP6Z3PF8kd1z5o1RJ7oR8T7RYKLJPXNePUeZ",
  "key33": "2PvnsEjE75Pxsxz7iHzcrxL6fHbnp8oV14AM374tVpYrMbpQCDyxHS6KVwDXybam5QWYqCa6NQA91qBcBwi3eoF8",
  "key34": "3Xi84FqHgpP76jGKqWVS1Kv28WK9qpi4DFksswdEzrpGjfBcc6BVNR51ThkfM3Q2d5wU9h9K3JPh9vizRjQH4q5D",
  "key35": "3DKUbxJaLebreAhcuvfZgiUhvdZKMY7Avg2Eypy1mF8R5Wpho6DixybwRg7wyrpDvMJi47fEs3Mk2LR7JJhcYqDU"
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
