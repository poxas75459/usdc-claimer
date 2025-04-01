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
    "3nsvW898k9C6PpxNnd73fJhH9vwrn4jpzYo5Eqz1kkVk9k8k5kHHU3fCYa8rbfQLZDimWop2iqTSQ4QX8SNd5Jqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rxHLPDuxPaopXd87cvXkavUzev7CXwjcPdLepZHGjSKbLh8SgHRLG2XMmvrCN7xnA8qqneMRVbyLtzTBsQjrTNJ",
  "key1": "2Uam38gpaH52AG5q4oX6xvjb5e3Hd6WASdGRXkdB2SzXYpWjThyR3hYHWyjUNrC6LE4pc5UYkfocYwks6DVG5n4y",
  "key2": "tmPuUudLQKajVnkkr2BnU3YE91DbJtki8VT2pfV2SJjGs6v8nArsh9VkwZK79E4mJBEr1opLWsaNzQ6AbM8kCpg",
  "key3": "3FvK5M4jB4VNQETVfqprWagmUxSWLUBY9UthcaC8Vf617zATFTiQrUgi3wvJjAgiTT6ZenEh8zdqfNFRN44JTWNp",
  "key4": "3Z9HDYWR1Hq6ZXDqCerMX4CdbsR2NFMdeP96yZcWp5VjbBVnYFFq4v9CjNfqKNbQKYGU6B6UvfuHe3Ryduh2G1bX",
  "key5": "33MbvZqdDu5F5PJ9rfMi2Zy4QcbN3YDd1sSmjp5xGZpDewnUWEtnxdB9nbbCNphowYZqaakgj8JadBvZrSpMQknd",
  "key6": "3fv1iuwxn1zmwZ365dK4E4k23oxAPrqzGWj4nWznAUy3ryhD6MEgoULVHYN79XrzaAtqhcVqjR8tzjdAiUBpZxhX",
  "key7": "4d2aaD8MS2Te5ESkScsyUejYzmmRmX5QqLNXfBCwaiTB9DzhBuvizgM7MEcdZkbTgYiLckRMXMGN9HFi1JpWd4hh",
  "key8": "3WHopgtJQB6TcYHpD81SPVxYQpQzzsnkX7HCwtahsVUUXopewVKhWaB7LYpiH4AtDarBUHtZKDA1VyFjvECvSx7t",
  "key9": "5rywvZnWuF34xAxvQ3RvhPpAJxmw9aCdXyoqo62ffkMifUefyv843tRhzZubSEfgXHTatduFjtW6ehzQzqkPWt9Y",
  "key10": "3ZWkecyrXaKEJtZdNazYTCU6sjUpnBHy9ew6Rh22dHU83L1837j8bxfR6RFjwBxLp12AD11vdLsFZTyj9qcVECWk",
  "key11": "2januosCPKmDydAZQfsJ8nvCtNN8kfdpef2BpMP85czvnyUrSLj6tvYyRQkXLWmSW3PvE2dzQN67AfrrbLBtbJCh",
  "key12": "2GAiuWGWQzCMMBbj2UBcMMbd6AVaXuANMGbWdLKKReNoE9FS8BzvBfbGcHRq8qu8WSfMHEjkMyQxBoPiKAAzLEQF",
  "key13": "3cgkFhajgdg9dzyaF227TerpQGKa563JN6vhKkNqt7oNshKaaTTun4BGnp3U1kHMBGqGd5aFoTXDciFsiiWJ2Xyt",
  "key14": "6G7jf6DxgAjk7nuXqQY4ADzcV5ppPqVvrMTt8jU5MJeFLuqffVk6ddKvei4B5zgMZDgFmpAUXNZEjLKpoU2VSz3",
  "key15": "37qUjQvS6y2S4hVaPiieYjDMXhy2uQfEYfWx6TF35dZGS3oTfWyj6pUURuaU5WrgArrFyFX1QexLA4UxT6eDNEiW",
  "key16": "46hhpw8o1HQJg2wyVLzffwc4j9MDFVaFVDiLFmzPeXzumVC6B1ahhg5uQ5tot2wgdPHTdeXSKJinqqmzd8NP1bfQ",
  "key17": "HsYDNwF1mCwcqmJMb7sVUVt7Md356JSEr5UL6UmVnbwVEX4v3twqkUVeRWnJd7rtQTJ6kVSb7GJGguo9xXDE5NF",
  "key18": "2sPBdxHUcPSUTeMBtrw8eARC41Zqr3hombrZCyZ1A23PsyKAAmr31KAPCMwNdQb4nLNafxv5RkWb2yxj19vETYsd",
  "key19": "4ygw9FqeSRcWoNpPjrH2Gfns4JiN2oWiddhXSsUpEfnyR2mqynkWWUFqSSmACxLRghLPS7ntFXWvxyFkJL7XFPoc",
  "key20": "3kjecNfinKUrTZyynLe8ocuywZx7t7LhiWQLiUXdXz6U9gJyX6gJRMLWbLAB87cH36Wam81GFxADfWoRHFhb8wJd",
  "key21": "3jBYdjKfY8KEL321MQJKvgNyfbaCszHeqW2czLf1vZ172mYVSc85yGvXqJrUCyppMHkeziygPwiPd9RVCLQWZqnj",
  "key22": "4GifaLyyiJZNCSLa4PwXEpqWb87SBxNz3uxdeaWLDNmRTwLSBzQnDTysRFKVqRvbnqfvp9hd1xDnUet4xVvQwHwF",
  "key23": "3MpjBrrMwVvH87h8ZjHrE6YeG9LM5x7PM8izsatUBP9guofbG5HiHeRFKqgbgJScfW9JpwTA6zAvgv5FniaX8QS1",
  "key24": "5hzZe69sNExMM2UPJcD8fCzCkQxDJCW7RresE9WDbU6FBPTx89ybAzpYGCZA4oeYL2YoSEcFVc5oJ84iqkEvMcvp",
  "key25": "5w3b2NNZFgSxiDdC8BwXJEAirQeKTAoNEsigD3AVMmvmRqndMccAQqKo7zJqqamPqJjwrMo14kNys3RXAjHLNXsD",
  "key26": "3VGbRQuVGMWx14D53FSHykHVuECL93kDaTD74BBaWrGno4MF8Q8hVXZFgNYJGTEgvc1pLi93c6H8WuUrTdCWqtN7",
  "key27": "47vV7XwA3Afu5hXS1aLWuTbKUsBN49VoWTeHrXrFh39MZDzEHN2aQQv14TcVM7k1mCJMQXQuJugLci4u8FBsjrvN",
  "key28": "5B5X3TTSfzXeb3W6Hkzqk8e2qfys4BQKtrpM9tFVjAVtWUdv9eNVJ5C9GyQptd9KEwVbqEobR7dcNDqZb5mQ6NDB",
  "key29": "3GdKUAcN2SmemXmzsrmEGzxJW8ZWiy5JT4zfbY69DgfJAETBB6M5ZBSBwkNXphsd6vJTwrSBs8r44Ae3vii9z1bE",
  "key30": "2ron3KXCcTRKNmSCsVjVd5Cu4JaZ7YWeizN8rDhhbjLWhWnjjSZT7qpzxHDQVs79ifmGrfemBm23miUbd61ydDrp",
  "key31": "5kXRd31yt7jQKCqjv59vWmD7MigEacLJSScFiM1iuo78rA7d4vTFkVJj9beWBFMDi7AtNNqg5ZJTwPDuV2MY78Fv",
  "key32": "ZBHbMD3fWeQbSULqPjVgWCaHK2Rrse7sxbKYAxvGEj93WRj42mWegC66dXXsH7BmSbFhKWchsSqLrRpa8LSWDtn",
  "key33": "2tduMPBZC2uk51VfvRrYSTbPwrnXAiBmsfrUJjbF77GKq9bjWTLMXRWsHe7g76SELytSs5HGRYoAuF3fZDJ5H5jp",
  "key34": "5JWCpT62g7B2BeqqzU491XxuDQ9E7GPwP2Qu25yqX9uAQx57gRNRaL4PRuzJjG93LdQc3rxAYpodx3SXTEvwLfGo",
  "key35": "56FdaX6JGEbXsZRsFvEdYbxXLN35UaBybrMsNtAqsErYUsZQ1KXjeuot8zMEdPZ1FGGsmSSAKeJ5w4kKSMXGSuL2",
  "key36": "5H9hA8BJD1qKGfcewhq19uarhzPdt4MdyJBDBAMgV3St28xdN3NEhEiihkTDNsezVunXbAsWwqngtBPBXrB8mBzb",
  "key37": "2g4w9Xek7EWU39oH6pYSQ8HU8A7czBEKoU4y7SRBbmsRJYnmdXGyAPivNfEAX91zd4scgfND2Y7Tn462YdbjuUZ1",
  "key38": "wm7TtMDcKfG5vWo1yYqkAgBRrohyP1qjuaLxa3vnpgtYsRbybVWi2yegoJjLgZzZWTZeV7tVQBoYZLVWiHfwVTc",
  "key39": "5in82yPGYQ1uuQgvM45JTRvmMFhi7UxPxvxCprzXBTq1PHEaKaDp5wcb4hozojgiS2ueUV6emCq1PeAviw8oBvxP"
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
