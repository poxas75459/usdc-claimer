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
    "2jqxf9DXRusz814WbGH3wdDycX9WaxitiL6uyoR5SXW4qFJegQpyjs9aYgsVdFeL7LMTZAXdtuXyf3LTYomYvtNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41BQWEFjmnCKmPcss3NK3fFeiQmr9Bd3jfC65vgKRTEZgVx9Tg7Qc5tKEuY7YBSP6M83wTqongEcrdjaXoTwerzg",
  "key1": "2mXBQRVyuYMtjiAGVpusNx5WnBdwHLL2duc1U83AKdceK9was2sBicMnxSc2tL5n1kiwr4kjWYa479ML9tJYJJPG",
  "key2": "3iMNzXdEdsvBg16qmd8YYaCKqcw5QBgouktcBtnPYUXYiTCeXcNRhnEkjpAAcSdtvcqfGMbQj2T6YGsYt6mTqD2",
  "key3": "Kxnm3VCoPSnovthDw5c24S77oah4JCib5M1wpuq5tbhLRg9gyzfdEynLnFUkqdCCcKLeC99ry9ZHrv4ZDoAiM6H",
  "key4": "dVM3vrbWbPc8TnTAyRAUE88eoZc9LcuyA4f885gtQR2hH6xQTsrqtChzo4MmSuhzijMr5t6zKXD67GZb8JNr13K",
  "key5": "5env83MZQEAhTjAjoKFyUKjgmpmimfMT2NnBpJM2qDouV7y4Ed8Un5q5qNCf9HjmSHatA5FQoyzLHTDjG13PnGNF",
  "key6": "4CrWpAABEkrRgc7Mr6wXj8Uhaicb5tLGAGa3YaV9QRzYwgNUhQ9cFqsd1WxDUYAm8xuwSi3mDCe9hYKtMNkGgrpy",
  "key7": "2V4vRh7whPCSnm9CjJiG6RpPnCG5JGhFTcRpKMWQ2SW6Jekgih9R534GJX8F11rbSrqwBTQSjv3VbpdavRfSqM14",
  "key8": "3NFsqZgNoStV3V4La6tCCL3Z2Us6N17uewMq4q4C1bmrU7cvmSbmUiSEhmMBJG4FV9hiJgmiCv8e7WXhcp37isHT",
  "key9": "3crjgj3qKJeyyfbJMXU8uDJGVGZjm5WBU999m2MRgJT1EopR8aDg4Wxicwz1STFR9YsgdZrT1cgF6UGLzaXrPQrq",
  "key10": "KPeyckVvRk1U1pmP3FxGcMLqtTwqMrAt1jP9fMyU2UbXb2DiRdUB22PDA6ke9HL9zePbjKoDb8vrDy1of7AT3uC",
  "key11": "37Lkn4uF3z3WsZd2YrF5K6pEFc9khmHC7dYa2Vc5q2D6RXnA9L5q8XfxJKJxHHToMigCFDR829URiiJZUXYzxRt2",
  "key12": "oq4AQDPuM3DBJrEgkQ5sYYx1mjicLGd26SpHaTHLft42JZ72FkTFTkv2NKoGSLb3sTmqqmbRoMc6hWpJDrsMTGs",
  "key13": "5vVGYMXQadpRrsnKgJ8kauTWQraFBfew6MGCdwsuy3Rd7tmtQwHy5R2pAgDCP6brPxK15H6Dvaiiub4NyNH2V5kt",
  "key14": "3m4ndvfi4EU1euHtiqYQ6R58N1eU6J262LYYBHrhj5MPHr5NP5ZScrdg2vFPsgfJspaBzxmdJ5SrxfC3SSh1Av2X",
  "key15": "jjnKUh7aULUg8PvoC6rgwfzccTXzWtorhqsmwZsge46chobVfa3QREyV8ASmVvQkNapVtQ8JGJAxHvS5NHhpGtb",
  "key16": "5GbmvWNQUqVkXyidGrQ9Rd42e3VeuMj8CYFkqTq4CMtpcqhdtwBTpGPrkCDTbKEH68d8Buzg9Qsgt4fW5Dguy8Et",
  "key17": "fgtL5jjs6R84UbvvzVK9WUD1pMYfARSZdX8v2fVKTfi9BYrNwVi6hkHB5cQkxgbHJVxwscnHWUkNAUoA3Kg5Ly9",
  "key18": "2ZZP6GbsA9FeCWpkWMAQtxenu4BxDtK2pXGduKtxqagrpKFPLw3qH9ox5GSvQ8XUjQ5BE4dd7Jv151wU9bdR8ewf",
  "key19": "2WXegj1TeX9KLbWhkGZZbiMBNXTvAVKTrLxiNw4W41TvsJCV9zqQrScagyzWoZdt2rdy5JmjSc2miHHQ2pFaWeDQ",
  "key20": "YArVULvSCDg79KrNmYATsBX89pTJRcsJVioim5bQ9FXQ18XDdHT1cipDLvakUw65XPz8PMofptri254AZHjtW4N",
  "key21": "67Gs4Bwy79WvV15rX8av1y1JvXHW7WyBPhFY5bAdGU1XquhYKFEEAuksWwxdDt2Eb2pjZvRTYQh9GyLNygLynMRu",
  "key22": "uGnCoQ1RPjxCyk8BRseGK5VDtFXC7iJSGD6DM1XnYGXistmKBjAgveLnEr6yuRi4MoJpdHfbnzvK9P7R1ASkzqf",
  "key23": "5wZvprGJKcWC1P7q8gfniqhGTH11cXYD7UNEacLNTDr83JBbMNhPtMtxWJT5x3wjaURmyfAMyuR4dWfV8YrFcPdW",
  "key24": "3ZJ8Wstdv1B1CYF4ywAmGZxv31JndwzJraVXZ2EjYJ9F74M2ctJD1GUeNMB61SPmwZMzkgxz9J96an8ezVpcZiHf",
  "key25": "3A2PogJEzYncsKLM4bycCPeNx36o7cWXjb7fPmDSx3Fg4qWagNPz8tyoKGy1RZ8baAJm9Y7URRdheycHw22AXkXh",
  "key26": "46gyXWBDMRpECmqLuTMTheWc9qWU25ftDeAgqoJhT48hFegUbQyBHje5Jh6zBc5qXFYgroPoeTqKkkpYW5SqGRt7",
  "key27": "uUbnbVzkUtXgJFWg2RnXWyap14EnEkHHWSWSm5Lrp6wbaAmUu7eX4gbZHVy5VU7U9zwMgAHpHmWkfoB8dUPMnD6",
  "key28": "QyvDWmN4VNFrvM8CxDX8euXuB7HbMTPJeLb7VyacBgbMzFV96uDuazEfidbPP46NYb7r89o6quXm9HLhKTcdgJx",
  "key29": "5KiKoT7gvZqZYXzxvo276me6A3J9BFtVQMF6MYyFxYaumcKuqNDQzaYyrfwEgf4coximaxjTqqb3QeUE8i49ydHR",
  "key30": "4yEwunmyFPBiA4wfxT4dXboTWdRRLC1Zc6wMTKPVvkDP2rsBwqQPYDoPhzsJAbcZuwYv1SuyUkAdrLgQGL3pd3vD",
  "key31": "4qdpSWsKWCDHdDeuJGGDajdqzXQApjwvrnFsqeUyKxkFBoyZMoVczMx3g8JTvBsD5ZmAX6GgBhhLeGc9Kmp9Zypo"
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
