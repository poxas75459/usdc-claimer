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
    "4EXkZEaq3voqMqnChkE3rCHJKmYhZiJBCXMZ6Ku2UhrxMZ5TW22STggDGpo8fJzmNjKpSfHBLhJQVbry9sHEwAjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y329ySyu5wM8fcf8XJjxAAXPerUQ2SxCbsAneKTs3AZJxuENQmHj7KFC2o1Zn6DeGwus7h3T3RCSBNqpmjPS94a",
  "key1": "3zSxmFy8fyVAtcK8pjUfrtMfeuL1HQsU414jMrVEvAeW85WPbgAmecgarh278Ctm57dChKynB2UDL8LzL6EYGE9k",
  "key2": "2BDUkgLuHCTbf2TzFcB7WgsU6DCD5qJgwD3LRLb324SqSZpZzCwKCowu2aNXm7icAaU7Viy6wCbimeqJeVEPBAJ2",
  "key3": "3siYZ1T3YWVrYKD4hLcpAfHkuXsZxKP1tLc4rfESeBQHuCtJxe4exWucm6ouyfw6mhdVURajwNZgaHkSMhHTEDrh",
  "key4": "5ELBwf8wCqEdj8qgcUZHSBHzYn2yPbBsDh7mWbLGhFZ7m5WvcWC3qXHfNT3R3sQ4UwkMFZwZSEtgMaTVmauYAX9J",
  "key5": "3inm9PMGp8WPn4nYxHawh7h4Qqsn7h6CTDzXENQzWso1NzJC8TCzoNQPMsg6jUrokVZCThkU2vcVc62PncmnLUfU",
  "key6": "ExwoB3USMxqz86fFKaqBVmWGKVYLHuS2w9ocqJafsDH1dzUfK8ALDfQFLse9HLgp5ZtViDXdbj34xQfVujKyhoG",
  "key7": "34kREGZsE1oLbS85bhvNHRPVWwUu6hPwGyPLNLDVPc9qt2dnf9VDCTrrgApm7bbho1Z3jXrWttJyQkF8ei3ueEXp",
  "key8": "4EJX253sawnWmmS5MHsB9GHNG8aFqRpHtYE9F6CDsnMmXr9Hngrbh3ySHL8zrzVe7Pwiy3nxxUtUUtMXuBsrkmde",
  "key9": "4RDEJ8tFcei4ddrTxtPQoqA8s5JgfUQHewHtrMRktxedaTvoP19UAvceQb5LSm9DH8BfAneuLwaHLVdVbPxwiksW",
  "key10": "z6S81X12CoU6yvvd5bVMisc16DBt1rthMDcBHYNtnEQMy7vefbWDxzzpZMvBR7ankfEM41j5vKHe9VuXjxNfpT7",
  "key11": "Bv7r5SCvqFTUzqfknXVQx1QNDrov2ZpYddgUK4B26UbmkfSTN4PWx4qzag1tLYhRuc8ZXKHaG2Ggt41HWSigUho",
  "key12": "5ACxuuqHbGSDDGyXsAMRbJugCghLcFeVJFSvYiJckeqLYNXXiqiFEmWQN6gQZa8MLtBhvF1HA7KeSxcWbMsnMghb",
  "key13": "YtV7EjSNm4XKL5TUav186r4z61aEaCEH3vYRwJKpKDdq7gqRR9WrEji1TTBekkhAW7wkHZwQWSkBXRy7272c85Q",
  "key14": "4X1x4aTFb8dXgXxe1mnsuBdwrP3pbpKdMLCuHAF9DSYWindRHgWKmYMp1N1wR84k7TuSzEyoHBMg9wsUyQfAUioz",
  "key15": "2DN1mighnJn2kdUYhZui9RrRa8LQ2LctPkSmscGWmmMdCUC8yseoYbA3c6JnhA5YkGuDMGRSLRgTrU1Joz4XTN9C",
  "key16": "3SKoqDDTs5hfn7CuqfR5D9Rp7thegC8faUgrz7Z1cQUzyXqjLSgxqsFbhqSnfo6ndsrrzsTHx3VLSxvd9umiHCY1",
  "key17": "ywAj24NCTUZUjuriKpcyqyYngDsGGkGBCbpVDZKZHtjSQygtzsH67Xho2ckFmzL1zJvKsZUzVhG4c1f1LSmUeAJ",
  "key18": "4y23MWpb2zdwRdhEdGcwv5AYnLvSW5WHDZFSTfxetoeioex72fYQnh2F4p4s5WPac2SAKi4LQRRR2UPmgXUSN5jt",
  "key19": "pwVEXUoCaDWDeeSSAi6SuHVpewrRSFatG1cu78H4TV2c6JbVAoLW2AkyV7FUfWevD4NGFLyKQYwG1AeQEtMB4rg",
  "key20": "5VTu6AreoSYf6uTZMtXxvFyTepi4k4xact5uxpEfPMA2NQ5kFpdeh8Wrf8Rw2EmBeUeZaKb1E4eq5sKPH6BQ715R",
  "key21": "QM1xbJjcSzoezVNWhinPAZQVQcWQaaYneHbdtr8ju9fKisGVqjYR9xjEV1GUp66f4YbLrxsfwTiXspnfnABTB4u",
  "key22": "65x6dPh444Z1B3JowSSrqcrJp4ToNzupnHwBtYukKaijnFVypt7M3rwoAHNgXVNaG9S8jCGTPhZpth7rSC8zW6sh",
  "key23": "mpX1Qx2NoQCYzg1dWon3JeRcTepS5sfaq8FSUgXQt6fqWW7vG7Dey1AsVQtq8Un5yh4sZrs5rp7sfPXJjMvMAh5",
  "key24": "2nRkiF6WpFqbpiTVwnCgeDUNP3tGRYJ6gQ7CKerzMuwZeAeavvS65AwgK4hEuCmiP1hKfGhZmcrsy5bt36ZkhyNm",
  "key25": "QTDnfUAKDqdtrWjE561UXCqjn98tiPw5yWBWfPSLAX62me24SGzkWhz68yTwkZmdBzkRanGkgL5zRhsfoKBnZRW",
  "key26": "3ue5ASYvFqCnsei91TWHbvqVBdN7JEh4T6zvBN2GVWMtMvQRSy6S1RWoN7auESysjj98vxMYLM8hK6CpqTQEnFuu",
  "key27": "4H3P2sLzZzaqScPUaaR2ggBDRhKoQWSWfWy2as1FDY9EwuL3nsp7AdmKruNtWA6UnyjQAefq7b9qxWH2cLQUu7d9",
  "key28": "2enourDMgX6e6gErFScSZF1XthrS3SFZx97iAMt4F5CLaKFZSdDoAYwPiEMPpe4wruRZosysK59Bb6cYiU7u5gUH",
  "key29": "3j5mH9qP3zepQR4wERUdDF5mZKw3B1BuvCsEqRS4sDH4BsK5T5UYQLHTLdq7m9hrrRrM27GBx6dT8Q2sPs6yNztU"
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
