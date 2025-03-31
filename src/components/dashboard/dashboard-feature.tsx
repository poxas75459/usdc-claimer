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
    "2akCeV4K5QQnTeQc8hkocS7B9N39JaoVTSkgWXc3a6ZSMdCtLZRAP8bwFZCQE6k81D5NmxxSHS4cabcNCWwR3rqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w8wZgPLBf7PdbXzT5pnCxTVpu3LJraf4PshgEAxSJ3mEyb3KDb5ZWJBro1T23xidr6ufuTaJMCSst6od1j37XS6",
  "key1": "317G5ZeKC3SebGR3hGYoXd6KbG7UEZCXuby5eb4d6aAg8P89itUaepRbHY31RyDRS4opGBzfEQc65P1J5z5EVcBZ",
  "key2": "5RgNTYKWKD1cRHhiCKYSTZ1FL31xh1C8d5fcCw882QYExfjb1tiEUTTwbRtWsF8uspGqPDw6wf3auWECNnJ1moyw",
  "key3": "5kfFX1P3RY7AztG4cciGvTJBn2VwiYtD16mzBPXRHFa681cUNchct8kVHbDdS6KqAZ8mwXyzmeCTjbjMn7Ve6wJG",
  "key4": "3UGH5s84mzxqBdS7bHpyikgUSFEY4ECqrBjpDmQx4gExz12Av5ogknaLkRQN64wHb9An3RcjdLu9xXzdoq9BeNvb",
  "key5": "5KqEhFzquqa5HpMoaSqrmairLaR3axnpZfmaNEi1ufHpots2fX9zythEqnv3J63NboHJGre84PaGVSJdhJ11JtK7",
  "key6": "GQozP2zNTCz5qEACW3KYn8xU3hwospnz3z6yRak3xqCskqHHB1LAqJRKH2MZmGWi4mCzjc16zH3rxDvhJSgHVnb",
  "key7": "2qEhJtZU5sH4CzEAodXnpU7g26u2yhbZSgWUjDh2cxAvnSEt8ffqFMFDHhWt82cfhmmnvW4b4xg41DejHve6FtKT",
  "key8": "4XP9LGNNmw1wp6BBMtvxJUpKRgHiEJqrwEGgfwmokje15dzqNJZcfnzhcFswK6J5yjQrvShhtTez3kGCabRH3BaM",
  "key9": "3BsWfJLdD15b49SnUjpQpjaGphhB6HmoWYqoqzrkj9tWZSoVPAYinsABRjPWFXWAD6nVtQMJSXSHV68ebDDJpiFT",
  "key10": "5eaRpxdqhk2TQXTYGERFGfaQBf8cQF9TCsQ4js6ibXb6369kfkgssYMvXHwE4eTFtMqtAqDAhhwsK1usjgnsiUo3",
  "key11": "5ApycjTRUHXB9kjYBGUz6EAPkZZmv6eZRcXw2DE8Wamev3ziiGDxKu7hfpRUqh7mNLay1qb4xNy91sTfHZizSY9P",
  "key12": "4whKBFub4hQr2G1fAPgYNRPW7C3EWKaGS5aLCPYotsonfacsT8GftwuKGZu4wokbvmic5U7GYXxDPRaRnjUfYM3M",
  "key13": "38LvWoJZccxmKX47o5oYozvR6AD32t7oMixtxZagcZQsDEqcejiFQJF88ziWPpBmimscJLHRjCJuWKMZbeYPw5o5",
  "key14": "4HRrJh8Hn9RDM3p8Fuo2WGXiunngj7bFStuiUZHmuN5ktuwLHqya7Bd2RtFTWEqGXbTjU2rFtjJbE1PjK4PN5vAT",
  "key15": "wrQz94ZzjCJ5mp91Fk395TeNZ2rtUtAFw7ad41eFnh1wHwNhv9ydsLDEbrToq2tPjty6kf51bsVWUADKBYVd2a6",
  "key16": "5iDPgtxBdxHCAywM49TJ5kv9S9yT3L1pmGdMRR6qrVodpDj9cwjhbJLEraXWAzfdj4XiJRBAEX68hxUZUMK1TcYp",
  "key17": "2ow8n86muMk7rcTSDxBfZos7hJDiHXrieNWwrJEvPEYwdcMjNMreJDnYR9jSZfYg5t4wrzT1jDXzaijSodFpeTax",
  "key18": "61f9Jezg4gYeFbNBvfyk5HHGqfxhXuRTk8a65W1xg3yiMJoFXiuB5nGyZn2ETxT14rsP4pnXoihH3bb9dURXVZWV",
  "key19": "4hER2JHDd3FmV5cqNqwvoZ69gY2de8KJmtKsCo638QqF7v7HSQJurvDcw8ivaow43GXyc5JsqvXgdE2WEeAEtMVW",
  "key20": "2vkwoC3cpDjiZ8iz9zQvDovHcLEWjGguABLSmSqVxePutKd2RQPfjeRZEDk7TScSXJarzvk5hzov6g5BSQdwjd2e",
  "key21": "2GU1qnS3APpSWebPUwPdGz7yrfHtUDSrBu59GHpHJHAKrrCTjicNd8yPGpBzBrZAX6QBBh5UZYt1jkkkhderznXm",
  "key22": "4ZWJd17PdVs9rPr9raSW4huS19rSj1HQynNf53o5DMyUbHaAXPjEho1aiV1WAfFwokdGUWpSfYGAfK15kyGLFEqh",
  "key23": "2dNkeKTeqmnzAk3TTMGpqYykyLWuXKSYPqhg18wsa1Sz9QngH2RH3WmCkiiAHRqThPxZpkKCmQ8mo8F8a35oWsfS",
  "key24": "SMuuFBSTVomqPXPSjzeEWmMyUihUMkgXzKcB2SRsXZxuzMGQF1YCM6oSweuGNnsFYnrMNYwnHMc3yLBfBv3n5LA",
  "key25": "4f7KWJToG4jvFFkCjyjcAY7fuffXf7perugSNAUV7QJqJKtXpSjx2ZiKJzuyhLjfjrkFLrmWuc674Gq1HeJqnvVN",
  "key26": "3Em2kHLTVgxzZuXzNfCHudC2mw1kxFb7AfRzE1zWYugAhW9RcLwXW5ScPwYVby4CaWABVvYduCEQiKEzZDsqNfRo",
  "key27": "2JzsXvs8r89No6Nhore3D1Pho2MeFioU7aGBMdLmWaMKbnevjUbGTfiWhFZDhwnAoczjZ3TGY8LRWTrEH1xjfw8S",
  "key28": "3a9df8EDEkzP5rD79Z1m4uEWxQ9DgVtaFAnXy6skvFdCUYt9uLofrbtDvVu9hHzrh6VNzYbDRgT8aqAsRp5Wx4kC",
  "key29": "3xfaFb8svL9JW1aC3UdrZjvRyYep7E4p44PvkAyM4KecfuV5X79KgzxPQJRdjqyhPnSSJmrKSvPtLDCaxWZ9JMQt",
  "key30": "5TCw6U5iVNZaHpZmLQapoTcfWWPguVxxf8LcHBV3i6WqdNiXJsGdaTwbVf6oHVu8Bxtrw2wbAnCJeyax6X1v9WsH",
  "key31": "rVa8YQbN47TfTgSVAedP1iVmtS1rbvRrdSGWBHTP5AicL2PfXVuT4avcQei2qiFQmQW4yexVAGxboTMW6biYMdQ",
  "key32": "61Wr9TYRbajjDCsRNcjY5qAL4KK2N7AF78tPxeaMz88qVdhYnSVV4izW47zjpADaRr1Jer9M2MAecMrGscLY8TNM",
  "key33": "41VLzcTAPjhhk2vo34kdyC2AcSFJ51L5Smjn1aQK1C2oDg5xsfvyAyPV48S1EhuaR8cq9eskgMtsGXgTauM37PYP",
  "key34": "2ZNEGDUqZ2k34B7bxoDmAfq1LSbKjD8vNMnDf7zJCZajvS9iZDPzWZnhSLnEbuHSmcWZjZ2prAhdRdcLtbzbnUDb",
  "key35": "4SD8XTTKG8u8KLUYDvqHsr9UscqH1achu8eeM5JjvYvk3PPzDqr3LBYhWaACFN1RMD9a88zxxnGAeCduY7sA2Uwf",
  "key36": "4zpzYxAuLffz8XATgRbgW9J5wjrQKP9YG89m3mpzopBwCQF5V9oLQb6MKUiySY8H2qQHMqZatdFFC1JWtvzUr3kQ",
  "key37": "3zWLQnuSUDP1R7HsyiKNB7WKPmqjMhR31Nkii4c3fr19sUx1db192voJYNNYUhr19YWDEbUL1rTB7n4kcZFNCJ1k",
  "key38": "MuYF8CBZeyGr8wLKdvsYFS1SUwz4Lqc4rRfGghcGSYTwo76nJLsSZT1b168p2G3aTBTnsrwQPWy4rZqYtt9iZxT",
  "key39": "31WgfBDKaR3hqX6nNEFmQJppP3edFJj3qjKZe5E8JF1kQX2Zai1UKwzUqPpUsHwuL61a7z6GuPCMerMSuL4tMAdk",
  "key40": "61FBfPpMipFt8EfAfqogGKpwyXe2An9A5LdLQvVtKqxqj1P4AXjb2uG6faj8qCEbCqa8KoJkuXMkpVVSgkRa2SfT",
  "key41": "4aBmfojZZqCQMi67ksTVs17HnmkxtDhCcRKb4dGpjtgKptmFQ74xEaSxAQdWytZ7MLJeRirNNKFuR5sAe2P7n9xX",
  "key42": "4sQCnZpnXUa4RLAwfNoNRvPCQm6Y4Jq4ZXrTp1hegDEtJ6MkuN3uRcTgUr2HPVFyPKiuY6PCTUZjtdeKvyQNJwns",
  "key43": "57zXHdVD4Hwzf9ACFYTNNt8vaSQiEqMNLg3Pzr4LpomqwxS36b5paiXmgrWfY9aAPsdE3cu3FJV47Q3ZZTBYqn34"
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
