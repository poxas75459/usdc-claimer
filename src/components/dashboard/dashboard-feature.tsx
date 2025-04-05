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
    "3jwKbWrw8Z8B28rZV2224jAWEXC6QB3WSUVfqLnMFegrWwVL3X4gB5tuCZkLHccdtBL9ySCxpi277bMnbUecwwhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALKAEd44yzQ6oJYPEBitiNsDvNFydRg2qjShD7ohfg11km8AxwnmgDerA1ngibbkusWgifjMCFuQgTSWf4WWV6H",
  "key1": "4mF6jU6NrMJDw2L6BTESZQsUkPyRdnT7RZTbYC9YyHNye11Q6UqNJTcKxywYTDrRSyYADtPhpnoucWQQAd6WqQsD",
  "key2": "392rQsDARHRFfFPbkU4TYgzu8W5XvcoNhrJeyaZrVQFXRm6FKaHe8NLQUWroD5HbyyQ1tdpenu6cuCcy6ihAZqFv",
  "key3": "29Tqch7M9yrWoGsb4gTNqweD4VqmRzpVFSFqvBgWYiGbWJkbVypKDU9wCu1rSkeAmaurKuUYsejY2r2j1mP3buid",
  "key4": "4e41sP8KN5vdmvAUVN8ad8wxU1gXAfas5NZr8pbcgLSnU9bdTWKaeXp6wLtcdRGiPyB3iiPC24tpHZz3oWqcuKvx",
  "key5": "339o9tDrfg4wGmtdkJdkcBxVBEjtLUmr2FexpSd5QUUaxaQGwugeKNTPcGeMkv6S99r87Lg1xc69YhRytYkxCKoM",
  "key6": "2LVBQAddMWNrftRZbJVxnPa22yi3WDnYE1rqatDcN6n7NnoRycV5SAZgkbomDacgK2LC5p7dSAZXuYEpxcXZhQVf",
  "key7": "5DNUho38eDzV8JiL6c76HysqkcPjfoUQ1qKZJMwW59jjoLAopz4orfkF1XdFFmbW3xLSGUZfd8j4JuAX6FPCcdv4",
  "key8": "3vht1ZWxYM4KqnAycS2D7kHdmbAiu7VrzpmpPFTjDwSRoeqnhHHzuDG2dDk3b4HcbVNNw3pHSfEGQ8JVDuDnEqY3",
  "key9": "2yjHDQodBqwngz43eTRidiEDyXnPyGMoSoANHhTw6T3iRYKQpe564NfTzHLCAuuGf3XK1FbCuxiPnmkVVjS6ReQ9",
  "key10": "2r8L7KPvTQdtV9hrHx6sTTjEA76U9XEe22srGWLoyjXayzM3GRjGL36ntrojhzf3juceTSnBskyTvpmw66pnockY",
  "key11": "3RU1KFw9RAyyaPLm7dJUHhkqsZJvRcEgUJvdeQhPopCVnM4XQfHdxnjF5UrrNr8XPWREFCUJ2hcALRvTfBWnZYPx",
  "key12": "2LGbj8D6FwwGsoKizYY6W1d4arpRCfjLybuSX1b3eKeFYioEU6djBfP2FJz4So8tQLonbwnrRPgefwg4MwQgyKit",
  "key13": "ku6tvYumGtk6VGWoHLsXLc67AcqYs4KakgTSspEzEuxea89J9fY37AqdRtUiuPZn8PFsBsnHf1UwMCbL8ZVd4yA",
  "key14": "5ARiPnM5oCer2JA68YMGDE815LJsL9aK42J4Wh3g1AavtUzHvi8F2RUadbaRUTgxE5Ti77oNMMv7pnMJcWwfMht3",
  "key15": "3HpcyQpDEbg2EPCujKQ43Xzjsxgb4L3jnz4UTrpguFyUmnhuU5RdrjUPHjCEgM4mvMHwxsRgNcKD2JAg9jEhDb15",
  "key16": "5GQqGQWhKHB4RszM5d1XuLdLPTiZuiydPbYvqHoxDX8imabkaunvpbjrXp85cuDpAAMFoeeJv6qnMxbu9dKmtTZT",
  "key17": "5cXZoKcZFnRg6nDLeTAvMHbkUWGgUj9Wk6h35PXUmRpWM5YyEnBm84M8djW8L3PFEihkoMhEbzbYfVsqWdyxNCaZ",
  "key18": "39avNhySnS5APQ5ChUZeym4Me5qGVYNCk7t3rzJxDiuPfWBbqyfLYTgSXdf5SJnbR159Ftrs7PcxqfMfHVd4uzvF",
  "key19": "65FzupxUVnSdcmof6zCmwgUmCfsnMbkDispDBoenrWHGR9YmYJazdDcBdXD5tZkLjdmAx1H9GDRfMDuynbphSWDh",
  "key20": "5WieVwrutZRwsbiseGtDcDAHuLQEc284eg2pGKvHWciUeD27zwoEnVHbJdqcB8ZDh8e1r66QVWBEuFGP7SiGjmyS",
  "key21": "kjKGiz31BiNTUEp14ocuwk9YxR5Xr9prgTxCQx357gCbuT4tHyRMQVwj77BniSzd4hmCXK83MtYQEFvBdYsijr3",
  "key22": "463xcGd2aYfeLbSkA67iDY8EvztTr2GMUTqLQVazpLLGntbHYXJZ7wTfgaV3UhuM1L67Z48viP7LS5a6r3wg3XkQ",
  "key23": "2MAUA6yW5DY8pA6PuFs5LPRAU222UK6KR1Z4MtSJvsXJHbULYMQbJ5w5WcqXmLKRUGKxJ8VBNdtBZuVRA5TkcAJs",
  "key24": "yp1qJFpJUyAFuYzZCkLTaJjUMs96tukmTQiVEKn1eNWWWFouetEW7ZDJtLqbgpWbYovu9D8LEfb9mTA2ZF8yPaZ",
  "key25": "mM6pur2KrL1tGEMDPvqKeWxSc9Pkos22AZLov26eTVaKQZjau2ZxNWSuzpGNqAWCFhZUt7WKnwGqCsJ87Ey9AW7",
  "key26": "2g2ukbmPYx8MdvPVcznALT4emF4bFmJE59nTZ8GZBWg6uGCUouLkk8VNJ5xEMeWKbWhuGqhtzEHFBfuin1n4EJX8",
  "key27": "iN2AWN39WKNEVbBKbgf3uMQGYWXRRzFUHPFW7qrSYM5ffieV67jAnbfXusv6LkEKDLXhBEANAPzxfRsWHMFiVS8",
  "key28": "5C6zAuug9ofP12ziExUFNmHdipAvHGGDn5sFVtznCmXGk25FCa45cyAeiiVvcqYqevRWfvt3hvT7vSniHtE96VNx",
  "key29": "3uVKxuBJKL8P9n5aN3LuAzosfdR5mpTeMvcAZ77z3sgyZLcXtvvCoX9sHdJXM342Hdr4Sor63c6t5v25EzFbUcdt",
  "key30": "5r2bpUttgDYiD9qbZvbZz2bnAWwXbejU1e4ZVUH1uQoEbHVAtTcnX7cnj9wTiPtuzAyBrxA2eKFsGTdUc4xNa2T2",
  "key31": "4NykzkUnyWTCRUEYgBqNULH9mLRDeNF9SqaCYouQLkbzEoPj51Mv8cRS6qAsKJNu1EB9iYwcNiCpKNaAJ2BMA1th",
  "key32": "28TKcw6FK7Rxb1m6Dsmffso2zHPfBXj78kcmsdFvRXDnUwMYGWHcFe2GxpDRpqpzNtj8gjjiDLtHD8R3GjJTUvZS",
  "key33": "5GEN8CUUaCX5ENBUMJamGRj9HMcXwY5cxCD1RrMa91Gmzzs5WKcuAERwN9d3f3chjwWeiy72n3U5GwodBrwL4WLi",
  "key34": "vov5NFKc3w1R6eziMK2ToKpL45X5KVFRC8FqSnrgFXDcnzmtWLZoaCyoQFcfWyn1EAw5VxKoKL4HsP28JvV6Re7",
  "key35": "5yxcxZLKao7b5Z3DgEXeYeqaTrBfGJ1TJP6BX3gwhVryAidPRFcJtzyD1Vyb4jRwNRexqGxtaaaaWhHP6uYW8dnX",
  "key36": "4EYYzHXMNrwYtet6Awdi9TUHVsCj7MxepjanomGZ8DcFubP4dmzWRjS539xb1Vb8CE8gdw7ELwCAwZNri4YP4ASY",
  "key37": "4byZcsNf4XxgAZAb8JtcvRCXcmhnjG9HWWSuobCnuG6R31Lu7d5EEU3yFtRKvPDpgdRy3Tj4jjW54J3eBKa3CX34"
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
