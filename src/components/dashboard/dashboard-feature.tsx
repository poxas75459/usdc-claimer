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
    "YX1oHLBCjfHiv6SLZKZmes6JAcA2EeWDq4EMg3Xq6sWLeEfV1NbL6Jb1Qt1azgxyeNi9V7GZQfTWKbDQbEhVTez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DimbzM1LKhkfXVouoSCMMc2F8ygDiF982ztVqxqtLZyV3tUd53Evff3XHc7pQ74AnhHcic8n1SoBaqwKJz7v5pG",
  "key1": "LXJ1LXQLaHh1vc9nzmCjcyU4BegvBZsDew9oPtEq3ZcSVjfPkvrCpiY8wGpyL45oZLJRqoBieJyor8DNjHqLFw8",
  "key2": "3cR21VHzku771GcCdyHD3eKZBjg38t2JBPmGmHEfHGhTXUjbs3iARwrFnFtWWjPBkQFiqNpZQrXsgQngBHppowDV",
  "key3": "5p56zEU4qMzLxVKtTrg8uDoXy4cqyDBgiRZBk5AX5BEBaxAFV7KzsyYPrNycu5sbPiTEg6DeCDQrSbdvMaX7bsab",
  "key4": "5t6UF47uPHJZ5nW4cz7a65VmraQUmM47FYyvoP2vMYdGrHfHhxbANXaaVPAWPw31wADjAVofTrjQzRY2rM3nqevF",
  "key5": "3DHdgkdbf2kL8bAMuPsd2RjTaWBgJd35Kc2r5DxJ6SDd1QqAbziCXZCSD9DpTGpFdnrBABcmcdxYKjyg7t1Xkc4u",
  "key6": "4oYcwfhwGQ3mqKpFHnRBonGMd169gQjzjF5zVArE4odDk7xQuURTPVq4LMYLCQRAKhgagYH5FJzEK8udTAdzanKQ",
  "key7": "3mz1q2KvPzMGSv21d92BSMxeMpBcARAP2eKPge5QNzUwseGm8ddaHpSryduu73DraN1LVhoocv9k8q8pzGF5EwY2",
  "key8": "5FCjwanvvLRG1RUNn7SxJtLMnh7QexkneT3EfzLyAq8F8gv8FJKC934NcSZxZnyNVNpJr4SJxKcUWtYP7Vk8URXM",
  "key9": "3qBEN8JW7VPgsfnTjnNz18s6FFgnvk5bg5u8KSkrtwBWyX2wNEfwkAFZspVpyxgLSrBhqNLsvt9ePLZ9Jo9bjyPm",
  "key10": "4gEsa3XxPWA7437bkga4diNrA8Rb6qxvdE2EZcQK33bp2NBr1mUtMPdAMk9Y4Una7Stik23Ruf8H9qPUy2bSN1Ng",
  "key11": "zZuNUDuXBydoF6cgBSwhwj3NDvWHBLuZe3MVNBpernY5ApQuTDtGG93HeQfCuYMjBpcKz8t4bH6RouLxmk7LAdZ",
  "key12": "3BgFFYRU9QxV9okwdhkHgpGVeM47PCowAjEknghGMC14k6gX1BcY15zaLpUgMvZ7Law1uFWNeXaSwws1ancFtYhe",
  "key13": "3Y3RKoZ11Tw7Dw8J1J6mQezRyM9foV1raP8jnEmwkm6FbEwBfrbUUzw49iyDRDGoxRo54Nn6qMWkpjhEBHDR3mjD",
  "key14": "XYa8s9pYvJ8WFyWE2JazxzYBABGV73DheoEsvDQBdaBnbdzXzKZ3qcBsP8CW5noQZwAbvFZT5H1nQ9xeYLRrZW9",
  "key15": "4mvtUWq2d5kxKnx5HDwfkaXj56636RKQEY854MND36BBNCAgbX2dg5Lg1SM4gS1srafbyenUKgNiVaqRkeFW53VC",
  "key16": "8rNF32TEpvrnjuWtC1rfRpr3uJw65JjDqTqGbd3PCpaqrWJ2PD6wn9AE22a6Kvy3FnkUvUvBqRka7oboN5shctg",
  "key17": "2XDEGBRpcLX3R2VBnmx32denerYoup47Swo23NVUrEsRgAAggQ9aNBndLRFwXaBcvptK5t1YF9mXxfKiPapq8zRF",
  "key18": "3Pgf2JSHAhUNLMUSM5N7GE8a3f6mSaeBRQbzexMLnYfkyhRqN9WrYzwv1Bba6ihxQ9rJPhY6Hviq47mDciCqvfNY",
  "key19": "5tvpx9KdyBnNRWfmiMPYfN8d7W3kxLFQDVmBs7zrzBAqZhDqtRQYrfihqhA3vBfupS7rVJ2X6SBXZYvxWYqjiBaN",
  "key20": "63N8MqZvvapyLApGWFnR2oLzdJcUVjsmVHUZam1YMNMHH8sdPQELmKakeKt63w8nCQNemVUFtcZsA7Rp9kvqts7P",
  "key21": "4YBQhGyMfKJ8krmS5W89yHDgnxgU3jmBhtBe58s1S1iTsM2QeyCDV3jGci5xcgi4ae4CavP2FbAGq761J1uqaufv",
  "key22": "5sJ1h7TU596p2NG8YhADGTMHaYPfkez85hNw7cUE5KPcSoTKjSdSPupwkjzEr2DjwVi8jCaKTVEAUr4goNS6f5pu",
  "key23": "ACWcHDG7bwzbZWWf8yEGbSBj3hXKF5cALrg6Jeojye9sezs5wdALhotyaSVVSjKhJyzhdkYuUdQYarYNzEnJUji",
  "key24": "Pyh6mMnvXUwpENmvHBCFMbSusS8uP4V9mM8zmNSjbK9HzMVXbFafPAJQa2EiKdL98WvYkdb3bDfUGmDpdJRdReM",
  "key25": "46YsQxgda7Tkusxj51s7opGQ6q4yqQTecy9YU7Dx7RTxNbVokw5CxveQzfb5xoWxSDXVYwpJ1yJ65yj6PT9nVfYr",
  "key26": "2mBBo2uHhTR7h62Z2hDH4rT7s3XPN5rK7o7GMTbVYz2iA4eqLj9Q8VtBwWrx2PzNjczJSDourNiJhQRkrmBuyB2j",
  "key27": "w8T6YWhbu2tZ1z8JiMG1b1W5iWw76jejKQ7Vt6YMoQiQphaLDSTdTQ1rjvE381FX4kTwHUF6GgRhQsoqXfNNTup",
  "key28": "4eKiPkc4knoST5sLxVkWm2ccLMyes5pG4RSEWjoBypdgdRmmagKP8bprsYwmznchT8ez1rhqaPfhat4RCPw1Df1c",
  "key29": "gRB1ntpbey65oqUA2WeqwfaaTXFfsdPb32WfMoj2D9ggrE877QpSumstZcBJoq7rv3AniDLiudokZHfm6qWgsNY",
  "key30": "4cm9jotusyPfhGgxRdC5SpGTBde7n31dZBgcxAZN22JKoNkyVLu4krfMTDUg31V8SvifrnLpHrBAFzPikmz7pR21",
  "key31": "3k3cF8vuY9XWKGuimc7CBBnPE3kNsb4ebWVXSywyux56AfGhNx3hRZup55ZMuNz4pQFVoibnndSUQWHzCxSoKsir",
  "key32": "x6Tfzq9posJTdZpnjqgy2QYM5KLF8TMUCUevtapddwtreXochCDMzURg49PG2aegjcwETmumNbX9meoZkRR2eYz",
  "key33": "2ePajHnk7xPYGs5nRVUTsLUn3a22i7vc1Y3J3FRtYgZpBW1hWLfjXkwdZFGGAnHgVCJHhmaQzSGwHAERYAQV54Ni",
  "key34": "2KuNYFkWUdjCgkgmoRJmquyP8ELWkfnwTUjML8fca6Zt37sRnRwSB7YJBXLt65EpD8naUvDbzXyFkGmYCUVPyhMv",
  "key35": "2Mk9uDmyszyyRC2urvsxxmXynacbMGEzquWjLauGSToG2UbXU88vT5Dt5GTDyBN1iS5YzFiM2i3FBsnaLzk5PuFB",
  "key36": "5RyaERSmHgtNVJfnjjrgEVj1cWwkQrLAcBKmqNRvUJDaJX2xZsLyipCC2D4ECWMsEcuB1AnsNSMsBmn74obhCSg9",
  "key37": "42FNJiqk2EwUvuMMc4dgTx78eb4zy9cuXxf76Twn6ZZyciVgex7JzLBY784HbzGduio25aPRQ6ABQ31c9sE6JtKr"
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
