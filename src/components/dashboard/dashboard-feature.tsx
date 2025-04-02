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
    "3d4sGimHacDnWgAfwqedA6NU9D7QbxYBGCRLyeDSegGhtZRRgXmT9Vb8GsNQyyGgTXxxYUZGCirzba3z1bMgnaGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wjMbmY3j779FL56Hifdx56eVGrmpdL4qgu5uHygf18mxbxWfVJMeE76uYFXESeRe2bqWPqzhDZw6NVADHxqQwCv",
  "key1": "47fhpFoMhBdFf55zinzc8aaGyRzZAGYRMnL7CBvE7NZXk51GbBbDEWjsy3BKvMc4DicNBkuoyoyPot8qpRHd8gW7",
  "key2": "AFw5fRKvyYJ5KAPSro6TG2JX3SaMdDHwch2WT969A5fmKDpovnduKJLpYhLinj3N6NvKWYY9EGK3Xz1GvuSjzww",
  "key3": "34UyRRb1FVfZU79mY6K2jjfkSc8M6oBHXwvfc4Fq2FJHrmrEmpLEKFpynYjR28wF56SbpoN5vjeut3PqiLebhf73",
  "key4": "NRVLnohogxr4eYBoAiX9W6xJwvbvPektynVh38TZuzSbEGFbkAyaBjpHAUdyKMcWMHrJhLQNo5KEHC4NGnJawrG",
  "key5": "5Ds1UASCcUneEMdCfvahrXHAt4YQjPKse3atVSNFdaSqiqgfkikkXKfnTeSjU81L7h3q9GQWX3w7KWkVwvJL4pnD",
  "key6": "4JRtmnJdM98FzpHTT7MKnpgfaMvJ22Mi5yxi3JbTHNzTtuyqdVYDSTkDnpRjFCxFQT9gG7vjV7ZRox7KuQcSshW1",
  "key7": "fBf7vtpSsYFJD5aUxkie5fgza4jeCkxbpRaeWeNmZvs4uq81mUeKqx8TxsXHSdsbEVZAj6Gg9NabkMksd6gZD2T",
  "key8": "E7Ja2jhRHy64ipNFe1ZpasNuSYYQqamWx6htfSd9SZvKc74LRrm7gFxpUb458A28TugNxwBq1ft53BTQJsyWUve",
  "key9": "4KemSXC6h3iUkXLmAyxsVo54QSoLLZ6Rcga28XBUHUiFp2M5G29W74gY3mU4gmDR2qhZeLVGPmczpL9WwCdUwAbr",
  "key10": "3karPzGP4BWqQ1Lms9oUV99EvYXmPaUcfNSS4es9hyeBR87qXMHT2QDrrhfc8Y4TdRUzxWv71FoMhtSJrwvo9taw",
  "key11": "HtdiGUvBx5dqPZ76Bf6M5S8a2xGniWLPmW5HstSYCaC9nxDAcLJ2PYAmHDj1as1F7tN3dwovFpGXNaVtVLjYKrK",
  "key12": "4CtQZHS8seiN9Wfk9j2BR2hvUMbB7ia18Hvd6rd5ABJrUwM5ZGcTBdnxXNxVUsofq9ohb1KXwGAoCzk3iS8fFoUU",
  "key13": "3AugtULyvUBgf2cVvYygsBy75rnYmcFDU73Jzc1i5cYcEEzatC8YxzCC8VcvzwGmJoegX3c5AZiDjBrFZVse2weU",
  "key14": "2m1SrQGfUnwyNcsmTowGeq12VLadH2yNJfavuhpdKnBTUKLwg8HrXQz8j3qUhAcZxKSBiUdBuBFEwb8qyhwDiN34",
  "key15": "25E2JpDzH1JnoB6dnB2PD4K4JAAPipfLmDYH2zPksYZmMifTFaNVA6r1cBvXVtMEH7UahR2YixawH7VPfJBK8TJL",
  "key16": "3fjopR58Tnih6cKyamhhcuAsWCPiv8jt4SeMBYM1gnVhYo5xhnqqNpG4s7Wkr5mu7bN4FzQZS1cbiS4yVHg3e671",
  "key17": "59ftEs5TYweoXB8pb843GdgW4C8Tt5o5ybdXktai1EPdpdWbQbhMGwKFosfRpDGo6L9D9YnvVE2537dJ9AhfBrqP",
  "key18": "3EZKHRBqLyfpNV5RyGr6GBwvkFQhscPEvYnDK3im452TEfWekwELHrQ5U8QMT6XFKBVTLcE7US5nTyFYpHvMb9gz",
  "key19": "CJGNw2MVRgYE3jT8UzPn4w8rmFNpGRcv8Dz6gx8XXRGGLAgNBQ2irT5uA7PPXJm3tAWxEMNtmm49vJTGBWt5WTk",
  "key20": "5ho9eLH69tPoXSJQtbeqgUmhFcUvCRWrrqHnEeF6DweWVV8F7esMhjgBjqa7ghh7oBCmfZoqNMFGkgamyhpzsgFz",
  "key21": "3mYZudYUPxgeffwQzcFr5cSAz3iHNAnKtJfhydE2zjerbR8km2NzmjRCJqCqtqQEAcLY15o36DzqQSWohtfo71gS",
  "key22": "51QF9e3EJyqY2uV2HeSAGoeAH4XJgRM4ciWCBRB4UmAVvG2ijyfJqiZECyR8rzJxFvB4TWvC7Gi65xH2qZHTy51o",
  "key23": "5WP8reqCjrW4fdTNCcvJPeXSM5qr8AT3c4pXb3z1kDgnB63irympth8DbA6cy3wxkr2cTA8YQ2qTZaHxtMJRdFJ6",
  "key24": "2j5vwAtm2gjKg7iRAT9pmGnR76FvWqXvrk9LPJyjbvymE44BAsp7NAkCw1LxfbNFPMyUEZw7RWLvKcmurS2gywyu",
  "key25": "5Fs6GzdJro1gRZoBgCbZfZgGm4DbGyHBmSSbv9DgXAxWQsLaFTyjR1JuEaSaU8HG7tijTnkwJ3rBFPCi7xDaRf9y",
  "key26": "4ibPCKwLkq92TG9vvTZMgr1hCL2curNPQhfA6ToD1mjthqAbBLPttBTNTSssEXG8YgnwgMDaucao4jrWHAyhmpfu",
  "key27": "39McrjNEdmFg498daukcDxZ7nE9yMCythZ171Esq7LJN2n4UinhgqgcMpfXFuVyN9rXR2Zp2Tmzi3LLjim7QMBPq",
  "key28": "3Xqc2vdEoJLRjcUTxoPK9QqeWLBLkG8Gyg5q5puM2yp9zi17Dq8YDAngBvJ8bzxmW2o8GCxbkZTxXeTuYg9Ltnyd",
  "key29": "4eGRX2PudLTJ6uRZN31cs3ivtmaLHzFPrFeRAbKevvH2Tvtb9a1DqLxjwbEnWpBpaJ2ePU6y8LmFRCr65QhSQxVS",
  "key30": "5DimkEEM9HGr2JRD3EQUxffQwP1nUjUqC6RhPhrLi28pvaAyqwwAf6WqvYroQ1c1XJWim4rXudhWWxP3P4dWRZKp",
  "key31": "3cqyTAjC93FMot9pHt1S3C6ntFwiDNPkv4a8LcoNcwqrsiiShNpmQJkL73z7Ej7s7B8qeRoxQ4xA3Ac3YUn4Lhui",
  "key32": "4S2P2H6D3Swxubxk3pRH5cpeeoTVqVV4SYeCKr9ZDpnC3kH4B3ssbvE8Rbdsy9Etra1Xx42RZJnXjPHdaKsAcirr",
  "key33": "5aeLkxKmZTDpqmR4XAf7PmMES3PFv4mJMPzfPnLFuwrz9vnDH81QH3FdCpaAXkQQYWYMvL8LchWfBEekzxqrYXDD",
  "key34": "2YQtkVwjmgQYjWmdwpsHGioRrENBF9EL3teVxaeE9mEW2UDNtGLeu8GGAPE2SF5qJe4vWRnpsi3JhpS3tdNDuu4Q",
  "key35": "zfeKNRroZBVJoGFn7GXofyLrZRHp3Etf7xv75mggVHh4gMAvgD9cWUUXvBQfHNKKXike1Bo5KQjZEScsFn1FsL2",
  "key36": "2Sidf8cFErZQTYwzFMaiNdZpgGaCjJDoCwvyAwiVK2JQnB62cauN46AvCN2aei22x5kP1FHjCLyrE368Pp3dftRX",
  "key37": "gv9HGKGqbCdzV8dfu1yXBFcXHc7BFxHBNKcmHsDsCM7SYiRuX56M6vhW1vRNw9pUPPiToVeukx5kSmaS4gYWQBB",
  "key38": "4a4vU9RGhMusfiMLviQExgUPXKeaAZb3vasxqyeg81XTK36qU9jffnMur2pJoWxJwU4GQLzLieqP9qnodEvrEisG",
  "key39": "3LTL6G99YY2qihKBKZEAkLEu8sZ5WZDiH2Vso6hsAM8RivpkB2hFpFciJpSGEEfkHGu2eGvauxqoLbA6oSZFyhLx",
  "key40": "4E63qLvAmcDVJgqGvbxTZTSu9QZLPNR7rogc4D4dHz9RLr5GGZRVoc1FvJHtEvzKdmdoLMRHndyy3gwqkP2ZcdsH",
  "key41": "3acERoAo65GfJqy4YYm4cMFuUHCnFhHyLDrUcLcnZg6BnmFR3exVgSWqtnAZSLEAtxifUjeEJkNy4uy6B1edYrds"
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
