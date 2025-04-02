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
    "4r1jyZLoNDvRuGHX1nfAm84CHZnUzoiqvGh8kjfjYP1bWtCnn6VDra6jJSWm7ditsUeaAHFuSjCFS3DSydjM9DKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hoJ7BrcoVgiLVXfJMN4dJRZB6koyjkYN8sXwWJYUeV7HjCsexEDnyGkqgQ9TQnK7Ctv6uzx1HWnvNeqvmVzHF8j",
  "key1": "5Aqq3rCERNWQoFgkgPwrTqgey2N4PxZ6fgmr6VDYw96kcZP8MZaBxVhYXqPukqyN9aBdY3kKXvCkmmz8ch5BjMn5",
  "key2": "3QfYHZ6JGqevD53DDHvyrakVVWwVgynmNW3FXMuGuYeggP44tykwgpvyrQWdN7Y9MwxvruFXq1zN9sgpdhtDWuTa",
  "key3": "2LsTVaGMN1jmubNcGyD3qyUrVy6ZvTPdboCVxMTSpAtH86MZoMkNa1QLB8h6bEFEVh62bRPxSN8ZoqvpgnWbuEPj",
  "key4": "24ctMU9TvU5UNGiRyFBSeZiFP2axWiHPptteaEQBD5XrG9gYAkuvYjdLfJQ41LMa9D5PTRNxcru8WuiADsHkeaRT",
  "key5": "4weDhyDej7nxFo92Rd4f1K6jmXmwPoWxk5j8DkLATZNDoiW1r4973aj4y1iomkjTfUktDDyyU6PoeBw3bTuXLJV7",
  "key6": "nDaxXsaMsZ4VuvxLoLR9kN75nodjMMCb5PmnTow2h3pbUEZ4zCs6RJBibExkH1Pub1jaWTt3ksYF1yktDC1zZVG",
  "key7": "jpSuC8LQ5HExf9CZ2UXRLKmUXHtkU9LSVezpj7ZPNrTt89ogM62bEmgT5Djcy6V22bipECndRycSPaxpQp5GDHn",
  "key8": "4BBam3yw74A21ab6TFhRVhv6byPfknAkcAWx4jG46QQDmLwWxSrPEZhpsoXUN2LdHhhA3tu9g5ZsfXPMaus1DhNQ",
  "key9": "5FkFJ7L5zJXngvCzJzYPdrD8VArTV2BJm65L4XYun8UQyGMSGiw5uFx2XcB9iZJUwSThiEktFYDKdWU7SLaGXmez",
  "key10": "4fGc2GdVcQHTwgdfTLceFj97QmTVf9SPyk3PurCF9VaCHPjaXC11EvAkgcWfz6eZDXgXywMspkwyDTHjXzRgnLyC",
  "key11": "2PE3rS9jNDtaQBdyDe5KzXHj3gaHTrXYZymRMKGjRp7ATHPtfkCptmTs3qxvZwinkybHFQcbxJCgZYPPRHC4h28V",
  "key12": "2EheanGgfLVuQ5qkUHJd2TQf3Xpsk7UAfkFbKemhKeMLGeMvCcynbdi8sa4QdPV785qdWHGWvwx68wRQSuRFNsFu",
  "key13": "2gSkYV34Uh7RvyrazZw91VnUVGyZUDtbb5Kv2DNVeHq7nUiLe4e9n92XPRnQJw4SqYMUT2SovUYNzwKZNjjvLeui",
  "key14": "888XNzyZ3MWbcN6TMs4XEs1cyPZHA1JrJiuvCSVWqixTeH7mPmRQkomvvPbL5ZyEjYvNvBfrEkQbz774B1MLzEc",
  "key15": "2xNNfSB1vqMWVmdwzhTQjLgRtQay2d9hGpXoUfeNGzKKMookonTAdfxZxRRNS9jEoLMMcAv3GAd6TFsW1zLYHsiK",
  "key16": "JpWrCemKQTBMF3z5tYV8R1WbGeHeukKPkL1BjvM3TZv4gsyhjDxGrYQo97jE8YrenqwpMVsgRSuMmVpUnXbYJdr",
  "key17": "grH54fPuTRyqngqg3CU8AUc9dtbLoHEhStnbxHDRHYnGrhoG3R7aj3E2K8hNHkW3Vky5GTp1hrQxJLXMii2QRfH",
  "key18": "NSMhjBqrRwh6AqCqcLNPPW2w3WTevWQe4yrc7zy8WcQ9AJdRcPjGJEvnxWb3GTz9TMmr3MVRujri8ZvxF4Xx4vC",
  "key19": "5Y941UFgB8DJuCjZ9A9HzSMdbxgmyGXEorvAx7vU445SDDAeLhLtrtYpBMr3UemchmxceYRYcnTsnMPwPAFfYZuP",
  "key20": "2Gsg9asYMj38yDBfaxfUxeZM2BCQt223oqgqdyZ6L7XgG2wVrDerpmr9rd8JhPgPA41zm2RTpbBQWJeCMMMKM4TW",
  "key21": "458mvDsRaL3U2FXd3JVTz9nhJF5kqcmFQPZ5wpHE6xMrc6z4nt8Y2gLa8nAGKDJAXAhmhnYZbz9VS2C6ErhbYNua",
  "key22": "3311nDLPfYTps6Q1Jmdo3jsuNZWKuK2GozvVGPLBtLWqJ7ZgjBjJFzw8nPdKi86hjwpnToQ31CZsmGS8jZp7CjoS",
  "key23": "2K1Zs1cFP3SzH4pFHDQvc2c3CeErVqLLv2EcoMLwB134wdCUTTXaPLWuSs8X3Xw3MG9cS5sqSMLBmadQfsY1CgC",
  "key24": "2soXWM1QL7g4BQVdbtB1SsWShFBePMjA9WodpReHU2UfrsuVr1J4st7ksVQkVucnQo9ejE5toL6quZjhrs11qmHL",
  "key25": "5HXHTWzVmVHK18tggMeBZoR2KBkJW5Tq3UnYsKqLS5XEXXEeV69oS7ps5pfpGpZ2Q3hGiAr21THR1mhGHtiqKkT5",
  "key26": "5pRDHgRf7TMyKWG88DcvuKEhDiYxtxdweTEhv5bCoryc8zK4wVLPqak7oSGAKcNx9R86z9dLuF5qYcQ9z1BZXZwt",
  "key27": "41MfTVTQufkTmrdiqGyUtFgLZePDZ4qbMbqBFNuXZyBmUYqdz3oCKGhXYJgkJjucGLSBRHgFf3EjVgFyBNxug2GN",
  "key28": "2hhkRP8A2StLMpTGrrL7UrVQ1u4ASaPQQsGLM11efjTDEkrNxkW6AJiWHp7PRB17MtRuyC7SzaZwuYuczpo1sbwq",
  "key29": "5ETGEjUjDirNMJnj9b4asXgt2AytXXRa4p61BTnu6SVjW5PtRxTABVpUNQ8ZM17Poar258Gwde6sKB8wEQCaPtD4",
  "key30": "5J7mPoiww4Q3uczUkmw6Es6C99fr15GiKGJTeBiW57AiZ4T2NLLgEhzHFW9zUcwQWnbfsMuJbctVXjCZnWMcwV8m",
  "key31": "4aRgVc9LW6itms87xad4eQuZTT4h5ANt5jHFL7LocJnCDrGkLzXfVfcHDpk21kbrJBBcujoNEtgk6ycjtvF7uo4n",
  "key32": "2EkNCD9BmnsNWodQBZyhGRnSxBUugZk4E2s4fgpEN4SYwrPFSoKR782HnWGCBE16kp2RQcvAEXbFfw9RBrMiPRq3",
  "key33": "2XPhWdVLhqNBCB7H4RZjCFWEAiD2o5HFULxLBTTNkDoufgqTZCTNKYx7JnqzAi8ji9FewtsGf2TEraFE3yh35Rqv",
  "key34": "4uGoqd2Nmeue2ApTmwQcvcAQwxBJfhuRHWyGcDZczoTSDMDCJcKrcKmumKCRMApytUrEAV8ABBredRf8mGoySjPG",
  "key35": "2RNLgc7QeK8LCJN6331t6sxn7PwHVzf5tzZgEnEXQezF4oACfsTkJM7vsrYvGVyTENKFKBv3Aivm8hWnMFZkAwYG",
  "key36": "3LWpPGUgs8KMNBeLPu2Jd6zEt4aryRsVPan86oqRQv2ddqrpzw9ZoAr2KSwvjCcrzhoys1LMGTVF6KrDXmRvLoi5",
  "key37": "2qaLiVp4iAvGDxY5dEhxxXxZuDBRANPzSU671T9zKPocez7ntEy9yCYFrikwXaVVaDbAcWNcAnsTC1g3cBHmWqzo",
  "key38": "4ZLuLVLYNq22q2ZRdWYuQ7APywCC6xuoKZRdNFAE933QZBDL9Y2Kv1ivSicfhjEZLEQQnASDkyFyLnNbcbdusCd8",
  "key39": "4sKsJFMU44ZiGVAd8sbKyFJbdmvtvxm7pMk2mSJNa81uEkPxfw1i1ZwYWQvxniDyGcCS2Fv72jXvG132R9bi8KZh",
  "key40": "2AWQui92vkWKTxYZa35BvHtmMbSvmCAe14gyvufx868gZz6NRUbDAxSmr2hhntpur8AAJuLfJs6EiqdMBo8XV2Qp",
  "key41": "5cE1H6C8ZLxqU8k1v1p7WEwy1xsaQnt3EATM7CB51bT16bMuTQi9p3g4FcjYARdxGPmbLqYNbtizNcuHCdbJc6ui",
  "key42": "4XJ8f42pEKrn3S97cov2DybtTwJowCQNJpgonmgd6ud2HEdQKiyc4Nrq31BHJJrt5uhCkyccHkf5YXGDVJPVUc7K"
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
