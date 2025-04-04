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
    "4ev6upW9dWGRq2uXjfndWsKxNL4qnX8vFSPYaeLuVom1CNig62fE8T1HYQeHAfWArsMQqFYWPuwPrhTZV6P4m35t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfNEFbnQ4sAQWMLDaZLEvY74U7AT3azaSgsDXq1Mhmzmt9CBjbybQ7MnwD8B9mXkdSsrhFQmeVYVnWYEyNEdN9M",
  "key1": "5YyqrkPpVBS6XCz3MwVB57C7wXWLT6QwPBpbFraDBM6dBeNvGMFRmocxT5tVPvWEUHb94d3uRXkrEYWHgHg8CW4y",
  "key2": "31dgGRgPoHgF51XhTaiREiGc1tzoFWsUfKdfmPj2g1z5soWCronqJgqy9wz4rZXpYHJRscrCjBrcwjvUH6hxaTHM",
  "key3": "4NfX1AtyPGgtJgsj6dYwjoFHwNDu9DKfn29VieHciPSxQzJHkiXuNXa6kRcypVBAjuJmw53dQAHWetQ4smiErSHG",
  "key4": "5WDk8AF7uUSYoxao1XtwP6nUGkGa2PaayWDC1yVut2byZSweG7gR21qxivcH6oumoDHfz1NLVsLSVt3B6W8wMiaq",
  "key5": "4GCj4uJGaAck1Vv6XU2iL3aNGzecizJPP3vsQro9ZhrQxPLPjeaxtq3Z7kDEky5RKEjued8LPwPxv9dTDYsDhgRR",
  "key6": "5U1kf9M3okwMn27fku8pey52mCeTAZ1kmeXPby9bLRakbfVTSs7nfCm3wnmSGr28bdZnhFzhDAodcHyfym4uAXgc",
  "key7": "3utrkUD7QLEVcLfD7pa8W6x9Y8P15qbdtx5RaRounBh3jxqE3b4NQGpUTcL3pkG6Y5fk2fgLHRU19uwrGKFh9PXC",
  "key8": "27prWFD92HSgS68MrCx7HjdCmez9djcChcaNUJZy3rx8uBarG6KRzWCaNKfmCoB2STB7A8T1ERZPNTeNEujcsUKv",
  "key9": "2Dim6a1EXr7CGs4q5F3Db5ipiRHqKdaZY7rxxE8ZNuiMiJdBJ3dQYXoGx8qz8tzTZ6H26FvYrMmjbLWwFgkjjSL1",
  "key10": "5G9ehsPEkX9Cbzx65eLhhAGBYe2hFxGnwhrAJ9cnXFy1BSiY11WKiVuzHCH5XZ5gFeNNdYGew6VwJFAjMfN7fprD",
  "key11": "34ZoPo8gz1tNA7Y2e9XLGTBeXq9peWMinRD5BZuM42Ah4ErgxaoG9iq1VaE8yJTFHe9yhbriLjLPXJfK7YwD7ZBo",
  "key12": "5DuoFpagx4ijeuFtbgP7PkkJWAHBLU3yZ3CyazjxnBPKi2f8h64GEnj7m47vpGCSedxh7FgquXozSBWP9NSVRReS",
  "key13": "2RtfQ9AXzywc5WHrXWp1vc8Hfb9HGtZ5APBafgzLa9VbBjDD8Zm8Vo1NLx57vouNr5SVGZiCNRBoeVXCFv27CQBH",
  "key14": "2Xbmq6KjKwcfFqzZMdsbF8PMq1ovcp7pxBWgUg8vH9ZDVHT59Vt4B2VZUz1wsMJqFyZqeyirXnG6sGmrSppJqKz6",
  "key15": "3ZK7cD2zYFjWDQAUf9pvodSpzwet1yYisTJwMgXBRVqi6LXqsTvqmVZjt2B3znPN8UUzG9xHuGCNS4cs1uoaF7w8",
  "key16": "4KB2HddQMWvz3dJYZZVJtwYJjeh1NbqQADhGen2JQCjZYBDZQV8MC8D2EUcMRU5aunpr6aHpNBUTisfmcqJbPaks",
  "key17": "4aHRoM3RHB7T2XBsUsvNKNgd2X8hXUEzunwq38J1GEoXD4w2u698wbi1gXNmvHz1Qm2BuiAmrnkDsxDcMBuxdWwb",
  "key18": "51S3fG3rb9BZ5WEAuqjaU5LCvpSEtvJhffCmLSd6HzeePijXDm2in8JFDmohCYzCncU3fD9imrXSP6TW9Q8kkaBD",
  "key19": "5wUHwWiZx4Rb6rmqKwLuxDAb3J6wULEDgwVMDgyJiiNsqyibRURbcMUN5a32hxtuq7otZjR3xPMqf9C3zZrg6vtz",
  "key20": "3h6zA1CR9n1wnKFahr75CJGkGcZQ6urjPUwt8SbBKnK6MTsYb1vXpDM1mc15Pcbw2zxVo1LS3sZa6mCkmLvUs5WD",
  "key21": "4gj7nVh75dKTALJaFUSBeEHAnkNfzQ5oxRUXS6rjFHJJVKrLHM4LZEdkQB4qmFJzvmegjJsrPhAAzfRz1GRDHdD6",
  "key22": "3wBRcH1kwy1T5HmeY51SLfEk3gZEo9YnjwABHyP8joSNiEixcuxXrZYuWjw6yEbWZWaetZuhgkxJ8JN9Tx1YELRq",
  "key23": "4342wmhZy6RUTgjgJRbRc6bWdcM2hxyAKN7imk9qTGPrG3UayVM49W4orFgqbXYzq4ANeceL7decHt87faYZKuRY",
  "key24": "6247LwWzZW6139MLUf1L6ok3oHrmJXiYxzQvwPRNvrmAENp2SzRvhF7YVCENk6GQG9Bk1Pse41NEYVjh9NyLVHdq"
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
