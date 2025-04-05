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
    "5z6VwYJqmN2fRSHRtYLtYEYdbr77dt4wzUT1jvinfcGuUktrL9zDrhEC2vHi6S9n5LNyrRdswyj73GG5uTmH2Yr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4x6uAmU9amWSXeQL1iczyCv15scZ3LLrcSuDXYbKQjeR94TkUDTBzoq7whwrv4QY8esdyME1VqT6LBvRnAbJri",
  "key1": "3ZWC9d5toVsLk7Ek36WmGskk8FcmGUwQUQ51SzHwF3DXBoAC3RiG82NDNagwpFprDnk9Wuskk4SfWay3hwq9GkQe",
  "key2": "4zPewhqsESbt8PMc1bg4TcHj1asGkN9Qi9bEbKsrwtucFChQpuCSM92U7ryM1qdnv6VE75maQC9rjQa3NScHoR5r",
  "key3": "66d8bmdLiDkJKmtSbaq82N9uVgSESyqepCevFgfJVKUSAybyD7pPyoRegzKgY8S7CNvVEN8BvXCWkYoqM6xNApqf",
  "key4": "RgQufurxAbEzHZKw7eq7YKGwENp3LuGLCCpK62u8YmaWJPzGXLmajgfyT8HtyHixWTeX55FHKnWGihV5ZTe9UNd",
  "key5": "x9jM1qWb1tvei1XtJiyKPAsRUJDa6nu2jJPgvrBjwnSLdkRa4UuK8atiHZf1nUNRiFbQ66YgTe9g7SyD951vzwR",
  "key6": "2myhHY4DjWyod1FdCn66o65sKzofmygNm53SGwZWeU5zPJp6DV4k5i1kvRUrxcoeGxD6mwD8T9fR9sCrA4EcDg22",
  "key7": "4WrbP6LWoBVQgpxXGWzQgiMWy9sJuJFnEtuzQm1veJnfNxrxMuR4cTCZDYsMcXrLuC4rwG8hPp9SJemThqMVTKqw",
  "key8": "3mRHMKd2z6tZQwMMnfEfGrWa7uJpeFTz5n5GqAQyM9S1CS8NR4opuFd1rRoN7LedCAv9vM1rxym2fiT1qGdR3tJK",
  "key9": "5nFQou4BesurWrDXU8ckpeiLWHwQgoMqvYWbSNYhK6gTsgzdzocxKNEbJKUGAZbpPVM4QHmS41CkccRSsbGdXqqb",
  "key10": "B2mMUHZbNumTy4Xs5MpDcnP9Qkra7zmAhDz598XQ8s6N6KMLVgiQfyTP2sisGbn5WapFu7wHEypUW4vCq92aQYG",
  "key11": "3BtEesjaqUnuwWLMinYadytRXqkc855dBCQXyRsBKWouHHud51W1WbKkNqztf8vzrrgsG49eZH7KjCQB5vALCU1c",
  "key12": "26UxkXsvsNe7o1Q697R18nqBxXjD2wJqwQpF7bjkuahoa2gdhBw81otTsxJ9uHScsRi24CfAbVnb7p9q8WsGXW3f",
  "key13": "5rTngzAXuRqrmwTmtnpZteLynuJxbKv96g3dpNQiDBsxCj6F1o5LrteBUCK7PBaCx5tdqgryQR9uozhPYYtwJdS9",
  "key14": "55yD11jkmU8rtzUpnperiWCQ9rbiVetNZN6uixG8uVUegs7zp548xDekzr4dxXo1xHNSWmSkX6RC6uLLoojEYHqL",
  "key15": "4JSEBXzQrBRfA2cxy4m7qZmLot7Y4Fi3W2TPE6bpuM1CtGUoF4Dno4xBt8Zak135Zgtg3Qq5X8TvmDYw6E7LXw3X",
  "key16": "5M4yZ5Usb1rn8h6xBx2Xn5aoN862Zsyp9W728HGcTwBpAtjJ4MzA3inBAgYh8KT49tX8evyPEjXPRxj6G5AvxwmY",
  "key17": "4rjBUevHqtGZm6FYz5o1VbCsA8ZpQdUGHXB1P2TKe4ZBzB1Cm11kacM4DYNEAhyMHZwbNS6RyJTHSAoRS6JmMV3N",
  "key18": "4S2pnFESrHQoZ2mfeXEkeMEV9RDhhDZaXXGheTeV1jdB77jAzG8Yu8YjxEuAruXdy6VQZ6j4139n97HAbw3VB1uC",
  "key19": "8g5PQYy7VoyVGHJBNZpjvxqdtVYhai92CYwu28URxVjukK91ss7ezbisqHqcwRvnH2YWm2roSWeAasgG6L9dhmE",
  "key20": "53zP3X5s4FKnGQvZGPWYYGjV3rHDFb36saa4ouiyHFLMnxRoEaVRCYwirpuNDU2wT3V8pTUoHNr3Hy5ukTkVQo6y",
  "key21": "3ScNcjiXQ3SN8HCJPLa6iZKpxcgE7Ym9Vx6sdvYFvEqcXFGzGRm4SkqaRgwMKQ4LbF7SwwJn5P8AwzwN3GpxWCtk",
  "key22": "5uH6cmDjP9Pj2jEQC2MXcWZaMXphuNJ1xLthtx6hnjku1dSTKWf5uKmZDF8kS2N72yLDLFtv9xFLVhnJLJMjUVKX",
  "key23": "5zchZBSXP12NJ3xAg1xExvaqzpAqWmXNvR4G1wcHfB76nUGL8sk95wqXcZXF2TgSpZgcE4ZgpX2X9r28aw9PnxRy",
  "key24": "Q4kuavNt2i8abTAXCCETaxKDkhNbMVr62yoT5nnTPahGwGbc3pHEnSVx9B2oT973kq68fuTvc4Q4wdiRGcyK1Bo",
  "key25": "5ygbahuATe6rULaCUcxee4wmEzzzjQ68d59cgdo5LaHGBwp1eBXz683G3E8g1xB6YhdL33UaNZSeL7cKRwePpCdu",
  "key26": "4ydyU7DnP6GMC9fobQZwbyDFA4c4YbNqDKesPCeiqUpQpkfMhhxTbtfGfNDp37GMMhNtiwz3VtxFLWi89FsVFVH6",
  "key27": "2SBbKrMSksnDF5hCnUzvZMuXHEpwRvC4YRQjMxn1ehKwUrNjcFoApQAKsXYsErBTLuDvhJSsCg9nNtUq8iFVfxQa",
  "key28": "TDXe8uDmGXvM3dr6jnuMyAfjfjf3yQMqZFowak3WyPfFbbif8aEkATxx7o24aF5N1YXkYgHNx6cuB6xAZmQB5nE",
  "key29": "5wte8rxa4uMSegcTS2r9PCnHcGpofiJjqbzcsGBXUQacpHmj65Dnpt9WEyxX7zJRCsEmXXUdkyJzrf4xk3QFA3ps",
  "key30": "3JTeZ2RjTTQN9MvjS6uPJ49h77XqFfgdfRHU63TJCc55nUP7r2drC7wpKkNvu5BxsyYXVzv5qnU5dML44guY1Exw",
  "key31": "63a9NnK9ByeXWrja9YFjfFu8iA2SHrfZXMeWfrE7pTCtBYBnvgVACiPSVt5s7CKhasoGAd6zFXTesbLKkjehVVCr",
  "key32": "4xVZeHhxDQkjxTdxpUb5PwRmiwDkyhop698NuQ8jEjWEizdmoKjTvdKqSZGVE72am25wWRNYy6qcx4GABhaoX76V",
  "key33": "2xpMGo4V2bPk5uXSmfLXLW7ykRtSf1aWHQPHNnadcdgS5U9AejVMct6P5L49U5irtA6VgUNx9ajLcuhDEQJuAzz2",
  "key34": "5QGNLkuQ1kCHAJtARNWHjwY3qKNFwnN8j1E2cUkxNMypTV3QqHLWSoahh2SSuoTWNGXQW96AquSYXUzvn9uTyN3n",
  "key35": "66HSFU68Tzdh9qSJP5ZCnhN82Mrs3CTLCEBLWW8btGG2HXhSCKbKQPFZozJzdASeJgQLNUz7JSpznmDemPHEV8ji",
  "key36": "wP9pjZvyz2QUA46VqkMU5oK7mf3S9hd5ALTBWKSYkgJMxSjofeGmA8kwgXsAscJQzPTmZZbK3jT1sJWFmKpSimB",
  "key37": "34ngX1Uoi3YQWEFpuU6XfjNJTC5YdALaKgMM7CqZD4GWR1AKUMqFsLCdiHtqagxAzCqQcY7CvRLQZM3FG4P6TpSc",
  "key38": "3vNw8sPEJLEvUwsoD9AutT9UQNtjqpMi5jLPoHo4dcUrQ28Cy8pbDyw2RYtifnFdze1iwpkPowwJcDYe1Px5yFvy",
  "key39": "2s5dgGVFESHwzM4sR97juByiwbD9MeaETydwm74BveUMR8mDHKCgZ8Naqjmj8aNpMAJo3iNjjTmn1LAJrizDcp4t",
  "key40": "5eu2k8AoYyR45ouA1s9Zpnf386VWbwcjEpBTkMmZWnScLAE5QBHjkCfJv16WRqF2Y59RcuyXWDcjNRkyYJHu1jzE",
  "key41": "5xE916fFGNjcbvT6PxkqgHgrQGZfdHScE7ftPhZcDTbRJTgMBxFHDx6XUaHUiUrmZzinHSeEGFSFvFWdVZGUPrCg",
  "key42": "5vkqzdMuiQQ1eTMf1413UemXu6wtibHrGYkewMX5ZmWmFnDScFWp5RFtAwdyPvYe9jpsysLQHwBJpKmRQYSKbiH8",
  "key43": "26rmoVxXMsEUZHasRc2gSrDZrkW42dXdC3G6ShwSAozgkBfaCssbiRnmUEKGVnQWgrgTdo453jxNj9U5tUJ6WDNv"
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
