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
    "39yXNpood9jTQg3jJiN9JRyANo51r4gNt7UfQzsQm7mWNRbVmPGCSLc4TMyTVfY6CRsFYYbsXkY287sBFjKHaZL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tNpa4uA5mgbmNVVTPZXckxSjYDjA6R2333c7e8PsmGQHZ7oVqjqX2zt6TFujfueS68ZxDhgdd1wwi214eEFWyM9",
  "key1": "4QcyVpHuhc7CE1v4bxqkZx3KiaAS7RWykYnc4NHnZtVk4JfFjP63vkxW5TXJupsJrMtaqpuM9r95L87Ud4Mxtd53",
  "key2": "4d9L4Ybs5fD23HFzQwq3u7b2vm1GqcveKk3C66H4scnGmw5dn63BjKrRaLb7fmH9rnjXzyktiTHUKwvyHTV75fAp",
  "key3": "5crZcRzFi2BiibMiWpBDxf6Ee2WJDpensSC9WAv75gXnHae8V9tJBPWf4TYLk3ZnCiAPAXan6veuBr4XtbRUFJYk",
  "key4": "eNjmxegquGCqA5QStHd62KfY22z12EcVX5Usm2oJbjxJVunCGitKXRjHokLJwQTUxesBe8dRRruNBC9zeSCeHNL",
  "key5": "4WQ9VzPPLCSycvLE86YNnTX1FDUHignm1zybaxaM7by8Kw2mMgS4KR4YsSg8ZumeQbVnTCJHBt7MkuiJatUBYXkx",
  "key6": "37YVdmeVSbB3FHed64NBPsFDmioLCsyYBjpMAMcDEpzHQ8XYdjGVyNgn3Qu9cVA4YEFCUgk7f4BAo2jhiytwQcL9",
  "key7": "4e2ALFqTh3uXDrffo9hJezn5FNUpc2a3RNUAG6k5UYp8xzkDEhTKaPnueWeEpi4fSvar3uGCJyfcnDVVrNizYfrK",
  "key8": "4cqoKcVV4fHDuQwYPU6p3VgeD9CVEXiMEZoL9keb66VfUzNPj3XYyUFTfkAhKoqTEdVrYwC3mu783VKJoNjNKQVj",
  "key9": "5UoRnob3mqNXNPA2mXTApqfxXeKWZ4uvy8J1zhNDGqReExWKGpffUx4aooTu8kqZ15YJTAkTYUCeRLrRsZmfHvc3",
  "key10": "ZkSRikaa7iTaBpiBzUmnwM9E8qxQwSuaeN2UrPgWmCPVF71hPSK4Zo67bkUyUqwemM3xuoSZKXAibSW3SfHFyRD",
  "key11": "4hAEdPzRJc6vJw6eS3fGrLufZwKmQkErwYoLf5x1rVq2q8AqS6QFCtYnDa4NEmwFjHJtYPN3t8yxcCev2oGX7Vth",
  "key12": "4MsavAE1mC9TidDQhArK5acUbpxHLXCjSjLq624LeML7uhPsdxBkzcpQundLdb6gBm34ghUBCgvd2kKW7nPvtzSU",
  "key13": "5VSu3hp6Z1EahghBZVMc8oVUwriarpRJZcJZinekbuVhYsuPe7Rv7ZsDDR1RX5M9XqxyMUpHw3buPPxCtqGzMg1c",
  "key14": "3USMFz4VEK3g2x8x9U5REmkBQmQFgby7G7VgaEUMtHxYGfDvUtxfSkTstCWzDuTkQMJGRnWqbnZp43XHuWhVeyYz",
  "key15": "4AyDURsD7oV1MJrQbXVu8FT81V28nP32kehB4QvushsXBak8s6n1AhoJtXfWWMpsPX5FtvXA4EkEtBnYqdDU8ToV",
  "key16": "2ZKhGYouMkhVCSkuW3hHjKSpRdnJi5djANqTfc2DdUn8WZV1Vgg6a3YzGxZv6gfUWkJnENsPdMwhjV7rcWRVmMyV",
  "key17": "4gZH8DakGa9Nuzhanb8RAk7AgZ96zSJtq8BzDCbQaDXmsTnQMbVmLPvLJrLDDXbJtdwWMGJzJrHMw6zwJjRa1ghY",
  "key18": "325Lnv1T18BH5CGiP2BGLwoDxMdcU7oRBHFk7JoqMFYxT7nvxYn2DonQhSvuVdQSjXodUwPVdwSC6Qu9TcuVsTkH",
  "key19": "4JHpRmSuoSxGndLjXT2PyxTTkMbebTTdnj4fy77m2HpDwuTXLQiwtRYt1M8FNvbgUpjAUasZnyjGsiCpgiaSEowb",
  "key20": "3YpFGcwCZ7HRJghBt7uPFtgyEQxXc9ZShEeLFZqBu5YaZUbag1s9XjDoU27m9TGFENF6UjzDDUCa1WEFUTpTX4Pz",
  "key21": "42h2KxMSduFuCN8G5q6cvyXr1ZGzhzm3xbre3RX6EkQnqReK4hqNGE3J3QYpZwJ65R2scEKRZaVhzAqmm74eihvG",
  "key22": "4bLXFvNiV7BYYMLAJfzVggPbZKwoG4EEeChEbiPNfoBzJNKnD8JacHyYHKjrevdgTQfnAxng2kQMbny1Xp7P41wo",
  "key23": "5VgnWC4i4P1BuHBKyiQmphpX8vcmo4ZjgPMYq2u1FmVrejBhRjctjU2jqrKnrJC5G2b4JaZqoAWsDnmbyjvW3Pit",
  "key24": "4YzXnJUrHm91gYPmJ2EEpXifJUo8u5MKZ2wHiX73BDqykgj2aaxXctzjLQ7Cby4pqSrWQxGMDaSkkdermRw9aJte",
  "key25": "2EvkSW9NB48b4kfVLjTfEaRjLenAYeGUaEwHcuaVhdBaQ3xNq7DYGd23kkioRCFkQ6862MWWwStGFPxsP8oG5siA",
  "key26": "4wuuro1dQUGNJwo571giGRXvT5bhshGyP7eyqa1zpTpwguK3hK9WQMv17zJWvpFhY7twSt1FC7PLurDKiiiegkx8",
  "key27": "jXFUDoz29wCBYb9GR9UX5M37i4s2peD8oJLat6bxwcdqcybtoBPZ3J8yippCuYnSXifKif1XGDHbNCWjV7eojtG",
  "key28": "4BQ7k89BZWc1hqeqm2L1RbaWLbgmw6WhSXWaLPWNegjvYUnocVbXbz9B6ngVK8jKhzb7y5ivRvcHaaovZYjnLQRd",
  "key29": "5oNV2y6cugeyhZaZMzqTBzqSFUit6ZwgXDSH4CqMRJotFxHs3MEyecC3husMgy7eipqLZKE2xrLXjGJ3q6JCrh4e",
  "key30": "3zCgGpUrifL1krjyzNuQpnYhCBPTp6iTPbboYwdWtT7NVfWpShp9dX7Q3LX6ktkowEfzyvr8iBo9GxamXSmooBbZ"
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
