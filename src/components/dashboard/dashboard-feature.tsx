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
    "2NZKXd8vi3ofe6g5oCV2R1HksNCkSELFESJNTURPR5p65uq9nGv1hxuT7tquf5HZwTCBk2kxxSNyd4TcBGzmmqj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFVcXkUQYSNHZa6P4ka1gnCVeS998eBDo8Hkbw1Whq2agR8uqFycP4M5DcN5xg8JPLBpPCS2hELXoJ5AsxVmXBY",
  "key1": "2sRvzo7JX7cghV4FkywXizB52kVh1WprpftHpSy6r2JBE1qks4oFBkm6bbvhbZK6TaVvnCBq3e6fe3nPYhqyhmMf",
  "key2": "427LC111LhWgP7N23jnGoTEuqw14521spDfzmYo2Wbo5MnjkRkssBgpix4f1eereg4N3arEVssrxtb8i64p58yZS",
  "key3": "5GrLrZXSCVpurXimAADsp8V3JNEXbhVHYr4KWYWSVho9x3EMYMc1ZHKjU2XV3gqTiKcFaeuFWUwCy3MVx8MD7UBB",
  "key4": "vYD1rWJ7pG2MxHH4gnEhPEa4YV7EkiK33UeC51H3wPWg2HxL3aKkcoWA1aNbbQi6AKxeCdqb9BbFc8Zuj7WYPza",
  "key5": "42HegDUTdtyPrWYa23HAQBvBaBjqY1zsvgZk3GvAus7PiaGNwdNgWDGxBHL7UMpsisoJuXGjsQ8W4ofV2b1SjCee",
  "key6": "4FZu4ViArMdHUJ3VMkiLg97iVYkbEAkypuEJH1CYZjxb8hHi2UpqDkPxRXipMWtdzgWo9B9sGTLazwuLkj26a2vC",
  "key7": "3CxpVfEzpbq9NCcbrMnVbpHjqjSbCEZoyXH6k7rfH6dGL2c59fJmeoNYkCvqKHMTwHC5NV1Jf1HQ3FSkG1tkyoA2",
  "key8": "ZW5aV5nrgga6VMAxKj8uZoPJFcjCeGtGTkLVKbBmE6LAtzgFUqZTGmE6kZBTm1UowjgR29RzbKtgKxKJSZ8zJKq",
  "key9": "55Es7Hqjfb7tWTu8SzaoBpPEwhDu6x32GqYum3MhWXVR8a9vKXaAKWzGgRx1xo9BjmgkJq9sQVcd9Zpo83qY1z2Y",
  "key10": "2NuyeQrVkq4n2gykaVTJ7VRha9NNhcWrXi3EBHFDyGyTbxt1H46cH3LkrJtXgAyNVQrHaAd2kv5rq39dtwVLwrBS",
  "key11": "3r47hJfKaz4ugSv21T3CDRdbavb21231ejofEXHwCQZ2guUFe1zvSC7p3pHHRLMQAWoh8bEm3wG6ZaHE5JHFu2o9",
  "key12": "5orTJw42cPsSME8HvWwLD9Knj1cE71mZbJFkq2KaWWtp2rSihdVV4ZBgjenMSpN98cJZBsiqwW5xxFTtiQR26fUr",
  "key13": "2dkVBBYVVuVynKFdtAiHo6CriGi9FnL1k8b5hy8ciZMDYzuzvfhKt5Yh5rvDcwxM6Z4PcVLdAumcLRBhjTkZogxj",
  "key14": "2MhGQnLw7zJcPPFtNM4K9e6TXVCsNn5NKuN3hfYYtf9bzWKnQG5RZchujPdp4L1gzyvwoFPyYC2Gne7c3qJSVQgR",
  "key15": "2yd7QbpZq4urv66eBw2r8cB2ghUJshWZvY97H8K7bEb13T7cq6mJAnwD1QDwcQYKdRZnJnj1mQPFyWdPGwGSiGzr",
  "key16": "4AoH2HWinWYSBDvVWUvBCjqcLsHEE8tifkg9cNBwQLYekj8VH78ebKGxCGJVksUWscSHoV2X1h9DQiHvRT42J3HL",
  "key17": "7ty4F3NX5cRvbYQidGabczbR2b9Ym743ARziKzB3NapNGZiFHDumPDnqgaQAxe2dq9m9QHsLNm8EHwmbhxuAuxc",
  "key18": "5gSiH4MriZS8cNtsUPmfoxx6UAEGb9bGiSKqLwwrAgS3dixBzZJJRpW1eh7C5LkQ9wA8XAzKokdTUXdsSofMXqfb",
  "key19": "osPPuXfrfaX24So9RFAADdfTtye6W6RgzCggLrSLbevN1uuVDNxq5xkS1iRSUf8W5A6HjVqEMfmUDVpyUAVv5nJ",
  "key20": "5ELhmX4CjfN1x5XdSNEDcNBKM6LYDVEiZwCrP6pxqWdRQgC6Ads8mYfEwuEURrRvBKJtJSLGP6J5gJWDudjKaETp",
  "key21": "2wSrsgrCPiU5MKE4CxqdyTg5VPQCTs3uRUrMgv7zCsUsxL8NCC25Pq3qd4oZCQtB2GwhnD3PaCjvWwtm2ukLTc82",
  "key22": "48oLC6BKFBE5QL1tZwYDbfFYWdoYtVGxbA8K8kXdxo87jMxskUSv2Mjb2AGX5RDeRs8FiuhYbHfdqN6oe1jjwDeC",
  "key23": "oph91pZ65LPnVtiwMxLGzTZau1BkZCvoUKCkj6zUimSd8J2qtafL5k6CgW5jdWz2Zcm4R7gRHJvXLWTp1vjCns9",
  "key24": "31zTtBTF4Hjo347V1LwCo9UsvUmskb3XknkfiYcESBfTaC3yWBXLvXoDQmLZkDqHXFgBRuKzUVEGEbmkJFqD5xnK",
  "key25": "pdq588E8VaseCQLk93DFMzLdB9GmwtwvzwSwVdJ5DTmGsGu16w1oHkdrnprvg9nsJZumPRZdTuYfUgJasKf5FfF",
  "key26": "2hQ9B9C2gyznKDXddFf9WtBK4y3Wd1J1Aud6wM9iQxZGU29ki3M25wWkuYX1tGrYkNB1ZUk9CwsSyAaxTp9RH9vg",
  "key27": "2tDDGk5Um97dh2KYbS2GC7H5waNXf4QXWuKYbRAYPAo7Qo366GQHryfsbvkkrHYfQT25jHLV8W5sKGii1tty2BX2",
  "key28": "5pXGNvTub6MZt8jMP8CL5QTnD2hC7HVr2mjzLo6uzgHdedBsm2wwZ6LAe17gs5jsP8Jxg6Rf6RcYzAo1ZCL1mZb8",
  "key29": "44MLLAht3NP7evGfPuvLqx5jQNQtKA5n9dDFbxwuFbjYcubudYB1LQ8s1zQNAJ4YMYgnrb5574zEFt64LzYzmPMo",
  "key30": "5oUNSXRcHAUAjK8nGDmtaSJDNKFxxB74Yn8FdhXw3BF4P2ozntTQnNC44uen4mYwrdGMcYqwSPCAQkEG832T2Uxg",
  "key31": "poT57ZzTWuSXYrVGbWW4PsuStPB6TdpnoyQJdyZWtuS99foYUmDBtzx34ecjHjvtjbyXUMuZ9jRa6wUsWGwtvdY",
  "key32": "38ALo3yeBP3eJ8Ab44cBGohJZWfy7FVjbNfkL3Xoby5uuUecSyZnRBCPEiWct2efkfbSYkeb3n2CVVvoissBmUMV",
  "key33": "39TZBdSfrZnCtkrp1i7HaCugWw26JPK2NXesemsdyGXFqNL4zz6jfm5CsVB8M7Ddahx3Ueg6rrnPi9qVV2TAR3bL",
  "key34": "65JJMWTLRGvV54V1646QZircUhESS3NZKDUtKZ8NKJFbsjyepQaESGqgiRHh1jJxnw3XW9iaWvTwHS8GuAAAUFEX",
  "key35": "5nX6HA5xhoy1HDr7khRxiJdfDX9EmF9mP4tEkfLGygZNJsUC9mZ2Qp3hU9ADKEdUdMXePCnng8bzB6s8N24SLtgU",
  "key36": "3w6Dc3fi6e6N6ZAuangJVhNtBeAkmsqeEbfwGdiSdm2vomThcopBiZfZeYfPnenq1RQTrYvrnxMF4FmanZHFe3s5",
  "key37": "2FocPUkecqoVT3kq7zp98jDvU7CTjksHrJdNHwU5mZnMiYT5xyzjgQ5bhYHa96TyiCDCh5NXxDxYoibCLHh41tYr",
  "key38": "3BrhCrLm4ojLqGGFf98V4MFSCS6x8mJhSXaUUFAiRVebQuDRy9XpqovrSKNZTT4oytVX3Er6L2tBXnki6HVBZbwJ",
  "key39": "4TTNLacNg5QYAAy1oit7KAqV8VfyCvoWuky8214KJKwbrjF4DXEyKZSL1a5gJNbpQziT37vuGzJgfH3Mx1PG6A5H",
  "key40": "3sJaBhQx1pwt17DkCKiJiuA3fxsfH3M473BTXPPd1XJAea6pS4ri8SsPhKwLN3qnyqzVrGphWn7iGe8p9Xw9meH4",
  "key41": "3tdsnL7jV9FCTvnLK2QfAk6koE7Wu5cXqLNY5aifG6JChhTmM4MKLSQxgoDXUqLViYZQNkbVR9B6UVqdVpsT1a5m",
  "key42": "UFrTcEJoLhjL8FHVJBZEm3Tcn3rwLS93Fej1mjKWt3C9DguqCxtyRe5HDSy9MKUksUfP1e2u7HZf97REvEL5oXS",
  "key43": "542BRrHV69Fm7CsS1wFmekwnQ9KfF2mJDdGRwdjKrAGezzHrZQKkJ2GVJbDUPfBZJTGoyTtBLuGG9gNgAFWybqzC",
  "key44": "4R4zMcZXRuvZPzeEnVpawMwuU47cLFZeenDp754Pv69ViKVQYD63MweinLGr2W5PiQzFK5fMVxG4W48MjDdvt1iu",
  "key45": "27kMtHCm3tKjbZp55kM5FY3EzMmWam6gHsE3nVvqEYcsE8qMiaETXAtVjmMb82ySmTbfkYEJF1mbvgs8VZPVRaDD",
  "key46": "NmQsugk24tEDqgFnz6jEAQgVw3BxGZbFKbsuz3V8jw2DWgjEHxoekg3dwcyU3NGQNBL2ppyh3fgVJZVijGRgdp5"
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
