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
    "4kfs4A96KMa3xtkiubm33WEKDgVVSHDb1zQBA8sfKXCLsn3sbSVBVWhRYSwmp3LgHpjdnJZJgpzYUgrPs6Hi9NJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568x9Z7TUpXZy1gi4g32TqnEvs8VvxsGkErpmoe5R8LxgC1JdvBGCo4WFnc1rHuBNPAZtiUeyV8SC4yqD3jDNPpj",
  "key1": "3tSDyMtqdh68rDgASEZTkXYnhBF9hNpSwbFiUCX5xoX61nQ3iaMg2AskQsu8yyzsUimYhgGCP77UvGaQ7DDRCTap",
  "key2": "51g6B6whxvAs27ihrRZwwWVDqsxzzLc84KxLD2ExazrGzcYuXD5D2rzdWGz58kvExYsKrMGyDWRCY56FtCJxAvzY",
  "key3": "4JM38dLt9zM9pB7fn7P6BmSWmMb93YgCd4bVp1QJQEzeoFzov8U4LK65wofevHmpttcTC76WAToExga8zRgpFfra",
  "key4": "3hrTP5ui7Ta3dCTGWTSAJSPJFmDokMWgfM88ytBbdtNR6Z98CxRW53K3T8HD3LX4AV25qrruoBwAymqWzeENhfoK",
  "key5": "659Gaj9MTHoXTohCoLBPkdTjyCW95NSnmEozDZst1a3FVbQxcY2Zk6VyNqq3AbiHb7wWBeZxGKPG6n4rWwKNvE6S",
  "key6": "SB4H3SRS5Cbm25VhF6DbS1F2MAbWSGABafrk5zoSGw75zd7CTNtVUb6Wu6ABfpw3oyikcVgkKw1hy4snZjQqFrC",
  "key7": "2F9TEgr1NFswS77XNcAQRXwDz2m9JYW7t79c7qVuwTLrosoqjrAjYSAWwk8B6xnueybdGFVehSWq1wpvUfNjzvs1",
  "key8": "3x9RWS2EMhQAS4UhsfVjMWiiquMZDqFJEJ1zJc7SL8zmjDLwKZirjnwdoaHYWcc42aGyYyKbkyYVpzFe5Sbq2FSU",
  "key9": "nM5HqQBRNhiYFKZ8HTXDa5HWJoYa86kCaqtSoAQBPxGdQ7r32uLTvT8rdjw23MjGgh2JLNpJBvCS1qfSgsJXAwP",
  "key10": "3n6KeRHgbxmtW7TJ6WHgJdK6wgoN4STmWxnoVMNZAjwr2x1faQx6YJQm3u1yuzeViB9o94iHLWpFqSA6yf45qT2z",
  "key11": "389hy6yixbv6RvHX123WQjqGtSGT6NMNQBYx3ju8eWnfw84Q18KUVjxuRrUpYsPZeCQFc5YQhXd4sxuRJCpDwV8U",
  "key12": "249usAySzv13h45KoBBB7NQdMCNsG6N6JdQtV62j9pGvenGbknJnFWHvSTEHjWXp5bvBSm5bDuwJUXAjFgRjmo8m",
  "key13": "2pmk8J13N4QdoDvzWXhdqDWWDsJ2mmDPskEkbVaB1JDJvSfDhUnPsCQCFgs6ESjxHDWNqMbSPjo9Vw6EExsLAPuA",
  "key14": "5czGbkUy9KuRaXzT5gyTL8yRsRijvxsVimY1SQwFBBtdKZCZPekHxAKttkEPHVtr6FWtDJZNoGJgP9EYSwXotdmN",
  "key15": "2effqjbqTSYj95EM8YJJ47FVFr4FitDjdREjD2RiRZBLUatAjfkmzCUg421sX1QmQUgi2yvaHeXYrGBC5eKHWbBn",
  "key16": "3QCxfT2kXosZ2UaETb1ykEmpkHTJcyqs2x2DxGYF4qMXvQXMM4yRB93dQA5w1G5HBQPz8DMNKTVMeqSxRHHn1w84",
  "key17": "2pE7r7ZFKHBvAaj6Wv1HwSNpcKy3JwmyQRm2LkkAvMdPsV1n1KVrGKs4rE5JyZTpj7MdryXNudVJrugqGUQctzNt",
  "key18": "5oFaN4Dk8w7Jehxq75aYy9BimzdkTxFiZkhD9YF6mgmGtMgDkmL7SNFuq5PJP5hWdqXZLKWxx5urvzJ2EHy4mvTX",
  "key19": "2aRHA43jZAuGwcX4Vq7gem1KwEbL6Q7pvTJFT2GzopWBoxXuTCSFqWxByZS7t94HFk5KUHKmsL9pgcsG1C94kC9T",
  "key20": "3fy9B2UqCNDa8Dkm51bCQZast9jF4iyFAGJPb7vAAE9SyCz2yBj8ZguuNP9KNYabgdEA1zZP9ctsRQjL6EiAbKwv",
  "key21": "4pbuC1WcgynC2vyM2nepjWArpka3ZjDK1Z3YftFsySsWGpP7fxc5ttabqbjCeZs8zB5PYrHzwJdXYXMvPqa19zTG",
  "key22": "3bHk6kjUF5AkVoz2kJBtFe1T8VpzydPf82njttXLA7gBZtq2Bb94cQ6qfQaj8cJnjjH48CH7bQzZzbf8istjg46c",
  "key23": "5Fiieiak6MfH5yGH8CpXAmFED11T9cZCk47b9bXkBYMKg9UHviWQngPPxQN23NyJKT9AZcgB3Yu22xLYtFWrx2U2",
  "key24": "xqEcVHKWWtjbKH9g3GQLVYzkXzuVTM2XxVKnAhbai9H2MqrohxYuJfYyAsExKtFe64rTiGcA38cXhgfp2ZzpH7J",
  "key25": "3GrmLoSHvy1WbkWNCvh5bTXZ2Q4W1BymJYHrgG79gtajUK16mo7qzJbZvL8yk1Kh9wRkJmZzM7oXs6CXB5K83cPF",
  "key26": "tT3TW6bjhMYx221DH93QFoxyfDpkzPYk1CjX7ehYprv3cs71TZcCX3j4TEW9v9bEUJzqLbC1B7jqXLxSENgRoko",
  "key27": "2chU6c9AMvwDjG9hXNH1piNQzwTgHNWomX3ewJs4Fya7mRwmWf6dj3CTU7Gk2359kBEs1CjcXfXkPMefWWK2ASFe",
  "key28": "yJaeXDhgt7KCSgTtRQ3Wj5dGLxyJqsrgmV14tmxLxynBfgyFaJdLQALsj9EueFNExHfj3H6FX379UkUMynsoTc4",
  "key29": "3ZjrAwbajnnwuRcbmQnTgBi1ckxdMSBpfogzVYwzfGkLD9YTzgFkavtS2qxQn8QUV2fvgSzcjsHBLhYmX1FyjTdG",
  "key30": "3RBWggWH1X2bginZq4vdVK1ZumSDbi2KqY9kztHggfqzpMGQxcLytu281eyUEqzTUQQ3fRZSQnDZzvQoLmQqyVxf",
  "key31": "64y3rcZYHN6nq3krzaL7m7MgNf1DzACxbCPX7k3jBcmo6ZJyqogVYkU8RManaRTmSDdM78Y1HknHwB88weidLYg3",
  "key32": "E6ew3SdBC1sX6G8Wjh1oChE2HJxPopdL2tZjjune96aZevgS17FPmwXzJ5AHot98xK15auJAzmKq1N9wSPC6ovb",
  "key33": "4GyeeA72kbKH1GCRkXGdkx4k1CBdzXs1L6GAwEt2sHmGXemA97iHS4mFQktJpERuVxJgi8cBhnM1hqhyZebDbtjg",
  "key34": "5UsRKNfwT2gWMS5gHZJ47vUHXN3geeLSiwWmCz6BnRoPtBv13kvovKAUrVgkheUSGKWrb3nin7d5PoyD6fmsuPH8",
  "key35": "591BZ73HWQt8fxKhskxjxybUVme1c3W6kUEP7VeaZdkrdPWcgKhmiY5Kt4keLQnmDtFbSQfjRyvWg1z1WxvfG9cq",
  "key36": "iXBEQiRPt2YNcd1QzUjtgbQ4XJ77j7P3uEzKAffz9DrQPknEpcTWMdmctES2zdYasv5k9v6y2TbYuruuC7ptbuy",
  "key37": "5PVr18nx4Si4do7vpfWdPc2uP1AukBaiMq4QNg5dW2hfbJB7FjBkJh5YRt5PRmmX3q6Y7yqZLjvL1pTgQvQt2d4C",
  "key38": "MrGfZ5eT9FfRKFkyiLRG5RjbDV2ZPp7ByAg1rKwdtsRHp641Hj3bvXGjuW4gqQQKB85vyhz6yiZRNp2x5CQLofE",
  "key39": "4XovN2z7bnzLtzy6HCHQDz3aEBHLLC7ioZ7ZkxXiem8dGajE96oD6Xx6UUJXHg9VPyxApyz29pkrRKMt7Sp3SnHt"
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
