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
    "5NZ1LvL4rHGWsokMubc5dfYfAefLgYJj5rFbga5JHtavMBSyhoVFYdZWkWgN84Btp6taiz2WMGe7V6fY63viJYN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UMABKkACeapEWnqua4FJkcwEMBsMNb9b9gZ2DSLQZ7WQQF8eacyyndY2jeKxyRpxDRBS71g79cjimsGQBMCYf4",
  "key1": "4fh8LRQU4KoauqoSkwCxPBJynQzAmEYMEcx7HJGmgstTzQBf4gAQnoCtzCgpsx3gqHWLX9iJtYfzCgXxqV9pFvxW",
  "key2": "4YEVpNiBMeUt4svEDCZCfLVHoJ82c4CJaE7Ghy6cr2YisBSc7aRYEUfydf3tewQjXEcy7mvVyfLeUrgnCdPrE115",
  "key3": "2hamQpCuoPXvAynCkN6Q99Kn1p9pACyJRncJnUm58t1gpN8fqKaKAhFAkmBsx16d63absnsquJc4b9LAWx3s5Can",
  "key4": "PK5t3CseSfqmcoxyf4Aen5ej7mAA842eMSza6n4WFhTBBPAbaLemzRmWnTbgPE2URCbi3JbZu2HRTjeozNjF1fw",
  "key5": "35sQVbeWXEdQif6RGAjMsjncEtUpVjUG36kLiXVinXTfRwETGQprV416rPomwCw9y8QzQ2XXLeTzqSnEPmUbC14X",
  "key6": "5imzwkMP2z4XnNcFia3bMqnbd1hUEcrahV5uTFko5HGhkUtdWupPiZMGrxCATYnC7w5fsUDkgar3MEoHWToLK8Yy",
  "key7": "2iEKUqx2PJuiXsDUDujvvgw2vAAXstbFBZJKpyMELi2J9aoggGu92cTQhxwQfssTwsELNfVJyUy565i7YJSy4JZ2",
  "key8": "5GnSPWMouDf9MQNsFHM6rpCbxwWNoNWDHW7hkGvLCVQCnbQFx614JQB9huHo6p18NzpuNSu6ypBiBHbEvdhKs5FT",
  "key9": "PFS9Y9afaNRvgZM5zt4s6Mih82KaKTLhUpddfgrmVR3aVUgnR5yBksB2YsP7iY8WF6Vm3LJu2kr1ywYBMYx3hUA",
  "key10": "23DFq5YrcLx7fi6nqpfSM3ov2miawbuDEigdfQrKZ8caD4px5sej2PB9LmNUp7GieGZ7qGRZgDG2ux3NQvBbhc7W",
  "key11": "DrNeRxY8kPt4qRhvGyBiJbTU8bRTFwTAfjrgKopmJ6fSmsSyu6ihWyuqFbMMbMacyMTjjSSCd5heWgitp3jyR7E",
  "key12": "5b7SHHVBpQYS4Z877CvcxkRoyWDbPFCtuWK5izWCF8cFQDuGFDZd2Xwf4BuSDAmSzFpaSQvyFPZV1mdKAoX4gh2f",
  "key13": "21spVxAuMuoLAqLuUkXcBGHJM1jtw2NWDgWd698kCUhhuVur1eDtDV8HxfK8ftZXCjPoNqYrBQC7GcqSvWcbVc6j",
  "key14": "3oGhjDmbf88DXe1VaVbvsLz1q5pgC5mhjeHgg1cBiScdBRNHYNsvUieFwpcwjwAHRFwwGNXVRNMgKY4CbB9SybsA",
  "key15": "2DXhBU1ZJLTA16LKtdvvV6bEYPQEF98BTBb4WDzMu9VBoB78FrGLzjfn5SLuathM8QTmYbM3NdJFinsekjhEStej",
  "key16": "5yjG8NBwynQR5K3vTv77AD6VvgXdRmtLkfHGLuT7bk5sH7B4DDDpdnPPrP11miJPVXPiYjxJSRjCXbBNfanNGoFF",
  "key17": "3CvCwbP4912Z5KbUmFkHXE9BoXp6nm1puHmgJKM3x5P7w6rgcK32tHVKmXv7DQSRvj8RxrHa7QZznERzicXq2Mzs",
  "key18": "4Xmmg4nTM42h36c3DmxhkQvMF7yCnsLNTaemjfdQipm6ZJX91XLBbWZmaNSnaP5mvobxj6X56djmtudiz7ZZpiK9",
  "key19": "4kRrKiwbH2wdwUd4Hk4idQAswRmU5fsckieq7ZJ2NQ2TqkhS8HU26RndqaJVR3G67gy8U9AuGVYcPULKfX5Mgc8C",
  "key20": "7RY728HoNSxnRJeFCYUNbKntSGgNMgepkAytDTsKm1fFeDhkBNw5opBH9ayMfrkHY8dtqCG5jSPCiuYFEZ12kHT",
  "key21": "Aq729K36iHoELeAZoXbecypUS1aLFUPik9eKDbza2hGzyttXPGAtgi4cQoJhHZVsdeykLtxrZqQBoW6gynymh9R",
  "key22": "qym1jQ76ZXff3gvHteYipBFZgfjwADUF7yxevbgifzbyL78MDJz7hZmL835DePF7xc7etzryjowbKVDf7Ri6GbH",
  "key23": "4GdGfrknc35Qsr1rJPafpdmTSa7YJRMvxpWfWprqo933fnxP5H8EkMSbzW6VeULukpCDnnXXwmzKWG477jDnU46i",
  "key24": "8EN5jxXaNumGeTKCQTExeR2G4p5Fcux9rePc78QHvCj2zRoCf33voUsb7ncqX6Q9i6ma2Rroxw6X9DFphF95GLb",
  "key25": "2C1rPvT4wykn3TVphRrCZoeXvxsV4JTradZYhnxDox8fgKx2NPV4GdLgpKbTKyzFfFVMHWafb4YRm5VVpRvDGmto",
  "key26": "79iqxkpsQJiCmyVCTwsUWJyQTiq2WsXpuvhtQ6hugh5Ys9ZnbcnLSASPjN3WH4FF9FqssGMGbqh3S255MwaS3cj",
  "key27": "4L158PfNwi5JfBm94sdqr64EzE2tNCv9mRugZQ4Nggu3wKqBJceXtFQkPVnoocxSj5cYFe7jmB8Tbkuggw86Z3Vh",
  "key28": "4aUZX7GBBtSJV7saQPLfbP7UqEA2kpTBsPfqyR2mhBJtDcJ9pgEDKTjHKAm1GCrgLXVMLBsp3VNZcQLktUSQTdmT",
  "key29": "5EtafnTGrmVWeFQ9y1mEig1PXEukWZoDMap8QhyXcTzciVT4SJajX78E2bzVZhYd6Xh16WH5C7xsKDDmfqsVKFj6",
  "key30": "2sCcr4XrBjgoW3UVK4mweL3pwuqhugD3reiiqigDpYkH1r1PryFAemiZhf1mLsb37CycivY66GkxFYy4myLjqh48",
  "key31": "4Yqm2gfLMr5AB6YndzF8NYQ5hbYmkecEYwq9ihaZWqw2FJzNEvxAct4x7uXk2PJcnFx3DjHeLqzQ18XPaibR36Er",
  "key32": "2Dzhin7yBSaAcFe2k2fd7n8mSKCUfHP94v7i1yLg1iPoQKumMqDrk3vBW597CTptUNA4Ab4oCXq3tnvMvgbYUFBZ"
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
