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
    "4YYxvi1e8BiPGGNwqGGPfP8tdjDVbp2YKutRZpze38aviyiH8waQbumPK2JWFpKCgRnyuPRJLMUTimLQepuUrb3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYoapRCHXwrQxUYMsWBwEYVXMQKHe7Ph3JBT4ZYvLV1BBCYqziHZRp1MXMt8RBefEukk4kTZgqrn4EoRJsQtJ95",
  "key1": "3ufhQCxVUq4cXRpBeYV8xkwyfBHCsFKyteMUh183ee7MdW5N6dXN2APvGxwHPsfVyoNLjRKTjaFEhV74BhLfdFne",
  "key2": "31aHrfch5n53AvvcEMdcFmTN5xjtMcG9iAceA5SAfHAKuaW8MDxKP8oFMdfVzrgjVLhvyJvrtD3VGxQm6dcUUVB6",
  "key3": "4wixgmwLUeRnmNwgxUiHD4ScMC2o1CZXwE3EsrXGpnY3imaiASXRJKY9qqm9mQvaYyKDQLq18ba71mEB5nZsPj7K",
  "key4": "3LQ7mJHoZcQA39PxJpiWPMztL7Bj5xLaRmA7crZN5F9Mqvd2S3ycvaTUBatRBEEEFMZW4s4nX2UPZDAJVbsJ1iJN",
  "key5": "46gP7YEn7kDV5zwUg41Dvpf5UoKzDHJFkbhhvKDqtW7UJTSZdA5BmnxfUh1Hkv2JZr7k5Suy1tw7ZReCRFnv8WP2",
  "key6": "3WpD2TKnFv2Wg4CfJUNVQtr13oLPtzpXz25rBvJHG7o7XEZKJkoiTJgfB8N1AZTkkTVK2XU5UMR4irxVnPfDaMrZ",
  "key7": "3r9mNynW5kF7YcBSKQJ3JWSxVxpASiLRH5kJRfsRc27UhoTUXybgNhmZeY8L9HL21RSuURKanY8hez42PT5DhM8E",
  "key8": "5D7NDAAqUqgD8ZGK69Fsz2AniuGJmtdZoTxuWXKauZ4NUqYtFeDswA673kXemJy1WStYwjKxWZrVbahCv6M7m7uL",
  "key9": "1RJDVHBXMizVPDfPaZLAs85cccJePbfhcgBVitBWwgkH1ATXpyHBFSMxsGjfMrKEsB6LWnje8XtoycJ5TXEa434",
  "key10": "5doLCsMw4GEZPWymf5sVw5HtfJrWbE5XumfTtt4ewTW5yv1Ttraidsaiq3S73bkYc2VZVYxKo2Tcd75YPdapksQK",
  "key11": "2mGKFzZRFyqUkZBgxnYAYaodmYVWtPipV9YBR4Ts4NQDwLHgLsAhm72iEwTkmkVS3y2jirAGa87fBhHzwYrhHam2",
  "key12": "5ibmUpWLbpuojczo1YmbMHAxnPSvrRGQg2hALBBzWM24aCpxB24EXnDbgBy4PjapdS7ywVP6qiW7G71t957bNbBH",
  "key13": "3S7rnLrdbdXzwcpj2aVFzp1moy5qJffTpnmJwBBJUCaSTcGh3SRhsNBofoinoKsqT73B7AwjFJQCDxHJBTQRGJa7",
  "key14": "5BbfARjEPTXu64crT9xMQv2yp2MRaCrKJXZVMk3eGkckWfK53xJVgwn2hc5xoWfiqBhdqpZFgiGFz59Znqt1cfcZ",
  "key15": "4S9uP8J164J84fag6igrxYzpfRTBB7MkEHegfyA7vW1stk7ScpRDzkfmquyJQDqxCr7wVHNezxr55gK6zhervmFL",
  "key16": "3hyfRN973BJpvUkRAs8J5gj6KJkVf2ZoDYC39Y8QjFW4uFAbsbXVMqR5PGekcSeri35LJq9fTrXPLgQFbhy7p7rK",
  "key17": "5rgSTXkvcLPzVoauZtyiVUfiMH6qPiedrMSQxWSUDgYcJ2vzZn4xNku3KJKFK9LzxMhyQxVpuJ9CpaZe7b4qrWv1",
  "key18": "4izodW1dLSj2KjtDTL5uFfKM9GcWVa3PtGZFDtBYoSmZL13wC96aN2JZPSKfcdVQ6eBd4FwxHkc5RjHSzDoPTfTB",
  "key19": "5meUo17bDb1fLs5UTufhU56TCxT2szfx8DfyAJAvjHPQX1zP9Zcg7ZQ61GXR45y6fQseXSVkEnpgeakqvoH1HtLb",
  "key20": "4iou4WeVFx6WyeBWxAtEaaDW9jxqpqiqZSCeXn4m1zLcmvwdU1QCNCZwBkHygPJfDRdr9j4DwMGqYqua3vCLq7pc",
  "key21": "494XQrLdxbnWTdY524jCwdBYKkyDoJRG5ku669Lu23ZdZCds74qTsPE31yQHyoBNBXcppGY19ihMYwAQhhHFU5GW",
  "key22": "3uCr7cXQnU7bbvQER4x9G5ULUYk8tEXhnYhQk8J13nhLhdwb7zj7XbRSJQkwrRaSw3sgJXD5Dezg9MHbPtgQ92hD",
  "key23": "2jhnjFkwV6hypNCaHdkMwZHbgnerzHRGShJ2G3omXxFd1hkG8rKdGNtCLiyULRnrFuN3otCZe8BxxD3uFBoiBddP",
  "key24": "44oUGZEGgTSNhTjMEt7doKpjTGB79vva3AJ5X4ypFK8DdgoE3dmKUWQGSvhzcAqNK7BGTebgYUiFzVt97sTaVbTD",
  "key25": "5F7oKpKtsNAP2rM1akjiV8PrLGwqyMKnaNtUsPrF5ALgdvwB3rT3td9PNsfFnNVZ2XQNUa9RPPGzACGE8x3A27vv",
  "key26": "6j2nPSVRQr96Q3RfBywLQtsi4of63R5hSxvfHYAw6P8AqErbsEQhH8HM5fGyE8Qmh3ZQQPCRG7rWcvvKb3MZMuF",
  "key27": "5QzeXaYL3dgJfnV8vKtHJTE6XKquaeqBAdQmuSLB43oAdFRNdFHGb2qEQerdzrfHin2HtBeiAFkp29E7G9RP96MU",
  "key28": "5aVee6ViYw86ja3aLWGcrRTmbAtyHnkodznM6oaGqn4oMdY572uNLymr43KYjdQBS2kqxenKHW4dedqYnvR7QTCY",
  "key29": "4tazqUtLvQoZgge5q9LERP2bBEw3wp5WHQANtpso1ctbG1XLsBKNvLSqKjUQYz63ofpuLc8eyjm3G9pHmX2PQ1Ey",
  "key30": "vXqVPeeUPA44ge8rjDwrkuUPuJ9qDaGFdbQNUaRRUumB9f8BRPqp1yGQvQhXY2XEH7VpmEuXEkC2WVasvD7QxqB",
  "key31": "5rCoNhrPeoXdiwsnqqtLUANYAicbb1btXk3iQ2msVPF7yeUrvuQuujgLyfRTzbYab1eN9BUXcWFkAYZTeXVi19C4",
  "key32": "4RKTaoYGP9EYZSALpdiCdDbSdpJriS2FErsFWgY1hGh1LtcVY6bbVKyk9vb2F3UBiKdW8jq8cs3aqs2tsGbhfpWo",
  "key33": "43YF7bziL62A1jyH1t6ysKQT6Yvgdg7L6vWFRxCKVRWuHA766BLNbkn4TcRf1vpvXsza8sfuG3gSssg25yEfyg23",
  "key34": "3MyK43gHV7ysqZB7UJeDhQF394pop76jESH2bTe5qMwvTxxaFiNYW6RaSC1s4qtQE7eJfiPhKe7wNbaaoQTa5G7k",
  "key35": "4zU7Zw7evkZPvbxuJLpcFxaThcXMRg1iYHqArtgvRyBhwgALztqJewzVTJ8tiZHwLuvh4JvxM6WpNjq1CfGk3xJA",
  "key36": "5LhUvYKLMJN4oiTjZVKjxE5XMghJJpRe13dXNpd9rtc5VnedvLwQTiSdPLWD9tqd4zEi25pBMiAURstidmE2t9Zn",
  "key37": "26oSwkkMFPvMV6MYyzwG67h1h1ogAAW1hSezrwuqUqv7drLCHVtbdqejrz8RpjAVsQbwYDhtyuUvZ7o7i5fGgFVY",
  "key38": "586AemKkbTrCqXP2rGsYhStHekQsMXJhgYfs1DDC39NtSApmLdNb3aihnjkZBmsNJFWYJPmZVd8cpoqGx12psF39",
  "key39": "4Wz9gCNdpFSjh83jSov9oYDq4fUywcrVqMECdxKzmFzxFZxEqDbuN4nGGiTCCPXDArNhGa8EZB3Q54RwZGWQNboK",
  "key40": "MQUPFnAXwcWQZ1wEtoqNYwtEMGpGkkCtMqBJsaesfUpBibn4rZeoaPnUWoPeM1WzKhUaxq8dHaDfdswio7roRQu",
  "key41": "34eLJSY9KVRkCFDrPaZfcGXhrqe7yUHFy6YCSwvDLrDG9hg16hBgZda2hu25UHPWyPYKcsaMb8zU4VoBALrXVvsV",
  "key42": "5H2rAVYQaWSZ5yBLs6gWBE1ytTFJqFPZJk7MM22Knjusyv7y1WPdgVwQA7k9Gdq7jNo6DNZSUkStGLaLLmMPEtfo",
  "key43": "3vvpMZyUuqcnecEDJB5wWWPPzPvwrc1SagqXvWAy6rervsewrPdterYNwrx4cp37snfGxKLeUava16zJQyBwgCx6",
  "key44": "389C7aB8NoMUiA9tRNn8HM4PZf7Tm1poi41YhNCNViC9mYiknqFBX9xYcCAbiuZCU4y6pa4jo2aq7CHkSCFLEAHq",
  "key45": "4oUwu81XzETjkBhyXMorHRpnCxjn5WUz9Bay7YQUhGLp87ivfRMSR3hnGWBHDHpCxPSfKijUQ1WxW4UeNiwj22iF",
  "key46": "524uraGnCaXiVqVCuR4dvBnakZaFBXCvigxSZ9XUozdtszHeqtRDyuUXDfGs9fFSbNW5o13tpwLdKUrAfXV7TDDe",
  "key47": "2dpCoDAqGjfjVRTtebGjByN2Nx8FQ76Ux57MTVHrVviouGe2UywCkF7baFcbQXobCjnnLKpdH5QcKSm8BEwFye3Y",
  "key48": "LQa4tUVQqw87HWVF19wFLM8dpEMxZCLHK21inYfcWwQpjH9pskeeX25LbPnGRKLL7v4wwUs35p8sX5nuwa9fEwD"
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
