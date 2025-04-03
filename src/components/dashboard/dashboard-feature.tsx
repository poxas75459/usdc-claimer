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
    "3KSc6MDd7vvPEJX94L13PirrQo8bDawTD6BE7gfceditSavKj7biofhpshdkZer7tMGW2YfnY5wJCoGaosfawzLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJoq49csRJEXpQ7oKfGh9w9k4pBvQwcvchRvC8moJPEjrzmDp4uh1xwFWZjVwhh7EB6LaCvzroQUiNkDGxzh8ze",
  "key1": "4MFuS32p8B3Ygvtg3X9Lp88vnbib6T5ZsmSsNeT1fJiJCRk9A4s1n3vvhxDXrnQTpBL76UrezwDcdj3wPnfUp4Au",
  "key2": "413EggbNMYeVSbKbQ8E4Joa2GbMaypvMWZuqKHUD9Gaz4UTUdFP9Cejca3bxbqkVqV5Qm737W5XYZn384EjcnCh5",
  "key3": "3mZTA6UhhNghBYsABVGxEmtiNC5u5qShKzeeJLQEBwtu1YCXEtS1dcFSkWoQ25wMBSaPLYaz6YWq2W9hK6Sdjx8w",
  "key4": "5BEpPa2kfc24HGFZtHofi4f3Bu4uQ6WHMKEfEe7vwWuu5Rq2P2QztS7GApko2kffR6sry5ocibA6bcCh2zcB1xer",
  "key5": "5xrcMLyEZVe8Z6cF8ibo7ySo8duiwzgLymhTHwYTVUvXvFvYPfBYvoWXjL3pXEUx8VzyqqGFaELr8ezorsKPAp43",
  "key6": "kTNpEiC1uaXhA65kjqzvFHaNPAJMV7uUvnRxQK7s7g2K5Eb8YYxJis6WKZQaYK4e3aSSNBinDt5XkW4BGKAH15j",
  "key7": "4z8482otwWyaX1ECZz13799RXwDVpPyHbARtYpJGe79ooFJb3zrBSF4HcGfUTW3UkazXn5L6N66N7tswuTQkRUZ",
  "key8": "Zvq3rifhCgwgVW1d56ucaKwqgc1Nm7EVDsNp6eVobDXxQvj9uQttDQnKfJUzCCb971r6rotHeH516yXGij7NE4F",
  "key9": "2Q9fTJks2pEM8qwxdCW9W4eDvRxxQjfS4TxLPfw4tJSJJUBvRYA2r3Xk9JXgZCdoud4EeoSM4b8z8G2CxTtGoeLB",
  "key10": "3rnamfXmAptUVTv2guhMsZuMd4uKQmVtuJ6uA4CHBnvbfcxmU7e8AeWMcsCxBkWAMqBkn8683ANAPwqgQ62KBq4B",
  "key11": "4Lv9p1MVbq7w33nxPJcSxREFUupLdvKRerK8URkurV4hLEe6Dy6uiPU8rXbzzaJXWXuMa2ruLP4XnoekiSGVKAr5",
  "key12": "4q49kVGCSVa4DKuDns15Ht2rS9h6t8S6MP8jyAGkVYBJYQFB6vjpqBbDh5qUSMzavcXkESuJf9tPU7Qo8YUnynFS",
  "key13": "3z8vSdQQtgoB1adUTVTPDMfjaBY7LLEvJMFPqc86ZVpbEXGATftQCefQ4NyM1mAAuHKkF27DyJjfQszHVJK3dWpG",
  "key14": "3bJGf3JLRWhspapTZvFpupLyvgtsN7krzLxaJSs55ag7czWFzjgi8RGKKzgyUQNpgsaUVu7n9oDioEw7kZugjXo2",
  "key15": "2ZKWzohHCWXiRTgwZ7AhU4iiyxesvHorY3t67454HjWjdEhTLrT5sA9hjUUAej9w9Vk63Re26tpXvdJ6iEsW6aFd",
  "key16": "39zqCCx35qQE8VcEPxHHSrok3VNY5785Hn7dbtT6EsxftavZdYiZdqTXzKrjMyAWMLhtDCv9vm9tA3riCJgcTPqA",
  "key17": "2uZEG5NQdwd1cH2z9E2Fy5kUeCegzTAVcoaDyXk6E693ABABYQj3g3P1bqs4Bz7X3aVEo52uHMpgdn8qpNFrk2bC",
  "key18": "yJ1vcPWiV1nXYGAEkkeBEaJ83tXPEVdjpzWu1CysodU9QzyWM2My3YJkcmuf3nYPz4f9jCCsrb6B6GMT7YxrW1E",
  "key19": "3fZQUPWtQZ89zzqfkB8WeWXqSMLUiYESxTBvzJ821R3cgqnHXFohrJwEoNepTEYuhhqUG4FSZpst42FVcdiYC6NA",
  "key20": "isbnPqm7CcSsSRsYLtWQo8WRfx7FiYNGAsyXWiuJJaBion6Ywd6XQUEND987nyyNVY7zATPc5w91HBhftHBs7ck",
  "key21": "4NSkDB5CLcSGZzGWnodpxLGTuNr9vikhwyHiyFh4kj55ivtk8nX9eQFvoSivSD3DM4p4uKJGwwQ8fPPcgAvsisiV",
  "key22": "2HvFGYA4ZLKWaC9j351eJ4AWc6Cj8otHLsthCLkGyvuqh6rTXJGusqGAc5J4msaJbBHLwsyb8vjx5CeoqXGki6eb",
  "key23": "4HQgj8o6r9EPjsXfKvtrCg8fDHMM3JucnTg7AtUC7sh7UVnpWuXgJUS2CqWFTNpszyyGYQyTUQms1MJoCgiTrzZm",
  "key24": "34kBkpNffzitxSmTGPE4tKF6bu51pWaRge4rQqZppVhQ6GyFSUd8A2NTJjNCaHWmTdr6JCg2o4bkRhgKDL6A9vXw",
  "key25": "5azPT8efCbL5AqB97cMq9HnnLE9LYHthvHpB68WBmraZxSedQzPo8Wqr4zra5WJnnVKoALfgfzVAskcdGJG51LdK",
  "key26": "jKb18EWwqG5LkdKGGKCiC6qqyTwu24KCmhs5rzCYg1UEA79zLAoAWj54ibjeMZVmdEHXnorBUbU5oEreXdqciEC",
  "key27": "3KxyfN1eeAc7j91TWYxFnP1jWwPcgSqmVZsBqJnStqz4GqDzNrvatwtERkzhZTKGunUFbu3rC5vDksfv4XV2s1UZ",
  "key28": "5sjH4v9Xc4NVYkDbTJWahGwwsm2DKhHrYBLsHxLfagsd1JphinXAaQdTsdVUCSL6dRurHtJSSXfZoWKCrAcdXPFs",
  "key29": "3pZzZP9Dj35ANiKfx6q7fZLUFd3YSVoW1RW7jGiE47ZWLmSCQS2156La3TUhue7Ya975XAPggxJmR2DwYVq9Kam3",
  "key30": "8kPkt5SANh84oHkFTyjw1fux4D6SWUkcG86QoqbYeJ7akkRL7weaJwAkAFHoaMtX4mTz4v1v2qxdCoQijS74Hso",
  "key31": "4sVWrJJoCjk5VCzSL8jhWsmfcucRaLZixu94KxYtUeHfkvnRjekssS9bS7QUwDhsKrrVbWjF9UdZZyiWwr5Wq8fj",
  "key32": "3vQdo9T1kKvhXyngPG9xh6SSVonLcbaGdb7HVBSDqEs8a1XDsZJtD4o7EniJMf9XAE5eKM4iJVgGXDeL3xEbH9An",
  "key33": "4BK4dKKgEapdw4EH6CNVdRAoRUsG2nzQ24neJDNsLCQiXiAyGVhUi1TC9LcsQtetg9hG3iHVrYCc9huxAKry5oa2",
  "key34": "SAhgStzn3rdvU3cP8FmG7p1YuHLH3xJJkvm79AvBmH5xw9AdmT4iFADYMHba4oKTJ9n793QCp1dwWkuWUSG1c5t",
  "key35": "35M6xavB6ixPG1FSKpfUgXQr3ZUcJR2qGpyQ5qCwq4KMCdHpjRAcFhdtz7V7zMPqF9g2KLJ2gAYWbZnyPZw9nGQj",
  "key36": "4aXCxrwEWnEPiuwxzk9PmxJ9zWuQMvoBZMN7zTbwVvfvWmR3aghvAsvbmLfqfh7u2ptUnKpLBMNu6g8MoSfiDPjr",
  "key37": "4gfSR9gQRpma64sXYPfYF8adwPz1RiY6DazWwh8F4WhyZ27iTMfGWSec9czGxvqfswFNXgkwaPMrqWTUhNbi87PM",
  "key38": "2egvFNjhwxespvMiFtS273uhR9FUUf2H6G9pfJo4u8KPkd8ZyrZjoeB41z6k16EWGGWu2pKWSnYzt1Ruju2vWpw5"
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
