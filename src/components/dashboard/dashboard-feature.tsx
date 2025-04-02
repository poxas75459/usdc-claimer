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
    "4N3NAAEeyRoMFDb8hfZ8gMgPdcFs4uLgir1kkbKV2i1dNQ3K4gZifeHTTR7NphmmW7voABoaymV71Az8d4QgVcPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJzU1pXtrPgoYxeFnocbDVTeQjsrdWSjV9yJ11oEoYEmG31fUa4pg5b96mRzWbxWFXp6SrwqXRNGw7mYXe2MS6",
  "key1": "4R9rWSCiP4a4bESyuHSJjG98m7DD4xvssWaWpxvsd5zj8wWSkAuv9SqWzeg5LZSnXYHxtsP8rjmZatZjywCTBXH2",
  "key2": "5WBPmBgam6EqbSbiQ2MRryMFWCFv99nnR3Ar9y3kMYd4huFjgYpNKF5au411VUqVDqdbdLgGjUSRCsUpVKoQjNQu",
  "key3": "3dUGns8Yvyj6JBYkb83pGYWuM6CGFHguPyPoRBJbSN9PypqoT8gJ5oRwZLg45tL66K5b1gxggtETGWFxh8NHSVcE",
  "key4": "4YA9ES4dWxnYbHSkMPZ8bcrqKiwePYFRXH1sFJkqXEmGHR6PG35ctRpieycxQY1ry9X7824AMeYGMtsN825HEL1h",
  "key5": "2StPVP62Xo3y6KwhifPsDFtCozvMRdQyLkDgZwfsraY3YYxo2CABSz6PP51az7KEsrNxmoG1tdBTkdhqXhnQHS2P",
  "key6": "22QTo8mPaU8g3Bw85e8ntSZVgnPQEqgVEb2NTFkhVAGibgMGGY4B2RUFGMsH6KBNGWE4fJ9nnT4YXZ83FrhZUMKD",
  "key7": "5LAPoNWowscuL2F618KsPwZYQLmx58tKqCBF3rjy3M9oSHV6G8iPqh2fFy7ofbcayk4Xn9yurgeisQ98jzQzwsCd",
  "key8": "3d5wqnUEMsjLhBfxBzBPi3KqkpwPqdmqEQGjMF9c8bzy747ft7qYbn1dtx7XPZa8bUpb7BRCxJmtWKH6XVrEEtF3",
  "key9": "cbX3afzMMTAk5RNwcvhmuaXz1ZrEfSAaXCTj59rDKiqT41tCnNFoCTnaGNBfdPcMRMY2vvgvYyf5M3bGpCseEYa",
  "key10": "5WBqhNwQEA4daajuDKpcABhdKeYwik84knYD8YoEZAZm6E4pX6ewa8ZZNbUBsvKQojG5QwrEjY9hfH5WvtysZ9Hv",
  "key11": "2ACWpCar1NoUhryztM47cTwkMDM5Ja42DSiWtBhTC7UcefVdJzS2tTqxTMSTPLNXryHDFmK4L5jwSyvRioD3dfpi",
  "key12": "2dU8X85UMRwNcCzh45B2nnA4YQqyFTdhs52iWR2u76EBzWSmiQxdcdo2NPdXRtQMPmaHvQHbgprWSpSzrEFNZ15V",
  "key13": "2JuTTwuz3xy4eWq3RXM6MA7xwYsypvxoSEuRzuUsR5vmJLXf4t3L15GdkwWpeHFPBgxiu7FMYAezaGw3Hxxf9ebh",
  "key14": "5fVErBNZRLWrsWHmRhFfX8v2cT5NK6wwpqERcmxBkNCDsENdJ7VBe85JvaZXap9HyUHVVvEmfrtbdnqbGXjDgUCb",
  "key15": "5HNsov364t5Zym1xMznPJX4NMAEwHX4edbtPA34wB17HzZhHbMuJW8W5uyHt6khaZ5zRReyehcZBTJtpCBCZTPAN",
  "key16": "52mVPLnTUTJZVNptswZ5cXoAraz9YyMguJhfUSMevvbZsQTg6iXqkGXXS1TV9LVpuGFuWJtNWmGouRP5j9uvnbAu",
  "key17": "2tLXeUj6fauB1MVpu3ZRUu2SDtknKnVNw2MG92tXzV3f9swNiYUKiHvBpwLkk8dkUWAz53cWzuzHDLKmLNuVr3rg",
  "key18": "2Wsn36nWVU3qAcRjEnyw1txQ8rSRFGN44gVY48h8ar4uigDxPh6va6WRnCDpdXdDAqxbxVGLfTMvofGrFpbTAi5B",
  "key19": "48HnZuMZwWqGsdc5jLRWU9aeN61V3MRWfzgcsnGRNKRZJNdkRDNB98PrHH2RtiN4ApcEdnw4ZynxPY9CBPr8mgJc",
  "key20": "3sXYSDcjYFLpeRz21HfbnabVSpDo2hg3rNL1ubf2qgDR46C1SXZUFj65h3A3F7SyfKmEmvC4aoSPCCEUQsWkfQc4",
  "key21": "2Lv4UVUYczkWtY9GeQHC54n8Ait2oJ83FMPw8yVSm878tr9nqkNonio57pyx8puLA61cxFkixgayipPrR96FXDJf",
  "key22": "56w3iPw9Bf26UA3nkBQvKf1yaDjm65gheJbFQnGB1ghvZS7KLGNUxAH58nrDsNGphiqKNLhXxKmgDJc9UCbxsDKs",
  "key23": "2y7NFyfrEeZNJVYWQ9JJxhe8D91WacTJTzSGbzdsBP5mnXegas7MDpqLUALEUpG7QEB2Wf7zBMnc19bMRUcSFz85",
  "key24": "5Wd2wLCwnbhhH4n1PpXwRgymDe1LmZMTG3jyPscmV5tUgEhen4jJ4NXoUMLto841NyAZ3feadDhGF2etHkxMNzgq",
  "key25": "sXsVYbTGnzWMVgpNa2pfPmEzru2wz3eNwLGSZs9pGete6vdZxPLW393jyHG5pgGQ1SBQbZTr4BaAjxiRTBy1dn5",
  "key26": "53usDkghiMoFv7f9sb9e9bdX1iM6mJaKMCBxLPJKLMMQCAKV9yS32G77antxoAmg2DdKCFRfLvqi1XMGAQQTCfsw",
  "key27": "umHYSj8Sru8cLe6q1nw3CaEfLSkAnEpYdoCuqSUGrC6YAJuCoTgtY1Ewpy2wnx3oECo4rM49uLQ83JeqCBEDeRb",
  "key28": "3CxsDy19CbeyEKjbF5BWweQNEBjjGBPaerc9kgEtyuuWGZiC24p22jMAP4fv8GLZP3W8GdbQKbNk14EHeyX9AS1o",
  "key29": "5k6p5ZuosNpWuXbzXZC3sYbyPVEhqk5MShxDmTutLpTTp2TVpSVtPZUpd38bGxjZThntaHaGmFUwUA5fbJJQ1kkW",
  "key30": "4CqgvvKkCtbppD1in8V5gK21dnBjjtZgd6EavCWM4HHFR3L8kZdp3a7wDKCmw4YWWx5fFJaVEqJaCf29oePuvPtq",
  "key31": "5Z72tSoAy7d63aeNQq4VEb2LKk4JNECGvwDAA4aqfAF9raweGYQAG3DhjybBhhZk8Mfht4Da1XHcfQevz3DMSxpK",
  "key32": "3eS6a7P8dmdPcfcNiGHbmmicn5EDkXpuLw9jhjr5HqximUrqch7cSCxvQ3tYM5wrAiARVTyLA21jGW4QShjiyheJ",
  "key33": "5o43bEbfBazqD4q4L1YDrJ7N2XLwG2LP9yZ26gMysvoeAsSSaqaebMxCk7uKPQy8qHDFCLgeoFMR82hNa1t1yUKb"
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
