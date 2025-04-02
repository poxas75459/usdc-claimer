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
    "5Z5tzyDHgGcDnyvoHLRABHCUyfaNxEyRyrSS73VcewvnUEmRDJw2vzf8wU3xw2oAontz8LtxNp3w5vCvARX8rbGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgB9oQAkrTxtbuStaH17Xxh9QAJN8KwBis7Q3fWJ3A53NMdqg3qVxNYUwMLKW9cqQ1wbq7EK7zqaDbJwBUt95dE",
  "key1": "514vPWxGGswpHF3CR6phVxZ2ufWnYE988rmSuJ52BRyrQsWwhxmkut9H8nXWwTcJ6HXcikjDWz6nwfYsT7s8CSqF",
  "key2": "2SgNjBB7v9HgaPZMusQgCg7eRabniUuEiXCnBrTCvZ21G9JBR8jsrZN2kZ3hi33kTuSHAufypZQHZXyovvbSsXgE",
  "key3": "4HKscPGnBbwxzAUqhDpV89NemePWYvowABobSgKJv4RgtYHnvjRSP7JwajL96hbNavGgDgzhpAZkG1V6TaTnjnwH",
  "key4": "3jp76DjLvrDAQmwAbpgR3DbwhGbkxcvPdmZSG7M7Krt7oH4icKqvXCMaejP8Y3Qfp6SE1gSRs9qxgyxw42xv8d2G",
  "key5": "4kHrRzmYaubixHK6hpnNZDwHjREvRtTRDYrnXd49xpHPPmK62qWLg4NaQ9P6cYz6WVqTBpthKdAypaMVJSg1L7KM",
  "key6": "2gz3DFSsQcjxnFdRmiAYqmCrifLSQFkNYvUdo3nj5KojXTroTnLh894Rqvu1uAQMJJVPZSrGniKM2JEuWi2nvMpK",
  "key7": "4jCNHeL8KChtmNiWGbWPUTMJVtsPbyKxacTLynFfHxCHBbXfHEYzF9x2EYgK2SSVAasbVRMkTh1nyguLZbShjn6q",
  "key8": "3aePDKpJVpWvtDfndUUiXLc7cJz89LXHQQVBezY3XurkbPfagAeC574SmKkWpZJqho4ygZVhrzj1MJEhVF1CXLrj",
  "key9": "238YuyVGUUvVXc9RjoyeLZeDF2JeJPKr8EWRipNWiF7AjYcUnR7wQr16sVKpWk2e6jLGtvT87h2GNyfaY5GkxKv2",
  "key10": "538bjTukCKfrDrkfiErKWxsKP6MZAvJrGSj7nqsqXPyJSzNB3BQM3USEoWG62TjELgfFmhXnAkXJ1eLN2yAKotVp",
  "key11": "3Kk5ioC1tDMxT21CtkZEJP2WppUAZjiwsJqAuaKDQLyThmd716P9qj6mC9GrzYyZ9vme5Uz9CeLGbvAfwztCFY7b",
  "key12": "4RTBFoRRkVPN2a6geEEC1zdT3gbuyFyVbNgNSqbNY8rZbyBCcgQWiH9znZ8UNK46LgyDJjQzZjqZ9oMAfMrNKo6j",
  "key13": "n18ykfdzX819CdK5QuacFbx1pA1YCknX16b6qhYMRYLq4C5CWfgLP3GT9w4bcu4SN33KLn39E25SbdWLQgTECYo",
  "key14": "5GkbRfsg5ir6JsRhC6CScXYNBLhghFKTVtmPeSGpm6SGH8FcNrq5SNx5iDp5sruDBV1ihPZavpFB4HAFDtGygizh",
  "key15": "5AZqMoV33cLs31hdQHF35qhSrNCbRsJofUCZaKcMPN22idTxNWMVhhmdVxrG9hGJnTn5qPXfTgCLst7s2xU8EdDY",
  "key16": "2uB2VAJ7fwWKrT6Fsw5LGSSBavcBe5uWmJKrJBNaEecdsegnaL7bPxMAyDTbsjvWWo9Wn1fEcTQ7y3k2uEgw5ugs",
  "key17": "3BQwUqmFNHUfJezfHvw4pEzbcFaf29mSjpJabhcWxiasXvryyFmy12btVKqZ2o2z7pwsFH8Cy74Up4pzy1sRiHEZ",
  "key18": "5foN7PmWhLXLimrXnnAYhqTQN7oPfX5zvirNpyP2eCJLdyMA5CL8HtC1farisMK2FgeMSh8ZyhrPdVRgkaMSyPPX",
  "key19": "58fQrHXD5LGqMNQDYZDHZZsHeYhfgQ1ogynwYQSq8wP1eJCiiRyDYhMB2VwX1iqkSVgENXhFcaZmTwp5aisXiqQ1",
  "key20": "4bAG4z72KvYJNgTxWbeKAG3MNJKJgv5scmizKWoi4APWtqpRg9traM27B45DkdBCBCNVGmrDJLVDEu7R84uLfXLY",
  "key21": "5Xk9TLt8RoWduQsNbDs6iMjPg8WyizbZUfwJUb3MY7rjbvwYa8Fm5gaSXxzRGvfDzM2XXCYQ1NXB16ZAnfuieoyz",
  "key22": "25Nc1fr6eprRq5jnwDnViJVW2hGBG39XfhAuRrTXue97bmjwZCV93aVL3byDhppvbqV6Con97VGFvdP3CUWXwbKU",
  "key23": "4dSFW1M6TVM8i7rdv12GC7uV95AQ5PwaEtBSvrkP7125kp81rnfp7adVVSjhdUnKhjTg7KutcqijKp7j31gEXoEU",
  "key24": "FT7EcG5MVvQVzeg91kRjTDU2VobRN7PL1rvZAFZ6uwPLAfYjkVCNAdwshoELdtRY12zAYuoTxqS36f19iiRADuv"
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
