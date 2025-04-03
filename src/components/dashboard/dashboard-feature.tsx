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
    "5NngPAob4pV2XJaTnBMLB9TjB7BUw65VzEEYVAEyVRJ813DpBvrML9uDHb3RLQPpgPjFoYCTKe8BTDPqvpdJsh14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NXAAEmVuDeybdkuAa6mNPXEYMJPs2tzj6qXLhMmKxPQnK8HSDohP56osXVjDrDffmjYg3qYAgxygY9BugSZhPhK",
  "key1": "SdTcNYZ6uEG2SN8siF9vYMy1F2vCAPPwAGb9rkysQErKuFodwCMu52Vk9z2BnsrxUyrZV6tMfBi3L4TMeiZAA7H",
  "key2": "5zfZAgLCYfHoTeTy8DgytiBxZKj6EWwQrE7tMnBk7bJbt4MtGTDXz3s4ZBNiaJEtHioXxMGdnYmbVwMoTqWyCT2w",
  "key3": "5hC4F7rmvJ8eEiaf2vW9myrvU1NexYhSAzJ2it3MCZkqCfHTK1hiWgWTce6rBpQnrRpKCLsNmHh1VKqcpEyEpii8",
  "key4": "3TZjMHakcc6uB9W4nGDoM9vQ2kNA6HJqaqq99bo93itVxY6SsZ2C1sVmNp1Bp1kSddzidDepzJTwUUWoUb5BCaUK",
  "key5": "cFbg4GPJvJCwaumL6h1o5ScyVbC7iQBPjhv9hy1h5uDjgqdnH6TwjYeamavXLwUD6K1Veec48vX9R7gFW5er4MD",
  "key6": "mzk8W8y12UWR21pkC3pBUza5LU7z9NhqrsAFWYdiw88ztSRKQPDtQDWnyNTrXnt2W8Z7SW2A82iskuYZ698cY8V",
  "key7": "R6HmmBnkdawWenH5LjcWJfwDxLdEp2KPof8Dr7cArg29SPxd3xLg4CACncPsiraJZktxvs6S1BsMjtvjw1TBqvs",
  "key8": "468MxGwtRRK7Tp4yQpu3yocUURyFbcKceoSt4X9DUUeJ124f9k7cyaAQayWQXq4y1esEvd4usX5W5CX7VcoXF7mF",
  "key9": "tVUBXzZr31caLF3wzjCU2y34JhGBp2mDsoZ4kW22yR18iiL2g4eTUeb3Rpgmoxm6v2apjLfu8NLKi1JPMpL3ib1",
  "key10": "4WYuh7tawto51MfX1mMmYvhtHm2Wt5S4qH23maazLP3PBRBdVT5XnoYkZX1iLMf5RL5Z7TcnfsgpA39vEsY8Sty1",
  "key11": "5X4BG7qiewXLiezdDvimuWhyovfBZNfX71y4QqJYnpxMxnR7eVe3jkjgm2MkWcfZDjDT2x3MU3ErjJ1BNYQcqGR2",
  "key12": "5EsuxCyM4fsNgpLZs1y3eKhgEsCwGVKJdWpmgtPFHt4p1duSURR6kAXETDxZWYzcDjqpZ8PGkMhySAhuG45xbWG3",
  "key13": "bBuzYkEnFpRyqRWxvHLw56NWLVfaUev9MLFWY2Wrg5SDuZB8nEg3QQNb6RFob9Di3qW4URYiS9U9iUg6oL6nyNh",
  "key14": "5VdeRwWXxUFPawYseNxwShgMocVXhfMsYTRBHrbVNL9ZRgZdQsmfu2u3dmHbfoqBGuCEtXin5daguXceEHs57PNV",
  "key15": "53yFg5zQfGrfPkjY2JDL6ep9noaKV5dq862L4H19VAYxmMAEnRt4s1MY3DYibSWyd5n5wxJ2pQARhH1HuizgicsB",
  "key16": "51ixckhVKFngcWfb3yiMkUmMb9Ti9XEB19RjAKqA4QFpa2ArSVn4KKcKweGff6BUxLZxhGDyS6hwNcCcJB14oizo",
  "key17": "3rMQe3MivvSB3LKLnEnAwb1t1jBpsBVdpBarSDvDxiz11Zun7vvCxdqEQVkix68FKyZtQsw67qj1bXpWGLwJT4Pk",
  "key18": "zo23FBk8C4hrP24qYgonaWMzLkGyEzPDeEuDiPQTV1w4oP7Pqw256wqiX3WeW98uP7V6B5KFumBNjr2x3ivD7wi",
  "key19": "2HbYukrTJuyYpc4s9fNt7Jx3RFqRizxsqps92TAUKuXR44h7M8ZYSmQt1JxytzGgUpekhZVucbeSTudVp5WGVbYN",
  "key20": "2JJaXfPxk37BH3UjkyUaCoq26MkFAvpNWu4YxRRbLGgtvCJk5jeH9pjYGqQRQoLep4GCoNJGbwUn6Pt8VMCzCCe9",
  "key21": "2vLYzHK1xeD3qCK5cP8aYzgwD5pA2Bq4nkMRS7oizyCAeSvuY2Gz91vNTTCDxk7zXyLVeAcx68NnfB2QCwSg5sUo",
  "key22": "2EcxGpCmsATW59M3w4nnG6JBazdtNLdtPZDcxh7XyVWVgfDDotAtRWgCXNmuy1hZ67T7cDyRa6MdWpkUpinBG2cM",
  "key23": "5VQGSHEPUp2BoVytFKvSDCXrwoxX2ZkRkbYd4x1u94BGcBxoBbS7Bb6kKPCaDy6R8z7RFRiFPRWuAPhkWq6u3yeA",
  "key24": "fVyJ8G8cwokvB6g3rgE4KwaQgeW9Dm5vcoTfgPqj9FddKWXijSrNJtpwbGbUxYDgtP384rfP4tjAJ4T2w9Lu9U8",
  "key25": "2L8Bh3VuHkLzC8JCqU6o4rNSaiZakywpxZfgBn8PRWqTqRmETUbJCTQvErRFVji1aVQ2r1rB7PatHsxtzZKKp2xx",
  "key26": "3YcRtptSfPG2zpmiCC1xTsJVhJMo2FdoXGZRfjQ7kHJHHZt81qLxQLCrq32SvKHuvYBtC3CTh7zHseihxTMJVEe7",
  "key27": "C2cRz6MacvLupe7WPNRj1xh96WT9LBvhCH9DhASEetN8hoB7d6EXDXUKRPh5RQ4NjgubWaHioAKUenrpHttqvFT",
  "key28": "rJDGasiDkLqiRpTBqLoQezL54GUaTF1MTbD6N5nGYsJRyog2dXgqbuKgAvpSipyrBFGFxR7rcktEevb2R8jJqdA",
  "key29": "4AwpdoVkv54vPis7tJpHhVsRVwvLmoXSTusZVTkh7x96xELiqVEJigszddr2XiL7sEsrosnw8FraC5YSk89xiLzT",
  "key30": "uQgazB1YLNz7GoqeaM6YATfER9cYBJhtUe4eSqE9ZFWmpSNL77hSRLwVvbyiyJTpfYWNeXdm8g9jwszhYHbXpZy",
  "key31": "2QcCKDjQiCQYhLWxKmRFKxc8XHERVT3jQgDajncGt6Wt1fHGZ8eHxRLUeqeCneXA29LJSce7Q2x8AKdJ84FXfh8X",
  "key32": "5iEANCvRn5sLNYx2qAgMxpt5ekMFedYNCSWheV6GdrGxXsM4N8EH2B7gfpYGnbkJfx6cqTJr647uimnJJX1rAfqx",
  "key33": "339FNmgGkHTJaayQ1F96wabgrZ1gahcwkKBZuPnzym6tE8r9MQqDoEEeNGNem7cqfaiNGw6nhbNbRLTxM9Ut19a4",
  "key34": "3cAim9gZLas16ERjGu1Nig39N2fXQCextqdrBGzsFeoEhr8WDtFoE6w1NgrLq8MxQpAcFGBMpbBrUgWDquU6y6Q1",
  "key35": "2TxkRaY6PTW84Dyv4pnwdeqG5LseryHBujJZzESt7AkPiEbPbP6Q5hbqmuoM6CeomHi2L4HYC2fBrsrPTyG3yqT7",
  "key36": "3qSLNRZ3hgzfHKM44mSjryTKm55ZmUS25xyAx4GQqnAFDxB8cN9SbZJX1KUqAp3uBGZ2wJpNcMDvRrby4MSdUSYJ",
  "key37": "5UhFsM7kZ4b5eiefkCUEEUVexokPqgWSAun21BNeSWBJM71j2xH1zEdgzpjvzPX3iB1PyF8EiSz2pq44oKmLvFLv",
  "key38": "5etjKXLibUUzg6QYjrCiETv7GrwqkjktxarpjHtuKDVqMCkmuVBKVWSD4kC31ovDvLoJD1P11vkdBrqa6iEK8RxR",
  "key39": "3Am4AoUm9oBeuNN346UnMyCcPN4GHUtRtxwEcPZ4bLK42AkGuKD5v7L2xLSunU9JDWrsiSRUGg2pJy1VA2BqjQLw",
  "key40": "4hmLzb6NdG3Qgg26xghDbAiqctZpEcvico7cmo71ME86Xbc174b8Bawr4vntLBZmgeM2xESWbQ61LZRaWtPAqShH",
  "key41": "66H62ZupmTqnpMk4HrzQgSFYEtt5pKwgXrd1srU8iiyJ4hJzyPdLG3YF7JLNeteLtan1Cxgvq83iyC5DnthM9QLj",
  "key42": "2pgKbRC8B93Y1tF14t2scHnhrrNWPqP9Z9MwYXnWFdmgvxHEZsJWm8pffkhYKWhScQAN9ebyQ6HrmJXRjD42UdEm"
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
