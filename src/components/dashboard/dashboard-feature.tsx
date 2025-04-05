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
    "5St1WC92wnBC8gq2Ncsbp6iGtYT3DA1yBsA5R9NKh2NSAuNy4TTrd9xWnpitsMN9jh63oGgB8MjgFPE2FsA8Qjm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mZrdYbufhqmdPvRef7ed9gfRCAoTTEXTZBeYoUPzBRpHUPUwSZnBkafVRJN4RzCjzG2mjvkiWGqj1FnoBR4mC5M",
  "key1": "2RpQZpXoj6SebHQpMf3KYLVQ3Xke9Z8u1fnHg6Dnqx7SdtYjjRk3zt8shgMhRWiN1DBYRLrcBWQwjLHs7fDkKWSf",
  "key2": "4ziw1XhM7PygjKxuSHccNFwf4HGgM6wqtC6D4WeBMLhv1h6AFrQCtfCV3xDSW6aq5xJNaihM8bWgrkiM3JTEkzF2",
  "key3": "LPzkPJXXe8GmiUKKdheUK2oqiN19JzqBsk6xxBm2ch4cbMUAzdaZFRuCaXDDrx2GdtScEmi3mCTFCMrWCJ36LD5",
  "key4": "5Mp4AqBZoUjd8Yu1KjAS84ZEKngcUgLKKhSmwKBVe5EFoLJfDqnyCWxCTYLfqSEuoTzEYz3fmQBDPfXGVLz7sQrb",
  "key5": "3EXsvmdrgmgWRNW3pGb6nTJLqEhsGK6q6yWaFF9NwqpmJ3acznFHtXihp5GoeDXAKwpZ9Rc51VZmAt4PMwqonWum",
  "key6": "2AiWT46cwKSsUm2EcviSTznWoikhq2Hf4M3z8ECXAAK1HRGkFY2Bhz4wvm8CgUxEyuVPkbYWeU6Dg78XUwoDvLz4",
  "key7": "5s6839jYX1pdsczZssUepqRMS8VGrHKk3QcM8Wwk1XY2wF8X1YAgjEGh1Pi1JU44f7BQ6BqTBXa42qThYgySvQh8",
  "key8": "21Udjmc8wZmvJ4CFdMjKJuUfgcMWEdxFuMr36iaAvLmWckeu5TiUvYDTKoKm1Cpe572VMTA7DMGBALXvCD2Qo5aL",
  "key9": "gYuvTCgwepPdWvHWJWHbxoy1wcjhoB4PnWqKeqdswBFfGfKnRq7Ra9F9jhdUhDTvdTQ3U1WXBaxK2R9wCaM2kGB",
  "key10": "2yB6zRJoNLqFXa9YrFuZKiA85BHLZEGZGMuzmmjjQMMfijiBj61GmWMAHUT5FWoLadvtFhWHJeFnC7MRVMUmVnrb",
  "key11": "3z1cdn6p7FDLXW8vY81Lxe74BUEn5yftAUzuboRtzHQ8tF9Vnad1LT6GknEvid9pVQ8jrHBGjz9jJ3gywKCjGm99",
  "key12": "2DGYfoSvS687r7kDySPUbPs8aKxjzrPbVuMtoxBzrkbiZmsZHSKMg5aqZhkxmXBCpH5KQZBiPVZowmivN61urfqo",
  "key13": "3qPuqMvKgmNbYvwX6gAxfc1cxcbe2JzGLGcWPfw6Ais7K9xu8DoYfZ3UMhPo9KsXg9ceLA5j87YUgLLmPDHwsiUP",
  "key14": "2YXnobnFki1zczc2TLWnZMaBMJCkfo7VNYRMA6oC1BvPPqZZBFsR1emuXc8P6T9nB5xau5CnXHU5fseufhJvKath",
  "key15": "3zwGenRtE4FAearRe7PKhUmphxSXkSfusE9sPam2tBW2Dv26TQpnudsKNjSFhR7vCqoyzt3EXwvQ3n3Vsnex1Emx",
  "key16": "NU7FcbC7Y9BgLqwCcBt9jMfArFYe5nuu46AFXd8Qj8DBr4AMrggTuqL7N4dBuea5sSHXoXyhbLctZLYmpdMyVZT",
  "key17": "4zw6yDND2jiFCMgrc8YXJhBS9var5aBTkG37VR8eA1DJwA4GC7f9nimiL3HEGMhfoMVYERNbZTE8AgZfxzbvcW5n",
  "key18": "PFx1tn3nq7GfDZXak22kRNPX35xn8mgNWm61j7j11t8TQAvQySkTcde4CEhC87Ag3wN3BkuZQgoGjvCA8UpV6Nx",
  "key19": "54QGqzonDno9y3VMLyCaMSmjWEbyJtHJbdTMbnFp2UzQXnGh3Y1L5XsfNUDmcH4MzJY4nsNjcwW1TtKTUm72TubL",
  "key20": "5cX2Uo3d6yqmnBjhkgaEsiLDYpK1bKeVVh6xZgqemnv8a2jcfsMQqjdJZy8CNKE333ZGdpgFpdS23TwZD1k9fGak",
  "key21": "61uiuTWhuv9r8p9TTuBBj9chksapAh1teTjpd4G47mi5VhEUQGsGKTESkNJP3RUFh7TT2hwTbwNs9QnDWodKmWZ2",
  "key22": "2wdDjq33j9pQETzyo6v71SXgYammEY5rfjvbDPxhhunJRhC9ATQXJQJaPsXiwcRAAR5d6jhBz3Y2iKQLZYBCrtcv",
  "key23": "3iHZcbP2LKo2Fe2ytuUetEkUsuCgBiNxbbdjvphJ22DimauEzjixfCgkPR7fLoqbMxqXDEsfkir639ZVVfM1FSAn",
  "key24": "New82QhhUTiDPkouy9B2qWeVVs9obR4GHRJ51JLixwsizwgHRg7ak5DbqaVXqeiqctvLpgXHjmzjTvFCTYxb88j",
  "key25": "43c5YFXZzBqDhpMxg9Kobj3gqAzzXo9QKY9pJ4f9LXZm2YJ3bpWsAwnxuhrPKDoBpQGbnH1S6f76SCfKkWuGSpCP",
  "key26": "59hdCebD15PwcxcMsNeQ9z9Wvogqy7wX5TdMUcHS1TpxGP5PmDM5MJRgoeCn1EA22tj5Vu9DoTGsaGGhFTmutfR9",
  "key27": "3FZajrYP7pbK6JRJGxVyEGR4ZyfjMosF7qPVXJorVAZzosfPRWjqT1th8pLNpXgMPGZrdtyNZk3nPZFv9e7GXEWG",
  "key28": "2VCWrxb36mfpYZS3wjh2HjidLLp947XCpibxacMuneL6SwPBLYpBVGGwkbznG7b5VdRE5gaWpKo6oZGkioS8sPt7",
  "key29": "4FZRKpHB9LyPr7LgoCKbkrVHXWFBgqjzm1EaWpM8zjKo7TUqvV1QJkRkwyXLpiZw99vhjsXZLRSicAhkETsho3XL",
  "key30": "z14y3G3WnXMVU2gHya28PdGVVEsKkSKhbs8hLm72VcFWjQEhTCyfmuwqb33sy4sXvVqEhDh9u8pXWLZszFipndw",
  "key31": "2JEADvEWoeika2JX5jhKkd5ReHe2LooKnSLJj6YGPCHer7QxZ6Y1uXu5zbfgYwCfDNP2dDNk2HUWtciiBrZDb9o1",
  "key32": "3gUz5kdmxdKiC72kwuB3dTKD3Tv4j3RCC7k74E6GCS5cdnP2uutMqNZnbZhCcbk5nPaqNBcvV74FoUPCufiotKmn",
  "key33": "4mZUeUQDtzf3nbyj2j8j2hkZw7hvPLAVVRWi64YABkJa9ALuCwjMQj52Yvj7aLWWRdi8E35PmthNXct2jKyQ9THM",
  "key34": "4pR2gfcm7diZkUunqsiuuAFT1RRKLuLPgyao2GZWV4eCcGZZ7zyDPuTRnaaGenecB1GY2LpNq4HajNibq1V2K8ew",
  "key35": "5jSmUkdRzCohFpnXRuSnDWTvVWHF39yU1QwsP2z8kVCC8vcdjM3nNFKn17ZaR8Ba7MTtEJpiS6KHqq3TfYG9R2d4",
  "key36": "2uJLJLnd9LDJsRibSv9aYPAaykh4FHBS7pGNP412JZ8MSpFnzE2TaJPkCFwzEanZk3BUfwou4zXShv6B9R6xHhXT",
  "key37": "5g92vz7tiunjCSv4C5VRZitUycPgcNgo5EWVFfuH5PLQmzxMzMCid9rvq7zwjCUNiys8KotY8tRqXTEtpZvhaK96",
  "key38": "2USCw3PDBnNmRtrpzzsVQCKsEwWTnYEpi7hz4YovaLVxVj4bhriBwLeYBxm9FSU8FAgz8nccEaKvs54FSh1jXLfC",
  "key39": "3bu7HXd5bBwxcE2MReBPBQxjxeHnjiqQ6RSDU8wKW6hR1U134BfR6C9Tjq9QH35t4ngq5XizLDWSN62FkcBatDwP",
  "key40": "4VtNsa56kMp1guDBy1GZoUBrZLgEz2Z3NPAuRTMdqoUtdyt9w5XYYnjUkACcXAHyXGN87h1QJzAJ7TPuNz6qD5KY",
  "key41": "3ZKHTjCgJRt671LDuv2uaUZ2pDSaqXLtF63BUoGhw9wHszBPWUv1rMWkJhYD8HeuJdChw9S76XXCktYLcBMVfavj",
  "key42": "5NF2r5eqRf5wGvF8THcxynnwQGtsgQAPcdArH6bw6KDTwqXo9hAC3nvwtdUHqKkcdW3Y1go6eeH9zgbwJng6gmoV",
  "key43": "7jihGp4sgiJUtKX7X5t9dxyWpMsbVMoxmt52tvxgHfB27gyFm8ksErXn323rqkwfKDzD53jGHz2e1DBhKVfByNH"
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
