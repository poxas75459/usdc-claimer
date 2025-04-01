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
    "2WULgu996LbvWB3bMHBG4RackNNZ6yByppduHJ271vb6M9oNAEj3ofpTxgqstjQuGnX8JUNEVUff2HZ9fT7fL5EN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fswgzEhSJZLpHLCd38EqBn8vDgNmEVXjfgh3NSh2hZzqvZpQLhuqsAbifRnsw7PhrXCquFY3ksVwCpiARfVviS",
  "key1": "4VRbYQWdPyCgQyYXEkvWsWzJq7gYYnxp83a7w2nrUEsAzmATjo2hRXhAmEGE2DRS6X91Hk2QEBBp4EHXMaWWcyF2",
  "key2": "kirH9JG2XouirPnczQw5gUgsfNzHLvkFgeWJfnQJxz7snnFxGbxbMBbzFkhneviemigNvjoyLAXyspb4bicXULo",
  "key3": "HSL92fTYbziuT6f1VGPLwzXpy3eX59PysJhWeeJp1cscy422JW77WuGQrKVPUaBaL6zbA7E79eTje7pFPCXjegF",
  "key4": "2xsp5boANj8AhpAAmgXWnEG3GMvUpkxCwG8hJkuVDfeN9vVpphznFyk61nKaMcdMvCSbNJtXfvqF3qz6rVf4uz3Y",
  "key5": "2zRYnx3hP2qA7Cin47YzqRTWhLCeBXKUiBiAoGhjMewQfUF8YeZ7tgDb1u29WvBJ5gNiXsH4By3VnqGz7HrfJEY7",
  "key6": "4JCN1H5Ce3c8RXoGiLHhvrywhLX4UZXRryVenkY1dYSr1BoFw8PXEtxZRz78kjUenPX9qwHzFeDQehYEJydMw6jQ",
  "key7": "rBmszvkUyLFmcsTubPhvowiTuv3FAhWtdkeY7bQRaoNyVT1CB7WMq8m4kP2qKKgAw6pp4oTPdKonqSkELdp8RCs",
  "key8": "28GPprCCw3wgvnVMcD372WGkxXvARMq35BSYPuPTqxGtwsy27MgAgUWBp8xnsJqsCR4n4qaEJXs5yqufFJd3CNvq",
  "key9": "49JMXNFzrhidYVJfuNzxLxA2SrNuPFVFEBHBqbV8a5HtowWsEbkz54KUcgiKTiFQrJSVH5ux8BdVgnEPdRXAUcRT",
  "key10": "1xjz2ZQcK1ujwegmjc3ER2utbdJmUSvikb4LVjtjpHnNDewaoXwtvKFXErEU8jDEcCWpnYbtohPbL9JCnxBb7hM",
  "key11": "4dxpddwebpURXCDnYmD2dgBWzdRxE5S3GiQ66fZhR7NrzksXx9FMLtc9u4Nh948ayo3ivQYn4u5cUtoNzDUCDrue",
  "key12": "4157X33TAvBzEZVvSnDiqihbxodZdgrvsNA9uhKR1mxtpKeAgZjfSHUAhsJc6oWdHJBvGEwZhyKFCRDVHYUKey5H",
  "key13": "3DJcuHW63ZxLJ8XVWhFoPmcWJw4b6mgEZRPJXvKujLajFJmixV6WJWnWNmuMoEuVEKh5zmgN8u8kn87z8r1dnTLq",
  "key14": "4NhyptkEgrHbwbQfUgzaWmPuhR4F7UP7GrSVfAt8Sn6SiYCrRUZ3eF8k7afHSPFaSRe5GmpKbCmYNGA4NWXgWdWq",
  "key15": "4KoJhmXt1KFs6jxYZwKeGZnm3FGAHurwUDTc6wfjzPZ8qbSAmTiN3jKqDbsXQkDUaWdMS7ngfE2FGL3dDB4YVpNN",
  "key16": "5c89Ed14ruhAgYJVcb5a4Ux8gpQVRYLAW9Bb4g7fu9NcoNJxFWWuMEUJJVub7tc4MvHQKH2TFBdcYD93nww9i1ER",
  "key17": "bbM6WCFxmtWEbB3kTAXy7iRBoZ7G51ako7y8ohRg623221NgUx5grmgeFRTw5L6CgWFqhhsrYGvW7WyZNGTa612",
  "key18": "2mznwBPzTqfSwWrcKb8HZegiokzdh6BhDorP2RfNoYRwy64fXBHdUPufKEwe54KHbuFBaKuBYFcnHC94r75Hmbak",
  "key19": "2ZozxfwtuB7MrMSN7AXqJJDvHGZJvopHEFqpLZS6GrzcPMcmgX4RGqxgeyymvqSJSvQj1Ddy9dE4KmChUS3BUjLY",
  "key20": "4XP37zmss9BuzBa99qsqtBUKhdxpbp2zc4fEmGXF3Kqx7C2CBVcho425EhdA1tUxN4jrudsZPBwkKMzF9HgLRqh2",
  "key21": "ZAf6kM3UxLKfh6ysUFTqndXfc7VYLMguwZTgrvuHMnT48eqyL3qwr6NRj5TC1dxYUrhr1scuKZqfFYTZ4JgQwJM",
  "key22": "3PLCBBpHEbgoL37UtGE6mgC9ePwHhBwb81HxAU2dLV8dEEBVNBtftcxsvoGnV6qFZzbP9EvWCLF2XsBSdyj3S8eD",
  "key23": "533TDMPm9XTGoxkvhM6bkMgnTHiwAcXjcdaLKC4S8uHHU1EfKmKQSdLsLMSBCi1sngA5UfrAob3qJx1fTed9g3Z6",
  "key24": "4pXMbH7kuXXh37GNVCX1HNxdKXAqydCtWX78K7T1QU2sZnC7GEzRhLR1TURJ9tZd2cRQ4W8NctakVLirJpdSnXp8",
  "key25": "3fWzZUp9SnqLZ6BLnoS77LKLjRgxPGAaaHVFeNUF8QT5oXm3DZjc6Xh2v4VUVystmjftY4rUXxiKqJ6mQQZwckFD",
  "key26": "5u6hJmAdR6mwPjpwLJ834WVFAhZUkFfRb1B2UuvZQMk54xd5F8XaxCd72TiWZ9LFZq49Pi1HWfwy2FBoNZZHspCz",
  "key27": "2cJALgYRnKWNmMkiBiaRAHMZ2V98qAeLyJxDzhvNvCkJzzFZ5uqdfyScrbUR5QGcnF4mef6zmj5ni73y2wyeDZ6g",
  "key28": "4yneJ9gxsHahdj2rNSkQ3T7fSkhrurTY4zX7vDKnZwYVP3Ykg7s9yJWTAW5d3YhZs6YGCMqseV1WLXHCDR6mr2L6",
  "key29": "4oKW1fZpnBrzgzntVF1HtfJAm1deKHbXqSN3uXoahmTy1hSfati6h4sN7mqmY3FWEVzNdzwhvV2ri3Tvgweo81SJ",
  "key30": "5MXSPLLM1ocdLsPfAvYojtdvpJWHs2hzy4aacQKWxciSkW3hjofx68HRh9mvcxP795SBCLXDBWxapu6VWXQ6FpGv",
  "key31": "5GKQgDzob2KEFutqFHjcwCS9pEtLhfZYdyi1EsgWULn1tTC89fkm9ENCZQa59hUnEWHpSsgLN7GQZFddwB59ynCm",
  "key32": "461PWySXRz5rAZStLDJ9ZGkEgN7zAprWxez6kc8gDiJjQUoxsuKsKVzYDYUmzu2TbupddZyquKi3eSApsV83t5cm",
  "key33": "3F4RPhGHFWHjJvuSq23mnjicUKpDKbg1gJep6g6A1vSqD6iUUGEup3hvH6S38WbXRufPM1isgyVrNZr2McMrgedd",
  "key34": "2TWdVzasCVb26AMbqkXk4msLW6tTjUqBeh1Ka4oSbCAXyygnusNL9U5Bnk4shkbc3ettkCdTBwyBjCA9szRkUQF8",
  "key35": "2Bd6ib4Rn1vjU2q6kfQzkGZrwRvF7BS3M1QiAngrj7kxQt9Bcsoe4Wgad3cinx96CZ8U6L8csBwqrE7QHdWe7vF1",
  "key36": "5jJB3UQmvJggxDTE5DkhR82mzFkXbkqHRqhWrNnkjPwJrxW8Z7YEuefHnf61gWD3Ms1kLaJJUUvCx1q6ANFH1aGw",
  "key37": "41W8kpktPMSi64vbxV3iH4hKvddVfytrQTRpKUDZzCNUw2PJ38KqZyRjJ7pk8pKxkjkdrnxQoJzknw8c1jJaTD1C",
  "key38": "31jawrxmvi5T9oAkU8bZzD8uTRbx5dcKqA6hW6LgQg4XaqG688tbcrzqCHCppbvocRppUTMxcMvp3RnzC8aqP844",
  "key39": "5prT1Jti9xKJLSQJb31m4dE65kCdBV8nRwo8LZTAG9XrXzWDWpnsbJ81pF6Hae9jdfEFdUXCA4ziyLhE9bsiMXGm",
  "key40": "43KW2Deo8bDYjQ6vwBkC2uH8wc4WD52Ywf2qvBmNhje9JneXymsyzebQC1WZS2oFKSEVFbjJoF5NRD5WQehkjxzj",
  "key41": "2jsgQMGCLaGHTZ6SCq836QzvbtjaQzb2Xr8mryTi1LA4DgJc9ZYPXxRnBbjKodsWE799LwnveZtVXQpLRgymu4A2",
  "key42": "5bc3psFVHtoLxQSWSvFqrf47JGLfEec1ECSyEF5tvssFPHPt7diecWipyqssK2zMDdrN4qdgb2KGUGq3RFRKCoT1",
  "key43": "zrbXaeeXGxgPxrBswKkdAEdkepTYbXYKZwo76U9GZiuc75g4bzzwcL8TRArBnYy4tFhzfeq4BKJFvy35PufVGDV",
  "key44": "5UNuHdppv3KACTb2Ei2nhCbirCf2tB8T15LvtZFGsUttzpG2vpDThn6VoUocSgAKzd14b7HhRmDezodycFyqLvQ7",
  "key45": "3jMNtEqcaSaRcagNaZLRyKm1HB6HQ6NvoDeZAnNEf1HvodcdyeArHNtUtHFRmdEuSswN6JuJsrqtL7Ne9avrzAso"
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
