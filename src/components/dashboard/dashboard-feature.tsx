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
    "5sMGBiVSzG5fY3uif5MyQrzR5KFJtFH7wvCmX42x817AbWXHBUSov2EWb8CwJNofrR7CRpUF74EL93At9QYz1pZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zk5V3hJ7Ei7JyoXMjviLLFEijTBEF6wauWbHjgneKvbuCDaEZUwbjCdnUgQCsJNSD2NxYJMAN2Bigqrw34DTMrC",
  "key1": "3eH8SDDBCnmokcUaRsCZjMLQpBKFmZVFxemyCrxVerXoAkdD4Ld4NZX2i1HyAaj2cnunB8HuZ53opND3GeTziWFW",
  "key2": "4z4zsTCHMwtwjttfiTvqfX41beVbVn1sXwz3457JyEXbxzdm4Vb4JQsDnHr1ZBiRKYwR49EEQ4VveKqoeP9CaWao",
  "key3": "gwKxzg1vNDnrrmXM8oSekn5gGTmSaevFbz8a4wzLDmKBzBWx5HfAwfLzr5LWcnTnwfwsw15ERsrhjgN1mLyui9E",
  "key4": "2TdUcFb8SJ2EtmPLfeUEBWCfKxpa4LmfceeTtv1MtdPjKJZuuKpPMZs59AmZTDTzPKUhikmsJ7Rc5Um8dcwC2XXM",
  "key5": "3zmnao8yTgwnrefJfQdEoAHuB382cTFFURjN16W5yptZydE5SaPx25HxwfwcGJpuxvcnduhi2S9FHhiT7SKEBqXj",
  "key6": "2WFSh9YD2wnM67tQV5R2AWS2hvaqRyD7jJZk2NmzVPQEi5tRXHy2Utw5HVCEzhwrTc71AY7eh1eUWpTdbj9JHKpE",
  "key7": "SvZX1kSMZoRERh41t5GFGZx6gAqpSmaTCBedKkEUEMGaSzEDfxz85sMhKQF71wLMUYNdM5s2yrzRoiADbYrRC9o",
  "key8": "4e2c6FoS6zu95n5Pm6LZT8psxVdS2xEkRR92oyV8SpEHQUsFXUzAA6Ybd8YVGj3Aj1ZxYFgREbZqoRHrpCAz5bj1",
  "key9": "5H7HShETB7pE1jxEF6xgaWuG2AsCgJW6nvMzKthnfkQ2crVwYENwpQi1EjDida3feKQHJuZ4XMBpXTCnre3qhwbF",
  "key10": "3vosWbTEskEbvgnVUUD2q1Fm5rceFYbrDhJ1nHEty1vtDGjd4172sHETvZBTnSEvs5i4pm6zKWtUWR5hhiEaZyZt",
  "key11": "5TVi9hrJAKXaCgqPdKnQig2oTSfjay3x5kHzYb9Xkj2WHBp4Vi46cGmaoq5P2B45od4nEA65sR3ypFqfL84RsL7",
  "key12": "4bg6QMvwfKqR1orYuVmtgLkiq9dys2Q857pyzmNUYF2F2wuQZdyU8VJG5BZUhVYxEhGEMbzyttMFpVNo8XZE8mCn",
  "key13": "3QWJERrFPBqFuq4du8S5hBgNNaj2gTnTDpJKYun2cdBQcxRypWYjd1HZrf3KpvaB5qA7ZRemjeK47GexFSdGJ6oj",
  "key14": "2EYpKejKgijdBYavbX3NycsCjmv7dEDcH62nQV6kB7DSkwkJL2nJk8oc4HTj9SAJYpK4MAyou3RUiooQ3XaeKJii",
  "key15": "5JX5dXUr9RLmq2NezbHvPtEu3uXNkxhgQia7VwbZ4q8ZtYxvuaE7eHRx3hsk1PjsreQACrrg97ZUbSG18nEy1fs2",
  "key16": "2SnkTRqV9WGcwcfZEoQnFPSwZeEcQbF7dHnu9tYE8FXuv52jEwpQcqQtZmHW37tWsACzkbE6hhiJGTfxobTbxGwP",
  "key17": "4LWygdtPa8YWPtSc263Zo34jtrTdnpX2b1j1Qaxu6ktXf4yP2YbjBCtQinMJGrp49AubUfCUVbPFtuZ2suXqVS4X",
  "key18": "2XcjcLGU5sTrj3tRJD3Z5uyde99miweXsS8oepk2pC4mJ1xh1NHM3p16BDkfxEy7rQXoEprVca7s5BVSbrWVyK1C",
  "key19": "3rSX1sE6VkLG9jwy2mNnm7mnMkMHww4V15cWKfZEGt4YiVerekxx43YvWYyRsR6EUXikmrv9JaFv8NJ61uH4P67Q",
  "key20": "261JNFjfdwPWtW5fFnz3E4i2q2at8pCEohUaWFmwyfvo6xUQT2z7uejTz44eEPs7k5t8tRjR9UnkKDUGqrXb5n8Q",
  "key21": "5nauqXjLV36xJhMWs5LYyg7QYdrJMHFuNk4fQxS3aFxTzajk4PXMxH18s5FLmWuLSbyByv1EAKJopqdhJ4j3knY",
  "key22": "2vsGYLkdCaA5kr7amto84TAkgLf8wNTNfkR1s6JZfcHA5LvYG3xrzbPEWS9jJNscvf6ymLycSqB5tVLmBihm55eE",
  "key23": "3Cgs3TVhbn97YJTps8i3M4LKWoiDT3SsRodqGDt6DKPvF2tA4PvZAgXqmLyDmbsvDz2MvDg85HJazJxHJBxjwxjj",
  "key24": "3wDNsxntcesRJrMdqisLj1bQF7zuchcrmRPYYfAdTZLy7QqXZW9RkjRabeeY5Lrc5dNgDy36pBcTVQCgqp7gDjRs",
  "key25": "32CkucGfSGwjonJMwKV3pKREjaweSzzurh8CrGbvgTVHB28GBTciponV6QbJ9kAZtfMoDq6F9WdQbxEQso7zf5G9",
  "key26": "4MzNGjeUrn9hv2ZGkrYfuHrDq9y8FXGKEUWEA3fGYeZ2dn6NLjaKBCEuYJ33WP5uafDoPnzYZhUU7eVFph36Kiky",
  "key27": "EkgGhF7gFq7K62RURn4M4AYY3KoMKtCdYRhYatH5b9fRNQCpJnkAmxsixTorAC8maA6VamTgCgBJ3wh3qPniTbY",
  "key28": "3GQ4SgKJkTeqE7guTcpLsG2uQfcV56Ww4NVysoUgXXK8dJuLvYoFSuNyY2koU2oyYudHNTGxs2AauAoF7zgHRghz",
  "key29": "3wtS5kp7Zbw6QRJm7w8mhxV7ijcQRuq9hZSikUviybLFUUtsfvurSgXgmFs96wWkpgG1TqV7MgczkBahdjbNo2uY",
  "key30": "HmvpTG64RnSS5vA53KRZSa2rxGi8iJ5XCMdTgis1Bxii9f6qBAtLHoEcX2uB55KnJgecs8zcc2WgSs5MijJHWUx",
  "key31": "4N3CtxggkS3z8oEnngk26SqMdFNa5uziPEBGGpboZKQzSkKNWxqKLVeMvAQKJMDQy9YYMDTRJw9iFkVyKkBDHpEB",
  "key32": "4AnqAA9pZcwkt9NgS4J7FnraeLTQK9We9cvkSVAtGQnjunWj3Ke7dpRoHpDTq8dEtECLkduf54U4p6nUPNYZawhj",
  "key33": "4iFapzBbeFbhYGBFZE6eLDD6a1DPMq69SwCDNjwJ1NLAJ8datS3Qbjt8f6zHmNCe2zKa6Bc5RGvMfAvNsiHfL5co",
  "key34": "5kuZG8fBd6MADPgbukaGuSWfXbMVVXNzDbn29xE7zrWgvSWVxiFQS5Jm3hpbY5x8D7BYPjLwTpHbiJVPYFE1B8sq",
  "key35": "zrid9bGFNYxhbgC2YYF2GnDKa6rMZGC8gjbBiktgu3auYP66VkQVtJUqt8W1U6k3GKRvNdcnRv71AqXWxvnmWbL",
  "key36": "5G4j9Yf5GsKxhjjD6zAM3HiBrdAwfSRSQt4hquZWz1rxVmBDReqo3ADA3ospJc6rBwoJ7amzY56reyzLojF2jq3j",
  "key37": "3ANNg8rF18PcEzFpt8dbQfd7Ax54BTbmuP5BeU4Y3a6j5NhCgxve3h1YgEF7xrVPNMhjjBvXuNCpK6bVT29ginxq",
  "key38": "5ayWHLhD9zL7seu4sp5mTXn8HKM4pTtY1Eajvy98NtQuM3oGpGp6oJNvDvvTs6GkSDevKryFNspYZscpM8mSL9bK",
  "key39": "2aqMcWh4xwbhRkYgwNSRB7YHcme5msPttba92wfzFbnEJUWHphBRYuZGcLjXnJdWTznEb6tZHTZyKAN5auJq8rHQ",
  "key40": "3FeWxKdbLchFFBG7ueuRBBQUCRwAmm1FKPcXs83rqNy1BEeExLRu7HotxRzk1VGghdD1iXyT4973fPjLFfWCitSn",
  "key41": "5JnMntRpnaXjNREJuM2CRWHtvK6QykFvZ4Gh36rQw6XavFG5twMMCwHwSnXUgmxToB3HNNmpJaUvpSHHbsRf5Cmk",
  "key42": "5Gs9hY5wEV7gbLxS7PAHStVPhmpxTurJsRJUWFTnMBGpBK7QurohySrrxxg4QaHCPgjXZDb7iQK9G7bocr5yYNGq",
  "key43": "3fMh9t8CAwWFdCLVyoHrbfq3FaxAcz4DHR4vUb8TNypmBa62XpxtNT7rGrLKqH8D1xTjGYbTnJhofMUeL8iTSE3d",
  "key44": "rxgYr3nbQeSsg9taasUnY8tF9SLgmh8BhXZFdPSPfPb75L6QQT9TiBL99ULM2qyowVspBGesbadDP367YnixcA8",
  "key45": "4utdx5Wia78aVHKxYHNpiALQyKYH8GtK24PRRxRnpSRV3h2N8wY8AUvW3VgNHtToSmZNyftC4DkU2LXUgBsJDoPU",
  "key46": "3EzWpLStFjwD3JNzaUHkz3Vg7pUXbGKnww2LcPjhPMsUVgHGGktQTYsyvWvrs2naXK3JJ88soLfiXazoJpesTz4F",
  "key47": "4f3BMpN4CanCj3Fb5EE8tgFDhruRbZ9cY4z261FMuF2egvdLgAKRMhSYyGfQ3dR9V5yKzRA1oRZmdhAY7owBr95a",
  "key48": "5Dam7JHxikSAXRrLZbx98nMdYnbfpK9NKXTMNZvaBRuS8brsfQbXJYHqMC4zUJdeRAJzo3J6u1MHGcmK6Gi5ijWm",
  "key49": "wFP3iimGnUv7ZfPeEHEMVPFDJYLntQVzuSNMtLmxWXX36EoQKi6hjbKRoq8oP1jjixWXAhgoqFiK9AhfTATXKgx"
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
