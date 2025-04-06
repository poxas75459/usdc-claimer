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
    "27sngdtGqESQbkQZ2uWVmr92tVZei116W734jxa2LiDtw1BMSMMBUroJhaaDnNt4vQY1AJbQgwaQpcedCjnN2yNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YviziVw6KnDcAGwdr5HcDAZgcncnnQwFsPH44gqr2vdjYawFicQAh3vqRDcT2BDBi95nRgp1X3xuNCrKnGLEGUk",
  "key1": "4DvLhz5AzNv5w14ugqkCfNakYaPG2qGhXevbH5mYD2U8nKR2zK5Juqp8PJjTr4J1SDp78XW8wtLoGnJc4PZg6hnt",
  "key2": "2AYMeJ9Jdm8Y2yFWCNAZLksvwi3jxj5saATSpfoJkW65csX5ntMhqH6zgVcHSffGNQLmpn4uzmBQkYMDQUJRggib",
  "key3": "2VKerjsguZ3yAQFR27HY2zaAraXAyP2hkoNsUXrQps2whTSNUDcXTvPSuXhEKPSi1FQnV6kkSKWd4XyMFsvS9Eui",
  "key4": "22eWCrNiZMtdwyfbpY6yxxrz4AY549taWfGVVDAjQHbApBnYYW8E2TYYEtTU8cKzw47wqz2L41EShvPBdm59WSFw",
  "key5": "59KG2F3dULY2d6iDQvMmLm2PBqcoKrc9yCw9o8NRuxVA2i6DVBctrpgn1AuznxtcZ9zCpJ4vLkHdBaJWJgMbaaAX",
  "key6": "2EGgf9jkqoV7rheHpNXH7Gx3wCv9CVPakSWmG1AtaNcXQozZLYxRbUJFcF6X8TE6isbevyBHXm4jwLAvmX5wQagt",
  "key7": "5VDfr4AEZtqMk4VrUqu14Rks3s6rEuCD9fGpoWyH64kauhURcuba53CP1YfHF8w3GJYSEd8rqSCVJive4YjbKD3M",
  "key8": "4PUMWVUsVX1A5xixiHsKFByrap1YBY1j5kpoHFmNntu4Sdzt4xDMJWrnmobPDVq6JbDxUqd1tKeXdV1Wgrz2c3Fz",
  "key9": "3obDecxJP8uH2Yy6T5ueoHbR4agcafCTgEDM99f1y5RgQ9aSKhQvpsvkh8YBJ1p9eotRFgkrWXo2N9BiayTcoHXU",
  "key10": "3Tce3z4pzP1vP6woHoPq8CbmCKiStNW4QMWGkv7DEGm3DSfzHFNgqy8551VzZGitSZFBdQBvcDJCmSK3tq1jqips",
  "key11": "4JB6AgGdnDb2uKekcf5UT5rUBd92X2Zv1veLxJnoVKA4d65wT2FkNz6hnQuxnSbzuHiuNdz3WuaNZZdbDEn5MreN",
  "key12": "55ANzm7K711U9WVwFxrLSSNRYYBAJBLCJ6aSA2vmr7ibss6Y3BRzfbpRoWqKQPsDrvUZS9VYWKEps6XZ9aUwnBU5",
  "key13": "2WMvH7s7UdRaikawmb1ZWrD8dykuE4yfVGTEMvxoiiV8iybdzR2fbGgLeswwDsn89Qv3mX2xPHfQob69DdZZjWmY",
  "key14": "4J2qLoRhQsXKs3Vyr65mmQuCbseE1cxWyGzxddoWcPShZjDX97mzQE6nAW5BNB27YRBhjYJUZ7hzjcuzhYQH7nLo",
  "key15": "2eqTXEBcSxY5YqcBrbArxYR743YHvbyKuUuDGAg3nX8GeQkXqXCY8JRE3LkX3W2NHLWNSkDh2KF2HDkWr8iPd1Wx",
  "key16": "57qAvsCmCkXyajrMLAXbfYnA3Mr4bN5JgVb9eEeyRxGrTTgDQEZykdViZUvbDkGHNYNjiuS12XSaPoftxPTHSPJk",
  "key17": "2KbCmeDz1MHUmbRn6Zupf7ttSQhqkLg1HDqqUn5t1xu4HaqR66T4vKekfuG8ag4yL3rF2r4TucawZxRZrsQoM27f",
  "key18": "3bxGUVjkrcQCv9CR7G4BBAYoHWpvsssyHftmqLfLeTfZUebizvnAVpAwdEqeMrRP68noF2PPvV6Z9msug1geCxG4",
  "key19": "3GWcjN7UQpAFAeHep6UGXpH16R73gv1bU2dJY6MevTaPyahMQy8DnJajChmZNwnoNHCCTsTG7BirwTEhVkggRvaW",
  "key20": "3i4weVX4ez42jYrG1RRxacrZ9R9RWQ8rPiXGmcvxxZBVumY8YxTzLPGXyBGdZ7KBUZy3ZKapQagWgQsEHZJDNkNk",
  "key21": "KTmGBwybwpPe5x9Cpd8YCV8LcoUQXCPqiftf4MPy1zdDfj8kNyzxHXMR2kHPd3byeFG5Vy55Mt26A5hZx4xhBWv",
  "key22": "2Xj7XHDuSv687X4KqtGkAz794YApvboVQa8GXLi6QZfT3L1RdtMHyVtBffGqmd5Tj1u4Uge9rvvYRMT9LNGgPnjY",
  "key23": "3kHWR1nQfbyiPXL5CLBygyegS2LvHmM2T9DFxtcUpyx7wLrsYXviEFnVEE6P2smJF2xRcHZQFVLCfxRLGEXiYvj3",
  "key24": "5BsFTFe1hK5Fpb7NEgpPsZtFw9zrfrWimzv1njcYEeQtTktb6dCekwz6Y9NHkezn6epDP23FyMRfdZTxMjXZDQXx"
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
