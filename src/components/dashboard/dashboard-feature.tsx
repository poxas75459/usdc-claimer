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
    "49SUDEQyF5pbuFFRPdK2ASNEEoxjq3mb41EziWLgbV61N2MKwj6dHo5kghTP89PJPDd7uB8SqaQBDwoWAZVgtAkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C35LzCBefB4V9aTPyRmVpUbvGzC55iAY2wuyqZMGdYvWyDg2L8sZ7f7Hu6EE3vgBDUUCoaJ7eMitaUGiVv4srA6",
  "key1": "2uQg3vF3YsFyikmc2LToYE6KPdX9WLYNAvgsL1VJ3EwUN7BexpfdAAYatyAqeLaTWQ4vUn8zkBg6kZ9LX34jpcYT",
  "key2": "4k4vi9FSg8ij9qNYVKmpCn76hLyTS7UeCxeumBBaMYC1iPt4eihN3AzhAW4gaTFfXLsPSHG6QqttbWFDqMMpSAzu",
  "key3": "5r1MHUUiybxfoSLi2MbiUBadHUMvdCJzau7fRozRYjougFZJ2Dzey988udWtxbAMSBDGDb9j81sE7MBXEJ9hYzYm",
  "key4": "33P6yABb7QgVw2g9ikSfF2DPVrXHZfRGEPXCCwhdWsY8tLS137e9YBcipceYveGPUgKBnmdjzoPdpRzyCdGgy9eS",
  "key5": "27nFHCACzSD7zSpRpsRT6nthDgei51TJXVsxpqQ5pLtK28cGpNcB8sXqgGs6pWGJCAXBp8dLiC36y6bJyGmoXkAv",
  "key6": "3nHEHfbPjyJznkyKZieuc3RQXecvH7x1s1oWAujgbuteyWuo7ZPvNEBtp69WEfP9odmuZApxJTKdoSjNEh6MzTsp",
  "key7": "kVjSe3bfGE8vYsKskt9KcbExq8HkMmg7YmNirGqhopg3CS1uca4LEy6rMerPHQrGbbXnAjVqkZzxLsymvBBaKSM",
  "key8": "4t9eXfYdfnGj3Xv1xDMV7K7HDiSYNfQDnPQp7MSoLevH4Rpb6iyq3BVnS59FSDkxCcnSeR9jfSqvSAzbDACTdeA",
  "key9": "2vMj9sywioHTj58GREaw5yLhg5AMm7eBKCLYBu7XTAJaLCWG4PR3SVDf8v2rKc1CcKGWqWTcWNRd7QCi4e7tGeP3",
  "key10": "UrSwn89k4rmKPoxw2KdZJmLBH2G2G5LcVhQgMvAh9yfbshvf8EG1YkaW38nE627upnvZ2JwvSWLSxE1h2AtCEZv",
  "key11": "385DWAxrryFqN3rCnifE4YCbpRUZs3bWrJ7wb2J77gYjWNqbfa8oZdPxj8n8nzZ4AntoRBzzXBoaLmjBAsQK7tRN",
  "key12": "2tHu15nqf43q6xtooSpbewaiqnon8u99wQnyHuWj2BkLoULUaSTThR3Ai2v2xmE5hRkxdteBgVB3t6oVpnoDs46c",
  "key13": "29xjHB2bFqoZFMRjLuzU7C9xjxFeH2U5aiv5EBH7TiyT3mvCoo91xNBbzjoBRLKP4eWw6ZEhgHZQWTJs2XWWafoB",
  "key14": "2NNP7PVK4Rt28zbdy2YHKRXMijwi3fHbaiVx8MAFo38syREWaqH6UqhB67QJ4wVtmUt2FZar8FvmQPvKYFd4m1mv",
  "key15": "48a612FUnfSPGVNSBSEgMj5RPovNi4HeReAEFEtYUgooTP5Za5DQt6cbr1SHn5AeWePYi7hQTPTHSjrimMugyJvz",
  "key16": "5s79SZz8wzgfVeLtbMNvsSUu3wiqB2GJixQzd1sSBmCMsxNMxa8DdF89Gi6UoPsJwkMVWpjsp6f8co28ha45BF2b",
  "key17": "34PY4qEocLjvX3aeE7wgb5xn3oVvSxiPhAsu9i3nvY271UY2PJ5KeHbrkNeyXx2i8zYsjnynNgUEZwov4jwAaPtt",
  "key18": "2yfoLdFtwsXocXZRa2B6p8uNAdSgtqoFgSt4vfdPYDn1eK1Rhih4gkPSv2oWiwZRdNySfq6JQWtXhTNcPoCf3oSe",
  "key19": "e2CKhGe1R2UtcNsEXN5GGoPdJj954rsgC5b1ufH5qfTSrYS78PN4t3kYSqmoapHPnb6FQrGULj11RE7RhqHXdJv",
  "key20": "4v7xfUFE1Xbcnx1d7GwBHPzpqoiZtuRDoTUpyMkhNx6LcQVGYeeiAn2bkx4wSbEEibuAPjVNVXbzgaoynT3wVbch",
  "key21": "2RymuD87wfbLDjUjXjoGHakMoqbvxEiVbdxCt2qYQNL8LkzP4Ym9ntx7ABxwpqpT5k7vj4AUs5VX1xceMft4UCak",
  "key22": "33eSsHnbFnndbksXazu5wremR2e9qCRsRgnMpxZrsUHhqAVxMHiW5WTsbTDBP6QGH225zLDomUASPFizXRBwJ5yB",
  "key23": "a9kPevZ8nqNYFXPLUfq2sABMWvNewwnuEyAKnAa3h19GvaXJMaAvif87R63PeYRfhQCe3QSgmq2a5ZhRKQsQEtH",
  "key24": "2ce3wCtXQjBn51SEdhFgNMSqxZxAmfc4nEYTL8QXavVYeDHuZ93dSVUpgnAnyo4cJzcGai3wsYQ5DChhRaxrsNgm",
  "key25": "4MPGznLDYrwYXnhrQ7PHzKYqYwr1KmUPvzLSfJ7Dz9mdEEQtvGTqPMcc3QWhw44sCRRg4J5bcNwtmnXrYgwJxRB9",
  "key26": "4eGVjddBYoMeTSTyGncVTsr5QLpkm7RZE9EP6ZDr3gRQg8okPJH37iW16tBpka7FT2ggb1sd5NrWFzjdZuBAG3iv",
  "key27": "GuLQExLSEqDsLw7WRAW97tHXu6uoDLHmi1QX36g2S7oQhjSVyDUanfCH6LyWMVAmhfN2R6RLwVuDaZdBQqWa2FF"
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
