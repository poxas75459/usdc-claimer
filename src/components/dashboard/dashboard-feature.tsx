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
    "VGUiW5a7iAWU4hYYyY4X2w5MLsgu1dJzYweN7t1U7MNfcVEbXfLfis5jgrTHjoTXEmSDwPrUEfVbQ3nRKR2GJ1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PDNUowV8JU5A84SGjBUrgHzJd5EZC5rhBs3SC3L95JJGNh8xKeGGATGiAjxmcGyXqwP1F4566WFdJnNfh4HHYvG",
  "key1": "4cwqc8NSkvGRzXaBbTdfCmrdx4Q1rC4tFfyPQ6gcHesH9hEyHFzeVzUNDVd2ja1q9Y5sEmWt55TSi2aX74dXFjpM",
  "key2": "2FpeTyWwAmz3UMkhiSB5y5NJkDgVQFka2EhBvgeMko33nAgRprwtwMCNP2CwZReDa1ghfSZTCod1ha22KaMWAdTK",
  "key3": "z1CBNMLBJ65AwEyucNkJ2tUqSawof2fvaPrkvVMdCRuNS8F8A2pE91fw2sZhu9Mctx9xp86atQ6DWT3KUXseeEv",
  "key4": "3JrR3cMjZRSMFsHGafasi6xyaTDUib9KwWb6wNpgRUAx5BhrzwgKNZgcEvJ51kFHEcBTHqdK5ttxG47cZcovz4Fg",
  "key5": "5BYezdg43KehJx7bwTc7rKmZXJKwbQntX6VTSfESWJmc4W19KQpaFc4sC5ZA2ceWvqJRAkptXmyKpaZPVR7XohCW",
  "key6": "5dtikWeeFpTTS1AH1b9CsVLGPEeP7SCoYqkUxasALkxqhXwH8bLXS5fKeFz9euE2XjRb8dJfQEBpaCLPvjPAd8XB",
  "key7": "5vxREGaGYJ6nycbDcg48t5t39yY3wUhAdZUQTk4FmBQq4pV4TzhVVVL6wPgZZzgUVcydRHw4N5ytLdLG9QttYb1w",
  "key8": "er4fhSCyzN1TKqHJuBdQfdQUnwtK8FUfexGAcsQSx9CD6KGNHgXCohSQXDYmXQjcRdW8MAMA4VfryKLE3TSnVdy",
  "key9": "jFV41Ro2PcMeJXTvTyDPCz98eHC8isBzmwwHLPfFN2XEUFtuTnUid9WeR9HvZkoNzoeArQzcoCijKKmt1bvN5mi",
  "key10": "4nKug64nGQG9adhco8VCh7fFZnh6Qe4jtVf6YVLaRcWgBEL2331g3Z1RhLxZSbVnhNxuu8JAp3GQPhG9PzMHwh8S",
  "key11": "2bhLNeWZiPi1CHgncicqsiQeYQFSu3S72d8wrWBZUrtQzgMSVw6eetr7jRYQEjiqhxEaHJYsQYrTvuuX38jnR74M",
  "key12": "3qpVjKubtLXma2GmFVE82nVY8MRMbbY7WkfgdawJAm9kvms72fT9j4W4xv2ownTW5zm6Ci9TDV5RRBFVvMjdzPkW",
  "key13": "3Z2f3edDBfiDmApEQ1YcsrgpC65UhkDFS2ZmnUCYUPDizcjwjtoVH1cWGRp1CWggsJVEB4zTdikuFHMUYQaf9fhv",
  "key14": "29T61wyDze2vtmQzrqJ6hrhBnTq9McZGNNtrTqv21VxGq8wQpFfgrRivH1KUduHvKFoixi6cFWinBJd2quLevGNF",
  "key15": "zcE7oVJ9sSThdqwYW2SstYLNcH52EhZ8zXx6fmFhUeq19JANsM4SpvkwVGCKdRa73htFPnFdXjcEJuXZmTGL6yt",
  "key16": "3iu55kcg71WiuVSiaDzBx5Zx8ZMBUmcnhZGeeJKEkf128WXWgysanx917RwGtfwtNRRgqcTBEaRMTMahLSMtsXQp",
  "key17": "32SEYbKn5Xjh3NNESsNEbaPBGq9N8MsPeeqCdC7u3ucMmiQrgZJhcXURrWGKPhoP3m9JzouCqkmL7YtDmniTGrfe",
  "key18": "4CwbycnexWHWHM7c5p9Y5TJZY3LhiwVZ5iJyL2kLWRdDwBhfSTLsREEtGAEA4d119P6FZvztWf4M16efNSJMApL3",
  "key19": "3siTNgrRgjxmZamy5isPa8jrwBzfTDrjGB8oG1UeAoANHdWs7VWQF9runiwaUVdKVBBAKaAB11gtJJLwnFJLbUv9",
  "key20": "2K1wJyaGkgT4NFJXvERGqdh8f4JmXi8NHgjzhPs9zj1RZ3q88BVudEp76gmToeFNutSDwUtiuAsqtbG8XiZKjR37",
  "key21": "5hfYxxRWcAr1Ke74TndKSqjmdzGkunjfLbKTaMamfWCyLi2RocGw6rvhTU7ZDGztHVUJGzxTa7iJBD6Afmqvm7JB",
  "key22": "21qEmWgetcPALVAiHcndE87fE5H5ttb638zScMXr6o5pqB9GA47nDPpfuBFF2fArrzq9MihHUcW6Ph9c4VXe9UkS",
  "key23": "yx9s6ohM5GbNqqHFk1e3xGZiVSJuVfou6qo53sgNkoRRcrbrhjUu6KR2xLWNAisSxEV7iUPVaVSNQFCpnxNiqdQ",
  "key24": "4FZG5vHJWaEyZ5chk8CR2wXpfLGwtYgKPn9EhrW7PNvxdegrq4UuzxpvkDHeBbbyhQcBy2iLMAe673HhPuyPiEGW",
  "key25": "3ToFu4fWNd7oaE5wZEqDAPHEHuKLGZRcgMXejpimrJR4hMCW5yAiEUoNa5Lr8Q837JHrAkBYhJvm6E1eii4hF7AF",
  "key26": "2M5F2QTHoXHD2ub24khgpoebFpXH8FdARv9fKSg3ggDncLsb9XsrHaHnVLB3f2KwwXedD4H8c6fFFGxGWceB45vk",
  "key27": "52bSS1Ccf8XQ76aCiSPpoPsngmbGnAxhwgoqVpBF5WcJTtry1DkzmNn7oDL5WaG61htTp6873kWrpLmEMAQC1kGj",
  "key28": "FLg8ap9n8f66fpgdkFepWYyGdXaXYbJeNMNL2PS8nLNLz4zWQU6grhWKiuENGX1DiVQ7f3QmWTDAZ3LcmRS68Ej",
  "key29": "8p2LPsGTGAoW71SEyhDLeY4PtSFLi1tuNoPjyGXfiKtvwwtJGJoPJYh7NcEzhGkqW2QY1jKJKYPhhjbchhu9XJm",
  "key30": "C6j3pRqmbbk8N8dFWH22wxFiBs5UYpVNbEnMfDVP3dCsZZV6xejt8X2Rv2gfUVbVdKFUobHs6JYb4qoVorF9U7r",
  "key31": "5F29bLTtqGFnXttLpsfcUyEYd4XaZQy6k93jcdXrwSj2TFjnsyqyhzWXXnEsYRENgLWTyuiGYu2BCoFsjSfNfjce",
  "key32": "4h38XUcTNgvrqy78XhQ1S6aALgm5E9rGESzUcZ7yjRgLmy3dSteP6qyYV1eRfCS32XzKMJ4HPjMRuGZJi6fRpGyB",
  "key33": "V3cvAC3h3EZAcVTrWwhQ5JfLbGr4wf5CUDGyPNuSnhfTqLw36PpjqYQVyX3xR9Xbzefb3Vrkn1CAmHtCajpLUjH",
  "key34": "2MdZmpvecTR218XgTu5vwLWgnPTPfgVHsaMSnzPdtauMTwwuZddGWr1bdExMSM8ciSfrLkWc8eFvpfuf1uxNtUNK",
  "key35": "3c4nhPaEHwnRytVq1m3emZu3wV4zSRQVcxNsBLTUMeyadP1D53JNaKAt6cZBhhkMUMKurXuErKQRYuftHDtey2kH",
  "key36": "4cY2KedgWbgqdzeYjajhkj2uKfpA1XibJFTR9boDSXBF7i28eckntmHTiFwQuGvAg7nv6vQLs3QADocorE8dejs3",
  "key37": "3AZR4cykKfg6BiXh4HM3rmBSZBTezPWxvzHRFL8Z1nXt8pwZ46cZaGTim5k98Q5A3VdvkLxHCKuNgxghroMMUAf2",
  "key38": "56qL5ChLN5YKqqB9wNgS7F2JPQmP3Cr98tgaCfdCqjHHP9B2V8iekC9ogRAkBJJ7WiN2zyzeVevcUoPyCEbcXcSL",
  "key39": "35sFWx39GQx3AYhQstUPSYmyMRjKLej8SFjzkNbivho354ybF7PmTPa8c6gjjjyQvn9pQRPeNtLHd1mdattR2DaL",
  "key40": "ZPtfSxPyCrZBkg9Xq4nXDdHfgxhV867h5ABPYNe4Y83zL9SjtWQMrvanbFNSkptKQSJg5MZ5grYjhZebw359JfF",
  "key41": "8CUEABDFXvHF3K8tXm9tdYpYEYnNL986cLqtD9GPrAdd48iaQUVQ1JMwvvcwhA5rxmyYAgui5S9YpnjGRePBwm8",
  "key42": "4VoUndZnHPwZgg89bPVMFsstd3zjfgp6gJ13ceNQN1onDdd1vE4x9HbXuE5Jv1PTxyDyi3qgn72F1hZHyTSgjRJY",
  "key43": "5H836NtWDoXrxR9Jhxmri3BrZAQY9ZhfZuRyGjhZDXbrVgop6EFH9pZjYYyWp2xyAE2AjduTuaFn5rqGEU9cid5o"
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
