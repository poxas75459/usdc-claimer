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
    "4A3KdvfRAa3rgpxTpyiMqiyuCwmn4XNsoyx4HRt7NrxtFgs87a3hTRA8m4wSK28x6b4oQYPKXga43iDGXYg3xGBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UrfwoytzPWS1oQndc2b1QE9o9KbrN8dWjhtr9pmHSQCSsGvR6a9qotLukB4VvZNLkqYBMXPwKVcq7CSMiVbnY11",
  "key1": "4h8q9NFQktBkYirnHhFMyojXTsU6QyFiScDtgnTrXzRr5raHyEhPCexshd1e6SUhj2QsxyNtVgV4C4tLdYKR9DiS",
  "key2": "24t2LaeFWUaP1b6zhetJC2JBswYkEvsrXmKLXiTJEkrh4vEM5ky1hJpomjh4PTGNqmLthYQjBNEViECFxk4ph9aj",
  "key3": "2uTCYRZ6BBuTn4FT6ss8EA5kDdrXok3mf9r8LCiBTrMsEotvypfDwPWUoTNofLKFn1hKUR32cawPnYgDSinzmBWu",
  "key4": "e7y1CAcfTmm5keYnBXMpvByVKknvGKeLnLhnwtHMPiUnMdkPkEFo6mpRTDYiQyUvbaGVyifWqhioEWs2vXjDNq1",
  "key5": "5RvNJd9VnN3pPi6YfVDx9jGtpYnA6j3LxrraXHXT8Kwm1ysa6sWzNZtxfLRZYGpNCakTyzMULtAo8HUmRJ8jrBGR",
  "key6": "sDWMbHhvpVDJPvF3zga3utXEhoT6sGHbcy4LPXWqeJ1LRJfqfKgMGkB97DQHj84nig1unxETG5wgC4Jm2E83bGE",
  "key7": "3qUtAmkmRtrLWT3AiLwn1VhVGQke4QnqczAMokisqRjzUXE5RkkhJ85kYtvoF7NKznJfbwCHGovA5pr2J8ffjveU",
  "key8": "T9ShigNwLZ2A3LA5AUy5hrPBUZ3QB8Nqcw73YyvTS64R6ksUFwd3DfDK3ySnNULonqNZoaZV7MyDSarSEh4zFpV",
  "key9": "B1AjfyFEzYuqgSfyf8UzKoqMRXmwAnLrDQ6oT2pSQ6fKyjD7oLjXUSXzRqf9dNdNpgrFwF88qJhKUoPjUm8f2Ne",
  "key10": "332sTxoBzc85j2UBZuM23VXV83x9XtRUuA7Q4epTwPH9J5gtS768z5y8L7aaaktkUb1pjaDzjcqSBrJ883tCDqkD",
  "key11": "Gcm5Rmu66sZLetMXkvkJLjUrWjYWHyqRGjUTShUKcWYKimpyEQPkMDo2JwFyJdEpspAPpheYM9NL46QZDSfCzrU",
  "key12": "2dQznfx9bD5qvr1ChLqEQELNLfdVK6UWGxHC7kFLqQ33xtvCNbs4owB7NXP3DSCCh6SfhxCVykLHs7pXGfEtV29B",
  "key13": "3G9TJLDA4vFLzCKs57Bxh9C7y39Hu1uwkpxpjwt6jvKxxtgztbwuNNLfEywbK89jpdhhEJ7xTDd19nRw4WM3rYQ8",
  "key14": "5AtohqpknPhLk66NDk7yTf8oYBH4iqDWUk5ELCWGskFiFwnUzPQEvmh95kxzYZt2zHL6RgMnrHAJmnAPahqLub6u",
  "key15": "2SQdy4g1uYmcCJrnw8gXubGFbGh2PPdBPH6Uq2xz2k1MxKLVcyyMz8GZU6whSyzu9vht8BmBerGxpAFELkcMcZXb",
  "key16": "2d4H1UJcJLcudS6oVXRpeCva2rumPgkTHLENLxDhBtpeJ9adqu4xyDV2JYVUCKWyjYvBRyHautGqFGNoej797CeR",
  "key17": "2o6xvA9BxH12PbjYM6PC2LLq8k2p1P4d1GygU4MPVWqUAEEZfCcfVWfAENnnMHQDixed525PmwsAp1Z8AVhU1WKg",
  "key18": "F3wMmdAdrp74nhqMU9UJZfZNa9r222vJPCcHSo5rFL5Vg7JWbms3UPJqzzNy6doLxj19wv9r8hnovardESZy8xB",
  "key19": "3RM9cFvcbFwFNaTFsieNMzy5VAffzEqdymXzV29x1pzzF3zmQmq9Stm4eNBPCvBCVECpgdP9n4G45mbwhEgRjJfS",
  "key20": "4BRWsmE4DSzJBC43CYQba51trQ14zgZ19GDDcPhUwZxf4P4XhtC6aAYHyvEjumxeZx5zNMc8MFkqGaUcBRqicMFK",
  "key21": "5fDdBipNwMZ7cZBKL2XEQoS2CwoYrxyySY1gFUMwTKYdFUR33acyCRFBeWw7mNh8549xcrofpzZAB6fFR9EAfyag",
  "key22": "3KZJDJq3VD9boK34aLoeYrG5kVmcT639Xsbdm7qbZRYcEx2x9G3QMZS9tr7jMDRxggAz7yCu4yRCnhheJCmQoHX2",
  "key23": "2iU2E28FgganJ7ZvjKnWrs98V6hNYa2x9JRn4b8fcbyXEGDURcTkLG5NG4HAxXbnBXr3oGQs6bYDfp3t9HQ4cHbD",
  "key24": "7NipcdtjLDa34eG89qxVZjUxGsmV8P8mCJBq8sCSABAdTbLta3HjwDrTHX7kpWaAvs15PbGNuz9VTT2NTTw98S9",
  "key25": "56w4VcM1EJiNCHo1gWcVsBAW6kyJFrjxv93c9tr5RkEaAKDq8gJKSNGuNxv2uBmF7gPgi2vZfPmUbethp6N2grre",
  "key26": "4vjkAQLfdSGPknH3HNNmxgTMcf19pffxW1nkB3CsPB76Hxr9EijobrA7YfkWWxwEtjY6xwMUZ2xKsPV1wx2Z6Myv"
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
