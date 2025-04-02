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
    "wX91SQxqrWyFzeou6a7dNWradcHXtzkcwnfwYGhxmBKEvXxMfBQ1YNwxAwBrdvFcY5VUwh5xQLL8gDZZ18xJ25e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37BxUvfs2zzbm2BXJhtbohTuTH7K5HcWYhyoF9bwfGGambuXYT4woUYTYfLHazPpvfVCMXAYbEx4HUhd3trVVP4Y",
  "key1": "4GibenEGa2sVct2dCVkjKjvjhYPzFPV6by7nxDAhziG8cJvtquXqWNRSw9gHUT1o4azfnB4Sj3ANXMiTD8V3TUGe",
  "key2": "61wWZRJFeX3jesDhJXmXSYMFLU3kafh3wjJByTNxkbdSzDm1Ucv8rEpngbeUwVtRocTmPPzVvKWoM17XXmPEWMpv",
  "key3": "59VVjv11EsReNgCTeUzjcoxxEsWAfuwuUtGYhqvaanFjQsQUbnFWMmbTB6xDG4KDM6cKzH3URJJmwnpLde9aLyLv",
  "key4": "BFQBpCfxJvK6Anv3gD588nncdzoEtAhNcc8ePx9SrUAWdgM5DXe7rEmvZUNhFrFg9U4asuSDkRG3gSMdqrd5mto",
  "key5": "8sDQmr8MzdBAoRJFvzsrjoviMrH9tmfR5ySWQAAWHEDkFjXSE3wR7ZaZq1W35naFFankuir8wVWRPmfhxETDXct",
  "key6": "3SpbHuQg3toEGcoQgb5ATuybgtF4BdYFgiKGtUpayVDuiyAFuusfqbL3LT8vGQ4ViLf7w7peWLG2LfWizVKHzY4y",
  "key7": "4fwQR2P1gGMUqVdaNbFZYnMK6ZH5zHsiNtAKNCMDC5hqFdZtNWuZy4pcNP6ZjhnYujNN1K1RnYDqraQvn27k2Kg6",
  "key8": "afWGED5yAehsfWet1pZHaQPo6TkKdVAWWEbeg8GcLJzR8bkYUCc4PfA271Z6f24CSCFkGHjLW6J8xCb7eSMBSCe",
  "key9": "3KVpowdkGTq8Y6TRaRcEztT42y2bN9somesS9F6vzhGposmLVr4vadteW6W9iDFkbBYvngaqZHphcjqMD4piC5ut",
  "key10": "5FL5KH9pphafbdzMXR5HZn4Gze9ngHn9FX9usQBgzN15YrQbPeeuoVt26w3c4d7xXUtW8qVSbRkvUn6VtQbHzYo7",
  "key11": "APBqQxm1zhYnKKSWU7KvUUGsdSZYt6L789dWKp9n15vxifaXuumLaVyTtUJYWpW5r9XKubwhU7trX9iEGhMTScr",
  "key12": "57gFt4EhPM4aqKACF95dNbqPknZ5EaHWsKh9oe8UjSwATRY6rxqgKKQVUZoRuvsWsf5EazeQu3BLX9GLMcVznYJ",
  "key13": "3oNE2c26CbXY1QtQaB9UzEFF5wTRASFbVsHFfBy9PhLhKK55LHfx5ttxChZ1tufZaRkhduUWzbpDrCyy5eEPSJF4",
  "key14": "4KV9dYoTh8aBGzbBv4DW16kZ6ThqfT9Dnwj4foC8QAcv7bgLuwAYT4LPhCoPr6Vbwh6pHCDL2ZGx5p6VZ4R4zSDj",
  "key15": "3SQnbVpiWLP8wcWmdVDxz1WDcfWL7hVFaQv6LWaTK8BmHYYxVZKxzG4uXMgoKEXWBBEpT7FCa7NXz2Nkk8zBtx2N",
  "key16": "2StN4AnpiGfvqUMM4h1sHVkBzuSdakkf1z4xgyyj4xAjmaG6MebuRwqKCA6dxgqNXk7LwL8bhBGtUV6hNUF7khAJ",
  "key17": "4KgKbi7LJg12WD7125NgT7MynuL3APi1SPyggxcwtkzU3zQC7YnhFfZqaSfGPqfze6wh5hCjU8s92fx42LFdgzrL",
  "key18": "21N5ax6rmYad2ewHuf76NrHGsucdEQFbsRJ15GQJ7NzYH8FZXt8Kfpm4o6GHVsZ1rrU2iPEiv1HcuZUoTbkAFinS",
  "key19": "4xH6cu6WmUcckbnetXW8FfPQRuHu7F768N7NEkjUbDSixUMzSo4E6gPtB5Xbdgb66XXQUsnnhooN5Nz12Rwa9RGb",
  "key20": "2saatXWn34XttquDgnKf7W9E3JKAu6SgAkEY6V4boTJkkSs8fT5Tg4QQt5twg5nhDffqeYo3BVShD4J8r3YR8nM3",
  "key21": "52AM7ZNzTMASGQTr8XoXn41AsQ6PWcuWFc4A8YbTtcyrrZfJFQNd4mtmtnwFE6DxDBagumArGvca63NJbuhbmKb2",
  "key22": "4ELW7ZdN72trPAratgVBMQQ17EDaRgiTCZhrsBd4kM5BFp6QBunMMbjzpmjgAEaPSVAGsRyfiBXCY8nBdRWhVQmk",
  "key23": "41rp8z7CwhGcmnPHX2JnX4J8fKHkjdUBXk13a2eJJQuyrqubJHrrwRzjJBoAJEbNLJL8EzY4FhHRP99KHtzMsf6d",
  "key24": "3nFjfBXuFaTjfPhuiiVX2wPqvng6zvMf8sPDs8ZFjvNESRStSyZP1RXi3tFWbhUguCsVY3F2vG1diaA3uQxfUyrA",
  "key25": "dfq37jTTpbuLiVP9HJuq8KMuubAMPVhB58XyJjx6mAPqwr8MN37bFURQhesP4BNbbP1o7XS3e6E6muTsLeJh8yq",
  "key26": "3e6rfsMZkuQS4T7gmFMgmGecmCoLc6ZxGAsESKLbDC4BhQvNZUR3dNEeS5nMikFE8hahNpo5Huwx9SuRMUUMPihC",
  "key27": "4QbeGBYGTb8M1EgsknbniboVyqF9np7b9YhyiF4wxquHzrso61qfj1GchhRtHWcF1Wkc1vyfgWZXKQgiGomNm7cz",
  "key28": "3tHXySuHUMeqPLbhbAp8wF8j87sTSq9y4SMJ2LuUMGMFzLuSZGVDvNmTSPqfDWvAf8GzQ4fBf5KhDcuMkHLNPQS8",
  "key29": "SKsD61ESihrv2X2zKHqpRr4AbgkwZcy1cqFJFJcCrxJadGdD9nWKhe7WmtChYRBUaQvAQHKbFgay3bPAHEky6n2",
  "key30": "5Mwa1XVF5HpC77TrdHcYipRrjBaLDefjzNtCaG5FbeYoR94bZrGXpXVkVFTGXP7QFxbQwH9cF3S4HnoY4FDidbfb",
  "key31": "5ERT22JWBAbrjDFpY2vFBjHfmNYqcFuSQSg12SPp87CWKocMMAYmtEh9uhnwqMbaFd3NqD9SSvASXVXhq2gtbA5t",
  "key32": "2JGESMb41tPBLbRYygLJS3qzYL4mkb4tEzjiukMNSvCKty8NaDHpvNARnBkJB9BRNP9YaN5zV8NWjddpzsZB47jx",
  "key33": "4FyR85rDAcZZ3S9C8QSKVc5RT9j2JmRYAiVq4mAdN7KKiQALxudLzLESa5aGaWYPqdeoaTtAYeb8frWH2M1FuPf",
  "key34": "3owbKLWQTky6N9D4fuaBvpRGTkqE1MYmuqrbwS4JHCMwS9DknR3vpu75BFHhaY7Jz7xz45sYdVkKMg3ezJdiUWLQ",
  "key35": "2aveAoVRK4wz7sW5z1Ky6bHV1C2tFX7PmQ52sctt45bxYWgb5Nmu3UEz2c4p16rP3yYHHMkMNHvWxoydJwZ681fu",
  "key36": "SYmPubn5H8ZCXBJMbWcFZCfMqWMzTuX4ok5MBKpzNedkSt9kLAecDybU3kywANGr1QagfVJeLijWcWexxju5JNB",
  "key37": "66jXcJdPbkNiuhxfHTPaFY7tumJWvnSfsnC7iWYeDkAJuPfxzu12Rgxc8WDen3dD9oMY1doiSyiCxEs3D9Pcavyd",
  "key38": "4qtzTWe35qDQo1zHDtGWTSzPtobyvtxFGjjzJ2PSoxFiM3C1hGm8LRxwTEF2DmbQgJTUFDQ7VNHdaMsWZt226EfE",
  "key39": "4S2AiQBzxEmrpocymqBksH3FssDnLLGAr3GHjEMaTxTdPRU2AjGwxhvHye6VmWRbkFnaCoFUCNeFb4Q4BHJjhGhU"
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
