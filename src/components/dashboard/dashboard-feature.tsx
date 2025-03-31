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
    "5fkfVL6RyG6MsHSZR3muz2zXsPQhPsGfeQVMRTmeXeTHPKStVu9J1ME74TQ5v5vkjnQGecyvzqJFnfxt7ExTSSye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2KVEBwBoFBDeHDMGAythbt6vACnALxTkszZYECYXcTBQRzZcWRPHRVxL1cUxJZCNxckxEwzwSiyYY7KTU3P2z4",
  "key1": "5uxzPUCsW4MFncaAHgowrVEvvyvZSkrGVbaKSbq8UTVGsfwrXzeYqVr5UStgiXzDQu49Yan12mKpPuiXu8i4vmfB",
  "key2": "3FxraJsHAut2Rd4Jj3vj4Fxx6MzFG2cmzJCLPNHkcP1JQU7B6DEsGjPs97k7ATrPgt3D4562f3kd8B9jf7Fvj1DX",
  "key3": "287rPfbttMMDrRM2R1JRdW67pfRTjJQPTcswvJiCXWXw9zSxfeQFaU9svjpYyNJSP6UueVxskdeDVK4fYc1RLAiC",
  "key4": "5y8g7vysLUdb8HieX9K8zbgXjNKx8QVK8Sg4YvYjXQiAXKKKGVEvMMxpmZeWjicUFXnHmuqHg6JtDa3PP4LrkmsR",
  "key5": "5xifsGZw4rCikaKe5cQ4jrFXK1KYazwXwgqw5xywwgaFLpVu6Mc3hAUtnGfhcrT4kcUVB73U69z7yhfefQqpA3AY",
  "key6": "4B8E3M21D3u1pirTfkfvAVXvt3BJbc4HDpmnKGZbTho2rAsF7qCwmejZ7BNrHDuGqwvUxxo6LNQiziwxaa6pRE5p",
  "key7": "3X9yEq82mLH35vhSrpFSPkgqnX87cetbCRhZSyJSdd3TsEvBYLCvGS1yzqGbaRGa7osx69DmTUQdiSVGM6M2sVC6",
  "key8": "4Mr2FqNfqnLNdg1bmHY781TkxmWwaQLHJPL1RbRvTVQyH1dW4GZqd4nC5H1NFPVUZcqKhqKrvBD5EAsNLPSz83ts",
  "key9": "3BHvCFac5BZ4n7kjDhf9QotPE7DxQgd7JLvWQeu3YqyrBNgW8igVfW4knvzSXDnBnnUibbENh2gdAPMstcCou5bU",
  "key10": "3qtxQUSH4SsPvsMjJpxeJcoSfqce1aBs3rqe3NK1rjR7VdTmP5VJpGh4Pt23GGo9e7neZCGKEQDQ5uPHeuXYL1BW",
  "key11": "3ANMsV3i33wTY4fUVkJjFdwfz6LjU9nQJ3jdHsVc8XzNXpKMhwD2FUoP4jSZcZAceeHkT7Ym6KauoGRj1PCJHer2",
  "key12": "4Jg1zttvHPKBJe8UxnDxFe5XQ1sWVzcGshePPZ6u92iXLsXdivfmG3b3TUXdWmJCXXQPFZTMqmwhdJzQz2MkJGpU",
  "key13": "2s69MgZB5vdxzT8ZR918XKJ7C9mfkc9tDCvkxxv4cSVuvGMaHANfMJVJTdqtNL3Xt7kfaY1CDfzLe6sPTABQAdC4",
  "key14": "5K2q8wSyoncnKdUc9fpbk7qREXrGX7Mot6mP3BKRtQTvPGvn6Lebd88aKAjUxZU6RqneWmxzLTe9o1L5Yf1VQqo6",
  "key15": "EFqRjFviTxeUPDqofLcZ98yVqugwHTbvrSVkYPZtsrpCvJQB4XGgD1VLzXw5pkwKunXhzKK6QEGmDq7W3C16tAM",
  "key16": "4XwoHNqoXsyiB5CBEELaXEvRDVFpmHN1PQDvEAZJD7hDLYV4HALaqbudnxQ1m1Jgat2d4Qmckr4k1DJeck2hDfeg",
  "key17": "28kgPakMwHweouuQqTUpNBgtszJVMyaTmA5rAbNMpVvHDXF2L1sezw7KhNzBFwVCBH7wBC297gSP2zzL8CGBLYhW",
  "key18": "47pZbtk4FZrczwtNt2eKEHnRSoAApg7sXs6z1tzuBrZZ1GM7xM4787HPBubPA1o1tPDcRpMq4szTRNBzavMw7oEQ",
  "key19": "5D3s6qMSAsHpEosHpV1ad7BPgf63r1GJZ3wm648MvkRGf6NdQ5FgW7PLzmoVcM55pyhi6pN6aYQWHdKSHD4qJxNE",
  "key20": "3zv1raoTUqDrqmZP9HUL6nDj8mp17BiDuC5Z2vdKdjSwWARW8NL5rerNLvrsLWfH888afQUP8cg65HyG1LZeBxJv",
  "key21": "FWMsUYnHPH4T6uJ2TPb2s6ESZZ6KrQTc7UJ9GuaNtSTR6UdVnBZjPFNbh7P4eCRQ1u75K4ipphS83oS2Rs6xf4v",
  "key22": "4BQXtCsFnhaqZh4AZaTXwkqZEzk7zpPfMftRgVBDQYKatRMY8i5zPCSZL4wuXx8dw83gy3Dh8FQcLYGjVu4bmtW6",
  "key23": "45bYndQeapH2yz4A8TsG2mFDAmATdmrJ4w2k5KStNo2ujnYLGrYKJb8QW9wRNc5WcRhNG5QuG2px5yvq2YHBNGw7",
  "key24": "62Mo7ZguihBpBkvs4NcLkejSXzHuUQBAj2qQ69VXvNxoJDoebyWufsPKQtqAgqXQzND99wyRJzot2W7qb8W6zKrJ",
  "key25": "EiWKDAHQ7ugTjwYHjHA7LoHfwHy72btAkNtHBUCmRWPjCLb1TrTLtckRwixHywrnqGNvsc7YcADkNtZyjJhHLZn",
  "key26": "3TbFUsnW8WMspSaPzgNQb9fJSSxkfEca49DQWpJnEtNezzF4HnfoSJqdSsYhKG74gPwP9nmyoAbu96hR8pV3W3YP",
  "key27": "2dupuzDybF1a3Y8wnSttWD32BZeJc97KNMxr9uFKfgcYMmzDBwctCvsqrCC5Lo18D9Ww1suM4NBJHDBcLxA7n6p7",
  "key28": "XzPgS9aDQwWAnqjsD5NG6NmUBGDaPULS8hxAKgqzaqPhzABnsvsJSRRwxZuP1TCMzwTQdZemfSdqLb8R9TgM8yW",
  "key29": "37W4V1XMr3MZ7JSq7PuFYbBVH69xPwB44dL2So4MLoSsPJc9fcewoR4jnj72dbebkodsHdirPAzRL999ECcxtnCQ",
  "key30": "31UuKjrJiUC2cbZ7aMiXFZ5VP72eUNu9PxTsr9pXRc73ooigvtDrEb5sHrwS9QME9DjQytmc5yjHaDH9Jrqf7ZXj",
  "key31": "5DfVqQFkpUfDwLTceYD26CpTfWuQZkAMgirnLiDqtTsuPkp7tCLf9uCwdLyJLMm3ePnEDhqknRSFXVi7bmp7pwj2",
  "key32": "3W7sxfc2rTMGGFRQXuSxzjWs8HHhfNp2MXWtXqQydA8of34eSy5wq5eKeGjkyxdj1PEmhF3tTNzRr1GUN98DuW9f",
  "key33": "5FEoRzpdGRJVwifyzAtaak8F1CBSpBFihJCJaM66CM6nUpwoePeJehwj8B1jhRnSB2HTNo8VtCP55TZ6kDvx6iHQ",
  "key34": "4JdocXHmKZibd4yjhfnrFiEQdPJhHbUa8BXuLUcEBchcvXfqk2TQ9EfznRCr6HVCbfjgoToXgeSPs7HfynDhiVDC",
  "key35": "3jkxfFTAchEbxMBHDo727hAR2VVg9TdaktfVX1vhYck3juarJr8MU5XjUVtK5KH7RZMW4zxp5rzKqEW7FRzHCG1h",
  "key36": "5b2Tt6NfrcU7gPkZdWzPCLhq6geeSwMxhYLCSige9rRWVwf3Rti7wv1HYLzKoNtRG2RRrrG2iuaExH3vv7wV531y",
  "key37": "Qaw8YfQNndNuEKbDbL3BvqnRxPUFweWbftRdYA7Jq5cACgDVUxgUk6DFTHa12MSSrszkiyH62vn6Pq8Gj8suA7R",
  "key38": "5uN6smRtQtC7qw6MQuu1khfBmsK2dHCWqgDvoCvvSfxnioXpUHHakjAHPxUPbK5ZPfJDnZyVoRoPNUupHiQSaMFU",
  "key39": "2bYcSzTVBJMRd3omD3aikeqSzWhnSy6rZVHYCXbJGozXR6tE8svuRTxZQCU7eLUPM8Hbmk3nF4CKGB8j3sChfjm7",
  "key40": "5Y5a7j9yitC6FLA6jd1xM2E8QoTwMnwGJSVm2etkEMao6ktt4Lteydje3MHQGqSTV2a5aQJ9N1Wa5oMvGsip6Bca",
  "key41": "2Yut19eXJ1E4TwYFgSq2ymWvzHaKCM1JuuKxhd7i4aMZsjMkhG5SvATB6gzndP8ziBLzn1EhM37yF9UY175N3GTh",
  "key42": "3jsJ23nnCoQwEjM98PM3xR4B3rmQoPLkQCrTwGud8ZkzMSD9koLjCrudp3r9peXBxJCVrXXfKzYkYaDmdXtvHiWv",
  "key43": "4dMPrSVJA8BNHvaAXT81C86pLQgi6LzDvsGPwj6XaQJhbv5kXxrL3Yhqpkhzwr4BCeZiYEHKuwZDyCJUerRYKxro",
  "key44": "6agJXEN5feeKyBFof5Z5u686ugMMd1Mze7ew2HeNYC7Tf2QYke7jBvPHvb7iWk4iEyjGLa79yn1BxT13AsqNJZm",
  "key45": "65Y9wnpcmgeKnvMWe3AsyFMqi8b495cefLX6ZusacM9CqcBHpAWKCVmUukKrESJVfrFnxM4MyRgmDK48Cxiq9JYv"
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
