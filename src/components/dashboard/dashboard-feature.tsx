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
    "2cvbVzTmpBbUSB2NVWEi52BjCgPfQqNy2dC3eMAEb5Qv6KwTezrbNEXJxFRPzjFC55k2eburu1gwqvcJMXXCFkMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZiDdg3fnyVUREESVa4SiwA1jw2MavLmA7iPxCeRxtZJgEzeMoBY8vqe7DvNm5m49b5rGE9h9MgzRDJ7AoNP17hu",
  "key1": "47EczkqVzxbRuB3Uv4uzt5kNeYiD75var9ZH2ZcFTxtj2Pi3cpf9iKCCyvt4H7pGzuRRRCARRLVziocKDjyzCr7z",
  "key2": "U7dPj8jAmbr1zbwrVydZB3m9K6pBFHDNQh22SYeLodBq44e4gkgbUUiBTH15HxymGgZPQNrgRfgD2a2WFhNKycV",
  "key3": "63Wm9kwqQG1Sa2ZhzvGNTxs7e3XcLt5CDv3ozZveCbRHj9SxV4Dbh1gC2U9wnysVQypHmGvzqW6MSSJxNX4RDa6",
  "key4": "5UMGj7yHiMzRjLUC7LiURff4sFdjJ1kvj6VxNzoqAqNfNs4SzrW3kkCpDiXYPkr1sdnB1KfCR2zk6QWU8bZAmGmk",
  "key5": "5xHot5k777aWRX3hXhietJZNxCcig1Nv9HkAs61oRqAg4jqbsBkXRBC1T4EhHcNLXpEvKLzC5AKgDUkk3a17r1pP",
  "key6": "5orayTMVZSSg8onVkxvHBAspP5y5sf2hmxdV95hVTPhjVk1DZFGaQCAaA9qwq9kZer3DDKf5qB4Mgm2NFk6FaVrC",
  "key7": "4CfvoiyYc8ryT9izrMp5Ecrkmtoo1QnyJ9sH87V4XUKKLjxaWPx1RhE4XwgRe15S8qaznvCdp9NFYwZ14zNgLk37",
  "key8": "4guCmMVi8ptfe5kwWNgo5ebcRXrmT1DqTT7BmnAzY53kWFA6UR42Uhfax6YQE6TiSUSjR8y4sCTgygtG1E31R2LA",
  "key9": "EeBfXc9HvDYNGKBKEsvDfgE3xjjVftvU6iJj9AjRnDH4N6zVK3UfQQujTqUTqMtbExtonxULxB5Z9PVi4xm2Cw1",
  "key10": "5P29q5Nf9FVHMMEtwQMfAvsAPYKecyB3QAQRKRFHxo7Sg3jLRcBnoBEZeCPh92gtnyNEXMhysnZZU9VwR7JkfCDF",
  "key11": "28mp5WE7RsPqhph1q5YyRW8JXmWtw32HBQ96odBr7G4ZDYuBWsBM4bgEzGnE3xdgHZgCGcBv6wSkictxMPuQoqdC",
  "key12": "3eKXyw3uRK5TMwWs8MM7JFyNWoVh1vCBYif9kvATrJpMSxGarhD2gMsw3PJPH23c2tz8BvZKNQmr4n7qA5svkm4H",
  "key13": "5j7tr3geVq2aqjb33GDNfnEFqsojiUatNFTds9XBqYXh5ReYEpMY9dephwGom4fW7vA1Ud3ootpr4nHWQZ2GhWdS",
  "key14": "2Y2mDGSr8KW3M54VRoKKCoRxxvb172pgt23T3AfELdKp8RSGQ8tGPa7bDy5fkZiajeUVDzGjR9UFuDSfmfmXiojh",
  "key15": "31EPd6drk37VaR5taQQQJnL8GBNwALEaL6g2VRWMKiL6SRyvqNV6cZTTzfooFSodmmNnJjiYt7iFYgYH1L8TMFov",
  "key16": "4QzdTdDrEwtxpZoGHFkBGYtsUKGEqqrHanhyQvdT2bNr3nu25iuqUP5h5xmfqnHHKG6ngyKVieWSTd7Y3jpH9nSN",
  "key17": "KdiRB4WgAfLGsrCevHUi7CdHb7v6zFTU1DrZfy1igUYNv7XbuATjqErL6JPhsZYE3WEZh9rUtTgK5EEgwg2VejK",
  "key18": "2frVaNTcN17JGGLPYqtRwqTiPs3fG7GRfeE8FbByJndaK5A2gwxqpdFbrVFMT4AiBPnc7URkxzULjvrQZbBPNNR9",
  "key19": "2QHXp6jfhKJzcy8GnzeAbeegZMvgpTQ1BhmEP5Rn2i1kbV2q1MdEpzJmGMrSaTC2qz7CdUbWzNsA7kLJpiKFKY61",
  "key20": "5BwcgDMS1i7kpeCEABkDVMmFN75PiahJjKiQR7tX5NonYs3uGqXGXQ7zXTXndy2BSzLwsykyJG5SBUfmvZPdkp5k",
  "key21": "iQKAr2kEtgFiW5SuYNe5jM1SF4dGzZWsgfB13si1pcXrk6SUJaPGeKVDWW5oFs3PV9jUJEu74QJjfVoMMEUrKCx",
  "key22": "33s1fxgPJPgWyVPkaZYMqqCc8bxjgxXYLVoWHsCkMRDQMe3kHBHbiNxHMhwNJYS5Pi37TzQXcNhj7RqmGv95T1FR",
  "key23": "2LakdqQR5o3bJ3zJbvosreQYzkrmmofGaUR1WrfrzqDdrxKeZtcjC4GYtqfP8Pykbwu9A8z4aXDS1WgiBfpJcpvE",
  "key24": "yYC2cz4veoSZBWGn7RVMXeW54fVnbuao5U7ZUvWokXh17cwruRKUnsfwSdWtsVpZAhruj4X4o5ZmneykEcfYk8b",
  "key25": "5shq4uTukG6VjP2BKfXFpMx42mSEpRqxtAF95svT5juji7pPNcEL7P9WasLQvVDni24a1UhFP3p2zEgEH2r2sjSe",
  "key26": "5nAokR59DyD3VA3KtNkrQHYXBnbDuFNe9LmZ5yUCiZKfZ5LBCiVdB4kcV4BuHkwK3DD2B6yD4QGLzjhRUTa1S4iz",
  "key27": "5LcSX5MNEyMM356aSvTFbycAk8L1b5zRzmxaDQw92KyuWeQTBkFxtwZ5ihHhYP1i9QePUhCiYuUEpMZM6WYzLiW3",
  "key28": "4VBegB9V4EwT31uhnFbZHr3stQfcQPgU3bU1FdGVLE8ziZ87ycznYBQn6xAJDeDSHwJuzALnmfjZaGWKESKPQeNd",
  "key29": "5sEZDtt33vNRcd7deDkWv8EAQuxAeZDB3RSjNtkq4MiiEV6A57N1vVMeEkH4H2ciVhWeBXib7EBSU7seX4TpJJJo",
  "key30": "3UssBpbHAZrDmGgnbY3TY2LCzHs3V71TfFuRpviV1GLG55M51KyofM6zcqs5RsYRqhfKgR8JWTcV3pA7dFx8yWrk",
  "key31": "2EvvaV2jWQMgmk4oSGkB7HskNyZaFxL3PTiKNXVogS431VvJY399qoGkSUXJi6GCZz8GvDWcB4wsppVD1ACB415T",
  "key32": "4fbkMah2ExrzavSSjp1EQyb8Dje9ZNt5xkVgygH5nPhM9yUTCZh6MWmyNt3Tx4tMizgYh4zuSJDSc1aKjcAx6YGw",
  "key33": "2WLQMB6fTAoiJZXFDSgzYMC5BfLQqRUHbMZsefvu6AZECA7PVZo2ubVonyySzSHwHkVZZhLTaCEaaztk4w4LD2D3",
  "key34": "oycEWrrSPqwENc8MMJ7yaFYwZuVovpJqQjfSnsvMLP5tLvtkZBc6Pr352fWN8XrfLWW8jDUUBN9GPyu7gERYirD",
  "key35": "69GLA8E6FxySNH59TnkpkWt3vWj8bqBciL39J9BaUaa9Jx9urkQbVHuQ2eX2nYg49huLjQKGM6cghCdvtqn4A32",
  "key36": "5RjxDtyPzposfVVxGBtU5zf4unvCB9itsj4hVz1TLc5HSDNWW48dd9n4DGEXr89wjeaxjHwNPrjFguNXq1aEGaM1",
  "key37": "1dezpbn7UyNJ3AsmoCaMBgDoXr1MCmvWva8eFMfcMToyJ4Njq4YSf4TnsqW96qxMhg5eMMVdKy1BvdKbsxbKCLQ",
  "key38": "YYoFB6Kchp37jkWpzF93rYVdg1nwCeW9N7D9FAd8D4FEZPiEyskmh96GC5bFKbBq5mTJDhjnfNNJF33gTgZAZNE",
  "key39": "5rx4BWvWhEcHLgBvoLzncXx8fHVu9xW22uB9dJZHzdfoXgmm3EAogwET3A5BeR8vLQxgNuDgjcQvPENyccYBUX1W",
  "key40": "p7B7vNWMR6WrvLN3v9MYq1VHeukZoQMRRCxfX96SF5b96MvMBzXU4azE8jLfB9ngDFNNDhsGWqxjgF28aLuhCzy",
  "key41": "2QKA5cNE9VyKMLkfv9ovXHnTHtyaxrrvc5hH3C2GQCVQZoesaF9g6nkEkTmTNY23cRe6wz84FH7PaPbsP4joSWVY",
  "key42": "rTXrsprbv1VGhEWKyafTFEG7BDdsT11d9DXiwXRtaGPcAFqiSYuJ6cgZR48kaXmM85o2LNC9pkwoogQ2hFs3wSP",
  "key43": "2ygUYnosYnyyE6zBV6hydjPtAfsPa8EBFaUJaVZ2dQLW1uJkvYLNMEi8h5KSHeWCpFY6ckutMycycdxkmg5XyXAZ",
  "key44": "2rJ9RKv2zdndR7fwWyvB27BRUtJdUcbLYhmx3ZgAHJwqS5FVtbJcF7aUnTRXeSPvyTDuJ9jHPZfgp3E5az5GXaHG",
  "key45": "29LbgSvhnUzaELhfSTRKY3EFzbyCq8MkoeEpv9jksVuzsWx51u3poZKjpFXKiFkJpPN9mD1cPxfqAAjuqU1AUVPX",
  "key46": "3zUyPgakosbNmiLYsiMchG8Qkf9viQJnHZrWKJcAnBrwdaXrV2YBGpC8enhnYYq1CU8mfekWcMh6oEPu3VNfrFR9",
  "key47": "3NWSY4Qn6Kb3g66zbuRhx8ro8kisQYriVm5DhZ94iNrNCPp4bikPfwvspCQcUxSonvhwG5T9nDauqCozTUPCZ9zj",
  "key48": "2t6oy8PCorffqy9wigZk3VBSFmGZkHJBDKznU34Ai6TaH9XEbTkUCwXc2yLdXaT9oa6GsZyDfatKnxVWquVVEkuX",
  "key49": "4iL346aP5VKobHo7h3cMKTDoFSHLdji3zHVkj7R7hvKio6nirej9WgUJsMZHW1DuA5j5BfFuHrQdNRDWQsWP22BT"
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
