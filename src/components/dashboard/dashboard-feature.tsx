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
    "2BYysrEjVWLCurjwTEWxvtANHGDBVqtwLKoum4hRocvfMBdGJo5oo3UCHLJK1FWufibxzV9ift9xHanwKyz9tCUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XH2RjP4Q7ma9RZxRWacXuYSRXcobt27GHNLZEHePNKJF4gSw6uuYXjr2fuP7DPbwcpEHQQZwkhSNVQPZYWknuPF",
  "key1": "3BcWsNa5ehe8AGD4JKFP15H3LLQMan7LgzdERWCRAHdhuSWbPCNi3EutcjujcKNhAtdhtmA76EiTfUfitghZWoy9",
  "key2": "3Y11kN3keGYbx74RWEd1tc8dQTTDfPou8E4r9kBsAzBX53WXJ7j2814nQj1tdw4KiBSYPummkgq69nNeXRoA4X3t",
  "key3": "3vCvery8p9cX2yJpWQSsDZPEwdkg1ccod71AwtMW2RNesrErP9GstsisyXfni92Dno7MqeLFkvj6xFZCiqbWUsFq",
  "key4": "3qcFapw6EDF7VS1AyxdRWDt4HDvr8BEFWC3di4hCS7LPAYNXwZwLu6iYKFrSuc5s6vvqqGxZowHNRge1nBZpPgDg",
  "key5": "2kVzLUtA5V9jDSdFnrVixQ7VcnBHYaSJDnZNQzF7ueZWFMVsSwpH9mQXfZG9AcryCnw5zpcd72iZGgF8npAxcbiL",
  "key6": "4mskL8ce6dZAi1cm8iYQkWB27SRz2Qi62di3BrWZYo4U9Hm11tJt5Bvxi1FrTPiSvKX9exJwZbXj575h2QeDrQ7b",
  "key7": "3bp9XAz5XQ8kRwTN6p4jsdyoU7wTNCCMBkP7qXMviGhDgCbgtc6m7MU1LHowSU4zBSoWvo36ga191zBY7sVaswJ9",
  "key8": "JQm3WnBUo2aqV6AWtbX4c35aUz5nDfZSP6CWa7W7cr2kvYjWPJnAKmEUTn62R1oPBxtDMgVpsckpdHQ5Nd3Wg4C",
  "key9": "ytmQ4XozpsFAS4yo1ybBrUYipqyioqcyjXS7xzQ1ucVtR6sYTcF6VXE4LqBWvpSY5rYM2fEFSecj6cyqH8tdfki",
  "key10": "2AfoXucgiX4XwjoBESoHeM7s62i8NaU9Dx5ciRWY3qUBWAZjsiArho9nry6TGj1QVNoNsXV6Nqda9d3vzqLSEL5Q",
  "key11": "5W5k1VXMpHzMdRgBM5DyWcTLM2dhs2Lqn74GnAnYtB5S1w1dxqwJcd3tRqw1UDuzr2tgUFXVYYQBictjLfuKfdkb",
  "key12": "2uSrKD15FdxEMAaKfRD8VEurWCpiKrvL1eXKiwDnQKdtAeopEdwMiBSUAJC5EUzSLGVRC6nv7BjUKSp5LWjfDwbh",
  "key13": "2UdAMUsiQ6z692tG5R2r9sb7sKUq1jbdcFekJJA4b7SpE24UaQpDcNkaBeed9GRU2jGn7izNrv626VQA7eP2HMXh",
  "key14": "B9nCGHn5aQBQBFQqV7hkELTYHbwNcsLjSPAUKVVaKNLm47xG2roJ2sRn28Skpves4c7x66jaeFQ7K9dEu7RGMNP",
  "key15": "2zFK9cUWNWBF47MtyT74oUpahPWQAX6chtcBtiHe16ua6NqkqBH82MAVRXRzVDK61e2J2jQ7WHauyi4w3d1dvWzf",
  "key16": "5E2e2rnUaWqr3P7KBsazpkhFACSnRtvA3TN4R4xqmdDDYEfPEvtjUYuNSFm6T7fRYY7ECNn4beaPP8UFkYf1uG6E",
  "key17": "2FQe2hFr1xmZXWkmeGzuiCinHBqcCovFVwZMKFyyTxyzpbxqX7UUQ9JJDVx8y3BrrGNYLatGxK8f6RLon5daEsJJ",
  "key18": "4sA3VuawvDbvC4njLLnuneTs6dGFW2mSaFQXASmTGDrx6q7Bt47EErp3VAMQTM5pUtYpS8Herpez2u7AwTgduQjW",
  "key19": "2AzNdERWAKPVgwDBtKd3JWsLtWSygTQPSQ5UXVYTbe6VGbFRtC4nZ3oLXnYy4hbsnxF1Fr99k2fx3becJW88WiVc",
  "key20": "3SZM3639k5Xa1ej2X3myzJne5RDtRWb1tE7AucTkkP617V95qFYVX9B1CVhuor2AnaJ9MMRVQiPSk1fu8n3hEfGP",
  "key21": "34dP3eLndPBxtnwxgvWnct2Pchepgf64a1d1ydjse9rHixWXg8S45iauGGXY8NkwyfXHEKcuZKYZdGWeRPQrXdta",
  "key22": "57HSX9eJrofsrcJMEDy19CspRSYfQCTpuWfukm4Ri6MhPAhZWwETUtUFD6pn9j9tAxJTt2S4P6TMSyYocLeimQPs",
  "key23": "4ovBCT2dC3tx2iTXCRZbBNi6RK2Dev5W3pah4DxzCLy8gDwS5CzW2mqnG1isorcHcqSsMdEbGhP5sfCdbEm5irNy",
  "key24": "gh2cN176KWc8VtRz4bwHqmhQakLst4YUsCjKwrFD2wcgKYENAbMb7KRcbVifA1sWXLWAgKrYK2FxGytVXx1wXNs",
  "key25": "EeA6eBcs8XvKsJgR1PAFw7zqDMWkHQqP9EyjkDurYFSBPMtPKBYUzQPn5ZYpewvGRVxmcjdDi5Utm6o7u2WaH4M",
  "key26": "3V3thUqiY735UQ1oa5Loctp7ZZ5HPp1bKBAY5X797qD93rReDiPkhbmWBhhhgTrHG7ijEDSv9as9ehGAeBHNPzSu",
  "key27": "5WXjRoGdp7EGENsKkrCvbJtNgPh7sgaQwnuaFVEDrmuHeMNyg6wVBYiAiYxXxZdPXmJZtDKbEXFf7Hr22m6vpSYb",
  "key28": "2FhdT5CdR2jTigR6q9SbjC5BkKCEXwfVpEjamM7u6XXDWzYLdbbebM6yQ8kVvVV5M4w7DJgs17X6DVqVooYYmvRj",
  "key29": "3TmH3RVX72x3jZnoQKvMVmq4MQC2Ttv5ea4rUYDfqMdCDcHMD5o2eKG954bmPUM8YgUomtR4jDfXbc5bVhujZF1",
  "key30": "65NEQkrsJx6DB8yqiCrGrEsE9KCVH9ka77fhDBt8uL2Vt9G7tF5didsHFtkbzAz35M1XefbMgsqsjKTBkDn8dM4f",
  "key31": "MwTrpPfVsshUkwuXfedydGxwceNHbURzaNjcu8s8W81AjQjnGZPHrBwJ7ne1A2ufzJDhbbzBnuF9QEcMzCAvYoj"
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
