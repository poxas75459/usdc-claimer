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
    "3kbpkuqekeu67DfyFhkcF25pYTRxfE22fr6yZHLvDckedoKpV6ogBS7oJEho2iirHy6tfTKx1TDbpiQ3YfXfa3pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j445GZUvaDVffQGfGeiMVv76pyHjsBijxsWpM74FkD1xkebTXxUzUBqJ2iV2PJNXDqdmtz7oekzF7XPwQcgGAoh",
  "key1": "5jTmP59TnjHqRdfFDpFWxPbEkzh4vhdbkkQwnH6xbcRCSn9mRK7xZYNrnwze3HCp5FjDXjtQ41fTYJWmofaniUGR",
  "key2": "4WZBzFcojadhKCfsJeFJXzL1wiN8NyvxZzj2oqbxFKyYx23hz4zyoaRDj6oYYv9QFCCCMQ42Xbm7vdr3B6M5yjwd",
  "key3": "4XTJCopYoHgHougPoGDU3dBSS81dYp8PauyMza8wNZRoeNxd89tMsYhZN6559qukWmzKBjtfnercSwiyvixpERvp",
  "key4": "5kfcoa5EQUEz7NvXa6eDHZyuNY74U2EauitYaYUJdLsgbvv5FnqaxsMyR4inyRRdQNxjEEW39HtNjqwMLDrhmoDV",
  "key5": "4t64vk9NtsCVUF6Q6QmPWuktSPEavhrdkumGWjmju293KPBxpLmxZTbLiLBkgkZafV8Vgq5cUZLHc2GKUiAarYYY",
  "key6": "2KxTKvbTdMNUrGDQamnJnbjMgxnLnsrNoUQZrA8hhWZ46vD3vZ73vLS2NtLPYbmMrxNdVQB8AVV88etnnXzRP9QB",
  "key7": "55sRyeieVpyQinwgdjB9GiFhyaNb72RdXFKZ86ngE4wiP3FwWU4JU32KZFCYVqoymEt8W9RyA5EroQ7FDkqaf1cq",
  "key8": "5kiqJcnT9pffxyy8VJP1Akr92ChbEZUHpkSBpcQZmpeZibjVFJUYDzLgmimqueWC4tg9v9MBE5Leabikcu8WdAfc",
  "key9": "65zERWvzuGomvN9Uigo88ormGeoMyULigotvaj1niuNL1fgfd8xdyfBaT7R6vPoHSkpnmEbC7VTxqgJWacHoDKmA",
  "key10": "2dGGCqeaRw3YYkfZSrfNmbZY1M9xnH5fPkKmjJ4tnjur1d9jKxu4eRnUt44BDUWES5PDP5TYgfWhthcyjdbymx1J",
  "key11": "3P99DJjXmp19LV55epgYppwqz17LBBFQPoKkFchVKgsTQfpzvnDc2GFqY5MJMJdXve83dRiTZfguiyqN7FkeULvs",
  "key12": "5mdhGYmVgSRj8jcBKcTWK4qVXc2UArk2en953M8X8ra344S1dEVyuxBQoYpQ1nvQQmtp1Lx9WV8P6UL8ifsdXniw",
  "key13": "4FECLUAJD39aeeRpG8sGBXH6bVZRCYwe3p2T1m36LVtwA3jwU3FpQw7fG9ZNQkX8vyZMAKyvNzJQ7rW81zFmz2wS",
  "key14": "5Qv6EXJ8FjPUDhTuKj52vXVudfDxrT9QbS5Rrssi14qdmjYSPWzhwVn2uEbbTMr5oYvJszHji67Yfzz99FBtnh5D",
  "key15": "394exbwecXDACtNzVbsR8vz44HH1pCV8UsRPqXREFKqYHesT4JHc5yrG4jsUDrKmrNQeyK2AtzomMj1dpabdoTZ9",
  "key16": "4u5bo3cuPsvFgmCCUjSRx73eu9v2egvCgG6EbH5CMzACNGMwKUEYMGTNsbsetWod1Zip9eZiSkxPdzzdNJhMfEWk",
  "key17": "53ZqoXD7V2XmC8DubfvWyuEnzQuYZ9QfY4uHPppwicxFjxqkGkWp2LvqkR1hfUit16Ew5M5997WmefP2R5ncxaR4",
  "key18": "66Rmq8PPfPSFvKKrPF5CGeXJG3y2omGSn8cP2BjehkQAfsagD8pDvRgMtWRbbK27xYwXnqevcgxYT85gYDQEBMjJ",
  "key19": "5xxypgMRLXXMQGr1ypSyYyHUTYPXyEbso8PYFavxckXxUAzSmbXf7UHN3JHB1uFQcWoYHSbAdKVpjCKusYpLyv56",
  "key20": "4Lsdempo6h14EnZUf6oeNLnv736LmjLvGKeaDt4dPF4ecmkuycxun8uW3trbNnKqXGW3nLou7HroZUiHYmuyWA57",
  "key21": "248gp9zZVWdwZ9qbi7j8eGRPUNErXd3DDeqtLAbDm6Cm1jWPAfUGo6Tb19kZMgxk4zWT2wgwh4nMcM6HMDUDibgm",
  "key22": "3Zu2i7PWP1Aa8XDTc9jKfZEWB1uYgKV3W9xCdvTwf7jdxBH2MmuSBchzZ2uRxBeTcqxoHKrpFG11McfXzBZ1ZicE",
  "key23": "kPsHNEZji5xY7NQLsjqx3BPuoQZ5MULvg9DByVjxmvfTFcXmA2XUR8ZrginEJmxh2JCWSfWpZvNsh66eZhr9npU",
  "key24": "37m3KBy4bfvE6L7YG8u4WaPQBu8ySN43hrcgT6rctrdgZzzH6FzDwYAeAbGdnzsGojmFtjh1RnSGtYjyd3PGzJzL",
  "key25": "3seQGXmN82BjyFenqP25aYdwCmavpMokyQUszYL3awVAYanLf2fWVtrrGuzKgtFEQmZhDUh5govFhiHbqGNw3Et9",
  "key26": "3PadJXvGt4RfoxbpUgFETL4LLXuEAdAXVi8JLmf1Uatn1Sv1gCqoFWMf5zG257SG87z8p3dQ9X3A56Qus5DWUSpF",
  "key27": "2XEhPa938VfGKV9Kcjz3JVbVEmGA3izkx9aSSyWVFnPrC3rSMr8e8t2SC2TmVPVdhBibQFFiyF8SRknyynU2U8or",
  "key28": "2ubogz8dM2c3z1PcZwFzYWjoy1F8s74N8yKUoFSpAvsbhmjtwmuQNVvBmynvULnYALke4cFe92oxNr3nDKDaGz8V",
  "key29": "3LCxW29YR7q2CX6qg3ENQgMFkMC2UjxN5JZMzLyh3S9XDK6k4Dsv26neejeNhKzMoMLZteUDqmW46T1ZNJT6ryw2",
  "key30": "2XaXpkQ8VHJ55HRfAExxuV2tinjwnkPtRnrUrVHMiA3fvC5J15bn8nWeB15R3x2rkw8iMyWvrAvDaoABX3FxaMgw",
  "key31": "t1uLhqoPjVPL6oqr84F4nVXAQruMLeTf6hUs6bVQULVAHnrjK9r3j9rrrEvtP3My1DGvRACmmgraxzzPqqEBoan",
  "key32": "4eigkYCaTxT2XZs1PHpXnDA3f2mmEBYWTQ2GQkPDMe2t33ar8r121icM31a6ckPESMtQMHLSnZSs3ngWHJTvCcwM",
  "key33": "1rW8TBUwZccuzHnT8EUp1HyrdtDHek2bo9vWFYRtf4oudFfT38GresUWi6dU5rmpR51xtmzjbU3xfpY4tm9rQHE",
  "key34": "64BHBZvkcjzLcR1SfXZmug2dxDKTJWkVRQSJvrz16tYVV4n5jfZaBfC87jNhSEAzA4kUbjALEEtDcxxkygQuYU6r",
  "key35": "2bFqL9ELwvKd3jKrhu8Ggq3TbhRarNzCiaE62QSFGhyRpXNvjtKyiK1YSyQXHXLP6gs5xvQEdpWNk59weSWHjXov",
  "key36": "2qLzq8K7v3kNWGZzYiU4y8no49mgQ3ETaiFVPMDQRiPmaoVoCY7dvKhEmjj1eETT2ELSbGuZq3yoG3q7jVp3nthW",
  "key37": "4SYuhkrERgfeTK2yg8aognDkZLUMkFxies5AgbF1JS64nRd9gTFGsr5Vc3mW8F9Dm5zv88qsHMxM8uVakSh1wBZE",
  "key38": "5DB14XgEJQ38Ge6EFZGJMXMp4AcLACXbfYCotv8sUsGQCK2qNmpjfWtwL3B8uUzArWJTpudNTUGEYyN16PKytuen",
  "key39": "5ZbgnZns2No4AFW2ivHXYombXpJ7XBwa8USp6b8pwQCnr4fbCfj5obcMwnoDGXsL1ZoxUfgHxB7EzfoUCnB4p7Xw",
  "key40": "3NiS7wUdBKngrpoetPXtXrapBjnEvxGwswgp8Vkcx4KhsR9sk7EBqUHfNpntUMxvzCxTzM5U8J6RaMwL8h7mnjqr"
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
