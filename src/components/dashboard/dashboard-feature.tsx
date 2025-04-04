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
    "5w2S73LUvDdKiNFyNJrMm3UzLNVHQhY4YJQ4Cn7hNiXKnbm4j17WPqHRZXBucVmLEK8HFg5aZ2oypetc2CbEDqrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A3YBNHApzz1jHpz5MxphEqdRuH1JZBRdFGrhSJc1bFCMwzAyjXUFNbviMK6KrbftL1fmK5MC185FMwV5U2V93n9",
  "key1": "45qzeY3PRoorNqCLR3D98KFzha7T4prj9bHyJU9EVqSJCYJXoybfwFW5HHRq7Bwd1H3bSBM81vCVDbYY85yiBLci",
  "key2": "3Sr145a2BCdMrPh3uokHVMWbqFZsPv2SnEBA6vbwAgHPhThCH8SPff7zLGFaaqy27Vjmqz6qRTwUkbjW5MT2XLyh",
  "key3": "nzKkZMm8ij2nSketMn9D69sn3kvv53fmsqCNjGMwskSWqfkvDXSodFCQoMwv8dyHcukxzUMwjDL5ods238pqCJ2",
  "key4": "3fy5RrEgV9azNfnoUbPP83gy5iT4tn5aptjjVeWKzNrHpp5LMLpWActq1Yk48uNPx59pmgQjhvR6Q9DSwUCuQ975",
  "key5": "2TYtbNKayk7bx4WxydaMKL9aw3g5PpxMU8eCpDv9WY39hPcmoE1jxUvBEhc3hf7zHKtnDBQBMFqi6sKG1UeeWR6S",
  "key6": "3yTV1HYh4fGQGw6oPezKiRpTnYDeJT6i54H8DxjqZd5uswhsyYdcQYAbKPp3p5kGZRWixMShKEQVHfeBrr6ZJePC",
  "key7": "2u72EE4oNEYMjmwD5EPwSkN4qm9Uw3CHGcVTHEebSpihuLk9SedgsG817LXabVSDmy7oDXKAoDrQhvzcALFN7QkL",
  "key8": "3Ze1uYY1ZPaRwCo4z6JesBHqDc3wkvLKEQzmQ3KcBSai7XhGJMxWcsjrztRZAgAALb5amYFyc1mt5RX6KWuW3Rvg",
  "key9": "4mHYn5d2oYuoFGmfk9WxaQAb1v5Netzybq3Q2pgPRUaVknC9n16ytHZUSinHB6AjqgyDnAQEqfNJuLGzsH9vcHd3",
  "key10": "a2VKSJ6M8NkREty5a6ADnJvmA69V13HzpczwP2rhDcWEHT8Gn1py7EPEYvwsEoWjM67g9iioC1RRKZhYbPAqxwP",
  "key11": "3vzWK5vxjs4kitD6B8ZvNfxA8EYF1KHN9BFDBVnQSSp6vUCcCCqqcmRaN9RYHzWV4u6yh34fRAXMgpQgswMNpm7S",
  "key12": "3PTHox51XsxzBE9RGeccNnXNos9DB4YgK3xHmsdjBXiw6aTnRLaAkBLPzgMhjPZXxsChUgpyUipENeaFCdUFMdhh",
  "key13": "5rk65Ro7wmye7UJdba5GULFBdYrPmZi986WHP6A7EYwyBB2djgEHwSqpEiedDA7W7X2YXxKa1576ZbXN135ggYSV",
  "key14": "44Gb9DJuCB4SUXuWDGHuUEgDSH3PuJetXCBLky6Z6LF5kzG3a4BMBSvDCBaEyTHESQ5sMomy35sqG5FvjrhdsYhJ",
  "key15": "4yyr1yv2EK8YPy1HwfLpzEKVw9LTTtKhYf3Aez69oUKYkQszJk53LQVp6TnJVi8kw34Nq6d7hvEMKX9yLN6gzQbt",
  "key16": "3HGpMB1rqbmma3coJCjMLAAZFtBxqMEuJhu5Sxc1WT5m89XysNw53kbSw14N87yzKgTBZ7s2vQqeFByPbYk71HyK",
  "key17": "2FUWTLi3rdBjdHBxEq9JEjogi9unTamXBC73QJsMPTz63T8wGnnTQv8268hC3dGD8RQyJ2p2nDBc26cpj3p1oL1H",
  "key18": "3zZE18h7dSzgtWRgNcR4muQGH3JRTCmpUJHZETKWW6odudhJQnk3pAZrD1XkXZZUiYFSfxg7pFxPsCf7PguzcB88",
  "key19": "4Yrjws5bzfpnjx26HkhXDvEZLAUJVF9SEJH9dnPiEUDARDA4gpx5uCTAisC1QQAZ3ekyHn9Y8bcuURXvFikPw8oZ",
  "key20": "4Y6rx429Y7WRxHH4qrnWrZ4ExoJePoevyMqejLzj3yVSi7MPiM6W8mrfuXb6U3k2emPh2yr578gVpi3jEAXQDHrQ",
  "key21": "49amuLYK8VyrwEdzupYZ9NURzzMaDUd3r7qNxCDgjg6Z8SRfgqa2hzwYvMdmAY8Vd4kj5RknZPpkoLexoc12U7xx",
  "key22": "3pZdnPekdYQYv6s3JAza33VUwSTEH7zcjxzAMdym2EVrSpr5DaVfp9C3fZZrF2YrLSgvAraBkP5ZxBi9Ps9TvUK1",
  "key23": "2pY9HbWcFn96cT32XT5TApP5AsXhA3h9FsfAuwyK2nbZfeHYUy8fXLuoUW5vMzT9qgVyYXU84X6ZbXAfp3xyQP7t",
  "key24": "3HS8Cuw5hQm9shV9cUpFDnCmQ6J9Hnb6fY3rhDm3SCufbsAQ58SRiXP3K7foYrNnSBR8CAdP7HbiUxPwxwFyDLXd",
  "key25": "2dAxup1bqiGySjVmwhpZ2RiSLCtxNdNDfGYpaAvpnfXp3buLpxoNgwinn1hXJPJZVKMnNGaCxW2Gp21jAmRxD1hZ",
  "key26": "3Cv2f1mpnxpUNXtgF6ZBhFuWTSQjckhzG7gLhyACHjjnFDgCfohNN6v7b3kMuHihDibeaLQPKRMghv5pyiDED97a",
  "key27": "5RBaH5hWtkHGqhaEf8bPgu7tzEC4NT2Qdh3baCmdXVEHB1op7h4gPhxcEGpZmGXQDfMJEcGH8SkhY9ewkuAbSiXk",
  "key28": "21MGLBGxGn5mmBrDXSgLBn1F8oXg1VwzWWSNmYXt63HgJLVQdhtWHd1pamy5kZg2gc7SEMFtjS6zNbH6HykEqV1r",
  "key29": "2hHKP1nDPxAX7Ltt2sdLCaECeDZSEhNxKtisSpHX7AQLJD4x1En635qoaSczxHZJUvmdneEQHDBBGGDe5KdxgDu9",
  "key30": "36i2WU7tURrQMF51iXPwXbNfr996yV2Xh5KKrKkFsKNkFaGCo87FktNsPRqwwgXKL1AqDBhsvoPCyQCb7N2vpmmE",
  "key31": "43m83iiMBRUurFdUzcoY2gjNrhD66ZNRRH3JJoXrJpvQanXz6mnzbiUDbdik7iP81FHUHtGhKTz3T9Gxwdki6JPt",
  "key32": "39unzTBmzMy8xq4K8y6QtBzYYio5VvCRWybVfmZj4y8btTBEXYq6TcDYKkL4ZpPaCjGmzGMhWhmP5SYgRACTwNyY",
  "key33": "2LoA6G2QgtjeMkXrLHBWXT6uktTwnGhLEZXTxeKpxZgM1rkYD98KFTPb3Zt3Qtv3h2R2NqWJQVWyrYbhJJN9JKGo",
  "key34": "PkWWxJd1x977XqAZot1FS6FDXH4UvAs7f3Mrn9hLbMUwa6Snd8GXXNiMJ8F6uhnEPv9V59i7hgxYCE4fdcQBoNv"
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
