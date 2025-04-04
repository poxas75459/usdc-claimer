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
    "35sEEmRsNc8akAwLHCSvCrWxtnPA6DbpcNs9cWfUjzCLMpcEwqekQYfc7L4eBDzEhVbYWgVjDrAMRBdiU3pjZesu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDDL2DxfYBp51xt5uudPSYj4sA3VqN5W6jqSkkAfNKHWtDizM3WVdJm8dVihTYCTWkRs2X3XD24bsFivFcKeUaK",
  "key1": "5K2JoZdivsCrM6U23CPx7TJAowQajc5aFBiMw5qZVMJPUEmnfLezvUQKqGpDSdEKKjsbqyrvkmzaKS1B9RfQSmqz",
  "key2": "3Xm4wHBx2LNRQfBaTYNpnxvRJz37miYpgWuVBHPJShFSLE4VS3gY8Pp1jCkdrvVgES4P22sxh5gdznysA37mrcYi",
  "key3": "35FjbfEAUMhMKDkvdvdQ2ZHoKuntZQ9pMvV5BLUtZCqp7eLtJQa129ks8Cck668Wfms2vQGxgWZhD8bMBkYsEr6o",
  "key4": "5phKfdpaC45BWHj4qwTmfi8EVagmmdZhJL3RkJWkxNbNViTzJyNHteewsxoboQjau5zZ6gwR7df4XsWJG8cTRccY",
  "key5": "2f4soYLgAZgJH1fmw1gh8vmk4m4N745mqpDDQC7AKS8gpAYPCWQivxPtYkg6x1fb63vweGUc9Q2HeiobBTWH4ZE8",
  "key6": "5w4Cuj71s4Y8X24e1eBosqkaYR3hbV2EsahCRqYXzXo65btHNoeFSq4zT7mozGPbvHoq5Bko47hAg1yb8nn2pSTB",
  "key7": "5eohGB7z1dCs24GJU1fFHa8y617esqXoM1V28hPCgQpXzkCmQfvDo3SnMjpGhAb2Kdoo7D9k8rqraKQcuc7jLvmG",
  "key8": "52GyCfK2gidwoE4xxqPifzAXUuaVtmD5sm7oMDR3yRruG1DbjkKsBqjcNU4wresR32jAhCe9dyzPuXahRhoZTDgG",
  "key9": "2fxnKcCV9m2qSWr2vadcR6Ysg1VNyW3SAiDhdKokSyRgqFUkg9LFt1KCJewUTQCogHWyUuJZj4Seswn5DLv19Z12",
  "key10": "2EFvNSmYRRhZy6i65z4bCoVgHTookV3VMvhtWDw7XqsKoMbopxyqkZkjDRyDeGrVrfzxXZQGYWpCGPuBjkJzhHN5",
  "key11": "3CPjMCnk7RQGHzonEijFN7YXgdLBhAHRSs5R3DfQ5maKuMNiYRbjYoA4qCzCVDjGq6VtBsVeuStqTpJT91RQqUDA",
  "key12": "3JPUtssX2Y4LbfnDKQdwF7BzHNN4YRg3NgehXeg8Wx9oXEXqV8ZzzoXL1PjvAKjqpJWnxqgpRQQjj2z4rt7CqK1K",
  "key13": "h4pfTA4grfTeZcW96v59CXnnMHV6jUyMgFtcSA94znyWYVkYRvc1sky5kMr8SFDBVEMF2Z5MWZWwKtZAwMp2Gfn",
  "key14": "kunvfo2K5u8bLvXFoUvcHvLkobk3PhxygQp2BcGXcwsc4TxS1QRjCX46gHzWFVuYUCy5ioQqTqnAFnctLk7A3uE",
  "key15": "2hSBdU5nHmKGC8t8JF8qoFALJrVc3urQvjxrzLHsqXURErMfQBsfrfBwSc89SjeJvbGYDjUcBgYZ9gEftz1oEYDw",
  "key16": "4anHVVj7DtdP1453EyXWaUU5kGhK6M6wnDKWHchcNYtP95sRk2q9ebcu4q23xFvK8xspTjPwX7soZZohGED7vB4D",
  "key17": "5CUPtxWeAEP9DpHPXW5mLXqoJX6Lk1xUKVB1PixUBq32GF1PFSSFVL2pEF4MCU4hRnS7QwVM1uQpzjYoX4DvptjC",
  "key18": "2NuecB5CVa82mWkqHV3ktpKWdLtd2kwrJHwxuvzSFxf3tYW897VAqhJ6mzTUd4FXVv5ZUfuZbfyUFh3W9qgRnDaR",
  "key19": "4rnbeLLiXxGR7LfMGbLvTCvaTtGYNru82DiCD4pzKa2GvNjhT71JPcNjkjZ1Wc5yTqfmYqjbSco9yp5Y5bDdRqmt",
  "key20": "9UDqNEeFXN3FZ9z9X2XZHAfR2HPu9nPt2e8dWTizEHX45BZyjRw2qfBvaLGeSu7Rv5h2QRce6TsDg5iJNbqBcZk",
  "key21": "3xngSphr3bPHXXsiK1uXPhUynHegKjM7qdigJMziubHB8ZT1bpmYFhPykcbPmyyFqkMjKwJiHq6CjQGzA9ZdVmb9",
  "key22": "2JNqksrXNYucMGEchFv7jDeujyVefrSDAZZFGmko7p1RARekUVMJbr49wstK2MxiTrkSoh5i11TANAYx9jDNoSxB",
  "key23": "29wnTNFjeZXKe93e1z1vUjBZjk3Aystu1nFy8TvBsKWsK6WhWshsimvcJK9WCKezp6dh9Q6fZ4DEML148smFSvXv",
  "key24": "cgB8cQVfNidBtgmaGs3qcQ7Jz29Y4KHKsUKqKqHpcN3HmrfkWcTPGmrN2VW9NLyotngmaz4Ndoeu9cGDqiuKNM1",
  "key25": "3mymGWCyvjzHL16Y2ju2rs5nntmGUTFCH2mzt1fyiwZm9C5XFX9QCWYmWAxJFw5RcHcBGbZ3bNdaSAoHFWKsRY43",
  "key26": "495LiH7LM4dd8Brc3jaYRKJHtEATE1JWa9Ek63uzkYGrjxjV7y2ds2XYoiu1QPtXpStLix24cZsxuF8EMgRcZvtt",
  "key27": "3AXBkNGjPJAVKGfPmADjQBus5obLBs1MJPhauY5XJFC6qjTdkkKgHBmirLNDTBAx9boriUanCcBEsmLjhiYJ4dDb",
  "key28": "YhUcEgV3ZngB1TGPyTVhmdaxrxausonwiQKwpn89ukMfvnzFaUjSC5r2DnfJ7BV9hGaBB6oWuoswPSXUh15RcxB",
  "key29": "5ndbNYcCmyNRNuyziNnWK333yxsM1rXBNrnifyVbMXkMfw6NFspzihgAwXmbs7g8m6QV7z4FyhbCsiogrRNua7Kz",
  "key30": "3Ux453vJydeNtYzhyupHmALwZGqGjTN2bXGF4UxGrnYzBT9wmQkJ2AFSJ1TNC214tFWARDv5zbtgujiF8j5MfYNV",
  "key31": "3GZsxnpa6fAtdphBKqGu1WiE5yWUi4WhrJLWsUGec1dtDNpdEY3oA6KsauKZc1Ji5oFMb57oSkTDU3CU6rt1XUEC",
  "key32": "2aD9k7Ls2y7ekqtxJ1deE5fbgabt8CARNH2qZQa9hGuKrxUYitRYkzxHwgsvwPXJyyjnLDMEaS8utQSGBpSD4uRs",
  "key33": "6312fTgj8b5CrBj6GvAoQfQWC97H7umNdcfnuVGgB6v7frQx4jzHUTxMQBVdPWCJnETg25ZD48zi5qJQFwAvVhM9",
  "key34": "5Abg8zjcaMpraBihGZ6kNhsTbnAEe3Pmwwqn1UPMrPLthSS5ZKEeY6WWExs1TB41NAyRF7vwYYC1T4f7XbVYtdMJ",
  "key35": "4oPKqSnfcpLFwQz9j3NQXivCW5Q2yhxybTJeSJ3dhT4htp8snuwGAGUZHHcrcrjPT3wy9U8vojbsVo1mmgQjoTqi",
  "key36": "4aF78gFFJPNV94hA1hgksJSnnMP22bPqFgD5bfp8kh4c49SJ6hKTzygEQ8p75Q8GwLVK2f3KUYjgsxUPRkkgi1v7",
  "key37": "2653ovwLH9Cf8MqWKUB6oRvbn1fxMHSTGNoe1HxqyUESPwdPyR8BW7aXoX3fRDDynrAb8PdyjFJSSAXv9Jtr3bwh",
  "key38": "5jEREw4WFwfA7y2Hatq7JFFuLeZDGaa8R3uSSgDDe4YQDBTdSBB2fesoC5nsAhwr6o8DzRs6ji4piyoh7CzedeJ",
  "key39": "2f56pC7KYej59ixnniJFVE71eUzGCwSwgwDA4cER7YSLS2ULGGHhHCy246xAP94GMVJSsyAmxRYguUTpcZ5AJbdJ",
  "key40": "2xcUzkjEFQZXQkpuRsYFX2PRs3mpXpw5a1wDkHDdgYj6Q42tEY5Ewua2jHKKKikLKthiWBG6kLvXD2cnRPSVJs8d",
  "key41": "5e9dmJSEVBcw8WQ5RoRX83Vz43Nwg6xuwXjLjf5sTNUCW7Rf3qkzNMdV6PSpC9e6MpsjugVphSDBhKfyNjSWGLma",
  "key42": "5Ju4u6vtpnyQu8EUC4KDAafRs8RQ2J5F8h8JqnkmRzmxpmY4CWoeaMf8JPCYEktGzkDqkebNgPHYNe3Vhbx6SxE4",
  "key43": "HWW6euLpdQg4G7D3pq9dpmx5upLq86fMyUdbv6EeNQqebdMaLkzD5yqaF5SZ4X7D5aCfYqfYASU81JiMMeVpBfV"
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
