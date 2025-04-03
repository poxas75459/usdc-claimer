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
    "4g4WhiBprtAu1YjLcJqSPjCv8V85EkMuxPFFrQipfcVsZXhEGLVFUUHia8GZEForFnjvQLBv44gXJB7crnBzE8YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNiG3XqDecTWKoyAk8sUzxfeN5kgoxo8V3PQEhMaYXJjKFncfBkhRMPJA5oYKAfKszLjnmPnzgFWhb3PxXr8xjA",
  "key1": "FdDSXNP7zbUKJT2jc27XPpgRs4zg9kaKrdZdiPtXmvmZsUBVoMzMtMBWnP6jd5PjtEAf4iCnKpFRZTt1KZsiV3M",
  "key2": "31x65VJz3MwzLnjA4MJPpqRTpXEKbBN6q84aduPoYcDY6n4MQ3Cc749egNhNiBBx388VE6YChz6m2Y1NvWo3SBYp",
  "key3": "2so6JfBjLYoKhz2HevmdteCKAdkWGhQropAZD9juSRGxXasWyxSF3dwYC1A38k67ewQ7zKATEp1ZYdH5hn7UzTr8",
  "key4": "4geuYVRLZL1qRSgS3z3JVkAzrd2CyHdxNAwVFZyU6K9Y2u1DQUprWuGoPcwZbChBvzdL4bMhMfbPPvR1eqgmiLuv",
  "key5": "3F4Hqudy8fMN59vTyminP6cCEgjCXxkcVCikQHXY3rE5LEkJAimoHMfkCBw3QmH2XhYMySqweg6uTF4nLKtSkWam",
  "key6": "ZvBRDSSa2WFQzLH5V7PUTeHkQnc7oQKHVLJapA7Spp1pqgFDBueqoKaNKFf8mUtQkgKJ5fBGX1eETZ7FLVJCVXc",
  "key7": "66hd1LzAvDcC7RACQvAw1S2Cyp9cmKUKiXGTSeRoYcCL8tMcidJUdWStMYLsaYS9k8LNCpW3vPPGmSfrRbyz2d9x",
  "key8": "3QU4cCVkt66rZVWf334Ek8AvATNtAMdfVSuBMmTsC6wZ8VEKtKzno3ixbns6qUddd7yLNZopE9K9EYYwLK9JrUis",
  "key9": "2ZYNksgK2kr8z1fXsdvoUqpxWhW5PFEQAE1Z1cbWcxo1cmkvadCZdRDYYjZnxk978nQ95RxTVVzvVmF7ioAGNSqK",
  "key10": "5xRqGWFyZMFp9d8omQ3sdpNyD1cSV1pgez2q1gRSibczYTBMWsc4BoySjSTPuTBRjHMKZuQZ94iDkkW8eFfTcN8K",
  "key11": "2RbxKPzAekob397mWNQbuzyt1DVsVYwdzMZWi7eKDsTwUN2SLr7on7XQLU83hYVetSdqu5WvcmGn2XuGgWkMMs9X",
  "key12": "2TZQtfHV6VY1i2AF9VLrJavJZNGWou9KhYsYEw94tnvoRqRxkpaSiGDuvaKjqamAyKJnhZ3bwjoz4TiY2ncPPcjC",
  "key13": "5P7ighFdFnEkwKD8JtsrC7WtQ1iDoFi8x8YkracX5qAvrPVFMhHZjm5xnVHMM49xZKZ5xZHDRubYaktjWYpiUTRV",
  "key14": "4qKCCeECJuC46gqEW7vQFxXPgRqmczLNWMHE826UmD2X4sZ28qqqcvU1kLA54mqbQeqZ8myGoJQjMorFKUnxg6iu",
  "key15": "wdpEZEJzqYDYCkSQrJQ3FFqXvBUAWLGffZwYLCS1uc6rQDC2jyf6qbWP7KtHTEV86R6ahhTxrJxgwcECuNiK7sy",
  "key16": "3QAZNmCbTrjN2C4ZfYDuRYvw2Sv4S4uFVmFLQNveMnXefLygHPhvf3Nb3SdM5ygNgmMhGLFGP8uLuxxV74KnbwyE",
  "key17": "5N98FUBAbMArVYKRkYYtYaFbBdBeXgpTMWVoSGGsH4rJarmUrSgmrprRiCHZTDzTdwRRuRS3fveP2h516QRZJXVR",
  "key18": "3u295iPdExXzRYPXchV96e7x2wj6c3gbXCCmTSAM3c3hbVvTk9NfCXCbt698PkviRzGvroqGjzxWvL9XzpRP73Rt",
  "key19": "4NS4LSBgizGByjWGDYuMCT4nxmD9YgLSg6dC5RanPVgtZHdhS9xWyYBaHmFMGMsefAh7h1LVJEgSrYbuXAYo6wA2",
  "key20": "2T9rE6mCLNGVgQjK5dNwnfgRg9CBJxReAEEQbxoDtEuYEppvZoXJDxnNDojxoZBGq9J3fsPrEBbass2aqnJ1azs1",
  "key21": "5B1tQv5WKCiRa967TKNX9PSh5j4LEkfb8u7AbSi19etMbTq2US6nD8i5hUYFCCdBCBrwsgkbYYdHNc3MwxHMeqk5",
  "key22": "3VM1ifpZa9tjXTsut7JHLit3w1S6eXmnR5qWphtNZw5Gn5fxb2rwsjTkrTfJepfL83ixEHPHhJEzRNdyxszhpkfG",
  "key23": "31crdwfQfSUfk9R4hrMYRi1XPrPsm8TTSHrzQq6qnNprz32cWwXHQLHud5yFPUAQBVXBX8PYNX3dZVddo7d1drzS",
  "key24": "4tvAzEZjpUWKgMhubyrW53q8pbft4afygKw8PkEWtrqfNU96fXTXm8BMEoRVKiscVcVzFDHomPL17xqXYsna2p1M",
  "key25": "441x4GgEvTPs4u9CLkcLzQ2PWtbq37qq5dSbFh7HFZ4EiZi7fdZhW7GayUEQGLMxRzvoY9qZrHbdPnv4Rdvn1Rvh",
  "key26": "568yZBm5iyprmw7Ma5C5GsZTJ79bopDqTGAv2TwdDqANacYhyKSEeYYqgBiBqZJGRJg3gEt6syJ6ochnvVoihaTx",
  "key27": "3A8GC8NCEmRaecDPZk5kVGVXRqXerYF61SaVKgTciXjiaTQn9TySHeggL6xb3niRyiJzTu47RqbLDPGpJij5uSk9",
  "key28": "3UEQZ4UnNm6F6B2gAtGR48ubaLFsC91DMmaorg5HbZiaxMzk2ee4vssxjf6c9ZEMd7SBAdoYUrUmTtPptkwNpGmG",
  "key29": "4H6G9PDMHGASkXJ3Q18sj8gKG4e25ZPwoYQTs69YudWmvLpZdVm2LtZ33Two2URoujBVTgmD3RW2fvqGXWJZSxej",
  "key30": "2AksKRkY8Aa1mFZh3MABp6XjsAH36Pd1BT7f6UgaKsHYEbynfHoepkLo8EZ29NPaK62LnFRwqJMnYV4EkRR3rexh",
  "key31": "3pF7MMXnsRf5fEdmdSkxHtL2VDKgqaBDryGURKnbAAZGiDJrkthcNcxUDcsrWbKKczbJFVmG8vjvzktWxNSQPJYh",
  "key32": "3Ye39F3pdUjnT5mp2NZRQUfV8yJdTnMqoBaJ21po3h6UkuFjkUfwoJFWxyUbCS3gwt6NszUXwSbU9mpZgbpU2mGZ",
  "key33": "4bZPf2YMEh2VswtLcvUopjYSVQRkfrBaVBd9HqJq1ndmuaboinZSh73JZMq59z9zs6tZMXvNFC5x5jyWWvmsBFZG",
  "key34": "2wEr471smp75eqYt7frf9LSAgpoAKdGME6J6pD1DsvsE649pdSmD6XTMsSj35FUKWzUYHcUJFM9USrGwEegTVUhM",
  "key35": "5AE2bD99AEqiUbqpQ27c3SEzyUM4wyQBvkwhP3fdbHRyEaHQq2QSjjN3fUPqxuPKz3bkQ6henfGDrYJTBNTQ5Jj8",
  "key36": "b5ELuWWKguw97YFfyGE584ydHkyeZWVcFkHPrgv2Hge2n2y9G814uYk3F55BoP5NAMYU1V9FcDHbZdMfUWb428y",
  "key37": "5ZbxpV8U5hbtS4HabAZYSziwMhAHkDpP3kaM637V2tvdSn34eCW88XRf4X5p4BJbKaffn36tdxuE1NVDNpRsvW2y",
  "key38": "5NJjRpizc3LxBawCr1shfsVKdjfxxVRHkhGVpJAzRPuXhPgemajytEww7eoqJdJGf7nBCixW41SW47f4NG3ZEZbK",
  "key39": "9qfwi2jdcTJ6AcgMjdELbMtj9ZYdiDpDsL7tg2Hhmy5eFkgAPvjbAMTS457uWawKKp7gKgMZWN8vMveRqGY8FC3",
  "key40": "3RhgNeS8iPv9aUUW15svhiz6BSPJtYkEtAu1KubgU1h1VbXfwewAK2VWGF9oXo5EM1vmxYiYRPZq78UeDNRZ7EVk",
  "key41": "3YVevvyYnXUEQTw8LGLZMnpwKq64cTk5ECmBsCds1wVYi7UV7KuXNF8L1VgUS7iHDs94qktcG9wZTHyxdT3oNLvc",
  "key42": "43z7vm5eRCLameSjALuPVfZLkjbFjfKkixCGmimt1RQdXVxjkpFwrMLBa47Wnu3TsAQpuEcvgeh2bNZgvjyBu2Mb",
  "key43": "645R9yxcpEJVBGtUVt7GozrZ1x2ziWdupHgXFn3jhWmzmkyuegvAZ49ziTShVxw9surFFEuiwxChiWJBvpmXKPXU",
  "key44": "5gMTbdxF9Mx2pUCiCtTv8Vpz5LTF4k1ybFRpNEM1Trq2Mf2p65AfnrWu1LnrdsXzq5nHAWjGSg9PjGor94CX2H7G"
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
