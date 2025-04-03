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
    "48kuR4NkDHjS3hAASj7UpnjNWBCV7edcJcqqLpu98CdiUw1odMTUfnNSHwzWrDvq6qMAYUFiFNmiE1rew5XFQtYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vs1YRWHDH1uds8PWwwdLP7BSGDNrAUFs1XCG4oJhHS5b7KCsN4YRDFKaD3bhzvMaYNs8EQmetAb7UE55EmjVYu8",
  "key1": "3YjPu4P4bUGipeUvZaMhT7pNFyRUJ8ncvzTVYofpyRTAP38e3kE5UguReDwcgB8Sm26XiV7uUdcLfdb8f4FnUzCt",
  "key2": "2iQt1pbDjz1CwTNG2DYUbDDFLaqEs5Fdfuq6bw6oSBrwqS5WL9gUULRxzcVaoxYpoyNEbK3RG4jizCq9EdYpz2o6",
  "key3": "2NWZwWCvVLtcYjpntdX8CE23PfgwczVzix985Auzcikzr6FqytNDeJyx4smVNu2jgRtKs52Q6hDeCuMLFhRLNQw",
  "key4": "2LJEGkGWkpoR952UmWLCUL8MWTzf7LzjscCJnivXPnAgZf5o1zpAn6UpKK6cvYDfyDJAAYs9wzjJha4njbKeBRWm",
  "key5": "5yCbGDeJ4kewWQa4Tj8cKWF9z6WYS69MrDDMv1GGZ82rqEzfgdH9z9CxzfcESMWYQcz4LESZZuA7NnutgCYmBTFM",
  "key6": "4movnL6Y1K4mo4u8empdzQz675xAZxZiDAv2aJewddYS45fEfbk6P163Cm12afHPhdjGu2NnQ4x7bLdLZPfc6XLc",
  "key7": "56xSqiF2m3ttBfsLF1aKNNJr9WMLdHDHGpDChvwSuMRFnggdjB886nTTUm7q9ZA5txehBpF7gJKPcoBtZAE9dtuz",
  "key8": "RQeHnWuM8isjLxHXDA7uxEr4XBXcAM9LyHz1kExNc9QaFLV1Aac1wMEk3bnMGZ8cbSyU4VkiyMz21vrhXfzMvc3",
  "key9": "28fajjNR5bDbyKn59tuebLAkpPSePGE5DG7gdjjuuRnTsUrVR39K5s3JvBNpfsVbdfW1h4s2R7ECJWDdG9JFCGfU",
  "key10": "5rvTs5Q9KdN4GemLBAc22ZUKPejrGJLwf212pDL19EX8NCaVeprY3M6msobhifD1rh7PxFnUXSJXkCvqaxXjZmnM",
  "key11": "4BtEBaik3A2DrZ2npg4QFW3xbV1PXPFnEK7C9aV2s4xJ4xTZjJtt8fofc9SaT3nDuoZsKtuJJ9RYTcYLjkBvZNFn",
  "key12": "2t1y9Z6DaxVMKPJsyTbXThjJnBR7d5fHJbi9EtmStCztipY2bK3R611cdknqHPMkqQcXCKj8Kjw1inEELfpVcXmX",
  "key13": "2z54nz3dBjeb1JNLp5SHroQuroCeNTcxVWP8fE4kQzVnNawcmafxBDbgLbDqc5fAbvGtJ8PfMVaXEE8jwSP2ccyt",
  "key14": "Md3dyD1rSqj5MRMMWZSEEg43TYJCJAm4HareSKJUnmZUT4oN4m3ebcRpTtPtY7z6mZ6e3DBV6r4XAAGNH6JZtgB",
  "key15": "5ZYbLGU4413JH5UddH1BnHGsitYSYPwxtDRuVuYQzgSDLnGeQXaHnAi7F9522vtuQz5xUUFcsF5rzNk3wKsUonzw",
  "key16": "5qUHoGxnK2niUadpyoUfSQYujM6pFmFZsgdCFT3Xgr2BrXXNi9Je5u7oo1WNN3v7TXhAHgXzmKYTUgJrqy3ez35a",
  "key17": "5RpoNXtAbN9arHieCyJtD3GVZLMHCoTi6fwRQVbXzwb7MPyAicZko3cD6jdg13BohuyG1ymUqGgjh5rzdCBiCjqD",
  "key18": "782G3MuxJQbCFCsDuAgNQ36x5KWoeQYgFr8HZYLqz6AF43AkkrnwcaAvtWevugLrG9eRnrRrgtLchVhyEBxAdti",
  "key19": "4sds4mnYvdL422y3YDYtCEDn5zo1vSRGUYANUeQENiuobviduCnYspXwAk84vsDU1yzLRiqB439VLbhxhK5hiiXk",
  "key20": "3KSu25y9MbjEsw9D7zaQJw2WAe6KoJTFdp2A5hPHQCn19RGJFZGCbeFqnQxG9MkHMypEKrcedRd8RYNEHuyzCWHx",
  "key21": "2pxyH1tBmPz7coY2B26BvazndfoMpgt5KZ2SR89gG9WcuQtoiBenzoeF9fVXEbgeEtTfKQBT7kFPuFUuyGwWfPuH",
  "key22": "4YdyaDC4dkMhLejqnjbYsn5dZphzdcoSVbLn33cNWQT5nco3jqmrbGvkE6ecfuidzwm77KLdVfvhTYLiYm2fnqDH",
  "key23": "4541e2HrDh1LeRYog5U7p1Y7hx9GsKJ1kyCHiiyAH55FiAEAVGRaK7PShgDYB3SqXSZN8ddWuxuaf2euPFuxFuza",
  "key24": "28ZoH2XoPyB3z2iyk2jCFkfp9bhAtD1efgw4uJkkvQX4JezyWWPsp6tMJdGcSiENQudtKtgYp7ZTY4HJ7WEtra2r",
  "key25": "2kshJ6SmiWwkpoePb1Gk5R1bo9CW2AoqnmdVqrEzZrZ2eopw8R1Z6E94gXxwGhbFAJ5jFYKsPr9RLXix4LDb4whd",
  "key26": "SZRfNk4H8HYJFTgZgGyAdSLm5UKzic45JERNDyqeBwP7BRbVVe1jjHckT7SL3NHEDStPrt8u1ueEwiwXeDf86w9",
  "key27": "TcqCuC5xKEXyeHyuksK9vyaeL86N3kHPoozHHUzrXePaK5RuGavzatShFFYNQ4qB1ku92LmSMajoi3TaD7XJReh",
  "key28": "35FQWE9qYSS7sKyMjm5ZnG4e9ZQJxNWCBwqNJjbbqbkDJApgNhjiQXG7hPU2bHzyJj8QnXvtAi4h29tNbcoxaiWs",
  "key29": "3ysxeEotN1A4tfpVxvaoiGyMep1NX3WJLgn64kk9mazB27XMTrrVGbDDWZ3DmEWmT2AVkEvp5H9i52niDuz4hPNZ",
  "key30": "3xgMhkzU8PjvtVnaVm2GQeiarF7Fd9jmoPSMRV7VEVHc8TA5vdFgYyvxhzxANB9PmNiTYCwQyBbTYEmobrKFEGjp",
  "key31": "2rAh4LKJy76Z4nU7nmPKKJ46HcE2CqezPSVcDr7LGBXxFHAdwrrEh27JBTKRnYtycf93MrbbKxzqYjgsSncXPZUW",
  "key32": "4GUm6an1vxJtvm1ViNnyBJaWA8kywfoByBtJoYpFoNMmEemb4nTctMvg5M1xsoxSjd4248pMdarbrN9uc2wS2XS1",
  "key33": "oK6ce5bukXRZv7szBQVLoTxmP1d3gr4MRERPnntVbtbpgR6zybgDajKXxnreM3Wm8JAoaTAaajZZgMMmCwZVF6D",
  "key34": "2g1TQyKPq2L9bDWZeB3uTSMKYTUj3ZV16C1JtZGjdNekvYm5dUuYVzRsCQeqjpPXvN6ZmneLjmR8P1JvVatQiTQP",
  "key35": "4zoBSXuRuibjGNiAHU4RizQuwi5mwPTrWWqC8cM7ThxzouJpeuomDBpmJ9PFucHGnsV5UJAwrC6i1Lw1nimkTkXb",
  "key36": "2hRJCusE3uZ8mcjqxgA1Z7CFe42q2WVin3p89x9mwfCZRgaMr6PCrVee4Nge21rSMgkTaT5riM2LH2dhSrUzG7Wm",
  "key37": "2BdJfdofzP9MNrGPCFZUMtMe5zrXsmzDB26BSVrFo8bibyoxRHNjbM3NPnvijDmdTJjR78asRXhrN8HrpKV3pkAY",
  "key38": "4i8CZQgZGQ57QhzcpX7YckkXqpR3eJKM7svrfS386KsU7jwprDnVpgTVU16mkQ78sEh1QH6iDJgQ6U6wjTgdyGhw",
  "key39": "Z1E1fRjbtYK9hTmAkYRiBfyL7yrde4UME9G2FxTBSNiWpoTeJLPzHktPAUhQXLwkgNMaaFum22vHQfWKi9hmtYK",
  "key40": "3u1X3QCH3LSqYHfst9CaDRCU7zY2eyKyvvHqDR87mYRyMLFxPCbdMH747b9uARVE5poNS4qNmjmL4u1Vn4GQgPUK",
  "key41": "3vGUNK28LTycS5ZQiCzHbsuMsEJG4h5LsGdWBhwEK19WKNfic7AbUrs3vDXw6gsT4WXsPvP1vMZyuLrRDYCYkFxJ",
  "key42": "4kft4dD8oeyoNE2tbM3oCHKx84DXw7eTus41f4csowm5PAzgvdtD967twPRYHGS2jQP3Dj4bWfnLsWrQDCBcRsKe",
  "key43": "5bmokBkEdwUwo7rdSNLZjKrJbGwdCL2J2GFoNLttbEKJwNQPXNwkSsPDVt7QC6g9YR1rrZseJb1pdYf2Ke5aKV1C",
  "key44": "4Cg5yqCoop9h7SA26pr5MXf5SPGdULZ1GUT3Zi7cj6Kh4UbTkLSsGkg5PmPxLXG4q11pFLFK5JCEKTFfCuHfxosJ",
  "key45": "5H8LeKnp89jPj8W8snYqipc3w52GLcaGPCZA7h6j9oDcLDdTBjn6TuSYPAmujwQiYjTDG5bDcLo8ENeidmYiVxoM",
  "key46": "3LLUt9eGhxAjsWs99SyrBArtnd1dVokhDfahnjMUCjtyLsEmkTtKfH4r4r4QXMv7PfBhu7F5KqzRSbCHxthb8P2F",
  "key47": "5Mkae88oPrH7tcTbxr9p9Uqn29TUGdQcHY4yGryoqcneFd1kDZwtSgBJtUtToUXFEpCMDuFS8iXgDXLDDZ4et6HW"
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
