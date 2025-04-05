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
    "5PDGpoCT2GoMfX3jddHWXWPXkUBW32VPHfdJbynSXun4tqnapkNVc2GQiHmBNnkQnRjeG1M51LB3A259iWph8bbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Duge9JERLUWD9uegAtzijnJwiBMjq3TGtWaUauzo5sUCxntDL5qP9rx53JFfcs4UzW5QsxQtxShh1BQqLBTUjWx",
  "key1": "W9j34BtwjX7fJGLCBravgai3iDjvuRzHUeZBdEBVpZjrRNehQpKv6WztNXAkqQoqUTvENAirJthhkXqRV6fxoDr",
  "key2": "5oks5BcGbggitxQ7f1QjJnXNgnYy8SKEGoyUPkhPC9Z3RgPka4tCteuwR19WjUuA4XiHhSoBQ6uDX8rPKyYR7FaU",
  "key3": "56mQSxC2ceyrVUa4A5s7vxhRKoU11KqjP1TtH47m4YPgC21jXePZ9kHg2Pn61N12KRhhZucKhn3zH7Rcy9CNzDxK",
  "key4": "o1ZzFzj6WSaf24EfhcyZUdj1xM2hSfab4oCN8ZJym9PFrVFcZ3ixu2asgGpc4RaWaeRxsEGVat9ehWmJwD5m3tr",
  "key5": "5bZhHv5NWmKkGMJ4qsFdMUL1sDJtLW3UJsmVUe9tiLsaKL1sH2tuLCXazSfTg7bAAZHrDWhSo6PUMRKiWiu9AH4a",
  "key6": "34u4k9puWTocsaUtKtVcKrkd5hubEtdDp4KReyAMEmxKory8TB22Be8NgcdyvBHexhTqJoxBUGYNuK4ynj8s9gVk",
  "key7": "4yFkPzapphUSR8YyvKDGhQToE5nEWdincucUj8D7xGsJq6svLW3JaY68bBaNSbRdSz1e8kUTYREywpHjjD4DJ6HP",
  "key8": "3MVjpUxusH6vqT1NPWQztFW9tpWxTsCPG75osnYcQFQRZfJh5ZoTgyfvHPT3d1wGbYKnifN9D9Ai5yWR3498Lyvd",
  "key9": "2xjCyhxSecPdL7YdY3sKVbkkESMLu3FEYx2zy9zW5JGSkM2F36mrQVm9aMe2qqdxRJoxjq5rQV5Pa5b8woSohQJr",
  "key10": "2bLVmeH2cjdjd9bBGPenftmM3X2TnwsJUmpMjKjhCdrvz11sfcxgV7DrKAaTfbaZTQ1mwJXALK8y1YqpcVB2gAkq",
  "key11": "8EaQwBeEJk5kAyoTkxExjTxkRSx1tGbHan3Pb65AtSGWNz4sXHimaByCJNNv3pZ612t9TL7wwWCFPCR7woKrvQU",
  "key12": "4dmGa25p79DT2aG7wWJET2bibWQUKd2hkpaYeARbxYVWULCZccRbAxMgZrNhXH6RinMfNLs7c7T1fkDTxbmXtrL4",
  "key13": "37aL36ifwHT1QYyPm1YnSpNu4TM5eWvNRTVGF7qJV7wfrhKS8fFBoxigCyw4GCSDQ4TNgAdCLaFrtptoMxHxBoTb",
  "key14": "4MCsj1zPYq3a1g1hKJgfDFxMJv7Htfqa7XaUhRmiGND3jbtG1x8wRFnZPCpBGYPRmsLb1PoFXxQfK2mP3zybAxwX",
  "key15": "pWNcXwHTubQ9mFTLvphaMdiVa2ZFHrPRPnwnR3CiwasGxTrg5j9rgCkx3VdHzUrA2pPKgtfoBjxM4bnUoo7Cn6A",
  "key16": "22PzvS2GyeCevJtzq5wR6ZbTauHeojroMCkYjdRi4yD9MBxAUyWmR4McaoBNxBLTijhxLZJEZcPcMdfMWn9G8PVN",
  "key17": "scUxfrFVcahfs35x6KCW8DcBT4dUXX4CAKB95gnX7twofffk5kkXhBuTrEW4kc9bkjHkinpKtNap4Pfwf7EFDaz",
  "key18": "625t3aMH71tXiFVxYhEcjpzgoLvyBb5XymeGvoA53wiz38vLznDpzkbY3gwbXFSfm4xU3UHu6gzbYumFHhC2vihX",
  "key19": "3PCEjvrjMzq7RE2nxwPfWwdNHY3zd4JXRvi2ffhzCDeWW3xogK6jWAhWWmn17cjfGd9HQCqxvBCoYYQZzAiEmYtB",
  "key20": "3MGHRtYtgavBjZUEqNdwh8C1aVy1e6xVXTbzP686Dsq2Cri3po1c5PwrU5boz3X6mfFmUAcXENbMGewsB9VotEHW",
  "key21": "3RjBWK7Lc8LP52313tgs5tQhMa6noXkPrDdwqBibJNeFqiDNLV1YzDJgkQL2BBxkfur5CWu6HgEiABLmEFY5Uz1e",
  "key22": "2XL49ururXkNuF2o1FarTBine3RUxukV9SNMEKpQoD6aEcPrjETNsaQmRdLkW2vReVvYfSUjWdjoxJ26vkK99rG3",
  "key23": "4BUEKGMk3XjYNkWjMxK4kTD9XKnLc8guNkqNViiDERQ4P9yFSnxy8Q791tJ3KESNCvjBd5G49gpZKyLkhYYTohfp",
  "key24": "2Tc4dvfY9vU1iHhjNaBNVtytufdwnVsByUCSSkhGA38A2BHby3ky3t29DApYUPXL7pUrv3YtFZwmUxT6UVTnpGAm",
  "key25": "6ckba1xD1GSNbBBRqwdNjGc9DGPqN6oLFDGM6F2Ez8dJTpQbVcG2hAprvNwdjBhtH6ZJFRE1fuorR47ByioAZPd",
  "key26": "mhXo5JB5ZLZZE7KMc34BdUBRo2ZsSyme4QVz4MHyc6DwjPxXPRD9ZdsKLs494AbNrhxfHyV4iYvdQA7zcHSpp22",
  "key27": "4gzLmU6jcfJPhWNQupAuwhntoobD8Np8bP9TXEDQCeAbfyfDU7CWLKvPjvwDDe2Kt7efnTi1AoG8HEA2nchQYHaG",
  "key28": "4avR27WuJTdkJTBEKqketP25sULARApfuxfxvHFskjHsrx8xPSkPaGX4QngADR2FwRUabyru1rGvtmxT4qg7RgK2",
  "key29": "5NBAzwrjFcpshtypkrxy4DtaAzDysEZ1aJvXhQH1YNNMsCG4udWFkrMTbFV3DB1sxhnqC9AwddbUXkhRbQ16cJwM",
  "key30": "2DaBTkdWXCWnZzZwdwZqc4NawnaDRBcvH78xVxtnavGcQBMSv9t8s8jr65YDmMrHL1GUnMy8QTbvX4vgg6Dq3Y2i",
  "key31": "62agrzyuRfmPJ4hft36hYYoB4Rv8uEfiMnrqvDR9Nb85CLXbxkekd4vpJctCUEVCgRB5phbtuSwSbxp4NdoMD2CA",
  "key32": "4PrWFcWw3x2VyFmYEoZuUuGHzjNsqtVhBbK4VkeFyJpdcCvoeL2JzntLaQTgC6LGWnNiXCfeGBBDqT2JFw3ukH7Z"
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
