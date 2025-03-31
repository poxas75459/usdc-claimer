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
    "2FW64rLwXZ1hCpLDoWGy5NPKara9oRyaj3ocCdukCXzS4u5NEkmF8BQtNUqNjEAchwSM9vR3HSB5oGbAA3koLBmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5av7MsQWGpW1X93EL5DNks5mdsrkAEtLWwsd6kxsx6adjUuBn8NbUF3sLm4mpoj55BAXUN7F5nZe33WTdBRc7qnz",
  "key1": "32h1d3LZUSU8HKMQo7RSfJyKn9xb5TJN4cMgRGuWVUMXhE6m8Megzx7FXZyQRA77EH2tFwMtBx4SEu6Bd98aDft6",
  "key2": "3uM3oxZauA3S4DaUA5mnXdVXLvsPZfpwCpMm6Ld2xZcRAZiKW3tE8TnQv4hdG7rAKnHFox7bGf4jRNjwz42uhEbZ",
  "key3": "xvsvwJhff5KNoxq7zcdVDrw9ba9fdF2wQ3d5Wged2yQu13TRnY1GZ19RZTcbgp54mgadv8TjiVtUghFWNbtYEMi",
  "key4": "43BdxpugVyQ81pE3LchfWEogdazMG1CBjMGw2jtbPJAPjfcua7D8LVs3ABZEzKjBh2HDqd19yBS7VWZCaPpdhHWj",
  "key5": "3JQFUFGetP3T4BVYEYrXLvuTtbpoEYHg49EgebVbWxZszNFmoMqB9Dzsp6M4EqUWzbD2rHZBTYR7ieH84KcBLYjt",
  "key6": "5iz6nXhD3ZrVbDQfbxpA51jhetTV1ULcatzzWPomP3yLS6mV6EFei6ugSSz7721Esrz6e2sA7vRiuyXuAmqzzRya",
  "key7": "4oWwtbEKUPdabMUbTR8b2GkqJn3SH28TgU5mk7yiVdxgjEoHWRko7nZfApqqkBJexuueNujZBdLJ2RsRy3ZSrhuF",
  "key8": "j8GRAwbRKxJSUNtBYz3kt5aq9KacZP9Xyg78JEc5Fwzm9jcBqmsZg88dL7KrGUG8ahjMoSVJRws6Xsp75sWFknX",
  "key9": "uS6sKDSVuoPTnJ9zAx1QUzTgJyvyj71BDvRpVcdRa9KemeZ1CDRoBcCTDE92DtMMHssX7CK8hv6MoGvERGUkV7y",
  "key10": "4jU43HdUPwx7wwhuFG5TAH36uUB5HduSf3btuWp5J2Q7sto4wLqsA9jPGmoNvALyu6BKLgGoFRZ6TgJWYDrmepdh",
  "key11": "52xagEbHWAiJX76yZSzjMgnHsxWNPjmt32BYzem8at7fm525CuXfuCexCdZ8Yd8a6XYFG7xk6mGC7v9Ps8oueVSh",
  "key12": "4ozg6sucMgMhTntRyLxcZkWsKsi43ugaZJybWMBzL1XCJBX3NLiwjWZs7oddxnWzwThNRRYZcPCWfRJZemnudBGY",
  "key13": "qQjuGU2vqnKptD46WCiXKwVcy7heUFZgJQAQ8JEoJt4643VQHfCtfUrEqvLGqzZ7hY7jSZhi4534Ac8ukCAhNWz",
  "key14": "4ZpH6tn6SV6773JMiAvfJSCPHNkSyGZs3eoH7rNwsND9WdKbKjxUeviCJsDCQjUzHDTTB2ZAuFaVXEx9PC2rfHQo",
  "key15": "4GkJXTj2TRUqqSHJuLfP6K6dRijuHcS31FucGh13X65HgmrtPWxSPUowCzF7WAgpxLRbSPWmqBa1rXqr4mQjyaXV",
  "key16": "bSd5PZPJEYWvgrLcChMfRTXqWm2b9jf8SjjxKVNRpeX5aFdo6AKyCvTtS8VD1AVsazdEhA4MjZmdj9B5ZGTUwrs",
  "key17": "2WHNk5xJv4Hqz2F7fPbeRS6y4Nf1tcqataGxLnybLaL2bayEVXAsRvNKhBJaSf4Q7exfHxSJmAeGav1ayCgvrAuq",
  "key18": "2gSjGJSaeftdFuzMGkiGKtDdjPgtqAPTfQMFmNJ4kadhA3KomoaVrAdkGmnzQzXZWbRiLbZ2A7taQfCdvywhwaV6",
  "key19": "4xgncyZNg2bmZwwQLuh975jA1fvr58fzeQYbsJUuX6tPWNgT6gNDN5W6wFVqV3t55USpi9Z21qqmXYEqxQfuQmxP",
  "key20": "5d9B98Z1JMsKWMH9XJc7pSTipfBuw3ARj6hCP8iFRMhPUhawc6mhstFvo3JUsBzZX9kei3uJfBBEPyR5dc8ikJmU",
  "key21": "4cfX2WMokETxhA7Fcn5LDToKByPuGtCnTMpuwjJLbJsgeiVrtyKX88VTKsSGf8WeADmCxtYGYuxjQyG8MYgH78ZN",
  "key22": "3wZJZJ36dt1ErnoTFPwsYGxiTVGYC7HRbLrAkdPbqX5ZpSotNGnDLiCBuq2yzA2z6qKuq71YMsy8nsr2Wi7Lh7tA",
  "key23": "iqV8Y3mNo31JaTKQr2QVknRhpPoyk4FeK1bafhiPFCGuQEmnaUf1H4SCY564CM9Fkq4RijwHnHHM5RNEWVGwdio",
  "key24": "4jbkV37VHi4A4kTunwVy2B4vqUvj3qu2f7R2mqpAU7qBDmp9GqHW9EReBkK7uyLarM8zztb5hNE7Qh8s6P6fehNL",
  "key25": "BEqwtk3ADDvWdQ5achoTSFFro4VaH9Hx2UPzXRmZuE2YkQUL9qrJePPZypdby7jp1GKPCZNX65gChi49QAdxyBS",
  "key26": "5a1XxgPgZs6hXpLMXfMtSnGeLo6TAUE8xoi2iBnTeiEYAykAvNKzD5Pj64Q5eZMwtqPRDzvH8QbXFDMwavXWpccQ",
  "key27": "3BSaar1r5ATQk2adBBbYZsLZFnWrg5HCQ7aavYbcgoAapSWdayBU9a2GoJpUFbRp1v5WucaRnwSTpAbdNZMD7c2",
  "key28": "hkuavX4E4XkAVNi9Z5kDS4nZQ6E3ma2XXDBsCA4s1VhBJ7nJsQvxovAUoGCV2W8bUiEfY5vJfQsrs24XoKATa1w",
  "key29": "tPtaBXqHquxXPNAcQbgmn3Znx8p1keUNPLWHwA3P6QNZFxBxgg5sJGVK9gPtKohb29SPFmgwBnH9UoGLeJ7Gqjy",
  "key30": "XZ5emmPpo3fVKwZidiEkUWAo5t17Cc1A6rNEWjDqUhieLWe2syoxAqJFqGSjArX2ksuDGKiZ7FygipsRKmCjuBp",
  "key31": "3Xrj9YdQYtxWAap5Kc5Z4B1akAuj9AGcUwm6k1F6nADf9ugJhsPVhmBAFydUWZRRVPBrDp84F3dP3wWCieYztx8x",
  "key32": "54UCw2xEfjZrj35v2TCkqdNTm1UdGCW4kiXaMWBPkMXaFgoSpNRdTYknUiAsh13tWVjj1SJG2sVQSvT7AaKghhVM",
  "key33": "FenBwnSmafsDk9dYT6Wjj8MRfCJgLaEvmzTdzp7yKAkJhz9kTAsfij9ATKjLLr2D5gHSNRFmBdP3qCpkUKLP1Hr",
  "key34": "4eJa3GdrT9srSwYgnadjTPEeVC1CDvyiLGo62VSx4CCGPxbv7QqWCsaEqnGH12RE4Ve98eMMuj2fUCKRjhkQZ2Gg",
  "key35": "4RfmAgcTEKLp2cURQpp87BZqTkkLUUZVDqqN2KACMFALREFveYPcrD35Vt8XyDFdFR1WnXSge3Pyj4heyR7tM8Gp",
  "key36": "2iN1TnwAuvMn6MDmb2LapAFPJiRGdu4QLTZjmZWBaqpJaE4KTrHibWA92KwRdxA4uLoFHfibv4YRBreC1wpKZCxA",
  "key37": "33PymvJXA8nv9G9mnsPW7vctwojgDvKfhtgKXwfAVAL66zTwhmQzjDAmNDVBqKG9mZG5BNZJHH2t9JUwrN8Y3kcy",
  "key38": "459gVEHbSLdEXRB7LWeJAjgocvscppHQJHBmpwWubsu4zBeMmbd6QbPyPZ8vaAFEgeup3H1mXNhXuvWVAuZKKQyb",
  "key39": "5CiDH1VqEM1whWTGfD5fMkPNJ7YX9jvdzLPQxiqK8LBUQnU6Bhh5YrdycUZrz4GAXn6gJRZR9SnBRDzYHMQxfUBQ",
  "key40": "9foN1c6d7m8kqgovFB55j4tXSSF7e6eKZ1W1d6TC1PDG24e7Y5KjqQsmkn3RFEcEyyQiiMPFR7XY7ZvTaqzZdkW"
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
