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
    "2obCZjWeDp6YsxFaUSGoSPvy7C3MzcqbCyc9moAEJpxiKtbX84nr3pphgfDk5QYGaikcPW794pob6hbpd3wbXadt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHPrProQkkBFBcKRVmMSqQKzCB3UgoV4jWdjeK4YwdMn2P3UKDCKhpRMdq2WrQHyvZR5Jx242dGbhuwKy3SJpx4",
  "key1": "21y7aaYyirAkgrYsyLVuJr1QMfLjjyYPLnU1enXvabZC5AKagMNPmk4h6e19aEtVVKLhnraKsxgQZs1uf2vPjiBG",
  "key2": "5v8Vm2cfFjrNNc85SBYE28jKMXtRgPw2VhwxLeTxvTZdGpvmt51LfiXYokRMTaxcw213BtbHrKSRtnU5vjLkVMVv",
  "key3": "2kbV4YWPuDLHzNpCoFUoGLnyNmTmxsjBbBrfCZEUzKCnEjzat7fMF3o6qq1LhVdV8R4susnKPj7Z63oqWEbsDB4j",
  "key4": "2J8737cGpcWq4koevBhyH55BCmK1w3ymunpDhfUtiQH1p3er9bCRdZhgDRde3A68u1cpVodtNsUbZMgRgwyiW8eB",
  "key5": "4MTmDtK6taovfH25r4thspES6JNAwGnuvrSLiUmwWic1SM8jvUEvFu7SqoMy5LGpQsnK7S8tYTi5fP4EZCyEEwCW",
  "key6": "2ssVb8Ui2qP6q8qBXyU99ANem4LjQp94zGdDGx61ZejupxvE7VLnrVPGNEsw3up4N9vKLmMpd2ZHicaPZtS9goyS",
  "key7": "4N9f8d4zMo7rgebHoVfTH1gTtGXPpZyepv1efi4NtrKLTxhUjKHH3Q14xjrasc4UmRFb4og1YwRh87g7tk1eAa7R",
  "key8": "vm59jjmjosm3eS5tcHZ63bJYUCkRZk5VKS5VVfmonxKox8wPwjFtbsCmRqV5T1KwaFkrveT2VkyrgFVyq9bzxTd",
  "key9": "mQ46KrZhd5Qrykz2wmrU8MtFAggQZLyTuXnABAcj7sJy4cx4CnsidWYZmx8dRrEbZhm2B1zNmvNUdGpVRF2aquN",
  "key10": "4XfYPSUk8txsLd5ruTvfRLHtjtZvfNTUXWNMqr4bgEtwx9wNCpDV1bakTvUqTEP9oaqpAMqUqxxr4Yng8UutCaZf",
  "key11": "J4dQpFjfQkL4kLzBmCc9iGqY8RGRpRbDYaS5Xsz8MPAKwF1WgN6okRBS2YMX8EhDzPtnB2n9tuwx3vAxxN2dyQJ",
  "key12": "3B9uCB9NV57PUP8QkromULycy3H5v9dngDciRV8iVkDjKzQwaN4Lau4mHzcSqVGginUmgq9ULQkTTaAqhxknZ8eN",
  "key13": "5eSMbSnVQXMsNAufhTJiHr5C2LnWSkqyw8YaX7KSXDc4umTzHdSVij1Y4CKyk9bagHy5uuKhBg54R5fZJiY5wEp7",
  "key14": "2x6JM6iWUzrpX4pT9gXio7joSdHvCHZPxqGqzZMJRkEXoBV88HYrCNwBJCiyQskuz7HWFFANJRqUeQcyAXdJuqYL",
  "key15": "5J5PQsC5mhK3VQMNKNrkZcUGr45oyjWEy7eWPjmiiga5Xer2bigmL6Rafoc4QDau2VqkvKdxTowJvqqf7xBAS1qY",
  "key16": "31vVBnynBGA3gkoFMq5KPmMbsWnLEWp4gEMuAoCrrkN2JLXusWZyGYXSF2QuMC5Hs6hJt3REZzuPaykpaMp8cD4F",
  "key17": "wdZeBR6DMiB9Dh2XJj6gjjb3i35sXu27NhvPoDveQd4xcynVEkpzX3qHJ9jGBUqNhDrevtbxrYvRPDHpYn413rs",
  "key18": "342tNHtiRk88Yp4yyqUbpdjpR51PtzHXWYQd2kXnM14Xo3VfLGVGaS2g13uWirkovCExC4Sw3XpS8u8FETrZqN1G",
  "key19": "vHRaPoA6n48NxVm1autvtqp94J4Z5z5z79npBJnZQQGvPcH7CChhitz7HhHPwqz7Ds1LesroKNfG26TPpjtTViJ",
  "key20": "4eRAjRsqnsvvwjpgeMW4rz9hAM36ttRV7yXngXMeJ1Uk22xJgFud9mKwFAjK1jfDVxdu55M2XeY3hZigAqVe4spx",
  "key21": "5fW9g2boN7ZqasxubSwTafVr54YK22PbxGLWRWES2Vrmbe5aRnSAKi3f8cHb6SG5PVpcMVpWu2Juz7b6kxYc6DjA",
  "key22": "276cD5cNCZwcTReFM41i6xfBJWkhX1gRXL85wsJTojgfNfz5yNeFHqu1wPkpKyoiKwRwozL8YLEuxyPVXPg85roE",
  "key23": "4ihPeUrWozXwovKKiBvBt9SWhDGjeUAZedUQPNDEAy2mZ3yWidtHPoJQnUogKdL9crr4zyGNQAWageHyS5xXtCYx",
  "key24": "5jq3PEZTHYvze8zuRvq9vgKzfpbHgoqtsy6ANLU9XoKMHJ7rLrSadDVSruJCse8FmkMqwzAzVajYTdvYjnbiVwk1",
  "key25": "3aa43LnMsrLpJjF8u3X8Ef6qKgUoFy3uhQ3YK9iW8KxfSsL7oG8McuBZKxaS1E5TNxH5r5hsEgq56pseWTqUuUj",
  "key26": "JpuLbqc2XuCVaZkGpncgjJJvenvrpyZddgmq1yJAkU3gDHnWZFgdnABmkCK4Kp1dszUxpgoRx5JN7cB4Gr9dAjg",
  "key27": "2EDGHSnntfsKxyBbfQ4Z1GU9vgni5M7bmGBExRURks5CqRfwFDZUiXzLBa8GDW4e6174umWd7zG9dq13qEDM53r2",
  "key28": "62CSqUKbN4rKq2sk3EfQRUuD1XtCJdQXPiD6tU2FgAZBgWbNKecA9WLhgrqag6nJhNcp3VjEx1e2fxPhzBgZq4qs",
  "key29": "4qhLEtKtsU1X7adF2NaDmSLZG41iWeE19LfKprhkMT4YRweQasNECGx6tSKypnSc2Ct4WBC2thLnkWG2vkc41cXN",
  "key30": "rgiaKYHWihiRtHz4ZKu8ymp4qavdz39zuZxMzbYnVCxq6a7xZbbnVmegii8DkXyu4jeTVN9cEo48tbxXaGnSC12",
  "key31": "54SRqcYhjEzKAv6u5YHqU8bhnevjYsq8CP8ZcMH8uSQ27EzpSJmk5R3JwVEPkS8axfZUNb6ckiw9AHikzLtL5ZA2",
  "key32": "4S4a72p2vYrsxARh1LBQwhFeS4H2ZbeaWVCuZSVp1YMfA229J7b6i58hpEdT7M45syCdLXssRDhjfbsaDZQqRQGA",
  "key33": "5CnnAYKmVAenkUqTD7cttyucAoVgCmu6n78FPj4X3LJyjvHUoiBJLoxR9qLeSFGisUXzrbxGa17qSmT1woGumLyG",
  "key34": "44Y7k8JT9jxLUt45B2szNXUSg2Aw4euc27YXkxjqgt5JdVXVvMUySZG2C2eLUpareZQig53A5coikySAqC2Aztfr",
  "key35": "2sb49fb1DGzkyTCd4auj74Dn5GfeVDgMfSjQaG5wAsTuTsZttLrjFd3hLUCmPPCG6GDwhpaM8TKVVL7AVQEvUuuv",
  "key36": "4wkhL23T22SvaRsi2VMtaCM8VqiCQLvwwJopKqUhhVsuuqNgkFLAvNYrYUCu6SF4fnLR3yCyjB2GTjGyPa98yRCp",
  "key37": "5kt1u3pzowJZUuWXdSfFhjefyQAouA5iRWPubswfJ19Lnrk9PGh1Egv2GhzfHLvjZEsSeNdEgPJvGrcuc1cAsYVb",
  "key38": "5i34PnWwfHKgj7GeaWWcJ6GyEMibpv32MMcFCTtTBcspU3bKVAdf8PvB8WV75byATYCEw2oT5fVTJMcwQ7tTmdKG",
  "key39": "5FFnWHbMRHx6sKpCfFkL7LtKRG96yWuhh3HwKKVe1gdvFadXnQCrwwWQGLMBPM2cR2QtwzQVoqe4vpXKiw2tJQSH",
  "key40": "3DtbJTwhwGJniWeRfA56G9kqoWdpajnqNY9cCtTawuvxFXbHbrEKd189uUSGaXmLpMFzys9FdrUkTCTFBQ1EzrEo",
  "key41": "5JgpHv9mwZCBURUtUsW5hrCTiUJwYHsnjrxuH2T8NFDcqqihiZ93qgCucmg1Xg8fDSqPM6p4k9yCo4XdnPv2MrJb",
  "key42": "4XL6usojUy8wnxZBNJotYQRa9FykSou7oNXg7Uf7zxKNB9ANrPDKrxh3qCF2GkBDh1eKtiRJPN37NmKhDFpCaE5W",
  "key43": "676vfHgUZR3PejqndCUDT8UjRGFcBvuqty3PNpLA1nvBa182xHp4WJHismdQUJEyWCRx1TZGku939MGZmPGnM2cZ",
  "key44": "4kjHVRFuvKR9BxNr7hmiWPM7qRVSMywiPCUYNoqTba5pouxDgLaarAAD4yvbF8U55h62Jm1uvRb23cdAmpDFfr2V",
  "key45": "MhUR2uku6WfW3Q9gDjecP4eQQ7vZ6bqevCtQTHyytEuMAVihWtQf6pjKvYeGgXr3S1bCAqR9AsY1Y7SLUMVNyLi",
  "key46": "3tBrLLzqnhTixWF9p3TXYkTWJeebrnXbvNmNZGfKv46o2nzVsM2Wbi9Pt8CUL2QRz2dwzfy8SYWNK6m7CyKr4c4h"
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
