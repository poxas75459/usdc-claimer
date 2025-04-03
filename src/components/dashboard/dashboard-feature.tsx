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
    "aAHBVJxL9QwPWuv9jWkZgFCF9CkJcsi75iHb9XRNTYZTpJ9gr6X8GB2UKZkXLW9KM1N2q6gEDa1L6fJyEM2HhY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vStppqqdXubD5fSEnGzCHbx8xd5cgtDQ4YRSEKntWSoU6sAu9Fj9T8DEf3PGiBPNfjsfaJvHDJWWJPcweJSdZt3",
  "key1": "52vX94biwPCJqoZvJVt8WLpxS3qFgN6HAmkfFZde4sCdgWjb7NtEGRFwzxCNrG9jE6xfXR346dDXJhRnmAghvPGA",
  "key2": "5XjtPkUeuapAcCURpFbXfSodfJ81TJqsyHHPP2A5tZRoJZUZgLHzjfxvRC5aWs8nvZb7foYytkqknG9yPfDJJieR",
  "key3": "5sUWEK57D7QnF4otkHWT6qC1bPe1kDQG7zSR4EYWzL4i4kuJr9jJopEXMqw4fuAVDrdsPp9Tq9iWpHrdtPrTSECf",
  "key4": "2y6b4LMqmShYreLRUyBvq7XGwM4Am4wpUizAgYFdU4xQA2ACQkhjt61HpxpdT144aKQhPiAVJWxwcUtmmBeQBfxo",
  "key5": "3TbjGFXxFSWz2Ee6Smb3QLATtJejgYyBa4GPTAtCFt59rg8z8XEHPyJBNFTUKCpwhxKzbx3AbkS4QH8uQjszausf",
  "key6": "zUMFoTd6HAPjdJ3o5EVo5SKDY7dKdzNdhZ2YfgCaruDnA1tnYtWEjsNwXnnr5ziSjXbXhiDrSKrpaErjDT3ukZx",
  "key7": "1HgJDLP62WCavF9GzwSwuHmrhe5Qjz4JyEchM7bo2pWcjwYyJgeriKStrXHwC4PBwFpCqDzpFm5tYtDSZ2u9cGh",
  "key8": "5X5LMEbddfe5urwes1Lz1nLAiHMjsctzhmkjNtPWHJ1urAk4sPmkQrNb9iYd8zQFLgTtHwN8HgnXGFr2g7J5KMpg",
  "key9": "vioPyJweFbz6uuo6XctfcxKTbcXUbo9oUNZiJC58uKC3S6SgGMKnejx7A5KRcHThZTw6w7U4pgifF9a4pT9yYva",
  "key10": "3DeTHVZLh8s7mqceS6haD18VA2erEcnY1UZmqye1Nw4E1j2WsXr1sd4i4qmfDfD2XQuRGP4atr4AuzgqhJx5XZQu",
  "key11": "2E4bwg3EitKR188mQdVRXSjwD4ostjb89gWFwGyme9vaAeh67TTSQ6Fj94YVkpgX1JwP8TX7i92exuZFTBe2ZXea",
  "key12": "4gXSAq2PzoFXxATEaDhDssJyFHgWjop4MSwUTbaU7Qec4oStVtH1PZy6gVbQZS4Cnf3JqrayZzHKprdGBu8heUpx",
  "key13": "5jH4zSb365TmM6vbcsfDfAXt4AnkXavAQ4ZQhbag5u4ARfJzaUksCrWifQDuX89T31rDT1iRpcyB3zjKQpMA7jgE",
  "key14": "3xedihGWx6CWH5M6Rtt5Kbc8LyJzEfn7LbaEUnUhH4k4p2UPGo2xVWzqoqbExy1uTntoqNmUHSa1MQjnE6cXjSQU",
  "key15": "23xurvJxK5HfJQM4qK3EdNh7JkjTNwwkRJ1K2bmUeXNASwDPZK7huK3TPHUdm4KbADR2YUjU2kEnFHmJH12PAkr1",
  "key16": "21AcQRMqXQuDYU8AMHVLEaFciktFyu67DryAqHTmQv7ca7V9XDbJLZvqoQNBL15sFPB1bXVofaDdNXQBZMMjiVx7",
  "key17": "41mMx7ooGp46N9yfmeCpWXHcVDFtzAqGS2211ESyGbr5NvH2LqjGeJnQeRVnLroufT71zvzisNxATBW9yrAZnBEA",
  "key18": "2Nk9cX9VW4E3TU6gzmHiVvmVVwswwyTBErNbGEPVcHRYmkRHkEoGmb5guZznnF1XPpdjba2yMBYbrAYQfGrg4cq6",
  "key19": "2q4hWSC46n1qoQhK3MkKzoxuvMK6jMQcE68TFZfQ1AgQqA8etn5GEzgg8Pm5cb4C1nE55yWau3mbcRzyoc3vg3Xt",
  "key20": "36foSYzNgRcmW37ZRzW3HSLAGLDbsAYGHvHHh6xTEcitKKRcUQSqggm2WpSQW7URZDWYYV1nMcorx1b9mw7vXarz",
  "key21": "2vTKMSZuUoRApp3n7Y4E7R2AMkEX3vZVi6Yb8Kk8KvUcsXSHaj8xxvuWbyN2Qu6yotiQghDx8iqqeiBuja8qGWQQ",
  "key22": "2UkZQDcJLR4jLyiMAkdiASR7NZcyeLEjKnRjK1djzLx3U88aEX9k3PVXoqDxQTdBQcCQsymumceJyTDRYybFTEMZ",
  "key23": "3PrT6dMdD3BR8VgHbQzCZyndCGZCuFnmtx7ZLEWuHQtfDi32fPEhwZeffhEHoQYhCbY7ygiHz27zyrd4W3u99GzX",
  "key24": "a8FGzJNmcGitDF4LJV3ejvoYSkmYPxrJv4vMf6mYxkc3hMccW57Mch2MW226F7NDAWjpDcaNZ2whNAP46skztVC"
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
