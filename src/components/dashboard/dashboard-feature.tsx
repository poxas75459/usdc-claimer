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
    "4sFXfPLzxbQq9ovU9JonGnWjon6vbD5MzQr4L4sbHn45FNznC1C8naaoKUmyQc5UDu1X8mTay4HEo96koYfdSzc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQ7SB7GkhVW34qKe8X7CSXNcC7YekXaQZ8eoKNLe3ntagPpVRcqVoL8ef6uiGDDESrcvuWevmNdFeafsfD6PxBD",
  "key1": "27E8sEZyLCxr8WAh1iUoS8dimFArUa749e5oPo9r8uzZPuw4doTqd54RgerwJXCHHqstezsSVZCXPyhXRy6L6XvE",
  "key2": "4HwKiNcNQPPed9AjB5nNDYUddM48kxzUQaeGn7orPWFUeuS2YLYn56wmGk54MuoCmTKNPZcSJb9ibNq3tgSiGvXD",
  "key3": "5qoH8ssCTBqvBkSeFaJXn5LZELFTjg8ndwyJDsyt2aa7jmeHUeCB8U1wj2oiDxeN8rdyeKcw1JkvwW5STJEY4Jmc",
  "key4": "4bfUzxNwWLvHq74un3MTtFUV2JCRc3DPyTRp5bvhoGaVsdmqmt8f9CfRdpEzEqGq5YCG3JzTXicoTAr5McVUsPjC",
  "key5": "5ovtTjVhje5NR8XsvhtVfAkZZka73S2udiaxkahgDmXMmDkRqveYd1FKrzbY6nfocWw4aTB1nbYuaR6ETVcKRErs",
  "key6": "3dQPjkjnxqA6ZtuktyNy9GY3qMD7fzH6Xj6j5Ppg3yFoZeEdAXx8kZkqM1pBwt5Ek6fcPiR1yNzUvobMCKd3c7aS",
  "key7": "3SEQqfNi4fuZJh1UC6N1hGDbYtRGrLU7tCndUv8fx8mej9u7Z4Q3neppJW9Vii5CW7PzBZMnwfyxNMyrhL3nMug4",
  "key8": "3CXBypxafDwrBL5xDFAeH2xcWFApEVdbdVdH9a2RcMvsxowy4dd1zZ8HLSKhWBwqXfnBeWXUsyVpqbPHyGRbH51g",
  "key9": "4iSpKtPiysygC2NCsgiFWWitS3dLbkD8T44aBQsAvpBZcYxHyWH7aTfpq21rf9h3aWVnMz8KC26C8bnzQjtUcD19",
  "key10": "2cDEgBKk3QjcUFtTPaaz6miEsPSuwD24Hnf3wN8RVVwM44KBDv2x1cegBb9jwwedfKxUmBDXfPfxgnhe22qVmnDC",
  "key11": "3hDYfFgcsk7zfmvRfM9BiT9XQqkoZrGp8aMhAgPQSFsYFA7FkwzMdi9WX5ocY2aGGuneUkuboPBK4snHiayzyjGb",
  "key12": "4jo5eTtVax5oKHoFKucXhBJbKRYBAbEHQBR9SVht51y5X5CQFcBpW1RXJr9L5uzZkds5RvKsXf3aDLL17Pg5WNHC",
  "key13": "3gWAKDC9ZQmdSHx1EtNWbN2AY3aPVHs4bfVe34iz79oDGrkqq5U64hQvf8oZ7yk4mEiXrwBkkj33hNLUBxXjBkRp",
  "key14": "4UthSBhD4pw1QWU7PGjzkA4PNpPd7AH7Qe5sfhAwgoFcyS685EDGM4XGQ1hp2DKepxzYikoFCpzCubjx4Qtqcj9G",
  "key15": "5HSj2MedvNgUTLCzDtpfPermDcRPmci1hVyt9xkPXQHkBtZxc83tdAMWpw3btCZoAjhW66UUVNpxBze4DHxBCTud",
  "key16": "34231rdXUktVr4JcQBdoETsWwMTiNYP8DTj9EihXBmzGmj3WrhpaJj5Eq6zdZ5zPe87PkfxB1JjNpaQLgn6pwW9i",
  "key17": "65esod5zGbg1K7q9dVE8JL44xcFMkXFZD4yLPyKNrbftfXNh98M5izEXoYuof6jUSZeyRcWsnBSPxTZnaU9xYCzk",
  "key18": "2RWNuNUaFJfFJcktADZqmF71yta1wsmEEbeBvZWnb1MgbryUJGS28E7Y3XStvEpFmVtP7WBQV6eauEbMrboN74rY",
  "key19": "eoaPkjFFrKDQAWa24bN3aX5QScGPm7Xq4MSaeejBXzKvsuYbE8oHNwLhHSZq3rLTLssMEoTYFHX47bTvwE3ZunH",
  "key20": "v4uMNnUVZEXYBvF5AyXng5sGp9QCY8utftx4uxzfzqJVZoFQRSvGgJCuBihqhz1Dh3ahFZ8M1DCmvoZRmhpakvS",
  "key21": "59krAKcwg5QbWtYc3CkeBVKVv9XDp27KYGqPY4udJva8HgQDFg2zz9Qi27WgPFStPRUbMFCvszC8J5ku6aYdJoPJ",
  "key22": "u8g2seEPtk1nnLmM3hQWDpsiPnq9ST9ERKekTofx3SPM5b8V3xogR5a65er2NsubbfU3k2EKVhvLre5nZCBMswB",
  "key23": "32PubjU9gyNzHwa4eg6oX6sqD3vXWFPahYdhcTLCW7tGd8Pp1sW9anECM9ykfijzqaKQrDGDgxpn1YVHaXeeAmAT",
  "key24": "E3p8gYtMWVZ9zMdFVfWdbjfAPFYP6uT5LGchiBEsKeBmyiosvawqH27phJfvx4Q8Xw4F3aMUiXrVxBoWwMhjwd7",
  "key25": "5vBcXDyGSdptvxj6n8FgdAwPsq3LNdBPSCeCM5R24wB1zbcx7h1YWEJ7wwYt9fHDQDupLLSE4BzA9qhkG8zbhQQ1",
  "key26": "R6pu3ARyheigZNrxtpKUMkzrLHCYXymYdg11e7zsFmwBfSkmP7BX7saaYZFjoVgzujqJxu9FNkAL9ajededh9nP",
  "key27": "2HY8jM1TDF4VHD86kDrdS7HVpLc2b8tQ9vxGBhA7hRh4tz1PW3zDCdYs5o9xGcNiPZW23BBYcJGEvR6pkQQ7rKeC",
  "key28": "2ZxRZE63bHZJRb2SwchUjTNkemXoP2cHVadfZmqSH8gqPUFjET48Fpo825Wcxr7BLZoaEY3zxbQBC9vVhjsGrDee",
  "key29": "RA6eRu1bSxCex9wWPbtppksqiWJPwQLx3zptJ8zaNtveuzKXU6FjotwUhynSNSeLeJwCcMC1QLXLCPnhpGeH1sr",
  "key30": "3LN2RKfECyDYmG8wZXMPmRn59Qfy6fpR2JNbKKL7jQgUFsA26W819fsiUEAwHRjhLcCgjB8sWuphY5G1zLxCWUMY",
  "key31": "5BykgndoFK4UbnP5P1Qyxuz69kePWL7hL5AZpqM2d6TRnvE4iLxVYvoqkay5jwPYv63QiJhciL9T1Njjd3SqAL7J",
  "key32": "3uX9KKuCyeW6SDoTuxLMe6UsADfsQMitToXzwfjYcc5XU2cQdgvNxkpigz9FbDDiUbTW5zgareWQRSgMREy7kMbM",
  "key33": "3oMhhmGEjwepRZJXAJMRZwtJjkU3mWxtCoRvoPFoRTkd3ZfPAvhbX5134CX9Pfyp1r9vX1UVo3uW4UJNMn84aBwm",
  "key34": "3r3YDMbYx8C3EqDkaenTpQHM34L24yA48cmQWcm6gxfq6zXTjuoLx5AeakRnQXiCXVfTPVp2L3bPRSG7yBCuKZAW",
  "key35": "44Vb1BMNPrhoEwVCgsoufThVdQpVDnoQt2kVEBMYqbYqYRjcvFWZjbMq6sC1TTMu6Z72ceMv5hu5YqvRHtdP4qax",
  "key36": "ehdR5vyN6dAwGbm6ty78viXkk5SKcG1Zuvpor4v4BxuA45ih7yju4mSydNn1o7DHesvbFkwNHEZ8Wga6YHwe5B2",
  "key37": "3riMvJE4bj8iZ2DY8J2ns5Q5aAs77zk1pT8UDKS8MzoSKAYcJhRHpgGEBU9PBfadTGmSHmugsEVFTBduk4rmmcJd",
  "key38": "64i8omsFyYdPgT87QQr2EmaU4kLYQzRpbP28iv76oM67dthXFp8GDLNKAsRfmZKHGbMi6rgNr2Tc7g8YvWZEaXTn",
  "key39": "ZR9vFpTdt17uyVZVwxZUkQGBn9c1N8DANwjgjy3k1UgpN8UpQYy9o8TRKqDcraLQVZKu68eJ5vG6kFiRft2WP67",
  "key40": "35B6mhDJtD1umUmrWUEtTkN6cG6zoKcTyuy5fjyv62CQc7MdDTaVs2nvu3Xc6tdH2CdYBmxSEeH8M3MKtnBGWWiy",
  "key41": "5oxsQhZbcKo66Cw3cgcpduoAHUV2n6MncTGRVHbMEEDZJd4hxpZXyY3bZVn3uYtoNsAVdJxP4GA4Wt9iSMmEu1tM",
  "key42": "5xKZ5LVmQF5wAHoXNXaQvJdbgQu3q6Hxpnxf9MHrJ1yXZS1QyMqZAqimgXKsTEq4Hys8uKyCNeaCf7kUcbu2fRTp",
  "key43": "4AkXPft9QfEQAJ2n8gb553MNX6W1w9gXnd3e498V95nBwMnoMSEmca4reLxGo2Sqi5Xpj91ALFuwWcaN9aZHefhm",
  "key44": "wcsUS1WCTE8D14aKj84KPST6ZgRJUdUszbQLYyboxxzXemU43bjRFNwukdT49pM2fXzuxdMdRQyxwiAunrtPNVc",
  "key45": "dym65hJedEPzwaJSSwPVTHdv9GbMbsHkjgKPteTVT4F8XN1LUHeRD5UczhUkqtU33a8aKvgLnMdd5U6CxFWfMjB",
  "key46": "5STvwRq5P7JScTVkpLHUNENnYqtLR1HhHLbRGJrPN4RoPP4wx8aPAQWmLQ6cSnPgYAborEby8YK7F93BxN5cCMSw",
  "key47": "SRu32ejF4rPghMP5PF7914tgKsHtMBDAPdvxu3CBqCxpFVkptTsjSQQVF94LNZZjAuoyGt1tGcXxup1Ewbuj9bq"
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
