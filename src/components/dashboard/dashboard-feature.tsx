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
    "SHbWCDtNFQ1kEsz2EVU5M1CnBfEMHdGU2RZr944f88xy4hMohja2t86Lodbj3nVeWgWERxgC3ph1xHch6XFh1Pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JqCKebZqgQVRtKgZT1hBRjFK3yPrTzfwAf4y99DvJcEcSDeQjdhSV7gX1G7nJVTfYuFhNTkoX7rLfTJFvHoYBZM",
  "key1": "5HDjCk4gUZXZpgyeH5h7XMLiGbxHSPQDqMdSASR6MLTnThuDjEjs7WNPu3YsYbEgXwo1LdsnP2ELoN4tG5tptNF3",
  "key2": "5N5xiLvCSjNiBgu8L5DWMwwhwfhr1uAfuLjTQ7Mw9UydHe51PhmY5xCgonij8DruZQq3rW5FZADQVzDwfWiaLixC",
  "key3": "5NR2fxyuhus2Z2LDE3b63SBLBvF4wce5HQN36cWbvmC1U5DZVkuH3mJo5ErBwzHyxRREaw572RDJ4nHXXvQoN98B",
  "key4": "4UV7ZcaQSPaqE4dj9jcPk3aBgRW8B6bY8aY2uY5V9ERLVv4kC4Uwfew35AUwXsG61wXFQr7CbrgqB3Auw7uAjZx3",
  "key5": "Fiymr3bwjGD4DUPdpuLCJiaGdSVSLixvDx778pB86YzQhPmSJ88VJkPbsw7bqDsAphAtrskbm1RACbutw2DgoXJ",
  "key6": "wiQ7ef7nCkTxVZTMhUf2dRvQ2M9GZw1eWvoghh8Ejvxj4mSsFDRqeXfsVxoBHdmW6DcoCBD66dPyHqEuYXpPs2s",
  "key7": "3XUQ4bB9ZTe22uhoYu5gK2dyBRoJzUQbgUgUYXhJE6NX6PhZgqp7y3BvWAWDDBmWGde7y7zhnaC4PU98exBQSqpm",
  "key8": "3PtrcPcKKuEbGK2oNsMSFAtAjkAGwgGzik1MazkNPeezR93ERedw7GD5jGd47QntXLemLpD5hHs7PzWzLL3YjjR6",
  "key9": "2LFS92x2nn49iPTkSdQWoKDQvkjWF6sTUAjY4CEvsLDANLPzjkjg8iDRfDmhRQjwn3fVB1WBnPpd5u5EyTVdP8ED",
  "key10": "3Zggby7EoECsntHAqABR2VtKNQYWbPFERt2SUgGW4KTvoEKJFdqroppQBkb3nVVDkLSEgQap89kuZtmUsup1J5wf",
  "key11": "4oLjtJK9ihG25gJ8z2QN8NbiVyBDwYEZ8f6boiwoQejvdn28f3HTaP86t7YVBpVfHtyLyYvv9JXuiecFbg4ic9EG",
  "key12": "3i5ENqbNt7ddydjY979HCyrcqzddX1Kfo7yzdAZJ8TauQqAozkPB1h6NSjBTLcjTQUw5oxt6yFb9cpVJKkk4hzCE",
  "key13": "4yvBoUFbVeoiVz4VZjtKe9A14rDbLJhwUWdP2ovbb5ehf3Tzvda585SKs65tRGjN1rrM8voT3RFvdPATBpiufcuW",
  "key14": "B3kDDk8Y1WLgAq8JjzWi2dkSy1shHqJUeb4LRK2XHv53VpRghJDYurUKAgK5Va1CbLefvbyzpggYfm7qLryD1JT",
  "key15": "t3DuAKhBV7tatd7fnh2URHdHNFeRy5ZommsQexdyBTwTq8ELF71e8gGBii3XXpUWdv6BzmtyDjBVGc9vYe4mQor",
  "key16": "3sQ25XCGBQHxpXPFRiHfTQwJf5cNBBCndEGdMryu2iUv3ByPWDpdLDQBqseeLR7Hw8aJ98DBShyVUSarHt3FuKx1",
  "key17": "3bWKUFjMBKfiscy9Vswr6y3JWGzjoXRiWcuCD7pdQuHJWFMdU2vTu7JJHtZxn2yEQHnE9p5Yjthc82t9d7fWJ1z7",
  "key18": "58jMNU5tkZVRgFMVwEq1Sub8JFhu5DizhvzeY8o9t4qCmDMRDM2qaNUDTw43JB4yu4CfZPuSDNjGNc3k3bXop6RW",
  "key19": "5kJPZ13TyrmUaDA6NNEiqEeB3MWtG8qz8WgKcca3Eooq62h4pqBfTmWzTStKbBmaPfaSk4v6TCC7SDZU43WehMCt",
  "key20": "5CVZd8DusFCRv1NtJqfZqvctETnUtixycCeYCpu9fYSUJFLHVFJMkwPUPQYe8DaBsdgBqCRVZwTnrKHHrTBhcNUo",
  "key21": "2VhmALn2TEzPWFpBXW9ofsXApwLrdQoB8e31VftRknwb9VWbPxmBcXggbny93uLsvEJQdDYkSJgoSmCUskFTmBba",
  "key22": "vW7kqsb1pvfrkHZevENFVAMw1PSPL3L41JCUDARH8jYhvqYm7xnuGCUvYE8avTYsZryQM5yEH1LSSCCeJq6BvRy",
  "key23": "3gRGZwLidxjyWXSBp2ZYAPArc2SRZ8ADTXYa6hbCgU1CbZvGipNhmKdxhnJNwWp3mxAsT1cZUWr8jgUkUAGZGZHC",
  "key24": "3yuo8NA7gDuoP9o1bYEDRbvNMkKqcwUzaLrGCTiYps38BroFk8rgC6AKLB21CdSExm5dkwecQpr79HG7BqpqSpW8",
  "key25": "2fNN2oD7iQXxrSYyGUFPNztTQdEanSqcWffB9kLhjPSSMZbG6uuHSL27iDn5wyiKYmdXdFdwWrDJp2DQSCfXZzGM",
  "key26": "2G54iFidkEgmEZXaYN4DZxbg5oMANn17oT6aJWh5GYADZfN6q5xn4Gn2Fhs2EzEBRDMSsq4Du6639bkGQQ48BmS7",
  "key27": "5tRqEUC1ZrewDHkSPwfjL2MBz6zLoAV8voxmkg5j8ftMzia27PG6gPL7C2EZhrsJsEsbAw9GEDyMRwv4JqrmsNr3"
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
