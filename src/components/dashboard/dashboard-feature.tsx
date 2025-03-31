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
    "4RxjB196bRkqLx2Bu8AiMFCuVi5fnsyQbCqr7MCBwqfbWjshNtRwUHA5ZJ8dLf7nRhmmZeLY6h9AUC5tgSLw4PY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a5iwdBd1Nd1bn6fMS5mL3nLr44w2uwmsHHrZVPkRXHGusQXrExZRqHvVobPxDp94VdgUkxG3QvrNHHuJAJy4Eh9",
  "key1": "2YoUgihTgmvcKXPSpxxjedQm9Gu1fMsmU5rJFsuhcpJyMqGZ26thM9asXists2bX5zGFWk9yrs7XMSGyC268ReCA",
  "key2": "5XMYdeXntbrJ72btCEraBCzByttKEsV1fR59eEoQcAh1KD3RQDfjkkqzULnmtuV4BKU7TewwLpfQb7kt4C8sHgb5",
  "key3": "58TcmziaQaTvjZ5v7AdquJ8GjeFSedAMHJuayfge2kFErSAGzio7RMnWQxvrfpXTaxCCLggXk8i3zgGPQnohZfif",
  "key4": "5tRFoZZNyVbkH5bCs8uxzQyv8avZMgwWngPANH2QtDP6HNhtfPwGSVuPrwbEMWCDnUcXN6B7myf35ed7Bs146WH1",
  "key5": "qbrVANTyBy48YdmAfisB5QoBBXfkRWJnwv3vhNKr2NzNjDoxKVeCBAyfRHU7TuX3j4RtxHhLjrxq7ftoCvqtqS8",
  "key6": "3DQmR8h4cmk1tJzfCfDwyiwaqHnFfyze1qcEaeJ1v9FxwvhSmQrtak8yGk9cAXD4ZKh6pWHpMrJWQ46zM5xQxF16",
  "key7": "LUNQHpAwtxs7UJXuacfPAuLSpCp9wGyqZnJGTg9Xa3qQB6NSdmNmENXNfwzT2rid1dTdWrkTz42s82nG9MA7Mx8",
  "key8": "3aUiHDEkqA2RmTU5hPTeMhy1mBNornmGXMKiZM1d6NNLpLEP1yZ4ZJwsJDWbwM9Mp2gs47iuS7AENr9pPi16CyDe",
  "key9": "2E2NUK8dMoR4jg7AueBN51M6bm1KnhbveP2QWzsh5Ji63cKsAdsRUnSn5CCvZEXN11NizX595qCWoh1zmtr7ueAk",
  "key10": "59M2KkF1K1oe9Yrn2jCSFCptfpMhmBNMEyfAGhvFy2YdECoPNDoJc1ovr1hxmPex5EcNXR18BqKRrpnEVixGybrG",
  "key11": "VR7Rjr9pHhqyavzu4g7jbtY1i6tH4nK8XN7UhjfKfcH1NdhKQAt1xdwKYBA832YMuYm2dQjBLnEinxKZDE3JtVy",
  "key12": "21tbJFsAhcKVz6JzvDpMr7LRuMKdtQuv5xEpuUGiF8RHEtvcPHD8XVE6MhQgyEPyYpLiCdNFGUVmpC4fKRCsu6X8",
  "key13": "3FGuxGLPgFKuhVcP7uqEo1qg9cZE1Z83iSpeANmwRjYk5STUPf7Ch99St1o7m6KdxnxRWY1D9Fh91H62bxaLjBvt",
  "key14": "644AiNB3C6Vb3xTtzLfpDmEksGddJGJYgRamzDQc5MgjajXR2y5uB2BAyps2R4kYs3FU2fzncMyR7NjZW7hMTeA1",
  "key15": "5Anct82tYHzjTvFCoe6erkXv8dGWwiRBiBvrkeoXbs1ubACFHsUcrJKCiFKrnbNvuVUkS27b3XHJKqeyccwuuwN4",
  "key16": "2zJTbr81kNb7tBegcBCCRXKNdFXf8xirgM3wTWXEt8qxWWQ3tgyuRsTtd88F1ASz6qw429c8aRefvaB3jPp5dcit",
  "key17": "56ojomyN5eUEsMbBvxikKCAcm76XSFpnYGv59jg5fb99zjGimSFJvP7g6okFfsiHGgjQXZQYNMNZLGjSTo8fKsMK",
  "key18": "4LZC2LVpaLsbL3fqMYsMiuZBfUqudANdV9gR5pxRMA2xig22oUD1GTfdXoG24J1xpDku4KfiBVKRVgE2VxS7byET",
  "key19": "o2LMKDVJhgewbSaGYcCtczfM5E2XFDZArUgpDj3FigAQuEjWMncfFadmNP6p6NXMcSUevgLEh9obYp5XTBq2JGn",
  "key20": "2cG4APMmbUzxtLEWLXfevrkwCGKGtXpL1ZJvP7XLAnEXZuXwTZmTGrp9qb42CRG9e6CrhnKp88pz9wYKavAHqYTm",
  "key21": "2VTRjtK7GRfkQESjFwodQDHehu3oyXERMX6HppSe4stb5diXqJxPiQWFBLDLvussPsEwtuWFQ97gvK8EgrwSC4Mh",
  "key22": "2FS1WTnC49BmSTVMKPuCDiRan5Qb4bZWQG432LmN5Dd3jw7E5J3uyUE4QTA1uV59fWRV599bd8XEmNRcmcMNhwHc",
  "key23": "4uTXFXED2VsWr4VirP9hUn4jKCVjZWRqeD5RL94dQCygjVF4ozac8JcW2RquU1DC9yBEvhGpsFvLk5tYpPSAs3Ha",
  "key24": "ZvqXDZjpBxs9y3AuybwFiFQAzY7FUVrKUNxmREKn8doeHVDpjq7kMUsg51anhBvoyTdgW6hrEpGn7Xt28tgpJKd",
  "key25": "5cncGf5Xz3HYaKbMNjF9F3LF8947bHH7D48TfYh1K12vuhxG7xjwvtz6oaNYZfifH7EQx3g7kiG2RmZ3ikWAbBDJ",
  "key26": "51dGETn9PVVuc4FhZP7k8Rq8bCDaN6Trogx2hrW3rDbKeVb69R48iNCzjHv8DGJtP3MtXVVgCxuBgSFXB3yNsSpA",
  "key27": "2ErhvZAcxBiLY3UH4v7HbRqhTzwq2NGhjr5rYu8ak3rjPaJUFNLAT6T18vA28b4FcoCugVaJhpq8PsPTWWnZMCjG",
  "key28": "m5UtVkTbfMKyCVQCi2YQDdXQ3NYgTz2dUB1BwQbbwDdCW91y3BREduiMWFSMP2hcPWTukosqWGTV3jgpBtPXaBi",
  "key29": "3mF6dqPeDRZguN4xLiq7ckjWm1M77KbdEPW2WEWQuFwSaktZdMy1v1nyMwzWrx8n3Qq88jnUNZvYthVU2vUbXxVz",
  "key30": "2udaDm4Hd7qSb4TZRMzvfpFPoNvPbqRv5be4bC2NfQZnVmSBxKW4NcYcMzUsJ1jpfkf2ige7EZ8LY8Lsa7Tx4Wef",
  "key31": "42q9K3XqsM8zr3NQrUo3H6XNSt5zHm6BLDivt2LzMMbrvC8nWm7su8dYjnnkNVPJt39YuFAn4ia1pqqASr5H2v55"
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
