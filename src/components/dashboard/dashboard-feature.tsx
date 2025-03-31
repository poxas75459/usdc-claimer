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
    "3Ts5Vq8ATCHx4HFys62hguvmzCdc89oMCyWYQCmnuH6eiWhJvJdyNQsitotnHXNBaV46g7DZLSbegKXwYASdpmPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rUmJyXgHtb2XPByarCWidnFgLaKiMvBTiG2kPV7pMV3Fzgc74qvvLpYtjue1dWdpD79qfkS5sjqwhA2X3F7Ctmz",
  "key1": "3X3BS5NLvd3s4xyJYbVsEJuWuHa1gDYZPvcHJqoW9aZCm2zyLcsHbYeDfGWT4nyJqyszRhsJVxSdpryhxuGUnpM8",
  "key2": "xhRMuPnKznZ3YN2Bq61v3ewkXbSniAh3uSsdXASSwe3cN5jsxhMAQaCf4kfHjmrqSbRL4QkM56kJUFYV6AV565D",
  "key3": "52fG6FvgwRCd5zxKGSAvtArbJ8tKhdhdHG7QVHw5tBvU8fhLfP9xyDCKJY17N1LquZ2dNxzDLijEt6y1tQZ3NvfM",
  "key4": "55tWqKhxDNXZsrSSobZU9gH4mXs4byuoNxzzKKC1WMbKdFwrVsaihKJkfqEbVeEoTGcBeBF2j4jAu3S7V471YRth",
  "key5": "5JE1pNPPwMZPcmAzsRU7NP6ra5FKEqdKgzBsJ6PjfZSovHqb6K9LZ3VLjxqiuMfZ7qJ8Bw7kxigJ8jKDJyNNe5Bb",
  "key6": "2VaDDvXBf7ccEhewhnD8SaH6hMy73o3dTkYUsSdeFcJiDEUR8VwxdaEnd8fPk68hQKUoyXx8Kfw7NKCvPqJLXW1c",
  "key7": "5DbQ7XJ3rtnhyA1VccGBvRQ93jk72NXJYweFVtMZYjMhUufcAJypQgFgFMvuKvtHMeY3XzH5zHFADhpMKMhJsdBn",
  "key8": "3xtVJUkMLhmWCuHaERVhSUALV23TUVTXbMtTyiTsPWoCYZSVbZpEWx1JScu1mcBKAQ4tQWoBdTLZyKDgM8YFyMWb",
  "key9": "2DUPgsFuKCR2qgMApgRDbkUtuUWuq2Y89EDu8NgfPz7xefGcp12WhvQiijHBvtQqdwL9yzi4TVgo5LiKdQYU5Yrd",
  "key10": "oPjxPJcBLBBGHJKm79n4CsMdaXhtCa6SHkjMNbrgEu62NtbvDPeB4Lx3SojKX4wt8wC7tttHFeofj9ryFHGVuNP",
  "key11": "4noRa4NRj3dZiBUVsnDUFRgNfP4Tiq7mMiSd9WwDWQ5oWLhQGyEw9c5JChQnhd2DRJuBjQAQqHfVmFFmuGqpUGR",
  "key12": "2CmRYnzeBtU8PVoCDtgFSeywtAt9ppAnnXJKKK65jK4Tvx75WxehaNdB66QJP7yV3T21w8sq9rhwqsCVWAhMUpLt",
  "key13": "3TRAEsF9EMmGT72sf1e44ZrJ5AkWhD6JJXRAN7mdAQ8AVSXZ8dMnb9Ft7rgQKJA2j9D1geJUayjpWWbURpmgNpXM",
  "key14": "2ciH7uyp5jbL4JmDPS9aVaFJcPEDCruW2pHTeZSr4bRfSiWo8Cz1Ga1T6V5Ry5eqWPyLBpthuvjXTGN5f1dsmGkm",
  "key15": "3krgVZkynebWkXwhrakDFhCsKCs5XBYn7oDAgYfaFYhpfWDhA1ZtjX6M1dge9VuAHE1R8Hx84bZ9eBn7k2DcDwmx",
  "key16": "2Zqa9CfJL5CjEge1TjEBosKCoBJtTg1AsnPD7NmGXDRqXQHeuCgzdzaMKK5efBR1vvtycbR5YQnrKWjqFfPy7BJZ",
  "key17": "4jjE4QmMHzUwbFqGdXx8UFCzjCD9FYpLSz9UyDPHHTrC9TtkuFXXZ58wYz6Yb5ffzFcKF5kPtSkEwF93LRVbMyw",
  "key18": "5CFoqybkJcxVV5hTGu6EYD7VZnV1P7zc2s8KcBkmtGqJeNthV7rDQUwx6HzF8x1UUsEd7vcuhMdU1Lgf5afRKPFD",
  "key19": "5j2iv5wW3Bf4oCuGZ9TpdpJQQGjQa1dDaAx29jerhvuz2pVSLedxM9WWhPNfbvRvzqBsrwcUTxF7n25CeUEGDdsx",
  "key20": "3N6R4EKvoPrb3hBEyvKoYEM5syZaFF4MtHAmtedibVtvbDFbJEwo2oDzLMfUnjNzcsdZwrEQMYCm4frx7VoXudyo",
  "key21": "5D2yBmy4XDjD1eNaXgaaCBj759pC2MKhJuV5DYtu4iNKhLaBc7G6hXdvfsf5GvArBZkEUmdUMRiUZywzMBebogHX",
  "key22": "EDMuQrmNJCn5ND8PMNvvLdwKihaGmhNTFwpiAtK5sTBZravanKWbG2434ZsQyBpzHDAE44MMUHi9BPJQBEwSHm8",
  "key23": "5k71cjiJUeVxMVA51rZfQsBg8pRy137SaWJKMP3Jo5uWPW9wfHLjKeYwiDkNZHz1uoLrzXNKUQp4Vbyd8hXPvxn8",
  "key24": "k3NXQBPPBQWmjf79kSREkTBtfQEBnryQGcJbQdqABXWEGe72ikgeRLwjJk27Lb2Dgstw1SAMpoVEtqMb1vWo8Ck",
  "key25": "1edeBvikkoZbeS27SwknTJHwgsNXr9bW6yjPJuVyDbtvCpTgCRvndeTyD7VGA5cZpAd2oBSnFKBxdy4cdMd1ey9",
  "key26": "3aWYv5rTdUYAgNUyKtamPUhrC8UFDjHmFuHUGCGWSz3HoiCNATJtVAF5EU1etbdiooA1vVi79UzTp6FpHxMJnzbv",
  "key27": "4Uk9Lsa2BkUTdd8DA5GEoykakYh9zrKQppwh6DRaWQZZBtdHN2xBHSRXraQ8FST2prpVq4d2C7N5VP4UWdvepWtB",
  "key28": "5gNWLNdbXucL9qG4T9QPDp5Ge7p4AfRek2QNHskth6YVtJrZ1KsdJniLQeM7TWC1cenaWBdjfL6DVuCtBK2NbnEz",
  "key29": "5eFXcEyjaxfgkg3Ky1A1qix6Rdq3BhuVkQGqb4wJkqmsgUJHgUwk41eDpRR6wsmv1bU5zv4Zws5vzvyECZwZ7ANK",
  "key30": "4mintjGkXcVr5FPNAdfCP4uG3djjkvBHKyHeYR8gj5D95B9iWxqjFgcejZRib7jQ5RCgZQmkUEGZTKea7rWdj1ia",
  "key31": "2RJroAfsarY1oFJiQ9V3fCLuftaaoHsFBuxGMwL7o8HfHhUMYYcUMmUhzDYVLb4Lry8sbvKjmcwmAybUvEVfHWaX",
  "key32": "yzgZb5XGPMRPhXEiMQ16Vmi4TJvUJJMuH4zftL5xQi9gJx7GRjU2iibTsnJYF69yfPQ1vgwKzaGynaA25jSR4qd",
  "key33": "65ZqeYsuNVvVdBWgCuUZeA1tqgtmoLWFxYF6a9URre6o5LybQx2FBrL7KehQ9LMN5JuRKGP9exWZzgYMj9pA7XKd",
  "key34": "3NtGogxZfpBqMHBTJG1kFSEZHK7BY1P1AYoCZkoabLinivTUPTGDDk5qGf6qQqpUNvn6Vka7jhA1MYDXmgmLPbnZ",
  "key35": "2sXn8gChrR3YU9CLt4tYwUNbgVdypYiUcD6VJEPEZd1RxmcUbauT8UDVtj8agDMun5BDEKfxHr3a2cLYeAYBQmAX",
  "key36": "2VQTV3VxmaVV8YXtuUcAGMwQE42Lb1xacrhxZ9NTVhqyk4Gsvkbgy3BVpofdQ2xw152ksBFKHtxVuCds8TvQGyWJ",
  "key37": "3VrejJ6PdC14DXQuPR5C8U3k2S2V5V8v7M63mFqgezphL8GAeBBMFDBrZiuf6FQ16gUZr1jB5WFGShBtyNMwfxtM",
  "key38": "4CqAZSXjo494D1JXahKRnJ2VnXHpKuHSFaUJXgG8u9Bhr9o53AN7aMPczQDhRjN5fVrvCYojkKQEj5LjdPSf2Ftq",
  "key39": "5EmZ3BR8vPQgAyLLs3S86YTH2X1S2xyVuFAPffj9F6VEFcNNT1n5vFCFUwY7kqWRi48FdDr8BXuVQejbz2ZeKJ2P",
  "key40": "V3pJNk4ZMzVNqwcgJTjSs1zERcddmknRPPmdHepJgSH99PGds81x65ysYCviRqHfUMCVpnPYt5jfPdLBKu5vq2w"
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
