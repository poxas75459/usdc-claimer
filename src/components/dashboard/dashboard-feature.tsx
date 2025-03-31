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
    "4dmqRPPmh5veQzEPTn1DimAmdzTSS5ZSNCNPt2CRoP955qh4EqmzUdk1TVznXRgSSBiChp9wy6UPqkKCTPRUVRVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qgdf4UrJKhYnCPAuyFAxRr2Z9wruygwGFUUD3gBQAQVdWVzpaGNeoUxsfzmt9cqFAEiiSdKaMZf8i1R1RkjbVJN",
  "key1": "RffNMGAiY3GfvosMTNaD7ZnS8CVGpbRm23dcaSPeLpMTX4SkPB9Jh5n27r8mB7itGsYt3uvcAcgL2ZFrMCK8kwa",
  "key2": "bdVVAHLX4B8st4cLY1BVvKg1iaATp5Yrmqd6krpnUxpxuwnjra42c6Zx9NarX9rdSAPTkNvWwFAjJ5XuT93YirJ",
  "key3": "wq724fqaPDnKWZjjgw8HUwSSqXCgnsaYNk8kHisPHXaJvXGdY7kruSatg5Qkne6yvNE23fcixmVk5sk4KK8AJFt",
  "key4": "pzJnSCzdShKu7CSJPdkokzPE641Qm3rXNkhe6F6X19qCtsHNx13Svadq83wpLYPBZbUUCzoJrnS1dzHzeCpy2ft",
  "key5": "5H17PCiF7B8xcQ4A1i2LaDpfB3TLKLcDnicnsjjDnd5iJJAfS7RTK5AK8s25Wv5XVB5LoAet49uSrurKFbiyoPqU",
  "key6": "35DnWx8zmPKPvh8PwdZojBAQMAvFYRHjfXpPi26SwDzWkE5FbQ8jfYLDLaEkpJgrQSuv4gvGAkpZPQHNz1wNK5Tj",
  "key7": "5m7rYwGXjq53MVokCdnXeKhtCZH8E9tgxgFGnQpL7HQs5g6WpsqWrW5y1a12Gu9FForNS6258LdtSA6JMEHPwYG5",
  "key8": "4np5ciZMXNpTEqgr9er9s9TWekhK2kBPPZwu491g19BUMfohTJS7RR1wxcXwzeVtc67E4rFCCJ8K5x4dKbYV2bW1",
  "key9": "2TSAzUBeygA7DCXapbXpJhc14RkpS7ZQBQV8VZKneF6AjydfszbhP6jHWPwU4cTWFfVsYYNozkTRNGb3J3NGqTHN",
  "key10": "HuRFFY44Fi19Uxro22qCvFhs7brPyRunzvHaT7UHL9Dj4j6WWUcg8GG2SGejphkSHgwsbjRkWULF5e385amM8RL",
  "key11": "4w8rTpZrGajKEdaKcSZRHfcjPfc6FxsadGoZvgHcgKPeVJXAyNcXkdK7CFZ3yMdyJWbYPE3WwaHZtC8UDZycBogE",
  "key12": "t4wqCQH6QkncDWa2ktvPFEhxMMbJbsmo8Si91nfzeAgCuoeZC55EgSh6in3iu32zH1wPvAdVPr2YXr5gE2WBT4h",
  "key13": "4PH95FKTHzknyzJBfUvEDVCxyVBKyVKLz2m36HBhcR5NJxbgziN1iPYSu7CNoyXadkFaMGw7AmMCSjHL2qySVzBQ",
  "key14": "97m2rKLKiAkLUqXtJHvTMfF8Tkec1bp36agsVg8ZG7JL6r6h2MfPK9TNHKFt2sgqqa85uysBpCX1gJniJRFtt7G",
  "key15": "3yv17qfLLJEQvhuXaMvaXyhn9ytiUPwsgAMCrNNLxP5aLSXLVXXhZiFt35Dv1zs8eaAZfZ9DEZsDpfYZ3BqzhYfp",
  "key16": "28Lmzyxs1fdbmHn26XDpTZDfWfr2DNRD7H4KdaHZFYLRncscRpZGpsnvMHzGsNU62LCiJh43o3tf4XcdR58s2TLq",
  "key17": "3bwZQbujz75dDNGBMYfoRSCcASTcGtUWy39uSmG2kg912QsJ8f55CTSCfAg3j6nMRds1cnDuzTjTv6ktC8TPQvKH",
  "key18": "4y42rvxY1w4BouX8c8tJ1TRQo3WiyZLGELDRpsouBfxAyU9KXHcBPZCJ6cF6zYaoeDDMLE5fRTCi7iALdF4SSEAf",
  "key19": "zfD38C3JdsogYhRBLhFk4U2e8p1xKY7x139Be5bn8gUsg9pYBneYecgf4NxZoZ1QHL4rQp9up6bLeDEiRuzKTjy",
  "key20": "3HSrf4MTwU2ffZPx5GjnqdrGuCZGJCAwNdJpJVAokRR7kTHnRyRZb2PRKzz1UUeinAbPjV1wZpCBgeDg3DSR4iZD",
  "key21": "3mA9PMCu9kXQkY82gX165TDzTMoadnjQtgKAn7qJVpc9wsWKAibe2t2BfJ2Rwj8PvZF3wsmqmvyecxALj3QyQHLV",
  "key22": "5MQHCBaZsvgBoCurAVFnveX6pfRbEaSdQUv87rHfyRcgj5dWVdSFdYeuuE39KPnw37GPPhSHakYLdSXJQzeD3Cpj",
  "key23": "4HNQZZ3bmLtKhZ2m3tbbCifVsLtJiqJGb8R84SzhckrZn9ULe8JqXyzSmd8YRRUF4q2vyiNMsUPAe3x48x9qGqCf",
  "key24": "4AtFC6s9cbAyU59VrKYUrQLAtq7R2Eja4oV3UxcfLwupcXm2AeVnV9juovMFuJtW3VbSDdVZkKniNoA3urSJHfrb",
  "key25": "4tuCoZMyZ9mejGHKEGEmA343kLvMAY3afeSjM2DqzBMCdxpVzGzw8rmbnHy63PbWFvzZdeYgJxmgSegEB5k94wFv",
  "key26": "3E5spR3b8K9ra8XFxrjyWVTB2rDYZvKhdH5rQFjeKGVJg1AadCr61jvoeHUSRusG47AMjvBnACUb4hT9eBs4PvKn",
  "key27": "44ZGhYPALVZVEuDeiCRkuSsYjUWJ6ixQ7VjnTyi5UyCB7t5eFDg3cRenF2zd49nT1JJmgdxPs4rB4DMok1gLzh5J",
  "key28": "UWqKj82qNxcNGJrSHBSAbJ6qpHfyaf1REAu1DdRHE9aFtWzzpygbDqUN3N92AqGibgEzEBcEPpdYcKHGvjmaY3c",
  "key29": "8smQmkoAHH27swsAxfXfWPpTfXXFZY4xRSBujb9zrcNs47RynXLZqtwnHDZNm8BASdE4XSxvKfvr9HKdMtn5hF2",
  "key30": "2XLKaFxQ9iaf8n3rtkJZyCC7yxJVZnPMNMamckngjPkTDvRZULBQQYw6uzshGUnWeyZpwgxPd86wAeJWpreZjfmU",
  "key31": "2qp4SVEUVYv83viwuuv2fZQRSmwF4EYQbDzZamjEbSbuq3xMwpz39ZGtN5FPMBbmXpF39iFqc2eSMHx8U2iiFhPj",
  "key32": "57hgEZt6QtV2uycYMBLtDnnGEqL8NtdbhpRqMTP9Fr44L4FNzWZAcKNEuieQ4cc9NrgVuCohLZDdfAs38KWbiLzb",
  "key33": "44Q6nt7C3ZhX85SiSfAcsV2a4fjTbhtoVogT7nPxJn68CFxbf4cHs27ZoknBmvJB4J1GEmujEKsS26zuJZnH9eXh",
  "key34": "5R1VkhxvVLdWRFecXS8EV1yBqzV3hNBm26wLrRfEAS4pZLvRtTqf7daXoSmHfu7fykFEaLr7Eu5Z3kDMGpw5fRrL",
  "key35": "6RmLgKrFYy15z4KQqhuFTs4kKqH3LF4tjmwoJe9Tf76brk4LXx924u1C8vhA9cAnd5dYyiao8bpjZPE9BcyRT1a",
  "key36": "WqGXUCsVZEgkL833Rf4hxdiC3maFqnUrAQztqNYvRvUiLDWqxzjSGeZhyYdxqJS9KkwuLjMduhDpgwuYNw7qxBr",
  "key37": "3QbsSrCdbqkuG8B9nkER6sf6KLd237WL7Ehc86zzPQgKK6PvVSo1EVAicHCX6wQNVu9vAqr5BGN6YgCWSPPZSgiR",
  "key38": "3PTmp5b31iTdMAmCJZmT54yBCvrRiQnhm46bmoNF8LvnV9trU1G9fsU52NYJPPcGfjAjn7rwsm7bAQvex4c1VsxG",
  "key39": "5zUcgQipDgRxm1f77B6vXpbMJ6Y7qgzv1Gdcu6BgbhneNEQV1QRKcnr7L9ANAigYf4sECtqAxwDjxh5R1uSAGHm3",
  "key40": "WZEAa8EahkVtZ7qmSpNfissju653SGuNmj6yRdd74dPVmxvoQMNEcwqMyrkhEVABDPgUewfPistRbDsGzMFukeF",
  "key41": "3864kN7QuNScbkFdbNEhZuzMxEnFYaqjJP7Hd55SQdWMM2yDE5QvM97dMABTEae2xHSjQtkFfV4DKPcGo79jV5JD",
  "key42": "5APwd6UNHViDauJpGaKoLqnQzrQzpSiqL1cToXMHEg4Wnz3x3dMjARk31zWvFgDTKAZ3EUUYFdzGTKYJNFiDdss4",
  "key43": "5bCvDaC6TSEwTFZpP1TQNfdUffqxWdbz13WCukFwQkU41x1fcP6q2kB1R7FiyAEPn3anWDWcyoLZ2SbjAA9VmWUa",
  "key44": "2XA1unP37HLAvpVceVSJbh7hVtM7xoWRiRMZ4LkdoD7iFkDdjqnNawEtkCxrrMmSzvneCiL1owgGXNvfPdZ5Fagz",
  "key45": "5vwnprHbyutZ9dCo7WUqXiseDS3tL5RgmSEWYbeepyG8xVm4HLPgtLe337gsjHNkZ4yeKrcvD7pfr5b3JjobEJaB"
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
