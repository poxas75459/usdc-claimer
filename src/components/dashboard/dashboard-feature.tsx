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
    "2MT2FjZUFiAckbQBR2BC8V9KnwmH5rU77CSh4uFvFvxhd8McXWo3sErqBphSTgK1SZ3GGFnUV5w3hXgmvbc2Mja6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3buRcjrLs84R3yGt8zvM4db3yRAwthS9QaeKyDAmq6scjeZAXB5KcTop9Q57bCj6rThgjLvcqBhMVZojBR6gRJZK",
  "key1": "2my1KNePhwvPUcKgU7bQvysZT4TEQPg4qm6iU8gZGHv33xLbAgPX6wg54PKq3DM3fhKqdAegwyf3HQ1GL5nBb8mp",
  "key2": "2DAAurcQZFZBDwV3tGD2uLy4t1dpkk8wxam4waHEAfg7H5v5qZA3oPtPbvSA4BcJSNyEEFvosYU33L7Kr1X3HFfA",
  "key3": "4erE7Lk4Dh8VKCBsKWv1DAyB874Q2ssbwqexpUDuQGVPmbTZ5QLC9RVeYHT8jsHeHWmXZT3jbnook7dz4gCteHJZ",
  "key4": "3Pmf2ANTJweCmCEmNRvMt77vwbr5CfLCMmguSiFJhi8idPYGp8M5VYLJy89ewpzJe4fNqEz26yqhdk8N4dsUYkMb",
  "key5": "4TqFZGyYwrWCMjwLqaYnvzD9orjiLjQu8qkn7GYAWt9DWdktS3UtiX3VJNagDEJjPTkesWTkYmokgShWCtgVAKqW",
  "key6": "2tCPc5W6wws7f4EU5vC73Do7A3EnEEXdeb4Kt9zPpNSzBVzLXvX2qu1be7FBZYviQNd1yJLM53gmLjbuwPyYQLYD",
  "key7": "3fMuxchs8agL4NCB4Wcu9U8bbhzaRcU71jr32Pc2aT5oi6Mf98vBZDHLkdiK5EHbC1wifZ5PBM3g5pu4QWfPPbna",
  "key8": "3YEvdx7qrv9Rkuv1aHh4QLJ72dxpGW7qBzQnRZ6NN7ur3VyTBuY1LWgQMhHkCNP61rniWu7JGqmQikMyVTXcPzBc",
  "key9": "6AJWCnkmkkXakhdZPvSL3ugfE8B1tGRAGN4ZEDxfnfdtJL5RNWGkCymaR4f71k5pgLHfS8y5mynt4nncGJ9W77T",
  "key10": "3375f7VENKEUmnVyPNnksDJXDhuV8btWC2TVH9eZuzekGTpkRuC8beHJq4qeZHzcqnd6DnevLqWoCDTpA7dXqF7X",
  "key11": "3To57r7nA8VH1LoEWfw4vRFL6aMwhegC6eRTbbFmpTTgmAX13CT2jcVYWqdGWS555NV9SKHqakAJQUkxFJwKsSr",
  "key12": "5T9sWAVmUMgwjaYHCgLiV7vVoENMxrjoHyKn25j5mN6baQ44eHUUUshzXfm8RSimZBCfE3tnuiZAtwzcL39u7kcT",
  "key13": "4FBfh7jTLTeaLjW1gB5pHB5sj4AyK6G4UeZgBhknezvK138B6UnrTmPBe5LvQCuz8FdigZeR1ZVWzW3ycumQRQCK",
  "key14": "3H47ts8KmNyRrwJir2t6UG7DK9TtqVi5y4D9FxUW48Pu6P2T9zUaU1nXsYmUMrZpSAumSnWAWrb8zg9jLra7C6AX",
  "key15": "129CYHyuGy83WmjN897jwh89oGNWghBcyRStJofS3Zoqmr7KCddMuEvZZZsURQ1N1Y8wRPnLc1UVdLUCKe1gVu4H",
  "key16": "5scy3Y59zeNmaaNk1NXG8d6heFrZSbHJCJ7QNQgcgmfzupoybGXbbsFS2XgGgiCYTcHeHEnzhrF2hTPx4VHmC6W1",
  "key17": "3V8PwXpuUysBxUgv2DwQ1J6Ajq54QduBZHcU2tM5QXhvgaHtDsCbJYmrjnxKCMxcHBSwj2BmUtBTsc3sd3j3jv3f",
  "key18": "5afZVRKYjFr19doZTEwj6DnbAesjMAmb4G1qB6AyU1H3m43asLGirjMDMsrZbt8R373PNPzjpqyb3DziUMQqSh9L",
  "key19": "2gshcCQrAuFobnhxuRbU4qDkygFZjhMAU927TEDNthFzB9CcgzVrVFcAKT9A9CRfa5xESGT1Y2FJmKWCgx2dupww",
  "key20": "676XQEzRYx6VuFGbSVokoemz7YerGxc8RNP2SHywTedKogZABYgJEsW1kXuf137tNbpsm7q8YmqzyJtyLcLnYs8u",
  "key21": "23bvnfKYF1DKNbff8PrsvXGAm8TkBLhHjeEQXGFrhUFWK3L1kXzXqrBHXAgiMMpT3tQxwfX1c4iSnMNk9ETfzyLG",
  "key22": "5M3WU4toA1Gzg6YgRxLyeCU8Yg7RLfb1o983dBdcjdsUxYDq1KcjEF7acbLSteELFuMoVPXvretxdXMK9uSRmaHL",
  "key23": "yqnHwE5cJhc33XeKJpvAXYfD93DQzX28uw8RbmFXTiGnF9pTxJj6qsGvZtVnLRtCD6E4EnixSv9u2f6tRv7UT2X",
  "key24": "3L4UHNaVs4pAJLN6ETvqecro6iwfr4psXUxcAFStT4cFALfWAvGn47m83mXS8kiGoeBfsrYEUUMCbr5mZ46Uj5pa",
  "key25": "V5mCyTZSnZNV7edQH7WU1xK5r8idTD2DXGyykYobc1BWwnGJxzB6VYfnD3PfPwebXn2Y5qzXotp3acqsEDtCYSX",
  "key26": "5URmHgQwWiBNdyUgRcRfZAPkLbqb99cLCZAKzG277ps47MS2EjwdKDimjGYi68KFCuxdcN22rwbJ6cHvn5Wi6Zg5",
  "key27": "3KJiHVExTgt4dPCGmv5miDehHXdiwA1xwgYGPDt3pZ36hSWBpvoAARQsRUMdxxMAg3QqWkR8kkyQfBDnReFLRfe7",
  "key28": "3d6jpoCztgbvrTWtuh9ctpKKRzLRUzdQd2heguErbGTWfRnLWecgNSJtjw5576WkvbmTx8kGmMubkaixeBxcQy54"
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
