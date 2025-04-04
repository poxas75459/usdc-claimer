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
    "CiBBvY3QwmPKgypB4Mmj79N8d39Z8mg2cpmo74ZF83ohYHr3GNAKCQY6aHH6EMyAsaBLAzaqY4NRq5W2akJb4yW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TpWCK7tndPGr8KPNHcJBZjUuBA8ygW7u5YQDmoSouvb4hz5fGY2dqjkVUoEon53MW1MeP8NqVWfrEhAwdQFiWZj",
  "key1": "5VKuH6aWJgcnLc7JWKZ5mGbianGaacXwD2uN3p2xgGdYZB85yrJKEQ976aUFXUzV4m4NUDRLKPMPAUsox2F1bGxU",
  "key2": "26Q6TMrdD5nBC3jmmmfxxnfMgeQTJt825GZXaQDih2ZxthrpLkJNpGdnspn8Ps78iaFRRzxYfviizHCMbUwRKrZZ",
  "key3": "2RNV8kXcqqgHTg4gyhyjqYg8z1M9WbNMA3poksTk34PpBvpMse75TZ4QgGw1wRK8anpLU68PCA4q2wEuDLcarL6m",
  "key4": "3KmUdu8jKNsXwVZ6hfoB2ChPJBrsAPNShbdVRWf7WX9jnst7JM1dHc19KCTxZP9cXqwg4LL3Bwi94hFSSHT5fYwj",
  "key5": "2j3sCnaDgKsgriEidnbABwZ2fXs2rx6VfwFrU4fXq878KYefW79oNHkeWTwhXVXoG14VyPEzf446GenjUSPYWXLW",
  "key6": "2uy6MQ2yjYP7MKmuEPNKdYKxo1UBGyk3ujpYXDxpYoFX7W4WZgS4d8iTckQyaMBCGHoCxmyEEjyxGCTz1yKLEkr5",
  "key7": "2hTL86wFGW7k9wnN9LJ6TD3TRhTdFTRaQET15rbzXCHrmVjsQWJjjfFSdWYjSsZQotiuGqCyyiwsaiV9zuNEu1R4",
  "key8": "bCt51Fx6LUp87jJeEZKY5LjxiHorBtp8WH1LstKLg3sEFYqgpNr7ynkmPWS1Ez2NKqtQ4Gz5WK91W8CoijALP9T",
  "key9": "3wCmNUgdtwRZ7U71D1s4wQTJSCCss3rqW6jNCuriK58gq8joEWXDDHSK4Xam6pc1bcDLpbaaduAqbkCo2oSLf7N2",
  "key10": "pnuaEyxjAYyAitmV3zYk98cSjRmtk1in4az7FFUBb4katNREUHbWt3JQj5RehppwwjPnmPoVYuMnUfiMg5HpLYt",
  "key11": "5QtpAxbRVDxY2WN6Jhdyz3PD9D9fqsqqZMtHUqT8Pz5iCCM7xj8SmcfdTRWwbVdasSV7tm5yi5mTd7qZ3XWMJt4z",
  "key12": "2N4H9hrkvYL7usjMDDa3B5HzqvzbYfKnfY8c9xx8oqqJv8kBywC39db18J33BKXg9n4vyYni1uNHEPcUZuLUxukE",
  "key13": "W1GEyRVZSVszKJQ3c39qkBG1yzYDN1g8Z6hu6oDtHhAvZXY4hmA4kZGtTdZAAAavpmvgsmAurrmGhZcXRo3HfKC",
  "key14": "4WZHNUafzSwUSqRBUk3GQABHoUzzRsTKM7aPK2aAvpMTm2Ht4DyL1mftuJ66A8agVMgxvBaRKb3uVWMwNLHKLLjh",
  "key15": "2U5HrC7tPr223eKgmq7Cuh6WikTUVAoR4jXt41mo4B34tohnRsudAAy2RLS1W5GknDSo8Vpkzip1iuvkRXCkSkV1",
  "key16": "MBFkneUs4sHedsxVN9k99F7acRN7H9Ded7AKtxuP9HuDRFdvQ9XTrHqu4mmYLMpbf3x5hh4fNnGTcb39eUzcmf5",
  "key17": "Z2ZKnP4pq3NjtXTAf6x65pykPX2p5mznSE3Prhw9ghZXLaGBrGo4SRzeQ6kjudphALhS27nF8PQqhQrd4GHy7tv",
  "key18": "31TtKbFHxb7BswyfbehYcmuwmqKdUV7c618R2myHusuZ9j7ff7m6d2HK2DXWsu4PjFySb45w9ETJVzo21dDJASAJ",
  "key19": "2vURFtX1StJu64WBKm3v4w9Q1NiSnjyTuWaeJAKpkp7KtX1RyK22VuZCdb2R8vKQjoNWEcu7D4XoYg32wWf9VCY2",
  "key20": "4Ehce9FSQ1jxfuzAQdXP4csv5M2Eg5eXo2DzLt1XNVYqJnA2irS1QBVEScv54j7BLexur5t34Ng3ayNhNLY3Bx4z",
  "key21": "FLvECNS6CtXfzpL8dHraRyhYamUiZPDL7KgpUCe16FVtckDSZ9fhLJoGpkLnhbeeYgtxaQrzwYXHV4ashcFSvyU",
  "key22": "2GTN2ap6rYa65tNGCWKWdtwKG25rabrvonAo8BuvbDzcjfHWLJhdhyjnxqC41tJBdT47KvodDhC4nDLh1o6BLy2T",
  "key23": "4dESebmATVMMrEc1mfzaFat6dmJimMr2TPGwcfvUFXnqmH7ZJEZH5AZX3g7b4aqAyLLNY66kpiaNQYoah5dewwsR",
  "key24": "3fCdtMoJhSz2gJWYhgro5AqpSzX254Bp5BbT4gneE1trmzGKA8VzbTvmAjYpgHGdrxFRafdiBuYRDFgh4gUpma4H",
  "key25": "mDbgRw8YEqgFog97joYCzfGV3j6VS56cxTBiqFSwGYysaaYxcDNL4dPk5imnZZEhpAbFqFrvzmSGEtCUALdAWSi"
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
