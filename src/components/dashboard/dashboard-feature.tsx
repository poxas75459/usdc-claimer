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
    "3jcAKEkRxvrbjQZGrGPXP5FHFfLKvCE1TUv3pFwQUqnRe4fqYiiRCzV9iNrikoGCapuatgUHZdH4zd9QEFSnEzCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uM6VmC8ADF1B9EficCMjxTNb43utp1ZKQmJzD17S1jUeDCTfH4WbdPPkJGFERQPCRQzTZguiANLsVguYeHHyxtx",
  "key1": "2xmavFEWrNp1mPafkJgpH7G7MMD7aW8dd133vFys6Ecm3F9TFV8U578AZRwTq1tJxFxx15MK1HNVASR4MKGbbzf8",
  "key2": "5g6b9Gf8CiL4waiApTysKcZDDgncHRmURCNFULscruafE7Va84tgE8k1eEyNQLasRYQkVgajgZnsmHv2H31XpUsS",
  "key3": "5a27hT5JMnbW6VNZduKG9hZSzmYdJqQBK73TxM1wydnRcUFCb11yeWsThcr3eKrZ63QCp36vPCHWGPSGcvPTa5FL",
  "key4": "m7bkS23W816tEasdTVmY3vwco4tdiq6bfafVrLQXditxgYoFwR1eExxghbd567kSqH4ZuLb21aswd5ZNhgvvUnf",
  "key5": "3DX9aTfxr2tMWcw4Lq2msi7bBKJmxKSMKY4U3zPxociVcpT843Xkz4WYoqzCgCMriDKea49guKcJYKf48dSnJ6aJ",
  "key6": "5ccNbXA5LvwFSf8DntLAhYwwA5LA5BciBWfjwt6c18jJULTuSbAVUkfsKDHu2Rb7CGM4BKDGwcMnKs8uFaTsmfuW",
  "key7": "43d5yh7X2cEGyV5MkmxxCbDsQAZ72PRxH3w6RkUsivfvHQsy8pNLAp3XAXSzAsTP36rP2o18M48cB8zsXvHSvc7q",
  "key8": "Dnke1mRmXS113F7XWLLi9zrhz9A2Zgep7RC2dTD9rHwBHyazV28xoZTXxBvuM8Yz8xYFEXgi1DGeLPuLkoRyVN5",
  "key9": "3MRb7qePgmWhdZMHvXWCgrstZTFJkMccjckDPpXRqTirb7muzPNV5tnjkbS1ZxC4rJbmfuVpcNwrUU37k1wBZnTc",
  "key10": "639ZtR7jUKC4daNZPpdvhAQQixtHpvdgwv5Zj3af1U87JX7qso759UPidd2qa1hDMiTXnKR6ptgM2vmRJXNdLijW",
  "key11": "4HrSJ8yXVFaeaPcPUtACpfXKWye7yyVAB8d43whNWTatGqqLuTBknFmqdbUGLGUPo5VKzFFUCouqz79dtBAfDvba",
  "key12": "eSRYY9Z3qxywXyr93zgaVggedRHU5keirwc6XaQcxVfTQUGn73n1Vr7t8SyNguipVYTnZsCNHMAcX9DFmvvzqbh",
  "key13": "2FnAvYXhFwFGRj1yWvZgdYz5sL4LVJfW3US8kRE6LNXkGdN7gXuRkYzjBvNBfq1TVwgL4E5igy8xJAkA3GuAznmV",
  "key14": "5mHriwZmBvKnUTzXYWU7L2mPEcAEhFHjS1hdP8fir3QH7ak1zWgYprGFGHU5UFAYQUzDym2C3WjuyPXyJe711MQb",
  "key15": "4at9zwkexAzNSzmKQs5yBwsYdCLZpyKfT133aAxaEexjKQ3yuVpEyJqR6VSLDn8o5WccCMvCLzPY38BtJwV7HqNf",
  "key16": "4gHqDihFkiSVZBUNLe1sSJDqetvxAvmsK6acPr52nDZx65RFFUCDtaomWerapS74vTvnXUvfcdh6EcjDQhMiYP6x",
  "key17": "5zoamsLTn5bZjzT2Gw71fqydrTW4JmYwSE7UQxHC7PqCNitxK2K5XTC1VsLeoikHWxNTNy2kt3PhvpvtKPWDMi5E",
  "key18": "3njjpN5d6dQtjimiHUGkSEuhLu1UWz16xgdC9DLkveR3ahe8FjqaDv6beVNt8uZntPWY6mzWKzpNn4NyiZ9p69BL",
  "key19": "oBjPAz5sMNvLkGiGhWgXb2imcsfY6MnJK9PYxjUwBhBAn4H2hujhBBQKYoJQR1AuxjNTuYMbAcH4X5ZW9jxhS3x",
  "key20": "TNW8QvpUGE4E3a2QvKrZJkamHRFjXi8adrFgdvoyYMGJEEjtWJdrvrVyH8Nqh3moMnDv9nkUu3Xbrg85YewVZm1",
  "key21": "2N2eRDc3SeYekz9fabuA2d6ufHZCEVrr5Bx4x3itd1o2idpzDMmL6rCSA9Qn7ygE4P3d3E7KRMLKBpFCge3Wcsoq",
  "key22": "5w1TLTndd7dieQ6MmxutAHCw91ZdEdmUNDW4GG3gQEcaXwBWrmpC7uz24YZNxntuTpGGWjfdYvGTzaGQ3AetYnZn",
  "key23": "p1fjc3bq3gePeXxf4CaKEXZhEL1LtVpBtyckph3jwVn75bhNY5hpzJmHHUAoeWwy3BAziBqsNMToCogasrpyTeA",
  "key24": "4wMiNQykm5RtUuA3VvRWqJEUpmcGMmAgY7MZ96PhdcuuMfoHwxr4PqQK2JjrYjFbPPRXAfKrnFNpDm4qN23nAiTR",
  "key25": "3n9vtShCQs4qhZotNvgWtoUkwMnveRF9iFrNLSEG72MkiPhYo1jM5bMHUou8gjp5unuWVLvKHdZTMhSWwFAoD2f",
  "key26": "5ZEGEUfpGrQbW1wahtnbvnjrJqzReYA4CYaAde4p3ffFsJUi8bKtpWMA8ejNey4sfwymsJkDniuK8ewHKXDBGkFz",
  "key27": "bNpss8Mb8wLwGRgNF3MjHqTr43MKyhLemg7dQFbA4PJp84jhEPf7iLQ6PHAwEeF5dzmnMGPpxwWfcuPCW9Qowi3",
  "key28": "4JGF8Pbo3nmPwtjVsRULkJLNp5GgQrR2Mtne5vhSikCSSwoMVGqeduxshS7c3hac5rpWz97QYWda9SeeNBV8AW32"
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
