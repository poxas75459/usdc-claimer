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
    "5TcfzEs9BH2bgHYqDhgy2iHWojRtYLkvKTSS9sL9AydchdnfEAs8nCz6m12b5BwEi6x5x5ALQuNJjxmAen2usVvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDHWT1iT69QwVf3aqSSWZG3dW2JvZaiA8DkbFWGjHih4mH5mKUeX6QeCMeSJ2U6gieSVUXPAJcr41afBG1HdrBh",
  "key1": "rM1rV7PV1rbQAqR4JYectbKUDWp8KPYuiqF1j6dqFC47XJtEkUygeVkCH7GjXSCsXg6DxiEzF1MrMCYvWh5VNdq",
  "key2": "5MQZ2cfdDio3TbFZ3QwTwRxfe9z5FeYyYkqRZ5bbf5yPFBGV5cmR2LZnqTARb1fgV1UbPkwUpMfBjr5tRCTqtT1A",
  "key3": "3koLHFPgVzQtsGz6ZKXzyG9Uz9j77PAehWDyAKVc4geZYjxDznBhe453Y6adaDYxFeVScRn24dpoATvHhJhiYpwf",
  "key4": "56aP24qJsmF3ZdTkFgrZeReDr2z42z8x6VM8jz7vAwp8LpbUvA2JdwY8Ytz1hm6DB7sJRe2hcQJCruounmS7pN67",
  "key5": "5JgHR6ZxCXSdpEsLtXEYRqsZvVjhu1xbziauNLrYe9KJReD18r4ZB5qfyo8rDNokpBV9KLwon2czZ3XocMDptiUp",
  "key6": "2Rn5VNA1mJDAbMtRm21BSYGAM7P7nUQPZontovH64zmCD9Nfz9c2sVtxar6i7w7BFLWoFWVcjaYD1yRJXvJqbCDB",
  "key7": "f9X4hTyqJrXB8BSx19uKZ1FdEw4LZz86vXksM6A4DJFasP3v7zik2TWDcrk5GJUqhv4Kgsx1RtaoyJLjwuH3py5",
  "key8": "5VMVvRJLQaS3oadyv1S1Sxj3rKMdJtaXgtoSbKk9MsULENCcte3R5QjLwuAQdbDMKME2H342eQeaV88fRjM3Uxcn",
  "key9": "4WLvDM8agqRvDX4paWpNV2H5vceUT7kUaA1nKoB7gTAMWTzVy1ikQLyVyemAu3WUkL5Dg8h2DNVd6zgbrrGxpBs2",
  "key10": "TanQD1yGvGa1j9HAuERhCQajBm4jehwjaw5VSQsJXggSpP2c33G8NoDee2nmx4WchnXv3GzMvE7fLzEqSkqfQgg",
  "key11": "24gNvpMLyAeqjof9i6mYETcWxFMnECFpCcEDXQSPEiPRFhJjgWmhKZ3vxU4vTwBhA9zKBH3LWNs3CLYzmRawf4hv",
  "key12": "3WuGLvktMXmWPGQfZ1Dk7SRMRGgVk13qCiXRoDtCAbNk1qBkFNbnTbMDrvKmbsutoFXsEbppmYC7sNbmw7wtjv1x",
  "key13": "NjDJnEmAncCGSrP8xzPpVweU9824kDGSHDRu9joSv2JFEqFEK8kqedNdfzaX1oioN5YrBh3oynsRcCBHBk1toca",
  "key14": "2Wr5NTK1JVeLSGGxyLE7tn6qBSBLuZQtGwN1YAxVZ7jQ39Kh6XKBq4aqX7t8zEbFSC6JBhwagC3Ni5r4qF1FGCue",
  "key15": "4AFHoDWqJkLayCPQ2AcoPFWEW3D5GwtE3GwMtbGApUqMrREEXVU8ZBUEjvQoxmrkjhg3sjJiFXmxoACFSkbVVCii",
  "key16": "X3iJ5H8bx33QTJmwNGNSZb7bc4ZTbjLhECzHZJNmmJ2Xtfp1SRzniENhhaeXKMkHsw7BSBqJAVBP61xVdF5a8nC",
  "key17": "3vmbPssVPZR4uzUzjcChGbZj2yaWZrpMmo5T2xu6iPCXek4HZu4iyUy2Ea4UjnDH7yVbxKKmnPQXEzTRZCjrV6b",
  "key18": "Fe6mXJFVQYhuxMmM226AskcY5b6Go8hNKSLUC7Usf8dtHb52HyC8MdW8vd4sF4FMjh24qY1aihRhpMXHP9op6hx",
  "key19": "zxY6ykru7Cnqt55abh1fTJ3noL1hMqt1qWUqdcGjouLPferEcx8dVUEvhoCFYkFvYmM5J838pwFZSEcRPpm4tyJ",
  "key20": "3uurDkSEpD1PWbKVNXJzG1vXd1impVZCgpncWztxPyL3oV5brjoNnL3uSUxqpf6YydLzoKTWyJJhFhEZpYDxHgkh",
  "key21": "43wryNVnE5TAPuysd9mejvgwbuYMrkt9kkuFL9ArB88rpn2vPktruNP5tjfzfMsaYga23Cs4nKAmMv4Mu2VRYvdW",
  "key22": "2xA7jJ22tj1EexsBaSDbnNouteeLbcqg85w1bLXZ8bYm1vqMgtodmsgKBhZKa9Ra7uumxaS9XB59sCcScEQdZUev",
  "key23": "5SJD6nQFH9qvDDoZKTCzDubaenPUE8wyKkhwbhPEKzQFe2r7PHrUQJ2zQLLR2wUVnQyrcPXrus61PdbQ2aJZy5tX",
  "key24": "cRv5HSP6WENFUwurdUZfNv7VnDejuE6okYQb8T2VUxM6FGawnDbNLAhtv5HbWdRA5qM8Eb7ECKh6gbodZ8Kewh7",
  "key25": "2vDfcn3ipqotya5oQ9EiWqjuHFev4yj78rp1ssbGdeteuSkV2waHtBm5zVMA51ZFzj3M6zXveHkgw7FQ9iPEGbab",
  "key26": "32ywYfg2Gfm193fuC5NGrj2KmPhjtrv7KDk1Tq6CL8H4ArVMG7s1ZYtCzA8yorgRDCEd245ixRGGxAvmAPvHN4yk",
  "key27": "3VabGYMn4iLNSRNQfFYEmG1eJjV6FMY13CGJZNgcXRB7etC6AUmg3hUMB5V3FQ8xyjZzGLp1KgR7fzJTrxjPAMDJ",
  "key28": "4pRnKt9sD8poigojP9GfA997Y4LM1sJNYbegpRd2cZtBTaCurEHxgZXYVTAvT3b1TMgTTxDC3WWooMESvznWm3Wz",
  "key29": "eY6HmCu2aU4PUBxAJR1fKJLtyy8QtNmaBRsWBYQijCZzbvCj6KhV7GEmcGQxyfdqx57ikZFdgTW4bSYEC83tmbg",
  "key30": "2zyCYrYGJUALakXTZd3yrYq7SifUcBoT1abCdp5R5rBzBqAETY7mnBjAEP3HmmSV8ro6JHo2UEk4cz7LZ82cYzNf",
  "key31": "2yQuh9ct2yhPK8SATzcR273SDNRuMHHH2SuV93nP2qqTQhpjLgPbJ7H8t3f33DPztjxypDbJk8qApahcxaJ8v62L",
  "key32": "62PBPZ9q6riFeE2L8CsBc9Tju2NihPhKG26qNhSvi9kN1gtAPTkBTiQiRVxWi7mGRmm2DfHr7ridgRPLSkJ7Db75",
  "key33": "2CHq1uPn3Mbse57EsKsxSnX3P8KKq4rc1uLF9dQVHcEnAzaQXsfthAuk43jz58P9oi64Y4SjaFYPqiQDJpYnREg6",
  "key34": "3ZXDjGM9XSPWDYcBTAPodvD8SH9WGdh5rZcti38m3HRWH5tW7ufAHhfYNep2rZ1kCZLbUPhNsKYuaAhpLH86PPaV",
  "key35": "3wh1xxX63MCs5oDvqtfcVZLRxR4L9rdrhNYjuj29A9pbgRETBnAZ7AH23sn7QfD3UJBvXfRDTkmLhLYvXNHX4KGz",
  "key36": "4ntRx7QfGJeZLMZWHLvRLsL17CRRufRus6oWYSyUqaj7otEmXaYDTFepxR8gdkMMkTru16yLiJ2jCAQg36cVRvVk",
  "key37": "5RFN4fgVM9Utv9MryHUyG3JYrkdDMu3p4DLPG7pNg6mWvuKiNX3U5gHtf3YWZLtTg6bydfukN8q5AgGYfNVPUPse",
  "key38": "2UGMGP9Y1LYtRhp9LnM2JcXg6tRgjTqNsLf8i3i7DFd9TyVxv1S7XzmgxNMN36gXK1kxZPZdLJ1QF4htWRQyx1sM",
  "key39": "3G8ggNMJ1yBW1t5DxZhMAyNTqBhFArBNeY5sJGYSfS6RRkiT723AeNdSFdEzWbWQkbJzFYJLUXB8R6RsE9CXfNB4",
  "key40": "5Nw5qwLmHUwigGdVyP9urNAY2rsm6wJ1DkmrHGrincW7dvrwoUHcgJVqnnJmzkQKHoruGtpPXW3kDRQ5pv3HTzgD",
  "key41": "2BYY9srCb6jkxuby4zz8PjUpVoUJZpMa9d8dCjk7Dn2Xy3x8A4FGDo8YTC2mXZUn7hP37p3qSdi7egcYJkef9aYP",
  "key42": "3L3F8jBgKQQwZF8R4JraoxEawzkweHXKLCuVrf5oZvGBVcLUWiQeLRTBjQ8PpKLRAq7MBimvojRWt8mPXnYAhFtV",
  "key43": "2FoYFff45p8kpY8jFTGR3jDVUyC6G6oZrX43C8x8qcgFQ7Ay85HiqisDBeL8faDHegNBaT4ahxXMWFtkcpCMn8nx",
  "key44": "4aKra2G4p7BqFoz3vwV7Af573qe2eiHUQLjpDfo3szsvhniRdvbR9STtk6DcXDEUmv61mFv1NNPCDNhRMnMgamvE",
  "key45": "3vqE9txLMXy3nNCvs9QgoGEq1Yi2YfRhHakrweY73cgm7wMyWCR1P8RKezcFDNPZEigZ5GgnKHqir4x6N1RhvgJK"
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
