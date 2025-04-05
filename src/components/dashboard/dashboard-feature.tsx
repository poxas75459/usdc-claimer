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
    "4LeA7H4rqNXekLAV55K1spLCWhzZaUuieiuqyJH7seNdFajcuvNBVtc8VVyPtVChkkRbGqQ8EqZeQxKw3xfiTErm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AfriF9UCnkdjpQpfxisjLT6UKbBidQjFtLsr4FgYuG8tXnxxUh6NRhQCu449wL6Hif7wVbK3tbDGsPF9SK5HRCs",
  "key1": "5SttoiGfPpGEP6PksHy6fRmtZnsQKwcoJAzb2yuxXAUTc8CQNrthxvvouES93P6daoggcxZhSqq2XpTZgws4yqnr",
  "key2": "4AMQryesGD2SCJiv6dobwJBAq62RV6aGCgCfPBAm2wYtuUnNGnGPX83EYuFNJdn7ZYVtqUbP1Nzxx9Gxrsb8bsk7",
  "key3": "2ehMYdnKKNkycC1mwNZWsriSSAuuvKZBnonBzNLPkHuvt3hMv1ow8RpgT5mskEop9TtUvB8dLeZkLMktS3oZA6G",
  "key4": "5KrSCgTmEGz3A6LJyt2kTEKtg7r5D85BA4gEPJkuGtE6Jq88zA4hBvi32TfBGFj9dBh9P7h4fCWViKzkKB51ePym",
  "key5": "5tjCAWfJGAPZMVqgdq5Xg3FoihXHRLaah5m8Ar6Zkuiib5qh5J8n9qBMePXnPkX6qwXmS2jQfBL7NMhXMACPyvV2",
  "key6": "2RfCEHTV7Wi8PZvWD9PtmJVPx5mVYqCx94FRXQocPq5TNqBawu32sL83zMfLtgSfTg9ApZ3nNsR9BCM5urbVp5xW",
  "key7": "4TBC5dyyKJV5JAi286xCwHa5MyY5X1d2eZvr7DWSTq4Hr7L8sMEeuJ64ZdXfNZSPpV7hxV2ux1JMGMaY4eZg24Dz",
  "key8": "54igyAo2Yq4Rg1CUC9upvQtVurBSzDvi68RXynUsTYbeahBiz3DdmnUsR4Xdxd3QKuHByyQffx5o5kVBb1RHGCb4",
  "key9": "MytLuX5CKDRdFekk5AYrQyFfV84dDhNwSMQ1s1RYWoDN4NmTUqjvbJVy8svjL1rSaL52UqA9fad5DecJoTuuXdg",
  "key10": "3QsZDXaWGUNYXa2chRoqSckfGtGyyYWa3nkpUG9RwAAi78YpL1ZRtqfJejzM8dreJiHUnoGmJpyfV9tTS3mxascX",
  "key11": "3hKPt2eiSLRrUaQ6JksZHkEKHR2LQrx1FR8uE8TdQCr9yLrX18nKEHNVfCLyyyKxkwU8dmu5Y8CPD7f3rTuWrimV",
  "key12": "4Y3MFMWyKgSUDiLmnjHWhB99qELKuSeqSMon5itdDTRxGGaR5WCJRUuPWtJ3ZZw8i3AKCGME6urDQs9x8bUtNWq2",
  "key13": "5tKEpA6JBPWNxFaJta2Sn9fhzonTKaXTGavGn6tgmDLAHnT7HGVpKuMP4kiYfQR6qGV6ECbwR2ScxANnhZk22CwQ",
  "key14": "5EyzFXeiWtGn3xKFvGc1YT2e5EGTkUBztGvRCpVgrrJdBTabrDVkXo9C2k3tspeyhQbtQo3VCsJBFUKU4bGf2q5R",
  "key15": "4Wv7WC2Rf1vfZ7Mv4WdzT3pLNctno7T1iY9kg3HJRk4b24Noik3NR49vzsbhytNGTx5KaqVvgs4EMNoLpQPPMbPP",
  "key16": "CnF7siJavrgrhi1cg6bdc8rzg7DoT2NixXhQs62Pmnqqny14Xmy9HkAd7yXnjDcPa1zmHxXQPdaYB5MyEd2b4nm",
  "key17": "YB8N9sb4fHXm6HsogwMjMRYxhB4CUcs5oTZMqRPiX4qn3Jj8GS3q57zLdAFwPzHGj7Vfa9EvRKQbYHRQiggar4X",
  "key18": "4AGiMY7dsQYcZFPxapdCYiz54zhLvjup7s7pZ3E8NfazRFXQuhRTKzijWN99MumyGCLkA9oU22DNSZdpvRY6C8as",
  "key19": "4zs6guWj1cL8dukCze9YY4jPuMt22p8NVyfm4yzt1HH1TyJfM2HcPvWFSxjysuDs92FwCuNjgmPpajyjNzuBAPsX",
  "key20": "65ASjtT4ydpY99v3G2CCkSZux11gmFh9Ukt4cDohuj7rhtJmKZSPUeHF73mjGjf8fzrKLFRa6XHu6nMnEnF2hcMY",
  "key21": "4BY4ibnARYpXDsxtSBMWdhr9ZmSUQhqBssE5LVVyp2rVabeTsR21geiqZUHgsbMHkz11GmLGZ68G3ni25eimXa67",
  "key22": "231T6YukqD4yuH6wo1LVkW4bgtoRdJRUXCPn5D7R79KbMWquEjc7zxAYnnnXq7EAGqmVqGivbv1oXnd8wq4cFcXZ",
  "key23": "59msERedPUDniXCZ6BNFQ7naS4N811mqHTFN25CJUNCkBLH9cPeg4W9tNKHkuQmcbo1o2YzkyGhGYVCCkCzeiJD6",
  "key24": "2SeEUZa4DNc1Xxr1sNr3Kft6sSUzfELaeXvechyxdCRAbpbEhEMxRpJUxKkc9gxjUsNLwJ9tVZ98nuAk6Twpvij6",
  "key25": "e2Uii6GtgoydRRBbD78oSf9yqGx4gprtudWUgaRQCHQ3jGDaby7AcJkCMxjK8JctWz7bdXswQut5Q1nyjX79AJ6",
  "key26": "2sEuwFfaT4Ph5ZXeH6hzndr5PALS72uimj6mbxeSFH5p8EaHKLD3dyJXw7atggXP6Y5DydxmWm8Hq77jZwfPngmz",
  "key27": "29Hr3JkW1JeRXNYf8LsRMsojUj1UTXf7fHm445mYpBNBCFfGqV1v3eMefasCsG7MJpS4KWLDJ92QDoWK6DY3jpTq",
  "key28": "5F1eoDSyPVKbUYn9fHmsarFRk8j2ByZBywB5pep6PVkPq5ncPhxiis66kkrqLE7jjULP9DQrDCsti7CgYdTbf6Si",
  "key29": "3pj7DGvDXcY9mYXbHsncEAtVtqZzTbNhaUKNWnM37hKguQjhpt4UVzauQ243619HzVThhDPN6eDvQqmbAM4owq4a",
  "key30": "3baBh7pi4EM2KLAw3MiAScTL5zHdLhVXcqoTJ4RGex4r1vsHthDMcF4rP46TgcojR4jg1UMo9i9VbnVjkZQeVbLw",
  "key31": "yVd66jQaJVbCHeQJsvKpBnMxfzX8iTtGbvdAngQkx3Q6GnXhndosVkcvCs3BW6CNJgzb4kqExpX4dyfnoRwKx2y",
  "key32": "2HHkimhoNtUcTT4YpSFv2AQxHr5dz33J1kMRxQMX5y8uY6kcCGHvcSQeQxaRJG9EDD3pcM1ckCLXChks7YvrTnFz",
  "key33": "5GYCcJaLwzvAVBSjYnQhfDLmt1wWGgutX4SJaiHLcW8Pf7SsJV4BWTMKcTJpqScEo7mUt59JMypRYg6xr4fUTmwu",
  "key34": "4WHuY4t6vXVmdL6ATvuHUAtYRvvhEt6qsCqFZWJRvfDqrZqz7sEL1GuSDoBKndCsfQQsXqLu16hvMN6Q3MguN8H1",
  "key35": "DG7LSYYjWuXHsZdkFYALd5doiNJhycJyZ1H9LPpModUa2Gyo4C1uHE6BSa7KjH1dBZxvwHmnfQqRzZe9BUAkWJb",
  "key36": "DhyzxY81ReR9Dqa4vm9R7uPWPhfep6kEPNwMsq43uQY5AxvDQ5Q4vCZA3o3dH1pt5XK3sKj87YGCzGjkZdMXEk9",
  "key37": "3tN5ZF6hitcRBVzWkMmjPM3gRecdPoP5oboYcDrK84ikYBCShiMTXYsgCk8ScKPMEe8SL6e9tgQmkzqXSNDfiaMD"
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
