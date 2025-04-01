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
    "2EQ3citKm2XkW5LT8d9wVZBVk4q6AgM9fHXWbwrsYbuP6TM5fwtDeQGrj6W1BwkHC7iLnsa1oMeF8NoQdXjMTZTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qiMEano7ubHrAuEfHiuFLejAHyf68aZAXRFagXDr6ZZ5nZG9HNGcR5oTi7p5EnwVcK3mNNvUJfKqfruU4731zHo",
  "key1": "3NyR2cs69GsHa9jQvCiddfuSRKRe6BYtyY6jUXHW2ejugdsnjUkSQttcdZbexkbpJmNtS82gp76YLf62GbMWvLac",
  "key2": "29YV5zJVAPcz4WJjfzMbKbDnFxFCv4EgaGUoTjPxhPwoeRSt2B3e547CJeEbHhwWuPXeLsrN4Z1NUh28Vj7uDLAV",
  "key3": "51Jf24f1cHy3ni366jD87fVFTm7qWNV19c9Q9A9d9BQ1xPfaRcmWg57RMa5gVvzxUZoTkyCB7roJ6pymCuX2osGR",
  "key4": "3AuGrcwPSjp8D84dMZn6QAzwd8tzZqL2pXtK377QbPKVatoCftWGbvN8aNmWobYquTUrQ1Rg4srtLbx82FXjmYtY",
  "key5": "4xLYCCVHHM6hpjRBEB2uRPaff547DVoX4GH7ALRpYymSxQvYf1s8FmFPJrdMHChxDyXYD7Hn13qnBtrgsDXGP7G1",
  "key6": "2SmLtxeMqnDSkLhdWVfisduyyXud9GtbxjJ9xreCf2e5hPiSofoYYjpaWBrJTWo4mD7jdhB5m4D3BrYr42MoVU4Z",
  "key7": "vgHzYSarMUvvXRVEQwiadEWtq6vytewHtRqA6LjNxcS5ddiAtA96cv6N5mCncXoFxGGimZStvnWvTbdqjJGKthE",
  "key8": "4HGtZYEXY63BMBkPxu3dgUFtZwj1wXopJoCq6p1ZgyHzTAFHVXxUseD9NzbxhWfnpPvh52YBxGcHCfZ7nn9f9e3h",
  "key9": "3VBcBNsXCWB4p25aDQyvNbP6ZsU7bU9SSiFSL2NujtKv9vhtQYazn3QasjzrbtFFaq7RDvf8Z5s57shA5WLd2Dq",
  "key10": "2C7bfgxkfvZsFbDBMytnoNPq2t6FDx7CUi7C7KxPAuAWVGh3ont9YeeZaXWnT4VzaXz75KEUaQ6SiqHmdEZ7F2WD",
  "key11": "5DWPMHwwHMk22L5H6b1TgCLbkJ6mi26sQwiYbHqeZ6bNmGKeUSFCsS5PewnTyroXhF4QHtA3iBdKWeuWmUzZegEV",
  "key12": "5Tci9xB2B8ZvRxSvET95AkMAjzihbid6i9JPyhU7tsdEFc6gTXjJm59mfDySeH4MaMpxY3iDfpE5aais6aUT7sGa",
  "key13": "Ck49JVJ4KQqFwSBEkEUj7c3g55iMTpc5GTcZJZEaQFtf5wDDsHBnLBzuvfi98D1Bo31FPYxBMRPGb6NyxRyqXcf",
  "key14": "6Pw3PhDn8mBwqFT3ejPEzNcNTE4o68uWhn1HP6o7ZNfkvzq7pQSd5kYEsnPnaJbpuDDUXng7xtWv8BWd5x8BPRD",
  "key15": "24SXFnrAQ6JDZMtHmgKuLuSNGpBn3i74isGTgTecBr4rw2keREHRdL6fxFRdy89fCPc2VrwTibLRvGiUQMeoJAaz",
  "key16": "q9UrNTAYQ6DfAT43A7mQUxe2JiFSuApsvEa3XcUPwTZd2bZpYr4fUApXtTevMnx1kbDhkSytTYu7QSJNLSKsBBQ",
  "key17": "2L4XMzBSmDhNxn9aCuCefxTc6jomNHZwi12zVCv82ZR92biwpfFMvfLbU4KAKfrMCZQmVeKkW1D26D3j3hUMDk8q",
  "key18": "2RwjVJPPZ9EYU6vGVWXCsASJWuRE2bLWEVwk3wK9tikDgARaDfLgk1LMZa2ofwrbrVykxpZG96PsTyfyx9F2Xk44",
  "key19": "4NEvnWgAk5XVpwWsH9Y1Bd5wEuFuCqRQumXktkHCNwirYMxKzxd7afD1WPzuFK1LYPjZ7rpqLYHycRqoGgAXvrYA",
  "key20": "UiGGKsZYreeQRi7KbSWmYVk2CcbMBX1uGYK3yzZG5GDiT7qUT7tEEQdKHPJxyWH16erhaZWnsPLB3JnmxkRBTod",
  "key21": "2f7Fhwkk7Sxyn3tq3BEjUaYvBqevBYXnXtBSTdJjTi7ggftHLoEYMZ7ALyMPo14Xf9jdwrVZhkCy3MygRQErw3wQ",
  "key22": "4cFbEdLZNasa93igLyF5m38AZ7MdSSHexXnbDw7Suzo1toQ7PhujQLpZi4aHPsdySSo8Pfftj1uA1xJLZXwByBx5",
  "key23": "4eXiSRWs515d34fhCGJ6BHQdgCNmJ8Ufn2hQLWewNELv6bAabMSBV8YWzr23htR5m4MZPMTAT8KJsaG8RLEUSYmG",
  "key24": "4ngsNrwySdJ8cQppHrBN5uuEZxHqSMw8ek7yv6ui41HfWUkXgSTPGcpEhUFxcmT9Y4rAGeFgL4nDe32CK9UTZ11B",
  "key25": "5qZdQih2RSC39foBuxQ3eJYErpRnVnFU9gXEJPDGTv5ScdDJ73CfmrwpYYczJzKix7RcTwdGQmKFqTx1t7Mof64N"
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
