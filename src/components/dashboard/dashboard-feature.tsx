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
    "4WjgXSm1Fomnj9SvwfVUwxwmQ1PKpLrmJ2KGc44Tv4QhMNmhWVchJ7h1Nn9pGRZvfeneUEWWPaZnbUibzsYstoz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4643N8oqWFZTRftGBW6FsFqCK4v114bq1ghWNjHTVP51zQgeiSnBvsCf7rLox2sMK84nGmk9RPyEogAci7aUBPGY",
  "key1": "5BxyejtbZPhDJ94wxdH12gX5obw5WScZ6HemqWuGpbtGnoLfdB9BnWgpZE15reZeiXAQv3MeGRAhvQUehEs4Cnxk",
  "key2": "5zQorEptom4dwwWSoubgdAFE69SPSwrsqvexfEjBSGd5AEuH1Aocid4je4g8cNhrVYbVJQUCacmE5NHD6eX9yFhS",
  "key3": "5thWnEKGnhA6jJXqXPFDd6NxR8hCamNevcbtZaRAj56nFH1TswTjEUFfkLxViPtPSNNYUnhkzoYGhevpwmYXeouy",
  "key4": "EKdMV78kdDhJEXTfvvupB3vnT9AibhZRRxJf6Wru7m1gGjBcd8ea2wYve81cnD4FPTq2ttsAqLsNnBjKtUc2wyy",
  "key5": "314eAtMc684WrSmBvf4GLLjzh4Lg2zBYPVqjnpooriZeGq5WnjPv71tEEf2PtERV2V6Vwy4KKdDj4Ex2tfrNWuP4",
  "key6": "4jz6PZevmAhNChYJ8h4VZzEb79BQu7BqgyUrD5HcxYt2ZrBDLEfTSoscR9jiDrKtnW3XXSzCPXfRgdcnbfAk8nNW",
  "key7": "WhRkvGSbC2gi48QsEenXyBC4y58dMBUQiBpqcXNxaxzL9ppztBYsuQMMwGVoZnk5HDgshC5hXtfhK93RDUFWH1U",
  "key8": "3FF8P7Wg9mZhbeoSdpMEdrvYP9imWNJZLXj3iFQEsWszxpKmMdWiBk9yJZtWkqBm2bFVtdiTzSMGigHtgBwx6qMH",
  "key9": "29CUitThTinZYbR65tEaRfSRkMRDSdAk6nye5KjmDUpNhZiBtvdMcJgUXAgim1UkX5Hd7ReNn8ShpJMfpZ1Hs67R",
  "key10": "4DBCRRDe924eTGT9vuVw5mYNN85jDN3Ap2uTUZSuB7UP44HNHqxsXtEKAxerGmnSZoGv8fhmSo3ba1RMT5K8LAMH",
  "key11": "4hE9X7bMv9kXZ22vh19f3X6JemkNHxSExpakwXCd5GDwpSXMhW51VhpBKyEmJyzG4ut6n5naJxeo297EVMFr32z3",
  "key12": "4tNM1cLqjLUS2GWGu1zN4gudiVkBpgcKiiAoXpHWNRbHdTsW8x4WXYWh4soqkUKaADjnT8QfZjH4tsnKzNXrJB1H",
  "key13": "NEJMYFPeGvV4vXZZG7po93YQKPVQCtbjZCRFk5K2sGWZ1pt1gVmndEUFMrxuqPnCPi3dP4QoDUDdfrBdDRpaXdy",
  "key14": "2L8Q1XbRDXbxZ7z7MAhAL36F1NEtDoEPZrFFpzFzHCtrAfPgYsGMa84Zu3i8gDF5fjcFC9M7zKFjxymptBfev2J8",
  "key15": "63sBMaMHU4a1vZvcH7cri53NDAgQfMjZxyQXMpysM96qrZCGZK9L9fHycZcpE15kdqH25VTsTeKC6f4SB7a3ZEmV",
  "key16": "66n9kf55ZbrwDLuzYJBgSTr3mU8cweVseLNuqPg69KvURyRddAjW7NebePnDga3ePDhXJ3ArShyBDE3CeT9Y4kYs",
  "key17": "4Z1wAVPnafiVedhFNLRuqnsKgN4mPVVNyibqxPHBfbDVp2cZZLpUzeiKYG1a14ddpfbKGtV7jnwyU4dvXshXD5WG",
  "key18": "2WVU3u2TNXrq2BAd3zDXjxttCoFcSRS1ugskMM9x7gGRG3NuPTdgFQpJcbwEuE2LtwCKQhKpBW6AhmZ9Bktj3qvB",
  "key19": "4cebmRqK48gZ5UrFVcCJ5iuwCWD34erBzp5seFM58MTHrBufNwqZ3YW1h41MCwVgM644o4xbMLivaoFbPPPVwymj",
  "key20": "Qxqs6KMCd7TUAaLUJoQM9m5h8DKhhKuRj52zJdnWg88YeLtwng2trvBzxsLCy4DQN4nXepy3xLuPwAnAzuHQPoW",
  "key21": "3mwbBf3ELh5Nyg7tumRhQvMsEHdBDG6FwsqVFYf9eMNUuemx72Jj1cEdgNtKatcHYxPfL4YCLDX11M8gTdEebDxx",
  "key22": "5vre6ifnWgdX3Wq5rotaKkDxC5w3SGvQ6GDJ8vHh3u5JeWCzGE9D6bwa4Rir8euR6SKCsZMvjJXfhiGnLYAcc95W",
  "key23": "519FnCMMvyD8BuRwpSjrpV2ZsSY2URVHTCD1i6RWhPFwMXVM2iPT9F47YDsuYskgPvLAyDE7uFsdMvzVgQirVWyg",
  "key24": "31DJYZ6Ea9pB7kSBL9f7ytE5uxYQcjEJY3PQEjGzyBd6JW51ygHcmX9JVaEriMgTxeWtc2Yg1Gxgc7AGeJuFH6pm",
  "key25": "3JYSWHBTEnpAiu6XRfd789U17HgATdfoRH8SRxyUT9eDHsSNwtPwy8U4Sj4f6xcHxKLbYDSLSkA11mdVPG3B2aoq",
  "key26": "58TuwEYKR7d3cUkALA9g2EFbgppoiyWTLqoGMQ97wCFS4jta3PQ9rsmJ4SejcUmN32SjbUkNuWjaDxuNRKZAMgns",
  "key27": "3tzRL8ZbGHGxAQbKE4j9X159hhfMeqfKomHwL9L4WkQ8AWZcmi2hrcegZJXCEpTNkWNtMdWmS9b5AB1Yg4LwmCh3",
  "key28": "5PpgvcE985WyevjJzZGUkYijPvs336kyhwmdEHK9JVZmvrcbxmWQYbLFffaxRJYahZa1Qn3BmAcaDWMj87XS8jAc",
  "key29": "5Tm85u3YDQzqNB2MzypKx6PQvmJ2MTThXSHqyucCy45CLtb5ar4jUENuRpaLDLfBE6q2Er46BZ4KDNSn1w8qhhS6",
  "key30": "4o4MKVhzsto18toaV2gaLpnXdh85tAwL2tUtrz5JTYPHe9X4BkLspzj95D7G7GaU69Z668WUMmsdTbGDpN7otoAv",
  "key31": "3MZ7FEFsVdp9WKLuETai3EKFroKFd872ZvdtyAxjMaNbybJCgEDBkBEdM7nn2PkXyVQYJ6KLAYkndGnTAvhoaWzS",
  "key32": "3446qvuzuVeR8Gybp3AmxrWgkZ4MKwwifcpLPPtMuJdKzpKMAgMQAvPhAUuntqwh65fEBXtrUR4ySwd8oDFVoCPW",
  "key33": "dcNzqAbcd5bQoP3rvMLgkZG6H8p4Nk97uQGDTjWweeKaFyPbytVS9EYjsHM33fpP5pqujWgcxykB59DtMTx3LD9",
  "key34": "3jnGpghY3ZGSCDozVvtFzziVYRGBmeS2u9J9PrMmK7jUYYPmpaX6HL1BHugA3YU6UFXxUPpvbF6kFgBwNqMsSUYf",
  "key35": "5xaYSvUXY9T53QASkMGMnqQ6yr8znDbPnQHRofPXUP9XinxRuFr1iNvp2GA5NMLHhyD4MnTY7d2AeGVjcgcDF8o3",
  "key36": "318HrcyEvMVX8Z9LqytfTdTcEF5BC8eijHEaXbAeRkAmzePaRmPcrH2SQCdUEC8sjz3KJm7KgiVC8mXSUSFjvtB8",
  "key37": "2ayYtViXbrpD3awxJVg74CYKY1qnHKXMF11rwwnG1ZxWHqkpqXy6PXtMGxMteSzGxP6QLNucs6Fajv81e3VqVg3m",
  "key38": "2BoFJuPuo5ZHUtJnYzqNx4hYvc8DUdKjN1tq5H1pebeDoyvYGoSYvYnTiAkn4CGQFduHiKNDTCYVxMXqc23QUQDf",
  "key39": "5syPVPVK9GssoV4HGpyhHT4MyxZ3QfFy2WHUQEDSaUsXVURmDugDBwdnMsYMQkYX38L47cYuGfSe5WzuhprPdQmQ",
  "key40": "3ccMdZA7983dtozNWqW6AcxDTy2QGD9xLiz5V7LbuJdoyuyFZN54ZsrLbkLkbzHS4aj9hWVKCNkTMFZEZB8dnLQo",
  "key41": "5Zvfy4hw9TdhPZ52MfcaMhKZz1RMGJ4TpVRpcrT75xNgpUXzs369MgEKoAxhzH7JWyr82TtPzhZxmw79x8yxFqAn",
  "key42": "2CW2rmcotuZbKaig83n6pFvTh8FBqxJ4BTTsGbfrbXEqYukLMHRTWAwqU3SMfnJZnvUqrQqnK4jkE4UnqqBG2wJT",
  "key43": "3donkUt51duyGPxdRXpDYwhogofnje29fjH6vmoqYVnUfd6sVG8uCEeE8M4Pposx7HDSB3NNb58gvXZRrsuotK82",
  "key44": "vxd2Kq5ZEDUczGodKdQcz1Dj3KdaX8u8DgaiEcepoE7SH2kMqRWwVV3huKja6aFtBt3iEWMnRFwyAnr42m2LW2u",
  "key45": "3WoC8jYmmoD2jHegoyW7XMNYdemASSD8DCaasvbxoeN2fX8ohEfxaVwDVZtHB2mbTuwwFgN7EgTqFXLdzUvGava4",
  "key46": "3Rhoj65Tui7AggvwGav24sq97gabZbVKnQnCn3ktc92FQ3DsNAjdsAq5KerCjGTzceCCgx4pghAGbnxBjkn53JVi",
  "key47": "3dP5mK1S8RNEsTqbNZywQKMrZ5Boaejr6VYA8N2BoSXdvMxa7c8jSg8YtjAVTkhSJyFcGbm3q6ok8Zih2QULrrNq",
  "key48": "4WwD2m2QwDDhTLrAgRkJ4Yb7fxhWhfnenuf8aWiu2w45dkdwyhg8789XS7N79qxKXn5bpw1YiV8ekhsyXepEkXRY"
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
