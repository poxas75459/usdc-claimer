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
    "45CJMRtUqf49KziT8vjFRsMemHFcq3R7Bzv5usdvawYqks5PkdtK1BuQF2ptZidwY8DtP7gx9msRJaswZ53R68JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xy3PDqdVJ18BDioyLfj3xFnyZgX6Ac8ZDYbzFaZBnqfWd19C2wCimAPJf4SJ8P7SXTTyjx7VAcavtCYb7uPkqdv",
  "key1": "5vJ86b7dMtf43YAgSdEarPakAvoCQb9JiAzWuC8qg2hPsyKTiy6UqVdr8qjHTQjmTDBYgmtS5xyxeC2gMDqAykBs",
  "key2": "3E5g2r1WFEG321RGDibfnYo7uWMYS1ZLqjezJyuN6YXfpxK9rPdZ9vJZAVn7ZSQXwdSax1e9S1X7UZ8PhZGP7cPx",
  "key3": "2noM7j5q1QhB9v8A5j8KXdTJNzuPwadt3A9HQxJpzUyjMCmpF7TcFZUfb63W3xv76HYFUA6pktr1NumN9cY4Khdf",
  "key4": "4AFnko1RpBRWQn8FJ6hyAqHPByp4gLGBhbb5dQnsT6iEkz9iuxZGnrKNvvbgmUWK1Z711oNnKzQfBpyPvZ4GTRo6",
  "key5": "2mdCxFSSRio3DoxNrZUqePgR7Qdag6qAozYwTPJZ8jUZoQ2ntMEcFm1b1MdrK3XLkxVGLycMU7fyoQRzZSefQhWu",
  "key6": "3AWxFT9sNxMKEazYfaDApz9AmCvZ7xPBpRBmdWF4wdcSggL3neTfove8CaCnDT1dUBFbeCYnfkj1EBqyRyjdSXnZ",
  "key7": "2kxYYHHu8tRKZaRykuWWfArCoJgm7MW9gfFwki5Zxenj6hfXW7U2kM3whJ92iXtkaKBUzz3T5AQbebzTowwmw3Pi",
  "key8": "3raJxa1k9gcWkWzjU3PnXfxaS69GeeoEkhmRaT3PZnAQ825yQvdeuQjzLWBtrxuixkyUtTprhepzbpaZPS6QTAbp",
  "key9": "2tCNZRhqDkRWP5hCbc2Ptj2Ve48mMAEwY7mBaYmtR4Knq82wMvaReHWAA8HFTvNigPX93zX5M6HN2PfK8sugcQEa",
  "key10": "2mdiU1Rp5NdcXN6L4mcJkRcbXZeD6TSVxeTx3HRw3316wEkRLKnz2qwarxsTzGLUYLjTerPdUyE6KKiWZMEADM5Q",
  "key11": "3vtvDRczM4CPVApLzpMmvaiEHGrRsTyyGw3dgEQHdFHVtECxJRCrRR387STyJ7BSUNKNwzoTtvsjBP19okZcpuaB",
  "key12": "4ttXLbETJAkkvkuDqVvE7r7EgNrJZnHWtzHMedL95a3xsysAG8UF8aBGjw8iVzHx9vD5GF1Bq3Ja8QFZjLH7FTuN",
  "key13": "37KinqfwdnqQdiMBY29SG4Z221fpkgNg97djU58iUMypebYpaeF52rzA5qoqBPboTGCY6tGAktu5PKkjDKddwvcH",
  "key14": "4bu4iwSNSwWTV38pq7zwj4JJ3LoUQxxdSZFdDxA2yv3yP682XsS4gQQCbvSN27gqKKAL1t5i7oPKJd4srci3Qb3M",
  "key15": "5Rpqca8jTxgqeqsP3zWfpVNbt1pDiEkqdT7Ai2KQKYU5xWM7WBwXo2TJfyXZ6EapzNvAFfv5tcWNkZCKVWqbfYA9",
  "key16": "4xCRj6zheC1451jFXAW3W5HvniiJPnii2PW6WHUkk2kv6J6EPQzP77QTKTcaumekNzQz8KnYAhGHZgqxzHK5B8SR",
  "key17": "5fTABKZW6tNV4JRP4FWRbErZLemabeLdRaYFs81hoHQG9NwbUxiDBN4vsEAc3QmsDcTeDrjZAeQLeRp28Vdpuiqy",
  "key18": "rLBQqhfM1vYyA8jBvr2buzyafAsgLzgqkGX92ELoiGVkSouzhSPBGWuCf6egw3ZkJGFQaA6SVbchS2fY5wMaLJM",
  "key19": "5Qzmen6aAuiUvNHH6VwCjyXnuLn3GQex8QqgMwxGXWNWzV3cUbuh74Z6qxMq1Q4U4u2RUQqHUu7VArAjpRhbMy7S",
  "key20": "5Pt5SsBQbgTzbpPA97HyKgFExYh1imnG6tq1Wo2d32eURgUSFBkPGBawNwmxszMUrCPWPKKPYkVybPn7XLLQY4fh",
  "key21": "2kZwTBmUG6av12Leo29AjfJkAsSNS5Q6amzFCBx3gBrLPc5463iETAhNcu15LFmXjGMeXWcyJrgv6HMn73ts2vCV",
  "key22": "5qTJQodPEQq7UC3L5xyvwx1d7v2GVNZpWMNgcJKKPEexD6jauAzVPzBa1abKmkymMjwhtsYFGLJSWDesCUsZb8Uf",
  "key23": "2rX7URzAqkrfE9dVDk2NshSAXp1eFFnVKntNop7sEmpQxKgNuanpcZiK1aqMMJgtKWnCk3NK6rxaXfgUuzESXFuC",
  "key24": "5FPArYRdcNFWGep6TEAwD8Ki55Cbqkinobj6EinBKtc8RhNdJXe8zEagGn3YTRDMm9DNL7GrovCqRAQQifQNE2Eg",
  "key25": "3nfMqVBFi969GEsU9pipmAXBHoJG44BXz4GJCWP9G6MM5Rh4gKfbFMq1xrx4k5TQFEhrrUpfCTRpGgsScuEmooAE",
  "key26": "31CryKDQQDsWqnPEZUpEqfrZ3HDzED47cDdvjZ9zERBbiNFJwpUjFrwMnMwNy93ScvuWoe4Pz4GSb7t866Zc7jkT",
  "key27": "3CSGVriVneYzJZYMta6A38fC7GsGiDp2jAtwasyeLH4JzbgHyVAccnVs87wgdSfNZhZGsSxnwd42Dw9B8WFpJWGk",
  "key28": "iDLPWvxqLxLappAM3R5oFjKaNhQX12WSEqRJHfPoHdmzSrXzjBnpXpjNi6BkbHbCzTmgAiixRXxaaQ6NJvsgzyd",
  "key29": "fZyzZrNDHWRLWuxSjmxJ49w3TtnyoCMkUgtm9zkDw5Vk9K7BXwsCpK1US3Hoz6hSAfXrvrxvq31RsrEDH2TnzWa",
  "key30": "4ZdwYKdn5NeH5vheUAwJqHVRRJEzPvgLRpYjc3oR1stad7KMgdQLHtM6tkoU3EmdM9nxf4oo8fiLX7wbuDGrG8DD",
  "key31": "2jYWLJLUk4RS5jfjSA8MGkKWF78QwxDX4AvWHaD6SnXZJ7V9WKdUwKuUyh8VWDaKg99F6wpgFM4fb3PABRjhbzjn",
  "key32": "4BcmJoCND7Zwsz9mdZRTTpXDCUaTvNhQjrvDrdVMJrj48UdEAouQwp4r3LmfTXF1JATLwXu5e6e1rgyJ4upSeDjj",
  "key33": "2bJx5Jk5JVTXAYrfGRNbyvSeFUv18jSt9LNDLWE4wAGBVV8ohdJ9WTF245BwaDEQuAHfvDH7XFDGd6WSsdye5LpD",
  "key34": "4j9D3QXSmzJcSHbRVchMcH2gpbnrJsaFNMJVTNTwa2YAq4kZkHuZFkKa3FWB29UwXc2yRWybAAFcMaenByhR4n34",
  "key35": "4RskQG4NRSciVggCTquNtuXYk2PoyHuGCWs2oxxcfbgS3JyFzMSUrs7aEd3qJLR6Vob8LLziMdRP7pkoQAXRsRkn"
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
