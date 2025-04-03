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
    "UpjBqxW5Aq7JYvFDV1equUx4kvFbMQ3yMLdCmWzK9Ybq8cEPbQurUPK88ygBRFQfr65y4Kent9tw5iPN7BKJMUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCjc9MWZEs5Y2qwkEjz7qqAP4fuviFBpFJarW5dfQz4u7Jz7F6oRxqFB9hAmhZ5CsCVZ8FS6At7Y4CE5hNYNYj2",
  "key1": "6PVw3GgoMVRHf8coLxNs6ykyjDu73DsR1CMtgNmFJbVPXAkn7j8xg3JbRZga9rDi3zU1Vi749AQNTV34iYY8JRq",
  "key2": "4mr8e5JVGnnVYUsabTZQ5zdUpjaHUqQ38WoP8fXkZvEWQycs1rXMUTcw3ik2mnyx7cdvJ4btUCrB5DvEbztLiV3r",
  "key3": "2EzVocJ4dLvQDg3mU2wBYReU7aZv5pnYrmp5CpiG15uMF6nxgg8zjr1Bf6dva7kmNqn9XUsjX1rsbb181b5Vk3gm",
  "key4": "g9zYnzUBNfBPamEgHQchWbiWfgkd9BbHhyXkXPQcpi4kRq73EEvJ4BVf1Y7uG56hUpJMNL17aKWZu9JimLm4LFY",
  "key5": "4rLJs48np3sLTysxTJiSunzPtdhRknzxWFPaYPjCcpynewGwkwzt471j7cw7kPZq7jSGXe83pVTJSsR8bYN6FcPL",
  "key6": "62RoCCS1aAj89CVi7uqFUL1vw5AMRSKiDsDSqukBiKNUXYeR4xhfzgvzFW2RJgdigWii7m49PGPknubaYqguxU8z",
  "key7": "4mYT5Hur635W6eNLHCuoXzwK8HFYXW9jP7CZn5s46ZMhcBHEZSQaKgSYkGHbcuLZ8GeDwVBTAWT9rQojTEd9G2hE",
  "key8": "2VK69KsTysWuT3As3FygR39nRmxhRdzg3Xbx8QBGiZLeqNZK1z7EwM8whB7LSEBZbwTpoyR9gaCq3nkM75yQFNtf",
  "key9": "2vREoPfWnxZuFJWaPVsdiGvB3JHVaeJ13g4wF8eCPbxN62dnNut1CFA99aksgNDQgAZBgh2qtNM2x8cLThSnGpK6",
  "key10": "47qPQQwEsV9Z5bG76uHQ7sDxLzTCZhSiAfVSMsvqKgNpZQiRXQt2sCced5iDVmnuFTQbYC7uot8HU5Uhs2gS7DfV",
  "key11": "4Wa86pEFXx2NzWEJXJL2jDcRF37YoHDKsZpTMcQ6fEouHTXUZ7zibuUdFd9qm3to7H2beuh9mv5RtsDRZsBNysUb",
  "key12": "3cLpSVYYzZcLhSKVuAXR8tb8FUiV2srVQNZUCdc7LozuxJsDeyGHNmgcUBREvhjWS1DnevSyyLjVQn9wpbJY8h9M",
  "key13": "5U6PiYKm1Sjnf9YMVJPodm7izCVxkjnUpmUC7CxzL6D7FA2a6k1D2gpbd2bV8JCFwBuQtnGprV4Npa1i7Y3mUq8m",
  "key14": "2XCUsBwpEwCk2odvDSk9knPpWhEygLrEgRHGvZBMttYvWmndYToYKymz4qB2UWBCL2xfQcpscEc5sfth29aL145X",
  "key15": "589CMGNy147EtyCeeZxZg4YaJsHUxzfuFpmkVQNMHihDKS3EFCSVqLna2AsmtXWkGxLCdXwKRj2jjijP1L5ksyd6",
  "key16": "4fQGFePRbk3VoQBFTk5L8s26wU8H1wJr5ang1CMVvmeJKPV4NsC8fJpfcupCEa3qZYxm32BFZ8HUj45KBUEf8YCo",
  "key17": "2PhCzbVZKyeNaGXLaowAQNVxuez8VzwtwoNRAyp7v6kTDvN1WXtE7uFGv3oDdG73e6E56AbjdKQLTDXiuHypJWax",
  "key18": "3voWNirW56r8scgUnNkUS7YgwJGCTTVQBq18Q1Y6DXcMvt8bVFTcfvP5v3Gq1V8o5tM2AL8GAJ3iBom1nvjLuc6o",
  "key19": "2ngvt8zEtetm9f3tMKWiqd7pkXrXkHsmnkSkBuGXFxXpJqD8Qu8W2khmBQSmpgzt4AunB3Uz3Umh4Bt4NcsCmNEp",
  "key20": "5M9zdWuj6VL1FWug4qtnEYMp4CPK2XWaEEbPsfPcxrWqCiS7yai68DRRtwJAJdhAXvgh16gtjePypvfXF9Gi8fA9",
  "key21": "5jeXcHK46JBL3C3aJB8UPbrzSj7Zwc2xtYzFz9VeTEacDeVQi8KV2PeVuQKB9Z6SvYcLDxCt7EXi9vhKcHZCts7J",
  "key22": "59D8hPCW5tbzJGvaCyRnC3HjWsieEH38aoYgKJPrrTrtF8vDL5SiHiPsXxALaT8VMYobWdnCUXSUnhBHBJ1fj4tb",
  "key23": "wy7Rj6WDrcqNrv1V9Bq3QuxwaFG25a8dr9s9XNRgdMdf5TNHqjeQNiJcvFb9gd4c9w8dhUxMAsRrsDNgjmP1VNi",
  "key24": "4CzwuDMCADfZx42eaSjdofPeCVTyV1xJxcCQqPGLMxTPMgz7zG5hY9v7UZt86CnsCYr6AiJPngZVAyQhyPDhPPCR",
  "key25": "3KTyNU2L3Q8aYBffpGvotJ3xuy8Ua7JgEX4ye6ZfmhtbMKBf5os5UzFnSXjCqMyHWCRH1ue93V7tZ5MTGvmMotdd",
  "key26": "45KDauGndBbKPcawKfqZsvpJdcC8vXzBhigREEcGdMWtcBvs2HqifqxcJs5KBsGMaC2RPSt1pXUqnh1RcYQ1YkV8",
  "key27": "3inyVx4q6qv1rLyvvabPiC5AANd7FXn4E3aF36ap1n6PwauvRD8HV1LCNRQSpLDkF6CwJbPFcdPnGxqStdryUHUy",
  "key28": "4XdH7CabwbpkTvs52pXc22SnLsYPURFbb2TZ9VYVVnoW8Uk8zhL89723HPFFshBcS5NjB8Uq87ffXFujmvRiFaBL",
  "key29": "5X9gw7rVaNeQ9AkdSDdNrPAZFpoVFcZ1Jp28xmnjy6tRikDtxYuwpL9SosnKqMYUY7LH2SoQpbAZjEtPVm1DZy6p",
  "key30": "4yKEJ2JkJRofsJ9NnDxBCnzWFnGNX8QqZxgCZnoFNRo7babkVnqHmEFxHAEjaP5ynzNEBnwKng9wCrqhwejEXUrS"
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
