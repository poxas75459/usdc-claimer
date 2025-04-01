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
    "2sMs3FAmNw2MNqBt723pB3gyZB4uoJQXVdVwfYJXUXVq7K6cCPpi6qqN5YMJH8aLPh1JYYiVvYkPAiyPFmEXbQ9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yqzTkSyN4Tqe2mgFU9cC7QU35qJvCjai3YcX8UjamrG6CkFLijjptFJEwcp14ZRCADYzxk1vcNUtw4Eety1LjWi",
  "key1": "48AEuhSxWx2QLZJhHMfhPiL62TEL4ogwk8ZniwwSTab62639qihzPYMDxskA2z75CBWCvCTAidnxX7qc3yE3CCWe",
  "key2": "4sqVPV9xVRXMQG3JWveyd3EJHNPtdGDcvzvFVywBhMPnngfeP2BxaxVNKv4w5MsFZjzAMouyNQpRTLDxsU9p1VuQ",
  "key3": "3ddtfa4wFESpzbupvwonWyKzRbBmaA92DUn5LqiDb1Vf1d1GNFGcFEZf74g6pCnGJMymJk9LBMyiZ6vBPrxj2VrT",
  "key4": "52azXmwHU2UQD2szUNhp5nA5ByCuKjoMMtpdLBCxYEtLZWr5yujtXSvy3qRXtJEucwz2TGVE7Z5Brxm7JwhA3VNs",
  "key5": "3QFqGKYggQ5smb9382gLFgGKfKBPmQYu8PVR4cpCt7KxXvhRZcLqNqezqcRn4PKkvvnop1EdWE12z5EnKFpzm4U",
  "key6": "5c5e5n6oWfCBTwC4s7G6ukDvY4uDf87jcpSVcQxzsfQX3whPtL2SDU1hqoGE8BA745TLhaca4j98ydSivVSMFpgU",
  "key7": "2cvYyLzf9KXF5iA5NRhCxn3dXM41zgwpubdy723qJhBri8cSvHLCC7vnRoTaYTAYCPErtgyirTPGgVkKNSi5re2q",
  "key8": "5yTqKMoo9w7mb27FDbrtoo2yMMRqJ53P4n7UPzjK9ziZjEMQ9211kDJiD1E7bhPp8wSLrMA3CAGRsoXY9dhBX5jf",
  "key9": "2GWeLTdP6p6Vv9PRMH8iAUd3KnHevjDbzStGL5zyyqDCw9BUQTXmtn1AhzSHeq9aUgEwoNfUHCLHXUBGjRQg52ym",
  "key10": "k4PG6DUkqWFyC6qwjgkgWNTTAS9pC4EUWJsL8JWY38T5E4CDajjGYE7joXfMKbLk5ZAKmXiG5E3Y1j56wNNjc3q",
  "key11": "3ryAKH2Hju15Y65VtsQPFHvW8acXnvWdGvAeqGNaCaAnbTrv4UpmVvCrGkpEsYCoUJzk2mCHxCAetBsiJaYEpRpR",
  "key12": "2RtgGhXmfcyeBZun7fvcSq16trpecAGyMn7hahFCro9DLsVwYvFDj5kWkUcMW7roQtVkTDB1mCuWdJf2ucUVmSNF",
  "key13": "2crNVhBkXz89BjxyS4gcP7vBiSywHZzaYhbnSuTWJmXgw1bZZ5u3gif5y6KoSkQrvo9faS46GhB9K5wTBjFC4WwK",
  "key14": "2SoXvoXb7GS2muCDdxqvoAcHP6nHXns7e2EX2cc62hMoQzwQJCQxQRTnhndSqaX9DBvxdXB2V36u58gidFFxrq1S",
  "key15": "3S6hcnUGzNMft1sx5YYdW9yfVBH78kK9R7a5b5PRtDnkujqbX2xXryxXZF4f7aP517iw2uB4MV43Xxr4SGjmfvLC",
  "key16": "2mojShCoRNERArueYabNAaLnUTo26UnuoFtez4LF2hk76W5ipwoteCuZQNvZRckh8CNTLRQgQUPWiLz3JiDGNdyP",
  "key17": "2xporGF8G2H8inzpbQ6uEYHFNTWS8GtL52FYNipe7vBjDTNq2rsssy71Fu4y4dgTpEN2dXdk7rZjJjrMeCaC9ZrR",
  "key18": "KQPzVeUaMKXoRYrYAHfjfPHTZWqpbiqoRK7MacbiJAA3yMJsiRymLcGsL6mkHPK2zZgtJTwJjV16pJHwvbjq4c7",
  "key19": "5vyzxQHHFrkqefmDK1GkFLqcYYe9eJgKrBvjWQkaSr2X42Vn1zEYSnJfMMvF1FBjP7Sq5nfMZjMhMZ5tbWRJKTjy",
  "key20": "LTn9DUPmqUWqHh5fq2cUUb3rMD61brkkuvFB2yxwtzPwBmNn1rDHH2YXazkXwN9m3obGKrDRsSGjF76v1THg6mW",
  "key21": "2vc9TxbPin7DU2m7SgzJBRJumR79ZqEh8ZqUVGbBNDN2fhiGCzNmNHfDZTkzFu1yBg8TXLAbBac61eF7mc5VU74Y",
  "key22": "4xtqLkgpuEYPV88rP7xEFhhiEqUGA8ULM5UJhGkEcTRSb3ZfLjRP8xH7CuVDGH5LYQFsfFrxjvjPbn5DLsNynuxY",
  "key23": "YFWXPoCjVcn6xSpM1vt8WkC34B9EthY7itLfJzdAByLvUWoXZFnTL1uGcEqrUGU8kWQJnjrpP1JAALXUA72TgnG",
  "key24": "2PxE99dEkTPrubEUqK3vWb7qSeLh1HR1npGDHrcPj5fcECfYvuteBbcM4iCp9bLXPGULxarydGXyqbMN97uYTHDM",
  "key25": "4q1fEUSUG4McBNq6Hs9fvzNJoV1jV2i3aNKdAhT4Dk4M6ffT9oNLHLb3evnASoMtyjemzfzJM2e3iXcahB7gXtqt",
  "key26": "41SZ2mBzmoPoNDrcSyUZLLXcrrnPrCcFfMi7o4z33srbmNYEVgGmQzZ57KotPyCdK8peRZQ8it9ect6Z2f2UXicr",
  "key27": "4wCEtDnxoWaNsXuqDDV8mjY8P42eFHvZ6kv21z4Uo6R8GYS5QjhNTP6y3pDv5AePRWp8pLmK1kxYLJ1nRU1HDVdz",
  "key28": "3UDW9u99nvSTn6LZsFqAXqGrLqPUTLSAJVC7seLGGjULHHDtjZV4TiSALDfjrYeE2Ssyp1nfxQVciEznmLmVs4W6",
  "key29": "4hHfdzrz4TsewZ31tE2jCueP5W4auPRSYLXtZuv68C7QTy5fgCWh5u15sZXrLsWNhK5RojbpWXkoJK6cReNv9mt3",
  "key30": "ckZufshiFmusjxTUezWt47gW7kH2WkCSi28tKSTu7kyhSo7Liq23qeScCNHZsm2uT1vbg8mVSsKLQwfSeEFH8ZN",
  "key31": "4ZYK4xbS9mB61TTNC7W6sTXY9vkYcEo8Jwxny29KpyWmiVuczhVDJbxM4rUrv6XvuyFyCXRTwweg5kbt9qpKdNgf",
  "key32": "LFLtyu3FpspL72Waux2u7RT9oAWGMCp2QPAu1yR4yvfJocedCJpVN8bFaqJ33y1NNwCKYtZFAS7BJQoCYcoWKmr",
  "key33": "2k5RRidYebaBCvoM5Zc2NJQL3Ha6k1SJqLVFMYwdNaik3JVW3D2uQFdQpJkN5Di9TyiG3LUBdYfxoSVSQ85hf59D",
  "key34": "4KpJQFi8aLhJrJa5iGAQJT1rGMKjeJG5icPJ8WQ1wxVGFyAbgbyf2R6ZWR7MckA44Zur3pDUqrjLoP59JxL9TrzX",
  "key35": "3hDuFjyrvrwQivh4CsqDRjvNAPWFHPuUPzGZDogGExYrokEgPsQxiamuJKaxqSEWwPYW9iE15R7xkAES1mUHFKQi",
  "key36": "jARLyqQEnyu65wxdAezEAZbveszdEDgvPHcCQ74jv9PqTfG8CGgwuR5uuAHaUA4QqV7iEjdRtbBaD5gCFU4oeXE",
  "key37": "54keTZGRk8QqEkVoZzkSysWiUkjfeqQkS9ZLaJb7YZn8axmUmwDNhGZfajN8imnQyfDrLS4EV4FMDBjVhH7aZbZz",
  "key38": "9vjqjbucP6Xg13tgzn3XNJApP26RFHcGW1fFABKV6FFGHpmsKWBP8VnifqpQ6D9CQauNouqHghR7UxDf7iJEqUi"
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
