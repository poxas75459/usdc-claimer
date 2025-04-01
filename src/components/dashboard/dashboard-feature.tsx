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
    "4b3FhWsUeqWT4rCdpDXiBdJvv3MgThKdM9Hz3MhfqcjCnDmLFrfZbyuk64av1G6B4yBPqSZCGdTLTtia5aGakUbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLtoZTkmdZ4dERTZekjLPs5pkadDgmoRthLpi7NTfyfygajudDUjLSnJAobtzVWEHU4kWPnpz9jXLeDsTrHJwtW",
  "key1": "5cWehtPcBU5YM29S5LF65JkV1Vjon9b6UxD4zR8dVgoEwF4jWVvhfeXcaYRMmoHAhENRWP7R8sXBgFGkPYw6s2Ls",
  "key2": "QUiZAxxfhwPE422t4KAzbnpS3zVhEzN8G77xt2zpTJoVShCdNLSnWzrwXV2wSsYyMTnpDLWyLAWj1rAgVT8jjyb",
  "key3": "5b4GBeNyseyzno9GNudsmLXJ3mE6GbPomtAP1wXfmwcvu5CCpWsr3tjW2TZ6UzLRL2xP2mPJMftz1hPPhCF4Sjv3",
  "key4": "21fFRt61bfcCsmGzDN6DH6TDUJaL6VWDURN312ySdhi7dmX9k4K2PePFs9s1Z3z6jkPCoWsJai4KcaJrc2uVukbd",
  "key5": "4XggpAZF6aLMHqG9P418pGwxsdZJd38Wvr4Wvo5mqupFmwhSCWQ7wd7zCaLZyqo4RGmrSuFWkdqYyxiXq3LLtdSh",
  "key6": "CzgUUpWs8YcwEEUS2ikXfUG6DjHVi7WqtMmwibbGE3BNxNQ1zJ75GZC1cahL2jrAnEWHdFT8pJh6caQYUsmErcP",
  "key7": "2sooqBmUgmsYBc1EabvANxjmd2ubBFMSn38TtBQimCBGoRd4CVWpbRrD8wUcEb7gc8a74F5DMWzyJGk2rcZdsVDZ",
  "key8": "2ysV9P9hg1FzmpRJfFbmnskZvSu6qWrAh6umNtgRAAvmYXiDN2qpnRzscXmZCPvqn4bHX64RaaHDhoGW6U1RtGQD",
  "key9": "52dfCBZpYKKt1ggTajKPUB9ECPe2aQ7Jsrt7T8wrQBJ3b377SF3N7jSwfM5ZRV5p7kESxgBJdmyTTjWwZRGnGaWP",
  "key10": "3GVDTfgDRU84KLBHPdZdsReYKTyd9VHyXus3VjTsuAsfsHTgdLdpBLD93oF5KsTSzegFa3ABBavBKfwFdQS8CU5S",
  "key11": "4KuJoiyzsFYLfyiysvTssWRAoYr8V1g2N5aszGHNsYgEWagjyCtNvujPGGoTFS2UCQFgoRTB6p5Suq5kPUnyxPBd",
  "key12": "4wNoEJKoapBzM97F28jVd9Mei5rmZLDHi2X8dkrZArGyC1ZvbRQBUFTRjCEZ4X5Ke3A5f77Bz4y5xGgjYSFsqsM8",
  "key13": "2vrhBk6VFttMfH1Z2AJ8BpstZVAB39YhgrF9ErSpjy2TKjWtaMj2bxJG7HhMYPJ91dRRiUViHU9mScbYLZsQyPdB",
  "key14": "4o7yT4kLnbyuGDzw3V8wwk4GfxqQiCXxUCsDRsp8mKZEB1DEodbnxLYXS6TgjicMHioc9WLjjjYyR3tPYKdAyEuQ",
  "key15": "h7pzAr3G9b4eBACS7zu7kyt7wgvqXnRUR4uwfLPWAcyiDxbBz2oYV7ELVXB1ssA5WvEwBPVQdXZBT3wE6xKJ9FS",
  "key16": "5hqrykZMB2twrW8FP5QJTGrbkpP2VvhPZFAPmkoyoNvH9oNFaZ1Vrw5JQhFE86Gp44QHmBT4fJEJvR95LwLpgPtH",
  "key17": "3Uw8jV6bG5BPFXxxGJFbCkicct75euxFuGCeCCcuD4uNTqbLUTTUjxtRtumWHqMJ2eKs71U3x9QYWF2Mz669mBcw",
  "key18": "48vJ4CiGUNw2FwsESqgdC9GcBnsb72T5rTyGvwubbnfJMGufp451R2pws1bsLpdiw8RBfFNf2GNVqxtvxF9CPKM",
  "key19": "2REYZj75kJU5qSSbEyyUBphc4kYC8JWt2cfUyJ9S7wXWZqp1XrLe7VGLaZTEdfnUKDiNrUxxs4yYMGCfDr7Gb2sM",
  "key20": "3EsqbdVFdnbG16pvHevvGB8u6uxE57sckLxTaRJyvnRdBXdVW3CXyTAbMp1an7uULYoW2F9Q5BLiX7UaYudPt1Wr",
  "key21": "35kSJTMhSmmxCEVMaDi2yiBSr1S75euq636sMsYXWc7WFuNaWqh1GsJXAM8TxMm2mabGciWH2aAvgFifaA4XKY43",
  "key22": "5bZwkkC1zURBqnz7ifjPCyvCfEEQ49CUHibo1aHcie7w7aZzTyvuvoEfuAafoGJs4oKfqGwbRd82haSodktMRBdj",
  "key23": "5mCChbnT5TUYfZQGfbtsR3QyVW7kxxXTTMj2m6xsG3uaTSn7PPMsnXnkrt2JaYp3CTWRRdRd9k7K64TzPxby4nxh",
  "key24": "4p5RZyyoy1ZNkSQmkdb1xAFJthkYJEcaVyAN8cLgNetA6CGAHePWH7oP27EnpxJ8Kxd6yX6UjBeqbmQwdU3LVH2M",
  "key25": "5c7WVWTp7eFXJD98FtegCCEL46iZa2ugesgMZt1PgsuVwTGR3AZCu9jmnZgqKtyrn9WnE6aAzjGdCHiJP2225Dbk",
  "key26": "QnqktEqwkAdVjRjPT4w9TAqzknzdkzePJ5rEm3Y9PpArt1UHy1JWMDL9xhvbhdoMBscBcUhK6txhWUfb1rLe8Th",
  "key27": "4sSEQKLmY4fNzaCnCudJnM5HbDzxEUdTywBFZSaGetnMJuPVKXR4G86ABFgKcWSASugdPBgWigEVL7sRBsxBKCYM",
  "key28": "2GtJW7qdVDBREt8YXmLd7kQiFE2gAkxt5QAtwPMngXLv2aXM1w1oAAM5yF2L6axoJNMYpmLsVm8T8vMw2Ztcfp3A",
  "key29": "47HZWSNz2Z9Bs3YzDTPn4eRBWqnwdMBkTXRnnwA8iEY4SVZbKRsCmCGdLbSCrQ6geg6QKrifHpRxBPtFFBuMiHGn",
  "key30": "4w8iPzgQmpGs2DnywjZoCWXrzcLJwYbUsDYugxFxXc3L8dmnF1Ce2vBLPn6vskQsVCG7KyoJju1saaF7yFG76q8Q",
  "key31": "5VjHbzjQ2VFNtaoj7E7zzH843FtHkRy6tPn3oSA9eSRmGuNJQFQxKQiwUEsRMtgkoFCAGfZoZxorg3giXf3yVRoB",
  "key32": "4rn5R51TSZyh1BvnT9DPHdXPqnQ2axWKC4K7rXxzLwr1hS8BC7vrqq7cAAjjrNX99o6tWZNTsdcNko94w9kXLhnn",
  "key33": "3bEhGyrodnX4FBm7NQ8zK13gUpt6cbNmDKC7d9nNW5Jg16DbWyzQtmpeRKhKjL5dEDawLCmN1dpsdZpxNzPVioAT",
  "key34": "3gXhN7yuTH262sJ1r8cFzHgHwrYNZshoijXwNMHDmsrWPsSJpNuFJNiK5KgDTKkxSswuU6ozYyVzQJa485sfqnVd"
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
