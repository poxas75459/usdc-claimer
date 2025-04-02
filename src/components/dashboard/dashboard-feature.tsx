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
    "2vrHHtmvcSfdxU9tX7QybZ5Jqa1fhZ1aB9Dv7S7PakKiSq4EGNgUfkuiUDn3YzChA2CLeR8xDUhU5sXsuwqY7Za6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61vFv3NqLvjVGqpujWQZaMMwLU9nUjtVvPvf9eGNTZGRSTuerYvttSejSYeqXuEWstb5zUTYRezjyTBNPFGeDXji",
  "key1": "2pvmY46QLnLLvrpNVoiu1Ua1DmLViBPPPtRRDwavgoemT6hHTjgxaCUXxSXVpk6XATPdq4mLASMcEywVTWFU4xuG",
  "key2": "bmstBGG63ZfTTTt7osX1gjsdHVoGYWhbGrS7NXBAuKFrivzsS45A3pfYYhiCGHxQ3R3QAHed4qrNCuAa7ZjybpV",
  "key3": "4KgbhFCwoWryhk9fjJgdtZCNDSQmvWkWoy6rpE76Ps5hsa9SWWw4zTLsxLWBPRzg7Qfa7UT2H6cTDGFaYXWaKwA9",
  "key4": "2Vb5h9jPDcDtPnc5eDjMCjxWEcgfer7f4FJtPFZZKuuQYYBWKJLaryvcH9p6r9cYAZCjTyNQZwX4ubQv2ovzJrMs",
  "key5": "mbZs1nUk62xN48Kcav5UU5uF8Gdxo3TuXE4eq2YMdtECRQcTGmjuy1MHt8cgAhiNHEKhgGxGZYzrqDFjFCvkkz7",
  "key6": "2oU21hnfrTxiFNEWJ7SyiUw8THEui2jR1z6B7rMSsZFeefKY8iuzGVBD2cwL8k8m7Bt3RFmf1ZSKiT6cDDZssPCU",
  "key7": "2y3c5QWopC6DUjs1eeRWetfhveXkCDmMCAf5bZ5ekAvSJx9FSFGbWtxy1M7gfsdoxKUNiTmtxdqSkbMCbBSY8o5g",
  "key8": "2on1TNkN8k61m6a1ConE4d1E5jmZUizniir9QjMYLUC4UC3nrrwhLw3Jw1FzkrrWkGRsya9XUpz9MCMqxszWwF7o",
  "key9": "2QEDtqbouvWahsYHvdbDz5u1g95raKWUPiadgoLppScxypt4XTtqW2AhLaLKH91Dq3zVFP12jqJpkqLjXUfajKVo",
  "key10": "55np5eN8mvDKq2UVCEhNfmdprU9ohFjmKNGreUdx1g84f1yudiWDd8qwq56Tg1Ka632QiugLsxTBcZXq7Xk1nZdY",
  "key11": "41mFYzHrYp3SQbHLahyLYkMuf4bXNdtCxprbTyJS6kw6qBtgstjsQCGXkSxay5PeyUEu6Tk8ufTtYq4YCDhpFHM1",
  "key12": "4Xqy6RxnYdrss93vcw7MxyVPsTRt7M4m1sHrPZCEcpnDGTZwniwnnQQXdTYbrnLVXCGr2VFV45XjLRYoWWk6sGLu",
  "key13": "2G1SWXEiPFaqDerTMTBFXsfwGT16wGSTgKEiePqCJ1rx9SamgP452RQfurZvryjZ1e3uhcfpv97GUMit6McDEunz",
  "key14": "5k8pgMpbqLqXJYpkz7HzFxFU1gG7cSX3ofwaVc5tgFq35kqFXwki2jaDBGSdDYkutdCbmEYH1upbN3sHTMU3QTqS",
  "key15": "4tt7KoWt6GUiBTqtBeSTNpMSswgKyz3jrqmuy6opuAvadZaVrUgzdzPKVpV3u1soCbHwxPTyKcnh3WDkyyghZaDs",
  "key16": "5c15yD8A9Gr5nMVghy88fkXNTMhznmGEtGT1EGZjrPQ7Mbn2YXCKV3b5fZ3oGjVpZosmHrhCDKqhe3xqsRW9QYF8",
  "key17": "5WqyM2s8oH7pnEv8s4h92ihZ5Qcm2n2Be7zpt3Z3GZoGrFps3KhnKPQnCHyqDyYWpDCCzHd5xqa96HM4TYxPyD2K",
  "key18": "48XiMmyLbEw6n3AJ8AbG65dtxCxurcZ5k7ST4y6UydDB7zk9xZpoZnrWzDuV3dEcFjwCCo3Bgj7g4ofu6fgGfZzz",
  "key19": "57KJNdV3KktkMuv3ejbfrGep4bYYn55CCj4LGB3xnWh4PY9Q7cgJQ2bG6E4j1R4fvrERYSwVyGon3NsiFSoHNjwW",
  "key20": "4WfzZ5LoaLW1fBWzpz47vcxYC5PQXRWZpLj6CEzabar5A2sVsbp8f2AjFxbu7nRn8ftD2JfNsakgmUmYrtNtBhRP",
  "key21": "ohqxWeMGFDEq76xhLXCRUpHAfv6RUEApJNdE5X2izK6ESwGAteVC6MXYUXrpBbxAmxACuE7mHGtbAL4JTiiwdVT",
  "key22": "22ryGYz8cQVjWMSYTujb1SZyPkaDgfjneJfXG5H1Yx4FbAEo6hGtaYqSpUYT6DxpuDqjLzvkr1Y2KNkgqzroVeGo",
  "key23": "5rx2pgp8W5NwHs9ZbSLr9a8q19BumdHMhHNaeiv2zAGpV1JSH3BE5qyj7C93iS43QfXFXKwGZZUgis9RVBJ5KauH",
  "key24": "3bL3SMrAPanEKwAApwUJkijK5hB6nViGhgbYdfQfeo2t9RXHY789gbKTMkk362tpUG8S3a892LXcL6LszSLbytVa",
  "key25": "36i59waAPNCaCnuSMV2SWYmshLnkwYztA1DZBG8cYRpgMEjxc3izCKzpkq4GZfXMNH5YW884hWmQfGQWBhKEgmLk",
  "key26": "3ZRgNvZXpCAKKoEuUM71pkELAMLCHRuBKQUeszF6fCu3Bo4gacW1XuncFtNWqK2WueLyRN83L5aASB17KK3VnyHR",
  "key27": "37MAsHrmrgxnH6G8vuCxQ6c38gSGBssykFq1AbX1twJrR6tWsE46qqPSquMPp848k46QK4rbqfw6qJvP7ccEBkFB",
  "key28": "2QxfGNmaJh4WxXqqmTvho3DqDpFaSx9tkcQh8jZtE67EGWPemU7ScpShctMyJTP79HHTFdyCiXuE1nVCjmvMG9S7",
  "key29": "4RWW1FtuXSqrqortudReLfbG8VNWDUnAoRwEfqCdf5mSF7y7AuSFnHYStFVGYrmDxxLei6t7RUxsMJNqaqnEH4t3",
  "key30": "Si9XjFaGjzhgPCBokSWEfMJB5cifNdXxM5rHPTsK3uRDSubbRx5a9s4TopmKGVEGbB5VPc25yW6o5ePGHAbdn2v",
  "key31": "W49YGyCaXKAPw9WKcCuU5LSwUmdN7EgFHs6MjekHnE4zX75uw1bQ2HWNcyRmtz4jhvW5BLUMR3CyvP1pfhV8Jy4",
  "key32": "3cLVxz43K3MJCZP2RF5NRxvJWyJrSMhhEvXwjbm2ui4WNXcpzbWXfxtR7KgDu2TXsoGuEfvkNrda2tqLNTNuMxQs",
  "key33": "45LZAdH8ygmZBx4B1qYiPN62TAkNYz2vXNZAuJeMKHf9daSJFerH9xkeUyvUKuQ96ZLjBGdghbRGwu3WRR65ZaFh",
  "key34": "55LNfGfwLo3NMH4KHNvVnk7PHDVMCdtHyfYkiLLsFp12p3Cjib9iGWDXhCLDf3TDNsCZW7ebnwESnruvNHnEqTJb",
  "key35": "b4UGAHAEGVNeT7PADRuMoKWENHDFmLkq1ffAspcatfKgpUujHnxYXsXwq4pKyXJpQ4vT3WzZJpiPMXcpZNzuYry",
  "key36": "3qTzx9cF3rSaUBucv57P8DkxoyuM2WfvwjyY9NMTP8zwPAwewgeQ51dUCgRuNKa8RXjXm4jm2zgagQPA2ppGMXXQ",
  "key37": "2mXs37sMwCS9n2LGSQv2fzdJdHVn2p2pDPfXL6jZUweN6nQoznKfTQbDA1C7JMZxBrmjm2mnSHuhQsbpiDuQAoW5",
  "key38": "Dg9oJSXpqJZTzVEseT2MHktLSSgmThpVsmV8Jc8sdaYXtv9MW4sC61V1ucoFLBbi5iWDDgr1U3yZghGnGptPdXb",
  "key39": "2ZktMSv3u8395xw7jEJft8jNyNVHsRJbsVLvK3ApU4TwzSbGMNtBukgVQ5UoU2Wx2fV2ycSgLhMa3CCXzmRCFYAv",
  "key40": "3h9sZLXbeiFT94inbdkgrN7MaU4oAJeXbqeXyQzLA2rpSzLE5jJ17zWrhQ4ozi6puTTJSuE7oRy2iVdpe2Nhae15",
  "key41": "3R8PW8FSyGNriAQKazt1UKhemYwrzppo1PKvEEg4vVDvYZiCQFyvSCv1eVeZhDZHLBAviUSat4hsduR2zkG5gr5d"
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
