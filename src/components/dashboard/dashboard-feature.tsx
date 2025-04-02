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
    "4M9oGUa8Vhz7oMFnE5cmP1mkMr67e5MpcT1GggqGmmXRK4YyicYP1pyw8CKbcFppFncG76MuDvmmDNq3pWp6gyP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G8ufMn7CaT2eQEsaZq6g1qocsc4o4gz5Mwhj9BUgeYYiVWUBhLBxFpSvuZHvPc5Au2BN5Y9PksyeKWpWMHqnfSW",
  "key1": "2G9WVhQpGGL5BTJnn3VBT7nmkwEik93ed9LsR4XXpnz11g9R83EgX7BJviQFGqzU2dW4danKDyjPcEq1yySZingj",
  "key2": "5nhGXTdfvGpJ8pgFyjRKe7rsyo6z9162WjJ3axxcmDn2Bixq3XopTd1dPdAufFt2m7ESCX5YHD4aDwwe66UaqY9N",
  "key3": "5Zj9EJWJUS41QagfkVcNzAhd6GF4tUpiKmAZSQFK768hAgF8EWh4eDVkgfCYS8t7UVSNCA9N13FhCogxFEHzasiA",
  "key4": "5wt1VJ1V7uiArodFB1Cn7Y8nXAxGDCzt4oq147WV7z8MMPQrL41gMgxWSvsBDJhJs2WKA2Fuy8sc5VitfePBPcQz",
  "key5": "3ryroZ2ogSQixpTMDbhiUeVsBmGmYPsj6MYrR7UewxT4NEhe7GasaPzPdZSdTph7MFvfhqEZS1VPYLa2UHb5Mtp6",
  "key6": "33FKaKx9iVqdQN3zqJ3qNEgECsGgLWF3eZMZFKE9QonUzUfwDVZXHQFFgTxunXvYnWCqjzz61yQZin9nuMBJu1eq",
  "key7": "4T8A7zWbv5CXQ6nzNxbt45huLYRJmebU65d2yqzQ5u8xLGRY3RPyNEnxYEMGjcvDk3ikVUE2RyAMC4W2rq1dGNNn",
  "key8": "598EmaLf7JCti8LAZpnS6yDHrGYKcwoA9Wm6ngWjMXkd1qRuG5vEuE2ybBWWdXKSjB1fxh8YiUAUFj6B9HV6QfT1",
  "key9": "4Xe5uiYJyWPqW59U2HiVveCezQeRkpBHNevpsb7RSqHKaPdqJDsJjCuSmhJUTy8sfRFQkxLeLzobENHX52uBVzz2",
  "key10": "uXj6fTMuRhHXCbgKt4BfEW75GKJqHZYeuDEnevYewSMrQSZK8PcuEFGf4paf24o5WgxP2vzbSDbY9WZVpvWvgFT",
  "key11": "4Ye9LJadDz4NhZHBQgf9dToAJu1w9QhuXhZFtT1v1iv4F9dWosaBxvirs1Xwnph7ZiUkg6jNkhM51qvpJ24L86CE",
  "key12": "3V66A4xLJRSvfBt4xpKtuVFMLWoLDARSkM2kbk76U7ueYa4KPCnG7NxdiyV7wevHDN2HhiJzZN9Vzu5UjMC3wuNV",
  "key13": "YYgdmSyRiu76HMch7h14rhDjgutbHg9eVNxX1Qq8FizxhF7uxqr2bk9ZDgjvVgYMPykmRJGudypaSYWhqgqMJDt",
  "key14": "63AwhakGb1KZVWiLMTskfwR4ZPECNx1RKh3wvV1cM8ResmJGqUCm7dkSeUTM7v2HBakqwLoUATFvayLmLyJtH2XC",
  "key15": "5i1ktfvYWavZ7U8oBk5Vpdg9KgC1XnjECiGAvHWHNfx3zWYBGm5kvpLEXyR8T8R8B8nbPXxqf8sicmdHEtbRXUxs",
  "key16": "JH77mPTP8ZpibyBzHteWR8KXaWDsRbzmr4cUcg4xr4rcC3TiySujYpJsmnceNQrXX2DUESWuissdp41K8krhyYD",
  "key17": "28AZWqCFSrF2mYyBPYka1aqr7g4vqhtxiWnXjNtiYSr1nRiurUWEjuK6sJLZEQ1kcJuH6iT2KsYXhE2vAemJcsAN",
  "key18": "4hnUVHw7r37yFmo61fhCqQcPJS8uDFxeQvaASyj6BafPqTevxWxnMCm8y3mWAXuJ8mmoLFqiBsiY6ABVH6pmYcsK",
  "key19": "5keJWofA13aVmogiRjXdEgcVEi6W8FxrBXg2k1pzbouDMJiCpUUdZjGDkSTykCKWW4Nf93uQyQZYnfWqG5bc2CaH",
  "key20": "4BMnxQzzfnMBsK4TmPMHTqFmUzF7zVigFC5GmjCg1joUiFLH6EJkCc3pmsZ86RLdajHexAG4p9jT7puJHLZJxpZQ",
  "key21": "G5RFygSZPV4mrNitRL8GdTdTKoc5q3BRTU4WyCThacz26jZE18rfRNa3yYSVfXt5Hn5QKn8ULCc3x7Nb9NkPCzL",
  "key22": "3Z6r4fiTDmieLHF8ZhXFeyrTuNWyhRBixfG3vKYU1JBRiu3TApvje5tPSpnSPqtxd3s399F9oeg4i3FLBXir6Y9r",
  "key23": "2wF2UJygHk5A8fU7GthU1iy4fw2ovQDhc4VxWBpoPdirKSi6Dmx8pv66RVVnxzHgmviFMo2P5jVN6wkCjzE39fv9",
  "key24": "2BBCAyKkvx6ERDNzSCMo81xDpFHzCxkAyX8idpxCNGjx4G5RshPr6T1snv8q7XJzEFxja14myZ1HJuX9QfZcE1ak",
  "key25": "4zgvFyERGSCwvCPE22yjPwMprcduq7ZpFBnios9mu8XAaBDVBPLCwYe8Ey2vNLrWpyKpM6vxDhcvFCVqAyMCAt6o",
  "key26": "5DAJBnXmi5CGBv44Sk54bHdkvBeNoS2L3XL7mH7BgvAH8usacphnmXL7fmx2D4PsJs8UkrGCoKmqkZp18wpGFDTj",
  "key27": "448kt8F4DP6omNB1dZakahXceXrsjNEB9kL7KxoGnUjCTJRPUWjfRtP4YsRh1iQpL6ZWae9tkwE6djTjXoiTB11y"
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
