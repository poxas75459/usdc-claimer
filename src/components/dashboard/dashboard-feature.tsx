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
    "67KCDPAGdxBRSueNBGXT4wanqJ3k49Z53iSgQo91VFGRBAwT8ixh2SoUynxZ23v7eWFZS1BDHJ9SVsUsmYB29XYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7zZxvQVSAeF7pRttxcuXEGeRHT2ewDVuQfmtU7fc2Pj5zLv7vgKbwCe8zuKkBKs8P8ih2Ex3kDhJstnPcmGbvQ",
  "key1": "3mXsQJjULmk4FNGqnbcyKUcYArHimEzgG6iqJ6xLL797zQdW6FGDHLZFCcRXXq6qD628gsZVhPactEmNxqQ38hbo",
  "key2": "3QNv6T7cdAEbZsgmPn7U9kaKZG3PWCRn61jTQ7RwpGcCjKDk9SjcDuUJuNjzEemxKT9g7BxEQPfP9BRu4vHbn5nd",
  "key3": "5qEMm4AGNYRQGCfFnFjqd7Kh9ByhgLwqJsUbDM7shfgbr9m6TMGrRY4nd8KTpC62MRPP54YzNkfc7Cw5h4hp6cYc",
  "key4": "5s733m3Ghe3KZZfjkYFzfAbVhy1ynqcMz6VQtDdv2Q7yqe33YnswWcMnqQLQQWJghEugWZgNPwuwQDgMSCinXFA7",
  "key5": "3DZDXYweUBHF5a3xaZsmZuoWqsWmUXsDfRtSKeD2sfaQM3m4vtsAfWqcoBRzqW9tvps9M4rLWyAzUapsX59Fw8sd",
  "key6": "3bKBbxszHRBiNXXouSaXb5AUaMayhsYKHTL2JaZ6LCbv8Ec6W3zvdpomPSMqzhcHE1JH57tH9hFTvBCuPaAsvLDw",
  "key7": "5PP7irqqMxF8yAe18KKgXnFquDa2MByksTsAVY9Di7jJBYu6e69z4A3wvp3sqtGEsu3dTFtmki9z4zW8nVXLWzdN",
  "key8": "4kvZkDmarHfM63w1VQgpp9U6RQHwPH1q78MvNQPMRPdCsmprFcAdNCdvMCe5aaDf8H8NWESVQL96KcpdY28u2wvi",
  "key9": "5v5jM4rrQ4uJp9EKtg2JoQp6kMjYQn1WPjA75EP7f4YduNVMrMfi99h7dN3CcMGp3o6zo3QnoWxKU89jymhYSRp3",
  "key10": "Sg7jeYUzbqQvqKynCvczD3rBVRYbsxqQoE8mRGHW76SGYn24u5NirSy4etoYqVUijUxnLto51zkfBB6k8BY2zPU",
  "key11": "613tVpPd4WhUYBSTvSnTri6eAM9J5jjMHuw2MrdzvqqJT8Yu3LHw5kPYcJzwrgmtmCsUcR73kx1o6rtumntfsC6k",
  "key12": "CjfYpF7fAgB9mTbiLyC9Qu7x17UVwoKuDy4ZHPcQ2DxgUSzYe3dchhgjk7dFBZNn96BaP2MFzHs8QW2SKQLrp4w",
  "key13": "3aQSiarc8xN973fHHV8FQRh4zWNQwMykAqoLLNu9qtEkYWFG6P1rTMXD83v8nsLNeDVoJR5n1E8W3hGRpTwLWJYA",
  "key14": "3T7Bk6xhcgGUQHCmP9YqXJePARZBfLYmFRd9ssX3nJnf3Njxw4Bp6NsuVLkkRk9A7Wp66tGLRQMDFavGsZFTvfDd",
  "key15": "5gnsxHFSVgtrGVnK1BpnAAV8QkZCMfFjLofsBWhntCQxAFZkjM6YzUiyA3FBzW9MVcwGJ6t14skAX4sYHYwivaAi",
  "key16": "61kixpGJEYJtrQAqpRzY1cb7dfr9BAS1KaiuFAW3P2vvAy8ek1RasmsdEhSY2XVLqmVqhxV5AqZW4LEx2nyzwb7t",
  "key17": "3wi3AEMruj8w9XYFjKEuHkFrdaEgyYCyUNDBzzr8baN8qpiSEkfij7LrwAr2YooLWYZ3cAoRBYgcVLriUvYy5JpU",
  "key18": "2CntzECznMPwjkUEWkpZJJb1tm2MGSwchT5Su9TXHHx9RaSCo4ypCjkoxuRLsNMbPhM3k8Ah2gwhoVEYcaEPH9M",
  "key19": "2QeiMBE3rX7sEiwzfUjGmD5ud8XPdXmdYVE2WVUo5vegoNLY3edgKMnhJuMFLWshr1kHC8RbaEogXLsSCMopimB3",
  "key20": "5Tr6q2krBNBjpHSRQxfZ7aLvoZKyws5nWmTL3K8HfCyP7qdPN1eVVFXbBLVz1H2ivj3QSdjWwsrrnA2nSmpgBq2A",
  "key21": "4HjchV2osZ6PwNB8KPqr2oh19NZLQ6oaUiCTVk3G63isTYwdmtb9VfwkZNdsrJXg5EdigQ7tpDcBhiCRZPh4k4eW",
  "key22": "5KKisQE6zsLsKdtoEvATWoYRcF1PjKaU6qZucs3PuuF8otJJ1Bpg5PycGwzZLfmt6VK8BAEn4G6nPbN64MieQDyT",
  "key23": "2pkfUb5WExQiXHwK8V8pkaVdwd63YKYXkFfxoKtFmGG8MXqFz2VjsrZivS2VoKfXoHa2yH3fCriVstf98udVxJEw",
  "key24": "63B2YZEb7YqGt6DUhVE3yDdgKRfa2tGB2o3wyUaXbuGp1VMFcMkSC1jfso6RpYbvCfgmcX3bjExWGKEb87uhXbQt",
  "key25": "5FNrxnGGURw1y4NMX4PHBtLrVZqY6uDKaCyjBhd3s89nRQYjPwpsisd5ecUDoo539SWxSvm2NrVky5A9p3UJi3GP",
  "key26": "21Npmvx5Bgbu41gHHcJTvz3kAy7jGQqV2TFZkkFXxeJsJCGSumjj6gZCsVRGpuF6FD4rhNypy4dMEtWvaZcw2ZPF",
  "key27": "Uv2YqZP57JmGspRETWafvzABfDFnw5Ngtnr6PePoKY5inm2ttsEekm2HwyJxytSmQNR1mmruiSUvc4Vuwe4Mtnk",
  "key28": "2WoRiRNztxX36JMtU1Mv5qny3y5ukS36FP3yhYo2U3nU98PfLzxmrnJVf5syc8odAqEL8gU6AgrhQZtMgK3t48EB",
  "key29": "39rYuNR8CBAh8uoaT5y8Po9h58h4yezG4yvgHmdS8URsoPibjFfHMaupggMxVSPJYnmrRTwEaWGGv86mPeu7C8Yb",
  "key30": "4f5a2t2NX6qnNSuJYzitPnEdwZiaHr6uubA2ZBxAX5R8fv7uzHM68VBEd26S43tMdhqqxViMgg3aoumKvLuNzLDb",
  "key31": "3VcFs4YqxgMnMHDCxDUJGJQczqPdfXhB5LFYe5zkgyqUTRzUABvj7NiwZSffVQicKXwqcVn91FAy2FcjB3mTQLVj",
  "key32": "5Hi8QquDzsNaEBqUEUQVs1WDnDms8hGAP6ttVHdaZXuC4Z1T9v4cuu76mbixmCAfjiDq7NXvBNWq73pF9vqJM1ZA"
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
