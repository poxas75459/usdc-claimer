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
    "35JeSwh9xVi9BfpkrvC22p7xUNv3tFicv9C9gJ8eUVb2Mh8dAw7UWLs1ZmyMG2FiGggPoVzpgeYV7AygKrUxnyLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "os933f1Wf67Pz2nZwoSBixZfVDujU616eyuMm1BrU7iArreEbcm9cdMvqt5NGg1sDYre8oritPJy7uRrmadKxAb",
  "key1": "HQDycr9cEAbmp3j2U4pNXDTqWeyEzg6Bk7z96EQxxZn3b7HrXsYCzadoPYUqDuopzxURR9bu9Eek2PBGgV3UUZc",
  "key2": "2RUC8iD5aAHSeDpYRwSnmMMAZrzQvyDyJgQ7nZTku5wv175dmTVrXtXSzizDkijh4nYinhZi5ttyFopcRtudAWYA",
  "key3": "3ZSLkTgbTHehxozaTHA1PQoZRGHawfZmWqFgpVeK6ScR6g7uRX5VjHRErhEHPQTHM1gqY99yH1ziWsojw6C8mpKw",
  "key4": "5SsJuot6upBPUDaTXZeyXypYmpBqNQRWEkUn3PppMvhgMhCzgsr1gMRPnQ7y3vhgsngQKd8Kw1qGG49QZpyacDUY",
  "key5": "2XrNSBU81f6TqJC1Qh8rocvtZh59JiiPQ1MGy9Cpb4W6VwZ31ftX34XwXT1rdLAgCAkasaFFVm6gRuckRoa7xyLR",
  "key6": "NMZ5umWrSq7kDiY6dUvmHmjYGEccdoTWUC2RRTQoNrxvMDCLm1dbtA4go8W5iEb98ZUqKNWUKj72oYX5SsCDEnm",
  "key7": "5vb9yyBComnDks2nZWH5yUTzk9YEQA8Nk2fG3yoxatBfW266KZMWuyYNdX1BgzUvXcL1b8KdpbvzufikYzpBh3Ly",
  "key8": "5mHyQeUyDWkWuMth43tFrGMTM2VAiZo8yHHv3fW74B99mAFLgi4HFAhNyaMF4TD4xwiX1QJrA9C5hXXoGcREupC7",
  "key9": "42XQxpCLsQh1eASSdS3ouTB1ckPPoH1xTTyLP4EBerFVALMeRcSGJY1GaBnMGRgAAuazzSCDoTkSaZpLfkfLXwTM",
  "key10": "5HLp3CJZG9SoN64SyN6XeHTKJLfQZmrWexQsbe35g7L8j1E6kveYADfV7GDui2fqUKZ7NjzxBcbwRZ8NbAPoEhmk",
  "key11": "5xthTWrjR8ubroTHwRb43RUieTYyQZR8sxqNDMRroij8ecSVSJPwk8zxzxUB82KKnuwgwG3PBtgEWpxAjTybDQA9",
  "key12": "AD4puViTzUVtPLqN3FbKYFuC3yPNDd4WPEYijzR2ne9cpR56MHAH2xs1ByCtNFevEciucZeBWnmDPfi7x5zYVPh",
  "key13": "4vuKXxo59JVumFmPRtvms1GNWR5As2kRiiGQ146gaBVqkQie79PT5BQu5zGuTmrarbJMz8zQVbcskS18e6YXh9mx",
  "key14": "yj1SaFSNF6TL1jSvpnLrrtdABAqWNhLL4A9X5Dxky8CR6wERCyBCW5zjfKy4cqgQJatFgLvHbAHk5H7wmjsFfuc",
  "key15": "3VNQ62S1Z93NMbQBgbUDmKUq4YnsZM6phEb5mx8tmbjTK1uZMqQrortLFgAbgzg6571ymWhyLCNbzs2ipStwvop8",
  "key16": "21FGHnUB8wmwHkEu7QegrMZU4rUgWia8jFMieurn77NzFZLiC9u1iai5vkRRLgAEEkPtwCdXtQCnE7bUYQPFRJpa",
  "key17": "4HHXS6WCHvdCbFYCtk5Ui4u52JCQeKBzzLKVCZi2UNTDQnpdjThDhbTSBXm5DCC4zc3Lq6aizUSXMaaNZv3e76UG",
  "key18": "55CrwgJhRxuSjTWf5cZi3q9E8Mm7qFdLUZsALQHk2sVFE3kRMUEjpegU5WGAvwAGjZPSabFiPUi4okataPBPxxhy",
  "key19": "34KkbgpBccYKVFkR844Y9TRLAzGFfLpSguCw9i7MXUnnCAFJ3CxQCVLsVzBNzt8SAa3o3JjK5aVyv8fUaG9Y9Udb",
  "key20": "3ZWZXsYfWiqjU6xjJusmieckFYGTtXydZmMD14Zp3SNnttHUvMe5T8arQMHrRB7CVax3otrRGWxJYn1BWTLXPvqW",
  "key21": "4xgDmoyxkJ2BuWj4HS8bp3ktkreJspYZcK5RXnCQmVzspvrQPwZDjJ7gkFKCyRH9Hogxx66Y7VkzQDQqVFgK3UCD",
  "key22": "eGpB8VwqdJNs4W921K6hiEeb5KeQhBypiVnfAHMie8uXZZMvaqMdNzAaJhGKXK4293AJakfEQi1oWNzxMnK92d6",
  "key23": "5jCYA2vzAWy2oejqvWuTsiBtMJrwytoRf8WMdvrKz1rKvrVTh6vVQXojihBpnrAxtKAuN2o1uda6xpoB39jC2tDR",
  "key24": "25c9QsL93oBXSAniwFz6nkek2WxHqyLh8irUpMEudxYdaSSS2vVbSZsAS1uFF38FuJu3JAPY3Xwv3rCAzg1zFRjY",
  "key25": "5ZLr8ha63M8uSRUKtbnvxrPua2ZDv3BUpLtz85CDSDRcqCZRkBaKT8jYu2KZukCrLr1BMW6rstnCsgdqA6zQPjgz",
  "key26": "2ZC2nDkT9T2kJB6nQJe9XnrqrLooCUNn78qgguMYsHKRFoVeAU2dLrtbz8k3bxoei8oxxoWtrCf75o5p1dnZGi1b",
  "key27": "4MzCAoKitD6iWvw5HEJEuCtvgbMwTE9a8uXzaFuX5MFHQstHJoG79x3QSMmnL7rkssh9XLw82tsTyomptCrfEbKz",
  "key28": "2PqGvtMixUMgeKNgd5QSCZTQxxz3b2YKPNvd6QrBqNe3CpyBpzvkhmwjKF5zPhr7AECMbRe192aPDSqvdhSu4eV4",
  "key29": "46KEFM8429FEc6QDMRWNdtLWWZmVojPMwKhAB8sycghoEEP6Pj2pKGh1YMV2nCuvgV9FY7Qw9EpenwgpF34YVTZy",
  "key30": "2mnG3x1FcRa9rDxS9sZ22hZfpcp46gPk4f8YKDyGsqygxGUsmfaUuSAnZ2uo7vnj1BTcR9Yi6VG3EHpcwqV25Jzt",
  "key31": "3PUY12mjTCAVARprhJ5fi3UiVHCUCvpsD95YehnX2c933W76cCKHXffuvahr1vbW3uU2EiRvFxFQqa6euwyFyEc",
  "key32": "3SMJU3XsQqmcWRMQ1eSsjzSXB3vM9kmxyLDD1qddki3JSCDYcN9ACVJmMzFJUaeszunukmymvGtbTsKYFrwfzoU2",
  "key33": "5BKdLYLBjPrKZmLy8SgGEc8kNbW3TvWFVHA5bhbbnb8yszRGJR7CwxjxBw74h8FT29mqJmbKy4sHYoGua3FzJqfx",
  "key34": "2MfmsTZ7hiGY7pDtfqVLhibE3gQDs8Een7qekEUNjBM8LMxvJW7SNe7NeKCufdpPmjARx5vQbdfxcgXc5RtAjWK5",
  "key35": "2MQ3k9LPt5HWtZrXubpSUik8vc4Jk3VBRRA7Dgyai5xTyboyDizYFuCXBMFfeiwBfQykYQm36V2yjYe3QAtBHgh6",
  "key36": "4j5i5QxYsqfwvk676eTooLKQkiuNCF92ntLgn4SmbJi4h5SxJ61Y3H35yJjQGnyAz8Syd6KnuKmzSmXHXpRPYqvZ",
  "key37": "2KpG1p8n3Lufgk9nzFAiN8v6CwPoYN7tf3nDAvnmk6EL58PsLamXwrStPQBnDuS5uWvDs9YHgPTuAWfazgjBV1Gh",
  "key38": "3adFXiCJFB37ciysF4qoCHiX6SqiMWAyNcgV66xe6MuKSvvXNWH7aoCFGWatunVYtm7pm78A5pP7yM32gYiwfkyB",
  "key39": "5kmh6YdgVjA6QujLb1FD3jHMKLcPHu7mnNG4dG4xx8SApUDQCJXjFUt2JFXbXEEXYc286P772sMi61wrVGc6W6NC",
  "key40": "3HxnJ3zYArcm4fzUm9JNJZGCubZVd4q5Vh5NgKXWaC7pmKnzufWXR7eyKPfm8BwMQh4r4ii3WjTVioGFoGQfz8Ri",
  "key41": "udZCExkQBw8KJHG25hejoAbdXv495cXxkqF2X2TjrW95sgF1ZULtad3GnUnoTd4YawzvUdYX6Xmt69BjmKRyQgP"
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
