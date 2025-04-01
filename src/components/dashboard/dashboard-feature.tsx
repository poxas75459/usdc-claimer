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
    "2hhY8krJzpgxPHBPrfSwhvrGEWjKhfjBxk5qDCfy4CYnnMz8ctmaN7yfQdGbcMw1Zgmi3GenssUx2CsiChQwroqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EKQvNa3BMTpMohgNFGSDRYMCafNM96uXARrZUZPjK8NDFu6kB9L8Jrnepm3rjd1h3RoTBQ8xDao99NW4RUGfBqU",
  "key1": "5E9r3ypEChkbCPPgjnsb8iQJqipvQsoDhU8hoAGPg5UubRDR8wU7AqkN14SexNaVRgdeavxyi4zKoXXy3CygZ4ip",
  "key2": "xM7FN9zRTC1Epc5NiAcVgFbWiU7rKLdXuPHwwSmGovWE5JAoeH73qn7jUH9KsYc3oYTvfVg4rjQEKi9D9UirxLM",
  "key3": "5ySVrcMwpzXeT8dciqQqCgyWmpjb7LofLd7AkbJ2GF5wbZ1KkcPDNaVBEzRn4QmnLKEeVNv9gSYJMk58mgiX6UqT",
  "key4": "3VwyfDzk1LGytcVAi4gUXeRExeis79edhEey4VwAfQxY7RWS7asLfuhAtzGf7uG7q1Hm1RXt1SPyeoSN42PmRg67",
  "key5": "5aWB1jUGzqSSe13o71K4zV1yZjwNdtS7KrY9buPSKWk6NV7a3iKVWzFctyiEtNKZ3V7NcvKmvKi8bANxhozaLivc",
  "key6": "gFSCAu9wgqA1emt5M4EbnC71phxGHB8uHXQfn8j6ruMZ4poQLrYcEGHwkscjogGsyZdiBAaDRK1d89XqyZ65cJ9",
  "key7": "3tfeR3ggeHsesCzPHuAUSSxdrRuLgXYhRcPA5PANPkCQwQWHty922oGo3AQ4vGvnyfegymCpKbGrGiHmhzk7rjWh",
  "key8": "61unQAAmxqi2exVnP8HdqdNzRpksXCueLoNUgvDkNV1LKw9SSHp4U7Zc3mWPSEWDfL1Xh46aSo6puX1t3qZ5zneA",
  "key9": "5k7xuN2uCGqqjfQfvwNidarzw94uaJNohbLWfZCDWDz315szL3MJ4Sx2wyYdk21MR7TG6VaHt9UrP8obskWcK8si",
  "key10": "4efVSJciosRyUo3BmJqUBmhCF5SzgNFkXPDtGrVhYB9uFkX3C5BVe98PaWubwd8AEcBcxdvHp1Huv18WM9YRJ1ZR",
  "key11": "WCZRrECkqmQsUG7PfkZmXvorRhS9hCmqPbwERsXZK6qHca2DtgiHNqSLwe6sGGV9hxg9sQ37rvxhFQ9PumSMqj8",
  "key12": "3xBuJ8EcAc6GURs95dzLq5opQR72RrDG2TD5MfmWSvhPw1xEupHKbLpFEHmhRBwwHjUb2utWMfFnpVdoGAuvYGXP",
  "key13": "4dEkPhndthTFy5TVP81Zm13ZDuVUFNF88SGcB37qDy3keRXaDDH57LQHxAdgVzVvnriyBFo5mmb1U39ET2NCyMof",
  "key14": "3VunS5t3XvreY1n712pxLt6QQNzyGndbK3uv7kLScTnYrUnULJ4kk4XN5rLF8jg1aRLwpDzhq8TNRKvV9z2YWhFw",
  "key15": "3rvtvHJPUW59T2XteroSAKwEcb4NpygG7mpChB76xSbQseazni1Zg4kiJA1svkbtrRdWLLVmpr3yQtJvrq9uTjF",
  "key16": "5n4QiEFJb3r7tQApcyGCNyAYA34AY8Q9hnCmKeibLHVu1xxEzd1h1skfZbhM1mrgQZCNq2CnmiHpemzcQvrfyRA5",
  "key17": "2AahTSsaBGrRHKJNw8EiqXvB5jopupuYwZQEB39fv6Pg5e526jAku3o7EjwX95wkttypFvpHv1m6JZwphZGD1RTt",
  "key18": "VMMepsTGW1KLE1CEcc3ZwPnhNoGgPn9s6RGdVKmPFNvHXaNszupr4PLsJKdyhjNWQkF7cz5Zu6cQA4y4PEsuMiX",
  "key19": "4VqoWNrdju55LKFn6skERxckJ1WSTeoaNg6kBchEkvuV99NwJbsHNnFtizu47ooYioWgG7CxiCMe3T54G3w6uJ1c",
  "key20": "661xD3rpDmLjYkY2AiWaKXdP6yoz1cN87r6DNm6rB3NxvCnCsxrnMkjyCrhQMs3FpiWWrkqDEMQe29gdx2dg2gE5",
  "key21": "xLfDfMbsjDeu8Arqw41qfWD6iQQXK9LCKisq7dVQJPP5NyovGRzCMYfBzTuBwJhNY5PaiZMKYN4zfMuVEuAmdBW",
  "key22": "4VKL9KP5LJHnzLGNFKqt1gc8pbypYRrfMYeP4SzPzdJU8Hk4YLhqx8sTkSMKpSsT4tFpD7oLi4Fp4v3b9aJdtkoQ",
  "key23": "DeimWineD7Rix7dacFhw1rZ7vz7kAdAJCzTYwG49ZQPXxZ5FeveCQYERoynhcDCB3M41uUvLaqGBgZTuGQ77cWc",
  "key24": "5ixGfE3q1oHaVHcN4khgmd8XQqVXsPZYy3fwM9EnocioHSoEegRg4LPE7LTe6H9DM9ThuxnqxapdZmMSBEYtJQYd",
  "key25": "4o8vu12nfJJzTntpJAWpCAw6NxETN59EQaJvgWYsMR8p9PKn4Q35efjqMWdZdHu7Vc4mTmQDTLGzVvFfRaqxN7mb",
  "key26": "3WpEYitCRFMFvrKxzm6siMeYZAKEpvyyP6cambaxpPt8J1TciZDQu4ybQW4cfV2sMJfG3E9tJEAksrZXXKwkfdpB",
  "key27": "5oQLNMiuTP46ZaHoxMo7v1wjj5a5Et78njYPStnykW6pKTCJZx52AZPdGqJooPVNCk8B5qWM38uRfbnjxujgijsb",
  "key28": "2MdRFT1EA7uTEKfNLHK9n5LUunvRw8J2AMXqhqSseyBu95m2XMA94f4z8Yc4pt7hAfoMAL1saNBtTL6ddQuXsCtG",
  "key29": "659NAPQkgy3MDc2czLGJMHM7Fp5XKYiWaKvfjhUnQsaLeYTZgQNSBGwDKELoW33o5sSwsW1r2DM7eENCog6s2L1F",
  "key30": "5cdS4cvboMiX8xY4W7oxGCKCVGhkwf8mE5ecL7HL9vmUW9m9LAX7c5tJzYAZhZ71vqFgSZBkwuXRd3LU9T5a9CY3",
  "key31": "2vCWXd2CYfQ6fddezwLQwg9YR8BC49RDUcontzEYtoubaDTjmtqpjLdoZPFoQWSEAkLF4qbkAPnuJFL9ByEoWeNZ",
  "key32": "3ZYiYD9Dv2X2sRpGvhsLrxPQXMimDRuAb3gZZhBxPcU8wPWejUpKCqbvSnydnTnhZmr1ovzbdwaS8w2ZyziqMWxB",
  "key33": "2LUrJGt3iHdWWnueGCh8R8i186CePGMwYouVRc9EMuZDLVhW87JwCRD5YUNFrxPSL6qkqD7xzH68vyP3gJzMFKMk",
  "key34": "2Wxb56T79hcuQd2BVExf8jyrs2iwcJwCQGqnCJaX4gjH3awQts7qfwmSoEr6uDtEpa8qSCRUWzsi4FRHBwEcCHHF",
  "key35": "41F5MbgD2F9Q4douBJtMWefKWUFVccFD6JjePFiM5UmsX9eH5TAE9UWG6Esjbetd5YfEcEQeiz6anrUC6DKN2KEc",
  "key36": "4TTirX9iCcDibF7Bjq3wUpETWbhdQAPcChtXifTZ48VvWkMqEogYHSj7duzSfv3obTwag3qbsfztcsC9wzqXqb3R",
  "key37": "3YFs4d5cKLiAqRRP8g4Uh4RPLvQmikZ8VQgHzcppanPLcRBwFjmtzP36VcJUgCSWVAJGMufvtPzHQ8qPfXoWKh9w"
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
