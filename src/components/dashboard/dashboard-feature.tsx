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
    "51ryjCnSvFurvHi4WguXWTPgsjyHxsFYNEpamC6Ww8TSdYoheEDiwLgf8zmfysCfCzhu1HMg6cXMamF1afTcpfS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BFdWAzfdbBgPr1LAcz4gxxMicZsTnDYczNFdVUi7JmK5aoqBqtFaZqHKRBuLzGwn2q6kH9Wcvn6tEaLfQfrjXok",
  "key1": "2D7ZM9pEH7B2mcohmnxNx34s75Mvj5rSQtNUgBvCVg2xr5SdZNQmVYGtsxp98MWzgNbQoe8QvG6Gq4GNK27j2kmv",
  "key2": "2CLxoYmzuZAf7CGYhsAYppwtY2xKvw4FDzU4y2fq71E5Ks9kNJqn5iuonvdb23yJJW3PVEyETqTdTh3jrCxBR8Aa",
  "key3": "NY1hT71L7D7Rev8zoGW5zt2koVoeLSXKNZPXf2g5HLnQqrNncp6JAVvjn1uUx1hRykT1nQU8LGyJND1WxH56ddM",
  "key4": "4J4pVeDj8ygmKJo1mPRGYBYKx381NkCfUTPrLSBSjzsmWrZ5u5EXBeh5K8azUjmKb894JYGhR93Tp1sYPGT64mbo",
  "key5": "31Td1DUXJqn4NfZdJaDSDvuiH9jzXeisQKEQmrwDx4tKJ2HnWUpJCEY43RBaQDjrJhiqdxHDjFoLLdrmW5McjXst",
  "key6": "4DtNSDAhBk85gcBg3i1UGYwyjeJzqLFYf2XK7cX7ZmxDhRDxufs8DBmZzH1dTmyr4jLNdHEHq5kLcfidqUk4kZii",
  "key7": "JSpWXDysTvNJ5norWGrzeo1ahJdR96pBzJ4ZTw7g9PBqjrZgH4ZMfPCTgcbncjdJiymjsmoNxjEB435ogV3pPDm",
  "key8": "32d3dHiATVBh388uWLSwcbr6Wm1ziX7Ccu8TVe37WSM8FFmRLpLnRvjUCw5YXhEYb2ePiH4u7pQxFvjFC3PKRTGX",
  "key9": "4i5VJbhyzJXKvEY2NfoWtSQMvrjByMUywtiZhfytWmxqPdSWgQZe7GBz6btEAajFBMm36qkcACidiNx3A9gig2bw",
  "key10": "oCB6P1ULaSQSsfrCmU3cVx8D5uhwFtmLt14RJz1GYxhmtExwhRD8fQCEpJTw1Er4dvJNrS5NTqYt2XQCER61LCv",
  "key11": "3xDydKL95RAjYczuyDX8jhKn1hins3XkBEZisuj6KoNQuMBkQgGKmwghatCw2xj3uSdgA8Z5RGa1QHjNpqx4nWpg",
  "key12": "yuzyLb3xbUPfoWwU29oX6BAqE59jqDnLGcugi2U8nqPjMuuCbGMVjaLghP6mdEKuxCAxCPbof5puDZdqVwKDyma",
  "key13": "4mYe6gPuQFZQtAMSmoGW2qanXx9donuhyM99Z1wcGJzNsw2YBjKCrp16rUnYBkFjJo5dscJp5Nkcrszg3ZbDhoN8",
  "key14": "KSA3pWgngi98DXh2JNLi4g4NoU1kUGpJQyBWf7PKkvLtzeNRMdm9YfTwy4H5XPKZxafD2NP6BMrb4aEaA5GghVU",
  "key15": "1KHuQ3Sw49K2cnVJncUEi5LKKMjpD9T7rpmo4YMcGAASCwF2428GKJsvftBTv9ma9CfPVGE1hEtNwWdkxQo7bJc",
  "key16": "2zsBaFtsTcpZCwGQuDda99dT2d6bdtNCEn8jFcdKwoJwkqj9TAgUc7enF2JwwF1xCk3HpCgyhuJ98Aca8faySHUA",
  "key17": "3AHnVgSghYfxbhP7Y5tjR7p1gNoRV52Ga3y9r7Y9tz9mQADcAYEcdYaosRZuoiv2RpDzmRWfQxLXR6j4b1ikgZ7v",
  "key18": "3rreNCE4tMCeoo8VG14XV5FWH6kxegLgg5YoiTzyAM6m4CnmG2ptCTk5Gpg2DgA5UEx1xdHG4KQPhSsbMXfT1HBF",
  "key19": "29roZbewJ2CfjPeiuHDLdqqTL6Z6vbNBwcLXzjJnnhGVeW4EMd8EQkTnnAYg7vdfrGS4c2JCHyLUSYaRhJzqft3s",
  "key20": "4vfJZJbfCPtLWdy9ZhQ7Ys3LhuncdubT41wCYiB8Cgtk5B8HF7QzetWtL7DwFrWdN5Hn27o8csudD8SnhcSyoQf9",
  "key21": "3J2Dmp9L4977mkTkoryVhqCGjrEBGxRipP4yUuVoxVCvxZVavK2myAjwYytJU58SF9cUFXuYAGAzZngNYYxSs2AY",
  "key22": "3FK26dGi8srzxH2ipujz3xe7CXsc9TfersxpgDiRFypfdPbX3WitBSRtAm56FW7FhkEH3GSH4ykaSZQdcE4PMHxg",
  "key23": "owThNLuGfU54bfMfp64B7ffq5mb5ph1VDP69EPGyn3U4KdL21LPFZB8ud7YPKg8VyLk2ih7m5ha4XeH3n17icDq",
  "key24": "222bxV6HXwCDRRKcxy6aXTBrL8Z9oTiXT7T8MXZCesVcFpcJfcNnr3JgbpZvhHXRH1g1haKSKsPuC5DQLT8mTsyG",
  "key25": "2UdkFRogZnDNqxPz1L5MN3muPWGDtdqKvL96BTcyLE73sXXsTXTaMNhqKFMCiThTws3ka8GkhF3NgqNQNUN5xHjM",
  "key26": "3LoCgKxWQhYTtudrQaDe3GykgJaMsv2oYWQxAva1aPFLRTL9qESpUbMYVkBwRJwXPFSozNo6PF9DpNjaENRWBHFH",
  "key27": "txUvuW4veqe6Wfw4qFcYMTXBp8csXjpTqoQGQjPS3xe5YBE3hJivkTTpU7dQmPJHx7mD5AquftAuoRhUYrXSk2e",
  "key28": "4pZSXBWiq2xs9pstSMYxo32L8Z6L4qrJXQQaQwXodaijuHS1f2k8XY4ESCRPPuCQDQYGxM2uCfbNN85iZHBGv5jJ",
  "key29": "hFF3USq7CCg5Dk8Z2BFGhPFDjujcK5YmKwR9XAB5MHY8AS1s4LXsuHRphuqAmxkx3dqDPzQdHPQ97it8WkiSW9n",
  "key30": "34RBSL6UAJeuwgs49NL6StCreqPvcnAF5VPepWzPQHYoYwatYJQy6GRybVTLiBedJextPLNZUnyXj5nuQkQoFp6E",
  "key31": "2SaUwt3QjgS2Mb5QSJLpNY2jT6HVZMnSjmpA9WHEo1jfJGefvpV1Z4rMUV8gCCBuT97WgWnQZPiSDLXixhViqbgA",
  "key32": "3ZcFmfZrDX8z1kckPwtnX3wocVMhYuSY7tKDmMaVTGsCqzgiLaLAkbVH7RqUzfzJ119s6YJDm52h6uFkgDHzUrqK",
  "key33": "43anU6G6DMjANneckwsKjW5JgZYiqVN2VpeTB5dpsdTW8axBtoQDFMXCtiAvLu3XGUN6MvRdFuT9V47RY5vfCfdP",
  "key34": "66F5dhn5BW1DC7Qs3n68zSKiu6ci3YeNkruP1VQHPiFhW1HxWoaAf8NHjK9tnAytdwRj69kUFTPwDnci262uKmfy",
  "key35": "2PerfsEjw37j8DJW6UMNcvmxkr7c9WUCb98MttqCZYUToUaottP6WjMfWoqwV595gLMsAozzcuLWCGCWzYvEs5vU",
  "key36": "5KkvtGS4afvPscuiCJAY1i7soLnvuBjxJASRgoJquauk2SNQWFMbpwtcLp7UzPptdCAMhgrNUzaWve2P33c75Wmi",
  "key37": "5B5aEgG9TJfFUUH4rQ23QrZRPMteoguwBhxQtJSLBJ815dh8KuUNJ7ZqCeA7oxUmegF8i4fTet7Kgi4286QwvP3u",
  "key38": "56eQ7Pcx7jUwDYUau4Gx3nsH8KPVK5esN7S4tUTbWYn5Jn4uh4UASXUd3ifG7oKKWw13rf4BdoFG7v2wqj8TmFhG",
  "key39": "2cBEKvPCmaGXcGLwCw9uTmHDUbZNxp9LBKzBaSfh6CRphiCDbkHjDYPvgwxKZpP1G6gWVBGucyoMHbgXhYJ9zfo9",
  "key40": "GA24bk3ERtosuCdQx1VjLAzJMLwzX98KMxgvtM6YvMG4Lyx6nYGzLikmHDL72EkjNux6SY1hyEQQQg3TxueoJ9L",
  "key41": "522a1e5Fxh1wRiWHc1p7CeZi4y6qegqQNgTPa2W88dYAtjMmG5jVi8M9WZtRq8WgQzEdHPwgySAfFAShEmtsDpuK",
  "key42": "5jzmq9A2TYgJ7wo84VcdQAjX7Vi7ZpPukTBbpXGMv3q7GeEM2mD7QjxMQ54DpJpcJjb4aJTJkw1FPhSASKv5umuw",
  "key43": "4UYEskyQZF7jnydSmRUb1zn2watepSHJgzGNf8sFT74bYZems2Xfk1BbXtoJKNB8puTnRDqVRpS9rxfhKexiCDQJ",
  "key44": "Fy5R2JDoz7jw8YAG2oWA7bLUTHqm7Aenkrs1wCaK9LUjyv5AjgP658VZmuYRiugixsGDHDT9hJv57CpsmtZvZEH",
  "key45": "5efPnnifXvuuZKer9oLRdJA2pEtSpUomsesyD16GFmKfNc2q58V4YgpnypeMdFRWccz4zMQdBuTNbUGh2su2Mkvb",
  "key46": "4VNLCqptX3QY8fUEn8Ptxx1tq1oYkT2aagbi9gGe33ofNaK4hDMi7guWMnDZGxsFkQAUMgkVq4wg67NrufNwTGtg",
  "key47": "2dEHcxpZDv51d7AzfYkoaEfvAeoS5rjmhRDKzNJM1TjXpCssiXNLUoQsb2Gbg4iwmy74g3xB9mpRFGBmaKeybHrz",
  "key48": "2gEniETzTdCtR44tnZNm4dHXgQBUZxe2jShS55CmhHeFdTLThz9YtmSgrWQFmiqb2es5SDeE3QSAUYMaPyfiGDqx"
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
