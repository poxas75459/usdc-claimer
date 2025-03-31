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
    "3CQ3BWr3QB1ASHGbQLFqZp6wQvuVtwSmsr2EbfWXG1uNjP7zeGpz2RUBXPNWFR3SSC7visy2GEhopAUBR5TQyJcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ByGXLjLsBp852ark7us47n4K6rb8GCk32RAYKUHgW3q9toMoqUczgvkQcYxWrW4WYDJvxrAwghb4PMNeUbwK5eA",
  "key1": "5YQKRv5gax6ve57bxLXjXaMyVy8G5Uh67rF4m3P8w5SxuhcVKABM35H3JRiBrPbDoujAJnzc9htvare1YGeKXsZN",
  "key2": "3xy6AVKLkohrL78ZDiQEJ4dw6rN2TRPAzdHFhCp8XCg4Hqzq6dXo2ZMoX1ZkM57ekuhXbwYKRZ6TmfS83PEm8xzr",
  "key3": "5641ADsbxd9y3m7TXoGXeJf4KPDKrQo2MK3aPT2pn6rm2NMzGxTX6vVr6jjUae5Axjf8KoGrQsyGoVTBaXTMtrnF",
  "key4": "6JHPN7h8ZAjbgJSPxAmtkAuHAkYkG9heeP1R1jHjV83oC8ejFjF4D4p6BrC3Xqp6PrnNMKtqtM5vffQg2n7fp4H",
  "key5": "4MhbAhjTW9YBe8VTFZLVbQMRaH9vMUV7HLGzrxHsF5tzwjYMZ3y9mnMiH9svVyFk8EDxvHtgsBZtTLdrR746mYoC",
  "key6": "3mhiWqjR3knSkuBYa9pRLs2yHeK4JVF3NmvfnS2ur8ij7TUyDuuvg9THyoATpAqRtVACuTapdCFfR4RABfkfmtpx",
  "key7": "aAwNQiyCUcMhmUhT9WTVbJHPz9kmkfbJMNSaoVwgWz4ShEFx97bjzCYvt7b95eWoUWjZYFiizpNTfgaZS7ykf31",
  "key8": "65Bzcs8NyektNcHggHn73ahExWK7H9RFBvBUoJBGR7yvGgUDYqe2DcvidoheyTsKYCvnydizT7SpYJdqwHRMS7yC",
  "key9": "21FuQzuRnd9xUQkdACgGHExMcqBncNmzoDJWcXTYZBYkguh4y2fJvMP8nXvGa7BtvDfWMRpCf2SLCsHXJpSkZmYQ",
  "key10": "33xwSrLCdgeoe2x39G9Duaauq6ryrEa1RhMNGcE952S7Cq5cYVbeBpA5MCMgcE3wAgDaqiBBdfXGxZ7njbwVPke7",
  "key11": "5oK4sPt6Gt1LybeP8LyqdfgeCtwUKceWuebX2d6y5FuKxzD8CKk6ESShfWwuu5eFvtKymtPzwcXT4GZEhqktLdnQ",
  "key12": "3U3t5vGcBfGsknLhXp6M8kCMcKMCFnW6AbqvDMET9mrpAYACsHSxh3C8FGBTnzgz9u1vigDyGjBTujStgzMGPLRt",
  "key13": "4DtxkmW6cocwApF3yWFebNLEGsSJydUrZzjuyqFhrefdLyXiMSRC9G4SKENh4UKr7BwYAMoop6PZuqRx6NG5vdXX",
  "key14": "5MoZsPtXJr189uYNDw9Pr2vNbsP2uKSLfeCf52FKRvqVMiSutX1LKqcXomwB1GtQ7BbEMXr7L8YXcvAqGcmMCGGG",
  "key15": "23bP1ea8t8dKvEMkqDmfLaJcgFRXBMo5AFnanG57cHkubfqiB9wuTsWj6UY2m4ekrHkHfA9qj8RB1ApGohsp2Xac",
  "key16": "qoc6CfRDg11C2GZjuZ1nadqWKhrpU7hCecg17ghPibujXNBhJeh2BPQb3eC7z97xXpQWvurbmopnSrBCuvGL9do",
  "key17": "vEFCW6GwPu86oQA7j1ceUFmbt52SzVmpt75ALxZywsTLohFKPGsqphVsAK1UEkkJG8gdBBAbRyq3WpKtFt4hgo1",
  "key18": "4XzxwdAZC5GBpWp1ybBkeTL2wCYicpQ6xbxtsFzgmbDM7CqaxaSwc899gtYeSd11REsQz25dQ4PtPNRfcDWv6Ekk",
  "key19": "42wMpBy3q8WbwPxDWo5ZDwJviitxcnrrqogprB2cXtSLzVtZL9LmhUbSU49Ut6jMPfofmTpmLPfSJYZ9qGNLCJx8",
  "key20": "4oFFW19NA5ny1WjJpXimsXDbgwvzCLHMERx2YkcaU1fELYkVk6uKUQCPY79M9XtrXWWsyiatbQMjLk6HctXuuVMh",
  "key21": "4sgvbG6eTtbDf3GX91SToTQjvcq8XpN3VG7PE5dExpKte44u61F95WrMM85mFGHqfHNXDLSmm8fh42g8cmQ5Qini",
  "key22": "3PBzWzV83vgX94iywN73vWH7T5aJu8MmWAVtiEjDfBUaFurqa4QkcK1EjZzKQ5oGeuYW5PRjBPDWsUuxXBw4htNg",
  "key23": "5F4mAotGXdV7RuWkWaGDpzNJ6ncvimgndtNMj5RCUCx2LQarq3WrZ84oaBnV3Hoy2Y2BqzrXX36cctuG3XNsnfxu",
  "key24": "ztY7xmhc3zZdNvEbQ3aTC3k9xZFMPpDEjjCWRPwYUd7cpDnootKPYvzEiRpA6icyeLHF7g9oBzxGE4CMVFvwtAG",
  "key25": "3VUmsw9bcnnGVUu9W3HVswWzVDRWpaZ5TWWJJymNdH73tRUDJ5EpzvJBLF6QEmPayCQh6w7fUbpkFxqw6vuM6wNz",
  "key26": "4cRqVhDaBfrJ2nd1zU9AG3B5GpdzeTTBCeuhcMA3TsKKXa1C3wPJY9Rq7DaJ9dESisFwpoeD69C1VFkQK9ZSTZFs",
  "key27": "2xQxy2gy6GqS2Xae9uYLjR6YmfHydvJy9R9R3d1Fr3Dbzu9nQ45Q59yySCPEgXWTHPLughEMAefTzfGBZh7kJaZk",
  "key28": "4pJSxyiWCLW2vmRLJahhqtQ2ivZM8it2Fht5ivcLB1y5w2YtfYtfhcuJy4NkbS2JFPhZa1Pn9KudidB93DhWvo2g",
  "key29": "58h31aX3nD8L8TsppGqA6nJCNxGReiKvDb8z8v3sQiRCkud8x9m75tMtVfBYYtoi3TVQgE2Z6hvfVsxkbm6x9Xjz",
  "key30": "5N5K4Yab1BwU9dM416WwcBWxfQKpifK2oQ8PsGcqvNKxnpsYnBLG9bsj4fJEvJt9bDULQkNE4DRqdKzBwzFepcu2",
  "key31": "37hwGtCc7imHiPX4PfbpeLXrK97v68Agbz6cHevyiXdquaGMb6ZpM39GFxgQy2xiKJaqLzH5NXf9NT5ASp1FYFu7",
  "key32": "4rttPuqb4qy4xLnVrsxyemYJrS9aRy62icrfn2LngVx6825TH9xbZgW4W3dRxGupcjMBFSMH9tWSFeSLns3Fxjyh",
  "key33": "3xSAujk5zTW4KAENQSPn2Xsvq5MJtjXUMddaBYuYqUW5kcj85KsLo5c7yUKqsC1avX1vReLJHTbv1caBbQXAJD1v",
  "key34": "4E4iBKFDMPyj7YYYbcS4LxussVUSQNK4bNGjXyTW1nZDZcA39zhipEXyZSZsv6vi7KGtpJGS9GfvgRL9NCuRCduB",
  "key35": "4P1cDMPZ6DxpDEe3Weugz8xHqfH36x4WasnYUn3XD8mLyQjseiNAqhyXpLC7iKw3ZRf1hcwThVjFKiivDAhXHYb8",
  "key36": "3pgWoq7QXXPtgBbRMCDJkQpHuXVgYCpQNJUdVUwady5gQPEbBx4qkSixyavHpcws7cws59dx1pJy5zxQrfv6YKar",
  "key37": "Mr3TyXxpYEw16VPqvQRHvUHYmtw36w7JrcrRPnGjSm9V8mfCj7V1yTTRrzeMdKDsJjRtPziQQRvfxef58HB8svK",
  "key38": "3d22V9rr4nh7vycNesSoV1QLZnqHbaX6dLbngMmECAymcbGSb9jvtFeiAAoHehxjgxyXXHiLeUs1yQUuuj5XsuvQ",
  "key39": "XGKKujHjUfwqrSztSoCWswiKNCdjq7v7sQbS2TnrYBhyssMShxQ4vqxda6kcNJ81yPoqNisLk5YoeKzoc38uDrG",
  "key40": "39rUVPZWxAk6c7SarLSiAnvvEh2iRg6AC2romwKGiiWqzqARBL28VKLmsFtM3vdU7pr5rpHC5GcpjjQEeZNwMr5g",
  "key41": "3jY5mzi7uSvH9M5Y1VfhF4QyZC4U2ZSaprrBqB3BdLfRMnufi3NnVFiAn5dquPGwkNGEGEBxWhUosDg3rzccu7Vh",
  "key42": "ynbVBzYiw4wCS6JSqJ9ErKduwbMKfcRVjHuxtPjtBikPH9LVaBaZkT4VmDmeBrV8xpf7bYuL2CoV1vdH55GGvwC",
  "key43": "3wiNfMHFpxbr9VynBhBhZiuBvLxfxgNpKRNyTcnevykJ64FXYHfkhu1GWwvvFVoBqnGz4LTqjPSwnLVaYYcWGhmm",
  "key44": "4Bc8GsBnTzQCLDLcH9UGd5wdacAx1GehjPWrSpbfuTej24Qg2147WtRLW84idBtQsGaD9z1Ymfj67h7oKTmHL6ch",
  "key45": "6BqLaktJmj1Y9vweoqiPWkz1psTydAu56LQqgPCweQuJdDj8oKtBxxfRPEfHUVVGdRPcZqL1RgS3sSDdiu2peg2",
  "key46": "3VbF1cEqAFBTvVBErWXWmsxsjTMDCbHw4msmSinR4XwqLAYymLyRFXwg2oNft2GaSZt1x1DHHrKVxv6cB9oFQwQC",
  "key47": "5dzzR2k1Jm6nxPUkCpNsh8K7X2JaEoiVX2XNSttJzdwEAc8qnhwUnfii41HtBP6TQAnWeDv8EVQ7jaQ78e1ATT4w",
  "key48": "3VSpgYZv8PV3GLLhDLWiy4QVTEh6twkuWc6efD397yqwPtG8kHNxfSnG46VpdfVMrAsg2JgW4qyLRgRT9neg899u"
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
