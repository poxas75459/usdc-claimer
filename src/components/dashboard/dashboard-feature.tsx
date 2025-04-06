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
    "3AC2aBBeMviGXRaxnVErzzc9GUKMmx8fnTcx6tya4XDMo3d6u4Z9qtL4jJqMnvGyA5uv8KPAHDAknpY18PyxabeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nPQEL1jqi3N4ch1gQcYMHqRNJdhPRedMYpdkkjTYLiKKzrxTFGTYJgxhifvZdzBQ116KAtV1zj9bdpLr6ap5upr",
  "key1": "5wgx6AKsYQZiB1Xsys39pWXZnpxWgCGLe71BhcE8r9w5NpqhitTM9qQqWQEaE2YHu9nuGYr3e16R3RandZ52tgF8",
  "key2": "hUsPBdoX7m2EhM5UQfMbwiiLBwBGRYtyD8dYnyrW25xj1fAfe6THRtFpi77Ct2o7LxgCUgRcmJ89aACjXA12Qhk",
  "key3": "ynvc6WERcoBHumjfmQhUfFn4T7f7WGYnmCyzQTmJiYtdGhFtiZbrbQEQfMUnGmLdfHBkiT3x8wo6Cj9Nq2M2vjJ",
  "key4": "5TK2yZfghE5czGbP5S9H2rrbD7db2PcgRAKUoVqiiPrwyXra4wGtAd8XrE58XbXF23XyGtz939FMdZWSk5venSVR",
  "key5": "2UTBkJwvYXcRMYDUJTXf9xajxHQ1EBTs5jZQDAbA27bGvwLSkhyUsdN2tQZJjBcTbu49nXLyh4HJyYHCjaimds6j",
  "key6": "2e8Rqn2C1cx7m9MxYoJ3daMfVaDMP7AGxnA9tJDCs1EJYGZyzWcxJFTSQiaTxnEZmKPKnGseffVqUotmjQuhrgCV",
  "key7": "M6i3Y9BZ3DLfrRWHUaWi8kBoceMStxah4FmK2dCT7R3yuvndixXMkgrgCMe9jxgYfFKap7Nk8LtWUn2d3PwL6K3",
  "key8": "3zEpYBn7ubjxvhnsoDGiqJCZwpPq4WX19DUNqjDhu8JxqDN9xnhAaLMAbxWV64NaF4bBMjhPcKEQkEDE1pMj7Qxd",
  "key9": "2QZa22vycvUK7JqW5TVQnbwHqTimp1AWN4Lm3SmeMS9NZA9UMwfrBKvk5NjVCXAvMkoVqbDHRpEgTRGChrgFysvo",
  "key10": "3ATk6yNse6quNpFMtFjPryXKJ8tVyCaWuQ6qwkwwnc5BqBfkW9XnA82maZuq3MXANBPCWwJm6Nc5bLqmJPiP89Lh",
  "key11": "5iY81xpw2U9LupbcZiiQkuiqTX8DmN1ajxRT9X1T1Z7u45BDkfpQgM11JKHcswWrZtcvSEvubqXVJ93EAhbmvT2K",
  "key12": "5bcGt5bhmkzFrLxrrds3F1GcttRSMP78mBdBkNvpitfQyWXf4HtatU2bztUZJLd91eFbEQrzSZnTTL6HeTWCzWyB",
  "key13": "4SaKNx8WebG3qBf2cngtmnt7mX4ei1Lj9ooUZvkbEEwy27ZCr5qRzrJQU9HotDAKBGzWY2oUBXWvFNGTQed2zHV1",
  "key14": "Zf9cwreDgb99HBf6249aCACEzZ9nwBYonToKcYFodr7tzBKb6bj1aC7pFSPX11dbjUR2d19U7573PBFQswh1et5",
  "key15": "599vsfRusErt9oqh2GaJP3XD7otQULGVjD9BsiPcsuMgbgdZ8tJt6Zw276KjkCkCQS6YLQWoUyHkYkLLH8e6N17w",
  "key16": "4GQY4hkE1H8Zrj1KUDEp72JCiMZEKSiadgLZzaM1W2v4JqNJiQoRsPDfVTkXc9qBLgBig6S5jdZ85ryK4mrMqjdS",
  "key17": "2LmkVNh4PV7y58wVMHBJtG3vV7QDqA2MFFVHunbsAoQooighH2Sp3xdExTnXfsD6Qv6VRgRQFawv9Pag6mvQxodr",
  "key18": "4DfzDeQGVL7MXwGzQnR3TjDBjeoAuLfdcd7JV2CSbckbg1wvfiVeSqYYLVy6irQhu7B8FKtAV9DSi2quVViQKfJE",
  "key19": "4kzMDreb4k7xZRmLB3zxCJHCpY4cpKhve3ns2y9rJdCFzKUCrXfT79ny3LCWBuBSSNtTXcDYQidideyQocvcjypD",
  "key20": "5FMSaAE5XnbtQHNAASwBvLNGnf166vLKEPwLZADRZFcKVaKAETeBsk9AjFtnKy95QSy45r2eYTAGe3xnkg4KEE7F",
  "key21": "64GbpCwzyUFkavBWXs6ceqt3YMqTFuh6YosCfAJTp82sMYzT2d4yB1x8haMX1fvGffWgGb8oDnPnJZ5NFWczmfU5",
  "key22": "2rXPTMrCH2FRPJ7bWV2v9WdcEMsyg9aeDbsxZKeCPkruEusd5AeTdEjhpZZ2KPe6QjL7kz2WgLfRdZxwWuEbH7Vf",
  "key23": "mPDCpNJ9RFAhyUoNsE6ehUaMJW7gyhCb2GMZcM5troFCafVPyRK4MY2jQrhN9yf7XHaZgPaZfahTPAtvDHARmNh",
  "key24": "5L4ex2xCtWE4abfkGNrhAdacHw1otjoSNJd4DNMZxGWP9cE1zsqXLmFZceNsTuCAoB7jRbW8ya7Hkbq5xR8XDvd3",
  "key25": "5vEQorFJhiuhAfWzfGiHeSw2N7ELPTpgZ4NrM1CP5LLW7w2RrpBa1zyPo6XEmmb2f2ReMT2NLobETUhgL7PXoBDA",
  "key26": "3g6yhbotq5TqS17LLH8sdFH7N52T6DxWZ4ra1TCf8FEHwuLZWm6UbtSkTqGZYjMgKFd2HEHNdtHBpfJ16pXckuar",
  "key27": "4ovETo9bGdjHGMtcaDoB1G4WUZ7jGjnftDydP2C1vLyv9zfD1v3N5Hgfn7VJHTU5v6o11yPMr2Q3yfXijbJJHAaA",
  "key28": "k5DuHQbaLXzgPrqJL5ekFbcJancnm1rsydDEBUeoTRuea1TpApStpaBKEySM2sgt6Yv7QonfkAeLDsMzyDkZ3Xa",
  "key29": "5ss5LKHcF7kzWJgu9E2rvX8TbHGjsH6jZRxbukgGkchtX9ySfAmNDs3G57vxdsYpF2zqCvXhE46mXceBaRfjA21E",
  "key30": "5GsNyrCBEiNNi9roXiyb5j9TiYm6G9vxNYKmFZMyvTj9qZfBUM61ZULXRZEdfQZ78pSF593N29RLhcKS1eAEHDYk",
  "key31": "4Zg19Jr6v82Hk3C2mAW4DNh8Gvw53uyQvz6wPFUtzV7P3xVtLXwueKEofyLHcjYoxV9PNZ8VhWbK8rnNjg24QTrQ",
  "key32": "3mi2Z5bbJ87RTsh6NFLdd9cZCBrbp28YMUkooU22UxWKnRwAPpqVTTHtBCFdgxGgwCmzaKMhKGXJ5kH8M54NU56B",
  "key33": "3LrZdqsdvddX7oLpAWQYW4ygNHfBx86P2jJ7keQmWPLuEysijAiRJsZpEmGgHxCWAVT5qNNCGg5iBLHReNtovnt5",
  "key34": "4CntPDD7XvGdCeTaC1GD4y6HLsPPABjaELXoFfjeVVySK4oL2RDd8JZiTpLQoXcnxo513x4qHfPoPaSmjthrcJbG",
  "key35": "5p7dU2Ne4XhwzJzuWNdxQ6vm15fZoG5Z1ZjTSaP4Y6jhKEtwQq2Xx6uuFrCNuz6ZsPMPxhy7V9gHhcPaUqttX2m6",
  "key36": "4nf6SxLsTyBYESKtMkxiWAHNykwhzKHtnGsQTKL4sEFkXYMTKnxemQLr49ERyYRSgUZLBF82eZjpzSpHX58vrHm9",
  "key37": "HH2wPMEjVQGSVnoRFL5aisZi8ZcvoW38GQSwDpqFHQtKB6KaSVMEtUuQ97d3DUqSVvDPo1JYGL8gZWa3NrTgQMh",
  "key38": "3soF4C337kohSohirX4FNxEKytkhgxTPrnZgjKeTL5MM6kwKHjZWivEzfrgbT4dxbqBM8aphk2v4TATMa26PAp9p",
  "key39": "3WxvS1syWCHEjtytnwKqnhhYY57rDh3KLboqawtkB5ndzTj1idwdLPiAUYtRkeYcCUfvs59hWcMi4FEMANvc129J",
  "key40": "3LGSSz33SkWwfY63fyiMkcCBsATERJrhk5Sng7yTCmMnenw6e2R32QSvwd4WCidBHVaLe522qPReFtX5A33Ru9Ur",
  "key41": "5FwoJoqtFsu1wvawKKK5U3wfN6h2u6DsHVN1CvyMRUyauj8i8EK4aG9kAA8TTGMqGqH7t6Sce1rYEHFM9WRgPceK",
  "key42": "26BYFAid2wTys8rtRy9SVRQomR7Exf19DESR8XZjwHgTzH2bgXNJZtpLReypkf3UnU1qSAtpjTeAkKfcTiRadL5J"
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
