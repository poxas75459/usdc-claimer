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
    "4TBqpngJH7A5pVLKwU2AesDBxdNfAjVCYNioKBC8wmnSEb6xmwDEKSc5BkjGkZJyHKcmLcZjHk1RStHc88kDdY1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mvnLB4xQNwoUu1PYsptHQe5m4nwHaN3LiZMYNc3UV5mb5i4o5YHRGJd2DdC6rtvaunzwbmT3YuUbev56CV2eVF",
  "key1": "2F51ACDvZ25WkLX5d2uMs7rQ5aDbxSFRacdJbaeTBimbrbWN8Sdd75Aq76oQfgUZPF8cbaAbRyWLyS1dBASbpwjm",
  "key2": "5utUARgmQ2R5774FYm8jM57ViDAZj5bsgFwfMmgepDsL5LNrqFDy5VzcoLSJ2fYKMsLeYjtLgQwicGxHXpAFKdST",
  "key3": "5Vau8vFxWGLvWqG3SjQRq1k3jdcqQ86dAnZgHF7Rm6m9a6GW9rqNjwFnfgEcnjc7Svg4Pbrtk2dxtJzbaYaCuu4x",
  "key4": "3pyGxbqeS7oboW1XSQzX3CFtnZThGGZF9hCDDSkYUVTPVSGC361BzqxB2uf2ck4azERVqfR471256Ah4V7ZgkGcG",
  "key5": "2khRrWqGjYL1whnhxGvTZQxrYJfWar8hQcRS1ifiEJwyKVo7rw1kM1LHn2m1AbHzrNTrcYoR8QKkzKUmDkDvZPPu",
  "key6": "4UShwDdmNYz6qhb5S9ghBW6p8FZiKWZEnP7NNQ4mayjbD3bU8kvjDsPoFPmbkSoZokZbCuj5G7fMgviTqioeKuVs",
  "key7": "2RGfYCxow2QhtTXYYSDSsQyvjX6CtzZacWYWzzMW6J4QxDjM8Xqhx5NZov45nA1Tzs3PFU1KRJqMtDiumwRGVBDH",
  "key8": "4oqmsV5JBRCRT71XQpseDqXngoKEgBwGuursFJYpUNWGq1BVWY7p8cZFQUYQ5b3Kx648wTgV5wVbhwYJy7AbYQqh",
  "key9": "411ZL3V4y4Ft4iwhVFAZpfdGivAiarSuNhgXgx8LXjznotppTkTCMEeamzKsNQAy5fPXw3RsTufHVcA3aUPBc9Ux",
  "key10": "2v2EXYtcD3WtHvMProxKvB8CBEazy46ccbradx3emAX7Zcd6iA8aKHN1EMkTnpmPUbyKGfCUPKvbThCJ2Vw3GmrY",
  "key11": "uPzieNnhviKGUnxsDLK8DxPkMPrQeD4Pk2NyjC1U9xYdCsJo9Y93YxsA1gpxQwn4rpxkxcTYUZUTbdw4cQ66Skg",
  "key12": "2VU6WVzwRDjHJegu1ooL2uvYfor2gQuB9zuVTuDHc5oMDXv334GmSJNQcvyATPGmGUMa2pdhxdjbkw9on5aig3Gc",
  "key13": "VrvQtMMPjSJKNK6J9QcgfteVXiA91cScJjWckooQpGeo4xVsxg8dqnNDiqFddGZ7wzv2TZvxB8VmHqeCppMhy18",
  "key14": "5VfGE16XpALsHRxeyVAkn2p4N29EC82xvudFK75E5QtoC59SVjKugkPmfh73u76qt3ARNqYEbh3g6TYGZLjtPyKg",
  "key15": "8cSaouDwcm77i7eEWwFxBJRQhgpAYD5eumJNGTo3wHfHiNHatxZfNMCQQi5W7a9tNwAozAfkdV3LSTaxhd2ZKVB",
  "key16": "3jasSEHSWjvxZ71n9TaMfhDXGb8KRvPY1Hdy2sPB8PJw4TS4FCuPSx3hv6GzkRENso5ypLsZtkE5oqHsjVR5StGY",
  "key17": "LMTFmP8rt4WyU11XVkSbV1icdGU22o3F5XyBDr7hoGkmu2EWZn9YP7CfRsBN7sSC9ff85KPmxPNKYCaLKGkpEQL",
  "key18": "33Kbs8QRLQ5ZPWVLRiGQuR6vyoBskUynXr1W7CE1tHTvTrfs954gGvcbiJ2LjpXDyui4KeRLbVZcepfnvxM98axg",
  "key19": "4vTyivRm8FwhVw9djuW557Cc4UehYiM66B7aE3G6Exgqr8QRP9WVRAtVogc5ntMoQN66vfjCr5nQhmJj94Csd9gi",
  "key20": "2nghnAYYzdvdGvphPsNHW918MzW4Fu4nMMDtXYCgAAvLXMqTxNFipAn6sYQEhCRi5b9G5j3sP1RDU6DNbnQ1SPAC",
  "key21": "3MqTSs3zzr1rs5wLAFjB61Bj2Mg1U6DC38mXvtissxChYVrSF3DEQjpWUJP6k1SYZHCqHM5GAQ2MhwxgYbvj9ZuM",
  "key22": "4sHHWaebYebfhqqhFo3shfh2yTKFTUmQ8Du23eUKyEem6qs1BiYg1Hx7W7ApHBLVC4AuWEHgyEoKez4LMSBjRtpq",
  "key23": "2jCoW8CKZ52q1uLgfJJmSrGPkNLfMU67c8VBeBR5oiJxPcYFDaAMvGAgMNtCYYUjvHZjouqSo8e8sQeEqTR7Attr",
  "key24": "2smfEn9h884z4yD5qAyDYgLD9FvLZ5CKWRAAcuhfQwPvZ474x18jwqz5LhfpyggkKmba5qFi8RZgtyJcW7CwfDBC",
  "key25": "4e5iNXNWzLG8euP4fFZRC4GRU7Hd6YK1d4grscJqVQDuxpVkRz7C5zwmmH9ZvSE5acs98HJbvkorkcUHWrNWSUTL",
  "key26": "2HeyeEvLebsbfuNUsKrU3MzgAQjztcYGi6vDe9WSAez9jNFyW43ehCAdEX4fwRADAhrXqsg8KdX8wMr95t1Fdixw",
  "key27": "4xL1gFAEgk3hgNrQjitP17UZRcM84jtC9RaRrJejLMruuymz7do5UnL61xWknEXBKPRF9dguDuwNbgAP2A3Makmz",
  "key28": "5ogcNCyvLceaxJ4X4wXxnctuCgt6UkK7uNCFWdTdL9zGirPxE76BJ9QUoUYrR7YWrJ8zGHy6xpLkwq4BaubG4e1x",
  "key29": "3YeCnYEzMgRVW5AUP75CFBzH2KDFtZJoTc1yF4BcEY2oKGYHaeJJapsHz76APT691uNiReoixxJ7PdbcbQCw8jbp",
  "key30": "448D4C2TmbBoNGiGH3nWnhYkYchLCPs68ZqkoUsscDraZuF2JJmt4wWnftM7gGCvWcmsEB5hxESUqTUmQSAaR1Cw",
  "key31": "3QBguc2zVrooXPj9CrqFcWg3iBCqh9nRZNukrdUzb2JM1HEqVC746qxS2wxno6ErckqXQ2FBDjn6gxMT85eqivcQ",
  "key32": "5bYaLh7uzUVpKPkjwzvQxvXHYBsewCXKByD4TH5h1YpU4QdTTQWhBkBZZuhyBRV4Axa6VYnnFystiSqoFenHMH3H",
  "key33": "2tMwR6we4GQh4SSbmfuwgrSTZp6q86Ln9xU4KqDNfvK9JjWdywX32esqsuq2HW9sFJJGJryG13SuZcrFjj4BshNW",
  "key34": "5Jjrw2RLDFY1v9qqEnmvhJcM1qrUTt1542Drcu5A2xQ5R4rmcwk4vaTYMbDih7SJLVhduwLf6otNWeDEfHt2cv5D",
  "key35": "5gXANsds4uUeuJWWiDnGDSk1VAW9zRTQ1rKWt4mWv4Bb8Tje1srosd9HoEbDb1mY7Qe56B6NJVuSrJET8rhAmWRE",
  "key36": "4RH4tQHDKbfRhqZzJkasZcqUYRmCrnCC9eCT2wxM4KX5e7y8pAX2Lx7T3C36hmbDiG7imVVygbiQbQBy3xvbXJk",
  "key37": "4NUxi5jYk92BLnMZpYN2zucCQfw1E7F9msAmCgq5ctd3WBBGUqf6Y4V52tgk6TJkPF51ktXYYWJcc25WXAckQBkq",
  "key38": "4koAm5khWKXeixsuRRKcvRePrhaajAD8tZJL6hh7iVRVoA8gJXwhmtKNvai2YMv6E7tGVU57N9rAwK2YA63db4po",
  "key39": "5tmRqMp9JJyMj7H5pehohhduaGjdYdL49gWLLr8GChij9sDH2Ko9x9CfBVguZzraQaUXcFzgMLBc3rvS1MpBj4Sz",
  "key40": "PuLmNsRYXQyFgibYepoZ3fiNoRD7fnyAL141Av9tRHvHQKCigh2cCccY3ii9kD1gwGGmtRYyToDUsuTznoPEGhu",
  "key41": "2N3wqSZAc8X9phruq21MD43EvC67tEHLh8dGpTmQ2sok7MgC563xXxmFHjdevDWspay4aqAs1QHnK1hGh5b1WeDx",
  "key42": "2CewnUSTR9MUK64hts4juP5mJcjJhK1NJqcrVTanhqgDc9X97aEGCcQMcaSoYmsgkpTKaiabjez799xNawiTk6SL",
  "key43": "4nvPfuvL5qqnUM48fpWyS17ThvKVXtQmoGk2CHBpq6PuGTj7eLqs9ohKnoXrrbqCube2s877PesgL1xLFyr9JVXd",
  "key44": "J7ZHAM6mxuGMdzLeKKSHjaHh7bmxVyjgZDNkd53HjyRKSjTnEtbDgfBzm1Kx5WGQXraSzLZ35Eon68Gi3qsEoyk",
  "key45": "3Yb56uTXpKyi92Ck53Lb4MG1rfRCkVMeXaKgHBgCfTSfDfUR7rgno9TiXgNMwgcyEWP66XZZ2camGy4dv6ymyoAb"
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
