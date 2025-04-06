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
    "28RJhAmNrUTDi6zMTn9kJYBLaijZrsgZRDU7yUuWP3Qfe3RYqFptoGJV9jdKagBwjoTnTtPY6UmybnuEbAxCp5Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r77fR9o42HsdttzY4Nj1BpS8B7aUeMhogvrnFjiZHT5MmNYHV9jeSGA6KpHuquNHjFpy2xeygaiX8PLaXzThwDt",
  "key1": "4e958cDU25nuozA7tT3dszshMtzbQYzmw7BZ1CTicQLfp3PkTdbrKnhCwjFoTVxJtytV5o7sHqDps6mDnvQwXKPC",
  "key2": "5YPdv4yJbDXoQmsuK1NXNkZEUAbFGyRxooDCyzZYY4eTNXbBRPRoUY5353VUguFexAgkfbLVYGD1djUu46kM1GZw",
  "key3": "3ZMEyYfpQFSYb95D6uZQqyUvMuxE42H89iNQMBuZ5PdYWMqsBHsmeR3poXh2t3D1nB2smKkRi1aPDHRyxDBmwzvH",
  "key4": "5rQhDmqq4RS9ype1vcAoHjyLZFxNGKYSdPSqYC6MxhjM5LxP4y3GYg2cksi9tj6PWSu6rdXJyZpiJLZ4ZfNtpZJv",
  "key5": "zKuvJHuZoQ9bYivNteeZr5jvcxxtXi29ZEhwJaiCcq6kvUB5AFALzu77HUwAGxWFLRYAtZiNZqcbWYHuXnahaPG",
  "key6": "5yDEB2wWcdXCZzcmTvGn6QQLbRj4Vyywtd8YWm8gTuhsU2gGBirKx36XY1VXyFLeMxVX9AA77b447TJrPdRtXDnt",
  "key7": "3NJt5jQvWR1XVhjzKwBEy1cSPBgsbWNoZFoBTHZzsZB9xrUTesneHY1VqZHYSn49KD3fBVgEmZ8LWSepSq8R9LtK",
  "key8": "3rXYeCXbSW9fuwbnuwUHBnNJyHst7SYPawFEfQEDVmmtrBRjPSHSHFQS5rjv6ZCqpHDiZFpY9m3uwS9NyjPCCZ21",
  "key9": "XQowJDwiBpFN13Fc3Vqzzn9M5ConzP3xH54DSq4V4WeCPP1gY1BZJnKkwoAva3GAnqubGfp2nftPNrB3dfR2wiG",
  "key10": "4F3Tr2BCxdUJj7F1zrHaawL4RbU4YkfzT3Y4vdS82YaumqLAd92JTganfDG6DqBfWnJeTKt5tLT9w8xfiFynwm6J",
  "key11": "4fGyPqpCK5uYzLWAZqz8WVkPn2UKa6kZF3cEsgxxKiwhpw3onwPLoQkNqrgpBUVmuDV4pF87e6HLsxFJuL3MQLKp",
  "key12": "4Ug79QJeNwemZBsDPbrXimksd8VGseh4ctpLLwxcKRGyTH1NXAd4DxQxVFA9U9sZDKTBp36CWC1URYezZ6HZExSN",
  "key13": "j5MKQuCTnACUiSQAMLqSTaHiJUXfx4jvrkS7Nv4P4AMM8TWYQeiJuyn5jeL5hjKdhpbub31sFqwix6gEG3uksUx",
  "key14": "4peNe5Mf6xW7YUPEdHD7pWKWJQhr8sKkEo4uHU4gn17QactffbRsCcS4XjK4hUpJwohxjqvHRxZfPSrDFpSWUyiK",
  "key15": "2z9Uqvhxok7KG6MEk9jCeFzrRgRqPaHgc4hkhQntuAUZMbih2on698tx1ch2XRj8vdQMyeQ4gr7WuD4Vg5gj7jkR",
  "key16": "3CqJj88RqhJ1gqGAAxLZUXiZeb2cf7M82rbbcPhTNbH3SH85dskrAYpWybMsJTYHN98E4bNtJwDajibxHG9g1Mot",
  "key17": "JiSqZ7VA3pg45vpUynY1ZJ3VAmPKJzKg1brJBaHCFavsVRx15QjdoyXoNbS2NmDQmNdWBupmRvkMKw6UAXphfzc",
  "key18": "4wxXkcPukE8Db5ZSu5kQuskuphcKHSg6YGEGvXqFc2m4m2fN6Reqv3NYUENoQ8goifvoaMA31cWkNfvF9q6BbQtw",
  "key19": "3QRTEzA6NBvrPirnYcQfFmbKmBNVkMVrPerGo93DEAviXTmosUcpnumXH2GBnDVwzHmeDSEfHfYjzL2wqXDH4dPj",
  "key20": "2LmUi55s4swBjb3NGqnG6WSXEYuygWxinq5bz71xELuwqkLt5XZQBhCZUxAh67SryfNeXkhP94N2HqJgragvqixj",
  "key21": "SWokqUWgZTEhyjrXboDna8iSSMgbJd5vfCPtmiv3M5gcgUmZXy5LfzvxsXHTVmFY6yLWGmFmnfWk8N4CcRckDy9",
  "key22": "5523DXP2jAMhzkSnDkBotKPX3Bcf5dapXmoQ42zunUnhwgqTSYp7yroJWCKiogUmkqY4pt3e4EQXpuMDAeeDfCet",
  "key23": "8qWX5BRQMc1QtaVLphLCFGeBbUxZksVsSN64U1YUUy7SDpoXkJzvZvtsh3eCr36MpkKn4mdzfr51Affjtb27PA4",
  "key24": "32z9BtVuAsQXsQEH2aeMRabd6Z4tSjhmchvHxnVK1bU45vGWXdnzbvB1hkPyacotZHaYeCkCj4LgZZPJFuS7Hrvx",
  "key25": "53zznXZ7unC1MfZ6FfCKt9Nb1nnXLwsH4kZ2tAHjKChBj174PZmvJCthaqRCKjdMFJ4c2GA87pbkS6BPSUUms2zu",
  "key26": "2srN1gXmaggvqxpuEaGLs3wjHWKZnc5WgF2Z5Htxyqyc7Cr225MZLABJWSpGQEqZFUFmBCYRqLCQV4MjTugvRwRj",
  "key27": "5NgR6D9bPBW5ePkR5roEj8wTtqCxK19Ga49QtcsrNxeDbEA9eq1BDMRrKe9E65CBTmJwR6keF5TeJH11i34vzbZq",
  "key28": "3bAqgUStVadAhWnMReXNwM4jAY3JodkPzLQjfnii4QqoE9rGzCtRJ7p9KKd5Sp74SFnPMVCcteemX1bTXzbUSz9h",
  "key29": "osam9hX3ZzivDdWHKibtJE7xUa27ahCpASxpZzUjChJHy9MhBGXhqEVG7UADbQL1GrbS3Zeke8ZrkYpX1UBztuy",
  "key30": "2MqMKxhfYRh1ywNoN7RXdJ5sWUeNX2qkgGMSAqs661cFczYZBScuXuNC6NX7j2rStRm3SopvK5u2ybYBwpU7Chy4",
  "key31": "3YFpDLHYwFhGnP8Jfbkm3uWm9RUNPD45iZJm4qy3FVUThDSVQ6BVXmDyH8HT5cBjdi7Gs9uekpFtdbKyirFneL65",
  "key32": "3vBqdc2LXQf6QiXX2kTMkNYbaNEeDehq33Nx4jwfCKKrfpHT7UhZNQmBEB3ddbbUfyG84mrCjFhQGxRLS42M7gFM",
  "key33": "45SRf3AArYZv63xs6ZvuUKHuyt3GViw9338nF2Bcmyr3SUAmHEeAhqvqXKQQfriiHHtU7oB9BmBKsYDWjXdreoCp",
  "key34": "5toqufeGBhQ8eeXm9rhyk15Djd9oiMZPUuxTVFgpAySjcJnY5NusQQqHQCsFuNGBJtuUtuH3uZ3AhVvCNQLNUCVj",
  "key35": "4A8d8QUmmzHFqKyLtTqouqdiGWZS6iRDPoFmyStr8d9Qo2FJZyebFUWkZgzqxn9YUBYoYbJLys6rFrti1XUxc2my",
  "key36": "5XJECN9dqgLyKVwsjYkcAaQn9yWUdRUYuoezLVJF34WUgJzaBCZYdgokBLYxNiCwjFsnTWWxkHsma2kJvFdiuvBa",
  "key37": "4TrPUnj73peMKWnRsom8zYbhcTMDUs54XhCBuX4vmxAUs5g7t9Q6sVnyboWnqmDmQZN5pUjbmQdE7okfGhg2KMaF",
  "key38": "2Yci8A3XpQBAEfn3z4UgT1QA7QNnM6tYWqgKxfUuXotGiPW42NpFzTnQkVUuG5CNggTaSMnsUMptGTeJNCTSyd7u",
  "key39": "459rFCpYTSgJRXuDdwRRip6ksCKn9NhgfDRGrqe5cSWESNLzXmHwHb6R5NCwvVeET4y5KpFMWoo7feGccLT8aFwJ",
  "key40": "37SXkQ5WHZ71tXZJjMV4H9jPx4mtpWcjZ2Dq8gswMS7DrNMzuwJzkNoKkuLpVdVgTgMCUpX49vxnDFgzFEUM4iXt",
  "key41": "5x5sSs4XWXkouKXWDNRRCmub9uZ1noC9axw8zhdd4trErKFN7Y8UByQRwakLH5wHTYopNEFeM2wCTdpZKCLpwFDp",
  "key42": "gc8VZ3hSpTuq7bBkLNT3Y5yCe4FDv3DfFrUvRVMYELRnVa1SmbZfQey9aiAURLGikbCx7WcvGLL6BdMEBUEoBBX",
  "key43": "4eAa5r7zWo5QW9MTU6q9BxuGmX6rVp8HdBCTxuGxHtX777AMRX17GyyX2FUr85HVqZZxdVCp69um5pu88dYp4Une",
  "key44": "5nFLgat1k2vZa2tQ5Tz5NAhbMtfybiTfTvr5GVG9KmxCTmHDUNffcGgC3Gg2LUnY6NCdY4XZxwttkn6jh9DcNYpo",
  "key45": "5vzQRWTzFVca726zBAeLYDMJVpgS6XPAVtQsPvW1J7unXKrLAG4uhGimfCWxS6iBkM3ocCKPNYkFoGFqPmkSDQnh",
  "key46": "GXQqJASrKvTEuA9o9KQcUWRDiaeurEp25vgSijzJx6ZsoRWNmWsS9P6EPZoSN6bo2fEit1NXG15H7vZ5ZxBPf97",
  "key47": "5gm63byq9XJ1mXUSYfHxpQ8aCEZBBMwtjRXWBvMQw2LJzn5J9UjLhj4fcAX4asAFAwm52bJbCbrEX4B9dEb4YCZo"
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
