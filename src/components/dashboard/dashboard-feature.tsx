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
    "rc2cUJVjwGCRbGTSWAomJxbfAK3ZZRfJjN6V4gUVF9ztK9Bko9qB8E1DYYzk3FfWBXWYyBB1t4ttkeLCGKsZpDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCjD4iMuvuywGSbsjfrvkoHEXh9c8c6tuJ9RoMPuQJSCnUM1MnrVrgJwpDycVbGWUr9Rz861muYwuoPLXmH32Vm",
  "key1": "8YAmn9zaue6y1ZyPo5icmcP6gsk9rGs8pksiT3rnMfXedERdRGzzFeyFVA8taa6mEdoFAeWJo6gGMK9HwXHegQC",
  "key2": "4k2CBip7oiikoV99a5tRuw86sZT4ASvT7QdnVyQ33D7oJ5AM8J5c5pRejg5x3wmH51bpfF2vVQGbG2YHDmpua3en",
  "key3": "4wvbLW8QuUrtj23T3QkwHkuwLskpaLcLQn8xn2LuSBqD8DU9YscAvbei3swTAeZWk2ScP669JyFwnUTnvPwYsA6d",
  "key4": "4MfvDKodGQwt9PCgfwWMgJG17USsEPMYJmGuUc1CBULsPT6zJtA2oux5nsfqqiGZo2hqGvMPTJEwPdkYov8CFodP",
  "key5": "4nNFE1b8rwasLj5DxM3jCaffiY3ixcNRWMTGL87rdY97motvqigTeeUYpckr7NcjXj4i54hQ5XC2UXoxiyzQURVg",
  "key6": "tmCoeWioYWPvTeaZQ9dE5rPyrRpRoz7Y1SxbHS4BfxRZD44ggHk1VWpTF8ABA4jVQVki4ybaxd8vMuuLKAZzEop",
  "key7": "3QjRu2GNzxGxjQAkoT91Y8k7ZQszYej7MmrRnVPsFAxk5tJpcPzX8vxy5ybtHfcJkz7xy2kcazUpTeM415LryLyC",
  "key8": "4ne6dfAKd6Lg2rx8kiRUmFgTDqYUmJuTVYuNoJX9cMGFNRvLa26XAjKYp3GHYVphc9tdhuXcrow7bqKaPbB1etFc",
  "key9": "2Z5sTUGNqiX9EfohoDDZr43nKwgk2w8juXiodxA4gQ51RuxLzWyF6H4hreq334oJSmUmikeqz69fog2r7vXxFmd9",
  "key10": "2zHLEGAvNYYkAGKdxBqB7CCxjuTPXnTbZFUHzXQcKXBPqZoYfQaLFZGHoNrJtoKTaGzHcvVcPjiVv1iPZ4srbNrs",
  "key11": "4HCszxwTgN72uvKzxG2iuJQksoMBbznoLA4h1ShnnCUV9oLUC5e9JBWygtU6jhXTrGFxRqHfYYz8rnmCCb7mhQYF",
  "key12": "BLYjCkaFAWGcKTjpQJDYg3vBt5aEPcBRDnqouvpt6MybJ4NvjrdT1gPedYpBkgFtGuR1CQapYdCRMyC55hXzfQg",
  "key13": "4KvhdusQwdvJ93Aj2CY19QepxPG6mvv2FJFM7E2gfQQ7c4NvfETWg3NJ1FJErwWVaTnDmZEmN8qWQwWjmuofgjJi",
  "key14": "3obKunxnqP4p7TaKyqA1E7ywX6ZPd7ZEk2pqeTE3REoZfYD2Fcxzk1JicAqNhUgJUvrqV6ZXM3J8AjyNZbAKxmLo",
  "key15": "2RvvBiv3vtYvd1oV6UGU4cAcshiM5C1BamWo6oMSYMB2cwTSaqTURdwmL34dTLpuLo7Nwr5Roy8EHHQd2e1hsV87",
  "key16": "2HEz8KXo54iRNLPe6TmZCMRVuQLn1YWLh5vkhV1gayDZgxAwbvpEAHw8t7m548FU3Mb68y3XcjXDsEAYZyJk6UVY",
  "key17": "5VkcsS92T2d1u7D7TXqkDzTaoy14e8fMX35dNtotCGDCHjNbYChE1gESCXpxSHh7UhiYyijPHM2VDrxC3DNaFJwR",
  "key18": "3e9eAZsxaPkbt2emuaPs8jYfULKVH9DVHZp4StZ4cHzPN3hBBcPp56QvgivZaX5yN9gTYCdETfZMmsTyqvkFisKm",
  "key19": "wi6DVQfPHo3PDRzBYx4Fx9zjFDQztKZHivTqWp1afoFMUy575bzvz7qQ5oCKBMjGsShyqshEro37yKTtyDF4HSz",
  "key20": "qHu3ZtnQKGUgm74LNtWwu6ceWVDut5Rd4MK3cRX8AJMKKBqaRtASFJaBDEK5a83F3DqHjRy3hzEaJ17Yojx32wB",
  "key21": "4nDYzsNKkcc57QwPzkXiZDqmswjWu2ZyieqdyXjwwSohmyvNZD85KYjJSScVPREGcaPdXcsSSy8L5SMXriizSZsw",
  "key22": "2uJMefNT1JF5DNQhXdBQYUGbL4YpnmixiR8cGfiuQvSL2PkGrfLSGFGg36aoSkRK3AfvRJJvKYq8AmREad2Qxyj4",
  "key23": "3cPYqjb6C1Z2PrdZGt9QsNpxczeZxj1CDhRioCQ8dj5TgPuVcbzucGqYsosw7PB463KEeMEwc1HoVQfqd1FfcLk6",
  "key24": "34pbjyXnQFKsZtBkWp1aMvzUqx1t5sH59ehJqdo4c48huzS2FxkENhGkTkFbyHNEyh2yfrD7ukAWMXvuacdk64MX",
  "key25": "5r617HMRxuvp6XJGSaQ3rRaJkkQwfYtaS3cqzfa6dRaofdo3EV41ATBVgcvbgofrJNRvbimV9FLzBbS973umXcFR",
  "key26": "5MGdBdk7Gr8cNYupRKcxue1fmzAYkKPEGiir4Lum3BbmZjjntwMSn8h2GN3CZh9cUC5VQu1UHwHxBSq84gv9b2yr",
  "key27": "2bhM1XAQ79NvxPB4N7Cg4dah8RPSS8ZWqo1F3ByQbCQLuQhEh85WXPp3nxDh61NTm1bZRg2Tu5k8fZQmSWH1hFBx",
  "key28": "5juTaMD13fooum1wNVThpeY3wzK4nzuVL2vDE5SxmLgdeqqjpP61wdD4etxtJpmLW22cBoE7fLZqBpwQWug5WrL7",
  "key29": "6dYboiMZbjJRxfFpwWnBGzAGTvoPm9kvHWbRusAbArX1q3fcN94qhLg4mGYEtojT6gkeeapDXc2znjMdLydcP8i",
  "key30": "3axhow2ZX4KRADArQCUXrfeVnR5G5gGvH1LD9zp6etZoyNNC9c9G36pR7esUmbJh6ukv3Vz6km2maCdbXH8xQYP6",
  "key31": "2gPK3SaDiRpbkoqu3zVxm2nshDiozRZgUdcEzuUUzEd9SWDY72jFJ6MGfdTnW3XBGzBnvMiehKANJQfFB9afwGaC",
  "key32": "SNt2cmNEr78dWzvKs1nJKMH4Y5G2SpyL9oyTBgRAf2CHPQ6JtBsFoxVCGAf4sr49qbw3XmT7Fc4qY9wsKcm5shv",
  "key33": "5TM2XgczdDfL87gpDxVLPaM1D7Y841hn1GprVdjYa7EqF5reryPFMtxS8UfNwfrpydgcijZuztuak4XwnaZBXkTG",
  "key34": "3h37dMrVVwCjnjHFCfKoTwvkKjkdxZAxr3JptMYfzHeatBnpY39saSD43EPHDwJfyxki3rcsm45h9E9AKwN83G19",
  "key35": "M1UDFoVbdqpBTs8nkR9N5Fyzi1hSAwFBMTsGZ26YbYJsHKfwq6XQdxyNVCB6x8YavFzCFoy9dXEXER5fuScoWL9",
  "key36": "8uhnxnCoKKgrWiuLQ8kB7TitUckS5FaWEgsRMRxMoNvwzgBoxrMBFa6BLWSvd58xjxxNyWYLb2PwtiTLmf4ohK2",
  "key37": "4JrUmJigy9M5zKGj7NL4rcLnjrEshpn4hWkHK4jb9NhWkEt6LrEyjhweRFBBhiqfhCdxKj8cPh7uoFwdreaKyyGR"
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
