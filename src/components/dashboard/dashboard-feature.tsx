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
    "ZQchQfv2fKtJ4n9aRCcuJkuvQPWRVuedR9tnCnK3MwzeheZQrSTc3cEdLpSpefqCAALargAnARybYbu2gqMqMdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G7M7Jy6bQn9Syoh2FMye95fNBikruHtwNY5rwh3UJGnQ49N1hy9aNcW2VQuemAAfLMUCuT1MLk4EPd4wPQAHpvx",
  "key1": "4zEPc27kcBbNpbJ9LowxJe66UsctyiTNYHbXGc3wAm3Y6vnZBhqYdDSQ3DUhKydBiPZyvi6xKDPkbQAzuzoNfXDy",
  "key2": "4bCkMwaz6HYiWEn5iXUJ9wPYZ3wUvknUcFetXVTjVPEZWYCQdTJXySxjmVhDNdLgu2k6F4ePDuidGEnhD2N8ENoj",
  "key3": "mDP4XhrKvBHN9hiLrQQpbe8pjBGoRfRpn98SafdgSzshLgFjESKLnoDPgKDhk69nUsJkn8USLBuzBNnrv8uXYtY",
  "key4": "5KMRU9QD5MUiBaiTemdPQf93GcdzSxux6UxinGubxYCp8eWUNd2AuGBEYsWpcYUh4zAzzrWLuzmYt67i8969RKyd",
  "key5": "66mqQGLacsGbPpnvYD7MHiabDiLd1QQe1Syhj9xRPoZBV4JUzMUDy22L4LfSPPcSg8exb5P5mXTPRtSqKCV7MFR3",
  "key6": "4XmHLfBMo8v1i3PwQhHiNL7bNjSdXAzmLYxPvz84xqR9wUTN19nQ5TtqbBqCJjmXbRp58Ns2gwQmoyg2hXpyJ8kC",
  "key7": "3fCAyMnfdYt1iywaa4KGMeywQURyMrGx27749jgJFtbMpvErA7mQLyHtKYwaUBv1k1YgiSSBpmJjPt6BQUbhpeHQ",
  "key8": "5qStaK81gifcGoykp2guMVFYGwDoocmiBhzfyHmrMkugWrEMAR86yAa33M6GugE9nN5nCotd6gmJLzGUUqgutkKD",
  "key9": "5a5jBUqGxXmFVNoU6NJjg9QaqDmahRGV4dPVyymmv99uPLiXBA2WNAboj5hV5g52YtCywGcxFfTsDsGE1sNE6yDr",
  "key10": "63DDVx56HW1R5zyE8U45P6aTPw66tmc2jEcZ1A9rj96iyE5Gf2mZmtbT4f8eHoHTiDitWz68t6JRkvVh9hu6d82C",
  "key11": "35xeHCqjLxXDs7fYiGStuBvgJRkNkhm8rq3hVt9jWS1Mx9v3EYmtc4eiFNYVYkCzjpuDE8aqET8NeY5jmUV15AzE",
  "key12": "4S4ewtzdoqtbASF7C4N29VdyRSgXrqpJsL3xAbKVXM9fdffoMdna7jUoEPEaZM9kSqqz21ovb7fTdZwLNVG3npNU",
  "key13": "4RqB9KUUNbK3mtuHXKxRD835uhbTMJwvDp1o7X5t26u8uW4ceAJBYAGR9rryMkeCYnBTBLrKoRP4vAUpScRfQGie",
  "key14": "23EhGtvb72HxaSiMLGTNmrdj4iCcfgzwipp8EZPsJ44qX3w579yMNtLrNjXiTta9fHe5Sf3YAiPxDEiqu6uxebcF",
  "key15": "4rXitK2qTRDfh9TA4npuKTXSAMkno2ptzWVz19XmXR2JkWKSWfevPKQZ8uP5YzzWTcQpdPLSRiNsJht1gwrm87ut",
  "key16": "4e6ueAqvSFpxxQ1ohbba6B4HJEkQGEWCm7kVAf3cBmsymJMq1FCUSGqsPo3xoHMUzHeNguWZbktpbGSbGhC3MNaj",
  "key17": "4iBEgpea8zwxJMw6BGtnDto1Uifv77XvoE788fFChVJ5RNsGJ7eEHPTwyixKnYmcWuiVhDbeiYd1BEMxQSEbRUfT",
  "key18": "PKHQxJMG46CvFQJLjR9pUi3XZiCy4BL6MjTdAbyGup3FpDB4aWaCHz7QaBJAtLxZ1iEMEDcf3VZkpP3YYQFV35R",
  "key19": "sJ2iMP1HaVhyoEe3KW1FbB5ogUdxT5ksqoWYr6Em9Cj5BQoNWutFFippFrYo4tgVBLTgKCg5uJm5CnCMCWWKmp4",
  "key20": "i8Mn8sgeJQCsjUtR9A8nLoUyzTKi71AuETh52QtMjY9HVZ6UTuV7m61iiiGrTp8mdE1FRT6e9A16uiG7aGb2BSH",
  "key21": "5iCa3345bpwtbB22d1aRDh4FogEGZNELPATv8dmkjt2PJprtYrfCzPTvL2oaSnbcF5H2F9DXNASznmK2ChD5qSim",
  "key22": "5hffvWVSX8LqMohgWasq1fZS8KTvzqUo7YhBSTpZtUnVA7krsnJFEQ3St3JGvpk1p9D5wVtgANnYaEYqbBvmCN7y",
  "key23": "4XiK28FxRFLtp8e89FqLmA1EL5iWkg2sxABEWuYgZaKD5UcBka3H3mpF8e9y42BhTjJMF5h4s79kcEPedXq7tKZT",
  "key24": "2mVLss528274B5MjsEL3pAPvdA5NZQ89ByYRWHHz1NrGno1fREo8wXBBtrud3VaaLAYd2bRAz2t1JVVzC1gnUQ9n",
  "key25": "DM5jwNjicm7Yjo8kJqvRfmx7oB4dE7VD7eE7BGMLjWnAhrghYXaVM8yFd7jU2EnpWp8gFu3U7YKQ1ToSdZBpje2",
  "key26": "2EXDYKnQUsdc4W4dEq61QGJkq9B86QCP4SXaNR5PkgZypzDvvM2pqjk5Zq8Tozf85QB3HaDBJVPFRWuEBLBcugjD",
  "key27": "3rbXRWJC5p9x4nEBLvwE5br1fJ58zhMbxdWHLo7gVSYGx71WsYGHEQDsiuYLbYfb6R79j9sEukCD8Q7RvUJLxRf3",
  "key28": "HbTp8W54YoCedrJKLwaCH55vi4b9VivCwyYoMPdCxuMXfap7b44r1pfgLBMjGe5J1iug6XhC6dL3DzoXB3tKzRs",
  "key29": "49WjzS3bRPwMC7sDkpz9GLMM4agFSEJd7PnK57YQF68BCdmZQXs1MMV2inkNrbGisPvXr6wRex65B6jniaJoou6o"
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
