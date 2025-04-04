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
    "3UnhSNGrCrXc3w9nZes7V9Z6GPyqvXqk5N67MvhdphX5KUg3qVC4aFBgYbToLKSdRN1waRrjYctSu2E81dbSwMpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WajVnu6ghUbvZCSbWTphAQf3tsj8zvw63nGtGY4cb4nJ4zLrURVAxJZ3u8DgFDpnkFhxZzVqnJrGEGVpxwyRGJM",
  "key1": "Y8YvduGmc1Vq4L8SDtnjNpNcSh5JicXpVZ75d5CoFUouC98fweft1aKStoB5GJs8s76TruNBcBzrV3cUptZACCR",
  "key2": "4a6CspMkdTp9DAi2PnkAuFx7z8Mnzu5fhCEnMWpvgMW7zfLyGP7hYveUykodrSNQ1HA6ACgS1DVrEJaQFBVYfWRM",
  "key3": "kpDCYNivAUaCCt4EBZZsftWPvpbMF5x3ffUFNAYYDZmmDpPDGkcrVPKYBh973gZKo866pSxs4pz6fsu2RUgFJS7",
  "key4": "5dZFE4oFaRv1PtZC4ceyzxuvsvehPXHA6e8rSVdL7z7phoTm3za4YVzQZogtfXLv3DopmoaXxxMeaSPeedEND18B",
  "key5": "4iPtryvNdzBqcc5ASq9D3LXdghMtcGYNrKuVmAzHE5eUoiJuxiDzPvaXQkKETAhxYviA1bHY1QVN4BjhaHLs8cL",
  "key6": "tFhX2WmnedxuxGQ3RLXp8fNnXhf64BXbaYrokZ8zEn3SXvG2LnUQS931YydxCHAf9rMLct8nuHDBV6rimiXbcJY",
  "key7": "1WxYkBysZuqfdaQhFTcc1EEY5fbY5SUM6mCEzzgWVsGBtzJ8qrNoQ9BvynmaQrZ8yiNYmBTY1aUG8tPYfFCaT8h",
  "key8": "5FxAzzTqFCBFAaqT31dqXHB2GFHt7dWwyXd5HSMcVSoZywpkLSgRxY76q9aaWj8QdgusDHdaKJ4e1RrbTpPnkPjP",
  "key9": "4RB3CcmumnFJ174Buap3rqVABdBz1MP3iU5RJSnzdSMMhJ5WHY2iWseTefvG77e4zK3XsNpHVzkN6ioxNeDcWVm6",
  "key10": "3yeCFJYNed27rsbqiVKiz7aUnPi8UmhhRgRGNGA9wykNJt98t4GVdZMtnVEe7MuQv3JUQm6D8wc7X7YsjtKzB318",
  "key11": "4TrEC9uRDKJBQX4Y2eiDPqYS7uadhYW3ajoWz7FrdvGCc1ARNNSM1vqWEk5UaRm16czyRDgsgLqKvKxLcn4ycq9d",
  "key12": "vpJnpUtEx9TZWLcDZxL8rZLwjJbjwHZNXQ1po3iTKNkRG53U3X2Hsh5RFEWRBFuvdHkmanvs2UZ2MVWp357CRdg",
  "key13": "3LsnSLFLLFyGiAMLc6XcSiW11AjvtLXnRcgVv4TRd86yaro6vharKD7tj5xGYgBQ7Cn7DMp6PSKyZ1mCdSEdEUDG",
  "key14": "QAJcFbG4vtLeb1xUVjmTBYMAJTTiATtrwaWdSWwQE6z6iDCuSua4oJd4dn4V9P2BKV7pX49uWVgTo8dpzcucuwZ",
  "key15": "JY4WatFc4TESVhpXQcSwvwivZLWGQTq2onygB3c7m1qN2Bo6RBm3TvtSRZW6KfPRU18wuBUeyTGiBMDVDqcbCU1",
  "key16": "f2d5zu3P9ahN3QG2EWpmcACUKArGQzpQJQi2tKowtHgTMVDWDThYXRZP8RdnZPzPj6nyXe3jWmzzuJQCoP6oSDS",
  "key17": "5gvnq67MGpgMBtW5saZzH6bcgQVrwBMgAY6ix7Y6y4PUTXMNrrUXmyeMnktVGAvZqHrVy7onvwoCBm4pEXkwkJDN",
  "key18": "62tWrWwHXU5fPHkJ3LFKWLnzq2qpKf3zx4tVFa6gDvx4VrTU5bf9iJmT2etT3qt4RdYT8meSkKQPAPQ3U9WYTgr9",
  "key19": "5rMxLuT679ZvihATj1k879fVxR9VsYXXdJvdYXLoeYyUfLkYczbj7QR3RqEo2vR2atMWVnt8V1oVg5ACvvfxmMXu",
  "key20": "4uWmbMotDadKAkDYnPQ34jiTHuQu2A1y7JzX24iJ1yarVTbSrJbSyjzcFqrCkmkxSQPecpoqamA6G1wjx4GyzU2L",
  "key21": "3ZcHdssjrNtqrFUxcZCNdPweCrqzxHF6RQcWFDT7MKc6V6N2sC75erbxw73VkgdgECPmBuRymXL3xhELyPHUjFYu",
  "key22": "36QtGUXQW3GHhtRo6xPvfqAnbM4PxAcFJnHWq5YuC1qXkk1BjVSFpjj6tFVma1U6CYZJ5wfwV9t28mJZMds5L3Hb",
  "key23": "5oxAjD9iSyXcEuyCibiF5d1h7s5J24xFTE4KKK4FG52X2wyujGXZraXnv88PLmxQAfec5YS1YsnwTus7e3wqZLCh",
  "key24": "5gALV2GL82GPGFUfuhMJyCPQixdo8QmtaBJ4NADvyVuGkKGtfNK7BWXWLYVQAmUrgEuHeUoc4R1GXYeMQdrLoYdK",
  "key25": "4nfmAU1AX6efLP9MHEjsyKm2zzZkGCnM27wWxFoz5X31AYEw9bZSJH2Pxa3hXE9PgsR3RZmcUWYzFFQaftPyxFd",
  "key26": "5h5jDHGe28ywagsdbUwjXXpgN2jvQnTSce6CPfDCGyhBhSCwvigQwxqgrEcxnXwrLzqMwh9NW6kWAdkNjB5Tj37n",
  "key27": "x61MNx7xhJ3PBsstjLgzdjJST24i4qUpA1LuwFLNt4q2wd6XGLoz3aFPQpqXucMAitAKTqxxMeQBQRgu5yxqHnV",
  "key28": "2pBKXE1Vqge7fng2ZingzoDR34CU78sJtaqB5LbhjnecFDrm5kXLUZpCBQ7dLnav3fpMcXUwVNUVt9fyJoKjJQCk"
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
