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
    "4wZg4HZshz55miJ5pF7NkVegE4afU4TVUCcWwXhFDgTt7SKWe8U7a9HTouDAP4KhPkvcFsbzyHxAL9M3EgtKQxQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KLm25mSJy9CqALCruXM6ZG3Kvi3CBRE7ksw97hhjvu2qQFTtPrAnAdcGSzNRN1TRPHJNuCWGf9MkMVViMmG3q1",
  "key1": "3Sjv8F48G2fqLDaHhFppPbKDyGGuuGdokbqPDg5x8drZSfyoVLdGDfG1KBq6vrqEEE8ANAR9tDEMxTvdGArzsUS3",
  "key2": "46FyZyvpqc1TyCnhY8heTUAKT6pSWkijvJjNpiMHHErPbxwJHJRwbjFg5dgPSFWFkvUaBCkqKqRr5dxPQNBi8vbf",
  "key3": "D11F3NEutU96LgKKeHdWDwZWw2AZGpLxLC7ThfWvNRr6C3Uy3JzMH2S5C2Kg9UkoRahpZpuUuJ9URXD4TTfkSTA",
  "key4": "46ZR2V8tH3M3EZoS2xfT9pAoH3xrFND5MwX9gRt5CWb8iTFXRR26BbUhg9bLUBXz2BdZgcEHSkHL4GHvL43Z3k2H",
  "key5": "2Y4N9wmu8eUFhji9tf1y4CrFfCWDnupji9LxudqxTh9kuHA7Hz1VeSR6DJ3DVnufVwz7VJ5E1YHGwCg1fuEYv3rM",
  "key6": "2hZeo1ymtho8RoCKbmNoYPfNjgyhhHrJnn1g64ENRKZP1LsAkP1NEMf6ymnDmvKYJeGLXtjg6UG2Fnj6vtRyLR1J",
  "key7": "5mEistDmMSyEKLx7xBhibjsrGPsDydav5CNbfw9e1vSGP3B6gE68FENH8wh7iHF6Z62TKaQxUyr8XbK2hNcfbSKG",
  "key8": "278jdkpCfYs7Y5qLQb8F2X6WtAkoo9FBf3vzGx464eqeXLxCrcgnX3iUum2mB3WyBaFGqsgi48TwD78qKHjdMyGG",
  "key9": "55FyAAEN3xFbhkyJeMnBjHAUN9v5SiWmhoYB8nFp5fXdYbfQJjKutMWB46yLPvES8y6e1ePzbBjBYyx2hfXQNDP8",
  "key10": "5QF4bwpdwQmV4GCQJyJGRtSknvf3GZ6AHtZNhdKiTZcP4fEZRGup8Cp3ZQmDjcakL6KnZ3uMu5zSKtcRHfMY12sy",
  "key11": "XPD4sTzpArZ8ZacoYDVkC75Y3fmniLtyzzbF5u3j4gzu14ZcRWeUdgqTjvxF89yRBvzE9kNBBQjoVpx972JEC44",
  "key12": "5RUtrMZHb4Xnfv2NSn3CLPHuJaE5zWRj9x8py4DHDvMakk3BHfvZrM4w3iaibrWzZhyDZ395Q8V2yQ5qTuVQfKaw",
  "key13": "5Vzqnn3PFQfRedMcwycFC8kjwo4XWJqiKS548LGBugjQGQmC1KHVUCoyzcpzEBt3pJdmxBZanwUNGpt3JmoWwSzy",
  "key14": "5bF3EqvS7tvXmYWeNTyiY1J7h16GCeGuEc9jNMG9PLJTg7N8WD3TiLQAukySg8DCP32VPrFnUcnsRBsbfoGpX69B",
  "key15": "5BAyk9a8Ur8vnEhH9otCG7M9x7UAYvaY55KUkPgNqdv6CbX9sMMCXrZxcipMALZ1QrTZgrKxARJLSHQS3xYBXZB",
  "key16": "6JKswA3zbxJYp3jR6pAjpuz22Xfkw4Z7p4bouiPveU99m8fomfeYRNBRTgGoxcsWAyhMTzbze8yZk8dSFYjAbqr",
  "key17": "514hjEGwzgCDJiKBC74McK4aa9mZmZG7ReMHGrQx3zyzQR69VKqYG5wmmJArLq1kvAHTXL2JRiBrATwsyesFZFEq",
  "key18": "36rT5eQsoExHAkxsEv5jXWyhUFdgKjV3KW1zxjBgBNaGUHTUUJxeo3Zij63EngKS8vsvdXyanTL2nYRKJBfsfC52",
  "key19": "3C34j4UpjoAcsztbXycwG8i51wukoKN26EcVFp1WWeHZDTaUUraJGmj8KkpPos3PieFkK8WXGijtc1ReT3gHjmQ6",
  "key20": "2oCS9jAEaZxjZernjr8GUiWscQuaMoV6bZe7Z8YVf6w174KqSahoEmycvWWMiAu98rYZiSsocisNEzJxDnJPrN7i",
  "key21": "3PvQQHTQRSvx89RshmqMGUB7ut8dRAXatB1KE8jyLn6Gj1U7BcbM1JCy6zhMFZ43F1jnh4JqkCB8ECB2ZyKzFrZn",
  "key22": "acTRwxixm1gE5EkXz3DNbK3S8rAnFNTfUmvvdgM6SwhSwtL1fTT5fRswDfZ2h42mT7H8LTs4AEpuAdD95FSEZro",
  "key23": "5wSzXBNN1F28J9SiGSBXK75Yum5uiJfC69J26a2oJhHrx2KpR8KP7957MudggJ1m4zuTNPBrforZKiQotVc4y3rX",
  "key24": "4M38SKgWEwwzBKfXkAF14Y14gox5NCpGSCR5AGjfomKXJLfhsgRX7JLQdounLwWBBoeaeCBWcBjvL5ukL7UyMJ5S",
  "key25": "5heDPQVwgnu45K75JngYZDwmSjB5R3yePogFjdLqcGGZhHbuj9TESmFdGQPTe8DU7tEgh9usy2HSh73rBYPtpDNW",
  "key26": "S2UsyBbYN7XfLx5PgpZBRWZRWrs9ReY8QJ1UhpVroqyCQg6sgfkg47jHhEjErXHZVBNWvU8PHfERti6s2CiSRvY",
  "key27": "5d1gETXAdmY4a4Lty2NbW4YYUWjwdYtGCr8RBq9FYhUEH71b6F8b5uNeP969hZBi7vwQoaLzxgtCcCRALf4f88Yr",
  "key28": "sUE7tjgGcmu7Jo6FzC6XkS3gMVux9AdfidG2KrMgwqo71CEeGaEL2PXyE1cCsMHDZBSjt4q8ETMt1nogi97AfqM",
  "key29": "3Tuuq9tH4Hk3fdJNjnTi5D67G74nnggnyCeHUpmmU52oxcHVL1pJef2YcHVCAMQFf6GXNWodCDhU8VWZke6KX2WE",
  "key30": "2mkB6TUKDUN7X4q3vF7ByfaNLW3Gobpgfhf2AhpviJbeMdps6FsTQDejvFRDcBv9YYdavYsG9nnbRUppjKpT1bBv",
  "key31": "39yRkdMRydbQw9AuqahWoQV6BSiZ2LZ89qxop6Xnj28pQKN4GPmhFduqJaAzr8rn2j4y4TUapmwcBwmMq36vJAg1",
  "key32": "3ijdxbkijGaJSdeqPPnHuLTBmeG6pMgfdKWACYHSp9gmxU7ugPyiS8US1uFEWRNDg7N1tJ7VNL9qDDrSmxYxbnmU",
  "key33": "5XkPtyqwa35CGJmXpU3H12GiZ8b4855SCmkEkPWTUABKS96LxtWFRjnWM7f5EyA5JSyNuGFnjdhDkG5BDqmSvbaD",
  "key34": "2DZR5qiRetqeGciUWM5YxCuhRpQjuSHdGi3RqHmpGrnGJBQ3P62kwTvDCaK3ieVibJizR4F4ocAEmRwfdSePprVA",
  "key35": "VsT4NfN8chcLyLxqd73jw55oQyMqSyTSrVXrpJxYK8iSJA6onC2c4RSCBXTRziVtSdCf85e1Q6T8NKeQmnTF4TX",
  "key36": "wkCpq4uVam2Qrja5WK8HiWkesQ3kYAc5RD4FXszAjQABbfZ62KdYc6ivmsGttwKWZsCYS935UHr4D9AHR2Q7CNY",
  "key37": "2mops69NgEi62eE9V4knwoEtba3X7ktc4hkkkK6aqvkWG27f8DGijM6ZseQyjrhwYsNmJPZoqvnjtAyfe3CosnSm",
  "key38": "2PNoxPsfhDoBNzJ5aq21YXKMZw7iniUtYp4PTBk85i8V8saTvhj7azwK22L7BPGwGfM4RzMgcqyg6vnuULT6mNFM"
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
