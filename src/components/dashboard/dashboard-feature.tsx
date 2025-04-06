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
    "3UVRMiwT3BwCzYAcBMDYSZToVCD2vCVfzK27cGJjSAVshyxbGnnvsuffn7nWxnGfhCpFisvGKNezJevUgTSnT7t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4Pqg9VYTy2NBU1V2WsHBkZEUrpDXu63N5AnPFzZp52e6zCkpkjmwg6KNTi3nP6gdbnArarEvR1sPSz99mQDNRj",
  "key1": "btecx6QBLjx6zJoyhJNvLBbgV6i1YKtiLspe1zeZozViSDDhs9BLqRJ6QHzh6623rJiGJab1hdss6nsotQjpaC9",
  "key2": "4jAw6xBcJKc9WLNza4BEwWwLE8ZJGShCQPUU837hoCd7TSUsY52WzR4JFfEX1ZfzkEtD1d5GodzUeK2fk9FzvJoK",
  "key3": "4RosVvcxBxemLW99uJTh7WHv4YiAehpDvqdnH2gnb771CorpbsQKK3SJvyd1VTLkJHLM7x2zk79QJfoMSSHKHTck",
  "key4": "mU8rpmAYHu8rZBRu9vpBZUGKMQjtxiQkpdCxxXRqGnKD6u2W2KenkHgWcqFfrUUsVEC5gEPZaDSg2eRnJgLa4Me",
  "key5": "tfMay5Fvi1oKTc7bRe5cqBKDHRGL5UkPKq8jdt7FYSsqSMwQwjmjZd9t11PnrqtKd8j5Y9ar3sWWcj7JR4cmQVp",
  "key6": "4s5aA5F947A3j9tjKkfmK1eSsV1dLemBXKMGT1rPh13XMpGaHUTWtdACb1fPy4SReWh9hFm5AopVTAJTNDPawYsV",
  "key7": "9FWAgP6R5JVBS6A7P1orQQnxZEccb3vdQHsf9GQnAiyQoyThbiZHn5Xt4wJ7R1gKwYZ4h7yATQd6iiEkjEqNfve",
  "key8": "2jNeKZPtHQZjDTMNjRPBVxN9QnmiR2ioFhKgaRacgD9Q3UgSqXVNVxs4QdoJhQA97FmEhwrbL1bbPuVCpkYCddjg",
  "key9": "pmEUnVvQhTE6qDMgZjzqG5rYRxgKneKSJjDgPbzx7ZmErcyPhSuBwydLWvnn8PzbE38PXzc1xASpeDw6GE74xSh",
  "key10": "38FHG8su6dcrGRvmxQ9To7AcZp38Mc5To7kroaABobcBMsi2LVrbyEWKPFPw5iJM8YYFc73q1U3ZCoPSLenDvki2",
  "key11": "28BcdLa2Z2hghCTXt458jZ6vhj63FBksfqFKodc6zRTqzBLG5YSuUM39LWT9dxUU83FR6xRwjab4pEDiYyjLnKpL",
  "key12": "9d8nGfuJfb6sWnFQpknHVEsmSj6Ftn6RagBP3hR2gxDDmZXwyJ86fujan5qqo8QRRqSsemyCSoSNtSWi2eSnUHX",
  "key13": "3MuE6aZxWQy8QDH2p129uARFQXWpgMWoY6e37S6Dm6ePkhTiEJe5MYhytYVdCs8w24YZMjpsjjjR3Jzsge2ihKGV",
  "key14": "21pdCPvw1htjwcQnJr4BrwzwogT32Q88azjHJSAd2NGXHLbx9WCdYX463sP77CqJd7Hrg9av85YM7nv4ga8BY1TH",
  "key15": "4he8mtSKrLeKcfnLF526g2pdByhka36a8YwohM1CMxiDCSQMWZVP5iJLBDmFecevVLNVCpFfGFmjpDMCcq16Pez9",
  "key16": "47SWgdc4Cf42ffAoxedJmXfBUb5C7Muwr4Vqbm1hSfbZZGEGbBZJwJHapQ5LEnNY6Ep4Y6WWDFxLJ5Gd4oGwJk7d",
  "key17": "4neGjz18R4M1rqsj3qaSBZDQdvKoLyW6ACDSCMqJUH8besQU8Tz5n6fjEBGJ7etTywR6mMxAnK9ZAAhWjbUDBm22",
  "key18": "5iDmtNSJfKv56HLyeFvyQBnjTipEhcN6Tyz7FveUEacjkDdzPRzA3PiAhd8CGKxkcgdvHgfZutQvp39TDbJ6MSkj",
  "key19": "4735N9uW6PdHJTvikxxpNtiJ1bUryg5o86aXTXNuQBvCe7KZHqFPYvsYADpjcnqveRm78tK7KLZjJTJq2ZFjn3VV",
  "key20": "5UHLDouDv6PDhZhX2PuYbvBGuuJQdrH7HuGwEiLozcwMWLt88yKBVXKyihturY2qh1Ct5BPYEePbZFYK9HFXF9jS",
  "key21": "4RZX9AjKJhEQtXu67VimSm5pQSgWS42PPM1ZkPES51YdUy2suMmdsTzM7CiAxzgryujRRcLk9zcXKKbBygUvxYhJ",
  "key22": "5V4dZGkeT5cYHfeFR4K7iJnrAWb4xNvL6ZfoT4tdLERLRs13Czt3MuyFKYT71r5aTCFAv9XdfPap3v7Dzgo8n1js",
  "key23": "34jLFeSD3ZUZf4X727YRKAWpM32AQrUX41UJPyrLRDSHkKiFYXLt9GXR9qzsxbxNeuJzyymoamqxwJb4MyLESqJh",
  "key24": "4AqaUHpqEy6cUiAcFpNZJDdeyK2LieU4QVPWLNH9KpiPq8x4Rr9BnRaYUA2TKGTAXAnJpMixnuaiEeYbEax72mZ6",
  "key25": "33csdxzwhb6f5AFGFWL7gn39uJL3CyHn57JqZTTZdrLhE6JfZYzhZxt2UfDWrfwHd6W5PkbiaAETTbxBAdpdvWDx",
  "key26": "2t6Foo163QNt9k3hnx85EqSneYnruQn1iH3yW6xhKpdiA44sDC1DvC8MMMRG5ddmqoDRKDAPBXLm1C5AoWY1AaT7",
  "key27": "2dmeMT8NLXoyhRgWjgxesyXZLiGMc7VRu97woX4mVwwMcVtAkRkz5f9zGmgFAvZyJdeUp5Czecre2aquv64Q2QZQ",
  "key28": "5zA7ou4sDBphv986sd7c1axXsEnuaQ1aHa8UkDHsMfKPJuniVXazztiSuXBsSPRwuSa7KnhJUarntoLMv9nLd7eU",
  "key29": "5hq5sSQUQKQBisvJHfQDSSLSrNujPPz6mGkf5AY1zVSjthJxof5GvKJGJZxYhKRA37bc4jAiisheniRhSGyN6ocz",
  "key30": "rgVdXX48KUipPAKY4Ju7aaYDJEvBJdqi3Zc3F1e8LzyRzxbJYEKmkZnwar44Z1KXM9EzHybdSVYb15uFCC5e2bM",
  "key31": "45zDWEszN7wB51dEw1vcKtJBAkW5kguhv5gSnDCmHhsqrd895BC4X9HXP5DZDsxQhwWYCfC9Gj5qZKrLPBDUmvZo",
  "key32": "463T1KFovBZ31UmxJ5BKFnQdGVN1WtEcAs4tVwayH69EZBBLjq6ufTEomqeqHMYypuZnJKp8ZuoFZjVgXWNfqMJi",
  "key33": "3BBVNrqauSr1pJimE9tBgywjEW3jdR2sVY8urnaUtvP27m94thvFSth6TGpoUCrXa3Z4idVHJuXgnbN6Z1YdL6bZ",
  "key34": "47dQbdqBsLu7b4UwBSP3WQxt7cMzwhkHpnVjQnuD8A9JHzN8iR5FeGcUsza2zJfuyMX78Dwk48fQNT7eGjvHNd5h",
  "key35": "VS4T6YjUDGYhunikf4tHaPiHxu3uWBakLYfYgnrEkZevthJVEj1EGyDamYcVVZrg9QbC1DTau7sxGrHdELvqzSt",
  "key36": "Q9NqR2iqDRGWuLtFfF7hUPUxLMeHaDxyG3uhrLLGCY7y7V8EPQcLoQ7kFviAJDxVpAgqw79XDiEEYxaDbb3dtx6",
  "key37": "3SiQ6vrVDWs41VpkRmCAFx7kCvt8ioPJHAyxEZ4gJZ9emgduc3CdUGYECoGzjW1PvTwegJrHBSUdumZ7ziJpqF1d",
  "key38": "44vBmFFBCzaNwtsvgMguv843X2FKQxt2Z44XEVawDSK6wttEUBEuNDoeM6336aCTacVfqZnaCYpZwUK38nG4RSSt",
  "key39": "4u3i53a5zpwwGtok2N6aVkB66HnNwd4bZ1ynPKq8SQ9y2nHsNbpNckREKarMjdJtRKgNrcZq4Yob6v79VRT7vCPY",
  "key40": "4DbTV1XhVyLtc44jKqFx1MaPEpNiKbVP6j9Qy28JSxRMgvThYAQe4o2kfkkuNHyvJ2yDbA38n1TX2CiX2FCb6dPC",
  "key41": "47kDuRp4vePyRCMSMqYzEcG4ahxnx2kFAojzCohzRJUSY6sZvEyJkdFA1rPtjoYvJJ47cmpaiZNG396cLEKgzZgs",
  "key42": "4W5iYFZdnYUqJ4VS7HwW64gGyk5zEmsaxpausfun4Ghu2Rpot5GUNWaDXXr8WsxScqNmRNHLxV77rzNNfzsaBM38"
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
