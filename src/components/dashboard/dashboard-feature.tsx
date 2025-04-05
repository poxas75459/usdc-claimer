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
    "5ACNGPbAK3z4DAAsoK5Xqxi2vwNzsuNn1fuHdtjuZqUBUR2WYoXcqkZDQp8S9BJrS2n61MHbDaTGSM24W16m76EE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NpNm42ZiJai7isTtLRD3fdvhAuYLgraYy68upPT11mXvb7qPr8WYkExNCcsH8CAmq9LwjGmqFfnbvwdhAaig22k",
  "key1": "54MqkBNCDdrSFrG8HTVWfxTsafm8jv2qyr8N3LZNjJpfQF82mCHxhejsSREoq6N3VmjFATp78WL1hkL1fNZyVZGD",
  "key2": "29wjhUaFuMxfh8W4jVHkeQV1a8rPzcCTu4nWKZSGJpVJX5yYjpVdKdSUaGEPfnXkDmxpg8DVjwiyt5TaKqbS26ha",
  "key3": "ccfRxqLRn241nTtukczVqGsqPxeEaGpEZBaovyUxQyRVYZojc7qXm1PyzR6K8bz348yxcDN2JzWprKmALKKuHNr",
  "key4": "3zWAmqambjGKdK8WkAHqUiz7ahdg1PigonfVKPWXtAniss7zPXEcLtWGkU1pfYber8zLUKTN7mu86dcjBEDs9E67",
  "key5": "3oMrwC4KTQsW54DDTktwBjvPB2qfjNFidMR7ouJmbYTK6P6EyLaBPsX3Kx1w9a7azbFVDYpxC6PQawfpb8XCkTc2",
  "key6": "4a8Xf9HLKzRLanNH18nR6PUmsmVqEzpPABRG8X5otEgze2V9qjhqGGqEyWsiXUxWYn293ZaJhVnsEoJseVRitpyx",
  "key7": "3jjcBuVihDHXw1Bt8bdGhewN8j5ZG5Wp8YjbMG8AkT79p6j3mos7UxqBczavfeWndWQCUyjD3stAcXjFRmCASUyj",
  "key8": "3c9S9VPeCgErSKQKQNXuZTaEMuxN8dd6bJDTZGk5qeEmaUYeA5DcCsUYQEogje65u1JaCAYqUE84BnDnjYYypLki",
  "key9": "4uaKVRyTGpWzmK4WVAcQoSpCRqmgLZbjwcSTt39XcEXF8wVzd414TPtwTvRoqG64zkSVKMzfHbnT76mpjE2WXgw2",
  "key10": "4TqpfmA5qG486LvdqABpHjCnoC8ScJ3y8chfP9KkEkv2bANrF4FxSMBTr6dXSLfGgMiM6AzMUEe8TkqcqEJLZavf",
  "key11": "h8ycgi95513tczPK4HNhETXkJ9wR5jcxHAaoA3M9gTXuNaBHz6YsHC19kyDGcR3rWknyW4GY8jEiYsMR1pMkxzN",
  "key12": "2zBojfSaMQMEoiVhYYvLFroM42a4haoovYoY4q5xCqwDYsis4Vskio77dgd8pWr1HiCk546HrWsuPVPxgpjGyA5C",
  "key13": "5NJAF2zezRTYqWD9pd6pfj5xNQ4hi2GdGpFKNCUirq62Jn8DBiK3SH3mVBTTzCX8tnkVVKaiMVi3TzQHRGuJsGBw",
  "key14": "KsBgpGeGyZh6RnpT9MHAyhxYzpm9e8SJDenYpyJQgxxwBvhYUfRmtQGZDhU3tEL4Jqbq8b8hvJWwD1ewrtXXy96",
  "key15": "Cku4LfRRTPCbuKpjxozz6z18aJpLusJqdBJUxQP3QUu6mi6SjWSxhwuHcPhh7DNimoK7eURWuHebqX4oMV66Ny6",
  "key16": "5sbjG18QqULYfBLGUDsUGov9x5reTTUn8sfb9s71eXv7vrsL2MJdF6RcGRTPQ76wCGUEpQBBAoa7tDdmTWCyKbnT",
  "key17": "6FnCxbjY4oHba8kwo8mFftPU4nmSuCXEk2VGY9dC5L5W32KyrcxAX6Bn9G8666gNZsJm7dXvhzfMPbBW7qgXLqp",
  "key18": "NiPyt6FjGdQRQ1sLpscJGD3JYdQkVDWHd9M79tF6r9HDuKgwVTeRgxJb4NnQGxsfWBZ2jLZHoMUQDXkKMYgGYYC",
  "key19": "67i8WnzfQqeCFv4azZz9opWu5QMVx9Kg7H4ufK4HirxCRuRKdD16HQ4TCntoaP8KoeUMuY3XBrLHYjVe5TLAFsNq",
  "key20": "5hwPETfJfZbQYTDdZfMPrf3L19bZf4NxC6j2nCiXiAnQcFNUX9Ck9ZPD27opCAntJoG6MipnxTH8V48GjoxzDRKr",
  "key21": "3f8rPsC8mNykM9fVBYSCgozEjsNQQ7niruDiGcBos5KmnyWiz94tppxyqChQDgPPW9kVjan2XxGCMmANdqCdxT2o",
  "key22": "2wZqupBv4npU4TGinEUivHoAK134zHovsupUvx3EToZc52PA1wtmAWLRpxvZFYCufgv763WnDznNBwpos4txipUk",
  "key23": "CT9eMzPh7xJqT1e3BHup6nvaDWHFwJdZHmxqPo1ZjurDLzq8fKuHPBTvUwBqn7B2iUJfzKYViamD4HxmZM2A4a9",
  "key24": "3jrM7xX6uoApMKGzUnPpCXaocu3n76iYdg8bW8fRd9TXWZdyfBXiXtzmv3MEETQ7WAPB9snSNtRodByjXQsRTtwx",
  "key25": "ioKx6abLigUgbSp22asJgRSRy7otSfeKH1NyxGEKeDGciggnj6HemTJ5XTAkHR9Quq99oMhViCFQgyP1P8rhHBo",
  "key26": "51QsYRnEVvKxeHwuYxmZMCCsiVogZsB28Q222vB8QANKV7D1bMJp6w9djFTd5kd6tTgBPHxhurWe6tTbxxmBtn9F"
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
