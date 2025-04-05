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
    "4FXTEHX3oLFoXHR5KKzP4mzAbUFzgqxbMGiGAsqzwpPp62aKNvjg6CwJ4LrtHhQrAaekuW5bhFhPmtx6UuwFbeBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KhNaFyxd1G3P5HVBFb3G6WtJ2i6d1uc5xjbzK4tjJED9qAnK3NtSW9iMDXb94d7dQW38XXoxWHAwybTPk7p9wM",
  "key1": "4pw1bA6MF9VuZjM97z9r8dAGKRzCkhcaTiUL87ozRCc68EtcSnT2Z4hMNAJ1pFpsoiX951TLyV6WhTs8DxF3qZwi",
  "key2": "2ZxCK63zN7GfuQzV3cDnyjG7xPoqZi5922qVscrDiA1TRkxKknP98usNwDK1xD1yzGrcyx3QsfNeBavNchnH9pQp",
  "key3": "2gPubSNKMEecXixCugX7NUS7AecQQJQB8SMZLuQ25VWmRexDw9EKXmu7isnLQkqeVKJBjEk3AZmMEWeYRvhB9U1g",
  "key4": "jWEWvm8u1sSu2m3sPSkDyxJCX9q4s2CqaNCB5fd3wvf8JCarPnLnUDhfrneLpxEWgcdhuhVPJEovMUuUsrmgabQ",
  "key5": "2tCpUMpwJZbb2xC1WG1S8i7GubHthJCDSG3VcBnzY1iA7WoVHkZYossyuGLNM4duberK26XM52nNhr9jgC4S5b8a",
  "key6": "5ba8aeqZHmqPVSFjVsj6rKiHhYTDnYsj312YVfEAPM59eS57aYJrxZsKu8zHfNqo39GGQ4UogjSXs5WKhB7Z8urG",
  "key7": "2SkEXdaYVicYJNYtprQgF6FVQsJPVyPdRMV85kuZ1DEgSTCCkPY4ZtfLWnXQq2CwHV5QtocbmDPmswVzosfxcCc7",
  "key8": "5w3Vo4cRScVGek9o74ishXLnfj1N2bbDyzsX5aavde4qzZrjP3HXmqDoEWHaBCKPRbcyBgt23xBW9ZuvynkwcrHz",
  "key9": "RAQK3eZEQwYFFyZyRbmLYjkRtnfULyyeGj7vEoJbZRXEMLZz4zo7S5nX91hK2uUWMF79Cd72zeQJvKkJrN7pvND",
  "key10": "5bs6cfUfE89h6i9ZRkJC6BF5NYVHexCBod16pAq6EcGhxDLyV2HjjZAmXZdCEK5CQ7zmYmpnvhxcrXi7JYJ5vLrr",
  "key11": "54SEK6fcJQhAgTPJRU31qhb5GNFTjMfvBox1kGZFzo4kqyCxUoTWd2PBNEoXt1zhjStyZBaofPaRY5DpDvrgPFJP",
  "key12": "S64BrzuzwsbKjKv27TWJPGfdnz3ciMb5XGrpUCfWnx2YeZbapxoCzyyhfEsTqhiHFrn1u3odjqwduVGjdTYBmqc",
  "key13": "KTTLBj95PFxXVDUyrLTYXYA39aH4H1rqoLvcQ1gV1PXSZZZhz8DwxmqRm767EcNi4nrifDKpYQKh3shUwuC5ag4",
  "key14": "3Vn2PNEFSmqVBTL1byY5hJ9JEhthG3PE4a4XfdMdFEKtg2x8DHbQMjfU6Qz399JLwoG1rQo4bAzFyWeb3m8QJuhB",
  "key15": "3o1yd998iqdubjTxAuJPuKcth4siLYeFx89qmAT2bAw8pHVUbK4vGJF1fKfU5NraRmjtBBNWCRm5kF5DFBJWnfe4",
  "key16": "25bNviPFyeqLrcFzjuuwnNvA7Y2PEB7neV6xbKAFEbzP6N9oAec7jfD5BZfV3gq9DEB223fz6MipuZahaE8ygxBX",
  "key17": "4nxd36uBvKYEPygvNFzqtk9TFB9EtiR5jeKhVL4H9kTuWC19kDRDTMhnzy3Hao96UUe367FS8TRHqQQ3W9M8KNHc",
  "key18": "2kQ8NGrzWDTYzufa73i9u9Y7WGXzz8jvG2x7wFpg146ZzULL56mNMysmAXvC7biQvZB5rqtpjVpNjwi2j5RosX3y",
  "key19": "2DKMfN4Sf5AL6PuUVAw9Mc6kYi3YNdXLrKuckjySFtF9kNKZexcqRvdDUe5g7Ec4TcEtUgQSe1JxFtoysUFNFMyS",
  "key20": "smhFuoc8nB2K7jGNFQUS5LNkNx6zRPFUEmM4yK4pmvCEqKSm6o3uUEapYfS4tLnxi9dzswcz25xW3ZAe3rGKBer",
  "key21": "5NL5GqLqZvELTtN3XDS8QDYkHUT2RrnNsjerpZFHFrfnUgpafxDa89yiAhAbEQoHM4v8hfseLXg4vthfLWdNf3uh",
  "key22": "yrfJEzkwx9PiupTxHihvuWBXRGzbG35Z6PpgPcgJWX5Yi8urcYS72BsuM8KfH8ay8ZeqGQgoGUTgnogCfP7aP9H",
  "key23": "2UYwEGKPQNmv7sgChVbzg8W5TqBzu5Mrz39WqvNnhKBjd3MYyvNKrHjcCxeEvJxHpkFJnV3V2WCHTRMdFKa4Kyso",
  "key24": "2fNJcs4AGwcMnULFfyw76Yz2wGAGiDfDonACrGbAeze6fAdS4shZAuZfwA2hcE9yCNf5N45S15udDRiki6xNWPBW",
  "key25": "Mx9zVqQhsR5WPdEXNJF7rkivaKYWgCiYMLE7DJCNiPHT7Aj2qqFmmQoU38z65PQR1YS1mEKUsTgbASpkFTqnQK4",
  "key26": "2Fh6SAftNogdbuGTze5idS67A5PK2H7ieZ923wVC25Kn2TC7m4PNzzMGPRU7wXUGz5MgYkWH9UrXtafY64CuGoiZ",
  "key27": "5cZZ1gJUmuSsCsfiNVTsjjoFcMCxLejV7T4H5wYMn2N8WuTQuwh1Rt7nq921dwfq94e5FiHjn9srv2azLN5G3Tos",
  "key28": "mnYZm9qcXNyfwXfu2p5poLn4gQJHp3rSHVo6MUoLVGAuSTgfqfMo6qRnU3JLxYvA1wcdkErEB1Juqbt9eSZG7aD",
  "key29": "4UpkRMzZNRov3WmuS7cxCP8MJUPbe5cfdxkCb9hiKfGrHtCzt3mRwnKxk4ufdbtCiU5BobDd6eDreUMkbP9bFzFr",
  "key30": "5UbVbeErRa9BVa85duaZPrSx6Q3wMQfs9WbR5r39CtV166QfXc4yVBsP8DNTLfm38sNgMHFu5kaDWuMPEdsgTTq",
  "key31": "2fwtZ7LDev3WjWuJYcykUjPLJrYdQim2qR3P42GyENbJrN9d2Qv7dVRbN3s99Sc9WGoPYHzQJ9UfWTVLRrzraLnh",
  "key32": "128suWTh6JbXQLfY36sEoHTGHNG7JajyaAcScUXfFYhcjKdrk7DEYohuyPxDe9KtktFvfHana5GrQshvbbiMpdCo",
  "key33": "5oWUjxasRtui7sxeAJeoyhV1M1GXZacHVNnmxJvNeRTp4GXUZwCjXaHBUvH1a9FQj7XXJgaPNHQzeEY9Kpw7cp95",
  "key34": "2MscucVQj45dZbvd3bjcMcHUzvmGUz2YoZa9pmyWVdM2KngJ6RHQqkedokk58p6ZduM67hxaR3buuAvnh1CmnpF3",
  "key35": "4Cxis8Rg7iCFHgc48Tho6YghGjtbPQrNoMJ1jfAAMQMndFyRBQYZKWgyBcrYbH7LVaGraokEFk4FPSNnTjtfVao9",
  "key36": "4tLcZvK7rdPS8eZphN7Ga27hptEgbU6VKKyv4GshfuSWDYhoFx8AZzrf4qSJh7Mo6ixRCU67xkrFNx9dGfHmwk7A",
  "key37": "5kbUNaPYBtoFcweV1N31TKfhHSUJbs91DgiPZc2XFo6oS7nHNTzGBFTuXYrmeiytti9zknHnmj54hvpwHnoEwXD1",
  "key38": "3vp9BryengniYLn8KebmjdTBpRgsF6tPxQcU8MbSDiMti5D9o1SZagYCqGAzxdeC7xXjweF2t8NLpCfbBoMY36z",
  "key39": "4K4rRbq2fiFww57rtTgGeMaqDyckoyekbVVos4QUmZMGKsxiGb7pkkBur12tx99BhvxVZ3gtZRfiyXqmqdhSeAFU",
  "key40": "3y9dhaLAoE5F8qEosg73PpmhcNauBZF2AmH1opfUswKhrozu4ZsmXDMbbXecsabBJy35TJXHxhQLy6LSGVaQZWTA",
  "key41": "2XDK7cqZStwspza7W6CNBmrP8xMTzNWNQtJcz9E2byDoG8mKvsQG1KCtYmSxJX2zz1AvevtVXMFzxD9Ui617P6Rm",
  "key42": "657RUVqS6fcUxAnm6PoNVtcykmssbUAS3LcRzdaW1J6TFbwUZW7G3xYkcMysVg7yNto2B9e3ZipSKPEpUE5r6ube",
  "key43": "385UR53zSDtceN4UbvEzqokjF9LPY7dDXTGCv428DBw56mkeAHMbRto3QMBAPp8F6ZDGAYPRdDybC11FtK4JEw1A",
  "key44": "fuj2XDdvdcFygzmQQG1EsEvf9W3detjCxy344TXLPGUG3JzWiaBeQDLSozPk8DUPQLxzyNkrvu3QcfpT1fnhHCM",
  "key45": "2G6mSieXfrqtpZrja2uxR5XT9A7piw7NxnfkpYJzxVsytj2S7wQeGeKrgoYXB52mZXFTRPTqiXej9DFzadLoxzfJ",
  "key46": "5KT1HrdjeU8YXiWqkifPwPeQvBTNPYy3BgEJDCFnrKobordSZHPTecBNqqvRC1KCTKfxX4i6V9RBrMugUAxpoHsV",
  "key47": "4U3jTgnYSagfy3XrH9nK9KJhZrRCxAA7Xh9He3jBSQ9C98kbcnK2tdy9eyXYq1rZMQPGArh1tp8XgpDw99MEVrUk"
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
