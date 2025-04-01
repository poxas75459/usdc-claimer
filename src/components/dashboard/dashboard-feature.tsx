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
    "5JW1fg6ek4zk9GYtnPQt94XiF5Mrb8U84nTVYhmotkhyUMA9MYud2SNWB8exGMpoD3J2tygGyEJmrNTUcnmyjqbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rFH3xawhjRVhmAAondFXj3VriBqVpuD6YTVeaUqr1jJrDhAtGy1x1SWqNgk1EQtmg8vorsD7pjKBLMdLU6JeVb",
  "key1": "5EGN8q1DPuJt1NCQFut6sDC3g2krniQEWatP1HdrFKcNaCZUFErBaVdKvyDK8huN6dmjmmMNKULZ9wEadGL9a1au",
  "key2": "2fH6Hbj1R9fQsVdZ1YeK5EnEaw2ANyNaMCaK2vjF27uvmXRjj9VwdZuMc7ZCdvv5yxvSuXNdXRTxJ8d5Uv4GQpHW",
  "key3": "XoTnLdgvwSDApXq1TH9rBJu5KTRQ37G8kythbdWA7dn8pRs5fj7qyszGJXXNs9MFqVoh87fmu7UvnqfZhYGg6Ps",
  "key4": "54m25tSHP2MDajbmLuYSpHMvjFRWVKJZvwxn93hCzVrBnk8WbQq5TZs5QFxFwU4cxz1pwg8T5B2MniSG18n54tYo",
  "key5": "4P6bavbpvkLoGHWuzki2ikGS9X2xN1E8WZ1db3E9kJ9Htmgcg8qqbfezsou4n7oPXAQyqE3wMQrHGqFZ8c8gqPBR",
  "key6": "5U4kUtiUN8w5UtPmzP2ZLL8ASXTfEQvX5PD85be4ht1FcUnJcrutkk2woYo7q5kNfoz5oE6LNgk9qJoJo4YG6sBy",
  "key7": "g86GzzWuKjRkVcJi9wUxjkdPi4GKKukPE3q6A6WneqB7KYbUwSbghP3Va5hZCBcxvw8ZPdGAXAi7gse1K9yRb1W",
  "key8": "35d4kcz59DfG66avngvYutkXwBKmyAzGtDfQk7B6sww7xLAaYZyrJDSqXVmf6etS494V8eSzXKt7xMuJurEfX6L5",
  "key9": "5W2ZGo5KqzBs86B9U6Dz5VRTUe3meP64HhKh2fQtbzgAuqRkcbsUgTVpKg656oE5xneVtEmJvYgmTBs9xasCxiES",
  "key10": "wpLmtCwbTysCXEVeNZ8xKhi3aNAxyaDuq37SmdXrCbvGT1pon1d2uuRW8DNYurgG3j6GAz5ZGPLA7ZwbXqGew42",
  "key11": "2QrwzbdpMJrervZK25HwTQEJtXbNouS1dfbmFN1TvzoUxbPhYpgrKrrZe5eovMs17yfFGJbDyY2x6Q8N7TV89ya6",
  "key12": "2JynyKrJ492Ksmk4vbzN9eAxZhEib2bptRRJs4XoHnErZvfBBuD8ELp9rogoMsGiJT4WjwP5BzQ1vUqZKmmH4rUd",
  "key13": "3wFazkrdM9KHJjKLjvTcT7siZfD7MBEucFjDVLdFSkHCc2cMBe5RV4srXBbKgaYTzM4eiJH2V95bcVqCj3u88ATE",
  "key14": "2NnQCHyHohs5Rnv17pcaVqTo8EQU4xysU9EgLoikZmxyb4WHBC6undEjUzz2g8gXdX5bSZDytd3YbUayLLgu7QF7",
  "key15": "MkKqWaN1DTfX777Adia19ieE279mpbGHg8X6X62M7AvKHamMezBFFUCPysA6rBAUd9hK2pS9YwRG86oezJ2NLyJ",
  "key16": "rs5Jq6p99VY26h6DEqGpFjN2NPkdWNwUsTzWBSrp6qxNAzDJWfv9SpxKXWqVWz49WGC7V6ijbrmArQAxG5DWVuB",
  "key17": "9PRenbue3bcAwB1N5VATTy6hZ86t1rVTUqthytVn4g9YicdzdrXspa6aKCbjJweyjUnMLGpTsFLdoL85ZR2jEfK",
  "key18": "2AcyPrgAtfgSBfUHkqcD8a7pkcEcdTXRuAtSSMF5j3nyf3BCn5K5hwYFAqzLcn2f4wVTNAMaszGDYWrfWYKTbGTU",
  "key19": "5gUJJRhCWY9P7N83E1Pxe1FdfFxeyiaLVcFvsQEdef4m29nzMXxQCW7yajJZwTAZdUQjdvvFMaFrQWXAgDKFLp6y",
  "key20": "63bzEkXmHDviDGFdD8pjtruJjkSJ1z9Y1UMpjW8KgpB2uLcd6fKTgdEE3qxScHE4N4JM3DwfBP3h2DZhiYfDbNAX",
  "key21": "52mrSrt3xpRM2LyuhFEYuU6nK1Abiz7kF514N5CkQ6hk77UeWeTADgB4BVR52bKQybTnHaSA2AGNRxLTS3sFm7wc",
  "key22": "2PwVMuvUEx8YfSRkj4TCyWahoo78SZmau5VdhjsjH7o1XP77E3a3oBMqwQ98BGGhozTfb8SSXmk45q62gou2Eqgb",
  "key23": "2sC4AVnwGTxMr3CkLceUPvDfaW5GW6PhX5jPSUBipv6DR2gDV1TkPtrRADf5uCiksk6gBstdwA9JfphjTm1iSjD",
  "key24": "4aFKxyNdPu2XRJqv4oaDDrVPAnwFhFUWNjNgW3a9TbRB5vf2LWRSoCzUhtuzx9iWRHgXywB9N1AUzHdowQYsphdY",
  "key25": "Z2qP1TWVyavJkLoAzDtFnz7h4sWrSrtHJ2fWEeHz1QkHbFJSbvciAL6GyDEy3LGpVAnt1g4FJCwVeEN2KhR5QRH",
  "key26": "5qhm8T8QEy41AmJzGNhD8czAytsh8fpgrV3v6e9YwmWSZJ45aYro1FLA5DwBqcna5vdfACewNmgZMDwmTqJZXw6i",
  "key27": "2LmfEy2Z4ox1KGJHPt8EC7pfTVZ7VhrASUM2rYB4n57T3qdFUWjNBffPU54Ln7yeXVhTR5ksNPbRD3iUTQwewr4v",
  "key28": "2SPcGUStpMww7JZCzaoSJgBMTA8XxAkuK9sveDULDiunhkVWpzV6srzWUgkCW5gVuneYN7T3aFzmH9xSsd7QjhH3",
  "key29": "5MbfJHAMXz4UW3eBAtNye4v6jL6L83oAn2YshuML5SGAdgjUpiRLr4aR2QmfzPBzVwLa8mpVZBZj81ksezLCcWcA",
  "key30": "2BYqQ7Mu1KQYq4mdWCSt8jM8Phpcx1H15XLWSeUBNSmBhfhf9e1zAMeF2ZRVNwnQfppf1cyphWiw5wQsgNC5zoCf",
  "key31": "3xZ1BqzfwcFPmxvmxERNHkpRDmFhXNipjs2uM8sZRs5vwj834RgTQLgawPh8f45gvk3Arqw1zmhPZ8iMH3niMUpt",
  "key32": "27JmohXfqTNpixCA7JFg14zXYroYrLRVQufNP2GgiooMXTzYyzECYgJaUaY1ocm6t1iheC34njYTiKfvWVYmvLN6",
  "key33": "2E7A5FFEdBg4QwBQUhGXyRnuSeMN6WCHJdEa4h6rhdjfHGKL2e3ttR817MkZVRhDxs8ky7meHTbKdDEtQokCSuZi",
  "key34": "hQAhm5ykYgbNUZzZPFMt4qubpdi4K5N3LhUEijWzJZ8nknF9k8roG88ig8aZWNaMc4BTh5Ht957bUt6JHdHnRjk",
  "key35": "2HS8TUVGQZ5YuJ8MZpNhKrjM6Z8ARD5wHL16sqdB1cjPjyYXLfn4nJB5nZCfDsoZJDjhVqVChXot1n85zxfmCZNk",
  "key36": "3hGYtjiHTv2ZSYzVRiLvDB1hYerxykGPTCXevnYp8qRubbXbwaJ35Jeaxo3qwb5T6oyTVERDoHZoXSStEotHvRvx"
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
