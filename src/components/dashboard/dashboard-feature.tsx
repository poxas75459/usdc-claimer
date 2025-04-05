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
    "2yYDRoNLSD4tMMMNBQ2JGEJM3q4rCe4KFbTHkkdd6ehE9np3i4pQzpyLUZY82DGs77WQ1oQr3DYyNTM1kU27DXLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iaSw9KrMnfRa658r7aWqYbEWf7iL7dG9pyBAoxfGunusLLoU5NbMUw4PahigSvwWL8RTbpHB1MairYAqB7wq4ng",
  "key1": "4pMEAdZ4yibxsSC2t7nVXEDKHLqVq327BQo17bwDuVPBYJryXjg3pDcWoT7xXByJ5PT4z8TVVMuvsm5Zoar7jVrt",
  "key2": "41HJs9bpMGGgbkXDqNEki8oghxUxxBmpjAUvdzWSdJtgrdP1H911ccNyZSrfdx7xgHpL5FaVQxkxv9oW2zLCSuGL",
  "key3": "UEpbUYfW4hwAee33qZ9MbCLyFS8SG7WKmgwXixUtXaYxdMNQFQ3fgrTagRennxpmLbcbaEb8St27caDUoFn83Pr",
  "key4": "54W5BL48LfYKs9izwmwpGURSuhhM7SKpmfkZnirRBPWpVLcnMh4ZWykmGEqKz5ToLpfKjFh5ctstt6jVsdQSztGP",
  "key5": "54WUjgQViuxj5X4byk3zhe51h25291EdRCHbUAhA66cTRVVN2ZwZ1Z9MUpLhp8kDqF7hT2gUi9ofdDdfo1Tjk2Er",
  "key6": "SxmCAGapkjNWKusHi8AnBcKXjgsKcYCPkgJfDfzFZkXUwpPFyo3V44z2QB16ekWuth4tB4cqegX1EnSi9hwCF9U",
  "key7": "4mXA6xoGnpJBJcwiQh1NkUqQi8mHMiD6jrhdqxKu2v7g9mGpm9Ls96HW85Gzp3UdQvvGXousu2RP3v8P43WkWEtm",
  "key8": "5rqGd6hA3qVWxWS3MKcWHrrSkJmuqQxQhsBrxDGPtwvMEUoEG7bqQEw4BafN3PabTrpZ1EskQyTjc9yDRA2uLwVj",
  "key9": "4fuhqFPzubS7XBp712qvmrpaWT9vbn5Qmf1CC4Ffe4vHRKMJSPV6oiKrt6HEiZQoAt978zM8AL5TNz5CVwN2mnHF",
  "key10": "4smRSHfn6kGhbdHB2BwqTV3oyxoqDp7UhMxaSmjgVaLAPnuACod6g4WCumDBAQUNdJqifUcZwAqgKdivNTUxdzr9",
  "key11": "5Vjkx1MP2vasvg9f3ngMTijErNQwRZtdNZQSexBzcapz1fr6buG2Axepio6Aytq6P5EvEEeAScbxKLWUwhJX2PJh",
  "key12": "4sFgA1pcJjPeAa964tndsjJCvVYNDkoQ5YXVQMm6CvBkfeChdyarbaUKTnzps8vX63wAKXt8yu36LNako25wg7Sb",
  "key13": "24yp4prNJeKLiTk8jncCmsBFSn8ZtLehk9tj4SwQ7NBDgvUsxRmN7qCPCwjbb5rF8MrWPWXd9XBomNtq2kTniauD",
  "key14": "4emMC4CmsL1mACNBVXyB1wjm4qQhDFAXCwzEGuYjwewFqvmHxB3kGBZNvVAndr6ecxT5VoaramDujHTeWZ4BG8J3",
  "key15": "2gFNgzFRgSTQZjERngzbgjLZdrvCSLWPATKeUEiEduKvBVrK8Qs2ZdM7D6uXBHh8bQESGXkfQMQhzUhYvJQmi4wS",
  "key16": "4dpuKCt7gEetwMtWMzKWQBpgjXtU3gj5MK8nCdADGmQRNvAiE4SNVTUuB7WhTtUH4PpFZDr34G7fBRx2hLbrpuFd",
  "key17": "5GaZ1HxY1KL1cg6k6NJ6E7b4bgb1Joivh4g2fq9UcNDWg9LFYjJNRvAFnnEnYRmD8tXDQhYYNr1YLoicwBh9dPQQ",
  "key18": "2w1B1rwuCJd8sfL5ko5s7FUA52GZKnXdEsYZTHV2TifwpchugAguTrtP4vcj6G76YcM39LAiQWFS1J3WT4HTuGfe",
  "key19": "2V9pBpEYfW6x89gsFu8eT8kfGqc3w1nXAMFep6NYRqz1Kt3BpbtzquEQEJTRpY2v3cDBbGxccK2yiy5S7nmpkHaL",
  "key20": "5FhfqdtdNmtyNcdmtwefvLKYjWtw78X2uYv3J7J9EhNAPpn8BNyzhnWkook39Kz5QGN6Qj7hTVZixzy2kLaJ5vi4",
  "key21": "5KGGvoKSo6RqXcZsJAH3JZe38vjgc9nPiaqyU38C7faa8yubDmbxLEkHcG79SCTG8gPfuEmvgGEX1cgThXSNvfwD",
  "key22": "3Fz4Yds56koFq9xo3JmRU6hbVVLAK1YYt65sE49dbeoQNrhQL4fR3KV2TAmUAtdSNoiCh8tKYXVYkmhDkgd3kgsA",
  "key23": "625ruPmR8TBbfmbgnt1VJoDKttydJvsUHJzPxqftviS4FetNAjaJZSB3FuJ7PY8MbzdN2ATYzWHvrA58ewmfwTwJ",
  "key24": "5gLs7gJKpzUFK2oF6W1qCijcKxdNRmrZjyiueztZGhanSKxyvbRmB1pSurB4VsnzgFHicTh6a4dVAcrpWQ9dP6A1",
  "key25": "4ZLd5mf8YZdt6njDDsb7DuNNc2nTdZ67A7kzwCvtSTBexzestBkPNXVzx4hRrHqpHSAqR5aVnzutdFPq88R8mbNE",
  "key26": "5ro4998u1g3JBqRww2dXjAR8P3yVM1HyVNP59anPrdaV6xjVfuCvS6YoRG7V36yfpPjBXrynRoyUtuovDPTwsNMM",
  "key27": "5Hp8vc8UUoXQDMQ7zofsBqRw7pCeEisvggMc9m9GWzBh6GJ8q5oynv142L11PSZxoJXWNjS6umB9ViQVHFMTiHhq",
  "key28": "3HfnFaEcvYPqkPy4tdSscYU38CTiqKHFr4sp8QLTgXDJKuELTXUeULpn6HBN67e5jh9nVL7dhYDoQ9CiEfj4keEV",
  "key29": "33jTfQMrBxENHunUeTADNsh9JXNMehCUrpsgwYwTnnztNX42rpx1RJbKFAHNDCoGBjdyhwkW9dZK1UovvWjhvcUq",
  "key30": "4BNRF7M4XcSjKkBF6PGH23cQYAzN2dGKp6mNRkKJQBYFpq5bvMZj9bMEnFvosRuRmDC1BuPUcWKT9McdqNCbUgeo",
  "key31": "fSJ2QTz37Mo1SH7vX9Ve7FucLts9SEte7D7ak5afPLGRdARYG6bHVYcyS5wjjv2gDkqXz4PhE93j8b5xpQhLWiH",
  "key32": "2qxbBe33Nsa8kDrTMhPf4dNj3aVovA4ny6LsrG4taAHiP3Y71PZTgXxsoSHwVsfsV5GW2Gsbs1R1CmGW7xKV7GNj",
  "key33": "2TocFLveQS3LKZR8YZmvFZ62mR9dAWc3MahULxQ1utdBRgVfQRHArUgALJrcL1M4YLDgqRvCajTPJiPaU5jR4KqL",
  "key34": "4Axx1FMQkVJKfN4sovWEDqZH2Wd4PMZ9GnH9pvPhJK4gYmRwnRotqJGCgaL1sdvaPmDBkGBgTREHxstk1V6epK3p",
  "key35": "buABZqSeYRwJmZ7fsYRrE2s5NAebVwUJWBM7QQ932b5EK8fmMruGuBFAnRHfJHXtgfErVDVNC6EtZ2FxMPK9AeA",
  "key36": "ESp6BQhUwgqMaPmtrm3nRrMJrLHZ1aiNnFLejuojeHwdSYtdNpJ5vNHec5mescJoSR3G6uHXJCKrV1UFQxqVBxC",
  "key37": "2ywJHW5sFV63qJQVgjM3PKP1DqY5MMZHyMyo9oc72udQ9naXZo141DPeuWNkDLMVgGp4bG8P576NbJUJhX5Ejqvq",
  "key38": "2TQ85E24mDVQHWmi28GoE8FpyZ7mWZRgQPc7VitqeMEty72L51T7AzDt34j9EhnwTMKcCK9ytDjesxN51kGVTVi1",
  "key39": "3hELrguRi7CSy3nsek5AgnWCBSMFXay433LCxYSRQorP4LiGMyEkyZV1EmprqCGdUjuDouphHd1jDFo45WneB5WV",
  "key40": "osBdpZPZLQyoyfY6h8me5QuqoudH77MTkL8dikssDy9KyKjuaUBkw1c9kkzwr11MqAeeNbZezWiWL7iEycYAoCK",
  "key41": "9zhXxfsC3GqFqxAoDqnzWAq8gPv9GKvLV2mWezsZwVie9fSRiyv7sNDYg1ivDH5EFvfFFtp6QufaPk2eBeahfSh",
  "key42": "5XLPKH56wcSjvhm9GNk9okmr843g7soYQvxG5UGdfVcpchXwE4mVwaLzfZJVWuBzi6mv9tfyXpodvGvJxuK9EABQ",
  "key43": "2AyL2Tqkpyduh91DLfyPrY3rnjryFwVBYFsawxdQhkA17PYcoAeogCweZEfB7TVSKXCdKF2jf4nmBcFTNgoLDCTa"
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
