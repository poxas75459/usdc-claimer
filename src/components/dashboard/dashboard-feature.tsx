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
    "4YKQDR7XwMjk2DXEiAM2JDFgyHJkQnrgHZbau51yVFGST4SijD7PJ4SATDgfTiDY5u9FHdKUJ5N4gDi69Neo13RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DzRg4VfFQr3X5bjox5bnaWhy2U3CBqNXTJfq1XLTQhMoP21GkA4yUb9syJiPV6hUagMBDh3RFPhfXLSYQC5Bj83",
  "key1": "59FayzWxBass8fgbyWyn4v28PHmAk2Wdyj8RTmKUUaxzeGBTo7PhQ8ieHyXnNb3HVFLoT7mE1m2ruoDYoGSazePo",
  "key2": "3MXjBq6XytUximozv3891wYpt8yUgrcyuYJYVEYE6dntVA2icqG8GmnyGqYsQVJ4Y45JLSQ4ituiT5Peepm555Cc",
  "key3": "5p3h6dFeNR4hHb7mio2dnpB7jzEdQeZoTC3LhfSdGy79bXrqw16TLoQWUunG1FxdST2jRPJ4xxFnrYgQz2JY8Z7J",
  "key4": "3yUzAHbyp2PuPGLWewLz8HZqFbjqDTx1EV2zKvZzheysYbixMQLnZYgBFLCFvrP1barjQ3VUEnJeZvFfHkzKzioh",
  "key5": "3W3uD1UKxryumVbr8W7px9PaFSWMAyS3HhZHPoRzbV6DUjabv5pCfvhkJNQPqiAgtpEuk46tKPuv1AQVmVw69vUJ",
  "key6": "CJPMbPhMK1V5A8biVSsw7vphAwW4zmRaSG58kHip9a9WVK8oRNQJfKA4CrEtquFf8oedQvSUV8AT3zPwB1RPAcy",
  "key7": "2R6FcXeLsQdBi5yJD8ieaUJN68vEjnS2GmVctMHDQrFpCzHs5DPBD949LdVa5UDfpacB1hvdgd1faYPDd87kkATj",
  "key8": "2WX8YYnpT4EeGUd8RwqGEYn32GGvNfjrMMzzL3MAH63HCsfGPB5oL8wpV5N5WeLkShghvkhF2fVVBAHJsxFcQnbo",
  "key9": "2ifoUhP1RFt9nU8gKkXZ5Gt1P2PhbGQvERAqreQ3tXJgfEi2VKhw8PBpsFWKUSm4bdv3h9JfKAqKGiosMxf5QAmc",
  "key10": "5Ke75c4CU5tX28V11tzAvjMSu2n68tyntQe1kTV3QDyVe2TBaf36hrHKoGK3MmnQdzRRg4A4bhcwqCRKiQyAKhij",
  "key11": "8gsBQQM8YaEtVgHtRN4XxcD2DVysCadKWxYeaK6MBeYzt5ZAa4viQKt17k2bvk2eEecgeRD1ccnwRs8xkgu3gMW",
  "key12": "46TSZoEt3RBosTjdycg4cySugPpbyEVobjoFhQ6FthKrQ57P2KoYRPsXpXimUdrC3idRjF2AQvUuvpU3mppsuY1e",
  "key13": "5USTWrahC7231W4xS3YAiUsbrTt6FusjzMMeeHdTLH53afk1wZJ614dEQYUbcXqjnANRwLjfU9dFh8dSWThPQ3y",
  "key14": "ByYgmz4xzcKK3dcyMy2EHW5wjoFfa9uwjXo1ejxiGhc5BDMGhHQP5jKiaV7fLAk3q3c3sTkqVUGZn9iPEwuPHUT",
  "key15": "5nJAtpGkT9qVGN1haNgjb6Ldqs6goiYKjwtCWXuoWxARZESiavv5p5Zyb3jDkUBBdUncutMHZxC9EmMZuNpMq3iA",
  "key16": "TTZsxfCBqag52yNwRTbRnbQ7anndVhC6gNX2SuQQ2Yx7aUV9VPy35VRdpZcYF38m31WKZaAVq4Bwj5yLd4N1AEP",
  "key17": "2f3nF6sRNL74hV71mESAdQfkanV9uhYervs6mi19DAJByqa3qAiWun1GVp49uSxzPgqLZUGeFvAYzYhswKhF3t4s",
  "key18": "2oY1VA4geRCwQA8Ui12hN1FKUUp4juE8zFGuZhpDMW5AYK6bpWKCedqTHsXDEJLydapAgZMKKnfYLfKWUiXwpCE",
  "key19": "3ggRJ78P8J983qXv6mnquQETnsB94bpnQDpp4Ucx9ZgAwzzMNMaSY5TfBjLUwLEngMtKdPwSjdAMUf99jiczJJTb",
  "key20": "Gj7Dq13fNM14L8RUspDbdkqxcxttAVWxckj8ezbdv95mUwrTXrVVsVWHX2s3TkpGFViNbCiT88QoXzGHJhTHHh4",
  "key21": "2AXriWtPiwcxVKBbv1cwQE25gGJayTwZz3uHk32ZJj7q9VGr63hPj5wUry21qu1vjpthE6v9vLxZKovhMDiubJwg",
  "key22": "gBHrFJpDadUhwnFwNx1L8xtU1TyPw1sj3BCjNPyptwGVbRuZJVeFAnTE1EGBdynAix314QY46z61fYWrXpGuT8b",
  "key23": "2EpkTShxnBZaS3JGCActeCVJ2zok9J3uDXWMfqVZfYLMR6pbTfSRsQy6tfcS56awc4PPTSwvQQho54rxKk41tgrQ",
  "key24": "JnH2H6eBnYYUe76WLe8VZpGN4iRPtqMmpAgN8cdgGvzPDE7Zb4D7Xas91CEp6jDdsN8iBRSQ3u7a8MtDo9sh6QJ",
  "key25": "4f7zVRcHfEiND5kDhZwAFmqsmP3fpaHFVWaSERpqNeufHhBew5DrqMAV5B1K4pqN8LPiB8X3BuCiHueMbv3hViAC",
  "key26": "5oVXHhWt74vehvvpCYkYPTF35fKGJUUkmDwySZ19Ytudh94row8K1qkmAMmnDX8ijYZVzpmaj5UDE78q6UVMf5v4",
  "key27": "2HjxTNEsPctP2NzcGGenPb3ZumBpdsGyAWDaC7tFwF9CwgSDjgxoQgX4DofHPs1AQAMBqQdzDe3MKhTdT2fV6ZUR"
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
