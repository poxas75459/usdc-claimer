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
    "5dZymPHDJ2ZKxGeErkFJDequ9SRR8Mcb44YZhS3WY5SvRxazqwSrnhttJ2455c44VwSacgwTu9rJSZfSEe8FbFvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPs4sMroUV9sgzt2PwUEUpuAdPGZA4v5LYhSwbegzBEKE4Mu4cCNSuZdNE2RQ7qSCfXG9MVaS7VNwWmg7H9Xcnx",
  "key1": "4BzWNG3r2pJq6TPM2vrQivVoLjSXQVciXtvtxsreaUYHbTWMrXzxCB3opMjS7H8XGJ6xMxywwzBJpfzvhrEjjcqL",
  "key2": "3ftAN3FETpVvnpujhA1tFxR8XH4WqgzB6YK7NqAhvKQtKaD2KV9omWL9WGtj4GpeCadA9whsKkpobhUbC3oGQGB",
  "key3": "3RcgMqKFUBczJCjU6kbq2yEa8i5xo75xxhW3BgK4f8124q2sz4jdtaKtNFncFRr7XTMGyFu4jpXERRaqPwNnUPEG",
  "key4": "3sgLELCeGeAUZ6Zmz19P6bEBfJUihDB4xydFhSFNFhnHJFev5L6vJPh9hcUG5hDkNWxgPyLe1ScqTimDVqT4oeRE",
  "key5": "2PG9cSccJ4NaJiedgGVdtHVzK4hz7ENkHdLVLry2vQKuvbLSdCFzfXJfx35uVEfbkweiuharxRcXiGme45f6xDWv",
  "key6": "nBAt29kmcqMFNK1ZhmwBQf5V2ttjpytKLnPf48B38Ym7FFJfGh5aHEPzXA92CxZF1EDwg7qK4at8fW9TvQwnkwN",
  "key7": "5GzYVdnFRSdAJ7gecpZ4x6DU9YRLrKipnhdWVh6q6Q7pz36U7x62VKcNDAHcrr72941D5zWimJQj7hF83YuNx3Mn",
  "key8": "5TuKZwmfMNq3HfmSvJZApaX4g5dzZeCpYtSvUzxyB6oVc4hXtvz6CXje7YQSRqEvMMW2ZahNBBa5Noib7Yq5amYF",
  "key9": "5M1rmrcc9uFxa6Gq8XZX7pD7n2q866yMed7NPXW2MgYHnpyuK36WQ7nG7S7oRHhAc4zgm21gw2goKTWk1mkq8a9E",
  "key10": "5vE41QtkyWeVAojCzpKXS5dVzXR7BFMo4SimoPNbxY38nUFjdAaPZWPirYyFaSvLcXQMUCNCaqHr75QZiCdY7SwY",
  "key11": "3W65CWVyFGgWT2SCFSSNy3s8Vwby1FTRshufUgDX3BgKud92X9pTsN6XBec4cyzzxif12c8Roe7dSYhB8RqtYvjk",
  "key12": "4ta5tfRh6oEU8CwZw98ELaywKE38JqsXnRpTU34LaYh8bJSNnr8y4jvwQENq4eRJ5tuZXfjKTneMq63qpMVfb943",
  "key13": "4kM4y15xx4GfQbN8XeytmtGGhQCXRga4cSbZBeSwnHwdWvr5W88pUdFcd4By1nBwSh5so1aTVKDsMA5xk4NRGapc",
  "key14": "34gUbWBbM1hSRCGW3XnjTEAmEJe4ogofephL8hLwZEnH87QcGXxi6kMYrVrh7rg9GY5tSspw2JvNYuFm3WDVWC3S",
  "key15": "4vqyHVbPE2tJ65JA5EYpWtjPNytzpPh8dxtQRhvGHqqgnP1bfxzN9TAcgidEgGVSckQRkSYkZJQJZt7JQG6XqnKx",
  "key16": "2JwaycPmEh7z3iDh79sVKuruA2e9icv6JPUEuhHtadRiCEm25rFRREhjZTU8zJfzEYUqFQfh7XY9CdzjSrQGzEer",
  "key17": "4qfSBmeEF8XKFQ356Rjq58wGF9E63tY5yDRyeaLK26f2ZHfrhTiuQXgbSDeRCkLPbWh1pnXoXseRtzfJDGz5vaRZ",
  "key18": "2QpM6yzwVNMUKaaJEfMdDiwDF48CqW7Xyd243qMci5WGhfFAPQPCp7gkW54YUG2SWvPyckeCfpiJNzFCvEMWSnSA",
  "key19": "2fg3gJ4kksdzwEVerXbD4giHEaEphfirFnWjxAU3GhipjCi44pG65F99Me3dwHwkCSKRTXpoczUEJ7y6B5JWBw4s",
  "key20": "qtbVKS1NUDKzosPt4SWDvNr6VbCwRusMwRyHkevCvdpV8Gmg3idPthuxcsPr7wNHVormJvrFYQHtyTgFjingoQ5",
  "key21": "4mX7UxJqqZBBBfB37dZWspZqzdELPruyWVieqHHNjv18icdcDqAoyVH9AocPkxDgwDVVjNbCYs2QHaa9npVx41Cy",
  "key22": "54Rq9f7xXaYJbDHLY8sdFFVMWd52yC1bftofTEgbAK2HpxBob1suHWK5yh1SEvfTxFPALWrsDrAaYYPX7ExK8FVt",
  "key23": "UeTLycfcGWydgGC3qgHYTuS7SvwhQ56eHe3sgEbxGxv4NQoSTLyKtQAUyEurWxFgovXFccvTDG1RALczTnbnmXn",
  "key24": "dE6s1Mz2xE9w6p1wnqAQ4tR2tXjSG2Yvw8LpDZzA4Ly63aYd7qcwYrc4CSsHYSaFEjNrBe4oq2KKNSsSHGs4CST",
  "key25": "2xZPQibhFdhN2bjV61SkZPkBqwzEbXCYqW7qpWzfkbjWu9QBkdE3xjz5AQMpxkws7BNM4H2U1cGRtgfb1eaAdG7S",
  "key26": "2UJ6CZFdUAdFA8SwDhbwPUCwzE6ofiuS7EvTxfxFNW6NKReyeK7Y1hkjM2dCYgQrR4Jds2z56aN5hNfGn6adZtmZ",
  "key27": "m2PxkgzBbK6timDmCVMkS4LGrQ56vZ6dYwP6mYcug8FQwXoTqmEHQUEHzRF14s1oDCKX1D4ccuvByzt8CP3DXUx",
  "key28": "2maDNeH2MwBDn5p85PKwxBJC38PPVeRJWWndvX2T58TFFmmE7hrPQxupmHqkcvDkvN1XygsesMGS45g3DQVwexFh",
  "key29": "5A6GScAfL718oibbznGaYUwL1TTu3ZdNPPN7VpW88DLtpHUMUzL9mopej6qsuTFc6UHCVbeMPwYij9vhqLvoo9Gx",
  "key30": "QXjvrTjRnvWMqHXQBZHkNFBjMrPVQEj9Kt31oZ7Dw2nucjRLxD8oYiX341ApnzjmKYEgFmshwXds7dQTbcmtbpL",
  "key31": "3a6BJAHhKBAfhcMhe2Xcnd6ZgsjvCa1UrScJo8vSv5gqMdKnNR8fAM96V7sX5hH5wf8tBcsZn8m31yoJUniyRVdN",
  "key32": "3YvryLCWJTn22Fq7ieuUTbsB6CBRGtSruVpP1wSW9iT8kf8KDZfPQyrHX7BJ5xvrHa8zs2L7fqkFnFWC1mHnaf14",
  "key33": "3mjv2jZ2oJbRHxt7nMvgw3rf9VuVeBvAwSVG22HiJwJMg3QK63dvLaCVng51agv3Y7gBSkp3UhPjfZTwKAvRWfy7",
  "key34": "4yMDGtd7aAPnim9feJAi2wHucTBF9Lh9ioN3iduvN4Xq3hKXJmLLct1LhzA5PNvzbwvSBcTTSxJDQLSUQ7yZDvwh",
  "key35": "44boxyio6fHasFNCYHXui3CXvVdfFwfHxtfu7mCq7KssLqpKyWx9yQRqWSdf5ejn3jisBZJyStomt6qeZ1KG7ADD",
  "key36": "d5MrBFgJbeBhM2gwJQjx4g1KRSNMuYC831Gdusj9PNuZoZtEM85KgLA3FhE5NFZUybBt9vq33AWpnpYigtoLz8i",
  "key37": "5yAv3aoLFdcYZ2XSfkPdwfxLQh81eKqmpt4KdtssSksrT6JgEMecjpnMyqvd6JggbuxyEX7GFA2rRartgXWe6YQy",
  "key38": "5kcn4BgRcVofVkS8rwiBpZTV2WNNubsP2sbPtpw95yZQCTtg4pJ785oiM2ft71xnJ5b4yLMk1sj49Rnzr2krq23n",
  "key39": "2bkjWA1cAGSZV4NX616BqBaSAMx183KyT2a1boZWTNzXjLSy3w815GSwoE4f8Gzrax5e6EmceTr9cBH28G8ofcbT",
  "key40": "UWtBvpAUczXj31D82Hgon9XyvhTLDLvvf7PmQhdkFXE2WFLErw6J3BiJaP6f9Upm4EjfMhxeUzQXqtPJ1NGXCkh",
  "key41": "4Z5wGZASCq2dbZ16Ak1Pj7X5svnbdqRGhwn5kbKqcsyDHtBDwusmA1o7k5v6Lf5U9cGY3Xxco4ZkwuQVu3JVSoBT",
  "key42": "DgHyHu4huRXYYGz83eERTakZ8STMJmjxb53kdEBHSvYmCK9yRqcb3paF46uhKkuF53pxdu3ELTB4oGf15QD59Wu",
  "key43": "56D42mJ8StQdP3jkaocxYMkZeQfpXKNNxztXZUbzsGd5nTo7hmxvSqWLVqQmCajypXf36tDEUSU4viX8GXFPpyet",
  "key44": "4fuJvt6mC8ydGZpQDYMHvZTYh9qy7x6N9dcqM9aj7xnUXhCJSYrGBFo92uFMy1aVZ3n1mrFpjP5tAu9jwx9UzjXC",
  "key45": "jUvSxjDXhTYgAA6HHMRzP8L8rkt3kwjyTHwMgXFNeBxuEQKEbVa944oBWHw54JU8ykPjt4d4yZV77NSDK6gsZCf"
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
