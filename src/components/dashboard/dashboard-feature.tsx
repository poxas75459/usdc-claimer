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
    "33YAbcBZyN3VwptcyZTMcZDUrwv7AyxkPdV6KUtRzhiF2F3H7GREEB5t8DXSHDizrBj4z9WSrbbBM5DSL59Nsrae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45BF6ncTXFuhhMRwaVcoG4J61DkDMGPe21hn6wPKXxKbmCmStct8LZJsT8kxwfvkkFWiujHw8TNVMbGQ2dm4FHLv",
  "key1": "5gNZ49GuD4AtPk63uT1AVddKd7YhdDX5z9YdPQGs58D8wHCxrXEgzrbYtLRUfKmVWifoqYfKryiCXMCkD8dX9Fq9",
  "key2": "ai1ciEVceEBcxX8iNCXQrPHoZ3RT8yG8pCGsbt6rzBsE1VsfRfFn7MJCFnpqkov62fNx9CW8b17yUkycNT3jid3",
  "key3": "38gXMMQ6bN6zsdGyE2uziw4gf53ymkpRzPDkLu3PRQ1pvrw5t9Tznbt9SJTAqzusw4QCf2B41gKS6ka7zvYQWyuw",
  "key4": "5tz7E6eirpZCvuPM4L7mw1NyEsjw82tgMo6FU1NC9n56GXkDxnbRqerEgsszWue8tqvZGhjAJvFWArvwPFbYfG3M",
  "key5": "5YDoV6bKYko5j3QSATRdfDusHzoVdeTJACNd9zcAzyntbxtXGFttUCqjEq3oxotojMbEq9Zg6fKP1aVNvaQhxYCT",
  "key6": "5jKtZcXjyfJHUkrdUMzQM9hf4rKNVDiKTtkwZX2SHJYAnJUX1ZGnUhh3Br6UnVWm5zhQbYrmSfufeGTkyCquKFTN",
  "key7": "486Po2BGoa1VPZ7TztwfggBmUVBzJETjW1GGJZhuVqfGU6Mbh32RJW7zTzWfARWjLt9nNtH2MtSmFfsLQqDRAets",
  "key8": "vQkVhGCJGfSQT82H35Uf8iztsKLsmJkJXKxis2BUia9h34jUA6sfZF2A9s1DcBxzMhWBXnTvWR5rxewQ52tbJxS",
  "key9": "275jgdjr5XCSWTEEbcfzQJTJ5fUWdLS6LzuQhjiJkhReGDbGEVrYUJJzcQv4RVRHduAiznB7d1FmZkKcWgHvH3NP",
  "key10": "5HjmwF15iVq7H6K994T5EZrDDr2K5QnNzKt4usE5DTVngXZbx7dUpBP8JvcosL12u7KRzooha5xgPz1DUW3kEJSp",
  "key11": "3DDBV4jsWQU76y8b7cpYXrVz1xd4q69cnFNYwrVwNDPDF7DpsG2P4CiDUQ6CjTnHCWVxtE63ES8j3NqfntFE63XQ",
  "key12": "5QtRYLYixTfz6vw6LVj8V9nAF8H3hqfVJjgiFb2aUB7arC1uRU7gpmtdwx1WfoUbewUtcqaWGu6ipgQXeraRJphQ",
  "key13": "3SSHGG2VCefCChFeN1PZpR6qbAZj4CNnhRJBHJHP2GLtNhdzz9WCtN4pYSBnrEQ6Es9q2toC18EL7HknjmbJ7EG9",
  "key14": "TB4W964AezPLvNGY8VtHVxEEqQtXskLMbZ9dmVW5EuVNx6egfbXt3ZzX5zboLR9LLrRxBj67Y7RRJi6AoWeZcLb",
  "key15": "2P31nbyNZ4Rpp4D4ZH3TK8YFrLrSTYGRHVSi5hYgTztwYNKRJDDC733ZiDJiYGNdnYfCcjoCcqj828E9ZnDKadJr",
  "key16": "5pnDanckJSmFFrpe7Lp1xX3whj57a7j2pt2NkdZ7KHxyX71TwpSd6jE8nxY6JoeKeDp92Max8xBUR3L6FU3jfwYw",
  "key17": "589SBjekCzuVjybWn2qgqto4PRDSsAyKek89xQHQas41XmFwb3bqCXuLgmyp7dZXiY67vyvMsMg3RgaFSDZMm8MZ",
  "key18": "2QoxQKqosh6uHhKtGFvMMTDtfnWHHUyenifGgpUgKkXE9FbWzUXp6eJ7sbFPApea538qBk59rj8ucPd27636VF6D",
  "key19": "Wz9ZSwst3v7hRFguiqeCTpE8Si7C13xX5PZgioZ2f3EvWzjHE6hciW69CvYctPngXB6ApN4ShiaZEzRuB78Z29R",
  "key20": "4yuYKJj2dgDuHvQWp81E5HkFrTMvo6AyqjR9d5Kq1Sk3d9SCxu2B2MnCAfWy2ivMyVszQuyerSQtxR3JEY7c59N6",
  "key21": "3c7u6VbTUcriYhKUKd71ByQ5GwqzbZZnpGrSKsd5yAMrZT4HzMeMtMHQKyAvSv3uKeG1ijCBjpZVCKJcsRXTxKXD",
  "key22": "2aCnNknNXQsDmp77EA1ykCLkRQL3rvLq7EJmgFKeKsi28Um3JiuFNUhyGSjNQ4nVbj6ay3Npg4BM5SjUxSKREb9B",
  "key23": "3DrSmxPoyAfjVtxZDDqitsTNvWgbL1b6gntM33yZ1m8yUkuGcq5WrQrkLwPXQZzqLjN1XHu1A2PAhVaf96X4BYiE",
  "key24": "2TdzeaYaXYTqPEmALNGJy5yvyTCDZY6pdDWnPLWaaJpRv9DVevh5grJ7mqbRZ1YQGWui6zXS3YwGmYfKirb8Nfqr",
  "key25": "37HHFcmR9R7WuPq9in2c17WeWJ71Tqp6LdcmDZzHjUWW47x6FEgUzdNcG17fvExMdYTf4zs5Zo2TMzBwakJc7iY6",
  "key26": "2efnyERp6iiJEzUX9UdLD5kfRkHWiJ7ABRwhcaFnTE84thXsVDvtDbLbVsmzegg1P6bKGPkyrQbhC1fEC4osJJjF",
  "key27": "284pbByaVc1sCLgU1PFcwcFGCoVqSmcLCqm41MJFKt6k3YBT3rCTzJhmL6q7kqPvVEEpkks9wjsMusLHFaLENUtk",
  "key28": "2ChwUCoiY3jGMaXy9B6saL9mzxn2F2PRE5rBe8hB61m9RLb8cLnKFLfL9gyGx3ZRRrACvnLxWZY7xEfjFFMCWNTr",
  "key29": "5neQ12saSKQBTuzhmbuC7m8pko1s6Vx3ZQsucUVTPMiJgxQ8F1XKbMpqRS3qeVdQkqQYoksnb7PGTfTrrMrkamgQ",
  "key30": "4SZDBTWkJSEwAC3CQTsTjKdjCahr3nmYgfdyj7ekri58zV6brQFHXVFBUJcxBva5zWmw1L1gDncNNi4q2MEViTdo",
  "key31": "23a5F4Q3m4KX2Q2CyRCMxR9bCUdVe6GFUafBz1MCkGDUJXxCPDUiJGPDWBP7Gru1x9CRDdKvXxjq13Rv4K2AY3QH",
  "key32": "3mzR6jirJLPbZLB8UjDL2Kfi8hfGh17bRTs7MasqYGRMcUPLggznhP7M73C5eRU2L7R8ANzNH56MpMHHJac2afcG",
  "key33": "3AxvedymF2nJ4btYJqoJUwRLftK94nGT4xUEnXVa4boEwnAFXM4PdMnkVXvnpdN7ebTbS1dKvMLzAAdq7zyF769W",
  "key34": "jLMvMHxhZxsSQ2dCDvJ2f5dBEZzfupPgh2JFmRkC69NvuDZhy9ccWx2253W6qiXwGCFnESuo6DkRn13gkrauyyg",
  "key35": "4jJ19Ts5JYbuphumvMmshF2xAmDg7ZZ7VAbWgJjnDg4gJ1Ktp6TK2NWp2AJV2ZQPqLjuEFKrxkRQtbJ41PiLu9kU",
  "key36": "2qXU5vyqGKjHFrmzdFQBSwX7ZkNArkhpz5gHacJJrpSQyc36CtiXZprZbAF6prZ7J7X4feDb38NXR6HV574GcbmG",
  "key37": "4dNXHioZVmQJRC8Kw4PHcwUeeBbbr4Vv25kj27Wbg29yxGewuFeo2s92iP6wqRjpgsQqtHzU3s4DBcucaiYxC8JB",
  "key38": "2VM78DdJowtDJr48nLgmSVy1GPZMgCJxb23tkRHtVYT3Jgups5GooZVjua15rFUY4Re9EKfGXShwDMqFmdLXGN3u",
  "key39": "4RP32WwHsPRvra9WLE1GnMVMb8R1tepfZfAFDRK9tdSWMSDYQyGpMuWetJLCcXhrJQytFx4zkenNVDi9esa3cnoT",
  "key40": "36curG8bgGRtTmLJdUjTL4BmVR255zhXuFTLC9t1qJBjKfK4zZ6EYzn4t5cTTSQmGUxExwJkwP3onyPZJLfQbzDJ",
  "key41": "AHNtdbE6AMVvXEvpL7RVidyBa2DNARGKnyJLe8NJ94QB2RCFaHMic2HR8JunjqVkdCMQR9ECFhKqV5cHfG21iGc",
  "key42": "5pTbTw6EZddTHb4Es5jYXqxA79sHZvoowMU2LgGmmVpB3wAumb2zGsviMEU8cxR9yFA162eqz3nwfrKGN5JWASDc",
  "key43": "34eTv2kV7szRsrgRvxsFi4bpUHd9qAcEVGDAvTyK111HLunHMSQ2V4EaCNPVfc8Gq2EMvN5jHPsnt5pM6NGJv4P3",
  "key44": "2cQF7MumttUdrFpi6w5ceF49rTFCVbFYEBNFVty8964Rb6ez46h3e4uAV7jiDiSs36NH2adiKKcNhFEAk8BSCT8i",
  "key45": "4AijXHsEqhYU9DQpM4wA5dXHBNA199JV5rfLX1DtPetfeKgpWYhMpK8W11CY7zpVaoH1q9hbp67a6fmQsLYkcEPh",
  "key46": "4opAMFD4iaQ56g1kYrzQEWAWmBM1TNEcDWBF23SEt7oYu2BcSJuGHwS6s1EEhafKHZhLjuHRXEP56wapg68MGmke",
  "key47": "4r448cuLan6byXZoBRMe1WVGv1qKUD9AFVjjie31yKfmC14cU9pyd3e3xJvN5eduJsCu8x1Qj5nZBoiVw2w6ronb",
  "key48": "672E3KZYZeMfwYZuXm9aeDUAnPya9qGgakEy37CBFRarCcPNpuZsBHCBBoxpfRk48QDn37Kq9dEXPKn1yxbZ5AqW"
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
