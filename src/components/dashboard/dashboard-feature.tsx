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
    "2GFnxpPThu3o3nDzzSfiU3GoY187cNjvm5CRWtq5t8ePtjjvW1dexwWeRRfZRG7DdWUoBTHFdVaSCXDecT6dYZCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iTLWghCbe4nsVNUH3QCEJw2dnQf5y8rJpXMVmPptNZqUgHGkQwaeFVTY6Qt8yAh1xenPAdLVNPnJUjH7SRRmLRh",
  "key1": "2Dmp8TAREjpmboh9y7HPTiugjCuENFNuoQmJ4HXAtGRvC1Rd4AGFSbNq3exfYHB19VvYugybBei3kZnwmtmX3HJR",
  "key2": "4VBv1EKS54gtiXEziand8k5ptEDkC6EiuEU4UuEQ44RG6hha6FJHRQJDqWMwHW62xPYZdRZzydfEoESWx5gNsLf3",
  "key3": "2uLCDmyTpAAkszTDo23cTJA1r4hpfBLuBySgPRQg43shyUU7WfEgRwW7toMTu5iqsDCeHexpwveAmg1YYKxdZR6e",
  "key4": "2iKKFsLTtRb3Win9zfPVoevbWwMrPifVfDvZmeFuykFN85r1iKuqbYTcYTreujMo3m4JXrk2gJ5H8rGPSANnWq5p",
  "key5": "E6Y49tNJ1rVn1ifUPQX9qhKSRF6aRv4XxC8DkwhbA2GFNcX71WUQbjGUrYPKy1cvtZrY9Hx9PoEnbHgm6SbMJeT",
  "key6": "LeYYfRyrvpARdqk4phGfM12HUANY3jbnSD8uCMj8KdoXK4X5buPCwBrkt3ux6QktvsgaLmGurvhvNYPc4h1oahm",
  "key7": "4jefot27M7DNJcgSFdXP7FPbMWijprLXf4gRZJSe7cYJXhrpvuCiaXZqYpmU4iVk44zZnavpacPvSuoSsKUzV5eX",
  "key8": "3mxmF3fSZf93WPYfeVMw1eay7yjHNcV54ckwQahkVA5DAhpssNX94C3RPmRqxJYNq497LdHsiW2VAJjnZzExvQXU",
  "key9": "34pqdq9sbhNZveP4F1HiLaR99JhPSPDWzVcz6jrRRZedB8BYQQ89NKLEYiHLd1UqGt8rxYsRE86mxBA66YFpVqNG",
  "key10": "3KX7NZzMi3gvYn9Dter2CZmrkAaUjvEQwNLG2djVRLsb3tiohaS76oDZ8BEkny2J3PBptjg668azXSrxCq7knZbk",
  "key11": "r8dery6YUvBhS78bCzQ7beyLZc2KXfkeQjkzeiXjxssF8FwmrjFjHBuCz75BwhbQR8GR9QscXAhm5RYLZbYB8f4",
  "key12": "4B2px3coi7neshvbYUyS6VdRaSid5JQAQofubpVJfzFGEtL99KRUMGScAbr3chTq9Rz3iPZv1pM8NVfxf8nZvDAn",
  "key13": "2BPG5rDdh6CwchN4jwMGY4hDv8XKgrhbi4uyQvsufbjrotwqxkK2zVmXJcCtQHdob9YyjXckqSKAEfDdKFowjs8S",
  "key14": "ESvnYzFqvaTs1s5SxfA3ShSshPcPLdYycEnkwxHEnQ1dMk9vbC3a9MZWjGLfycJNos65jFHxdtkx95qwtFnit27",
  "key15": "4Zwf4q5Y5Nq8Gs2xctT7QEiTiudS5qvwhkcPyyAXgraesc1K4EkNTDCHThMdWUyERa4r9WMYFSZrEj6S77gaHczK",
  "key16": "3qfFnKg52Q77fvXpCPNR69iSCHCTc53T3mEtdQLSApCz1RLQw3v3MxBWmN6cewQofqLS61EnTYWpKAGpkRFdQHri",
  "key17": "2qCn8VfbfWwshv3qZMpT4T9SfwRrCCXybhtzH41CFhircKXGqwbYZCBJviQhGRzXh9qS1v2jp8csF7LT9Qehz6P5",
  "key18": "5jwM3iShQNDZBcn6xMuZcwqFeCCX8oFSTZ16mPHiW1EDbyBndhbu7fgWd2KDQ2UwzMj1yCYaZt9vYUpWWda2WDWE",
  "key19": "4AbgAJXb34e3mT26xM3t1kYWaiybtBL4Fbkk5xC3DpVZkvSp6zMgsp8Wwh7KHmjDg2R1LbLvwpnBwtUMt7k2qNr4",
  "key20": "UKMdmhgKZ8vcHiNQuj4RgiXPLtbBV2G3jQLiqwr1PBU6NipYX5tponVnuNeBq2RzSV49cxzs54afnGgEYfWquzp",
  "key21": "2y3ix27f4Vxmfkxkk9HRfxLwjepQg1vKJGWpczW8U9uAKafnXRBnbtuoPJTNWqzkFRYZ4ovrcUjXrT71ELvhqYv5",
  "key22": "4EAaikkBjefgg3pgg6fPu6MGgu4nkwoL7Q2fiq8rRozKSDPBERBtFdF4kn8tXy7mfLRP3cDvyNgZ4pwRhiCacEEY",
  "key23": "4uKcrbS3iB6UZeS4yKRhiCsmjkQuE5vT96rUqzL419dmhN6hWGrNf6sUNdvUZHqzsmio58u5cmzfavmS5wzH58XH",
  "key24": "546rABFPk1zWMDaZoc7vTPZPGcoCmk6juDUz4Jb7YdhS2LLtE66ZMBY6eabSXWzRdnWa92wk1Nfz7JU3GUXVt4Fr",
  "key25": "3NLe56QMfqiZSRAesadzyLgbVGmuXckKpBpbA2V8Y5M74gydg2dyGcaop6hi6ZqYKNVgVRRw8Vs3QgcFvPf484Su",
  "key26": "2AqjprkVeffYQvv98J95ZoV14s4HfAFndTXFNL72ix66WKvkechPt9d3zeaQZajUDGNZ39aw8zacCcbfc2iFJjgs",
  "key27": "5bQ6Sj788tgfU3XkUsGX6LZ87D1LpbZDHGbsmMVPjHfRV7b5fxjhCfmzSKhQhbjhq94UjhEWsAj5piME82NPVsK1",
  "key28": "3DUxcNFP9vTWGjgmmBz9wCa3U1Pvef2nMeqc9BK678tihLNfYtxT3HFXGbHfPxBbzh4Q3A6CmM6AtwbmJJyo8SwB",
  "key29": "2NgP3A9ANJWFwqcLVwyW6NuLgjEFAUePRkGmZAjbtwnUoKoY4sfhgUGhpvvJt57N72cyHDVMBCN4zREBeBuVr3VQ",
  "key30": "4wwtgUHsReFXXakPqNww72AyA2SXj1TaTpkANT8LnvX6PmRBNu5tNukkJBDfKSpB6N5pxYsmkCq13k3wHBdNDyLN",
  "key31": "4kMJNSTKczJ1fEE2xwsjRG29yPwoUJ7p7khkcY7TfKuAn7QQ4micAgSvrmU83FobFt6DWsbaJeWwBjjH1VnQ2Ejh",
  "key32": "QfDwftrzmCHo8Ua7iwPRGErg5pNY2rUPcGbmGQX43MQGU8JVKhnGpeNRWD5xo4GHf2ias6aEhXdKcw5xWT4fGYq",
  "key33": "5GnsEWPQbzZuTPnNbCFv6teY8BWdfsmQNwBByc7CQSUrGRBCPMxuikTJHhZLFgxiMcYKkf72r9JGusShxwyCN98W",
  "key34": "3Pxq2zWMiukSrAwZiW5ZwA417GBNyhyHTVxfJu2FH437vLZQwUxWHT2yL82wCYTu8SGxhjsSQuVDJjZKRrBj8sPQ",
  "key35": "4Y7voeUZDWyvrVndJghCY6vRcc4BrL7Feb4WQbSzc6jVcjfG11DRSa3jHda6GSFLQBQ5XDGtJ3zDhDEMVt1Rwx1Y",
  "key36": "4kJHc9sYCcBP1BD9UFyUXUy3UtE5nYbcrGJRTDaVd24zwRTBRi64ufSaJCwgbnAs4yHQzWcBLpvWY4tEVgGKNfjq",
  "key37": "5br9RURLaaQW6SWeg8mYQmEwCrhqoXEQJHKUG1aANYR4GQhyRRhCyNuwrZQQZrxHY7ofo1U4dcfRWZAZqCXE338R",
  "key38": "5ZYnVnV8uW3dhvcRj3et3ooCAdwB8Y9A8pk4zdf8Te5w8uLdH6r4BM79AFaE4PKN6xicErRn544X9hqBjbFksB23",
  "key39": "5uJzDVTKs74Pqb84rwAew6p8uzsSkPyBZSqBMUHoFoX6M5iRiq9tbJC1ckpsg1UsSXk4nETSuhDxqwKgT82vHo8P",
  "key40": "s6SdFjFfVWNUhNe4e4FDH9ApUGW1zMTsDZN2Tfp6TWZbXyoaGZb5x6BZLS8d6pSVSuXKy7eWjwPLj4uXCaodknu",
  "key41": "37bh9LQg9yNfq2EfARcoVVNM1V3fKf6UwVi8uvVUKqdXQrxJdhk7KYfcTV4Cnzn2oNDE1rzuefNHQt7KCeDBXjVs",
  "key42": "51T87TKf1MtYPmUScyR4rv7zMsxZfbeSPiWeNqaNDZycTszF2X3q5bamGxqtNfgFC5ydzinKYxZMk7UEii6595Fm",
  "key43": "G2PSaQMzjDa1DRC53oXQnXychCKVdgB8Ji9UKiGWq21aeszm2A8U6YUadKdnd59CQFfwB7Fj8DhpEmZao4sUN9s",
  "key44": "3u9SSHtxNTnumzUpyCmR6fWdQSmYzjZ9uWG6GbVtbfTA32tvw8csaPank1XqZGywB7BzYsBcgrdr7GcZHD3qNwDd"
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
