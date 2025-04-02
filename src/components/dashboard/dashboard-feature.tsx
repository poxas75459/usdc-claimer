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
    "a5mcPESSPhwMY5APBwTV4ik3Ri2tDXkX81cgWQ48wT2kkNFw7X8uqJJem3eGopLpAwAFWaQTyCpY3zyHjYvkSB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tsk2hWtBv1TJYbHHtJjiW4cgY23KzyyDJQLRwBwZXxh1DdBSF5Q4TjgKJ2285Fgkgs7kZRs3sUiMjBZohrffUNA",
  "key1": "67egmzzPArpVj4cJooKKCXVmtFqLrAWwo4YuY7pnWvLMcikQ45Jpy2sVfS8FFmqWw5HxMGjsVtUKsELUQdcxS3PB",
  "key2": "4QpNG4x1kx5yQhg9qzEo2HTVBBTJASXnFUDpCPphgUPDPxQ4pbPLpVFTKzAb6b49gJzPt2fcDEgZRkAqkqK8vo3n",
  "key3": "4s8DRDsjKriNvQF3XJEkb4K1i1wFQqUwXdfSRRCrodmkTku3N8KADsYCmcWP9Uc3MPoUe36r2e8BPkrZLnkJZCww",
  "key4": "5EHvLBbx1bNrM4RYWUSUzcHhUaazaur6KEoa4pms4dHsXpopMf9FZHy2aXodmnhsK5PYeYwsh4pxu6wuqjzSyBM",
  "key5": "bcg42UGAAvjwJEa34tYXdxrW5c7oxMQNgyka4ECVU9sWe9hRaW3fonxrYu3Vj7bhz9KXzXjAYkjgf6sf3EPJPrm",
  "key6": "4viP41ZSDy7S5bGaMA6G6Sk2QQhKhzoNZBjvyhAYM6cXetatWGQS1FoJogX7CK1Y2ZbiR1zrkPct7x5HpzopbHwp",
  "key7": "J5hiWosThmXTQsfQnt81ViWGYBcfqZnxnJuYcCCoLigVwktvYoB7CBhD2GX7zzbJWjdLyxLCeNMAmkiyymCUbKg",
  "key8": "4FcrjpWhUvYyaaSXofQ7fUDoZXm2UvJXtNACZazaM8REMefrf3E9WerfXzKB8SaWfeHdvmRiVCzhSGWi2FyQ5TqY",
  "key9": "4uDC8TouN66NWsSRKc6hxakccRQHrjYgqsZ5VSXQeZeYRtD26ziRTHqM83jMdqh2FukE34V7t66tX934eT9kxiCi",
  "key10": "2zxArgcH9xwaDM7vSYTWX73QezMgshhHcYrfAQGHxCksCUBCgWKgBbpCHFxw1CHcZK7sTmb5o9ko6yKJxigXanDA",
  "key11": "3FSLF68CEp2bQT85EBfLLcNpmJpAGWgNv3zVKAi7aeVni2a1Ycqkh8uDih5dENoeHWBTXr7u1hFH7hxvkpeFezJn",
  "key12": "54f2dzmfV8jwAoUy2nSVjoPHn3MASUQpbNHuvkcmVQd8shtQZkWG9WPkyyf3tk6WSmQtGn7bYJwv6na2Nr5GSG3k",
  "key13": "2yS4ZowQmBKxT4rvhb9Y6F3nY3QQQAGqurrXcz1w5gejf7j2CHJ1bViSwsfTMx4qKFTmqPCaKmSb29N1Q1o4GSdZ",
  "key14": "3gXApwVfzQ1rQBUKgtQ2yKF4hbkVdW2fVvw6oyLPwoFaLYrixU7FjqVzPLziFk8vGDsaH1wuGkKoGaBsnuMHshnc",
  "key15": "5EzXtxMp3C757GrgtraPUcyYRMhKRhXfRL5tZ5Tq1JRhGu681wBsfHeVMwMi6XwEg8S971D2ecjqKAQsUupVjNfY",
  "key16": "3TozbFNw9oeeqAtQeYU9XAjG44L6vhKiwAjNue6DZTCLngJZ5aLQaZSPhF97c1j94LuSLDvNCjkonV9EU8h3fFyi",
  "key17": "4mqGJq3AvEwQJAD6r3sd2dyaixuDt99R2GdrVo8XsQbckRqn2KuNCrCJGFmDeCjaPhaU7o5Gz74QWbk8fMDcqn9C",
  "key18": "3cCHyjvUivqrNf4AC1qv9wXE86etBXcTxJacCXxHABEnkAmLahxA1aWEGB7iSpsK4Eb5xUNwmyfBmRjhYUEDbeFt",
  "key19": "59176fLgfwZpCGT2eynm4jfKf1LApWpDYaXTeYTFqzKVTSmALS8mmwJjUUCyMk3DzmkEAS2P2dd3cXhkJQW1QPa8",
  "key20": "Z3vD8827Aj9rNBKGvwzVmVmXtvhc1Kx8ZpPht9R2Xbs7HytSMScphthU2U3A4D1CKWJNuymndZpG3EMr6c1Zime",
  "key21": "PdhVTPhmifTEd3mMAYon24acS1EU7HeVGPP71rJKhLcavFPDxSpzpst95PHokrpi6nQ62qQsp75DJkGnbxwSNGv",
  "key22": "3E3yuvzwyy4THzb6cRNzdu9teSUc7arU4HHTSXE5KetPam9LPkXZTBhCDgH9o6Xsb1Keu7U1TFrqUDBnDJU4wUMN",
  "key23": "N9p4wDUMvnFg6M5KV8WHDgAzhnfv4Lj9GabZMHH9JveQEfrLsFaXHUEMVdgNSznkN7TBTXqQQ3Zxko35tAM7pAi",
  "key24": "2nwSb5Axr14tGYAgnY9rTHSXYMErsT8UbV9Wafge4xvTwBC8PQtZ3dQqLC7aV56VrE2cguHgS3R2z9yDvDvXFKPG",
  "key25": "3YmBShLVgActiSyFPmukHcuekTv9UniJQQrN147WQrKYtuNoJqKJLadx9THiqT9EBHoYYBGu8wfNRAcmcLs7vu9C",
  "key26": "472s3d5S6Y5qWVoE1gKCRjF2z8yXU3J7gLgKhkx1jW438mecAdkQpT7xzQPKtgnZ1HxTSE2a4eq1iEryBkggF1rJ",
  "key27": "4dsY62GdvsDRYBZUmu8FYL1Rd4sTRYWw3G4Qsiuz3Pmog2WttxvaMYcbEmtYxwvGoo2KAW5yJb3it7NCnmBBdDUw",
  "key28": "2tcWA1Vh4NwP6Km9nCxPwKvaPRQSSwGWnsvWKN5882wwwYLQLuu5LQC6YrtdNYMYYsJ57RXL3BhwxUYhQH3UNJR",
  "key29": "4LTpaGopVqW67YDtYWWPoeJS37JBpBzsoqBqg5poBvQkHppTqk8K3ftKwk2gA7WxQTqJ7ohXmsGtCCfKN3BCw5Gg",
  "key30": "SVPSXnyvVSyRb8yVG7BG9BYYGyz4jzrTnPneWUz3YqSTTmxchuTrd2Pf6w7cRumNRce31eHrYWBah6EscwkRFBM",
  "key31": "4dvG9Rsksf3jYFjK8zJ22u98da6aNQiGDfNJ4QN1Ggi74odk1JQcrK3QUya4aRknnWoEAh6pTANEUKABcgsEFFsZ",
  "key32": "35bgk994uSULjBNn7ft1ySMdWY7iQ2zn3bWGy15KgGRi8L2ajYSQfJZ8e594jVSQimN7cafLWtGh417HnckeQyBH",
  "key33": "UBFmtPbvxXApU53jMZmjBXYf9srNrRTe4U9JjSUJ8Cva2V5ZahVZY8LUE4PSFuUpa4fdw7hfVpJujdBqSh4xUrE",
  "key34": "5fP2KeNBHBfYJTPiXVRtqoftkST7mZqWteVj5DcbyC8ytt5Q1puSn4DQqjgQXsZw7kghGAa2TXFiZ1ebMbHUApbT",
  "key35": "4s9wFt8NyHtBYR29VLVT3qoBv1wNhyGRrpjJwT2UyoVbTc6kusWYT3Dg9t7BJzMUnUdB6punGjLximXcWiQpDQef",
  "key36": "3N6uoWZ6JrazZKjj4m95Th4Lk19HiaFJhL36ho2HYphsnqDr49GPAq1PLVo2AAoesscV4P868Dn2XNXCBP1VdCzz",
  "key37": "pRHaFa1J8YsR2YoXbqriAb1qVJrD6REZT8ZwADWRCBTDiJMpmvspmoBbwiJBgNYTMsYQJEKRUjrMzV2Zj7kKVcX",
  "key38": "xAsoTCTiXggeJjnLeuPRGYmFZHnK4Gi46j1XL41HNC3m8s7wCSS29pSTTGZuqYpL9Jnt7abCeRgbL9Xi2dvpLC8",
  "key39": "4q2mCAQwmgGGkDY4dsPFGfXZnNSkRiX4T4YyK2wLCTsMAknnHM4kipUvuptQjGiemTVcmCKVVwqPNCUet5U2hQ6U",
  "key40": "5GKRxsUpRKyLUsZZ6Dq3LhRipQVycaFDNzbNs9ow8xTYe6J7kToxyUnFGZYc464ZyJraRuxQzfZzdv3WgjDA2gUH",
  "key41": "4DfjxtqZhD3BaVLE7efS7y1SQDQGTyHpbSaGsaynw8oNtNLuHbuti2QJo2vBAP8saRrZsmGXjXUYSj7TnAKsr4dK",
  "key42": "e161zN9Kppf5f9DqogwEFh1nEpL1vPbTHAgC7kmo7temvDEPMNSgucaDewZNGoABJPFNLsTUmggNGavs38Pssx1",
  "key43": "2En3UYHXnAgBz7d4DNYwdckW1L6e9J3EVSEzuBv2UFrJ7bPNVWkGJYDEPRDMnScz4nNgbTEXwcqsa1BqHFD8487c",
  "key44": "YB4H9cS9UQda5s332y3cXvgxfbc37XTLTJaqCwxRepoBaWhFdo9YdxBAjh7Q1JCQ45jhy43ZrGbiqyrsUewTGwX",
  "key45": "4k1oAhwmXxjxhKQXXJCWhUXssjZnEkginYNUy3bJ4pdV8S4byM9rhN6o5KJEzPQXiBwpgxZrVhVWn5yYSXtm6SyG",
  "key46": "3eBrv1Ha3Sd7TGdcK2s65Wh7X4R6Eggv8mTxHJasuH1PqsLR3KE5dEh3ahD7eqHrSnTysbqCobXGxx6ux27tnmm1",
  "key47": "3xpDRTQa28UFeRNLcncn9NmzaN8osXoot6cPzqju36zDE7pVVxDxN39vt9duEpvzx4aRpTZTbM5Ja3cwmbTzbVeW",
  "key48": "5ym4okSdhcJZ9VYakHcgFoCewyhzxx56aQAAjmUvasW1F63JGFhbdT7G2q2LbUVXEvnEaLtNLwpvWDCoydMUEDwk"
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
