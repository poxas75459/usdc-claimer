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
    "3kRWSpRiJLVXZwiVXop4hyLZz8vUVbixBwwjefu6KJ1MKX6Vv6ofDNUrMVUa1pqwyNDuuyQUa9bciwur5jPhzMkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UDpNz47sBLT3z4o6TAkDJVpnxyFkansA6a3BagpcWTfkDZGVyN9e8PNTJj3r9ho3YMw23K6cRUXGzYDXZH5vHcz",
  "key1": "uDGBQUXbRWrcDQmsfbsvN38R69dkK8zXqWtQ7z6iiTewfqJGVbY9qjKxfLDLAMcbjwGy1JMwqwvXyNWrjdCAjWF",
  "key2": "2Dq5jNDYLP3NZjXm4sKS2ZB88BM7pfAdEtWyZVXaMaVSjRtVaGqZeBjFXRy7pjpe5ZjrH55wucMokVDke2Tu4vxF",
  "key3": "2hV4WeXd5dccR5yHBywb4u1WLZbFpVJP7qB2djr1bk3aKdneG4sXEFR9PM8Tj5kkDPJ4EKKutqZvrrDTu3DrYtYo",
  "key4": "3bRThUVwo29vT5WbDGJ4C2DhoQcJqFaM3ZuDArnqVPpzBGk1dJ86ZCHchsrcwGWginNfHkLPTgwm5YCpAV7QXR8J",
  "key5": "4qZhGHprpmHrk7Q1YLzdFVRn8wUHcnBtuoFNk94Yr9n9DSPVpM6mdqtro6faPgYHZAempEop3wVRAKbcBtfUKpTt",
  "key6": "MWzicpttmCtvRLvLNX2iiUt4EWdJ8HBpXHWqtMwMrwkJo3FwazPU1Wx6mJ5Z2BnN1QMqYkTf9Li1jAWoNU6cCau",
  "key7": "57qtoxYignMwzKJzZp7Y2ov12mDxUZRp8rC8eRQfGvNBTHQd5KdpmCDhtedL1qp5J3qGurvQCJTm7XJiShqji5N7",
  "key8": "5cqWF5oHMbd3zej3V53cBpdP6DXvua5Gi9yoDYhBQSZZpxPHij7VFRpd7eZfEFYULiEiPH9GqCWaHAhHgEmbW689",
  "key9": "9Q3ZizGkpuqywqwguwWr5fB7sQFz37AzcPahihJfBXZUCN3pacxv3UaEGbcpH6FRRMDheCvJP3rR28jDd9PBZbw",
  "key10": "5yEJRB6yGLKY4QrwtECMU2pWw4i5qwxskgFumV8dD1u65rbhAj4Sxh4oi1KU2merNq9VcFv83gqKv1kBryUKYN6j",
  "key11": "3sVyCbxKhkqK5ZU3DH4AQkBD7P7T5tpMPCKvfgWK6ZLXcZhEqnmLfBugkupkHj8EHtDr7tegEN5TogNjC2TnZM4W",
  "key12": "49npAfy3mGyrptTdBzupMoQowQMZyntARsPAva7UGEAsAHm7vroBq7xkJp33xLXsYJpUwiBQhjp8RTWDZmokT981",
  "key13": "3zA29cdQDTwPT13Uw4YyoLahTX3fz1U6ACrhMLH7jMo3Wah6KhKsMNwsGLUhfVM3TBx8SnsCbv4KwXAunznxiMW",
  "key14": "oyHR2rg7kXXpXSrVEcAGJhAtfriM6Y1U5eG79TCuSaVHzaWqsfDiF484RP7NoLikKTxpajQxiewM172AUgPmE2p",
  "key15": "67hTuYp6tCYG9Rmgnn4Bi3Lb72MGuf8Hqsh2nTJrsNSkpiguCWecgcTckf2UKAasQ5DLxMu2fgK3nuHbxeAfH6Bz",
  "key16": "2aicz67j4uePXPqmRbBzDc4775g8C8ncsS8a8vxxQRNDgXAR1ry6wwRRB1oaQeB3apyKTgvmR1SKNgkQbv1FZQBN",
  "key17": "4QX9Ec14xkgc1sKXTMJioVMR4tDmCY7qif2NxCMXyk6h5t9ebSwHGnA8eFj7Fr7ryD9qGixg95Rn8URyFKNaK9wo",
  "key18": "3pq3WJbmJUfbK6tiyZ3z2y2zCwEAUXJ5ZbWKqnY5KJqpgQWt2Nmmb14TQBfGcyw77HPZVcCXt4Ee6ChqxRCajstw",
  "key19": "3MD8xpFzVLSmn1HD76pTSWfeU62puSnmSDdeyKeGtt7SKYGmXffbXZRrUm2gkheMiLyP5fu7yAv2pLbY3xGphpkM",
  "key20": "2BM6R6sZTqmgVoQu6J4fmgpPGjJkA9NnZL6EMX8sucVw2mfHvcBB1koG5rnn2VtXG1Eykf6K7X3hgFdRqwGa5GDH",
  "key21": "5Coosr4N4eyTNdzwNqWXboxQ97M5Tg1JxqqXuajcSEAn3exho4frwKfe5BYKvMeepoJFefxySNswxVjTS1kyHPdq",
  "key22": "H4WXHJmNNhFckLaTh9vSJD4RcEtNoJgjBMehNL952N2iD6dgaMj6dDwuF2sTfZcNxF8CQh2vVrWTZpqKXtJocPr",
  "key23": "25K9RYSivznYe4Sg9JKmRfxW1P2MsrN7CcLJSjot5eELRssHfy3dTonKmG7ydtTR9oBV8j5hACYP7C2VPLr5BnRA",
  "key24": "3SYYwLkSwcvpNmwzxsEu9H1XAsYyKLpDwjr12wvDsDZgpRhBf9eH4rjuTzBnYiTnXPKxPv3sQLssb4bVi7DjcoUg",
  "key25": "48Wt9p6sRLGE66oGw6dUE91ByHrPRnzKon7pnT7vJ6q82NEVRDPDC1prfoMaGtuBjMMoGmUsEbEye1Fp4xp36fNN",
  "key26": "3McexwHPGEup6wJJsadd5zMgC3oWMSfvag5q8AQ76ta3wLPCVj2mpezaMpoChQZgqGuoz8Sm1wBDjEYBfmSTmWun",
  "key27": "4nuHDTXgNNon1M8K6wurmPc5Y2VsZR5JBtGWXcbDzxyq8WARLz6cZYSpXMTtGJemCWh9LGboUQDNmGZAi2fPw6yb",
  "key28": "64zuoFaecTcg6Bue4C9M7dfUXmvWuWbuvnkQykjcoRWZVf1FQTwDPRjK5wNdsxjH1v4EEdfjSKrFNabkaWQCuCzp",
  "key29": "2k6SqtGqcCNbrvAhEafTSDMVGiK9wwHQtvQaLCF3QkAjEkhjmCqxUpbvooZDKMdChmZGbDUYWeHEhcqhZAx9gaB7",
  "key30": "2uvEp2gQG7Q1nncCbAAetvhu7PC2gNZSNcEJELNwboGhjmzbM8pCFPL31KwYhAxe3PB1s8QYtbzD9Py8ZEeTCFUu",
  "key31": "3RPsis7Tgsrzk4WhpMThKWAXUekJVeAT17krkwh8FGgstXNUpMGny2LDZiDK2jieM12924e5ny6DbXRTfU5q7nRg",
  "key32": "3MNTjg1276YRiqBpbMPFdRG3g3s37SDV1ChH3nXwXGwx7rRo6GuXLF5iYGdKqDv79Jq16zJ8WmmYfaqskrsgFBoR",
  "key33": "DzcdJKzun9ANtEi4ZGLXZX2hpYYMkap171xz6etFMZHJojqkuV3fa7yQS8BBbya3nNQuhbmVnbcQCp6QBZh91Wm",
  "key34": "rAuwAXBDnymk3QMzAqDxMUqV5e4MQcpqaopeSFp71jCUCUbybFY6yHgeetgYT8J8BNBCntXdvRs2nMfM1ruAmrS",
  "key35": "5eRwiN7jqQsSkEog2UmECLh4WaAqLmajPWxZk8BZsLSHxitPy6z7znRw8Qxv2deiFXr9S9L6NhkQsmpiGDRqCxvw",
  "key36": "565SGtq5pgNSdA1xsLe6kzkcPK18pUiYutFZHGVxoPdUEZsfWxEkEpGLfs2fCzc38UbzydhnFFyngwVArQNHDFQk",
  "key37": "398LpTTYwSDdkhCmq1QXSJ2w5vDcnotBPNfA4e4UM6b2FAwxRPaFNrByJH7oBrDo4UkcnvsXLezbHSy1ZoMehWeX",
  "key38": "2E7UbnXqo5DBWykKPbhFBvJYKEFhyCjumeZyHXPBUqXnBmPxGXCDBRnmTpR8AEJjGTVJFoZotHNu81RK6M5V61P3"
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
