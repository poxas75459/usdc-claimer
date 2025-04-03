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
    "4bfdAzQchp6j4VDoArE29y2oNj3R5ho5L1FJK8B1F9cv9wAynuKiSSVFrrAKoGVRVsEzUaAMNpMXSdRnBV6KL2h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PoWtk1vWsRWSwgXoUAC6263UisdZmygL6uakCHRu7b8tTAiKGQP79xSiSj34ZeJBxgE2nLMQGG2NC7FWs2YuAFC",
  "key1": "5WG2jaEFNPAS1q6ZUPzEJ5tZgccfgz9jSVPirNrAXfK4B9Su69DDfnPxxiRMRo36ncAZsrixXQhgWvrp1NjJCZaw",
  "key2": "2uwG8sBkHC7XUhz41bnhTZR98q5qMhq6jXSDbedK9pTqirFWRwm5RakB3kbKgbb2g2irn23eL3iNEg1TX2Af1EEA",
  "key3": "4TpdJtMLW97mCDtvTWsaJoGrTV8fcJtCuspa6oYwC2R5LaMrosoaM32DkWFkpWatT3A1ceQER9KWzSVsuwwVGDHk",
  "key4": "4qB8AasNkmevE9nvr2x6gBn6aXexd7zzvikYpApSAinciSfMtxS2kbor3tTxaRW35PPa97MvAv5sxPyCsGi3zKpc",
  "key5": "4huKkYkXR7H55UNtFUgNygxFtke6afomsbnGVm33kBUKt2T5vGMfj7PHHb2SwNtMwB2eRjyCCBcvSY8Xsyt6KWiT",
  "key6": "2v3ayJ4b3SUQp1opewckZsTL8Yxd73ojQpnum9FEtdbUvwVrXwoZycnep1ccrMekN9itwvjfDQTyicBYSdM7g7Mo",
  "key7": "4pptCJUjpFbZvk1zF2Z6CwxYKmarj2jxPSdoqmkB7nUn1kvBUQrRDueGCYiHKmfRKCtbvurmWHf9j9rtcGHCd8sm",
  "key8": "4YXUPGPjQYaotti2acRCnYHCW4D7iR58AZssX55yqKd8Jn3DFJjuViZR52zrH9RWeVb2gRDMetCZS5ouHG5vJMUd",
  "key9": "2jRfU8XbrXwKpdH7QHFXSgpMPoHtoeqcwvEzM999Uu62hHQ3qxmuiK2ai2G83tP1nTVirPaJtFJ3y9BjrfXoPs15",
  "key10": "tfJ56BBdWqQoutHCw1qcpjQ1vK9WdJLtYqFXZ23DUzBqh2DFFuF6rTG8R81mE15RB36AP6LJZGZ4ZX7Kuwja36n",
  "key11": "54BfzQJE2S3DetGSTuGFE3Tp1TJD7gotbQzmwLrmCTR1a4je5hRPCPeArFNXvSTtMQT7c2uvpzZpNMm5hPuNbCJY",
  "key12": "65VLj2xZZ8YafxbGqgkeCaoHs9moL8H4LfB41KJmETiTKaVYfpxn1sAFCBB89Dgsv9TkX7WQszfujWSJJ5Udufh",
  "key13": "2RN3GzenpDDkEbYToLuaNjfp5zNgSuSgeBazyJSaugiVRD1DCAYMFYPaTZLQxwkuKkvnNRJbMnmwRgkyMVJ65VxM",
  "key14": "39sFp5Z5fAwWP6vWA63cWVjdccfLn2FpQxaVfwqprkwa2wSBwZqzgwdnFhsGu1huV6CiZq7pRh9smTnFoqSgZPtg",
  "key15": "4VhJaHQ76pcgnNHUdnrwR7aU1UVHHB6iHk7G9FvfHHpjcAXpoXtkwgXUaqm52FHpWwP4EpeVyXkvYhiGHfVp2SzP",
  "key16": "3kY6B8JdcHJwf9HuG7k1swGdcRrbSL2mPXbzZv8eT9fGJumaXmTXLUBtzrGXnmGETWB19TiRTmCp3vrFQzPYTTw3",
  "key17": "5ZQDJL1wSrFyXjkfjndAn48si5KRHXKkh9sg87b1Jeyv4xbzyy8pQ4ehbbSEv7GZ562UGsnnWt5yEyfriq8i2kh8",
  "key18": "8qcbuvo9epakyYiAkZVBdC9wt7nLR6Va37zjgnL6fLhUMWuchyjpbwmg9MJN8ohCeDu4ifSPSnVmeBgWzTGZ1f7",
  "key19": "4By3EvHabG1DxutoTKqCpYQT38iQeg2eXGdAs5SN3WB8WLv4Fp1B11ybe1eNSEfjjAFc9DKapp5ytyVKjpwnEHni",
  "key20": "387ehjvmWoXzFU4osZj8Sg3Ku4x9xJa4sebjhyyknxunDKoxtq5R7n6WTPEZujLcV5KAGLrtutwNycQiZ1xZCdwp",
  "key21": "4b6qU5HCGLDbLJwykgBnJquG4G4NoDBkpngY8AFHrt9DER59amaWoTvRDRJxmNF1y6cFNkhrc9HR973DyBwE4H8c",
  "key22": "3ZToB1zkurDvYFUS2SpkWHAnjdsnSAqz2dnTSAbrxWQZSy7ADahonZobojLn1uTHcVPpQJeTSV2rPBvtAMN9HDPQ",
  "key23": "C2ZwTdBaVLrQUT6tSyAVv9DFLfPLVJNUMhd7S1HufU4MZH737FRtLTmLbNBgQPvDJBYHWQiE5QRkMTGh1jAyeKc",
  "key24": "24PA35dcsCD2uE3RkBsgDdce2XfNv5Xzy8CAPr8s5VbNMMF6txF31nrYXkPyN8VYj8Ckho3VGAFvdguQ6Uce4Nmr",
  "key25": "rbuVigHL33jVnfg9doFb7vuPVmxEEtDUjJbDhCHayWfUUEG3gBU8J2WPGEnY1VASNFMXnQnBVVb5auiAUPsuP3y",
  "key26": "3B1P3nNDnEBgiqJqJCE9KBQrcP72x2UrHqAdTi9Hqpa8sYxgBm6gkjMBuGYYXgihczgNCMQHBXes4XjG87s14q2H",
  "key27": "iHJYJyi7NM6PhBSDgTKNY4NvN32t25sqvkVM12gGjXqrWcyBE5Zq8uwkPxER59YiTHEJ8Z5Jgvvi1XCY6VBnoA3",
  "key28": "2abX7YLH2fNUKXdj8mUKhrQTX9xs3YjQ2rTD5UzuAhstwVuuZNpXpCBeM446CxqueV8dQbvsrvFuoBy4PLhV4w7L",
  "key29": "3Qsb1oVZ7JC58Eeb99qWjhgSqkJeEDdDSwF1whAJnuJ3VgMVJ37A9mUwcZpTfAi347xSuJWpzEg2CF2LZcsXh3qc",
  "key30": "WMeFgHAatwi7UzjLDKs3n2dF7mnZLJeFCJaGfDRg7N4zqjYmM58aWWgH9uenmpAwuWDd8Kzvy6BSSQuq9bPd7Zu",
  "key31": "3arnYJg6Xjd8ihvUTqHymxfjxngFU6Dkm5vzGi17HywBBQSatABaBqu7h9bN17QLyFpYCAEVsdYHWDgQUbrRSCPn",
  "key32": "5vJvet4jeXJE6HcPNJy94JT2ubhMj5W3Fi5g2qdwror7mQed4mDCwj5hj8UogWYX3zP1cNgYU3URY8NKZt3xf5oN",
  "key33": "286PjZ83UBYYKfadgriDcUTNeoqRaJUfDE8rewKGhrrimSnyj9AUov4ppaFH2ckef7pUTDP1hHwXEcTxnF9iSbvf",
  "key34": "3Z3v4hsBobXkswJLqAX7ih1CKtEJYGkcBftkeFsczewdAjKmnuEqyUBEniXG7Gqam4KPWHTniL6wrMbD14rZF4J8",
  "key35": "4sC8WBN7XGGKBAAbb2FhusZZVoFyzAm3dCPsuk4aK9HjhbhsuYGftWBWwchvvdrCz1JLFUQQF13gBkosiM78Df4U",
  "key36": "5k5B8LtTHNBJ1BxLoZE8RBs5Zvc2kq1GxTWFXL2fns4g6KHWiW48rSm6Z9G9q3qgkCuFyqLMgaCq6Gd7KGVbHa6A",
  "key37": "2bx5zBzGe4YPm55uQXxFjKe6TpL17ymZ56UWKDrta7oxMM6ke2d5egsJ5WurzZt7tvNor3xKPEZjq1aurw1DvQxd",
  "key38": "29LW2p78NReL1sAN6u3CfeqcYGFaQHkQA2gMfyfvLVvVRng9EfkfjjYxFoNUscoSEFWvjYoDoPey2QNNPnwqvuhL",
  "key39": "4D9Ysd1EH5VBd7WV7hGzK4GFiAkV81WfyZtzaEEN5u6fidgpVd294sdMHAtyQkoSUbE32k56NdUs9PrfYWkS6pqU",
  "key40": "53pLThtxrdFMCfKPwzmsSWkAPPAbbqacTWRGgUgbangUbKaLv34kTigRxq4Q8DorCXzRUMupReDaU3ZZdi6gJZxk",
  "key41": "5Z5r4SrQTLDnrJyCCe6k31yMrSqDpTzrbmQ9Ng4tuaMjr4ptAK2hCdPsYQMN23bGAbPzz8nyF1CCJ1pbmzptJMv2",
  "key42": "3dAYkKV6NKd9ur94RpLwyrRwMHWfkZnaPH4LJqeZecMXSKwdgp1tfDijMS4iSMNonDbz2GMjVHdkdpkAF3xNovM6"
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
