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
    "58pPVcxabhenfJCUJYeQacCiN6RffACFbxBNkkvHJojxbRPfsdgvPX5HpZsCjXgWahtvxsFxuqBX2XSi6NScE29e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xY44Q7puHwHRwdXwSVtjiAcCYstJTbrV7SiWa1NU8AtJEhbYpyemm5Ncf324mPWkvaHAYsQL49mwiMAZq9wLHSd",
  "key1": "5QgJDjPoLVYnxdp5eyzfd2FoN4PA3ciSY5QREPvERT8Y7En8QTC9Gz728se2pfiATThWHFaezrBzJNDYJgit5Uhe",
  "key2": "uXDbnnNhNSj5S7FaovEwpHY4fB95VnWUHcP789QknGNFKB7GAyEMABBsFDHA5RqbucKQi22tddSX3b9fHCtnN59",
  "key3": "3eqaikM7a4UncQzEBDmbENQXqHvqhfQ1roM92YZADp2KzGQgQEKpmXy9eEAY89JrbDM6qJVGCL3SE6rui4K1s9o",
  "key4": "4KXMu3D2r56Pr9V9v5u2RFXYZEVEnKhGmb68Jxxxo34HJXTkgQ1DqQwqmJdeRiRUvwcpPMvCTgSfC6DnZUFPNFNy",
  "key5": "45LkX3aka7tmP98rC1QmhzfDGK4mZr1HuAHAb5bN1y8gNuQ3Nbnken9sJcq3YPWJo8unGVxJmhTMPp7E2J3cTK5C",
  "key6": "5tp1yXebs72bRXY79ATiQYZS9ZWidcphT2jVnVp6yAiy2kQ98aEKm8TRAvA2mNQJguBvAmbUXFMbZWrW3725JR5x",
  "key7": "4Lr5yBeoh6Vj2wmZjiBxFEQZJLz35znALPxRYugLxWQFryDx8fjgwj1APkqXeUMJXgB3hCqP4f1Qg6ZkuyGsmi9P",
  "key8": "5GhiynLUcuU48zgss2kidnDqHDq2zzNZ9LctFrke9yyrwVA7YhZ5fg25YWQySKmK9D755zevA6iNswejrxnugHMu",
  "key9": "3v7bSKrsCn6gCKibgmPHQPCs8TY11XrQ17NfaR1c7eu1iY6A5X18qJaKwMpgfULh95B8AAzKDphNF8Z7kquYGfXE",
  "key10": "MRavKk2aZqMS4ZdtAe3uF43ewvZHtBVeYGn3r7PVSh1m5MvARXeSSawtT66VA7XwnWzU2LoZUu6vhWSTQNT7mRs",
  "key11": "4ciTsMqAzzyxev3tmd7BhBo7EyS4dpZLKgjd2AMSP4k6wxkZdjV9e3pMUbSJpcpmhkJnoSNETEav1RWms1p4rtsM",
  "key12": "6dMXFsxW6YtxCmT82NM4AWTczrgzek7ymQybrkkWgKpDg1gXLHuha4Y5YdvtgiYRtCzJELiZypRvv4RmTeBkJfS",
  "key13": "2LzfcmL53MsbKs5HBnpSb4sTvfZgEyH5BmsN8FeuyvZ5tky15N38L1VtEMFbWxhEu4sRvsH7HgG6D8ntnBrV3QYz",
  "key14": "2Mrzv1B9o17d4swPG7VZ5kSb1c5qPhVtWjVYv7vz9ytLhU8WbGGCTUHXTmJELnWqDtYDaYuwbPzxbdourukWgREN",
  "key15": "4zT2ssc44BhY7BNXJA2tkGQGupX6pAKkGrVSpgCbKNN2fgS46ZUAj7XoCtSdXQZQbFuDYGUWg7cfzKe6qxfnznXz",
  "key16": "mc7z6fx7PMwkWfW8aMxV191WAfHrZVb5x97pRCARrvf5eKwNAgD6QMNhbYefXPctqfEw72JCNH9zDqKWFH5N1xN",
  "key17": "4VoLj4VU87QiRYFTqefYMsr1CSSXT4PKQt8XXmrdoqFWUUHtHU3zSqtuTxTKM9k4hGut1SUAzuWeXtCweJqe56rd",
  "key18": "VwvduTZ6VL253RnNKp8csbtVK8hnweSiVbbc7AN7z4yLRDdYM5t2PVo2C4N84fvoBBKqh5BWSMnFNzSeGNsyaQB",
  "key19": "2TTJZX1k4FaTJW8ERvg4XpssVofFA32Jow1UPa3TCpqYzdyPXk4osEs3BA3xaxxqBwagUFoHJpUXuw73TYr3EFF6",
  "key20": "vQ1mxFTkRYQoVaHMPuebT8BKdhdiHWHJRszcABgU44tDbXrH5QEDopGvZXqsTq6AxGJi634FcoTseVaSxnP6zEA",
  "key21": "4PHxhvbpEBtXVuoRUmdyxb7b3tiQxuCzFjBaGRCtAu52h7nqYSgxfUg8ntB3oZKZ9YJQv2TXSmbibDvHim8jyUHd",
  "key22": "5Ex8LcTzGBJE4UbSBpMY3vum7CSTBb4M78ofNE734XEW9QmttEbhUTnTuP83it58jWGHQnCJFp3yhCZbPMtL3M8v",
  "key23": "7J115wg2qqDCy53fhegU3BNaQ5ntQLPGwW4Y1Pm7YbSCaTf1cKRNJxSsbRhUnLHfVwKmHgf6AVRJ8Yh4uijiCG3",
  "key24": "4xPekY35qWrnRH4hKvh3Nnc8tZz3pWzM5XbMr9WpXJaH8iGKGArdheC3mMZ62oCfaca4cChNaA8aR2w2oadUYjzX",
  "key25": "kzAZa8Bk3rmEA63A163xMXDmMsFbyG7H84mMf1KKiBMHhhMqN3SVLgu4KCa2PeAnyfPsXdyUWWw259BNADF8ip5",
  "key26": "4F91WeRutqV9kQe9CEiWzffGjdUTeGPEyswy2LQbrjoRjA7XWcgByPTqcgPYnLNVr9jrZXWj4dhMKFGTgrUyDKza",
  "key27": "5ATjbgzkn2wqCKS3bDR3y5KhW7fAjQprqt6ueJTrdaLG3t1xwhyNJNL8D2sLvShXxpgA2KK2vXkTjoPRqpWaQvtS",
  "key28": "4juqcfyNQ7spSCx1wVcmjHGstQdeksZgQ1JdP2rXDpTWxtq5hMiosNNS9hc4eJzAhvQZEvTsdJ2TCUmEUrsr45p7",
  "key29": "2e5ybovnQoFH9TM3KXedzRcp9qRovR7LyjZrVUjizosELFvfKgVKVtYAHypTxQjJ6XisokXSatLq2BN2Urt7P8PS",
  "key30": "2CbT8yFGuGzTYffTq7uab3rnG9NJ7g4ZHfgVXj5dXzPbKZh41oGVKxi2nkkHaaATumQdHcGdBbEjvqR5tVUAKNne",
  "key31": "41eM5E18friKpdWv3MDGqezPrWEi5dBv16gqgJU1CAczUvRX5aVG3JtF2a7YMYZACJgVFF7cBMtbUyzqvxJci7pk",
  "key32": "8wofvQVNQnXGLYJJnvLYHp6Ks21pqjbEER9jjRDseHbGTcpAPHobW4Gq6LBZ98vt7jYuixPxcWYyX34FF2g94Rp",
  "key33": "5nGh7oa7YduMUUPsiw9G1NfDgVw9CNR8z38jWCW3EcfDBiQ87vSSa5zjRPiwpvRB139nkraUhe7hdwCvqYMCXMtD",
  "key34": "pbxKG4ayXZC1b23cebW3gJpGCFgRNEDGAJeWAoxdZcZ9EsvLD7c8AcprtDXWu81g7Bcviuu7F2BLavVQajaAjaV",
  "key35": "5KwrHBeR824FwfuaHpVuX8XvcXxdZe8v6sdWCfrvZjdzbvVMgC2dqHCqz584TeYV1skVwfEffXpKVa5HbU4WsgJm",
  "key36": "2znydmJds8wgnWfxFJ6oM2ygrbFWWWmVQ6C9g42u1xXp5KtZANZRNGzMqaSrVoV8PsnfQpgkud48cRoMSmbwwUSB",
  "key37": "3kELfNwx5z4hVhBpy1ichyG7XwcBa5omWoiLMz76vwKJhFJToUaAXsxRYAMCs5wZyuFY9WzDs6f8HNgAUuKMCM32",
  "key38": "5XyfmsmiMRf1hX6Ry9QSCeeJ1oyzThk3AG9RuNLZnzD7YVPXhDBu1qrhPjqXvCoZTx9i2jR4cQ36teMNEPpUParF",
  "key39": "38e8kVLQSLD5htqMhtKx8AY5tQGGo7Y1mSG2dcsMYSwTYvQz8yqAF9Pv2syesGrQZeiNSzL5PneRy6PW5t7UKAxP",
  "key40": "ZcLthQdfrkAbgUKfULZT58GvWfHuSLNC2Kdzkza1jnhPsUT7aZ48JS5jvu2Ruu9GJaCuUaNcApGyj95w4gXU3QR",
  "key41": "4PEyQMLsaLmjeRQdgRWmyYZDiiUktFS9F7Jfe9DWwGPJPhwMvxbBhu5JJGuEc91FonYXqfKE4iLVVn4VkqV5RkDp",
  "key42": "5fGUHaWPHmnLPtdgTjZVtgW5m5VmzszoW4cXB6e3mTxtCJY83QcqkMXFJ8imt1j5z1q4bojxvE5nL18GdCFmr9hV",
  "key43": "36HKMX5idKg5CrBEYKoHXu8kGJp3k4m5RfiRdhGX3CjCqMWmRdFyJPq32cY2mJJS6KgX5NTxV5UyogZ1e5wcWHVY",
  "key44": "4J3DgvmVGi6PoG6anSkW6h6Zqxtvr818n7hFvTCRJudeRVPEijRjcGrgiCac7DL8vwwSTdS1Ke7eE24UpcbBRysT",
  "key45": "3qGbVVMGaz9e5KK8KF1tb9cRwr3dbauiWknyeNwk8u8Q6qez8gpW7PAVeDrN5qrFZn4Y19LTKd9WjKucrEM4PJ26",
  "key46": "348b1XK8w4ebSVHMkd6SRf3sv1HNrhZPfkwLgzdhCxSN8j4f9Vy3wZF9tonfypNCCHn4bD5Y2V4yLeotLYz8xgrb",
  "key47": "3fFviz9kUxdq34RbEYBkmNMjG4jrzZ2Ui2rSJBkKf8uPHcbLoaR7fHckB3d9jx5KjN5MoLLUBEJiJk5w39PF3Mey",
  "key48": "3yGmBfoiVUKrrojTsr4v7oGWj8zeS9erA1kJuxFj782AF7Ug6LNeGcFfTxnZDg9aMAq8k6HghLpaX98cixE6zRUX",
  "key49": "5hhuUbT53Sdd5GwaCMzdghCSD3BmE3vnAXaS3bFKbrFD3Zy1eqzEC8HZmfRyVY38BpKSdz2S65iHYAXb3w1RaSez"
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
