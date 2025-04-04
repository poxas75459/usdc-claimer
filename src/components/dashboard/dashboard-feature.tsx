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
    "474MjyakDdZctpKR6chcpbN3GUbQuRZs8ernj2qZivyX7VkU14ptH4kGKDckh8ZCmhd9AStWpz8oCUtd4WjXokY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCKSKnch7w2Cgu2K6mqBEt41UZLir169eWi6yGsq35NcwngKdKuC96EGwBvrcTkSJ9tnJhdyLm7PqmCr2e3CjfG",
  "key1": "34dF2XcfP2L6TD1HrhSe7k35Ap6oztuCUFV42tUJ8J4sinC52aqDinrorG7pTxUVqAXE1mCh5t15ocAWCaXE82ig",
  "key2": "3CkLuqkWUb4PiUsCNgAatCNYiKT1eMhKGEKdio3GVathtXrhC8TPmmryRJmvfRpcjJ5Rb14DKtf5QxnBNb5GNuU6",
  "key3": "2Ufw8hh7KepDfDmymz8Tyc9nCgoLt2mEdHSJnAW3sFDDF3vAKXtLfmMcuKDVXcZk8K1WULa8biCdKsbryMK8tcWh",
  "key4": "2uFGc1kqy4gpHWJbQ61qiuDSN38PafLf7oAMPnZqdoux3WkQyMHKAYqu71fDVHdG42R3w15hETvcTchM65qA9S61",
  "key5": "249t3zt5aV9AzDhvzShCYN1DgJGab7vE7CXHxVoVKqNFkHup8unhGTXoxDEqZczf1ZbWuc4nvah6hFYQB1N7AX6V",
  "key6": "4ZfbxxXf3WHg5Kg1kC7XY9pPnSnbNkVVP2KfxCoQgxwmd5BZj7FhWCVsWCoC24md5PTqJQBqVyvLoxX4fYAn2J9Z",
  "key7": "3dgu1L3n47cVgtoUqRkuEkAzBzM6SGnNu7gzi7ejrBWKLem7KoLRdBox7N4TbWwLh1p4poboyTjjbKjKnKz4Pyfm",
  "key8": "4U62MT2YrfjnhgMTJ3UvgW2reNd5vGE4QCM4xjtrebVHnD2GLhUPyFUybb9KHJw13bbCAA1y54Wm3gc9yv2UMqVx",
  "key9": "2VNdiRk4nW5mZ1HXCMsbNTSwwqqk1GhmvfNLN9dbna8pYooenBwABdzoDH8DS2gfDVYBNEmwnu8X8Q1u4jwqXfxF",
  "key10": "2y5JNrE8rf4EsNPFj6UxmjZG9xGAJHz1dNTuoVcur9etTn9canbtK5iq6JYL2ZxTtuSe8JSZCguVy9quAi1TyPpi",
  "key11": "MVLgN64eDEdVBXcT6NCrFNeZcdKwWJraY7GkMR9YSkkwAyBAHB7cE5xbEvyWxXBGzvPeKsULvveNMfwAADLPVZH",
  "key12": "4eYcjsWSJ4DmBh4qdCuWzACjqf5r3bVegtAxtzzL6JsHPxPwyDx2rw3GzHTsE5EfFKgt1VrmKXAUBsdCkiymGAnw",
  "key13": "5UBJ1njerQLdnSJKqdSw22MEFU448ECfQnwrukp9H2HZuempeZB97FQ9xUeEsL8TgonTBvgxeS7qHUy9cGitt243",
  "key14": "2fxAmionTDMBDAE36nvwYuJ41aVnXHnxEUtuGwBmGSoMT55gApzgTPDK5ZR9VnEo9SCDnjG8trVTgjzihs4JdNXk",
  "key15": "Jyw6RaGzRVPR8bUg5rTV3LvXKsjC4aazyvHY66NTk5vgnNH2xYdiKdQFoxusZRuAU9NcaK4meYorLYajHbaLL3X",
  "key16": "2yDywRw3osJ87XfLpcQ2PaeJqh2xV9T23r9hCAhBVBNaCoLVf9tpQn4zhwJEqKmfeqiz8bvzkr4CRMAHDUSeFnHA",
  "key17": "dW9szR6SM1CPSpZgGQXVnw3uAUAMg7BbXiPMaEkZxq35dvidiYarFJLgmZn3PgSfD8pHC2e5vUUPiWkbHYnfV5d",
  "key18": "22AgksxfgsyCZPnvsH9jKgG7jqKRs5YPFkTmJHznMukjMEAnN3rBhyxdjAqD9oc6xZS385FZKYDzbVqDc5TD6nWd",
  "key19": "MpFUMzw8DXsHsCLhCufXci6Gsmsg5fPUxdCgmcmhKKWESMntATRXrWQnFbAn2RdkDhSeKMmLXFYmorkLjuDuf9C",
  "key20": "5KBURuHUp9TLTR3DCZFXskkKCgj1NpnFsPsww8q5QSmKefZQAwypz3nW2jbTKVuxmkRoj72STqC1teAG7AoMab7f",
  "key21": "3v7sMJAyh33e3oiLekJ7xJB2TrM7hkGRR3MovxoEUFHaXSBoNus73dk1oimSEwJSVJXX5QfceYGh4CPGuhTnx7tf",
  "key22": "tdoSdwHSgQSQSqicpzVWVJ8yxzKkwuTRhzocqUcTMiZn7qzPyUjP7CxpdDCmErJUtGermv3KxGn2unYUSroczAQ",
  "key23": "2qbGmnENffb9kNas4Ek4wcN4R4bcjLDomx9bdYPx5wG8Zr5idoCPUFM4QAuiMLdvqJAho7EawpBRwnLCTjehb6NM",
  "key24": "58VBssYaUTmq4fzLF8Vr6CqaGKvLkAUhYUu3LLQnwZqnfQk2Z1Sd94y2cmN3VP1p94GpbsTJpS4N4aj3688434cA",
  "key25": "3gRmi2MdpSTfejyKRR9xaLsGHXj2gehQk6wCqpydJr4YdniWsT76PVKUDeUTb5bRACddrYVsbg23yFy4Vm48eARb",
  "key26": "5Ct6uJEyBn7m4PLRrsc92JxpsHhpRKZ3BZK96qcx17HDdrXnE3uK9Lzm7rTTfKdeYacuSeAopoRgsMQCvWtPxqrm",
  "key27": "c6k3LU1dqkSzyLGmbivisBw9PBs74tn1NEU22E6pTpei7r8rg3qpkj8xK33CW7LbbGWeXStc7feoZ8jFCt4NKru",
  "key28": "2gqY6u24Qvw3Mk9p5JNDrJUaegFRVRCbrYdi9ZsSqosAkvCuK7mYCs8WK8a6721NJvgVeQ92SuZDb19tvpTKrGf5",
  "key29": "55MxiiCytKyMYQZJ4PpHwg4se95DNcr41mC2p7QTTRw1EfTmnGVJtEfgW2Ar7sxcuRYMo3pW2NXrXXfTNY9K8X23",
  "key30": "2rLzwApjymUXXLDQ1yDNXr1PE44R1xpDmyiD5CuyPe4Y9LBmzZxPMYioMtAMjWhAjSLWS58ci1U9V1LyERevx1rh",
  "key31": "5Qu9by66U9eKsi1uwcwe2ZkdFa2mwd5fsf2bzDUjkNU8cSxpzUh7crv8BN4JNs46XCcBkHZ9PCkDhk7QC6D5aTyc",
  "key32": "3B8ufoGLgUobTxcvpaBZS2yqz5GVYbNExgW2y3HmmMb7sM8gfnNfm4nJMndEMcqp5un1eNN8BjCLUPWqjTAGToxT",
  "key33": "4FEbefi8mdJCjPaUU8vyLSJKBTqYbRfepBsgAxujS13ktGooi8gQWU7kGCAyQ9xC5FqAE1gjhYFxB8rVeCUA7mXC",
  "key34": "4QkFKdHxM68PLc5EJzVKr2FYozoLAiE1E1iN77BbcW9vYvSNLsiyAucR5ms62oxePNEc8cAXSrwYQ53neVjZbX1b",
  "key35": "4qUETcBwxEbigYkPztTEcVL5cXgxxHLTPooWpYjD2A7Zm45vmDVsatiXDVmdsbnznZNEAkDaQ3sjk7sDNZrpxyLj",
  "key36": "jPsUakx1UoRBLHe2tSA8PZ7emiS3kqh5dCTzpmKyCws3ddmja5xmPJSfgp9mnKfu8FcoH8knYAmoTgjgzvD9K3t",
  "key37": "4LMX89WZoZvVA5Cxtu3NChUknq9p96tZHhNLw6huA821Wmr7KLXZ52U6bGbi8iALMXEDf9RdGX1Q1Ehmwj3L4DHf",
  "key38": "4WvgjUV9fFY2QmWD3qXWo4KhLeZ4N2nY7Hbkk9Po8RL4gi2oDtg32wNkQVqUsNhGTcpu33DVuwX3N8ixGvRGeDQ2"
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
