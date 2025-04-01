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
    "3eX7ocoUzEp74nsX72Nnz5bf5GfdxcB4Ux3FRUZdSjioSzPHrfFLDabpg9sv3TQoifgTXFYq8DQa5Hem9wYKtGFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5idTTXjYMRHgUxMKDRm9fMMVTsSk9EuWaHfDkrBkp3iePTX4BpcnBhjSaVaPzCYoKrHWGpHF7U3SjQwo9FvhbMiF",
  "key1": "E9B6VSPfkAuetbJcifpUSCsSNaVLm3AQh9Yru3rudhjb9Xrsv9DhXXVGGSriZp2gww33FW7ku54z161KYqLNGC1",
  "key2": "3FTBBQ6pzroaqsyoGPzdpwcjLUUx2jz3CAHXY1QmECtrp9TFiB4aAPbitiYVCbj4jxBiqex5k2AyvE7ZEq7uq87i",
  "key3": "9bJXCeezgRkbcFo7Rbhas7yFrAoVRthCZ5buvC7wsFH1cxVFBp7H6kEgAKD1y3XwviRcp2rS2reqaXWyXtkASUR",
  "key4": "3wgLLaCMhxwc4PgxcAzvBvw2hryeRMfySC54QwfkBcYaKNktRZMDM2NqkoQYgHqgLuUThyZaZ3u9Wbx37ZKtKqkD",
  "key5": "5j85jkyNEREwT6EWsqFvTgCfEZoBnvAJBVKLaMMFpTyohfD3bXj1miXodLr8GxZL1Peqwr8Y21WE2dKwnWvbXWKN",
  "key6": "5wjm82C6yrwmNFDNFLV8p8ckPRW9d1z8sYgf2qMMrFHwXxbdiUx1JYcn7dU9qBMYCe7YU9P8eSNe3tWEbAZQopHq",
  "key7": "2nG13Ff1KdMgkn3Sy45fqTTUNxyK1C3Gsy4yvfmrCivPBXDobN1s7ynA1Q4okujPCatNV9hwC5mD5vPGWJFemDB3",
  "key8": "3a84SwPBA7TqA9jMyy3o1qdofpriNURxjwJQPKaNemWnV9cbBKMV6PCRoMCf4bTeKrQ4Vci5VMUfadAkjv3X3ELG",
  "key9": "2wY15o6iC211ZmK652KVeX8WgRnbKbvchmSKDiQrpMRuz9CE5iKvTbq7cGoJQguYEWeje2DchMnv89gXC4Qdtuzk",
  "key10": "52YJwNs5xUtRSW5znLke3qjL5h5RNvDiK8nBAqtavtCp8R6c8Eaezs6NXyuixBKDMawjsUMprBkmNTpcFcwGzoAQ",
  "key11": "HW3g5kzaozDJgHLFonKvdXG3m5giQoBT394vvmmGRHj9E9MHQm7CdPQTsT45ZDV4DFB88dHv7sEBtorYWT8ag6d",
  "key12": "4A5p71tW2Q97iXjD6pCVCNzhNhzvYyYQKwtGENoVFctQefaQd9B8tPiyB6grLpTHnLrFua8EufCuKWKi5mqxWXV",
  "key13": "4YzwQjfXk9w2BAKpfCYHr1MSV2UMm7wegnWZMgKEFpMWAy7Ag52kRvpTyQnAkct3vvsku3juAqAbhiTcYXGqa8J6",
  "key14": "Fnxp627JFPAWPpwVCXhrvUodfsYcGnY7x34gzJt8H2JZ1ALPwYGngMeRKpF38z7x8AvDqb149cWkMFGjTD9rrpk",
  "key15": "49STQy4VJdkmtNwx4rNnnjQpTTgdzRHq5yekjQ58n5XRoAvh5C9Y6h2U59j2qgdMcqkQ5EYrAog5G4CQg1UEmVKG",
  "key16": "5UYMbJ9kXLRGXun4FZshhiXn14GXRVabmCtpp1uHTrGweMt8d5oceRHd5WhgnGkVrRgSrDQ1g7m5PJmgXdkxy2pm",
  "key17": "rPzke1k4q3872QMPG1G26EULJqdKM1S5X3hxY5bcA4SARvEobfXUAiT5qt7vvVgvxvBbK7MdWzZseFxx4KUeEbN",
  "key18": "2eZCRviVaZ4rBdcuougrRL8hYU9dM5WZbwwBKk86TSBBGyW56riexv4BtwCe1qfxreQ3jNWRs9uiFGLgz2AZJ2py",
  "key19": "3FN6cYvVA42AFcQuFNfg6MoPTgF1ex1XxsXTi2GWRUrawqtPd5Vn64rc1mp3ycyMJwKisoTZhtbqJHBVNLPxTAtB",
  "key20": "2YE36mncpzpbc3Jx2mZmAcbUjenbaf88SqswJ4xwzgX59TZCScfXXXBeD2jvZiguSnRbSjfzEkoysYHm1eB9mrCS",
  "key21": "21iBQwCe4osjzXRUJrvWQS4NvwHCMLzsS5p8as5yXMA9x1u6NGi5X3EBCxBKWx4MG3bLWKXz4NZ2Ji1JZ3R8DkNw",
  "key22": "5zc1WyxTz7f4nv2riF612msYZwE4mvgK2X8xJpa1ymDuEjPyfZpC6UqdYmNSpHDHTtBSQfRcGfsgwTsPXzbRs4Jw",
  "key23": "28xH2cdPCjMKMUnXgbkxTvnCThKavjc3uLvZDZruhMWRbvTUAk3mm41YDKLZt1Yzh72vM5pFkGywnK3bTjQGafgn",
  "key24": "2YXcdSBVysfMSqyPjoXusJ1nd22KfmhSabnfubss84WDakKDxHetEqs88mZLw6W2XVAEsSBGyg2TwuGH6dNXr9ZS",
  "key25": "2vJWD7p7ioJhptrXm1sc7hw1hKL8rKNW12t2wkZwLyFZMe8WMHjUBV48bxD1d5fqFJ4R2Li7GtJwWhCoq9c67NnA",
  "key26": "gNqsgZTeLKndse7osaJomdhBgcfrM8y9hnAtzW561iitJh5FPSvsyBwjnBD5tsvGgzTQt3JbayHSDatg7uA4pSn",
  "key27": "5NWezRu9H1VXg8FTgfuTR3Jegs3m3fLd2U79vRURpoXJdxEBwhhG4GHRb3cHWK4Mooxzw2jXWEQNM9HtSsaaYRzV",
  "key28": "4bTK2sqtyrEvGYfeZB5kBv85CRrTB8tC4Vd76ZAxWmhUUuG5XMyJNq8aTBscEn3HnECxtXngjd5oA5hRTfZgBore",
  "key29": "5rUAsANyEjMSJLnq2Pw2DUdH6s5x6hCWJo7UwkViGNz5BpMKFQmBdvAJzdDyuSfxGRwg5Jo1PSzRupjzNwjDs4KP",
  "key30": "3PaVJ3FMAoX7QBpo4d6VLeazhSEcjtNLm3GfhRUSgvhZesm28J2GxT3ivwPQwpJSBh1dMMibFmBpLBPjUUBUstR8",
  "key31": "BesZuXM4Ub86BmCKsHraJy34vMxoXj1q9rWk2fX11d8zvCJuxHQus2qPTrSYHhGKaNLiP9H4jFccrrnyw4YnQxP",
  "key32": "4KYBdmRxs9tF9y3bsUNPYBV1qTDfwunqB5fhMBfdr856sHacmdJDPefCYox3zqUaAKTxhX8hqEuiqLVLstqqvbfa",
  "key33": "4wfySo2rzSga1RvKxvW8PR9VEwZbLxYmEqDZHKFX51xDtZ944awP4rphFpsbXb42ehUTZVt7zATpBoEvrPLQLZj9",
  "key34": "Qcp9bLck1PTvMuQ8afLs8ECDGkMTPpxUTJg7GrCttQuf7Jed1V13UK9zHgL3QXTL8pRhr9kACZQTed96pC7um1h",
  "key35": "5WkRF6iW9nC3odtK4uqZbQ47X19Ks14aX1sXQkiYD2sSHLCkJs6e3zT8F8tMGpqYsv1Jh8Ys6gGBAeC2shGkPi3V",
  "key36": "52Z2nPJAdp1z77vHaBvzaqbXK8osgPnUPdmxDKvbwF3b1qtQjTWVkH6uAmy6QDgCqRavba6is6fGJdGxc81VHPEN",
  "key37": "pxa1RSku9RkxwyUr4CkpBpgPswwYNpMBj31uccrZqVPuW7YLirMg6912jEJ5Y3B7cdFHufxPypv8bHaU9dRweWP",
  "key38": "4CEU34ykfPupFNe3DVLMJg7cuUL4tsLxrrHXm1cwRiYMWndLpNtdHeNbmMdBecGWhn2gUJ7bxCr4sNpBDhsTCgD4",
  "key39": "2fh7ZbMh3nt7do9hq9VFagx94tbybvxaXkw8TarG8gtjP5UPDdrRbgydqgyjM5txpZQNmdiiT2N8twv4boMQgDB9",
  "key40": "5b8mqzFzWhsNWW9VMcjxu331PBaX49pLahZotXf2nPLVECffGV63FsWJKcVHGeVzamnymZSyG3rCs5F1ubgiSdCo"
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
