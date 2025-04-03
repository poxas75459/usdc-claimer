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
    "2cV9HJZ2vPoS4uvt95eaHNrdGcHqauWzBnssiUoUNS4AQL6jYZu56bHNH5Vjm3ZQhbjk7SF1du4KVd27YL68889L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aE8QrF3QZpFQ8YK5DsfS2rLVXmWV3gQWRf1WwFf4YBY4xwLWeH28A9U4SPFYsFAm6mvkHBD8eLbHqEjsh89Zuya",
  "key1": "2mSxYjXe25uf7wKLj88vJYLind1YAKkq7DAQsY9HJnPVbXvw2fa3LiVdsEwXLWhrGsmQ2VoSXfSBdA4fcdvypDJ4",
  "key2": "iDcyqftRGcuSppKyitfLLZHpu9bMi571MJiDoAMBH973PQCzgKxkyjCxtNMtZxzKSNttPn6jp6q6hvUAsXKFCUT",
  "key3": "4LTw4EK2VHSjFjVb7NaS7nxnMtd2337YpNYdAQHFKaZdyhCwFtjCwXfrrH1NmisdrPJVJ3V1bM61XwKXXNcgb3qj",
  "key4": "4dMtUkcocUV7bVrD6VqkiDZRoFkZs7M4BMRh5zoVcHidhcznFvfucDTiRZu8cFHiNMoUxGfiTAFymowWep8Ld3DP",
  "key5": "5doaXMAQc2fUPibSYWMp2Q5o2b8iP3aEnSehFnx2Sk54xifRrVzKWyfpxVz9TnxuS9htiFuKQ4Svo3wV5QaWHMWU",
  "key6": "2uPvem9hua5FD8KPT76t9maJUGcV44QE7TiwfYvEovAv5hKTsppHJ7FFVFfwe9YY56xgQ3dtcTtwxCpzSM5LNvcW",
  "key7": "2jECHM3TU3qEGtwQHzbfVSU6VUCzcQVvm4eASVBSdW3jfFuNY4gngrLz54tEEeSR9bsvExQULWAR1BH6Kp6hCLNt",
  "key8": "4XDYcoueQAbAdEkHhdQ5TicpZymRBu3HG64CvBYxs28HtGbbgzufTb7DfNQavWsrVXCyHjHvRxNLdXWDsAwhksBY",
  "key9": "Fzk2HdMuUfWECVBHur4usdhFTuYSRZqDtnSSCYm51umfftdSR3rdbtvFprBiSrLuxQ1m8kwXvxiNWkciqm4PjVH",
  "key10": "4gckBTwpBvEYQ7vqxvc1z6UiX4hMtRPKHZp7Hvw26ERLwYTHryZEuFceXxdRBftpmfR8PEchpdy2sJjKPeLtX3W4",
  "key11": "3TKaA9RcGCH2E4VEZ6cjxnzwZEo9DRmjDtBC8x4ftc3zKBBtNpcvo3z2QT7vYYyAifkQU3AHjPnnMmYkya1C1jQf",
  "key12": "2KzK7YfCgmgd3shZM2pBHRX36JSdr1so6tqwsgi7TgDn3N6yshN16X6d4nEntiHig6q82Nq7cDof73JBq2SRk2bZ",
  "key13": "3RAwaLeLgXmxDEYpEfH9utiYQi9MrfqiSyaqmGKo8UbZyL7B9ozhDkoV5jd4sQnNEFaFx6gtXyDqYqWqzpddz3xD",
  "key14": "pVcRst3PmfXddYaPPtGvKVXDkhzY6o1hoQtqJ16iei8LpbDpt8yJRtQX4n7noPTJEEWYB5PeTeUwooMVvHKPD3Q",
  "key15": "4PwRiEuqrMNGZsZvKJdqyjgzT8RcBzjpxcYw3PLTUUcs7dwXGGCsEb1bRbLsJxkuY1q3ViUnBbehR1bdC6R7Mz1e",
  "key16": "37Ca2osuHa9YpNtiTti6NrypREaUKgFgiCjT6jMQrbonnNnxf9n7EENPbZGfVugCSunXH9UqaWPxuW5vpFvjYenc",
  "key17": "4rkTjS7bPtFtPDdScTtVTSNwKGKNfwP8BYQq5WsKr7fZm73Vqovd6ebgULBB1Ha9S9ML4adF4raZShBJxkSQNQYm",
  "key18": "5LKeaTW9g6kFzTZoVfuwrW2ZF5kKYgk1pTKVZxMnKcJEydM9LFxyNDpbZrvE4GVbicp5VMrWfGatJd3uxH4f9Uuc",
  "key19": "4thb3yNpo7EAJWWex49NJ7uRcMv2ttjLsbfJLgcGUziTPMBq6F5Ku6zwk9Mw4QceLwVxtNWR5jpAzzKxACfPJSw4",
  "key20": "4KZtCyGhxg74kyfmkT8PDsXh7zZgP4sJ56WeJs8ZRDn5fo5mwvjvsT6VZfMwaneKjJnsnKUPwtn7YJHbef8MfuuM",
  "key21": "cnpAu7gs8eHc26R68wWA6xQyTAbTdQ1hWuHCqniUGSSqEmaxWVhh3fuTmMuSXc3HjKGrJzfpUMhdx9bBXnGagAG",
  "key22": "28BUd6iaMaECM8e8Asc9qS3pXjTL2SuGfyxipxAvHSni8XFm9zZCJdy2rYaCPKTwCC4srmHCkoDTFY7LwjvPK8tm",
  "key23": "2szwrJbiJJkP4tQX6Y3k9cz4V36dP3tQmhzN8AS9kgXzaNsPC3Rs9hmGHUdrQwPaCRzCFoYXxpZrmAJELaqpWUsp",
  "key24": "26RTTypPZ87KHpqS5KRWSd9eFDxaPxi8NZcPYuoh3zKawz16dfjuxd7T1ND8G1VLHSKkq7LxxgcFDrt62s5eLTfA",
  "key25": "gy6CELwdPHCq5yVeKDN1BMKRWuevhopA6QAJ1G589LVkEGi9s5TcbwCnQY1QBHNFCE5MYwey2Ghc9MZZDxWh82g",
  "key26": "jhYofy2E5cknsXERMEdspdiaKxC6Z7Ksg7tuSUVwr1MVMwnj5SFoohaYxvcZRb4V1hjn1LkJvD1AXnaNjJqBT5B",
  "key27": "kcB3pGXZq297TYJdTvPWwidchVxgmjCWzofQoAwKrX2PF7i3Q5wDjz8b8KxPn3xZpYfEp4wrRGvcuAxM3es2vhL",
  "key28": "24Y4xiLrvFWti1WtgnyxNTd39buAYz8bHfKm5ftuMxUzpmTcJ1mBDrLjMCPdfYDcxpwW6nWwpwja1LoaqV1mgM4e",
  "key29": "4GwsTth4bZCn4otAfNkJ7EsF14YJXr6L4WhYqKeHtJvmXb79T46Fkigupe3hhxQfPTgwG1iMvoqCESE64yMGUjfk",
  "key30": "4emuK697TQYmgCQMokDxpVgtGgWm1J7Hq1bs1NisQScZT3a77BkhqwGjovkcwc9xEQ9ueLQoK8eXkT6TLvUarYzJ",
  "key31": "5y42x8qFU4PXSkkragH8pQ7BrQ3dKe55oWZEwVkuP4vQhESx8mQ37r4mxZ414oZs5skZ3CKdHfeaPrVauqGmjS8A",
  "key32": "tHYrGn6P6xdPXjK5JsDdCwmZdUoKB4nh5uByzpofBtPscTrQR53h49dfH1qD3rtx91JbrSSuy3xr8c8ux6hX7qF",
  "key33": "4cSHFrK3zc5zTvMcy9jqRkiu3xbzNWuD3SjdjaF4ZdPWXGm85toUAvKa3MswqUXybeL4Bt6ZBJh6TY5XRTzfWUUq",
  "key34": "3Qn3YwJNj7zfKdhdFbytn36nEGaThJVtxKYZixo6RyEnum3UAMGQq5SF42D7brBor5uGuNiuLmsJRvKnxMz6wKbb",
  "key35": "46YNzLf9zmT1uJMAL6HBqYFwqS2FFZLV14rqTgnvwPKTNpAGbej2AEUXWB38nvqTHAgziX47wJ1v12LnctohBFGD",
  "key36": "4yFhdyxXVG9T2eJTKCGeeGwsrTLcQueMsrzLqRBtYQQsGkr6BHaxCBwnru4AMhZ8Aeo1Z2M3tYYebh4PfNrWTXAw",
  "key37": "9jcSnkZk6sVD5PczUuDxbxVsDZZWenBnS1naT3BawDpNbseeDqY4GquYtTvciCCT83Q7kQMbmv3LvPBMeqUuiqE",
  "key38": "XaQ4nNspnpGbca1z2dr14s3WwBu6qVAYhd8D9YXCQATE2gLK6qaqhy1Xmn2mRu26kzHAg5cXXvP7Z6Qn97XgYju",
  "key39": "346xh8pVif2s4PjmYB5FhHJhDxN7GAgSCB8vFRSCbb2K8o6Ka2C9PjPDEdPrAu22SF11dGFaj32iVEqvtztX41sD",
  "key40": "4eccEw1PRNc57szy2uQTdR96yd7ce1qMhAPjf1ZH8EYyko5VbmAE5eNWAWcAjeh7xRpTv3VYjBsM7hxM1z4RxAoG",
  "key41": "3XmBJKa8Z6LCZ3MmybXWdj1iDTdG3SAD3t2EhpHPQT8K8ZLrDMiHkk14GTLgqpDRKkhvTLTMVtYzhZPsnGXAuGfr",
  "key42": "CiV6mDmPxHXextujbQKH9dUA8AGjVunthiRVvndhYJdnbUkjAtebS1niEcebzHqn9gxV92KKHHM8qVH39GdUNkR",
  "key43": "55haFawBAV9heZ4m4HBD2ajmjDiyfPDgRMxvGYgEDzCvtjipFjcaZJsbyxzBiGjmumhHveprfM92WzGonA9RMTBF"
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
