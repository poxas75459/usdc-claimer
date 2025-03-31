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
    "4W1XBcQV6aU4EJZPof5UfguAPgmVWR61PDsrvDku4wE7ZfFebYyUd578EmPKQ7EZ6yk9LV8Ze2hLcXdVC4Z2XjT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pBWXCCJrig4epkrq2JkrENxdPGExsur6nasVJAY5mU4JHBBGqtjyUkqMdeG3KVDNoBtQybeCzuFLutGymLr1V7N",
  "key1": "3riwSwZzivu5Fxt1gE6GvfZvRE2DzzVTeLnhUSJFc3uK4foW5CGwsMesb9QMzPzVHHGLLnqugvJLNTAgYKUBDGpL",
  "key2": "21N394oj6z1S2FhD2diYV3UyqbgXMT5X5pr7QhLLF9R1DQFqUJsZTC6HERRugdq4FJk5x239e4Mrp28JCgTf9wHL",
  "key3": "4BxZvT3BTjQ4a12nEjtNYgBEKf1Cdf1kDwE9urC2GuJSRy13rB5aqaxncHPtJnckQ7vXqy3AuQJBY87hdmHGQCzY",
  "key4": "2LtLyd34EHUM2hFMwPihcfquFYBY5HnNL7v7kCMtj27FwUeqE3zkTicz4ibN6pLYaR4HkJGB1TeUp7HfaGFTGVda",
  "key5": "4UaczYZFzqNyY8RXB6BnjQWAsb9TBrXHtF5Nz3xsLgKG9pso5ccBEDM3jvHan8PkFWFAXXiG1qrsxKhB79pRHFQz",
  "key6": "54mH7nx8LgtRDxXMqmNdnhXcy6yUZKtwiys1uPEGeaAE34BWDWbwzvvUdkksYCuxezP7rTLPm5NFp4vCPnTykdKp",
  "key7": "5SbgRmYU91Cw9TTkedA1r7eKzHZD7SdZ6tpR6Gh4HsqQASEa8DSEyVTxbrRPM8Dtvj1NhqzrnTYzeAfzCrka8sY6",
  "key8": "5vTT8aZygnAW3fPZUJ599SmiwyKG4SXqEh7WAzHEboSa4v2HLz8nQdWtPFdWt4WtE2eTFewrE8caLkyPtdZ6J8Jo",
  "key9": "1RTUhWpWgdshWJ3wrqH319UavZtz9VE4RFHJGkPSgKhwiXZHtm8582SEyNt2wtQByjv9WVjGggBasnCVYqYD4A9",
  "key10": "4NWLt9zQ4rNb5DAvE9zjmDJdnvy735SKyYVgcCw4YSB2LPczpZeHkxh3GmDhwWSApSjU1h7y5NabnXEwVCvEWwVk",
  "key11": "5zFjs4PwTNPdQHBPiNwhNDNJwB7fRMUXTycnosHrJ2PGw3BeR2n4wd8vrQRXUi3RzuJ3fPnQp39Q2JCSMoncSCdi",
  "key12": "UAyhuRdiV57VoVctoJ3ky8GDVbBfL86nM77EvsUcarwWb7zU9jAkjfebgeWYBuPVT8txZ89QLWSx5zanfaqJTuS",
  "key13": "w2bdePCfwU9L4csk4naXDHf6jQUgZrKouioDH9ExHY5FYx5uHYPyCpS9GuzKcokdwnKKnhtg94z8eQzsbE8AAPu",
  "key14": "4chDy3iMX4g7HKkvNr5412mHhbuVncvNQeVhNCseNFi9QG845SkmsyPiaNnHgmk1TBjumLHrzv4XUvz1AJhUZFS7",
  "key15": "2ywMbx4mNh5UhS3qkR2PcTj13YYbE61dEbXKSgavWT8KVyzJf5tpaLFowWJTjPoTPA6w7uu3QEJQtruv5TiBPeyi",
  "key16": "3HUsUKeqP7WZa2JM6iwa5U6xnuXeDFJ3cYUnpupqX6Zk4x4hTJRkGB51eVtqJQ4NBMzQdSxTEcJADMoGQYKYfeWo",
  "key17": "5GDCbTgH7LmEummZSp3eaEG5EvBLy4B95G8SBhedZHhkufP1vppoMbp8yKhmLTHLVqra8tSqbnvfSwdAz3ZY85ji",
  "key18": "4xebk5fKoaXSVudDgTx3jp8ZSorFDNmTvZXWxwnomfMjQS8iQQKLTYRavjsksnfM7LP1QmSaf23Knpmou5j9Gku7",
  "key19": "3uuHUBMfGtLuf8j5bpu4KmYFuZaJwgsmEuMVaDukRhq6bLe9Qcx31ctnWHr3az4C3ioZZNvNdKZ147ZdcsbuuEgg",
  "key20": "3MBEoumyi8kPn212revLEv4nsMzmQWzKfHVntJuL6kYx8ups66RXvVfSE8fX2a7zuJZ2mnqfEykp52XLqWACmC4P",
  "key21": "2E1m4oEQK2tTn1zQKYLshdy8pJBQNNhThmjx1aiAHnqPfi1eAocRF4rXioc6qSa8FZWxZpP9bPY7aUL22vXmk4Dc",
  "key22": "4XQW7JQuRKiFFmye5AtUUwfAPUz8WBnm8u5syur9xcsxf9THdwAec2rchdS9r5x8hKYZC5iqtCWfpV1eW2JYsWUh",
  "key23": "5AAbzM3184sMgeEZ1r3PQc2YYy7Nc7mmBYERofM68QMypF8E42tmjvwa1vcJS2iLZoW7XWvQXW8tECkpuqFknLxr",
  "key24": "3SWR1uWYgLFWEwHu69fYmUUYz4pmr5NMs457W6aNUm8CWqTs5now6E6FeUJ5mF1xvNFyieu6sG5WsArk58t82HuP",
  "key25": "5waT6MAZhGygwEhMdqEz47uQ8pG3Y3RYMDVtorpcHD7ifXtaZfgGWjZryYRz8ef1baWWzLSE8pQuXJnu6N6MqJLG",
  "key26": "5AFPsgHhpQ16Pb7poguSV8LLJqqVa9v65adPz5LzvnD8sZ1LFK35UYRTS3JD8vGMo1qNwJAEaze4M5WK1e3wJF7h",
  "key27": "2AuWC8EoWZKj9Hx9oggL8vpUMmxRJd6GHwwZh2BcuuaabfC4XGnpS68j1Gn9hqkCPBZsrjq2rMSiZyQ2SzudJk9s",
  "key28": "4hbhsYDBSUDiwHET3raCYnjwspzaTJtwG4ojxB55UgYpCcpBhfqfQ5HTh8qT8m6rpZWPNtjBjcus9sdw1oHrBtvU",
  "key29": "5tSa4t95Y1RFx93V5Re3sZ31eLtgqP7NxXPCi6CwRVirEV1822wJfV6t1vdNAbfPbazy9QqJd2SH7Pcr6Ks3YeDS",
  "key30": "56sUsDyPtirpgbGCnSYpmPzpYQDTsMnywc8xZYXxZbnu3CMRa5jZHVYvp8HE6o5ozYGbn5C34TkwZwcH1Gx1mRp",
  "key31": "8mrqzrPCbuWLPW3YGvQu9Rz5MA7AU2tFcCcUCfiWXukoLiQ22VdkW8ExGe6G3nSKggvFU5j1zkkq1x5CLpbijQK",
  "key32": "2CXe4Ro2tcMkCkk4TmmWBr2JQGQtzHJS6yvQSK1eedbE14wvH3oHUgD2FqrzwZs6Hyeb2vwBhFJSuMcXdJW2hzBJ",
  "key33": "ekRpFWvo5aLwAFKVBFmQ4thCebvsXoH6ze6MGiCU8J1PDWFLkvcHdrG7UyxQYVGDFvLJKJgLpufULqgxZALqE9o",
  "key34": "5z3dQnicTWBwQERJhv4t6uv4tMDFESP78D1BFewA4AZNXEs7NmbtWhtGsCyo7jgrrk6VGvXA5zNgsvmFPTAHrDsh",
  "key35": "2rXLnmFz9tsaNCBxgsuGfcQpKyYytfb5EVH3TAhjVjgwKWfbgsUi1N559LMPcu9WZMRq6XeoXxABHgYj9vMLbneM"
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
