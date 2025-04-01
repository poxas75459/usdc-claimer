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
    "54qJSD2zxyQArtRRH2mNyC3vwLPSN9HTmonThRU1oSN1peQVAJPdwfryGxHEc97pMxMELwqptqGVnGeX37eT8rXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaEp12qd6XitANU8a1d4EVMVj93SSW1wg5VLfpYNA3frVkoisooCeFSJAWo3fsVJJYQfo1JME9ZNjwJzgTUkqcj",
  "key1": "4J4gSivoHFCb6ivtheVp7mgfja3fiPw51Pnw9nZCGPgv3hzAcJp97hBsd7BhxnYpb5nPQmELFihZu5Rm1gyien6n",
  "key2": "2p6KH7k9uqY6PRivYJYJimxbX2ny2wPQZ9ragLi5r3CPNoZaxHztXCppTEdQryHY6PoPZ5rb7FkjWUwqmL3ve5iD",
  "key3": "2A1GTxiCwDh6zrfSoLpY5gPVpiCc8ThMVHg2VvW3rTDDDzSFeCaJ63MqpdPdDjhnJ8V9sk6rRaDAa8G9BA7f5BLj",
  "key4": "66fddVQMy74vY46aXPENwwpqWkxEQTgV4izcNJH1KWKAYWD6jitTGg8bArZQ84y6EbLD2ofq5w56edy62vrUSERT",
  "key5": "3LNHq8SvepuTsho2dcU1sMCSnefpJFFxubZzYSvFGUdjAcCtUiNHaGHd58RRoLu11eBwi5bvD6eSYz5vwntcqcDQ",
  "key6": "4JLrH4XNGsqoM1UmDjTtqch2AZwfwiZDVrw1ds5LSw2mN6rRrt4XjLFqmhFmnLoMXXpTN7uPs5tGsNrgiFsjWM3g",
  "key7": "4thA9mzMjk525Gg1MR6AP8hMks9ST3Zy5531QGsGt4SadY3ETFWiLNNDbjPqftYSsrXZNKGbvPuDycYsRTwP7Vch",
  "key8": "5ZZ2N4ya5r1oKK6M4eDJNYSSus1vjWnod3Z8yjwJKtriDaeVSLw2tNhWLaRUtXXiyb7cqQf9o8THFT1ggE3BPk7Z",
  "key9": "4K77M4zPVbYhZphZiefhSrW7A7i15WzTfP4C7Zx3QpuDY99ptw2XyB8u2DV1kxg2zmmLqA8vvwoqe8tLEgM5wX2H",
  "key10": "DiL2A2R12PokE2pfqrtxPvQgqvHdjRMUyTKbUFT86XiFHaGJwZ5UiXGwQrp5VW7gKNw7cZ4GjCQ9iUGVKA9pPj6",
  "key11": "3tjizMviR5HqTBEkwNP8c42vy3sTL4AFE6n7pGckymp4vJ3xb6idnSWK8vN5F37WAUBsZH4mi1Pswo8gEid967Ha",
  "key12": "28NkxwgkYqGxAZWaFpCWEJsmZviSMWbvXZQDkdijfBPXw2ao3CVsvRfYBnCpNtLhofGfRB7n4K2CzXaiadpWYPsF",
  "key13": "53baD7bQXMffoTHvmKFTcaKThJEzy7gjWyYn1B6Prx8myFPmWZ45bxbvK2pAnPzA8tfcvTwUoDv8GXJd1SseWaMx",
  "key14": "5WYiZnKxsCiPSSVC4PiTLkHceqrVSc6LMjLxCerAfNiuxHGMuXQtUdpn8FPwTbh5Y1aq9xzap2sCdvD3XjzdaUZk",
  "key15": "5sbZsbsKxvFvUzNiNGiJoW8DJ7DEv4u6zPVwPcQJ5jB4shQbaRSVeKA2qUvN9Ch62t2zCxWzW6sfq9XrNYFwGJ8A",
  "key16": "439t4ig7vaPwDKAhwYaDRw77z9vwCXL3gsTXVcqqU6TNmrp9Y8pcqih3ZpHur1mdyESZ4qQDr1CbZJKUU19BPu2m",
  "key17": "5mNFG7bKxs7g5BtLSPYRDyJAi7A6vpCie6z8LaAEhwobP5PNnSsKkn2s4TTzpnjSWKbHXS88WekZSAV4zGBhoRVq",
  "key18": "44zLMidrE3DSDARx4QWGgqCsbJi7iRN5tmjsQe5aYKAK9DVzHm6doSvaAqkM1zaUYqtPPAtt94BAV9SdiuHiLu2D",
  "key19": "26KXQbhWkwFTPUFyLxMbAsaULCbmL3fTG7XsYY99ktby1nLzUpHJJKvimVwPj4NQTCQUuHDGtPmUqW11hyuKp8yK",
  "key20": "2B9YJtUqDugMZAr42Y6AaftsbvbUA1RCMdG5X8xQeaeSRb42yP37PKUiPH99gSRb5GS2nk1DTZPiuuE1bagCrM3v",
  "key21": "3hmW8tUPtNVaykAxWruuBadxKLQXGkrS9xCQrYrHXKvsuQRzGpRmRJnACM1LgTUp4wDJ8wFn71vxNHruRry89Xfg",
  "key22": "31RNNU5RJyBjv9WdKWFzVCZKtNAUfLUSUoVi1fR7Bgnz3qF9VyM9fdGkgdCUEf8wBK67693V7FVewsXSsEeFvDUw",
  "key23": "T2aB52mbQwMYrSV3WuogWHDPbJsVEWAHRprm5Sv1UQc8i66BJJ1YNAqGmA2gtHVXc84pQxMuDeBk5txQYrWEkSE",
  "key24": "2j2XFvhMf9NbyNXWQbM6KSNM7BrQjNthpc9FTjeDvpDB3qPkB2izGKsPzF3kX2mfGiQGL71mXE3Ji7d3UrqErYM8",
  "key25": "467CEHSqEUv9fdQGdwahHLzMdFdUCjyuPbvX5PAfq1WwQ6vexnJuaTqRFkDmP47M8Yt94J6bCtQDgEaboRAjUcPv",
  "key26": "2ptyna5upyyemaR3JweF49XdikrvGyyXCMPTM5iasdPcC15aoe5MwUV6qEXTVzaPToNiB6GCkA2EkHgvnCRSERa9",
  "key27": "4a9KwoWDDrCUBL9i5JkYoti15PQu55kfKBnRYuwaurNtA3NoPwJ7f49AZyK7sa7mDQEVNVXZ5aZnznaKksWwUuGE",
  "key28": "kWbhZLYyDiooXTonofZXaiLApexKjQHQmTZcLigKiQV56cZyDkaQ6UoVgc2bKUkHAAA48Ym325nYJ5om5V9h9kc",
  "key29": "2PyReeAnzvj1dSkZoPCfdGdBXLP92zLwvsReKFoEM5v1vvi3u5mE1Rw1J5cZ5fRVm27qGpeH9dKV7soHxPKyzYaQ",
  "key30": "3VuSEN9RnGsHPwrRCqpcvHJtED83MthbEYcrDJrDByyrCE8f3UDJEwmXLqXefiYynVDR8bcEtpeudmZnZqPjViKN",
  "key31": "3x75QMFdvkZGxWXiizRbdR16KfbFCDX4JkV6pjVFzvKGkD5WcJpbrXny1Zc8qcc4kt44i7qcUxdyk9nH5Hb8qN93",
  "key32": "Qk9Fu8vWQG24335gX74Eaze6ZXWYtDKLa2toXuG9x742YiEZffDwRpdJrFZr1xYfHJGpnY8w8gXDGb5MM3EpvKA",
  "key33": "k9e6GKUitYRCbbVPVY4A4izBHq9qGBTtpDFYXKowtL5VcyBvbXj8V2ie5ZpsnC9ty3hJk9sT9TVnBjFXjZwYo8J",
  "key34": "5Xx3ms2CXjyTwXnVpc4kHXGsM4sgeUnCvixFNLzCcSv6yrs4SjyTpoySvgfo8sVx4NnCvcpw5vSS7kQEHjnjww2m",
  "key35": "5Y4SgoPzDf2bv8ihzCtfpNqZBnQViwyzcUB93EmfMxSDENAFgFiHKsMTRh3qwRXM3N1K6bN3UimKoGDho258Eqnf",
  "key36": "62nkNFgKFTCCzZvJwLDcj9m5ZXpgxyxXQHUZZpkaMVyVdN73pZvpourSi1JEGajzXZiWmWMrGwPXdPHDmVEZQT1W",
  "key37": "2xdTqCDuJfriHHrJeTom6zhCyXgYAUEG4syA5u1jRmMtz1pwW4o32SWynrzLyt12m3umXvNTczn5AfChnEwZnos8",
  "key38": "fVNfCxKfmfFiBAEK8Qpz17Fev6LG5AofZDMJEPnuB9j4tmsBPuwTbo2MtQbvXBGpQ6jwewNgrKxSjDt3tC25Rxb",
  "key39": "2DJpzUfokKFwNmWqTs4dv1Vi4k5JdiCk9W7VpiC67sFbKVwKuMSnnX1PHQUdEUAwAhRgqj45MEu25Gw2GPc6eH6X",
  "key40": "a67swtQQMrkoUcL6TroDgpHuBrCnVBH7k9HuJ6JnVW7XCDi7acjvEXPKhsq2y2af2vKcEZ2ZCXPwUeuvtx73UMn",
  "key41": "2ELbZ9531rs5v2mfhdxbyyctk71m96k1X2PqU1HaLX4PupPpdW9mN4FKtzGrp4Ur9d3u1pXrXTyYMeRzLcHF66vv",
  "key42": "3qHjgykZk3hAF77eHn1fqPBpaFyxzokNL2xtsbKMGMkk4jLgeBwnn8qMSQzV6HrkHBJbDvMP46jH479iHBzNpMnu",
  "key43": "2AN2tXf9ftpXYZcis6amrri3ZmZ6mi6arsSZu9f6aatkKXmtQkdwFjLBSfWKWhgQFUf9enmQNGtDxkHDehk4wuXM",
  "key44": "21df6mvyP2tGnWFTnMaq51rHrMugjSx5e8gkwCrRJ7iJV65eNXDjibXLsypR4Z4FqZ73bWEyCW2Y27rc1qoB1ztA",
  "key45": "2B7bannGMwidT26KbFWZHy7ajgCdc9c8uznzzJ2JQhELpMScE8Pm3F7r9xF1kVi4XoTD19NRXiauH7yM7vDHTMFi",
  "key46": "2gDySxiJpAo813FH18fimpkVU8WSx24UA1MwwMgk3SfK7uWLtoG7H9rNYovPVDNzj7kLJWqcUBtmEuV82pHK8hV",
  "key47": "4GhxiZJk5TC9hN9uRzPJqhis9uCVqXW12CgJpSHhbMffiZ54xEBopLV8NY42vsswHMjtRUp7sfvJ7kEAMjRuDkuh"
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
