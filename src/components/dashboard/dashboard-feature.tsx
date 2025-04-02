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
    "5Uf6e4VbiRx4jpVUCSQmWzXNSqtD24f17mxeiTgTULYk1H4gWostL4qYJKHVeacE24euKB7sxehUgQuePpXXJFSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qEx7aqSFJkdV23xkYfNZB5VAvHwtsgvPBuPf9wDMkUSfmo9Ge5KWm5Rn1CegxwdT14qticCHrWBhenRmVimrXa",
  "key1": "31ob2PSk4feTxLDNkKYU3moxGAqTjhihY2MoNMX3ChbmoLvu9jY1GADxvX2RdZo4CJfujfSn84DXj2X6xtj7EmNm",
  "key2": "2fJ9Vy3TD4Xo33VaAHohHc1ijMTj7FDDxW3mNeF4vTq1nxmX1ptCPaLxxK7vAtaRnbx4c79Str9tAsEQkdHe3yM6",
  "key3": "5dCgzHknMooeL6mZz5pXrw5UfwdutQ73kHqRUnyfZEg4k7cYtsEexbHMhtwfSvfzVjomg4xYmwzPGyXvXpdZ8HH3",
  "key4": "3PTwHW8WDHQxrdWgk91DsMzVEpXUaMguv9Xbo2nC3RvNZo51nEujvyEaZ4CajGoEhWMvL9UaC52Md2GQ6AyM65ob",
  "key5": "P4wSb4HvTGazPgjZmGRLfrAmbfM4gz2hXWCaJRFsnP3TaSkMk2AXF5sDea8jBFhyj49wsfgUvzn5gfjCwrcixjz",
  "key6": "5zd7yL2Jbn8DPLbAhmTJpZctn4k591fwqLm7Bo8cDZ8f949aXGSdDst4JEdxMQ3cVD4NkxLiruNCnTNEvED1oXtS",
  "key7": "2qftMwvEPecCWvFayB9SPwHfPJ1eYSzNYJ58Y5AgN2x4YGJfCcmJMAnW3UJu7u6AGUnsxJZg3DwdsSFjs2sdw4PC",
  "key8": "HApWkb6T7JaoNonstwxAi6euRR7mR6gwpiPVUV6Ef59bo3GPSY8k99MtfrG7cxjdSd3wk2iw8gnPFySpfibjTRb",
  "key9": "5xvKn2qiF61B2euJyEHC1CV8GKFL8Dmr4oRUgzHQ7ZzsTLrcuj2hZAiikpYNnPyBD38uQrLsA3zgJqQR1L9uGPzs",
  "key10": "4zfHXtEyyF6vcmVHBWjpU7iyAD1f7aWuaMaBqmCs5QPPp7xXqdrApWwpGVQ2F1EDMwRfEtHDQ9gXT8DPAv1eWq2Q",
  "key11": "66ut47HpT92aLy8FVosaSQCT6tvSxhiNaa1vJ1qujnfHf5sbXHyVet7WY3qn144Fe4eCDymbpKTE3BXsUN8mp3dS",
  "key12": "3cn5r1ap4niMfaCaYv83vZpAqw7UxqMEcD6pY14F5gA6X7JDGrq5FbtDqghXRRoUcQvUjU96gKJJ2eX2Lq42wqkU",
  "key13": "9Suyxpmsy8qYjHtP36kre7kZUrAQaByPteUCmvicAbMZfzqNyTyifccKnsFcq3z4t3jeSKNrFrB4mPC3xWZG7gy",
  "key14": "FAHJB5rtbjAPEzX7HLbjRKA4b5iHA8ysbuV9M8N6HhJEcuPAn53SjadsigoEeunw3rGF4QeHzsKdxvZYExBuCfz",
  "key15": "36PsufJriTPaDx8v1d5PCRxGpH5X575Bkuk2N4wLvC9hDowAohffNAcHRHvAEyFjqSnEb6qBMUCtCc7ue9ytQCmX",
  "key16": "3VYztUprJtSYSmUjQWXxW95HTKwrDy9sab8myU31dbWrktGUgQjwrnG8t1mQhQ9tzgf5EjqFDLFVHfxRXhu4gwnX",
  "key17": "5BVVQsSmGmmKQiMT8ec8XbjC86fcWhhYcyx95UPK1Y5qevoEGo1RM6APz2zDDYpanvQ3DwhfN9qZ9p4HM8wDWzGu",
  "key18": "3xHvZmqPXPMtkhS1TNJc3wRuALtfr9AjCB8ZM2xybYZzgQ36ATFmfjPjnBCf4awYrVCDE7VjGXthuSSxUT3g9MJc",
  "key19": "3nw77FaUP2pwBCfUvYMFLkMQG8gUMo4QR33Awy5BBdwDfKuaTGwoDvY9geJuv3fpcAz7pyXeewowsRadRrUcoTer",
  "key20": "4SE6BMJZtpbf9SBmMA214m1zWQcA2FP7sZ4kWnt94A9kmkLwAjxQRGxWobzBz6ksHeULfQCCFjQtC1WVsViC6LiD",
  "key21": "4pEMozVCAabiQHYPY4AutJWo3cToKSCR8FRhJsYYycjdminhakcdnpAEbzvcPESgqw1Vf8QwuuGd7UQdb2uaPxZu",
  "key22": "4MPZBWkPuyaBCK8g1ghAG6B9hr4QSGjDqHTTcLSU6Gzga8pgNFAK3R4psi6df1oe31hcfWUTeSEKcciySth6fQUy",
  "key23": "LWC6kcJhbKhk5ELE9DzNFCqfnos6mEHCByUSjMSgegMwDXG7HjFPNyyaFc4MiVDAfVFbe61ubHWSGjQNZHob4oP",
  "key24": "6UorqMhGiNAkNpwYYWugecycWG3edy3m4ZNGFTBbm69vidRScAnjWhgB3rYsortSavjuSmhkKBH1iJkY1o1zXs6",
  "key25": "2FXLaRjQtyu8JLtESLDxgpwPTizXNTMD7Co43XnMw1DAh9dpjhm9SgLZsKHz1n8d23YZB3pRgmcCzUK46GYB4vHX",
  "key26": "48UhnR66z971SxX7AEvVVpHEdvZ26HXnjkWTQtcDD5H8NzUvJ48bHchpsvmq5eJBhFe46miQKT9uHEe2cTYv8J2W",
  "key27": "2yR4uogzttbaTP1XR6uwyCc6MSxXNKY2CpMHA14DSyDARkfYgqhg4QtjHy5dH2TWvQ3SnFDbmykoJsaea8MBBey6",
  "key28": "4df5Ttjo8knVr9veDR8Eq3b6YBAKuf98CRAGRr9AjxGGY7t1HPsBqmrcCg1Psa5fcCF4WSnXrLCPkMJri4BZWWx9",
  "key29": "Gbjwi9GDGxaXoBVMLmb8indf78qDfRYP5Xzcn8hXEUHVmDF1Qs5WRugGmGSTRkaGuuc414pSioq9DVf2KuxcBPc",
  "key30": "2LFkJiyxMeh8zbtd5DJYBtCo86wMzYBroEhSLcF4tQL4RnoHm5PM25dymMvHdqc3sivQQLJeThqTduki2QoNPZiH",
  "key31": "4553wbLYnUhu2tFM9a9PeaJcy6RG2jTRGPUkSJeJzNhtKDQTmi2bHki2LM8uWVcJwUoLab3cEemo5As5t1paPbGt",
  "key32": "3ocYiBWHV8otenAwZ5JAJM7cTrYGuCRZyaZ57bBqx5xBr6hLobvMVz2CFiZLMiuxqnve1h8uVMkXsfyy6PqqEK1V",
  "key33": "4a2fNmZdfvLBRT94Y6PCPiAPXoFygsr6SrCeCFfvxU22yPiyLFVXw8zLyxhXjfdKFSg2j1Tzm2FKLzd8oK7AfagP",
  "key34": "3TkfPrU9D9MZsNRKYrTi74Qsg3qtA6o1USogvmPsq3h5tFQshJcGc3VD6gbZr55zho6gBaAiVqezmGKN63xERkGH",
  "key35": "23XnKaWGNiU7g1X6nAsa193RSGPvHfP3JaS8bURqYWJGkSv4voC5RsjKArzZCimNmpYyuL294b1NnGGQufnY8STt",
  "key36": "4sTJt34D1sWhEob9VxZpGUKsGcszHAxkJ9kPBUUVNGLvpup9NmQuVXoy1mkZLzDaevbEMGdEDGr8iYn6hHabuwAq",
  "key37": "3RG4gk4raQvVm4p1JfpdZMiMAQDmLT1LFmQJg3NP6MGZGWnQ4eXuHaizFhwrKwqtVFog4pWsaZviKSAj197ht4eW",
  "key38": "62QqZ4JW5DDpE5A6m9rykgjukKoNrZUSwZUzxvH5fQpN7oGeinhobeLBgRp15EUa2JFq3LjjdSXdGzBTBvhcs3HP",
  "key39": "24mM2R5fLaDu3T8GzaTXtX7TrQZeBJx2vpkL4kvXyUJbicuoDx7H8ddfjwa5P1AxJ2chS5QLYUAHNEKeoxwpcRgx",
  "key40": "5UX1nbkySXq2kukRnhRMWoYbmtrnKUySJv3VYfXxQXBWGhX5WTcDZ2rrSoVuKdagxT2Qvz6FsFPTx9MxSZWBpnpQ",
  "key41": "3dgBB5RLvftohkzXxgZNqzskcwHYCSymWrEmLa8vkctDgfrsr4fBp6qqsWEsFcyuwQ47up3ukwyKi9vGUaJXbU8D",
  "key42": "tTfXSeaXvqRzvgqPqBWqJXaLG2FMXQP2uSrC1NUXNYxSDZy2FmxxajpACYKMuBC8WQ7LtiFo6HfPA7pWyhJgECN",
  "key43": "4htvvep2pAEeZs5Ub5pnup1vBMb46PkmGGi7U21Bwcu3zQU6ckufVUpemHrdTFKHG5DYPvrqxALVewuhEDiKvfWT"
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
