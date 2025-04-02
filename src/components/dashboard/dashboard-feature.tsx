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
    "4RRsPLmnqi531DdAhao5QxCd9ArLJtCsc8eQa7gxw2vEiCU6i8ZfQw2vPcKLCtht35QDk7iP3hGU92ntphPqoPtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XxbRhKtJncppa4MDrFN9r1SxUbKoDo7z2mHYGkcxAfXG16PsWroKQeY2hEEnxNzsgVJF6XuRWHX3TVa47zAJFrP",
  "key1": "5TrLmnpTdxTorGhq5GdDdJxY71NCofmtRxgedhGFMesFhQP43Zf5ebau4TKzYXVLrNN2mzWNjeLchBHYGk2S1mMj",
  "key2": "5VGSUvNmAkaJ7XABXfTPk5UbpqeqWCcdn7DkVcBCfk8rJe75RYUf9FCF17NyRbwUK2YqjZNiiMemrjXn2LtbHnbi",
  "key3": "5CifLFtr25Qzsh2KQ6ece9811o7KPCjia9b1qXuyUwqEdMWJMpqooLm7tuDfw8k2NbroJ2c6BVCjREd1EE56qLe6",
  "key4": "4Q5jpNibbpfFvtGoZ37ACPRTQQJuBkeDetB5ENCPi7c8pjV1CpCE1sSbAUd6TgQwARwm45on6MgtM4hjT2GLHRM5",
  "key5": "3fNeWQoBbrmkPFaCbtRtpkKMUkrdBY5jNevwkyAnUbJiXPTCxzMJ4dAKnMQKKtBbcxS3okt6EQo5iof11HwZr1Xf",
  "key6": "3tiXckuHknbRKpDUGKuHDQEVgpq9g97nDTX9G63iuz6mD47ZpVsBPoT6SwnC98CdwT3Cqd6uidLv5ocMYAsFjRro",
  "key7": "3UEH35Fv4kZEViUGbZku9tL6ZEFLksjytRkD3tsboWnJErDyrsmp5JbHc2hfNuHDZbiVWLu15Dn3qgLd4ByuxHvx",
  "key8": "zSaQRfwN8bwLLxkYPAsufC9mPLe8AgJUc8ggbrvJHrfjJpA1LNRwGsDuFELbxzhsEENo5fB1pFZLKtSfzkBnvSQ",
  "key9": "3p2ZaQDRT3zUC2fCMeRZBMch1xhtZ7P81BLkHwDEtgpTKhHdGZJXf5SwAYRMNFMs3wSRZuVjVuVxk7MKD7L4sTrm",
  "key10": "2GU3m6X6nUGw2ccxbfMqCfgum6L7q3rdprpfYyBsnKFDQGGpQw9s4zukCLg4JoQAKb1fNgeuKcheRHDuSp3RjLVX",
  "key11": "4DNqVdQqYu9oNTNEPgXZuyouw8TTMuvHeHdBhZfTRcsFAXV5VEwUs1KdEpayxtPz2GFZnhVukSzRwpFhVMzKrxAz",
  "key12": "3AykGgsaYCas5dCChShwwcCx9J5GjTheow2zaG9nFRUQ1Mj6grWsmxKJuu44C2fcxjwrTe7VYf79JejPrMq24n8t",
  "key13": "2rM8SMsbouSg5beVNuYkAgqhecWJtpuqLdQJM4xXqAmQ3j9zjkcEbGXVfoM6W3HYEZZZQq2tdAdDMbtssXqMXNdH",
  "key14": "4iGue7qFaJ6xMuB2nNUzjgb9i5VDBXUw45LeAnBx8pVauFX927faF7TytkNcKJNiBsJwMbPo6tvrUFNKkPR7iiUb",
  "key15": "4HdGdApbKKybDa7MTJauSUCrNwBxanTVicvsJdpdu34xpZz39V89UJ9yBcQVzg3QtpCPmGcBsqayaTz2cQqWApPb",
  "key16": "41hfUghrzZkBK2uBekj7z7KN8oiGXHzQiQAEBFTpoEGVCmTP6Hfe357acPGFCURxmUbPoKEkQFzUzXqq2Hhu1DhS",
  "key17": "4Amv79M2wW8piQRZUyny86y3mdB9jApenQdiYcbz3UhgjHmhwtTGLFGJuM4NAugchsHVoLH3dg3zCmVxnJmd3M7D",
  "key18": "3vmeUS4FDbDFB56MctyXP9PN44Nb87XpisrGCdZjqm5xP8WNpdcnG9QEea2LY2UaNUqr1kufS8AZdVnufnb92cwa",
  "key19": "4tdx1npRpZLFcksdbzvcR5MjhZFwMkcqVMSG7JHHwaqTD4J87Cmesm2frNXPqkWg9x6bw7SdzfRGDpS3RsG7Mnct",
  "key20": "3gBo4qJgRt5h5qG9iqBjJMHeSdVQy9Hh3MZNDcKCjkKCReNabo9NyX2nHtp1UKfAjeYmJ3DZFPSpQTQ9xYWVF8Y6",
  "key21": "3NDBqTHqPCYjZGH3ycdFLCokpG2ozFPqeehycedwidfd36iSDX6MaTJQf4aNWaTViTVXBd8fGE9iMK2RgNQyQKQq",
  "key22": "QGVj4D7FDGABvBV53jN9A4e7GXCJSC9Rj6dgcxTw93J6xLUrAXdtnFeB1H4Em9xEdZuao4W5LNbmknqr88pgX4r",
  "key23": "Ppte86Fw9SXNNndeS8pLqq7sWGMgJBrrXNV9qiQx76LsgaEE6ED7H5T7q4Lcg3ubPRVrhP3ZmKACLYYS2tnmR2C",
  "key24": "2wpQCGfkNM3wKNaZxeb5RiZW8rEiKpa5G9ffcb7CFfz4ajZZV4wKzwCW3RAhq9AhLHjTVryYWL4QxX683opz3PmK",
  "key25": "27HaXqUh7RAznU2rb3sFx4yamaXQXXUHAhQa6ZmyTHiDzawPXoDtRzRz9EVDGMkycgsE9i2zTM4cMeZjnHiP4WgC",
  "key26": "tUmR6xtFYkbcuSek3TifFaAoWrMmZW3ywPuu94gtSzdTvSRnuW6FGKqkHSHrardQFo9mqamQ9UNRfnenM725Rra",
  "key27": "3bKCvge6NCPKFcqBBW3jfN2UvrGz3yWpPEDwEp3qBUAvuauBT4KVNRznniETkRA3SWy9yyLeRT991gjUpDZ2DjJ9",
  "key28": "2ppjZt7hNu83vuXVpzdWGR1MkXS2PGipvb4vxRGMfXTxfpagfaYpQnNFWfcnFofFfsARH1HdQWWuJwDFbjLSEQMm",
  "key29": "2uEg2wBuCitn51iJxxod6SrcyBvP2U9kHGRH7mB1g22ntmq4Z7eE2gDDmV7NmDFj24UUTs3uxqg8doVEz7HDWLFk",
  "key30": "4WM5dXw5cyoDZHXN4M3MBRjxXNLf5gCgS6Gxo8MxcctL7xbstNEgsFuxMcP7dWDyTpsoecwYQvYYYoqAGFXbfjTG",
  "key31": "2waDSCDvSRrtTrT7J3dyqQCd3FzQ1UWHbKwmoaZYjHXmdEJWgZqUYgGdACGAPNTCyB3K2Erh4fZQANgy39BB6DU3",
  "key32": "2P2E2dpFy5SVZhxv8NnqfRHjmGDjCkFXSZRp4WhifNBNajoNgv7vhiP7Fpi6qnnkbXMx54EUDQpPRtfsc9Rvo4Ew",
  "key33": "3gERe35zcs43MuYj4MNKQgY413dBF97ybJ1z8HsgohrbjyWs37wdcCB9UTVBusYAepRHfWvPVfw8sEP2cbZGUcPe",
  "key34": "4qkhtYsyJwHXgsPg5fWCVQseGajFpkWHAbmrVhaNcCMHecfB19afQugKr6RdTRM8Pkuud6oP2FEmuPMJmgTDDXtE",
  "key35": "2utfsqsCJGFMteCP3PQDhqk33K5tCm9aDuQoYHGtTaLoi3ooE9PMPMUSwaD3DthXrBLtf6s3FHrkAWyHu7xy8QKz",
  "key36": "3wARvJHLrT4pDMaeNpSbUzJsZdvNncTy9tGdLz9LAD6zCNAw3rEctKHdSgrjMm3YiC6LNZsE3Hpdgu4SRp74ATVa",
  "key37": "56zpHAQUZe4LbastUvihpnY1LsxYqRcoU9DrCQfjq7SMdbFTA7JAJTWVabi2Sm8tAdJPhnaFmHEFUUTeRmGR7b34",
  "key38": "5aQRVa8TrWBi2Ep9xURsZMC4C8nv2Yv1BVSZ9SbZWurj8TpFqgs5ypg1RMPdMByeUc3akmq8VmC4VdbXHrRCB8Pm",
  "key39": "27rbwEQxxJAPYUHbXSq3HtLvExP7CsHpXGkS8NDU9ZkP616zcwNRY8amRnmVWhWoFYuAnpPN9yV1QBWZFqCmqacZ",
  "key40": "4vPx1M5SfgThc6XoUL9inSGaBdaNhkUJB3hq58P989aptfQDFcRfe53gPNMPPpYCLKDvRgFoaMbVVZSXa51Wj8YH"
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
