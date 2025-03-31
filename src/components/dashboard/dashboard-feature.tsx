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
    "gcby8dCaGkj5xRR9mztK4KBg2sGrx6e61bVqvUTWZXoYTML7VxC6STm86yMvLiniRhYAvDKrLK4fMo7mMwNYvTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1hPBTqX7YtkbcjhnGVTtbLE1UQSAfxDz6HE1UMTmGM1bT3ybQSeDY3Jr1C6JKeXLQexP1aGNtuzwU1s6QPiKbh",
  "key1": "4cgbScnW8ArBJUC86H4kfeqQ4w9viC4rdqptixa9Zn3DUbZjbEKbRm9H9Hq9nWBN4mZK6yyAAFRADNxef6Ad5vFC",
  "key2": "2CAW2cPFo9rYWHzQS7Rj9gx2PdzBXyR6YguSCk9sFho3WGg9wyJ1LniVx1bQfcKKvhZmZgYjauaKuGYEWVqQ77aC",
  "key3": "2JmXPqkmevSrpyYk4Hpsqen33d8Dr9Pz24PYeGKkDHCAv3Fy7EcHfgbfLXjvMyWRy5haCo8fvGBbxjmvY1DDuHw9",
  "key4": "4JmGN3HXXL6EFmS2jntMnRNpXTE8qhVcP3qCCs3rKvWf76yHFN7cegWTbhiNVW2UAW163b59oxKCLvxHL4Q2Qtuq",
  "key5": "NXkRRHvyN1jJLwSW43w9hwn97ya8oC9ePpUQ7GfVYjoNoPj6HRHZUnh6PgSVikodi2zYHkMDT3E14HBCbbGfogz",
  "key6": "HQoennJg8jyQvphBf6q3ENY3ymBbWQNUWV5PmQqWSrSCeQV5nzxbA4RmDCfThDVoeDAHDw4UeBM4EMs3D6xcJdU",
  "key7": "3FzD9ppRMSQCZ6kRS72eUhkwCYenca285688DM16Z8knd65jcR3dFytFMUUUX7BTLkLH6oFvDAqJBGR5HmUh46XP",
  "key8": "5crRRsaWjgJiWwz72JwEa1g3dNkzwc2ZohGB2e9GFzso2Rqbq9noj7SJLP4NPP3i9QMMusBhG3XVZKZhffDhTaD8",
  "key9": "2R41hkqfvnjRwPBqDztBD2ftB4utiunXxk6wZ72yhQVQ25UM92EhwDnCeyZgqeE6NcDMagXYJjYQBMEFSi9s2dBD",
  "key10": "4mN3MK5oRHpYHufoaE2corJJzqjDr8hEdntvFo4ZPkeQNDEXLsd6YhueSP2WyeMU2U9AnUEJtnXQJincHR1cQcov",
  "key11": "3A6iknqXzv7TEJvJYkPQ7rhnvyaSqzSQxp9JmBQ9fj1r1Y5QuoqmTuwiNZfFYbeXaKXHu8g4KrKkJ6eN9gNVb4qK",
  "key12": "44LudNAq7MTuEYvMA1FkTVyUQdyKajPnCPQEwxA9vn7LK1Dez12KoSsySGa3v3tyzwuTrsyKiu83MG3dQfeteF9m",
  "key13": "3Kr9tvxFadqRWBFhPMYioypUjxBfJAZnrJFhrmYfsL7cayo41xrtnELPQUs8MrmbcpewDx4qoZV7niN5GuABEYUm",
  "key14": "5ezDcwrcmiMtnrdSY5PN7LFvcGi1yKCwAYrXru6zUHYmNmQcX18qQiCSSPk8oEGy2fUL4FEkoY3bg7RymGYznXWL",
  "key15": "5SD6c8dzducBX9wRUGnoFYs8wcS5Br2zEMeYgGM1W7ZYmiddUscT8ZsgYavzgyeojHgjiFRD1AW1BTiAu9JsNRJV",
  "key16": "2Y2AWww43a42Czz7xHt94HK4kcFkk8BXnohDznYHLxQs4Zqgvzxcb687RvXSnkfP1XyoqvKUydLUjh8PxT92EjNz",
  "key17": "3uj9g3Em7qssDuKS7sqDBMoDi9biRrMapH2n4etXqs8aWCk5JuN1f8ApC2SAHMYr53qAaYVM2Evu8ynUBFDjdxu3",
  "key18": "5H22g6RHPde6bpsGupSCoiTz7j1jiQrXNWWrJ7EzoRNPLQqUjpwZoWCQTL9N51ya5XqUru2Ja98vUSTJaThv1Fua",
  "key19": "5Ey7UvAgy7cMArCm1ncsduU1m3xantKiTqdRzmqZL9Y8Frxc7c1CnP7mXbVqge8uW5j4jbLtLAac2iPytw3KHhra",
  "key20": "2D5XLQ96f77tdfCtq2sLYeUSJ5PGNWTwsfb2BvU34BU3iufN2DNti1ncgrTQg3UXRPn3CgtbMsjwT1mWidhperbj",
  "key21": "b4kCFP5QpkkW1v8bMyp6qvyqjqu4G6k7rm5CG63f5HNGo5Yt4NMpYf112yR2Kwu21gjVb1EErG6RbAqnPsh5DWc",
  "key22": "5eEvvRXwHcPiHpYu4fsou3FvGPZirqncoJSFJN4JGbdzDxbq1BvnsKh14QgK1E71SVJvo3H94QaVBYcFE1sC6Uwq",
  "key23": "GxnEs9tFbfYrYurdWqdSSwbgrfeE5BVD7ixKosbETWbm5kaKZn3PkYANkzXNpNMic3bmYDT4mfq3n5hutnACSqp",
  "key24": "497jrpqKqMofNdgjkksKLME65U1D94PNEGfSsuuBSKRTGis94c8ojVbuiJTToqho6V92rM47Je1iT83ao7odUAmA",
  "key25": "3DrPkPe4ZHWM11VxaYvLsDdwRgn3U7mkh6tAKZMXAyWD2CLu7qjTvj99ZESCzRchQFLgiFDbUo7JFSJWWMamc913",
  "key26": "5GyesQzV5AuNZvZ6vhPrXeQpk33y5KmZtuwx9oVgNkVqWwbuice5wbrUzzQaUrXc1sF2XLhQbm9TBtYkMaNb1GFN",
  "key27": "3K3n4fAYycx3jQbqKEi5M1ygVafzjqKb3TXEAyUoqd99vRaV5Wj6ap5oSC99EtUMhLd2JwwL4Eg7ain6LTKWxJ9N",
  "key28": "MRLGxd1zvAPNZ1P4t6LNKVNksCa9dz34rQZnLyj4oQXcjSNJ2qoY61Ccezu6UgTRZSeLzGmHdbYDtWBM3HGV4FP",
  "key29": "299ca7g8453N1ameHSsFo5r385E2hV2EtUzpM15MpVimEVMbAybBqLxDZcfMYrgv7RPUa21MADHQ4QNJ1amTCoE9",
  "key30": "3QzXmZfgZNdPXZgfzUHDzFVGSvWSuqh6zRKob3pMFevx56q3rcko4YwrQtA8G13h29Dj7brkiikDdaWqm2UL4wk2",
  "key31": "2vmGRPcRSRcB64MXWRsgigyfcevYh2m91JifdnotUPJrXFHVhanJfczNEQVXawbXT8pJQv4WiC7XbK1HdQmu4HyL",
  "key32": "2JCsW4zeFkCKQFe4T2AxWkyzwRABzgfq89HuMcUG6ET36XcoPZBqPL5J5caRNXD41hRiGzhH6wqkLM4yzgokr1P6",
  "key33": "3cjDZSt63V1dK3Lh1jyK1NyRqiLtKooS6w2D1MXUQKCkDJVQJpsaLoUAUPx1NNm5gXvWBBMuAhzCSh2XYBsdQxyk",
  "key34": "cJaEvQ2TcCHq3M6sYrefeQ7D4NLnp96LwEiTjWJYBsZ5MKRoZRE3HrDzEaAUqvPmXSChUkLisafG3HdLTZeWNBP",
  "key35": "3HL1kD54nvcLjAUgyC94cH675XXEe6ZcasvkKTrYpjuz1Rc31AyXNL4VX6wur58nDzKZC7ePvxq5apa1KLu72K1U",
  "key36": "3s9beAx2qAWarwp7pRDyp6zDHCJSxCryfx8YF8yc8fCgrncpgHE9uND82iRzHcZTMs43uJ8os3WUHCbpc4dWr66y",
  "key37": "5bC5JNQ5dpjnhPxUjEMccLfH6HFuLyoArRSzWizSEhVrrMuhovBe4AMCkB9rScXXPtqBhPLV3mme6XXVJ5455Skq",
  "key38": "33pJQjndZXxLrf57yMWdh9gQRW91KcCWzgv38VcoBeywG7ar1uaPEcJViQ4SWzpaoDdoxYrzMdeZA6d93s92k9uv"
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
