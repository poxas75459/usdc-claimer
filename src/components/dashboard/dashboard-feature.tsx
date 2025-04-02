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
    "4f22yK9dRUU5jMmx87ut4mWWhbkSprSCpf56fKs8TSud92s65ksxWAbiyDQmhFHYbLzT6nBPStpkNS9WZ7UK7yJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cUdQjtwRJtA1Y7R6gEBYFxsqxRGrVjFQb4vmB4wgkDWwaZ4fJpGWyFZjzfCjgmrax7vR2w6t24QiRJJ7XXyRDCZ",
  "key1": "3B3vJcFrurkamwjg4mKAAodBd7D9jRZCc3TANgrUCp14FTXnuQgxYBpegJU3Qq9ZrrHpodyxTZLQVVJKaxcKmoTK",
  "key2": "5HiSSP7Aw9FfWp8MFih2yyw4p9gvrsSAmxK7t7ka9NDvbz8LTP5MHJjERyLNpFFcBJSfSHgBPBG3kuxram5ZWTjA",
  "key3": "4MyyKLSBC8wKqZfbk6VkqBTq4wvBb5Uo145NBUch2GhktwZWBEpySZgHEL9Pe884DaNgpYjjn2FjiT4jYWadHtYi",
  "key4": "5MKG7rRtvCMHPTf1S7ZYTMKRxQ1wpKqx35ZNV52JTXeHdT78yx7Zg6Hf7k51JKEzbFq3V8TRFetbU51oQdyztBQb",
  "key5": "2CQ8MEJkmYkjEPL2dLupwSEm5EpuHeyVHJr4grjZHTyacb8y6yWPFBgRx9qkZCmw9Lc8sNrG6NwzPdykdqyV9V8h",
  "key6": "66nHz4N5tU3ficvpfFYRFKCrK6PSLWRe5qRcbQCtniQF9ZaRepfwLLHwYtToPpy5Mo1uUeNtF4VmdZ5Ww1W95F1H",
  "key7": "xHtnuHY9cFzJu1Dcb3aQryVL9YBmkPt8qQfVUDE8Ypqwh49AnkqCK8up3sgW1zYAwC8f37zQ9YK5tyu2BSDTyzC",
  "key8": "bqLN3hr9GnrrLYZtc9PpYoXdrYm12jZo6wutr2wLUL2TF8LXzX1qgJTE9PmLPWAfir4uKGjXyvE1pgEKjJUbA36",
  "key9": "4pyZShmLpy2uaUDoAH1Qwh8fyvVakVM3cfyWBsoHWHwesW5oaqggx1VhLxHN3cmGV7H2gxvQnhTFT8BAz1XgdEB9",
  "key10": "2fVAjiwdGra78bLDZjBPW7EQQK2o4Cf4jw345bT161GMEQuMunmUAKuq5ygna46LG3mMtj9efh83fEEp39MM4WQz",
  "key11": "2NNRitsyW1NYc2PVhZRBCD1jD2o8GBAJiZeq7kWfmk5LMaXVhfuvKVZLqhtGq7XWC7yTeJp1ss8GvAtNaTRtYK5X",
  "key12": "52Fspbo3F6pk7y167nASCY51izfvFpp3j8QdbKHecDjanrprA6H6mNnqRZ49EP1TiBbjMEt9hwdofKVHcJBHVW7W",
  "key13": "2s65xGNAWXhHUKCnfKBxsNAAPge6bDP5g6PV3Myjn9LqDdwdRanv7M1JbrRqbtS4rEUbNtqtbqgXm34KA1ZkQWkB",
  "key14": "4Z1t5bevvRfkLcXZsixvrhLsixiNNbLtiHtkzGHmPVRP7Cvc5poJm54ohpXEkGUGjonrgLSxUPDDyVRxWgUVEVc6",
  "key15": "3npaorPNffVkrYgrtVtcfxX4Qp1fKFbf1SrbFRsVgYkDAYVjaLkPxmvRcD6Z91B8YABowkwUyZAuLgJ4ygNxkhFC",
  "key16": "3843te3oU4H4VufgfXDafMfB6h13kLuEMpANgR5NzPgyt12aDY4Cty5RR9BaQCyXpTeb3zQQHzYoedUsUdBKjUVr",
  "key17": "517cZVBmtSARD3fUR9HvRR7dPqJcJLpzT6i4VjEgrRcvt3JmZKu1TYe28MrUGxh5vBUFziE9evQ2xbTeoYomBVoK",
  "key18": "EfLFWjRNAgaeEJnUYNjvYcfoTNsL2UKbTuV4Ysf4XjFcermggB3bZHxXkpiNJCGDRxhnn8ARJuXXjFMhNbsaSHB",
  "key19": "4uaxshe9A62rBPeyjxoVYseeUa2gJRNPUT68ekNHkAymQJS46aNu2XFAbAoRH93rKqptAqJwsuj17711dHLSgxHt",
  "key20": "4uHN8pcyVVsikcAEgJAy51qnQZE4LNs3DfFsZbbj6dd45oW9EzHRdvvVubpjsuD6ymAHieM4hi9jBYGL5tkwYgq5",
  "key21": "3wR9q92x1C5UgDnwZwTHo3TfNYFCtvQiw83RFmfDbPu9QFf5nvwRQZ8U6sD5xKp4dNL7X4jWpqRYo7FApmRm1abL",
  "key22": "2tWhEKyZCnPWn612WdhjKPBmgjPCnh58EcKYP71PZzPo5d3ABuaTL4cLoPodvzRLZy1xvmoLoyEzdMTGpDYZ3ici",
  "key23": "2Gs3vAvJb1Sa9BPWpZNMSEPiEs8pLE1kCK2rcHLgnQMVj4U3GK9CAS3B8C1jj15xbBN2K4Nto7Qij8PyaF3qvMUp",
  "key24": "3FPBDbseB2kEJkgGS5t9wDkv6dgZZ3RRDRCBagX9gZfLLQymGAw4bE1mtVcYSX9aN5DB8U8nPbYNVVT3U9Q6LCgs",
  "key25": "5eLHuTWPrMpPEaNht1Gbhq7fDZuAsz9R6mRukJ1JhdtbcrNs9mtSr2tny6mAJH38akLwqBZgpWBSKGyx5fVAn1ai",
  "key26": "2d6MHFodHCLVVoNVAtvcZKcyJ7662Uaq3hUzhpDsETvoRVuttMwuXPMAW7BLJ7U7U6teGDU3G9w5sPhf9XRpcRyD",
  "key27": "nkgMuMb6Mjv1UZgcYUJjVFcTLWZsfWTBPztuDURydy1ft6K7DSVEVpMDCtAmHneHwyzgYktGrr5gxQbscPyFgeo",
  "key28": "4sA8ZoF9afNZAks3qBhyQaS1vtziQVL6d8pRgSpzq1ZwpoePZndAJjBBUfzz8BA7yC7M4BTdH6juSdkPi4aU7tpA",
  "key29": "3AFPgYTQqUW8VwKM9D2DcnN5JY15MSiX5g2CHNcHpzX3H89TFMuVMYR54JswFHLLmU6QsYieqhQevyh3JJ1gDY8v",
  "key30": "txVCDRb6zuaJ9zYr9t3zoHPahiXDe4XgyNuoXsGtxTzm4p4szZ9qAvtXzx1gosedtxicdgdEJoYwN3mcnbD4S5W",
  "key31": "2ofYcc3nUavpndreUfLtMoWdSjYNewr9VQqet7nTZUt5NhkkK84aX5p5akkYaVdaJchf3HN6ZeSqPqRVYRtrABNg",
  "key32": "3WjHJodNsbiVMdeVugpPs5sCU8EBUkyWCyC2dMwyRpHFM1FBaVYMmk3sDYerx5paLCUVqgazSMXZ81bZEX9PMcNR",
  "key33": "3wnCWVgvoZMPRzmcUiBMGYTXHCKM6eems4HxedcUyfKhJZBA2ADHnBv9PsamSyx3iNP7X7M4dpsSK1HPNDvPoF8R",
  "key34": "3va3iXTsdZvGRuzZV1B4AmqPw3dXNnnnw82px2q4KWptuXp86yrM4tg9TN687wmTRy73xyzkKnjuda6tkxjU7xqw"
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
