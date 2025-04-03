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
    "31hwdYoWPt3vBx2biHMrwb2BDXd7RWTCh8fqkcvjr1wXRfQFtpzMDFCuj56SpWbk6BPhtMNwHtKQysjEqFhZLmz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bWyBc7KcA7xnuWWJZSqwCczxJ8Egx4Fwibs5auyUwQGqDB1PRmNgdspQYZdJSj1f3Xi51HdBgHBUwxVT411n73s",
  "key1": "3EhgPAFe72MAsGzXYgrF8JNEigDMyz3N966Wniqda4ZufzbCZdwdoZt4s3HTEko6MmxiiJUSqPx2oiE54eBGgYtS",
  "key2": "4zZH1DgRnVoXVoRaYcQ4wq2JdPvAZdhRbf7Y3ST2S1NC647L2MXE4XcnRcar3uNX529s9Z9YtuGExByWsHvVdhqH",
  "key3": "hJ5jZ9QUAA5eCP37FzQg5vunJoQuct1szi5cwiFHcCdtgCs9GJBKoctZ1Ji4SGsdKVkXPjRoFkd1TWnhxAYGrNZ",
  "key4": "58d6dLEWwMnYjXq5JRodZeWkRfVtKEbSzybMKYy3ZqewNCWfeySRQLCSGACBrvdrVQ5KFWGyYVCjU1sYp7x48M73",
  "key5": "fSsJxgjAHuLSKn5kySTyveugNrJNcEycoGJ3uKXu9fMPtVMXeett6M2wwmY8abMbHM4u3UrAVrS715tAjmVf3qV",
  "key6": "2TcvhoWPU7aMs6RnUqsiPouCEoiuMfsmskZCZg3199YLma4pJyCswQdWAcAfmPKgYWXNndq7jF17jKsAWuf1B9Bf",
  "key7": "59HfmQhZgGRyvYTdGiikvGTmMmtmsW6YsRU4ch5t7JLqTP1pT4d2rtCLvsPLTA1zifAgP6qQiWCfHHLzRZEhxuLd",
  "key8": "5H82xksBEseyocHPAEetUbnKYVZmYzWidRFJRbudnqSkuR7vdpRsqukuMfzLSTVbh3tLgsKt8qJ1peNBaMzGwLZi",
  "key9": "373huPtS3wVzptpQGjY9ZyhiNkrv4jNBYj3V2havKAQj6ELw1yiWNsh6si45Jr8TmmqWdEwLaeCjfosXPKv44gEz",
  "key10": "kPJ55Mt1GnN721Qkfacxp1YB219iUfB9vhTxk4JJsfz9LShzGG3diPygFv42HeYzcQfKYn9UdQspiDtX86UBKVD",
  "key11": "2CcDuKiYejfna5XcToDkbvszTZ39LnmFBB8t7eaQL9Gsa1G1wr7chq4PJnrztNSckPaniURmBRCz738TbfCJMEgN",
  "key12": "4u1RyLTDFNQ6pAkBzfnyXn2VoMQUXGYHTiuDaznDyV46cByc2Ziud66FAaxq6wNC2PHr1UGGMHi9T2ELbjL9vVqC",
  "key13": "5JorqnJ9EV9EuPradvp95H9bTiM2UAjY3ruRuBSHtLuSA3xmCjJbCUKBqZNi8DzajxJXmf3L3TNxJtTCMz2Vj4ou",
  "key14": "2UAUPWob8ttTkz8XNitKbwrqgC3cJYZo5PwHKgev37dkv2Ui1X4obj6ASk3NCKtvoADjPAVhR2PDU9jx4GZqJ3Rn",
  "key15": "2gto8cehNv2XfmL6jot39UhvUx2ZFyKMumHrMRRW93pbTFDL82ac8F8b4M5mMb8ZtzVDvKZTueBWLFMPcKoekd4V",
  "key16": "3GY8HBfmr7XFDmceJ5Gvvwz1TMiTF5s9o95h1Rt9EacXmTzDGkYv2uXn6ZTN7gh7Xp9MwgkT9d3To1KMtR2S6s25",
  "key17": "2ciYSqVsAPX5YvQvDkMgZQcwjmiv8CvqUd3thfTKJCK37ppS4KF9fpb8uhtUeYo5re1FCzcv28vaZnmvdb94kdaL",
  "key18": "2rvVCxhdJaPGuF5inRxy4vs11yAQWvBYg3BbhDp8o97ym1xeR3unYMeFL7nK3eyWG8xXw6NxQeS5XxpAfjCexf2r",
  "key19": "QSKhVVZWNEX3a7FKKkPCte8nTsmAYN1ZGton7mHnAT7i1z1DKLbp4cYMtb46qem19k3Vwzbzh4YccjSsdGEDNsV",
  "key20": "5sn2Kr6nD8ikVufQHMioVKVvTVduGQJdK1FRKJhdZcMfAxHmDC3nMDc2GUfCZry8p36yda3XrzJcCcwkjm5md7nJ",
  "key21": "4DbNNd9rjCYq3PnAp4ctVYgUjX6aRwZTPsY86f1zgFCX3s4q7NwFDnTcLHn8yskD2BBf1DaqhL31DhGZ3aMqHp3n",
  "key22": "2JxDwU473HoEQDSspmoZGQdHq3EyMp86oETbQeTMvDWupLPgne7Ein2aEo1GeNRURz9ZW8Jo8gDyUsy7DbPB1EX9",
  "key23": "37dJU1quDJJXQ8k2GACrQ68SC2yPR7codpnwextK6QVwtLYy5xCtpmZoZ7bsvMqLNn2xJPjJf3yuqLsmry8dJD7P",
  "key24": "2Eqf4JJdAzBPQ6cRvLV3H3Ckh93F4y2qz3chXhCxWKwsXN4wywQGBpTY2eApJqivQb85uMQewmYoVrryM5SUrUT7",
  "key25": "5gwjNsqnkkogNUz2j2RYmQoc7TxqGL4wLikd7STyddeAnwi2stLeFSv9UKVGr5JGYmR8U6pKqCmnqEFEq5DEjCVp",
  "key26": "4ygwkD9hVoYVEX7pwEVsiBYgDX77gtCLWckRXgP55fqgDJKAoZdf8zXSYV1Ghtbmb5tQVZ4ujp9HJuZ11VEpZ1yE",
  "key27": "659KMkT2DdYBsAsNAP1UuR9khpm9L77ZwKSucDBkMpUYHaZEP2fiTuQSruGMW6GwffttScDJVrAdbSxt3piVbpfX",
  "key28": "37d8oXDcEcjUtsodnSTVyVi2rzt7aA5KFiTMkTpMA1eFCRKuFNo1oSV19NCXPKy9p1Aag5iZ9M54Ty2imKfaf5nE",
  "key29": "5gXtJ61efyXgRhK5kqVAuimwihzTpQFXbZUefiP3wtfzwQrb3LVtotykgUEQwbtoy2otsMhBLDLDL7GJeu1eyoCk",
  "key30": "5sgDanSq39V7ES81kHgexQjd2hFKmVvu22Lx3gXcqMmf4NLe8cadSm7afQfDLUtg62YpdKm1ALHkBtaMdTGSRhpb",
  "key31": "87uxMtu9WNcAnhm4f35DNHs9y5S53WCti8Nj1TTgGGQCZcKMypL6JWHzQ8C5QmH35p9Y4AMehzj6oqDMWUSnM5b",
  "key32": "Ee27XM1pQjv9964hZqWCm3Kj9vVo5W42XH5LK7nYxg9ZJXesp7b9JA7CZ7bzCN7ZRdkQXCwuYsshzknPkVFZVz6",
  "key33": "5Acbydag31N3K5QawD48qbzLGUFHKRwxTxUN3SxJhe6vU4n5qZbZSoubraPCwySN2aTjmY8y7SxdrV99cX7DnUs7",
  "key34": "5TUEWvztQtQ2VtEgxqam6wc4scQGB9NZj4Q9NdSf4tYKdfhi85dfHWRtwoEhTi3MP233z5DkfNDxv6VbQCXeCNM8",
  "key35": "5DgHvNYAFWQkHFeTkq1LYJeHegLYXLJ7sWhG4ib58bQEDLrYLgzFJ1xu1uvuZXzerxXYcFgMJJoKxmaGTjwCgiXX",
  "key36": "hmsRdRVE9GHEAUjquZc7Du7Buba1eChCfVvG4SxiR2ThEwok5PpChA1m2Tjpzm78RKmqwkUXn2robmPPzh1RcKi",
  "key37": "3uoKAqj8J9qFvEDBGXWkGq28ifoxHcDnib6EKpnz11jQr7c3jT51hZkBaJZRfG9VDjqjSkezx5fncXZ7cRtAPoLA",
  "key38": "3h2nDf2NxE4kcgzBXKXKouLGSZqDYkhg9XGjiMzk1K82sPChaGWZprwaVkKzj8yArzjCYQzWWYabzj3bFgTqKBmS",
  "key39": "2tsJzDhFsV3pEhDTQDdUFs2H8V9S5GD6pRYafp7yymRUSbSqfsoNZ6Zg9Pr6F8sWiPqRsxvJ33qshf6rkVh6C2MT",
  "key40": "4jFZqA5pehAREuThmhGcSDyYcVVN3QFdZdTQ2RA3esNxJmCkaXF8vCCxB1cKaTQn7TY6VF4NU5aXQvuzMCjKVEbk",
  "key41": "2UuUFjZxUV427qAhnuP53aR3Nrh8BTAFTncvVPsjRaJ4EF2dET1jNSu2d2ABJHvc4FpDCnsFu6PdX3EueGnLsRH9",
  "key42": "N3hegENsb8PWa2uTYExr8mTRQw57xeJxdByapB3u4AvH3q2VAToPqbGQyNmAdurUbUKWTgmndUJrztKfSNhXSqm",
  "key43": "eEVYAyMMtL769zeg2exzwzwr6WwFyiMQScpYxjaYjNg6kvJFYaLPeQ4AayybPwyKwqYt4HkVcg8YktDgYRdPFJf",
  "key44": "2LXacE9NkKu29hgLoY9vNBk2NoFNpccKaLqUS8Gzarwk55sXfxmu4JKShkKvdCPX21MkYcyAfbFeRoU5t9LCraj8",
  "key45": "5ycaVHsvoKpuxqrrT8DK7AvbQvkSYQPgkScG8N1ZmWrqtcUySF2taZjcXagoA1s1T5SJmLgQhvE9woGuX6AQkEtg",
  "key46": "58nKGyCPYovRiCq8bu5cvSeG5AJLnzb3qkHFiTQGLGaxduez92e8q7934KVUvVyGjxuijniywzpmnsaqEzsB2X71",
  "key47": "39m8mNQsWPXNNgcccBjLmVHdd6fRfaLGvrmkcmeN1PHvkk1JzjwV6ZGcW1RgEN2HDCCWms7RVv1bTbNMCHcEws1h",
  "key48": "cFRdLAjBCy2symc7iDhUK3XB2XQpv5kG7qdFgu8hZkZJV6ffMasemAfGnXYbKEBcAP2oe3bE25QQWVhR7Qh37Er"
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
