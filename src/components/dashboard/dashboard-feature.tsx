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
    "FDfh7EMramNKkf8QZ9LGDZBmLi4GWPdpQjfRMsVVKfaQRW3EUGbD6LJRwnJLFg2YZHJhQomFQkeBxPYJPZufFVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjDH5CgzsD8UfpGr6jj6LnYHC41Z5AnfTWaPade4vdPLPf1u9qSpbaXQMmwYGcvhuW8mE4vbdiqNmnMzrtQ5RVf",
  "key1": "4mfNmD2dsapaWsbHKzbzTbUxFuM2MkmdL47Fgv8oHBMUHSn8hnusEvoNqGPfhek6iBbAUzqEZGB78dwrRqSPKVcs",
  "key2": "rrxWvk2hgeUH1XWxva9uHBaU6RjpVEvKUC5H6WHJpJumLnN3WC2omTzD6cnvAf1kv25zee5ytHJx1TFrV3CrtnL",
  "key3": "PTRHsewGD9wd4xLCHCboYmaqJSMnWfq4xeacssvmy1E3CrNUFnS4YYsRRpaAZbmHLQ4hkWwcs8odUiMGNmoG4Gz",
  "key4": "4ttv1WrPme3Dzk3agE5QLfW1KpZZsUVVhWtEDXkGmuZ6cvymtDNPtoUT7WnaLEyesNo8QBUg13dSqvTfXDp4DfDb",
  "key5": "42Jn2sZHfmxFHVmBj87AvaWCwtHc95645KLEk9NLsSwe6tmwiys82uaPbc5p8nP2JrxsRoARaox1aFX2ZLuyiqxC",
  "key6": "5Y29aGndoBmwM4BxFdoBg3mKcRewKa2epduq6fjhg7zK6qxmjg5EPeSaKQ3TZrde8tPCVc3k1YL6ayTqC7At8V1Z",
  "key7": "3JwAkp2wp7FKpRrbp2pg5EhmcLsdPeoTSJKKKedUqzrx9azUnuMQsFnpoKgGBw4gp6WBUaeif7NP6mKDuJZD3oCH",
  "key8": "4uSKpeSxagh15vfMUDU1QCSufgaddufMoyQnYTQeuJmqa9HMVEh3wvDPsy7VJDetfvUw6RUcVxvM182CcAt8B6m2",
  "key9": "5k3uhvjVRomQWtaEgoanKgoXmZig4bjPgeikczWxpzTkYBy7QGUSvUTKBnhvmc3pEy6F1H5zYwswijwMU3Qb3497",
  "key10": "3emW1BkNypYPYY3LMB75auKMrDutcg87hVg2jQcR5JZgJjdK4GLqCxTcCeUzsdACsMN8Mri9AyvTpEAnY1owgi5A",
  "key11": "2mvehwdcAnR9KpUxZUoE2w8fLFEPtKrxgPSwi7jMnMsA9Pq7GWcnqmUgETrcxsvRngFgbyiq5TmSdQJEpxNgDCmG",
  "key12": "2Xft7yK2b7MdUcz5YmbFBcpzxsZbjHZZy7R9eXYdSHoQuLWJYqUCxz2zw1w3QVcABeSa4RcvVD6MSMYUTYbHwAtG",
  "key13": "2L7aakut5pdyRb59kqWCeQpR3N7cQdBCpGnTt5f6KieURCSsBsyScqTs9XNX7pwFkw5XBesFkv8vDFwcZkGHXWC3",
  "key14": "kKTDwSUtmi15eZtp1ka7TFyWGfxdrmJMAfhgKneSGuFeHppFJnK3X3dkkx5CWa6Q1R3EZskNozF3bbwtbyjZ5eS",
  "key15": "66S83uFx5NUcQU4FzLCFwyFFKcVmd9w76D77RxFk4hA67JZudvu54SuDfiYmfVM1nyujdob81uCV97w1Mo16A7o8",
  "key16": "2soHbaUs4BnMjdZfwQTvYRTvHaFzD4x7HG4GE2jcTV1sToGZbqs7TDcmyGkkunaVCG8uLV4ReQDCwSYY8FU9f9kU",
  "key17": "dk1REcgqVZqiVYftaskbjNsogxUqRfMzDTscExdvH7Htauy6j6ZaCx1D9ocG9KnB5oBqfHa2jb8phYTnm3CVkNq",
  "key18": "4YL9BVeZc5rkhuiweSP6NZCZbz1jSgKNEuZq2rqG5DdFbF7ShFMsUjmhzLv9gMcwBB558gUi17KdAp7ZF2w8tAER",
  "key19": "2nW6spQA2D9NRXDP64BGZrBEQBReSNKCUowy1u85m5WMs97a3FmKrsdiTrmaLLgEJNPUN2XBFgNEkxjvVBC4PmXJ",
  "key20": "5i5bdsRZBThzULT3NhWixGqwjviM1zDQ5BR6pFkoJkui3yMGtz3MfUb7mNXxEdox5MwQ6WYrc6DZcZAyFcudz4Kh",
  "key21": "428wHyHFMttVoD7GwFa2eghKFJMBYWnh77AmQEudATjZnkvkcxyNJWC8YhTUjogpL3YtF9Wymi3GWNiJLL9ZCBe2",
  "key22": "4PSQvTM7pTY2jzQvYjcrZPvG8Eb5gHMf9kQgoKp9Gh7zFrPweX7vtLP7z15dUC78Rur6SMi9UiGbFVhHJ4nKdV25",
  "key23": "4qzKV3SQXukknU4N6zTqkjukfPdwAtNep9jGvDsGnC4AejFRBGfo57sPo2YdhtfL5oQqV9L3BYPwiZCxvXunCk6z",
  "key24": "5DpxpbPZM6ochPWTrNbSKPr1HcukkEZgLYDyxesUA91yLVM95qk2J3yiTx8gB2x3eih2rQzncFtrXpZq9kNxBQeU",
  "key25": "46Ji2ydKMWHRDpYV7npSDkHxZNEGCCV9dyzWV7SJA8U7AzGyqah77yqXFBCBUvd4LZWGqW3orZTFz4UomTBjtY1e",
  "key26": "2W3aPz4Xg1xQxBBgETVv1dd56PuYGA5RSJtJ3oWjvaYogr5xcNGvahWAbTVx5db4Xz8aBPcQiXHS85tYKQjtitDx",
  "key27": "4Zg6ybKaXekTuja2fbLdjZwmUr7y6tWbkYLSECmzfW574q3w766kHMGWfXmovgTsNxAtBC2YwmMDgGrwjzAXh4zY",
  "key28": "4h7KVuiWAboVsJ99xFUP2ohixouMx4ZDK36tVTVALDNkv18uYtPASMEvvSr3gm4zksrXDwf2fgVWq2xirVq96QeJ",
  "key29": "5XkuKinB14AqV6P4FZt2qyws5e88HGjq8meWJW5Z72b7d5uVQ7CbNipx6VcXJr3f3RXpHGqGNNNXCX3uQCCHUQQe",
  "key30": "Doxdfk1iVn79TQc28WurpUk1yYSoDwXmgCGWiFkJoBk2iYXAz68EKN69oWtXwFL6PrELkoPEVHinSfegC32qbo8",
  "key31": "4WpzbGfMkJYhQshejri4AbVzgwRmffuwyqZNjhmSzWkWPyf5R91iHGKkYES1qeTi2bz7kkB8F9HYvTLoR3yMj1iv",
  "key32": "3EKEfvQiXfbW3UdfH5SRAEZi61yiAFWvPR8VuA3tza8TGHbQoEZDUkq5kxF2sdANM6dbJNPF4ajbbPyzS4uJQ9sh",
  "key33": "fVCJu7iLmXdSkwk8SsMvc6cDJQZe8cU7dDpqqHxjieB6egJ18TqZoiKTZ3ey6M7MWKDPiM7UYontXRwgBEch2iV",
  "key34": "35fGc355Dav7axDZ23XhHqVRr4rWjEvRxHJSciUTnhutanVLhaeN7iMzJhRJZ4R4k6SdxYhGvriwRQgSSSH1nYBo",
  "key35": "5hmADFJ7fZYpj7Hsm89CCtY7LB6cV82uv3fUAMDeSiYdPP6A9HRGckuUTBXKRSsJHbcF1NvFEsXGX4j2zDhazo4e",
  "key36": "2tB5hGfz3kemgTkpgUPZi2mMoFtK28E2q1sSAijMkmJd3KgLy1LShZRmFFPPrSfD2oDi12u6LeG3bDvZXwV5rQ6V",
  "key37": "2yLPgSykF4phbffxLkCK6KRvRLxWA7ZyXR1npBaRj1wX7NXoN9UjuHa4uahwwtN5HVV3uUb8uer3pLTwk1voBxHm",
  "key38": "aWsEpSthEVWjqyMgLGSNbr7mjWExGPj7ue2wkXdKryvJybvBpPqiP44yYe8HMHNKkt9VHCZRvbn1FpcNW8r7B7F",
  "key39": "AoKWVFacHyLr7CbUXuqSY7EM743A1Ej7CVxTegMhTN3bcgwRuWuTWthx6AnQmAmPjDFsD47jVfKS1dGKx6gfeK9",
  "key40": "4d9cThyKipg4y9VbMWEofPM2vhrK51VTZbrYJWeKL5YT5rJM9xFAPRxVNQZzcUnWDKPMq3SMuzkuHqcod5jK39ii",
  "key41": "471jPqr9A3yjjaAAZLTD86H2WVL6p8vhJsMAJ6tv4W7e7aqwQL8aHtsCq3xJhDm2m46nQ8FN2MWi1e9S7xi292UF",
  "key42": "s4bDZHJaPNTSjd6CvWaYFJntzC4T1FikeRg4AGXHFCDKzxSx4XuwbRaYm6hS7qFdrjagYeNqhzj58cEFEzuzCqV",
  "key43": "2dKggDiUsJYAhPk48prMMEgFNdxY2KTpjradpqL2FsH2aJ6rC23DYBpQFSW8NekfnDTH5xdLdg8F2S886sQ1Abbd"
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
