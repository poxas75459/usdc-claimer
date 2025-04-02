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
    "4Py2avth3eUtnYKW2LqSeXCHGYg1mW52pyJ5CieW2nerwh91BELX4BeVEhihTYDvQGRBLBHWi4E2Fh4H6bu7Qxky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21QjdpsGPiQ3Tdj73ie4nTcDHpkYW7wTQhwty62GW1xhS2dRWyrUwjFstL9ADd8MXqa49hkaiWHFASB4vcDmQ52A",
  "key1": "Q7DCFHvEL2fUSBV2sqY9SD6WRUDR8ScWBQfeCu8sW2Lj9MmtDcK4t4oCrYGfwLJX9xXNXVWMh5oVUHPZjbCzKsk",
  "key2": "5hbMnhT17BFLCpMcvGieete5SuaVvpv2btntSmoxcpmdL1UJPwvZZecLbbvLydoLrXbjdVoRHxxXLSYLEHgrFvfu",
  "key3": "4xPpDVHizMpQVaCyfHstxjwiTd9hPyf8T7kxfze7FppSpmcZXrpCaFkuMxEwdCPTWRVL4HGNrJFLLwcyHn7rrUXp",
  "key4": "5e3LCMiGZQDynfmSm9SETYRU4TuUt5pej5s66fyPLCs3bGR9aawzGtV4L1t9jYCBnjgdqTiQ2QM84WWgXvNXU55F",
  "key5": "Q2DNYETX27uPZrp4VktabpkBQQV1FPWDyZ8nRHpVTRSDJTBjixitMN62UgPxstqtbXppvGV72XPAnmz7FYMYbeC",
  "key6": "2JRdZaPUGRYUvpJsCuRGgvkuXAtJaF357WUKPHUrePsqeTTEtebHDhFGe4jvDR2zBQryau5Ss82yBusHtduEpYMt",
  "key7": "rwPReehG6yRjyxE8fmSoJhWvbRKs88Jsv3VErkdEpaKGCY1zN1phd6TbYBV3BaeGF4oBYaUKgUZT5GwFiZnQzs3",
  "key8": "5693gxrsT1fmNvHemxYM1GWKwwcgzrA5eTTd5WT8xtercPty19tL5ymjTKBNypHN7R4VnocwkrQBE9aHRRUEJKb6",
  "key9": "59RGU6TpFM498ERQAwzSAZcFgPgbiUyVZrZsgwPfLjLPUpVRCthWiDjrXfNDWDZzPfMuQJmS8hfrqLbtPZedhvv1",
  "key10": "pkpNjqEugBRBpDTT6cPEDQmaRMFPdyyoSxWADjrRvMu6VpJmLGrU8ZaV1g98H7tvQHX3xiGN6ovnHNTj3P2hRuX",
  "key11": "2hYy7yvvCKj6FKWwKcabLXfRDmqbcarsSSYcnWrCvRyfU7iVDXmMGk11gU3myd78k3CJUZbTuLzxwnqAPBSFsYL5",
  "key12": "51XRbsEpodPcVTNQvFxRwEgioAeFRuxMqeWQkMYFnD7FUwo3djFrbDrb1cTfibZkdwAuevqBCa1zUiUarNmyTb2F",
  "key13": "4XdgNcXza83XrFtcAh38amDxxx4Eu2KwuKGL11DDZCZNne6nv2QDJhrREoNQPeCqNBekazAuPmMkDDk21Uv7DzR2",
  "key14": "VWU9DmkjYjzU9sRAGuD8ogPunUdYLSF5guToTrfjzydsM32cb1NXGUxgJwcPWsBitKGD4Lwt1B7XdbqbEuYTyXL",
  "key15": "3BeGXeR5xnVogaUcFNECWdYgq9dKDbeoM1Bq7gbszGw5iyKEWp8HfeKHYSCiQSwrYcEcrWXpL4HMUwujD7oPH6yb",
  "key16": "JSjG7mV3y6ugcpKb2ky3TDLNgTTvzmha3pJ6fxzv3prvCM9WGvhiMRKiP3GePhSeno6S1NqfcqQFxxKPteHoDSa",
  "key17": "4xcJtFTv3Wso6VwxqdjsAouGdgqGcDiqj64e2qMQ4vpecNv61Q2SvJiJRfd9oQPvGcaAf1qTqckTvQM4My4P6WKw",
  "key18": "3huSE4hfUUhXj2C74jZhkHjQbUuYKA3U1ivmGmspV5jJLPxudErGHR7sWW5z2xu4CjWUYMeVTnMkoAdi6u7VqTe1",
  "key19": "2vmBNex6u99CKQtVFzfZCzK8F69yWR4iA6eEhhCVxFPN8ZQUAPg2MMJoZgNYbqjzM1UngssGL1y8pNfjrrSvg8cY",
  "key20": "2NfC17Ae6FwFBRhWwh7inXBBoJjkYC6vo63iU7ZmTWw29A6HnME3cpQR7EEmF22nitPMLtgHJ4KMq4XpX2cqC5NW",
  "key21": "4N6uAFEVtdSxdhJthCfbyacaFJLonBw5rikGgovK1ff8bZtFzxTzNzdQJzk1PZ8P2pm7ztdJ8xvwz6Rhtp2j6SZn",
  "key22": "8m8fLR6CHav16j8H2FpMtxfjSa9pv6kYT3fgy6a2VDMU7UsNNQ2G4kosqdju2XZ84cdQzwnSSE3LvAd9xboz8Ks",
  "key23": "58ZMkNikcY9fA9aTKKQxEg2FN3y2cTNW77WscUZ8ukkGxU18PUeMyudSSQWsi6wQdfE7Dk7ScSdXna8FYQZxALEq",
  "key24": "4dDFPHsib3bZbUNHruzcZJWAz9yYYyrkHxTZYEPLVWmqs7mcfAh1ER2sVnZhX3fEMtZrzrXgRY7vTvh2x1EnLYvC",
  "key25": "5VpYVz5TM7mheqDWxaqWt6tf2t1UHBeKbUi8D9GGwumHiQNgYqVw2VCJWD8WGqadq3kQsByb7gMghDgsJu2RL7h1",
  "key26": "5cXnMqmp7PT4gkD93NC2qd8CB4grnaM8RrXjMFKbgzc18qLZ7sn8RGFfYGa4MwaXY9CvDnzyXtcS8DkG6ouD4Lsg",
  "key27": "52eWhRipPyBT3x676aKqLGY1YH2tEsMXj7JGGrLtc9AqDveAapgR9r26kuku4FmCMNFfZytERwzxYj4HXUjGtfJV",
  "key28": "4VSoG4Bqtsx9DK8viJfe5pf7nLSJfXTYM93N6XaMs7UYT7pzEE1FQVqAAUW2KPZWsaxvBuVBUd73vimXpjY2y2q",
  "key29": "2MmRxKdJVAXkEMJ2tunkCHKMKjdqu7mztHZB2H36EuNphx1QgooBSHYQ34aDSz6eLbb8swK5b8rtzzMQgAsvAJ2y",
  "key30": "4sK2sePHXqCaUho5ZQQ6mqVUAnWFMCJWPEGwExk1bnPPgSEjeR7JS3MpcttcBELhCzma1q6gyCuypUgdDJjz3HSP",
  "key31": "2Z2dWUKYsHnVLfejby8QBCWi1cQrZEwVutdS34irj1gnaNmcbyVjpQocrcLSSKQBNy5JavedqBCSycCqpLbmHJQE",
  "key32": "2ATiL93DohQCY8p2Tt6JejgWZtrNX3qqQgbSPiSFPgzDtvwfWbVCgfyCjtuYYCJPxSPjvKLPMkEQwY4ty6vQ6R87",
  "key33": "49UTTLEUAFj4dXiU6fGUFso4NPkQXY2YFzkPdsoPT4wEimsRaET5ZzvqgaW2H1CGKtJvmyv8E318xkBg2EiohH6a",
  "key34": "5jvALJsoa7XoGKQf6RVYiizGmtokdiBsmE1TwcGQjAUhnjV1f5cKBgNGiy17ZAcREqyZNPCNV6d8UvhAoc7vA3LS",
  "key35": "3iE3gEp63GjmokJNa1YcTLdyLrVdfp5foJSvtruHukm7co1ey6sMiqd3skNS3HSVJis1PCGsfE4yPPk7jLAYqYQv",
  "key36": "y4VnuH9y9wi8AxfYE5srTE6Wu9CTxyPGcxqXNYBcwyQsMEa3jZ86Lfnu2DUc2dRArWg48t598YyUujjyUoMVXkh",
  "key37": "5LLet6byyKHU3z613ixW26CkyUMH5NEnQ6N9rnWabU4QwEce7natfonXCpRZYusx4qMwY2DE7rBNUTsUwoPFYqUG",
  "key38": "4VujDhQq14hnh34iGs9r89rMEU2NPKxafjE8h5fE4hdDBWDJdDP4DzAJjC8BjLh1x9cmV1qA91WvcJcKJtd6eqBp",
  "key39": "121yEUDRcKvF59C7esgCMSrzD7ba2EC8jRSfmvhJKqqb94rt7ENNQiA2Ax3jiXJhWbYAdp7fjshTPD4Z492rVfRz",
  "key40": "3PKLZyFUbeQRmpz9Gj4NJ9UZSoh1GjBdWeYb9JCF6WszpS1eHzDnKJKGGUW6MRcVVwGcbeFp3x6YeVm6Axtou7Hp",
  "key41": "tcc3e6aHrM2LfLJEAadYHJuRRP53Uk9cvEE1cgsAMXyS1RgACEYaa9jrVeih6kNg5dZPzaG96dVrpcqqA8xMWoK",
  "key42": "X4sJqz4G76e4wmPPARUXR6dfQqiUTuVD4bwz1f33JkjNdMMbcPiJWGTYgJXuf99UZiZ5c8aHPQZa4ydhXu4Wis9",
  "key43": "5Ce51TQLiLWP8CaAtJsG5FVq8J2w3vUEJ3peGYCEAwpra7ZVeiGfsdFbWviuxCqr5CwvXh8iZu98b5dNJzbBcuGa",
  "key44": "25dq4bXmL2EU1XPe2rvuvoNKkGaUro2xfYSUvWqkS82EpNGjdTvtLLYt4LAYr9SbDo8dNJRKjS7dTembaXcvTRuT"
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
