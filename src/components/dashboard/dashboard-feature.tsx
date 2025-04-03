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
    "GXgNNJmnircntUSwKRUkVkYuacoFenBzJGCr6eUnYCKf8yVCiAPHsKiMU2atqDD95SRyKyBwxcC9sbzez6DBptM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWYt4eZEDSHT3RXSnSLtfaxPAuaXRcWNB4nmToCJojyttUwhtJne3UK9qRuMrxgSNcjMgiCu4AUZm13GqWQCXsh",
  "key1": "3k9MKGXMUS4MrJLXDpPycSomWJpTJDawbg6gc6MddidEYU1zW2cH4UJjVXzwvoG3bc7wNoARihCUKrEsK64uV3wn",
  "key2": "3MNf7G7Q6M6PyN3XJAfSSwF2JrGSpd9uoETP9NMWbrXPrRD1TvE11RLqRN1gvCnZjGLUA8DtU7jxnDewMvjy8GT4",
  "key3": "3mVQhhvXq6f83Msn58YCuzA5DGaPKKfuZtu1j68ytvp7JkCMncTXgSKEyrCQWrRKWc9QeQ2zVK1CaLPuS7MB7EzV",
  "key4": "2pTCcAiSGQ8wYg3z9HgMfYsUXChgsTCQoxDcMgHnj6eFK1k38K9er1snyqr8U8L8vHRzRU8S4VijdYL5UMuh5Rmn",
  "key5": "5rR1tcSR2tv7NcRjH8N6eMh7X6BZeWQ6cp195FKwgxNNpaCXgjf5co4Hoqe1XmTumiu8Sbv8tsKG5mNLzNVXUxyx",
  "key6": "3brBRE9SBvNfm67YDXi9R4ALaAb5HSG1SKVk3sudY1WQDCWdXdYe3mrSo6MRUErGXsgGsocuTp5QxyfDNM66UqKr",
  "key7": "5BL1NSi5VuL2iVAFGxqrhiMEeeoAN18z8hVzBRU64tVNtteVNoyjmfiEHKXCyFBWCM31CKUEr2G3itm2DZ2diUaH",
  "key8": "4jRgcRgE8X3YHgtDCPZ2eGsamDw9f4PNkT7BzbjXekNYHdNnivYmFaqqD5sbD2UqhkvqpdsNtd6EaNVaFDowfPcT",
  "key9": "3xrTRKc5dHPbkEBXn3Y4Z3XbEwfDUjoWuwXKJtYWzXhne4BmDYewpnWxdUCUtsUKWaCRDdMiiVUjg8jMEyS1dAHn",
  "key10": "2oJZCaqPxNiQrTVths3dPM5bJdXkp3iunn8siMyLtVviZ2dAByMRpw1tm89Ve3mNmwxcTVCAGVngRSUcQRcXwSBU",
  "key11": "21fqAoe81suNo637Fnp6Te2KyJNAR1bwn6RLs5F2jHXoJWGBgfBX7Zt1kkhPH34ppgDxrtuiyr8krzEwdnukbThP",
  "key12": "3QK6zBzibSqAjzm5XL4XUSknaxEXjNwzuMf4smDGQx8weG5rARPPXVkNbv2EhAqHY7TdTp8z6fkjW87faFiunRaY",
  "key13": "4BTYbMjvgSAAazn9R3ZWptpZAfardAw6vGgRwy7Tza8mxFdw6p5N1FUHb1R5ZvyHXbGx3h3HtQtTKWdwFnzCdcK6",
  "key14": "32x9UHoxhP51D9ZKmKRA9mb2CA7ETc5Yf5xetRL1uavVVAxkWQsXe8CEC1w9RhS5gMio8EJFYqKRjgvmaLmb23Jn",
  "key15": "4KRf7X9QaWcGB2F3pZpnbrSQ71D3AQHQhTDTfp32vKeTGLmRVkmWtUuynAJzjaBMazHz3LkpR6k5WuQh2tFgKRkY",
  "key16": "5Y5TLzJseaYJiK6ypaUR7fx6USc9y59CnTu7XktGNNqpDgy8Tr1z6dwmRpefLYo4oVoa6eRSnzvNekjfqqZ42XoF",
  "key17": "3edGtbL8hwm4hcAie6NC3HNGrwKagUgRLErVt2brp9n4pJFtS6XQhhGDv3zDgyf7BFiN4EiArwm6ZjUunvWp1Z7S",
  "key18": "36Q57YsGzp99iTiGftP9L4n4WGkA6kJRw6jbHTboVzVkgY4GqEpMF9BjNHkvRWm3XZRHSuHRKpGExYZDYqjdNCWu",
  "key19": "4YBQaVRwRUhPhmQ6JHpCcxfUSe9abb5nytKBEY55zjhAE4soGVBj1Bwq3aK6LHVqakiwAwAJyhAV78DDrLGdcfJK",
  "key20": "33tjsP5A8t4RcUodfwiKDc8fSuF3Xc5LcCzJxRLDEf5LLu2Do2S5VqT3rEFZdQ6v6YVNZJdUKLNDu9C6JRpcitpk",
  "key21": "UTMvrZMUMiZgAWvZQVJcg6cSvAjGF8ogmomdZT62ZS4KGa7L8dkvq8gXEuBHGTFBYDmg4bqGks35o45U3H3HaWg",
  "key22": "3ndMe5x74YWz9rimtY8mjDBh8rSyno93Z56nurxk78iFbhEUutEpeDnVbVaVV276jYtantdd9RVCxjkAMKciWoDK",
  "key23": "3NEskDtQZwgiruaJGybzYi5zpKz1Zp8XFdvTjP6zPtfRD3Y7JBWiuZquFAtxv8ChHE72ffBEvZiMV2Bu9GKm1c9k",
  "key24": "2FYaNh6cNQZML8TyaYprU2XzpLyaKuQhXwZeP3Bso7omW1WB5cxPJqofvUF4BMZkJSf4JxCZDP3w958UekvZY97s",
  "key25": "54qygNMphZdfjRVuqsK64UcL3PRKAzUtpR57Se8pJ2sfq2c84vgZZt3tALULbn3hza5v1GiTr7ENqFvgLGxtAqc5",
  "key26": "4iVNcAtKd8kXjG6ww3ckPFi2EPhmedSnANbh1LB9YZe9gLQCZBBDDuxLCHMn1XZis8tamfGqqaR1uZ3j9oKb6GEY",
  "key27": "5jH1fs5qQkzjp3njHTi4Nq2NbxWiSHnE3z9zTZguzPoSzrYfm9arrkhZ6xWUv7iLfzJjvxMsWsewYWPo9k5Mq7yx",
  "key28": "5EjV5w6DJBDnnmHV333BGrhW9D9tdGPVYSqsxBKLJkwqkh7USNV5W2Anw5mr8vmdRaaRaV2iDn7dYStfAxBmGi55",
  "key29": "3vLHyYJFj4hMYBejxYSZFtgNJPcLbyhK4GetdF4tj82z3Pvz7pj5WUaw8H1NaTB4ESxwFhsNcNizE82yUakZtKxG",
  "key30": "2YHHDBqLov1Ebjp9sMhDPEGtMBHpk75as4e5MMuGW31hM6Hhxiwa9xzH9Fy5Nj7xKXFTxc4rfGwYi1yNwV5VUCVk",
  "key31": "3CxtZRkYTgdxCbCV6iJPDCxZyrZ1zFGsdinqyv6TomMo24uBsYMMZgNpUUC4NJi3eZWxgovJpLJt29zP4JAAg8HR",
  "key32": "5Kn2EWEK8UeyFqV9N5J7uYgb46TqnAgMAmdRq94K7EN48X6jKvHNRMpj2BA56scdQiRYaHMeQwf6AP2wE77Mo4ur",
  "key33": "4WKZuCjnVNgqqXjM9v9CF7MKMkxdgSsWnaQuYb3dqgBJQCsRrsLxDSbu92zxqYHu7vVcJio9q9YkMdPHH3pNLZ5U",
  "key34": "5ZEcPWSDExn6VobigDMs4s2ov3s3SGTFbenss8PG8qU5srtQhySWnfZaHkbAuMZGhDXTJGrkEyiN6ZDahbnRxGmF",
  "key35": "2pzsLRKFrWQwC9DZpKf2iE9P1GxEdAydVuK62NYc29WZVt3J7gvHSAxenL5jVvpkLut6kdvYHJbbFpTExyTTURNU",
  "key36": "hcGncjW4LMgome8XB73NvYycUdc6Un73GJ6RTZdvmZScppw8kPAc5xpmfMVY7vyS9W8GLWSmrhQ2MDrau9yuJF3",
  "key37": "3QKJFS731fF4XRHR3v21FQw93RFwFFo54Jsf62J5uMtNPamnobGs1V1RyvKgKKd7FAXPHF18oy3vL2365VH5J2j",
  "key38": "3Fr53MpaT2BnBnPGrjZ4VdmvrAfSDUUKviPzjkenyirw24MWthHXRwU1VRaQJ6L6RLfQu2qLm7oBhXCQUxM8Hz8o",
  "key39": "2ixtP6WU6hZ9f4bw3CQVghkoVvhu6HXsicZW7PXxv9rcpvWic3CfV7K8UrD31rkvYkUSBw9TwstWaU19aXUSzxJE",
  "key40": "5h13bzfgrjRnuQqGQMoRiqzSdBrLV7Hrj5h52Sg4wVvHuA5PMD4k7eP6zFBPxnmuJpKANuqyCCh3RoDqa18QVgFn",
  "key41": "zuVZVZE7PkUSoSQ6mvGTqXKFPiYxbtgG9rJuXQttfhEqYG2NU3SDHytHu6TKth36r2pZHAYMHjHdivH9QQ4uveF",
  "key42": "3U1LgUWYgkGwRxPF24P6dfPnT9PZyUhzwepApPCpjUHk5h5AeKnbAQfLWUYUiVEmVtQVHUazDzR9BiEyje5Li87w",
  "key43": "5M6G483Cf4ct2RZTucm5zh2QqX2E1SpnNuLCShVBtu8risGUhbrTidBzWUxd4wW5Y7wwovzcpzYJL7BjPoAB1C2Q",
  "key44": "34RVv4KhtThZHTgjRwDopbAaMk6RvozaVBdg7SHS9wj4nHeEqpgaeiTrDPBQkDmu1bsoEBHW1sXeksQFEFYcAsEC",
  "key45": "62qFr2PD2BMkzhi1QndEByTe6y1S1zxzzuTJJznzX4PVaWR8vy9beWf2WpaVv8dh2TdqvBmM7rEiRP4uiWvMWzsL",
  "key46": "4vcSooKL3oV8R4NAK8tUQRuF3Ljy9JLcPJxUVuAn37XZpqhyQ2WpMyokcbEjcnVpAn2sKu2mQKmbqiQoLsgTrbkr",
  "key47": "23P1vuHdDuRy3ZkEgJteVmTPNVDyQTGsHeE2jN9iGozLPEvEJTK8EAfmX7xbfPoRkx4uU1tKwrAZ1Trcym7DYiWQ"
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
