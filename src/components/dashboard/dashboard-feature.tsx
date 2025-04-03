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
    "2qDSVieXQ4JYpbBpdMTMcd41FH9g31KQkUt4skwgzt1Sox36jgwJCFNQZUcotJStgapdnhn2AQuiDhLHU9WmuEV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pvGPsoNvUsWbHTypGfUNjWHa6MAXQTKpjxfYE354XMu5ot1bz1QqRar4M3psp7BbPFJxynwXFSzmRdWcratz7ip",
  "key1": "2uJyCCpBpmi3Xjz4tsEc3ZzYCRyFuq8JpBgjN2odNZa8dzcHoXJ4mbu6rkyBtEuxDwkJ1oaaEtEA3Hjr56fEK2qV",
  "key2": "2cfPZVZiPrmZYqMy6SvHUnYHok5Jh9b8Hy3Lhqpx435eavnYgRzHjxdzgpP9BLEEEE4Rf5D2EPKcTbxhvgF6c3Tu",
  "key3": "5Aqub4sUZJw5fw1n4sJx4VDmN3vTeraqWLiwmsbcCkeTUTn9UoE8HMJxMfCBiL5db83NhfKQZqC3VAqqaiWs35v7",
  "key4": "5S7V7SpvenBB2iY6PF9HizdG5TJhd78f3Ybp2BWa3Dhea1jC7u8XxzvN9KzjTXQ2jBvy255bDLFqMpA7vWmkHqYe",
  "key5": "nnC5DsoaVFgnFyqm1awVHKhP41DtCuKs5W2Hj93jW7AP4Lw31MwQFdTa96MjUUgtmjuwu42gj9nmsT489wNN3J1",
  "key6": "3ESE3mtveAKMNCJP8UowLur2gZYDdVStmMKGYkf5AsuR166n8F6LP81RnqpSFkgaRj61Q7LhXLowQyKdYMYT99rH",
  "key7": "2RYL9RkQm2bYDxRm39rXMT2Esgvo1AWgw1tGngyTjXkSuR6h1cuCfd2ZYtn5AnjrBBpMcDE2cYMeK3Wv7KLwCSx6",
  "key8": "4hM8kbh4pGM1Azv84rr1z3EPDMtqGoduC3RBzzva4TMcJn1nBX6sBDbJfCNaMCd3kqpaNLHSeRKHGPx5NBzNSASM",
  "key9": "2PNuoFjuRvftPULZyf2DnLafnyxyTRQyws52H4XZVyCJMBBb89HKNJsFFnQwiEodUNGsYrmsJdBHYaC4T38jEd53",
  "key10": "2ZP9U6nQKCHoy7QYTrkgjKMAGpQw2fUkNTUVtu8AfkZPxzyzQCGZ9gQqFAhCasrT54XTjW7sQ4vPzeP16VDAwkSR",
  "key11": "NwWZuAtxyEYN3WzYX6ihrBL5D4SZzpZmHSKEpFhoi6dDCzUAEu8kndu9JWpov1R1x3vs9CiSXmWTPzLXLHUaFiZ",
  "key12": "2dM6kRU6yk9BZFAf5KMrAumazrexNMJ8WMbC8RWHp8yrLS1LqDaiTzdfvfgeKaVy4Pjk1avBHT1uCAdSmetEJmCk",
  "key13": "56QzSuLn2jWHEdYHqkSewuBVz1PRM83Uw5mhFEm35QBf4RYoSA3fFGrbFVF36x97oNFpjgWGP7FMDd7zpE9gAtvU",
  "key14": "25A2cU3TqkBG1vMd61asRRwg3pxzA3uXVH2DK8MkEBquW98eXduXDLzoE8bn2uU9kY1FdpwXKpG1A86RxWbBxky9",
  "key15": "4hu9NyciivrpRNdUyqn3kPkihNaXcK9d37fB6niYgg5c8rKeDfPm8RNDSZD5xsru7y5Y7eibTStaPocZTZpEwCdE",
  "key16": "3EPgV6Yvm5Qgs3tSpTjMtFEnYHFr51WXhp189SfrU7rHBG4DM1mbyMFKSnn4aUru9LJThnr4xbRFHUqYAgiHTwhp",
  "key17": "4Qzxb3HeioTYnKUdW8tqpyQyfQkZzHYnjDtZ2GmqfPEQWGU9zZV2Y49Gi4eJwj9BKk56cmSVx8J258QKc3XyQ46M",
  "key18": "3zvRnKCqDaVTHYkCfiGYGEjr5KPStcbw2WsnFkt25ku4TzG8RaDE212DvaBgTAZEr9KXQ3Qouo9UG2UyXgux72a6",
  "key19": "3zqZDFw5LUbXjhwLidg5u2FczqikdhzNomHtdv115mXb2jmKLXZsVLtjGKwavW7xxdvJX2HrXAagLWpU7HTD8ByJ",
  "key20": "2rdAzqTBwjocDDHbitSVrmtrEY4FZ7mfiqkysNYtripobnoXtG7igH2UdDX5Yz2PKf8WR3pTXPCoMjcPTxVV9x8P",
  "key21": "3YB3fFaJAvxEJfTxHWtmFy3P5HD5kcXtGGLA4kjSBtEqRPaSUKsiKLgmvFAz1QqAjCRvP6sy292USMbJDLjjCTav",
  "key22": "sCVKz4sRktc55CkdKWvAGwdxsYrNN5dygroHgduPbEcmzyPnJVQbzhUWmKs27FdUK6MJAhTpVEs7RyYA8qu2ZoR",
  "key23": "8YW3qbocgohjp6xmuNtKeuNVwagYeoZU2D5HRHqEChgJVLPiFnfe4hsdnzwbgrhXEj7BREGHGRcrksG9a5MMwkn",
  "key24": "3tw3vxgGXJvEVmbzj4mRFHyhs33YDKn35oSapPyYqQBmU8B98peM4jhUkDbPdssKUv47oZbeLG7YPkskAFCDjhp",
  "key25": "2DtHmiMzhNu9ZmvXJpP1SGebffCmHrYvY12i676zQ7Dw3bpdiiio6YhM3cB1KCSmhymjmHQVVyaBDwYCRXmrD4aC",
  "key26": "3DXHiBKQo5nBoz1ZC2Kw18ZyovjvdW4ccwRPbnAErqtuiBtbM2RJxEFYWqg5qpg9zVBdtGBEAv2N5sUhbPjrsox4",
  "key27": "45qJZ8pX5FoqLsywMnRrkJmmGz5EZqDgqdTBfhDgqxXRGotjr7M9ua8JEfzheLcfuqBp3axfXGTdwoB7eK41W4mT",
  "key28": "5XNfkXdF3Pcgc4yv5xZiRkm5XVsKj5rM9eKy7vNccWape8nge6KVUDKsmpzG9sLNJNjCN98pTvCJPUb7hmUzjmB7",
  "key29": "9fAUXn1iEGv7xSSY4cknzBCisT7VwESUc9NVRJnan2ZB3e7gUfCqoTTdWetB5ohKhgDubKgjfoLqXhuDTFQqxKW",
  "key30": "5bWK7LSdZF5d4cmvU769U4txrCpy2FUonetSPefaWjAYNdATa9WCjG7SBXPQZpeQVvMzpvyCcen5fhRnZynnmp4B",
  "key31": "gGQcXbfdvQWrSXVjGnfwo9sUJoqSUrBZdB4ou9xw55BJppqMqxxmZRgNdAzsUzV8f6ew6pP6frbjFDKh6VYNAiK",
  "key32": "2AwCtpCUGqDTgWXs6Pqw5WwL87ztuNUXk93i4ZPtL4KkHce5wmrg9y1jP3kjpDhQEwY171EUW1C7gP5KWi41NuZG",
  "key33": "TqubSVENhNzDo1gLE7BjUdnJycGKtTGFctRpCkDyt7ReFtNYBrFcxLGZmZDL8kuK2MxuLadobxqoeaX8hY29FmG",
  "key34": "4EjuGpU1uHmxFdh39bRaGm2PUE4i4njRGrEaQHaaZyswMf2TKjGtVntCpyTbD2kDNpcztHqJq4YrZoyCVrvBVZDs",
  "key35": "2S9ysbivqBfc8f6B8aW92ZL2vUSxWvoXdMjPcbBrEra2amNyujLr2NJsNBB8PSMBWDwZkZBdAXrQLpgVqLak5i95",
  "key36": "4wSvqNrzvtNJaik5wgNNcbbTezNzEsYYDJ57hw7fMqaPhnv3HmqgzWuT2fMFzziFiyCjiWUCfW2xLcKa9ph7HqB4",
  "key37": "3n9L6kha4dfp7B1aGCRLpU55y68ug4yjQ3vM3oWRMqE7dmLyAN9TmVojx1AcCcdcMe69wwtZhRkJM88zRBCkVcMH",
  "key38": "3C2fD94kB2DxDVi1mBA6uLYzU4qHse6bcp5u3SUAHEmpBRpwh8WgBecAbST5h6UZ75QBFMreyPS1VHx5r1g56nzB",
  "key39": "5B8jv1PP1RKLiCkSBJ9t9YjABzfZ8yYbwKbvUbqT91qtavhLpdUp2jDaUTQpm7QhbWWaU2xsp3wKmiUcLKGZY1sL",
  "key40": "4gEGABjAJZwNCV1NyPCvPSzBQZqDFhjGVH3nF1woRmyjKr5BeP2DaWwguLuLCbyo7G5UueDKWrrb9u673uh3SmR9"
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
