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
    "33SJvW9x8ER91r4HU9yEFsNmjNJqbcVhikNNDfYtFVon54TZFTSH8gMGjzREkUPuz52XweNrGLAL98sbvs51L9Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47eTX9Di9K87k7b9K4cpMptaQQX5Xsv5R4ut6vDn6SUbKu5P3JCc4g3q53wMm4LE8Uxk5TRS1pV1wMeEjZsqBUoo",
  "key1": "3ho9rFBk4wVxzTF9zFhsT6fjD6qXr5q4QXAehqjo7PVB7dZPvk4ie4t6d9MC1B5WZrrbhEDgLDdnUjMCzTEairSt",
  "key2": "mediAQzhvQiqDqDnwqen8A4oqHCqi1hYgSPfmG1yu7vxkEUtmJvVDaStfaMW7yZYNeBD6MoBvVpPhjZn6yfNow4",
  "key3": "35UkAtRmCfJQ4DrKYVnFrwhgDZPePKHzMVn9m4xShA7dm1U3F5rBYvBDwb5TupmcZxnrABdwkWVnNKVzAcEjdxbC",
  "key4": "4oY5yFipWS2wdMqCYJii69yxAxvPjJ28k13t5kt5YKvaSBMAwmHHaAtGymLcsoCk9qXHumuFhQ24uoLFx55CZFXJ",
  "key5": "HRq4mJLiTFfdyWQ99AvaPtxNJBEJuFy9Z42Zts7kUPrpGrUmFtRDvhKFR4VWAPTwvnno5wx2qzboc9eeC7fx4MD",
  "key6": "5Dd1QjdKuwKZircPimyWwGD4nofRqZ2a3uij1bErwKMPn3kZS4Uz7VDS98a5HQK5yHeRQ4SJ31JrqDujgLR2MzEn",
  "key7": "4UQykMaMaFRL5xMW6aT3k2qdhHSfVc8fg1LpbeF2fLtsegxcskFEYLWDQS7yNhjHyxEd4HD6issbpbo1on1d3aSP",
  "key8": "4C74ioCFEfwnaDkZQQ7L6cVWxxia1Rrd3QrYbCdLDYHaewmeetTUMqr1tSRkHg3qnmXbXfm4UfT7PLuxvb8FyTVc",
  "key9": "ZtS8TENwCwE1yyUXStjfCqztz5simKdEGj6EVNRZeStS3ZXwFb3ibMucCs5oJfYJSA4qwuaEsi1jCk7Z3DhDd1v",
  "key10": "3W8wBJQcdX6HPh8NAqCd6RFWN47mtfH1bXUEkB7b3oZhPMtZ9aUw94T9qt3S3kFejeWMmtKKkbxRJByyh93UJKPy",
  "key11": "rjmq8dU1AybuF9yFQ1dKP7mV8bawF3UNgwhwCNFsyibUX3JwEdW6MGAvSRKj8rVz8u6k73s6ZJ2Ahpgtgka3nVU",
  "key12": "bKLdA2SmXZHr5oLHMF3jRkEVRDpPLvaG74zhACevBKg3rg24ZFGVnFfp35JnH3kVDjj1MrXavYiqG5HM3AVPpip",
  "key13": "4iy8qMYAjyrQu6k1dqQFZkpyTjwtRWqS5FRbMsfm3jKTEG3BDFSRPK2RMyLV4dqkBRUDWUisG2D9UmJFjcuW9hAi",
  "key14": "3vhZbsZjLUbWqPZppAssKdqzcER9fm1YLwpL8HnjoSzdyps7HpGFY34AV9KBaTK4Bj5uzufxR9xK2Pv3QTuxpYpc",
  "key15": "5wx9v4Yo3Nvd5pUyKBHkDCYEWBLtr6r7rEiGBgkXvhwjw31sgvYwFJxDNcqvBMd4C3XhyRhqntigzdAAxbScptrL",
  "key16": "34JLPFvyod6mwxWrKC7MBpRCx5aCpBX9Ew7gvHpsYtRB5QgnHDeVrKVn4EuBueaXNFhb1q5ZumGKMWoThWfqcEAG",
  "key17": "F91hnw8GVdmVkv9KGZBAfLwMr4oeYGNDE85J2VHjwg7vkmHmte78jbKRKPtJe9GP7oaJ5UkwYZT6KrsVoKSsMn5",
  "key18": "64redksRD9NUJmDXKLyuivreYN127opCb2ui8yfRwEsoBjAqC5wv1ns9anMTgWkCD24vxonBWccisAZxgCeoYEUW",
  "key19": "4666o9LwxzKKGjo7RrzLipstpYGgU8VJQzdRVZz7dstrpJAnmwLrK9vxLPq6wAP1yLvBjE5m7vrWcDP7p9jAn8mg",
  "key20": "4M4PiRhDKkziPf4V7M54MboRDsHstLCrQeRZ5jSYiWmRkvEpKixuHmf95B3y5cLxTzVniFE4PTnFpnBBVui274cq",
  "key21": "2wgwZP5aeEamJKAXWnEajFgB3JLYqE348AQFUTqEwvkePDgb4iFUpg5ejw5SYtUnziMSSMnhmZ5HXhXjo1vKW5w4",
  "key22": "3uMxfae1m8yPbGf9JAXG1AqxdtkkYKRwWgcRxqaudvZScjpDdsc9TdzSKmwN3oJmA5mTF61EqyQgUtDYKdBPmGS9",
  "key23": "4pSdbAoULW3L4AYbBAAQshQXnm4oPghuNzXn55xCLLxarvq7e2FWAKDuaURRt3piBQNCKT5HbokNME4QNy5e5F68",
  "key24": "2UgzGw25LMMfC7bDoXTWP8xkaWJwnysuaZJWjcMvnXSFayYtBysKg9F6SbHVwVzCjyoxYGbBgtYPTW4dZ1Jm9zDN",
  "key25": "4ftw9z7nVxpeDKFnMoNQXdmefyPokxSWV2NJTcuzFH44AVkrfaudRLx8uUUZFNdKPJWat9UJWZ4UzxgPYw5JZKWu",
  "key26": "5hZ6r52kjgzb4cbm5LYVkkTQ4g7P7JYKtzcGfEtKyRSTiYXrth7zgwZweqqPw9kEsfNxeWaNyMkmtyfT8i2GR4Yd",
  "key27": "2EKc3JzBdbLKjUBLXfmsYY8D7mTK6r9c79cyHzY3W4ZH1e6fA9oZgw6Pd3WZn4Hmq13HLN9mK6bspwLEGLpyQpzn",
  "key28": "eD8SAzdDUetBptoTqc27CpZEqpM9Tnxh3JrpULHcYDQRZkFFEGp9jgqFy8Tu48BbtFC2M68XGG532Z2aGAkTmyh",
  "key29": "12TQnQN3wXqQ61wvLZQnkQ4WqwagoHLfW1xFETekjvyTwTk2B1M3EwNptuxZPx9m5L33CifQQBbN35qqZHQaqsR",
  "key30": "2DPEF9e9E7hcANXFNYNNEb3wXBMwbua3ixYhVZUum58phBwn5pM1cpwUPk45GNCgT3SyiFgvBsiHhexw22p3pdrq",
  "key31": "4MY2pe1YsdqLDE7atyDFsZicH2wAL76HqEEK6QY9MevPantWat25h1mg9BYHTLuHU3M4EseAP7uQf6Wa4nf1nC7n",
  "key32": "2VhmHAStB8qa5q5AUuf6frYwfytNcMUMwbnH9Uy9XyVLYM7HDVf4EA4okwJbAvjTXNQWWp7n2inGmTtC1Z5xWE1h",
  "key33": "5hw4oniFD8JQRE9MWdz4emm3sfH48aEiL9qngj8RFLkuuugCuro1n3nBofy5kGD2hFKJ6xtKDT14LynAyd16VMD2",
  "key34": "5PvKdGKQXZc3qEuJeepgay8ZXjncj9XxXMbCdHs43og7HqUkah7S5hVb8tGGRzBuPUzp8PenGgCjiRVj1922sHw5",
  "key35": "jZsty2Sb4JxBVrjSZBSvWDngZqfReuoZLC6w2LYmSABgLTcC24dncAeJHnHTKs22tVE92fHxsDv9S5U65h1Bonr",
  "key36": "2ZRrEnKFgtwfU6xRkbt9EYjJYoVapNwqcFmjzzDcyj7Xr2w6qCuxqEHWtxGCGpfmeGzTWTycSn9EdCvoqaHqc4b2",
  "key37": "3jP7VU1pwPCEyL2nUgG9m4bFjj3MMgSW94atx6Yua4JiiHnXwwgNJpch1SZec3Gqky6w4GXrr36sZPReMC3jRCY4",
  "key38": "5pZZU5ouRJCe1eZs9oyxAtpgmeEb4k9u4JyaxFgb11XNMSs1eVxSwMwyFDHwAJbyyhKiZXLVUAq4YoDTNfk3RhtJ"
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
