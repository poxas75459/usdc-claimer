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
    "5BUmQPfJjZ4EYYzPEt4msgUN9YSBP9bxajxUkASEA635DiKZWAVQUbGDqeB4vXusqYqPgrQcZCd21S91MsFoN2DQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qk3R6mUQf83MSjGvT5ysMoVYPc7kZdoVJ3wsWjYisim4jYyHp2UbCyTARfqxfpkxK7tEkJNzTosJEc5s4KPzEow",
  "key1": "uYinwMmpd1tkovxQ1tmnd7qoBiGhzsxFejMMsuzcCro23PBvw6S2QjeTXjPrdzfF8Z94gbfJjt13cJ1cE7WAgVi",
  "key2": "RZWcBHWhCeAieyerqtFHYeobQjEwDJMj2wFef25Tz1qWvBcRqb3nv3uo6hm2t7dMsU43JsZ3dgvQEsGRYVJ4bEo",
  "key3": "5uZ5s1oWhxbCyF96ttCZw6dmwq9DErpjwuB2B2Cejpy7jLiomheGSF3urBKTaVCyWoMXuueGij9SmG75w4R81dzf",
  "key4": "24nDhRpLHRQhtK2E89A9KESD7KqsW1zbm8UADPrFRZTk5xfixUa3HcReDRZZ3Jg6N8sBGifhk29Jt4yNctwDmyeg",
  "key5": "27H23m5T6Hi66JPPyXkWofMw4X4vmwuGzHyQzShPScREvLeHCkZGWpMsXTWh12U1bgFKUSp1aENfSSB32s15jTxf",
  "key6": "4WBgKPyu37BHXHLEX33mM4pZH3G52aHseVueyGFFtDJi2jiuEWS2Q1jouF5REwBPar3yMXz4CUbyCE1JxMvFVCqP",
  "key7": "5CuUuFf4qpBDq87Jw51fvP28qZXUiht5QavAECqiH7GFsd5SxzNKtRx6F6pw5PeVtzwRt5H7jL4i8YLBq4fmYbWf",
  "key8": "2xnLkBEfBewPxz3Bu4gQARpWZW8w1yVfi4m8u3VFh9FVbZ2ua4mrcwVRLikrDRffTFiA7WughWi8LaedhKry7kaD",
  "key9": "7Esz7M7NG7ggfkmbDBWjCNfNuoFoppB2mVC1oo7sDfnNFnwKKWQV12NVe1z38ab5GGHmcGsmfykutRY3xUtdFbN",
  "key10": "2pw4vjGrppPdxeb1n9gS2P6CU7uCRdGV5DvN7WjwK1RtYMkW41nfcGtW5RWdJNeg4WmHt1BZYJparmcNkQPG2AFb",
  "key11": "5DiUKcjKLVpuxr75ruraQhvBZict8SZkSN4CS2Ldk7rL3DsiQDXVrG57xKxJJHuPBCp2Rrf1HjVMbZkRSeXp8wxu",
  "key12": "Co9BtmbLDWg49qmjwyR2FYe9fVcceQ6KhWhj6mLzVja9is6qbQw51qyn2FWD193V6JMMb4nVAqZg12WsnM9oxLZ",
  "key13": "4ikUe3F8ME18YvyU6HkhrMX3kLQupzyaxFrt2CSztEKTxKkLKfhFXHHQLNBQnXNuDHGMf1C9s4HsrTvAf52K3ENX",
  "key14": "2JM44nhp8RZ9pTaAkfyuebSTJDp3Eok55vriP8rAJQ6PZwxiqWvA5LWeqo5wJvZUxEyRCrysPMy7hHPYDEmSTJrA",
  "key15": "4xM3uPU2KraR4dF2oa1GFgEVHTxj9A7veNkM58w3fiEMKCDNY1vBQW9Fmmbgrh9qXiLY1VkwbGjnKHB52GBoqPup",
  "key16": "2tsE3uDzBAY8H6pHDuJwx8imJMegvC7VeRgqxzPh7rAqMrRTSeWFKiFEyYA9PzY2KArT8VAJPxR597QoEXN9tFqe",
  "key17": "5NsFM1B6xYSgSrQL8FRUwrHTpXZK9QZypA4M7CwiyL3GSXCMoxqkYQizw5eVBhiAbEHoiRCf1gPECguGTA1GYBAe",
  "key18": "33BWFwpxXwTx5fXDGH3auMggTxk4RX4bTPPrbHNmbcLu43tsutk13ngE8Y1K4yaG5o5SU9SVxSzwR7tX2LZsU8CB",
  "key19": "3M9TxUQcHRrQvKvcAeTHZBRXqFa2coFAFyRMiqk5MXD39vzQp5bQujpLxFxFaULkTouReArWEsC4bVpKPGf2kCct",
  "key20": "5dUZ9KuADJZ8usLpa4HawwUEKB63iU5t4npF7Rpxgathu7GDa6DnMNUGyozBZdqSJKwNHK2EWiRy4mbje2em3ihL",
  "key21": "21n1p2xgEYAmBBXT6AW9pST5rn5GRCwCPDj6hFnBbBUYc1aMzPZsmBqYC5FTiKiVFAxo5EEsaU4cGJCBDLkLKbiQ",
  "key22": "7NRtqSsV5F8PAZUoNncJ2sPZ88PNZtVTfuKynEH9P4eoVmrwjKndDkpBpANW1gN1hx8EKVDR8xfSxyvgFrf22ho",
  "key23": "4gdmKgnKssYNJB4BXvfG8BJBQZDLwJBZeLWvxCrLvLCkiKtdxxPXtqNV4L6KQMVRVBextjC74gSxqGm2AXiQgpJL",
  "key24": "56h4HazqRjT7Sg68DhqeBHHTwVQAhcb6N48UgRe4vw878cELVhKcw7K3yATmHJoudg39fNeZ4HusB99cExs1Aqb3",
  "key25": "4ue6CjDFcuRFgesJ3kqd5oFTVwN4RHtxykvCk3EEqu6fmrMKdnvESru4Zq9xeZw35qstzsr4D6BYQBkrfzVkEN8T",
  "key26": "2AZ8gXZYvopEZtSepnNc6ovJN1K9oBd4MR52S2Yno64146iGFZBGZ7iwK21KjtmubDkjzZ29XuHHJFQk9kxkfzEw",
  "key27": "3pBEtL9q2n9Wh3qsN314LbW2J94ASeaLgH4B3v1n57FveAuoAmTgTA15SKUnTzjSZKxx6EXXEzBFmnEHA7u8re7B",
  "key28": "3sKMFGkTdNH7ybD6khrruugXyBfX4h5zhNr1tbwqsM8Dpd4LSmzWhaWbXBeeUVJ1TznTy1qFSvWRteg4JqRs5LB3",
  "key29": "4DkozRA2tegpRQ3711SJFD3uLofR1DSjuQZ54EcKNmZn4oUMjp42JHHsW43Z2WWtgWy2DfdMJ9rRZsZ9HQf7sgEq",
  "key30": "3dGtWKwsisEGtNGBb43T4zojCTLcTRiGW4x3UwgNgyEKPCvLw7GwRT7ZMYQgSFUe3UpEwDtD7bkmfGPTreWudEwo",
  "key31": "4yqY3ZpNRJf8yBHyXNy5Xq21nT6KgtDXjpVszfA4AUtzV7T3sJioZk1UgmUqjoPHG3wpriPBbah2y7tdX5Fg1g4V",
  "key32": "5jEZsnNXWMmfjZsG3uHAbTKTgPnardauY2CjZgFDekfRheugps1yDm5Abh1Veprh3vLT8tmDK2oMeA7osJ7A3Liv",
  "key33": "jNcfLpYZ2Ksm4ifEDrSawbkN3jzrztMHbRrviiHhAhEdhdX99hAiHXEbyTwKeYwmBhCFSwTKUdqgWTTTcjWuhw1",
  "key34": "41wzj97uaSwrMrfDuFEjGRtX2qCXo7ATaEYt1JP8fofkQ2gQKpXjKuwTLoNCo5eTRZjKoaSnPokNNtMJYssoNjih",
  "key35": "3fhyTBd4EtZcqqUtz4L5RwWcKoNMSGyiFRuh8QXkDBNuUbxee4jf4yxhCLb2YjtUH7i774fpSyAcznKE6w18PNTn",
  "key36": "m1efuxd16v46bi2QLVu9a7j4kSXfMtDKXq71fiHrMvkL1CnArkkR2bVoxbbJNdPiiLFgYT7b54DQaRxTg4vsXf4",
  "key37": "2bUj6tLzX5jJryvKc7B5R3xPvgAoNZpVZjq1eJig2AgNAsePmvViujvz4Mbd45ZzUHX9Rq9WV6t1FKg8rM7vogiJ",
  "key38": "4YDxNaTKDoJjk1e9jrSrgS2qnoBRDVkt5q5vgN6hyLDo2b9ESEjpE99Sgk5Y6P74KV3jk6gH4c7baPepcBDvCdgQ",
  "key39": "3e3pPhmYCMhHdznB3eyM1VNZxGoBF3yksyBXQN3tFwTt2AmvEkoXcJGUspG95Dekm9DYVvRqtvcWxKPTtLoZg9A7",
  "key40": "2kCrR9xj5Pwy8qjBBgBL4eAoDp4yjM1D3BoxmW1PNh4HBpzXD1r4TdxcnY9NehdKcoEY4Fn7w9bf6QFx1yv7JeH4",
  "key41": "49G3JWvcGsqA2Ja2w6Y6T8wwswyJhoWxLeWyFz5y87rV2Agz8nynPBuiocmuSjbfrqCqrBP6kMK5iqLeVmn9NBmq"
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
