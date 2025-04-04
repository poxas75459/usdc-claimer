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
    "127kUfXSWYyzwGrWdEEmah3L3dviCLKhYgjjoMQeoYUdJ9iEFgfAR14cc3GvW5hbeVV64dKNYhx7grsSAw1y3acL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBM4mm1SXcg8ezwDYw1qk1D9XGAoM1VmCsmcdnWyowq6XE1oJKaavKvEV7M39p8TNU9cK5vt8nYmS2NLutuwhHr",
  "key1": "5d9hWrviLxEJpUWPNUR3BKs46R11QmxrRFVbWx8k7kNGiog6nP2qVMyovf3KRKaGeW2JBkNAPzVu8uPHmqwBk7gQ",
  "key2": "49XBQG6mKbZ59PGgYQrwBL2WpnwbXj3YHau7qNNqLJNede7S4FiVNPVcyndbWpZXK17nEzdjPao6tNTQnufBgMCh",
  "key3": "3xKMGL9GbMCzBzDHLFqZQp2eXzMD1kMi3SoCsDiCstSX2GPraVdxGPX1H2ja8rQF5J9HwLxFSVai8K1fNvg1mW63",
  "key4": "2f2TJXNbsiTh1ezmeGG5PoHXNG9dzeLyUgmepUbKZHZhdkKjZZ92nxEz9neCdmCyMYUA2B1Tg3vvNSiM8XxFci42",
  "key5": "56etpj862SXt8Y53wDtMyztVuE94sYy3myJpg9JmB2ABe9Lixm6FXya6PkzEjyggip3XWskYEQ1pQYByt3S1QfLz",
  "key6": "62Ksty9o1NUtT4zLmoasgUPEc16AJntAr5ZDCMrjY3YhNQT8QWrunK4CsbkWYkpWVdfp8dFpFVy49CogXtPeizAV",
  "key7": "LBZ6DEgcetoGX3N1UhRu41Vmq9ugp2tE8KdaREKHpRNZWT7FBW32C5g47RjPkuBmGxvLg6bZ7sei5VPaWohE9Gr",
  "key8": "53PkDTvWVDzrvX3tmyXA6KjT8SGLexbRpyXwzQv1W6pPzJHRJ4Un6owg5HPCnnjRCcytVahBuqCWTWCqnVYddDyW",
  "key9": "2UBSNFxtjom7agmEumGa9pf7wehzaEZNRrLiHeheXCu466JJ1aqBv2JELXsdW8wCNEjZFkwHagCG3iXddaw8yyec",
  "key10": "3WgPjR2XztBBpqenUi9grxvTJzWsrJdhad7a9RQdEr1SEr7MttVCHX5VUpRSFpMqNCRBQ9j17phaSw9bcLKCdZ9D",
  "key11": "4xUXsDDmgEUf2eVy6no4ibTPHGAbbVACpS9o6ppssEkk9EQH2g4Ezsn1mAr2otxv7qRkNoSiKRUNGqA9LDXGBWau",
  "key12": "u1U42gDDE6rAF5z1wqirmDz5vcNsdpJuzfju3PtUDGpg1HsvDzEQzKByVcMoAwv6LVBKusiEUNsnuWgiw7R73mY",
  "key13": "5AHvgQJKq9QSMRWsPFoFF3sLSSmjoDZPm37GkAK6kQLn2T5zxiQJULZCFMTvP3BKgqgiPx9d2h7eVaPHQxa2rsEW",
  "key14": "2MzxumfjLV4AVr3q5konHZix4Dc1SFPq1PBNZcenM6swCih18ngWwfAxZq3kpbXo5WjNgiCYpkTqvw7BfJe6dfTH",
  "key15": "53oy2m8kyvGqKds1AUzNZqm996uiTjiZhPGXkCnFcg2YEjzpQEZLGZj9MeMd7SipM6C7bCM3Canm5d79aAmj5qKX",
  "key16": "3qaXA4DzWpvWLnW7nnnk66FpugeY3AQmSKDbQrYCEv1MEV7idyiAkRTfwA4yDF79cDsc3UNE6Ju7JuNnyAfiPYxu",
  "key17": "42YsVrNL49gEKRsztticJMihBdDo5hifpxAiUndHjFg98GBjoEm9ZrS9ndcU4JLLNQ52fTPGuCt6DaU1Tt7xp4Jq",
  "key18": "pzgxcnLkNtu5wNd3rDGRMcEkZhB9C4Bc2YzVgvqaVhXvmKT1jSqPfp8dZHsUYWfmKb2j8pavtHnp8LWYFrAkhc1",
  "key19": "2MKRnCKVT9DDMXX3xg8c5zBkMkYyv794FaPVpzCTjyij2nqD8r38yHBJP1TBSygG6borKAJnpWiF8J1EXThtNqKM",
  "key20": "5GnKUom96BSTfyjpgwUzCVfLs8exeX8zmmzH4rJQe3jVT6hnYDNpgkPd5Z3wAAFAr4wqY7ovbkL2yxi3rTcDeL8V",
  "key21": "LVdtQzNmdZKatHYvfcebpM8ukHyh53TNMEeZhmaVp3PjrgC6rGVbx6NLrVZS6pbyS2wzefXFg5ujMDFj4FiZuAR",
  "key22": "66THKMKRuU2vyP3DGS6Y5MXFR7HBhzSE12SjV3U5fmFQtGgoXNRJumVCFhX3vscswBCLgdBoULQ1ATRsDr7xABcN",
  "key23": "4BXNdSUP2wRyUUFWBTJvR8o3TgK3bh12EcgTBjUN7cSsUFLYntxgB5q759Bo7y5gQiNWEyKAXo4nKVYJNpG7KyWp",
  "key24": "2ajjhAMZXYUcYnRXKHGKXaqcmve2TULe86Q8e7HYBxrRc4hsVY24DzC1MKsZdKxnjqjttEwrE87gKLMasRAbrYJe",
  "key25": "5u3JaGmocshpgpm8sgfSWw5LgNpim72t5UjGfD6GhuGzM2x4LNi3KKEgygPsKMD5TCoRZCHRmzCdcyomsyCG39fT",
  "key26": "zxzy75Vnd8ZGakFoLEqgefQM3XdiVMDHb1QgFEn9N6ifcdBSohufbKHgFtxqp2PqdR7d1KaoBHvf1FcX4jzX25F",
  "key27": "2ptdC55WocSBUDBUJQQYKVkbHgFUtaLKz2fLgWxkUku6M1QfTcphyFZedFppHafhvowgwqH35s51JxA93ai9ZyWP",
  "key28": "5QdFT64CenY9xMXP4zviF9irAv1fMSUNkAt6VR88tp9XLTit5NNy6cypXgd1CUAVmz6bAYJRS5it8NqPczM827qT",
  "key29": "5VKxhu5wZcopvbhJSzbBcBUKrXgMjda9nMKCFxvgfhkP3vjUjqiyteqC3c7phpzsiqRA1vHUjtEBJKr4uDcsY5GU",
  "key30": "m51S6FUgfPGVPC7nJi2KKqi2iceT3ArhRSgVS9h5gE55AEFwfASC7ET73P61YA6eEU5VBURErGdHb4HGRcnX3Dx",
  "key31": "5pqaTA6fHnTK7SkMpJHdXpsDNi7Gp6uF3FMQe7T5cMDvAykKGRhyEHziSbFkXNjYWZPofgAVgicgq4rh9z3DLmgL",
  "key32": "5Dzt88Px9HofwxRT9yDK47nBzuqoGoAUcAz5XRc1RXKJ2Db4YZjARsSQXPay8SH4CGF4T4AjgpeuYZoif6rsh9WK"
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
