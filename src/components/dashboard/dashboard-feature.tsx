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
    "2ApSyFULWRtpKBf3ncsVb84DGFMXEY6b2hZM2Sokac4jCVuHa82mVhMZwc4kT4YzWi75AZsTreteNFcmxnieseCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkBPd9BtZa5CzTgQnZgtQSyKYnPyePCRKUeAWpkDZnUtFvmirBpbYQEWzDD3uujYRP1HCTgt2JUrLTuW8c4aQAT",
  "key1": "25nwa5VPode2v7gKusqZtTcovzFkXEK86RDRGHEX5PBaAk57StPpc5ApTuP9NNhVTY1JxRc7DwVaGv9u4MmC25rs",
  "key2": "Gdwpm2ijGZPVCaoMEFJEYJ1WjVCyqvaJ8zBiJvGdpQnyuQBZgEHHqZvAqTopaYbkkX7aWnAjubKSM8it7UGdGbf",
  "key3": "3zsw5gitC8StARjqN6a5yp2SpAdfWJHF9EwE3JfeyFMoKcqvvPzE2swgx111q7YSmihzZ3XwUxpKdez29hBfq73o",
  "key4": "2Pqy3SDjfwpP3PgydMve2GBRiRvEcuaa4BWMs69KZfPNAaVSu5Qy9iTCML8QzESKQA1VvCzjS3w9WgDvAcVisSH3",
  "key5": "62zR95jPXnGhrjPvTDabAfzdrDu8hTpNrsQvHzqAGmPpvDL6ZNATdBssrwcuDz1B7662uFu246UoTg6mTg2svjzh",
  "key6": "2NXmd4YWvHB4QwvdsLK8xarZ6zGER7Ht8t5iZXdLwVttieorttEMYCeFvFLCV2e2cNq33MJ41GFjvjndPR1YqJ2u",
  "key7": "4PgehZbg3rLLgKR5WCZiDbfQ7dcj2aTABgp18aAaZo3zHZMkeJityeJH8aqCQRc6RWCqKoXTLbLWQxEV9NE4jMH4",
  "key8": "2kTWxoFAA3mmr3wnQDVHoR8cALyDSjuMQNfW6M8iqBuRQ1L2Bj3zuwr8pBSxqb3Fo3hNgfJMVCVF36WBN3vYQJSw",
  "key9": "5GbMTjEFAE4gv6aKRwYoomMZ3Xvq3TQhzSxwtLHKDGTDUyKgjFcLjX1owXU1pDBit1tDt7SbwVjQwrhtqWRmDDzA",
  "key10": "4uxicFN24b5jNixFec6U4MGFtAigaZRoS3Bd3FEe9EHs9CzbJTj6zQsfPVEoyZyd3RsCX8M8W5Z9QPtH7xe1Kc74",
  "key11": "DvmRyLTNUwM4NS4VXH2z96spFAptJYo4KbzB2AkHZ9qYVmPyWbRXgj1hTbHwAVaGeMSdczNRkCPFfE3nTFhjt7Y",
  "key12": "57Km1W1jn6ybQHzrsbEeBpAdSHjkw5uDeKu3por2pMexcSzrusswo2zpnQAHQUDenydicsa4yqh72vbNJSfW1ih8",
  "key13": "5jq46ALLYwGZcGeKWUCL65eDXxPX71hcmtm8ex9y3k1C16tYX2vGWBt3ZUvRjrCqgZaA6Aaypqzw3VhmuczAn4EG",
  "key14": "5N5PYXbSVrKL7qwyv9d7CGwNszTKfuS44jxGirXvTc8zf6KSJT4SksZEDgFoML8WhEVRWuYK9L4GSv4du9nTJZMd",
  "key15": "4tXrtiMAp4HcVrhy7A7B2eMpgqNyepxWArbBP7TbXfJb9YHdZrBwBKS2KcufDGHz2Kyg4eCFM6d3ZtqKWMcLY2GA",
  "key16": "1XYK6YwEr6n7ZyHWXhuSeQQfdJX3WGhxXMiTjZyHwXLzhMzK9RKQLJCw5fmFkVCUSVW6SavsLx2j1nbmDnXzjY8",
  "key17": "2NLLWvHqEH9he5Au77foqcy2MB7QH5VVCC5bZEgSdojfHo7azsmK171ryQ6hbJgrq4NNwHTrAAoS7L4Rd16VVLgz",
  "key18": "5FXs6257ATzp1M5GQATaCyva5GvKYRmzzEf1sF9nRZjySAwqK8TxHRjWuhExHJjUr4kk76uTzBb6wxLb4du9Ct14",
  "key19": "4kna634bpbwEP8UX2FdAdQoR9ShGVEd8YZsoDM6qXffHYkUf3FR6Y8uhnZs6Dm17gwUDJy6pFt1iEaiheqA3uT1i",
  "key20": "2Uzcd3oKFUQrjqcuHuembHWWc9tMbqRDWq9HBD6fMWymEpHnJCSiawY2s7NqC1R6GbQtRSknt3fkxKSBhjpLmXzP",
  "key21": "64ViorxfiiNqHk3ogL43DY8EKNxBgKd1tfhfT3WBaVfA2hby311xbARohfmAQ3a6VX2hmn34fibpEBFG7JheQN4E",
  "key22": "5wCqdbqJh996H8G4DUwKR5DcJkyDE2iKxxwRuVe6apWTAxibpwov1QpbugMsGkUaUmZZ6SCQFYyurKJYBcwbAG3n",
  "key23": "3HmYZdEortRPpGw1a5boyxjnXoDycjoghkkdhNnxU8sXEN8PhQux2ZfVC7pbJjSvBf87Tmve2Z2Hw8vVjwzXnsKQ",
  "key24": "2ffVP3DLzCbfPV4VMKj3CqN4k4FjB7dsQ2TxmNoc1xEbJAeaLjMF23QVrMYpe1k4JJXzfz68WYoyM4r4kjo37A9o",
  "key25": "4zxBhZtpxCM1n63PsWv2zgZ43QAW7bebJ6GqrqMpgcjoKPgb3pCJRS5Z4hqqYdHjbPim9xcHSy2JZvNDwgQUf9zA"
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
