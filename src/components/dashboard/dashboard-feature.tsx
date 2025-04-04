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
    "3JDkqZsQuhPSDkJxSL7yoHotAosaKhbLSGyTFJkofFcPp7LgBw8vBrkCWu7TG1s8QHcS5hjfzvr1qEa6mmKfTSQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zo5bapGb5aReVFyXc5fcpEGq14bpg5Lreggtosxffb2eg1RnSAj88sjSwMrCmYD9FMirG81UbZjDJMgceYiMTFP",
  "key1": "5hQBCRAHwCNSJuHd8rxac7u7tY3yvKQSRxTgKbFwBeUKfruPkJMZn62YaHBhGEtwsdGCugsdswj414ZAB8yvif21",
  "key2": "65N3YWHmfLumwoMLSzWMDQGkHr93GDDhy7pE2UZN2u8Gi77TvwVPY1ARf3wzq7T5e2NuWzig8CafkJtyggMu1URT",
  "key3": "2nagF11pSD6mvrkoRTnwVUN4iTteDp7qHC9o3WfSmK1YGeiUQDNZnX5FtYaxDDE8QCghaWFfGWVDKx4YkU9Z7Cyu",
  "key4": "4t5c8PhbmdsYeG2TMikCmpMBGGaWADB8tL7FgCBxgaKLBC7puXcdhBMCc4yEUgkVDCgCPPPUw8N82gZiurThwe5F",
  "key5": "2SPCdAcUaR8ZwnGSZgm1QJmwwB9ETZjUMUNx9Jc8opSebyvjSbgu1Zss3g9XmvAi6Tj37J4b89bzQjD5upU9iDNN",
  "key6": "25SSvyxdAyKf8LVxKVBmdimKU1goie8xEsBtwfsGWSGbc4PvvXnZ6ak1ie3Cu7N9tDF9q55X2B6kWLUSyfpNhso1",
  "key7": "58bvXC4DcrUjqn4omy63quXZfsapEtN8EMWLBxMaYehKmX1tSx6UAsZfTz8qmz7L3z2udnu33Nzca4scMJW7829x",
  "key8": "4PSw4nwPJbw6VBGVdXkviwBjtg8JJuiRQbMcKyfcmHX9aKnSrGFDUHn6dgSwnPfcxyKR9Srt1B3Tr5N6b29DoYqM",
  "key9": "5nuwHYi2jfRA2kbQtEjNHfHVGfSDMXerov4tPCLtyEBxXUFHVxwEMd9X48qJijPS1DUSuiaEBtiDqEGBsCX1Sta6",
  "key10": "3hGSFynZQGR1NcnXVXaXoPUtYJug5qmaHYs53nyRiCX5v8xmTkZnXadvQQFYVpxpWy3pDGcJZMERMEZHkXRbYUHx",
  "key11": "5QDcksdDATizsPSPSCFdAEkoJpzq5WL9XGkoPeUvt5Xjit3R93ri6mEDjFDNdB27i8CQSb12uBRwjqoG2jhX5Gjb",
  "key12": "5wbeYmTw5iFgnBtSpcj5qNi2vz5cQrUkB3hDteK7sCRDnHt3MMchB86HHJ2mvWDLAeEBdn4RdRG7P31NQnTwHCzJ",
  "key13": "4vijenaeMhwzeqC9qzqj88SsCRj6Y3PPuCbBi12RwZPfBRB35eshcmyMLQaoigmdYEV9Mx32a1JUQRu2PXXg1HvW",
  "key14": "5UeucaPqMv7wWMkVJ1xELqH2RCC5EUmkE6VYqvV9yRi9PvNFJDwHiTHL1tkX7JzdF5JKHyfNqY63gEAxx2ogV36z",
  "key15": "39SBYortNexRgcUcZpJzXpPwc3PeBafiLoeVSQHAVXnLHcNHjo1AWSDjCmx58fKXY3q9qaeTPXeZ9J8HV4FpnjgJ",
  "key16": "2jEZ6osDf33YkGaB4ZZQxCvAJyKoAvuKgrZX1rctH2c3upc2Rk8o7iGx1cfgQe3vsSqXQgrMgPtH4x2oH9cVEqEg",
  "key17": "2roNidZ4BWRY12ft6ughUxkBFqaAsGa5iKq5RjdL65361fJ21DU1BrFjhXQrFLG2seq628fq7KFnfSgWTL8WRFrH",
  "key18": "4y7JkGaBzkfs3DqaDP1G3tbTTcWVUCrmAWKvgmwmMhXoqVoRpRc39onkAuLaGsj4xMQdZcg6CC7aKYnkREe3Do71",
  "key19": "YcexoPazB3Ua5HcMgo7SG8Xz6tkRcbGuUWBDa1WLjqoNJZ4cU37L2UAUa7KQVw52brUX5jyPBANS5FpfUcSZhrQ",
  "key20": "2goYmMvUcmd8ZDfEFK4KtSSAetiaDv1sNetpQ4CSun1oxf7Bt7D5zL8a4g24eRFkVWWD2hA2PnzWinZ5NwAYHab9",
  "key21": "4UioLoZ4RHLyM2ECUiqJD42sBYjt9ATSkbrnEV26Hnp4G8kWEhVe1H7Tn79utXt42XHEtBSw2Ac2bhpWYnafyJsA",
  "key22": "49Ha9fJUD4e9HrSPJzSUevvroXLufsTVmbvKFJDcUbMVKQonSCF2H2gmMDDr78NC3MnComoK6zLCpiwNtxwnukk2",
  "key23": "3e6JcgQFv5eb3nFzo8UpPdZEqYdcbec8RhdrTeb99iB6DXeMKQ3G1p6r8AzAys8byeJ8KSjPvVoRM1wDQrpVLZSv",
  "key24": "5cca7jX12DTduGZT5GF6k3Mx6UoARsKFVVvxRLVBkUx8b7dcyeZpruYyX5WsvyNsWayvmJTYXbdkTsDsqcFRrhZ7",
  "key25": "38DGFW5KEcMFjD9ZcFCJWCuKPcsJvTM5QNyWV3zGuQZ5FUDTeYfDFTecvgT5ZaenqP4eGBDgiQTWiQMHLUGG3aCY",
  "key26": "4XCyA3Fz8mLE9qByYq6cYzVFkQze2CBR63siHG5KWbeEEMg1FMvHuZhLifbZHiSpHzsPXPoynXMTvF1zeJzBm31i",
  "key27": "4Y5kaHshfj5RsNAC9QpfJqj5gobYuCYBNr4GpjkRnJkSmRX3qzoqyVnwRHAzoGKECzYRZL4kqKPUKX3Ybbsy8bjq",
  "key28": "2ctrxqyRAyFdp99VQpmyU719UXEnpyhyc1xDPWVynMJBK28GERbZE5xUCxfeSWb5zJ2d1NpcuCqnsMBQf5HKnTMn",
  "key29": "4ZpYrkCNhaPRhv6gmjtxheE3zobATXJAiJvpBuhxjW5hikpi5vV39hTF3RYnVRASUttWoKhefD9PWTTgTwgdLvvW",
  "key30": "3SqWEDXSyC8SCzPkF8hoVaiVeRpr9tmhx3ej2gawJSjdtJZEJQiUhgCv381oRhQpHdYks9eafSwyTzdGFRDvGTKa",
  "key31": "3QRzKoyNWiS4cTKraAF1hCPz8ADN7qgTXNAaok9FQqDGwMwN6NgstW9uHQkM3CBtcBHZvNqkXkeXoZ2jFFv3LcBe",
  "key32": "o8wHwQVVfNvqSibu1EtQ7ogVFGtdP5imwtXoyo3KLf8Upwj58ZyjAQTjr4crQPYRnfE3XaMKqSxYFcBFfs95p1m",
  "key33": "33Fs5g4k8qYzqDsascmcfGLEL6cYCx9Kove6G7TThbqtZQZQ2dbwqkup62CRyNmo1nziAvvfa14x9VrBBNqp8rxp",
  "key34": "Z6mggrnyrFMiPQ3eax4vimbEUhCGYqTxLgjY67sGrJytX3j9nTWgj5NsZcNApQ6ErpdPifXfdau8b129BV3YeUK",
  "key35": "41JjzLH2LxjyVdQuSczVTKBbbz7YUgEjGuQDC9FXLY5AuMLLJxkLsqm5YiihquDZK3CtCgShZhVGtgeY19faqQmM",
  "key36": "3RV2Vfv13o7FQ2EM7hnpCUCj8WmmGwEk8qd9mrNZAoDZPghdzpPHZWHyG5vf8JHSjikFMSRhDic38hamqWhct4Yu",
  "key37": "3ixYv7ooAFQGY8dFmZDdYQnpSYHJ7yE1c4mC1xMnvxq7pn6qQHoy23mGrmX9DjeVhEJPjVBm4aivcNBzWwtyHYAm",
  "key38": "4jWRhU2hmLo8nHuMuKgC4rzeNMZXJ1bYEynsE23HUvpegGTcZCeixFyD6Z5MrhCRyuASBK1MjaET6etMqowyZ8Yn",
  "key39": "2iTF9RzDK4sUn9opxd948azJkQXkEmVWiHd1Wq6jJU6D88XrARDqrm952FpjS1E9s8hRpmDzxBMrVmd9PF24kazu",
  "key40": "4pLuasD95aKxLkQ5hX3wWcV8kZpzLDshWqBz9ky2pRQzpseEU8ECCFtCZwPX31n65R5AohM1Kf6SunW31KhJT9fN",
  "key41": "3zPjbAzrSNLHt2AJVsEFbbo87MBoZepmAM81BzmiweP67BzjtGsfKgdApMyB7x9ErymEBQokdXMpyDxwDMPE1JRr",
  "key42": "2wh637bRTjHx6xjnogWpMNB9PTP3NvqeXXmNMsDoK1PaNfRZZW2HUBFViBDyCVF73R7WUwbktCHb79xCgQoLoGzR",
  "key43": "38777fQ8bgJkuv1DvH85X4XMJJovGpSZmACH6fP4ABYSFTS78ykfkZhEZL1yWYBLqUU7rQY7wcDp1yxnUDN5ATtJ",
  "key44": "5XbGDs453Zievk6ztTV2xQoek5RZDpuEzkReRQaZTpLHuS1Y6m45dCvXxAmR44rvfPEWpJK6iGtmqQTWnTYsxim3",
  "key45": "65LANAz3ppXsen3N9RFMVm99JtVgEeBJ5WeKCTWLcW3ivzjYp6QmUTsH3kzBLWojj7xvXF7Sv3Fdj5pozgze2KN4",
  "key46": "4pyACZhbpBUzppcmPR6BVzdaehXKJ3W6LFZjw3rooyT8zJboLUQfxbBtfus1bu3hyaaN2vH3nDJQt7YNsZtS8wQ7",
  "key47": "3ymLLefcR6Si6Rnp98YNPUGDzummtgR848qWCmsQpfdbL2v5qPAjtGk4o2yWbYiRrsYDDy37FEeudrRB15PJ13qp",
  "key48": "33GWTCADhgaxVrLusthK4bszbmFqcbkVqyPkUYFtEw8GxJb9YiduV1Vm772WefGHAzUemW9wyv4XxD2AP9jk4oeM",
  "key49": "5DbMnugB8HqP4tftvKjw5Xa3Xckhjsyzr3g55md258kPzxmiL1oGeJtVANkTJzQ2wfkdJXVtYtsNKJGqNiVD4Pev"
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
