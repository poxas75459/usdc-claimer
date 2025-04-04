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
    "4MdFEq4Y4eFcZEKf9cA9GNe1UTrWBXuhqr7aZNF9fedTHhJw2gwuKYFV9HZcbX8kRV5VgXKwUJGTVb46r6mNZGkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WB94APLS9XvkPqKM7NjzgxzZQkbFDimwiUK656mnYsETS31nzZvCKw8sh3TQXJEw9aaKff2eZW3cF3b6wQKSWxX",
  "key1": "2BYuyXPDre7NNouNETowNZ9m8g4BgsWDyxeLhFBPZAWUXLwgtQe2dzRGkW8vHX1hSyepDz5nZaweu7LW6o5Y672m",
  "key2": "58MraLQn4UReMSUSqzez5gBJ3ff2M9MrrrmwiXvwhtt5THQYTtvZCfd467dD9Jz54oTtpeVaUWZEBzKqgMkLYYnA",
  "key3": "2H6bz5VpiR22irWr2gXJc2sUiTcpiBUVBVxh7PFJBmtM3whMjJmKsyiwY9n6kQ5ZM4x3sNHzRcb7T73yN3eE3kuL",
  "key4": "3Fx9WT77ye52vXghiyo4jNzVpuHp2AzSrbpU8CHcVwqbrf519yt6xnCXvCbx3WVQzpf3U6x8ncvvXDDJNQwmfidB",
  "key5": "3oaYPwUYDUxYau9Vx7CsSArakY2ct5RiH7fnX9arEF9JH8woxZXCXurPdPop5gX9utFuSDjpaDBdV9LwMFBjYgC3",
  "key6": "3nCuEGLqVLEKjQguTN446BwtrMkngJsKkcfraMGWKsEWToZSgUKnM1kRdCn4oeXQp8rBcH6UGCheu3CHdMLDBqCz",
  "key7": "55rCaSvSAeMLnJxdXmfLMCh8Pi1HhkfuGa8SGnfAcMyY1nn8SWbWFuK2oNs38KZCK1aDkPTEd9TTfUaZhh6ZyLaH",
  "key8": "21r7HPRYNUB9FGRLcxSsG6PXMH6rtecoq7o2GZLzfb2nNPi41ty72U2chqkjFaNsN7vKaGXJU94whvos3E8HT8cb",
  "key9": "27jRvXG1C5Dje31Y3AjegtsXW4ynN8odEnp5PdeWfPLAe3SCPYjyvMHN9tZFn6zgDpxHajbSs5m9wF6pJVhm56Lz",
  "key10": "mSubP8uMFs1FR3MvpXqvaKw1mbRvxFx4pibnkJuiPGahdkVGNYQBsoWR6t7PdLTvv66UkZuNPZuU13ha8cTnEw5",
  "key11": "2KCmMdfwz1Y3YjgGsXioF4VWimskrYz1TyJggX72HwRxPAp1mqwsRSS9siWJPXpz3hWVHDPN8SZ8as8UEtz4T7qP",
  "key12": "4BaPUX2FPcutacGavji14enEsE1t956vfh5war1NH4S7Z8BNsVcAv3EXfJ14EtDLfgXE8g7zZokJfo3XjViA3x8X",
  "key13": "2qmpJCPyJA1Arh4cyQmE3daygzeSiuZf9KaizN9hrDDdvBTVNTbpeTutvmMY7ULF1g4o8hTMgv2NrrWPEA9aQZLs",
  "key14": "4pJNn4JnGSE6ZvkMNwpZda4TUsNA9Zi5ePLfsrtaCbcPCFNLjMbC3tWmdeNo71sG4TcUgV3aKKe8XhikyNzrCij8",
  "key15": "631gAtxZg7RSkxAULGd4M6FUFFv2cadLEqNDrRZm5wjuYZvNivA5f3ByYEDL2oHfkhMsQiq8FaVR5M6KJQ8bC7qP",
  "key16": "4Va1JXdeerLR1bQq16ocjnTXdB3zBSsc7vaqv7PvjNZmtot3icwBaQx9hna8kUYDv7dqH822y27f9GbNTGLBwK14",
  "key17": "3vhgz98iRnNv4h7nKPRK9NUCpTbQeYcLiTfJe1iEhFCP7pHiMFTXkr2Z7g8tzT82vPjGVw5eCRQ5oMna4e8QDf8i",
  "key18": "5uWVJBWfF9wVsTkaeUBDxJiLYTAwNEgNYJQWWL4hJKWq3DDP2SqDgmq5DJc4iBZ9qv6SVvsCyRpGR4PhVx7BTWHo",
  "key19": "33izyZQphNSQYo6RhBKKT3TR7QirauY8jErBSGjpgtKZ9F6K56ZvPZmeRiVfwjE1ZonzFHe5uw7vWYViufCUSvTT",
  "key20": "5q7cHFnHns5WVvqayrEQer3t6yGu9AA2Tm1khLeZV9y7NCv6CWtsUeetqcpxkfxDUNCqqPb65fDBYsVuzb7BmXqN",
  "key21": "YKmciN2uYMZbTt8VtBvh2kxdanVy58jm5JeZDQudNwsKmuVUyVss7gJpRAB6p2HDoio6J34tQR5LTiTzd6Yd5bj",
  "key22": "5wxVqDwKHq1H1gA1ndBaaMWz6E7j1JrqgmsdWn4yBPWybRZ67LBZVH3jhmki2ES6GTZ2UirZntSsMcSyjRYXSSgS",
  "key23": "4HArrWHdBcZvTnuJNNqvRgUdANr9xPmnyz3SqtFAdu9poH4yPNLKfybBGF2U8CdE5BzBjiMiMSR8J85GLDsFx4Zf",
  "key24": "5fJhpxVjSBjErfrV7W2YpMtpxDadFA2DkMajyxsuFq6oznR5shB5GzMGP3hKLg7uuLfov3taFD4ptcNtPpJBmRiG",
  "key25": "dMLK3Z7euuXv1r9LFSHWFymrtdeCR5KiEqnuaS86xgSAbZxAGpHVtpbD8d8cQ5GyR5s8wzxqCqefcNyzDEMgqaK",
  "key26": "34zzbuzLYrL5ioKmvf4WJfcm2BVZ873mbZX55JpzLr6e5dLegbTkWr1hvZosfJixcB9B2rgiwkDhSveyHAAfaPrh",
  "key27": "3ZNpwNUN4ZftkjYG6X2xi3v2bnvdAPYXhTBXQAppiXEjsUgKim7grS19YHJZjbg3SrtnraKB4f6R5Ei5LjFKwz3C",
  "key28": "39LuvWUGHnckHyPf7vEiiNJKPKFh5oWQ4z6Q42Mf7RgKbGBPBszV3Tvd4DzjLscevKfjeR2zdeRUk1Z22XkZqrwv",
  "key29": "5UjdvbcUnhvP5suWR89zuvRZ2dgWLeLskMWwc5cL3PPp19NyUeeP1wzvyeNYW4QRoVcWSLaoKkQcsyHQkxYRZhyy",
  "key30": "5qMfdZSvx32XmMfbhWXit87N2wmWqiviYiQz1j1jWaz1LzbyNkN6uNdMt63PMQBYjM8FhYHLTeaCYWPdJgXJ31u7",
  "key31": "2WSVMbh21fh75oJ3kauXKTU6whrSBqd6kwCcXaZmxTLvdzqqqMR9zHuUdjqR9QRAKnrV8MP3Y62AW89rYHvadceN",
  "key32": "4xRsY9ZCjLXNw95M7ssVcM7frmh4zYqoF6v1zMVFNwDSWy8kVFiPjupRnxXyieQzuqLuEFjuzA6rRot9gTChLc1z",
  "key33": "fQQsEKS6A6eLZ7YxVDoZUwqfrqfJ5sYkqYTxk6hBGy1sqgGiMRERSahoawXPMyRAk9hX9AigQsj3Qb8V1PHRS5Z",
  "key34": "24QS3d38C3jQXB7sd8uGghm4mGVSj8xEgpQm6ZJ6CkBYthajkmwPRhdqedMn9fozWXtCZMwKYjmLCiccawgaKoZg",
  "key35": "3QMPxXTXFRp3pf3RmCXAubMuTeMdxatqeG95dJsNDnKMmBpZ7f9tqjirpWhg7kLZBskmnSFb4qoUmMFgFRK7jwNn",
  "key36": "3pD423sX2onp9e5W4333Le598rDdwbTod2ybp6dNBEAJsrpj6L9P2FiiNouGPmxZLhFQVwtjV3dkmoRDz9ZjGMFR",
  "key37": "3iGe5dAwv5UJZ5Ct9obb4Zngy97Zguq4UnHN8sCytveJFJY6ZyCJUANMQ9fo3z3Kf1b7DFocM4cQCtTgG8FmHhz4",
  "key38": "5DxFUbVK4GTM212rCAzA5Sqrgy3Q6PNDyUZbrFndu9hLipPpZzq7niabNTsRPTiQ9kRChGFutAKa6tmRTNYfJAEb",
  "key39": "5BB1qV464ruJBSGHtgB7PdGeZjVfjCvZf6mAjreTLNwM1N8yDNUNcxiL7FAGkutSuBTkx9Dvqpszt8C3AnacpWaf",
  "key40": "63uMdqkEudjkUPyDwJMbAE3KmgZ3PskbqzM5HEMGPBzMaxjw4SpXbxh1KieKbsSMSVJTxFWji32WZWhJhDpD7zcz",
  "key41": "2tNLDFuk6Pnt6airYdufPEsh9FEfb4hedqFkJx6SnXcSGkUocj4SbQ3UbfKdRGGoKNMjnJUM6jgknBkJG28RtK3w",
  "key42": "4Th2xXaxaHWW6bdCZ3Sc1AoPqwjwRCnp8M5sLg2NRXrnqfvUXf2VyY5W1mUug5WLqv1nwVnb9g1TGw7Vg3VcmxR7",
  "key43": "3RVpoZo7jsrxZYJw4EKZ4bSAm9X6o2WypF3bstnsEvnEBCsf227rV54yYkvGdfpvmBoDsPVbJGqPeQJVoAp28oZ5",
  "key44": "54LwTEzvbi8MV8UptZZL6VaYg18JRTTJTJXUo3WqWCbXWNNfUmYpKKJ8348THY37zQKWTfQYVCb5VNKzPuhyAgRT",
  "key45": "44x8BSoiYvkN5tAKk9su3mk5dcfhtAZ6hY1Du8VtsRDXLyzv8oDVTPLsdzNCfnTnJk2qNkvMz6hE79t4aoUeUcQB"
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
