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
    "A9gmC8KAnx287oVP78m4xFGABC68zh5JAAbVN8QYdri9nkgvYoSZw1tpAwzK3Gc6yb9b9w6ux2UUQXc9tdtUqdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27sYgUUxKopRtskfdVrJw7Pjhd4DhJmqTbGfWAEJ7TtYSna6zH8K5xrHGAKmn9iPi9PezTBKzuyfLHqyBFfqEoFg",
  "key1": "35zpk3EcC36XAyAS2SvueoKy6hFCn65UmKeYnY5ThpZAU8MWu2YgjesZe2dMCEgZm2XcUqttCkk6m2577HkWiukQ",
  "key2": "4ewiCee8YuQqhxmE6RWSgyBjNuedPboNFkk6jCysPjM3tJFmWjCjxGZSSXUTYMea969D2Q5ZRQkUvGju37oceWry",
  "key3": "4weuDG7VXVxaP7hBLngHfffF6RYvhY4LA4tPw7xDS7HgypXGvLMG8ZdW9JLQ7KAtdf6fQBGtmSEJ29HeQ41hwMBW",
  "key4": "5V2jMbmPLjj4s4gKLyyy8zwxgdFpEU2tuofagZtTtt4ehSKVRUnM34vwxNs3KZLuzZB1puyYfQiKgban2X3cayU2",
  "key5": "512H3623oF2dPMjyxTHQH36mE3ZfGcbaCEd94xQn5D9hs9ZtQAHSHV8g2dA8Cw5vFbwLFCxZkJZpKwKbAiztQARZ",
  "key6": "5K6J8PDzaAhQwFEkwzE3Ax3vwp5RsRKNr9of5rwmsmNCWyV6RzhbMezvwyL57nm9swoyjFoFkaXdNPuuUaDDJnMm",
  "key7": "4G7NLJY16dmiH5bs7r9wdHNcJZTfwDQHTn29y9ryhHWUYVyVftFeGyPGd56E8d1n4Lnj2kftyb1xuRTkgLyYHhvc",
  "key8": "SDYjeYyb8kNKEDEst1pgebNih5MXN9UTcvABBxmJfXisNSoLZfZ3Eb6JUt25PqVKa6uv2XQCPBRkXoyc7xsxvaP",
  "key9": "2TopKyjThoF2x9XKWv3k7DdXNCbB8L2zCPNZZirssbHZPwidJPYSFSo7sAW76ggNxQsUqpKqxmYu8GrmKBNuXcUg",
  "key10": "36DaB5z8hjEPqjvaiN2TZg4cLQxkpcxcXVSqbtmsTn1corcLQz4S7SqrvnWCMLYmu5qQzQKWRc8LZjzNGDtSB9d8",
  "key11": "2N7YEpPg661dGKjuodb1mbDB3pSDYU2pN2agichTUm1szLEqBaDAtoWPAoioLVegVvV2oSsuBNd8RSsHcKhHbeqP",
  "key12": "3TYf2gdKRo7kh882Cu3deXNL1nSe94obZ36i6jjHcvqCoydbnQCzS4aM72mzEb1UsgBHEaUzLrj4fQowCxW59KPq",
  "key13": "4GW22VoPzwW9eeG516HV5fdndUAAjS7CScUmu8EYcpvNzQtjjFNN9vhiPuSN2KNRtiQYcVV2Hgm8AFhtXzyMpmX8",
  "key14": "5iqfCqiQBtfaGeE36ePBxtMwezg3v9iCacpD7V4FX42VF4osE8SdXGgev78gqFJBqbrHbhm51NGtDTFKQHMH1k5U",
  "key15": "5fXb44DBS2tpxP2xa6ehrsBCnDCC3TayhB5ri7PxVdQ1jigeJh7vNiQQSzX7CGLHr98izF3FoVypY3XqBXfESxNx",
  "key16": "4ZKsJMPFEUMBHd3hnKpVomuM7ZjvEiipDmz2fURZhQhbcEu3L2kQMgqhWvAhs2kcxqiuqEE15k9HHQbVU7B59HV4",
  "key17": "2qWRPnv54fvHLAF7ZHR8gKBNA9UVumXUoasr4yAR7WU2dVRyHmyobsg8kjRW4hHJsHoydaBqQoc1JPuoMvu89qut",
  "key18": "4utbD7FWRvJRvPAjanTjisQruV74dY2YFhMWbPDTv9KWn91pGTS8RP7dKqpW5b1kyvWDZQPgxNA4XCwF5KesF7NM",
  "key19": "h4TzssR5Z783986D5qaa7osuq57atdfZK2o9bhWsC2ANVqEQCPWpFeuAxTrHayycSNT52RNnCZDk4qgwc4JUpyW",
  "key20": "2BwS9jc4vNTyqqPUc2WJ64djebTbmX7jTr3XTxq3mYAQ5ofe7jxvSj6x5z5pHvw9VCQyjtGEezjkvG3YkV4uDCmY",
  "key21": "LiaXjtLA43PvasEkLk1xTtTd4rG4a7xgGWaE4o3TCFwoBVjh4ymntYweXNtoKQQpU84Pg28uhXbGp3C3NW1NzUz",
  "key22": "FACYQoVkHYyJyXhvMx5kF3DWuofsuAFhjUhRppr6ZTt16qZE63tLBV12oSujYuZ1gMZFFgMb88roTrodUsBe6CU",
  "key23": "3d8FthYgyHMQRrsxFHbfJqEn5VuFDxLc4Z2SPQuactK5s3kMEngTivJ9YSmC328yjV9tSDkC9pBDpefC9YDNjDro",
  "key24": "5JPuSHBTWktCeamkubFKQKbdXidf4ktZ8G1U9a9b75jMKoiiKTDgfh8qia2WdYc1k7Fq5zQeTsCHekqcrEHmXPUu",
  "key25": "2LYCt8CshYErJ8b55kwjvRe2LN3NyGSGcRStXfcBjSZMLad1eDjTcpwZG5gUVw2WjSciCmgSBCaGehjTD3Hf5dqz",
  "key26": "4QHkA31ucQKtBDzj2NsiLUNRfVcE6o2M1iygG1dLQYJhYbdDomu2smVMYYNP4hX6xcnp1TuvwXbdRuA3e35jeMaN",
  "key27": "223NPwihQD2HgddRGgojMvjZdvoCtP85MwydKGazV2vok42p7C5giLXTgNH3imbRM3NvcCnv8Nx6fNJYVEyoHxGm",
  "key28": "2fq6N1MPjFqj7wvL3gvDCpYvjuM9LQPK9T5NQazuaSHNM2ykyCrZFmqMEwbYbn72KP36p6C5mbVYaipjk56iRs5F",
  "key29": "GHVw9wJXQHyQJrC1uxnCXReUjVtkyAL3h8exnpKr5PgaCNbiPr9BriUgDusiZ4ip45gSvZ2BupC8NG6zLrtPE6z",
  "key30": "crjQ5JWnehk6dN9114fHqHSLmX7o9kzfY2GWKXmsUBREPynE23fh3SSsR2Tk4dNjfy1DMgoAqhQ5eYoTjUFk3D1"
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
