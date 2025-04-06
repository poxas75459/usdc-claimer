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
    "5KBnzBr2V5XcD1mbpDsrQAZ2svM677JiXhYtc1nzf37F9XbcaZbo9TukuGunmUfkFvwyZQ4UVq3Bx1L6wXccogcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1SETMkWMz7MZ9LdZ7scqTsSsmKBCcnwksm8PMPdCgyLKUxMHmo2FDZ2tA4AVxhUa4Lr93LjUSjDZATDFA4RE8q",
  "key1": "5y152rpfrRX1Ug717yM6kS73muDrqitmbxysFdj9jWLTHLFmz8zJf6pZocCo4TbmqcbdAucKG8C32tiPqjk9fkRc",
  "key2": "AYW8KwBiLvxxSUWrgZFEhHeXXGmSvM79MPkrFvjHREBxjGtwj5JebGT7KfE28DKwBbwzmZrydLK5z85sCYsDiXG",
  "key3": "41hfUiVH3fBA1YUK9mQv24xxWp2N1o6woBYwuB8tgXyBTJKLwcCSYQ7AfkXceysJghGTyVnbjaUoTTnT5r1jasjP",
  "key4": "2Q9SCB5jxXzgDgwGTynPVC9P84W9Wp27k1kwAzuaQgrHuWoKTUxxKGA51UqJHL3WV8uATFzafC6hAw1XYPSKVH1c",
  "key5": "66vdRBXE2x28NYa7GM9DraD2GwpBJT1BNLqf4enVPHwysMELSQj9vAtdkhbazsYKzVcechaFLzibZrKuzsRfGEMr",
  "key6": "2PBPC6S88C5Lr5h74pYRjyJG8APPcRVFCwfdTUM3TL55ouiqJP6sSvwHczdx1CTX8xRjEanc1KdcGe1BF2EDtqTC",
  "key7": "TwoRqwPUsuFb1kmnoPZk65SmoBaBKECxMeBYTN86x4UwcxYLNwpYCKTFZTPX1aMkPs14tSuy5YmuNBMg3tLNwNk",
  "key8": "4WEU4ayqqeAQLWo93NFpdk4xpbPCWgd2cWbM27WpzuiPAakWMmW9fDExcJjURwV3WSR8XCY6zRSSiVgoJQEMZZVX",
  "key9": "2Sp5F5QydmHm4o3maDDtBGtYwrZiTvTHmBJG94YnLm9yrUA8KNzkatu4qZ6Tzy4VJNpHU1ZJsN5yoMv4xNe5TXeL",
  "key10": "3VEiWM4aWdvbXXk8Su55hN5N2abvePLN2rijsLLtY118RFc4ocEQTyENXisqXS4Ky1D5MvfXcT5pNEefnuzPYbYr",
  "key11": "2bKAasgNnovrptYefPjWuVZKGhQ7Ggr2V5xhiNWsM2hee3bYpxR5QXTd9DjMVTdd4arkNYyw6xrGKHRAWWrHcsbo",
  "key12": "socVhBjScfy8w5gapBDqhAsP1juzUhew8zATD3swtCAvpHdtcZVuSudQkZPk3hZKpHQusajZUHk6BwLBrCwox6K",
  "key13": "4QCeXvbDfzDykwm5WWe1RihwuFTfRJYL9YUxcePqFjfpKft1WnkG6SwK7Bm7nPCEiriexZ7ED54oJhyxeKW1qB2q",
  "key14": "2WSv1mP3KBMUk9n6hdYFAGNgUQzFkxBNk7vXuWkMJXrqKve5Cn8rg2NPcAo8JwHrJsYogN5bs84GsLi6W2jsxT4N",
  "key15": "32Ypa3mu3qbBhuhYkq2MM7EDK4DVxD63UgLjQjLmwhRH7pPSAu14xE1tQnPYVCqo7UFJwkQPSkT7qfmpqGNxabP",
  "key16": "31BY8U3vfHcuJPrVdPgTHEse7WF45mvxKS9tK3CVJer6HAN4KJvwjSneS2npqKB2MTMQAzEArzV9KFGsuHCr1Lrm",
  "key17": "4K1R1DptcDUYryLKRMxUxaku9arzBPi1ZYVix1RC7spovpi3dHe5gC4uzyHQ3azRofwfqF4jb5T5aoxuYK42T6EV",
  "key18": "jfoqfboV5WJ5m6rQMGVGp3c8mensVCC7qNjaAfpJR5A6UrcET3x9st2CVAhERcZps63cSmtMHvwRWyr5hKsFp1w",
  "key19": "4YYfLtkJ1kVqkPpNR1pzy8BRfofuwgGkfJvj4Rs4EJFSs79x3oDZqKT77iS5NjZSK6TcTJ2e6VCDAcsEaXSPdPES",
  "key20": "4JyPKmEkUD4Tdd7kLSEkwPrELhrVcGPUGVn6iYHPFbAQrJaGtqT6PSSNGVALXZqpBicQq65NkUHkoJHKDigbGyhF",
  "key21": "64P7SqnePhJhC4NRX9vuMeoPSLk3b6BURJqPW81uU34UNYwRmADxs7JCX1pR3Xv6sh6BFVkpH4CeJWCSdzCw2YD5",
  "key22": "aJhEzienzUZfTYnen3kQ7eLK95iSXi1h9T97QnP5BQWayXM9aMuMz3hx1yb9u7yV4PefyibkEkX6CD7samsCPSo",
  "key23": "GjQoPHP5DWMZXHGUpQ38PqE5THbrdGBvVrAbkkT45kTkaeywVoNbPPCGkgEdU7JRVUQsdM5Y7KifTqfVLRb5qqU",
  "key24": "669JcLudpM5SUqCqTBya6uNMhtWn1BMEaFGJUBx8j6UKQYYyC4GESBP3Ae2a2C3D82ptxWN7V2NdeYNB3raeJvi6",
  "key25": "1FxBiGmMMDb3B6aw7n4TT1fbxersU2JxngPbvGXMXYTsH3UMcetobpC35bN2iPkRyES4RfPfr8EZPxKk6yCNMbL",
  "key26": "3LZGys7aooGRDsbvnwsc27krATczGJ9x4gu93TfaPBqwGMz2fWVNTf5LbYcawx7zfqTcDpsd6tSpMbVQUsAVxaxk",
  "key27": "2hxNvGUCM5ZCW2WdvgxPsSC5MHumC3pzdQKUeCv2cSKGHymju28soYmNTeBaqPj2bpYNEfpGo5u4QDKbbzH26VdA",
  "key28": "25nYD5by4zgvdRZ5xcKHARtCARx8Mu6JNmSyGc2qyhN5ZJPBAwuN1oKTwd9ozBbhZn8v9giosJGDmVNUeuc9vf4E",
  "key29": "5hjYf9N3GGfHPpkrreyZkEnxbJVUhw7XatgX463BkS6XxNnybWTu8rGj19QCHhYhAWSkPv3ofuMoecNCPw9NzS8B",
  "key30": "AYmbFM2ErTtyXrj9gzDXMWqMcXRRAwRiqdnT4dWydKnGnhim3c7EUMxUz4pBen8p3G7zaTQME2oFLsPetpsbJPd",
  "key31": "5dumK7eEd6izBEVQ7WumoqBykfHyrh495snUmjV7jGZHtWPba528d3bHQZFN8SkXsiqh5php1LrhXc2xU9qTPSCJ",
  "key32": "5f3Y9J4zBChFYwRnoyxgtoF4YYzgQLM4nisj7WyT2CyxEDTykeu5RPnbohUz998QShCYVUv5SGDxGGirPF77Nogz",
  "key33": "4qvG2ighzxqauYuK1bFU2u5maL2QEmZbdpjBVetjB6mjxgt4T1bJHBwx4R49sCS2kAGjngP3BUHwwtEGjr4dFPv"
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
