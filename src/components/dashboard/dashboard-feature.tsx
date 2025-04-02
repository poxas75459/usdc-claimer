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
    "2WRwU8Nudnw6JW3BjYwMwm2V4W2746i8nAw4XutMZDZEqXZPGD3oCsNkWPnZyzwPEqFgcKQHrGZA3fthz4BqubiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2px9gQwK8AsZws2HSurTYet7nfAU4uNu1WwJbwdZkDaa1nFZ6LWKdfw4q8McLKC1Sf8eh8D38KV6JiqLLZguxEBT",
  "key1": "44GqKD8PCgbtuL26wME1tYdgFF3c4eNALkEiTSDEPZimmRKBjGnUoh1g5TU2NkRxQk7HNY9hCeHSTtR5rzYY6WpD",
  "key2": "3Fe8cSeSreshA3GntGPxbnbSWBdC4KBEafCKm1xsRCARBhYprrgHWQwKD7KxfmazpfMnYq5tVBKsAZLctFuH1D1g",
  "key3": "2mXchWyQHtDov8kszVwgx5DLf4bjVVRTyx6FYSFhGnLzT8hAgk6hhJSck3uxBmYgwkG84KiB15koZeSP5GcAQrhh",
  "key4": "3t3t9mVYXCve4AJk4ASagkFP2TexXSaDp2Ggi3h2GeWHBLQZPx1wN3keAewhhgS5HkpLQVLX34cXk4SvuA5RfAxA",
  "key5": "41575znvCgB3rZgRec3MhF6RgUGjdAPZsXVB45zZR41k6Ci4Z77avQ27LP1weQ6w6DEy9diExcuwG7v8XapC3jTb",
  "key6": "2hqAcQKJBdLXKwx9ZFznNh1U6p3FwCuo4EHKjyqD1Vvz4aKyEYy6WQ8ne3AZ2UU8Pn6N4UJUPAQU5tDkcB362iVG",
  "key7": "2GUcWymreRrem3vjxNyFtAmvF3LFdfj5kRiZU61XZ3hHP49cwhbqQBU2PBi52YwSsjCNLFb4fiR2B46zhuMx1HiD",
  "key8": "mMvnRHrGWzrZa5fJzyd3KsQ1V4E9bXSvDPtKgRB3WNyhoSvPWt84CJLYM1eWqT1tBqgV7MLNnKHbiutzRevMHWu",
  "key9": "64mHhrLEFDuQRsgXADE5hkhZZiYpLzvCNtVfU1hnwTZmAFaatG8WJYXBE7teYAfKFzaeqzeHb1QXpWhz6Uew3hPG",
  "key10": "ngusEsBbb1bhXoGx2ngxAYoDKvHCMYNKJvKHa2cmzPPUQyDqTKdoUrDApKD5G8MwdR25sswiGZWsdLLBY77pthj",
  "key11": "39WEd6bdWmsNSZYXSmijE4TKQRrq2tFWTUm7Cq1jF7Tjaogm763partaS5xPPhqWW6TMHb5YD7k7ab2CTZQC3YkH",
  "key12": "pPen2RSW9fLcVH81p41pjwFexQRBxZD6aUivbJcNj3wxoMKysV8eiUz4j8EgmxYB396E7EVEJfLtG3cKuMmF1aB",
  "key13": "5EdMLYaqQHAwjMhfcRZi9V8tjntzDY6dTaGDH3rSpjLorRzje4Y97MXXsW2JU5J2Txty4n9DJJDfWw5VMqbMuNNH",
  "key14": "3hEWj3fgZRHQEX2XLdVcMgQN1DKy6dfPuEsh5AqikUkokSXEgnKUjKMPeyUF28QRPEaZ95rL6WpPqoS3dEiFH3S6",
  "key15": "5BNPUPtMu6WtbjPKgbZfHmKf93ua7b6ezCApXUVhWMK9TSkjaYpqdFqVTHYbcdCZ6ZcKJxZTWqjs98nPXbDmj9YW",
  "key16": "3DpwwM8QEGQFkCFDo6S8mEKoZorHWVrJJLmyVnWhCEsyo5mDo1Ep3C5vhVwEy3G7nTNjcKgFs8kDeJcP5zbB97vr",
  "key17": "2e76ngGLpWc7wv3KtafGTiw5qwhGLD5eJ7vFkx857sRpzGJS11imMWzZp9BmNtJtUc27V3jT7EjfNmbaDAEupVZP",
  "key18": "3AqSzXLcnUrWjn2McvzAGXg4eevMyb6ubg9PaiLXVfsFZTuB8a5HayDYYSXAXcTd9Y9HxzAyNAzoACA7tLjpGrvK",
  "key19": "4gQ48iRC1s9iG1eqpA7kCwDmPao3p8wo3tQV5e2K5tiBJ19wkSPYVbBb2ZvbBTJAzeAYwY3wRhN6xnDo46mJhy6",
  "key20": "2gYZhWGvkD2Xt1UzTz6Qcuu4AsnZD4xixzoCi24vVaQBT7YD4tFf8y67zPrPaJw3KxLA5AhDD3pX6PGrkoUH15FE",
  "key21": "HJZ3myk8jkxyRAKESASR19cy32QuAWdTtg24hjM1iHj1TeuRnXygb66A9tA5qkPF1y9U3uwCxBaoXWSeGk8z7bP",
  "key22": "3znhCiFboidEzBe65AwySkXqjDtKTwixXB2PLoiyXZ6MXxwB3dEW6MJQzFNLKPfXQ5Mi8k1TZZ1mnVk7BpzaBT9F",
  "key23": "4HCBbH1dn51sFth3woc87dsLgfb3b5XEJDD1YBUYn3jP1fmVTZosiHEd2hzp7ypfyPbTFXGBqY9Mw1g9sAe9nWjq",
  "key24": "5PkFPVbvjfc97RM3esLxXyCS4NagYxqYJSG6xENGHHYizDHdL3CaYKM8TXyrv32BW6TkdNSF9DmnJ2y3WVbsg7RK",
  "key25": "55XQKQRMPVAYGTkBuQUasNsiDENyvVs82e4SpabcpUNA6HQmPxq9PbFVjDrh6h9eacWAZdBDUV1HwskTHN7NR6jE",
  "key26": "57Vn7xS5SpVmJkcigGSTSUUHg7U2FvVvdwvvCySPpzVKvTwWmDynzdsAEDodP9YJfXJpwa4QsXCDUN5cBGXjwK8B",
  "key27": "4m6WD88QsQqogujk6nFNqLD2VVEo7W6VTf8Fp3QLSirPZE9Xx6gwkkocVd6fpP2T78K9RjMHGkCg13aEEbAkBCf",
  "key28": "4uG6gcTUUYyGWgQ1rXchgYDXCAwNw13S1NDxMzhv51CuUoRrbHkPGqFAVnTJcjoQHDafVhovA94xoAvkh5kubYUD",
  "key29": "5UdVYurfmJywkmVvwh3jnD2Ypb8KYYyL5sDm2wVAdRAzwYHmeHpzBHWp8xPhEYhjy7V6iKNXCUcgbhwVYznsCYC6",
  "key30": "4wcZavzWSwnPoXAnoDAKDmGxYZN8uwJyDbFRXJz4qEnSwD9Ct9C6a7iRPSB82sF2uZuWD2vfe1gZXf7dqLPM9dLu",
  "key31": "RDoiHnWMpy5BcbFNZqCgu3t57pckhRFur5eGmtEXqsEXKSVzYXaDqgAZX6zNs2GRiUhx4GB5cfykGeybKUiGCLz",
  "key32": "fG6bK35tTNZxRbjFWL3GEb3GgRzxXbkTFDkNQQsEbyaQsVd9g6j6wD7kXsjGJ2Kp1Xg3GpoMrQZ7xjcffoiGu4x",
  "key33": "4pu5kycycKHyXbrD8RRqvYMgWYAD2AXdGsTh2jGU5URunsBytAg52JnTVrovQS9NhfvgnZmnAfLUBQFdJgSBCaYC",
  "key34": "3tuawKxZJYBXmjTKzeyzHUz1iYjefzTdYBJnWTQrzf1hBkXHKtri1bk52uDW2Wec3BPKrsrZumW76YFRUQ2Q6t7n",
  "key35": "5KF4qm4bf9TZiSAM72vEpCEAPuDYssdUefubXGEHbicdaRGSQQnXaMAbjS5hQ8hYYAGDCXNwSD2dyGLhTmbrrMnm",
  "key36": "3wGEzWa8NkaZ6R3GrhkcTiSVUPFpFBuHuzFppq3pqKQ42zVVmaztK3rS9ZAXmq9MuCQ893H2whmmxHSh4HVU4nro",
  "key37": "YaR3YGcfCpbaSjC6An4Yum7qQDXB8MnRGrPQSb2fK6V9mdR2J1WzaBvryiDK89LDwtA2pCcvQNS3X2EpnTA2eus",
  "key38": "2B3kCXHf7ZRFPagBzUrjbkm3yDC9RReqs8Ue3GMsi5Rz7MAAQAekaaC9Tf4jZ44uwh7BmctSDz8vqjid6Z7CC1wP",
  "key39": "8QtdZbL7PoV5ueDSCqZ3L6HjDn39ZLQXPm7bM5Xw2BR4mBwH4G5HAeq9etR8MJziDULtuiuazYAkfxU1T8pnxzV",
  "key40": "3rSoqbobVUZkgjC7eAs7dS7vgesocpfNRxf1fxFiNmUB3A9pDGFcLgXiXL7NnPzsRRXAf3QkLdFNdw5WGDh6JDeJ",
  "key41": "2NdveVSfFScnMppGvUzf9LFdGoSDCqmm8GbxspVYTufYc4UgUhGeoRQg3Nw9aAkntx1vfMEuXivgd8TsJKQDoGRS"
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
