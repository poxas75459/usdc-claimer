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
    "4EbEfFvHUkmaxwj1TWGHwDymNdvEHhjeHBCA7RLshYLRFu6hHoaVJ77FzT1dRoVJJ6hNmDiU9dwpVCFfWBjZs2g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQ13fyxqvgEuCUDArNhTpaxnXGD2MGT9VVo35SptsoYeRHEoTURmW8gsNYrWghhuyYi1UU4MfnHKsmdHXzT2TaA",
  "key1": "4qdotrBst6uJWGD5kuCJMjPFhy2acPfgzZZuB5VQQkRfcjuLKqnAsfju77kRWRipzrRPEw1GLNzAQuMmEPaGEUEF",
  "key2": "2HHkdnZXmVwSkwXmkiP8JUGJRSuGsw6EQmBQbRZmPhbjJ3Xd3ExEVPiDFx2oDVoiFjfi1GeuubVxjnAfjLZCdr3c",
  "key3": "627cUa3vLkmoCqw4Aay8pAUWJ8fcQoMqn57NuxQPjRKVQKh4RhR7Aosgb5n3TZt6ybZPv2exZes6vTg18Re68Fs5",
  "key4": "2deobKm28Kto2KPDeQ8TGLuAikWFUi44ER981de1jb2VsvcM7GCV7V3XBJUAtzyK5EKRZPps4LnCKab8YMoDdWS2",
  "key5": "5w61UJFTLaRrTKPJBhWVTkeHwzmzutZRKUDrCkzHDu8RaoNySrkxRSp2EYkcbYXDwkiej5bK2kw1bb69UPYC8YBv",
  "key6": "P1WHdYpBYtF4aKdGS3LWTdqf4KzqZamm1qnwGHzQRTMyw8i1H9qujyxjznB57TXXwAngVUvTCDXr9QvLJWcN2XX",
  "key7": "RYXrLT2v21aLSmmAWEHvR8YoQKeiEErNQBj8JkxPTutQjbGecFZFJ3XVyKjMeoMLhGE75Q6dadPWu4NuyR6DR5m",
  "key8": "3ho8rwiwoqPNa97EwGCUjX4WYoH6CtAtZvXRr9ocZ1TrZHm7pH18HwVjRdZ28ZsnQ8MJdaPuUSHsAR2NS6B77RXt",
  "key9": "4X1KKQuD3VbK8axj5jbJikNb6FuUDF6rmKSaWQ9Ki1b1wfZ5grBeynHaZen5ieV2bi39J32gkUj2XDiMJRm2EMNm",
  "key10": "2M1JXwMarVjEGGai9X5eSbYFnc6gwUw3uVtSC1NmdzsXy5peudxTFknp6r7XpN8CXUPY6hEYEF4QJ2RQ6A6uBpme",
  "key11": "a92EN7guycEkRks5tPgz7nNSXkiy1tWQBX54EgYCB34DAqRVSbVEMpENG5S7in8c1wFByN7tpTUweh5a7tZ9BrJ",
  "key12": "G95XfiH2jsuy8RKdWqDfvKoDy6bXbhL3kBUnC6d5v6CS7uoc9SBctC5FgK3VfUvjppRKaqyQ6DtB6nrgWrVbXoA",
  "key13": "2Dix5RDLtxnuWfmyXA7zCjHo9mtreYsiZrnZE761UmuAE4JPYLkbCDDe2C8Uh9Rau1EDE5XBbuyHUamw7GxoFoVF",
  "key14": "3494tZDsjG9rVdicXVMyVmDbTKdyrm6ULxmji3gSyemWS35f92x3AwtwZsh4Nchk5iiWb8HaJyZS3eRsvcpCoDwe",
  "key15": "41jeg87bZnbha2YnvvG7X47dn5uZPpzbFNHDecHpXmmiYdaxb3Gc3mz1nNrCQzjEWj5CmVvhbmH4VkA3nGSvshdr",
  "key16": "4Arb4cfR3zZcVAD6DpbSgcwaeaJbzhY55JzBtoeAGgy7ZwdZWzpoX7FpZCD7TYhCo5R2YALwc8jRg2gePbSitnMt",
  "key17": "2JL1P8PbRcUodDwFQVDprJeBpMU4X3yKLToMeGoQFife7d6pHmmYn1B8xvc6NAjoTGzYZaV24UfsgyBsBxwLEZjR",
  "key18": "3TrrKqNxv1Ntip3srqGC4fYHQrwXLEKsH5bYgPH1nRBJZJpj9n42cQYPhn2kAuiEWCYhzYg762RHZ9UZEapmG1Sv",
  "key19": "zFcJgWgw5H4Y4WUzNAfnDb47CWvbj6uoSLytFGEgk4emLHi58K5xekANKpf8TNWkemkVD85MGW3ogXvQ9FpxcG9",
  "key20": "5NNtGThYYeqyagiCmWooA7HwYuoWc4worHdh9kmBsF3LXUTyhDJuv53WmHrCGYkaohYTGBST5spLjzbnueyoe3z1",
  "key21": "2dKihmBnR62moy2FoD7M2SFd6xD8Wk5hRsssbsfX9DjNVqBjYXAWQRorCfDnFimEZ5NpFoHYCabhwTozbYqWbeqq",
  "key22": "KpYYU6MZgd6Pt93k2QHD54wwW2BY7bmM6wF1vh1tcHxME8MQto3AAixsunLhaaDTSVNrmYYx1oQsjed5xkGVC4Z",
  "key23": "4b21GWSCvG8wXa1ArLHhM3FVokXPLKkegej8ShrViquJ6xPWpadNTRF3omp213dYr29PrmHNMiUv73hq6koxxqRJ",
  "key24": "4mrszZTzEpwShVJBkL3mQYsq7S4TVGKAY1qExMEFVBnCHe1rKX8hrAQRxEcPh12okYcDEvRP9MBBQYsE4xqoKyZg",
  "key25": "5sNTh4SR3VXz6rpxAnRE5qobaiPiTCDFN6uTdaKSXSJ5VYXMSLUPLeutPeszHyYbPgfn5k1RFdxiBUDTRGyFqnKE",
  "key26": "3wgeZReghWtcfT3SGc7SSZ4oZo9HyaJ1sujzBRXRFAqp1BzD9J6wrJyNp8K35u4SiD5Zk6Cx79MuvCs53wfCRLia",
  "key27": "Deu8vNrndxQcDiRAXpugN2NrF4K8c271ccsmFK8VphWBWC2nNKB7cQ1rboF2T9397hqY39AEHTTfZ2ecDn1gU7x",
  "key28": "4vbeNWQrKNAHHYEjT5TR7Nb5EpWbRgYANG8yPo285pxr3WwsGZUEzRdGw1B2nyq49tFfv6fYbb6PtThfFpwpHLhw",
  "key29": "3g3UchLZ9k7ZnTx3FaFpaNbwuocdQRdtch3rHrBW67UZQeJbLtjzQmaXA6cT4GeNNwC77P9dCmEapiy3WjT6u5NB",
  "key30": "5vwxSL4G2WP1R531PdYmLPxoRd3TajF953ydQoFTCQAeHdCERevTNyijHUFvygqzN4j7nfEGMzqTTxpPJ7Vg13wr",
  "key31": "XFLyAVghTywUmKWpLMwm98gBM9cUUSVw1DXBSEd8q1HpUjwFmFter7Q5xHSvg6rggojsH1APMGqBWcEz23UPUBS",
  "key32": "4DvUK64g1uEYb2mJYxLdYdddNGA3BedKDpNTkApkguNaDnCn5z766h5PMqmgjh1UWapB8JWucMFTYFCLzoMSCHpQ",
  "key33": "5PnbjXgZDUr4YbvnmhHrBBh6Pa9nnekVvV3FB26tSCzaVnccUxrgroxXYVZnNRaat6gXShadLZnKAcNZamnwHwev",
  "key34": "46bvebS4u7t1Wvt9P5LURKD5vRG7Wk9JPFxMn7A7Ud6BQ2TDF6kDXrcLXconEKqcZtuerD3Hw4BLb9zv5znBLFwx",
  "key35": "4gi7z9X3TXVD6D3dz4DykwUpmbtyYdVkYDNWD95gFEdgtpb16kVkCEHNB5i4oEdfBptc6tbQRX8ZPaEAHPoj9Nf9",
  "key36": "3YXamXH1QPoY525HyBMxEMuwYnnUozoaxZjZvUrpvHsZFAnr8n32hNtX7ouKmtep8gNJnkFwquiYn89sdbLXZkbz",
  "key37": "5MdZTTZ44CYmn876TrGjkEk75coatKRwBWDvvc6ykD9wLF8SMPTadTytN2BYNSQ65hPqCsuA6dzcoK8rSY13cBXF"
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
