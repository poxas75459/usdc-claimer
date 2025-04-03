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
    "5BHw4Vh6GKyPfoqrWm68n3SjQKTuX9whsULWBR4k37eT5gDj5dHAAJBipmM7ZFHEbU5iDxSfCuNmxPNjPAU5nj75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDeBmWQrkS9CFXHDajaXJrdv9qQHnmAQgX9xrWrGzqTPe1PWCA7Km7FzDEQvzNyGvrKCJxakEDnGqDadBX4MCx6",
  "key1": "5peUnQ4S5S47AATY5HJUYUqpTbtVYKdh351nANFv8351PkhbVKDj4pFJaZg28mgYUa3bM2otJAz5EpBqtaXLSh3R",
  "key2": "2YFVosyrHaoXCon4Zshog1aa3A9HC6arAXTSePxiD61Ls3mtPtXkDyayXGE3WJycsBd76xa9Js8t79DpqEfwKgmU",
  "key3": "5q7MKHKQ7xJK8WHEfnvxydfGMsFTuxP5SVxJ8gB71udfye622nHw8HsVC1KfHocpN3ogbDr1mcmncivTeMmV1MsL",
  "key4": "2Fi1Y4eTxNnyA32EUgkMr7tSnRXQx5E4aeeK88o5cZYNBNwDXJG7P7TFCc7YYswcyGfVYNfsMMj9jfzLHbfS7meH",
  "key5": "2RY6AM5DcMBGRYBLoWU1sNfGMMs8NbzsCNqdZyTBopLbTdLccvfw4dc4CmiPWJRxwouPdpoCovR9M7m66AfaPGkt",
  "key6": "4mMvQbY4JxYXVEas1XCmWZrFnqdQyyHQJCuNL4YQjD4F6gsbQ5TZ1xtRrHwQHbWvrjpM9cyci7avY5GZ91Kuws44",
  "key7": "z4C2ML2RVAiMXEMoLLz86EbCeZw2ApyCM4iDhtiDWaGGTs3zNZNChVPB2yeQQE5bpcftJNkNehwB4EywDVvvpSn",
  "key8": "34cPqAUsp9h9737YyZTttcjfAhzRhCUzDszkiUyJxjV5MQMdQDyVikwTYygH94XZjiFqGoUcsVFDFbxLBUkHMcJV",
  "key9": "4SKXYpd7GthsGBzcjdcK5NLBMrw2RJfffxrx5nbgMhWGzgsdYAwM3VUenXN7tbggewmqFLFp9vMAJ5xVG8SLsNdk",
  "key10": "2obXDpjVa8Fycr8szU6Y2cNhGpgZ8R4owH6aKVBkjnYSLW2F8VgChH7rzmvkMSbSeUYb5uPacHaMtTx7khuVEFNm",
  "key11": "4kGPDGjiBFo9xpjbSFSZ9H7Q4wACg3ev6eZVPSizezwYbqza6muJqAX6nLFB147Zz8JhwTMLWpLcPnacJnwiLdFZ",
  "key12": "4ySJAVPLfF8ZDS6iMPePsFBaagRoWkNARKrwMit8sRbm2bnrE28Lu24q3BwQ3qcTgXA8tSRbxNxSwHYwXCwBbvTo",
  "key13": "3DYKSUTCjM7RUqcrAscnGtceemXJBsQRPhRZ8qGm5Qz6T3M6qo3KzyNgYgMRGyYWniNJoQRQs2JiveDyRGaiJRAS",
  "key14": "4Vv99XfFjSq7bPM5VCujg4fjtiqu8cW3pRQ6Qd5cdp7xJjQa2tMU8WdkH4kxKb9ayASZLjPevfjCwjKD5RSuccUp",
  "key15": "AFaAf1fTf2VudcL14dUs7e6rGbEj9GAvapA196wFymY3sP3vPg2P7F2JQd8yJ7PzA7SaQyVQy72E17UfUQd3LD7",
  "key16": "3crZEHt9tWGr1stP7NiBpRed3hHFXuq8Y3UUfBKGXdfQdunPwqDqnxxBgs4nWfbYNnEYgEpYKQFtjVj3BsqztdiT",
  "key17": "KsQ2KfjcvqGrBxybh5CCmiRRmc6cVgZ8QbsG7s3mbRq2hpToz9YTYUKsNH3ixVPGuxpAarvyMmbdqGtzXQ2fixw",
  "key18": "5mBkV64y83ZJrKJBp86LheozHQqzR7rQTRXz97UoCwhuktwUi18C19MU395ydVbB6ngJ4aWpLXTcC9dwHRBBpaMB",
  "key19": "5qxuSLUCgjEubC7zPivKcHwQYeX6Du6UXbokZvXZ2ztVUY2CuuedUnj5sHR3oEXhbXJqKUMiZAV55pDnRs784pgf",
  "key20": "2vtKi9xXGpw96UmznD6FRi6KiWrGa8ZLBQcgfQai5ip8eB1fQFvVkgH1FaMuXC71sTQywgkxWekPjC1L2SoBwe6v",
  "key21": "2x3zXhrPUFTffDVtxp2Avno1ZqRfiegUojakQ1BKFktD3wP6DPg3ztY6TvcasjmWdYKnncbtyEc97nHyQYrsjVqM",
  "key22": "2SdTnJTo8ba3wvqCQDq46rJDGmCKL96VQy2Neyrnzc7Xz15qwnPtporpcYoV3Rsch4fjX1KkSmJ1Bxwv5wmFEhRh",
  "key23": "4CsHT5JhrSZ1opF3iYbR6N3SND6xajTNtrmPuCWF7tSvVcgThrhRpRKBJBRM6SYfGcav8uUNSoR2X4ejrmi7h48U",
  "key24": "4zNhDcGsXaZTYP8vwGuFFVj2k76updCzGSv9zLizUzuQk768FAgjeDhTpkdvoAAyvRaM6gZjhby1ThgUiyNVUPMN",
  "key25": "4tnV1SkWjZTJd6dKuRrQZ9mKuzY2qDAzQWPYyhYxJWKVf3EnT8CzfUvRNDCaDHzkoyqqvopS61KsPUTUSx33PFKZ",
  "key26": "2fizkLysZiTNHUjkYziQah1e6CZHKmL8DMz9Bk2xUv7HY2xyK7E7cRAS6EyjESarfJWioHYrStkJkfYFm1imjb9s",
  "key27": "5R54XmLqKNTK63gDxNSHsm9zwUmJJDfhn59FeRna5YETUQzzkyxJa7uBEr6NP7sC38s8d2oEZihaqVEF3qx1QZVJ",
  "key28": "3HYWcZL6WNJ7Rhk5otNgGhhDFbYBGQANL1cNiW8LFGtyN1dHJUaRnvRmK8WVCnTyLJwi38Nky7FBrWBp6ozz79UE",
  "key29": "ViDLMXuWEJdrxtDcBNsHoJEgf2ZyTTR84uBULs5aCyAqrFyS6Zzy7poS8oLDc2uzhXAgznT9fAX4eBcqFTi4x2i",
  "key30": "469VCTAewKhNotK6D5M2Mv4tLSegq6Y8iLAmWe93jnkPQEJzMUP3RtHVt8raJfQLfP3JTj3TXsYLRDhgRp7CsNac"
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
