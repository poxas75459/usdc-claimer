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
    "4udEKV8eDJaAN6kMkXWjjoVMHNqYWpr5rYk7uzSgUn1kBzkHbL5vqtnYqDmz9W9dojjbdZnbX1MCBxHztwD3z1Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S5Jxk6AhDdMGbxHB3FqKDnvsK1XEjGS4y98bevF87betbBs69hPMxaZy8YjDCfSaobGtoGin2MyVSCbSDG84YcA",
  "key1": "5j278MRc3XQaqQDsgZpdbdko4tfX4XKusWzHh1NRxD7Q7rejLaydPgxw32nrTMJnqWwxaMt3FrZhJhhEpRrTqswA",
  "key2": "3WWGADFtsHB6jADhG9RCPQXhokUo3L4Gr7Rs6FX1V3WkMLAztUbeGbV6YFjrVDNzobaGK4SRmQkgyKh4bVt2xMW2",
  "key3": "5anxePRhR27g7ez85S3mzMdaTvpiZm1WLKXVwuq8PuCaMJaiHUFSXCdrCtsFdTziHAHQK7xhMj1kAfCsxz9QAMiE",
  "key4": "qTrNoQSUtHrNTZQh6ruUxeHgFBu3mJis4ss6be66bZriPcagYT6ZckbGGJamtUp5fqCWs8SAcEU8zGUhjnQjom8",
  "key5": "2LQTzCYo8isXXGDFP8KBFZ59y9eyuBRfyiJuci3zGT4aucT6EmPLKrt3B4KTxerFMvSeWNVJ8LRuKtgvCdxUDzqY",
  "key6": "3tcsXWdJ8hfVT66D3S1mZKEyQPLFZun1hbN1BSAvnvGTspW8yNFMQeUZe6pg5PXotVA6xr1ZSpTUNXmcMHWJmtAz",
  "key7": "34dmHvGba9KCzEaf3cFrCjfzVPLnrzCGxtp6vpC1PoLCj1GRxDXo3Zni3CN43xDXhft6C45WVaaXCnGhFEpSJkRF",
  "key8": "3jKqn3wG5R8aPdZUaJsVieCWoDhjmSBeQ874PBWLewWgF2rKUuSuAR6PY3SZrvbpwVJ4SZqbV8V2vi258GM4Ts66",
  "key9": "63dMpjt8RzVTj11TeucFFuvN1u7MgUYEuDMJKa7bDSoSdTDVMPCr927XrPvRt2CJFLANVa7C5nnwuKefkCgrqyEp",
  "key10": "24A5Bt2zvmKrH9xmphbQg8kZ4UJKh1qrYgyJodejwh6J6bZ9QBxgg5qUP5Gis8i93snHSS7oaSmgDFL9zqRJ5r5W",
  "key11": "5QY7XabTCUJtwdY1nnrFGzq9cBSyPCXrLBuizuk2iNfgCchfdRger7qth6zohNS6DhQh67NATbLx25quyRECTxo5",
  "key12": "5GBLT2xTgDLkoYXCGzhJxEMQN6MXgxE93Hpp1cceaL6xyqEaCSdeKbk2GFyUvnMVTY1WLRhwdjgZ165wewiCmjLk",
  "key13": "4vwMZRMY7utVpmgosuG83x8qNqoexH2uZhkiPz4UoUUKUmTr8TkSqxRREueKJy2kpDjeCAZLMgGUWz3Dv2UbiNGZ",
  "key14": "2d3jEKdDccTsBaq2tiJ41mAhKSNSzn2MsjHPtUjcuidMXjpJsR7kriJyvWiAivX5wxmvGdpanSgLXL1VKwR83t5c",
  "key15": "5J7tcnXmeN6HUzitMXXR4Sh51AR2XjXLq1vVsDafYfS3bBpjg5CT2aTkzX4YqkKZe6ob9gtHT2LFpHVuvzrrpX9w",
  "key16": "bXccJgDSsiPiK8WV1A1PX3GoY82P4mg2SEq393itceyJs5coUqJ1P7x8o7VdcmCrDtLgmMhPNmVbrgUH3T2rdpi",
  "key17": "6bHf3dhypiGEyDZyTkcFxvzU2mJP5rDqSunrnWjwCE7yfRJJLQUJsYQmLQf83EMyboNLp2PEcLGiS3XQREJ3j3c",
  "key18": "qCRX6y8DDj38BAhJSmc7uWkqAFJstgzAsWUdheSLMRGYGZA8XsYq3fqfJpsyZa5joLptxR3vHjMz2ADwUQjdrvg",
  "key19": "56n3ST2QJn9QAiKqcFD7XFtjyXksB1MUesiEipiiZXjdq2cqQYu4iHciE81Zp6ba8RL1PL6BUJD6eoFhtSEyLGsV",
  "key20": "4862EPL493bj3gPFa89FvXgMwHADrw8LUgjkhxhgrVKADXEHTDp97KXQQst83DHntCyV714c7aadKb4Eooa7fwRD",
  "key21": "5DzAxgZG1oCxAzSHjW1Hmj3SEPbHBirmvGV43WDcvqYPSPYSJdKQ1QkZAFG7vt4cUnBmGJZLLBdhWWpk2DEbw9Wr",
  "key22": "5mNarB69XBph9bTqzM75oX14mn7pdGRfBsrpqqNdVMMTS9BY55yMmQsxA5Z5PKKcaxPe3chBKhbhda8QjJvUHfTG",
  "key23": "25syf9cinZRL95bQ8yzxeR4ZZjUwXVCvtMPZWhx3xsXkyj4hBDxjerzY8EcFJGenLzauzUEgAdJCGVvSt3yZQEmu",
  "key24": "tGsV7GnzRZWVNedsoaG4vtauHfPRqR2NfPG3R3WcjtH3GKYDch5S4yRZWFbfDNmFujeBzPCuqkzZNgRMYSzKKjT",
  "key25": "2fnv8RRSGyc3c1pnJdC4zKVrHNxPeE9k6LoEDLwLGeRYtyRcx3SQ64SeTTUWpqZc2qLNjSiFAzWA2CJGD2DfFSc5",
  "key26": "3FVSF3fTt9xWQmD7i23sNNhU56YBNYnF9ggTDFTAgCxK4RKYQyxwH4Zbc1yJoHtGrwQn5pyJRfxwEYocq2GLRRZ4",
  "key27": "K5f5Q8o9dZsxuHbFq6Mype5VF38AfEV2586JanNukhFwdwYPVzyKK8Lsjpo9AEJUj4DoCDCGSbbur3xup9ckCNh",
  "key28": "2gVTkuKFd57UKnQXPBQgPaKpgG42gFAu4LTXsoFaASXAxaEjuKyvgjcbtGjvAx8bossgWWTJoZX5iS9eWwwdTdVa",
  "key29": "4kRvW6kM6AR6qTjaN6cLSJ9FSBe2xoqwyszFDjQSgTL2Gy4GjLkkW6J8anhniG8PSJfgTt8mBibkjmrSwPg5pm5z",
  "key30": "3RTmZ34c78ePhffjU4yu5rHGLTh64d6wprknVPcAQXg431bHXNCX9RAePr6mEZUCZseUzMZUHLae23zeb9KenBs9",
  "key31": "43Nqmkb8FDeg99cEybCLfK8zeqoWa4RYg4Y1Ztoz3pvMCLCZ5Ws1yfGGBSteyH2E32dKREJvLZU3B3uWZqSfwC9X",
  "key32": "5tW23TMSXVKmUiJUTtgnihAFmUZHiLMsZZnzm82onQfpDCgpMDFn1JeBZhpaJWXSkFMCSTk8PdTKHdcqEpKWWBLV",
  "key33": "bnBpEhftsnZAdCJyrk63S9Wk9fLHEPieYJHCj6b73kDoswccbLBCsyT2XiF1nAu48dxQ87FMtQE39iNvawaKCHj",
  "key34": "4JrReAPgugFa6e84p7iR5JPi4zCX6VBjT8eFW3Cv5RyVVN7EMtgjP5pqWUV2xF4ZEJLwhxTw9Eivw69qsRBunX3q",
  "key35": "2LJgGtuEvHnbMHpqnsevQKcFLtzn5ofU2jVFCsoA59m4Bny9FSivwsfPHyVYGvD3kZsDvduuZ9nyeTQQtyNGWYKk",
  "key36": "21AGnSmB2EDRpa31XGKzybAZPzNTiz8TiALn4zvkHZGLTQQNxYF3PWGPosTXdimTbwABXTA63zv1KyGFYqCd9Fcr",
  "key37": "3MMFu1MMkUcrULvWHbz34kVE6pEMQR9DJpetHiFj3SguWAcSf2a3dcUtykdxkCZTYNQL3Khue85aEAaPCpX4YKFx",
  "key38": "3kYTknPdNsopwbinBJCKw5c2vTaPitRXvPpuyqJ77ZURL5vrVXTjKSsEdmawW5e3Qqtag21jzea4oGnm3ohheyqE",
  "key39": "GKD7jbXYsaNY41QqVkVu9614TjUTgXtpTzy1Ezq9FMpGpZC2KMnj4Y9D4TtT4qEowAUbacW2Lk1FLNdoqQxu4e2"
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
