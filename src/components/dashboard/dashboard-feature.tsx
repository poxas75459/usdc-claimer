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
    "3ybtnzRs7WR7PwfcKpmmn2xzkdsBJrjhZ5A9rwReF6jQTWAtSFRHoeQWzu8o7zP6EsjGeMZVDj3yMzkYt8k2SpDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41fHP2bwDphjqNpDw3J7Mub6E4gcc8N22rCeX9bkuFe4egYCmxBkJDkc1z9bW4CLX4URQ7RWbUSc5qrgpeYvxEQb",
  "key1": "5ChwNZ5mtCcz4afjJkr5aSKLpxGfwffTBxA6dgdjv5BBeXj33B88d6wNR1STZju9rSxyMmDW7pr1SUB789mP5TwJ",
  "key2": "5Y4MApATxvWRfm3Yp5xrMZi2mjduJCZBsDFcPkJRaSxHTtJSfHjCUahHDhqwgg477tXjHnhn4uKVDeRakC5CCQej",
  "key3": "5WBFGdvp3p3c5oDA66nwsutfrvCdsFwTmM1mx4cyMouz8qu4o5C2uN5N3gdXtcxgerJtT3f2u4A3BZhMB8q3UxHb",
  "key4": "5jgNw4tUKHpdCo3bzJKJcS71e5z8T3qpE4rnW5cLQKgXstcerFosYdTjineWHHWL46zaikxgBm41hwkXG2DDzQ9S",
  "key5": "2igqdcnDGAuGAc9cPmGw9GE2vsZDuvY5X3y8fr8JdSnHXxRJHLUhHR3DUbNpLkjTiXnvgHmeRM8Dz2fSLTkgbEkC",
  "key6": "5gKySVPvtud4oEw6RLUkRdpe2DZAUtrgbg6A4SUCM7avcU9JvDhYrwaRX4haoqaW5ataFQQV7L9oC8DjTooX4VGz",
  "key7": "qNN9Uurg1DhL3jikWpNUkTo6aHgakSwGtLz1BinS9RN4uajYwhK3vXj5jo9AXs7Ae8riP7gvugdqqNQ2S4LbeTq",
  "key8": "3LSWmzkTbyJgG6V6xFcMaPF9rsnuRE5HCigiFSHuJV3MPh9Q6RmhYSQ3dxwp5pmMRih4WNT2zL3XonyWk6GPSkJR",
  "key9": "5p6ipGePjghYJzhCBFUBhXL8UNEKJpon8RSMCN4Lb2LyC1hhPHVKHZToZaVWbtRLLUN4mLRywi5rPQD1fcHaobxM",
  "key10": "RB48ZjF4hhFhtr9cJghFRCzWnCz1ErzQKj1UBdKiBV7H1kJAVz4Db7j2u1Jszu4jQeTqfrMW46sVTyGNMb5Jc6R",
  "key11": "2CY79AH75k4vpVx9Pxa6qxruuRDhoeWcrek8GJ4wHytRZaZzywo4jfTmYxWALLEevdYj1dKzYuXpUWtToBU6RgBm",
  "key12": "5VzaXKyeQDgnZzKt7udTjmh6EVph4USA1H4CWyJjLRBXDqcYza3J3Xcue3oUSX5ogmqzNTKSA3PeJooZVChsraaC",
  "key13": "2yM57qxSwPiqG1jKaR3Y7UM84awTjeV6a2VDoZFkg2JFQ25D2KgeAJ5eMPcYwmcoQCqBbHFbDPURRQDymbVqZ4qc",
  "key14": "3P7ptGN1MSsp1wECdqmrPeCHrqemoFHtfuTjjmmaMciyXr3FGoxBJFukpsuy5HmJornW3AhjcLtnZgPLAS1zRzpT",
  "key15": "4EPzRSCwBSA34n6vzGQkYZqLvQjrzKFVPeuWrKnq1Ti1VVbUG8ZjURY7fGGWtujtKtPFzdZJKkfUxEEZy9xivxvL",
  "key16": "3ctpF1MTP85QTd4a9enUDfQzjoab4146uf2medcjGRQBU6P6zfbqYNBBcCktmuEa4AyxbwEkVHJtYkRX6931M96L",
  "key17": "5YMFzYwiRHhyc3gibMBw5pUNPQVxp6GEPAKUGGnXN8SwEKFhJ7atVnosfYKTPmvFN7nYyVcGfthziLBmu5FsC4W1",
  "key18": "2ANyb7QP1sbKgupHmzzxFoVbH4V4NpGCfrBnEMUb6kJKFbUDqcrqFcqv7k2KFnGhf4PexwBGJjxYeNU1EasQe9Xa",
  "key19": "2M2Dvac9yPBMeeCFPgjG4iKv7Lu7RXuZwnVtFgco1Jg3dL7F7RKPhjXFMMygRPN4ynEPEsKL6hw6HZMsbFiCnYXT",
  "key20": "ewhHWQVogU27v45nfoEissWbXRYfBHSbpC5xKaYUff5FTZXXQcJSVQsyrKSe7rVRnYHCdnQnuxnbu7vz3BWYgEU",
  "key21": "HK7XqWer61MCz9E7DJmZpNeRszfsi9F7RcY61E3iS2xmsodz2VETkj2PBuJAQHSWjuTeM6Gd1XqHuZ3t6jh6WYF",
  "key22": "3nKpbcGuDmcPjyzfwJbonyAmea3yMZ3KFAW1hUR8DCwtGnibY1h2eeypbV6CnW8nBghDpkur8LJQf6nAKm8nq2o1",
  "key23": "65jbZAJxTGiw19SGDSrc5q3tbxCt7R3CUPZhenDfeVne75Qsoe1VMs8Emj8Wy4JetJuurNuvqBpWrd1V5TBE8Tr9",
  "key24": "2NtzdQLxMxdicB5bpXxafvtd8hcTS5WbrtJuVX3q6ievrj4B72NVbYzf8w6tTJ3XZLVoj3fGpiPS82uHSMVy4pAw",
  "key25": "47x6od2xQCzLsaVkTaRCzceVrYPS2agLWzeFxdcAx4DumYrt5FsAns2CQ2pS4n1ChFhv5m7Zt1Nzp2P3Ar74VP8w",
  "key26": "3VMNHdBVbsP7pQUyMqNAvLB4EQZuoDGZ1qoJUiEqA9nVXkSvwc6CqMeznNzfSVjs6qDaNmJthsDyvVZ77GasdYm9",
  "key27": "5Kg7UbDk7L3FREtwswoagySYf5biGfS3yq8c5UAp958a4jp2Ut8ojRw3WmVvjNma9eMwXoYvZrgGd7JzvjRgLhQk",
  "key28": "5eyw39p3uNgfmPhtu91ZE3EAADXtV7WEj1JZTfN5g9n68xzirmGfd7y7rgsJrBdvz95Qn3CiMjE98gk6DMMBHMi8",
  "key29": "3RGtHjEd5nhfEX91vykSWtgdJpbBeECdXmksCkSKyXTWPtpHtx38y4vD7caAuhoPBbhgistxBVVw5eDDojPT7iCw",
  "key30": "67cFbTfgaUmKbNgCNToNmGhnx6on9C5LaMeERxxx6z9B9w5ZruvytZvEKFDknry1gfcdwNijtBNLo1AMphNzA65X",
  "key31": "46ww4PwuR9auFcQskuWBcpr7pZ9tpVEcqNDscCAv1MN6AurjWVHKkHGxF9jHTa9fiVH8jZkGTjbYjL3VUtWEc5yM",
  "key32": "53GEGjXLmCavAYauZU6DQWudoSJtvVSh8J6ubNdo6c6i8viRwsYYpHeB3fUTkYyB23PwE5EWAG1YS5UHuQsC9iMX",
  "key33": "4WUj2pEgtYjUW2VMSJ3ahT8MQyUvdz2dUYGcR5xmiibYGki94qLDeEKoyiBx9yXZ3TQhBxST2qf2jmpYJUyvY9y8",
  "key34": "3WzZxAnM5xREgbYyACum23ESvcA7rc58CYAPk2UkZWkBsKDECocnFmwhyd8hBQK7LbcxNWddeogN8ZUs5DH9BNym",
  "key35": "76UMVUm3YpgD6U51GrW3R785vUJatJaHtxThjfzLVuWATgJWeDbJLUCU8vEcFvH9R5HBhjmz7p4geMvkDrZ3NPw",
  "key36": "3HURwfPs4NEV5pozfc6k8EQEtU3cBb8cuH8Cbt2HC3xWpvEK1tEX2bzG7QmReeZvuqeJpRkSpuzKtH9fAq5JwGHZ",
  "key37": "5CEwE9UfivCcEYuY69wi6iyzMYN2X8SacN3yH4sGTEEw4hD6FyoyC1dhjK7kkSJ2g9Jx2BQB6W3Zh476Q7QJLuNz",
  "key38": "3GTjLpPkU8c2phxY8BXkc9i3mit7Wve7cxeZ1RHWnmXtxT3kzXViUa8MC7SN59tu3NSQYR19WvTTqWjP9MnKQse2",
  "key39": "3iqXcK3X2ugBMHEpQURmyWsZfbbywdSzP7V4zuC67L6WZHsPYXaXtCJu2c3BmTXvky7HBLFR33K3XBn5rTuy6gFk",
  "key40": "3jjuxBV8fZVwWHSSBSfJRHQbWTjbeRj8A2oeLpexCCaa7mdHkPDgc8zQvFSGbpNhtvZJMCRircp2LY72apCP4Jqc",
  "key41": "eTEAuQwzJvtCeSiKShUgyzZGBN62eyJ1ezr1RaRrWsB1wDqLryxEGTkcYPunkDbDe1ihkEbAY4W7wWYZ37VhX6y",
  "key42": "4cK1RpHNqAsar7xJ6HmhKjiF3SP4KitmXhegFMFffYmFJPuEymb3mJHkkqjPVmrfqvhifzR9XUQyJJVtrHVcXD3d",
  "key43": "4rUog6hRZNup6XfHh5XwVkv6FFMPPzBPmh4EFyhTd49fpur6VnMnz8QSo56sdsU6pHTAWiqP8guyGm26XshmpEqs",
  "key44": "2hjvZpJHPN3Q6mToa1HKiAN3QT2hT7FAx9CJXQMtFZsFqmpGXoVBWJJWRqqUY4wKk6FogaF7cGamZGcevdzkByaH",
  "key45": "4mdzpbiVSvxYFC4rx2rQWwciGBjFBhfGSroLmnaPboARnZGMERAu4qcXHLeim2x7bJjWL1zjuUM312N1VV5U1m1x",
  "key46": "2D78iQobFQ8rob6aBxaRZcwnd5Dz17t5hgJxQU7hWYAfK3C8fCo3Ab658jq1e6g2B9HpGFjD4RivzN8PP5dnrJPR"
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
