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
    "2ZmFUFCHaXybvjt8CoXZWcRJiBqiy36YWdcCgTnV3iY4fYUiu5GSrtAj6yLNh8qgWFeHv8FPFuHiPTh5a9aKwrBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35hEQURr5Axh8o5SJpnNPSmQjw8kroVD5bki4hvu1ABVaYdik4AoRzHkJZsXXk7iCHsN9rdHsSVtqZKaxtzubT1u",
  "key1": "5jq1sR281689H5VVyhX6FYgQrTmtHD1V9j6uuYqgmbwiz7kdjoUQUGkQoCs2Ftoamh3wCFJekEq3zTMT8uyaSyhq",
  "key2": "JomgcbHX4fyyc37rc9nYe1AutG58ZDAViCTM3BXqoSkoRQst2nGJ17T43o8RKTtohmY6FuYR2gYMGrd81K8BTHB",
  "key3": "MZFot1ytSMC8jiFijAbie3wywEtsTgHLEhj9hd4mt66SEq1jJUioNPapM3JkBe9PBxTAo1AuZ2jzAgmXa185sRc",
  "key4": "264eVjDuuNuH6xbdinjQCHxeLCmpcqzZCG7VH3MSFwjNCmy68yGaGn5mDJPzTjCowt4sbYPq2gcjxaw11zu9qMy7",
  "key5": "5mBAz8Dwg6fJXBofJqF4T216apfjjXPrVbBHGtESPj1GFYA5rhQMsqop6ghkpWL52wsQXxSQTenNBSK4oJ1hkdHi",
  "key6": "376z8SagMPiwMqjDiYcNNjMr3CoTUSkHf9GSatyJUTbiBKCgbVzwYysGqsSjSGmCxgLF4yyCxPcBC13fcugbVZFt",
  "key7": "5WNBLzwnB76sKiMG3UhNBuZRJoDwaUuE6y9BbQ8Nt8XZX7Donw5tnBTf5iZ1teQa8SbTChxdB2nwaM1WscsaPogf",
  "key8": "9E2G5xWR82KLinJEWCUDHGH4wipxWohM1cf6RdohsUvtcogaare2iRysFwmUHwPn5vmQCu789ErWPShqkYVJJPz",
  "key9": "4kZmFEYJmdhaSLSFqStDk1DJokoFrRc6bLZvFTPRSXcqG1XdWM5HckKFcymPZNfMxgRvxR8LvKxP3anfWdryVKkP",
  "key10": "3M78eDwxEoj96X3EYY9VAQX5AoTiEjMzALhSLZkCViGDc77BZzus9JaBXdwo6Fb4ddSF2xxX1q7ZvWu54HhvMwSf",
  "key11": "36HLMEDEGJFSSznX6kMNf1WEqVofCUye5CMtFiaVn6Z42pbDajmt77MkydnbCZH5Ay4G3JAYbrMjdFUcdkTdWw8A",
  "key12": "2ijaN9aQ166eB6eyEM8FtebrouFHZ7XrgQQKfMFq6PqEja6N3SLzQEqe318DiidfGe9F3EkChta9atkZxTk8a3HD",
  "key13": "23t2cKdHMN2551p5h4fQyY4LyNfaQWnEFSQrTyoQN26bhXqyiZoMZXS1d57cvJr7cJftNXccztnQhDecMW3ufr13",
  "key14": "3ELLwMHtVvQNNmNp75CEnNNLKjaioiNtLSVJT2VqjRUffp2ZuHrWDeibruUjKSQJWcG9DnGZTC6nPi3ZDf2D5yKE",
  "key15": "3NKqvfF61abCZqrovrwat3GDXJ5gkeVgN3w3ataaQVXCnFvNQJyspRjjPGKeZXe3wtJriUpKTLdHsxXX3tWmaWPB",
  "key16": "3CHhArKZQV5tGb61fkKZyhDJq9bDyHyrcdBHhPw3vyE9GJsTMDApU5tbj2qtMk16x89iaY6DHLDoARxP1fVZQCPH",
  "key17": "53DN8uWTF4k2EhBrZWG3b7Ma787Tp7SVi3xp57zsKiaCZeQkgy3143r4ShM7q7Fgstv3Vui66eoUmrw6H9D3XXdk",
  "key18": "5W2XwTgqJBxjSgSppUqqpt8rAwGZkofzG2sGNWDMkVjGgUXaH6tULPc2DBUm1mf5BMn7CTKEGoRYuvLfKGy1PxXW",
  "key19": "3kpK2X8R1U4yeUE7gtwtNojJF3beddex3Afq5SpHaWZB4sPGihwX4wYE3uP2yf3D9BNTz3WV6VdubtZC5ikK9Ltp",
  "key20": "3Dn1ULowcCiQERn6ofMXKdofsVgAGmyBJVdeRrNYQdFXARkQEVFogMbfdif4Bk59DtPRd1Xio1ernvjUsXBQQiod",
  "key21": "2jYPiYK1hY4e7KbHFmhHmDSuApdEFLsXttAzeYus9JDgNZideWJKBx88SXXMPtioMDteN7PjRPYwHTBQV6P5yXzH",
  "key22": "2KFoHn3efyHmW2qusdYEZYxvexPNDFKHmfwYJRkrTnCsnnicguSB5Ansr5Mb8a9HXq3pVJVFpKPeQZtCMMdpixvc",
  "key23": "94uBz2SRSBVuo1AQNDk8Lfc6pJTkJvLS3sAAYf7cjSSznVCpuaj5a6eGX91PNhNhfkQJxPu2JVZujpBb2bHufYj",
  "key24": "65h2tecUF2W4xKJ2nh9q6uYN6TvScuUL615Srz6BXaBfj2pcH94mCWJzjfuBLkxSdxXoKdjGdEoDPiRAUHhRL8Bx",
  "key25": "9gXcCGMvDKb8CTmqoWBUiPwZBUBm93uRAjWzCjuGGrQbUQ9REcKMUxPRjCXdwaVXVq42WafsW85AkrgupAn8FYa",
  "key26": "3KZQrTQJSySKPPKYZZEXPAc5uXP6ULWD8VZTTYu7ApSpLjF8H6EWBNMKbtYZeQb7WpSMngKUZ5sMkmqbWTCMJGj9",
  "key27": "5MgzLbiEw8DfZ1QRT8Pos5PcxtyzUuFjw7TECzRV8nF2QXHxgTv1b7roiqnkToVTgsPadhuQGPbTJcGctEUCuMUm",
  "key28": "46Rwh3Mg8LhGRU1VdseSn7s62E5hHiavHNKd1ZYixgDESrbiqZnNHaT2fdvFGAaLuegfDqB3wB5NgWqVRV3Gnqee",
  "key29": "2bqET1grQ5A7jKm1Pa3eTogs58WvKQbL3Uv6Da5EUGXR2m9iPXV2s67GpVhHTz4iqQDrt79qwVTY8TqLfzgkzWaf",
  "key30": "5WSykTSUzTcDpgaYykw9yJZwDBNR4edgFNBiF8CjQsz5Up9TbNEK5a6oZ9eb6R6YeiUnVkM8RqBX5Q5xMe13d9ps",
  "key31": "5FJQPbS1iQmJPfEj2d9qejSa27spXKkhJhtvNbxvQqqfzLqgzUPfRiqXhiJvXWA9tF84ZKEw3wasLTMGwXojy5bJ",
  "key32": "3ukUd5BG2iiW5nnrk7cFWKso4jLttjibx5W89WVvacKT68rYfP1Jov63opw95xPpCmy6WJqbu4UYwjR6kaDVrfsD",
  "key33": "3dGE4Fr8jKqRK3aRVZcPK4GQJdGYSscM1SY8eRJfsuhXpssp27YgEqFCTkcmx2h6neKv4ViYvEYefyZHzSzhivGe",
  "key34": "5cvjxQ2TDrTkdSWBgCNuqzcGXhTr4SGFKxkdnJpo71iweEPXMPh3j6VquUf5GC7XDCmv2dszxvUFqgxhTx2651pL",
  "key35": "5PyhPv5qNAKRiNgKBnNdSwwG5ik4ShTHeEgbfcGmn8QjbcamLMSwFydqL9qmQSivufjKvBj3HDWHUtb8SEtqMx5C",
  "key36": "4nVzzddQrNj4zGvrkrPnoap1mmjDgDawfcL1ghJ6zo3yHNESCSXE7pyxkzjpgMHfsCnan2xru9Mp7ZKemY2SSnpH",
  "key37": "31zDgp5t7zGEDcHZWvVUwxt2iqgKiz7ZSk2yij5XhmcgWzFnE2jvwrGKiDMAprBkpQtRTRDsKRneKUb1s3mcxtHi",
  "key38": "4i6a75f2MbmRxEowjbPHk6TGsQevW2aT4ZduqriGUhMw1PKfvV4B3i5JEj9RShqAtGHghzSewMxHx83QSx1d9rpp",
  "key39": "NWDojR5gowkEQWRFCE7xst6DXZAxxfJ81Xd7a3eizP7mcauRcfmJRfwrtkH5JSE329S2f5vg3JiiQviENM44g47",
  "key40": "2pGPr3kfvWJfMguacEwZYVMF8gghWswds8ZbyhojaMAy76QU7EChwBDyoppxHacKxm47D6gnqNB9R8NyPPv5ZfGT",
  "key41": "5zQcg1b2swWuMAxhG2TURcc18p5oXuuPt3Hh1hYiBNb8UJNuqaNyiijpUPT9K6TekQrqw67yQyPfSnAq8aScF3sw",
  "key42": "2iqiJ8VBmtEv6fq7oSvMeRnn1qURtgh7Jd58uidpdDCCBBN6e3Pmegyb2ffJ6TMhojnjTvTByhSiCmgi6MyJA43B",
  "key43": "aCeCsmnV6ZDChjPtW38gjX7411mLpXBjH1NQ9kvsySonpugWatayuTfAkXexQfMjwUKrwt3SqA6mUZV3ox8Ne8t",
  "key44": "jnchtgCkVNf4kDMjnj1CtBaQEwkCmYfCiSJ2Zd3veDPEFwxaYEhcBhL468fT3AT3tx151GUhw9uLEa1Xr6poVP1",
  "key45": "49tNGE5xUN7RcQoavDuN78f6pAcANtNm6xfbekhCkvenMht7JdJrQT5jRf27mFXBrwrToEza1kRCjSW2r4ERq5mi"
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
