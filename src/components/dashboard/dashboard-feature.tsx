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
    "2fgEPM6B9Jt9MAey4BTNWTQJT79FvrRSzPaQqcBTk2X1RijLLXK8NTS9Xo99Dfu1AkewSjurHpFvDWdJQS7CuV9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gqg4Z7z6AC2Uk6MqztQKvY8TdeV8k2g7RKmTgCLBBcC5Ecp1BpUwWeRT8M8fokpjUZTxeSDt5QGCVvZzZbaaDjH",
  "key1": "2Kf5xVHqXyWJ3yVqXX5sXSk2qmRwf3tdrs6gUViH1uUSnxzkcwzypEepzBxgGp6k6fHaGpmJfVr4pWajpnBnHTPK",
  "key2": "8XePDHQf3Kk8QRDrtX4h9Y2q1aqN5R7qio6Dv7ZKmw8Ab7epmEVwkPrDvtqQnomEsvYkgqyBCo6qJgzYtRm7n63",
  "key3": "37Na7JsrbcCEdmahdmoSsoJMLsiRaEfdiDzT5MHFFPGZEhtKQdfVHg5GgbdzCaxomqZFK1XXhPm8kuFCbjonuTP5",
  "key4": "VxpGVwJV97zpNMwuaZ67EKRLFhz9zMgu9PHt7B6Rq5X8rSEGgiZZeZS4VcTmWGqYcnWzMz463yi6isbBYaKPS3B",
  "key5": "28RdXTrNbxkwBGEeNCLqU992jTyLyBBTP2qXS97NWniTFD5VG3ZEK8aZojsnBd4ZmqW6xyJnHi2bDauygPaqMqJc",
  "key6": "5MTw6kbFTvFiijh9yK8yYrgzeAPDUc66DPfFHjwgYnosHxgrz4DUjzSAKwTHW9FjQniKNEMwfhXgYpJwskoN1ejP",
  "key7": "2U8XVMgYSGRGaRwEiTzLidDisz5fC9Rj6NmiraRRF3TEszKaZNwUPVFouk8rxSDHumg9XJx1bkLjXUUacacF4Kxj",
  "key8": "2Q1sMT8wuZ258UkCJquHL7kbauPYWHiPr5BAE7DK4KwkPugrjY4z8yCx29LSNrois1uwaGRFRU1GcLq7gS8RL9wj",
  "key9": "5sLCA2e5kp7S4cwgAugSMTnj4FXZHZGi9UNREuFZUFQe6GxZozgR76FQ4JgmhxHmriHhAfpesznaMEdWau7WezfA",
  "key10": "4rnQwXx2tJYPjPUpj81i7kEQgLmL8UFBYxnZ85b7HPsymUWX1BVYtY3zw2uJmX8hBNhjDq1oDezwGUfugVQXoY3E",
  "key11": "2zMPHERyycTrorcYHbPpxmjvhX15NeP2Q41qya78p9K4Y2LLdQVE1vACUbEDDuWB2vvmAcCbVABiDKELG2MqeLtU",
  "key12": "3KaSaYkNWWV14nsrPHKxXA23Wii2Jta2sZ4e6wDM75hANgYroQBhnvwXZEPcfLi9PE4GBDrshzXNhbH6pWLxk38A",
  "key13": "2AneTvCJeqFbeUePAG7wAngZVdpkWffSFNob75Xpbota4b3BQ6GvvXxC2yDV9htMTeWBPUzpCAN8iNRW9BTHyXYJ",
  "key14": "GC1tvCCk46ztjqZwNvcgzLKjFrc4E7RfiK8g8uNWbTV1WSoDTGguv9GrBxtyJ8f4aXrZRcCBZCFdDbP5PMMtu38",
  "key15": "4GEzijK33bzcPvYTJjfMeN3XLtiDQjyjJaEiJzd9pZ15TEqjjf3bazFTwZxpdHNpaoCKtoeqABX49GXoke5B5odC",
  "key16": "5Pf6zvBvpH36hYiJGUCR8GywwQGdkUs6Yj57R1ZVy3jaY28ZhzdiLFwXRq4Fworp1UWxPZfuGZwCdBSUd97qLz7z",
  "key17": "3hMENDnAPukusat7XpeBSgUqcWQESBW8hDKfaCc7WgGUn5Gx3Edwd2xrtro77ZF2derZAfCxRVB39Gfr8oF4dG6o",
  "key18": "2kxfkEByAiPQNyz9ndE1qDDCySTHKwWAHFgD1NNPm7e99Lhzkf3Rs4KPwxGVW1QPD4Z4ypg7epkqGhKd6fSWT3XN",
  "key19": "sbJFTmMJisF39sT2hvp8rCoWYD11yQGnbKnKh8mdyuS2smFaX9dc7JWNud7HSxJ7wrt8cAK5wDyXEaJHKGZXshM",
  "key20": "2VemgMVxKmZyfhPodYHG82WWup8tEhyFp4B6XF4pSYdVMfrLGnky2q56bqxzh86rYKA9GffENkZcbvrUtuMksRiX",
  "key21": "3S9FbWMNMTAWagChCvaadPf6TPQrWNychZv7CBTjCQuuQnyrDb5Qd9T6B55SnnbzY76iev9rYYgLvg3JLPPSWDEK",
  "key22": "5RSncnmEgomvbEBuAra5pcy2TfeRRfoZEVjAkfmh8nq8WhhdrrMvGUEwgtRXNDQLUYWWhXa1PFmqeaPVLBbhCnu6",
  "key23": "263nX4yEcwntzcuJvP1wcgvqYmSVqefZ1vBrJnkEocHxtCknyFYUn5y4nJDfqppssvcovAen6yXvVfDszhCptmou",
  "key24": "2v3sdhdNKsqQ1HyppxsaXFuqowmp3AZ5B9y1NUo7UYbBjNS79whE9oaYafDuKKTKVWPWKNmPEGJqrEC4ZUxh2eh4",
  "key25": "4UgXcGm2xMxKHyWjEnrx5GqCF8xRFkQSQvGzgEmYmuhsv6DHBWeXWu1u1WoexxRAat4FCeFZARwEcSZBEbJP1Wmj"
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
