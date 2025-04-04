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
    "3q8buvFH3Ww9ZD27Bzovrxj1ZmMHVvMxdhZDKaZmCRJYipqpprp5FGujd9AM4NBYavuDqa2ZJ9ZZHQe4tiv1KqMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4YkJk9SjhZ7mb7UHgDRiZooK1f2T3qafvRXjHsdLBA3CxBsqQDMbhMmtcKbD21446SDCUwBr3FxhnFP8EnV5B8",
  "key1": "46H2CMWgvaEWGGsHT1m4yhMThyMuF1cjkWbgW6X3tWpjzmJ4xP3wp4MgXRwjq7bTNDVDtMn9RpbtTLytXYx3FpXi",
  "key2": "5gyP9a3U3ahHPVzDd3yLvUnDDhWUYRPtKGUrRCD1sqxX2JRUVa111kG2ZQAjadp97YxRhhDTRqWnPtjWvV6vhmqs",
  "key3": "5FSEXJ6gE4DexkUTwVMtBui8zohkNBjFVWCaXwpryykgc7b5Zh5DBEsAsRkBaN7QyNywSKPf9ycUmmiyRQjsUh7k",
  "key4": "4ExMmUReVuzPBEH9GN78N9nwE5rFq2nJKTk3aZi45ZmmyqBgApfzZzheAesvsjUjfAqahUjEWNGadeWXMZd53Jne",
  "key5": "2KTaJCY5WVTAC9p2qWYRs8yBh8wMEj1du4N4iT6zLz99xQNMqYV1eocvaZCZHXg9xHAhDfpRLx2nw4Nk6VMPyCzv",
  "key6": "2vSQP5o4DexRK5B5ASbsZ5Fv1W2AFEBoLqeEyTQ4JNScX7WEB9dk437fydLEbr1nu6SckKp7QYML7dFDeq6ZqMeP",
  "key7": "5FocCUqpbp95aPiLjyA4BKEwR214LN4oaXGMxeMHVA3F4r2ufJfbnHWMDswHJWef5qvKwtfsqWwZyWkYT2Q9zAMp",
  "key8": "3s17o6ZbgnNjsS42CRBRTwkEft1nqAWfJisewoDnGgpNE2wNBM5BLkHnxgkxyE8WpcaMuvkd3tpaQF4P57zpxKim",
  "key9": "3LXJa9FUL8NMDBtPjgWu3rn7YKzGstXM95QQsY64KwN6gETMTdbtPQU3pScaSDt32R32JnCi9q2GRBTFuc9UxiM",
  "key10": "BLFWokVZzYjP9hTZJnKs8zLdsoaSdw8Kjc4rQ8C6mAtL88azfDMVUUDz946PHV6Mu3zh8wzRTbi7tr8egbBCNAf",
  "key11": "3QsamSjaBr62cB6SJd8RdfhX6oUz38i8NtmuKFW91J9ae16HECCMCw6YyP2cA2W4D2uU3Res9dLy4tCukyyb9Mgh",
  "key12": "3HpKdN855YNwGysv26TFwpsLv7t4wLGi52SqdBQHBSLAGQQ1dGj35w1oFpW7J4tYkrRoo4vnUiTSp6voCYjc4pbT",
  "key13": "2rGS1KMfNT7k73zFWuNpA2GGXuhkkkhCSxUvV3AReuE2HH1jUmaytRh1bnjWWBfAG8bpnuLLj7rs42Rckpp1oDr8",
  "key14": "4iFA7Hpwe2FGoAWriS7Nym88cvPZJ8Z5Sx5iKKRLBxcBmkiqGmvnsdzZSr3JTaYNfHKkKh4GawEQitWnNaWooGpw",
  "key15": "4xeH3G3a78MojKTemNnFrwvFYvbwBDmpCA9efz4C3uUpiF13iMJNxUvTfqMcCjDEd3td4qNm82HoAWgAZKtK1EEd",
  "key16": "44qgCspnX1mq6zq3o7adPnkP4DiAcCN9EcQfAMMPYgwr4up4SaQwTJDm1qarSaJ8Var1GAegF9eFnQfhU9oEAMUX",
  "key17": "236phMZiHZtz7N95EuB6QJUyHZ4cVrNNuwHBJk4ENZPpkG5CTjpjSBJUGevC43L6gDEzTXuTgURTe4iV7eJeh7ya",
  "key18": "4gJiq2uhiAEZxznn9xcVXqP5Fgr2qEmQcj6A3t5adMfr9ZVdq3cTPv5oCHsrjBkh44Z6dixuVzM4Pgd6f8i5E6dv",
  "key19": "2PWDR8Fox3Uro1qhHCPcxnVVJoQRtS9y8cUFLrhdiBBpdqL95dwJGY2YoDnf9WPNmZieqRh5TezjkFajEF1d67Ha",
  "key20": "5RwEPL7SideXtNE4ynihDiNq4t6ZnwM4FJJ8EAvWdNKxVpzRMdnAjxGAN3oU1vJTtmC46mQyuUjYwicMb5t3BGVm",
  "key21": "29VdHuNU2iwLkx8AKnk5wfGUG97jAaNJBL1jserrtfKdKyf2oNH93xz62NvT1Ge84ixJSxpKAwK7nifFReQgmPgD",
  "key22": "5UJK3pUYm6jMywxheBhA1FSEN6PqMfuwJmNCuhaR8hZwQQ6LvFY79XwL1GTrRem2VBqH1p8WHEAqn32QK7KQnuxU",
  "key23": "5YHK4c6QoqEEEZfguhiW2rWcrYxPSTvZWvjPgFAHGsB8vZG4wdKmzJ5K7HHMuA2zLnsTr2gNKnFuK965UwccVzkS",
  "key24": "aAWgiv7HdEZu8Vd7pbpCtrDVQkvVy94sK6sQprbt4dbEaEemPoG1iCWH6TAytm6xijS6Wmr9CGd3b6w5ZCBUDMb",
  "key25": "3ZMdYQhiQe2Ga91zz2EG7Z3Jmo4Avc4ZFCUqgKBpTUfLN9EkHA13qsPPfd77AKmiTJ8dDnSDknZqufzYw7ArsovG",
  "key26": "5evip4vYEg4oHcD3SRJLkoNntkAeodHKJVGJLDQXRaRRnNHyz7RLdPNinAo8nkC7bRiLGdDrosJCg68FPjhR1Ex7",
  "key27": "AcmZuNpHWWi7hNQcD8TjpeM2VjA7rmqgZYUctejVXPJ8jqyH6Aqo1HzHYLdCCbiLs9e6tpvcEWhGEc7oqVW2Z94",
  "key28": "4qjfRZ7qYKLETWhLisfES7PMpemB3uQzPbrvKBFshig8nVGv6aXHfPtseAADQKp5BzNVFUscjnoxbj2qDJdJUs1E",
  "key29": "629u5gMyi3Ua2GfJZ7qyTJ7ZFyba1ECVEnRXjmPUfEasYMBHvs7FydguwZP91HyPMcu9YwThVpCtwNxiQuaZUGB9",
  "key30": "2hwd1oyQfWfyJB5N4hJerwj5LpN8n5oQEc7GhngYShQ7eZMh9pgtBgS654oFknhNcKsdokCFnnFqA6tgekP3zaZj",
  "key31": "2N4kGdB2QK6xZifEFUUrxzFmPpciYRXNHv8QtM1hJF6R1cdb2VoeFSND2x2jmC3n8dBMZz32s4UuG8Tk4EFR8U44"
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
