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
    "3yQJLrWfLTibQc5renEN1kysUQnTU78Az5apAZ8Uo9bBW62TuWihaKf9SYXuyzqeJ6Gh5kyn9gYdUciYp6bX1Myh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTJeJ2gt2WUAAs7UKKaeJvLmhFNmGaHnRVE7USLKeonuRFYBbe169dzyvt6ioSBRHMWWZyk5382PdBWCz2seqt2",
  "key1": "4f7nZE22iDrrvS2NuKYzVzPchiVwht9hu1qpTtXJ43tzhNMdb6dnGx5mqh2sbD56eT4FPatRsqKWcPtzujv8gwc9",
  "key2": "3G6eADek2KExGQ15GU9DopBAUeKb2KamZAz1f2b1nSPnrvqragsDfgWymsKVHqtvW2HbABoFdd3DNSJhESkBfbCE",
  "key3": "4aemsc3322KqHgRyPtuzQHLBYzCr8z6DKzLRoLnAyW1fjF8D95VXbTKMP9mpSQU87Ng429Q8WA4XuLeQhSF7KxM5",
  "key4": "5efGxHbbe84w4W3FQ9deE9AvCJ4k3qXFa4c1mQm9mKmkfaivfi7cafpjfq4LwsohEBYXjz426NDee5YkTZp1o4Qd",
  "key5": "2GXfJDU3AcEQG9Dge4TdFw674Mwg85Q3BPbhDuTnfqUsmnqcnUVpZbA3tkqbw2etXHoxe27L1keJ8R2LiUKZQ6qN",
  "key6": "2oQHySANvGUcwU3EZf5zR5958c16HDZQYeUM1qeyPq8i3CeSSvMZw6dxizpopN5T744ma6fDGDbLwSxeWA9vYSmY",
  "key7": "R9y52SQmfbWRVgjmHSMzzTqunFYFmSygZcrrYUfXVA1WZYt4NXEK4oj2HfAg2sM9JDhXV8KwWa8phaoA14nSecr",
  "key8": "2cVTUGyCFURRTGh1SrT6j91R29FkG96yukApDENE4NTPuRaoDZisWp47zrQGemJPpVgZ2CUP33YTFYFNJfFgaTfs",
  "key9": "3d2DN3VYSkJKdURDK9mk2iJrsxg8KFvxHEz6hA4odReGSxjgzrU257fbb4bVEeWxQF2zcRWNTU1zZBsmdHcK87u",
  "key10": "61EDNKb5eFWQPkN6yitNheTm2h7YxKwkqnBTsJNsr3btaHXz13kDuNrVLjQDLzeGkkZZZFAibNMDBK9JzuAyqGng",
  "key11": "58zjq51AY3nMf6jSs6DnWNxfcH6KUSf1AigKde72xdp8b91V8YuVtxyMGDauPzKeUDerYuPtj9FZbVH9U53CnAAy",
  "key12": "2AbMHa21d7Sj3tXYJFtoaZrQsBJ3hrZcXzpPh13o5VomMiDEcw2CL8iEUqY2VBptKsmt4MforeEuStamsJ1u49Go",
  "key13": "5MMPKPbABebWAUmnKjva1xVDy9oBgsTuHHPigCfFmenoCeFjAsr5RwtXFe4iq1C2YTTaiAx5Hhuu9HyQR4Pdr8j7",
  "key14": "5x3yp2BSKQhHJRX7scNKTxjCHAZ9HMyUPYXnnSYDpXk1FTD9RKi8eTz2PTNPVE5NssusRYgnMtQBhePFtTA9dG6y",
  "key15": "29kYt3a23RQUUg4d58TQ2LrVi2WWzteygNKkPuMsskAfz64wrKrWmhidQnWvrUrDPttViwg9m3sFfikzGK816ySU",
  "key16": "442tbbz2rC4Fnacm1YWyJZ2wwy4QSCbU48D9ZBH2MsKrM8NUgbdT8dPTkodrvE5ti9M4eiyw1LeUJC5B9aRMR5bf",
  "key17": "GRHH6Lo1jypepjidkqJDd8GCw95kJa67nwzx45YvcWmSiDXa27aCz5weaYCSiYNcdnyxXiDF7912jEPiKGhUYt8",
  "key18": "VjtVZWm8SoMkUnkiC3AJ9ptvb5E6Qn7r8xUTAt9YKe6PCGqpcemjEWLC6ZFTE2iJuEJ9ykS1bP9LnCv5viZyxaq",
  "key19": "5unQWQkBLtkHRgHRGukVcN2nCuayiaKhG1GatMwDm4vLprXQpkfF4WtTKVHRC4g5cqGutU9Axz93k3SuJj4eP8Gm",
  "key20": "3dMid8Z3XqcCyAqbSznfiygzT3rcx6RcZn6METKQ6wdSerA4ai8iyQq4NptGVJVSjpeKEdJPcanaDxY4qpXNvK5j",
  "key21": "5pHztGKk6XNZWU4vRCSmSQ4RaoKc66Uy2PrBSrZL91wWJzzGZdZg3apiHrrZAwHjc8FzV3vNXvyGgCdqR7Re44mA",
  "key22": "kYf75FeMvZXWpfSyH9HjX6386YTPHDy1aNHcBoXXDAYhN3QSAmXufrL1ht4AMjYV41XB3FkPXZZY4wKnaqnaMLB",
  "key23": "4x2h7NH9k7vn5AybQ7RhN13GEEBfba9sTEgMmuZAYRmL16PyVARD8UK356VtndaRJ7fh8gdbZfW5xt1w5mx2kWM3",
  "key24": "4h2Z4yzZmjZsvMBXVD2hBuBoNJELTVudpux8biENbnN4F4gW2PT6GQynZfTE2dGufuBy8iwt1FkD8BRbdESxCRmT",
  "key25": "5PRFTDQha5LtiKBS9TFKectwFCu13gX9MhQRPbPeTqPxh5GLDhDmZ8GaTdgXb4xhDWGRbwqmQCEsjWYqgezDjnoo",
  "key26": "5cdThXUai7jRkc8RKwJBkMTqg4Q5ugq5837tWCkppRVGHaBppevrbRLA8ECFRy4e7A2Rzw9P7VhQc9cmYCdTRppo",
  "key27": "5zFgyuyKcrA6zV8pUjJZKwrS1kgy8qP43wZEQNBRBNH2bvL5XTkX6ZDiwvWZiR9RrGb3yco545AuR88iBKT3dUS6",
  "key28": "Nszb746FvsYb6bdgjPwtiUYyPwvnWvLRKytV5yH3pTudng2Tn8UWcVKxZuiEiK5wfndUaB5nTUMe6NLsGRC3MzP",
  "key29": "3UdAabZsuktDZAswgBrA9JP9VCDM2btmwfS8rJ9iUpZzPVFAaKi123Hxey3y7syEmQqogV1r1v5FdFuoq9fXtVbt",
  "key30": "5JBGFZUG1r1a4g4tZdu8HCsgoQTfYbC7SxF8SZ8BbdJfqq3WH5pFdSaCi1h4SLDENomZbvgMibuoETyAS8CCU12S",
  "key31": "3aRHJqNmHpJ1V4TgL6hDs1BxMvheeCRLwrw1fKXjpw3QYn5cZCL7tET1qNvj3QH8mjx8Lgch6R4VyJUwif2sDeGt",
  "key32": "neDzvQHbAQnAVYYje6UAbsxifJscGP3dMYtoZGoBCjV1D8iQuPijEgZpMrySyvKBcyCREmJasfrrpK4nb4vboBD",
  "key33": "4uWGLNGsRxa6JxmkXgzoLtoFwYZFjdJ7E5sset9T4gTiqPCRPsnmMMfhroCDJJ33Za6v28LZibNgfej9hWip6xdz",
  "key34": "GSBbyDNhKwtRPKbv1DWLcewxwcipDmasdbUMQG1tNWucMqZqT9nvhUp78DAdyxKSVzJhGVYmKSoaMrEeDSNryYP",
  "key35": "4pCeQVsQKQtUVdh3pXnSh6gcY9bwKT28pPJByJpKGYkS13nkpK78wcoHfVXnu8kRc63SEr3RZrgHLFRcJ8xXjqqc",
  "key36": "45UmBhWFtTq8mNhQWqsftyU4MAPauqzRxWByXrP9MtSqG7HGYSMi9SETsqP35EWHtsAgFs6tXcvTEkPYP3Fykga9",
  "key37": "5KEQCfjonNoHqPhSUcLW9bCq5HuRhcQ1FwHbH7pxNk5CdzxjWaGx1btVjyMdpS2bfnJjhLeWJhhYqqcEJkR9RRqf",
  "key38": "oF81kb2Cn4UNnTUW1gRbtnM9rnBB98bW4XnkTBWXQEwPvkRUqhYvMquasSXR31h5dyWeb6iGRLmMe8xLmHUCLR5",
  "key39": "5QS8hAdwq8UotkuMLaRyhKvK1BfJNMxEUxDW9MjhBrHpj4sG7N7AgZ14kifaHWaiNFB88xTP1dErZNcXDFT7Kw3Y",
  "key40": "5VzhQosBuN1MfKS1U3rSjtHkBiSJTDfnNLPZRxgqWmZ5KcRboxnmJrKPHsfrZZkWjgEJ4FuRGoDmzcdNoke8TZ2s",
  "key41": "We4A6irVXM5yyYiVRTdNxFUnbWGxeR1vGzuLherGMz32eJCNZ2terk6PRf1bZkBhaKitHP2amef313bM91PSdCS",
  "key42": "2SegaAi6m6TMWPUdrPTdHLYoxVG2gqiAt4ox6nZ13BQ7dr5PnYxZ7fS1M9xPLSj9GLx3dQmFcEjpGHWv3ByxKryV",
  "key43": "2j7FJZDU7kdBW56dfMtyrvFAkjvAYH2pNnPm261LUXbKYmrbnvsp1qBLF7tRxX5YbWn5YEigJ8jjFTZH9jF9EB8Q",
  "key44": "qVU5HYy29844XmdYUMyw9VKyUPUE3G9WjWaALZCMC4bjn1XBKbN3DXwYx931Lw4oREZrMQbaeSXtsitV15UDz6H",
  "key45": "3CdxC8brFep128vc9sK5Ej3m6NsifB466rxBREuzhV1KgiTYbdNMM6K41TLLxvTM1bWPTxC17uiMyQxoTLXf4u3R",
  "key46": "4XRFsStxpK5A8wTcPuLgrhzeucNoEmJ3GFzxhBNiAbgAHPZLTcfhmwiaBduzoDnucGVhEaQH9SpxPrvFGNvFXtpG"
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
