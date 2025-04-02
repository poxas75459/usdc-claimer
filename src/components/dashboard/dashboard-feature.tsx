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
    "dxn9P7h7PXb8219RfS5xUyFMBpnPQm2SVBk5jV7aPskPWk8M9fFQeTuHB78WB65ZQZ2p3uEgwN27TM4T6rgcwzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tciQdSj4EAbmfBwdunJBsyWS5yfd4T4jML9BZTS621mt8KxvnbbSraqdqwzMoF4SwX1QSzeCZi7yKLgirqa29hJ",
  "key1": "4rpVpwBkyNPttEUCtTLYgRUtWTCMzwPgFkW1fBjXf2BvPXNzzPWSmKYZ2USuaGprSyCkk1PxKLKmTN2q7GmyTYdj",
  "key2": "KpbPVXSQhSA42jY2ESKYerfW7GiUw13P7d4yt8svNshDpuBWGg6K96hVwXS3Kv4Ap7aRGECywNDssoxBYoREJpW",
  "key3": "3XkhTVzENgPPMaPAKnp6uVkncRZgjqfuEaJg5NAPYA4tuauBwQoqEgTqnSsLf2qy6ztSgUntZQh4HkhAB3xBvMt1",
  "key4": "5oRPygYsF4anyQYRCJa1veEbz6GHuhYVsn4jG9pAiuzrjz2ryJ7Y6kv735CELRbJRbUUXz11Bn9xwi3LSKZJ9xE9",
  "key5": "29DjoNdB7BoKycq5RmCaoMzpNVpZGGYJkxpWW7YXgeSWzHFZqynZosL7PBtmDZ4SMrUD8FXpRpg9oteKkfQEABq9",
  "key6": "4QMRPxAh7S7GdLxahuCPjKwcNTo2XJpw7CTV4rxBrCfvjmjghvHz2fN8bXrLmEU7eio7ah2HMEy3EkJXrtoPJ76S",
  "key7": "623AeFnvt8ytRxWjBcRHsFeUAsKpRvqrMPMDksrxx6ad3gSSueUvWonj2QDnomhDpnwJfZSa85ST4n9hyKaJEfuc",
  "key8": "5ddREF2RyWs7EU1syumRdLeLwt4sAYyrhBvMbMKU16L4AN8FB2JoRRHZuNjvqzLvPeEzwQMKF2nkysCEaUJ6sPji",
  "key9": "5wU59F7fHffAwbywpgKbmfd2wSSR4tbGiTQWRvGPFfx6zz62QLNqviUUxsaUqLfjdfybeadPGW35mxVegpGSLKbi",
  "key10": "5SAwGbu4G4HXmhohURvU38UKw4Ku8xF4a5N8KbxUVKB1d9rS2weeZ5SNhU4yYDjr5BrNEb13sh3AisxjgToA1NyY",
  "key11": "3QvR7Uf99obPpnfjrypcf9WopCgMcReLdcm6E3TSRaxVcjVyv58nRNT22hg5gaoC6Gf4Htz1dZRNXbdfnCe9ZCNu",
  "key12": "ibB2L5NinGibZ7DgLdr52Am1MhKEHFkHox3tboKBgbBdFvqAMomKjNVr6UK18kvsrt19ZXWzx5D6xfccLMXfxLL",
  "key13": "Qa3NujQVjix3a3GP6kqY6vNmaq1qomz6CXLN2A8a8p9PXtry3UNXcNJzq17RSkd6CEvkgygtDuc4qv2CxmEBY2N",
  "key14": "395rirY8w126ojMafQ8Z79SLDVorxdHNrAEWQYVctt28MD8bQvZPda7szZgHhedWX1BDezQM7rs8PDHsCYvtrTbn",
  "key15": "3Hj1GZdM1umMab2zas2ZLmQ9Lebycx1nmaop4J7EnydM93faP8nBnmtV2XQAFxVaAgvHEFCESnTYXXuRjy3ncuMF",
  "key16": "5X1sXSVgXGBokXT6pbUZ8n7Xicxvk3eW7jQxXthZTxNYMjCtywcpVzLzXFgiaZjrSF5hg4eo4V2wSVBjYStm22rp",
  "key17": "27wQE565rsfJqsFVm1vzVuZ6hJcNrJNn7Vz4bsKe2o6BQz76CTv5RoyByYsZrNfcGmSD9M9pcSwgE5SQuouiLzJw",
  "key18": "4BhWm1vkAZUzcon1M15Ki474Rmu2GjrC8PFaMrCxjG8PGr4XvaFX6z75pU55AUCwcpiGXJxr5itF1ptYgsXuBBbb",
  "key19": "4AoBkKC5eQh8sAxrbbpBbTzLrHcxnFRNYXHZLJ8co1vnLdRyQnWxoXjWbWL7aHMBGPanB5KviKM426TuQkpzYaRd",
  "key20": "3XwueVNz97ZK4eKmC4DwJ5mBfLyhS1qGP6PRW1UeGW5KGM9QeqBNkq2nmRLkLHTF6AaAvUoJpztPv2aSb6Ut24ji",
  "key21": "3HHfMBaRSh94wrWszCQcNShESiUfg5bSXxgVSoBLB4n527Y5EqLTzTSN5zs2dxoAdmGLvyALC8KLQGyPMZ1PnYdZ",
  "key22": "JLf7WfvAMgU3sFiUnGhx1JFnVdRTtSdQNJ1UK6KhDgAb21zXZ1Y9JQQqYN895NzVc1sSeQn5r1a8ZsbxdGyC5Yt",
  "key23": "4JVpAiXWUxHAcGDx6UrMPNBy8pHJJNrnqK67icGGWTkFPfUgNMooWBwLdYKTWY13x4q1oZxBG2sPcJxKLzpfRmvQ",
  "key24": "4YcLBa1rasC2u8jN8hzwMCXoHRjHt3rSbvWZ9kw5Gdt9icafvTzPuAWqXjwkXrYsGsiZcmgxkRBKZ9ZvNSKEigGC",
  "key25": "5MvRoELhrmhpwHKmPdyQvaBJeWfwT7RyVFyxBNe38VZG2E6dmzk984gDEfq6mfQGpLNbSjg9UEkydnUB7vVKUYbd",
  "key26": "4pHoreAKhjpmeEmy7DFNLDd7ZP8iNcfLEwoyqzkQ9WcPfMNuaHkBzgUcfH35fZ18BFn2NBhQZuQeDZpfoY4hRpv5",
  "key27": "jKhXm2yFdMB5BXhYhTRVgvSosWsL9hzHQn9miNF2FF6dDC4eSPT6LwjH1uUMGAiqmbNJpuCFt31GxJZVQE2HXSn",
  "key28": "5xMBvzwmrLKp85b5CHy7jS2TBgPTy16p4nmbu9DvmLquDPk9NeqwbEhUb7kPYUZhVDVhTUSf8jZj8wCDBxGihay6",
  "key29": "2vdEi1pjgTk6foKVc9EWWPVW6jKzrnHLtYUiWkCKduKpmF7g36G5KSWhefX6AZ386AqkfSuDCPBKAqb9LFyeqe2t",
  "key30": "66FuFM1A1phP8uERqF3T23qq6kLTnNN6hF6MWkoS7EXYhNguq52XiJ5q5KPJMgKTj1Y3nw4RYd1owZUxyZCDoUEx",
  "key31": "2B2WW5f44UquTPUcHkoniNaMwd6wQ2AURhQhPw4u1LE3ZYb1yvKyFyQHBKurDBL7tQApZfJZJ7AQHSZe1WcfUxe4",
  "key32": "49YTHt4WJ65oNH7DA6LzwXAfjzVeojx7Pe7m1z6aZdcndfjDY5heWRog4yKJgoTQmb7V6eDZVnYdheb75wMPzQEZ",
  "key33": "NwdhRDYx2UPDcs5FivHP5wW5JXunsosGmwjzusuBPHhw6PMDFjL5eKTN3YkzYmbR1ygFDBcHGXsiQosLEpDv3Lx",
  "key34": "349x8B19E6QcxuVEygG3Y9WpWXuxs8qaMNUzNyeBssw2h29jBDXy14xpKzMDHzzohQi1Ao15etBs92pFpRxysEsb",
  "key35": "4repvkN9jCHfmtdThg6zcBCsN7joJouBTihRyHcQwFkJfEbTa7uRCNMLDBy8eVRLiLKPVfnM6qXrthBjpdbiCoEz",
  "key36": "2NtnG8j1Mr7ZGMBsuo4BmruXyd9dpoxdfrNq5SGPwRTpy3U71Z6GcyKMqKk55GV5zaXjrNrcpvEZLhxyQfQkW4Ls",
  "key37": "4XShQap3wr5jtWWSiFuziiebaohF9q9XJhgGUV1ZJDGdW7Be7Wy8YQLvq4nKD7aLY5LnujcPMCDSS65LqfVZrD24",
  "key38": "37AxnKikYFLjFQEe3byZbdvUDAAa2gEE3GKW8gaHBVzGRMmbu8iP5CoeEzYq8ZWHXLHDDnBRgxvMRVGcdSapq3vp"
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
