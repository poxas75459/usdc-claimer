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
    "mzigRD2N7BiMDmGJA9tibeRSbtcatqEV5uUmDK5XQow1oMjxkuZx1yCxQoqWAnAvYMQXcbLuqoBowQ8UcxLferi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52HTS4MQhnSNcd7MMWNo5DfP9hy6H8xiLSkgW8tQBWUFPjRa8zs5n5oHPFhmk35DcVCrp9NXKikCZoV6ZrubKzZu",
  "key1": "4WiyhSbasRW6MZL7oXt2yZRFuQrhZzkxrgpD9ZcQkmD5aVxp6F1RhnkHCtk6s1dUpJTXKY3zuLudzW6WGX4kMz8e",
  "key2": "3uXvHpFf7cf1ceveCCW7Rf67Va1Dw53WuPUVU9ts7TduafMaT5obTVFZLBYdmeBjnNvNGiqxhb82hZcYQpVH7paZ",
  "key3": "2BZhWQjCM2TahxC5uPjt7QqCULz5yJLeutn8Lxtn3tBBV1UuneuxmopyfWXRmW611ka5QSFhuzgPcfZbKKTwvPsh",
  "key4": "4PpY6t5yCq8eWdEXBbgiZE3EF8W1k4JdZ8oUEJw3gJkymq6J1kUWWTfrwcKUs6CpSty2zQmPCdyeRN6Hrro6QzaD",
  "key5": "3jAZRP7orasMQdLGnc9PubMRB6LavQhZ3sdfGKZA6yACez7SBHEZtmLpAi1GnR3jKXJoDrSdDHsy8aDws9hdc7wZ",
  "key6": "4Wer8eV6aZ2jiQHmVtt9tvKEECs8fRu4TPXSfddQLZ165i8pSjR4j1D1AUYDLkcY4pmfQLj1i67fkDK56F9kvDbt",
  "key7": "T8zxhqxiejiuiPYM55AE8SrzA8UD4seKBWzAXiHMyfupNwhmRLJ5Wiy4nbFUs6LUVogeFgTmW7DhbE4ssG1idew",
  "key8": "56LeTkzeDfQLK8ai6mBGBa9cHKCjM5wMuRNXBYejmADNLSxuhozcxcJvpcyNzbUAXAkx96JDiCJd9mixYMTC9oE1",
  "key9": "3kjHmMeHTD1J2unswPmBWufhkQvu4ZWsRewjSgY816ocDUB3SNDQroBocPHAAfyvk1tu2sgTiDt3W7wL4PhsDN2T",
  "key10": "Rm6VKEV3eJihTBY8a8Jw8j4LMJbTHmYH7yECfEvDKT4GmEhWPjTSQSw9VPN3Yz9AktYX2x91wwGaQc2i2HxaHRk",
  "key11": "29Nfu2MfdtbrNekN6nQUvK97ePuTJdivdW3zCzEHtbmMVTrSwNfz1Rrui9TwZSvYosSPAiyY1iQP69Nq9YX8xwV3",
  "key12": "28rE9oyH2GuG2nWujDNMS9oCJrQeNn8r1J4oeSaLZDZ73Uzgndvue9oFKuSvdhLRcwcNEhp2zJwZVjAnfRkzSR1b",
  "key13": "e1N5wRs11shPkqWnaykETcMt4KCnhVX3p2yhJfpTLnasgzapmuaiF7mHq5SZAmBDFiSkvkBH7NanMZB8oCPhjo6",
  "key14": "4yGsNcAJkxuZ569fvn1ePFQfoxmMbLxs6hkn4LnmSyCBnZP94mSSgJAvad5uNo7bGkv1fKH7ccdbB3oNPABrcNNN",
  "key15": "2Q3SRFoVsSyLqvHP9B3NotszyWjWB5X6vPxsNbhBArvpYBQK4nL6mtkq9sR6LPmVgzzD9h1FA7QuyhwUhsSrCZe4",
  "key16": "3H7kmeoAm9HZAVUS4ew2S1ccUidwaHM93poTWn3oZ7ZwRDkGUBKbJ9A2rXy5quLv86GeYaXPg1kCX3mA9CpJ1wxc",
  "key17": "3hQ6WQqGxhGhMFsyULr6ihNDeQMTtBvKox6fKGSJtuyBGkhkmdCgmQ64f1yutusJQwmpTHe36u81VRpeHRdZPQ4n",
  "key18": "4rmmZ5rRLAfKCbDZgip7ugAC5GnfC5c8Wo778fgtdtN7sSBYTKM7RXBkaunurUa9iGUFUpSmy7pD3Uv3WKVtwX4D",
  "key19": "4tNdznMKvZdUKvZG3Et5wCUtsKKJ1WwCZD5GwY2fCc1D9i2W2EKUb7a3sRPeT7JzsEZrX9dBN7ggS3tK61HBXcSQ",
  "key20": "67R3se6n2Cjer12wC6GP1rrnfGfgavFS1PvLRToB9F8PWYvKGaptj2L4hKkv1YAwnFett4KpLtEqYDa1HCt3zaAh",
  "key21": "4TxLwPCV9PrCE6mp7GaXnf738DE2ZKix6rS4EkkRyRNHzJfkTyynGuZ6R6YatRfBFrmjugQu38dnAqqK7QuwwAKj",
  "key22": "5wqqRyGWNnrLVdZ39uKcKQLBfhUabLzpbqqd1mDRQRzrs3efBnq6NV6zxqDam4R8tsKCj2zPY766m27DxyVM3WDq",
  "key23": "2tMKCXKELcfFTC5NwKWJp9UapegVmrjxHk7YjfQx3w6QCMCND25DY3ZvfeMjD2gQMxSPnWGm2p7ZgQ8uMWJeqGUE",
  "key24": "9PHVkhXg4amGGTs8sNZz8fFWEgx5W21WSWkzYadCv1DyrhhNRsyoU2VeahH8YGKqk18CAfRVzFZb16guyMY9bJj",
  "key25": "4cLabdJaYFkDnd3qgNE8XdW8UMieNkqGmPrtfAMhdqCXNtYaDrYyn5nKnp2ms7u5HYBFZ5B4CRgWrUp7wrVJN9cP",
  "key26": "33uCvzhi5W4isPQZ3DhXwdN8wCdXZ7Q2MuCPrMKyhxvC6JpQ54NnaVF7wBMRcb7jCHjBnsZMVtnnfjqzeY6cVVxv",
  "key27": "2Lnws4vRpL9DKKPEJnJeA2oePz8KHhiGYvnqV3MNrV1by86uDTuWasxABRL2bCncpoFaJKzZt9FQYRCzGdVogoRK",
  "key28": "2UjQrLsJ5AXovQoPSb4MgW9i7xkahwq9y7Yz6xMapU2j9w5siPyz5tHPhV19VvgRegvUNwCj9BqKc1AWLbRNqhZu",
  "key29": "2cfB6WUgXa9nwLfPqMwfJRdEJ4zLFKk6oX47UFZwaX8NJrFhx6M1heVTgCRKWA2FNCkywTx6XhwcYB23Guyd5RJm",
  "key30": "51LJtQHK5VveGQyuKW2Mz83GuFd5iK336JUWrxfAozCv6LMArCrZoyCgrC1phYVJqsZgzGhpteBxc4j9DCjb73bE",
  "key31": "4u9tpKxBFurFkvJrn2e6Dc3jEgevrbCa1WHF4dtqnLTSTMLVZQKopApG9Ju3zJUPPyTV8iWmdVVC93PYQ55dapaa",
  "key32": "26zLdLmVfzNHUai2StEkMwC3qX5UNC9NK7mmVYWiKSi5wBD2HiYffMyfJFv1rDedZBXDTp6hJ1FmjazfJTA2FaTh",
  "key33": "3bUNLm86YXDecZhDTt9oeCVYVaAxF2vbhxc9qw6uS8tKUJqaeNYopks59r6DbxboyKcwcBzgbE6UEecvMgPLSLFU",
  "key34": "2aRt5r9bfdwcHoBLBocJsSDLwAYwZngvv4n28Mhc3QcX1XLSce5UG33qEPp4ZbARmiCtDgZYqtjUUDdYu9VEmSJ3",
  "key35": "5ZCw2w7Qa1xS5pRzgzJNT2WTLw8EgPUqS3zDhQq8qStgM4ZoVDNL3TUZdUBZ7jDNWPkrvdN8KMPULTKnhhHQfjXm",
  "key36": "33DVwHzkPNvSuuMWRrWthQokUZmVBxXbU2JtULFe2SsZ7nVS42JNAFgFC7g1XHvXgCHfxaNA6FQFpQboQqABq3Wg",
  "key37": "2sVrxbjq6PasoH7hFj8aZF8eavLC6MkdGUS3S4fZsATyCeRiQWP9VDVRZpguDbtyexzAKUEshSwgUdunxctF6D2r",
  "key38": "46KLRJrTCehdcRxK6Xz1ReS7NPgkWDPWbEAw6NWHJdhHsZWtVHfarWXYytiv3fp1oMNVxvoPJSsq8JRzasEiDfsq",
  "key39": "uL3Fc39fj2i9GSw1MxgxRfp333WRUuXgGTZmHomU2rxgN4skn9tKwozYf5Gfb1WgjrCi6iuw82tFiUmaQcUFgr7",
  "key40": "5v4vgEJTjSxJKY3oSck1NTmzgiswszgKRyyf8RpumXzDmFVFv5Ch3kDYUdpoPRtuNAnyqFrNp18hsXRyE4FcGosx",
  "key41": "2sgiVdDwJMep5CtpBXpKwwfua2fgdtqizH7JHXxNPRUzJDa25Ai8Gs73Ey9SqhbM8Z6LT3WchjPPzjGBe57LENFj",
  "key42": "5P3STRmFEAonnioa6UXv26xWUTw2vXizv3Zob4b6VJ5pHCuhdqyy4iZLpcTre6EG7Buwk2SYzydT1pTtDgxT3DUk",
  "key43": "2cnLwmDatkXujamaN31eJCwFrUkNWB9PmfEbTvwZw9yTGtLDLEjrifJqn5WQ22a9AJm6L7XSFd2WJY9yACAzmkVD",
  "key44": "5XHqU1DBxsPhXX5RLP6BaBCb92Twg6fyuxsGAU8BhfMQvxv91aobLmhmKa7KmHq3pNqFV5WnuzQiWHFDyfu3FU6W",
  "key45": "5Bo9UH6w7R3BrT2HJLLjEQrfJ5huhs53sZJwKbwe1cQFofufUtw4BtpDLX4NzFYjfsFGF53L9Gey1CPrxFC3yjap",
  "key46": "UtiCeJq15r98jyEw4ohoWwWPmHkoG6VhNLqHRteWC7eg5uSKh6fRCuEAD5gzHYo4QHpGSK2sEQKZpFoBqKTSxh2",
  "key47": "4X7vHprZSLaFNRh9CVYMBQ5CRoDHMKPwXtHBkWfdXFkcBAzDHvj3uHMKJXj6pC4AUCdexxMg1bduseX4wYQY1HZ7",
  "key48": "57tRB1kQKScZkjqvkfTaLUk788iMLqaZStxBZm8YCsiv4F6iD4fff8pb8wfi2ApUD1Q1p1ToAh6yAJCVxp8ee471",
  "key49": "3UjwXmXNxZ6NwNY11q7r44JMtxfE7UQsKp5XrEChQkdLyAh5Yt9pD3JwReM5Hs9F7LiLZmge3HK3A8CtFeyTEWeX"
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
