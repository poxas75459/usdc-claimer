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
    "4k2h6GKtWdYBAprYFwbr4MvZpqMWcsPsDH8FMns6S7KBNjx54EonccFNQviHADm2Uypfu2r3W7FGKLg9M5HBRqcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RsTN7fdikqGzLZGp9vbdRpFi7vXi9PMiRPTGpRhrAR5uWRTmfDwDEGb71AUvE6Vcx8cLWdoGKmU2N8RpepEohXr",
  "key1": "2hjKPKGCedX2yKhhmx9cupyDfxD8pFGJR2S7FUhL64joTrm9XTpjekzqGdeAFhjFLdNeAHbgEcqkMT2GHpTiRmsT",
  "key2": "4h8sSyj5EvDb7iVbtaMQ7gcDP1hiQoyt2gLCwkQ49FrNn2CvqEViUuTZkVfrZ4Cf5jRv6HUY32iXJFsvF59DLNrX",
  "key3": "4eiuVTVuFB6YE9EhAyYSttH3BG5vv6eVH8gh7gCh2c4nnfVx6qJgzqwyBZjB6Ry9KSmSFeJqGkLZ44rmeCG4mZd6",
  "key4": "3SXUTYargLFanecTjGb41KXALkrfcjRqCsTjrLbCyfVcc9KgopVC6chtbTBgMyoWSicL34JskyG5j2e2y1ot5Qu6",
  "key5": "2tSYRGUYkGGAACdEqV6zyMhZDibFRfVdEKZKwAJ6s3bUiaAgKiqxME5p4PxiGuY7NHPxSZcuwViTyDZfwfHpf4kt",
  "key6": "3uwMR8K3g3Lmm5p3J8wv3okhupdzUkkU1NiAmVL3pS6vR668Z9q94jSbbArT8Pi6oz7NYEeVE9dPk5wk4j2wt911",
  "key7": "2qwKsKr8MTAWwxmtbRHDjQ4Nqc5ZRiD7WMbWAw9GveZ8hzEnMDogGRoysVs3rLYcfk8vW5Vt7N9g3bUhZ3VrQtXr",
  "key8": "4WAjKmb1LNssq7SHjXYwLaVc9Db4K9eDqFfsCznFRbnswPCD5KfG51FCpLmBdRYqVt6iMTgFqrprhr7MD3kacmEd",
  "key9": "29YDc1YwtjfK8LEiB4tMh41yhPaXfC8GpiNfcrVP5jfs22MBWA55wUpkwiscooQcVKfixrnLy3858TdZm1kwxeuV",
  "key10": "Z4abieineB33kk4ek2jc3fPAjiGFyYgdmyYtiZrjCPcR1M9GZekP8Z3se3AbnKYGp33sQEed7WLGU1BmrkDjNz6",
  "key11": "2iuB83KKkhggwVZDVPAtzsNhfDb7CeqQQJpownkFwGqRwgPW96y9wF41wabh5ScFLuqsx4LNuHftxerGGiLBuWSW",
  "key12": "5wnw6PmkZepVwhnWkngazab2cphW7CtBqxEdYi4C1NK3YzwSvcSsn7eQySj24cKEA2ieoPz8qfvUkw6ss7A29M1n",
  "key13": "5ycNyTcgYax9Ziv3B85uko66K9tzZ5Qk4hXQmen79BRHmmymSCSTUDcDzA2mkwPbtZVTuA9yBgh7FtUfqNRwqizx",
  "key14": "3265eyemixtVvFFxvYopLLiHrRNSW7dfuWXPt7Wa3UtGgidjYs9v7GEihVZAPHpvMbVSVdCmAWxgLsCKTi4MMYmL",
  "key15": "EDnynBZWTx2cbZZRDgA2qPM1MBfvAg4fEz3mnTg636jBwAic6hAe2wqiwNkDjoUVyRLD8HJ5wWctsMNWrMnmNUY",
  "key16": "5WBDBKDYMmYz5ymNHTwaGmhFA8hmcW1nbQruRxkkNHiqTte68FfQHdZpMeA5113qgGVnHac98oZzF7sy9hdEHxnS",
  "key17": "4zhCWANuuj4znFH4RicM8EiXHtvL6Rd4UFHz8wV5sLNkYH1SxoQn6FLkVpLBPfg83mmbD8po9PUxkkMyZdXwAU2u",
  "key18": "3hfYpv3HuNF87csdr1yGhEuFLuLYdNpiQ1EugztykWGKd6sammKuSDuF48dj9pfJbV44ZFXA4TYh9musoLh4zt1J",
  "key19": "5DBikHB67D3G5zeLfQKN2ed2veerhyJLvQ6gY6iqMYnvDaoZZXNZtvGw8uSWSzfupqSMwLNLFMBMKVGoRYC7L8F5",
  "key20": "5H6sVUke7JNFsEY4PErCdsoCPBuFGuh39MpXKLUoyc6ekBCzG2NFZpMvQUmHdBQzxr4khNUqd3JiYQQ1EY3M9Guk",
  "key21": "4KHDquzu6bcy3R3iMbpAH4ZtMkigSNjfjXK2xK9ahtnZoKphuV141wSMLrf9BQDR6ZZpSLN33JPHR95T1pfXWget",
  "key22": "2c2ZerXqj2fGURLzx3HN7RRomEJp3eQa2hsQD7wUpjrVmq2MfLAHjoYV7pDbpTDGJHE9pyEZXe9HepWx8ePfWj7y",
  "key23": "2dimaHypmDAHtGdtX9Hnq4QjniLfXNmJ9rvL57wfdRzwuedfdLwg1uRpTdFtydo2uoh2FAr2Vz2xgmvWA4sn5axE",
  "key24": "7ooKtJraNFTjDo9XHgDDwXUz15vP9J3KkTAYX3r3edBYhHSAKQRSpbLuLZvNjmZmY4dMC9mFe34Bhq832Z49r5L",
  "key25": "r57BzYc7UDeqvLCRAQk9XZ4M3JjwkVf2DQGcZt9MzHAuNempjuTZzEZ9L4ArwhKtRJCzSn9jeS84jC2Q83tvRyC",
  "key26": "5LWo634w4Hf8NBLfiQa4BYNavim9aZBhLt6sbG179XG7BEJhiMSGUbAhkoit73Fw8GjyjgJrE7qdCQNv6mR1cYUA",
  "key27": "4AWnCYrm3Egbey9ivt45e6n6so1F2GwDr7gpYQL297VhiGrmwtky2iCwPhSs4J5HnqcNhwgAkMKc6yZ3WjWWWeXr",
  "key28": "4AUvBiHVRX39FkVZmvK1vKZSBndX2odBb1BSoDWkYTZVFwJ2BZSxg5E1imBKy5h8N9qyT5qxzMa8ceWogKMCkG3x",
  "key29": "4fYQt4EfqhatyFDkC9NX8ULD51DXv2Ze94e2desQTkYjFjpAgCzWYiH7x4AGexqCohj1EmQUfNCSew1ifKz378v",
  "key30": "5fyQmCfi6QujTZ7gCvHTbXawrhWCdoComqj2RFkPkiKjEdjKJuRveH3Xe19A9FH7CrWQt1oVhGQr2muwrhgASXRK",
  "key31": "5oPzzqLVvcyacSSaDzW1bGx9jQHL3tYL1nGsCY1s7px8Cy7eahN7DVMQXyRb1CxRxYjNTTQqgTbeDYnQiJfUCm4g",
  "key32": "3URsPwLvE1YNePxZ2uKsdeRVWQmEKBEkgvaJG4Ay11NuyHQo3DjjkwY9nB1dxDHqLBgKC4RdQum3a8tJZWWaZv37",
  "key33": "FNyhHyqcSaJobJ1Nqv66xeQiM49yzk9CBpe4AUZkWMfcghX8ci53Hb62Aco6JUKf9WYH121ZcbzW4RwsScvNZmt",
  "key34": "4ERS7yFDUrzSVsuJakJBhaNJmKu7Znw9eq7Gnohz92qeaoguVNeMu7kSQDTXJYrnpKsz4p3vNSYLkCjg8jRKdue7",
  "key35": "h2TWqWsg3Q2CE5MDbRADoQg2i3pw7eooMboPhnWmrjjnctWUMWhBNSbjtNLybsj3Lkyrczy1xKfUtMT3dSZbxhD",
  "key36": "2wEUSnYAQNVaY8tAnQVDbQWQRJTqWZGUXstFgdQ1sFGLwGqunTrqvUTquGDSQHH9qvwc1PhQ7TigNS3Q4LACFy6h",
  "key37": "2a7fb9NmKhX6Ugaa2W7asDSKS7c7nNpjh6mVFzB82wvfwvXdAoozuDzo8dCPtP6YNpGnWpNsD76mwEnxT9GTeH57"
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
