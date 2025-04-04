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
    "3mNvtdpx7Q9eVHZSUEHaxJk3y64JTzGxBPTQne8u2wtwcAhRcxTJksuREwbAKdGxLyrK43C2WHMoVtR1qAWQSJFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHFKFXtznMxDChi8oNchjep4whAFN5jaDb8Zbp7X53JUj1YNfWf1EzxzwpnY5zcKNyaDH3UMwGcWfx1X1Qm8PSh",
  "key1": "66pkL57jmSLAWjoVjE549zHaDkFUynxNktDn8FDBKB24Sdbw8dQUiYCsMYEeh86iAZDwboTKXcqtrmQrEMrWtJvw",
  "key2": "5cWJDseQcHxJT8KqS8eicqcMaqgDDMeMxmkfyXUDvUBBxcYJpRvCdajUpVHbqYHfNAWWjrToVXZv2V9GnNxpezrU",
  "key3": "2Ke4EtfpvTpTFE6eMDMv6GfdDzHF7JU7u2Ka7JfweW6tYt3YDhxs9vFGrhVb8gyxW7CN2q7DFwE3VB1FGWz4uyb2",
  "key4": "8rX5TLxKPeWjWcsoZRNfpfPVHc9y7oTV42X45zT2pBmBToHSvhekVWvtrnfXLm4TwjaLkLLwZECJHvRW5bnpLKm",
  "key5": "2UgccUqoPsHDLjjKfnrd37XpjKPkBzxXNGGDJZ9PuJvJHpfwmRn7WbHbddWcXsQwQTus5ApoSydgsre7pjMXZ8J8",
  "key6": "46R2cxs4B1dMxqZ3mp8XuUuoU7Ni2VcfmDSwwEqcncuQz7cqCCxBqTi9Y9oVB8U3iUrh4PgySqUpbf4ArqejBmeX",
  "key7": "5ZbbcECnHyLRCjuJTFDCRPQaAhEdthYQBmTDAt73X9Z3v3UtCtYKC4c1q7uaQYQMmxVKd1Rnvoqc69UrLADCgwog",
  "key8": "59C8pt6nATAys7K8XDEUxhpTC1sydyd75xHLJVB9q7Qcp8zR7hR88j2sRdCYWZ4A9rFFMzPQn21Q2DGaj5iC8qPC",
  "key9": "3E5xKPEKxJUmrwRbFpFAEo4oQQrg21zSFcpr9DSrCRYe8vmcPXXLXMdRgDP1rMk4bTgojMFFjCRd6g7woAFXRDWE",
  "key10": "4JundD4nRyhs33wBtRE7yJHr8BxkCTfB9uXcy7ic92RgPrJjKXBi3HWigL9th2eJ3SeduevKZ8jTEQNEJuHXy9Zg",
  "key11": "2xZ3v4V3z7Rt3eFr3yGaSstAaBFmz1wZhto8kzVudyrrZYFpJEb2VdmMYVHa8yStuTAru3e2DB2nbr2p6n7QpohR",
  "key12": "4kWbhKka5ekd5Exd2evv8TJ99jSQD21BMPEcTfHM7CE2MkvVRDsUTSp11yofFpq6wqoujTiRr9kgKG6Lu3GoGoYA",
  "key13": "4mDHi7CSx4XdKymyWc6zAKdtT4WUvDY8MJZyp4aFa5sRYMdaXHiNJWE8qps4neAX7WhNTBX3PbG4ZiSmWAmdYzem",
  "key14": "3121s5wWnUmivy3mtzRk8EgirAdgaz5gm82yffs8s9kSWKGhse44k1yDQTQ6NRU7NSgNQ4ckBdJGF1gQTA5yojdt",
  "key15": "5HEb7oKM7pTCHvJ3RP8MCG7uXTQAG3G2aL5Aq3Qv4ySMYPnikTomnh3C8NCut5y5zrEdUKMqNrMJVcQ3TSwz79yq",
  "key16": "4PSskepLog13cF6TeutqbVMCB6QTEjy5BWUBW9iaBqfunbe6sVMveCXJ2PV3qjA6VhiGV9goGyiPQSqj3cmQDbPs",
  "key17": "4871HHUorYSBNqHNujL2c9FcKsRQhdbN5pperDBZzUG8PzCkitx6w4aXfGRxaBnkaa3oRCf6TRPT8qyNbHFTaohq",
  "key18": "5EpVq7vZ9F6ny94enX3Fxiqv3edqZmrvcp1Spt7SkW6SsXF6AyUT5diZWFULhD4VZ3uVqqFJpP271ms4fFdwUGnx",
  "key19": "5q9aeKf5UHk2vHDe8tsfmCb4rDHzsGxJZWkYbziePefUqYYp7MxYxkrA4rzeXsNCQTbRz1LzQLBATyxQd4WYdkd4",
  "key20": "2btWubQx9iUi646jh776JzcfNrkjkT5onqoJhJvffh2S4MYScy1ovj2e7718tArGwAXwJPhKRCYk4Eqh9YH4LqPM",
  "key21": "2Ui289iVMMH96ZYMz38Nfu6YVNv9F8DA9L226rvyrF73uzSZJ6dkg78SYDhodnCxNbG4pVEFDaAaufYrmiG1QwsN",
  "key22": "5XoQyFihtbQdyqWDDknDbQ99wN1ixYttfm39uX3JQR1kstd4yGpFxHzoQ7L2eMS1HPSmggsZGwyi6XWkhNRZWpJW",
  "key23": "36Dy9S952y3H5jJUfeJNSzwNphZsXQ2gKPJ9a62rpWsGg73ujy21FbAoSB1yMTpiWx4TmHyqCt8qQjV1579kHdNX",
  "key24": "2UYN6h82517tTJVL1WFowPuaq9fzUgh4fbKM6b1WQu82GFysNvJReiE5FK4UADSmxs8tQrCFArzqA43he4tuWfTv",
  "key25": "3febw2r2XEPnxUqvTkD8bDChJjRbS1UHgzAQBKdR51LFLeaJEWaczU7Xon75Mo5N9apqnNMvCeXYqHLsx8o536b6",
  "key26": "5yKn42FLMjVnRqGsZVbP9mPnD1noYuu76hQ2HtAvQLYG8m8QQV9273GG3dRpgJkRPojJp2YQA4XEGdvkGjhGHdzS",
  "key27": "fbXMqTodwULT9kJRkqbMeAAPJy4YNxpQ2VWA8kfKGbJDQbtYVqomyuAMZRzmwFPBqdLCf4RzETcRnS2p5PiRVMG",
  "key28": "3LjpGwfgbr6gcdZ1V1BVPn2d4EjJ8J27MXwVtYPxyF2uvHzmysyuZLf7fCtAurXTrnSgbpYHAeU9qvswUXWukFj",
  "key29": "3C3LGeS7gMxJykU7pgrkvXWsFWfLZYDVoYttxHnFDUFHztpizWa9R5ZcDtvDRob8SPUHBSkhLLkXVGhLFyX2gJCR",
  "key30": "3bspMbvkS4LNHgCAjHtBj2XovwZi3de1ZQMKzHkwdxEcAtiT1HctbdPJoQSTLaaRabajoAVykqPucJn5FiqEabA4",
  "key31": "5uFjF3fqBNozmvzbYFJ4DY8cHCk8Ddjfgjt96uxpCBmPyYjbgw1TkK1ZsmG68yq9kiqY71CUpRrBerX1wpJDTxN5"
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
