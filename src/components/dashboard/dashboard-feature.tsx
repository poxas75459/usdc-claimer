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
    "ZDX54SVyPE65PenHmtmQ67tn3tavU7o7KjoFdxp8QFXFaRNbYrGXSFhPwXmEkUmnwEViC9pnckfDTo9U98JFhKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGEu992cDfSV9VsPTQ4qD9ia99Pzx7gguytymK7SXzNnnBQakJ629jL6bhjYURDUJP1bbsQrbL5TSEW9Zdamuyq",
  "key1": "4QKrthKSpku79qonYdQ3qyNmHVxjjNo7NmoTr7vj5U2UFd4BoL2zu4FrYSuZEChD4cdK6oq8UoPF26aqxLAqsZWK",
  "key2": "MXAvcpVPTYm3fgAntQ15hRjbkyNchpga22CeaRU9mVKEVzViU1rZHQRg9ZZspSB18EemaiDyxQDKjfqahgrEjDA",
  "key3": "5r1GMwKLfvabpYMD9sbAoCAhkJC2Lzp7x3pqgfHcnv6vsiDwAAb2rN3LFdNMysewwFugDGfYu9oQJMsGPWtcBt1o",
  "key4": "5jruSUTHB1ekX79CDTkjFcJE3MFFiFLUKLUVGQaM7EoFot8aExXicJUWimLx27goiX63qTnMH78pqJqZbERbcjjT",
  "key5": "RDnHZB3nVYtsft6f8xJyLFn6sF69p8RkgBgPX5g2yzVmswAu22kRCGL6AbCQdUqKFox7C2j3dDuYycGcvGiwuWk",
  "key6": "5QPvi6osxqeDHuwoi6WXqupvTZphbDR3icbxhqFDMtGxADmMsHUB1nxdL1h9WSYaJUxrmazS76pN6UJM6c2waUTA",
  "key7": "5qwHbwLi35fU9ph35kyMbza7yXH7sVqdf3J7gTkSB9bXuxjh1MDqUx1tBDtPii3ER6QwJASZAbJLuEQXhswWvEkm",
  "key8": "3iz8X8m4hQ4rsWn71D8WpJ9EqgKL9WKEqaRNZpKC4ujGikgkJKarry8rxd7PCceiMTUoBEzpTNo2PcJDDLnxpc2b",
  "key9": "57GLckv19W2LACf95QEHsfGftVHQKNk4aQ6Adj3rsjNCqJBeRjpqy3kpMWykvJGUkDgYCmkDfJ69z3DhcpEBEnCA",
  "key10": "1bNakqRuG2xnKdZ9EXxbY8X9KrQMB7xhKvgC8Bn8CeSRCo9rY9EioJDnsZWeNTG6ANrwPPg5UXdHDb331DFDSob",
  "key11": "4yfC88qh5JPWkK2u9BQGKeK1uyfRdLfjh88CJ7SjCoJe5dxSjZbk5yEv36fGpSb4kRrKe5eUoQTr2QWTwfwG1NJM",
  "key12": "5hHrHnhvYeSpnCrWFThnddiHRznfYG1an84UJZJrZK5vAPiUkD6VaVczeecKgJXEU2PpRxUbGVAzBnFvHFZ7amd4",
  "key13": "63ev5yGCda4JeBQLPG3XZzNgwLmW3phCGxHRBTPA8M5RgbRUXGhQ2Ejz6ZX82rpczuuVk33hz8epTUK4WRpArkSw",
  "key14": "2aBhRfh4j9HYBYNAxWhTeV1Z2wnxV5TjTzFtRRHYpLCYUDepCeq1r9HATnrY2FjDthocgiiJPGidAeyKStb1YX9c",
  "key15": "5JyVNRGXHTMCoDLNMmoyuLqQYKE22T3AU5Yp8A3n8jqivcDSCW4hMr3zp68kGn5AVmyjGgbQXR6MtJBtL1x9L7dw",
  "key16": "22Y5cFanCB7sSvEaFzhxfBPhqdsARZWKxwnT67Hd9an7eeL8PhCP3ayp635NDZHJRakKSSx8ikf4m3TM5W3sWFvQ",
  "key17": "49rkRcMdYXBdvjGjkGaqJQ1G38tiVUXw5EVnumdV3vBPqL5vjQXH8EkP3t9r85ybWyYRYhDgccRhchrLgyU79MeY",
  "key18": "CshPVvqdBpMBKLCodhcHxR4MMjNRPvhLAobHp1wAdWZ8fMfJxwphhAp5e7hfqC6wvDLakoT5Z7ThUzSYG64FeL1",
  "key19": "64mJ3LFqLo6UxtWepZ5vQHLwQUQ7s9T953KRvzwrXXBhhPCs3jbmKcs9TFnxDHKCUEVo9MttA6N9mKYABahX2Dbt",
  "key20": "4Zag3PFZaCMqcREdJCLRVzY5FSvLY7J9K6Qoh54E9YnQL4kC1d1gp8Wa2MqTbqKdzLFW1VPo3X5dfHsYQJY3Y2eW",
  "key21": "3KNdxAPjYCCxVXeJCQ8RqNThSWheNqg9miHzs6mMRbXqNvJoxA1oxihiUtLMhJfh4c4gbW4VBZt2F6j3ZQtVUqwE",
  "key22": "3TSjm1ERfwRuiPmKBH1e1RYn3iDuqgKnoQQBW5JeKPC6r1CBYpu3HPgytnyzEpkKJ3UhEw5tEyAmanPnqA5AWReg",
  "key23": "25spboZb6bmzcP8tDdPw6Yb6z3mtVVBTUGruTNZCxRZatYbsNi8TohvRaAcB3DbpZimq1WdX6dwYHqrSX8tsY9Gp",
  "key24": "5q2K2BMoFPphoYyS8qRXVcswvC2mtr4LzLxP9JXbqSFQQa9PNQrFhmryYDT2JkHy2WoGP3Xud4Ei9C6eLHSQh7VA",
  "key25": "2BFTiUe8AFo6ZUKJtrSvRp3ViZHQ4z6tGqpgqfmEqAxAR9sxY2nNPdKK5t8vQcfidbpKM2g7aPqkX7C8cKEUEc6",
  "key26": "3qfbX5TnpZ12qAMRYit7sfkJwVy2KPynft22FXEnkaxoii8cb2foL2HAADE7VmjvLwQmpc9ducFmVMYTnFueiaPk",
  "key27": "2eW35jAKCT98bsEjFGdgPAc2fmPKryNmVjYY3xFHePDkWbNr6HQbAyvBffcG6fJ9z5fybqHi9FcdSHrSEoyZUYUT",
  "key28": "2azRZSv3SD1EcKtoFQmT9MtPwsGLQU9zmC4cqTg7qG5h6rZNQeyhJHxJ2Ebb72JBvydBxpbTUyYDGkyKM6cm4xZA",
  "key29": "3eTKirNtcXF7ZEZhsVoJ4w7Z2m9csYmczqFpDB218JgTbBctVtttvqDjjG12ML3QDQgiwXwrkYWoRE1cH6w5ZQQE",
  "key30": "4LJGEoZ9WYqn2Zovh4t5kLHQYzGUgik1C1xpNNoRFgjEwHDgbC74Sp5X4eAxXRzURSrNKLqy8VusR481nboUn1rR",
  "key31": "3DAbNdwxGfb3kMy5pNmhSzGkEyWgGT3TGLcEKbE88GqzoBq4bmjbXyhtuup55wE7888X7MNGLUytq7MwPuY8gGEo",
  "key32": "4NKSmRAeNFWRdN7TSYS1cy5RCiTKaAVWAhPzNa326VgLZic5bxXojqrMUkSTkGTVRGkRAXSRRHt3TnvDfadQaUkk",
  "key33": "5cn4Y8aRResTt7iiVt2FkdPTPfr5M1CoyGVm3zKUsVsM691BtMzDqiC1NgsEs4YhtqTky78GevUe1SvaYy2HgEoq",
  "key34": "df4aq41HEAkwystBJzjefuGuxmsqU6EPTTz1ThLycAWYFGM7rC9ThQZeAd6wK3R68tb1z7Gncqd9gPMUR3fYFXM",
  "key35": "pnq8Ms2Arj9L5dQGL64vta8wywrYn5QEhb78ttwyPfUDDM2wHTCK1SgNNK9mNVNBXEP5Dpgm9DQYb7PdwFZvDby",
  "key36": "4hMeJE7L4Bqkf8aRkGUKS9io7U3mJaBaNRLA9Jp5TBnSZBcAX6qGhJrUcXTvXDxsTHu66y645YvCSzGCd2JvYLX2",
  "key37": "39NeuRBpdVX5fxNDzc7MGsyd4b1V5jcGDPEy4NcF5RX5cEThFoucWi7M39XVbGLayoUxrh7QKDNMwxazCGRCkLE8",
  "key38": "3WYgf5h4D6Y2DKrwQCLKMLiofPxLxQQsr9k1gcEDf3PLnZx3juLX5kfGHvqx7dRbDpWTdYQA1paUgjC9EiEFxbQM",
  "key39": "283eJRD3bF2hjmN6yw56SPLU6hHHZGn1uGB6UFikoDKCZG1WPBUb2zKV5qpcA64FNePGwAehisTHoZrUtgHFUpQe",
  "key40": "5xdskMg7LqaTy7QPibi9ff4JZ4CA1TgkVB4B79iuFUGGSiX6kY5a5h1BJCZLRyv4dLBLVqcBqbCTEahntKsqxoLU"
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
