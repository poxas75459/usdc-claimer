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
    "4EVrYieKuLa7eTQpEg3i4HU2aDxcpw7CzaMVjZL44LQgpzgSQ8KtZXG2QgVNV2sNLVAxRzW6FrnsKeFNYrw3hiMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXYm922jdoFe2CXVqsLufSRnbCBAyrWBgzoaQszGuNqgELKx3RaV2ZztC6bu4MHZWgeWwhG4ZduebBjKRZRiTCe",
  "key1": "4yYF3NyW8VzVQ24fZv1TygShZqs6fx1ZPzSLRLVVNoszSUYigNxThgZkDkn21W7HyPtvTs1aSqpJrLzJzU6B7zvA",
  "key2": "5z3PLSwzXoYZjP1x1KXR4xhxuuZYb3KymKwRggTMcYuVNyJiPj82ELhGWPDbK2a7mxaYVDH7hQcPyan2fZD2CT69",
  "key3": "67eigrkiAQJttvvYYN7D2A4rfpGsUvbkHtQDzedqJoaGxeQzi1oXo4TD8LDcgojx7gKJMJDjGQDZzsEBt4h8NdxT",
  "key4": "jfn7WGpq7XZbNxLMmvtEGaLwuSexubHxhN6Sto1GdVp3ZBebk3yDBpMb5x3HqG6CdFaQXQpxyVcZtNJDh6pQhGF",
  "key5": "2mm5BdP6i47fyVdqcvhY141a8t19Q38hBW9qtBGQsrSKbY6zrYVVZ67pZFuGJgq1xw3CQrS8irpgMaxReQJdgPXg",
  "key6": "2jTP78aXbjSAvL93spFhf5JHPBUaz8rAX1LQZs9ZvgHTy3aNDm7hxF7smMaxftvdpQsqiDLkzAyZSGF2rwVKHf6y",
  "key7": "qm13fEEehyCcfipNkCdA6yC8jEmJaBVcrzpf8mWfKAs8uL8DuowZJM33t855ovBjS7E8CYPjHVfcpjq53yXvctL",
  "key8": "3rbmEYqY2sbs9N6ouxT5x1fsSh6ShAY6HdmW5NbK2sPS1Qpx7zL7Pj7sLno6k5eFuubZje4PTkZqRNTXq719As71",
  "key9": "3ZLTVm22QTuE7oGSxCBhz9WQmAGeGHzZxTjVDpHujeNJKnxC92ZuExM45s7zYoChcPgFSjisagjmttG1zrt87fJS",
  "key10": "QqdcynAUF37qDdz4EJVAgegSqSYVf7rtYeWbYRp7Tfyi34RkBqpjhevEeV56zXZgj5DS8ewsC4fWxmrNCXVtY6Z",
  "key11": "dZYDjnKiM1nooDD19qB8JRpwpZkSmWAwLEpYEaqcoE1ekiEuKi4ZjTRsX2kPK3wLyTvuQfoQHkodzRFheLTsY5M",
  "key12": "2YjB2MeJ1ffaNvTZzUpt2DGMDqKgcGd6VekHYMjBnMnnqW8DGqCKbJaMzZkx2TNRffQ8eqcCfjurZkt8W1nP1xE2",
  "key13": "3nCQxYiokivPrf23NxSCCE75r2pBDUru2b7se6iFeB7YhSnc5LdzQMXHXK9k43kz6DT99rsv7kufV9FUawAJ6eDJ",
  "key14": "41D3UmHyttMTfYecL2xac6vtAAQwPYmM5Zz9NjxVY26DX4tVJH1G86eDDZpzhSpJQ7UVrC3abjPNJLxd37gVwX1U",
  "key15": "xYaqimo8wWgfuorkHhL5wtfqsitRTKU47YMHpSKnjsnC8Cpwm1AwnE683Mevkuia7qDksAtHo1fe1GvoquGhoK5",
  "key16": "2o5VBffmM9bdmneTDxhwuaL95B2A3G1t8krnQ6V6cmWopXzjFJDGHg7JRUQ1k4A1kHvMpPHkgdzZZAD8o28qViH4",
  "key17": "2vYxg1BY7rEB5DfxDWSZ68yAunYrVnicGQw2E1TuzF6PysWNLPo1mhGzCqWdgqa2MZbvSba3jGCcQoRhhKSuzDQZ",
  "key18": "3Gv2SfvdwkXixMSPBjwr1kwA4C6ZrZe6UMqMrmXmujwuWzKiz8DCQR6YFK63h2GBVjHNiUksHu2nRtrq9HVLKGxF",
  "key19": "5sgSzSgVscUVnwYbrbppM337AR4o691HNa9keFNgi47k1os4vDAzvmqPCE3ai7Zsa2hC4CjX2o2aNacfUj6RhwJs",
  "key20": "4TAogp5KAN9c1MFyDt9Q2gjjNeaLrBi9FWQwja1BHc85K37UQkhZ9hT72kbgBVUej3rUZWf54p4NNwydUsi3ZDq9",
  "key21": "AGH1spa9yErEGiLMP856cRbuRghqm17LwJjdb7LDUFZbkmHoDaBeM9EV2ucGBrAtRsqRcAoeDNDMXuwuNzuFLCV",
  "key22": "ytXzHXqjhZLwceFZdjway4w5N758yN4SSRWYFWALAdUYEKWhMvJGjptaujHeCdYtFEZD5KQ9MbFgr7woYANUMsc",
  "key23": "3mS9YGDLianLktPaWx2FVpTiNpRxf1jmjqUtS5WTvheFV5SqRjFWr4dtoJDsHZKkWASDtc3vXk6usqF4UtjxgErx",
  "key24": "4MA6CLf3bSKou9GDyHmz1v9Z4FZrUFxcRYqMxNdxH7Pqwt9XF8XHBYJmJGPrVrqmCNNUPhwLpFaRv1P2zyL49pLa",
  "key25": "36cyuRg4Lp16xXmFJg3uM4FDW2HyKCMxUBAWMvEYiMwfe1hfReoxLNebTQUZ4piLUtuyP2zhmKUqmgRxZTiWZCGN",
  "key26": "3nHvpPHVDNbzWXLyw3JqS3no2fTguoQFLeFq6d7nPMCwMAXConanUGn7FSB7CihySSNEmx8mXFJGhL3X43a1vWzZ",
  "key27": "5XwDJb3hjumA8ChNQnHPjfFPoSeLLUsoS6p6f2Am8TREYJNr63zSgKtPNYhzbR7Kh37d6mFd1FEn8MbEw9SgeS6B",
  "key28": "3ihgqUwSZR2cEKPeQrt7H3R9ofesX77zPCkNkMCxwnVbSowMWep1SR7FHhoouXBBztmmArNjSTj2YQFa78CkZGg",
  "key29": "eKtNLv5XE42mMd3Yk7wksJLeBu7oY7L7zt1Nec6r5QtbA8CiHuk8JXePcZ7vKNiWgWEJL5eDpv6gRK22jaEHfBh",
  "key30": "2JKcXMqdUeXJCmtjcpAdNWB47gaV2zEhMFDPM1ugdmqtSn9GAMy545QBqFqfNz7n1b76FVDGj7qEGiy7pfBaphpy",
  "key31": "4hNN4Rw4mNRow8K8kfh4eTavq2EhJQKa1oVYBERfMMsTxMaHuZnvHBbZo8gAUDvNrfCQhq7SYd4Qu3eNBnNNz2N4",
  "key32": "4hMbAx3tHFU1QHW8k7Mo16Ue1EWC8LGB63nQWPoCYu1vExkda9Yis1TPV7L2A9VL6JUEzChhyga9zJpj9WmGi3NA",
  "key33": "3UKtRRsqb2RCrkSVAyhtQHnd4MMtxP68JsvrsTAGinZfE5g7R5Uc5iEHULEMVJowE3cdNzwoF63aC1ma4GHTfsP3",
  "key34": "3GERBf5SGYuLqo4qchfZWJpgDHjieegE3JtjB843XHLFHBuuzYdx5ChTJmSE27zqgEyXAZdLtRTE8FeWn9hLbN52",
  "key35": "2drs9UwiQE9HJ53G8MbjsbiA3RBPFAVqaCyjCgjCDLdqeE43yFZabUcVB1MevtmsFEQVuhxgZkLPNvU6wvfPXeNX",
  "key36": "2z3wYFZ6PXyLDMxco5Uv9V88HfWLC8ydjZ1qr7qaGkAHyNYa9MhE4BT84EVQZSZcqX47RcUYyrxbK5xz599Z3fh8",
  "key37": "65gkcahCSnnvCKJZicHqz58HS99m3DuW9uG1CZN7NWF567xEsQpaKcQyy5REAQihpaqL7GVRoXWYVPTkcXhdjKbs",
  "key38": "62dNgCyTeWPHFMqEcN3cdMATXQgiR7czVXxwf8tcsXb3nVzXGaTVGrkqA5NiqbLJxySQJiSxTY1SdWGpcUb5vmd5",
  "key39": "NxzGP6BycBDDYjExXKTyyXgEsZDjBfnxGfYVfTC1S1VsBiiwXpWvJvTifVcAxRe1RULKRo8P7exxSUF2SUfXNrS",
  "key40": "27F7Lqrn5fU3Bn6neqpFJej5t4vqETXysZHa2b6racjNDVzXw3wVuETTLYBJdkBxDPwRy6DV9X215GMnmZJLmjNF",
  "key41": "9cPKPd7tNg6heypEJP1y9RG4oDK5h1nqccVuaA8YJMDnDyPhMhE5kcVV2ZPZeTKMYFcFkxQb9xiFLWXiurgFqs3",
  "key42": "2gfxwDmpzXGr6RNoms3pkLCBBwjS1pqbaPXkFdaVNSzYiu8YgN9xLLKzPfAuZx8Dk2EkVwiUYUXw7XAWv12RWoju",
  "key43": "5puB7tuobHyghgdTGeQfCb1csD8X1haXHc8xwDZauDjhNP1NSZ5iTnFFCGVghKDdQ9Pi21RSPUazQeHvrQcujf3G",
  "key44": "3XB379QBYQ1nn99sh7NH1ocecHagiXBfQXRceuXyTwniaJwP7EFudosnFfMiejFCmtTdBPSQNGQH2T5zj5XddkAD"
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
