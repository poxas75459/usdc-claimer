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
    "h7C7EqETXAGCFvdmnk8u2vwS8nv3kWCwjTTboFUoB7k2hRaJcvmN82gygJGPNCz2fLuVjJJXFYsfMSCHFYwE8hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrNFxQ87ebAsYrg3YdayciMoBbSJDMppwN5scJfoo7PfRughApMqzcLAxPQ4gF5Eyg4ycF3uxzzHULtQt34q2DS",
  "key1": "3xGLGMNWxxBr1hfSmo29qX8WTnzULtwsLYLENNF8qAE5C3gjGTuW7BXou3f1ET2Fhe4KHH91ngwT2b1K5MuX3be7",
  "key2": "5Ubym2L95MeyZMLuQFwyTeWFLiFhsq8LQsWPHtYqXYegUdy97WpYKdZsSBxkQJ5b8Rbg9rFtDgChjHCHAVmCGXFe",
  "key3": "4GXQLkFa9ZC5N8z8fXTfjsgqCLs48kULcF6CUQmELCatigs6D2FikjGgadayE7GaJGLh5bAmtGC7MMaUmB1mx96j",
  "key4": "kvifYY4F8rX9P1ajD4AhZsCXpZ6AYHHf9p9z6UHXuWVWusgxKZRS1xZiCqGMG2nPacoMU32shMBrRGe6wravNZU",
  "key5": "2th6xSKGY7EBegNhNjAkjQDoHfXtuxG2s4eYhX1pF7nwcSkNyz5wtzF8AL8SieMZp5wLs1KzPfRwPsMR51d67rQx",
  "key6": "39XdUrQdzusF5cV4eQFtHk6HKVcxQY5fdkNffzYkPoUTK3pSd7E8eKLZXaVBZRAeJ6B46u5pocqzvRVpuyXiDf3v",
  "key7": "3ATgUGNBDPznYMNnbdndBgcrP5u8Dc5zJTuwBrsrrjV1RJfiqbssYE7zUT9We1ZyiyLCxXhMhCwUX7ke8eDbQd8j",
  "key8": "4hKCZAdrUcTbBah1ZDBbjSmDRwnY3pMZ2adyt4BFDXsYaTLaDrg6y3cBXzB1GDRmyV1cmSEbzUwyv8uszgooW9Zk",
  "key9": "3xV85YSWKLemdrnN8LmVLyTbrtDHc5v4V9SqyVXv4d8pkNY2twxWS2VGzyFuXFkNECTBMs9ewmQdgFgJYcuKPKPr",
  "key10": "4DYtmEj39JqQATijmR2weASfiDdZcAg6ajojEmHTGD11ZKwe2C3SeKet2cidg7JggAQ4yaqTNuWoFZnSMkUXP7tB",
  "key11": "4MRrcRsC41yG3kE72vt7xqa4X79dCJdbKagWjRoperTUqyU3r4pfFjC982E5Rtnn3qsULWXZC3UVuRYtePJtiJgG",
  "key12": "3k9VpwwhHW9FSp3h5as4oGt1yJ494NnUEMzuA2efg4y8nKBhhVL1wQJgAJtSa9KhT5wqHE9QqaBVFEd6KoAmM9JT",
  "key13": "2WuUuBQecZXL4FpjuWaHDXvetKNnVXCtarQmMy47UbgcQo1DCmHeJgWdzpAKLkyyPHGAXFrhYVX6wtXHi2ogMcEK",
  "key14": "4GdqRzwBEYwhY3TftwWLxa12Jm31pPoqTXo2Q9bUseTqRrsf6LqLHgCvssZyDiCXH95fNcHgtetdZPZhhUw26565",
  "key15": "5GTF4WYSwRui4hAubYwt6oR4TiHuhB8P7NFsuqHeuoxUQy4Mt6tkCjRPytpvCFEdL8vkQrYdcTx5LNTBVZKXv1jk",
  "key16": "5btN2NuCWE2B5Y2kgDqbufJfrrmVGg9My4kZrHUPzjPH25m6GnK9KtHkntcg9tWz5d8JFi9Rqu5M12Nda7hgqdUs",
  "key17": "59UZCmGqVhmnz3j1UYu8SHTfh8rpufKKsXwSGRV4fxuhrPQdFvCXHcrweL944oembo5coSXuhc9tZd33jnfM8Vfw",
  "key18": "4Tc86T4cQ5A3Fzk9j5YV6HL185mUY7swQ9TkE717gFZGxBAyS7JQnpqMP8qvtsvwMA3tGe3TC8G4zJQNYAPMCHkG",
  "key19": "3V4xVHLkcwHHA2vFzngHZmAnFF5pbyHN66en1LU6n6qCwn1tt7D5FMDYMWZmNG2Q7e1Zev8WxaQaGQWLcckP4Qw4",
  "key20": "2hiwnPBJBfunRwqjU7JkGYSDT98WrySfrxVDP7Twf9XMeAHFs6hYLMvogD7FaxMdDZKFZbTqqeUm7GG7jmTAyqDa",
  "key21": "42g4tKsUXQ1y7R8dcurNWe3SyR6uM7qp64e86nD3kfDYPir8nimghEmheSzphtzzLG4Mjz5t3rWfvLkiFteApUEs",
  "key22": "2wkoGizF4toqdQgbSxgHyfRPyY8VspTpabrydyncbinzan7rcBjGa2vbnL2CcTw2MMuSx6nFXFZ8AVLdbi73AHAX",
  "key23": "5UibvLjaqDYQdohLSYDFoxmwV623BGE6kdnmpmqooZmjxog91Nb3pFSPQ2FGcGkPdh2ErkGnsaTdt8dgHTfnbL2k",
  "key24": "3QV3uDP7aRCjeuRkvE5D6fhjMUrR6Piudfyehn5Kkroau3rWqFGnVhZq63HeKhozEyPrFoUHk4aHCMjyRrnPJhrZ",
  "key25": "hnKttjEkz1rzzEmvN6Nm451yCno6HfFJeFcQoxGfS72eA8E4VpVWF7SaebB2tAibDgsYnbJMU3Riucg66pXF9yo",
  "key26": "4rSrHxD83B6HYqskCvqLtWRe4pVNEQnDUKdA1bpywXtJ2oy7xgYQF7ZJEVxAwYiDbnZ7bAtkymoW6GUHsb1zSzFQ",
  "key27": "sMocEQbE2JM2whd4gh13MxMgnxLsw2Dc2DHLfcuT86Wqgw7Ww2tBfaBNwdvJ2sHkHJn9kzzT84VvzYVGTGC66PL",
  "key28": "Jh7DRXc4FkwJpHZBC8w1aNbUX3SDK7NZPUiYedCMPRunxKkFMA5xiXxqF9jVJSVCthkiSb49GhFXNmHnmsavYH3",
  "key29": "5SvmCmFA2yuSNgeRx5tskv85JJjGzSt5UZJSXfB4VSUwKfGykVvvnTcd5ebM4jXTv2MnqSBqLTDgArkbM6qURjaR",
  "key30": "37HbWQYjckJEGPtoYfRo6SL7Ngd59tip1K7PxZWYjVeYyfcMaZaA3smUfKTb51EeNebTp57ohwFpM9btVveG55y9",
  "key31": "3UwtCjZUoovy2TixWMt6qqkCi4316tYJQ56akqYGyoodUqvmttkap2KrtQ11t23DdFX6qUPn2YCMQBJzZFG564Cn",
  "key32": "sKvFgEcqeJyoazAWL4Phrn3uvRgjRXMXJj6zmMGLcc1te3qhgK31nimEPLfzZWDfy2w1F9kRHHoNJBwDaaq2bma"
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
