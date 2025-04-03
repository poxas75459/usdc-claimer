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
    "BUjrcdwdTFM9BU4ik8FCoLsCfVZwKvBGyrhhK44YUhyyuHbKAqwKvA2pp56BUwHahTP4hv2msJj8AvgmN5x4HTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hYzHTnBMxSwGP3Qjw9iBW7AdA8qZG2a8pJQzpuqAaqCm8J4RYJx9NbF8MerTNxDNPCSAGXKQp2VGyE3AW4m1QH",
  "key1": "2wJfD6bQUc9S2WtKAcEpk135bZ1xmgTYEd2Z9vN6C41nc1GzwM9WDs7KnaqQCpPQSRf3vTAbyHUCHJ7BRYSRE5km",
  "key2": "2RUCkfnYk2ou6jxpaAZzicsGScRBBTMB5eRodbf38NBvfVKwZWLUYFSRUoDPRbs3UVxo4GXd2Em5R6L4ZHp6chYu",
  "key3": "2wiHZSuG2i83YNqZUmjYXbowCGfgcyoeRj72xaEC3qCD3XzEowCPvAdkQFBNVUoaxH3yF4g5xuYFu4jKisrkExoM",
  "key4": "26WFzuugvpmM8ULsaBWPxdhb9ZiCnVdLLhMjsUPJANd4W2VPbjsKopJV7sx7uAoBXHPScEwb6z8mY9Pd39V4GLeH",
  "key5": "YTnM7FP2kBjKYYWQCWnY68xHDozTBrQkmc997TfL7aQWCsXc9Avncpcsujd1esakT6fg3zwGT99na62B4ZB9BYh",
  "key6": "4zseJA98w6GM6oikkAsVJBX7YX1m956KwWWFSgr6k3CF93XfGnjSUdsFqCe1NTywkzmjVjU5seWgDeokeEDeDnd7",
  "key7": "UvgZjCzXwZohbsEt4LSXSKuvgULczZP4yutD3uTsePzEGsSDmx1a8g2qPg9CnkdoNvVzTr6HRoWuzsYGMSwUsBV",
  "key8": "kudUL34FqiXaWXBnDv99E7qQbXpTqEaKjEx9fcvU3tXx5NdoenCu2n6kzZ6o5VtQWUyTFg51LmcK6ZuppyJYWn2",
  "key9": "5tc1PDXvNHGsK1s1Zt385QQuFqtGS5wY7wvxjZSYPDTifgVpNnnyQnXMCfqmcz5JfUs8W7aeBEwFp63fBwEHD1BZ",
  "key10": "4mX9jW1eXvTwzEQVmw5Ya1gQYjS3gZBjpN9L3P3YjL8CkPLzgsW1QXsxorcRSJtc1w1gV7Uboffreng2h66mwdC3",
  "key11": "4c3tqHi5K3HHZLC5ZeEn55XBKSRiWTzv7UMN8Usj2JacpgxeAZ3jiYayUX3eUoarE8fVfHyimM1LzaH55WdZQHG8",
  "key12": "4AM4vgLravgkmKLGjvpZMZCcB5JGRLjxoHhDH4Ca4LZCMdpTUkja2jLtiDTJCofKFXywPQUUzXmX5zT93PVAq2SJ",
  "key13": "36bZmzr4EBnxosPKUS5csDVMPQgPvoR5V8YzeUmSq9x3aa1EjJEs6MqB4NiL65JKKgpBEddAsD9NjeRP1HtJ7ap6",
  "key14": "1gchSUFHrFboEEA8TEm4BNwVGbXqJT1Ewx8iY5bcmBmdps8iAt3GYzmrru8eR6c5262mapXJ9QvhzKj74WBNDsy",
  "key15": "kZYcryAvjMHdhtuxDq9aUTvnLs9bopVQD2XPARTawEUDjt4iMYePVkXM5C4W1pCGD9hJdmtH4uAe9fERLqESLz4",
  "key16": "2bJGVt5eik5iLzpsbpxemL5crMM3kYmQZpqh9gpxQCmqXrN9bjGx2P3hyLuhGWAdFq67o7Tu9MKqYQXHYU2xTVZk",
  "key17": "4cSc9XpjtRmnq2vYRynXyRgbPotcyLwNpBr8dWeq8jrAwg1ipYcHVwTkaGFjAuZAXe9nUiRyvh5eufWEZCHD6mbx",
  "key18": "2ym4WxzMRbQZzGop4bZz4ohNUdmRjgvgV5eLvr3TWNVcDq6w2QemnQdvyP1TCYmSXsVn4SbmHRdjLi2ykmttVWxt",
  "key19": "558Pn3PV2Ptt8T2RwGakD4ELPcQHZ2JwSdWAKWY2hSNKjWD8dDQbPMjHE3MStXZqWUhUgykBLYhtxsKCx9mg2CTZ",
  "key20": "2mBptLtaNsCenJekkb9MsifLbkRiubDZos8BnQrm3iLUeouN6S8XqjEBu5Vvg9ZSDdfkLMXQyQRqpqxR5ENPGDdZ",
  "key21": "3vDEr7hhx7QyPC8ehpqV3Pi2JSeMctsohwatBKoMk2siBHPVrQkYhmnmQ8Ph9DRcfJNTjPJshtznP7aMCF8deLeV",
  "key22": "4XHe4hr1f92EAXaqQMqxsnh7z8UbXEB6Uh1qVsKLZ1xXvkqaY5FFCvRdvC7m4G2kpcbq5CRdmiQ27dws86cPfb8C",
  "key23": "4UPti7wsy5hYur2k9EaFozRKuKet3d1GJE8NNSNeh1zL8petWXcSSJJ4bsM2Gf93vH7Dbqf2e5oDKbYMp5y64Wjt",
  "key24": "373wiouusebqhcQsvdGEgmuAEfSEvm6s1EV1TjLWPbqdRHdPDAGToouUHExWzih4n52cKXANARzHAWT48bUt4QoL",
  "key25": "3tVs4NYafPhMVcU4toSC2wKCLnVkpacNgZ7xULNXNrieJEEDQ2NY5MpRLcBSThnDqJwL2sGFMotuFfxf76XH3yLq",
  "key26": "A5gPZKkTDsWu6Xfqyuw3uwHB9ByELRCWFsZknkar9CTySo94yBoZpKtGKauvxytCkiaZuEx292Pem4dKEyHy1CA",
  "key27": "Vptxdn3hfuxmdR4jLYR5aPUKr6CK5kFR1sKkTFE6g2BJkNnE7hnWgxUbqsvdXr66LXCoeGWCfGGLTKowRYcXtH1",
  "key28": "2VXpTPEzvvRcEC9UWtxeBLABhtyyxTVdgj8EHemFp6iGfj9CgjX551ryqgwCAJNFnXxtdFdAQWFtFina5QpySkrr",
  "key29": "4vyVmSL1gNNLSqaR9z4Aw9MBKpfMeboFSKfkDrRPWn27pzfXLfFRq96hvHoBwfHvkcjNGnfUgjX79si7X1UNuWJn",
  "key30": "2ndoj9gP2p2QjUpmrXbHvvTVKLk3tHhtPCh5V9FuXsc4kByUP6E7boJNbTSidyqoEj94bFmJeZvkLAU6mVTVJduB",
  "key31": "5j5XDEc5Pb7kEjdzSxjKCFEitN9YCG5TKPzbrjX4GXCm9jiPavNvJmKVnCWLnVdKTu8mNZaXBASE2vPSeMAok7N9",
  "key32": "bwzJNtj3sjkLGnqgw5BuSkzsCc3jwvCyDGNGihHPytciLcu1uJpyWtxHJYTwMWqxSZ12S2j4GjLEGwJcLgb7udn",
  "key33": "3nZzH14vKBxh1gETv4RK78okS1toEDTn4D1mymKy9Bc2avDfCY6sq3MFYqBifj5FsgWY1Ec8TTQp8JZjGyRk6stf",
  "key34": "wJGWx9AsjMc2At6yoe6t4KxUd2H6SkjM4gkBcDeBu18LNKKVtrdu9o5raJ55EHhgpPmtYiXKPoeActt9xPyVWDs",
  "key35": "2aD6u4e3NPWX26Rr4L2AgaDorXDL2e7nMdRMT2qWHTUUB6KGA1qJg2mP2sZ17wSmQgix9QBPazCtiRmXCJzCAW5d",
  "key36": "ZiNgoFsvtRbp6ioiabittFWEnw9ZzrzDnECVTR9shg8Dpccy1JcpruaAgPFQk6eZ66ZrnpFjjZ5VX2E3AGBb3xp",
  "key37": "QbgUweWku6Fry3sR2Zv8D8RBf4n37XtoRseVRQT56H1NxuYeUWGyF87z7ifwJJWPqRkN96AQqMH5EP31vdnfvSi",
  "key38": "Rfzw662HRVkwbv4VDSiV1czGg9p8NBCGXasRt3A8bt1LBJNr7pcJUvaEKYNHZRJBcCbc6A5uN2xd3Gsqfdzhv4D",
  "key39": "Ex2PurWvZ2JgvYzLnbFCTDqBhiSbCojdoUZFjSYtfCwLxKTPQR9nF63K9DseE2bQca5sBg1E8Hce2YRPBRJUycM",
  "key40": "2PCxiBEiSwER7MvGVb2qECuTVztuvKBbXUm6MLuZw7vUnyoVkygP9Ggn5rgFR7fVjWLxXEDoxSpHsxW72JFLLA5j",
  "key41": "Y454CUKhiBw27xLNxLjAMFA1D26hDZE3HGvQTns8615LVcAdfCbGwcF6ncp9Q5mYBvXx8muKaEb9FTe1fgXVrgp",
  "key42": "qFcmic6mTKvptE579yG6NJQxgEMgznr1AZ5p8iKWLBQgEP9ATPeuZQvMPFarPtqRRsfh9s3aAqrmFh5VvWsdfK7",
  "key43": "5ycpAaNKuAeD14TA4Ya5AWj39jr8qxcNFsTasdbvrEnzvopqKCgZLxhv8kmYkJxnhgt6R3rp7MsjUnwD5qiZvgrg",
  "key44": "4yScQr824GjMA7Lkvq6YeLbC1pbqM6hXFcQAFzmbyBXLToQEG29tp5tyhagcps4E2cSMUmi6Uxe4Ciy8CQdspUF3",
  "key45": "3CenbjLwV7xzibSNp87QLrfYwGo6hgUvJpYNycYzrKKPxUhewkLaxdouBUxACbpRFQQsd8NDjekeHMSB52cTSCNh",
  "key46": "2H4RkRLt2ZYksXKmv5kFZwcM8H8oHcA5JPxHyeKFg7tw8TizgGMC1fu8jRFob7KWtunCmTuCY7VohPcVD96uyphF",
  "key47": "4Gon46p9tKCJMQQUM3vpvMz5rZeTbfrXtJ5td2Us1B3VQosYMYSdnEJ3aCydFbKc4wWCuY8Shha1auyuvDab6Wf5",
  "key48": "WgsKQoocNJbxRVwpCKUXRp6pU8jwx389sax7H6hMY5LLrGf5cQBX5NNoSvecKHLCqBjV1QqDrjwUJfiuEwSBvSg",
  "key49": "2XBbxwKKhyxaXg6L8cWzG5JTvvpY858FrSVmVoXRbZsKYv8J8hby8RFr9TzB6f341LNXsAYW1AjfQkaMYx6jAkT4"
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
