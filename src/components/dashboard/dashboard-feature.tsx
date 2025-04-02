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
    "4b4r62KsA2ETGh9Se3GzWMVXcKedXy9imFy7MAQmzvLpznyVhL2MAosnYFwdTCkTV6vqtGvBuAVu5zCmtrGrEqg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dD5VG3aFKho6aNBUTqwqKxP8U47wp8ch27VxTR7T8yD1AVyQ1Aq92nSW7hJTLmijhYEn4CdpQFcp4KFgPJTcsjh",
  "key1": "5nQ6XYjeEV4hZiz1DSu9cZXL4t6fCHvqGN8ZFmLJRDCatX6stmQQJYn8FknXWhHWbFMt2ZLPg2iZKDswAWKifKFg",
  "key2": "5wiUzntQEyi2xcQdUqA9UfgjiDNJPDxpsajVKr7k5PJTkyPNG4iZ241tNjTaPfZ1ubA7Jp12bXNx5BhccVwCHLp5",
  "key3": "2NobpDibyfoAfpV56uuRibKcADsFiabs1J9cTFnWgUybQ6V8skAXf86EVFjHjoFJW2AAY4FLHY19sJJSw4JDJuo5",
  "key4": "8XhMB6AoPtFvZdrYCaoxTfoaw7px8K9EnAJ9HS29LHiuHQBgsvJPcfrewm2VhmBWeQtHgBUrxnf4DcTp57y85Wp",
  "key5": "Dm6v3KDqfWt4tgqKnDK7mpNUWGw3G4gPR4s16GgFnN6BasEHwZWKJtr8h2djWvmmxBVxpJ5Yxx19piuJU8pV9xd",
  "key6": "64mMXdN3icqpaN8jgb9kDrKtMiZEDaqMKvHxNZbwepUGbPDaKhPZm9mTBJQeK4KmPRFy9iP2iH6j74dvpm7xJWsB",
  "key7": "3U9581ddptrYw9ngwZ1NTcS1tuCWWaJBtip6d8V51KbBRwRNcw44i3LrjEEvzh8uPQeHEsZZ2YfGQ2usEGbJYV8V",
  "key8": "5FCNk3B9w3gMuzSjbPa3r4of4EkQNStKnojmkEijrzGNQNkt1yWFuPs5wfFpTDj6CZGHJEhDqpqBpVEtkbRX7nrG",
  "key9": "5d75KqZEJPUrW95GXMZqZE38g2s2J91jeRhKhTpcc8HFTm7xRMGh4rLSHeokMjboTERD1Ab1cLi4vau9hUJFxN3e",
  "key10": "7hSNATo95L156eepFbRg1ew8xm1fCCMSRby1pBS9dwZHkCvDR7K77SuBsa4Lzs4dQucNM5wUkFQvTEKG6ZaoYAH",
  "key11": "5yRpV1gJLjwwV8BKzpey4t6wZpGxMVZ3FQguXyixVzNanxVWuPL8jsYpiYgQuGhYHAVQFK8naG3NUQqd2yZRiV55",
  "key12": "WzrnJM1FKX7dABVtaNpVTZU5gAK2DGdVA8EtmQV3dKCm7xZV2DzJv1vUu7JWuSsRfr7YJF8vbZLUDYpvjJeXrw6",
  "key13": "3y9P1eV8WKP1rBq9kGF6W1Ek8pE1GQAyo6t6NrtGfxMrGDB1VHvHMLpoGNnqVjeazZEQk28wmd9hXCfJZSkLZxaW",
  "key14": "2cy8vJWNhCpBKXLSooZwZ8gQXajgXwnqg74kjfjXEHWP2gLKYUXs6Hgn331yw6HxPE2qwKy8694txXEL6gC52Gq9",
  "key15": "4CYHXK6URHCiepFz1DM8mo6jLHQ3dFwAT3t6FjWyUz3CLvxTKKStSqVRoeXbZP4hiSLXWKLyWT7M7JQc1MdZmvEL",
  "key16": "5ejTGuDjaFjA8KhyFVw4uMXCSy8ewzHqJrqvtn8vNPHSEc9gJT3A1gz1meoj535HczqqgCapgkEGyhejCUsKu56A",
  "key17": "2yrKd6pYzce4JMEti6QQhJdQ2YzbpVBtVGd1RCKSFuE94wQJjJ8LvMJriqZRdLTjQkiegkkHMxChwEPheigKyUki",
  "key18": "gGsW2uxdZZ9JhnqRbZYThCR1o3piAVdCqez6GGarcxeXdntewondscBVKhWH6Zz3Jmk59BhfP5jLren98WDcym9",
  "key19": "3SJmMLF1rPov8q5sg9Fa3sTqS6FVWZB7dEZ4dF18GVDNNzFmEJDA2z2XkVXTrbLiuH7ymVia1AE3RYUhmNT7P6gc",
  "key20": "2EsgdwXKCKByVzqRSLrQLL7efh3fvKsiHRkYApe2ovqyaSPMzrkcM1uTZNKMyrHEyo2WTxEdHpi8GDewZvrN5W8V",
  "key21": "NmQzajrwcFdQiTm6b2JYRP2hW7BVf71zTHC821oshxhycjigx2YoDUMpgDJ2DeLddTdL5jhRYYg1CCF9iXU2m5n",
  "key22": "4SovSkTCri83h1E1sKPWXQRcA1Xnv5NobhZ3yxjX4K8aCUDYNNKuxYfVMdMPoJJeT3Puhg9L24TNqBRy5uU9ef4J",
  "key23": "2vPcbmqVFL4cravLJ5KLMbAL1jPYKcYSH7eaXdD3LhGqVLtLwXCkEfc95Zwgpf9jfLKEz9KVxmyshVQsA2MGutwv",
  "key24": "4nDPZyk2juW7juWf2PVTavc5c1PrvnppFaUmLxoeXuNdX3G1MHwxMyYBNqdrPMvKAufEkBvQSAdVQr3ACnbQcndB",
  "key25": "3iJGB5jjUaVcjEcL2HYf8pJsibRvi2ChspnG5d4EWmCVPhcAEsdQJzDsHEddc8r6Z5oJKXBNpPj1YwfqJ4fqh2yc",
  "key26": "5mxXoJraQRGhDvMQWsQcKtq9HGXVgebXHLHEXhweDdHP3HGCdEKLVB1fE5Bb4yk99NmhsRfWKGYcUFPEgTFUPA6D",
  "key27": "5sVuTAxZou842UfK7Prh6Fhs8g6V9HqgBzANFAiUReGpmQtS3Uy6wYvxgs6mf1YAQ634fULLbU1BqEViRMXzzc9D",
  "key28": "4WabyFBxapL6gpkwec3QBKqxZVkaTddvZ9CQ57aR6zPLQqXTMDKmK5aBSVbicfkf5gqCCHiGArNvyNFzNitNvJbH",
  "key29": "4DGMgqnGoRUNmsFAhaT11JNF443CHEpcV3hXNu58TipdhPqpiGLTG8TjALEcXR5Uy6rCq3d5dhRn1vRpyhGFLa9j",
  "key30": "3vuH9HyDtJUoV9AndBJH7eyD94D49gCaa2DQZxDd5pBfLBdjKLtwwKHL9dJ7vqASzzxNioG4juBcH84bpoHFVrTb",
  "key31": "4PEzPtehrb8RWzvDFosYvD9YwqbWzXTHGavqMhToANFEMhZ9eAAes6A1vtoZhRv1A31ffu9ispZWyw6fi8kWGZvb",
  "key32": "2Mq8UaJafd3Da19oHGK7JzUzPye83xdu75RjDvjMXVTq2wq3UGyf5yd7W8zwXtNKGhFevfmCSWuUaEhc3KSpQsg7",
  "key33": "2QX5BmUNjV9XFb5etKBGxFYzBoAo14pcz8U7p4tkq85kseKCd3QW8NEzzPCaZBdfwPUXLWDxra5kVtECwt4rTJqa",
  "key34": "66LiE9ZPYPdV2XPMUPGh8aPHRCSYXdbU81CKBTF2mUBD41EGGZWrWNfnzsKqyFWgmTddw8Y28HZdsd1XYFbvg2Ux",
  "key35": "8CCJ32JnonVMV1SLYqoDwkDaLkCeVYtovnD45TkwgA2UXJsbGb2VLMMAwDog5GrSfDxFKRPvfSaTduZ28AMgjSu",
  "key36": "4hxTkgQ7x4z1TjQHW56MpXykQQv68qMkzSyp52GtnuhGBA87DQMvyDDPBDXRYacoVoGTN5VvWfN31TddPp8JaK9H",
  "key37": "2x14Znki2TZ9jRfTCPF3ztuzudFT1428hsB9wFtFczfFtgwYmVLTmpwUCCQFzy7hayPySEovPLoYcSpe2GckJSYW",
  "key38": "2bFaZVLkq11GPTYusZrfW7uvmejnqHf5VrG7hbXfBmtYUce6LwZC9MpKCNtmzaHt1pEFoCzZXRXpYuzyTd4S78ht",
  "key39": "5rY1FUhmjGG9GGMsaVr3a9xB3Ka4VtUdEhWeNUX3skWsmeriptQzx1s3ZANsH5ZgoWhBewFPFKQRkW6HDk3hb97r",
  "key40": "3hwBRdpj65Cu7m2yVxy4mregMudLzbuohv1u2r2JbtbChjUW69km6RgMA6d1KkwU6QD6js6ih4iQhgG4xEYAD2LC",
  "key41": "M8fu3LopJzQ6CoFoMC9ZAcvvm7WPeoYduiM9zUJvAwobbyw378W3sXWQAEkW19xRfHKX8SjdXiUwYudCAAbupdA",
  "key42": "3JqApCrPY54k8FAU6nLRECLVsRiypzUVN5wwHNove5dBpy6jXpEKyPnn7iLUqnsxtpryZPeDvHNnTCjfcx2Nqnsg",
  "key43": "iRACsNYQ2EsGxmXtoKN1Hzx3oy765hnPQxfZ3xNNpSYfZG4vSzgGgjWbm4G1LRFQCnLT82G3LH2qv7bB9cpajSe"
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
