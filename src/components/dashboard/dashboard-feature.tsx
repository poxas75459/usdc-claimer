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
    "39MzUzQ6FSKa53zrToKBB136cabQ6aJWX6orEKfydJjugXnXP5Xg2MN22aCcgcrh5oPwUwvWeyPMHsouvUYpbkEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WczFDoFDqSD5ehC2C68xg4wv1HQ2QiUtEwcTCc7jLFeGcUhigP37ieEzMDvqxQWRnDXu4XTCfmUQ15XDtEAcV8A",
  "key1": "kTP5EzdmJRgNNVmx8PsX9iuo8Kif8aNhKNcd3MnRPqzAijU81ZWFAoFqSACgj7BtbVT8sasgYgoqaQQokDhjGnA",
  "key2": "rHvke7afVrJ4gQRwnTbyNsv56HT8Dde3YffwfyU4FhJrZfi1Ec8QctMg8KDQsnJUu3wCwToVYaS7w3vSibXrdZd",
  "key3": "4uDfuLaURMzDgbQpthKZgd5k8tjQvDsg5xLUPacLAgmHqk7w8A8Nm64hCmy7Nmyghh5RK3rX5XVwXQrwhSjH2tR5",
  "key4": "aQYyV3JKXnUK36tz3DVGGeNpzeAktHKxaJ4RJV6f5U3zKizhVtfoGqVWecTuQrqjJmVfudoGayCmZdqgiGtYKEe",
  "key5": "3if4MZ1FVBN96wstc3HyDhHa7TTEx9as6qSdGrCCJzhQ3XX4EgPguADHp2BdZPGee6aAAVWDUMp4kvp5gvGrdFuC",
  "key6": "5FcLsQzg56dtgq62bxBV15aR7xwN5oox97xeqP3Pbwd96wGuLukosMLu3XvwK1YT6sFLLSF99xGVwFyWDiX8Xa94",
  "key7": "2fj8QA5cbLQhDQSGyFZSiCX3XKP6mUbaom8PB4rr7afRkeZk8qLm8dpKxQZ3Sx7F9LMeFiTEPSsbfvuC2SMMECKq",
  "key8": "4kzSqU8tdnovpH1eX89LUpkQSwh1EenyyBEL8LvcuQoK3DMHNVsAXcj132j9G2MkrF5jK43RaEpk17q1JydcVVGY",
  "key9": "5zjuzKWxpLC2NepFjWdJaEUtGn4DQRqCPqFWub1xTKfJqbFYEbU1NxsZenntzzALVT2qBrsUGfdSUsX3JkZWf6eS",
  "key10": "5shEA6GgPDkWfHP52gNwcuU3VqgK1Ro1N2AvRptKtDad3CDVnvwppQfRhZek5g5KTeDENFFUYsfCeWSZZTgSdini",
  "key11": "3Exhv6DS5JNgsuu7tYXeD3T3t9U77scPsLandwrHzfyPk5XFD6mVmMhZT1caqe2uEthGzFkZCiks8cj7TRCxVpsB",
  "key12": "4BeY4nnFQcuznDvRxdVRKmEpsAmCQenN8smpjJ5Gf1pGgHUFRwDrrPXYgzPzY6H8DJJxQRiRGzd8aHtVsXqgVRZ1",
  "key13": "wBgmZG8vNJcuwA1B79ffLsNiW9yRQwyH7SbQ7KQRJmCVwR23VVsSFRS27SnF5WrrwYosZdBxdxc9CvFyLSgr8Gs",
  "key14": "3HXHpJTajXuk1o5TRebkYihSv5mgSQEWCDUVTzwBEv8QkwK7s9tjnWYzwLYQPELunTQTkEP2FA1fr9o9i8AJndum",
  "key15": "yiTuw35PWoH8NyJxAq8gpLkF7YgXKm4xWi6QJHEsPAcbWbBftr6WsuFZpBa6qKbBqCxcyeVK1o6gkVUHhRieNf7",
  "key16": "5rCBvaqMCbX21Vpr7aenuB3dXvJUvuFooHeLStqvcFKBT6G4rAJTMdwiNrbjUYZaeoX2musjB7TYLnEbfGzdhbzb",
  "key17": "3HhK7fDH117org54LFcLxRKoDHFfNN91TuxTcn49vj8unLpvwJi2fEAJZV8sc4riWYLERZp7isfeXnvu9GJUayd6",
  "key18": "3pL9U4YQZyMD3yMek6T6Kx9kPdWyNdPgitiaFGh3CT87stGgRS9JLBqDx8CT9VjBYye9nU1eKVwCQjjLNJRsq2Nm",
  "key19": "23wL1eBHrd92Qy3Nkkne3sUD2Ft6BS94jY7SHXXLKBoWfCypVs4XBbHAhNrwy9q8RGYtry9Si5MSagYSSucd5e2c",
  "key20": "mzU8kDXUcKvEbd2KNNjyQsp7D1Vds1dNTSiBP8dmSB5u2rtCvMyvkqLZHnte13sLrzemRG6ukCco8g39pZHX1F6",
  "key21": "4J7te8hsK55Vhaxm5SkWutRyyKg57zmwGP2ri9aLZQALsESnKBihwKZy4YLpXqVmJK7AbtUQ3WjgVA6Uz2NQTdWK",
  "key22": "nKoc85pyui1rXTKhWPKcW71BdEcgGtjVFQPWEJ2dgcyhHxrCEQLZvUSN8ATB4ySMnC2rNEQJJh6XZyYkMwxWQnG",
  "key23": "4kHdSPoziYsHmDvcnHrVsvCC5D4FSryZjxCu8u6NCyQajuNHMaTmVxudytMHdrdoZeeC61t7TjWAW7PXKfL57ZSs",
  "key24": "2CueHJPcbVsoSH1RMB4kLhCaLrxD9PweG1jHU72WjHkeeESB793idPWbsJvn738ZY3DJ4fyXCo5JUSvZFzUeTeVM",
  "key25": "3Ta3NxHQ377Nf3AYSeje1FEsAvWJbfPViKKbz2TrTMvyGa1eKFiV6SvfTSdcxwS3DUETFR9d27gR51h7ezuP3hpZ",
  "key26": "4XtmLUNYCwAs5pcyTPYczoMWubLkZcwsq8t2PhTC6MP7xVSqQY4kdXuHt1VyoM3nVowgKgrkzo7UfHNZz1wZMbNr",
  "key27": "4nUQSUEzSkduWBDQZEpmErJv8Q4brwJQVFmgqrxr6PzPnh7W5T2M6wQd5vMnEVcFqKzkNhh7VP3phyueDxsCvy3E",
  "key28": "2FK3L616JtQtxJtUFQkvz7m2md8YQnqRan65Pox9uW37sadaHvPqmfw6oK9hLQr5oDLg1wezGEeKk6ictyzSnJ1u",
  "key29": "4gWDLjAunwvCZjUEY1zk2yX8x8aERrtPgv2RKJi7s76tJ4HgHZCxgYkCMK3pWtJjhdaS2u3PsqxxPJs7sJXGRqan",
  "key30": "2zpPa2VuCfuzeCmu4Ja5bBJu8tpTQ8yqjxmETdBuwe3iC9Qu1b4Fzvhjq8RWSVUarMUBzwFofhAQ57rgtk5s38LZ",
  "key31": "fXDMkGVszEBMj8keNey16ysBVEEDShPFByEyoeb6PHF4yM8jHXk11HxaY15nazE7k3dJ4RaxgC5zjhJymqWMhJ3",
  "key32": "3EtXNHnU6Sc7ocJb2LH97XaLnkb4ndrbycFT98dfTDKT65RisfQnM23f2tKifwpGjds1iTntdJAq4Gx69DN1GDgT",
  "key33": "61agHnwifxYb7WK2UmGh66bqtfrEmGzsGDnSyMLQHEH4knP7h8V7BPoWm6MLUTHJAmLBHTLmZsTuQaTofUu8fzoy",
  "key34": "8MHPurCEs7qd5TD7uRd3J5mNVE5yE6apnsjiJ7UBAxiSnw6TYNrXWawgNSDxRwAjuYnpqcyzScF31VaBT2gVd37",
  "key35": "3BZiMgDiYASAUQ58BctuCLZdkjtqkjzDsWnV43HgvewZUMaxr7WGDM56TrhgzE1UrxaZuN2sfc8WuY6BkbNZe7qh",
  "key36": "75XjKxszRWL1VJJB5puoSAKv3ejZDFCYnwHNgd61Gc6baK1yQfNYZAR4k9TLGhqEseEYsi4k5ATqUyANSVFhZYc",
  "key37": "4FohJHBbCWDXkiRtGyENQVrMMNE696m5CDWAgC9JgPBsvCnTsvMgvZfqD6kJ8i3XoDamLq4nze77ngbSKXd4KyV8",
  "key38": "27NaCNp3qVe6hVgtAkQZdTG2PQtcUKCa3SyUNQoUyy6QFnrdq2EU1gabRMBMJJj5gBYNm73ed8jtpn5Dw5WUwDR1",
  "key39": "4po7EajnUwSygYyPyebCcMCFCphtVntBaVqA3ycE8hYeSg8eH671xUPDXuwPEXv4NWvMnDVGGS2eqHPw2qKan1V",
  "key40": "2NGdjmpJF4KdUwwtRXMa82TCYNKgmSQ7cLwogrv5UmepBqpSqwto2HPX82idLoarHm2obTPX3wm5ZLw8mKC5u2XU",
  "key41": "4Jcdpe1Ef6cmkZAWTMexvG5LYAPPXuXhg48R5DPTUhpvMguCkNHh3XxAweC3imtDaGEGDdDPe6CDrCkzsgB3RJHm",
  "key42": "2DBfhDrGP3isG5jYhaDtgJnWMzKBMD1yN2YbPxHvJJTDiVgp5iVpqJKfa3zcjpvF494ocHg84Z2bKmXzeU5GpsmP",
  "key43": "2LGEpx2FeG6NfC2GvKUxByQUnMnnt2Do3g4TKRYRfcZcAG7gVmNArQctvQSHmc6oCRmx6xBwitAtBhAvtMNvy7Bh",
  "key44": "8PR6xbtY7FkRXPVLDeNtAmwjFjNoHTYYXVuQTkw8K5gtQEJkRMU4pRGeY6uhV4VEhq7caP2a2z5SRGo6LryPC9A",
  "key45": "aGmBFRyQhsUNGL8WFnmXLTZuBStEpUdkAbxeurk3jWuDpiFtk5ksTALdDFG95P4vhfgPgo4SSfQTjS48uEsL2r1",
  "key46": "4o4adhgdAAb36VYaQqmB5tnzSxdqxKQ2u9T7HNmgK3XRmTkL1p1UqYp7bvSW4n38TwSWwC4JCj8LxdLuAYSDn9Vu"
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
