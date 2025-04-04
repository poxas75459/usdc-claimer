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
    "3hnkU64TnrYHCnWHUexabnkvyLAKZ2HXQtzXCEAzKpuvdwFukqsLjBfidDmMeBXuJvQz73CPy68A6R3g6wAkGx6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCWCNKeBVix7XUnS8opwgZRznD4B2JegHbk71v3SfKRkNyne49Dewp4Tb1ndqVMUxZtV8723x2zNNSoESnnn1k5",
  "key1": "4soekKrX3a36X2NySgXU3599DKMXYA8ETEKMywtU2AY96HtVBo7vhX6LhM96NFkHVrdpKDEViumCFBc6VP1NLFX5",
  "key2": "2RLf6Ln6RPAH5d6qpvYj8KYwTNCYxTANEZX66sHDrtmgsWrH6heUZAZvSEcm4zSoaj89q9JcNH23j8Yv6DXPdYfM",
  "key3": "PnPeoMThDo8BgLYoVLc5TjK6YqjuZTNragn198bQGS1pAPk258wuAnsCCfBExVqrPyUmhYMawTZN5wiwPAZbNRf",
  "key4": "5y4MEz1YnSrMznZeLdrcheTmNLGCs1F12Q4KtJwx6V9RnuEq2XSj68NZgwCZeYB78DTEcmfTiUGn6HBypHo5pEV",
  "key5": "jcJbz2v4gyfAatquDSMwDBbDpP6qjttSAooaHv8aUnrAn6o7QMYzSH1kYkkH6ThMA4VeTZYnSka1YNqoDvUQvdx",
  "key6": "7soivQoBAAZ32RhGMbdvtrxo7VGm8EojUJCW8AzPDqzQccqCw2LUmENPbAeNzTaGGkes1PPzuCp7KqdjXdG5BXk",
  "key7": "4tiiSKTTEofehtRys949VmdzKMXDncoS2PKwGivgL8E6buWtQ4E2ULgUjWbYjCGBUfGpwGrM9qJCdQQvCTfesjYr",
  "key8": "ZWhB51uMJgF3yya7D5KRKNUrKKz9sQAAxegM9oz2hv2hus6JRbuFX4iS5stKXc2hVQNnQxPc7KbWTJaS2sJaPXz",
  "key9": "FEvZngfHZPrH2CtaHU4vmrAS1jV6pQb8QiW78fZkZCfuaUJJHCswqkybgYseFXF4XoVgQ4mtHCCvZktRzeUW5bg",
  "key10": "MgfUC2HioYaAJ33hrtPqcaaA3syevX7fvD7DaMoevM7ZuyRdNZmcU3rKemdcmV1xUhrwhqFpNbsscgnVNYC27sN",
  "key11": "3pn62t1pFV9cDfZAEvJMLqaywNjthUb7gWmWzQFHBMvCT6aStAvtHqqeakvmJELmS2Tn8Xqcf78dLBuGjakcrcYb",
  "key12": "3YZdrRsmBqVbVVs3twSAzMG2DS8iPmYzsANXpEAL27Awb4EQsN7geRsFfnPySHH5oGcj7myF3c74YtbRGu5WH52V",
  "key13": "3Rem4BqDRBsfkAJg2wpMLQQeVyuudwpg1DkHL8S7GCCgUwCgjC2mD92sk5gDiYgpkcEXX8WV42CX65MdXJ6Y6tuS",
  "key14": "5oBHdeSeY6UbnXCvJe5YhpGkngFdoZbQMwE6uVyzSkD2v2uo1M1rSuALXZTsAyzRqHBr6Jr8ULTXRv2NxZcoVNiS",
  "key15": "46X61at8kDxKjhNq6X8EARQd8C79qM2AosCRphuEuPriKKkQtPrLNGFYGTSuTDWcYm8yYLKvbEucJUCTF1RNT3Ab",
  "key16": "52fEtzWP55EYyUpE7v6hXGFdu5yk3yPHLLFjE6BXVagL2Fp91hjR1QmiU1UWApwM7J4LkB5M3R7xUVM3Y9BrUyC3",
  "key17": "3vgnoJWdGcwVtAC9eoD1oMXJAHSzzsm5hXrAWb5yQhSpysRh8abyGNAn3aN4FYTeTqLcRFGH4hhKSvUYnjCnzkWV",
  "key18": "dN6cPCE1JdWjXejhKGr2ND4ChNZVnVwFirxTx2QLDDmiTuzCAfuc6DT1FCbwUMFb8hoMAAhVXxn3nGEadTFar6v",
  "key19": "5axjSYY27W7Cw4AXXi3Jr6UUHWidEUodZEgML2v5uFyC8h1u4bbvynYWGKVTZnCP7YMUJTvNr2P1a24A1jwSCPSQ",
  "key20": "4BoKqKKCvj9J4CQETsJzM5WqNUTpsUYW3h7JprqPBiT1KCFcZatiYJJP5PtEbMra2n15gnK6roFyNM2Frhdsbq7v",
  "key21": "2fPtRZqQguETjiqMTirit7zg7kFHrWvEsdpPKgCbbYtpbYoyiZMEqajc7CYdS8ja5p3nrcrfoA6w2W6Hs3PJfbDQ",
  "key22": "22DNmBcPKsvfxnv4amyDSvcSSqMnsamLHZd8V1Ttc6Te68Ue9fH4Wye93rdbHhUbnPeXwhkWXkWFXjzDuvox5JHK",
  "key23": "67WraaeBgWkd5s8SXxZaeELcuTgpDyFbs3Pzb69mEBKaB9yxSqQN2dEVdywCvcBGYMuPfzumYMhfRktUwvPSdUyA",
  "key24": "3zCU7qSNUZF8Kgc3UKLghkJMHry7nra2tEeCWL2dz5nqGARLCm93qsjbFMS6JmRrBB3HfTyYyboy2skmv9amk5Pz",
  "key25": "3r73zfvpdamM8wxJnsKB2quAamQ6BAxVqpBBeopaVjgE5uypzpUDwtHoh1GE4wMSPLr6Wi2oNQUonqLwFozygGQR",
  "key26": "kJUpWDDG1v7DhXjWKCtYrWMM42JZCYYDW2fYLHdyvz5txdwBLQoBmqNEMFbdoGZ8ghe2sh8EEauQaZ2cvCs7vWn",
  "key27": "52LeKYPTvpRccNuYqwqGLWNMReYxGgtRbLRMGLBm7Gq71bGWk7QsvKvYUzS9Qyh8qDLohcrZ8PRmr6P8pf75d8SU",
  "key28": "5yniz3qWaHjmZpkyPqWuuvbAkRiJy4R6Q7wSc38nwHVPSn9kNHYYiGXPCvMzJoPzNY6mFauKksXyw6KEoKMue9TQ",
  "key29": "8CzUCXiKifD5i1PsixhTQJ7Kh6ZdRkWDuqVynyaXk5FT5eSGYHorPi9sZxDnvS7qeurt6oZjGyUN2EeGKZvf48G",
  "key30": "3n2cGbeg5FzpabCCLf2gL2F1EF3GQw1y2zK729KPz57JRmm4XxB75cQbEhgHAZstyfAu6oB2jL3wd9iBjMtusn3F",
  "key31": "QyBYWNPCJp8QgvqXhfRyBnDKZ4w79FQfnySh9xtrDZV4nHXFFkyPCooFXjxBbRYHLSGweUzJseGGTiRnYcdviy1",
  "key32": "5zFPawZ1W26cUGvG8z5R5ma2JEzH5eC1iFdcqa4PaYzyzpXAkjp5XsSUQagzBnKm5ULGBfgHvmkZDHBgcwneW8pe",
  "key33": "2pD6ECQRCyLhd7i2tEWHEpfSoR7Pu1E4BbsTWJAgciDc7THuyVWwpmGHqpxqeXkFbT7hmPq7feAKraTAFCzjkzuo",
  "key34": "Ui58fA7NSVwvxjNATWaf2YQbbPAe6G61a1SeZbJUD1ay3RRMwqhYVSUFXgoFVPHiqm2LTSAm4DP8nCArTVa61me",
  "key35": "3JiK4FC2M8AoxQXjviUM7DipkxUrjvKEZ1CKNGtb6SyL4SUBvPfyQUQEUmAb7bhBLuKjuS6Su9bn9H34Df9bvLYi",
  "key36": "q3g8kGLa5rZgwjvH8sMReVVcWobN3ERGKnUxFwCQV3WnLEhnCNmmZzz4uc1hPNCM3hpU84Uspcimgo7kqLRwXoS",
  "key37": "2XQSnZc1Bj6jW7MasCs2zzvasLMqopfvFEymQTBHKEKiQ82rVWT6RV8himXuNTHNh8RdCeKDnCNADCk5ARoPYz4K",
  "key38": "2k88i6SnAGBxXVmK2aewYdpYpsNGoXEmia58nevuvCTrJxgXnQnfBWz5rdS93mWHjesY3e9qoYJc4TsTv2rHGiXA",
  "key39": "2puVvnBBuaWMCwGZpAjUbTi6VkrkXGhSgYfZVPWBi35GPzP1Gcyf4RtscqYw1H3vosh35jbZQtG7Tgd6EL8kzoAf",
  "key40": "2wGkdbY9cMiooBTxTY4yYhdhoKjTFDN8JJLHHJbYzgHrmAYHZ7VGeZMJDLmqbvPrJbEfC47r3GCs8syeTVZMzMAw",
  "key41": "5F64jLte3vHHgB8umhAfsj8DXsLCEEhD7DPfusoM57QArTDGinwyrpevqTtCqcSefbfrBdAkK3nYwPksbYEHg7Rk",
  "key42": "63SYFNsic8CCfYCaJqH295RTvmerz6yTcpFT3LUSNv1bGHuhrBwxijmm1XFrm6L2GRmeHEaNcqJ2rf8RJ4sgc6oe",
  "key43": "FG8a2bGc4GWhVwVwYPD41zct7cgkUfdvfNKp7EE7C1SnZ96pCxZZJEBvV9XnkoVs6hj6wgNSc686b76fmt1QQWw",
  "key44": "MDyfAr42ZnA1Hx84QxoPWtBxTmZBTfWEBLg5rAZVXN8pNVm5rjToqaK2PHjBUHnZq3e3Chd1o8ocAkKYZXQfLyC",
  "key45": "62gW85ngSmF1caQ2byY5JcuvEUxXPGFvn4n6PYsmJdbXkjScrX6ZNkXdRQm9KF7qEviQ5djY14kHDssiRGsS8syb",
  "key46": "375bbyKRsnj2mvQbPLZ7EnZsKFhSXrPetMfw7Ks6XRyg5MMYfSFCCw436GwKFj1G8RZnqSTb4b3cVT7AAWUcvx9W",
  "key47": "4d5CMMaX7JMCSfjtDi5qqfReY4ciMjub8u8Q2fVgcUHzSwHYpuF4ny7WZ3Dr6FGpgUFH1e7KtR68roYdZeLfF6j",
  "key48": "4x4GdeAWKfyWQN3pBP6gyRKY8mQikvwEyiFw1EqGb4LheTtnmZESwAizZD9st1Pv6g1v3LNhKjQfPzN3sk2VuTgZ"
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
