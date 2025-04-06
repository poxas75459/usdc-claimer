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
    "2T5okwRPcSiV4687HB99ybexnNuF76PkoahVEVMg1dpTm1Rdm8uza8wdg4eZeU9hVsbRPGwyjGCWWySMdPTytHhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDRxZTXmzRmz4Dtmr62PPnCuFqqcSbRkdGezsGf73k2q1WWdtYiJbRyF7iFJHqnrcteMrMTyYHrVXfE5jGDSZ16",
  "key1": "5GCpYiec2G9G16HfcFdkZ2VP6PwWBc92UEX6Nu2cKUHMeGvRrZb8Guz97aYwyzFB2BEohFfA4S3ViAyb5V5hogTy",
  "key2": "4wMSfSSnfZhttpE4fTL4QJUoa1hGdPZuaHwvxutqCX6c52Dgoe8ugLHoTfTjoS84svVYCyVJNHGznsmk545MzFY3",
  "key3": "4W2u8vNpW6pFnnQJnAiEis5CznLBv2Pe3dRHRnzQubui992v8dStZGmB7oh3F7qC81SGdX3xrPQsxaBcnMX449LT",
  "key4": "25j6a4ifWu1pfn17iFfq2wZWf6d2jvp7kTYXg3ULUjVwFU6jqXZgx2ey7PSLvbJuvEvbp6FQ8PrftJNajTvaYuLY",
  "key5": "k1ZUhMikiMnxwwuK2jDHtJytiM2b6yE9WjVpDLDPXNnKLxCthrk1pnS8Fka3F2rELeBJtp7zzKCJxFZJxaNcMfN",
  "key6": "36fsAwJKUz823xSzhXMPZ8caH59qghpSn3kT1Y2dCg9eewydugGSEM1rbt9yKduJi2yMaMKDL3YQTSPjRQ3WkKpt",
  "key7": "4nti7jZp1zpSHcAzuMADDq9paHuCySjGP2Hn5CKsnNUcEjAUmnm8XKbQpgTTi4YxWyP6NWoFr3Rr4fjK4yUh7Ryb",
  "key8": "kbkWVhSBmm95cYw5Y3YDQvSZVgguYwNQxg3fxUm8wTip2HGzexeLBmPKuApxWbMNeCtT9iWKMgabu31UyvbB9dL",
  "key9": "YqgfbfHZWSABv3h664Bu5HH4w9qPodh2j4o5JkDKJ43UWBsTmtLxJm6ku9NAS6GMW112PGWZ4TfSj4yLaeTpYcy",
  "key10": "24BAHjSCHAGEZKFik7GckrWFDuvfxb8adzDAgjCYJhnCqKDqXcGiMRBfaHvWzVGBrrA4GiS1LMgoSwg6V4Co3Vpr",
  "key11": "4v3y8WB9cr3vvByX3c81n2V9tiu5KsypVJ4EFEo8BBDTiB1Pa5DZbFrDrk5cSGQk9PpkYWE7Nf53qJY9n3Ek9E5w",
  "key12": "5zjRU7LodXDZRryBJDEJbbH4i5235jfC81ELMw11Myb7u5z7CDAALNeWww8bZbtnF6KpE2SobsZH3tYuMonNCKQL",
  "key13": "E6MHgyp7nY6js5yvkjgLR3Vw8hWaCwv54zJbwiP5FqGz6ZszsYVseFyyMz5WAzsvM2G73CxgYRSbVb3n2YhTS5G",
  "key14": "2MnkE2PjhMYHfBkfWUsnmvt1ZWcW3qmHXRCQn6uH9S7y6imfWwoa38864BHTccQXCptkHfa2fmgAmaZ78FFAHqXo",
  "key15": "29ea29cPAJBUv4AipxJAn9kwGEYVH9vvzeT9EK6qyYjkrYKP9QWY4LM1E9KT8UQroTwb74iLMq1gdXzS3cShyK53",
  "key16": "4rovw4a1ADjBWe2twdWsiGf5w1cAMeA3M5Dw9EzqVEMF5B2N1KFLEZchA1mJ2ekmC2Sy4PjkNh7wnTzcbaTQpzNU",
  "key17": "65MtCoDBKzGi5VQavtMH4P9zprRLpmm2vQtgcLrXG9Nw3aksm4K5ghCrpUjdsD2UT1LVja2TAiHHC9XBmSftufhw",
  "key18": "4jw3JWyExSUdmFxCD3sA8rYTGeDaFMFvhpdD2L3UYLb7erj8Z2bmhhG5Lx2LP8igo1WLR772UmJGi7LVtqCTozSe",
  "key19": "5b6uEmpPzjGJW2UTwQqN4jLLZhyhMNoqUXBFRzYyDzuSz7cXEf9NAWBbu2ZA3LakLRRJPQSXDRTQZprEVcvCzQRk",
  "key20": "2mTqzC27swdiaFqq7HhdEGi8gv5qbFjrS9L8zehnmViw94dr7H5A57scQzHujnRhEK2pmRqEErABS49A4RbA1jYE",
  "key21": "bASskqXTZiHQCRAEMGZdzkQSwsUBz3Ck1XmLyiMxXwz5C5vPDk815CKU2vvXe1SkGoDqgA6x6U848AJRLnmY6La",
  "key22": "49Rgih8PRoc66LWPoTWnB94kfPrTRGe1rzjs2HokZPYr4E9izoxU2sEWyoF6TWGwf2WKsGw1Pbhys9ugh5U8Uhzt",
  "key23": "5LL68tmaT6FNXtZTgqv53euU2z8pDFgPpDwwPX1yjksT3mUMsY8nA6P8LZKaLRMXGsNtC2QyeUdia2PsBpL4FfNc",
  "key24": "5j9y98iDerugFD3S3PuNHqvjRuxWNYgKRdM5QXw5QuTDbR1j7CRF1yJTZ9rdd9CyKsUaCVNXhXGeneREBErde6K9",
  "key25": "hpCpqhck9Hv5kFRdA9e6g4r8TLcD6ZkZUbRCWQgBQfSQFDXYNAfN5G1GDLKs11eid26hYYodSSd3afq6a73UUcy",
  "key26": "61WjCVowjhRGCqg2GzKpsQjTZTERCaA7dfnvMeVoTBBWg9qzzK86sJW5jW7BczwRhe4dtW7TogT7PgYJJvanqCrF",
  "key27": "5ekYwutGhL9g6o9kD9f3chANdAAxiNyenPvRtkFeyTgauScEJFzQaZhw83CFySSqyo5MPmmmW7ZB3QY36ePHcGGA",
  "key28": "2CBzDDbX2T1phuZcGseQpJJPTpMbE4YZFrrxQAE2W2WfYAnpqpMHgkuL4gWg5fvTySiff2gQg69JhKRshAyy64Uw",
  "key29": "4ieBRe6eEZ5TBjr32CpW322qPGWRMuuTQrnWx9a65ePswSUStBqEyfKqczbKkfF47wvwcjeweLahiDPR1kSjKvVF",
  "key30": "2ypx9cjzfSJBdc7pYfH5v1TuVEd3dNL4vxouhtNH6rRWeBKmT9KDSTxxcoXgTjmrvpB6HpAPySvH8MwmdYfGsUGw",
  "key31": "e82RKHEUmM8iVhr3eHVe3KN8yE2YH5Hyvw6RLjBaU1RQpcTUV92HtNPCje9kHpF72u8MCeftKAFwvot1apzchoT",
  "key32": "44fWH9uvSnosZxZYkvgECQtLNCLNXzt1Ry7AN9k8CvBae8V574ggwAVPuSFjLQ1dDxBR8rzAPtpragpG5XcuaMJL",
  "key33": "5s9erQeov7JjgHsV55ADXSEfwF1GjLRCdQVpYDpGS71hwT43UhR2i5ZEReVG29HjX5njjCoKUEsU7iMH6BNZX2vj",
  "key34": "4WzFEgPpdnAns5QpkG6vaBSmrNXJt8kaU9V4VGDvxByHJf2QGYsVe2Tbrw1FwRa22nCuokgbGKmnMfeXVpbi1jH6",
  "key35": "2R7V4BvarYZKec47Lu3P7sKKhetVdsgncbsDQMGiMcNkrSub89m84tiYN63dUuvBXvyBPWgZ8jKZ7m6wUEZ9r2CZ",
  "key36": "3odMGtnmcAxdqDgCSD22cWfX2g1mC4LP87bGP1euqqPit9WXTe3aRtPVmqHVfAANrhEYxi6BxLueRBszAGjPem41",
  "key37": "fEEeQeNLTFiCdjxaNNbCN9oyTJ93Z1A1BmCCgJWrvPUPjyQqpVZWUgPu8tgoLXoD9cCY5zMGwxsR2rEmpZzRpfx",
  "key38": "4mdkXvAt5QK12ZXJB8s3bpamrk3aWakwY36K7Smx9Z7W9HpJ3Yi5zT5afhH8LkP7b8w239MFR54r1vzXimuJbHTk",
  "key39": "VsFCg4ixP4by6z8isN3W25Es19jwtrcnuwXfD1c6wGMLfASFLHUPaSgueRSvPr52kMzcMMCTTfRP2iPieNSB21n",
  "key40": "57BFDZ1CZd7kGaS5N3PMprQJxY52tCgqL8r2nYftxf3kpseWcBoCpnFq49eJ2MuVxmQhqUfMdrZHXJS28KgfEVxk",
  "key41": "3Q3v2TSt87CQ3Z8HWatbz6vgDR5tHaAJNfVDdkjCBo4nwVmaR6Xc9kvvo4Zjgcjp38RY7YiySL5Zt2wXuw1ss7ED",
  "key42": "3yFh3nDY2fxJm4qyVPBra6qJHezSXjzcvBGDZqh3uYoJJifvSStWTfbZtBjsMaG1ZRr4ALCW4xR1F29KE4pZP8T",
  "key43": "2dimAP8Thy9AVwqbYXzhimwXd15gq6K9yj5mKbXoqCV4ZLY3iSGXvoYGbfgiphaXRsv2LG7YxJkjZcvubpyp7YWn"
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
