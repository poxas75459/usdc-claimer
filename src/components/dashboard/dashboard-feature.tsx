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
    "57ugMubxs6MyuGQWuasyd5r5UQ2VSVRndJyHr7g5Y5DG5n6n19MagSdWrrfYjEp76cuRhRcW5jUsPHWoAkwx24VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S5jSZiFLMk8SAn33hqNyvxGCAA1jYyiA4fXivqHYEytwKcbyzQ2kNySDnARyQVBccYRKGo4UwRhMp7NL6NiSEo1",
  "key1": "jqT9usVFduas5FbVZ4stQHhyiSjiHAM4wAixcru1XPaY1BGd1aoLSvgYE3o73bGgUuXGYsmSFQs61ZQweQE3KrJ",
  "key2": "4iku9vjTwDc6u34SfiFmH6Asnj9Wgk2zxepzTwVEcH2eY9CGbsTpnpJsYNytyTDdT9dV6VpdTNcUzoi1vZQomubz",
  "key3": "4UdTWjtYSnXegn2ygbjWKurQXGczQ2GsiRiDXHqxqaGxk2WWzQECCuW1mAJ9Xy4bxx5gz1vG8A26vRR484wFpWue",
  "key4": "5Hy2g8QcTV1VydrmzsDzQtrCNQLsKEuKRj7tzKJ6JpJKxHjncjL7VGFkp2WvXnXFvCtUTZgzR5jgLy8aTHsCiXDq",
  "key5": "hw4GSX1Yy1ox5GQXikfXQkYTf76evyuowbUafBBGYFE3RJYNwtunq7vHjau8RbMGmNJfUG4y7s91WoZDQS19M3C",
  "key6": "4jBgAYJ4wtk5BQEY1BmQxcN6Z6QX2fxr2W8vhoheAhDrsFapYgBM6QmYyuUaDTHVt7X6XKiea5K2b5NftDCo3SfB",
  "key7": "hECLXnC3xo86L33SZZxZ7CVFDdNL9CkJZcnXfroFgdSphFYxcgX4TabVPKqrW899Pvojb8aitWkhSDCPzeXqEAq",
  "key8": "omRMPVJwYPLYKbjfPRgmPpKQWaLLSPiibHfVwMgtDL9fSfrgqi5ogqYWgxS8sgSkPJunEc2e8q7TY9gekuSV2f4",
  "key9": "44v8b6NotcBA2DoEbsCw2vwrv6gKikK1Hc6emFpUPMozFZGpWo9LtPPFxzrVmt7mJWFL1ZGSYUF6V2p6BnxqvbL1",
  "key10": "3TyGhX4XvwkL199BvMa8QHWDzMLVAb96ucgWNzr95MEAgVi5x4XHkHPTp76fdxEXVtREqjJCTymmJU5gfs5Vijer",
  "key11": "XqmR85HqAadU8BDGZpSKMrHBTotAtFenRu9Zya3RLPn3vP5VkoFMJdPv7H9eQHgBiT6RUPEKatSF5bFCn13iCAF",
  "key12": "8YVPNUi3HGAafTKF99ay7tngwPD3Aq6DPKo2gWsuaKXFUcWRHSGPmxsWyX3tfUKzVjwTaSNm7vs8XNYfzDP7dEF",
  "key13": "95PULqk4q3Ajpj6bjGbHb4MRRtFCPM2nShKWYAwwWsXmyT8tVAZoVL1MMLeZPDsYX1emKwNQiwM8C8fte3t3jM6",
  "key14": "5QmXDPZdCnvxPNdoNHFMiDociYqPVWxFxk1SFvSSexbgCnsNxdh8TXLo1UVENuKBN3tSxdEbpBf5GxjBaZuoVY9P",
  "key15": "3cpYapVo6ZgtAPhEERYJ7mg6zCJPD3XJ6XCXLNPp5GwSuRZsTaetn6ZUFe1iU8i7G6bS2uwGLAStdwoGGNJS8d5A",
  "key16": "4E5uqhQmjxc81fkBpGQm82Vw1Pb4u2XyXcBBhmZ9uVaMbbwpQKUBiyf2uLyQmjxHZR6kpCqShBaVEePfLYd9PJwB",
  "key17": "2YfhTQyKFSwSPyh7ZhA2EmyQNbSb8m4SNzFQs9KubJ1TQ6XG43xmJmkNc63mKe2PzZ8842uBorLpLVkx6LuDsKoq",
  "key18": "xkQH8j2pNwU92gBRfqNpME7MY81iVUwueoEVCxLRwiGwK89CRFFEESCEgVVgN8c7BkK6UWXBdnsW66HKz3NHXLF",
  "key19": "3m6YcwvmsEGtdKdtTV2sfnn4iRU4jk6CkeWfexcDRvqaXtVmtCWchzSJHkYjU74G8hRf9TQzD9ZzNt72TG9PQC8u",
  "key20": "4dVztnc5VeWQvynn4iUTxz4HAjUCTTUVUyYrgVH5b6e14G8cL29rUgN7vWhXrwzZ6kGNBor1TKamSU2zznA1fJHf",
  "key21": "3qJM99vgLvtwrvHKq3jAkAVS3SNnJzP6kbeH4yBzoqez2gQYdPZ4Y9VoZKYEnMdcyxPzXGacJ6bg1KwPC3BRb2nQ",
  "key22": "pNMcDoNGiKQjDXVUGWEeEkgToUMPBj4rz2AwtenXtEHPVihA13ybzJM2quigQ5yoJpnS2ESzHrn3aUKSL6RjQt4",
  "key23": "2pBbgiZFUtWtvwygF8rmjCbpSqvpkJdeLPEWPpeEtVyG2yojNGmK9jsEytcheyxCHuQMa4pyhNDxihmzdWVVpRrw",
  "key24": "29iKUuNpp97CBWbSqBNePaQZxDXFbBoZWBUKeF1L9UTea9KR3586QNQrErFLV5h618xWxfqYccqgWF6SDMPKPbPp",
  "key25": "bWt7g49JjTt5fJfWUchxFwBpXDy1HG4edGqcmwvcsLR9tFof35phHemKCdFefRXNbxwB1wm3EL6TkFqFQv7XPWC",
  "key26": "2EGZCHmW78Pt2uRmdU5UnoQTMiVxDbQzPXpzP2teSLBqNg6paQg2cc7bt6B9ZXd6YkGeuVQYyyNvL5STytK5EELa",
  "key27": "2ug6vfBt3Cbm6dCiMWbzp8Tai5Sz3NTEJfKgVcYUgyrnjRky7EVRa29A2BwXXnfWLGzHnuDcn6fNffdSgvy2eMXh",
  "key28": "45B2NBZi9PbfJNzK2h2EJDBmUeHp7AWYBSP6aFxFdL9WR6WcYg1UEAYwcW6qQ21fTALANHwraMrCAdZa8hnkNGXm",
  "key29": "5EyCf15wcAMc34P5Xx5KpoWj4HxuSi3g4XhxipDfrRRjxnN8JVvAPK8vh9owNcbnRmUXdYWQQGicgyPWdiUzKhht",
  "key30": "2qcsk2Z9g9snbQ5nmxn6cwmugo6PfJL4WfkaQed8tFBi8bC6JX5eoh8Bj5E1EWMayhdW9ACG3SiraWsM3b7g2DNP",
  "key31": "4wDzHRfwVr8Vr15wG43EWnhNHLZMBhihpsKL17MZ7ARPjpjdooYfVzZH8WZsosstW1PNgMyd4scso4F5uc8RqhM5",
  "key32": "3pjq4M9VFvHKHWcbiH6dc1RMwht2U3bTySyG2YAE9e9PBMWMApoVqrzEXUcRxiw6v4SJS7StTG97PgXqzopDccPV",
  "key33": "25TmC5j9RT9uCW8FMiewYyTW8y1ayy6VUvRP1UVhX9ThUts91EftoiTabVDJipPaHkLcHnhjqBdc148WKHGDr6tC",
  "key34": "jG6iEQfwjqjdMVoR47oHEwvyweXfmJwDZzJ4JLRUUrrPnPMnVV26ybPdqrTkzgBnw4hb5EkuWUTDHwwjhsfz2iS",
  "key35": "2K6nVfak8uEQWT39y8utTPqC5PUeLFZmiG5WZyYuzoch3VbHhXFMoR4Ntmf1uE6nuC452ZRffiZ36JSLg9Dzxku6",
  "key36": "4Syw5TF1DPkakGGUVFcxwttQjNFdBVpGNZbtid7cXwGPvWdqJL7T3mT8zJ4jL9jjt1msJmhmAtdCg2GXeP8dttkh",
  "key37": "9yE8wccD7YJhVu2gzkfU81MncbuRE1iqTob8TQpS92JC9w6jkEciixQBNS2hDhNJrUdipvEmjHPKjFHbQijf42m"
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
