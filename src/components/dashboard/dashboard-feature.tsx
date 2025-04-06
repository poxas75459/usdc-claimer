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
    "7HghF4LazYVLfJrAh6FacLqQb7ZDWM22TVtFPXaRRnyfP9bLFvdnVbpFfN6S6B4ecjguYN1TstaYP9MYM2H5nWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkS8PUL8WbEupfHdwJw2gx3VfMoVJmsA5K6tb3Nxmdwx875SUt87XDyQDfbw5NZYbn4Pa6e15t3gEoJGsCQ5jzX",
  "key1": "5VpisHX2tjfLbJpJRkZbuqDBZbhWxhKJ8rMeFxS1Nogqp2fA6sX8MB2zt4j732jK1RMEnTE4B9qX7koKYToUKYP2",
  "key2": "5fukVnQFJhvAWDbCYZtq9RWjZcXRfz62rDNb45Z1T5Cm54m3GddspBx1y73UkXsW1q7fVc9JbcBL5Z3KeT2U1rS1",
  "key3": "5wjbw96L9y37qAPZz5BWKVRXJMgGEu9WJFyLgGiL9sFoiNhjsP948ThhNkraW4ripqxbFAdbbt8Uq4fyuxEjoit4",
  "key4": "3c5rrVym3jjKkGjWZJGKaSRwWpp3HY4t8ySkumz8g21beD3CfEYHbqN2StkSM7uHJsZ84LeQ76Cf84P7ZKmVNLpi",
  "key5": "4jw9Fvr7ZdkkUpBrfzbXf8a1mFQvSTk9jP31tufgkBtdEvEMSJGZEjEQurz9A1xEAaVh8zbbPwmmu9PvnnoabuWw",
  "key6": "qa8a3f5SrjvW5DxrwPnNF45MsdipzoP8NLrYy3EVyq48AWySgXnYw7drS3o3jvWmfjhFmtHdsfDHo6mqvhMjTir",
  "key7": "3uK57iFTP8QGkkHMcgQg674KAnSEfGx6AgBGCTNJJAfsdmGRP7KYjfcp6bkjpjRNwd3n7nJjspv1yzAL9265ft9y",
  "key8": "5aVCYv9kCYVndjZgTQo2BXf8VEAGMwsEhxQMvHaDr6KnYKk9ykEYbuMe87KHHabks6QgP5cBEM46LEpdiERPTRCW",
  "key9": "P5jxAWRkqq2VUuJka1DxRFxtAKy3vrd6HkKTce1Va7FTgrKskDoNnBhMR5j8mKTqncQkAb5Ytz2N2cbYC8LDfMc",
  "key10": "63cjM9AQ5S2crxNuVVVzWSvr8zS4WNhqEZG2ZpSTUFejsBgr79yygQqstcWSTGvdtEmxfRSyqMwrmYRLEvkey17i",
  "key11": "2vsYVqvZNZaT9QQPB4cnQqJNhTJin3m6A3uFYGgZpccsAWHTQpMscxiQd4yjfeWq58PXH8m8M1NsvYoEjLffG6tG",
  "key12": "2FxkL54NuZxweesvejy4yF6fUZuFQ8ypzjfp6je7J44tsQ9yLayNjyqr4jFmCW9hR7LLUnjwCDwy6zeNuvfP3e7c",
  "key13": "4y3xoHp2xKpLVpA5fTQjNn2wNFKq4cCUqpLXrnzNUchHVAUNVdshaeFMMXhK19JP2QUBRYAokcXQzCrnRqXJFcD6",
  "key14": "5LnNFHLeysNYUZpkdAsXokEpkQ6v5u6pDT4E7uPCF11EKw97Po8wbMx5H13QDRrcrNEG8RCFPBiwfkdiXJM9sURE",
  "key15": "3M7JeLRSKXXRo3htfJ58GEvUsdWLUUJnfvdBhzYh4omd6gTWnJ1BhPGjhd9QZAzWowZpAvyT2w85kju7xPrRgMwE",
  "key16": "JPZE5DX2qk29Kd3BC81H1BCUfU8xPgdg3XD43ZDmpUveNYqkUFWk3HDTp7T56KozhK9o5xr3Tz9Eqvm9d2W9k96",
  "key17": "3M8WUB5TaDEw9xvRy36PVee76HAjXgYodX9s3YMAXH5n4ZJvGgXij5eHkwGMBLE2JetWKWUKJDMZL9gVcC7ac2qF",
  "key18": "wk6FKzc8Pn6NS5XtJoRxa8aibsCd2icZkWB3TYTTW91WxqkrNb8Q9gw6deqvecAvYKPf7Y4a3ejSuyMSNDXgNRJ",
  "key19": "amV3ctQms1jN9fGLmno72gHfiaDhJedVNw7LCuo1LXu1umS9M7dsbHsnYnpPSr3eURoPXBP63zuLRp3sigiGTWx",
  "key20": "7SgRWowaQakkkwZtKDfsWxhagjtVgdGFMxLmV2uXGfku2bMZBGBx3kiq6XRQvuRLXvTFiDCJY2D78p9FzJZ7LEU",
  "key21": "evwfrpSJ7toezXxyKSEsnFSuCo6iyHQoJLB4RRH3CPYNVaAtM7cYQSLUMQf1pxgRzuZiGewuqC7YdFdZiAMf88z",
  "key22": "464vQz5TNzfZwU7bngrMGSevoRzknRzSmumC9JyykKNuUNZvS44roNdymMBciZN9r6fidgFok2v75DZiojH81Y1X",
  "key23": "2XV3p1Wh6sPZjvsEnaZczCLqtgG85zYfNF9Z2cd3hhQwY3GDUz1bYoWZnq5dCyowxcUthDKMkSCq9FS6SJspNe3b",
  "key24": "5fSGDWwa6WePi1taNfuSpdSvH8Rw4PPsMc5DtYgjDeTkCHhu75Mwv7Y3d1FCAKsyhHPxaMPr7vYiFQu7L8SAJ7R4",
  "key25": "5tFXE9RghHvmagWynCyGbiDZJsU95pza2QpMLMm3JPWBupatXhjg1SEpHLrLVoubtQkEgCLJ3xqrWDNDDu925Evt",
  "key26": "2RrjXW8o8T42pZk4v2gmmcKbskMMgk6LV1s1fJyfP3oxkhN3DcbUWgjqmZt5YEzKtMSmZXUxEDzEQLBC9UVd8CgM",
  "key27": "4oS5rGhayPLXKZD3AfD8ETGcGS1F4ME6MRVrTbTDbfMcytHF9DAiHeNsQXdffc7umjtjCtwXqqYyXkbzKGnwcigM",
  "key28": "Ladx1wJ9NVBAhzmsbuhXR1EZfAAJuZDKFcL3A3CeW8X4hDtrMJnmTicaeqRZNRwp2f5m44hoESfETDHRNFSox2Z",
  "key29": "3tQ1pWFcTGY4fbGF2NdroS1DSJpdTFVbVbKw4eYdom3eMe6KgPqXXDHxn72Dc3xRagymCJ7GpebmhotUPAtLnWsz",
  "key30": "4mdLM1f7Sgkyowzmm5Rhq5H7ztXMRKZj3Gqhb3RbgSbQMu54Z4zzW9jvDo3FPVdUQzHNGgeV7ZtiYgSUVnxay57G",
  "key31": "5PtLtUZFYUq7BKgFzaixfmS9ogHgMgTAn3Qvc3g6zfYhudPW8fGLPQptENwwgcfn4CWgx381w9Z6KCvc6jrH1Jsg",
  "key32": "3vnkDQyenXJpu2EoQhjXR2LFJSTTVcsWj6u8CixPH7UnBnTrjvoFJ3HezCBGZySVxViLYGcHPZWyBTAFtGUHgoa4",
  "key33": "3TAHB1vUMwutJQFLeuxoQAnYCZAZoXSq9rwuig2P85Hy1Qytqida25YMZThFLW9cPcC8DF6qybYfZH1pFhrHFjML",
  "key34": "2TDNjh46zRzDHkD6hCtupJFmJX4raBsPkC4NUj8fc3LEwpyT9BZPASYQtJCJx46wT9GXGKscA7sayboCHxs6e84q",
  "key35": "4dffpSNjy8wMJ1axDz2CCaUuK2o8dBDuzf3Eb49AzzALfHvyjFHErAno2Nv2Swh31QPiSXJf4bACRpjnMSKqW4gh",
  "key36": "3FpJaeZJNjf4WFVfKSoJmh9W7ViypFeMkEgFhmb5wAVo64jdiF7jeBgMCKtTBJp2szkf5myBDXsWRwjLug1vCbXP",
  "key37": "sPsvyqe2Snjy8dnMXwD8N1x7vvom7mDyXhHPd4KamkkbndtNDd29Y5p6bhua36jcD2aCowm3aLPUNJWttiosJv1",
  "key38": "3kmKebq36LkLCGvoANQFt7AcnVLU41RdxBvdEN7AFLXdq2WxgFN8f4dx8XFM9oZ2bKJAfCRFYp7sAqo1ekQCBTmV",
  "key39": "TLMDrDepuXg1BAxZkcXRG4sZSV5ETjG7ATVMrm3N5hWaRqoT5Fg1MFZFbL4nN6gmHSJ2GQV3iT7t4nBLmzdkjrd",
  "key40": "3rxj8pEsR2t8xbfj4TKVsmKnWpPWZSqFMPJoEZS3HQXy3PVvwvL8SevLMzPKoBzX9CP7s4aRy8145VTYV4Cz6hQk",
  "key41": "4CCPgB1DAhka8yHY9AgjSiAHgce8BKhfwCizuqLYKbaqPUyiKao25ogJavGLqFYRBFbLhGNCdDUZt5dPGiUXpMmd",
  "key42": "3UfeLqdfTHpVxKPCqAsGd5Y7aJL7ieh8Cn3LhpVfUYBc6VL492okbQw33YdsZcp3WhtzKQTMC8mKc6MioKPfCKVA",
  "key43": "5X1SrAR7QQdMCa7a3jxLcKiyn5hfAKN9i7jByirgCPFayXGdTa6NnnCqXTyKmjnfYUry2o5cGa9araDyfGgniho9",
  "key44": "2zpwywgf9ZTreJLNgfHzJ6rEos4bFLHFuVbBcPBwnaumM7V4EZquox9iWC5iWqEyvc9wy1H5GhkYSShxCajqZNj1",
  "key45": "uSMCqg4x2nfAXZfAWx1rxdhwEayJkDmXmCEJ3RfrWaVfrSoruN6WDr5s7TMQYh96jPMewXALTZmr1ysfAcsk2F6",
  "key46": "2u1aSvPxZhZwsUeA9R59MTpH25NpHHD2pLwGYE7DrTpYwJNMnNVVdPUDK79aZAjZDFrDBXcSbka2qaPF7XDpAcPB",
  "key47": "5A3CRW1CABQ7xN9yYPQKBTYegy35ssReyq6oupLPy2NrowpUa6z4retVGKJ5dMzoqdBQDzRmvkBUFgMh86fYRnk8"
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
