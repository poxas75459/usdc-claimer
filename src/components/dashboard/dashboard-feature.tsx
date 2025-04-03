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
    "5LiFUmSaFsXy6uLo7iyDU71JqMPuKk6QZULFNJo2pS9rKzb6ht9Z1tyTLdemUkiWGiq5e6qQTKiDqwWNMmMXXeL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4worWEpm3nc6CHy3gjNhy75qMtc5zJbrh7yHXzs4huhPYx2fc1e6U5xq2s6sKRzct2YtokWeSeNtJD6izeNJiqVb",
  "key1": "Hs2c7uJjyc2xcC7YrJEuGAoHtM61vyVPXCUhFFPiFA178KF2AaEUwQMUmR1mG9r69G5zfHzSMCyJxhpFWACLgE4",
  "key2": "2LNEYnCmmL9wDGphoFZrw5bXpjx7cPTk5CJJ8ozvwaq7R8NHLGFCpXSjjAcJ5EtC1dschjZ5r9x5uya9uGA5Zn3h",
  "key3": "45ZLqhgi6JoYs925eCzrcM6DW7f4kYp65uXrQZwaLwzZqHPHfGH3uD33pbfDmnmpkgnKNX4VVs32gAtA5kPRJ1r8",
  "key4": "JBRrUiqQcT8V6RAQxxKMArkRdFYFuDqHPQszFiXQrzUrtQMRFG4TbzpqNqswVwCJdFFMBXxMk93SznTomYDmGgw",
  "key5": "rY9VqduFUXrNifqxW6fzvGA37wYb4xCVRwLpadUctb5Mve7YY3c3SvDYSaYPeVaTudHWApmF9h3csRzcQJssaRK",
  "key6": "5dUCoxVimfbrCqoTUDi1WYb4CUjnKSxyLrM4HcWeosrHqgj5PeV6P2XwEWzmhiiXruezqRw2XczcFvQBFQeNMsnL",
  "key7": "3r2HtPmeaPuc52KUzL22yBFHqNmhRZuBTFUBSJRCQJNkUcNHrwvi2smu8zpkwAr6ph6CaPw4jpYfBfqYzagvUu7S",
  "key8": "2HYxc7o8wPJj3UkP121XrciVbZjruQ7mZGhyVkyn18Pe4CBCwJgCk5KsqUgP1xzXK9fFMbpZrJFxfeFbgHNEJ1MA",
  "key9": "2amLHXAkeaBc1xT4GRaw7yvGV9ML7XcCUCYiB9sucnKuc6qdCR9af5hfP4Q6FXWeoqsanijJmsBtLH8BmqGxs7iv",
  "key10": "659F7oVdozYvHcLqy4M18uJrRGrn44JWukAz6kGeQKZQxd8Q8nPfTKctRR9EqwANRQGog4qNZTtUyp8ag46zo4kc",
  "key11": "5E74oZYRpFUv7P5oqVFGgAWz1kDzK9FKALUFi7wARKci3FsfVUMnyxabucrMrp4RT7br5n9jVAogdA2RQLxhfVLv",
  "key12": "4bw7kg7EY9RnW2E2ZcQYG1KCbTZJRJNmqEiqnWuzszXEFD63PdDEc15TMBMaYAHRaBe2479MzqW5cPqqAgDb16HP",
  "key13": "4yzSjfyTf5XXjt1qte1ZEAAB8KF6obHbi7MkmRJ1W1pJUbGBXQ7uWvzcvuFANPkokCDhjhUEDehJF5CkzBP8FMMg",
  "key14": "47FzqCAQqYFh2oVX7EC3dgcSaiJ7kDW5FRkZXzLw3DVQENMko8Ex4AhxZuDgnQZnQeXZzAawJZNNBt6vJL2bqrz",
  "key15": "5MYVRZX7z5Vnya5RUBjT6nYDRDq2hosdKCxi9Z6W8yQThW229FzqVg8dEHqevErVCY6oYLzJHov22GHxHPGXGQsa",
  "key16": "2NutJBkypogTdKLpLBGXD9xTdTrzQKLD69bd19rpnEMvBSRTapYGU8kN5bGVt2yP5QM47jAoraUZMwx7iY4aTvBd",
  "key17": "5CQAGMfhAD2tfRYcz9AKA673YgH64kz5mrXsTQ7dCVK6ThnTD9n1ANsJVmRTqBtu3wMxF7gGvNa3AHbQ5AeF15CU",
  "key18": "4Ra3e2hoWHWEf22SmRuANdq92mqAA42ifeL2rRoFeDJ4t9Znoji1RXK3qKCSjBcqnFPxu1QoQFRs2LuEtb7FPwEg",
  "key19": "2dbXFFG86vTeJWXqiqSiiEWg1b3mTE6imiNBRADNc6dESaWg5snrrWRBDorMRhCFkVwU44H2PAuhGMoQaQ7v8yZG",
  "key20": "8zGXrDQeCmFCkLFZGgehbwdzr2ZsFiB2W3xtJLwnMCTn5GTCuXCiXMUnqygrojRLjXZ3Mhu8LADnvgtPxmtbvEU",
  "key21": "Qu2FRHXQzWN1UtHpTxPW4tk1HQrL2AqM76wbq6mwuo9U5BBEG9S4tiktBqfpPcmaMgcVCMQTJ5xcqAQYAN5yGtm",
  "key22": "2A6BxRR8hjUABME841UycXyxSQ4FCtmX4gjjpLTxx2rLs6nhAEk7hqDKjgG4JNrLzWGmG4QKeexeqD29QkUnT37D",
  "key23": "4psUuzGiqcMFBYfSf1RYYh1CwzzsZ1DA9i3awBPA3Zm95UHAxa53AZctBSEPYkx1zjbEc7TLLi6TfBVp4J9rQpL8",
  "key24": "2wLWWkXH5yDh3UGq1mbiEYqpUMgsnNzghzJcRsfv5xkr4tnnLqK7Vy3L8ezFPPzTBVCxhGgstZQsWVt9YQy6VSKr",
  "key25": "49t7rBM1Y29B8UbzsXh1n7DN47RTutym9YjXdDDrpNqSDNNX9vbFrdARoWQhMfzZiPuH9mL15Wi1gosMQwzbtKqd",
  "key26": "24vBgRGVrevApYpo8wLSnuiuKhVTWCC2t2XeFLm97QmRnecS91zN19mZkJQLenTiaGACUqDGyLWjHGkHzihzmTyw",
  "key27": "4TNSSrxsCXf1KZnnEqZisurtfotW9t3gq4w6kz2sN2Rfk74sipwY38VYrE7JAtJwTV59oe3NYLpk9Mg9x1MiEiu6",
  "key28": "3gk882BwTy2Wbnd27XbER6C5YyGweTvPhZujugbt1HrJkejZo4AVfE5uK7nn4FdszhGpjqFoBLndfWx2Ews9wbfR",
  "key29": "26USRto3r5tDVNwdY8V149sVvRQKVRdaUYporzy7LKNg83ffD64QL9DwLh39x65nuhHs5Zv4nDaFDdtQdXWqAVg5",
  "key30": "DSa6uZ6rFrAGWhFeCbvxxqQrWB2Git1gtcUm6uQGZb5ssBmvfX3n1om37FcNQxoWp5jUSgCnDwBE5oL2Rre2umV",
  "key31": "5P7ddAEnxKUme58Vgf4iFqfnzkCCGRkpAxPyjcwnmQ162R8ij4QxwVTL33Zxa54HcYwpU4rnThdzDE9vBENcoGhX",
  "key32": "xDqLUkudgDMKd9eXwXZ15L7eSfTs5LusUJyEkJQmgTgWt6QDtBg5TSKWA2Beej6ppctnp8pNAACR9VK3x5bjKKD",
  "key33": "NggMEQAhDkj23sKLiQ8TYfN9s1HA7GL4GnpWXr9UTEX8yiakKUwS39UUWYZF2XWk7tmphguxrCpgRc63mHzrWnh"
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
