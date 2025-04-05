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
    "5qQnHo3QvbLmuDbvLSXKQmRFDXSqGBh8NHLY22oxzFY2vWjZCuRqgcUHpQLtPoFPp5BKDswpo1BmWwq5cKFtzW82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gmQUEPifWXs1dQWk4gN15NtUuYNgHcK91JRJxUzpR4kHekmRaQdyfJjz5PEgw1WBe6CFeSwSAJVkZ9obh6zRvZT",
  "key1": "qoSLWYbpz1o68AXfdUEsRj1emmkowzaAwxGmRCCij7RNpTejds9JmkvWiLQtpFkHqBkB2SMdbk6nRkP9wuugyiy",
  "key2": "3MLsKyq21pKcS6GXL9Yt65wZtuXpsmH9SC8nLv2gFYXxNF849b1LypVYJwEYJSd5WTYHP5qjktKJoa3kwJEqssE7",
  "key3": "3fzW8qb3qyHQq4JyF17upyBw2cTM4V6Xt2VEmZmNp1J9d2pSsKNvbbRmbtp28LiwzG6mFL629FX6C52MqiqY2DK7",
  "key4": "3SsAZjynaGn1VETrPiCPpT3GZkL7MKJPx5s1QBbkJ8x1t4LyuyGEbBBaABUxiVKgyASpE8hEyVUzWKPaBfWbMNFp",
  "key5": "4eGpDiE3nqeUT8g53uxT1qziEjyz1t3Ct1V2BEdYXeS2bR7peheKKj9XaU85FZyaApQVaGBB4jhZyt2RTA9Zmyz4",
  "key6": "5PXuMZg664zi3WxDYueRinUusUbZnSr4Pww6xM4k9g4i3pre4hxhqQSbPdC8ANfEcqyJTjDsVhTyGzA3LLtLGGKT",
  "key7": "3kwdQ3uGGw5iKJrd2REW3sYkMqp5FpYuXypsLkVXNxpzi4Hu8tPTtesPD3SkCaQq7nC8exXT3wXcvZdJz4ZKHiFq",
  "key8": "ebeKxJb1w1Jp33UYhjuMaUrbn33CgwHMB99cES3itowMTBtxzuFzBoA25ovr99E9aC1cgMhpH6gwTznTMAVSyoQ",
  "key9": "ZdheAkQdMG5GicWZzjdKdC9UYuuCbnAvGJbUw6sdsxshUnkhqL5fMHHZto58VWNmmB8R3Bq3wugoNTTXkmrVHYT",
  "key10": "2AZoGinR1kL23Bs2dFKcRfw1nSLnRBjbwMYz9CDVtvBNS7z9BuTcU3uh7HGQXMxar9qqqfzeis7ERxC53iAYq81z",
  "key11": "2i1bqgmHMqY2Ua8picRowmVZL7QjvXqSRhdgG9MRPrzoTZfoCAp4mtbYkSxGEPcKT4CTw4C8kALmBvavkwXQM8iV",
  "key12": "5Z6W1jm4NrsYwit31X6aTj1tcPDRSnsdoLMhxaR99Ka3zJ3VXxD26qSX84aCFf9qzeNBSnu3qoQ9ad8Srr5y6n5W",
  "key13": "3NxUN6ALhcbiocfCgKRTY9QoLXWSZZWZWvug5cY9pc1K5JPGdGhEFFNwj5m9HALiy1aAH7CLKgFGXV6Dw95MzEMQ",
  "key14": "25g7a5GTNCUxguenZ5PcuS7fnQeS78jey9yVsgfut4kmFUsnTAbY8QL4AX6ztS7FDyHbQ6CcaoxBwoDybtQRS7WP",
  "key15": "4KuJ9aK9C2ng48mqnJgehS9xnMWSxv819pcRkL8VAmqprfq764WPvBHyJeNf1QZQ5JseSRA7J1n5CDeL4eFyJE7G",
  "key16": "2dNt7k3eQVV8GxBjLgsghW4tgn9RgJMPdaWYTxPGzT6XmYCc5hhPK6JiXJ94XoARm2sjVpvjr3zry4q5kk9jRUqh",
  "key17": "329wN3MNYo2Zn2nP61RfQVVVa6h5VDQch56MmGZrtZUh4K8K3YVLARfVuPxrf3b6GqqABHy3Uy6jmWUko7jeVCgy",
  "key18": "4ZLbUy9aKXHHCtav2rKpEE49VMk7kfoS9F1UZY4EsFiEctf8LPDMpzwBfWDyqkauA2N4eBe6JTpmCdiDHM97nAVi",
  "key19": "41PENwZ3r4GWEjxVYJAo3z76wmR4BgLBbGyGciA94Rwp7GT4bGGKTVRuZLjYCBWeNghiQ1YXs9g5oLVWwn1YNhtF",
  "key20": "HwF4aF1foF9ZcKwtAeFF46ATeVSZ3Rehjsa3FmwsB7aB7hmV51npsTdDJpT9u35pxNMgax1orEyxXkEqJvTy2gt",
  "key21": "2T4kgCrup3AiJ4CAnPD7hUUD5xvcEzeJ9jhuqCUaEW3x8qJmYHVh5zre5ZS2XVZoTK6F5pJw6ZZgiZKfyfw2T9KS",
  "key22": "3jFSxRgCJ7hVKormReANToE3L6XrCJPXmtJ8QJmXbQKmd8attBweia7QS5YUjkNDvWLC413AbErUHNkCLpXKd3a3",
  "key23": "rvBMCETFVzxKx9S6Ygh4jhbDN7AXh7cD7x3QkQY4y9CcRdGZL9iMnxbD3hnjsBABG8tnd1WEDmPPdu86MXSq5rE",
  "key24": "G39NVWLzLs3UU64icQo95vHPAkotXBKk4QGezoygMhksCHN16CTg7U8dSHY9T2UQgKL4yMb89f6jHUDfi6ijPXY",
  "key25": "64j5LoXx3ui6j68PQ39cvfYQ3JGwHaRYUzWJx9HPJqVri9XbskE3HnjVgkfHCw8fH1RA7f6oWiK6tLd9MgKmjn4J",
  "key26": "46RtFY4PTVBJwhvPe61kkqyyWyJ2oNizkdWEeNykhVk7HRf497tj1DjCPirZsn1RBU9HyEUqEJ2K3WV5Puv5ZRvy",
  "key27": "2ByWiSPpwQLrE9rTtD5UrBkDBz9Bco8sbbC9hXWm1a1qr9tL3QfYu1aEVsDx8tqcQhht9uLX7ChTfAscp6ENMxFX",
  "key28": "3wzCVLMePcVEdCNrW8VNtzSKMGrqDUo7YE5ku8SD8PSmpxetwitQKmEvk9Eup6XUpTsiuFaheRPo8jq5Kj5q4Qx4",
  "key29": "2ryLzt9J47gZnjR8d49GBJ6xHPpLLXPG7NqkxVjVXma6yhmFk1uLBcoQ4X5q1bBRmDujU6yS8fN74U3xiwkYAFph",
  "key30": "2ShiC2NG7AyWy7LhLPLdrovX1m2X5rCGZYRHqYpomWbL8QkSVSDyPpbo7HyXJWcHSwr97ta8ybs6EBtceSNPbmXE",
  "key31": "3VYMr3EDUWA7mLz129yxYP1dMhNSVeEYJ5CPoDDBDRCsD3UwEGpyDr1wo8rashA4Wz7MtjMxaSPaB8jF5xwzsNX2",
  "key32": "5zayPGwU7zXiPB2XSZSS4qxCNKhnRAJxoov4i8uNQ2e2okxq8zppMNaMyTEMFyRZdHm9ejvXpUcqjb9w2zvx1SS3",
  "key33": "2idGJiXS7WVEToRH43EN6Xv9SfWwJ56dYnaRV1tEXhKaWebrrvFCmEnYL5rudXdwoxikM1yLh7c8LT883YJrEBJP",
  "key34": "43yXzFoFDbXsUx16cEZCcaCb6cbqQy24Vr72pHFVPNFeRqKAzztTTWqTwS2hAwqa1km1snCgHH5MoEPpPhbZpfgo",
  "key35": "5BCC8gHEag79SphJkrTPDW8WYWJUE7C8jexVfYo5MApxxpF5MmX5MEyoMZ5SeAWZT4KeAxJF6hVUF24nHV12LQgD",
  "key36": "KwW2123vsyDboBbXduQLRRGf1iRczRAo4pgaonemnfDgZnkPjDdHoXzTXBBvqcoc8jE254LmGbVuBB6bk2VCdu7",
  "key37": "4UbatSXizy84749wsKUoaDB66gfBaS8S4Y6X6BztjPLJiE7pfLMDSkkegVEYNMCvceRHN8ZKJ32zJD9Fak9Ym1R4",
  "key38": "64Jx4R9DwZA2Jzs8exVbmH9b3wiK2ika7TqELjdZ4pU97btipX2GKme2X9DRFX9eWXoQevT35GRCrsPxVJ2oWBZf",
  "key39": "3X6hN3jiz1z9eDfuLPeGyxWzspeWiVGxxYPTG32jh2hwKBnMCJhRhSHWp25uanrFfrDieGkFEQq4iGxobchcxbe8",
  "key40": "49MtnhSfFKx4VTqBVNubntVPEXsVcLM6XjauzC43u3brnqkWVasfn78JoLDdfbSyC7KLtY79Utwf7eMSWFfbiDpm",
  "key41": "5HiKJcPe2MJaqU5poRd9QMEDKyx9YELdZi44ZeQVffJuZpNf94rFDPiMLA1iaTwGg4mWvHMLRsezgureeZAqABRG",
  "key42": "kZvABbYtswnGmnhzUUuCmFbrCv6CbLSHJtFN6pitdEV3obksp1mELGdUEHEwEamu4Zo58RAXWRvb428Tz1V6MWM",
  "key43": "34XhDWtAE5u8zQKng6HRpQUoxxReU2c9YuZbToL848KJKieALKFzeQWgXSg9tX1y7d5gmdiD4njpWwcFLfQDSKxr"
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
