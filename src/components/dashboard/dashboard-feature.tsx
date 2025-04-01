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
    "BhvZPC5gfYqdd68xvCKYs42sJtQKd8inxjMBzW51FBahUVL3VMYnFaJkW3h5Tq92BRpv3prQUCnVvgdwPqeoSEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56EA3RAEqCxQCJ5vKChUyRaiQ2dmripHNWguzLFeg8FiVA4JkBHfkq9tjqEZmpZHzxuL4kTHJ1JxzAJeEMRp9e7y",
  "key1": "5DRFjh4wAsXu62sJKcCJb6gEopErqcPbKfgiM31T7PveuD85sy4Co2jvoAbbRxsDhUm38SGEV5LtLrviwoCRRNSB",
  "key2": "4GDjVUVXwQwfaUxXbV2cTM9VgD844Jhe4uBphpjQFVd7Dt35eJuUy8UP7nMtUqeWaAsVonJkDSt3hKNMQCBtz6ia",
  "key3": "5wRtu38RpvtxytXmGiAT3vgan89zzx9cKLZEAUC33dy2sG2GAjFEHoJ3cYjiptKncpWUBrKg74e37EsVSq7AH3eY",
  "key4": "4fi39VHfHiksm7p5SfZL8PVsyRvnFbG6iMnNBtpaZREKrAPhLv884Sy9ohyGBJUNTaRbekAuQYm8ctAe5Kj6qkpJ",
  "key5": "4DZfWHK6QNY5hhLhhL1Rjf27yG22LiT1fG271vsmKzPVfPTo2EN3DXjb4P9CCfAiKTqgjx8fuhsh13juvonsvckf",
  "key6": "5h9tfQPHrgykpAg3AGvCrqJo3vs6DM4uH8uhLdihmZQQsKnrbqY9ejzTXX5TbjRRuGJeVSam7icnAgJJSsWqYSfV",
  "key7": "4zVXbsayefmkWct76cEpgbdEa12VGSvzVdDWz8npVfSpbUR32Ww1tga5ceW2uycnWX5NJveSmn5AkXX8aWYv9SXP",
  "key8": "NXRZWEzmCivniMrCXHv7WvkNeAnYcr4LUdME24tvBnQyfsdMVBGwPSpEZgu74P6KmzA4QtnTrUZAQm75ix1StiV",
  "key9": "2EU2tKpysgu9CDTXBfbifnUvmPzxPxL9EoGN9iNAjXW328yub1kzLYHGUABwy8XUL7NapnCyYEHZpcHt1kRceNYh",
  "key10": "2KpBVXuFvUKuxRMsXPAYRX4dvzwyKbJ7ZZNcsR3rPSx8iH2ahYz1A5SAY6kSvUxpLyZKpoGSTyFeJpTD3P4RJZrV",
  "key11": "3LGRAQwH6M65yiBEvxYHDhmbzdhhSayzZSvNcFYgqdNPYTwDG9vs5uF7b1Bq3UfgLo884pmm7JTiCkj1x3Djjo39",
  "key12": "4uEiPBRutvwx2KDzjbNN64tAXQzTMJZ24w2ivgJZZ6jiGcdn89ea88wNam7c3gpxHPcxcqpiViQ5RoMtyo4Fe4D3",
  "key13": "59Ax7VUsE4K8ngi6YiF8zpYCoZ1DJmUuwp6PE1NvjzCj4daoby6BXVXZJXbxjzwtNz5v3GfrPtzxqKWpNHYFRyAy",
  "key14": "4x8XsLYw2t3iXqGgUbKMSkSuyRGJzCsQgoWcRyLzibGpme7XLsDPkJFCWDTqZoK6zq77YUs8kCGLLbArLgaT19iv",
  "key15": "3ww5HyS8Ljf4Rjt26fPn1LnToUwbLw17tBpmwtgUgAPnQaw1j2zfKLXrEr4K14k5dpN1odtouiMpYqNBWco1RfWk",
  "key16": "5eMxqmsazh5hicPe1et3T55QUiBEv7KvMWYsKAr27esWuUwXQ4pZwUzc572cQgR8tPerWSwytDD3PAmqspwYgYwm",
  "key17": "2jPvymMf65oscSFeGEVeweE4z5V8Zen8hio7a2QizVGSFTDx893AJs2f6tgnMVg88SMv541d6gQiz7foDV6NtQdq",
  "key18": "3P4ZcGSei3iQzZngSCi4M2h7dJ1tT5v635qmSpRyoECeNfwt1orJzbWDvtQTutHHaeSkCiLZ9PA6HwCNaLW75aE9",
  "key19": "3KvS6V4GGRA6bRyxa5P3Qm947jTYx7qXCpAKuiN9CoPLqyftSY5H4Zgf1kReh6CjnvkdCWyhXqJ516FrGSqBDbHg",
  "key20": "5NmZnYMVPz5XJCJttDLVQ9v9JsVU9uHDX2DRNTu8BzxrUJboUdwNpEhhJN25ryNedaMFJsQxsVuMyzUQrknf1cJz",
  "key21": "5ef4wApwir1CrtfakysVKTS6pt7uDkCjn9PWmjbisQm3udpeqvHk9tjun7N3QYBT2MKdmTUWiKiNXi86ZFrU31F4",
  "key22": "2UhjACTG4efz4nftcB9kpMz5xdRTHSMRg3KRnmgRGsnDdXZTQh5QrGYQxTTbfHmj8EyF5hTSaHY8VvMxoDjLjZmc",
  "key23": "5mxg9FfcrRsG6xjVGASa6ayJFa4DVsXrCKFnBWZ9rgsvLjoS6UmSAViCwS73YNkYMCj2ATjVuqkWGNFM1sBDt5nZ",
  "key24": "eYV7APbWQaxCU1QyUpEcUeojEem6gRZ5fVAWNpvKJuHPCQdLYdGCUYUciP4vwcWG4PX2FUdMib5e6BUAHBxoMcQ",
  "key25": "4mSRhVazfttH1TmdueirvfR9BFfggAF3HnN6ZNw5HLRvJ3vpChJga6xvSHPxpSXipmkhxJnUPk43n8agBikCMTr5",
  "key26": "22rBY2ho9EWkG7jAsy7seX1ouKCmN3rfAyqr9PAK9bzb6rzZsRhfRg3mKo2q91HAX6dedX3GWGFTcn7Pc8GAC1nz",
  "key27": "3XibPixdjrVQ3kEYSFsXHvVb4Ns5j8PxfTPjpU8ViiBdm6R2mzymMWFeofU74n6BAATdtkkpC3b2ZYVpSkU82RyY",
  "key28": "649m4gcSt122uDyedrnEEe2fg721yZUXSdr5PJwrEMab3tqz2vYif8BrGriWtCg23676WQDX7qnLzUmhzWiMLB3p",
  "key29": "33dS2Gn2z5WKuHvnbYNaHAjvUK9dcyGNvigLP55jPKssijEqBCZjcUFVH3TmFsKJ13c8NtehiwsEFv3w5haRtn2K",
  "key30": "2eYEgTPTFcnWWQsyzEpVVohAkz28JfWTmwEn5tQ69iUxVziARk3TpHZSf9Lke9jaJsjoP8LuGpJq6dBVsczCZLCw",
  "key31": "mxo6aDoTErE3fXiz5qBQCUjmHfm2S7XTVkGvoDDoYe6TKacB7UagfxV44Mym9yMdxgy9oEgAZn5pCgqj3pwUxrk",
  "key32": "25FysL5wn1yTyxiv6hugQx1oTyRT3cG5qiGCTbDhp9Fo4GokWwQ8JkQZvUxhh27rnUpbm92DAfWndw6nDswKgCQU",
  "key33": "EGGjDdpTd5mPrrKJrcQuZ9rJfnkx74WYFwv3hfmfBqemANVqgipqsqYKNeHhFmjum3ihNApSdD2nGvmtdGz7Azi",
  "key34": "5czMdvk5fnVJcjRAxiKHEmbbXgWTj9TEao42TbMgqeNk5zCYdXfbtebVdUYDEMHxaUwXdnKcqxTzibCr5R36QcWV",
  "key35": "5ovQ8WLGivH3mPc87rWg9DgAHcsKaMgGYuZhdcFYWeg3JyVahEvnSvswV1BHDGWJpa3QRyyYwDQC9LH4LvfKU2PK",
  "key36": "3XnPksBPNpJsUdWLYpLP1wiLi2K2ijpkx7zDxfMXDCgApfw8HHpyMd47SzE5ARgfpEiu3hvBsV53wsfrghBjHzQH",
  "key37": "67eWNmhgGoPDKkwdeu1QnRSW8PojxSeUQZTq1HjuTXLhNVyVZabQueVMVao5rcyL2m8YYPV8eCoMJRUWJy5LPeBC",
  "key38": "2VdxMnXuLGsHdtRHjVQcLGGkmnSWgcZHyE8LkV6Gfci8Yi9MRSpiFxjCbdiR9h7gjxkz8RkYHbXobQ6vbpTYDKdK",
  "key39": "32WfnjvA6SBNBpCHBEBJc3fPbJDkmXjYXrDRa8rwDfMkyvpac8uZzhAGmnmLLkFA9w1Ge3SU78du6Lpu1oH6myd9",
  "key40": "4HmHwnkhJUYmcKRnLww1JcVUY1RJkU1HDqNVQj2iFDqe39RotS1iFvXccyspbeGqaxHJUoHipA843gniK8Njgz8A",
  "key41": "gWjaCcsLaghQb7y7m5Z9ueTkggVBgQbjrCyQfYqafx2ZZQqXzRWNRy2xaq6T1S6iwGmBoqhwPKbR9R3jFP8okrA",
  "key42": "3tMc6okXozfryay4G2n3pR6ocRKzhbxui3zPeZdUmSbuuzoDTdXoHRV6HtyR21nZR6PsYYtJkCFUh6v2hKKgHDCr",
  "key43": "5ZD8Pw6SwFGbAo9mAsziKVvKtqPGsRzQaNCMgje3Yg39dPMEQJs5Z3RpBGv543JFCoDbRZ2kpC97Afda1P2iA2Tx",
  "key44": "3LFqPahWCzurHpxVhxBNhDKkaGhDWbvwsmLJSbKcmgfuCfqJPKdSvVEnKzAmCqJ5nbLfMLKy3vfATeKxa8i119qG",
  "key45": "2dT5ZhfyaEMMeHQoWjQrX5Kff5bA3GuBYnQDKnnsKYUJXft2CHEUxCnPnjf3iedv2sRvBTuHLdSGcLxfLrGjQJin",
  "key46": "28tXXF8aZVq97CYcS8vfjpNSm1yG4GUyPJAoowvXKS5roSYNFsFwnVWWyusuu6hkfHMU6AECkAzKhA7sX5TcQ19E",
  "key47": "668f5vaH65kDyHNgBoLoc7R9x9dJBdz82E9xi5PTx2p33ftpAPdqqsStS1L1Bi4gTaKsJ8oq6qHhj5vYnxGwdewC"
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
