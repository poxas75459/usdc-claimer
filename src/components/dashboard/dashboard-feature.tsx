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
    "2xAivGbXSbF5wWcD4w28cykaerLFc5uFzpmbJebBrUoHuSSbVJht8GboFZiUykoYx641akaXSvw2YwAApqRCWqEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaFnUaSZegGNdKf7L6shRDRwmSV5Yk6oem1KYqv95RrNuzep1Pc8N3ckcyk11DZ1uqo9DbfdD3j5fi3LUsbniPH",
  "key1": "4vXbukdPB74oc33PfBSwJz5e4ZJncHSwztUDhETGRDeVuYHd8u1ymL81FDdUHx5boFKu2CJRM3tG1B87oqNyk8zN",
  "key2": "2BYjvoBPRmx569a2NG7tLa9wqJvyg4XdHJUGdiuMaeSD1V2EV6nibmZn2zEd62dHsPEtM7CNpp9mgbws5JwV5Da4",
  "key3": "8gWBcjHfqvqFYsomkDmjo6ySEAF14PKG7Q4Z84Qt2GA56tH1vLYZ4VDo8BLktDPKptb3734dZFG8Dn1ZjFLGPpg",
  "key4": "9ah6sVPaU6RargpnmLN3MYAkibg26rfopn2ftRP633ongTHuHouwUjKQdfWamKBqXyouTUEPxDUiW2sEjXoVrZh",
  "key5": "52HjKzAPHszVqsqhK74Ba7sBJYBPmYPTBmozNFv3s8DaUbobFo4cwumYpf1532bV4CBRVHi9DiwYbzhB1QDFZhj4",
  "key6": "3mSrDSYm52i1D1A9eUhc1cVhbBkUPiPbpbH7WjhEz8YF4wE1i4i99pfpMQKnepYY8Mcpth4Y9bNUQsmGVh6FbatE",
  "key7": "3i23uyaaooQYtWSfuYTZ2sGDWN1DjQ3MnEh91F7Trie8Kp81R4vtAgyPRfUzUJqegrGjv1pEcm7rjCEzYRceaVnT",
  "key8": "iUKKU8aXqmnf1JgiN2Z6yaVjpb3BSX6KZkHegHQCLrEuBuLWyeMDAnaAxdXpg32WHqMy2EsyNCZFxvwcK2WFZx7",
  "key9": "2tZxidyhoR2dVrai1j7v4PY4f3v3cPdJcnqCSy4DKtjuMAf9o8o6fWsJ2zYxwHR8Fkd6yVTTZQzBAC9oszro9hCG",
  "key10": "2fczrg1bKiZJkdgQjtT6AFKXzdxmFMazdVcnxbtWhhPBhvE2VYUnK23AqsdaMvjavN4KWWKqiTtBkeYyuLnk2aUj",
  "key11": "48AuxgpZcfBSBEbXreJdftJs7GiUGKjnu7VNBoCyZLCqAUVir2H4YLEKHN8nmN7e3pPV8oV6dg8YAC6adNUGCmr4",
  "key12": "2qK4pNY9Cxw6m9hE2eQCdk5Mi5KjeLfHbFHF39aPvuT6SR1MqkXJiAMZzj1jcvAASvTSUtuNbGrKYC9wCQ82U1TC",
  "key13": "ghW9nvzZ21j31WKy472n4tvpdw4qXt3Ee6AUZyWbV3fjDgeGoRtE2m4DEA1qLQw3C7xXqZBkvNqD14TCiDowV5f",
  "key14": "5mvxnfAjND7tHWdBNUGeSqRuqdVYhYfMo3b5pZ3XbpfVMaimi3cvpTMTmrJt3UFiTV4YyNGohFq7txJkjWBx1uvr",
  "key15": "2xV7UrXNuy24mxb3vthaRSwpu9dqa9jGC3jcSNU5GLG26iBkTffqFUJJVuUKo88Ygh39XrUtcsAdrRbu958615ma",
  "key16": "22EGyZuDy98HBF5vWenReLV9Dp5zjuhwCAfQj9Ru72AqMGznMyXSsSJAhoqbYm3Jss8t5agULhR86nKaYYcM8AHk",
  "key17": "61RpR934EQwtazvLFsuqDWb7mJiC6i6RGKEYDytNwGi4eWxMEDoiGpQRMSBhy7QBfS5VM886YgMipgyV7nikm3Fb",
  "key18": "5swCiyiEe7XKnw71BF2bkBstH2fRdHe84MaTL7wvVSx8siN5H9ZEB7tYeZbQUjUGAuPuMowjLZRS9HVg5oTZ28f2",
  "key19": "5mJBBwsjZ7dAxpKmtDTGebbmj8av3bmDjfW6wjN34iCKdvtUHFKiSu6KF4mEeAu4NYJ8aaKGcJ4Xz6w1aZMUJoh2",
  "key20": "2doFEDAsSVTQa8LFqszRdZ7MTywXgrDVct93Vxi9uQJWZ5v9PEKhvfd4ksmrBe7ASG2aZB8LyU73MHZykxcfoSe5",
  "key21": "2SRmREfoLVvunxMT6TYP1LtYPYaWSiT6YbmtVX9fXucab3t5GxZoXyjciSHd6NBvioDLdQiA6FakNP2Mkn5sDyFK",
  "key22": "59fTVqcRSXSethtTp5VetrCkWtnPxXcsvxqvXutR1LXDZ7BkZ4MdLS1viu2mirfSsPg7p534xPX6bNFCR4oemFv6",
  "key23": "2nJkpfTiBtWTY6VV9UGb4fwPUgRZDvS1ZjvGFFcG1CMXELexuWmibHETqKTie9Y27CMYRPaydKw7spyuKFJUvLwB",
  "key24": "47XPd7PA6cVD5JEw1hzMwB2zuQD5QBFFrGfJaYqu7JQzHJ3HV5PTKjJQs1d8Q6Qj9igwA3cEmmaUgxqX1pyqgFWW",
  "key25": "tZR54vN3q5rb2QQ5wicy4z9G7WVixL2XkHhNAyKuKepCCJBJjeL9NCjxGhchwPX6Ym9oUHFWdDXxGEQNZjkLg53",
  "key26": "46ZtmSc4dDnX8NRcEUBHFLGuKKgZ7oYe8YLsMsw4JZbU5MBStefwnNSrZgMpZvh8jQfsioHRsvqqxUYmAXhysas1",
  "key27": "vjjYjQnkCC2ioRTFgJbd7VNjdKDCrTtPWRFuHJkS8uccqZU8xXbAQZ6SH12jsWzQv8FUtSFsCu4EFgYQKDUnPiH",
  "key28": "47BsK4BHdGoSb59LDMbifRWhe9YWkyj3UGYbnxCpGXZ3tDiN9ctop8vft8SUzrMUc7zY2ExZ6gQCbWiDo7mSWyNX",
  "key29": "47quWfzBF9V3Eeu4QnhQTfDGuxp92QqHLQAbEcNtUpmfzq2Zu6N7J1Mve1jLdiAoC4jY6HeUsYz9dfiYMUijDEgP",
  "key30": "hF5cQfWUgPDZj1HZkugSNWK2Yd41pQDQPg4kDcGJ2juBtzKVXC2jKi2HeHDiwkdknLme1Y5rG3MF73tjHFk8Gtw",
  "key31": "5j4uxvzQkxoA5cBTdzjMBFxhy4usynkbg5aRrunSc7nU83dJqrGbGHuP7PnbxdjKAQZg6rrweUnV1DBgNNTDqYR6",
  "key32": "5netzUCChiQB7pFZ12r1VbkSjdFhQRCEfcjaNDP958CwpJR78UCuCya3RLbVRRBqbcy5NTzWm62SzB7eKEttLiUh",
  "key33": "4YQmajqrXfkyX2gp4brRsYC7fCoHuyMhAyiQbDdptsQcN9m1CBNi5TAdirUdApgQL8686kKhBxJAhzmdSP3VJr1G",
  "key34": "4kigQNg22u42yecmuB4jsSr5HY9un74BnLoV6vYegTmC6ChRyHRkzcmw4KH4C66VFRN5Z7iBugvhwM5d4JTWhh8H",
  "key35": "WxUMSjKJiSCGq4uk9qFkjr83ktCiCy8tCeVXQCnxDnt1aYaxp6Cnztg7Eea97mGPrB5t27XH7pHP8Yx6k4hH4Py",
  "key36": "3rMinwjM6SMvoaU7GaFfvKhX6EpvYGd3jAahRcnJAuynEFa7hruWbUCCe8cA2S1tLLnPhThQH4HcBdys6CEzqFfU",
  "key37": "4yDBDYUk8irfPK4EWxaWbsd5g6ighqauTNzaJYKB7gxckKJX3T1ahNUfEjVvzKFdK2bgeHoMe8TUQPXX9EeCKb6e",
  "key38": "3E549RMvcoXNZ4QxJPbBrHXLcDNZCcnF5YnjVUdgM5KgUoPjqzMqwCCRFC3nkuJQ8gnKJ7uN8tqSRAAwgBdHVKLu",
  "key39": "VY4bQwcapcy2jeZ4R771dMUsPJFqRJWBAueEoXL6exf7bkwcCUCbpFyJ8PEPoY9AWJa5hPhmPf9D9w16X9X2KWo",
  "key40": "4gxDUa2ksbxddQdPN4tYcdUQCvp1ZFC6QjpQHCdybTJNTHQHoJvx91jt1yMQAzNdsUPUwJzQFX8yJpVTrUZtSDzU"
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
