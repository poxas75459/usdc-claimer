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
    "4PiWri2ESAcPdWKy5FDJsB66waFS9KyvcvwVDx5yeixzq25AM9jrRDb3hEddG5QaMAf5qwEHHWwUQ79sx5aDmNMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxQ7MH9UP4CJ91Usre1KmAatgjPvVcoxXLBQ2C2RPQxrU1gTAujHF7M4qp8eToqvHtUacfpnHmABEoRaQfs1fd9",
  "key1": "AbmvF96WChZDPJ7dMLbo3Jn8nxMvkKsoadW3vgYb7yKqcMEoyH25XnWTRjnK8vvpTZumV2WysWWu45G6VhZNjaY",
  "key2": "3YimGUWpPbHFoZck4kZJ7G3jFT1Up6EHwTxL8Hj3CjddofV9Spuo5ZVT53WLJ2BbfYY4MjHb2AurKs7QeoM6zgSA",
  "key3": "rgr7jpMVzE5SCXEywLvPCYTWYDNq4zaWrWLXUb3Ga1D5uv3zYw3wPgjU22XPbGzHKtF2qrWYPzXzdk2daWMxsW6",
  "key4": "5cRL1Kz3FA2iU93VqjZ9C1wSotke6e1FB1VyDhfU4N3bhLH9SWiwBcdhxySDunAh2vm9FZNWsUkfXvKmjGwBd9cb",
  "key5": "54y2dBzCuKELfhwuph25yXnghvEkb331yQ97vCqMf2JXmskXBZe3CbrZkhVa3geUdkXsnsDNhqZPKQyUyWnh1oXH",
  "key6": "hqiGkVxesneaDtF8WY4AdU3zSG9zZp6sZ7rjcNw8U8ajLafMymqnGWzJ3Gff1ygEkq9wKpiMZYwDfXpodbVXuxZ",
  "key7": "3KS6D5PvC8zdmLEEwYq5SRpmYuTeF1pVpH3CKQ4TNH6nzsKPQqiyqUTT5hpDNk7cqE4GDEvo5H5ona8CaYkd9pHN",
  "key8": "2zgJpiPEco2aKjUB6W8YXzv8ywF1JKKroVBwTqDy3jhU3f28TFG7nLpZrz3cp3XaKdXSxDexiqNwvSJ441E2pkrY",
  "key9": "5junKXwNimXLLfwwtorDmAZMUgKarMCW4Lhb2qogtQdb1rzsfjRFnDx6Eg6oTNCHwscyDnkYxZuhDNHvXNx4Mw6z",
  "key10": "3Lmpx19FPgHvrnrs2arjCXF4KAr2uejpZxCwMvj6EgXiTFpUgqj12gNryYAyUos9q6PCfwckR1vbGpMtK2JmKcpe",
  "key11": "3a7rTXh6waTiHKiQd7WbDfscQjaJvXGMBhKKrXBNNMbwP9x3GWZHVYcNaXat1qje5dRn1zEz5YYTtkUnjwj7DVSt",
  "key12": "63qLqyViWsbch8HivjzEUXdeLhzG3NczTEMTfLTDNcmdV2hfUfjhqdkx8o5dtu47mCuPv7D7wav1Ti88gDSuDg8Q",
  "key13": "nZiaUSDGZhXavSgN2awAnNiQkcARzPkHRpo7122zwmWRM8f8vrATcX7JwS1sQxi66DyDhp3GBzFPjoRPC8HWNE6",
  "key14": "2Q4jSBbAtWBXqFKmE2E5H2xYbHqC8ikMHmUxUBmh7iBYF6YwxfAXCsRoDhTthDgWJmQQeHo9uohr9RrpB6Bng6o1",
  "key15": "5ceCBTRPYszoAs4n46tknsAGEWAVHgdmZz8dP5RZ1BP4HRx3q4Rzc4pSzhMbQhaPWiekmRJY8ToBiR3dr4KQEqq3",
  "key16": "5RhJdjuN8j5k54iVohF8rBjAUZLZ2rR3E9KYBurWv9Q7YaJF9uv2mkGY2sVj5s35742LenbNBomCTapTFZFc4A5j",
  "key17": "4pR7GVsfBmzdMHJnU7AUhoHvnh1SY5ni5xZj1RZZeGN7Z7PsqxbMDADwFH4r6Yt3ZBzsEv9NcZcui5Ehpx4y1s9R",
  "key18": "5qWWwnnAUm6HcgRvjTGu6LpPiuuqNY1LT8MiZ4QPhJdfaNszPbdqJjo8MWWcGDbfocuPhVDrVFy9jZNAJmRENkMb",
  "key19": "K9Q66Ky3mcCcjvRMS4yp4HL7zfrafXa5GSt9ik8Na2bXBJqPw48CgbnCuYYvaVQj4ZsJk7cWt75PQgJobttTvsy",
  "key20": "5fdDWGkDL7iYdU6dikAHGR5xrB2SbGSV9BDCRGbYRQfgkbBfkNKjWBXfkfLcx2Kb7RiT6E54bHK6ozv93iaYbyH2",
  "key21": "2BJrczZvh1RHtmUhMGAhEDbwkHiaccrSJXwzfYEGifSoyZydkQxUyE9Mm6xHtMjaRzcRf6KHHUZTz3Dw91ncGdgQ",
  "key22": "3RDsU6ZuuP9H7fMbTeVA65z8XFJf5vn2LEMQQGDVjzD4rRSdcrfJYdC1RWEuqCu4Q3LsN869yaE3namdi5Rp3VsS",
  "key23": "UcNbvkaKH34GE1a8YT8qZNC7jgx1CE44scGmHHPEbgShEryTme8PJu2VY9Wn8Jhj5nMjLeSB516PiJDM7RfbYbb",
  "key24": "5EfjEyAsfmGWS6wsUHnBXbW3UFXG6d2hqVdQcTiFctkc4GSoHYDoUprEdCdKjYafP4G2Lj7Pk8DBxLz2JTBfWTBJ",
  "key25": "66vwxc6SsFoRnf7JeSq8jBB1NBm9RPzGMFRFwJhAvG23Bah785z5LgpkV3pPmuTRLsDcWGwW4CfRnVUVWDWoFQrC",
  "key26": "2kh2yQnrQEJKuDvZ8Rru7Fwvz9pSPjeHirsUoct23YLEacaCNunWWWBcXLiWugCofQDqggnos2o17Vt3Qxws5bBZ",
  "key27": "2xaECiYZHWzJVD1vcaCGhRwjg5zMjkWgA8diRneTsJqSoWUFCekr6WPkuGWkXMo2ykYimzwHZg1Bo79B219YsErB",
  "key28": "38Tow1pvCVijfba7ntnQWVwv48D1uLDWXcqjZrUnAKjE7QXyd9AtQx7rAVCDydagvNgg1t82GMP6tnskcq2rwBnq",
  "key29": "4ShwZiZFZ51oL82kqDyn58s75WjYdWtAyd8KUTrTY5aXheYvgfMLdZGeVmiFWmDg6njHSqt2qLXCpEzCAuSyvwXo",
  "key30": "3WvmGx6Mp63oJMynHhhEqViWXrGaYS9exr7gxf9nszJdvvCxy3LPFRRdtZVA9VkojkhibFJzWuK9qJhtqnvQZAvz",
  "key31": "4Yb4f3tkUcz7rA2EtjYodohLsoVf4KPRTfoMVthr5rywiAVevbXBkwDNEkvfpHzwp9wNTfGc6xgARy59ahDi2C54",
  "key32": "5p7A4AtuVX4WAGCGQ9wPxweVM8WLX2mP4zTxK53rnWeYU8Uga2syUC2p82ChbXzXvwBAMTvAMzKp4E2JyGHJAsx7",
  "key33": "3uhSBXCDxDs92agpGU3QgauJPJQVBcTGyqRhKagt2GRbtKFDS1aDj5jvAUNbNuzJxDPmrqWjLUEstRxsjsB5wr9F",
  "key34": "559GuQW8eY1vC6RpzDu7xCT436KArujKv7ZuPjumh1E3wMgYq8YKbUW6VJwF4LZnvjTDUYDaxfk7sSuow52nwnnV",
  "key35": "5pz1YugxmF6f2PxnaPTvErS6Ct3yEK64xomeNZDf4v21GMvpqj8H9ikkLcaQHbKTqLEQfFjjeb1MamufAkM8DCyn",
  "key36": "53FLCRSVuaZrbXYpnouSVEW6aAXiYqcxmEDH8d1nqkWJfW1bQqqzESonHYQcSW1rgpMWExTH8788uK2VTNzW6V6J"
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
