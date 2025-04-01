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
    "2cbF5tZCuafTMAKC8NBWAcpnebjUGxV6M5nFaLTDasch3XNDcDjzATfoqBKmjKiMoTk2sK889omtoEuVQGVusae7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpgd1Xj263ooqmejzzBLX5morBTwKemBaYYQwpH5tRB9eMfDHK5sEqZ6kxvT4voGdXsdXdyFQBWraqChM2xUWcX",
  "key1": "3msEu2KvrP6ebS2GC9Vrs6wv5SV9ZhYkUPrs17PymspszmvsbRcMazdmLvshNPpZw2UqxmsiMAMSgen2NcXUuEdH",
  "key2": "4j4iTaWu7kHRYCwMNMSGMbVDXTjn3kEvKpAA72aDUWzWrQpdZhVutNJ6admnP7f4H8EPzi5j42CH69hCxsRssBMK",
  "key3": "JaSzoRr3rmPaSDc7cwsMTQWFgJLrxCFdbbRSF4g4Cyx7rxGLUz9jQfgAbNjsGXz26SZ891SC3hQ2cbDiDbDBrqM",
  "key4": "Djh1a68mDUiqj8aeY8eiUndPhNvurrRcG4tX5Zawx3F2UwsjBsLMqXAQr2ytwWtTxMSjwZGm8FLn9DGvF3HyEPK",
  "key5": "33A7RvivWLrSKrLz563nHVfyWsxGWAKPxSLC6Gi6rbzBgjMkp65RosSs888Xgtikdan1v3Y3Fs5SXUH6zCRUmcHq",
  "key6": "5Uutu6bHu9ZfqRoZowNWyRqxbSaRyD2uC6jdqTEH52BmjQW1DnJ6oviqvSLRmmznuU8CVg5HJ8ma8enmSVvg6ae3",
  "key7": "2sD4DUuXpH9foDaykXEJ53s7nLoMtGbDNM7LSuuonoNNDaPe9riAz5Brk6RP1FDH8F9W5ihMpyF3NjApkydV8h8T",
  "key8": "9Jpt1KwBxMbFbhLFgiiVvL2cesZbBfrayTe4faykzUZ6gMoHwjvcRaMNwwo9DuLUPA7ys9izt5wJewW7V7HVhBJ",
  "key9": "3yeqqbJ6hAtnD3pPKAkYrjrpewQh9fphjT1JPzbMHuCcZKQN2BY2SWr1f7MTht8tD5VNeEoEiX5o3ApEPbAPNMVN",
  "key10": "5dHy2Sf9LhN5rXy59e8pH8EpyBZ8kQuJLwA4VJonYccVoJJWooNFRGA8VQCBLzHFS7Brf3oiPD4YezBVi1qELgZb",
  "key11": "51Y3q82xDXBM4gvuwMd1xamUqtnDEXqFTysL4aAdfbeWJMun3XkeMDDPRjHxSZ7XEhefiEwkLYVSYEFT1PdUiidx",
  "key12": "52CArbKUX6agEn8tpEQjjqarhwF7pJZNhTjipc9ZavyUzCQmmc3fpEYdLmDTdemZ5gkqD19rGJvbash2WnHGpir3",
  "key13": "5ha2ENdxiTnunWhtMUWrDW5hXVA2JCT4QS3MzhiiAx5zBWXwCkCbZcX7x7KBCFSQUpbvzCzfAKPNgk92rTaLxb4p",
  "key14": "5jApWzXSWMo5LBQn2EVKhnuXrFrQQ5sz3BLYP36xo4d4nxmXwSbgo5gJRaUcMgnX4p3r45ohKAHxrK4QnjUu3VQb",
  "key15": "Pm55uc1aDHHopTrCX3HC6aLh9LQkc7TUnLPsgN73boTyHbtaHWuE4PgvdPEfUWBvVBBGqBWv4r9Jp7X3vVDJ7A5",
  "key16": "5KtWDQqwa9wPdzHYnDzH6983HwYhHxgUP91au1j7hF3DM6bXBs34P9yTBRvVCc9FXv6KXFfjR7Akk7mmipXDQv7V",
  "key17": "3FmaCQ2KCATBuPTicaRvM94ybXkYhD3Vo5hJfc7hk4mawN1JA3jSB11QmcH6NuBnmtDRyT2Uo162xsxo3mkXoTrz",
  "key18": "5sCWoB29UF2yqCib13QFJ7MFfUVUhB1HCw8SaupQXH4f1cGcCDfTRbvRt4VdKEnDsdj89FjJwoBADvEw9ba8GDfA",
  "key19": "KjYs2k15U8C8aZGpnKQrzfworVQ48ED7supoyacSM1LSJEVAHeRMa6DMRNphY7wbMfKMJHHoyKHkaPfkkjFPtMw",
  "key20": "67Yu1QTtnNFYmU3SoXzKGEsi1A4avE6oK68NA1PS21FZ12oKoq5aQfuYUUie3KcGvgb62FY1bv17BBF8aKNCfe4c",
  "key21": "5gRP6VCUYkVWc4Usj9fxRvwUsjUm2Un1EfnxsN9zbwqvGAFNQrkitFX1Ut5AqEi5i8FtSgse9dMYmT2FeqJ89eoN",
  "key22": "SttN1Ng7kAyiFkeGJMmRLxVE7e9ebxutcwS9v9NLnesXK7p9D2U6FZLeYbq74HCCNRZ7FBwVwnw7CmyJAg8E4UT",
  "key23": "5z9LkSzmWTDXxb6hUroxpGpKBmkGYfCqg1Ey3SvkBVvLWHNVBLnf4Sskxqr6XWvknuTY2jEEMLiJMtSbLeXTxwqs",
  "key24": "4FsiMaFZfEvQfQUmtQw5KrxPkDmKvsYaBbNxhfLkSzgCZZztqa91ABjXGrfsPvicwzGLzQZLquTHVokQdkfrkwBh",
  "key25": "56Vds5JekEu832xCjkxq781DKUctEBx7HGuW5Bu7aP4xsKiJFAvCDhUHLGFdRJRsZM1WQR9cYjcE38NJYBq4uwJL",
  "key26": "5pkCqUehbDzMhn5QMDkbiCQGyeoc9XZpnqA6pHr3GdaGngZziemDxRtjqB9ZrZxcZAv1DXnvuNmsq2mdvEexpqf1",
  "key27": "3VxZRJstYeM1EiDeZVNAfccXQjADGqHFQCoBGkSZUECJecFMCLwcohaPKYSech7cAXf6wVid9s433Wu8nVN3TZSy",
  "key28": "3ZdGz6KJRRx3EPLaGsEhcanRTVynfpVzVPU82jEetPpxrjx3WcKpy5gC9KEcYVZoMXGber1MVzPAdkFugTucz9f4",
  "key29": "64PghrYbhzK84setcmWv2XokpB9NteKtbo8pwkM4uchRphpMaEosaAM5StZuFubcWVNjYLVSLZSAZZ19ejc7B291",
  "key30": "4VvjuTiJsA6ioQ9qscuNZyzdaoiVcZ92pjTjFCBupno69UEyGZPMEjZWrwGkH2pztFTaN56g9gHuYe8MpuLqyCMY",
  "key31": "4xcehLErc36jntkm61WNnjHbtfahMr6dKnzrPzniqr1R7YUbXFoeYNhU6msrXWg3kVSu24cVUvBwTeAKDqoPVF4s",
  "key32": "oe59aZb4s8uJPXx9UHZ3tCQPkCrXv5NGKjHFBSmH3KXwBRB9XQn782ibCeftWiLRdpG7WRSKeBZ6nT7WdtdoF8h",
  "key33": "3MRiy4JsFyWWYE2w5rLGmSmaZUo5ziMeLLso2HTyiMqCAcFntfXVjhzZrU8ZDYM94vE6sHMxjF4Yb1kbeKPnjjTR",
  "key34": "53GUAqoH9TkEp7dwaajCVCoJt5QeeRbtP7FSs9LoNdDrgx8RtDSbhZjxkGzMP6TMp7AXautAV2kJJQz9ZXmb63bq",
  "key35": "2ni17rqo3EvAq6dPpJd7EVkZcbh61QYTDh1orAdU2PazG9m3FbVSbH2zhFWnXi5FTqj6CYgi4ttrSJGQDyrGf2b2"
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
