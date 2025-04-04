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
    "27PEvtiz5HwRxdhxdFwW8P3tG1pGh54M6TWqd1AD4W22FJXYwefgjtQrN6FaV9TNaY2BkyDaqN2pceSBmbSnpn28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qwoCNBUD55219JkU7xyCMMDuHxLzksRwTn8qbsZkeXyjVaKuyFjTF8g3tKsgdLunuHtV3627T8sGhXPaTjXKJu",
  "key1": "JgTz58hSEaDcneYqMH9rf6ybRYv9PbmHRniJRZ34oVNtyz6hYynps5McUBFoeopgMS4Fqx7R6Z8SLmPjuBJWQxw",
  "key2": "5Dr9yz35Yy87iMfLy8EyDSE3TciaLuCXPtaA5HXbwwx6gDTC7GRCvqHbBeNTcDx67uFesSpP8BXkLw24dpY1vmG4",
  "key3": "2mBbvMKYVt3nQcigAmLwV1uZ4NLo1Dx7TgUXFf79435Zze4AfpJuHdt9qYwphk3xw3tAbwqDq4Jcm2dnq78YXxNz",
  "key4": "u8EGwbmWCWAf56x64bZUTXo5T8WdWoBzJDZwNxn1r3aMeKdRKN7o3uLRBfNitF62LDvry3oSeuR5p3C86AdDTsY",
  "key5": "2C9EwkyDNwzpfeiVDKJ7NLKFTzuTFbBRYwK7Gj7nmqTLd1BJZ5tEopgBhMg8V4jmmN6Th8o22336rAw6wZZQHPGW",
  "key6": "42ozAyrUwTaQE6CH4R6YR8F4jPU7P5v98NBURJVG83453WKwx9KEzwfpi8iYYWYYrWhon1xAvDYtd8ftUkDcJXwW",
  "key7": "4sweScNJYE7s6p38GCFFCxpX5c31Gd82T4PDuGLFbgzP3DYDSV59FbjuVm5FHCQ79L6KdBKrmw2CJwN5fAJf6bdy",
  "key8": "2Ka74kgn5VW5oyBFXf6jbXDRFcpkXt1FH7Ysdy7PT79e6fTyXq3g9Xm6pFY8KKcahDndqp9GquJ74699f45ADWhp",
  "key9": "5Zr1ucPc2LDKavn6e6vztQicsvKseQnauQGz2Q7Lgve3PDJGsh7aRr7qWMweymLot3XEGGzEWZxRmLsy6UwLZGQX",
  "key10": "2kJQMAsQ2iLYTqfs8ZWVawJwpcqwxdwiVTqncGQr7qaECGPf6ifXs458CHCi9DpJSRE8U9NsqyRKNi1cAMzgozYg",
  "key11": "27XofeFDvbkXmUBGcqgy1kA6kjgyZvoD6Khxg6BzBJ85d1pb7pKFkM886hfzis8B7bdbZPnYxZRFLfm343rzhs3F",
  "key12": "29n2wgQwrTSYbwabVPUnjB2aUwuV4px32GuMqpn4tcms7Wgk9sJhXvVHDJ6YggkJ1vvNDPKLkNkSCh2yWLFPNh69",
  "key13": "64tMxUqspqyWC9vwSF9N3wQJTuBh8MGQAhagqGM9xVaSuHg71vaYpjoacGkE41zq9X8WPsq6TE5aCKdD3aUXgiut",
  "key14": "oouzX5LBS8N4DUVggJvao9qiqYY65NjVb81nEHYVDn8dTZjML12tQacGpc2xPu7qs9A4pZmDraSHHJP7ytPkkDg",
  "key15": "5ykq6tYJRKwQhWfLL6yx3gkjE9GCZZjfFKTLLxZxy5EUaUFCufmzEKtXBQYeh8i2qj8UnR3W2QKazCJFfmYcPWSE",
  "key16": "3Fw2qnJM3KmYiYiggC3DZwivnz8BhhDQ37aHmtqDdmrZfdmACPo8BRzaMcsMHyaoBLghWxkMXkHZ3XLJDsZQ7W6d",
  "key17": "5M2eWsudSKX1znFNXKxaqeFt9MnCysjexWPSPuNGvSva1ntLA7nhTAfL3JvxDPBjwzJZTC8dd8uG58fQ3yopSQZk",
  "key18": "5VicfCdrYXKEBBCqpqJiv8Mtdbswe1BCKG3B6ayAPeihWFBZw9qMoEsYpyLkUcMgGFyfEc8MwFnJLoEyhrgewWsR",
  "key19": "4Eah8jbog796Zx1AXZ3sdo884DwCDAp19NB4xa6P166jdQ44Efegmc9NN6FatUwRqoFx5EHjZCc56Qdk1CWJBUsT",
  "key20": "5Ux5NpwBRJAx2TepEwzcj2hgh1KjSosLuo9xstK7u583jSQXebvv8P9mdjxyCH9iPB1WYAaXJ4CxRxEQuT2vx2vM",
  "key21": "8pa6hntBTxgED89aHSbcHhox8muqpBMaB5etJGyVf5Z3zrWQsCwRgUB1AzBgkdrXDccvoPtnsPU3sWAeDWr8YK6",
  "key22": "5Yb6TTpDf6GecF4p7hU5k2uwA9UTr513Wucm8T1wqvVgxszaU5iyHttmjGdjpJSzDM14fe223HskvCY4i1Sv59wJ",
  "key23": "3LXoxAUe2WS8cWKRyueVEWHoz5cQDyiLzTmdCPgDH6doBLuboiETqovXzGn6qAHPg8BQqsTNZzaD7PFgz8wtw2bJ",
  "key24": "mTmnTxxJd2js7utoXTy9T2FnUnKFnqWRdZx4LArkVY6jyR2eei4UUvJfaekU56mFkbCNC3JBBt13WhD6a2qVcVR"
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
