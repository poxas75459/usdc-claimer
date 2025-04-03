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
    "3QpVzku7RgdJbRbp4tR4wYHcc4nopTf3Gx4rw37rEpqjGQnjppQTLTuobxXTxQHc5jcbVgjsDFQNXvuTpEjGGgiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ur1SL9cM2xs1tVbw4zuAdPr3tStB5DPZLcEV2siodq3xD2uhD6NRxuAqRSNr3r2fbXBLpUr6soGtZyfmDsAcQUX",
  "key1": "3yneTRyigK1AzzXSFkFUXbz8HA6xe7XYZkDV7B9biWJsFtrKdgBB7SmBEkfqv2vr5R6Lwj3NSGQ6rtNgGYd6nTME",
  "key2": "2QPE5oN6GEKBRJy7TZRRPXsq7kYzPKRzS1jxZvBgUVMPfDmJrbsLn5UQiEN3bn5K8484uvBm5CvRf6QKw6Gp69Fb",
  "key3": "4qj4VQfdxPFaKtuYqiFnndi7mu18vqRcguSXoNJohJQ8x5jHTSRMAukCM1RjbKDuKt1c1zUjwK58kCRPyxBXK9zE",
  "key4": "NWnyo4iBaWCCPipHFYEQPfgHLwoGFBeheCprBCvvBVGSCUQ73PxqZnn8J96xMgKN58ijduouttV9v1mAg7mcoNM",
  "key5": "4pxqK88rRSpEpSbG9c3A5yg3qfrx2xkhBNRt11HHtFVoMwdXPz3UkfuQXJ4EJVQQrQKHa985SdUR2k3tYewqhRTW",
  "key6": "txQjWu4nDLBdb3fP4H1mJdsyi3rMu38r9ir8J1y5LaduQDZghRRX5LfCQs9KbNDKCTCmcgWPYKpuoiAbhDzAQt1",
  "key7": "2hVRqRLAo8nuuYZGrqcDZGrXZ2R3dmbXUw5h4sFi9KRJtsBwz43344prtyViHuq3xpBbkaXjAGqQecWrMv1d4Sr6",
  "key8": "2ohvdBPBAH3sDmJZhdi3EK5dywDZfikEbCjrmo6vg1YpqN3ELRPdf1KrEMrfVYeTyrsE1WPVdrk82ePJcF6m4bbS",
  "key9": "4EFQUWbMiF4ERdgrCGjgagqTFBWLRq9epR3kFwfUJnhyFbFNGFUYedi7Ge9Db9Ba2TCnKMdJdcabHZdoGacyhnKy",
  "key10": "DGdssn224D7MY9ixSfmMXpr3YQiMZzoAS8mDV4mfv8rUdqhzfuz8YkMq7UKLinhiLNyW374xExmLUiSBdsqtJor",
  "key11": "5Eah2fikqUPehVKwE1A7tZ5DCCBgWmBSneaR5Hf7MgWd9FHyqtTA9zSFu811nWtP9scabAkGonzUeaVcAv9759gL",
  "key12": "2A39rHaz9fZZH5V7vtwC72184pn1jTuC4raJWYTtQiunHfcNHgwHcDSJagfNx6eHBPaJptxF8Mw9pHx9EoMaxxXS",
  "key13": "o7aWNM1o6fVdn6LomxNKC7WFbQmidbcFc4Pe9bJaTxbgdbfcg5jAqYZ3x1qVTVXQEeFSZgRCThYUXVgBKtoFaRF",
  "key14": "FfhGbkyjsufVvS1SWfLor7TfnJUiYJmvyGt38ZgMJ8LebM6319itRUqteMEB78aWwbXpa9KH9pfgEkw3Xij73TY",
  "key15": "3eXXnv7ABshC25sKckFxvPPbC9afaCRijnkVRDhZmVtFwJvkLFa6E7Fe6gmEtkkecoxACkYHfW8knyrvG2VTm2m4",
  "key16": "4ss6ojXpEtoWgG5icMTPPEiVoNHhoQW9ZoRGi4QfZgJG8g1SUas4A4CKTrfzc9TAc6UnTxRXh2iTsHXBxJCq2jW4",
  "key17": "d4fcxPqnMTCghR6E17bbCciywxJTeZzXkHRJRAgbqQXoZfm1zyjDN3S5HUWDrdYs2M2wWTeDB4MBBkpgNwwCvdZ",
  "key18": "5A36hDZSzEL6QWT7Nip3J74mGB1Rd5sG3sonXS357us5iAKgQ2ntPYEorrEopnLcRSR6KnHCTxTmdbZ5FvweC468",
  "key19": "4251Kyhya6uCzknPvS6JBi1SzaQRJqJTGKzPTbv4rGQcxbYNczPwWRqudDWnNtcyXXegS8Gfg4TzV96ToFDNdo7o",
  "key20": "3jC6KiqDjdrsPYYPP9YaN3KfRJXBpZciD75gRYbaFMKRP48yi6g9zJnentvKhDJB6VBF2EiMuYbfqmZLEN2JcmRq",
  "key21": "4HbFWyzx8b56qZYAQKpBpKCNQjk7WN82vhJWywbov6KwqK6XJZovYFUCWKoXxmw3PznUDHHGKbNebe8jGo8BVuDQ",
  "key22": "4ZxuxF81f83LFKwt1RE5sUtkcKLGrSHKmBe6akhrqL9x2xpyuzTLFmweP6wjiK1HtxME9JCxieD4pGorZxQzk5sS",
  "key23": "nWDTDtYsXjDEDr594jKZabV19zbg5L9pYX7YGQEmk8QQuiLik9QaErtsYkedLk7M3aMihDjYZA7EXZUc9rk4nKS",
  "key24": "3w8BXfDA6VB2KEUQsGAxhgwhwCpHStZn1PrYy3xWUQk8hBdFY3JAqvFPzVKpWXGXqvZYumGLCJoayTt28fLp9pBM",
  "key25": "4zZTZLdHz62jbH76gxW3ABZUhUJfztDnHNuYCZxz8b8yUYoUkPUrGg8PyY52fabtCAxEWkdNWmrSk3tanuFksy23",
  "key26": "4yufHSxmdEsrt88xgeBDPYLuDSEuMrpmAgLZWf1AxzvAR4XJxJwMohMuV4t6uyKNHPYKLdW85TGKqQffFMkX7ZDg",
  "key27": "5YxnZe8s6Vo1T1yzC1i2fPutzheVzGcGx3VQFvWBY8ogAkqsfvYnSWapopKu12VmDBaW7aL8XuWXAWRLRdYbNiQz",
  "key28": "2CdabL8uMGXk2L8VobrjWp1dTntT6Z8kQ4226eCNggDag761oWZYpdSehurFi5YmcpPYwf5zpr5UA7tWjRTrhZnt",
  "key29": "2M7SFsm8Ct5BWdF2nmG8DRaeijwnMEjbpjdfAsyynnUbeNNwXAxDnnBuinwq5Fs7Mf7Tj2StB1TaigKtdenF1jfR",
  "key30": "593XaSR9Yy7e9Wt9ECR1FqkL2nsdWEHRGWmWc8QNXiTE98xifHBC1ZAoREQzhWZVoPwujE7fK8nQJt1vfxPTJN71",
  "key31": "dBBSeN7CWgZkwEVsaCRQAnxjQVarrtwrf9NqZhFxFopGMNoDTtjWboLUCwKVHDNsrc8PxabRhENLzSbPECvfAuH",
  "key32": "3ndWRZP2pFehxq8pqotsXbj73VbXLMVcTe5HwNHqnSxFR5WzBhBRXobbXWYW6P8dbGWiEQ9TkyqzpWnaLjvwktBN",
  "key33": "5JKeemknb3V5tFXJDXYXeqXjXQ4c6Ns4hNz1KjtuysAM2cJ2Gr3CJPhirvzq3VAmLjPxdN1pNqRxjvbTg3km5Rj4",
  "key34": "5BAKjDTsX3RPGoK18n3KocJqVRvKKkVfHk2fPvQtw4opKqnkh7i5WSBfJp7QCzdzBoc6wPNsmLbNmskBkkhrTGxu",
  "key35": "5P7RCYrkFWCsu7NuHqHaAQNhMtk5gnxgnMFbecyxSQaaGtkcT1Z42Qxrjd7QmxQx3jUaZz9JFtohan666eJbE3mK"
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
