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
    "umo4oadE9gd6HGt1N4UEJX28sumdmE7nuqSdCGom4fqRkdkgE4bzBGSjX8tsHQejQzYJwnC2feMHBuHMGy4nCnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exY4rLwk9PfPQBoXFdwLLfGufVATu3i8kKrhxhTK5A6cn5JWKuqFmDc9f8LKSEzJjzbJGBEubdTQfZRW7kVd8Mp",
  "key1": "5QZtXnPJJacaSoebUUx4UAe7UHhGqtxUuze7epAwg3kzcKjUfBupvtQZ5oKqPYzZAd7EfQxf7hEgMzzNwEsWJNAU",
  "key2": "2AMg4MuDdRt21hQ2GKixMNTKutt41g8WXfAyqsWVAxi79x1q22ALPELkeVGet6xmpTL2ALcZcx1uJfbxdPbEtDjE",
  "key3": "4Ypm85698YNRBMvrLcMXoxSyDm3btQmZqdUE83VQHbyaMt3AkLWWRkhk8dKmRavyGRgLCaTDTXEC5LHMsCE5UgtL",
  "key4": "4HWzFdyy7fNHMqFnEAC5tWu7ZpkXbXTwyN7n25Gxys9oKtDxA5b2RFi5rVtwbcqh6STQi2kiin5gF9EeVTRvrwNZ",
  "key5": "2yNP39mk5Y7sssge97oDYQZN5MixSHp398SaLQZCoWwCJLxfvwLmZyKrwTpfq84a2Kw1zdcXSpRJLiJqqWNkFgvP",
  "key6": "5Esqbc6NF1859ZV4zAykUekwCehJNoqUJc3E9uHLkB3VtnGzKB3V3xxD34qh6YRxmC7fDFhUoHXoEFnaLE6qLQ7G",
  "key7": "7DmxHmPmjggrGLiujhTqXsxGggNxTN1JtpnfcX6RFtiW8hWxS46HfG9XeguHJPAkXo9T4SKAE4NmAtVhXjDJdCG",
  "key8": "3wWwYRB1wZtBJWUiDeaU49D2uGaurd3gRAWnGmA81VYzQLVum1yJYuhkxHsRGruRq13hoteQgxQqJ3TyPrrmY2zz",
  "key9": "2VzY3wuWePnHLdvBWZhxN6f9TsrUL8JhXqtkk8qfw8mWDGtKLmpf44zkon4ffytfFQXAEpB91cCZrRKS8u7mZV66",
  "key10": "45W3Uv93CkhBRmvnWGxs6jkoqg9rV8UF7s3rP49o8XL6B6MF234fFV6xH34TtTQMUCat8BSKaFaVR8ytv8QqEkQw",
  "key11": "49oLdbFd9MFwWdQNCSU697fFcGenqAuqvNWeudKrtgWu6VWy3WJEYC7redx5MJQfwNFABiKeVwuR1mzEvSLYPvq2",
  "key12": "4VmhKHyKjNQGigTeJowHktpcr77ANy5Tg4F56CZY4KPpPPtzvKPPyPfhpJ6S2vLJz36ATVcfErx57DrJsZW4Aj8f",
  "key13": "2RfKhygA2Wpe9oXrdj2kb5Ag8aJNyWMrWqk4Nd3d4urxfjUi6u7iBwgKKmSdNjfhmw1WSevUhkaAh4gqmbkwm3RB",
  "key14": "2LP2B8NBqBkqADJXL3ixxmfVf23M16fLLy7vNGkGCYcmrfHDEwkN9CtFYdLytHiRcSugupkiye5farWE8zCzXpyW",
  "key15": "3mZUEUfuejhEn5mo9A4tq8AyBQJphe8hgADRFsMEe6QUs1Co5RrPPWw9y7ZP9c3bMupPmW5sTvEvHw2QN3JMD7Pd",
  "key16": "3hDw8kh7UAgs4wAtX5zNnmCnuB6ZJRrgk8uwJsBqEMcgdq8uD4xiU6YXM52rYyyhdruarPjGR79XhT9k4fyotcUL",
  "key17": "4g9q1tKYCu2h7NQeGAQfyAfnx6CSHJ8SDvefd1mrf2N2U92ZYEJceup8tMarwH4H8ZPbDZNQuRyBu1B2dLQGBa1G",
  "key18": "5seTPVe2Vb5nocodXDV97Y4XYkFji7zjRFP2nYVHM3FHaTB8jSEd7vTAM3NFQVJs5gauxptFDNQ2MxvhTyQdhiy5",
  "key19": "5nsazcDhW1EnadXEpXZyHg3K3HGMj2iZJpoDRH7gUvojbSq2aa4tnirnhqie4M3qbcFC1HGLpdGcicYqm8y3q5mD",
  "key20": "3gLUHWdRqPiuqUBwBCiLbEAMACewjdfnqvmUU6sUQzhQX3Y6BUC6iQYfPPnH4q8WvrBVsLQnYF2KwLwYoqB6jFGm",
  "key21": "3hAaYjXKAK3mGRZEyRw7Rrfc5jfdoFfzbhyxoevBcZM4udexkHTLRroZAJdawZSRqddt5J93ojsibszc5rxMcSbC",
  "key22": "3JWetRgScC7nsb9j8CjttvLsxhALG6skhKVozbC89znDzU7KV3o2kLmYmYf2L4oLprAqSaUGqSPVCGAToQgag8fZ",
  "key23": "3b7f8yC62LiWViQQWn15RGwGLjM6gRsbALhouDExtvpywZw7g3WmCxMQ1MAgSzjrHAc8GNAiuUkkbZ2eybCYq9aV",
  "key24": "g2Rdyzf1NcDqZmA2s5gvcfKy9NP7QaqUumSf7X2KpvgePbBEEWDyDLpKb6ZSb9qfTm6jzsSfchTLmE5otipa7Nu",
  "key25": "3heFmmkhPGcbCogRt3cVigH4rmdTtYK7jrPgDQGnEoRjEDUZXSMxCCNLioLyhUjL569TJ7pRZVLCbPps8DVW8nef",
  "key26": "5HjaPGSArrJAaQV8ADD7g2R2sazp44SCermH8GGtM2i5GpvXBYSbkPEAVSMpxU18dB2owvccboi1DUWYppXdAq54",
  "key27": "4uUSR7tPiuxcRLWGmB9uQQPu2Xs59tkkLttwrLsTgamVtKY91B1FkjS4cZ9jtSUs8GKrNgKQBZDzmGF7bcroWxWi",
  "key28": "4D8ksz1xME6xVh8Sr8uvC5d6gBuVcqnEq8NjP6K6uLnA2QSD6HpzTH7MQ5GFbrPtGUg2P17a73GxdTw8abFPgzGV",
  "key29": "5ewXvZFNhmMC8NkpWANcN1UiugjbTAnQUrT28RffRZ7aMZxujVCAzSJQdkZHt73Ldsy3fALU35u8T9tmU3QPDRti",
  "key30": "5fs6iSs5FqvmL4bQzWpfX2Md1bp3pfoGhEA3jVvhZcv1YBYEcTCf3U8gWrmWTq2jFWz56KzgEqSmwx4rePGLGYtX",
  "key31": "4hom6nBVPFkrXn8GNzacR4drAonBYAXwwpW34DPYUkLkJ45VzwTm7QaE6GYpRperEeicqoEJiVyyqN8RvfeXHdVc",
  "key32": "5CUMNoLUzj8SQfXGr2o9LuM2PRKDgsr3tSsVCEULg7hoFD3srrxPgNirkxshQpTnsrRLZTU77WQR5LQn11wmZhpK",
  "key33": "4RSThHZny17hcooELHTtfY88wTCdFeFpwDHzQxLvLYwZfvR7hHXeZggjMto1wTQPJ8cb84WSxcVAecQJVaE6ym7q",
  "key34": "5xRYqgePuZEhhMQ5ZYhkpssNdQhCP8oggX4WkCHE3FU4oSHNC3Y8ze8cHGePPDWA8vwQ1R6udcimcQYDLFJTDhcQ",
  "key35": "3R6cUHqZTnxMzx9LVHsHdzX5ZHKPVY2AMaFFPo38qVm5MgwZMbdzUrUSNY5ziCLvM1EJrwe36XYqCLScufjsFmbo",
  "key36": "63233qG5wTZpHHYRTo6NPCwgPgS6JtzWUFamUQNX63RBfZ489vPfDBSVjzxevF4n6ddVAG1azua2fWzqf1AiVHNR",
  "key37": "476HhZY2HoQHaRNvxUupu9EwfpLJE6fQ1Hefor4eUYv8xW6DXJ6yqye3SdqLej9ZiweqqSgtoEfChZidADCRAmFv",
  "key38": "4szqRN5KoTVdJ71EQ2EfLgn6FNudnSzCUCXHH5WxH7MgnWZ84gnYY3WaEHh3TBcPZeF4uCHs6k5VxxC2b16ZjQ3d",
  "key39": "4Gq9U4FUmj3gvQcp3W2VswMEzWKiMSMJPBgpfmHh1viav47jVfhzC6trePPLFZvdLPQtmcuVvXiq7uCcnjcRq1tq",
  "key40": "i1Z4gkzxgbZPokkwxmK9yCJbQvQ4LFhtAw37bjJEeMKGcMGZUGGjBfxKRtJMrAe4zbyzNdVusgyFxWqreMSbSiZ",
  "key41": "4xyXpfwkmJ6WkyQjfhkgZR37Z61HcjSMXtHHyoY5pmMt5Hv9ByWvPY6hcXZSJX4UtYHh5qfescko546TN9egSHi2",
  "key42": "2h2xESUZLke1wnNUsM9rdet9unDxygyFpwh8fPJiyEqH1xUpCqArdG3wP3VraHvgoEvTMQKeWs2Vs9XHuFms6rNf",
  "key43": "45Js61emQKA9t3XCMWRxxW1PRrpb6RBChCnxcsYV3nuYmftcCCyQ91GzPpCBsznNgGWYudANrukKXNL3BoPVgUi5",
  "key44": "LHaYKuLLLKDDsbG38jKe3M4mJRkVuEqex78zJF3rnSAYMr9B8UXXgdYFTAN31EFUHSMsS9sgM2c5eu2LQ5e9SJp",
  "key45": "aoHdmCz5UfUrXb1dKpNBPnvd83ZS5gSUvruN567pYXWL5fTseskimVqa6hd4FByYWqaz4RF6d6oS7e4PRtUZwqY"
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
