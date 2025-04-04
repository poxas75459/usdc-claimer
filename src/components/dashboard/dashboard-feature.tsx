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
    "4q4KoM115dZ33wJQqaciJN5kSAsF2xvh5aPPaJPKGRkiXgd8PrFzG6dMJMWH9eSSWDWRKBT8vDPfSUZgu49hrkZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoAB5AhE42rG4Hi2VTW6mcVr8BomL4q4zb1rDwooQehZsqLFVZNtMTHpGJ5vXJedtBks1HuVNxcGbhKrSzkJXEx",
  "key1": "65aUugQXY9dVpJK9ZFkMQY2HAW2JbGSZu5FEu7EQX5LEr2Czd1vjvxfiK2CSNVee7aCDNPoCaq3M2SdSKTN5HWf1",
  "key2": "39yy4PhDyNd8yiK5CN3JP4Eo2uDPhvSqqBuRKJhS19eQefKCfqns6ZemVix5zQSqwSCuq9rNZbfjy5DLDdKKAb9L",
  "key3": "57NTJLt9wxRvpXa6h3RpG9XjQDy2vjopf38W6qcAL41CJh9DghCeMw4D9ckKyQAUFBR2hB1GYBVztwsW6RHy4N2H",
  "key4": "4UfNQreY5QrEnVx3YFZGZUbRM1Dr4vrQzWujQ89YdAek17JWUm1BEgQT2SZkHSAdishykHjC3qc84ivyz3JNdTj6",
  "key5": "PteyChsnLtaYbLQtxQpHyTR8V67ixgJsHyw1v3ZrYnKZ6f5sjgrsZ9msfjHiWdCAJR5HRLS6R25e1v1cQgHYgnW",
  "key6": "4SrHpYng15no4oQYCCTrwiFNZf2zbWPDiCnGH69RuyEDfnkrhKY4B9jVVzzeAma53iMoH7VQKAEF4nwDtfTVYxpx",
  "key7": "3HZXmVibqhojKbMtRSHnf7eP2fCELorBWUShWzeatRj8dEqgiUpFzRoCMR2Z2KyNCPemrdpEPdyBnBb2ZHUjnFYH",
  "key8": "PhtKFnAdYhdPzY451azSYoxS9bditd4ezsJYsAX5JWpkVSbouBQFuRAdwoSwotnmSEKPrtwNfzjQN1Jr9BrS8Ym",
  "key9": "21XAB7yYMaYUCgh8yuynBDihZPZLXCvjmHDjhyKEfFcv9W7wz9BkxGPKpunGuUHHaeuw93PeknTeSXmAy9XgTMX2",
  "key10": "jk6DkNG7p56Ajm2c89t8GKgzvvt4ssSm4FmhctgfTeifdfkrv5L7fL2QkZHP8gSNr8d6nWs4ww7fGSX2FhUGm2Y",
  "key11": "2smpvaSrtruDm6hBTPrdqnoPKZxV469RMFEfgE9EHc5BxqGPeYU9kuTYqMji5zQoyfCGAanGernTDPFNr8hh4kym",
  "key12": "26HG3Xam38RvqaJ557r41f4seKiKp1XvQgDiAzy4EqQZXGhM6nAdXRxFvauJkuCqMHL2yJAe22Fk12MidzLtSjNn",
  "key13": "29koMRUxiutApHr8oejUdUXdnLqDPZg7xGjgZzdDjraCh8HCsZ3do2RfK9jQShsPMrPezXeteJrAMmBJdLB8j8i3",
  "key14": "2C6XMForV7VMJKpuvPKCSMEatnHD9o6wFeGeuC1LUHyATi2T4428er8n4bdyMUShwCfQxWPsF5QBgXo8C7Q5ngsK",
  "key15": "59Dj4nb6Rgpnozoxj3GhVCu3QDH5AfgYeRfgQ9Qw6ko5LkCUGPegnE5CjTSCSxceaTqBM7n7nuT4vy5sJsmpLEaN",
  "key16": "45cBqpgWNdPyUFPgUwHhXrdXvTid7LMgPLTwnbRzMumJQ4WRAV6eZajeyCKwo3U1n41R9mNPKxtp4EjpKmNao6PT",
  "key17": "4Y5kAtq4AEQjyMjxuaUsr5E6ES3nvxch9UBGsioSWbYQ7t2Ea1K3PAdFrT2uzTg9GupMAa8pNvKC5Ym1Em4FRz1t",
  "key18": "3t2kywMk6RFCsVGTgFNQTjHQVqUP9dJPd9NE8N4xjz64X4Lw4qN277RrbYV24amJJGSmMKqw1TYkVsdiJTtF7CZh",
  "key19": "TEAn4XmZ7a1akCRtSJKQNGi9Vg7GS61dY561X117YGgTc3q5mv1SMHusNk6myRHaMCPdoCpkbycWa8fiADsYSDM",
  "key20": "2rwo38XX3AEg2JTn2Pkm2D8wJ9w8doZWhK3dwX4x7eE16oVHSDAJ2RWFSTv4k57wJ4AXHeYkEzWwGEpzrpwECjav",
  "key21": "2bpSAu7oLZFaN42Ds1E8aRvkbsMWCYQRTSVp13KgWpveYfGuLf72gp3wxTd6GaGyyHRCh4juM4jqxETiRwArGvF2",
  "key22": "4bQKtGJ9iF8oKMAXnEszwX4fpaUwxyPozUHcJn5Y7psNc43r7D2wcCjYStHTDEqojTbBneBnBhjPhabPiBjxvSA",
  "key23": "4Ld8njWP87iJ8Vtd1bmJ36nzDZaziBYeAgLVqVcbD3uj4DRazQSVUZrzZfp6ADQwP3sAaKzsQzEB7ECyG5HrNCdC",
  "key24": "5knGTA24468eNQTH5tARym7P2eRsPe5oeZZ7YnPNJgct5u6XewJzELfRCXHFrqReebpRANvWPVRZxM6JRSGDafQt",
  "key25": "3cmDhR4iTkGtjGtu59djd6Tw2a4qo6Gi7XpkTtr9Se9gKJ8mZm2nSBc5RWjXPiE2Zr6JsYmQG3NwtiYqStujbUJC",
  "key26": "5QUSmiSiaGSqCgrq1TDjgpuEkwogJA9r9tB5WJRoC2RmUdT8GxsqTqAAxSKhAiJCSKQfiVmTcyKLuqmbV6Y71J7b",
  "key27": "4nUBx3bgSSfSrTPt2nStYoUeACUsBd4TJQJGTYvX2nHX1SCrVwntDFEbXUQe8L8SFBD8oee9E1RKomHHWi6GH4DH",
  "key28": "3bcv1aRHp1L6P7cvVH3ng39EcPcKgMjN8qNm8wiWmyJYsAU1AkAVo9odQmAPX95oRpBUXCRn3BJtQsNt2fvyZmz1"
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
