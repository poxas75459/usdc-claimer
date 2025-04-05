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
    "4NSZj1GnkRotKdy9dF5YxwUJZnmdAk2MujA6RVDgSTmxZPo5yr4Xjr6CnRfQGVcnFa6LmqixtfDY3XoqyKnpcxDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMfHQuHfe8shoBiCD6k3LVw9wHL4rrxkVusmBJRqqnszUdiQeSM2f3R8DszPQy1V5WU53kJxJAxkXhr5gDRAknt",
  "key1": "4Emy2MPLGSLFGMQR24JdM37LQf9Tn3xNanv2fBFMxjhQnYAsCHHg3ENs1TGH12ye82T1tZM4u6BMvHoMw6rFSacX",
  "key2": "SqSBHcw6DhFfaEfAcsx66RmtBcbNK3AHcoGkmzBVMdYcQrUMZAcFw7kZq4epkx1zM4ouKqYC1yK7DZuvuJM1evc",
  "key3": "5Z6oZht34aDhFahdnUyRpaFLgeQjfULjrUMuUcGmw3YFfnsS4Ch6Sv7yR4TbXRhRBvDMZ7mm8qsWnJ4ebQi5rLhU",
  "key4": "3eySSBVyqpwvAtosf7cFNHfUSybAYnf4F9pERjfVEwjYLkDr3udv9GncJtJbaJYorkeHcKoCbBx21Kt6eBQFvjDh",
  "key5": "LtxSCNvv7T9AoCU2Dj3BdcVe9yzFfucpbTc6gkiYMb5LNFbbPrW6B2qrT5g5Drq1mBTAVHb3XJ88RZLNq3iDyKq",
  "key6": "KtGbQUX2BLUa7STQAnSRtdzrQeyPkZZgV1Tnp6jv5LVABtPC2cKr4begL2ovwcDWeTthJWq1weeTUSxi9b5BCeZ",
  "key7": "ucFx4URD6xZstBbnwJWdJPCK8CGmPCipP9z7SWYkjdXVBmaPKBtL2yjKxT2qngGr5C28SwvW7CYYPZ8x4bENWAE",
  "key8": "UUz3tU3sA4VMLMN9NTpNSkcBib922T2BXetpxN4cWPJcQvQQFWK2rC8p27Z4YbYCyWgzvGzub4diLssctNGNVZ7",
  "key9": "3Q4pwByhuDU14cgbgU3sEk9WnhFtAamGrEJ1Xf27idMUysXmTW8czayKESW6r7g1qwerq4ccRJ5CSTDpE7N3QiYi",
  "key10": "64kt5XHjXsQMTaz46axdVYgc16mU1PWms63n8CgVsDLVU5SpGCfgRvyVN1jwYrXB88cfwyjGM3Dn6yYuYVqcBWrq",
  "key11": "5FvbVMcQCrXsRHR3mJJ2LXYgoiewRk79Dzwvpref4QrDEz7rNhktnP9bgG1xZEHjdsYfY4Uy9Y6Nf3eYQFuP7o6z",
  "key12": "25V748Bk6Tgh9BPinufJNM8Zhj9WZzEx8iKLQApQ6Zxw23Y52GHeAdDgSYqwFFBNsWkmjWjt25ADArDn4VAoTfkE",
  "key13": "2YxJrQzUCPZ16soAcn2Ham5QXiYzW1tiHQ625f9gezqSEyBDxS83zPSdWECPjVehnybxs5mQrMjuuExkyrk6ntiK",
  "key14": "5BKk9Y7rzt3NAqyT38D2oS3V59vSGsmYwdyA5tbWKXE6Q5XeYihuKtFzJzDjknvBqjSe5Fuj6LiXpd3uercJZRAz",
  "key15": "5wtrQ98JHMkSWRQcZqg2kvudyCkRnu6bA6x7SxG1ySoGucXgMrFto4j1kE6TMXM1zX7SnBcNW2D1NKM5oC71rpnE",
  "key16": "2KEUk5NfUtwYvJ4JGN2o7y6h2EAciLyJUpFWE8eurzzHPmTDdWp9DPtj14CZ7HQDxJsdbvYNm9gfgavFnaLSuKi1",
  "key17": "3jmaQmaSx8zWwnfeE2k7CN9we5NRwPhkvrX9gKqFBkPRp6R3f9tyCDb1tqpnN8QwMrkrsXna2NK5Gi6hpqG6dLda",
  "key18": "2BscJWd2xQyY1dkr44RG5Y5aVoxHdeiYhAFZEug8LRhRsbtPsW8hJ53EinqujkerWHVJytqFVaEJ7ZzmHn1Ak9mx",
  "key19": "3KKtSu5u3BSSZKL3vWf6YLtf7uMQTaVKTiABy9BpCbb53CsoFmt1NsKNeJKktrgYVtthuLfFsfPBAgm5bpnCBXXs",
  "key20": "2Np3grEYoB2qzGbZTphheAdsyveKnXJMNRRgnZj9YB165G5nNob9HExY2xb7SLNKvqUn5FViP5VqDMcpj89cftkP",
  "key21": "5tjxVLuwAY4XfD7CNwkmPv5iBijq9GF7uVQ8tyrGtWUDkxAgwoqMEk8RrKGyzKHp5yxd8zavjRyADQmdUT9R7vqA",
  "key22": "2KxkzkvSX6YFEfMEnsRCcQ1vZF4WksAW9pXSrih1JhBFs4aUMHZJk4uJJMM5e9RCtWRqKuZ9RZatPbQToagu4axr",
  "key23": "34zvikqP4p54QaoFqXNnaLLJGqEP19fMDQr4WgjihibqiijFYx491Gk4aeR2LvhvkdjkLyFJPZZZkbuaXKgoVLrb",
  "key24": "5GSHuDSxywYoa5hN9XFLFbcmmdTS9XvhpuV1a4YHUgunGHnMGnPEiyRA3EGDzaKXV1FuLjX7kVnyo2M9CmN7Sv47",
  "key25": "5P4Hqs99uxK15KCcs9m3uk5tAQ17TLvqJvYnmRbCXejNuhum3KmurJhvyuEKRnkBHgBc5ZWNo81eEFNdKZx3VXQA",
  "key26": "4WxRfgpMS1v9VQQt4SfFFduxvRCgLdtNfYQCn99Rrvf63ohJ8TpkSujXCDQHQdfCF71UFrKwZTThVp114bdRpnBC",
  "key27": "JgjyRpxaRmMYTUPzSo7WVsChd54jXj4CRSVAizsxfqt5dJoa5K65UWLu8MULLDVEoWVqLNfjpfx1ffg8DbQdVK9",
  "key28": "4TAUiLwoPtAKAKrQLurgPuqWmWjxhL31yfYbCxxdE8BHPXJpq7WEif3X7sYY96G7MfzZ9STCvWHpkHacNBTk1h8e",
  "key29": "2pnmQPkYwxnN7HzGhaFP8BCK9ML438M6YhoGJAkWAwrWkBPkwjKcwRvXDdgCPhpCqd8GzgZk1NRNy3so4ej226i3",
  "key30": "2S5Bk6DyEo4YHa2qqak24EgBCSqLp9SkFHYXco217DDpr1bSarfTiVLZ8a6nqzrK9WfxtjCAZKXzE9Cunup85q6Y",
  "key31": "4D9m9n6MUxJSLAqWzUqBMZo1qGsMgpWhzrUGmFStF8phTCqnswwR2F9JH6CcMjSnreToRGiYr2o1z8xNWvrHWi5j",
  "key32": "23j2zKiCvwcsDTN3hMuVDNZboaQgbW9aLkH4EdjAV8vRJY8yczgo6LPozK2XtEsHW5j4rjkrFq5HNGUEBH9cKE7A",
  "key33": "4dYzCZZQBRbBPhWZzLWZHsZUDBkBYYSnAAabQVn85ZAxeTXG9d6QcDX1tZYZnm6At1UC2ZkinSvnkKWKXPP3NMdE",
  "key34": "2Zuas8LK2uhhhXQypMZVpXEBrzMx5zJ6uYzDj6wKnRYcWoBai4gNX84NwenCZD5LshgUNN82mxfJPVpVcNVPVeYF",
  "key35": "4Q5ZfFCJhqKz9vT4mssMGtpzwyoo6Ma9Mun8HYkZJGxW2kvRAMdu7eU2CJe5YotFvimnGFmczAYN1MhyWLQ4FeBy",
  "key36": "2QUcw9EUpC9TiDQS9XWDmPhh2uZzf7ECzDmgphNwDnbm8XT56DLkJgqSKju1BaLgtfaXkN9Qg8E7BNjCi76Y1YcW"
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
