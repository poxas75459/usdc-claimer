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
    "3rRdJXo8RUsZ2vZJDXgpJAjGc81gahmwVbmWVaXBzjqNSx71oMU65esUe3yiBwWg1tK9yGuMG9hjNKDKmQqr4RHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RRf5Dvz3MiAb4oz9zzZqmtrQqucfKmmq5ACmV6rfwh6QE3BsNN54J9Uw8DMoQFPtprACU1EsUg9bn3iACBxvvyU",
  "key1": "62zR74Ty6w5L4fdWP6ppJFFPVp4niDNc78Ur3APdErKK5pdpLubeTP4G8gNEaDoFqVU4hN4V9xfKmRJF42KwJs5w",
  "key2": "3h9bHDCpDYxmkRFmTgKhPPEMSz8b7jbtwHGWw4opCPffbmAnLRbw1FL1ZyjJwd5BKqEwsY8kbrjMS9jM5svxowjS",
  "key3": "xLdkucR1WeLwMe4NqAEZUqELwXJC8DH8Bjn4TTZg4XAHHBTrTL6DwtFjh7d1fwTKyjPpcShagfa7vmwoBLU3npK",
  "key4": "3yq6xU4gWE5WANMxBsXyEWA6bwUwW165LZCErPMwfWyk787TNU5jXjcnDtfT5dhzk5NxU83jpYvFWfXgXs9eypPf",
  "key5": "qvHbrmMMGm6698YZ9YhuVM9mYzJxYZJJUfZBiReEKGes8HvqCqCDSucpjkrBPcmq4AbqwUb3be9aDkisgZT7bAL",
  "key6": "5TpxqLmvxAJPb2gSKDi2rNKzV4yVGVh7zijf8ZmkZGwD5fC4tCknyanYXfndA8pHmEcq24UtcMD6EGLKQe7Sq6MY",
  "key7": "3n1GZXT9iSwA3QvbrfVEm6mpDjwinBagkbW5e88myrusS89WFaxkBfL8sgKq4VVE3571eXhRwTRxTgrqjdgjdzbg",
  "key8": "tb1AbzHQEWjAAytib1rR51t2hVniTnBxKA3NZtJrEu1bacYCAaZ1cbMwNxuH33ka9N5Y5cNXTqSeJogUv2VLGY9",
  "key9": "5fGsNjK95UE5cz724NWuA7LakgDyWANRCrnu3GB7gvDrrN7TTD2DtkaYJDu9UXjG1cvsanZK5ahX1xzDYE3NwgwQ",
  "key10": "2Yg3gaoFire4gNxfUt2AX9nuCL1yRZFeqYksB9D6vg5nUVc6SmyTKHnseVWgCe6CEUXyCV3zEmefxqZhda2FcjPA",
  "key11": "55csnFYXPa5oxtYLREgEgEQfXHnc63fuA1qomFTih6bxpA9cwEBmiYRSrrdrRp7Rihfu3xx8HV948QnZQisGnfgW",
  "key12": "5uc2Q9S88MoMKtU3Q8bmZdXb9VJh33pB2yu2c7YXtW6ukQ5Uhf1VGXqRKJbMzhJnxNKdSSDXPPxhC9VoU6zYQVG4",
  "key13": "4UGznyGfXircXTdd8JSSqShSEt4ZQQLQYgL82GYkNH6HX6JY2KtkiEjK2bmW5VBWoA9aeSDkttT6GcwpLmj1nw8H",
  "key14": "4dLZ9MGcToKXBrVWLGhKPy1L2Vu1mGGvdJMdcUVSDyGvKZo9JZJ7CDzN9oyGxzP94gHxjqQ8vrxGmwBFYGV8avD9",
  "key15": "u1Gx4UTLdMdVhLUG4QFphYCtXxPeFbzPh4t3H4Q7WPX8y4vKN16WD5tEhxC7HDbrKoJwJ91LR2vdNMKFizYzb84",
  "key16": "2R6RAKoPgGaHwC7QzS2YzMiJLNUpizGTb6o3kjW3A9ufyeiY3DdFZzUtjAvD4uisHyBXPMQpBPmUhd3cTVWEVAhP",
  "key17": "4t2sTWpPXFJ6rDaiEw7PDRDUpRi4hrPaFci6773AT51rf61pLG2SKFKNDjyx17jYLfTJrWZ8D3GfD6otqEz7ot6u",
  "key18": "UKjPAS1d2vqNJqY7fG73LPvi9Aa2FJTxSLyzV85f6xS9MCoJYXDveiE8AUGn2YK1tnvW4pBFxvaXqoH3r25EwWa",
  "key19": "5hEQ2gUTKz1PYCYyNkAj4RYru671EkLUnP84MB2itHHyxMVXaaMjkbviXN4F2Q2WQ7Dz8bSaAkZHdzkSAcFCWuca",
  "key20": "4cgzj5Si9biHNjoUJA5HBHPkP2o9yZRh7XDT54sSqwAszkceShoth5AFCNGSsVKbfsoKfF3fd7mRT61kSPJEibjS",
  "key21": "3GAQF4Rb2tPvwyQWzaaHv1eh5E6Z9i7pFykiVLqTbYoKtvUuZQbi4S8x3mYNnUkjBrhGDHJNQQc79dkCHtHX57VW",
  "key22": "goM9roFu1X3PuUxiEEHHmyEWNVLAVFeJQvtzsduyZ7R4Cx9pwvFAYkaAN92tBZiKAoAgGJHBMHdpbVsE6GUZ8Wn",
  "key23": "4f8TAAiRDgC5V7XxzBzTn8L3ST4spTbmqyCnd5NiKRNURicZJk9JNPwMNvq7NEkcVWKhQJ7r2fy8pV9TM9fug4B8",
  "key24": "5S7m6ZVHYzRaZoY3TW8Wz6DoEz7CSdqY4yabM1XuradC5t3cHxF6mW7F1Bg5Uw7ExrJKRnSiJDGVGKt9BdQnNJhG",
  "key25": "2qf6HaKKqp5Pf9m1nygBYTE7zd2fQ31fKtmFgLWDSvHpGT95XoeeC9ANUadJuWtPGjXAvaR4vZ2QLo42sV2jnibk",
  "key26": "3uopUMQAX7kUHDqifLKfHWtKCGB1icLUqAC4RRHq2i8rvvUivUrjEN291dhFhuPi1LzhNtmp3h82cbbZ2vwyu6oT",
  "key27": "D5aZfyjT4kgVeStkL4azSGTKtHGNR4132Y6XhevoqTxw1BvtFHXEDSzzheC5hyUAgUzuk7rUdgjRBLRwBCEetjh",
  "key28": "c6bKs8nsWati7yn1vCwgNxSpWSWntPETT4JtLsTqQ4MBBjnEshBpMYVnEUS4NHWc72DLRgWD7WXFTVGLTy9SBHG",
  "key29": "4Mwq5gT2VYJsX2L9LfssNv6QGm38ZoL6bk4ciQY6kqytKy4xhJ9EmZs48C4VbuhAJeBtd1B7bQnBX3AX8cY4v7j8",
  "key30": "2fz93WFz7sG2NidqBmhwMapUJfDBDRfYfYvzWzxX5vAJGWzm7ThQihpupzoXsu51vimtzDYSzNaaeU7bbHCHetjF",
  "key31": "5atePuGfxnte4JVB8Ru6TG478m17fxiQXT2rVTWXqk46rArkn5WDsyi5prRrpyEnnSKbSp67CuGpjtJcvdHv3jTc",
  "key32": "2kajphmRoWQrsqnhAGToaiccbwjyNh6wEMM8AuxydyfCktF345u2xup6uTaUrotTJBviCdePPEkTG4kzaCGAiQKU",
  "key33": "2TTM7emQoVWBqwdnbFcGp514SWv3fZA3Kt4PTtQH5JucZuKZWGy7biKs2fvwqcdPrJS1c8sVsDTDFZrMe7KEgSdp",
  "key34": "2vx9ok2YbRUbrowWbfjBYoqZR9taRqDb3VC1Dz2BFcjBshu3gTFReSR6ZBzVxSnU4XyWgoLEnL19FgiBFXUdA9nn",
  "key35": "49df4rf2pFMnA7XSRzVTqY8kSb7bWMxtdYNzSYh4pN7awQfQeC8kLY2RidfzNgfT33CTLH4TwQZKoCkGRLLg8YaL",
  "key36": "3jxzWWxCvUz7N8XCMygETE5J79vJyRxY1NWvXhmzRve8Yft5F1ZdC5wzZzSGpWhf1zMj4iB4k4epWjDQWzpsbDUe",
  "key37": "592zmzzhZM4iBrbAVNqskNQPUmXDCrGbQVfxRLMswu9Wcazw84esHxV45G8z91xbD2dFXAroPKo1e2LPr1U4FdKo",
  "key38": "fwBjxXd8QF4pxhBBXxV93rscr5ao5UMEvhnAsBtmPDh9oQR9JCthchnjb3tBMxxGwFiWBe11qRZSWpdcsCSSdvd",
  "key39": "DPBN2nqLqh8M6bhwbNPUUbDSCYatEwWa7bHTkCMr89Wq89S9WBp5aibn7myKrB4QqS61PDR5CcE5FXQwRyBPj2e",
  "key40": "HnWx3cTYt2eKwhcVJuo2ryYiKb7pzQMFp5knvqXfAWHVHU7spf1pUUa6zmz9UA5rJYyuoBLn7sz17uYxEyUPGPQ",
  "key41": "5XJXiG918iXHTfRGEy7mxBjrENpyVqwh11LVcL62jPF8BYYj3JbuWWgFaWnW2knW4ssfHUoq1LmsX5V1a9sk2RLx"
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
