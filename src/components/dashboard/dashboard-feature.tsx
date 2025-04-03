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
    "3c3q8jZWAS7xAKtYEWMGpK5uFc2Xznp4ugpGnpz4LeRGzwpnvWZBMtFvR4Cg1yUJosh9fx7PCYduy8yfxkp5DTJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GLc1AMBrupiKKQAAFcHTe6ecMTgzqFa647KRoh85wZ3ozLLhmcsRNJqHNrR4mQUMZDnLtQJMuwayZUhnQ17yGS1",
  "key1": "5p8WHWhXwSGg599rySKZTZYE98qnuAK4mxPBYxuUDfsCbpwjYzhXwnfARrhaQb8fZMitAxNyXFBF25h6rVJ26ALR",
  "key2": "33F6vEnevnWv3Y6dmGLoR9GkDzuDbFTAiXoCwYPPxUiysEHiqfckd3G6XKVCtfC2hSpbrVrapNLEEbTdNTuJFPaM",
  "key3": "31d8jsdB6NwYNrUTaXnAhdDPtkY6fnFzmxMpxbr95Z5Qm1gyT5SiY72N3gv2yT1PNChqduBvrqgqatgwiiRp11fh",
  "key4": "RNEA9m13kNmKqVwRMBnk94gdkKy6r8NRRFVJxWrShiRZZer5CmBpWGefZSBvCygoyJHiBFRdAzzeBcsmEdTcKi9",
  "key5": "3TtAstFe4D2HzPVZVq98RdbiVofUJSnc3zf1u1LstGQq9pDNerh4zQ2RcmgoLn9KwNoiorsGeooNDrYF2WPbJ6wD",
  "key6": "28frE2FMKd6V9ju4sD8qsYKMgTyYRJmAZupJY5JsZds24Emg35nrMaxyQjGJejJungjZaXRd7FaySU5AU1g7H2o8",
  "key7": "2GN1SBaqCBfGJFRF5ftRHKNW7EUGbWSm6kBGUg8MdgWNidzFMXvRPPEmr5j7m9u1uWWxtf5KXnZnKGRduBep4FB",
  "key8": "5i7y7j7tDenisrnVQBdz1bjLd7TFCYidJzwuqtgf5LjEY8WETBXvEiXR3r5K4vFzwtEJZTMpvbAT3hSS1VuFMmBG",
  "key9": "4EmUVhYSxrgRVdnTgr6MeQFVh7YWGZL72b298PN6ZUPt4r6cvkd63mBaUo2uUkvpLvHZWTyNAhUaGXcrmRrC3jWH",
  "key10": "2Y5dhauxXbhya714oULysd9bA4ALj4xE7JF2LPzGhqgX6rHb3MHXMYfT6RBq4q81pDSceTz4wjEE24TzLrAPvfmK",
  "key11": "3XvqHjXkeQVB3oWe3CA2vhTCSd4Xyk6vcvEoM8ivBsJbH6D5UMp8nHqtSrJg7JXkgZeQc5G2ZArRFS51tHjnC8Zm",
  "key12": "5mSWWCu32StAfC9oj1Q5oaD2S7SzuZzSWvkEk3M3uXTQASyeXnvK8DVKc31djV2xjaEAm1MH8jhgWnCgX8aegRoH",
  "key13": "zSyu29rbxc9vBJhp6QPBRKD3K1wuDs84ionAiFgDbNA3kYqGmcEDWJzt1n84DDouLSeJ8g2uUT4pNqKWjALNTEP",
  "key14": "2LX1exHU8BfsjLgS4b9ePazs8359r2u84mEiaVAUR7mtTfqSHXJrSwnf7FWMoLMpYKqTehcS1GSRdaLRLzT2y5Gz",
  "key15": "2PvPpAR4TM3c7j2zuefj3T8tBgqyFrmyn5QmDc54EUzqB7M6ghC8xXuoXz318UyTXGWBUro3xDwdCcGhZZLVQF1W",
  "key16": "2MZmkjBsUzgWfZi8NRXgm2ETZwNko7otnQpmdR3WPYZEG65Cgdr9joTUtxVKDVuGjBjiFcL6EyF7nUbny2Xie1ue",
  "key17": "2ck4X1ecTTqaFnwHJ4FP4Z22hXYyX1MXsftX1tgXpjd1TbAkU32Yf93kR4B984NxnypKyPQTYaKiqRq4HafJpzjR",
  "key18": "2yUCSnWqB2ppkvKbMNmiFcKsc9Pqcoeb293TypKLjW18eNBN2n4Lkhr5YmP9JXMHuJYqEDaAHFNPoBWy2wGMmCZj",
  "key19": "4WrJ63o18U3ZGoedjXSdcs64vYyxTzVU2iPCPTx3q2n4BxpvmjkrHcuGyrCeXt1HqFvX76KbswQqCWfkJ4nzqcPp",
  "key20": "2rJc4YoYHFRNy6PKiCVMcN3VdW6uHq6Mt7BeFtp6ZdwXd2Kp2G2wPsMWH5p1124yexUZJ3hTdd6DJecsAED5u1Xx",
  "key21": "vo5o5z3KaKVL2kzJKnK4ynQfPTBVQd8EBPEzwPiSP4AmpDs8fmFtBaYz2UUN6C8QixhG5SLjwkvbUQWg8LswmGF",
  "key22": "3a5GdKQUxPBGE1CkyTuVTYLRzMwNYtZZGkiyrhU48QFLKR4QpUXYhhchHjbRyd9dHGP4Fm9xRyJA1AA41T3aBd35",
  "key23": "2ULCZzmeSwDxhaUu73anMHMbRNV9CRHgQHuhrJa4EXrg6CPyYWEsn2JyGYe4yag3UGYpL8o2cuJGyMkVEVpjgsx7",
  "key24": "5CKQEy4FEZbiRoZndyyKHutEM2eJxXZWEqXduiPBJi24WHNFFazGyziWUNduCJuD89idpu6g4bwg7RLFCVNHoUa7",
  "key25": "2FqvYv4eWyLiCJG5DWZsej1sfG634xrraXhSmjA5N7SY4FN1MPxoknd3CJezBa1yn6Sn4vSdjxyzj8rRruTB2aT7",
  "key26": "5RjeeTvwabXhETbM38tHoJ3S5YTLmeynp7hBap4o8ZTk3C8u2zG3yHQ1VbLekU6Z7G25JfNnaBnZBP6eBdmBTz8h",
  "key27": "4epp1caSAABVVYecBMekCFM6skRoxJ3bZpCceMvwVVfFckRRFkveMy7A1LnpPCPq3dokc8rxBR8WLU6xVQ3DkkNB",
  "key28": "4MTryyECdZ9qbXr3sMBA6yPGSZwu2R5uFwcZyxu2Fc19JJF8S17q8Jj1EBZ2SZNRxx8dd9Rxef4ngkj2iE5wcKj",
  "key29": "5goGrfUvmP6mDWEYrpdL7Q2Yo1xgEbyM4eSSG67zVE1jrRaqQp7cDBG1bXZvaQFgGr61sV4pRSD4EvPQpZoQokcC",
  "key30": "24wVXukhhJ7YnLvSVudapeP8dxjSKiZY31bZ5SjMMJv5siZH7bz5H3Z9QLWpZkY9Ks6xJ4dwCmeE29UrWZvUWh26",
  "key31": "61hnuC99W5dGMg2yBDWTs6Ks9CEekhwMsfB3ZTXhT1HBgTKthA8rQsTweDHbCj4BtdWrDMZ829kJTFm9z8yWjwoY",
  "key32": "HMKDZz1xJBoWLFCuWKpBYUdDEi2MJKyL4Z6Zms2Lgdk6trChLQuhb47AWBKb8YSKL1Bd9JiHSzB7MnK9m16wmoT",
  "key33": "2JPE7rTPkF1qsFEg157hQTY6c9vMaAGMEaTHLCLPVVf2LxtexaXemX2bVw5kZ3se2wBSLQVq1VHAqpfQHpZ69ZuG",
  "key34": "3GqccpEziaDhqWyHpzwNv1Q9HbwnCApwGdq1HzPsQYxyMKzDDZWGr9bogc1MgdK27hwEnd1nKiBREvvgcbsBijWX",
  "key35": "4gmhQkvNkj8eNK2oHVN17eoA5b4kX5Gajrg4nskUvQQZTskPYSUoyH3hjvv7e58rFA5wimtW4nseeyCWUNEMTuN2",
  "key36": "3GKTTXEgZGbNrPyALXWvXqsbxZMoZ5JawZDXTLDwXQ3TqVmmXP39SrKobGXAWskDRYmAQkkULfZbM5qqqY4aiyEm",
  "key37": "jcPMfneo3huKDpWmM42j67f5mSDSv3FQcekUX7tSpQdpETGGn9Hw3nHGHA1vnLdXo8zbTdTMCUeFym4Xmx34PRc",
  "key38": "4jaCVY9q2oEQqZCkaBzi82keQyAeSEkSCoHxq7anJqpBgnNxptM9WVVnnrzVQU6tz34iUZPjqnbtf3WhgDQGLpiv",
  "key39": "2v6w1JXdqDxwWddbPAN6zCReVK8CBcUQo2NB1qn2bTdsE9HQgREMMyfyJnrxwbtHFCEqp2192zAYSf5K6zYZzxfv",
  "key40": "4rk7M32knj64mUwu82boXGBJadF4UrnWJU4A8UqC4eJzTdQtA37iBtH88gt8Nti4BgcZYEW18mLjD2S2jp8MwoX5",
  "key41": "26j2EHkF18p69dSr5PCaqWfixxpLm2KpLJzqaKybfQ33i6wq7fyfKwhL4RYCtfTJT22BHwqWy7NKqG4BiT8KKgjS",
  "key42": "5xKRzYmQeS96YWPm5NBUhyNCsX6sAABJMbh4kcF1tZvF3re3h4uv4Kz4QPkpvXWRPcWcWQVBdQn6AEG8ZmQT4txy",
  "key43": "2Zr5UGsZmbT7YqoB6X2pqjZTVA4QHd5bGgjPNBcDcEiwcX9rT8fAbcGH2s8L3vsxhPDapkt4GH8dPheVphp4MKUL"
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
