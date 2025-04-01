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
    "5YaDvSR7U49B1y54BrK2Xt8KunCemKw1CL8UPr2yy4LkM9zWu6As7iZsKHPkd5UAncUR8kmad9B26EAajza339uF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FDGxuSTxvC8G6pUNpZMEZL4654i7kue1b3i5iYExKzHLXEFMQ9fuZGF9aopDXcQ6R5LMLw8xWQ2kSA1h93AF2vo",
  "key1": "doE8RcK8AtBK3shPU3Cjr2Whjse15qf8bQQDC6dE6vuPnaDo8mMw2qqceT2ajNeXsWJq5cY1T8Xsj4GhZ6KoXmf",
  "key2": "5oWmnbJiAmZbQySEbC1Yv1XjLbUWf8gj5axC8WNbZ4zxR3A6DFXSymWeWKVsEVH9FdofW9Wgkq1sZZ2ot3WDFGZY",
  "key3": "2M7LYvLj5FDdpwVAkEk1YHHKmEpwAVTgy6MRSex8K595opFo1pTeeRJmxTyJp6C8s73xMxiJ9pvU5DMMRMjrta15",
  "key4": "3cCL4w5rtvs1QMKLpzkTV7yiwMXw3m2W29pysceBQTMtBdJV78b2H35x7SzU5TPvYe4Qnpnnzokddm6HJoYFJx6C",
  "key5": "39W3a8Kp4DTfH63HuCZvYoafzUR7fMP6soYK8DmJas3oBW5BeoNDUtPwa7rsm3pukDxqFdxweZuEH9TLMAoFFvFe",
  "key6": "eCbhNLgwYA6DgFYst8RpyhVey1rzrqpheuyY9UWu2ZG3bT42fEDY4naKz3SFdAAi1qB2vZnjP1qqemkU46icLbp",
  "key7": "5jTpAvH6bAUCJWc3Gi9AV2TDEmstKp3TWwMHSd1X7TNZuNUDBXjjfitcJCipB1azERB7V3BsxuDP1fkWat1aKEE8",
  "key8": "4JDU2v4vys7JSBNQdyvZRctKgUJ5a39qWGZ1eySyM42XzEtfPLoevmPmDGujSps5jjutsB8sDhUw2LF8txLN9arR",
  "key9": "3JmsyiGnqpx5hoTGQ24YnLSqibNRbmyi77ThuhEGvDUBU7uSR5aDy7zejHx5KXh4V8ar5pgchb91SGDRvDFV4yx3",
  "key10": "4cRyeWcDzfRoxs1Arjs94u2BzUXqQ97DnPABQsGYRLaxQoQ7CE8hPFXhbMkz39KDEstyzLAXRUnpoC6z6E7J9hXm",
  "key11": "4pG5PbdTs9VmuvTXufJENh5oHtMHQBD7cY2aCGyCXZm3GG6tr1gPjz5v1DSHffxoMgZCGa9X4xiqJsjjhNNCbzDw",
  "key12": "Zs1hujSmPBndBLKcAKPbcHyMybaUkqH5daRjapJScNoxwWr97BNGkbPuamA9x25wbXgQzYmeTR7pwkqM2tFcCvL",
  "key13": "5MC6Hm6omXd7eeCHJfjRxyNdPpLTt7A15yVKHEg5ouUamoHFaaUfRgq2SN86GC8PXyhhZTX41LF1FZRrdVsAy6D8",
  "key14": "64F2W4zaKfHkYcwCBCK5apqmiNnP5sxv3fMkehqnveXDvZjppKT9oKX9SuAk73NLBWwzPba7KqYosPqWAw2DAQqr",
  "key15": "42HiU92xJThgSKPUZLUdNvZLanMxAswPWg8J2wVNRVE9GzCbGd7G8ovNp8kXZdWmvuQzgKyUxfwPcUHgy1BBiF6v",
  "key16": "5T2QoxUhW22ZjLg7Tmi1VgW7QRNeWbJ3qav6H4NrfW8eYUEzjSKT4Eep65tToKCqVkM3yvBw7GfS6y5oDZwPLtoN",
  "key17": "5VVU1To52VVNuREyTFsfUhDCi5z285Wdxw2kgkD78yvyiuLPH25T1RggqY5NZtPM7PPG31dSFxRePsamCZZRR7vw",
  "key18": "4Zg7tDZWxsePwQ88ckQ1ai8EGthjyLfnTgQEXT1wKbGwJyAvsqzZoinRS54uVqkg51UvxyFzuDM9q6LAL4bNWmV2",
  "key19": "326iaLZadHECJeVxxrSLN57TZgJsJA6ojoXjfwMFrSjNYGkDQZac54ykWjukBe43A1cv7hmuFReBUx2aPghBWz3G",
  "key20": "2eGBk8CQE47LJnfkqcdQDtZmUrHkqboVC21N1KfvfTPNxMAx9MouKTCUdcFcLioQLFWuLEocnH7qCeBnEphhpEv2",
  "key21": "2axJiFxJJTFu7A9yVK1MLRJRqk1KQTjvhYY9duPpXXCfEHbkH4kakCDgzQ7jF4d3qaJM2yGoXJij6tg1QfysdqDm",
  "key22": "53SgpSGaYhB1nvPXXEAHBq3G3qe2hG3Z35zVU95r7aZFVM54aMhgEa1kTXpeiZJWdoXHhyQUvccJ9Ga6jUpTHfR8",
  "key23": "3dET64fd56yGP38b8RBVf8i9CUq15oesjN2t26LpnScUtPjDMfoNsXUHpmZ6fouaFxu25xaxe5iJA2hzqaKrw6Fu",
  "key24": "2h72KV21WFseYbHTWKrmC6RfydT1e6kequvgZ7mbHfzbqCo5sN1uVLFmfAUbch1fLKRatkQL5gdUYeoHf6RDKyxo",
  "key25": "Xcxz41B4k2Jr1sruEDjpDowgeDeLwn4obvWDSnrH2FVRVboWwsu9WdGsrXQwK377ETDKbBhBfYTRwPkejdAwve9",
  "key26": "3uiqksDJgim5FWRbu7BgX5H67Pr66xHYm1Kh7CgBVTMHp1kdcEL7VKUCEp1uUTMHn1UX9NxRhSukbb1HLWjjxopf",
  "key27": "49bqbJLyUDZwtDnkjpZiq6R9MV9zSfwrCyZgifLK7zMRijx3fuyLFBEjsVdvf1HKUj9RJ8LKwNg1vkrhkNYSePDm",
  "key28": "5WSSc5WB9ha3QdfGSVidfUtY4sJiYaEj5B72odUPjz5LLWXD8P2JRUzKA2GZLo6qtdk7uRTeaEchbh69iZSiSxVo",
  "key29": "54GLtuCuggBp8QcfGgZkCWnFVJGieJHYwipSsXTaF8L53CFqPcNLpS6rxmyETHNTRzdmszj1h58B6VNtQbFUPu7C",
  "key30": "2EdsPCRbDnWT3epnGoyTUJCYEYbcRiRKTNmrQ2VuomtVdzSyR8bHFW4FbtLbbvoxkosWCYttCnsBWFdTLgxCz83h",
  "key31": "3uooXf9V4yRSYj75qNZfnKYKUyinmbVEwMiCgwAgHterYGHTdej92ftFhe1azFz69K57EghmbxNaYccNMkFJERcb",
  "key32": "4emhSfNxfPJD8ncMdkXVBto2rDVBcsyJD6iioYoxVJ3yKUrTuo9MQvx7Q8z8yM14Vaq35ivqS7h5mxtk3f3heZuv",
  "key33": "4TpKvDDbMiSeaHgkox2dSnbdJvSM52rbwZxpbrwopQQKKsjBQedZzBeVvA1T5uZQaB6Ao511hDmAdjb4ZJbt6Czj",
  "key34": "2gLA6oUeFsedo8RPyNVvh9pprtp3P6BYHcCFKs6yhCd8P7FgeehoUnrxuY3hqDbVJsdDLLpEtYrFVkHFZpuevXKG",
  "key35": "4JxUdSmF3DvLaZJ6HTREcYXX5Jb5upUVWuRMHtZj5u8FVpHSkiJmwMvZ2zn9wA1kHsJuzR6UTQ7MrMpjDN53BqRx",
  "key36": "55hf1DfprwimtZ54mcDSXF9dHx5dDswPj8dugHpwnzBP6bZeQhhhw7dpkbYrFwL8i1tBwx4bWpDBDFpyAMcRftWu",
  "key37": "4iCnaxtRQouYLSEWjMnH15zzc55timbTU5YcmgKccKCHcg9o7NYkNzQUUworKtxBX7kMDHaRzmSrL61sGTt4phjL",
  "key38": "3xPgvuB8e69TwN15hkBQgWaHyTi9bdjRf86o5waEgf7sKjMZNG1N53naniinE6Q7d54xLRmL51UYJcbifVCP8NiG",
  "key39": "Wd4d79sHKg2EvgP3YwixpnRQGHv4wCZVUkBRwHxvX3FK6uLj75vD5s6oSZU6p2seS3EVDtnkWFwQBuDz61tajgS",
  "key40": "43tp9PRPsEZd2UFJGAtZ3NP79MrQQnXjdgJRD33RVmLAaMGknUtA7tpPWeV49gcWPjyQ1CTMe77hCH8j5aJ8F9rY",
  "key41": "dPbvn3G6ws7ZKVXNsyUkL4JWW3WPhvjSzEYZ5xP7TuiWwnKFbVo8kSxuQcR4tog4TkmzC9mm8QXVnKNsHNtqW9C",
  "key42": "2KwJpB1zqcsHTB7JhkiVDUa92q43YAboK2JHrXBCS3zBahm9SNkBe8YiGJcLRaSQxvXuwsxJbtkPhcXFuH7imtrq",
  "key43": "LmkeRY36dAU69QGE3iftnLSZC1uesjLALozaG6zLZSK5AZmhpLR9K3EAe2hoa5q3KZyo7ez7LHbHJWqnV6bNnUz"
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
