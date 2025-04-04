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
    "V2ULvkVF2ww4L5VqLng8graL3GD2QrKkZ9bAd1CDji86wzFq6gN7RBcPRF5vkmMwCspQczPV37rrvJWP4P3wKrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHYnUShCVXsi6KPjQC2jXuursYCNh3t7VM1eBSHZGhPT6yeSnka2yxyjCtpo15EqZAaJVY7BE9CtRnRdjidaxNn",
  "key1": "b4SuJUtojtMPzyKH7GhJXoM3F5svAC88D6izkzEPzZhVMU1DBTUhBwvMpPWXBNTQ6iYd5eCJoa2gsUtDfLpSrL3",
  "key2": "5WxXgWYXNJFrkKrYhLeJf8h2vt2g4rCHViWrxL2pzesy4z4UhjS1mkuVNDKLzBpkG9MTB6QXf5nddbbqmTaiGe88",
  "key3": "3z5xVT6ZvxaKncEH7xBWkCThUeJBatTbd64BMnsGWxJGTxz1q9A7cwg87kVuKCRNFJpGsdQezgrPGutSH9a6FpUG",
  "key4": "4CY2qxHH4auHV8Gjh5ZsP67QJXRB2aCtT9cSD2XCy5iULS6hRQXM3Ch59ep33AQGUkyhwBBgbbGskQQFEDT4rKun",
  "key5": "3DfTruuq1kC9zqKYuZcqorJnDTfmzNQLLS95yZnZWZHNAYqE9ZBQaUg1tqTG7wBFUiAnAqB9kRRigyb8413oBDAR",
  "key6": "uP1X1KLXUA8e4Uvaq2t45AZPVFvdQpUiAfY942fx5F3rLiwMX9dEx5JFgLWi5kDk5FqtQy4JqWMuHZpodmNj9P1",
  "key7": "chWjVDzv6NXtauLWe8REjERjGZXp11wmvTuRyTnyv9zFBaAMZaKfGPytsCTuBdKyRSv1dEGMJb99n8x5wmbhJH7",
  "key8": "3kzD5HEi4JeWTo7ENxtE7cYuykGMbeYRDhLLP3U9B1m4D4suM2ArLgQLRmBhuynBcvUY4muKKeBQnKMnPrSLsrrg",
  "key9": "2bUZ8rqoAU4dfWuy6ssRUMSbMRaVbdYzxw8ZnX8Q53FjqJctFAqD4YHRWtJgjag5B4b9yU5fGhHghjXKa6hE8YQV",
  "key10": "CdGsngy8t2TeNtEk5NSo73F26RgcJF9aXY4meB7TgDGz8fwR9rW2CTYQJM4HmieeebfYs6YywNzcEiYWa7CdCKG",
  "key11": "5gN7B42gAd6HApCBHWi2SrTKYt2w7GQMFzMskLLQvtWCSahWY8kzT5dRSasKpdpyzDJLumTRab3rcE2m6jbZGqiz",
  "key12": "2GXVtDWtdNUFUCPory7LxzHnDVE1BULdP2pQGvaYfH9UxxLQuTrKCdQcDasDeLY43xNiRcfGLsP6YNwSsrEmZnLa",
  "key13": "Fujfz7Z2ZADNMtrDyUi4YwrMZp1UXsLr4JFYpyc5kXVGjbmZGY5U5VsxxZbFESRS4ej8sGA56o7wtzn9zXnCsn9",
  "key14": "4raAxJuWeUpEwKyamUvSaYLrKgzt5eeTn1riPaUTAh4qxoq1T25o6jw7MUfCh26efkRez1vbawjPaUX7FKKs3Zhe",
  "key15": "3WV6A8cGeVVd6qAUtrP5nDTc5XjLiDdc3PMNgoCsDGjmosbKC8rwmPjeMQRTsyw4w56ymHtYDkMb7f9DbMvf7ri3",
  "key16": "2kFE96R8qdwJVThQ64WJMD3zcp7rwn7DKGV3ZQhopVUVdTRgSTuCmBM6TPqjMuegoXqj4GNRXyBYXaeG1V5bgQoQ",
  "key17": "4Md41HptwR4TF9me59AtpZJMcJwxZiZfhQVpHRZFno85jMMGHQ8YNzgfh5PKshMFqawkWNww5U4MqmLRbFTVvt27",
  "key18": "BmajEyPJxtNoVdYtcfSCJkfX9XTaC7P83DkaNisbF1yDWLgeMpYCtnfsGNWBtKqqWqXMx1udxvHATBZz49bdQLR",
  "key19": "2htbVjBTjjeLdWTegD8xbpypiyymzYnkUXE5fQNN6ekN1JSpotZ7XuKa5yuYgHJnus1B45r4XcfKCThEsoZjUZ2x",
  "key20": "5VcLKSNFA8NV73yGJ5Jn6aJQL6yN3f8Te36Ce7H4Ew4ApsHauhFCXJB9kPyBc2z9hsjfVk5W9Z1WvbdWHbDDv3K8",
  "key21": "vh5xqBEfkUnFyNKRxvf6H28xs4gtEnBzDHUM11DFUQ5hDY9vCUaNgtWWm5JYjh7DF4A8ZbpoYjgqv5Usfardh9N",
  "key22": "vaCpEYuMkVmH2qBdCUJpU6jTTJNfXKgymngDCnzKRZFkF6NyiwruH3iQDho4rjGJbTD94hNMJGf92R3FH3P4kbc",
  "key23": "3TZCVGy2Y2jXZpY2LGw1UYYjtt6Fb1Tx4da6Jae1NwhgedFr1SdkBmJW6FkRPWue8HkbzNZNweqbPyxnWPiaoPZQ",
  "key24": "5rVNbyRZqCkHg35CDVFnKe7pNdsy66sr5AvcpM8V3R7ygPdTw5sR6gChK8Pvt5R5o8HNv4kQivYjS2BjiFkkEGf1",
  "key25": "3wSDqzmuKwZVccAqnpy6v39Nrqt4vP9LmoTH7wFGosYFKT8V2yEYenCKAYXpQd4ku388CnrRdpV52zETj8Mihhut",
  "key26": "5tBeNpde6Tcj9uMSeLY8pnJQV6N2LwdvWrWfP9bHLM5oGMQ2k4eouQ8exx2bzzmnU4XfDKiR8uvyMUB5FPSWVpyq",
  "key27": "5ubmtaRbk4oo6fWMutWDdfmnmaW9C5Ftpgodvjn5mfTavYnJ4gDMofAhNorHwNivpnrkgefNKY8zD69cjP87nbRd",
  "key28": "3uwsNBSsM9Ya78gPfDDSuVSyr5nWRrYW4bj9pDCGsWToVBmYtyB3JdiotCKMjgR3janshSQaqSLtWu8HHu4Bz6Ju",
  "key29": "YJrGd2X4XQkCC3Ngd4twHRcxAHzUCicLSC3TXQbxGnAQJcaWsrN9B2uaBpGWGn7kabQs1n8FrujEorMau8BHLpx",
  "key30": "4vTyBbMytMWX2faVnbWfnwJDJ164hwpAw2yujAATa2KD1WTZsH5fes4Ngj1X76RNHHJHPhQacsZ2zApHy7U79KLU"
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
