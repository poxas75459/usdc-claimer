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
    "5z61zYYborqqZe4zmXzQFNFnSV7NE7QbTg12ctD2r54d14SED2cXsNX72ZK4hbwnnH2CkxmKj3NVZ2ocqe84nTp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G5dFdQM4tk23smaSmFn9MiZzVUqe3VL5ptbSsCPX7qmLt9EABZqg7ir3CAXhXi7UgNyPt9rZ7WFgAn75m7Fbr8R",
  "key1": "3jua6YGBbzTfPqPoUGC6jGoGZPp6pgPdT4SaAJejyrosWyG8UNdoLSNA4eZZtYsYU4zXnMTpCGFXsHSGXgjR6bD4",
  "key2": "2wyLsDXHwZhNdTKYCCVKWKHGWFfd4HPeccibxMNSsMXjAmxuYUVHen2XjYe4A1W1tVp9vC4g6equwTgT3asUcRo5",
  "key3": "3gyZBtG9a6LtDyWnSKBst2XxSCTMVk8xqNxEmy7qXGcGGJoSCifiFaQJKxHZyxjfgYeNs3jcuLGxxSTM2hJf3e8p",
  "key4": "2KE7JWHUSD5BbPRrfUQJTFx3awKmkBQaqEWqv7oG5Px1ESmBcAFHTyPeFNgH5gjfq86Eo4ZTfQuGWarTeZfgVDkW",
  "key5": "35PcFeBM1cWCFESAgkFvNjf3KCNyAUCXW8GoQa9D1ZMVUzaTaWDQz8wLJaxc1dXrKxHgxREtvtcDkeNoAaEtAeao",
  "key6": "YNEsaNm7KdWZVTYvnDuZHkhFmW89sTDKUNBVTqWHDkX7fCnF4TUGg1PX2SpS1kfr6j8wh3h94dvuC98xUakKHF5",
  "key7": "EhiyRbtZEWZXgFJYgRXCVd1pdZ1nWa5PhezenxcYSfv7yT9AG9Et2CgBDSKx58jaQ4bvK5Rdnm69cZmgAMucJU3",
  "key8": "21CmxyGYYwqzzgFXcnkjxeCH5Qrx4EcErBMWxYW6AzbaFJPTJMLcqKwCyWkiUU5yQA7is5VwRbsW61qHTQ2SN3bw",
  "key9": "8TLMGry3fLLZwZq9by1J1sA4eUyr8E6YDhjwK7Ps1E8vAY9QFb49Jmq6GCHZW6yeqR8mYMrHKRQkn7uMuKeVxbr",
  "key10": "vPdY5zyRj9jS6PCjgPQKGaXpTReZRyZsf4tKGX7Bs14KGHTEC7NHUBS1p8Kfng2Zi73TT4BzwoUWN7kJR5s8BPE",
  "key11": "5RLCHmEjhJk2uo9BATh8k7apeP3gvetYtgNLep6LFGNgPsH5KJMBs4AC5VBA42w5SGjbyx9YxNVenfMLYrabDNhU",
  "key12": "2VJX6bzhB8LPV522Wo5HCjqQVUR8hrkRZW7JqgGVEoLA1ggWhcy8qAF7RRQ178zvZNExwaEHJgiSMpwQgL8sT8aA",
  "key13": "49xssGrKubqtdk2EEocfo2sCy7ny8NxcDigKSGGARe1c6Xf5RSSuYkRS8ih34LtsqLtqZWMuadufZA2jxW7jXjSV",
  "key14": "3o6JQzgB69Wip6oNx2UztkFxeDihwrYuk9kjH4eV1fvJyMP5Pe4CRtojktExrgPSCkiYtfL4qP9eB42zHHHWEC3c",
  "key15": "2MbycCCuDEFqcDRNT4UzT5kzMpJhdubPEe5cz1cpPHh9YYQCabE5WBYbLX87ehbbec5ibL2otcmpMR4k3gLTEqm9",
  "key16": "4KTFcezqp1PuEj9QZpBgo2nZ6R3tNwVFbt2131pshF7Ya2w6L5NuqfFo3vHRzrpiQ14gnAkSPWwAf1xUzp3oby5E",
  "key17": "65W6c2RD1hYKKEKwcJijcFUThepuJjot2xaGDFyu9XEqxySTcn5DWc2gg8Dps1Ddg2h4DNNpeDn3dQaggJod3nmo",
  "key18": "4mVN7D7KaHe7G1LGqKUtWta5866TJgjTEy2nZxA9qVKqbB22EauY9okTJQ19agZsFPnczutRVbRLq7wPXF2MQndh",
  "key19": "2oqKxSM4FgxRdoJhvXG5eUGhmZHvTTxxteTAtiVXCSbGMJsYaZz4Uz9tQMKQzrv6vwS8xUzfNS9YE8YW5whCLNTb",
  "key20": "zmArRUSbrdwifMKCEjpRSUdmv7BPFxZybsipRaxGj49EEuHoRMfmhiJMiLPrvgTX38dZ55LyJtYRyTJoGTXstNY",
  "key21": "3VLfAAhBFwaCCiRu8JC1kjTTDUJajM4TE3oyNp1LabtHLLKedb86cqEUCnb5qf22r1PpWHcFvWe1NxM7GdzBvTko",
  "key22": "3xLsqcYTxLkrD7wuVwdy4sR8x2LAPxcKKHvwv9b12SpmiArKfq8oK9UoeB5Eoaehfhrb7qobdHvXSw6cnUqP1KEm",
  "key23": "3r827PWsmz1Zy29QFDJkW6AzdcBkKGYXG6epgYZfoFwnwyuiMpno3eW46yuwbV9yiyxAH58kAmpNdAafHHhbF8dA",
  "key24": "4QsndgE6to2UqgRE8dvd8qCZyTjxZ6z1jEMm1vtjr4z7qeuZ6Bgy185wUcJFc1DZmVS54tePXcha7SPsyhjDMPaV",
  "key25": "34p1PkFctQztJmmf9odcgnf4LmoAKriMsnsSXaTe1djUWXmeWNvuEGD4FkG62HS1UisRxz8e97rAkvXk2ogpDZn8",
  "key26": "5uKTKYJTAaHV9f93hbixgYvP7K9ZEW6wNpddhjTFDnn9U3gcrq247vqSLCes6uSPtJq7mvexRgCBURgz8MZ95FQ9",
  "key27": "5NtaVXJkKERg74AE6wo2FoC7QGFZgLDTq6A3ZGKyM5ggzhPKhZr5DY2hH2DaoY5Y1W7ZzPbPTFL75bgYfzX4ZmDA",
  "key28": "5FXwYPgHwQWBqHH1NLMMEm2asnFomTjCAiVYAD59t6aADVERLSSkssgykthnKnNJNwBCAZnM1QXw3UjNsNtZdzAb",
  "key29": "5z4rW2ArmLjCQ1nMfxDTM16PaGcsn2fiFcaCNWmGEWU7iW7nqD4k7NYXDXisAQKRUyhzLDT6HF8XsSo4HDaTsDgf",
  "key30": "2shNPquH7Z2FED69vC45a64nJrGYPihmzJjC6zxqG36M3dY1tofvhauwd4THmTxbbowXHwdFBbgQ77uNsT1ZgwKc",
  "key31": "5UnbRmb9iN9Mz3iHJxhr1yCqQ2egx5NQ5Xs1BrBKK5rax4xTTyakbLJQB6rDwL8wYScjnRJozV1LaTgHGpj7PbSD",
  "key32": "4nzQ7wvMW1QqCa2SUpQMVntKcrWS6mAnS8sbrifciWicWM1ttZCJ22eoHE63PJ75sRd6qjaMXuoT9JgphtsZ6vS7",
  "key33": "2FckNPZjXgUf35iHiJXqjThAVRe3q1AxYQCEEkkHsVZBVeiutM5gnXkRJHi2MQMjWm3yXaAdLif9FWmUEKPYvjHf",
  "key34": "4uhUrzMf6chGjSZdmXwnfBwU7zGyUtT9H8ijD7tP7LXn6eRBRBfiG88YEpcuv6ietBidaxE7u5jJrZHNnPdvsFo5",
  "key35": "4SkDvgBY488TVz9LwhHtfNdFnfu8JAyduRQnDczdeKb97V5saeXMdX4LJc8FTEGg2JXK31XFvGdjDKrgdsTUd4tD",
  "key36": "N7EfJ9bMFhXLaHeEvprLwCGADBjBDbBEzDiKVAv1jKUwBvrZdWsvwxmSPPpw2tTHBvZC9JSGwU5ZSgH2mbc9iFq",
  "key37": "3PwiNeAx7rZwGMD7AcHGemJR2K6TxPE74LCQV6uvEb99fAZP9px3yPkZ2EDC2NZHWvyivsfdQhAgAXjSCmvoby42",
  "key38": "4Ri2dQ5ZpKo5FzKhbwa9iZjT1riCVnRopxyVebC23JfYxUqnWrwd5PgkcG4QeetGMoTA1BWdWLvhvtwcd6hooF7x",
  "key39": "4thqBNyZ2oiyfaTcx3qe4zD67ks4qVVEkvpp5msW54TKqPpurTA5QyQyQYk95Gep1PJ6wqRvbtZduRboQ9fJTWFX",
  "key40": "3KAnB5NEUckLUPqCDQT55aRJNuPYtLgQP5oYTtbLvgPuHXYpZaaVu6PsZFQebowqyShBBe233pKHqhA1c1Hhk3W4",
  "key41": "hP7mbpWxxF3U9pq7A2w1YFaKLBhrPQfKoF6nTGwWho1NfkpXx7e7RkvSmQytUmNJFSdpDTYcwXgWj7KdsFpMW5p",
  "key42": "2cg3y2dZbJz6NHUDfhMnFNGdmsxJhk8jNVgNcSQ6uEsiFw248Wh53JDvoNKJWguJ6BALbojXB5yYMnKV8W13AWKD",
  "key43": "hADi2Vyhxf3FdVRBfMny3TnukXLxxjnYTydbR6QLQroEVaM3QgchkNwPoftRokF8wNyHrhVW4DaeWWW6yZU5H35",
  "key44": "389A5iV28Pe34ycQPrRRCzQdTQB22skRpUMiGcTyCKnZ8RhPsfiDknvm6MJhjjfeCuCJ52N5gyyvhAHufvK4Xbit",
  "key45": "4FHhYUJSUVCJAzdXwnnq8sLBtQn2Dvfsc1u61Ay8omARnEhs4PTks1LUiQvnNVxjZHLRGugE6YMpYsa3dvFHzyNP",
  "key46": "2w1NKoCTcpNgZ3unmKRFsNWWLEf2ob5RPGMuyjwzxT2tyVepRPBGjC9TdRkS67xgYsjAcjZiJtJKR2pWYrQavhyt",
  "key47": "2fy29pnvnkybHGuh69X9HgwP3dE92RX7sDpbu7CeTnrmskpwFw6GYmVnnQcKYtqdufPZLCrZxhoYtK5dDFJNKtJB",
  "key48": "5tDFNBJAopwwPPWDELUff7LoUj6gruPUv8JnDb4E5xRby5GbsxpA3HMkBAAfXhXWjJc5ueeZaV9PcGbrZ3Eot6PX"
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
