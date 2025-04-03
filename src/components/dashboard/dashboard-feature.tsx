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
    "XTA4qu4aGw5Kmrf7RbdS57G57sbEEAYwKTMY3WrUzAUJUBHw4pkaURqLXCcp9acggiDF8qAvD8NuF3exAZCwjdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3krZGQXiBWAC4QuU54QmPJWdkEPYoEkNdQqAPQpXSG6fy2kqA3rPR3X68t6TqZaL5aAvTkr6tkp8opdZWq92iyFe",
  "key1": "4cUAtuyLAsyBaJ3LqZY928Uio9X5PkRgN4nSWMdKTBrPq3tbix5EJSBUgR3nnKs7cwDfFrApTxMwtMKwhBZ3vNwM",
  "key2": "3D3XHcvyyGVgoGQYh2jdYHu5bbzhQ2haWc8GquvKEXJKkgtEAMvTNuEqQCmycoy4bd2m3UPmZk2XrrZehj9SpDE5",
  "key3": "4oCAGvU8NQk89ESm37PKAUDPjtmt7xPdobxut7FwuFcn9HMzCFnazsDVeKBTmf5Yw4jZFDgA3UL3aJhf6YS2EUFH",
  "key4": "38st4PC5sVYdU3UoiVUBm17taY4diGCtqE2g2ZUbgZjfV2jj78U8w1yLMYVQQW6TuEfgKcamE1siJwqABfQN1DdF",
  "key5": "2sGVwbi6fLz9RvEJWJdyQkC6yiSyT5bDQg2bqukkt44jezcomwz63WYtbuW1CrwhPUuf9mznorjkFp3YycUGfE2A",
  "key6": "5TMHbNVmPYQk9WtFuWRvBuVFFX3Wjz7udYuBJA6X7QXTi46sxf6uumKw6dqgusc7RAFYmrFM23sHEbY2puHu7nzw",
  "key7": "64C7ZHmPkwN9sVmdQRN5fXn2Sh8ikZ3BzEUV4x5Let8jDrSGi97ehYBQMQSq5Ctcf53wKpSAMS3XoeVXRBvY7YpT",
  "key8": "5Bm1UvFHbkvBQySrpteQctyZTomoFmLFa3gu2uDqfY8YCqhpYxtvskKMFPKLCjr8JjdQ59qnnU2otrebTAJe5BE8",
  "key9": "5ChULmpyPZfHY4YL9S51dRohVMmfjG5z5kRzdNttqo1Xx326d5g3pHHFMFiyB7R59H8kGsHL6c4J1sBvouFVUeWG",
  "key10": "5GLX5Ve5mewmBdMd7QzBXSv5WEuiHV1naxohp6xRsCewwQXNz8NmCr9E53m79zhXM4uanRFwwxft6j3nX8jjsV8u",
  "key11": "2TEPfw3RiJzb17cACjcUGp3v9gNEVJsEqQybja551xmcpM23NihEMessVJz1wABKTwwZY96m3UXMtYZqf4PNBbHg",
  "key12": "5RuiyZaFC1AJVdiBFvHkLBQ7q7EYcMjNfmKGfAa1DNa6XN8ZzGS24uaipEXXh66inXzh9raPMH13pDA5XWokt8qB",
  "key13": "oC4vdjC6kHUQwoX8Z2qUm1pUjva2CUHhsZfeHsFs6iGgC9TbRWSydq7cJ3f7ZSuzJCQPuiZ1iPXS5iw4tkvBnXj",
  "key14": "3KggMtvqKL8cbBw7CDoUVhR5Ai86QBdmLQFSqSg916QE7zPxdeQ9ZDSwyRiMLbXht2zw34fTqC9aUxnp63Nw18d3",
  "key15": "4YqANChiTHBn9wAPSg8JxvfjH4LU39RL4p6tRGjbQKzh7cYQHx6CxAKwFnXY9Qr3vu5TYbEj1KPCUV5YAQMcfseN",
  "key16": "3YJvGSUxXZf3rLun1WyxNdpyTWvPWhwe7tkbXabjwcxUVFu1pVAcpgz16pvMRnBFamWgWeSQu7km1AviQDjEnFdR",
  "key17": "4pP7xaoNk1z6TeCT81PT6Cnp32dfwvT132hPt9f8MgvThimPGRMDDiR7VTg9BoUJpFKUYwGAQ5Qg2uphDWtW8CVa",
  "key18": "5idzJpJsyJMq217ZGy1bcdJM22R7FonyUkiUg8asqqH614PVKRLEq53bqN5S5TqgwnJWJmbi1J86fVuC9DHPESAJ",
  "key19": "4Qeum2V3K92nhXXFxJgGtRRbYUR9mv3rE88sGdPBVaELnUSQzP3qNpw3nZJ5HpPHo27EMZBwnu8uf831dmNGSM1Y",
  "key20": "3psYa3ac6CNwHTm7fJCBnxFRhywAzojKjTGjhSu1GEVNPrdio58NenHxawV2tPaifGkKbcDAedBg8iFhwA6S8s3b",
  "key21": "5US3y2gkAVqdJDCHhKqcT74Wam8x2s2W3JKdntK12sfonnXQxx7obiBoaXFjd7Wyzy4rXiAVPPYVstmxpK4cPg3f",
  "key22": "4oArKcRsqGzUiPqSfF5ZwV2UMRB2eSC2e3McJBzBjQJuxTQkLrAmyCz49sZWZEkG1VTQBMY1kg6DThCq1N6grzRF",
  "key23": "KgwRTmAuz8h9dK9iu1SEfyZzfSNXyEFZw3x2QQBVCvL7DqXXx4pZLepZZFze2p5XdSfCKsMSeGyn3vjyfTtDkca",
  "key24": "k3hRWmGp8xvqGkbqqXRqFwZxRQsMwMf6EoperFFE1yaSbCYe1qmajUMRZPGZ8DweTVMaidei6yERpfgXXfh4BqT",
  "key25": "3yw7gY2u2HesTwQMiFFm5zXcAwj5iDdxyhtDcsJppZgeWuPRGzxr3V8oAoWWp2itULNQVRtE6qc5LQCBDTG7WDQB",
  "key26": "2Mg2wbcXGaKZmQmaYeQfxHaUW3Y7x6EdSuG2USnAqwAb4JBc7WwFZ4cuhg2DzubFT6sz3YYWXBK6YevdT6pjhc7f",
  "key27": "4Cjm5pRd26FTyS6QioZbHbt5rL34HLnRg8Asg2nyFrSByqAfKrnDhKG7nHrHwY1QEwhtCkgHGuFyBNNADh7UU4EN",
  "key28": "2yragoFVYDdKs2pEXhqwVUYbip49UB1eVwFEbEZujxU8Q2nesk86GkRdsnLeXaMocWPqJ91qpni33u74JYZNgqnQ",
  "key29": "4qrzcg8cRsrh3X61nZNiMnT1Wip4VgG2mozbdL9C5PukzPGzjLMhXRjGiNwErVhvFJZWNgsNoTj1rzUd7Legg2Ct",
  "key30": "5XbpX8bAftmhWXGc4yQaxee1LQgHvtYdD3qgjoYK9YShuf528yig31xByuWcUGacShKXW4qKzP7r7U57pADAmczu",
  "key31": "47UgSNfuGVmPEETR7vYuxJV6x1ap8Zk7R5UhcCR3BPswBw37iTCB941daYQicwxEqtjqcg62tzLxys9qHzrsnBs2",
  "key32": "4nJMFSFvPCG8aixhQ4MKG5AqE3mmPeKXC5aM7kgc8WGdLCqUqLvMfgmZBSHKu4Gz8TwbFV2iMz5LHGy1ssarPHQ2",
  "key33": "4Xz8kXXzXKEa3R4CoXTwUEYu3edEbpPj2cDiANrm947Lm6BCK7y4EtKhR6u8QeNynPXo7pre9zHkqGPr25dzveSH",
  "key34": "25uWmWWrSrKVSnwgbma4bLevTmSmDDiZ3qETd1DmmzvRtrhv2Hh1ULdbctboU6hdwAR7ksaXiYrm787n8JRUHEnh",
  "key35": "5mEaBVBcXf87bT843JxQJi7gVEip9qWATPsFG3FyctLgyDEcv6ReLMe4WhpfC4vf7ffuYj3QkWUBXbyMQw2mM3MW"
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
