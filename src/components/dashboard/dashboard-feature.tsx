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
    "nptggnR8iGC1t96Vaade6Rmj6T1tZLXRh5RbxSqMxWMFYQjUPJbcMt58XrpsMhnfxo2KoSZReHDs2DCW1c7MenL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7qG77QCPAhaVtc1WEnuWZTtcyfca2HKhvJTnqxrPuf7MpipGoNwTGwm72MQbc9U8YzxYnSp2oED33jFrsww91i",
  "key1": "5x1PQmmXAEk62B79eJXLqBdpn5Lvgtt3vwzaYtJYaYrfVLyubnPib6uA7JaKitrUa2HYrdz9FcYhgxPJggabUHLy",
  "key2": "5EpiK71ySH16MHo7FRLmMxcnBMt6a7eDpdwy8qtv7QVoo527JM8QSwCt3yAC4m5oeZVwH6KLc6ohjsJUGV4SqXoF",
  "key3": "21kqNcpCmuaZCre7YKuL5BMsHFrx1BqQ3GB2EP2vW9NcetFkk7pZh2ZJRLtuMXSBJVNctVXhSdRzuaaSpzMsS4dg",
  "key4": "5jV97QsURtMGe38DEvLkih9PpUZ6TStoEJaJLQ3JqqKyZuTsXoy2HGtinuAVSd2ZgL4Hw8sWGcrkD1RxU2tgLjaJ",
  "key5": "3cYWcaPXFcucFyNR9UipC3uVQUrJfuA8ZQMjkzsJ1tudn3WJooFbrn3jGEp4cwP91APGyaz55s8PdG2ym6yiFTf5",
  "key6": "3GXNqmDy1mHr2UnVaBNKKsZB44uE5v5LRhmkyi9QiQ1TsgfTb26M7FmMAJgdFe4AQv9bC1wDh9S5n4NXSK6p6irS",
  "key7": "5VqfUZnMKqDBsqb8qKkQHfLmko5H1sR7z3NiCFGdHywj3nZXUHjKf8LQqwaECFtVHTyBS5r2w5sxzs5mN1jqxjEY",
  "key8": "3N9jxubmHJ1BQ2NQZu7egeQwLZ8H2DgWRgJfwsTKjrxbm7v2bkQbHE5odJaFXbv4gVm5r3dP3iE1LrCPgcJ33yFF",
  "key9": "3Kr6Ro4zBvd5Xa9ic1WDpoay64nXhAyku6F9u7UmDpgkFENU1XVJ55MeZ5kiCoJ9iTw9uiojPPwz4QJTtFvTCqN8",
  "key10": "393cUQ17CueRLp728izchtDtresJkx7fXTepAzBEHz5g3TrXTt53waBV9xogxJRVTnxyPzbv3jSovtmLn3GPTyuc",
  "key11": "ZScARFHRu6ykdRaPQgMRpfzGr4UqRs2mKoJirrwMW5rZLugWnbbEpJkJAtdjH9ki31UjBsjxTYEL2uU954UwXDU",
  "key12": "3EgRGrL6kTzPZrB9CxGYkzHktKAFsJrDYceSyvtuLbtc2ywcR3W5MbCqW3hJRvSfk4Vrf3YJCXfSszz1ecMDVRwt",
  "key13": "ELx2S6CxhG9UELk6Zy65RCLsUccN3ZYno9MbCojyd81G1C9RwCKZkTLxXyn1XfxmQ7oftx1Uuepk4Zd41Y3gyuG",
  "key14": "2hupa7Zk4pXPKVa6AVpZrYhTdP1xGADCbv8p6ae51CPZCTaBZetpa8K1fj1SdV59NenNgfAsv9rHHsPSZykxuaJR",
  "key15": "3iV9MuJDggQm9K6Wr1Zq5ChYFiaRfWEXaHraVCAU8JN5nkN3uZNXFV5nKm9pAJ9mp1aDouFPVEat8LNzbq2dTB9r",
  "key16": "4AHYzBmFbUZXttC2QEM6rMDfGhQ6Q4jjnj2xPCmZwrqjaRMGNJGLX5eeUL59U83bAP3DThKLHCY5PUQDhGW5iJys",
  "key17": "2tExWpnn3DEnNJnHuYs5XDSw1c7CmxPt6uihGeQoJybESh5AnygRYmgba3husPNA94DtQH6TtSLZmFQtMvsqC4zR",
  "key18": "5Gum35BibdhxznqTYY7eXrdarrkxMRxooDHhaf8K9sroxuRLUvWSkuXpNrcXS9b5q2uFo7dW5U81mnQWRhgvyHRW",
  "key19": "4q9MLzYD7F12fZSn2KiUvHJP2Y3WvC4UDSzi3YCPNpjmCC3VLR7oH4HiWBcwkSXENoLQoTsUGqRMSWT6oF67Z9sY",
  "key20": "33QRrY9gV7kgCLvavD4vgPzUncoJ6yy6HD2wFpBkbA8PvWz5SvbwQMRYDYFreYJu9URtSZoqCJmvN1eYGQvHRtTj",
  "key21": "3uv7XF5rvUMYB8wVgQSNnBXdGTeTxT3UNkbnRekz7NvFrEQhrNJCwPSQbj39yBbC1ANtzuJzePCJ1fYUsQHhHFFx",
  "key22": "2BTTCMBTcZRxAEHr3rdbHNqXrVU5HySNyiMDvvUAZWNmtMuWdnSDvEJSZQTjKqExBnzGWaWTKfijdyREidNn1g5K",
  "key23": "25xe6yDFn4Gm7EHv6VqWWJtWiYzsT4ptsb7KtAkmeUTf6SfTV7VSjKkXMerVfXtoEHf6Qm24Y6jB368shwVHVNaR",
  "key24": "3yWSqZ9MZkhGWPb6PNkeFPaWvNBScRkDFo1MS3TVrkVJmGN61RSYyKBkecGF9NEvwAx9mumWnpEsbDhuQaULt6M3",
  "key25": "4dhqrtqa1xMHpyKed1cfRfggzfNNhtBvvQA9SgJxX3gc1d2iueQqCxu4RmQT8dPEHKdg3MNAvrgAkqCvuKjZTNDo",
  "key26": "595UiYCcJjtDway2Knir841XtNCVwU4segX43vjSBvnuq5Vxaku2geQWNBHqQo8wgy8XWEbeLq6mQwTHYU9a3L8y",
  "key27": "2oT9JDwhWBck4AHTqUJUmCrqBywF68hWKCnoRDYrFRB3RA7hX8JbKNz4JtCs7ESSCQt5fLc6kpp7cUvpodWPmuG3",
  "key28": "4V3i8PWsyREooHzPKQgXGmFBtrW1WM2z8gjD85CPDcSz9UCYXezydky7kvgyd4QfDTWms8SG3UPeBptqqLVm5FNJ",
  "key29": "581nXYpXaR2wsjYmrMRLMzZi6EoTkkPAN5kMF6nURLMYPwFBzHSu4z1974FQMGwL4Cb2nNCwvehTWUayYzKajx3g",
  "key30": "sPKSkYTq54h6iicAqb4yZNPMDrQHYGUa7koqzWqz6Y2VF5JcyvNiCXCSvFjA4QDfmDYH7aqzk4qMYXbq78JCf9b",
  "key31": "58vQem7dgWqikiwKpRN5KSvBAsjJgBWzUsDmeFwbjpJoRTxXm6vPf1tus1hVGKGjvGRxvb7EAEi4nakKXxboDPEH",
  "key32": "3dF3wy31JgZmJsQaMbzQdzJzRaoePhSFeoba6NdJ772GKmYfxptQxaXpSTAcj6vkF4P4UWohjWp4NCGgdeqCP7vc",
  "key33": "5pxoYjwtNxLZHfbqhVsKDenaZZzz4EY4QFLDKyjHA6Dn1f5bUnCZSKnBPnxunYDtBQsuvbBauP1eKCfbZYNCze5X",
  "key34": "XdxvdugW3MsC7oxgBHSL5jK7yPmRZCohU6ri7UgFxr4koFfGM6C3UmatmPG3BL5ceKFFCK1mbj1YJ2GBt6mTtvq",
  "key35": "3LL8rmw4yWiFMc5jujDd9tCfLDMLn3w4LRHZMjRex5Fz5tMx3ogxeG657C7nsc1tc2K477VXzzkzVqXTeAqnnAKk",
  "key36": "3QjJmn98H9bimpxFQNhi9GKERz9CpLjY3pvUhMg3cUXVVM1nCJoexW7PR9eJD5PmWqkvGunG1Ezhj48sHp6K72pv",
  "key37": "ZoqnmcmDjJhE7SvpBdcTqZjX4Cj7AqK2yP1CgXvMo7NBGtNDzAh3Do8X3TnqFnYdM2Hf9CYKNem2y19Y1jKy3rM",
  "key38": "36LKa35awfis6SVzwisJ6d4SEfL8M2Ny4negyLBP96riYvyhetchL9HRR2kLVjQzHHHqujSCsZ1kjMd5TzhN1uVA"
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
