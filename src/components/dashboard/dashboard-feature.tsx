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
    "eUgnsBDyqoHGae1JwD4FufXyTxwdM53ENpbPHptpeJxBJY4aQT4t7GLy8eANJwGQq9kcsv9R1U4fUc8amzbadEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHEGqB5qHpxuSoFcS27kypjTN2hxxZPB7utF5n1SwazTgGF21ibfhAiffNAm8xYiGaWtHrzy3WUy2eDUvTiRehj",
  "key1": "2yMtqniPTm3sD9TavGeAkBxfaddFqzMU2Mb1St2F3mBbR3L1J9ds9nXwLh4QDZcBeRZR6qanbpzNuBArGRhh6yn2",
  "key2": "39DBFdhtrG3ZNPqskwaju4okjHKJraHDjC5qAAcm2HxUVSA6hacim8XhwZzuRqq6L2Sj2vCc2ftm9nApKRVoP3vd",
  "key3": "2xjdXMsd4CovU8bZCGGaqYrAGbDkZabFucJFEWkmsM6qSXWFGzGF2vGBiHadmjYCLWB52zxE9qts34JYZPeXyDQ9",
  "key4": "2i18CMxjnbfSya5UBqpD5WjeChcxtK61xDxVoygVG68YT5gdkAkUYxTH54mW59ECVseHuM3cv4YvrNAZX56eo9YL",
  "key5": "fVjADdMSybBuemEGMPGHVqtqvVixFh3u1FoLXFK68YBo1HnU37ZMp8Ma9A9heZHh96ePR1Ez9BYNBQKZnJPNFaz",
  "key6": "49CqwMS9CGTfK2jDmuw3Jgkv9Cfrjnp39R6d813BdEo3Nq47pDNxKgSV9VUgU3NjDyec4g4H2fW3RaKisKUiagwM",
  "key7": "4AaVE8DN6QoF6AEH7u1wDdTpGXzWAWdhkRaVgdvYmskknwLz1dhGsnDqdQEKsdvpboKDbCbAb15tXnyg1nGa8WZ1",
  "key8": "2hqhmno8ZFJBCj5TdKoH9vsR2jc9NNUUR4BbSNoEp4TmRQKGqdz6S5Yarx3gJpw72b8hsxzFU4ma9LJS2pjJaZTT",
  "key9": "ULaNBefNerHocNRgxhNUEMsXBYg1o6RgrRkj4Tk2TXVfWWRKbE5Ywj32UpN8ZQiNoaeWTAauB7azcWxZYX7A6hK",
  "key10": "rwf8nN1xM5NfQt4qQQrwQT61rBzo6MymqnUxY2eiFdVDZAYC4gjA7NDS2LxKJUgMEwV72hRwV71LhcejdduYgma",
  "key11": "2iqEJ3ZXc1KmafmvC1dc8XNoEx7eyRzMCGtMs1ew8mGNuPBPNgjPXELpksN5g6bTwVqv3ghFFRRMzZmEh9sV69Xv",
  "key12": "Wvji9A1Ejk4TmjLw1hiCfQfiEKRHExCMHnVkYJQUJaGMADjB5ADZ7pkGxBKiHnmwmxJ1mh18ebWWPFVYiij69FF",
  "key13": "3Rs1dA3AHAzFRs85E6KmNBe6FtuwyWejMaDggN81qytcSii35Jjfpo3CP2dRsxThm6QbmX2n8W54f8pDBqyCyur6",
  "key14": "3jSgVZCkrU5YjSQtZnrrjApY7UGiZPKE5BYm5nFXPjg68cvRy3HRNXeEjainXcWZvLv4KTu54fRcvisPk2APVNe1",
  "key15": "2vDRkuDjKtnMaKXLQZYnGtVP1gJ6vmqzBsJXHcHbcSBkBewp8XaWD6g3Qczm4v64gkJeZzxzx7Tuhc8JVENNsvhH",
  "key16": "2kHjc2HQDRxTaYdgxsP7DFCKnJvDCikvjd7xNrYGbCSHYzxy13P4JreDV7ZZ3WQPVaQVdNPUH9NSVxBFxfSvTXdY",
  "key17": "2JCdpKM2sQyrCCnLeiV3FJ9ZLHwiNwLraPrsPdEPdmfo9KhXqXMeZSrjq3KHTf98dGw7kZdryptccL4qnC2ZqPfe",
  "key18": "3KnKVBsUXfRnQ99BoRXEhahS5KwF3RnZghSBXZ7MpjpUmFmEUrEscFE9fpQNPBReehsfwNHNqBLir884eqJ4hV7D",
  "key19": "3dpsRFy6M1gmZniFhiPgZCCn3C8rgJiarewusZKWxyxkx8ie4Xgf43KFnkQybj3nXDtaLmsMPbg56WYPF5KhaqCZ",
  "key20": "2uRMdRUhyc42uAkcnZcaPmWMvG1jSBuEh7tFrK1uJXBo3rn8WQZgmuZw43WGiPVdAGWESSskQDpweP3vVv5SJGP7",
  "key21": "4Zn8vx1Ya8c3dF4KAM12uBB3HWgXFPgX1MHoHCBvj3CZGdhDxueRNvAGB5i1s4H6MQzc2kpDUr2G85KoJWrZ9SNy",
  "key22": "QXtL4BFhbJjDAXtB9BBAaCEbSuvZdsLDwxSbr55F3eBiJ3hKxPRCqzXaxshxKuhFP1wJP6mfRkWhSUkYTespMZe",
  "key23": "uS86g2pA1pAXuvQ95SDqYYce373ztBScFVGZLjzHU8jfFQZjXgeB5r5aUtU516quivvv7WifFkozxSwgYuPMLby",
  "key24": "5BSv2Yr3zK795ZEBTDGTcw45qTsaXuctwz1gpSpogw1pE6Wcf6B9ptvDXdi5AZhptS7Qq6AkP6tTiekduy2dP5LA",
  "key25": "ddVtxnkSCpbYkbEADH75aSaiEbVucfsTxhXEDy5zTWnjUQQhDkNhcR8bG8B84rHvSmWMChWRQAR61GbqGLucUgX",
  "key26": "3QiXYZK6pzYWNC2fs7FAkG6jQngfYwe5c5vHr43SiK5SE6JptQ6or7eh38tMsGfpSLXRgQ1smBjMrqRDWDcPHV87",
  "key27": "jWmKjgbGsUaz5RZJrkQMoQHwBDwowwFVMsNsfKirAbPKpM4nS7PxZvSLpbNahi8Y7VynP7PwQPe5cjPEhB5UBV4",
  "key28": "4T9ua5yQWcDpsS9b7WT7te7zKNePvHK9SKJVAvJNQq8eH2f65hGTopqr8VPER3bpzcE9exv7aemaauL9wd9cpTRt",
  "key29": "dW5P9HwNcyGsgwExSRsQrQvue6zw4RgaCGKRwkUYL9DzHVN2knjaNryxa5p9wkQEUWiYRJ8mniJJotUBpFuYCfQ",
  "key30": "3cJP1CTngFUL9qXJB8neq78pybPsGzM8BCGr98AQdR3HNV5AhQ6yMB7GhJm5NddVx3mbGfudWaqRDmSygau2xwzB",
  "key31": "4uNNj22BcdTddvZkJHwM141GcGr3KoTmHs9MgvSfNwTBnGKaYkUicP3UmwCtZEbidYZLkyg2KL3qHPsAF96HVB7m"
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
