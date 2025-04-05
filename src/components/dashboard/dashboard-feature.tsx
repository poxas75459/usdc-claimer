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
    "5GXHGWN36FytYgH21BcHSCah7s83UMdNf7gPoEAnCgaReuiGQA2xPrEzsMERFcj5FNRoEyt8rYkTSnMpcr56xda1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pY7pNfxetv1x7NBUXEc6NgAwJguFi85Wr5iXtXUSBtYDfBi183mzR5FFvtKQz1fMoqWQyuybbXFi36xRFusvmxk",
  "key1": "4prr2JvpUm8Ni38dL7rBftqqoHdsb2DZ4FQwjaCQQt8xGXpDqmXfwUy9UPHGixmkQvA7iT3fEwxBfTJSKpPe5Y5L",
  "key2": "2asH3kAc5zFm9vv78ypEmso77BE14DfPCeqXL1mh1rRC11Z3eHuo2dqmyjFvxuskoBiDoYM6SvckTvjLzX5X9F3M",
  "key3": "5XNgixPaHnqPf6ok6Vm5rFmtGLWXLFTntBicZeSgDmmoWK6tXq8fNFa2Z9LvmPHjWHzJDDuN26VULtQH5zGrSzxh",
  "key4": "4CwwE7e83d6kbSPQ4Gy7yGmzpxwJdxXv1Ag1jEobDe5NDYJec8wdcPD9qUnALzzTokpvyUmAW1Hg14G93BpNEZei",
  "key5": "KAKLrW4NZwJjDPJupkXGmkkYB1DinzTbmHRqJtGyt1DZADAsFNKXUc6G9DDcvqHYnttj2VveungF47tosiqAZ3G",
  "key6": "4kC8qcUTWjWECAFfXMJNbZMBRkC9Ru8E9i234e7vpkbdwPUoL55nWN4npCAStRrtyLzQrEmDEgHbv3gySbU9VQM6",
  "key7": "3VZzAzC5b21kJeXoPdiYuKnkditMejGiWv1Q92N2Myuvc3Byry6TCJx6zNgypbGRbDbWTXAmKo63f1VZyNAWbX1L",
  "key8": "2NNkTztNkpZcPmq3rJacyjFSgoF9ScLU1iH257F85VAoBhUGSURRT1FQvvqUSDZLu2EhDswnj4ginB55VLHM18AQ",
  "key9": "37gn6gWnekwM7YF5jGEwCFafmSycTSx2oQGneKbng2s9aMpr4SjN5bSvBebGQQMExGC8vSvTrbrU4f4agp9RSW66",
  "key10": "Vd3yi89x8wrjdKbpVMMBk2YxnzBDT41JBhLiv9ZGJwho36QbsddB6vrdGMyEoLu97rVArrV766qmzYaSS2EZeNK",
  "key11": "5579kV8HVdvKjuW4q9KsBceKtuwdPJDGTvrEntzX37kKMZPdkY9i7FPiwsqU3aPkjeXJmxrtnsHPw2o8snf7VsP6",
  "key12": "2htV5H8HEwmvWdEqqdP5Z5xGnVzLUVViwWUJHDSMxmykA9qKSsxGwiempvCt5v98LZkJPeu6bdes41sT6ggXyttz",
  "key13": "b33XVAaJyhdWfBLigD3NXc4iygc3cWsZLaKeukKygQ6HkNzNZco34QLmArxsasBDo1x6KmN2q67uxthrXaMAfVo",
  "key14": "9YKzcvD9DmK1NnYb2MZQJ1WX9PjmF1dwRMtys8XGusmLHs6BecRFzquyaKtg9A12Lxg2dEqeRf2UQt4eChgiHEy",
  "key15": "2eQpUC2xfdemYZ8g1JiLEXVKfooaWhMVFxhZ5BSJCGtjUmBmpsMzMJ6uRK5WhZazFn6tQRZhejMe9E9cD5Ev1vLG",
  "key16": "3DKdW54SM5Hd4G5yWBHGH4G8qqo7EtZSpxVB2fFbZVKTGahrfSm1TvqU3pKCaKNGA8Ayk67do6j2BhZKJi7F3v7e",
  "key17": "2dvA8wzpFTnQbDqYpNmz1phnCyksiTjAn88AqcXiaMFSJ63tChZqAyT61JiSKp2ssx6dyQpJ4GHQJtK4R9GhBBG2",
  "key18": "4WbCHytZhDtxegPGYvgu2aUhnBLmnB5aH4E7HbmQz7xx4NvhxUH2tkEMUJhBTBuThB4aGdAH9h2A9xMB1g7F2hAb",
  "key19": "2U7cQNrR7miv9mGfngKZ62zbESKUdNTJqLcB6hKJeusXnVj867M9M4rP26xMbzrZ3qmhEYM2FhcJQghfgHv2qwNJ",
  "key20": "tfUVe6WP7GzNr6jsA7vVgo6WBddFeCFr98HEJVDAz4tFQL4GowTnva4vSEr1DvsjkunkRX18aN33KFR1BBdeCmz",
  "key21": "39DeqL38ZevhvbPMweAQ1tgFgpdokhLPUdRw1a3bxsSewDVCi8wW2WSBMS1rjfB3XHfsQqF46r4U4HQfj8WmcYc5",
  "key22": "Taxjmtwofs81PQBGu4aKehHPmQVYo2CcfWgptJxBncbLvkpefQ9wKYJwip5PHRNtEvoMm7EoyqLkuAepUjWNAxf",
  "key23": "2iFw1qrLQSgh4M9jNZ31viyNGqiKjscin5XfMvyHxi78M3Tzs69aYWbccqNhKk3FGZ7dspLXJHKyewUkTKPKg1Z8",
  "key24": "4ezGZbQsgg9dWwx1Li2s4RKTZQCkCh67sY7dF3AkhQkaybeZQFGPcqwiSRZzf7Ja6pWNLZtw5JykHmrPM8dsaLuk",
  "key25": "5vtFtmyxEjRzVh6X9Nyz4cEWz1QjbDJEwTSkDJKCo61Z8GHJmocVxhzKu5z9ZDkVrncbpA9mNdER7Cwtn16detiR",
  "key26": "56FavciCMC11PCmxkM79MGZuxpAGC8oQALoc2Lwt8LRQ96pn7VCzEo4SYgQG52zJTLEZNMnUvJ9nWizR5iFhtwJm",
  "key27": "5awoSTFdzsQHGB49ZDr11aX2xSP7orJ4Md32Q1XvvDNHpswe5a759p3PUVmYMEaWtu1WmJGJ7aY6rdg1V3gJsQk3",
  "key28": "3nxFD5x9D2BVJdch7TFgCNShGXJyj1hSCbJ8J4DspyQKTjPghEzFDjoAE4QGgJUByuKEQFsixNVYAgo1RrrQfbyv",
  "key29": "5zH3RcvWk1eKmyHSnXWJWfgFJP8ZHEWPiKGD88qz2NFqaMi615tPoK3y8U45WUSki5fa5icFAPCwhkofs68zZu7F",
  "key30": "4hiXf3v8vtg8HKzaxNLSfkpEHYAMqwbWhztdad8tdP5psXaydKafuefBjZ8LqtM4Y9tXEVQZGtACkGhjP9xUxU3a",
  "key31": "i3ULXuDUvuMRT1eRHtsmQ15KXdMvZ2MxS9XyCfGhhYEAynxrCRkZBVn9zY4pyq3BwJRBjsdp9BoE9dGR7URetFA",
  "key32": "52FnU7bCb1pVT5JMcGZmT5AqnuhGfxaLXk83mwoSFnefoi1JDXQb1j8FAGEz7Vdfojb8wnN2ZAQSrFhujQhwH2J3",
  "key33": "vEeWWcvNgr969YCHsMXDjFzERntQ7DLcGHYjxMjyZdv8ZZAcF5J1CnZeEfHV8hdWwLXKnuaCAcn38uwDvUGkXkS",
  "key34": "3MCrtbFpnKfqWhxqJsk9fz5E6W5qpkwU6Scu7caTS2rQNVi6wNDwf2AKK4iviGu9caQoCThR5VLUkhTXunRt9nbE",
  "key35": "47dGGLQyjD1Dzz3UJ6pb79ehAFLp4BPuH7xusxXJ81agUud49TbKeaCuRKNFjKWVqD8kMBFxRwEKbKnvutBsknqZ",
  "key36": "2ornPZHgyJQWnAufcQoTnQfwT8bXn8q6kXnew2m7MvPoCiy1x58P6N67u61KAVmqpvbXKWiwDvEZSEMJY216VSNe",
  "key37": "5LWrorcy283oEW5Ki3NhdmpfXXm4R8J7R3zgBZMGQiFFXTW8rNunCs719yKU8RaarCQnLVkWrHYgm7QQJssRGUVQ",
  "key38": "3xuXKCAbbsDzHX92Q6VYTDTgUh5JKqHeG2FrJTq7CGzw5HFdqB3tLNZYKEEgaFt8ZKXRnPbnFtdh9pndfhqzss2N",
  "key39": "2CDoZnqihWQqGbA5SRZNFpivUayQLVyXdqxNdmARdMqZnoWQrxSuDTM6iQgVC1Vf2CsN8h1Ubo5whFoKun7dadSs",
  "key40": "wtSXb3AFiHCnLgxskWoj5r4VV9eevhGmPy6cazFw6fGgfVH4fpXy6VGMeCZ5CmPDg3VTompzAcbKSoCtttmzHPB",
  "key41": "4PHuF7bg6KHbnjDSCXroY52szuPyKnh4PiJbxXPzABpefA1YkCYoq3p44zPcsbQ9x426HWTRiuxZhpEiKHQBJvCV"
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
