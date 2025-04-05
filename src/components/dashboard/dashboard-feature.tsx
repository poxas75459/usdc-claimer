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
    "3KaTJN5C744MsDk63poa3pKLkHDWbJQ6Kix1FwMC9DxAFGRQvLUKzCJfRFWWqZ4PBtazy2w4Q8EuHLGi8zDuDpN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rVDJ6P3GeQn7YZmnEUmQQ54DuvVFf8LvD3cwNYpGKSWvDbFQNouCSFKxFBPHM3y4WUWLgzmQwmQF5cXaH4sKo1R",
  "key1": "BeNQD7j3sJeY9z3kowQ2XgFTex96LYaUYtpTHJByYEa36mW3WZTusnTTr5QBLtikcsTTrxsP7jFrTuiNJ3iFHWA",
  "key2": "4MfqEQrJE983Xdci2iPUD8yGixX7db8Bn4nT7g2YA3BA4Uph6BRm4ShfasYqg8E7tw8uCvJauWGRU4XAkDhsdJ8s",
  "key3": "5E29oizx3z8njEYzT7VXX6hTncp86AJZcdDsH4jjB5u4JyKZzTudQYAifcZHCfEpcHErXrdDysLA2Cj5KdbqXsws",
  "key4": "whpXttvMy82BgLSFUd7jcoYLrKNJjocE7guEtrXjPgwSfmBk3kcuUsb3JH98WFtVukmPH6pe8sziWnok6vdHJP4",
  "key5": "3o6suGtmxiEQdCc8QUVtF4FbaxoqjiEaBcDjjyiH77KxPzweqmSga8wQy3Y5NTEgLVMU9Qb9JdATYVmyFMma6Adr",
  "key6": "56DmTFD5FAbXiC6Xu3CuGeHjJXeGgZr8627XmtGzWghi3URmnZ2N5WFKG99XES1vkc3fYqqwXw7jLYvccb44camJ",
  "key7": "8gZ4NRgDYkiaGMqi4WVwuU2K9vfvM5ZDft3kH6nJ56nTXpYZmmTswudp75aMZsurLzRibzwyXCVWqQcH7FdZLdT",
  "key8": "RuDPjCYBNbJVpDKzTu1bBpGnqvZud2w2cPxPiFAm7PSgAsbFMhB8ABe81UG5kczuHKTzYszcJ7iZBczfFgc37mk",
  "key9": "2FHmcxboPcr9bZuJ8uGzHHTE4K6u5yrbGTDHAbZ55hUFNhiTZkThG4stitmvfcUVs2rYXRTuKVpETGa5DAhXLn3A",
  "key10": "2CmcwUrBsHKvVTYbA9aetRqeftepBzLyAHxKU8zHqjtVhjdbonixRsRM5dc81tW1iqemviaCQdg36uBtiJtoxdRr",
  "key11": "oNN78cVpq15YQJYm8otGoSNEwgLBAoTBapSWTnNEEx8xdCy5AaJSY3Y7sWXZ8e8PUHB9vA2qanbwK5kf8bNcWvz",
  "key12": "dbuHBnSVeVaQcNdi345cAyGD6kxpbGoBtnpHKvFbN5RgvRuZTN13fxmfYN616KKSuWFaYeYwuenaRDt2Ns4THTv",
  "key13": "5Zh3LqNe4CpuDdYHHYCryqT6RFcrchAeEiFsoypFtZ81aRSnnY4PQfK7kWpstfd7VfEhAA654niJwPuR5MgwBxud",
  "key14": "3zGt4RUHqFojSVXVRgvFUxdpNVDsC1F4iYMUjGtnp5V1gde3C8GvinXmwHVPnCQk4BKotYVgSdPKXc1YoZb7WG36",
  "key15": "2iYSzLc9FTPqeYuhiQgAo7PLRrtRfFFTAajpY5xRDC5yhytKwecyN69gdyn87GvhLpkoLczMbtAMq2iSHMSBepXB",
  "key16": "2KiDU7yoc72hX11FYzjgs38UCZUYmxQNvyMaPbkY5VaZsP8T9wtPvGCwFgbm6LtCtJQED2Tt81avi5e2ihfG7ym9",
  "key17": "4TSuYqc5UjNFNvuVPwajSexpx85UEyDjx3ntUfNSLzYDg3pYRGvt6Kvu6zY8fp4K61h7UUXb2kPf8Leq2nijYZUz",
  "key18": "2r1z1VQUW2TZo3o3inCuAQsN91GB6kv5jDsw14ytx19ks1gGETCcjiqrTeXwFUg6CDKpyS6rPFy1kytoLwfR3hVx",
  "key19": "4V8FuP3MBFVwXpLD4Z8EyuLM41djaMCTFWZSBcBuvkqmHywypkJugJYUMJwfvkkci4JGgwVqg37m3vycsSveWAcD",
  "key20": "5445rotmf5msFWLpHD9sMnGc1spQGBnT2D8ZgLWwyqZmcmiLuUGADqgu4xYbhZXmDgucbiXNribsuxHGnoHagPtS",
  "key21": "5V2DJU3Wr4kaCefdSSffKT61xX5xxFnzvS6x3viLLo91k38VuZNcDzaKU7kdWGrbBEwRvvfiZoMh82QKK8EvHR69",
  "key22": "4LaeFVYjm3uejpymZpwDUZLvbApS2hxTs6juZMyKmjTmiQXd9w6vLZLLM1hpGpcjUn1S9qxckwmR4J7LW6aHZ1J4",
  "key23": "52CceBib8SUEsYC7vjHovA2M2MJ9oJ2Vb29X6yhoB3uJTJuzfTw5sWVAgwxKs4JC6YPa7QmCmspR4UXEnsp2y1fP",
  "key24": "5yCZPZF3b2tvymGTJcHVSQLYeg9fGSpWUu926jw1yAPwvqLD8s4mavW7JjwWaSQxvrHHvd5NRs4bJrHaVU3kzRUC"
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
