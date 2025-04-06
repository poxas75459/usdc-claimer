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
    "3ojceUkgrtRA3zx3DvyFAhfszagq2db59jJaV2zKRoYtYrT31EnfB39nzEngXXyCkVYRiR738onvYegcN1t3iCYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wooqxMtAUbmzY7aMmXDdruyXTutZcsFeyXLAyZFivKG485inGuRjpHQVFHXDfTP9Uacct763zu3VxDH64azS681",
  "key1": "5R68hQBx5c3srNUwEZAqDidgvYu9KuSegmZQBLcAq38GnmqwZW7KmCsYmu4ZWZUieSgtE6fLyNWh88hwk6LML98A",
  "key2": "XYqncgPpCDAeepW7adxK84JK6mmx8eDssnyYjmqEXQCosUGPwcJmzck2RGtPT5jPpa3k1BPymjecFTyGGBznSFh",
  "key3": "3F2TLWo5uGz8Akk3YKoUVThaAwUdTS9MvDWpSgQpJtZqknDczfwvnzHKnf9ijAtFAvb1tWqysM3vP59ZWJRuu3tn",
  "key4": "K6dHH8gFJKbg6GFipqM97WNGLVk3YuSx8Lk9BDFGAJvoD3r8a71xCCjS2Mvudo1EvfX4MD5FUbpyr9TtJ5pnho2",
  "key5": "d7WFL4ZYvdC345ewb556j2zRVei6zsDBQABxcoDVRhVbg1U1SArJtE5KB9RdDGZBz1s7whVEqi3ca7vcJvnSzft",
  "key6": "57DtNZFbx2iiF72Re8hpAYna4np4jTv9kQEHXJJknukCLRB2tXnVQGfQ3zeXXWGHoUCXFDEiMnnrm6QJLPGGNLF6",
  "key7": "4VuWJJEzkHoeh1YtCZxjRuw1weKYD6pzPTXWSCw8ViRcqyCSPAgDVApgS6daxyFtBgjsVaVENPHnUHmyckwcpd5F",
  "key8": "5VH6QSndvGCknEP5KhxmWtSBu6V84YWtso7bTTTbPAcRrRdjEYYJE18gyYEVW431G4WQMsJyXLXcfi3YbCzpxs2n",
  "key9": "3wWuSq3NSqnKgn9f8BaGJanKcXNuW6oxXPsTm7oeGprAn9vjnjKbtHBbgCXMY2KAZBRGomGJF1ge6NtojGVc8eZ3",
  "key10": "2EWZZeXNJUsF6C8gr1kC9R7kkYR75CteYpDEDmdyovJ8Jktfv7QwdpRJVSdcSdcJHuKN6gaiEnG6PGbYxwRrNg7x",
  "key11": "5zQVhQ2hNWC1yC4kfkvaRBUcfHYWyKtgNQv4CmteeoRdZRPB87SpCTNNn8o7AVpKawzktWSPTUV4wq1ZKrajkdBw",
  "key12": "AZfM1waxtb3tqjzBM81bbRMbxjJ5UvogDVckYXUq52H4kmA92N2ooqs9a8zZmQknwoAh8wjKfDvwaT6UBAo5UdF",
  "key13": "4ddZd9bSbeG5zdtytTwE3d7bwmjjH6wRASNPxh5BTCv5n24ATCpxZC4L3dtHvvKAEBGUaenbsaQtJtkrymdtdH6h",
  "key14": "4cFbbsPVASuKk7vSBqGDVxkZUf612GeJGaEvvF2zvN2s7KT5ahvZE3vn8YKHSkEcnFy7dYRt4EUneRZmR9pMZsT2",
  "key15": "2dn5cmsqARChPaGDZh3TEfHQcNo8p1Dxe26cJY2jEfYKzoXwhY4QJ3HdzYyJyxmfKfhcr1bW4bctDbfcJKH4RR4N",
  "key16": "eUz1ZiXpggWdFaAdoQ8ktg8nTUtHVphYV8cxCyH6dSg5aLR7PowLE74TCkiUunkvagqhJ4UXsH4hPHkpfiQ1gka",
  "key17": "4hy6xBWg5KvzRfjkGZYCaN8EQ9uZx3ZQn2uQSW6xkEvQC6EbDbFc76oxhQWM2HQai5rZHD1EfBFvPGvf7R5U6CPV",
  "key18": "2r5qqmAEVP2rz6JrxirdPCuJ73FPAca8gacZZc8rQntJ8u6xwhw4fGs65iQHrNKQTMdXrpogJthVke4K1GKpHtmC",
  "key19": "5FhCtQusBWZE7SUo5GMedBESXskSqritcv6KkVx3sRpPsUmU4L9uoFg7bvLF4HiLrPiZw8MqSDrFMXHGfMAFYpuh",
  "key20": "2mWRwqkDudzjuAirdkhi7yXrLuQ7cVNnTQZJh93DFXyvcnLGE1ksN5g28uBHEgF8WfaZSv858bq1Qtvua62iUATS",
  "key21": "4d77L9cjvzCdfGwjvdYdQfD46wcAyvSGMRUBR2mjGtdz4vEi41dEwmdbWoN3AXWRfw6Bb48JKJ7zhGc18uRKCpg1",
  "key22": "Et9zcXw4fWKRckFUEKZrar98tkzj2NF5ro9sK4ZLv1i8J8qi5U2VxoMw4fqWjjCvNt1VsnHHjEFjPCaTRdiPz5X",
  "key23": "4fw3VKBREEGEY23mLiwUp79cBkCkGaLt5svMGr4xqft7B12sZ4PjaPoWSBpCFQ8ndQs4WBj13j5aEynjkdt6t3Zr",
  "key24": "v1pED1i3Z3Nq6FYyVVfJnTUrjqQQSGH6aKXm5Sj5Tzz8hUB9Rn1zNCHZiHeceooqXTekhRPYrAuHJTaAWMYtAnD",
  "key25": "9NmMNVTo4Fi8VeMBwQGXszmXJMZLPpYKkG5uyYuibZTh6bDYZsdRZTw5aAfJQaHzJUALwCfqa9nxaxbEgUEG3bW",
  "key26": "4waPubWoeAyFofpJwD9FY9LEvughL2o38FGQpe7a7PzVARV5Uzf7RQjehRXMMunUGxG2cJyZMEVYMTVZELREFFBQ",
  "key27": "5LGhqQSwKTXRWWvf36RVETwSRZ534qu9zpFB4Q87vxLezcFoyiQS7fXgdKEKnERhfBtxnioPagWTBCzCw1mMMydt",
  "key28": "3V2kM8bhDBfZU8XYKzGYpQ7BMf5HwYfVpZrB6BkBY9Vgr6Bw8GK8M314Xfh7NkxfDXnxQ3rF3wB5zkmQyPKHgjFk",
  "key29": "3CD9WSwiqHd9BibvnbLSkDk2wg7TTwPLcGjAzUbXRY8EGwWaJRTueyRnh4ro2C68guxWVp8RQfQZbneN3yfUACj6",
  "key30": "5wUneN68WVDyiXYaS9pwu6v5Q51zZTYNBjizghx1YFdMGKnz9dmEdShQesZ9WqMqTsWi1vLsit1FviUY4vwXUm52",
  "key31": "46sfkcG8Uq8am8bgRdfNsqgcy79ry5WkH6N4Xs337E6QtGeCBWcXS7bwhdMwsC8FmHUu9tHtHMs5am6gJzPxE7gK",
  "key32": "4Lri2P4aFfpTMYnS2Djh88VnfzdajHPUiqdjrkwXzVPaqxUjYkaRFMENide5XJNpXsNQChVVgPdD6PnZN2K6W5Ws",
  "key33": "3zFz2QYH3jEbfNeprQLLySeV9A27gAMiezBhMgkNded479bWvvSKhugj4Z6qVpKwf2Ci6w2uBb5ahW9kXQKCvWfS",
  "key34": "2s9hNkwiwS5fvmYNbvdstNwvWtR2uoBj4TLDwfMNYMETyyertcXbmQ5k2XmTHyNNYTBF6TtVzfzRtvw2CL7wsk3Q",
  "key35": "3VcHRjMwcSksuBZFgFaszvsZ8C4JpScA597uc9YUuCXc6obbVdiMLocQYBL8oD4Rg2D7DxWmtFnwfute3KygYXSr",
  "key36": "3XCnxBfjJxEfGvPeZP9QjyJFfghHnq4eQEYujgbFR5XmvuDMzGkiAViCfyWTgZsCxN32rc951mrpMam3PJUn5BKA",
  "key37": "4zyisG6LtvPsb2ppoPgQHUfHSUxDvt6dQcb8iswVo4f6HitjCRhqQ3Jijk9Apw4QLk1EpJ3fM6zQTvmNCnTTUcEh"
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
