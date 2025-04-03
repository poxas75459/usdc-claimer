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
    "3fUTNJHxTnfRDQyV8zeUVAkpUc7t1k9TXG8BRqd7XuMezGbK7ZJJP37ni5iA26t2d43fFaaAdz74L5Kt8vi1EqHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tiEfrdZCrn78khzZQid8uZ7CY9Ug8kPdUWKTPDJ7511iAtz1SGePMrHGER8Gr537VzoPNtNhuDfTVrtcSKJH9kL",
  "key1": "2i8fbBZV4jVPzSNBz8PAdqiZf1MNr1xUq87GFnpntsFWEEb98knSVGQ9MXnWsiohLjYHX6wz4iR1g6QBoe3LWEtP",
  "key2": "rYL1cqiKAafdThewbHSnchWiPxJQ5vmCdphBGmbqvD9ztvTNxJCaCZEBUSHsWV2TzaAsHeA57s8ftFiqkBJRY2q",
  "key3": "3gsGzgG1srrtA2R1FiAENDLCnjyiWHr42FkmoRP2Q25DiFaS5yvuzqBhSeFFWb3yyJopNkksDcwE1m7QePN5vzQR",
  "key4": "3tcwhwFLEciDfAbiq7zpz5gWCrKKCJBEG4iu22q9gzqk1M2NGUZWASQB4SbQXDwWBszNMwtop4tyrox2um3N417j",
  "key5": "2BHVtgeoLXHsHST9E5R8bGyrXCSmgr4yFXSzNGm9uzNXorqHzeM1oaDWUJ9s9qGhuDKmge2xXKPJAfeZm1MG2Y4Y",
  "key6": "5hhLGaFNk5zwQRbviu76F3k1RHWjyVWrcFrP7c8pauAXFkEwrZLrXAPEThkKhkEriVhDu6CDoMfyBXrsdCpgafU3",
  "key7": "2n5zXzsWgYyaCn7cLR29YGqnBu2wLRuFYAe31txawHuXEcHgzE7vtrTE642JTPnzja9gTe3hPu1EFkdihNihv86V",
  "key8": "3ukwwP3ziJSBBma33CBLnSa9mhs9RwYTgKaXVvVhc3X4PsWJ67xH2h94VZPuEigeWqW1aPgKKB26umenNhkx7iRv",
  "key9": "jdm7jdfHCMC7M6kgmHUEau566j1qxV3JRDYyKYgGzqsRkqLJ1wW8TyzsFZQp9XgnPmhAUteRtXKWLRQshd5gLXo",
  "key10": "Kbvnr8k8JKibZtEjt1itD1TCDDKovdpSEnuTR82kvj9WNWb9wJFvQuxp5aLi7Ma2s2z6LmgSGp1hfCeWTTUcBLm",
  "key11": "5VgeVEy5JrJsRPnSw1MheRGmpqKqAMBeJuY4ttavugVCcvhRJN8KnamYXxVXACDfabHA1HLH9X1FrErFJYqSrdyH",
  "key12": "58K3SGuUry42a4jz5CsDfFwR8qaWRH684QBnG1VADNQmDEXzEjgYSYhdUaShTj3vncjG417fTeykag4LhxQcJZYt",
  "key13": "3tGM9zusEdRbqK7fZJcM7TnoTcZjYoBtqkbSxoQb2t56QGGdNnXes3WefPmnJQmxbsBZPsWFiwYzqogKNMotvCvq",
  "key14": "5LzArZqzJ6FurBCU1vVdcfqaaUKZtqSS4D1h3SPPpybNzLanGeobH52ugyRzpoJZHAK5CxVKbBxPp7hL7n634hzM",
  "key15": "CRpUWodMZeMudBYGbHpRKaewnMM2DGDnNx4ncwaMddvs56dQetc1yJ4rGu62CbYoD2oJXEFDZ4ribEugEMWgBL8",
  "key16": "3jNUM7MR8A8N7RfiHxna39uuwiVD6gYa8rnhxBYqHSYNdnchLwZtS9wcNCJzYkirQG66EbABmSEp7djvpx15AtGW",
  "key17": "4rqkXvSXi2anTzBWrPyzgfXMgmX8uMeAtoL3s9zuhFeNbDC1d67Sca9XnFUpXggSvxdPTaGnQqP4zMUAmuSMHzYU",
  "key18": "5J3tAzPtVCwiNjoap5dCsraegEPMUrbhBUX11VVRpiMrFEuLn2bENwSsA3DNKLe16PN5b57RhSqjdgzfq38JMEqS",
  "key19": "3qF9UpqxoqSEVn9XWohbRFW3R6wTZd46SFAPMpsVHvD6HTJ39ARvSKUdvKSPn11nTV18yRGFxDY7tHonyHQAZ1bJ",
  "key20": "5o6yoGzNmU9Xm4MoYEXKUvcFEBLX7dcMutBMHw9XiXDyh8Rpq1GxaJikCEj4jmpiESMhDEsUhMwdyoqkLm9JXdfm",
  "key21": "hqfrFAFUPTHLvcWu5z6cenCJzdkTkHJMXyhZXf98DDqGHQzxQDD94o43U8qVUo1bdksp73yKZcbbB2BmEoc1tcc",
  "key22": "gp4ZFbbEdJ4To44kviCLjQjdcva7e26B9r9CpntEYizQ2ew2gnYWqPcVw9EDEVeRZqn3cY79wdM4AbEzUhBuhqH",
  "key23": "3sqBebVR3aWrAL546DwU2C1JqgSGguXzCAuV27KZCwoSfYAWxxhVRSQbTzRu2pVH6ZDxLUSW6vUcLA4UFSbyMyr9",
  "key24": "51sU6oZqMpEMhViPDccby8qHvrLz2YCfNa2PdPEdcgUWTFNg6FZQ818hjksGXGVNZmucND5X4n9b25fqs7MsRN6j",
  "key25": "3kM5Am3Xv57BRjnXHgrJbvr6tHh68ZakKxqyzxE9hLjdKa3GfGQnS97ebH85GdTi5Y7tfWQMSPPn4zGehE8W5dkJ",
  "key26": "2YJu3vFBssQ1vs4mzhgYagmb8h8mpwJLr3mmYpxK9gVD5jnTNqwdCHs3DP8xPiZ5GmmbudxXbgKrT7ZhCvdQkxF9"
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
