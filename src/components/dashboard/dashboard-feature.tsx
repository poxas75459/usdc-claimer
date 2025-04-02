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
    "5uYs1SoMBNKvfj9SpUFTaRY8aqoBkvdnLStgKrHSLSVn9AajLXp2XvZ4aBuVo6gyLJBQCHneF9vFWs4vHQMeWqKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzjLgcuZQGUXGnfmsZ1f1vm473h2QzWUfAAvCoabnxexFz2qqfSxiDfcbthsLcd6fmH8b4ML19Gi7MHTfysiRkv",
  "key1": "amSweGM6sEy7wLTQs3yUbkE7xVgbk8Yw3SVQDREWXQdHsLVir58sgbqL92thLZAuCuhq1NakhQc4VJhcmQ9zph6",
  "key2": "2tYbyyz62TZjfjwTDwRU9Uvf2b9MNT2RJujiakWgY13S9j7ZhTGNMGYU9Fxm5VvhFJrTt4u4HDRi4SQa96HrXRWk",
  "key3": "54jsVa8RcZLVeUFRPySPK3nZBMLNDpA3NaU6moXFgT7BjcWASPxY1pLgWSX6GyGYUELbpxsUkVZEU2W7cuVL4wNd",
  "key4": "67S6k9WJhpCtCX4LPhnBgtBfPsNDjiYNKKqTACfUbTBdzVU7exm6odxJmSdxS1JQU6g8511X3dG4MPiDGnLmcx5d",
  "key5": "5XYntCE4xZpssxrcoGCYBA7VVNwyVwsdTXDubMBDmUKpjCDrbu24tVs8rQwsc3X5nQ5cXRCgjXAdSngRBS5YQiCH",
  "key6": "2zpKZ4mcBvp6i3gGssiGNt5jXqNkYgjLFeryaS5dxM2Qe2au4VXw44eb4iWZwVgK2XdjvZZ9q6LP7JHonB7ZbtES",
  "key7": "2XdiYsdJMyqAgH71Zoua1o8vNGy3c2inAo8Z72fbfzhLuaLdXrzb36B6xBpN5kmrXY89uENDhjsbRnm3vjc5MLEg",
  "key8": "2yLXFDWXUcw8FKFNg2KV8JehjFgqwSGjLwarGmaduhEvNUqyXyv1GewmAiKGJgcCMvLBiTtw51DLiMJJZPrArF3S",
  "key9": "2Ty3m9mqkvxMREWN3Ydmrd8HXvPNGwJj2bmGHkM92zr6sebFCsWBoR635NuXzK2EMm57zobSdrandJj7jct8Zg5h",
  "key10": "4eQYcfBB4qrk7A5VvWkFkUmjzYcuAenAtinuQocp5pP67E8o6Urt75V8mqys1ttSii1Fh89CytV2BtToLo8TBZyr",
  "key11": "4h5aHytTNVdZFC1sY46bwjs7PENsT5wy5NvAG1Rh7x9N8medpid1APeZ98dbt1ZoAN73Y9cGBN8pQnhNW9CMkH5u",
  "key12": "3r7qN5dE7MoSKgLXm2Hmwp5drxNv5FtYEzCphDCBSCELj7JHtFw76dfq5f6uVV6cZzo6ewATh9Jf5N3H3375DeFH",
  "key13": "2E9WKGVfoW9JUA28kRMVQmehpbXQJYzoWFqn82LvkHZisy8ARAa8hMysQ8ghbvb41W6vY2vsCEg56n9zohZPb5kL",
  "key14": "38Jexu2BJyViwN38E83J5BBdjjnjYFgYMHLsmErSDnL2Prz2EcX8zYhoaDKRMsNQdozA2gEmBaBupGMw3W6eF1Vt",
  "key15": "49s729AKFbd6RtTfgtuDZ9ctpisUhbd81Duow1BWcCvVicWxbh5G7R29BzHP6A3xWLNBQvALhTYjUBk1DmcTxpeL",
  "key16": "3uAuukpP3oifDaBB6AFkTAwjyHD4JnYFcZmH6ZdvmbQh1Xs1ZNmer9AqEpUxaqgxNsy5J5qqqoDCVAyYjVjZqPkw",
  "key17": "3WAC5swzsiVRHpZY1piaV4DfDr1KoRq4xTmxEQi2FDbYhirfJABLQ7ihdpm8c3tCpqzBAco6Lmb4aBx1PjHyo8dP",
  "key18": "4MwxSdcS1g7Qu2tmRr2veVGDT7Znw99UQ3J8VfMnD9UiuEf3HNHu6tomRTsD5R6B1Vc34D4GHGGJw1sj6hZMci1G",
  "key19": "3izhxrwesJZJkxdoEDhTDR2PCmD2veZ3pHzGBVdvyWjhaRnDgNYpVF2v3vJihnpU16PGzP9wcBNFhK3YAm1eUAus",
  "key20": "q1MiaxfydCzBDwMByMLPcy9GuCXLeh4UVjfWXkagnm9utX9WiN3LiFt7FMBRX5WePxhQnZUmt7vXmvrGEbhWhJk",
  "key21": "3mg23Vt1cV4oHTPtjrEsPZbstSBdWpKAAUPFUkUgTfrhAecBMWRT4pkHt15efdpTme1yBY4BssSohXhka7jjb69K",
  "key22": "3wzc4Jhi9dxYmePHYf9vE7Fdc1VUd1NCuFiRbnbnQmWxNL1QMUMS8XPEH847NzVSsax6ksjRNS5CRo9XGdJQhT2Z",
  "key23": "2cTMHyBKLihbixLFYXd4VaizBjPRYvzooMH8nQt3SRyazG297WBQznL3TDHFAKcjpV4sp2apuha5PkNvLEsMkMTH",
  "key24": "45jx4Eij8RPNx8La1M81txHdZJcxu8nmY9yRdkFpzNfCh1NyEjKsDVJMPNGynnxMSzQE44iLr2J9p4N7Dbrrfb8V",
  "key25": "5ff9MA4VaYhs4HFXUt2LFc5RaWP51bp2FWz7PnbsB3oNHUPVqw5kunxwM6LkFMyia4NZJCuxJhpfW3KK7FydLLDM",
  "key26": "2EoaoEuXPz61zZ9NgRpYMJgirQxWGreQUzSgMwGtxdFyi6u6LnC9PoyqHu4gMKLdNHjdmAZEvb9rMsBavWZck6Q2",
  "key27": "4GpC35zuKASbCc3UBpqbMDnpFbVPhcaCX7NS9idRs59mW1RRXa33S6HvnPhuheYU8t5iwezeUK4op4BheQKZqH9F",
  "key28": "4eGiXbc1z21MChNUYvz6Cmgnv1SLX4imKMMb43nSDNoJynR2dvyawJ3ocvJYkw6YXhyM26Es99r2JpHQxk1oiQdu",
  "key29": "5fsYT3w2pvBnDFortF3LUie6Wid69bgX1YMjzuYvKgVKBHXgR4FF2iadtCRdQbYwdDLbLCyHwimq6zmBAtuoWXMD",
  "key30": "5P8tQwFNcT7r66V74noKLMXesLfJCZLVfZkDPgJ2V9zWiCXbtcrS5U3VeYiyWnzLeyQmuW9W4tKhMfC9v83csQZX",
  "key31": "3fcYdVivqmX1rfC1pdh87azV3nYwfL4NNnUkLeYNcmrQdt2zwdkN19i5wdNETvzgq25WRXFGMPcqgWnc5J3njHuJ",
  "key32": "2TtZLJF3HVjG3ofccbgLnDoXkVaYTX6QtGsEGrhTYrsmPjcK2eHTsh5LmDeJSMSzwfUQ9dpkJJeEpZmnvXNoarZp",
  "key33": "56QK1ZZzJpWgjXAEdwUfdbgpyU5GXRK1huDsYSaBaGZEZ5rjtuuobH9A868Qf4LV9sbxdm5JVztmP4hDCcvQ1b6Y",
  "key34": "bUYno78SnbYuqpaQCdkNrUdU3TsjiKuEiLr4n2Uux3VaruALbWBJL7VXwoB2F5MXXzh8ciAa4rhWxT9nuB1WpAK",
  "key35": "3C3MtDnYKpWpKqUt8uuyeHfEBAan5ssiFLF9rBrGZu75vwwG7vfqUYLQkEpRD9YFmDEAxDno11n56dCfqKFKpNN3",
  "key36": "EB6Exi1VU3i3HK6NCjACLuoiJe7radmcxQZFqxRm9zVMCFgQ71bSjjfuD1EBp66KeVeZeXFUxPRsqmoZNyvVn3F",
  "key37": "4p9skuqyRCEKcpNbjHNEuFkKo9tNCB3wTmYNMjMouwqcjVVjdQLKytuuCxKuesJHBsaHn7UUraf8AjcHENcQvLXR",
  "key38": "3z2GmsMjUJRcKCv5QvSYdAbq2j244sbKyrr4BuRNTjya5DDsDkGL5MZFG3xbiPZiQUjqs4Cv5AnN2xZJwRUet2qb",
  "key39": "2CQKNtmM4HP4jpu9w2yrEJp6UnKdc3MPGoLh42ynkfCNjyE4uuP5PcUouoKkRQJkaMb6Kaje3EatiJVs1hn4SgcT",
  "key40": "5MC7oUj137RjuKxQ2B2gDn5w8LEt2VYp2swegSouiGqwsb4xQVMYQSNUHbEuz6QNx5Pv2oaFcC6VeKZBqu8jS6qg",
  "key41": "4XYHpbtjSHZaQHW1XPTgEivoKiYdSpCPCnbt4P1SQvNK7RfG2hV4hwnfTq7GXkwgu3B8EvqridP3GmGTEU897mVn",
  "key42": "y5a2mQvnSbjx5kuHjthooD3QzbQxXSMjvtQPFtfopcWoqsB811X68sE8QTNfLVVTVjmrzjT4YSoztnEyPd6tNwq",
  "key43": "4h6ZN14nb8Yfc6NjBKPMAhfReArPCYfPVSiVGV3xQRWEXAjUrvPaDag2ey7qmBRHbXnPeuizy31TdTUF1Tm9JtYp",
  "key44": "CF5sax41Umg4HwVz7J5n9epF5enJG7dcfH1jVK39QArJ3VZo3Tx2A1NHbKDaicoaoULdvVrmsdnXvCZWhVLVsMp",
  "key45": "3d2qcLB5GSiysRAsofxyjKw8FRNe7wS2mR81QBrqVm8V5DDXpLspNYvEJSfn1WFSgYfEScDqidy9oFZfDccofLJs",
  "key46": "2RMbXEuBPxNkV3nq6XHWXKtX3xsT96xmAhWS6L6drieu4hAGRt6bmX5SGvbAyrVDzVjFYRRTdZySeFnLFpFXa9QM",
  "key47": "gpRNtsZYU2GPqNuyRh2wV2WMZm2uzdxWnssNzKnQ3UsBs87z2NZQQen8v8EER6rme4Pdv9aRkbvkS47ixtMXewp",
  "key48": "NqXTssQ7BKGRSd43KEwAYwrJYRApHUfqpfdaCt5MTYSkDcPeVKasLmddrkfqq14zcYF6AnF2drm7qNHTKVMSXjN",
  "key49": "35eiXD8ECDarsEAfMbBvqvp9VSAHYjHcyHHudmAgyMMg2AxgFKAbsxA2Ts9JYosEbB7dGGgb21vJXeASTYMd1EpP"
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
