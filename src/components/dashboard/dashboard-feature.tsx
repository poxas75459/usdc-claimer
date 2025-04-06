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
    "aKouVQsdiSPQcKoDBRoLJtb5kh9SQwaZpcCCrG2b8adntDPhX5pcwUX7uS8sVV1HSEwzyuY6PDkoTQgJHYm15tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hC3j6pDSs4iLoSPM7nCfw4b23aUhYPT3CwKTTxqGUmByhZB5om9zRbreyNu4ikhj8jCZqcxio1Kv68hBJQt4xhS",
  "key1": "Utrrnbhrx2ZLAN138r6MLQ4gotbZjSzwpUJtcfZKmzkher5ozJRVieRwQKzMQoGxKMoAnFpAaPcSw1DMtgHbbjB",
  "key2": "4NQanpDvn5BtKFAwSvpRNRyQbK15z691fCSMgoi77bbs91Qk1PjXDGo8noQ6k68gp2wBzf5ipHsPgLjzZszsptra",
  "key3": "3v6cSKcWaa5TUvRgLuBJSQo4oC1EB2HGhsrPCJR57WAKZAyFeeJRXnA9RXBzYUUjwGJQ6RLnqUbGbZ3qUk2NKT9z",
  "key4": "5iqvActqFhHpHyJoh1nWo9DrzGbdwkxgGfPxo3n1wgdutEU742DjTx8JW7rDFssEQSZs1A4daY6aMemzGZtTRNHs",
  "key5": "354XFUtQ6YMABXpSmHtg8wJUfNiTgHo21D2XihpTHJb6JEUcj97bTAFVqnpGQRyTNkfTNjtua1k9zqWypneWgZZu",
  "key6": "5J54JXoEJmimmx7KP9KGaeciVpMqMafLtwvmkMX2GwiqWGdoTbcemoT1AJXFx2pWz5DQazQqUj8dnM3WhsBzNiat",
  "key7": "4rjoWNvmmspNPtEa1X9f16jiTTr8oGgTWfwoi5ftetNTm6PyBbqB1xvioSvUQHeUyMd3CCEujgWF1umzMJTiEVAo",
  "key8": "34Vt5B8aoaoqFJJXxbVTREhhRnfaFx9dV5U8FqjWr8SBzEAYBDzkoHJ4nLU4Aee573g5Frmk4t9cA1hG5e71SLdt",
  "key9": "4dBkT7wb2oW6pr6ACuGg3XEKSprxf7nPUYdvHCbtBM88kQa8TZAuVM4QLUV8AgsEJ6Dfa8z87xRjMNuTFzXcyLkf",
  "key10": "2WzWYsoF8H9JHKbT4GHqnjo2qBxxjsE8449kmoHRYVVMR5HsL5FVjR8rH9jUgznayKwU32HFmSCYZqYNjZ77xtoW",
  "key11": "3uuWY9kHHTmRdq86CR49vQgunB1MRX7smWvjWDDP6ZSdKnKampQx9zmUQXiYuKcB9bNw6RqwtC1P3HWRJzuDZBo5",
  "key12": "xu3YnHeW6MB9fu2GyEGKfqVaYUMLajZD5DWEywC6M1YtpHrGgX6qxnE1ak5WwC5vRktETTGcZvWdYinwfCNHzZS",
  "key13": "29x5Zs83DqrF1udo6WtwsyJ5p3cgMBq6BwsusRAB9JaQaQrP3NZpDehEJfDJh3BPxCfiQb5bmXBpbizMEpSPSzD9",
  "key14": "4nWJzZd3pUkoDmtaZtgMxCs5pySDKKcCHJbMbX28SvbdrUUjfJdEU12mEncxbrSJjXhjAzu44ir2Nkygzv7PvzVc",
  "key15": "rcFQUSGp7oihxffCz67NcKmNRrQaVbAy9zx6qzP2CesthxpuEcyNpo2FnDQFZA87ko2p1zJhn5LgME2G242XGyX",
  "key16": "4UnXoAmHMkT16GfZg6VBn3V7GL4ppWLfAsqhJorht3EPwSpCq5Ui8pZR8SSEyAX86JGPq2EApNab15PXCkv6RTrH",
  "key17": "2tH2A6PS5Ed4RCDoYnL5ixeaeGMtynzyyYmpAPsuedsgt7mHS511abGzTqE3bu1wcDePAdHvap8eGHTqLBeNtbPH",
  "key18": "3cmpPPmDfYxijgBsriuTN5wQSZET6hQhnZPi8sYk6iFYHHXHm6P2tAD7gBo4iXGsaFgfEMLwsVWqe5RN8KKNnPGq",
  "key19": "3WX4JJ3GswhcKCS5RHgVrmp5aQkdP6yg4dqZvPC5Tkxo9SQF53VzqvfCDaii6QVYqLxLusavN64a4Y5Z7mBSHBEZ",
  "key20": "Gk1ufgFh1UXRctfyFhYCfm2iDno9BgnhhLsYSoCSsWgQvKQ6s75TMY9uThyypCY8fnwYu6xBRT2pRqy4xgXzuoJ",
  "key21": "4x6Yzpjxv1e8ExDNcMzaMsbL48uLWRJmypiWjP73Qnd4B8ZZrBj9rD8e3gXf2TicrCsiv78KPULhinadB33vz3kL",
  "key22": "5HJeoPnJA7qtxsRE1nTPkFn69YgR71Mv4RF66ab9Fmjgi2rDq6g9ZNXSQUvj7XSbcgGRY7s6qvGpHugA5DW1TUDy",
  "key23": "32McEZ6pjVvKFXZ9L6TYVWqy3sDnLBJbe3SDBkponUdop8vhm6G7cGafzuarwbR1KTxenPQ6Dey14cTuUABZjA47",
  "key24": "2aLzoDsZKHPNbzXL8kaRo1TYD5UwPVVFDxHMF9KAK6xrvWgrpcLp8fM6mutYm7xzWGYC1HxggSfd1tPgKd3TiMNt"
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
