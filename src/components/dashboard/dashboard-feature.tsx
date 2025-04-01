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
    "2Gc5CzSJY9YGkS4ALwHsx2sTaaBnJx1EfJGbfamq73bkJHVV9vyujbQACqGKhQQiEvkhQ2P9rhZQhY3Mksxb9nVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1z2V91t52HzyFhxQP2kLHqQ9jzZGH11t5YfqjViZGnV2uJHA8v3J9HkQGnN7cRBx9xuroKPpt2b8dn6GdGYBgG",
  "key1": "TzwfZjXRxxG3apKePNj1vy152bgDg3Kmo367KBH6kuGttjxQ3GBNZ8GAuvhaC4Eg9oWZzqKFCCZvHuRvoc3LXAK",
  "key2": "5mT67Jm6E8emx327jYGoGDZMrkMyUmKtYJD1qX8mFEQrQLhxrT7Tg48mpSithwDYxkPmqgmh1cyynFWKDfm492dx",
  "key3": "22n1SyhCfy8ULxLpDoksufCXYK2pyCo2AvBkiq9LYzB46e7uKXWAeJ7HVkB5uwbMERsCEUTV46EFKbBf8wMhsWGG",
  "key4": "2WCiQKPTTkpLeWKGVTdemHc966CthynZtbYWjsPPJCGp1XU25kDz5BSRHZYwMXyDdaLKRReL5LKHVVsvmyAdhPuU",
  "key5": "rd6mLKj77X9FxGr8cePUHFqrXZr39snxyf4RyzT22paHkPXoQoyH9w3tth162oFEU3d593Fr8eixNEwKZP3NDEi",
  "key6": "3MoXA1Vnm8cARU7UXLUV4WJECLZkaEGW3hXALdWaDz5aYQnQxTzZQJ8ifbKeoKmk24G9Zy8zhoSUKMPRpqhXEC74",
  "key7": "3d9Mk7sgQPgsSmuBh2PK4uLoVpUob4yEY8aLZzNXF8srXZQtCRBihXUqc7YtvXqbKEeBkVjVdbNbcrvpTQBYyxEk",
  "key8": "2AnAEueauodZ677Ad8m4QcsogAdoaMifzqqEp83F39HUL67ehRuAhsYTkPWTrHs1ACoapx8FnaT3PBbX9zxJvgE3",
  "key9": "4kaKftUjjan8rLozcYZAJ8AMdz6ccnWKF3Vohp6eVC7tunPkztF2rTEagb2uqVzCZhvy9PLUbSBSe3LVHkD2a7nv",
  "key10": "2qNVK1CNPGTdTwZSMQ37KnTrZ24FoSAiXSV1A4dS9LDyn7ETEbq5jJ9iY5mqwV87VQb1UdBjK8ZUAz5GCtJs9jeq",
  "key11": "1gTCewEHsVa7w62FWtKFYXugyPTDBt22FEUTuRhuX6XEaK2XzjBUpJybvLEXbF2b6ruRzVZz1ZyGmNbLdkB42Lt",
  "key12": "41JuAacjwzZBokMFrRbZMMBmiq7aHykYy6DnC7VyFM7GRTeZT7pzCJUVtAwaoGM6Mj6nXqGVX7g19FrVK74uzDdv",
  "key13": "fhRYAnD7dweZSg4ixUHLcqYL5136FZQCLX4UhvkHKDinpxsjFu5fwwrkAY7xWo1pUeBPfnN6xYqK2qqRE7AJsVF",
  "key14": "2B7ENR1JxCprvwMUT1qKUKgh6suxdGCtAcRoMiJ5mTCYE156X72BwbrXJzQXa67Ragzj5xj45nckWWSEztv833qS",
  "key15": "3SaLipQNTzmfy2aUaDon1ssBcN3Woo5fog3rypsPutJKPSR4JeoVHRhWkXWruDAqt33HWUqKCG2viNHpRyLWQsgb",
  "key16": "3axZvRpFjxD9F2zhWP1ERm5i5zcnM3FiAMAjspkzKcXPmKMFBotswLV3yYhf36C5D2je3n9Q79nSY715XuwWEKjf",
  "key17": "33v5B6GetL1oGb8AQguAgPLkHJSxgExqLhqhzUa9sMmhSMizWodag4gnZLWT3Zi5sqKGgFJxnqAhgd9wQQ37YGp5",
  "key18": "32eXE7rXB36fHuoJufeiDgpVzrxHxzWJWMvKxQHq2VQMLLkLSMhZcnKqwx8itAQWedw9bB5yzYzvqgQJW9AyeTBL",
  "key19": "2vci7s7RF3LT5A2yxhMQX3qKYdF3GtcreihEzaW9phXc2XcwB8BwV57mR6g35LYRqf3rQcW5qM14jujG3TzXgGYM",
  "key20": "e6YgzuvABjHnC7vBmrR4r7EiCGCZnEhMvjpQvKZ1fotFbaAHwaPNbVbK9kZYbrnk37SikPHBFJi25iWXR8RMUEG",
  "key21": "5pSViqWYZpmjGVySHcTYMrgeqi273ZarJfixt47VjkpgJ3ubw9r5srEWVZu8EdhJ9Lse5Tcmp1smNxiTHscNcxjh",
  "key22": "2BGuo2AASvNjR3AikVRRA1brxwn98UtFMog6Whp2KWdMroWtD4U6n1E9RdTJaYTgQE8EyKMQ9goeEwF5t6e4Gnf1",
  "key23": "2E8QouTvMQHdmp6A4K9JMZijSKYPpWNzDrGo6Sk2euLBNXZZa9Rw1UFowVZfZZqrFHe9WAi6wzeVdfpZ9nYLyyoV",
  "key24": "4bnSWZrCaFu49xSE4LEzPsbnBvU9xwoXmBKRbA59vtSx1zmHWEpajF2kpuZYRMpeAZz3pyhJZ4VCUHV2as7xUofA",
  "key25": "5qedQHYivJDMirhcVQXAz4yayyhXcUr2adn9xxzRTEUDUZFEaPNUBf6BoB1kZRjzf5JzXidAZFbM8QrHBW68azLo",
  "key26": "64oRBnkgJrmkaUA4sX4emyGhEDmtGDsxo8ox2oBC3nKmNsChcfTgvJ9msBBysnYX13XqdFdHgrPm7CTnu25CiYMD",
  "key27": "rSeLvD2J4XR5J4vzxcVHkPDYPNZN4oRMrWWAe9Prm81vbaM3PJVmtEY7KiZKWNfDA2Xc91rc7da3xoNX4cqdyds",
  "key28": "3MREdq31iDiAULAyiWACJx6uTZm4AvRAmk3JF9Ketac3Lk3iGye4NcVU4QyHVwq7wcX38eBYMBk6XQs6VQkfFEvv",
  "key29": "3SNxzo7S6NJ2UXn7FKwygNEBSknefFNF1fQDkr2D4mXYBJhk1rtYi6ACbnvG6ZXtpBzycwcGpbUHwEqd5r7ovM4w",
  "key30": "29QiNHncCbdCuasc49S54cjFTjm6kgwmJcdTCrsiq8BfYiuA9s37q4PTUzY58gfe1225F6aU8UBiusEMKdYse2tK",
  "key31": "4cUWndiRosZMqzWppR4VZdEk3aaj4mkkKHp4QUigCdvQUohTqQbQe2mwmNQc7TS3oV8bShLrZBaoKxxeA4hQ3X4k",
  "key32": "5vUMsgGJddUUnNnpiNDLyAjfdFXhBKFWkE6Lb7fCsg7Y3RrLXt25fRojq9cqcsDrKC5tQyJKXb7ksAjYAx9cb48W",
  "key33": "3PpggkACtawKYiU3e3ZLKWaESPFrcGXDMGFFMSUNcVxB8eT251B9i8gqqy4GzaD5BrQoxyvn7RG6MQEaR8fWtGDV",
  "key34": "2LoekA9jq1cWLXEC3uuxmhYSZ6aQXVStcvH26F54ezwNNiE6ezer3N6pcr26wX8Hr3QuLzp7F8Gu6CS7jfxW38xv",
  "key35": "2DGoUVgbfZsL6GNcmw8Fnqb8gVFMAS7MZboiuBEdj3g58a4ts5HxxSUDZgTwYfHGhjRsjBxo8nPhN8zCNPVmGzZc",
  "key36": "Vj12QmmosPUikzJgS6DbovauFaca3fJdye7kEEPrcfN8KuUKeQnaB6cQAKXh9KLpJHcZtnTtaY9soobTmjR5eVE",
  "key37": "4XosXUsjuU6wRmwSYtnNhkbZwxi36eCpquYA7zyfg6VyzUsnRwB5DWMypFGsJ8cFRXUuEX8D1WneHAzZpYnqcDLP",
  "key38": "24UCfEKAJuARcVeckodVtVhbMp5sSreFbGhtX439zryrRdc9BSCU8MvezGGLdAhiz8mPjLQXFNjMPnC5vjrGYRTR",
  "key39": "2pGmY91wm3uCju1m57TA3h6z7fncfZEJfyt3XYN4QzSLtFBHoruwMpiyGi51t9DeZXkJ6urVMfKChZ99CHVShUQf",
  "key40": "KyugLKk1GfRRsHfi1F5LfM1BuqQ4UWB4DsJ3JcJH8L1otXAi2gnAwsPuU8w57qL5VN1W6areF1FPXYATKLtZPZ1",
  "key41": "hUrXEKnnyApcaLemRo5x3pjz1EJGcqDnTuPYexTkRaqzNKSNmygWivmU2Kw6wr76Ex4gmtsYhns6ncKkV7YEyke",
  "key42": "5MM1Mz3buFGzMFw8tR9vtG4s94BcZFiANb7cwFXB88z9bZHDnSxk2tCWAbXcDzCtzX7a9QFREjpC7NgmHXetY7fy",
  "key43": "gb4yM1h8WGzGx9K7HgQxfZgAqTdLYjb8hX5vGa4tbZySUP9sPP8qF3w1gFCPCiEtH3zzkSfTmFf93SAkz9F1FjL",
  "key44": "2AK8hz7H9bgYUEPsv16cBXNvi9hAnbfhaTo7D1wsp8gzicp4ip1Ar4L6RarGBwzZuV63WLzCZZAeqr7n3sFmnR9X"
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
