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
    "5UQZWpEh1EZCXyWN5JHJkcxHbbrSSkZsLXhc2dvK91ELtsVpq5mU2hYbQB3tqsvtMiYKvm6yYxfKtTWKoR5wv1cK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k8EzmGioaSTm45r6LoYuFcwEiEMFNskystLrNytjfeJQQH9aRJbwDctPocZkhoQ6CzwFSQgnKLLeCXbDVo6d5xt",
  "key1": "57NJ4PJL7zBZbaLRzCzCUjU9wxGG2BokX6qEb9oDBsdpfPNyvdCWF7S6WCSVHC2KW8Y7NCZuuQ2Y6PtG5opzU1TG",
  "key2": "5mp6L3KVXFTsbZYhkSMfctFFsdPziT3ymXywyRJoqSvWnPjSDabjLF6FE4JftxHKQ7QzJB13Yi8jJCL4WZmB4V6w",
  "key3": "4RMiqkUZLUkGVBhi9WtYfCx2sKYJzMbsb3GFhNd5QP3rssxaHc85h6LWzxgn5trxmAMrdotPXvmyPccdAHYTdorA",
  "key4": "3cincotxJdcg3TiuPEYJ9By3UbzPKAirYtmN8Tk895EHUHRJiv4RwYZpiRwXRoXPu3cEyBv2F9kFriuNYxgSLdGJ",
  "key5": "2mR6W96rjioDvJYuVhazRrfwRd5fwFdtm8hmKRwYfeKY6NBAyf3dDynooaB9g3Df7FbrTA59KG5TbWQCn8QkaFAK",
  "key6": "UHBTLzwcyXc7Wsj7eeqNqk8hiPxRTTVAkjqN3atia3ZL6VBfqrorjKbC3xiE2EJ7nfEQHzJrb3VdACyGz2tACTX",
  "key7": "33tgtXGiBhxas8gtdFz9SBGtg9q2DsTuB99iBABeTsZ2v4C7ygs4V3xwBi3wivW6w9AHfquXVMFMYZWZxMPZsQji",
  "key8": "3EyPNbDk8KdJXMCVedsnjWX1rdBZcEqHpE4MossfwJyWwwfaUSvwvqwLedcyPmKhxbDGgppARzNcsi7dPTAngMqy",
  "key9": "2X5LM8J3iPrBPNPTYMWMh6DMNXdAhWxGMRvZCL5VpizoYgrUPn5usd1CDBgBJM4moYia1Xf5zHsiuKDyi4twmv79",
  "key10": "FLbevQsxGDKYpvE4FYCvcTkW4roJvSyPxD9w3TvvJCzZ8p5Xf1Q6kzXpQXE81nsWtHZ5E8NZ4VxViVnE85qKTBv",
  "key11": "49tCTcwjHKF4BuURC6uhviozChNDPoXL1HmnVJpeKT426hW1whg3pwMyUpa18eG7hKi9ARQRMbsxPv48XL3Zz8ad",
  "key12": "5Tmquh5cChnxSMrbFACPirajTMudpSJgmLgHi8bPr2vLXcAioS2x53Cq9awK7R2zpdSd4gdKkKc2G1ZcDAjsgsjJ",
  "key13": "67rf1p4BizSxv1kMJWa6S6U3FxskRUUQmUnVsABm9ar4BGLfrHCEwngwx8Ee7cVgGWiFkfyn9hSmNfc6CY28fT6R",
  "key14": "3csHQKPcwGj8e5VEucAsYim63ouGoKEgJUTKHY9AfwLwxqtKyppv9eskZXCQBApRiRU98pEeaPUMQYMEwsjXnSxQ",
  "key15": "2C46p2iRtARfhhxGCijrQNbzW5nmi1oYxzdnunr77UctnDh1L5k7EveL8pa8D95zsxW3ALECFGa98RAWkuCRAMmW",
  "key16": "19NM4UwkcKbNPYgwoChedMiMobodPtX2ezms37S6nTSKbHnhDYXnZNixy3jaSf5BsCxnihvFTPWdgDAH7c5WAYN",
  "key17": "3kKiFGdAB47spcTtXMYRL272nuhAq6mdp3M16t21V1JfGgL9Ti5txMKkAV3WFeAyBoEUDdNzdkE7etpi4ikGm7Lt",
  "key18": "4rB83LpzWV2ZYjo4A5UbpUdygUR5fKDSETp2os5MZZLpjGg7Qm68pUiRKA3S5Q2cw6oBFjLTiwADmAHdNDyHPkCD",
  "key19": "4j2txRF9anL6jyfXdZRAiJYckoAZ7wmN4C5vTbgyGG9EJNMzyLgwEFAfyarKE6Qo2mjeMbgsdqRCTNaQtB7U63T7",
  "key20": "4rBPoZC7TNeoXd7MmxvLhuV9j2bMS1RLhTP4i65SPMnBBxp1SLoV5L5ENxr4iApN46jEomHHDprLygpCVURx9H8y",
  "key21": "4LmdHzmAiuMSR4v56qbAaS5FfDoEppaUfwrDMKdAVQ5QEAUggWAjcHuvhfrtmRFxjvA3CQhnSJ2MfrKuogHXuLoV",
  "key22": "3vKWc6Jx77YWgeJ3v2dPsL3SqqKBStPw4PwtNTj23oPhD7foqJBG9FvK4QudPa7n55pYKKXeFZpDde8XrixWcjoe",
  "key23": "4Cu5UmZ6oPnnqJ44vFM4mufJJruv8x2HbjDDZUVm1oRDqAdW6McUseaCjH8CYgnvk5mAAEhJhqvmUdJgkJoLCe58",
  "key24": "4caxW26VFjMZW5sGztk6fB9cdtrZCDs6SKFv8eYFq9DugEX3epQkWHkBEKkauHxrh4zfzdpYb74DmGbiYQEE2qgv",
  "key25": "4bv9f2s7GZPbShLi243vCwFRr2urm84oYEcmgDsyYcz9nhCVYnXsfBsiZuaFUhUrZA2CtRDX2dyiNwvPFhgsKUL1",
  "key26": "2nEjULXaQQVssbHow1YBsLyUbjz5YjRVQ7ZTYoS5nhDUCtbsAHJLfMoXws5PxuwV7D8nGbGiuhbcf28TT5UGR3yS",
  "key27": "3oo3yAXb4CUgm3nUH27fvEQgYNk1mMD69qfkoKJxEmd5RJBnfTDSoSfT7w1uuweh8w1mYu5uSHaDYDza11vuFnG9",
  "key28": "bV6fE1GjTEPP6NqbLw25wNsXN2qtwg78drvjVqDMJgytmzRom5m4hdRqMcDanLrEFUnoVeFcTn1GcGGJyQqGDyz",
  "key29": "3pWYtRcMwaEKcyKVzFDPZSMZDt3xfRaaeYCtAjqngaTHtZbzs61hTsU7FzjRgCWfxrY8RaMJtR55nEwbAmnETwXZ",
  "key30": "4U2gfxP8QKjzzVk2NxND7rTeadHRF7MBVRs7DX99AUMZU9DbHcJxmYhMmESGgAYNPfuWQjjeyiEEhAj2s5n8qDrh",
  "key31": "3qmCpZk4Bkbaw2Dva25U4LU3Q7zWe5sUqn3GfcTfdBha1BckUaqz3e9ZQrLFLgqsBcthYvHWbeAjhpJvaYSStCZ2",
  "key32": "2c4VTPgMT6d7bpKdmncmdcPsV8wsi4zPqdKnvEHXYQueHhVtv9Rut9pnQFGVxEDeKcM4pWragvBfaQNMqED91QPE",
  "key33": "3pepjKvrkwHP1Zwd2TSEjZ6r3T3CWEMDY8EQSkNyWaMBvpCkPodN3Hf2FhckrwePePhBMdX2s9Wuqz6LVhXM2qJx",
  "key34": "4L1QGs5zb5Y1Ybb2WHtpL7yYi1SSr6Ha5jfjA7J7b8L8mVd8SfoFawKZmiJYYjFjjX8cG44RcrL691ccgsg7UkRq",
  "key35": "3E9dfsgDiAHNTuH9Da7Wt6hTeaX4YA4PMsJJW8jT9KfVkuSbWt8dL8zcFYmuxpmPp6HmwBUGQscgj1otYP8YvaZJ",
  "key36": "2eaZR2BoZDB456orXuJyyoQy4Uhhyd41gCeHEzsvESYco1GgjHBoDFML5wfcGkrWTtLHb5yjJ5P7R8deci5tahTg",
  "key37": "75cjfdZxfuzr5McCDgLbEE5XP5rE4Jk1qjUbHZGkpKV18Ne2gqX7PTSG43PbPauqR6TukhtL6WDCQEFtH15S5Hf",
  "key38": "4Wf7AgbV8zvQ1ihd7sdZ9J8h8FbrUACv9u1RU3HSbsTzyHLaVX1ciKJLNuVZNAgWUBzdUHChP9Zq1dwQeJf1xrrT",
  "key39": "4j8MvCNZT7k96nABUd1hn9NyNZenxCnRwPVoQxwGwjvo32bnaZtMYeSEYRxLFPhbonqdFMyvJTuSrpVLRPYWFifm",
  "key40": "3hcGgh8Xuu7ux6C5MrDBJbnJewXGw2AnRfua51mpcbFimRGhGLZkfRnyDScUidU35MsiBRi5LBGx4vHEUji9aVTp",
  "key41": "2vD7LsCbG4Bz6ErrwkHsCQS72KjECgRcuUZ2hJ1yf6ZY42WU8RjHR7ShDxDxyFjNt6cuE7XDPRv8w6kC5BgXv3DE",
  "key42": "Txw6UyxveXg7yLsjLx7GRffjDdQ2MtR7rRNguhp4tVDFdqcGBiRp6GRKtELUGV4FA4Buw7CUK2CyC7v5ijovEFr",
  "key43": "3xmCnaKtg8Y8DdUsp3ozQCrDw78DUUpi4R7bhNvm2a5VmEFfxpRkLtjvuQvWTWpvZcqqTgAJRyHJcQ8VVs5fawwd",
  "key44": "4NRmutYfsf43zn4a36mXGkNgeLMgRmcQnFKVDB5gZhB69H36p2TbT63RRkNkVfQ1nRCEU41sKPzYHZCghNeKmysx",
  "key45": "3GmUVWTezcfgrjkztuNUpAHWTSsESLRnsr99Ppp1UAUSk7YrGnJ5rsKQWavNagLrsnXjRnndg3jcT512fx5oB3F7",
  "key46": "4SY6GaugSfpHrqRFruYHEBCtCazLhXHPzuzA95fVSHFVZuM3Kcp7WQWQhWqntTT19P5ev6Cd5r8eKMvqwVGH8baZ"
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
