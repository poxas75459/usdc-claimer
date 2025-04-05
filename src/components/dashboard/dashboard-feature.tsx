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
    "4WC6uEN3MutwQy6aoJrUb4sxHgjKMDUCJbwYfspaUdBsnr1hdRwCyvdiHiva97WYeC9r7ptHkQMtQ1aEy2DekFJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZNbubQamQAGGCVvEn2PKjVgKJ8ADWMdgpTNaFRddqSz3yn59mHi7eiFvKuaECbA1vSMttdyVFMam9McnuECzsR",
  "key1": "2DGzDDAzpeRb25btbiuTLx5MyaZWGecCG8DC3euzvCf6r8TZrdMsS7u9VubHkzz1aE4oSTPp3obYauSjvGFguoX7",
  "key2": "iaVZBi9J6M6tVTMaU7XM46NUUQ5brviK22rq3RYBEVufv1jWnc57m7wJfSRKb3WA6MeB8EpDU8MVKSMTdkvSfQ5",
  "key3": "5EJRVT1U7qShpghf5qoMpZVYTo3wkVednkCVTuEprEqbKHiSQ6kpLhTWSyxFf7k2VAzoDEuph4HFBy9yQ2u7Gm6z",
  "key4": "2rrJmEPLEKku9Mv4wUL3mWm2Cz4kyhVqYVHuAdin7ZV7M63YU6KzM7uyvk572PUmdfJodLyNr7ZaGgo96ptMCnkm",
  "key5": "5j9aqibaxFsfm1FybRcmTtA89YgxhXPBFaH4fgTkvNNQfTVLrf2kKYSr7nJ9VoXue1osEzDf15kD3vPJh8tf3w9H",
  "key6": "4awBVFQiQtzu4UtBuUtFLx8YgM1PAef1Uiri6KkDy4v2JEtHsya1yk5Xq3cTSsbsfQ3neuUbRRj1Jdw7VPZjrTJn",
  "key7": "1pBiz5SSEj4ufjVjxtkj3B1hUAKj1Bk3M3icADRWp9VoVaCxUdRKKmmCtnCt7ihcrobp2gjA93zG1GVpoy2pAv1",
  "key8": "4UY7DhjGCp1j2GWh5mRs31eLEweXTLVNizP4yKoFH4rWgmuo8kq9M2BnJtF4RZ6eeBCEqbqDS12FSjoM3gbU4sGu",
  "key9": "vdsDg9N81owzoFLhyMABaKh2J5DvQtjM8TnUyoDXwUMfwyrkN2cU3a6q7dQdjpWPojNgNwVUsZYFk6usnWr2jiR",
  "key10": "bKCFYcTmA5fMd29HejejYJPRiWKrHTVbk2scWL5uQZFsyFUTM2cbM8y3dPQRYzBaYgkSYvrAB4JsGLy3UacPBNW",
  "key11": "vYrgwi5hWy57kKA25HytB9rU6Ka4z5UV6wvPoy9xyw3FNwxPcaPgD52TvJLDJNdrbiAmSqKHyGnLiycXG1HpZFh",
  "key12": "4qAHTn9XWqYHBiLTAaJap6yUKEE1F6L9oZguCoB6EcWoXRoGV5pgsjrD3kf7W5syZUbsVRUHHZLb3XE8qETz7Atd",
  "key13": "5UQ8bve4Fs1dxbA985JtaJpemvgu2mCWnAwofQu9RgCrX6Sj68yw6MKjMK5eFn2FxiSxp3Pu6zThCk9x3XoK9kWK",
  "key14": "mE7N8g1g2LUq122ZGg14g7tiDk6GViKNgH8K1p74qrgErjJ8FoAdaoCXitcq2Niy6Ru1nfoLRdeYwDMx9boFFjR",
  "key15": "TujeYMKkgjnXA1cwW2hEkxvGzF6A7Kvaa8qQ5KxhFmEDPr9A8CQM4WdPRB8VxXg7E2zRNHzUv4kupjpC8zRK5by",
  "key16": "3ZG14aSvLXK6uQzGRe99xAymHmvuDoptseLSEaYKVYgHsf9MtnYjoz1vYUqn1tKHRw1ymPiHbiYSjqsLeWoQkHue",
  "key17": "rH3WrYfgYnw4jQBuwY7cmvfksiNLhWfQEhAHJcCbJaRbQue5LWhKGXX8NZzBg3QyjYXo3tNRreVWeT7yjbAeKKB",
  "key18": "yQFvJegEKvMTmtomt2EHu4BjBSXNxrtXRnHNKVye9cHW6K9Wt94TQByYPy3iomBzNh4Ukw2nB3CtRxmveiV9C1B",
  "key19": "668iaDEJKeiRBkYM2Z5gGQa9k1wUTaffu1xSPxiXBEXKLcvXdVYeecJJdCvK7WmyG1JDKPw5NxyTcbCCWpECwPkK",
  "key20": "4eswc2anGAUHYHQJYDMKA73aaA3BBiQKuJMjM2ASaE1dnkPEfq7Ke8PHJunMrEqUHvwWUAvLV6UNzGBJbbH6JnEV",
  "key21": "BjFssh1XzgMaRdL76PxC1NNKdv3iUAdUSHqivDJYiZtPAVTX3n11m4MsYGtjuAbvTY5zyc5axnZcBpn1RNzHNUo",
  "key22": "D2yVSQVhbQtb4QCZHk829MPjSLWBeLTPeVCLatWAgixiQYK1g4TV1SSuapVc23BHBU2xC1fuAM1YjnKuXMBQgYz",
  "key23": "4nidSLXRKthqWQCVEyGqnmJU5AZy8oqGHJNqaaoqabMPgbAYigJ8EHWcT7EnctuNds3qqnaxZtUPHytMiQjYPhrf",
  "key24": "38KogGbLmHSyRs2wuKfzxoAqaQjv3wP9Fts1KQ7VznBA7mGfNckB2hg1T1PKULBgk2gh6JQ39m4BJk9SyeY4pcd9",
  "key25": "3M7TdGN6p93s9KkCNdhhfHxuXbYzwk8TE9AfxEsxZsYcjtFJcxGGiMHTnNuQ97oBJFKMUBwMVVEHBvhkULQrWLfa",
  "key26": "4MZCz9EVdC4S8os9PnrNzpuJvnC5sE6zK1kHSd1Q3hPVBEMuSBhei7i9xGjaHextMuVfLNcGqwLkXeawY9Q54W84",
  "key27": "8NctowgBjpnqnvYcLerVTBYb2VZrW6M1WezHdhrpYQHEmBNRv74GbKjgpopSkEcSfmC9bDd3xM1qSPzZXLv4dU6",
  "key28": "mQ3gzrmEbsWuZhgLcSjpiJy8yqzkR7XAVucBufrUkMUT8E8mE2dRZy2VsHHycbyEaiEi4aLeyf6fYwHoJ8HrDnq",
  "key29": "5jHjP47VRAuB76u4vxrcwKsEZ63EYWp4WN3pfKkhknQmU5UpRQCqjcLUHn1J4GgNM8ePywGoFGM3EEtuTHbkMXjx",
  "key30": "3xsWJX6bQtQQE1GSK2uYRkv4atMB9sdJEP8kpRJ4euDfEF8doKkRaWTdvaS6e67JWoiRdZZJztbNKYeuMKJNNADN",
  "key31": "4yqkf83oi9taH7AsbCxpFqJNHUwu4KBnXPoTme9nruLWZ1uP5qjSSdJxrCscdEVWupX8eaxy9AhZLUXjcNEFPEca",
  "key32": "3BHH9XR3a5zGgHFK3q8y3BniFWSxN21EJCA5aiGyuqJKhiX7acp7yp4tnp53dgA9rNNwihcmkz1F6KJJR6Z4wxE5",
  "key33": "jqgqfPiVrcRLpXGxZFXGxeRpdcoJ9Li9RWKAgZz9rSCE8ueoCXvWyrD9VpPu8cZX7XgkHoa3aiSvtRWgraCZcEE",
  "key34": "2iwLtNj1Z6u6An5Prv94BzGDYoAwpkoyLME2rzkrHutWicfbHppWGp2FoKAKPc781tMWi7qbdt6zDNPLnFHguWAi",
  "key35": "5k6KYgp5VDuEZpvLCcxYX7k7red2PDo3huLQMPrCphkyYVid84EuEof8caQxFpvPUsRTre5fHHQA2Yw34pbbnN5C",
  "key36": "UWCWUrwt7Fe4yYQHifSUycXVpptpqoJ9sHvCrQ9gWtAJwNz5wX1JpjrBRfy8CDCbpa1xvMF5uhcWv5d9N2YVwM1",
  "key37": "4YLP7KbSaNbxcLB1AGrPAXKA1X1W3jF3qRTk9ss3itwjXXubirnBh8mw3ZT385Z77buiCSk5Cvcm9cLx8szKL1HX",
  "key38": "HQJxZwHu5BZZq2rVWszvomUSfAwfUPLnmQpspqu8HNCPe5pGrBuLRrNCYv96AwmdnTkEwWWQ9bpBygdLp2HgPTr",
  "key39": "2jJW5Jwwdto27nQKQm3iPxVRmdB6TNBtUFDWJU7AGc692YSqwHvD2W2Wj2DHmXTxdbWmRZYbs42NBPdP2xhV4dJs",
  "key40": "2tme6TNJpW1ewaz1Ae3o7im3qQtFJQs7LSxfu1fcty5ncY35K5yMJc61mM1czLNxuFLFKbHtGnXri9JmvKuBES9m",
  "key41": "49wa7a7BSGDooPyrsorfAUJqodaEVmgk6JL7LnwoGCBapEAUd9ufQihA6FYDpUJywiroMvLeiNQsEW8wpv9qkCXG",
  "key42": "4grravpWkGMfScKqW49VmZtGoG7x4qPwGqiBmxxtcR42R1HwSBbHvfg83LwXfPBex4kmjm7qCK8QRfmofBHB4kR5",
  "key43": "4bcpGwm5SfsnqFNjKavMZDdfi7v965NHdqobNznFP6BzA11pPAvxrJge38MV4bSyjjvgEiABSvRqdkNLjyT1DG2i",
  "key44": "2cLPbiLfXkdrVrYDNZ26TgRmGC1yKPeCJTDSe2vsMg54M8E7K35dWxipBVnxfbuHVfrwUj9Vfb1xkDqhpRvx2F4j",
  "key45": "4WQr82pmh4CK2LKJ8CV4MdFXfCkj49wsvLgvhZC1x3qQcX2EmDaCG8WTnXHVXrHp7f1gsQeovhAAZRp3G2yBdwvV",
  "key46": "3Sqwmnt2HXqeyGauNGybA6yXyWjwyXQR8aa9kD2mhS1H4jmZCi7fZtv6KmUw1HghkQXDTWWETRXMjs9F1ipSap5P",
  "key47": "2qtLumwzZpzZBvbdMDpP96hSRisGWLHc6QGkXLgnkor4udGdcWjFXsP98r2MkVh4CNdRdtLTMcBYJUWYGKLQgzjv"
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
