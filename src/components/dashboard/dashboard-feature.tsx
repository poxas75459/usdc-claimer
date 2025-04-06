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
    "3hAcDiEvRLn8Y5kMB9S1eJQxXk1AFGFfMLmTPnNEc9PoZ6qUdZRRKkrmNd4HempngKfTnDXo9jDYjhGmRMRaTWW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RX2wA1g34vs6Q2tvkJC1ig9EdVR7t7jSDjUeJy32cUC53DaRWXjYYyv8yBmKvNzZKNG5uhmhhHrwrF8bCHtRuad",
  "key1": "4veLVcdwgrV1mji8Y5Pugq42cFfAn853LPkt8TNx6QLsgjqyV6PbUf2U4iqFDZnna3sjE1efG1hvSmT3X7k81Ugs",
  "key2": "4xEjnq47pMGeRcjWgUa18Uv9R4CMnJ3YWPRAjZSXYNAPVkKdGx7r3X2oNHLos97uDnPwFiS6Kf15HH1DdqVqeBPV",
  "key3": "4peLJFAcmKzgkuCfoXZJ2cevDkEKc3p2a4M55iANARGzmSCPVyCWt15RRMyLXZU2R7LkUZ5fTZyaBzqVf3Rtixyu",
  "key4": "49Yx3QcGhZ6TJCJ7RRemYJK2GbTE9Q8nyooQHVWG19mfpgjodEndZWkCCTcudMGauhqp6bWFpGfam4Qhbv6uM2EF",
  "key5": "4JrAXpYv82RUj1MpzuovefB5fdsUEsgSqaoyEqfHy1GVX8Pm5UH8TjAE4sHtjY36PS9aESgR5ytzgYYAtuUsRuK",
  "key6": "5QBBByuKnLyQ1CZ1JRknpXXgnBiHWmpERei5dcfXxoVDpod7SQA3SWschgM39V2QdGCrWBqjCffXxA5TjsozNNfr",
  "key7": "KFSC4gbpsmsqe7mcmH4ygmswyaKCiHUMmdnhXo2fDpWNc8B13JnwXDRLYAmXpyAkiLqUvsfW6JgGtnSrhEopTBT",
  "key8": "6Gv9mkGGERdJW4WT4aE76QgUqbrNRY3MHcJhttRadrXsSLqvuZNN3McNTQSciHq67FnsB7KbCb5w6am3i161t57",
  "key9": "5Q6Dgx3fkpiMoaZontK9zmz3TXiPJHg3nBMhkJ4pvsxNgZQewHxruMWdUKbXZCYfVaYVQYxZLvqaejTjCFuvpXnv",
  "key10": "5qhBeQNjhsvuv73XXTZEPdHZpbsZ9cocLgyUMdRYW7qijeKnvWyCyNbEi5RSUHLuK2GdB6HkWjVPAtX6Uwhum3X7",
  "key11": "2AqVUuMMFnR5zU3K95AHHE7XGuMu9wCrUjiMMPRU4k8LWsiPFG8CeWkYE6Hk9MqXRyUaCbb2AXccLyjcbdeSUuGP",
  "key12": "4P61wSTxRXgfDnDNNupTDvZQsLQQX3mGZ8To1u74prvUSqDpsAqrrjLA21mztw3MT3MSZSeGH5g4Ny5QaK4Kgsyx",
  "key13": "542EN7wjgWcLSXhqYGxo7WCs4BugmB7Cd2AvfZRBogG92xAfSkpHfH41NvqNRsedzSQCugJuJmZS2FBvTcGCvTJG",
  "key14": "4mZQGFewdsvtX5YgG2b6qe3uD4osBWfX1C8usc5xamYBY749QxDi9wb8BqbzzwN9dd5yCi8RFHiLCC32jUrDMcvS",
  "key15": "53Mi5y9Kuepp2k5A5JV4GTWokEW7ovktivmytDot1qtcdxXcKg1WQKbGz7vvqEEkFt66AvMhktSkchcqsgo65h3y",
  "key16": "3D1uCYniC7eLkVABSwZD2ARHUBs83GmvM6vPeDLC1AyaJtiwHHmEzHcePXSqQe5kHw8noDNLmUAXvXJ9A1ziUhkg",
  "key17": "41Jy2Kj1UNVPxr3hTN8PD7HWkKQ5fCud5p4n1ufwsx6AXVJ1ksZ7fDdHMb6R6NvCo9AyvvJaDn1fKMXeSzEEvQLA",
  "key18": "2zYF4x9Nv4fceegaY129PdQA9j92B2Wh7EHJt2aUQR3Kiisa91ou3TjDkCCAQ8PeBK5VZTTbSMapBKCsjaCuXxjU",
  "key19": "22o79BkFk5tEsHPKdm2EPGvGfKGySAcgvfcpjFWy5Myk8QjQmY4oyf9phxihz762dAAyKhBLPefdR2kMeWejZAup",
  "key20": "2G36kUgF4t1PCawuQAXJXdjTgcRF184Swifvn4wDV42ttGBimdYRAUrSDJv2VXJT8bg4vbKxjqAxYBanfkwRSFqv",
  "key21": "4Sxdxv9hzw88TzMwMaxzJiqQxw1m8WoHRC2AJVunhZzkDdCqC2CznwoFaM23cUJwMMkvkAJvj6XgXr6PDUaT6NKM",
  "key22": "21kP4R4rAZr6kJYTwYs5kAETM8eW88ByHG6AgSo7d5QT8CKnFbCiLaMyw4C1a4qDx6JdtWvhABgieC75m8QdSoQt",
  "key23": "3Gp7hQpKjov2PFzUqJ2wTbPeTjSPHeZdvP4LeDtNoP8ZGDZ5GrZbwnD1B2koLErESjDfkjxqSwaFwunsoW3WcVPi",
  "key24": "ZnnWh53qKZ2fYWVEy9jLbBSCzXJvNkF1oULAn7MrYPkBCt1y3JR8QwefYDc8iZihYWEhXnTo9vJDWkrkVujwz8H",
  "key25": "23HoAk3ozHNVencLMrot2oJYjFL5D3eZ4yReXqCmMKr9agnehe7xXSKEoms9JNWrrxnvgQxQhhSiDnKHqQBvd1MN",
  "key26": "4u7ChhDJBhJhrX8MC7R6QLBGvHhENagupuYt9W6vEtSAjDQ6RdetZZdimGcVBmGC82djfuzzKYQUnzpipj9ciZ7E"
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
