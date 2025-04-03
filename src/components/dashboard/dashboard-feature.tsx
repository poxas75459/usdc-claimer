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
    "66dwVdDuxD5Xx9EWsaEbAGE8WCQUHuYZ3UGR8r7nuzt9cS1XBvZXCeLJcE8JfLHT5JQvJFd14aanqH4HWxLgWky9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGWxUjULY8wJrajWaaENkurpf3KMmDdYspUS19RPupXidEs2MP4osVXTRYs81YLSxL1Vv8MP1mECxBxBNN9idYB",
  "key1": "5uhVnoYnCfdWAq89dQKrS6p9vgRXu3s6GkuZU9QvPCff93Kn53C1ipSHD6pYfz5TB4xXHtTxxhnMM37m7y2evALc",
  "key2": "3osoESMNixjGMim3DEgNURjmEkqoSVJnrNwSJsjdp2q6FGseYPuzAjxC3CWtQ8yf3HuHckNN3fE3aKHo1BDQD3Hq",
  "key3": "5ZjiFn8AgsKc79vUVXAvVV4RmSsEVsRWGabqwv7Rr2qEBBuNDkJtBV9MLAic9ropz6fxuCbhJ61ean1zFSqX2uWD",
  "key4": "DnAhhzqn6A12rvW9aLwZTEnWsENbJ7DgxReMUEErkkPX97YCr8Ej5ZGPYV1B75jBxwmU3FFmimJfpsZWGKeQ4qt",
  "key5": "386Heeox8ABb6au6s6y3Qi8QnfW4nnFPmr5tfVMBiffpGmuwkpQXcYTikU37UEayNAbFMV6M5Pn9wmEZKVoXEQUY",
  "key6": "azW6YAhnvwFN1Ycwo3ZX24ukKJjUtdeRefcXFZdiAp3C4dkM3L8mxWfm197K1pDBnkCNwzRr73A5BYhp6NnwZVU",
  "key7": "3UakvjR8kwUtfaLc8Ty7cuM98DSQpZuwYfqj4MAp5XggLs2YjNt4eHh1nL98uNFkMSchvTbSK7HKnmpb5w2pnqNQ",
  "key8": "5tJ3pijPAGiPCsQatqKH94dUGzA927uN9ooL1iehoCmtNQBhxWgwMFu2hrQLDRATUguK8BhDkgnP7Unfu4ce32r2",
  "key9": "3iKSHCRcgsDdVAAgFDi4Abpp79LAcZ9axxYgSNUvKZBroz5x3FBPVxJaN9ZD5vAHTyJDqc61WroDBZbL8LU39U5m",
  "key10": "3hzp4ucdaiAL5qbmrMNRYXBgK2UPdcjjjns1QC4fhgjEJRVFQUaXTHE52qXcJzVPn6iGmi8YsK7kUfe6E2yzbN6y",
  "key11": "4v5a4QfsjgRNhN59fgdLSXDesy9GksTtTCRsxAYN7vRdMWJ4wsFxVEPseF5j8C1pSRtgYk3X2LDANQhL2z3wk3eM",
  "key12": "4TmFVYLj5C45RCTx4SeTYt2x4Zf5JfEMvHWwCpCcmYyo2rJUCSsLVxVUAu92HuyvuWaCiZKFipv4bPeT5x4WiwLC",
  "key13": "5BcbiuWPJVD8Sxp1BjJPr62bejZrE9wwStC3hD4wrT2X5VZALPh7Hk6odWff858LWWBcwogzCLpBY4sPDNKdFDf3",
  "key14": "3qUkY75Yq8A46j96ysxDV1ckksLqKfSZyWv7Fgd7N1skZ3uLxvAHDKwkprE2bzsvksUT3oH4cBpUxCoekWJFSbhB",
  "key15": "ksaZ4zUy9mZHaWNoDb6wc59ELZNXGUkcXMPy6dVw1sZUPa3vG9Konr739vo3GQhM4vd2j47eVH5o28g1GaxATUt",
  "key16": "2qgF4cHC3ua3uvHLvwbuYespU7d2jvioHJtvnnvayycL67pqmDqXqp6Fi9qgq1Rdu6kHtcJ3VLGNpSPckYXpU9TK",
  "key17": "4MDUBm6xuEMDhbX6zD4oaVy3Mo27b8kTGRMQez26AMQxhCswp2UBVJYTjyx2Y5wsEdHp84c4sbvkFWAf5m2W8XM3",
  "key18": "JzDUd2Ug5EB1TRykQwZoAKZVzN19vPyV3TMCGCS3V2RDsoamrQt5sAPCXL5uHYm3NzygfqjY6YW1Zxkpqk8cubV",
  "key19": "3FFjXiiNXmLhdKsHe3Tp97FHcoGrp2MLuzkxDmXDV35ZqXdk1DdDETeaaZ4qxvaAN7EmAL82yZEcaJJHWHpbCBpo",
  "key20": "2Zc1Ttd5f2yo8Z2Y3kxaceuq5fdFtBZrqCWSkiapXd5CW6DPpq227xRggkAr2CX2HHr49ZxXVqG5PGhHz4Ru1S7Q",
  "key21": "3M7ETffJwxCpjs5SDTm4P9yyx3bJ2mstpt2uADdjRv3Uf7U434nHcjANMSTfKcqwUgvt4v82RAY75SpFxz96Eamh",
  "key22": "5x3cTf5basaFi3EavqWhNx2w8ewGdcvwUQx1Uuqc5MEDcQpvGKw5AFqv415KjVqLaj79LcEE1JqSXehWcoprAtL9",
  "key23": "sCKwJCNkFuUWKjvoRcHcGK585PHNhiWXhdppVeBY6inz9xBYTAM1rqDYW8U4ruBQg2NmLYXx41U76tmFbfR262n",
  "key24": "5drEgcRrTz9SDkNDn9JxbYxfjbz7qPGnayKJQZQTkJguvcckEQrseL6qxKyFf9TiURpkED9NjaWmVsGagc3CQzjB",
  "key25": "56txDP2DreYDsM1RWVvWdLKQFpYGrYc6PyDhXKjnc9Wm7FDwjK2tv8KmQopD5k5pZMaWBn17b3mjXeGoybztZWnv",
  "key26": "tbA1GU1DxmmZzWypgDfmptq5frSL4RYcGvDZJD8XA4GGwTcqEmaPupm9aubySfukvV1B7rCoTTCHadUSeDq6ciS",
  "key27": "2T9mjD9XhaxybUMxFW1u1vYJ1NdWTDCiPt5N5xoGzb892x7gp9FNydWFyTo3vF1n8Lx4fhMY2zxbmxgnm64j6NfF",
  "key28": "E7U5Ut6CC7VK6fc9jZpBVT2sEzePE1b9YJvasmpfc81fSnDqCnsa1c7kNY65C47ucpetaMn4bswmRMCQS4qbpoM",
  "key29": "4iuRKJYdfac33wmhqVyf8QSC8VWFRhJRdos3xcyE7oUnTENAHvRZo992oHpdzWqjeqg2y6x7At2Pt85g8S2PAGrb",
  "key30": "4QuGCUKrdRMBijc4jcFpioMX5wvx9XTrHxuN57Lvo98yqxHkro1jaWEw9PUX2RSkDDYQxx9pbqVLwtXE8ww1XjQL",
  "key31": "xRZN1ZUSMZy5jyGSHcTocxYkhpTaxhGRtZBRE7zgPf6jkz4nRve56RhgTfv82EvJR9F6cJKNe6oE4rNz1NWoY3k",
  "key32": "5JgrJYaNeB59QUrcPXF8r1Y2aXJ5ddjsRXkAd7ALDDJvh5byzNFeAxYN95wK4rdW7DgbtCDjtFAVsgQJrDHYEHcW",
  "key33": "3s1Bzisp2c8fzq8aSyWmPWdgCJ4iHtdFgmhKfZHq4BhTRShD6MPeDhkpAgWzp8Y1zcZvf83WDgbG7Nx56GcZ4NWc",
  "key34": "2Zid6aEc3s7yHJb7x8EUAQfdhQpML6twTXpne3BFjdLKqtgzPcA3usT3jhAmrxMbQ5mD5vxrj2iBdbnLT6e4R2A1",
  "key35": "jEumHiA3VxtHiH9uokCUAEQAApbNjcFZhgW9osKSrsKnGuoDJv4qZMpfUVAkFHwTVrB26t8ssQC45kfBJmQJQrh",
  "key36": "3DHJyUhmsptagEX43oWcqL5zDyyTLBfMp3ScvNz6BeTF9ZQHcytAjNR5AyyXtm68W4ticUimbfKqSasTHLfUZQxs",
  "key37": "vxaQ9MeB1mQLhzH3MxBfBufZLszyZE3FuQxoAk8qcer8v8MnUrhfTvSEHGEW2xiAkcJrqq5gjFsH2sfmjSES6jp",
  "key38": "3ofDTuDBbtgPpk1AAXEK6zqvPLDmK3u5tCcvjMQqwdvrh9ETVuj7asxAZ2nvypFrsGNue2bmpBkCLk6GXNyNwBAm",
  "key39": "5fqqaxTsLnU6RaUKmZ8Jjiif7GzNKgYToxa6rWNs4RYEoCdeKqRJNs1JAYHyPU7s6ZLuzDZbwVSD5bcqtwZhy5n5",
  "key40": "4MHQCtvXzKWKx15bj1ENZtMvktXVfPTkt9LHbe4KeuyD2XXjZzc4WuXn2c7xwYhT71YMrDmwVAAJayQveMTza4Ad",
  "key41": "5dPWXGdtcPME2CcrVouHcJNqbFkeuQh3DEykxJUmzPjszwmJcpcPKnCMRPr5QrDhDLtpoH9Gou9SfUKGJETg5hjp",
  "key42": "B5BTiE8og5agbh1L4jiddEoadEXEtAQtEN2NCb5Na3x8EwALg85naffbpWqpPDfen2xNreGR5wnapRdjm7tNKmR",
  "key43": "2wbvFy4pANcbpDaC4ZJD53pC5SxuzwyWh4MMFA3m4ochFuB4SgrKj7zwGVgrKbpt59ZmJBA984Hj9qz5mhBJiw1Y",
  "key44": "2FQ4BDsLyjMv4mnb6uDG5AMHmw2DgcMawkuHyS94NN4UuwsP6ytaQcEmyqq44wsvrZrF1pLzzZDfWPnYVgGRxiki",
  "key45": "3t6ipxRQHPtxvChRsTargJsPjPK8wsPmbjnzCkP6hHsRZfdn6vSEL41opbjErSytNoRcjDvSti3ceVwNqXY4N1MT",
  "key46": "nshz2smdJim26zSYv8pKoByQDtZAQjM44z9ohZF5k13zLWUpXJq6KvhbB2yAdYKjQyffbFEx96VcKYbXjS9iaPX"
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
