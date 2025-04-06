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
    "2vNoPM5kza6WkJhV32a7rMdzxKEmocrQvXuLRR5AEnNxDtkS1y9iXMG5gw5rXR8QD3PE3MuQPmUwR913v4NccvMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXCmpQ2DeTVnPT5EH6xHgw1CWKMQqmi1fzHyW7PDp8X5aVjbM18iZqSZJxG9CircePkwmzV3HhBgVuwp3bMozDi",
  "key1": "5DYqi8NdGjoQbbDgXyikjzaJHsudZcoZHghKKiAALHim3hVmxrne3tpBBS89zY7ddzMQPNxmppdRGg2G75HqVkU1",
  "key2": "3KMFqxcr2shCTdMensBLGxhRQci9ua4ehVWURH5Kh4ZFivYRLne1ie3hSKC2MxrpdCGfzv5PHdhVH3yNDJbm3dyx",
  "key3": "Rt9jXUEyyj2Js6hLJXZeWCeJFZeikQfhyrUvSXQSA55UWgDU2VdYWpNvyYwsd92M16v7kMGX2KkRRqnsTMRdVkz",
  "key4": "4PgHJWWREJQFe9FVcG1D4wqgFdJCbkCUnVfpASw5sYmWkHCg2kknvkD3w7DYSmSKzP2ZT1cAoGh2cZsaQJ3399hR",
  "key5": "3r5YQmJRhXBtD8KodLpiPwi2J8LbaXC9mwo37cR64Mu9RcURcBSQkwxwhSj9kNqksTZkQF5Vg5waGgpDJsETFcjL",
  "key6": "52Pi8g1yJTEzZmEgsjdaFoSsJWaypgozdkxVYMHUGmYia1gNa5jTnTEMaewWGkZv997YosJ3VUFDUN6P6mjCoMnq",
  "key7": "HbbtM95LZNqPMawAT3EXuE325DBsQdKWzVehCsXm6HNTEHpNWLdLtQJa8Eu89gsfWPgaS7mWF9yWsMxqGgxbnfV",
  "key8": "2wF3EmX1n7ANHcmPLawRbJFd562yZC6qKB5N8avsz8SF9YyUHyyMtfjHbLvrkd7gQELj6LCKQyFqHYkhutTaGPf7",
  "key9": "2eeBMxejcCdz3vjWw8z5S2sWfQQ3K2J3BtnmFSrcvuG2dhQFyYFFqjf2GRAnvdwwWwodELtRa4PAr92khokYsRqu",
  "key10": "64j3W62Uir6yBYhHNnEB8vUJXj4w8pYcxXLtiY7NQWLYjGWMdD4Pm8UtC2xvNyP5S1q63B4cVHTD4xWyaqx8qJvn",
  "key11": "44sjEnVavdDQDaJd5g3x5SLUAchksZ2axF5ZEnrwtrzwf35oiFqko7c4P2mEo5kuRn9Fj27xo7H8QzMr5EZHq8Vb",
  "key12": "5dBiZuyVAKqSV1Kiy4BRbv1mvABGnSD8HywrMbmTvsiTcbmHgBPLYjC9Zc7p4oQgcz8wR4xVtyHxkJexyoXkT8fW",
  "key13": "2ogsajLrK4X3SLcSSdB7TMxbzajPs3wXByDFZdQiAGVyGcMvqZmeKmhLBA4zGLn9aatdBY1YhAGaHT8T5PBjLzcb",
  "key14": "3B11z6arKAc1c6aSKadTob3ci4Yei5YbCMgFxRD27stiCWn4h29MhPayAggKMirZmrcBsiXxgwWvDxTpM1V5iVxS",
  "key15": "jmo3FkWnmHMNfyWKXk1UoStSuABox3QdSECd9kAfDYKdp2WJrS8NdCC4f8H18wabx8TjkJAzNaDEpcHPZ2RMuiD",
  "key16": "2jnTp4rMHwGE4cTKHTrwcoPkHMuEyqMjbP33rWMpw52fGoLn2Nuf3tzRiCru97ZBoWQkZaV9TUoQpTqoeJMLG3qy",
  "key17": "2HA6aS73hfFmjyhVhJhUByqSUt6SJVDZwQ9gN57ShtrfNTfcA5HgEbPZXVSst96W9NXw7AVvpqY1JmZRac7SimHz",
  "key18": "3RvmR2WFXdfAyMZkad35EgLSVnD4WCdPYnziCc4h9QSjP5qsYWJvFLyQmLpiLkF2j2yPEcWE8dNFrcDng9d2tCpQ",
  "key19": "5H8tNaC18K8K7cK1N727sZsn7RvcvY2d1MigPKkscZnm4hahhb6HUv9PTx4Nd6G17LpftvXT22vhQShjd2AHN2pR",
  "key20": "cxumvgoRsGWtPjDw7CM9ERJsx36DZ1zRqP7XWMRQ38wP15vY4ZSQJCJb17GbKtf1fAjrGqVpgz9sAhkFMG9vGFW",
  "key21": "5GXbxGUmSmwRQ1wkRkuwDWcSmRT3pr9rnXF6vwn6RiS8khVRNM9GhC84idoZei5CuBsBZyg8tGuemy5dVDK6S84i",
  "key22": "4gukZaMpgQYEDao5CVVPf5LLyF26iY6vrE36SCyUexaMr6iQYEzg1zGtz5e3bppiKkGBzHAgrYhk1HK4LfWNskHQ",
  "key23": "3bKcuTr1ApjN4rTRCfx11EK2yidXsTVjxKHpmtp61ejEFoPthL8T3yJrFSZFrynHR3yGppP1SeqCLhthDsuUkF5e",
  "key24": "5ZNMg3GmDPh3A6unv5Cov9FWdpszUTnUDUaB8xXokaX2G53AJuGKtHh3opQAJQC3uZ3SzEGgFTnmW1zaJuCqJBq4",
  "key25": "2AjYUKC8Cyt1dQbfch3SDsfBM2HrrDWYfQpTfvPnc5njc2oaSxqvnaugZr8RajEacTXjq4QdV48qfNvLvGQwQikq",
  "key26": "5C3MTX8dVc8aGoRqcC2yr5jb2Ag7xDgWayMWa3rjoyrM4UZGog9hpUkHzdG3mCFd7pL9E5g3CtBzYLf6Y4WGNDGQ",
  "key27": "5NDY3AaQmZdENzDCL1qz43QySNLsgHk1HbYwJo7DKsbtsMhakZzXH5kPgUmGnsJYgWA6j1VRHQv49xeaGMUFkha6",
  "key28": "4A1FRSwk1owNvCPdurDmnT3MLpSfHz6fqtXU6L3wr9CTR45rhNnvQqa7TsvFUnFByE56jEPko7LbcZtDxcmS4qQE",
  "key29": "ejGbzWKBHHCs5SZEEpXYuVAhBNzVr5FxDrTwEYxVzdwM3sk5KWHZK29Xp7nx21s4YCUTZg5UGPR9nXf1yLBBvBi",
  "key30": "5yVQrBrQcvtXXtXNAcTDJFT45xNtNt9nK5DdUcRGWar9MECPE5NVW37cW76jcTpZspC5yyDHvK6CCKe1TQ7Ab3ow",
  "key31": "4YiBbnatojRaFm3yankXJLDw2964ZBkTUbyHXZU5dsT44bV37WRcZE1Y9vDjFuyCqWqRsNuoeWs9K2zXCAWbW1dn",
  "key32": "4BrW4z57Yh98oMMG1ZRwQYmBeHsQK4d2tM66kXWp65thkYwXV1WwsJK6qUirySSjbxcvEtzxqxGFDiR4c76EZ2j4",
  "key33": "23FG3udMgWNQaWsDssgafVgxQuN4vX4RZoAkvYFQPvF1qQM79JPufYs3dt6JZuYef7Txhkr1KXLK84K97vUnVv2V",
  "key34": "4nE89AKdYxNkwYqdr7jsLd1E6YLs43hCrwAgbk867y1p5HuBxzE8T72S5h6csVBz572bE3PC5g6UqGF5RqYpK5mu",
  "key35": "5YhziGSVFPxmQsmwhHPmZGzCHkeuEPmB7q4BUSFZKsgBDzb7Y5p7PPj8YSK1ufqqHpKdFFR29H2L6DgGUxDCHWDi",
  "key36": "3d2o3SaTXrASz9MyjZsNtsxuJcgYp5y8jqFKqD28Ctjv84JDWw7GK6To389ApiEHjqtEMLTJ9D3XELxAiUnNA76Q",
  "key37": "3SvGMAWHH2ULhkKLn2ZEXFZfnUbf3oBxVfaWHKW1wJ9ZagN8DuG5ea3Tq3t1YML3SdCrNnbtbunL9vr6yVxNUVVa",
  "key38": "aBnDgQEMaLp2dQv6Ap6QmhVf7XAbrgBYtikhzRRoVnxhHifahak94oXeELGcVkqZoTkNPuxyXiwknEY5FqfkoSP",
  "key39": "4JvFsyY7hNZqbTPMCjC9qFTQUjraWwh2aYyspZMFz4EWanSLHmcXBAc1qXwMkPmHSAJD7hhnJdZCcT2dHxoJeQUm"
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
