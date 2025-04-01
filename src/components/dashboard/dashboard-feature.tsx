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
    "4T4gndb5WTWWWoLwNJiXHr3uqE7vp46No3Lp5jHvV1ULBjjWqqZ7m7MuApDCMyAW38EBbMVNi9Pjnmtg9RfzPNkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5troPVXJWdH9mgmLRJfEPKZjQ8yv78McpYv4uNF6WkBYut7Dq4JWHhNxbzzMp1FckZE3kxTh8oa4PjPNgbSJSrdB",
  "key1": "3YA4V88iL2AvFqPxYXjAjUuaD7fKuvGdaDoiE9Pg74fYVt9jBVsB7xoBpAqtQkMvaztD9BHzQ7869b9y2qqDoNAw",
  "key2": "32JzNbbLFY4Aw7AzZD8uz2QFxUNReUdnRZj3xryd71kkeDvUiTNbCCrvV4VQN5U6EXYU6vwNvuaLK6BDmtGNK3gf",
  "key3": "3HFFQECAataDpce4L1B8dgCVKACPc4M8E767pgfYhttTgkcs8TmWRCy8E4L3rsz81teSfvdG2TiUQ5AnrnjxDQUn",
  "key4": "4NzqLasbAz19k7YB5vSBmwhwq6XhfYm9Ch7ad85Qq6ivwnsUFxG1FPF9W7qPj964BoV66ZTvUtfGXTcFj3zLh3Kd",
  "key5": "4ijtRx5oQwGFoXQws4s2dE7eHzqH16ZBPRSpf6amyPXWz2HZbXEEZrhG75gcJ6JKR7D2PK4fexGou2Qe3SiKwqZH",
  "key6": "22XxJaTravnCbjjwndeQKvoY1EeoiVDVji6LEeVmScG6paDU9bURM9CoAE8zFHqLU51AtNGeaxZDVWb4xR7WrD8F",
  "key7": "3xEoR2Aj6KWjJGR53cJNGuSX2AKCzbjo5e2ju3boivAE5ReVgiTg38RU2WNCb9PGRgYAw3BP7Vnju2vuQBy399fz",
  "key8": "3ooErNbJ3E7zW7T16Ti9yjCqgqSbLkkTn3uVsPGJ597DF61mYaypP2A97xv85aHY1kHFh5ub2ZARUDNsv57Q51nv",
  "key9": "5Fq59FTEWrgi5gqRfn98PKtARTEAnA13E8xqoZutcAaVxjRst5jNYfdLwA8RabRJWB5Ako5hNxhEBe4FVfqWL5yn",
  "key10": "615HBQ78brw4cLVR1Kc4MH2mNRvqwq1yBFFFwan3Ck4k4hikg1UZig4WpnevSEdN8THEUNMU7Un7FLixJrbdohTp",
  "key11": "3jFk1fM3m5qKDXd5YXHJAWjcVuUMnk1J8U9oaPXzHEZJBTtcBy9VMd718RtcAX8VCsiu7LjYa3rBhTh4rsJJwjTJ",
  "key12": "2LLgcVrKm6fpvXVB6TUAMMmUpJzoCvZfBjTX8LEdGCB45hSJqVUCPLXUFu673KTJ37xqMAzBLn8M52QAn6Mev7Wn",
  "key13": "38yjFii6rCAQJXhGjimYQkkyH4ZUCUnbuJwW4YL8ESss6HaWd91E7K6FfK7kUiS1JNEJQY1T4GFGirbFRgpxK77K",
  "key14": "4WR6Cgr8eESkFgt3uDowFwjQRQXGU2uS5WHVG6oQpUastmjnhZxA9wtAeZa8oNFXKw6d3e83wuqj4Lt4uLwZV7ih",
  "key15": "3yURy6G3RhSCE4cKQMr5JUGUPZPTX1E5bM6qHjXv18phMonL8efBBXMYv3CEBxGmhJAhMuNB32gXjSSjih7ki2eR",
  "key16": "4j5b2SkpinLC6mG3UzZqwaWCpV6iUNR7mgxCmJuAVQT4aE8WaFVzsn4U9RvULYsXEyS9MY2PjLBQ8tEUMwHWwBCZ",
  "key17": "2TrHYehCPEbWydnzQj3TpdGUDVFVq3gd1XGoi9stNoJiEwKeSKrLkj4ZPeLXLexv81pWj8x8zJNeL4Hh1qAWiKPT",
  "key18": "26rgDZBkaSDijn4YZ5kBsggp3i9yPRnTW65thCJuFc1bXr82CJCtrtmYVVKpuFbmq3rwces6HEWKw9woo6AaEJw2",
  "key19": "2pDphoGh2P98WkBp149wKhRh8SZFxm9N2VFttYnVnQZj68eCWywadK5pejw2ungDhd1BPJi5ZcekmjGojQhn3gDR",
  "key20": "4fk1PKJJn8r7492hCjjEXBDo6WDLucaUiBCxgDg5tq464QwYHXaEGzRqdwY6di13YUvKyb5ccCbRQCkcykowsXe4",
  "key21": "4km6Ef26TcNoTmPtXWHmTSUKDaeJpBNLZqJtoypbQs7LnTXTa2GyYcV4Nr3KjkYGuyJNT7tYFPpZUzmh65a4wwJa",
  "key22": "326MJ2prXWCgRuauGP77WiRk5imJzzPnsbvddbFetN5H7tVDFJPnMRGuwpEx7SMWfgqHaHkpJ7sMt4WoVP7ojtHi",
  "key23": "4mV5uewNkrD78QAizubm1sSLmghdRTTYUuE8R89rKYTuU5ozN6gwoCgREXB7JR1x5hyoY8y77WS7X2tP3mCDV6nC",
  "key24": "3k4YsuvLujDMBg69Gz5cxGfdD6ZFbGtyC929arZh4PCwkM5PGXJJ65FXbjLogMLidbtHx3uLpEWBrM4TA98CArjE",
  "key25": "54z8JvDg4H9LidMh5peCweXYRpdWpu4Dionh9U7nSWTH9diGiAXjKtWrdXFf5tRuqMaJ31mVpFaBM8n23bC8sjcC",
  "key26": "5HGp5zjNWHZsr2EaLqq1odisWFwmdF5Wh1rUe45jXq95ewgG2hKfkKWUNczvP72TdyKh8cRgCehpzpivG3BqtNYk",
  "key27": "LxKHdFKeSAvQaj61QvuTHswjzJKBZXRaNEohm6BzZ9dhvNDv8PKx16YZxVEyuT1TtEfV5jrPpspY21H866wX6mG",
  "key28": "3ZRcr6qGWA1trk6wN3MHUkaRh7BtYHMLPFKTtBooQy2vvMj1rwkJ8kMHgxJXCsjWtFHLosmKU4AYPu9jHk1JzEtU",
  "key29": "5NXcqhN2tEEGN9dcCjKHcdxyU3m48f6CF1j414NqeUPivHB2zbW1bRaJQV1QAVRjgWyrkh95eYkDviDQVqubQzaS",
  "key30": "5DeEG1MFNdPPkz2iX5oswNqZAdzt4sLXXQFex9YdDbjewaByKmxNkyZWMMaceAAL1kYPm89TqS1ZY2w457x6L65X",
  "key31": "4gPaBuCSrHSoT1RyCLGUaBf89RHawzbbWCe9WtHAyEmZzbN2zuRsPWRPqeP3K7VQehxBnzihaatHfpqet6W4jg4Y",
  "key32": "4NraGr9EiCtHtjw36UfTj89bTQL5kpKDpeh8btLMpH4PfpGDughYT4BMJPit2ApyJac3fABMf8Ec3sPAQytdcD1t",
  "key33": "2x7Np9Jbvj6HqrnbqMezGH7hpwGxRxQ4iwaTsbSPTRPrnKWBPEFM81b9Fzbc5wCut2aBpxtBhzqiHoXb7fBsUk9J",
  "key34": "4vJ4QpLdtHCXhUw7aiYrTXAoqYbsE4exRe1wxKwaddsGYiBZuVpkT186TnAuyhE46eDMoTQxW53oNpxCEQdP3s8S",
  "key35": "2rfJPPopk1V9gyHufAtm5Ur3mpR6kQbQbwrkfwgG4j5BAfq6ezoUHXmQn6W6YHzF9vthH3Jdx72F7QJhcgHiyGPV",
  "key36": "G7m85yNvkFgmuzgZVjxtPRdbpaMohsqv8f2oSnSuavwEWxMg8VFYtbFmrcaNRH7J2gtBAuZNFut3nrY6iBW2U7r",
  "key37": "2qBdcrJMc9gqUnxybbvbuUcQvQhBzgxNDdtU6CiCUKVjzvPq8G4ELsUXmRWSASpdbSM7xx7bnfvQq3HhmBrQeEXN",
  "key38": "2H51pVv6TrJE9gxHaoyWU1ibp2noD1DzLgHVkBiNBFnds8XLK2F6crR4zGC99b9WaXW2weznweAWym3HCWiVAzMY",
  "key39": "3iTDCc9fMUgNDvvEx4N1R7RgmmLp8S4d831KGN51vsFm6dvp625Bzw49CuoymNn54LNK8UMu44YBbZ6bYj1pFx4M",
  "key40": "4BV1VUzJb59Ho1ao453tbNoW1RdCUNsdLBUaLnHRnhJSTprKJV4LqPRocKXbHcPWD4mmebo9o2XRayZHZdAtWN4H",
  "key41": "2z3Nfsxgr4qQWz92c4bwVLm6h1YLWMjdYxyMZ2T4gCrKLXecbE4cHnwNmQ2bkbS36h3BL5RFcn2i3oaqdB87yyAk",
  "key42": "sf8UhwytY7JmYqDtoxaagkNXcszdMMRr1BaxQTxhKyi6PYeUxygzFFCkvK44obsfe3GA9qSpUsH7WZr4Vuvm271",
  "key43": "4ZtCz4GStz53gF5CnoAKRE8wLDk4MXATcYPL15Lm3yoo7jQYhqBKApYr4pUpMcKLgtR6sfPJ6DV146HcQmzeAsoi",
  "key44": "5arALP6WzGkBCe5W9V1rvt6tPnwDyWPCrxuDqBp7z9tisDGALSmXRRpRRARvTQRN2sGp1WSiXgwHYpGUapeepBEK",
  "key45": "Bcsvfof1LRPVWgt4FSCxdXMhmBLA94V6PXNB9sY5mv47qhXyJGNz8ee3pGWSSUz86d5CRTfervEgxaVidkhD4fS",
  "key46": "4z7wtKRdVUijaDciDoyyd7G2cDnCDsPjsQcW4u8ZWuEUeMvcrSjSwZ2USgtKRK4ch9dBbbPtwKHtXPsK9XFgPmrg"
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
