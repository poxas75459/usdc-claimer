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
    "2MD9UHcsuSmqQjUaDwFjNXwmoVqGxZuN7d44pFaGuGNYxkKp683Aaq55xtk4F7Ts5DnBKfYtZ4mosq3TKX9yHYsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LXgt8CbC9wRNAsQ2HuwiAPCQXKnCw1MCo9P1nFe5p8vMUe3dSJ469iiMTnwzcNd9Xpwiwpicm536asm6KjHmb7u",
  "key1": "2CoveFdWZfjW34GL7eJ89VFvf9cRt292z3afEzRc23VPmnrPDUPtEDb17p2za2k1RxUq3sFk2jjyit3y5bbrn1BM",
  "key2": "NGPrb2mwLok5bfFGQo2JSLpmpR6qpTfp5zfiKiPV5njESs4DuSuP1aiYCw2y6LEGDcceZ4JSZ4yd9cEu8mzeSJW",
  "key3": "5eRW2ahrBovdsTtt5Vk3vVg662JyBk71w4dgpqp8Sa6xdGQtLR5cSdBZqD28FsspKA3afiXL3UBHzeeYGkHuLcwm",
  "key4": "4xkpCUU375kqoofgEmXdmfjNqQFjqccDX3LTzUpk7ssviUhNs5N22MHHxa3QUzGi477Bw48WNEmo8LM84fnSnyv7",
  "key5": "3PuCFrs1d7f72pK6B8B8heyQjUnDPQD6PJ3hFGQFz1eqkm1Vudvn5LmkS3Fyr1GDxWDCgwX8iPRUiKU4ms9pxpkf",
  "key6": "28ftKTTUcA22RX3EsaLLKQGFV3eYEaweNSEXBFSPnpLrChtDvueG6ZAx8dxm6XZXso8oo69GG24hfRS2WjCexUqV",
  "key7": "3Pm5kZDoNAzAsUinkZ1e3XM3ckS9hCTzG1moRBF148sJXN9RncQKjpJMqzqqfUVKdmfe3eKRpv1r461vQpgSnC1N",
  "key8": "4b3HySGrUr56fytubN5uVE1xNsDjLUPuCcbYnEfEZkSA6jLZpMHQytcKyScTsdafaDGx5fLwDRvc2qD1qCYb3RqD",
  "key9": "4gmwawRCgtcbGto8FiQwtqFbcUDyFURRgKU2bLyLaDKxqQefCrGBigdLxwdPP4CsxheF3HTAM268Ruqiq8RU4kid",
  "key10": "4fPRsVcU5CaBMvksGhX6tLteRH11CNhLUEHN5hcjvyRNYButv6aLCcpEKp9U9XYrDNXeJeCEbiBQPqurr5dWQTfZ",
  "key11": "2v3BUdNFskyX5raz3cFUUtqxAUZXm7DdUqzKHx8dckGWms1upSQ5oc9V39JT3jfJiDikkw1qZZt1J5vaqu8iK9dd",
  "key12": "3aqkhnto7H2yxotV9geeP42sYe7DMcZTn6ZQ2LvV2UiASiH6HiGcfjVMEJMCf7meeWo9tHDDni7BrEYJiELhD1LA",
  "key13": "4efDAj2mNQTfhJRLHw89vvyornFo6mcpEdn4VydY15gDEMV2KJhPU5Z3AEzFqvd3hsyMhW4d2RL5qLLTYBMESRTo",
  "key14": "f3bLJSuWgjBZrspXsTBtbHqfiJcaZMzEYwowMZawoEvFJDANp7ZmibX5CEsb6pRbnRWHgzvdwszTiS4HeLdTJdU",
  "key15": "ZWhXihTgZ9Z1bsVttKtXC7cgadQnjzEfJF2zMsa2Z3jWz7rBqa2tuJD9dBr8vWfcYviVPHs3t4TXFPtY4NRDduN",
  "key16": "4MdtYTnaeQf8CTymweK1jfUkPFrCsRoPX21wYDdyCgPHTXVCfVhGMWY54aJM319CCtUqLsKJ4TusZzAmcveB1Ey2",
  "key17": "3d1ftzci8dCFW4tJXDE2rfqvMVaqhwp93Nqx2B1FpVkf7xT7RHqp1Ceh46NDy7xmbUTCLLJe6Gg3K6cSGGPy8WtK",
  "key18": "5425ieYrq5MjA3ahY2sUXqXwjYeuG7uyuF6UNRQuG8fFfMdJHdSbx8cbE1acmjkGTCmTJ5PZRRp2JeFaFz8FeBgb",
  "key19": "4NCqmFPTCALys9yAWRGs5DcgTzLdqDCaKCqNUBEbhNnMV6qN8zy7cycDw4oTne3yLbUWiSvs8qSzvgn4AgP2Szx9",
  "key20": "3tf4XBW9JAQ8jRBQF2QBbdewoTT3UjHeayUSjUd4ATL6o1JaNTakm6TWGXkQBDdRRTs2oA31TucfVLG4iDPLVws1",
  "key21": "3R86R6eibVaKXR3uEg6khcMxE7bRHJhiXpn5sxDbn72Rn9QwZcUViZuatFqvXhH8pXCMPGiftKbAxuwNCjfiQPjC",
  "key22": "qVNuzPefBEmtpyNZyRdkYe5SU2pmGvY1rpw5A7rRGUvMR6CMLuZG4FGHHistGP7LH3nBFuAaTx3SnmyjRFLqWCj",
  "key23": "5VDE6fgZdSPTU39yUTjDQSJS24U9FdhRCqKQTCtqSh12SKmxoRFvm9ufsGivfnzzjxngmNmAVKs2FwrB2NLCLezM",
  "key24": "5t7FcF5CstMNHxySofP4NftmNytKQxBeNi1cung5M3Uza1FBq92wtxxE56qHe6nCj6Bn96KctponDP2Nz1AGkVTb",
  "key25": "5HrJfUDKuDSSdYL4aMQ9bsq9e7AKWXwewzPVkUetAE5V91LkLiH27aJDX43A4ZhXw2WebZMAUn29rJSNCVE632jy",
  "key26": "2fRvtW5kAHJd9jdyUdvqEQx8vM7efXHwQccBVxYa3g6NqfbxhQ4uxowJWoWEzdVBbTNuveTB9tt26ug3D7yzDbc4",
  "key27": "2evZjYTTSzdhNVg6RCxcG3K2dmwmJwV1b2ZvYCa2oeZSqqabfHZWZBrZEi1gBgwanTw8EUpjNzHZ6cpSrgTCEwMX",
  "key28": "5CVE7akK9pmDCr9NQCPiYLSzB8H3rqqDA6dxr6p3t5BnAp9bPJvSJNXZZwiTNboC6DViUmSkK9QCCAQPYS7S32SK",
  "key29": "54gp4ydCrXhBsjsQFpQbvW9f1W8pGpY19CPG2hDjaAXHrSzjfFUXrd7WeubCJdkyhL9Hzn4e6u7WsgrD3mkqLBmL",
  "key30": "2n2VEU7jHADPh1jNuK3EkHyQofUXfgmFidNMsW42mPrTV4sYvbF3nL5Hb2nX4YxRK3WH6v8tT13bxq6iBRgbXLQQ",
  "key31": "3HoqUxVaV5vT5waBN4VW8F8U4mhNe6YM9rUfyLQdBevBmZeBTGfd9mqazFYySXrqsyqPNGSw2jMW9vVG55fEKxxP",
  "key32": "5oFHjYfU7nhDZVYbRTiywTk7Gsd7xknpgaKX3Wm6FVmYrsWrnf1dmbAhqD5Vy5VhNi55Z4GmtmTavwo2cMQdnUQ6",
  "key33": "3Lnksj3NfLawjJSnv1SVLTyP5aP4NYSNPUBcggf197yoa9hbp6aNxcJVAckSSR9NZNNiW38gT7nDZGzuVhqbFTgE",
  "key34": "44C7GxrP3FmPVkyvDmJYAJivnSBaArXGnf8Jg44aLrn47FySBhF4gm7BXnJjTx56r1HhmQoSvehYrh1MTiQPHbV2",
  "key35": "2sae2ceq2Vdk3D4kAecRMJMXjxHYDzAydvKntzajD1Wkfbw3HRX1kR2sLhhJje7PvnvjWBjmipcYWchBE3yxGTS3",
  "key36": "51SXhwEgdzyYGD92eZnVQYvyfrHpehgzQNTVeTn3JGNahmR9twrvSbaGAUeGMCESfyCBCk4fLVgV22cYmTCT346G",
  "key37": "QrAJpQRtfXLpWCbCDgZkWeLXtD98oDfRFQWM7hCNUiym3egLEA6CyBjgS41Yr4nt8uDcyRM68sWymDwM1p5VjLV",
  "key38": "2oujeicuHtJ2zjwqwuv2xc1vwpU76uzvKCCP4WqrXugz4fX8cFg7oywhJBWyPWSiCrqCzqNabRFScJyfoH6kAX61",
  "key39": "pmw4Jkv2PZKT48U2bsfumv5irVVQeNjoqxwnSoStmDs4edkBz8E1wD3EMinUUJshBwCywx6X9UrL8rK52VfTWkL",
  "key40": "3zJZZhJkogwSCqM82EPmDdhBoSVj2qLfFXM3HbCp2Ch9NggF5e7TzeE74XzxiNTiPxyAhM7kxjwoavv7war4y8cn",
  "key41": "3dBFoo2Dxkt8LUC9mbXZQnb2PR6fmGXGFnZuZCU15Zb8XGjMbgT8hM6W31CZgrWBAmtmxvjdHDnEw3dMqbkjXAgF",
  "key42": "45HpjrxuRqS5SMiQUnFwDENiV4jdgzBWkKyJbCZSHHydRmLvcm7mex8nhy4bfZAzAGBRRUJG2Ah12ErfFuHTm5Sz",
  "key43": "PCYALEmSFfA7aYNSy6bcBuHcVvhJtrn3jwX2iryjD8P8rvq4aHvHQgaAB98fqmSGJ97S4RDp5aCzcbejF6X9PPR"
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
