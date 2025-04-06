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
    "3peAEup9bW8fTgFPfzmzDXyBoeqqsWaU4Y3dEPckoVjGWrShUS8RRjhsgBxhJjuCuRmn7FyDGRD8SkMf6vULLhZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ptDtYWVRvRHapVTaqWvovoMR2r7dQacdTa6Y9zuXooYSFSWgaKe7LJdzQeEFsCREFwm3CUdD5NyAGFhPu6WpmiH",
  "key1": "5iZ1RonaeghPTa8sdCtGUQQRgBBcAuH9S8YapTQZ21USgQ38TsXGbkY9ymUk2K1UnceRUYuei9zEmghgR2PEoJCa",
  "key2": "2do6anqUEQdj9jwG8wfrmUeufX1KWJJQyLW2GuvPr1SjmXXgS59EE12GQb7S1m3dcn2e2Ue51DogApdjRo28GsqX",
  "key3": "5ZN378B4KoznvyysN5Mg9vojq9WbkLRpAUk1WdC1XoDPW5Nk5ojuM7Mcg3a43z2BAA9XMQ4xzAyCE1UHZQbDPLSm",
  "key4": "46uuzusk5L9yXVeZBRURimJtsxvG4A2iuRVVwZ6PdoG5Y35rbsw5hGvBzMZ9WTNBZLT9wzCyqtv7s2zbf4UhHWr1",
  "key5": "5j46P1YdBdoaVf6n5LSqiZzp1AVmADduAoTYau3BHQiMDPsbVFU475hbH3gTZ1Lkhn1DHiTYxSfjfmYkfMY9qm3d",
  "key6": "4Dcbgo8fpixJTpshzdDmoJ5zphQZTME7YNCEHQoDC3vg5zjcunWkW4uBKvhBag93L786kdyTKWEmP5BDHmBsntES",
  "key7": "4ekVRD7Q1zJqpnFB8raMjHKB4sZooKcXkLbUqi5dDpeCP7VpuUeKw6uvqCrq624dMEWqVm5tYjTV67VisJJsDBtA",
  "key8": "3tkbd4Mpd42GAXh5cbXcVivTodi5HktRdkJ4JZLWR7cGczVKvML1Yc3oiM4FvRNjuobq16QNtEwDWxL629eG18jU",
  "key9": "5qYeLe9KYKDcia1F6tpWUKr6DFzE1ocuRyroeJtgqd8B37Yw1geA88K7WpkmobkTXsN3bpWDt2rPfkMQXpN9dQEf",
  "key10": "5aJ5wpqWtaUFJasa9VmStoHMea5ZxAxkX2bazXwoZog5XMReT1ivRAE5iDP51iyMu4uyp5oEUgeLryvRUtftaciM",
  "key11": "3D9MtEYwcMHxcbmQ9h96Luqoq8nA52VcA9PdC63jxGHiUfAsxEKJmp4Pm2fV3N6E7QkDsaQ1bZ3sVDhT9K455hMQ",
  "key12": "4YihZvXptBkyRuz1dHC2GvYyXCdp1a7Y6tW9PN9UEJr6Mtk25x6vcnc7dJxEVj76iDYcxpuQrtude4B1SzHuJ4iE",
  "key13": "5AEfQDVfAuqXSqVomY1FQ4LfTJoAuVmMGzfd8EergZvzAb8XgvEF2Ggs32gwegCuXRNDzqpPX5ViFkBjGeiSyaEL",
  "key14": "4ZZJe71aT5UAxhKN1zA2qMk5Cm9T8MeXkvuumy4pkEPmj4yN14SEUbGTWA8K5oQ68AiYV1bxP46UzDvBv5E2iGAc",
  "key15": "66XzFgBUjxUv1Nzc5CrNf43SeKVGGc27nom962VwdjqudZaT5Z9w8uhecxTeFJx3yfsWqMfdfWsYm6JP7eBCvgKf",
  "key16": "58NAKJkQ6WVWvKzSHVS82nMJVmujboUo7g2GBKn8GnwsLNz3gZ6sQyXKFu8ca2gdgH8xYYWE3DJW7bjJe8Jj7eDP",
  "key17": "2uAQ9YPN3KB4NxUrjM1XRuND7DgFZfvusDDXbrKhTnY56oNrBMAzKgaGnxNJarEUfPfZnV9JRakiDMnWCmmxqzjo",
  "key18": "5uEVagnyTjy6mvd195ZMBLiUs8KKCde5NsQhKUWqGFV26fZ7ezHx3sGyXXtTJyCDcNtn122ZdrV8aetDVaPWjb7P",
  "key19": "cBx7aRY9kCb4kiVKcSjiX9pc6nNJVpwd7YaAC8HbJmVdunydMG8nrNpZhiBhEn7wZg3vmaV6vP257aVi1ZM8rkX",
  "key20": "3LoM9EW8urJaGyfX7p9QnCtF4JVcc5QfRPLMukLBBH59f2nwpDrU5LXUj26SnTRKDENMWB9HZxVChBSr1n4FijXv",
  "key21": "4dsbxK4RGP6PWHP8fbhuKhnhYx5k8NguKeedu6Y9Kuoytm7MghdYxb4TAJM6y128w6MaaNvMPEsisDyaQNsK8sEP",
  "key22": "2DMYnM9c4wwNASDEZGGsSExy5TUC7tQY3TSFz2kn4T7ofvxeQqKd3cTCW27MW5jgxGeD7totyJCUmPsfALdyiiq1",
  "key23": "2PMd3DYg9fcYRssU8KHbVzNGHwmY7jf8zyWDCA4vTMeAjFxnQpzsC1XvV4ttNBgbJ1JAsoZ8NjwHmpy1vYpiRKoq",
  "key24": "47AZgeFFLtY3UfRxKVbtAKH2PaxkxJqVBaHU1D4asNX69EGZskZzYKqLTRLjmbvRkRbX6jbhKCBFbNFhQ3EJGskM",
  "key25": "3pCYrmXwmWsn5GeyNgrzEyDPJqhocaEiLWS5CgozsJobEiM3N3xFh31qBJy4ubgBmnnH9Bfrg2AnXRbQ5kYRCW1K",
  "key26": "5YXJbi5fNAAEnTTuiA4bHho5Nc1FT4ZWipEWNdMqvS6CpduCP4wEdHqFNvT3jMvhEncgzaWbZEXewPsSRRxrcdUy",
  "key27": "4Y1YeN5rA8ojQunYH4jMrCLx5DQPW4FawKd6R9sD3mSpgdCfrhXv5x6QvWFrpAzT8f42xLb1cHonk6QMAxyNVtBF",
  "key28": "3MqSPHZKfdRU5YAY7nHQ5BkksEtoNdMthPDZVm1srEcVQTh16pc4zasWtsBMwrNtVwH6zMXEbkJ57tCiYkwWRojZ",
  "key29": "LJV3FESxMpyrdaucybjd9gRZUXpoUUPRRc2E2urkGCn99FnrQWdb6MiyJs7vzXsfUjb77P8F9bMZtSk6v5Hrvj9",
  "key30": "5YnjrtcQ6B35G3eGkCrYKHWVaoTj15NK32yZThMTzfj2pqU9SDws7cD4pRPCegE4dmX6MrWnkzaSDiSFxfsSDdoX",
  "key31": "3nxNK1er68m1Qie1oonbKpm8xzwvpNv2JkdL4iJXwVGHrexEShcMFw4HJmqShV8tnVeKXheqvRbgkRGE9hMxhoeM",
  "key32": "674ajX5qzqQC2z3xbBBnZccZ7DPGB7C48drsX3WWMjF8fzRyGoUkfKXVVPzSekETWYitCEWqTV2VqrGpqUQeZLdu",
  "key33": "2do67VvVyXLWb6pCtxbxD3GsZVhh5RyHRYsFcFn6YkMkvSzLMi9Tr7gQRSvScaTLeswoda7ck9iMjYqA3Q7tF1Zw",
  "key34": "39WaYvJcjE6WifTqJVgXvuhCx3Rna4YE3G2miuco84JW6PtYuCNtqvxUhLGXGesJ5pLETDZZJ2xAfhYTCxZigtBB",
  "key35": "4n7i4FAg6oSFgvWgVz2erxVgaHLDJvEq5WcxwtCsWs1CyiyJw7HACd6fPoHpZD65oG5fqUCpKwZoANvskJCVqSyo",
  "key36": "2mfZLd2GnG5U3trTjb3tKks1GtZQZEW8UbW5QmMGnYLYasFGNcAh9QngRMBjzKYcFXfUwHkyaiRPcvQzTt8WSy7J",
  "key37": "s4fCFCq1hMfk6aZX7Kb4SyoZ74631uADozDLmvizxfzNmsfRKh9xs1voKXHccxFY7cd78PPRMKf8cNxz3K49bUj",
  "key38": "2gAaMHhs5RwBumG1hc34X5g8TVJKuustNBTkDCeHKFLTVbsbrKU4TxxaW2CRvYwC1UKipdBxnuuojsVWs2sLwRKX",
  "key39": "3X4DypC7KCDQDV64yvppKwLJ1SkEQyAmQgAKasimcjEihQV6Yt3qDWbhRwQBTYhuHvGqR2XdRPFoszAsc5QMM5de",
  "key40": "2H3EPUdi8RDX9LYJJmD8VoH1WGZ9ZwSidC5C47kkmiyVFasbQBkKQXiHreJGngobxhKbNG5Dcvd4L7EqPaa4kxJx",
  "key41": "2eAyvE6BnN8xwHPUgj4VRqFmMiP96UAQATn2bf3rQppnRipScFjqUx5HSNfyhKqMu3zCmqeoV1rnmmEE5jF8kHGC",
  "key42": "4JFDiq5JQ2ThYcc6mcgsmS5TWA7HNiRf2sAnSmkwbSPEsTHxnHwdgj71qD3gt8MKdTW3YkrJJJggZ1Dh9niKpasy",
  "key43": "5EpghTQsCFMTjoRJ7YP4hX6aEUVccRJ2PGtLLuEQRhtR7Kxzuqska8MDrXUAFUkYoeAwAWpGTxs2BSeeLy2fo129",
  "key44": "2vT6P5EfaZsDVemZbTY7uYZUhFcUwREiqmDdjoe5WBKW8ahsp4BRkp94ARbqcJZ7c9XJG3i7HDmEf6Cj2wmc8hZp",
  "key45": "6UiQr6rDGpoUeo5TxVW3RMqtyTrFXrjxvz8vsGvn5JvwYDLswnuspWjMczBxmVpH7v17S7aKLkty7kF516CQLWg"
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
