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
    "jp49vbZCcn5qCquhSchJWMMpGKe5MzDr3ZTMHMsbn1gvvvWEZN3QwR2QJ4Us1SMYcfAe1eyCjSCzJjT8XamNLZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXgqufpAuhxRvXuRP71SNWhdUAtC3hFdFSmFydZzGiGDX4RxQg5TVQWjx2TpFHtM9fmzHhV9MK6bxBEahqaGx2h",
  "key1": "31bYVCjET4vBk5oHDupMjiZhbNSdJtzvMQkUZ9brY7t532xYHKfqEsvzvpWJfCFYHVe7zMurRsN5uS1QqwDgah68",
  "key2": "2RMA1LXYut1FRRNMKjMRDxkjzhG6HWRTvBvDG3qXMtQggeW5nqRUnAe6VfD1uvXgqDzhfS6XUWAwcc5psQNxjazd",
  "key3": "3p26pbWGy6SP7dHZ63Y37R1TLSh3Xt1j7NYS3X1hcGrk6B8EFDauBfAydYYWF2od8TLgEbm6gmBxHm7XSBPWvwg7",
  "key4": "4SNe6YYA5YxBD8JH6sZ2CxPY98QD43cVB83E1yA3M37bSnfvPim3YZs6sU5VZM54gM4xvsG6EzonrAauArHUK5o7",
  "key5": "289nHezRY4V1ugdzNtWJ8mpo7DAcGhfHBFQVxEjkKxqUYDz7t1RRtLcohtd1sRJtzCeRFb25GRAYfB5DzyXGYHEb",
  "key6": "MT8bERq84nLnbeMXv6sPYbifMVENXdkmDCHRLoUEDZJuC6jdpWpgTCSew24xpp7jVqjcwpRtABKpi1R5qvhjHgY",
  "key7": "4Shda11XSXjJuSiSAu856FDFJXFm5Ba6wtbUPnoTeL7kgeuxZ3xESG5q6CTbQzmnPdXEDLXU2CfpfwkFgohEy2TT",
  "key8": "fHDNJ7t5PCdPcJE6YG1x3hnC925n6iQPfiyqJjicRMJZe2kcPQ7b5nmPsbz4tj2eB21gUu4NnCTwAMVKTx8TQQU",
  "key9": "4pUYddJWatMKNEeo6kSzbdV4qCALF167bQ7KARjW8xqMYWTRNYogg7P5biZLuxGJ7JPSVaLiAjEmA6v5cKCzNqyC",
  "key10": "371eKRYPLwxyRYmZSVhPP77JkD3tk9jMR5mMNWGFhVGG1Fhzs6ncjREKp7nrtGtC6s6rjh8UdysdPWzuF5kjtdyc",
  "key11": "26EvmVFrsJzwq1GZCYLwteLpQQSfNhAsbZTU3j7e3Man986MF3TexzPQmLCLEPc3MNdZPjYDAWVYheFN11WPVEgF",
  "key12": "3Th9cMAB2643ArbPyZ7nkeSYbyJ9dy3SHLPb6cNAmZq9TucVKoZkuoMqXVoTvBJfCBJgPDXZSPWHio6mg7ED3YNi",
  "key13": "2T2UECJaWmGRayd17gJ4FqnW39nL3Y3vGXjUYkqagD4nU7dCNG3vNxX9XbXW5RQXbzT7Z14yCFSBAWAyxJrSoLSa",
  "key14": "2GwTcvpkkCdTPQAYfgHYsz9CtZCn7yCgrYSyFKqB9AwTLdCXHWE9EV338wk6TB1fiNTdR7MQarm3x7Z6nMHoCyDj",
  "key15": "3g95iRou68wi3h87YUu2EK3JeSuJXUjKv1ipcuMSEDrSwGi6g4KyzXQGcTgoupfeKWGAf2MugXroGUprFiUkQvx6",
  "key16": "5aqBFp4TQ55hmH2d4tu3xy76vzuEP36jXPkZ9k1Ed2VzEzC7gNmKS2QacKfPYiqtw34JhEAj5uNsPePsczKKFHY6",
  "key17": "3KdpreWwdHnW38HeA9EsixiTstqx1dUGgKQqx8YzM9Wx7Er9WhQJ131zi4ewZXP4YLBG8YZdPgAw2hFvfuPJ5AW9",
  "key18": "gkzvAPsuUChFn9ZWwRiKkTuPg39P46DE6LkDuBoa2KqwmrAMTUEAadfX4GkYDMyUvPdeauPK6nyhofTiL7HirYQ",
  "key19": "i5tihMszvc13CndUprTYmiSmTQ8dKCqWquFGSFvQhXxaHDrawVvsJyZY2fwNPchnsUuSyoSY73utFZTK8oUSAMv",
  "key20": "qcp6sLpR25QjFoGwZrbx8r8NQXgTVcwawUxqr1cg42sLbKBxNZDc698GLq2pzNUKgfVoNFjPbUAw266iWDKE7cR",
  "key21": "3kt8QiKim84ZEfmPiX2XFdYjmnVrLgcVLZsjdYDw7qonc91CMFWDfoTdUe1RhPHBynWoAsX2ekwr2XPWPGVKrBNd",
  "key22": "amVz4sBQfqCNx4XkKhoepkF7XKvCeC46SCHDWgdyrZSPfqUy5i48Cemsi74z2Z9FkSrnB84b6ShfSH4H2wtEDaL",
  "key23": "61V42oDYGp3zncmcuG3Z5HKAd5V1QcJmfy1ybBn2DiNbydWGrzeE5LeL4LpzqKL7FxjeRuNziCycaXyqTmBU7MNS",
  "key24": "3g8ALRzFRwi9nEHaZdiE2uu65JKUEhchBMQnG7xo56LfkZwDVx5qCBk4vhmP34D4gBmyBstfMbp7R6o4gNKKb2hc",
  "key25": "28SAyhvPjz19BRX84cJ9SiujZTJdxybVom6SGTaFdzsbUGjc7LG6fPMGSt11n5M8oyFmQKQTfJD5VFnCbfNLmLAn",
  "key26": "5DndR2rEKRMZyijLWD1Wbh88iSgQNELQ8rcKf9bAjnx7aztPveHmZEN29pzWSHaj8RY9G1s1f9p6soL59ji1ihQf",
  "key27": "4Ryzwq7VWVYTi6uMvuftrgYKscuei2iMfLANSRCMaWanrCQBHm63XxAJQVMBFPi51dC93C8F854cVueLSJpsKHZr",
  "key28": "ph6SijKw8h9cFFJht4GH2ru2zajFBsBw1XKpd3mFVZKctcZUjnCFndgFW8uSzvyCV4sC8x6poN1BDmFevnp3HUc",
  "key29": "AYyFjtTgwJ1Vfn5TWDUuRWWKxPGDRe2TtGvYoSNrxjefHn4XGkLYEYmjK8dJS5zoXRXa9W7UcvuTr1e21TPPc6U",
  "key30": "ezXzuiFPLHHDEHy9i9322wrzwRbhKFWgDqxBfhc85m5nNP5oZ8EakD9iuXXHT9vTwoQwVbJagWqSDfvw1CiBWMp",
  "key31": "HgsFYsm5kv3CKHWdE1Yb6KjwWCjDAi2kBw53LyHK13EjzXgzSvaP7mfCjHuMu8EHs9Vi11ZuR19qJN1cbXKdeG9",
  "key32": "5HwiNtURoLHNoPKcJSxRVxMx5pQmLLNgG2h1ix8TLHuGTz7MmdxigRYsTp79rCdVPSS45mVsTUWt54gmW1RCs3nW",
  "key33": "4yUdsPeuReD6acmoxJk1d1PKVeEBr9L1TPCcM6KvjoQsCzneRc4WtJL8CxYaKaMSXmwey1R6hbBVQvexYX877soX",
  "key34": "3ixpoGXfqgcyZS8WUaKDJkKmfqQpFY7pAfLquTG97xLYvZZSN6U4nKfqUndy6kj7HJZ5g9imZEs8prziXBqoSueG",
  "key35": "GA3EEVuAPJWrjL2VkYrJ534FvWzAf3fecJsm76amQPNJ7DZS86V1DipQeJV45zdp59YHSM1hNw3RoR2QRkg4oDo",
  "key36": "3xqz8GisSMpXQRaXhG4Jx1iLkmRx44PsP3MBwWdLp9gQZbTWAzUJ2SiE3XjtreefDesNMd7FMeJZZHURRXEc8dtF"
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
