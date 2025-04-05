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
    "3gEoMDzXzx6s3yeW4mjgNgXUitLNvga9BMWLdy2TkkypYerSpvSL3iJb75t7vJtzPhQbMHvgN7vy3D28wnU319Rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Us1sFyZodW4K2wao1ALHDe7yNkCWMEmYxa44dgDD3xvq2FFX9KWHM9mAa71jobaqWbA9e9Kj1te3AmvT9V9xN35",
  "key1": "2mcGL32Qdbfxja3dqrEFAcpWvfiFb4Jp7tKAeLL5K4Nb1w2ADqmkhv3NDqCb8Tejg1twb4bZKfxLvs1r62i4EMMH",
  "key2": "DgfXjvZYfa525W8WHuJRUtPKz4XVk1BdiW9gRnkF2i2czm9xvsA2nKsmm8EUEAqRom1gk7sXu9LvmAxNinVBe9r",
  "key3": "zU2UgJbQqz43R8EniGYEEfBFoM4XczjUuBuKk7fKFiHNNV4Rp86RcJKvZ5nwYDbABQsKBrs9X6aUqYCqiwDoW1T",
  "key4": "4zBrxdkibWyT9xUDXZJjLrVYfBPXgvZriGU5HnVVPcyrfVby44P2iZpwbcC34jqei1SYogzYR1zSha34onUWmJmx",
  "key5": "3negBkGdBdfKp8VzHNSMnXgaTwivMP9rRDi5nDmbA6FY3APEUucYf7q3qic5HgGCDQsgMgjjxpzSDSm6suaW7QMt",
  "key6": "wQEowj6mCkctzLLy3m7T4xgiWLw3soiFp5zoAEmfq3JRA7qVMdGptB28xVVPDxnT2FB5ZJbT9bMKQBrnaLHV2W7",
  "key7": "4Toh122VSnybmA36isQnVJxPx1gRcZ5hcKVkEVjDKAG16fZZLkn9vbW6GHu8Sg3WEJtYKwh5hDxp5NKER8gtBbNc",
  "key8": "2SmLtXFTNE4FX6S2Fru3NPU9ricoZkusyKTXHgVtoQ4dCNKCB2Ca3VLDpyktjtJsdYNoRuZaXcRatotS3tk2z6qF",
  "key9": "2hT3t6NeB2mh9eCkNfKxMXfnoCxPkk9or5kJgnebfsESBXkvWaktUZ6Kty46D6b7ywJ5ymskWtSG5mmpx1rbUcHR",
  "key10": "5XGWFGR3QZ4BXUe8KUJwEWyr9HEuPK8x4EZVGjNEfHwdPpAwFo6Ug81H2B4EVYNeJovjewVDyhZur3Q8SmY8oMNm",
  "key11": "sRZ68AqwBXg47BHP8Zo2vHuxHf9Lpdf9jF14f1ezDK6qCn9xosVjn7Q381nQGugZv6LQft2JFmUpTpetq2U69XF",
  "key12": "163MZ6eo2izSLDRxR2k5NCNhXrWRqd8uLSL2KRLrobiL5grLVa6G59mZfSYGFPpZu5eYz5uLFwWriDyjQwHmWRx",
  "key13": "2hDvrbfzUVdVJDpmRDdzRWFkhLEuEt3KTG5XHYPfp57ZBKpBTdBpLCeNxabigrzguJZPyowbyddMeBSDtNwDbrbW",
  "key14": "51hfChbWiALCRdaPaVS7CPusDzSY1rxYZFpEo11WBaaVpG9NkPAwsfh3vvxcuxANqYt1A47hEk5AWTXpAGCte96G",
  "key15": "5rRoPoFU2DRwrStBvzvb5F3SrPkSAwZv3AC7vqovgnivTDkoCQ12Q9bwsadumjtYiF7B1BBBXzDGB6TCUGxU6CG9",
  "key16": "sJn13PQMR5cZoco22JdB5Z16QMDMmJ2t7DcV5Mqn7gvaUju5sUQUJaBQRyeJHtBGXcH1mLGJhqSSWSjv28Z9D1x",
  "key17": "5z7zh1LPzeZ7DrUP7oCDmAwMky7MGebwC2G1dKfnmPx2bmU3XS7TF2WZG2jiQzAuPZFZZ8Ke2qcL7GrffaXPaU9N",
  "key18": "5w3kUv9hGnmP3x9j3Jpq6iHxeCrFjULuJnH18iCfvsjKfesvAHznN68gfGgFAvAx48XUz4LVWAQuiarTdcLeAnAL",
  "key19": "3hr94Uc2b2mW8Pa74EXvckVXMA74vD7kBHvcP9hcrifVS8FdFJBURjcKMDEHi56GuVBwAZPvU6WAYytR3eqJYN4j",
  "key20": "4XYHRKh8xr8KhTz4sHKqj7DXBwzFRdGL5yVAMqg4mK1dT1Lh8eKKxmEFYeGDvU4boqNL5wSoEagUWThfHNY8S4uM",
  "key21": "26BexJhexeqwgD2LhnTtY7G1zHowngsnUGL4HgRXJF5SHAYtCkTZLYgfHL4mh7NVmMZJcNA3YxpAm6jJwVPhHwC1",
  "key22": "4Bsz53Vm5DjM8MePMckbcDGhijkR9vbSc8ZWSngJYmsYLjL2otV6cE6LMCqGZQEQj3ScAB4vnd9w5GPyT1NmNVQz",
  "key23": "3JQ85WSxQ4gQMsvvnZDuwJSK154jxd91t9YpQREarKXe4ufdHXjY5dytijG8Go2nHE4BSw4QwWzMt2N42cEviAJ1",
  "key24": "3YzNv1x1qBL8YTpsbiPVJ5GJ6dhF7LSm2MkCgBB8g3BXYa6YnELaMCpXCeg1iCcCc9d5E6PfN4v2ENtAqNprWCb8",
  "key25": "2Qk2iHbfGHJiZ8kb9LAo6uFzVwnhGE4P8c51MXj3VUYJo722xRpi6se512bsumJ72iG8BNdadsX3K1ugV1v1Bgc2",
  "key26": "3sHK2PZCK6xUKWKt1H7xypiRgZG4UjE7perRg4VH7XbvCPDXyUH1mdCvL3rkm5DkwS94SNZjypjhioKTvRpQ4DU3",
  "key27": "3kBYQ9f2G8zBirQqognKphz1EUCCKBQ6UKoj2SE22u4VWnufz8qYruMXghXLtG5eJtYt3Jjkaty8ySpxyxuyDDyQ",
  "key28": "4brfFSTYywmEkVkgxuxQP3ZEi6PaBgR3tJ6YfaKNKeauLA8HTu47HJkycaxSd3tyur17PVE16hUvZCG4vdhwEJGQ",
  "key29": "e8Wvz5SbA4tzuz1ffkJn1uUFaypS3k7pxr6R8VgdRxJDP6TzUoSh4Yd6zgiupgRYz2YWDdKgAqHR1ThcUGhCir6",
  "key30": "2SkbBd7DanpvVCDWTGibyZT1saSefY9HYxivsdcNxdKcmdfk3CRV18zPDAjESLMZHav7fvDqEr8oKp1nwrH7ZrjY"
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
