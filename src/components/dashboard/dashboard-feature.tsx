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
    "UP8xCk6BYs7BEehcc3GjN7Mi9cG45Rawk13iRKcMqXPmwDpuswkAYpunpucDqRAWF1PD7c2D57HvMvFXEytpFAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKrxM9BWoKsfXxua3wwdTbbb73nKHFTtZJmW1Z8woZhXU2uqrqABxHbh2amDNmPqHa3H6BExqnDqY8LvVUXDqZ",
  "key1": "3nCRUyJ2ZJmaE6p73f7ZcZsKbnzYgjJ7LnauZeNL145ZV2LDkc8YFY2hmgMULFNnrceRtPkbnphfpLQan2d6Mxmi",
  "key2": "QPiAZVyZ4eJRAAuZXMywU6bxGMaw37jx11SYjSfjkaikAK2mK2wKvLzXPwatDntc81rVAy6a2BUvtiXnPfrb4pD",
  "key3": "4KdTiihA1DkM9carPoXgyNoB1JvTVttvzuDdqzFMastwoy7eRe1RgK7HoPCVnqXG4JHnvJ9DojBKBfdmUmzXzPyE",
  "key4": "4gqgkoJ7cGijNW7wkjyMDF8K12qB5mLtUfquXz2MBsCNk6jbjBT5KaRVD1AAsihZoZBRn3ugN2hutApGNCikbdmY",
  "key5": "3j86BejuiLDy4gUvqeR8EL5zgxCGN2EtjDh3AuosPWnwkXE5sjCMaMeuubdMzdFgW74cHYgLxyWSeRqgRvDKrmMU",
  "key6": "4mnscbnbkArcTXWNLAxFRr3VDuUcGZUgFpFoC1U829FJyL52aEEad94TxF6kAj2REzgzvMHcH4voZKAt2z348thX",
  "key7": "66rmc1k8fnnH79zZ56kWmagpjqJZRjr5ef5mkfRTLyB1zDxmaYruvxViiDWYN4gY46KgyHRBnrPntxb282u4wdZT",
  "key8": "2oVpxQmhpdVLDghEGAgUmRSuDdH5ZXSd48AzyxAvuu2MUdTTBNUBK4yupz4gyjGpLPaefrDrp3BaB4MASSgbt7gV",
  "key9": "4poXBbh4ShbZjD3PdK9GLPtbdNxFXfZqi9etHE1xMbUfS5ed6wEFz1QN7MwwtqVNxucTQ3B1PvSbAAtTF1dKGb6p",
  "key10": "3kLk4NGos3mRdALyUnf2DVmcwPwWMiChZmFAJU8Z6TntyP5rU53J1oCDzt4Kwef4giWVtYvA4TtZFxsUcbgcf3qY",
  "key11": "4YbcVASCQcNuw8CARmZjxYUit8Un35hfkpva26x5PSr6WKmKVLjksiNYQvJ5gM2otB12QYdUJjUf3Q7ScUXeVGB2",
  "key12": "YigW4KFy42k5goT26WbrdXf9C3obqrWgyRa1sSCUWQ5Vaj9GbiLzkgGcQUJd2a5LvAU7CHdCTrAVH2PbApc3QWR",
  "key13": "2NoSSGW8Z7tMwquyNEX7egC8KEunNxJKBqkV1qs3N9FVCsbHLgM19uG3xiAoVQFMYTdFMz9vynEk8WEiXxP1RCL2",
  "key14": "3yk2sYmMwhPhjc7jCBjqzx1QVn51t9jzcTWXsNb2GvMMXLEDMyaUdqfak4UiB2KZmrxrKu7axwB7BH9N11PpgP4F",
  "key15": "3r6hs2tdcUJML5h3ZhH6wsZeeibcVJdwUq2NdE7mPL8L1i8vTUD771n7XqK5hoQ4mfDbbUVc7wnMjX5D7gHoGrwb",
  "key16": "58t771dykzcMy3SEhg1iXxZfXSkLPYVnqj4nEXKQMsYMvFvtPKhSLEbvXqXJhAqK48iLkdakN7jMHMXpf2PihFHr",
  "key17": "dueC1QvJcdAC4WrLVfCW6oa87cEXSQVEaex29roQTt6gT9T4n1GRYTAD1q39D4wt2Fc9HsaM1z34GSh5NfHrhGA",
  "key18": "2RhjTd5pGz6buKNqnztWDjB3jiS9ks1Az6LPFGc1P9hCVzVVunLt193YNQeP4t61AJoJuAFvM5rRfqFQRVW3BLYH",
  "key19": "XaauVkw62XKLN8tCEZ5tnYWbY1W2eutxBPWEnjS9eM4nbTgSNDHbJwxRcjVsJeY5UtcwXNqa71a2T2MyvKL6krz",
  "key20": "2ezMJkbdeSs9gSpo83iyRHpRUp4hjxxUpqbsFKzn6MEv52T42EhxvawHRuUFVdLDD1sv1v2doC2bXfdGefxUcXtD",
  "key21": "2fhDyHyJZs8psTguKnhTBfqaH31AQVxqqSRQPT4PCCF9ijkrNqgS7rZrP3PRn3rMebPNG45kjTMykVcVnyFwEfJT",
  "key22": "651EvdzCUgNQkPsJZjabBZKJsAfwYi1J4GPZkNHNg5Gwyq9FKWRfr1cYRBNeFDrSuVyKE6VE5YGxyKF8ShGshamX",
  "key23": "3LoWKoWajNyHhmZ5UwGc81xmgKKQYyCLkchexKLLrwBRkrKEQW4ZXTakB8a1QJX3BYHzDP2wNsdSCMc48Q55k453",
  "key24": "3uZkT6pimGUWoykHjadx8z313icYCey7WchvhpMHLBaRWVgbe37ZnawLSKscVYLyfCaf3C6geS8s6MvhrfPGDBJ2",
  "key25": "5kRxTNEXQzes8Z5ZXGPtz2K2dV2Zwupi1qKi77oE25JwMY9oSrM7RD4mkTcrnoDcdmHUXHXMmZwhubEdQhAizLdh",
  "key26": "2wKPCyUZz19BwPJ4KZ4tDBFSzU3xwTypHnHPykHbnfSFR3F3PwnfcpBZ39GQUSVVMtxdrxQHrF6xaQHQuUYQUoUh",
  "key27": "4kuM9djjJSYd5TAH3C6GjBzW4RAqDeF9TqmXTF4irBNena2sC9tSBsuhbz9iW42CNfY1eqRdjvS1d3jnS3ftTGJN",
  "key28": "emPkVJZN5rBabBCpr745s8LMG64xqyCDnMSweXBr8WtHLTDFogwAxjcMJER6coRsy2GDGmhQZBAxuxsLnB8bqAT",
  "key29": "Zaahipi6bJRxUFov6hrPLyGxk9vj3ejBig7iniB47njhobk1Qy7i8AGkxjKUHBZDywisfXn3r3sxGhxFoXhj3SK",
  "key30": "5FZ8XRcdoNRyY4VpFMEYNm7FUUm1oZqb52bQaSk4uabfac1TmqF43QBKkA9pC5RsBN9KsE62YK4YRMSNYiAv1w5x",
  "key31": "28wvHiLNmgNefRWRTcfsXYgvTacN9GTwHaedeB24UBAY6max7XUmdji8YYwQfgF7THkw8wQqq6gj6L7ai2NzCE7o",
  "key32": "4QANnEfeKFjsd1aJYdN8xuUpsawxtzgpdCo1C5XLHgeLTcwxUXVFngZmo3P2HWfEWpkzAMcwbHJ4t2ZHquYCA2Lz",
  "key33": "6TtFmDQmRXjDjZ15SJoNx6Z9hJXArct9waG73fUdSM25T6MRTcFFdUa6hazfB9iHo6cRXpWn5P4BH812bRPgBGA"
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
