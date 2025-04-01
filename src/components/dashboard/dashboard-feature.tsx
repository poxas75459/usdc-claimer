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
    "3mt7k7YwPf5S9czeXcse74Ex2bQZPaQAmu3P8Hbd8wptkyGBjWWscSuFpALwi1haDqUXpuFe97bW5T9aB2H6319e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491Szs5pcdYkA96sWx3tWRxxAHYmmh1ydLE9bN4GmXa1znbU3KeT4ZDi2XKX6EQ3eYrEVuKb4bcGr7csETsSo74P",
  "key1": "c2MmBgzo5YzEckKHXusvzNcgNpyifj9QpsnCcxLySESrpQNm2BfoUDAoakh9frk5jyr636LUtMeBxCvQVCgfPHX",
  "key2": "3tvcaerYKDwNmDGH6WprZiPwwjMcmtG1KAuEcgvFQmfMUrzicyERjp1QJEnHMBrevhK6Cr7kfzBDym8JJKZqnbbW",
  "key3": "578SstmWY73sbLWPotW1fxqv3vY8cd33Jg74DacDnk91dhYpmeYb6usvhQqQ1H7kf65s8aW7Btky39VdGY18fGwf",
  "key4": "q8kEED5S76aaTmQ5WsKxowHrFXUNaZvH3psK8RowDpZCSHPh9DL1xKreJCTUcZ5iEzK93z98wwkGDHMbBAoKRKY",
  "key5": "4pzmr5NW552FqJLkcqGTfu6EYfNJuZ4ahY1KCtviiRGXcJKFxnq5i19rxSv5mHAiZmCyc5D1cAsNb5kHBBdgZEzA",
  "key6": "E2oeRCFa19eaGE6Lk6tVE2Ys57eHqkaLAmHUiC9Htfsj1AxDNxoM71gSLcvTVzMtrVGskBU3SYJvmH1Pv1aWSuF",
  "key7": "x8CRsqezbzvLSfLf5nbnvPjiiZuRauQF15UVuF92vGroqJkb6YQerrqWoHEK8n7iPNdYNx48xPrNvjhib6WQ8Uf",
  "key8": "8NHdVK7AarRejMk2TSbdGJvU6gCaFoz58hhCbyosmP7mvktmeJNeza7vnBLQ2DbgG7djJBsAaCphhiW878KggnF",
  "key9": "9U5HZ8WGhpjaUYyERXvxA3e94bjpYfJWXvSizdEbexSbB1Hjbn5qp4rfyU6RFBzwftVFfhEsACQ8uoDwoRazRPQ",
  "key10": "3cMpQ6nuATtGBi3azEB3RK7g2Jr1W6oXNfR3dFq14K2uyU9dZXr1WYKVB2ThHB6oiCX2fyjRZAFZVbKP5jR94Zsm",
  "key11": "2nLqoaygbAPPDxp3Me26yWZzbop25G5nAkgQ9Y1wKzA9SjRpA92BDtGTtxPQeQx3SbPDt5wH7VKAYjpW8yX5ePg1",
  "key12": "4aeMXwv6vNVCTESeYSywEooM9Lf8z3go4ZHJktDR1XVJWhJrzmo4myTMNUj8EgXJZ843ZCtdWs4zf5q1HK7zYCo9",
  "key13": "2y96Ep3QbhiBkJxFX7HFyF8KwCqfWUMw4eu9YjPNqRbYNcjL6hpn1VqhSqx83nXP1zvYf7o31DBrVHtDGaraw6ib",
  "key14": "od9nFC4bfy3Z2oyXuEZXcvm43djdPuDMnhtGygrebL9F2NXvaUjFmyiSdDGeczjhoGELj1n89AK3PVsW1cVBQaG",
  "key15": "2pqhHPm6kpH14shwseXT2qYAH3Cq2DE6u79j3P46pa3Uoyst8NeTaGArDJ3WkwcUU5Q9vusmcQJSsMD3h8aN46yD",
  "key16": "5a2x1ypHN763iU1HTDt5tZiQLSawF66BhUuTtug2pFbyZ3cDZ3CfTcT5Yem9nrcpBBMR34jkRnQi8ZmPtekGavT3",
  "key17": "66vdkarcLv2rYL4wt4mPrrzZtN8h7douHkugW4mjWyFA8ksfF8vABErrLCS1jexMsPUQWjtPcdCXNx2mGmh6SWe",
  "key18": "3UjTDjyNxPn5UyDmDVQnuaCc4ZdCjaveqyWVevSjJVmTVDSNUWpZpfcx2TuUXgrNeYSWm3xCvfdXKQoyN56U2nsW",
  "key19": "4qwp59bsC8zqTKxxQp7rsrLX4tbFDERkwcYgAQQeEKSxtXVuKdiuEKkDjsTS954ARgaa4u2g415p2uDYuJXFNRiA",
  "key20": "3f9zjEpgyBBo3u7xFE9HP1Zjaa8pyWSBrNY1JSveo6bBYrBHRbN2V6boQQJpp5D8derQV6UvSdTGTrxVZiet8LJ7",
  "key21": "29vxnGw1cvwjJrCpt2epaDyEGxn1HRP7RcLmk37ojyXY2Dtwv3gfA1uAh3nueUjxmn2e4ARhj11fvU8VMZH4EvBL",
  "key22": "2JyK8pjd9bRdmgzCBDNP6Z4moku3iUbXcmUoRivymN3FADVKiBew9wRvzax9E8JPh4jT4PpXKoWYYYmiuC1b9zWX",
  "key23": "J5J4KvdD6ACk2weaZp4DfCAfZP9h7feyyEcMMeuHstijwMxBg6m3HoGdEArmZZBh1QrErPgCwA7ooxvmTiLTamf",
  "key24": "4evZGbWKhXiuNGUATnRUbpv5dCquwVz6Ezo8PYNzfVTwcrmoXgfgDV2rngRuyauv81GkC74gWJPDRh3X7kQ6fWdH",
  "key25": "22JM7pVJfVMuwbaykiNSA28JET1LRWpS2jNFtgB5QEw2nFewezr4HW8n1Qy85Wf6fN43jERs5pXCJF825kcBTriM",
  "key26": "29SGoaFY7ifA2UDUA5m2Yn2iqEjXCo9Q4Yx9biVX6meS9xh2NzDusWBmTdSXMLU95dgBoxg2CGeQpCK3AxyaJwGu",
  "key27": "5HJ4FNgqCHMxyfUJGuxttYfWfpaWKSLKzmNXeLAD88yPEeUBN14uo2xxURwsctCizv4DAqULvMWrJSgTjdXaGMpp",
  "key28": "3JcC9qMcwWvZjuDNQTcnRzRZW6pBmttb8eLh5xgtxr1cqV3LcC9MdyB3z5W8c41y2ZufEJ5cCG7WtFqxWkZsGHRr",
  "key29": "662ntHAtYRmAa9u2YK67kaZE9GntCtgdT9THzaJzPqe5tknDHDFJsP7HcjZoW4Gsods3CvrTo5vmJ783PyMCCxHA",
  "key30": "paSQGPQ1h27gmj4t2HMcywbsb6dAvjoib2m6PHKxkpRUSYC5zwF1tWUGaNHnJNx2z4FvyMFWs2NcRD3Vztp11Pr",
  "key31": "3S6u8HobRi9t5JdfF6EgoiMUzwPwEvXoPcHSmT8S9GJdvX6uvSEuXxakw71SVjFj5cNUY6VMsKatJqZsRxVygFUW",
  "key32": "5odHc7BtZevWpUtHzq9vMgm5EzFL5QbjXSjZ8yVzKt6Ms8e1GFUWVRhD8LvLDafqCPsd5eDxoC366NUdN9uGB3rK",
  "key33": "3JN36r4tAEwEcZ4UvUNjo1UdZRC6uDTN2jMrZ4EPEoLp59EXwKKNVqSRSgw5a4n7JMZf9yzkRvkji1qZ78Q26ABt",
  "key34": "53USqtRcV8Nmo3BXFd37TXLraYt2dpDNta4JSoPjC292Go2chXhQN38ajuBE9hPaLM66Cweat4GRf3VHbPNh2B7u",
  "key35": "3np1YZaRA88CcPFw8qDBG563SbEcqLmZL3tcskHGVgtkw8HXLyj3WvqiFyez7RYv8YfZEpSrLiAEitpPvxtK6nCy",
  "key36": "5MkwPhjBuhwEDgiJKMEh1v33G1Qd9AUfX9QaQYcHEdYm9n3DnZA57g7Za5JWzenzyHM2Nxff7enhotyeoUDrR2wg",
  "key37": "2wPnTHmU75F7fYLVetm3VKuP7W95awWgzzGpvQeJD2N2cSZVn36QKhmU1V7F2SE4pkEoMf9bHNQDTbMasc3FATKY",
  "key38": "645oTsr9HKvGoggysTEtZN3THV9ch8qejMsEBZVQgobWGJpQKEDjukxnTtKYNtiw4ouy9h7GfxPk7ScAyq2tYrcf"
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
