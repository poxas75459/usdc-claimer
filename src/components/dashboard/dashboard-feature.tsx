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
    "3HdDkomCD5rNjHiAMjrvsvgx8TyjacDfzkSnAM8634EpV5XKMX98LNyVu8qnP8tNAEsvcFUk8myTkLfZs1bZHnRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yfg1voJL9kBszYatLRvL9CVmiq2JiAc6cF6K2hhGANpNBvJgFFy8K5zoZSpjU1ZUxXm78xp56eFDLAx1x1PLPA6",
  "key1": "2B46oBeT4amfVbNQMybJDu2CMYbMhXLMpP2RhaXQSpoUTc6vDjwhwb7NKqwPnARKpLQbb2QeePwrcAaPa6FerbPZ",
  "key2": "3ot1tDNThtT755wUHeVxoJEuSPm29ZrSnmATTiGwU4pZvsajvhT8s6LFeCZRvX1umd7uj5rWegX4PkXyRNjd2FG2",
  "key3": "G5XK6MdkK64qidoH8vFA9vFK5LXjLmeHG9kvYCAc25JBXFaFthksdgdrVHr47qQU6VJD1x2DqyuqRA3m3MT8wuN",
  "key4": "3VnyAuhUhxA3j6kNwyNXZGNVNUqZUiKthgyaWQjnMoZr6NaznWQd3oLxM4Y3EYf6dp1xdhrMMXTRsuh4hesxUdre",
  "key5": "5N7ebZPjAAg6iXwVT9fD7EmrQ74tgWQmkWR45KKvvy4TPWchreNfcX4rqoDYyp18dyaMnKiteBTcgHqJuYrb9oY5",
  "key6": "3M8Xf9ymLVDLZpojFpiw2i9xC1vUYEqntCRoY5pyUnzWFPMkytSK4r5GoPCqFKRQCbSnWygYciESa385Nw5k86e9",
  "key7": "7cg9ftEbrTgVqNQLbDiZDoLwm8B5x7zohBA53GaCQTVoEPEeLaopTtvCo9DozXNabaoxADPX6ox4aeomMRLtmzY",
  "key8": "ekbLxRvxDJnUahHqaj47ZYAjMhPaPoA9artt9A2kbZJd8Pt9piHThPZiBWn6AnafxMVwQCfdPLjGAJF2bVU5KJX",
  "key9": "2oJWz1BRjvtiLCL8YHHoVNha5pPcxVNysRkqkWBzkQ8krVNBNWY7tqDQmwQaJNUEjjD4BmG7dWpMq7HjPbyooxL5",
  "key10": "3onqtvcx7cwT2eyX1gVddrXKm4GZxkjZpqwWWGrTHrUJ4JxqECWdqeukoWoWYUCFUM5jQytYyEnfxWXQdf1rVR36",
  "key11": "4ycqpp4QTubMRnZcaf8ZfMLTRnq8aGzhukFQqzbmuNhnjbjsDiLHdkDijw8B3D2vVAaTwaH4z4JAbLBRuXgP2K6U",
  "key12": "5r5EYFsMe3djysJApk5R2syuGphvyMn7onvVhVusBL5rRpyHwcLJd7kLA48PZAXZxhnUE2Yx6yMr3F4LQvBMsCXh",
  "key13": "4XyDUtU1sbz9GXYhv4Lzo7vRmeZEivT3qsPE3zsk1Us52kpxaatzCFmd6ZC6jf9h2uj3atfe3AsWhU44eXv4vruF",
  "key14": "53CYZxrRwo5w5YU5aqUajUaEv2iVeJ2TxV38AerSqiQv25drQRXZHGWHza33rLheUnTS6Y2a6gv6rVsVavhmBeZi",
  "key15": "4evs4yJFBTKQVE2kMSEkERRQJWnkJckykV6sAKr3uYpN6rmCQpWF8qKRibmgfadFGXfW4T48RdqJH94q7jd1c7V9",
  "key16": "49FxUCFrcFsk1Cbv9Aw2bXywCcSWBntGGNk1Mwr8PJpvot6fBhU9M8TJqoNChxxj4jfjXswE8EyWQtRKjDRRhW5Z",
  "key17": "32j7JF8NQ4FtKxmEpZfxoTqpLsYh4CHbwQuaW9wfGURvC3HZsRLa4mPT2pkXDpSkqLyPLULSAoJqoRY1CqTaT6dg",
  "key18": "4xXDh2SuCkPkoMEwkAzT5HtLipNYpLLEU75hYmGnGAbKn8fv2edXBHf8yi8xTtXbCoKqxkW1FDYJZR7rJU4yEfnY",
  "key19": "3rkK1JGSnae7bvT1zG1L1yrfZgRujYm3NVYxiCSHAB3Sgf7g1h8rfEQre3wBMqSozrffMdAHfzsZfpsDiNBxBLH3",
  "key20": "5iY4C5e4hHy7gs84EMn4xbmw52m13QF2yN4b868FzuwVjJ4UKQuhVwbTJnMNy4PTzKJP85nydQ8VymnFKqbt82Wj",
  "key21": "2LfvuGnnXpYWvAQqDcNsJkqF4yULADvwuVVLkvPE461TzZkjp3n1ACDBcPBFfaGb35XmKNf9kyj6XCGHvgpdbxm8",
  "key22": "2auudTjhpoBRsJAQECvpUoFEXC2c8f4Skwtb6fqk85bg8sSAaPgUeKbowEJXCskJPY17kDDSG6VxcwEj7TJZDEzi",
  "key23": "GJH32sUucbGBvvWXdbpBQ37KYSbRkXDSQyxmS5ciVLrcdcwW3H5xPi2CzmH8wHkcBZz1NutpN9VNyE5i7mJmBQG",
  "key24": "2jjGqjgSjHPeihRehL9dSvdzdHASMpdnfbAQxXChbokw9X6W1Mev3XTwMbD1DyyjobUVqs2xw6oTdkKXB8qL7oW8",
  "key25": "3c2raWmk8jCsKPup8KqtrSaneyNH6P7fKJukSbhGSJsfBqJ5bYTUwnTRg8pyA4huSHHUQyzxg1jdAZS8jF6sW1SE",
  "key26": "2uXtWscSkLNC8yarKxDiGjdf8JS1YmXMbsNyP1oNPyK71cj32R7QLLM8NWq7TgkQgJBoHtmv2S9h85wano1ro6vs",
  "key27": "3ksEXDiT8c4fHDfCHVgoqFFY8J7AtHC23W1F4TANCuGgmB7qoXL3J7Ldm8brWHCe7UroFqGJbqHSK2ssAXGMiCzC",
  "key28": "41eSgkPsHnKidoQtUGvmsQ8hvRNz1SYjzBf32f34kczC5DWGq2fUqqJwRDxAyRfD3idnsJVKgUk3TFMfAHpvMR3c",
  "key29": "32qSdUm79si33cRAsLWXN1EZpJTsnN1C2do2zU1rhyDGCAXpVZqax8stP47AtsgJs7yJL9RgKH8YHGHifhwLJQBg",
  "key30": "44Zx8W2ukYsP2zVFyKeNZ566GW7V6zxJ3S5TTtUkywfxK5HXiWp9cxFiMqZ2PNHZHXTowWi69dbCzMLCa8RLB3We",
  "key31": "3pnQoCQiRGnXFxohbe3hjjwt5hacissJd87qTn8EUrDA4c1T6eK2FsDEKCGpokRUywGANKt2rfCmtTUiVrqP8qPt",
  "key32": "37dSiJmDp56UvpXA9ViqgPs5fAAgRgWQEy9DmYPhv6UhkmdsHZFV7rEYc24UTUkmP8BkNuvxFiVDvQy83LbFqBun",
  "key33": "54tDS3xk33M2sSexMJRj1oJBdAuxxbY3qWp768btRmQeQ1DJhGXRQhB9VwQ1fLDZWJ7N5sqHrV6inoH6SYcqPhDq",
  "key34": "3a8D8pwsPeaU6k9EweNrtghpAMAM4PvHbgDCcDk1kt1Fk3kdVn97PcRpYcu22uSTGbJviWvLSFv92s5YMXbAkr2N",
  "key35": "2rJqDhu8nXM3peKwDU5zYaLdRD5xcKeLmKgcW4wGEnaGHrZd7yEC3TXkvEQCQkJEe29p7yyi4S2zeKY4JMXmpqGz",
  "key36": "5nyHDXHEVGhrXVVXwQBSumD4coBNCo2EUSCNwjBhoKkTR5JVhzF77fvRESnCtGg9rbEgwraeowVJgyF6jk1EYLmx",
  "key37": "4w2WUE3K1h2Grxhgv7CUaawpAhJpzhiZxLvJYz2yg7DLfJLtg7xJsT2L85fiT4144DxAdSn7ca15wuiF8JSFqirr",
  "key38": "2K68Ngjb5nG7puPxpgfUXH3a4WJ1s3vSCnsjZWoc21V9c1DUkGLxR9cmGuuj9VHftAziZP2z5RjJu4Np9e3xG2o6",
  "key39": "5EPX9bdz2KjyVKrD7A4TvxQHG8fVY7bmxb4bnVSfQQCjxZEHLi5rzKAgmvVRpWc9s1Z5DhGEsN7G5vSqcK2EtjBq",
  "key40": "2Xud8LteyX5pFP1TmufSZ8C6uV3RserM5nwjfu5bgUH3eoVRu5cBSXaWApzqNxtRpbQGbjnW9UnE6o3Kg9utQSrt",
  "key41": "267mMxnJbJFnQkWM7JM5hqLoXUfRMVoNKLustwSZWbGDKTaoC4GWD3mfprCNTkFDuhr7uKhntwVN6oQbtCh85LaB",
  "key42": "5Nfhf86vL13EphwAwwZsZaFj4Chu1rRwHfE48BWGSJXXFQEZNE7JaUzwBDVUTVfz3hR6oA3Y3tbnCQ3jfVBHYpra",
  "key43": "3ft6Kwd5DwKHZRACE5eW1ziawAH8hpP3HdQPpwV2buQr1zoCdDYWzeobusU1eMQgy9xKoyqHwAQ1hwyS3vEoRQdn",
  "key44": "3epxzdYswiHKAX6yvkr5DKZsDTGoDpV77X7GhH4qg8GNe7aMGKFhUtbpvSaCsxted4VdcmdjmBzzXn8SbMUKU9yu",
  "key45": "4cotxZPbhvk3FMR8RcnND7yGpAdiDXBhkKuRoRkVsW97UukHe1XnyJqhUr6b6oZVm9iKxdUSvgJXu18WZnJutqRK"
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
