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
    "3YecvWPz7JMgEm2LjYhCEVsRkA8L5rCdjJKnQXP4YKCmL9UkqgsSQXPvSLcfygEmFHt78jCJ1ZkokvTGdkZyLnkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZQ232EFBanpM8FHzuEypGJkVQafkSCQQ8QChJDL3NsMTD5hHhKHFz6Ek8KGi7ohiQGnyeUf1cUKaqcoDaEaTZS",
  "key1": "5hXt9DDdmK2wyKiUzm2WbQ1G2hnHvUQKVDqhmMFxakCjcdY2bnktgqnYmbhvaEBnadRahBEYw7ThVjoZJVCQefUo",
  "key2": "taP1eVE8yVehpCnR3s2yj7aNLfgyxwA7ATD15yLmPZuMGYXTdEFnhe3L5F3j1FqiCzvWrHzdhC65FRmntvmEBjj",
  "key3": "66nBg1CwwoAbr43avh3pUPVqtbjtzcTCDZ4RwpC92eK4Nx8AMdBznxGamY3kHsxwSzvgHkWbECq6sR6e5SvHxEwh",
  "key4": "Fxedpb6PLrCRGnhYpiVUVUXD3c8rM21LhYigZtZMBeyoXSwfavhJNr5PXserpatpsxhNK95SE3PrjhS9Mz9HaNn",
  "key5": "amqqD5iungRsgmv29QFZNwWCQUQfu9AW8BCsUvvhmjzThTLXb4KknjDzgCexZLDWuFWn9neRD5ggoezeCwuJ6x7",
  "key6": "553TXuN5zrTbS6sxQZTSPJUCLRK5tQDpjAkjfp9SV6Bz3HPvVx6mp1Wc5Ephp77nXU3RdvfvPmjF76wNEGFjFPAc",
  "key7": "33G2mCHCaBxb16UjRD1z3xK3bYgtDBRe1m1P8JrCT1Q1ithpczSNKbjtBcpD1Ng91Qh2gkCWPohCDfTNRcES4tSk",
  "key8": "2Aev6Y5DjVEzv3PFUZUZeW6Y2pLHAUXMLUcDjCAfwnvKhnkei8MtWFwhX2N6CW9iSfWvZmVjes4ivH9oHu6DPmBx",
  "key9": "5HmP5qZ6dmMrd1kbzn3vLS31UZfPQEbpnFUSEb2UnAjMaYgFaQsjtZiGenPGpoqMzFpzbWxkBp7nCQCjF7vQkqHV",
  "key10": "4YxebnC68TM5ZGR3bLRA2k9Bt5DsMiCYpXtAJeMosmT8aWFeuncdCiNrHgVMRyZCnQsx4upbP1rerZuWkargsqXj",
  "key11": "5oEs2skaqWfYYUnrCywW7Qv17xDU1ynmRP9QrBLyJNYCmEBc6xpiM2v1HBCHjS2F99EDZMVqpXJ76DzbinPtHVp6",
  "key12": "Gph7ywDn7Kyx9bJpKfGUfMh6ZFt26PdbLa8VfNbUNTqikiTuH8bMvBoY3GzEuDveNdvESQpkeJP7WD16oR6VQA1",
  "key13": "5BHxLfGSHFxC61bSdHzKryyZsvKyH14NmYJP6xLAhHdn5HsT4WW29x7zYXqtz2aXajLa3VfPuPN9xszLmUvTqD9r",
  "key14": "565DD5hJ9Js1jPjejxza7DzG1H6owjqLKJmfZHM2HqoC7jtkeu8eXbAsokh441XzUoHnVNybKSLRi2XhBsskQ7Pm",
  "key15": "4ghF2d3Krdcmm5Y9uSuXrEpMsSEoyNvqMdRGLRuyACWsZdV2JUzoCpYc9iCLUdB3hJK4JafayWMZ7KHpn5ihr1Fc",
  "key16": "5wPFQCGY4mmU8jHi543qptkhpT63KMQzUHGzjepQecMEYDABdJU371Wq1yo6p81J8DTctfcNaBjJ23GzgV2GuNN1",
  "key17": "2wPvWsjaFvTKAoqrQ4ZHtz5nBwT99YftYsjGk8MsJKAmdSFecCV47YgQgpEnyB7vkr2sMUGox4m8MsHuJ3QJr7gA",
  "key18": "2gFyeUaoRerKMZFrxkzcet2bHAzfCWwBkR8JjbcoNEJ3h9ur4J5ee1qFGNYebxjXx8GrT8YaTvFdUwmC3uHkvqqR",
  "key19": "4zXU1CWf2cavdbP56WQspJjyad3S5hyt1HAABWPcyZjAdiaaNHAHvsRyLYJM8DwiUAQw1kkqwVkyLvBUuEogV8KB",
  "key20": "5nFPz2rAYTDUoBmt6tKMSqiWUktWumF14sYE44yjd7WZbpKUQHs1RFrRaWRiqUC8pNoQzQLSRR2A8zt6GttTQgaw",
  "key21": "4kfuu9QoXZE34VTSx38KEmUNCYj4wQW6xSUwMHqvkkS8LKU5Ynhw61cVavAiDwzUsUy6ric57wkvwjYFYaGakn44",
  "key22": "ceB9cJ2bUGNusXUkmASepGNHiPmo5y1kpPBZWfFxof4pe21gZXFjjjWRaeKowd4pFesiYsoJaeHZsHj1MC7QEvn",
  "key23": "2kxqzY3xFmuWdqwddgxYvrNksswsL8pH31EfiQzfkVC3TTEfhSoZFgMSZS5vtEiGFgPDgXcjki1Yy8Jb3az7MEAt",
  "key24": "3tom2Yu6NNbkXeZz1AVfueEtH7TFAdqqXaQ31yNys3zpf8UYM1camazgeJHLt9ADxobMLVyRNiqNqRGwWU1R6sWM",
  "key25": "3mzSdJsyh4a7Moq1mYM4hT16zKLEFUhN6L3AVQBYhjJzRuzrfAAeSPRkjjp2wQysvMwv1FaApYBojyVbbC2SN48f",
  "key26": "2XqtFksxUspnG42knMAaatStHTBZLoekEMemgVpJqYzSEmZmR5DToTYc5Gpib98LR3FXWWYbEfqzR2LxGfxpn96x",
  "key27": "612wjAirGvB17Sc5paBzJpS1FbACdqziqzcedWZQiF7BqZevnoEXiLx5jpvMj1rkdHa42XUtnWSxC2nnVgmPkd8u",
  "key28": "2eCXThRWkB4AzGYW78XK7NNAmbdNZoatmhv5DTC8bAZW7nX1qbAGLobHUeQQkendcS35T7LJKtovQTXTgLq5mj9J",
  "key29": "3q3X6e5nQxdbAgSRZjkGxfxGnNFHfUwno5v54DUVVAUdvL1E4fDzMALDK2jWZqVEWV2Rb2fLsRzoZPgxNXKmPVhh",
  "key30": "3bSgLh8bkNsDUQ7mVs9WfpSrunvJNch8CVsYev9vuryJwvk4gTuSbKcN9L4jfgzws1SnGoNmzYkDFpJdgL6xa8c6",
  "key31": "2tZyLUUBZiGZYFZdsjh46AsSEswmDVFLveDmEpz938sYx7MiRJt6zuPQVoZ7C9EW41v69BBSfWjBm4ZtNRGTqxdd",
  "key32": "2RhPqUaRpqGrw98EyAgdQy3DnS1Pz1jqM6fVytKxUBfLv4rXUV2rSQNfwSRDeeNRYeuDqRM5RCccQ2QPXUP8Tm3q",
  "key33": "36igmGF1GssZwXUKuqNQC6P4L7E4fkyab2g6mEbTQ9ZibHGajgbB7ETA5APtQbY4uAjfP1yhCnTVTWZDy7779Q8c",
  "key34": "2b7wEWH8fYWzV8sGKZKKxtM48mKb9PPmVJncKgYHuL4rYas9Lrkbr9AbLxLkeg82Z5RC88k6f7tXKkwMGv2mxKGD",
  "key35": "2eAoWmDEZXBC9eAiF2zCbRpkpsM6SxLWJq9BxU2jbbVRV4qd5coJiTah3zdZCAwFzSHWM5wKHELoobjoKkx4GZbq",
  "key36": "62M9EKdQGm1zRQzLBMnRrczXgyBBcP1jp6Mqw524ysHHDkWG49SbtpGJK2Jc14dhXaScB8QGMgPyzZXo5ayLfyep",
  "key37": "2GD5R4XzHy9aUU4cP7JouqJTWuMdPuongPV6MNHJ7i5oo8YifwrFzeTui1qBCvxFnHfYPYLcvjVmwkQCFFEubxz9",
  "key38": "2jVV2qixYv71JEjXG8kupsxdC3w1JZp9aNKrNKRs8YXVRcCJ2QbTSYn95ykx19zXwKqWvsrVmin9zQDvkwaSeSS8"
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
