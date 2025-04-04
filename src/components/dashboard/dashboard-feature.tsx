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
    "4gnDwsu9aP8HsKzLq7S4yU2YPAe87astvf8FtvCckgfZQ4cr2D96TLrQRVTEnnPioNq2z6RzpN1zuWTV2fD4zAW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42u6EMBUub7Qbqc2kx9wGX6xeJKcrd6h474UEJaGKwehbNYteQSPMTbpev68RzjKfiLfeG8qzMEcZm8yjEb8Mgfa",
  "key1": "bCze1JqcXEPT3c3HcfpKPwSFjtwCdCLzTYDMnnzUMNauA4hfTCEAzASFGdf4AyVwr8hM2fNAQ52oE8gpdmkLPKs",
  "key2": "348hhoe6ceXrSUDSFKD33vLDcmLFeJpA51qQhcGSV5nC8c5hq8mmLaA2T2fSBK8uxLX3kURrEX28CjLoFQZksdGG",
  "key3": "TrZ7u5YiRokokEgVtS25f7benu2u5SCA6nFeWQmXQDBB5nuTPFTZ5ZaRnZUm6yUJq968CEjzjexEr41wL22zk41",
  "key4": "5YShGsF2RfEUn71uLJwG4YYvhDnvdpjKufTYehQmezsD5s1WUyk2NB3fQedPpruYppchkKXdcLnCjdk3G7DLZ3XY",
  "key5": "2mdDELevHuif6K4oFZwxVUBkmKUeoSCoRay7y9geF4HAyikwoHbqDrNQJUXMXY3SBTU2mbhFSAsaCz2mv6wPht13",
  "key6": "3qiEaVtgEnM75tBc1mn15DkxyDGzfpaQZuzmssNsNb2tFDAhR6v8UtRJXorpkGhBQzBZjUvyWS16jN2V9UrWbSdR",
  "key7": "2M4k2YbDcrrAK18igHdys78T9VC68PkM3MucZsiXVFo66H1o6QhxtbA6rY59ma2KrWNyb5qPqNMMjEi62LLCVEES",
  "key8": "5b8uni5oQq2cn7w5jyBrZtfjDKq55NQWWCcweocAk6KGY3bmDiM238RfasCJQxba3mC2PrMpLhxUYs8dDMMLDtWm",
  "key9": "4nd3VL1XjqADjzYffrAFA5nw6BYNkXRMCP9PpLjDduHoWLnSTx42qXLZYQ6VekhEw3J7tUsuBUHtG98CvCed749r",
  "key10": "2nXqgbEe7SH9JZJZt6uY6DoEjv5X2vP5be32utioweGwZzcUDicSXaK4inev2BZi7uy96m7vP5js1MsrnVFXKeD4",
  "key11": "63AeakEFCWkVb3Wzx8mLRQ1GPd8tGfaJryyJSPctexDHqVQZMwwWsJwsGKccaGnqZvXga8e822wBTSJfSL6cUkUV",
  "key12": "4MdUcDuUMhxPHFDT6FYge55JbeyLgnaJTyabxKwc8aTcFANP6w4dn2SQyPtRiJ8NeApte6ECWWA86LtEyxYSNmYB",
  "key13": "2SNuJpbuPGzcroSQ33zh9LMvKcSLno8QAE6trtoiHq4u8kUc31A6mqTUFNQqMheLdkn5NM9GZzDPjuYys6gjcVdK",
  "key14": "5qEcm2x31eWyUJdErkH3LRVwFZ7dkHvS2ZPmQcdSMnPtecQMoc14j2FWgconTjV2ZGoFHbYn8DnrSGMfZJ8bMkU4",
  "key15": "XMQNcLk2fgB2Jj8dKcRqyH4h5JKYJ6QZFcvAQADx9ouk9DH4FX6eo45oELP7JoHAxDqgE1jvTekQfiGWVfTfzB4",
  "key16": "4dEc7WTbW2v1JT6pNtuciFi6NS6KWZTchPNcGKUiBNVhToWvDURLemdnztVAv1Xyy8uAhU9RFp8enhuPxNF1svhn",
  "key17": "vX9jDhH4sAVmBZXe23WkU3NJQpjhidWF7bUq67ssdWPYH8AtjDwZe7wQpFgSJrSFdTHKVU56DUs4vPJV5MEzAnY",
  "key18": "5s1yAbANjZYZU4Ye8F7ZcPdCtbbCoR8Pd337RBBY3qSY4rzzcjRv5ESKCX7B9k4jvz5b7GHxYLCt6PB1BBLHkkrK",
  "key19": "jJ48gvn6r4njzguRe8wNHaFp32hDpUx66y1N9ntsEAkptJjTGL5Cn9ean4yKfEvQn1h1MUqB9Lf71r25PMiz4Qf",
  "key20": "P1eVXf6B5seKiFFvyXtB7TswFPCseJb54u7fvXxXtxfPJXwyWem8oBGqEZvpY4mihDLT31HixivhaZN9nG1gyKy",
  "key21": "3G1T4YvYXGvgM9gAfvUMBztU4A9pSZ7HoFSddZAEMc2ABPbobkRajQSnrNA9UWVULJQbWrxaGT4soySrFpoF9w7Y",
  "key22": "5Z7bxct9aC5PtfptVoPtQrTWpYFjXMkbXvJ8NGfNRqhLZ9TYqqUpW7hvp2U9uup8VUFNeqBHJxwXAy6x6KwL8zcL",
  "key23": "rL9FPXVwkYekh15STW5EJYDT8VUME3ZZJmGHGY6YaQyN5g3SMENxFqSLVem9G8oASKXj15TvpPLAJ3a78SnnpZA",
  "key24": "3P87sRrQXiBR5qDy5pr4bdZQhQqDic2iUC4XyGx61EQxKQmAfTbMcojhQ537KFTHf4rEbFeeZBaQP6ZQGtLdqUpa",
  "key25": "5prE3HH3N1kXenv1Fmwy7Lmbz1hCqxSFuisTTNaJ8S6nAAWFpk8FGgMT22gnFvRSq1vZShJKPDwABLVWC9wKkKq4",
  "key26": "5xcxotqmUUZfkFbkvzsFQCHDvaUxdQwPXmPX2Lp3BVoQSeoYPFYALY42RhR4qKRihets2UwVXJqyYNYxWi3ECTGb",
  "key27": "2YHtPfdPCsdnNstyiXU47GuoceFQyecTgYxHHVu4CXuuZ4mSc1hqCZCfM7ETYnwpWLuncaTNu1T6VnbPPeZaczV1",
  "key28": "24PLjQ9uSpqf9NxGTSFXvgMkPJvhRnXwNmMgjscsVtfYvFjqwLWZWSF8pG1PQZeNZT7Y9PS9pzLPB5HF67EATeX4",
  "key29": "4gv4BraBqpFfJzrqRihLN4mTiL4Bq5sncBcqdq2QZWsTtz18jqX7FvumhcZTc1hCVuERaPMb8FmS5DfVe7j5hBRk",
  "key30": "T4PBBvhLRg9Mi6b4gKC6o3Fq1qCE29TbkUEX9K7Nhes8RBhgqeKxegWERNHFEnetHK1E7hF4f4YGnq4Bwo2mC8V",
  "key31": "2YNiNDphV9pgfxWwQ3471A3tFJrpKiis3SLx7QHkH66ZFAVFuQPJ6dbSDBQCFGU2TFcLf7pkEGVxF7MnmtDPdBhv",
  "key32": "5sw8xKEuV6GMTLVaHXp9KFWPVKkSYMN1dHDTkzdUFUB69LrRqG6hqtyt1nbX4W9kaZr1WYaC3DgctcuMiE3CCYgr",
  "key33": "2pZ8cLEJ9Lf8DuWgUWU4iCxPg6RziZws9HDSc6vU8ramQDdHz5iUgpQ8j8Tp7CXEqKthzmSLoj8ZgpSWQ4CMcHpb",
  "key34": "5Z6S2DNgXWegznAkDZdr7yf13vRrWfSzvfgRBCun16s1zbJnZiLAC8xdhqMoybTsvtUtQjjsV7dKhkr6w2YJHLfX",
  "key35": "kWVaWyGrQ8kfu5LqkBTcH1UvQdqhHsJhkrViDgawVJfH3nSybcegvmXUpgroMPR6bUX9DSS9uBL2ePCtjK38u5E",
  "key36": "2g7GzrB9z7QwUVSdfEBJdcn8qcihGnNDrjRzQhKh4GSViRaELgLDFHtFVPK8QHrvNj1cPhBWMDMoH82xbKYQqQ6R",
  "key37": "2jh5bxRDdb58U1XUw4toGdXrkQXwpVHQM8P3eBEeL9CxFbAs7yPMTCziAivyjvSTFZ63hQcPziV3QJc8fuHgzup7",
  "key38": "2RDh4ZJbkWcQRpYS5YV34G3BSVhBhWJZa4MQWM9zosuKoT4nbuD3pPg2ixU2gMG31TAKqJkLEGCFQzQGGs2b4gap",
  "key39": "4YjnVKX75ALmfLkbWPzmusoCUtkB95Jr72dD9fyRYMLTCtjYdZno3ZYVXCm1tNjLK8jnvDLTEK4zKdx3sQ7WigQo",
  "key40": "2qTDXmDDw1CFnd4nue3fY6dGxkwj3fbsCkfSxQVJ9xQPL1obP4BuArwiJSG89BBBFkBfoMR9f3Jz6q2hJr2fs7cG",
  "key41": "3gfRGKjNdfK5R1GbEdGMDS7qYLukBPk1Xj4D7aemp6zQvBtxu4MAXownVHar1B1H3NEsChxpMEwEv8SkFv3iXtdo",
  "key42": "31qj4AwGfhaUofkdhm18YB59QBbr3hbowBqt8CukGkLEaKoxMBFEUDFE1eGac2W9jkTMp1Zh3zVsgJNb8h52hUa5",
  "key43": "b8DnBzYRguVrUES8mEH3rRriJpa1GrKX9tvgc8cptZe6mvrPwdRU6a33XCw8v5NWX7R76Sv5wyZ5hZqUKPUPATz",
  "key44": "5ioApqkUG3PQ7MBfWyng3rzDRteBjVTQkMuXrHApz5DQWtQKtvKEYYuG9YrreE1CKfjQiQU6wM3xJTeBv8cMYy8D",
  "key45": "3heEo2YN71DS8qZ4WM79PKA84E6bo81nhz4vzWLFpCCHdQTwgE4xHhFxnDZNkq7g89cKAmgEz7TNPhtQTYf7gxnS"
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
