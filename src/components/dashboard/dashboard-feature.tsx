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
    "5hXrgKvzyXNxinQTG7krkJ8cLXj2yHFuTtegB5nrZnhFc4xK65zLbdRhPXibUZYxQdEgEGJyDb3zFKwDSKe2tbGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vA4eSyE5AfDrmnUa2nahAYepWvdBvgRHYRrembRgB5Yi8YuQ8F6HCnXHCGNSXwvadhFZwivDqyXYcTWT5LFc6g",
  "key1": "2BgotWWf6wP7Kk31DsyruXDbxJC8FUZsw6p2B4ZJ8EXXKGpERHeU2519Kve4GNAcwNP7YzHYvG8ri8MtKvY6QsY",
  "key2": "5vba8Wk3XJcuSfHAc5FPVdtiKaU9ZiGwQ9YjMwWjxEqvMqwhEn1FgGM9bZ2vWGYth8NgYX9ibKTDnFTREjkJ1k6s",
  "key3": "63pVEshJxQ5eTww7am3tANggskZ6QQP7keWfVG6fPYkbXqBuZr9cCN22XyHr2yBmJHb3siexVS6yDSV5xu1WbeHj",
  "key4": "gVx6pHTct6HqKJwGuYjpUkFREUHve2uUC3QttTZCvzBziRwGfZg4B1Faviuoj2bDjGoQiVvmkrCsF12FuUrtbc4",
  "key5": "3E5ShRuyATUB7Qky62W6prTGMmPH9fN5P36q7xtRnLMoTf8h6oXUV7QNkstgC27hFgwKhhkQU5PUzWcxCSuCMksZ",
  "key6": "3HSiYbBJUVJaD1a3BUgLBRcutdVKrJHsB8UGRksD9HEztKrF29oVA8SQCrrSKLhnjE38t78kxVtXTn3x7borRzde",
  "key7": "3FXg5oHN5Sx2pXKUEBYNc8CwEp75vuMfxk4XVMcZK6DVD5RQg3WRPdHNHw56HKvaFvpyH3JbqeWoyqomuC9t8ECE",
  "key8": "5aavZR2CS4YeLNSR2vZBvUJEYEXWmZSDCHW8ZrNr36G5cEdXGNGAudZKJUsFipEawUnJgX5ApD6buHbmF5Zn22kr",
  "key9": "4SSDjQXv1nucpnbjBFBKZa2cwA5EVYB1kYTcpmHcVReYhVToB1VoGKCcpNop9n7Bn1c7FRZvwFQ3dgrUNkX2Kh3N",
  "key10": "3rATZUscjUMUQLrPD6B3Hbkhxvd3X4h5DXzGhKpjoMefYARmerZWUSejWdxPfjDzH3K9gjbxPDuKCrJQ5cCkDshq",
  "key11": "3sS33tZD7jWWaPNgDd6tq6JJ1nDN3sqebCvHeprcBHq1N4LDWuuHeffnRAyp6fMam98xmAqSCoujDDRFRt81BFKq",
  "key12": "25xGSMJkuykYrZeT8z5D7zqa64tTqURefM8wjY9B9PhV4qN1xLZFs451XATGqT452vGpAVUFzfPXm2VbqwdkqLKB",
  "key13": "hTVcMowtsAF29DykgHNVCLwvX5sJ5PwX59KpsgWn3yFFcs7DBoHEyRNVYHMdcwVhyhMQ1D7ZiREc5e2AyRWKiGX",
  "key14": "4aDpwAhif1RVL1Lqx1CEq99nG2NJfmxwEWc6npqxszH2U9yjMkhYaLEiV3cG6gt7XHs6WoQaX3dxiTe4cBsUs4CU",
  "key15": "2exkLkyp5ZWVcF6u64DpR1p9wreBeGkWVBLeQmL3LXNmZwUBRp3nhhx9xHjqeDKVyQ5W1cU15Czq1p1B3aenCN5J",
  "key16": "2GLhYHtEKxU4yUCiqZmYCT7NbhMEhiA66tvPDqkV524eU9w85iF7XakFWiah7hpeWBSSvmy2fqhGgC4gFmB9vpzo",
  "key17": "5L5xpgDpbKP3ShMCpM46sG6ShJZBr5D23Ayr4a8qXwdsLDTToNRamtUXBuVcKqXeZX9nECiGdFdPe1wWoeGL9WaD",
  "key18": "4fiKW2Wtqy5uaQNMqpuZdS5rqJXby718sAda65BHmqnJsvp717MTHW4UXAoFUfMEqmr6WZj8qYB2PW3rJ2vJ61qg",
  "key19": "4Y7zZyp1TmciQvELvWCLeb8BqF711uK9S3Uh7rJqiZNYMMSAQSUuJfYpduwZLt2zRCdmTWvtX9FSbdShqkWPJw4D",
  "key20": "24A1Gr7PWmx8q2ZDDqzQByXxA8eX6czE1zBZx8vPDem1m2MLomfbxeskKWn3ArFrDS3bVDq7pN2qNueuYc4hRvkx",
  "key21": "h8jAGVjM3rAUJn83WdqjjoBZT1D4ErsNWcQoX6C8LUcGWwMbfmJU7yV3Ma4esNC4fuN4JkSxvXFRdENEmgY4LAn",
  "key22": "nVuRzmPPWbf9QfJEwkQoyjPorB18NUPr9gGKmsafaooQu23BTmLJyHWACzA4VPmhCqx1LejZWHHY56EoWVG5Vqk",
  "key23": "49NnjT64tYGXry4ohpaWYVKGqoCeTD9FmB7NfcwhW7g33SfctPvaKFQ1MeCXZbLDCogsdf6eZ2NEUG9fhovXigPS",
  "key24": "48JG7qDFYHxVnYpGF91uixA13UGsNzsapPvkVxNbfPmtERQMQ7zi9VZPR7ws5MdvmWcWMHxWayU238B4TKy71HTk",
  "key25": "3Sten7cpf4hfy9G89CMx1cd6m4rwMFRW5CN32zgyQFCQEFwewLxC62M788RKFMSKYZcGXLbzCjWXvgdSno7YCrKJ",
  "key26": "64kk49BkiFovmYvwUbaNduyYijjz95Hs5G93Xsbkb2mKyahMf4NbgiTW7BX2gX3mNoMKZ5EApLDKd6L88rXbNSax",
  "key27": "4iZmwL2MVdJCzPPBQdm7Ey4AdTFkYWbcwsFHeSZdYu2MxBaL93WXWnKjWr1DZW6PxVpkKSCYFdESFt9ca91Rp8YJ"
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
