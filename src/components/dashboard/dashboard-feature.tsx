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
    "4CNM6yxUqJNz5ptaDsRxxqR31yNksH7K4WiMETtv4ioQhoUZ5gaX7x3vwfG6cs1sZiSSzRepZ81evjKjMYA34mF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hAiFgkq737boooiVn9pZ7x9wQmmoWsjpCjxMtaQyjG3zKWEJAyd3TAA1AYHuJw5EC7UDnSi8VzYM15q87i6zoLY",
  "key1": "2N9tYHDuTozd2EDpNLGS4SGLE2co65Jo9HFKyBtYotbmgftkzJ7bLWH6FDpjsEpySVy4xDC9nHLgXcmEfNE8tvQs",
  "key2": "4JS7BeAn5b2rYX85ctNcHc6zYKZnxumo4GXCHLgpFvw3wVWzz4Z4DdLianXsNHLvTvGrMKvmbbFCHL33M4MvCLnf",
  "key3": "2v9F1P9iHYnHKozh1KBguVxxoBFzP4uGo7iGSS5822t2F7RE3AyzG1ZH8bg2sJeQYTKcZzbXhrRtppART8HUEDxY",
  "key4": "61oUhpqsMVuUSNG6iCmtfkUEg8H8h67jDX8fEqxGUTbT4SUyCGada9suRbwduyTrvLGyvvZw5TE5Rg8FPnwUGshw",
  "key5": "NvqReA1UKX8r99w9Y2mRkTCvfYsFXQYVwQLtCqeFP6SxHQxWbUzPz4Sj6nrsBmDmQtbm84nfNi7UZaNaX6VBcmw",
  "key6": "37EtVMMrkXLFeRVKbidmm7ckPXfdtboUQSV2fS1xSx4bPwshjJWMDYWMYU6ccY2T889XhQQhrNPmju9cg5nEZvrh",
  "key7": "2HReLMr5p6CaWTWBxW7L5dYSRfo7ctrR97A2NUDLN5ZagJyfqFkrkYhu5WKb5hnkk5Ub4k5atZ5urWcSsQMd1Nqs",
  "key8": "xURE9oVSBp2dEdFfjmuW2rQkt6o12pwzawF5BwpwtRFgPTixcLDk4XMFxuytpM1iuDoUGfyjFQzyNhV3Tf4Uy6u",
  "key9": "2vByYANUo7EQnH1QrB4qTzbwe98mxjFU13K6YWkTmWEeMxRzRgcNWNLE9K9F2XJ5Wx8PMbzNj6VvJ82JEf2kVC9J",
  "key10": "3Z3okrmi5fGAWTX4Ru7XKfgmmqLoRVL4Z4cRc9XYwhyLLQjrg8JPLmCnerdUNaQSd93YrjJHtG8Qk44v3gixWDBU",
  "key11": "4dXJC4Fy2j7vCrRsG8mEUPBhpirDyTvVCnpawdQEn4yxDQQ3FvuNhpApn23QnqTmbViiyvsihTihu8p2kEJZZndx",
  "key12": "5t3imKyMQ2xyho5xLRscy1giDSECoUdsuhcsQDzGNR59N4NYonQsXpb4i5eVwuHsGtjXYT8NNbdJ37uNcohWLfs9",
  "key13": "55VYgiNbspZ15mdcdkFNzt2qo2E4ySoqhVWSqX4VsbMqdEGfhvcdAEhnp9FeQPmNBgkNowkp9dGJfzRVpMypAqe6",
  "key14": "4bu7HwZ7kqDVA3PdpE2bFFR7cEryWbaenookhhuZn2d5fgLSEGn9D765PzDcB4MGJd65kW3NwcW4owXidRUhKq1m",
  "key15": "scBp8cpeUrkV5bLG16Mx4v7HjjgNtoC4486N73RcEfcC66Kr84hfV6BDx4aBFew3aKDt8xjuHS4CSBs1WbXckpY",
  "key16": "3p1zSsjffYqcoZrwcARav1Uoc3yxqp33fEQd4UWHCAmwq2mSEEVa7onYy4w1xfKBcVm8embAin5EKnMp9DeNfEj3",
  "key17": "3AXAnBJzbVzifW5epd6x3g3uPw6ZcEbEfCZ4mUPMJSFW14SSUse4aUAtovV1oTyti9148HhaEbroVcZXYD3ehqja",
  "key18": "3atw63AEX8rQYc93A2LBb3y91WQhBtrsr9xxQMAfy6iwYJPguQ9x9AZWy4o7QV6KQkn3iZSf58cRadp2oNC2p23e",
  "key19": "3B6EhZszjXbkbdTwiNUR24ZfAwuqVWpq2a8CWStXRQ6Gh3tnxzSALY846SLH489pDtMf3gg31jL8H4s3WT6WfdeP",
  "key20": "8JuGy5UyiEPY6YFULqYYLsDwMiAfzZpk5LZrWW574njAVwjKgoC45m2QpghzH3kD3fWuDDKTGzoumkQ1Qzps3Fd",
  "key21": "4zBbvwV6E9vPoMQYaegW3aPbmKQnLfXXrY2qPsjj49u3uAFYiiuB6qu2aPGuegpPgu4NvNkkdYTyrw5q3zj7mKXz",
  "key22": "2R9nihUsdQwUDTAbcbWMnwBApkAK9RUnqMTssU3Af9WG99aknxx5ZjJnSXbRdmMLaHZCj1vnpWSRnVUpcXmn6Dyx",
  "key23": "5rgTDzZJ2cVxWWCxAq8aMy7QQmgS8D8k9RtdU5ABDB5Prz1aowhGv7kLvfUKRAVsgbBtiH5VfTioNw5VjMrvzsjG",
  "key24": "5EHa8kSBJ5iH9F8y5m2n6mtKqHh74kY8fAsASpQqf6gD7eRPMuhjsewveSMC9zfUZWFUm4MbQZEVPj8t4CezEbdP",
  "key25": "TsgfP7t3qbdttfy2uuNGCdYPcdmaFaAN4fBXMkVj7eRXoiz7M3STL3m3KuyuQGFutUiA48d2dGnqbzB31YtDXFU",
  "key26": "5gVJSJhTpCX7i6NS9Eo6AtM44cafwJw2CkfM5WiSuUR5MwegAGQtU6kvHWcR9D8XgfukFvcxKR4LJZpzMpsmgfAW",
  "key27": "2nZay2i5J3bpd1CF6BeWpwa3PmtQuB1ET99NZnB6Mc6Wvn1Goj6446xu1gpjbBKatQzNmgqHT12WsRdMcvyPiGkx",
  "key28": "44Tcs55Mg55sGvnzUGXhWGniR5gsSxgxWVf2BFyBWbY5shtreBbQLrxTvsju2vpaNicUpAp4dnWReLdLgESNnQRE",
  "key29": "6ytS3SvAy6YKcqb9YvqCPagzUUpnfkuKUeDyhqQkbkFVThDcxNxYsq3cnFxKTHbF1TpQw764i1kiWFrpyWWooMp",
  "key30": "3Uf5k5d5caZLFeBLjBQaG6xDEsuEBh44rGmrnKfUZWJw5g3T89PiauA3zhjkzkNKmepakRnS3mVa4xr53ZFMXeGS",
  "key31": "MwEuajXSY8EtTNbSDpuoSpxjydykr1ts8tTPz7y3jsKwqgYamnaTh1HcoBfLTKbWvfJfCNzm1SE4W2Hdvfu63RZ",
  "key32": "614hG8sWcFz6WcV9UqUsxeeWkgLVgmyp3kqNpGNXZNuunbYWDR3VFVzEwhk4wGhb4VE9WMxX9smeR6Uri353i1F6",
  "key33": "59fvTZriwAzbcsipA3Udr4mbzjnBfqhGYxGdkzVcEbBgXeiiB9tpc2dp7rhuk2EspufukYjhBYmfQ9vDD9BLLxyo",
  "key34": "2t44rMQFKGezyYQHBbHW4nsnvaz5KLveFguF9n1drsabdKVkNhtspLdhsT3KuREDVxA1yyHswjuVcP6YB4MuBxLq",
  "key35": "3ggY1xrmqrUx8QG886R7oxjwgsKkKtMswZnhMoyMh4cLNEJUMNwNBGeFw2k8YiTSTNVy1hF3SScdqEV1pjJxSdFP",
  "key36": "3wwWuzPEFjxN3XFTK7PKNo8TRTafhHmqmYcZxniWxv1xyLqSbGcS2xnoikwUkW5it3iQZZdT83i2wLzycNHkgEBA"
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
