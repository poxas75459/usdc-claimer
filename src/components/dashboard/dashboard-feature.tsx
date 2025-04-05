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
    "2gLitc84aUBduqppqKr48G8gNPhL6WG3EiBVNa1omhXQWjFu5BnBY5Yyw2qJBaagVmAaQ4agENsof9863j3oFrjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XGDsbvasJo1z1UFZJH5eM6gAveT71WSf1TZBTsAunBHMwK7WvkQQiuLtvEpq9imk4bwAkoc6JoUvyUBS5a5u7Uw",
  "key1": "2J4b4wtVEtSqLkA3yN6Q1TNv7Vxbx5oN9fW4uYbrwWCT8DCQvbXoaA7qH8H46FtscJc6zSnP3CpG6e1PSuMxC9eg",
  "key2": "2Fj7VWHvn2oPDrv2GAWLeagSyx1g8ZyXaqYg4apbzFeSj3P9iuNqhoZKENVWQGLsKjn8BFGdf95TKXPmS29aa6mS",
  "key3": "4YMqQ4wqRUKWgCgkYMCT4QVqSMihyas7HVWbhZoxMixGTS9SYuUqmSqjL9sxu7L7ri6VtDNqwhRSyeofihNqY2xE",
  "key4": "21d9NvCr5KA6VVjL8uqv16DDaRa1jgSottjd827zGTi1wdDR2zQg3jTGyPgFXFMtjq4PeC6KUkFm8mgvRRQ5Q87S",
  "key5": "4s9mr2QHdEb1dNucR1GMjzewi8nnbSVKenGth2gEUKutbbvPRC6DoX6M3ZZSsWziwTcMucznseGerZuU5uhV97zh",
  "key6": "236CpH8ERcqQw6SRrACdvTNX61yzxsnyVX8wt7AXuMvw9j2geqSCZz3XGCxBnmPHdnBBv8XHb6UnQtucKGwSQ8vU",
  "key7": "Lr2u9pMvgBMyUxXjg6WLRHCidyp7jZTvuFDFdSHgc8Dv1pZjptrcPQq4ERb5gtsgwHpp2Cquy6a3KYGXxzPgGiv",
  "key8": "46GroL5U5iB2mrengv7qubZRjKa3wsFm5HSLK5eyUKn2NocBWvjqUdP3a1dqb7LuJgWriVFM18t79LGvF72niC5X",
  "key9": "58eYhstsyjku7MvsxF1tUsUctUfgqFHwA7neETycXJxRYSMSQvDztPpc4PUAMZzmQSv1UWHEcwk29kS8YuZLoSCm",
  "key10": "2Wsrs2LbF8hb7qgVEnMBEdgbJfUaVaAMYzKd27Lz5bW8Twtmq5Md9g9rKpse2Cfo9M44f84G3jih96z7xNMvHyWm",
  "key11": "4oMuktvKsUYnAZwAVxmn41WXaAovFns7gDv9QtpFqMvyX8G7rFu9DSD2WPrqxWU8jppnhACnfjXjbDxeEZc1zMoK",
  "key12": "5nJw5uS4AbdeChFrQsKLQPCwAhEEUV4fDLpqZQbwswmv9eysjSC3wsdsD19Rgb7Axme85UnsopCt2fPymqD5mkuR",
  "key13": "RhmaY1nuhfVmENr4uUHsnXip9ZLieTnPVtH79XgF7znyMuGD3m769ZVEeXcqjzYVPP6uzg2HYH8z2uXSfCMcNVP",
  "key14": "4trVFDRGdWQH9fTyp8GUUSera191MdAvEa1ceLJMmLBKYyG7hd1W9TKCF6aaHSA9pymNZbEapmVhyZJcTn9NNCWj",
  "key15": "2L8weNkyVnheiKaWuKygVnro6fciJqGExYUW2SmEzEp9aKQJ38Eyz25KHUyP2Njub2adKMHrckpyR1SgrsmE8874",
  "key16": "4YP44MGHj6XdFpp4Ks1arqJkFPdqimunyGMaZfDL2yXngceiGmAbfxnpL6FchFgwv9uGd5w37SNxuXoNv5xsNb9K",
  "key17": "66LHaSL3WsMjmeT9xWFfSsvkjH2hiez9GN6doARofgw1pm4KpiE1QZu9e9rZd7QvhpQMDR4KNCgFRpofkjivUjSA",
  "key18": "2D5PqtdkJ5Zg1rWfLHstf4sn4uKZ25q5EgFExqLijp5FaVtcjyYDs7YbdZTZX7gNKQQb1n2UxptyEySwFDSUqLYH",
  "key19": "4wyExaadyVzTXWELKn8DnMyJEhuGxyJj4b7tM3u5oykgUmXo7CjzuCu9kRJLas7UDx9ejqfbowuEZZvEDrJR4aaK",
  "key20": "FpeHbzmcnucwRVZSaZyxbGyqVPkqMf9LwmFuWuGcTBKPKVj2pjUNNVDwu1J2uCbAXr6BrDLtAgPxVNV2Qmo98YL",
  "key21": "338aDaj9oaWJUKtPPpbqx54D8CsxePozuhVV4CNNWxVvYfTGoDPdbYV1UipFc75VD8eJRS4FcBLFXhGzQU7EUGBs",
  "key22": "4pBBfF3Znyzionst4e7AStMoVMhVpnM7na5i6bmXps1SJUukEAMGakso8oXRhD8RAH8FjyNcgcnJMLC1NGiR9HX8",
  "key23": "qhkwqCZwo4HUHh7SctkyWWxDfciJb2Td9keSptxqt84Hs1Zuuxhmz1sL7dKDr6XEciW92eKsvvZPTZkjkGwhhWf",
  "key24": "4tvugVFzzxGR3R76EGF1KeVL1Hns5woU2DNMNeFBodzWBcR9kcameiGaKHpmEj86T7D6QG2zr5VjNBkAkqPLjT6k",
  "key25": "shQZZsuGMfjBxvp2nkyZrTJrsQFhbGunx8m243xPbc3GhFKwqHkvtH6u5C1rCmfCmUYtKZHn4Kr3WYPd8vkp63Z",
  "key26": "vFzjck7apdsbZUnMVaLawDbrkQwqw9yny485TjmLMro78pj6fRk5MQrqnNCMeLNXcDjSgCnkieBkzUfZccS1eAK",
  "key27": "4FjGXyeMxgPefr21kFr3sVzCq6sT5AYzNQ4vH9dV2neWEkYWcXj8q5cvqdfivFhqZDmyvcHSZ1Bj7EaqjtaEu61k",
  "key28": "64moWeyGY8cjKcstM1mEfK26tsSt3Ug3VhJxnWbkJcwaHfSkxANdAYjZmjqN2cuU81SKCoEQQ29mK4qfKA3PWUFt",
  "key29": "4ySySFvUTVRXm7NRN2CCGMPG6zwnhQ97HL1yDhGYA4F7umkVMR1QS5BxRp8nqcYLChDGbKJcZ1qi25vPrBfoEaC2",
  "key30": "5bec219d8BA4SBiLNTzSE8v6F9cc15nYr3do4fXs9qaMugTGkDkAXyEj4NBuG2NHqzjc2qgF1tTQ7ozJbaTmbTdM",
  "key31": "5z1HSZeaSKVVMKEbHowkJ8Fw6ss32jQbmqpFAijQ6MC9wGyQpmJ6MCVEPCmhY42LeVE9Z82hjAbohJw4soM5fj72",
  "key32": "23gwTLasaHNPVha5WZ5ithLLqXb1ficbdq1ae9mLasGRgZK3qXBPjr7aoHmEisUxaNy5ChgE7KgvQetRhHFhZFkx"
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
