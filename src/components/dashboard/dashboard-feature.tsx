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
    "2wm1rXw7AGgtjJWe2UMatp6DgGpJRfHYDXWV5WdK5ZYwfT5H88ZuK4outByQFCKfgETEt24sfEcWXWJPKenTATbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rBPvx6YYnHJxLgbTABuhzQyy6NzKSoWttp3n5Bzgv34dZug6wQhaC3eFc1KzRzi323EvbUbrLpmj43SBPi5EteA",
  "key1": "3nmPXvmhFPYfBvgmuQUvAfzF9UWepiDZbDk7SedetRyRM6a7qHaTKW21SQY4Qax9GQrSJJGyKBkH4DZpSgnSED2U",
  "key2": "3teGDYvhPbmrJSBAM82axvhrSK82wJHgQ5xorrs2dd1YVWw9AsR1dDB22fGor7QbzYtz2xcEvQyUynBN8gLXXfcJ",
  "key3": "3WtYhwCutxmDEsVv7yetUiZBUNr2AiX1ajSSiYRC7xvGeu9VtAdpQ1yXqfP2YCEzR3YVM9Ef4D5nK3rwbCqH6aLp",
  "key4": "ffPvv5pw7wpBBg4u4WZy2xtLwUKA6URjgTS3HkMmFvQFKeRNzWyYwQKP4ubpbbvpLWqL6rzrrc4Veb5G3L8gL15",
  "key5": "4P7gY3eoLW9Y6tq3hFnMBA32sDenZF2ekrsctmcogTG68KsVaMcvywht6r9NZ3FB4GL37ryADroYshErn7KUHTE9",
  "key6": "4wTh8DFNodxeacgbEeMLV9pnbBKRBjfWkCjJLSFrjJrmBH2a6Xj4L2x1dEo5cj2c1z9SL8axzns4ChNBtDnUJc77",
  "key7": "5rwoRfsuRGM9EArDrwiwpMuHmYNtLLho21unJTWXVpWsJDWA48v4eJndrQE1iyGoPU4uhZmErLAHmhMf3HY8USaB",
  "key8": "FifJHVjE8noZxFiArZnFY9ictNE6dYU58vmPDUUFjrum9AVfC7qFkUW3c6R9FobgAeDdhMzJ3MtUfTUsiMqS1nL",
  "key9": "yP83YeXQxLgGqr8AtpYHmJxbh54Px3g5ooRChevA3rCejuL85fQgJkzSv9tr1KRxcuLhuJaWNcy7kiVTV638LbQ",
  "key10": "5gkBNYtEUemEeeUqSSprgv76w1eAr36hnirZZZJRSBKyUAjHAK3WGMrxxobZq7YV82DgkJv6ridSNs2PpzCVuLcB",
  "key11": "56Pb8P946F6uWwCGnLy6WzV77JE3j4ocUmYDjGfZwCmNBs96z6K9EWAeFYrpn4Rcj2GrjkRwYSPaKpHUoD16T7n2",
  "key12": "3NxVQChEMhV9UKu66zvJkgVSyM3Mz81t8ayZKh6yuq58MUA81SAcgZuoHv8mLDa9Nbd882EN7maNtXBDdyuJpAVn",
  "key13": "21ybiAAuLVR2PH6kXJFnQ2Br8494ion7KSgdzcbfY9zBKWqshJDdAEuMJHJKQKYp4JNNbhcyo4QMszVo2NLNkoCT",
  "key14": "5punXskKGQKCYswpoJDVFG5MUy9f8HGmiW11U9PLLFsxg25QCsbvsHBpkJXJ5brG5vCneCPD6YAoSa5rygzHRmQQ",
  "key15": "5AEqQWoAAYfwYWKvCHoAPQCqutxnpAjtQ4X5GqNw6jqU2DEQLdswtS9nd6Tg8KwJDNrZQ8HN8QiuBm1RbjSZDn3L",
  "key16": "4ETQLboGENuZd6fFk1PdJLybmjZVLHtTn8fZUVaEFbVLeovdtQJMmML3G2mN2yBU7Mo2vbTcA3AQQU4Vv1GkmSFf",
  "key17": "4R4SbgVtZMQE45QeequT48VpK9U5YNHzWHERwcxfVWMF2FnA6aWeTWYoYfM8nM87af3aMdjWzzjGsPGAeQsLzJdU",
  "key18": "5CYp7owidKFmZwSyWS5KPtvZyJK7SSawMKzfscF1ZsMDpmz2ZGPSyR1Ygx8mEmmiX7kVdDEzXsEqPHkgMooK4SJ",
  "key19": "5tcZcZYUSaUwbw5dGLqjy8H8cerGuGfKDWDcwnWgCF3RiEaevGDW4VmpXrXGVBHHzSAsQeuVAWwTrdeQTGYPbRE7",
  "key20": "5vWpjAbm9kiB42tyXSED8U7S5sj2wYGMHY8n1gw2yBL22CM3GTVsFxkn2Vo5g6TAn11bvZZadQoxrQ2C84VSRFNC",
  "key21": "Gtk8oEEMCMPGdmnoabRbwS4aRyfVwJw1pXcnCCMeBZEYsR5q89pmCNEPwkG28F4b7hsP89HWk4CyymJd6ptWeYE",
  "key22": "YUGX9nfCUxnoeTTLcmyQLhr39zmqAAk2fTcrTRw2mLKzoWpC5rMGRsVeTyamCVUENqRetNV9S62qDFCg9EY59iz",
  "key23": "kEwDCwLLrCZhSvdmyv89XrDktqER34isxStp7S9k15zxbaWNyEzejjJyVtykfrASZXF4vKF1TGBJQS7iDNjG3EN",
  "key24": "5Wsx69P4DvYzdk6h4jgKGqS67gvHHwa4dpi3ayLpJQKsc2CcPEuXMTH4jeDPJQGFJ2fenwLJBkatvLAneKQkLRuL",
  "key25": "A4ggb7DvH5V7ApjbCTCZrquFhWsiwWKkPycd7tyUnV9Ak73qQsVhiWUYZSX1BR6Vy9hJdw4MrmWLYUysEo27dhm",
  "key26": "41gfgSJJFFoipo7J6XZwbA2aVQT3HKMsmWibk11GYqMFCgtenWZVUBhTfJz15JobB1PGGd95FM22vZzcpBEAQQVA",
  "key27": "4fhVhQYPQJPmTVJSnjUUxNoyviVJ4potKhfEAt6kbt3kSvCEfx1FrNzcnnsD4YSVVdEtsiMwrB67fo4HzQGqGxkg",
  "key28": "3pupmsp3bjA35gbeyq8UUdwftzHpXUCWmupPuPo4ro4yr6YEbhA6Beimwe9Wa7aqPTBga9vYkZMCHTbz15PkTnfm",
  "key29": "39vY7CnxJZCm3bKjqL8P6rj5XVioj75VogmCz8NXU74igbZu77xyHkexG8fsSBZfcwQ5ehrGivmhv7Lq2TrMgsZF",
  "key30": "2kCFCC4F7FJ8ofvej781a2G6Z1UkWW7DmKvc7jKc521vaLodVrdVGzSdFvWTEBFxuaixYe1eDtDAxT8SwWAwMzQh",
  "key31": "2JT2dZWd3QoCajT6vk8Gfp9ADiBzohQ2PxC57XVNQatmP78CRE9YSbaZDvJnL2Qi6BFjZXQJCo8sRjDTmi53VRYB",
  "key32": "3rAC9LMsUGzQJ84NHDJBbEweN8ptywzeC8c4edVYpGGBFntpfVRA4vopsqZNADpKJ5erDSYWXHxr6L2TewFvWmti",
  "key33": "4GLVX97Edd8QSmXfkrSR257uCDuMsRRy8GcRuLPGVZEDfcHfDcxWeu1hPcV51sF1W24nsy7cvUo4QcqwnM2fjFtj",
  "key34": "43YZ5sNkmTXHtgr4pBHzLuksy1HXfYRq1BhYRXyGCQHkvwASLPpVzA3M4v8xMVEj7zg67vjehstTpbL87uMLweu5"
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
