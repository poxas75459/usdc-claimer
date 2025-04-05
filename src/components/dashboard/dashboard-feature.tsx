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
    "3VJ9hAaHMgpfPgSTPMmUC2ZiuZWMi1A7YEKPeuuY7WStasJEpp7fbb2ukjyeyDPSRwei37nyRYitePbpfXQi4NRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DBqY6vsx7mrikRw8HbNZfdgwC1zBqcn5DRfKpszqAHPj2vpjqBYmYzoJGdQFAHFs7do859Aias6RGduuAm9y1jC",
  "key1": "5h1HZVarxJM3bC55CPonU2bXePbx7ViuVJNF6m2mzNRc4X1EKatKg11hQNdzPGy4qMt25qsGr8vYMz81XukQTykH",
  "key2": "4FqQXofYf1UNq8hfSnmSmMFrc4YnGLreA1a4CeugBke3Cwne7GW1xbwk7ieTzxHuWuHrtw5n9hfV49H6YuS7DsnR",
  "key3": "JTiNpfF9AFa5H8TCEmefTmNKVg9GXakPaS6thZmE5dSr2vvJAq6uzKBy8d59hg85ZFEE9r91pADdbPfSqmNFgsJ",
  "key4": "3cKrgTH8TUk88HMmHnN5fRGrQj8bf675WPVyFjM4DuiTPnJqTkUukFf2iXkn9sGJAV6xC3zXP843Ro43C89KBsmT",
  "key5": "59sxnR3nrHh1a4BFYeMyx1prhZHkR9yz9gE8YqqZUZ9kUrVK6hJyzsM9ii2zaZfYpMkh9dMRBh6bTyKrJ2xnksjD",
  "key6": "2cLkJYWxENZs1JZerVRgZQpHxkikjmwYrt7D7bnqBoDGmDoyC18HwodPrWDpzR4hAHUgddCjBRButZpAM5E78dLm",
  "key7": "2RHdPyj6d5SiStSbdiN1Rw4No61r7Sra54d2YhV22EuuC2bVMvZ3JDXYHjVoDBFtCZvCZHSvURmVaY8T2R7Ltqqs",
  "key8": "35ppA9ruXSpGFZfYH6VckCNV2iSpUfYiZFZTi8Pbc5RWFHJeoJUtMmwhLwFeNZTKnCaTMNvG382s9T8p85rTyLRT",
  "key9": "3DoASAVPJxnYKbS7rS76NiDPJYWUAGuG7c9QfohCFG3yqbd1kjvU3x2YbHkVoQTJbrBtX16qzH4sgHrtjReeXHY8",
  "key10": "3QDaNLQHKfcRAbKu7td9ttyqfQBUVHx7vU13T2j7VrVToa5pC3EY7jv3QzvXpPEDpJGSyJN8hLfmv2MyQAR3Enbm",
  "key11": "22miRCBhCTcWjTpbJZzjx2fUbrsMBWtFSRjjFoUWeUYTecDLsZp9rB1wybDKYgrQVVynDs3c1BvW2N6gMTD3r8nU",
  "key12": "3NTAC3NKLSFnmtQBbagk8xjTVR9Pqcg1R8iPVuyVRPB4qWjAEYFgnRx8NT9d3e44M46hiFURGRNijNkX6JY6JD8K",
  "key13": "vqMi322H8M3EEQV1E5hG6Mtkpzxysu1fSj7VbtvnUnMvB358SQn6h9DaRRo8pJcVJXnaQKpBUQYPhEPw3KDgCi9",
  "key14": "JyS5TMT8m9BLBzLsgvQ6MV6Jh1LVVgdQbkhZTfbxyzpzpR2aZqEYPM3JMGgaTfdQGf7YyEsGjjAn9S1zrSBDdH1",
  "key15": "ofxv3vQJMYcY2pDhcyNxbtHQpETVUrk7kZMnREQczm9mtnJCJELionRJWD9iZ3YWdSaxswndkz5i252RVKBC5yo",
  "key16": "Vyp5nkrcZfXgkycSP3oeRX4P9jvpwpMqm4AhLzXUHP1rEgQt2zksBpLSszRbHb5M77aDDx8soUC4jTdjJ3s1YB4",
  "key17": "5FztXzfX1eZBuUwk4BH2ArZEsjQtMWqGeCRQLLcRGLUqeTnGqsi6GbHj9FqbsKrm8ucHZ6KArGxFbBxPAHd4iDQ",
  "key18": "395PxgF4A6vxbVqrwrZg2ViRvSkEv7NXmS7f1mG9bzVYCyY9ot1ZKTT1PtYYJS2P6bKtgjZqdHQ49dSH7iWMxHHn",
  "key19": "1EbfFf1KJDPiGTAjyF9Bfbn5pcoYK3baTNAnFB7wSk6zjw7zmdybE24epSFTWDkjCZGR2siasD7WdZn2tVyRHLv",
  "key20": "2YEy3ixeHEzVSuBxhyFZKDteapm7FGM1bjr6fit8U43SU35BVenBXpuCpdB7exzakDzAM4J42HrTVykmd5Y239gd",
  "key21": "27cy8gY83fnhAETPuKmBqUZtQH9YooVBrExdygBFDWD7nwaRXVLP1RFaXAWmdqiz8expS388g3AmCG8rAyTjvnjA",
  "key22": "3j8B5okfQ4wYgGTHnq92LWoBFNQfPv5jMDW78B2KGZuuViNzU473gwir3Zaa83XUo9TL6f5YXLBvTS2snZFUBq74",
  "key23": "4jmWc5Bko71ZLBzJHaiQrwNdzqnR5TeiMpWXtdcUXYa2WBEbE1Pya5YG2AZSpWzjP4zTtCyTmZ3QNZV7xDQktbmb",
  "key24": "2sa6YMQ5L7CD7BLbNxP78FynCiybVwFXAxmvQ4ijWTfEDsenijhqe9D4A4PFVARy92XN7D52aJyzEmu4F2UrFk5x",
  "key25": "3uLwU2x7DJqWG9DXBjoSVDjYWCMqop1KMoew6XNBLiXrzAtMoyphkfvWKbKMWsGF9jwxHzXYD4RXXrL7qxFxUdWq",
  "key26": "2kLGYkmXkvHixBDnfQkCgYdEmJ6hg4dRYg41QXsMcryuS2a76dYbdnXQiSyN9ULTXjPEY6XG73bivWbpCThwxyZm",
  "key27": "3ZAuNpkdNdzVT74fQcMKfUCJ2VY2dc45Y5z6Zu9jTRwGBcVYpUvq8BiSY5buXXSQiWcn71wWcYPiQtMtZYo8r68P",
  "key28": "JGQGb6KAkWoZ1oMp7QM5h3hPSQJLTwxvuTh97fw9C7FxEyjNJ2aSWAG6rHxN1AFV3Haw4AFxW5qwGPyL6mAF3KA",
  "key29": "octNJGwyht58e3joXwsQHrFsWMRj6WrFnAn5jbUTvMgxW9CF8kdW9hpWsqWfTD9uWFvuQqSXzqbGkMMfzpCAvFn",
  "key30": "2UudA9xifoMFRTDKngzRKEscaiYHTjVumyxj45YqXvBqqaq3Q9STFVfZK7Z3amqvTzvVkXmLDaN1uMxtFHJ2sXkk",
  "key31": "j6KjedbjkcAtPc5QpEcaiDMrMg3vBe9qRnmiyt3J1dZCE3wkHGcJDSmSnoBudEwnvw6SSr85Rr9T3ph49hz8B7S",
  "key32": "2q1X8wjG6fyhkc3k72UfNG4NuMZ1rvs9XQkUpgNGVbE5xjUbBFcb463whUik3mKmZiqCkwfxrupVZdUu6m4M3ztc",
  "key33": "5c6iXpg2Cp29kwCAnkk1stpxLNzNgf1CEUACRHNDQYGn8rzaDxUg7973KG4xtVik3xZZQWivgBq1kAXZfCjyja9c",
  "key34": "2t7Kq4dKvXVJLXVu8P7bjXNPwU91CdBiBcUmjXvVQoutnpPfAVCFr7YKP1i3m5ruThjoFLBZSdvtJMJKvKb1zSGe",
  "key35": "2mseWT9jQLMNZhq4hYfQY7ULS61cGUu27M3Mtyc5x2gG8A29tSobhoj1sKxe5TSAaBFZLiEQpbMGuGWFo2Wyw6ti",
  "key36": "2KoPbVbc2r6k84gWiFgiFEVdB9yfU5bevM1AqobHu5awJTy1G7WH1K1gZruauxHngFPuEnfvNCftAHMMTZ28dKkv",
  "key37": "5wLRrHi1b78pZDZ3Ldoy5d6cYTCigetu5wzkSXhRimVVqMNLoCjdkJodePX4TVQAaxxJHBgXEkVwaJUnjoSdeBtz",
  "key38": "KktJDEJstPVVvgsuJQHzrS7nqUEptDfrMtCXTtZyTNMNuwCREK3VTH7otDGtJaBifAapqZT7qzPyq33JsdB7ssz",
  "key39": "617KFbnMaTDorzuNod8m7umSCHbg51hdP8JxUEv7fmRmtPQv4xRThDaaHKBDFzJqG8f1yZ7kx1sMqxyheCTZBjXP",
  "key40": "4yzGMojqKaAmg7fTvGYVgDKMZgY48GbeH9CZMFKfwpPfaZ4AkcKenB3g6uP7psVe3KBmVJWDi2CMGB1tBpWQSV2G",
  "key41": "2abKuag56G6Yqmx7ptwm5w3ATGaieG7JFzDiRqtBoVCSkP4qbf4LtcbZcCt8upyxuKfbQYvRTyEGfZkRe1JBpHCj"
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
