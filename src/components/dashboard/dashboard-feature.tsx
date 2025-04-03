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
    "fUcKEgeFLcgs7Sszo8kaDwChQ3AKVTPDbX9h3k7EkaZxaNaWPHXi6VLzazxHYfJdhUGzdrgSxj3i2hzNLn8X3VR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GgfaPB1wkNUZ8M8qDXvRMho8PwiNKKDAWLubhb2uee1BE9oFGL9rFtL2ya2DCCobzBii2yJiKFrr6gPHXzzU9eJ",
  "key1": "2WDPRC6ceNFCaup5gP4mBXGa8vuMQT6rPNxYUnqzAGRhmaUkWfziExYpDM8KNPe6JfSTE445VkviX8AAB6qj1XcQ",
  "key2": "4EAcBjJurkQsefytP6fvBYGDYSNMqgWcekwBmF78nULsSFMgkZcXKF4vb213iWRovejXxgG6KfenCkS7c67c2e6m",
  "key3": "5ifu95M4H8ZTDrQZgJohT9c858m1F5prGUqDRkEfqFK2d2YZrdzTcCHKCwGqnMD5iPczGb5hySzoj4to6PC7Eo2X",
  "key4": "2xmvXdo7FdrRwswGZPtRpSN41LwY98rGvvZRXeqDokT7QmmY9BYNwiHnTPyn9SAX8LFF4r2Wdxo2KNh7C5faKrE4",
  "key5": "3DxLBSLhAnwHCav9Z7zP3cxAayoYkhrMxNATB2JttKkXKZpCkTLCB4zmnqxCFvE9EzsXHrT7TdvCJu6eHf1AhPQz",
  "key6": "4h9GLUTRQmu1n6S4hN7SLzeZZ4CfLTat6uJrdnTKoTQ63ubXs67sGMWV5MCha8Cdc4YzexsTMaNxxfrKSJwzuPFM",
  "key7": "4k2ShEeb1Wa6granZGgkcPkwmSyqRMX1TwToxeUtxsjQqA4QvT6t7kxvBDQp7erNSqT57AHYQkMoLPzgFhY18hMA",
  "key8": "4N1Vg9X2S7Zndyh8vNDW8v58s7PzyiwCnQFRyVGaG3sweuhLK47fBJ17Dmw3NY728RANa32LDxc6xUbBHKMYvfsJ",
  "key9": "39EZLfJ75pbcZXXHkUnw79dFsVzPkxDw68XXd4TaxecEmNuvDxVnpcQ17dqBSQMukpCHURQcj5UMRmG6fuafkucm",
  "key10": "88szek5WdispLbrJDqA7gqGCZqZD1HnB5QmU1xFf1pPNRcf6Vszvg5YXMuQ1ZXwEDj4j5DbdkhriWpztyRfw31a",
  "key11": "5DwxgbayXw3LxvMYxLCc6e9s3BLsX5zXncpZ2bNZ4eJRYUgFS54bn4au9GtYwH1z6gDE8W2A4d7nAVoVJx9d8iMj",
  "key12": "bRHCbN3GknvDhtVQPGoy9eXuvbHBsRvQDw6VvFMBtaEBvvHCo6r8MVe4fgA4cMfvJ8BcNkuL5oAebz9zT9NSSLC",
  "key13": "24A2Zr3LdjwKQSB5YYQsH1T7YD5BMWabowbQwPRMmHmyBEPaH1pvo4DTufw9JvckNC6vpRFLg4KSKw1x2hK6wVBW",
  "key14": "623UjEwrhnGupghFdiPQgX81cFPd222tcvXza9DbsMZqB4wRiLw5TvcnQcuhtnvkL12pH8NcQE1iMyiDNHUK2fCt",
  "key15": "2aVFTrrsRD1yLGgqbDSzv4XrzSuvhwFFXv7uRsc2GwTCqgfJV9D5Dgwtk2omUWKgnyAqx9uxqnJ3Gr2BbhV1R5t2",
  "key16": "3k8nxtGZLQAzr67mXPo1pfC1YpEiW9xWe23LZG2EqKwrkNbezQA842VCbdQFHHs1BtsPMSaePabUnf5wFRsGy8j3",
  "key17": "4UZSEkqYkLazjjA4RfPatuxP8oencxQ9FJrw2RbHNbrtdvtqd5rrQvv29sAYdY3WXMtHHJ3rYF9BrQXdgyvrfghs",
  "key18": "3ZgWJhgyjnYd9bLgkY7svDJ8Kv2yVyPYUK1uCpFGpSMbuXDjkmNV4ycs2dAxTyPSgBZoe9cKLbXJjwhC2kksZoZN",
  "key19": "nEdnoo3fDD42gSz8knkiBZNDbUe8MctnVV6XDQiR269NSfvinAQajVSA6VDuQR4Dx7hybEoi89WBdyFfdJi4Tvw",
  "key20": "2njfo3KkyXhUTYFCmHBnLKejbc9vpCkQQUbgTWKLdoTHYntSJDLKSxg8jvZ8h6ZYXLBSasCkvatNEQvtWfSwMfV9",
  "key21": "sBA82cjguFvzXrSi5dWEYmSQ1Dg2JAYyHZTQUe775SiVMRaT5CqiZYs4wR7FJMgC5nQvwAwJ4BpHQgrDxXQMnWz",
  "key22": "4B8QRzi99fierBWdnpHUFj8ftSqHJc8majbWrGuVCMDQJcSpGFrzTXzzMavkHEz4uCDow5YVzBFjuUrD3GEgXytv",
  "key23": "sqfHS3dKc6GG9C2sGK1N6TmLFbyuGcQzzxcAdc28ib67AXzzjPz4pEPJzXL4LPonGFNhHC1UGQkCGu6Vrao6A19",
  "key24": "2TfCvNJZkx8HHC7PpxcxXu6MJzGErCfXFpvLh2PC8emEkKaiqkqwhKnYdJEtCjkYYqfCEMpL3anTBF4rpjUt2Css",
  "key25": "5C4Pb8jLBmDWDxUzv5r5VRjSapTZ2B6wQiLH5EL5g5N173a7g5Q6RhZBpmHSbfT4uM2hje9pvJbxAE13YQPgDzfo",
  "key26": "xYD6bTW9hTxGf3jE1kG4VR8MjyXgmDZuURFCkPmQU6ZN5PgAwD8SBocm2RhrxKxBop1nLaQ2JZKTGacy36RKKk6",
  "key27": "4U1ynuxCnzguVst3TTQWFNsgosEzpBY5UnpWF4X8bhqdPRrcgm84cFJ7z3HYeM9cPjXRCY83foBBj83dv48Ky1eZ",
  "key28": "zHFp5m6eH9av1Vt47FKm5rUAuJd1hiGeqjYpRcJGb668rrg7ZQhAzxX2icdVfG2fucmaizL6LrzmcP536QY28SL",
  "key29": "66TYD2QxvsKb9gZbnnKZJubALViRuDaUvk71c1EEkM16HuesNjqUBLTggUg7hdEBanRrUpoPEvaz4a8saae5bjoj",
  "key30": "au85RWUJbi5SfBY9WJnvWpnXZgXGpaGuc5i8mPARyaSC2KCv39HfauDgtdVCLgdyDtiGSPXCXhpAXgxrY1aBW2H",
  "key31": "MSC3sn5igTxtwLLayQw3fpeBmTASyc9G6E3rCe3aYeNSnWUeWZEzihaTRCk4dHcpCgHLjtJLskvxcNcZcM5p4gG",
  "key32": "3CpLycKkUQTut8kb1v6xRKCwYoQaPSpW8X2YwS9KVRDdTeY4y6BEKEPeQbpjhVeErQ3BKFkiLGx2VCKYTfg1UWxx",
  "key33": "5SSVF2CMDiLyVhXwyHdwg3wjmJ6TtQPb8mVbb3fxn2QD83vMmMPtQWfrMLqTQK44PYojfaJL8fRS6jhLKxgGf6pd"
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
