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
    "2fTT34gpLNpr6JKzKaHNdUrL9ZXAjhXGaYgb1jL7UGeKzb6w5eipr61VdRkYHv85bT2hmBtprQuD1BD26twaWdMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zn3N6sbUmJnJyduQdTraF3Q172uGQtgmbpTyy1zbzxQyzKLNeAPxQVgdbSzj8Bpw4wenp1Ft4PUyhLpb9ftfDh1",
  "key1": "4GyeveEr22Nqt1gwWEysLiWE5sDre3tZFaLAMMekHdxKbgExPK6mgFX3EWKrApzbm44Mf3JjxSJMaVU4sFzcUmEz",
  "key2": "3yDS4mQeWrGP2WxKmbFuRJ8mHMW8SavmCBGm7yxhsnpK9nxrvManirtuu1s4oh7Co4ejReoi5jevwmjB2eWQEhG9",
  "key3": "2wu6f4sxEcCSGmy2WmUAqhjX28hc2fmhdUamogtVfKaaDiTLCy8GRuiaPcEdVRuqMXKRt915d8xNz4Xf3KKqj1GG",
  "key4": "2Szfx41hMPfnnC6tH6Eh1SuQRzcbG2AbNLY3Y4bokEWGMf4kg6BphE6WFSxD3u7Hj66rCKdscS1gVnpzM92etY8R",
  "key5": "64GjFdpw3Rt9Rm1T82LQyBCh81wug2o4FjJpwwYyMZScGAMnVAJ7F9xYCq1ijWbpJCrCohGkD83ZaUXi7zJbGKkD",
  "key6": "59j28wycm6fAdstDCS1t4SqZiZA3wLSePiStVXUwjevpkhsv2stKTiT4W4yLKERzS7jYzeLu9GL3omGy4a74VVNP",
  "key7": "6131Jp11N1C8QP32HfQvMSwBT3fUoj1ovYtH9fretrsJsqFKYV8CFX7VZ9HHKc7zmNKhfXDJwLTetqoTKqERrCKc",
  "key8": "561BoA23TdyAu6Hgt5N3tRNdcUSxT3oQKCQs4ooTG1A355qFvqzVySSnU22XpnphpEB5Sxxqa11G4C4rAV5nLymG",
  "key9": "xjncEvFwWEWA7vGH2mV84ecmRWn1Cb9m3T5NyaKpZEPFk7kvz7M87v86PSuVzQhW2DDDHmQ4PwMvmHBhC43bx6t",
  "key10": "5w7WpaCvvjoMMUNBxVn7fDAjawVBpv1CkcAPi7zSm9p5qb8mzkuqijsG6AnPzmdbNhv7PQ38euLvdBXiKeeoAdx5",
  "key11": "5tSnqMMrubHX92fvgME3tGaqBqNV87et5UWJe2VHj4AXo1mBEdboSybSVUsPfZm71wtRFrN53zJ1E7tdK3s6xzb7",
  "key12": "42mC2pBSy7vyNMR6kPgxR5EEGqDr1KfdHrCrDUsr2kZJre3u8A1rwdKtdwWEzYSzmPAhQGWGQXmeAdkjoT42oJvo",
  "key13": "5VZQY6kovJdmEhhKS18VihfUbZANRo9YepD4dZezsEz5W3do4V9cwjXPwr7v7u5awwzkZMtktKBYbQUQDzcJazVT",
  "key14": "4VnDHLNyVLpj5hHiKs4ge4hmSw128jMpSXK3Mc2VnPbsHyDccHy6kCupJq7RQMWzBGEairYoX16C9Tr4THNyY6Hp",
  "key15": "3b8gSAVqWC2qc6eZgFeKEKWFA4PduqiJ2hQDGLExkAVjUSRwaCPyyCo5tiyUp2N2CNyABSD9PqqCvGx2xhBT93Dv",
  "key16": "4vbRkrrevcMPfwjz1KKb9m228y56KYTwvr6yCVBJZD3Xm9cpggzDsQnaKibSNCJ2QT7bAZ8kKgBXCTvCWbe7A6vc",
  "key17": "miwvHkPSYyBuX2PWfov12YDZq6GgGihQ3ypvVkNvCc1bWKNcxvujFeWaQRbwCNA7GaSNHcz44r4jXR5rQfaryJg",
  "key18": "3xcFEMBTEY5uZsosHqQcXmuaQKocV5x2rxNSLUUHDrjD5h4zaWqdtBisc9jvpykga5e41uznoHHf1aZmWjfVPctS",
  "key19": "5Yc9mNzwyWCzEw1rx6XdRbLXehR6iy6YTcTtXjVYDsxNvYxhnWLMmGEcSL8TpSb9jkQzZBEagGMSeG2YuN6E2nX8",
  "key20": "2cWZN2bqK4AEKviMsKsSmsJee6mRPN7t3WwAirVTYhe5ERACyBGMWg8dQQRMn4Yu3Y9sFr1TXhtHUEXduahAMsjt",
  "key21": "4s7MopaB1akX8qAYYcUtGZh9waQxUdyqTdN3yBX4Pvo4hwJE7bjCMcdPSQQTMLoJo7PiezFyPbushR4yET1JnQf9",
  "key22": "4cxwRaCFzx6iAeLSJ8eqDmp93KJBg8EromozQuRjiSsZRUaXQWwwnFi4S17KKGhEshRHS5hbZTBkzSTVxFJeFGor",
  "key23": "oYggeKa9yjFaWTAkb8FKyNNvSPthyL5HgVe17JCf5KgCJUDqNuD9ZoVqJgn1GYVbAYzKyfD43zLoRZyyfTixVq3",
  "key24": "5mu1PJCRfeF6V1u963puoRiS299hKBiq5yMdGcBfHiJaApUYxw2xM8NGi2kRjFv1wcJrxGDdP9cYJkFe6dVwR8UM",
  "key25": "4puUJU3WEkV6xkuV9u2gn9FGCN7QYQ2zVskK3F8xuHrRvJ3BTW5ahF9tQRFfhaif5SicrQySE9Cg6zkUBwot14hi",
  "key26": "2YspdJ6Ttn8rydaTw32Ru3pLpcZfwgPc3Dy5jyTTuChpdSEkbPofRyrxqyy6DER3zEbg2QRdXgfjtQkmKvFW8b5J",
  "key27": "fgJ4A8mFhyQH4BbrYwhYKvzhhM7HuAKKd4fTcCnhajCijT68xGyqfk4keMJGnxbPZZMfKcGR25MeQURcWNukKpd",
  "key28": "nPg8wcfAc2WqY7MBeuxk7Wpr2AVcDhXf4oPABPaMQLBNZsDsyatjBVHRpi27qmXxM6DBGC1gNMfV6M1BaLtQAME",
  "key29": "3ceCSSpE3cH8XQobQqndu5GWhSKMVCQE9eHc1JqXNRCehgGccrvGaqFiE9ih44VzGYKZFwxbg5Bj15qhWGFuxo98",
  "key30": "4EfSy352bHTF3EFqanRYeFXTCp8MkkSwFCT8JY5JaDu71uuqYfhVBXA6sk3n6gQi7kNdcDeDiL3YP7vhJmHiGPjz",
  "key31": "r56JYR5C8Ek9aHhqjbYV9qtWbmBgpTgosXPtLdweAVMuXVXjhE8eF7WnFc7kcpiGUWhA2hY6Pt8RpGidz2Kuejj",
  "key32": "239WdFsjpkGCApaK4erMCnN1od24ZC32ADbzhxyy9geFwDwu85JjncwLy1tvQxECSU8ZDknC6rhg4qZQSWcNuPsD",
  "key33": "58H4u48RNEwCueKgst6dZQnps2Q5c24BcGF4XDecjNx2NztwANWZSqxLQqH5bG7ZR3SovgRNdRia8QPr4gNSdYuw",
  "key34": "5CXSLYjzRuaKrHZPrLuEDH22pg1Js9KMGJNkrcQNge5wgEZYhFpM45BjMVYYofaF7SwviAwcQbhAkQVgj8WsL6ub",
  "key35": "33zWaBhKJvLCp9iMFJxTsmuzeKDaTvJ5izYd8yH2bVSnzFf8azEyPWRgEL4tutDzqE32UAxz41BCGs11DPVDMtgd",
  "key36": "3dj9rhu7W12oUCyrg8XrU2GFoSJct3poXMPYbEk3PGBBG6Ep7VAdAYDstCH3oXTi7ED9FUS8z8L88tMxwwx5kP2S",
  "key37": "4DsBbB5wsNJXW8yjKvyxfqaVJsektpSwCLKJYBfCvyGfKQcwzqKP3vzfSuPBFQFb3efyUk77jLhibebXhJifVTpF",
  "key38": "2PnsxcXjibTZXWnJcov9koymNwdFZ3EgFqCH7hDaCoacLrHC8P7oJKd3F4PENp7Ji7ynsyhUwQ48NwSfc6YCJ84e",
  "key39": "2qbFiGtpgvLgia6kBLiyPvpFnhH97yQLUKqNHSCMuXkf3LBY6ei7yHqvtaX6vgCxJSz5iWYgzRmtmJipf9SNJsEL",
  "key40": "5Eb1C3NLibuHZdun3HvoPZmhGbHvegLqGHRgLBxSXscyGthTWgSfNaK7RTB9Mop85pJst5SrwHii4goozwhuyN3w",
  "key41": "JuypSPkAxv4nha9fczH6d58brk31cx154dRym4Se6yQepBwduyRSRh8G21ne6Mm2grb2RqRfvMe2bUVgJKZpg9L",
  "key42": "XhTacWDrqF5VrXz3R396vChHpZZjSLdJFf1xFpxMqgSnvea2AzV5CVw9vvYGQJpcMgQZTLJsywRYXV7LvRDMatH",
  "key43": "4XUgW6Ndg6aTMdy4L24FJyD6SS4ZtRAAHRRdvztFA1Z1n6J6jWYgP3iL38gXnebaKWUDnzWhvushq3HLs4Qf6Zeq",
  "key44": "2RZw5xqihD6MBH9WVRmAzyZZcD8Nrfwr2YKe8vBtQfWrvB2Nam7ScqbyDkT2gozC1hzt9XgAtHRRBnjj5qirZkVv",
  "key45": "2MukTQ9oka1WjEtY3xYvMV74ePNioyvxP7G8ZwrtAstjHd1dQGrjCZdJfKtZynduiT88DhoCQHY6mGJJfQF6UrR6",
  "key46": "puzz8HXvV83TkFKcgdPFVS4Qs2vEfVDPEoavZVKVJWnfhuUe8wtahp3iY3N7bt93eYUp7Kg6dPQbQcpiHyzuNFQ"
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
