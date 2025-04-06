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
    "2BCvqwQovfEMChTkRsMM85io9tc9wDa9bNZNtzzgNqZc2X8DyXg1cvGa1V5K3SzFf3JkKWsxWLnJtrM4sWAtXhuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbVraHwTWasAJLkCvkYLhEhJo3qRR38WYpxjcvxeHqDeKo6j59hZAvzUNPrUgx7MCVzpB31M67N3c2reuqBfPyS",
  "key1": "5xbD5DvXvkj3te5th7T1sRr1FWEdBciJonHdbxk82GV3TgbQry8Waa3Hs1jvPopFDuESpgGSE6UyjNQG8ERJ4f91",
  "key2": "2opZLNKcQWQMh3BP1NJeJyJNcrPW2CFBWdM1nkxEFpXrjr432pHBtNgBNVpFBEHY8uXqnhcZMM6EyzZpWxuGosd8",
  "key3": "3wG1czz9Sy3PUjFLgsxAyfDmWg6D57qXCQLQoNrQv6AReghhDPgvt35qtSqGBQQXEZx7y7jdPZkQQWAcyH5XruLH",
  "key4": "53mSciAppFp7tqi4Gxy2xrQTtvAG81cKJCwuLbcmPt2X3EssBtrMB4QDbweV8ifCQxr55aEPT53NBKQPM9xG6wf6",
  "key5": "3gh4aSTWaJT8oL9PnLUqQGYyy9ACzxRa83begNfdwRTpSEUD4VRRzTZxutVR62kbjgXCDsrRadoysh9EmqCWEZQw",
  "key6": "4dJWzLrZFoTqiuwoiWQmRPjbsXZ8YDzoW4GzWnSqBWDjNPhgwygYPLo7Skok5ZPEbQsNXdLzeXYyHcALN4rjo1t7",
  "key7": "2Bj2zWYMzbYzDhfoXPcDsYtpsNJR1Ehsm3Nibz16gYmnp9GxWLHsaohMiPtwqNJV8vhWV8xQU61WhK96JYmTiB1a",
  "key8": "5mvHuvCnoxdFgsmbJqPcP7ZGAiHKUwsE4UEjnxMHjSfMVmo7CXuUJX2zTD2YWgHke5xazBLhRZA8iHC2ALxwjgbD",
  "key9": "2sKXkVz4Yf3XfruLEXVwoHh4dQQoG8oaV4ytzSWrozUnByywvTAZqc9xXNXmD6XmnrgpPMuooZkFXMHUGaEo3eAg",
  "key10": "5sYfspkxcHNhEDR3taSZXSLeEV3kgLVpzwMBfkiVak9JZaDVvhNXk1AhWdZjSJE9CsZ6Zd5arFfqGeeYoVhcAq5q",
  "key11": "2TfJvjJFrudwNmMKPs7GKTyS4U9xwMw7crii3Dx3hfc4vF2o6gaokkJxVyJvzRh8L3C9utQwj85qW45Hovykfa2L",
  "key12": "45sD8ehkxMbsD8Y1stfhF1y1BUHL5WZV2SyCpm9CJ11zfnWTLGAAKkREDGYNgAEZ4ZYA2x2hqMETNFJv78yiDHZz",
  "key13": "AoCsRma5CDWwksBraujq6BdeySUEEPrd83ZBmNjgkKvdrhhKx1WXDA6McAYt4ejmea7jMvwwgRjGr6KE55LPAnD",
  "key14": "5b4iUYBoRmaq6vDVRu3wYzGhYaYksiMLZWjdHTYk2ncdEQKG2Df4LK5roURy9kwsPjnZ5LyArNni3RQQgj2PHro1",
  "key15": "4kLQTW4b3L8dXpG8p6nRoF32UCZDKd2K5sP1a6aBXVa1EWmhTMbudfqAE7H9ewBhowBK82ExWEyJfi6PqVYwAYNF",
  "key16": "5neZYHnmLLbXPWYsM2pXa8ptgGsUhDAn5Beq8nYXyAQ9sX9gvXRNManG9SM22CjHwdEab5ppE8etr51nRwtW2HVX",
  "key17": "2jg6k1KnYsUXwiSPyx2ZiyXWQ7aT6tTRcVVUcLDxvkUeF59sZxF8SJSM9LEKoZNoSkmuKhm9ghBV58v8f952pcxf",
  "key18": "DPCZMyqUnZe5vDvrJaD8qGpXF26k3axv42XGoDbBtd33GqQSjT1vLKGa6YCdC4VLR5QLK2qQryW2CpC7gXUfjtV",
  "key19": "58bSdpS9Thpy5DYfBiWbyVsGcdjwekqhH3NcuqENKauFS1irkvPh5enygPCJsmRaWgBSA9QQFb8sZvwWcTXvhVsN",
  "key20": "4Eeb8cBJHpyckMwhYognAjPguoWKm66rs8Qw2QKtAjSqERdtvbWJuVNrWeofmLWdVh6miZnRDE6AXJh1nknu8EUx",
  "key21": "RMTyNLbS8JSvW3mcFaGbJFtyybqZTU9DyPycp832vFhhNvxTbfidoLcYJGeWAQsL1685tDHr8aCz5EMLkWRU6fP",
  "key22": "2pUwtHTJKZpnihoRFxTTQXQKwtfj5egjuvp7Yzsdy4jk5B26738TWVFqoHZ8V5SgEbxUtU9Tqvrs3z9T9QMsmwQ7",
  "key23": "2K2pD3wY9brhaxRo6tfuCGXUFth2RxoG8fa2Vr1Qkun4t6mWx15WtCnLf95PBtNhxHkpRoPxiWHbsG9k2uh1kR9r",
  "key24": "R4c8sNhoEjbFYvnk9mC7uDeKmkxC3xffpz45UAZFPg75AFNqCUivfgyqpZNNF5puML8UhKsk7z6c4tuREtw2ugH",
  "key25": "3XZVPiXQCDLRUC3mhaNHnHHTMbrRm3DE3BmChEvrWDkE2Z1dzvuCX329UwoVQW6w5B9bgVpvfuQ8prNyLT9x5SXV",
  "key26": "4Y7W2VUVKJQ5esUSSJ4EoiC53ZMJBprC576fTRn4vfdm177JZ6BvegkNBuBHagbu5sGYsDV9aZ77VuwFfJqZYpU5",
  "key27": "jbR9x5M5XrRwc3kVjRLnNhRHhn5ABxC3armjA5cYh8a8VQruPSRh4yNkHHPXW4EdNfiuq6Qtqzk5X6qUiSbqThX",
  "key28": "4hN4hvTQVSicLGxARUPokGB1dWqJwqbdXc5EHGmcqtejc62nr8wHSDM7E7gBbuWxG8eBf2RMrhxwy7oZgf4hQRDc",
  "key29": "66aCaz37r3Rt6S9AeT4Gkq6E1doQnY8CFbKGdNDqja21B9L1xErSBM5dbi6ovTUEE48fnpmhiQdmweXeRuEoixM9",
  "key30": "diVEMYWDR4i9y9uDvdo3kZD4LPXto3Dgnyfz3VmK2HynWHiF9Y6KXqtwBJxv63W3fXh3CQWEm6HLoTFEdJoqVnU",
  "key31": "3hbKWcnvncT8mPVHLu7ExA85g74SmruQLgKP8eiPxAJFtcsdwy2Td3K2vvN2vLDRSNZmWoaz7guQwostCZMX3qsx",
  "key32": "3nZpJEqydYSug6yQVX16WB6VDTyXapibFrxhULQJvUtTrPca9Bd2wnaUtdN5fy6hJBCsPGUUdmpxsjiCi34WsQH1",
  "key33": "4w1cE6STbwQDrzq7umEYzn7WYm1mxiTMBtwx8XUrduJywNBk5x8DMvNezsRQWPBzwZuKfEYn6syB4wwghQevzmbV",
  "key34": "5RRhYczSxnTv9KLLnzq1f8WfAgHBSJMoCHBZBvinwVCUTZwSW4m28XXgoypem1YtoFGxbz6RchALN2HqCNiyThVw",
  "key35": "3bEWNd811FDSddenyvcMJAyNWFYA7iUeCtDoXExLhLwwLF2TKmYGwpHVovtedquWbAoDTe8kdgWExEaWKDB7mKdz",
  "key36": "3bq6UL3oVUCpgSWPetvRrh3AHdt2auVrjduquqQUCZhwcEXGZK7eZ8s3MAz9MVJEHP4GJkEGuMDyKPvvs3QHfMoN",
  "key37": "2qZCgsxeqtVyn6y7cvZAtBUvxzSqxgNsF1S8qSvXZZQUvm7TC3Y7mZ8WeXMXqB8ybbnbJSJwLQF75JNPDnpoi4EQ",
  "key38": "2D1aT2PYbcNzQ1ycbBgu9YJroyEAApKnowQHTwtpjvsoWdK4x7GXF3jcXrqbrwUKStLqFYGhtagMKsmLvZiK63EG",
  "key39": "5zCk9VnzmswcQBXS7e7XiRH5cuAAy9dc1aUmW8yNf8MSvKknWvkjrbLEaSNWV57AAxgL2cKf6Lz9eRthrmXakgYf",
  "key40": "3YpU3ngRiePF1kup4Xd9YrWaujgReyRX8kzxNbrWv56i41Za9WbKQFq7TfmSS8JnYwcn3qwQgtZm2EZxDguYL3e9",
  "key41": "2WRHhHNe9wTuWPDzoe7kjXCUAZGKt8rnLQVkSKCA3dfPv1dAQBps1sRASxQqtuViWRMV5V3MmMbJRnTuqQ4rdU43",
  "key42": "4bjVt6TEr7dQNQA3AdKX6ciUkzU7gFQ3fqzTg3ivQ8NVHEcGwRhLh6Zsrtkxn16Vq25RyCahQbmEFums5oHWuYiz",
  "key43": "4QGmsYLavHM8er6HcwWGvFHo1dpGFMLwqxy2uvCCWMumNpH5EXhs8cmKttW4mWLNEJ9EZJLy6jR6Mpetbe4Lvz7G",
  "key44": "3jgJABZUbnJKQ7yGR776brVtSPtkibyuSHedLCtgYeEVqEpRtY7RGsKmJpSTHZCZr2hfNRbuKXK8szr2m9Hi5m7H",
  "key45": "98uZA5y42H3Low9QXVe4vmbGYRH34BnxKSQrYUmDVD24sLniCP3Wh6CseNX4d5GrpW1qaWSCCXBenc7MAymN24u",
  "key46": "cT5auo334Tb8hWfruPk5oBDGR4unft57MuuSp1cyvDVxezAj6hvQwy1gP3KsoCCKqL86HK4B6P4BgFuxvx2Bvft",
  "key47": "4X7AdKHEvGeFUYGAFDi3bvc5zP3DbazMC5SrWTeFnuzjpZie6cJXS3yaUGT6cWutrXusRqSrJC2yCsVKG4qBhBqC"
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
