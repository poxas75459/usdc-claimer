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
    "6AtbCFv3Y4EuVWHFadexgUUdkZWdiN7JkpxayzkroUwebB2xichrWJvB9fuzrdLfVhCEtxtg1qSp7f5soRdpVr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grganUAvAGocL7CG8uuE7saLpAw9aVWED6hJTXGzqw6h5hghuUmQ1ubTjSFUXSqniR1sKTuFkKRgJkY3Q3YVBa7",
  "key1": "2VF5s8eRkxtPUfErTwPWio5RMjCwn66phWXq9h2AZAqGDFKi3BZgfYAUMvKguRewgGPfVyDxYXRA55VVggdtRTSM",
  "key2": "41rFLEhfx77pRSTLo1DT7yKGQLQBXr2ckX7jyivcTo9w4B1CumrG2WBdA7Uvawmp9truDgoH66CeeSR8LWPZXCdd",
  "key3": "58dwM6qy2LNZ4Jrb2wgGm1PK9NLufuRDgEZoR2TsBH89aBTKHXwsamq7nCihUevNf3RgKH7UNUQ2AEarUdv7ffUc",
  "key4": "5cwTU3KkpZ2BGtR7UHpoHhjwbbWr8zdG2pVhQEeAFxsGF7YjqpzCJdVtwoNgp2kxVDXbnYqAJaPyiUNj62co6jNH",
  "key5": "eBrChtJgzbQWwNUX93tTmkPGHSNDairf5knqgQZFMUELmx3frww1gpvoUPNwAMKbEuzvPtormNgtvY3pG6zMrVv",
  "key6": "2igajnerfi1fsUCMzEyHToN1inP4SGcHC3d47Sr83RodzkHgN8jkdLfFzYPxfZaR8hLUBGxg81jEnSb8JZpqyaEM",
  "key7": "5cXJco5EgqJJ5RnArL9i6rAN4HLLaeNcPVKom1UJn8t7Zpku7ZfKi7JiU3SimSSZSdXg2ZvSBZ1jeJj92vgwyKvZ",
  "key8": "3X9uoDGbsZ6hS3jmiHoaoKM7tRb4mqFkUoQazVZbMTziPwujM1o79umy2fZ62TEmjz1Da2wrKunheWocp4dvHLnU",
  "key9": "2QxyWfJmMEtTtTqSUN9QP9FznifA7o9WsyyqffiZdwqeUAo1tEuasTUbvaRVFdyrw6c2gCBBDCLpM8hJUahq18GB",
  "key10": "4WEC7qL1RBzL3VxNhGyPQUvj1datjhwDCZQ2WKTUvyrizNtCZaS7gYrgjw3QDD23Etyt6TRWxt9gFBtEb9Gj11Fk",
  "key11": "37MsabrfhLagy8DXZjYBq89cJricb73tt1jJqa5DMK7AhpeecouTNop7YqwzeMJ7dqHvyx5d32T6VcJUvHtVzqB",
  "key12": "2giUpBjJn2hJMwmQtLYgAFGry7EbV87fofRf96bB2Ru4gGFJu26dPYfTdsEVMQb79J6bB5Q7aGUmAVn1NT5wcd8p",
  "key13": "vHttWra9FReuBE46z5p47JAVP9AhiQAyn4PsnCKaebtguvLe8LVuQNbFP91f1bpVsiHM57dqJNDnmduXqxtNps8",
  "key14": "UD5txaY3XvR7feKQNCrfAbgztfnqnVMuLKZDtpYKuzwMGYefYm3DXGmaCX9tLAEkmbvDETVA3HRnpv2Cu1u9c7x",
  "key15": "4GtAefz2kaB92qXLftpJyX91883cjMrRvYnAv2DhYhjD59tnvwJt4i7324XCWJpk943UiX6mcELi1M1Rt75sehMf",
  "key16": "31h1QnvXuN2NZXBXVq6KdsUwXyTbJ6B5M5jVgFRqnFJhk63j65Qkwvz9Zcwizhx7ZE8oLNuV7BDrHLCg7tDmfxFS",
  "key17": "6EXCde4hH19peNzntJzfKxYXv5tKcEhp9mWzwiFef16ATk5nAw3n4cTwVkUBBxPzuP3dVfVPkTonyjaYa5AUQ9z",
  "key18": "37GZei56EZA3BiCLYoPsbn4GFv3enkWx43nNGiq11eiMunAbNmcoepYgbGufpi2PwkXDda2hrmcL4NjZfsQAkg3Y",
  "key19": "2NXzGcKrzNj34TQ1e1NXN55ujZHpMpu51DNi39b5vnqLLJiGno8VviCR8mZi1woFLtWAyt5rRuKXzoWvRni5Hevj",
  "key20": "47NkugRsYGX9da7U6uuiPDH3gXnMdrNrt7AFHGrUWsBWXbT9ktLSR4UB4DBRkz1Jpot1758ZoJGQrscBgcvWVn58",
  "key21": "2Dnj1KDqUYt7prXVCeLULTJ7qKRrj4hC4SsN1KiyeudwSJctu6mqPCqE9rUh8yQmYQQmM6bv9PjbrZHmeWQByirV",
  "key22": "3cn5voCjZ77y6ARrG6CEPKNeZKRxEdnhDUWt1kAdQiCbrMFe2rR47ckkeqxH755r9mTCdcA1RJDkgr7NXKsQXQfU",
  "key23": "2t6ywiMGJcg6F2sfq9dLvj1VvcdRc7ZM9z7eDddHPBduH2nt2kZVMy789cKcLnENT9rsG2AVcyy5p6moWpvhnasb",
  "key24": "2Us6mADZd2oYpVvuvDwh3iocBJeQ9uPkufF45FSpPw6bFG4anhLw6f9H1DA7VW4ho5XgddMS86CHFsTZXN7baTeR",
  "key25": "5NVeoeANo3sdXc4ynmUMy4dMB4KjD4dFoH1a8sJovuGLwNaHK4nDUqexjwyVzL3jeTRtjrMjjxFrYQZtrXssouGp",
  "key26": "3gv6rToVH2ahEDSbMdKNnfYEcJjEQeDgf63xcyLupqz3zcnTbCbhnHAqdQ2SVbhbTVe33Di6ostubYpYfU1u8tdE",
  "key27": "4jNwKoyBkBPUgsnJuZyjbch1kxQ9SJoMfkU6fGfcBC8W8NTdn6281xztRFEUpne3Rjetm2H4KuGZW1d2vzJrdbdB",
  "key28": "2svXVi5hsjhFfQ3DZDVdEdDu15LK7uoLQBCCTzMutuKt7QCXN24C1LbUpBupyotAi5Jur44xrimP6S1MUfmmKoRb",
  "key29": "59wbMdAfS6miHMA7S1ZGvhY4kD5pbgdNn9WQWNsoM8AeXcbj8g3FrAidJQjgCNHExHHn8TtsQ8TffCnW8tNxpb7Y",
  "key30": "3ywDAmx54XiJfqDt6pELh5D96Hev9LZQMSD5xgeZKBVDWdvhXjx3yvY8Qu5QqvHJS56bs9CJu9n3mmfQGrfN7yrN",
  "key31": "2Qbk2UrXTFLKWnubtmMWSC25bAWHE1HepMoEnxRPZA3fKvoHRKnKRiVUNJ2e2496SVLpgYzqeUUmHHXZmVk5vh7b",
  "key32": "56yDW6GQDtErc2uqJDDJrBf3NS17RoTTbFz56uGiWyb5yDvVCGHpsAvDAuGJMgYv6PUwE7HHzaMBb8EJGcQESjia",
  "key33": "4fyFm6WHoPTurrMaUsuZ1yJCBi2ckRPK3qYbenkfBaMZvV94Xnr4NonkcDxDvj4UEuDcTihpHyihCpQstmL8LAHA",
  "key34": "5GHuj9TvY14sDcXcjHrivvMcVMN7QdCRMeimaGj1QAGoEfiKdj1fNTYGD9C8piX3vitesCGzYGtkxNYj8MSNu8kQ",
  "key35": "5YRtVnuEeXxKzeEEtxAzbu23au8H35ztKpSJrXWfx2rmJrcLXhRRE4cGWooZSJXjZkuVrHAM2aHVfn3qnqH9D5bn",
  "key36": "2FBZ1fE1F2fa1bhpaKaxmUL28wZQ2odNd9v9PGkai2KQCVGSMD9s97bc7vCSMrH1xb3axecqgtN85qazJ6ywdVgb",
  "key37": "hAb3kxRDi4GMSrNX5KxXZaYRLJEJK3BJfV3qHaw596QwbxVgzbgqAuc7FQgUo2NyrDLNjmetwDY6jQiaBcdWFsB",
  "key38": "311mzhtJE5xnde95dJBimqdCJXSkjZ5PNqFUqDHZZhoinznMSqfu9jYEERe5CUTPEN4JrwEqqtJBZb5QVysWynTb",
  "key39": "3bvxJaL52bvND6winyHMXiVWwfiw8avVv4Gqq5zYExtERFgdwbKqNXokBNmaLjSf2yPbVg6PDXrRz366HussCWBs",
  "key40": "4Hmwp4eqCqnn8btx9cHUgfyNFy9krY6wiz657JNxGKBsGebL5acNPeoz79FzRa6vREi7aSTua1QDBa3HYh2bgR76",
  "key41": "35qe12wtTMU8HEMQyDavKD3S8uPkNZapuikjdvrCZ5sPrzyDAnf4Dycg8VuTdv8dBpETiaXK2BxX47jAs6KUquqw",
  "key42": "4EsoS21QW6nN8MHWvW5jWBdc3kYSNU1twDqWSSJcRUNzRnWvFaz8Zbo3fgeUPsMtUio1ox93tqbEyPqCDJ5vchFj",
  "key43": "51uaiMYG6woEFMDT7Kk2cNnK6jmt7RBSsW7jmhXzu6QrzhWKbLBn9kAQVptLAzcSBRWYJtdPZujodWiKzHAv3i2K",
  "key44": "1Qv5oP1AYbgiGd5DtG8cindVpkyQHa5kfiUcdVQiYbfs1kscecKb4zyMFt9Lk1mzfKKNLf7zd6XpWVx4tPX9Tbi",
  "key45": "3g5X4CZjsXR16WcxzcUvZkdVHcKEHS5Gg5ohJZ2Lzanz1kXBKTKAZ5jfSBrxJdped4TTQboMw2QQp6qeD6uwh2iL"
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
