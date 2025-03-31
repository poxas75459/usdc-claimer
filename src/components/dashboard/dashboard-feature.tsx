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
    "29HMNKEbguS2VRSCPzxkmi68qdgUAGfWmBkEv1KnNbV5Z3YUDPH9hZ51yQP9GuWibpCgRmefDEpb38i34kcD3aGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27uQzR6vikohejopNrVaJZFKaeDWRt7DLnB8hWGmihdtbqfmrNVM1tvH2Umpv9g3aMKi5v3t3z47tMXLdfgVD8Wt",
  "key1": "4K2nYsBrjzEgBEYLw8Q1oDxjkEZ4XY7rxsdKrv1BisKKwPP5qiF3kyK18BwZmHaSxWvErsdspubCgESYZAW5o7em",
  "key2": "5cbwqeoHNT6sXpX1WZk63GdwaUEuhEZhfERR92xTjBQcRXutNGeD2Lx8knYWANQQJb7zz4hwxFKGBwV4cd9ghuuc",
  "key3": "21YRbs6JTHVdpwBPmWaTsamwV5rFk3Dx3D2gN9xyzhRm1jwmezSe1BbJgBeHXAgESE5W9UWPWTP59bCQTzp8ea1Q",
  "key4": "4RiddiG9jyePKBgVRtvsNiJ7rL2Gsu1aXm2j65yFE1apLpR1tGYGSaMiSg3HpWBKThTBHRV6Z35iLpXgn9jguPbv",
  "key5": "4UibmpBtK6Y3QQ74evxznBKojW8h8ZyTwY8vSoNUx5SyEAJRk6W6CHjxYjKEvxhk5KHgqMAn3iq2hAYUeixX8K6H",
  "key6": "4Pwur68rC5EqjF9civafRoWxWhkx8d88Wpp9VtDmuQ4QfX7coUkmUppX6FwvANNJPcwxkCbhoTNDRk5ftTZ3iWCS",
  "key7": "4F7yAkgJXzR8v2FfQfxQxvdEq347bnN22XQvkbAAaqLchZwGN1T89Np83MM1JWkJ7AHWsU2wULmgHL7HbabYHm5M",
  "key8": "9gg6WxyRyDq3cBqWa6pbvjpMxw2x5S2RUr2waRvmVxrLoKuenkS4YFwsVwZxhrFfx9SwkPS57Qrr1gb8m74U7a2",
  "key9": "2Bvhm9fZ5qqPV11sCKaGdveSVtnz869Fv5A7xLzmpExpY3LShBiX4DJWTZHUisjC9rrPpSxccWHU4GdyAFn9H2vp",
  "key10": "7zrWP8zjUaEL4X7VF64JpV4TMDFrpQ4nTUKSPCyickD34WWFBv7rsMK16yFDLitdrqLjFthufrvUW4DxknqptxJ",
  "key11": "41hzhvzmJQ8DxVF3a1fdcZaNPwwYNMhzxEPnJxh7T4um2BwY91jXqbMKVYRucYn9evi6Uh2oNWrSU4eFBVBbGJSH",
  "key12": "2DcEA6eYDfWcWZc21oZyYquvhmcPNrEifuCPcoHF2o3VU9VtPVg7Fg5K5MQbSyhQBAREzEfGPKvG98YdUkiGQHxC",
  "key13": "3TeFa8UrLtYj1mihLicp6Sh6kHHvAG58yVwC1Yc7t9MW2qEk42F6KFp8WsKhN91fuyGdiaBf7rqju9FVxJQ1UV7j",
  "key14": "5hPGX7PdM2MZaXWpwsUXGFCqq9MkafzSjxbxscwEjbLdhEAC5Suoeo8W8gTsDYgfk13Ky18zAGwQJRNhKwT6NnqU",
  "key15": "61mnhc2mp3dMckQBm2NUD4rVSawGj3ZU4PvizPHwEMRtkrpG8mLcTuTk261NHSRA9Wq6xWrYgaNrMi5UBGecVXMB",
  "key16": "2Y1vMYGBjecdiYwksYkAaNXya3ZgfyixLbgAYbpGaSyZsh9vUiDktY7XV6mt9DZ1PSdBAWpnApaTBjGmY9oLAyb2",
  "key17": "4KoJgovHrJoSyhbjX1tvV5RCqgVVScUyazfaL2NUZKjvVfezM8reXk8UB29JP6umLwPmm4wCPfynjBTFPjQ7erxj",
  "key18": "2ctPhvznLx24VhjZPcVSZYbw8ENHMpciWvN1FP6oUdeFwVA418tf3VRoCD55zbgkuxCAnWFkFFFymxwBULSojfcf",
  "key19": "5dhrjss5sH137r73NNAxSNA2Jcp8nxK2eWoQXsHcCLVBtZ3HmQtXj2SW2YSaVAE79hjh1ScFGRxXSj9zzBnJqGNW",
  "key20": "4SFAPh1PkAN6vCJ1dBU3K6RRBQQHVLwVtRhZr4YcbcqpLz71E68njvoTMScZPjVGjpjA2TUUPe8n6g7xcQM3MqXh",
  "key21": "49iqaTQYWiJct2XUsJ42Kjf8XXybuu83YH5eHvuviMBqGm1XJSkcVHPrMG6tz7QbMjVbBhR371RU1rJKA712kwke",
  "key22": "4uR9ysQDNRpMNhLg4bKDhhjuhPRxXtyXm5BYA583kHU5AUr3A7CJptznsudzCrhh1A48JVaB5esi6W4XHEhQ9TXr",
  "key23": "5Vr51mHs9g2JdRXJrrpiEakkd5zaKXgkvC4eLrjE2yVHdWuX9Z5p8UJMDY2bE6rnhzXrnVmnwwX4RvhkCwCAVoC1",
  "key24": "5hkLpfTqtBjAsHdNTCGU28Aq6hmG22h9cuiGn9aAdVmNbGMZg39PD8MC5YzA3hmgc9L5Xw8KqtaTvxZegtAfaERS",
  "key25": "3uLSRz1jcrhNoGCTtgNiVnRSvRdQ4bZecDJH7dSahyapBKmwbFvb7wXjYkiixQRTjBTm97N3kEmPVLQU3ncShBvE",
  "key26": "2JfTf1BBYMQiXdXG8UDmFjA7LF5UKC9Y49McpNWtc3xUxBNU7bmnTqH5TkTeXM3A5k9pFKsAHor2VUraHWDWmziQ",
  "key27": "5WgVxaWNrCaCdPjRbYMbWgYjz55tMRk6MMpMTnZ4AjbsXijJVB1d5zce6JmDfPPoHYuYsMc4wZLyNn1jCC9n68of",
  "key28": "4YTgnCcK5N4w8VozgVuRKABPHbpsV8H22j22ksbnyxnPq9VEsGeS3U91AA9SpPkrsNNy39QraSkMbVYSaJnNWfox",
  "key29": "3yViHXWWSuX3wBUTngQW5gZ1cC1M9ZPsTw9UFENNnmPN3Be7PgmXpUEPnhtSGMwTzy4JjMawb1vZZAhPih6ywVqU"
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
