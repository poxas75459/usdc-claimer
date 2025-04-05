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
    "3p19soBEb4AqgKPftdeoRfN3ngT2SLUC2vVP9xLkwZbs7WULL76iEJd5hF3o4oA1wU1UaSnp81LdsbbrsyKoseXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ra1WZe83gHfaoXcKccb2YcQ1J72CLuLnxaLZEkUzQj2XfKyW9byAVF1axT4wogE6tB7pfKMQmTap7anGCVNYUMR",
  "key1": "2vCyoBFZsyS9eJhPKxqLueKffS6aHy5ArUe7KxuQEiKu5vWxDr9tF78jC49DyQTbZ4kd7ME611qd2Q4MBNSqxebJ",
  "key2": "5BkgJGsmqskNhhoycBrArRDU9SU28Mdv5LU1ivZBMbaHirHuupF9NpWRSRhxjGRNhxd1h3qTMLJ6qK6pGnzsbE78",
  "key3": "29JZj96iYk2wtS3AaTKQ42RReuYJixG9cvKpaN2PezwWVj9rwhXRamiHuTWHRcMUieYhrAwzQ4ZrGPyB5Bb2s3VS",
  "key4": "3vcznKJEj2S2WmyDNzZVUiCnKcXAYi2ev7oNiqdJLbFw92C1E8xR4saiEfhupqXrsNB1vRrQK2u4FGWYEGo3eTNo",
  "key5": "KMrun1ctQF7d9Lpj59hUanr2dX63PagfxX7eLJ4dsbpH89aRtjJXFbDytq1LYA2XQyfrzVg4mHxruv8zMVem2BQ",
  "key6": "Wx3t1MRWFiXbAFWZxBAJgDJFytFLkwUJeWWVXnDzk5sAhS4mGt6HLQtEcNUri4j3JHwNiLdfExEKw7CcjdBQu4h",
  "key7": "3q9rwEUMnT2MpNiWXJjirBnA1DH4GyYFjfrMgEraRxHuWRfn6VHJQKhidkvno8UMXhniuJLoBoThtjF1kGLvKnLT",
  "key8": "63VrG3eF8byYNT4h7D2FqnGuiJESfWgtNBUVVCmHcsoyVh1iXUHd661TFTcdoKq7vcrofzotLahmS4596vCfXU6",
  "key9": "536sP7VG7UzNWg8B3wCyFzBij8Wrvc3GXczT9EWmkvJCPTQNWb6k2LtwtJkKQVALqVtET3JG36fmaHQTgWWo8u1K",
  "key10": "4jXeoyn4tfgJfgW1yqNGtgpxnhR53r4XYvkvLJkHTbpuBnYb4jPirKqQFdKwjSp4iBJj1vCzmV8aRCHcTyiy6KZo",
  "key11": "3J9x42QTRAKbiXaoB5vzAXD8MW2XEYVjXhSP957iDbY2Af7Q9w6AYnKiYikp191RDphhxfuNuwXZhFY1m6m1zMgr",
  "key12": "2uavd1t4UEx6FfT2KPSB6F2ZzRt5QcAPozmVQ9ZBsj2SUx4krjPXnZAoatXF1PX5rEJsp9RQwjamFh4osioZkKuQ",
  "key13": "H6VcBGc8a21HkVoHDNLXMHNxsV7a7KoRUM9moR2JSupFk5At16pZEiCQv1bPpNxfAfR8TZ7uYFeRNSSSR7u4bYw",
  "key14": "644Wo1vW6DBMrE3rE1hQc5GVLGtRFYoeijcvda2Vzv7fEcQYacKkX3bBALuoENw9reFEVzFSmjHruq3x2TxnfxU7",
  "key15": "3M5yoh1dqNHas9SUEozVCdbgPmbkzoX5jzuMYx8bkiFNd2CiqXLsMd57E2WamN1AXzHauTUdDrmDXD9N9hRnKrfh",
  "key16": "4NY8eBX62GWeFqZBQ5R1jCtWzzjj4x2gCEnkdVdGzZ4Bh52KPCAaZteeHXUhDHQvVkKqvSv6Uxk1HFxnAJSmaKy9",
  "key17": "3m8xmaer8itNRDDCfktkNcVvW5AiqQE6TMh2SE7LZtSMDezaaJZxkBvNz5bP1h7cgJYk5YBAxX91Uq7hLUyVtMqx",
  "key18": "3E9wbxKNbq92aSPQbdQUPCM1r25bpjYxD1368suUqtJ6jJFc9ztxHXCvcaNYmZ6fXUK4o4x3J845ibiDATE24TmE",
  "key19": "21uh9QwSBsfqdR2zsMQzxtg4hGyHtoxc5dmcvH3UwzZse8DQwya74D64XLnE81GBvMEX5YXRNr7BG9AyfGrGC5vE",
  "key20": "5kqx126r6Hd3ZGmFPPr1x1QykkVkVTD5gV4Djy2nwhmAHB5QMZ5LKY7HgWVFihP5HjyPrSvXSnXVt2LpeJaUrPQh",
  "key21": "2tmSgy7Gw3ikobnCbFtndAky7nrh9NV78pAmuEBgPDBbBCKreWjte1XUvPsTJjoqwcbXGw8WwPohhHUzajnnJiok",
  "key22": "3vVvA6EJ7x9szZHMW4SSRBREdpMfjVmtUpbzEmgYD2AwegZdCG4NKHYtnkZcG7yfbstrwACcfZzYqMXLyFqE542H",
  "key23": "4CVoAm68NPfKcUELidQ86UAtCMABBP28rnpaE9f2QT9bt1refeCa8U5TNWj4DedjKQmjuCvctUkqm8Ub6jwDYR4t",
  "key24": "65bXRdW6bu1RrsgY5VoUPkEYjcpDAzuKFqrWEcdPMPztLWbPXXp68kBNZavHgcQcJ5TUg2Jsg79wHqxr66aTxcNy",
  "key25": "5abTbTtnRANSanbPS5TNd6NCFTLjfwQVZmpLvN4Zg8Laf48JMDxk6MiRRAJXCwsy4beEWujxc3PyhPdJFef4KsyW",
  "key26": "3sZAGE9XVadJbrY8QoJ3TZFwJtyEpevE6nEuAouAptdjootbSA4Ea7tMYRinCxTMQ4g1nFTnX4rduNyWANk1BSUB",
  "key27": "2vi8291ccVZnKMZ3yLiBF7tPrz5YzfSQ1G5phVjop2AKRznhFMUgPwCk3yHCJ125CiSkTYK5xunDU1M6ma8sbzy2",
  "key28": "o4bjngkKi2GhEJBcK3FQbcATzFMcwqGqNe5DV4vfMQGoiyt14EzCbUR8MZk9c7yNvt94BSF5xnNTzRYmd4EvFWc",
  "key29": "LKoGqo1xgPKHt2UTB9nU7pnXnFBuXv3NfFP8YZwFYTK9JjGzM796aEa1JGM7jJVbZe4U8awobHfMe28VHciihHQ",
  "key30": "48nNjE9ujL1Yqwiuc1r617aaWVZZAukR82NF9u3W4bfMWwoMHLNUqwLfsUNdGu3tRNEK2FS26XFkrJisDMb7VVot",
  "key31": "44KmCBFBdXkmJYduSNCiVqH262xQVdSD4vvZ4TASUFhnmxVrJ15sdiCPWbpsMUweLqyo7QDLzVSQ84CUg3YmxQVe",
  "key32": "5RaSkZYtGyqqDtze3x7ru3bdLEJcUCBL3PMFavsVEbgzezrbuihtJukQKPRkmrnszmi3MLe4FyB3Wsue9Lk2h1DL",
  "key33": "2tN4tnvn1Z113T5pDsK2omu7kTqRKckqnzx4RdvXTmyjGN4KntmnSNCNM7jjgVE7eFTJJ3wJyEXTuFhqmW3c8DcK",
  "key34": "2PTJJCm18esJJqzN7nJZSjs7pZDVUParpgoZnMJC75R2H1nQceJn145JvzhZpM8n7HSPbxcSCF8pSA4Eyu1nfQ9j",
  "key35": "2cZbWBV5FeycYasUHW4Nra8fKt1gvGWdArqLfcGRBnwEmoMBPY8pbPUWrN2V1zPss6312d4YqpsS93S9uA62qyRP",
  "key36": "5UPWuxazMUAQJ4mo4zz8XGP3VEz35FiDWrfhiDk9aLwMuWSPfxC8gvLt8cHAZMP8PCZWbDxdj13CV1m9Ax2Cx2KB",
  "key37": "XPS5mWxtBuVFXbFAP951k3JC9cz297k6RctjopzZKj562tPXw68m5MoZ2rG6RdELLEuzPQrYKHDBqz14VCJcBzr",
  "key38": "3qvoLMwWGKJy4VkS7VGWQqJfPG3dkaLC1Pfdsj1R2Kh6eEfXSbGm3rswmJjrNAbXijz1Su3thfJxhVkuNYxVNYfT",
  "key39": "3V8CoepeBr8gQweoznsf1JPL7z6Vrrw2hEzTAndhoKMAk7cGiQJwRnQ55P1hBZqnPniD2rX1LwfA3zRWhLaWQHUD",
  "key40": "Ze9JCKAoH4z2obiDR4qqoQVfxnNA7SUtiHyZcb1owqfCmyw4Gmr6g94po8F9v21dQqTTfJpLqeueWCsRVGJ3Dfm",
  "key41": "4NEVMirebUAD9LYosiAGFvkuvAZq2zFgptRDkKcLWnWW6s5rnjDZMqvhFJU137SZybPH1TiFutCYtwQQm725mn9z"
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
