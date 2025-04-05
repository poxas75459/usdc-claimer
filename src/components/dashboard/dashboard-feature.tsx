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
    "BjJNxEqLbqZBo69uxEp8acxujsCB1oVSFDWCav8mGLCf3TeDEGGFM7fiQNqixsvBqZSx9MHXbfw3dD65PhGwBAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29SsTWen3QwSMSG9HD4TRiJCzQLh7C8kyc5Pz3zRUxPAAX6usq1kr2aaXsDRBp1T6zpoHHFodotQG9TMgjxixx59",
  "key1": "4RZtxeethACYy2QEifdbH1Ti6LVC8BzNs8Sv2acMbWF7weu6uztWEFGKnx12uNmTPTZV16UeYtc6WcLPEGZjnFGo",
  "key2": "zc5mSjRdoUPWvv7nA8XgonrzQW3f3GPp5AAmsuGWexRbED5YWNBuEkhAvAuF5v9WefJPjjTvGQ1SS7ye8v2a54X",
  "key3": "fyaWb1u9eicVdYgqdzptmctDNCT7xGDTxQDEQ6otjWakR7rrAtjti8XGGqNGZAydM67FKmdDvU7LBAUBGjWLuiU",
  "key4": "67LAPjRguU2AL3TARrB5CQG3xkZu7yM4bA2CVoz2yvdMNPWFNu8MtaRncU5bi2MBrL1bcbquLHNrYTRtChXNJCEa",
  "key5": "5VPQ9cv4PGCkQ5gqaWLqe3YCC72MkZNspcMyuB4LwgK8fHNBT43sbJN1DFJr6M8Qr9Md6a4TsDGvQWKvWqESUNqC",
  "key6": "484Dk4ebuNq4Kqe88Xbkn7sBBesyQeWJGwUDR6VJXDQ4WQnL64YUuPkYjkAqsaW7ULXnL42sNLUDPYJpN2Y1jfVi",
  "key7": "2t8qgfqM3JwospZycV9nbxPnigPHVJ3GgUjTM3PQr4LpcNWmEKqWWGirRBtXREfzEKfBfPNmksc2kqH8df5b5hrQ",
  "key8": "3N7Aw3iM9boPGmWfk9GdK9bUqqUckMgMx2VkWmr7W1Az1K2iH29gNgRXM3hbRFHAa7aJiRiBA9bW1hhPMqzBje7e",
  "key9": "2ckk6jDQxZ2vL1h4g8B7pCS4ebFMzuDoRvEn4CFHfsTk9pxNGnS42H2J4oPEvXjYMfjCBMwviwvAMx7QkD3UjoYA",
  "key10": "524eGMGx1meUwWy1jEGYxtiaJUE2EznexwfWskJ1mBcMDo5LibzhXZUoew1Phjoi2JVzMHf6Bm48S46mKP47xrBn",
  "key11": "5ouEqnzprJhuwGfUjJgEg3Pmh5vTJAqwvRGm8VNs6foRCaGfED18SWujMqBarLeJU5zXkRmZ8akh3KZh9UxCxY4L",
  "key12": "5ionodoMojnfnefoA8kKraL7xWF7ckv2zTsYXnyqLyvEmxif42DJ1BGiT2TnQHozTLGyAsnYBzpoU5kTDwxprX87",
  "key13": "uRv2CJTDYG3iDHwvzHcKMJPouptznvPpD49AHbRdyFsUguACk4JWtjZMMYa5vqeQJ82NxmDpzMwtNzwAYNq48os",
  "key14": "SzxyZzGUMMnYiRoHoujhZzS4UHV8UdKR86eVoYwgWvmGtSzT1xQDtPhhhMYrxvwD7a4rxNwqPsBr6xzQz1twypT",
  "key15": "4sKcieeH4SYvD9ww5KTjFhMVArHRKaJuVSYPvkc56ybFYR2id88igyBwG1aAvwDn5RsHSsHxf1kyaDknxQusWGpL",
  "key16": "3u3oQyJhYLFDonbKcXPrtC8mbGZ9UqSG7AMTTPZACv6fubVH72HzLVJZf16haJEoJstKpbm4sV7cHZzmZMWbDG7k",
  "key17": "JUweGPjTAddHHCJDZGCrcEqgicZNua5XUgfwKKzAfrd85sAp9eRgUGCeoQsMjhiwgss48F1v82YXGd8XquiHHMU",
  "key18": "4m7vEDN9ZzhHGusFMdByruzP1cij1nqM5EyHcTzRQYH5Ao6rp3hMf3zychBjJMEDcLfbvG9tbbHf7vo3mpdPo6p5",
  "key19": "SXbzFwdfkwyaYYbZXq4jgXzbnLKX9cpqzDnJeeSV6a8rn4n593kzFmDJxSCmoQTdrGH3uqoDbisBMN81w8F8am5",
  "key20": "a8kwgyinVXLzJKqmhxWPhVckSaiUdSqtdfqTprkZPrHUvnkcApsJ9iZeEnoMtrSNzGArLYn4cmozg2t4DWbumAe",
  "key21": "4ktGeqjbLCg4Q3mnRXJ4157WwDY5KN5JWgMcpCqQixa882mzzUhvDLBhYxPq7AZZQnwmP8CaaPeDqsvmr81Qfcz9",
  "key22": "kBjxTAxCtfKh9yn453Gm9frf79iwmrGY9gYpSt92bZHAb9rdaUZNtDv1b6zw2Qeyf2TLrhiM9rUrdMa9FmUiNnP",
  "key23": "A9gYGMYf3PLAxvxfiV1x85A3zhdEVXd6M1iisXTf89a7tr9GURNFtVq6jjurfM8UTH2DTNWs3HSuT5CJp5f4SPP",
  "key24": "4UUyY8Ye3m8g45EprnU8DWMM5KSWJbgo2wTD4RcCgP565fw3y1ntQUwRxo7romDpzUqoEt9TPuqV6n9UDQ44sHLD",
  "key25": "3xQwWNtJDiw1QVgAjyQ5SZ1mYVzbGoKTAsW6VG32hQes4t6XxpDHTn2rfHyCTW24HKCSYLtttyEHYhGqDytmgjjf",
  "key26": "4RcPKPgDAhew1a4tcRva2qpYxymJhhezcQZ1stNpvSGNaD7sxDgjXKkMYiTFvprHcN3amEn8YKaz6F3nMMGsuHuP",
  "key27": "5R9ocrnqx4vfryecvPGXwiFXi8ZNmFHovSHn6vvPxpUvN4hhwqK8PzxKSarcD6bbN9XjtzQXErENnzWK4fRUM6A5",
  "key28": "4brwHYYFAHipg6qnEijkxvQpj1R8Lw38obCD1d687Pxt2GkqcvbqJEtY9X5pmcee6tghT3rfNP4DsNo27Bhw4f53",
  "key29": "CK7MwU2JrV4pJUgdxceqVsKw8CobwBsjMLuzE8ukssRBiVn9xEx1QM4VWHCMhgHzb32F7canrNx81jJ1HG1N8Vh",
  "key30": "5S3nM8w2Yuki8ZQgncY1rUaMH89ikWNnDNDxnuPdfBy4oqM9KULXQVaFxepi3aEzxnhmctHXYsnQq3eNMmNHhuoS",
  "key31": "4PHVwYcPy9xeLpaiPvkEQwKZtQ87HD48DoLDYTiS1FvPCRDeCDTHgjgwedfdXhmNvLtfbGufPizC9fs18tjE6huH",
  "key32": "66mTKcKXxCvttHnGyUdMQhCTcfu9YSdEaot5QAjVUWNZWHT5qUoccFG1bRozmZCoj8Tz3ejTSGZ8NENJ1UyUSkET",
  "key33": "4hokYs6sy2Y3UcXMrdXAuzZjtfJcYFrszSQKB5TryhLrha61K3y15NzxeBWf7FQiqjajsTbyhw33Z3gNLfA7pSp7",
  "key34": "2ovUukH1Hr64fUaVH6rfdnfsDuryHUccCZgEYqqFkfLBjUyRYjr5MdnwET2CQqXhP3P8eZsAQVXfjHbZk82D1gWq",
  "key35": "5DbNkFofNf1AsuYbLSZAq3PvTpXLzzENe3LY6qmQcbFkgwqKnoyYQZCRNJas29j85xFXm6iE8HZpZp39VFjAu8WX",
  "key36": "4gYA4R3hUrEGHqrFKvswqSpmcoR8ZQkkAyJ7hM484gGLgMNKTQoo8jkDc7qH2H52Y2RZuoLieCq1h2mrcjofTGAR",
  "key37": "2QESW3TRA8mKMPPwcUGbw8StRdCWS4Cy3U12Eb5Yu8JiZhGvSeDfpYcCYewcZNGzQo1pZ2hXMdNgMYz89cJY9Swq",
  "key38": "5Gp45skPXkfvtrNcyt8fYVe5gGjHoHDKnPL7ZaHKNV9V7WQRsmwdHiKnuei3NbPPrmySTcV1Jm8GJZ7Hv1TZjyzS",
  "key39": "123GaXJJbTjxtbqEbDf31fqFQxiNWWpgQwLWoxV897EdP4puRwL1DApd53BjYTLUbEqCbyYZtQ556X6QSRQomaS7",
  "key40": "2sG3TVSmmkAVy2C8Li3MjEfg3C9hZaajDKbxAyjpu8T6hz3LB1Rh9pNSGa1SdquAd3JGHdjN4X9djTVpUmouwgZD",
  "key41": "4BqgwVus9YUpQCZCzV56dK24mwoDyAk8eg6LW6JNL4MQALVBMYebKEFJZGsoSmnEAqZ5374rbmTScBzSG66H3i8K",
  "key42": "2vAoJH6r4jK5a8KyNp1D5A7o5qyoXrzrZkAL6SCddZNFwPaHtDpHyJKdBgN6ApCtW6mv6x9159n25Ng1WPmwJhai",
  "key43": "5ZFJExFRPRvrNkCLZtHtRNoDEZCqcNXJ33msh9gaSuoC7hPfSfRhBiXLqWD9dp4nVaWAZaNw4RndAjuMSUh1BLHf",
  "key44": "3hw8ifC85AahdYGvUuahbmtyZyaiMJYBU8DhHWA9W91T91tMrKs2ttiWevbtWDkpQpd4wXwY2p7Pa2hGNTcQEcg8",
  "key45": "3aTX6vVQBi9XpupuPv8BfqCaWVnzQdnu3TXu4yZdgdQk1kmeiAytRXc6aNN42dZu7xp8fdkeYCDndhjMdnm9Ybaq",
  "key46": "2f6MtQhs8hx8V4u6GTv5GbLi6qccMBTjNZeWV1QJW3XpayaaHAGNW8UpyzwjzPfDeWEhXVQ81ER56GsSk4Fhb8YT",
  "key47": "3o6otwrjosCtQwAwb8SSq1PyvQw1uspr19QhVgrzyaFMCNmWNkMwWTosN1T75oZet4cj4SUeLtxV1DwDnhEuLM6W",
  "key48": "4vLixNXs2rrDrwMaKXJ7wEu1nm7N3JkUHCDQSQMV9io3P5Gv82oj7NnjwCJQssUEsijDSp6PXJQqGnPwT78ppXZh",
  "key49": "2eCwVZPLoTu7hA43rCopaxYMhGZkaYB61Y3xvbquYaFxzYRCibSmhfreoGKWnedvpGxonxP2yC1JjHzaRcM7LyAT"
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
