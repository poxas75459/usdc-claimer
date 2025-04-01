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
    "5WPtaRCiPrEFnm6TAxi3HSCpBSLBJLC6kZ5vq8dL6E9wLa2aAQJq5HTV5P62MeyZtuRRBdj6FEyDFzV3kPnp2w6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WCMRd1gr1bPN8Qob2nQVFb7xevpTRU7bca3dr41pFRPxz6dcVQ3eNFBo3ocjBtRrhBEMFxdKwbgetEM1jHKDLGP",
  "key1": "5i1D5iWfX4NWjnRVHErL9fAtmbun8Xbg5qwy4LeaxRMr54EFj9H9JRzFetw6gusaGU1res65a7992BRQXMaeSvEG",
  "key2": "2dm6w2Jw88M8cUkNifHZjcrntUk89Yudcu1cahJ1vUCYEontY5GSm14CizizTPVCGNvnddht3oHfSQ41nZYTV8Hq",
  "key3": "37p8h8LmjHiEymxRyXvDbM8CVXJwbasS3Gosbe58TZeTtYdcPgCCYqEJ4UvvPsS4R36y8MUt8zwSVUfwPEX5xG1k",
  "key4": "4eviwByGwcdwfFWUEurMkNGZ16UQdFeWGR6LSk7xU5s74c421kisvyRc4yYVKMNXvJEvkwVDmUq3aQBDEm5mw9ex",
  "key5": "3eNRziyTnu7XQRErEGxxPU5PRMeJbxRi5ynN5r7etb12MEFdg4qaAS23TLTEFfNwXd7uNWpJmiskHLx1vwvv2D2z",
  "key6": "3UYMFN76Hnb9oSNqHWsYUYmBvLeKuSgsuimRsLGx9kXSqAtfbLRHgytLkseaxm6DEoMgrts4k7UTS3NUqzUcpNZc",
  "key7": "51QPya2h82GyqcQvReiJxeFFJxpPPWY2bwyZdU5UNLAVR9PtUmdGjDmjvfNhQQrJFRP351kcGRpXq2iEtUToYQx",
  "key8": "3PDc7iufzoWoB8TdqgbDy8M8cR3DxDop95XyBZhvNqNbnr4YVSp55KVpCBzqngE4GWoE8sFH6GB4QvWr7HYjpHL5",
  "key9": "9WxZCYiC3cFWcGkcFrWyRFkFz3B4UrTL1aHqg9XRhFhctv7nNP4M4wqfZnp62MVTMkDm5mQkdSNW842wDsjSGHY",
  "key10": "6Hs6Ew9xLG25FTFdQxpWoHR9SMLKgqynksCRyT77ER5Vbba7pkUDAQw7cg6RA843rjPErca5odtEcosqVXeuykN",
  "key11": "zD5xpDWXxWuwhWEkdaiotrPvquxS9LkA5KSuKkYmkxZf5qqKMV5LPUQu9of6vs5UQd9dfJt9qRNeY1FraZEVfWK",
  "key12": "NG9wzewuP1qxSwUZ8z6mQwDRb7Ep6VNmEMHtonstXMqkAsChLVqi3kVx1YHzyVoaG85VZi72Yx9p8zLQzgJj5gk",
  "key13": "5jym3SHjZE6tj4QtqiXeBf6v5yuLGU86UAF2oCDdSjwekVzHboZ4XYHngovpBJRhBrCWoANnVrScexQFKD5VA1b9",
  "key14": "31HFsUgHJXPs85hBXJdpEqxj4dQDh2mdGkKX4xrUXrdkmVzVq16qRgUvmUv3H6xUe6tj1bF4FEmyrpb19KkKBaJJ",
  "key15": "4URiNt8hEpLjFWk6nhWwkBPCqTp39wjHLej9JWPBbekP28tGDGDR4QacxLuuVzUWwDp91DfHrkw7sDuTHr5E6L9y",
  "key16": "hYWQfB4iMfGp1SdqGfd1S8en1HraqUnYdyMaXNkBGcdANtJL4EDc8uoexkDmm5Gij1EauuJYiYG1GmAatuo9gzX",
  "key17": "5SZRB7qwJgHkWZzviaes2BinLaMxNMbSkqhwyKYxUyQhXsB25FomPv2WcRAxuPFp49ZqaV8CUSidgoTaP46dD4PQ",
  "key18": "2QEjEziJD3FJGKs7DGZVEUjFsWb61sssfCnr78jcabVrDokt1qb18kefyywjmPMjVH7wAipxsj4KicUefJGkdG3a",
  "key19": "2A5KDXMpMny5STeto99fLyt9ZPLoiZCuAnWdm6Q4sR1T5N65FuANgpB8bojCatB4EMwozW1xLV8NwbDXhecnC37k",
  "key20": "byZRkvYfsnWxtVFFb9st2vnFVypLFNKBZQ49m2kq71cU362brzSKMXqwSWuex8yVWWgJdJePuT2U1ugzvhtMK6w",
  "key21": "4iLmAwF8sq6uMMCAvLWUfgqGvJAuaMYRBgXuWRVQf9EogFadXjbgQb2VhrozhRUPHa3HajKUsEEXDMR2nWMaJwLD",
  "key22": "4ArLqfKbx5GM1hGRcbBycEpDKCmEumm8v8xTAsJwXUbr48YTvgAMvoXsA1ZsYNZCeggbecyeqf29XqKa4YCYktjd",
  "key23": "54GXZtd4Xia894bjEjbRj7wZBwyDbDLtjdpXjxRoEnqzy6Q4rwUM4ExnAajyrhdAfX3J7V28HrDfDbmXq3dNqa2f",
  "key24": "5mo3ekFx4CejVBSbL2cqcV4CMzJfBVTB74qR69pNfdCDUSoBU6zxpBmqCfyrFTBMjqo9kpaYLuA46BbYxpL6peBJ",
  "key25": "4mKo5xv5GZJKRfjVAvwWmG6xgcZCrUhQbMQRYouTfaei5UUyNSZTVGLaKBzz7oNf9yTf2W2dM5hXEroyxTvXKwpb",
  "key26": "3US2MTduv1BYSeTUskdMBhnvQNaKHDDi38wfuNw6f8dt5DPJGDXT1baHTVY5bZZDsThrnP91BPPrZb2FwLtdHGhU",
  "key27": "58QztHYNE3U6B2iDbj3VxNR2Ng6vSjo9znH8GijrvQeWgPfCzESvZE8sjCEvrRaipHCAbjqW4Y2MmaBwsF9Q9WUV",
  "key28": "676QMHRDgqgeygmxNZTdgAJte8fD957LyCCV8szcAqBWxwimGzndwGjkqFGWYAiyKpqgJ9K8QANaC89xeJuo2MjH",
  "key29": "3wviuKcJKAU8GTYjRjBQKmLimFCoGq8c9oowmQaaiRjdrPQPr8MGxe7YP4t1rjrYbgCBddSNxsYvgDY6Qrx5HdPB",
  "key30": "4WgrLX5fayeT4ZXqUDjQA126P6KC2GdAwocguoAE3NkDyAD24F47mFxfXLEtF294RpEGiisP4NbGA4otaNNRaPhs",
  "key31": "32Bm51pqiNUNAuN4SWStUznHNMytUVtaE7F1S5euVxDCgjYiqKAifVX1G7qGVTddux5665preYwRciec8Wznkyt9",
  "key32": "4tvxWREztzBXNr1fSUJtZxXdq87Np8WU5FNJTcuBVmRdtvbvPDUtLdpLpttSudkxppobYoZJaHRqYSQN3C4eDALx",
  "key33": "VdLCQT7hSi3gkLLvowFKhcUZeTTV4cKWx3tBN4DDmpS7A23mVf8nce2UCUrpsYuh2oFJ7nUDvcTNksLn8t8vUio",
  "key34": "66eEJ5WgHQGaA4sjwhVfCqkvPnw7rpHtza7dYs3YdXTnAXYXMvqdkE6MumCyiWSyPwjTrmogqwUqvDKBC8AYzSpL",
  "key35": "5sga7mr8fApJc8kinnhFsDABbptcVe1jdx877xupHR47YgdW6ofv5FQeY2qakuF7qvVv7ifLUVHGWxkLRRoUuUBS",
  "key36": "UohnCe4XA8Hy2jaQfm41E1ZNX6npob9ywWdhCR99sK1BrLWvPNYJQWbBe6BWBTFHLacxQDNNquEGv8VjZKzEMDV",
  "key37": "5XQjbYDKALhWZjHZA9cMK7TvG4HV86Ps5kUP6JNjzgLN15Rtq2mjxwS7GQBNb38ayhP7yWTs5jCsGT4jn5z9xBZs",
  "key38": "yAkd3ZCtq3bdE9yWJebX55enWygeWwj9raenZZWHjY7qvF3ni3twLvtkBJQHATyGWLvS1E2M5xuJPj6YFMRj4bQ",
  "key39": "5veFSDX6juybz86N7Lfm2hidEPUAabqZCyiPNn3vJRaEoMw5hdfaKwZ3ddzyg3b9ScDj89eZKAmdeX291MLC18G3",
  "key40": "2KTDMksfAZ8v2CGw5JrAi4kfYEBUjNpmgm7dC22tV6zbA1g1bdrfyhStwhU3n1Q8DVDP4e1oRqRAu9cRCJxRWqPA",
  "key41": "WJALVPczUDAcJ1Vn3YiAJp1xawEMGp8TcRcyXUELFo29CfSFoynbK1bF4LMRGXgskfRnMKpC3TGcMqjgr5EUWkw",
  "key42": "4i4svBv9JV9rqbkPngfkwvhtWDChZPiPHj6noktgQsiMQoy9y7xDHR4AthSBps1eUdH7VQeaGETTQyxncAUToFzR",
  "key43": "4Kc9RLgqJv9VdovGdNxHyZ3JZyevin8SG7TMN4GhcwYY1whU2rQuKhntuAUhJak1QdH8rJwUFA9Hxw6hi757uzWd",
  "key44": "2VbFMQNog7vyzpjcMuFcn6pQyxVShkgaUDp7y5G6SP1UtmHqYZqMxJcQqj3dfCotYEbTjyHxSV1EDkDo6SZ1Koc",
  "key45": "5TTxz58cQNswjXTpNfBKeo8tXL8sKQWQrKCVNumnzoZ5SBtgysosi6CqbeWa7j2X2BwkBCR5nYGYvdXRuLPPJx3Z",
  "key46": "4qtEVMiyzQCZDvv23taJa6eLgtQ3SJDT1UkoCwTgnh9BcqdrHGMos1HzgxFNL2B1Sjf3MNGUw54qBQdwtRCRKTXZ",
  "key47": "2z4Jq1RZJuCNtowJKgswxbvhQcXeKfGfhVFuVn9NRcHR67SEM5MaKXdtT5Zvfns7ro83iNckhmALZ9pQEXKJpepU",
  "key48": "4Md5hKawuGC6V2mZ3WbzWy9u8kMVXJv9SbATP1EcunNrW3KrpLLFghCWRFUrRzRvFcEFRnaJ3cLGLZu85QJN1z6Z"
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
