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
    "4kigzVXSAaiMWMNVpnrYuf9fTQKjSDMjM8mYkZ14LtMHGon96e6qxYiK4oAr6cjtkV2Xe2CSzWbny4dW3a42NRex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3duoJihdfmJNrBLFWdZ8NaFdu5Xs2f8fxbj3oyxb2nNuboc2wgxNLLYQBVVT8SGHAtmyyGiALBbx4Gi2eZByCNdZ",
  "key1": "5mjngX6rakR5gbcPBp9491A4gpDYmAQ4zGv7o1BMNraRjx2UhQdn12eURS3sBekzbzNsEHx2E8ou3RvzLDVo992Y",
  "key2": "5mEtu515BP9eYgeGBX3VphgbYj5qsu8f3ms1WaXwy5ANVkLgz9rYM7cp6fCzask43G59za3QVmboChiEGpg9k5ER",
  "key3": "3Ys1ihydDvgRP2pPjZunH2P6H6VjMTXmbn4yBnzEGkXQUruNjzPBcq4Hnf3AMTN4GVEbkgMYQdoNM5aemaE9uZFT",
  "key4": "bVfUFNnGvUPco4MCEQvga2o2NudoaVUMv2CdycAry6meyMccrjLnESsNkauLF5hjJkCqFdTjGVo5wcsaTPXKyAy",
  "key5": "5eaPgTTXSvHUcxmHNuJUEhXqwn1whtUekd1oGyVdYYmWq5gGzYBL2WD5dSqSDD2X4o7AkqUSvZHDp3sQz3dU9Mo9",
  "key6": "2fSmhDka8hV6dvh9hXpvEESGVahjyayixT1eiyUmdA2wzBDGBXiaFxsRm3V2gcUB2KKmyZFp1dDbbXBKKQ6p35LK",
  "key7": "5sSzMKuQ6c6q12vprtLRMtUqnz6NNUaUf3Qmq4FLdNrQbdGtGsb1YFj84CLdKTn6X2ki2973DQgT1hNVgBJhhsQV",
  "key8": "5H9xBjFkdsMnLnRaUziqi6gG7QNoebDiJySM8xd93eWH6JbrJw3hnuJThVu7hygDyDSZsaBZdrwM2sL9NoBcYMbi",
  "key9": "5pdikyghWs2F7hTY9y5QH1aJVC2dJPYP6kzDmP8osrHBA6EkyvQqVmkrr9L97dB5zhPb9BSRC65cqKdboNR74rD7",
  "key10": "5d3U3FjfFe2biLgnV323GTuCsimRBanoSJQ8F7VXhtCW9D4qbmyyksnaaHyvHUDbkXfqPTL3iKGLgQF8LD7BaHGd",
  "key11": "3scHgVVoA1BAhRjbbPXAvJfkdhk6bzaFTahB9GA9nyCRWS3goPTBz1VTSe6ynGtiiLZh2r9YM42Qy9CXkAnxUQuC",
  "key12": "3b7YtfqfbtxsWeqGpXwYKQUss4TnoLhNWjLJxbEZZjTnxkb12CHsGKydn8i2vJvrhntG2wNiy7myjMjqp3d3PtoH",
  "key13": "5dAV9FKLNzkDkYz7e4aggLXFZQQ4CtU3uZL8N9FymYSyp9x53TU6qi9BPcZkegi4rL8uT1wYP3JN4w8dJYAgn45c",
  "key14": "674ScTqYyJ38BGq1FpTyoTt7m371CDfqN4bka8E1gUmTJRLiyZB876SPwTDKVfNfxrfXDatHbokxmemXm3cBdV5g",
  "key15": "5PtBaPCQPgBybQPBi2kn3oEo1a3QJmqnQQne28NgTyHrJHw8LQAF6YjPtjF7sV94vWTbvEMe3oNKh8USCwNXuJo",
  "key16": "zszQ6kwL2ZfjAtemX7duCfiX4iLL1s5W8AXRc5nE5QLP33ej8CcgaYGp5hT2Qw63JohvgtehfndqdW2jJgx51dT",
  "key17": "CfNQdLVPv5KRVTheFRi8KsqT8xY9GgNySPLpAWLNGy1rjhDLZxQkpLPnGdPLAVhjyU8XpXkuqNbDn59beMhyy3h",
  "key18": "2fAuMw6fLeGRcdZLzN8yK2UwoYkcpeitKzPYtT4f9NugARmjJc9XT4JMxq4DTGWi6nY5Yqa5asHp8P92c14wmsjs",
  "key19": "2GzfLUWDpo1hNxAeELBprf2wWUZG5iGBmC9brjar3i6FxXr82pLsb1UeFrf1vY7nPy7AEGoDP6vj2GV6eqheqD3d",
  "key20": "3SXZzprfxsSYvEGXocJBimTofLu8kEPY5dzR6Mg1eYQUu4pD4rWyWBHqatFRgzm7rWko8otx7cmAXb9eXoD1zKhj",
  "key21": "4RaaiapW3FKsWoncaywFdQaudF56uQwioYJXm1E6qpPxe7rUGjCYwmgmGq67eGHGrPn7bnxKoNVAxBkkf6JZfv5g",
  "key22": "4WMzWDcqQUwpZChpiRk8YZWQLhbAziRyA7E8eVW32CL4DcLAWHJkyUxjqzeJWmMsiCnWSG8pDsAfXeKXNQRz2j9G",
  "key23": "4WLJ4EEuPKCAWwij9axuKk8m21JJzBGM6Whu2m5G8tpADkBZnVvoo74zCMhhzYm8qpDanAd1p6gZSLdfn6y3UX4H",
  "key24": "4dKymjzW2mSvnvCarQoEJxfhkN7JEPipYsdZKZkmRnW4SCnvXBgKZVHh3dym8tyHQhG7JGMy4N5vj8dgwrYw5Xx1",
  "key25": "3jM8bnyuHcTmcQHeivagfgUfRMpPDFMCZjtg5YvtzYPHJjajENwP8gcG7Re8hwWhAqzDVb8S6SqvVw8DVayEjwX2",
  "key26": "Y2tWW5AMtHb8koMQtxDvbyTibdEwmEENAq1euMw2mB2ojaBhdUCFud123E6AE1PAb3rP6Bwfmg8WTvapxBWZwXY",
  "key27": "jF47F4NRdpVcGdxYvwmpxyrGWguGrZLcQ7Gfd18bLUEVn2kSK7reaUAJJAexkmpGze9uavmeCdot5B3mnREaf2V",
  "key28": "4pDtdf4JzwE25hC34rGJJX45dR7Lvm2MUCMeMU1DysqcYWAwgAuJE9oC9XwEoBzaUzjiLHvQgLUNQCXp4UkLHHkJ",
  "key29": "5TRCfC6LUxZCGWGpNXc1S4xfYLFr4kh8WvSVncsVFwqBhi8jVjk9vFzMU14UYAVpAeTvapPeezXY8SXhrYZ4ySyY",
  "key30": "FLZBTjhqsrowNuTnug5T8iX6TJBJ5amMJPn9ZVHhpyTjb8AhjPsPqRubBmWcjLTSJZ8UzwrhjjAptbEf8VPCtdS",
  "key31": "2rR2bMjiuctgFu57LR1uqR8ufRgA5o4jnzgiew5jhVYse55mDa2iRvGjotSC7DBULnxcbcQncV5JrM2VM7fvxmP8",
  "key32": "3pxGESZSEUyGwanivHY5NhSQvY87mH3yfptzStKB2NDP36QXJGPXYj1k4WDdWyu6WpgZTZ6oxXtsV6GLcsfXFNKZ",
  "key33": "61u7pZYiJf77R981QwgYwyHAqyLAQSUou1YjLMGNi7uLHL2yFPeCfSNPubgPuRkrceTSbdpMUukB1GrDYrq4TgQA",
  "key34": "p4dWVGfXhYsxVzC8ACwQWPDKnkf2vwT8XdF2wzA4ceYgQC9eQnDXUMgtEMqavqmnrz5DhnNcBfDiGpf9cN5YTm6",
  "key35": "3FnBu5eev2dnhzWHRP3Zo5B6sKDHDBcDgCViU4zonvYTrJUr717JKmfz37x3mdr8be2CiMxW7HgHJyu3qJYF6Mqt",
  "key36": "4E9NHDUTyLPL3XUV3tWmwzUs9VhyGK366MaXkPthzC1rXtcKcsae1DdkV9aaCjRgUKdyfLKiTCZMAzFJwzPBfNqc",
  "key37": "SSb1BVTvVyQc8FPYsdbyajvybx5GgfJYjyrAUu1LdAcKNjrrDet3RTxdaYCYToYJMsRy4oWuNv4Ps5ANr6AQRw9",
  "key38": "5H552dmDcmBhYGUzcSHhTA2HDb5RJVdXYL94UMaGZue5UPYFkdGE7YzQVyxRbZZWU95sgUMp7DQtt69f5ZoL4rVt",
  "key39": "5LDeXqyLJAr9vwMtmQfp6q3PDn7s2r4Pym8rELdmZw2JP3WSsut5wrYFnMengL3Eag3djN6qYXcUaD3h5EEEcPH5",
  "key40": "4uoNoDgf2sw9bNVMpXzdSfMcyCoxZoPj4NtaH2qX35HW6YP53iaufDUTDfwZyDSuYHEK1teMXaEFvFiNUZvsrPNh",
  "key41": "4Lj7hozmMNGnCTUa7TQD43DSAggt5tktRzuAs3qmzbwxxo7zLT7gwSGwVAN8RJy3EBKkW885yeTQyY6izgcHUtVd",
  "key42": "5QZEw2RLJVVFtufV8vKtgrUWBzWFv5qN5jmz9gTczVDtW23WxA2LADSsMbnSNv2yGzfYWsWKfJBEbKiKuKwBXzEs"
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
