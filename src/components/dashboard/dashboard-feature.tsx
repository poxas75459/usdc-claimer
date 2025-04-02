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
    "3SNZbwghDKpFuLkc8TUXYTfNCURybh3C6mJKe7fN71YFJ9zSHgscZmfsovpNGmFsK1hzxVTDEgtGqFnrD2J7TBaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pL1ymoSdpzgnqqahwVnh1PS156wy4W6np949fmRDp125hKcuBjvfNneZkvZUa6y8Yr4qbVCDrP6Y1jfy4SJMSKJ",
  "key1": "jNgwN4UzxA3KNqB9EZSkiVZk42LNwP15Fvmz45TWh2FTizfHKtX3yGXUqm12rkHqUefsvw6PFaFqRmsnhLpS4o9",
  "key2": "2yMuma42xHX6CFxZCUB1ep3Us2czqbFG6qeBNQM2rD2W7JBkfZeu3YoZ7wPtSP4p929edeSqnkzkF7vFBoAyA2rc",
  "key3": "5BMExVnvxNmMYR2k5BjM7QmuyTBcXym8yQF9UfVL9wkKoLw7eNu7CFMSy5aDzPVJYBW4axD8qYb57s8EpoqGuNna",
  "key4": "5JaLGnGkQUTCn9UjpEgpcjonVdwwnq6As7i9gMfm6nqeTAUvChkTyVJzG9RQHmrS5N9PUGqYeRUhT2CEF3iscZCy",
  "key5": "2aS48KFxJWpnS9ZGrU9fzJZ2szqB5X3dwgtPBtqSLw3yLhJevH7CtwhfKirzCg6mrxNfB3pHyMAPLGHt1RwME3SC",
  "key6": "2qciCEfhjaAonLvuVLiBHBPwS2NsfkzbTFQVRHxmwnwv2w6oUZgX8E9GeNq24RqAWn83NM6qx8M4s4bmL6CJa1VY",
  "key7": "2zZeam9ASd2TNvsiDXbvA7myLCnRVmmDGvCA7nEL8oorxbNdYiKaSU4td9JoQGUwnwjpvKdQErVuqoBdxDCr9unf",
  "key8": "4XE7S5euhzjbbgnBWM9oz7qHn2PwJzv8h4aeRBiDLFHZ8jkaLbNFSkhrvZDg4iFrnDPoBNBVWtneoTkwSkrcfLdd",
  "key9": "61ztJvQQLGTMj81WRr2XfsH7Dwox8ypgU1Ec7TPzmeaZe3V8WeZJCCC3gCwZVoz3w41G683V5fLvkXEbCNsBAbja",
  "key10": "5bgBKxvnduMUFjMGVyFwA8NkP9jvtbDmrP9HsEKFL64x2YyBxC7gnBvMpkdAqB45c5K6bxhXjxzec6G8SWugh9G1",
  "key11": "2QkiD9WH7pyBT9iRZxoZwzY3iRNVkBsXQA5j2D587vmNUpb9f4fh58MFi8iNpuEcLganr9MTjdtquJNoDTv7imco",
  "key12": "43f6eJKpXRsUkEkJkmAq3Je2wVqKtjcods1gf9MkvdkJqn8fhTAiZSgLRJxJaf3yrwCpHyPwgantJgFE5mubuCEt",
  "key13": "3qHkXGfwF1id67sV81ywFVGjxHkUYyZBBZ5wSnVBV1nCVc79vWqQ9V9NjXE8zXBJKctQUVEFqjs4dfAQbahdFiUd",
  "key14": "2rC1rTgiFNtvtXBk4hDfZYJUwtACHSLJ8ZfcuYPHLxK1uobaksC1bwicfZDLoVPuTfkKKcXYMeHLiCJ6A4KUNs82",
  "key15": "63kuxomNkhF5fDncB9rBY1Y7XApvZLURAAGuCxu3Uv31ndCcDvdxzjAsQMd3cJtH2vVr3RVxTCbHkXKyTJEVbCuV",
  "key16": "2pPxiAMPGWqsaN46usnWgvfQgpMgfTNienpWXDHQdEYuPGxQMeCs2ox5FECfZrW4Kn8ro1hkSsYLSLZRJFaumd9b",
  "key17": "5hD42s6d5yERYS6978AmvkThdocF2ZmXmzCYuA6PpsjMoR58tY8ecT3Rb7zLYqWjDCHQzhzKqr5XnHK68PKiH9QW",
  "key18": "4JdAXR4M3YyXHTwJmMPBYtnH8MzTxzjhJFYz7u2eN8y8zyAmfcNgGhtJxdr4sKdQnzjMQFJQQ44YK5JSgSct9Lr9",
  "key19": "5HnZi5eVzdZZr8HLm7hVamaXQ1g2iRjV83NYvpa19U1UdZXRF5JzNCJFZS1axZHG45U4c5NssE4zBKcmGmgQqqBK",
  "key20": "5w1G5EFVpDWaMpMNrcCz9Txhp1p6Q9nt3cc4VaNpctNLJWTqvbaAsRg3fu7ozsh9DRKbSt6MFrUXVnnGLVEQBqRf",
  "key21": "5SYEBVqoyU6wRY1pkSRSjigmK2GLHUbWxWUMpuDRt2UWk9mZH3wV87gmykLjk2rd73iYSnANaGeYWosMT5X8qRu9",
  "key22": "2t2P5kff7fMRJUCKEovYyQFtxYDFYQBwcFNR5LapAzGxW3qWaNVbRQr59ZoX9HFXQtuWH8Cdzwhgs5qsJWjmJaFq",
  "key23": "tGfwHBaUhcP9Eipf3Vb7AxMJVvvPvWGPf5SoL2SdGLU1hahQh5Cpd9QUVzaF6uCpmy7biqmL4xi9NXx8TUKKabx",
  "key24": "4XfrWY1R8nyKy2MsUr72jXpDkWS8M38Vk24SotKsLugZhLdu8cFGAKw4LbEs4EiSiUT7T3eQNNVy2NVM395TvHNa",
  "key25": "2nRQSgYR78VUn8b8EHT1oZ1AJvMLF3Ru9oDePKUMevY528gRiAqhRuZ6MSkCAHtTrnEgPSP3zreDr8yhkE4NM1rs",
  "key26": "4nChd3aZYUuKidSutAkv3Rv935Tu6xt9fCSd9uLj8pBSp1Mh3kGYpFrv8GHzgpXQxZsEePg3a7Tcb5EEWeEHe9ff",
  "key27": "5qLJW4GKwVwRatqUSL8PSDV1zDdeQe8GdZ5wdBHQMKP2YqiNALSfZuBgdDMe5cZLBYTiVCxNcaWM8uQ8RYwU1Drk",
  "key28": "54357Uc7gziyw9sP7bv8txfjvM3JWYhwwqCe5TGEMmmSjanAvdf28wwxtgG96gbRVAzeojnL9szuz7Hcb5AcB49r",
  "key29": "5vfga75yYXQW3WQ5sYRjwotfBRr2FTMBFUoTtVGvu2iL8nvnQDBXTsQuRzfoYKcUdR3Umr98fqk5n1FrJtAXsdGs",
  "key30": "3HN3QBrEzPySBNcXoe6jS4joNGfyu6f4JpjxiJJW9vn1znk4WffYNS7BgjJ7zpehqrCo7ig8XpX8A1hG4KRwbS39",
  "key31": "27YPu6vKPoyuggh2pqvhjx4HoTbxCdWg8QDCoJyQfAFM8iBuRxhaaJhK4sie6Y9HA51CMEJND4caFoqdW5FpvZnp",
  "key32": "2Sw6VRgeuxHPD1cLUoBWSfNVbUjmxHmuzzFNAwNnMRkxntfjteJdru8DvkT5o1ADdfZuC3ANUWRVjgHQJcgzEYM3",
  "key33": "nrZUSb7sKEWrGgBbKiy9fx72uWpxzqTtn95fuZDYHtijzAftCCQWSVpBGVxxyWAWYckF91Nr1Ea3FQofjtfz2ij"
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
