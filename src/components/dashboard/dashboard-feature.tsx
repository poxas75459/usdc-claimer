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
    "4VNM1FAo5zn9ttL71cA2pHpvMZxNETjZLjPw882mXxUtywkEDUaoTe6zYMiqnd3CFVzuzPZuJARgnMYd2u9JGgie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MCV9Q4Cf5X8Ys6a7a3pwrp3RqpaW8eMtvGN3YjniWJjGMY9CMcoUYSuuo2vHQZRYbg7THbjGwqJtxoH9FExSHjJ",
  "key1": "5LYoSt7qaqirnYqxaZVvGd7JZb8MuYM6YUdWGd6kaoFfeLwVss6THKDVSG8VrEQ2J5vcSDViUsduDqHBjPT1tphx",
  "key2": "3M88tCRyta4L6CPcaszuDvGvy1Jkphv74aK7abjEhPZR9aJXRuaUn6ZAc8peJ4ZpcTTz5RJyATpNjpqm2j6c4kQT",
  "key3": "3SG3JXeKkPQdmp3PbaQ9YJjEexojCFfPYcsYvuu4ipcCisW5zSUKkeZBN3EAX9mhScdz2FzUMqaotFKV8cHH6Lmc",
  "key4": "5XthRxNDqG1FiyaxyzKguMvY72VuxZe9sof6abR5MKDoTc1qYNnA6WuEEk7VXX1VmqdMn6yrLA3z8sWsCashUzFU",
  "key5": "3HipGdPmCgMLByBFibndLHjgdgLRtd6p2f3towHDDrtkXiHVnEPkQujtDMWY9XdEvKB14HqgwD2dKRiFdeCnpV7g",
  "key6": "5yENFLQdVssHj2LPpRT9zrw9FmZKvDaSNmo6rZiPBeHDb3sFaT3U1AJimKxjZkVsgPC2EFnfi57wESwag3kCUq4L",
  "key7": "2CBJbrWweURbKbtcf5fxNeotxf4QnwpCivjE3AVizon2iFXxJWis3ZZ3T7dte6p7cyF81Zhhv5ipDAeuSdqpm2hC",
  "key8": "64D6oBMXE99HqRw6dUzeMd534ErfRkFrzLTkhPpWjeVpkczGGmL4wiTBnxUr7UDvMKPqrBW7Xd267pxd9Rdi3Qev",
  "key9": "5TtvriwvwbaLt9dLcg5whgcYsEEu28jE7g4nz8atXHY98rpb8cE1zjCLdpdBZfCwdaMBrfVSN8bkqr6GjT8SzadP",
  "key10": "5PGuutv3uNozfohUeU3gMk9q3T8r29dUXXzPSrN23UgEP9onZWtDy2KoXLKP8UUfTmiCKTB9XD5AD1RWTTw1sYUf",
  "key11": "4ksjgR5ZSXSY1EUQHStqwtA1vivCfZJvNHwK6XmsgyHEsH4eFD5N2YZYf1SYBUb62Dz3eB3oJNdvu4jnDvvBgJGp",
  "key12": "54frZygpDgeJPXRUaMCUDZH27V1hWbS2ymaAz9ubwMau9dM8fvHMygWifzcqxWUv9R2Y4b47xM3kaaGCaFeuWTCm",
  "key13": "22jQVAGW1X9ABrbvb1gUm2VgY4FdiaAWi4PCBEMQ7BfKW9Ub2VGSagZSnHLGzeqkshbLygupdB23RJX1gkGDb9Xg",
  "key14": "2SLEFPkKEuYRRJe3qRxetS6WQGQvTkWcnSTnt5hj7odsMWu3WwW1uxAJ6PiLXbeg2XkTLXPrCXM5BndpKG1n86KF",
  "key15": "3f2RXFkN6TShjX95ba6K8yZvi24td8M2M5xjrPSPLPJVVEF42bfjYx53pa584EdHVuoMNHopsu6m2Xfs1h3RLBeV",
  "key16": "3yVUGDudiJPHhMXiRykAdwXA66sahyadHaz4ZTEn7bropGJ1vPPSptHiLevjNeQRno4oSh6ybMCP7AspQ6c7GwwL",
  "key17": "GpVxwwGF3Y2BgWsM3purRBbkdNgus1QqtQwFAKFuXkSKfa7329MMN1hkBXKtndDMbpFpYxrFyGGJSqguQ6vEHN9",
  "key18": "5Bym5aBTXYj4LCMq4jbibFGwEaTpPBdsrroWSJFNnHyW826ZXWAuWqgsY81WLP4F7WDMtGoQXxLkEyGw5iYAo3q3",
  "key19": "BfEg2iRzouap21fUyiRMEiQJjyerW7KYUujGUYXgCBJeWqa4qCvZpNZCdhr5iTUeynL4mT9NFP9iJwubby7XqgY",
  "key20": "36wdohrb32zrMFcSGpSbH673YVGUNf5ozxpzgXWf3fH86okd1yUsrKGdyVJzxu2CC2Y81tP3B47ZqVZuVWX6Ck5e",
  "key21": "W3tFs3Z42ko35QhNwGHsdKfswCq42VRghY11TmnNh2tGfLrYez2DPDcDLr8Jqy8xtpunDLHjkNL9mWydtmk6bJp",
  "key22": "Q6jhB7c7EBspwCLDpXtrexUdBCHc2Mm3p18DXFhzbTek3RHmrrYm4XGG9zX5unWbRanBFEpUff6pihm57uD84qy",
  "key23": "4w6J8WWyDqkwbRqJkQfU9K5eYpqnD9Zt7d9WsMQSbzNgn1dA7US56dJ2rfy73MbrPy88FY6bPNooVNBGK8vKvqC1",
  "key24": "28bVgbdS5BaowuZbuQ73yxKrN3BxcfHWXM35FSEkiVmxm2jcXXZUuxGJfipitWHCREAko3GbM4d5oEN2jhXM71Mn",
  "key25": "2JxBXqWfecYR3JyitoP17adb47xDRn6aGNdp6NQVyB9NnknqSHVx5ET5R4REFMcP7eaDBnSAC9qm3CNE2uQ59dbq",
  "key26": "3WbbCm4DTfJQLJB5M4pUq1QkckCWUQACjVk6adAWWd4Ju2DwmNanApNaBdFuzFbyRDYXitWHXwAr1nYGG991jSxz"
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
