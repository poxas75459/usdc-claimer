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
    "2yzSUaHk7yZAPeGYeP2C1Corr2UiUw1GAcDhQUpZ4tMsTdsNzuvc91RyRj8FuXVwhg76XMcFVW6xtW3FEFzjN1F4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnDkL6fVtge675aihc6b3khQvCihEFW9cQoRRFPp1p6nA495nwyzTng2Khu9dmPesbYXziCvUJQRvHjHMJjrnCE",
  "key1": "4Rt69TYHmm1L9PjjhfRMckahGjVYKEcRKuxAq5sr6CbVoahrCZk4FGq2JhQCPNAzXJYXCQFirKfG5Gj4oigeWywB",
  "key2": "5S41MZC9WbYSwX4gUKseVHnC6nrSy9hyi1v9Xjvt9yEDxjb9K5tvARF9d6gze2jXzmqRg8YUBzL5rdiwj3d4kmRs",
  "key3": "5s6RSCPrV4HbQE3TsMD62eoTFDvCrJ9TVVS5L8vyyZBawv9Zaxde2LRJ3wXHzkNjtV6t4nzSMqCQkULDijerQZnR",
  "key4": "3pM6ZjpUYGszGVkZkpLTbKUd2hhyioKVsHZPdk32o9PofTTFnAawcHYVkz1QnHD7K3HXe2EzjN2jeSBgJW7uuKs1",
  "key5": "58Pa9QxagNyJHn6UR5iC9UYygqSXTV9srabPi7Amy2bb19moWevpjgd2tVnUAeXdc8YaGa89bR9nVZwihKGsjPkx",
  "key6": "5nD4j3A5nWgLHYWZZz2dwmqoazhX2GvcZ9UVmdHXc1Ma4SBJ7NBcyvnN28vYETEVNTXcpCo2qWrNneqd7fynSXS6",
  "key7": "2VmK3UW77ZPX58zVMHsr5VWxcMnDdw776ALaUEzw5r7XhdcFpN4eCuBDFDUnLmdyrRnqcNLbEerLwhxgFEdii3QB",
  "key8": "3Pr2cHimnESY3txUiQn2HQzc3hHVsNgVtksRupvMpmtfcEjxHmEoL6nAdEXzpLaKnGudxT7ecP1wQRHEKJWCADWQ",
  "key9": "5KxYVs6mBoWtJPTkH6DpuVNGh4oavxbWwbb82vm3f8fc8M1mEWaPhNuK9QFzCYUMsEKwQe4t8zVUHnKs5zZpWXQ8",
  "key10": "okminDcmgdNKGdXe1dY3vJHAW6JEmBQrYV6bLfXYQRa3fBq6ZfvMf4Kd1EMTjq9xRk6ac5JY7Mxqr7btmxAAtDB",
  "key11": "4KWd8bWrfzkNhD9vM3q79Umi4BCnumX6ZoZ6xmhqezN3juZ3VhWogCwHYSRf4mw2uC4M8kqsKuWLW1B8GKiLqShm",
  "key12": "5KSCFvVJvSkzKvNrnG7A2DVdioV3VY1EHUm9Tmu7fiAGsY3uRWyybEWKCoe9CaH1Wh4zJY75CbEjtGDd57zP99Qh",
  "key13": "5aXmjZNRZLcagybi3NvzCfyLWPXESKQxvCLBQSsFDSWPL8ngdKaVoW7vM3mCi5vLbcFHaCsiVNT9MvBXLuxw28xD",
  "key14": "651SuhYvzSXFtU5hHR8nkbh7eM5UTDjBx4QLsS1AM1vEWHid8rwQCvWCtCXafKKSw3Y6PDqrNytEsuj6fRwdmWcQ",
  "key15": "CCfTmkHVYN7N31sxJUm6PaMrtdMYtMNheNHH9cLST31xwvUvbecQZEJmWm9XMrkAMSW67TVR4Sg1LP3JR2ZkMDA",
  "key16": "s5bMng2RYnqRCc4q4bHEvHNTP7gCvaP8Dr3nCDCVzHnrvNKZ7TzZft39xLLwguEkGc2m63PG9K4k7d7fCRTDBeA",
  "key17": "4oW71HxDqbkNberNaJc44yQaYqHCjtB8VHth26p3cQALCh9T8csd7K5JYXi7XdCaRbakdjAAHhDiVCekcGPJVkQa",
  "key18": "2AbWkfnnexFm1CmS6T5RfYdpJbMuDs1dpJySsELMcSKg6AwgaB6VHtnu4NSNWaRyzt6LXhQYnWrUpsWaVPHgmLUA",
  "key19": "2mWjjL5DUQpk4nr1sbuYpi8SYvETTtAzH9cbeRDbWacgL9vbsTZ4Wns2QjDYHpkdcLRP7rmYVbFJhxijMrpzdS5R",
  "key20": "2HqmAX76WY6q9NpJsbWs95TGQV4bcx1dBxBzhv8bcii3qJfWTa5i5hxb6TUpuX1HcV6T3iSfym2XSq4xHatJ8hgQ",
  "key21": "KzQCYFX3zN8dKRVkJVfckSKoDUYznBZjkPFZYrghu2SqXHyw1JzdVF3siYxBid75Ddp1uiWnoaESwa9ELXFBiyc",
  "key22": "4L7oieZXYvtiPWaeWY9fSrqqhvDbZfUJj8ig7YK2Y3kFAaTTZuGfnipryPCA4nhQhP7rZksTrRtz7ozReEXoHHpz",
  "key23": "SBmTns4MseBiE4Z9hyaxuKSzqRb9bd73gRFqbLgVoEQM2gG3f5tbiqvV15qpGccynxTwS3LUJj3iWwDnMu3wjiw",
  "key24": "4ebZyqiiNVVT6rE5ArP7H6GCpezW5NQgQs5S65ERJMYk1omb49X2nDAhUekaACi8PSzZgDVG5EoiJinpH7wgRwbN"
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
