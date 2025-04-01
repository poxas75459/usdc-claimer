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
    "4UYfn4ZZyAdthC6diLkJuVngGwQBp6vrbuzo8oSyXUM1KyF9ZU1kqifw54W6KRDLXqrvDRsjW665jcf9M1NwePCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJh8KZ1SeSW2uyBcqnS6qUNZpGPEfkK6sDTub3gcaBc35eGr9jxHCjyZjf1FaWPQbeh1Jerk7PKsTPYc7P5EmQf",
  "key1": "41qF6Zt5pwNGA7qQmAFwps7eMCHBTg9qgtFL2YKpZS6DFvUcbPWX65Rhiu55tqGHBQwhhje68G2uP41ZmNBpaiGW",
  "key2": "5r3uapQsXRG9YP6za4DTPGpDKaFu3GSfvcpS3CrLE5hPuKymoZrtKoHYrbp4gQTEJe3BajpzigsTgbEUidAGfcNP",
  "key3": "7WNnx165PxvBip3Bbu7kGhsRaddHbFrbb2w2517AU686d9VYQMhhp1ZwcNV5u1be1SDZY5guo4ij6KAjtMW4e1y",
  "key4": "25vWkTsGrLzThjUJYMr54HMBHEWH3r9QLsBnPrDSPWqPmZixXY1MA69xpfQe14Yv6666KbYUTbvnDhdLdhQKJQMV",
  "key5": "NPAkSPSjb5PmVchHABNGfeKfw2EruGvzhfpbe2RvboK3fJYLxQnWaEsEukRXS7SD6nBtCqvTKVJbL5j8o5sH35B",
  "key6": "67MXRuqwzGMbgPgzBohQ1xWiRftTCNwG6sDR2Ek4XDb9Sb6T6L1WUi6GvqJsP6JAXajD4TdVxWHhbGjDzp295uKh",
  "key7": "wQ7L5dXANRCtguGSZUvEX5nTjhtfkhC1QP9hqbrbAZpz49nthsgeTa7yAXQYPU8RjMCeSPtbSGSg3JSdjaYsefp",
  "key8": "zPkTj9fMHKxg3sh8QLZu2ANkRqJEyBxG7cJQ9G39TRq7stQkTzE3mqSQYAYsWLDqkgZDNFESxPs1Zht117Zu94N",
  "key9": "5aSzqAZ1wXaRGN9J874uDL8BsEfiNDhGhjj3oPZ55zyuLESrYxyxZY3sAosNmS23jjHkdqjwkno18Qju3ncMJFyM",
  "key10": "4GtojN8g2hET9TpC71yV2VujYJy5pHVAa91HEacC9X6PnSULABYGw1GzQDXtV6vWUEqkJHwPvQfnzARwaTjhueT6",
  "key11": "LcuRBCkEmKVrJTyitp4sgAt9ECLzoJfaKE6tGehhogyFKg1bUPzA7KdsjGSSTDgPLtuBcQgXtfrFp6yRfAfoN8C",
  "key12": "5BNX9RthN6Kh42eZRU1gEWWLkpTnWEAHbCJtkrSjbNVAdTqBKMLN3pixjRNdeaRmX2JfeB5CB5n3SVJp2uhSDozk",
  "key13": "29nmVevWcrjLtxS2J6o2SsGdNenC7wARJDK8AvhXnjSszbrwSWD73WXogGBgRMgUwStt4ZqiFQbzpAfQUthj84a6",
  "key14": "2D5HGsCeNupjNkvr49HJ1auPixDUZkrXJJC96FzfCn1ngtiTqtZefpFaWaCpJUX1r7S2ZgCm7mELytFj3DiHhe3K",
  "key15": "PahtBmA2EDeWCGSHuy52NhiDkzzZuCs8ktcKi6UqdqppVcAgVmXd5bWq5chp6JrL74tMp1LZbS31gPbTEaAG5X3",
  "key16": "2noZgYnJ9XhYeGTP3cjhevdwa1xCTt9DTqVfZfBXJwwkBZS7yAsu4UEQTuYmLKZPorJLji7EN53YssYgPdAPNwyh",
  "key17": "2AShXrVqDhXRGx9rXRSUi5X2NBj7QBza414XPcySBd4SBoLMJGMABCYLzvuqjibBLJAFkv25nQiemf6gkjJ7MY31",
  "key18": "5KhdBDAr5GCTE2cBDYwvqDEa8QzEf2yAfGxomoE337YmZXp2wsnZpfhE7oTFPNvcxDDM3V9HGmwmTcPsczGu9Gez",
  "key19": "2wpDfnuxKjDo9RyoJmLyWDzD6BDPdX6ydASmaB9PiYQovVm7sjQoVEVRkKxhX5NCg6s26yKGfNsWJFVCVGbLskYa",
  "key20": "4pgrTYWiYmQZjK4VfGwmnspSiu9LPdemYvRQuhmBJrLKJ8Ja1auPorUumCHXKhTg72T5tNXmTDcXRi98RHDmij8z",
  "key21": "2GpP7gijsPf3wL5bErvvkAsdcXXiAfm76d3GVKvBSCHEd4gq2QSNwmUjceLSdgkFyPDEKaUBzbkVcwZd1AvX4uyx",
  "key22": "Y26su8fgdmpT4hBJDrKpqBH488tcdK7j7xHFDfGXGtpNYc5xxsJwzpcuEHNTxAsJ5cNjWcJL5uDMdo4DHiLTJRW",
  "key23": "51PWrThWwFbY7h3XWfH1zfpdWcYmQMoKjhduJ662nBtc4ATMk9ow1rhYEUL41YpneGsy3KobNZKA7g2P7m26kiV6",
  "key24": "3pW4MNnfi6EFikvqLnrkJxrg4y2pqt6KtoJ2hGhaNhvLkyXBJjfQnavjLPxQoBLh8znkQJALYk9AkNGyXSHS1TV6",
  "key25": "kEnBY4vbuFXSA68kVAQjDBkEhE9zrBnP2q9719sBqLbHHQKJ4yxfnzTL1KseuM1RAFfRjsWomwp1Wyc7dw7i1wU",
  "key26": "5xHGQm5G5BKgu8zMwTYG93hoyDzKvMVuUrezmFjyrRbxi8so2GqGD9wcW9Hsjy5tsU8oaVSDPTw1wJvASpBh9Ls",
  "key27": "5fbBgFKMW4P565m2aMSknzMoFiQcbimTepwaScdxegn9rty6jGhJQGBUggnVZaUXbvkmMdW7VH89hMwP9suRcQ6J",
  "key28": "tY1m43eAhyJwLkEZ9wMyuHNuwEqKJBFQSTtnJvUWzp9cJwXXzDULRm8cZAD9vZHHZRc3ng8zGVGCBis4cnwsMhL",
  "key29": "57TPJB3GwJ1gZHby7yJvmNgmfUU5KwTw4F98L5NnbiBGeC4ozcGaHBrzdmA15BU88zRn1kejcrCcWaDzHToe5jw8",
  "key30": "3NpiH2xTYnxZd5JjZvP5vX4mXhEe7UBbQTUDqTN14AgwTdAhuofcZ76sKmFCwAaX829Tv8NQfqc5tApfjCRnHtSz",
  "key31": "54GxnT8JG26mtVsCWW698Jhd2fzTBBRGeWYbdx577Gpn3gsmME2qexhtUnenqAx9iVTXZgoQ1jpJSwskik4L86w4",
  "key32": "LEGYQxFbRpz6t5JWomEwZpRPHi8tAYjCqZJKYrqAiacnCqsMtvWXppDwZh3HhhDBQTWobPnv4jh6Mzvs3PZzKVD",
  "key33": "4CEQqqtCFNWPBfJBXbBLS4PyNqn12pwLQvmgaPFaRLZEp8fhMghcYHw9NMvjU1x5ifbcD6WBCx2jKcENTxYsrHJK",
  "key34": "4is8LFtHXpCjJBiDxuJq58pDqdV4zaoy8GbQB5XZFDoAhLATqdwPY7qafaWMSMr9hwHqrHT1BeeHfd37dDoPHJXa",
  "key35": "3Pk67VdJMZ2HwsuVNGjm27Ju7Zo64CfAyLck2YCqZrdm62dQYK4zoibqTjTcMpb8PGZuyZFCSWfhwkBHUKZvBQwj",
  "key36": "3FmE18kiYk4TmvPV9fLx9pgoUt7x47rTxSmXDMRpYmnBdyeqdrcLqtePB2M6kD8bjhVVkRxxWcAZxYLp2KsHoC9W",
  "key37": "4siY35p6JzvbCNgAWEi73ZhHESZqprXcxmgk1DWR3EJvu21TEiR9mbAqzCVjBfjsHF53YWzNG3QzHDU4cNZW6sgn",
  "key38": "3JD3K88fpyLh4bJNdAxmkCvenb1JB16SZcwvHH28p7EikioqgNetjCa5CkDowDwo5ZDRwZsfRVZvfTYJHyvcN5h9"
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
