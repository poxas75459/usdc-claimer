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
    "5PWYPJF3LTFkea3rxCqHWnGgZhaBwyTih5FDru78bfMnfjSUzj5wyiPSLWx7msVyfniY8MY7CQ2fTg6TmB4yS6EJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "417Y9kBbHLR3y82rLCFsE46Q6ACbbxRGMKFHMq6YaBcu5CpsVLxAEZWMrzKsnx25eGnAmJpiuRU6zeLzUp32pFTY",
  "key1": "5Bx6eDAjzCDQPF1MxBtSrsRBCMa3STjsTwkVthExMcyXwmmu8Tzm5AuHqUXViyyFhrR8jQdm8gKf3dtkFxijVdH7",
  "key2": "4kRZN5gXe5cnNPD2fYbupozMZweqtCLqdXdWZr5vBkG9HdZ7EoQvQatYCqiHVwTEm6ogxkfEFRVNxcWXhkQkssdc",
  "key3": "2vdHQTnqvqyK9YSaeEJtvzyQs5gcWvZUSVbg5jN6a6CB3qqSQkXaGFvmX7epkpysMLcbYhHJrDQDiWN2Cs15iNta",
  "key4": "3Yfp7a4GcaQSSWt4hrPc5Xer7B5bGqNBhBUUBTXZo5yfcBdNV6rZhHiqXmGCuAYDsApMSxojXrnPGf9E9Y8ouLGT",
  "key5": "pXuZjBXHm6ZsbLcngLSgr1fXAaCE8WW6UZXZwMaNSBGSRaHAfjAaGRUH2WeCA9gq3rgXqQ3v8Jj4HVKG5xbwR64",
  "key6": "3YhnupcR2gCgkksVfj1bycVh7k63H2DPLbwkHp1S91bvo9ks4rScukWk1R9crrs56tWpTCZKFSpJmZxrCpBUaxMf",
  "key7": "3Rt6AuVJyeARN4MqKDQJLrRjSecwhsKjQEuaeGXBRUEcMwdAk6Ke5s79fJhYrEnaLDdZXdcTymtqQ39Mexw747MM",
  "key8": "2ZbKkRgeuMXq9mjFMwA9YLTU3kPbj8iph2uxqUWiPHywuVs48JqCwpCGbGPbFTLd2ZUvq2JjevHJR1D3qip6yNro",
  "key9": "4TK5TgPZcia94rintMiPr1zPoU4rWJoiDg2Yefrs553TNruAL86uGj1PnrYdgg4EfFF48xAMwd8cbgVunHPCJbVG",
  "key10": "5kh7mCuGg9HBFXCF5VuDhihFGpi47eLK8AxFUpD5vfn7zxMN2gB2531etCAeFtayry9UCQiZSXkzNCZXV2W4eL5a",
  "key11": "5hBgDiWh1FC6c9HuPhhkk7NsYUcc8t759gVaypMmnNj1NjQa3AX7YJoSxZDMzBiB9CHB211jEnwSyQgt2k6oYkVs",
  "key12": "31JTCUvn46DHZCgBNDBfe4MQ1HnhFrmxNTriwh4NKQcqQFu1xtCfvKDssA8CN6e6K5JCtTRyiKduVHJfFdcPrmyS",
  "key13": "67AN9uBgdqmzcLbZGqnFhbw3JbR1V5dXKRiuA9pL5CE1AcKT1Gwz2i19PdiqZdSnyaNJY92RW7U5uP8ABiV96u3Y",
  "key14": "34ktLxAiUfEqJEAUXJU48WCXSjsD4kWTVV2nCSPVCoJSJEfiFZc8JY3q6NY5XJDkz1wF4kcKwuu61mnQDb93wrvc",
  "key15": "34bwxQE2kXsdRziTPSBUzdboyHhs8aqYxSHzMZcrCZrSLRcAZ3e8bzikFiuE6N42CyRkDBzFvD6TxCrqE2mrw9Bn",
  "key16": "DPK4byuZJKsrbwf4p9eSU9ut8pGvaTGTif6RHfFvekvpiK3LnLumgYh2KjmaeiEzWLw6dqKks5QB19BdQbaVW7G",
  "key17": "3rJhKg6SPZRfb8yXKNihGLY6hW3EfjXAX3zHTbjmwT88nAeK924E63fxp7nCA9PkHGZ94qnNjGymz5p8h7LGmew3",
  "key18": "4yDnEoTKUZLDnNVpGE9un1AtHC5gCBAzoeFG6DdweVpWkfMWkM5PMrxovEmjoLbFJBgu5XRNNotVFNvCqrMC4Yep",
  "key19": "5BC8Kyi8Bikk9HKiYBGmZv8xdDpmFVoUA1xQ7qrwoB1qkALhMVqQwRpaAwyTAfEkxjnVM5PyeSDuiBudhz8dboTK",
  "key20": "26rcnBkG6HG8NcjzUaPGagcwrGxdQDFzpSNeZEH5EeuacdHE6MpF6XFURKSZN7oZwKaVFH9Jj29rsaYVt8V9bCBX",
  "key21": "5uV1Jep5FZ5W1wTSXxZCBjy9xuC2Ho7qvNSSo76RS9MPoDSKK9qjFYnSzb2xjpVNSTBtKYEWZnCwk2NNCfkVWK4y",
  "key22": "4xbdtFbytRCQf5fTDv4cLcmghyzmf3CgNYFhWSquSLLhopzDhbUErt83ZUPZVP5437MGxLbaHgLApi7tY2F17H9C",
  "key23": "2ycXmJTh4N2ZAEDkNRbLUDKNR5PnpkdyKYL6BfruNqQS43sUoB3GmrbaXJr4goh2cdrFAhws5RVSEkeoS1VysHvm",
  "key24": "2236EkP2SsJCNbKS9KCdHEKg7vxLBgDmDnvPuf5zoGmRAYZtreoZ2fnXQumDCfXRTipnY4X7ZTCSHvs1saFS9fQn",
  "key25": "5yZshtLPgNe3UKMmi4gfCc3LL2hqzV5mUPoBWYQVhaaeF9nhaupL2595C2uBL36UVmZUwKc8tJrBDuHB7rYNYNS4",
  "key26": "4SL54xLBzpk5ZCGTGG5bp3nHBGeeG8fUu6iBm1Q4GswQ91rbPeP5tc5fzXCFqoJmgfw2LWC4ey7NRyHqm9xCEYHc",
  "key27": "62HhiyHXdzSEZbsgeo5Gy6r4xxunGyBRBt8RH9coKepdzxwcdTejCKMtCPcZCiVHQhqAoVRtVmjr4ny8ysqgV4tb",
  "key28": "3xGGPfArxwm5Zhmn3LueVLhaXw5yK16JS2Jf64QgCXpbR2xK1gN6oeqnJaDwkfpJS9pRAsWjcRGEPoePm2Pd1E3X",
  "key29": "5wbHXvXmWYX3g7f17Ber2Vu5EuNYTcyvTHhFypJnhZHdzwLAPYNEW2tBhihtTovfB9y8DC2fdLEYxv3vrSFvwCN4",
  "key30": "b9dyV2hcnk29irzeSRbyNx66wLd2apyUPuFAoZdpjbWLNVfE95VQgWDFU66DgHTM6WSmKCeRHQarJF7twkAKmBH",
  "key31": "4gb2LYYpobnYiAvQWmmtA9VcUVq4TnDdEkW3DpnJBhVFwe7gZeg9veAbiqnYGD9bgWFV9QVosZio5US9TUnVymK6",
  "key32": "26Br3fCCnG353eD6Uyi68qsosmeRsdMuy6FwnhwkzBCEzyXfuBFiKsAQyyUsVb81gCAhCKqj3ZSg3uFjQURn3UTv",
  "key33": "bXuo2V6CYbHZmuTJrJE6Qi9DrFtUWCLiNA1RpBFP85AGTGuko8mg5DTZXL7rYKLJFRFddT7xy3Stu8niZRpdUwk",
  "key34": "21HQSmy3xGdw2HiSVoTzN6sDLYqpCRosEvyh9B17gRXF1cdLQ5xSC1jcLAthyaJKoXqRBVAMCMsxSLpJ9wXhy6DK",
  "key35": "3qoeEBC5Lt68PfZottWwR65xnoHpruujqY7W2As7LFkmQn3z8TNHBUr97335hteWdE4jyJqjL9C87bP4QidZAL7p",
  "key36": "2iSCFfXfWqFLPyG7zfwt26isMsfdYoUi7sQZncpqgQxqRbenke4Fj8wW5pGeaeohfoZrUeH3RnWwfBatRhLZrVxx",
  "key37": "2smWEcipCyaFcbnAmRNFy7immuxUJ7RqwsbvHxXLJJx68hZ1tLqitsjWLLwcLaQS4k8SFbS9JZEs5nzEXmbj1chG",
  "key38": "5vJzJEEWyHhixyKz9VZ47PeeiuxDH5QP7s9sgh4B7Nabx7kkdtBqgxojF69rXWQZZJX69yoTdpzuNPZpkLx6srGY",
  "key39": "3mkELxvii3E9etY9u3pgwYKKmRzxvFzLU4SrqseKk3EYQAifpq5g6HKwk8Q8Q43EZ6PpYp99BqEf7yFdUZMYrVu7",
  "key40": "598zK3XtkuDbGWnSKEbVcmwC12e2HRHXUgS8EHHjPu57f6ToTxRV7isz5jUzu9uQyveuX3Mh3Xazj8eG6x96odVJ",
  "key41": "4Rtgk3o7grZ1DTBvticPQwbfkyVY6Wj2ndiDCeo8YaHfoaFR4AmUT8PDNBtwt8udzMsxgNdhDpSD2CKsAefVmGs",
  "key42": "2u5P3keJb9JyXfnWnTQ6Zb4UCqWoAU521Z9BVpL4rzLcRer1PUyFfzkQ2GVdXhbsXLWQPoqep2jcTA7Gb8qbDWiu",
  "key43": "5MY4TZXdkkdFbptFDSgoPDdwbFTY5NccRmaLvUhzWyB5WvJYNsxsiJe4iwHX8A653Hso4JE3shXKw1L13sQFZkr2",
  "key44": "4pb1ENPRPo9NVRSFuR7BcFGkxtP8MWA7s6w2jbN7Qo4eRsKquBkuB2mn8mELAGzR1ZWUMEdR4hafnPKgeAjQdxkW",
  "key45": "5maDpyXi8FeboRYwzT7bjn4aHuFVeqiPExJDmBtTWUrFKeeXsAAe8LmE9ED1EtFMowM1bkJBb8iKfkQw8xGcFDoQ",
  "key46": "3uGLwQwib4umTMFCj28mEdqzSTXY6MjKcaaaYwTFTZJSZ8cDaXiHQCwVrnfxQk9oeezwpu8i6QcRePum7mR4Fmsv",
  "key47": "2QYnPtp1Nj1zPmdkfV9tCdtnevFBVhwahNtsAMTLNrcn3frWzADa9KXCV8GeGqcowuvMHc2DmifcSWDCqNoS9CyN"
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
