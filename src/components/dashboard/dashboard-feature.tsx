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
    "2bEN8qr9kmJYDNDkV9jbjcfLDQYw3V3tzYGN3DCqCiKMapuWMq7rawHFY7tE8oTGM6Je9Mr53xSnUM5zv1bkyMb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uA3p9ZiJ2XepzYfg3UcZVnFs92q4miAeoL83iPvzioxDmnH2VdGiGjijRqFFMFwBQbPAJESZ8Z9tFkXkVF3xD7N",
  "key1": "47nwUfMf8uFsUi59s8zFfY7fjs7vSZb9WMZsc3U4HU4aEzv9tkjXj5DMmWgKDwQix8GUH5gXiWa9JGRhEWfJYRi5",
  "key2": "8dgLkjcERdjowKQ4NcK2vQi1f37LaGdK1vy2wbXLUyLbRFCqGLF9xPLiuFdyCFkKEumr1z8Ta55fGMJkwoMu9wD",
  "key3": "3jeTiosrKPAYeu5dyQdym8nwCs41Ze2tZhpeMX92Qv4pr2Q125ot6w5mrFjmzCgnZCDr9mUZisqapE12JvzsjfWA",
  "key4": "THMbNEQWT5BngVDr2DByG1c4xFwQmNdWLBBcqbRUZWRuAPjXaMZW9qkbH9vMMqwGoEEn3BGcF4cqL6i1EnrHpek",
  "key5": "MRjAQtogEVbKZ5dEyVDm6PinweqcdTjn7LBwGV9anzpzKGZuEjdeuprcGx7qyFbxkwQxS7xMNtQgMncJcgTpsD1",
  "key6": "5dZtf1HVfyK1gMVmQtWAzPNEU3XEZ1AedS326jeiDY94KdJFbnsXprXhxoCoN8c8e9RhqXMcetuBFBUH58nMu32P",
  "key7": "34hhHTPcrY6Wxj6TcRB5FPg8pswcjGJjqbedpyC8Q99HEAFWwEQ2ZtZghMdWGYd29wmpiXgcee1CM9ktza3zgopD",
  "key8": "3CdgaoaXuJgitJ8QiWLMnfwi9xPbTgCCwdJSM2vWScbKR43WaUGy5Juooa1fS9ZYWnz7JnyTp39MDMoCFtRJXrPR",
  "key9": "5VqqbbD5Lfi4PtVXfUdcXvykgfeffxuzkMCPWEbbBuy57vhhhU61Zjbp7JTDD7hgRVSaXrFAKbauDvhY16Jnhb59",
  "key10": "2WDvoaXwtFX41j9kDKi5FyQUWcXKDZsAq2uDy5jwZBR74sxkHL9HBewJ7PZzYk1bYPPGpayCUy2psnmMjLSQmxeY",
  "key11": "42ye4Jwv98GTtMhmec8qtwf1FKbSuuQDuskYcM3U5cKrGC2jcLDfbqyvWCyU5JEGT9UgpkvK3G51VGwRzdA9G2Zo",
  "key12": "TzsPYQuAmoZUZ7QvMtMJdYmW2eV2MtKC6UsygbkgMhPfDz3M8bKw8zJdKZrqpN4zmVebSSRXA5nW1sKfPTMXiex",
  "key13": "5HCfpAnyowfk43qFF6JGBzZwMZAtMaeRSXbvYixeJvYFDwssKQeYh48Kh6p9Ubrf2k7oc2fd8PNKXaZ3BuRLPcGT",
  "key14": "4NsjWrYGmCui1QHiy8J7uF11xYZJq1dSH83Sdi2DiYaBKuVufyakBaCQaLh24mw9zpav68b8CEBQZeKohDnQcpTy",
  "key15": "3SLpgeVUNYB247NQRpwc54NEV8SDarcksPUKke42aT4SuT67hqHAgnE3wVthokXbLCJnQLqhhMgRTiAnv7d3XVSf",
  "key16": "39eF2Nab6Cvja9ofNHb4nntu3iKV9U3kGzB4NASJ7i2mcJYvq3LeMAmZ71SgQCs2HEwax9XmfvkMoRRdeiHEqELZ",
  "key17": "66551PbMn3oE1kBFJQkRESGN7EQtZjv9bj4cofQ7SAFzLHPP3pAgdTzXzfNFJHmdRk7yfRkAp5ekWNNa7BihE52d",
  "key18": "3eYHcB2QUK9Fb73qi15eL5uyCxuLurcvBeCwziUqfun356PXc5CbG8G6xcuJaSz9tDp2eZkf8SDqQDgSqHTJ5KDQ",
  "key19": "bpVTyuM9xp1NLvwrHQ8aSD3raCfmSqWzrcNJqCvPWDEHs7yz3JwsxceZZGRaQnEjRrLErfzSNgLV2MJ5iJxkmPj",
  "key20": "qgc6E7yvSdSA99HHMQFNppsoum8mq55VcddmMigxrpxW3AwCcFP9r2LY5pDiVGNHpcWwWBuGq3QVmwMdDETzYCd",
  "key21": "5MQnMUKx5knTWTLj1BbXvGCeF88EKmjWnykGtMBR19h2bAfKJKo4HUT2Aap7wTLrgrvkfynUDYiosHhoKccsis4C",
  "key22": "uGhE8pCa84cTQiSRu7N4W6pQASuF55tWg8VLqeoUyT1q1NJTyP3AbUUgkgq6oG798LKrCDwUPszQef6BdtVBsQK",
  "key23": "4AEHwoQUGmBxutfvgybRtCYFxaFNM6BfoFxooRui2y9AUkoyJWo4cqQP1gseybsimpRs1UhbuAQDtJeyLr4UgpPU",
  "key24": "56qTCSoxpiqoV1epdfrvD6TWToCWsG5LZhLqBczrdqPMYvF3NE8kX1iY13UdXQdGtkRGPL4yfBA75omsCcxNhavM",
  "key25": "3zmFiFpsnnANB5EkM3DjCnteos86dHkU7y2N93eEo3uhwwsC7xvpmtR72KyDi6ao9srohB8rLJyU14Dvk2785nxC",
  "key26": "56QHk7rXYDHZWHp4j3MFZ7HfWizbu9pPPmZ6gP6XVjiWx8N4f6uBv1usxQUYrqC1K695KZQF8JW19PbTp3Bx4tNZ",
  "key27": "ah3xhUJBF5vGCUZ7fZLcu3ECTdqdKjWSknhf7B9WqYVa8AxDkRAbYRwp76YZUVEZSYHBHkTBGy1Q3qCn836TA3f",
  "key28": "4J3cKjh1gsxKZGe6xRb9MVBZzHxVKvERRxXJYcugQrvq67MFrRbVsTcRy3uMhT6LeprrPF4Xsg9sKvyJWnoih5m7",
  "key29": "2avA2xckxX9dauDEJk9jjzMbWWnfBbBeTGebynnKTPUaQg1Q6T5PiuAKtJDYtmtQ6WBvhCCA1ZD6PEGhExfc6Gge",
  "key30": "6WwX5x8M4Cm8H43rxs44awvfkmJci2CaEv19GMu4Tzhh1tnZN5uZsXg9TZo25zKPyXpoGzrxhEQitVT9N9S1drd",
  "key31": "3oM4nRQmFbLErkrAnFWM3GLVf14YCG5UcPW31dzy9RjJUxCKF2LMYAsHzerLnjq3xNVvwkji6ijfEudfBGf5dpz4",
  "key32": "3ajG7gETn6BMaKYdb7Fed2jTx9qyaXu4enXQkfZoYBtPzvbnm31zbiTGA37qHPGhP8jdD1nNAD1goN8hKosqBXvq",
  "key33": "61QEhQZ8jXhQY29qWk9ggYGQ1Fw7ZwJoUY9411abj6PWmwQpYSmxkqQrXtTFfDYFex6zdz9CPvSBSB8eehm6genU",
  "key34": "42f1891jAosaLQP6UjXYmUnz92TQWNSWFQrVRi5rRKbByB8PwHJFvp7wFAyqT66xUxJ23y1U5Fs4ALXsohGEG4qr",
  "key35": "2amHCGJwvUnjrHGBKKwFj6Zpmba9hv7oZxPPq59HykpmQhke8xPtd1MYLwBjcL68BWmvh9jtFmQDJfMq9cbaFXZA",
  "key36": "3664atKquede7s7QFtFCSCQ1heU1p7UXn7D5A4TkYmymb72cqxhUCzrRpEuwdfZQMH6uKNMW3ahVGeHsm74dyZu9",
  "key37": "5gtfHK38P6CXZdjQbs5sY7hYM6xPPtV9YZD3SGeNWE7RHdTsbZo8pRPfj9t8bXEEv68AYfhbshxokBWDRcNkGgLa",
  "key38": "4KoLXhvegsX8b7nSKG274SSZTjndatHDLoxtf9wM8wE5PvkM6NfuVTyhS9v87eAYmP1PdGFE5WQ3D9atbki8PJ2U",
  "key39": "5KnAi7z1meJsT83UeGhN5BZoMSid6V8GyudgDHe22Z4i7ZYsdGpzBZt7rZQvesDCcSWxhwkTgUop5qeXmFTLkY53",
  "key40": "Epc6vVvs7LV2EBum8TDZgUAHs59a9jciFEJzYdzzJYNG1jybm4rBz46zUnrjkCLd4sPea8oxE1vo9kH6C27uLSh",
  "key41": "5XhGbbiNY6RtegxDxUUeCUnXSwdX73jBXYwYDE6suqDjtqABAb7dYfgy1GavDVq3Hbhw7uMTNxpybhaQeB1Ljxgh"
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
