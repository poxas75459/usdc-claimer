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
    "4eHc9YQxVZwWqNJt1G75UMxqBuA36SUn7GEVdqZQVc5TXYot2863p4QaYKPWXDJvRHVuSbQ8VKqHFV81tmNPcurk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xCZhkECNozi5bLdsgonvKvZFXaczLsvYL4mUYm91AjCYv3po5Yqbvfrvhnzst3ZefHsMmBhhCCuKFFBa1LAGcpU",
  "key1": "3AcQxcBtXJc5PB9HMiHDTwTZiXPTKwaJx3oVgyPjkiDxnDFb7HounaESr85KS9FXPudiBUZqdYVp9P7Wben1Yma",
  "key2": "cwx9mZZEptb4MsPHApkEd4u1RFcpzbJDzMQb1WkL5xNNohzuCXsaZEasi5gsD6MqcVZcxSWVVpSQ8oU13BRGCRX",
  "key3": "Und2yZSZYrjK4CMoLreLvzSyT771ZaV8m4PTa6oFGnGPsU5xwxmXgmqwTHmKx1ThYbuhTCFe4xj38zJZKatA4T3",
  "key4": "3iaR4dmMQ9bUi1G3b6EeEkCvj6UwkHNiUeiqnyQtdSfdurZnznWhSXMxsUp8CXhTENVyQa6n9xTKKYxeRC39WEj3",
  "key5": "5vZhC1We4xTVdq1CXXeLE7yt5znPcHhThhkvVfyyRD3xGV1VsHbAGGtMqpVF14qA37tDspiDUFRUty5bYtCSVgqd",
  "key6": "5yfcQ9WKYCe7uML2uQadqedhg3L3MQQoeariA9P1EK33X8rQz9R7JDqfsuZm5xWcMwfoe65kLvb3n6nAdr2MUyGR",
  "key7": "5ghejUarGegpHdUTDwzDsrhNDqHSxkBPF56Bmcp9iYYF15oJUtVcRudjupSe2v64gBKMxsN6YzzD9oq7SgnpRWrQ",
  "key8": "4vEq5yH9Vn216yR6ZH8mLiJuxAdWhCo5MibviaCmhA53mWcu3Gd4JMvuamJzTvcgSMNQ1Zo4wByivzusDzg35yVr",
  "key9": "4Zbzs5B8Dz2jZ5wsB5j6J7CE3fpEcnvGAKXnd86wm8bB5gpcFAga7oGfUvTB4QGjRrVwF31J5vbaUt2NnmkKDxH8",
  "key10": "383rnfwVvpHWkEuDHML4P4gHJYdMLZEC3bUsfUjyo5j9wUCzDmpjxG8jrJr5jNgMKvEKHa7j9QuCQURfz8Biwsk6",
  "key11": "2ccn4s5osHPhyUHrCsyqXQYHLqcNzwk4PyVe3aScdezsscAToRtgVf4eG4f4PahcboCx4VEphEYqY3s4ehmZbW3T",
  "key12": "vT89dLy2paYDq3y6NjvvJfgChuuE7PrpdVR39t55wbZCLLJXfKrkDNWNYGd5Rh6sDopq2syzDF8by46Xdw6tMLw",
  "key13": "33Zf7Kipqk6a3M154vk1F8WkW28PDGkJJrSUSj9i5t93zb6wX4hTJY4S96ShfmVWsGTw3zxDGDh1Br1Y4UfD8Zhn",
  "key14": "22M54CJ2F1jJsTQvbsTVWXq4ZChXPuaRS3Z3gac3wiDPyQNZ74URMPw7wEM2nHCfyAxcoGJmhfWv33iNTViazk3U",
  "key15": "5Bi4qPCMLr9PhFYghpvAJotNH4pfuu5Sgf4ezskcwgregdvtfVwtTcQ99ErFJ8CUY1Vhk7pmiMSSCduuq1JR6Qgu",
  "key16": "4fHjwzPSPUU23EBH9jvBCcWsgsvFqBUfVhSjUY3YJq1BJ3yyrhjP8bwEzm95GJ2qdYYYqFwJkLfMDGokQAqs8nmS",
  "key17": "5F3Jxv1vHDQ9otSHQcC4EFhueiKbsEumbHx55GNJhQT7qJ6ZY99VVqwwZkdTwqseiY55EwqpSoaXPvfhiERLJN8n",
  "key18": "5a8nh1ibB6kK9Lq7veduSQpY9te9nbWmXYDHx3ac6fgWSHsRYmjd9VdjEfGCJK693wB7QeTgKFFzJMw2t61eRajo",
  "key19": "upwtWNfoLLWjuWUZzNcL5rSdFChSPupeeYxuUvniiLJTXb83PnXbYQNEzV1ziciBydM2jgbe6Rg13ugpdUwddeW",
  "key20": "DwBFBLWDnj4EjCZigfQGcv2JMGpMKhi558BRtxxGDkrmvRo7RahdBRQPQQX5gyBBsLAvjxmizJ3LYVqvEYHgm23",
  "key21": "3A4jyme8ZxU8XDvoGviz2dP7wJyYf3Jo3EfHEYGAitR4whozq26KELiVNXH85kU7C3gogFqYJZufAdZU2KwsAUeY",
  "key22": "2a4fZFMr7La7JiLbjf64XkEyif5phhkFXXy9n5cVcwTQEmKErCbYokDBvwmKReBMcnotu2mQRAUsYMCFryJnrior",
  "key23": "2J4PnpRrE5pjWntaS4GdtsfxdpYzFEhBKhP8g1CbzYPj27QVowib4YJ8yD3RtkVHmeDQCrEXZTA2vsLd4cdbsfms",
  "key24": "3CL1M9KVF1LA6QhqhsC8bHPM4T6poaN2VNdTkbCLdnJoU6DVYZLW3eVXeGsqHW6QfwP776kQxBtmU3c9fKCYWtNS",
  "key25": "2ptL6c3fN1dBNHRJRJnapsyrg2ZN8cN3RRPV91EVCw2tiE3DWXFJJ3Yak5yoRjvR7qN8keQKovb5vN88eR9zh1vj",
  "key26": "24DzQq3fnv28qZxzNtVApokyxVigEGJZjt7WsPjwjpzydAkFqcXrq3caz3s2R5Zk9HRwgYZdkW2u53SwZGG3JvcD",
  "key27": "hUG2VVrxikK1PqyXyPQiYRSP7SYm97oHhxDLZH7DXZZxJzJjFY1RfCyawvfBrJie4nKKhokKeFzQdqPCCynsqXa",
  "key28": "3MNpDQZ9J3sPKzqLWSYdNsoyJxZ2LSfhTmJptbzZHvbXk8CpeEH7a3oWgnjjnmAxKHuZnkoLK4gibJpAn342pBgq",
  "key29": "2847autL8XohNhL8XzQZnA2TNWZXBzpoYYrru9TksXNqNscxgFNEXStWeu95WxttjxBFmBpvL6PcF1urQxUUreby",
  "key30": "4EG6hRqfsFZsg4xKiQQu6VvZqrWV8ZCJuz4YtxVgkhNFjxtpWGrdvoaT7mFhDDbwfSRfQuWUEMy59YrggdGPwEs3",
  "key31": "4tn5uQ33T32HPCWUzd6BcsBk1rEN4pqt5PVbaenpF4e6iLCt99K3gXco3FtUQnXUrYxdZtmPeinNPeiWuUHHojBY",
  "key32": "cmRyhRAJz4EvTWeCKccwbsDN4wiFZqzMMwb8gCXyZAaewzRdUVyTZybDUzh993XLjGZA29wPrvqv19tb5P6ZPxQ",
  "key33": "4AeVBCvkhFzpKgsL9eQyfnjChdGDMPfFD8rwXGaeBenEWqJgUF3q9oavyR13QDJyp9YxazJ9xLBaReHEMTxea7Mk",
  "key34": "549QGreSRoTSQPBGi17sHfNXD3Ww4Ynu7d4qr3KKBd4oVdHeq19RiUP1wHU8yvueXVbU6SuwHKvhEUk58vn9hps"
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
