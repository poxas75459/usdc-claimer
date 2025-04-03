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
    "2tzDEqPFKCDxKUJMvRvgHdH4Ab6pcsNUiREgkF53Mxj2CRBETpEZBaUTbGqs8tDqHshzYE1U6PrdzGAutXdC5Qu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iF2DxgPYwq5jFmFLtWBTEoUFaB7PgA5abS7DwJD96gwznLr4y3FuFka1vcoFxsY5NJV7aZfwXr55Kr4pgBHBDzy",
  "key1": "SyHwPyUQtgvwaZz5NtFwfWFrv69873JGkDpz1TfL8rCf4u1xa3vr3YBCbfesyyZGxQin3mkWc8WtA5js3d1qtst",
  "key2": "x37ngttpy7FTn88utTuqHEAnNWTBQT3ZJgBtRRJprsDGx9F7C7s1aS9XzrzNQjex3WEDwtPeTVkPRpMocKgSPYH",
  "key3": "32otcfEjoHxVWnVafnPNW9Umbv71AYo6bfs57PSEHNPUM4GQT49KMNnvgWGkQJstjGTNirRmDkZqV3RqULULDaKy",
  "key4": "4pyzJXGDm91cC46PJPZhfW5WMnCee5iJB6LqPJgbqoxdwMuZTqF421W3CTERWXZ8xeoNZakRTPu4tWXRyoPAZX2M",
  "key5": "3m6k3UmYV4XMmVBzU1dxBL3G2jo2xfuaTEf7z2cmedHcKvMNNMd1BojvxBSdUsFexcVCQqAkFdgib5jk8pAqapky",
  "key6": "3iQijFux1GBuqhAqPQJZX7q1XUtqH9vyoi265QFgYWPe9iiaHoY8L7pd2ynUDTGN2wntgc8P6KSxvN4C5SbEk7sf",
  "key7": "4wkEunKjFw2DjXxKVVMJSs4b9GETaGi6uAwGaZzsg2qPxoU8dx3x2xKWL57tSp1m5QgFHF3w11ZbfUCE2rKdGmLQ",
  "key8": "2pewccqnhgXTNGAfddiDQwTsiWXXN9NYUedHq2E3LWUxyRenvtpv1Y71yrWtk8RNjJu4HM7eRDWGtPVHxdKGAMkf",
  "key9": "5hm7YcdFRXuP1RKfUGwhXmR85TUU8y18GEq6XeNZ1KibohenztLyZyyRUvV4mL9bLoohhfzvgGuJH74K2zJbiVhY",
  "key10": "2Hb3ELmFSwdPUH1JgTswfzGcjypin7YRYYnfHCPG6DKm7Vxeh4GYFimvTL38aWtoPPqJ7jxJNFR7zv3ApAoHnzvR",
  "key11": "65XFSJiPDkrxe8PnFnpWhwxWoDtQKwehe6mbNeH49eKnan75E4ozyJiuL14HCyMKNT4CqHmAQrsF94KWFzFkHfoq",
  "key12": "3E8e6eiiVmi3CQ3poWsiqHsqg35kKgjtTgmjDnXDR1up25x7aRdyVGwBADh32JTzuBeoAzyrShKmLFpAbNs8DtMt",
  "key13": "3YBvAq4b48fEdbZpPFvsVMAB8s5rHi8N4fjYCVQcbdSRfszDbJrgAQXV7RYdFiTeCxHr1cAetd5UZPdjWnjaGG6N",
  "key14": "NpXKbgWdXAdtckTQU1Haj3xggGNgqPThvji1BxLmAS882DJtCEappEiu7UZeLgU78fGfJsZhrnxgnGDQTN6RTNg",
  "key15": "4C9AnfYLdWEg6SJMz4vbcGKsbt2hPfQrSZZtmpW2XKc3vFvCrFHc2twuJPqXgFuRwcyZNkJ1DLmc7nq6CE5pYUK8",
  "key16": "3TcGn3oVpxxRga3KnZHSuQdawXoiGs4WcKumfRB3eChBBgzj3BvHppYHWpvv9K1N1PoCpGo3moM6p4RjpL74Qsn8",
  "key17": "5Fu4Yqrfy6KGWetdBSXitT8QNnwPBGzqFcXno4BCetyVC7V3YE75KJiGSHUYsAYbvNXM6f8svi6EbDYqhLgXt7pF",
  "key18": "5VzzHbY4f1nW6Tc8qYHX6uS1DqGzxRpFZipiGszbDfpNb8vAxCetzrTuRJxeCEjbqUHRvC8GRKedKd2ntuk4GHjY",
  "key19": "BcbTJF8zKyK6xgvYZovUhVhvJLkxZrD3HNGSXbxgJ25UYWjodWBLnsc43zhsk5njys8H8EFZLnvbHZ1xicF5uDS",
  "key20": "2axShQ2AzYcZTd9qobqpqUf2xF2VKT9ncdtszisKnj4MtL3jBzccuPSs6VTmVyUZj7KC4Tf77R9qjsXfTgmT6RD3",
  "key21": "2MYzLujP4Htw91DM1L94fCaUyk26xvD3yaC3cJLRCy3zWG9jVGGKL6CQSj6NCeKsDAdFjNuzFBmiVypBihdwyJyN",
  "key22": "2Khm3nFVKtr4sLxyyK5oMZCiBAG3hSgsQyCYXCJ8ZTTWko2uo4yifkLjHkaid8YwwrpNZpcdR1EY8RnVkTNre4BD",
  "key23": "4LFXzHNdHvxnfa49ZvaKuNmzd3u8oE6bD3WW9TXQV7HenVG9jE6CZUEoHSHbay6wVwyrgQ9L4HbBNKEA8A13EEmE",
  "key24": "5jyfim9ZogfrRZWbdHU3aSzdKXUtrzApUThj8uzn9S1RuqoUseuzCtCDWYSAmXeE8H7MSkKztHvNvZqEV4hmXwxR",
  "key25": "3idnjKwf2kWGCkyxUbmZwb1Hh93C5GnsyvvRjuKxnwWzinXWyKibE1SujFyJoUjpGeY9jsB4ASEkRgpsxiaQtSok",
  "key26": "4qwMYmBkRWh3cxwddMyWSCEiGcXeAVNCUGSaDsNc3jkr7uoryqpsZZ4oACZGYHXp6ghztdDPQVdVpydsK2R5DtFu",
  "key27": "2WKQRCdwVYTwrtLKYqsvHmssWVum6Cg3W7UERy3zxXjB7WfVWMEgBKzyXLpxAUw8pvzaLRXvtPTzS4EDQDWg46Pb",
  "key28": "1dvpxWLVTbAvXuG5Zu61XcYgh4irXQ3kdr6K7yT3jLBNPZ8ZbETDGm8TJ7GT2sstsca2gD5n1NfBjSNe3eo3FZg",
  "key29": "56JsEUhGB5pbWAxFMq9tNgqeZWy2G9MpxCPpXKr7aYJx6E6Fbd4SwKDp3J2jMs7AGetVip8DDnckzYHKs7QvjnfR",
  "key30": "67ijfcrDR9g9vxMTCrCAv29WM8ZqhPs53P7NRcsZcvpFxhsvUAR194LJ1iCC3oh275cw4C6CnjmZ1XMvsEYtXQHV",
  "key31": "wTbHtqHtHCFTo6WTbkbVJws2a2xs1bsoo4tbKR1nkArMg192UFxowkyp5DSTMZcJTKJSm6MWeqrpJynE2zqcDGV"
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
