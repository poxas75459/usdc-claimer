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
    "452sxgbwAZwFEudxhHvpMyRUFmx9kAgEWMXtKwDpeeZa1sxdG2KamYBdXxmDA5GMZfnmH2nLrZWPG5kk2LUchmqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nUazWzmvPnw4mXkuyv3oTMeY6gKXNxebcenJXRZQwKMLSFUT5M4r9DXttTNsBeXo8L9ASYCrYpdSVKWWqoj4QJ",
  "key1": "2WbrTZuBMSVAQNQ38pr5ubfimdzEGEFJn42QHJ2VWrr6ks3UDGgZXyFruNQj4WpqwVrb2WXCHDgn5FZZYUni5Foz",
  "key2": "4th5Dvw4pnmLswPikRtsFRoVJB5d7z8Fa4swGWt3UsBiHtw77rB9wtEKz1HJZvGzwH385PJxBUDHbbBTQsZCUgLZ",
  "key3": "5FGyySU1RQvpmMyA6HqG2LQWDSmgT2ycoiRW3EudSarR41GJQRHPBe17BYPL1yqGtucGZyb3djy2ggM1Vn4GsCzc",
  "key4": "5vHn8dQyz4eaPgURhungQvYsN6TmqknyXi3WsU5KdZzGXBAvynoWyTzeqwoEYxsMFcSTRCHwRBSibmcsJ5bv2Frk",
  "key5": "3oiKbLvCGsTZ5BxdQUbP4t2v93CBkjAZEXwMF1G2uXJntUsJ1fDY85L5aFvv7fZVWapcFvTBgb1F6T2EGUzwUACK",
  "key6": "2JMxfjFHxgyNTkfrPCfW2pcv2ao44tyiutBqNevCuC7fhyggPcTR1Dv1ropwrWd6PD2QSVHGjsR7B62BMoDnvkAz",
  "key7": "44VrXVCqe8V6awqyBnp5dsHUCaaMz6cVMCVaAmctVXEDNTkKt5XUMujjFsbJwduh6WXKsxJhvz5WSc7wwPCLCGq6",
  "key8": "wxfS3tiCKbWXoX7a891dm7cj7dKaMgnk8eyApVR9MEhiQAsS5hcqxyyKaG6kUuwS8JDGaj9YGmzwdqM9pgzmTY1",
  "key9": "5mzVbhRTbqc3SJodidTygjn4dNkVPFDeBfJBTcLp6wq6eEw8cXQXde8q4VwdViwH7GkW8qwSsF1bCtoM4XNrGk8H",
  "key10": "4cBm1nyNGS14xsFDw3NQAaGhHWidAPPHiugmUpxfkoyoxjc2Woi8uwc4XkZ6SAra7GGqzEPvisoqMayqpBxRZpCw",
  "key11": "3uxSx3hT9ib7GmJCEHHj8cBTTEUepL6rv98xrebLMn1XYQWsViUwqrpL5KRJqXTC7s1Q9ZG4nxCdaVDf78mvYAaA",
  "key12": "dtj6U3gS8UDrEi9WhozJ4MXwASf4ZNiTGrtEEchYNGSUxLSKr2SyftzSHpPNk4ZQqUgW8kFFxjvdeu4gWMSKdRs",
  "key13": "2xQTWikS1VHxd53m8wA4YhRHDVLUE8aUzhFqFrbn83raizX8rqNxPnhquT5rBKnPABUfna2K3wVkey7y3taATf9u",
  "key14": "4EwcYERdk1FfwaZn5TcgLzhA54yMz1WN4CjRGYnKznnX3U65RXniVXXfCcqML5F1UsT1FFoV5qpjNPAwgbyDpemD",
  "key15": "5CZ2s6Sj1YxZqRJ5AcqzvCEYpNfcfHyokKvGmUavyJqGjuATLsAHndPDpeDUnDhMPMd7hgU3DqfKSuF5SzNvVbqs",
  "key16": "488GEAMZTEW7SSuJqoobQG35zC5KABsC3shC9Lkq7TQdQLwDXbGLGqj6d12b7HFdiC3nbrv4o15SYtPD5sBebVmX",
  "key17": "4Ry7yMNbvjwvg8e4KnijtaPe4obj8VyjjffYpryzbkwcx7PB1MM4qmJoKJmFaCBnywy8imgwGgxNMzWXmTG2tQ2q",
  "key18": "4GTe9JemUREXq66cDhgwFUsyZ3iTDyV5H4AUUepGF6jygJCYVECuLpb4VkPmCsM92TMDhi4J3gqDpr6Y3BAhV6Hi",
  "key19": "2dFryQdECSt17euFD2LNBAkC9guuhX2aAEHVJhd5mDzNZ26B6Yh1gVGque1jjAgLxU14dMBh53BkZaikV3rrGs6r",
  "key20": "3ZBVyKmEB1G5Y1z3p4VguuLcQkTmCbofPouchhynVVLv5EoWzrEuXZB5ceocoSAUY5ebwC8cyrZbAhUFXvqt5gb2",
  "key21": "5Dk4wYnT38VxZ2eYHbaVTENLMs7p7sbauZMF5pTESPktSwpBWeueHA94bzdzbFT8DSntTfcJpQDB6JNZiajENBZk",
  "key22": "2BfPmEYSd2X3Mkpsd38P1xbe1dRZhKwd98FquC9mD2h2gbCzVm88cwxKRumiayUSp2bzTf4cnQTtTqbbGRqYErTk",
  "key23": "4rPEJDXWiB4Hhs7hzci1HTJrJpGQPs38YYiHaXJCvdayPrVT58JGsnpYaYPHcMqHpM5jHaxroDegsyT3FU6wJK6i",
  "key24": "61jCKLAfEHVhbpHgny4CBLPj19MojLQvrRpdjqYWYXCv15WtN9Jn9etMvyVUeEHpVSpCCvvKoVihXfmDVWzvBdkG",
  "key25": "3Ew6mQccdMwQHaKkqVo2WMsqwBHgCN11cF7edzEeyaBQ7HPVDmLvzs2wF51PoEvjQGw5jmmqYBCfJJwee4k7H6Ak",
  "key26": "2hPgWybNbdGJoCSAe1RYRtAdQZk3oHVi7p58K4nPKG52VXTB2JKJaJ2ayN1QQLHGYYg5EC1np6QqSoHwNnF3hksi",
  "key27": "2iuY4S8HGhAvfFfyRRpw6uJDEaTtWxS5kPb6zGb3getXovjQyf3fuvLbo3TysUL2SXoxSEmt3GMD1cvotvKFQN28",
  "key28": "sR8nKXA2mvZ9nfUv3s5NHiaURM6oZ8EZgmpPFUNjx6EUHfHw8ULh3Vp7id8iDxwWiJMNsQKeuf9STJN17mKG5x3",
  "key29": "2s1VgG8EXZq75vKDMPAFtUkNbUutHQFqoSzzY6FwN9tXfbertS8sWonbg17njBwTi1USuPcYFXK53Jw1JqsHE5Hk",
  "key30": "a8VJcaAjgNGzXVpb2PrSfSdU9WuEFQ99Br5t3gT7ccnDNGcnYjo637UhgjpfhpyNs2Kn3v3sEpzogVr7CyEaJRJ",
  "key31": "2Cvewez2VuKN2szwNdfhw5YAWkgyMgaWdkyGFpKEaZRPQ6vcGZFV48EvQEqeRUDYo5qoGRUT4jDWYvghzes2h9Rc",
  "key32": "kaDpTewPkK2PzjZTiHnnyVKJYE3AvMTCPKxzjH4RkWMuMMxz8HUEyE5FhjaC9pdnUenN7e87TYSf8xP2ZxpRtv1",
  "key33": "MnN2GBSJ7j9jswdaBgXmZNUCC6xn2WhThE2GsExY7AWrgTaYQJfvPpEEfVC5MQD4UYD6LxL72dbx4mCrD2JLRyV"
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
