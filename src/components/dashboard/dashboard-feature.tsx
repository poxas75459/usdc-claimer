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
    "5FiDP9ojjumbgUrUZSjV6rwz4mbyczXEgqfzfToCNpMFdwzmPQamd8bZ2LBKLNmWtHx8EasGWDqVqiT3LW7WUShY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TRB1yfWc5JaHDkFhhX6PFjLrNKnhQg8EPqP7JYi93fUSu8Uvyky9TwBRYXfhog1UHh731XqghTZNzMi7WQoZec",
  "key1": "5sYyuYZCfNwA9QzSyDEEep188YbshkK1gCmQzY5PALyWD2HHZaHe5B5UvEHMAbFwvfQRishh9bSJk54VDYPCb2zE",
  "key2": "43we8yYPgmv47AnAESKF2B4TJTAmCGc3EU7XASZ2faN3ZmSs8pnBrM9KKRHVym8DdfHCJkzuiFcBb9ioacAZeeHx",
  "key3": "5zMor3AqDXMiVvakjSx3vU3Le1bcQsqKHDX6i98MS1FeGAfHSfgNAzDy1QfZgAU5y5kNaGHSidQb4nj13vizAh44",
  "key4": "4b7DSUsjBPhAif98sHFzhnmTMQWFBSSERXizNxmeU7QApDftGqn8ihswduBwSNoDLc1QzPHcuPGLqgdRAoLeytS1",
  "key5": "3ZKh1v2KhfkXoBntXfytJ4zDomJuiWcuxPH48qUG8R6snrwiJaYfdqdDWz53YDiK54ubjhrsVBFCNDxsHu6GCp9J",
  "key6": "2THWcVQ2KHdKAhuvjPgte29nd65fAKV7ma9XdT9p6HKwtZT2FfxAm1a5YHrZ7KmQVCKEjeR53bcxEtQLvCjnhcCz",
  "key7": "gSXvb7D4jj5qV4QwjafPBQMXBSxXm1QQU4hFzKdKM5A2RAYyAsTn1VcTbrSevLaKd9LPNGBANp8G82f4aq4UJzh",
  "key8": "jXNqdvdydahDmgax28Cit4TGwjGq9QTrXHJgrEaNiCfrU7TGvAPxYDFCt42wSiXK62qUUGCfMYqqbAaCiXCZ6hM",
  "key9": "57eUDzMKt1HiX9bbPrEdp7hE3JBdZ21Gc9osEgCYsdo6mXH1vxJwrkREhKfCWHp2hyzzYFq6d7imUfquyFViF8eV",
  "key10": "4ETeVH9WUmLytPhszgRsnH5rSvZuQtKTzVChoWFPkhZLJ6MTSEbUQV4YSyES4SngfgaKTU37EgLAZ4Lak5oDJxfk",
  "key11": "3vdkXYVYaPHE7QFtAaT8sLAjQwNSAxuKkiVi1dczf12KosGJcubBtJRxqBn8jTTsu5vA8zzMBnrwapswdz7cH3Zc",
  "key12": "1V4Bvr7vHv374DFLZCaY1hwJysmQY8KttNqA4LxVFihZh4psoWQAieqeVbUqaNhQG5NNm7tMRfVM1GBsNRbspqh",
  "key13": "524Zht47nTw7E9qL4r6ViEs6Kijgmjwdv85ynkfeqfwJdD85HCyYjArLLTtSpxgiNV8JHqZLmpDDr44xsPLCwv4W",
  "key14": "3t6k2eqbzgQb2K6m5qozKz5xmhgLKxvzjT22qUMnLWvtokGQwgE5saN8adrH4fsZW3XF2qxFzuAr2m39nNmPAj8A",
  "key15": "5B5SF9sUsvvegAjQts74dSXJcBs5jrqFjizYEWiQsfKfAk97KzrceTXxRVNzsxZv9r86xt6iKxMdHWSGm7y2wbdw",
  "key16": "5zEeknMoAEuwhA2YhH7ff3PGRb4YhYdsbZ3FHE6aC7Q93pB7ExpZYQ4d8SvDshkDPJeKFdJFtu5DXVQ3JkPP8r1d",
  "key17": "32juCTGtAJRXkkfgxHZXDDApT5yLa4yBH1pEpXsRHX8MbDbBNzjPP9tA6VSqg6jQX2PDHikw55uyNGU7h28LwB5D",
  "key18": "4mujN79V8rxo6pEdFYfwguGJD9ZqfAEqmzdAZ1V3BCTA3Kx3hc9ArA69YNXxXa2LF8zJouqdPsSn33jEu4fvPMoS",
  "key19": "4rw3Ta9Jqy9gBep5n3AKb4WteCYjU71JHhYrkWKbFA4XtsY53jwztE7m8HZPbhqfnokL5xNd9iA6GxtmqeDniLzK",
  "key20": "4nPeanAgJTiqJkoGoPUA1rCag7kMvnjSLhEiBWtdPDBfbEPsu8crKmCUmSK4wVm66GRA55NCaUf1WQuXBPMZddZi",
  "key21": "3A2zAfjFb6TgLVYLVUTNrgo6ZXE1BE1PCxw1pm8hqGXuWixSCM4yciVuLAMZsyx3NeLP86W1TcvEQ3FuUZp7CA3b",
  "key22": "2TNGbjtoK2V9N8gYomtGEwUFJEyLyYQ5mYw69EFTPFQDuuUEkuuqbAi2G4vyPBwLrVyZ9MoA89GzSrQAWUENMy6v",
  "key23": "2DuwMkcukBixJNJQDa88mZTouSQcEhWoAhjB7yNXzCwYoLiLaW3WXfL6PgZG531BvUkYZts8AQTVVuxWp5hEqw5K",
  "key24": "5i2ZAjZgWBy2oCeXkDtYLKZjuGDBH9zdD3yrSVrW6Sjufq5y4YNVwrzA7wm4oW5g1b47oGENaRwtGqg3UEumEQkj",
  "key25": "3N1ZdP3SPw96YqSowhTDVgew4xQhfHuiRuARobvwdzB9kUUDW8EXwVLWZepb2kMq7nXz664m69ATGaX9K6aAiAMz",
  "key26": "FDJ4PUTptpzdwTSMcF79Ub91iKQBTj7NZM6d5dZ97dtuq1Kyn8sw9xs1foBZvpcp8VBj7YworkcB5p5RLYExijF",
  "key27": "5hpo7wa1FxHfL3q6xzAikYeZSPZXokV8x8HS3f2VD8kHoEExMH5QsKqDJypMbq4jUjQe2H2Qw2F62XQCyHJuvxyw",
  "key28": "59S8xzcAD2DcoQ36giQkHr1pTCBUtqHamWFkorkbfyX16JrpszvQcjBpfYJdt1k8PD6KKyiHjUxKWgvX99RkfS2g",
  "key29": "66M7iDADqmouwH53uhjbpP2VkTFCvxwUb3nhHkPPjZLAfMEsPVx3qg3hMmhNR4A5h7ebjTRYBuUqAh6VxDfNkFZt",
  "key30": "2VAdiezjrmu1k5NMNYNARkjp5hVBGaJvTrZ3GV88ojmgK9CVuTshrNW9SXgVarcQ8jQpNn8n5dXibPzqbSk7o3Au",
  "key31": "3M2zmngsYgSeAa4t6eMFjzMemPBrGEyigRLDMHFBLMYA5PuNLETfMLhnrM6VZRHNF8XbkSFjdf8zsoWETa1x3oe3",
  "key32": "2WPYLHU95CtmnQnhEqwX3sByB2i56a7X4Rv4dQDSLGGhWW7dLHZqtsWFmCrubpQPdmXCu4jxxws2pJ9dYYsKn1Pn",
  "key33": "29Lmdo3ywgqADSsfT2gi3zjyFUxqizozweT8zxLVUv1ZzdLvLG35KT4FqqyoRny4imwdQpF4dsqRhsTgFsn2WebT",
  "key34": "2zzYUbaJm1z8RHiuWUmywbhq3uL1oViBt11F8mxWmc1NaeVhtYJ55GSfcgkQeRTxS4D71ZWtPikKQq4dHvRyvydz",
  "key35": "3aSosbK7r7HdgAmTB1MScFJio3HYSxnz5HnV5r1jH3kQXh2p3sGyiS6qQfA5ec3BzfjGptqNTkdCgyBfAMJvb9aC",
  "key36": "DC8QWEwGgDuMzDMTuH8gHiuoQ8tUtnnfafXJgqqSEDUA31L4keNaHTHALCcU7h6Cfcyv234nVpwPLRcwxVuj5xR",
  "key37": "5ugZd1hRgjsVoswY65Bt1euaucToj1pgRPYWY6pcwpz6gnq7AqKMGsyGYkD8gyfnX1dGMNH1ZK2AoxQw8JkoeBS5",
  "key38": "4gugsxmH79DmW8qa2gi4NwhHaTsvCKjUwwBZjbjn5zAR7Y1p8G3EVDpe1p8Cy3Mh8gE22hxkodPsydqdEAFkPnXM"
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
