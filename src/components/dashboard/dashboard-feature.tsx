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
    "2uzFrYFrSYtERBeQud5gR7d9mBsTNTvQyELc9TtVFTPpvNexD3588UuCafJdhGnw3np93zL9AnMuMp2RWV8FQ15W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfimDvbxCZBxTmy9pygN166uWm8pybLLDu19ZVJL87dTjBVwcA9pU8Fx7CybiDbP3sHyKLKm3W7nvSgxgFER7Tj",
  "key1": "2DgSdgzYfqdPfkB5ZFiDpAbrMX5cgXVoe4Ldo9TrHCbeg6y1S2qYuyjMLVDbQRHd1b33NsNznT4GkKyi8pksrxhE",
  "key2": "3WAH8n8w8zTTXskCtR8X24TTuwiMh292iYn4MBkfGBVrcKu15jJqWMDFbMrsvchJCTD357t2wAf83jiuzDkZ5S5m",
  "key3": "2bBi9VDGWWp3SNpLQwv9VRAe4UTRSL4LNSYws5E73XeB99zjzaY5mR47oVi6wbs3zhp78AWYCJvn7BsBxdDC44Ax",
  "key4": "3PpB3HcbeCRk4JJnLK6YAymesHL1rNfCG3hBiFLu2JRPfkaC1h6FmMRHuHZFWKKay2suEYCQnMgzyJRDZQxTX3MK",
  "key5": "2UrC78bBeS3YfTiRQBBFQrKvReEQ326Cf2ypPpFmhe1ypTbTdW9H8W9jLkw9snzK8vrq3u8J1mESeCh8cKug4WTj",
  "key6": "48e3w6376FfPGpDD9LH37CNjquMzTG1njEHh2wdSDPvYXYhFrEcdnKepUcGYG7K92PxLTd12ZmFnMvCDpjuDrx2M",
  "key7": "5Cik8EgQ1YxQxGUYQZCpgj9zbpP2vTaunb5RJKg8m7nxW8nGv8GpqQdvNgmn6qK4tMkAUD39upwt4N35Nv25W1ZH",
  "key8": "3uKeksTxWmopzKoiMqdTjdfhzEvRVmta4Tj6y4T1YTjixNproqt4x4A1sx4RREMqwTmdZwtzmE13q8NhHsbJKVEV",
  "key9": "3Sf5ADfpRyX31JvLQuyUb6gUvqKtDpodSzDFjVFbnKKod3q4chQRZqBzLo3K8XupxVKDVNxfg3Vwm4nTYzKEVuux",
  "key10": "61KXNVX8nxNSVT5sPzD4p6zQxh64EjJS7EhN6YFruU64CnEoV6yC29nGDPW1H3M5FCzi28JrybvXGi4EL6aBqV4w",
  "key11": "5eRD5qAjesjWEVoJEwFHLmJXAT3uuMbJptrUvEV3UC7pWoBVUh1xWxXFidD6Mezz1sbWUK6Cz2PRSM9ptUEXko11",
  "key12": "5TaNVrRyWSaogARdfocoLoA2QkGMSwFqoThtQt41mVamZ4fS2vk7pw5x9LG8pHP3DvtK2T2bT4Qp6wk3DHt1T1Fa",
  "key13": "5aj5b4NjEvZnj2wQGm9PkZNgMMbSznAV3oDQDbaW6kiAbn5Rqaf2ixHAZpZiFgwoBinZxERyQ1PTmaw8UcHouEXZ",
  "key14": "5XHhnFFGB8N2sYpiG8Zt3tRC1H7pbQrzwhBbU1BQxf2X55CviEy1nyNM1WscxHzYGmfnubezGTU6w1vwSuCetHkW",
  "key15": "uLp1oZtECXgZWxPdqjiEwwiCfib5L6GA2aLq8gvjsnmvx6XQD2UHk3MALUfgWCE85wnStZZUgTkGvg2jjbfQzhC",
  "key16": "3dUzsUk6eAtnJhFB6n735R9FaK2u7XF4m2zdiK1zkXRHrU1kHk2X7dn7vSeYerbjWnYUryjT2Peh2LzmbwRGRVXw",
  "key17": "2oRAJMntMnjSDMZVTDuLBMYHc8Hrdh5mhqBa9buRTfZ74tiRb6BsXic6xt7RxJAupcw11uS4whTYgzHnPQkvEdD3",
  "key18": "2uU3RBxoRs5nuis6d2UETTUuLWvUKGpKFe4VLEZCcyJHwmUQte9qz67PHQeGEh6Yf3fCFH4XL15WuasEBfJW6Jk1",
  "key19": "7CaeuYEyhrn1DxHrmYicgp8fdevXtD4Nxjnd4QRuMUpHXzXhQ4whvjahmCJeBrxkcuBVZXvQCejMhqTzamLqNUB",
  "key20": "411YwnEuwTrFjueYWNPiGs3NhTMnPbrZB18YEgrx3r2GjjjsH1WXnkTZDP7NCZBE9QLUw52jYd3z84VxhQoB4bjs",
  "key21": "4xBnq1Lnr5ES1vHRx1GwvFG8scYDCk7QrbpPQDFECFnx55nCedMsmprmyFu8dHQg5J6AWtm6ZmZHYSnXKfqFX8kh",
  "key22": "KvyVs1adrEFE2DJrwmcu522mATXYXcHZQ8LeQHNcZ55ENpHAfnfKB8yyuPya4fW3UVTTcR7WFgBjhA1QUjN5SPj",
  "key23": "5boUBheVsQuQhkkj3KhDuRrFhdoCsZHnBJ4w993d4xfW2KtJFrivPXaJSGP55f8zvEm8VrJRvtCBwCXLdfRoeUHr",
  "key24": "5sBMTYKXg19oypipoNb8EmrhwKsEBFv4kedsv9Bp1LfYA2c31WV1PAYacL8xeQaYfV15FLg2HKhxZLQ1kWwLboaG",
  "key25": "868tHt9S5T7P9HVR1wX8ikmXh5DEHMSXSUhtiZ44YeDDsFGDRSzfvcE7CJD3McdTGT6LAFZXDggUHB9GVek4yaa",
  "key26": "3g45TquAYJCaGNFqgJS47DW1YHTCjf9uf3jmW3dmCY1f7Ug87jETTDrNmPsXXSKhCnTV7rnGHKt6fFaKrP7jMH2d",
  "key27": "54sdgGYHXRGH6p1Hj5q7WYbqWnKi53Lz5LBukGKiSE8t18Xm5baPMn2WG8MTDfu1T56tMdE6DEuUE955Ny3qQDjb",
  "key28": "34S58U7WbGdpbCJFGnP8n4PKxoguqKQYnBbxrHbijA1Mxc7Nua4HQXyvWiGF6KHJ62kKRN5dfbMTE6Vkzd7czRXc",
  "key29": "2C6QACLLMCAse3k9uNy5g2W2Yc6t8ZJmbd5Q4PjqCjtiVaQX5zsEr4HNtUyWFunWad8eGFMfsaZHgY3mDA2V2maw",
  "key30": "4agDVZSZ6dr5dTYWBv2LmCyeDPNBwUxVCWgZDQfZmGBqVUPckb7QAXa9f5VaF9DwZD5MoL2kLv4XwkgxFPPyvQ5H",
  "key31": "3uqWGSgHnUE5r3XQBM3Yw4MfJScK4i77mPBsfcqsGzjXxvaEoYGCB2o4e3ExU7ZNbXv7Hqpp74P73qAUkiSsndsm",
  "key32": "3YZmoQrqpfvsJUtDBz61YcLYaE24G2UHa61abyZXevgXWPUrETHC1xchf7XzDmiDJZJiwGTXqjs4byn3MbDw9Fs6",
  "key33": "MFuNeRqkxm4E8cukJoxxMPuPFKASYYcdoY296caB6QjCniuf8bYfDQ4uF7yApFrDfBaMjXob13wGf3odEhXpNrf",
  "key34": "xVU1f75jeFYiELXgsJBbi33f1676XJ4YM6ybD1bnK1imDpEnqBUkzoigRSVspFC6DAmURT168cKc4NUGPJb8LiZ",
  "key35": "AWj6hLzgsVwjSdfSsdZ7JQS7XLAJ4Pzi5qcNb88PNcKtTDUKUDMQzXGFtNCPfzsbBrUWUzh4cq79fd5kPX85yki",
  "key36": "3QRJM2wa1gmJRwJWogngBwtNH15YzKdnyriCu58nboPzts3HgBvJ86u7HfapHDxgDkNBNarawq5Cb6HbGF34Yj2c",
  "key37": "2LANVKZJ6Qz3ifadMmw5sWQdVSK6KjyttoyV58xsooAyk1bqYj5i79Fme8MGPGGhq8Xu9iUzueJyQC5vcmFy2ZrG"
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
