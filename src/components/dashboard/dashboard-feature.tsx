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
    "4Lxy8HQGUoUHpNvzpcnyq1W3tKxRsMXGh2A8cfGFfDxmpKXDRwGWbLX1JP3VQN76XRU7TUG1PYG9cJFppqwAeJtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44mcTH8rYUPvhC3p99qGzqFbhn5ATN1fTAtTdqJ345WVZcUgKLCXfZakjngXC6CdqTFUt1YgE2JbUhR2TAeog1bX",
  "key1": "5yw1c4D3kto58aKd22Tu96Sep4xTYASM3WWwAjyeUvFwQJWCHVuWXCfCuRPrd4q2FLWyPjFa7TPzkUbcUtwJZ8Wx",
  "key2": "o8FAaZVn1SzRakeuaoxiJtYySPr194jdCw5RkF2KJgAaMiusVQYqCvK2vMhezS8j1VVYWPDqfjYVcSxQW5UA6vm",
  "key3": "3iootEePDhyU8zBbhjAdP9ng6GmDJxYUdUa3C9xTKdLiv7pVsNGnEY6zzgpQTmW4Gur5kkVCnY6t2oZdxEnL87yY",
  "key4": "2tKh2Rnq5rVpycc6EzgJXE4G7Jsvn33zcSw6hyPVKmmDUJcK4a7Z1JEKPVAdptmcBJhhmAjWgaHgVx1M4CfL1T3G",
  "key5": "2ZnSB6PEm2JdrsGTbkVrncxLpUQMYVdWTrGd5FjPW1EDepXgdfy3JdxMiSTRsbt7TyJNbU15aoRQWRERTyURgb6b",
  "key6": "vPKVg3foP7NUwR7Y75XcxByUUkW9pbj9Eg13DrrMxdFTsDxPgHoTEK1bRegwX7vKAu9Me4S846F46wpRJNomRuo",
  "key7": "67pEh3Npxkt73qRWpUEGXWJiguXmyD49sE3YBXWcmjUgGGhMFk6zj69ZWiT8p9tzpRuatD2ewGHaRSogppHZQwSV",
  "key8": "2sogpX65qqdAn3vNMVdtRKzybfaPMShvhZmDVgo6wX4ZDVSnZwqCA1advjXDFYrubGVXLkpsc6vFuMN2pxn3Mb2v",
  "key9": "2cZ43Q3dasuzNgG8y5qaVMNusjUVgnRnHGDAh2QY5fVEfGFrPVjTjsSb164cWXNx5n2QreSgxC5Zsu6AJE9JGUgK",
  "key10": "4hWCa3BGWzAkGxi9aM2gTnydb9QHwHGjhkYcbiAJACw2r4SiKMWnLFwaoSPyG2kpxXUXR8MUTFFY6cRHviC7gjyt",
  "key11": "DPXEYC57xcPoz8EomjQmKEvH7yZcBayVrKAowxwZMHNcv4i4jz1ZdJKp55ZqTj3RZaviCRsEK6nAYpirWjs9fYC",
  "key12": "54WTggbyzRz8sW2DziLkUvsgQFBoZKmYCtFFLCVBB2N7onBWzPxWD6urP8Jdw7vZwB8oYWANrzRMhCMivJJKf6WC",
  "key13": "38V4xYQTmhB24TYiheTuzyAWK8rD4aaYViLfWsKAfcE6LCfkkg8npUTRfkjbQFE7H7yT2fkNH1tqDZmSzBre5pjo",
  "key14": "2HFUZWypf6E8nCzeJ4qSQsma9RACwWy2jHxnpCmHJkMHSBrYfqh3xQPSxkXWLocc5nmzR7Ht2vBvPDTCFomz1E3p",
  "key15": "37nyFDhHEkvqtxhnnmFpdTMMUbtMo5EMsAE7hxHqVQsUYA3YhitP16USjCjVDuRfEYsKMN9XhAFkKsxV3jtrURu1",
  "key16": "5jwsDe8QgVPPhFziJJB3ipcdJYVpPfdbejFDtSg1zg91Eg5Yr3Gvi2qtvUbDxSNDDqkjGUbPu5DZT1nCQiz8ny61",
  "key17": "5ANi2uZ6GUnWAeTJ7sBSR1yLNGPhCYneipVM6GtixygCR9R6fYfUauLjRAvuSsEwGGFt4uc8PVwLFzjwkbD7HDvh",
  "key18": "3oRpvw5L2Z4S4z25JtLtpNbp9xvuwmivJ7DPn8Pt3ZmcTxKZuVXXD9nMXdtMavbWVadsLqW5PkfrDYdiNYCqpesU",
  "key19": "4JJ9pXrHdnGHLgV6NKLB2c8FqkCxhfc4yDuceLyNDz3QS34PkBziCncMg6HCJVvjomccTxNkbTQbWfxqNTj9T1i8",
  "key20": "67FhZP7cJa2o6T1jWKEGQkDmKxRiAHgb9k81dkzvoycJcUYiQwP7KzRpAQvTLrXByr87ZX5FzUCeuTXQJoY6bpQx",
  "key21": "5bKBW8FuprmP7Qs53UKiR5ENHy8s1yVoVWn9qbiYsRe6uc9iAf9p3cJGLJV79jpYqCjWCg2V832GDf14mJro45rM",
  "key22": "4nk6i3XqfcV2hk2a11SaqFosA48jvnBXuu3J26sFhuGPKSedHptbi1wBmQBufFXzU9qr12KwW5U78pCetR723mqM",
  "key23": "2g78rNPmLYXWLEUn8uGEdQH93qPhmUzyTsWR7wyneEji1z5U9EtCyv7MuUZApaJ7g59pPpyoh6c1U6hYdZ7Jp6QC",
  "key24": "51RkMtihqjEBtD3ZuvzQook6EmAp6SZ1c9nZanBuybRdY8hwsyH9gSxs57WCcZWLby9TD8uJoqpQWFuXGa674n7g",
  "key25": "49PXXQidJjw4fyzTk5umifrLhURkZvgEMsh4HkcYRmPZfjszC4MquML624H457v3RdPCRYSTp83Gmy44BmHxNcPX",
  "key26": "Yerwg3BvU4GMWYsiKk28wtMADYhEdJ2cmMxcpB5KtxUaC8kXBftTwxoSz3WrmQV1oqe69w8zc375Bov8FHwQVWa",
  "key27": "5vXrWdRMCDcT6wbPdaD8RRcJtQBygGBp5NBbZ5ob9Ho49ktDvkpZto8w6QDG8LE7ZR84vVzHZ1URK2hBiBUpEhYH",
  "key28": "eEPjJurDgU87cfhf1CoCJGs2TsbxuEutsvpEeiEcqw98iuxxo6CCYLBXYrc6W9dhpAXs5ahP3EJcf9AgJbvNMrs",
  "key29": "64gkQu6qYwnvbEMUMdZeXqLVzroY71evLAFhZzMRoZ5c3hsbgTV9JmsPu3u1WEdsTmnCKnrwexxQEuLSeuTQKQ8P",
  "key30": "4yJJ14KUC4TKPMq56xqLRqJASQHRG3jbvjBh4YwLi5S4j2E35YJAXSogzZi31MWfV6RTfSNVc5puiKvzdBFhsi64",
  "key31": "Mbsu7Yxc9DDRm8XQmVFgfytRdqx1aKytNEAemWLcG6RENC1zdvJ1ZF7DnRQeCC7Gq8tV828daas1yRC2G1Lp3RB",
  "key32": "3iNnuvh9zfHE2YKNTHk6WWPn9TCdWdrJ1VwaoQAKuyHsrz3kfdAVmyUSP5uyHNjksM9BvioYmNQ4dhnyFwXnV5hy",
  "key33": "3ufc6ekp6k15aNVBrWjG2mQM1QW4jyx7a2ahDbpert7yidJg5QBa4qtLJiMeWDsvq6vwki56TpnEyYh1wrQdD52r",
  "key34": "4CK5BQ9dhznPT76CP1H2Jp97R6JP3jN4wVBoeS1e172okBXLGLAqtvUT2FQv15wdSSUnh8Q2ZAdGK4f2ArycfjrY",
  "key35": "4zbLEWWTuFrV7tYnpMRZrcLTLbJ7e1dVenqBxQvGLPDWXe2FY43WTuR5BJ5avbojLp1StPhiVKnAavhNmZKBoPVd",
  "key36": "5vLVm64AahpQsTToVKqR1Z3GCAf2Mdon59Vm17KpWhsHzDkPBNyAJAmJSq7sHs4mG2o2wCvgecHvCuwamSk7mLJE",
  "key37": "2j5Mnh4p7mxXwyufpPV2CuDP5Y8yvpMePPYSV2Yf1ZkmtYfjNp24WNTu77yraQSYr6MdQqNwLXNciVAWRos1h24D",
  "key38": "4PqAREmamoJMkZkgYfnK8LHVJJckSfUn4NQPcMNCRABXF6GKqdCxHdSkMM1bRLijHvRF54VZabtKFLrhgHSmbSjD",
  "key39": "2Z4Tf6DrURoYUze65friezNMCpaVRYi6niGu6Qc6kJCG1aeXsoNoeE77zQnfbNbGS1JCTNiDVnFHQ4tjbWerM6EJ",
  "key40": "4Paf8vuVMfkBgFhDB1Uh93VuRbsbwMHyHNJ5ZXYGxv4sEcVBbry1ZiGDhiFY8BqpDixe8w4HaXTcYc9P5evMN4gt",
  "key41": "2rhPbvDZ6z3aUzGyPVVz5rsLzdLaAQ7PudWS9re3hntWfFBestSD2TYDEjZ4TrUhJ9JPvS89ZdWb6wBjXvNrnmdp"
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
