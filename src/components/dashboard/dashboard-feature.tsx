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
    "Y2J2uwA1uTart9gUCTZx7qw6aC8y9N9fBHdMCKnmQLeHYEyJ17vJFQvkUf5yiV8DGryZnYxVzkk2ocbXzzZfGKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zKcX8mTBgQq8cK7wW1sz9W2kjay3Wq9oQMVkQEaB5oioFwJvpsM4AMzjbcoeKcyZwp1JGLhoAtSwXh4fDni6KM",
  "key1": "5959xLJDbp9QHxydiRfK4RTfUzRAmn18Cx7y4vyGBCp8YimSHijmojz1ZHkAo3D66pVH6nuuKPCyhnZ9RiaMhUS1",
  "key2": "3W5nxa1tr15fFeyhmdP7aJDs8sdAXAq14u11VjDzvXnJebsiAo3MRui4w1Ai7dnvcxvSLNTv89U6uQpKUzoaJfHA",
  "key3": "5yymU5dKGCiMx85cASDeuUxSb5z95gYsDaFNxZNNUMkJhdVPntjWkecxkLLJXrrfpqZoisXHmfufhc6Jn8eve4CX",
  "key4": "2Z11Di8YT5AkBMtrWTjJqzUXHGTPKoeD2bRgSH9SMGAFMbsbwYtRBJf35AXoxghCsDMckyJrsU1L3QQzN44JzTJB",
  "key5": "5GgPGvTiuPms3WJeBVZwhsxP19daaWDjxjyzJBimD9c7jWNyiyNRKtvPZKpDEkFCp9AMvFR8SrR6nEDvgM47EfKo",
  "key6": "5sENo9sfhThatS5aLqqWnpRaMb6BYRC1riTid27uyDWZ4MS67fnPNqsKhmmu7CvruRw8FqBg6DWEBmvbvQqohMjx",
  "key7": "aBwtgWCHiM8gW4DrEa3VT86fFoQMM431axC6DjnUUUmHEVtoHhzuWcauMeug6xSfHBE4WicC22uVWAkW6skADrx",
  "key8": "5J99vxQ3SB5cnLmf1489AqRDyrd35zA3Xu5bc8S7X1DomVQtCWvMaHgY5mttmPtPoNAiaFodbae38JmKqhY8Bf1m",
  "key9": "3d8NaicZ8iEbPvmUPqLsVVRYoPNiZq2tpYiUN32c9kQfzMrDGJBh3Hj2i7duSdAzcTYFGzd5kw82XDC5Lg7UruE",
  "key10": "5wvsYzkP6s3tqPAdXDXBhj798EETJqgtoDcoDQmUo2Jbe9NbvAVX6gwnppPagbsUjAN3iaF5c7nPGYn5CUVt73mJ",
  "key11": "4Q1YFpEArSxaYpPaGXV9UG8rwhBy7s9NXjk5HR7Vup9zXrY6wjjgN4o6mEq7DK7cnZkXtwhGqcBpeU43dqgtGHx3",
  "key12": "5Rh3fVodLHM1dMhYwhEt3DApctvjPV8ia9MpqsnrXsyFhy1eZNJA14b2VzxxXPqLX3hCJ86gnosqhRTEsLpoRYpv",
  "key13": "2Et3rEqwsm1P4a8nTZLuUSFHwVJSCJE8Jgj5Ksjb1w4Mv2TwGpPA5yJnMS5gqomNyvqi9jAAsSmZQbCB2593ifMN",
  "key14": "VbUW6q7XiLme7QiTdf6Gqg7KdYPfAA9ehCKviiGuSJFukLNrgbizWt7xi3MuEfupXWEi3Zy7f1YYsFe4TWMLvjg",
  "key15": "4RJdZAsJaouu3xBiucsKipfs57J1yYwak83gxjUFstGxNKBDmrK7vYc63SJbCtnMrbcJnQsW9KtaFRBQ1868yuCn",
  "key16": "KjcqFCtY5P2w7TULRp2QT3rndTSt7a73C9nGBzRviNsRtS7muN1tZs1bCY8sFKF3K6VDqKxzFbj3VNpw6wUpL7Y",
  "key17": "4ZxME2iH2bte41ZhdpL68NB3idmS1DdXNxwfiw7zW2afxPrtoD5cRXeFrobGWGq5zCC4eF82q8oTMwJdneuAbGzm",
  "key18": "3pyxBkmozQZRd2NGQoUT3PwDhCQX5cPg3FaEy7K5FJUAEEjaossXrDTpLEGfazfeJUeS1gfes7TXC48BXVvgPUP2",
  "key19": "5LP8MsQqLksyWpnPJ1YQcriGg7doGDS4o9opXnJdyaqfEmUzgCyr9Hs7NZZ1PmvodKMed42JZpgLSx3R9QHqz2CH",
  "key20": "3NsoxdviEktecocxkUhrPPFgoc5iEceciQ3nRtSHXYGQBF4YNVYvgrmLSEBTxV7Do5smBL8bTNWDrB7g73ZhoZkZ",
  "key21": "2zeSvRcw5cWuaQnXFe1A4ChFtrLK8sCD2czhwRgQbMUAnXzRDdzu5pNj5YP2Ka2tj1T5h75EhNt4nGocZVg4XuTa",
  "key22": "4c5ZMKcMwjXWUN9qBQRYUo8HYCvLH2yKaM9qh96PZJfWo9SN4CBsXjWej31Ryuc6MJ9KiHe27wh1xxbe3REQae7H",
  "key23": "3mBoys4YkLgea2ydi5KHEoX5dh6HeQDx6JtPNZZzAxaitWZbu5oQWZvm2VPENqoLupZWQMJpvGCwS8P8npjVQttz",
  "key24": "3erak2wo4k4ZtDHBd7ZWLouQbtNMkVQENSt9Ei4FPT25ocSgk5LmhSWWcycBev66Drh6ti1XPjFg8ipaM81HSYD9",
  "key25": "3F9ygj45k4RbComqCKxPbzoorkRof2oJvcY8H1hFvaJRWRqMor5DK59CBpzRkDwrFtHCkKsxf55ATxST98sbixuy",
  "key26": "54af4AyzwoGQUwfSyruXfKaj4JchgzbNBnsTRrHVMTDthVNrbGP8HgRUPiEx1czpSZRp7FQ1H7AYuDHuSpZ8CoPM",
  "key27": "55LK5wyN6LygHhWUcr9U22XFmYJHY8fFknuxU4UCo8DB2steyEk2jmTtcn8aSx4Lga5MzN5UhApF3uHt4aQDVous",
  "key28": "33ACcBTmmy6bzNcGtmw2rFmWB5t9mhudJh3HaRGb9pEvnoz971PGhJfvU1oe52Yf1DvEq42xFBZSCcTwnzs8JGVZ",
  "key29": "2qx74gcTmgnHvroQQauZAhsVZ87kfH91scAtyihgieeggJRmS4ZEAuhcK8UUHWdVuHngsMa1wycAwaW7EHfAGXAu",
  "key30": "Bg7weKVM8yZpDpbfZ8KQebbrJkNGeKKH4ZvJeSahqyxzrcywXK8BD9z7NbZu5S6bjUrX3csaV5eEEPtFYy9KLae",
  "key31": "Po6ch45jPn84sScqhHPS35NXDCccDVBR2MH5zvAc62fa6L2YHkmaDBhRCL4mn2mQo2o2qFatRXdCpH98jUTJaf3",
  "key32": "4PWFESxGbZtUzYvwdm11vXi5ZwzMoBQ9ii9d9uH7B5FKhXLzYCj4uFhgPVRjXsBroK5cECLeKBMLzqrDTLngcVwE",
  "key33": "4TcqSbHRrpD7F7WdTbmtt5JFGRDfbpvdQxAXHyshV12pqwajT1VseCPrLiFq1PWznXstGvjNBa2kSP4uwAqVpCbJ",
  "key34": "3MojMmVz7Qwta2qcfL92oD6z1AQwtkMnajR2EvqDXhWRb9S6Mguz142GQdPkob91X7JZp1vbFhLmoqwzEszbsDP7",
  "key35": "2hAtvLmdkUurvVLHGRAVx65iRiL3bAS7eufNsW6R1tTcgSR1E6jb8y9V8yA3oyQ4WsEhjWbAfiHVYqSkuSZQaXP5",
  "key36": "3zCzXEHdrLuG35coMQBAD3d2pXAZ4sVEYoUz8RqzYRcjBVNzTjKnscKvoDspZj7sF9xsaQtc6RSgJZkwLmDtD7LE",
  "key37": "ervV16Yi3GYaenjc7tB6m9egXyoergGVhj3jY99PmU6mvmogoK8kfhse1TmtrfCuNkRpkK6jn3dyoQBtP4Rc6JP",
  "key38": "HBHgtF4vGCtG2EXb1gSWfFGxrKtBDsG6BYRdT6qQ7qjuYbUtptyM6SK4Z1mPHmCpUkGmaBofHfTrgWXXCM6DZh2",
  "key39": "2tmkuddCkisXFq3KQr2uSFNhcLeYume3JHEx9UqZbd6qmPrSb3s7Y3mYFZiPzTue1pVeHnLCbDW4YiWGEvfgeUbT",
  "key40": "Vawqv7cwq78vHKefVGSNTBsKrps3YD5Bt4SqRg7Q9pXkeU29Hpj3Btq14MyvNLckLUkTzcWXECuw1CuXzPiX3mK",
  "key41": "3hxkHBxb8Vv7HMEeoGLF6VbupATCQsNxVPuXbv8jZ2HwTm1wqYnfrgxwrRhRd3Fs87kX1Te34jYa6D6NT9Ems8Mk",
  "key42": "3pSYqmjxTok8cCdegwLkFj7phE9gYdU8sHQh4sPaPLCKuz565Htap3g3B1pTEMe1ZA1xxbeviiG7tbdeRbkH6VBF",
  "key43": "MMAu1Dog5tULouF9akt7L5ntYmyke57fQB5MCqLPYW2A1f4Bnx1uiJuaJc8WQKrryEFB56VeubNZ4znzXfhacFz",
  "key44": "2XkvbdbbcptfmBtXfJ5s1pgdV9dCvSeZbCqUAsDJf4VYa4wz9iTEmptjzBFF8NBvR3NKRbPw2fxt8RcRHwbU683E",
  "key45": "48u9oJDzdDejo2KiejBZui74DowEwFaixhkeNr9tT64tCDkGKtFctHLyo9d176Tca9SSbhWSk48ie3wpcZFPCdFC",
  "key46": "mkEBAhk2HKqVv8FyPiYKb2iSP71LQTU5uSSayvbbQ5aEXiBs82YdMMX9jhD9M6hddtTEfMm8zyNtCA5JbYFWVJd",
  "key47": "29PmpM6Xb4ZVsqjAdgo9nbWSdTK3zGSQJkVYBoP6HV3H3QF4j3mQS9XZCFHSjaSZW8CxcUxYVmrNCMuRPBEn8aS1"
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
