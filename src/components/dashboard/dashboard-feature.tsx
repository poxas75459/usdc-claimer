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
    "2zwVyvHbg7VhF8Ub1Yt4zwbHZW6KC918TkUxX8oCsaNfncT4ggUbNwY1n61RG63ivNw7B4KdJdZ97Y1oCvAAqhmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47SiEJcyFZHq44wKpHAWtHZyyZbtkLahJGLixzWungXjoBPTGn85sY1n9fRYnEGMpyqPsVAQPDRjt5w1iNj5KM1H",
  "key1": "4xpaJyBqo6fkNXoEfDCJPLPwYtcaEDXaB2LJ9JYJiE7Vj6GTuRXvXNi9v4NJ6UETg9mJMUDVfMABVQUoF2waNxXW",
  "key2": "4jvkTysd8eBNqFSqhTWAYVN455un32teLKGdT1MnfCvipKyZ5ZU7XWDsvKH5xaCrpFjxBp3WCFMyiUhH8NijyCUg",
  "key3": "2qy2qSNu3BnKx1awz3cVEf6oQ8du2RbuZ9rgyGxMggYRm4Gp7zuCRXchStxeun5TDCHPDnL4hLXgAbkyF9s1kkpJ",
  "key4": "44NHPCxJArUssCLjSLqpJuC8itVPi5SSmghE4QbSswiCXoCKb3okrtnay4KjZ67CeTQuhad8Yb8VUeuvx5Vyo99w",
  "key5": "4XrAbDMGK13yLnndoTWYRrQpKTWcaq73QzHBmtCiqyh3dGXba57MJuj6jFhTRwC1AGr2HYsfpQrN9EaaNz3Rrydw",
  "key6": "4vjxn8dAvSfKtkkJTTyJNN9KSNYYCkjmDojusMk9piXpkAee5oMaCsf6cAoZtDMemd8Y6JN5d4k3Copeyim5KCRp",
  "key7": "3xMsEfEUikHA7PiGkeCT7SHyBhTzQUgSd8tj1c5QdMxDdL3ekhzxLipXZrGsKYzyWdYWTCBd269CiNoPUUgv1Wq3",
  "key8": "2gEZiKp7BwZo9h3NPfTgCkzMVLeRqyE5qu91YaXB6eSJt2BnmRsDejD8Hd82EhDhE2cx1HB6h2BdfTZU3W7cLDvx",
  "key9": "2BufYX3MLbrXCESFt4LJYrVbLXfuGyAxtbnHF3XSV3PVUdeBQdu4cQ8G595QrN2PDNkucdwciqye3DwEJ9xuUmSb",
  "key10": "63aRtavvA7bCEPijFWvCNv4trYhAPUwTp1sw9vmP7ZRJ2783vHZsXGqnMakxkfvX53YMtVrrzrLcVp4d1KfTQG4g",
  "key11": "5UE7LvaDD64Ge8XJ6oAuEuhg6NkV69gjB7Gd53wpTrqxoMRH6AMymf3WkiBB8AwDmRm6z8x73CcR6Y8DammToPrL",
  "key12": "629gxGMpc2WMLrSjcJRHk4C7GD8Q2xFkxLiPEFbs1pcnvKM2ZoxW6JPt3vHwPj74F4iNXfzpiQbTWE4iyVSwerXH",
  "key13": "2pFGzBcF7gPGGBkBHNmKjraFmfmo2LTH9iTXv52iNrHLeGd1AS9z9Evrmo3P7FDfraayL7JdvfYPqi1pSjsaher7",
  "key14": "4M1guDB4aJ9zbHFwQKCjydhMnvktxjgpSSq3eHZGJQct5V64ywfx57VDsGR6Wm2EfRCTRRQR2FfWhVyC6zdd1cmg",
  "key15": "51C3GQpmBb6pLkKUtADmKMQQSuNQ2cSex2BPDca7jdaCjs8JxBLha8oUDQKEVT23TUYQ2kc1DxxGhDEvZDCHLqjq",
  "key16": "2ooiRiikqJGgzqwmg4NPy7BDmpzDVPkcq19QyFHMtkTjh6fjsSv2BP2YMome9aToXANCDEKs4m4nAbQYhnj9aPJP",
  "key17": "UuXiZJvS7XqZ5eLWwC6C79sFM7xZKcUjj9mFyCyFqgLBkYmJuLhmhDuYxud2PBzUQP5aaR5DzL6QUwMYm8Nvior",
  "key18": "fzJ8t9D72LA1CpRYDqA2TMcNwWUcggAwK53Yk5UzWQzQqtgnPnWWmhsnX2iXq6Padq1woGCjsm63KZH3TMNTKW1",
  "key19": "4ZvUuQiHc1nZGNsDXwgFTMVMPbSmzbjDuZKPmBNHXG3TRzLdE5mo9p1gP9fU2GTNBSqN3Rn79EhCWL43CYXatVRu",
  "key20": "2PCv38hf6kico1pmut4BG8ApFHDRZgQaXnykMegCXj94oDEW638qspmJrmZVQC1xoxeQZseduLsxwCszvWM9AFZn",
  "key21": "5a5SWbK4pA5LM1GcKdoZtMfZNixYFiegoiJL5e44d11CiMEGxugCRbzi6qSuGZ8QEezUQWy2KVe6hi4DocySe1bD",
  "key22": "5Q48hvhpJyUNiVDtbUqBYboQWs26xSQUGBtWe52wsPrm9T35T7BAtfPHUYEMfGUWmSxfoAfGzFhFHhL7ztgPM5Tm",
  "key23": "3ThimJS1UfvtVhusx3MSRb5EdyVJx7ShB7Yz5krPg9ouzxNJxYGnhLPJbs4ovcN1HRJW4RZFmzPee4pcMpJaGUoa",
  "key24": "3HvMrifFvmWTnxMjwifQRNPTMJmzTHJ6eAAhXRdqdh3QGks6gW78fEd4fGJmSVtEeqDpsvpJHnrPer7hWwhAKNkp",
  "key25": "tvuq1YcBAgmC2ToymDqeQGtVteGBv1T3mYAkkcArZQiUsmU9NDKDbaSuXPTu9dufahtygdVJh3T9aNGUvPvNWZ1",
  "key26": "iBaYVQMbBPB2dbPnqU45byoaGLUNo3Pgvz27fhEfqe9Z4ZswGbrbFscggfaWEGbFEgjRQRxuzF1atmKwpxb8wEb"
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
