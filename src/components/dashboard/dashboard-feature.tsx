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
    "67fvFQE4Trb6DZe46iE5xsEkd33j1gwXTkk8Wc4CtX8Wq3EEBMBebkqC4dNThUMxZ2FTyisV5YGWgfYS6fDV2wEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WsrRB1bXmBZuSsqYGp5D3FLcoRKSxa5zC1dzsXSMi19ruSRXSsJKNHkMBFqhte4GHiBT335gXWGWrr5gE8TH3Ri",
  "key1": "5xsuJJZqGjLY5FmPtPgANALYgCxHdWJ4c7TG7DKWSc9hn6zaTUNC3XYwg1MBSaKpa6hd37k41HXWZQrkTsKuGmS7",
  "key2": "2ZxhiiXNoSvSYyDjqsSvUHTp9kt1WvSvUdjkaEz6ka9nNCGXiCVkWADLKRaJRhvh2ij9EVys653M4VKLqrJVbsHd",
  "key3": "3Rhr8XcccgNS8vmsKGRtTzVCYPvoPMuR7tZiGXnkry6BNkubeC8MWhnA4ww5y5azCtk8LbPvFZeqB5FBRzCNph8j",
  "key4": "2CVk6Dbaggg327qMMGejbr4iqqN81SA8wn1L4mL4GmF6chjTetgTzdrDFg6AAYfvWrwZnqoiZxKa4Fw1zenqeUEH",
  "key5": "2VwYZNiKQinwAm6s1DcFWYjC6cFFcqawpxbgCHJSFeRpXybNets2hTCEfh1KWQwBYD7x2bKtrtbpNm7MFVkrFunK",
  "key6": "3Q2PJk8JTk1tubj7rvJQj4FAgBQ8CKa8A9WzWu7Qgqhii6rS4aeNmVdsfnRQVJa1fux2C7dcPCjVWZFcnkAP4RZx",
  "key7": "BMxwECnaaNiu3mVMrzsPNfUcrhDuHnfTZVXud6HycsxZpbAmZBy4yJNdCVR529hnfNFUwJzN6PQg6BvXqmjvp9w",
  "key8": "3MCCVGs3zrmCyfkyRe7NLqtPrrNk1eW6Kexi9kHcDomswz9omSm36PV49va1GRntQQqXWuTfaNGuAGWSzUwz8UyB",
  "key9": "4mkcX64dnKxBK8VjyjZnQf4VXBaPJEhjvCBYHux5TE272ZcK3bRjUeMuPQ2XY9Es2M5ppWMidYCM8DvD5TSE76fC",
  "key10": "2ChubK46ydnmQ6pAN7RsPyGYzc86YYpef2brkCT13UhhuKECojHx91CpnUqow36uZnYWvouAhmbvR3Uyg5nQ3pyv",
  "key11": "3Y4DFQvYDNMgJSvYaT1MaNaDGgRrazmPse2eVSe3EHXH32iZbh7QusgBJ4z7DWkCdkieZzgmEr8D5AeiYEQf4g8g",
  "key12": "3vFxnF1TTLVnbeR1x32Noq6TgDavZzMnPj1zUhzdWG1MVDZGTVx9m9tbRW7jkA7NR5YM7JLTLChtfLZoEkaUYv49",
  "key13": "4LW1QkMySYdDLPXh76zVhnAVKZy6LTmZvrHEzpQ9o8CZVR5pQW8w2YFzSTm7G7CV22kSz9SkoedjMByvBpwHdyba",
  "key14": "aVK9ug3DL1tQFenAFSYypULUxa17vCEXwU139fp4HoT7fc3QxrWrs1x2k8wiaPhHUaVyGADq3xKEGPJb4vmz4T6",
  "key15": "PqEv487pz4qcZHtuvzbR2iNyMrDGCMFHRYpewWeXmyn7xwE2CVzgLJDCsRkwnmbCpRrHhSeZb6N4u75jSoLS3Lk",
  "key16": "3BdYR3aXP2q9EkPjc4EMZkszSooJmkZyorHrh1ziqT2Y7xjPCwEkoSACQ6b5mqwPwdK946ijWKjKU7nJRHxrz7sL",
  "key17": "4vC7F4eZ2hZPWje83vCifJfnSUaVyQSsbX3M6ZZpazYA9ixwHUPEaaW4n6d5nzE3YeJd93byd9nox45bE6jE4za7",
  "key18": "3cHaGvnoMVJ3KHSzAQ3gx6XLhiVGfRYr1RZyrnpqarZYZkRP9a6xUaa1smaPYBULMuTUhd8siGgGQRZFzdAHVe7Z",
  "key19": "5D48iX6etx2y3WMxJ6DXGhBbBzZQdwbXQcQbFDEaaRAKjSvP74rMaHyHPJpskpbwHBhM9S8vMGwjACBRC2nLeiuq",
  "key20": "REBxvh8EFQnLo44ULCMLXYi5Q7JXbnTwkot9YzoD4E1ywqAozNPG3kobhSYYHaKaxudctRzoQ6YdJUNwpSrhMHe",
  "key21": "rHkVnXchz42ZLWF3FhFaHfeLcwijjDFXQTaJk65ErUTjpmNb14CZmEDSbeE4qDzZd8ukiVLCFeBkN4QuGByAbtK",
  "key22": "3sUpUCvWLiRwbgVGMTph8ariyy44L8GvK4wi6yF3Jx8BC6T4NFqLMJEWaD3HuwqyS3UbV1phjHFDPfBzKPrY7sP8",
  "key23": "4h7s1xMsctGHH85tA2QW8oaegu8bAYpYtspsNhYsAYNGP4bguUA9xezx5XzzPjdyTcWxNCcnUdBM9RarGK7p2bbz",
  "key24": "37shsVf21HECNZiKDVuvdyCip1Ucicf7M9V3vtc6ckPZg35yQCJpsJcRYhhUYX91PKuifHBrZL4nUjQSB7RM2pp2",
  "key25": "5dTgB5Ds4fkVrghTEt9Z9S86wnttLWwjxH27YZAiVLKnEbXSDJTtwAJ5sAubVHeC1NDrArJw5gWa1TJVb5cE8Ejc",
  "key26": "hUbzQY3A92neSi7WzNsek6hqikrVigM93GP55wwn5DBkGqqPKtckZ4bdvmRkksBVQVXHAdvRMzThMUiidbAtZmT",
  "key27": "2DpEeux7okdonW6KZyit78Fxi6L2NW9tr4URq8NGcPZoS1tdnjVkX3ri1vd3C1uYXsZC6zPazrKTXSp3NVt8H8Cd",
  "key28": "5wMwNqDhH2iZshTr7CxVdLhYLWK4aEp3T4poFxFVEZHiWosjXysq2vDfuX8i9WhTGAQ8DNmN2xk3fU4Lpruw5hi3"
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
