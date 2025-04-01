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
    "5SsSfCaYzp2cdGpo8qbc3TNZX627cLARXrpkF4Jviz7vXCFCTfmKe9yK8Gv9URhBZfDxHpCYgCG4hQRnGAZ8Vep2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rCpsD77JQUqj2mf9q627QESJNbUeZiMyXTdmNrH9YNpf3E2A3pHjrKnPYuFSuM7yfVvpWVKrRy8L9WHdFH14z8h",
  "key1": "5ZUyVPdMDFfswMVWsJjT7PS1SYpsKis976YL4yJhokk6xoarmAnY8fvTpYNVxE5JeUej8fJPgcziWLzTTDMqXBq5",
  "key2": "5DdbPgXhMhtngauZnSroiVAB6keQAKKbqCKYL6NrLS13SacYKAbTjV4mSP3tyNAvy7etcTiTwxToFUyQxxW5L2NU",
  "key3": "5PYgPqwCRTwBMy5SC7XtorSqawFy12iD8cDGPZKHctUNQGBUkmVtbrrTtJUvg5V7NLCSqsxoAJs9uqkYdBesC3oE",
  "key4": "2qrm7JBEUV2f6gvZg7PDiuYmDFdLrLpV36EiaR1qwYjb46CjepTujFmQvNXwbA8RubvSaa2dJFE5eRgGjeWJGE2",
  "key5": "4B8rHDyKF35xCAyamsVyCpK8qtSrN9PVU2jGuuypcztdySu91sUX5DsRzNswK1A3m1VLiq5y8fz5qQTjQFFyWfEE",
  "key6": "5gywxxrHqioTPesfNfBc8zQ6EkZCkEiHpjV26YyZBVPqedC6XrqHh9V5Xq9tiVWUwgk7zN7PCYBrc4nraFfQMUJW",
  "key7": "5ZmD3qY32nK4iAhpTqF9Re5TQDyPqWTJueJC8biCYTDcYvmGUVfGYUpFq4u2EWxhUPCcZHrc76cbxt2wY7cSrkRX",
  "key8": "5iZpyNYWvvW9HgXQA3RPm4fwyPQ1kePZKY4Wy2GWd55M6b5HH2ZTNJM2rPsNDXzCJX5b1PPksZQHMvx8yMTTq1Pr",
  "key9": "3rKWch7mHfpGhG2PoXSXajRmqwnWM8Uyg4PNzm5Hvvm3F8npwJTqVwz7drj2kdtuFP8uJbgHypYckPsdrqcb4STE",
  "key10": "q4HqbrCUNmTFaYFmBAddpxz8wUCLGGw5czNH3Y4bZqHkDym3UkvDi6vD11PnahqNqbHHAuFf7DnFEKjwYqeZgDD",
  "key11": "5xUo9HDaYYMshaK1UDcwRAUi5TPHN8A12q5zxaf6qvqiZPfDMFpWDm6yPFLtjjayDZGGnWj1h8YByDZ1Xz9TXWhq",
  "key12": "5y5icnyM7ffJXAiJPHRvXPyZREsGtysbqjYhxAFq7dF24Phb51entwhM3icAb1AcKpEeJ1i5a8oHdYqpkUaPtAmk",
  "key13": "2xtdqJZ4LiJXr66gKvaGhSE8vR3xPy1xvu6WMc2pEm1DopzzPM1pZzEZPJ4akHG7DGYefwD8P7fntdUmHiHyGCHV",
  "key14": "ZSxDkzJCe3drNmdRjqf7WKyyvU7oHSuzE196EMdQi3CUUpY9X3VFuMzLt4VUjFzEAKKWp1hH8xfcXDCfTuaNpgX",
  "key15": "N9NWC4YbucWVYVCmE6EjmDjAGqx5LQcBvgnjjE6wuSjV4ZEeQbfywPkcn6hFg2dPbiEHinnptNrvuCXV1NbQJrE",
  "key16": "rLoaq7TcGQEY3MR44fXQ7ZnNriDNaLRNDmw4n5Xw3q7ZN1C3hmGGpT8jX5t1tuSfPYerdVAadWYVrpjxnQMhkrp",
  "key17": "3DpRXrpG5y1Q6X1fGVBQzcsU3pKNApbooBg1XigJrtfWimZ2wnrBCrqdmCn3XNe1HidH3AJUJcGBTAadzXCBV7tL",
  "key18": "2bgqaXdzypujpogHMxNfye6Mx7J2QHQhRSYNPc47kce4eR43DFs6bw5i4er8vWRtiYRZs2uQhT9C1VCas4s7C8pB",
  "key19": "HZConSBZNa8131BwgvVFCBydByGnxwz6zFDC9mkwLEPmQkodtVgjw4Ka1cF7FnKBFoR5Q2JCFT7rQ4LNk5SBpFT",
  "key20": "4s6VFFiRd5a1RmEmRX1bMQ8aD6rSB55w7TN9w32Ns2PEadJr6ihH9fAwk6791PUEiVDDknkdYNvVmeq5p26M4NWJ",
  "key21": "5VfBBVC1wwMVYuXDR2hxFz2WGsvGF55uVnAzzBzqT3uRbaTZyn9hLz7oXkXoBo4TLRDgfvGyuyhwK2UEJGaFFRc",
  "key22": "2a1rRr7pNdAyBdJ2jnqVV3ZxigdPnLCJCQZ655Jweb1NNeeFDeMBjeFBZNKkh6ydf7sionvcvKPbsxHPwqNm3oZv",
  "key23": "TQPyBqZmeA1ctYQMC63sBCZ8sb6hX6PH9ad2miTbkpQF2j1dgSL8WpuN1FjWfd1EL6UsUnZ7UyXDaxLeSZPhnBj",
  "key24": "46uAUfXkgTkWb4iNpTAQtts2TCFaYzz8do3DcqHet3M1HGikAtQY2oSxRF7nWW1CR6mJSguWYk2N9FMaQHBXfEHF",
  "key25": "3wMesXysTkHPWRR7i9DGVWkuEsrVwmURkXjcpyByknMF2P1ApeSDRT6cuuCewzDsCXHGqd4RMVEGQZpce9Nphi2k",
  "key26": "3oFizfHnCEqeJJ696ZTCETvEJ5vTMYP3kWj17fJe3fr5T5myXDCNwsu62pt63zniJ8jo3gVF3i2AcippfkeCKveJ",
  "key27": "2vYiwGMqbJRGXeA6yLpCExzJi5b2b91JCwgFDUnFAeTc3EkGqTR41h24MpUG9EfZRc8u8611yaszy4arVtDqnyT9",
  "key28": "5vwyCri36tCnFvCaJg7mbJEQEMThsvuCeASATVfjbUAk2yTHzCxGLk3SLNRE5xVcZdZ3JavGuuyFKpPcL9JWR9iY",
  "key29": "5YKsvk8U35fQD2ybH1M9CnNAbJHYf3haXKsGcChQMuWmcWNJcv8rHbkk9z7FPZHMYLGM8vZoc9tagUc45RPoDrE8",
  "key30": "amjoqsWvMsV6aQVrbFJPd4UPSmts9wFbg2JvenHzcCPkb5mrcGKLX53ELcVDx4oZ6N1syFJUpXeQAPpbviBwKfs",
  "key31": "2RsS2Scc81vT7UXYjac3ttKVfeJoabbPKPHQGU1YrwCArz6GAsueopDvXs5u6MCKxvj22s6e1Y1tN3MFbSPLaiWQ",
  "key32": "32Ab4YkrjiVRUbLVxVCZDNCypmzn6HfGkrw9eGvtCdA4eFYfAQ2pEd5fCSGvNjFfZr7RZXXKdPK3FsYrjqPMAkrW",
  "key33": "TWBoe6LfUp1JrURnDbq1rt5dyoXm9yngRWvu4qpZ6c3HVXtUsFGWTMAjfa24mDWSNMwa7ibiq7mxu9kVvNDtowg",
  "key34": "37uJmhtA6reWmyHYEw1YanrBGHqy3GTaYqavrELYvUwQwrDr11qgN6ToYkH3JqnKer6H8RrkdGQGzeQjm3YcMm57",
  "key35": "5j1V7B1egjRG8hFPPZwyWWjyVCFTK4qkM9RnRm4gqaDsoqTmmgWajkoS1xMi4QURpCkH9r3P9zyq5dEM2eRaBMFa",
  "key36": "4Cra9q4eGyGDszsdupah6UzRfDEmXTNGUTaozNbanPD3aaf4DkSv9kesuonoef1v1FJoZML7NvEGnNUvj8Yx84Dx",
  "key37": "5xuJrFYeTuCyb1VaZkq4BmYn3Fa6EoDaonTEBeAPsRZ2UehDvjyQVLj9vZDxXuNgjJ5QnAWvBgfggFufxFx9xgLs",
  "key38": "4P5x4XMZYwH61pj2nzj7CGSZb2aUL4MbVwJZE6JVMwBV5Z8PhsAQ4frMPrRTv6VV68UcCi35CZxoGrU1vzCDwZy3",
  "key39": "ezhQKWJcXoB7MymnE7Nnns1SwSnkWefMVaH3dRfSBEZoFtSV9zKqbANqZY4XFYan5VcCGFEPp4nbmvgQqH7334x",
  "key40": "4a2ZLbgvswZrBgrfdogH8Sx7YK9ZbfncWgkQWFFU2ELRWDjNT3yL3HAwSW6J5Vd1HuaK3tTspigUmpBJeRjBiESr",
  "key41": "Dvy8o81A48eL4QUdTgV6xLjLJfj1QYU6TKLaFpMQRHM2aA3ZgmY9jHZt5x5hLcJuDgcF8PbudChfrGCJKsBzfAu",
  "key42": "41tquLkJrjzcUR78MGk5SfCHuByBYCKXxMypMJUpYN6yp9ykvXpdjDUkd1NM1A3SuKwqNzeWUS4HDiUjxvRv3NoM",
  "key43": "338DSUzkBHMjTDpvhWwNr1T4pTBGX3aCtHKJ5HkJXrDgjCFwyRmRfxaSW412xDU8Cpzb7anMoCjgpMw4EDCnANZT",
  "key44": "F237SzVF9HPyP3brW53nJwng78wdTR3RxpGo1kFrZHXRTrLwY8W8MmYZHnTNR6s4zL3mQom1aTnPCTTbniruCNX",
  "key45": "3zoR4FmguPCMeoo9oNkRD17QMZJ2qAToxN3RcsgbEeVsbYiWPTFsgNcRTsFQeZYPFiYNN1GsdXM3sFZM3kAGa476",
  "key46": "pRWYgtNKNRt2cRosMUPQY45q5yMyX2cJ4pg5coRKrioD6brWQiZBqSXL5pZJgR4o9stDUtEsvXK8nSDdaNpwKFX",
  "key47": "5Pep1YyjzBBSwuuPskS2XVX3uh8FYtEaCx2hGy9Soap7hFC1P9ZDg85bNfqrTLHGiMda3FvQMjRNuRFbfmiPydbF"
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
