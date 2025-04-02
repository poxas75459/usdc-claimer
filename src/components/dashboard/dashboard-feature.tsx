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
    "5EM4MTdXUfrWvg1yma9QLm47VeJfqnueVdGevBo9a6nBN1TMrzxfYsYkvdWzaTXrk921yDoxqnJmrQ4o7FYhR6AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23D1sRaLpSV8QerVPKcDHm31GWbPo5NuNjaa9matQdNMTT1Z91SCR1qfZXD2HFDADQFE1pdBNnF4zJTQb3f6Urps",
  "key1": "56nKp3yemgoxh1ryNdiR4BUekqeBdm4y36GfQLCU6BMvofi6XQjZLu2cSWscy54ERJy4PHFkfZpit73YkJWSr925",
  "key2": "2DRf96v98jPoNP4LptWJ3a5xaKcnLgcfmC4hXndAJm9oy5P4V1TEHDvFrgtDzGXahjqZPaA1xAswBbp6xr8ZNZmU",
  "key3": "4RsFcGegn2hDahFYGc19hGVUsRN8maBcza9KTtRq5dg9VjA7KQEAaSt1RWoYkfuSjDqLiTJcHp6UKHUtLVtoHk1H",
  "key4": "j4EnSLPx4h7p6kmjD5GA2fa6zxkRAW9eTkVDTu5tTjzPCuoTvMVUXzw2u99Mkh5G2Jz5hzi5SQMgU7neZPwq1Y8",
  "key5": "3pXs784bfecaRH2iv7HVdDNpTKSiXyF4h6KcNhac4QaUzwHbiHwJ8oKLd9cpGq3qLKLvjuTP9wamEiWpwZUV1BwF",
  "key6": "3yqPtN2HUiSnRBvDbo53NDmYjYQ2ydHHVybRRJQG1chd3ncfpkvwM4T8Jg7EbSgTS8YVfkPVCrTVimVXGYCQ46Wa",
  "key7": "49GHjhADtRyzoVgsaqF2cKoY5HfbSkSHFgoMSToVY2UjcQ2U2sm3skBt8dq68ZVENw5JkDR54B9mcfVepbzdWvNC",
  "key8": "4GtxpgckUR4N5Vce9ZdzQVCRkVhzSArzwRKyn3Pgq5tvvW2BdxDeLRDS3TkRzXzszHxp75i3gTHLfQWwWYcbkyYd",
  "key9": "2iRyv5QnBVDKgorhhJWjuuDfXBf3qVx6NLubVTGtzqQmsDujnqAgyCe3dnrmBRdr4hhYTRw7gPk3y83ZzrQ2dCAE",
  "key10": "32Y66igeCoNkkcnXQ5GkKy1Be6LUXDbBcJTSAXervsg3HvLs3zH7kx6QevbG6c2SpUzBruqgrVfE8h1nio84DToJ",
  "key11": "3D6gjGTeBJo346zjPw8iCySRXPgJvofNbnW6fyhRyJx5ocq2L2uGBk2TgHubJuPKRLrdLLH1CJPpLWEg4xUn8Zt9",
  "key12": "3EuNuGcHcApEUWs4kjWnDsh6ZYjrnqsqau6czEo9e2pdGS5BL3wFM86ZFsWMkfCLir7MXg8VovYBtzsYF795HPqW",
  "key13": "oUDHjzuh7X7SXLNTai79hS1kp4fi6DgM5oRWqaNsZvRqFi3jKC27WUfTNxKQyy26g232Sukh9nS4tLdrHwL7uCA",
  "key14": "293vW1ux13B5Txh5Udhyov6LH46avmsVJpFTXDFMacHwcgxfR3A58bZhKZRQnFGdR5tahDgCgCurvLHp3gCjh4HG",
  "key15": "26EsMXiDQo7589fMUjAkGFnogheikXnrAagZZexh55j3SWQRKN2ATWT3RcccNgX1vAXasdooggm9CsrDUoLKEM62",
  "key16": "362Xda2RsMauW8v9VjCkJFenRszutHRT5igBWSjr1vevHMyLSPyL8h8YCbWwBKf4HSbB3eFtNHvCxz1P5e65hVcF",
  "key17": "hDZXNtC4Wk25trLGLurZguYNph8yywvvgFf6oii9icLh56W98E5ULdwNz4GvS5UvNqt57TokXNGndT8Ptt6qjiy",
  "key18": "2TrwFCbcZLZpDTzWxLdatiwAX9Rj7c9aHMfeutezVUFNKE7aFcktF5P8asHYB6AJ2tfRiuxi6xWLxPJixecCimpA",
  "key19": "4iua5vYot2XNDjwEPrMQXyRDPfnE7NNneRf7WiHmiBBhZi7CQCmkAGkxELzro1DLcLuSn4Ny5Xwf8mpBm38kXwHQ",
  "key20": "55gWNA4dpYTtQPrqrT94rvHfwkRRxcVtJpfYEiQaQY48wNzBYaKSnSivFDufCzUD5FwQSKuBi3zPSyNEks3p9oG3",
  "key21": "4qpNn6vgjzZWrP1kQjTThgYLummQMszCGdRh4T9PyXdD63pK5FZjsmWe36hzCZkksL1NusD3YtUsgjtzjNVhCc1q",
  "key22": "4NTi2Q1qiXwxBJW31zF7MoEuXZngZ7uy5uYDrSDD4U9MDPq1AwHpjyV47JXaKkZZkDja2EDXB418zhrSaC3Pcec9",
  "key23": "53vsYpW3nUb77y9PB9T4b2Pye4FuHdyCSTuM3eMnMgbteYjo8Fag8yz7NV5AAbSHoqAWMsumfv3YbHeMoFqp59PJ",
  "key24": "5XUsuYAKXBNEgbUfLDwEtHydueArK6zANQFegPw8WDjnBmvMEz45HfRPNqmUjQaWUZCxWdNKdNh6ToDnjhXFPn9T",
  "key25": "2NXXL5rQKfuNjHhmwna9GdmwsyDcaenpkdpMZ6nDp663LPtHBhDJ9Nsypj7BVa7gCJAambrgsvdioqyVkD9GFEwe",
  "key26": "4e7dUecXN3oZbnmetJq3DFMp3PNCduSonKPAqunTnxBkigCF8ZrzmQ5C2hgD4LSYH7wWp9sBDF8XEm9C7nPpneMA",
  "key27": "3VGCR3q3FCLa8SeRFaE7xgZAFrbk2ZbASsfjJGkQo6h77Ks34yU8T1oN3t2jXA3J2NwBUpYsWvFcGEnbQ3m6BQB1",
  "key28": "k2uZSz6VL1uHB3dcdLJuWyta5vBcnhWTAVHU7RhkkFfBbnp8ZLmnWxAMwmizm4LRfh1qPPusCo9ZNTAfMzE88Hc",
  "key29": "26GBuuPeMK3SHn5vj6YpmNn8Jynn6pGJ156uWEVMKQRcsEdmhBUYuj3eUmiKXAnyXS5ULs5zrT1GnUDmdsvRy9Pm",
  "key30": "2G8NaBqbXSSWzR2aWGbfzNcYvywhCfqxnTog3E5HixP9ZmGDDoumSzfag3iu1Ag98hhGNahX86YEP19968Vn2ABh",
  "key31": "3iMj6bQgNwm8AsP5xpmB2dDk64rfJzjJLFDd6pU3Y7zHHX3GcP7rWtcAKLqF3qNXLSucjimqHCwpnqGzmB3qMxXP",
  "key32": "5ZmYDLFVeq7pWKVbfGpbYjcA2Lvj97xh6nC5Raxfi4Hj9bbBJmTRVXJPGiejevMCsiZFHHEFxrFwDJHHtPtVpoYp",
  "key33": "3v6nYMUp8Zh7r78eGF7fGdaJZLctbBa9hP3SUnxycp6X4JuKcJWuGfAdnJmAaRJTvnoSxXT32K2aRLVF3eDf3gQB",
  "key34": "5AZckf7Q3HLZBgAZrbp8ZmbCxto4MX9eTMhgoAemAL78zNWhUtxrfEXQs1h6W1Ld4bto6takrfWGbiR2bEKzAwcR",
  "key35": "4atfN9dd36D872mWGWG7jFuXEV196vYm6e5MLvwAoT5Shjq3cabzjm12w9SzimjaEdtRbeJiLYp7RUA7RyQ3dpPi",
  "key36": "o6g6ocXzYhPHeQ1PwvC16a3Z5eF38wZDEJjFQxSJsXEVpeHu5S3uaTzGW6Pm2tukUtZbjkehrZ5TW9sr4nQsBMH",
  "key37": "qUFmadK3pBL8zyhQRPvNga41vunKbTS9B24pXwD6SYcemP5j7Qe8wWccg7DRgmVE75pDuh8ikFjLhVuwLVDMZD2",
  "key38": "49qFKTNbKc4vAJiQorDgxgs7SyKSwzYhGHUsG8P4R8DLERv9NKwTeoxBY8mpkghknYbwi4C2oQUCnFnL3iVEZv8H",
  "key39": "62b33VchmXiZb59g8Fp5qabKJymFCZAbsz2njoRp4kuV8SAgQ1d7QJnwCdrQarzBKFmkmKSGddPqGVqPch6sMwYh",
  "key40": "dVaKsms4FRf7UU32XNSXCvsWAw8qAu8qAk7VG684tzNXfNFNNNWqjhZgH4SHWTFMcm2dYb69voqhnjetYzaRj2b",
  "key41": "3xo2hgrRVpreGvT7b9rkJbzVK6cLCkWDxzHmXrxm3Vp4qRdou7riuoyyTc6uFJZx6afho5LgtjLJeu1pV8ezc8QA",
  "key42": "5d73ST1CswZ7i9MEwrWsDpNy4HurMht1jPtuhqff4XhJm9wU3vJDszFgvZNQ5v2zQjhDeg9Nn5VBDEQsQ7RpEM1N",
  "key43": "351ZXDappj3TtAhidUnCJAv2uw6RcTPnhRGDoL6gPmRkVS7vY7F96ifEjh1c5UMT9osc4i1CFWbwD93VWYXB3wyP",
  "key44": "rmcnbUdKSSYjTP29EYKAC4jVyMEqG8PEnV8fC6yBuuKAs7mRoCmFJgSGsjZSsvbR4ksqFPbiCLHncgoLU81z5nx",
  "key45": "546TxKe8xfuZMMdXi1SijqvtmJ9hBdY7AKWkXFcpPSPBxF4kWS6b6MH5cfc9J8xpeYma4k5mPGYMGQh7dU9nhoqQ"
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
