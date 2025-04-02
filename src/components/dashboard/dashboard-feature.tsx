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
    "4FugLxAdKBetPxGsnYd4xra8MfAj1TuLUwcVNCTsoqixh7QiYWe5EtLvq9ERpjs7J4jwvj8TSWNcsMikQyNWfsMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWW77Y6CJzFZ77vvPwLWwnSMs5BQJwehSUWunApThNWfoziWDkoH5F6ghi4UZzhUGm6UQ53evk6JGdHd5KTFwqw",
  "key1": "32wzdroYh1n8ksXzWEzvJ8dxovHNCvFvam9QSeQ63sbmbR5b7FMvDb7iG5QUwRVknEq8DkbBay3v7KAoobK3eHSR",
  "key2": "2eqcdeHUtJ5w1wwwftXWVSioHsXjYqcFhNfMDcXmEaoHRZd5jJXqV1rVJGA2tXgUBha74gVuXQUdwgsoBRsnD2jy",
  "key3": "2Y91rPamQ6vrtDwCsYEXnrkn2wHZsaKfCir44c6R6thcWx345zLfjwrRBjX3pRzYDPg2E5f8XVC9GYSrGMJrfwNq",
  "key4": "4hn7mGhGJShi8RzV8fPmHu38R4Gs2bBimcY9Nn1EdZ3PWRkhcZyk2hbjeDanLPAAw2gTwamHidwBj2LLczwSqG2V",
  "key5": "miEznQxur8bj8tT4bB9wY1SGstyFDAkN9gkfb1c4LgrjW4J4j65dWDRFMjvnfw4PfQXvWA23JQKwUE3pCRL4D47",
  "key6": "5iXjj5TEpUgpEhikgDvpC5H9wCJgi9qbF14dMRtb1bPW6HC5ibGYG3uQvvm1o55yDXyxLF6LW4BzWBDY4QgfXT9o",
  "key7": "4eV3bukP1keHwwfcex71kEcfNmN9nhjQnNuvjCRUNRcpcydSDkcHXQqcwDW8vV77kpMzVtotpPKLjnbcRo6ynALM",
  "key8": "2yW36iwHXTvUdPFn6Y1rxQ9dCZ5x418ursGzC3eWss39pG7MxkhWbFwdH4XrXjx3khp7dW6MEAYCM5yNkduQx88L",
  "key9": "2wZuWPie7oUU6imVGXYLB2gZ7NfQibpH5j21iowgQzGmD8VUn7vMMHc4xQr7GubsCTXPwEDMPVvNxEUNyb6MSiNo",
  "key10": "3q6soeAdY4EHUZLyc7a4wD4vX1s8B4guUQ2mM7JGVZisqUwdzha5J9TZjqgd9RFwszcSdQBX9qFE1tmHVapWbd6z",
  "key11": "5CLKGXZ6j3JLBvJciPJiXnuBmUPCuowt9Hrs9LXj1s1bKoDJiSWeSu5TKAnzHrshtYxipVcP4dWoG26gstvQUWt",
  "key12": "4sFymArP3d5eM1VuiQJ9ad3LVQX7soZWSDv9xEFzTo7Me9WWKi26RT4N9yvKpLSDAKRQiMXZkygBMw9sooY62ggz",
  "key13": "Jx9gwKrds49NHLd25uRf6ap47ZiVcwJbicmajjHTvXhCbRWPdcfuiNhw5y1FvbEf8qpkxzihgGdbmTsTutT5MKv",
  "key14": "p9sjx72fo7b2zDQstdoyNqbtYQki7MLiDgjPTvmk1fjG2m2L7Ak7qbpdaCUBgCGdmVo6wJdram8q2E4LBoHyDxw",
  "key15": "5VNm96NgSX8rvhnMPv61kejsubxn69Ac7K9BdALuBWuWYLsXBgmXoDdjkaBcyw3TmZcGkzpqmBwBdLy1wkcJ6FUd",
  "key16": "wwfU9jL88AsmgkVNm4Cz1eQjrKoiZTS9TBiM5EobUhVNnGp16EKrkBnVyTg1B9uCzcTFeGCZ7bWsNQEs63TBS7d",
  "key17": "2pdhN6T9cuUV9uxU6AWK4cxYUfccPS54XmnFfTeR12G6HMWXrox9hMNjynX1dvnz8Ey2jmAfk9wiMB9m71CyR5aY",
  "key18": "28dr9mRo9un7KEV12mepKA8D3Syg2YxriXpR24VkdCHSdANVTMvxuobBCccHwA13W2isdQhtMHknZFGDcYk9eBGW",
  "key19": "338dqcHn4qHtArwCFXFzFy5vRWf5sW9HwuawqSRVe6S9DeP3e7XPuQPRfM6hqTDcaFUv64JoHKPWvZ5VTUv6dftj",
  "key20": "4zEqaMjjt9rbHch2rd6KjSkp5BmdjmMwDUd2XcypxUefWdgdBMwJ1csjWTuwDNrYaKE9T3ci9kn9unSd2qKuA4KD",
  "key21": "22yvVZZYKGtEChBXAhgXDWDKvKRcaUkBqbAEzkqbwdvuoCgbnKtmvtxVbRW3182vMYCzLghkXQDar52sE6NJW5TB",
  "key22": "3zEL7fAxBZCC1P1XPyPmXa19XWBkeEWz4oqW196G3dn3v5LtZkHY6tyrmidHw7h4ywhAZQ26f3FoSPpPgMWFSodZ",
  "key23": "4j7zX81aby5rxkUR2HqWAGbnXQQJUh4Jej8pyLFR2wCKzEtSTua4FwzrtivTXj8djb8Had6MKSfVSdk6c9Rm3395",
  "key24": "2YnBMA3NMZk6hfHqeMV2RLF3mTSsCisvEb3wpGEFLUCqqjcVEzuTLi5Qiiy6shc8orijeDQyoxbE2ZS6TFuGc8yH",
  "key25": "5vHApi6ULgwQMPqUMF7GfzwCtd4Jxh92cDEsNHPpcrsFziE83aqqhhSLDGZuzMUPySrtGtT64p5nuy78jsM6B53G",
  "key26": "3sN6rznkpDNKakNB1X3RzGcuW4f1fA93ydvVGz761JtfyjVTFvDvxcz7VxveUcqKtc9JmAGZ8MWuSucML2edDsJ7",
  "key27": "4QPfhzv6FQ4e3fouxCS7gFAFQRKwjnnerkH5JEFCbcvQAkte2FTXUo2KoAKnFzEQhfqYuxRTxZN2Mbi2WQwpf1sE",
  "key28": "5piEUkUW4cQCq4EsU1LBVqLW4wmSJgeR4u5FizSBMRhXoQwbMmHvEQUVWALULx9VNBHkR3yr9Lzi7nUPpMPCoYmM",
  "key29": "3Wa2f9M27HJU65bRcdFfNqH33THyrZUAUb4wa8ssorWCAZkz4Xw6PPaXs3wWoB6xHTpo7UmguqxQCisvq9foM5nQ",
  "key30": "HPhC7vykL2wKWs4o1fLzjxYMx1m3aoMJTnuXooGZS6DzKk4c2JP6685vW2D8Gpi2mDBe1jPKbtNWwN9n1o8ojpW",
  "key31": "RPVZoXaefqKrTYtG2moDhNoHKwV7hpCtVvDBnEJcNVNpEcWaodeAvB6yDXXKTJjegXykfagQ3EwcX8i2fNpjXBq",
  "key32": "5VQ7LJRMUkunEYVVMRrZboXRjkZFzYcChBhvqXY2VovdB4rsfudeFCV3VKqBeyamSY1R3J55vY4jufCXucUaTY8G",
  "key33": "4AMtvanG8hyEW6bxx5FPyNQd1Uk8xjyjtQRar7JAgFw9Y8XQagm74zahrSUDfPp7MZsz1fvwYorAioUW2hRaimHA",
  "key34": "3GumgcqMgLjSkBCsRsSyf4qPwqGsfsEEkgsiKVdA6Frt6nYbiLXyQ9mSZJyPhS7ty6JeGQxN6rN8LPV1zScWQSbr",
  "key35": "4rMXB95DutYcVrPnbZgEXz4joVSkNAFLeW1KpeCURDJ1YairJENpsSunwaSZ55GD5Lz9Sh8iGySXdf9Zk74RkoF7",
  "key36": "zHS7NdNjYssiLVCjvUBGrpvJHUWAuibpmevEh1ZoNp96JYwBSAucbD3G5X1p5Q26f9R5KRg4N52iVjEP5eTenyM",
  "key37": "2Bsexe7KPAwThxYnE513zMAFySjaGB6mkrQAR9VFyKCVDPhzNMm2Vvq4RooqHEi29hxrdrZhzBCnV7Qojt9c8EW2",
  "key38": "4cWpbvhrCrtx3UwTtJ7mtNMhKFhMEdiXE5Ne4rsvuidFP5hpziMA5vJLPVtUcHf4jZ6YHoR1fEp4hdsCdR2xNGPB",
  "key39": "3qw2kPb2J7kLv5iBKSoX5m1heuqZkUooMJzDNVQi5V4BMZjyB7LFGHrrMnEKCifKdsciW9CVXWXZXqH4TBiEZbMc",
  "key40": "2bcQUbPPGAncDpbhx4TcezMzex2WwTV7HiLFMtk6AeyFd1ZQuhRiERnwGdjZDdiKb3KZDsr5GiFEJqKnYuWCbJZ7",
  "key41": "3TVf5kGqw1PuSFCbGGUwx5dde3QpyRr5Rr4bKoroMzRmTZGD9XWDFWJGyQhSHPivSDU5WJq2HJ4GgU7hJTnM5Cqy",
  "key42": "4DfEdqurzvibHKSBUoUFpU2ogc8mgy4BLF8VNRwbigwh9sBxg6kHCLVZ788QiAAMr9ycV6a7yDt1GFEZKB2ojnLw",
  "key43": "Ah5WSXrAou6d4FgWM92L7MtqJ2oG41arsHx7GmhHCThetrF4WPshvUG3dnM21FaNMXSCY976Gv9Kp2AAkMtTe2G",
  "key44": "3oCWj1fTdVLdpdEDBjSt1GLKmxubsGqmhzswemfBLUd9XDwhifetcqhNwvgMBGxnGsW5PYJbPB4DcuqFSTSfhc8E"
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
