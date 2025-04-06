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
    "4XwHmhvG73HxeD2nMeZTGumjkWz1kxBBdqyv3Z7jWL6793q9kNuEMsyWN1bHY5BcXN37mjA19xwtMfuoBTRazCBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h78zNcQkwfUzjbUpuZr5YRXLt4CMAsYugahy6LgHx36sZDEXz56gwmrcsCjjbwdbvActggXMSg6FuPfoTJDAR4a",
  "key1": "4qMk94Y7nxQwD9npdwnaYwLUJFakaE54RdRRBa5bG9gQybEbtyPRHbAAfSeujetqoPzGEykXbhPjjzD2wt4UzV6A",
  "key2": "2EnNMCQPgEENudgjjCiwJ8TJbsfEAdGSR2VisfAUavUWsmqWb2t3X8yCNfymwKP1dwshqAxyxHYw2FHyNuCWDMp5",
  "key3": "5x131GBxbwBXjLByW5pbczMa82LW2sQiL67s5xwZjCCTSBGS1kjJEAtK6tfBs2iw7wD6NQWXtjKmGqCr5CvDKoRj",
  "key4": "4Xbrh5cPT3aZVt72AmTedixu2MfY5gThTiEouZH39fE4nL7WywVyXVwwh78RBP2md3ATYgmnZevwQDKa3mz57RLX",
  "key5": "2WNYEm8qbmn4QyyRo5J3riDQfRMwKGN2CHtWAJmXSQY3cUsoZNUCwo4ryj9dcGhx8wZKTJknAQRUdGUnJ2t4Tccq",
  "key6": "23B5sGYn3jW8AuiD7x1Dy63sPxEB8YsNroRMMY9kmXuqzpA3tgxZWojNQsg59dyLYarAPLmbQgP6nxEmrHnEDxof",
  "key7": "4HzembaUzKGBChWApMvTrpg9E7Lf58T4bcjBTDPcebKGrDC6LYBoTyQqx5pdwpD6RYtjg3dVthoBDS51Xsd7c8su",
  "key8": "58GmbCNG76HPHto91sUSd5nJDXJhxoLf3WrhWHKDqkzqntqSPk5qLJ6z8QE6TDMDFZjmcfPUTqS6FUaJdbNkLUgc",
  "key9": "XK4pJN4zefRMyELQ4EDKVeec93uDViCHKaiqDzfHeEuhQZ6muoxVPYPzUb82DJ1K9i49hbFwt5AmVxaW1ZFWx2o",
  "key10": "4Ea7qN4oYMzyhxSEk5C2Pd9yEGFNDoZPPhLT2ZZVU4ehjowk87PaJFrUuEXdSRPHxj9D831HKdPYFR8DDvCHwWqy",
  "key11": "4yv1RSTSoXTfpH3CUBqpvyDWWSE8PNo2tBMfTLoqAtNK3gXFYCzwVuEDrcNwSTBqqK4dBuPZEnvTQmVuFmZqgywi",
  "key12": "4TM8126jQhaHzmssDjKBAYpgFHgLMPXUXxHWDLM6GuGdnz9dGz2YyUNFSMS5R7AqiQivJjG9JYb777QKsFY4aWvV",
  "key13": "3QzLq7GJoHTcqNvxjLQkoeZDDESQRJT1WWxUCBac8HywhvohsE9xP211WA3FRo5aZSndL5MzYhCh53axXR6pMK83",
  "key14": "5gYxsrvxnBN7r32YEvmXBaJsFm4W1i7Ld2mhHbLCSrVyNkJqA7fUzxxbXNMYQeakqy9Dc6h6vmAcA1Ro85rUST9x",
  "key15": "2n7aC2QKwLjwHYAC8256vrdALDCX4zHkANU2zSmE5jfhagD8NCR5jBxs8p54F58Kzt97eTZEg43jRwdud1PetMQg",
  "key16": "3XFxCQp4sYkmQLQ2MtdqkbqQwoJ3Bwu8UsifBZeru53UeEcGXB9pYKz6RyhtvyjiEG9r4Wrqm9dtAqA2d9RhHgtM",
  "key17": "5SMsGQHid62Me9SANNsFkafWaLt5xfpYgYZ5bF6MLch799rFgxX33fLaGy9Y2w9bp3qndAuRa5mi7y4JxUBoyEfv",
  "key18": "2CaTm7jAkhZnYt3dwUW51aGdbUZrWbv3FaWXxU3vU6WqTY6Lh5Zxgkbe7tMqKJRMgWUJ3TeCxzr8U1CWyNSDEtmw",
  "key19": "32XK8wMZnLqQCVF1hvopf2gXMMpoktZFi1wkxCM7iu9QRobro4xMMrQEgHEToXeAdcMXPUvmJPGMY2DQJuDF6NLk",
  "key20": "5ojNyNEkbmBCz2HAxk6WhKpPKhoKDirkNjBfjKkiMgfAd2QHYxKkeA7cewxddAn1rnMwjBVnfhWUo5hZN4ak563V",
  "key21": "58sLrMwvVHaqi5JpWWQZZrePx8DnaCR54fgBWsDkDbGdME8zdAUWM2263XZ5KTPfSTzRHc5mwfDjontgP7EcTDdV",
  "key22": "UQGoPrpUP8zeQph67AZFqA4YAXJrCrfLGnbLKpUg6t7YDVcJA6RX9JikJkVMS6hR2kwfFcx9EWqhzfPU4LpuA3X",
  "key23": "sfw4N4qDWCdecGBYzqa5LXzXeYd47y4zR8CvMwvVZw6xEGMiPQqSJ1pCTT4FEXmRjBBkGDR3We2T3dwxry8rBdH",
  "key24": "CCfyw4g4hbD7rp2Xgjqm9v5CBDBREyzqcc3eyqiVNUsFCEkmkDLwRQQR1xrbxhjd8jHJYyTQUDbuWvjj5BY7vbD",
  "key25": "3RVAVkfFbQoNG3pAH7iTBx7SyDPiZiPjGyUsB1WEoqCeJfN8VQJA18aURzDFqceNQG4sCn3D7mP2pQkkrNqhGC3H",
  "key26": "hhCzoVAxRFnEkEqEJbeMVtuKmvv2zjo87eutvfX9YJ6MEvJhRioD1gAmytLST1jUzuQVSe7qTU9UmdF8TMitcPq"
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
