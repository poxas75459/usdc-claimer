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
    "4nzozjT62pgvnDheZsR9Axwg6xbsz8njpBjZBQmzSh7MZJFSEWUgiPGUFRkfPSfLQYs44dLBoyGK1fZX3om1Br6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cx24MdYjNeLnXqJGi3J5X4uXy7DAdVjwBJGkvkjr3H88EHQvdq6WD3NLaBnEwdUQa3A5qeztjV2MDLTDHSkUGWu",
  "key1": "X5nozdZLoo1X9GDt6wSfM6ZSveHjHZDB2S6ovcGK9niWmczEgJhawNuEQdsrLmcJ1ftTPQBTJgxKewfxUsV5Xkz",
  "key2": "5FEycmEfepa4otAe25zoQURU383jWg9jRsBwHemRfJke1eC5Z3JwUpU995SyujvbhqyPHuyzLSudWs5QnSTqqURm",
  "key3": "5Z1GDgHWsJPaD8j79xsKWK8e7boYDR6wgwcLUzhHY8SXDVYgHbus6RCUvhg7hShWULAAdP64m7Hs8x7AK2GnFrg5",
  "key4": "48FCp8vQ2y1DYn9ed8qLoDcKZ3fDoTnn2gmo1cPBHrj38oYwnHg7VmKC4XsmBmGcq183nWkRXuWwFHPidZ1cF69x",
  "key5": "42iBTNzSQSf6eqrQ1XUP2FZZG2sGogzXEdehm2YeU5aMB4vTpjBHKTPKuyRvoNzmpbgePRTkinQWMr7VEQLM4sAn",
  "key6": "2VraEqtHKmeRV7hcfsSrKkrFjdiDhFzDmgN4dpApjgT67B2ui9SnJ33Q8u4ZzotNbGZztaLxPSc4xf4Mm8iJkkQ",
  "key7": "CQeXFNqvPTWHPYQuwQQL2C36nApUQSMioXtAsvkzJTWsoZUEifn4todTGataKZQTLS75yBtAdb1VB1HxBBBFn1c",
  "key8": "2bf8UTJCSFeEo5JTSurihJuvotxyYmLQtywb9HDZfwbtxUhrzVyEd3Hme49Eswd6hoD44dvbkF1NTRKJMSbALVCA",
  "key9": "2yAGTG4fdJvB486zCRt5PqG8WYg5UQWKrwYEn8Q1UHgAwhj7NbVtcBPdgknB1UiS8TvX4rtBGuJxTbEYqDycQbeu",
  "key10": "5ft4tjKn5DH85tJHBFUu6HVzUWD9xDNroXgEVtoqrFM3GCsA2r2vF28h49pbTU3iDhJQXYibHaxfVz8DFU8gP857",
  "key11": "P3VHg7L7qYbQRzk9uHGLr8Q8iN6WNWPfu5vnx4wesuuigwn6nVJ7NZa6FjBu5kd6Uv9YND8YT1jL7qKDZi7mB8o",
  "key12": "2e4gdfKvxmdePZNMv9NSvJ6Ryskeu4qnK51LaK28JAt5M67YHph9qEUsff6exLAWuvsQMebxbyj9WQ3Nijn4wLzZ",
  "key13": "32Ydx3xJ1DZH2RdjpAF9X88YLJ1QgAGmbVMsCbfTtVsGzUH6maT78b56eaRijWq5S9q3q4NnYmzsDRzJDQbHF6UN",
  "key14": "2fWEX7jPTKd1LjJ6c11PMnwZ86hMu6MZCty9khKno524DEgCC4Dsj4cxGFf1B8jLLaLtUSswbrzeoRz8VEYXzxZH",
  "key15": "5pRKbRhMPa9AoTH12WH8p4e5qTCPKz31nj5XJ5ae22E17MHQzjVEd2hYai6Eb4QQvbaaa8NMjFfCBRPm2AvHfM5c",
  "key16": "2PWJmDkyZWRH24m6h6PpSkwWTcVzxAvxovbRDxKJzSyzjbA6kqK2Z5PJLjW7HbXi3MMaLxyjCCG4cCUWTABKKt5V",
  "key17": "32YNz63g9aPQLBPPAmUsPKSyRnE1NcYsSB9uhouc5gDDySkpgQB4Y2xhbkgE7PvMhMKZY3t8EwDVwNnWFtDJbpB2",
  "key18": "6QX99J6gH3vxbmFEHNZvAsoUpmFBfUsNB8yYobuFTD3ydaCPN5ca1tRfWzAdPaaHUTtPYUHitPtDmncEtYgujGd",
  "key19": "5y963VzAhAbyduB4ZCSkFGQ12CzHXLiRpSB5S9Wp5d4QLtFtNLVzgEeajuiinrYpANefVr1hSMB1iF1TGnmfsUHD",
  "key20": "xMH3UUSM1Q7wv6Cm7g2wMnNBhe8UJJ3UQM4kcYwpv1weS4WpoELJq1qwLGad71VXvhaVkk5CYxw8fQvDGujkLvw",
  "key21": "2NWYSjJ9RKms15MmPGSh59DLhbaN3whkbD972eMKDPmpmVhma5R7QUrZtsZC31RRBUet8vPrNCNyfgkbEi44wkd4",
  "key22": "5keufxzh4sYPt2V936ocjQaxiWdHBCTAwAZjv5ioMXeZ3fwaVrx6pJXZNookePgrTUqKzszSisBGhgWLraHEqHKx",
  "key23": "2vPUwZSe7H6vnXZPHJRfP8VhaNxUUoSwQDsBdzo4syZfeuRVYbxeTNZ39HahDQMsmAXjbHevHFq7ZCjiraj6Lyi4",
  "key24": "5go2FHzWfk1xDSXZvzELfvbgxYoEyJcw7iktU3DBTn8nWp54oJSVsRJiT65Uu7dxfoMvgdnKPFKJSzDeYKC3ySFX",
  "key25": "qtQmaZL28YXw5zC1vFbgmDzDkJW3i44fswbtpRbdwShX1pLLimXjhzrVzx4B7o96JnMXbfGbg1fPVuiMhRWEbaY",
  "key26": "2BQcu5HP5PrjRCfvHeZXek4zMgaseMUJY4NfV2RRaWaV2BYeSsBArEVu761DrLKen22em7Cbmsos6iRJKpBWexPu",
  "key27": "xBkYtMvTFXNQjRjFG4ZHeSb1LmRUx523vz64f8mspX23DFibRhTgcMZex3stYSMHxcpo9knpJNLyhf47TZ154wZ",
  "key28": "2Ug1Z7v1rJiVTTDJ2fJfyVFjhDPFSmkoCjr6fTdgWAYZyzWfqCE83SvjPckowoUyS6BeAUNM6LqgxkPr3S1VtyhD",
  "key29": "4NXQhs8aRbhwFonPJeZAb1q1UZRmZ9iSgBwVWsv1WZzExZ9zoVcXtZGC5EHsQQbo4RKzXgLLku9TtPxEZdpmdrUu",
  "key30": "3QnWAMdW1VcE4tBnW1cBGHHgMxtZo1dGsaW3YNKp6Fvu3dcSdkNqJ996m8CvYjVVZhZmR1NSCaDfsKbiJt45awVa",
  "key31": "28ogc8qFRJ35gNj5mWwksv4FfopQp45d2xSniSUcAo7Q54rrC79BTE18Q2VsnZScS9UuuptZBCKFARxubmhVT68B",
  "key32": "2A3SkopphfzAw8jPw2YwzK4Zt46mAfKjiNv4gCLYbTiyJvmkhFGJQRAsSC1hXDnc4Av5L14t7uxEXYjNae6QWk1E",
  "key33": "4pKUi82gY7ybzq6FA6uwCxoySR6bgqbD46yeWUU1x8sb5F17u95JPJcCFjo2v6bHvzTHexPSuhRDfh2rFTpnAiPT",
  "key34": "5MjGZUsSD3xvrwLDo5nMDSYPupYYqoJSdamcoU4uabXE4e6YZwUG3GMRNXcPcTxXEHihA58ngDeu8Jkymp6LX8Ue"
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
