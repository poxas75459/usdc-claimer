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
    "2WFftRorTBZpE7f5sGMP6eDQL4ECyQAJqANRva9DkwiQ2BhkZhFpe9zkwpe8QCZLbjV7oAsfz1LizqURAXKNvkmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57C9sygYf7QCa9epCarv5RbTE7okjuGyDFLYLjEYJky86L2bQcndd2gngUXyTDjJi21dkdkUTZQVGY75hHrzfPRr",
  "key1": "57DPJmFgmwP2UR1UD1asWHyX5pStkP2mf4w4b9rT6aZR3TzJvAM8AbZNEfBcWnrGia95yfwGHidMxgLWsnW47CVF",
  "key2": "4EQWqytzWFHMpMup2kbEzgwwydwNJfF4RNjtUbKorkb8JdCyWqjXjUJ6VxhyMsKF9twWCZTSxrPtTPu4jCy8aizE",
  "key3": "3k937EDFkqufNCkrfqqvRZWq64QBm7zeZmDUMZRHbQBediZWFoMhRBKbCmggVhH8Y4zLGBTmj38PpUMBTmxRg13y",
  "key4": "9AgWm86bR2VtmRf1WtTWaf3384KHN7uaMj31hfyptrti74AiL5bU1kpai4Toz8DtPU37RjrPyPanhWmQ5ecfQDq",
  "key5": "4nc9AFCEgZoKPreE5HV7DgBMVdQqGfLgapgy9up4Vq7p1tw3R37Kw2uhCHfDJ3sDP2hkxPjGsknC33YPSAn3drBZ",
  "key6": "3s8VLsQJ4yUgzVBzFHvPPizJng9gBvdkfHdReDRuN5yxNd3wtj8y8XpNnJ7g9VbhSSFJcrcjSgeGgP8tGsy8CBbj",
  "key7": "5h5ab97Mg9sCuBs7bE2CVLZTxq3iVqfLQkqgyyQspPgFBHbkUXixyF6Uu3vPNKzWQhidCQ4JwMcsKdENUqR1WZA2",
  "key8": "5F79SZasheKmr2HM58UAtNM5R4JHMDQGLCGLAPhi3wf8NnaJraw4LyigwEvfoUCTvUJeYQ8UFMmNoRiZFbqGmpkU",
  "key9": "fYVdeBnsXySUkSt4cWcCX7TXFyXbkk17HbftA1sCC13gWcbxHusPNXzXC1ZdqfHQV23Vh7rz55K2Vsa61Y5UUP9",
  "key10": "4K3uCFECWdRzkizFPoo5zKf9jgNE5YfrU63e3FoqE1mWsruG9r9CQaGzKzRAivSiJEpHJiaC67AaVuxoM17vVBkJ",
  "key11": "4vobkftYgwDzpbNcv5U31Pz2tkT5wnsknEiCjurdFkxeg9gkMYeN7AcxaJwETWc2yQF3QNa54ppbvrAVGHTSdN9D",
  "key12": "5Xa5aco9a7hyZsFeZMm8JWg7JjNQSMQvwJBwsr6D1owuruxDYg2mHKhJ1kTPTtohLw1ZsbMLSJUsosXnMZwECr8v",
  "key13": "513T1Gr1yQAkC2koTbN61GobichMvNDSr297n9LjREq5MPXoxnKzLv7qvEw68avzMXL1uKHgHNY1tzqvDY4vYQhK",
  "key14": "dnLuPNUQmMiiiH2x4TMLBzFFsTanfJEVbVdbKqkJ7sXjK3gxMs3YSugQTNnVvKnJZ7bJ52CTqJE66zwxsqZj2wV",
  "key15": "5wi7Q8P4Rr3r93PZ4KXyuQxgGg7VqEn7PSofeCrHSeFRhjZkTiRQ7qvi7tmxv8UAiKWn7V5E3xnhowWSgqU2FcAa",
  "key16": "MTm8mzL3Zp7XVS6TTZDp2TygCo2qFje2RzHM77sBSkLJBWrQrGzrLH6vpB3pCAx37NVvZogSjY2XGH6fmCTP4C5",
  "key17": "zNfpaLWizPe4qZBKPGB4cf3C1iR2x9bnmX6JFZWGmcfZx61KLTSnNFVmugD59GRvRn849ymFiSPkYF9CDr6VyJ7",
  "key18": "4rX9ehkg5g3VnuDbDikL5ddC7QsE9n9sZiV9VgCD2CoTEh53RYew2gJKVDwJMEq48q6tdAFHMi19ztLZDprV6j9P",
  "key19": "5wwxgonTqphdRvbCbhQWuoUauafyNaWW1KbnxgeBj5RQsS2fX6QSZ39vNgNSAe9xiAA9j4Lpe3mSLjVGXW5x6VNc",
  "key20": "4twJM2HPruxjG9GL86iQp9J4JXW2d4TmLmd5zuLDNFAj51Xc2oxau3DULjjrqbnfvs4qtmEScNCiZFMwLphQrY6r",
  "key21": "5nJkJ5iNrLma35ZAjZNQEQgSYxumsSR6QqXUTh99sqrBjHEf4PW7kZYTzU3FHgtRATUbTSYa2iufmP1neQysvpCc",
  "key22": "3mh9YvVPM292GUSUMBidwrQhhh4Q7HU5oZTXBwqgVKHwC4iAebGpC3tMSt7jLpWsSvoMP7ykUXLaki4etMt1U1WX",
  "key23": "5cHxtwWsQwXJuM7uW2syuEME7v1SmxNfNjBdmf69R2Juok3sAaEqfA2us2o4EZeAqbVANpgFT1VLsMHKEru6nAGu",
  "key24": "2mEW8CAuVyfiz89smefqd9Z5as1dGsNi94fpAXWDSPR6K3Cr9GF8sr5KwMaz95z9gDqQh5WQj7avC1xUCiqyLSDM",
  "key25": "2qeAQyoj96UHm1bV3bEPjNZGjXfWZFtcS2RVw4AtnRPKfLixPfUEW63EoFLX3D4re6G8eGZUt2Yjpgq4zfHvctRz",
  "key26": "224yTbtPJHrwhva9C9vA3HBdjUzN6ZNosFXvPVm3w7aA4PWUYPWxnJ7YDFR88aDmRFM1m8d8uVfQSFubuebpLBRj",
  "key27": "EiYdwfdDp7FQyydeG6smYo76LjnE6H6hmsJ4vGsoXCzYQiHFmfGhzg6SF8sdmfFxuh4J1KE2b6nEixJt2QszY9i",
  "key28": "H3qh6HK8MVb6ARpviGTbQqcULoPtfQfGo8sQXaQLhgYwn9vC7eZrHYbVigUFw7LBat9wTrAYMargQC8c5uPBa3J",
  "key29": "4AQw6zpPHiz5NDBnqWw48vSXrdCerT2CBN3sc5eU1xP5aBEJpiLSFb7Kqkb5wRbVT6Emjyc9RC5Fz3Hfizw53Pbw",
  "key30": "5S1mmAVeBdKxcccVfbXvqb3akAPNGyv2CXXQQ6DxqrWDUTbsEsVb9beiddnyQQNpSaeEDCt4pKRoa3y3cnGuzFnA",
  "key31": "4PpS2ChgNzsTsaVHyGRWZox2hkwmhZnaMCmTMLpgX7Dw5bnw7MAL6YeBDwFhqaHXLmBZM4mcchvW6tXbqUCoaZmy",
  "key32": "5DsPpkcFhVuxU9vZVGFkxaeyG5LRDh1aeNGpWCD3Ntoh4i9SFm52Dt6UXgyHkVxSzAZRi7XPM3231eEmxpFWvZjW",
  "key33": "53FWnVc5shSv4gWk4AWAbLZLxQUBw2YrhukNTU2saf1DvBfjfjKPXS4FeRmMyDUi6fhDHe41BmLtnWaQJ2YuJuC2",
  "key34": "21PittzWiMiVcdVF6dfLfCeS9wKNQNxxXt1PCcxh1QYKLMiLigNm16YuNYNGgMz6SdX3oLFt9SLPc6YfxqiGde5Q",
  "key35": "4pz8juJi9EaufjcPywsnDUZMA4aoWEUpipmiyDTx95oppmEqU2BPHht3S61Kx7TEZUipa49Yg5rNYVuB11TkXAVJ",
  "key36": "2eDJ6oDAWW1bLHAPhGxL1dq4LfNEv5dMoeMxZLCoLrxHDW2ZCv5xANTzdMPmceB4vPW8zTuNEFFK9BwgUUYVz8zy",
  "key37": "5QRssWdaS8n7wiGu33c5327t6TzvBnDYyuPCDhSAr5K7sGa6Mx9zR7gZA227Wc3hTPuPbdkHwM3tAaBdG6q6Zxb3",
  "key38": "3EAJUgTiMPe5fnF2FSTDE6jCkp2pqewrRQRD7f6i7Z1iyXaco6PqjbDCQjiza2fBzw1BhrmprP9xWtRqn8PSGM4V",
  "key39": "5ypLjfT8ju7f6akB25eWLyCpHjFpL4r5BySLVRcVSK6XnfQkzvVGgJfqEBzGodGXnjVQziFyMe5qZ5EjVKYX1BPB",
  "key40": "4zJHuzUEN21CatrSAjAnpH2MA7qtr9xVafyiPqZuvYtuodXAQWwWDGkoKRdbwutJZ5bNqX4JyHyMbUNh2esDh2KH",
  "key41": "3ttb7xfGr345wgUkPpVZEz8GjBv4NFRJopj7p3ego2TvRttdmhHbYso3jkVHHJdaAuup17sUe3LFUhbFWRz2uRLJ",
  "key42": "2M7t39cMS9wQ5AGoBQnM31kgqJm2hyU6jhTbWiyjnyxM51UxMzv2qUyq1sx5bHb6YUQVXh1YLESLzjYvv2GyjMNN",
  "key43": "3fzvcP1vZrjs3iryt45Dr9ZjnAUo2dhNgm7gAhK8NrqE1p1SGJkHiS8A8wChDx2acpaDznFg4g41hyLap6NUKAbj"
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
