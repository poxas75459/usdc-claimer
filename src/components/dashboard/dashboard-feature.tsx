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
    "4rgD3xrUm8motXS4oRJSw5pvRERiytZstEETcpCoPfc3waBLiZEUHJWAp6Sb3DH1eX211XgBFW9MdNst4H5heZhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7NAeoaB5A9FFQt43Su7RnwVq8ezXdP4nrHo7y5W7w3KC9p7ig44tiV1QKYBQxrCJzeJbwh43LK5KDRaMpWeDGY",
  "key1": "4MpnmHs9YKUFaTkaZbyC85nH2NWbwc81odzMWNBZQTLHjGDzffb9NMtXhvCm8wbAuYiY947upABNUaxcoioQtxuW",
  "key2": "2rLBRZBtdujRnJhb9TtDSH1oKNanwKfw1vpCWx15w3CR5xGGaMFszTenLQ4aU7LRTNsrMVnyMB76yPH49zVgL5yo",
  "key3": "5Vg17Vnk8RWBVFY1U8wcqKzQNPU7fmw4Ki99JY8WKZ7s9EV1R7sZ14vdx5ktgSkt316x6fshV8gdvuoTmSjccZAE",
  "key4": "4gM24cJMA41wdHeMNsyqFVmaKA9vVb5nZYQmL1hhnMbaCYSRhgKebW9X54zjD4j9kHT9cA24kRfKy5jWqGA1A77C",
  "key5": "4rwK3UHBknV28zzZ6A1qpsw7L3GeFmhks3Y7qKYjxV4siDk2tdcwhbBzHhDYmBsTg316kifZnADDQ9Tpjdd6BPXY",
  "key6": "2o2UrhuAQsu2x93x7c57msvyaKCpFGKNGzpT3JusCfVnzxRmGz1waLDLjHRGA39sZX8f2xG7y66ip5wYDo2i4DQY",
  "key7": "3bvMqvh15VJ4Qevy1nFZQDd3f1Ab7cpFs7u94zbrqJogPwyFR7mgFi1Wn3x3hgfaKsJPCPBkMxeQvvoJpbtJQduZ",
  "key8": "4r3eoGSc32mp1mpJCByHB3HmZNh6JTC9S3ifqbJ5pybWwgT2gmew6XkaU8abfZK8hop2zMpvYo2HfsZRecrR51gs",
  "key9": "6722VdD9JdAmxj9xFwzXK6qjkoLrUcH5SoFZgGJvV4qkQkt8ShTGL3j4PWAVkeM6Dx3Pabn7FARPQvjq5VSV3NyM",
  "key10": "4yig3zd4eZ7cEUAswvooHeLJok8Xgjqtv7edjNfy2dta7xkMf5UacsVnHVmtMPSuMRHQE8gCWcvDaUmCa3hnbzc1",
  "key11": "3rHsvFKEdToQZGkJGHA42GDpg4FY4VjKfCMQ5rQRXDvP9YZKP4wjaTzUwvUa1MwvpfMmv6rmoyLRLn2t72vqcVvJ",
  "key12": "5emnMTZUQnxvB5QroS7sPxWDfEAGJDW2gBwosLGedq4Tqj7atKjv4wECVD11b7yoBicqsBNHezrBiprReETDLsPs",
  "key13": "2LPrPSU1hsNYAWgsRVq2byCmFG6dXHsX8SCX4sFqmS1zn939dUHCjerhqueRyJbHJPhyRh35cvWWXq4jtsbEXq7n",
  "key14": "4UQzQU7wpmMcihtvTX7gFj6jHxSgjzihoFURq3iw7nAifzHeRwSU1aWGXLHzRgnabN1PMMJ2P9qVCJSzjSF8pRD9",
  "key15": "4NfYSai75Wwiiawmf2zQKvVQGnr1VCW9mL9NvcETh28vSc78Jx1bafYU4AqBMTMDAjgLeyVNATR3NXLq1FimwarT",
  "key16": "31krMhrcPY9BQVe7mNupwzu6XyH2bZv8AWiVFqAopNWxU7qnw4w1frUoKAhYh6UW84DLPvAqKN3Sx65JHwbhuNBi",
  "key17": "2nRYfP9oKUkh2U1cBW83fveUETNaK29w9tAVUoWpx5z8Zq4e7Ttkw7U8GqMtXL3YJtyEx5mHwKMknh9SyQNSAbjK",
  "key18": "2AJ4cRmG8jozTCnshJvHYArCyHtaJGk9cwPmjQLNYqwPMEetzFEBbmy3LBcfTrvMz6oMrvMQvervSYz3Zjvp98GA",
  "key19": "3HE62BkaNvrZkZKpV2m6uWiFKwAvi77t4NCW7bq3Ek4dfKbipKgaFGyNdYw1rc9hA7x2yE9F4k6gFsctG5QZi4dM",
  "key20": "3b7kKoDt5e1sevFRqqHmTcyrRz94UQZ8d9DjtvSbAH9utZA4VU5PZoh3xd7WseqP5hGrTQGBBgMpxjqRgm6mDXQz",
  "key21": "Hzu9Wrs21rphcWWgKVhm3cnC5nXLS81do6j4cVESwMPqMU7CMZMuhxmJnWwtrqWfhVHa1C3bP78CcsJ6SjRbdiD",
  "key22": "Tg3kv1vvwxaZzzvKsrSYegFFnw92WHKxN5F8NhZTvwatUW8ZfxF5ChY86HoUQhA8H7WKgFtSwRBCwoz4o9NBJnH",
  "key23": "2jGjfdjEWngwj9gzriV1fJrqs6Z2eKWdWzqpqWY7xPZLXQu3Ri5saLBQaQdA7NoXVTocM4qXW6yfsrhFqVVu5FTn",
  "key24": "Bk5UPcrFdB3HdMhxeLtuQHowkzS7mMHXWn4FqBaFVccP3jJ9voTiZK3GfB8DVeMSuy6fyQxfAeHiPe7Mfeq1RQo",
  "key25": "5TCxaWbWWbY5CzUo2N9Q24eaMcsaWH9NfB2h7kYQjJe2LKGPiBBP6TJygF4FHZhLNyxiWFhG9tkHKYsPRXTvLY9y",
  "key26": "5r8pSXHjrqaaMgHiEUGT52bLGuZVHzDjCDGgR4AJQaSbS7o2ou8b74cipw7r2FBEXdx8bH5Bj5PMHCJEkqBMcojA"
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
