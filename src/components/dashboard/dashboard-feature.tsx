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
    "nvZUEtrHqCBGnU967Brtsymyvg2mvXv88ELWSfmvuqXYZdUGWrHHtcfX6HEWHgWfzQmV9NuYybnEwNAQtHCeAGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymYhqohwPSTWgHiDf4BGL3hEG5sFu7smq2hRmMRFgCz9TnAdQq9LPamsutdWsJev9osWeX998v1yYj3TEkLHdv4",
  "key1": "4RodJcgAQzmYaxQoYvAPw1gSMv5tte5AnL8MTVfvmfi8bhDroUMH5Lqk98gcbz1i4bFyKzp3SaF92nhr1juRKZpP",
  "key2": "4azV1JLGmtzxg5sHfakeepQ44QP1Kocdg8MQpWYyuySZjKkABgabeaCzBHzUKEtDdjCLCNHu4EKGY2cLPFaJeoas",
  "key3": "3v72Nnc9niqUY1FRPXeTavdjXbgYFcyR44BYwcTe9S7UgQeaEjLJ22emtAiw8chzANfv4RoteiHMHz1ufGpfBCKR",
  "key4": "22tCueEdeKvM6KKrcoBLcDzmdHYvGGEAAMpjp9Js7mvXUhtw3RRqBagZHJbZ6SyB3Ackv4QGbbKr1K8fwWxhsv4J",
  "key5": "4gvbQKMLARtLQhkdZFi37hAnVmbcbkptCE17wS5Whx2kear2WX8E3E17LUk29b9wdMQhWaW3UgSKXMR9RrPpATe8",
  "key6": "X7UGSgTQ4qQhVpWLj6qJe89tngGQNseVDhaa497C5DwNsNx6oLtYhs61Htnbz45SGFuHVLe5FBLKBBqPktP3pMa",
  "key7": "4qUSyfeBnhJBbtScPXEZeBe4ZGr2iUaWXxDnpdr5b7NhfTx3UnnENGQ8VM5KaoWHCTRpAP4Mmc1Av3PTgwqUeFBW",
  "key8": "rUhQWd2yVeAuJYXnovKpcYHNmJ2NVW2xeUJXUiLiszpQnnTTaC6drTv8FqRXjePTtwsuPAFUSDL4RKAr9o3YaoM",
  "key9": "oKkXPWGSehsPAZkzEwnzneQbn6v9j4M8JS1AnxKJpRPYNavBjJEMYKik6FVZYSeXui4nYACYAo8rEE8yrkrWXrY",
  "key10": "5LinNvK4ZfdfTxUt5UP7ML4DtLVT7nWFNT2s2cTmpzTCtjKf5Pd5YJLQrv6eWAaYNwLFHCCn6XXADxMQjrCDS4Mp",
  "key11": "m71fWYutvfXW1nNCASKLbUdpUfdvKeRvH6KMzKcetZuHQkfrXwPuR8hgN5vvCBRhQJmJFTdxXvQtFHR1rXhC3Ex",
  "key12": "5wN1C5kTf195Tnou4XyWs16N3BbWdayQweeZPVvqvL7Y2ehEVf3oPxSrjmYZgEJMsBSgXcSsrXSCWEkoikmXy7DB",
  "key13": "4CJMVncb92Z52Vgd14KgQGVnGvoZLhdT3E8GocKRFgQzQmfBEHtVKYAVUFN1exNpJdtJvL8kAHk3nuLa6oR8HXVN",
  "key14": "2Xf4ip7jR7jw1TFAXUjBfAW5jyanuyrbLbiZUy7SEnbaJu2ym8uS5DbHWjM9nY6ndKoFgBaH4VgTaUoJF7fh5jox",
  "key15": "3jHXGhfn2qkTh6jebLLcF16UzoNTXUAmpXGBRE7QxMzqw8qep7YSy8ajhJwu3FEAAKoH7oaBpf5dLEdmXGH42f8B",
  "key16": "3WB8eKB1Hz6cViE18JBJGcuMJi62KPBGNQMaDfrCY8TMQJv2bUFJ1yQVGDPPdp61i2UZDNDu4816yg4JwDpbQcg7",
  "key17": "4Z8JbZ6erx2bNVPTHHWnxqBXvJ699RuFUSqHMEkt8tGpjSE6y9zLoseu52UtrSroBSDR3W1yXkuMAjq3TMVSfV7P",
  "key18": "3A274QPqaBAYpYq492mDzRN6XPS74agcPttEkJd8fXLih3agEVFeVghtHidKEL5NFAX3Fs8MBt7Qvw1XTTADmF6v",
  "key19": "4VqhE1nY3XDWgD565mX2RTdKZErGQe4VC9qEBpQYL6Zu1un7z286u9JEHdKRaRdFXH38VJS4YcSWDvXVPKUuKPnK",
  "key20": "2TzXrdz5kvF876bctYmirU3kphkqBxXGdHAuNtAEcvrmH6x9qyo2inaEuPABUftv9jPjzcudx4WGVcQrXWaxEsQX",
  "key21": "2coi9MMb5QMy1HFQCSxPwZLh9hLkyULvaNh7swDSjGKy72JfjYpfaFCHeSqxT5hMyvPgk3euQFLPBncpMnwymL1f",
  "key22": "31suRwHsCRP73KgTxdu7b1pzAKiML34nwfx52ZvFXw2CpwbhUYZmgdJgujnG2JFZqyUWTABPRx9zfv1B99zVBeuf",
  "key23": "2nHoTZmGFbqSShQnurvjkvQj5aBc9aHFGU7iqQRuGAgJBRE7F3mVqd5UtLHJY9humEK5quq2hM4J5X43ar4Q34eU",
  "key24": "4AvxJD7QsBza1wR5WDgYUp6o34QZrXDdJkHo5tizo4SsrFzMU9y2bf92q9W3m92ovAwz52b7w4U6MVfAZNoBBAJB",
  "key25": "3FqrjKwxGqRxRFT925VWd28gMF6Q3BszSRGMUVmbYWQP7tzEBNHFde8fqM81FPn2J29HSxADbMVCiJm72DGDRppf",
  "key26": "4z2XDnEdxtXpZgA6k6mcVNnefkNiLTYQ9iYomKe57h6fhcjgs7acXJYrEDymDDrthV93pWLu3NU5yGt7bm9Cq6X6",
  "key27": "2vk3JaLzyRYYG729UFATZCrrAapr5ohNBGgmF3MBGRyTbrmQLVeKh9XM2DyEbRLUpKUnZSULa8NL44wDg6KxVppS",
  "key28": "4EuW1dbxjoKK7U99cdS8wyitckUnbG4e9ZqiooHS3SVBdNsLeGZGSJXgFGVd1hvpWFdYD3wKikKjgduLbLFUhdKW",
  "key29": "1qnVBqWCDQ5skXwrmnQM65BYgH7TA9hvPeWvTaC7k35xLtvYnxBYwHJnMXPHbQ4N4CW6SCjcSViAaKFnX3hA681",
  "key30": "2cQQTM6Ajkv9xrn66QqJqzrfdZik4rVPNR6VhNxFA8iFgMXRKDTZ8PVXmTWmcz4CtG35beqWaNP1zqLDAdmavDTU",
  "key31": "2MJAqksD5V4MrC31RUSf9g9AD9BBNVKwsMQUNgDgsxFJsVJ4fztjaAhbb1wVMiucbYftD5jPk7BaN8TEbQZrrMvQ",
  "key32": "5VEgin976G6DZYFYooAS4AMdKyECxgbHEdGgiQpE9pb8LckS1FnPf8Uho8UZmBNzPea7he7NFWnMw5Susrokx3Cb",
  "key33": "5XiLFxgYPt49wJZWz9d4ji2Y3QjaXvtKQ7disJy4EDtLMTpzvisSkD4AidSC53EH7w1nNndnwt1skUx6XHWkzLCC",
  "key34": "5x1pKg4s7EeR3Nm7adHY3g47Bnza3Yo7v1TujD4tsrKRC5w838NVmn7S7BUGx7yTQRn8GcKhwY81JWF9UALxc6zs",
  "key35": "3qFuwTcoFTes3Bb4LWXhJM1Sz4zZ8w89J7xcihxkwY7PcgPpD6ePo5VKaW9JQqbUmC2P1aMYim9BibNb7q97kH2j",
  "key36": "S8T1yFjN5xSvLccye44dQc7byUtq9Ha2hVzkeMZ4faLgEYeQcZJtJHgAL5cUZPUjho6uahWA1jJzdzomc4XuXp2"
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
