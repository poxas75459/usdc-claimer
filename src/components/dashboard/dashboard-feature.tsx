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
    "GZCJMxsooBxd7fxuP2W1NxdcKmHcSV9dFAaBnxBJBxnByZqEAtCUWt2RanxCVbZLEnn1152QBoKFg5XSAaJSq13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S89vXxRoAkf1ni6VWY6qzdd6HCUDWHnR9bQcnRpKyQYk5Y3AcTxR3JVGSzzCiPmeViDpHSRk9cbn3GFWVDgvgms",
  "key1": "3UvFQmtv3QdpothW5tACCYuyXSEQqnTTxGhFNLYhUMoTRmxfaHDkA1YUR9HRmtvbZWEhStNMLs9Hpy7oBN92G54T",
  "key2": "iyhn2gLvkKEcNABqaM2RNL5n1ezGcUnjcshiqXMAhz9UTJBmoakogF6fgbNEp1YEJo95icLiVDMkwYVejU2p3a4",
  "key3": "3CimQbmpqQESNtbE9u3aDs4yTaJL2BbQdVZVHveygz4NxjWELkZGaWJdvruaaoVXzvT2RcdvqARvpwT6Ecs5x8aw",
  "key4": "3ac6EcYEEd7cJQxASfkkDHqsFsdx2Z4EQtEaygs3A6NoXYyyURkonJE3GXg3owiJka857LkvJo3tzLiCZDqENGkE",
  "key5": "4yKvVLWQ8H6oUgypLGcUZjrjYwVWUQ71E1CeUF64tTbCJjaikuFTsn91MrsCc9de2BF8UZoWS7pyALAcCySBE5XW",
  "key6": "2BBW2okWWoDUAXrrDxHZiMWuzeiHTbHMu5gLdMEHmad48L2VSJhrMtd86sSe1quPdiVJrCnCtPuudyDPtVS4s7oH",
  "key7": "QsBMZZSP8eiNfykaVcogwwUftZhWNj82ktvffP6iZoeJL5CgHRiPfCQRAnSWPgvtimy56bRfY3p5wjcK1YYE2qT",
  "key8": "3rHG7fh9ttAejcW1RWMEBM1ixyp7LzbE3j6ttT6wQzg2o53FYgdGGD9MXtiChA7KAsvSvShyyvgwWFJjV8gQT27q",
  "key9": "53gJncJMuhqwfkh5AsAtPj2LCsnk4xJVtRHgvVBehmV4gVGsWwDKUEgJGdxo4bk1nRHwCXyC5YEf4j86wSVDFbJf",
  "key10": "41EoEgpvz5L6iNJ5ZF3T1FXFL6b7U6F1qUV8t9PazhKN1ZA67NYdUGhiE7gmo9sto54kYLBEiJFs7XJEuZ1Nm5jv",
  "key11": "2ABHYPnWXZEJnCL3atbJZAUEzwsqe12TmZS5CGu2UmBcfURAEtWmxZ9BEHuUZJcJtNDVQbNVGiSYH95oLVM771DU",
  "key12": "1XyMvNVBqgGRUGnVD7jH5KZkzZhUZc2giXbJ9gMFnbG6TZMWs8Fd1Q6CzjAwrMxtPBJ8wKSegWNS3BrypNb9SfJ",
  "key13": "5nADjUVqpnHpTAecJqj8PaUkE3Zmu3ahTW7yV4SJtEbQwFR6M37LsSgz65LWS6dJr5mzsx5jwyt5X7Pj4mCwEpMk",
  "key14": "4mDemx4DdVXQBvmMHLKBa8SUivggrDsLovanKGRkLt8g6X8eYBFFccR4eaPRwZTAPV2ZEQJTgjALb4BLgQJ6yEFZ",
  "key15": "64mu4krruSsDtsjxoWFtS54532oqN6TEwGhge5h7hvTBqLnde57kg68EKW3KuNx6sckk5ryAwuh7diGQcYzCS6UA",
  "key16": "3iUT5G5BDtfYeJg1jqwt26824t6BJ5AKiqWUB41FHivmeVxiFixEBXibGcU8B9MJWbqr1ZZdATDDwwCC5EZDD4ZW",
  "key17": "2XfoDUUYHvzABgu7LQhaiWSWVjuNApc8gZxzynXveWx8oBXcenteantppD8jGWs2mDRmKTrXzw1aJJioxevq9bQ5",
  "key18": "4yAMBVUVzK1MASyXCuyYZfzxFoTWsdwwy38vWEQfC6CW97FKttyB9LmEF3bk19Wu4CUxUEpx5XSKxMksKNFKJLJu",
  "key19": "3CMddYKFezXCRSToDWbSRAADXeJcDopg2g5uUzyKzoapyeKBXhgYEnoz3wzaQiM18V4uYzbtS69DcVTNhnGAo69z",
  "key20": "nswxN8GH2zguaSmvm4hnrPXDuRjFPJ6XFXoDRFCeN3o5JgVhAdVXxSBEsZDyBvXCaecMMc1E4ZKx61ehHu9j9cg",
  "key21": "33JoHry7YxBzriELv8m6fiPAh6axLV8xU38ykp7nMsr6fXdkSXqRSFnGCsBXRYaYWEygwc8eFbKMWEAzLHms7TvX",
  "key22": "7XEAMGMsFKbXGcFMFTWAqh4b2tZWuJ1u6SnwowSXhwHCHAYfMgZ1vGJNNejofMxjLyJqTNFyUfiSfeNnwtnwfxB",
  "key23": "4Y8hpuXhGWNrENZVTKzfDnbAswMGGmt4anEKPWojiGZw3bdoxn9GtMrytuRwXV1JGhnNcNrE752DCmXGcPbK74yf",
  "key24": "3avpMsqdM6eupwguA5uVNLAgwEsdLy5fhkb6xyYG3jp93e1317iSxpXDLGVdoiZKegNvhRqVDA2iA7gYuxyPNdFD",
  "key25": "5rfyniMvQ8aPtmkBPqj9jCYupC2HXmnPbYEzPAeSLc29PBkrZZHUDN87SQ5XvaoKRcWhzK5XVmzzgDE3hcezunTE",
  "key26": "2bHQJ23sxTRttLYCkwjU3kkwtnV9CLsJNQW2CeMmV9tfvuQXrfgMDoF5vn8mm9dgwE13wC5hExrNUQGED3ez2H3Y",
  "key27": "5G39HAenJWDdH5KYwUnjHWzxNSUvQNmHXtSNm6bWEXDrH6fTE3TSUDXvLbauzJir2ghEkEtCHSopdmykw6CkMDgi",
  "key28": "kxQGqHaXAZfn4L6tU7bmHhmEuZPSDxWxKHLMt7aB5WjehGRZdnuouEzWVvioZfyKtkMJ1XpfKrxdRPfGCtaAoUu",
  "key29": "2Tki31B7vbWsHJFRpq3LtDqXb8u8G1akCBRF3fcKWFz9n6Ktdjtac62vRKZfcuSdbgTW55vAxaLFGRRbUynrLmyT",
  "key30": "3qrfaaPWtPQdAEMpY5WcKcwP6ED6iWpgnvSQAU8M4y4QzaKjEPqKAQX1gVbZMpY1SJ27moy55cj4fuKxTk8FLU4B",
  "key31": "4kDdVcWoVHW3FRYDQKpmDjZ741ujHuJCtSGVi7dnZeZpDM3xGY1Lou2i7bEowmxsW2tLrkANeGBkwU7gMYtSLgnh",
  "key32": "5A9VNU5dxojcHRhhcEPjkBoEkM31kKN4oUtoAuzKVK5LMKXM1BxbcuPzbZD3Yv62cNkAtdbEWE3Fjw4dtukT7BjX",
  "key33": "TUMDeATrX7fRugpHTxFC9JWh6fcYCHqxNGKTsCAUPg5ZLw3oT9KE24m1E1bQQmWm8RFQERx8JVerCmo7Vvit882",
  "key34": "2LYu3FWFj8zQS8fVjUQzRF7Tvf4RAJvqbK5dgGmWmBKmvV9fZfxFamtjj4HKPw6spTJJDNftAp6AUGDaiP9noGM3",
  "key35": "21wzBZzxjJfyTS1VcLdiwb9Dk7eKNM1SpDHrfqVG6MdAnRQvtmj3eVFKW4s58TzLftiEb4iBxAZ2zUkyAn2RpLQ2",
  "key36": "yUJPTExrfA7tqAdquzmaX6btZxJLqLbxGyt3Sh7sixEA4HkXW274ZP1tJLAZxb7N87RRGSWpEFiJfdvCKgnf9pK",
  "key37": "3Mrnu9aujW5sXRwCAcfGWZPjr9c1C426ExR1Zj7TnudWyMWYJhTSjYni36UCSw7CUWmnWqDUCJ2Muc1U3uBRhUni",
  "key38": "HRGzsgu6uNtZtT844qsUhmvuvDfv2jFrLd9Lv9iuEdmDP5wGKkMLZybzSNvgbD34RR2LZgzExdX16Vsi5F3QLKK",
  "key39": "5QkZXgZjoxDtBSU5cLkxUhpaBeCgkzDAGKZ758awWZEmP8Warqr27UvomEPVDxopMcX3am74FxwZs91izgeSwqEg",
  "key40": "3GC4z5w76AGfkc9pzM7Yyzopo8CXEZp5vLsr1DXaT1iUb9Xb9cxWGfGtoKrD7Ksg4ZJWt6Zqjvr2pa65PXMRJy1k"
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
