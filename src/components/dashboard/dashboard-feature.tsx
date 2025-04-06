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
    "3vTSP15Z5vfhsHYD766kPiPQ43U5i4BThNDEcGF3hqbye5QihaH3SjsTFUzmYNFYRVjAVE7NP54rtsTiVW6WRCzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nGs8ZV48DG3igBzmAKeo1xGc127UY1R5AktaTm52T89nvdkjQXpZ9Afitg83nHHGGqQxBz8emALsFSjjS3Lz7v2",
  "key1": "fZfkqMF8K163ZTJtwgSZ5NUSbcrVnhLHjBWYsV8KpGDZZCTKaZTZedBpJf9mpAAHCXmZx5r6tNxWy7ksoYotPj8",
  "key2": "4qqs4KweyJYrd4XtHueSUdwQ5LzMRFXUkccJ3A2uexBMiSz1rvQvjr2YZdvaoYkzZErwBdw65u7EBpvsXSvapdU6",
  "key3": "3UFEM8onTKJH7gQ796FndQvjjwAG6S7YNzjcxjvPoqorfnWXaiH5H2XDsHjiSJjKyvc9TWBcwtz5akZ5BK4Shwig",
  "key4": "342AduS86ZwowSFavc62D5cYtt2C1ZnNzuwdWkA8NuRJCn3enpvNu7TmnrcENauoH6RkQ997Vgsq2yT3ZTC3HYLs",
  "key5": "53oSYXrRbrfcSD5mqHkBK58dYEfgx62ViAn95mphYCVAv3NQocSr5oZ9otrXwgsQcTUg83jvb1Fzpxdq3QWejL72",
  "key6": "2GxWx1wEiTdw7s8sjP6NLkYfdchsGJATm5rGokskAa6rASnwvQnCGHVNkbW1Gf15qD5RRcBHzYbYs8Pj8FSgNjQE",
  "key7": "3xJ5NNRsMmHoGrhKJS1dvZ7GBbyMm88GEDiUhPpeQpuZxj2ojLfj8zBikysvYV4VyL3GcyKqkgFoGmjKp6MZEzcn",
  "key8": "4SE6Jo6tZM66GRVN64NiiCVKZ2uSm3Jy7H88iEbSGdi5SRqhppeT56CwxqSgjqmwLtdw4FwjfQXiCVKUSTDEk5dU",
  "key9": "3jmtYCQMun8JCUS1jbYWc25Uybvdg3KWE9nZUUyyE1GngJi4jKnUUSDRgEChg6n1VEvcY7NLiWfF5Mr64CRNyswZ",
  "key10": "48qLrR6wXWQVFVd6cSUUc6ZZHbtJr7yaFuT92h6Nek95f5MczPC5ChS8FD2SnMJLkLrVC6hzRskz2mXALQtjXFzg",
  "key11": "2QuCvUEYvo4yqGEwvZednpHAtr8L79b3JQczndHt31577FCsfWTxfT5wWLdNT76kmds16xyAvuEv34u4NUP6NMje",
  "key12": "4jhWvJWezp9PuBLQUZQQYd9jx6dBHJTPGRo2p1ySctcHtgC716cy2diJHgsddy45G6yg1eyVDryi8PMLcAXbbHBw",
  "key13": "3hp1mwjeH2A64Y2Q5nTZK3BCqaRwTf9oQSHSyHxS9ZTtskkG32fuEsCh54zmoFD28RxA3KPGR4PCyLYqdMCsz6k6",
  "key14": "5UK5ZBns32ERCYUdBodUvtAX3g3vk678oRmWZbTwE1puiqKWw7f1ry6qeJKwxxgscXtSy5BHyR33AWvVZufVvLAU",
  "key15": "3AA6jsJ3qwp1CvsqrxgQ9iCrz44yGnwHkgB3ErC5dEjoMB7ncJmkoSacEkjygqxT7YjEWYH9dFWyMsJiZfj2zQwf",
  "key16": "5dC1BpGPypYWgzf2noPZF6Zuwe7vktLbbJDwDHCL7gi3n7eFQowQrA4knVArXUKnfb4v6dR4vvtZaYNr5FF7Uq5A",
  "key17": "56gjLFKnzE1CAf9usdawcq8RRPknEWhVU31DRoW7HXKEiQCyUHGbt8Djfzd32WYwB2kKcFSEsmK1pQ2vFpSiGVi7",
  "key18": "94MCXotXkHxyN5w2HkDhdHe6eLMRRMhhx7bnRK9KAV4x2gGaK8czQN6YeNJyrFRiHp5zKDK8H1bQqDH84AGDWU6",
  "key19": "2LKaUzq9xiHCpS8WJ61MSxJotseDFaD6ktwjzgRecRTk4qmXpgwY84srJ7s8dwDviwht2JGEjUGH63tQEvzbqVAL",
  "key20": "nET1HTZSGVZvGQ3XP7CR12Lgs2sesNT5igUegRmf7y3yGm4Hh3a6WEnAFU8hPxUL7bGkBEvZRviagbrwmZWBEXq",
  "key21": "4s3m7zqWHYkvD5p1wgB5RquoJZQgYiH8DK5jL4wrpMa6p2PCNCzgj5HpCAg52PVredQV58TRFGDpnH8r26dboJ2a",
  "key22": "nFXvKw4erCWPGpsmhDBShABaTKAyCBXJ9hjj1MPE3o1ui2rF3QC5AAhEHJKLYQaCihXSMx5wNoncoqrNwJfpcb9",
  "key23": "48AbBswz4FCz3q1digiDYzGwPRnme73dTiLKwZc7VxhxNHnsxCnPDSuk6tZKvqP4zeYkKbPwqeBBbak9jZXLDCRt",
  "key24": "3cPxT3qJkjd3jGNGR4HSnYxicKaYtaQ7oTAaFzqGyqKMCo34naC4uWoTWTsAqTA4cGd3Eb2X9CsDJHWzvAwbbme4",
  "key25": "22PVyx8YXTdKjkvMgmqVDf43NDcpytWqoQyCMx2MAuq5N9C2sEeteqCbGuoecJ8SgLVwHGX3G4t4o5p93twCESZ6",
  "key26": "jnmNDdcpEZLDmV4fXEDyiptLo2eykmaiijefC3YwipMqJL9HbKWDZvfZQRbwv5uRrafmH3SEY1sCHuVmQbCDNAU",
  "key27": "5rjctCvwuAVmmmZE5Y76qs4UUH64txWSh3YZxERDa78g3D97YCB3Ejc8wgo3cM9AbJ2EasJU6nwrctNSVYfa2KwB",
  "key28": "2EjyRisugoTsn3uAaRZkuiyM64ifDDstqVQX8uaUHmenbwbSnXUYm2VtvNHFcpjsxukH9h2b4cS8mDF6dFBTJkfG",
  "key29": "pgfcNZYFLjvNrhEUX5J2AbzB8VN3GMXVnduz7r8mufy5ijWQpSonpwqEbe9sZL6yxJPUvKSYX3bX32ArPng1UTQ",
  "key30": "3F1aNif1wVEWXTY3geUWwnxfVTB4LyoeoV3Q6NwR2DCqYX5VtdaWa5nDFSetcerMyqpVGGNHLU2e5QrtKfQ7MhQa",
  "key31": "2PxLuvLJ1X64sYrwy5JCSvCzmED9FmSaGrcJ1KcDoayCPFXawG8K7SXeeGsyoQSCWHMP99utEwe6DMTzjT6pd7t8",
  "key32": "4koBRBb868H4bq5R1SyVM3oocS1F8fVovcXLa67tPy6hcX3iGLPn5Cjhq3BUMynJW31uBq8LYjQdGz3HdYfLc7io",
  "key33": "3x7NUyjGmmpY5zRfqh8pdrDpMJkjiRPAStHuLGUhCDFsTBKCuKetMwyAAwEfttW8nNcv5xrjoVNALYduzyGun7En",
  "key34": "2AbhTwDcf7Z1ayd6yPtvaYJFJMkKcvX5RUPCv7y4PtMXktYF3N9FYtoLds82fsFbwW3VNxzafZRgWYsw5sCmAh8k",
  "key35": "4fbxeY1k1WzDsDixpUR7xFCwWFwydvZLu5Fs6ghhcJqvMzJkUBTCnCPWZtLc3BKPP48YSqKB9i1RqvUwD23F9PfG",
  "key36": "3XjGmwRuwZnYpifpRZyjUEpEHUec7Uodpu2v4vz1jFaCKoyCzvPM9oY9AKrcHGurk2ST5b7A2BzKhaGDWTFWba28",
  "key37": "5FHGqnKxJKuxhavxpT8fC2YdLjdX2zyQ23j1LPTMC1wMDfqZ9C7zNfS5UWQwXpRJ2iqjNsE3NkVo5r2HvHtCm56d",
  "key38": "4XmiwgTXtqLS6goh5sfJEnesP7eWLJmUv449PQDgv4fxiHQBwrJadS29keZyj4CZ5nZcxDRcvVUKBjcEduuDDUVF",
  "key39": "5YquCjUWt7ZKZQHN5vDG5YKxkBVUCpoc4816hBzyPdo8KiHwCq7mQcEa3VMFb1YydELmFt1LLK4Vn7ePhquHHACk",
  "key40": "4Qh5QR1XbwBE9Nqk71iz95me9TFP5ff7mABJivEdT1iLGiHUpvbUgddXDfkwL6NXFTmk8msfWJiPzYT747JtNatX",
  "key41": "2eo1tDqpWFPbQgzzKtoZvY9jtxvhtc8Q4PANnHhunxTm1jXhbdS2syEp9R32cTrb5btLoFbNNVzqxxpUNFDj9ocf",
  "key42": "2WCykDdoSTyrwW74nFvP5dz4AndP4z4ZML1fw7zVzyF6UWfxzixaoARzSTTr7genYRhoeAfFULzZcRupkUY1jCm8",
  "key43": "Uz7LsP7dsPnwEJqPtAkmgUJUbBtv24X9NkDWrXN46d4VoX1TDFe8Ge2LTPBLSP5wh9LTy3uoyJuL4wCTAcuyc1v",
  "key44": "3NFPBRXhQS7wAfuAzoStSRf4Vsuzk71BZ3zsEev1vxjWSdbbpk58FwMdv4Qq1HeWtRjC81FmMRds28iX2zCLkUjV",
  "key45": "5RNe6qRx8TqNKvsTKf2D9WyKD9DqpQzru6Ggu4h3Pc1w3xYBszAaNCJjVexQtPqPvvbQJjNThM9agCM4g3q98HKo"
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
