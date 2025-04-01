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
    "4GWFQ4fZtS4ga11MeJTRYz4gAFzWbrK63fCrHCgMwC4F6Vqq4ZUGwsh6b9DgfeZtRwgfceFA9msJAURoePpuz7Zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wDpAUnSqPXAYpjASJkL5RTCqzYMwa33D7ipELKRbyzU87AMrLkXvDdVLx1jv1spJjm7yyaR6zwqJTd9pohScgxM",
  "key1": "eyqyKJQz4DKM5983MnpQifLtMtvwapsYd5e1h6y77pf62GseW6bzSkiWm4PYfZLovESNJCiAfaPnZ6Vmt5bQ83Q",
  "key2": "kGovCTQeWYTbfNTXLyRJZs1bDAS2PKDViSyqsVft52rZ4mMepJKaC4qGruH142Z2MZCpkBkbWCPemhxUjSET88s",
  "key3": "27aEdAFBBfmAWWN3L7dUFj36M3f4aKoD6nyQftx6TuV8TvAa5uJ71sFJxKzuGxnAiXXx4zw8kbwLS6WqxfHtcZYp",
  "key4": "2WVZNkwDLw3gaJPwW9ySUyjztFFxHVF1VBmNGrjV9tHzWGHRme98dCkicsZQTEQAsPCd6xzWMbgS3BPvd4Zp8mMU",
  "key5": "CH8bSDHVWUcgmZ6PsFEJmjKptwhcwoBTW2w34HuREVH9GTVyUbwUbBVYvFju21DJWzPxB5abYdrxaKZTRhFFusg",
  "key6": "2xHdCpispv2ao6Jk1E76ZTiouDs4soSdCJvUKMu3pZ4BveXqBN66iNV6Pg7f87Qg2AbAhC7w3ExxgSF4skzhaVUe",
  "key7": "2PqEDyGqAnAet7T6zCgwtpzfiGTR95q1Thj2Y5i2oyiZJSyzQG5j4WY9zCWpzYapn4H1xskFX4VfEXaN5yrKT1yo",
  "key8": "3abUKRgv31JhECB3WJL5h1r8h1duDnBsRDrmPKUFUMNVVUyt4dnCqBBkwDuUjxaoXGLLu9bT5SQMaGNWx9Wsd9Ra",
  "key9": "5GXxmZNRZMtoQJkwsFT72imUKvba6vvRifDEFzXS7RDN5B946YUd65Hobbk6i81DCoxcrrfLoUZwVLsfsWvXqkzM",
  "key10": "LpQ2J3meH4rihvcyH2kW9y4GwhQFmjWGdoToH7tpDj4vRdN2Hx8SatCVdEqmzcsPckCj8eWF9xnEd9PvijaM38g",
  "key11": "2FXXK68GxefaBvEUvneBc25eoAxdQzQCuyvN5QyyqbgQpT4M9yEbPWoYPPXUt4L9EaMTecjHnKnNgRCMbRCSXtMA",
  "key12": "3sDbTZc4ck9bgXFHmCuYERdH5eqBg3EiZhL9yNVVBbYsVR2AnnsJP3S7SJ19uAn4ZADckqq59P2Gb7jGd8nX5UcT",
  "key13": "foV2ZeCLcKF7kMdt58KR23rg9BytnAjS6BfGkwJSyypuwi9yVT27tnTteyAnVwtY9Y6KCFmUaeu23XoYbgwTpAS",
  "key14": "mUNfsASJXDsxAtm4sA8xzinzW3AxJ9kxzJP8Vm6peSccf66P4CpbUtPjADgboffYnR5QKZSSW5JnjhqJYQYEuKZ",
  "key15": "3QKhVm1sc9HvrM6MSAAmEG7DvwZZd4ppoUkavcqRtDte2wt3VwLga6MkQPmu82iZD7Ar3pW8hQFQh6puZCSC1VxA",
  "key16": "56xJepJjyjZoiWXAV8tB4qTGoXEUiRafHY9vKMq6aZghtZqdHkjhfrfx6DfZyHKuLTUVzPFFQjNBRU3A5iFxvwVg",
  "key17": "4BWq7Yn6WnVWwzzQSxhWHF7x82aDVrBDnfcJaG1qsr1YyK8GZZgHcTrv7JpCqyjdLgTNz3LHxxee8F8JDpkGbLwD",
  "key18": "5bYSV5YFG8u5SyhkqUNzn98XFcvq6wURqRwnYCvRUPVg2X62u9NjdvV4khFed63BbxRiQRmz3qLr6yPFW8ub643w",
  "key19": "2b19DRMaiprdtedtW9WMkgTVyQybSJcLF1VnoegfkSY8wt7Hp3R9in5PttfSEPBMkc9AoFXazB4VxSUnAtMJs5GR",
  "key20": "Acehn6rummPycBsWKAYQc1GvGfkJ5WgDKBsNyYDiyXj8qs9sv3rrfaB6Bs4fxsYeCa3zW2xJYitcw7vSCSCjWwc",
  "key21": "3S8BkdxNhNz7A688suZcDGeXJy8tkC8NUbymjmt1NqDNke3vUNzGg6snD7b98vhWn91ZVd8baTi55gCXwuS8ahSh",
  "key22": "2b7uiB1xyvKf7hR4e393ofAFGq7BK4MjTVvWpGe54aShvhXHgcg7nNFzkqsazahfuTv8poMvyJMHZGm85qZhpWNP",
  "key23": "494ij2kSR6aPWhdpUY2pbyBsdUzuNBntads97apez9eT72MVdpSnwWFsGH24FcGY9ZEwtNe3u4xgMkxSLuGTatSj",
  "key24": "34Uw3gxEEmYvurzWYajMKtqpckVVU3E7n3M5XsVdNor13HXUF888fiaTLMwt6sHbYni9qhV9vtePt38jkXWs7mWc",
  "key25": "2hjoa6avgDxofiuTxtYWEJcL8u6pVxdSAxye3pNL3sagM7wZE3ktt5TE7UXSZuiUeHxhfN1S4FsHaMi5P4FL8vyj",
  "key26": "41GBuZx5dmniJtXM66axB7DfByRSR8jTFBS6YGV5B8C85Guz6Kn74CW6BPHwGcTRYdGeYuyhTF9xsG37DAnTx6qc",
  "key27": "52bF1PMiJGXDkjun9pKXgtve4w15MPRewdVppZw9tUvUsK51QmjNhmFG5x5tkaPRFQKYw57vS3cSpVFMgk8C33Yu",
  "key28": "435C2j5FKHmwSxQaFPnsnCZ2Fvpge4hpDoXSCwba7tbDyDSVqFRjZ3q86uscTup8qvVbXYJm9fXf3RB9nXVskFJg",
  "key29": "3VQNKmrQAsrTFi1tiRn2cVzgXfYk1QBBTkDpKi4BUaxMaiVSRbDcVLTQjtWFWTpht3bVPe3xxwLoQuqcEurk41JM",
  "key30": "5b5bayfpux6RC56k6Zgtykh33gFXqQJ7z9nM3azBYeUAbWXTWqSp6zGSLC2uFiQT5MBvY3TV1ZMf4xs37y2RKEJr",
  "key31": "5QC6TEKG3daegVTYZgL9ubvquGXDUQjJ3pMhK4mvf6oChn87skiqxv95DqSKfM9J3groHQsnzWaoJbJN7hPBNn9r",
  "key32": "2i5iZhoimkXuDPSf9f6VEwpSPy31dhvNgyMPJM9yJCVXjUPn9jAHDceC6PexgWggGdgSZwBxQmpt57ZVqd6eJUBN",
  "key33": "3uZ2fNYGFcxqMYDTmkk37TZez7Kxqi9GZBG4C7GV6LM5WKtMXAD7DdkxbJGd3KZRq9UBRExJ4W6UhYfsEwEEg5eU",
  "key34": "4bWLG9edwqkdxGNNiXZwkB7heqoER7CKQtxH8bKEC3QLYX6yhnfMufcdGDN9U5tdpAMtMyazhSTGCaAGao2TqjKd",
  "key35": "5FooYah4cZUBaW8FFeWATU5hCceJhSCWZGNqdNNQKR2wcfQCjvAVnyVjE5xjAv9RK1Tfdcdz6rt1Xn3gC96wP3UV",
  "key36": "sF6donAjDziJKbkeKK2VX5pW4f1WURMFK7CGSYXnFGxCYR1V5PWDn6Bi4g2U1mVH7iNv8nHyiySAuC4GFnjMFBv",
  "key37": "46kc8AYccuBwy3xdBPyvvDr2U7cd3n1ro88cDjvvLBB5QzSHmmfHxtKRmFnrMHRbZ54ZoCV7EW7cSgxXrjuCX31E",
  "key38": "GtAqn3VNMVnv4GTznHMuptpbWt3drCXX7sRXBfwWSCuAsRhbnnktxMje9p7xM8fHjqJPMwnkPRjcjNBrYozBG3U",
  "key39": "9ReSyfn5psHxGpwb9wTzfP3ieAU53NGjKaZ3iLRmrwBCPC21C9MNzsLzj5g2hwbY7z3wxBWzHscMGBnzV2gw1k6",
  "key40": "4KwH2MRP68wnYSHQ22EptmiyAXXAHQFCZJFRrupKar5uqNzJuYF3XUQP21t1EnGrn9mrHgXFq6muZHwKxCtbk5cj",
  "key41": "5JGjs9wKQSyCsz5bnvzwNhet4ZbmDqsBnc16CKDVziQ5NktsWb9M1Y7dCPAGM1Utrv46ieuNNu6UVSHRGEb7ikyi",
  "key42": "2JiiL8Ch3Tv9u2ZVHs4iDdcSmhrVwpxwavNtkjoF4TUDei4VqHLNFKwwKMqwRY6HEvkroGH4K4BPGRTvszsfzjCk",
  "key43": "4PRQq4g3r8SEtnRpbyUSLh1MRCZzHXgoZzxyhSQ1VTF5uTgynrZv87UhaqFPp9SnXTCabhHUYUFzDceJgxYbs9TW",
  "key44": "26csLxDyMEjzKfoWxdKaKsGhse6Z6PNEgqi5YGNC4j3yzPoNHjcbYjp5sqbSpGhdazFQk6zZHJgD4tW7m7mZBKXo",
  "key45": "4jn4LX4EURhiMzeyosPz5mqhYCSTNoKNuy7tGY33wxbpEXmqUo1vwJX7J8UAAV2uCRgcGzpi7pL1uqAyh8UrKjr4",
  "key46": "27B4ytoHHFLenvVrMNcbUrRYAc3H8angDqjxRGCGY1Ch6kiXSF7JBcdh5ipunynkaqzELWTgTcqBTKcnx8M5kgyh",
  "key47": "5F2Vr3qNWvm6B6p3XTVRuy7URmo1QyqyZ5USTQ6hfyduzQWL7vRHGHqJhPEYvpA9kjhxZTDF8bn49TE7VmVAudwS",
  "key48": "2wWLvhq4QMi4cRXJnyWFhBnfBJnuNiHcUpdPgrx1arER2Zmh1JBiVDweA92KLjUyXKzaRMfr5PDHDFoX5YXCi4Uf"
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
