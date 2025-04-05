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
    "2nMuqxa9H7Ya87qK8ets4VzWmWjRT9fdPxmnFwVME2wd39wxGSEoNqJziGksxmV1hQr8KharUH4Jns7xTjbfSndK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kXuZcuY3ZDrMVZgHejhK111a7MbNcScae8ez2yrYEueSFcSJHcJJ7WCmBPzeZMuuENSuwXiNyWkSc9NiQtNA1au",
  "key1": "41R36zdLNpEb2eMchBfhban78CfHcvbNt7R9Fifzsev9cqDpHYjNFCerpEvXX4FzKwtXiq8xWpZ5ddxZ7fuTSf6Q",
  "key2": "4aBkC9m9m4fFatLFxVMWiHUqUHYRgSi9wNA5diFFoE66TyAJcrFf9j33BUVXvPScov3wNWw8tMkV38Lzr8P2NDjb",
  "key3": "5iUNr8pGqzfytDxVxzyGWDqVgx4y7gky2fohYSDNjqLTsF6qgHb6zDnMRdZ6FuvTPtBGD6SPcTUpJhxoya61taVZ",
  "key4": "Zo9vHPWeDsxcsbx6dzYp4s8TeViA7yWemDsc2qPn1nARDa9vjtVyvjicd8gTT8pDudPQ8Nc7nDoAoyK59GRDdiu",
  "key5": "4knNYov9tkQ2xPCd5kJ9mdvtzgvu8tQwxBJ1jrNAhWQhn9mWQEp3AWzEAvmc6aGK5tE5U3UjrXPocPqcrvWz5vtA",
  "key6": "2hea7JMnPvhUNWcjQVdMyne8DwLno8Eq1uCDyfCL1aF6YQnP2ycB57KSHJXoETWkTDSsmRcefqxTkhVQkPKo42FE",
  "key7": "4hfArKcYpYGnC6kyQ7r32NgzQm3KqjfzqckoDG4rXRYMVGfGVXhGT36oYfKtQ44kUThJFdCzoGN2TH9C6NZfq3sk",
  "key8": "5gcTiDwt5GDr93BtTyZ445w9s4WsW99VQCAkcA3kgUu22wiraNwjMw41MWDKbNbKkduEUJggeSKauFsj5Gt6xdup",
  "key9": "2CBGNchQPaoA8t2ySnFhwYaAjikExCFVhVBRBVG8zEk1uuupXz9rwfVzwf493p3hnYzUSk28SHN45ioLM3tvVkaY",
  "key10": "Z4jt9AzyyokYwFRjF8LNbGsXpxZpUVzX6nPH2QD4qoToiE2XLvL1vgaLTfm9oaAm2uPLJdYRauaKw3H287Mr9PR",
  "key11": "1XXkx7SjzpdcuiRvtqfGcPj95fYPmM5pT8QwQ27tz4Q4mQvV2vyh9tRxspm2J5G47xjutFrLusLUAxjYD7g9u3Y",
  "key12": "5vFLJkG2R6j7btctSk8kiQbFShAh8m2djwzESKQFsvxbBPtir5YoJsA768crzjCzUisNQWQJKxABenRknLJAqggE",
  "key13": "2fFHUdCvR5K1T5FYcwHiYG9tc5PQCNDK1okHsqwqEMrnr99NLXSajjZwkEpC5Q7EpoiDLe3GPi7WB1v7LNAr3Mge",
  "key14": "JXWapbYYH2A2Ai6b1HtkGcgKWyA3GeuXi8cUvueXvY2KNcKcriZrFMPTcj3MCErUtfRFbaZR3gDwWgvDfFuCrcF",
  "key15": "2r9Mi35jv95vv3VvUezNAM9hLCKRZW5aBXVSpWvjyMjyD14oGC3nH5GbNkq6oexFfTc4Xb3a1D5Euwy1nE5xQX5Z",
  "key16": "BNZzhhvNXa9FTGDiefhoy6jrfGXhHKykfS6PqxDd36xxmLLepLqs8j3dAmhiQ8v79jkkQmrEPoVWexnTc4ch1oV",
  "key17": "8qLbcBFhyGQzM3MgzYZ5tTjX4gyGpG9aH3V1RxifB58nrSfZ1njf4SJvznhGBx8k2SaggzNNCq8FHByotJ73EqW",
  "key18": "4F87tBkEgR7ofaZDkN4VhNwkpzpHUwUKo2FXi2T9ZKvfDAKusYxk7YpDJ2HDDQ1ySUJxk911NH9XZ73Yo8iA4Gbj",
  "key19": "2dw3McqCfeAHygNikPyAnea5VmrRt3KcUyJBehsr8Q2G5uJXcWr2QKXrkUfP3rSuCiDgB2AowWLbrQ9izJQVzZaD",
  "key20": "2SyM4PkuLGWgs2tWmFzKQPUcCfA5gLhK53xFHFfAuVvPZKLSsv4CrEHpj7s3bj5pWzcT7hKpNWhjTVJKDDqcx7QW",
  "key21": "3Jj2Wa9yNuiYVpT5BReKvSBQjSvXXCGZZGPk4BAEtWQ9rwavUbcuWnGogAZy7TBCVKXUYtN2P8iSKnMh6uwTkwwv",
  "key22": "4TVyTuuEDwp77wqcxo8VJERdayfvt468RYbf88TFJi1WkGmkFiMQKmQjmnH61AyJAHp5itGCv4JJq7RvAjtMAQdF",
  "key23": "3zGTi9y8a9oUJ1EbEHJRinBRXgffXDyXxr99cb15QyTGN18cSmkbjdLzLHrL3Kek1a6TG5G1iNyrctXrUZuZL9rd",
  "key24": "5HutmfGpn5CKLwGTScCeaHq7YKL3jEhbM1H3CHByKfMRShLmxdfTGLvghq2ZBYWRHMN1A2gUVVe5RdaPthjfC86r",
  "key25": "3SaLygRsLJTgBRdYSMDZqNuBSVuihjqszDMoGAJHC7ZVQKjCMRPF2U1TTetbcXSkkq5aFHke7MNysvdbsh7ryZfQ",
  "key26": "5pQQFZ3SZTYTDYrVZDwtofyAe95aASiptqJcDnb2uB3Ya3q3w9baiozhUL5DJrpev6cF5YLLPFvakvaro2j7uZe8",
  "key27": "3CY5CLFfj6L1Lv4F1RWrAmxDfTDGYT7dwwoHSZ2DLPZr3baZEPBMkoBrb836sDqZVYbP1dSGqJKWSeC5tj9TVmdK",
  "key28": "1v26q9UXVPEp89nogcKb1ksLUdGHduf3QKKN6FWEmZWr4HnnS61MTav3dcfR3Rc7RwM6YKJDHydHGyq6vVkuXoQ"
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
