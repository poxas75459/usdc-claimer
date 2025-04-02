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
    "4Vz6Pt9hNVSjUo7GLK6ygozfHw4pxHddDr9TunrF6tALrpmSabRmQ9UfjQEAfZBBf6dPDT4KtyN3iiJX2qcKinMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRDDmrsdtL2BcPVhergNjaiLPmg1sKURhNnEZnkdW8K1wtYrq59vW9KqjYTcRo82dq4S7SRrEhWoJmDvpYtPsGN",
  "key1": "3GQD7FhPgCTAry6JENUyeYBQQzB1jB3C4Fnf3t3Qstc5Mn3kBhvKUFieysT5sydmnednBFEg3vnFXy6nBXuwwiz3",
  "key2": "MyiZN1NQiJ9MdC3KW1FNHc2Ex3YgqgcocdoFetLBs5dBxbT9m2KcqbsfcEAtGbAEmDBGZM9Px84nRjFBb3GPx5t",
  "key3": "2z5nFf4dJ2ZMuCuekWuJiemAmcm44nQrm8jSj6jjKSengh18vTp8cY1L7oP1vC9YgQENky9J4HfoZEViKXDFh7kT",
  "key4": "54vqYGTAtRoLhVyMygrmETAyTSZLoZC8LK2Qkvs568Xy2j2tZyBkR6oVr5wMaRMtLNvznWE9o5SLKBFGxg41ZB9G",
  "key5": "3ZLZqG1YKT7jMAMhm3dyqvm4bMnbBa7Gs8DNbEYPQ6sYtsLpksaKaeh47sdrNzDCqH49rxZF3bDEgqsQSY2QuzTC",
  "key6": "5jRcULgH35Z7yvzkm3vBhGP14Uet7VrzeigpB9CBHV4mk3dkhAXLs1QNs7yFbSzhDGZMjaj5MtN1jQLXLVSQGfcj",
  "key7": "L3kcHZhaV23ThGnPD2bwPG2gjmSJXCuSRkZ44KidFD7uyPPcibjpBgp6FzfidcwUJgSFnxERNVA1M9U3PRYzkzJ",
  "key8": "3qiKSeChUPKUAFGfs8jxzwHw8QuX6A8eoFiQC76uC1exrXjerHpDgtMxDebHFsoy1r7DB1QhoX9iUNjEDj3a3rzS",
  "key9": "39fM6GDo6Cyccx8g1Gpk7uMVR8xUcfcRN4KkTuJkDpNpCKuBjRb89MwLB2JELrQaSfdgPK8M9XuxEckvf69kDqsv",
  "key10": "41xcaavi8fE1X84KeCWkieKLY1L8RF8icTBLcnqE713wJqa4KY3NXUGXYBCR77br9cPaLp6ttpMhiiuYYyrDGPm2",
  "key11": "48rVHgnK1wcfxo9kAMkEYa7aq7KUyyrS1j1Dd3N2sYEL4f5xB7p6LepsEQqXKqbpkpLgwSUfBvopnB7Aj2qqGkD2",
  "key12": "43EZUEcTDAgHWkd7igtpVf3S8p3wMDrnTfdCzRQo7uFNM6vogCdtoAVrv3uxeiFnwRrCQedZLeD78yxMBwEBPt8q",
  "key13": "7LSPKxWWNiTBUpc3apWPdo9aYs1eEPq64wCPQSj9hb6TR3W2kqgyAgYt3LuRm7jyqD7MH14rH5cNWJk8i1jMVSu",
  "key14": "v1JTeUzPPy41PcQQQpcThixSMg29bbFrZdxLHZLiGYafFD8eMz4tKjYsaNNBjUfoZ6sgRKQ28KgGgiHfLxGEEp8",
  "key15": "4m4kXz19aKNTrFiaKoYZnLEqP6fT5t6mSWnL2RoWYXTNJ6qKMo7RBEKdbPRA78vwcScgmgUPnVMaFknLpsFqzjW2",
  "key16": "3ahHeB2MBUkwgVeoeq8Z9UEYoJJCSz78uVzzL2Vxec5XCvku4HQAQk5dkxgykPtAWizZHhbecR8BpufKuWhd8PgS",
  "key17": "5pRtUsUzwZGS2ehcNJAnCuKzZiMoCwDKsZnrzUz3XV4SLHpLuytuR4oW93uUN4DCRv8ZscpLmzoYAJDKnUDjFZT2",
  "key18": "KQtbdyfJQp2GjxWr2UKFhSDEmCgUidvppAGerq3mnv3DqUKDHpMqzz3P1zmg3yyNRvdyFMZdeBYJv4B4XjNuiPY",
  "key19": "4VAfpHfDo2e5xbwk88FmHJ6qHENCY2NFuoDpQLEPiZLyg28qkaHety14y4X3ZKBsFyEvF4Efq9PjsgNwK1vUJNHH",
  "key20": "59xPf5kvxrse7uaqcwhW6uy57McfKeSZHjDxZ6RgYgFozo29tPpC8p1XBKrmARwHamijFe2TJoMhcHDtCy7QjNbi",
  "key21": "H2ns9pygsVJMGkZEj4oxrFqoepZe9NKxesAkcUXtvFnjBy45P25rYytcdzmLR3C2g7B73RCeiUwMqwU6Cj5pyhN",
  "key22": "37EphiuYgK8d35YZcUyoAKHoo739LVpnD46sZXej7GX1jA6rH3SHCsDc2ab7kh7Rvom6fbCAcVcSpGnKpwTf9B2T",
  "key23": "2s7fwkYPWr7MSiuZyRmepnQuHgSaS7CVB7zXPQkuxJqk4iiWxWy6TP544TS4jtExJPNnA89oUfBFgXuGQ6WgV8hk",
  "key24": "zzFzeWhccrs9FE7Ai6FYeQnDJ5Skpj3ypoBbuttDxe9kX6WE994c19RDuJeUpmM3eWs8yAmuBqnirEbw2wPG1PF",
  "key25": "4L6cbTMWMx7zTnrnSrC78ucCpT5uc5UTBPmJxezgCpEHpuJRc7M3wmvZwmyDwtd2b2QtUgRHreWoSgVKh1YxmZWa",
  "key26": "2r9TYto8Tp7o8hxriaM2wnQShdr1ccZggYjP3nEU5MzHwgAsgNdHSKQ6gyZxFtWt4QxqWGVdpTS6L5hdqrC4v4gh",
  "key27": "4v643d6kXTTAnFYvaL3rikqkcuV4inXFCeGbZoDdyactAsNUkgYn9QcQddE3eA1Pin4tYx4wxmReW6ZC7XSKMwGS",
  "key28": "Sfvazks8NGXHY6JcKDhXZZwsfC4c5iC3kFVrhtkS7Usj2it7PSNES3uoAAjMkF9QDopWu1usj3KDEHpno4vzhoC",
  "key29": "31eVLrmN97D3WAYNdWCa2791u9adBVoc17qyJbcrMAkV3g34hPa5Qq8C91tb189HUFvmHd4jmRQcBgyCexZzMKyR",
  "key30": "Nd9D1AeHHp8sfQqG2cBZg1F2JGRwivJbmU3opxyUcHenmarqYi8fkPLQHfXYYqbmL88CW9WsS1hiBrFguEZcBUX",
  "key31": "2VtvngSNu36qQUYFK8HBTwW6M7f1sWtWN3Teni1cEsSCe1eFZ6SxfBe8Xi9ZAmcxxNWMSbBp9zohwq3NZHvDpLMV",
  "key32": "2SiHcPP8J5EGVQdxPeTMi2Pbt2CQEv5LYmJ4tp1gXoXYNxcXKtJupKiUqQthEvppNVDZ6K8rRrsxDd2ESLtHr3e8",
  "key33": "3KbJvS7QrEqd4eRTJWh6qXcr7fbgA5KznvSeqgTnZZFzKsqhE5FdDBzMTo3rhUyuekuSdEyqgaJBwYetaCRcEfjp",
  "key34": "3Hp7L6LC1JpzSAsfsFbQMMRjaDxrvX1Y8ae7qY3YQv138stdEYoWhzuZfBSAv78gGQ33KfKzTLw4TB4kQFiFThjw",
  "key35": "4KeE88VqxfthQpQeVwnwSqp4ZG9RcHZNQS7R7mjWtUe43xbP4kE9pVffgXAT5yhidvCUTmNMPEMiemcHz8yPx7S2",
  "key36": "UUEKT4nAoDfJwSKVSkZcWSAdNUfiBMEkqEqMJSnjrohVpooxdbafLHpwQACoHrgfjxXWpZi9vvKwEe2QEGcfiN6",
  "key37": "3rmcS8eKdJ2DkGawt3E7A2GLUn33dK5VtASSn1femAG8nCFtAg8Yxhf3HAyWGQhBhAbGUeY7jbgBYUB41DC1hWyT",
  "key38": "4pKv8Djb4kNifEmQu3cVrG6EGwHCrrzYenDT4hKz6E6jXMnWqSnWJpA8M26GMZWn5VNFwauKUu9c819L1pRG6o9u",
  "key39": "3aHFQC4HnFBKWw2A7TS1eXN1wkkhV5NfqPXdbBzcFyiHxCCg48LhjvMRYRHxN5jBEYWGNouLfZ8idKeAzeRJHy1k"
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
