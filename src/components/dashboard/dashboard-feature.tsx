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
    "3aJSbfu918GYBooMy4H3WDXCTbvwYLW4sMa6jiWctQtmKRDJ9KJqMwDpZYAcx2Df1RijnjRdDaATbN4Rmg7TM3o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCd57nsoXH9TnnwsBPXvQWmLZQPFLrnP9vDWLB85rWFMpVBTqc8nvS4E9J4tcMNqYYTDKdUPSeeexnTec2uYTPP",
  "key1": "5gAqL8HHf67AR38ECaLYb1UTAuZXqnLYvj6vx839aBkJskRneHCD2yrK4MJvn3q1RvK9csZXd4si4ZyXueesnTQb",
  "key2": "64EHkjNhzkejFzRLVNvZiUXNehZ25VN4dLQpYJJdKQP5Eqq6FjDGmNumAiBzZ8TReM8gwHUKUSrgQmxYSCaJ9KP2",
  "key3": "35EjuxvVVUtwHTQfXQKnbtgRtBWboSuT331CQh7KYH395LNJf9E1uXdBd4RdjoNdHeRQ1EgcHScBemguZgAHEUSH",
  "key4": "3HnENADosRQF7XdVobXaHhD2WviUXMhzKGCfWWkmSrc5WYMwmiLSqUXikRzgGwkxTaSpEL7GRZiNZkPV2bFsB7xh",
  "key5": "3VyYwovFig3LdGYYAk2qxx1vQaeyKwdShaYSjYwWWN5bAQJ2qgWo6NvRBy18g9hSZtCBC5PcHeKszvYfnngoY2se",
  "key6": "235EAm8TKMC1b8KXUZWbucQR9uDrr4VWbMs7vWB7hMXCdMpZJgnbJubvBsM73bDjhPtdtisARLAbbtHYnB7EPxPY",
  "key7": "3ZKxZMYqx5HQcXs5R7ESb3gTMt6Y3m8LiNgzX9wRR4z99pmQsLv6pGN7axbT1GnoDdx8vrzuH3uMJt3YUH95matH",
  "key8": "2xVjMJzUPsEbkiy29K1ksfNicw7ZgaJ89HgkQGaAkJGac24Wq4xqXC9b2cRKetHYj7gztU6ANqfwo6yj6tZCYWtW",
  "key9": "8f97VmcJN4wHN6SARMLBxt9T7Pb8buhPLG8XSDjRCnk7cNqxuGqMsEZUvQHujPAaDVNg9zAe9woRCGPDV4i62Cz",
  "key10": "5UV7FDUVMQCfgZ97V5Gm34i5b7NhW8DhnrUvKzcUTKoi8yvgfM1xNUZLEqujtNispiGj23vGRnWnPBoSiqhWCVax",
  "key11": "SnL5BPgJFZzs4iMav2mztwjTANBZ2GEXgRv8Uwk23Xia8UP8pqzsqRDnMCLT81Pme8nSWhhNwJzLuUDjRKAhUtM",
  "key12": "5McJD2a7Zs1HbUc1tTsKYi57K7biazJjqwYh1BpUmu8dEynmpJhN9wj1yMVLJvjkWJXJcXtRDBgfbxQDAHEPvcf3",
  "key13": "3q5JmMgHAr3nDja7RHZAaNZv3N9A9xHjs2KoJPTCuSJ1CXiYggbWmxMXV367JdRT8geqyromFh6HPuroXRPYoafx",
  "key14": "36D5hcgBvq2TkPLa6rXKbysYzGmirVrUgTVz4RzPk94UJtNdd4KybKxgUgVCLprss22XBYGZ1R6a8yC4Qugc6abh",
  "key15": "4zpw5FUkVfnKyhbNFanYu6ttrmMJbJuK7tocTUqTKMetc4bNB9zQoCepmdDE6xNfztBrB8aTLYMrvdJAoePUdFYT",
  "key16": "4TzrtTpSu595EQvunLsRqNBQ3f3aYwHFJVQqkPSoA2Knuht58h6p6gt4ydSek9e5yi1UxDjQLNS31ytia2opw44L",
  "key17": "usK5X4ATQWGKQjNQKdtDi3QuqfU7viWhiPfFXfGEG8Z6AL5opw2d2Pj2kemV3XLRxdz4CGzLybwEDEMFpaPvPbv",
  "key18": "4eEkCVdoeNYBTky6mwwzddKpCy1vgsycz6wXSZdRjDYnib2GYHva2cyhTRdFLiNuLpm2iPuDehmJ84QS6ZVvkxrP",
  "key19": "2WsPYyLQpmZgwu9HbWbNnJ1vm1hV4EtAah7RMUopTE91nF4ZMN2EFCHBB9wiCtEYgsx7Bw8FpP6xemxWecg9YDNB",
  "key20": "8u2WxeeN8k1wRtcxckzGdhz9dP3fLR3cHHYMiUL9C9BpRNVQWphjnkmVEL86rWRdBNu19hb45xncgA9LLmbwqj3",
  "key21": "SkTgetWa38an8cyXa2mn6CBm3YCwtC99Ed5MjM8ouRi8HBx96nfGvxCQPEirTHarp8pTGyV5vtw7oAWenKwtoLe",
  "key22": "4imUWdtiG4Y8bYCiMRCmkK2b8J5qqDMHQksyFvxK14C2F3uEUCbk28Ho6DGBFfdyhJypm18RTy7VJLVtNrP6UCxb",
  "key23": "5zG4spM56p8msgfvxDAFSi5ccv8QYy3NeqefZyYYuTJVGyobVnPDF2PrkTcdRSLbYraG3GSccXghSQwvgp33WuwB",
  "key24": "2SDMBk1Xrd9Uz2KpmipZgxiQTcixs1UwLgQu7rbFZ5gw6NUq3EyHBBYFCo7DNr3EnLN8msvmrttbvADDXKsbfWZN",
  "key25": "4dRuPDQVff51Jdf96N1Av8GXcEPY44e4dwugUrPMb5Vf8hcYM5UNQmZMaqbdis4KBscSnSbdgGvm2LHbTLSpn3EY",
  "key26": "4eaDyMKyMknbATcBsKcE8jHxNf37HBbArtHAmRpjY8BGyRRvyiNitY3f8zGTiAeNkhxmY9vUWVrZztdxWqCin2AF",
  "key27": "3RUM1o39cdMWibNP7YtFYx7RBRVCmZte6K9owdas81yiGZ1yELA5Dq8m5KWDcKtWdHQcVF16SBak2otuVUFCGobJ",
  "key28": "2R5XG8iii3TX7A22n8vr76H1UWzrnjiCZ9CrPXd198xPUViAUaCb7MdDa2R7zXX5xVoGY5grn1243uuFSEyRpZiF",
  "key29": "5V88uZGQDuXaRtZDT2vEfmBhMpRpbqDwrVftrYrqYwCWafHef5LG2T1JWGdHs5ePPKssXbRYek9atpDG2BvHzxaJ",
  "key30": "5WqqJ6iZQxnVBF1FccF9yA2snwndqnRwEGoLepMR17UY2FUU6Vcn4kBc4gCqiGSuniNJdiEeaJixPEVikNqfN86L",
  "key31": "2hiWQjrPFicbvsLZzRnU7UQDBJjwLC6AaJ9XeLvKmUwxS3WzGTRMDPji8Bkqgsw11wQsZgiZXy9V5NgR8hvNKxru",
  "key32": "xSbLdeaQUVwBu6Y7HhS85g6yEK5Fyv89m1PxTsNm2yj4dTMQCUv4AxCcmhyfUdnNpmgSGCFeizGQarwq2e5679C",
  "key33": "4NHADWhgMBg3865EzN2MniKKByF5KewH7KbuVm3YpQGqCPHP9sfrhXv4cUSqK36a1fyDmJ7SeTHZmx8s4ngDVpJf",
  "key34": "VfJSnjzoTGWN49dyci8BDCFVXcBbAt6hfNncV1GDF7tvWyTvXKY4GdgWWtuAMPypGNAW4wB1eiV7UcBt2fxwwfq",
  "key35": "5afxVEFLXc3o57WbzZ9GSyzxgZD2WGNtpgNVnTcVz45CzPRGBoCXyXwjTYAao3Nrzp54Lyu9qYjzBRhdr9PSMRdG",
  "key36": "4p4A8uV9qH1QyQwdfCDvBc7TvBF4J6qdZywZqmwUWYfg8c4giJ1CQv7yG4mcN4zT5GPJN2Rc1qro1kTvEaikrKr8",
  "key37": "4Ak9JrTrxY527UEHzmPDf5yJH4ZCRkD8LY12r9FjHvGsxqKMSAMQhMnc7DfJr6sc2wnSfDe9uqmjd3LzggEs2sLA",
  "key38": "3PdYFd3xbZTFUt7tvLTuv4QGusk7qXq4X7JK8wKvnULt8WxFTsNCn5yUokno4B8as7uzCjy62Hai7P8s3rA3udf",
  "key39": "4rsqDtJwxnxuWsM474KDHFiyiK3Yha8r3HpnoBmJfTaUnGEu37vAUoLNtCHx2xheLyU96MPhXQ1prZcFGKDMsnnU",
  "key40": "2QhENPgyEDRHh5vmQvpi47AvaMQDCL6RNJ1LXfMyZcBDJCQjcwYNu21KNzLR54r6Uz8MGmvSACzgfHEuTDoQP5xq",
  "key41": "2KbrVxtiqdG7MQ8CEV9ZHiNBcVHXzrTeP7rcnTEZXb9t8ArsSev9gUk7r2x9fHV24uYUQqBMkLFb2rPT7Kbq4Hmh",
  "key42": "4Wxhf6z6aVUEnCWL4MH51FHcfRqji7DLW7nXY2eW7Zo2VA5iKz2LB6GmAVmwLCSeggKaqahNmoEKiAdCJhVzbSeA",
  "key43": "2qKjiZiNBQ36Fogp5N21qHrs7mvPVZ2YUoLaxyBMtwhz93C9iwpWEcH674P4FT96JczQPDvCtWsexTeyX6HJAuTq",
  "key44": "62tK2AxzzJWFrTTSwysxb5G1RDWfSLiBcZGa3P3hspDcyJ7suKHkafBfz8WPACHcdV9rtWshtPyY6ZmRoRyKENU",
  "key45": "2td9vBWt2abWoNyJ1QhHyNW5pz8gb6fnCdiGXjGp5SMNcGGc4xLVU53n1xyvBMFcJiULaGyje8nAvEv8B2dkwCup"
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
