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
    "4RKTt5WPZJ1MccCBhawJmhJsbzrMxz1mM8A8A6kJ192y1ffuB5fasPq7vQtvcpHLHFJSYLd4F9nUZdQ7ZB9hxwJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFHWQUzaodZwhzxzCCzEmPaHVszFQjGtz5nnjeeyBbvror8QY9GJUe5n2YzRmztmYqN7DKWAr5ZJEfHMjUJmaUe",
  "key1": "34XhDfVt5G9SzSWneToNwVYssGjCncxUGD57ekDYad59tp8hRofxJgQVN5hL5gkUnWUycDBsjkFh7pQeubLJ9xc7",
  "key2": "ydVG7HrD2UHr42c4BD2wozoG5cP46cbUg4JAf1mh173Uz8MWnNPm8gverG5bkUfSPoEVA7t3T9uwZEDRJYqJTBE",
  "key3": "23Sjfq2MLBjnp73BkbyDrVFUyEF79ubcGPRqYbetTbEuv5r8osXTnComibsAEatKfC84q9xzzpduxPwzborHrAcM",
  "key4": "5fHhiEwfS3tFD8Ag4kYTAm2YwkMi26wRLqtzSHrXYpCkfapK3TaVDxpDDhCZAseSmpmyMqR9PnP1TC7KxeaA7cBR",
  "key5": "Fe63JvWvapBm8XXTRqHoGRG5PnD67gqZzLKoxodf5LfTrEb21vkKdKwKnuqXDU92gqhfUmaVhHxomyyfjVhWTUj",
  "key6": "4DqDmUVwAGLcC6UUHsMZohTQr1A4QtXcSAJp5MZbhP1ZGeJMMrzPSURCxT4LiSAF5uToQWywm8JR4wmNtuP2wm7i",
  "key7": "4GbVt5RohEH8mjSSf1BXNRSxcqz5FXMsAiwnJ36dQvFfEbgKnEWQZugC7awh5K7FPczRWaydef4uc6fqEo8XqbY1",
  "key8": "3T8LSmZoWHqSL5uSGzVUxvo7yhWWzw6zAf7U4L6kVsyijCyuUeR8QBBCWWw8PHSMHkxK281Z3FwAH8cJjEARqRXh",
  "key9": "J1jm4tweap8UBUTcPSFy2dB8VQat1bLNufkKxZ7up4nwGS9jbQyDCL8Fws6Zr9dFfyrPfewEmqbT3NVLBeUPMbE",
  "key10": "4ZGg63jPsh4pB8x86EKRabk9g15wqcjGqRNA2HGb2athe8my26CfDMBedH4kcUu5PwRYhaTkhhWr9c3vPDQhVNcX",
  "key11": "Y5oZxxziNUD2JN3DwcBocP8agvEdbW3sdoZo28oJRNdMAkNwe1yDaUsgbUG6PgPfNEsanJF2g8D7QHgMm1FrxJW",
  "key12": "4yvhE54fW2sb5ciotgLgFTwkib4fdMZhB9eEhZybRYDRTWP92ipE19PXGR9iUQaTgjFB2kaweVhyZ28ChAc9f4WZ",
  "key13": "3mP4ZtCFLAREt2MHn1Uw6G3JtzKdS9g661PVRfmtaq7wWxg3XeCdGoayPzHNsQ5ptuJKAoSGPmdjT7EEuKsMNrF6",
  "key14": "WYWBvYy3H1CEmrgbEBKwwXKgtzyCnTdWxRWy9E1vRJXNFXGJXg1nvBJwQBq5MwPU6Nb89ppVKLfKp6BPY24uHms",
  "key15": "3QjcQgagkZqgybgEwHpJus5HRyLHB8zKVRrpQoLymoACjCAYnz7Xyjwytju4yJL71qDg1BdyKo3fdQbEfD2RGvpQ",
  "key16": "449A1MMGVYAx7bVb3d13fSBy1dVNLNc6Ho9XBF8M1LyP2WQGKrFn46bfmZUqPZZNtvEwu78xfT2m36MvKQBVftAS",
  "key17": "Y1z72DNHiSXgbGVYVyyLdZJ9tazvMRYzfGQjScDP8Heb6h78QemftMWHW6qJvkiHxhJoNDmxTuqa6hSMFcEupUw",
  "key18": "4h75XiVaNKpfbsibvWPuKJhzEKcqfcihKD9CgZqwoCszNQWwPQycZPLXa6ieHaH9TEMdcsitm1w1B6yAy9cAHehP",
  "key19": "23raMUozpBu9ftdiH82wGxbPTSmh1q8Q4k7mDXqdnj7oU3XqfyruCXvnxvEYS7SfGbvMsbL5TPVoQUjvXhUDwKHR",
  "key20": "34xMtz6uhdyVYQttSCbeKJeJRPcyYF9Lw2FWJYTW2sx2W3QygH2tw4fPiX7kWUJioFsAJMHxhZ7oDXGonpfWrKne",
  "key21": "56mgTyEhDNBf6yTq2Hzgguqox9YafEMJDT6eFn3km4QorM2n3mZaqw25i13qfRbLanwnaVJZNzK3KyDrxowEVA5n",
  "key22": "4y5ZnUwgZcv2jwpxKRNkWQd19fxXKFBS6vyb5R2gHg1bX2Zn9TgB47b1kZfrTeTST4MRd4R1n6QB58WXgFKKf4Qd",
  "key23": "2vKXh4pg1WFtwpDVJG7yjoEAaYky2XFuocGo4tYJgAQNjJ3pk9oc1uVcC9k4BrHatNZ8pUCxqx2Vp5kUeyVRJ3MA",
  "key24": "3ZFn4r8YmXzNCMk3nw7LJfVF2Q2n9Mr5cvvyuDPZ4grMCANKcrdef14mWLJons9P73uRm9zgbVrtvPyyzuRRCE1g",
  "key25": "65tdCqDELcZS6gdqbDxoYL8cP2xySxBcRHZcdBKug9ycvvYUd1Fy7knW3DPCE2YLAXemZQ6A5XyPV3EfN286ufZp",
  "key26": "2E3NuWtgUgmKZrDB4Hu1WhaYft5BYtg4G8mzn2NmAdgB7DJQp2edw4CAAwx6TPJY3xQn3AkGQevDpD4H5wJWU3Ug",
  "key27": "4GPGrxEUbaV8zYLU1W9EdnKVt93UYMnz4B4qUrYUVEccuue35GquC8mBrEzAbeZ72VCofwftEVf8wny5KHhhGonv",
  "key28": "2srdpFnwrXn6bvae66YqDRUXbiLVfqf1VzRCiKJU942dfWiLef63SsRM2wqGztoL8o4LYZPQ3wBhoZTzwZ9qDbhz",
  "key29": "4qZq8raHxQ9nGxa5gz1HEereeAtD9Lxx1MwzBjyBeEdJ3sT2te1NwyCJKR51xtq1bPnCNUnKw7tktFJZ4ZVgK9h2",
  "key30": "4PHkwGFyRCyUwBHXHztt8voXjfkz7DrRKfEi4dtRpoGxfqXPw2vPu7eS6uCPtvV4gjmKsduWMeq3xjnQmKb9kH6u",
  "key31": "4J3H7PxAj8KEcxtpmFbAdF7HWAwFVNU8Y6i2DKZWHZnisAmo7dCibtvdy3ahjwQ86ySmbjYatWUEZwWnFM9hrWwS",
  "key32": "5PZf62788m6CZRS5fe1bfrEToZgJqw9FVGsEdAgKiw49HsSKFi2Wuo795nZzMD9Lr6j3pd1YEphd8KPNYhgFswUS"
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
