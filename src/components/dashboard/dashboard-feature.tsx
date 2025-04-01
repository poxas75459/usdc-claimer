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
    "3ZvvEs8h6x39L3kAWYw28NUQdLDauArW2B5i6Pzb81TWpPQ3MwYfVcnFyfJxZnrxVjTQ63rkkWeXHsRQWvmFf2qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmZ7kf8sATCW6gVwBy2NMkz9FHcoPAnvqRkzwKKkCHnSMeyXDfVmHPYbxpcbd96xgHUCSixhSJ7ieYxEjrAuqgb",
  "key1": "27t7q3hqSwdwsDthGzSP8TmSi8JcBgQaJ2sjhcbNyJEK2zvvvWQosWtMKwFmEJoF7jsn6FXQE5bHNvBNQiaCpgKn",
  "key2": "3WCKjwkcVCUSLZfrF4xNuXyGgVpySXFYHGDRUuJYBPaW9VUDauMgos1dimfKLb5gGt7xEAagqFhdigufVUDwfgQx",
  "key3": "3GfU21j6DFoLMEKBPmVA5MLZo5vL74G2nwFPCvTjPZYHhzBst7YjcC4rXCWhYGJpEM1zjr3Vw7Ym8ASe8sBCMU1W",
  "key4": "3eCgM2rRczX2bkMPyqZQqyBiPp6vYjM43pwhMrWt1DBxCbTvvrpqfYSNmPqM8bprBMRewvTmkYYxfJjrxzh3ERpF",
  "key5": "4P7N8G8FoYzEAhyf88o7fLuQuW6PjbP6nneEM8YZsPBAfYgjhqg5RLfLuRCfwF5qatM9ZZMtemh2pcA6BSq1RcuV",
  "key6": "KGkXijmyuWdp4N1ZzgTd9YorrbdNZq7ocECGxNiXcgzMQfGGron7NBioa9cFfNskQBUMdbUznjrjGH5bJHDi1Hq",
  "key7": "Tdudad5SJbKyX7xKBRtJikAvvq4BL86xEMJkXTYsobXgpKL4cWejCVL9jYKzia9M8VuZNHEKfFuL5kcEHFWwsXS",
  "key8": "5BRTJm5eoY9MQseKa8sWXLLsFkbGCpKFaQL1bYHJuTjqB8nmj1YT9MTs3YmjiRdPdWZso7tGekjrAwjE4544XdpS",
  "key9": "3LncTtdxN9tXb7MHRZVyQY59frRcPYtb4BtsmcumxX2hHhBymFmCAKdAPCgyAvBV9swaUJPYwnc37VmkNXrdoFUf",
  "key10": "4xXktT4txjjJ5JUtPxws5cyuzfG5gmHoVx6XQL4hLTw9amhmGGPSKmkDtqobHmtYQhZgNtYVWeKKnVWtdhdQQi1T",
  "key11": "54gT8d5TkRsDn3JhzRs5Wi2a9zJY8mMRt4EGYtXF7egoPrJakHMbUb1MHAXE7SRNCtJC62PR1UpYmowX4gzJw4fR",
  "key12": "2sdD8i3gr6YWFayDjomdKGWoiRzutjgsEayQTDsPCD6YLkGsNhqNkAGbEf5Pq1P2ykesD5Jr3bzWXEUYo9Ehs6Sp",
  "key13": "2SsbvNiTkXQAzBjHCyE513ZdWkhx8XTq4cv6x698LZtQL6n8UbxaJ1cM4BjC5aTiM1nUJaoKUyU15nX4N7rZvahY",
  "key14": "4gJePk3wwTKAh6B4SSQD6LjBznauX2vkomRmGLugcnfAUgzwZtaHgVchra2cR56nMgAaewdCqFUXKHGAzCvkWutk",
  "key15": "5qRBQVSoLufcereEL97jZdv6qH5zTovhaqDBEwjZwsFgijQfRrHuf3LecTCN3XTbJ8VJRrTHadMv2GsHQfmBowFk",
  "key16": "5sbHm6waveM9zLWkNFV1XL8vVtmfQ77HPZYtWsse7Tbj4DAemRAjYdP9w35stPEemKoy3mTNYdk5cNSvuuDncmXg",
  "key17": "2h1Bs8xBDXCpgxT4K7x2RhdGuiwK9y2kuojBHMdZWPRKCo71fdirXbx6YAxk6HVz7GTqsrH8xPLDeBFHhQhsAmev",
  "key18": "5WKybc6AAEyYiboS57hvPQZP4hBi6hdytpTcwbz56KLWWkhz64xn42Zux72frCw35mR2AmCWNKjbnK6CZoptBgez",
  "key19": "4ivG67Su7JvScD8TX3SHTZEtnyjqBXC24jsmm9NyPkuFJdvb8jNxkuBcCrTtuB2VcCvjifYpb1heM8o67UwjPXhq",
  "key20": "25K75SELZorAwvww2s5YgpAHxpTQtMdBXXXBMa5saSizDKmnpUgjWvUUpW8kRP5p66smcUMrtdp22tMiU5EXoemy",
  "key21": "525ESxPcNmPDH7xi9cM4fYbqP2J4pF27eyw58ht4BSNZ18JCNWVRkLiLU4NaJTgcpg92pd9JoY7Gi7Th7NKpFeT9",
  "key22": "4cmLNu3g4if6yMfLD39nbVPNphusrGq8DbhSfCautsZvp4oh91VmjUaJdbGoKZWAkRyyCvkLQuQirqYoboFJF5DG",
  "key23": "5jfnUZ46BsqULTheh7CiGEqbRXaVDb31QqaLYo6RvR5Keq2ptBhdprf2jfnUMBDR1MYcj7AQEsQAJFqWdNkLY6Z3",
  "key24": "2g5t8QhC2oRreYopkLL7Togts6PZAXfSKKa6fQTnJxLHM8FZHbXYpSmnFNRu3hzyXKUFUwsV4oTMJ1WNp4xiaTuX",
  "key25": "4Kvm1ieyxxAx6aLCUH92cH1eSdWGdMYhY13ignC6VaFXc4jqSSSyKb21k3vNAE9m6RSWPgzcGTXciGbUsFx2p9jp",
  "key26": "2SY2WX9MheT49qMEXkaSkZq34eLrQG38UYGLWLr8EX7yZJ6fvF1df6nMWuNgLZfpsHScApy72YpqWh8yZ62y3yp1",
  "key27": "3CwtGUfArDYHDUa16WeEFbdquAChcPjPECqeraWhkY9EBq4iKNwn3p6subNdJBvwe8ramCAHEp3RExm6y9FyyAoy",
  "key28": "3GUJ4L1KVFMVNRoh8oF7gy9bXpYjzaw33ykgJXL51YENUjX5YwrETKkZDFJpb82BLirqd8sZm4gmKuo95aJ4ARBW",
  "key29": "3UuvqwsZsQp6BMPKVSvtxzgsyKgCTBxbZ8w9foa9hrzm21Fjh7hGaHM6j3b2yGCpMRKe8HUa2B1y4RXhBepGPmAh",
  "key30": "3zG9ZQrR7mg5PzonH9hyzDMjPg59HGsG5Q2SYxngd2R7kca8yjN1nYbmqNVjCBi1B1rzxJyaJjhoKNRqgdF3LbP7",
  "key31": "48F4Zki7fTWzCvQKGwAh2waJPQvyYjrPFuZ6J4GZyz6sWfqQ3RnPNWdeywWp1t8CjGXJCXbmbnAZnbm7QreV9akm",
  "key32": "53WjRjEzHK9RE6D9oUwUnDrAFtLZp1zsAaKnCgTTje5yXuwgz3rwcDPzquqZdtDYSrVK1RNfQNXAJKFeAJsU7RW7",
  "key33": "2vioc5mQ4EJnWi84LnrijmvhzDPoPyQekDeC8pQz3tkYM18KvhNMeqezKXpDazDigm7g3qXFHngV3Wp8iNUdqooq",
  "key34": "54RMfVoCiRd6EzTDCzQSQSqJ8KCMPCwrQGvgeGTgXD5uZ9gXpgFV2tdGo67KtpDSvYUD6YGY5WmRbGhnJEP7FtZt",
  "key35": "4MvWKNQbhscKov9dd7vWrLqPdFZbBaJfAQFKE58nxAy9nmLw23aXJ6yQD2DGmwhpFqprMN9fw3KexWtsRycvAsUo",
  "key36": "4WuRn3fNyyc9791bx875y4NyNXPmcYvNHMaeXC1jfmZ54snskr9ATgiw93JKXfpPSzW6MnciEaACQchL1iEE9v6q",
  "key37": "5QfskZ8vnvg6okP28Js5yfq68kiaFM9QeEkgMrBdZ8G5S7JwFPLKze5C4m7NHdiiEMp7Aeg5dw4odoWbGqsFaqEk",
  "key38": "wEn35VXRs7xE8BkbVvmyf2CXJq5H413gTuvGhdaxC2gft4TUNRSaxwAYnj4Aat3dKaH7TYtRMNffVaWw9H2gQe7",
  "key39": "3sQKSz5zKNwwEtcu5JPQ5SvmLq8CDz4h3y61NdvEkgZRRKocKCggCeriLFuPuMS14Mf3B4r4SJyC4CFcCxY4Zn6d",
  "key40": "T4Uc2nr7cmMMkkSETqVJQSSVhwkoi4c8KCogzyM8bRM6byRFjxKjcVarDUrpQiy5GWQhtX5SbRX756xLtGtREef",
  "key41": "QXHBg9hBvg4FS6CChY4och91nnzcHd7Xs2fcTNaLPAau3EGLNA8wieAGKJXYnHZCwncVw4BPhMNeMdAWkb2d4Jp",
  "key42": "57u9Nf2UjYXRjotaY2xoXvynUZUD31pBDtMEk18y8goz1EcUWGUs5f5KJXW4GV9rj7iwfJsZTtXCvJm4fAk5JrJQ",
  "key43": "3mKtkRpVGmQXNcZqXQVnh4bLq3hjCK7M7GJoVi7DZZxfc6XvH764EuQQsqhnaAtkH4iS6SRbPYiWaKK79WreDvzi"
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
