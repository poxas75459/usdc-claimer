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
    "27wm41QDw8wdN7MSQYYm2P7CyisRWrNoVsCGurBfpGJYwU9CsYQSMyDC8BuEtYrDMTijrdiHBLdBPgPtNDhF39eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27gai5DdJn7uvLKHuf1uG3Rq1nuiqwpiGXErJ65oKMzH3TuJ9h8cc8rDqL4bDfs6Ku4xgAPKemPoschXUX2hdrYm",
  "key1": "5WzNhpS1tARLoSBy8tpG5VyLiy7Pu1u2HGxYJqCzwxX5ZKLMMKowtiStGqAyjTqdNs1VXFsLYBvyuMc32xbWrjvc",
  "key2": "brhZUhxzVbBm4sQmJ1JFNEtAkANo4rfeny2SnMLcbm3U7pPawjrdGfUhNLoTJSkL5rtF7D68rQu3A9smfsnSH3g",
  "key3": "5LKcW7UUuCBkdh4puKTLRWc38vDnxvPjBGrrNBn8oTkAuA2tZjaeLvKJXAyq3TCLooR7Gb1Ec64kduQpxm5Bur9K",
  "key4": "5T9WuFXyaC73KkT8XsKeYi91xFjV2FkBw8WUdq3Fx56DvZMVbEj9hTXeYeJaAm2NVXmSJPwD3JhL1ZGQFFLzBGo7",
  "key5": "4rAaQanjvo1MeYJrutbKNU5Q2x3ev6FPxJVsYoggWxFmNXtKLZi7bs8YLMkBamZoYTuxBTjJ4YDzVUAGSUKtHDcn",
  "key6": "2BUEZBu7CDejadoyVkyWXpf5HuLc5vZaRQ1vc5yoAyvA6A9bEYWsBm2qmJhdkHm3ZZX1Tvdk4dNf9k5FtoegNgEi",
  "key7": "5VbRPH8Cui67Viz2yVwB4axrqX58BjL31Td6trz3KLWEiVLqHa949VXKu7KCSjCGWqkMjAjTp61eUrWyN2TZR68p",
  "key8": "682McXMmS5RVTPqd1kie1a8THnF23uzJcoqyt95duvQuMv4UkbfrZmoNxzNoq9qUcEzBd18RcRAVzSkgNYYCXR1",
  "key9": "2qogZwAfX1n9YMybqgk61ZixgqS7VMNt86fib2juD9aYMxBuKWB89sfapVHHjpSxdBbzXdeFdAtFFhwQzKPznUMK",
  "key10": "4ctsUv58ZydFonSTLyG4qPZLXrJWmxgYdnEsysZ6Byz9iZnNceZGTwhgR4CyHgJyrJ4QWvAQrzDezPRr3DCckLA3",
  "key11": "2MDtCbXJDWhLc68JNsPUhU5x9YiZ1c2nMWt28XTD4JgaXHCt9ZFJk6E8iputFprWsBmu2dKTEdgmUsTuTcfy2unA",
  "key12": "2cpRdL39pBnfMoPpnw7GW93sRoYaFtWurzLpuUMi8xLuha8KZ52zAc7pBvBswMhjjmoQsygCHfUFphnu3RjJK8v8",
  "key13": "xGGgBmnqc533abr87nwKk6nmxTSzH6giyWb5uNSisgNoKd1yKfTwq4LDM655tkG12419cWdQtPy3jt2CF1CNa6q",
  "key14": "ykbXAeWs1q2uUVtCqqXQTnnDtz6rqKwW1TseY9MYQf3aMURD6y9yb9emRPi1ZQVWkUTnzV2XMt37btmfmxjp8ZL",
  "key15": "2Q1qDKADZD29gHNWhNG6DYRMRsDpRTGcJqubw9d8uLXcEZV5ZUuZ9tYndm1h7hD5fVvGyxzUqQTjphyxPuy2gbfo",
  "key16": "565du58de3dkWKGBaZ1Lq1rrA5ULXTCt2WGvnK66GgLMryUH4rshVLGYrbyn7bfE7ZSmomRtmvPUE5dFfL74GpKK",
  "key17": "chKcy9AXAGMHGQG78s5o1fm4WjH9CfnphRZf6WjAMoVBBZ3MRee7FRWKC96jRGNBZwgCs3nDVqo8DXMMxkRE5qV",
  "key18": "56guqSzPTcAdNUH56aSCecLRzwg3ZjjxGXdj3VEDCr7WuGboB3CqNXSKNfL6zGJuCjLF3d8JKVKbTLXQM8oFyReH",
  "key19": "3tRYi1RJuuEFpyEXfrXiFc5VUjcvXrxz3u16RwRPq2JjpMPPKnqyZeMYnvoYXYeFVD9eRn5SvNECJosUuAzGZmxT",
  "key20": "4oqba4coxeMPQgkYEo5HHLr46MSRizDou3mDzxYxMtAwZt4bximTfddwTfvq48xarBLVtqnCtnbJ1g9neLVebQDA",
  "key21": "2JB9G7SGN3tDUUD4VbxG4PEKyTv6fJLJi5EmGu75yU1LMoSG59e3B2yPAj8V9AJJ71pci3wxFoNebYkShcsQjij8",
  "key22": "2zUdU5Lr8s8UC2pCfRfXVgP1NdYV8XErSjPN36DuXtTEdfecVMjXjTkLcDBMjJ6jXMz2eavQWLoW9QuQSxEc4D37",
  "key23": "4hNk6Zi4Wf9KsexjyAGAPu4uDMQxCqrbkQpBR15e43Rdv9gj8ELUAj7RRxkARWmzi35u128kma2ga789wEYztdsD",
  "key24": "346edNNpwEbLPFCRDkB6JXJ3X5UCCw8WwqnLADb875Vaz5NL2SJP1UL2d4VQMihKt6AvkTGDGXdQBb3TzS3CtwCd",
  "key25": "2vqPzZMkbkat5huwPKNYj1snTCMrnU9sGiodFMYvNeQK2qunqM3s9gB2ekrAZ5PZZL81C7zaLRBGMV3LKPndMoxq",
  "key26": "4ZrKPMGyggbAVAqYfFoELeMfGcYJVW3SN4GY558uFG2cuBsKTxUUExHTdAiu5otL3jj7mTGVSc4edqEBBttsZ2wk",
  "key27": "5exCEEPUtgLTpXUEeDyhf6No1h7gSnCR29bE6XZ2b38LhhagaxE273VN61uBm7pGWuLViy8bKdh2sY7tkGDdgcCm",
  "key28": "2NzH1VXPMUY7AWH5euapk3AiZq7LTEmFMpvWjpWyiTfYddVu32yA1pAFS99srk2BBMAMu5LsAHAJAfVuzMZikEYD",
  "key29": "3MYDx25tJA8kQGWgce2ygwrRGSGTiiVC2peiqJk12ezk8w5sE5ZfBciY3AiWnQXJHHsRdzAhzBr2j6ycmYapD2XT",
  "key30": "2qagxBVr75VTnDLwtT9maTXMW2a92xzAkKmE1MorkqSkAy1B9A2mc7BwpvaLJsSx11HgmU345xtgUwvkt7ecVaVz",
  "key31": "5vi2Pk8HBxeBzzXisnWcujiqLyJQFPjroM76TDxSfoEqsU33NGbVT5U5urQUFUeWHizitsmurnL7BJNPHedYptW",
  "key32": "5MnErmKkkxdsfqw3ro34JCecDN5nF5ZZ2CRnQwwYfAii3an8D74B2HxaJ8rRykHsqTins8ZpWerPeJSRoFL7HNhe",
  "key33": "3vWqwgg5pJa84ETwjajarAQdbg4bJZ55JH8ZCNN8wWwdBZ4KQFC6crbh26NxEkxcVViBQBbydn2ckabDc596Tgk2",
  "key34": "5dVy5NYrKYiwmRFJtV8FgxPZqiAnTizbD5gPC3EmRawF2D3EnfSm8XL2fJCtTbG9jHNbAS7AGPoN5ApEnLx6S3bd",
  "key35": "Yt5FLVuyST3vxPEVPx8GRafTQtz7tpM1Zzi4hhzhvuej92FsCE2i5aoCp6tWvkv9EWfTLeXQfskHNU1M691Badg",
  "key36": "2SHoGzsWLGyW94pd1Lt7wZ2CrBBgG5cZseLadGPBzmZF48W2zrp6nPajNE14xv1p1457sY2piqHC1eNMd7NJtVeD",
  "key37": "4Bfjbggp7YsR2gV9A9NE7BAtr96naTDBkxqyA59trUKeL6ccCchbuTkSHHXstuoSggamMcZSNEXp2n8c5EBLHNoR",
  "key38": "2kGb1DDRcM8XWn58FFbzashaA49WZiKXWkDxhgSdRva3ArVa7nynYnt28WjvoF28BVVbPZNJTbBNHKvExfKLG5Wh",
  "key39": "26P3kmPgywzkH6W1QrybcukTNnuapWbeWYiwgdHmMZw2pQft3D3S7RM8qxnUewLvtwTJsmTMwHScsqNLoxjdP85R",
  "key40": "3vQSfbV4BpaKfbw6mVpB6XSonKEmQvP4ZQWwNwtKVPzmYpwuwQp5ewCqstqaQfDG7RqQ18tvnsHvvSi5PatwF6Yb",
  "key41": "3RtHitSVFgJq1NnCbd3tXXzcHiSZrzRiCXaAjE6jVxQp3SjtoAQpBkwm8PF1WL6cSRc9xqXZxSiBoTUJWjUkZfLN",
  "key42": "4nxEBpye1JM6TQKnTfwxD8sJK4SrYCF4EGRMXmi7NvkzHmwb9RVhqHWksjXr62C325it8pyrANbR9pCUSpDxdPFN",
  "key43": "2zxtSZoJjAEhQEJbmcc66JF5hABeeK7ZzJbh8NG3ahNPqUKYw62SHDQuckRr5vspDyVrbJ4mDpgwmrkseHziP7yW",
  "key44": "3WqFUC4QntymUoC8UWz3XDceX6wajThSkoA3p2i6ZeBRmD1hSq3NfVmtYJuk4atJ6XAGZZFHN8gaVmEHxPjYqhfj"
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
