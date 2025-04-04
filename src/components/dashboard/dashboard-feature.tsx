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
    "4mNz3s1aKRwuf95vzF46Svn4stZbNYqWVDsiTx6KKMyT1iRHubs9uXSmTWoWDzuTjKU4yhn21xyZvudCzEBj1DFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mR1VV3CyybMgUZJNJsYvReGNtQ6yfokX24NkvAaDJUJ1oBLdJy1HxdA1U8GRgnaomDzRDAbNa38wS3xTCUPJMSL",
  "key1": "iZKHnMpGhYzMVaqAe5KWEgm4GCEgsDfoB71PDtpPs7JKoW22EHXfohs7kbgCGWkQs6njZajATinLAaZdd7gvon1",
  "key2": "doVa4p2V4H3e94Cb323LuCSAfMod7cQuu8Fdh27BwmaXgeH6wxkNoxhNesRd4M4BR1U4xjhnkZEFxbBY9pT6pTD",
  "key3": "4xa6Jm3v9KFCRpEvPzM6jbSZC6Bv8dzbEbYd4iX8fDZDSBNHDadNTSAfJcbeNQfcP8FHwPPhyVBBFJTukuwcxiJy",
  "key4": "3DuVztmqhhXr3EEjRXjGZ1CVCCEALxHAU8kzu4n4X1grZJVdy9536g6E4PU6nnvyLAv4CQKTsoBSdcoaEC7Rd6jv",
  "key5": "3vq9tNPGeKk2XaoUhrFqW6gLv6tSyiLNTsGjfWK4V1pEBkKpxMcsqiztPagzeakwtkfzqyLUMfsYc7Pzbm7gdrXP",
  "key6": "625s7hfMmExtUoU2ub5ujxXM4VdQ9ArJKUvJMd2JZKisiPFyWwegfU3duGGT6FLZLFZZUaxykDG1z6d8GqcfHujU",
  "key7": "2M7BKw2xbNDNoz5e9VS2bBMKPeXBNErHj7kFfbxwsvK3oS9J4HjhfbMUigeBpcQKvsMpLyGbJT8SWjDP9y97izSN",
  "key8": "5hQYEW4ygQvafeTzm5siFHprdi1PY9oSg5ghv2vPxMpV3BT4TBxcCGfUX6BVjhjkPRebxAqNssG5wsLAtZr55GJU",
  "key9": "VCgUic8FFqDKbUhe3mVsvwDcdP8msKvtr6ZpTDCHPEW2zVxDXBB6dLoryGjiRn8TuReuiULpjYaSZnivHMxDGju",
  "key10": "5wxKUro23pa9sdz4buT89rs2XB1V3vVyjkBnwAchFSQ4WzDFameRVW6ezE5HCZN7W9F8Ev1zuPXa5SzAgY9WibLX",
  "key11": "5pZj8CzWYYHVqYvU4VHNc43awdQSieEkAB6rQm7MjPjnXgqWK3qmoY2bJP89RjD88xb7ff4jxc8JWFKQg1UAtjYz",
  "key12": "4jbvFioLdvgpFJc7U8xLZwJTi7f81dgW5mzSBssZWR24ad5HwJmgokGX7HGexGMkP8V58QwjDTtFB8Nw5p5Lsyg4",
  "key13": "51kUs9S2ScSL9vLrrREmCgFKwYrwh8nHjDWxwBhK22Bsp1bbPhtVabm398TfLEt78FACB7ZMQXqnSyrGs2YYbj9F",
  "key14": "594GUQB2i5dpHVNtywabg8vRZt7vFgCChTVsJwhwapdBHDkeLrxQSQFKYqayS4WV211G2K4YYZkmFnBifEQPqkSr",
  "key15": "3rnkYX2V7TUNi2qLvzgiq4DMcRHRETmEGyXnJymrXbwCGXUJw9bQWs2hBnGHANnwTGbhSAeKat7hAj5aWgyu2kss",
  "key16": "3hMU42ADYsTwCnmzeiQCQbtam9v4VN7NudewwhaJzsUxPbGjLuxrgyrFrwimYLw4FvAJPdSmmTEFCcUmLyeNzHUM",
  "key17": "5TSvHRQAot1mUS39fksPjiWKysq8W3SNEM8rLiuM44dYUumpPeJUcJ9RgQsZPkGpd9BgYR6kqfv5kTHXpfruv8mZ",
  "key18": "RCX7gUe2kk35ZvcX26FShURF8EvGLZojBV4FBT57xwDh3t8Cyi7qtzzxPsfhZgwupeHHXq6VqGPd6BUwWM3Uox7",
  "key19": "2w5Yrb9WcpRAQthjEjYrB4VqzPcfsSGCFoUcYbZohcKg6fFXhkDWNLhewZPQomj7XtBPzcac3ssiN9f6PqzcnG2b",
  "key20": "2Hrdjgubjcz4v8ihdbLcriBSVk3CYDrdkydfXkpRarCnZqqEA6VyupB2qTEARhiThHNWUJEZ5PXzKvNfPJ2WkqrP",
  "key21": "4XaUj15MwLxHXk5cFtMDZVhz65Kzee9acYHvVsLEvQu33crqyZWKeG7VeKDPuLxhLuk81bpL9jMLrYrvHdhw98bL",
  "key22": "5wHnV3u9D6EkzL993mtt4AB5WFzDuKcn7ExrRTew4R5W8oi5Ya3CCiAbcZofJATv6KkPP49gsNMWSbKmc1wTJ5nm",
  "key23": "2L1uPoTw8SurLQXV7ifRsLf4iQw6YpMtyy58Aa4oiHxinocWERL2aE1jEYMfXeeQc3V7HT2FFEVAY8EFGtsWpVSa",
  "key24": "3YjsNXFpT8MpGtCKbQ2KB8Kms1sSJUYo1e4ZrE4C6H7q5UNSCrJ2LkwGWiJv8DehAD5wToxGmw2bQ9hV3RC4cznk",
  "key25": "5iE3E7zpoUQFNFWSgMVTYaVz13X7sjUdecp27j7avmyoTvPPWqbHWV32txVb22PJTisSpsjHFGDJUkx787kmY4JV",
  "key26": "5aSpKYSFVM9aqedNF88CsjYNhaahx24BGfXBkuYXF6x5yzxdRPMX4x1Ehz2sQp9PoA8GGTmCk444WnYYFJcumsee",
  "key27": "Pft4gFk3YTskHvHbAZKG6F5Jzt23J3nKNPDQFgDTo8ZpEQMtiYCSNHuZcLa8a7kft6S6xTLhVDCKfH9JYgLFV4n",
  "key28": "m7Tf8Zvot1U6Q1XR3XxqUNcCmNaudcyCrHG4zvcAg5kqCQtvKRxbeR7Vfv7SrzMC3W9zBpFKcYRkRxJbLq4Nzw6",
  "key29": "42hPvNuavAcRoWKiS23KeCNBvfCs1uu6tuDK24ZQgLnjBbV8YYCCh2jK9yBu68dhwUL65R3sqLPpxvvBsK4apZaw",
  "key30": "237dUcDu4BE1MdnzVvqT78BZ9tpfT2jtiiy5NZf98KiYhwjHhoehmbpzyKSUMh9qmdsH44NM5ZQGPhXBrsnA8pBW",
  "key31": "gynZkGDabpTR2ubA4CwbaXPYaNDX3inFzFDb3jnso5vCp1mfWvbbDd1pFyHYgnYadKwtASWHcTDXK4ovp2746L4",
  "key32": "HNTca8HLKy6EhvtUM9NVyrYUgRuCTaM7gt8eZ9iBscT8qc6hd9FdYQEe8dpbH6YEVTF5V7qGcP9ok9zPidWNdux",
  "key33": "jpquuKowSXM4eatkyUWzuGFG8Gq5y933Ki56YyjJfhy42HuqEyoMCJ9HLzJDf41ctLq7p58TLBMpeGr5Wtfd2Qp",
  "key34": "2PgDspXbZAbAoD1MwLvVSPK6UfN4HfR17iTR7XnHiKtSc5okVEi5m38ShwpHH6MkRoSnVSPzue7CxUDXkpP2r32o",
  "key35": "6sYJj8TDkJt4odb6ugZvayg3ekiTMWf89dp6KDLPTPxDwJ97GVq4ccAbkbYbvGad1Y9Gj5aEx92s65wZHb1Ytsi",
  "key36": "2C6p8rR7UeZuzXZCe4DxmiyeyYoz9K7mf1KbMNFfcpp8oij1eWRWTH3VZjHAgJMudX6Z5DYRdfZG68VS9b3Vk8hg",
  "key37": "5qMcUsfB1HhR2RAAmxP4LxVfnK15emiady5gubtFnff2jJTEAyvuDp5SjfywHwrQ4VgcCsjza1gMeFnZwCokTDfB"
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
