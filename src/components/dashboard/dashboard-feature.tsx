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
    "kY4vpq7eF2QrD4insA56eMxuhbZQF8UxxBujKcFWZGJzn12pFiN24n3awtSrQPhLLGgqy5cuPBzR43NkfRGV9w2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qw5xw9SnP8Dxsazh1TJhkisS72nkL29ojfJdBFMVBfSrCcyw319wTbYvBHqZyFv7WyLTprNyJ6mzHoeHRbmiMg6",
  "key1": "3nARaiLXCHtNxqG1xWGbpU1drvg8Sdcb5dMipdvqRUtKwHymVxUBCvgdWaKxM1eCiRTcnAGEzRA7QyYMg7cVTuZh",
  "key2": "CJfQEdKTqpKk3m4FGJJYqn4W8Y8r2zmpwHbncU9s2rmdmEG7RhndV7vC1NwmD9T8bNZw1aqLP2dhXFCWq6FMyBd",
  "key3": "5ZQgMqR5qXTe6xwF8xracY4rZdmz1Jru72abPPYRgDN2pRV5KGXKL4c152trPFf9HdLBXstt5m3UJqi3haSFQbuF",
  "key4": "DgixyBwZdZaPEYUPtLVmtFTrA1sQXPFJ5b7STH4zNt7GBfzJ2JfJsdqradaEzpTZejnmRytVSEeJe9xSxMSs1zb",
  "key5": "4qy81EXKWFiyu7Jq9teaoRKZwURvUAmivE6qQ27Ntqkv9sG2nEbk4aJXMw7gbvmc5ZSVKWumXN7WDjs9V9UPh3JC",
  "key6": "5fab644SCTzzcavsz8RqU7WXThgEhgMeHY3U6NjovEoahVXmX2fdUGKD8oTyjaJcJ3uc6PQ8QRTXbbBPfKGdiD1K",
  "key7": "4W61DshEzS7u3jVAw7hJ3dZmkxTe7yTvTw9wWbxM7KipEpJBce4VPL1GKS35i7DR63bvx6dgpExLvFNfQENBMMgG",
  "key8": "qAMbaMfou4TTHaPFubTQPGk7MX63cFW3g5pZQ8TeAQnyMQ7wrc25dJ7ypRcnPR8ESZKu9jA1KiuPgiTtqAGmqjF",
  "key9": "2hcuwBr4GKSZQ5jUSoHixX4qgBG6GXz2izykwnnyVqjjGpczjbju8uvjnP5DAWBjSE6zJRyxs7L7xSG8MGDV6zFW",
  "key10": "5jZJ8TKhAYF3RSQk3ZFib6ySdnWTSkGnopvnzjzxDbhc3S6rWDtJvciWT9Gj3Zkt71FZngK6GaDwWhuiN82uReZz",
  "key11": "2E1EPwvZjFMwnzkRWNVSTcXAYSncZwSGT6RgitHtAhqf4oBvAVh4g4G8Hv8UqV1VZA9o4gkVU2wbQyGCB1JQY3w7",
  "key12": "4VAvwHfzCCR8o8FGCd51GqeVNvMPcvK8BuoCTrtLY3Z9bUcrymrcC8hHTNjyD2hS7zEXzoJfn1s7Wg1RPDyoKLFa",
  "key13": "54BaKbgmrUZnWh9DamMJzNazGJag3ybYK9LZc4Vf6Gnh5YhZrsjjShTroBuAhMj93XQCirwd2nACkvvJiVxR5FRc",
  "key14": "5P8dYDZ3eFMniSn1TAVYujdB5983XEcF4ZEbbRSRaxd5HrWzu3X6W98rqL7ewHgmAQdEg2VJ2D3Xp89DJWTWfZX9",
  "key15": "2gAHFaKhcAbMv79o5eA8HX9JdM3VBujCxwJjyJDsE6zunTHKuHENpYcWqzcpbBNdwZh2WjekaZCjsB6P4gUusT1p",
  "key16": "2YZjkeaET1dGLo9BD9CocNEgSg8JAUUt4JdRYodT3FiJGxtDWvBuntDLgetoS4EPMX2GLmxTEfsJ2rCidtKP53Fz",
  "key17": "5SDCLAEF9X13KWvDow7jY9vEVxHL6zz26Cg1mb26txHraiSMmSSDQN7MPCaW4aiT8PVvt5FvXa3hoZuFbUYvazed",
  "key18": "LuKJNNvwaGfkPCyxXgwjv2ZVE2VwXQoK3DZbbcW2onWg1R84Zv7eWGZ93cuWm3NcAwnKQB9TiQysoCTTuTAbQ3E",
  "key19": "4pJvBbSWdWbU34KKpoK6Vkbw1h2qBRvpCWHJRmXy1YnViCR8QV724kv4wXHYahCZCrwkWXG3v1A3B9WFEpA45Wzc",
  "key20": "Kk3twrndz99YKnp9VttMgyENAfzYQyAEWGTG9BrgzMp7dgFH4K1Srqyo9pavP9cZ1WLZohQb3pNGKAcgyQdBDzy",
  "key21": "272jTnZDY6DbKESEtddvAPqebvCnHTL5g6E8kpBYWt1RkVYPQW6ioTQLqEwumVuG1ezZ6dQfbZamw7NrwubNY2ez",
  "key22": "25nocA78Bj4dVz4pTK1vhZKuHLf5s7EYQ5xihwHfgSKxgeLFsdfDXDd41TyvcYJzvi6F9ankT1tbaLWY1hc32Qus",
  "key23": "33KW1vziJhmgVxMuS9vz561FrdKTM9FAXfD8tQKv3uBnepcnfMErXjfK4prBQAtajbC8tZ76HYLpxJEecewEW8Ep",
  "key24": "4FrigrXsShXUUjkbeUJK1x7vzb7wQxM4sBpD2kechfKTdWnqXAhpKGPaMqKmzfCDP7EargidnWiMcVRW6NvmwpbC",
  "key25": "4DEsMr5ab6z3PB44NebGkjFfax7dN4fmc5HLLkJHVUq9wTg1LqXZvsBQjmDicFnZmXb14Qt54o4E4P1owJbejei2",
  "key26": "3aTPv4BDt4k1GNPZpQzZTvSgiJELJ92tBDk3mFceyEozbsGv1GfL5GYr7Jcz9RebbKtK7MRanVYvNujEPmW5yJ8o",
  "key27": "3d4u2mQTmkyp1gqBpKboxjv73ab3buXKrvv2sRsRW4pPQog6TNuwa2vDVeF51pM76dyVxYBTFfMkyZ3koJuCnTWh",
  "key28": "3g9YXf5t9tfVsTfhcSwNhMFkyUM4WjRoC5b4AXKFFfKBDAoyZa6ciVBm7i4n8nopi1GCucPLoaS6Tpvq1rshdUJK",
  "key29": "4GJEmtunst51ksSqw6ezGQMcRrzYoXXiadN7gEWJWvDU9Y843rrnRfwH8eKXSV8SmUyWzobqKA76eWvYYjoJ9KLT",
  "key30": "RgtohvPBNLAPMdpFmwrVqUxpk5roLZkLP3SCjhuZ3g1uVHZcqy2tDgD3mtM5s7snVK8fsjreSa6tpePxE1qFjhK",
  "key31": "2urzfZzHFU9Udq36a4iVSPrSbceoWsvbepKvDoCqeEGn2eehpq4kDDpktVCrj273LojC53PXhEoodw4hTjQYBkvH",
  "key32": "2ihGdcn6MyDH2MzgejURzhjuVumQ8kn9ESox8NQHQnVpWVdy12cJsdn4Dd8zgjLbx5d7gq3c6g7yGgqxNspvDytg",
  "key33": "5aiRdz7Do9P2UZ2RyQnnFiYuDiWFoWUsVZQZr3WqzNA3ctfgMNrM2X4WYcgKHYB9kzKLaY7f4b25oXxPYihtWHTm",
  "key34": "4jYgutfrEBUXDCViJPH4d1DPKDnQ8UeeLeU3U8tzELHXtsNbcwazcJuyWdcB2GqNvkq8TnKNkfFvwCpxY7Hw6eUw",
  "key35": "W7ymsR2rnT3WoXrzmbmq8XUninsmNwWKUdaEwthcRQxoAc7153otKRQwWWuiDEUQK6SPfdz3sXpGkeSnq2sRTSJ",
  "key36": "2f2ZmJwmK2VZMg1QE4q819xg1rFSn2izy31eE2sZqmkuTVUU1vi9o2tE8BA6VDb9CkuvYAGK21TYs87sEcRqaano",
  "key37": "2VS2r4N5kZm4GZWcYYPDMn6odYM46X1FvruzEqs66iUgQ9RP7ZXEHjPGqS7WuBwhAYuZ3TaD77o2eMW8q4umBSXZ",
  "key38": "5SFqT8YBt6NbmDiMPe8pu6FBg3RYo8XYJAXavHVgRsT9Jhs6vuZMvcGpVuJYJ1FXcobyVNNTy4Ctk5H6pFEX6yEU",
  "key39": "c3iZWaQZacJ8RJDsPWuyk9w9sHRtTAGX1rsYXijf57ZdkwTnaTuUdsp6cVPZLcGGge3yDxhgJ6JbAym2TVwFkFZ",
  "key40": "2kJLR2wEzAwDMXRfY83vzCKzdYaYqyfB6Abmkvng27YFtfoLYxksN8rRvTvvkGuJ7p3XPvnKiT2ySa4MoJDqBfob"
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
