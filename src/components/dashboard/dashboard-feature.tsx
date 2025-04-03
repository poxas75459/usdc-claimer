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
    "5BpLEXWR1tXj2z7vqC4Y4YGJ1JPGdA1xgWL4kmDpLRKQKFhHwm5xt3u7TSVtoFoWozCJSsqtxaAcgpSaxUoRQdcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64k4RPFS9BRkv94ZJLoZStrXWdJjDQUbeKZDaG3GUif6xa4DGRhkhTR4gYUbrM1xK7aa2tx2rZNWfBbAiUJjMxVb",
  "key1": "4FW3kG1XPRHai8EJQLUPZYJ2mA73uBSqXFoCNiUrxSbcSPpWRRZTxKytKse2CAE38DbZSk7HaFpnJtxUHwMfCoaw",
  "key2": "3uSFyr7ahKhf1qUzNv3pd7Zrg3UMjZEYvKZCPvgfsGSvPLKDJp8CmVVr9R6PoZyq3YMth2kqnnhsjgqnUqfC8isK",
  "key3": "2LhZVL92caXTyW8hizS8knx9DvSRs3aCSXSfSMBRt1ANzpB1iijcz6hPtz4ZoRdHRqjg6wYuSahzjKiPSbAxSFFF",
  "key4": "2APAMnoMgGEfHHCebUzty4KjEhYtZMfqD9sAws461txU4xmLLEfqsrmtNKneejrMsSPyWLZHMy5SNEaTaV8FuZh2",
  "key5": "2ZsDnEzcFnSvxNBwdqg7RCFvae7Q9rVc5nokWBUY7tWnEEyoXNEX5PB2LksePZbKrjqvSxZodRd74YeDYaPQj4gF",
  "key6": "5CQB9EGYL8onA83SdeGBNyCikz9gaZAkMSbso2cVUExMgB8gU97pA6rXg1nk2xTWGhyZSpyLBxBrqic9r4xveAHi",
  "key7": "46pEJXgn5VHuuYFE45MdffCDen9QuVhNXxyPNJ7Euv7hQW4cLWcYsm7vWzEnT4uU17aTuLmRA8fKmZvrf5HHKNoB",
  "key8": "5hovposjsVFtsG9mcdf44hiCVY2VwAyJStqLcgWUiKEgZdLBYQUsJUBczEUaTevstYxQLGVrk6CrGKL5Anc7oGU4",
  "key9": "5pGT8g157ib3Ks5JHJBAJVr4bwe7GxtHQj2RLskaRj3sCLKSv6aNoQX2QUvbzrQ5Ji2mzdCo1bJpk5gHmPfNijFL",
  "key10": "4B4DudkTLu27bg8TvAN1dmxaDxeXC2XVRJ6C272ED7Wf2rL5dFkaLqNriWRnfPGVvndR5M1EkycrRLzJAEqRcJWG",
  "key11": "5Wuuw9qAYewXZvyaSgTKGXJynjBoFh2Lsdz9QdhzARizfPeKo9ZtZmuCDERHezVHsVcnqwi1mNbRZR73Rx23Jcmx",
  "key12": "4poZq9mdzHyfx8WqVJDNJzsamzUbzgxif45j1LWJt91Yshhinn34PCmdWxpo4gL9v7xr93GJobbYPg8x9Wjz9ucm",
  "key13": "2ieW48YYr59naicsAPRf9tLSynCirbi7YyyCGXMvLsY1tRXMRLFGeuzCYLP1PiMPRpFcHK44QWChvj1etXcMGnqg",
  "key14": "2hGZ8n5Z5VYXnRLqtLRHiJmEEHwxKVzinW1wKMtTwkqRKN9LpWv7dfv8qWrg7mMvwGjbZqDLwkzwMGxPaq3f69Dr",
  "key15": "4NqKQwHm6Yb9LBMPQa5RVmnEt1iTzuNyiV9Jhwwe8bb1h5v4tE17SGsDH8JAqiMXG7aEGvCsVbJBpsQMQkkqwBxY",
  "key16": "4xAgWHZauaFp2uAQofHKqZt6rWKVNav2mQNNq4D2Yk4uTaCbeSvbGy8bNcrnDK1Jdq3nyjaawucW6XreL5pdr18k",
  "key17": "2ZqisD85oFh1bvEVDe3bTpWC1pRzcghnYCSQRDhmbQvNfrxry3hFaiMwuJiJzXiiXjDtW3U7Ggt4vWRH4vmnCTQm",
  "key18": "3pMYnBkvwTZL6SqpQdeku2c2i9tjxbTtdjtZaS3hEtrqdKtYzqoEa4SRbJUHvZ4bvj2mticnBet37RmPVUzHLCkQ",
  "key19": "3wtz8LjbcyYEWjX11TnXbUdyRcy2Hr4bnLHFN2t1dazhSttudTXqx6KNrpYMu3BHmRdbBnkU5iXBBzzQeEDzBgBP",
  "key20": "66VrThFfHCYUQT8Xy9bZ6DN4grqdHzjiZVM19aEaVmgu6zgG7noFCddr5yCk81fhD72PXUecdUshksNf9KZmBNb6",
  "key21": "5dMVH14BWbDxPssxiNvba1LVFyutUEYSnAjeV8XBMiKzE1MGoj3KwQaFGwS5DpNJCXJfbCtmVdnamh3hanTiboaB",
  "key22": "2CDhm2qFabATChDn4fNqw7odNNmDvuvC5nsuEBu9sCsULV3n8jVQCScKzXthTQZdCQtNv1YHpf8YzwXHd73Lt9kp",
  "key23": "2s8urzLDMCSU2geJV5fgbpH9DnNEYkH7AbCQPF47FBmTdcijeNtgY9ZUj392pXNhZyWAYt8ZK9M1DpVoWWY7TVRD",
  "key24": "2gzj2ingBd1esjcwwK5i7HHvHhYbALPNM2uJrbrEHNsXiL16fBmHVWVc35zSYHCm1uD69N3YVLbVKzDMgyuK2C4v",
  "key25": "2HHcGCgt6DV2Prbzpn7PnDZq3XTaFNxyB7Du7MAaYpz6yr2guAhiXCfqcikXnYonu4GdakDZ6xo1ZH4d9vABVXnN",
  "key26": "3ixUjiA3Djc6RxJSuyqzfM8y3ECx6toaSRMcGWs1PmbGmjv6Kj5bHzEupVx97ktaYa7kaLLJvVzAsvgHTU6VZfkW",
  "key27": "sJ1PsMGQcsuuzMHBpPoQSK6aCV8Wt53bdimA3Mbt7hFHFKPHMu7gjLCoW4u1yzwcpU5RcUgCLbR4Zu25CRV7GFm",
  "key28": "EVXxhFdwyjufYWAGenTD2N6c3DtY1o5TdJrK6gMbc8BJqXCAz9u7581aRQnyyj3pcNmvNjS33tEWiRRJ44FxXoM",
  "key29": "3c8u9BcZE4niccgU8KTd5meFNhTtReB9DfN3M6HbmES3ai89RWnFsNqfgJjUwuYNkdPTn1QCXu6WGK7SXEZJmKDt",
  "key30": "4LTFAsCkZWAVYUH4AKwWNotvMMmq3ZfZ6NnT9r9xsidaEACXbKd15jCY7PuoyRVUUcYzaoivxQmZPKii8y3gCnJk",
  "key31": "2D4WqmmTbZLRmX4cFbLKhAcJxAQKe1wX7QQtwF2AR46b1msQT9m9ty4weSFQyLuxquDYT17sd3AD8s9YQXWANV3v",
  "key32": "57456hiAWYsu4UsmKxjDRm1uCTKmx7hw1TasXggbbMm8us4n8K6oyL6C2R5BC96J49dZbJadPpnd7768mVjnCPAs",
  "key33": "wzaeG3KD7MuqwJUHD29w1NHQ2o3g71ESd6v6gyGcJVbP3JokAVerWPbpnrUhqRntdGzVP6NvJMGdVWVuc53dufb",
  "key34": "4M6x6jmxDic7rRMTLBA1ARPmEYUiAMC5Dz92kajrnfhixxoECfUreMSUbpK3eZQZxznLBParVmq7BQfDDLSBp5iT",
  "key35": "4nmjkjX9N9G11EgbJiK7kUjMHepnuSgbXbzfXSE87cuvkcJBfgguSYiVrXycUTq18Q3FDDFgkXPSabuCu3pPXRQA",
  "key36": "2NfjoDVua3LkR8YieJ8kqBf3FNwZHwxV96HpLguzER5dj7fVVR5zJzKUnj3RrUKVjPumXa12G38B4EUMyRtF2MNv",
  "key37": "4CiHKVsNLsxFkQxFHLLrCpkurUigr28WZ7LSfmep2JZKwMfWxt991ZHhxaLsVCGoPmN3ut6uV1tucMw8yrWYZGzp",
  "key38": "a4BReaby2BCnJHCsHnmmEnFype5bN1cv7u378D94fU2hDaTd93xori3V7MVGiDCayFvVJdJuaXCQGUYJMCKyHLL",
  "key39": "7jVCEDo3ppSfk2xdJb2QDCvt3VPKf9fNjCWmDo8Jz2QrEUxxCV2DBFdKrquoVx3Tf7RgcxRzoN41MGRLr6gtTHx",
  "key40": "495tKUsUdxzmxsDVcNUiUGui1jyBjDXfAQNFVZ9CpPuC6CFzAj22AcZTmFgnbMBM5to8ouR22WEiQC3WpZi2tEMF"
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
