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
    "4RBGEpkdJZy79YPYarjhfRsRBs8JaE6VzdCA5mBv3q1bWrhUA39vVubXhngbNVvgnQqig55imHGok79eUJ7oDUEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3cMWY479ThrD87NqAts9dvutfMG3GkFEpYvNuKr7g48fk25ND3kE5Kk1jPbTFvBsHkP9q3Y1GEQyzGWyhw6gEp",
  "key1": "3v7V2E5RwRg61sweLj2Fcx8jigALzTMxzLC5de42FdhPWyijjyehurErsJC2AcHjDxKUN3S7B8qjg1UZbCQNqdxh",
  "key2": "5eCgsxpidth65vRjaXzL1ArLj84VpTmB3Jk3JPEkrtBEd6KMycW7zTGn3x745e3S2Bfie5HJQdUrGrMf13TZiFQy",
  "key3": "3P9zX5jhfKtAqBthCqJFVjiX1AR49SYaYkrb5Y7L6RUWy23VqKtdkbD3tLE23puXhAZUwTN92BTvNiaKHc7MtLFN",
  "key4": "3nPB56R2i6E1cGjR7UcDP1BJ2o7zR2q6w9VqdQk66ctCdLn2UwPxXNSAMxrUEBjXhoJJ3QZtNeCYRaRHhP7M69nu",
  "key5": "3gHd63pqJWGo5xM6Gp9CBgFhC3ofLUyEzax338EbFBKTrS1T494Bb6dboFYC64ZzfbHkkyMZH3zSnjupPCdNhGDh",
  "key6": "2AvbVfXLfXaFfeqa9yW3E4JqNXMbCtN5oDRQrBvtzkJQTWJ3zJGQX3eQkdQKhAqXUg7hpEmwMuHoydKjYW5jZa8c",
  "key7": "4bjqm6ae6XtCKyp7RsV7Zk2scTaBJeTw6uYFEDZhMeut3WWmdFeg89Kd1r6GAF67y2KbQiHgTR23Z3bADVdQxQpx",
  "key8": "2ExTGykErmJcW7eJjAp6XpRs6zBPN44FnLyRoWAqYLVFwG5mht5Pb6YMpMkAma9VhgVU5GAxDvvvRCLhAW4RkhbE",
  "key9": "cJxYKy5quURNMiMq6e7gGcthKKBR6iexLs8DW1xAXbdGKozN1hopFGhpXdp9r32KX1HqE24q1uGMZG21X3RSocS",
  "key10": "5aGCUEVCBHLRw59hwbjQDkSeHzZZjMJaEaEtPj4BcpAr6ZMse9vsx1A3ppKXnV9ZgXEvP8jX89TQNx4VmTkUZVyB",
  "key11": "3pr5U4u5p5ui64AKJg1WTjGsdXutdYcqXVMtS78MDHSmUYu1QgpxzJ3VmtVgAgDzQHxKZrUB9TqwQD3rBMsA7mFq",
  "key12": "44bwwNoD58MgBPVGhXi84s35PNBdpEwc4NW4T3z72CWJGyg3gEaMcJqmi3YpRkAUZLs7M2KWmgH8NBwcZE7S255x",
  "key13": "3Dcue7kaJV5GsGQbn8tDExZxMLouTJurCYpyJoeFiqJrzdqinvEXKwYWHy5DLCQ4meVuVMAF3XPuVSQjHRgRbfsb",
  "key14": "3iDbkW8BvCLSZ1pGBTVxh2XBXEPkgVvzTcCFLJjhsjextqaHNPZAyz795z4CvM9bBaCHN8DeBZkgp6rS1EzYa1Fe",
  "key15": "GnuVYEXXVMinmyqiedPNarLy2g34kKzjMs6NdjbCe2RThAZCutkJEaSmpt94trzVQmzpS4d37F7q3egyrwzQY7y",
  "key16": "Fw1o3oMqPJpYhdE95HErQURrPnqAovjSY7Ng1t6nnHFtv28DB3snmggz8CMjx3b6UJZN5Brm5mFSJwGdZVE56xR",
  "key17": "48K284VzPqNDoxpYfdrsFXpqxUFmSyJdkfdjF8TcVxHzms7ppg3wznE57x46GcxUK98nQ5D3FyyTeg7Kj8HXFu2r",
  "key18": "5PjQJ7E8CUTQ1geFxi6pmtgkQXZpJjG3FnF8KbjMSnRmVHxAUYU9NH9kW4DiJiBrnjmfdJfF1PfodfzdXUEfvnQG",
  "key19": "PoSncDTrkykfi4sMMCxcMKBPkz8nCPA1jaFu5poez8xFdHbbakFCiMk5f5WTdxy8XTnamqNWvAZhDzbTdoEqvbS",
  "key20": "2cjEX1BqFhf47CVXjjnDzgCvtqdZqdSGgqbTHK1hEaASDZYdR3JL4EX7y61YKGhYvSGUxzBDLWL4F5nTW9P5VsyE",
  "key21": "TXpxCswJXHD5w9YZjcmHTNqYa93H3qoASC3tP5DsepNuw29gF2fYe3CLGuznrW3LrnPwi3QsTuFB8bjDjtTR1by",
  "key22": "5henmUotmsTLL4j59suHgppFWe8SFBPir5ufy2pCbaf9G48H8NPGvXzMy4REwzsNXW3ZeRYyd5bEJdqi8qeUm21U",
  "key23": "3XStVeGCyFNXCGeSmXR86FfZE14ucZNKyWMM6jMvMnxG8a1PYt6HhrFt3yNmRGf2MjyCWDFSwUDPBNKLLJmoaNkm",
  "key24": "3JWuJZ9BvwKHqnoEyotCxt9oRSVb22fEcheKJ1RZ8Y2pm3P3AzHiEqThEDVgq2UsAiYu2poXz7eYa2GaCJdGoVaA",
  "key25": "5bhNcyhVMptEM8fLrxHm6fRtGdjLdAxpcH3LQpeX4T1YA2WyMwitKF5SyR9212qos7JfKR12k5Rxyg7jEZY6E7Am",
  "key26": "rE5QmrmJDTqNruvXnT8m5UydA1n8oE2GTEwoN3WARQ4sfboV3ybt4T6nry7iKuLbwff9i9zTqbArqZzNWo9Losk",
  "key27": "5wnULWnv3wjG3zWM4qmKerb6HqNUWUksRuc8mb72gfPcPCjfUUTL12c6HXpzaFb2DBN6TopL5ehV4NNNFasz9ezs",
  "key28": "KuAYey9vZ7rhZpW4RgLNcJ4iQyp9ANzhNhQEy8rqz3jSMTEvXFmUwKG7MHe3HRM9jYLp9QGtnJjpwjCFZd6rqek",
  "key29": "2D2R6Qx1F87JB7VDgWMY1gArA7DQ5Ur1KhgHv4gBmxfjAFze1yxan3A1Y3Mj19C83HRbE2RN5Ym4DgcVvUcmo1n3",
  "key30": "EB2scer8jQHxZZuxmDm2JsLqTL17HqUrYb32BBu5T74xY1Fk13ZNP43ftktUsNcsPDAV82wKCqnB3S75DP6m8jY",
  "key31": "4N1fzxt1nBCAPmWx65uT3PKhLt1r2qKBjhLxryQ4aEg4E6wPHfc9Q2wV6oGKW6XzZhhXonS8tWLCmsjkhSfNpXBg",
  "key32": "6AEY2zp2gqHSVzjGpXnzcR3dnPke19x3Bc9Ab4DLNj9A83XyZxwipiTYTpLVzzJixceH3jPYxqAjePWgPrhZgF6",
  "key33": "486CL7mpZTyGmbWCqzZPUYH71jjGP1ZfbC7fiXJTzS71AugimQkrZGeMMvdPw5CwVive4XDSCrXhGQXNsKXmjptS",
  "key34": "UeeyjdLxiA8FSLRfV6kqcqGvwA5FCZnpkNEDQuYN2gf7AcyCKSt33XyjZZxqtbx9aTMV5rP1H5GsrLgNBTb5TuZ",
  "key35": "3tByHbnaJygd8qdpob1y68MCFnnFz2vLUbfAKsCQB4uwRNVEUsL2Cud3aUGAThrnuzTPs8PNZnV5DFKy95kpq98p",
  "key36": "5efCznuHffVpbPVJYt64gP6RvYu3zxwdqZfcm5TWDEeRFHyzAXBjcRsCoyH8XEnKBP9of6B6dPddUhkfbKJfseub",
  "key37": "2jfmepsZRai5wpa3xWGaJKE7KhNm4UayV3o1evghFdmm6e1g5BSx6T6VTBkMMHZrqdHzcicoXJ7zuo8T356PfXfW",
  "key38": "42KFdo8zqDnu5ZJAfmpJCWQHnjpLYspzvDfm8SDUn6xeZ5MppFVAf2h4uLf17x9mABcHvhtCvy7EqESywHoQdm64",
  "key39": "3ofB84175pB3o6CfSoZtEP3FTxR5th8mH3Pa7s8LGg4rqtm2PzMxSzCvvgLh7MkXytAJiLXLgYE9UBJuPRHxoLnH",
  "key40": "4XGg2y7humcgRMj1AvxbRD2CxjMzBoegk4qTGCgDZCGM9wvkF3FCkKEsgoXRxqQBr4hRTZoh9XVHPJ6kbEyo3YQ4",
  "key41": "4J1v3VJ18m3ULrncSGX9JCf3DYxJzGq2d1NioVot1Q62t1FhWqBsiGueh2Z3Jyuzt5B6hZuQknUZSsak97P8fwbC",
  "key42": "5BaaaSVhX6YqXUPAJdbWuu848JkbGMQW6ntvQsb3crkmUokhAc8LQKSHx3TAPLnAyJdtXLwG4BG9zRtCSxYAJKKr",
  "key43": "LqCK2ijcZkKAeMqD97aTdwAmUcvZzChP9zaHU1TmJzohezBwz9LgNxaXuUxJUr3RoPCBex8C4s8BaWzu3vrHzaC",
  "key44": "3uv4x4dnbKVc9h12vCyHSxSsDhoAeoieHTMWcmewQQXdJxX6H2xFDwwAN2tns7X6gveq2tjgb6aQkrV5GFrR2ZKk"
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
