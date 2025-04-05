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
    "5pJXCEFZVrKepsEwT7KuxQdThQsrVKZ4YqvfTmXwnLHZJ6k6HvDZSXVE3kjBxnEtgtNf6XSvsUySh8ZWm1zrgkED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vyy3Va1TznupwvQWNRC5hyzrSYdj2x7kXxtPfK7DqTJBLdGSxmTBaW7JPx9ucfi7yDFwSxa5EwAeU8E8GwQRqvR",
  "key1": "24AM9dfaqkNfnKaWJL35aek2ippGHmjWj76o5GozZaVEF2uPBzHXB57cudAUA5N96Hspp4Fr3RwR1j9fobRzNgPK",
  "key2": "4rFoTLvCccYg74bH3Gzf91eUVmg1v9mWENgbzFYcnR9BmFUA79vdUDnw8PCQbg4yt7mD2HYoNG4CST7bjLGYuRMA",
  "key3": "8VHYwaGiuYxkU7V92pK4cnqiRMPATapsLXAvL14k9zS1btZoRMvdKpefVPDhHJ9RQ22FTbf1Wc3v3JYNsWx7WyZ",
  "key4": "4ZjSxC1i6wzzoe9AFjgs1WL3KPHR7b1iGQD8vLGxUSWmnKsQnro4iZxUk96qoncSawZfRNvyYwtMqHibYxQfNe8D",
  "key5": "43JcW4NMRHQmSyMFfzsq2CjeBNgDyCCvpmVTMXrCNFbTWfHED6omo9JPS6PUS18dAZT9Q4VKwakBFSP6fTeXH6yB",
  "key6": "2Kv1VfsYAkqsNraZem3wamXfDnjqZrK5mTjsodm7m8B4xGzv18szLRUfUKVrH3Ak96g8NpRTbWDYyNiyaFJzehbv",
  "key7": "2tK2R9cFXyyevCjG5ZDHA6PXQQjE2NTbnbyDUNYLoQQeG853nPtzZbj3beGv8QrLfum7BLCqcRBXR3RsUrsg91Ue",
  "key8": "4oZWVSRCK5bunFXChHiFMY4uYcERxjQC15zYrbsBuD6uW3c7m1sEa3uCQp1dmUeUpML1uQ85Wj55Qig2sHqjgJJ5",
  "key9": "33qExJFNvAqYJs7c3TqfRA57rxMfh3PoQANNvUhtmio8JNsMe84dVdyiHjgAhsrFNJ8niK8TXrQuGTWd3rZbw9kg",
  "key10": "3wXur1QkGr7HUUCaDhEcjAYH3QrmKz8xKGPybZeCU6Z5es6t8g45oRBN1mdeJWCbsHhtaKmU2guuEA6x8twceYjw",
  "key11": "5UuJ4XtVYwPiv7WopZ9sqvLSiaeBsMDuM2JMh25J8mTmnYLx3CwwCNZDs62F47iLUeQxyH9VTF6PRk71aorCEWV3",
  "key12": "3KRXxdTpQyXajZngaXJDMGzo8E67rwWPAM6sXYssHFG8vh4ez6VqmzYi1TvPuuesA4GaqfVMMRS2gB3r6bLt2156",
  "key13": "3LweG1PkTv3JhZYkuSbJovP5C9QM3wX4Jte4orvCoE3iJi7E8xYkQ2zyFrSWJzLttwYJf6nadiGBzuYNGYURzj2C",
  "key14": "2pA3VP8NJeW1wRxbWoZyTfS2nz8jNAYRoFoKawJVdAxKUTZX7UQL1LVBgJBUFchbsjkkre1BRWqgGv6uvyXEbis",
  "key15": "2mCcQbd7e4YKLKYzBzBW9taAC4nrZgbqcoBreNixxdeCGVgfXcoP5t4yUAipPdaeqrAcYSKZF8k4MzFfPBPUygCs",
  "key16": "peo2sz4zynWkRL1h2Ax2ftrAeYrRsj2yTAuCauZUnkKZwPq3ZUDX1FufT3AQuv2oXLci2zvCk4gEKGLcSASuh83",
  "key17": "5yq2RKTzPKiguGEEusL6vwmbRCCp3zxbc1kHmqa1c3oHjtuApXoe2HAtkaK2vtzLAPq3eo9AEPovGjcPeCS1M3Nw",
  "key18": "2L5Hcxs3cNzorBcxSznWtHuvGRTa1yuitdxN7ooQJMoGKUUejNXwGdDYAhz1DN7c1cGkTBkAhrrzBErPURpmCRy8",
  "key19": "66EfMG6sFxRMC4KF7QL4k1ngZ4ingwLxeeihAgzuaxgREHimuCoMmEzZQSm9Zd4zeS2Nv4vM75aJ959rPbDZpqwX",
  "key20": "NbMuzWyUDTmNcn38Xvo4aQ7KWcTh1NNLExcfN8WyB58Xsnjzrb1Jk8PRmfVGxxuFD2ZCq8kaDQykz12FrU5wASz",
  "key21": "3m3tALqLUQCmhsmKPopVnwZjQyUJz5FqNr2Pjt8ME5eJNa8zLJP5uzKnnjWSArWYBnbuchFUaU7XtexNneDH85zf",
  "key22": "3vcKMA5dtrrMnizavidHh4TMNLV11paXXCTnvePT8RLTUYYH24FxkwP3Bk21DMw5SasNFbNieDw7BoY8gwC4BcjM",
  "key23": "5WG7DSayWEZ4R3qyn9JgzuzX6cZ9dxCwc5qhaEeEDDxSoFgaBd21XpZuwBdRmmcRopNpgRikET7vVNSMKfVjWgzz",
  "key24": "46syVSdCZUjnevPm2nVfE2FUpUQoHcD1yJzmYN3EaiNcGFadhrk8SyQGJ1wzMyMbF8GsnsptL9nqSJLL38WeFaET",
  "key25": "2QtuHrxNSUCwD2v3fYAQ4he21eywhk1LErT7UZ6TuLs3iyTttxaG9YBCycukPD2fxizQBrZJeNB2cFJNgEGuTf57",
  "key26": "2Ki7Pc4kKcx6atDkdECKX9eDu8VoVCQ449Pyo8EChbc64rBH9Fq6nTVc7goMfvKHJGXLUSBRwCiV36pdhRZYDQsf",
  "key27": "5opRrdbe38i3yuQF613bsoTLYAiBMzKN6SdhUaEfqbyJnm1XHN52FzNcagkAF6ZNnRx6yDmNSGgVK4d6BidMZv1n",
  "key28": "3Rg6zK7TsHBcqyMUS3GeQ4apbC2jvE2MdV8AqnUFyHaS1YduZ6WJ83bLuMaQQN16Y22cLZFpiED5JSFnKbLNX8nx",
  "key29": "4Wc7vH1FmqnV3GqSAPRBHDSSCzcMWrVAhrzVxrNJzKK8PGGZuf8GE2N9oDVSs8wSV28G1Damz13ZgWeNFca9vzS8",
  "key30": "2s4yKiSUhQB7MooRM9c77Fy1TaLFvgkNcDC5cBF6m8zCa4NhiLdpFcMrnhjD1zTWZBb55uq2jXovu6NYZPC2KUpc",
  "key31": "5aJKMnHo2sF6WUtMDwk3hbGfLLDsyRLPgcAcieU34VVpVGXJwyHCbDHPiWjMUW8sCQPZ4xydG4J76GhEyDLzZNp6",
  "key32": "imq1U3QwqZuJJwHCNs3XtHLFxepgvstEiouinvKVnj9uuuVfxHSffT9fYuFF1Qm9iR8r6QsUvUrDMtcBwJEELWU",
  "key33": "5eAf8zi8prmuNSojjefNeuhJu3ZJ4yNED9owr2F9ZLkntLPFBU3qYisST6W9WNKgiEcfcbmVZYVtcxv73sZNzp5W",
  "key34": "a4yRnftAtPzYoXo6CArVwAubspZYrF4MrSo4PM7pL88UjKUxK1jUMTuxdbR3D1J6d4WmGw7m2acpXzMSxFoPBLy",
  "key35": "4944JAZk91N5F8F3MkEqKuHeaUkcAVCxxL5xQjdiC48wn6Mhw3Ju1ZEyLZ6JxXRRQd5K4RFjxjz275FHCVZv2qxX",
  "key36": "3EfeBGJNBcCd2ANTydJJSbcMw98GZaeaBV71TXeJUW2MiR4pkraDkg1fHHAvfR7cMNDFebVgWCioZeiE8papgjZ1",
  "key37": "gvv5FJKwCBaBKJ3XyEQui66jBa9duBuVtQ5NssegHvfGJG8VU5P8g3UMnHb7eYFY4adhAuJX1tugNSiPMYVU4ft",
  "key38": "37ZKQCyHNJtH1qMSrCXq8Ro1vbNPLrAMuVEHoaG1UvnC6EfYMzk2VB6CSiayJeWVCYqBCJZQJTnQt5UnmpE8evLY",
  "key39": "2TDwTPbdXbjy422RDMqmdKhF6LvCL1ULaJe766H8ogHdvxeHhNm6pcDPFEazAvUQKDnr4W446T4sxsiJedbVzTry",
  "key40": "4xieVTXn1usGSCDu2UpjRVZPH5HRFep2tNe3ug5p3AJftCsRVcp1m9rRQLHCT9W8eVouGPV8dtWj9ubMN6N2FJWv",
  "key41": "2tBnGkNfy8vsgaRYH9K65HHkfT7cm78o8JLhZCHeP5aLoYuGfbGNghgLuh1R3jh7YAZCNkgNWGpK8ncnYtsTRiU9",
  "key42": "48Bo34JF8QNFkge99fTRvxP4ni5Uzagc8gMF9q8zn8keMUzqwdkpy8KAaYEjavQB6jC6h14uUADM9G7hBh9uyeyd"
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
