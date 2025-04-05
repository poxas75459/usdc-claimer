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
    "32Ayt62St4q48fFH26yKKEJTgzGZ5mryG814BkB4KNw3MLss1TxkHhPRxPgTKaFouVQp333nvmV1vWvkRWFKpyhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zFVqqA8QSHFHAR6KAJofCzubte8Gm12tSTCeB3gaoiwbDepXsXXjidtVikMFmwiSXj21Vh4wfuGJwxCJBqFsoF3",
  "key1": "3AaPYe9Vmmc5wWbqF9mE2Nisav9viPVvaPwnnMA2jrRjdJExaqAmpjKMsZxMf7BZ4ot4GrLwcQkCsUJm9CeE8hjK",
  "key2": "atZ8i5LvyAGVCDY184F8ksC7HvCEd4DKZJnngJybVzHH9MPDXbopzLSHWEAepSMHc8czrzTqoWRc4ER3f19cTLr",
  "key3": "64SfxZVmXoNwjvYwjo6UeTctUAn1WqMQAchmBCLj3fiecqQirAW1mUfovx8qQvrsJuxNsgn52UR5E9LwjErKSwJ",
  "key4": "2ohabWN6YQjxbh1QqS1D6JuhNvCsNF3PkA5VRdgTPMQrY3Cmk6qZg9h1AdiNoyasZmxi7uDUoCnu1hagzHzK9cbn",
  "key5": "28troFf6ydmVdUukpN4SqZVCbr5GStuxxRMEiRYWU6vNpaRXNSJZiG2uYhiGHgt23DsFU53k1M67nqN9w8D3N8m5",
  "key6": "4mNpGiu8ESbqP8aEmefK2RJ5yAoNWGDdfFHpMTfeaPCNodwJ5ruCurUN9QYYLYdYmuyL8EHqbKwGNwPWNCQqYEgF",
  "key7": "4DbPpVFg3XAa4qMBMBacm8pKfrujMFZ22ZjHbwdtf8Cf7AMHdjNGVyc6zTzLPNisE1oSwn79g9xpGoAkDqA3okgj",
  "key8": "5DC9NFy3PNXpHTr9bgNd4fiU7vasXyCx2ozGYCV4WZ88vTFAQLWTwCsntDbbF1Qv7Z8DNqU78HrJYoUV9Rq8o9WN",
  "key9": "2pMt2X6VFbZAqQDc3EfZJwuHW7euW72osNT4LFi6VgttV2Zhvsoos8BkGsQihrRd8pf5x8vwnnb8YmtdXsDbUfdM",
  "key10": "2xeBZNPMFxzvE7epMFTFJVVE51XTdRAbPDHi1ZciMU6LXpDB6MXnZX5HzmTKapieKXrWbvbwz7UWwBWWrbzf8HDS",
  "key11": "2iTuHKumh1oEBT5e4FMxAgxhkeGRxq7CcWj8BpKzDVYs3cVhLS73ZTqdbr3MwY5vEQnXN7Tug1MU1Dr5qf61RKTT",
  "key12": "5kTQB9Y5BW2mDc53bKZJ8UinuCZNFVSKGJU6MEjb3vh9KEZS3n4115nbDvZASSv15NLmtWGaAgaXtBWJxHzgmdRg",
  "key13": "5eGTBqEzeoq5rYKzuYfg7C8yVBiTBWmSLLVECYj5YAJjwGLj7m1nBwxpeubxTchpD4hUbPJC99waakhx2nckAZEM",
  "key14": "2G1sTCfzPwcUNapfaNQ96NfK2YbgnYBZryqxFS4NUSBHz4exDsPU5GshcrqHEAMD2JrLwetGp22tGNnQ4mEnWZTL",
  "key15": "3cbaUoweEbeJq7YE2GZgJyV6QSgEwY4nu7NjnQh7CfPAqyHjQhnSYzcsQG8GYCkWfTjtc7mHAaQPjL6bjtHXdQh4",
  "key16": "4k4ArrJV6eMEVzjbAZR53jTCqDWxtJAnMEH5ipEXELeETvTuT4s4Rb2wATdRLAeUBFP7wzbPstCUishcmAQ4fvpn",
  "key17": "34bv5fkjyD1SqB5x6G7cWKLVzLWPFhddRBMHvS1ziEUKJCz1M2hBgtkdVpLZnPJN2b5mhN669UGWU8usLYCHY5bw",
  "key18": "5aJbbZJTZUaXLpgkN6sh5BFqTMvowDv4rDG3Ho7Tfg8qbsnjYvRcKdgPdsaCekRfYyATwwhX98xe4kebv8CZNJAG",
  "key19": "pb5zBF3esRgrzJE8GC8C6bnEamZoakvfKa6BFH8rgfaAAUAvyYJdf6QMfkhfK1uTmTdTnsyAjCDdtUrhwUiZkqE",
  "key20": "46atbnueDpsDLWqJFB9fGAtyehKQizWRrj8THdR9mez7z97jPn43ieSRKjj2b7eggNLpjJYEyTmvGLvqSAj7yi8T",
  "key21": "4HRWeJ5qN2ie5UL7DNg1rq2Mgas7UEXMiMeDuQPwDktEXW7dd36WBVLay47bWmVZramxENcAHtUBkKNAxSdSXF3z",
  "key22": "5VVS43CQ27NX12c1dJKEgqCEANYqYMRpX85xLJxXSumpreWsgvAVVH9R2Mrp9pVTLARtNAcPDdfJgvUCfMEuRJcQ",
  "key23": "2x5eXGEN8cpKabZz7wr1h16raR144zFYnLnxfjNXnBNpHpTwVmw9g8W6xESL7wgAkiaspd8rXJ4faAQff3kFd37D",
  "key24": "3k54gfDTAwtGinnQvw6aMFUwXysmzY2Db2yrjnQzFxcw93jE69Y7wrpHQS6xZcdXqMYakuV7LvLNA5yZ7SQBM6L5",
  "key25": "2X3fr2WWnaRL6k8VW6CFddwKwGxuDK6Xvzc239sMryhJ6ZEq7EiZxM7sGQR8e13YGr3yyifGsjeVfWi9CtiaCmyd",
  "key26": "3kKgi1rZgRctzm9X2YJcsqdUcsPDKZ1vVhtuPi8PerV3PRvrZwAV4is3d6C6VsrTgtyQgvUeL8ydKcM7ESjxGmfz",
  "key27": "2ftcMBjKPDivWrkNXAZBQfFp9yV7XMYTjiAEXUQAu38ocgMXfM2VQwv8bLHChSrLC9RzfRfkQAWBhEK7jTsuXCp6",
  "key28": "5EQySPgJ1oLZkxugafKKqTbpmr97uH1znpiMwxk7XwFvBjUJhuRScTE4juYNVTtVAs3tme2nw5Nr9ututcRTuqvt",
  "key29": "krJQvPZMiUFVUoa4NwAycjNwK6wgvSPHjbPqLxu4yHu8reKgA9BoKC4Au5NAMtnqLURyeBbcakYRcZKLDwk8RZG",
  "key30": "RQD5qaQ7mF9PXJpiWNBP57BbRxvpmXhR85GNPwNVvDEeibdp472BDCVQn77MsZq7D2ywkzvNGP3qWNp7yVa1H1U",
  "key31": "2ovUp5bfdKGxKRRtzcCXZ1ib29mk9JLYqApAqZWmtevPbu8qEgnD5oWa8WFz53NJ9qfm22FxTdWcQH1qZTAMY9WL",
  "key32": "enEc2RjoiuPgwapbz71s1Qdb6V13B6wuD9K23TngKY87Rvhodr5fj6KH9T6NLCenKDixNmcaBQvUwv6uM7HmecG",
  "key33": "tffoAtbToPHBxqnQvg1PWtF4iSPX648JDprtxs3AvPwy1K3dAaWTm8Ci47uLHxDaj5kkUayYkbuBuPz5tcKL3jr",
  "key34": "JBUNm6PgNBbH6ipptcmG7orBazDee7gnh7vfV5Lx9AobeWteFBiDTmtfSFmMZXDnqhnoXYKo3jKzYniyaKj1cSx",
  "key35": "58yRBJVHuRozwEvPZeFaR47ginTzT2bjFSr7nfZrkhg2F83V514fFXmcpNY6nDijSPpN855reC7Rt2NQfWVRzf2K",
  "key36": "23JLLepVz722x2AYEtGUSrMTL5DdzJXzZg2m7d44d9uX15bzYtPcL8y5FauJ6XGc2yKRGPiyUmgPciUgFBGE1Jvu",
  "key37": "3WGcBkvCAinjmXznZLMUuhNyJioaRRUa6w3XaiKXJoZupauXxYRim1mjp1W6fbAf7cWyxY3SE6mEFmEo3nWF6sib",
  "key38": "8btusWQKAFsdxuz7MpczfmhkddmPF8u1VGLxZb8j1kvAJRnHnFabdAZqoiUKxxnR6MChMi3bGLtT1JzJHZYde1K",
  "key39": "2S2Ggvcj8Mr2oKSzjg8aBAD5Qzw9jg8xBxXMgZaX6CYq4zXQcNuJ4h8F9mDjsoDZxg8Tgne5w9PtEXUH84psejnB",
  "key40": "58ogLjd9Sd7Efagn9Z5tP8qoLZVwj5L1JZzc45hKewr3KmqeznzAYybsWPDkuUATWdU1a22nm48M2heuo7ribrrZ",
  "key41": "5ZCYmRMkL38iXLQcE1VPV9KzKoDHVp1T43NvL7weiQoc12Fjj6G62YDbv4A46eTsEm2QetxS4GVed3pgQA1t7xFt",
  "key42": "3qEBUUHw5KaBS9jjNHa3rt3abLKe5uvceWNPhNRurmRDGEKSCZYP5RMadxKZTdtCVtLCAikttjkk4ziofPdajapJ",
  "key43": "4tBPPVLTihYwF2cvYRi8bo7HN4DtbS8a4Hja8CgiVHyqp9WwNSVNxV19GJRk9vUufbRhSSsXDWUYaf9V9WjWMeKk",
  "key44": "2BdFFrVbtEWW4vm3rJYF2j3ZjkiFi8CCwNYcYcx44MoV9vBWniYcd79jdxSMuSM4UM7Xw2d1F9koE7Bfs3BKxDH1",
  "key45": "67PcgMKuzDcXzekMVp7ZFg1pqp2fSEVNJ9ZmC6W3nnJAak77dYZCLnRQSKLU7CJd6JJyXrmTcnhpvdtkV6jVhgTa"
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
