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
    "3Y2M23zF6FeHq8MmBv4TAoaG792BgEZaYic3pj3omwoory2kiVsuz72hKV6TEsXHGcNWJmUNAEw9bi1dTmiknL7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjcZPjXAahi7pQot6QMLeBJvGQSDbB55aD5xScbym41kPwPRwCUxnJqPrxfMVwBcXNBKhvb2JQsdsGpXS56tdUR",
  "key1": "3DVLe5RoaXA5au9vhGga8EeeySjS2H8xkcAVK1gfg9CHBfgeNaQ6ZB8HpLwPi4ELAaaCWn22WTtTsRTUKhduwYSH",
  "key2": "5MghAbqvdKdkUuGnUGnmz2fgwS73b8fVF3aWsNGLvJsna6R79iMJkdR8cz9ndyMioi9TUu4ToQUsS6Vj2JhFAB75",
  "key3": "5AJsJKv9KCSLPRYAciTuv2hmNQ8quj9Fuiah3XBGhonTwe2yUePNxgPGbxL2TPR1CMawgwwFcDQWq2iTAwYCiGtz",
  "key4": "4LFT2QjMDMZCwoPSX4Ry4UxZUomBnHUDWhBRgETZgjrPeLXoThEDjxgozeRU6NVUmMp3q1R6mAhkskBWNeEY6iAA",
  "key5": "2EdY3vtZcbqSWhKBVb1trxWbx5jD8CiECNH1KwtRVNUf9jPjqprquJPyo4qkqPZbXpf7t9kiAaG4Ke7dC8SS7Ayd",
  "key6": "2fZW6NCNVQiBcpfPxGjbohW9pV8H3iiPQ72dqYD5a2YkdBV7WDnKfVF4fujebsfmQtNL2yYngyebfQfLLeKKfySq",
  "key7": "aY2zygTe8xSDVvWbaVRwX1NbbnyMHT9q8va6YjRgpojcDJhv9fHVgNLNNhigqfcmCRTEcx8mwNRQ5A51g2KxQWu",
  "key8": "62U4Z9ECNir9LVQvGSPVTwXkyfVRoBaDfdfBjCqG2T34GAuZb7CPERotuibrz6p9ZQ9ETmcBBjnovWpMFj3CFCVd",
  "key9": "4VLT4vg7MvS1KLRNFfWMi9ySNdTRedvHEevrPWzTEauJtvELe8xLnzkExMKXZbqPmFdXBzwNXa87WGd9bTj6bASn",
  "key10": "3Ub2iEdXSGnRmykusi4YzXyNz45iUtZ2rJWSGVUUDUC2VSc84ToeMiXTjKrSuhXLsQin9cXx4egxa1F4k69CosKv",
  "key11": "jSa7gepwGrCMBcGPSt3AXJ7FEeebskBNxvmvKXz1Sgi4dEoa4Lwo7CGMvRA4p1EKjDECVdBsfyRXjugDVhsD4hR",
  "key12": "4dkdovvi2QWXNLA5xLoB5N7wo2CGeL9mSKB2HDN8zT5FAwAb8mRkjNQWYhNtjZDVRasghSVWqc8B6wcTqdffEzD1",
  "key13": "5XkUaPk9uC4GTQx4t594otwyFbie6jsqKFecjyKokfAb5LnTzsJ24oZsP9fUtFW1vuNvYupaZXAK5e1caQuc883P",
  "key14": "4kikdpWKjYQ7ZVAWRMpUuCxksvZMqR47epo4m3rDUsNbSPMc9i9SMrHiW2jfm6UweAqcUkyctj8j4NZEvwVu3iHD",
  "key15": "2gcNnwgxWpi9rktAikXEif4zyN3sHBgzxBeakaXerY4K5Pn6Wa3EDuZ5hSwy7564WkSMRR1UBz7KVGaxaTWeAys8",
  "key16": "KwWhXuKS6niirQ2tvvwdNfXN9EqyKT2gpEW5ptWMBmYyjqfWJEXyR4Bo2nv6yr4sVZtwWJQhUUdGtfG9CqBLpoT",
  "key17": "3BwN3aJzhuKmctacGAiaY9zQMJqtGcboxcq3L3CGGN1vpwwcSSJqLZmRzHwdWu6VLMcNhhHKL7K9f9e6Lc2Af46J",
  "key18": "zZs1bQseeA4L7dz8dJtMCQNqRjrvSA68qqwmibF8eftAZ39FpFjPiQC48s2Au8ERHbE5gtgthRqKUpecTNUrZo3",
  "key19": "3gTz4WAN8amgB6vF3eBMuhDVsHZdXgkvhfFyvBkt183p8dXhSb5zKGw1W4S53fDJYLYB2YcDjpPXRNbiFwLvNBsK",
  "key20": "4Q5zfBCPHPKcug9r7NSDuUJGBLmXdnWBQEd18obJybszXT1v9Shiprxicaq6uFSLc3CCbPs3z7JbfSMDSznr3k5p",
  "key21": "2V1rk5qHJW1qGcJ3t4F6ZEYNsEHuJoimDEBrUC8d7cjwnoVCmnmkDtLcY1Jwea319XbtP4m56YqVv6Z2REmzMYVx",
  "key22": "49PzovMi5mCfpHFqMCWqNnsnJWZ31tMvEZ7LKDuYHoWSXA1ogo2D1fDgrYjpVj1uwEGRu1EdMJ4nwLR5DRCNQ4Wr",
  "key23": "4ULxD8LTykbEgvYhKmd52Txcqj7xBHBqtaAxFwLivRDvWFXP5CnT7k5eFYASdPSY2cEAUn3vZntDJ7weknLneW1X",
  "key24": "Dr6Mu94dCUs6BkURyvVLBSjvwxtyfpbduuPU2S23hzpMvcoHVg84DL3UTJL6m6FFwunt11vi7BjaW7vEqMB62JQ",
  "key25": "3ZpaFrvCQReHeXGASjWLnRMpcwBMuFJkh9yCr3Zmhpx2cwwRBFowYz6tMVj7L6eQuh963wK2Uc1v3rcEV3PnY4uL",
  "key26": "3QmStBMJGwFoSuzGhk74Mmz46ehA5ygZF17Ha1iyix48jiaDVMSgqUxyLZbEmHfxYoDmpqHz63xKAZhWjbVV6bfS",
  "key27": "4C5qKvyZqiZyFQsxjpVm56yp52WMuwTD55tboP5sa5rD7tFUkSRkFf83FdMS6jXG8rBKnkvVX5VgTr2wqYxBtH4s",
  "key28": "3QRzq8BdZxog1bt2Dufs8pQ8WGoSQ9NSdMhjpmmH1W8ppywRfKJ3LP1Rb7Voa8rgNx7S4s2vq4mxQpsatjg4YpHW",
  "key29": "4gSfGWn8DQ62QzABekkagACWDeewwyzP4gfbUohoA1eyCQ1roTMAW1Poiyn5cvr7QoHF3EbJVS1FZ61W53RHWWa4",
  "key30": "5EXZw4JF6hss12SHoGY8BSgFJtE4yxnHrgLixKW273qJa1AZuH7LaDjxyk6FAmhqK4S9hpPPzF8LH3LYpgpfceU1",
  "key31": "ykuhwMCPRYNm9iWEAHQGFrfBWMSSiUctJzSNCesUvMK56ZHa8xgaovorFU1ne5GAfu12quYaKdWkknM8J13V6xG",
  "key32": "3K4Uujre7gpid47vpaFTyDvYvHaXpmqaj1ncBgxD5mgVqTAHkrey5g7UyyCZzr3UrJzvyR4HTLJig8739G4aNQZj",
  "key33": "2WB3V2SrgLi6KwbFrCfsF2A8jB8FGeaYYXxNAVZU7qu1gWbkKjuaWL2n6ALQUf8qfz5aTBumGfca29Sr97NCC5xo",
  "key34": "4Cw992R5VfrvpMedPYBHT1cgsHrDVKKVNhYkdbb11Awdw1rGerGevbusHDpw7J2f2VHNhYN6ptJZ2BrXQcSuvxAE"
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
