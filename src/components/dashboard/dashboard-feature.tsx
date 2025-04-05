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
    "5HwqB8bemzvHduJuJTGfditCKvcedo1NkeBWSqwXiGxwZKmYXsMQ9vE2uKztYUJxHcpzmuKUgmUDih8aXKr11vY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XB7rFHBZnqr2d8H1rcHBoYiQTp29P84Xd8Mr16iJw2hUYTa8ep4CmFyZ8mquCgBwzPa21yxMgYPRGRMhMN4byWw",
  "key1": "wJvCbbYt24pikJTq1AnzJBjkUvVXNH1KSb2eubocpjyNiwfVXZ4esKjYrDu6DXLRt4PG5XEH15FTDYrwgeGCsbV",
  "key2": "2K2iavhFcHP6KGZPdDuBYGMevALCTvhZKrFJp9G6ZFdhuJvrqpMwTaVLZrC4e2jnFvEqSMP5XdWyfx3FRkwCYtiu",
  "key3": "4M71V5CyRD7q7KX7LAjxVjmPihVMKRujyPV6pt6ZajYFoqf2j1JZZkZxs9yU7T9uK2W3vUP4T7bVH4bW3xaeu978",
  "key4": "2nAS2an79rn44njqhE7EAdpuCFfhcLL2gVdwekGbi93tZZxYoqbaGVkr77Up4f76tNDTkNfWu4bn974wan8bBWwp",
  "key5": "3AFjRE8AWMCEsouocaPoNvvXiCJYHBz3eSCmrw4nj2axYPv8Aih3b9zHNjVct7NWLwFjx1gi3LfEafhfaEvzntX6",
  "key6": "25z2jH14U6rfyVTWCFCDb6t5M4uhHZSttBKsnAKV8nnYuHnw36yEAQd8BRcSVk8Sn9qN2XqdZvFx8ARpcsDa8iFF",
  "key7": "279ZMCojtR35R4RG3H4DCVhtfeKRxBcYSkrNBRWywMNsrL7RcDfwCtzSpudYXfCcB8SCWUoDMYk1SeTAwDNJEqVg",
  "key8": "3m5kUUtxQBuPFvGoX4YTRGkoaaDcwdLvfiW9zXGf8XzBmWh7GNEqVfzn5i8627FSXJbUxSukS6nQ5T9HH6uZkwS",
  "key9": "3U6vJQ9YqZ8w7kVQgZGzEkErbuoiBe9mcQzGY5bTfTdhhZkNa5Rhd97KwPWi1BHGfwCZKhg4hxi1Rt1upUfHeRTn",
  "key10": "2uZCGJC5YTpshoGGM1G1W4NXgAJmX8uYgvme7i9GPPh5wuwsvTP1YdYf6GT7qoETZmpvi2h18AKBa3vAAtjUSmXN",
  "key11": "4ZgvvRdtJxPVPzyvmeAdMZ7TxridVmnsdFqVcies87LWtWJszB8YsYHDMLxpzgj9t4fPTQobPkjE6DPVuLzSHjso",
  "key12": "5ZEys1Nrr2W6v1MAXrUrM63n2AqYkefJXd4E5M8ewsi63KwnmuZ63DKyUPvcd8gYyu6ouURojUfqyGAuJZBEx6oU",
  "key13": "48EyyCRMsWgXYRcedmtZHP8FfenBEHPYi2Rk5mEEWMBZEac6waqrrJM8DqzWgP18o17uukwpMpaLz8RbtTzNsYLW",
  "key14": "5Wt1XDyot4CpZpt8qTX8NBtQbu1tSDpjiFmbbwsU41GBc6u8T56nAaCpnNtQeqP3orAtu1SAo4pYbRcJmxVrBWuw",
  "key15": "etvDvEsgwVATKhgnBytNi9eVRYnQpCuaD36givkynv1VksRocddBXT36QVaLvCiisB7RtuCNLqwdWKuLieEwsVY",
  "key16": "iPd2M9SqpDeJ7JHsz7DamSpBk3tqJUH5SX8xeXsMe3FuabrGtadCRscoEN6qGSpZLRdA8dmsN7zhZYaoHmBfF95",
  "key17": "4LTxw3yvFJ15qk3KK3j15VLbBkMu67gNtreW5bw5Es49Ag3KK44uzsi8r1q3bzZZXh98d71nyD5MfKRr3N83uBCF",
  "key18": "3jJ6BV8pQtZzNCPYLSsQ9ZAqdDrmUfobs4Hybrj6UUnevrGBZ8D5cj3e2AMm8XNNXStfVkcD9rTUeX69uhCeQasW",
  "key19": "3DSBTKXEtNtLyayDHG9y2C1Mz7Dv9NdCEqmJksKoWNALxyFEQ5JRSpH2kcftBoBh1a3SM7SvzfngLPBbpHV2RZ7U",
  "key20": "345fMrZr7KCvsT7onmF3M52uaear9rBaGr5h9pCuoHEb373ES6FYwXhBppwSfxRDSm7JEzBTZ6ecRGHpRDWvxM34",
  "key21": "hNAhCpRxMyVeUaoW4xsfq3ZEJebWVgdNubT95ePnBV3F7fdjFUn1ETqk8ZsEshpxhaRKHgzn8yoKjHKvyRojbKs",
  "key22": "4sVGLJtG3utXxPpWLmgjLJ9TLBXB8X1WiPemQUTnXLNaNW7SCAMFwsvdTbzT6d4mXijePWvpqAmCff65Uyv5LAm7",
  "key23": "5kRKeRWzQaJXnN6a8xgURYehDT5peBd7kRrD8LURXpbaciRptDcHnCePPGnC4fAC2LmmHhowFVHV6rgcaRd3JVP",
  "key24": "57ni816cBFZy6cFmjfjHERCc7txK9TW63x9Fya5jK1A4ViauttqoSu8fRKWKJz14ztdXTBN64aQ2Ppi2oNwryPUH",
  "key25": "2Yp3Q2zVPQ5f1SRL29Zpn2tiBaxnUWVmYhopCtuWEabXfjXpevsypMc35FxREKKfJduTTnRqLjQpMCKLSpA1oVB8",
  "key26": "3bgranc49rDrrrPaGbPD6xedTg1nArTwvgEgX8bSapBYZhUpg5rSwQUbwdyo2FAAbZvwkEoTEXUro9P4SJfqexjM",
  "key27": "Xx1AKqCxtL64UzbQonLSHrSCNZwfWmyetR6sFjdcS6NQW3oD2YHvHqPXSPGvyepakVg7pkWDzsfjqLZMsiDHPwU",
  "key28": "387NE27Ep74UZcSB9DsxZU8veCMR5hTL1CgijueFiGA1ZfoLM4fq13Rm9JeEgaSQ15uagpNjcqdwvroF8wjMECqi",
  "key29": "UAbPpgmNp7vu9hAJJf5fpCHsM5mM6Zddj6fVnb4rxWNqzq37dzbcZRZTJe18PyCM9yiDrDKmuMapYaxpRR7hrA4",
  "key30": "UNEcgCAGEKDC2UAoCKDJsLiX6wfhsYnkpho9HQZgn4K8J4nWae3DhXxK6knnm3Ec7ZNrHPNHoftfnNVbgMM5yGn",
  "key31": "sLp4PQWjy4o4C4Cv71mxLeqddHpD69EFgUfKw5NFkYnry7fRhoiap1ufRMv7ZsvwiYwdWxxzPVoKnRkugfwAJMi",
  "key32": "5FVzGFxXD8mUPQLJYKR9inRajwCfUFUqXDxJ9kHcbTr5TEp3uzwARx1nBRKkV6k11TB1ywiYmdhb4b1BYJWTDbiM",
  "key33": "3QQrpZRGR14LxHJbp8JAfyemxEyqnkqJLH7sWyNp6rX5mRscJTJReXaUvLw3mTexzn9oZpjpfLZLamkosXA6aBtz",
  "key34": "5XUcLkUm3NufFXJ5DepGrtqJT6QBEUKA59SLJ7hQ8UV77c2jk8cdXPUneD7Q3eGmtun2z2esgxmYhtBPbgqkojd6",
  "key35": "4camNr249Wr5ZhPsxh7eTkYLnqzYQnzAsxkxFKw7sxiZfr6SvUGe86Z72JMeTEefL83MjbCWEBxNuXpt9iZ2fimt",
  "key36": "58BtAsQGxBMFbdzBWnaC1b9HSfbAR6WY1T5RkJnX1AXLZffGw8WMaji7pkmR7PFt7T5EZJve8toMqb4xQyw5DibS",
  "key37": "2tvXz8YN6BYQBV381DD68seYDG4n1xK1MWUkMznaBCwCrV1xLSxaXbtnuon9XvmNayjAqSxxi1mHJ9Ssj3bqUtp4",
  "key38": "4HamEhDYQtfdsGn1DyRDiE4QUzFdiwCkQQdbBWejbMqGEePwjDcuk2v6ndkzsD7WZETpHtgTikqgCneHnZAs2z34",
  "key39": "3pTCqgKXj9YtMq2vMRMavGjyLFvdKpWpj2QdTow6RFBcJ3mfutAA63QHXVEZ9NEV57MorUP3Tf3YTUWrXgdxHNzm",
  "key40": "4VUvnrmg1PLBAf3tP5Y8F7EaCAJhcLdtc68gpsF8NLhJ3EtWUuAFKkGM5QdQQ1vJWyEPgoX21afbnE9JhiiCZEJc"
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
