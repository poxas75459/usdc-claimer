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
    "5SWVinTpLSfxEjjWkhXzA3SzaCsuMyAfWN1P8R9gCGjorP3nZjpfPU7KWK96tB6rf9uRrR7B69XCc8CGG5ecqvQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyp6wZnqKTQcB58iXUDbRMygFR2W4AfZNwrcjFi3oxqnJqj8mGpACM4LsMzVzUNbLaLcx9PFpRzgRzyLHzggLTv",
  "key1": "27ZfnB6u1oWZ4HchWGVYpdCwcB7sxT9VAjBH9xDpgCJEtH8JJzHKYBWxtXeYQz4S8dTsFqW9WXtbgm5FzmHTwdon",
  "key2": "4LrnCQ4pAb7mABhpXAFdN819JUrJ7PSiwrCgi6EpioFrghkyisjzbQt5XAKCW8pMA5rLo5KwWZDho2cujN3qejBU",
  "key3": "29oivLraLBtAC8Ks8xUQfgHSeD8HgKEN9wcKBFd6mrwxxmj55R25pki3FpMXCcSm5gKRwQuMn11B8MWeNrD6Nd6Y",
  "key4": "24hszmYe46DPyvqmbjoTEqHbnVDygqMsz9Gq38gorfKDcD6h4ZixRvwFcphy29Qg2zbnAVZRiAfXTUAk57Zc1Rdw",
  "key5": "3KCm1TWzj2aJrwWxhqkwPD3CN4yR2gJd3Di67gqZGgRN2h7y3V2vTWs2jV7NQYcgV1twYvtRcsfPHXArxVocEcHS",
  "key6": "3HAdamK5YnjSSRMddXLjA1R8mxqP9t9eEMf9ogdx1dssBdJKcAUSKkp6BZwcmwfuMbp7BtsTRB5t3HUXoNG49ZiX",
  "key7": "5U4byXm73P1rjmWtZsGnMo2EaPFUYSxQXYR1CNRmh9XXQSG6qCkTUZEzHngHHWU8TxoVCSQ8J9VtoWRrv6xkTa5Y",
  "key8": "3skcMvH1i1KMLkWQ2tSXM71PcBWb92YGLGYojF58RkuaFZRe63X42Bua4gVyn3osr7JkDa1LieZ9a3RtrFMMSE6j",
  "key9": "2Q4yYY8dVfRUCgDgxNidL1dPjRjZHMVuUGyLHchR78mmjUajatcU8pfiAavLEPghvC51adquAnmS1v5vjZcDkWiD",
  "key10": "4f8yTAVQDHK353CsePbMurtqQyoS7zExuuSfhejPgMMzmbvhN9xmaWoLbLf5ryb6TnzmjAYqTsRRgSFyqU1Gy6it",
  "key11": "2o86PZcugCuAz8pXEWkWXod2vXXkUCQkC1YqbaLUEJNWeGiDHZFbBpo5dne9z74HJK7YJMyvabkHnJQeU3sptXcA",
  "key12": "3wYHwiq9vba1Fec7YUKG92hgQxQekm9XyoEnsNkND18cJpKVo9S7PF4zJXjRXUMD9RBW85sxGnZJ4a5PCVE8AF2b",
  "key13": "5tMeo1iwNPMW1o3LJAoHxUJNoMQRfgBH842fTfLMoUSGmninUfbMsTn1aafsZar6FmWVJTVA1m95cLTsNxAC6szu",
  "key14": "LkRdrY15GXfWGYYG7RSCzMDTjRCLERFLibaB3yEafCMBeYLuig9dZSEAaEAQEcN7CWBMDxmV6W5LZyRR6xyvLur",
  "key15": "246u7ey3hBUbZ4U1nd5ZdHvRhA8ADvVSqEJtrGo9EdXPq38Gfok72mKeh7tgCvU1S2x6QCe58uZN1X9uuBZ723z3",
  "key16": "2nmdiu1tNEvN7KmSBxJcaxptDFbjYaeZjWKkBPMjFWvJWZ9k9pNm9Ks17RzjQUKNsLDF7Rc1V6ySvfLYpazyMFS7",
  "key17": "2icfSxTMv7UDvsemgHkgdRPFFynzXx3szKQbXqHv78aQpLPBR3V84HKT5ePUYaodRGtNPioVnGtHjScKwFsmR7K1",
  "key18": "WVHgWerTASKgg4izZhc1QSyApXPBbCPhKgWmkAngoPp4VJ673jVzTdrxRX9ZnKiwBMyr6ekTSoU8982Cga3L38Z",
  "key19": "WwPstfA4NKTad95VDjwEcK9a4CVpKq3X3JA5kzhLyyD2tFKuhvHJDJzKrXfauiJJcQMAxKxakLFfwvUaGwMdTV4",
  "key20": "3BnaB3gmJD4DYLum4bC6XqnTxVCraN4V92x7ynqA5SgWdJbaWkqdgVkMVkJsaopVuKoAFW9nq8VMmeYwrM87XNhE",
  "key21": "xChFEPwt4TFJpwxPNSnCNhq4PD8xHA9jeP7p3u3mdsiaHHFMXrExXWZYBgdKbpUrdacam6F7Q5A8g7JiLGbGPs4",
  "key22": "5AaCoUj7N3kFYZZRBHMs5PhwRgaTr6Bw4puVkj5ugVLrNEaNjDYfdRY1Zoyhho8FQmipbFvMzgzbAkbc7iVgvdFF",
  "key23": "63VA5t8RWju1tVe37RYrhFpxaYLUJ82RmYn7jFS6rfNHLRp1SChau2RXbhFGgL86tsSQVpbjCw1jZWTFwHCETojc",
  "key24": "3SE5zTveackQLHR1ftYjL21kCN3fwSdjmdYG4fBugcKrmiDNB7YkmhMAD3JBRwqdta5zRddLLSyGXsjhcRZPgDqN",
  "key25": "37oepSTxkswAaps4n2wSDZGJTMMv63qtVaziz2vX6RQJ4T1UYFV2782ccMmgmgAFeDGk5rYf8ecLwxaBiEizAKY5",
  "key26": "3WANeumgdjTVTRFCxkGYGjk9GMhe1yEmKrJh6wXjjaQSMYByGu1jzrrdyGvhdExYwm55fJVkJcppYKqQbCtm8bCY",
  "key27": "iKgBHMBAo4RpLZUtuYFixLfp6ozCoDCxSELGRVgMRa9iuU1WruG4hCRBeTeTcTpvY7WY1vwetyy6kc1WFQjxjGk",
  "key28": "nqPQAYLK3S1z6XTGFytQSjA3h1Cxs7YKbmaUKPBLrDwuqZXtJmVMWufmRCi7s6QxyWF24UUPfjRTgkyC4AZJhcX",
  "key29": "5Rtg2XqXMpj5TRYVa1AVKtkUtceA5PytnRSNJxDFTZ9tRj5WEKd4LogzWnHTMw5vKGF1xhqBADhXHNkHBBA3pmWo",
  "key30": "4WtuHhu6cAQ5oTKeGFYUY4xy5gNvuhP29b8Ue5iFygpPwn2FjRXWPRi8Mc2WA6NTW8UC1JFGghF9dtnW69qCLCjj",
  "key31": "3v2CXX9xNvVrbAGaL49VLApXCqBwoeEioeoW5JPo1cwD1XvSbgqrXBgkxHLqCXBZCerV8oHZ8ShJcb6ZGRSNZkhi",
  "key32": "4XuDV19QtciwnmZLZjwpD4cdogukxardhp28ZAVufZDaZpsPPSmJR4jfHY7PuPzcuQ1tSyZxK8y59wbsyZASxLkm"
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
