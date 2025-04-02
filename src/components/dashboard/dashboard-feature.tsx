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
    "dGYcJud5J1ZMYSqrSbW553MtwQhLPaRuGRwvSDzdusqwdLPT6tUefTNfF5TpKoKNxZSNKNmnJ7pSekEtrzWPBP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E6Yf9k1MwBrtSc9bgbmAzjsnoCoBxeFJ3hJAn6xMk8NWNhj6J6DpWjqfZhXeSQkE3pYLFob6gXHuwKGdYwoTPwc",
  "key1": "2D2L1cV2LjZGpAcBumQpuC4NLF2mWrmxvuQhYFRwPcALi9C69CQEc7CSkbpsf1hwBfyJnX7AWGoK9xp32GPP3xmY",
  "key2": "2QUs6gVJBo6WAoiBP57YuJg5fkgGsZFDijmD6RuT8LfGMrwkeerG6HnK8iLTXY2CtDs2Y3ssc71gP6a8vXNszvPb",
  "key3": "51Jb5C2eKkgsEgrCMVU7WuMWvrHVannyzr2MNCFLB7pgTk5aYCphs5JPk7d2PZjaSot2fYSo8FFrFKukkfcadF6s",
  "key4": "4sUcJk9XH9fuUhH6T3eta2gzxQagCF8aE8auSJaDYKLR9aWXZTd724Myb153BcoLoe9QVqLgMF78o8cRo1UQ5g1A",
  "key5": "5wzKX4GhqPYjAzM3WKYBZSHCeqfLyuAXdVikDJvpX3dsLyYxbjywQCEvb6ZtGGce1nVVj9uTqSwJyqkxcaeDBeh5",
  "key6": "XrtBuRvQyXdeasLmRiVGuMNDKubQxnNNJRkEzh6CwUiXPnRjXRRb4kYCUxpvpfGfu3z4xBt9xw6Rj8p1kxtMQZQ",
  "key7": "4ptfGfxRSHMaFdgfyBx5VKv9AJjpXhEV6xoSYvuzVr8sqcw8jSLSuRAcq5sg4JJuCf73MKeqQntcE3o7MMtE45Ph",
  "key8": "MRbSxbVNKrUyDyVQqagthYaYRA8s6KQcLDfF63uVBX2DnePELRU2945hy3TPoqGcvibDnp3woSgFS7MpNpjR5HK",
  "key9": "3fRuKPB6TuW9KQ9C5doFHRS31MrAf9GihmezyrM2ScuQqRqv1ynwt3CbWjb1HLiWGsrAqHBVxQQ5MoCYgcvYCfYE",
  "key10": "3exb48enqhpBKP32XrBzfPGgDTHGq8qY6gaFA8PxJyLSrZLJXcYfLwPeti5oyVufQamxWyk4yxMqLKyyGS8TX351",
  "key11": "3CixG2EDFNeUkPkyCPiJTE75sP8iKVShMwoDfgE41DCNqgx6Az3GgW8SuV7jYEn1JkeUxgijcnuqg3fRZQTbMeoj",
  "key12": "4LqeMAVj6L6UYAnav1Zc4X3xCpNDQe1sK9pwcwfg9PeynteJM3FXSH8UbYSVUCJnL4YPsCQFkawa2AaYg5oVHe55",
  "key13": "5NTG9oWS2P5LQq3UgR7rDt7VY7aEn4rwbRe81SvW5CqXvjpc8nguwuon7bHQ352s7Hfd77o5yxPMUKZvnmG78r46",
  "key14": "2YfT44UGszx4sgbxeuEuXeJspET7UdLq9iPcGc7FBoXGNc16G72u2YW2xpKc6sF6MYevGheFi8JwA5YjgKxhaxHq",
  "key15": "4j2u5jXzwkZnXLfmG6jfQMvhbi8KoztWPf3qaF3qCdZE5dN7eSNEowDbZ1tukpAibscdJaprLXG1EqitpRxc23xr",
  "key16": "5HF1yfkVYSiYYFLFaBhCvK5BktHJPSFshcUmC7x5YpW6CkKKeMwioBQo9pE7qUSbhwdmTBr7kdNsm1nPtnhmcBSp",
  "key17": "2pJu1iLEBfZPXMdsrhW2asDvKhMfXahhg6psBYV74ZDu4Mu31H2nrwkpEUcvK8Pxfbq9LA5JaCbZ1vmTFfny1wfJ",
  "key18": "3sgAuAiTk9ptepM6172vMfytS2BJPiKAoA2xn1RFquNV9MH6C8jQupYduCN6c2AzLWH9DHK5ZfCabEYS76Fj9uTH",
  "key19": "5iEcF6MxinZv1PQkKQUd3BQUVXyFBKDu78YFsZb5KbwpDwaA37TcZEWjYZhrrDmm5YehZGsMnYG86MWJsKo1Lart",
  "key20": "2B5bUEx1gKD2FKZPGcMKooatNRoxpoTgtq28vs3j8Sa7euScYejENhfBv35YGox1DuF9KgSP6GEBfLjmm1CUV8DU",
  "key21": "gihJva4uTsq4UQvaz6pi98HFPBptWMcX5cbbXk8nCYQuNtbApJxEPWixUS1MTrybtrsMFeSD3Tf1nNVheHz1Nq7",
  "key22": "EWB6snhiAtFDvZ9EPsUiAsNTaa7LLDgM6AZDRPsNjKRGgc7p5BzfWeom9R1sjxGZr4rCB6u8SifKdJbyTV35j8u",
  "key23": "5dwZ1tYNDEbmbYYhM9YrJ1h8ModHNRZLPftmV3duooJkLjf4y7if47gmiYt8FXLVAA3f538gfQJXRpKGR1omVoia",
  "key24": "EjQWp6LZiKY6bz1YnVYDQbbDJKugEsLjsbvSTMYyietoFx4XKq95X9mq2Z3x1Np1ZEW52YVQyGKwUJka8UEnHzb",
  "key25": "5hVNke5Kg4psCSYD4mgWwnf6gHxuDcZtSuLvMJhvi7pNTc6c7SS8ftaXY6NREUaHbL1Nt8HReZ3dsRZ8cL49sDKL",
  "key26": "2DUeEgQkuKeLbTeHuc5ELmnvQA7ZR6cU5EKup26JVyf7v4moigSJhyRL8Cw6QizRXvz3isoV8PpgKfKREUrySBYZ",
  "key27": "4KowawbdcYCgWjGSxZsHPMoho9sis6mtkSG9M9mkGqFXKu42bNhEZuvb8hSqPyqMbBtUpzdc4gduU59MVUdPVraz",
  "key28": "28YXXBWXzaxSumdUxdF5DPSBDJyoBQRmzkPW8wG1nMHoQE7gNiAop6yhphFm8jHUnLkTSgejGGh4NJdme4ceHAXs",
  "key29": "rz6WvpExFjaUnUvk3Dwz9B5ULNyAcDjak23FNTQdAprQz2mjmAo3U7RF96tdbtbmpXaJpB9FCvpTxYkLWbwaxP7",
  "key30": "3RrMeTGz2T8Cam2GziXiNPSkdYA8NgecZQmKN2tKuTFQhMLd3gSaD3VkV6vDkpQD8PoYUD6ep4bF23YqX17JoYxb",
  "key31": "3HW9quvzK7b2fvc831WfSYhGPEUmYFcndNthAkBVdY9Rsy2RYNtQLzQtq1meyM15U3ySz38x6DoHs6oxo7D3QyLx",
  "key32": "rpbj6G2PXgV5cehzgdaiiviZQTMsE4cir4K6hKqvUBwH8jNTotabgouP6Lkp7Et1BQrctxxrXxRtDNrDCxgwHQF",
  "key33": "2wg6oXBa5TvbMq9vuckMRETiQ7gCopDdZMTt7UGXAt5HZjpWS8AYmcRiqjYzJcbBnN1k3Bqn1RVUdfAVRFGtJmjP",
  "key34": "5NmVHfZvdyUFiipikh84LBVTabk5HxJN5JkNn3ThhbX1HgpHtN99juoq8zxAXSb7gsRep2Dbhn7oUoSRPDo1WMBR"
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
