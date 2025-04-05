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
    "4wiYK71fmNQGmEgvkTycB15n9naqRow4KoUYuF5ZGmZE2tofab5ymbFikPdWt6nzSLQupJ5PpPJVoSBKcP1pkkt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4SehkwXBkebFXcTbmSm6VUUfCyNmi7u3u8SH4KJdTrcPkZM6mQmdCFs4uafoQHwhM6J2DgNXEN19fh363iS2EW",
  "key1": "5ank7okFKPfKPxVZnDSBPJ1LWiAPravHFWpJwgB3fmW6eqSpM7GLV6haS3cAvo7JEw9t2x4VH1wFgrztzgjeCu9W",
  "key2": "Tjrt41FwddZMFQLwJz7Taq9oSNszKDnnPtzLaYAZP8oZPxYvkZ9zqfaXLM3oYrdY4QTSKjdAFBsk2412SA5Sdq1",
  "key3": "YzZZHQYHtMDVY6uSbiQFCsWJN6zFiszVzFxcJ4BQY2Fud8uW6qYzissQvtxsMuKaYb5YxUb2TwD8uBqJfgs3ST3",
  "key4": "4EvcunNoZcMANXt8ykQ4eauNET4AJJGAzPpuyHajPXFt6Fz8jo9WvM7VfDNchdsJCRaoyUDL9dtt1LeDVUj5TBjN",
  "key5": "2euSQ82YjhqxcEwMDxe7orAJVAQcrqc4uFk47SsrSxwW8XRbJbgWMDvCEf6UmqvxCWeJ7rbVJe6JqDi7ZrEkJWGH",
  "key6": "N2jyjkh1hL8J7Z5Kg4Mm22AiMvbVKorzcyELPdxvgAh3BMKYtTKdz2TrmogDa37ACWJ6xhQXyPUgkHCzBWc2pGq",
  "key7": "21yV4zqx9cvUECaFATBe91L1Sb3gxgtzQpVTfbPb11JZSezNEqRwhgd8mZzBZKwYLoUBkzfxT75ksQb2kEZHwMpY",
  "key8": "3J9KVcJpzGptwSDevw6DJrGriwUYkgWQ2UjKc1JeVW19VnT9y8TyBGQ8yUyj8xZLqcrzEWYu8MVPqcMxerRXNvUu",
  "key9": "5nhUJGnEeUMpLS1bgCo7f2vqZGuYew7kBLZaZhK34SSsAGLUycSTRYCeXnytgN8GjjDcUPzFL6a7S8iQUxoZCaSk",
  "key10": "2uXuV63175ZW1Z8Su3gDrADaxidHYYmB4gb9Anm42suRmyAfn7mCwMrt4ycEFeDPxEhdKtdpFaucMqg84Tc9V9cj",
  "key11": "3byKHdGik9T7KnamTbFTFjup4CMm1UcPpPHzFvwXsCjMvqJ4hhtE68NfERTB1bHeNX7MJ9nK2k83m2387hfoKeHV",
  "key12": "6B8okaTHNWTpxPhzYQjqqR5NUmYaf1THBLSgTMzH6hcHaLhfJhAAQPyWbSFzSMmUD8ti1CsWB5waP4eNBCfDmg3",
  "key13": "3oBbPq8dW7MDtV12DP8beivs28EmXJYjSHfYMxzDf3aQC6MZBVtMpXZfzquWM2hfB2WRFjcdgXy7Bo7MGUEuEu5V",
  "key14": "4MM9Me5SC4iAhWWDiJsJfFdtTopTSkQMK9MUK4qXFReVyHs3MehiY6WRZ2uW8NfdhP8ocpdw3sPyLg9rmJg9dt7x",
  "key15": "31b4sK7dcfPrLYpRDBwqGZVnkjYz2TRvfxEa3aScLfFcrkvD6xQ8XCPXeXMfgW3aFbR9pqs3GJ3o3FoTK1hNRxJE",
  "key16": "4Q9xBjiTzZRL5bE6sj61b2sTTLbzGXyBXimhNAZW4SxUcfFYE8a4p6izt9CfxCzHUHDHmi99CKkvhvSxNz63od89",
  "key17": "64RnngxdvGAQv3LxWiya2xvpamFSdJ3Qpc7r5PZJ1eLAkfMYwAVk7wSjq5eCjY9GyCZTj8R6BHBktqxXtyJYhLBz",
  "key18": "2E6RXSfNcsbqb946svMtNPjR1G17av1G7v6GPD8eKyy2orMDD6BhPcdy6fhdWvb9iVPqJvWCKgxdxLMhGp3a2qpw",
  "key19": "44vjRn6B1Snw1mgesovBdzUz5MUjg62fgZ86EVjsEWmjtGL7Z5wEV89XDC2pTfCb4WewFs12L4g8rneqvnfHm7bE",
  "key20": "25uEbw8egHVG7Fu7suBBQe8iSVPQPBorzgjYegtMVaAkXPWoosEs37s5yUmPtju6CfH8YxFPKhKquZNAPngq8ddh",
  "key21": "3ircHQGMdGBgL2T7vuX4HurpQ5HU338KhrSRkixDPPEuHbcmDEcmort51s35QjyxC8mccc3F1xVZ8xYby4KJPtPT",
  "key22": "4f7j8qMKHenNfAqLukmn58fuNk5nWpLwT4RibbsHtERvwhJFZqbUK3N3npMzLto4jJtHXQqSMPK5JyRk8M8W9Cs1",
  "key23": "4xCULHqAmHiCQNXeQ4n14jdFWR7ZrLubXE4Fn18TfiYCpaHPcKXXpkHBUywM5Sk1u27iHcmHNA61MMT9FhtKVwup",
  "key24": "3PVsidCMh3U5cqGaERZc7iw7a4ZGQ3g7nVTqs5egqzEWCZeb7ate3njgA3c4GEYg6B9aP2qGDahknvGTLU9P6GGc",
  "key25": "5qMCftfevwu4gSh3KJnVt4QYDa9VC1suJn5FvFFmmhqtuqXrwsN5CcqKZkTqMzYoJ1F3UjL2hs77SutYk24xkdGg",
  "key26": "5QoxDyEnr4Z3x3hSE2VgiNWskGS4fFeYvELe8F1y9YzTCX1GH6rrginHsJ54VvJ66wqckBdQDHoc98ndYcqnf1VW",
  "key27": "3BJjsBBXV2G2VtbRoWSV6xLfwXHfFuiaNFUhbtTzqfumSrgJAoFnfydhdESY9GDivaQwf2peCU6WUmZ4B2EKGmM",
  "key28": "5geUENaCwqbwyCN3cwot5oQ8TtCttW4ahc88bkkFC8cnphLHdNDuzFHMGXXCEY2UzufHUmwTfyKWJKDMn9SMpF5M",
  "key29": "4BNLLpvtH29cV9SLY4GEdY6J1FkuzN8YXetKwgt2WnNm9K6ZYspZUop24yzws9AvVDKxJC8yXNTj3nz37i61gi7h",
  "key30": "4HKuUvzqq77ZNiuoiWxGRksUUjox9JSapJ1Nm4rH33QAD6Wbjqud5Zctih3omXPZfZpbXPKiUKZn2e2JHgKprcpF",
  "key31": "4oxP5d2y5m6pAF7VZGqkiJ2kGmy1jSHjts9koL4vNA11Y65YqEP3mTB4AXAue6yi73eA8n8zZT8VL2xTPDzywPQz",
  "key32": "3Dr98TqyiUy5oJxmDt7qhhMzb2rnoybg5edFbouCWkNKbykxrvfQvZytf5qwW2Gy9b2rBEziE3Xvdp8oodX8iosy",
  "key33": "53nnWkYjRQf83FvP2EG8Fm4Ku11j96RvjLXEz7qemZxcCfZvm5KxY6DwFpCfXQLytVJro5M5dhPrKHiDNFp9fcTL",
  "key34": "3fHXu2iEQUT6PDoaCo3SjmiQzQmgLbWwpDnERRjnvULtjTLsnBsDFc2Dqk21hRiHECyi1nP5EQ3BMoJ48W3YZTz",
  "key35": "4BGCMpUPbH2BjCbkrZQjryNHZP89JXaeSiZFopDn4hskYE6HGGLdJbEjQQox4zdr4HfCYGgb1zcJ1BFVzVbgN3Wt",
  "key36": "ubM7KHd2p1W53GWvEZvYpjUSpiGqM5KMcmFLxKpPsfMkS2LmhZBA5fBFeAC1SzM9PVM8ogcod7MDL3ZXAqiEuFk",
  "key37": "4iZHMFbEp7ji6Ra9PKJF7Y3EXTEWzSPYWDgr2Wwid76H12EjnCjAwC5jsFthi4CqB9WvM6SpV2uTR3cX3r8krv6h",
  "key38": "5CkZi1NFEyUy1fUcSNxdd8UVK6T7kySKzeLk9t1j2H4cJ5pHjqjvivWApqzpLnHGArGF7TENgEPT7kWBTKa6AVjG",
  "key39": "4L8Hw66SxMTdDzKcxuvSZC3FRYp71pM1aDjACgEvPzFgj1ySXydxHcrgP2HrEHJJVnfQjfymiBp1BpSbFhfjWZHe",
  "key40": "5iypsxfynB3Vy9ayADzhYcegs9asVA8dtck8W6dLv1MtHMKFvefLd26SyQzjdfFkzhUHvFWfJSY73j4hFTbSLZaE",
  "key41": "4vgZXjgJt7ZDEuEkNnVAD8C2qFhqK8AH4HpKWN5qMbJ5CeV2vjW23xFeBDVQ2W3LfFRV2AgC6T8smnfgdzync5mu"
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
