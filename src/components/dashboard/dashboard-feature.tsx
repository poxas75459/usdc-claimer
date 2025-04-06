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
    "5G2Vfku8DF6JUcDBxDs1x6LfdvdP2GHcW69871GLCwR6QEapfiuo39idFBkZk1QFaiV33SnAiCGJdkRjZ7QCTfAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PWBB15WuSm8EyJeWdW8T9MM6h8xM4QCcpW9MyL3CH1URSPWn3g3nT7oYQvipLooZ5FZ4PwvsLaEovXCZ1HjkBJw",
  "key1": "2FPYUFr7NzHuDBWTAi3r4hXDtpw3JuoZvtabW52CbKpPYmndipQuMRMZ3meLDCfUvF4d5tsGkg7HzgFZUYmcm83U",
  "key2": "4FZPLDMfQFQctwkadNrXG32UjZ73Ao6p4q2CQ8MMvgEo3HAL66Aai9xYNetwuSrpQ2LMUqw9rL2dE7dAvfa3ZLAQ",
  "key3": "2Kcqm1H6teUiuurf4vGS5joaTKZRfSkztMGDsti6QnqnAuiP4JyJCbioFAXdusEUsskBdTL7fGp3KxSUBinpYt78",
  "key4": "5g5dfmyi74BttwC3ZMnE1LVxNssBmUeRr1H8DCfTDqwmTgtgLmvm3mgD195QeGNvf5FqfvEi6ErRmvFRJ1N894Ew",
  "key5": "3sajeoAAJwaK9ExEEGPkLTTuzXLHkEJDoDjqUzY7ZyjZashKBWnVNPNh2BTfoQQ5Nd4AccGTNxC5jRKUKQ9cXeHd",
  "key6": "5ejnGTRUV6MrmGj9tRJhQx6DCQBkXGoNrqYNNf9skUf1Yfw9hMV6Eu1f3jhwQ6kiRwSYYA6qres7XwcQRaBmBMy5",
  "key7": "3L59mhscsumPxZGQW4gognpAnJmGzbpr8R1DSDMepFxLpKwqQ86oUmTNqV7edkSaG5k2ihnJdyf63MDaSjdM9ZU1",
  "key8": "24MxwBtAKFAeW8ok7AhLC5rFvSqV8Vs4soV1SF8enYpj2w1g9uEM5xxtNEdATd7Jwr1bziwtsiVZLLgEtv39jfzD",
  "key9": "63CBptFtrjH6yZZmNyr537Xpw3k6XnTT4RLnY24Yo57dm3j6jz5BJ8BYNWqakG6hdpustUmM3gHBLWgj14sM25xd",
  "key10": "76T7SqsntmF63VjezPyybS6R1PLxSMGnSP7hgKsX6Hb7GX2ZPs67Dq1aaf3yy1arKEtezTJs8WRVUmWAHYvMeS8",
  "key11": "SoD5j6oqqWkD8Km2DDKpesWsqKW4yXuvzbtNgcjYGepYh7NzMiNgtgxsqKLeRv24n6bQ9gqubaTkft5uV9AHAG2",
  "key12": "32WAC8kY2erya2gFrnCp4ZXAAmuiyA4DQouQm4knui9S1n68TzTYySnsA5E3xM9nTeFmx2MDNUHi4TGtY7q1yz8U",
  "key13": "4zrtMw5B1pMDVovUF4GaXZx1yMG7jxpkEop6gRW5FrBy5dRAxU6pHJk8XAwbYoBgEbrzpUhCcb5MJZUGgGwLxYjB",
  "key14": "hAySbH3ks3NgECWpiaoJioY7tnuJepQvZ2AS914RveXJe16KDhnT4TtHXuCgFZVGLD3Ra4t5ig8aX1xZP6yZSFT",
  "key15": "46ACmJ9p4gFLKFbpDK8X4A8qdtt7fsoaEhGwWn7vzzYkcTVuqaUNqQNZDAioNzDBJqGyvEE5scbhCZVJxfZ5ruT8",
  "key16": "4Nbc8grp8JpSXN5mj32u1HLUiSGsvUtVxpAvt9jSmDbfjADmANBFgDAVuNhYMgcCvedfDCxPxJXzCU5ZAh91K95K",
  "key17": "4Y6VkQpzzNZNuwXfVFS3sr9jc3ccJSKt4g7moKR2QvRmqa6Mh1zQMf39sJGKAf5Z4Hs6eaoc3K1bXjdnHkbZ5zrY",
  "key18": "4iFTY19ewkYWPnKZYNyjAFKRRaDEnx33HcBVjY7iHs7wBpKuM275gwk4FZLRhi6FAHEnQmtco7hKXUD7jjx4mtgG",
  "key19": "3hUx7JwkoGFuN8c3M2vXcpAHoc9FAd6qoUbmCNPtfPhmv7fautfhZFB7ThgNaSoC9GfAM98jE1cCFYKsTyNJWu1Q",
  "key20": "3x1aMhVwDNSUFNLpURa17JfrJT1WkMiR6apoWG9PBXoAvZkCNVf4fp9h4qVAcnKU1dR1Hf6oQi8pt59X1xobS1Hf",
  "key21": "J38bMGQKhbs7wVZyrbqjyNRczysEKj9qcdq497W92igwd5qhE616wU4iN5PEmC4YeeUKDqZheda7W13tJ4wrmh2",
  "key22": "38dRE1Fnx9bqTuG7dHD4GHnwSfVfywFcAZYz98K8tJCSLDAuxfJSVrBqhXwUHoPVC9dMXwnQxnJoFTZSou3nTmiF",
  "key23": "4Y8JkK4HA12A4TSJePG5XDKuzX55VeTdQBFdrZU8WfAennVqATDpim2otRwqiAWKzV5x7kPPGaLxDLcQWEyh5vP8",
  "key24": "zMiudL5eB5wq4Jehe7jfDGr7A36FuzAWvnbTdi3KVuKkT7Gq99qyv8BRR9wCfNeDcPF3wkU1xK6gWPd3QwNUcaF",
  "key25": "4wUSd7Ji8s1ocvmfteBptgG7GnjDaax7MfQiLmFD7oFJMa1o8JH5P3vF2AkorFbz8FD6EHmP6EBDoaJEx5c39yTG",
  "key26": "UYP8iCu7Tds6DgouX79rrjN9MyvC7cK1NgrJ2Hp5V6c9ypsko4oTvt3Je32cr2F6FYBow8veqFUdo2X6Sm5JcGL",
  "key27": "66SBR8b4HWadjNTcaYi95di3PThKm228hqCAhnoNGSXKXzU81jM7MxiE1NgfdzModcHMf5Jg5ySphxEWi8DfcHhK",
  "key28": "3DEvMCq1cs1ijsfEgFM6KufL1d5qHEPXYzEAcTUnLjjYYARYPdhLymCeVXNSNhhqMJox4bCv2mfHeQCc6Tv8Mm1B",
  "key29": "2t9gFELVKfZ6pgfPDWbewuJkZBVysEMGTJgNdAtny5Xiq212mFy8SofhBaNsyUUTDKigLCqaNta4tDw5XV1DaUkJ",
  "key30": "3EwW38sJLnFcvt8cobqCTdQz3AkGon5ihEyseCXz4oQp4kMrNwDj2QdLuqoUZUP58tv8LUnMhZtPTLrb4Qg1Y7DY",
  "key31": "HbHtdwd8riBLaDidC1MdEFePR7GWFengV2W5rpoug1BrY77FE2xX6EZz4E4X7CFQYrdHM93JX1qAkBgztmdgEX9",
  "key32": "4k2FdUp8KUFN6RLaw7TDvGh3WLGQkJ76xeu4jnsRZLXhuoZjQpRA7qVgQBHpe5yVtVx1utXASBV89rnz1E3UbBp",
  "key33": "23He4eTLc8k87R2DasHx3at48usYfbSVHqvyZd8e23wn52HcWKx4oWawx8V3DoAmm3kCUL84YwxLjyRnLosiGtpi",
  "key34": "4U3FfNJmgYyJNU2TX41xE4KT43TRXNXWoc4yNwWHiu1RHt8UhqtyCRF3EqYENPLzCRkwKWbJqgH2TspyF4LTzdTH",
  "key35": "3RuJKrK6D58JLbeEmDptXPGpPNmiqwxUBTpcMe8N3FYt7ipP9bZjeDhQQNxFKKnCtTWR4arSshEAMZUPvPBBEU2Z",
  "key36": "2JpGxvoPLBqAfdxh6Pdm1jxvUEs6brB2e3iW23u8ws5WuzGDLSWT1cSZMMgLfge8eaX1T2w8FLsZT4TzHzpnbDri"
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
