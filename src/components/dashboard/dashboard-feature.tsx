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
    "JofcFKWA2zrWREAQrWDVdSpmALZaEksUeTb2FgUv2eVJ9rALcRSnBAuFSpkjs6Kc4BoBkmMUYQY2CAViafL7bK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YcCtC944jx8bjuKiU9aFq3Qt8CTaoxMw6a1HRzgMTAu2Tr7yfnqgs6tSbHmnzUEFVEjtt6DLZFKQpQdCxMcVqe9",
  "key1": "2nzX1Ek1VF8SLfDTp2Qt2mFVaGNn13F54fWvBt2BHPtEKmHzpXL3RpGnpWTk3nM1hcF7qJYyhjs2w5marD7Td28k",
  "key2": "5FKApriwmU1t25BpKfxpxijriGDAgqsQtk41daZopZ7acWNTDpr4WqUYRcURASwZq9nNwHL7bJWuN3NR9c2YTL1B",
  "key3": "5FRtFw8fcLFs1JN2jhNkj2h68N9QbiQ472xZwFaxK8YM5Q2UiDAT6za5fksLU2FgDUdjofYpYgT9xMYcxKvjqoUc",
  "key4": "2jUMaHUu6iUo5MVbKaZaQebzt2pnG8vSqZFUd1mdHDvSpSwzZndCb6WdKsFsUYYfgTGzE8CS2rEcZjkiud6axgHF",
  "key5": "38ims261fCbpmcZtPTx8qchmjQD6PTYP8avW56C7cNs4aYggA1myztFrJVWEDtk9qE1kwzR7MsdLKCVe5mYdEC3L",
  "key6": "5GJ9yCkrR7epKUAwoZ7RFE4TWL23jcriB5VqkBBkJR6KFDBegfNDfLud7UDqR4L56e7wjQHXFD42vG4t1ar6pAuc",
  "key7": "5HCrxqD64L7xyBPnTxonPj9V8xK9TwaDUtjKrig3yjap25XAeLLKbuKM9zBeXJS4ZLMaXcMqkhVFgtWMcYGB5zLE",
  "key8": "bbthHXhEUHAHv4QuW2APGZQ1UgmEXKEAnXG3da1afUjWTeeNFXmBUqskwdhdWd94ZL94Doq5n4FK2ZFT8mCF1Sb",
  "key9": "23Ps8hkR4xi5x9yvbPtnpmz8yZ9uGPN8HAzMTEdnk4ic3TZTfgSCnfhzA6ZSZ9W6Ecz4qbQCArSnqbEcPKTxV8A8",
  "key10": "5x3Y5B4PkbrtaMb2zCQ8QK493J9vF4p5iFadtQ4dXebz662NpzWtS4Jz34VSB8CAmL3MVeMcCicw47axmrXEoEpN",
  "key11": "5R7juJRjoVMiCqAvJuMpsnCb1au35tNBPKm4wXjQn6j9RstwRxtFaQe6FpdTqKW2HF7HA1vpDk8TzxcwhXWvBEcT",
  "key12": "5mU4ZXNfuMXxbPh5WnmDyPPmHY2nsxTSwYZ9vH8XB2qGM4w9NyY5jVLbSYsa9f6uopfmmC6Cq9ZuD9ZrfD5xTCnd",
  "key13": "BUycC1fwCVx5Dh7bSFgwnFvue7MdnmvXKzeK2KT7YPswUnxoxYVebkeFK7tgC4mD29DnudtG9d7M2wyjRvQxBNQ",
  "key14": "5QfBRKkFtujiHWsXPStb9QDfGU4vKh7BXFSCTgrvUk6W24cBnHJ298rpXhFPSEnwSJtHjHpJzJ9WBjiRgAPNB4rb",
  "key15": "VT4CxNXABytoLy6BpGGu2AgTbRG2M5mpBzNiuAWeJbypn4V2tVQtyhdu2UJWn32bTHNQi2TkY8ViVY9XbYdvi5G",
  "key16": "3TnZKpkpUB3wWDaztrz1ZHziymiKMEhoPVL93JpmE8gMS4hFNSHAW1nddAQoxhTU945cwR1LpfLSpp2WA9ZCaTrY",
  "key17": "33J2hkJumB43819Zf26FC3A1szVkVnbNHykJrG2jQWyzcLGYshfmfYmnmQy53GJNv3qSyyGKQ18Natem5Y4SxXUm",
  "key18": "5Zh5jN7uiU5fNi8Yzbe79SYifkMoL42MKZyJH25uq2xUW3HSjMo24FXcr54UWcFBBmq4Dx2ccRJYnKegfYTtYLeW",
  "key19": "pQEYa76ggZjWZdstfRmfZCRg9c4Luybnrd18TpVB1w4EQvQgGd8hneg3ggCbKzgxHKbyVSSPk5Fz7fFHcB8noM4",
  "key20": "3Hp3aoMMbYfDZC56QxcAhVVMCdhBvKC3HgwQBYeNtgJyRyNNVKYiwkr2XZk7TimuvPTqDTAK4LuLTGvCX47SWz2Y",
  "key21": "2TGKsQ3ryQ3d5kuFWAV6eNfRAt5hSDSefPn1gEUAwfoKVt3VGhxDqSS4DZVFWXRSaCcArYApG2n9xCCwec7onQbw",
  "key22": "hvC9iKkPt1Mjf1XQFdbUTWyfxTvvfMcHZpkeT6cfZavTwmTkofd2RLPhepy2FTkGokJ4DRJxh1HASiUL523gZYx",
  "key23": "3Z9cB7jy9uE7eY3Qtkhh3CxJRbmvyN2vr6GN2LtUFY9s3gH8FQbi1CBW8J9YAanCgmBqNrLBVuxfF3do48vAcT7g",
  "key24": "3uqQF4aLTUXHEuxD8Fcsze5EpJ8dBNfQu5La8wFGvbJ1BfyBu7T3KiZwX3mvBddCvfU1FGwhajuckdr6QwbYkxFP",
  "key25": "4S5eND6WLUwfJTj4PAe9e9SnR4iLcHPymA9acHENexFEGUWQXsxLXuj5Px1e5bY92ZZdihUb5NGixLGtqdt58XJT",
  "key26": "2Rf3zvmcK1g1xCy1dQN2ymTiDEaG2ubMKMqtwjW8RsCW67zdKcHjqiTrh4uCFgSYVy8tw3TjuBzcMPGnGeEkSvoF",
  "key27": "3sdwKLFqrngkUSnoBCsFrjNA7HZGvbBdRarKKvFJ4j9qmkwVuF4BbMYg7gjixiL8wHXXwPDkGHc7rRMv9Fu3wHBf",
  "key28": "5uupa8fYUea4nhYnuGEgcei3F8VEkbfm47Thdj6KCkJECgM6Tybjjm3TvbnKLwAtKsn1pp79Qch9LCgSdSWeqQKf",
  "key29": "3jdemsiBnzf5Za89s7bjVSYXXQ2Egs3v7XpvxziCcoYCHviZQHXdno8NtzV8GLDAT42h2XpWHpLjjVSAuXMHMoEC",
  "key30": "242bv9th5yzpSUcz89oot7nB6MAe4xiuSF6itHS5PCxN8gcgmpLn8Lq4Y7KQ1nwkv46WCbwmtES6qBKqUT4HHQXs",
  "key31": "JLr7DDh7k2XD8rDVtzJX7U9APDdtDEKY7GDgmJW6CH6DW8oT3YiFVHDUF6nMnWAVFbisGZTAyqwN6vK3Syb3SHL",
  "key32": "4GJao2c1qfsDR9E49hD8vDimo3QK2G4bHqgGs8t12PE2pr3G97PsJ82cHMCd7ouMSyWmzKauFJDvaK7e3AP7YXag",
  "key33": "2q8b6XFWrTwtUemekG7SwnCkSTCrgspDGYjPXtpfCiXpLcs7ygQuR2Xi1peHX26XDTNMFvaCH58qmVAEDw6w47Vc",
  "key34": "9kUEJCvYbC4Cwy4bzi2NAHH9PmYsC6zW5MG7Pbhiibo3ArEv79kSMmBF1L477d9Z8eHWDgQheh8xPt3wzoqsnBN"
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
