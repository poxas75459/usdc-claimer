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
    "2NAPkQHtVy4NhqMiRi1k4fZsKtsNAhFxhu9iXTXsGWTy5MQujFE5P6UY8C9fAJMzPPGMe81GYfnW3AWwQaBEc9ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XUdjLojZdQmh99LmWS6jFCjzGYjJcAQPnvtVevqGWcxkq6sTxycDJqGBriFkxbV7XdTzKoQRUtViB6FU2fyKnNA",
  "key1": "2KQdmKgjCiKyHyNRBrt5ogNXaSNzXYyc1DNaNDUkGJ98oemHDkJjsaffAw7HWbprCETdCNoFm9gne5DztsByG1Nh",
  "key2": "LLQXzVXHRuy2LW3LgeDeL8zwFWy67cVUQtHLJCKF6WGh3twFhF75zrWohL9ewn7ijy7MWTneQBJpKM4jptUMAX4",
  "key3": "vZfL8YdxEtp987bHwJij3KHuuZJQno9wpN6oxTJXNoytAc2REuSqvQiGJUf2K46En5Jieoof93Qs2zJZ1Nxf1dr",
  "key4": "3mf3QCMYZZyV7VFcC3vJJnTxKJNHoehVnNRWv6jG8hgSUPCsGZ6t8VWKHBySr1bjfEsw2kBxd7nGoZje4bEav8Ms",
  "key5": "5o6DWMgfHoowTvdPTXNRkNdXS58UTs1Fpra2yr5Ytdq2jfkC5h4opcNCFX9xeMk54Fq8ur7cVwgU5eGshfNMz5tR",
  "key6": "5Mt1Djpkfxh5fYCQCUgfkusutn6ubxp2fNsnAeXHCpkA1Sytm3Hc8t2oaDfZzVcAaxTPd9p8uq5Ha5MTxnj63zLf",
  "key7": "5TaCqX2JGvwzDPGRMcLmsSCHzvtmoWnJCkzHagPJUQWfMAxp118GZySH1hH7Y5QrU68p1i9t8WoWUDRxyAVVJKtt",
  "key8": "5RivFYFYcS6UXwcQ3uU9LpQEMZ4wDVJV58wJ2Jog4QtEFD6mBwNnFwM4xvR84h1FbgtZRRM1Qwup2isPUaJfj6AB",
  "key9": "2oxguP2zvhkZC6g5jGmYVt798tNtrJ6eZqM2vvbyigNbbgopYMhWmv1ruLuuBDnhiQS675nemwx3xPTBNGxPAL61",
  "key10": "5h2HD9n9qeka8SiRE2YEzCg4iCUJaPTJCX4xyyvWXXgKvP6ZuWeRU7f6SUdKtShrruEUVxYc484RakTSxcQtruUB",
  "key11": "jMUax4x7gc9nWs3QREnWHJE663HWbFYj5Cxoz9Q3SJXswpimikHnp1h1JEcaymLs9s2xCX7rWkhQgnxV9RQXQ1z",
  "key12": "2jxJ1Dpav5SJu7a5UnVPaoRPfk7wjjnRt9qWD4dwmRqYYepDbkkEbewiHGB2Pg61rTNSiwHBRigHw9nQXpjjUjmk",
  "key13": "31dR7S72a75evE3QAJYc4fgLdUrjQtYxRD2PsGYZcoANixN3jiR6NfgfLaoKybgYAH2aHsRveXjPpwgfgG3rKW1n",
  "key14": "3rzk5aex6RyrtYcC3qxS5JmPZZVE16yJBw7W8BuXt2DQVUtJHzD7r1v9Z1ajscTmHXcrtU2DQjHbyEdP9yiGk14W",
  "key15": "3WNhHagNYYCymtnLu16USPzgKawbDZzrwuFjajTM8HnQrfT2ut44kDfAL7NeMtxUiwr3KBXWyT9YtYHB875oExBi",
  "key16": "3d6KpnKzeR5StzkkCxYm7KJ2Mq6t6nA3fiXs5ZycGzYc86Yo9GYQnag3GcCBq9igtJVrdzb3cnjz8e96ZMMLuHSS",
  "key17": "5GQvhLHZnp9rpkB6c3n4xVFFXG8t5EdJPp8j5KAtbCc3R3RpPcPjeGZSdidgtfp4bi9djHpF7PNtPnmcH4wfUPNW",
  "key18": "3DMQ4FZYM6ZR6oMuy3wrfroqfHY54wmhSzaVfAetpv7rs68LXLatv5jA3DQ7nJHAPDFUWH189vPHV46hgmjwDrVB",
  "key19": "5PwZCDAcdNkPCENCg7CLLDdnaS1gEajcBb9UYcts7kykho5FNtUjqqpTtnxRYQFJBXc9dyK8AAz75cBbhMV9hSgs",
  "key20": "647sgT2dmuNqmuUAU55Yt166S9mntAa5xPkYp3mCwnkAWgAPdsAdM3CxmCYBX8xhvPJMqBuUn8HYdXCsv1TbY2wg",
  "key21": "24MHjpGbFW2rG3teGxAXG6DuerwoMtd8g2RW2g8oSKaH2iVb2meuS1rQwVYv3fpyrsCVbeZrVaER1BbRwW6i4keR",
  "key22": "43aaWxdNdP6nG8gqAD1s355bmEbUC48y4USwSCqzqvMvb82TgrtEfS9iHKZFf48SK6GPJoYKcuGS3RwcYZGzkHFm",
  "key23": "oZa9G5szs2rhw8SgNvWHPHGRnupKhTmXFdc6fXZLZF5cn3fDrQx7GE8QMaQn938qsyARLjsGCrd14jkyhSBYTTM",
  "key24": "3K9nqri4UV7ze7MRWwrdQDZGgHuPrXXYMnVwLDma5uz1TVHGRhnp4n9HfJnJNfYAp4JjPheMUVSq2MBKFA2YbT5z",
  "key25": "XTLBRYBCJ8XPGjw79F6TCcztYCy76XhvpoSSKgcPiGyFEc9V76UKBCXroUWS4E7zbwMKyhGjj3Ri1ziVg343281",
  "key26": "4vJgSefboLLyuKgCGWhn16KF7KJziZsv2qTdVqvERjRhftQDYApsB16Um74KT3ypxZFtrTmFraRHrPmUVWW1uBgL",
  "key27": "4LdZVKwkaH6qqxAyhGyDHLzzuc3Cieq14hdHpDRp9paqXqEZpG9mbCKMrxw5GEPhbWNGtby3W8nDooCjZHAzhKnq",
  "key28": "2gYoeY1zczxragUqsipgQC33zgRML76L6KztuMcrCVoUXwZ7vqTSekWFeR8fy6noT3XXtuLPdMnHdfeUbS3WRnXm",
  "key29": "21T4zMvJDHqoHSMNvJ5E3UPnF1ZabBmAbT7zzAqXWk2Ga1He99zuxUmNfGR5yHZCc11oLcDFQHbPEpV1SL73LSpB",
  "key30": "nQ5ABvY1WP821Hy3c1vURcttYKtJp8cGHy9TzqJPaLZ7Tag14DT2nHkdMBVo2Q9Eimzxnkh1SajJMvPowUv3HYj",
  "key31": "yeFg6WtV1MTUaY8LL4NUnAZRJ6xT7DY8CyiwrRdddpwJKF4FTQYB4fKQRzmJf9oUQxRgXY6AMxRuPeAHfgv7buN",
  "key32": "3TdCaQMF59DNDqgzNLHRAVYjioQaEDcgKQ2NZ16mWzhmZRc1PPPyjnsapkmgRvKXqxqdobJPk7iqbb55bgfzG1Yx"
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
