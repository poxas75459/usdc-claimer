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
    "3hRHmXxWTt1BA9CPMXtW3ChpaXdnPp2ZZHueU7sYsCcyt33jgpafwSsJSa5gSnqyCDbQ1QXUPh73dqQ4waxMmnR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yufn4gc2qULPmKDY7Y2i7wHAqcxWUeWNPq7xS4sqsA92Pzskz65Kqj9kQLc46esQDEr638hucP8DaaHX2hgx1vT",
  "key1": "4nadkPZXDcGmMu8PMF7wuurFYWBna7PRPK9uiDNeccqknBbPsrJQ33wTuGuq4UbaPg1hbkVWfixLc1qZi8Pn9a7D",
  "key2": "2MxGBwtj8KgUQXZUxr2pLGumkokucBT8BkCnsNTxogWSb8DyLF8eSJ6bPAuYmRZGHimic7SnzbRjvPHryMBSzHGh",
  "key3": "5KB7s2nQmWxXycvPUs2TfpXXKkxHq4sRzqaEE6Di5jRDKMwV5BUVYza1jwtZ2wcYFMRXuy3ppZGQqvMHURBGA7na",
  "key4": "BJSjiCPoT3rKJMziWoG4Vpuv4rFnNCTTeUaXhMrTBQXeT7D1KxW8PtRu7h6A7TKswW4vAqmiyCBYC84oXjjXaaF",
  "key5": "5iStkEqUaipsXYNWNahcnn57pPHtVEQjRGmisF5MoSNAvkUZcECErbWrwjiYXaynypNWYZQJVYJMk5bk4qyimbLb",
  "key6": "eY91gcsVyMcXYRjnNv5nSiNb2FRsi6Kbpi6hQgUUGeHQWPTjue2RmcMXZDC9cNQ6NNwoTAXnnFB9cZYTUEmSCkd",
  "key7": "3vgK4R5vBAok8U9FenqmGeSEN54L4dSXty3zCABfv1c7HpypL4pTzTsTpVkMWkPLyrNtkKd4hKpnsEv4eobMx5LF",
  "key8": "2MYN3tHzgqvA8N1yAtPP4WwDF1JwFdaEw9Er8YafQAStF2gU3sY82E8BJMcfibTLcfuH6LDWeRDepB4GLEL8hx1b",
  "key9": "kXE8vxTzFdiAmj9nRHDTutfwkCq12VudUrS5qQSn7eNhnUPm9WkfCjUAy2ad9bhG9M7vcvoCbfEe1EWjHDZHVuq",
  "key10": "2qvaE8oLKd7ovmmQVCpYP6puxyE1Kvjov22GVpVjz4Lakbt6Qht6CwDLf1ZEf924QHihSsiLgcTt4xhSKgqTZyqN",
  "key11": "Q3Zhf1KPjvsXFRkvVCuzphECFYVgKnHeEQ2Hwsg3LeRd1TgJPfpn3YrG54BMSV7ypje93WKdQRgoiDx3yEUFypu",
  "key12": "4fnRq5oQusV6tvAb5dWQ8TaTyHAMPCzQ4R2pEbX3DbaX6nmZAHSgw6ZUnHfTctHdEqpT1GyL5H9qcKwa9CWLQ9n3",
  "key13": "22o2uAj9FL4CY3skYVxKK7ruP5Co8wEmzeAWZzUaAgsVg2TQPwcW4hGHXDmsPJqL6cNkwbDb3osA8sxG2Sm7nk3W",
  "key14": "2Wvbe4yjMQGaga9poeZZ9d8zVJSUdMaY2NpDB2aFY2jXuMMysxfoEL96rcsvenhcejpmJXc98PDBbhXEkgMYpZJN",
  "key15": "3Mjcrng59XmMvNTy3ew2RLL8mP24pjBRmADRmdyxQkgE1UFPRdHTB9caUtm1b3HYoBc26yZMCjMPLwi8RBQPCSkm",
  "key16": "TfP5hAAH9q1pCSqYaCUWt6RK4t1cButXchpRHBn5TQSUg6oXSX6f9Msd6xHN3LsiMi8AfWTdg1H3nJwtCnxodmP",
  "key17": "5cLut1ZJmRxyuSRvvC7uYhGHxcDfR6xbyf8XTQ9F1LyZX6FnwqQS9QR4n9NbsTcLCeZG2ggY4uP5rntoCF7PBDTW",
  "key18": "23gPJxgiUJK7aT95ZePGs5S2YErK3E2uDDEd5iHMMAroXR5HnPY9aEhVbwXdn4qWLGYswa1gXN9aLanrEwZDb2QW",
  "key19": "32exW85yJuuVkfpZJV2sG1hjNEoDow5mLiCa4bJoKak4zv8HGy693ynSYJBRfyW5qDPuUxTyM9vbWu76QGAvsFhd",
  "key20": "5mQcwmkXygz1d4U6HS9CfHhDfH3tDkATtEfcZamM8dSn48FtMFp3fC14cKnZcNtHZB2Pf3UBw2EVMPzFDvfYjfhQ",
  "key21": "2TLdm8JnaugXHx4CaAQfsfK9RPf51CDiUbR93HgpchdVm5e9FZa4hB4tt5wyi4wXGACDFww1nx8DxXHma5QWxxMt",
  "key22": "2JwtxJkEYhqZ531jK1bFFoBiaVaxKpPhkYz1nHVSLZGb8NYojkLian52JadNrvvqbK7ku2Y8Mr8R16xGbVS7LvWp",
  "key23": "3oURjSEFvkLRWFFNbua7ryPdfvXAtcYMaEYm8CAG2yFx6s11YRT4xyVeZqAaLGHKd5Y85P1W9URBxqo9Qj8G3DJt",
  "key24": "5kwo58kxmP7PZVAkLixH29F2AGmn7fq6A3WnqpwhcnkQiSECt1JRBw6xAnLwD3LC6V5f162qh8UmvLtda1qAjK9E",
  "key25": "3APxmksjFqh8XoSds9yCxby5NDZHZ6fJXtzMu3YKYPqqqwehaNa8CQbNTXLCSY6siFCXkWGMsr4xKERniuBbvVJd",
  "key26": "4kLZhENqMecFuExXNfXse4H7m5wYHXQ773aQm53GvMR2HWvtyVUyNcn4LqpfqUpCV6BWdT7UVQmLr17G3HTAuRHh",
  "key27": "2LY3S37MbFhXYVUtMWERXHJ4VXRAiKiRgPUyfQrutybyFEFVPtH4EhfABuDmJkgpffowyLT5KdBKdUMqV9qrLJEt",
  "key28": "3Sd2NvNukYmPe1nVDVAYYpprju3f9YfeFuid25fn8n336DdHeeibNCkABh5cYVhB9gqogQ22oQtFvd1GMBQ56hru",
  "key29": "5USdSPVHKA7ghYTnGVyqBRcnFYAhkgNbMew2j2Q9DPgrRc9d7WAwZm9XWeE5rkoZPGyHusakiWBbQ7RDD7Y8dMNb",
  "key30": "3uW8cGskvnkA2dKoCCpe7LxfL48AVg2XFDDtyEnYtf9RRfJGEQvW3rTVS38mLFxPmcSKtGyXBktseCypxpRfoubj",
  "key31": "WUHSdTpP4riEjxeWyFDgwEJYYC7MtyJgBGaDjPxUz9J6AHPPB4dqfX6ZdfpVLrarnS8ktxeeemzoVvzWTYNntwY",
  "key32": "3XVTjCPrcsvsZ17mvPjXTjyMr2WtQDQ6NPR2VgMqADpfmFgWZBZbk12VP9AMcq6NPgMZv6LXC35TXwHaBg2AZLHx",
  "key33": "E8NeXJ61v8KUgCLb7p3AsdMfxrKcfB42tiHBerq9N9Hacpd4o9q4A2pR8LNxXGK2furVgPjzqgxEwfPp74W4riD",
  "key34": "2vb2PMMA8kgDGw2pSfkBoPMDGtKKt5DDcnkd8egeaY4pPXDeC2psTHngknZDxnKq1TWsC6y2TywvSxPzHtyGU9NG",
  "key35": "43SpTkD5RYr8euHSwLNLh9LbLEA5koU64MLreuzXpFTH9DswLjHGED7E2LSaKQzdF1L4b79igKdZXNZ1VT46yQb8",
  "key36": "2gMmdG3eSPmgiAKophEkRjxMrTTeJ6SsBLzUthaYQKgmot8uv9go8pGbU4MvvKmdyvir9kEYwQX2N3tdYpGWYa1F",
  "key37": "2gacmUtgD2N2JWpbMkokFH8tp9PVXAuHQdi6oez4ysvrjkvvAJJ2YSPps7mjjYX2ZEWTgiX2Ppt4Xz4mhPQ5gyvo",
  "key38": "5YEE6nMRo62cWvXh6GUL5C481r7TZtM32q8FZYRDt3diUFPgnYbSoXPiaP71xXbyQGR1vxC6QLgohq2XUfS5jWah",
  "key39": "ndrx834fyzHtR5YruhkmtKn5XWK82rf5D2weP7sA46nWEvwyFkQkhkhXTDkPmHj415TEjS5rjP8gvnK3vBBnzc4",
  "key40": "4z7iYrqrCK9ZXmYMm2TJRbwLGCPW64NbMrPuUTMSKS9c8ae3VvHkpNC2wkP7kRQC8ZtjDgoGPVpcEyMjYnR7YegS",
  "key41": "3eAcqbuRRwqqsB359sz1rSJ7iY9eBHgphyR3VjF4H1WgKi4KSGPBrz7gxfCmWgTQb31egYmY3bNdsdxci6mkA1Ro",
  "key42": "ZTW1FQ2JoZ86cGY6b9Vp5G52Hqg61z8jRavYLCY9kwEQCeHNQ8gk6dwHe2SvcAeDrfirqe2UCmHHfweVNKPPrgX",
  "key43": "3Ky3RRyM1YDydS2cGVsP7W8TxNxMeuiM4xe3qNPe2rweg24u2ma76ZyP2d3GDnfskFZYKmnT27h4x8AqGwqVK9xq",
  "key44": "2617HbcxzDFn1u2dGS2J9dvXKmGuTdVGcXWG8aGXQPcHnYUsur9BQdxMMBdSCp2z79GBY6aGqonkFYzFdVHFc8Bz",
  "key45": "2iXcE8gUJ7JA6UJRgeMWECUBA5S8t4qoTvGNrhE3VuySgZrAfwumZDRj6Lspow2r5TJPhUL7XjJ74ro9v9xoQHCZ"
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
