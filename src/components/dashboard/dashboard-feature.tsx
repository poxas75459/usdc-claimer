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
    "4jo54zw93kEYBfaDXbwvH9tFhiZYDSJ83AehuU7J4b3EZFphsDxD48VD5Kj8X1ZudzxjQRbLCDjqEVc5hdC7t2cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8V4xiPcMocQ7FBoS2cthyuR7ZU4uuTizgcgq52Fc74Z8n13cQ7JYLb7BzJGzbatrE4k1fixnBBLze8C1gTwrmdr",
  "key1": "49Brd8e6yTDrVZGgxVdKpReGSK3Rqgesz7JDq5gizD6B2YHLb2UKLtvvqs4XLAX91ctLgjGypJ8t6qK5D2RmP3h6",
  "key2": "3Es8zVqi5EYCN5GWJWEdmkqtDJNRSb8z9CKFXynkuVo66eSzdGcm91VF9GDJdUG5wAnNQKuFTTAMc3TboCLKqddS",
  "key3": "25cm2hFzCqSE4HesohBivCKqXZQM87Lf2nr5Z4Nd6XyZQuDafaU7P8czyzoiXjRhXge6e7HD7hQp6e95V5E9Tc5b",
  "key4": "37JSfshJgybCViUnP1vQ29RDqPzwpv1dYnyEYiZmDX37A9ZDcEpzJDeFqejVXPdd8bshsdtwcJ33iemwu6yjq8f",
  "key5": "2KtmtbJEenzoMb2pHtgvthYjQaXqSafZyq4AMH8Vu2xaweEVePUTtdrwNi3xvzAA7dfdBqmWZXHNbAxgc3yKAbnh",
  "key6": "5D2RYdarKXPzgAKte4sjEWZ64WR1RqtAfWD7a1pjqQZp3QQfgPtiFD8HttGnJ36Un9JDF1xvZW1g9ttzecTFer35",
  "key7": "ZHM5z78ESDmaKiUKje7RGRNymFM2Za2h9BcW6MoyHApBNfHuGYVqEDxDceXJ7kB4BKerCn78ou37ykxQqDGxx1G",
  "key8": "3CgSc4gcDDyrEgka46cdKjG1hJJVqLtgwF6tSbMGbHnCbqoU7vGdLv6mfw9Ege9cSjVw7tELCAkNs4VHF86Cc8aa",
  "key9": "3S95akJzBQic2QiYMpqT9ckJj5YC9CA9cjEMYqnoY1VGcuyPufjF3fgk6CYmPcRBxSXnbxpp5HB18s4eUPB1i6Wc",
  "key10": "5o8u3tLf51sk85vbDtB6hsVzXsekQEzTJKiqhvvDaWLL5Vd5vD1HPneqfMtHiDZoXxuuo6o7YBMUB3dAHFNic1Xh",
  "key11": "31D4rvoqSgrZUqHGahspb4qhC8wDxD38BXA8YTndg6HRp2RegzxsVV8yciHBPUYF7789pph2HCqm5u7ZCvNNN87T",
  "key12": "ZDgCihZb5wVdAfaJP2TXPJtLDWc7hxxdCqoTfpntsb8Di4VM4Gv9Mt7fyxadD1YUpjW75kop3nBJmVnMXTnDzxV",
  "key13": "3QnTVUGrkyhRGViUMTWDs6W3xeG2EKtBB2HRGtiprd33muqPetJtEitvWnWaX76jCnxrKyoi7RE4pc6kFH6iPGAE",
  "key14": "VqNAVrXw1pFjwX8hBWByLRYNNBbHFmPmMcJfTqqv9Xgbeng8wgVzpkGYFo8UecaMHzgHNR2MTBmr6fryCqP6ENR",
  "key15": "2yxeVngttADPHCtBBvVUew9T8EzQYWDPJGATnAwrNE4XatNvkb9xLHb5rkUS3yxmDEqxgE8rQBNpBtQinhpf5QGS",
  "key16": "3c5GSgw4R4uG5VysMeAzX5D7mQWKnR44G9GpjyXHg3oG6FxbibrRFLZ4Jgtf965cHUGZgiPwBgguGu5tHH1JN7jR",
  "key17": "5QMLYcGUsD98zLu2qyGwZLfrg4VFyPeG8XuyCKtBfiaTYSVrTUFhbEiyP6Fzc7o9qD7F2vDSaRcaHdeEueDsfPTy",
  "key18": "3uBFSETyr9ZTfL2k9SqwXgdisxocF3ZQ4EPwMwyT2FMhKK1W2n6YahX8b55RUww5duCoCtL34uFpuDDdeKL8vKHw",
  "key19": "5FmdQDVT4nXsdwVfkZDPrtLz9UJL9Gwv35dSQicRUwwX3HjwbMJVnubKWj93rkSkyP2gThnFVbrTWWAzigFb2PQL",
  "key20": "4RJyUwBBT94LTGNQUzK8b7UoxN6vB3Vux6zbnJ89Lgr2vpwtaGXEFpYULxLMX5o6cu6rYQFSD8PF8vRF1f92cqfN",
  "key21": "2sC1EDQJPrVHMJaBKhuW9MiAP3XZw8P4YVK9NCkGQtjfcTVtb64cJCktiz8indY9TRLf2DX7SUw21MAXMcZSKLyF",
  "key22": "qrCGa73xakaqqy957sdM44FYdPVKQbFL4NdD8zv92WjH6SYmJTLyz4xXZhkswXUsdy4HQa9W335NkTw6Kb1QQfa",
  "key23": "3kxmShGHukb8GYC28u4DuynVkjYLuHqFmdJPf8kLFKJVp2CrSn2frBThnrr9uXseMs32piWcnzRKyesENTBedcWV",
  "key24": "3j3Wnrp8cmzehg7jpmi7DrNVSVhPBWdMo3SRYz7dfBJwiWEfgxwRHvuwwY3NmF9Ew2Dmki2G26uhgqwoBCCYnGZN"
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
