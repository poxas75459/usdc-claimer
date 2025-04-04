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
    "5SVmTGByxCRy9H1ZQSPUR6s5wX637thmQGWK8qYNM5YaHLo9758xGyFxkcyTw6kNRJaLmiVkSDYf1EHGszq1i2GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W62Xaw39ghr7jYxNKxuLtaQqC4eL98wnQBJyfN2cLUdGT3StoGfQPnEDSXeDs3iYLrgaz8yM8oEK8RGC7Yt8M5U",
  "key1": "5kX4DSR3HAWXUC2jj74h1dLxuT8RKDwdwmViMN7Z677cY5uFfhPqqvXyxL5KEyrnTbrZgMEvkCD2usQqYZqGU9dq",
  "key2": "4cZBTAFctGy579DX876JmsqXtWr47fF2cpwiExMtnaCBLLDH2E5BskiWAUk9Zj9S2tncueyyiVXTgCXaFVcgdz1s",
  "key3": "31jk9FqKPNHtRnXTpttzPm8tNotE5RxSPEEgYU5ZCPjfTEBid8JTuAgKRb2XhtsMCY2o7shf1pXgmuNxLQik8MES",
  "key4": "MiwHc565qrdyujVwB85XPenvgBCzZJ6E9j45w3cajYokkdHH8U2wuWemZyN8rtoae1T66vZkU4tCyUWGS6o7iEt",
  "key5": "46sxt3CSN9F3sbS5kv1vmS8C2T4YJXF8642yuitmx77DZ6V7dWtSvkZddrXAJHS7zRTvuKbQRM3dKnD5qsr47bGn",
  "key6": "3ZNF3LnAGysHDP49Y6J8Jpc9aD4ad2EkNYE4oSjiyHFiqeVhhaTJ3i88tuYsb664WwiVSv1aNg4AesE7ZUFisRKM",
  "key7": "32Qr8Z3r7T9GANz9G511rac2jWq46qwaBJtbTGUFYoZDYqULLGEGkADCzgNbxMhKKyRGiKK3hHiseNtQDfXgSkiY",
  "key8": "5MhrjFFsEsiG8dYwGReR3dGwMkZaPKYBPbbHY8kT4YkeG9jyL87y1gXRbu7bVshNo5b3whkiuP58WEyX3apnQ1eU",
  "key9": "4Q7X6WgV2Lq1mPn1XnDqJff3XUh7uHz7o6ctwLMEeaJGn8rBxmL376Kz45oySURShjWW2AXR9aC4vHqvcfTLX6ri",
  "key10": "4bYo111Vkt6pB4fmEbBjAwLz8QjnX86jkcRfpBiJbJCEXrDzfqcKaCjh2L4fvqkBoYqdGWuBXbRs3cZRaJBA32wB",
  "key11": "NvaJ5eKkHZ5k2bMcax2Gc3j3X8ojsPCnSLCwF8GoDgmSS9D6yaSpeaDeXR1udrj9srZjgNqTNoAA5US7GeJZNaZ",
  "key12": "2PMaTcJBMhu3Kchsgx9YY4LNRMNGSsG9QkdBypB6Aqzoc9i43Ehz6qsno7sjSuFkTo2HE7ZXHn8jZP1i2yRLWHoB",
  "key13": "232Rs75NRLYa8JjKtXfx3YBbwHHrWD42iL9JKRu7fAZ3dCzUHsem2rT8KgXpS5gJS18Xy53a6qZ3tdZdGF15jj3f",
  "key14": "4J32NZeNFtTLkNSYbBJS2ufzjwsNh6BwhHHXHRpaqTJxAS2b3gZoxwDCbezpKAzXDKnGvB2XTZfoWWqLx7j7AWZj",
  "key15": "4CM6AWYSMpbxtjvhZN3E8pFraH9tVpu2oxSYsv7ZYUu549a8HmizVH979RprTAxmgjat7FSm6ukEnHWUNVRmceUu",
  "key16": "66UQaGR5x7ojyD9mP7LjgzacZqeNGJ4TxMPS8jJAtcG31uWHXyAPfUqvMCjLS9bXrLS5cCUxmtrcn3aXLsiUAwR3",
  "key17": "66Wfh5bvUck1fwf59V2HcUVenHimHz4kpPcmStHu9H85JZgjkAT1RW765D1EXbNnDAhR1rK46CviUXG19hz5T2XF",
  "key18": "oF96cw2fHXbnwc52uvWfce3FRdoQoNmD8RKThUpqbH6hknCJFYzBk4YWh3EmskM2sNeWM8Ex4kWRM7Era7F8oBC",
  "key19": "2TZz8mFqSsJxUese4y9f3U3aU9yskvdGdE8HhX8f5e6FWjx38uPnocifrEXuuvJrWPdsEaF5hrcBwcYBJXDy6cLP",
  "key20": "5odz4ZTSAAmWteim2f7A2fz68gWrvv7bW2Mhs6RatkifBvFkCKGSVKSmudZYawoRC39uo8FTqFShxcD8MpyeRvUs",
  "key21": "3VLacK5mysEELymXaczzqne9RFFiC6iwuWp8judT9sSqSGndeSTVPmY9Ma1kADH96u1dQAApHVtAWVrTH9L1w9mJ",
  "key22": "3vb3jZBWXCurMDa5z2R6PctAYUSrgWPBCz2m1w3Me2Xj77hhHKqdDmMV1JEk5ddtLbELcBaoLh9VndReQQu2HajA",
  "key23": "5ghDScqg4ZCnKzDgz7LMEF99frX9YufFDkWAU67NgHWUwcboSWGxkBHDbNiM1uoVsYVaTc9payyR9rTVGSa18wZm",
  "key24": "4ACpovmrt8kuvAdBCr9o61dWaB9hPRkwc5SEaiUvjExoS4vfji7iRz98Rg6uCzNHzarW8oVf5UHTX25VxDAJiheF",
  "key25": "vfhWpbg6uKZdse3x94FhkiigW5a2FPP9fzjhwo5bbyGiwiaUMLpCzkM3XxtsyRSTE6zirnLHa429QRWE5W7cCVt",
  "key26": "53CbuLRw8LroQbxc62TzBGgBvfgCk5dZHtreW57AUgCDghjt9orJqCwHBQ7uFzCpW8xmZHxDdS3wSZcMJMBcz8D3",
  "key27": "2Bnxyys4jRcMnju3Zxw8BtoH5BS5Wju28hGzbSLUQQFpx1HsFkTWJdYZgbNgWjsAmRnPDyB5hsD6TNi7fv8jTBwd"
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
