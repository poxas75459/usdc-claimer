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
    "5poz23rewwpf2UFUm6Wc2wKVGNsFgjDLVirYQfcwhoe7mdMcRZoMTqzojeBWorSAhm8ZT7Q1zyQepF7fSadPSKqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jTwJrntygrb8iKLbg4VvTjjRJYf4XtHrFmk3xbHFyRbM7KCjzSr6YB8Ugedhd1Lx9svwdinqavs5794xofXz28h",
  "key1": "49jGePBjXxj9364JPszbAyHr6cuUgbqUJJGghbm3YaTXYu5kBvS1SCEMwEV894vmALVNBP44Up54NAzdj8mky4d",
  "key2": "27VZM5w82rb8Le9ELzBXhp6G7V78ncinTk7dxGm2AABv4oLkzcDmbuebKV6admdFg8LN3ZvhbfUauHqJ3cMFFY16",
  "key3": "4NJCy5FPCWVyf73VHQFtuWdwTQ6NSr5aUKec2RhyQhCGiPQcMankKomoMiJsBv7PRnU243xBG6uueaofHx413SPo",
  "key4": "4X5GwDBz1qzw11qEfsmqMErHh3zvQXzV47ypayDUCqRJviKbQ8LgkEUyMkLWvGPdGgYyKW1iaUyK54Bu6GZn1rwo",
  "key5": "a5HuqqZNKvgh22Y9Fy5fk48G8gukSxZgDrPe6MV7C3FtNrRHuxv3V3Y8kYTTht2J9jNHKjgppN7V86damWFLqY2",
  "key6": "SgmDEoJ2N2eTeKZJgA2wCTCciut5xj8ZuJ7zYhHq7U58LQ8Gor39G5wAxtawunEStbLkuFkY3cktGZ7pAKfjecd",
  "key7": "5p2oyfGV1uqAVGR3bk7n81oiJW3gSh9aUDnKJPUGT9HGkggwbE6JxZ7CD7gC1ET7gUk4kxZwoWJAmZ8VtBoKSrAX",
  "key8": "32SMAkFszyCayDQCXSkq7wdWeUFxaUwqDsnEWPFhZ7MjrAZ4bwzcWpiVnW2PyfPZgjRPTYq7kb14j7tWoduhzF36",
  "key9": "21VwM6MNt798mm1L4hqXtjdWEPdNYCgD3jtHyGGqbNPhPfLShKy7nBRNTDsGQSEUi7Zp9xJ4JFW4BBpuvySofVn1",
  "key10": "3bCabRqdh2S7824ah1JNk3RXvMZxSq8oikkhe8FMUeLrMoAjUKZHU9CC18BVP2RarX4QSJm9kzqFMZTd63MwUZ5n",
  "key11": "5BA7kvMjJH8fd2uJXJ6BxjyzNgSdhXYBUCXp71qcgNt1Pgd6QGCjf8C4YN5xJ5eu3fB98HvLnuZKwMqsDJGmxqzd",
  "key12": "2pUVyS4chmhZq6CtecpJwJaAJht3hfnThmtgnS8hc2vpNPkkGarNdPC6HmLnBmL59qFbzXqVDmVmPa1QgKpTLvQR",
  "key13": "5iNBgjd5YJ8NYxLQjXNZmnfsZWRQFu6bcHA1Hv5SBVhETwa32na7M2bRsoDEPzXuwb1HdoZCCHDDf4sQfDiQkN7y",
  "key14": "BaBTF3mvzMfrnaWyn6RsXLd6h6me1t9EjezTh5aJ2is8wjTHYyap1xbNPJ36akzWC5uysxw815QnaJv2twBJoFf",
  "key15": "3pr48YNuSqmtAJ3PzdhWEpZthvehKHcxdKjLsBY4soBrbwywdtadtLcgDwMDQq8kPcdC4nrrpD5FFvJHSUNZvH1c",
  "key16": "64ZtFXH77ks4NLJKLA2kFWggarvJiMtEyn5FdjTcCj8svL7GZuD7wmjyhtQfJNEMUcXa54kCPcyJnaDcUtewfjjM",
  "key17": "2P61LQLdWMA3RWgyiDhFF81geuT8N8uCKJqwSVUwYFpkCjXfBFK1kX1Kfj9WnhQyARNYUKaHiaPgyGpN6smD2bPa",
  "key18": "cpfE11G1DNzoShmWExzoAeocHeWSxWzFaCLKv35cfFvZWMzA4gvKqy3vp7RV13hFE7B1gqE6fYrDeRgYTE1nbJ1",
  "key19": "2E8pFqDwxDP3eYZdZeDSUsXpjJGH95JmdLkJvFLspE86sX8ZFGM17HqpiKmU3yxHGKM6EHhmzq8CitjC9wowG489",
  "key20": "2EfQqcqf81LCdx7UJizYUJs8Tm8LKUyf3dmuXq6jgwRem9MDL2eWERV4cczaDod2mquAXBNGKkRF9ED5rvQCm3Hv",
  "key21": "GChEg211DRRfKC145W69Dc5s9PJXGj2ykT61r3g2espQCFV8qPrZuQnwXi2f4CeS8G29Va2tHmyx8YriCrPn7sa",
  "key22": "2nDeRPp7Y1Qpg6iEPUCBNQXkoDKuav9VAmELQ9FGdWyftZu42do2UEZVR1y5gcYxVUKqqRBF24whjzXtjHG93rWR",
  "key23": "i7WxV7s36XySCH8of5JYHGnrRjKiGBQHJxzpsBvKSmutLRr15NgfN5zz1ttJ77Rv8yQGhyYxzBLejJeh2YKaksR",
  "key24": "2TfWgDW5Uj5zepCm3ry1WFcAGEBoKiMw8pCYRcEE3h6CmT9hWhUpnBiMXQruR6KqWdtRiFhsrCHPjFF2BJpkcDtJ",
  "key25": "5qXTQpgQuBa8gnuMNqghu2mWJUqXMDcPeiddEgd1z84875bitRUQh1XNd9kBB6wPu5bqfqPdvg4HgYdzMThDEHDZ",
  "key26": "vzg4nRGaCmdA2Xksv7bey4J3Ex7xuqNboBrRX4Afu6j1e4oZS1DAmGXegkpCiw8D2ER9DmtmRir1cmYbWrir7yK",
  "key27": "2TrJWbjCTZw5PwXxcwinhx7kPpoi4XW5moTd3poq7GgCjRUKpUuJrdeLUWNGFMF112RWZS3D2qz1jLFsBZXuVLrV",
  "key28": "2rkHDS4XG5tMJQVqfSswSbtyZmYz6SBFMHNjepHkyXavHY5Ebqx8xr5PFvx8Lv5WRTzP4JNXPrFub4J3G2sRtp1L",
  "key29": "Aba61MnqXd9EwxDYJjYjDnypge6GMXo1Q2iD3hFs4uwCahSWeZAM3HYtMKRrhf5XghBkETRTE3tbotq2uYNpPEh",
  "key30": "yhBEffZ4zWLxMRHJEy9cxGijXwDByF9AmmFSFnt7zbWYWuZva1RPzpV8XmoKWDe9u39w2HMFvJPynyYQxehrQX2",
  "key31": "4wruN9BVCViUsFK9KThLRJDQzD5Ha8zCRQHSkMv6kz1epMb8ohaYMXGBRMr3mtJWH317AsdQGWEFRkaKb9G6J1Ue",
  "key32": "2A32YabXwM8LmTGncffQijaGyn3C65YgkUYweFyqa746YKsGvCk8omQzAN9sW94dBLjn5advWXeoEHCybbd8YAug",
  "key33": "3cuDcvMh2DPW8jcsMxMfrfBT1WwyfwmCw28NFQoShhsBtaADTooQ1Mewe7hje3j2WS4Mn4k6Bp3Z7EQVwMNXKRk3",
  "key34": "23GMRP1qYXgVGMZApJideLXcBjaaQPbWFbW4ST3uyuC4XukES18zoJBMe2xn1DiBMZNSXRM4WzA8pHW7sAYvMmtQ",
  "key35": "4FkTAtyBQJLQUFD5QgrBMmy5GfsDhLgZFBRtJATBxd3dsGfx1ekP97g4QzViKGENm1miCuhEcJUJDcy7gYxyxFd1",
  "key36": "2ooG3sS8CHxQdxYH4UQau8iBMPmjknKpRWhKEmhSS8QkZ4BuxKcHEE9DnUZrEhW6CXXMhNKnogsZBJvp6pLiJj5G",
  "key37": "2w4RZAgr11VVii4YBLr2yoZW6pvkQ1pJzdCXjDa6jHWX8dwAesY56Bbk6BnTkw7WiEKtTtwiKpsfyg9WPw5iihP8",
  "key38": "2euiV4WqzZVtJL49tGHQamGGmUVPredrpasNgNo15Qic3vDcx5h1dbrx1wgAZL9gZtzjXNbHLUjvnaaxuuYaHsYj",
  "key39": "38PRVRX6zXcwh7y4yzurQuwjwYQPCD5NZa2ix7gAEZ4Xckr1YLWMzCE9xaddDqXQQn1uXUvookh6jcaiCQrUrJom",
  "key40": "FHrJQusxjywzvgefFnttgCe522eG4hawFodj3bqxm6hrhenWRJnsygXXxu5dVArZhBQx2UfUdfugNPxZozwhsB3",
  "key41": "5wX2ZbXgrsAXEBfTPZfBgPw1PF8VFkVJEBy16eej1e96P1JXs7wi6M6QApjYne2DndmUqeh4Mop7XLcG3BaGz4qw",
  "key42": "4zcFNdvzEdT8dj4CsXfY34f3EaCzsfGznSUhADaP8iGeNnT1WwztdxXFacg7G8BgENTUSY1MZoCXHxeN3UvU8QgB"
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
