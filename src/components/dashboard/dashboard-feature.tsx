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
    "2vzix7FwYiGzxjJLdamKMYL5Smqe4wgicB6ptE3oTG2AXuqiobSG3nXPgoipLNkFvcX2om4wVwiJSNmnfFGfW41f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rYBtZCAoC5rpw3oXnhbxj8WrQZwLnWfRGCVu7utnPdQfcAo7YvyUXFBfb6vc7kHQ9AKryMWqM4MpUXWLKFfPmcP",
  "key1": "2BoVL52jPmtMySX9kK7ixZozvnXhYAnsERumkpC3bC3tBQyNqjNFp12oeGpjjcvp1stQMRYTEZ3vaXZtHL6UqMK4",
  "key2": "5n3HBAwyRxumdFy1e4eUvxzpNzUNqB5T5LXPWh3uScKxccwvsroqJKGGHqg9hqfFnrB3ZwnEBk8T1iyzS9kTHGfd",
  "key3": "5Lzkazmrb99G2YW8EQD5UscrtfxYyEUvKCCaYyowBN3sgTNyqWDZnDUm5xeu6PVya96bFnFdseStYUpeLA8Fw7uN",
  "key4": "5Qvk9U8kxBRQmf8HCV36DYoV1KE4SWxp8kaw3t4UPobAtMYm8Ft3GBA6UBgbxSLcyac5NqZi3PiQp6kJxaTxKAC3",
  "key5": "5451uaaihqukziE5SMfpVh4MU1HuoYqbr2sTxFmq91LHBviUMK49swMHWLKw8P2vPq5qyRmf29SKKMjjm7rm3FpV",
  "key6": "4JV1vUNg87M9GeMJ2BxyC9gZZtUWDhTaAMgdZZSZq5U1wpYWfET4UAXt2KWM5ZHrytZAQBxYvv9Pgj2T6U3spZgz",
  "key7": "3aDsiqPpKcwQf728S7kn4wAkbuBEg1jc8Eyvz3ksUhFfR5rYZMJU4DGPo5NGh8PPs4XRYPaBikAcLywo1YPWi9eZ",
  "key8": "55sxWjhxNwJTph3bA28Dy1BLum7giQw26XwbXTjUmNjMUsLdCYYuRPPZRVSWDJ2PijYh5M2uLwopRfeE73zDSjed",
  "key9": "4yxF3RYPJ7umjNWAfKAcsgcdNsovxsqKkP9vsBH95U8i1UWMavxJqQzMzzcVeLWeFkR1T1gpUZyp8Ak42uefcKLV",
  "key10": "2G6iuvgjH9XXsWKJCK4iEao1TkkdgzCFnurGGAbr67W6Pq7aGTzS5sGrSxvuBcCMySe4QhknFZWXQGKbxSugFcvY",
  "key11": "4ND6f6aPzY6gqjFYUr7whbnoTEgrsBh8bkaSur5u32fuowLdbvo5QfV4DRjERzwrV4zTpqZ2TeXJB7uHy9a1bu7d",
  "key12": "3CMjCz5oDuMJZ4qsCHCLg1YjAyKDXJFVH6R92N9RgkFZ6br8P92Y7EjZzSkMk7pNLgZgWNPE4h4L1gtNJGR33v2e",
  "key13": "5am6FcvxfaVvxstYHzR3ei3pX2fYdZNhyeaT7sgT6yfCbaPZkZierdQVbNKh69D4U6EbFmLmAUnShABCm6ohPhH",
  "key14": "2KxNqNQPTrxEsEYcYdwQwFaV9akUyNL1UvmAEzjc3BvBf5Civk3UTSzzM6JiMKztiv9UDvEdcvF1YcuLg8uoBFHL",
  "key15": "3kmH2xV6D2qU1A4uKvXvJURn5sgk6GmTnbCc9XmsBMTXMcp4GuxGy8bfp4gGdsdhzq22VskopvLQJJEJ4XL6zFXc",
  "key16": "33tC3iRyqsnKQT5dzZD7yYh6UVt9Nm3CHLbfigv9XULzwTJUsEihvYwZZSNni1fAAQemjMnyt6CGQKu5zLqUPqM",
  "key17": "Tbtdzt7Gjw1Up3wnXYMXtALFdU5qZ3wiJyVmF4UQePTVdHiTuhUnm7mxs1Giy12ALTKz6uVUGzQfgSMfL1gjFum",
  "key18": "qk4JGFTWpn5pGMBJcZSZzJ4dgMEc26d9fGcVefxkT775JYPNM9S51wyWMz1tRUTHQmbmJhRkxV71aVZm2oJfXQU",
  "key19": "2YmDoBCkRay9EhDkoQxr4M1cJuU2z8MrzgLVHf7K3nhuzAD25b9T7t9RAaxps3b8q1iJNMz11bskGP4fzC1K917L",
  "key20": "4F6PVRGBaLEL5ENRHi3fiBs3NcdgZX2KcgqqTsskaJVn57nTh8kktxXb5UU853L4BdTodEYDhLdeLWj3cRD8ER79",
  "key21": "zeB5MFNVj4wPghsbnKAkyia4R4NovXJoKFu2v32H4LdGzTjr8L5XruLumTvgWkyXsRh3MzAjuywjVZBUjPGhYyT",
  "key22": "4efWRLN5ZESmo8GjbYVVibJw8RKawui6BRikYxT1Y1dJsCWG8CJz653tzsK9pWbbhzFpyJfQXFLoJrzeyXcVsRpx",
  "key23": "vEWEnRXtC8vYP5fF7T66Jbo8i6pb23Rdz8KiHj7xsodjADnC8o8pa7hmz3K2Z6iTDWnw3zyGzveqoiy1kT8RppW",
  "key24": "39T2FKi4mps1jkgzELHTDyTS1457cQGt1wVTwpETHmkxUM3nSET4dPfQp7i4ZrUXNhcmqJPA3csMcsBcNAgQbf73",
  "key25": "24bnj9HADhKjvB6SceC8QoTq1fN7xfiUXV5sySbRXcjrv5azsLzEniV3iATm7fwxrTKrnhsDmrULfkv4XPKvsyYA",
  "key26": "2aofaMTCx3Lendw9PM5wdukZtGiiyWMVu85Wy8iXM4SxjBdRpqHchmMAxVMgGKFfFYNjr1twTecpPiDrExapFLdE",
  "key27": "5g9LnHgCYB63r2vBXydJViWh7Bkj9ERjf6Lcfky5UurRMnzs2WVzp5h1cPdeHibDq6xD26uwvm8oDnp9353ikudM",
  "key28": "7AMuNWUkN6iRxiBUeaVgEFoqKF18AwfsL1eEVT82CW8VmFEeycsX1qZQrFX91Cdizz9hrvapQLVq46rEMRepR3m",
  "key29": "57LKHCiaJj4jVxMsisZ44D3TTXfYDmtDZSP7dHskvpVkWzrvz11WPQynNXEyTPTUgJsdyxwFoSy5dwKFzEFAZPng",
  "key30": "5EZtMVCdAfmuwK8AYQnSh4L3kQPYTZQdD1gzBbBa64FvMkRnxBWvsRVEgGTLhWzyqgCWZWqG7WE3XPNWhDzdwkxW",
  "key31": "5j9xWhMS6Bw9mUvX4FN6FBRbn2GyCQMwFWajjdy9AqTNyj3oNxQ27LuGoPkr9o7btWs4gQMujA4z7hRTLDbEJMjb",
  "key32": "2xEYrDNQxpiBUkz4j3tNondmU9FT8U822VYpLvjdeAVGEQeToQ61FSyyHhjSG48L7nHjHNtmD6nyqD7bEYeZRBsL",
  "key33": "3Aw8U94gBV47ynn5ixNjTByqXATQLZtEeKkTN9gzsomofcKYWUtLRNMenfzsovkRmvzjex1dV1hspDneXwKFw9yd"
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
