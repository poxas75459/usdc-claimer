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
    "4dJPjE4qToyp4PYYD3DGA9YmfasfbVE5QkNB3XWj9Rg5x8YSLjZAnuWwYdMnwoCSDsVPNrWvXN2xEDWqhyYJfdPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K7eHNKrn926LeLncWhL56Uvr7KFcz1MTQySkNrQLLXEteSiYiMyTx4r2hXVVcAhtQjf8WDSRKcvHfV7wgzCBM8k",
  "key1": "31sNfb6YeC57rNUFb5wTzuDh1R36q7hj94dhbeeFXxpgJcmHHph5asNAvYTYZKEeK71dFMCjiPcQwqWGVzYDyUXy",
  "key2": "2kh7Mw5LbGfkbSAK4kkQe1HNC8dXjpCD2XTQCnyzp8USkPaUAeu7xDuanJLeB4WzNTpDGsBYJytAKdYNtE48mXh4",
  "key3": "4tkx4FgpremJiDq8GanXWbbWbiaJPBFe4UoZ8fgzK1c9es6LkY6iaHeDe95778wxANUThBgdsQvKHT463HJTYSbq",
  "key4": "2sV3iMCPh14hK7hXLcf4CR7Hc8PUPDDMRFjo1GoesgU7EP6Kkn8amwF1c99fQUGUVCEvGP52KuH8WKxXSMZCeC52",
  "key5": "5NysDJbD9K6BU1pRyUqpZ8duqrrvFMP8EyDgsh7fSFjeTpnVDZJ8vLvtysE3pXeLfKgqEEghe68ULETsDactvAmg",
  "key6": "MXCvDAKnu1jkUnhC9c6yRrjJUELbY8P2nTbM6JmxHovmPSXXSLAABt9Rbbx7CE1sNmZe3u8C1FXpvjBTfUTJTA8",
  "key7": "48kR3R9TnoNzpa7FQvUPamWAjupWBTy6nVAqSiTY2dNcyj9aE6XL194SuPtsd7Gu3cU4onUMzuSYZuFyi9ViSRmt",
  "key8": "218AHgqE8eHqfvbXGzFZ1RjWqViHa8BQiL2Mqq3MbkxKyfeTykuWCGa9L95upaP6sKMCC6tok7Qr11sGWKPTQ9Qd",
  "key9": "3v8rM1N9F2aUGsbhbAQ1cFdtLBUZ2v92dCNYUn5CLTW1Bf7uw2qymF9HEXLpmzE5pFfWWtwVzUCvLWWM2tauap3r",
  "key10": "2rMxYHqQaX5XG1uUex8qF4vQiWvS7adcTM2GCky9CdgcVCccRHPaKjFB3f73Ra9VAZpgDDxorRjzxuww4TLZWFgz",
  "key11": "4L7buaNwsYacLpjrbXxE5e7vXxuVBqjDr1qPFhMHpEjfeAvfEZeUezedZw5QwjU8NvtJgYnazEBLSJousCHebQez",
  "key12": "28absF4vL7zLHvKbhi83vcmCbDqJdBsgthUyeAu2fUmLQ8SQtaV6D1xr36Xnk9kAgj3gjQ1FT7BvxqouRznHUHCS",
  "key13": "2d4xbx5shS7YmK7h8SovG1HNbum8TzwLWqVM8FDNbPWWkEvHg4hftSBTkJyxpqEmhem17GtRZEos7J4gedNY94ae",
  "key14": "4eDHWjuuhGi5ptECRqUkDsVTJPBPiraxuLXBr8mh2hqqbSoxCCUsB6DakDoe6TLwxex3qbLRSHiLCs2sRMB31Uys",
  "key15": "YYPYCNowht5B5LuS3KJxxqBLj9D6s26unsZvQSqpEBNC2y3ZnvWeoTzFrVEQxYj3LknJFPAqVjWBGhHrtYH3NSA",
  "key16": "2z2QNPh5yvPB4Z9KV4ijnYV2vDxrMikNbGJDvGjbYvn1qB6wXbWCihc6YwqrZ9PrnedFnB33aph423PGSHVRZ5hf",
  "key17": "23VJjtVKnw4qDSawENbGW8Ez2LUkqwdLrBqbufVDbGSDWrYX2isjmr1NEWNkP9PVs1n6Bn9Zt72VyuKZk6C5ZXVx",
  "key18": "3YJVwRBhEUF9dva46FxCgeG1yQvvdi2cRnzbuMp6jaBALaTUuGCFjpekNgTYhUnpGK7cutmQ776PJfDiiqpvzPz6",
  "key19": "4n9i4W7sKaDdL2cD4tDAE5mLvft7imWuT7mpX36K4EyPKTgquwSQv33CYcRVrNEYcQTHFTR2NRKC9x4G82q3kxEQ",
  "key20": "3DyejBh5v3MqJkN6cqc4Duu1sX6Jm2WKmRk273rqsTVQnAnVwSHXx5MWkJ2FhsyxoyCmUyQEyFSdP6WB1Nmc5BZi",
  "key21": "2kPdMeQgfh1ybkz5qw6kqRGAYVcfQo6QQWX1dtoJbF2Z1AcxEspqhvrA265xxotMFbRtEazFDTffQy23gG9knXw2",
  "key22": "3zN3mx27NvxHbHTqNcQ5rCzef9o1budMwuf9MEBGwwrVGQKxpibuiGxFP13NYAdpn3KLXqU7jYBscsJwK9griCyF",
  "key23": "4znbXqLYe6GZGBCKa9UZYuAHAcoStjdNgfj3t8y7bJgc92i94pyw2Aj53qJyHwXpWUZDi4RdZR3jNq4P657ii4uV",
  "key24": "4ZcxES2BovaAF7X2JncRwNaw8YJqRzh5wPoZacj3GDgzmDwv9YFieHe9r5MttYC6fGrXtPWdmybwvb7Y6T5LHhFn",
  "key25": "48A1HcEeBrAUnXUPVQzy2c7BEAReQ4VWpmssoeTtjCeLBSZVtLUQQwjxTvCZiB4kjRH5Bm4LeLp54C465F9GQoam",
  "key26": "3bVS6ELCvtFGLLNaEqGYGVJRgSKK8ngftydUSigJMAhK16wQTSvYizrQsj3P1rJSnvMzj3i8bjLYwUxt7Fn4EwKK",
  "key27": "5mrCY7ax7a3Jg4MpH9YUtNET9hjgta7krbXVwNR3SEgUuG37Zr9snJWKJ4z2aPeuWbDww3BGFeJF4Qx9HQ2EpRM7",
  "key28": "4k9ew3tbuwmAFcNpPqaf1QJA8vbdndj3auqv8Jc7N3tXHMTU7Ew6EJHLuf2kYpRMqAC9h9ZrhCcjrjKd7T7BMvCB",
  "key29": "5iKP9rg65AjjBvtLQ1fdrqP8DvWFx4uQKJkr9JJZidTd62irLZUJc8HW8QykiBDhS34eP5WT4N7oPpaBBXi7492X",
  "key30": "4MR7vPMH1E6T5xuxDEtwi72tWsLwnvFdAcP8UeiJymZw1z8aJQWszSPioN1ZTjufoMo86vE67aXjee3LXBdMessD",
  "key31": "o4PWSKupGjPW7njDezE5hH5sEJNWLzbQtk288kAZ5CVmPA3Fvnnved2z7VsUXFGPbSNYvmSeJECwTkKG5bXuLHW",
  "key32": "2XKCE4kD6FZNi448pq1GGWe6s4a5nypmuVLnG7cn3WeBMvmgG3xYCw8cMoZCHW7wKKFZhGNQh4bEzRSb2sacrtTi",
  "key33": "34H7ZbXSM2u3nafWfisTE5qMrqAThMJNpzbBVoSDiKMtkh13hjbNTihpHqUW7VnTdYLHMjrxeE9eXgxM19mcXMcs",
  "key34": "6f4UvghU5FZxdrGFhP5T1GiZcqzU5r6eqXkzLWKFwZjwVvFpBbyknRxDhjVS5BStAAciie4q7XSov8dyZ6q5mcA",
  "key35": "3hmQC6jGT649huuKa8Np4foYnos21jrHUTY9ampeJbjEttLEN4JuodefT2DGCjvYfVJzX8T8BHriqGHKuzM5pgQg",
  "key36": "446rjsAtxZ1mbuqUiEV3i1EDX5trvGdhBXQWLWA1TjM2WgddayytCwcimB1ZRp3sJC9qgyKKDj86aEMLPe9iwHDQ",
  "key37": "2mGFFBiZeXd19iUoZKDM1MvG8qwK9zkNbP6CjapuVjaSXppE77PXfNMoatXJDuUa5Jky5MbA8Ze6Mfby3p6sP3jd",
  "key38": "bqAFnt6KnbBsCTfPxycuV6pcbA1VoaqnTpNzrhGJErbZDkRVX4tyM8LszRbHCp2NnUDhnGab2JHKyuP4yEkvg7K",
  "key39": "3VXVXJxp1cNSVQiQsRHQFEPv8BgCGGTmd6W6sihViNinoTJNzhKtewa3zCac4G3t4nqqzdpG8cyMvpHe6hCxvuym",
  "key40": "3C6nHckbHvuN1doTQMhvFeGRwoRz8LaMMsS5hFwhrDjmaN8YwE8TK9DtiskgfGRpwEfEahxg1KtJwcAFToQozu5m",
  "key41": "3mWrseGdzppdMVgDFeSFfzmtwc8W3M7RCxmamrmYGoVgN3HM3NoDgDzbhMgiiZAys1Dm92xzqJfQf2sTQbep6zmE",
  "key42": "2SodwaYWwNqNZPSJA1AzBkB5dHKvJn7PpxkNeJ74FxeKmqtb9FwP79SHt7ehF9WASrd7K1AnyGQ2XsaGdkQZa7c7",
  "key43": "3EF6ftVCa5eDkJmtWXTW6RYZ8RDP11MBFFuQGegjVZh74oLwJ13REzvfGrKRAWA2cps4Qv6NiD6mSG8zfpHHSbQA",
  "key44": "2fqBBcAm9CWA1DgyQsKouqVV6yTYNzFMmpksgqA6U7XAVSgN4Er8Ym2sUtgyAhBi1eBGiaUrE2TAXcKaM8JSbjcX",
  "key45": "57M77QGk1GmZLNevM9w5DKA1N6dK6xZzTytyrSBMmBuQUPNGA9CwpwN4ZBbcBFaDLg5QTyjP2bE6WFQ53xTi4dm7",
  "key46": "2cw7ggosrxC5GMWh8E2PLFy9q8yMVBBbQCgC7cwWq4XqpDyot2ZVu4P5vswVVKKN8gzaPasihn44zHXzmJ5swWkC",
  "key47": "46RgxTdYXWtDosPNypLuxV1PqdmjDGwJQPFtsetaExsvczcfbWR3tm4XdF2LBWDuU3WAZf4kwwcX4KT3B9eePXnm",
  "key48": "4Y9afjxb7nBaMG3ALMeab2dVia9niUhpsyvE5UTHrP1SPBHrtWpU81Do4zzcSt3ZGALyuvsgQMPVFVFuAZzMfJwU",
  "key49": "5CHy1B7ZK5UTee8DS8w6iU9WgUqMS83qcEX7hpgQxbmgFKikUpmVPisUNRfwA3UV8tTuwr43dTk5bnohRoKD3T4s"
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
