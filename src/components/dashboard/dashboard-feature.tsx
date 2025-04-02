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
    "BaQjY9btkHinetsZh9WCPuvDYkPUvUZ3WG2HQrC9u22hC3gJCsj3cavinrNCr1ez2SaS7yetniNkdMKxFn2oHCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VHSRRDSh6EwL1wgmHDZMUNPnAki9kFBSB3sGZZu5n7QThF4mKRjUwJNs9NofFJKKh771XXc7qNVBxDMMCWpHjo",
  "key1": "mwoRhxbYpmKhdExVJNbSQaesxsJN6hJuCYXq2tnhJZSRZQ2JgJW4oTB7conoXjrGfbR8jaqxRiB3nFtjnx7sAiZ",
  "key2": "fxptfZrgr6pktCbhSjEzuPJW3SzhCA6JkMoBCKA3zZPXzQKXD6BT1xRhb2zroYDcUfBZUPhAtJixbziLmEiQV8K",
  "key3": "5A5tkooK27q1UxjJGdt3mcgiBgkeUpjQfr5RxNFN8tCdt9gmveFXwNbBfMnddfjzMXJWCSUw6Yaohxyr6A4rNJxr",
  "key4": "3qFNmXRkT7L4XqGxJBgyNWrpbAkcWDfEa19oEvzBUvWGPqAsbS168MnxUk14aSG6eszXBNnueqU6jRgBreHZ5VvZ",
  "key5": "3ZzA5PTS7ro1vk5LtjRgLwoDS4qQUpfhCnjhH9832Pns9xB7JeMQaUNK4WVrj6oo59s4Xp8he61tWuyLYKTdkVUJ",
  "key6": "3dTzrCWcjP3NTyoftF854FQUkcVmuWM5WEFfpzwJcPrgkDK95gmkYnKBuRnn1QKruwkFYhn3JX1DFySr95cifFcY",
  "key7": "5x999uA6UH87h9uNj7wvVTdem5g4nccBxKrGXKYjWjKhfNbtZXkwcK9ucmgKuxoDBQwTxh3ftEbWycicD27zB9Fm",
  "key8": "2GZgmLzbj6Ny9NXfhwvNawFu6EMs5ShbiDoxzbfKszagxkUEcjhRWVTF2j31QQugb9G9M2YbiJH93aTKoqWy8yGS",
  "key9": "WBmELcmQMzKFaWiA6xniequfecvtZGF2Aeyp8sfaqm1iNL9zEyWwsuxyJHiyC8KwEMAfsWebidVA5KGU7DSJ2M1",
  "key10": "ytAhZPGd16M8uT63SzJaF1NqBRLDgiNFNPr3LVLk76NATrZou8KDr48X47fdQ6tf485tAntPBkkvkLLutguXwKW",
  "key11": "54KXjSFYLKCpcFjuQAhJ8S41ExiS3N3Zn5czZ8qht9VMx4JnkF4bLdFJ1a5KqkNVyMQyVWgL74D5BVwiTqjdEtik",
  "key12": "WN2t1qtuD7qjLoewHR4BCNcDcJj4Z9LfuY3UMv2p4c2UdyjNS2Fy87yyqVosm6L2hVg4DbwK7reuRTNkzSyUfRZ",
  "key13": "rG2Xxq3GxqgoaVwqEGDQdQV8v7AWmBEDMum3Ck9vbyea6QFnfug3RjEEaDNovKRBEjMN4muUmkQRkSzhhmCarZh",
  "key14": "4AXhhQW5nKCBsxLG8B2P38gJ4VSSWkpfHjoi7cvsiT2ViNBiYRuYmz6GhkMCK4BWojSUhHK24Fp5Le2zPpa3MCLU",
  "key15": "3aPetcXQR7XzcXqa5YrZH1jbCvaMiL2EConxmS5vpyjJ2nXqGi8QPdb7P7u246MnYFzUYgzzGfF8ZRhDdCBMo15x",
  "key16": "5S3mBVBV7AXSbri9XvXN9CXqpzqw8rFGAPYWReA5g5GZbueedzuZM6ejercuAogAZUUgdFC61FXgdvTitecKytEN",
  "key17": "3gYaMeej7aMq65gVYnLjVP6RTimFHdK7hLB1WeG7RpTSLyv9B7geJRu3YfH5AP1w6JsrCronptmN1P7Qh87kaRNE",
  "key18": "31bEd2ZDsXyx6h1LaR63BK4opNBt6tWD3DEyHnni17tV3mQLX1MKPKvNkheBXqhDnEbQd1fHLifimybxHutVt963",
  "key19": "p3oBFgaLqX9bMYQJ5nj9fdyyAwvaCXH5N6hpjJfXyCt3hVg2nfVXtabgs1TVnzXdVxmnZj7LFdBYLJwwT2rswtP",
  "key20": "3FPnwgkx1YoRA4ANewzTLajbaBKuBk1TkgEDTitLG66Tb9zwMVva63YRxkuA4gBL3hRTjRXDNxWGdkAbiW62uLZv",
  "key21": "3qNYif5Bo8dco5XLdvRess5evG5zqgQ5uaAYarpxyyiAQTYH5YZZSiEtpSxrA2ga5GWyRd6Du5oKHK2PYfLARDnM",
  "key22": "5pfj7tADN27ZufGBJMUcbcVFk2dmhcSc53WTFqjmwLo2kPPt4i83xwPF6gejg55WRkRNMhftDhMAZn6Frh7buati",
  "key23": "3oMDiRdWiLZH3nsGY4EcaUhWhBqZM6pA6moc3yse5ootMkrUtQoDdu4BvDaqPYqjTXNrFG4nDcTWdGyUyZVg6QjB",
  "key24": "3yBdwkFNNENMLUG1yPEcCX97cdRy87E8G14xP9wsg6PJLHSaP9gtpHPxoxGRYmjru3biehG7Kes63GvMdsHWPUBi",
  "key25": "2DQQNMv8reKRcqb8F6bxSZqPiUZSnMS8bgqpCmL45K2GicMxWWqcM39rcNz7yJ7tYENThY9YaMPDTjKEVVEyTbwb",
  "key26": "2hUpYUSMjFqcHtF3X7JrwkhuYEFBKE3kEH8voCSokoHnUCQ198XuLxrzEu5QuGqKefFxfMbt4FkJUiUXDCLVUEB2",
  "key27": "4qUwbouHpGfYZNt4NHQkCv2j7wUCFYHTcCCQLrg1Khhz1rzYTQiKGRFX64DXjd7C4RGCE6tWZ2jDetvwwST5oZfj",
  "key28": "2tL7vt2F8oVZaDXkdbMw51vgj7koduJZ2sk3DuQkx8RAWiJicZgkE3U9RGLV98UTShXRG8FppJsA5fdruMp1kGjo",
  "key29": "2hxhy4LxeMnKgC6fEeLrrS7qfiRjdrFHczjxCV7ZfnvCjuzY22gqb3HrSwzW4eG88w3jhLb6yScpVsp2XF2n4tdj",
  "key30": "2YJcugSYcEaNZZB7TnCeJyksHV78rVLPYW4aJFgZNJYcirAXA8T7uopwUSFXfp67mNhBBwh9vX8tSuNSBj8dchNP",
  "key31": "3aiBgYWdzg38sptgd7CrpARE6fwGBGyy3gUrhYJd6sH2RYJXiGqr5wEc68Fas7tkxJG8hJmswBFrtB3B6eLcDJ12",
  "key32": "63AW6nqDrYpW7KBNWhmXmBn6skvn8ZY9NYH4q5cYkP8sZjeKJ5cRTbBqkG3gv7EHjtJ7YBSjPJCgYmTAKAifPRFk",
  "key33": "3hZTYAAaWWP37VvhRtuEZYZEk9pdG4y2vastzYfqFCYwQaBSBwZGHeAfE5ktXDKTkCR2xJDuqmMDG1gtUyED2uA7",
  "key34": "59dji1PS5dKFnC3yk8gGW9cdeJxdrJqqL6MhPXmVLUS5MaiNwm6cyHi3A2TW1nfBeiQRTidnETZMAMhZY9Lp1FNs",
  "key35": "8bPqcuwHM8yvL182zKyJ2GYLmzHHkVP2FFBXzjvpr6LQck9SFE63WeVYGaMqKECTnfRRqaDai8M64DQe11Nm5XW",
  "key36": "Kui6mEjURDP9GExjDhNpAkcBANGMQ2g7z19CC8N9iGEYiR4FDgVwBX8DkksPsrABo2rYMsrZGDDnEPRkNofdUaj",
  "key37": "5HKVPq4Cpswzt6j67YWfVRKqQMzeEEf3gGgcGkmk2W2jm5UwGwSpr3DbCW7SoMFqp43HYf9L5qAFzs4s8myqG45L",
  "key38": "55XQtu3oynq4bAhGnLid3E5JfKt35vMFz2zYmCSY5UkrT4ZdCnJeo4KsTEwkf7GiVJVDGJUUqXobYf8BGjrj4Zw4",
  "key39": "4LGRsL4BK7yvbQJqD3ydMw3CiAovr7j8HGKgmTcvTQFLHGmkMhgaS7SUvjZRevaZoyXeZJn1baAtpW25cwJZkoKE",
  "key40": "49sfimvgH7X4dfCSaezEubAgQBvhDcwt67tEu5yg5HjeKMiDi4t1Fa1xjaFgcczkjitqd34mUnxJQ5jjzbry5smD",
  "key41": "usSP219fjgSouVxZ3ub26MRYuaYvJMANxvZ1GN5uVjC7duGqQ8pzbVvbiia6fWxawhPvuYoDkiadKpmp6N1xKsD",
  "key42": "6724i65WZzExQvYSRVCTchze8LXBLe88UXxwdZgR8ysMzt59sXnJqapqNLm4GkojLT6hjbpBUPGztyyzyPBGNoGc"
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
