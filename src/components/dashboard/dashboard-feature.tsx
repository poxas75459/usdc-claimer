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
    "4GX9HEgYGu7sPYveDc82GzcZqTRdPzYtBUybVcVeeqMtfveFw7i4hVodDUqDpYB1CePDgYb3PFMnTvP5cV6xzgb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YaXA5b7qZdYnZVQGc6VuPfSNoqyeErMdqugRZK7cjrduAEcDwJjcBbFyGYRwevfLAmTPL5ghJAJv9rPoXay3JyP",
  "key1": "4hiPosGGCRCGi7Y9hxQqatD5NRLt6uS3BHBw2F5GDzUQampLDmsMX85rzhiqq83u4MMi7a2pVR9fP3ahvmvGEBWY",
  "key2": "4dK8BHTphvpei8Zgr6P8sWQTAutxCEkEY4Xd7NVXCpsmThuahBbVbgE6zfF3eoWE8yczADpFJgziAaDQ5hXPPkh3",
  "key3": "2dgJLf1JSBV1Mk6DoKhvdUM7R9MQbQkm4X7KeKNZZpB1Xptxka7RPUxy44p7QwXPfkNV9iymNctuHjYWs5GTZtUo",
  "key4": "4oi6v45GNKUSvVis3ku1NN253oHgdi4NG6BPB7gN2gPWU2Rzo9v7XdGfToWVWToFPUNfqGxWEN7ez4FwpEgcttFd",
  "key5": "3gGLexS4CUy4ofFrzv5nD7CiS1acBPBLf5yrWba5YtXXkV4gWBdS1XbzJK6ePCwy44Bg5uGe5xEWCF5AySdpX4W8",
  "key6": "4BF1VMFmUtcBZdtPZ3jeCT98SB7tUtcLRsB6VUi4MibBHdxuCWgVLpfuP5usKnNjTzHXHQJeNBGswMaTdY6FSscD",
  "key7": "5oWvYSuQGtCewsFYHTBmAEmDriboJGwuPknZ8WVUFz5YR1sgxCGQgHCwwBBCX9DZAVaktZ8T2FxcMYX5cWD6AD19",
  "key8": "417WKRSoadHSWPX5o1niWPUPizZLe3big4tEdFmR2H4hy7cbmjs8QkazTDyaHA6ebuZtxpXm8FrJZqARfvbZugo5",
  "key9": "46WdXSaXmvhbgeGyxsX2Jbyyz5YdYPCLCMxAMgMc7UKzarDbi4Qio7VrZpULtf9d5EF7UduGtoAd1nZxZUajQRP",
  "key10": "hxgUyRdNcTFqAmjYk4hSNUsumhYYSgMxGfNL37eXk3uBYBAcsyQ1HUEJQYnmK7KWVYkfEJNfsUKj2yXXBAwXQty",
  "key11": "349CvQUF7UbXU9LXgKY2XEuGKDKz5Hn1r2v4pS88swmHPJ2mrqmghwR5YJ5eSVE3xuDGMzuHykdtaosAjXiYAwSa",
  "key12": "Hj4Q7CJ19Pxn9Pto4vyxdSoo24TZjeLycxSdPbd9JGt4eRpWtU9DWTfjpeJ9UdNLife9GzzAPoZXqoAmzEb7M5u",
  "key13": "2GetdqE6HwNhXtNcaMfVqkTeLyRM9q38tri35DVbSRFHj3tyP3taRu9EhVpzV6t7gU9aFUtGTTur5m4h5rGVB4gr",
  "key14": "5VNyYnGak9jun6aQYdD57dYVMERe71AbFFX6bfL9FeatrBHr3EBxQKpVbDRmxE1JEBz4wVMF2swVrxEELPKCsc3o",
  "key15": "2b5knjsE2xKn7gVzXGunAgeHR2z1GSjunVo6No1XZQFRmgVFuwqyRTrs4rE14sLLVQxmPnuxNFStQ24sdwX9ewMc",
  "key16": "3AZNytzeddRpMdeUE26xfwX4YSpXhhoKuFDZj92dvXhVzXKDeCLLinzBKDAC3JpJ8vn3yPAfyEMg1msvHLwchvbg",
  "key17": "3GBKMd4bKFTquRbP64mWV3BtqDnhq7AukSDKG5GsnTiThrSJU7QVKjsDF5Te7Ftv9KB9d6gXSqAVW7TGq5WZxUuG",
  "key18": "5LKtc2FVUTUtGHfnENykpNkFPvjf7omAfXsoDbudVagqQbqngnyN3b7S8Hsqwocnx6JEYtVh1apxie98K6oy6p98",
  "key19": "5gMU6kRsXkufE1EXst8Meqb3PW6964wvmKwzY7HxtrtbnBkUhByqjgYKTyTu4MxsSndcE1ei3MjnTpPinNSRuDm7",
  "key20": "3y98vWLemgbboV44S57TNVLKA3MdrJyLsAyotRUr7yCCLoDaNv8kaHgaN8wTQE95B1PWc6RWE3DHoR6U1PMSkiNf",
  "key21": "56LWJMcx7Hd3EST2j4hia7RHok68HQSbSJN68jGccUWrZCGwXKLDEUCDJTR3F4KjC5wERqHVQi88JZmzSnXq9ZD2",
  "key22": "5iiuv99nDYP8mNDXoNaQ7LoASmKtBWu9CmZ2DXL1MS5h8ykWoPZT99TtSxt1J6i8QVzeW81qhCdTgd39qUvqYfQp",
  "key23": "GZmgvsbyJRVzcf9fCDWeXFmK9AVUkNJxPJtYFJr6wcQLCJgJ2AENY5CxL2YULmnF7jaqECDGVRYpgRNHPeGyvyE",
  "key24": "47A55TLk6h6h4ANPJadY1jADpNshsCme4K6eehP38YvGt74SSZLbKWobLQrE55AsFhYLrmrBQQh9DrSzaeS3wGyk",
  "key25": "3idGxkwcv4p8DYPs4c96zyxNCSBDWjXYaEoaFkpjjKSWCvgGopUVoDLyXJ3pvMg7U3nT1CDayYGyjcFpuvDcWt6m",
  "key26": "4xuMRDYJEEFHegrwZqfzwA2FmiCuJHuL6dKrrR323tddLaVgDGtHF6c3jbLf8EasH6vQPeeLPPBQ5mxfVuY5Yzjk",
  "key27": "4QSKrRx8viGwEuhHZeZaybZrmvmJHJNqMoGoNJX5AaUskavRL6aSezbuptiTbJYdKmFkfSEgh7JMqeZdrczqvunb",
  "key28": "5azazWxjz3yNHKqcEUoGPo86tiPjkbo7rVrKpBUMy1WsQBBuSh4sZX7upXLjsefrVvnBiyHGYg8eMn1i8wCuj3Bs",
  "key29": "4U93XZxjH5FnN8T5EaJt3MpzeLWjNfh21YC3wzrix2d5QKv1pwSep7cL89ski26DLS5DspaabLRafxtsVm6JmhRj",
  "key30": "5n5YMWXrizX7D1aRYuoa8Nm3HdvqaTnGoQzUMnMduyiKHwvzkw6rSrWCZaWxRbKrvD4AQa7FwbDQHynPEM5iuoQ9",
  "key31": "4hKupHzK7W4LaiWz6uAzjoBgLVcYiKviWfVHRJZgCGpZFDkS3z5aLcYg6kB79WCHsD3Dbgtjacd7mULai2N21Sb6",
  "key32": "5HcEYHmwbFNem6Pj37AqLmqFtB8hSouz7aQDBXq9fxihkoi1LbbQwqBuAdyQSNgh4UTDx2Gy9xn63ZqG9KfaE4RV",
  "key33": "3zPeMTzwZ2BAyDbrtJ1zCM9SJvmBFUVzAr9EWKxzSybGS661L2tg1m5bRcGQwXcgS744mG5AnfbQNM9keWBPe6VQ",
  "key34": "2nYymV2fTzKk6p5YYabXvtrrSFZjk2ZucZJCmDesZuRKNuhsUYepP2CqmNvkMyN8EgrzUivCwgC9Ku9EsJ1Uh3mp",
  "key35": "3xmWvh6pHqwtgh52Ti4G2W6dvd2oynhR3FA9ihA5SoJbHqF8qjhfQpucwn8SjiycjuvmLaLeGJcsUU3BK134FR5m",
  "key36": "2Nr6k2bmf7wXwf4RzKJJcdeEGVF4BbHVXx5MQpLWNUKT4UcBEY8aMMwmr5wEPTq3zs3dkAXEqns3oLjgrJ8BrpiR",
  "key37": "QdDV61WtJ3rBXypGmwH6VJ6yYQ2DtXvqatxVMpk5UbswmZNBbWkFQ86y9xaKrHtWbZDeLAmvphsvFxfRVgvjR6R",
  "key38": "5xVEPGjhjjL4NWHoPFKvHjHBSHgVWtMPzMLS8qcgTmVox5LgUmGGUJkrgfXwfUVDjKWGXiijHLABy5MBPJVntHXU",
  "key39": "28MbZxHCidkWCeR1D3cXpfjZpgAMo7sHpuxLevQqFxSHoMo2juDaRJ1hhuQHpy8wVS8o5yba9wpgN3FdVTAF6uNF",
  "key40": "4aSJUBu4vRu1C1NB7As47ZsTPZ3xUgrzwLxTyrMx7mXswHAb5kMBUB4HHvZm5tSSGsdWMAfpQyQBvCxAqUr2dm5",
  "key41": "GYFxiDgzQr8p2QibcMKq8dn32bNmcQw2TmfDgdCcVkktVFoYdPchicRiY5zcUXhwxRvoNFTY3Y4DviuRWzgXBep",
  "key42": "3DqbmUReuNdjFKkqgQkz65FzaDkmaw8XrisVTwVVP7U476LufQryMTTtkKhUinzSmFyzPxGjyknHyvcM8k6GApgF"
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
