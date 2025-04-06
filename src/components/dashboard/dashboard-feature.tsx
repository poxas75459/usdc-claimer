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
    "4fb2tGSZWfPXAveXfi1URruosq2bM2MBcgTi3NNQuSSFEyU4mNHLie8NxSFPEKtxa3be1kWR3iE27ZkEUwBE7ksb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sSx7NVX2beQL4hnauzhWTwpNxahcwVkgKGrueuFbpbJrzmz3c1N2SN2MCu8QsmiWaeNu15PQGGw72JyZiYTmCUh",
  "key1": "36f33fsGhNZZQRj926Mcutfycpe7ky5vAChbnM4UQi6DBEyu378ABax5aFvGGfsJfe6KCcByXy1HUaj7gcAseHSL",
  "key2": "2qk8a5s64fuJLMMKzbZLvVw2qpRpb2SgpYQsgqRZSaLMyt7pHraZyfGoPYU8gFFwUbsQzoJBqATUQ1sqerUjKQzu",
  "key3": "2zKFdqbUpNJQjVRwwcSNWMNSZs8Csi85Z373qCuUCoj1wBRD8w1MXzRV4Aygo6AJcXvEbFcm3kgmbnx5gf66SvfX",
  "key4": "4x2fVEgKwD56vyWtdBJA1iJAG82MKGgbcz631s188PQEvBATzkUnfQb9bSzbMGRyaxwWUQor2khycZfEGDHT5bd2",
  "key5": "2pD5pe52X62odZA4mZDjvigW4Ng9kHKqNdDwWgMvDKceh6K5r9FnXspgkoqXRVj26tKGdqZNVh6USJQedi9hPw5G",
  "key6": "3tsvAKiECWmMzytX4UxSd9T1Z1vGdqtpfw11ZQhvZkEZmMeWFoopHv2UxKge4sMrn6XrP6Fh8Z36rup1XPeMs5D4",
  "key7": "5neLtkTfLLxk32CyYCLimPp57w9aPvyjZxX2mt7HZcPCYYNgnzjb5xBerawL4Er9orbhq6eDhe9jmnWpnQBLPY1N",
  "key8": "65zqw8SrqwuJxoSbYgBGas3SCEMhE3GoXi5ZHuCvCf5s6avFWpHd9WWRnWERFDnro3mcMqP5BCLdMFSDA2dLqVxi",
  "key9": "3ULuvoS5fbJoZPCRciZm42iothB2otCQ7vhuYB6c33eap9qAyrTYTMb7mgJdhqhxvsQxtULKqtQyYn6onUhX1kM8",
  "key10": "2nQrUMcHBpua7N7jwktykut859EJzVFhYGgemVBmnmgatQpqr3wpuCydRan4KV2XRKrjTNcY2ZHk6TUfwXfYkGnx",
  "key11": "5FjzDWZ97RBvb6B2G41b26RXgkzSBzoNGZjN5c9CyFvz8nduxwV7GijQw1aA7sJrDdnmbM1o1jfgEWjqYfL7xHz5",
  "key12": "4DjJf2driVJxgoRdemaUUQ7iiMvh4bTsmALSxw2btZBjcQBbd49SWNmQR8sgbb4wqtbfcfaELEV8oeTE8poML62h",
  "key13": "2PNw5wjsk2Xa3ekTkTXeLtuaKvepgiVm9HT3i8eMDq5RiiDcqUDc79i9Q8LCSVXHScr7u4s9BsJy1j4R3mieQMTE",
  "key14": "5PtTZdjc5yXjyN7fKF5KKPdLrrUtrVA5i2MfqXP2Da49RjeH9VcYLH5i8jwZY5zmN5duHK1Z9j11X6dbRsRHFv9d",
  "key15": "64NZQmrkpoUtduQiGs1DHy8ZtsZ8qHW7z2omYc4hbQXA3UGjDjkXdZntcpuDA3CgggoqhPHvoD4H25tyzFMGAJbL",
  "key16": "4cy4yXD4RHYhZRqhsGousWG4X6PNJmF52pLvzdmD9XSdiJHW6hCd1eiU8yCnxTdqjV35i24WwCosgikUVdKNjDjT",
  "key17": "28f8RXpdHrpdwLBe6UVpxHXe4E8WKFrQ8NUtbzSoUFs42FDoaELKe5HiBwNc4oea5qYR7EuG2HuHknQWFe2D5Moj",
  "key18": "5tBnv57ip2dEmsTPqR6Z8rGQdFYQ3gEuGYtGzAKxaT9MFafNMfyztRzTV2YGTwmVvSPqVPgxopJtYeR6oDF7N2oc",
  "key19": "5fsxfUF1HbfLXVu8fm15pCTQYXZDJcYpPts91dpHvGKdQbrkq4G31qdyHQuFu1L7LNop7vgMDH7zEa2TCPmNAqPe",
  "key20": "4r46HS2zzt3Pwbks7Vn9cgAT2B3GeZTu8hVz7tCNCGDnXfJjYpzr8DZewjAmxjmchvDT1FJA3hRFjgrHxT1kXetB",
  "key21": "36aYS96ZaFSvxizFvTGVBc9xjWoqr3a8waybLHxT9ut36X55NTM4tVbo1rKW7Z461qUNdejiVNaT2xXL1AACUXPF",
  "key22": "2xt46CWBnPGk4iLUxwDCuuu7oBi6oF11yfxm3sj37dRNG6TwbsdFxWctbxYrBENUNGMdNzKvscos21qL5zoqFnkv",
  "key23": "2fAAoWdznq79oHnjs2GcYgetjudkfRTMgHESs9e1Q4uAxH1NpkAKyPFhEggmaDmSgkNmGzch9SwX2Rr91TNPKdn1",
  "key24": "2fYXCLins2fnEe5r2PMGEpxexWJyasdfiYDbxRmbRRjG9CRUCZPJ85fYxBMaCpXRXM7WeA33zh31C2ggVNJs98wc",
  "key25": "TgB5VaVuVwg2AQ2QnJvs4sKsNNK8ja89SkpF1CXMi4EPocYhUSNHKmEVUoDMwn5CRKyz8jbwrX2i7N1rw52bMGy",
  "key26": "27hS7spKhxGAvN3HDNKMJExfi8z8Z3ZVDeaT9iPre1ZjG9f9rHd4UxxtfUxi31YNPHsiojHrmSs98izSihgAjCHk",
  "key27": "mJ4X9qUEFFPL59E21SXdNvikc37yu4kD8bhgJG22Puh1TXD2jGJY8SZXoHsaWzdQRw53SZU7x475FqUTpWCTZNV",
  "key28": "3HBHPExDB2AW5T7WdpUkBySyozHBVvasctHvHHRF3HegespSwrgxwTzu7mdhprhj8A5k7pnbmRuxyLViavkcfm9E",
  "key29": "5gWY1DRFDCBZ5SJE1vRorwMev3p1gNKL1gGBCBXFdDKuG857uxj1BNuYGzj7S9ySG7SfMThrQ8qkAkQhH1kKxhQc",
  "key30": "22m6Jd812cRoEmGM2Jvx97f3LzsyzkBJbewGhR4EwQsFYueJ9uRxZmaoE4ZFC8NAxWn8ctUVkgQfrBXL52idHTYq",
  "key31": "4tULVTZwUF1Rfzvy7sM3nnECeuARH8xHngADo1y8hqQiHERfwBaDhSH8dzJ3z1YmrgjoKh5jj1AG4bL1rpTNtmJM"
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
