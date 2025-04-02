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
    "3KwyhLGjGJFud7ZRXvbmNLFLL5KzuE9x8DsDG3YFBzbXD3zL5E3BHh2pfnB4obHS8WqvzAxHpTNLbJmiybhQDguQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kyaS5yDR1ANDtGEpS38535kMseT4Ppk1yH42bXo2mfUWDYH1J4XLbrz3tCBbbVQffwVXeu9g8YFpebcudyCtsv3",
  "key1": "9iEB6Xjk8wjgREAMzGCX7HMddy5hdj3AGxMgAffDukaVkVUCrLzTSh4595yX2MDhEcf8u9J9r7ZkG5CD7fRHW7P",
  "key2": "HFRFDAoiWR15NqAKCarfJukF8hY9NAHRSv5UAB5hvvcvxpEg6G4aD7tdx4mHGNuWT5R9NN49cTawGmNBhS5nHHK",
  "key3": "2n2MZHaXReLTVgH2ChdRDTTugh3QszDguWvTTxtpUKm4tprSAk3wvyepf8gpUfTzVst6WkofGtKtCp4qumvwPE9e",
  "key4": "4cv3Eps88Ug5ZFqst1vV5o6x4SmuJ7hMoZicdzkN8jGDSCfeLNMTMYaeqruRSvFxDdsXgzA64Lf597gxogHiQ74H",
  "key5": "4HbJhv21UkVixGHaJAguAu8aaKVZSMuuVAnx1RSnSr96YeQ6dn5vsi3nfLP5FyXZ4T2nShLth628y1fpgRxPEdwp",
  "key6": "2covcoaZHto1NRdeNyv1CUFHtdsgms8jAYYwwWgmeejgFxBYb44FrBNQFxqerQuyULjSJeb2L3XAe7akFbDznDjw",
  "key7": "2HzvUYE6Jpu2o87GuXeUihqjcjYLPfQPdT7SKD46jrBQjPzTz9HDe3QhTtUnAnJio1bqvqdZEHMWvhu8eR1YZTz",
  "key8": "vMErLCLfd7bmaFFNEjWVBwTTquSbEqzPFa7vYEKYMc3azn28AX1KK1dZ2QZETmEtctEV9GQNER3hm9h2WrzDf92",
  "key9": "32cM642J3EqKU2SRe42GxJL7B1N2LERMTgyY8H9aKJn4bHuzHTudgEJ7dJXUMqR1aatQunQ3W4sjADhBSdqFSxA8",
  "key10": "5kha5W1N3BnrtuDM5sWN65sBHPScioFr6nh3ZzG1opnrfkDFTUpKTJsgYuVxSdhExeWoVSATaf723XAVidhsjYih",
  "key11": "bk6vPk3PMX3Ayj8g8MEsc4hh9g4J9YhX5NcU1hruZhoVit6hH3y61DfzSMbYiazFErW6E4EL1RuxwcwgPyBjghg",
  "key12": "28tvmvwucXW8WrqUzDhUuhAEadnNc64U34jiFTspePccVhc9Pz5oXGmPUNoBzW6nRA1NZWXGQoNhYgwZCcyXjotd",
  "key13": "f7tKm2Qjy95veQVtWD1ac5wRFXSkjtB1LCQP4j7yhMaAj2cBhjSkDaoHwWNMy2miL4NQPX3h5rXxYCmduBiz5ra",
  "key14": "2W9PuWiqjKYcFAGM3nxWGrD34XusotcJ8ZedwZHfQEbgcVy3itzWuM6Y6cUWqzX8URePvsiL98fy59dywVFfFhqD",
  "key15": "3cDvZY7EFdDLWAC7KMneNMiMZx6TifjYp7s8Dw2oZFm4ALxyXMDKqJMdxaPYfrA6a5168JVipfunGbMhWv4YmeH1",
  "key16": "3CjwZjUxUYupAHP8zP2mcKpBGkVNV9qddoVesyp8GfxvpfTSGKJSn9JSEnBD7JRVRAvwqpdHU6n3QCJLVcUz7bhc",
  "key17": "qjbb1ZfB6T1QxrUzXUG3eyuD571vYwtMWFoA7fBtfPAGYpVsiAtxDHuwsHCjwAzD3M8tA4kEqZAzc4zcbys43EJ",
  "key18": "5RWvL7Tjg4fP1vB9KEqaG1dcnpSJKnpNyNcmeWLPHdnMXi2uQCEPYLbwWBhiSqRTSY29YRKhEJ51p4VVgHE8EKYD",
  "key19": "29MXw9wHyLSnCUuCE3Z913DRxyh2nBdfmfcnoWVQeLNf5dFXAYK1LowUW4EzUAPDf8rNmc2MTroEC5Ex36vznamQ",
  "key20": "DNnTuXHVsaJo48mft1bqwipShCJc1cwT3MrumpHxEq45Anxuj7fCf9UqENvzEU6QKFdoFZcL4jTJKPhbaRqtNiQ",
  "key21": "2nHyJpLXRXtVh96aTsTAaogmwPAheHXfgBSGi5syjBtmqH2NAgrXH15oy6YQH2cT2MqZ4oRQUiy7qFEw4wTqqABT",
  "key22": "2FA1zk7CnRiBwpwBkeQKeje9PT5MDVxXTiUAFuEWLJBMHWCypoTXuWsUtofoGUJvLmn9nFWtDA4YNrnA3hKPdLma",
  "key23": "4KGEyfeaMFFafzTUGaPDrQm7uReG1hSTyusqrdrJd7TtLBSzt5gcnJsQkvcHwTpc9gfNmBMGDyU6DVicThYq7M7A",
  "key24": "52BWRyMKeF8kYF8NCQvznyvqpXazxq51B9HPZdgLawdpPZq2DS9kMqf8L8ViiQbYRHeXBipStkHhz3jKX4jDwpHy",
  "key25": "3AD3kjNNdceAQse57pB8jiB6c2z6jTjiosSr5zhPj36RgQvBWbYh9tPDQDwTKR9PePy8wo74C8uCEACnhZjsqfu7",
  "key26": "4H7w2d2t4dxzyt61bDH5FgLABgFbKp5E9tBfJ1W8rrLkY2ZC3d575hBRtp8LvnzotRupjBtBvf8QwTpaqgGV6QZK",
  "key27": "JBgyWunx1826pc7ifV3PXuTQNa5DajTXJtuVPdV5roMxp2DfkiFpHTQ15wnVogauLxvb2UWCwcsm3KX4T4p6DMR",
  "key28": "sNi7LrfSnkrmHT3aPKr1onxWLat8YjnF5A8hC2QziWs1jeJQ87v9fzvxj1As9L1PkqeewxoWYR2WUHcMZZgf96k",
  "key29": "3tUgcoy2sxwNRyZJHuykGaaVAsRDzBuRLoRk8MNUCaVWjA9wGm954yVEaAvUjpMMp19LEvcR2ewsYkcRq7oiS7LR",
  "key30": "4tDqLLh2QnD5djDmfmNLQjXcR8X1Bv4fegCUuy7cFsCSzpWaf8VETHPxfwLodS2zh2an15TP3CRH6V11Err7Peye",
  "key31": "ti4sYmY8eSmn4sLWuxsBT9HVLYweBgZYucvgG1MXg7u78QpFmSRVyFfmAnQb5iFoqrQ5QFBqxdFJSG8jMxShWyn",
  "key32": "3z81Q2aRBas4qoSTTvBuYFapJp1uYCCHzZcJy3FAc4mAGGS478JT416PkobDfdjS5j1m86NdFPZEH7AxJHa6SMVJ",
  "key33": "4WyzvXwbfeYTRLV12qPXfFn2xtqaq9ZE5ZztiG2jSLmC9FW8U4VsCVSRZyoMfioe5Ut4CRYQd6Tpw8T74sEtvQ9o",
  "key34": "25rixmLiBZLuDrd2CYp94FMpCY2pvMfB6rNrMrcdNRTGjLqT7HacgTR2v8oF4nQWsSqXuDWF7fHWJAwZnNijZYGf",
  "key35": "3KthgPeCBCdEtd5qVUt2k7AvLNgjjDiKLF7KMVpjYPnw6mdsm5gC9r5Y9EGF6sCXLj8dtCY3rDjWcTeCxnPHWFti",
  "key36": "6Bz4MwhttQmiH4Vb7CXbTG4q45B97Tm6S2iGf3FfGkcFppZfQ1eX3faejNyvR2EMZCu5KHZNeHhZzxR6eWkiRcu",
  "key37": "434zwwEbAK1LFDwdoo7VPkqdBJvQ9yAF96z6rWjERZr2WqR5SPdYYjWZeh9MnFu3iuNG5KvA2e24Fk1ghVPYCPrP"
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
