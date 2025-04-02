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
    "5dk32JFYNVxNrUuvK3ADocCEVyPeTWxSadsa5wd6Bqdk958NA6n3xWvQWUzDFMN28caa2vjvwbHTTw7Gea4zaW4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5DyCYkzgtv6giWMrKGZ9ruoXpLDkTogRAnCBKUW888h8e5wGZu5RFbhTaWoixnWjQFcJbvqgEfiggjENhvgF5g",
  "key1": "56CEszLPxYRQNnhdHEKyyEj54Qa5dUFjqg8vuYW95cBWdLXTGmCmZDLij8NA7GnfAAdiLaCR3LCHsRMPPegUJFcb",
  "key2": "5f8vsYLeFRcaa3Y27KqK4yDWVFZHedXYvAcWMhH6kt4TcP9JJQ5GHDuBxEjpzDBQ4b83dtapru473VKfo786njUW",
  "key3": "Gn558CYo6bryGkdCAapfcUknQhtMzFT3z3GPWQS1o33KPeMt18gvYYd8m1KAzb7QgtojtWGpbvcvHj7z6yWpCet",
  "key4": "3J7Qb95ftymYbMB8gMPPtxru85jqRqqm8gXNDbnbJB9aKa7M36S6nNGX7MG56np9msQfUnjx2K5uhxp3rjFDrBnY",
  "key5": "2fZAWSZk2redt5nbqwt5NdrZkGpSt4bWv271qZzDACNP94XBzCqv6cpXLu2sth24THmzi2y6Vosu4dwpGN8Sxwat",
  "key6": "kM5g5TzH7vg2xJ44thCkgGXzKgW1d5rtg49JXV3EYWEJNwfTZysXBLvSZbxigTzzzWJqXsExBCyihyGvYjXBHXU",
  "key7": "ZgMzqSkttx5wuvzYM97VkjGrhLkLYATTFmkYNsbuSEZBhJe3K51KJ2riahXdo4ddMMq8o9shFPgofmYkj5dGsgj",
  "key8": "3HVhxH5vVqZyhHbYrt1iRWd2MG1kmwC2gFEpJUDZp1Bzbs57svAGtWeajVsjvZ1SSNmHydb7vkyP1P7KYtTzT6Mh",
  "key9": "2G8AmXpqMr2frrF3n4dphaRJkrPyiYddpwi1ZHeq17rKPfMCtpj9tmY1FnyiMdYcAyLkxGxZ4ywNR4PniUB4yG2F",
  "key10": "5beKXKZ3w6rpRBoLHUzHCBQStJ4g5RYMnykuU4XeqVR3UPDeMZxXmC4xVgj6dMbUG311GmJWukNYfQaTkb9vhL26",
  "key11": "5Yexdcfy83wahTF44gJj4DWwLackR4RyeUgHWSTUGes6htagZYzm7SYMviucvHjhfNwK32hxZinU7yVhBGk599PU",
  "key12": "3wp1B3cCecMDBtCErNPhvcrpcyxcxeGTrrqznqozd8LNW7TZApDwk5sy9VaRzD98VidMAR3hztf38rh1gtnYru9Q",
  "key13": "2uPh1ukQR8WnKdmtVDc8xH2UzmsSinT8fqdwBpLB7fBo5k1V7Ab1EDPbT2sNhD3f55YqWG4B3WFKnmeFjHW1hrfF",
  "key14": "2Sdbd27oMrNidAxduD57iVX6cDCBS3pJnJqj7pTTeGmjxXKMKzYZC4tMsVhahn5hLBub5nRgjgsnSakR6uuCwjM3",
  "key15": "66PdoCDDPLCoTYAWv3obnnjzsbnm4WPcbLidKNjPMd14WpKpuiPJbmZU8RLryMQVpvLZLDbPZrZja2rp1moBWbwA",
  "key16": "3tdjSxtCNBnRg3uzoh2K3K5NHXgefD12Dz8q4jEqVMJaw1c7XHprQEzmp6ELST9EoGRjuyTeMG61NG5skZfYnUUc",
  "key17": "3CQWvT86X21a8yJuFnC1BPp5NHLvPTFXBqYNf29xLJqpHyXiGMy5RgX5bzPEj7WYcidxd5ot1Gme2hVWthaC3mnC",
  "key18": "2TKhaUQbZKSt5vniNUWUazttc6LPdzHPiyDBkCHsr3BAXC4XyThNqoAYis52HQdmFMr9HMvMH5rnJQfxgRzRyr7E",
  "key19": "5Cuw1bU9hNRjRhVatk42MyJt9zPqYbhRvFPVh4DrpoZ9sWBfkEi79m7u4eA7nV8BQnqeinFQh1d2ECrubJJS1b4",
  "key20": "4r1rZHjHeuFbEPx6ggBd2bzx4YoHpV5jhVbh2EV2tEHYppDbbtPG56QYcrEFjiqnswXpPKeHwWqyxyieSzFsj9V8",
  "key21": "2W5XGLDNfrzf19w1eNKrq6EXRd8uoFMo6MpvicDX5DMDPecgop4MAxMqGgYTjcTSZ85CTeriMXC4CUP3afQT26ux",
  "key22": "3yn238GpVMGuihVAyXGPNwCVv8GFb3oLZu1V2xRekWtWEcA3eabp7uDE3L2HaiiMAE1B5uy7Drpu5vRjqnoi8bek",
  "key23": "65CxyeHHtu2V4P4iJFE8Dq5iH5Ya7ULRyTCu2FJAABpULC8LD5gpNCLpJ2AYYRvF97qnt9EEogj2cB7uwCq5Tr6Q",
  "key24": "4gyCUcUjk9VmGcNv8yNjL7WVh6wnvA5VXayzFqWndeHGRzrGXiHB5LXj85J4YWi2kPDhqEvAEuz5qaG5KsdJ8u9j",
  "key25": "2FaPXocxmquwoqSSRatX6qztPJXNRh7oYkg5ozYgNnccQVCDPQCnvzNUAYtbFyMgVTvzux6tbh7vMHoY3DKDqAqn",
  "key26": "3D7yskfP1tjcwghnYjyCVXQfCFGLQVK9QLUzmamXvXDd9Nz1NW7scWREbM9pMrZBF9kGErG22jYBGiwxsArQ64E7",
  "key27": "6733xrfGiznS9PQsz4pS3znLRnGjC34qnektfuimCY4Y37WXebt9jeCyuK3K7aSwRSQb4HwzUTdYS11mn9RY5tqY",
  "key28": "4k9b5TH14sVFk7G5DLT7QUqHuDtwVPdmCZgww45HVZTz8MMSpuQRYNQJFKvdSxfjabyACZAF4U4YYedTJYgP57Hs",
  "key29": "23ZCvSXcHQ4X5ebyqzAsVNc53tcHQV8bbdPQKQB6sdLDkoWSxpya9MyHskLgMR1ec8XMo7fASouzxKd5MhsisfJG"
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
