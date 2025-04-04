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
    "iSYRgiTmLBAymnDeKB9wTLMm1NQP4njuDgkV6i3xARXNwhbLc5y9bZL4cVhdAAp9JrW5DesWfSWYQxneeasTTWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PU6g9dMUfzWWYMceDLUdAyvxGBZBA3ubpzmk7KYL7uPFBTHM1MhBwNbHxQvLGANMbHkAKbYZfyLKN8nc96fPQ7a",
  "key1": "9DWRp1KcrKRaF4WTmBuGoBrVrnx8pkm81F7B9qxiY73Nocyks5f1dZbGPRQEsp2ECinckC7NDYCEDoaY6F2c9by",
  "key2": "4jw1GR6CdkCia1sHv8DVzBweUrH3g4HctGeTdqwTcL1eHdKac77ipPDYm8gmvpmwWNRoB4i1BT4tXf49FeEfpgN1",
  "key3": "AQL7rVrkaoJBx3iZJepCPrnT7u7pef1AVzMs7KbGLJW3xGmTLGFKP4bxydQh2SHAWUqCC6pZXbGDZG3r9PzoRqx",
  "key4": "64G5TLs4kpNdRktnHgzaapAM769NFwAU1NJ5zw25Kp2dE5v5QtWVS9DZi23G5nV7TD8aPMV5JBsFCZxptYbCYhdU",
  "key5": "57K1LF23qbWJLKsMjSoZY94ZzTpGf9dG4Dv9KsMqRvBVSqFLeDW3kURHh7ohg3hyqeDizNzhmaj8s2nbuizAUFWS",
  "key6": "2cmYESSe7yp6Mz1SsejekW4e4SXBnDaVr2f6QyhMHZhju61Xk9eu1XcBiQ27UaFURAaXAP242KahykGzWvoM1kHP",
  "key7": "54MA5Sxhvnwykqw6FMtrPyPgTg9EgrvZAg5e8JSAGB8hbnmiiT7jz1wuNT2ExFvtumQGNskWTzhxBW14rfLUUVSY",
  "key8": "5qJ3W5fi7oEpoyUD6bMsGCQD7eAnJ2Dcw3mAqTQUiJe3xBXVZSVuBvvM44YRskmUJMQNP7gRFXcWHPVbnFbWFYWg",
  "key9": "3hiucqZRyBEUXwzJq6eMnSgaPii5WVtjWbGbwZr38EXFCe9jKFmXhcZ3JjPzMnN26Rtw1ANr48XfqNZB33nLeAFQ",
  "key10": "dgTVpt99bfuuQszCXFDhdE3uuek99hWDq16HTCu9NZ1iKVr9N9GHWeuzztHGMccZg28G7jSpjHMkd1JPCfg1gqo",
  "key11": "4dqkRykFXDRaALA1Vq2dHKPezVE5xsD2ouYKZKpU7uHCDnL6oTAVZHek2wBNgPqKbAE1aBTVodvXXeqKBNm3yq8U",
  "key12": "5QT6yggZjKByNi6EisNZX9CNWsduRwGU6hvGpDhhJfxBXtv3eVBCPAkFYuALo5nhWkfSAHWN9wgk19NqwoG1F3y3",
  "key13": "4fJL9XQbbXoovS125vPmxyE3YVLL2gtCrNuAhi5LsA8FaHuDAjLb57k17tAAPTTg7BGJLojaGByrwV16TBzxBQ7r",
  "key14": "YKSRWB5NJsYDgQjJYrDUiwgSLSVf8o4MHDBjfmFtayRh9qhWNqYE9BKj74N6yynJU8oXQZQnZiDEVhUHerwkU8G",
  "key15": "2j5DfJnbVyYyxmZVo2Aza7SZjGKs9YF1HRBRDvxMzxuaTRwdp5qHX98Z5Dkmt2uaCaVVn7quN6tKthgpfu3oBmPd",
  "key16": "2QQCdfYyLoF6toKph4W3xtTxceEEMN2xD92iNtwR6CbfAnWg8EGDQKwP9hPgZCxm17kAv3FsTvdJQzv83Y4rmh1R",
  "key17": "5bksR565WhbNKimq4vW8peRTceboEyRBLfV96oaLmN2WJeT5cCTvn3vrS4J1Tv7b1uottsEW8qRAKcZtha4R4Ti3",
  "key18": "4bxbzXcW7aZb9NVPsHEz1AjJGXugyMVJFZZoSPQaFiLZ9zH6AZag7weu7JuPJ7dMKiD6uRWyq2uitpKHtmuDS29q",
  "key19": "53gqvD7i74Lt4uJST1e5J5rEpPwYkSbzhSaC6p5k5Awsea8jynZYQ4K9rxmtwqytLoZA6VuzCSt2o76wU6511m42",
  "key20": "4W5PHVuZjrLMhs8QFD3RKTcG1CNksm2AuLJsxJutXg5u5Xd6LJ7FM5Q7WtuTrQBCAVrf688cE3ncBsLLuG1wUAuT",
  "key21": "47YXFaUshrzBtPYJhD8M5u7LmrieDEf7Xi9dAPgguzeXrea7YXFWsXqWhDquyTJhp7jKvQN6TGnwKJsrqjTLn7eo",
  "key22": "3VU9CUd3Wv488iadu5sZ4JQ5HrTQfeZtq5XoWgZZE9cPgiEHyazV7SKAmwAmTDzWPvumhdyQqLmHywx9DYUNKTPc",
  "key23": "5nB9aom27SWW82bJnechpaLtpoczfKYrgwkQ3FFK9484S1VRuTFQfbWsedZxBtsoNyDQzpvuKnf9oozYyd1P9yjG",
  "key24": "2ze1hgexGD9czxHJ8NQPtVV7ogwBdaNquG4k2BkJp12wbYigNyrsRGeH8KoTAa4UsByQDm7DWKFpbaKyy38ZDnT4",
  "key25": "vUjHQnYmdqb8SzDxxfFoTD5rM8JkqM2QKzx5X2YkkhUSVorB53cEftfsxtxG4riHJTZrTSispNWg2HcmbaFrLti",
  "key26": "4Zqju7rDpyuDLFqxuNftgpwNmsAjDg5cUhwAX9P5R9m9DCFMA2tNoJVpWZj127dfpQ3muoWyqaZhzL3cSLMNtYYH",
  "key27": "5EoVwicbghqS4HTmaqcdzKnx3AimFFEoeK4ycV7priZSR3dySDKAXXn4quJJzdRyB6HQ9bD8kSrdFpbZF1zn7XYY",
  "key28": "381KPHigaiVpYCfpAsf8haWA6STzGyPygDhnB3phgvaDDdMy5TN84TqzJ3w3ifT1EhyBYeSd1DiiwsLP2FGVZ1xB",
  "key29": "44E6zrxsNBLjYXsPHTZoFNf7E9VvyUDAnk7t2b7YYs1bUw3ynY55cRwmsqeYX7nQT1e3Fiv1UbyWsM2uxHnfTTrJ",
  "key30": "4a7UJwoS2jdVJaoMjZVj33aJEmKSnPJe5JLTkKiFyNXhLcu3V9QxwZQzCirFpVdmAcgphWjAfhkRHJyeyUrWf5fJ",
  "key31": "5HuAh6hSZAZoaa3aqtkR8vwYNbTc7m3CfJK7b5rTqjX8ZUCKBDxHyHgPA5ZKWjW5oRReFbjrTAbBryt9mvWB2Syh",
  "key32": "4Q4djsBxHhitWAkwEyXJsDodGjA4SB8XgcvnbbNVxBsaNmaScUorVwin6JBEpELrovP7jwBbeAzWoquSGbtpVeXw",
  "key33": "3GjbHU1NKZybFAU9ocCZDUjgJfhJf69Cbxg7vtrApaApT9fffkrJS1t11HechhUSZMXXHVVYz8zLHCvzRhfCMC4D",
  "key34": "5ih3CMJRarrwxbbBZLB9yyGBYpPrmoXcd6P2QjCB9VR1kZuZiaZXvTZHrtACbQDJfDX1z4fnh9TwJJE3PTsed1SL",
  "key35": "2C7MzjCEczZaz1VQWpZVEG2NiZMjp5mgaFK8EiQcGDpv5vuE6w5C2gQxye4SbiGmsrzBTH3ZgZjtoe31dzwpm3q2",
  "key36": "5RhbXqozajEPMN793HnLCPL2PRmrRgghxFL9uzLbHnopGxuCHT7u7kfH5gXZ452Bj18rKhZXEfyixweYfjPt3hdu",
  "key37": "3aWdTzkfsZFaubCnuznvnQqXWbcCwPejoKjKYFSwYXaSyZZ1BSuJ81SfnseNu7JLV3TXeuY6yLe2BkLVu6Xxta4A",
  "key38": "5KxiU8yZ7P36zo5H4xtmK5wS1kpwzfxY7x4BRVHskSAh6tXwvpPS3ZjyiDado7z3x8hCRMBV7Ppu3TPWSdMVeqeg",
  "key39": "LW2NFJMxo4iUnZhT7LvX2HoPYYT4m7n3GgyySwRSZm6SogWCyHq524G93R8XvD3MFL7RfEPVSQFpEKiGEVJzZbF",
  "key40": "612BATrFxTaFw8rWeCZYDcvFgmcSV3tSaSNbJj1inSxoserX1w2NQoTMtHgCW2fGoLNkQ82VYK6FdtNGtEhVcY9b",
  "key41": "45GBz4bZhQnuTeFyJ9oxexUPrsASQM9GQUtqJxZJHyewbKe5SWVW7vfLtt1s9uMQDWHFEdF1aqydvqwFB71k9XCw",
  "key42": "23wQXaqX87Kym2Wtg1puviQrrMzkHWVKEdo85Ma8Q3tMXFot79xuUc2sMUEmCXPkofuWwTeJ9BjRjSxjX73QYsaJ",
  "key43": "675rd1WMbGzoxtTH9KzsQyraXnx1Y7BkURmWWaS7weHi7nL3SmmtsM7cyKe4TckwGmNHZB3osZCRia298pm4Aj6T",
  "key44": "22rQtXRPMdUXnHfW6MWhwW1q9kCcCvCgEmrSrApAbjrJ8GYT9v4R4Pdtm46Q55rTaqf1k8CXtG1jWc3y4YRg7Bjk",
  "key45": "4Zivwds79haVvMUGramvrvDx7chT2TbevRewjsNzDpa3RHkQ7zzHsEjpeM185bfcxiGo6VDmGsfEBn6tDpcmDVEg",
  "key46": "3jN2nFatbEPTyuLeAoiYJMA5WXZv3WZxMTfiBFv5RhMiyEYB93chrRggmkimYtYZ9AD3ZgxtkXeLr9fZ9JAhL2ao"
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
