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
    "m3sEYkKtUoxJpEdJ6aTL12JvXDqvpyD2a97QmDoAkWcHNEVghExApsk8YkzYfMiF3LZF9fmvbkZeVFg2WmBdyY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NoxSb8PuFGFNGSP1FAonYSwLQFM6yYYv87S2pR4n7WTZiUAu2dud8EHKHZj81URpHrVn3zSc8BWzHEcUan5a6td",
  "key1": "jS7mQGZa7C6DaLN1s63N3RQUiq2ZXfjkn8RxwnuDFhLwtDVFU8DFLprDQGvkE4MMDwUZHvopT4qkHXwivLm1bfr",
  "key2": "2qJ5eTB4jRyWbXsWFPrgD52rK2A6CmfiHU7pFgWEn28RGDRBGCn4PphoxKnGJKbdPjgNPH161CSUXjRtUjjLs6CJ",
  "key3": "5io6FypDJonvvj5tiUzhGHBoeUB77NFHbUySPijy9onko2j9ezkFB9fpr9NSVcPR6Hkg2Qdk1X4S7KsK41bnbVYy",
  "key4": "2F1hM6xQL962izmmt5s1wBsB7MR2ERSW2CYHWGyYwBv6vPjozFfGx7KrtWVTwP2qd6Vg675hXRUYG1ZsctdUqWfg",
  "key5": "2PwqTWVAkaWXSkKXTScRykpiCgywWHkwz72etaNho4cpi7aejLNLd5QxPUg8uCAa5M7Ayo2Y8g9WgAboJnkhmK9U",
  "key6": "2LQ9aMhQmbMv5WUEZks7Pm8aLbRExp1dViU2ZAPKn2xB3QCzamcZ2fwmEKwa9XQsPbDHhVp6J4PaC9ZpQ2JgVDCw",
  "key7": "USg5g4wU5Vr2C7U9LTbpfsqQiFnG5aqvqKh8iwnB7kxYESYXMZCYS9AvSvRsBS59xHNC4jJp2SvMaJ5ZajETKQM",
  "key8": "wrM9nBxLty1vCdS8vuPP5X1KhFspiLPkCzkC3MVUF9atnfKkQgFNmhJ9KEiwY4CGJksdc1weXsSPyvvaKMtDLkv",
  "key9": "5rATDakK5QkSY1FVMFuhbEczWE4kFjeGgoJ4sUzhEemKdSohxp4HQWSYfge54VUXykazGUSSeuQQ5FgSH9vsrviT",
  "key10": "TQFUoQVx2eP3Pq8be8atimyPQ4FNSmuqXeLqEp5x6UyY3v7Bt7akJ54hiavcGVGSpuoMemuPfKB4hHF2nyykcSf",
  "key11": "4ffKsJpBjtxigsE22juqKWNgeMVz1ZUjGQyBYkqwkBGrGhw8CvRxb3n431tVr4feVfXg3JV3XhuTKRgMnvJtrt9C",
  "key12": "2qf6YcLEmoF2XMoWYcVGi8ehbfbV2WzDqmCcePdq6bwKoiWMiYwKrnB8qNGd6UiFvVU9fYDiq4WuFHLT5i7gVLuB",
  "key13": "4uZqedZgCQLWY9DcbHYk186uqcPcNTxHX2kEW73Rvrem4PBmRJUwJLDZVvocryanuwg1jcC4mvYLyGbELjKreq2F",
  "key14": "4Bf23vteqroEtb3F6tkDfohDHMvAgeJ8TZcXKLvRnSqZ86uwBejuALHkYLuTcXqWeepQiEMiCSv77kKpC2RWfnCU",
  "key15": "2VoobRgGQ9bDoij5ioYXBM1nzuNQLUbYXbewze1mYiRvA7mTPkr8G5FtQkNiLeuHoK3XcxavNACFx7d4qMyHJFcf",
  "key16": "5WStoNdekpQuDEsuBWeUrgJ8CS8HVLQQkwvr6K19fthAg1xC2J9gKUdd5wuki6qWHXGeanWd3vEKrEZECHVFTePz",
  "key17": "3EGtr6hwPHmyRiE7gneLtKFUbYd2FuczD1trbKiejt5VzajgM9XmiaL9mL4GDzawYXJPfwtePRfCyvqKWscH6uU8",
  "key18": "3wZCV1jpcgcPAABuHAPvdBg1YdNrk8me63L1ZhMWiDVZE3s843VBPq3MrEnY6H819Wb5WURMoUU3JmqRMQ7EhJRU",
  "key19": "7G7afxqytAGUYnEE8L98CL7CgdCRVhA3aRR6vL6KaGZFQFc2PqZ7XZatWx7qpsFvAfpK3ZTy81CZW24UdYYPwab",
  "key20": "VBQc1JvXfX1wSFnp5vJHgY5N9rk31DobKu8ibxa7BfEBWDWj7sCPUBR9UM49jdeYpX8hSiPsEL4a79qPFLrtjrg",
  "key21": "3b8VZ4J8USb6fpQt6N3RB3D9kYm9Xfh87cGoD3txkv1P4FyzMWkcw7w5LL7sDYjMrjbCoaEBciEuK3M1fM97VXKo",
  "key22": "5rv7BbaYwpspP8pWx98HZgMxMzd1cdmT3W7uWNuPvx1MYZyc56VszVPqTfnYyEFBUcPPB8aHQcJVeyNWWzUkpJZQ",
  "key23": "4hKMbpRp6wsQRqJrvDBdE1WtNoi94VwJgo6nNbx2pXQDUrBMKLgfvWJvrj53bAHWBEyEMzWs2GmqaGsp7tbjfV4u",
  "key24": "3u4WyiT7YAH5JdqDB2JMetttwHaztCG8WQ1DAqTSTBsx92w6pf39hf8GsyhsSU9vSind2Y4kAL7oCegR66TZC5Y3",
  "key25": "5knpVvd6RvUA8qvpgGctXJRPpk8FC4skYuuRpkommMzoFN57Spr9SdhYVYzafLakShfLPKe5S91Tcbwtkx9t9WC8",
  "key26": "YKNuqWmWoF7otAvx3LNF5sV75QGHqi4QPAWDe5kuReffmwkHcrE3DdSEU2gzxnXtKF2uqSGZZHXtcDMWA72jGmk",
  "key27": "35qVeGQbiMFscyzKhg1V411XC4JxgycqgLuN69CWxNwhCpf6KAYpNQjVK6QJo5iWgcExafgvYAZqiTiRm1SdyEFU",
  "key28": "2uSFGriKz1gRecgy22xpEuhDd3LupSJcUuEzEmqy4rKsfgwXijuTB4tt84sycgmoMHPHbpCW5nszdYhp5Pj1jaam",
  "key29": "23Tpn5EfuQeaXpHoPWUF3frJWv2PhR1yFLwxy9q3DxVSt9hZxdhjDG4mBifLJcSRnMcyV6yxDBXbmALhNBzEe2pN",
  "key30": "2V6HUcUyipic5knoSsiwzKDbKoqtFhLLsMZvu68orN27f59CqqFaDkXhvPGuNvGq96qjn6WM5zxHPktL9NzwUqdz",
  "key31": "4GNTqufZJWHA2i33Px5doVXt7kEexKQPTH17aGF9e1oYzJFxZZJN8VHRMbZHQ3V4AohExgRHSKn83qFWsFCFgD8W",
  "key32": "2H8r6RvaoMzvpNa8Mp7Z2TBnoyiYdTcMV8c7iaxN38jMo3Zjdh4qVTjMJUfdtRMMr5oYR8eJoQG6xh7P1dS8Qf2s",
  "key33": "5qRT3TBDbUyDezWLL13BX9trZEgTGUDe17yEvVRy2t1UiJf8RqZitJ1Q414grYkddk2HnRqneWZJrquFrL7X1PeP",
  "key34": "3oftFEiNPv2aejNPS1m2pQTkVfWUBWdY9vWdX7CDBc3yaav2KJKxrnTYqejczKRm5fm9qf1iRZS9KstsN1Tr8fT1",
  "key35": "27FsLaReTsHxJsfo3Ar1Kk44vTSRbLurkERYopiSyady5fK4XXrv8tooHkpeBioa8Pe8WVW3zan4a6JvQ5ACUBzW",
  "key36": "2taR1yUJkQGPhdrVorTzhbjktYPpL3Ly24raNDMwurBmHFH5WzhVcTnpB3DGvfvonDu691MrTu8FWKbpSf8Rcwmr",
  "key37": "EdN5EsVLSqXBZD36AKKm5izXEvsJy4ZEQotEtXeHKPurHm6UDmhFA3oEF9sscPN6SJ7vrtzRGGzvpVyW6mRnQzf",
  "key38": "62njSTgP5JNdEh3LHDvbpPaLGJVmJaWaQAvFTQWauiyJ8RjPHcpcVDN6myMpsCgt5aiyQuwGf9RqwH48caML9TiX",
  "key39": "3dG5fvNF2TA4Y36oodzneHTYEnv1B3SGVKkHHMPvvxZ6f4BycLjxZ4TFKG5zwWzmA2PPKA4r2nzrjMby7NEfKter",
  "key40": "3W1NPV89DgPCmLN1ddE6hf8bn7ZLfw3gL7KSCvTpzcRehuYi7L97xtXQRk6KokBTcCZbCge6Bi6WgLgmgdi2Qs9U",
  "key41": "E8Fcd7frta3DaPHpzPgcJeZamjzbeA3XL1NaLnztky2X77gLBix4fJcV833SweaXNVZoxBtxoWfukA3uqTdsfuV",
  "key42": "f8oQtpr2WEKdvNbALxLGeyAUbaBQRUoTH1Uok9idNvmd2uqcnsXJmwg15VZND1U2B4rZQRsyrUV5bTSp6cVZ9FX",
  "key43": "5Diwmg3K4qMSYxgdFVH3rzRTRgCjwQom3FQxCYSBbsrmzarU1hBTZKbdQ9MdESqNVvZ1Ymh5wHDw6F2vS1yhkSna",
  "key44": "38om4Zh4WAdXGmtCEW55PdMmcL46JVWPnqK4vnj4JKmUsVKVv6C3zpBVKEQwUJfoN6msbvkCagMFCNRMbAKDTePP",
  "key45": "3po87UaRKe9Dk2Mjq1Kt6dEQLENy9RmPoEgs6rGZbTYz5XNcgBLBJFCWTdjNRPnvwyP3TarSTAwzfVYxPXT6cYE2",
  "key46": "5xa1udWRhL3wrzsZMJfp7RnQExkYy52xD49c7WARoKXueXuMeECoqGdQNUNo2ReNTuUCXAtkRk1TjZDkmCpxF2jw",
  "key47": "29vCtu4dd1Z2ojBEJsJMHBigQhPRZz2SjEvtbTAA2DKypEmhgWisC2Hc6rVqDiHu6dFnPuat1X8hJPbcyRkL1N4R",
  "key48": "5FeX28vQH5tDKNzbxaxXJ9umWZ9m5zkkndTVu8hthJgN2NGKt2zsiYzWzb38jejWazjTFr7KYXeiFCh73L5DAnTy"
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
