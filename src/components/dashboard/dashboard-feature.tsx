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
    "5B75KV7TFuTegqKNzjHhcPGB8SmB9c7hzrQMyo2XWpDXceNQZVGnTC9bkpGoEaXheqZke2orRrKs2zUH4WKS9Bcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23MkuGzs6EydGK2Qek6voTWtgM5Y2LZ1xkJ1ox2hyuV7DkfHHB7imGufPmBR99V8FUK3sHwKzEBpJL8zHmwuhx1L",
  "key1": "66x3vdoT8CWpGqXZvNxMwaXBCVuN4CSMCijyPjGJrAXPWGLWcFrE8yhDByF4wcjQrRiZQUmYtp8MvXNjK9S9jamy",
  "key2": "2QjZemcVAMkeXSquTR4vqbP8Ya1fGuECZ3R3QyKGA3bRndGkk4kggsw5tUgQeWy25GggL63hXo8Ws74iueWsa2mk",
  "key3": "uzQtA7eBTa1Qw53reQ4MghwKFQdQZvwYRyA5n9GFcQA5up2zFX9PdijLS371nPEnJCY3XHvQi3LZWT1Dot13KEd",
  "key4": "5jyjxZWdqF8S1zSPhtwewAhSuwNnpFp82ZVK2gAxMTzyuPDUMspfGu2P3u81rKNqBWeP5J4BtTWHx7kba2TLpDnm",
  "key5": "4Hcdz2MXaAmFDWAAF4iHhE3MAvYCGteCXGrZpT1jCN1YT8dwUpE8eoZKvgXqWGtPPvfkJAGWh2VQCpzEJPgyXFQi",
  "key6": "3jkXaTBmhHczUKrXw9LLE1F7ih59sUYwHTB6g117vLwQmKW7SEDLYkWHdtdkUFQwm45mMDD6nFU99enLgZhiyJRc",
  "key7": "665UtSwphByZMASgsP8QRFtGch9gTEkrDW9qZFC9szUMVH63q5mESTggtUFTP59mWAgRA1QLjqYFsupoR5fxLLYm",
  "key8": "yaWbekadtdQvx16NKmFZmUegciv79p43VYb3WHcW7hwFChGQRkEA3E8yew6GobRpGBF5j71MrrVav9rCnDgNoD6",
  "key9": "3sGQhNduESC8HUkY4AoPgfq3BS2rXqXWQnWNer2s61s3BnhpsPUD7beMrkcFkJwNknRDex92Xfo4E5AtU7cJSGr1",
  "key10": "4UbvXuU5Tibmbh5ismaiJwvQVBpYgMqfLAxJjvaVVL2Tz7uny5A37gVcpLxw72EXunzNkTqbLzFe6HqFvChvrLBh",
  "key11": "3N3tnpRxFJrBW8SxGRLJUzTYvRLtzKrxz1bdoy3QgQeTdARTbheMVi3AEqTVTGLEAGwSP46ujhnakFz9iuhuJ4Bp",
  "key12": "2gCKnyUSYTfxcWsqRtdmPSZ2UEVQRH8yHogMHAmmX1zoLrz1X7WaLvzfyNBfcW34FzFFgNH5iodK1e1X66pvpPdx",
  "key13": "5Kmg2vSj3tiXiQop7b7hxSzBhDEyZd4moetf4ZjWGHGBgVjFapUQVeLEwvHdknJHGA5LMudhU5nKSg55QLcSZGNR",
  "key14": "4ZDPSLEBUgqhG8xtgwnP3zkYV1tp9XusH5pJTdPZRcfCHRZP182XRxwy6a7p7Whr5HMPcshiMMnzjs2csPFpMgAr",
  "key15": "MGRjteZZ6D7UAaRGgP5TWrsUy1qJUCLqwoguG1mgKrFmtcXJjQFkZfYh6ZuCYaBkGN4SwPgFk4ozt11A18BHWur",
  "key16": "2Hm71aF2xaMDwnUmUyDiZw23zExLJZGR9PNh85pn5MGCyzJUBzJUbZsUmJGwb2JHpkZWFzy7PrrmtxjD1izTKyPA",
  "key17": "35u5JJQDiCEMBd7fSeBRHK68D17HVtBoaaHTfY3pnm7S9YTNHCrhHPtVmj6Kqcir3ZJ43Lwau1tjG4kgmbuxp95",
  "key18": "27nQuJGwiMej7ahMLoZnr8QuVCydC5QGrW8v7zRjJAfARGNUNtRV2NHagkF8xFUUKvTES7qxkPJcqpVrS8pdKrwT",
  "key19": "51Jvd6EBPwUFDpJk7Y67C5aN2bXWtCGptpHLMR6yWFDcxtdW4dQUpwfp7wyGWSBKANwtQutyb6pcwZh47Q2qeKPh",
  "key20": "4qHP1HiVM5FYhp3a9czoqzWkeSxwKi8BAoXYamY2L8Vv1xT33hTjTFSQc1tvXwUVWRhZJLbswjDVa14WMBDrxrTk",
  "key21": "5thUnGqXum9njCHPteCrPNLbDJK1fnqWYvRvTqhfZYT38MvMdBQCNKrXMBGXonGPW9rag4kmhHyDiFqcF4mJYEzu",
  "key22": "zz7z7Q5Rc5JEaWvogtjoHU3fnGwk85H8YHtiXAGWDtruPFUqot2oQLnoYpAL6pETiRT8UJfFnexjTZV1p4VjEUp",
  "key23": "48Zy8VCcBUTqBJF67JeddwqLizm6pjL6qUMzPLFXMocLwNPbbX9XJ3qZtMCSdVZmDXipBazmHP8LfpYi4mpZnMed",
  "key24": "5ER53wW8VEdhF4Wv6eUtgsrR1wZ3G8CiTCt4jk5tiwEtTx941vjcCqYVBz7KiFN5Rqq2EzRtvgDGNPvHPDfrYEU4",
  "key25": "2Hhhb5hNUeHx5uQtm5PkxuPR4G24BF6sFn3xZpjUt9PhGG2huenTeAhGFxQkrKACb8RYJkigNVi1hQsFvaj2D9nm",
  "key26": "3qS3jEHpqHbq4NsAFiUVefEyfk7eU6B9p18u9d46Wx9PcZHpEv4LfzPsUCQtWDXdAq2yhdYCdSjjjaYRcXrAnRS1"
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
