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
    "5JCxxXhLNApCU4My5QTYKT9VfoL1CgjZZJ8WGcbpqGnhhW2s91BQasr1c3nwewk7Tf3ByEuAwdM4XKf8j62ZxnRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gtbqDQapp3ED3wRHSdm5mdmeaFJrdZ7tZjYkGfeqcRS9G62quScrQ6Hh1J8vqMXz1eLkeoxrKYMtpXyWXqLeGLw",
  "key1": "5unHCVtyUXDk8ZVmomBkrXNQibkWh3cqAiojSxjj3BKE3zi5x9zgKYtpCcXgEUQhKETq3una4p5P7fbK3azMaHTw",
  "key2": "KdRvhCaBZonJnswLR4Ucs2TojUkHF4fpjEvjZLyM8rRyYUdTwM1YsTQ9CcpQUNUZfS6hnZKXDjKdpmBcvMbhCvZ",
  "key3": "Mqhsrah8JZoz89ZjPXPXMLSwWszzycFotEbEWhkyqVFtKCCE9BFL7DMxb5KXP9LEFo12t5Qbbq71izjLRZYfQ4J",
  "key4": "4w9aNV8T2Wih1ePUM256SJWrrS5nyEpnHsgddX8u8SYK83MebYRD1NmgPioAMsiWpR83gBcmBvwVRoFHXHiBDkK9",
  "key5": "XzNCLuMMk6vTTcT431N64ib59JSrfipRBaw78de8KVXbG9NHusGR3Tu6PaFikCmeA94dH9r9pqnd6eZ3n19zYpo",
  "key6": "37Pw5o2MFwc7AKezMqfKEmbK6rdi7Y4ACsxNs6RJXrtx8nePkWnRuAxqC458vg7kjSZ2ifvAVrmxJ7GrFW6NQkUw",
  "key7": "5xpk7fUGydC96DqWX7MFW28HBRkuq8zw1Sor1U3AiynxNp86xHuCptWxMD3tTMqLfjUPtix3GKbgXk3guBQq7qau",
  "key8": "2jn6Vb9w5bu4rCrSnveMadX936AMtLugWsQCDsfV2SbxfU86gjSJJ9BhqsHZ44w88BywzLxLRsa7myWaWtF1ftvt",
  "key9": "5QUMnSAPQ81BVagUFU3RbxmQ7obrfwARyYCD1wXjCP5anVi11h5RmvFmcTvN62LYXvp2UmcBMmtF4hf92N8eC2Lu",
  "key10": "9w3vJNZxXoLcXCZrkqgnh5sBikxzWmPyyAcLUwYwySy8Cmmu7tXbNkSmqaEEZVHD3rjeC4dLKrwPeH7knQwxqb3",
  "key11": "5N9LRfBeY9p7dKwkNfmPRgNgQXFStdYR4gHjLTt3sQDPmu1g3mmdCPWXmwkSM49ymtWHV7nTdfEgHAFe89LfbrAV",
  "key12": "LDsMkkQ3HY5jUdGURpuAPDJZwoxhwjwvSXmdFGtKJuTuMSfmUzFJ7HRQmrSAJGLazZLeXxmWRaXguNYoWx6rKRU",
  "key13": "MytfyQaMGaXwHBHJYJVh4hmEV53T2xdHWiSw1ir3CsPsr7XNts869wckgtDfac5xpi6CPczid677tdzbVqrHEES",
  "key14": "391xvbmgVYzxwdDazNTPZJZtBmQ7TBtCKERgcUiTXRUs1gGQB5EqkXgX1NrdF1Tx5qbeq9yRC7WBaxZwv24GmCRL",
  "key15": "2FBNbQNbUbpZJKvSf3zFdvvKA71VyRVsr9pTTdLbyPNphM1mvUBbmucZgUpRWLiiAT41hDAyTM6u1xPhSsK7HcSu",
  "key16": "3nwzUy1MqrLV23abriq2M1P92fLANt3dE1WRM71yis3MWV2ixFQkN9xrMR4YxkXh6qAb9LFGEiB6j1bDRGHnLXjt",
  "key17": "5h5BKdSrPfXttYLs2kfpRXtLgtDNCWTso4W5tAsRQA2cXJAgKBeD9MkSjEVCgz56d9sfusJEXN7YraWEiYTsUPYA",
  "key18": "2HYsEWnEeUVC7t25uUmbKke5NkBepvPy56o96evRLeipKWwYB8knDxFyQk3bs61t9QCryUTZ4qd5wFXpNpCjcm6a",
  "key19": "58fLseA17u35w1JoLVFLVRY3tmFtgCDMsShWAjVxDBonspD12J5M5pgU2bwi5SKDKQjMVzvwzMHvtwNTXMep7Xe7",
  "key20": "5sdhZBuLhGGaUJAdG8QGJZrpPtLMMz81RJHK1L9jtcHp9nHrBMGbnqVXmihYZK54FKbWRyqxZ7CPez9nhiAuKHN9",
  "key21": "3U6snXTyogvKTVgj9qnM4totdtp2mYoYmZEmmqYRMneHK62QWWRF69ptfAX5gWdi4s6fV2PcLDQAg25stgS4xNEE",
  "key22": "58MABamYpR12S8heS27anLYWCuiXdssBKc7Njf1C5okjNgcTPKmtRyxzHupQB89NFFi5PKdwFrqXvh13UYYP8LsF",
  "key23": "3iR7ucD2ZVaCLPYQBCa3jiTYJyMgmNeVmtzjEoF6CoWkJUBFkXRc7pjEZAVnT9UNE2Jyrk1dphvkukpngZz8Ge2q",
  "key24": "5xzTQnXp2arm9kA1KTUSpRxv34SPskpxK89Q28XxeApSKKeKst79VBLgHa5GbBvNwDYqyoDQs12TEfdoFXgKeUUA",
  "key25": "4ctRpwfTVW55KzF6uoaUKMyxJmWQShXGnGjGjP5WrpujryGzsjSTLHwB3d2Z6BgPh958PJqfsXRrZWgr4N77YGz9",
  "key26": "5j4T1PtHScnP5tKm4Kbuz4ShvcWvY7Znq5tywUVkjjYkwAUsGsGYCEDSQd66ekchobwgiersx8ApEuR9GQYpGDeW",
  "key27": "2rXcjvd2YfwzCyQGYBFKUgDBYCUDLZFFoFShKrfQgJwNCTxkaZPVfSr15ikJS2rUL35MjeS3PUeYR4sMYvS7t6o1",
  "key28": "JUVUcyDWKwR3x2E9KRLJPb7vwgXup2ErguYhoi7AeAiE4P3B54YfvFL3ZNf5TbZutn4R4TSFhjQrw69XqdNzDn8",
  "key29": "4w7tqRhxvMG3uUjhuCQGdjrvd9dD6UgdWWPWzrY8zYomQmx85WqN5cWJE6AZXdocanVGTSBkoMp7H4cyz5CEuZQj",
  "key30": "4NLq2V2SBkh6kCM8BY1SZ92KvRmD8UG4Sqv4RTgeTnSz3fUNBCRPPVkZXJsKpZPY5pgjsMnDVYrXxHfQt9q4dM4J"
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
