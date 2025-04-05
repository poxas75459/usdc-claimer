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
    "SCDZh9hUVjL6nynNBNLPB8nHVuJuJFhJx3mvcdE7w5r4YPE7dbqZq7tpfLRmBBT5mmgydkPVZCieAfecQJ38vJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RzV3dkhiGxriWi3JwPhsiHESHtkvXiFrqQjo23pssTncEJNf8TYE3Ln3FrDgFTc1jF7G1XM1vfAa3AcHzM1jNM2",
  "key1": "21vpPnDLLXkNJ3wV1KQ3sYtcy3pGCJUwZPGumZW6jv6NA3TxrkzdiHnwTucmpJ6N4bs4ysVEcHxF22pyhvy8zjZj",
  "key2": "2f2TR6jUifUiDSZpmnXN9eumeoh3ccL4isaNWatJmKpB6w3XWYnxPEXRSEuATo8XA2MZYDBbrMoTm8arsLAkD3Td",
  "key3": "mUVyLgPYRMBpkjvfZQaSfmMWLFAkENmVDp4cRGpvMsYDX368PYXijAskQxJaGcs4vUMMaRhWTVHLuHqrkMGr9ir",
  "key4": "4S1LfqxSnbaKhd2MySNM84zYaoTmJPCseutwSpohiA1svyyHQXtHg7UdaLH69Rq5DbXn4RMu6ERKsXVWv1vs6LWo",
  "key5": "qfgFn4w3tNYBUCjDjRvz7BbCRvupdM8PYUbfevDwaySanWFmRQtqN3Bh765PfbsCt53k46toDbZhJXqcNkAcaJz",
  "key6": "4hf6mnJ7QhUAUNADiZaMbf9XSXrLzGRiWAw9MNefieoRpWP7m5w3Tovw9T7MzyVy6tif8uuK29JtGegvrd92h1ht",
  "key7": "2o7bJRq2puryThPNYhddaTqhZeLpST2S1Le2Fdz38qPcMwueFQjzqkiCuRZceQoWU9CmgHQPA4PPWLGdQzwEha2e",
  "key8": "3b1P7btya6sneQNwqfut2Umu2RXqPpJ17h2Z5KFAwS7WZzYyPMDxWjBE96uQuca4NNRbitSww9skbaNTV68YywZm",
  "key9": "2rWbhEbwRucDW7XhKqfNwQexBiwFzGAYzaBRaxdi29KMRytDRqFbo2JjgSoViPRBfsA2vbsmpUmAXkbqK699GwYR",
  "key10": "3DcobfnFVgHuqFCxESMSXis8z4HbbErCQAud5UqU2vXjVThtBVssj5kCE38QmpPdtuw4RJpPpa49xwuar3e1mDfB",
  "key11": "4s8RQyzFXV4aRG6VDyaEbqCpL1MU3Tb7qgWmQhTScvaRcENtyqMHhtZmRk7QPajnPNXH76ByVzZXictARmeVnZHe",
  "key12": "2zwrwUqaCpuubbrevAozFU258aKFDozXJram8WC3CypG6HmT5YkDSNSDS48QEybA8VczRpT6y46grufGiHPWrCNm",
  "key13": "v9nh9zNNChzzduri8NHKtFxcHvtDxozkggJazscaqdxUD8KLcpJYNo66issV85fRT6Jrm8gTgYsHbaW3jWuJXyy",
  "key14": "4BQvVEDfBBBajNFgQFyRE7gyKzJfokBrbLHnZsM716yE4vFu8E9HTjZBjYNB3GPcBuUCgEVUa4QMKDHehSWAN3ia",
  "key15": "26YLyh1VqnNCvmFh1wc5UwnZ4j8oRd9YVER7G3XnMjJh9pbBpRhtyVphskcuQv6eWpLWinWmJdcG1321tSF6xqWV",
  "key16": "5rLzs2YcLENkJAF2U91isrqqRfcFZdnVG8sEa4RCS3f8HMnXidpRUvUNgfZZcU5NNmibDjvwmRrtu8PcZqWvwt9V",
  "key17": "8a9FZpJUbZM4F8RdALb7bwpmkkV3QK9URCQG4zgZHtZHS4gvFFnhaUTWxyDjvq96qfqeDxqPhPXpPbifGj9ScSP",
  "key18": "24KE8nwkHsWM5sFD41YFFqQibLJNgx5Qvk6Jep8Rpv82qse5FzxKTpdw2PQP54TZgzvH9tgWWzKtVFKpPLiYLZcE",
  "key19": "51HC6LSJNHZGcs2b5piRQgr5fs78cmXcWUFe4hhtH8gmpKybLqRaDamm64ALQ9qTsXwgqJ9XwgKCfj9JWZghkHvZ",
  "key20": "3aMiqkg8GYwoVnc78inCRYCVKHMT6ZgemKTQBT6hs6JdEEnUxKafFeAvYsWZ5DH4jKG2KaCRDQnBubJTdqQxuCDD",
  "key21": "4CXHRBA3Wq3HdtbvEZAxoq38NqYeKDeVHMgBCoMZjcUENzBpDTtuLJ19n6uLPZhBoGyXJzwkhnudFP5RNbPzeNue",
  "key22": "3dMgWVFfHKs9HhJK3Ht6ngioj6RahwCskKvwhxvBP3LpNoQmFtiFjqUCtZRauJcyzKCumpacZ8ZjCSFMoWJ2NeyR",
  "key23": "y19QF8xZT7RbGas4rTdUjzDEH2euoownN3ECt5xQgr7wnvPmeL7kHsAEjJ9yRbgA9vFcCD7Z97g9zPTi4mY8kC2",
  "key24": "3Z6fp2YXmVcu7GJTkSKzrWUWRp2DhBExvZhEKYC3i9PXpfVXq3TaBQPHHZZRq3n5WFchY3qetJaJDnP3YnLzkHie",
  "key25": "2fyA8LgVUz1zxJuT44iAf93XhuZZX3dSgptFxxQ3Xn7id9NSYFMP7vofTPWBwZZWpeqwnaxuucJVHdRf51ASbVt3",
  "key26": "4AvyyQ4ZrtEPXgd28sq8XUP9b2e2matYDLr7XPi3qrg5AooWYak32C71PF2pB2jKshvzRNUCQeprXEZEMjXCfuGe",
  "key27": "4UqbanUdjEKEbsmbBQfp6Tg1xiVp96aNZ54U7ikx21PmKaXjdEw1ias1qDGqQigYCRN7BbJucvk8XaFnG1Y5UQSg",
  "key28": "EXEx16zZZtAkNE9qY5gvpe5EUXdGBCDPStNDffxjipTw3F8qdz3tcsbwsvuFw2D9jndY2YZRqQnK4u5dsCiowtJ",
  "key29": "4WMrKzr8K6Sg8CUGMnWn2fAxGhgw9XGArQTQGebdiuE7qypJMyKWtmMybn9tQVw4frT4LZas7smZBQ9ryLyHcNGf",
  "key30": "r918tK6Rsgf4nuVZ5HuxjJKdEFbdkD2wYZcQcEynccpYAyaoDv2xwt452iEa2Sftz3xzWedRSzZUCmSYfcHKB7Z",
  "key31": "4Yx44wRSCoixkL2bp5BrDWTf6QfgdJh9vuMWeDc1oBE5YydLRPnYNohETkU6JiqDDz33aTbZktqfGSbSMXVBkxuZ",
  "key32": "2uchxe5aQgdqxBzDFqtfMuFvrxXnUwDrCaqvdCxov2qhD5bK684uGotxsRYwPGbeb4vSqfyTHaVQgwQYXZbMkWrR",
  "key33": "5W3H6bBmdvj26XPmboP1cjwmRmrP41ZxfpUp5HfQbH4R4EXHJR2zw6PrFWxh6qKJp7ZJT4YSxZBiDonPHWxCHbNc",
  "key34": "2gEUoHHVbWfepeeAA4iJMjMpceDoN9Qgk7zHiRbPmiTkcYeK8dZJ1fFMEYuz6kZXKS6q5gb71GgoXKw4DQdyqWyz",
  "key35": "5KA3HhhSbTKxfAQc5Afq3bSvKAqMfPQ8SdDdMFStLHQfgPi3CKuxGBArDBGdtCzrytrB5UiPGVfHPaWxLTbfYFgH",
  "key36": "2eQ8RjvzPaPBRY6uNUPB4iwfBRMcxS6JZV37fSFyEGoMyMwcp1wR4NPfFURMee5o6Sx5W4xP6Tb26ahU3rrgU4x9",
  "key37": "3SDZ9CV1yUsqUVuWBW3WrUkhgDzApcm65NsBcVJ3zU4AgpovehgrLZRiNgcoEQZWUdAsGbjfVjahix3uM4QfLR1f",
  "key38": "5266ybf71HRoLHFvq3AEhj5o24RPnBsusrKx3W9k93nt23qYKx8t6YEEwZPorZvPUQqkVgqTibzCkkaStpsJPLtE"
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
