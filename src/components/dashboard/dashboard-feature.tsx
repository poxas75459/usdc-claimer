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
    "5i4bte846LENg7wyp3XbDp16K87va24MMmC3QiPFcWzufLeDuzmTgSzBDfEEBXG5oGsdXQNFJAd7nWmRaAkTfFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FBWdb8sgsyUL2Bve1JLUApxETxCMj2BphUKUdgJacznWi9HJ56VtHjSUnvnA6XVXU1SaDsvEjK18HX2P1RiUe7D",
  "key1": "3hrh6hrLCcxm1HqwjGLGyQ2gHb5QVkFTt2cT9HW5nMH8ZmBwh6njXgiRhqjjPYdLDREf5ryJCsTHYPRxYjfzsZU5",
  "key2": "4vXHeZ5NtqiZQiY2ZAKYq4Le8jMkLn2oDTAUaDmpcmRKpTYqLpzqpGygPe7Rd99gEwVHvLukU2dix66Uy7LFyLAh",
  "key3": "4LTgoS4jL22bPyY11SmKo6om6wt4m85jigMuoG181VtswWtadk7Jymk9UmjyFdCSmNCfCwpiaaB8bHp8i9zJ3pjE",
  "key4": "4JPbFxz1eye2UNe9DZYpJPa7p1yzfgmAMCg9UFpbvMhhHnJY3xz9opFRxGHMxWKCg6i3JJnGwDgmWn7BM7k1WWhp",
  "key5": "48yaF9zqYf5XTqt4vArNQLn5t69pddSV3KAtvyVkJr1dp72EmtmSq51MueXKwxvbhx4kDE8MxiaL9dFrtGuQruJ8",
  "key6": "4AVYfC2PK7SY5Q4NDP7CmNdeSwYFw6J29hsCi1TDdTDwQCReDP3J6TrHW1HcJw1BFFqAfCXz2NETusqf2xCcv6Qi",
  "key7": "5oQaKmmMnJYKRUGr2y42Cr9Q8EvarHWiQrZAShwpM8KLcDMutBEWVigAqCjrThNr5wyDv22M51K56DJtXXAqkHQs",
  "key8": "5vXsKE5tVbi3Y1yEPrPY5roRfuF8VQQEsTNDVX6vLBqRVUjnAYsrQb6hLRtPi7ou8x77VYH3Vt17Bu6tRXKa5Lns",
  "key9": "ciN4z3g8kiks9hU565q5wBAYtzhSy7R8kPU9wAK5rfL7WY9b1sWbFX9Wx8kyjn9NFk5BmNFGroxjEg7iw55KsXa",
  "key10": "LXS5tkkKmNiZv1K9WBvft1yibHcHbFGHzx5Fug7tVrf5v6bJhyj4MyQXHeV4vFTBtYuUAUJPe4aAKAdTb9JZZxk",
  "key11": "3jNSx3bzSoqUXbX2eP9Df6YRbEzmX4cuCWFew59JBnc9zR4TeSLRphMeYbE7H8PKe5SrgwxZkNZ8jUqzHftbTrJZ",
  "key12": "2ZCkzoMcUfmjT3wTqLTWAKGnj2UY868aRTB5qxdBVPuRwxCnCM5NmfaTJfSwtxCu4a37TqG1AEov9DzDp627F6QK",
  "key13": "49njmTSQSFKipQBCYEAQQJWDA7MpfGQfNu4qtAVRnUuDTJjb8nyeHFfep49RRqJ3kBF3XNLituH1xDDichPVPXSS",
  "key14": "3KMyBMqYpyNX3Uqbz5uvxm9AYvX9Kf5gpxbZXhx26W3Ey1ixqmZcNGFnYUAbEnPMsYDdkaXy9G7AzEeKZjMvScig",
  "key15": "2r18PWwapwy9tf72s7R7fZ84DURfpdJZanqo7asQfxD1h6zdgpW85Cewph5uP7RQXvBwousoH2PoQTS4w9r4Tjis",
  "key16": "5m1MfjVMzyNkzEzWvU7REEpT91u1K24AmF5eoBuziSSdswPp7XP8FPxgqTjJh2mBLWVyhRgVu2CBdpydqonxibMk",
  "key17": "2PAhbpmmcuqr78QzmVgff4sajX3s9WtKhKN2TtxLERybT59sgzUYQS7uFUcnAdBF9PAHJmQkWtjkXRUYRcNY8mT2",
  "key18": "4cG9seFNr7Ftd6iKmxGLDF7fLTzKVWefxvjRm7TonzPfbdtMTksgMVZkd1bhnzd6oVHz2cZy8NWjWY6Wbu3K4rrW",
  "key19": "5c2eUu8254h16aBirsaYG4xf6XTocX2a1LP25PVyAuAy1n2KmdfxE5Em4DdUxcFYPgWiCPcEjy1HQZ5Jhd3Vm6iR",
  "key20": "5qSAnPrRckHKBJyRc1pkJ9342D3WoaR1v4634wSVXWF3masQXc9Vp24jG6K3vxv6bCVvewbmHt7dk1zZXYEmAbEt",
  "key21": "n7PWY8VknARA47FL2yMAhDUVG2Wtj6si4Ms7k5iheknb9LGuaPBdWKiiJ2q1gjSCuecGhmJfwmsR4FBo8JmTJwY",
  "key22": "5rbUknJFWRQHjFrkpLut8oesngH1cuomHEQeiKPQtdcnBMDVXDDuPxEMwpDYyNcaq2J3HsshRfEwLgfKis4d66xu",
  "key23": "4TE3joChKDXN9JfZ8RL81KTe9e3REXwtMLyPGtLPSvPgZyzdzJvgcMQ23mTw7mJr6t4fK65dkdeDP2oH2VYLVD2h",
  "key24": "5yjA1eKQbDZX2GN4G6mVpm6DuBAcgGyKiMGyHE1G5LkQ4kkfMP1VnasF7QQsSYmuC655MWRyuVcWdpYiAUYjTtXj",
  "key25": "BAkcUtZHPogudoWKgDRu8Nf4GU9BhTgQ4wdi1iDqdVoBcp2qHDEmPJ41R7PdJ9ZUWE8JwV4QCLgixsVZVL4vJrR",
  "key26": "2HnXhkTAGL8D8e8dBAYuNCUYntBh1wuKTXTJQjd7a8Via2epxxE1pZ7USUhhV9nYhhhJKUV8WdjvEvQUDtzE9iqe",
  "key27": "ZyWmpyxBrdfVfLArSY22ciurDkHj86QbwGfDvqdAX47GsuNU55of79gEeeckCbCG4ad6ExWcsFjSUPphuKpmhW8",
  "key28": "4T7fWxqdEx8SsHgnDaZGEtxmYo3oYpbCTbZPruLutSxrNcmudBAxUbeV9PuFVdGZgm9bkppX19qq4VgPNn1MtXzd",
  "key29": "3Pa1uLyGc9ESzoifioNij1PHZFAsEVpij6cBFUHEXNmZe63DFfF8ArL65KLduHWPKyHugaJENZc9b9wkrFQyeKJN"
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
