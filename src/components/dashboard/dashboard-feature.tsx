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
    "3Mf63FTtQbkKb6YdVQnBWbg2uGdSE1JZuYRHfspviBmDFofv1MDWdkrk9N3Pb9v4u9c18eWiYmcEqVV97APaHaSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8DQ68y2giSGFBG3gsZeRaQzMFWEQ3tz5CtXFiPzKq9vPwChYc2DUjEVxTLPQphZpY5h96bgwYZPHVzvbbv4axS",
  "key1": "27ALrq8W8VSiF6zBihEZefJzpm6ekmfxoqxgefEJCU3bTyHn6Rknoi8uCNsusVEp57QWmeqfxfRJp4cWwqPU8Q9G",
  "key2": "2knNeAxTD38inynnDaP1v5qKjubLVrYJJf2wD61pnxC3FVysePpr94c54G4c173ZxRjHpBo19gfZDCjE6Rtm6vpG",
  "key3": "2B4w13epz2xfotA1F5JoXZfXH2hzkQrqAwCy5DrsEq474S1gP3adn2fTKk94vYEsz8oPoATYf26vfYS8dG1NLoEB",
  "key4": "4R8ASDhMK4dkkMcQ7tsw9U2YKxPzi3PaaMDzZxzsj64k75X1X97pH6ZBGURvFkkicEC2AoXHWntjsRVbZKY7K5yb",
  "key5": "LbUGKJLjCcC73RLWD7Y3oZp7WumbRgHhiu9q3A5cYhRNtYejvPoc3pZzMHoTP8LAxGrb3jFhb8zuMnCfnTNdpEX",
  "key6": "51DCogNC7CAW7rqMsMAgSaLXcJ473FpfwZB7ni2UJ4yLu3ogGiJ9fnyqLPZNKQh63ooyEMZ2YvbwfnKRVgkVmyfR",
  "key7": "5V65mHWJc3qha5ZGqkH7jmQifJBpdkfNywHrFCSiNmNicGStwsywarfKUC6RXkvvPqWirkmnDAW7FxTcGx9XQYYu",
  "key8": "3tyFNayLVX6WCWQM1ZPFgMHqemBypKAMmGLLNpERyQS9oikrUQgEEu7EyxbmGv1XEiNJVRU1XGeBHY2gBevRn3Gr",
  "key9": "4VqaeGEauTGntHE8D6h43U4PTuJNeJ5qUyYN1gooo8RuFrZDTHJrxomEAUzCYGMsogJSr13nRDQPTiHFVqjhYQDf",
  "key10": "5VsTtGs3cGpptipkrhBkqcZ7LREdhTbdezNRjSGhDPuKLmWRjhUDHSLXJm4AUkAyamMhErofv8w11uiRkE91MmMY",
  "key11": "3qGwhvWoakd3bSMq2d16tsFu7MfkC18VjA4aDnooEwtKAAwawhwcXbLz2B4N4HWPCkvT7wMyjfdTwGrUFvhEE3cs",
  "key12": "2esttXjSGphXQ5GyGeTXYyrwUoPEuGoEctDsazfNcirc2hpsu2jvQEkqTikRzz3R8gR4BrfGL1hiroT4gcHCTZci",
  "key13": "58dWhVuiQk1V3d8NAoHEFNmfZuCCcNiYsH1as8YEQaYhTS56yB8NM5u7V7zV8Heu4tJKkbvp9AbaiGSCrcCZx23s",
  "key14": "2TQKpSmER21G9EHBAXHPNpASqnpvfyW1N38jFW2QJfoSieYp8zYnhZG9QMfo2CZpJAwTVJhQKATkzR1HbaVu62xb",
  "key15": "hxN4tEBaiTAZQEvTaahpqUvskmgCsuKYUf8amWKg6vLgMNvVAFMx9bPi6Tj958wxSJMKx5zqj6C1Cr7GWzDnUQ7",
  "key16": "6NAbQmFCHGbuDDi57H6ZSsxNu38iAFCtw31hpNZthrb47SA9g2CHfU9Db9sfZwiD9DsCkAVm4ZkePxUNSWS1rPe",
  "key17": "3ypsKjwe1Wd8yW3xf8n8sGXCZnpreqNTXCpFJBhKd5SsSCG36Y2MEbmTv75x96mz7myPV7ZAtzwZQdRcuYYVHxds",
  "key18": "2ajTKRZr5zEKpyEVTMDc77H3VgqeGeTvovaf9ngpT53UQa1A9HnCbYdhg8jAXW8DLTgzzZjwd6xUjcq7Bd2QPucC",
  "key19": "22RBfSZWDUodyPXJzL7ZqAa9gXXxxraSEMtfAXP3nwCzDavRNLQTXVsn91JhA245B7R8GWaShjL5vhpMMPBPLc4D",
  "key20": "29FnxDpbYLJB8GR1qBcjH2jQKteVdwFxoNTCTi83QWhzhKFTqobc8vvvjAyvDwY1ycifneXxd96AadHQc2NsBLsR",
  "key21": "5AuN8JzqXFbXYsNSH9iLMSbV8GZb1RWHkTmbLtUq5NvaBxYf7oUVm4Ad9mzZdW5SyWrNyA3Wkk1VHt8GPE6jBKMD",
  "key22": "3xF5hQCZvi6Nz7pprYD3SyvivpVLayLbhAnAwtADvW6g7Squrea1nEMGasistnMqX75kurbGaWZ8VNkMAKuQ4c3k",
  "key23": "4cUZkbDXe7U7T6eCtdsYcnVHuuByv9ZH4BKFRKjxvigoJGL1ewxNW8Pz4pCTQW6MnudkGGRVwc5Dwnte9MymqFdb",
  "key24": "4Byv2kL4HnQiSPwoa3ie5DRTmV4cbDkRfkMrtZsnvdUfvpXEkbQ35RWkTXVGMkDbYqkePGbR2kt4drhwgSoSkfmp",
  "key25": "5ruBpZGUzjDnBKhtQivqYcdZb7KLrsXqycQD3BCgL411M8QGh9PBfkvLTL5qLV7UuUcjicvo1smU7p5DGsaYAcXw",
  "key26": "467K2BVEatari3eds569fc2WzsE4yKDeGoXyCx8nPi1saStTz8iMPdb3hkX2SXmSafoGra4AQQgXrTLevApQ7ayK",
  "key27": "47j2GLkox79TCcMhuyPrb8seYiMuwPuhUiVsQZRMCC6sTKob1z3rJmb4pNrc91oNixcK3zSpCfdpPCp2b3C2fRJT",
  "key28": "Eg7mwU1RnhfGmSezsiTfekorWrswSA3xyufAAgHtAfb3D5FJX3KRGX3tHVM8C9jK2kiHErtn4PhrUbkpURbA38Z",
  "key29": "4sZPAkJ41wrUyBbaWitbgbvc8E2PMSZ5rVKCG3brne3rRmwfiX6pNh5ghnsL6SrdcRMpZKhWQRUzMkeWsE6aPGTY",
  "key30": "W6AXczAemZkutKMWo3ff8kibY2aNZ9wjHBRjScUuPPBJiB2nrW3MoLMgnkJ5drQnCwb1n6fmEVWM83YvvaNerCP",
  "key31": "232VwWqmA4hcQd5SQ2UUHW8u9eZLrZYs9Hn4FVGnweUcbvYT57BmCghK4v9F12ARtRvaYbP3ZUXxvwQvPNXUu3Y3",
  "key32": "4t5CuQS3b9tkju4To6HoYUSikQmS4yr77bdotdqFYCusGP7FWu5GScahgbikpfhFLYBNMyEcYSyHMb5DBLyUTrzp",
  "key33": "24wfbSZP3LMycy2TnktHkmArcd2666LC6cLkp56ADvmdRcvaXn2WDZtRRYsXpjq954vnzosUaacowEWEJWQKiR5m",
  "key34": "3eG1tx2m49LS1EuzNNNDCqXf6xNdXYMkEboZdM8s4xiQaFjHyVd2A9FTzgVe5X2843qYMk3MXo6asFjNzaj2ph1i",
  "key35": "67T3Rhp4tsMnNHyw3Ks9GuwfUpQaL22NdkhLZ26tee4kKew5GQzeBXAv39fW6DZUhfiSftjcXAS7E33URTJAphvR",
  "key36": "4UfywMPYsaMGXHADVRp1GD2EVE7EPDC2Pz2QDmq3W1hJPmscXYQv9R1RUnBqvFDJXh4xBHpug5HioxZnuJMsoEzQ"
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
