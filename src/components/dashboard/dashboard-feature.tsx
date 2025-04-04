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
    "5ZZ6B3pUaihQEV6SdZ7h5B6PfuqWtXR8MJ3psjL68ToaWFBUGX37YvioK22eR5TKrnqQJMydRhdGexVMuyc1gs8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "twN1sVgnEXTzMpKojVBaHJcmzzXd5a9hEf1CoftM4Gj87QuYMmaaSdgAjn7LZiSMxbEuPRoUey5V77WNn2aebdU",
  "key1": "22vYSoUaHChQ3NuRurjeRHodoUHgyBPentAgR1bMe3Z9CNnGKgngN79Ph5e4RoJqtXtUCJ8LXDXP7E1GWAeEZrek",
  "key2": "34L8axBdocdAR648F9Df3zjU1x51sLsygucyHG5kbrz3usGC8ab1pfqWBQCySbQxMxpmo3XvdYSeAw7YarbqGrij",
  "key3": "3NjT31GfAdcfbYB2zSvPx5pg9D9EpiCDf3ZD4sPTVryWcGx8eNHjDJfojeVgXKpSPfKerMppW7RD6dvV4MfaryLV",
  "key4": "346j9arqkStQtXrwLGfdbha2TsGkEiP6yDrfwbvEuYTBSrqFiTdzVrjVor7YXTjBT2wNhLnXR4f8gxQMPdp9Q4fw",
  "key5": "2AMymC2Qj766xY4BNbkuNdDCxiuNnutg9j3XmxWjny6saNjdkVyitNmMaGYXpqChrrCEttxs7rjMTikG1wrchG1E",
  "key6": "2jzRwh1iW7d4bjDyXnGSsThe9fWXY72Mij3QVT4Enm95dHMP8vWxpxatXhy1s8fbramyJjhqicRejjWeoakDmFeU",
  "key7": "2WEGcHHAHaS6Pc64p1F1u1QogeDCUiYMAZJBExGzxcNvMzhe9B3rqct3usq1h2wDCyftq78NJ2nmVxjqNNsQUHdY",
  "key8": "4h4gYRGwMT4mfeQk4W4nkaXMc3Na5iQ6mECWaDxmnHnw3w39uTForVeqxk7jJgdoKpAVpC3hEEwjDGXiLry9RzVg",
  "key9": "5Z1dPeem8tQws1ybhYktYHR6kQ7yNHFH8ojuCfWsHBz73eaMet7DVptw1NBLfDC7Qcdi8NoyGF4nuQYtxeCqrmPt",
  "key10": "2gEbuofnEHU92LpXt5kbz9jU1xPTUoxqLe7qE7SLc2boJoeJvpgEDBtFGWcz4wmT2aGtqqinTkqb4etit2UkoBkb",
  "key11": "51JYKN57HckAqm76nBBTrx549ci6mAUJMAyTvmYFDA5JRqkJX6XgpGVPmCzzVr2Wp1mxLh6MADcdanffL9DKQZki",
  "key12": "4muNmnaFKLkYwERCftiCGh8RFuMEpHJcsutxhrVm1Ngx5unNEd81CTwe1RLwrhLdB8yHQUbeTEx3cnv2RcWZjgT8",
  "key13": "61X59cJFnyqwCDtPjHF9evA3tGS3bDmrBDkprUhaZ4kr5KHonfgjGrY2NDRa1MR1p71Y46t4pE14YWrRndfZUXRE",
  "key14": "zhSeyCT2599U86Jr7oKhoY89WYzNechg8TH6kdmozihRGfQQXxr8TcvYXjjAJhGYftXqeRQNjcR7edafVN8VcAS",
  "key15": "5PpUZBz4ACehLozcxzDFz95H2RK1PzYjn8or7USQry4aLoiNoWAVcXN6hqeL4dkD114oHDBkpZa8TPY6tKzbV81H",
  "key16": "5j7FCRpKSfmN8JQi3NvzsogshgNqW9sYFaQ9ir5TrhbED3M37Ft6gz4CsZ8aQx2uuMQrZygYLaPtYYG62zgD8Yto",
  "key17": "3cgiNWmAbbYVG7HprfBUyAvfTqwSLxmc7VdL6FW8c8rMertmau4Hty6GtTbMKpuxj6rfC5mXNzfw9AebiD5LUMXe",
  "key18": "28a7EPND6SDEReJ16zr2TsDwrYsJZk5dMemjXQwHuwDQSHY8ARkfvECgzNY25B1FuRzkWG6kNckLiSYCy14stMNi",
  "key19": "4Fi7njM5vpvJEH1f8LEbYK2MG3A6ARQxnQMp8BbaV3UA1Woq1fF1NgFiZauXjDnqim9wrjBxR9gFXtcx7UN3QSur",
  "key20": "5Jp2eDH6uYHz5LbxD8nYNRoCudaK3bHpNcjASUduBGBP4XWfZY3qCrywT7Vzu84NBoDjehqDgXgsCR8w3V7taxcf",
  "key21": "3ZhP7GBh4k7SMG4X4Dz7R9RWmDr8gyqkV1db6M3tDVD3LcHrVzLLaoASqkPP72PMNTzmX8dskwS5pb6jdRgS4zAi",
  "key22": "4MtSjNeGMYKqcmzeNDm2tDH7N13hsjYbMFSWk4z7sbMbRMQQYJDYFVjYcTDeMJMD8uBEb7WmtMAVtBhz7DeJci6i",
  "key23": "hwhJVUr3kmhEQ8oaMC1D7CJZyxVgD4Y7nmcEUziaACoXRcUzVNJUTQa23Ut24ZJnhcJg29hu2dQMMaEWMFpNNt9",
  "key24": "2iZKB8mmJCjUowgPF4Yu34Q8WeaT2hQ9u4FYyxAntVwbCUtY6Lj4hK92mvtT9xj9wg1xKwhWLPEfS2G2C8p6u84e",
  "key25": "2zsEDjg2woVrPiFS4Xwj41PDxXjxHPaspKomuk5yzQeb77gvPWdyreEMDZNoPj6xkiZcYF17Nz3TxnaxxT6RnRuw",
  "key26": "5rejBSBh9Q5Uczrn9bSepyJcdFuM66zi85tyuTpKLCC3SqszyPR4Ez46afmLemwKDZCR6g8xE2BvcTgUkGcp6fTU",
  "key27": "63464UTtDybP4PtAoBUEWahVLvZma629QuULb5ZECNv9C2x77Mm82CAtRM1SFUZqNQA8ws5uLMu13kcjLtLzCxKA",
  "key28": "2kmUjj38JWBQPZXyH8PZrKGt1ZZBPi7XjznamRAFirFBEpzU9G8hun82bzhBJ4DEcRQhqgurTj43RepfuUZ1Y12g",
  "key29": "5m6uquur7FEhqgUgCNETjxTfCXB7wsoLBzEfB9NTgRcQWNDTQYsgJLsBgDrjzpMzrRgPavBFFvu5oTyiv2Y117pN",
  "key30": "PFpbPpMowSdwuPKLHXFnPhns5mDwGMpH91JitgMQSxT77TASnThUcEJniLhguGn8GzqoKf24UgGHVnnL7Bha9tx",
  "key31": "38LXbhL7TESuVtqr1kKCprXxaAZPXUgpyPzZ3BNzAGZa95YBK8FuabctCipDpQfXW8TNa6Q7Wg6nX1gqktMfKJkv",
  "key32": "5YjGSD1ebbAFsrb6NFLSTFmPzvKMVQHKeUB9SwrKacjygX8Zr1WUqXWs6eE9T2Zua9UqKbCkjvXjjfqwJ7QMbPup",
  "key33": "Ts7rgXMyR4knqcMXjAPCkiLshm4yRkuVjwgw4UKqLR6hm9kwzHunJeFGMVK8Lz7azeDQXmmRWtrGr3nLPacsBjo",
  "key34": "4BK4D626E519c9rzroPFgFJv5MkA5hickLka5afnou9TdFZpkK1yaw3D4cbmLELFPvY75fCTFkPeHMeTYZ5Y6fxD",
  "key35": "3wMGqwEufxNcu68zKDq646gwBKkhhVcUsHHYutYn4JfUdjTwHeDtCM8SmxAjBDgkfbU5dwMepAqpoZQzWUWHZu7C",
  "key36": "3pDgcCSoQGh4e694vGp9gTFtCHc2bYcKMGKYCXUpxcfzUekYgRsMZ7yyMNmaK8qsVhpqMCdrw2oed2zxdFQi27Hy",
  "key37": "3dzUst4w5JNXn7TjSnUWy6ApPDHJZbgz7zNjAhD5MhQktbLmwVUFhaT985DpNc5uENuFaGC2B5Dki1RD3fnxTNs2",
  "key38": "3peDnCwXcC6X8kaYcg4bWWqcMZYyzEBZQF1wtExhDhmZT3fUFV1SUUQA8nSfBxUMToxdnuZGSRwaCoEqZUJn8ngo",
  "key39": "4B1JRWJXGABrudzm5Xy1icuGRD9Co6NRd6qJNbDdhEaJnejp9dubBeTXs2ixeiwvXQ1c7mvTMMVgG3pyWWGAoJiS",
  "key40": "3nWzvYNUUmDtqC84pmCZWLhthVL1VPdYj43W2HyZxX2gCyqWCVKETi5pDChGN8TqbPwZtmCHCViQ3m5k8X8Stpb1",
  "key41": "2goug5cvMYebG8pfVnVhyY5miD2pL2Js6CJFMTmoHBxaMHzQFm58foYXGvQXe6u3mKWr35JLMDR538CFm4UGBWRR",
  "key42": "2WSh2nV3nVpwMRjMZRX3ik8nLeJ1Qhu4SxNjX3GgNjy7WQRYTNfh1sP9p2Z5j7gFX9XgpkC9CyynCi7tonpLd4GD",
  "key43": "3sGQxDpcLrvBQSAEU2z3BKf2NDxXTxzgXYVzeQPkhv6msiK1gSpnt5tuS4MHZRNPTmi2Lv8RkPuz5vaVadjLhjXS",
  "key44": "3kgFr1bs62jHmnV9VWvd6Z7HFFrQLFeGGtP25fphzYgqEQaZw2TuwpDHhwv7XrVzkhUvvUamrfoSjKroHT3eAbnC",
  "key45": "3YfkhNznpHQjYktKQR2ttDQGu6s6g1pQBLP42B87Jg9WycqJsetMbHQzUPY4z4KPTPqPe6wsPZyXQKjyZ4154bzg",
  "key46": "2kTuZQmAsEiPJMChB4u8bUi6bRQsR1zK9rYURNjzUsB4boy7PvXA7SJdMti8jd5zu7gBtJe9XS4FnRL9ECgsUyvH",
  "key47": "ULduHbfN12GkniN6bVej2KSmKFHjFHdiqQtVSHqjafyPppu4n6egWs8XMbxPK2GGYovM9ARrJQDAtmmzbohqVjJ",
  "key48": "iC5rB2ozSbbSNWVK3mSsYufrmUVZs1ayAKwFMjSFG3ss2SxXMqRvFiWHX8n4W6pWDrG4kp7A1s3oMtfPQpPswvX",
  "key49": "tcBNfaWsfQnKN36NrAEiiud3j1xXMXBeRtHCzWjSUwHZeEewWeRhJjzLVzdU9WEAWgmUpaHK9RK9vA4Dnbv3kuK"
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
