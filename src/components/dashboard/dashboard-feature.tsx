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
    "3Lcapy95jcb6bmwsD3DysV9g5373pcRSmdJUZySzh3VqjtsEH1y8H8humBtxj4zBn2yLuQbrMJ1ukp2G2PoSXbo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RwfyzcsUaLKsedRWSc4d3UhvajQiy7YLc49BHs7WZH7icoqnLbrbtj69uxMyT1DhouUT1CEWNgzvbBHKw8gPrNh",
  "key1": "59jQbrBmfX3S6RH9geGD7HquUCxfEXtnY3tdTaru8bRRqVRA2Hon7oKJo1ZZB46wnvDHBH9GTYMwk9QA6pQFoMsh",
  "key2": "5Y1KgeThVvFAsaAFC22sSyG6ovSFGZLnm4NL7BCBGkDp54yG9Q89BsLfsWzJNFZxFWfqoV2iMHHuEqYw7wkPiXet",
  "key3": "gomHCZ2fzP2C98TTFMc1gqfntoSCs5V8CDiodQLDj9iUDLVgvBegqKhEx7eU3jXN72KqdkpfD19cgm1cRbLZdCx",
  "key4": "oz31X6WHBvXCa1aD9HexBsXdd1HHMqXH794Ro8VJAQzBk97Wpb4Ws2sYKbzHZCZaZ79zRgk1qVs3vxtE14ecEaP",
  "key5": "imgZTFsfegBrP6V6Gz2eotPxB3arkWVsFHjzYt8PvbwVyv6iV8FprwHx6dMgwN4jCTDgF2st3pbiisRVUEBkSxK",
  "key6": "3dkH2XRvwHKLzu6CsqaYEgpX8HMnbTj4mzpuXo5AebLXSgi4x1CBt2nApeiE18HLBE67aq4EZhAqWXCTrne7bHyG",
  "key7": "5awHWAPhDPtKJkpULeuQS41juWVgGSmpCicpATuDb1c5SMyvUFds7VPoN5jfo95bc7PEzCn2RzgML46yjENDma3T",
  "key8": "56rwAisYDhaf6LLxSymBGZLu7gcm97xbBgkq2gq2spPEf7sazZBnWaWCvNQ6q5fVgh324jtcHCwXn1JrT5SE7oo3",
  "key9": "zX7rSqnJz5iTB8Tv65isscui3Rz2C85hUp4x6dbKTPQFzBXXgjtoJc1qSx4Z8vhcBnk1v5SkCFtBpGmeZm9u8wn",
  "key10": "4dqaeKS2V1xUzQsGfDoGhc7N2Z2rfFg5hoTarn9bnjrVM8P4jJ2k3oLKxu2vvoxytkzxzZM5Yoaki8xn37YHCtma",
  "key11": "5CMKbrTLqW6UdXfU4KiPq8QeZkQoSPo9fUdr8cQ7UkQaS1nTWokbGsbcgF2FNNLw9sbozDYbioQUpAJuQed3bBnt",
  "key12": "bKCRqNXBUimJGuZJiyyJfKULJRe6YskbQn5MSQ6NP9LUcwsU9NV2PTmoudy2UPzEpqKrMLhHhfrZU3k2QYLKNjx",
  "key13": "22e3U89eNPjUSmPWXaENAQbTTifMXAn6vHixuo1YMqHHsjbWT8bUqiJUc4jiZZrS6pkPViXuEU1ZR9HycdPQnVjF",
  "key14": "61W6ERzGbwGXhjE3FaLcetnyjDppz5TKFMXVpFdL5725jk7azL9w3WiqcCh88haUS3fxQvG9j7nhYwnHkX8c9ZEs",
  "key15": "89ihJqV2Z4xtQksoyxEQvCPmcAux1d6m7if7TAh8TyZmsgFQfajBTanqfdQuXTiWpNkmPvurVWvecLxA4cFDnyj",
  "key16": "JS12fvwjf7Md9ju6MTd1SXdWXBmcngovuG7a3aCxkBQAMxAbVKZPsH3qHBgqMm7ywm4ec8aucUHUnJbjb98xMsX",
  "key17": "3E65dRZWmzpbTtpzwGQyswa8zJyjRaLUsEucgngbnYa9oUZx4Yd6pXtSiPUnkiDsD6BkNE7vGzPotHGqfXpdpCA3",
  "key18": "txd32pGHhxbCeAEQjFkXgdWh8TovYyHLLkbRvx4yWLrE4PiabVXPRXfLraLKHyEhB23gJkShEwbmNKBWaxG852Z",
  "key19": "4MdbmgMF7BwScAcJHz7zJ5wnhQYfwdEN5TZmNDN15pVJha5cPRQamCop8L4sojf3Nr7hDkBPrknz33ozBWm6LBKP",
  "key20": "2AbjoqXivxpGKa1RUzFq3shH8YqqmPAnXuwuf6NsHS8PuQ1TCaUMR7b5pAeB1JKX2rDgu1ZiZvWx9GWrMfg2k3JE",
  "key21": "3BSGaxNvvsHN7V1zibSCjwZymsqXb6J9UdLvTFk6NbvUes4aNWmo35bZY2sXRXUM8AtJN79FKci1UeyfTPKkrG1v",
  "key22": "1y6Bt5HgkGmqMPXoLrycAMtruNRzgQo1f2y9cGf5jQJWuUEkKQ2hGe44KchDFFRcG82wmiCruRpndNwc9qLk2VC",
  "key23": "5cwa7grR67jpkKTQvhR5rWQy5V6M7UxKL7M5iZFr6TYNeE718o4jdr3xTWpesc7tFEjMWGxBV9UwZQVoGZQkKmxM",
  "key24": "3WAqHWudy3CdJ1NtKh31vw9aVYU1SMAyXdtSETvZpTU4UdcmewrnXk7Q29HxqRcDWq8hw3dRgz1jRLwvDNxk8xYb",
  "key25": "4fEjDnhhkeRNmdWP1dkJVZTcE3bByDZ5njEDaZnUXvVtS24xVG6eaXy7Tr6fPtMQ7uaSC9oD1mnLWJGnZmm93XV6",
  "key26": "2MT9eBMhrDfXd39MwAryTzWgZC78E4uYAstDA8FoNQVtWLrPZDz3r7WMzGZT9hYJGSpiCt49MA33R1CMDS54dgKd",
  "key27": "4KqLhZgdLVKQvGoH3yvvaR7DetrEZks8qm6nSFdjSY8ZXXTjBrGD8pCAtcLZbccAkYBw68RLSHynnUAyfnhLjeFm",
  "key28": "4Qw5PpNyRkN5JTCun6euARHYFsZ4EY8FFiGc7jwEschMGJYBaGcRe2YTV97oSUj5s4t9CQZLQhWzJAVRVo1QtZfK",
  "key29": "PnYBVZSruLZUwSzA6X8R3cYKZTsdqZ54Z38cpRJwWKHYn88p3vfczzP1GnWtLLFnywnywzsRPWZJaKiGnFj47Re",
  "key30": "3tfDrevmoWS5KPqurFg3uQYq6K7pPRmcZJDxsZodTLCTK73hP2H1aT7XB1jLbSYbqXR3Y8e5nU2sijW8SmBXrfYX",
  "key31": "2V6fkb1czdrbWyy48NYjhfGwEsYGdmt89Yj79aE2rrHENKS3wzzYX1hqcb44R3FdHps7Ha4wRyxhE9Fqx8pk3S9e",
  "key32": "5yu7wdhQcW7WqdCXBszm7UJt45PY9pFvC3qEjXvupyNQQXUzsbG2CoXv5AhuGZ4eQXaMjpNvGPY5kqtvzZV5nE1e",
  "key33": "5Aa1qZh7GLCQK5aPK8vWspqA2HNwwaoQFbJC4hzH1MmvK6EUqEKo4gaqibsWrJetQfvgHPPG9A4bgX4HS8Q7vCcu",
  "key34": "4bDwD8zoEC2XcqwRpYN56erWfxjvAEodyKQHPx4onpzGZqM19tKKTctKcb6mnTuxvtxzSkypKwgAFLwVUMupQWes",
  "key35": "qSHQfNcYHRav4Zu25rrRaPkKaUXRAHjB4by4MquPzfmJZHvtUeVPE4htu3nMeZsiNDWQZhMwbsZXb5m8gg6MJMJ",
  "key36": "5hXS4rK71FrZyA9tKXAFikH6Fh9fhSxAjdba2mp3pF46iumR8NWC5aXQTUqPVTCbZ8n9yMNnjtqwZjLvesd85fP",
  "key37": "5CCKPheNkK7ZJNRPNjRHqakXSKJvq9fpekmxmo9zAzTnGHjDoUBEsViR5Fduk3dGQ1ZLobSsvMckkKREHsXTfzL1",
  "key38": "4thPYuvSJeBQAMzvJ5Qw13rAyk9E9KB2ZbbEcdMcJtzUdL57Xm1m9DhLo7GzWDXdfKEZztMpMLdCVxkmevkyDrAB",
  "key39": "33siYfL4WcXfg1jSPth3ZAJroqEyMatfYVkh3dkeZ5kENmoMM3kY872aVDR7tsy2htf1N8N78V26R4rGMXVwjB48",
  "key40": "4pH8xX6cCxYZUfchH7MVA1PNzi4jn1uJ3ua45kyrmM2VcYwWtW3CoCUrQzZsHvMFW6ABPnAFgz7MSjckGsfsFWR",
  "key41": "5Zj4tTrKfDDARrmGLn5DN86D2uqZHHtsR6dfrWt3JekNwUs1Tj9kF8hQfpjBfCRNXromb7t8t9wht5A71P1UABpg",
  "key42": "4dN51Eye8pHMSbgk9F6KmSrdp7XNJNXQrzkXKspCm4EKq49JKVRAST4fFzVoKF5qaK1MFsHMEkLBsVAw2jTYpPYS",
  "key43": "J3AEpxcmoScMQkJMy4rW7tAtL4qnN3CQJ4aKMT3nmUq5hVv3YcB8ifiEp3eLpGzy3iLVphYEo5j2dbKpDT97ayY",
  "key44": "3B5wypMN2wCQRMGjwbFp97CzYp8GZREyappesMroQAegq9j3YCCB7Rqcg1WS2kPwXjz3Ht7aQcwiUVs2cTDztmoE",
  "key45": "2rTFvZfLQ1Muh2HngX8GyyU4A6JZviXEVEiDtT1C3cEHQkrQAjzHqXvYQJLBbffU4vrAV9HFmQsq4QoGL1f7g2D5"
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
