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
    "3z526PGPUGvGDhQMPJ89QgSKrGjNPEqfPtdGiQdBrQeHYpWuYr19hQVF311JhiAYhoWXsRxLa7YB8Q3qs4VE79r9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8dAdt7aNdAnjTFzGejRRq1N9CPJdjNaRoA5yhyAhc8UYrDJg1aUqPLpQHHR4FZt55aH3bNhGXkjWCCZArU2JSx",
  "key1": "2ZQ515mcpB9yqU3nTJhRSV2oF4wd34u8JsTwmDRGMgcDfPcvmvar55X6jaaKM2ER6oPXBQXBxcrRoRuYXdt6v918",
  "key2": "3PjDUvZMVoV7JZ89J7jRNrCvDKGbwJggSEFfY4pobZFm53vQhCTPW4do1evYJPLqht1ExhQJib1M13YkerRC21ps",
  "key3": "5TqB45rsteSDTXLg8ueWhAPqQsHVHeWqgmy4EmDPgTT4Zd4KZ2MSbGXUkeuj5HQsatwBkTzAZqkrb1kK8ve2eFUh",
  "key4": "4sJyunaej3nV1FduVhNq295bBQUxuFtzcpD4VQFCzj3BjrgCLiYMCTCHAMMqvqZcgWkJxAXW2LnTQPezYJx7SZZg",
  "key5": "4g3GpUDH9Y3VN5mBMhAcZp8nbFhFdyLbHSMMK8f38Dq57w81x2dtTQntEr6se1iptcmzAANmHterHEYHwRgC5fm7",
  "key6": "4ZoPv3jgmxgu7WVXMT84HSzcp8EZBdnZqeJg3Vp97NKQY1gGPvCwUzv5snoeo4pk6MG7GMrVJCmRdXG8PuiRZ7kD",
  "key7": "bj7K2K3aRnxms5JdwXLtSHeK21rajrayJtFh7J32gKJhCQNQi6YY4UvLuYdt4JMJvA6trS8NdRXZez3yqiFe6Qz",
  "key8": "3dCnv5JJZu5uh879M4SxTm558PeX5m9qKv4gekrTb3p4jGTDJZLesqbprVZzMvGCD5mvMD1Yxy2ap5LmgHdmHfUT",
  "key9": "5uU6Az8dU6vbgkr9muh8nL6W84LxmMvQJeixdfzGJ8LHtq36cNcdvZHoWYrxiyB7mDSysHojTs39k4YEqFDj8ULX",
  "key10": "4oHTmdA9uaRs5f5f3fQ1cPAor7eiQX9HNXqdBvxmVa3x5Lqjdiv6k8TcXUAqfV3ubv2RNiVkPy7PMaVMXPrpzJQW",
  "key11": "3A9kjcu2LBJhnpjnnw33iZZNUrj4qRFzjrPV6yfdACz7aYZemmpXFsjUc8picub17qvBgxrNt5kmuufx2ZtGEhJ2",
  "key12": "2Jb52RZsYrN5TubZeGdrEeL1ck98GkSXWxyo4yQuAGgKcy4pezLk6KhRsCjXA4G6hpWwZtPUND1ZAkyFsL9AZCXm",
  "key13": "5rSLybSgWbELqGAY2f1MXHanxLnCnuFj3UJMTEEbj5H6Pez16dTREAtRLhTJ6YEX2qn9DzhHDhCiHSA5G2L7NkCU",
  "key14": "62szqPFEvwJfUmP9so7f8oD6wRXtHckLQK27ronQrEcGLnuz8zo9YwszyNCQ5kNv82k24f2uwiExfBswAgZyHvPi",
  "key15": "3Bryw5LuFod4VGvZUmXS6PrrXj5a5dEhtA1oWt3jDYQMBHJp5MagtA6TX1LTXmjHAotUVrFgpL2LrtNNkXdyW3K9",
  "key16": "4CwUgJT8sCPUVbgUYsFNHAPrr4iHdqDQ5wicFvRFr4ATgwkj84YQnbaMgq7byGqWy2oWGaoMkHfHwBdmE6yqkAtS",
  "key17": "5a5uCcA3G7Dj71KUMuZMJW19neU5DZyAsP6eQrePj2SWCkVu5igGDJQb9ZFgNeYi4WHVS5Foc1ccaycdt1hqyp1i",
  "key18": "23HqjQYgmAZ1JvRu7sVq826EsVRmLyp9b2t4aTAzkesFXfgWJWhgBkbFJumSJNgRRZS2P6N3epQP18NV2rsszqvT",
  "key19": "kDhpTFM81cf7gFMQxTfj7vNZZvZ4Sp1jLdWmfbL4xbSiJ22J7W1ZiTChy6fvT3JGjqKK5Ss7ajPS7pmTb2XtNr1",
  "key20": "5x8JvW56bMvydoSz8vhuv9HqV4gLtrr8NBnmwEbK1a62oEViGxke6f1ZpdaF1hcgXtVfmK3BdMb5jqs21w2NPat5",
  "key21": "3WBfS8Ch2RUJqYS7LHnhciwLHotbcriGUfrweZuzgDDysUbfDxi2WiuZSGcPcZb9EaVXoYyu71ANVjfRabPbibDW",
  "key22": "36CNZovwoTNYW5egQybbggQTm1uXWHBEmXFW3jXXXTnTuVKRqaViTKdMsro54rLNUnRSFMHKacGiR3ovdHVAFkSc",
  "key23": "3T73iKYapoUmdf1XUatLqVeqPyjRijHXiY6m428UrozmqkMy749fT4YSnHJjCbK1Zohzq64PKc1sSHzCTGxCc9rw",
  "key24": "4cRnihsaCgJAvgGeRB4omrRt2Th9MaTPzMWUm3cLfx1Y9W3dqajAXAd9r8nMfkAiFhEcdtchMwQt9F7dTyMir5rD",
  "key25": "Vf3kdrt5RZTkJyQ6J8baQwmKWcTSEg3t5ERYC2exuBrA8vpFVbFGNvSQbNqPVSPVZuYnYJwJEns6HWBLUekkH7B",
  "key26": "hUuRiJntj9D1sCWHVGbDSBaoYqFYuv7uNkABMVqGqDU4opWoL1yJt5MSdNwyhTdvTL3F6ZE7v5GC4mmtQiWkb3C",
  "key27": "3XjifzFpsTni9GQQQQNCpH7bwMCDqcywvWB2aN61TvAqRzSCoyr3ocBgPoKS28LcPtKY1AL2ayryxroMpe9SS2nh",
  "key28": "Fu92T1YCTFdB6g4y63UABsjGGvVSfCNn2AfW1zLaMDf26XNuFgMPXHBWQq9DtcTc6Sf6PzoEmKtgSURhcxfjMQ6",
  "key29": "bvBvuCCvtKEHVmcHaQhpXhTMtXYVcHybeSqmJmPKhQQ5ZfCcsbdhK5WWe9zateUT6TqkwtJ16xMd5cTVXMXHEs3",
  "key30": "2HoR1NZ5ntctuE7ELetx47Hqstw3VERtGNEupJmLXHshFgDPfPAFSHHzyEss57Na575Bst6YPoFeAamYbarDm4Jr",
  "key31": "7tDYmWVLW2q7ipTq5oHubYPZRPEj9BruhYiF4wwvcvMJXVaemTCCMWbpMXRopU6mT4oBfBy3Kyf7BbNcR6fnpMp",
  "key32": "3zCPAunWbJGNQjqKVmAa3YcCHvGj1dokrYDLrmiCf3KdW1Bv5DkCCU6SqkWkCKkRrK6NW15vNSU9fAdgtSn9KFX6",
  "key33": "61HgMsZvZxfenypjCnw4ccigCS3SqGsvtye69zThk3v7Mj6exfeKpNx2euSk549wqcecy5Mg7Gtgj5vp3JN5DacW",
  "key34": "5NatyHsTY6P9gP3WrD6PxKCZ7Q7KaifRxSqybdxYJv2Qb68MvXBvdEAiK6uZSiHyov7yBVhbVH8t96B4UPmTjoNA",
  "key35": "2nug1wiu61iQ7rzHnK28igqMNffQEjgcUzfFsHPWSJ5aLZy9FT3Mw37ojcjSV3v2E8Z2mTpnvh5NE9zEc4JLYoQ6"
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
