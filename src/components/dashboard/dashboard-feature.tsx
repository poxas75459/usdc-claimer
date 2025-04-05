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
    "62tbYCc4rCofeTYNPp6TxnSPuye1WtHeVgv8YSE2o8vn41BCA5PtJFycicrSAzgs5hk1zpq4j2tswL6mpEA8xTnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25rCeTp4zBQ6hz4WKPPR6WV9wcwZrQxGcWFhn6xcGGGnpJv7JFPhh77Hhd6CzDycQUfmaMZ9CyUxKzkJcdXzgJPr",
  "key1": "3qZabLNb1vZSrvyrNJEa8cLpQo8iZbgpoxX3HFYynfiBdjYQiqygfbhaVhhfWCdnU9WH8T2kzd899LwxLfJqpvwA",
  "key2": "yuagTnEwjF8n2BASnYehqPtcHAGxqU5Yt2e2kYMfQ5i2MsKvHfZYbZxSxcc1BcFmd2c5ELBvDYeGWFpWnWaSWsT",
  "key3": "2LHZTDA5gTgtDHkTxva9V7D8xQhA3DFzKs692WxRhKQvXkZcrUfrsYQXphkCTR5UQVTfQWrVidX2JqgtYc7iLhCv",
  "key4": "ZSciKG4Y5LLay2DT2W2Ci49kySbGsy5udjsoKN2GEB7WhiNoCNsbHqeVqc12ob5YiDjBEUYmG9mmnJQH3BYbzBt",
  "key5": "2mR3HHbikfEsQDKCNwUNoCkYC1vYEc6yvebLvMcL3mYcAu4MG4sjuMtMq6Kgzr5swQKy9Rfh6ZGErmjmas5Ejx3W",
  "key6": "2AuqsLLgQ1NPM69EGNff1HNfw91M9Xy6VBjpMPsboGzEkhUnurRz5m423bsnopHCNzNKjk71sP4n59Pem7oNJ3wC",
  "key7": "2iXLNQtyB7ytQhs1yuKQATHi3gA7qHQszNKYDmhRXjbk46cbK6hFWTLvFUA6JAvTiqBEwXGBgGbmvBK66CBPT2qc",
  "key8": "2jf3Bftoj9JtCNS8QBeeCvK4NrmAR7ExUuigxfFDfPnUHFncokjTHDQENxtvVtxGVXMCumciDJf8CoNEkjGw5G4C",
  "key9": "59sya4KRwsSaA3oaGJkht2iqxSMeWDwEbviioJwgke83z4fjKS5KN7NtNorBykQPqFcUVYRDyDHh3SgAitsB8cUb",
  "key10": "3WZdmpK7pu2mPbhUKEcixpANt3UEvBbB7ES6qJsyEFbWea358fDxScSz2RRikVv3XxZkZrcgGtyzUTNWUqjNyv6m",
  "key11": "WXeiMWLpYX4UyLDjy4iQjVmj4uvnLxdQqdunNoete3ishrUb2fFhYibnWYRVX6T42eoeghhdagodgUv7DVFQ7EB",
  "key12": "3eni9iE3eRTfb9t8S5seTVZSiGUEvtp7XmNEx1nKKPMJwEv6d12HgqzGAyCkzF6JjmzpWBqm82gZEf4mz8fkC9X6",
  "key13": "3V4QuHrAseLfbhaoBTnQ8EnH5docykenRKUGhRbSAvXKgMGJ4tJhA4egLCb88ExZktGRxVPTGbAEiCPfdaMiTBJi",
  "key14": "4pRQAsxZJK6nZkYMZaWC5mdC2H6gquMyYkZoWuDbNZwwLfrPDag4L7BoQvgPAADR4sKLLRw6aFCQN2tnmwynFqHk",
  "key15": "522JvfBgaKjLZD9mk7wCWKifYZttT8Eicn6JEQVVhUrUU16RmXyEXfPEQBo9CdeXyUUPa5t9DrJRvb7HJQn1i5cL",
  "key16": "2PH2TiCSwtHngRK7qtfXanKxsxh4f9fX3HD3BLxmZmaw8dVoLzaFxVAkb26Ao3mH92iG3r9UDLZM5kv7N7X476Xc",
  "key17": "2eDY9XcB2QHDgMSVzzDBjNfNiTZitRxgFBGQ2jNhFgWF2y31PHxuibdJNfWM6NQ5Sa9XTXQrz72Tdina92SkaJT8",
  "key18": "4XQ3jPusFabsXhrAybkghkbqz9Rg5FhzFeXJBLPrFD3AWQvHzvBiLMxLU2mxBrz3RHTNPaXABvYePfPrt7v6XUmj",
  "key19": "vkCSrd4ez5EJEEJFBYUWjaSUHJm3nmVsH6FiTWjKzpV1utPeantMgn1cg258asPipcYoRK6DwnLWoNovrRT4M1S",
  "key20": "4JapPvZofW6fMbRrkeG5kxD9neqTZT6ttBCu3eGjhw4i3dbSuyvfuqqjc2aJxfpJDXxihoMyjTPc1geTT7c8Xtfv",
  "key21": "vt1Zn6Pi5WCmMiEiFAhEdUDP4eJLRByoN3X5XCR5jcrkT4xgpNnPP5JSZmR11GhA2voKMfjshwFEtCQY37CCt2P",
  "key22": "45Vrp4AF82vmVtUJ7szidP5ThSpXx1vkhfmCgyWMbjia9zDAf7ZRJS7Dq6ectfy1UrxYtb26gKMJxDZERqZDoo92",
  "key23": "251Nzvm3QfsFaAHpruLPDyhmkGXsBrMDtFNogtjWhUeEkRNVzZYsXeoowfdNjHs6XPzEo99HnLDyaeyRdLYL5Wan",
  "key24": "241m12Qqnturj2xnhH6bmavafArDntBtqF918s5WWtnVJYanne2WKJ9V1mEvJdgh9cjuFpanvT7mAtZJEre2Gagn",
  "key25": "S1MKpGHn5rjEveSmF83UkyoibgJXLoCxCpbuZz512NVdCm9HDfFc4i9T8nJ3Fue27V2eWyra9VozjuBoB3n6T9N",
  "key26": "3wKe1GeTc4ysr2C2d9Tzij8NmxYM87e5gECbAqW7eWaxMjw88wkZH7SirvABVDpV1Wsu52pKwtNajw2nS5qtRj2z",
  "key27": "XWbKTtaEvJB8RnP8jFqyYo2JBxqVxVGxbgL6m9eSD93JcjZg2d53Rkfw6N97sDVJmawjCyw2Gb8tqMB1bfoRcwh",
  "key28": "3DGUdVreNDn9C1kbjCNWGouwqB4v8r8R4GfRAoXEtYFRSqnsX1U912AVamTZouDqUM2EaqjdNN6CdtvvENRkzAFn",
  "key29": "223y9uZRhWNaSM8v3EHYt8N482RBzgwMShPwoG45vQRu3J8KtDqHigCAi6o3FnjyuSqXXWXT1jA3mRZ29yDGEBka",
  "key30": "3XzuvRbZp2yvC5DPXw9wfb3cQx3hRXiirEZV7HrCr2JE1RqjGwxxFD4t3166PUenH7vZGYA35iecphMwXjnMiEgE",
  "key31": "jPjpZC2SoEu3NwrJPxrAg7TvNjTiYSiyk8MDRM8v3EAA4ys4BdjegEbLkB1iD5QuwXuWtiQrwqN3bEVScQdRBu6",
  "key32": "EqY4AAHNevHGRYYDw4XxNcv3UJsbuUaZzxaWBPDxmdTuHqSEnyQZVPiXkf3koQPN7PbGwYgV7MiZ65FY3QrRYZp",
  "key33": "391mKvfuBY8jpesZ4agUendsBJADZrA5t1f53DNTwM6k2YtfpkzzukopxtN9dRNzvdvWDSKXx2G8HfTwEfBCZQt9",
  "key34": "2hinhVX7C8zJFBbLjz3ZhNtCHjthH6WewDKdYhhiz7kaG3iVEjCDnNwAKYjRqbSpsy6wWTQaT2axSmWhtPAHTGJG",
  "key35": "3QTr1DAEwTLtsycuRVaYKnZta8ig7WVApmBeGrFbdVLu4pAVb6N1m378BD1zd17YxFy9j8ccZLgDLhuijT9eCQr4",
  "key36": "4R1ZPFqhzputeBHytQ1ozRw9ktnJexmjtsuw3Jm4kvLXqRTAHaM5SYuyHU872Ku9burYoUxcxuJQVRWDRVBC2Fvt",
  "key37": "5rGSmQHjxTGbQUuD1ppkSQR85CYxoG1Y5PmdFsG6CL7DsR6jXEphh1x3xKkYDWqnjvNzPQaRNJVK4oR2QSdZLq32",
  "key38": "4V51cuGifmMUVisZUJErzkoEEicrUEDM2zXBbhDWYXi5DkndkSkLT855uHP3nLYRznG8pkV1HRuLdtaTkboVutW7"
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
