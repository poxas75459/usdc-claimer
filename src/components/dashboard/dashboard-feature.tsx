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
    "5mWyjqXYqTVXm4h2fuge4mXkYN4R5Ret3QswWfVDV8fQRtRw4ykrA4JGH5tcPye8x5bjuNc5LDAm11XB4fCtt1hS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPyjSZXsbn2PykB5VRV9Pp9AD2dpCjAgg1Rhtf4eM5AWBLv2uERw1CBgpnb3ecuYTb7PsqToj6hZuZntSgXiFz8",
  "key1": "2wNo6ctEcdAdXKdeBDKuLsVmtZrQp4eFWGhG2UL9uzDtTaQbNxsnMJjB1UW5tSNqmXuA5fp8WBUcwGJcuUV8rzX8",
  "key2": "2wA7Cuk2DXNeqZZYqZ56VGyuygB2wspMh7pX5VmCjSQfFxbVa7EmHnwKH2DF2eUzYNAbWUUa1FGE87xCdnCpurnL",
  "key3": "3pZ1GEGFB5euMiyCDcfH8nUsvGRp5qvwYFLXHgMDUaxcyJSoGaXzm5P1T7zvk8ZPWwkK1z4BtZoHPJ52ut8tnCHN",
  "key4": "2a823xPr7rC52y8wwFD45mK8awZMA5bgTsm2xMbPf3fqawEL4WZ8kaKE9GkQBkszFPSwQrmzJXpSWkUDLKKXiVW",
  "key5": "3BKNmxo2RdEsmW2aiCtmdJqPrHK9Y1644ams5T9EsfLrh7PvFgE7NUSvrAj157uEu2mxxjNZMEDbozW4T9eE3CiX",
  "key6": "mQwKq53gJ72rSH7DBMjYerREMLwjvpttHsmPk8GgrgCEXDZNXjXSLJkZ3SCQLiLwsuhAV8vr96jWQTsx5KQT1bN",
  "key7": "5uDfsrYb6xKhdr4Vuxgoh9AJtP7MvdAtYTmyD6Y7dx4t89LPikGA2PPzzBeg3t9YLFKfB6vz8iBVEoDbd8sXKQco",
  "key8": "47B7nqPB4UEiBcxH62h32YZTUbcURMvDcFVQMcEEYykZiBgBTEnrUPkF2vJnhsBSDyDAthPDsNup6M2NbDnj6hMX",
  "key9": "epn7uR34dp6zaQu8a4yFSaiyGrv3BhnsAyJjrNaxRGktwYxfXZg3kTsd1hDY3PnMzV3uU5UEBpEhcN32vBdrM37",
  "key10": "5qHQ6XDeTYTRk9vtZ6MSCEtL44vWe6i7DBhANq8dMNoj5dgiAhLjyxFaD5rrV7wFooeLQfufKPnDzdJZgSbPutLD",
  "key11": "3kBvPumMEo3KTkzgywBgg3JVJueNSeTvsy5HmbmipuiGGdV965N7xxBFUSibySWUeLdofjUeafckPSKDm7n73pCV",
  "key12": "4WHrUGwyemtgbxqBchoNpYQbDkhEMEYcd6PiskJCgF17dogwC7RaYudsemZ9kRkSzFQPqSW2uiJq3meiXmq1fmGU",
  "key13": "5NbXFWEDS5bKGPfZcn6Sw17Ro21bwLJdCt3NRCuWqKKpkeJS17ZpzV98sFDmcx3uvtK9ZwKU9RK1jRuSUJvuTdYk",
  "key14": "3k5EkpsTMtgZSfKUKrEtTtusbYs53PGMop41efoYALweE7jdWyiqEZja7aah9hGzuBBkYcMjP5Kroc894osnoAUc",
  "key15": "314VK3KxA7Z7Gd5iZVipCASH7BEVAbkCzXS65oDhnq7U4VhvsQ8c9wR76KR5tPMY91bEn2gBwYNLgqz4jx5NTkW7",
  "key16": "5QnK3vz9v4TCB9XHJaCE7AFARBeZe2eN551hPHCbgnAZxXvNNKLrTPG4FgZTLCizS7skbKJd9czsVARu8eLB8Um",
  "key17": "EWyL2r9PxYcn4cy4X4P8og7QtY91ik1TgqUkS6jwaB7B8BnNh7N4zhEp4KZ8gqfC5PYv87gw52kpMrDbs71z7w5",
  "key18": "5k6oxTuGYdPFqQXzx2JEtoZ8FMg8jFqVrmtvWd2BUEpiaojY8N8dhEtwie1piYRLsmNYwUSF9gcTtc1DahjvKWgk",
  "key19": "4pNn4vL4N72bBPZfvNK5qUdkscc1GPfotRezaw1MqtUXW6bZDYEKXK14XMASGdViYcG6QHBEaFdv9NA6fyToArp2",
  "key20": "26kZtC3yV2LKm2oxieYNtR4DTjfPvLEcz9ewbVxYLXkPp5bzR6U8SEZTuK7xSjKS8WvrV4g2oWkPwHKgvHr3E8zW",
  "key21": "2gega9VBRVbTxBsmgdY1QL9PVLGefRZJZtt6MBGEZZKz548fqSN4RfsNKEkPn9N55cXSSTnvWSvGTa9c3kMixAUx",
  "key22": "3wzN8wgUYzEek9vPXYFSsX1LirK1q3BFh4i3SoUWqEbjn1xz2jwo1wVGKAYksamfx9rpQH1VfxdkSVr1g2zKBo5M",
  "key23": "cTAgJKsXgDcGBsKahHquB2VDuoXonQni8yFLvfWoP9paufycka2AiwWnvWcszykb2ooM8sH2erroSeJPk7tt2LD",
  "key24": "6znvbkGaC3K4n7iaPN4fwg6ZwbzkYFfWhCW3DspJeEoKfFTwodRnXvqmEq6Gacf9Vv4EbhEk86SaK8wC122uWK3",
  "key25": "3e4UjN52invJKizU7aerXBz6tKXkhU67Kdz59zmRz9VePnxYGrGt6Q4mq7YHe6mDPec7k97gfDXcT3QnB5zVVznF",
  "key26": "55LpU8tBpL9eERHqhgcaFGVkQMasmXds1DmMjYsmLYBohhYX3gxnkCoruNremcmyVPB5xzbAd8gk35cCXMtkeweT",
  "key27": "3kuh5kophf572VFTo81ZEcgxCitXAK7kDtcW52xTbDSJgn8ZqUqMdZYQKiSEBBjfJDtfhxvWQAPvURECM83gmG4A",
  "key28": "65BnAi6n2rkj8uiorZTLsQJtp2sZhVu5thNJtanRRNG1crCaiyngHeeM42v1f4PvnEzLpufU7pQvYEEMzDToPoqm",
  "key29": "37EQnGWEXywAbYQRpcVjHb9SzRFsYEyDphZtxcA6CG9WtrgKpm48goWXedLTctsNJ2kSSbVm2ojdZp4iVxcPppzF",
  "key30": "nDcDw3EY2FsEwWCA4gkEYEC2ETL4y5TFFybuLMQWjygbzqXkPBiGqE1ovaRsf2s3reuUBPqu31WJ2ypQPBWruic",
  "key31": "53UETqsHCTVUSuP59yMH5esrGBKjSvzZE54bm82if4ULe6VXxtrRvkdFEdmuZ4bw5LCixm16CzCUrDwLxo4Jpv5j",
  "key32": "5bQPK5qia5kuDVqPu9mTXwXtHHUuyt3bLMzC9kT8G3wtXG6cq1Lhp76HkGN8su3YzZLR8JJ4rVHKjn7Y6PZVW24L",
  "key33": "4AHNTvY2Q7MBLXVKgVE2716r5PH8GfWL1WkPNQWbhos8LwUS2ijnfaiYJwALxWqcjGgzrPVE57pAjxF48ebR4XUT"
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
