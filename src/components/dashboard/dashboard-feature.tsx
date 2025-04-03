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
    "2FJhD8RHYm6hRfieZygeve1fmG8onbKZgMohFFjdKnGHfbn5Qx3DYtiUGd5hK4LLMPkeTMnp8wbcxfnY1EWPakVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t87ECDiGcHpieERfTqmd6GqccVcYnkB1gWdvHPjioNsTNnYuJtuHDDbzG5A17m7wv5zQ1caVSQNnibdcQvRJvXm",
  "key1": "Mau2srYeG5GumkRFP6oKkMnMxp29rKRWoGWh1xAN9sCp51MHTDr34b6YcwCaLy27R7PnYX7HNpw6biA6UTNHKaU",
  "key2": "4YWXC6eZUQ58iZCyckVTQgbmEizfdMzccUShLQx8P4w9tGipTPgLzmvZKNWdMD6Art8thmPeciWVvRi33CQF72dc",
  "key3": "3ULEV7568wLvNdKCC99YQdiDMmhBPRbCuZRroy8gvsZXw5RD6QrQief2F8GbGtMiAS5HkMRV94PcLWyynjXS62q8",
  "key4": "3Pj3Gg97ccJuvQ7wK8dYAPN1Ghnd9pHJS8j7QGWc2pvtCAoZkUfvuA1wM8ex4f5xgapRNB3ZVaa94ZwB6khEmMKE",
  "key5": "44YcoRNL8gXFRYhbLKpWWfMnHg16ZZcNTcTDP8dMrUNLpQVRKiABy3PC6zZkLcapRMGawALiUZHNWQpfJnLCF9YK",
  "key6": "4X8mykpc2viefra2bC3i6mzH7LCDejHS2ozopXgJx1AqG4K64Do25Pxf1qXpYocytWGhVXNshiEdUAMEaUF8MbRC",
  "key7": "ac3GfUwdvkqf1MFxN24MXZLrYW1vAgL6Lhr4Fa3gmBUQghhksFYAoxUNBRDWSgHnKrvhwEztkjfW7bSNGLbEd1w",
  "key8": "2NwnmXY55NJ4GDwt1VH1T1XDt6MuMNzYo8dVjJtqX7ohWr7Mk6oB7ieSFL3PPPWQ57aBNJ9Ccxd2JA4dc63ANWj8",
  "key9": "E8PW4iyTe3ksD5grfGry8cTKjVf3ysZS8iBBCPfms2F93bxC63EpmQg4AVfEzB5SoKj5jDk6Vv4D2iiX9TnjSjV",
  "key10": "5teSEzumk6FEgJwRQpipcdtprCYi5Eu9toB3rMcph2zymRHpSWfzAG51U8McYQdNtG6nzCmo6bwDnBERxui9qjtV",
  "key11": "3Jz5sNFzsmqGH9ii3JxtqAgJVqeP8iMPbeGRr1vncE3vTKB7mDXoP6JDsZNdiLZtDcourAkLqzEFJYSzD9A5rVGM",
  "key12": "5z6BVe8BRrSmcexwHcGmRhmhBLw4bwMmon187EFbRaScGZ6jkqiyWK4c98iptd4bJnHARJ6NL7dBYjyp3zdgaEZm",
  "key13": "5inyKwux9y9AXEkqJdyuHTk1n1gsqwho2NnEdW2xBbecS6nnK4bAoQkp21GcdpirCgCBrrrZf1q6BGPRhyUKs41J",
  "key14": "2J8H3DiipRUgnMzmQY9dKBk8jVvoExxQxetFe4u725QFgX2u4hB2yzceCfvFaVaWP6V6SWCES7ZQe8GmGLXeyq4N",
  "key15": "44cezn5gNYnSjcJTw1PtzQ2PovZGDZ4LWN1YwRTngizN142a2eW4RthZfTLJ5pn4gT3TJWaPSA6ZNjRkR6KKbMCC",
  "key16": "2RiUMhrYNSrukRrYPoNctGbMPJVKAx3pY1RmrURexfibSx8qTEfYj6RvyciHHwbfiNMD9rLBXr5gBvvmug1vTSeU",
  "key17": "pijpTWkm7Y8hJL2N1bPY5UZbjMWaoXoSv8m2PUpraaJpwXEyfaz5kAnmHfwAthGoxBJfgERfSM2g9rtsq6NruDK",
  "key18": "3exq3vjbVwB4to3eKLaWDPTcUCR2vxJN8LgXsJWUHvMnGj1RgYNLpFcTm6ZFLwh7B7Nh3k9hGhP7oQoecHKUbCcq",
  "key19": "2zgKQKEhdYWuKYmEaH6wuaX4LUYXC4Hy7dpWrxtAvyh9pJk5wWsSqzrV9ftbsUjw6KYNH5taaPjvcyVGHjKthe9X",
  "key20": "tuQo4LcNnLsRkPJFbNJUJKZCANbiVaTcTEtVbw24EnkTZ3695w3TUjWanPv8RtUv4vbPDeZJFpkX5s6bzomGDJB",
  "key21": "3TQHro5jnZoa7XN66chQWJxv5w42GAARW8w1NjTcih8LdE49Mf5ieswKx5dHFEyfaEtiYXHkAy5KgdQCNSx7TX6G",
  "key22": "etMUrp2onRfyVFPBAScLmPSKHpYxxuutXSyCRHhKqQHtHmmSAZJAnNVvnQ4k6vswKEDgSzr785Pjkjd6bodEo7F",
  "key23": "4gdUETnuEDC2jQkEb1XSXQD4wtZePjQQY6rxpvbW9fiHp9Rwa6HTpMRkDymd5VTEECBCS7RkC8RaN7f8PiA63c6i",
  "key24": "3oXtRPZ2uM2UjfCgtrFbw9pHhZ7eXrq5aoSwkkiRsziTBqytqbQ7DwDgCG23HNeWtaNLp1D1hsdtquka4G1xSR5H",
  "key25": "4cmbrsrSMRExVu38rWhY8kciPwXER3ECAJtPFsWiE3fCiv945KpdbaW9wieyYe8zJdxMDdvpFYkmKhCZAwUTGaZJ",
  "key26": "LGixCdoRFfbsbBkqk83RzHVYutQ8Xgd87Dxpb1UjgA6dXuEihe1W3FJCJhEd6rPtCEMWnT5ansFH15e8B7BoN4K",
  "key27": "5ujkom26AdovStUDXSHb7678YEdEhyHf3fXR435MxKbwFaCR5QcUDnwvFvHuCLo3b4JGyfYTnzJ5iJERARXxggQy",
  "key28": "59EMPkB3QG2RMu8YYDDm6vwSwxcEXfWYekmHWfiPsdSHsTT8KAx6bfL5phyc98LE3UNbk8ayGUJEg4QJN6xtu41z",
  "key29": "2YuzPF2Fq3FRk6UvY3r5pXW6SpZAsMCuHKmN6A1AmcucRjyS2dikjKbXrY1NUBUamw5NDMGKYamDPmfqhm9wnvZE",
  "key30": "hCabG4D7WfHfPWtG825SxRdvDwM3kEsYaEC44ugJyo9i9fvpgLaXKKXeSbWYZfppL8PyHH1qSTXNM9rYoJD6M8D",
  "key31": "5XzoV21SA519ByHthCriFBmun4YxQteXY2tSmwSeT8LH3wfsF8BCMd96TFJU1VNbqCrtWfHgsZT3Ynv9KVwnCLCo",
  "key32": "2tnJZmm5ahp8u119VvnAtN7qsJz2qiop1Zs48ZPhg8YF5uc7u2bTp7TYQmSmyDmgjPHGKCEsD3RbFhdCo8zyM2yC",
  "key33": "4pW4pFzzFzbMExgcSNvVEuMwLSxuKZJkEkUgxXbSoMFocEoYT5vxdyap7CMb441vbGCg7gQxLj4nvz2Evt2XYMQ7",
  "key34": "3duAoU6M9GyxnUS5VYu9WbKzGuoic6Jaf2HVWzoa3ReZjoN4pqV8wrQ6SKsxs3gVLX8DpXnceUYs4dML2fNe4MD8",
  "key35": "qih5PMmeRZ3Yeaaz5ZjKdbjZzqaEM2yYjBEUMUUVynkc3KKFz3UnfpfrSsRVoHGbRNuRqkJjRn8kkjVf9hGdeUp",
  "key36": "2mtuzKxz7rbWgTvLSnUVV3DLYsmYzhZ8KQsYNtoB3GzVCYCs17gVkZX8b1FRXWWJQaUhbSYDNjYChpmtQCHi7ieK",
  "key37": "5p9GZm1B21anRa3R66FQuALtFVxDmXs66KmgAzW6yDPTymxHoJaKQhiMRNdVgsrsqQQ68h5XAXUq38vjdU4Rn9u7",
  "key38": "49CPKY36SRdNtxJH8Z6aB88VtGMYHmoZVbYFmnNMZT3syqGpwZMUhgoCNwNJLteD4ZeCF7jJWXJTUcAYkksDoUsB",
  "key39": "59ZNzoFNVFTqTHnMKdz675ZnjADWgXLXnqxGMVHxqz85C2xF9VVWcNRz695YsZiJk2GFkj1m4myqoGMLAc9ZxfE7",
  "key40": "4qnBiNReZcSf7xYspZw6iwG7zC2GBAUbaX9qFCqsjuQBJFMH3oZoAUjQcsGW1NVTyusC1rjnUsg9K18KjL9gKqek",
  "key41": "5PL5SxXf8kgS9A5ZXkpfzgfU2aeMsQx2GkKEEgHurc9QNXPatET9fMebqbaMQSxS7oM9X9rPBTmXaUfBt9sM3xxh",
  "key42": "3YwqVvGhYA1dE6XkbVwbxwqkgxJETiprLv2yJNHt7ctwTS3oppHQpSDrdfN4fj4MWZuta8tEdkGj8PHqjHUox9pb",
  "key43": "2aicdet1NSwLeWr81aohF33CQ3JMmAyNdCmFzg9PDoQH97SkzkFEzTyfKf3kLCWUFyYMneJYf2U7uSz4sTXk4UAx",
  "key44": "5xV816rvjt7kh1Zt18Ujm3z4Ab8RmNjGe7iiGrxQG2KDzPuAjDQzwYz9r8FrJx1nzsJ3UA8MZoS1WxChHs5qnLVY",
  "key45": "5DGnPDZcr4Mp9DcKf4treqZw7Rs6kEUnAMCVrdfL28N15QEhWA8Cz3ejM6hg489vzgkyeq1uQeTjgmaDgbDkRt5o",
  "key46": "5VmWUp88fEi4ymyjhL62jU2SNf7z3VNFxj94XrjoM3UCdPEK8yTWJJsXhMcjZVRkVkd7EiSLErikQxf4FG3Xev3U",
  "key47": "5uGMQxx3os351TUGWokKnBCj3jg3BcikJsPrJEMzuXqTyCo5qmW1Wag1fdSFpgiFpCkV9fYZwdRydEAkdJeDgRQ9",
  "key48": "5FVs9NJDAPEnzyA8m23PYpamtSoeQ9kfEhtezCbYjy7bZGSLzivrntSbdVTbWsCy7gH6zJhWMGqkGCN5Z4FCPaEF"
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
