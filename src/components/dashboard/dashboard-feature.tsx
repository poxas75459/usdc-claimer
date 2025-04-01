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
    "VQzeBFQobu7EP13zDAp7Hu3r9T4SqmAQRWMXyT91qFzeogVJ77RdFLj7er6G2VfkFpaxv1LRYnwaL9Tx6DQJ8yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXUL7ksAPWRjs496qfrhYK7wpuP5j6CCrno6PYccUKfddSqQ4B4jLaLCWnLGeUeKERUr1epWyRf5rpb2q2NdFzE",
  "key1": "ir6v1QurrHpMHiBKwhP2Lwu2Gusjd4Jz2D9bUvz81p5nEeuhXJDfsd8mL9bU19W8x4opCJMczacEAyh46JQhkfD",
  "key2": "y2wtmkEYNF3fqCNBzY9KrqVQT4yjyg6p7FEQC39ZFcqGWTQFczTrYotkmbaHiBD4YbVFFahPeJGkvHcsh5WSZkZ",
  "key3": "5YNAiD1S8r6snLonfxVKchZp592ocMm75tZEe1aFER5XcPEBvh9iss4pAjwQhkk8eXjG5sGBkJyBrPWPmQe5cQKb",
  "key4": "vNdwPbtYS6Ktj5iBdQ5fi8EmsX5UwuYYuVSAgueF51YM5HhKHHZ4pMC3WZb4dwFkx3i5V8XDSmjJtK7jRNb8tLY",
  "key5": "34i2iLkiztGzNAR1nmvy5iMh57s4s6NRwo1YDupZcbnTCPcyC4CPSYWTEZRiMxqkxhFm3nnYzjCV1yx1VTuPH2BK",
  "key6": "4VpBDgawrZj3RnPdAPhPASzmZYhWP1GXDb2PhmJ5oi2JpswuJUUxaceyZnsSHE59kbmGZvnvK5UEnjvzTb8bb8Gq",
  "key7": "2XWpCnZ3kHRXqfjqDaBdLg1PnSk2DXKTkUAxABjDTL3zfyQ3f3GsXTbp8Wy4LYbts9qwJkRf3M2DN9tzqXzNjm8c",
  "key8": "3gD7JNNE3DuugfCQj384Q64x73q8HrGMaqpx1P8JYtAkwV8QQQTq7FMPvS7jXh875KUnVp15MrA2s6xitcaTHr7",
  "key9": "3AktxF43ZghtjKanwjCktfj6f7XicXoazQbQQaLYgoRSQ2pvDkx4GTVd1KvgYJfxCT5DTMsrn5GMKBaDYMjdfRHL",
  "key10": "3GxjTadgBzXS26UA3j9x9rQRahCAE1qSYYHHLSjwDX2azLkAyjTjM7qTcPZf3ET2QJx3FYXcUa3fXKWNqXUduo8V",
  "key11": "2LjtACtoYE2UhQLh3T5ymTuegfoZXSzt5rY1KZtfGpsn1dmPJzKccVbWBsF6GLBF9T48gPDk7NmiM1XaCd9DUh7e",
  "key12": "3r8NCqv35MqDxL5Hp1rwaBvQyxdjNo89sixrLqXpiH9SYuiKVFQBGrPuwTA8EBdNkm6yoYaStGauMv3noug5dzkb",
  "key13": "2UtWefanru6GUnvq18qbYJjZi2wRmbCqtuYGsWHvDLfDZK7c8hfCWdnHpyJvUG9BXv9jyTn17vaeZqNzZS9UiZnC",
  "key14": "522UDyW5EKbHYhGbBqxc9Ef1BZ2d5UxdfRfWiofZUUMBHDhZ9MgRJ45VvFJV1QdVYJZhYtwmBZceKkiF9ewcxHJQ",
  "key15": "4zkRemz1nj8cExD586VjRFZXZBfC1iaimDihfLZYfCoq7rSfT1WDmRCWofYjMMiTtX8MuXyw3eRSp2Lt9YZD6PKu",
  "key16": "5K9Mv3iiFt5n3zxHB19scPKT9T3rEjhMAMgGBwKQBSMLsPykqqL4vijhgCBtAjuCgLdtcMSYDzJ9h2R7BqRS6Uh9",
  "key17": "39kMBCYb8w8SfsQV6cPa9KFa2oa1jqpj9WEEkppynH99yKSJrX94Xp54TCNtp8FMhQdpQiJDgAD8bX7599ycW9zx",
  "key18": "5xNxWpwhfgMzHMKNAe52Q6674VwNFTsiq2caGYiAWu2Used7Uc1ZXZigdCDfeQg7yDNB1ni1P4je9biw9MdMjtL9",
  "key19": "2uq8yGjufAjNPiTZkPbu23vPpYH7ynYyzsPkpL8Z7oc3kBAVDfyakHhgoA5dAVDeENGYewzcMUxvc1qgVjXsyDx5",
  "key20": "2MZnofPz2dKgMuygZFZiupMESSCRcfMXXNXCT1gpAsVvhB6jaqAqd4S3S4DJeZpYW9vYFFau9uAj8HCcepXrRrQF",
  "key21": "5jmLVtYDd5A9tp98NTnEMhZAQcT7tZCPD7SLRSXyY2nGVwxKqXPvK9aexEUuf8EdGccUdNoPBZZDrVEGpnqTMDS9",
  "key22": "Kp8QtLPiMtqSfPxaFHMuVQxNK5uGmp5B7YyDeC7WLRcunQfCLpGXSoWG2uc3n3HpW1xtnPqraP2XBfCDpdw8237",
  "key23": "5q7X6sMXvLDr8hWnxu8wRsETWdm8qaEuePVJFrsURmSrGqKQgeALHfFnKDU8wGRgqfnXSvEpoUVTnrjtkX3eFNiA",
  "key24": "znn33G3kKn5D4BwTyxDmcDh4RBqg9RqipAUtcBctQEiftTpx9Aa443wEwWCJNAk4GxGqcxVxqug8HDLKPtAUaoS",
  "key25": "3NqmydX98eAhGS7excpW1wQX8XG8waHmPmMGeecQN8p3sNUrsAQeCgnbakHHo8YVCaiBaqnqHpEhVXgPctpe2Nn9",
  "key26": "4RHxGELkKchPBoNk3tqdnH6jRCXjBLXnnDFdNHgEr6ST3EsN8psJME5cMf53tMPwkyCYV7vAkUVYQB7APAnwU8pG",
  "key27": "2KejLY8uB1EPqNVwEZHZmNTBqQ6nREYURV4FiPadsvf1rwJNhZ3iHVd97ZKt4Ws8x3Ex6FFK7joG2y4eCkzhoyDp",
  "key28": "2Hqs2BpaB4uYCjErWu4Dm4pbnWgyZReU999EyEN65D4yfCFetSs2h7mXgX8YrjkbdDopNGPA87BNxGPPWFhnysn6",
  "key29": "3Kmqpshyg8SAawkt3uDYipoxNkSwbFGtUMo3XEqrsRhmJc6fPvszN3FBqtdxogioNB2QCt4Jwu1iygdZWatZ21MC",
  "key30": "476AqkwK1C5zKxMC34t2wRANVpVAkEecG4tYLzRtgT7NDLsjstdimv4iQHNigiWHumgb5nzC7QXvRE8NheLW6Ktj",
  "key31": "493AA4DYdqNTMSGVDyghpPEiLuo3rby8JxNeUFKfm1QQhJkNkjLC8F1tpNpwVh94eMUgGP9w6u7QhMtRdtXGDgRb",
  "key32": "HjMcKuUygeJQfj7JURnD3DNx9thc7AW6pVVWBaGK6SfFSjAiFaXbJVmu9XLjEWtxNknGW9bGp8LpbU1o29LPPAh",
  "key33": "55KBsiSrcHHzqWou5S1TJgfcZWTmTpREBhFcAhFr9iNkZDbe8u9P86gqNxG8GWcwJN1tvbCmc5yUvDr4BxLEcbA7",
  "key34": "4UXhkiCNX3WTqcaMxXRkU8zmpkfdMGkzp3Zfv9z4NtMYEdKkVtPMQ27AnCzLmz1F7LNxLNQkiKj8VTv4hARrHA3c",
  "key35": "4X9DBohavMhwv5e8AY5vdbG57QQwkxy79hgeAm8ewyvxzddpztJUWZVEDbHmCovHF8Tdd3BDAJZBA6vEKhxHqqij",
  "key36": "4vdWmMTPhKdcZQk6zXjeY4G8EF7bcFa38PeBCjqjgjAMgYmZFF3cvYferGcFApPMtkJsz58rDie2nRxXmRsDYbJ1",
  "key37": "8DumQbHxtTHA3Khuhtsa3JwYfaWS8SJ6K83aGJDMVuEoARmLoY8kfr8iDBfXLsAE2NtFaVPePywdh4GVWesC8b3",
  "key38": "oazqsJ3VVYyjRDyNT7kt1AZo5Qmeyhhs5tE1gT2YFwgmK8ChUEL7edW2LHRfhuVSD55ZtuZS9FjYJ2foGrkF9f6",
  "key39": "5uLtrsCAojFpmGXHZWRE8EKnDcY311cE1G4bFx7RgossrgfWWtDmnT7958xwKL31XDDjayHSqrHq1PiGwwLoVLPD",
  "key40": "MMkvYhUDWmzC2jHj6Hruh3jV2UDGwGHaHM2NdcoDP2kx9EtXs45EYyeVCoYoySfw64A6vRtbzfA4DUGxyywYmez",
  "key41": "uGe5bss8iUByqunYtvXVp5aKbAbYvdHphNRy2E6Zq8zdnwKnnuaz8hxNRiDj3sK6LjZmt4HGRwxXh4fpfC8g2L9",
  "key42": "hMYZ8tVD1s9qbj26AMb5xtjqjk1pCZGR9d6GJgpWYrvhkL3VNTAM44c3MjBx4kP2y5PSY1QAvRgJNzWjJHoHirf",
  "key43": "2UZNGUgfNebm2n8EnovmiJoc9174jqmX6kzqXzSLjfD89nx95ubDKySmZCC6Z7veuPvLJv61LJetcfKPQbUD199E",
  "key44": "2qN7jngfj9XdRMnJgoWShUuFrfA9npgpCwhfSetN2tKQfZHhnr177tLT7kdGwXPXwhTWfLaNSEkyrk262YES3jnF",
  "key45": "4Ga2oNLwEJFSp1EWPFQ2LYLUnMDjuzk4CvNupTeRxcvGsncRtzykLuSF7ZHfYEStMC1MciacHsZxHxCRucSey3vW"
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
