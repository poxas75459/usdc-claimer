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
    "35A4LThRBjzVKJRQP7ZgHzx4CAx4nqSgNWGuah9HHATANJSnqNmjRtBWMC4Kc291RpLHGCFXZggMX2CbrqqEU7pJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A1yogceod4Bo1othU7mKgmE51ZDAMAue4i4kVsSXp9i5MPs5eiFbpTh7LDHmpt94KFYE2CWspLHPw5Vjpx98JgV",
  "key1": "2BkqKf5yP9b7ovKc8d2Vnr21maNMu3xBL6RJ2fgiK3Uk2sjVrPMxHUy2KJJzww5594QCCeEMR815MXnNk5GuZAou",
  "key2": "2VfvFFEFmGug8KHjVjHhX7jGJstJBxP8zQ8JtABKeKj6vVAAszWbjuC9ikQ2z4DUvLHUQGMaP1QpWrAjDd8s3AfZ",
  "key3": "uef31TkmXyUUk7v9pzaZ5LRvog6h3N4a3LiJWGY6Q7ZMCzBZayLp44JuQp8LhgmTJ3TSxfP8U3xpqEfo5jjz3wL",
  "key4": "4ReciZVmBH1xTA1ZMXZyNySoa4dwJrGqPU4QXrhWNnUHAYxzuqC4WVPwpjQuWQPaeDZPU8J6roVmXkaaSa7E9Dvj",
  "key5": "2jMWbRKURbSs7WDaUSRwgtk3MW46ZW8YEcgysM1eVcGTzVtZ4NiUTX4KWsVZgzAzB8b2Zg4bZcWH9tAzasgFPSSN",
  "key6": "5QpYCiKayaBtnYQv5sDAC3P8r4EG5HdyygZJu6RUoudcyRBnLqgDMLRK7WYjt8VTugakj8XYbg95rSnGsRar9p3R",
  "key7": "4pbdd7di77TnFyi83kDZ1UKpzWdJCdtVwcvVjcijj8Xc8RXvAGUb1N2ZCE8hu8y5sGE5f5qGiDuKfMyMGTXoiA57",
  "key8": "VEtL1LzNEg7gheWBE7WQya7hSzMeo3UGeBHbAQwVN8HEu8XSM1VTbaprsNnmnjjDZ99rj8QZxMXtgawAH4gwM8B",
  "key9": "2riZ8JodGFxJYwsXKQ8SWygTo4o7eN3D4sekJDpL6kdgkGNYDT5LkNVYivEXCWxEm5HDpeDeLaj8nwHMCpYJ2N5u",
  "key10": "RkHX8fPnxhKHF2DBnW6ao6pfzyi8oLdGPSq1Hb6ghe4QKPmz2XKkPFPM3af48PXMz7hC9r7DzzzuW9SUCGvyWng",
  "key11": "VfekQGzaduCA3KizpV2dCzz3N9kChWPvnZ7wFatp3SME5uC6kWmVpPevDSWSxaD93GSjKWkUgFM41WPYyXsbYrD",
  "key12": "U66HwpLjNV7RSxF2LvKiHGTL641dWc7xnwZtSpRSnXf5UtNztzEGFRT2pWoTqoQCYVrbeYWfFjoJ5c8mWzTE2WB",
  "key13": "5qkXKZxsXoKtAawHb64VoR52z65bd4WNerExBWu6a745yXxRtacR7UMzAWBYx3oAtd71NrzALRrqGKo87RUf6c1y",
  "key14": "Gw2UTSuoxmgATnrRa8H3FbXQyhifTKmaPDNeakAHD4EuEPrnnhHyrbwFZZpHhbrejNbBm3VMrjWoxsopCZLRqFU",
  "key15": "22g4AA6fPLJA69NRxRu7hmWcLqqwz17ySF6KVAvZRP3TG9Kkc9kypj9r7YBy3oDkw9GiQyHbHCxiWJezJosdguh2",
  "key16": "3S4B4UReDqsFgQqgBhMPqg1mxeCywDsK42rucYfJreMgEsyqbVUxdRK6VwPXgMuJojM2xUbgW8c9xSix6tZbTdqZ",
  "key17": "5Y7en5SvJFKEF8RdmwVVZtWfX4roCvxPa2UPmHea1QqxPqig8kJtydFifKh4zKcy6JQZ51rJrJBhqbKgbCw61ecu",
  "key18": "4rngUV3K6ey7aSwi78VhhJJDHTvMEjz1AKWVNpqSq7CzPjhBSVxot5Y5T9q5gmkx3DpFJmpWftFLGfpyFKdyMoJT",
  "key19": "mP75DuYayRED8N1SbFok1Fx8k6n3hXQ1Susd1LuUBxfLyifANVbaACZeAmsAup9UeH5Y1pEXUkvm6ygHQxDsLZC",
  "key20": "3fmRXxjR5tVtAsTs8Rc1w9cDCZ5XGgGp2wJFJCMHQy5ivX4NKDuAhx2sCbieXF5S53iKbESp47M98DdESds1sQt",
  "key21": "L3ogq6YLW2KvG8bXF3VDbWBbg2K1WmoVx7S6UusQbB59eeH6VFrWECyFucYZFFPPH89CaL2mxeKgSPXyU8P4h5P",
  "key22": "5oN3iRbYTomzZRiECsxEtR4cKWHyfmQftrUASq97YKJASom3kp8fkyC5gsS4XpyAwdiUtYgv13rJ96Z8pgFh6NFj",
  "key23": "46a5yWKHjEov1ZgNE6k7HC1BbdQd557oXkMFQgbZZH5D8s7h6WQLGxhJNL7iwyeB5ihpZpeB2KByzw1kESSiTLwh",
  "key24": "4wU9EiFKFCBEEQGL44kvRssnFYvMp9bbu38p7UHiyCc5RN8MhnvaMzXMqXdRL7ffTeZtFdELMkfqwpGPU79cA7ZF",
  "key25": "3jr7hvyHUfa1UEgkfQ4N4244LREX6H4ARztXmQdbX4F2QKiusuqmuK4UwjtF4P6PXiFphCsr9wSSmigX4PuQUkHi"
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
