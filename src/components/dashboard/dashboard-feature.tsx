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
    "5Lz8WmLviyAk2KNyJk9Cka8p3UupZoL4XA5Z2PJAfyfm4RWdw24hJYehyPzdtEZ2bUJyTSDtkb7NnJUEaqDFgWvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUt1jATB1ywFECowaHUPmjivHh1fBjQjL4XwmjVvFRhdzvFYrpG9HG4RP4yd6KrmQqDoB1aas3ym27HQVyXrYZv",
  "key1": "24nQEyZHv2QmH2jVZENDyAzsoWv17WAujjT4jbT8dsTsaahpCVDm131n9hDbd31vW96GmbPPVkZyCJjhxQjitvE8",
  "key2": "2SPFAYvvF6e6C4852TsBJL545KFawvoBrXEfnoyrxuf8BaZYeUvkDyZQKddpfRZMPd4qpXRXrUVjzd1z8sxWciUv",
  "key3": "53W6goAXkVwjm4sQET1P3ASwfgfp6rt1SkCQ3sWSqc7PKZMpz73u7PqMeKtKoGF2cKFCt9toquRWm8KkMsH9MWid",
  "key4": "3p7oqDg5GnLUCaaijUTHxcp3C43tuHspt37wRDnVjcULvEwZwKCYri5iWGH38heyvazAk6utpqcER9Fy2uTStBKM",
  "key5": "np65NTzKmS2bgFUCXXmRMuGu9meTt7oo18hqkyuhKjq5cGuuqGugAvih22cjcFmEUedqAVJALfeY4Sc51SZRYPo",
  "key6": "5prRKuP1pdRCSBf7JnSSdwUqvZwRoY6Ss6qs1toTcxCe6FKZE7CWfU4yBCgAxwAEmtrqrtwKKGKz9BAV6xPZXyna",
  "key7": "42PB5eLx8n6syX1joUSnzZpGjUzTcMnwQAnNcTGdRTwZbGrs6NGRYziFnXYvtUepvjgftv4dAtYt3bbe6pJyErwY",
  "key8": "5dBZMRt5WrdgB98XTZFX7iMeKkAPN2F99M1PGConKywpdVhzQHk4BmaBt26sGDVqjUE3RejeEP6LpvqBJRLGTu6v",
  "key9": "5aXWmnBeDwhpP29rwMBhA4hkPLi13bhbuaUKjTZ7LNEu3XhVoHNPkaGUUU4C3yjALvjeRdeYEXWNHMSbVY7aFhBu",
  "key10": "4KPfY59uSfQXHVFR3ta4P45CUENfBYsuPXkMuupAHbrAtLe9Md9GBRpUhTqZENzWvCtRRFzeoMjcBxe27WjQYv3v",
  "key11": "Y27gNkC7ob8y9PZ9E13ZPx9wKg4ywcPR3YyVJkrKrzWRq1WfCGujVhnYHEn6TFuPBeiiArUPkyZTBq9vTEz2UYU",
  "key12": "3fxespqp87san95PRwbCYs7fKp1UgYHNXsaCPKKejAvsTySK5Z2oyUvQyJ6gbGR7Mi4cm1yiN3dpRqvqgwPSfWiE",
  "key13": "3z9N76vtTw7uMF9op4FvkKCCBsSghdo6ziBCzzM9kLXW4a33FT7QFv6SFmTetpr1aHh5QJJvZXZ9LTVuuBp7eSeS",
  "key14": "4PXNuhhKiYatZySovcZae3Z7shtFzUj4q4QuE4M6A4NecGuT3oPx7gtp4P5QN5ZDVnzixJ1DQQu5y1ST6gxhVKSR",
  "key15": "5mbtWUwd4cAnc1bMRqMnHrJjbJkV2Ps3xDArgo5ZG695k8MwKcZVPtuGg7tbi7x6aXk75524SBGCf6GZ6MvF25nN",
  "key16": "65Q1XX281TWgF7nRfGnRJ2kWXoaS2W4swWEe5PgsCQauCso5pakxpnG1f8EwuBzHbkPn51X7XQ2zDTEECXGFYS4j",
  "key17": "2Soncq1tWyQGeeEjRctXv25HQ1z8osFexhn9ci8HBDt9tbzrHZ2fEv7Nt1QPpgmFGdFzrMHLmdPbjvZtu936RDt",
  "key18": "3eNt819KoUZNxBDuhdHCAfYM8TfJ6mCNp4Q75RFeioaQ8cAmdHxX9L5EsSChRAVQ7tKTLk12YhECoz1UjcNwh8go",
  "key19": "2K2tjmqphD1PGoACW12QgnArCZUqqatUfzzkLy19bAGcgmzwgYNwvpPCtP8W1JX9JF2nzPPRASzyvZn3mhgfwA9d",
  "key20": "3nFvgvVBMw3Fg1475BHEfwb8WZ56YTDxDPLdhJh6ojbXJmdSqANByqiG5cpxaaxnpVtjNTzvMnLwE2DrDWJp3osd",
  "key21": "4pAvZV8iY4wAbXkRD57cdZMm9JebdBZ7qdfyKz6g89KmTqnL3JvBRUUoKeqwmnWKGJet6PefYZvkoESTvm5zj4ym",
  "key22": "2AuGjUKLs1o6rqpVguYJW1hABS2SqcUozgUAPm8Ed7SWJVNCJAeCYci1ns784oL721AsQ66p2vtuTizzFGhpraYx",
  "key23": "4msYNHzZPSNpzgc4MMiRc9VZBC41uXxnanz8D8r8GYpZCDedVb6ik25J5jrCoSUuPG2QtTmEj6NUcDvdJWRVRsMy",
  "key24": "4GvaRvEvonu32J3wd1cDBuDNSesV6SbG7wNckMLnuPCvNNnWPFrkhab2qEdwHHNZ1CjMDaBGv4qjaS6hLYpbfQNp"
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
