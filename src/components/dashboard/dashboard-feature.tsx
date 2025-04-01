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
    "277r9gSAbvKzLR3p4ajwBWdsmMXDBiSw3vzfjV7kjNxfyvmQjepYgEWcxXfmBCuKcCAD3rPN6chbEoKFXYWVGcmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Yza5XrYqmX8GVRfw8vJpNeBV3rHewYnccSVTv4qeHEr7EdJbVsDYjvPpBbkGTeod5whdpDSFZaQHAcX84bKDfQ",
  "key1": "Cf4NSkemMK2PT5atbMumWNR3eXVdwGD8FkZRNUZdjyRTVrZo4FyRWoNQvdJTe11SsjSuNwa1gPdrY6kzEQGb1kp",
  "key2": "3AW1KuUnFQtrEVWRh7qCfG2WRtp5f613YG58jegMAuDhBVZqZsQKvxpdDoGiTRo5sawHF89QKh1u4mWMAQ4bDi39",
  "key3": "3Bx847LcBiw1eqt2opoXBtC5gFHU8T46yqpBbFrd3P5PNU46PsrApmuGk4Q7YJRtT5osJdRiQoZCWXK6tL7579Ue",
  "key4": "5Nyah89ziZHqZnJkg8ot3c1fg5G6FTZ97jpgLynDtNmS9fPMtvqG8skeWPat3svSe5vGf8d99rYuVmRoD9JS3jjy",
  "key5": "2Vbv2akciF7dGeom2vMD7PDZXzRBWfKN8c9s9SLX4GqPXXPMrxH2Jz3324GX9DcJh9aCTxJzZS8DJmeimhvfQknK",
  "key6": "9cSSpz7Ff1ZWetuGYDgWwgh3HZKHQZZmi4xkXPmFxwsU3qzNuSKDggmL1oY3DDkZNmmqmP16bEXzEnAGBogPsA7",
  "key7": "5GfaE4EWyUEigj4mXrrdczvxxPN2xPVCJmsb3nsuCAriuHTHqydF8EwTj26brMjAmeFxgkZR6fC5pCTkuXxKKKGx",
  "key8": "4iY7stC76cvq6oVXthdH8ZyhCtAnb6EuNWwydFvBw8jeBr2eDipuJ4hrXED6hFmwh22NMRfeJquiCVTPNi57yjCm",
  "key9": "4cZg7jW9RgNCSSkMcuHLNEX2CBD1DkY9Vaujc2egDJzhtBtg9qUtR4dvURtuabpAoKbz3kFCWYgD42fX5BstXoZa",
  "key10": "hWbFcsUsJ9iDM2ne2pAwLGqizYn9o6EmpNb5ofzQSyBeSUP4ZdSfX79rF2UXCvAdF6FG6VHeAP6hEFcfjyNnxbX",
  "key11": "2CJvaZGxWfygcZ4pa9xBhFNhE8exn3Ztf1QMHBLT2Mw2kD8furNR6924HDEStjdHYitsaMZnNFbzNBG7WL152qsA",
  "key12": "3GquVzxuN72vYhTJ93xFQvt9Ct27FXDatMsjECtqvE6gwPKkwxkEz3G4Kwy3fTGUa6SoutyS917P3V8fEqJTAY2v",
  "key13": "xpKHeRF2uXtr3sKs4JNPB8zHTFsxcH247dwGjqjCL7incqMMzyKNenXmTWQWV2RZZRf6ScmGSRBGfK3d4HdqGCw",
  "key14": "2fDZ9abfeqTf7kboxRZppcHDV8VrUNdUgmL31DaRiK35JqSp6QeMaqmFUHzPMmUqgffdgkcArc6pZzmqBCSqNcFg",
  "key15": "W6RjMZkXxdqDv6r9CNDPT3dWYcYrM27a9c45JWAtsGoCHnsRVm8C3Da71iUczrZoARbsX5Rf5p3F6SVp4jrRvtt",
  "key16": "2PXk7NksdfBnRfVuFYGr9GiuX5jVr9BQjSNuHX5rqvPCDrSiWFnDWPmVaY1D87qGJnsWQp5A83F6DztVXcCzJboy",
  "key17": "4EcW2Mih7onHKQtA26w6oNYzb1uci8G3wM9j1u3NC5WDXbL9CTWXnWwke9XUVYsVyJf8a63WYWNEX17vrnV1gX9K",
  "key18": "2fToays8p3R5g9Z3FwmjtVqqLRfY7jVdxouMpZpo17sR3CY5hnCFAjpkEB4cq8tyao89ykS8m3cN7xrdng2BPNGV",
  "key19": "gkx7zwSaArqb2DYfxrvQ1mQkyDEjqm2QhFmWcKXXcsRwZeVAJiuDjUAqE25vEwYSQvBduqDdmtXLPnVwfxyY3Ls",
  "key20": "4ov4uVUDXTWuLFA3Ph6LDpT6E4tNbWmkyKKtHiVruup3hBNf8zu3efDHAdEaX9eXfCVKM7go8ph59i2T9tUam4QZ",
  "key21": "25TQvcJo4xRCKX2Vn7sLBtC2zcf5Uz7zdgkastzqKCMQ2qYaqCEVFmth88bLZqDps6AwT7jtq8qV7qEVKDSSrQb7",
  "key22": "5UyWNZoTmXzReGa2J6CXC4MqBQHBQ86FgxNiy5N8YKVWiAtdjtLGThK46wno7ArNaQKuPuRLfcEqFjeuPMbJtJZZ",
  "key23": "3PF6owRHsdJW4Yqe8GX6EdfdpcHSNhhViCXWgFLv7qacpG9GmvytoXq3bgchDSFtBxaPhRgHTGDqdcesr3PTRbyD",
  "key24": "XA2Yc5iSzkaK592tFm2Jv2AirUoGtxPq3DyM2bhxEdvP5637WoDY4Eyxx6wEyV9xrioNspxxBpV5EB28osP6yQ2",
  "key25": "HPsdHKyh1tUeDWJivt4Jmbs38RArdmaEGeLHbzooobWQw1WfJXPkGVtWyF2gcEvFACz16zFAUHQyXE7yBsochji",
  "key26": "4MVjMSeYc2Hn5xAXYzGF1L2P7GbEjfs8DaL5zibyHJKsDtgnVBecUz7TZAcBPZLSRM3C375S9sbi1GvJ6ktQ9Yn",
  "key27": "2kK4uc5kYw85Dmrb5fNuRkDMb3ZCovySWKaKQgmi6mUoUntPdaT9tTYXTEiGfUy54Uw1Yp2nrZB84AnU3mm7fi4K",
  "key28": "32ErbiUu53CvZnScmcvs4SLtMz37Pa82r2AQXZaoXLyHYNAzMkChrN5Yfhy6GqEpKA2xmLA7rEwavJuyGzRWQFJ1",
  "key29": "Q116J4J9xJDuMYHHLL6V4FHykcpd4vyoMrg5hsHob5qX52x2A4NRFHnr4v6eNyEKbR3G3vuJMDQbos3tPoqFazs",
  "key30": "f79mtTyCqfinzZdeV9s1nP54P7UTeMv9tZtohV4YYqzMWNDzmY3yfxWBifTw1AvpgoGuR2WRrsEBW4ambwx3DWX",
  "key31": "zkxrXeTiiNvXUwNQMABn64x84iZc1kbhnD952jTcehCmGr4r1EAdmYAchFCWS9PJ65SR3GggZ7sU3ZUPQKnXxe6",
  "key32": "T2SNGFGVCv3bQ5joHdUsUqhGNtkC28vRTmDrgSuYZGDo4xSzCohT9JwU5tLCuwbtKw8oN2aLD8JvizL9LaB6HVW",
  "key33": "LetAGbvSD3knSQiZ2Zj8qsHk9qsCMNS4v13v3TEaoYiSwgzoqLg6ZySD4bH4J8Tovmyj6Z8roTwbwfc5viYnFKK",
  "key34": "26gC5oPPTmdo5Xtnru3KR9ntgzWgxTRGDmsMyi5SM8wm4ShYMY1Ttf8ja2VSwhp4QSSfdvGznyRdJEzB1GynQWhp",
  "key35": "59yP4s6Wxe9xAc6qx4h7woacaAhGon6R1ioQcgRc81pTxXbCdxxPZn5HJBeHVKih5L2nbdeXQT5KYjTaQJti77C5",
  "key36": "E9NFX1h5TAqq7Qxy5Hc6TqjBmaB4gYq6bTkiCXQDnyYsef7w5TTs5GAGMK1DSPZ3RMuEct6VmN3HH6awuUwnkiN",
  "key37": "4cvn1EnphvqzrZsztdQ4X7NLkKxf2oAkKUt5DRaJU8FzkkXipL2bB6TXL6u2q5ygSdoY5vp5yV6WXsc6wUzCZbnb",
  "key38": "MMUeCioZKG6Kp5GugPQgjFDWaFKh5nFcphrPJt7giFVtueNDR1Pq7xh856rtaugxgMdtMVHgbgQCv2R8X9XLYi3",
  "key39": "foBpjB5vzhki9yCeVewUKigK2FvcrZBiUk7wFasFF9VBBs1AuQbH7rJVhvpLyA4qpvtay1yD5Xc1exEoCGk1b2F",
  "key40": "4hDmaRqCASXEoRKLp2hdhruPhyJhtry3toNP17z89mucUEvae4WJiYA82XYrF2joVSw2fUW7LzcYZ9notfLqvi6x",
  "key41": "37t1Kd7RZRFbUMBx8wpGgoKfgvtB47kcBYyhSS9yoybXFsGeADWFpJvnnEumMZfy3ob5fnXkMAZadpQ5LdcyaXAF",
  "key42": "2Yr8FsaGZY4rhDVpqP2syehM6tXwsFpnVHnNibNdgBSWgSvtznMMooSzUFYRCoMvF3MZEWyEs4mpobi2B1WMHSFF",
  "key43": "9LMb3oa6V3FEBLqdaAFB8fPeGJZpA4u8avaUoFoLpjz5DNgBTBLp7tF4cN2A3F7SpDuuDf97yv4gpgZayD2Sj8K",
  "key44": "5cgQDBkLXbfcDC7VbNeva5zBbcdv4tB3ssT44Hj6kpuySF2pQ42YrXGcbtoUfTcxBNNyJAtYZLzpssgTL4ZHmeeb",
  "key45": "3Q588KD4mJmbPoBGQVvPZ7jUJ9yEhaS4Q712rwpaFpDtFxDpRTVz28XGeJePKxz9T2LvMd8nqbRcsUT1QXqvr5iy",
  "key46": "4NFS9AgMiVyxoXsarEHC3Re5jDeqVcLPYFAADyKBT2nNoK3BzqXX2kpfvg8JFfw1cC5L6mtnVuCHwbFkzWS5qMSo",
  "key47": "4LntksHks3hJc3zo6BGm7R22bm2Qy4DzkeiGskNwJzToVMWpMgNSJBQpbxsN1Y9Tj3snWgBLnYY9SxhQ3WQ8UYhC",
  "key48": "4osT3ydeVVwepHQDNhLTdLczwAQJbus4ZXUh8d8RhgepLr4mbGV6hj9Ue4BAjd6komnnLY6GtMV2fwrAPNP3YzeC"
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
