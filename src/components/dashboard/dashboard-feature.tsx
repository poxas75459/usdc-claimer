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
    "5LEEMVoySztSrjW3oiaxArkvLbvUJkHNvSe71hVrwFjpdjLsFN2SCKaCALbim362h3Ty5bM4QHucgsUnXsngh6XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrQ5btTyyQScuUVja7vK15uitD3gXNAxXyBApTFrG7n1raL8zsPF2hfLgVDfrM4VkxSpCYxBmYpFsWADqAQ7qc1",
  "key1": "28djgBG1G36wnaDmAvQ44NsN2XU4mWMna3AmptaFnAFNDKcHuPMQbX9RgK1Rytpm4enPjLAKVukwYKLDKZHDPsrv",
  "key2": "2iZ8fEBiZXiT5oVf2BmtTRvjrY37raGgPzDJ1WQUGURM5UKZZ5CATXQeVuMgmEQiTrERi5Zc719ashBwzZBkdj2k",
  "key3": "4R4vEBX3PUaUDtpp9ADVPSfisxrWktGaz5TeTpPi7Lcq9Y4t1sS2CM6eSByZmuKjVVJ7wA8hUBs9VUY37WjPKVFu",
  "key4": "2x78w39bqNc48AmXyHvqDWk6L2Fci2MeRY4eD7k7kbEcpDAjyEutyLDmveZ2taASuXUfsqeN7Aww3UobVtXBvycx",
  "key5": "3fg7sMzDi3n2fAePSa9h9TUKWvzZ7GXAfSby7umofm5ssSbW2PfxJPMxqTMmFkHCwHXrvLKiHSxAaxwLYph3pU9e",
  "key6": "4UEYqtJjnaZciJ1pb26uFKmJGT2Vc7w2R75JStrzqVfmemVypN9UoFNnXJACargL4AEFkcKoCHEwXMMqsQHEHMsD",
  "key7": "58WdzzY3DzRGfzRedpu3cE2j4BQaT1zFnDX9pcwwEK5m3ZMHvfyqG9HzfgATkzY9FDJRxy4bj9t8XF9gYVRjBBHZ",
  "key8": "5cwhTHpxDf3FAwudRGYptjBVcMHeCPDPak4RDPcq1oYMkwzBCecqsYMDK4aoboTkK2uJ4p2T6ivpyjLKTNmSTEP3",
  "key9": "3nDnQwg6DVoqruK5AxJqubgQXprj5TBK8vvGtxD5fRAsKC62txeBWtZLa5EVsBg9y9NzChxp2BUUnvkG9ekUCJGH",
  "key10": "73LxBLjXdrzgEmjs2qGCs9n8ZwoiobuBfFE9zVKM2qZBbFQkfzny2T74x4SwfAFrTHNeYs7mj7DTDReGCVAUB5c",
  "key11": "5f2imucsQoqgzrC6iS6tkdj6eWYfuBbjvoNisnPL5poF52Kjs4tToY6X9KeTyo8Y2AXsyFfCvkVxf4BU6ehSdMRa",
  "key12": "2MJHSPicCxyGW6MXz6jkpJs1uRqJsGLmY5gfHDiwFvQGxGKicMCnniZx1UavfGyDfvcrbzKJ3ye9FkqtkVk92xWC",
  "key13": "5DoZTBgXCS6WKRApnVPpM6cMt5HPqpumnLRBR9iUQc5hMbJf5NTX3ncxsfA6LJMkRaxXW5F9GT37zSabNqndRmy5",
  "key14": "5AuHGfey6QZZJMx7eDva7xThMc9ottpMqc5owtV1uSBER9DuS6ShwANFTt9gCmyH3XMPa3eboTGZRjGdExPwdFWN",
  "key15": "2rS1PyA1oFH96xcXM9namrZ9v53PbGxBwSbfDuiNnxGrNyP7DjmWe6bmSYF2fHq9r2AxKF6wzp2J1UmWDcpJeQh8",
  "key16": "4aPKTus8qT5T3zHtjTRh5tn78ztAKe69HqTJh6kufauRMGh4r9akgjiySGP3JoXepRr7F5Qy1vyMRZA3JopEt4VR",
  "key17": "3uR2i2swduGAjejRCRmtZsEr5F9b28XtpdWWj1Zsa6mojcXFjzQidcL6aW6XCM6wBSVt2rHXBEabsXGXb84Aotw4",
  "key18": "pr38HyyyQnJmGg44npd7yiaYErfMvQxCdVkkVCWWDrovBb37QMuvfYcqp5q46sMeXifXe6Q2A61p15thYHL7ve6",
  "key19": "5HJ6UpMTiXbfWqDqSTUKYxHkDifnUhiU9gT8hjk1hZ4nz38FQ8eQJ6H6yLH8n4eaGfBJ9aNSLnJuMwyMpej9QPEC",
  "key20": "84uYn2GExJZENNNYiEwpe6Ne7voLRuskg2GKgdUnExc6n65biDLTqN4B8c8KJP3VCuyJM4gD37oWS7gN4p6utKA",
  "key21": "5CaPfCTPLa8qbFXmdiBWogWYxpTqZtm69ABcwnGNkC7X3RF1b3b9xsCESAZYAFCm8VhehPQkAVVkwaAc5mjrUj4m",
  "key22": "3W2UV8KrN5HdGU6SZZmvcqmtoy61E1B6MqafnsjBGowdaz4jvSCZSq5Hb6hNJKA6qQu73bsqSxU8NUbKtcPfAUna",
  "key23": "2fi7999ZGWWvgKPH1fWgZGtpUA9whaNDPffbQDfSpcqV83QfomXoLeLyJYr2sjCuXyZSNWxpGZo7k6NrKe7M5FHW",
  "key24": "bzbqqUD5zzesSbcbQPPy3hPNBSDtzuwGiM9vHpUZkysarc7BKTbq7U2ReS7Bnb43uuxaqQNghUYd1eHKD3zuemD",
  "key25": "4r7qA7JG12BogpU6uGoz9KCoAZt9jfqqnKVa4HYZtm7uG83x93A2SPpvLiBhUgRta2SYQgJn4F1s1Q1YAJPpqBDo",
  "key26": "3cqMhFxu9pJqbAGuuMYB12yyhsKkewMGw2LkVUU6XatPbWEDGzxe4HMHRVWAhuCyyM6RFNSwNSYhx9wSevR7toJM",
  "key27": "5R8gccxSf154tweofkcnWVctqVbEAuDDL8Q5arP66ai8WUTbspbHRofk4gNutMYkgKvrcfoHddNKELL6kV81DkRy",
  "key28": "Pw2jQPcLTAfzEVrhntD9Tj8bmvGj2irWaNbMrbjyeNtMaJ4dgEySskW16Nh1B95bTjJjDeX4Kx3syuTJoLEknrg",
  "key29": "3oUsadJDQWeGQEXUP5SoMd8UzMHbVecqijpNnvixwQfoF8bns57eEuu36MdDsedke3BxaufLQw3FVbx4amAxyoPg",
  "key30": "GduGM8nzUt1sAogdi1qam5k1wLpdRKYeN77asVkn7miyK8RD5e66TJTiH5aqLnaPUmWLYv45CnDXC8yU7yg6C7Y",
  "key31": "5tQHRPwCKfJTwNxNz2aRhJUyVa7dk4zNqebtsCF8pBfT1E24ixJvAr519ZLrATKJjUvYKqtMJAQHJDkjvYFDcJVQ",
  "key32": "4ueNegaccFftWmaSEMenZJwgmrAXzAjCHg8KnjgxwzRxm6ek1aQ9MDJd8v877ySeufsuCgK88wVyq2avxZ3ddXRa",
  "key33": "2BdK2ojHC8MPGyKeRLoiCHoifCnvRTzbMSk3b11SsySoNdZgetrLDgoB6fJqreooPetEhGktV755hgo86od9XE95",
  "key34": "2JSBERR1Ld5XhPqXVWcZhhkM8t7KTfNqBUJbgTbq52kpeQjP6xMicpNRcP1gofZVdNbsw77mVje4hPGhhP2Bq6zh",
  "key35": "2QLFUCps5BYRfEfasuZqmFp8uDAs3AvjaTyMMfHmqtmorS3UXjsbWsKQmBeZCmG79vk8SnWAhU46FiJ4dindJMJ7",
  "key36": "3tUNDjSdWNLAZf3XKbcrXKRTn2YYdf8E4tz3MP5opoyH7A71wLRKBYPdnBoLE8pTuArULbwBQHMAwZdKXvWmxDd8",
  "key37": "4kPmFL4N8QHuoGYvxXbxtMzBNBnMWHpsbdmRGY1o759jKUpJjxZdypR3ZeKzXijhL175Av2qtLRhwC26cGkDvbWZ",
  "key38": "5gfeEa627tLLdeoSW7ng37jDo7GCdHmJcmhcAWvDdkztUQnopuqTh7DG3vXwgVc2p3RHiKzmEQqfzNQsAbSsg9Wg",
  "key39": "5pbA8zB1ns3ympZVic3uqyUr9nbsLX5ZZEsKb72qjc6mKgW7yQv938Q7jQNUGXV6Gbg6FGWKRvpCSgLun4EdK6n8",
  "key40": "5SScq7CZE9jhcKn5pHCEGMNa8ujoFp2NdUBECCickP3vQapuaMrcaom816dmzxBgKMvPkxS4H4cdkdVEV4SDKtM2",
  "key41": "57FS41tfSw3w5XnKUSM9XZk7EwKk88JoYnUJhc6GwpWUV1NvVBTYyshGNndziuwoGX5o3242NApEeEk1kvymneZS",
  "key42": "638GEGsDideWtVFcZk5C2mZA2q6Eutu5J3ojJoQgx6gcN9StAxyxZhzWTz7p3s6xyTo1jMWzgi5TPRtF8Nuv9bq1"
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
