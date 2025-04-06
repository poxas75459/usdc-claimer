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
    "2agUrDayzrfoNu1E7ZEKHv46QqGBgqymEe9ARdBnS26zSqsW9Rta2Xo4HriCeKBCF5THAUQAtjNsV3fAyLF1gm4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQ5xUWfzKPac56i4QnrxRwAXWkDPNZojKPkLp72cSQFZbqhSkTv2fECiKCdJhQG9K53VAoquR18pgBkchogNX7Z",
  "key1": "H1mgEngDA8bTBPaXMX5DZaJug5BXzzHWq9rV7DPzzuT7yqtte2rb3Tj2iieYdFU7wpnk7Sjm8nSZBfLV5C88xFZ",
  "key2": "5EmZSS4hCW7u3RzYKnH9gxRYNJpi1FAoxpenGyhyS7HtEf63hFmgFW8P12MJhFJ4rnTyeAt9zAhAz76DQic5916p",
  "key3": "5R1PjLGfKy3tENt7JA7jWgGjLqzGuoVDhMg1bRkibaboBiHC1ZXQJzcHXKScebaWGb3vbq1DxGwtiSaaDRoCGVMb",
  "key4": "KUt6Qdoj2w3JuzCy7ee6zvAwJDRGPoBsd2KVQZSXBW6LGVxQEX6C4gd4hNAug5ir8xmu6uCQhgKkn7TFjT8yGAf",
  "key5": "4PXW1gfgfAbzkfXsnmbeyqvjw22WZwYbw44Ny6idGA5VsYFgcGfcsRAzGt5QMWVjRedY6jUaSrJWUam6Vmd5P9ES",
  "key6": "hx7irYYKaahUpLwz1XFeGciaF5RqG5P4vvSpRhbtFrvSwpjtbNrW9voZdJs9Hwy4Nak6WvxqaW1MxVG2aVNewPk",
  "key7": "3vtCSZqD4xVLuo6CSyXH18a9or36Yvz4QvMNfGfBeMHuMUfDhVNrdjLBm9RJ9uxDTL6ne6JVBdaU1bX6WjZRiFpv",
  "key8": "CgFprZY61Ds9EeuCdydqPmZaK47aZ77oK2i5htJL4mzQkzbK3f1Q5Z3MmAw9cFh5q6YMXd5r87PKW4ym9qbSjKm",
  "key9": "waY88Q44j9KFpno7uZECvq2NkEsdgYFNBt18Z9YTd7TefYMd5nAhktc4WJweimesYBN7gKpr8sETrk2DE7Biopi",
  "key10": "4r1yLWPCBgsT4wYjSgaVU7FENsUNwXZZVSiVZMHnE1saswiwPyJaQEgteo2Km5mDGdW5tNLGZ852hKrXHYTbQnJT",
  "key11": "F1zqkuNf4ZqQ5sLUx9hVmaWsbZ43JTmXz8Y7pHB6KmwMFtxz6wnwGo1y8eWpr7TkestRtLYoiWqd1NDtpLHVFh5",
  "key12": "5vX4BW7W6vTPWeSVYHJ9eFfAb7yCKYYYWN6VSPnTfAzY1t93pbGXZFtbhuVe7gVtZf3tnic61wK1KVfCB9BTB6tf",
  "key13": "4Anmd3DfdNox12xg5zuA9NNgrbPLv4u67TbDxst1FTvQF1qms16utypXHifMCMYpgaTwmVp3tacnA2Naty1KJRNn",
  "key14": "zwDF3J2ES9T6CyKiS3K7LvBTuU7vvCiAXcrmEyGmyM4xv6gdFrFV5eZUSvsavE394aMMj9gnjz7Q7osp8Kkzs8n",
  "key15": "3DwGbQZnoCYaN94XuHMxfJsKAkAdJNayQ4rgcXjuLUQq7Bnp9JQSqk59uBL5eyCNTjNDrE8asygfnpTtrKG9tjBo",
  "key16": "2TcBWP6qigkyH1oTBaKs7JiTioiw2HC8cYUETYqY92AmqPmBSdtN6U6gYcN8xmUy5KkjbXTpdDcLbsUvUbxg4HnL",
  "key17": "3EG9ny6zi4YsNxhkjruLii8epqYGsATX5wuxVWDnCzxUJxDTRpFf6r8ccvn4Eo2vxnKNW1qKhNUb1V8cANuVTeeB",
  "key18": "23wjQZyezDn16RQGxK9RngaFehE8uHTjNJQ2bnsw6sChgcz1yjfayiPFWtNVEE53yH95j2UjhGLcVKd5hBwnmPZN",
  "key19": "4iQQPyx6EywXuBUJcSKPHQDMfwHruKmafAUuT1SC5DguNBEuKBouaDR5H9P5SW2hfW4RdfQKhnT6atMdCd1RFrHd",
  "key20": "FEJDEE9anuUqJGhZ76tXvcA8mHwG7s1vfhDXCjLrfBJgf7EhsKU3yuPNadt4fWBmbVS72jZjietcBfAnXtoVZsa",
  "key21": "EvE9A4aEfXoGE9t4fbEmAPVKb9rKLQDUNiBw1xRuPjJ4YPDSXkTBSHezHopAT9WBbzbjGcqj3x2VJPUMmvE2Xh6",
  "key22": "2Kvm15d3yevDzqAipao3DcYxETt8wyL6Mz5aTYGwNy4BpGkDNZr9UT5GjPKQrGw8PzPh2oVZ3Xj3nawYfgLqpT3j",
  "key23": "3SNNpzsjiQrwTYETJhCoanBFBkk4uYfjdxv1bzgKMGqmVB2igD8xaCDi9QtEHzWJqoL1UE9TXWMsDzRhZYoyMdpn",
  "key24": "2extoVBE5kLmcPr3gx2g355cVuSHKgWH8g56dqY4jPz3rujXNB7VUeaZjSFvPA9VdEW41vEm3B6nvpLawoEGPz7V",
  "key25": "5szRuUjk8YqC2SbuiUkBwMPKY9CT3iJZQCv5GjjkSrCE1jVFZJVed4ahpx6GwzV4MtdhT8CbMmywifa7NBqpd45B"
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
