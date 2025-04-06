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
    "3dgQXNif4bBMHxHo8GK4sx2Kt2C8AgtUndjBKzPoiJAkz78EvqKBEqkU59RGzcbZLMP7sLgvgnYEGfHjs7836cMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52RVH8TqGXwqgJpj1WLhiFb8WmXrMCtewA5ZoVTHDoZ2UFnMhcP6WbwrQaiq58WEQFQNQKnBsddexzieRjULZJvH",
  "key1": "JmYxJ6sKeBWEtbFPaHUAzNG2MrLNWeDh1h5yKVi9BJQfomuXpcVoRyvf3XrvC6LqFMMXk5nVD1xNNfTe6nPEL53",
  "key2": "5v4MB5i3tTAVz7EK1PmZtJ8UB2exearzaoJfC1Yi3sjG339W9pzmFXDZjQiFgXf9XPQGD5a8LKzDPvzp7DWmNrGy",
  "key3": "5KhzyGwHLTnbxc8fgzVo33L86zPzLhDLHABeZrSXjzJwfP1Mp98Z5PMM8ggz9fb3MAG7YJYm2sL3D5WMQenUyvX5",
  "key4": "dGrmdxmeahBa2CSpUUdr4rTN3B6vHPdjBsQcC3sYs6mBD8fQJ3WwJf5KWufQ6XW2zt2dFGUP8fF9zzwdTk39mjr",
  "key5": "3wfDPajEuJwJ8krEG94SoW5maf5wQmJSoRNwDRG2MvAAqjU2WXe1GsbYbYZFRKN3PWnmfe2BtiHXxohhpdAeJo8s",
  "key6": "4HwSpNyPBhZRxwfoPQ6Ww1Pg1Ex9yAgnUjuq7fresBAqdnsPRZZuPa2KQ8ev9mFJdervFd9TARXkJZrbYHBsoVKQ",
  "key7": "2ASFnk8EiuGgrjsCiBrzHWfY13EoCd4RAbM28yRyKSyRFk2Yf27FfskFGDSvMdRzL7W9Au7FdwPZDdafLMabpwAY",
  "key8": "635vd1XMCncMuQq29n4DoCd5vG18PygQmKi96tRg8rZPiRy3Egpwb3AhqcPhyzeZ86mwCEJ9kqLvXhy8t5iq5udb",
  "key9": "Bn8LtH9UgmKh4yKgkpam6bagaYB5HEmTQQVT3gdLSGoWubjfy8Ldcir83A1NjFsbqxLBugXZDYgNQrE9PuGVKiQ",
  "key10": "672KiyuyNFrducH3VU1SiGstuCFBzte7qQYtoTymfMjsgcuq1op3xrVC3A4AWQfMY1TSxSjSN2coqiEVLpaXuVoS",
  "key11": "2psvP3J8B7ih2DenAmPBxAdbRosXXNF1NkgjQt9tsHyK2HeNBXoLZibdGoSgBXznMZNMDn9h1JiKX63P5roLV2ek",
  "key12": "akxEUZYBuyLvKj7iqPTaCPFZoLYMEBNnk4GeJw9d6M6YXS7RpdhB5NTX233nBgr3p5A7m5KDgsTYzkaFbGgVadC",
  "key13": "26r3byg4s7oKPgntWuHfPtjvbQVpR4WWVsQFKRfaexw5CcNeUzHEtSBe1DKAUrP1Y6xw3BxtJMjAw4zNN3BfxgCc",
  "key14": "2RvKWpnKhWyqxw2WUpmqdeeuDLboqM6oX9PBpE9W7VymQnj8B32TapTEs6o2deagArqsjTW9zj7d5XKpaUvUoiox",
  "key15": "2PcXhm1cLUUDCNm479A6qx5AmuQZgPg2CViD15hXGS6P2sBp3bxED4P9bp3HceEuSyDC4QJy9TLcTzF7ZB1RBVrW",
  "key16": "4KVeqZqu7YnjDwyzZkgWX9yLh5Pq9ume16c3digX6CG7oZ8BPq5sBxMoimDNxHzpqXp1aGwvmqFaBhZY7dsmQa16",
  "key17": "2NDXzeMuW58wkdnD1MywbkvWWtCAtUPv3stkoWfFVz7AiwLRK9gBTiqnuHv4Nqn2rQvWFG4s8nnLixS9BvHMbSkQ",
  "key18": "3ydzcadkPFaYTbwefR2jBHLbdJVUJyZu8CD8HkrWWFwP6SMNepG1erUkRn6Di9XvY1o1tsBtCB3gRNuxCSnkm4Dq",
  "key19": "2su1AsbDU7JuszkYRAviwnY4L1YFW7uy6B21BK3kKA1Pa3gko6XYF9htTzZSWFmZ44ECL9x5HrD9o6ztaTt5LG2X",
  "key20": "3vVjXJnhs4ySQPo8hVvfoBWs8iBQTRc1ktPZkATS5UwiJyqySBQF2o1rEobdHhxCXvUs9ZLRZERGjP2tu6h65g4y",
  "key21": "4tbPBfUQS4cfaAujwRTXnbFopZBT44xeR4yQGoEwE6YCtecZHLdde9UgLDqqwHbQsUwSWoF9LwwdQHNG4ftVfc5F",
  "key22": "4a8pF5FwGw6nKBV1QJFBgP4WiAMvw3PBpe229gVv1AgLcm3uskowhYLmHNwwkxmCXhsTu5uQ1kjbdSqRpGnUwmmT",
  "key23": "2J5ijHZaKNn52rhGPam6cGPPkpvyFkyZUBBghPTRBaUS8BRAagTe4gELMTdemXBLHc9KsxJwvsmJnv3NpSVDSCJF",
  "key24": "5koc4AN1FmRq8Cw8hkRi6m662MDJuSZ4w4LjFnNAeq4wA9QmWTSnbiMnZWy3ZSMHDpnHvQzYFtiFRLUEXdwoGMNu",
  "key25": "MJJKwamRdcJux4bJoeB2ny8jphCFy9YFBrrFB9abLciDcbkH7YkjHTkSYEUzVcjDNRDdxn4c1VhJTdUZTLcYfgf",
  "key26": "2b2pkRCSVHzKkgYKrdPSEHJyBaRsbQteZoUsf41aqsvKCiU2Hqx458goM181Fd1eRhaEAvutgZuNugo5dqttESxb",
  "key27": "5sznZ6Uv26pPWrPDaBqnrJGUgqAa9w87ZpbqVnZuZHyQPENBxyYVbyZRMCn5LT81qfyvTdwdTicf2Jh1YwszHyd1",
  "key28": "4nsmAoEoYvCyxBCwAZvWBFswssQvTdTbc7jWoR62Z87AsN7F2bEPxPrhqagcjQyQeyLyAKf5hNxYaKYWbT7HG85n",
  "key29": "4ScxTq8hiPmayGMxstzW1TumtZYHe4Uaam6euBoWQvYj4V73TpHk1ATyNbZqmzteDU8KJcPMwyLkmqseyK4m6Qge",
  "key30": "3ufsMYzUZV1x9G5DmF1FB3Z7YMtQWU3MSmErcxoHKWLe7rDDJsn3ySpHgYSKELpndQ6HMdan2mRAettxGuvUJAqf",
  "key31": "5jM3yQZHPf7DeDmZsCPwYrCkqNeAa6jQJoUTLt4zvL7WjWK27Yz7cGNNvpuQWzDHuCRSRs9aVs1FqhdE51Rx2DQE",
  "key32": "XakiCQhdVjy28eLDix9UAbi4U7MGSHUYT1KQLrD4KugxE99NQkfPUj8nHumDf7yQoWRUv2ZWNKgyHc9h1UdYNrg",
  "key33": "22D21JW5F1Qbf25hXpb7M71yJ8sCLYx4v5v9VBJ7Vpp4uEyEchogSyiRXSyS2ofJALv2AByCkNJfMyeA9qhjsWXu",
  "key34": "5YxZTLbEMSY1GN7WD41zJyiMvV1Xs9EYnXHixXxy5GCoqu7SDLhzx6wqTzUTpRFkwvP3dTu3yTR6fAr8uwee7Bi3",
  "key35": "4xHN2siBVSR5yqTERgcnUsntRLGv7pJTc9mChNnLRrWZguju8H3bPHf6SnHp1aH8dreuvizfaopXRNfQqr21STLt",
  "key36": "3MStR2hYWEs8AUJ6JLjmnRUpQFpv3PpfVFTFKsiKc4nuZt9hHiQ3Xf329Yu4wyJkYt8oP7ktufYJVddDki6m9nuC"
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
