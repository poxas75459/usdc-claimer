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
    "5YPb98Wd8i46tZvXe31zraQVjUSLE4mecxrmgKHwWtKuCP4a7N3LmmPYytAvS5j3vRBNrZ6cmyUmyQdSgDCXMeWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFdKLzXMTKuagGaNQ4kZkqq4W9x5AxE5ye97ffN9WhBTRbw6SepDxDNcwmCdkwH5pSgGmYZ9eq6dmuUhM8E7iYn",
  "key1": "37RkFCwcHLU2AZtZjoFgcazpCbXYJCBunYLhhH9NNvcdKtEKqQuyTpfwJY52poQiE9akHNt9tAmua9NmtRgcJYhW",
  "key2": "d2i6ZQ9boKarz4deWF3oy66FandUJJYGryUQYD33TBVrxfcbh9a8KF4yDEe7So2ztFtLaX1RAqeJXL88QGdZY4G",
  "key3": "5rt8jFfJ1ndchYcQVsCBMbmwiqqf2DCPSZTRpjVmZRJcztzCRgibjD6JVKYwu4ZYhw4NZqFBgbh3AeuyDoCh3eES",
  "key4": "5jc2Ca1AdJNpZ2Yh6ZzdZLSceDK1nE7d6iG3G13VVSUkpwymNCSC26ZQfUrweJZtVxGxX96XLdRvJpV41NgkfiWZ",
  "key5": "5ZyshAbK8kc4XRaV3YeDB33LcnQDX7srsq4fpXcPZK6QrQkrr2u2QQjksE2VDdjx5UL6zFgtHxZqxZUZ4whYQ14k",
  "key6": "BikLQvgbJarPDai39ztdcob4cHnLNPsGAb3JTbPLEV6Z6UoAryUiG6VAnJL9P5kV4aWzQCguyfgmmtiKmRT5huR",
  "key7": "2tjuAB5bBtvBJYqNx9fHFFQnewWBTRNkPSY8AboU3tG7iqo1A2HgHsHkSSLZqbtXeSdhwUmLLg4T2dN8dwRvf93h",
  "key8": "QdgDUSpwCjr8o6S6Cxbzu34JhRosPPuZn298DVci3xS64KiN8Z2B5XxrNPur4HzeXLdmDRK8dz2LjTWMKb5kUYN",
  "key9": "21XpV6pGs1bnvQb4XjY7PhePkFunc3SBkYWaw43eGTkWyPLhfhauDDP9uGhBBdaYm31x4vuQgJyVvMUy9PCcEhff",
  "key10": "4m8UYoVMScwTwZTbNGUpWa9vWWbsoCnaK6pKp9RP5xjcqckDmajd48oA2uQWH1atVx9q3iWRQ3fcPUVHVb8eSMTs",
  "key11": "5ZmohjF4tHLUKQnf5KiXGe66E5zscFXQdaB95tzS8wynqtLefuFx7NKuCAksCf4BKHTnseNMWZcDx8vrQAQn413e",
  "key12": "4nQUBNf3GVCYENMBwFkPbpNZyjhFdfVAWNUdBpquoSegN229TH3LXGQKeT7aJEDJzMGqZT3R4HPKGHVd4ACUjSCQ",
  "key13": "247Vvns6CLT3YgDHCJqWX8yDbQA3DJbPRoT5L6NPaeN42Z9bJs6njvPaVe32KYN6pgAqf2ZgE7YnFotcjoKpEick",
  "key14": "BTduSdkMW267RwUgz68YtjkSKEwQTVUwiZZF4iU5aKqCRrxzd5ZCWN3hhEBqJuh1Mwr8k1YJadykSnagwAx3MFd",
  "key15": "3KkQ1YApYb656AoB4YVWTXHycZgK8SDZxv1cVRQWn7bhbrrTFfUAynxWYcJJBXnRYHhhfaeBCLqHU1Z6kn6xE6zY",
  "key16": "5nL7uqXVdXvtzhrMnUWMhDTnNWCUcZYLTDQUbu6wjTqDMErbULFUABx8F2mn6EosKYvYnYhc4gQndFGQLp677cUP",
  "key17": "5JPQhA3CP4DQAGrG9o6vh66Ch6zzMdotmEGAogUX6fvPKvtaaPsbA2xAibJGN9CrotyBKyPNw7qyMMfnEhQCzmBE",
  "key18": "2UP5JWb4mWwuwGRisG8HQzn9GvDGTr22pgWtebRdAXMhoNa4MWJKjnUHcAgoUXxoRtiuBUVNKtD7HGun9qEXX2US",
  "key19": "4Pfc2FUvuxMpzkXzx4bTKDN7k4oFwogjmAAPCU48YqXrFf1ye8KPqNLFma9xaeipdwCrWXrnvPTxKLWoH511eked",
  "key20": "3K9kGgy2sPd6wuZLiN32A3p2AhFV5XvzFJ45YnrhnvAdqNswtqqZpT6xHVSxmaR2ngswtUTYVFF32zdDLoEdhBBo",
  "key21": "G1RKskJ9DCMrhvGpsnvMX3U8vZwEU7bP6hRxRqJerFghvHBp32AfEn5ZyZk67dvHY9rFamiMjpWaW4xHJdRKoFr",
  "key22": "3cRs6qJZ7H3nTxsGPV8j1KhWmjDkyk4YBsG9bxq8UFecRVt2SqiMbEm6nkkbn5L8yRtk3MXmnmyeXuAHPJMzdkZW",
  "key23": "R1gwg6CDXMemLnyVWqDC3oAA2M6wsX4kMxyv8L1rCv7nG69NSy6E5wWySXv2w8DpFntkfNdhR8SfTWT2rRSWD3u",
  "key24": "3BKwN4sDUYJdeyLkbWdmMWwm52rNA8KtPTrgqy5AEfpZdy9Mp7zDbzX4fkk48dETzoxPtEjN5oE64vrCv8eestdk",
  "key25": "3T5df2PJWDaRLb8ch2z7PCPMfmEQNjY1Notf7zCZohWuMg1fxrKuW5cBC5hoyBt2xHj7AjTeYbEY83WeQS4gB3su",
  "key26": "3RJd7BegzSVY883KomBLi26GgY6PeNfnv3aqnewouRw3FuuYpLLyUVDu7PDFYe14k71Ph15g38ox8te5wrQUyiQd",
  "key27": "34tiUu447aNVUTVb3b2Uhy5yRCak6YJaG5xuHqkYK1Jo4XQ8uT1sEvNpKwcmaiSqtrQnzTVBjeQdwK8j7R35oJh5",
  "key28": "4N98VJYuiJ6qTWbHb7MEW8jdSwDitxTmYnKPZMALTx1ZeA32AcvdejnVCdXFXxXCGGRPCtigWj45ErRsdi7yMWeg",
  "key29": "9py77dLgfUyFSXTtYSC73LQ9UDdNXXH6CkkJcRzQwiVf8KCnZDVp4Ft6cnoJfbs9TDAJD9nZxwhKiaFWqNcUJg2",
  "key30": "emRTDvP62ButRcTnG7Lz9wAwHrKb6m23jwnsAJJnKiX2oAP9Y163y6SS2bcFBDWkGMvgcUmT6Zs5DMcB8jC5fxD",
  "key31": "omZgQnkybyam69NErLcVo8AbzoW9uQqGvCzb4vPc5oVZvGTEmbAC26HxdhEC4YnAtGaoeaUKSYC5KZ7jzD2auis",
  "key32": "4j9JsriEjGPvgYn3qEheKgUR4fF6pGYzheKTdErhh16EXTJrqPrDto6hZzawNQrMC4j7xRcktGiVvkqGUrukf2ya",
  "key33": "3V9XoFfqULKzHvqAZLjQe1iv9wo4Tyt868i9kCBMTcCoAjavgxb8RAdYuekYVDDs4WjT5N8NV6K1YnjJjjjxUegj",
  "key34": "kM1QRjR8DNie8o33SAiP1ZwHPECZkQ6iBFzJxLNG2dLaJWLZiQA96yFuBKZKWVybJex8ijcxZ3qTPN8vvL26SAA",
  "key35": "2TyqNLTkDuqSGn9c89eU43DnixSoTZSJNXsLYMKjUJACUuDyWDNbLGxXfm9fBed2wMCCXGH1zjvPXPfa9s7CHMU2",
  "key36": "4wkPJqdrQY4AyQnwGYsVZnaZ2Gube7AxzA5LckrJHHS1tWf5bDCmjZKB5SFdZb1FQTTedwY5Feqh9cpzVu78LMeA"
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
