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
    "31ERhfj9fCdJ36mLH1TiF6SVja7EdtEZG2dhcZ4pQUbp6s5xLskoA7LXVa6Nzb7BcWSFh9MK5mG7FPRcx5He8Cw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66APp4HQmADR7dYfADRyxz6Swe1BTUDrbJaiKn55GHSY8DduxaEg2vSJQwvBzHtnkkMMpr4BcGae4xtoKydKM1cw",
  "key1": "21FwdanYCrNbBztUTGTroQ7wkaoFtZwRyXuY6FtqkdgeGQ8zjm3JYA55wU1JDfVNVC64tsewz1Hy7pPvmFY2BfQg",
  "key2": "yjSLEp9a874gGrN6uGWDqMTqver43wXmHJysRXndYJNfbN8RQuJD1HQXXYCQgziDV2PeBomwPGdmVGXGydAuNk8",
  "key3": "4xcSuLQdBeSo1pBCa9Q4rnGTvV9QGroCyp3RtbjvrSSQue1jsTDfQJGSfxixwrRnsRgKg1md6LjC1xJpKGpDHdWK",
  "key4": "2KxDjVbcbn9mxAXBkDYgjcRv87tSNBEJ5LFqStPpEh2Ajrmeh9N8wBBGmPx8eyR4uU2uoJiFZZaF7uyEkGDkP4TF",
  "key5": "62GUz18xkPbi6iSMf56553c6ddCiSFLc93hcBczBhxArSJDJkgAPAicRgUBbjQDJR7DXPwYhwQWmKhJEfz6Y45L6",
  "key6": "2cyS1JUjnH9ZoZkSXriSyhCBjHYrdZ9XdyitZpubxs2yqmvnbAHtvBbZ3wkbCEaszMVUudssRdqg9YbS81S5U49g",
  "key7": "43FBwFA2ziD2RMf2rfETD2Ng2Y7Gu3sKJk277dNykYjPLdHpya9sfLr7fK7Pek6uAsnxVBwVMf7Q5db2SX8bqRou",
  "key8": "5QGeuc7oUxtBkKgtxbGpQJpM5S5g5or5bsy6haLDJxXNAqBHaTFvYZeaW7KpYUxPpRgxMVhE8yKXX6p9C64zVWto",
  "key9": "5RQ8AfTyVeZbV52KPBu3Pse9781jeQambkvMrEoEuGS8VqMe5GQX3c1HfT3ms9SqFjx3ZVtR6qwujphmLcWuKzdA",
  "key10": "gege2u8TcZMB2CYR1exQxPGR5QicYVgrCA6Mmdt5tcnZYCMFwydWnCQibwWA9PwFNnfJbLGcF8mFitywgfn26JL",
  "key11": "5uRp4zFKqN7Zdxp2vLX96SViqaeSXH1iXkxaCetdeEhmK6RxsGwSwYi34nXiqCK2GhaQRZvzSMGAFgUQB4cNQVvR",
  "key12": "4HWQSY9FuChhQeeh8hbamGvp6VxJNeZakT3wj2bwbGT9Qv8TEWrYu7533MC13ycvgN9Tc1Rbgrsq5BcrKMnXJAZz",
  "key13": "4ew1gvuQp3BDUShfuuUtxvhKfU5QoYznqdBdyYv5RVDBq84SYbsUQFQn26ZjeSSbDgfsfCMzdP9TmUFp2gEQJddS",
  "key14": "2nvv4TUhrRQw3u2gNcFbmfo5ZRKKLTX6B7LN7yFoq1tiAqLy9X2BM9xYNHu9352gNBdmVedtBkYGVq8W91Gbt7Sp",
  "key15": "33Tm17h16LpE9MvXSu66Upax9GSiZRCg1nmEEDQFejcEZtvx26FG1LabvhLBwDwUpxQoSNTt2hwnRxBxVXwwWpuV",
  "key16": "zQgMgjkCaKyUuP4TN7ghrtMYi8jhXKBNsSs4NskbTitJios5Wu4GQuGZ3JYnsjCExGuobXmp1nfuLx4t5CVySwg",
  "key17": "2ZxYgE9ooZsugZJWBjBpxtshCMFLBt8S1nwtAyh8tPBFJHwxvLH5TPiqwxxM7VPJ13YhP2BW941kKVbVNSSWTRBH",
  "key18": "xqvCQEGRY9Mz5Mwu5SkAEEHEDmEp3fqEFcjpngUvaAhkTsXAd5ro8nk5izaB4WmYpiNP1XR1RGEBi1v3kR64s6D",
  "key19": "2f2QRxLSKQ7xTMvEYb1FvxQMvPKyogrPuhkTJas6q8yKHau6F6c4QS7XJqS6oWySKpoib8DN8XjRtgAvyqfvwfwy",
  "key20": "54NTiyZmPkDMTDycxm3BNK6ez72dzjGbma3a4og957ZtmJs4gXpb4j81SWzu1DWknYkq34ekzbF1DYyGTPc2esJV",
  "key21": "4KQixhMGExQY76Dcn25NY6BCBiJw6PXNHQv8cyNp9CSTwpdEQxQDNd9MyeUgsRmtiDknokbVGioHsnKqS2RYeBB6",
  "key22": "3VhZmjeBFVaM4yKwZ3nxQJxKypbnfw3REYe4ftKpwEniuVHUmm1Nvas7sNCCZDyW3THCT4Ha5sMsKW5UE5kPWCC3",
  "key23": "42cofGhhvYesk1n4kYVmDUJg76ApnDk24mt8hiJpDCeThzo3mt9c4o5DU5VpoWLq5JgrRdWhJekw8fsqWjt2q6U2",
  "key24": "3dC6H7UFcZYRbbzy7FFfefFv2i3u5Ut6Fd5w6yaN7oHt8devP65cvvuc8FUPLVMqB1LM6qK45CWmM2KKWXXuGciH",
  "key25": "5bnKM86bM3RXapaGY4BvnBGt7mYFGBdUqvjeGnXdfuufSfWCxXsZSWrxspBqVvcZ4no5KHybZYBZkxzpJTMKBmUu",
  "key26": "4FcGbpYpAS7RgDiJ61ZrTr2SAJXWfUdnUkUKrEWUxyZFnV44LC3fY4ZfDxgmGMw1Y3dVo6kCmnp1m9gLVh8t82CL",
  "key27": "3WBVt3J37PNxvZJXviTox4CYESeVFebMy7ed1zVJZZG1VskimFBvYrKRFLre8CEx58mfiTQXy4Z6Hiz1zazSJBn6",
  "key28": "5A9ius52x9ZVBnTjc9WCJjLpLYAE7zwQhgPADuzYB65pfm3HtuDybgXJUCWnG4KqNErepgVnT7rBXDUjj2F19wu8",
  "key29": "5vbyHRcDFp399NDV3Lh6igeQzFBYEy7mYCfugmpgYnQfWsmAETCyfk5WKnhzRNSHbTNPN9ySvcqB1oEmB3RpjZrY",
  "key30": "3YsixJGV5anj3HoU72UGnm2izyR2GJT5wsYAWneVSjP8raHZddRWPnL15YjUPnagLfdaMWCZx6yLgRQ6zBcdzSfE",
  "key31": "4DPu1VuCwTPkPagw8nbKtVBPX9QiWktu8eMfXe6EZLaFfJjftz5y5u8GfwH53jnkGWmbiy4zEQ8yZtk3GB4oLpxy",
  "key32": "ojhcsKyyGQMZxP69Wbwtgc3RUQ96Jogpw2yG63xNi8mCY6f8LyuGN866pF3Ky4X2p4ESBeqQZN32wtc9YQCDJLV",
  "key33": "5PK4qp1VhfAHpK4S9kRRWBjz9T7gsDY8vkUoLSmrxz4RJ1YGhWeE5JYjkeg4DA7V5N2WrRhHzRUmcsTVtrWeuXCG",
  "key34": "5wHBDxv1znBWeAEQZ6yoxdGRSyaTnqGg85dtxfdSAn2sqsYTBanKEXwxTmjVKYstLkd2pvzbHPDSimEqWEpGC8Z6",
  "key35": "5yTV5kEdTDPxRoB4atRnv7kdobbntraKstT7TVhoBDetnjXEyatQiaX5JdLMN5ZzQE6eD5EcT2iuWKaZsM1rg666",
  "key36": "63pbJuKUdgqLj9KekYEGyk6us42komY2gEerkVWhCZXvPFvzaesUp1253vcf3CSRsLFbAGxhPUTAV7Njpffay4xs",
  "key37": "56PgfWUb6V8y9EXsx8jreH3tPaY35b3FHfJtdrR8P5r6ALunEPQw5koe2cHn4dp6utDRjXi2qQ7acVGtnb4PwPD9"
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
