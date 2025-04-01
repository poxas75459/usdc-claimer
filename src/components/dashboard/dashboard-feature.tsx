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
    "3ejLx5cwNZvy51rYvoaD1YhaBc1bFdEdx1z29m9eHUzGzwK25Qsr3TwXaUTubVtAgqFRcgiujQgKtkj1gcS9ADuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wNfUbajZ5mrkUjrHoAAp8QnXEehv1KRiZkWrLu7gvA92xqrnChaANEHsjkiTFaer2PxAN9nfnmGC6UP7vmAe89k",
  "key1": "5reJCUgvFNceSxhxYAoXGZzhu4Ac7kTNwXt5tap8zwxQc6A5yr5KSqKogqeNi9ptrJmueHC3iQ2DrcxEnPUbYwWP",
  "key2": "4zwMjEwzx8iKJ7HtHZ1buEvcu9nbdbUvDTpzsCvnDfDwffD3Uen3NEs8VXxrhQUJopaCNxAWucGteE6TCUWHgi6y",
  "key3": "57JVHVo1YfYECbcYappoZUeWAdidU2c9wLYUx41cpTEUUj9LaQfJqMmFtuuHEH37cLHZEsvasG47TaW4Dt3WxsAP",
  "key4": "4kQTvvraXeJx8YnLWy3cvmcNTtKSJ46Ebp7vEdLn6BY9aS9fwUAe5qFCvpcMjzgpgkdP69ibsWYbatWyMy1AuzLp",
  "key5": "4izhjprz3vNWDVehCA8CwQmoefaWxT334zTUtYVfhkwD15BjCyDFLB92qYVD75Xa37kyA9LWCkikSwCVCWoFJfpU",
  "key6": "2J7fUQsb3KZ1Qq3eFP1rFTZ3BrzGaVXoF958Z6ys9v9TodnaoNmh4jEx3FYafMk8xZy8CnbiDC84xjSoBrnEVJf4",
  "key7": "4knfH7euSnsM5bNy54LtXQAArWMjCt1KWtCiSq43RAjBLkX6BXFzfHFkmG27gw56ianLpUdKm91S9XhgCmY1LoCe",
  "key8": "5yfC5WMihC5DpNLbxa2REE5qmFiUTcpHkuzxGxhKebjdrXNkc3x2BCvtQoXxbPhb85qMGxNxNEd2nDBGpQJk5v1y",
  "key9": "L9KiQxahe3AXTk4w4X4miBjfhU5VsFrkSLTLpvVmrv8tYusCKrVdYxXpa7ZhE8xH5Vv7a2zcidHjNwbPcZxHCdw",
  "key10": "2TQr79xrjkrZrqEU1j3uWXPd6DKu9epQEyxKSCAaGcHzJHNifArvu54b3QT2taJsympYQ2rduEG8CdGKGBZDxGjt",
  "key11": "5Lc56DZpjPjCTiMRqm6jbjY2NcFZgbzeWoBNaxWXFNwrHDTkC6yBVDxgJh5o9uohxt1vsBqYKZBQ68VHcjSHZ1no",
  "key12": "4qAbtWQNZRbFK8XLtSiUfKwzhcnyTk7vaT7bxMrqSPXnp8MnBHtGxErf3ypbzEJH7FBo7pKKp4Tbcq5pDYCwLhf2",
  "key13": "5gxP7Q2fxUg49jn2bqkJAicNdiYXuDoWXaXtKPUjyREC6bfjdboda6CmJ18v3TgLxxoWKxCQomkmXvwzup5YtkYb",
  "key14": "4qF8NaLLyZpa6zc4MqDukPfdcRWwK34BTVrcehZYj9mMCNsMdoji6owGx4xuneZQ3MGx3oJ8n7Erbj3nrmi6NxHG",
  "key15": "wei3bG8587ZyorZiDZ8XLCKzPsgPvxkjcL31FwaPT1uLv331JNzQ9uW9kg2yD4dyBE4F4JCYjwjjzpLNJr5g6mc",
  "key16": "4wbhqiDuv17Gesyhu1HkRHoDSyRVinuPGYtBB48UnAWBF2V7AZ9iZGyMNrZFtoADTkkkCm52s3vF8i1cMU2fiKeV",
  "key17": "5cXxvgCgYdnV1h4Rmr4Vv62rrum92sNV1yCkV6x14sQDf6qq9jsgkTn1EZSBWLB6Hw2w6auYaJJrwuHfiWUiQdJ2",
  "key18": "5xjsdtwgMYAK5tL3bjV9VMNHrAiBSWJZNFYGs9yDWDib8t3t2oLsnGYCMAnroKcdT8Zq7YWTkJ58BxaTwXXDpGgi",
  "key19": "3pkrrDJ2fU3CdbrGDSVw8AhSMVSe5KmXjLm67pm2xosaR6UFbKf92Wd7MuJZDyabrqoRzy462fzWFGdDLyzzgXEu",
  "key20": "4kdPoHnYeBfw4mQaKumPiwHWNg2uh5iYwaJb6u4oL6FcxUkNXFFsqiLQF1zNBVbVW8gege7CJCmC2E2DX3EQ5vmp",
  "key21": "4T2JtCTUEFJgAtd7STxuXY1brrcPWT11rzFaMqmZxG2wVnRMinAqqDLQdaAyDPQDg8RjzS1LoeNidZcC5SXhY72H",
  "key22": "E6yS6GJDYoJ8r52QC1Gdpcne259KYBoSYyn6VttPJueVYtEgpVUDV7B1scdwU96nDbQjmaWBkgKdJbhXRXaF5wg",
  "key23": "5hx7jFfoY2rGiAFoe6HH8cduob74JLHuSaitup9xcEvZptR2hvKSSpu7BRAQtCnm3TvskYxvXp3NCZ2wn7CZhXTR",
  "key24": "5gD3rxejskVUwNTo2Aqngr2aHFCiU33hf9iD729FiKfcEby1uVNRrBJKG5cccUe2oqEg3mepVgJefHpLBBS512Z9",
  "key25": "5qmr6g3s1xiHEL7KnGpaF3WyUUpM3zAjS81CPSpPQSnjfFuwmPMFwBbuVZFEhCiDjLVcVzDnudBEMzA9WsCkqcJ"
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
