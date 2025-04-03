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
    "1tQxUwgD5BLsFNhRV3VdkTXuh9dsgs8JAJp6nvnhkerVx5Di8DtyXpfZTBpK85bUspv1r2jj81T3UJTiYuRBAUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p2ntUAAR26RPnkTSt4iKLSrEWJXA3Q2zdgK47gLb26wcTFRzafaii6Ekd3HiDcVscYnWi76g9hFk2qy3mnkcVBt",
  "key1": "2YHQfvXFD8jMuaz1oNJkCTdWMEGZ6h5mwhqsL4qm46w1sJtBczJfnkhddpCxEZgFxdYWUFuWpH3tuJZrQkikYwRZ",
  "key2": "UYfmtnoXaouQqRhMUzyjTq5kwc4zveWA2p4g7wqwohwZ6koDJH5FUgt7gRa8zkDQ36NcPuiEfFHWB11Yb71xVYD",
  "key3": "4Tw7QrhfMQgHy7UaVAomiaddcGYvMLaw5JGT7rRzs5mHDHGKjoSQPM9ehpSRvFmhfyMY9XeZbSaG6o1k4VRh9iga",
  "key4": "33vyo7miq5fCG6NfMoQqMJ4MKWv9T3rpXYeQeWDwxn82CRtNGwVaKSjfUeKmyEMQXdDXEPaUHkGs5aGnAUAuiyVA",
  "key5": "jJARLbxmEXFM98PYhDhf4sFp2YyJ2unE87M6ojjRkxmycVY1kBiYR1w7y7dTR8Sc4P3XHmG3MKTw9iw1VGwavR8",
  "key6": "3kZxmxgqii2nq24xvL7qFEWc86DVARXS9yuS4AmDdeEqkirXu7JybCum2osDPaBrbYyH44hyUVJZTbE11aUzDPUV",
  "key7": "5FDj9B68UttUDYoHPPtnPF7GdnQ39K2j3PaESFEhgeQtsQm57hgosdcMZM1WokaAeuoajrfoqk8za11WRi4LQQLE",
  "key8": "ckR6LNopZ7TtGqyvNbxcxNqezx3ZJWDYhwkBGWUNiFX8BCDEdDRUgnLChPDtKC1UdiL2xKSFg8iDjPSUE1KmdYa",
  "key9": "tDvgURLpR4RwPdmFuu5soZk38SzEUdZUejGnDxcGwVrE1UhLb6urEfw84RHpin7xxY9juWuyh8uBrZtCgDb166h",
  "key10": "5VQBTSM73xa6kF6ET2yYSjSzBd59pEcSjpUSvWKrnUJtq5FzqrUkjMTnZnoNPNzFdocgesfspyyFmbmXNKVgcoxo",
  "key11": "EYV7mq3YKitadb83Z8a5ECEPWsAoiTTUymusFXCU3NVL9ja9mSLUrkUqRfKBkubHvFowmpHM5wrpabNpdMnxUBj",
  "key12": "3k3XgV2Qi6qyeTRiRbsNV6Wygo3mfZtyoCymbL1cxWXSYgQaGHZAiW6QABPy7EeTRCdYuYqXiVsv9ZoS6RmrGqHs",
  "key13": "31yo5tDWQ8yGuaHfhQgsypkv2cfKrdGfZdCmHTnrhW1v9R64QwgLKMqaQxnQZbJ3BPgsbizvLTgQoLkNwxmj5uqd",
  "key14": "291mY5GTpFMrodKSPVybrjAYFcKzy7LS6RKucfZnUQ6jQHExXkkxjGmWAMT8rFQmwmiQWZcuVwwmhVm2b9s7gftu",
  "key15": "5BEsc8PB2Az66P3myv5X1eBJEX3iuXYMU8HPxrGU6UKisQpF9ZnHdqURpPFaeJv6Zjw7iWkaWqzmmVwxkYyvcmNt",
  "key16": "2BA9cKDrm6EDbha2iRSBUhPkuHUBMsBvZCMr5XB3AuBjXFYjCH7qysxffmjgdvsBVdaiabu4rLdLf1z7wigzBuJe",
  "key17": "4cEqiZcWYKRf7H328iRQDmoFKK6jQX8tNJMeRGH4HiYq5ZyKwR7bhtqS9e3fNRvkjGd3bVbD6pfZbxgmDHPmn7Ur",
  "key18": "3ekp1GJw6c1CzNy1zqw32dijnZbB53RjXTKX6xDRGvADynJtCBErYEvMg5QdXGmmdpzMTPX3bQu39eUZXNeLZLRb",
  "key19": "4DduHrJNZp6VizWze3Z9WLRV5vtyYBY5hDwvcuEx1hFDHCqVCeChMbM7pejMSLfEyPZeBdgSyJXyJXEW5K1GcMC5",
  "key20": "3iy1NsBzXartq1vynKg5t7Sym9wbtmavLeGPALrxeUNLa1YqMMwRuT5x5u1ggb58jimjEBNUPChCXG1d1ZWFuLGw",
  "key21": "3v6qMsRjx1vQ8kM1dGrGn9YRbeh2Yv93Mp8ajJB44jjJVNwyR2LADn3SoAbXif18N3jDrC71m31E9CenLcwMhxge",
  "key22": "2HCskX8kfR1SSyEyci9yfNYVYpZFGQbXpFCMPZetDFvn5HuvurM4gdjpRwhT8NY17pvroSrggs5YfXC3ZeqCNM3o",
  "key23": "2KKkWq2JowvE6MfrKSktPn7nLAbnuKSYeS3STvXw4DpQCEiBABTkq1fsPYcmNGu5oab44cMcphcbiDptNfkHjBje",
  "key24": "4EXGjHYP93fDbU7ELyLV92Lhkg8U3FMitiK3hQGMNgbMh8BqAurNSs5vcLsCz6bWFRcbfHwPRLPRSzY6jGM4QmMq",
  "key25": "4bop4yFJQRvyrGv85gai5mJWqZzTR7rPrSsvxkdBL5WM5VRRFWBs8WCDyxmK5LSTQC2tMAsmJBdm5HEuBYe62dhX",
  "key26": "qxnBKNFAomGysf1BWfYxWCd57DiiVYTwPrMinoDdgjEkAxUX9djqafAGzjA8X9LX2Q3nKBuSj4HgXKjEJ3ir8WQ",
  "key27": "Rsk8tDnh4Evb7fKr5ruAwvB9MFFwbfXY7nQRy6Nj8axFGj88sbBeAmKZxyW9x22Z3VtnLtRiwsfspwB5XMQA8v2",
  "key28": "3UKmKyt9rpR4345PZuBLC5D9Ykgn5P3PwvsAw1cd2XSEfDq2YGwSixBn7tReUjgFoJbTKT5NDxw6eYaq64UQdWdz",
  "key29": "5HYUTAT9dGeNFAmBbNZdYaohYdDX5GPAwrqVh8WhmBoQTvyTvoEsn7xct7mgbrmbqTmvyp1DDK7FoVuVeBVjGhHX",
  "key30": "bTt6p6HF1fteQu6Dpqy8iQf9YMghtshcH9ZXxugKGqERJx2wim6HyJjeuHGNQUKoMzf7vsoZMC4kb2psSacHAJ4",
  "key31": "f8XJbzVJPxfSwMRNqLaYR7Xgbf8ggrSB55USucBUXUvMUUpGx9EAvUGDQ4JUD2DEtVUFGHUtdDz8XT86oN6yi6N",
  "key32": "aLk75XGDnE77eSfZktDRVr21D7HJrZx86zY4cYcEnr16LpatFd1FdwPs96Pq7F2NHp1uDxFSgqWEzXcDCjBUU2j",
  "key33": "3r7JHqMEfGAtxLaMvD6HqqDLqMRYLiBjtSmzh6E4NAkEvfzbMDM8W8jQJYXNg8K5SicAPzYgy681Wtu3mx4kUcNj",
  "key34": "xZG7UUDNXbGxFRicghFRPjupaRh17N6N5B5ZrRgatU55vP9zZohyZoXkRtmG47nuRrPXpphmFdHAgv52CwpPdnu",
  "key35": "qPpBkAfwvacTPFkUQHfuLR18KTHTJ87aU2WSHQ2bkpDGtK5NtYLLHYA3dAB3eRqZqfMd7u385f9uJrnUgsPX2n5",
  "key36": "2TFFhWJRbonGMZgeGSpzhJmoekywG7AjCYaqH11yN6RST7dHUtLJRPVNTZBG5pKyywx6UKAFBAQSNz9ZiGPvcNBh",
  "key37": "5pobqSJLVuEg5nSZzoaEE9qBtxjHeuDxNPMJeLVAJu8QZJhgsBktQETvrjH8RPBfNYUBQYkQjm3LoMYAyTcgCFyW"
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
