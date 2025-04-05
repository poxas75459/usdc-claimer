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
    "2EQcug7P5mGa57ztFTWccybder1Q6bM7bMMaWH8RoCDd9T8sEudDxXAjJk7XceVkJuXWGuU1odbnRBDX66kEtMUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TAB99QV1gU2dW1GRtfmNAadcAmy6PgUTpdtGVG2BVNSnfqE5hNiNjWrBNJ6hjnBSkY57qBMsNf5XpvSbehzuvCL",
  "key1": "4NUiugMHNGLouichXTDsoSGny5fZ2mSxE1UP9djc8Ywma8j9TZWKZR8Kbr6C3Q7bjMHExJiPiCdWUr3ZZQUFyM8S",
  "key2": "3bBmMAhZNZdjv1Whsipku6VXFoG7ap81PyALksKjVZk1tYiU4hVRAoV4YcmxxEbkTJibgWXJs8AAYfSnLRuE1sRP",
  "key3": "5jgofMTU7PLnNAteEbNCASYfNkZvCrHRvNEQgLJ5tiT6q9Hhzis1JiyC19vWfC6QC1vcqanf19hatBbguzv3Bbip",
  "key4": "2zC1xiNdKRtr5e9819h1Sv1xom6YhhUDfBRALQEYePYhrX2KhT3XJCfgsd2L2xrmy4axbe3b2AmJgtkYfvgyXsoE",
  "key5": "3oUWAb2fzuRavSP1jzubh5eM5EUPWhwiQVt4WPCTwtYhhRdT4xwYubRPY2DY7mN16EvDz2BkHTy2FVSJLZzRCFZK",
  "key6": "33y5THVYs53YseMbgP7aqrpGWZdc9kR9BTqGdBk2mZcXqnni1L4VQX1HdJx5LcDxr3gr6UXaEpKnRx3J9SAwu3TH",
  "key7": "27UR1LBTaFqKKNR3vmkQ1zcasyUTUNPBXLBV2LbQ4mndCnpwoPkrhqvRaS86AdqowNojAxvhRipusSophR2S3Lwy",
  "key8": "34DY8nwcghX6YQ9vnT7c7vUFCGBzDSXT6tznZNyVKcoPEvf7k61EqpiLzFo75VLBX38YwXPEWV8wbGjhkoRi7u4p",
  "key9": "3NnE8mLdndbxC3ns1MsBsu1NS9wx7AKb515q2DNsourZxYdkVB6s1e6YWeLYVznMCFb6k1Btgw7P36fqmEd7ZJM4",
  "key10": "5MrTpqxBLBRn315ZdNNhSRVXJhJC2N9GLxpDBhdeBHaqTnboUGzRqXVHSLs9hboBu2XgzyG7xDUPon4M4B5iZuaM",
  "key11": "4H8F1Xr9jMQGms6SJZMSwPJpz37eF8xfPwp5Fb8WhZ5s2Wy1MwjAWSL7G2xSTVbesDuWC7ZdbiWTBpH4PpaefpiS",
  "key12": "NqMAaGcbTudcmKbk88tijz9HvzJA8CSxZRP5WgFZQJf5dBiEjm5kAnk88o7eWZZNDPGnaTNv3SAj1bXtuLE7ecR",
  "key13": "28pMEVVbeDwPbb6a4b3DdDdY23VrVrVEHZFHSYwG2enbSspxTY5fbzsgpswpZN1ahTVH1B5BQA8BVoJ5v8dhsFC1",
  "key14": "24XYRBvp8Niv8fHMuppVftcEi8nXc4cn3hF4MtsSy3NrPAcusMf9aHri5s8G1x2sEgH1pE6VZ9fUDV9McUQNoMmb",
  "key15": "5s5yudCLx56qisCYtnWQajXB65dX5u4YAqwQRRszaFBRUk4DxSNesVa7L7jkYvVokdFbXRN7HjrocDPeBNtMry47",
  "key16": "5LPXAhwVHmrmkDphSRqpbN6LmgTK9oVUhAS3sGR1cFBV1cNJ89tG9irNZ3isCmbXQDDobpxbqkSKrgdYeceF5cby",
  "key17": "V3cwE1Jv6fHtL1V1RKtZPNEzAX4P98pHUcdDeksCoZaFWvoH3Y47qtP7QCpSXveWo75KarzyApjGRFAmMrtxkt1",
  "key18": "Wx8jmiknczz5gPftnMxB2q8fsdjt3uYigXoSoKA9VEJucBN54suhdrswtwmWHQbXyArbSQp6kcEdcacHzhsqpJg",
  "key19": "xmSombbCmMPCfKt7bzXA7PQPehEA7p6YVA1FHosm4TaKvqjXxLX33657WhRqw84UWaW3Aeq7bXErEjUeog6UjCa",
  "key20": "2uFP5SGxXVRaZgMnMEBZikP6ZSihHza56ZRkmxYy6WxwoEkT3CDpGEspB8Ha3Sb9A6JPC36XMWov6TXM16ERccgG",
  "key21": "57ajdrHEF8nFmraxKcL2MZwNEn6sDcqxidGpoj88BoFUAQso63SLbm4CvXCnQEjcH7f8cYiXeKA9RSmuTfR9BcfT",
  "key22": "3HmY9qrvcoUcTo5AMUBrfUwD2STHxNAPXJaUgcYys4LRCaxacgyJwqMsvHL2JDN42R1WoJVbPvxPBLu5v9jDC8aT",
  "key23": "4btrYMeofow1JLTZzCQPEcPtscXRP4JTvaE1AeNScAtPHFAWTQ9CjbPMWhP8xz1yHkJQdx9CVfDFrpqtsRDD7CFt",
  "key24": "4pmcEG3NmYYTG7iknNeyVJFtfW1F42wSNK6KQwPZUe5F6xU5zUJiEyKnF7r6TBbgR4ZHjciLB7UUK4mrFvwERsgJ",
  "key25": "gYERmzdxirGh45JaUEVPjbxWZ2XXyMkUERZ9VAPPMVJfGd3VhpQPUVz4xSJ4WJbPfxeQpUV38mGnTuP9gvCUy41",
  "key26": "4acPidMdA7NABum1zwjRT5WVVn5ebnYKKP4w1TJv2hWC3Y1kju9vNeaB3BHdBL1GZXXbAYSUmaGgU66wAoR1o6c3",
  "key27": "tecfknmtXUunjupYvXksFyyYS5PSYiPsXPs7HQUFn7oPHqi4vKF125TB4nvLdzJJYkFZBUotT5Ttn2VTtTERFXW",
  "key28": "57jqnhQNKZCYNdH7YrJGjYLSrJLSL74KSd4mryo9QtxAinFC5zLopAQqYoRmGWiGw6iqaFyqBaYP2WPQwCbkaKir",
  "key29": "5vZ9k7RvQrr5DArWBULiaAcQFpxPHG64hevfrHZm3tNYPXdkGHGzc8sHQfk2s1NKikrBc6xhULy5FRjxEYtrBG56",
  "key30": "4ntTQ9qTBXQLmELrWnKEssdvypFvJj2XDBfMVD6vmBLCFa8t9iZZ5Jja71FkLx2Hc34t4m9Pqi4Fw5yGxdHbmQwG",
  "key31": "a5iobBdVoL29L68RTqnAcrcCWwiCeQkrBh6pXeMkajpZYDEgXKdHEwwm6VSTN9QzPVVGDRfth8vsMbULsYRgB1b",
  "key32": "KsiaAETWsU6mJgqP3bnTcqydKs25P37qGscaxEnzYMfcqKYARZ9M8cpBmys4tYJgoqhXZEUQ7ersEFCzAi5Uy8G",
  "key33": "5g9rZLgTmeD78RLpZFhY7fhtVfo3sLJ23U3cetSVC7RhRRCdVzjPuTw9uRWMbLkxo5iZ6iHh63BF24ihozQjmGPT",
  "key34": "2KmyULsX8VXgbmSq22dkBccUNVEBn4h97uZyMUW3kYZ6sh2dPSXdYnMD1xL5pmPzWa9fjaJA4XKJP1VVi14iews5",
  "key35": "57y29TWcsRzuToYHcbPbf3oZvcsReFUc3ihMukZabMPpgjV8vQk2v69yMwShzr23VHbxDe2SJPArxuAJJTm3qfG",
  "key36": "59NqJkXmYsgo1jFNGVSYbPMdYPMQxQMN5Z7StjLfsCmBqunZrbdZc5Wu5HnZTSKG8UXcZ5Fh9n557kRQaAtoTwSS",
  "key37": "5T6gpQ9VPa9YWafEfkfmUX4wd1LbB72Wb74KsPZEK3c7R1kMPYjhX1Wdts2dEBFudhvNAnW95AbsDxnJx4qvCheX"
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
