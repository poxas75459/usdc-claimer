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
    "5DWTue6iQH3C6YTMgmigjjadYqao8EzBMwkDaBTJQt77aMgX8o714Y6gkAwiaqdTFxvC8SabQ3Y8HsiaFrNYy9GF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eA4kqvwQVkde53qsQFunHYkWKnmrXNkSfgY6SX9cnPArV7kzTRxrBQwvSmsqGVXwva3NEbBN797TrXA8jEYHsyw",
  "key1": "35JdHUpgpTcbAvnPe2h19aVXUnSeJ6FgWQm26WA3wqjAdu3iTndh5s6aj4K4YVtx2wSzbxfHdMCQzLSJH97qwuDr",
  "key2": "3ZnLVA3ctTBNuN7HYDKXzUR4Qqz8UnqpPqkcH5578fbz6M2NpdapyEHkzsWmAP2nZVBXCN27Ud5EPujcT5RbWdZt",
  "key3": "3PFbUBN5xcFKTSxny2XrUJWn99qSSkcGWiBBtyJJmsTHg6qxxoPi1K8hsPwgZSemz9n5RV65qxEZrUPp9QJ7yAKK",
  "key4": "39cLbRL3nd423J8qBLbiZaiBQy4VTPKixC6gKRGtLUhiHEJrXSspBsZfnVW3xchmF3EgXkJuVZhoDdpJ4SSMc7bn",
  "key5": "5WKbCHyNB8KBGxAxVpDbC5H6kdHWCEtwiscrW3dWLMbjhzgiPWscYADFLToTBjGEobMXyiKK4vVAhLjGaAW2CgLk",
  "key6": "LuQpUY1dtU4fphZ9zkdasV3jr6eFmBbHvmkiGYXNiwSLEqYZgVN9cURrkZfLeBkJsxmsVyULdsEMRwWYEayxwTb",
  "key7": "5HnH1dMdkmMRhCFzCTzgFVFWKAb4QKzURz9KZvCQcxi8ckCFwdsHDoyhmjuM9uKy2H1uQQAZ7S6xw8QwCuHg4AYS",
  "key8": "38ufGn8xfuTUTr9jPqnRpFQhyYmzLkeMcu7Y1tUe9WjiGjHLEicgQKjp1HCEe4fZjxkkMYjfAEaLWTNtWctqirr2",
  "key9": "51bU1N7BaH6oU768NpgYMU8abVUYWhxfXf1XubQCRQLXTJrANZLgVenhCjm83Lc7ej5MdCL794KKob3Dqs7HXWsv",
  "key10": "9i1NtrqQomZBAgnf5vcfvTGScb6jGzT3JbFpSt4z3bmuyURYGcsKHwnTWj9JYpiEfbHiBtV6wi6cBWRWjHLUCFg",
  "key11": "3Gvx7xrgwjBQ6LbTfNQsGEprJk3jicrPFRDgH8aCgf7SnoJTYRSq94iVM1v5VGL34bur3LDhnMgbm9TqKePg7UmT",
  "key12": "29e4RKeB54Dii1Mkg6mnqAKoNuyeAMypN1YmAJ1qnpBgKnZHPWndrvaozEmfeqMZ5VnW55gxdDxD1es5ezEaXAFG",
  "key13": "4xfgv2qo58oqzx15LN61tPrr9pUqW2KanVtuAn1rtfZPsJwoB4y6i15NVEtMjaUGF8jexZHkZsjyFLc8KtuHNShs",
  "key14": "VfE83hJ6tdJ5ZQFVYCgaykJT9UGSJSeVPgdv5zQdNCWy8SHaJioA11AosxpT9Nm6XPMLy6ruGC5nABzZc97mdxT",
  "key15": "mMb3TRBMjgq7bFdyJWSAmTdkV8PvdoC7D1sUiUXsF9UjVV8uDcc5pQZXCj7MSYj3bp77Prthh5AmbqqMG9Lerr6",
  "key16": "HzEShkkbVfRqqhNiGJ3GhZE1rHpaY9N1oBixfcvZek96Xmd6A1gsUDWD3VLzgbm7DEUZWwKLwSMynZVGoAFQZwD",
  "key17": "4aCYR4UnkReDfzdMZm9Z1Qsb7yeaiGSbzzezULjjk5n2gm7ZM8qwyU11krdJEVyqW9n2rrSG7UNC9P1otH4EMfs",
  "key18": "5eEvsZSCFB8tEaaDrtSB5LJ6yoiGPsxmEjk5mNxSfxRAsxwajfMWEd3mqPRjhhWRVH9oW2wBp4mSdLzvNrvAEsqH",
  "key19": "65xqLgUo5PfULym952weGgo7pVhLo8xQZS1SWktLedK5f2VDQGYbi9CUEPdW8XRbL7bteRTLyBKHgzVmxFDHDsAi",
  "key20": "LYP4r8k7Np9iLf2jCwW3f8xRVpuopGiSixeXynXqxi8FMGcSaUs3JLFfUSfHtHuEp5nJPqsECK4eXRcyYaRePW9",
  "key21": "3Xiu425ptDEsDY1jGa9We9RFoMrCS8n1WQxAxArheE96VTxRVgMer3yhyhDCJnYA5AFMnwsJ7FUib5neXptXby6A",
  "key22": "5niRShjvSCdiB5CREv2y5RX7XXmfzD7nPFkRyAba8inEktBWGwUfAoEA1L8sEYmXxzZxch7euQ5R22ck8j8z4U9T",
  "key23": "4d5byuf4vVFp5rzipfB6L8ZDSgcjy9KHYWiJK6WSWitDJsVvQzrAgGS4NfLRQhRckD9b5mSajux28krAcERReMaj",
  "key24": "3ZFvt9KzyT1Y3ey8Eo2DWAFRscvrba3nuKW9thQgpvuBVrGDVSnGYnJEFXXPNwpGPiG9u2r8nAAeNNQQS8BkiWUi",
  "key25": "Hz59v6hVNRpSmq1A6CjV43iTAY8pJL7He3dwM1QwQM5PCLPiN23RMoVAtrARna4hA6xJ3yWRbBgQ96Ka9i2Ycst",
  "key26": "48DqaGKUphHTHtAEEZeCLmcXyMzkJVZbu2wBeMjUNvU2hRJ6zJeWcgN1uMtyFvN9kjGw3Z5WQfK4tJftJo1SPBrW",
  "key27": "3eEdbmtxwecd4hjnfoocxkkPmhGS8mnPjBf4M6oMDELVsAkP2pos3CPoqyE32sFVPjngq5rzKgbD17v9vZd3SKCW",
  "key28": "2K92ttLbra2USx3ufZgXrjsMLUJEGAjVnvRwTKYfC4MzumYz171WGuryDFQqLcqhBBzdv6fURMfpLvb8sS8qsC7R",
  "key29": "2G9fe3fZL8z68RCURjwNDGsxbC6Fn98xqYHWnhWg72s6YQeeFLH8f3SzZUywsZ2EM9Btc7Jf9fMv3n9TBJeXtyH2",
  "key30": "QaCvRjnfUgAXsuNyNkwPUY5G9P6dUuk1RhYahZJAe3BhsXLojRnjuHrQXYXaGncAtaXj3NPwCbkz9JQt1XWjH42",
  "key31": "3JipLiJ4KMT5WxyYwVHbnqDZ4HiAsZ31jRs6W1zB7nHw1Fc33TANzzWk1L7zsUZGSHJZfWe6VrroYS2LSfnqdTkC",
  "key32": "nezhB9tNQ3tmByPdpEwxCV5KLconq3gFmGmGVZ6jaDK5ZCjWinMEwQCSz27xKaCy5gmtByjCGLbjf5zz6JcGoAN",
  "key33": "4RwPBhoqAtU98yshyBJSqqcQEK3iCbEom7QfFyLjDES3fymptHCRyHZ27toLPAaSuSvmnLC7m1ysPExBsX4oR75S",
  "key34": "4dtnEuZdvFmV2PvDP1ngf4yRUXxcgZSTS9dcv7ts6syM6JBhu8CNKRoEn4aYaXJqr9Vn6dDdVXH7FquxiLf1uaEM",
  "key35": "3vBPrAWpyRCZ6RkpKXehtPprpeFsG6AySjvpBzgy3q6jHdKCSiEFvaJ6xRDPS1WJ3mwNs1GH3WWf1Q9BE8x2d91y",
  "key36": "2mZSA5DWPauHMrvZgkGukt5XCFgxv8xzQvVmourFytEFCvXbVU6n3uJAxbuT3pgCREwEopzvWHjhC9nuPvk9Q9aW",
  "key37": "2sswxqpMvHr5osdtjzaVFSjQFxoixXrPnSU2GwS1vdGKu6jQcHRminAK1YcYfxiMF2VDAvg9hUxNReDhLACG7Lvq",
  "key38": "3jciN7emv6oNS16KtXeS8DNnNXXHCJwLWSpH6XT6RjM1wFDYwnWDk87nUQibCrsgzjtMSofs1P9j7V5vHdyBcJ4T",
  "key39": "43AwFC17pk42RwJatZtDypFs1eaCruoV6CMD429UKLTMt5E5wZn2ZyQruxBpzGundNqmNbn8B1H9o8k25Uhxib6Y",
  "key40": "2MeYy3CRH9eWj8s5ra7SA5C8xiGfaqTtNciVZJp9Hy9Auz8CiCb4FzTqGL934iWy26EThAahGVdB4sZJ9JuLxLiH",
  "key41": "4GPPby5XU7vwxLYJWghbFQ1K8mLkAF1UXdsXMMdmxwRXLofvfR93uuUDGxkJsHyQW1WYqApiemTpP1sj42fKm8yg",
  "key42": "cLLzEVYbc2eKCUWG5DAiwky3aQdFHfU1T5XZezTjScmGjXWhg5r98Wb8uSQ7bs6RrsASfTPee4hxbv1aALESbQh",
  "key43": "FYeBBmVpgs5JvqTbzVS96Kz38mDEneDk5YocqZPjMnRjNFyVSXm5fGrn3TZyQ8ZGjooCvaSzq6MgM9KvmFuP8VT"
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
