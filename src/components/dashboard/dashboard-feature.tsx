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
    "37bQzmA86eXdRvNgkB6cSKvzka2bmo2M3FEPbivcfrtcfcM6B3Msf1LvEzpvX8y6RN4D3hPPhgzkmkY3dr3zs9db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UM5mKSqeUcS1JMFEcr2JX67wMzBobWzeftz95VPgbyijTmtdhkwguu7hk6ixJSLn9jV8KPFEhUa3esiu8cbYk8",
  "key1": "38qU7kRDgWFcLEiunyfYnJnVH2BAipMxbeQn4e5pdXfosNAq3PdngLKoxfV9tzVsDbj9ddEiJpyEJF8J22gw5Vkt",
  "key2": "2GUbmPbtBYLhUYFqCgNdPbscXVSXTrZJL2WwGVMvE2tHawEv32JjNiS3eFoBnrUgJRYPAPPEQ4R3AVQ7YkUZGt7z",
  "key3": "QZB7vtkPKanD2uQMim5nCnQmgirtfwESuZJzUfaCnLhgwmKmn6cKDMDFXxM9JUVGpdQdcBoFKcSfAzhCECuoFPB",
  "key4": "2FZZp9tzwz6Li8Lei1ZNuHniu75dPUZUQZ698Re95Ri4PZRGdX24vpZkntT2C1HCTY32a8FQJsfREVWmxHNDk7Sc",
  "key5": "3hbouJcKGgAAqrvZTQ9KBawiaLAqWpEjAHGW5WX28XZH8VUaU1dLURLp27k8C7cX1Fjbn3mGAeBTBzY5ydDfLEAL",
  "key6": "2ca9eBhyWv4JzH9m5uFQjDsCxmJqhhPCsRX18nQoW1Tud1Xze2Vn2MTJX21wyQc1362RLGYAMK46i2baxzgAhLUM",
  "key7": "5qt2UehZt7Sj7ANznYdxz3zJthWPxS9Jxz1dyy8RP81txs53ocRuHQBf9D4crj7QR18TeSyoSfHRsMMYombTgwVM",
  "key8": "3WPuwcqjjS2w3K4Nyy3CjBNsrSqc6sGCkvWiiTVjNbwrX34vnpjpAUvPTVRyBD6h7rMwQUnzbSbpChb3B1DfdYPV",
  "key9": "5yBE4FpKrLUXXLZZxNsmCNUdH6FbCTZGaxWYp1tCWo1pjeX3d8pxYDaWhTnnAByst8rgDDV5KzntTJm82YubiEaU",
  "key10": "5ZFkYnpj5BpwX9p94HqWDVvtwSa5SaMtmgdYz5mK9p4MJRhPatPFtz1fgdCmtKHa8y9ErEsFQEHqGgcDHMAYHjnv",
  "key11": "2hdFGPYNt8breNCiQmHg53YpyXez8snSscv2BUYGthHRJJVspE52TNXxwrrfYKMBbsMeDfurjeid3fRG5xLb8n8y",
  "key12": "3PRvJLXsj5EEFEqd5iy73bedSUS43AwrHmxzkzPKdWGEPSTzp1hR7XWy2S6RHQMEYrqSpacytAkvKjKkjsRYE1rA",
  "key13": "2GyQGwKtLcd4jMxveGwcD3KdhcFwDWXNzmoDuaqbXV6bCHr93X3S6u3FdAosrUAgzxDV6esWSg45KJzZvHJAo5if",
  "key14": "4t9p6sSrVv1yMRkk9mjEQCuYCqsxfEDb3VH4Fi1XGaCNsLYPqyVuHCGQdj5iLviYSBT5GCXioJbzHoUKF8pZsaqz",
  "key15": "5bhsUZqsD3ws3Hgj9ZMzMKnjeuLGpn9i6FoULDh178CSRM6YHTUxerYxWcziRSJd5MDZ4vnh5jHUUWxFUQVGr7gY",
  "key16": "44ZZH7rDQUvy5jfgau9P9SrejL1Q2raznLHAd64vavxVj9PZb37TPeXgdAAdXssK2eDdmT2PofzNnL1TWvPR8fe7",
  "key17": "23qMUcrjr39TiRBfUd52mBWRDqYctz1EtGtAUFtxgWKo7WtGtJyxGZtv3Qxkn6wtJoXuFqMR2c1bFKmCZN1EAi9r",
  "key18": "7rNoD8ePPd8KCDmqo7mJSWw8Hegi6JH4feJda6f7xtumUdxHb9N9XVn82MxHyzUACDi4jgZnwKtM3CZFxUsuwqn",
  "key19": "4X4nGGRdvjLABgDTHrGB2zfvnsQQjAX46NgTMeCXi7aVG29aBM4AsmphFyKkjAUAHnGFp3iYucMZmzuU5ENFzVQu",
  "key20": "2ctfF91SftLphD6p8q7kFk5ywstdoyuEHk9EukFBSdXXTqSw9vjf56i8SeDaMeV5TxWKjh3uKqHZhJ5sufftBtF4",
  "key21": "5nzoWCRxArjPuUHSiq2NanzE3ZuExr3XcvbJv9Yek5VBQDsjbakpj5RvY8aBvAEuaT35Nn1wshVaUixYNNR61LCV",
  "key22": "5FiSzpVQQBnyDVsw7hLqGZZWrfgEXVQJ7D6BR2pKYmZGdwN564bzkgin8mf17XhvKZeSf7eSfhBvw5iyVyG151Ff",
  "key23": "4z8FMaduoftMDw6ehEGzPz9xamtunx7FjHUXFb5H9F6vsGWvWC9vZi2r16XE11Fm3pRopFoLLdCef4vAhAx3Snze",
  "key24": "5nWqQwWRxTw3sjzAZo4wDEowyzgsdcMbrsArzxvKhYMW3CvHSki8U3ZFBbGk7cXg8PpLReCLbcwtCrATZFPn7SMq",
  "key25": "BWeQqQPy5X2ZBXFjr1XYUxEisLwARA4QGj1PiW9NbcmQPzUnhaLrMb2pJm2adFXXKP4qnjgYxTiqiscVmejovjq",
  "key26": "43RuFopyf4bS91XZ3nxE7vLCqjZFDV36JoG8v5WJTQctGZ5cRUhuNAzJujQ6A1ERJtQ9PmC65K5aMDAZjd8H38oD",
  "key27": "5fFABSjhwPej81v2jERE5rk8eBbsYjBHSthbrqe4Tfh4zDdPtBgsyMBkQB8mnvnJANctw4TfeYpMFfEFVrikaqkC",
  "key28": "2kCmTJLo58S1rphyaj25S7yiyqBYwEB8ZLspaQJWop5F77K7dRvgJRXvGUUp6cdUz9g2Y9wEaCkyLox1GCyV2Do3"
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
