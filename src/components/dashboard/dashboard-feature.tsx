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
    "2fcqocqTh2Gfy2VQC7chAFBjXZcDLC6Jz44QCBtq1rq2ymZr2fik24Xnn77RQNrrJneRpAqTJ1qQEeK6hvypiBQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cNcdsn72jydUYPpKXkpxVbf2i99fBjXpkD7kyhrJgcEy3aW94MJeApCBVaQx4SQuFD71QsH5qyaGwRpwqhWM9jf",
  "key1": "2FDkWbeGSC5URyW7DPFbfqV8wFhUMwp6se6FhoKCtdmS6BpCXrjKvU7tSf78MRozZy4AQ7mLuaH86J3FyXdPFL9m",
  "key2": "3Z2aLoPBLriGBCg6CUXmFwTSrfuwMgQmrcsLMXwGd28UTPuLZo3x9vT2MZmjt7v6YWV863HNFR5XjFGf43AS2CrS",
  "key3": "jL9yoSWvSGfcwuwiWwxTzTFAJTuypi6JwVkXddtWcZysFMVLUCb9A1dhBU5ppmxE5RVLLYijg29ULx9XXJSMjFk",
  "key4": "2s14WY9hNuVBNSDmYY47u7wGS8ANcYF5tJkTW814HNAPtQt7qWbfeYjWFgW2ZvhRY3V6LEYLTjYUu8J2SgP9NiTp",
  "key5": "KpkkqujknbGUDQxB6FzG3hTaz3QdSJ1w8Qe3ggDmwJfkboBJUMhDjkNaYgvvTzL53ji9ZXdg7N8fbGtKbiBLKFW",
  "key6": "3SbtFk56cgd8x3BvybbEteHKHLbu6qDuzfbpCMvQELwApK7XmP8KDjBuCSPWBr2amYSLuEhKytispAC5kZUaTYmc",
  "key7": "4r2hzsCQ2Aj5BteK1QLAgmgJxRsvhaPRDRz2yWLDtgucRT8AahpYgoCzDHCscSizZM385hwQGbepTHfZ6YjVT9RU",
  "key8": "4XJGRHkJp7GJcBfEJQLJ8ETDT7YWnqgGxtgEZoboaMa88ZaF2NKoH7HetBA2ZidavbNVArDv9WBQcNRgiauqJYuy",
  "key9": "L1arLQLhdHMpDMrWPRTNQhz6aonNbihuhFBMvJzbo1YaAgkigRLJcDXVqbhmrzRYqAUY2XffDEdUNpJzj5wXkwe",
  "key10": "5bA3Cp4wn5ZthCdUa8KxmYPyhTcz6kAjnyVdKA6NNzXRxU1JZuWY5MLnuryFjV1SE6rSJpHEvBJYTRFFvBVB99Kf",
  "key11": "feFP6mGgbq2vNEN8QzpDKbUTDYaWFKaTXmDPSA397dJT2rAFNMHjWoksr7sfYgnce4B7DLcGCy2JpBFr5aiDjQF",
  "key12": "3Ee48GF2kX7ozihoURqJHsLWYuDygnNqTJ5F9zj5PugD1L2XiTan9tvTaRRzSfgx6PHygY9C4YzgxHVfwsCQm3AT",
  "key13": "5m2sZrNeaRBvdD4281jyUydComNHP683MgoAiFhUqyAQZkmmVQ8qeYepaRrWyjFKPYi11jiuGtqG3m57Jyr6GZ5m",
  "key14": "3N9uGhqZ4dnWvp33YtTisoWne8TdyCLWAvLtucimPsfBiJNixbsWk7Ys7Z9H5omw6iWmej1NcSGmfx5m7Xk1sYxB",
  "key15": "3ziMGp9JzmmJMBDx5J4kHXbdFspz7WyUVzcTYgLg4Q5KAKH7HTsEkmWdsbofekFYVJqoYeKbuHm71LHDJW3hM7Nc",
  "key16": "34HgUgiERSvD8eosQa9T9Hub7jqBn7W6masMWRG1NZtVGGs6MqA6pQ4j4LuzGiE2TcwjAFFsNbZFBcdqgCuKCByc",
  "key17": "3akReRMfM6e4QqJ4K54BZFADMz9uCBJeqBZNWBABSjKY2EQG4DdzCYzNWnWhj9f2pwWKSU5mQonsfHQNRQjUk3KQ",
  "key18": "5hWumhnBNcD6Mu9c4qU68oRiEuSgntkoQK6PP7UjbTv2vj7z9e8onndBx2kG9yoRvVonrRUUfwjh9Tae7S9kWKaC",
  "key19": "5gFoxKWn4bTFrHyEo6NTeu1Qg1cvPoPgEfRy4TEoteTvSTfmzAA7nD5eBwXWTPZHWXmbG4zk2JGEVA35AhvVLB79",
  "key20": "5Bp9jg6K6bfdEAAo4Pr6hiZCd26YkDH6ykmGJecKEaA9vYHiq5SnAsUXQ7gewgZaKX7zLxgv1JGx9TWbvF9uJz2c",
  "key21": "3YnziwomuAtDi9JXVbfhtcktM7JP3kxYivSyYhhKrRRfFpzMmXJfyAaMi6VpXTDmgr71NvyHC8mwiGqw9zYY6iWi",
  "key22": "5Mx7C3mbUAng2e4F8sNNRuoMJCWb5PCQZSFbeT3mdjESRKKNWg6AfhykTm9CaQh8jHZNnFLm7ZMXicv7xCK1Y5yz",
  "key23": "BpW3VWSUEA1K5J8Skj8PSj1UGEcunyaYhCQMvkbAirtZMAfeLEv2LiR1fHVBfULgpGhLJFTZYJykjMXsnygQpue",
  "key24": "4RVig9bVarkiVTkjL44boeMCdmrBdViiz86DA3fJGcfQZkf15u9nmTc6shEoWJmMrirQdMA6G5ja9jjdWuH22Z1v",
  "key25": "3TMwi6Wf8YrskZU63NTXbTmeM7h2MmDMCMWA6rfdW6j7PA4UyJdscWK5MwczxaGCsnGTY2iLGfSvG3taBcZfPYxJ",
  "key26": "55qAhVmnkWxWSyy8jE9Rr64PsNPYb7C8eu7SeK7gK5gZVJyHViTa7CMxqMSCWGKomHEaZ4X5TXPNVvsu88Z6w5rk",
  "key27": "LGDxmp2r7mVEsp5FZGvsRjqtEYR7oeNFAkbAXykR2DoBNdgtBhdjCQyrNS9pChnP8Y6PEn9WV4M3SWmDf8qixvK",
  "key28": "3FZmCNufYbCFQj32rzKAX7y7ztNXmUh59gjb3cuBbAaSXSGxjidhmMPoEyF5uvBDbPXndX7tQbqYcAo2EBiMgski",
  "key29": "4r7C1GG49wN6kKLRpM1yX2WWkEhDRzqgmyW6HyqDtFxiKiX3Qh8FMYw62fSkqX1Nw8jyXt58yV5yLhzMugAd5oqF",
  "key30": "3m51iTVHCCqLVu1Rvc2ses1xSvbQ1KvFhzuN6PjzEXHRrNK8SKHjhP9rxHnYiWsmWqaPrYRQSEfRdDT3bjRbkv5Z",
  "key31": "4wgT29EosNaNZxsLLdhvKWu4kCouaPZzaDsimLG1J5sRmoDyXZkTNMGDctTSJdkYa4Zh1zehz9auFjNpCnKmM46g",
  "key32": "4fUgPyZef1cK2jUiyZLHvxwVmpmqUfuSEh7BECV1hht2RNP7UXZQs8So54Gob3YpzuYWvnvBJTihf2TmrayFBtaZ",
  "key33": "2xhHtUvV6qz4ZxqWUjdP2bvfhtwc48FBZE4GQguDxtUnxbm5mkApGeAgQJ9TebHDBtfVszafKPubA2kXAijLGn3j",
  "key34": "khPgW56bHyvaAhzcHTbQ3rFDD96XesEnVRsDM9dcrNSVqrk8VM8MyckeZponFygFZBbgA6bk9Abs4oten72rvUU",
  "key35": "4mR6TAmFTRZzhsK1Kv2E97b2o1vbtzJYETY9fb5EWSL1BNjdYAyuMZerGmH3zfnWFYcFbN4JEqeN9Z7VY7QA6m17",
  "key36": "51m9Nnqo1t1SPERBpfUxHT5bKSeGhGjEnAZqcJ9FSb2ZJsxqrFazEDUR9MGeqjWArgHLViPAchDRgW3NRGRscKfZ",
  "key37": "58bwT6A2HWpDxqRFm4R6HsXKkG8hoXCBtQm84eg4bT2B4iWW4MSf97ioV5YgZNfypMqgv2rva2v81hZQV97uFMPh",
  "key38": "4EyyRwhad9TyJMXpxGFtyo8iQsnHBQwbnZ1Pxj3b19gzxxyeKr66ewfuP6yinnX87FmLV45XQcDA9L79aPazk4g4",
  "key39": "221LEMtq7oA3ejewoytgM3Wfm3kFr96uhurpG2xs4EizEHarBTSoA3NWdMMqH7i1qoFYHDGm9eqKs6gwoSARPpsG",
  "key40": "4UGZtxQ577ktpuML2TcKNuY96UNnZMxUtGQQ7NqnPLaqsabToyNHYiKHMPmMDtpc9PNrnMxGFG4Gg3WCMrfDJiZD",
  "key41": "45L9NJRRoFFSvKnNYZEXq4jtHp43FcYoJFrRdnqZxowectoNt2w2GzoZv5Gc8Estz6gjziPLa5NbcBe6QskEW7U5",
  "key42": "4dWdgGWk3kRzJ47CHaZDreiRgWa9WWCAuCruVgkhNMETXJfTjEBPNYhYgnggqMz2dGJeG4drqcVxj4agSYFjdUCr",
  "key43": "3wmkSAzjhwDUvtKBojuSXUUPtsVj1uKr32mAMnfmFvh71dNGRwwkYrqMWDcFkxRReTvx2NVwyiRoTbQC3vwDJyHW",
  "key44": "4wenQJ3KhjtiA1jjNLCP1BUQHK4iGQS1aUtwB1LzF36cykjfwcVAhwkaFV4eDmLe4ZHX2AZA5GSJv5fqtDU5GVFN",
  "key45": "NXKNRct1p2kTeyz8CW3YNf15gsKcDK8Z2AZsDZX6aVFNXiVR498n49fuGcb3aXRd3KRLK4MfavWiLZYRmSnCWmS"
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
