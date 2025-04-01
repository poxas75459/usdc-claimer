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
    "3dEbkEhY4uAUhZWuuFbMeVLLr6mbY2s9kSpXPDdsa3uwMmZM1VkmdKBMqi13u6GdBsxZLt96iknTedwpbGFSRYnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTB9J3u575tY1GWZXj44rXpPqBGmNvXdTCnZzg38AZZWKzk6877iV5kzmDKKzdM3wXsfnyiLRavBnBoPiYH1EcF",
  "key1": "3RYoX2QLRqwAhU5gvYJJt3k9FGuiNCyS8raSc4Z7GMLfwMcshizfjFHkyEye2BM8LFnGHnWNzYpQUbe64tGrQiFs",
  "key2": "5kChYNVAHJCjDuYgqjavCNtD9NZj3oUdcPPLqEgm6VqgaQtaPt7Rb4MqJadxPvZK8vTEFzJWEuMoGqzZfb4J2xPy",
  "key3": "3MME94n382TSyUB6ji2ZUjGaQugKAfNCjp9tLEb5EiiWNBWfNdfRPx6cuBMLjG5Bx52qs8yHct832z8ahbAFuQdc",
  "key4": "aDQd9Lpyi3RbAukvrwj3aNoaCtup1Eetfwysecd4t5swabPtzjmWgUS1istGmfKT8igDiKQ5GFaKskyp2xHEJSX",
  "key5": "3wWWgjk7hNuUbA42c2txwXvoYDyJw4psW8H7cyEjDQa7SLbHw5gqWXRAmACvxxZsPpEP91YgX7uWmAqypCyg84md",
  "key6": "eYruhXP634rPqhfTjWntqUjQGQYX2Siyf9B5EarZNpcKnttpfY1veLQrYZDgAm9FQks4JskfHtmmfGn92nc7S1i",
  "key7": "27ysf65NxX7oQJs1mLKsmD7USiH4GD34XZezyF9JrjatFziART1k2bC9FMLcZTNdESCWmopXNCwdmkNaQWGMbvfb",
  "key8": "463Wk32iY2FfPSdeN1kZHujsRcLZV18wSjVwHctfAC8Ye2D9EYsVwNjTrTQUcXNg8guzzYNZhFcpjzyMh9p2U7cX",
  "key9": "v5b6kP5Y9v6VajzSnDqW3kGxfHnoppyNEuZubvZJoQuJjb6Yhf2su92DJhrj4HXdixbNgVz9L9ikqQVKizoijgC",
  "key10": "5NnF9KbG1FBpZbBAgTBZkK5puFUE98yKUqxXVXFdDk6tVoeRZJPjkTwUKSLmfPiBcXaDu2iVvYPn8g6ZhjFqiWwe",
  "key11": "vvTWyPawrHNX2mFEJuUXHXjrJKzuqzLxPxaLUQbGUu5X3f2Zkus4gUtWTy9jLMrnAcRo7LMt9djKpNUX4ZNDqUA",
  "key12": "3sXVjTY39ADmw13EfJ7dmsSYFGKfdUEGhmiwZkbXY2QyiBGJrYfTNENTrYWkA61CgFsTQcNRU1tgb2YALXfQzvde",
  "key13": "4a3PHV41tYt7PbtK4SNAjXCwQQ79hvyjwEMmV3utb4RsXux8gHFP4pF6XY7t3GpRTuuasFnXatgwwVqwHE1Px96h",
  "key14": "4LY238iTLWW758i8iMrafHMLdXW4XSRrsnrd9XB2MikYws59KDyxadgE16qkAs6TM4B3NA3xHd3NXpxTofBYUzrJ",
  "key15": "5qhw9yfPrYDb91BLxdGJq7JNLdCe6bkPdYhfakhtzg8KHVaYykB9rP4FxwSCxXNqnR8zu4wMovQhAKz6KoJjRfQr",
  "key16": "PGHZLT4ckddSVYKCZtuja8Vm3Y19jJfVrxeeJ2kgkhCrYB59htv6x12PcssCRaNyoydog4RieLUXQZcwukvP2My",
  "key17": "5xF6sBEwHmmrs3b9ChDZnGFPRZWuzU2Ed3212D1u2oMJao7esBN3HwpHimWYLgfF9hDuUR3WiyUg1t9CVQU3nZoF",
  "key18": "3ByJ4txE7zmpENou3e9kFf3CtreGcFH3fgGh7KRqUmF2x29sf9xDfHuA1qUb2UDifDb2x2LxRdnEGzHQjf2CTKvu",
  "key19": "4WSyN9QYMnjwZwHC8xTWQSDyHghkTWjnfAz4ymXXiuBTPXzJ1CagLPdSs2BH7giYkDF4kkBod1LXdun7gCG4DBbe",
  "key20": "2J6bQisyGjHUSZFHweksN2g4YovWdwPqrrHu6ARrYvw34nc96EWCNGLL1CTJ3TicNtDqmo6E9r2esagZNhbFVEnH",
  "key21": "5hCFkEmmT8frrN18GbGoyU8RkuJVNfNbES1vF3GqB4S54PTCcC6j58XGW7o9iLTga4iBUgRzdCa8Qav1Q3Q7REwR",
  "key22": "5vxVzPR7vKNS84WMKniUYjY5REtMKxebyfUX4Mj9yvsKJqCgsmEztQfwLzzSKvvaXHGNqQFtHZ4uwTEspZrXbprA",
  "key23": "4q8QWgehCcGfm9cWsW8UZRHbZePQytJ3ENWRKfezFg2vahaiQLsw24Efv9kBHsgpyaH6f6h9UCP72WSoMcubc9td",
  "key24": "588iLNmokAhFYXKAZYtf75aWhxi2QfKrRNDt4pHZnCjDkYu2RbpfRdpWXxsnfjH67Mt6tTjNMWPunRgqB49idqqt",
  "key25": "4HMN74wxQ8DNuPrFdnGmRfi4EVN4djAKCFBtojHQDkpp8vcETtBAnm3QFHXEmKWEPfuMTLdkCjkg8wZtbZPp9wox",
  "key26": "523qXK3VTihwVBZBPAVGEnPkxRUs4QBJw7HZxuAfjyHpRhnDKnsGuibrS8XFnYutdXmtuZdB3rX3hv8WUUe5eXsg",
  "key27": "5PqYAqA3MCz5Yvh2Bidauh2dy8NNSFLuiZG4HSuZhcQKhdiCnUFLNanzbYYSusuEPcymGrjo8DFihsyUnVdAkmVN",
  "key28": "3dc96SGJAbRyt1EXARNRA9KVUe45tFWSmp2JRxehFFZ75ZCVYsbGw3jj2vQzhDJsFJ7v58o4eqyfd8txeeqf8XGm",
  "key29": "4NST24mo23PPDuEeyKHvrR9m2oquLd5mP3V8sHbfY2fK4sQPFBViiNqWpS1NUC1vCQQ2eeFzkw17fizTrtJsXLNk",
  "key30": "thQxjH8FcrMrrN2EvB59GuhbPkaHMPpTfBqBB7YfJdiNZF76pH3YHyrEJqMMEKSqxss9GbqY39SoVLrT9g7kRUe",
  "key31": "4MhsfPbgR8zpxzW3L2e1XPjb3ArCFqujhNJiXtkgKa5Tra4axisrZ27mXUR6h6hqNx3hXESeTmar9ewZ9q86RMYY",
  "key32": "65iqB4w8FrKNAwmTzbFMc7QQfyUwZmf7nj4csaYjm1NaR31obdqyK3MSuFtSuhVNx9SWFZo83z7F9GL1KHUDyVZH",
  "key33": "58WGpeBQMXQj9SCko6bxnQ1Qr5gVEa9jqfsitsgHEM8xQKLbp74CqQG1D7MhPZG2VxhwUpSCEgYFeuDiXd2insJ8",
  "key34": "2XGP4N6DgSiBuxhYXRhSWBcUv8Jtf8bYDmwaquPGv48cSJ2BFey6Fm8evvsoCd8FGBwLtsSiKsTu2mNZZdDJZBkQ",
  "key35": "CXruoKom4qTEwsuagcc4xwHD7pRDerjNEoZbdHUpSwZDdiAaEMePPQPNNmvNqEYzysd9NFJYYxJDU6xBEijurdo",
  "key36": "2HweGfxNbGqCvsfynGvCh2XU5DeNQz3LNixMV4wDeZdEV1TPQfoStQibyAhq6aSFkyBJEAaRcobzmRETKxTqdYYF",
  "key37": "4mCsmt7dHC4w1PVAxVFG8cQwwnuGzEhoveiaseiiykidc6NSfmCN4ivTbRgWjW1pQpH3gacQ2bikoTUvVuGs2mB1",
  "key38": "c7kcFqFe69hA3VV6yAMSy2Nuyt3VvvxS2F1rSPPGkqyv5zrGXfXGDNMxoZDQw5zhK1kBheYAyjBZhfxUSuDCK91"
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
