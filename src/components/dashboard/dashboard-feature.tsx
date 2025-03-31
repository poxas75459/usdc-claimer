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
    "rRPYMJjBdHNvmR2H2xj9iVRbS6y9wm4hRSkMbFHuDnF6WLmAdEs1uRFPc41zxKhRrUjHWfh32BqmxPU7y2Yfg9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xm8nmqKNXXc4xH4VP6KB1cijZJm8tR9GdiVg9NYHDvzkUi2BScNCJp9PMr8b518xCZBi54VMi1BpsjKYEcE7U1A",
  "key1": "52b56LLVNVMh6Z2N4tLMpsnSCGGR1jf74tzJBToFnvSpRz6gUchANkXCZobX4MZYkA1P2NqiofomZGSR8HQkzH9Y",
  "key2": "2zM55g6BcTwgUVysiqTXvHihDZrtdqLRXbyctoMBTvDzcKf3jFN57EGtHEu9D24hLoscr2aCXWapimD366HR8XdM",
  "key3": "5hzZRPi3r1BWiUQxtsF6uAaeminqBeVA2j1G2hyJZ2iAyZa9un8BX1YGLrsiMxnjXFGza4HSvtmwErL3fbyEnp2g",
  "key4": "2sevMr7nAHWGE6WWo4SyLxfiW3CdLdGQxAAaf9nTahwYj3uUynCHWVMcbxCuRgLm39CLU7KVxE41gDSPPH3GxU9X",
  "key5": "F36o3GezWQCXtuugQQzEB9hU6bZusVM6nUDSxuARFmx9WKftPJmG48EEgEYZbwm9UQHwyLKVVCYvJuftbomvnXc",
  "key6": "2pWYGHfF1vpD62qqC2AvJsVHYnSJt1FzzuunhHhwx6N3uFx3bUz5JzqgxuqPqoY5fEhJq1deQgLATQdv8tpmWphx",
  "key7": "5W4enuVx7oJG7mudBt4Q8wopVxA3MPGcgVX2dSb9K4cEb9r8MQEBdvCEgfPgTEsGXbByhwskwq5swoDaZzAHzFGF",
  "key8": "64PngSJ7t1cZ4wvJM6yyTu5RUundt3sMYkmNwYGTmVUhHVdYMcpa4TdskzK9ZmobJEFWWZE77HMxbQ1pRejDuuuc",
  "key9": "53ru1nT7ejpf8dfuHVpxE2xFSY6gtRM3mCoTn9Bwn6jJSZpcPb2L9f77CSBh8iPLKrFXN2G8vQGgmDSYS9uGHJX4",
  "key10": "4bAtE9MLQmeddkEZpxgeaKVuErRZRJHyuq25ouRxnrMAf1XVwyn96qowGBujQefG8CAvGTi9wEfj7xDCKopuFhrK",
  "key11": "5ZWUrcRfiLCp3UKT65Z8b4RVi7eQW51UmtGnFTgoEnUW4v3b9s2HqPnMa4Nzprpkn7LLJQRU5q3QR4CU49S4bW7u",
  "key12": "Kh7GYnWmNaVmYkjUs3j5toTvpJM5xAF6HiSb4dBu3mrsNKxhB6yH5S7M1SDpk3qbX5qJKQ87vyYEzSjtan6mrHA",
  "key13": "2KLBXK7Lfi7dFtfoxxYKrxZLuMP1jJrmDAhMh1V4tBxfvCWvU92VGpcZ6RRiqSN7GvsMUwfGKHhKeayToXz8ZETA",
  "key14": "7wm6dERnkoqqXyTRsg6rbo2xnDDbUi8XRmZvidA5rVCKspYCNnNH4QMWVNLckiosLgeNc5cvPJjiocL3JecVcFi",
  "key15": "4pzkX4GsAezpPpXNT8nJNWiETT3YTP9smQEH1xZDETZyRDRiy642Mq5NQx8xmH6Vtuvd7rE9B9EgBfrL2Btraqsi",
  "key16": "52f8RdJPaRcv9Xx8YRuNndrauUJ86Ee1VSQDd3AcPY2r2KEhyNjTeuNVnXHhskVAU4UTGr5F8LrU2a3p4RNTn78f",
  "key17": "3ZdYQotc2XMcBuyoiW92STTungYUwCFe15M4o2BJ458RxC32vkYY1koA5iGcAoZa4rpLhSCHAxdnRPQqo8y8aa2E",
  "key18": "2KNBLMWnbDiQAayibNLNroYokfhajbuf5GuNzXSA5uJt9cj8uUMrqMTD83QtGJdinvmHe8NuEt2obbrynXWuYnYu",
  "key19": "3p948zZQ9MtboPvdbhWZBsLn1L62G4HQk7pnXJpgXjFWPLsXMK1Uz2CDgdcMwHWxQ2e1ZFAB8Txkny3nYrVURVzz",
  "key20": "2mZVwSxkbF5r6dedCa1QaKqfuc6FMBUyRapNAuKiEpwq8svv1Nfch2nZGx2LHCQhKmSenf76BavoaokjQi38iYSr",
  "key21": "tx9SuRy6ju6DVyTwR425FbGdMJMxCnbhCvJhoTRQ5xXQuFc2bmTX1YdFDEcEqec36GCHtYgfzsgY1gCZ97AXpCY",
  "key22": "4ZjAryApVsJiACeVDZPZX3KKanzigJVEyLxuGQuJbWKiTZgTBVnGLGf9MRzUgSY5svip1qiq1dNeRnb9fUDZodmp",
  "key23": "2RSLHuRZLm9p8ohA7oy4qibe7d9PphtFGUYVqW5T3RdTHyEE8LAhKLxQNGgGP2dLRWKUrwz5qB7Z9APw7YssJKDC",
  "key24": "3B68zWETAWRv6dgKz6hrGWkU5XQ3xE3MS1RfKtWeAmZigkzQLMNzHCxzXdy14cA5WUWYBqL3ajszve4uyroc8KmM",
  "key25": "5RVEkRL4ovVtMkeuugKYdNQTZuuuH4a43TqByZKVHyUy62YhxPRTPeokBmGro3rbt8woWn1R3jQuaDRDQMH1H29c",
  "key26": "jAUUbs7CojHup8shJGxEF3dkHvfj2cvV7Bwq7WpK5WkUAZkEopkn3FoXcxo769ykyLFs3zu5LGJQDmDvjaoMR92",
  "key27": "4AFD7AVst6C5SdKL8VHfRFrDxvcRTzoLytadTLjtkLoajuKpA7rRx2GDoXkVXEoatVuWS7v4FSgHRt15DZkx1r8D",
  "key28": "67njE5FUjztMt94PNCiqJtRh5Z155uqFavDWZBVHw3JhSYjmDq8MY2qC7AtfCa14t8kUN5RkEpyTUv1fckj8tLKf",
  "key29": "5gMDh9kqSSXgpgN5LfEXVQBNADeiK6n3AUCNebpFTuMHANYe88m7zopDUuM4GPgsAL2U9nfZ6EnRXokPjKoc71nJ",
  "key30": "5FFhb5nGYcv8MwssHHLrgeAYkiCM7JcbDm2KzhHbrVgUejiCrBzGnrq6kxKorNZiBhxnXutnWRpqwXjp8zN95KR",
  "key31": "21kZYV4sqrgiEc6uZFa82oq7uqH2UdbM1NajTd2udRzvHESdzJMCAuGx81CYqbL2DRs3c7X5hbPSESttaC5ke52o",
  "key32": "44WoBZ3LQLp3wVZ9zj4z8Qe7gucJYNAReF479drfXLg9apSwtKJwk9QYiCnQfxCzoFDxvggZuccQti4pd6Li3ZhN",
  "key33": "5uxvD92L2gPkQax18ATUZV2ka7S7TKPcJ1E93BBFEmvLnASdXxwCFH1RJBRAkJCWAHxAgc5YX9F65TFH87et9up4",
  "key34": "5uAZkAhPSYvHMR3Jf2FD87uDRbc4cDadVK4SJiFRKVb3vbnhzjPicph8NCD5KCwyf76kepRMoMBTE9a16zZwMBMu",
  "key35": "32UoXek71vFWzbyE1NvDbrDD4KWn6Uc2cTL7jEtPotxxZa1KkfXL3igsmKmuvyfkNPrJLLfp2rioihaWaWxkmSEo",
  "key36": "2fFSHATfgmYVhpZHSqD35TWSr2dPSnxZsa7JxH4W2sqpxdqCU9pTy2t4WP39vZ5wSkfqteczwnQsoK5StQXqUs5S",
  "key37": "2bTSNwxwuBe1Bvg9v4XKRPUnScyD7rR98ZaMZAFhWjab5PAkQGn4dd3oSX5uhGpDPDRStKJMWzvHARE2dNq7GFb4",
  "key38": "2Bc8qYJ4RwVkr1tzi1sbPXzxSQwk539J3Ls6R2YueuGx4qTdqwgYA1sfDFjujAvMq4sGgz9X7yBqtiCxbLc7pkwr",
  "key39": "2ujr9DPg53XT76MBWSytUg765DG3F7W1KGBhr3TS7dPYsgeAntukn6xtiqhU65NoYfAxNHAA9HafzLThqqMiCAW3",
  "key40": "5ZoSeF2Wv244kWMCVP3Kt1r6yY6Fy6W7soF4nB3TMtyXEtTkA4wMZshmoeM2cdNyLJbjKM1CLGwcVk7Emh6xhwTF",
  "key41": "3C5bnJpJbpZrACfU7ST7wGEDKfCSMgBw3tmTKDKMm2vytUDFWRgZQeGnQo37WngbWQZDoNGNMmvxMh9m1vjY1jZR",
  "key42": "29KjHU4XBkNamZ5JMd7A1ZPCGJ4ZGLrC9Eb7vmscoUuhM4d8xsr4q6n3tiYp2tAFoPGQk9u6CDeh2HP49s9Wkwg9",
  "key43": "3yDrzKi7TD3sepQqDecFMhtUiHVsA1SbW5sov6ibt4dMmeZ1631TWyZE53Wzr7358b9w417x1paMCzY8UhMSvUXz",
  "key44": "2bgGHdm54AxvV8tmZpYzgonqA9oQGoKscwWu2wVLCWB6b9mTVRwKsWAGbvS5fN4v6nvmvpUX1CPg5WF3a9WgKi8x",
  "key45": "4gStLpWexXWHbByTmpscQdQb9Fwy6SvCYX4gJkusDmq5TzsrxVHQaQd84Zy47PSBLLLjuUULDuZg8WAHFAbGPALD"
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
