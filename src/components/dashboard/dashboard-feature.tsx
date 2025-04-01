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
    "5FkgYWc1S3RUD6JKqnj8anSMkwRx5GZRLsNDTmRCrvNw1GT4Gw61zCASeyPc87JVdsJE1fdsdBGY12XmSN5e9s16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54QoPvgxcsZxpH9zsXCDk6ghSm6ujU4kSyCPJy9ukgwissV7Hjw4NjEkKm2xQDFyD5k86bZuRCRJ2JAWrgVBvqYz",
  "key1": "4GaKhssgdQ7BSPQBtB1KAwKptqLR1W4uo5TJFSgQNTeACNmotGD5ciijcEkgEiAostxXxzTWKbW2gcUNaygDajm2",
  "key2": "3XKUseY6UtS4FUmqkp4rSfSDtwZRUgzHq1MqVZJG2oRcd4oJhERHq5gRJRE4unjX3jEqohn7FQ1Rdt2qizQwfePq",
  "key3": "5wswusNcuGUEE7DMGmkdsLkKALUs4uBDHdCHwqprpcbEHLA5epy7Bjvc6a9dGyaKb5wA988ePhNrH7yt6sXuVy8C",
  "key4": "S8zCxeB2ZsoanHbTshafAMz2zYQah56s19BTgoUfpjsdDLMCcwx6LhXEVEdQdShbQkLK2TwBBJWzdoTVX8F1FgL",
  "key5": "4iRbBbrirQE8YzEPzJ37YVgT6UMD23VBipDDkvobuh3asschmWRYGKnWGe2UExjLCiHFzGkZAkbwJ9Xt3YuztqFt",
  "key6": "3Jx2NYJC7RttjSbbTf2xw7YLAnxqCaMvVsygJon5A6b3zqQV2fmjvkN9AhdJScweY9vVfU1YewYJ7iDWXE25qbeY",
  "key7": "476sfCp7hBommdY2BVQv6YLqBcdUxs97PV6jJQSfULJTC3RhVS6kLd19QCFURY3FXJqATApiJbXiQA1QeWkzxpLL",
  "key8": "3MWasnJH3CEV11BgDwAgKm3ft8FcZRYhmifYpNyZeEBx7z6qsGzo8YXYgq4Ju5gPwBccNM3bfibwGwcnUeqSv9hv",
  "key9": "24afFjdJ3LSduW5XA7t7hoHY7xLFqnStJdiMbrsK2e5TjEA698tLMu14Tkkgo6ewwiNfinQJNpu9ZPXTPLcBSFmf",
  "key10": "4Mx1UtLrnrjy8CRLuxsxK3MenDsrzNRHCwh6Yf8TRNMUM1cw5RMeix2nyDr5qGDwXChLtgBQA2wJXJRbpPf35AGM",
  "key11": "b9ymtLkxw3zPNotMUNYHjkF9n6UeYnEucvKRgkcVZZXVYjFXNeL2xmb5Y2oJSxUedfxjn73tzoYDLTvuobrSseh",
  "key12": "2EzjeYgew8ovTjJGAWbhaFdg8tgxLRPxDdgo38GCKDwqb3VYLskbNMwfKeyzpfitxwFUTdrshbyCP9bhrid7VWg8",
  "key13": "2oA3Rc3NsN1Cb7DZ8tKBX8PGkDx18wWcRNah7w829imJK4iPqVcVPP2L36qTutP76LmYoYkwFVVTczuKjBE1NvNP",
  "key14": "v8NAEPAxS8UMCGNboorYCABoFohZnTF3YEn4WfVWZPvUg3iNpYP52w2xWFarRXdUpZh2zaMwJfdWm6ZhSLxhuBW",
  "key15": "sTS9QV4gPc8JxC1VWy41WFbX4ZeNf31fyQB6DTQLQhEugsaL6yv8xg1PzsJn4CaLcyjcvp5YapjdqeY4vFoFApY",
  "key16": "2TMhTihr28LUjiQcZ9fA7Zw8A5jAqN2it18rprH6LsoPQ6exnPGfHVRm3baGKph3mDJb9JVjNPS7Q3f3fABBVSBj",
  "key17": "2fGdySrSEKJ96DWWtZB9GLpLBGJFaETvGXXVwH4QxNVwW7hP2yxLay39qJzdMRnUUj965ThCjSdMmh3nUNSidirD",
  "key18": "4ZMpCPtXeCkS5MRizg4WcyNyvnZ6um3GsMJAEuPb8ecXhEbUixS8jwVBLSt9KG4dozc8n8EMdeiAq629dbKj3A6Y",
  "key19": "2Xj5GWYr9JqxKgo7v6W6diH5EyffbPwhrwWi9M71VCpptbraw9BCRa7RH1Y6bt1wkrYwVt7TwsYizmWSZpwFebkg",
  "key20": "Aaja64njbhkhAAYPmnT97mJ2UNmwdNN1hGKH3hCdFrg8FyH5z9QQ4An6PmUesGA7xPAscv5ZSbbeorSWcdCrr4h",
  "key21": "4vcgDaivbickxVh8Dz6zAqkYjLTMDCnPPUUWVFVRjCQgKLmweA7iuBw4ACDqVjJ144AYysSSsgUxnSe9mm3DY6et",
  "key22": "5e7f5Lw5QfRnwMMH2EiKNMpFxZzMCMarFej78Y4M9N9skZBRG7LHzMH4B3yzjibPoFWxpPUQnRqZ7eiCUTiMgKVL",
  "key23": "X1SgYZJKJaK9EcdtZT6ncr4aHE7czSFgSHvm6cGa5KCFhZx4ry8t6SscD5nq3sBWYmr44kJtW2qByUvwr4rKeX2",
  "key24": "3kNzg42TtyqxZhRDKJ8D9GtharTPvoLc465xhQULVauBbfMuGnvmj81JLaDoPkrBHCvGVz2J2JV2emU41m9zNgEg",
  "key25": "3uxeBUG9k2Nx5aDnuouPEjjfwUdiQPZWwgfwxBoGTfzYa1pCw6ZTKvtC7BjukZVM2UzD85oSZE1Dj7ikXHXtrTgk",
  "key26": "3XKuaH3RFHytnU5VYYyTpCzBfhpzRaxe5HBb1uxYZepU4KgHe3GpLu2MK28B5y9hQWF2jtoYScprB59PAi5z1yzv",
  "key27": "8iwgWkup1Tu33zBrgNU1t5RGoyqkQt7mE9TVL8EMGEa388LnNJi4txN48LdP15jFYEd1B9wcwqhvfa7eyQWoRgh",
  "key28": "3PgaXM5tUi7TPZpspgTEV2XMtZibvJtjbSBkgaLSH9LCPka9KKhngqU6wzw1vTP47vNiiQLE9CeWdZHGW2e8vJmN",
  "key29": "65FJV1TpLMUmkSr5cGSDKdDQ9rNYBTuWuBwvgbD69KVqoNsWSV8bxG9cEqKHfCLHxWkEVax1WP67wCPdJfHsfDKN",
  "key30": "4qRHRXQYyxjC5bvfJhXG7QR7Cx14Co74fBx416QNydJ5SiCmfbp4wJehwkVyPe8bcwCXhiJDyxV1vTXJ6GzjHYtt",
  "key31": "5ufQGRnk4REtE7Lj33sLcgbhn85neEsV3phnCmSxEWR9ADJUCCSu8rqSbE9MAgVAwWiptPR6KnN6u9YyKQTxrB2d",
  "key32": "3r48YanFJ3FohD7edbJ5EE9ndH3ZszSQEq38WK7i8cTRFaXPUMJAVabRti4CkwNDi4Gz6q2p5CdZLmYdgMngv6Gx",
  "key33": "5GVw6Z1vjizCC17sz5sMuzyTEWXyUz4eLgSJ5zTHKTEy5Z9X76ZGcALtzsmzGXgb7E27VWtmcKaBRXN61i6pWCHC",
  "key34": "5v8KLhcjJj1iq9GytDiaELKnuoJMAJSNf5ruSPAevV6QioPAeio4rmKXqd93HipFyawRcBkeuSM6AWyotB9cLtvD",
  "key35": "4XfusMNkfeyru9SVF4sHMBXRvmdYv5APvX9a1dtpzk2EYG8ToYq6B6vjkB4pnATQxuLJ6dKvSbYSixszozcjcn54",
  "key36": "4HD4eBXhEfvsADywK7PLkjNaDymfZwPLUiq5ytAfzHm1nqfc4FMcgSWVc6C7AcX69MfQjyafxR321DuzMZqxCscJ",
  "key37": "3RiXQKxnNnah28FYsQFR84ynvPf1c3mNj6MLcSJ5e4GHXnP9FbvYHyvRZLGf9BPTbJWhyPYqCmXUv7UQbPozpmyN",
  "key38": "5PTohjCAo36G8mvtmVFcmWPfoZdv1viDmzEXAbyvoib19XdJw69WCBZGagtkNjcMVaTL5pn4fJBkiSofom9Fn7xD",
  "key39": "46DXFTFgj4YcoGt2bjDv8yvVXDvfNbhihhqmBNtFXhEVPPTb8Ek6tteQ5evU9FHEwrtsQLJ4bXhG9vgdpzx5RvDG",
  "key40": "46qWg2o6mSXXHAH8VSc41vZ9oMmx9L7TzgR6PshKxGaFrGRWSDisBhb2c4ma6eDWeB3nsJnRabPYMWD9jnFeFmU6",
  "key41": "5YAYu4CkfrEUwksQV1xbvBcwj4LDaDxmFwzzyBX9C9MaaoJPoao1vDhnqLdxobyrCXxD2wP7Tmrh3sdoRhTtnKpJ",
  "key42": "55MFR7JN26aMG9xHqyYuBdeQFkdUL5vJ1YDyKvdsLuesYfBM7ANppiKD6mxSdhcmm6YQouRBo7YtDFiMAD4FUZA",
  "key43": "5MyN1dz72X1urP6w7EAEmengfQXhNcJVV6djgYHbufZSWRSrzFbztTUYDjpioqEJehquEB8jgFZ7JRuFwN8m2fhz",
  "key44": "2PK6csvxmkUkEDTsnbtzfgzNcoQwK3qwb81TqRo3uiK9nwSB7JQX51me1ufDRFhAiw8wMB5VQMNoJS8wbFCCB54N",
  "key45": "DW5gL9yfk6CXqVpkTviMfBU3PneGhyAj9qr6P1v2R3R8bAbmnjo3hLswVqeCZYmqibnZhmWHXiiXMtrraRYMEd7"
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
