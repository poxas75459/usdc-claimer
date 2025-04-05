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
    "b5g9p35tg1fLMuZhV934oLrCrbGPHtfCpTG7y6E7kZPB5g2VUVhNmjJng9toeVNDB2pYj2WRrrEuFoBca9joY1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wYqTmtECyBXz5t1zY7M379mhgAbSTLSqZykQCujQWcGhc8jLLLiqriTybQTWw6kNtCPnSyzZgLJweeNaVXdWCaU",
  "key1": "2GnNafiTLjfEG6Gr4E12gyFBv4VFdTAet9RxoVCd9MUt3zpLexFtzjN2tT18EAo71naNjRf9eZoyyDNaja1w1axS",
  "key2": "7QAGxR2u1AW4YrEaE5cEkBicYR19nwmZbhYaqMxkGDmHkWSK66ZUTr74GvNHZVwFtbNtsAgQK9D3DtHjPQZ9Ukf",
  "key3": "66Y2G4qM7pvGXjrKyyND1XQoXo14zY2H8QBkDFytL8hHYuy1qTLFkboyc4fdBWj5wSH6WekuFYnczrv6t2n6YZhf",
  "key4": "JYh7aUNBqDAHe77GkZvw3Rs8kCLZtnmoj9XvxT8qPyi1wNAmosXRywP4BCEeCCkJKXfrRipEe756qZRhgnVcgMS",
  "key5": "4D9Tx3yX5ZziU7UM6WPYLFcGfD1TWh2GA4eEPipqkiE8fLaUFZo4Zw8HR6snfZqgMzw3xZx26KvjdAC5xD9YHYSC",
  "key6": "qi9UemmcxKCkwLU6zJPdbEiry1VUM4JsVp44Txfj5UhBg6EiNfpJ5cxSMDweXerT28tbYk9bSW3y1KonACgAvB7",
  "key7": "3yMHFb5sc1d434AFAq3wyCsxWiriGtwEEX71dBKc17yQTv1eJx7WugWtW5UFfppTZdWdGQ7qZek3dYrGM6peseka",
  "key8": "3jUBaCAQrNmj4msHSHJrStkmWDF92sqvt3f6zZnMB14WcfUiMMoTkStqBmpY7Eofuwnto2bBJqVxfh9sY3STiWK7",
  "key9": "36hDWrUzmDS9z4YyDM4VSFRHd1eVCSUPhfgGra1gghkgTW2qiHyNEGeZvHBcX1X1i2NvDCPH6rSbtig3gbTh6Ec7",
  "key10": "4AEnLqsZZJxweX7TY3ovR5a9txUtx4VUTzKEDV1gXYFeAodq2DqRH4Fx1Xh4nEuYgh6G7H2jhhr9wK4CUEEt3nYc",
  "key11": "44V7SGsAfj5bMURxR2wpqjCExhovGUkDJd6kqfnZsoTpN1bw5U9cJrWEEuRS2XKzm7BRK1iUnbVN5MFBhHG2uhiK",
  "key12": "4BJVfD4gPXKBySzUFK8BfXGEtcQkRVKHEYX8Eq4BbicQwKy1zRuGWYN12t88M7QZ42aTnpWv6716hK8vRBBuMo2d",
  "key13": "39VAAYDAACWvn9tFzLte2iPdywatcWTq4V9Tbc5kwGV7nVaJbX3Bft7U1UwZsNGyPCjAGS7HucakzXyFBehz3cQa",
  "key14": "4vn71AruTu1SxmNA2sRDrjHhozq7evcNMzwWqxaWciDEUWyn8zbmFwZBYFRRYv62UERNAaDM4aH9adPwjo5PXfs2",
  "key15": "5KtSxF6WcwtW82hNc7no6ftUag9FXjBVrEkr7tHDBc7LHgqCzs63TpK4RNqdeXQEWaxYRYjUJ64R5xuHUCwjyrWH",
  "key16": "42aF3Tdv1Uz48LZNs68CB3sk7E5ESKM5GyWRZ8KsPbJCeYeYfdoJKgiXST1R5e3Kbod486ECssNMFZpKAeotawzc",
  "key17": "4zTaYsUavvJNJJ6Ezx2A8pztdX67doBb7LLwdSVWXeG3nygF43Vti9kqxoSHyHuvVcYvwsiguNW7smPdLzq668fn",
  "key18": "3Feht7871yPi8QiEXy2bPgKqSzH2nTurA8MmFCyWSQ2MBYoSfmF5hEoGCCtxWxsuDbaBxr853uVQRKX3cUJZfkcu",
  "key19": "5fDcezs3iNBchCG3qL3PcC2AghupqB1oVYJSanGrJRy43ZXiiyYbLyaqQPCzgWuEjt4kiiZgTwFLTbnRTKqm2QTh",
  "key20": "5mUJ4mEboKBPwuvdnyZCQjVU8NdTkaYA95u6HTDDRcVEkL7QvWXp1mc8MdKLgUe57dPTbWUQfzNgUuP7EZ1DEb6j",
  "key21": "4nJwJc52RkYH5UMg5hB4V5VYAAoojYdJqmTkMGFyS1DeZQnSPMujTy8nJh5ci8T7Dd8W4otwCXpZMPBzVqNrEgQa",
  "key22": "3HGvWt4K1SGvJiRfE6tczDQ9NMvZwkqiAMYTrXDqASdpKBhWGpUhZg1uSKZP6dddnUGuoENJXLesZ4KPyVBzjTjz",
  "key23": "mG8M6zUmr9TrwasRJ9iWHhRSxSq2r3JNE4WjWuMXudHQw4vxp8YoeyTF69NDRnvGaqUBuujqjjjw7DiWjm4MX4i",
  "key24": "2vQ3Xe43zZF2CUqiJoYo3SXq6ab6ZJCEEZ1TtaRXPkaGLVkU8R6kH3zpmaNyhhPUmSvhRD4Qmu29aonpw2qqdurv",
  "key25": "2GPTDtbDNXmmWSrkbkhCSWypdqENMDZMuSKUr9erw24BsgbyvTWnRWFbNC9FFKqNjxYbSsmme1YBVch6MynZyLxM",
  "key26": "5ZyPN6ErzNSbCCeHXnDvZYCuWv9Ze6j5V83wVY1RMnV7kb2KLCYezMJpWzh3UXL4s42CRThn7RRTjiD4mNFHEaTX",
  "key27": "42tk4kf4V9U29NwdYKnyVZ4iR5FhYAxCZM4JWXA4prfYeBiEQfntcY3TQPhnQ9MnMb8Qf9mx2jNaVJUbMtV8dMKC",
  "key28": "2TAd3PQge5ZBrt9ECBUoZJRmwPqEa78LdXic2Huwyobxp1CwtU3w1VXLoSbgUCcADJmh7Bg1X7LPdM4Wgtd3nbFe",
  "key29": "3bfgG2W73U3kGXKLVHgxWq6WzDxpum4rHCZxDGJ21pqYrm5zPDs2phMDPJh5JpMyt98RegzeF1YirCg46TPn1JX7",
  "key30": "3jVh8H8KGzeLP8Bb58yVHGg3qBWtYso4PAmYq97SN4oqVusX7FQEf3Dg3GdXM878eRSZx2YpRWuiQ8u8AGNAJFaV",
  "key31": "4SzPR4YwF45DESAY3s3GhsTVwQdUmw2Ngqfz6bxeKD2o1JCds9hnEHjxaZ57V24wt6k5qsTampLPJrBW8JbJjGRP",
  "key32": "4DUV2BNN7a2jQbJAwg8bpbcR78uQLUc8gHuQkE1WeieAbXcijqVGSBoZtg78hA12FR3X4iXTEQ24XrBTJ12Y5yUk",
  "key33": "5FnRiF7LQnQhwJrHjsQq9nbE8fWWP2acakj5CT3rLbFi2cbv85pUhSU4qnpm8woyLrpQYA7LceUEZXNUonPwsfbr",
  "key34": "3EaUJHF478CcdKt6AH3N9DtXWLukoCRPCijGdg1xrmiRurTbZqEBdNz4s3HR9pydf6mcZpbD8i6yexUbB2SxMhME",
  "key35": "5koxBPyuTVSEhxWKbKJ1PjHfLWCd4sTb22qh84U8hnL4fEpWd3yAqSX4f4QsDCaviApK4o1zRaZ2b3WaSCP7CRrM",
  "key36": "5Mbwmmxhy5B7id2SrGKYKvU7w7ZiiGxAk8JaU5KJUnNgPfuXopG2izhmu3UsBa2BEzJPrnh9nNgxqSWAqfWnahxu",
  "key37": "5kRGSXBbYvbUceRyQgBh9DHFA5xRfqUUstpQ4STNRJgj1P4wwkuFiFaoNPZPESuZ5SbNHXyrBvqDnkc2PEwzQD16",
  "key38": "5wAgav4qokzHbTxNCpYpufZDEJk5utoWhXZ7q9qWf9Lr9cMpCicYotJrh6Ske99z4VPXP9yw4t8agpwKHyvs4K2y",
  "key39": "4bddBuJkJeSDNzoA7gHaQWsjoUk9msmCkQrYDkxGJDRMMESLjG2D3rWDNNRfPNDdRoZFHWsinY7JGrPHxiTpa6yy",
  "key40": "4gQMbwMSxzriQZiEpNwWYSvb4BaPKefs4wVgEYghseJ8EaMWTXTvcqJX6HiKYemBxRgBTTBqFXNSN43FoJuVq2td",
  "key41": "3kyW2P83Z9rK9U9bhe6JVnomDUsts5jSpSDYsB46hLcH2HjvutRZDw6V42K3XZA9zbALxWFTcSuh6qroAay92hdj"
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
