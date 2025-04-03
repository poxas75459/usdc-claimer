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
    "2GwhqqquGeLtniGbCPe5vYDabuLUVNYciEWbQNqoPsWGVmTQAL1sYycWKwPfiPHKZKAy6xyn5um6YzYKZctZmfjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SuaX1495KJFyykvUAgf3wkWx2CEMhVVJXsU9TnHVA2Zk8Fg7jVnsEPFM93rmJa4v9CCYXqWaweLEciDcP6jQb5v",
  "key1": "EunPjHVMVHYG7uuVSehhBtYrm5DA9WX7jP1MwBe93UzGSjnseGTNVmHd5v8DUJ8ncmySxzrLuE4wqSqML5EK4S9",
  "key2": "fCn9RyxKQvVXNqtu3Fd4Nn8osVXr74k2BEkirXdwBdM2Ffm3V5cwudoh5kofZirGkJPiUBYMWQMRe16yng63Ejk",
  "key3": "5GXzDYX8MqxEudpMNBy6kEgrMc95oYHfWJ6qDxNj7b1xWscotmaihnRUd5n3FGwLsGwhCzpw7C1KEWiBSu8EKd7W",
  "key4": "3cky6g3Sb1QDquv8VhW1gT1A1PXu466K1ugWETuSBke88ankadbhPf3pQ7ZYWGhdydgkHVWjxwBy2KbQwzubPAR4",
  "key5": "c3VTkNQE7umdNKaNeu3JdL6K1FFTRYSeoit86UX5z3ZY4FaG1KHFfw3PMa8KZYAZvWsmrWSBuBuCEUEGydtAJY1",
  "key6": "2V2M18Kbx1SAx9EvategUwYj1KhrPusK9sfBrmwzfcD9couq43nsfEFNVzvXWQMhgEss5ukFQTgWsdvvphxKDkJC",
  "key7": "2VRB2DnkjeweZJBM2V61Lxq29uTVzqZCdVv2o9X3tDtncR4dF8tFZKja4CszfiJ7JHJiTZScezqh8uEQKiFFvcLJ",
  "key8": "K28F47P5TZnscZxudxDPPDXGizTUjUgzB327wBqkH9Q4w8bkF52rjHGoCrjzWkppsgUDNDuTJ2uzYtfHdMBBUz6",
  "key9": "4U1GKZTLqxbsC3t6BtF78Eb21K5J1jgqRirkVxEoRH1ewVAkzZwMKxKeurCURvnQQzxA4gWj8AsNqamNZmVC7iLS",
  "key10": "4TdZxvLodC6GkrMZcF9h5XzcSbkHaqu7rusGq9Sx1Wv5XDu3yFwq1Tjn4QFZviknrKoUHiiVseJApUfChSQ4qFXg",
  "key11": "2ijDPCsM9vyinvWPERpw1TAUNzD7pAitm1phhLjYcQQxQqw5jHtiEiLLSDchVzJcZ8uzbkE4ipNLRE55aX4pueQP",
  "key12": "2LACHqdsG7TDJaEUZ9eKDyqATGmX6yKNJ56dWBG7kiagZkbBK7fPRbT61KugXXiKw5mgDgC9zqVJBwiK4nv7HfdB",
  "key13": "EfR5M7SAYdTfhL7tuLEpayuDnM588n89qp7sZzySEibNPeejmxZFRrZC5gH3yn2J3G35Cdd49jD2GuRa7jFHj1Y",
  "key14": "TLyuqYksyeodQLBfx3mkEVSbqBeTQQCCzGK8CKFfjXdj8K9gGr1hrBxPizTvBZBELyNyVGCPcqooY225uCn4iqN",
  "key15": "4Wr9dDWLUeNLihvYd2DjEN1ff4PKizVy6pbajBzSYhWbQeJ3LDPiZcXfnZ9WdCdAwJJDqvw2G8ANUSkwTYHxknge",
  "key16": "UHQ4qqaJnyv6cLLJ5hvYaifLnsrGPKjmmRgxNPidLR2ygABWh8gKhrN9CewqszVE7YoJBmP8fFMDKDH6EfQWZr2",
  "key17": "4vehUCrXEdtxDuCwTuX6E2j3kHhT6sPe2CcQw95dxShgp3R7YzHKgj5qKxig5gkToJgBjcwkUXtYJ7UPtF4Sx8qK",
  "key18": "3TCdJZMoaRLoJMx7EZcgh2ojDmvJ6mr2j6QwgYtw1ng6nZ7sJ6WWmWTmaQwp4RTX5mjUy8GqgxNAWGYbd3rVPAYx",
  "key19": "5bGYguysGVczn2PWg1atLLNJZ4YX6TegEDkTuETGxMVa1mfS2hykXCL8AQnXdJtQYF7GMXTbrc9qkJW54Hha2XMP",
  "key20": "2hVseym8uzZZRSfQwSv7LbnNhbiJK7ZAc59Ha4BL7qpv6yFSbaA7e7k55abLJKnTkGmjr8tNmhLR6CiVRUbaVKSv",
  "key21": "5rjtL1zwv1vpzRD9X4L6Vp5MCVthgzXT3yvF86ypKHvgVWx6GWqdFGEpMxHhN3pJcZZXZ3XpN8vuGSTCkAEbQasH",
  "key22": "47hvwx1zruW391H8XTqHPUSimE22c6Kzvn45D4v4iBzZeJrxGAiP1G3sL4mvdP5ouXvpsztx2R41FBKCvQ8T9CLt",
  "key23": "3VVLrLeN3sXgVQJnrywWaHXosTgZqn11sgLxZhWEaUhihUiuKkRm4gE9iegGeffH2nwezk9ni6bQsR9trnEGzYuY",
  "key24": "PZrqdmdRKEkFyc6wa4YmGU5shY1uizVGivUWMh6E2eRhdRyFhNfBshx5fKzrrP3vjt6QeeNYYCioJdPEE8czzfB",
  "key25": "3y3tuxJiY4KCUZEWz1469DcgtVAoHdVEzuqQGXeh6nrX4KYwrL5m1LjDe1BLF2kFjESEZxGuS9oahUgYHG3zGYdk",
  "key26": "28S5E1hrUJ8uCFqknCQqkUG53SQFZtx61bKn9q1ZAHDi4YHjiaRFoJGYsnMcSAFYsZhss8n8qoTQDvB8LVZk863C",
  "key27": "4bk53k3bBPFR2NjPhrRRuxMRh9ZZLy4gr8ZF6Rwb9nXDXG6N9uwQ3iitD9eeeqYESbxi14Yc6mpaFud5F9x52yFW",
  "key28": "4gDRvtZaWdCtgQkSmbDNckQj3w78KUerjGeYRAVyR1VhQEU9eUdYu79bG59162hihiVJwRV898gYoLNn7UEUEuNT",
  "key29": "3sHkGjGvhzQfs8xaXSFRj6LtfoKcznc6x8AseQNgep2Lmxv2HXnPqrfJKqaJWg4yCrj3sn8SyhJHcWduvPa7Fodx",
  "key30": "4oUw6Lzmxw4i5hgEM2WxGvKMvvcZ2kT3WgxuukquBtix67iMEQbfeU9Phc6wvefJQMN4t5JRJN8NReahVR2uFdv7",
  "key31": "mPVQ8vod3xkeWSBE5SRn1tTPxmDcia7HR9siLKKRKxF7dkW1obzjeZZHWwsnvNYDWZosnJPz9W4iDBNH9ffr75K",
  "key32": "4X9GyW8WoH37J8X1qPeDzLsLYADvhm2Dfk8YPQ78etAyqeceKMKz9FPUGR6oAYc4mT3qZ4XKRrNeQVCZAvhaSgpQ",
  "key33": "2ymAx8gRtLnbfoTAdYhBrogf14sMNu2bfgNoTngMUR87CcxFgVXsiP3Vsuq4RfBUF4pdBVauf6XV3hdavpah3WaJ",
  "key34": "5y9jQWhkhN7JYCKZqpBBxqrxcLJHD6qLW6xq4ZyTByGu6Tt7Hy6HnYmyFAbrcQ5WL3sxpaW8yZhsuF9JsDHVEukw",
  "key35": "3y2fUgMDGXZEptK1pg5a1fQYXxH88MmsR1PxAUHm8G4DfXJJCCuj84GAe9b82RQ6urq3GpmLqaB12dwMMtAfFRfT"
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
