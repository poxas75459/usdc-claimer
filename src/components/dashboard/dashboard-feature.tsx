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
    "2wjp4L6VdHyiqb9Yi6BMipV3FnCs9zdTfQnx9GaTutTn6hKfztKHqytLV6u5zo2Pi82gKFgKagiZ8zuUFqrmUqgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s8SXuocuFwbZ2zpckDoKH7KP7T4BwpEVvMpMaCx3kRxWcYwSkPw6fYdo8aXeU1HyxZZF9s4vfKgxtHFtqqRervw",
  "key1": "j4ZjyLJS2t4VXj8ac3UY6uSJyMRkYhgYpPB3UBskituei81cVxemjNTJjJ1U5wEqLvVTdXNGvqNfyT5MgZ6pRC2",
  "key2": "4vjFMZXdZaumqwLLii5HbsgMrDuxaLEsK6BaBjfLDT16ZU7x8CB4T5JfDq8sw1x631vVDnBbjGZtGJem4QGqZG5",
  "key3": "5k8C4intCy1NuNDxLfmUY2VKPEiYGK325mogB3hJe8DEWjfr38cbGbMGrNhAVMLTNLYsfxx2ARAJ2aHmHVrxT6Dv",
  "key4": "2pvuczVtHsiZUpceg7sgC5afaFDYpCDrkJghTvMg8vBKrQpcAP9hsYLYKs7E5JmdGmzinq6Qz7TGerZKdQeZFTQj",
  "key5": "5YMr3U285eTdC6QnZ9geLGYxvNvNviEJEBpijcC3GTEDoRhEwwnuDKTiRaCopaKA6cXCW7qqeJSGsdyjFq683Q8z",
  "key6": "VdWbhKn8EihTenduZW8T3q6FoMWsp8gERkEbTj8aDG2AiqNyQixDzPwBBL8xfNCw3fyy28jDUJxjS8B88qd3np3",
  "key7": "5uDw67S7Wj89LpKdmJZeaHJDCwaYbeq134TTRLD8RpynVJYD8t57hqQeYTdwWaXrrBGNFqFHEJrJZwnWpbmmin8H",
  "key8": "3B99qT97t4AA1QSEJvH5zMNxdg7tQ5KvwYcJDR1nKugZoBtDvvCPfadtWXFo5CKJxj5nuueZHRsUe2Wa1swLiype",
  "key9": "4iYPzDRizUdAgkNZMg6A4TEgUSBUZYjdHzHLs5eL2Bmuanh7mFqCiYPHt1LGPY5N8MfGrvZRkCtvwMnopdhRd5zb",
  "key10": "5D7ENq2fuHKGHz328p34yvgRnb7QqRSxadhEAoioT3ihBxE1vctR3SCkXh6uS2DALcQNSJpg8LHQPH53vReVBFfd",
  "key11": "4KkHTEKJ9uHcbyVozhr4ThNoET7e1EcEQmnGprHPHcF418JL8qZejqmWTp3LVxMiYpPwm27sYk1ABcF7VK59aWnP",
  "key12": "Rzfg8anJxBbhvPuLYEh4v3dTY27FSzEi3McVtv4mQtJub8sZUR3MUgTuFrtZWbP2oxsCWYsd6LnW2jZ1LCX29Aq",
  "key13": "dYGRmZKMM4dFtcqr5RhVkZtim3RWEZdDA7kdJsektNa7n4qUVYhVoNuT5pm1848b67HtajfEdpGNQugMpA18rCg",
  "key14": "3u3EAZGLNqtM2fWUJAsPiBH8izJc3XReeBDvM436UgP24SKnpEJAbo178apN4PKZh4dKgHScazjHoL1b6HeVApox",
  "key15": "WS1vwFniVqTEQfCbnyQJBJjFCSUSTzkrcueYGrR4uyXFYv2Vnyxp4naVwQDfKT8ndDFBdssLAsBtLdCWJwM91Zm",
  "key16": "44GEjkxqQuiJZ3WJ7j5BbH8Ks2cVY1cZvu8fVrZPd1Fwp1G3AWMwBfdfT5Xx9ADrzLyh2ZrnDzPgcEsy5Lc1yuFB",
  "key17": "5iZZcCrMLBP6LLZzWzb83mreRPeometqj7FeYY7YEMGvMdcCHDTUWYiBtWTykg8x2WNMy1XkkFeH3FGkt4eJoXyt",
  "key18": "2rvctVutR4T6JfYzs7g9vkrnM1kZYaDommFvCrJDnazcQdMW1rRFfTJtM111DdoTgJRmV3XrMRRDYZmt9YjRfPxC",
  "key19": "S4RgjkB9UNjZ4Z3drYuYkHxvu1UPggeEAXEE3tLnvunZXHgqEDW6Ntg8pnbh1krBoKsXDUtcEGNivXTtAgngNZw",
  "key20": "3eSvViBKFB86H8abLj9CzEeCjJPMKgrHBqPgABtCFMXReoLB8jahnZ9QKvX5XcUM4uY1iKPXxJNX1yYFNHb958Hi",
  "key21": "3FYdkSqU1u7ZwY5DzksAhAdhySUjePfxHn3be4GaACZP4qq5GFaZoVQhBzvnooBs8xKmdeCrRXNicy7sczSLsoEZ",
  "key22": "Brr4c2XJ7BC24sMSMsZfeuZcTGxwSt4o4FukdttyxViF24W85rAbADnNozAAtv8K1PwUSuBhCq4ScYSt6AEiTzQ",
  "key23": "4QoEht3zkdddcT94bpsRsRc6N5go4zcrcCzRtMu83mPd4dbsmF1o5iNccLUriHatjtB8dH31Vjy1gqokLLMeqXaZ",
  "key24": "KHF7L4QW1jZUnwmJAJKk2RBPuisD54RMVGEYpboSowhduvcvkfHuCV3qNCkojhT7WCvzfPp85QhLffjHtceARrc",
  "key25": "3se62drLcSPim4kCwQ3mr7aYdsj4fRtCatS22TFU55QGh3u4bxDBJ9HRnve9geWSzRFcmXuDmZSkVyEPGMxeSLvJ",
  "key26": "35BJQqt6unqwPPtw6jdZBbBQT5NZzXJbnPwpjjDUbSRDwbgUAF1TDApynTueiYHsyx4p9JZyubE1UUVygD82mZYC",
  "key27": "3tqE4uYRLiNGUA2U6kJUinWBhDWGu1Rs3i32a8fwkFtXm39eHKX7EMuVuRLofykFbEnNKeS7TX843GNjMvMHmaNg",
  "key28": "26p7GYuwo4cxnw5nxgDDk2mRPo5KtkmttRK2NB7oBc2qvbaWKgCGgkVpbZ9PpRULg66SFwqunJErqDzs6uP9erVF",
  "key29": "2S2insLmbXCwv2t4i3RN8edh8u7MJAjGZgReBRikdhVgTw1RaE9f9hFnJRxVwKjRs6EugUYnCkG9MVtYz2827hsz",
  "key30": "4fPB4sN63bvxcHXvMT6dMfE6KRukvHQpTij9ycWa4nEY3oBq2KprkYPqAjrXfVnSnJ7fQSK47jDJ9swbZRho7psy",
  "key31": "43GGR1r6X8YWcr4SCmDyYrfctQoPnseZXsR5gyPK6KC2M4uoERdUQrTeeCt3ssBe7ZMUZsCvuJJwJYmxjtEgyLVf",
  "key32": "3TQvjbQQspinaugQ9RNonoc6Wwj7e5wzYVhzKdy9VtqtM48ZDj9g5dHGxqH3DXtKk9Gr3UbKnMpWPp8jBXCRmrHY",
  "key33": "nshsgEK1ULXyH9bqK3rvJE9EL4Z8Mpr9UdBXQFPKTaxKTaGWZMLPSiBc9n6kwP7qq5S5q8zni4KA6e624cRcXKm",
  "key34": "63H9bCnz9ue4wyt5pw6cqcozPaSLuGMZuZ9Sc4CMzqweeZ9TpvwDhz9HwCRz9ZVgP9CbY627JUTsLfz93gVNBLqR",
  "key35": "5yroeQBVpWt1jiPQiPSUuNMKCrNkL7zf1uc9JyykqCCtZESvJjYgMSpaQkKp2VDYqhCQfPLw2UyQuJTKZiZYB921",
  "key36": "3hi2grBSq3sm5RQ2myL6SceejGANzR1mgrGDqrUXnwzbtbT5M8BTY6tgjSQzMHuSRLe9cpNf6siAf3z6XA7Kn8ui",
  "key37": "3uSBLEqqbKsMFuVs47guqsQGzSvxG3jGVApJz5M5yVGrzkKmrpMhz44s5av3quSaDvW4fv9XztrzAZ9hz9LEr7pG",
  "key38": "2WPqBa7Bvzu6i4WaCNL8JQrq47md5WtSuiwkbwkucmZxP8DGJbjWQgQUC3566UvpbSaB26rPrLjB4BTu3ByB3ZUw",
  "key39": "2bVJHuSn4PP7QKESHdA6o75fzqGTs6EgXcbvzsMBUcJcZqH5ST17cjxYzU4ExN13JkbX6vXS9pmq3QERGmJmfJQk",
  "key40": "HtvidnP1eQg35f2tC5DWRcA8HvCBVRR24e2rLc5N3k4k9krkbxnsYWvCVwuaZdaCvyvdntcLF6EEGCMpndv4kYZ",
  "key41": "ikfXgA2XWAdESn5DDXSv38eKz3aCetVe55JX811FrQDLG2SWykujqKvPFaST3HQQEVoU8mDSFaDKThvxYSXYM5a",
  "key42": "2YURNTbSjtp8KWdG3dhGBpz1fF3v1i8MC39rTpeMHJctsicouciNRYNiLNioqKjwtrZddddLVSDcmTkDkrLQskaB",
  "key43": "UC18114sXnzks1uMq2XtcyGqsPDVJcTvy9wXLUmwGrnPSP6GzqofZzSzHUBYZuGdHngejX8qj8S4j1iV4JdrBqD",
  "key44": "2WkwtcbSP9LPNkWBrmKi5MiDUEK3uddiznmWoRkUeigar9myzNcCt2wRPjcpabo9yzPt4w9RZjaNJJ41AHkACzx6"
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
