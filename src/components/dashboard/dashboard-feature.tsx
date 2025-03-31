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
    "23swbNjJ8ZG1Jpt5wfdKcpMuy4Mhrh9AH4BNy21NY5w71k5owy44UKKa3ywS3kQF4zhL1LVmzhaFd7vMdbPbaAKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmJTx1G5tnpM6dSUEvXHznrV4oJJQZA6heUnGK6G3F5bDvv3f9NkJmQwytHdWUucJmmz4ZDG743yfZiduHiHGv8",
  "key1": "5ZfaHQajsF9vXrtY6KyF1JczArFRiry8qsb9mNeJ3YpP3XHd3kSvsjGATcdyFGMrGHRZbMq9XyWiWQJVYJVHpQHa",
  "key2": "57yV9yr4JmrhEPpaYMZrSGEWXmTBe8nj4cUcNLjRK1Rcy9L752DpPo3kJBYCYgbySCxo3VLn34SCmx26yT5oKQXu",
  "key3": "4WR7KSwYV3tRZ6bgBctsGvKjTi28gXfPDSKzakr3bPSm3qeSf6nBysrhWbzgRnXMeo8HbNjrvaA5iormcR9Uc959",
  "key4": "37f63Hr1utbYw51AmuVmqVkQrAjFAQg4rHju2JinN8Gu9qdpwJY5nJgo87iYu7GrWsb9bMV4GsQsuVD5UFdmmpKC",
  "key5": "57HyYbs9kTckuSVizo7K8QPLjkUwdabgeoaCvncxVv4VezNzrVibtugo1t1VES2BLteiySEXVWcS3tHNR5HkerJ7",
  "key6": "5kABEJCtsxFgLLCToDDETRNL1Z1cZLxGwAhtXkDgxGHJcVMA3E3gQQdgSqNe3MWsnzHAUTaDsdJsykboNQvCFJm3",
  "key7": "445fBRkc7og4QWBXR3JEgrBiTCg8L939sV2W49mqVqk16ZzfnCw27kZkJSJPBGDkibQAoM6H121hVdPUt22SCuoU",
  "key8": "3SfVoDy2ormyTX3xdki43y5kNaWXSdFy8NTKoHojtEZs9uViHeghNA1mKcKBoTFyttfaUo52tAcCN1i6Z1LGPdDh",
  "key9": "4PS9yaGLHJ9PJMe3ruNazSQLKa56snHLZ7pM6BoKLPPGdsKEuuwChy2fLdQyhL885FPHLM5BDWGRFzRH6fKU5t7S",
  "key10": "fKaxWKSzX2D3ECEkhxrJXpAu5MkskZEkFUXRaZ8FqL7zycktxREWsBNtb4cpWzov73hAL6cb6yGBNSBicgNLnDf",
  "key11": "2Ze4GeVKcx22kdeCQq5MgbMjEBZfnx42U9zZrcr98rsfc5XNUfbTDdT6Jgp26LUF4XtujQ7HHrNPoSYi4eyDhd2K",
  "key12": "TAs4XW6T5BrfjE97psRtqdva4639o9LGTJsHtyCTQSZBG9pk3zfEkw3fRvh44AUdwj3LqKnhv7fLtDYhmSJQxTA",
  "key13": "2c99CR89t3TSF1pfmVvRfYLLQFr8EkdeFsgsJSHzu487LbPiJcUYy4QYpbaf4qc8ZvD75vrB8uDcdBmpLKfLHiRJ",
  "key14": "3fNTXCabKLjuQCrNHC51gpRsisYmykLas8bjDkwUWwyenxV2QKv85iEhi55qd54n8BqTYF2thFBKBijHcG7CTNT",
  "key15": "4FdXd3YZVChEe4o8ajxTipvMKwy3wtYxcxZ3uQYdBZdJ76nMuSeFZTrs5F2SqBx2cLttxchHieYykBCmxm5FD194",
  "key16": "2gRnDJe4tq8EmnML9P1cQm5nErX8ijSrJjSUrcLQ82hr7kDoqEvoqYSuXXDgo4dxk25pR83L7tKHrV1gS3SmNGhQ",
  "key17": "4FxJtT1hnP3o2dTKYbsFHxNFztN96KCKKFrcpQUvYxUFQbAq4w5nubaZEYdjVeGTDttxRLvmEBpGM5FhZTAz7poG",
  "key18": "334JZTajEWMyNQiQFYeCpdM4yRF9QK4xTSqFP9tyHkkUrx6pF7uY8VeK8pYosFpdzknX5cMYCW5b5QdX37Tt9QL9",
  "key19": "3G34WxK3m3bcZ1gQHvi8YBZUFPcsCmsbJubxfdzSfyf9guKiB34qYnYNWbjGmfKoDHyXUyfiD22EjTtGwMkrdc9s",
  "key20": "8hym9xuJUme9nD53WEb56USVuRrbE8CdrpjMyKp7cyW2jab9xXVCkukUWXzdnHhaTxi9iPMknCwx7Hf2yCKmxpk",
  "key21": "65uiebvx3RFpRkoymmubfTyFd9RVGKaJmZP2Zi7i1pEqFRe4ivrasNbhKUSSNEM6y46c2o9UU17gLaqhMXHHiXT",
  "key22": "ehvZKgGKJT6D3RnwV5iuWJHXHpG45gPaxcGofWTsK68dJLYPmoQe46S1bKh9isWDcUMNMrvAXh9bXx1y1o4QCJJ",
  "key23": "5NQZ5FGWaQwP5MASjT71kz6Gv7LtNZiZZ9Syh34cdNixbi2AwcWsWtJ6QvE1f9DgKRZvKhQBZqJrLn8CCaBPzBvi",
  "key24": "2mmF8YpMRwiKMdVSTmqvo2K9j7EDbqY2W8tKsxMV92Kc6g93bUPY4H3dJ1YcYsdrSZt8kfDn63AaYQDUbCCdHzAF",
  "key25": "3pC5rwtjP8fRYw2NAYUHqXrNiC6A2xm4UbSaLy5YsBz5GmTSoL3xzrTc7na9Qr8ep5e4g1pMXxQmbavhPWAThCU"
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
