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
    "5MyTKc6TEH8ZtFYTPAwetrQk8BhgkiftAgJi3kiVSJQ5BTGK6uvQuUdBmKxudZqMphbLEZnH5wv6vx2wdr4PgAQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27zxTo2bMNFJbM9XKz7DB5vdVH1yUgom4cX3crrhQLhMX9qR2GQwvpSMAJ2CUDyb8zVKtddhfGx3UPLGAMEfb5JR",
  "key1": "5cPyrPMXawTRthtCbTUyLZ37jLZrEvcZK1XWURATEZXBuTTbigTZ4sZraMscH9WGNV9AQi35FErJQXMgtFoa6C76",
  "key2": "4h3GqpBCX1G5Xr8naVM543CjspQuFN5EDbK4ZdjoE8H98w3BWgbpqU1SwtDvcqnKV16atjahFD1WeqK8Xtmee78Y",
  "key3": "3txB8s84XAYvufSt34maBKh1Emx6GLmsL1bQyynrCm6zox2f6DXChEybweBW64QuCneKbA2n2BXgNugmku4SwtCA",
  "key4": "4xisZiJXw87KawUn8HXUcsidTki2mgMzEXGTm4VXsAgnWa1wCJnKgbPv5uJRFpSjbWu5pEUDxyxxC6Tc8RDXkWtP",
  "key5": "3K3yAZowvqsKfJVQuc3LKAvj5d6K9b6yuW14uGet1cf4TmB7FGMCZ8Cmg5mTRLbKp3a2VoX9zfzNZpFPXv8JLxWR",
  "key6": "2GRCwY6xXuPptAenktTxgRc2nybkfjYPTc9DiRvP2vcLZk48Mcvj9Yki12uAA4HJwuF18mciG2gxhJD2eHka5ppX",
  "key7": "5avToS8vUVtnrn3DnWzscJbzikXZ7rNA89oXPsrs8F2x49xGLgLqiZr9feNmsVELw9qqr6VSY3jNTU7c8k7vLCVV",
  "key8": "2HAqrLU2En8DZPctqXujgq8Nnsqmd5HJvHA6W3pRQcnKBP2uBrwPa8LbiuUrvTcV7HFLPo8tyJPY4N2qnRZmPFZX",
  "key9": "5tYs4FRQrF1QfF4nmeELniaFg7pcoqB9UhUapEu2SkC5iRwc1dXxYcDsWdYhSDY2YemCCCPu3oPsiAu2hHYTogNz",
  "key10": "3MQATYo3iDP2VsMwd4BJaYVGmqFZwzL1hWJCPVk7FXb7AhPfx9eHBTDrbE5FBVEbioWyjNQQWCQpQXzcDMXhqqX1",
  "key11": "4qsrRpv5ynZg4PeHtNhVhUjHcKxUWwR67PBYAHj1apRVpdZtjoQsi76prXGTxVCkcA6fpMTaVnKDxYYivKKYzRQ9",
  "key12": "4o7DnLqHsadLWiTxaTP48Us6xyU1FGVxjCqajN2gqG3cKmRNhBH3kfbMQyCyP45n7w569bXyQBbrxDobWugMWmaz",
  "key13": "2aF89cxroPDhprcUSxAYJHyFquVJjG3cQstLpmc1qqwuCBrYxeZmri6dRjU5YyC68jcfa3DDzxovzARMR6LWdmX5",
  "key14": "5yXa1uqQaVPTsA4Nb59QfAvFfr4cTXFPksrb5rafdSFPbkhByQE46RrbeWJfNbMWtJjKb7Q44ZvuiHFB5vcGuYBm",
  "key15": "DVdee1Hdv4e3GrQ35T7fuL8rijBEttGLRzeVK1aqJ7RFrUQQa6kBXsJ8muZiuCAkLrFpUQRLFJ7QbiN61Bvs4sv",
  "key16": "3AzZbrgZHwNYp3UTqPVX8GbjMcjrMmupWug4DAAfWgdQveRMyHmc8NzsmKEtnM9ZNeMsdkGQJdizGJML5XmhrhDR",
  "key17": "4aQW8C44Tc2LLcJLUDBDp1JP2VuUk4F2GjviCu6YzMayWiCMRL3dC4v45MjqPeFz8ER1ekdizwLzMCfynReeDjer",
  "key18": "Dpjg14jyBRpQqEBHR9k9BGMD9TDEjCgwT1oGWnhn7AufFJi9g4igmqHAEwuMeCsUrPayJapc4aUWZuDdoD2Xkzv",
  "key19": "dCHjY64aTqE2LKe2vTNusjbV9xQJbrtMJi8HJhnPrhkhihaPfKB6XseGUwCqqfqHcM2UVwhrPQHffidfcEUpGzB",
  "key20": "3fyLiHEqBbpUsrDSK26CsuNsYVAfybEWMk3jz8XL5K46MPXjxH1tsCAy7KbjPVS6nQzs5pGCcR7UPXTQDmLAJsrP",
  "key21": "5L6TCyCcFpBfQJDFCeq2HiEaX17hmUmmPVcFZT44yv9gFQUn7NKA2MwvxXW2yCwPfefc5zF5RhFxi1r6KQxYB888",
  "key22": "5A5kcsf5jw9LA8ajE9WFx7jSG4Ckg6hmrTnmw3EPLfcWscUKPiBgEdi7nme5s7sYR26qnrLtTcy52R5jWP8FwXGz",
  "key23": "5EbzZQzAMnEGRGwV1xur2skxdbZzRHQDnpD1T1MvXZmdGVXii7FUjcekN1CqzLLgEyBjQQEMZdNxBzNQiCgt5ffo",
  "key24": "4fCpV9FpFBV6WjnTC8ikFZrb4FwrABzBL6z5xvhyKjtQPb7jf84djPZni6uKquJ9EyF6mf1S57SE9xGHtcMNRBmE",
  "key25": "3RvF8WBZ6gfVgns3bZ1CtqwT14QLSs2DkKKQjxxU9X93TpXZyyNNPCL9gsGwUbKZM41iQBkzwbSp4UwXCWBGBMdU",
  "key26": "5nqyXVyRpwrEoXxx7CSvGo5xfs1JjEVCvgWRCJJw7V3F7nvtQ3TxEpfkzCBR5PAyGSbWydZcoFBbmmCRmbXs5D4Z",
  "key27": "yfMdQv52PBdJBr9K4vbDp7fuLb5Sg5MSgoJWxUhgKnJr32NpxGGfLsZ8MNCJwZYJ4nvMS8KQQJmacpAHqoQtEBh",
  "key28": "5pUfCsqgsyXbC2JhW4qfVHF4PBoagkWqh8U1w8WA6BfWXW38i9iZS9qbXKWzmMhf6xAfXMMuFNqxK6w7v3JsBj8v",
  "key29": "L3r4iwhQCh1qBW5QEZFRpcYexu6UHUfwMPbyCWeYz7WZ1YiDCF9nFs3QUspbqTv5XeHQ4pzJBqyhVpNVBnJw6WX",
  "key30": "2b8yb6jqqtjK518vD8C6oEk8Zbi4y3dSQKAcExafyyxnRKj9NXSyqYGdZhxiMJ8rVULFFB5yUY6nyA8AaTLT2ZeE",
  "key31": "37GWWbtjU7NjMr9wtQQW39LgpYxNdev3neV7AYfHLnCgvN89QvZ5M6Wii92QGfA6uTNWRXT4fLqchk68bfkjFBJz",
  "key32": "2aEb2AUcQNQcA54qxUeGTmjMxNcAzaTuGdRw2j1ndynBmMvphjEb39p9sxegtv7FT3Aw66iwppQUa7Ns7UdKfoa7",
  "key33": "2akvxbWdbc8DWwhcMfmWFPL4jMG1uLRSC3qaMYAiDeZLoVQTCTskJvWwQc9W2s87zsUsCWVzVMPEWmrVYBCmdN4m",
  "key34": "Zumzs7eBRgPdFinHaAkggazueV3XaJVFYAjeiWdZEgzgWJ9tqrWdSvYYTCCY2mL4CLtcCiHPm655R71KSEfmzzq",
  "key35": "6rxuAaecK7kCM2X5rctpJubxaRZ8ijzuDtsUoFxavmVvLPHP3m1CvvXbHZ1sE81M2qjaQhic2SbZDJ5pXyKSgsX",
  "key36": "5gaKSvrneayLxQvmN3x7YPimnyHhH3bREqvBs6WnC5a2PQEV8XWMLiAZr2BeUbtwb1jvT4C3EMcK63sfTDnywRuS",
  "key37": "eJ2JqmTF8PqFMjQaVesruFRQ1em89E41Q7pSvuhDjUADk6KFmCtqgJ9giQVNpBupFYW5APPF1rGdoNf3Z9tqTyi",
  "key38": "394LTPifg2ehCWMiUnNq1jKEUmv6LhFxUZXSNWLngZkxWwXuAZfxQDv9wEAETkivUddVVvg12gXEvcGyss9JN6u9",
  "key39": "43BeMVHuRL8FjZNUSfisREGjJkr2zrvM9BRjxE6PTtBU23Cetscdb6vmKMbxhSf9NPY44Mvy7ULQSPVAmECgPBSC",
  "key40": "4FHfVrJz2gpdcu1avdMv8yHuy4WzsfnANDV2zPYKpXB8UE9U6kUwP7z35xq1vYemzTTj4e61LGnWRxVuKxodFgBQ",
  "key41": "3rHsXnRsy27BVticNrbBW1nGnt2Yp22qRWNGoaUybvMMdkTwAMXapjzegaEAueefmC6mZ37gMA6L3G9EGi3s4eBX",
  "key42": "3bJ6f2snS1NRmQ44pcivaJugSqCRt6Z6vW9VsVo9huKhMZvXMt6U4EsuTRknCtWT65yYVYDtR6oxaJDaZXsS8jW",
  "key43": "4FggKnamH3HhFY1jLus7JntKMYsZ3QjsoSf3hjPD1BU3Hkiag5jVJEY9FwDsy4nZZiqVVFQ7iXrzoFF7GciihT7L",
  "key44": "2GZuFn7vv5Q2k58zYsUqkruMKyFAPyMsrs9DsyQo2yfPtm8EApWQ8BkkmXqEVWogfvMq66Y7iSVMrRLWHkbxsGjP"
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
