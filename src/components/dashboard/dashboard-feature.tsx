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
    "4ynDovjdZThCx2yCofAkdYToKJFEbrrdx1aAi8t8sa4y4VjM2CCMYdVahSM9fonTuHufpAuc3BA1z8oXuC99gyyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NRMHTcYJmajd8vn7Mdf4PtB7VqQGRLws1CgcVEZAcpFZY5MEBMVYQ4yAK7aLhwBH6PFeXaPpdiYcA5eYQH6ttB9",
  "key1": "3Zham4jB8os7nT4fQzM3gv9QjHJQ57y7XX9yNmnc3zoC7JBjUTP5JyX45h4JTvyjw8MYxtKsEavMZiPFXZKeaSL5",
  "key2": "4Z6MgsYuj1AmyVTmcgTs7GuVrBehBnBZwk4974MqhBn2Dsc7M796ZnA5QEsu2TqMLzga1pbHSUQ7k6LrZGp34Sx6",
  "key3": "51Z1i3LsugdEQfwxPUoAuZG8mhmMBALpz29D911PJKoPz8fgcbzEHhEzwme2jfj9g1jFiysYiyXruqnT9tpYxJCz",
  "key4": "5F5vosLr58Muw4BnA4A6kWa5HfXw3Qgs6VWGiUo5xUGPc9DBL9KTbiuduh7rYt28KsYioVFSVv1ZUPpnkAWjhjgm",
  "key5": "2AJzjpfqVZLB2zLKKH2Jr1duu5Hcp8SC5VrebtgLx64DUFcLwdiJH4vFbRzZQS8qkyWYJ3oV5Vc37ZWEvhqpKVnk",
  "key6": "47HUna5dLVagx5FfPvzpmBYK8Lqn1BcydFHVyfEDyjPqgundaJaWrpdxytCJPBAXTiRgHYXfwYWJi9T6ke3L1bVd",
  "key7": "2DcF8QU5FdAKNmdS7VXF7YxkvzVfKYkgLWti9RtrzVeFZpytkKPBwKfV38Hw81pFNrLdCaskqkUCZSA77hX8UW1v",
  "key8": "3y93UQdFU3xwboFprxrUfzb1DfaHhh7ESpQVMEUhtvmfkpzEPSfYnP6pLyq7o7UTk5rXaCPEZqH7nH7S8snpnEcS",
  "key9": "2rayKTWbHxzkZR7XxTuGJj7nTHAX5rPEMoYdwQ8GMZcdnsBkkQGD8ihKKh4JXhQtKC5xHsa3PHJzczPivYXqKQVb",
  "key10": "4Z19nhfqvmjRELKta2gRy4yRbNcQwW93H4kpu6dcF6NB7eSeZh1YkhccEEGYJaUbTzzkB5SUDHD4h7tugmRLDAuG",
  "key11": "5bCTwyfLafK7ryughQvdEpHWvtZUu41yZDoRtXV9crN7TYJECUNPERocE6rWWub3FAEbo8JbGuQaVoXRLGeipuGH",
  "key12": "244KQMVj1eBF8Mfydz9FxTiwzidTAGxYzn6JYkdbeYNt6c256p5poBPVYy5YaWJsr8H1NudNaUTzUxBAmV743BDq",
  "key13": "2yHKbgFRVdgSemd8T89vAxvArERSNfsqyY6xyURQVEZzsfixpdp2nka1k6s3pjbh4jhyKa4TTaFFx1c3qag6pPKT",
  "key14": "cTi9BduqcD4cw3h5nJBn3T98Sbskeygem2KKUjiYx1W1juxezC3Qs7QctrY7wzD3FH1bE4jHxUZTEHTLRK2Gwsy",
  "key15": "4EwVB6jFVNF77iCq96jUd39qohM4oq6H4Vs59QjZXfLUK5h3bArEeRXfHs8aSDoY4oLKbaGpsqRftMtB94D4aug5",
  "key16": "5ciNoXwNQ9s94BYB5TsAZpuH6E3vXN7wsthMAzHiF4ErFjgxTFw7VZFVmxGDpzqx83RZUyrbvADVwzRrtaeyjc9u",
  "key17": "RJJEkkEDRD17B82ektyWQsUWwyudteJ6oqmVxaGPacAZhPw5s8tLHynpqEDMT3v6JR3nUuL55a8ggNv4w9Bm34o",
  "key18": "3HTJrxriAQJaFz89NfHRvQFzeuiqwNFeAkLpH2H8eNNhsZ5ejAtBQ82Fc1CZbSzybdQMfCyERDyYP6zYSs9aF55e",
  "key19": "2eYBzAg7V94ZRQp7Ewn59fbsKbcPgqu9Z9QtdM6rMH8xuaXCDy8igwy6VLvSTUnK8UJ5nNrgxq77ivNEkvY2wkB7",
  "key20": "4GxeUziaqNeoLAcH7Ac6ufrvf6DUe6y5tpJvwZ86m5LVDDm9Cgzwefm7boz9Z8bBfc2KLSEfHuNBKRTvmethAgf4",
  "key21": "611VpA16G6MaXWENxdhdL6EwbtcbYpJ1iRETE7sksn23angL24kmhEExkdtoa3yaAEJEvp2kP2vqKknuG7qjsiPP",
  "key22": "5TWTQetF6nvVY6ds1fHZKn5g7HyvWaAwoJiTTKP2vEnUF1dMBoUuAQ1Cx1uAuqPS9pXxvGAQmbbL9zt9wwgH8SEV",
  "key23": "2xScMJnnsXBjwe8x7Wtsgch3vFAbVo59gps3CXwYBTD4Hm5KN6im77AmqE7yckqMkrepTCPPJW8d65C6Ng8Psvdw",
  "key24": "4eFghXhkJ8EvQLej8uLM4wM14kopJvEjiBcjjPoNxtD31GiqEHShYQ4osLpC3dQWJYEt3RbZnqRbBKDLAEBYPXuo",
  "key25": "5WEwatXvb1T9P6M1LhgZvLPT7gTXqEpnmDZf1EiGTibPnk4azstXasJ3JAXXC34BS5ZbPjePeReDz9Exiw1B6dGv",
  "key26": "Y3sdVkKjhZ9ieUp9GHQVqUHuyrtVSFoCe53CzG1APC6Jn6FoLe8a4Zg7N5nyDfms6EUo8E93vGt9MRtXMSwAKKP",
  "key27": "3ojo4VrdSNP6J4j7CwyDDb3CBsBNFiKJa1QqXQ64swZ8qLfcT27sCC7Bm6TDeYBDiqg1jzUDuyHwo5nsxJ5rjhBi",
  "key28": "4jrvLB9Sx1kgEDNdCAQuXiQUDeixJPwXeAQsLZBSoBkNn94rL1ZwMzydULEaLU1EgGDmLw2bpE8aKPMjiTVjRYY5",
  "key29": "4sMxKTrLaiAsDb76oKrEgopYLPJgt6ggXdP7QKRdh3eJMi1deijAJGu7Tyfvvx5btPogBWZNQDznsbaggvxsBWTn",
  "key30": "5RfRrQhE9Agxj1smjJNDcb6PuiTfa4XQp831Z4bxmh5fEJvd9LZBP8gJMTXzSwTptpZQvEcCWrqXiNZvQ82sKy7Y",
  "key31": "HCeViz67E6vmhsQEhsUd8xrxzFwemxfZajruyvXU4S2uFQ8i7PcxK3Pna6RnupGD18KuMjvqZKRvz4exy6KisQB",
  "key32": "Em9JrvmZx7uRCKtWV4ZBzxjFzQjmhVTPnxpiPPm7p8YgQLYWtqgwqiiU1uHzmtvRXA9YbR4sF2mvZBNGvgNPWCM",
  "key33": "4PeRAtM95XQmaZKxEeAZNjgJRjerWebQpfJcxwjAmrvnLECzEEcm6boLT44b9nCiUWCpr2btsyif9ustNURBi67U"
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
