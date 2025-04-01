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
    "5GhKeBLFwA7yUgoo4x6wrN515jpLnBe26vhoGWNSWFF7CDgohzk1B9qjQfA2Ax8jWo7Pa95DRdVpC7cqRLZhpBu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SunyBJVZWpexR5xnmcjMYVLRYEGpv4C1FwxZQbZKrTsJs99QAin8ZyLHjz529HSMKBhXBPs8JuTbsGL8NfHbhU",
  "key1": "cbVZ1nbjkZFdj8PeD5kLvm8dUMfB7qLviDbD4Yj5N8bQMGxThUYwU1SBkhDHjV4kFjts4DW8rCjB9UyHk5Xan5h",
  "key2": "5cFr7SerVf6CjhWBtxVg62TjWL5yvqnK4rA2YqoJ7MDg2NmTWE7o74YE2sk2VY2VUkmWzF5XCRuu2ckmn2Pv3WzC",
  "key3": "3orYDxKijqiLZNHZSN5pEKNqjvmKf73Tsqg3wt31AiQX8zM2fssJM4cb5Dxv9su5RFdzK51yD6fMU9vubj8jkKEP",
  "key4": "5k5YpRoFmVjydNPsH6fx81fqSvRQk8EZ57PGEYr9MkfN38V7e6PELVQqv6kqfkkC7nbCaPCELzykrRMEVwD5yxMv",
  "key5": "29Hzmcp3iVRChqj6heeDUMxqp4QqBENiaebp1HbTZC6wJeTJ3r47d52AXQRM49kheEUJ9dQ4UbsHp6LYbuN1qXGt",
  "key6": "3fZPzHhSC33wLcwR53362ChR4gPRhEgAb2E2XqWodkxaFSZUmqXkGbyLFp2kz98gDX4VqtoamohUXsi39uwfdayY",
  "key7": "5xonnd6xxetwyu3G5CprLeTswBVD1XHPoud4QN5Ut1TbeMaWKdBwqxR9uinJQFuPBtJuaLFDvPsKUvQtQzMoi2vV",
  "key8": "4YbwChNRrEANtia56t1CfpERF3buDD5r2kt9Sztx6TJ5rsCxJeB6doHe4EhWj9qjASmH9JK1jWtEKaZNMgALSQTM",
  "key9": "3qS5DsbHLB5CYrTLTzZYngserprYS7NfLvcf5Q2cwm8hD3uzXGd9GCVewKoZxt74S7HZr1PNvcZqcKAvwyhkQFDY",
  "key10": "3jDqeDcMKNFhzp5jg7PXPcy1wpNXeXwgCrbN3jbKmnpbrdYLS8tJcBbzUHfNZdvP3QGMMM6DrjFngoHocQKmVvxK",
  "key11": "Ystsa1kWV43fiQpVL12uvqHuNstZCTYStVJ2k3R94pB7316jcamMrqSRzh4wgJBsPyuANx3abnZKJsBVYzdrNP1",
  "key12": "QZE1KucfdPpJsBmMKmEp7PXs4nSM6qKPVG2yL58mmf56K6Gpm3vQJ9LVDAukvNRLK6wv6KnzptYJaauJExUcphH",
  "key13": "5Kmf7EAmT6wtxFjogteJJEgX5ZQD6VWgAyZMyvttKpQregTemXnToynwKeQMVTVGSi82KoJEPYzk9qEMBmcpfKjn",
  "key14": "5LfmB8xfeytKCRkTdHNGj7yhtXUdRt29sKXEnb8fAqrnDJLymhoft9qpPKy8EZRVqnetp58bwS6iWMJCEykKvaxZ",
  "key15": "29MEVaehMdUB6V2sZHHxJvCm94ZJaL4NY76Gi2FRiZAUJ4Dd8FCqK6kmPpbSeUjsDFxnivbZsgfQN9ij3wTZ8nrF",
  "key16": "4ttV7E1DhvGuKhkZ91XHJtZt37L6Rvh8vmqvNLSgjM3PYUFdsqEH34ipDRr1RmzyHqudLBph9mrtawS3CHDbfAcf",
  "key17": "51fnAx2e4uhXc2Ecms1Tnz9yZrEVxSBWujrcfh8VehQWtiKXbDBwYBAfbL3zRnU6hYpBY74GjbkBaqLqwNdHeXa5",
  "key18": "2YuVvGAtwsLqEaCwKFscsyjPZyGV5dvG3JqZwxFyjS8gg7dgpL4t5Xau8bNWVWZcBCT8oUWPYbJRCUq5fquv6Gjw",
  "key19": "1TDY4qoKo8VP3EF6SHGdwez8Tzj7KV4HnUUkabXrPQvy5E4TAggPdgGUTwAj42fmyeFGBpuYbPpLXKcSJLz8w2i",
  "key20": "gU11BqPDMrVZfsRZtkTf4ZGzSRPDDrdXo9ySyDHTUPustUavhVkZABvDoNUt3RsvRD76KL7gevd4rrnbxdm831X",
  "key21": "4jVNd5jmAQWhGbCFXKecDa9gbtTiksaP4zPdvTp8aoKNXmws6ueTds5KMWGe3U9JtmuvdcpXbNAvJXMNHxH2e28K",
  "key22": "5SXELM7DJi8gAXWWofer7fDfB3WZUV5iaWvhnvM5PYyWn63JRg1gyn2jRHHS82mZqDMZNwDB8CLDxqbSjkYxAPWi",
  "key23": "62qwhemYvzGtKtMJaTM9bMZHqB4ZLUDASMd5EaRDXbvEFE1X1CX1aBJxvJC6tzh4XKcpemaCX5ixSKdfMaioDJFR",
  "key24": "vKN158G62ShcwKY25V8CgZmgy49v1fovvogFKEk9yPbjkMsoC4c9UxMf62U4vYSSGGKVL2DEcuoVpm9cLqNh4Pp",
  "key25": "4MWHhmzK5zmHMAJVmnXScv7xHzYx9mXcGJwnM1wnHAYyXNeiddgDGhpxce8Q7a9EV3T324fx2qPFgBkYeVRcw3wr",
  "key26": "38TVT1L91jZ5utbjXSW5N8ja9a5x7RzsvXxbivLdKMX3frsQjNQ34TeiL9QzrbfbNdcRyg4mJprF6pVYKvB9B3y8",
  "key27": "QFajen22CVDxiLoHghZaerf5mHiouLG3LH48CM8DTYumL1CeM47CwzdcGrWdmj7Ae9BizZuWDfB8Je8t8sz6adF",
  "key28": "Xt9M5iSrB6vCYbRsPjd9fTfmsR5FqNHmgqD6mFJz1N8d9nUGN6NpFs6wEWjgY79bmAHGBVZkdRG94TRzhg5MFXm",
  "key29": "hYfLYtdWqan3B5dTRpfxbZK3MbtLMuPKXGRQ6uW635B4prwhogtoXy4SNVRdoxa4bHYKjTpYDYVJNsEGUkZVjWS",
  "key30": "2uPcGepiybXc86seqHxpgavj6Vr7uxoD5FqCpE5zVtKd7ah9eqXM679y7h1DLSUstwm9TaQtR37cysjzSCsiGR3Y",
  "key31": "2Tdbu1SDXQKpp83jjPRzTX1LY8Tkx4qg5cdDFMyxkL82BLSRqFe6LAN92nXsdbaX9yUaMgTAH4VwZgR4xReHJRBK",
  "key32": "61bSLLcgwBUFWn1wSscuJN4eRZc7FmeRDqBe4KLY5F4MM6bkeoNgrgQcxFC4FC49yvrxWErct5fJze8eQUBXnZ8j",
  "key33": "k8FxKBruZAheY2Xy8hxAtULn2qDreQ6Mi92C4atoEv3MTirALczhnS1DK5h9D6WcE67mZU79deyMg7CLYw87sAd",
  "key34": "5mS1FLZtkWNTnrvpLfbqU9CeGaVexAehSyCQDFXsrU8HxuJBZzvHdHAbU1kGBJnCbHyiFArVmq3fG15783BjYRd6",
  "key35": "62Ewi26cnC9FA1cDdAKzsxV7U1RN1WSHG6tsBfet1eD2GsNiT8CzTtFA4hhmYFRLGD6S7NBigdd5KMqKYhrrfGkZ",
  "key36": "2M1eVR25JZ9hyz1W9u5GNHivKeJrS7yvUBhAsvN25Tg4bKs9JNPTXWpsCjQ5oCzYEGN1dPXAenB4sMkeYef4ytYi",
  "key37": "3iy3RQiHaqrxGpbkK6LK5d8eEL37kSokGpPkvVJf66Ct6oAyrSzhABTFtaYQErwbuiDJdHNC3biifDKGTZ8TZRBy",
  "key38": "9JDkwQJnmc2GFHaR8Lzp3RXLzxzmJfsknFGbJ8N5Ci7Ana6uog1QkJM8YqfXPD6RfEThQts7BVxVgVDSaMtVicd",
  "key39": "56Mdsb2UMFQHWgBnYbdFgEpBFx4gi6Zm6UsZWqTB4h23MeJR5RUnULpZ7Ng1vjji3YH25kZAz8TjZcGtUgPB3w4X",
  "key40": "EscuzK3k2yA8N9q6Zsd11JR4YdbwUbBkztxpJTcSxxFGeQMw7f3DZf6jPR55M2RrbXsv56XTntSUBySYxtrkUkk",
  "key41": "4QHWAJMmqAvuuuEe6GKfRgMVBFazj4f61EMnia2n7zeRnARcE6rdHpLNo4uK5BcK6HcTYjmLWe8uu1u4GnktKNy1",
  "key42": "zA8dspxu1TSTSHCqd7qPSC1MhsYivkFMb5oJzZeBEy2qd2HzpvK1pjVJbfHxCZEy3NCpexR27jofiaYHVjihrSY",
  "key43": "2Y7DYw8VY45pdNMWZpBdqLQmCiKcgfBfAjddzSidvQ9FQkL4Q9aaGJtEgxVgGKagzveLPVSRnEByGiBjdDEotW9S",
  "key44": "2Gs5JnZcqTymZu34tdJpZsertw7feVE7Sf7mNBPh3JXufY4Kjhd3Y5MxnSBqfCg9HfYQhnfcvn7JikYBvWSrdF1n",
  "key45": "5ATSgr6DmKw2pRbaEw5MgA3cLu9haUDw86dSMKTQW1fEHYjricPCybirW4zghFex4S3FxcVV7dDf9qSu4Wjue29H",
  "key46": "2bJjFuCXQ7wwkU7XXSJ7azaYEypjefW41J5zjLu9r7fZb64xuYeH6ZvKBse9crn5hcvy6QKXkNN1AjRg34c3o776",
  "key47": "4pJHfXBf7sWvFnuLpifHvoG8s7yznDy11X843pSczVNstAGDMn3umSzyTw2DJNX8mbQqgMxZ1YaSHWcq1FjGNz69",
  "key48": "3JoXDasQsG3qHn4xPh19Erz8Vuv4MNzZvw2mcbexbXt3WQ8AL7GVDwwT136CfPrC1Y4FLsZBoU2LEapL2HfjyTi6",
  "key49": "2FASXwZZStPAcfVNbewSwmsUeymcd7fPt4k87CkeVwUt5UnyLPTtKqtuRFPdQeDDTCrR2T3jh3ghrFFxnmcganCk"
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
