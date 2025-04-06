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
    "4ARVRA1bPEbWtDgnm4Zf9is3dBaN5Ss1vWMpXADqhZYdVXkGEKdcW1QakYuQsDMd6BqzRbqxpjHe5Etia1SSRBAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nw9GbCmaNUga4EwmJDYaDVSLHEUpV4WcpxKK1jgBwcD2FMy3CeaViha1NF1QE1QepKX9vd8GmgeZkbp3y6oDxTh",
  "key1": "3ox5LoMEcNwT8XW56myU2rrRzPxugPQPTzt3NsJ6wTp2JhhkeYfQLGwq8Jj9JoqEQCV5rJ6jNawxqhsCfZzc38Mc",
  "key2": "4vF1wjNsVLzaob2xwTALrCQDgRNNt2PkMT6AjhuZjUQy6zcTmexVGhrMEQrCpCVmdhdnurqxDJ1oexbKcqnJNbau",
  "key3": "d6BsVy6LohyyoyKdA4LDbetX9Sx4L2mn2ujWkZB7nUhpKcWbXxyaY7SojKR3Gkwj2hUW3VJJ442DvdhUKNQFVy1",
  "key4": "3Pez9r7cmtB8Ehum7EWrUBsmyEGfAReoq99tKRKHrasV1fk25xKs92SjWomBvamdgS2n1sMLLCDN8ruHwmoj3kJK",
  "key5": "2JnYA3S4UR8dGEjnxGZ7TMMxnMVUYpnhfeGTXhxwuu95Yu3DBQUV7L94QZNg7SWG2RH3WLwsaTPr98qHJu12YbwJ",
  "key6": "ADGPaASBdfiz8bun2GmeSPRps77ukj1DmBsG9NaasRvxmzNJYtLr8krBrL1yZYfF6SX89LzeFa7qqj4odwcUayW",
  "key7": "NdhR2r2oPs9EZrKccZK5LvGhBUAYMXwsAu3E3atkcKd1co2TR2hz2hLiLkBixjqkFUGmydzQz1naMUqjCqMTHUu",
  "key8": "2adqrgnwcLg4dRFWf46pYKDCEx4XVjLUEPTL2x6RuvgMt2i12hjrY3rEyJKPL5iaeA4rzXq6vUKZ5krvqLxbkCjU",
  "key9": "57HiVAreFTHhjqdEy97M5i1R717xnR3gcccKvQj2yezFN65koinqshDivpokscgWqup958Vx91S2nZaBbfxtWtP7",
  "key10": "ELerB8e4EfmstikEqHMauJA2qbpuNphzyfhCJ2YJfou1nwrvxRCsQkWYdRtvDNkvyNFuEUNVwyqNHnjt363RqhU",
  "key11": "3ydMhkbAqeGduYUje3aaYDp3vawwjNtzFYVwiKjbuHMQrV1JxtVNsMLt4v2uW3oubbsdie97xFiEWyF9HcGy3Xx5",
  "key12": "5k2mCYMdoeVRHLePeaizViWUzD4fgeQJ1MdLo3b5uN11WRXWPYm4mVY61aT3SYxbt86taMcNfeKwLx6P2G1qrfa8",
  "key13": "2uvAi6TANijf4tqVutaBr8NCgwRhd5kPT8kfNajGSPYWLQDZqc1QQqYUQeKqAykHBM6PM6BcJjBF4qoMDjDJnbGc",
  "key14": "4ZrL9UW2F14oH7gep6BEF4aAH767TFkbC8zcQDawfTXkfgPPgTMGiqZpZs6TtM17pMTWQk79Z7emS7TTStVNxsnB",
  "key15": "2eKt5PscuGrsEZ9vizQ8WXRyw8BrcWMYFaZSHTBfjnTuUnzKoG7CwyZ6bQuFtKNY6BoFLCm3oz3iYB3Zq5LDLvJH",
  "key16": "hDkcaYwVKHwqUTiRKP3khMCVTUmj6f5EmfBgWShDYD88vCrR65twmvT9kAgv7BycwU41MoACuPvg6JKr6kpmtx4",
  "key17": "2Gi3JqU5T3kDgXSvxNy2FPks1WDiyYVHahJFRAoJ53jxDofe6TyUSToyqjwXP4SLp7cHR8hfyDn6fCYR2LpmXCJ3",
  "key18": "1euqi7J7DpQTe6gn23JLb9ghkbiAD1E23v4f1LxQfdSQDxVmWH5Xc9FbypyNxXccK6czbL9xJUGGb7Xr9BDRvAN",
  "key19": "3rd5SNwbqwN6qXwKqEGdBFZ9MrcobavP25RvYVoS14FWtsqDHuCEkbN9MgbTsZPXqjj6Uqek8gooLSemtmhyk4s5",
  "key20": "3zpvG8UwDPYNeYqeqPgauP9nfpUonTLyKEioA9oFLv7dAPvEGKxuH77UNocUiTAWd8rSe5s5423ZGPtzVgEEfDXa",
  "key21": "43zjq5hgGfrQAVBGyNrJNSV9TKHZzCZNMjXjYiAAwrm9WxzW9TfbiD2xEfQPN56tF3L588Crw3hBjhC6Em245gN7",
  "key22": "2LDTF3rNNcmz7nZPiL9ZAJESAaWEV64zRBjwTYwMTSsevbckxbMQc5D1gdBPVLg1gLaRFbJp7wb1AYdESorq448v",
  "key23": "4qH7auFbb8iRJFg4RLmJsgB4UuddH5ZXAnHsrqHN6b18MAuGtxTCY6Yu67iBWg6D2ziRH3Fus84gP9JVX85ngwN1",
  "key24": "2HFX3JdwnxEPtRKxTW9rBYbCbFGwuBhmLf1AbbZygLqHGgDpoyLjVZfZ64rtzcg1ey1AGikpve6L424zkqBSsMho",
  "key25": "48f9uBPxoY3v3ngbRqdwY2hmnQZ8kj3eUVpSenjJGmkdKG56ME8LidJKdQkhHuWy5RimoSu1CjQmDfWMX8YNL4iF",
  "key26": "2nLGHXkY2NoH4JGzanDYJW4WoAfK2JFRAki4FCVZryUac59NUyRUgFXqnSMAnm8pMKiefpCCzKPzDwTkbVjK5qwG",
  "key27": "4hwpGmLmEXCPUQ9p2DizrRzJcg1biXADTEuuZ7139KZwRVkFX4SFmKrU5Lot9xLuDWgtTRAs6YCHgbCtzhH6Z4ga",
  "key28": "3mGg2SrnHeVLDuCs4jj1wkRbfGtyKj5bosnHs9EigxkJ8qxSd5FRmXG1gRKZsiUfDqGtRkZWFAuNx9qykoDkrerU",
  "key29": "3VnUHt2vioSwuaDRnxaa1KFAEfKiu92tGcZ94oabybkB3PcgyaonRABNgsZy9b9gBEdnZkQVRUmya3UHcjfXuYgE",
  "key30": "5caYTSZBXowXy1ccfi5tYexhDDcjS1cpd53FGjYh6f3GQWNLKP2RXw2XuBLJLr9X89hjCQisuqfwLVFEmKSk9zXj",
  "key31": "4b9tbYT7wUknQ7JpJKf4xm3rWv7AWCfqRTaBZuaKGnPHA4Gg93LVNzTNaoxMRzE8oKrPs52J9477maFt96iH8Rcg",
  "key32": "cTGaHmtFvST2WXSwWb6Tevi9pEdFKkxESnjFU9tLu2HMQ4HzkzctvoWJUNxYqSMhSWNvyXjKzweyQkF5jfgs7oy",
  "key33": "47DpKKgRFWJYMM5BwQQWPid1upMgmTHxEPKzsCQ88W4yi6ovcPza6xLL5UtLD5hkhZgr7bWyimqz5GF77tmLGQEJ",
  "key34": "5cVFmccmCDnBeB88Ae7RxaeneidhyZNGrNbbvqpX6zWty5UQL9LiRBUFtiDF5UFV8guM1K4JP38ukRFVzrvTqMj5",
  "key35": "3aYMw1xYVZLFtncfyuBmckoQ3F7STnkLhdepLkZum9VLEUeKhjV3HpgB7tJUdmfJaPeVuHdAi1FGuheqxpA4PAB6",
  "key36": "564t2qqqSm1pj1EwA3Rjp1bPibbrDv5Mu7axmhD3kTF6zbYQfhqhMxGBx7KgSwGSKxNrg65Fo4En2CBiwB4EJ18N",
  "key37": "otHPwhDeDLF4eLao9rN9y7TV6WqFSiTCmYGf1EreZRphpPKkwkWbMVD8cp6QGEchBBzaYFpuDAJNvVjXjgVtsFV",
  "key38": "5zw6j8kX8dTJxsW68vzCEHdhUTve4vbxsPP4WYA43gLnoK6VdFtCLVULgvLnUUHQqMnUjtXBV643Q6ba3Xz5ZZFE",
  "key39": "5vTNsu8b2pFxpKDY4Qbkhou3ouqCpksHYXyMjbZieBBg4MYNH3kycFidBHvt4cbHY4KyFZd9G7DFTpr5BRCdSMSL",
  "key40": "5Ro55chr66DLtTKdKz6VaKtTb7dNeHAhpJcAqB5JA9BvhT5CdqhdXnhFkVChTCAJNGhvPd5MdhGZXvamgw6jQLPJ",
  "key41": "3y5Ptz8geuCAZacUjaQDLznLVaMaANXHYdXTyN7rtJtvhfxdLHXisD4wkfj5Vn4sAQzDo3JgZSUbLkDShYXjPAj6",
  "key42": "4z8Z5ijrLgDhLHGtTMbLcFyk59qCqfPWZFKdQZPpZ4XUD9E2wubHSy9WUoPofScwYqvTDTZk8bZXQXFacfbSybpA",
  "key43": "5okzHQ46vGj6LUfnzNp7Q6EGoNXGv2JV4mzceCPXq4g5eUakQrpf1wT9tqs7SX8KreRohZg4TNoe7wzWDcL5XHhU",
  "key44": "5YCJUGhzretPhKWQhuWGa3hpnaVQTeLVXhTKxPftq3EaPYCwYdyb1ZmC2iyQ48vWW1s8RVaEyNfCEsCs31Eo1Fvg"
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
