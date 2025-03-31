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
    "5Z5n7YQzupN2kQh9JKMfWpJNWcBqS2nZLarprppCyXj3gFX2MQxzpNP6PQ8DpomCX9aG9FU5mYnUxvwwDLBF2RXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537SHsorYjLs9s6ekjcjQHX3hcNZmZW3fDYp6SPHgXhsEDv3bYaQiWN9aLVyMuhimRLbRTxaYfxmRSYYEDcXmZZe",
  "key1": "241N6rLiw2c45NmbMAAg2S3HmRjEyfoQ2oGFSsEXSpLJmNUDSGvHLPm1wj3EynbwAAZdrfHEozuHecEZojuGQUQn",
  "key2": "5EBkVRw5sDbtnHc6ZpJjy4RRp2ARCLQzQfQB2tRurg464QgGXhuAwe9FUFK7YkyJCSSSHHVZksPkrjKbx2LERdjs",
  "key3": "5121Jyq3ftcC3qmZxCAB2WVFUnoNeV59j4nFKqQWdgRyTYUvoB72bctM8xMmy6JqVumQPJhao734yu38nfDdpu8y",
  "key4": "5yyQarrQoUXpHE78GnGTJKtGwnAPEyqPxWhFbswsvTYGKKnSvdZDX3GwjZynbgiwNuHRnPZ5MWpgzy3TmNN35QxU",
  "key5": "2n4zjv6qEQrWow4rfYRGqW4jDuGnzwXiPoL1LfFK1kdXQnCYvZ9gbFvq98Ryk1FuZM82BpDwEqWb2q8jia4KcTYh",
  "key6": "4fJ4RnBeNdXYKtjYnAg16UEHyBuZBKJBPg7MpAobRAMCBQFoQZTiGzWaxTHNNNYUHgfoVpxbe752a979xz67tSs",
  "key7": "XC9K9SwH9PoQAHPxkrff22hYnwJRbEH6578eX2hRhXQ8A2mfR3cZnY3EvEvCrzWRyz6GAiwZaE5i7cLi71vcjXF",
  "key8": "5VXiuyshELWJCymGfgMdA2CjHvLpeMqhSXvk3DPgjSXHwM4jsyeGrgy4J4arU3AHS7qFnrqkRuXuWDCrUxkfj8Lu",
  "key9": "2biNHCLF3QE6RkTsb25DcLCkne9qiMyoT1eQ5kJrEDM3A7u3mUBupzeG32FoJRNpna6P8GZSE1n66R9SG5ji4pwm",
  "key10": "8EUYoJ38e3SiQebccziPs3fPU4kAWP2uTn8QDS1ZsVFHxoyGWreVhfxDD1SNRRxD9vX4npRRjuLNjiAYb2n9qaU",
  "key11": "5hwJxzURGwZhpjQMCbU1fq33Rejc1bLcnaiVty7gDRmTcweRPgKoNHdHhnVJie7J5dAo89nuLjo2xSJKvUjDESzv",
  "key12": "2cHXdukLGP8wB73atfoFMi4ABqR9gs6cCtE1wCTsAu7sXAWjetyZN3sXFaZnqiCALDmbKKn5a3Dn8oKeZz9PKEtK",
  "key13": "2NeQa49Hme6xtpJmf2g4zZRzvw8qotbkeJmeXPgXETN8oZpLGL8uStYXaUZLLZTKHvSurjJmZt5iVGgjSYqPdMJ4",
  "key14": "2b3tnsXPcuSBgVXgf5N4635Kf91g51kw9k9zFfJe7sUgfvJbyiK289jJQwUvzpC8hTedSdvLSovHj5NK3dGc4z8",
  "key15": "3qs43rjyvtkvQbaVxdTZrDpyk26uPS49fYyRE3rETwJJPu7M1yp4YF4m3WoK2qAu1imjdCLZjk55U4QgfqVoup4c",
  "key16": "dfm5RV8kFchLnAJJUiWUprtBvTret5PLL7XWhgmGRRoWVFoEkqPCjFMJ8RjuMqUnH7okjyVm5NvwPwFMMCFDRve",
  "key17": "52Kh7jnVJbREzxik2RaRa5S6U4sYrTrnKiUJPtrPdUZJP14TQ7QWPf75VPdvPJNzo67jjUS4M1gRcKAZRA9qRyHF",
  "key18": "2YUuKW3qTztwKcVGGppf1JdP42hp89zuZn1PgEq7fUGYG1B5ezdqKpaZXnZm2i2pxj3SVHbGoPx5xi4DSWHRaXKD",
  "key19": "3cpVyN1qhsg2b8hD4LRrok5wUe87sGv7j5JAh2mjTmZWzdM8UXAKZPsGLFVfWFpxCQGn3Lhq7KHjzDvvvSf3KiuJ",
  "key20": "4NViQM5QRUsPd7WPFU6WUuneAHKT9rGMgEf55ACLDPQVXfXnD9SVUAtgULMSsrDGkrjudc7iJYrHtyoJgQd5QimN",
  "key21": "2gwrdHnygGXvYUVdF65end3jPpM8DBz1s5k4V91tnCBNYwMTsWb7EDm5v6Ak1Sd6Mobwma6jbqQXV5prcZphuHWs",
  "key22": "TXEHWDDqC84k27gqs8MPKfMSZDb5eUMj8R9aymB7KpCuhH1B77f6dfn2SF7cnogqJBP8eyXTmEFoKFkKXooNg7b",
  "key23": "2HCJRx2H4VQnQfXqywEkNEdkqcENwDcieAKSZGCikm6yoBhsNJQWohFDbBWDBopoCduRZBNtfipCPnw2PGHoUmUX",
  "key24": "GjNBcx4nAaHGoGYHAg7TkNSWT7b9yAcn9NNXSTb6PDqbre8B4EV1QN7YcCYuo7YgNjtf6BmTo19YRrDiRXVbKXq",
  "key25": "55mBjefCQDLLvYep4ideU7UHhyADzaVAMktjCxox7EPcEzpn5mDdgdgAjQWNVuVTKhrarxnoQQfvTPhWhFvWiA5f",
  "key26": "5KbvNc5EcMVHzMct6iBrekwNs7stJ6mQ1X1WtrMfVDnf32Vvw8A45rTpiftS3FMTX6rQhn95YHsRDt79JiSzTrSh",
  "key27": "5URumhgq9bFLj4qA47P7Fdsic1TWfrB1awdvaxDNhLuSX2Kcun1ibDkukpD8kkHAebZJJVmQ9za93hMFwx6KAWcS",
  "key28": "2pN6c1x8EjKfK7QzNmPCE4Ux7v9EYPcktHFqWVmbnwxJ6PK9MbWSDvXHNxNWbXimusmSQiMJX7DGnBZrsWBmS5hK",
  "key29": "3eBTgEjaZANUuSDSDiJzEsGpeHFZMvXkM46TSphyr4XGc2N3pfD6dusRrDWMYnooxtA2NW1jV7CdC8PNSJDxUMqk",
  "key30": "4zayuqNVvsv8k6WTetQLcx5d4QrjNUyWzVP5tZ7NDbUX4HV7HdqnUYiJzKmuarr675Yu5NdHbmC4FxBYojXgFrUd",
  "key31": "2PUhfd7je7ZdNakxfMeitxuJ8caXUVNcv5okRbpNSjzPDc8C4xaWMKSTykN6fYJV81pf2aexLQsZuVuP9FQHURDJ",
  "key32": "P2bJMNky9agbMFmQwRWXAJroyerJNuGTakjoCcMySCA8ba6Tg4B2Ga444Hy2DV95bEGht5qXKgRjNTf75qEER2G",
  "key33": "2MtnigF1yV1LvTCi45G8WaHzNFARggkqkmCyqpy8ARqwyerVDi4YG92XBVtCKKWbsaQ51JSUzwKeyrwvRt17EFhL",
  "key34": "2o1yiCuNDHrmKjBHQCJzLfDvih7p4CoZGjqabWorVUYPM3oEMJSQykVmLSbzirHV1qYJk4b6FFoyLdAmta4CNtp4",
  "key35": "4MX1cSMTYjgYcdSzYfYozgCD9Zwz44neeMfj5mcb91vtiveiR514VK3PxFd1FPrvYVEzGjG5m1XFLJxLUAtvFx19",
  "key36": "4ncsRrspsHFu5XK4ozWYiYb3yXHcbUdvFfcwcU4pnwZkzDMCtsajDuJ2u7gbgqhMEkgaCKqpQ1RmH7YJfmf9gvTv",
  "key37": "2p7ePTtPFWcwhXCJH12fyUyKRuSUht8XZBkEXbe7rjnvW3fxSHgiapXo9hLavVhk3VN3jzpxqXKEgVjVnncaEirf",
  "key38": "zteGsNfg3Gf2sHnAz1AkHzYFj9FH1M9QknNB9McVYQ8TxcFEPGMVn1MPPE3bJEATDMgfam6VDTFVTwv6Y8v3egQ",
  "key39": "2k9XE5JhgMtcEGvS2aToMw2qXbVUjjEHh8jAAVSsnx7qEMPmAnAFsfCiy3t6ddHG7DEBq5wC5Azyr3KSmNsSVGxz",
  "key40": "4CWexFEHKnbM747maznfK23Xt8pMSNvYnDX7jDp3hPy2NXYKDamf6b33S789Q79WKkVuGSazLh5xhs6f6KjyNFZD",
  "key41": "3nWfbkmJJty2Ynw4EPHqDc3f9TE6Err6koaw2FCiKzCDhVZ5CbC9wtNBThCxGzPrYXqV3gkQF2fACSWhW7CuUwqn",
  "key42": "2rHjYGZkV4k4KG7ioPqa8Von764TXSoR6ZKd9dudk39qT2mkqXkW9rxWK6RiWSRZzFxkMzJ2BTwARjjM4PTNxk2a",
  "key43": "ZQwqTEDvAEGTx9j2Zmxf7mDH5XG7WZHYtn23bMmNfbUrjuCcLQAwXHecWwi8EixrJpG7uRPmdqHe6CWRp8f6QX1",
  "key44": "8ZaNAviWFaJErHwgcQFTNbhkHFu443dEVxWwobBE63XefV1ZyMK3UQexrDP7pc9JBAZYkUKeCCXMTiSHsYy623T",
  "key45": "61z2gwMJsTsjpgU4kvSwpg9NKhZnBErzUfZFn4AQdkr7ZPuFt3a8UmMYmT7MBiqiCx7ALcmHdViKCh9aHTqH5kb3"
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
