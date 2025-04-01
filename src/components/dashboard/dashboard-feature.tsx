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
    "5EVMC1bmG9F4zbgVDSWBuwpUiZ5UXUnqy5KyaYjWZwnu2W9hn5rMvgFGAiucB2qYw2wLnhfDjxco4CEVZ9j3ycLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XYCJHtCJ69b8e9WA2XU6KhutWocj847o196qKQkynLuAzXv8rZ1LN8TY87qSffPaZQw7MwKaMHFXSfoubfXuvTo",
  "key1": "4qxeEAWqdRu1DcYjRVkrZHUBotpBQRy7KwriyQuAXJ2cJ7dJHVhxG6RwSMz4Krnuqt3REaWMrJrjojajJG3y3Mf2",
  "key2": "27xV4mQteGvzbErh5GPFwGqU9z9STCifgzqXMMJhpKA45yerFqFDCm6h4zdWCroq6XLER5pXMEWrD2z3mb4o5NBe",
  "key3": "3aMBqGRvptjp742XdLZiAozQdcJqAC4vsT2EytBs2pL838VQrh7qddm6BC1xWpVRBbQxUtqNBexRAB6anTvowauu",
  "key4": "5Gyro55PxbBoQjNaURSLgE63EfyVGF5TqgJfHHhVP9FnavoMPdsCh1AxEKFbdKMFdUeNmnxN1STcfxuJHzM8LQHM",
  "key5": "52F6Mw7ATuNMBfN2PYmbHBZX18xfXfN92H3r68wxwVik44BU6djrMUcGFCzucWMuYioLQz6EuxuQMidcs1EP9eJc",
  "key6": "44KTVW5ist9rPQJHMMm86Zm4MK9NkPCLYsTbwPLxYiP9Tt4kqGcBb2d6tK8wyDu4JzdyHpoGmXcpXZ5Jg4ZLTahM",
  "key7": "41CcYJecm3CvSogGWwX6LzpDcNgZ7Zus8PvrFwmkoyULCQWx4JoPG7jJSBaFQHUX4QX4PcaZoAVYDvrWbx7pYjqR",
  "key8": "5g2yvtYA7G6nPYm6Ca85Rss3yQ7EPFaCdkok81YuCTSRRFAg44UtKqtnZZ9RVumZmbJ1YW3gdnbRKCUSqEMXtY3x",
  "key9": "3uYpWr8CT2F4icmcFdS1fVeBBUtzpVkGzgAAi1gJeakk1MsMGcP6cvcX2ZPp7kTJaS11DqhLfz7yt2aMwAK16nwk",
  "key10": "5WUdadAe3tXs7y88CazBWRuuNXW8Bny3w9uKnciLf1REZeNGmyRJtfuN3Xdn4kusQJ3oqobB6exSSD4dTEGEwBD",
  "key11": "4m9bXBHdDMa1LvXXjr7aipSwsibmWNAn1AcbB856G4Ybfbwb82DuUnv51KGP7UwhF4mmyXEmYLB8s9hz8MQFw1HN",
  "key12": "2T57tuncyr9bAo5gcHFNU44FmD4ZH5Rjd5s4kvr5xaBdcr3mjHA6pZUo3kgip9QukTxqtip9BRhmB5XBrrXKUBxM",
  "key13": "4gaASBbGPgASVQuNmmR2VcMYFWUWtTKiRj5tGFLGY4BTmfSxrKBfDLGBXMcihwwH73ozfzgyUSdVsX3JYa6ePdCJ",
  "key14": "4nBpTBAHiergQw6WVWGJVcmPXB7nNTGUn9MMV8jnJL4kCZHcmTGENCueaV8cqTfn3YWfPipPp7ZYfdVnNdySTMjM",
  "key15": "3MKLDu6WkLiWww5ASL5FKCndeDw4EpFjPMNPf5BEotZ7QLgdYZE3G3YVmk1E8hjFU5G3b7H6gvc6PAcgF8AnkKxH",
  "key16": "xZ4tCT7xjWax5frpgoKVaieMr5z1TmcSCXRdb4FjJ92u6Ngwk6kaXLBx9raL1ZwZxjcEUVGhsCV7UNYkMz9y1Ah",
  "key17": "48qaHkRtVf1739nygd33BkSBNDDwuzgDZExRibKt6Vrj7Ru8MSkr3TiXXYV4FMJDLiubY3yDxLpLvMqHoCkThYxG",
  "key18": "3wJaas2M82iwaWPGUmuRn1TPxtWamrJ2Liz2E9BL8B8XPQLEo5YJZ3DqtJzq3bxozX1VYvAxwqS6TpMHReE5eHdC",
  "key19": "4woZA3F7uznFhpsVqjo71PDNw4NqibhDNqGj1UrXTtG3BoockQU8hAoy4Yxa1wqtx5CfanJTMiCDokdiZ47eQk2n",
  "key20": "4ojESV4ZBzYg1LcEAE1xFcT7rJ38ZfNm42fgALSo3SRVEsRqunzMoPMTnUtkNTRZLob3g9ZgYJ2nKAnJ2QPB2iaP",
  "key21": "67TNUt1hyAtjuJGc31S6WeeZUi44uYyjXh1WF6U2aDLwoZEsLz1sUHX3oBkoPaeFd8NZ6HNs5LZCBg4ePQbwi1TY",
  "key22": "3Mj5PddSGLvaWWEGRRuET5f2oxQpAgnEuCiqzj3zYcaHLYWnZt6D5fnw3JsaC31t1ejAcz7caCqQCdeSzPn9N3FY",
  "key23": "66riqkPaAR9vWKjgEPgujo7i3ckPmMX4YGeVcDCqXGys3TgBbw2bhbEKNiYbKwZT8jvNt7x5Yws6HMNAZ93trhf4",
  "key24": "2gZf6xV1x9JyUkJGhSwmusZiCm98my8dmbxTinCEb4r8cFdCENi59MnvQvxh2JNCL8ALZMSbvzs2LQTubw7HGfzi",
  "key25": "3rocmGnhvuvjba9mBGHtzQszpp22sXerU55gyvvi2WXDr1MwL6bPcsPXgrmNXuZb7SKoyxeGytQUHdRJmjpLxAug",
  "key26": "VZqGkCZpiPa7TtEmAGhvsom2ZT4NCeQP8gNddr5fCayQg96KaLmQCW33n5HF9ktM7jHhg3sVzYBLVr8By48P5QD",
  "key27": "NMYcU3bH5muy6kUCYzfuNcPGNPwRZ2XZWo44zciLc8DybL7kHfCvzvA9Lsy7mC6HqyH3it4TrjsikHqCSXSKmk7",
  "key28": "2x92CCa6R2XHWx9oXLR6HJt2NKEfryvjWmECKfgXBs83nXnU32i8HNoFdDhyHsBNvTnVdeosd78EtkzAMd6SjzVZ",
  "key29": "2xojCVqD31GKd3yVZFq4gFNgbrRir3pQv1LYM1XFiPVkbeiaxKd5R51cnqASD5Q6k6XLtFkcYw4E2aLLUHiycpmB",
  "key30": "6PrhVDR9ui5fzui8E62KQLm3ZaiyRh6LWJWZuAJvyym1nVuiKFXFniMxReiMZQWZsRgn4hqkMp61QMmpwUafrb6",
  "key31": "5ecLNPofjeSZWTAqJbjs2VjXhi5SsMUkFRs8YuqnND9iNvweZSbdHgtxTidN8uC44zbRj9HdbW2b5mMuebVLDqdU",
  "key32": "2gZiXMgMDH7VwzFxYx3pyKroWG49TpucU1sNEYEgtvfPAL5VbhgmhmFRdzdfsFput69jvyiNmh4F7wmj3ob5FviS",
  "key33": "3kdqzYCd1gDgPGvxKTeAJzbSrtiUfbrk24pB9bUHjFT7vTSoehZYdZPbidoYGcJsSECMRVLzuodptCBxkpnv4X69",
  "key34": "4McyPZHi46YgRCux6DjtyrPmsAFev8iUXFzRSMxaAVTSoY4REPpxQ7HntHj4EcCJvVYUf6PW688v5PQGi6pRhdEi",
  "key35": "22DdV4h1sUaJyENFyVCogRAMVaqC9FN2vSqXaadesMLXPB38kLYydWKRzDiJBN38azjGyTjYjKDmB8NXAhT2Pmjd",
  "key36": "wzA4NoXxh13qkXeij7kkdokLry8hdt2kAAddSMWYFGHSswoUXRCBXupdApiGpWYSUTFqbwSufZUUtVdJXxkYddR",
  "key37": "zdmBYv3N1S23dULtbZKhTh2Ej5cAdfyeNRUbKNq6gc4LKxxxomSjUdRCkiDhoN7X2bGnCfyVDqKXbNim2o4gDYf",
  "key38": "3W14rZChXLA25TsF5nu3u8cvYEPriBvg6174nKFcZy8QKCzMPFWb4ZsqAkAjWhVnBQUZgwiif46NtmC94E4dFUW4",
  "key39": "CNQhfTouztbqcHjpuFQaKhQQi7QqdpCcxfjsZPDnUwRxDVgkG3agPUt4GDCNp6yGdWmLGLax16S4i8X57VYv48R",
  "key40": "3wsML5Gk9gn1BKRAtGwNF1ii8a5QjrxeLJG5MvGCfCVvS6X3qJ1TNFKsWida4VDcGsb7UUMcb4U5oWFqjWZCEDKu",
  "key41": "5zv6miitcWWFnywrEZPmDXMKq5REHaQM4QtokFjDoj7HwMp9CJ57DGvkmRFHPjo2NqZLfa3eVbFusuud2N9aoF1L",
  "key42": "2AnHNpCJttZuQv7YH2ppw5idkbkg6jaE7c8rV2kveh2bWweNJ1WzgonyyenBuJFx3efM8HJMk1ezEJQ6Z14Csszg",
  "key43": "2mqkEDXrv5C4Au9B9kgunpXYCYC1takdRf2bWQGdDwgm5pBK9Ds756VmLk7LuqrMyjFBS4LmjDg5HvpFeZugh4Cv",
  "key44": "2b2hsEf2Pk5UoXuoPk4pEodb3j9eqQnbqis4EMVLQvcsf9gNTccSTY5fV1367cwcSYHxNn44swYTiPvJNR1K1Gao"
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
