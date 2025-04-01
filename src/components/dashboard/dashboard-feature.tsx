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
    "4nY2JkcZ2o11Zy2LTQuAEEdzVARkCroiTVNRLzYYRyP7HFC4r1tpWdRhpyyPk9GEFwmpdJD973CwEur9xgVn38DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xSne4DLjTzXbwShC6712mZhwR9YZYaSRghiokNXa6LpXx9XYqNES8ePrnx53c18XzoCLRfrFbM2yqGq2a8HcNJC",
  "key1": "3KNAghZfhtcw2p98S9duaZxASx1MyipW1tpdGoBHTKkDCB5LQmc6pVxaW4eanCKBZ6RdnkC1Bu6rEmqXnkBY3Azo",
  "key2": "56XVm5EKrXkCvuUcKHivmaVrbKUwn3q8L8UmLQv8jMncyUKy3vn8b3kHApn3Gmpk52nYDY7HaTR5xy5CictDXg76",
  "key3": "31sYBiabVN6XH31jm9vUCXVeXxWq4j1cTau8at6P953cM9Kh7HNWJznQxT62uJK7UV1wXpYcgJaN4tCYtZk6GUo4",
  "key4": "5sFBJj3mFNV8UGaYCGngLadnF33jMsWsFfERfvxggiBbMFoMjVDEJWrLXNxfWbSZGzJo11RFx6Vb2GCGZYCpAGGi",
  "key5": "2NoDBGeYVRxTzt6cjsnSDnHyRkxHUVwBTtXZqH7hhZMG1eiYMXpyaqqBq6z5u5EzxaLKGX34hUEcgx1yZ5Z9iAYn",
  "key6": "2PEkv21qxBzHSFkA1iiXLXMkwa5kjZS2JNSwW1ZchxWu2pjSQY4R7PL3pZeRuuSQiEVgubJH9YAehnJ4qjmMBFbK",
  "key7": "3QEaz22PYNFwwQnM7umdwmzzJjWvdaPRHD8RN76JaoVpG7kBC41M6s2Ne3RakREAuPSgndZgVRpiyq2n9iXAsufr",
  "key8": "3aKVBftU24e2on4RstMKgVUiYVV4nruwBqpnsLtTLtCVe1vXd7SdGvz7r5KffMtq4JxHyRqNvh9hzjGzfpZeBdUa",
  "key9": "oeUt8HzyuG78o5oEcgnoyGsQJMZg1ZXqoSGgwNj1rJG7hrhJpMXMK6VSozLFXh67yLXRhaa1tdQcTaWsVYTxtjX",
  "key10": "4Vk5DRxaEKZY7i5CeShWH6U8RKENCS8CMnoNiMDBLe6T7f6ajQxbp7WL4zstcmttZsFafwfnH8wdoV1fUgJYuJba",
  "key11": "5RANcU7iwEreZxAbuvcCvSdstzKaC7CZ3Ntgy9NBtotWqYGFpK5u8fczGT677xhfBwxf7C24pwBgj5MvoTCoQzak",
  "key12": "3CRie7zzhCCHzXgLRY3muTnBMDvCEagw32vP2Hi41gBs9dKT1AMZXxY64cfsd8djRbSdcd7N4H4FDgEmpC6u7Qf8",
  "key13": "4z6JJeQmSYPVNRFZQjyLLLFy3d8w42VxKeEXG1bgm7gpfrY6eQ7BzZmFKSrHAw27sbkptgMu2MPMRbvwkkGYkDjj",
  "key14": "nejDwuBfHyJD814EdBMMW88SCXf5CaVGKuJdwCmBjWE7p9J95nmRiE1wzHAVkTGG4vgzzW7jTDhCGjWFiDanpTN",
  "key15": "5SqArDFUqUSpXpP8K2urHX3qcV6vWdTmTXFtbTKZSBWjCW11M3Zn7RWeBg1Gc92D1bWpjXqo12fVRnAjoRhFsQmQ",
  "key16": "5BiQkTzfAwoiDSy6QbLzbG5D1QWmfvgkiyp1rfecJAdiWvbFy4mGAFTE1RtEDcmgRWcmrhM1MwrQAahKWUY7mnZ6",
  "key17": "5SQZiVGQYzxXZHDnJdRtjtcsLQFVtET5cojphG44fm2ZbNrqnZh3vJcPbzXsND3iAe1YsHXQU6GhffWiEkS3J5yL",
  "key18": "X86vx8LWuzPjic2CV1ywnofkCWWstMp1fV9dZaz5ocu4BkS6FyWNQ6ae3eKuZLJdLhgJmM1Qrt6jYtES4HvGsBE",
  "key19": "5GZ3hFZixen1eHDcg4jSXGt5cgEjs6JcvTfDmcxuoryP3uRFzjLoLxRsdZ28MNsp2CNeLs2CmHssVi1t2zdkvqzD",
  "key20": "4sd5U81v9FpG6fukJ1UeFc2SPwh9qZkALTNQTzd5ar7GXp9t8HazEZLG7QdHjE1kvZshGRqgoTXq2pBEZKGPqtGR",
  "key21": "tZCqVpsMZcsTK8UkfLmXn4euC9dnMwCF7WZMiGDesxAh1mVcgRDigKWwcFQTEi3XQZsyFk61535b3WxiDeWyUUQ",
  "key22": "23JJC8RgY5dkLVicZuuem4Z7xjNAKMLskFuGxcLYTcd6Sj6kfFW556FBpUb7NGzfDmW4fAZwJSxLFJdm9f6oezuc",
  "key23": "2WjtvmuRQnsPwCx4g3HsXo4z1L4E4jAT745f73BUvU8Up1bUhPN8THhedu8Nq5LDqwu85aUmXHCgyt1oAkt6e8Mv",
  "key24": "2u4i5xjR9TwReg8LqeSFWLYLyQdr8r3eqMiLqhZcX9ov4DFsA3hJxbj9ZDyS2bLCsdhJGzxMeqjiTY82u7v8EmNo",
  "key25": "3uvzCcsTfGJBYcwCHB6EfdZ3AfmFKuk9RcfUUQYX8tTCTVcJp9iu15hTpFJdtRbXgoCL263wesjJv9txd9QdoeFt",
  "key26": "g46khrkcmm9xTab1eT1TDNxKB1QfzqFwagxfdSJAeEqZi7PMsrPqoDNCNJC1Xgx1sCRF9ymUMzeiDSLD3kSTdbt",
  "key27": "42CoEvbwRwGqWHoDmLdw4cDoJriyT9fWaQDfT1Dbw7tTE8orq8zmeVEvKpPxtz7VxEnw1HoSkN3P9RcmEA3MDuar",
  "key28": "4FVcAKQL7y34ksdUT86sN1oPyxNBk4VtXFzX8qq6GLpykK7yGkwj9MobwGrQdyGQ922HnQU5RAAckRJLuab2R5Z2",
  "key29": "PaLAqKWWpwysqqeTWyxk21bG6MwTZfmmjDEnuvDk4JrFd6cotv52zaTFcUCequVrRH1khcZPk96b8eLWujAtNzK",
  "key30": "3MQ7pmcTngPgWtWLTvCcQq7onT9xxGJyKLmKUCFbSpGjhR1Hy3fgco6GopXXGdaEP42ceh2Z1cbsKZ8oACu8SaGS",
  "key31": "49aDVgWRCWwK81WL68DSRqor1dEHGkShtKbzWQzMJaDBKGMT8eooQf6AVXXq8ppqiejY88nMCPM1mPXVL74hXy6k",
  "key32": "43zJB153g3e1obK95bTQG5Vwni7fhKRmSDMxfMegdnQmzxMzCruhXX2RZyLEAhSnMhxVrMXRAurKvoi7ReUvqZUs",
  "key33": "5kYMoSSxL7uQT1xmp3FAjkcCUdh2fsfrmvDAsFTpm1jgHzof2VJVffvfRff9D34uSj6QmstxRy74gMLUSBXp6RCR",
  "key34": "4kfeFc8wrjN5bp9a7WiHqDeqvVXUn27mCbaVzcukxfjNfWNYTp5dJ3qyav9HMtMwLWXexWZwU3wRyDmsGXXW1yY",
  "key35": "3Y9SYAeGrq7qYbBvxMVEb5LMnJqW9CtyZc5Fr9FKhYxLS73HAB853SQtGkQ9FjSMRqz4ovC1U9kqhLEsEedHXjmz",
  "key36": "5Z4p1v5xueTiSyZuAw3VQ41Z1zuPFd9mN2yLca5jLRCg3sRuzaYud7Fgq1DruFbdK4S83vccdyBboLH2mU5HFAP",
  "key37": "57sXJLBbU5TTYgcZpVe6YEutKLaxQoVo76nH2chAi7KWpMUrQK3wAvYubi4H1mTtcd1hDUL4UCS8cD8zuGJKSgfm",
  "key38": "2RUHV6F1gHxjtitkYwcEbqGvdbBHNkcQBxh5kyyoMTjUvXuWjVTLAscQF5zd44z4HbPXfkR1bPhyEtFW7uyFuBUA",
  "key39": "5kvm7fVqANZyC25DFiEtcfNwMWfxY278wq8e9NmZFKqWbBXr4d9fY4329aR6AvTnnzCgFVdM8fxGrCNrgR7V7tWV",
  "key40": "5JK1is2prpnVs37qAkYtQWhrvA69CpknvYSMuGpXpmYE6cERG1cYd9BG8AKhpfzv5WVzMRkYXkbMTtGHDKQgnzzb"
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
