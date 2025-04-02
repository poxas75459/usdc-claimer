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
    "66efhsP7d3MUCgLziPb4z1dTg1CBRHCD2SwNud8FDJvfgER6wWJc6p53jGCgHPLg61dEeJEWzh8S58dkyzxxZgs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9uthvfiBtqwkmftKPCbBtztu4TR6238aoVbgGh9UygUw3a8impc7tjvEC9Ag8FKoA3jZw9SmmKPCnAaMMUEUfQ",
  "key1": "4gNf2gYS88Gtgs5TPSxbEUwNs6PySrKvpaPcLe6frhdLcivLaBRcjSLVq5QVdBUrPqnexfXiCKitB8QvniB9nrie",
  "key2": "3YpQVvLKNHQ5NkncCJ4Yox5c39os2x2G77NiKJ7cPL8hzqxozukjo2SqCvGJmVjMXisKQKcXCAwMbWT3RKyPM8c9",
  "key3": "3Cp1jA6EjxHLPfBbfqGzHowiHYfXoYVvRKG6CSUFqauk4tiBnK5bQyfMUDvU21ThNHEWSXTHMuA2eopfC6XdsKNG",
  "key4": "56t2aNuZYggbnG6RKj1AGZeCGYWW1m4WotYRosBcrxE45Yjr1vJn2MpwLavEhFqFXuDv7KhKamne3u6bkcVAZyzH",
  "key5": "3xd8r1ztJCiEhgCJugfQH4Pfvd88WyE9bJGtSk3rvxASD5zc9XCuvR6XqFUZ2z4oWb5yS5vpzKu8NCfDAdmDx7L6",
  "key6": "59j1YbtaYUFXdGAcK3o4Rq6GDHecXZH4WeaJLm8GKTxbWTk3Y16wWjXHrNKRHLVhy9BE5ozsCETvoe1AVG4UhziM",
  "key7": "5dyYwm1enAre87BZCQ6qJL5RT2dW8ZFfT5bXsDT3cCWaVM2EyDsLPMfomzZvqyPbkHSQmeXnwz8PbHk1LGivUbP7",
  "key8": "j9wNCGCw2f1h919fMGfM1WrLomYordptbMTJoqkZpaDbEWuUWJcZiVvQL5KxtYvcwx8pThJSCgpeCJz7H72wfHk",
  "key9": "5yWR1vKwEi4kDaGLeZpoyxNQH6ty7EpsYUaocymCUUsVHS6xLLizsSEXemjuFuctLtMYmrZhEPRQ5DaFL9FB1vW1",
  "key10": "kYmWvVP2qZ2HAmkJatBVineyhc6Z4PCJiw8PgnmvsudJvyMWuovUqJeKkzYkEfvKJeZhykiBgXFB2FoTESrnyCe",
  "key11": "GAU84j3nRrtXS9YsZtitLufWTx49za1AAX7Wzp7YSNBBn3PbeVebTcXZxrvMp8r64bRgEmb4nDLbPRuRzRjZtjJ",
  "key12": "x8mdrok3w6MiU5g8S637fMa2z7VZ9FJ3zopDEnDXhTYnUN2EtdrFedJroizvzAyiikSYSEAeXiYxupoqSC3Fnid",
  "key13": "2aAhgvivPH9iQRgTzBfDdER7pEbADqFCajCqPpbx7vpDTPYZ9aqNkuJ6gn18hDVFh5eBWz3uV9BP61vjFjsFvCJT",
  "key14": "267hofJb7DJHdTcgGxUreGuHmvLnsrYMiWki7HykSY2y78mCY5mr3edMXFw53A7PGPa7DXCB3WhMsxAaPnLyt2NA",
  "key15": "2au74eRk3ArQd1oTYyfFmfduu6PMHCeeX3yjYjTapFiP9B68XJGFRCPn33sZHzciFBkBQR6okT5mc8AYz1EDjbVf",
  "key16": "3GJy1sMoxM8qY7PZQBPkWrbJWqfbZNNTxCxoffDEuZdkkQ9psWPGGz8YXADHmwocMkqX9AtfFgVinsQMZ2WuMA9M",
  "key17": "3t7b5s79m7FU4tunpSp9F77cTe8bqNUMa3TssfQ6nPpwvGXLcchAyB46rddw7rejipmYUJaMWxTLe1FXEAT3Ryfs",
  "key18": "2fbJeETyphThVYvTEU9GBoyG6KfUBQA2fWhD3oUrHpcxHKYUKTeshWSyZHbx6ZMDRsh4m4gvNKvJSFVAmptQBtYf",
  "key19": "PcqL2kBYh598HQZD6PkMHGfiibZcuQeWPmrb4wM9VUj6GX4Gb4r15S187ANijFSHCDWfxB5h8P97oT1UUbdEepY",
  "key20": "4wF2jtiqNjAVAnq4LChytwq98qRoox8wFSkfWXmaH45KYBhNoNYvarhpH8BtYdcotySngadUQ2EKz4iqQMaijFWa",
  "key21": "2DCcLUVkBfBWMknYnUP1THZ59cxbzAKcoeTFHSDDJMdkfBzzzToSDFNiGGm5fro9TLNCJWCfkLLsX5NYevu7AnWs",
  "key22": "3RG2zmrcAT5fZvW3bXYZXhg3tBQVRUJ2Dx9nUCp532uRoBJd6gScpYtvYQPDBuNC11nmU63Ct86VJ9THEctbq9hU",
  "key23": "56HRYDfaDVirUwTLA1odRmQ4UFDnvEb9bk1TJvnv6WGGfM3Lg2Y1vRBgcyaeSSm9r4tfrCumrowELYPBWQhuQ2NU",
  "key24": "4CrhtfKn5QQABv1nHi7oSUjbu2jKGJseGWGxQVSijSPpx7AHp3ZEjN3znZLdC3ws3eMdQtJLt75v6XAL93rCo6Jm",
  "key25": "5ZZUR47wdnbUbTHAy9m8Ytu2bVtYAHj33fRSthEEgfUJEpV2UEFgqt7dbvqFdVLRcA5aDXMGCYCVTScSrvsZz5FM",
  "key26": "2cPAfs6zRZTBEZN1t9KSi1F1KgAG75uDaUiWbyUa7tTeb4x9dy2zqFJQhc8DuZ8FAtKc5ne6W2DSNKaA6bDz65mp",
  "key27": "5r3K5LXC8BJhpfMVApUxLsjtQCpWM7RARA1DMtRHjosUcs4jFh7m4HCjnNP9FFqKKWSNFAH6LiV4EcEy9byhWGkX",
  "key28": "Y1RjgFxm3S11PvYx9WXDGjbg4mWdZUxZP27Vm8BwWgPcwmT3tx1HnX8XLRzkp7pF2LL3A7EvBe9jNqPcf3yNycN",
  "key29": "2FP4MQHw8xkL8LbLcrkdUEvZu82RQ5egXhFMqGjQh35ZekaTUF8ad9vZk5uaAC9mqM6HPjpNEV7kjTdhT7MQtCb1",
  "key30": "3Ro47bHMZ7WQjLBJfsaxTjwvYLLoVfAcr28ACAf3gUwGsgUNnY4XuSkiFFNCorgUrwZAJKvyPNWfc36Zu7fLTELh",
  "key31": "2RMdahBxZ4W7k7Qt4fXMMdgevN5ZiHWfnVs2SpT81EzscxmM2dAX7oLd2YqEnBNivpSv1aA5DfritvF1VCmJjh7A",
  "key32": "2kZ9Mi4NMTUuDLiLrvL45NG6Z7ZUPtmy1WUA2acFPYkqQFKut36xUm4W8mkVTYk4uhNxjx3H3qLAFxWBTqiwCKvz",
  "key33": "63hZ6pEyL6gpPjWgG54sMCormingEk6uTu6YRmcpvrwtCjzpXA812e3jsLAYKvLXiNeivuUEaAQ3nRffh33MKR2j",
  "key34": "MzcgyDj7ymHjyjYyQxZt2icckYHLPADTQNCUranYCcGxjsPCgtS8GjqP349wo5ra8mcpFzLj1cX8aN8c9UFMQ2u",
  "key35": "BMn3SgM8u2UJh2LRKTsJigeC1pL379demaNeQmUJeGSd4tP7K6Qxap7u53WNchc5GQ973P4AfXrBm3x5fxMnMnu",
  "key36": "h1u8hJaXkiQirsrwxjqnanEyLd1Fs7MwKNcqoFRrMh6RdB5AZ4j7vX6hEqYgyifosfDXMTtxTFxVHXPgpRkRGro"
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
