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
    "2RXjWDv2JYzNEQcdBQknM6EXxEHoz1L4XHUXhyDxdnSZsyPoY4vW8TiS1GUUdEEViiuUsCx4Q9vwW5kb4GbafAku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GaBtZM3DP2cuTPgaxM8unoDbwtftwTNnf7Gss8wohXwQN87SKedyNreDeCHwngBygvg56YKT525FeMVhqyJC6Gx",
  "key1": "4XW4cwbkHpGraDziG5zu8FWq2JVXnor8jvYMhSipEeCHehJ2MjxjUsjUKVYApjhdVhfCgrF2K7wmjVNoB2FRXqpV",
  "key2": "5rdHT1AuBmV61dC3ACa2aL77omP4irs4o6pENuhXGB1zDdGrEasvSgtQWbodc5te8m5CuEh7XsySCBxBQNeFQF49",
  "key3": "wZqnXY3y7zMRoZKRkVv3smFbiQ8H3KQjiu9gsMuA4GX5U95RFiD7rfowYyuCCPaHGMN4AvUQxWGFCqphpe9qusi",
  "key4": "3qFW7qNfXhxC7VtVVNkmgUViBuwzMjZTA9angMKnQvzC5bAotezJ2smcX7gJcP6gmhkD54UhP49VXNiTihQZ5VsU",
  "key5": "4HLvwx2L5UjmvWActL91q3yxR2E8hstahXxhQQaUj3MKYr1HsDwa6wn1cRqMewd8tmCrrBhFypDsV6UYmSUorcfe",
  "key6": "3P44KFHqQAGPuCLvxATrNtqQaQXLX37XpKbcRp1YVjnmPjaqyEEzXZVzWihyopTBgvrnPFYXXz7M3gAwhVseu4tR",
  "key7": "3wnTYDR3UEwSVwqaZaR1mmT8EXxiT4G6uPCrvBWRgoyWRLuskM3ui8fuV6nfSombApYqGU3HKZ7DWesbJ1vUxy42",
  "key8": "PhxbWBidhkTmqhBAMgtuyX7xYb6Wv8TtE4TKQiYeUsCNM8VY5ZwXD2dcSbWLg33qiDwzfEYsMwXgyKSHfesrxiS",
  "key9": "3saqakYk8HasZ52XFjFJW9tRhf3M8CTJgQAyYpgpAHQttezfuAUy5YPJ2XqHojremUmZZVKVYKdTnhnwKucTGZXW",
  "key10": "Bavy7vrWBrTwThBhFYukbSZQM1HbKaZk7Dq9dpPyyi58sENqNKa3NCjixSJvD6xhMHKUTRd4Zy6cFQAybGK9Y9N",
  "key11": "ynjaAWhNprnbkc8XjdW1W1Lby3MF1rLvje5QrWVmAWZk38SrwUHUwsyLB7L435Wh9eiNd4LSZA6BbCTRrmh4isT",
  "key12": "272qkNBygdsFscw1Hh4ho8H85vETac61dopKcxCoXMNd4UQJpQSELwqchLBLxKraTR34QFopxURWEcVtEii3UW3U",
  "key13": "3GARDyKirUPbS8bN1ckDRshVH99tuVpM39xRF2oimtFSGmxanWvhRXWfKFsWZW257bHKobN3gtNuLWu8eyKMmrt7",
  "key14": "qkkt9iHA4VfwHKdBdSpDdQ2QtyU5YHT76Cyxf7jM3BV5xsBEFiYbPv8TYqrBvpkg7N2otBioFZMgFSKX6v7BDW4",
  "key15": "3hfLgo4EGnfVYVUrmmYaFR4n6RD3Np4N4rzLWi9tVNEpMTUTwfS8eErQtEZZ51qEwv3sT1DX1pDyXcm7tpUcmTLi",
  "key16": "bXwFPCsvRFneFXe7khULTn7p6ie4NzVhodjjmybjA7zLM9ueKEnPnsw2Gc29DTZ5R6Kj3eRmzq7cn7s3H4NGm42",
  "key17": "5G9AdjTZC5wZCwFqgXq53Mja9pPUrZsdXvoGo41idBxEU7TqU9SHemW3mPFa9ZAsxr6AMdxY2AQMK7DMJT63ooGE",
  "key18": "5jKptBhc5UT5rxy3JSTApomANcZ7NXUah4aVWfCnhTyzQLJFKemJAKptyBZCqdY5fM4Q4eA8GeJKBmaMczLX93sF",
  "key19": "Sz8v6jeskpTFijP2oj939kZeiz137MBwmBNnybWji523prDJdAgB8PPGrVTCkfG2wqthhuHmGAJztvZosYk9uom",
  "key20": "5Hr3SQ3DnSN6Tgsnaq676azbjihDTNLRSrSDKXXixj8zqAivDJJpjTtdeLfAiVTYmJY3rp4okfvwXgCtz9avGfru",
  "key21": "2jmr862T98XQ5Di8UDLPt6uHTdLCD3YVpvFnnH8gppa6ZkQ8XLCCag1uaeDf5PhgULiMMu2ZG9YEPa6hPHb6eQ6S",
  "key22": "4TyUi53ARgkoD4uuUPxtLGwdCJdSoXC2gUfRoAYriGLpv6yAeJJ7Xdx4ymBLWweKAJawvApBSgE5k2iTqXUgmy6d",
  "key23": "3YeLtP1kGn4ViRmNYNnjnmTBrfKXWXkkWMEiHawbdKWnjYQkZ3Wrf8Dskzv11QmzzrDm6S3hrTRChsveF3StmTv4",
  "key24": "2nnA9CTx6Cqgryj5LNskAmRMut6NJtGmxYAZapyZMus2eHthxocsQMeGU7HBrTo8vLGt2pztLfWohJ53Tr6PEZdr",
  "key25": "5c58fnRDDXCQN6kocK1DCYB3BJovGowsfXNhujacFUaDqwZX7W4LGDEKD6qA7rDFwxTberDUFFMbcKTrqP26koNZ",
  "key26": "3c2VXYvE7vTjnfsAjFpBsPkjxrHfvtCmSbvpC3w7u1spxnMLMLoD9EvrnjfRju4c4wcbnLFNuDYHPwdmsehg2kD",
  "key27": "Kk9PU2H6sbCB2ScGPaJRCW3rf9RVScmkG13wYptpmhHgD7oexrw34FbRgCumFNdgkAbdm43RbKaq7wdaF3ZUibN",
  "key28": "hFSC7E9B7YmNbohBqpNTNvDxBvL6BatGgt7YHsg2ybx1G5ysypcXG1F8QvEnDQsmq32QvipDRRBdU32VJqwreS9",
  "key29": "4t6xxd6dp6cqK2JzHi6HserU5pKbcvHzw2MQa1PaHCLCQrCuXY8CdfRgvTnprzNoQMt9rmnusdpE2V5P5nJ6uSzV",
  "key30": "NTYzS3FHDPYB3GgV45awn7u6rwGRYG8dC5qA32xLD9WX9A5VuXwPkAKQ72aefht9jHzH2Fgxt92WgnHktDf7c1P",
  "key31": "4Z1BjnEpjdrJq2hNfpcJ77QJKyzActNq44vw9QK3SWM78Y8y7H5T1pUnsWk8u8LaiJG7m2yfvt6hrJ3E3x1edTws",
  "key32": "2ubNBpvEp2veoNrVph5DtigUjR1kc7Aor5S8K52DScMtRLD8oZx1FuZdbs3KzDi2eRhoLJMwgHvvHe3ep5fVWz7V",
  "key33": "2w7w7K2iPC1qMnAFuUrezNnGy1eXjZQRoWCAv6FeyJ9ozc8Sohs4m4y5Nu5FQqFkzWoZQweKvvciyvkTMBNkVoWf",
  "key34": "28sgnFjmD8o8EXbq1BMUqh7QeBdgijzsNLcyVzMX2BtvJrmTuKbyLAM3aA8ZFMeuSTFjFRwMQyCuh7MF8jriSfvk",
  "key35": "2ypMLnRq5KRQXomdfxqDPwnTy3nQZJPrvg84gi6G5F4z73AyeCyXuq8kv6kE8Tkwgfj3FLGcoSmpR9HmznT13iuG",
  "key36": "62WqZTSCP655V9xe9iCewjuin1GyARwiCNoc5pbphafhTEfqcHugshuHyT9zaRFANVzES3eyE266AGdvDpEVwmt7",
  "key37": "5Z2KTZwXRUksdtUxp3yp5cV1TQKvzrWGwuRHruxGp7wJfFTp8QQ7HfMFqHr4vC7cdsitpX5bN6sN926bG9saDNqU",
  "key38": "4EXNvtobRjUANFMoYi8xnUJnpe9iX2vdzgJfNkqBEok2aH7jN2M6cn47x3pfur6QeWSgogVp3cmVTX9amwfh4BkL",
  "key39": "5n2weWMQzgVp7QoEprJTrvRszF3BEAGBBLdqHhaHqdPuE9gjG4n8LBLFVr77nyaoXyftrLWLuvUMK2YxTioMjLyb",
  "key40": "4Nt9yndyypbQpYa5jeWbRhnjLVCFEG7T2n5ypXuuMhe54Amm5fuxHj9nWNm95bF4gJvBvtAqQV5gwXBkpyKhDaTd",
  "key41": "272tdvXgiWunCJAwjp7ACmhYc2FpyPPqSB9gJSyomMA8Py7cdtVRk7fS8hWkhUe27y4Vfi3zGaWXTvFE6UyBEbLM",
  "key42": "38663oXhLLXaLjQra9At62BAGT6PKJEc5z7d4Niq3vZLNEuMDPLaKoLJXSCFkDP4KfR3V3GZtKzy4coXwGiKfUJx",
  "key43": "dbEFquQpabE2C3azz6JinJFC2CBZoCy5rhWzcRWzMXMNUZfVAexzz6XBF73L14AuLvPw37Gc3zTBy8XwxwTPs1p",
  "key44": "3yzsgu38mXYd3hs5KzRjzxuRT5C3vqYaUaLEu6dcKyGXig7HUCYEhFXaeXTisxaiEGh9SxDZ8tJgTUYwYh4ncNRz",
  "key45": "mrELnNKghEJFMFXwku4pLoirY9BN4HKXNidhXQ2Ad7vNXrMsrY759MDj56eYVYUNJfBoNVSEp7eaAu757whQobF",
  "key46": "2mLRSsW3uAFMDVN6R9EKn7ezsvgPY7ZhqvBLsPLHHXoF4Q9yXhbSeoWMizJ6DGLCygrGpTjsiPcmFJrAgFigz1mM",
  "key47": "62ZFyngqxG6AThpELUhUkYuxUfNiFCshN96ddkkhotFGykaRGAEVbRvDHsouBphNKWj1Kwkgo29NxuYmrV6VxTGx"
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
