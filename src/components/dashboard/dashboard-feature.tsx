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
    "RK2NHjEFR4hhgNQmTz6piqUwid6wXqC9Bc2GzwLhSAA8BhFGmgdfyBJacZWsb4ZwNH9k8XFQeKR7b4dBW8S68Vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KqFPaXayvan443J8n1przLwPbqgn4imG8em66FxuUEMySCF8eGKX5fd9okaLoiBMEowiUukiu4JJj8asnVradto",
  "key1": "3owTW85KEnzyWRSomApVQKjMwnCVDxnLz7jZ2vKMh1DtaNvB8b4iza5ycTV1pPfbTyFZA6CvfLw4rcXj4EZJFxwp",
  "key2": "4AtTFukTYUB5RYQSpqjxKdXgXxM224MJuNobdEJgcnUVyQtmWtafT7GF43EXNoGkt63SG2dwy5jn2JYmrjhT34LK",
  "key3": "2U3Le3cET8q3ZxJVbuQhEQKcxuTCqCy1B8Pa91MGzvg9uVg8MWL1AKB5Lf2Fn1MgK6NXdRdPBGRZQvFPwpjhYRgZ",
  "key4": "az5YjVfLZ4nsjVQTdoAV3ofxCEsDmmuDiN2XfDSG3h4AWxnLiS9uxmsYB5SX5d6rcAuD5a4eFd1V3b2UgwjtyvH",
  "key5": "WKhygRuCSsB6hPJtyjSeyGA79FEomxKFdyeqL7fkn71cPxPvd3FNtmQwkHtpVpQ6mgt99AUUTSqJkrkz4Be6DD1",
  "key6": "gcgz6SCHLPZrC6esGqqhCwSRpYN1ZQcGz1eime2Dr8pVvFa7uCyCwpNZTEq8rGpAhSJ9B5AkLSg169asPGTQeTB",
  "key7": "2SjmWjRW79nh1NRjAchKEH3b37DwvMGmWTxpRpSpht9z4AnR1CBcPnuLWWSh5EsuWrpcqtLZj8Misvvc8ekpYCiK",
  "key8": "8FiQdRdHPKxhdRy4gfZ2bF8AgE4r9FAC1oBRCjYWrzgQc9nyzxLsTtHDWjFG14kBQwoZAfbFgyLEiojqRxwX1iA",
  "key9": "3RGLhLXqTJwjTqqHsJ2BShY9f3UkUSRJ2HmNU6QdvZxKs9xzhubuRsNh4kJHBxwQEiyWbd1g2sdhLk3Uz6WvaSmc",
  "key10": "5PVDQGyhnGzyZNNKPEPFjNLhzpESVpi4warhubsx6zsXvAbfWVzXDCg8fzhNaQd34boxmenRWHs9r5Gvbnb1faJU",
  "key11": "2Rktd4NNsg7hfQEbNzTVAAp7TX5FtDXM9hcDaKUS81NqwLadNLcbvof36MExhBX9mmuHh7oG9yW5Pr6jx4L6sbAQ",
  "key12": "5P6ybB9rLhSC3KUkKP4Vx3qQbqc7njV5hqemneQQEACwDMd8TiDjnF9KvByz1jirkHQBW6niHuqPiADU8p3L82au",
  "key13": "AAygadu8druV4tQRzcSvmPnekrgjY4pb2GEghGvpvrqKVnf6q7bSK3TgeV9fyy1KB8ZK3qxMKtHQoAqwNR37k8o",
  "key14": "1r6C6RU5utML27euEZfcwawAtgHd5J58WZ8UQoki84N6X6phxud428g6Jg6q9mtErq8MBTSBrsjCXXPHLkNGsVc",
  "key15": "4msH3CRFAx2v6ZAxoA4QAwXfauhKUSKqCN9kJdU5zW9iwCSDihJXM71pR6keiujrVWXqvgCpy1JC945VDhK7ny5M",
  "key16": "ZHNY2fFG16cH3SyTdKsXG5qoWpjJ3cumNemgRRGoWocjCMunjrw32SnxvRka8PF3RvQVLzZC84wiWtbT4BRxj4j",
  "key17": "4VgbWFzzwfNyu86XDFSWmXdctbeo76iYzSAfkmFaLeMb4sxzzJJ2nP5SF7yQe2Deh99L7Yvzh5ZCUA2iaSagmY6T",
  "key18": "4efEVFyuHP9RBBt7CrAmCHjyMv1EcseT4HWmnaCcUQTzgdA721uTPw9VoxGKXVLEJfjanWvi67fz8FSvEgTXU1iJ",
  "key19": "3TXUV3i8i8ijTuLaYtqwahtXKZeYsEKQym82vt8GEch9h9VPq1Fu7GRMSwYmsq58kdivghQ5yyncd6xK7KV4612Y",
  "key20": "2XJajupPqGQpiSQzsZv7QzD6a87QospbSYgt9t9u8fBiNaZMZ3nrzK3emyC3nDPC2jvwkFoUeyPLCo6uGJU6x6bS",
  "key21": "29pLvFgttm6PeQudd7MATtPeWAoNFkGPrWNVNfPDeEzRH7UoHpRvd8uy3K2NwQ48qfFaauZC45cn6XzCjxYj6NkR",
  "key22": "4A556xNDS1PyVhaGM2s2MerHmgdUEik7N5tL1cNu3soJyMyStbB3DmLTz41y84MQaQPT1m41KhshEdwGiU2gSMrM",
  "key23": "wUzt2EN7mfE13Gt2AYFyH9mR49McqmUjpZT5uWiG7BUi4QDfnt2KeCMbQSTKFT4eXpXoCWf1XRrsXKhvuNvfiWf",
  "key24": "2RrfcHfTnHr2z1dxrSs569xT6VTv6HVxrBVzEonTxwTgaAu6aWDXCTewWwyiKFkH82TaZEPgBCA87KWA3tA93aeD",
  "key25": "4sdXiHsu24FnKSx39uSxC3Qd21y11KktyT5KBinYC3SFq8Wx87bSXY4cFSF1tB1qNTFx9DU9dsLVVySzo6f1p4Ls",
  "key26": "18hfR9Gdd44xqFX4fnYwnRdULfYkcZREWcRMdz8Cbdr3vRGNKgWjTuF8zS6Jn73niajgdFSeaSzfNPHAYXHqNHK",
  "key27": "ywqZ7GKANUDNyRik1ZmDypYjoiQCauok5JUPwKTMx6n3s33yTzV1rHKMAhTF18esgsNja6jt6oKUzQ1gfxRvEFj",
  "key28": "4dsHrR9LyNZHHHDfZ5PsgWbknzcBHtWSKE2D7CdKdFsN6uWDwuBNzf9MFSe94RahTuV4g8TzpGH36bdduR9LdtfB",
  "key29": "4VDk6e56iGZYU2TRvZM5X3K1SVcDpwG9ZtNDhrgbo6gqvTKZyJVXza7bS3uNfDSU4BoBk7MkC1EJUhENJFj8jrYU",
  "key30": "5gzTbjKVDWK3PpMF8nT6V3tLz6uY3RbkyrZiZKFWrgee5idxViwDzX6AZpLcGxEBQbmYMpkF9iLKBTVeyPxUJYhr",
  "key31": "4PC1SgZ8zCAfoEpDbKmuY32t2icPTnbohLb92XVztJGAg8ABSVDR1iRAbsqa8MkhvkFJPg1MF5XxJueZsMSri6tV",
  "key32": "2udveTFhjPnP7p5t5k6uterGhEZMfPePXEvr98TJekuVd5wvY9NZwWG2tWf4gKi7xFTqettvdGDTL7hMCS3NxsSr",
  "key33": "hhZhjm6vvAjEbmqhBpmdCeX32udtiznRet4roeNSkyQeFZ46ypsS55xiRvvoYimsgbqjLcF9wFyio5nnJiwqrEj",
  "key34": "3CdM7xVoSuuXWxFneZgvrme71ERXZ85sCM3CyH8yLm3A8LJ8YHwgT1Ko3t6oSekv34oG1eoTJdaqfAXVPCRNVhqp",
  "key35": "5dcuu3iYdZCpDrXTzQckgS8ud38cNatSXH85GCgqJhEf2LMcqHGzKhe4Tm2nP1JMR5p7TtYQgmXwKZvuUkC6cBEn",
  "key36": "4nNC3kR7hhvvnjdrjiR2YyTP6R27dMKXvtLiKWXHeShfN2f3FDmGF4PxqXVaumjKePPoyjPqzno2ojFPiDsN4oQS",
  "key37": "2eCMdXK9XHzx6hAdrjyzHGF3NCeU55v8YDVKTSwjY5PMhmDHmEqAXA2Q6mKLnUJ4LtLzTXWd4g21YrM7p2dJctsL",
  "key38": "3WVW3cLrq4k3vhsmXSajZEkUDwGKP6UPjp3Qf4cq4B38oq29RpHaxFoxDFaMeMwBPEA3tSvcTrq6nuqsLqkQm7fN",
  "key39": "3FCo8Cjw22ExpQEma3zYcfaCqaYsEQ5j3eofAx4C976DT48kGhxDF8kEGTjx9vexorftLSHK9Du64e4P2enkXzBo",
  "key40": "2WtNzYBSdxaB96QA6Nh2pYvS2iMBzWfTKAX1nLPbfNpre7LeHeBDgQTEVRwsxkYox2PfZXDHu7LT2mPqkDsHSh51",
  "key41": "5MKZ1Z5WAkcNE3KzoZddr8mCjZLzWJdXXjNsADnBYjPF5PwLU6S6FqTfLNrX9oQpbbRSutj8jwobTSnRmEWpuiX7",
  "key42": "VF2BSmsdJngxDYy3sWrPHE9FPKJPenwGN315mtnTQ7GLiB7oCijgrX8PCCuPzz3X7soSrG561uvo2BAGGVtkQSC",
  "key43": "m6ZKMF2G7R2kEtWVcVfVY7UiEDVPdVhkXYRcLN8dgb4UBV6xGPdobrY5hwFqVqWhrCEkRs1CrUWUhvFpUnkFXx6",
  "key44": "ki6bFHvbPoxME2FdfdckmZki97zTdaWwVap4uxr7yEFRdERfLZrveoaa6SLVkhEQG58R5WkBojjKVtdkR5fXAyL",
  "key45": "4qUcnacUTzn4wCNuY1cAwd2GzkwTaTMSGiLuo4CcrJqpy4jJgvAdc8cPUCZBzGoSVQnFHU4uHiQ2KkedqzaN3oAC",
  "key46": "4CZLsDVKXbafbHMmEN8uEaEXWyXBtUKXTqRwK7TcAbH3iMK8nparFrSaKtGDyCoLjPjJoPpwZbwfozsvj68axKuA"
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
