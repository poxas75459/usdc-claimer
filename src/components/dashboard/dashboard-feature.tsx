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
    "3UUGqWstwgbNsX3VNV5jVnnDyiVipt5z8NEGw4y2kt22eSu8xio1JeiBAdLSa1iu58hPBDpcEsDjHTJm9zbtRutF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mnr8awy8MdF1W619B5Khp24KfXt5wN5w7vfxw88zSsb3J7QaeHy75FMREFaeBSk2DcVH6zeH4FP6vUEurGQzdwW",
  "key1": "3G9rBiDA2mRfNBNrXPpv88kriG8Yrd7bsgdQWStAgvFseyw97xEyBsF8mk9Ts3uGhX1TXQxa4WDY3hV8VjJ1TZTs",
  "key2": "3VtWKDtLGo5Fsum2Kgv4bGohzxVmwcvqgc7whHjAT85qU4wafBT5vRa9sX8aDD9QKMsA9BG5jtfcPXULZUAJgEtw",
  "key3": "4d2Scu9y8eMNDd5ZyVC9QGMyZS4WsDRiBRmk8P75oRj3TvrMvAvxh3kTnE1sipzzTt3gSGxYYGdtLABhu2D2HY8U",
  "key4": "1L7tGMVyAKrM1mEazWYFCa3tXQZWHp2VQbfRU7q6spd7Jagv8hiH2B16M57cejXHad3snJWGjEPihkYFrZ75u5b",
  "key5": "5PYmmnMvLnQhzfxpSyfXBN2L1pJbAZveaFsaXvgfxJvNxA9qaVBwXn3zhQTZq5T4zEXt1dbN4yznsgXtVTyfemJK",
  "key6": "3KHuBMz5CztcDbFFDWRGko9nZQ5ALfk1hZoc63eW4KoLTvXSTJp3LLhbAzF8tfPozS5ZHrQohnX3UZSsSsLrBQ18",
  "key7": "XM4AchzXyF6sPSgCJACRWpoZ7mCd9qGRnUGCTZTknBUpe6QA8RB3F5BvGWjP275CjAwc28Dr5ULyfDN9Jo4EZHx",
  "key8": "3ya5BrhTryPpx4iqDTEuDqPBT91przVAbLT8v6YTYEWJR1xkhbHs7Wp9gBeMJSYA4hPvVdmfuctBxFMtv7dAFYmd",
  "key9": "5yTDygF5Fr8JSw5Ls8hBoTwh6GsKWPgaAAVBt1rdL1XqQnMZWpC8JVfGtHjqPJgRzYmRk3MKKG5abv9SoaRc3DUV",
  "key10": "4x3oRpprY9pLUmVzaqjK5hD59vqruP2watDu8q5dJ5Hiua9eecjoGXwaTBaLphBNTzGb3ekLrbWPCKEjNkr7gZrA",
  "key11": "4R3PEwJ63JKzLZJp7a3iJGGL969tAPEvQrndbmPXibaYTWQqN5yB4Zv32VecALdov4PUUQ9NsP1NSZ4aBCjrWtEe",
  "key12": "2HJUwfCdTAXCm3oyzWzVivVpqQWA4ZSwDhFSPqFXUjt7DV5NFkeSmTiWaiVnkj9HA9xJ2tPVFCwdpv68c2T9MJG2",
  "key13": "3KbNL5A8xn3uWi3D2muhWtYHmH8in9QLcgzEdx2tZpEFZ17LUqQcTXzawaHTfJ8Wafj6CUb7YqhwoMWa8u9nQRSY",
  "key14": "5c2Uq1CGfn2jWTbLWN7fRa7f5kZvDdEyxMUydpz5sWQEXfy2kjW1mfMroV5otPj5Kiy3U3P3k47ybv5gZkBzn2Lf",
  "key15": "5mhXSMvavBD58oe46ZR7ywGpvuMhPa1BBJqYVN8u9jPf6YjeNVoeD2QDtJGAbxoue9Td6mfu3mHCMzvZNx7XUW3U",
  "key16": "X3NFoifr46CQEtBv9zkBDJfgoKM63chrr53n3TzwsVhZYBY8wpqK1vurcBTD8dh41KPcD4UxeaNzkTw2D5m1e82",
  "key17": "27FtDkBTBxGssVvN3KSJRBEFqFyzbGJVAiprFz3qtNVq4JHgBFgCJ2ft7fdyZr88gqyHtUpHAp6YNidxdzVKYc9H",
  "key18": "Di5tZk94Cqj1BPsgtCahKuzkXYemnXza5YZ49uY4cjm83GGxV2RrFVmBzyR9qXxwBoLKbV65V6q8LabVFsEFmg4",
  "key19": "1XM7WesXrDETVxt87jUAGvWRRsr7Esuwuy41cUq1HGjSKS89Eh8DdG8h1t7DhhUpAK3suHb3dW8CeXbKAUNvYK",
  "key20": "3Y9JhKgzQbs4QyzvE5F2foSWHbkv52aA6A3FvtbBRBxaeesK8Whx4UXsQsgHUoXR76pxrBKNKYUnoE7pstYGbGon",
  "key21": "3nQRr3qaSaG8qMgXtCGn1bfgfJ5WwufvjGbjbR7qJrhDR2NNXB6vPr2WhAJLd4wJorCzRo2iN3ArPXLUizHMHGrJ",
  "key22": "U1Jd15kYEqbAEY5KPbiDJrJbtnCTykmki5ecJVbxNczhGd6SKgYo5uvkhCqDkSxKa6idzGFFBFYbCj2FKHNDK54",
  "key23": "thbq8QGAWsVvCkZHJsfJnJ1r1n9YDLjr5qMitj2MhWESk9Hgko3jZKtof27QPkgaERKMYw7WN4Yqp9ZuvZ2PqZf",
  "key24": "5PRk5p3byYR2p5dtezhDDHfjyCPNgALNweU4CBYvTJqioEJV5uX1e14c2VV7fb5JJN1ExomMUzrpESFyHUnsA186",
  "key25": "5RYdJDsaNHGVQnP323ahp3N6xmcMuonRUGmUNqXvnMxvah3GjtazQUCqbhDDa7o443jvoRA7AwSihX83NNqt9rJn",
  "key26": "2N4vbxSRNBCNkEY99eo9SKB8ZCVWqwjfdGNomJmt7mEBhMr8dLsxPhYYPmmfw2W5SB9v6DiQGFG4QPyffEpFbfqX",
  "key27": "5M9G9ZBqB8PwPmqqMjKjGTH8dW8y13guWJaPbZQD4X3mWggbQaqFrLHDPUHZv2cgQns9XHv6PhUN4h23GaTzkUwX",
  "key28": "2aLnUbZc2uWKKFB424trR7xZPnH7SYj2PxsqUW75TTeRhAa6qLh22D2VvditdA3UQ1xRUKgF2PWgVnd9geyBFiwX",
  "key29": "7g3Jz5ejpbhFE2j6HrY5sJq8rwyVb5D2DH5Tv2VF2SQWfrkzLXJDgQHjdcQK5B49cxj1sqt1dicmxqh3jcPJ1ox",
  "key30": "kvrDB6JTQPTRKJFfdACRvoMmzadaPDoZ7vXatBUTerw2JZhKECK7BVQVSbjoDtqg3hbkJadGtp5KWUxrNMwTcCF",
  "key31": "285SA6nwQYvqH3YfzcsFZGocPmis4YFEk5CA8bBXPkHG1qmggbmPhgufeMTP7c1cYqor2x2AFx5Fej84BByodc8o",
  "key32": "5RhccuKnBS8uFvkjibFcHShcH11J13VUHpE9yxPWuo6BJ3FwMCUSstMhfJcukmPN16DZs1yV2zKQ6Dr95CoFzWro",
  "key33": "2BoxPkWpE2zwCAaJF3LAQmakJYzdzZyV4aKPY6YVE9rWTpAfztjj2QZzcLQTbVchaCjrAh4zdJHwrc5ktUo44Drk",
  "key34": "3uDZeww5gMv5p8tpFcqRZZv3E7yn1ZrLuaBfVWFyWHPwWJCw9srdNZk59hVNoVeUSpfmv1kKiy9NrUvN2gWb7nUh",
  "key35": "4QzMYqkgKeUDBxVhoU7s5HvLXzx74EHeW7fM981VhYqV3kNRSUSsvZviz7p4BokDV38aBTnXmMjSviodnVFNFcfa",
  "key36": "2z819j1sQ5RQrrkbGPcshwUiQTo7YAGARunJKkZ3FB9J1EN8xXwvtKTKWdNWqEKeiMtmSY5iLHum7v7twK5kdnyY"
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
