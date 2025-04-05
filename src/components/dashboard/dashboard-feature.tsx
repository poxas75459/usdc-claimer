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
    "5D86zmQCGxEfDPES8Tjn5bmiUAhSFxb2PgLHfwkmKaP9sEMSPGdo8K8qAYs29XpA9v2X7uQi8dMutcCsEtmixhrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21WjWrhhsmZ5ZL2xVFcEfRYsF4psZomaXsDAoHkAvVGw126UjsHPy4PZfVs6A2rYEeVAX1vhBFn5YgKKBDUZef5Z",
  "key1": "5Lsph269oosCjpq31zukcQNnhyKvWE8uoAVNEyt5SLCZ7yHFzDUCqSXcxMDN3ZuSGrydQ1KU3Rs6Z8GNvkMC8KwG",
  "key2": "319xayowG9DHyFSDNRJmEy3Gr1zVVSFZK9RSgr1RSXx7JRVbuGNgcdUS7AH87vwgxKRFnxKXh7ChLXEpWMG6xQLg",
  "key3": "4dxtxZATWqMvWrqjeiAt7az86u26uvPCupWeBB5VQ1G2kzwSXHfUcLCo7Kde34GK4GNBacn36Jw2AA8S7i8sP4Zb",
  "key4": "3DR1gQk8LpEvsR2ULCRwB9j54N71pxLToXv2jkApsXVQkEZuFhWxNtat1zXny7Qkk5XU2SBzCMb2FRh72jAXSt9r",
  "key5": "2fDhrL4picrQvgzesw9jp69aJGHhRtvHRK3eb2FwEEWwELFo4VGYYKKeNVKmMCpD6F5o9GYR5Lm7Fo7RUVVy2a7L",
  "key6": "31xWxjQnpHHbtFNA5ES6jUDbDxyWLbNMRWUosx8oaREbyGqKWG1xNT7RNtfQbnRrMLcMhYbiCjUHjvHKAcPdNryB",
  "key7": "26VeKAbY4EoGWXd3D4x8gihifAQZPTA9fZTgBuwdo8FR1ZYdXAA8qnYHeFin715dcr2wAXbg9nQgVsuBYv2ABm51",
  "key8": "48FXmyypFxBXWM6jaBiiz6dfvy6yubPKXvVfok4PAW2DMXnT2g3gpMovcBiAWh6RHp3egkU8P9PzW5fGpsUfUtm2",
  "key9": "2ReoXwxtZJf2sYpmaAbDR5FZkWKpZP1MyCP1ZQAVjNeBVTzBCMV6S5CYqLq4cMUSBNN3zK98mK66ADWXtYn5rCwh",
  "key10": "35V8NLagSbg8VyJD2HbUxq9QB3SnZKyjbnY6mtGJS1GTxvaaAuXWnjU4xodG5raRxVKD7uSqVqCKBspTiJjU4Dhz",
  "key11": "5KW3JiE69WPkCSCerHoMEXizMk7TRmBKgpxKD3zTtzqxVD5SUtZLDsadq23Gx1nxuJfRcdPePbuqTpfzuMCMAckB",
  "key12": "3gb84PzmvWT285SosHw4Wg1QAZCNBkwk4SRcMD8z5652ZTsg7So2uWMbZhumE46kQDxqQrtHzVfMyM8GyvFkoDeq",
  "key13": "5uQxudGLEjDfFCTHjw4sdPKqupSZJqTWinmp6S9oVD9K5ZHysgB8hEL5WXuN833rea95Re9sz4ycCEstUNwjQLL6",
  "key14": "5rWjVZALMhDp8449SmfLEEhY5a8n3mSQ7PfKGgqBcByydaRa2LadxZpaUVKkDCs1NdrJh49ioEguShBs9DyKMkmu",
  "key15": "3UGBoovY8N7hQZKHCnkwMbG93mvn5kpUm1TiposnGSczRc8UFUVHoErLZsfm9Gz5soxEuauqfziU4hq18c4sctDe",
  "key16": "mEdsdfJnMnscBeSiHWaZM6DVSmW93VyerQ88pkEFPtsFhwDdZVRz8MA9M59tbGJvpq9ns2f94xuQENDYw31P81B",
  "key17": "4a6uXq1QaTmuP8f16XTDkwZxsogRpJMjPK7mMY6f4vz2AfufMBQ5j5Ws72mNCGhairPMvvsN9QtLuPiRVbTEoZUi",
  "key18": "2eEPYYu6f6aaKRE3KMa9zbVjQkohoh1cX1ys3Y9gLEgBM8E7NjrKmm8VDnTuPzGAnJLXZxyTPUhZKPYynW1octPh",
  "key19": "dt2va7A58SxkZ1iZBpRgb8S65V5r5Z9JUKU9ToiakQWUCxmMy4752GBG7Pgxxj2ZJPCPjn8X1E5NhzJPBXBnKxC",
  "key20": "1R1rf9577Y14yUprDNZc2u32xpmGSMfhDwSHrFWnhm1nSvL8he11vYMWGChBkn1wksepHeyi6Wzd69EbAZhcve5",
  "key21": "2uDm2USATAAiVoSuhFtejm3yWypHrwZqEXcCZi1ye94xrf1p3XR4vivBw4BiDqAvcw1mNc3ZJiLr9mPHNmTPZeDW",
  "key22": "4oAq2x7D9VrgT3a7hoHw5bGXnEoxypTxhHeQednnquWRzG81jkap7zzEMguYmedzhD6oTApN7rT2K7rraqhtNJJf",
  "key23": "3ZhQxNk2QRDf1dspmwFarPvaBdLdALB5iKBysJJU5TVutE9Cz8ZUCTVtZFewuWQpqeycGFhK7KZaLeDaH7bwdF1a",
  "key24": "3huCEVdf6ZRjsmY2p4JzHN5RkeZuw9myYjExLqErKL5JgSPCj8VLwzRfTuDXsuYoSSQjhJoFgTCk6bdoKM2bvzr8",
  "key25": "ZrB4W2yiyejA7peBaydknfR9fRxNDsXicoGxRyw3ZUFvaemCzJHztVyg8Ea1wNA36K3xMHrTj3dKKu1kJwiAhpk",
  "key26": "5Dh7iv3M2AZeS5bS3KiaqnE2GpzzdJKwUCLqLcYVRfMNqfBg4uUd9dg8oo1vJMbB2PyU3MGZwKKuBBFf6Qo4EGKG",
  "key27": "61qLnhdufiqdVC1KVAHRuqFCMUFdKaCNjDD3D5ScHHiwwynFS5qACCMVypyTqm4naxru5kyyeffH5zUsj2a8DzLS",
  "key28": "5p1VLQfxRyTRZNAV9fSoquoUpsPZDciE382vjQraRjSzq4JbZpnHXhdw6CojSgVHGwBeEefj7echyyPEMQo36d6t",
  "key29": "5o55odnvjzywdKg5zbGkKP6PreUDtbHQXcbnMhcq1upavfZcfY9Rksrck1wkYoB54hqj4vYCBaMH6VQFPGpmmQzp",
  "key30": "1PYUtYNk5T3wRqNv1fWjrUXJZ78tuaqe2MLDSSGShAQbyWFgiNZzMkXtbT551DJC6bnuN6MvauQwMP8hSGWN7VM",
  "key31": "22yjH8DeceQzXXLimJGKZx25FWVkzyJ4hRyQpGum71vyMg8bVY597uLXkZDmDm561sUdyeu2tcs2Y3pRaUAkDCRu",
  "key32": "4mbyJrQZF3aGPUzobwrEGwpXidf6YmSE9MJpYhGKyfmyS9w2jkLAehpP7UG1Rk2mwiTRPZjnwSa8uCg8TY38bazB",
  "key33": "5C3USdaeyAVDoNvchVyeN8eRa65Wn7WdS3FPP3GJsFkqfh5kUXAXZg82sf3D7pZGGJXrNYX3aQhR6FEQXVJ8P8AM",
  "key34": "5mef5qWmAzGattCTzUTLrbjwYej6DH6dkw8Xfn6pNJUQip3E3XeKzoia8znDmtkT45mzkQySAWaZHRUQYyyNjfCP",
  "key35": "snog2iRuh83WrmMup2aktjFd67xsyMTtr8fFocKgGdnqPhsHzzjdQk9Nimq6crMCzAPKBSEVnm4PrqwMN8uDzYq",
  "key36": "gA8RmoQviG8cuS5ZTx5MYQn5sbSUsubJ3xsczuD65UD8qdx5N7RthfxrRwy1ttuZZxsnb83h5ssVgoXGrLVa4Ef"
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
