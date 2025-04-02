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
    "5sUNi9ekaHEZQNWJ93yEEmRqHh4CRXWeytwXtAv3HTYXbCL6ZbdZy8G7miAbEf4eES72GBRRUKwspYWoo17MnHtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37VmHEvrMV2fsWzhZwKHm9dQH6JdcK1Yx3p7quy356MUxZkkxmu2ZAPG6BqCNB1xTWWUkeyJJBGVqjCkpNh1Wg7s",
  "key1": "4gL6dTr4c1wQd4U5pqxJ67eWG46cuNSjSszur2tFqaq5LmQRnexHAX1XFETNzZzqRoS51CK8r5HzGcRgQffEDYPc",
  "key2": "CYhoAkdo4Fux3bUBF4rfueML7u9V112aNrB9MTLiUNLbRuURQKyMQX6ct9nQ5j8FB7fXwgM4W1gq4tQwJrA9MXS",
  "key3": "4hWYyw537FuDuCAwgQmgQXgKzfBxkKCNc24xnTNP8ebhJbEuZMSv5SYbtF24qUaJHy6pTg27gRn9gdTgBCKN9Q1k",
  "key4": "5j2Li3XCZthJ3f7Z8auJuYN6CpktZJqRWMPjvHyj2v5WwJKD87gFFv2U7Fxq18cvSnqGF5hPSzg6cHC9uDREVUGh",
  "key5": "5PAM4ZbuCyXzsj5TfNBQHBNoRpbPJinUWMnLYXVy8zqMEGgtHh84YVYFDpM829M1mtGnPXY372txaYswqHhHWyYV",
  "key6": "3TyFPG4fJ8xS8zWz3ebwvME9b5mMnN8CHimqY9WPUNdHzjytZneJsa5H6jpE75yQRdpdin13HaSEB8FKDRxuBHdB",
  "key7": "5r1CGH7qyV653xd5cGvGxkC1D3dZCDomz9YEmaAXFrdqhn4LxZkKQ4tuE77jXAUebi5USGdC5KwYjVSDwCUpXQ1s",
  "key8": "iAS86aDDn1Q12NprKf8DnYPbJrFN2zJo9RBbkHfpsQCMcLsXp7r3Ekz2ghHVyDLLveZWCuhqpGEL5KsAAkXup9o",
  "key9": "4fz8ipQ6mrKmU2cbdSSLm6VdjEwkzoh7mZo1QeNUmXk9DZWdEqLGrkSNgrkN7MRYuTAKU4to5F4gcCLTbdZn9bNB",
  "key10": "2RVk5Vzc73AZbhNPSoq6nGVivSDYbWKa4i4Diy1SvfuG3HQLi1nE2FSAqLLnqYNNGGqvwV6nZU3Xu8Vtx4QG8Ppr",
  "key11": "poYbdsSoEuaouNQeR4G3e1t4gJnsPzGqQK7BJqp8PrJjGmsYp35ajo1cLZs8Kozvutwt8khbTD4iCjRPsJzEEyg",
  "key12": "4PSSar6xoNLsiXf9t15EF1EBFNf3ks3JnVVASXYniqPW3knkTn83HbjRxVMf4g8FRR3TSBVF1VhsgZenbbHpw2kB",
  "key13": "345ZxhCKdhpmeGTnAkbmMjUt3d2oUoEJK2WJ9xkJzkS67fdtrjvYmPwvMH2QrjS9gQ2gLDHcwfpUqSxSxYdEvSRp",
  "key14": "PQbqg13HWN6at8zm7eRn1RZtnhZ93p2jXqGPhoC6pghtyqJV6DL682kvAcrcd3fSgG6g3h5HnPEQF28xBeDeZZD",
  "key15": "31MLKg9KnGZJ1GD3328T46kKPQHF5tUGAD47htRQjbHSTv2izU5tmsEchGoWYQES2D3w7SKBW4ssdhvtKYSH3G7v",
  "key16": "4BtJ4UnnTgVMTXcxZR3cgdZchCoDg12eocCEt7gxXhYG7BgGvobAET5PUsyeJEjieHbHXZgLfbXnhCgtPD6Jx8VM",
  "key17": "2BYpohhmTkkqwfLnXm36XNmyumud12GceWd95AnJ52V7pFNzxrLADUqUiX3ycFSwv9ktFaHWUDVBqYurQ87NqJTT",
  "key18": "2URMPZ4mKUQiGwtJcaMjWAw99yfDYhoaDp7RXgTPnGRStCaMBhdt6ap1eVFncJYWb5FsWZDBEdVFxvtaUtzhxd2j",
  "key19": "4PvteeoyjgnGGQ69KCVJYht16aSLbB9Kzo5cirbqteWTRjioZQc8ZdLuWzMHghXaQ8p7P3dVBNuGKHyhLununS8b",
  "key20": "3B4PGuqiCnomy9xExF3arrY7ZFR37sWNFvGTuDKSFk6Jzpr95HYqBuz6U8pXzDvWUshcv2TNvSHdBcaJBMnYLwjy",
  "key21": "45XBp87QenMKaqJmjzMzwVgiLptXzW9CRpUShnMV3mvXiPC57r5US9puFQWcXYR2GqW46mdoAGorYhnaJ615Ey3n",
  "key22": "BSCndzMXk4d8cqdDF1cdV3XiKUkdEfD8QGpE7a4j5Q5hcD9CqsM6BvMx8mpwEnwtj7E7KX41EaBKdxy4QWvQAsu",
  "key23": "4oQY5BRmtELowLakNZxA7wgB5BFkMQHL7YKdqtiT2Zas1WpEJXPK1w9KEmgyopqmcdtxHVbE2QMyLyAtbKSv9hZU",
  "key24": "5s8XoryXL92kEC1AmuFCRFSo52rdpEbxGpjCQfQcC3x687ZQPXAHEhzc5FnGFHFUePt9daBYW8Q1EGYMX9xKrQCN",
  "key25": "a29NrFuLJkhTNUDgzqFmhbkgjCxqCMKX5JVevTnigsxxQYH1umVyw11kK2e1sDYHJhHCYV7KGjxAfEewtYPXCyb",
  "key26": "2x4MtBM6zByEV5EkmidEovie8KVpMTN5WhRQZC3Zbv9ndVSi4YRoyyk9XttYnhQydoZCDEnwv4wjCBAJFFQh4ji4",
  "key27": "4AQ9abR4id4BbqFEith3ZukjeaXQnQ8CB38DVGQJpgvKB7GhB9MipZtFk3KiuHS2p169vfsP66d1oc4ZUsj2wGci",
  "key28": "422nB1A8K6ACYBfjzSRcn18EfNCeAU7JV7efMfUY9bYHBkamSXYEHaxbPcrEKkoSHTX9hN8Ngv6ksXmUXDFUh8KA",
  "key29": "BWiEQJgPVyw5k8GqEGwQgywFjpsMKgVRsGGCQ3Noiqv22xsWciBfg2idteiCFBQt3j85eUjCsQW8yyS5g16BEHg",
  "key30": "5ZxXBKxbpGbGiEtxaTzkNVcyDPDMkeh32uY6CL2vgz9oHnw171NNo8uckhzaFsz6aKw6AZPP7EDNeMCisGiUzULY",
  "key31": "RASwt35jAcYNpuSdGbURkr6X4uGWnArU7d5rqZdF2a26wBbuzLtfmgophhK35Fpiwi9Tibnm2UpfPtTJJzi61ke",
  "key32": "2mVQnVr6m6XZfkuVZBmkKyzyh4rjUbPxKxd975151y9b9JhMyqqqu9E7MqpqecfKUdtUEkoaszZd17JAUtX5Y4gD",
  "key33": "5tZa3jFdE7huiaAboNhck7GabZTk33VPnrwmDW3BQW8fprWYf1rwBd6LcdbMy1R7UyzJGGz7fRbet6tTszptCvGG",
  "key34": "Es8uKgLCLgMV2WyTHfo55k4X9ejpry9f7aJgJs4j9Np2bmov6piR3aupLy5e9FNzwgimhszVKWVmbaUYzfy8PNn",
  "key35": "637cHZQjPrqDZsPU1RePRyanJJ4s2354EvXYLgzLP1nHM7VHBQnHxLdAev84JiWHbQh3xsd599BpiKmd7NiHMPYx",
  "key36": "29vFqsJw6P8PY9eN6b5cMXQho2Lua96KmGFMoKDUkmpCVtAD1JR4aKuA8HJPBtefwUoNcSLjCLC13KcP3V4sUD35",
  "key37": "64c7bjTJQb5jny4oAqAhoCwE53mk76X3M9pKCJ5YBzAzTyVvMxVDYgmM4QXAZqTaThiE1ZMdowzipWgaVwj6ZVAK",
  "key38": "3XMaHzkxJgd1cbb7chSNjLwuR6ddw7xirNkcAbJsVXHq2ppMWVtrFLJSiaPZnoJRCM6h9Z1TZdaGBf4TsWWUbwaL",
  "key39": "WJgTokurcdmgzofka7WvYgeZmz74UZLEWzEcDkBSksE4sWayJJ94op96rqocjerjNSEMoyD29jjxh5d6DTWZL4X",
  "key40": "2J15xyLS4aBxm7zFjmTVKqx7XegPLBWFfyojnnXypDeVt8M9DDMrubrzpmcrspZoG9WVuv5jM4k65dDVTcnLjW1c",
  "key41": "36J315A6FdRD5pYSbtXj6paHih7ECv5f6X8Lp1huLZQV5Do5miJU1ZpLqhNv7r4EnzKfLoHS3rchna3SqXvH1UuN",
  "key42": "apgnvJxoMx6oiUs7onhpfMsrp9eGbjEgG2fzKPUYnbWyXVVyhdaTAv6SDjJ9d5ZSa2QE9Ndm4ZviiH96H3ULeYi",
  "key43": "2pBdE1uGSAXeNBFMSRvyhuX6xeStkBHyuUYQqPnVRf5zQ2tsYzv9zdeEBWmUNfrQR2oXrjQc5UB2rhpniiPSGc1V",
  "key44": "3p27V3uaVWuh88WUePgGNH3KBj9grGpmzZuPz85hK7oRqBxKeFJuBxZVujYLgyqdRM8nh9wVEsxvvgDZstNVyeLd",
  "key45": "3WH9qCPTetp7YR5LAa5veM3DwegsKo9GAc16i3Suz6WVrTvzvGfis4QpH2sXAymmej65RmbhfJN8UERSigRbuHPR",
  "key46": "5hzp6BR9VmFXASwU5GnLTg7TtG3QHEv8GNMoo9HBTTei3miMB8raDy6eetLtyQpEfoTwCsYxERw3zczmxsCnJpD5",
  "key47": "2dUb2YFviPKvZD8UaDPDpivqF3Pvue1qekeG6YKWKiBoGEfWF3uELMdaaYeaVRgQ5XK2KC8Jgt6pa4FwXCfVc9Uw"
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
