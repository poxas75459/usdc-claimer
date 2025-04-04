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
    "4CW7yBs92haC66a3R8VyXkgWdXqVCVSG1iSfpxjDh8pdrK2bcLHyMHt58hrURd5hAXyVw5DG4JGCJVZSz9GLyaXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24p1CqZrkComQwD7vieQcNE5NTxsadG2B2nBpXrTGL3QPgQ2aWC6yC9t5BxHDwMEg9GzSXXTLb3MsfaCQQQqsnRm",
  "key1": "2WgU9mBZLwKBc9nShVGo4AXeoupyUfXH5egK3XP2obtcJbTkXEqu8as9LjhBQCogWG99bavKSjs2b1gdWhNtUJc1",
  "key2": "4nogpEo54ob3Cy4MPR9qAUab3bhghRWurnhrTpXVL3mKNUYHMTfDWEGEMU6N8XgvtcK2x4UbVcRwvNfzaZpFgcZs",
  "key3": "5miwRWP22SukMjYijdZoCYPRD6tsMZ5uiFr1xKJ7vvM2TZL9LCigd4qRpYHnnN4GPnT4rSoHKoks2MD1C4t5pcpH",
  "key4": "3zvRp85n4hq6Lt4Am1oVEdu6MhNwtf7bR9rpvxVzJtoY9t3pfiNH3WPm1RJBtfs29Xm3mMQrD5T7vSHkE5CvwA6H",
  "key5": "2dejCXtpg5pCionAJvTMQdBwC1VtYDFFas3LywBVtjQgjUEgDUFRe6W7aH8Jq6D5vZiJBpJgiTKUvNZubBVc9tJP",
  "key6": "1coWH9A1hUni3WAtwBVWhJtV6mqRqBRSkwATBDX6GQdmLfKvgjUGquYDpTWu19RX1TZVQdnxDXxUfuP7uKSZLhg",
  "key7": "4Lb1ojTYjD7ohcojPj8uZwNH6evnDmuh1a25epW62AUrzWgqjGLnbTZ7mDhgsXetdbJ6ZZKPH93TKeJCsG2UmxGT",
  "key8": "4bEPckLdtM4QfWaWKk4mZkXjLr3Fk72RLetcsjzxFgQgqt3zcgDUFxWDvnCJvbAvEh9mvbwG7j2x7zFauaYeZL3p",
  "key9": "3qLku7xqJfQUhwGYWcYV3Mi9TRP3KqYpUgsdnR3NXGX7p49MkgvgaGm54qotAbPEE6bNhw86orVCu2WTNtwGU9EP",
  "key10": "XVsQfCQQgY2Duye3yGYgFWyk8jLtNaR8SBtvaZd1VonwHTVYd7TLx6ZtAsLqksVRjFNqhYnFBExoENfTYjRsoah",
  "key11": "5EcanNhDuTmAVSNhfGGXErHGZFWSzNPAqVfJm2ZyZJgAGug77vqHvs6TLFSQGbpBMqanHC6Gz1nVZZkYzG5HB5M9",
  "key12": "5YgTothVwtEiY8K7XcGdj272sQSFhZ62wrvK1Sxzwigz9Pb78s8rSCFdQ7Dwa7xEumUjGHJqasEvnhpBDJViUCuv",
  "key13": "4a3bcT9hnpgBegQitcGDZtHo4F1m7tSbar16dYUUwfZNKpd331GjhsVLX6k62TDe6ajdudNiFSUnGWGwkFmNSnhL",
  "key14": "3XLCHDWM8VRZv75Q4ZCCJwdSYvRap2Dte4rGsSmz5F9Drru1TcnhBjJ3bun2TpqCb99zMQkWHEzcTi62GopFoqtx",
  "key15": "3WyYC5k5engk1awQgXSoAizq1XqMF5ZL9HWzfxnjNE2r7CHVjZ2L4XUtLXzS2DpcfY5rYXbF5D1XVkmAe1MAjEXT",
  "key16": "3q2xGomuYo67ktWtSiS2AAf3tzvPegdTvaBVjttohzyC1ts7ZU2ua1jcZHnMh1WXEPBxQkEYTJMsPi87ZJPaBod3",
  "key17": "3rQdRKWg3qvyjwbi3CeNjzgyU9J99hzaEg2X4JmYiZqF52n2XL3iMQnQVwW5EGvb1kZ6jJysKDbaLXysW4uL7yfX",
  "key18": "4gPFDyXQhyu8BsiZG1nfYSwkYNHGuKd26yeDn8hXUSEAcz1n2CRvC5dEKAQbqL1rFu7HXXx1yUSyvZZLknXFznPR",
  "key19": "LpYaBd869vpnBwehQaeYneh8eswdDNR7cSxWJjWtktRCnwC9dWpNhkKjMvw1zFiqa4qT3QXYyZzstsaQvM55hPQ",
  "key20": "44aRtu9omkaYDmNgdJqr6EFexsYW4zJw4M1XGeuGdHuTx11hzfLs94KLRjcQEiJxjgvLbUP6sfmf6pxYAUoEoo4i",
  "key21": "zY4VcyZTd64quVqn2o4dLsRa1m2AwEDgoLDepqLotgHMSjai8cMRwaERVGx3ovCPEPzcKhXye6Zdp3PSyUMBvy3",
  "key22": "2VMFqtQT1GcUNr2seKdatWR6GiDiEQT7Zv1SQ4yK4jssEjyT4FGUunyEF4jBRCQxmrkEtBRAt7DzXW1SgRqxMaGC",
  "key23": "4iRVHUbw9S3RZFXbgcMHYo7XgMykdAzawEhPe1UNVm4tW66tMAZ7YBcmgoS5Ed6n81oEUNto5hD8MQH5cs3yS75T",
  "key24": "5kxXeUCZ7L3DgFdZ7wfsL4Mcju9xYH7n6aZHnTNVxD46FWgU12Ww8bdre1DdZ3WJpETYrDiNVe3SKSbH7quxngQ",
  "key25": "2ruPpzjFHbjrST7ssDVE6LmvS5qxuQZRL6FQ2aCgwJEj7EKQwsn8QnnywtBcsXWiYiBAC2hogYB3xzT2HJy9NZFN",
  "key26": "43akdAXGuxGwsPM3fz3ER89zabRNmH4pr8FpJwzoVVbmbs3xwW8LchChACZhR6XzGKwLe7ArNdehfYamnMt4eFM9",
  "key27": "3H3zHE3HwMGZQCW935Xzd728Nkif2PLHKS3wguficSmzAncMcZXRByPMNnLWLf46TqzMfNKcFzhoCUvsnmS9vGB6",
  "key28": "3oxwcJfK85zLagUkxaKN8i684xcsf1YxtzmVtXCzKrnVpLX2djnZ6Wcbu85WUaYt2zSGhDL3XsiNcnXCFMsukoiy",
  "key29": "2YaHmaqKR5Lh9sygaYqE9BQyQvJwCvsaeX9nTAbxL71Q9a3RZuza8VzxGbxboqMdtjAZ4N8G2YcA6GztM8jq4jE5",
  "key30": "4zkiWmsEKDeYeNubPn1tHRva9zGSeaSUbzcq7tHMkhw9YJRWBDb8metvvc2YZfSCK9qhKsMUChLodvFkUGxs1QWx",
  "key31": "4ujtwkZr7UNqmUucNakxBLGvpjGL7suzctNxQpYz9TpqWVNjbLfDbcfBTFpj7KJA6ZSNkzVfGLyaKux7kgcPhKcf",
  "key32": "4h9hTfdgNFZsgGxBGQRDCqaC86xZykzxVsXedCqAAoJk8BiPpJwXSjdSaTy8hvoK3tR49qGzJvHG23JBwxgELxEJ",
  "key33": "3Ab72GsSCA8juhySxNdei5JyLH9LTVWyjDAJxtiesePFExjJZDQKXPFtDg2K4jAGsPjihCsfQAFv9emyPZ4ozxgp",
  "key34": "5LrSUesvEPqZfrRGbcyPfF8cZDqFkHKygERJT5fYjpYU3f1cDTVsF49R12YdZuEYB8fECy99QQcufVJhWU7Fjq5V",
  "key35": "gqTQZBYSwax4AwaaZk2nsKoj5ZiMM2u1Dx2RTmTeBvrGugjREs7RMmUMDpMVkEw1YLQrorGxqvXzfhwjEBCe61R",
  "key36": "3RXpjEoEV63YwWrWnVQwfACeinu9yNXPNAQyvKP17tJ3prkx9K6vavfNartFJfCD1JSbL1tF7HtM3VLEHtVVcFEc",
  "key37": "4KeTvcraUqhAQ7sNW7VNQQc1622iQWy68uCvaakeAr8YisE64EDmcguvr3cyNPeuPauTgvhfEumXSsCLe8vkoWs",
  "key38": "2SmGBJg3UHLrHstYGyZAxwBwZ6C5Azyazfj1wiSE1W782nPrBRhgBdRNRc5K8htkR6vp7EnvnLcUz6TnpykWpsYa",
  "key39": "5hxsCGA4ek45nLko8UWC5Vh84KbDycSMttxV6mRZWfgKGKipG9KaWXQcm9PQEV8YZxbZUgoLx31QyfQ7qwxTACVi",
  "key40": "5Xfsi97gimH9gcg722SZZoY8GYyE5XJ5P8CGxZWY58rzxUcnS4Vwmg73ZzJ9uAuUqEpEm7G9aycgkkVBuEkRYiuG",
  "key41": "4VjopQnNNGwFNBocEteMwmJLbvKSrs2fBdboCDcSp2qYjnVQmmBGGxqkmeE9pHs52yJjw29HDMEx8WSKBpAWbRg5",
  "key42": "315zdw4fpJ3uxp9Ts4j4LxoNnbydX75gj3ymoRe8261145qvqNrff779dERRwVojtYf2tTeyY9m1Ks1NbzX2ij6N",
  "key43": "edK97YdoRRSW8ULd8TMPmqRH7Wxivs3orEa1T6mLFGxWst1fAkPVxLZ1krKwqiLKavnFv2oYeZJaRZ2DGeja5AB"
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
