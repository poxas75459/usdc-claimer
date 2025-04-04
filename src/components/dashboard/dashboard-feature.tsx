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
    "2qLd5gg8JQSZjHq4Vo8nzf3mUz7Gg819hzvbSpa8JVTEy5aShviDTY8K6fARecCn7JqJcdQmhrT3F4pHBLCVNXfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQUwqN9CZ22FkCEnm3CVTTp9TabBKGqeHSeUiVKjUpcxxLQoffDbwKb6kp3b2ADLTqenr7EAQDRfN8Eh8rnRNA",
  "key1": "4r4WAZRA1Fsmki1G26NHpogfdUxfApVLTYZNxeJSrajn3JhRHiaeh19PbDmfHpkrH6LvxFZs76GHZ5hfrUaDieDS",
  "key2": "64NCNC73vaAMwWGCzM4WZZatvktcf8XybLkkm448xWPtRUCm3wVgudapzU623h7sLKujQTD2nku3jGatG1UBaWoE",
  "key3": "4SdwCzBPP9XgvhZDCAs2ajbAATzeTUrbGaE7jX7Q4vLPtANoSpFFS1yVgcVEydmtCaTgGXTshjfevGneroRFbJf8",
  "key4": "4da1rMHuT3Pe5WbZskWvj6mgBHm4vjY4VsQYvCADAUM7h3tFhdWttfGsB5bGxVeZ1Va1GJyxBURn1J5EE5bUMf68",
  "key5": "iuEZLQN8rE9KKGxtBpunEi2nR9BAzohgNxd8aKbHQP7nNV1yWgVTSUGeQbbzDaVC9sfe3XeSunLT4GhhCYGj5Pk",
  "key6": "5ftYDP64qQStLNH53gEz6zmHxKbzbMoKh7DpjrwZGaEFTsPiaGLo1AW49s6x5bX6qr15v9gUKQhhC19Qa7g7SVZs",
  "key7": "4R1x4ZAx4E5LnrsenCN88eP1jNrxZiovdHJH1yxNVWH3vdiJHED7SVo7tue1CTmKbLGGDfxtSdeb7cMQKecsoXk1",
  "key8": "2spz7nd7amntM57X5ifiFoYSaFiUqgTgiSgdKv4bBLPC1Rsrw8VwM8RXpUbRQjCemLiDhgVtJ1nCUKkg7DUcSAi3",
  "key9": "5qUieVNQ89cBJonC9ncU1WQQYcYjkbmmASxT7GK33yKhpNZFjDZ97tEVg9Hs71ngZxScUe4GKreKUVtj9aeDmpx2",
  "key10": "4KSpKubLXiZXsjCQJ8ScRaFGouqvUqgeZarQJcrc3x7JTTDsgPp7jowibHMuLj1jz4G1VBg56YEWg4pDr7bc3hsw",
  "key11": "4jA7FFznugKf3fpP65rvYMSUqBMantxKag7kA4XCeXbBwwc25Q2wHsW4eNhUmYJwJ6rTWqjYZCyavLqf8n5etRfL",
  "key12": "27EAuQsSVU4hvWTDzn8JzoenBQ3rzHPGo1FTuwH8jqUYX6LsSAxJBR2NVHC95qsoK6Spcguv64v2me9rRH3a3Sb6",
  "key13": "34B8kDofuELLvd7jEd22Vv936HNqaK6dV4PGrJ1aE3y7TanxYo4BKFqDMNizCf89xqQKq8ppQpozUoLV2HKDDiok",
  "key14": "tsF9V2i17tym31MrBUa2ALzcL5wc77L5cfRkomERorxTwZu5myfEBqCtwJSjYpgGi9CyKG59arLwy44qBW76MuD",
  "key15": "5pn9LJGGrzYx81K8BDLKgiyV7nmQ8qNszahpn5q23bgZU5TVwrPSHEu5SQ8ESYzfGkhcGQG9HiJeZS29o8V2fMjd",
  "key16": "4yCHisyCp49DAWyGZ2MQfitcgj7s8JfpbbHxQj4VAaE19xvpaFBAEiUdsYAitbBdHxpHDhjdtKdmpkzYCWDRyma8",
  "key17": "5kPsCL9v1JbBjP7MaK1VNmB9x7YdY12PsVh6RcHnGq9ki4BBRa7NQAAurUSudNCvSYNN9dNgFE2bboUiY9nwr43u",
  "key18": "4h8izDXctgdzjQzLDP9oeVL8oruhM3KX1QxiYwYuhZ1a4aXmc5iAsmYwpoteTB5iE5nyzEbdhSDwK7E7FoiEyuCF",
  "key19": "5U4FXGZJEep225sbTqX1siZpUr4zj1NWTethBSH6U61MmT3fydUL1JBjBrsY6vSmqAa75LZ7wUjG4P5zb3UD56W4",
  "key20": "3BGrG6DuPEtPGp4JRjTe8MFjAn9gKPurfpi99YmvXHEVCF5Jjnj9xEyPErBPaCXCKYtYWXCh2W8iUfXjRe8SYATs",
  "key21": "4d8dkW8G2goY7QJu5yBuoffLCWsTGQWgvyMK2csn5tDGjjBqJdfyMx8Psq4GzLXDsLXT9amkiW94NqUu6JZF8wfH",
  "key22": "5oSvYon39NiG88R7BsjeR7TibSPdm8B7yrUfacToJkQ1igaNKq1zoRVC3iGmnhKxFU3Qjd2Ho4be7iu67tufvDXU",
  "key23": "3rnKSQqSBzB1ByuPrLinr3UhTtHmoY3Rh12juedRpaUJkwrqbdHKvc8tbBanTAGLVpZEpVazzAhRR2FZccbodN2A",
  "key24": "4u7mCk8CvimBFuP8rFR5W2PCbbfTK3rh6gwiavQ1caiYMyC3jjBVdmbwv1bcBnuR6sky8HAjbMBus5gUH5rv5u1R",
  "key25": "kyvtuAbu7AggVQJDHTvKSw1mkJKD9JFAwzNpkTjpwqYLhn48UTHFtDVkhpEXSUVu49asRUBPYjWGKEWXdYmTCH4",
  "key26": "5aVrHnaKde13da7oBuiDzr4kxQTMCR3wos7XxWP3Y1i1uenXXdwbMBYhYydVr42NdfJcYyPa2rjDpDC1SutjLSUb"
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
