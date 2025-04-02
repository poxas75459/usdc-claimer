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
    "MBYjcTe8LAX9hoFgg7WMjPJ9KRWzHN467P2DvwUdweGoLZaRZ9jUKXqpircvChHvv6cjp4uvpfWp4kahpd3ctsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qT45fKaKWHfKgJ2EcRsabhxuaGX7NTuLdGG5pHSE7n4N4m7KT2eXcUSw46719LdJikVrw5vyQRcoqkus4YqDHFT",
  "key1": "4qdBBRMSPpzzdob6SyzbXw9x6Ai6dPAXyNNzFn9puaRJgXuSzqEdPZuYUhZG2P1Vqy25Z6tVr72HT5wA9fupn5MQ",
  "key2": "5jTohunTcVNgH8JD2QwGa5nct7DcF7VN39oDuzAKxVhKSxd7p98g1KwDDrELb2j9cS6jdYbuzcPgytbBHddDaVJ8",
  "key3": "2fk33j1HwDHxqRKy53bdt8KWCdwkeJzKbEprcuDMdbJ4TgvMkYTUwVGD4Wu6VSxpnUdMu1muU6ogiq8cPDC2YyVo",
  "key4": "QfCguVeiUoWdqey4N6NWfEqgbHFDfatx9i2w8PdmpuFSrYGk2Q47Y3TWyRufMTaVJerHx8ZSYdn8DqwurUDwbLo",
  "key5": "431ucABr8mfscTxevNp2csG6wQUizxUzoS5Wx48EpszpWJpxaccJoVrB4bTSjddSfq6WNUEuYyeVnwYdWsaUJZSB",
  "key6": "5o1aQVxw43fyD8ABUHMkjfxZvjsBa2ahcQze3Um3aM8jzm2JnFQD1Nb1H3mkNe2yRp3HpkDawHJKu2df5rybMLfk",
  "key7": "4cEZCYpw1ScRgEaT38UbcwkEEEdvmTnnt3mDta8Ui9YqZtpzPYm3cDaHW9rbhWsAGVXv8v1kZTRrsphHCBKnZw7z",
  "key8": "36Zga3LbQTdjVt5FWf2zHvu7vEr8anioEoswFx94Bo8kM17SfVEXQm7kfFkyMdq7KAmVfVYuaZstRXWeqTPSUitX",
  "key9": "3JEpqUu14AEDRD7aK7xUhg2HrmRW3T7RGS7FctuRmEqQhRpmRGfni6VM8FLQ5NRqTRDqkoa9FSN5e5cCzwcweiTA",
  "key10": "5yxahaAT3Xm1dL9RqgPFnem9dXH5BG1TETizjKyCRq3ce5bYnFq76Xe9yzeySeHT9zGvxrsRViVFncjoNtqxC5M5",
  "key11": "5yYxuEYKUQwPTyRo2h5QV1W1giwYwRJ3mkKQhPoERUVgnQxV3Mjhfi39e8xaEa9aXfR7pbK33XDkg8rgpiNgU1TM",
  "key12": "3UwPYGbxnwZfrnvYiDEJLTTjDCXkSK1pELZfDZimcvpmj3e2T19tqU8jmDhDJnhCfwxYgXHyX9Ee5SRemZESFyP8",
  "key13": "4ipz1DpyqZ2TNhBZPu1HtHqcTq4PWoBu4nreMFvA7XRqj96RHdRsS43EWPm67q1tBmwqmA6c5UrT4UyRV7WTJB3B",
  "key14": "3NfaLw1r5XVPQGQsb4sorgGGqrxUvrMuYcJgQXphvfDumZwKAnktNvXyJgoLTVVDg7sbwgo7FQ6pztTq4Yxw9LEd",
  "key15": "4pgDnkxNjziGAfaTM5E8YJx2r8SAQh6MpXJESa9ME9Q71AJZFAY9eFpQ2sPFbotoCFYykyisppUgz7sdq5XVgvuH",
  "key16": "3uvZm1NhfMcusFqCmqxEhyZyHmN5CUuwb4d2E7iHhsPasyXDimGNpFyHCLMc96s9tM2DGbSVp5NVQXYPR9m3YQMp",
  "key17": "4r4M3PGUt8EvmXAgQmre6mAi4gajNLBujvUsDGSHL6w2TLL4MJgYeSskP4fafECgAFkS9v1hmc1iXds1JQroefG5",
  "key18": "4xeGQnnY5mNPPD9wdEZ2Hevzwu9uojXpCgNeHLMzY7KLDQzUCzSBpNjjxUHTjBK3EVkM7iVQ7KbJvra7ARayCz2n",
  "key19": "4Ut6UZBQ2MNtiBL6AE3ggHhePd7jEGLU8cdB9uW3KDrLN2YCgmY9VVs9gBrExhVAFhmcRtu8qDFD8Q25Qzz5vx7o",
  "key20": "5nqHH31QWE2egyU7LDbLbQ7uFaoPRGFWq7U1o54mMHZ3jP7wVJE5jLjYmh8zxJgyunqJKYMNjga16U6mbpRQGJLv",
  "key21": "5VE1nGT1J96veAPrDHhHREQCDHxpRkH4ekXcp67PgnRSoQR543PknbBTsv1ErxcXiR6QyLidxPG7zbPBto9UEpAB",
  "key22": "3zFVcHXZRYPpCjThqsfAi3AxPnAnjJegYh4iMDfNaJUQDmcuZn6CA57V1Sq7cUD4QMERqgnBV4UK8dEKvGwmPVUN",
  "key23": "5pswUSKS5Xcxjq96juQ97KoLimXheQBrkPE3iZWEtfxx8jdsstFYBstN2feRH9NQZgCbVf8bfoNgQwTZgpS7QGAt",
  "key24": "ijHuGeMamCXbqaByQ3BDqz7HEDh9wfDyhziwrsLdTP8EmcdahCUuK5BGXJCrvbAmEbxoXBrABsb9VgjwZrpbC2a",
  "key25": "396TsHiqBW4UNGj5WphvBNeN93x4dPk4BHTebvgYQuvkSeLyJn6vC6YzVJuEqVtaumMXhfMBBGQ5WbBNXRUwCT5B",
  "key26": "4BmAMFuwX6n868MeCfmWs2u1f4mqibbAkuPsD39izfKy7EydSik8hp9Zg464wGXw55UxLuVXvyH97vyQ8eGcnuAE",
  "key27": "4xiMZ2qEgDs7GjgrnPCrKBzXBmWGQf31Bx1VXNCWSYY9hCustf7ZFpnQC8sgmP2HmtcXc8SAbjnAF5hNwBwfzHHG",
  "key28": "xnfgMhCiZcCm69sWSK5p2msQuWW1FkN7tqrJAYdcvoLABYTMNUiJjg5GDDRYurwvhE78zERuSnW4WAyXJFZeemQ",
  "key29": "5LyLqYzEWKRshaLAoHc3xPdLPVwXrmGkakFnnbrdE6CVpVPpwttUkHKiyoou5YPxfcajc7eRWwMqHZmg5v5mfpfn",
  "key30": "37iCgEU3GeCbT72tegyxYPBH8rnKPRtCdyGys4t18TiLifysasfTB1hodBBC4r7U4uyukagC1feKUhHQBDo5NBny",
  "key31": "3HqGSdwZyihxPqDWFcxGoWjBGkVYoPkbWdKq8FdDXmVGacrPnmYhZ4tZFC5dH4yHgJ1wRvaYQfexkR4nbC93sFhb",
  "key32": "4FQ9uCQaLuagxXccTQ4mDpYxZMJ4rRwNzydgD1vthjmr3S3Ha3LE85Nvp6K13KGqyVHj36wKX7q8pekAdQiYtcS1",
  "key33": "3TzFgMUKNavo5PQHRJ36AxUTkxE6rTFQr8GFoMuwXZY6hmAsmm4ZuJ8NbmF3FLExG64EbtQk6wyPC8GupnFFLtxV",
  "key34": "4MZLoSuwDdM4Fx3qMaAMHw1ZyknH7NVm9eHAi8LGqg6eRVNybaVcG154BiohYswVuYGu3m85mCrBsGPTLi9cW4g8",
  "key35": "KMcvWcJu9FE7kXzWCKAvshnqYXuj3raCPGGgexBvA1AJDCP6RqthdFs4LA9gtKppGJK3QV5ik8ex58dRu6vErj3",
  "key36": "5B3E4kGMRyECKCZC7qqEq4aMaQBFfYU5tN5ZuDLwt6iXCfXBa99VP9tvJH8pXoqgw3gwSNY5AFmgEj3ZSvVjp4HR",
  "key37": "ApVtWqDrtGNwvB34wmjkXh5pvWdLuGYUEXgJ2d5DU7xaUwhnAnRM2X61kSPePm4yp9BTuAVEqHqj31sTtbbyDFw",
  "key38": "qSXbsT3mZic4pfxpGKPpxy8QHEtFzCyYdfA3X3AzGL3HFYvbWdSryT7CZZa94V1KZMqon4q18UCP55FYCYnZebJ",
  "key39": "5qvhJrLCU6p5Hh9mgtkeKAFDK6iche35DjCyfr8TwQArmRo6Cg4qpDHjsH9B1LjKQ7t4nm7c4GEC4o59ppgG6X1B",
  "key40": "29NUMSgjKV7NqCxdeoSjTvQQnitmvETQyUzcGRPLm5oR6y8bHjc1S6Mdr8MxsnJhHgYnvAycCgQYBQJEeAxd4CX6",
  "key41": "2FYMwYHBr8upQKd51VFDccYRWe71fov9jeZdwVu7H9RjBEA8UWMxQz65fhm1A2JDhbUawrRhwQnG8wX4DweqMjxH",
  "key42": "4mj5wedML3Ed4F5HurJc95w9ggtDhwpMXUXCw9utRm2qgUxzCpdtzLpaMaiJ7SYHdcTTpbT5G5QxZBrnPqjTKbgZ",
  "key43": "2kc4FjqBp9MScEWHENbS3KzE6xvd36T5PVZmwShZ19FEAE7PDoC2yfCzmjei88jCueW8s7RBG5PkFr3gi2EjUth"
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
