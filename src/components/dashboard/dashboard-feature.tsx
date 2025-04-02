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
    "bq1q2PHjUeLMuqDShht7R9m6KJyqaFX4Wg1WbwJzLD6BTt2GVaYf9R6nQANdENiyMxp52oufp8a3wade3RHFbZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gtXDomUyJLfttiXgRDLbRUQoYAy4iuFaVzZREvpck29X53PPiyU1XTLocRn7SgZHy4PmqCFSbmjxuWTxZjXGAWp",
  "key1": "3mTSa4MwLF63aSvQjYRw5BWAzwydELCgrUBKhBhtwhoVy2dwgefD3WDFhQ3SZaATRTjN8YAbKcn65WyUC9b8yG1u",
  "key2": "2zbQY3qMTs4PNLu2eocn57UexvNond3mnoREKSTWh7azQRGFDKnnqFHiACmNUv833yWFNeU9tbJC5SAwkgc3JtqR",
  "key3": "2HnHYXb3mAiQbYsVWwhkzxSNj3wdypWKUoQkDxU7VE8W4QSAe9nSfKG2hnnaVK6pQvi8FicHK4Br4Y4Vfk4A7eic",
  "key4": "3rv4R6sUFf3kCCT4SXcFTMo9TYSdJuK5BRfwrg3mcsa4RvEEAyjSnfao11Fiv284Y8vLvbeELWJPmMuVqpNnCxUr",
  "key5": "4hTmiqBM1y1jyDd6y25vZMw79PMBP5XgepwyLnsM9oojApY2FMDsrby827WekcX38tYJA94SFYzCKcGSL3AEoTuU",
  "key6": "4oA8ayoo6vZQzMLfqdneW4kpNtrUywLvqZj3UCQE3Eq7LLgAj6LWbVUv5wFktReY6DRom1EZGqT8gT3vxoxkzqGg",
  "key7": "4Ut8oECHsqwxckZNaqwYibbJzr6c4Uq4FpfUu5UM6Jxtdd6S8HhapcvKysdBGNYNoL6Vh6ivou72XDD5R3MfgHxX",
  "key8": "5384xGSuh3byCtTE7VzNpaBr9bjXHd34M9ZZZNssJ7GJ7HTwLrcbsVFkGN83CuZSoHFSwzePKcdRqakiGNYf4fxs",
  "key9": "2hb1Co4VtTALWpVgXQnqCDvWcMyyB2xqn3UbKV5QxPTgx7TDKDY6z3e22q5cd4n5K7jP7t91Er4P5xgo2Vt6HEBu",
  "key10": "5z2FWf7tZ7EyMhvzPEEedV4ZvGPzMk3UqfMQKaP92L6cEv45dcyB78nnRPj96bj3jAAcpHxYVnM9pcZ2kaoB18os",
  "key11": "2a4z8d7U1pV7VtMCxsMH2BWFP2VaBuGDMmhYEhMkPnzNHDiwTWJ1q98E1VospACzemsqcAaJXvb4PzytsvC7jvD9",
  "key12": "4dW5qk9EyNZwEwnjFyrceyDaJC2k3ZLiF8y9fjFXseXCEH7pgmzYBgp2R5eRgEP6rvXywX4tFL9yUQ9RJDdSVYxy",
  "key13": "45VX5pYRb3vA1LALHwGFhXP79vnNVjiPvQAVbUTHZYiGXJs8sdLhPku9NT65MVLN9n3nNom19bjKr5GjZRBs4DoK",
  "key14": "3VYNcPi2Emxz75qn8MXFza5BZzHJ2EqsKANhQFyUMS3kcEQ7jr4gTdt6SvEGAEMe9v2EpE1h1xMC3TSMcrcw8F3Y",
  "key15": "2iCihAcSTUzGPjV3kehepF8xaiKQAzea7u4jJ4LPssid9PCmNCAXmj8xwRiKok6SqWrwcQG1vtmvpWwnNZHwtp6k",
  "key16": "5MwNcdKSnbkwkdd9JSF88XPRjL5hZcaVo99G2Fx6x4Ta46MFynYg76ncgJ61fgRMz5yJYKPZd8vqz7UAVEMra3AT",
  "key17": "4aiCP5P19RuP32RYR76pMbmkmSa5kMHu8v4U1Fpdngmnm5yaH2BxYNNdckWiEoprN6unL6wm4sn8KKkw7sS8Ct6d",
  "key18": "35p8uiNtiBUSJy5hhdhNTvtZjDMrLvkcpwMLuW7DwLHaSAKkzAQVCmSm6JYZcnwwLZbUtkhN5C2HHx2Ua5ZUAmrD",
  "key19": "KECae9KhDY9Fne5wgU8NHeYbU42rgqWhKNvyC5gK2QrLbfRfvWPaXnRHFMLCbhzyEhcYXNs4k8BLnKhgCpWatjb",
  "key20": "3DMrPWtjWGmNAtnAFpvAp5PHR2cwYedjPDUTcwuQnrZJg66p48tpAx6ZiVSDcPCVR4DjVBTA5wDsCKH96SWjjPWU",
  "key21": "3qZ1wS6H8djrtxNCf945YJucrebUkpWsZCjiwz8GwkJX7mnDz7LZmb58j2mLuTT8KUJJZKEBEQ9WjotMgBHPnQ8T",
  "key22": "49cpWwpy5otjNC3WsGyDcyYmoFdBLUx8X7dA5LHDimgEECT6M3nHtaQfUfPLgFUmhosej3XaXWdrkAyNLLdJWQ5T",
  "key23": "4cm4m5ktc7axsrWTLKarbbXpQPcfoLQxLJxZx7GoBgiEHXMyx6JTsg3FxhmtCg4X9qjRRfajEB2fKixixL8drvPm",
  "key24": "3brGSegemJcLx4zf4FwUfXN7RGqwEwZjktsiNxHKvDNpoK7daJ75scJQ61MZpP1piUkHWVNAF3SomdzeP9knEhY1",
  "key25": "28hfZZgrfqqLqbPuXspNyt5mFJ49BhwHvHfPKi1k4aTNL9TXEpbhTvhnWoBoSnkMm7hZbqTJSNLTDXZZKMvMhzcs",
  "key26": "4cyDydX4RkoRWUK47PsKUPCu8c9bRNCEFd5E6sDCZ2ZuaVDXpeH4Gkwyn2i9bdZ2nEDVPL6zS1Cdpf7YvXUhrsyk",
  "key27": "4V6Ro8FDjTep3b2pZYv8YeW2espMwozQ6ZRaVKBTVS53QDwuAGHdRT9a1wzgNkdTGzkvda1bxAfADW8nAJJwSUHy",
  "key28": "5KNK89NnQRXj3J2KSVnBt1q3gCWindJKe4DxCDXPQ1nuerSDyHkj5njCyj3bGbeU27dr91CXsBid5sAHfCXzKKEu",
  "key29": "65pJfoApPEsJb8SSmCZ6UcpfS68XDNmUTD31skSLQbSQk53MvpHJXY5RBac5QcMhpEUan2YBha9sFBKNACMaFDsG",
  "key30": "4vkCZN1jahXATjHwv1B12bZfCWacJuevEpmNpCVBAfMN9hBVM6EBz1qLHqpAjVzpbjm7JqtgcLgRbdqGonTppzJW",
  "key31": "3bAvxkRT4NXuz32sQsCLHXVyDX2VfPYVVaFmKDyJbTKDoQfM715vypg8dD3rui5jLjAXL2GiYfPY12bp6BU6CsR2",
  "key32": "3XsMfsGV3DewdmXyeEUJgmP2ZxW2vEDKEZWSJXDN41xKxjp7SyipXzhYEUanSS4ZnvFjA8ggkWoxsQLuvmhLvhSM",
  "key33": "3rh4rqomGB3CiDhfQy7omavKPtw9SEW2DUyuxfbGrJ3623E9b4R1KG2aae1LuYYowgSEKXt9rCE2QRzCGG4mRzFe",
  "key34": "56LbL3ADy4gByi3aHbebL9sT9v1kQ9g47Y7NnC53kkvKGhzyXU6PtHHGbgbmtsERPFssndweb2YNHWfr6iZRSwTV",
  "key35": "5DbVosJjrpoxKMRaUTUsYUcc2JYgkTqSkmgon9jviSNPMvnAg56ahmLpKMpWAMphkarpMKRFHXAxigpQqQLCJHjW",
  "key36": "39m84csQe1JpkjnCy8dvWj83siKTGD5cDzRtbr5y8fPJ5AiMsozh1VBW87oHZ6Su2TkUFkVh5oWLmuLPD6D77M1f",
  "key37": "bRufUd3peUzSyGGwsCQGMBsyTuaE8KqaSo1i1Nev4mVtLE2QDc476Ba5qyxgw7uwa8ZN1LV3CSLn426yrgPwEfw",
  "key38": "nhca31nNRG99Z5cnvzgbgdu2k6TV2UZoL1jwCUKkkNTd29ojHHfGmHyF5FYJt3sCkg31Vf8xBNErQ6ftxqNHTre",
  "key39": "568ELLx83APfMLShuf3a7ND36vFJihrdfFn1aQk4zACwvNB9zkeSvXWCwPpJWguAUYdbQcqCeyuDn2HgfMCpstPm",
  "key40": "PEEBGYpXw9qY6repKWJX85ySCYWqSBkB14PURX2yjLxn6NhioERtiTRpaHzeoPjLVDzdX7dSAzEq2F4Hui3Jm8j",
  "key41": "n7AcYes9byNffnVECFyzqQ6rmbPyzMHfp1YyxDopAUY1dmbL9k7Zonc4pmvxonc9ShftCzqwAzdkG5nxBiEG71z",
  "key42": "5Esraf1ikRhKDFSGFeMq4JrmBm5Ag1JPoECsHZKRVG6ouw4WmctVL9DEuYi2zDQmjCbApysPh95WZieHWxa2WWda",
  "key43": "5bCTC3ByREMeLMwZik9JpS4ETrrv2WksQ48H3KaXahZ8oozmUsLoHeWPPxumc1fjxuWgwsostRv4CNrhVJTVahak",
  "key44": "NMeznSVicjvKr8jFi94HoeY62ZTtDdwYbvaBdYbc2hNG5myFj3kuxconk8Vzh8iYXVZ3Pn4TGwk2qGrFiGVcKGc",
  "key45": "5tkPo7DNJwjFLEZmDwyb8Jvwnw2G2ps5ZyEzA9DrCGjUAB7fgNaeME7QpNLxRwwWKZWrFnTvAmXxpRvbAi2wXCE9",
  "key46": "4B6mxKr9v6Es6MQgQ5RSs3Ff6zYPURYrXufNPwjbrcqcg8ETgoXXL3bac8XJ2FA612qRYBgryZkPLgbsNfYe2Wwz",
  "key47": "5PqGVNy5VdWzZJ9mHop8Ej8zTdYBS7jveEo7UAHMH37nWy6GnkxxcRKmesCPLzySkj7ud2sdEa7pKDZXmZ93Jxjk",
  "key48": "46dqkkYdsvmjSFeLmVSB5yKr4wdmGAnf1LKF41bJJ9yimDM2jy96E8p2LbGGSHrTnBLuYeq17td3LGrSSYdnVdyx"
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
