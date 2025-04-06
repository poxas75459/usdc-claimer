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
    "3QFP7A6vs1d8hygojY9SbqSxdRavgQdCJeos8sTbegUqDeD73x1erfJpuvUaQGLartAYtGJ71T7ca9KBXitZtbL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZvhmM8BXjNzqA2m1StZZAx3Bx9bj5AddZQjjUSSXtvrJJGsMN6zV3fiPveS3z62So8PjaqE11TZCYLcobtkQxqj",
  "key1": "49Rmgs8Qexj4HAKGYwvTbgJBX4UMmA7MJg4zasWuViABuFgTS6VmzntToj4Uo8dQbzCvPHpsqErKkxvf9q43S6K7",
  "key2": "3BF7xqMVjqngubJv8Qpw7CmpzPyuNRDfcLEEbkMWk1BTetzbHGvSX9GDuH9idebQtZS2ivxfYJaKNPen6GnN3UY4",
  "key3": "5ZwMnFQCbMKZ87LGsve8DzASbfo3wxpGNuEAd1XUz4LsGqJfbX1FkqakMBgEcWLpuH3XaYAAdUWN1cLfjBSyiYvQ",
  "key4": "3a59cMzXGpvieK5hSzHL7rEDHLVh5B7byq2ZeTG7PQQZQRyeTdH7adMswwUYSLfgF7uvczQ1ywVutVHiiFEdMJaf",
  "key5": "596BRR7ZySqXk6RgXHXUb4pmEEaF4BnqbrY6xRf48LTxL6Q2wBFCDuTZJkKEQbfusupoK6HNUVayhvhaabXSSTCJ",
  "key6": "3Jt5JUtgGwMZiWfZtktFfYYwApz5mNZ5kf6qaYhTMX8rkxcT4ZLpmoDEZxSB9UfJqso7NcNANphEM8gAjKWuvpVP",
  "key7": "28nRn3UVzhGcEafV9a2QwZwTDMtukqkq7SVvBGpMrkzUAaE7743gVfrNH3vuwXdtjhxqX7xDP8jf9VJDHEyyD64K",
  "key8": "31gde1RYC9bwX8crcpo533MzZR8jXSaARqFHdj9aXMuLvASHDtBkgUwY9QkDoWX96tX8Jh2hip2UfwW1zVhcXy6y",
  "key9": "3tH4fdtoTa2hX1ZSV3H67ferYLEyKMsz1XfP745E5dAJExjJShPPqBhv4mCBQyg32Evv5djLhGA7TWKY6EPp7jRc",
  "key10": "4iS91QTKyWqDGfwPSK7WZX82GLM662deedCK3GcDTgUTyoq4rRgyxzut1p7AyhJbRfJVT9yntrG3A3ABb4X57ukH",
  "key11": "2F9Q5tDnxmpUdE6H7zALxfvGU9r7c6pa6Xcna9ERTAZcwfUc6WsWN3GuvsjS6CkgRAk6a4225D6H6YH6k5j34ybF",
  "key12": "tqpMepkvuyHEM6pH5KEZQFKJbcjcUoAe4Hre3bXTS9w3aebrX3LsTfEW3JY9KJGp38KwGTNJLXK7JwVsPLcTyhH",
  "key13": "52mecMmjfHGJtxWTF67NqRDPx7Frc9tfhcoKKY914pZs8SzMGCa7aqRJ73PRsU7cSNBbyKs9AAcyQV9s4XXbub2h",
  "key14": "5AqWtKBtL5NUUPx47MNjhFHMAoYsnfgknkskhp5zTnDZxRcnaUEuHZi5qvrds8jqRTda6jzGYkZmBB1UFoM7Rfk9",
  "key15": "GfYGuF11HitSV8a3j88HmRiyKij3RGfNbFrDywZvAAex5vacyUMTXSukVWpNmb8JsZaGH2Q6mQnFrfTvZBWNytd",
  "key16": "3TVXdzHNmkSLvrgZCXhViGDCwm2LmgeLbuyPvm8frHMeVyRv88ppUpFubbCmMbmrCQ1nY6PHtcsmH4L4YQyj61oo",
  "key17": "219AoWZP7L3uUqTmKjNuxBcuc4Nayg7pveyCGXqV9Re96GW9h5F84vd72oAaEcg6Ww4VnJ7TbibG9M9pKZPggMWt",
  "key18": "TXbf3XRUUw2WNo2iZgEpxto6PwXr1saJTCD8WD5PzdJd9sdDpPYPqS39arZqDq2LcJLADr2F6fhtM6jsBaWesAP",
  "key19": "4ooGHdJP8j5ymUAmNre2UjfKY2Nu8j1Meuxd2virsbpumevy5vLqQGGYsXQM4dF6M2cn4ybqEz1GqsuGMciS9rCN",
  "key20": "rXQGwHGLrqMVawTTmQW5pKnTwzrhzDY5ambZsU5zHYmTJbB5ADAZ9YWrcwR1evkQvYMNhztFvrY3gSbJhXeXaJX",
  "key21": "yqcmuzWHHpHsWsCVdLG1uVLuudyYJSDfAUyJPwBBMueycDJY7NxeUvPtaayivcvjHKNcNMARgbxLUEnNMtCczV4",
  "key22": "3cLrf2PTpS9BEgz7Gc5zMSfVZnh6C7jCPELRmiHyJW5JEiDwhp6pwxqG5KE1ReDtceM1UE3J4xQV5yVGF2kDP8v9",
  "key23": "pWmA9kSAe2VGWVvB7N2z1ThUUHBAtKpj68SzUwfzer3M3EKbWE6uwoEhqyAmYgs3ubSbEMZ3mPJWHEWnoVawuvQ",
  "key24": "2bDArhHaHK6r3TjLwGAManH414D1cFHUPKtQBDM2i7JXZgjyog8gCm3SGSJgyPwke2Zk53baGLYFugT24mMPf8wh",
  "key25": "5EvzE147i6n8hc3o5hunXaXiZwQq6UYXdQiQJKbTpUGQbvhTzZJ7PgKen7HrLt7XP4PVawMCGPGGteyoy7p4Aqho",
  "key26": "38UMgYUj2QDEeVeSSWn4rDKdyJKbgCW23FRPbKpk6PSGtxS8qdTSBXfwsec9WAhTcH88jV2f2ZeMnX5a85akfY3W",
  "key27": "5QtJ1mehdrv5TGtvThDMjCzyGEdfMBfA7mnhKkzP85qpwSk1Y3vxHPoScDUYD1tgR3g8daAADxzKQyH2VZe2i9BC",
  "key28": "1vkNRbqr7EzpG4Dp4TdAGNrhSfqk5CjU481xoeCcwbimLUSiMgPiwDHtxqtjWddKDqYYHB4qszA7EbejML4HLRg",
  "key29": "4fnfro8aqHXDspB6DTge5s8JyFdTawStPruTrVvJZt79pkRknuaomXZBGcACRX4mPWYQ34CxiWogAYoKor1zVf2F",
  "key30": "4RHv4dMYDq8gpe2mea7GazuL5sSNqTyfaKiHwmk1SD1ntr5uzje4rgimq2eK8SyYXBAnNSgdgp8TKqVSoob8Phvj",
  "key31": "nZ2g6wwzaCUAtG6hPmdxcW2vy9oR1vvDsxuAtgVJ8AGNzS2SzKreqsfzaRSte1fBH4snAsDy2xa9VNwwqkzC7X6",
  "key32": "55B5aCC1oz5RGh1FHoFQ1teXb2DAZ227zqqW3162HTa7oN77YZ1UEJ6ATE9Sh2mcfGQxX7vppMxgY3YUwV7LiCME",
  "key33": "4oFM4YQqQyKfrPT2FGysqggrPtWp4EN87Z31i2FfJJwZQrJJa2CayKxJfp36z1c7aXA8LdaYufihyDRye9WHaNRH",
  "key34": "4w7TPPeo57wmSWkBQhvQzRVXPnFJVWGu6W8LmLSuFpHxtkdJ49wTaUAVhFq3G6DrNiGQJbMGgsgskytgxMfCPPqt",
  "key35": "4wacm6YDRXWkphm57AvUocmaBTYWuwFf4t7xuHxC1ba9FbjsW4WfUrkwYZg35mLWSXmWcUQqJ7dwuXBeMpybatjz",
  "key36": "5opwryUcmZxDxkcrUJpdNVatMz6GG9b5r8bpec7tRynvnYaKZqymEXseNqYnSEL1TpiszN64n1dHodN4GEoVGTtB",
  "key37": "2prDXePMT15QJ654AgV5zQHkZTtx3EbkXMe8qUTqL2w29sYQzFJn3ttMoTm4RgwrbXHDPtQH7pN3FqsH2KPPPCoY",
  "key38": "5wF36cyd7zr3nLoxrq981FrWuWGs7EE4VDCdzVnLE9JQrgavkFxWSpdyRrsPA1HNwu6hPKnzBVtgsSnzfi8KU6Sm",
  "key39": "3Xg2hzHq9E4CGfZ8P5HTk1pYfHxQ63MSC3e61nQM4EhgUF1e5KMJMPa3aHEFRekU6ZWohhssvDWUcDY3QhxWKFVp",
  "key40": "L7cN1LB8WPNmHhL13wTQfDYce35L2ZpKiLSdxZtZf9z9FFtpkGhMfMPHh2GRErBYeJhLKKRHh9s1Hxss12ss9XV",
  "key41": "2ugEMr797U6txMSZFRbUjoWPX5FpgddYbSPhYM2SfJuKnAvdhpDkxi4q5vHAuWWcz9DVaPZ9yRCcsLy8x3ASsT5U",
  "key42": "8YMbPpbqzUuBQwh5qrTWtdhrdsc76qKiK3k1ouoyvrVYfbvpnXsNQZLqYN9fFyK1mHhJMpNc5RqqA8ZcGQDDBM6",
  "key43": "3MY1jWfF6ExT9VzQPcujzUD1F3GYDmpEejcPGdcwVd5y1emVXnZ8TtUdtNjxDXMXwqdvokQ4qQZvZjVqw2Uatwzy",
  "key44": "2peXHmiBo8h3hsSS8ru3wq2UGa7ojzKrSBoiSQyRp5SZYPijdi5WKU3a87kfh49o7FoTsYjSSjthFXZAXNLaj58C",
  "key45": "2YHDjFQ7rVYjNjGEktSM3YxAHZhxpEQgk5M7dcppppUoqsRTd1CLsydjT4b32Jwrm3UZs3LEXan9aLkpWg3vPfTJ",
  "key46": "575EpASfy31DmHoYfSToBZLXVEEFaY25Tv1bKsLriHYuE72QXp4mxJbdKi3n5XaMiVJmavadKxHYLfA4XTEM9QqG"
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
