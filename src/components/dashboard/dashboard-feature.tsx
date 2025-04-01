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
    "53WCBpwkeckSCuFD5uyGAXKR2Jd6smsHvGSH3bdjMRJqJWhDnbCbBJdrVP2EybKRCxxTtecSxijTU7zwbBBggD5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CzvstFa3GgrVa72PKk3Yoi69yBBvEu1VYWeC13TxCtVa2HZEG9Ni31a6q3uyhCJZvPvc1nEHTUt88xFfwdNGnYh",
  "key1": "5na7rQAv7pCjej1sFysrwYNVVqWBwHW5gRKQ6puLRjrE2Svo18cSPyPWrQjCna5gTs3Q53DC3imWaFuK6vAADRR5",
  "key2": "Fw3dKMZrytVzdkyfkgrcG6Hv3aH8GQNHapHfJ2CeQp95WVmcf6MGx1fXrFmvLwdTp1XL89Qunx6toFvu5GGCULb",
  "key3": "2o5rARNoe61VeXxsqQsB44dHJ8g533hGFzjvXPjqCSYpLUU5EEXYdzCRx8294bQaxdYmaaNMJMs4Lp71AJwFygLs",
  "key4": "2hBdb7aEd94YEPouCrVZEBoemHKWDVkob4yH6kvfpmjukA4TqQGbBST4sCBJsQbtB3hPJX74YVvmPfLKCtmDkaF9",
  "key5": "nECzY8aAUThk7ZoU555UpzoVW6NmcxjrPgMepmCnLveQA9rcZP3b8ciZ2UGZG764NCzRsf6ZhokTRY2ztLzyLFn",
  "key6": "3diRHqnNutfdynZMFuKxF7gdwRFXstQaG2M341yq1irW4D7oeZHTvR1i7N3dvzWQeQzr6XTuTWiYwJBUQZJNZfW2",
  "key7": "CHDdMXM1XRBsja6bBu5L95Tw1nmLFhHuQYK3p2jFH2KReGxor56CUyMYSvGFuJWB9mrJPU2uKARtaN7VqToa6dJ",
  "key8": "4gnZzK48XaDrsVw45SAAeucCcPtFDa9mD3srHfGVeUhRQsJkBouCZR11SdQBk8ZUZnTqrWiTsSxjaEEVSjeDqCyH",
  "key9": "3PbMDEVCu6nPaa6NTMzeTSU89zxQp7XRGvVy2NXsV8FBBsaGzLDzyuT2sZ4bbaCAjxNPLbWMBpXC3Ev5G7UKvTQ",
  "key10": "4APtqVCWDJbR7id4rLwhyGLjxBP5nVGTqEbijb2GQqnZVCCnri5hNZc5hjqf85X1Hia2jpk56yhqV7vdFaYQwg5p",
  "key11": "3npDbQfHkXxpwFgTEJEU4C31vYXNYnuVr9eMLGG3rijb27tpFw12pPu6aFCvt65UNR2XtfB4ChMWWgM321xfN1kN",
  "key12": "2uZcddNYazByxDCtWGX41Q9gXpZ55sW2U8YJ1DkBuezZjjJ9ZcKE9z9xP8977C1wJ3RaHFpiuW3AXMFGy6kdrknU",
  "key13": "5xZ41TFJVjC6AdMGueHVAVwikWEKtXYurs4dN38xnodJNDjCCResdrhaS3a6cD978qDSXzr4hJLHnndyc2huBWcj",
  "key14": "2dLDXa9sfyxSCwhmEdEEhaJfFbWdpqGVtjRRXSRVF582Hr6zhvyN8thnJYgmsTPN8GmvjvAKPfxVcW6g7T7tNgQL",
  "key15": "4mc1mZcTynNRXZoqfaSybLmU4iQ1TspuvbfxyXjmw47oPYrA8aNCK7JYSLWaxBJnrEd1Wd1G3DZbAiTARXimzWwK",
  "key16": "5C1RGLFy4KmmcnrHj73vVbsx15j3hcgytiUVyzVd52g5ipVT8BGvuJk5QgnCrkoUfDLvZBT71wEYYLu7AfHwgDur",
  "key17": "3DiJXxtv9CkTJbaF54Gf6UCckfWmkKAc82yPbtLhxuCXWmtfqYWfP5azQbr4Z4JFhQFSiUPHydcor7wtEkiLcMHT",
  "key18": "5eE4MpRZtVg9qEJhTAzgGaHVPAtUoapPCKxLsZvaTpJhHNLaQpRHzCMqaYPGfZKL4AuH7o83roUkafatorJ8Zg8Q",
  "key19": "2b4VVM7NrrVciPptdf6sr1V8mQy4X6D1fyByLUnnjHwE1QmeK4j2p6o7GLdYMByzPDgmxVVzFTN7CRaXeg8jD7HL",
  "key20": "4PgEa1g4gmdCK82BxHyWNoBwW62mFoe4e5dkJE4KWHNL1UYLUGZugx1ybz5PQXKUvxWejQkzyxewmuzFkNbby9NA",
  "key21": "3HB6qAxv5vQCdwTPxb7yKssTFyz5Gc63redsmKoBmFbTcsadpodRZjwtZnCo9bZEbitGvT5u2YaGE26wx4A41d3Y",
  "key22": "2w4HC8LKMixE1Fd4ZaRTYXWUn8AsDaXyZXfGnB4aaumbWuByZkvK3jbfoxvBHHKujjyzFXApDdWm35DeHeGY9Sd3",
  "key23": "64FBUJnbryUezrxFTjx298oXAoWFaA1VDTCQ3HQ93CMUBf3cevAi9oLGGXezmjExVfj7h4tCMzFtoakLyFjowMVL",
  "key24": "4eb49Hed2YBmvfvuTrC8VuokTPvu3CEssqTeqsaRdb3EoLd2GPqnLFQmk2hZcSxYGUTBgkufz1zsT1TzRM5jrWtH",
  "key25": "3bEsUUTn72Duw4D8NhQ8EGiQb6H7oQVN4A5w34vbbjjb8vce8oYoN9Rdq17Vjn28bfZeFByiCfxDy5u2umpmxV2G",
  "key26": "3FJGdvKr96TypQs2uArdhba6zVbFUD9wbmYvVh5o3qdbuYYfByjkC1uRoE77bgtCR9sszTdYhv3pcih9L49TdVAm"
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
