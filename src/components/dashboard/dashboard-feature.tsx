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
    "4NCaGMprzdDuuDUYyRsR53qgm8ft2P363mHxF2aG6HmML8JoSQToEmJj29cGa4RLgoc8fqydCCNG1SHipxyqP3Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P1Pp6cC8rsY98R1cnTKrtGbbxPhbKNdsJp45NM7YU1RJidhvM46iwtFXGCLatGtPyTwrfnUQfxzdTA1TNTHi7xE",
  "key1": "5w9xUj8FbBHASp7Jb1FZkKFCNZCvb3Z8J9Ajssd7cH1EHqqAkqhRSKYojuQZdju1Qi1tsVwqMD17umRkKtZ8FxYc",
  "key2": "4SRwEUA4U7i9m2Mduvz639RUw3Umti7EnacDgFnFHZ3roKTw5E5AY5FfpUgdXfjJ1nvecZVHftaj84pFH4fcXPwj",
  "key3": "2bUX9MoqksMpxv8LpkjDLRqCaqu8Zdf2cDpY7Biwuqcs9ny9a8tCpsGTJzaPmAiCUYpkcyWz3zxk2k4M4mMF7M74",
  "key4": "2y5QtaV47eyG35QsnGtysKSftaixfiBzUWbbwYysKfQBbSTTrvovfF9p2FAg3MnHQUi7G3HocmWpZSijAN17QZmK",
  "key5": "47LRcJDmL79VRc1xWASzyyTBkJy93bKhfUCNsGJC46QvsGsz4hrKwhpKU17TeaSnp7GUJezqoFZnibpfW3dkapR2",
  "key6": "4zSeB5Rd5TJTWBbZrGVDuvVb7C7jV8fpkAtJUDpgSfgqoEqAArdwZTcByKahb5qcs68ZwAZTkfy6dQFnhXBQhmdv",
  "key7": "4E7jsjY9it7SVLcfoU35r8zWfksfELWPUQtAQ746Z954eJQ6UWfTtW4vzZnVcK6R9f9jYiQdrVCrBEjLQKgjMyeC",
  "key8": "54zdyCJPDt3muctS4NrBDpnjG9KUvyY31EXHQa9HDAVNnvrqC1ybFeAHngkpSDjnTmfDPjfyohMAUXUC7DZgqPV9",
  "key9": "4sAujbgapqxCWKkbYD2Ut22LC4myUojRKPWPSzmkt9DLPpzFPB4jfbcXMNZdfrLDY8Hh5MbjquKz5noFEeCWzrtp",
  "key10": "27eHrz3eThrHrKvE7ZQzssmwyQcsnKYQPxJ4YujLxXFdTjVtsgdzbyScc34EFdHU8mZrvvFjVsYLo7WjFNyxW2Rg",
  "key11": "5ZuAYuqKv3C7LwMshaDm3jgR7CWLoCzhXaCjoj7LT7XCfyEw3Hk56L18pNYjRPZJr6eNYs9tjnaaT12Q1oWdYU1z",
  "key12": "4YzNsuwrtzZEYf831PD1LXvwbnyWeMLhLGWfNrDNjENarqeAvqtpKKLSXJJfhrk75Mr8U2nndtbqS7BSF1eP3b23",
  "key13": "5cefBFk7TWb85f9FSXvxx7cyQ8aUPTZzHDrDnAwtt4cKfUSqc5UnkqpXcfMeLiRehCVoA9LnUVQC4g9ZBofx2igz",
  "key14": "oRPc2zCzeRCz54sgdz6uHtz8QFa3rq6bXBXfbFYsft9v13VEPpSWaMohgKKNgP3Vm5mecNs6DK6wVbZ6QcRmm6f",
  "key15": "4PYsykWnRzR7RyGzvQoeaw5xUfGxqHrdvZF4mtdxfvgjxhNXstN4X9QkKoYR6SJ8mvJzkmnQZokiSeGiBK8oEYqq",
  "key16": "5KGGMK9bFuCWfwdNS7pTnqtLTr7oyYWRTBaHo9v6xM7pfdPYpV7dGatxEY5HRYgYMvyvRcYvpPVt1Y6mKZiVitrF",
  "key17": "3GSAPTATueyn3nH5GMyUqYQafRAh1cTYrQiTTdXFSmLsNusJeU8GwCoTzPJAkYuNRna2WCWmvE9uSmyNLWsgMUjm",
  "key18": "21ekwuNtfd9raNEszDujPnTn9aukMY8xuajiKA3zZPiCcj33ATdHoBRbTmZQkAf8YwafryzP1fFBg2v3XsqnThL3",
  "key19": "sYLE1uJLkwmYsqdZHfJczHpp42NrSkMQWDnNye6vEtEweqBksQchDXSWHyrhYVDMC92kQx5Xcv7wSJ92LowJJ9C",
  "key20": "3FsCtkydDUdfrvwjmHxTa2i91wxmGVFHJkduC6Z4cZLWqRFbrddTvRUjefyD2npNHGGJXsPuNjpnEaUT2i9YWS3d",
  "key21": "4kmcgHANek3QZNfyu1xdCTHx9kUqDXpn5W7SAUJzLdBA58koGQC9tUuTA2dzX72gnyTq9M8FBFASUfSZytVbkQpA",
  "key22": "5NTZoHA5qU966c9CeSKmLip6h9CZDqzRUH9Jv2vbGqJ9gNNUEfzZ9pii5eCeXnCGonHEutRZdRzLVWMQgvWwarJM",
  "key23": "f8NmgZQNtkRvoQkFyMUndacvCJURQ7Yh5YhFEdLoNcMoYaDkXNTGw8nkVQ6sTmRvRxD3Q4DbrPft4SJpmSqLcog",
  "key24": "2TbZiDtD78eUmUBJZ4eTVLY5qjueXE3QBQrnsFTvWwkvKU3pXEKW8V8gRRktmf4aZY5VBPrnuf7AsxJRaXPdQFXr",
  "key25": "53KiFmJHEM3uecHDDpRmPMECefsJ4JqM5845u9R2FSPH6w3rsxzE8doLwAaiyfiewP3VcyuXx7iCudC9hc7oLaqw",
  "key26": "4FKAuZcSa96P3vMgYHKEsLaPkPJ1mrUWsvCHKc2xByQoUkZx2KhJoBS1SDAxDmE2kH3rqjM8jVuRd6bJ1EZA5A2N",
  "key27": "5F3fZMfwgDwzR54qXi887rRfVwRVsvJY1Z6R9UBZXASu1GrPWeg3jW5ZKRWzAji6oPBG58eFsnLTi2ppKUhF1wB1",
  "key28": "4b9EZ6T882cznkcsR6DkW3dNHMcPADQzkcwWg3c7zAA4pz9xntomsSrbVdoYeJR9L66vTJe76FNzsnzWLhMRxj7",
  "key29": "5wZ2EMEPi7UFGyjip8Soj3rugZpeWENMpQ211NGsx7U3cPpHUeXipuCUYbyHMZqscQwdmxnYxmCxxz5xjSynnsSM",
  "key30": "WJn9FN8ekNxNr1w4SzmKAYrcKeSSj84KQyuv7icJjX3uCaR1VEXegK3k63PHqPrnNpPVMdNuCt47TEa9pHmWTKg",
  "key31": "3Riy8eFSfyjMFBEAuPt7n4KYFNWFwDVLqH6QunHB2q4a9kDao6exZT4Af34vJjn16DCJbHbdurbo7o7RdfkgB33m",
  "key32": "2GAQduDRWymWewyh4XyfUL2JdQHeAVfkbhuHeMG1SaoFGRiQA42yWmfGFBQiKjLhPMCkdeqbKGoRTc4e2fe8xtsX",
  "key33": "2RaAfJzz9JN4qzV42Po7t2B5xsi9kGCYe242box3bwmN1GPmCQPYTVmyciZftyzpuxkoQUgzikffM7kqeUY5RgH",
  "key34": "2JFG83m36ZBZMXeD673zS5GUXdjcY4wy6JzMv5XxehMHkemJS177Lw76dhLvnkbCe2qdFxbCLfKWddHE21WrQiUo",
  "key35": "3kbQqNDYR48ufugZYMFqQR4ZPK3Gmp2wYCGbTy8ajN69qPj1MtVZBQwPmCYz4gQECibCxUTkRneRNqbHottVnqGc",
  "key36": "NeYPzzxpdrcpXsAc2diqGBQN2oh6z7XPe8wpgr1E1Z2KfET6wvSsMoskzzmSi4sYcwYuLArsWbXfNeAXb8CkrAX",
  "key37": "DReJrPFM17iSS9z5FCNvATiGaMr7XMGrV2Pyz8GdXLMZrsfYt6fKmtRD65yqUES4pTqqQRtDHWGMBCfE4kUYEUE",
  "key38": "5CPvJh2gzJ8gkSuPAY1gQKGzr8MhZ5rYm9tBwPjimeKXzqkJAzP3m5haAmafmBeDW3fQWWAMMGug26CTUBdvGtZs"
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
