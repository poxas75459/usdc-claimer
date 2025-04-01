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
    "2i6AHTLxxAxw7EMbz1sX7fAqYr2XkDPJWpp3mE7pdXbKc9mzqGegiQCr6EHaS8wsYM8Da6zzzqXxom4QNrT1WosC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pXVjndu4KGC4MysbULx23ZsGX2UnVqmUxBiADYouzqUfwAaWn5ZhNDJexDJSWMm87AUwWZYzmzLUnfsUm7X872",
  "key1": "527oMja8bawWGz2aFJyHrwUyyikS9fachVPg5uBqm3KR8CdyHic9Trn1uC2X6bt1HsdpotY6LNk1xxdCzZxvuVFy",
  "key2": "xQ1rRqcMBi2RGrJK9h6NtxZ9Mjtkgou2LqAE972d8b42oPzxHfkKwCb3cHFTdJMxTTtic3B4tJn69Ht4GmZHd6V",
  "key3": "5ydDo8NFrTvynA8xE8vyuA977ghMFQqhRaaVooVyk9C7DqYDQa8FW6enmqwXaEAr3Y3hKuzxJmMdXnmeLSEdrjWY",
  "key4": "itu6xDL2EdtAGvcmphfqDwRXNzBUw2CDDhjzUhqXsLbzivQK3eVEJaViR7LpahxZJEcKLqnMAhJLT6PCjM7qv2B",
  "key5": "4Z9DQARgWay1rnE5bLMkmsKsrR9DXBQZhAFrLdRdZBvmREQgHZo568TzQiu7RgGcPwD6nR8jKtH3xA9Zb8ffzXzS",
  "key6": "33TFQct6M2LSnRrM48SQVfNyoDgP75GTdJA22aGFkxw8v4MTKjUwd7U1JzqpdyvAwh5oVQ6gCQpZhDiMrXBkQsCH",
  "key7": "n2G9gVjxV6WNd3nK6qg72X1aAs2MNmkGCXumt2qcAVeRmZDbBbfwngKToY6ubvg8tiFG232QL8feFQH6iypthcZ",
  "key8": "aFvqJaHrUthjQYPuBfnQprz1xzoWc4R8xnDL35E7LpVmNwkmohxzi8AsVRSigBSNnNbqgvPFx1yFXymC86xpT5r",
  "key9": "4Vf4HNUo7Xj3gELHcgdih4mQveGVZmMDH8DXgZV6M5FsvcdvSvwXyYCRyQWMXLpiAAWVYonDfwV6jkBVcXrfskFC",
  "key10": "qHraGDppj7UYQutKFNPD3zxBHGGFJwUyYH7h7JMsF2pthf98qbUdLYrJxXMUiUNDNp4WUFLe39hN9ABsUnDq5tt",
  "key11": "3diwv4ZF7WXDGSeDTqDfnokHQZmiwRGDPWrY9Jrwoc2waNA37ZEg8zQ48W8jsZYjK39SfKWz7SL8qASABqZBRdkw",
  "key12": "4UoT93d6HMpELqwggq9ZFNgfxoF7KzrHsUrU3phcV4kRfLTYT9KZdrREkPQPgxsfXJo71KtKeZdqad22FKqjPaCo",
  "key13": "4CMgaHkuU4tS34oV7X5DZtaBzFoY64UP2rBKDijbks6ct8YTgoWYBBvPVfLeN9JsWa566xC8dKD6MkoYh2NBRtEh",
  "key14": "LwBhGv8DPUa2zCNHTtJyirqgo9UEUcZW1DCpbahuBiQDC7ebm1PorxSq1oNFjr46kXGag6RMzoDjToSJ7qx1wni",
  "key15": "3L5t3vi75WcYi3a3jBeYhYC8AbD52Evp2dNHuM4ZMfiktYDP1xiwEU4qhGbyJq9LJ9ZStzch5j6nLNWhDtmXfNhd",
  "key16": "53JJgdYyELJYihQqUURvSVt9X7VvRPUX51KyY5Y9LWU25NZwRbuLmn4WnomUhzLTzkrd9xrPinxR78DsaNQx2ZNR",
  "key17": "58wAYfLcuBFJ9neu7e5nGBR2WVMmJurCYmUgqMDiKejEA7mPEibXKDZQzC5gJjMHL22hVdLhQkNAmTJzuZe3n6MD",
  "key18": "5GMLdxfyfReHfzFfGj3pcyejruEeBijYtJc57N9x6sbHdJRjauPpfXTWVQSS8TteA2Qujkaa8wchcVbZF5YKXajv",
  "key19": "2h7UUFzukgdfnS3Y8kApvuYN9eDJBA3nbEmtWL4LJMuKr3au5ciNgRyyUnFRQeYt33ufkuDJ8uBMqikwBrsFWTwf",
  "key20": "5DR82u1WxgcrV6U6R5XwakQyDsgFJ53WNgn7Lmwo7qg1kqZkeAMWk4bc5YBrDDDgoM9Wapb8EavYUjaQbFVZT7Wi",
  "key21": "4g7FrAbocQFLV2BpXiXTaT7zjxbrjjsjsVwvTgCowUh3npgviT2TkmLyaGVkASLnmo6tS12F2daHxhfbwKAYYoEf",
  "key22": "2P5ZsAUBwaB6vVhiYWSQGbQ5i45f6SE4SgmA8xHuQt3iMvohpvXrd62YjvaFYbGZEi7PRPAxm8nWVLHKWCniHvCM",
  "key23": "4KhG9Z45uiBCz8uVRzXV65RuCNsRQNhvDgaTomjqJx9yy7CnUfMpA8q3QYVBGFa5jJsNUF9VcoiLX1qdNFLqbazB",
  "key24": "5THegoWN3fpyJyKfEReVaKzdGDYyAa7mAAPMqvhttfa4w7nc1u93kkRZSW4TXAPc3mj2YEFgdQU1bGN1Liz6N77h",
  "key25": "5Lia1XHWU9mfT5J3zQMbLK2gw9emycGk5JtSpekSgprm4d6yAH3KueLGixchpWgqhuoQUnKcHW7L7rPHo28ostas",
  "key26": "3FcWWWXcYJPnoYSzJRWgSPrzu65Xn8HCLSXi8Nx2qh8TfuufjaB7VshFZsawvkd643WTdPGKzTiFafpSbK5sHGCc",
  "key27": "5QuLyWociDn6gTrfAAeuEQ2hNmgxdSAKL5ZTYPYrBp4vXvXpAZq6pRBFDE9Zr4Y52vqtXEg5zdcwYbBqznYtKfeB",
  "key28": "5F68d8Kf1gSvbiR5d6opYqjqdLJCEWqhh9xpvHFJ8XjDVxxDwJDDMMAX27dBCpy1hAAA55nWozjpHtpxtbU34Jbz",
  "key29": "2oPzU4wJaATdyJbLFcFwSuruWQwFYAwC79wb5RAj5sqqwQXffL9byv87XxeHKCSEnopmGr6APQEMiAERGAY7HXx5",
  "key30": "3t18mqcthTyXzWoemeVoWnu16dwYsQJaFnxBx284kZ72DMwgf1AEW2Y2kGMZLL2YQjjzGaeD9Dw5D5bJLnoZJqhR",
  "key31": "4N3hriBrJMj6bZAMvwrqXxqFLyUbinrEdPETtPutWQnVUk7gkpRV55yS5y33jSKJBSC9EwHYPxu3BDNaoouengtF",
  "key32": "5QsAaHLjGyNpx62TpfyfmVGbKYuzDx617xyvbqFG4xqrdLvPSwJz2jpx12kwJP4VoGeW9oMhFqDrSAEqdQGM5H7P",
  "key33": "5SeWpxXM9nbZ8Lmasa5y4hDY3FMAt8qqWjy1zWu87UDyh2AyHyjczRStcP2dpUN1C2vCNgbxWuH5tn4Jhp4nDZnE",
  "key34": "2bnzmmHAfWUhfnU5JmuBAspuV8Ncf3C3mrwjBeqALjYaGwHSEj2ocqqjPDfxi6TAjUrKKmJ9XJuzwkCAz7CkrQcQ",
  "key35": "4uKdzz2aVTc41MpZ68CL2a83WtFFFnY1q94tejjFYvGeVwB8qzpX7rLXEHUtseytZk1kddvWhfQ97AtwQj6AyQnD"
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
