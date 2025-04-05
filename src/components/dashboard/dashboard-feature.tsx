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
    "5XrPy9hcRtXUxqHaMrutVffjufaB34nLKc7fb6QW1ptLmQ8TfPLinvnRm2sjxhHkWN9pGhGDbUYf2EN6rmAZujCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yhEUqmT9wwiUkmiiu1yJvNaaengei3CGo57k2FfntnREZrsUCv3cinMb8kUbPsC7FVnjvx7mbwMojEWjZXBJJLs",
  "key1": "3gSrkGQU9UE5jXRDkVowM4BvhQqjpWxhzKvVx79CVn3WrtsJmfLtZKh5rXV9HRiv7uSTDLRLRsdM4BseGJKbSmrE",
  "key2": "2motspSuk9HQiH5zY1nPHtNo5objxdKcn4mFjAuWsjL1ZzECWTeA7SqE7AKXv5PsHKjbySF2BR9xcN4NDQkUj6Z2",
  "key3": "57C3RGUves8iQnTQxmY45ZXoNCaWsbZJ3CAf14rLTtLKbXhEvCJgyQy3Rg9T5FHpf2rND7UB6uFEbR49sAVseXsz",
  "key4": "5Mt2tr1rTrESsKbKFPFR9HsPrrBvP2i6PsF2XahWSoSjeMKH68wwidUAiZTCs4a7rFjwbX4AismkJqEXX1EcSpTG",
  "key5": "5xHw5mAB5jJGAAxZLNuZAeoN829LnxCQtocxUqQ1FjyiGAxr3ADfhQ7Z9T71k7mFapLhzshgjgMkze1nyed7isCT",
  "key6": "66MtRRYKsspx2TUyu67fh5mCSd7Hn8qwVJBn3g6fpStXuKiqtXeBh9Cjnp233EAs4eopKPvFy14yq3vLDj4XPCue",
  "key7": "3MBzkm611KFfEdfgSirSfDTSpvUrb32nAtZwx3HxeUZLKU8Q7FSpVwV5oM7kUGiqTRVbRWyiE5rxM4oPJXsoTnmc",
  "key8": "GYNB3YGbCzwmPo81MQ7eDWyJ7hjC46zZcgSXxKaarx5Uvf1jYCdBH8b7KQoh3JUfSmFTmtD6e9yqj1mE9zLhYty",
  "key9": "5hQeLYqF5Kx9HGHEv19Wys57xQyFAX8hpN1aF5JEBfqpC7Cd9WLzLYMN85SMSarEx1sQTSdEUmoERCsVSJmJe9rA",
  "key10": "2yHs3RxfrmhPKMYq1KENWYiqb2cJw5yZy9AvNCrfXxHe9PKpcraYWMYHuxjJyBpoQHofg12yFTvytMxYdxj31iBx",
  "key11": "4Ynn3qcz7QJdmncGNYsWtDdMem3aFNMEu298zAxdiWHqt7a4mLQJLmFKcCqLQEU1ofxFDxMwGSho3bEkLhqTY5uM",
  "key12": "4rYwzbrfGW6EEkmVfXXUfPc4md9UVVhR69xxM196YfmK2cf6g1WiWNYNzytjUrKxUwCRiNezWBie3PKKx5hz15Mm",
  "key13": "5LBTwDT9zYYpyWeWeJyFzaoW86BAkSECPu1rXisWqtCy5x8uRkuKVEr6j1vmj2nSg7Z24Pd7JLtZqbeSko7AExpC",
  "key14": "5pGYtRAUktGuh2Hp8B9PMLr8GjD8ePRegDfRXy4MxwFyouK9DqZa6UfbKndsbRPpL4BD9xSxxLQBn62oVP9YXuuJ",
  "key15": "4TtB8HzEJC6MsoGtqrNnPFk83dpMNqPSK3VGjmPgNrhGktxRFGm7Ss5iZ1zn9ijR2g7GfvnXU3aBrMm5dLtTnv9u",
  "key16": "4qiWxMzg1kBJYKP2QWEx8gWdJ9QzNounof6NeTZBm1sVg3E6kBcRLbyNqwsxyLGh3wDNFpAg5MPCibdyV2Tnomrq",
  "key17": "neRR9czBCeLZ9upTNrxLCUjUxscyPycGP8VWJJ9A8C75zf8hVW9ksyY2A4ashJtpopeoxaVE9ZN7rVzUbxtvo7w",
  "key18": "4TXE7No33oZ2rdG6tLfFr8uky5kVjY7vqrYEM1XL9VqCCcT59TGq9zNEK43VdXSWThmgQcdqZsLZw4dtr49ZNhYb",
  "key19": "46c8GCgw4UKGoo8SYm5H8hE2z1GXvdL68XuBaDZQUoogrveTTrwpmLyL2sQELJZS86we8Mc9QjDPNuVxGVH9pnKg",
  "key20": "4D5EF8GUxtpjhN1CSFirqL2WfMJFLyUEzhfRr8g5P3SMDV1AHk2Dvy6PkAWdnMTzJRE2nXdPUoreaDcDke8Z7ZJJ",
  "key21": "kjEn2y1zKfMWy6odVLiD8mYp9VrR42tD6o5Bg6mraAbixEzWNsjMCgXeuBEcisqkds1S8MHSu87K4oVayVgfdwu",
  "key22": "42kCbdtuZxZbmrvEHwMvnfV73qD5mBkRFpA2GnQiYgAQWVgGhJjWZMHuVPeafDvx26E76p5dLmrwkvLsj7oLcb6J",
  "key23": "Hr5sxaMbvvckxzeFnMF636jdBW75eKok528zvW9fLAR1WkAmC1nUibUh3Qpka5qg6eDbeh5TwJvgGwmLRtFmdpF",
  "key24": "2fbL3pE7tW8avXRRzjZxfRDz96dT1HR8LF9ePrB1tJ1c92gze6BZYYDgLXVbgipJgcMdBdXf9jZGdCKRc6muLwa",
  "key25": "5qDLo8jU2VyEvs21doVi4ERPYxG7LvvQJB9pCqZX7vDfpgwygLJWKtLrKyJLsNF7m8K13ZapnRcxdFNJwgF498Tc",
  "key26": "5yoKSNS58DVcxYWky2XgUoYz4Pvcmmowcd4EGSnfiwq1aWjp7977iQXr8aGuJUhzMugrtz3pPWr4sDeS28HBjbnt",
  "key27": "5YduKFNF2n8Q9fkUooSrGfiWtsz2kA52iLUjQ5HJF4dB7pwyjiAR2gU9r7mr3Xb9YejKRkpDnFZJ6xFwKatAYak2",
  "key28": "3puVn6AMGmXgXFYa4CGtQxKQFPabzy4Pcm3euEBPwNViBZrirq4HayueFCgy1u1pSBNQxmk8xTScAEQGbzQTobUZ",
  "key29": "39ZUvN4PDGhZqsiL2pTF66FM35mu4UnH2ErdyyevwWkcB1d6g9N2K8NNjNyETUcbb9KgkPcbTA2TT7g2sgcDpkTY",
  "key30": "3g96wJ3NMVThU92vcir38go5xpB9vQngLv6QYRDb3Jt5sbTR269guQPfPm2rjVUyvoQjWUiAYGEqfv2SLs7JWca8",
  "key31": "5o6KvtepDunZXee1Xws5sQbk9GNz7thCzs3kSt1R51E3gXf6YCwScs8HjBqRSdi246p8ywxkD1Pgm4qK6mksHkBD",
  "key32": "5bMEFicjNwwZkfeEHhtWwEQiGMb5KgRXUXYQTA8vcRswFxWD9iXE7resoTUqimY4LRjYaG7HmL7482DzgUWXQa6T"
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
