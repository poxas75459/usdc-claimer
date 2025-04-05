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
    "4Cq9JQJUs9oXj4gqmwNeYag4wnWzvCJUgJ4D6HiTsh9s62Smi5eRTSD3LZ7qUaAhGcBPgidRJ6PjBm5Z8zwhKoED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g8mW99UnFfqEc5nTx2qmk3CatQFusM2N96RrW4Cndn9jDZ2iLmympswNGtpDw86Ehcttomf19UfmJ3QJJibbcw",
  "key1": "4QBBUwvGVqh4tdMS5FGHd4LTuVtJnoovLMzHnAxo6bkC9QwtRTNHCZTuN8b8y4HBnzEzsdGJ4u6YZ2hB9435C3Qm",
  "key2": "2ssQe1RRuy3SR1mRs1bCfsbPpjHHBuhn1xzKTe8ep2zhyycgvmV6FD7RJHoKkSaZPtxbJDttxYTq5bymDq3KgG2M",
  "key3": "3FW8enyjQWcDgNate8Bn19coXcJbYpenYAwLjgb1KaxEnqTHxGn5Y4kxvxK7aNy1nrRRyFLvDvYN12Dwz1oUa6Bi",
  "key4": "2ygjcNHsEep76kybpFd6PJ5Ar13gzbbaraxwoBfENY5wP7YJCNW5dDUmfjbCqYQUfZWUbJvcQtGwG5tmZGsMPzxV",
  "key5": "21pD2oJfx6His8s3hrhj3bbMaN7tzK69cwK9RVe2mK8cnN8mAfJhozYXNZnUqNdYyAMBhcNvjrP4MeuQLfJ5HZNw",
  "key6": "DpHEgujyCitC1M6MiFyqEj12MGgpTow2iHKZVwiQdeGbvnzKXsoVZbmHQKq6gR2fTGV7DonDUaSVhNwtxCidYNj",
  "key7": "3LvEfMGJ8qQKuHjnA5tzk4bZSFoZFRdxVbtX2TZ2dMX3C6AMC81am9KUwj6NMF6ech36J3XAfSbXaDVWJeKEdcHf",
  "key8": "4APWqKonCdvh7Hgcm8Uk4Jz3hM7NAEUsgm5WhPefozhyDQBvvU4fb5ASU9oA4GSdSn2YJCJVNecn5qvKzRzTLEne",
  "key9": "2QJvfyDizn3NBpd88nreQNjimgcyYBNkmTSXmDpy4ea3vEQ5TvKDeBc726CoBT7TC9rLswAHsSdsTh9a8KsZz2rT",
  "key10": "42fQdDuw2cDEusT3Ubvvx1wNzVb17D4w8xNwBK9AoBxYbaU33nG41ktGsLSS2547UJXMH7QjCm2g3Dw8SuBtvva4",
  "key11": "nWAqpRURi6tmmTLDnhSksy5xqk3HP7jC3bdXiPwNH3F3B38Wz6hEEhGfUZFmYpN3NLzUwoxinNH5JBtjUijuu6i",
  "key12": "3Yexq9r7M2pXcinVnAK8JtcfEmUxcxrtAjYPmj2vF49G8eGj5w4CgA7caCat6Kt7ytE2VCrQFTDc7JZvBvrNrcNR",
  "key13": "5jhCgBYKYvD8d8La5bZ4wLsxfakakHbm2XdecF3rn2iJ5wFtFiozs21m4YTUrgnAFYSXQ4WBgpSRnoZ6vZawutdA",
  "key14": "31ghg9oSTSRQSug3XAZCyCrEgP9fS6TmSMppkqK8wtF8yJ5n3iAUAnB1XMmZ1x9j6iPAtwXiDexmjBuYgracdKqD",
  "key15": "24FGSqNZ6xX6d6DP3EBjE4JLRqJDf7Q33Skn4ygEG8BGxMSMwpdJ2KCaxMuv68qmXxbaYUXadcP3Fm4qCZuUJ6QW",
  "key16": "5pT5GbEftSaNoWza3uetJMJVrAckzCqsviV9tVrn9mo4gzZXrRk81Dc89nnEG4BjGTze55XZpkxm62uC6JoeEMy1",
  "key17": "5nbtkmaRz95GkCrmc2tNGfDNK26yWvrjbVU6erG225hRrPbDD6Y3u6MSqh6CH1Dn9HktcvnPcAkt7FBL3ErafYus",
  "key18": "4DnmdUTi5dMjWkKzXhL57iSvzSsmTiBKBqfgmarY8ttAhS9NZ6fPeh1E8iwsF1e3cgzihVkFjmsiABLZfVE1D9Y5",
  "key19": "39nJZnVPt8AXyQ4EyGeCLQ4e8ts74Pey8utUPssP1aum8TuJMAFR5RQUPHjtjYUYPAgq7Q8Soc9RCGJmuKWuPca4",
  "key20": "2UiwfU2K8veR4eqZjztUxn94HQFVgoZthrqmSnVPo2JeZSH9efjDU5bFVXrCJMA1rk1gaaqch5eayFFc8sVJaR9y",
  "key21": "4FLv1HgwqH2YNvbvYoD6vkyuQVYe6eJQRxDdeyEXoAU7BN5x9NGDsLNB8rqFmQ3PtWGPCVYQ8xMdQPEU3EFVLz4A",
  "key22": "37uq9pKGRLTgbnEK6M2JKF9UfRSkThmprg74dHDEo66yDiD4mT3SNxWhDdYwHvAPPsQzENXZRWuQVTSPjf7psKpq",
  "key23": "4tPyfXCrChmuz8htTXsvVzVAA2eTmVjLg24p1sxDNPtkMofEKV5cjMtVicGkioKzXwBbEY14m6SQTawmnHbqTXJi",
  "key24": "5wk7AS8fyFfrwjGEgS8iaSpHQu3ZRJYWACLYqFAs9Lyn47yHcrvvN3GMFg8nHHK5WHGvEt5ccnso734Tu57UMPrq",
  "key25": "7SE1gZTb52wnentFfSG7mdF1SQ7abPnxtv1DMqFCwHTmdzaDjgsikgRPjqoSRf5vuLv4xMaZmwvuNFef3H52Ksu"
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
