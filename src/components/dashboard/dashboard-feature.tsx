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
    "9NWq6HCEehLcpuezGKtJFp2s5r5T3viMDW9gmDNECFhYkjFsxdazyy8oWps8v5xkeFrwxsoWKUju5Spoic5ctiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGEaeefzUeMPYbmPvUCAF6Rg7N6Xx6PbmHVQbXj5zBZG9eRRMwupAkaa86YPZ7g2ZYLtNskJ9keuCDTX8fALjvA",
  "key1": "3JVmA9mtGJCWB8XVjof1PBHyW2mMHTJtforLcwH1mCnRgdEABQNJVPkLc7x6WAELnGDLgn8Up4CgrBzS97GaK3Ma",
  "key2": "jD2hgQzYujSGSdDotJmVhges42gLL37jyV7cZQDYZk9yjm9qxyaysssymqv8LajyjwPj6dqYGDWWFzanaT5sT2o",
  "key3": "5NyGTkPPKdSjKK1B3NtKQRmoqbP15Cr85DErgkNDPCvrgFhQ1CwT3YHLAxRe4rh7n437QbYDg4GCheFi3NwS8ue2",
  "key4": "5MqVjnrR2drJFSXs1PbCHGVTaB4SFewGJZdFDrAbJML1akcV9H7tWwqUT1CWct5PhYpb5fzxoVZSREKxCUtFGhAR",
  "key5": "25XRZdEDi3noBNomp3AkJEmQykBPzWQyVDb5WoVLBLWcs6jjiGaFTqdi9st28fg5apbdS71FrDXLeMNZGmyuYjNo",
  "key6": "3DebkeUKq4EZwfHCbY42JfhGSA5JpiQ1dABTn1FhmHH7DtazpRrksWLCiCsTGJxbqLBS9ShVYdKtk4juokD5bKwg",
  "key7": "3QmVFTkF8RM1ydTDchuCYRuBr2jEqCWxDxfQ6SwLayp9mz8q8dDYmc3TrDtCkEqpQg4ZG6ko5k1MHG32CKWd3L4y",
  "key8": "3NxZL52hK4k9Yy5xEFrk6ddKbX3P3ZRKC3oUEwnbh5zT4sxgShnz4h9ys56QXpxko6wfKbwcTaEe4LDhaDoc1FQ7",
  "key9": "23bRzG12ymDDVwWMMVxUJnzdEHVW2gKsxiLBtXEp9BuAVVirGj7cW6YGvWgYiJ5dmZYbt1b6MAopAj5ZtK7PrKXa",
  "key10": "34LiGttzM4Lezh2HxvN9WTivLQmqBpgFQrBrThrZSWB33QehozgRZZadXmWGVh3aeCF2Z1z8ayrDyhrgbqK4LtPt",
  "key11": "34bDV86c7oVub9Wdvqx7ASnsmPiPnJHNWzi43cCGV4X3jVzUSAFG5xdLDTspRWR6PHgb8ERey8zAmLZucHQDRfBS",
  "key12": "3VepGibGZ3THNxH24tuVUcq8gjGz3e4aquuXKGQ8tVSiRkH2u7evDPCEJNwcjrb8xjjAcPaozRcxq5sSmCEbRXJR",
  "key13": "23qbr4qibYsG74rKHgB1jLaai9Nh81hkH3S2Pwt1bYTjZzwffCZBV5N4Pd5eTJQeu41FsXrKVTnEMX8D1fz9RWM4",
  "key14": "pq85SdGEVLFu3fBXk2UFzYmMyPKGH1Q2krP2MSvB336YSxkxj7WEcbny4iN1VsKke2g6sZBdeyoQ4TWibEhKTJd",
  "key15": "5VrsvwwbEbyAuDp5JaQ8NEXryfE5UHNs19dYzgeEEuEu3984YMZ8kFekPuBgD1xbK7MC6caNYHSQG15FFKPXWnW6",
  "key16": "44xufqVnUmLpguAxzBvjez2avtbb25bqQ1xXgPfcM3S1bud8469rL3BDmyjZLavLvVYekb1iCL9ytXypjgyMmb7C",
  "key17": "3HLxaQTQYKuH7kkRSFuZZqqmZQkr6oP6mvJ6evum7gVxfAu66JEosF6AP7EQbyjuj41wxWpMWjGKDmUBZYFy4816",
  "key18": "4thYRr4X4psJaC6decyRUWFB1BtQ5Wgphvs8rbCqkEUmh2nN93tEeeEfKuUTS4qhNHbW8qCjZBXKCwcbNDkMFT97",
  "key19": "2Cp4UcwrkrME8FjPaZsznQ7dLuijT8vV9YXFp6ihyiE4MUYGj1ZyEeCsF1pnFkDjKAojL9uV648w6bsaeNbDP5A8",
  "key20": "4t7FHccLBf8dmK1rBicCRMhxL2GmM6ajjfVtiy8sfkrfB7CoFqqA9SevEj4cYpHUdKTnctyXMEJ7oc1bfRcrNodb",
  "key21": "2BuycVK9ZoQF1Yp7mhS7bJy5JQeXVPB8n8Mt8pPU2ZGYC3jfkfhHocdAKGYps4GqDjHd97Lh92Yqzo2EjFYbXt6B",
  "key22": "5asPMACjBNUDVFo3NjPVpXv2AVFW4xnWsRtdJeAjbLZQhbbVrvYkj2EUf72Ynspyjq9uHXK8BFZBq3veozRQkffx",
  "key23": "4g9QsgxMQdTKSxvNJNYb5jBKZUYG7x4N4MSfsAKYyPusRBCFcHKQi2umLiprph6viQz7oUV6YCk44zubJNzrSgaa",
  "key24": "4cv974nUYYDC5fkD6E4Q8ajojcnsFg6K3gQJQS5Mgo2Z2YbshykQFcFm9t5vZmhCsryzq3YpeiSexCqvCn8PwEbQ",
  "key25": "4MinUYw3LtHmJat7BqvoAu2YGmp6Ms454V9fgvZgejMmcWdfZnhwkoMF8KuVhmsa1hT9UcjhAnaFoH87pLbuBMEs",
  "key26": "48iAMdvi6FSkGnpcq7Zw2nQttuhtXa1ez1isQhkUhm4LNsvfmnqzF8ZTTNf1ycsPfH5PRpVSmrzhDxd2wLBec4pb",
  "key27": "3eoUCmrmAgCVjA5FTwtFTC6GXYuQLsfm3fNGk86phrWtEku46r1kJPZbPpFsMrfzud2E8Z8MzskkSPAR2w6CBqpT"
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
