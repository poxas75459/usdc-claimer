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
    "5r6AUikZqHP4F8TqLcDuuHqNVzM9Gr1idzkGogvFtUNxRVMjBqCJX98sms53enTAg8AqvDhzzK8WoS4MT8cqRPiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p6Rbk5kGgYVBUPJnL8JFoyrEqDBXM2i6nGQT6dEdebZRspvPXY9ZiErbPua3fyDRU18vDrdWmK4phcYzWCBLMrK",
  "key1": "JAsFJLakdFgtUCAskkS23TQ3nka9cH2Suc5FC3VaGbgMo1i5bBMHf2RYwd3J5PNKpNVwuTjN3iN3hwAyDPBpXRt",
  "key2": "265GDvxjxWNCwewr2f7asYjwxXxzqjHcAUimthLrvubyFF9iLtfFpWmRsgXEGK6KiSPQ2iVXgKprR8QYKcNXU1Kf",
  "key3": "2hALR1VpGMAj4wj3i4AhRXscURxUneyCAki5nnSbQXbyLazv8SyRUzxZ7oXdrULvNbeYsGfu5eX5bRtfipMbDHPx",
  "key4": "5HMXyCSq83rwHPJXZsBCf9qJ5sMLmLBWCfQMp6aCbjnx3hcvvLrhYFFFAGxpVJowVebkCPGNJNnjcrHb99HhN5uE",
  "key5": "3HDUmmi9cQJumMmQa7sN9Aun3s9hzxNHNRBJiDqg2pEdoPajkwATE41f2RYbHyB7rAXRVWhgnGoAT3G9wofRxpPT",
  "key6": "4vrqcZeCF2ewWFkxwiF5Go7eCLdge4vDNwhw7C4WFDxbp5b5aeFJX9TpNLB6JsuAaL2MFrfJTRyyDh1zX3di7BoZ",
  "key7": "63wERQTR9LYMw7REY5LYBpRrEAyDYW76psrZZEa4PiDfZgMxhqv37w9LY4cPiRoobu65mDD1G8SMTs4rTBHPd6hv",
  "key8": "27LyWibUphQSppMnY6f9JsgenFKQbVWFL2Bv989wwaMQztrLSFX6Scp3g3DevZFy5ZSmmucdgKt1PnjU3ebvafT2",
  "key9": "4bFxtMYt5nq3rceCf5k5qCUrxNcweXd63h2Z9AKyUsoXUy6rFjHWk8oDQD2ZmhRK6gkRwKTZxzEWhasouZczERMe",
  "key10": "43pu8aQxrHrwxiyZfxjWozL1d4LQg8BoEAyyicX65bDe25v4fM1NwBFdZ1Eg44JeHSovA5E4ENis2BJhLQQkXaf6",
  "key11": "2avGXxiGfsikxzqnds2VGExPS8zWbn3tZFispeUqUxftjM1D3dgZaUGSbEAb9hW9ueUzZvCEU6gm4kdHcPBNAeAv",
  "key12": "5WxybziMijTjLtPLkqevBRGz3AnHFhCAKTzxYng6YyX64s81aSVMNb72QwxE2DNdPjZWXrdWDAwG9UsdHn7SqSXc",
  "key13": "5nT9bzcn2QaEzFu7HJHZUav7VnVYjzse5vj3VBeM4bxjAohxFvjKfTGeqkhbKszf57FDBWDv8JPDLXmUGEJLR4zN",
  "key14": "4ewEY2hhkbKFjxD1U1Z1bwtuQbnuupcH2C92K1EjJqyWtp3VNzCAs1MBc4iJcXCcPiA3tWSXEP37SciWJuTKuGh6",
  "key15": "5Q2ThNfe8tw6tFpMKw76erfy1WoNQS3xNZUqDmE4f6nau1AkQs1jrReP6VshPMfRbN1fHSWgqBeht8Tiaw9qtCuB",
  "key16": "4HefbraGcWwMCdCfnyueNZXnBNNCD5afH399A4fQVhK1GmRdo9Z6b3ZCyBUvLxvvkmmo3SL1soiiEhKR6TE3cazY",
  "key17": "oYvWhQwSTEHuvbWhf9cmKQAe5d9e9GUy4xtXaPLf4XxMV1dmi4B2DJsCS67JE8vYrrfFKWSbyAUfp8PgerYtRSM",
  "key18": "3rydMJshhzkT93YNH6Zmc8A7PhqECrjRWr6CdaGYGug7rLzgunvwW7FMBHNZjkKtFUeHp3GFLahSfCFiv6jGieiE",
  "key19": "26RXpDmRuycUdE3kXTDAcW8Lwfc3cX5vmqB63bhjriu8Wd7FSXXjLxRNdCjdLAaLM5i3hv1kt8CvMqCJgVVpKt2u",
  "key20": "26UcjU5cvzkGPGT8YXwkhho1uKxKZsmNS71nvFHX6eKBSC6WB97fZaSjZnjygyKoCUMxrmeJbJkuFF2yi51YkVWZ",
  "key21": "5GHSn3LZnZvUvVohqjBo7yT6ua86hrRyUG7UaVmYMwLQkBCcd3TGuUXJGnnknUWVnLHChzC6McLrMQvYSSPmEYQu",
  "key22": "5rpZv4BGoghxoTUCooteGtDM7x1p6U5z4HrF4tGodcmsGm6WDZxVmtYY8QcrKAt6G877F8x8DFivwfKjD5nLV15n",
  "key23": "2ZPf6yYuXsibtKcLgJG5xipzz1A5BoF17Qo21QiE6DBfYsENhuqvsWosHbsQiAFKGzaesFfmfotnfEjShXDH1giv",
  "key24": "5xed41hNT66RTrCyw5Hx55rqrdE8d822WnzvdrxiXNTi81cQz8vXs1pz2hCwseWHtXYYA7Z44JFfj3Ygw5nPf2rv",
  "key25": "3hjjyHZG7p1g8Jzg26wAnsfrvnm62G9wABRzSYCnKQs4oyGnAFRXdjC18hECQZx8HZM9hz964Xs3mVKyMEmjbGLx",
  "key26": "3zPXpWRA8a6Cwf9mBNpwHvFvAR2aCeg2ZLSQ653NVXbQAGuWkQ8ScLoHLEtSjEMZ8pNAgSDp8nRWicWwjF2tcE9r",
  "key27": "3hytHjUmWr1e9cxPg2q8A3Tu6wwU2fzqDBKgJMJSvSuxDMCEnXJRnPrNxW4Pd33PrwU85Xhf1MmUr84MNCcy9Pv8",
  "key28": "qXYq3Q39GSRFXfVr7cCCs7oL5iimoKwC3B5rRdqosdvKrCo26aKEt8CfTVwuyi2x1d7TySaHzXzhnRPSGsDXLyf",
  "key29": "4WGiDp2iHPhR9Nhm95KuvDQKJyDKUXwFWbtBntoUNgKW9sAjqCsCPgF6yWRvnWjdLvsvbgoHgjNCKzkLe3YGPzGV"
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
