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
    "5GUUjHiap6VGqxYgJr1wf9gmL6JREAefWSkBdzjSNqCwGUUcEH11Wqxo2fpZc7SnzwSmc6HUBn5AWr1hPQnSbvX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dB4hHbLjC7M1AJHWwtBcXXt3nR6rGWsjugtNazxMaPYorh8xE2dSzASpmmvkeYCWiLHv2hbwpiZ5mKerjA7roGf",
  "key1": "3mNXP5sgzYQ6s2F3vwmY3wn2rWqKjk1hrkVX3XzDQW2h5FTw1GgLK8AJAod2XoZ8vUYB5YD6hVBHeQPqV6b2EHaJ",
  "key2": "2ogga4TLc1XbVEojkjunvp6BsW1rCrGVXEboR52vgj2RpqfyEehjX96kNpUePx1Q9naqtAZRDhwJfSTxErtNZ8ox",
  "key3": "LoTkmhXrSw4SGph3g6RAk2cWSrEf2tt9QNTN1kUVTQunhspcWKEwTjiGjgWcrdMdAxHsCQ94naUEujuPnCF9arx",
  "key4": "49oRp8xkeCh2K2ZyeWoMeWqkb1qL6Jco6euPS6vTrQ5d1oTLWqof3mneScuvyU2sawFD4sqjgNvtjjR63oB9DCBS",
  "key5": "33s2ufJKWnFbwSVZA62za9RjMG6UTt4GDyb6ZfWcuYPat2atfLCt7zm4XAfhjJyBiYkSnRKmLzF4PK98HtALeyzD",
  "key6": "3sUSyDF9daWoi8R4gsdi3EKuUgTg695BHQXhMQQcVf5XS4XWzG2dqwQMEazqvqU2BGdjq2vtJtjmcca9s5yPjKow",
  "key7": "53mzdNjhX5BBXYmeyD7fjfE6uTfFHbHCsH6p21dhkTZaDPt993LS5ymjcfM3u9EMnBrWWp7gH9aFCbnphyprhajz",
  "key8": "4mK2py7YuKpe7RwBL5pPBhi4yc6quJ18U1WnRiGU7GuQPbfWzvTRDhyGUAEGbc7eePjoB6qSsLHUUY3BDZd9SRm7",
  "key9": "4vHKuRj33GxWMqzBhDrm8ZeinfXznfhy3zb4FbHL59pfSkFZUz49CgAj5nRYs39rvVzmNsytxD67TdE8ChYVbBix",
  "key10": "nCVG1VreR5CHe9P9BVbCrF5V1DjBeJPwojqR5aQT3vJiu41XoZ4wzVZYfe64ioGQpi1stTx97Rj3e5JD993KGov",
  "key11": "MDXwXBDhAhkSh1q3wofyENWede9JPmf9xQyDMpKo2ZHvrp6EXK4vw2boxBmJak1eTk8Vg55HZuz3Tt8fxhsUPAg",
  "key12": "5M5GmNGLMNgdpqXSniGmunD8yJUX4noH4QSL6HCxWsUR3rDXRLzQD2nqcwW53RGtTmauzMtV3jK9AYq2mkmDGy1u",
  "key13": "3PkBzVSKqp7pbnKSzfvZ57QFSx4Kj2FvyHXAogTY3GPeTGcdhTsm23Gh2xNzBQc74bw72wYYc45GU6Q9SLweRh3k",
  "key14": "211NmLSoe3sUhLtB1iBhji8VRxnjCZ85i4bWVbaVRrjCxePV2V42skjgD1XJ4zjP4guVkAkKoUUw4qsb5cUBXaDW",
  "key15": "3XUfjNBEiKr7pi3ja92RLesQ4LFxsYuMexbm77pNqgQdd8Rkpd6T7Px46KBFhoYnggcrD6jubj23U72eTz3obrsk",
  "key16": "5gfnmFACXaDEmkgnBr45eJmmUBcsyqgwFzktg7FPvVTA9HMupVqVPYa72zVbEVNXUusjbnziBuiTzuh1c2Nie7tU",
  "key17": "5piKxo7G33xGXT9V6XZmiv2xFA9aHTkzE6kMFnUBKZh81WRgYvzb8G1BK8QY4TTn3b4Qcuf1w3qx9vBccaNExKsk",
  "key18": "3cvpjYuG2hmLm6Hwbv7f6pMxDbobwaJADK9eRGAEfa9eUiYJoNya4Xc5RcDpVHHNt5utyUN5NBm2Hy4EuvAYEKJ7",
  "key19": "5cRhoXPkhD4om2Uoow27sz4Kg84Gvh8y4q4FGkUHuLBp5jBNsRW47bWg8SirtTHGUzHXphoogTSTrziEae2ffv54",
  "key20": "46XXHF8HnaSjg98hRwyStENwjwiFegNBMWoRSqDHunTVokSUxzZuvc2JXacuUqnVEABg2PSHwAUUAGfjpir6ca2j",
  "key21": "247vDx36DTUNDGxF89zDvRW4baJWBLQuGS6CyN4ywX8JBLXvme4hZWCBqQsFUGgfUzHHfnUzPF8g7oBGRUGsn1Mq",
  "key22": "3XLuXJLtsB7dNe8QXaTZe3QQrtBPxmXoDp4V3BtKgMz2uSr1DD4kQRu6ngJERgaUUNTeAHe5AhVxkFHuWjApTSLs",
  "key23": "5jtADFsZvHGMHYQz8CeGBqGoMHyqbiTB4wXLrcRb2RsWL33LuaMGxQTCEyWK1kCW27XZK4C4os5CRMR5xwWwc6Ps",
  "key24": "4FxMjZKRfRwoZUVqDckwXi9whbJqbThZ9g998L9stziMVvu8q3bEBFkD3fQheNPTbWXHWCfRAjy8kE57D4LHF4SL",
  "key25": "3utZGFDeN5LPDsek3psCDqovdS2ro8wwuQF1DuoLUACXnRrwpPXb1WyH2JWHu2DFg6xhYAorqza62gZ153uc9sNM",
  "key26": "Y8aDrM9MJVT4iEMnagTBfVsUw5RwPFHazwKuWRCNpq4WncShZAnsvVd3ghojtF7LgJbVocuzz3FqWMBoVoJrDem",
  "key27": "mrX23zpMvpwiuNbbRG39tb49BUWHg8jY18gAnPyNgx5pCf5RepCUzrjJnQn9R6AsdoKb8EKNJsYyUqmKz7Yagfb",
  "key28": "aaYb7SU92KvnyNCbzNoiUt7YnBoSLtyAHUi8fNPXZVUzUFTvsdCxNQgxnj3oZfiz48RUC5FeZWbu7CGb6YzoHGV",
  "key29": "F2r5ygpaV5Mpcey9LaGZ318XC7EQQFK8HPprVZCebdtwXn53dXRz6xKXagTQKQMzpXkasWwJK8QR96WUvRVodPt",
  "key30": "KZDrxbzd4ivn3Zv44dmNsPSbZTQ7eJFQVHbsXSXS9hXrZzwaK5XFQZxjJEi8avqFpuYkG6CJboagE4JRCQAxRLJ",
  "key31": "3VjwUJZ7zcU2xoeRXACHAVkA8L4QPmHdpGkP2BLvx2FDDsbGG4ufw8JHhVAainXamuXESKXXXujacWAUMxdhYEEQ",
  "key32": "44sBTwor66X8HYFjvnNnS388TxHrdvdmg8xJK3QrMuRAfBKT1mieBATAE6fH5ZDk2qt1gJJD4JhGDPHjAB8dwJCh",
  "key33": "NnSVSDqUujxHKVmYzeoCQkg3pY87nx9Z18fFPbamN1nCmmyQuEZ3fmhTGxPNRe2aXpXUPQbh5ff5jzZseNXvf8o",
  "key34": "5Pvy2WKN6KbNGRQRE2GihnUiWWBr2xvyKmpi4X4T6VDamKsESk5REPn7LjEb8XmDipFTfMowUJnpM7czjSiR3hoT",
  "key35": "46my77ts4ngA3C5GDf3huj8QPQc3bPy7g3LyBADDV5XKuJ9gBSi7jjy3aKW6ia9v9AGnirSYgfTXuJWrvyVnGdft",
  "key36": "39vJEZKqgBy2zcJpN4wpRAkYKna7VTQT34B3dytmk2R2rQpchhEy5F92ZrMVNmP8qTGVWeaurYT5rHjRAMZ77NZL",
  "key37": "3M9K1sSPHjSodChMAFLq4wEBKQYqhLLVoakUpjfe9X3mHGvGCLzKeLjMMrb5p6PwcMGovw7146PFDPnYS1qRpD8m",
  "key38": "61MzqCd4yTdmMmvzvRTZfGABZsem9VTWfu9g7Uh13EmGNvM8X7Pfj4NFruYDHnK7ydbUneojVS9X4YWUSaqCVCTY",
  "key39": "2jJxmio4Y9XafKXgiQBgLqD6UGxy5rUXhtofxm8ybLP2zvZwzf7j4WdfJ2xfkSFg9jFrxvbBDyR9CUUQi76JkKtR",
  "key40": "2hVbFy7ZWKy9R9fj4jFPSY6nrrFz4ozaxqgmN1pdcZz2p8oSQyX9MVwAXfmGLV4KvVTVAUxSteY9K7j82nPRMhEM",
  "key41": "2PnXSRXeybD4TvS6T6r2NB2yrVSqFVfmG61oeZw1c237YUrvRky44a2p6HRVaCR7zmoYAwDte8cudJN6Z6QW69YP",
  "key42": "3amtCeqropPc3oGqZ1iyspMZYYbMSfgCWR2JhbrmQsNXs5WDCvR9zbUMmevxP4R7ZbUPrRcriRWFY566SheNsdbC",
  "key43": "2tefRADMKovmdy2h9EJKygShueNcTk9itRxew2naM2YJG9bpfArrf5D2KpkdyDsgVg2DunrQbT9QVtMMekNJtseT",
  "key44": "nyc3MesH954jbE2Thmz8Btbf6ZesCpeheDsNrBYY36H3xtRUVxiCcRuDP64oyKgwY1Hn4JhjznK1fRnFuwo3CJC",
  "key45": "3sbdDV1sYSpfQnZQ5QXVMY4mBc5xmQ2qVLD7CtC9adVqRKVijMLZ7yzwyjZfz368MURzQvCtJKU699Pa1zwYbWTS",
  "key46": "27rCSHxNi98p9MuLcNbWNsCzGAARtFYNcRmv78TTu2zb4466tDtQun8fJNv1WjPMgZ7mk5mbfMrXTFXjc2ukietK",
  "key47": "VsXYuqK8dUATNRRTWrcLvamnhtnvtPisT2xRZPQ4q7LRWhS8LW4cYpsGFPHwHS8FHEHimqSB7Gp1WComdt9vidv"
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
