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
    "4aGFeKvNTYoBktpogDqS9NpZx1phurH5sSYgdS7tRkY9RhfoUXVeGeT4zsB88NTmP3ChEBkPWPPMSqnENdjp5dSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zJHTg59eyiLwRLn3YaRRK6BM8Wcd6fy17wdmG7UL2KSdnbYGjsERFBL82UxKNuf6oPs7cdEwD3nnZXYELi1SjUA",
  "key1": "3icdx1wxXcALV9vCYPZwNBw1kbCn8ST8KukDymtfUrw9cAkzCGGCf8M8WLX96UVJJWK2ugGN1N5ZzEfUSoR3Hso2",
  "key2": "2tdz6jhDT5Byi4Q38c2Kw6L4rDGdENcVt9oSpucLzRFie3nekqq1UdbBHx5dvaXTvMzBAvK1wGFEvQY1wo4p6jBY",
  "key3": "51U52X4hs8jqmFQ69fxCvfuT1HCLVZexDvqFk2zQGFTGzHT9Y7rDHoNdnFoqnCdgv6yg8czaUBcEZ1Sv3ifn3BVN",
  "key4": "cri59KVk45fLbrBEmzpbxJhzbLBcm61kgCdkD2qtvTTR2yBbtkxtpsmFgc369RnrNim67sT7qdXrcGkusGcQqvT",
  "key5": "so8RC2CypfrrQfQJpcCumAbhvMdVkd5DM23DBZGAdYexQncX5oQxDFuNrwmxhLWRwdUYL77radweuxXkbwmDX6B",
  "key6": "67Ss5nVW5QMD7NAo9AjJjNaKWCu42mgDhHeXWT6sVNiShw91bd7Gvds8hqnohbbUg5Sc1y6Vv9J1FBFJcYxMTVsP",
  "key7": "sxez4dKasSDhUMDhCP1kn4Q73RRpgU476urcimV92CmhKxN7B7LyBRZnNa8dXrjVdYx4WbVz973f1f22y3EBuEY",
  "key8": "2UGkB19MZ5xLSB8GxB3MYrHZdgBKsEB6RzgJzV4DdeywoTsuKSmEXhjBfJSvi96jUx3QyPwGdEwLaDSfceeh8h1k",
  "key9": "5YVKirktHCnKNLnfSg2V4kATofCCDvHngUbfYcHujA4sbdiwYrFbDyorMsnMeaMpioJvhfPEqCUKcGvWKmXwx1XE",
  "key10": "2KYNGiHMzeHxBXokUKgoDqTn3Lxe8Ctajo2bJCJStmfkHwZ3tLU5ZcXWE2od5M6MMoS6EbMqsicY8u8e7obnWiWH",
  "key11": "2fUPDwo4ftY5PyzC4Xi5TPthxJCBArBrNVqWwMrX3UdGGhxi7Tj21yEP3QTGaput9zddWhSRWo1qvbFLb4xRDvbG",
  "key12": "4UyVLHXGhNcuWefn3ckKAYDXkRS6ejHQemtcep8R6xJ6bVPMJb64CSauE4nYbLTT2QFcNtcvEKVTsHGUqtzaxsVE",
  "key13": "5cEaVDPJ7jdyHCJFkfm3UmfiGGJuqBFHjqkb3wZRgDC7teFVvG2oiuHoTRjVMrWbM41EHcv5nxpFV9y2LiFcR8si",
  "key14": "382RKrR3hfzW4aTmH4GxBKqRfnrYRRYDfS5J9pXib2sqgjadaWssDh6eeW1FjTEoSBtEb6we3xWMc89LmUAjMMbw",
  "key15": "3G72j5kBnsLf5jfm7376xBtTfPEmimbHxbhkA6E4YJxq6uwRZktUsEaKpjyzGMQnoB54JRFY4RdyrGjRwBTzRZVu",
  "key16": "1554zFngqkqMy1deL346TASr7yX9XX8uVwX3QVUxVP9NSARg6Wz1cRcv3YcgmrkStrBDDSysgrn4xhp1QbkVpGS",
  "key17": "26SW5qCBduKx9KTXBC1UaHXuMno1VSSqKsZekaFB9PyL3SinjvPTCNN96hSL1K1nx5sGeGeoFF7Xyx1bhGvg9WP6",
  "key18": "3tUf7aZpFhRZvWe3GeWys8KPtr5LSEEgr9NCWRftda5Kb4RkQQprS5sKT6uB1Nwo4LgemULXQT4R3QUsN36UgUJw",
  "key19": "Sn59wzP36sFP4WNFyVt8rCDfQftpR6FnsjZw2mxE9rWTnzsvxAMWf1tHQoz5VciuQzndXqmbK5rJ6xtrWxhKfTJ",
  "key20": "4rFmVz1nUUMDBhUSQv8FvrBAtEpDmSFvP9rCnvkkqAxWWWUW5mDaBK5YzjhMj3gqJdpQLbe97wyJgA1JPXNpumAA",
  "key21": "3cnZUXPdnPx1RNDS12nawm6enxwp9vfew1gVXr5PrAoLJaw2N86Lr9DRhj92yJHqHSspknb4bpvuiTJQ76Zg5e5C",
  "key22": "4qgp5aqKXGpVJf8avhaZyAgVzCmLJRJ3uKiuLSN3RW7VGvahxUiKcJyG4FmkRv7EWHLAFNLhuvDAL7qLdZQSUSCM",
  "key23": "4zz1aRyi3J7Mhhmb5CvKbDLbpGnKKBR5RqZ1qku77gsDyLywWvh2rDVd7eme7DzcyBrcMypw7J5quwqDnVFqzBAb",
  "key24": "2UPuBoya9uNEFzqaLSXsg5xFcmzxU4w4H44HrwZZnN5qX9JBEKeNr4CGAyrTWTL9Wd2iV7LCevzRC53jVCS19waB",
  "key25": "4YWPqexGFy4HvbQ5avxki2z1BEdcri1dN4KCW2xvagS4SWVNKoFokQTK4Wt8NvHbpMkmhyJMMWGKLymPUtKJQwHW",
  "key26": "26nUAFkLUnPSrhomauRypyaVX8JRANvv99XjmYpjgyiLZ6JyibpWwvranHBaJoVtLdf3Yfx7mjXBAkdjepirCSu6",
  "key27": "4JbNqLyzitjKk9NKaLqKyamXZ3eczq8PDxByjMMewj1Tuaz18aj6y54TYKNzXSB1D5X6rn9Cjq28vwdFsEdvrUGC",
  "key28": "bR1BvnRSTpphw2j3LUUccY74zmKmHw78qFRc54cdNDRgTeP3ZL8BAkY9thR3exbc4uSspjczR3tzKQQPDUkNYR7",
  "key29": "4ZmGWs7Dbhc4R5JfayZYAZQe3M41jrLzZSKHpbNtVcj6xaDTCKcrq2ZGdhydN6svPYcvKaBE3kcTdgtGYhQwv3u7",
  "key30": "3yzCGkfxKfvfmciAbF5g5UCBCdG3DA3xkMy5MCfNvjS5Bphtdo3TsfEAHxAKnAhLFjGj2kQ3WwRqfRjnQTwfSdTx",
  "key31": "21bRGkauwUdmGEwi96hDWTj7wDrzL2SPTbEzHKfwFVNpvQysNH3SqT3jdZ2Z3ZC2ZSrrmSj2w3PAMrWyWa2kq6rJ",
  "key32": "2SwRNEC1DnzcmGeA3eCUnTe1FVihGUhBwaNMQ5Y5vg53MbAfdZ8L3iuRsw6TmxKWDxwsPzi9V791frTsJHWjwXna",
  "key33": "sdC3BdYz79gUyz2z3ue6yEPbYzk2QowXjui588VnfuFiT7vr3dBbUsS5dhp6ZcH9vuw2PCb9QTcZRMBWJ7xaWnd",
  "key34": "VqzegAKa3MCj5ZfCHiR8wQhzeHuCeZ2Zyiv2z8Kt9szzr1uH1TYJ2XhMa4u15YPQFy5ioZmyCDQqBrSGBS7fNET",
  "key35": "52RB5W5zf13zsiPmr7f1gjygTgw3XnCuBcdrdCHiYAxipHoEF2UWrwMtiKfN4NsB7ymchAbfRKnjgXUcbYN3LnoN",
  "key36": "5sfW9NZn83uUtVvaEE3cHpGAePED5YpqeBXcrYhfxUHQymJqC9no1a1pLyEcgUC35E6yzQD7GvcqcAJmBCCqUWY2",
  "key37": "5YqcPg9sfZGbCDDbdVnKhuf8u4B36KHot2xkyqDTGCDsqVwY7Jzziz85GPwSZcLVfcyvH4X4ABCugatAdhmGXyWq",
  "key38": "5QYcfSRHXo7eiZDeDi1CxBsW4XJpQV4cRvu9XYJcCJ7SyMUbzk9WoDeHSKBkn8HirnsSbCxCzcW7UoN57TWohcWW",
  "key39": "4dLqkhX54WvzLN9saE42q919j9v3ZUmDAPm5HGd7KaeCHtq2p2DRWroUdAGMbU1LJi85Ur5DNz7NX6PBR1jW4qbG",
  "key40": "2FNNav7RnZ6RUSsha2wYgFKmPN161mtnaPQCKSNE72NKgySMdpVAqtY5zUfq4X9jfMncihrxA3fb6fjhuciZyuSr"
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
