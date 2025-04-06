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
    "65HVBNemqJB3zQX7Y8sn6ASVAdwGXgsTzcUNG6prG6FPELSgorX3ssYfXaKL3WdWT7qQUg6F7kFKcpDK5gmkyK5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62opjKnChJEQe9yryz9zRUQ4jJ2RQkZzXwLT3crKUPusoSUkDyfycVyUMFELgs36FUqpGFXDCsGwcX5xEEoCRk6s",
  "key1": "2s5XpSMJMNPKHMnfHD9nPxJKUS1reArtM8uRh7eQ43ysHcQwphcoruPjjfvBaTbC7Y3eh8BkZRtDr3fkGhZBy7Jm",
  "key2": "37ZUtkfH7qwBMPNNNPcsd2zm7cts1aZ7VzgjbVYD2pqD1Wzo3t9jrBytt6omK1gBtAFDDXYwSPRnnghre7Rm3pj6",
  "key3": "3WezgktZqy5U18imyymaL4gEYCqVBfBFEARmF4QAFwAStyEzXZdTAgGE4idCwZw6pKL4VM8ijmwVUcBWpuhH2evi",
  "key4": "4LygHsgkded9Xne3rVzTVUX8o5Fgfx9woq5wCyNajUfgeFVH61c3RsS6wWiHQvhMguuyhAQM97RQdrXu9fKE1f2x",
  "key5": "5d7Tm2SEMxSvvL4RXzQYFBaPMcjz4kyMGHtJv583wXyVb7noryMugvbRPTRSdEgiuRFRR5Sq5hkTEa7mDzREyMxZ",
  "key6": "5pHvTELtR9aixcAAeXkogqr838QfTed5veXCayH2Maq3CkwKNL6DGgqRL1tJUeS1RKURP6HNtUZCwwNq64LmhxyH",
  "key7": "26GwPcD6as5pZyM1p45Wvt2ZrUhfzj1Cvkpra1tTbmDa1hgdtS7H9ftNi4GQ7KoVigcB8GW1jKFMc4sCVrgdRoBm",
  "key8": "3YhBipYhJDdfSWQL1hoBp8A7Z69UjAteFkBfUjhZnGpKViRQaykEdAgz5bQHquicT32ucZwhebqHtSaq8xrw4MYk",
  "key9": "356NbuHctuLhqdAXfxqcRfTKVX6bdtCLCCwdum5EkHbA1XBuKJrrTLBDeYe8f2bTGrz7XY15VTkXA1j4jtz7MgHw",
  "key10": "4Ed4a7iZ2WbjuXkt8rU3JJ89GSzcbWWxXqBdsiuaaMTv28PeNgSevmvV7wfk48gSCpLmzimziPLcUwARTTtjrUjR",
  "key11": "23uJPmzFV5FyNfnFQ9jJwVEAQU6XP3tE6k3P5jGXTHFw56BKcCXBMizfvWTfN4dXgpNwv8k4UvAtDHJgvoJCxzjr",
  "key12": "4W9K8pHigUQjWDgFQrJKDXnx691pVzag4WV7MznMYjNcyyq21qNj9ezKvrHBrmWJpyfi6oiC1uc4FQMHY76qQvuz",
  "key13": "53pJBTNM646d3LmYWwWrwx8tjwMGAedtBosFPYNnuW9f2xrYaf6gF1XDETr7ubxw3UTAWDyWs1nX4qWubSoMbBhg",
  "key14": "5F6asPefanXPwUA53ajgimMWn21ALHfTKzfCGWPPeYTuBywUsmjV3groM6aUGemoNHc1Si9iDTAWRDpgXu2aaFi6",
  "key15": "2gvPjE8Nio8qCwHws3bwN8d1NWZNGqjfk6GbfALagrDqMWZ9xTj94jRxURLGPSvzhZFbsKggXWrhLZR8YXjhb1hi",
  "key16": "5oxwawbdN5QtR8RYULVkQzScednARL4FHXcbEs7TioVSiBf4M2JSFjVjPvgiaLWYjUdewBL2RhWzVWzMvaWKK97w",
  "key17": "pVNP5hXJceXGyzZ1bFTXDAzSM3gp3qyMEeffxcCVBM9rQwK8ikPxGf1XC57yaX4rraab5uRb2ik5heuZs3HM5CD",
  "key18": "3xomQ6VaRVcPW9de1zN3uSBjzwwCz1CY5Gug3uaGWHswZNAwUro8DLKJ2mAV62vRp8LMdVKd29ruY5RBRjwFfjwE",
  "key19": "3DY5UKwBmrUpJkdjJc9ydYzCXHikEct3paUEqsHzdBKhGJLvcNb4NuaAsfRcUSs5C4rEQrNtXG6pz5r1xdZP315S",
  "key20": "3h7RydcD6uwwxtoDL3iVGZrHHUnKU3Frjc5UdjpJs8KmUCd4miVB5Rbxg1S2WMjRQBFUQVHUU1cNgvaCRhLLurZw",
  "key21": "2mH2DXKZFLhQu5gs8XVgqRoB9aqYK2eE2z2XYKwYcWjrXUvH75nK5ps5RSrb6vtnA5XsiGj4M9fuR6S5UrsLg7ZJ",
  "key22": "2dnaHAAwobAuLgKwaB4S6jLfMJc83jtxRHfsSiRyHKqtGF1T3MAXEn57v8p2dS6Dzskybu4vSh7FBhSNG3JgiECz",
  "key23": "21kZ73t32PfEw62bqFrfAEg93YpgWii6S8RnyoMq2WRrqKXxxpJpaHQo8yyygKJzQABEQpr9yRoCx3Y1urEa5nyt",
  "key24": "64dpJFfyAjF83gq5nmTuLquRkeLxmvMiSEg6g4HiGWnz6fvth42hL1n6mByyJRXq6EqyGrkARso3LMeE1sVUTw7j",
  "key25": "UuQfA97s7waQZr1ohPRRGCN5doeQE4FUbzuBeEXnU6zUheRKS4LnusQn53NGQiRQUVckTCtAgZRYFVVmpwBLnbn",
  "key26": "t6H8Cq1TJkCiyyjRRkgr4Uka7LK4i5Mh5D1nxzZq3r9YaEFAoWMD4ubcUojXiVCHgpWoM3WeigUgeAX6dvL2eeF",
  "key27": "5fbhcn63BCoXBFTg7agE1e4LymSinYDRGFJKwh4ZB4HbJfdwk5Y1arkTghfwUwWkvdUkBHbamr6zC5XBmxv6GpQL",
  "key28": "3RjTPVEfzA11M69ax19crjW7JjBjL8AQmd8YhmKHqnPJ89ETiYqwzFy2xXmreSSdrCmabQQyRoPWaejHy7Eh7THT",
  "key29": "2jaHsQJJTVerbjHELS7DVgmrruiDtBrLKjSnEpsjpmp69Rg7uEDUW2WoZrQE2CNCT8CkvvhwQHDghJhqhQ2xGdaR",
  "key30": "ZMy3mRL97fE7SwXgCTrx7YNEy4e973EXm8QXNMz8cfXg52W8TizPMa98gGAAS5Rj2x3j4MwBDYmMKBxCLiX3Jrp",
  "key31": "2qt3opqotGoC2brQr4wdbCmcc7k2BYFnobKR7rrT1pwDq67AYDpNEKVd2ZRk8Yqw2z6WkCLjAAjeEhBor7r7kdkS",
  "key32": "HvN7bSVK5x95uF6Vzkfqy8ocgDiLeESyLKBFpxEnQq1NVJiMzkJczqWTKksoSNcvX5wV6gNcJZiYPUZpdoiypqS"
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
