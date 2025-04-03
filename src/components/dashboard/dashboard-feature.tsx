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
    "3MyeUgL94x39xMF37ADBCtoxXj9sv4c4YMUroEAaT9wVTtp9KxGMsrvWq9AR8FRV2mf654An6RmN9GvVw9nRr4Yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BbqKUMx7ggaZpXiFsNgUXC6Fy53ngKJ8bbuGj9eeGc8Hv1pcRku2fFvSCDnzMWoC3UjRfCmUgUTtoKTBPqC2GdA",
  "key1": "22mQAXCFt1o9CStT6MmFKP2bvYpSAXqSKVSjEMwyNVFo8aCdchxWbKjArLmHUkfeX6o8GCZKTsU6sFHMFjZRN4TC",
  "key2": "3JCSGvfsa6qX5gmVo97wSWJp9JmfTBu9noXV6RTcaFo3MwJoVoxAE55dZcHGvAESAsA9rvBQPxRhVmn17rTuaGbU",
  "key3": "2tEepYWANARvXsS4FbvL7ZpLJg6PpXtqwHY69qPDzVXxU4PUbfFtZzEyfN9jBwsR1PwMhmjW77DgLUYBbyJY9Byy",
  "key4": "39sP1kJJoPitejERjSB2dS9kJDGUB4mrvcaarmfZiS9QctCKPwJrCcparKH9dop8P5gsTcXqfj1ZgzQAQPec3uBt",
  "key5": "4yLfMXqM3EKzyqfX8xg1w8PCm5NKaNZoMpVdP1JuJeUUH2kwmqfVDCeoJG128Xp8rqt6gmvDV5GhLq9QiLqGKJ3B",
  "key6": "2vHBakMDGrhmg53b7kX28ob8RQagUut24RttEpZXGLxrPFRzQ51hamE8MSuaJ1v7wWJxehrf4RaQiN4fwGcsG9yj",
  "key7": "vxG4NW6knhQqzd648NqgMD6vwQ49ujmnXr4W9iftPVDMGM9Nj4fHwfJFFsBfhe6CceWZkweVqeMUrSKkY7M7SgH",
  "key8": "2YTQ7y6LfxJiTxRtievLGrntfbJqSF3w6PSaFBco8ozDs8MoUvpiXcnGMFsyhQWsYeu4uc77gCtTCRbaAuSWSb9V",
  "key9": "2Kgv24LfkkcTL5jwayduFC6Z5td8eLwo7XrDQYYUCRN9CqgG15kMYqq5XQFBJr5KE8DVFnVXeZ4qf4zUYB9mY9k3",
  "key10": "29MxuapSyAJ6XMGWidmFT9Ko4G8R8KnkeF3WMtz7jyYeSjrLB5Q4Db7ZNXsDjkdZKBpBowhF1Nzyfx11qqh35fVa",
  "key11": "nuzJG8PnWAGxmX5LGspvgfnnfCG2JrodEAcSfeV4f3T8UstdN6ENm1uFV155mLSKwAXoKQhZVsjXXvEEoLGu62E",
  "key12": "2JqexBbu3boLHwdHxV6k5cTAiWfkjJPSMpaGbzuCJhWGTNxJS7AVCgn5ZZ8Rd1H4s7C1GPi6P9anLdoMEZRocvRi",
  "key13": "5ndjTTM8vYzbJbZdr1xwqxBwhLVYrrtPiPzjhY1fiVb1DbV7gbZkCaSbFkkmRTL6uSuSvtatfdcBMu8D6fp2ScwJ",
  "key14": "5YyUd76vRNhV5k3Yea2Lg4CkhaaEnhCvCr3EVdqvTBna8mvUvsYfjea1tsTk7MS8rihp7FrTY6z6xvfX7kwaiP2z",
  "key15": "7SW7r4DLbgbA74WvgjFkp5KRqUqfkCAcGyidpWHFyoHkV6173cPzfEMb81PZLj6fvxeVNp2sobw4dPggaJFArVQ",
  "key16": "4Zdu44zLGw1mxDhrbFiw6NY91Adq51fRT3NVa8cyRo1wFdA33oct9CP7qXThFe9hBztmNhcbvY2roqoHCPG3MtP",
  "key17": "chGkk4AG1gLUtoegHNKtL5r6qtj9Vr3QCDJwxorKhxEzrTYxteJHFN1oMDwkMUGDMFsZSmuqYSt65zgJ7CKCRim",
  "key18": "2JfAsatLnijMa8erPhToQkKXPMxeHqVHyH4FNULvZtmRg69pKfJ9f1qwr8uM4feyY3sjVWoTivBr3Jk54qut3XN",
  "key19": "3vJejA3frM92r1FtMtXCpocD6vKd8kgnSG6FqDeH1gVxhwWMQtPZTANhNxNgH8JVc3juEwVDmejiVptGKToWGYC4",
  "key20": "2A757HRJ9k5tCXBtY5F2GXiqX4deSxGAtHXN9LkMnb4CVJQc3LjpapxJrRgVzRXkntxvnLLgyhcQtQyqYqkigyhf",
  "key21": "2aqYwMYpiiC873evvhGuo2LYAWboBBnpdNyMerifr5SCgfQSxdFLZcCZw2nsYsrXqdb2phTEACxHWgrHQAveWCdR",
  "key22": "4Ka4iq8UFJq92pCwCfqCDjAMKi7E3AUnQ2p9A9H48Bqdbbk7jWxjKGZDUioiJxEE3Hh75cN4r7RjXVhtMvdagWAa",
  "key23": "33P3r7cWVeBaKPJ5XkfVEyJ4eqYSR87h1jcbh1795KtEDFHrmR6FZZ7kWPjMGHKoPTi4Yhj9YDE3SVFvLohmXxRX",
  "key24": "32VVW2mCvEfnpnbiqj1xJ3gYP46SxVGGZU11tEg61vzJrgVhWGMEDCgjKPULmadjQ3YT6KdP6QGDcAzza4MCaEBJ",
  "key25": "26Dswod1oAC38AvarDBo7MRen77xYBbsCs5HmUXBWMBFadHK4K9iof6G78fjayn1rhFdLtQ3LGQUmyBiWXz72hZY",
  "key26": "3rRovKWny5hfXoXz2sPJ5AEMnFrqfVT3FyYZzx8Maj74s4SexaZth9Ape6yBL8R92zdJBHti1Z1v3X4A6JmXud5E",
  "key27": "5DwGkkDeQuVr5SrxNzoSt89o24mgJbXN4fD5zZuexgxLyCM6Ni9v44stPsMMYRsReABnFCkuKsFA4RGxgLsLx3ym",
  "key28": "47234Z52ezx2d8h9riUbq5kJzzijA77kqz835BrKPfxFhN5iAyWcxx784KkPntFYXvkNSea6ndCKfcEadF6kZg6N",
  "key29": "2sEuGTNLGZh1iuEyuMTCxLN478Yr4B5xAXFrHxKV57R8byq5eWvduHPyxerXgRf4vQcUyxkSJeNqSy9YVBtZ6RQ6",
  "key30": "38dhmmppqhcQRv9crmgbxVsbuMrfjXX1hYrGrhnR8hoW5snE6RYeUz8LYTLun5KVJWpYzhGNMzQ5hLQeqC8Cacy",
  "key31": "4p7MnucxoZt1BV9qF1eXs4of3am63r1Zq4Z4DuQ1DcmUZAsnKsUpCLJY9c93zJSzSKZp7bptACKWjMpJYma2dFfp",
  "key32": "4Y49sCfMnf2NVQH5yzV9JCp6CpqRX9vVBzNV98drFLrZGkWKwnfuzhcqsJnPo4u7NQbdRLtkMkibYtXxveaGbGHB",
  "key33": "57fYMUSSzVZZrEDMtSAnK7cRQzYbbkNcDLGzSiLK4hfc1df1k2sNdCvqNcSbiVdqanBUwhJU253aDDKQd8Btz9r",
  "key34": "Erc3z7DFELhG5eD6EQUtcwXie3cvLE4EmZLsBdf5wPeVfTnYcUTWX4P2wGdZ3S3ugZdQfUK1zPDna1pEPVjugWW",
  "key35": "3czuURdyG4TK66cXBzSEd9xinXkkgVa7adUNaYBnLZxndNz6Ro2gfb1PBBEu8jN85Aj9SYmDdHXNmfSsZBnSA2rg",
  "key36": "48GR4J8bvhJw9YL5pDEDUVdPsHEy5pUX9UiVp4HRV2YsNytKYnxFgc8LLpMH4WxBCBzqkVyDauBYWwHrYEB1CtSq",
  "key37": "R6TA27kSj2yELrj5apEkmZ8eaCV3U2eGofdwtDqui8ZPt4Vv91mhaMtYjn2EJTbC5rvL4zsJjXGuWQZczh1GKB4",
  "key38": "2yh96YYskPSHW86bk4CgVipWfqK8ovfhKTEQymvFuq9NaBMKpKT5aR3GqnhygmHEqWqHynipfoXUyBKgozeYVU4e",
  "key39": "UdoRQMfCayJLGE4mqVZo9CH1Baos4ZMzA5YMy7MZUn6QYmB9KHHB1hpgDj5yHChTACmRAzYRLXFYpNs2WHs6Vyp",
  "key40": "2EzURF8GScHiz98zbpdU9pmsogqPzqfvykmgqdLsq14J6yquqaPz356VrWZvYM95ESaeHAAsVUyjxFGxes5QCu3i",
  "key41": "3xoaTnrgo9KvNnaFXqirdECo7t7MyV7XRe9zCP3yyh5bg2fnZwQo9r5rjevo4WJSL6UgUKgFdJfJyuKS1W6R93U5",
  "key42": "23jv5bgfVdHFqRYsDoGpGCKTPbADMdcsk2xWzkbFeiCqj7kZtmuGSpHJZp3M9aTwDf6PwiMnKsqiKLXcZuBZh1GW",
  "key43": "ddtHUpk9FWpXVokkKLp6wwdpwHTYenG18W3i3Qt5raWv6ddWXkevmzxxMK49oKjnHW7b8KFpUX8KLUvg4ar1MFD",
  "key44": "5D5a7ZfW8EGPG8Gpqn8z8AbAwK6cLnzo6xLN2gpTdxErRKC3ZAvuu9G4Mnbu6gPBETeYFe9ywZkdLeFJQYRiMd82",
  "key45": "5ypBaBWzudoicgvBpmbLvAMZAZx4KMX4GeFrYov7iMAM2XFMoFLQudurbf6ToystUHtgiAhw1CvXjfv6GJdPuqaf",
  "key46": "e631w2jcpFP5vL23SUm78BBy42a3Bsr5ZfLVjgANM63meYfRHZ68SmSATTHbSjtbzwCC52jbvZuYYpWwB6BSriE",
  "key47": "kwYXM3DRhqvkzf36vWuZWL6bf1w779Hdrvc6NvRE6VLCo3sMRJHvUvnGuztV17vqUtR44DcVK92qx2cCGBNmrUd",
  "key48": "5hwyZY116iT5qSgLn8KsjgjQAkD3Uw4tpRUrDUpgtTqyphD1yA2BYYMMh62mw3TwsiHdEPzXU3kKs79C97UuvJce",
  "key49": "45btjVdXFKaHLbTV4FASLAM5c9Vu4LnPgse5dWE219hgVAhaB6GpW2FkyUTx421dmUUZRKrshm2v13NCqxkE3cvg"
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
