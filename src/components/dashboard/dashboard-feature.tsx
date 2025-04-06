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
    "4FLgnbw4UrQ2va1sZZGGj4bod3ARESHfYvsNmZtpYdguqgZETNymzXtC4tfak9BoQEDGizKd8B2CAjKeC1DaNc7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "591FgXyn1dyx3JHmMTKYooW26FXm5y4JZrcsngriMyHg21LnhAL4qPe1EUjHy3cQq1nk2NaPk1atWJ9r8ENFh3t1",
  "key1": "4yqqjmd4BRLUSNZ5HrbUUvqqG3be8mn3MriUGstqzu6ekrrVuKsx1oT1vGjHpkr6zSJitqNEiEwYqym1HxtfmhT7",
  "key2": "8Mfrt1z4BpeD2sYxqLgF9Kfy9bsAasjnHPDcJcgJXx6EdXmrPsfBbNPk1ihe3ZymE9yoiUuyoBqEnVZvsLwUe4a",
  "key3": "2Lq9fFJnopxF98ypP8L25RSEf1vTVRuLQ4YmnoNGTKHxns3jNvXhNZeXjqvXdwQN2nfRdzxgQFA395oo2rEuirEU",
  "key4": "4V8QGzTNZfCHp58mqC6p1BaHvfKqwYA6fLy4QMAW1pw9foUu61VjnnarbQ2hLKa8dBn5rp1rqKnZVAGsgmap88CP",
  "key5": "2skuSZ4h3cnkyGhGcK6CQhNoGy9bXfWZ5FrezbDN5DN8MBZ4wyABD3jvgtVsZmn9sooRUpgpjh4Cn5QhCtP6Vreu",
  "key6": "3UoZBTkbo3mn2y18Cx4RHSVUFeeHw4MKG3NzQ1pt9zu9Md3FmZcynr4DGAyGVvp92sMZgGJze49gFrTbbjTe4qUJ",
  "key7": "CPwvbmZWw6PWT6mG9yXQn7uXyMDPJ3PiRV8bXJUk7jtttZDbDsATrwKN5i526eA9pbTDMb6reUfLrKLHSSHWypg",
  "key8": "PRiaf4ZVEKBVkWcGHCdWAz7p7mH6L1L4x85L5YrKCM4d4y8vPpzgHfWShVUYue8Vu6M6y6LzRpRifozRcJvQz1x",
  "key9": "2GTigHwmwBQ3YCd81zRDVekttZJj3mkLQi5WkMXWgXMQR4z7vrtzvPkL2AFqs49MfpanBbwP5Umf9rQr4F5ifKhk",
  "key10": "3jqsFxg6D1vcWZZyF3jBVVCEsW8oWc5oVEb1fEwcp9B3Jg9p6TzsbqR7T7Nuw6WyJ4yJ21AvEcMDoyGYtZQJVcXH",
  "key11": "4EM2fDGaiPpPPPr496YQtb1P8UttzdKoMSEgz7knyugLfD9dpBXp6NgPPYVjSpgf3cEhsfBJq1mu7rdhuQJhbW8k",
  "key12": "4ceQZFZ8kmBS2guJrdmPrGyFYmFW9DrRY8PrYUfoHtWVCKc1CwMF2TL5RaMuTJRc93torFWL48PtgT1Hg4zw9Agd",
  "key13": "fAUBpkAvx8pF2RUEVWnEt3PFWD3QeivFRn9WnApWq8gsSqyWuZHuXZ5R5Ttoe8jUxvtXCki1aCXuyCUTKQHA5PM",
  "key14": "nNj8CQghMc6DHd1i6HJEomJzkGqFvTJTejTUGcU1HUNaDj3HhyBPCv3cVcGQ2owEZbnRwUysg194tZMFyyJzfCw",
  "key15": "4Ho2xcJbxkqUWDkpPgfCCGhaJpXDS6Jpx1QjBohZyQbNQuAx7fYPYxKX62iPcbKstDgkRE6TezeX9kR7EKDiHFgQ",
  "key16": "674k9rdN8gQ8rMzrv8ny7BffnNJFVSnF7SCGrXU81ozmm2r9FcGSzS4YsZqQL25PFxZ8W6RWsgdgJeA9Scg2jM81",
  "key17": "2fidTF31tV3dZ6XhFT43ikHzYMHyLw9pAPRWY8NU7hqjSabC9DZLy2x6PocvfyS33EFT9VqryCe5DibMAMBF6UTi",
  "key18": "ABRa6XuD5H59pEX4vcvgbKY1Wa5rZroRpqig2YfWzrpNVczptrfC1QphFTMfxAy4Rt5B3o9xujcZyjKt9tR2d2D",
  "key19": "4MYj1oCbQHBz2EuUdE7HAqUyTzy9iLvKBEkyRafFfURzqBFhaF9BwDMUkAnkHcf1AbErXb1gUPfXbxNH9xQG6yae",
  "key20": "5qdX8LYeUpJscWHTq8xSBqLb5s2KZq2yhnMVnyPdyuE1Yc5zYjAy7ePY5GhK3FBw8atJ44d4N1vVGy3XxxdWhL3z",
  "key21": "Vb9XYWUe5sEWqFaeKNUen2e85wtwm4qJdxJvAst2PMKDUupc1UfdrzhRygMrKS9JzTGMXEE8T18DyxhERWvUcKM",
  "key22": "3HXUYz1ZZk72FrBcsK4BKztTrfSPLVJq85SqJHAw3gdPVfjUEiuZpAmiof8YMXEca3KAdAQEUgi5b2UPs41n412Q",
  "key23": "4ydRQUbHLZVxxC7fYWCFjv6ueCNVwfBTwG3vCk6qy1iXLHa7apnUNibDgiCETmoS26wwrTErL9mMijfqbk9D6MtX",
  "key24": "tAQDEZ5vmjRUHrn1FwrcVMkrJveiYsxu56uzg4KYxP4bdVYawZHHihpZGWcD54KfRtEFy7VSwgqL3CPjsSzNgM4",
  "key25": "4i7CecJrjfZfixnho8nQh4ESc8dAqu44k58Kt3QTNi1qpF6JAdP2w6gjCvHvdx4WEhkMzPZWkNKbX5kcTSGeDgxn",
  "key26": "3Hem6XooZfiBKMh434YLnpog5T88dr7k1QUkCQk1yQPyo3CgZh6GNsiTiwCjJbuokrxVBYDd6TWXKjWFHjA91C34",
  "key27": "4hpoYbsF1VZPh2RguyLf7cWMizfgc86U2mLXqm31xeB2Xy8G2am3Xj7BF1RMjXocY9ENnRSFo3C9LvHwvbPu764U",
  "key28": "5CeSWNpNxgfJ2hYATtVhYnUB95Eebrybkc5ds6nCYwBEYVP7uk54K8iApirsbZhgxRo9PHu3HZJv4SBm1R2RikD",
  "key29": "LhTTS3pKaGBBNBPbAM6aB8kmgmUSpzo273WXPAUVJV2N99sEYczbQ6vbAAD3X6FfN5tWi38KM4eGQj7B6imnNJt",
  "key30": "yiw8am1PhRZJSJCuEEJGMWNSPQEq9jAA3rjpBZLDzq1DSv3wEk4cF1thTTjNyzT1r6CYCMR5cHodLDZdwWxQaSW",
  "key31": "22bVh4iV1WexZVuzKGrcZxmBLJn5NgWFmAXh7VTBvQ7o9n9WA7whuA6wBXWB5tiXPJxUd98APzVBGsoLzGcqPPjS",
  "key32": "3xLd4f9xhZpmZVtCj7FGB8jQq1BSntF5cM6SSNLfU4qTtgWYVGJYpEK1yXLLTqbr7VpyhtSPECTJhcCJMk7SSs8s",
  "key33": "2toFw9QiJU22nTxP8LhpjoLQduQe4T6WB9zS15rgrgJtQk25WpXTQH5r2yoKBdhR4PRvDRY6EJLh7daPRQXt1Hx9",
  "key34": "4LjNqZVCvQj1nEkeZL8s1x76CPqawShM9NboPk2Mn2RRgaBkdpKbXzM51vnt9STMuYHvX1PbQKniAj1h6SzWcVWP",
  "key35": "4Dr6hT7GPJuacSmfKhjuY5f99jxCJDRKLAssaLUJajnoAu2TbQ7Rcg2v4QZk2A4M144gTEW8UCTyPtyYcs5XuUso",
  "key36": "3PttdMGPfrESQeXbQunJRxwu5bswAsCkWbzz7g4Q68UeMPpoR16KJK3CvbT4bftbZ9zGkVYiQbQ2JSA61zcitpYG",
  "key37": "24UFiC6LZiS3wJTnu1YPDhcMZPEazZoYyUh1FdnMcw9QN8zSqe3rbSAYA6jUZuyuBdASMVxhJyT6SadYLo83tdYX",
  "key38": "5Nn4oAVAika1naryosecL5gZBke1zLDYB22WvCcnxdjSXLxeUTeJJodJJPfS76RsduTCGMsEEvtSnSwVkCUw5wJa",
  "key39": "5Uhupxus9VnZcisQXWR38TNX4vGhaeNjT6LewXKgoTzuBM9JEkpGtpuC2DdMf537vEcGyAwgSu7HcNDaRK9HuCEt",
  "key40": "4ozU8bZc5tWBtRxyrSDDKyqVQdnB8tAhPeKptgNs3sZ5LLhw53WhcV49HYVKAmf6LPHTPscs3ywKPs7EuJwrCNAP",
  "key41": "375p8yteZfwgttbt8Uw3Vj36kRk9XBedn31nYz5hNRTSHHfWETacXKoW9YMsva6MZwNuWvHzuuP534UYpaagMeYW",
  "key42": "5MzjFRDQL48yvTP2gg3nJR5RbUjXM2kAUHqQ8gW8U9CB6j1t3DPVFhHAECGEZEnR5nVRZPEiNvZRWbSXYPPwc55y",
  "key43": "5NfpHo6y4e9giMNkLCVGs243Rcpms3ADFEsLr9hvWhLAfNJRSFx28AEhcFMFdERhAVxS51K6FpE3bq3M9hCTEUVA"
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
