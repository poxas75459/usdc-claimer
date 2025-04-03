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
    "5MbSD75MwEzoZFtR9T4J4mooRozrDmuGAmRWWoiHey8jUEpcRbhnMSfH2ZBPi6DSAF2MrWXcpeAPcWbkU1ikFmHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGLDn74Urc1JSSDo86PmbBuiU8baoNq7MJaEcennWNMnDYhsaYxzyWLx1jXvhRm3aKaudgBqU1gnYvHqj7gEkms",
  "key1": "5AmJgHCjVs4e2pauooTaJ2tRPsdD7xTzrQTjbiXqfNx89zodEc3jApUgumyPHFDEjNHBdRqXnRooU87L84pcR9c8",
  "key2": "3eSwiYx7p9juEtMihFrL45W5v13yxiQVeigDRc8LrwA2obChxrGEZDNpt9ZTeiedJ7K2Bu3WAWJkrJJemtARTrje",
  "key3": "65aBLwx7mcnexK9514Mxipq7CtUR5dCGqC1RUmBahVVzM7FAStGirya9RWshuDzkQzTRm52v2q4JzAAaa27Qhr9F",
  "key4": "3nibJgVgwUQymkeyrdww2uWRpeTDJqmqaRf78xZW6jvXihNZ498UaT6pWrm5Ezn5nk8pjaKC3fLSp8ZTTbrvB6Mc",
  "key5": "2jj9kLiGdbSS2AkcT6kKEWqwwgVwaygpi1L5nnLp2GMhHjuuXEbxuSkPna2JsJsHeD4iMZJ75ASq4jf8NGxwhJiU",
  "key6": "5DrYsScaLyxzYDBRwWtnbRw3PTvCVpDnwj1rza5s6wxjxZZkNG8sgX9yjnCRzmNUxGH9UmzixFnQDo6UsmzkaXBS",
  "key7": "3sc6HGG7sNmEiK3nrNhdHHb6bQi9HYT7zqGGx3yFDKWFGR55Hfpu16QX6aP4LDLej3ygTBCDrpfURNFLbkuzZUss",
  "key8": "5gz14m62quN5yxvvmGNGRfWXkqPX1TKvPF1ArYMzYFBR93RNPSQxz8azkzU8xTeRLZZYUZ2CVCoLiaYKvwaRKUsF",
  "key9": "2nAzB2SmSCGC9yLVwNh3kHYRByziL4vEwYyHZ9kmY7ssHyTvkGv9YKuYnMfAFUiL1oSuqTkhoh7rEPuzX4mAzN4N",
  "key10": "3tH6bmGYmUYjDyBRMM56eqwkAgMxkGEh8STGWjhuv2ZwZ5Fvf837V2gkTVXjm9cdRGNqi2MB2PaHBgGT7pACe1ae",
  "key11": "5nuSEA1yw1JUwsqXdeaRGNxzExnrabHwtAUz24RLUijTWDjCbobp2jfgjdENgBz5pfjMF9NjfPbPXbqfWgR1jgsY",
  "key12": "2nUHRSQXYF5z2beuWJE7KaRuDVmWRYUMWjvhjjvPm2wsUycQAKAFaJesHDisrJYCtHpibpLN5VrBPvvrvrTLchEv",
  "key13": "3jjyiux3N1WM1wyU1FvYPCWtWd93Qk4mreibny3Z7o2u3qh6RgBwJvaG4cusX9s1U5eWrqHKnrBKaat3AJ4pBKmR",
  "key14": "5fzhV8usV96L95LQE1TN77M4WMAUrBskyRwJZickNVHGaoUMTU8D7AMFm2bn3gAmPL2nZD1BmM65HHTuRFV6SZ2S",
  "key15": "5wwMZWdA1n69QJS66epzv14yRfwTepGmaeGGDoCH2mEngyUCQUpeEVHyPiknNxgydQhaKX9eNG4P5EXV4m57P3fn",
  "key16": "4F8EzL8MQpb2xqN6EndY3xybgYFkvxWtwBicRq2ELj9y7BfxgzHT8z3Bdfc5Nb2kE3NduLj78Gzpmx6BMQb6n7Pu",
  "key17": "4bdTZ4hABewq6TJg92vypGSMwBsnoxiQjbHnPbsK8xrZTvyiF1Q2xjj7zKxSH3H7fVbX4wyVX2ADPoiQ2W1QDYgm",
  "key18": "2yvbXrwh74jG2SiXqkaUB7seQBLRDNEjVck5vMZ9Szb7CRc7PeoQGpR1hPKioHaAthr8oysjGQueGE1sTiXMuPfT",
  "key19": "36W1CDJZKsZ2aRBZ76JkyHi4MRYWE3hoJX8K2LThnNtX42dPv8dSc6KpwuKpMbEaNAfEVo3r3HFGYEiZP3QV5h7c",
  "key20": "53vJ7uV2ntPypH2EhaPsQaA3BU4jMFHo3Qre96xDXvrjZ69iFXy81Ww7U4nCqeq1C2fqA7xsoaBbf9vbLPSFd8a8",
  "key21": "R8Y7U5vYKD8KhyRJRFi8MHs5cW5Kgj6F9XBKoVK77uioafr6TVTYUZY635yuhqRaTg2RJEh3o4a8c6PzQN6g1WP",
  "key22": "3S4vaUVoE5dAf8VefZxomQ2piEQFaRaHZkuCxyntx1BCVusPexbThnTJD7PGSfAMX2na9waCtkLVH8Z6B84AtLuG",
  "key23": "2nc2EjhMPo6cRVbVSGoPJkrwuGCajwhQsCeroR6p4qRD2qEqqHrKZ3roTZmPxKm9YxepnFS9CKLA31acyiB9m4tv",
  "key24": "59FHDFxtGRDJRG2GUpPSRFpzKdZ1BnfBa3XeQ92D8VnMmjyA97VtwQzGB3v6tgzgb9aNfUSuQCr7tuCx7iqxhNKk",
  "key25": "2wUkuw26NxbKpZfyEP3CNzcvMDajC1Rm5ZPj5SLrLgFi4rEpcqufxitfFhLmJ2AgVE2CqZAByC6oKRnbv6gCqGwt",
  "key26": "5Az8EManKv8npPjbqHHkV6xGhiyL6iGRTiZN2GGNs6jaMd1hpdQkrj5CA8QyrT9sshcXVEnPcxRGuybHXVHKgfwZ",
  "key27": "2xUu1Q2rAjxMvVHjZcT5sj2KRRDYc7JP8qAPdH8o26bXyKoXdR5yjYzHErXD4y5HhZiLBUJmyeFJHyrZqnuiCTKs",
  "key28": "2hxyG3gXAGGZtSRpCBuYS6iQTZ8XVWTGZYPdAF6zfEMUForDCggHNYEXBSNQcYT5xgRFXVVLLg3CYZrqWZdkrH9S",
  "key29": "2Lqh8gWBt1hWA6naUxrkcY1QUfJoQo9uS8VXDPg6sHfYoEcZAaiazqEARthAJR5robjMu13KNxdZxfQVdN3Vyu7N",
  "key30": "3PCawkQYbu9TzZQBDZUruTNjkau3yZpgg94YW7Xp5V9zbLKbmeYgRGmwu2PueiyFetS6MronEXVRgnsKosErg4h9",
  "key31": "oHD2y9rKbbLgyoBnYCagu3KVMhdyectJfzvihdHc8oUBbaHhvoxwwhsccibm39J3zaMW1BuspeXbeFKkLh1FRR7",
  "key32": "46BDQfVRRvXNBghDVy4p39Zo7a9WzoEVzjhrcaDiF2NRy2cCUVEsgr8xc5RnBSWFm5PmarhDNdHgcfSxhpHN51qb",
  "key33": "3So4qsaKJAG3S7J63HookKEi5unoebSXUdDq2Up35SRD78mziGZfXttE85BiLTWnZuFuRUDaXT1TxXj5WJLc6s9f",
  "key34": "4DLUNF5NQinoHiDnxA2o8dNTGwsTKwbS1EMp7KhzGhFDnzTzhtvuG7XJ3UHxxPjFvFmVYporXm9d6LDDs76gz6Sr",
  "key35": "3NQ8CaouWkjVABLizRiZoSBaNovod8yBMjvtEXJq4kiyujobkmUY6DwQ9w3tb8eNHRP4saxsvq4q4AF2qMGrCzyF",
  "key36": "3vuWuaFWQWqaFxUc3hwpMhaqgRVU1M9SQPhsBGNeCrQiR9XBP2nuSFV68b1G9KTU9VPqn2fsygvpeWub1icyUNpW",
  "key37": "3YF4UDV6Eg3mNNdMboEAN2wcnPMsT6KgEuwizKQNCDMArDRKbZavBBuSvB2txHtZvbqFY8E37hDEMLwVVKLs9hVg",
  "key38": "5e47DTo7S6FRwbCdTwLrXqL3jcqXRtctsCx1X5K7CaUnvBXDhGyLFdAaHUSeSjpWwgwnUg45awjixQ189PS3DhJ6",
  "key39": "2TPiebTiLSMPLp1kmQu46bdzUzQzHhZF1rCMaNP6TvKo7m1wVwEbAaZPXW2QZZ837fYbei5zea81txDHkQC5hZa5",
  "key40": "qH41yKfBYmo8b3vXZD4UDBKGHDUPzU9tbw7wnvRYPT3ujXfmhJ4ZpLNFswTJTYwuuXKMXTfxFyW52mFfF5LDVhE",
  "key41": "2rXo8K7nP2wnoZWwon3AbR5U7HsPTGhYsPeRR3BdSUPeXP9HP2baREP9eAaF9GL8CHd9xW8u1JF5wGtVgankDn4",
  "key42": "2eXC7i1AHs7hYJ2PLxnZtC2NqE7Vgh7Hx3s5a5EsEoTZzWv2h1qF8ejVszhbUkufzoZKNhc9VpoPVEein34D2pTm",
  "key43": "2yqDD5pKYALZ3jPAbW7xzEbMbRLG43peMADJiU2rw1TN9ABo4DbxJzvRNDAXRo9VP9yXLSoF1e5uDzYSdY2szRaz"
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
