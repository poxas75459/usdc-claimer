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
    "5vhyREvDDfLg9Q3XYSjzqPFJN5gv4ZFiKpeP1E4GqVbuY7UaE6MaSxSYVWdY3ZnQDtbzUxZ9moBLfWWCyK6YhNa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ij2Zxs9JjMvvSc4vHFkAsnWwa7yBKn5vdKZo3o6CerTwUHNv6GrtuvanLTgdiAJGHg7QMvv7VwQj4pGGULy1aJm",
  "key1": "3nU8xMrcs5ykrcLP7pf3EXTTruuajvJrzRvimKzKMhU8sBbXkZRCdQBAXhDkekDCWSCah3P7syBT1g9ik5xmP7UQ",
  "key2": "4Q55QaMfucYH3giKjLByFXuYmQmsemAAyn7n462kvWBZVAtDtJY4Ug4FJxueBKtT5sqri74zhwHePmtTweAYj1VJ",
  "key3": "2AEgHycBqE85pFstbxqYxWUN48SX5Xwn8KZ1ziNX8e8d5HLjg5uWdjbSQavRB3HUZe63D9FdZa74Q21kLuxxnUfR",
  "key4": "4YAq5KGf6KmNSyiD6B3DMDtVm58A3RvYijM3btLt41N3Fx6Mi5SP315xy1LHaCEGSVjnJknpqf8vgTGikLU5WKN3",
  "key5": "3wqbdkJDBgUmC5Q7N88EBwfgYREAgVm7B1f9HKJGYz2XDzmURgTHjjqWqSnHreg5ZQ2P1FB3eDT4EzBga6FfuXLK",
  "key6": "4RFeB2ceViYzqkZaZewDaEhgCdssSJWq6GVrJjKRE6AMRxMf6vHrS1TR8iZiDMrY6dqq2XdQftfJ4Pdaz8n2zWQ5",
  "key7": "4KGpscB2MXcyXpZS82ada2tAFjyJYvUD721eizrrqcjDZFa54JAEmj7ps33hDJ6P6yzAgXXV2uzaRwzuiFBuqxhF",
  "key8": "4Hiv63xM2Ucj4dYnnx1fEzJEJDyo2PtpFiYDmothLumDeVAieiEyBRPmvq33cduqBzqC6bzAX7W17cavgwGv3inZ",
  "key9": "5RcDvxnkhCA7Pc5MCLxZ6Lwb8RjaN2SqUxyZaGh2zngk6vtyb1TaRRocFUnW52nU7VEPwS5ViMjgXqUAVSRyc42q",
  "key10": "4sU4vnvPGtmGrVTX17iWSjqWNvNsUdx5C7AhgnaF8a6vnQxs6LKhZ2rbWfeK2BieP2pEuyAvf1c7uP6FRxosvDhV",
  "key11": "2D1axZEmBtLAR733uxDdDyb8o5re3xxZ52QjB9Y7tehPQKsKobM4LrgMdXtp6KeUKZvgbT9RGDe2KUfNdykqu7gF",
  "key12": "3dAw8RJa5svsCnWoiPBsUy1sa9riMbsbarf5CBUBXQHtYVqytC6izChiRXo7DNhSLGaESQSH38mwhbZru9UBXMfg",
  "key13": "3Bp8623W2B2DZcTomtpdPZy8qSxaE5Ax5qs8Wsu8KFebhzEikB4XXMNRaBzJAWtU61AZSB8oWjssHqubSKkwqNQ6",
  "key14": "EQzK37S4FbS9kCrcNJfP1rTxeugKnYRDzGEcg6V7mUGrhkCaTnVQdRDA4aExAvJriZfwEFt6Yoh7fDuHZfyo8aq",
  "key15": "4wz5XkhSAHi52ek3StRyPn7eFLEm4ENvS8YwXwBX2MqLH35AfhRbiUbdy3XJky1uJCdChd2Ry6CFqtEp7K3xAAXZ",
  "key16": "5MrTaJaf2VZLMh9EQVnw8DPbEhyzGdCTwrfxooM4GzGFCad9zbcA7sD26ykVSmriVgNnWof1ZMfDS49nuLRfc5D8",
  "key17": "4YSVfKTbcLy3nVPDqjw2EARcAuQwbVrhyQSdqZZ2SdYsBm39ATtVLotgX861JYKLrz8qXjhVDkqsxPiqjD4bY58s",
  "key18": "3hiE9fdGYXyW1pmgtXW5Ro6Jamx6yAUquyaGQ9zMZSdLG2iY88qytbidSXtx9vKfr1C3wrCwSTvchbx62VDbLsk5",
  "key19": "4gH5ejemWuNdWcz9BsxMZ6mUUKgFBLDhiBiXygoDUJdRn18R1dWYdvGWd1xfAEwfHbf172k7vBeKdSvgMkFwph8x",
  "key20": "2q3AiPAw9cQB257vb6Qz87xgGDkRnkfyArYE1upqVKif8yPqKHtNpvgHoSEN99DLARfZ6XVZwzvKFBA2ze9HDvow",
  "key21": "GmEqnLLt14HvJptUFtHVeFt4eWB5aoBAs7irU19EuU19RNsuBeSRk4CAns4RyPx4Ur1cP7DyPb6Pwf8ZoJNq5Vp",
  "key22": "3f19ZMTBfdm8MAorG7s2zzw5xeCK24FSNwGmUr6dmUmuo9jUB4F6XWoGneccPTeJEG7hyvQLNi4JqFqqcFRPpDF6",
  "key23": "2RBZwwSXiJdEtEzTPXZ8ispkowbhrg6RKqGjwqrmPZMnRDxdzpLrGnE7p6oMjPUZzdpZcU9FffNvrPV7GMLhaTzr",
  "key24": "2BxZdCQC85GEFABgjMuoSTBTR6U5krStoDzLtNX5zAk8qhpcMDFcFY9RSLVSafLCfm2RcFqAjxPKcVdvmJLAwAqv",
  "key25": "3gXGqFLtSbqBjzszDKbKGm4RA5L6qZtLuzgZcmvkA17JZTZVy1wLVzfX6nknXbD53SpvXvyUqFZFdWETpN4YQ51y",
  "key26": "2XueYuqLJYz9Wd7gHG3k3MnAvdQybpZ9DRjMJ4cq91mjLR8jeLNZz56swfgKnjWHDr7zv66jfKJ3RjjiBf7ae2cw",
  "key27": "5BytyX52rjGp48UsNMGs3eJ62u21wnHAkfHFRJZJx6zAFwbkNwMUEksBduASqhS4WBhhodwtwuebP1SAweXeQujF",
  "key28": "2xDeWCSwpvUDngUqP2JNAvsHfVALs2bPoTYyojA2uwDYuhRydFXyJ2fPz9JQQLmMqX8GEgNnM3p7Td52oHy9xmnx",
  "key29": "45mjEJQDLom4eHsLeVv7R4Vvw4aZ6n8JLa78uZeunxMn6fuAW2Eq6Wv4gysNFAKeA8iEFjN3ohAapBwSWBrx4cwZ",
  "key30": "3DJxyxbTSAiR3NN2rvrw2iASZ5wQEVkiHJvPEdHpyNcJsmfr5QJyrGPYqrRAWQkwraxV1Br7pmzQxWnAc5hMV2zn",
  "key31": "3UaxzKAg9PDo65sYdPwyMdVVUikwcdFL1U4SSotS7h1nqGhRhYEGgG7hB4drEDVo3FVEsiumr2w9d7mLa6XPc2Jx",
  "key32": "G1ggdrwaxqDxGcW7g3ZXggjv3P1DSzWUEjPWfYyPERJENSi6Q8vohspNgaHNG8QzpLWLfJgtwsLKrK1q6ujN1U5",
  "key33": "5V52g1dC2iejLFDfF9Qgz2wWQwaY4cTQQUVsfSGNybmi45CvhPGv5w5323RvXKocsJz2tPvfyXJMUxHbtHm2vXFE"
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
