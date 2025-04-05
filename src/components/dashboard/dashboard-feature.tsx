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
    "Ve4hak16TkLhRC9tKrb58oAEiMLASqy5mZgvCDM2oc1dUVQx8ZVWVdfnREguKcybdBAkA1irYHcnvFbK77erf2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yNWxg6z5GcX5Q4CV3ucPoB375LU8UnyMG5K6FkGgwCvMhGNYGmpb2vVhx3ih4a9RnW7Mu3pD7AP7kRosCqWkFsJ",
  "key1": "66gNaci4Btf9e7fsQUnwpwfo6fmnEd1jVmHaS9cKTdwn3r2qHRMuVDHPip656iPRtmFfBDBnf8VUnqJR7KWFqni3",
  "key2": "4knRj9CNGviChSVc6t41q7axvJG7rffwV2jDwpVhneSrU1hRNz9UqzmHzn2KQZjhkPVa9R9LKCZn1MxHDPJE9rJD",
  "key3": "2KXKw5JrfuovdqB4oS1wt3xweeYFbyU4nQuf3jMV8HQZGrp4pB2KeZ7FYi8K2sHCG7tVPsFmSKD25YPeL3owd5fQ",
  "key4": "4UyHLV4uVDLzZamdf7hnYPtRYfwppoyA4VDT7e5uhdBvQ5MhvNovjX5ywkPpyGzpAfA84zQcMgE1hHnepYMip9cm",
  "key5": "21JaMms5WSTLcyCr1fdeQMM4h1T5du4DJjT49ZAnigPF7dgpjaQvxfnGrjFtWLcdUoVuVBfh1c2jJrmytAizJ6uU",
  "key6": "5i6Fcy911pExbY7yF9gRAKguWYAS9wEdKE1mEPrKmvvpgwhi8aArBobSECfHDrxphyKyJtperuGHuksAkj6eJcm9",
  "key7": "33xzYT6sxy8A2NEwKc4Mh9owVtk9donz6Ro4kd5S5L4Ut1j7QtAYVTZqMEMH4mtbH32LjaZKwoyB5kKshk5kF1hZ",
  "key8": "3mu8mkMdJAz5HRaqbBoxBnhdRrA34bYL7JBvEpKNWGx5XeALwfnk8tcALUKSfbLYQArNahXvz9xV52upuHZfPTzT",
  "key9": "1dTurRG68ZnTapq4bAPTzs33Pf7aukPQtBYPAPYt1FEotJh6iftABTAgAnAsBjPvZS36mJXnCBBAsLj6DA6Mzxp",
  "key10": "3mH5QCQGchKS2biC8pye8XpGuKgu7ndSA175YT4ykJ7nNL4XgGKytNpkiXbhM5TBXn8KpnEuTQmH45SAYz4G59pp",
  "key11": "4BwN52bsqukGQJpbjMNttYAEsAXKcekP4Mjb6R7TLDcyyaXMTFgZNsHBPDYH8ouDs8Hz2mLYYWF8Ek4ZXPuLshYW",
  "key12": "RdXXv7HSyJa4WSSULq8jNtooxshCLozMxEXhf1JCfabUDgcZSDKfqeAr8XeRcuUwPxbxy4YrL7ooYPpotaibBFK",
  "key13": "44zcF5iYzs3mEHjWtfBzGy9sj4XdbsfddvzDKWyTdMTmiDKhgEwWTL3g7LBiDhMSBRLrwWqTkgbWJooYSJzQCfke",
  "key14": "2T2E9PjYTbR4quEthrtDc5nvvY5d3P4DL3N6uCF45k2XHS1rqDUspZbLCeKKsMHKdU3dq41tFiZLo4jGssFGrpSN",
  "key15": "3RA2ZjrgjEjEET3KLaearJuhzpagivHu1TDSsVaU98NnugaUq1JLLouVhNhc84wbKgeGwevFCx9d7hX8BK74ChwJ",
  "key16": "4fYxjzRgchuj1sFjvvNKbekmSvkBNFDBuY5bKUDLcHHuowE9PEP9BSci8nnhUfoQVw3ff4QwuPTeuUnf91LLG3FZ",
  "key17": "53y4FpNuDSvq4DmTRUx2E6xbPPCeYVyG6ZF3xKbUup9Qq6TyofyFpfYj3macxCbwdHJz3QUrABzb3MskpBk2Fv41",
  "key18": "2Qzd85QuKjJyXdigkxquPxA1okfQFxS7oRYa1JicLKver7C2i4imXKTttW3EE5B6hRsmxg33GrvZ7dNX7skNGSjt",
  "key19": "3nhT4TtUWhepi6KDrggJ36pg4HJyFf3ejCZxoCZcEBihq36zQQDgGgBt1buQSdV8rdvYtLArY4h8kZ4TubjhwaL7",
  "key20": "455kmzPyfYCqhD4Qde1Av7dndUMBrEcezA8iJbG8zVA82UmA3etPYmshYaiHdnd6LJz3wNnbhydAohMT1Z88A5UD",
  "key21": "2dhTmkVUNxp3s8pGvhkCQwpSFTZBQ4HsuQhTqRgJp9wX7GwohFfM2tSuuEVit2b8RjxQz6gzVH4R4PcbYivtSn9H",
  "key22": "GWUDqznyQPRVmMDrPHCX1SVb8akXpP3HXZ3VPduywTLVTXxKJAM4YjYVhxMEf1ryrJMjb6961sNnEHZWnMVmDKe",
  "key23": "yTqrJwdvjYa7nKAk56pEYBtaZCMWwqwWFbnnKaaRoHUYnjxAPB8iGFZTTCdHptGFzGgCHg8Pm22UrCjQAHfeLSg",
  "key24": "4Vy5CagSNVf9BnSNutCLQKVb8hTuDeZUVpuZZXEPoQgU2KhXYgX6tDvKcsHNgqFxajP1gFH1gShMdeHJNBdMxxVW",
  "key25": "4jcLtDV9QqDCYcrRG9U13y3ygsZPvJTCPtVgDLA7uXDiis21LMwyk3d3eZGtKYEA1KcpKZiM1NEa9emx9Mz7nQwf",
  "key26": "3gcZXkQbux25jwVtENuRtxBk1KnUCabemTvcHzan9nTuS9MMP8pLgywYHo35f8CzVfVZV3swGhvKRyqmjQaWNFD",
  "key27": "H8qS8sCG4sviXhNJ8fxNVFvAJxE3pauJ4UgKQenRCBqhuLQbGbE77m8ySoQAnRLELjVWNo1VVDGdapMNGrRy8CC",
  "key28": "22G7J1EBc2TzcTVoWNmSJ9jr3AUNFk2bFaY63iHqgNCUQnqQzBX8NYERqKTAACE47s5g8C8rFSntvPpVK8QAz1VT",
  "key29": "2WxcfotkhsvzGYsWLjTz86kR1MPCyZVRxGdcsrsgZbTNbbmsMjSbqM6uVvCTNprWVCzDfkhujoQEZGhEVEqdHJaa",
  "key30": "3DZc5XnZSzFDoXNdWtKDbjNNwv5Hh3d4PY8TDraYj53tfQU2yGHkCqRjLdRkhcGxYXQ23Yxr57KPvvZB1kiTNeCa",
  "key31": "4SmYoELkXMRWLo1PGiRp3eNw1TxMc2proYoUjNeQSpG5o26now25iJEQMSdgRsstRvaA3Gi2CSK1ok72mzd9Ygww",
  "key32": "5eG3AmECTDzFCDxdR4cNiqYfFiHeog3u8mvZgtMPkA5rPv6gW1Gbi5PqtHcYf9AjuQ3SY9NzLytBDVSvkrXM4Muz",
  "key33": "241EwdvwuNxGHLoovvmgBTv7Wwb9ZBX1aMW32yTqxKto5GdPxaffvkuU1evqG4dC7S5UefBGgcd39ENZV8bdPYDT",
  "key34": "45G26rGMpFYMNzdrL8EbCaXcUG3ueTsAghW18vcRAwGUPY4rboVZ7mpSV2VJWnsznc3JSbjBL2N8VwzJSbXQVxyr",
  "key35": "u7VYkm62M2mYgb43HyXzCv1mQBWDvyiPhvvg3HoAvhMrSJkERYCCH1p8VEZF7YKUvdGz4aQcofqbdKDNwMSg4aH",
  "key36": "ZdzwgEvFs56TZ3s51zq3gq6jCXV2sTSb2SvSna2j4h3n9mZ1AnNceuCKe6z2AtMbBy3178ZhkrddEbUqZe81mms",
  "key37": "3HQccLRyvTKgXHqkwyRUpnNFQzTmLcnV3eQ9uvC87N9TNPqMFuCqsvQdbjYGno8gMtMSEQXrKsqat9c2b8ncRJZu",
  "key38": "22K58yey6KvATY84jjY4mPg63EGjy3gGXJAhvThVS2cSqmEScQ4qVaZ5vL9fmXEXPfZumdvMKgYGP4UJ9b68bsPT",
  "key39": "2ojs8j2JZyG2zNQLMvNsGEmY7Sk5nyLPVdq3UAVyK8GxiP7MQFgZhs9D58PmcJ7qm6Jqu96DDt3GKdSyvXj4Zq2W",
  "key40": "2DNzxDdVr53nh2JCk2F78Y1vATmRHtx7xz7jTiMfEHiQ5t4XyfbNT2k4CUiGCT1gu2ehseHhPahMYaEKiK44qhR2"
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
