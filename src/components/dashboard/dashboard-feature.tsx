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
    "423bpGCZAB9MYbBE2oW4xhYahPQM16UYEmupY86MZhUAFd6r6bj7hPY2Km37F8zKtMgojd57axYzo7jMkgSdQBch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMwhzFpmTiLesUnoYrJMfWwBrz45gntHwDmVgVgyzuxUgZ47ftFMLNmGrLJXNmRRfYoc2eDcfcVVKfboV8FWznE",
  "key1": "4Y7yH9XM2ekAj5ra5ULN6vasyur6eZioVK42vyJnqZskESw6csu7ZRdUEKk3sKzhnWDEd3oFmjPmyWG1oiAZ4xC3",
  "key2": "3EPgA9JJB8NhDLDD5bXB5QgCasjyDWFBNEAyywShJvLhFRzxKprz86Hr9Z7w3YiEQ55xEF5dAsb8oyQeSQ8931Mr",
  "key3": "LERW4LpWWLWfZeNa8EMv11zaqEL3QVZ2KCmV8BionyKzQkgEp8Jn76XCocPjX9hRdaz86EPmdzHN7npy6voyfbX",
  "key4": "5da4f5vHyueMPpQBC8dgCsizzxTXGGJ8n8fG9titqXqeaZQYp85W3iNxMdAHryYhCmFbVwzpGc2XUhm3tJkz3p6Q",
  "key5": "4ap8JiEonsFtpoW5hFZJGSwsUDrb2kNmxoeZ7zn3xekQDtrJ1f9ZBAi9wrCmsHNTK2sQdXzARyPEsGEFe38Hg5Zd",
  "key6": "5z3GwYeVJfGJHj6FazMwQuB9BJx7UFHtmxUVWa2mELRHKdeEGvhNiB1KANh5Eh8j4tNxjyNQNTQk6BdU9wQBxYFd",
  "key7": "Qoo9Qyf1iHPv68TgWLqpSHGG9NsPSrXt8QaRyhJNVjx53J94S6GZbAddM3aQEZtZM36vbydEBKXi2t5YdsAXyKA",
  "key8": "5HMs5jjmpHuf1J6J9jqoSMiuvG4R7yuR4WaekhMEQ7PjM1J5Xd7PyBM5v3ETbTjCG4T7B8PQqBaVUF6rC8kg5MUw",
  "key9": "4ejJettysip9n8KRoqZbdRWywdsNNK81RCGnuiisr4SqXQjyFKdrTL6HKZSJTK5Mt9NVCr1iuzbyRzMrcccHbV7W",
  "key10": "5uLWHF4hatkdFB23odP4DRLk1CzSZg9ngoULRFMjbMUmE4yMW31br3Jk8ro8MwdVj6nQUxH4ABtWSrfqbxzJFP7f",
  "key11": "CqNxgQ7mFfHDvx3tkutQzSibSnma2NaaHfBuF2QJ75vbuVNQpBrFvGnf3gNnpFmrjADtZ6rJuoV4uNRLTg8DwZN",
  "key12": "TmFEPo72qQyB22P6oz9v96AR41AvaJJfwoMQfCmJnfyQvkgjTAafm4JrXiN3bGJ5B1ZpJCtZKsJtsg5ioXWCxgg",
  "key13": "3QYsxGjNTKtBbatPHnAkMcifKXDxh1GZmLRJmagytoeJUek2rZ9SeEz2NXqHAnPBsHBDAvJeHAyMNKr4mnUWCUj1",
  "key14": "g8CFjpXPX4Ck9yQKP5A7UYamAfdzbedoYHUQDEEXT56DT9bLZEWtx1gpFXSU1fGNa9sUtwZASykHX4mzLqkBFo2",
  "key15": "21gWMfYqcABLp8s7uKD2vp848RUZPjHEHEDNwvFnpXguTFcV13kkNUyKEtiViwu8Xaq17FX831LWvVDQBjZcESjL",
  "key16": "45TtgWtcT8XMtcfBGdZybzyoShb5TEhBqBjan4T539Po8baXoyZoVWg1MBtaGbnVXn6sUeAnfe5SXf1FsAWuagPn",
  "key17": "2z84oYuGmPRkt7PugMWFZ3vEe1rxn3kaTuEdewAWsw5wmoAq7zDBGNs7KPsf2YaqhQGu1vqpZCvzAwDSMR2xBU1E",
  "key18": "3ivkJdhuPgUuHXUw3MxXi9q3LnifLpNdfCL1b6jB3bBzSxcsP9VNpegWBamM4XbzJ3J2YfVUNdJ2ukusqJVQnqaQ",
  "key19": "5KHcUb9oaEsDUvGqcbpXTdAUumNJ3w5yPtNx2tZezEuVUdNCGT3wVzwBKoPfMzgf3rdKCT4QcxZqcKpo6SwT1Pbe",
  "key20": "2HzXoXg8oFfd1FSWgZairYZnJUuqnXYRGtjgVMEeaKiMsm61FTdwbrV2safMnRwMiPqMXPA6AXjhagqF3XjmXwik",
  "key21": "3ihvrRxuaic5cPYYEuGy3m7wsj74M3JktMZxym8z8rV47dBt1QZ95Dp3XKufaZczbuhAWUu4Sn5CtAoFpUfKzDqf",
  "key22": "3x2idSywGYJqkPg4sb621m56n9YP8GF7uPAEj9CM56DH7ThtPicE9osDk94P55WXMXw6hEmnTqRfQoXTVUVHdghe",
  "key23": "5Gfa7pUZYAMxd7VNVnZhTyvonBweG8xF1kB234vkANTzz9WsXqs2XfeLtdRAfdQFo1s7U4RYodEy3mogArkAenrK",
  "key24": "3DLqzukTPwhtGJ14nUiCiP9VDSERVv7C2bfxevTfTSVRujvHzuTVeWeBNZNefMvNWsomyvrEFCt3AF8t7hVasVq",
  "key25": "dHjdNz5JSfLoVrNBWmXkQtWrcXVkiF4NzEP9dJo3ZUDiidsQiyCQHfRfMAK5TprfzfN8yWm8yreYuRterLWqKiv",
  "key26": "5FEHKAnLjCHSXWyu2Q1SHacKgM8zJTDvbaUqwmuwxw1vFhnV8bHqoMLMgvAtrncWw5JYSGvRV9ri6w2HzeJh3DKJ",
  "key27": "3QyYjKYU4G6WeY6WVfdEPHVRYjiCyu2FicjmBRZmpnPdbxDoJ5GTCMLfrJUNS3kS6nWoSogQZ2PZphdCeLvkJAZa",
  "key28": "2RPTxhXLMevY48ArbSu5wsy35QmBGwjpsLto71AWTKQxUC79PUx5ArGvTHyhAQ5FHEgE9NXMWMGyu8JvM7qSq2LD",
  "key29": "2mToVjwRiZForsnNcUPrXAm8EvnRYKzNXhihgeZJddHP3tfwBCSPD1HYFCqgA5Tv6CWPLkfk2QHDUNmwMyqS1PrV",
  "key30": "2BXs8y3ymgHubdBQYVtyPe2aja5bXdycmggJzCfiWBfPfCMDjyTe36FogzhzyDCvB7jQ8qhNS1XF5AQ7r7xtePtc",
  "key31": "4E98hZTK8RuNUuRMh3VzCPcZEPLL4DxU4qzFZ5ws2M5uaVNTroZ536S94Srqj64ZCVfCsyV4bK1FSrwXs41pPbke",
  "key32": "47dKhrPzscCedYAwdvt9xm2qXjbm4sKy1bNKjw3sUWTXsp6KUUiBNa9EdURhECmpWMBUSKD8RpMBY6E77Lrbwxn",
  "key33": "3rc5gqxxs8tRSdwZ4wvXx7r7zAjHBYv3RBP7XDb9iZgzNJgspVpXEAVaBEmvwQN6w5gxkAGStuQ51AUeXBhEvbtC",
  "key34": "53oXHvg7U8oTyw4N2wGKwZPYWEPyYY1tb61bw3jaygEwodvfPsxmqnwRHjfEiRXwfj4pezRJcVEd1AZ5kj4bzT3o",
  "key35": "5xatYKz8o2LoU54U2KDGS3hfeLPQ4Thjq3ACuXSWY5kNHtSCL5No3xpbNRxBowKt5QDpJP4Vt1R1LptzXJpP4Arp",
  "key36": "4MdkW4TM1r8n94sqFwWGtBmNEX9ucKiR5yRtbtUpCbcC5AGej9iYqsSnoud3XMGqL2JsbTzxT57fZ3ypnivez8ve",
  "key37": "5ZrU8G4KAp3WAuA7SPmfuTdUQfVjGq5e5hAHLnEcLrXhoY1DZy9MVMCxBai7dXfm5aYSTk6r5kAADqMi1wJBpkb5",
  "key38": "3eJ3RNN7DV7Czk3rKFZyEZ7PZtYTMbHh5bBCdiUzHsQ4DFPWwP695n6uue5Em1wsh3r8EndusbncpdFf6xGGTBJm",
  "key39": "4t9zuN1GHqQHYofbKuFzJh6aEYfncgg9h9RcAjuvq8TB8x4fsK6MKvGkgMQCT8Wxw5DB6xgztD7ct3664qPndezC"
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
