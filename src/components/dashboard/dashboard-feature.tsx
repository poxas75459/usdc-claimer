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
    "5dz6bMWZNwMUzWFYse5Z3ggZPHCMN4bNEwKijSmiKrNxkdDDm1kCs6ty6YkTBB9GSRXGuUGjt7HsSYUn7QrWo6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298C1bdgSQc3kdNYE4ASzEj4uBwekqUdQXWSQST3FZT37nKWgsHF9d2ERoT4oepCQG3ik82sfKspMxzUDF1FcNzW",
  "key1": "3bdnSk3VhGom9M8XBHitTDwHw4iAX5QJu66CCnapkuUtv5CgvhECiMZJYHA1p2cJ4YBG9vW3MXmkVQaHAS3kcvHj",
  "key2": "677SbmH7RqL162Fb5nb6LkMBFc6vQ46fKAjw3j3PQZu82SvQyE9smWpASkBhEacKc8JrFJDP9YU4CLnkCWYWu74G",
  "key3": "2FpQ6CCNCQshRHxxbfEX7hyDrgu4eojduSquu3wo2vf5tAUKeRcsWrqdd3AYoUSJ3d4yDJgjBfBFRxxmC9zYFYum",
  "key4": "4mVRQjb4TypCF1cej1YT4jizK9vmVCX6D4JKyoegthjWPFpney1MKAmsSkBJUGGwcr9gQxgS79bkK3fQrX72ctbC",
  "key5": "jD3kwqe3LHAXxM5ddkHTxHQ4kDHLTNNFi1ZFh1UjxueUrLrR3pKVEVGhQ7eBTh7RVWKHVx5jvzZgXkT26XyCQMs",
  "key6": "2ny5KMPFMEF7H5PwwVSUzBSCBSn3Z7vrUt8vnCoEzQu1hp8D9duHS8ymQnMfSTFXsN9WNUJFdZcnXx9ePCv6eNyS",
  "key7": "5k2f6D4zqYnSRYuGeNBWu38pXxRbxfN22yPzWEndHJ8vqumCN5ShD8jyQ7yzsPcc22sEgKowHWKo54bMHnXDSJoi",
  "key8": "4gDWSLUW1wJNLnRStnpXGtSwGAoeWNNqxQQSQ5HUspAQtd2qs3ci2dHZp2LNbQLRuc7tqeNMwi3qf5bqWiAUkcum",
  "key9": "2zznpDGYgddeFHqFeB3vj3px4Xy7PRP2gTsvttdWqSE7pDDS2gvj4ud6va57VWYtncTrn1b4fXiF5JxB2tyFxghH",
  "key10": "3URwHPb5BP8oepy5CZZgtbrCGaEnYbD8CyAQEMckNx73dJwRtym1arG1xDUzqe4h3Fug2SJe8U6hKpVjngBTyCgC",
  "key11": "3aLruba5rbogBqhAhkv24KqyvPa2wjzfPUDfaUMSpXjbVnqrWnbYKHBFCuAvjVhzaNwJufD88MPPi5PVR2bt1opi",
  "key12": "3LeWaDauFZAnrNCKbXcbhYCjoDUjRFziB3Dvtae3SZ9myR6ZB7e1wCd1TQ4jwrk2NW5eKFjLNDsax8PMKPc648y8",
  "key13": "63GCrQyMbNzKXq8DVuSA4E6AjSx3qNUzD9R3TvWWino7Fw8ESLfQ7Ft4DLqsVnT6RsFU4dRuBcv8dYhuRo5SM1m1",
  "key14": "2Nita2VvKfTG1JoXkjvuwG59poXcLVuCBGq5oUF9zUsS6AwPCH2QcCxxANJCjhg7zLFxsX3vgfPH87EPd9YqW69o",
  "key15": "VojZdVAobegUSUKzkzfxgLDDqj1TChnztSnmKia7xMwiRKVDtsMa43rrUgjffYg4LuKZ94fvT4ks7MQyw4dPueS",
  "key16": "2E9NJr7oWrPwVzJy9gDA9Ut8AG5aHxUS6DCRtsL4ibTibdumtGFgRRXJ1JrVT66FeE9u8LXYzWsXsDow2tb4jh68",
  "key17": "eCQ8NF4y2baX1tQLS9BUemNEa9GmfMSx7webtbabwe8idCp8tH4nt4qx6VPqxUK3uiVkh4Db6QEkWuycKD9mCuD",
  "key18": "2hgHknkieVARNZXYY8VYqhQCghKQ7L3zEXhaFvMriJmJbKeBE5Khmeo1sV8qQud2BdrBBNHakkpN3f3KxM2RcFjT",
  "key19": "5znf2BpH66mbjiYpDtaRx42U5vAHmK9cPqK1JnRZmf9CbFdtiZaUSWweZTXQ9TMXSd2bWC349GdxxrdqXfxZzPTf",
  "key20": "5bj8gn8sfxPGuLEcUAF6suVV1FvCZz6A2n7tVhWyFazZYkVPSHkp6RVQZLbtbxpnmo8hU6Lh1Envr97UK1zLdKbd",
  "key21": "3kLctPBMLgN8RaTdcHBULMzXet6pwcFETjjhEJKiHhRGf97FcWTXMMKyPamBu2wdrjknJrApGtT7Fqac61Vr3TdV",
  "key22": "3UZtJSVhm5r3UXHuxVhYtzs4NDkK2c2aSiSdALCgrtkwhnvRuYQ4mCg68sUanRJkc6wYZ921yJKEAfPv4geRU9Hg",
  "key23": "5fU2bXJqJNsJrPgmD5Jp2aF8TGC9QM4P6VBbe4yKz1X31j7RavKCqxJuQ9gPfJeYJ51Eao5MbWmvPfgd2iAtvtuz",
  "key24": "oxYjZ7eRhwSub2byp16ewSBbp88xjc571MVNywBE7E3dXibmyBC1JvUFDwVmDLHMRtLAwfffHgWc4WywdzeCupZ",
  "key25": "5SpjxAGd3BNnhsgBbxTDNdXYsTqu7AFSpR8Rr7MQNiFek2KExBppqwNndSey97mQbek6PCA185tHLsR32APjmnDk",
  "key26": "5SkwD5vVqZjva7CkE8XCxE2u7VFx5DEohB7PFMXCBVmfyUtQNwttRfP7vF1kHWzVioJsyWzPQJeoQJLysFMcBFxd",
  "key27": "2g7mdwcugx3aEjMMwfC5XNrqgjFVe4SxVmZXcNFk7FHDnM42tkNwfLQst2YtpbJRH7p3aa1A1Et5hXX8V1fwQHb1",
  "key28": "cof8VEvRVV8t9HTfs7jPxsyLo5px645hRywvzLyx8XUNRNAyKuDk6JBBcexiawgUQMCvrw3a9erPZEUE3v9ytjz",
  "key29": "GUToWNvKSjpmy57a4ouWj3FM1pLsbFaN8k5tKL2kFictLk2FAWhCRBTtrYz5DjtYXU7PMQkEGb3tumUtmsF5MJA",
  "key30": "3w9s9R6ZuZeUV4o8SfveuQP5hNsKdcvciW89EndGCpdL4ogE6k63Eou9oGXF7wkboEewf1m3oH2KHeG3pio39U4m",
  "key31": "2qsz8978pErRjkvxzHFPxK4BQZiK5RJMrbxnzoHJLC8B1pzTB6bhxZmVKHx7zDEoeT3LK7kJiasuuLwBV5ewD7gk",
  "key32": "qtXQT5JTUavxnde9Vbvx9eYXqL1C2hiGSnGWqnRPsTQhnLvug3efNtXTZ1as3QoXTmYXTBXmB2vzynjFbyzWvbB",
  "key33": "3dobuwYaxFeVRFehs3gJWN18E9MvFZYsuwmRCzi8tFyX1B6eYWRErnZQkXsYVZZutCUbWGRCFWkpFyfa5g1LBqCT",
  "key34": "3ZxxFgM6HbwWyuXxttvn3Ro6Q3UPEdrshr5FwowRLjtbjdMo9TUdCpJZBoL9M6M7844JjkHHbtw73k1hjHn7QGGQ",
  "key35": "23CD6x4kZPaC4UfXFmQBVaCKM1yfa3GxRxTwFfYvC884T4hmDb3eJrusngiXobzVqUxmHb9vYuseLxkgqSK8W2mj",
  "key36": "4v2Aw1vMe5inL4EkMwUECAJK7bggrtPsfX1X9aysxjqRvk3PpKy4iyrefrnFxJaaYCZqCEvxjw49tKhcNjRDtnh5",
  "key37": "XhgnmhVTqMcDFbB4PtuPT1svKGwruDDJBbY7QjYTPA79rH7wv99Bzv55q4dLnws3p6RxGkcsVWxe2yDv1r9Y64k",
  "key38": "da2QiCbCNFvPpGJnnd5PbiNV7NPjQAzd86qcyTBgUfrYzQbUPB3Hp9WiVMvQV74XM6WJwJBWaxvzxmRU6kBVxwD",
  "key39": "5w7hRrK3QFWDNVWhyaiGJVcPqz6b1qL8j1WFhe39nLkjtBnUx7aEptftcVMrgjvX18SUAAqv6pQf5SSkRMh1tj22",
  "key40": "2go5pGR7ZrtptLKoDMDVHZH3HYtU7UTfz6P7jDyKT87TW5nSkx3KFX2uBorM6rzVD7twwb4yiHi4SDA4DxnBZizp",
  "key41": "Fbr5Rt31qvVxsQc8P9nPHb5Wu9SyEsuBuqHX8zSgWoCLVrvVuTURSqD7FXi375KgSCquND1sfZfbxVA9a6aezXw"
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
