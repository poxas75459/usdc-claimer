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
    "61ePfUsaYqftSjHSTtr1XyZSzocLnLnYYxqJ59qvZGVQTxKZRwme7eTvVcSUVWqoUPRqquXQ5aaFNph4vtTs5sYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQtPJbTMnaqmS9Z4dnVW55QBzKk2ZdMkQVobLxnDNkDK86UrTxTt9YqkCsqJBMjNa9KxFGCULgzaNYw5pNYTifU",
  "key1": "4P9QQ8paWeNwJCufVAsd12y11Dnfd9WY7kjhxVjGgDQUdu39yJq7zYeBvznZUQRq9xH5YYrPorPR2deKDGnRqdLV",
  "key2": "fzeVf4KKbGPuoywtgUMQpAGSe8SywYfUDViwnxbYESC33V4zxZyU1rtLJLJoPJFJBThB7c97pkhscNn3jwu5s2w",
  "key3": "525KZcXXeCMWee6MDH9fbpJniCemFsWbDcLsVGELqDMSkuzteNUwxFAzyBzn5WCn7yW4r9fmVvc3XXQTBLSzEFz8",
  "key4": "2FxEB5tF3HhXj67rEobc4nAMN9FzPn9yxME5zyjsAbZ6SuaKN6S1z9sTtN2RntynckdBJoSraNi9zm7bdaywcKNK",
  "key5": "4q3CJ18mUpmJkVG2PFv9wEKQazKYY7CMM9oH93agEhd7zCqbLZtmXeLh4GTqGLtBXEFVn3q4o5W6W9WzNvMghcyb",
  "key6": "2siX5v31CbSDzAatvEbbN3j4iSKBtWE3V5C89QnYvoog3psNz5JeEmpFHF6JhjCjQa4bz78cth2d6QDVNQJ21JgS",
  "key7": "3BRwXXaXENxzqYtEde5UbtvKSAoJ7NQSnVMRusC5pvVQuRLED5gtMovJ1h11yQkS82PEDyt2mMS38G1HB7GsvjS2",
  "key8": "53vgPi3qBN7ZasX93jDFmPZwTgSmccEbTxEQixMoMAxks7HEuz1eqxxg6RgCj4jhpg5fjTvsgxwKYPG4Df4L5Y7M",
  "key9": "5JwALkrma7rPR4uSACQYrD1gp2nGgNFtRm4tLpYewadArGG2s5bBC1GfCvZ7J24eLSDfDVBVEeeY3xyXfPj65vvU",
  "key10": "5TKsyEFeKW3Z3ciyhLdVAqXtSgx2V5jtnyoA6fjizSgGcLb8FgTvsCZ1HHR1QvoULooBhx7byV2wgMeRpjvfC1Yz",
  "key11": "gaCVNSuseB7dUdWTKsPK6eYgDf6cvqbFRyYTmrab6cTH4ZRMBtsAhEcizDs5HBFBad3K3vvsoJsnijfEbHR7uEW",
  "key12": "2LHVyps7e77BubkndE5Bsfx8DUDL9zeXZbYKiF7fSSt3BnGRkoXFCa6KQY6BwgTQGGgHEB7EMyhVpWMjtU2r98nw",
  "key13": "3NZsdJpq5zeSoqM3javcDFQyc78zjLjth56pP49iiSRRYuzZL2GLxK2TBydocnpuDVbRd5sXTzETy5o6BYgXJbFv",
  "key14": "2FNcYJGfLSFNSEdwyDf8o3yHFcttm9pR8CBoootqHX62qXEinAySCdtKrP89qJRviHkNntSgYsf2FoERY9XYh1Pm",
  "key15": "3v3mrV9KvXNCyUt9jTtaimGckQ1hC7kj1GUMcwJmoYbvkR1pyB4JNWGr71gNTLwuEWrRDoALD67wrMaZtcYAhj1m",
  "key16": "2wUAiudNjZHhqagGhoSrggJ9YZc7HQJ1yMyfiteLUkegkANFSKbFY9tmSjwedW2BCvDQQ3jU5gUxbCWypRC6mp4Y",
  "key17": "2NGz297ouVAxZfzM7QgiiUrpg9e6e3mcc6cvRdRUUC8ZEnDmos4v2g1VLAQwJRKttzAHYxGgG4pmmYeYS49nQsJo",
  "key18": "5qaZ5cNWcMeH9j4Fa4HhEGYmpDf9QSTHMzLn7t2XRyUF7xH7wVEe3BKPvum7jc3s4tixkDf96EZ9KnWvKDKuQFrt",
  "key19": "5zGbmiSw11iCpzqYEpX1GdYrewT5oUoRD9ACB3ZtjYYEXmEeS4wBujqpkjWeCLWdnTEpPvcGk685qZmKmJNx9AYq",
  "key20": "5LY7wESewgNHoMYzzDJE27jfjZ85r3Y5UuBn8LA2w4EsGymNNBQxgBKjiaoD2aMmWywJUVVm9TBxMGeVxzMCipM",
  "key21": "3JoRNGGBxBU3EyMr3gXx7SK6sZT8uagG2HuAjfqqjkYAKPdUHsfUz48f65uJ1XoQpATEzphSSKc9uV4p7iBgiruW",
  "key22": "5FsSP92ZWonHou6RuN49SJz7zRRsiocCDuv8oUQPAioNjeR144RmkfuramQg15sPtBaqMfFR47v25XBfcfFfBbUY",
  "key23": "V3M741Pj3G77UHFTF3XiSc9ZcDkRM73EcinBX2Yi7UqRkswR8fZoZjUzfd3RpC3hrRd3qmdWnfQsh91qZtCsekL",
  "key24": "3GHCQ2wYvbRehCKaizLUXQ3KSeK2XSSzsuxfBHY6vu4bwMuSvVNEyNbYiyg5xhiLA6GVNCu7uguxXaMY4SxU3Pz9",
  "key25": "5VoJn8qCrPUGaPSFe1C8oBPWWfsavyvvf2Bfwo223eefL9n8cqSEDs4Ex5woewtX41BeYJMMJaeis4UxgTG78ftP",
  "key26": "QSiF7qXmi4rThjooCSrtJ2NjjJoRNPRTYCoFSAAnLgsQRnjzr94L912MFZDHLoMZFx6TdJ4ZoQH5yWa2RH4UYz9"
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
