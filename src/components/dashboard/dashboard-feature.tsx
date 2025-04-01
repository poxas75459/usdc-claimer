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
    "66Ed2WZCTD6xpkeE4HCBvbKouZy6Nk7MX688VBuKptWGnHosY3TXF4y5WD98Zp9zqZk9tkcgZKHJv1jJp9QWos8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pyt4T8JNZA5pkxDPDQbhkTWGHz4Cr3EjFk1P7uMVSyksavhmBca8grXYpuKQuDRyhYLxy7c7LUjG39639vCYQgb",
  "key1": "2p55JHTTwJwfygcpZaSkannez6i7ZZcmVh3PzCJED2SAMd9j2wPuaPVNmvZT8gpSQFUbyCUQnnaPmq2CWMPzcHPC",
  "key2": "5k3XuynkcYsL4CcHb7KURvFts5XfvkQeT4npJ1FmQiA5eqvaFJGqNDr4xkzXhsQDX8kVigtdkBvdRN9qbZffceK3",
  "key3": "BCPYgbNLsJGdtzh5M3pkkUCApZS7A1AsGR5A7PAdT37qcZoAmZxiTCQ4kRuvuSyXh9netPSd7DJooSGUsLM6MK3",
  "key4": "gajKVq2MaH8oYuQpLfy7LvoWeU5uWftxTrDnH8fXYS2dVxRKv2oreHdkm4cjio4tWGScLfBS3wepNLsezny11ee",
  "key5": "HQzh8cjQ2ezShBBjr7WcWfuYvrZo9LKCA1ZBr27bPu9MQgVwPuw59HLoBUxXyA9KpVn2mBSttKtbBeGpxDNSfcs",
  "key6": "cqmurZp5bJKKhd3KaBbbycN4rv9okP6YpwKyrYTPW7PA6HFYiW2jxzfCbuensYWBqL781fJkQ2HUojSxMoCV4ow",
  "key7": "2ikyejJbB7fYZY6c3baRvU33xJ8iySPTc327zEjyma5D8w4ySe7X5gn1XjJUJtj7gurTM6NyRYcTYPDtsQPYoFsN",
  "key8": "5pgHyHMmYHsjy5aromZnrxWXbfg76GyZW3XyXdssN3uJSSC2wwcbbhD9yYKjdWjpmf8SWDnmKW3KhDV9toyzqcyK",
  "key9": "5Q2b5pLxRSyAg9JZudKyWczEv8hDfUwc3WggLTJfGLxVS8Az3aDdPNw9h1SMGwuAu326fF98HuJnTwuHmcF5gVNK",
  "key10": "52ooBpYsCy3qLrXCE8KW3Ts2DFdUvYzkabSZ5Chr6jUT8jEibd4ToR29g3Xd4ZV8ZqryPcN44j7oNc797jWKrwYf",
  "key11": "5AEM2hbYwSGiYa4bEpcKsEtESAoRBEthyPUYrQu43uKCCboev6jDuvm2fBM1EVHD85szSGEPqPnBP7pTg7742RLT",
  "key12": "ZiaeL2hg3D1tcgwoRk1xs4UCmwcs8HniMKTzp6SQRbqqoJnEEUwKAXRaaJXuzqmirQWv2txFGd1qbSu8CtuN2WM",
  "key13": "3DfuttXXSRnCWZJa8Vpmx4hrrPV9hmZZYLvEWSnsn6m2Z49ahzmLzjLHDGJzELgES3cppxrfmY1sxsjj2FLShpHT",
  "key14": "54eUw6B83dDguQZRC5NcYbf3t4dg9fChRof8Gr61bhK5c56uyY16C1JbZcbiiXqhX2LJcLiaxZSYYC6dLgAYkZHt",
  "key15": "2h9z2Shc8nNLfN9yegY7FGbGaKVh5VBNKrMbnRi9zkZf3u2dFdASxYQ9zwwJojfUJcBGwrVCMq87EN3g9VR6nSv3",
  "key16": "3bNdCyPZaMcS1rYVmpfCpqWMKC7TgV7Ua3qBTdrsuuin1i9A8FD1YzPzMwTZGdrLiPjGK7zCNWDtV2vNqmTpfoqM",
  "key17": "3jvv4WRagu7KSeSqQ6H4m3iv6SeTNmrnZYRHUymf9hXigB69mgSDBaESof7xGi3kGdXv6e1VnHVCbEojwDDb4BbE",
  "key18": "4VHNAqJbBxi5D8hkxv5pfk4y3wqm24zY9UYWDCcmg8wHMixpQ5zEcJrwwzUdE1PauSD3wL2vAyznNEM1GyUWWa8n",
  "key19": "5SmJPrpwpuPeuZtkoXmKS8hryQaCRN5Qrr9647yrWMrRHSP97gzHXc1hWYFDp6yuP3bGQM3N9UDsmAQxvbGT9xGo",
  "key20": "2VtAfvPQ1s8woo17mrgeE759Gr9UqaqVwiPVCYGFSr9k4t8EANoR5WLj4G7KQCPBFjE92Eqq46MBVosDqdNFWdfi",
  "key21": "mL4Tfxu2Zgvpr1kEBJEq7DRcb6pWzaEuE7aCi5TLVCkkCwiUwPqvPRzS58csDgMbs6JyRLE3fDTPDEfGMi4CqR8",
  "key22": "48cMYXNfJdaVQvG8vrvZvRYjxHyd8aw9n9EUiKu4um4hNTMe6KeB6VN6sP9znYWjBKodiLAVEvLecqRtWPhTcPWg",
  "key23": "GQTo8xz98kjcbX62yHRmM1jmZW8UF55ptcLszfQqKB6ttaoJoBvzRzwG5oH3jNt2gpMoQpE8f87TJZqEPQh5RaX",
  "key24": "2Fe2iCUP4hD9RJgGnxLRuog2zuBsfQpHWSjfFYXjUJjhv8SZSyJiNKBZeShyQ89g4Jc14XFJSBLTkyqVHbkQEGoH",
  "key25": "38mscWQsiHLr2zqMsbcVweEibBMjfkd4ck7JeFcjQKah8v1tLZBn7qJnRDcLibukXrBE82oGmFcTEyF6GFzKCM34",
  "key26": "2ZMbmCsSrjNjTc5XPBjWU2J3BTLjTCfYvaRzmjVM6xiB4HwPP1oLzUx6aHHauk4TfSUo1whj1jQrcZB6UMTHngsT",
  "key27": "35rr8KAmEJ5zCv6v3yLr7xVNnUpeMrk3hmQtYg9W26a9PcUXufxaLFHvhp4EAWmsWtfXttWW9ZGWzDzDrzdx35Yq",
  "key28": "47aSiGWhGkhKMc94ha7TZNgigBFPpQGdfa9rp5GQeh4rCshCXVs5R6rwgeLpMsy5Sd18yQU3vXB5ySoJEiGYakFU",
  "key29": "kPSkS5bGDTfSwfwxvz4rpDcVn3acXg6dzCJCNu8KFQfYdW3jaMMnmGSatbCochTXTE2kjeHqeUAo1qcpG1K1fH4",
  "key30": "PeW7uFe21a47RKVJw9NfNRCdo4za81ZM1fzTir6LTbyRN8XQJETVA5WsMHLkTVUgkRepDSJiL8hFegyhVDJF823",
  "key31": "3A8gRBi5aeaMq3M57Mt1sNfPFrhtNDEGp1HzQYyEHqSFCpAextrB3zNZLTGdEzRkhtS32H3gjrDqT5EHBK2K3SdY",
  "key32": "3vKZgqbWF8ceUGd4xXzBhnmpfnsBjnh26F7eaKwPKUG5LagSCgumm1Y8gDqiG3sbSRkgMK4z1FwoDuukPTcSBo7n",
  "key33": "4eskrUPj2S14vzk8MrfoBN4DtfTbNwWfs3NLuwQA7jGGdi9aJh8j8pDbwXidCaAtYuzMZDAjaBNMKvQ3pxhQWaG9",
  "key34": "4nRde5Axz4nt8R5MGmk3VdARi6EYY8ZJpx2azynsNv8tvEhvnNc8Ycj8CBUjbxHXpVmZhTLZeDejPSbsvzYkWtNS",
  "key35": "1HBJQj6e87ydTn5MoFLVou8FyE3gPhva93VeXNuc1hgAbZMQbhu9YJbdyfb64uSTvwSkx1qXKYtxuhTEwPQsrTp",
  "key36": "kqpfDJyKmnq9LeHJCMUaETdZC6hjHZtKGdjqquzENrMvh6U7RzUeNfgqMmc1wa7UtmLmN1oKP476kdYHet4YPcJ",
  "key37": "5cjrvcgLjRb5cmbZaCWidgifYcBnVUvsKx7Tz2GsTdFmK5de7EgRGzk3Tsgy7tEU45ApH1rSzL6oSMd7chcGbFVs"
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
