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
    "29a94vzx4yusxukmiNZyPRn63iJe4GUurU8kDv4qh5VXnoK5L4qFaS6wf1rXer6Gf2ihTN2RYbQA2Z8gQKCNcp1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UGX1mu7HjjWq9hpreqSUWNycv2ipGKDXWBhJvX419dQj5Wk2CZcEZmXh7sLVVgRX6SEpLTpXJJ6uJZAJ7oSn3HU",
  "key1": "4doKWf5d6zXgqFXknK72eJwru3oRos76oK7eUHxXA3sFLdBFhVgMQLkK1hzdZr6x2fW5taa3B34ctnNd7QCnJijK",
  "key2": "47y5fEgRqvog9HLbNTWqmfrLeEjdFqcm9p4SfS9GbiddRn12z2Kgp8onyt7ju7unn3RVxe44yUVT4JjuRp5kNwAS",
  "key3": "rUz59CTnr2Bfc6b3SVeQARpAJKcz1hjX7xrnhFfPQe7Dy91WsHDwRitmkiMLHHegc5AKaKrmznsjiRd9znnfpmP",
  "key4": "67hatb9yEaKLd163J6UV3yYkPXuPx84SDjB1UWsj874bEBTWi5ivZ5mRFZFY45qdCan5BVFaMEmXk1GcpVpGio5E",
  "key5": "5xt7gzVGjMPXpcARmU8KxEA9snRLFihFMa2pV6ftHoAXvLVfHpXcEph8bW7ShJ34qPw6SopLdiS6KzPLPd23hezv",
  "key6": "3eMy3Qcz96FUGzhpKsLy3hyMS54fz1DUzKoBdab3H4Qyxg76hPw9nvWBJFoT63Zy5DoBmYnH6X8XZmJk4nfqFg2w",
  "key7": "4TJzDUfXmQbtPkfJzyprsYCmLwYFCS6tVdxmAzogEYQUpE8rrMnCe2WjrJAhrfu5PcgKGX3PJh7qXPWTx3y8qEvY",
  "key8": "4C35bCcCeLzBCSm6PB56d6NrbAQS25RK9C9UE5qBc25FvC9Mmbi2bGRD97scyJ7qBSJbhgoGRRR2d6wBpTyuZsfB",
  "key9": "2MogQTLnytuQPBGz8X8fd7EbSSUgKE4KQQXmENMYvz7MxYEMS7pXqAW5sa9QYeenyqtcLP2uqCfjkPbtfsDMVshG",
  "key10": "4aG3SFTB73eHsdQEytueLQDDiCtEZa2hXxrEbwLB4s1nx4eeDkrkHSta4xdCR5BDAK7tYseR2VKnTMJvytkshLYC",
  "key11": "61H7RRDLuyJqjtfeyRVGX26gbTm8Sdq8J3yM3U8F2arMPSu3EnTwpQ88KKJHX3nrbTUudysoyiYsCCaaxvGvhYAD",
  "key12": "Qp2V3Kqnf2CRtpuESyVqqJCuYDRWYaNm3DU8vnjKrTQ4voGHCnWkejMWGEEe1vCXt1y5sRDAGEc1w4mDS3bcwkz",
  "key13": "2CDdNqwcPtRBuDcreAAHrH6gcfFjXdBScYt5FuH8czAwEpQwDkqdA6c4ZHZyQw6b74HudHoXLpKHLshkHRQXB75q",
  "key14": "3BxjiKfVTYuT2oxicjYjkRWpTe1vw6ubaeCbDRY12RFAtX7jFvCnZ7anA8xaZVdnvtMCZfjLgLQw2yoZeDfamtT1",
  "key15": "4zjAJb2GzYmX1ooAW4LFHJ6uM2K6dCMhzytDdNuB9fEEtDdfCWPaW6nUbGGNE29DnBRQceHrDcCbzhbUxnDqf2pb",
  "key16": "43VBkT5sHK7tGnYPs3Lkcn6Hcnd1rTj9nz4NibBhaZvdqmaoXaFFRuYF3enVYdBLTDTDu5wGRFHC6TrYMUBeyhBk",
  "key17": "36Kvm3WwC6MB5mUwboVZTDvfo3BYh9AeHY91DmVXLfcejHgDG5RaqXhSzp5CR4xWk9ErUR6k7XMoELF5dxtpnjMk",
  "key18": "4h7qSkoeSDiXL6dm5YN6NfLJUR9En4Xh9RCc8i9TnhUWTkGUN64wapFd1m6KcAhXLR2yji7sqjGZ8B3dfKAsT9iQ",
  "key19": "4iGRoo1ASZKXbPxps9tzjGyTK3hFdqUWRNHPYd1zRizZkR2BLHFHr9qc4eo7RAeNBrDnQGd4NAagNrpCXZviBPxy",
  "key20": "3McNm2D8VQXgjGHCUT466eozTKhZR3CxeauzXXQ1MMjxFL9P8wXzA7B21vomWZ7BnVMuEFAuDNsqy7wG6eH1Y9zL",
  "key21": "3WXjMb132VvPng5zggou1ZQmz6Yo4rCrELgCCaEqttZDQpPYE3HHi73Ae86pjWZ9CDEraoaPbLV9HDmK2y24Va1t",
  "key22": "4MJAZG9bucvBX9XYHQViNZgz6R9qZ6AaRcwbh53JgQkxfAasqNVnBCH1LPi6s4ZxoFgCNxCDt3NcoV1AkjkjLJs7",
  "key23": "3UJu92hJMmqSSk4z5zqcKG2eVH63e3JBRc9FzzdncS445XprKBURuVuRFDb8NDgZJmNkgZrXwBD1SBwrBUKieUZE",
  "key24": "4Etnqmpj5SpNPXHLKRFtC43CQM68MZ4xhkhcX3TkyDiprmg7NUMy7MA6mZhk5HSBtBVq2GrvWFJ78kHKvnn1P13a",
  "key25": "3Hg1wipgagtjUrskPzphqkksPYRZxubwKcKvHnRUEoqDDZtL1yE4HMsjmHvnWvYVN942JfLJ9yy9wbMVRBKsUi5y",
  "key26": "3dNL1QXEy4cd27dk6FhBH21PbAwm5BpWUpUrSDee9V52oHtAQfrbycLJknk7eiCyqYKZVhUywNh69kqoYkPRgbxv",
  "key27": "4qcgmwhnoScyR4MhLfSnoMzSNDG2ngNqKEUqhjCDPr171JbwnBraMbeEp5dYyLY3CozY3GAuCeiiBgEKJVhFLRfa",
  "key28": "3eCZ8HvtmHuVbA8qcYP9rgkFvQPESZstvKER7PbwyyTcUkQcKNV5yRsE9vXyqP42EdLvSjsZFV4pmvqEtLFyAL9K",
  "key29": "4kBHhGGE7AdWwa2gRdNDEyXfKGtWzSQDx7zEU7VuRcj1sWJ94wFr6rD3xLa2ojgK7VpqHVGikhVsXeLRQoQu9VhU",
  "key30": "onPzx1kmbKyqt3tGTZyMHAs3KfKLWfDf56GVvYANNK2vrDqAFse4t4knreUSEoCNbVAQZ69rA454Rn2gN9iJ5n1"
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
