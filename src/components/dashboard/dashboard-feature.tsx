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
    "7mZxJeMAcrUkontZ9sM15eJantsxMUizN7dfQtsmjwwMPVPEqdBWfMvVx1WrLZSoSSEZWFGqZTgSAjkrykcfYhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JEHCBLbxquZDgXz5SKHNSrxkmrvoBspHMSgEtKmKeKekeQ95ZhoBvJ9uMTabjyknXMmzfq7MsdtkyoB8Az7huBV",
  "key1": "3pPYZGcJPCh9AWREvY1NzQmDD7XdHKGTYtMDF3Bc6cEay3wX1NMsPBTJw6W91BfccDqvosU3sEQd1izuUCvVuUqE",
  "key2": "3XesrKPg5LwJJV66YU1UgYB15dEgWGpLXosicUavfGTaHzxFgDMBbapUMn6SMUnVb1SoeGHZo2aUNDrAFdPGMTeF",
  "key3": "2Yzaa2q2qybiupkvU8Fqaf42xACV36yDHS7Z5G61jXK4YuKJRfkSTdAn1wbE6A9Kd5c67f115RbwtdYTnu6NrgCP",
  "key4": "5zpqnjv9z7FzYUukjXxvp2HnZFPeERyKT4FnvUbzZaatvDBXELjrC8fpRfdFKmeNLh5hQTHgpgGUv4TixbfK8pd",
  "key5": "4EZUNWGF7DxK43vtgsnfiJvk6NtoDdCNJqEDYTwWt2KoEXzFqskusdFRu25L1nX7TLAZakivaV9gLPg3Qk9V4rrT",
  "key6": "45K3AwRTXE52iVATE1UYfpPSMJorPbYiELizPLfLHbuReFjNWX9qVns5Fteyxs9UUhUZrxSyv4LmvZPY6SjCsAhn",
  "key7": "pEf6Mc15mUaetrVtrf8aY8e5nX9Vh4LAAiSkmskSTfqq5iqXBZdBKTg6dDsbXFT31WGfcWWKwjTrbJBBh7tzjUf",
  "key8": "4crshqAuUL25uRrET7JbYECvGxWWcUKAwPwTZftReFpisGRdusx947QSchRLrNwGnDTQe67NMvuQKwVQ5aBqaw5e",
  "key9": "bbTqRGi5ZSDhTBqFDJwHZutXg7f6UzCNbUitFyLXtfrCadbJ9XEyxY4wc7vB2KrzoKppKitSqaVPFVvZ8qiWuo8",
  "key10": "64cNRnS5iBDESRLMWuL2q4bocUbdSSZgZkQsV2PfjHhCmaGUYUSubPrinFKmxn7jSt44iGmY4aaBQZM3ySQ4n3nU",
  "key11": "3WvvqCrVRkmUEhMBZkGNHohtQNzqnedNJLEM9TUXWUv566JXqxhDWyTCWTd8TNQPspFj8irP4bTfCskKovmTqHGL",
  "key12": "3bX6AuUgDczXM69DJm3KNtCbzPHNsPqWzQFEiJtbDVfxJGfdQh8LBYW19XAc9KJgyNjzdUvSz96KqUemEsAsstjG",
  "key13": "4XyedZzKeEGG9BkUBT4z2D8rSLa4GdH1T4SZ4wGkeHzocSQzCZLrs9vyuh1tpHM2docXGTLP3hBXVZrQSJYxWno2",
  "key14": "3aQGtyHeAqoRYMAQrBTc96hdZo4fx7wonDCscbQpZjg44eChdnhoW4HVgeBFWsT8ew4ehRVHCTbzr7LBSBiuH7zV",
  "key15": "5JABBH4w7CFZsGT6fJzHxqw7HhuMmZyoupmxy3SFHPiVfEJyZMRXPbVo7Y12E5AzMw9gqfbjPnZU54XjdgSe5mNB",
  "key16": "5QuD8DiDR1KyCgfsh7bej8EdmMwY4cPsQPGtyKVYfWktKc9TE4CgAt6h7ovhi3VWMSrkWj8mTHxmM9gq1PstJaqo",
  "key17": "rPnT5p4aRjgPKCVCnPZrhS2EqtCmUZUtzzd4PJkuBb5VGhbT4BBtgzmjRycp8kE6gPguUNuJ496uu7PmmWJHERj",
  "key18": "3RB8pZ8kb6giqbhiue3o5zki1rYurLhnuXD4ywuxiRvT4LPHvhBHrnZQwWXavwGFoRvLCmgejtBL9xqgDkBAozv7",
  "key19": "kQA8QKoEFmwUpV5qqPs13gXYM69TbGvEaVGRVcrrsb6ri6ym94rpcxpYGx7tbpNXwzdE994m5ZwfBUv1XdLVuMF",
  "key20": "2wY2XSgsENvGxFbfELh7UD7Qr6ucDuN7XMs8p5dzSb64gMk7KDuNoavXNxkdFyXkbzH5Zq9MLX4Vr4YovC6qfNxz",
  "key21": "516YZSm882pEQL6PNnk2ap4d8oBWyY6os3VRiM4X8DppGUz8fydo2MFjQPV2yhoq5ZFikL5QxNpG4WhBSKb8XWbk",
  "key22": "5FScAbkivBWnnFtUTCYfxUuMyvaTpeMJiwSYrqakbEp45JTDUFiCcjBn1sBvxgbJpvMAKR7HruJ4hChfXsHpfm11",
  "key23": "4Zb26SvG212QboXCBWZ41aUUnHPnpa95eD9sCCT8zAdBtZPvhqtwzfXBz3dMfceWo8sZThUPqJLPSJ94HwbhnVzK",
  "key24": "2EDRJEGxp4ZE8UJ8QraB9DzKG66yFG8W9sDU4uQpVFvnoviNLvjAR12u8LPVhHx9xXkaNQaWKrTPAeufkYKbv1JN",
  "key25": "4WQJsK83esbrZDY9s2DD1aSwtFvEraV43KZkAj8XNGUKnBA2tP6tFksr7bTk4MRBaN6bjirdVSTowyqp2hPb3Y7N",
  "key26": "2KF6QioymDUXSrncNKzfiFyWy4TtZ51vhqJz8757bdwkGku32oZWnpXy2oCCKzscXdUN8iwQw4PGh2cfjLH6q2W4",
  "key27": "2rfu7RcYD81SfDZDiPsGcTYwqDvsFo2m4cse28nYLzmDg3dawc7oQf4UaVB6tjBaufPwA4ewVAooxoL2S5KM5k7S",
  "key28": "5dMiU31iKgDLD85X3VTXmNEAGYQKLcNJPtETZZLUnZKmLbCGiUmWp1nFh8amcDyoMjVTDpF2tqxyv3qdbDN3n95H",
  "key29": "2tWCB9XzaozADuv6nK3rN7xhWcEywz9qPhS3AVuM7h19EmHUPKqckjmpsf4xZh6vnPLV68LUe4jpfj1G8hKxLKgr",
  "key30": "3EBYvJy7jJQRTBiP7ZV54QGe42vFyQ23bBJVjDaAUsazuvbH7x4iciUajWcashavtXK1JUmqqZdprvVgFRVNHHjU",
  "key31": "3SuQahAKz4C2rbn3h2ygUuWgksmhxnCYfjwwRTWECPmfFVWYAoJQeDDF9bosn5NYacvQwUswJNC8YDSHv4daWdRv",
  "key32": "4DGeBb2wKhtdGDPFT6ijbeY593xGxEhppsmAoDFEJsMsxQCfPiJ6bj3YbzCEATVsHzKc3xf87AKS2Kmyi2jsRQQ4",
  "key33": "hwQyJ4ZFfKr2At36Rb7g9tzi7kAGXS33qc96HySdNbMMFHL9RN8d5WTYAmdcyEmcN8PSHmj9GC9J7H3j2GXZFBC",
  "key34": "2dZB2L361ExRvsvKnPZNhmNyA6jhY7H5r4Up4oAfJwcdzyUKkMKiJKpKVSX2yyCLivPoyqSCen8kzq5ayGkysM8s",
  "key35": "36rftnUNMaiiwar3tmRf5ki4ij9Z8B48hzo9Dwedt6Nf21eFByJFPyxRo9AyVU4usAdciYdbhaZj8XXK4CyqeKcz",
  "key36": "5qmPEFhewgCDFxD1k8dFAD5CPyhh98UUJ9hH1fRXcRQ3jiodmeXHya8kN7ipx8nFvQ9fjkZkzDrYe778biHuPLEq",
  "key37": "5MwEwuWSeXb1K3rKMhTiCN74NhRDdcqnmMtKvmrCaziriK2f6Ti716syrDsybqGeQCxTk8cqSPd4gyjok7CmSXnV",
  "key38": "2sP6DkbfQkkTX8YX7Pjw9tFdqz1tRq8peiXRRr1BqdkC8HgUcKUKhcgBzw4QhzccrmEwspQjx5EUGiat7pFxqwB8",
  "key39": "2ErzZrA75qkRkASxjDFavPm7qpYgfWPobVxoYzR6Qgyh3qk6xKoY6ePQMVxjs1fPME9JMYg3yu4gxy8Q5LMwsipv",
  "key40": "96RJ2H7juhPwS7QoUhWwVWuF44jkCXiLofq3rSLPxqZVjmn7ffDtthAYh1b2w93eXvAqt8NEviMnRG6wT14gTPR"
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
