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
    "x2gt2J8dH1z1kAQiFZNAXydB9PcLFCu9FhDtNQtosrPsk7cmWmNb1CTExFebxfJGhNQmmcGa1d48RBsWSZExitb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t8HJNkF6EDZ1ajb6bCXqRCQbzb2AnJXzaxkZT5A97Bq85bgqQHnPVybf9AEmsomh4eznwS6DEs97oL6g2mYVPrG",
  "key1": "3Qz2MZzCTj4p71SEyYD4TaxPEsjrZvLL997it5neL6MrZeTJpMbRrvwbbyWJTM8ufbYPWbyX7uaYND1RqCQgrNyj",
  "key2": "N62t4qNdG1dHmnUdHQcQChNkyf2UNUJN6Shm2sCYu2NvG2cd9wUV8DMYYtzjyLrM9L73zhXd2Qy9GLTNXhB52m1",
  "key3": "3SxsuULn3qdKN845hzw311LUdM3e5sSTG7SvKyUR28jW4xD9C9xojDcQ7fXcY4S7ubquAZTRcQ3FarP6H6mn2NjZ",
  "key4": "3zRPmEQB3ZVs12PHAFmqUQSN3rM2Kvg7hX4XdpCq6dS1A5Q4jY4yeZEkZnCyViAYLzeJSqXRY64VCGBzsWRDqaJN",
  "key5": "4GduuTY8jRfRDvtZYoPJwk7aGHSZK9Wu4e9S9gQghyDjTAVTw4dKBLkgabNgNdnrDGwYrjxSyqQbgkPCN3j4aNzP",
  "key6": "3mVkLqPYMNJJaenX1dYmbwTBXkNCy4gLxz45G17EvJenu7qPmm7kiPr8xK3RrQc2JWoEGNUprE2NJgBLuvVNzhmU",
  "key7": "3zE4MhhrTV9BMDMf9ojH7uAwtm1MzhixnDz6zmaoWTfhr5Z9Nut2qPwYRuY2y4xA5osoEL9wrT5VB4xfrWcLzLHq",
  "key8": "3oMe3HMmkuvKYaztdzogg7BNX79N1nVnTKpaH8G7UuRZ1kT9Q7SLbxxKDBvp7Y3sG5DMrbbuVBkVNGDBrAHctqin",
  "key9": "Rwcrf445LwqCQVFkH3DmgHKBuSri4XUsqYXQZJoaNCfWd7RPtkqfaL1DsyhEuGGyjvCDHdQLU1CgHd5KmQxm5jf",
  "key10": "3XnjyAkRJeffCdkdMNPhfBLqjQQC2PK6nKXP2aAuf2AsrXD7mdDB2QyShiHVq2y3NtxXfbg6VeD6Ue9rZYRAEAdR",
  "key11": "2EYcLxTC1qW6yiuhA7BVJ8SgKwfXbaSScL9c4Mz8pQ6wNgf5w3Z7Lwqz1RH2KyaUv2w1mTx59yhN5QrKGTJ8fa9G",
  "key12": "5mdNFQqVAc9kJiNkPQiypyf4Qb6sGWQTLwvQ1aGHps71qouM8nE9T5BxLXiA5jFQ1WpyBWfBVL464Ty5r5FXqhKm",
  "key13": "3xD9apdRpZdNL5df7WwJwduLTBhREcRAbis4HKmQCnJyKtaT6audRrbJ9uEzd6VR6kzFpBx6eWgeb2xgGmbyhcJS",
  "key14": "WvNb51mkvXB9XJpz14zkY4ZwGn6yRfdYZuBpMBSSLrTrBjxJZdj9Z7J7pkFW6BGD3UqUeVzreKKB21rR8kN1gKF",
  "key15": "C7VwbwAkf6bgGZaLEAugymbZv4db3HQCa9LEUmrfroKcobZHUdsvCmWbXxLThrakBKTsVDLmfytdFovD5KGx5fc",
  "key16": "2yL3QKpxBY2VUshQa3XuPtFCuMyVtqmVtEaGeKZ1tWb7XpE7MhkEF4qcSua7CCM7CH43iWMn9qk9HMzZVxwHX2i6",
  "key17": "4CDr3fu8v3nkX2xUR9oSdnmnhzxCDH78iJp7EonzTU6LVD2MVjNLNQmt7ktYYqP7UsMeB613wDbGQoL5BrmxKVd3",
  "key18": "476FmfdUefd2v1mZ58jEudhFLtPMMLxE9hENSNvBUFioE3wjoeSTw2htULGXqS4DXCuSLdKMCpJ5sJujeQbSfgf9",
  "key19": "4o2344KiTmxbyiqpDr5QmXznZsKh8jCuc5nxFcd6RVxsd4ivtG7P8xDvAn3sSdKGeQ3SXat4qy73rounHLRbacGS",
  "key20": "6XVftTToEyHd3NAiRnTtjQFLtumUbCswM2pMSAKLiAzZQfE7BzGHGkQu6QbCky45WKM5mpuJBXA5VYmBpezWzGB",
  "key21": "36hTz5jYCv1gQsGQaqymnxgT6DFEbMt4hXxEm6mR8jfZjbpJMZRLhQTPHowP9CnCbAJerbUiCvHzzuPHAeADsvWV",
  "key22": "CkhvBrmF5DUdNy7L74W6BTCFFFbDRzyRVRbmir9MDEqu1RQ7VMSEk3B2uBYxMtEAsRBjJgmJeKEa6c6wshqEYMe",
  "key23": "4wu3uxxmEqzApoF2GgMWZHUGPZjAxqrxfNYoYgWXSq8mRjmL7iizVZiK2PPmc43CTNHgfY4u7xEHVdStwutY2HoY",
  "key24": "CN2CkP1AvXVnx7DrovtMqdQGzHyos3PkN1QrkHiXhGGeafxWgpmPpzEYpgV65DHJ3MFRY7pYzMUazSmj6oPDCpV",
  "key25": "4soRbwYaVUzW9wTABTkixPtPpD8kkNphmBCVbFuHa5UsBan5yg1PT21uREFyP5rRg5LQRCtC3QNBuBgkRdU4us7y",
  "key26": "4rThbvADHcGpCG42QJwvV2p9X6c5F2ncCtEXfAa2xYg5FkEtYzqxrkxjzTFq4Pw3ReU34E5msiCqZPeyANphNMFJ",
  "key27": "3ZAWW8ufn6jSYnmWLfufX6UTZ6DTwdAM5gscB3q46FWdJqU98FLRCi1kLvN9edwVqfMYwmn6Th336QhHYbd9pV6",
  "key28": "5Erf2VxP2YfcceGSReqWbub6yHdtMCs8FAh7UUmyGcEddCsVgP8fgAZ9F2aon4TY86De1DAAA4qkVCaVGc2K1Pt1",
  "key29": "DuEduVShK2gYrKubQiXd6k6KExWSxiXDuuxVMg1LrZwUDy3A6fiHQ41DRqzjSJTJijfXNKKVScBiVFMFktA5eQv",
  "key30": "2HrTLUUW3mcBq1mk5mPtMCqnTd2Dw2bxrEen88YivxJvRW9mLHZrrzHgSShkHaEiJcrANYyKjw7Vy8DWwhccj68r",
  "key31": "3xAvapyXkTmzMDy6aELMvWq4DU6yTJBoMEniiPqqTabLov4rB1pQkkVssfphKW8uELcJAtCtfKVzFV7tQSAkyd3R",
  "key32": "2Fgs67FzEUXAxzC95zsTTEeDbNGcrd4iCdBPwqtPfYwF4CKfTDRSteARDePj5zFdcNAKsjrho7q7btPEwFtSPvGf",
  "key33": "584H7tKdjCzFTUN5Lu7pKyGgWpAUxD4XpBQQmcsGXLZX8uCUGobB6hLWBJSBMFdieb3eaQT4wF52pgqn8xWXLiBG",
  "key34": "31gj7pQTNeRchBE8yjAA2whUouHPe12vhbBtc6u5kEKWfbz2Jnf2yVwixEHpUZYUMBuu15fdW8BMrtqdKabWvN4b",
  "key35": "t4XwrdAxLbXv4TcyomkwQZJgqAzu5qriDR3eqSY4fQwkAKcJmQ3LH87aDqJEuKcJ44XMQBHAc5hvzcW6csohJFx",
  "key36": "4FZn2pBmXNS4KRH6aJ7Bvrei4XPxn1UZNDPovZD2B9sLVFdme8t6Uug1k98tNixdwydH2ya4czXeeuDzCuB8bxf1",
  "key37": "4mX8eoeqPhmW27ez4ZW2QTKjJsEZFqgzf4fGyZnfr7rE9zcaMWbVhRBKrXyPwPcR5vV5mdTHE84wd3rJikxTBKKA",
  "key38": "U5eMijvL45DrwNJb8YXtVbretGJVY1ivNMRXtb5V2Th2T1iXUAzNKA8pV4Aiz23n23pqXzeNKjz5gdbZfTWXazM"
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
