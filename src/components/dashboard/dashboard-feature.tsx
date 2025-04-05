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
    "AqmwcFVrWSPCUQaMmqvmv4LpGSJDTraEd7JSARHzW3uHdsjqLvfx6XfL37VeKfjNugjAUX9bFZyKify1A2mg5Ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V6ryXnM3cYw5RQrksmr59CK6bJoY3CE24hkHnms1BmQPXR2ciEMyGQDUF4MQsZKhYr5Ry6jSKmaubitvYhsGXux",
  "key1": "4NDzLqocvzQeju8SsxxrFZnWYotUvGmQ2bRsSNnssJkJxWkfrKDDA4GrDwEv6AYq3c6PCNMk11re8UhBGckDLsBa",
  "key2": "2LENDdUqCQo8fDzCzohwcLcRY3sg3rwnVz71ji3jNHLtnYntDyhGZsSSQoYuWzGPHpNtueeQXbRyWmXBvrarK4WZ",
  "key3": "57PstrGeD46UtKvffkm4NBMBmVxNzbj3j864T7VZXfMQwNXjvVXXMNGm5ZKHxEYXQib6s449U8XsCddCCvmkzG5H",
  "key4": "1DAXc98aDDxnLPafgzE8exuwqzfAZW1RtTRVAHT1js3D4fkZ3VsMZtdXX5VJVfGpjBPrpUarnY9Lkog6EFmpypW",
  "key5": "HTDpaSqRiQfTyQdXk9LoscUZNX6k9W8Dbofzi8dCRbWcg5khUit6bEg18Qv5er1RCio1qxBkzCUbfgQRC1LEq1x",
  "key6": "2CZXKfPETh4ZncAYXZmhrKus2GeyCEWb4Zm39Ma85eHnMV5dJXWfJLqEFDwHot6zc3XK34VtCTuHhW5JSYV1Cn5A",
  "key7": "5kus7xrVPaqNtDyqt8TTgkV3QFZz6GDX6ufm854o4jrB6epEbv1szBQipKcc8tBGJXj3PRv5z5TUEuBwMLQiQs19",
  "key8": "2hsfuTrAsHRUqA7jK4mqvagedJKtUB4B2EDJuvmUfpyZ8E51rpbuPwSTucTepKUWaG5rb3tz2KUSKqKxThBXVPCj",
  "key9": "2MP4fTwtce3QSFCjgNgyCVehN8DB3anAbEWcRucFuwYd6wG37uxuH9L51qh4Xn2xudsfaN7ziyocyr5z7qwWq7zB",
  "key10": "3bxkgCyAxwwA9HJiivRpQdHWAwxjNQJZBHU7UoLXCsQ4zSXpV6czXzbQq6Ysk6h14AJzMUJFAQqJJBzakRfCvGkm",
  "key11": "4YwJaL5cT4NSncpJMAo5octzLScLRFkPUaHHFgyFLtESzsJCZP3UAfzsjCmF1huuVq5Vpw6pLEfS9LTLoq7f2DXi",
  "key12": "2dAeaii5ZbybVmupw4kDbyXfAssK5wZsoNYnr6sXg6yGJX9ujLMC8KEieKJrEpbKpVdqWeQvSCEADmTVTiLdfJ8J",
  "key13": "3pCHNytyJWLAk1XkYBz4ix6Jqfo5RJ6jLYKEmEB4g8irzEmkqwcRMFRqPPnhaMP6vi8nNfxTqz2NCjK944YUujyn",
  "key14": "4oh49y7dMgJY5taohhjGd7FXqARp3JakH9CC1uSePrevphTL9CXTDdnnVYbvjj2rRENSMbnPKM7onMngrhtin4wX",
  "key15": "2JyVWmc4fDuspzDokG59nu261cdAu1FeCWbCkv7DFmaYS13cfzZhoLByMokrX9xRUi8iGbCtTputUepx9kPevp6J",
  "key16": "5jZTh7bF9mcNzrNFp5sj3sdoTjoo45svTq8c7g7oUYTMMUppWoqJY1ccTN7XiyxXD1cYmmF9BQoVG5HX9AbjCUYa",
  "key17": "319C6CCf88zQg8igx4nCT6vmTe9GTPHLzPwoeDDhpnCLNTYu8nEeBBZzcyECjiByRJjKB7MXTaVD7Pk1F84qHbCb",
  "key18": "3wsPXFoBaigtdrfkA5eaDXMVtqKsAUeMXKSqcCX9Eus6LRRqESVE6vwEVFVVReWiErSo83RMJSrABTLs1zzh6kx9",
  "key19": "5LDV3antkH8envFiaoSuCAGYAbqYtTyvF2tHZJnrEG5Pa1DDf92oDE16VpApQvWvCnHSBMgERHr1fAeGfW2cbBXA",
  "key20": "ajhNBgKirhNYHpUMi9WWDLjD81nGUP9CNpAp74cX8rXtPuCCRZ1wuzA6ySETq7SuU9NgRWCNfqGgVGjUxroXGnd",
  "key21": "35t3iEjsdyfa6y9jZoGf9Ab67zoB9p5mS6ASySC6n9PPbCtMCwMFaTqsBf5GkCvLU1M1oqVL9Fe466qf4xX8TaqB",
  "key22": "3P9sH6C46JXHSsda4oRtWFV6S5Mf5BFiLv8adAZae8ZyLetT4YSJpCNTQnzV9R3beZeCYcUKbsj6nsuqnQv78sAF",
  "key23": "63z6yhXM3hqu2u8dVMUP77sU6N2gFrFxA8FDw4YRAPUhWDjiiJd8cHeYVKKiAAZGWRkg9CYEAzpHjH67J69wtHyc",
  "key24": "3NFKFuxHtXz8U3V27k1LcHaa5Bfoz16PcAKf1DCGYVrNgWCqdy9xDVLhyB1MprCsbQeTfQ7ZfM2YoLcyusmguiQc",
  "key25": "31ZwGuLXttVFK818sLsYRpSXEa5wYYGUZXwZAK6jkgzVQhkT3TYrp8Ru8pyVyprSiqMgUrNqnjU8wsEu52cbZYjU",
  "key26": "5xmkJ1HypXPJMBvWYGTauvvKuWv43RckPE2oPTiTPxemtkXUPhVD6tQjy6o6ecoDq53LnuCQryvEqVYVMyMC3Dhq",
  "key27": "2GQqpMWuS18DRw9RC6ZfpVUeaYAEHGvvfoicviw7RaW3CTmgwmj6fASbkR7gvQkey5oLHJ56v74CH21SiNZUqd1j",
  "key28": "2bkWidz8fwM264oRxNy3VQAtBRfQambW8umaWaZAahLK11ce2aiwtGouGip7NSPuWu6TNWpWd5YZatmBQ3QgwN7Y",
  "key29": "5iWUe9RYEaoZGbinaU6zdzoVrZUHurtBeiZnDJ4W7BvSbFZbwL4FtYyEXLV8BJBCDdqZpdn4FkHQPKCTsyH2uYYu",
  "key30": "9stqbVpyNg16bZ3N4UHDEvp4HKeoyq8uWEzS3gAvfQkfSXa2qCNKXL3Gm8PBc5t8afuck3Agtrp24575UT2BeLE",
  "key31": "2j3SRRkpWBG2yziVDDLuE93kGxfxS1NNpsHsTZFySDQWXXhMsTbzNoNu1q4KpeYNwv5cj6ywdog3RQasyhwB3fZN",
  "key32": "5omZLj1qqMizpvAJJDnf9gY4jAKXbBJGXABdD5Sz12E95VLHuD6tkCg6RBAzw5coLuDX9FqyHkWfdHE62duz5Sjr",
  "key33": "5jHcvwU9XbDkxSDWGLCPv5Ay7p7CxhwchAvpzx5fFw7CxFQegYDkfr12deBxW3keo7TmCaHmu8Znv4EWEtvDkD1T",
  "key34": "2ibSaLch8H3MrQhRAGAtj7uajQxL6mEa82w48V3DGQSpZM9qQJQMd8FiDzrw9kZ96hySTV3AH6wixNqGv72sEBXR",
  "key35": "3zvg2T9uLUDUVvuT5Q81tN8BCudhnWMh8X7cx87siQdbEe4PbbueMXeLoRkk7ZgLCFKThzWh6gCi9C6w67PEgAmG",
  "key36": "5yD7AuzqxZN7FyegXpUoKm7fXanv3b8eDJTnVeyDPNE9AsqoNYAVmejStAiNTKr5RbYqKXA4BFsmEtEdYck1GLqa",
  "key37": "5S4rLTdUJ2VMnhm5Qs8qXag9rBANdjuCQbgW73rZ9GzraBvSunP22LYYrHq5mp8fhj62J2oz4D3HodYGGY23LUMC",
  "key38": "d3gYk1mgR2NTwc4dV85SrKanPe3s7ZnJ3fc4c2PSZbFuSfqszpgKWcgvFMxzzrrk8NdzaQ4poMJcGDD7P5oTsrv",
  "key39": "5xSnwLKMpZHgrC1PvZr5kggCKQ6S6THBU56rUWb47qmVg3kLJjFwnkiBHt6zXHmfhwQE1xxiVPEsAZbHMLHjJ5Wa",
  "key40": "5jvv2gLi7cVosr3QYN6LbfRRHbe5x8PjTWXGGnPdDSQnnkRXvAc4F7jFkBK1KmnGy4dHTtczXtbFvUC2XXZxiLBx",
  "key41": "2dwEf4uBQHTe78VzkXviduP3kzDEnMvSPAS2bAWN1hmQG2K6pG5ufHH8kkrdYBag256V8h7vfk8Zzvco4yviDpkp"
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
