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
    "LcHcpi3z8mXr9sGtYp7exoYjD1PJKaLvpQreYEzWsfcSqexmJMFokh3GfH9ezxnbu5v1NhPhTdR4K6XNvBqY5Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "371U7bHCFhSpsyChckkPbHTYyft3gWXzXaGmWfvV2MjCLRNn4rgeH1ATfRqQ548PbeuDTcSAyu4yENDUHELTa5oL",
  "key1": "2Sh6f1bSaA1eGfssJbfudBsLWmERhZtFEKjq6JwcxaPxJ6bN5QH3P5K84Tu6NUCakR4AMMR9tvvJFy7KBp33y7xe",
  "key2": "5YFpwi9sG6Ru5Tq9AHs5TvS5meMjDJfsTBtxh617x9c1v4q3Py3regiFEwNf4Zahhc1fxtpkP8Z9zUmqBu95o1Mb",
  "key3": "5WtTqnFaYwxZBrJJAGCyLS99zRegwXbrSAgBcvDmhbMGAQujhJUq6uC1PevGKefxyjZ5bGdWX2PEoPMUGQ9WAQGW",
  "key4": "3wVS3zL5B93cTEPFbNSY8vxi1BXp2P2TEaxLLSLMbYQTxcSBTjqcUGNDvDNkDSYhYsUqwij8ke2Du3WgeEPbUpUy",
  "key5": "2cCXxU1zXSWm8htwo65Yy6FbQ8kd2psgyLMoGQ4QNiuVrqH9buCGSzpwvnrX7YrQ2zqqaX92UkYLAQhhr6FRbPWS",
  "key6": "3Xbrr3hdQTPCmM1yKNochEF4QmXMEGbUiGqseQ2mqZr5gXv4CJ5NRTQhR1wk4yipSsCDLKPWqmqDHkHTKE6NC6xA",
  "key7": "5hLZAPsDVhbNZN6RN8Qs3ytAugkHaP9ih4pEq98tsCNRonpfNneRrFiArpxb5GNG4quSAu1aGDctUGfJkGdHJkAi",
  "key8": "3xHhcH4dab2bMsbt16UgHroqGRpyLzvdzLVap7DPePtLNDC24xnWT7u7gM8ajmyR8g5DBYAiy8EcB4U4bR21Ymfg",
  "key9": "3biEBMR6vF9QPLd1YLnMZE7XzLvT9npp5qBHFou81ujN5w9W9JsY5RaspvWVaoBLywcLJvMiV7S5R9CkNCg3cjcq",
  "key10": "aRMDnSjTkUZMht3nisUftHCki6VjbAP6XiDYrMuoAu3q8VXzk8oQULCay13AqvNvv5LsjgXqSozEu6TAAe66FaL",
  "key11": "tPTBSCyv2dGEkzm3BWypstMKvU3snqEn39MBhiEUoY4Uc2hoZEgqftcECbpSrv3iZC4SUvRZs47jEVqo8eg1nFP",
  "key12": "2W2j5b84K8oeXPN4ECK9h1qnK6zwNQSjx2UPiFjMQ8AHz9TBqFfnFZiAh68qPtRDVgajhGUNtxgGDZD5bUKwPBYm",
  "key13": "24Utfd31hFvS7y5udR1j2GH1hoyH9ArPWJd1g631Z9MbRFdGMzewgUmTz8aymjox7U1DHDkAQNADoRVJpqCYqoBv",
  "key14": "5mZ6T6jMxJEmqgRehcKeUNXTEt1L6DSwUgwQk4nR1AgmiqWpdd6Af9Ymsj9k6cR55icmRTLZLTqJS4TEfdk41BZE",
  "key15": "5ri1eTAkNV8zxd1DUDNhJLUVTUgpC6jiaUyHWTsJzAEBAGoFum1WKU4JDFqQVyAJPA7j8UqEJkctohbUEHYupgtS",
  "key16": "4pMEUVG9ezHrvnqPJbJHJxwug9YV38NdF91LNoyBQYCF4vcUK5Bbg89v4NG9FQdJA8uBfmUHFG465io6Br3myMFu",
  "key17": "4BnHVwtzcrFkxUpdyctmH9uB2mTzr7rzt9tXZ3c12vrr8CZXrBmdiaMJLeBhBSTLgEXb7kVruxKyy8zAyqDb1Y5M",
  "key18": "drh51MzD2D9hExRjhptt2KGUJBb3NugWGwvJLKiWscTAXSonVR5f3j2FFnjb9SwWQfVfxjv7NvAc5hoFex94i6c",
  "key19": "2dKoWLDCBY4uf5JtGZcaS4qGr9VnPftMCbNYyx2z1wqpxyJECm7FN8ke93p6XmyHEtKT8vFhZk18VKgU4tTtjXaZ",
  "key20": "4emxMJLaQwPULYQUEYRZkCxTJCgHcjJupUBQSXeH83g8egabUeZj3uYjo9ktGRrJBFNRtZkrLK6qwEQkdyEH6imw",
  "key21": "3i3HBnQvnPgWvYuGWdGHF8FuMD5FsQE4WYdfUAmGkam1f6gYjhMLqnysvo2bDgyWDqrUT251cF8iKiRYWEiKisiS",
  "key22": "51aUwJz2kbrjEWcBij6Fpbp6zBsxG2AMfXX9hiXnEkTBs4upVdKYJ8tnyRWwhe2G3hvRS9TVQQLFBKtZ4JxW7d5W",
  "key23": "277YL9qBRWuxEtzStNqBiaB5tooX3asjxVWwGycfRhzMLJgCbHhetuf6ir5ivPTKL9Npht6GRYnJmt28xaBQwdf2",
  "key24": "2trfA84u4mYna6ZeC1PzqjvEQAnifvvBRSPCpZKTXLijjth3BviCiDDxKKyy9YJxrPU9bqviZ94kUr31K9bS2F5i",
  "key25": "2i1127ToP3dGEKAdhRSwTxWgU3zs84GC32MjxUMKJybbyDDTaRDgLmPLncaxsQFgoY6trcJt99sHrVN55tdTWdyK",
  "key26": "5d6YVULaMVg2kxaZmKKEffsmKKuiTgNjyeEA3Db2nvAgYR92eFT8C25cYPqTGirfXwMSRcQ81eGo1Rd2B2qJVQc7",
  "key27": "36kDLPvQacmZgQUN7UZEUKYHS2quTDqa8UqGQv56jzqRzmSJTvmXJDm7TfVjVLrtKsuHwBpwKxP3B3Cdm4s4enDo",
  "key28": "RCTyLWnCJwRGXHhAzy5rmL1XqqsGuznMFgRi9XtqqYVS2ZFVUs4WFAdFMqNyP1axnTkqoT8YLYK1Mivhuhrg51y",
  "key29": "5M7fxoPih8obzY1jtbzNCdK8L6n4Jom9ZtbhoaF4s5gwoNKnPyFipww76D3xWczS7eJhcVt9AzpFnu3JvAigFNy",
  "key30": "4n2QyqpuefA6rGJ5wMAaxQmNZF4AaeYRDN2ZRb4U7UqHJBCqq9SPJout17UisRAiu7GgK5YVWh1zgDE96ZAJuBPN",
  "key31": "2ndQP831xbJtwiTowCxEAYH4rKd3EXf3b3Kq8CCLmhVoXMCNPho2G8XWFwFcidM9NUcSiSccQfaRZyR4AhLybaai",
  "key32": "2dn4xK46hWJq7bWKRiDH4BDvRzZQFGaK8CYniTDcJmJVqSgkxn3v26WH4kwDXfAa7aY8muZPdirPxD3DcgXft6tx",
  "key33": "5dMKeWugANTU6S85HX8nMmPiePjGTSdGHg4985frQvJPor7YS65m7zPMNDAfcNYHiPN4iqW8Gci1KcPc9TJD9ZoV",
  "key34": "ovLwJX6XByjnajKaFuY959QoB6CxF1jNjq4yzmFazKwzwm2eUmbMski8EaByx2iXpGPNJLFSQrbEhWucovVkKH5",
  "key35": "4Jms1J61WQyTmEeM57HHGH5S9uc7A2n9gBxukFYo2nETC2ukQiKaQbkfST9tfRXK15mCRkasS47FJsHn2aBw3w9P",
  "key36": "M3ek8uHj5KzePhtFG6YdiMTU1jXBjWpUrWNfh8a9vp6oMrURj1LRFS7Zj94XsfzNfnnUJ7josgwHETNjfK1D39f",
  "key37": "2upjVm23ZSRQ7zcfc5F782afs7RonuFrdbE7ESL5xGoCHUGMbGh6Rr5i76BgPL9MQ5xKmhpAXNXTAa7pd6ti6CRs",
  "key38": "qyA117XCtw5F86r8SdjNJUYPa5WNjYKLQUkxLNAq5vMRPXJ5YAwG8enkqZDGfxCYfk6cjtecMpAD2xnPvnVDR2T",
  "key39": "29mi9Rw1KMwFPuuZHNipbLyAXqf2fhGbzUQ3La7DPhwarM1smdfZ84syWM8iKzsCrV2QJ2xKQLKvoXD8pUSBe93q"
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
