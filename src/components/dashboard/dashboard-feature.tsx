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
    "3Dmx26jX2nRQPuuYCquP4gRKC2UzdYEK8hTBbvtgiAvg6pWEiHbHbCDViFeoS5Y5hrDNWQNNAbC4hW2fkicWz446"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fmM5YPbfWenGedjRthjBxCKWCx9oLXVCyWmHz1SZc6ig3RBtJZqpfCMhqgY1ZLLEYzhk414uSjdum3nGVyYkt4X",
  "key1": "2T4RLXJmUP2TqhGw3Vmr455wWdVHLHktRmvxjh7wJ7dnJ14aY4E94MchRscXVSQdDFeeWyn5pRawi127TnRVc6sX",
  "key2": "3v3oK49R1wN9J6MbcSLJ5vGJki5teM3kvpufVy9JspfY2wvkD3MBNs7HFVxmRuorsKfKYNP6YCiZdqsxyi48644h",
  "key3": "2qDcs3QP3EZU27msVMpcYngmpc4eRjeMfkWu6DZEPUNs5maRmkhBniiZGzqBPW2tEV5J5BSYCnY4icJX8eCCU281",
  "key4": "28Q1MSLkQft6v6WmaZVdQjYQTb1SYZsgEFZFpy2Hx79GNhcWGb7QE35paSDKKSREZa5urkMZdiEsFWLGEXfg6pr2",
  "key5": "35yuFhNhZ1e1mT4QZ5nE3bkZ9VVVGGDYDzo8MwYaTpWEfipECKmep5MaQaU2qCcHR8gSrnu1zoM3yxUAMfCpq68e",
  "key6": "2vq6v4pbsqQAi2Gam1GFhiQAhQa7XMZZbFhstYBMnGz5rb3mUHqTAAKfLSubvTiwjUgbei5z7S9WdPr58AHcir6U",
  "key7": "qtsyYRjBr4E7SoRPCCKNAENGZP7HwjJPa9Btr2Ho7dQgTVGt7QLsVKjZ7KKwq7nkNm86KaZ4xd6YH1A1sukDdUy",
  "key8": "rg8tjybRHtWHfHK1p7JjcCrbrrnaqu2ipxXChvpxFNN5HHobzBv7Qm4Xq4ZaxJifS8s2jtScuT8brvcHgrht7ih",
  "key9": "4cu6tb9K6trFAH5Q3MgNQf4TsxhqTkwminXsTfXThAQqBuwbZEeJXGwUixfEUvL5BDukQRaaoYu4stZWrnwqB3kQ",
  "key10": "5Kx4KMdTSkmrsiVZyoCjA91VPzb9hLVosMmDdYi6JF7XrXAbPxbLcofZ3wRaezvXcWFmvAqezCRnqu2yGgHdV6dm",
  "key11": "CDbLmhyjwMxrwkBSZPgtHq1tx3TJXsyo1H8UhWB1XTdD3FXQbBfBcCn6pXQTFb7m4oVeyk3HW5TEJo7Tj6xatQf",
  "key12": "2fkbJC96tZijVMA4Yws6uh3FDRc2TeMjPR4R6aLmGvkN4D3XPajU5DFyTTr75n2mf9tTWCrQrPgNsB3fr78qdscW",
  "key13": "GJmEGEvKk6sWr1yovyjGq7mjA1cSHRPTVK2aqScMuy2xH51WyCjP7ZKry3bgQwvmLAegigKg2YGw7oDvLvDURrF",
  "key14": "2cK19HzouXKWp5txyteHFUqwPASvGsme8bFFr8caCdp1n1PnKg2LAieArKsW7GCXSAAVomajqLnTdzt79BNvTvz2",
  "key15": "wUbeR55vtMJrLFFcR9o2DTu93a2jjKu3Wa76dfYaZmEAo5gXELcRv8q1CwZvUtRbUqFkE7njtYpmyjpwaY8noPH",
  "key16": "41HQhuitEyPVouU9sbrWJd4WBxSUEMMZ7x5EKCFsrPh8513Kzp6NLpg57WiquPxfArzxP1UdE3HQzixKhgMfSLFJ",
  "key17": "38tE8qR9TDS3u15NuZbQyVRXzRZK42HWfU4MjGNSE54uQtye582gNPyjE9CRcaZ12fmm6xB3n7FmWXwgKZazD4o6",
  "key18": "Cr2bJ6kii433mwNJgBr4rjhGmsVwgRiTaAC2oFUEwkXBL16HBFsQoub9v3VSjtBARHKF3Z8Wu8qejNDJjRBt1cG",
  "key19": "vyANN3WNyx2n3Jwh3hUdDJRk5F9tqBYfdYJwBNWrXwMFXyfcBa6v27rpagqpV2CFtQpAm5WsZBTqQyi7eidDyfD",
  "key20": "jhTrU9e16iWFyzQRgkwco1A8VuxKsFM7xRUzxy1bUT6S9HEFHUZpVD46fZ39vJSejktQmyaDHuWPPWcTa7B4ybb",
  "key21": "4fVN2aSvKXpzP1RbYpEndzAk3kdyCH3uRMvB6gTqCDzvuv97jBsyNoL3RTRyoQoZaNa1b72TA6VwUZJcEkyZ4AFY",
  "key22": "3gE7rRzKVRgc2ihiBxyGxEvcbPDukUYv2BedRfKVmFVutJjGSHKtdhpVdYA6UE13Wgg5dFS3MUtPZDY8HZmraNDe",
  "key23": "5JEomT2UxdFYKnoCKjb6FkHjhWV5DJLsppasVH25bCK4DzRfYGDEKMtanUv2XChcHsqcaBg8LuqGevwTXMiAaCYU",
  "key24": "3rk44iyZt5kuHUZCZfoT3DE2k1fWMFQZWQ1kv2u8iqQgDyMXsTZSyzyRb4TcVEdCUAukVLPCcCEQTY8VfUNZzRBt",
  "key25": "2QPQxWrB2dS163m51qV844BQDk1DTzLTXrHTPM1Yyit1L4rxkCa8bjssfVo8fc44XHMHxhrNBG1Fm1hCytR5LBV6",
  "key26": "APbUVgtMGoEqMZVwWcEsFDtLDCDoy5TK1Vy4Njxpvb95CZU8hwHv5Y3pSuiU2yjR2fdpQC5EHV9Xjhcr8xpTpYv",
  "key27": "5iBZiFcKVJtJj4nL9QSurbDUoPALNmtEtLoar5QPdp9RWypak4PGNNYZNS6wD4raASsbkxn6Bs6AXyKj13atVik8",
  "key28": "BDDoPQVDBUMXMe2aifSdzFMpsXPMfaVAEroSSyJNsUqGMJk7kqDZfsW6Hz7Z9FH3T2mjveRFcnr1yA1XQr6vrn7",
  "key29": "yfAN4paV66hnEi1codkPK5uVA7UzBfpaCXZinoi8jcBqhBHAvki2y8oNcFsFFZVH4i4LEEoviNfrPVjDRyzBxhx",
  "key30": "65YAgpbTGxDbwRC3F8sESQJQz85B83Ysc8ZkJNQencuKNhCPZsXhEnC1ZQLjbsbGf2VKAT5zFssgrnvdfUQ1Phx8",
  "key31": "2LWGJ2WZBeh6W4eeg7LJYS9JKbogusEPEMXkWVhFeyS1AZmqM2jXGNYMTmC26hGruGYFZnXP4nucCX6DS1Ctecah",
  "key32": "4yTKY1Pm55q36Cmx43T6GHFdNyBTTTAK1uF7EUUSSabuSZpbVeisecBz1VgjGxgoPvbWYpDYjvw3xyJm9HbmoEZ8",
  "key33": "4vBcDWHHeAdftK5ywtpyEFqRrfPgR92akCJremVksgGMTAT21Ro5JvQeExq3djnARG9b7NwY334X9zZeNAZiQVXt",
  "key34": "25Ns7kKLZadnXC4dWTvYKWiffypVBXhLSbzjis8A55nD9wusmSjBaYd6MogFqUgMrQ4ZpxbuyXziuiY3hsxHxw1e",
  "key35": "2zaRXqUvAfQiTCTPBvjCzmjDB5UpEGa7QiU62WpriZ6aMAKtUrQUSHdmZeLewfJQYu2HkTWDrwDoEB5umNmewYZa",
  "key36": "2jHj5jHPLQADj8CuWU4FYfST19LnuagqRPAYWTGWF9dnJFLmrgjp7frZfe9Tc2caUmuz4HeHJck3sfMZXfBV3xVc",
  "key37": "5o328AL6szC9qmicBxHwg1ouh1RhQrwHovq4VC4ysiGQfUcekbcqChpfCBkvz93mGJGAvjVwqZqDRZgv9whgEuVd",
  "key38": "3EWEokWW9Fe1pkhzoWHirRSjeQq5WRRxUuBojr364uHqDSkeRUPLA3Z3UbKrPYk7wvvbeBZY9Lf8jGGMy8xHrkGx",
  "key39": "2KWyh4acJ1ovCY3x2ghRcTzXwqbKej1nnseESuFwk8yPapMrNc2GwKN7njbEtUnF7x5KGoXjSHssaspfVqMbnpgz",
  "key40": "P8XE8xgexBMjeDpPijqUDgNouiFtqvW1LMNZkhGeX3iZVoM24vhyA7sDRudi5vk7kxheBVweLhzPfEVfe5Abq2E",
  "key41": "57693gqP9VceDct1686ze2H98WxHQYMFbqiETUtPcYxPKh837NCA8Q9L1pVuJwu2hsqCmZSENiM5TvoqotmTeJDU",
  "key42": "2b8DyZYF3tYeG33VDWJDoJUPDqXxAp4TcCgnrcShuEmWDhhTmhRutNUeLYQUqRpSbKVSi6qo3Spvxbi2QZU7dyC7",
  "key43": "4ow8Autcj83wHHMGQ3R7vptMVKNzoQNg9cdWunmJzodY9NSjx1DBeF5oF7P2ePDneSWAXuiKcoGss7k96zNMgVCv",
  "key44": "3uKh2UxuQpFgSAwHT9pkyyQTLaSRnXXyFayRTRFoU4WdfydZijeDnY2PfRrEqbtp34VzFTiAzFge5v4Sv2sdMepR",
  "key45": "G3jBRDoTJFnavHK5eKXuWAzAHQ7TGY9tz3hzHo7SyPo561Bgv9NVsWKwvMhN5D8eKDKUtmDMFd9VdWzHdXbEW8R",
  "key46": "3L5AkFhrzeWHeEdAz5TFEh6DWCscN3qfP12stVcP3peLoNR99QS3N2fMaKztMynH5mBUBHCcN5TpWbPnVp6QVFU4"
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
