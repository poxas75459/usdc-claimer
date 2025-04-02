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
    "66AzVjKmkkX3zhW3SKDaJV7FNkXeE2fm5ENhmgucr85EG5r8NG2qb5bygdHbxTJyVD9eefZ6r45xig7braYVDu2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGdadhzkfPE8s9igzA9mpKkG21Boq4GvQVVMCJGgRSxjBvPdnWnrGEMLqh1ensedRuk5b8WUNa4fmmQ3uXBZVmv",
  "key1": "3xJoK5By912X4zByQzZ4Xb3VcbCKcXCN3yVY3sUfGARdVcvBDR3dwtVwL4ehHdDh7bt7a9bJgASRK4LwAp8xkSVL",
  "key2": "47gg9r3s6i53ZE1eGFZE1q8BtqxLJGeDz6Bhcgf2VM8sjt3aPHrdv7X1F3gJQLEZzvSrx3dSJBm1HWyqWM4Qa1k5",
  "key3": "2ZW55KFfZGeTS71sdAWWBjvkE8TgxRsWJwdXbQMYgiAeKZSNFpqqRY7dJAo8Hqq9Cued2UepQk9QKx9YEKUKK9jN",
  "key4": "4vCVRLqPKaqUgfURKm73TqbpKFN1Hc3J7B5RZGzCV5QdPpBZwKZ29aNBUJKqBT2j1KSp83P4X8LeCM9omYAZ1DH",
  "key5": "Axyn3DFCMAdQse5JD2VyGdDnVVNdCMnHAz5axxnWdRP8rY94WXMGHT14gqpa2KTMcJbLjzadP5Kts49njUR5YkN",
  "key6": "4DEpokt8qecZJ8XYM4WqaDMMHmXK6su6Ee1joBjSS8FUSGvnMuE9s6wkKqzp664QQbU5RVDPHBJ8CLtEGTsG8sRH",
  "key7": "28FRStPHQbc6byzDXUJZwk5fKcDE2WgLWWXbzLY67EVzoFXfeGFs3gKsMwxnLPeSCaKGQCeA1GxrodRrjotJhPTw",
  "key8": "9iSELWTfiRNHFYtmHgUv8utXJFi36bm15BP1QNJaENcSJ8vuiEBpNA6gB1VkNKCY3Q6XayY3RJgm6mFS4cfbRsV",
  "key9": "3Go6xKKPJVJtf4P2wz982iKsyCW7R2xAP1VTwgfT21rLaxLUtWzN7xWAsHhfbMY8e9fL4uiQNjeZuqhcsRvFBDs6",
  "key10": "2J37YQyeA8ZT1jXKMCedu5w4x99U2nyLvWMkbEdRRVgnLr6T3sx2ns2LSMX6TG5CMMvmh9jZ9wbj8XVWseCsS2Zh",
  "key11": "2yGv1EWktBXqacRvYVrg7jprKPuYDE6CjA2RcoHTzPaHpHL1M3RCovGBYkMF2jhGXjr4TiqDkNfvAAPji14vGhfo",
  "key12": "4kXftxk7EJTkwAnMKto3jxUQUhSVP2UVnpD5AzKkYu2p7Ytwzx2PEtxMhoAiCdBfPuQxpHD8cE8f5CPvu5oToR8T",
  "key13": "4sz3s1HHGH83Yg6gL41XkA8eFZrU1CzTwE5RxXuDZpnHFvxYmdhk3VwVW26p1bXmRHHzWrzSoXfxLL2r9DpKosnT",
  "key14": "2mfHy7zh3288VdLmN9vj9GaTFKZJhWJYTWJYYSi24LqDoPBrM9yn8LRP5F9S6kaPqqS9bX9vf3GizGHb4WsYtDpn",
  "key15": "2KaMN91y88iDGWt4Ry2m9MMkhN91sQg2iWJeHGqVrX92sqxzCxqK1L2yASwfS3uVgLNGTE4etTYMSD26DqnqwBhL",
  "key16": "4V5AcCHwuCzyz5s3qx8WYYrX7M1ZAjwr3tidzrxUNh7bQKyzWYDxf7zhLqmQnSDE2zfuVLevJS47QgtBV7HxH9gf",
  "key17": "2n41LMpYTRATJLEQyZ9xjHjnn2EaF4rYCXaniFbAUNk5bM1aSbQqAML7cUPjYEtmvgVPZhvjUjDLFThnBK6hyqDv",
  "key18": "3S15GcQ4e9iXmn9LF6NdbkLHNVQZUqLvWpZWWHvUWd2geRV5oikpAzsDQpnybjjZVikdc6J8hwQ4Jxmcb7k3Bwb3",
  "key19": "2oeAgFbYreGWvjWvCHB56BnBnazJ57ty9u59Wbzcg6i6c97zA9r5MoFppcXFAsrQUcu4igUcteu4Qwkr4tP6erFE",
  "key20": "5yxDD3zpEJhKQymeMgQsFaDeaDhseQZCmLzY5rqeUvaxUZGweTQULkwFmPYHddL9jUv9tHSQ467gHBXVFuqP3sVA",
  "key21": "5k838Jy4pXg4hJTfjqhHtMrHxB9ZuqgDFVoxoKoojzBZ5DU49bpurCKrE6ks6q5N4HRmDhS4nfdbgoY35BqUfZrK",
  "key22": "24CpyBUY3Qurv1qqwYZtPVUHfGosNDGm1pnxQNHSoiPhEBDNdAwv1T2GDZaS22hxpAZarp2zfaJfw98isSySpjrR",
  "key23": "3ziVA6PrGFWDtjJh6T8b9ucyJUh4e8pyoK7tS4jC1CUPViZVCuheCSMgKC6GeELd54gD8yKoqjGeen86y94PAnCK",
  "key24": "2fi6PxraZyS3dxui3Za6x6BJNsJbask1mFfa7HqCa74FZumKWoqAKS1zd6HMFb8aRBYHgX4fVgJGFP867ojccVQN",
  "key25": "41qCH4AezAq6SfziUJ5dyiFBgGkM66VbReHa4zw3nxR6HUjGWsv4J7NntDnCYy5hhc6SNrdo58oJQMjDeGmSZyXN",
  "key26": "5ieG48cvFg7d2JLbHSgodrUVrgdQ1RXmydfYbaDuqjwA8VMMuosuaf9SJgL8sWjLcefw86Yu2bAisYhF8ZeasKJf",
  "key27": "3ghsDGhwnKq9RUBSEiS4CgXSm7qJhaxDQPATX2iM6Ht2WZ9bvnEoNo8c8V7QLhEHcS2vtsoeQkihtYK68tZcuX1q",
  "key28": "2CZ6TTJBYp1b9Zj9TGpdBbkPXvNRabLfC2pQkZzghE964AJArUN2TfMQLucW69rbtJbHeaDm3Mnb3n17MrKPNhhc",
  "key29": "2i5jx4A4eRFVSkksq1ej83x1Ch1Ru63PuFsnQDrE8HDvcmPmTFMBwRmVdCtMAyFK7Bzqn16Q9MaFwww2gQc21hHx",
  "key30": "4yrcwBvaRwn3w28vs1SuiEzLK3wHCv5N6JJ4EA1JxrB8p8ceC2eq1r9TFqgscGS5XgM72u8NieCBijp86H84htby",
  "key31": "5twdQxpfsHBgNiH3VnH7fWSYppimHZgzB5iMGMVGrD1L4JeP1oWhZDzDGR4vBGitwVGoDk3uKfGqZejq7PNrAPvr",
  "key32": "44VowTpU5LF6kEM1qoQg96HUFGwREs3Mz3ALg8vSGE99d1WA7eeHXktVSibB7tmJjtSinCMhH62neXF3s6mN9ede",
  "key33": "2sgp7WDYGKK2i2YDL42UPyXJU6TCfhJ313MJeQAdYQTq7S3VeGViDH73iko46XuwoiSKsUQjsVjVDjPEsUJ4prrX",
  "key34": "5GUCofdicikmPj4HFLJRpTJysiSk2279KzJu4g1phqJo7FuTKADSrwBsYhpPF7WBhk5cEvDkVwGwkX43Y2iVWXmF",
  "key35": "4ms5eRZqD5f6pJQdfJdvCgJ2fMPepA2GZBTcQ1sujJ7vE2H5arJ25SWdStmT5obGU1XSu9UDhyzLNRe4bNepez5",
  "key36": "3Svp3jN2aDDztmtEkkCjW5t1cHugbMYLdHLWnm62kGNetD2eBgBsWjXLJu8VHfZ1akMANWvnWi3PDdda5prunoy6",
  "key37": "2tXNgXxKksyoJMVNAPKUCLT5cwXcinBR15xssZhmsvAsHQL7WPuL89wgMopKq1AXLNj2B49VAVhbJfTrJyKfvpVm",
  "key38": "3SY9pKM4zVw8hpSqKkTv3hXACwnNQsKxBGcgNQoomdJaxmHBV7xGbKcPVT4LNh5AR1VFrVQZ1qSPRhp8Yj5989nh",
  "key39": "5VV2kz5K3kMP19wKK1HNyDALts59mWQNKYtci5V3XH1HDXNBNHzXge6GbKm9iQPkHZHq3CzQAT3PTV3MMQwQ2wER",
  "key40": "3KUTDDxmZAsPCqTfJwqfE6kqpbot73fGmnp4Fz9ktR46WV1UvqjLG8thpLg5Xhk6X6eHiYMag5pwJ2GPMoFspYW8",
  "key41": "4QDcPxGCvjnyivvRjUbPr1Gb1kiP4SEYgvsrbSU3sjhXgtvmi3ivBwu5VLc4UPC8V9KdjfUeVaisJ2q76xJnBfzN",
  "key42": "4K5uyg3roDBLTAYCxvDk57h5sA5QDw3HCnAfp83ERKiPswVPvVVM1WXARRA8TrvvW8nYvYHFbGf6WxNGqagsv2RY",
  "key43": "3Sx3bkUCqtiCYoCKEEXdJPETsUavnvErrUaYcJu62XvX3HoHJmEs1uaiNM2pCXoDrSikg64Nq2axH2enBuJar9KK",
  "key44": "3rNs7byFZ2EgFup1NxMJ2K3djRYmxA7U2sq7zTMCutwyGwnwLCQyWbL16SgaqzG4dFXue5Y363cTo3wX81eUgtqp",
  "key45": "2f7X9WiGheikw527fvKq43ggNHZqyd213eYAGTdKBF3Sw1mJe2EpRZyWEETc6PGRNKuNJBo7RKjLcQ6arjfqkA4u"
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
