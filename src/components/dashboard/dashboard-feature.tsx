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
    "3SYVhk8ocsYxjy91m21dVu79X72jh1rLtrVSgGYJL9zRPccKYEXhEB3ckmSquTwHA5bLCyjL1gymTZaVer5qHfd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624p3NPsaCGjz9Zjr3dx8gEMy9ewjC55edhbbgmFn72NVF5bCiDnWtyLNGa6zVVj2DTW1bBCvhexQ5ADEafaib9y",
  "key1": "67L11fBkAwbDY2Z9ufejLpRSka8F15sowPZ9gDY7Ym1BmznNnVdVAmVih2QdKcqvkHbJb6QJxs9HvsLqiiM9AYKo",
  "key2": "588hsWwSspGeS4MVq1GAgcuG4zUNp5Vg8mMrdSD79pxP2jvwu3CKbMLR9riYUwRXhGhN4DWBXPPxm9ULQxGDm1PS",
  "key3": "43fCPKHAWK7LHVgZB33zdcCk1kCDySt3HbBigM4PUU9S6hBL7LpiVdMuzZrFM1QZxtgXXcRLTiMSV6sZLfmM1AMx",
  "key4": "53EN2EAUW8UtYgrDWeC4tj9FPuf3eSUsd4i2T7mTaHz67dLD1CeRFUujU72DgRxHVSUKwkaoLqDUV1XMkpPdPwoq",
  "key5": "2C2XVYXhTxqCTz8ndiwYKqHG8FsvQefXX1fpovM9GYj6PHpNzSQuQTPXpFMwAMxMqzzktSt1NFX6w8CmuCjbPzFG",
  "key6": "3w3XB5QiFZCGgC3ptKr11WAcbVpg4DDS2Bw16zkLxiwBnLpXniJMaCLNyizFt371KUQqprGeAtRAdVtdZgvGz1kJ",
  "key7": "tv4BmCW7i7XgigEZfYhj6e3hLcmVma1fxXigsp1JS5YV1rffGPqGHJFtbi2BevSTWgeJyei3NRWe14uSxtLZn5c",
  "key8": "3RCVaU26tWrZvghnq92ZL2Ydw5dqvSuvMSxK4rywMpzgfeMQgGcKG2q415zdvPH1WkX8Ee8vwJdfn4bvi9rVcwQp",
  "key9": "35nuhA4v2TRoH2MAwyeZ8pbFkhuvAM6pJKp7WP5ESamos2oSy3CKNxS1epc36jwQDSsAkraXFKJtUQXCmV13EqJZ",
  "key10": "5fdgVoSixSzRzDsDaTybBT9xrMHUPTi2esM9GTawpCy42YhXL5D3E9BRyVtbexKS8BbCF24kUDXojVMs7spFrwfb",
  "key11": "5YY6QbN5X3AzKpZ8oYWZtuFDX98ZhH9Rb6X5A3pnKFWqacSj7q4BaupgCbfFYErTFzsiGQK7Qyzzp1uFdp9uVEXY",
  "key12": "PzuReAK1FfjctVai5MWsiNVRtNBupn26FGsutNMhLBCyHukvp2gSzRcUyPAGZX8qLfT8uAaWAJey2E95oJsfrnH",
  "key13": "3SPY88NhTedGEyWP1F9e6krR3Zp4uuDXbHKmYb8Qas1gWEiQisZy5J1z1BfaZNEk7YT5RYRhtkzmfJdL1YkC6YBR",
  "key14": "HP2qrVsNUdyxFgHMQSoaMwneiEszZx6ziq1HsKX3DojoMi4enQpo6zUptE2mm3AU2v5DDQHzWoL1FsLTi6yj8DE",
  "key15": "ipzCYnRrZFJHnQvYKuehFvtJsee8uBEVThnx92mSt6tTLpVHNS8pky2hViB8YzaCDBuEvpwPt3fYVkMr3yaDMEF",
  "key16": "iRaGDLu7coYvBPQYzX8iUHVCsKne3WTC1H3ZVn9hXnaRna1F8AUxc99Qo3nxFm8k9NL1QvvYWVeK36qt5AcnHEY",
  "key17": "2Us7QnpS8iTAhBuKvBcQWVxNoH5DPXGNzjmRMYFh4FzpwFoHHnAPBuv3v9EhKyxjRWpU8h1XtbjvcaMiozeh6vL",
  "key18": "4UkHSkH75AhdHmQYitP6RxfGJnCfCjBYpSRxhWedKyTuNh17DRkuGrCYHVg2SrTeL1doXFjNPpwJMrx9CgdT2PZy",
  "key19": "2jEL4TvcYarxMZ1tw1KwYxMMBPRU2fh9dLyuiJHoi6ZCyJik8KasNP41Mw2JUi5EyztkRzq6WtpvJm6neh6qmgPz",
  "key20": "64tq2JAhH3b4JNtbeM8wveZa1ZLyk7Kgj1DgY9jCdpiymvJ9k6DDfZB3WdJu2RCutie6h9wrnqoVnKA59umdxeyo",
  "key21": "4Sh7g8mLeizppLAuQJ3MG5kY7YxyQBfH2Lo5GLC9GRkZAU6VknD7u6PMEEbMwNVcXiZe3BBjxmYm6uQJRzyoJnh5",
  "key22": "kDjVR3Uy63jWJRqWCw1PtRkJNPcAoy3z9zyAU6VbDVMrw2dbw5fSdU7fyukE7pPgmaQQgjAsJr5XDx1z86sG6cA",
  "key23": "4P4pzw4v5eBvovkjDEE94Zy69yWJpSPNwKcK1oHJWym2QC5Rp6r8cRos6cvdM6zrU2mfhLddj1UnR377qbTQdihN",
  "key24": "3HRUjd9xtUJGMvR2F5veVjXhF7PDemtnu4KBeMvPxoURcSeFquAQKmTYkKpVCQU133GGcFt9hGsvESpCF8Lbp5JD",
  "key25": "3JeiQdoyjt2MPYiWHEtsrXQaWRMjLnADV2chh6DXMEha5GeKKAkdpSD7Dx111bEBF8zDgwinoB17XgYRp96dcxhg",
  "key26": "5g3v6pUWJqCkRsbsHA9wjFbacX71JKQQGU91ckrsPgFvrCdnbjq5YcfYtyeRvi4iXwXQdMko96HYNXQoXZEYZK7J",
  "key27": "2woDrsrb6CdKxf6nn8p1jF3Sk49tyQFUJAj35f6gcvfgDxPgU8MFynnQg8AtULqxbXEG4Tr3ynx9y198fHdZKQXi",
  "key28": "3BhVN7u8TtwdVQEJqR2f7N3kpzXqpKcSzHeJaSkGbVAQWaw9zDM5khZSg7cRqCcmYRHCHpuXrNTiPUX9JfSU3ajZ",
  "key29": "2cTUm6mnQa66sFx5mWDt9QBxcoT69HEuZRu6TJWyQRQG9VJo37hFTEZGz6NWuZN1Vm1SVZDKZ9fpUnCSmArncELo",
  "key30": "34A7vbBKfkGcLFqEzEVe1Bao8Looy3e2UDRkiWZV5qgarzzqqcZ4f2efWJFPyeFzfYjVnPRE5xKyNgDHM6XnupfA",
  "key31": "3oTNr7MXYdMTCDjWkPF4PzeHLMXdRtq8dxXZaZf7nzco5gQ9LwwwexfMwjwQrbjWdrKcRQSP9M9C6Xi49qF1mEND",
  "key32": "qJHsauX2arK9LuEmK3gUxF3bCWEcTTvi1uGvSKMkh3dUxNzP1eMpZrj7ZuBd8TvjZ3vc2qiraNGVNebA9e3vMg5",
  "key33": "3ey3S8ppDThM1VBwUmyUWJfEdBmuzGdUosUAH1gmnh5N3yY8yKPwuWwoSCXX82xuH4nFGcphkrJ7gSeJYg2u8jRE",
  "key34": "31vekPjr5R1SHLK1CP7XYUEGv4m7X8ex2kYM1BkPHnQgCewLP1bW5YqUErbMTnKtCJdV88hJFYpef9pKDrgGJJp4",
  "key35": "3gqCudjKavZBg9r1UeoEaCWNP6gZaXopTC3Qkig1njJdDPEo83bxPPJjQk3BCKyZAnVFMrkDhsw2J3FwXbhyJxB1",
  "key36": "4QiqEVE68KxebWsoszvo7EvdhUMeWN76JzKpi4ZMSN1cfBryr4ktBorfkfTM36eb51L2N52Jx7BZS3kYdQ3oqpQV",
  "key37": "38d4rKqngQcQZYjfXgKHSxuGarRUAdfeHAvnTkHGXj5z9jjvvmViH5pqjnpJMq6VkjpHQt2Jq3dbpAQwg4ry7Nt",
  "key38": "5Vc1FBsXQjJB6GmaRirigz6UoYBhV7fsP2ESijcxghyhmLedh6qJoFzqvrAsZEBHQcMTy4Lh4VQAZAxahkmA5fq2",
  "key39": "33RMvEbE4tXbPGfL7M3PTcM77tSEgpPXjwUcdcY7Whuyc91tqBtCdyHB4d1xs6BXmPkLo26aydpXtf4cCTVrbaKn",
  "key40": "jSaZuoQuTuLBeppe61eDJ11VQz3F23G18VS4tyUsyxipaCy37VBFsX8p1D4uDXSDhJC3TVF96qygnSm5GgjZs9q",
  "key41": "vH7QwTZPjfMJVi8Ao9HpVsrDMCy3sXZ3ayRy8KWQ9TzwijCrD7RuBAdTi5kjGf7o1jAjJFCaCXzxms7uAYbcvB1",
  "key42": "2E7iRm3E1VLtbsXFpjb6ShcSZmJey22F3PQaXoHNwxDQy9J4WFQMY5dEHbGbUbAernLDp6y19hLDHpkV8BKShCCT",
  "key43": "5ZCBX4LWjq7pfFUpjmK6NuSV93ksjHXsRR2UmtHgYt867xqgLAbmFDcqYgfFWnpGkyEjwB8PJey4Gw1XAv94rDhq",
  "key44": "eNk2qzLs2qmrp7kujQGVH8iH2ctM1txyyqVsNyTWu3nLaPNDyoPMFMgAdbrViD1Eexv6hz6pfShxHARbJKeEXdF",
  "key45": "MaVRM5nBSzr1qxcQtU6Q2XPcSHDaLUjFnjcoHh3kb2DEPiEYcbGbsmNsSjkP51oofWxxfL6Hmqt1tqMWuNC3FfW"
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
