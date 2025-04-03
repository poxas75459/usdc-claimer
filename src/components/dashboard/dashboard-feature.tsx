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
    "5WPFYTVDiV8qNEsAyCUC1pttWLJvkHRHBooWTbSfLVYbn9t8isKSGrM1z2YnogZKYjLznXhVUQ6aVLY73yiKTxs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FwuesnB8mG9uqK36a9efLmQm6GqpX8qA6cjv5gGFrYNvKZUBnwHTsbcozLjByP19THiKgQNPrVAPqf4UxGC3CmB",
  "key1": "2sX6xq566mGgAxuYQSRyMccxUzSBRZk8ZtsGPkESwYPTfmQSqK8ZWzhAqc4YLdMAL3X16qwRtAWKzcMmf73grJUD",
  "key2": "4Q7MAsoBKj5vtckUXjS3g3jaHZd3R4ckcFnmTbkFFyGLmLdS5ZRWbUTze52PX53bPB33cq88LX43ZyTr8fEXkP8m",
  "key3": "5mMJaUSTqv2Qn7eAkzstWc9Vssy6w21JgJAeCqWteAojdE5vJgNwHbUg2s76xwB2CkGYMpByGAXCNoZbWf3Pc7Xb",
  "key4": "4eyCwecF52qDEUdSJVoRuCRTd1Uwj8mVvBmAKKijpuz1CKaAiJEX84UUGuBqwcHggeBsPrLUwLx7pjhsAcpGopMT",
  "key5": "5qNm1avhxCc43jSnCctHd8Uak9G2363rUhYH5ojitYFpkz1vc78ePFiFXEVqoWcEicgjfhVLvZ8XaEAz3n57BozX",
  "key6": "42oiV9VjQvyUCooVGSgiFeiSYMdsKtdB8JnsDDJpriMRzoweh5YLo7JFU5JVrACsKnE9nc6geSkurSSeMSQ9mQ8Q",
  "key7": "327Pi4cAkeu77DiaLRa9AjwozWNqYABNJTm85ec8LQruTyPmLK4zv3hstbxEDGK6ddwQBiSpdAb4vWZEwet1bNjd",
  "key8": "5NNJbsLZq5Lvv8kQF81YxR3q4Z75g26DNZtNCzGoUcaZoGRoGN5PFr3UaMRBYc51N2ZF8D4RbCNfjPsL273pqpwW",
  "key9": "ddPEzUTb5tCAMmzVnjKotJjSXcehxq8NDsMt9MePe8aUzmYCdp877Yn9xkFU4Y2tEBbnZ99ShNPiDVVpAxCMdru",
  "key10": "5VDheDHLPxUtj5GHdZ6F33c6Kmymv9GXu35mwjeQowUNqKSFiZxLemfWRUDeCk6ZerR2zrthFWoiY8nnFNTXdyQQ",
  "key11": "5en14k31nY1xRcGt42WotkjYtp23bNjUuFQiv3xV7m4mY8N7R5e3kfvi4v9rhEZb2kRruME8WoBN8pLgYJmeh8eV",
  "key12": "5TT9kA2AoCUYjRgvNwkZKqw3jcXxt9nG4EmUfp7a8wdy9YX9RCmkX7KU15Dxk7SUhWwx8PiJiUFfep9Z872JURyA",
  "key13": "2WwFGfZYcMnxqw8vebmgekgGi696dbnUtxC1xKZ64uSqFqQtcYfH42V9MNXnZiEJgU4e9FyQZVRmCY2zEcx2fL79",
  "key14": "xfjVNqKjUpjdnEmWdeasqxdpQZKbGmUGz9CgikxQqYdj3Hy9aGXyz7qynGvGoCvxadc5FQeFx6sjdfH7VqA1P2Q",
  "key15": "LuVSJQi4iF77eG7sWUY7Ws8FsSsGpYMcPTHxFd36yaKgVoVVshfQ1jNv6HepV12sHtLaikR859FEZ8W2e1P5Pqf",
  "key16": "3UZdFpytK8hCryq5jkQfaCxACZKBfcPmbwizGgayQS71rYUN3NGBLegxegseUVfzRpMRQLk3HQ6iRJim2NaWfwze",
  "key17": "35rFA69BofMThjAS3QtjkUcmXEmKYvYU7RLgHTzfy6HYLrzB6vuqYhnbg1LWQr5p9H498JPndJaBVAp7BKpFcSZg",
  "key18": "5zMAb1bvhjEEVJ7NFPzAppV3T6h84cKpERdzrqYGJ5rEDYLgGkEAMRJChMqnZcfLEeRrJLzcSQESFYdhYZujZ13x",
  "key19": "3iKSTtYtYLmr37nH1GgNg4GLXwdQz1be1MJ2oSnT8i3w47phfxx73jaRNNL7QNsko6XurCUjWEYNt2SjL1bfS87S",
  "key20": "3KtNJLe2k19e61WZg6DfJVo2zV1A1ftmw9UXYSHpRqc5PrnVmpQVW7dJmUsrPN6RcHX3eiLDGVzYVSUAVTLMVx7f",
  "key21": "SRuzEapBwWpFbyS5vMPCNtivLjdEvzaa2GLYvEPQKBQjEgJtADqegdn1dPgPPULgav7jGwGddVZDaKC192kxDm9",
  "key22": "55yqfRpvvXKK9QCQDroD7yn4nVZqtj6bUTWrfz9DbT4krFHyCfHENe9mea9CerspxU1thEenZvz2CDFvS2WKErmt",
  "key23": "4xfKPVXUkRp5G3xM43QJjdDnZPRUvFdng63ox73EazW9RSsaJhRfH9qRq8Spw2BTVK39FVRyG3eoQYHYN1XkGnyE",
  "key24": "2ipFZv3gUK68SimCJH6JAgLfC9cB2nBkVSKZ8GR78N6RkNyMm9nHNdXjp86qizeu8eRuv16aCnsf6VNgQcU33BKh",
  "key25": "FEX1iNLwKqdLigvDjb3vyvpWDHkuGQU7wGaLLrZRPp8UYoN1uCnCjsJfyQHEuNgkJWLceaVYdwe2Sa6tBz2cYuD",
  "key26": "4NHWJ2FtVCGRLwWBEqxJLRfe3VbhCmKEbxSwQCZnY8TSZB5XyQtMJCHzUm1DkuCo8Xr6WmKJLfFiPVSVDaUm9UTo",
  "key27": "4wAcYouANHh5fuN8aUuRopyovWjViUDKa2iEuWhZ9bHxupSBLm1uwd2ecJGhPWdQ4cm29CHviKmnJ4hr3bPNDAfp",
  "key28": "2qF1dfgdcVPcAHVz4FkTDErnefz5nTTNX3KogoUNxAo47W1QPcbPTX2MFoGTCB9dAK5Gag9e9aAwSFeL1PZrAhYQ",
  "key29": "3rYuV6DNZTroS5cdsvjXupToUgRdQrv7QQkj2zGQ9Do32h7kuq7prcbcc8LJs9sv12BKusVEurHxrsFGaNJXVHB3",
  "key30": "4Uidt182K19qzKc5L7idvUaTL2fsE3uEYGnFpWPzojqZb7bbbeb4TfVcwcKf329mtecDnwtNNUENEGrijLUBQUg9",
  "key31": "vFaSU3Gyu6NFWS2S9U89ypiSDb7KD72kLtZbwt6UxP5ouvqwPogH7mYSGSUHSSpA9Q63KJ6LprpWe7BvFc95G58",
  "key32": "3TxvYvCZb26JBPSBe3kFnNW83bm43SrG3ujVbZoY4g3K1GN3guRYvw1TebqKa1msWizFxJ4cTnqdULEANBJc1HT9",
  "key33": "3mgyneJSPzU5atU276ETZfQFGepHbcnurtsaJGELEXoazeCaNCqEgjcYV2EDs4jcvgXt36UM5Tjbt4Mvjj7EttH1",
  "key34": "647b7hTfuqaWM89SsLRyb8bJchXXa39N2CdbRUaLFqpBFWX6PsNukpWdixYdzXqbkjZMSGZPDVr845CkyyGSrWnM",
  "key35": "5q49PNwpX93H3gSL7oJoYTHynAbrcFfSKJFRK9BsAWy1aseN8gk9yBYPs9iDs5rJXJgA4t4J5VyNq54vxEAMY3aP",
  "key36": "5r8xYoTVora6LbRn16Wutk5rKdyQEaXcq3xcsAMJfEhkW9nto9h5vLuGvgES9tmzyBPCwJrQH7qEpAeuNGd3cich",
  "key37": "FZQCLmwsm5vmut3MzTHCFqRqCBiPDbgmhLNvvFENaFnN9fu27w27CUBa9WQ6jLtDGV86WHFDt8bJXZArWAz6xW7",
  "key38": "cYaQKyRYHWKEGJr1WVoEubv4trgLyMMfkY1HDzFqZrEc1EQvMLZH2vTXYVESGmasmqRwSxTLwYVba1ANqGiZ1v9",
  "key39": "2fqhYuNrrgDHAE1uvpHEEmZnetLqxg3bQeN9VD4FqvkfUkdzw4EfjSMgejjRaXGhukNjt9e4g1zYsZwsCDvuQEvN",
  "key40": "47PdZVr9Ab2Hcnru5KhmH2Rf4rE8oonTcxVw3BYKuoaSnA2T8DopwWStwPRB24LczCPxNY4E8U2VFio7xD8DmNmB",
  "key41": "3xXMj58eo8ghdMhGHotZejhSeYWnGBSUYL2JEWZnEJv9VQcU8G5fvgRuWJSkRNLekJbMBfRwSp1NqZTKnYdGVWR2",
  "key42": "58uAunCbjsugmLP1NHLF6tmAG3fnssFBHNXuCQPDTiZNYz5cYGcnLZgmd9HWgwL7kx63LBAVztDky9vEnbSU8ojs",
  "key43": "Q1P4rJDsRxFyhTqnfDMTES7cKjz9X2CPSJ8A6ZzSpVwt1CnAd1iC69Qhtbs9jMM5VrNs7CvVzbxvUtZu3eFv3dH",
  "key44": "5sasKjZmuM9CqGMh44zyUX5Y23aMh968Nzp8Y4LukpoVPzKoV1z7r3dUytNAYZ1B3sU3ZxtiZR5S38PL9DfKsqkH",
  "key45": "3fuMEWrCatFfsy1Q9WyKCG67KWSYjqL6titAFT2JFhH2JNmR3ppMgzuDJrFHCdwPWBCPZbnyXup1mDwpGkcCcNem",
  "key46": "51SU1nD6ktBk5x82iKsFGCUSFCazysxYpKXA6Wq4mRkzpksCPB3aGGyCsdTNwkqnY2v21VUS7avFCgx6eiiiMya2",
  "key47": "5ZmAcd6y5JEk5AmNYhehkKwuNhGm34JL9i3wkdSP5QA4N4zJ8JVez8aU59cDuXeZYc89HBYSCJtcgKBrL6ajrxKG",
  "key48": "q6xuPWDrUsjBJyAptTpGuFV1BGD3hFq5vUQY2CwzSXAJn4PnV8aQ7Jn3ir1BjprQm4vPvnYQ5ZS2XwWZp4DjTnr",
  "key49": "2r3KkKqfP3qJS9QHCP2EaEsnQCaTQgHoCfTHiqSq2hZGR4apPYQa78ogpWHVPSgRjxfBaait7WhDHZM3J4biffuC"
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
