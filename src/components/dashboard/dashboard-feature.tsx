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
    "5iwq4JogGjcwc8nrpvqiCYTnUaQRfv9mpD5eUsuctx8A2oYoE1tD43kjxb2MexZpasQsLjsVDHgFMiEp6LKCHBzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Sf5uFN4h4ToeMPeT1DUfAuQT3V53bEFXCsSjWXUE6bh7RjrFbA7wDda7bjwNvtF2W7MBH3avvAFwv7tmkpdXFb",
  "key1": "joLB83xsJ2tF8Qv3YU45Gkpd6NhozA17NKeEFZiAfXNeFgJRvdggb328DSZSugM7qALDCxP5w4bGmKECKsUyVkt",
  "key2": "3Q8G27vFaBgeEifNjUpcq9XYPNyvvLRCFfyJw5g3xePFZHwWqJynHNnGPoA3WEk1DLJwtkZRiXKDPNhDB5RT2xuc",
  "key3": "4tYTzjcTQ3UzdLFuZQ79Hb6mriKjuVCRb3rD1UsqbNR3xZVkDQw2MMFfWWwnJH1gskNw4YyM52rgguuy99dviLog",
  "key4": "29YkUyv6iHpRZuEfUPtUfBJ2rNpZa6fPEgHVWiboH83aWcRdgAP6kBjHMaDJZKuAGRTiK3t5KfKKK485v5n4DsRB",
  "key5": "3MKCyFh2W3Z5phFfKGoGrtrgkgZ19RT4UPU9ryQtAFJPERGWE8k1tDfGUUKZXVVCs1PbQx9Y7MLBMCgQcL9wAY67",
  "key6": "3U4CcVMbGn3bS9YWFhMN5JyzfPBpLZtfHbKF7o3FjRD53o6qDYEbQr6kTN1LaHpcPZ39mu4CjuVkDAQnCH2jWjPM",
  "key7": "62BeWAVVXwSwZ78eSAEaRqnJxFG1aQF8ne5u57BhWHjhBJN8c6z1W1dSuq5cUGJ9vg8ahNCj87Ey5XkLrKrd9MZE",
  "key8": "58t8dh2z1EL8bkW7qt6SyS3W9juSaniZaTmMYoJEPuUf2ryyCr9oipYhqgmC9uHsE4udZWGn6euShZ1fNJCT5sRp",
  "key9": "5q1b8GKxgSRGHNfFp2E1rcUBGn6vNH18EJNDodPcCRVs2tsznPuxvtpbQqBz9FMDos4C8i7sME3CGFsdXXKL2VZh",
  "key10": "dbkpqtnh4cEswsNFWJHAtGoiikwr6E2vRDePQG6Z23iYquXwZAKjJ3NY1gvby9FNzjMpaPJ7MEt8PRFGBcU5fVp",
  "key11": "4KS7R4kA2YBCRFGKUidZ8nXM4BHRUo3DrFoTuohANsKtt7d5dHVPSMnfm1jJpRRgzYzakw9Ci7GPezgbWUXEwjkv",
  "key12": "3V7VcNx6wJSN6ui8JRZh4TLAaFTbRGmqPH6HaGC8xRTChnzqb1eStavecbNMkQyfwDyFmyRMQ5FqfBFY8McMZmsU",
  "key13": "4Upk1EAL8LNPXJszDDcRPZjw2GHoT8XiYmhMz8jkRa3gxuUjqYNaaTJwEUdLfYhqaNXeRknykeqgmRRixSAsSWx7",
  "key14": "5yGkL6AAgSH5uxPGWfLeiR7kUYbz8AeUiUDcpMvCraq1YKHhU39qu4ZuPbPKVYzoszSMceFDrP4AnGonxfbQrCfd",
  "key15": "3udohkfqimrUpmyAvGnEQVEhgLr7TAWq22sAeSxuDLb7oqvf76GFqFvstUXbg1t8yX5hi4LT3JhfQ4WHrwC7JHP1",
  "key16": "5xCfvFVzcnzq72F9N75MBQTBnLkoXQjnxUu7zEEzAsrkAavpHVrKcEY31BsSPtx1L7o854UCjamF4DXNUPe2ioTG",
  "key17": "672HJZDThN66BL921fY6WeEjQM7EtQVhwABSJcR8y6s2yjkoGrpFkUEeV2WvUVt3NXVGZmuKajdsv3N1k1TeLaJz",
  "key18": "5Bkr6ZBejkLj9892pAypXhxHk3XbdgK8p1bwDfvSuFZyfaFPvXtopLnTwxWMLLi2Ja8yYoDjbxMV2HPi4kqsTgUq",
  "key19": "5SmmweyNzDk2YEEXqv2btxE1qknbK6qgbXF2HskuKzfSVUgfPsqf9PqtSNbe6Qt6juuwKS6UeeTztg8UnyDMUENq",
  "key20": "3bhvdTEz15grWBgWKpM3QKqRTTcGfq2HHhshpTwPjZyGY7HFNnA7mKuTu4iHZLZc8zgkeiFWp2KxVBTZ9qL9wj3C",
  "key21": "5ccPGeVAcmdmhy12MxwNPoewUtYQq4vMPcLgdSNA6DDPbXK6Z8MrTSakUgwWemUcyxswxwB97ehfxCjzfHnRAyBJ",
  "key22": "4Wsn6YMhVBoJPkF79WAyZCoibdP9cUyGohsjtUwGFkCPdXD8XxE4bFg5F6oYYap8NkS54FqzdwtXhyqme3rXkJaK",
  "key23": "4v8A3cXwDyDJTLeSmFQBmat7AHQrcuRLLx8BhsV6f2jjH424FsztiXruvLJfMPP7ZCsS8pVQ4qYLTo4xfVDy2SAv",
  "key24": "2TckUCSf1zHoK8Jd3Ff26hjXANaf7cnytvqkofFe3n7k5Rm8qxanEaY14C1RuQ8yQ2eHtA7SiSv2Eb7woRVj2H3V",
  "key25": "3H4zRPZwxG3UefuyiuLjPYEVN1Ps1WFfVQo6uTuoiZtBCfKCcxRyKXTwhAmXrx13SCbqFFHycyxHz2PBqB52CKL1",
  "key26": "5Hbhyfnsqz5wAeCjvYXiHkhRb5YzHhjwtBxtEDPfcKjcP16tdSXwcBvMMrQ6tmZHd9pY1TpRZ93tjJTonnxx9or9",
  "key27": "52eFqoTNaFkqKQr3fWWAJhHWnvnGNYytAdb8qKLyXQAk2Ao8i9YnjsCDxhS6oGWWDu4yWtVVHpvo5kwnusoAUNsC",
  "key28": "aLWnjgF9PXqVw9LaWnL7QLaHTN9po4YhwfJ6qjZUmEPYMbJkuTtL4fymaXtajRUQUMKqQBRf1PUwfgHy8sLGnwu",
  "key29": "4FHGCSq35eBwk5w5J5axWBRWrX7grexmu3BuNaMVRdNHa9jvpg89KqLYNUDYaRLYUH6vWAH13dTfFNbK11dz69Pi",
  "key30": "8honfoVXE4N7bTAmr6BvcGzT5XDiUGjQdeaynk9Tkf7qgx5VDzhtvzBGNdb88SxChgJMBoh7XNwXSYtdLh5wRwp",
  "key31": "4iQQS2WT2nzhhpgav4mzTPQizorWdDbvWGVxRz1Rj2BoyHj3jicxSioxNUGTt9TfjovNvsJjzELwGQAzJ9cP7m25"
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
