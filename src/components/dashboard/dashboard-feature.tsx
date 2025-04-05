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
    "h221hKT7LTYrGS62Bpkju1RyJeXbc4xdZN8terNRwVPvgZ8fNT38Exhb9DQr5FvpPBkDLUS5Q8A5BRWnfSNPmrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MYgVNqeh3Xq7E3heAsdKJ7TTcpq9qjwYLUHLY4eo6H8kxDvXYB1HTxWqg7EtemiqirbLbq9S49nC4yvoQ3iGYLA",
  "key1": "5beJjiz8gc6eEMXEVnPJMhUdTUb5rd6C3m8D1Yd3as45UgXEr7C87wZuPSxR7FsCx9CQeQBRChyhNu1fAMds62GW",
  "key2": "5GjbZTUfMtJXJnKDKVwngp12aXkPSBpRd3RyH9Wqf7UreG23ECUvJfde9yhFDPtArXzhg9FETRBt8gVRZBxrSQ94",
  "key3": "3ZmdFmWvcgi9Jg8mWx1zAq4Y9qWEDdKnM6Qp4HrJ9EMooZez6J79ush4MrpvHqAF777caFckd8FgfDYiGnKxnAtq",
  "key4": "3VskRieC6iULodYjAWFfPhtQ5gPiFgL87Pz8Vxjk4auQCoLAnpVvvtNCQNR8s6Gv8jMbaz93wUCC8eSpLoAgFWrR",
  "key5": "3fGFL1AKHrrcbkbk363i3hWcBtCkRLDUf8Cmc9U9AvWXJu393oq5iaD4R92kXfHXJ3kqSNqAodTgNpzMJrceKGTB",
  "key6": "QJMfhpYsvudy8nXpVPT2uXAAsFraysuftvzrHDjQknVTDUQGAmWqUBizMtzKf558D4v4Qt8eqgb3i8mTRcHf2br",
  "key7": "2ZA3eKZEG8HDxM749K9FmH8CAJJtnbDMRp3m5Qu6YXfcmNgCid9MXvSYcuRnXPc8yhFv3ACCdA9rary8nRtcCotP",
  "key8": "5FQ7ExyPrAnnRN1c5q5GncLoLrVeT1ESXabG4q3m4JtBwJH7TiLAg2hBjUekRLcHUZEpkUpYBJ2ckF7arRz4fv4J",
  "key9": "2ezQ73ZjAwFv1swWHdytxPFqhs7zNcQZG8odocbPXQQrKsrSoUUjR1BR2xvh2Yog6rgDfeJzcTnDSCwn3ExB6TKj",
  "key10": "32Z8p7Jrik9wKkRKzuUKq44VZFPBo5qUgEDUe4QQp4u5BeU2u7BLtoZ7smXcdVUCr28p6xJLUnzdt3kRK2T378gQ",
  "key11": "2YpAzPJCLaCevmnbpVCBdzsLAdpnDDnWEo6typm1KbU8Rjw8fJXFxfmQ9CWvo7ZD8gC42w7f3tZAf7WdyZp13wb4",
  "key12": "3RCDtnmpCNVDj2khmqsSFYaJ5YC2hqe7sKhaw9LaMRSN2EFRoFFGbfenfM5Sxi3YkoGnB1MxQiGdpfSpusrpbUSE",
  "key13": "dYhsutzH4DrLjGDMfeduWxkgdxc2gdq7FtM2STQqKyAnPgjjdkNyPPB2j11ncLvVxYUXGf13E6EVe55SLmUty6o",
  "key14": "46ZAZmzqiHyFoWmWFn4dUrkm4KZcLo1E47rjeP2zWEyR7z1TxTLP3NLQFEjNgR4gpNZSuJFfrBYcHFr8qXfbbFUq",
  "key15": "2m2YSbcouFQLSVxA2n5T8YBXpvZPo2AsFeYmeiWyor6535HeMjd6F9CQiyRor4pbrs4M9XxQbH24WU9r1oej8ve4",
  "key16": "35Ar2y1hbmqgbPDyzhUYfAspSHxxFtCVvuEHV5n7bGh5bgpE9ygBBRun52kt9cbAS3TLN51Nw7oudpxrYtdyHTuW",
  "key17": "2CXruTJvrXkX3P1tovfnLY1P1VZdHGGevFFFHn6dxsPibo8b3aKkG2Gb9YkuecLij7Ee3Skrr9DXVT5yqrtsVnyV",
  "key18": "3btBEgEbwTZYqKdWwcFwthEzy813mybUgDZEd6EV2KJxPJ1KcaVw4B9zNmD3fk58hxd4Bufs8tz6VRXcTJhNB6t2",
  "key19": "fGr9hK8M2UbHUzxwUAvQd4D35WQSnYi5jKHmNwwdhwAwKey5BzAWabHh2oG3EypwMw3VA5DYbQH1LYAK51xoMeR",
  "key20": "2qS5d4naLskmh8uDsWuUR2y72KshEgUqtPYudCnckopdPyb4ALEQdTtL5gfTD2LmQAiD7qGBWQdou8Da8YZ7a2Fi",
  "key21": "4VSgB4JvRTBNXdEuFRbSkzQ6KASzv3n39gfftP4WHNYW3rAD3H9jNYu8g2PMR4dU8unDMToqxPvqwk3pxyZxKUoQ",
  "key22": "37extwk6K7ULKNYWPbJ9JfUtfy8r1yPqJdTSpMuYxyMAkm3F6vAQaD97ABKv5kECvggJZUgysyVkTyANqV2t3Shg",
  "key23": "5omzGwA6i5XzZS718dganqpfkGYCV2RGNEZ7ZVkCKN8JuPEiAxEKkrKRsuMPUCrfyL1MMbBFzAzeFoR137fEWfC9",
  "key24": "4XDcmJRTwT7nQpHnrNmMiMp5udJXeppofgXS6uE84CMfZzXMqP8TC2F14Nyg9tHPsJttJfBbNq2iLHy6XrYRkmUU",
  "key25": "4B5BZDzcKiR4XfwQCmPm4xDU84KGs6fBPVzNdE8LVegfz8nSuYDRE6GuncHMaYMe6Q4XvWNEPenPLWZS2Ga1A2fq",
  "key26": "5rW9WMNgLd1dup4L18zp2mYHLf52Neen4U6Bj5UQooycnnAAomGNrHrJA4sXxFLQw2U5Xtg2FJGiKe57ihxy2kv6",
  "key27": "4eEK8yg1PF7KvVARL1tYrJwNZQmu2GU1cSxC4LjTzX7QkYnXmr3cXyBnunonPr2JVEEgBeAMhs2sp9BP8Djt75cQ",
  "key28": "8t9rutnSNqYmTA6GSp3Y7qSEyRhfkUmD2vndmNZzwE4W8NXnSQzsxzBBXfG9STYXLwNDLZHQhqjxhFKvKnqEuim"
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
