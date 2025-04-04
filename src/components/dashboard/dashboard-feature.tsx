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
    "4hjzGt22dr3aMnU47gMWVtBgpyvrgKbUhfRyqTgKDVzmyZcwrHwwqBDc3m6JrKmrjaKkEmBmJdc2bboNhrxfKCjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DhX8PosFrDoAd53YhKvuv18vA4bzfNjLEuvTuV4AUp2E3vMhGzyHMqzcyccYnMvdYuswDiiyST322SkEQH9wN5g",
  "key1": "5m3Gq8jyvhzfCwexW8mmV2Z9EpGSXNXkFfyN8QM8xGEL3hoaUFYoTC4RfiLQmK7UrbQeEpVL3b3N7A2Q34XL8Eai",
  "key2": "2c5tamf8yBTicK3DRC1e8pg4Ex6FFMM67djA9BEwkaxWaG3f1prqzkR5chP2ALqKWgbHWb1Uu1f2taZHTheUUpR2",
  "key3": "5TdU2XAJqt9KFuqKPVLa8sjHu3M6GnttKijxNAA42o1HHt8WthLWNty7bx5cqEJVsm9eHX1fGadjbX1Sz6VRj6oP",
  "key4": "51J5V3ncx8PAYD9wEiKiT9vQwTxGasf7cx1GGRcc1g47efRBe382b4KzSLNTEzznHoQYqXQLTdau8zG359p3RmnK",
  "key5": "3UTHQz7jdtBPmWVCwMU8CLkQDbfh8oVVGu1J182oBnVtiSaAksXGKiKnFo2B2j7f5vPf5QNvgAFh8aM3tbBau7hm",
  "key6": "LemHDKwD63KumP1bpByE6XMUtgLZWK4jkcGHDP4RtAvFkJVtysxu6Gav52qNsecp323zp9bxz3S8F3jMPJ3k9HD",
  "key7": "2wPh1fipNFK6MxJdGB4kvVHVgzMLQjFEwNdhHCgBJ4XrY5iniPMzUYDWYJFjnnk6eGLsJyJ8JMqJjQLskuKm91Q",
  "key8": "UCjkgM4S6ahcK1QXm7eaZr7zNuWwuinDaPTqb29HLC4hSKSTPQbdwGPKQrCygGQuu5CGYYhvxjL4URf2ZnUBHz9",
  "key9": "5WTAmsPqtmsQA6DuikxEV9KwGbAb25tmysuxW9dH1cz9ih1h3kpVdHPHsL3KwFLEKWErP722UhkFzV47cMTT5Lay",
  "key10": "2eWXrzoY2RjmuuTHzd2VtF8SvPUCrs9WvapaQqTvYwEs62Ub2HtMBBriFcWUp81av2qzTpkU8V8NWj4xaJBdY32e",
  "key11": "3cDobuTfM2EhuCZBZApwSNhAqPJLRqfry57aZDAeKte64RcYPE72ojdQi9QdvYMVMDspJsyG7fpMFyXv99gJbYNw",
  "key12": "uA2iaoqbrHE4wpdFCNwJHjR2RspiyEibRfKQpLnYyKcvnMDr8Xns4cV7A53fhwoJebEh8TK1a15o3Wg9svMsEVB",
  "key13": "5DsJng5CHFS3edGoYFaHdQhurh2QMLrPovJwkJBFj6ntJEHbZzQSuBazoxbJWKPUjKkLAPbMBh5NTh4utiRBu4sH",
  "key14": "4bqsNTmYTST3SEdEEK4tkfsLsrerJFynAiUbBJzwG4g2qx1JdqrQsV85MDTzLg7UxDbFkKYmft76XjgogPeSgrg5",
  "key15": "21QLPBETsFnvZZTCS1nZZkrBVqMguPKbSyDERX1L9Rzpy2uFmmDrmSSXWxafK6noAqZg6Zq69JHyNAuKEqRhnkcm",
  "key16": "3Nmvzvwmz4Goun3vXK6T8CfiMFuA9HZXv3PfkmJPWGvXZSgEn5mZRMuQJmhoyiFTDNDnhgPpqFpCrgA6X4M1ZeX8",
  "key17": "4bHbgphoXKG2wg6R13ymjUKtmPLmVNT98MpPqtpv3G6NS62KyJDn3wzHfPzFpNEAyzczdoSUgG3QhybAkddui6Wc",
  "key18": "2g4pzcqehDRcwoCLznQuDoCksVhWWaLajd3m4zyQWhABwti7rN4ayLHZtiUf7wps4y6oCuVCMf3nUCa2nYWy99PE",
  "key19": "24DRA8wrK4Q8Ht7EVjDXjDkBhjqNEcN8L34BsfEwYbhFE8hqNTVa5hJhUdXunbDZTDhv3F1FJ9e5GyKqWxnW9Bj7",
  "key20": "23MSKsAJhwHBf58YKFA3yuoHEAkE86KNGFXccvZ5qw4meyqqUpL43dg4n7qmjwR7KAbgyXbHtFpAc8eL8Sx3BQ4D",
  "key21": "2iwuM2vaSfjUyRAAD94PZhiwiMPkMWixYWz2dKqUnpBX3SZK7pkPZmEcwh17yGwMhmKtYMJS3AVUwYksTcrS6sY6",
  "key22": "ZuqmudqiS278ri7TVE4femnnS5q6sVvZBhYNie1xijvW45twDzdYoHnLQntBqfoJVVwgWPr9mkEAoYc6iTbXRBg",
  "key23": "3AamLWinCz652AfasAZBV2Erp4XS9C6RzPwEgL4VhBA82cUcaACqcdgJ8f4kr86Yds1mtVGk4Vg4yaD9cYBMC8E9",
  "key24": "2GwR9kSbx2JSsP1PYPtEW9tyeAjy6EwkW1wbLTAr4JUw2RGy9wkKcRewaBwMJHAqP7gvhzyiA2bwc1AoVe93U1MC",
  "key25": "3qgnH6spmBzZPzmAh3jNf1pQKFq8wQMURetx6YsQBtwFnEiy7r4rrhj9CAmwG8VqJmGpeNhihXuM62Ve2RQbJnvt",
  "key26": "2L8jWTAgGKdu3YKuKmboFbfhYXXzG98KCJi4GiduBRjDMwqCQ1q9yppUfKRjZjRZvXPEdKAJqhkMRZMXAaLZ39Km",
  "key27": "3LbZDpWnYFjdcSY51GSNeFtsQGFG5hSchrz7TpSq396o5HpryvN8qb7ggPPPSa5AdiqsYnYb4mgVtJDayG3xrYPJ",
  "key28": "3uDW2aAKupwG8fJkSDUxf4XWAbvEvayThFSbWxaPUPexF7NBUq3anZMRdQTBVKkeziMev5HxzoGVkYiXHWxXDkbd",
  "key29": "2vihYCDSRt8djhfuxPdBc84wmkG4vDNrTRgDNNTQVgBGxAcAgHqGBWdn13FDUTCrB8BzPLyChy24UKB7p57aSciz",
  "key30": "4EGLpTREqkijMC2MgZDoG7zHCSqWfu4RVYtczS4YwNTvEWhPSJjseX5r5oNkQUGLAi4VPSgShXoyPKmYce8jucak",
  "key31": "22Ym72tjcDUGxuXMoM9kfc5Vu1sX4uCVpsY3guwJLdtmnhQXvvUGyAWuA2i1ZWs24Br9B6WgVKVs9w9Q3ibTcZrj",
  "key32": "pZBsfhqD2Bnj73K3M7wimm3ccM1p9sL3FabgnvyNJFBz734fBXwh1bdoy6NjrdWrWWwH7kmDmHcKC3Sda86Afsk",
  "key33": "5XNjLhNbgddCymomnxvZsApu5m4o1i3QLxxt7Dbs8y6cJaR43biV633kCJW1cQBQo2B21H56iABZu1tEiveVvTS2",
  "key34": "255i8cHTJyNTaKkzKUBkcQbZ64KBQzjSkppy6YkMiwUQk3QGqHdr8Mp6865YdDF17qqvqoPdrnWHCuH9EHzaXeLP",
  "key35": "s8mFM4r9E2w2wNs9djEY6fo5MWaRPPNYBSRMiEtmtukKvtH2BRnr6JoHyi6jXBCaqMz6PqAMcgZHKd1QWrTXegH"
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
