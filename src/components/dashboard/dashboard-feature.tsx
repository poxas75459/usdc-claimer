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
    "3fgyuQFPxcQiU2CtDyfStoArLgKwcS8qPwE58qMhDusyrc4kp3L38vKkULGR3syTqsz4HSb19YwzHbcWYbim326N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9H967TpaUtvpAMpGBgfazh8kKtCdEZb5heTyrzBAecNi4P5Htpf9GbBPCBCZPsNfJuHZAKmf6bmucX8gXHGiyR",
  "key1": "UdSgYorRdWNFfjUp2s1aubXfHn1P6HHW5dQ72XDv1Z4wZ6Vyu6QKn63AWztZKknp3AHyy2HhSTY4iH9hKCqcYWc",
  "key2": "yGoAM9JkJHsoF9mWatn8hFDVmNRdyLJHvM2BQMEpvXYek2s4mghHCyGQ9oviFEYX5tJkT4DVxEo9QF1CKHdu41x",
  "key3": "5mZG4aFEBQm4Gjn3SqAs6cRM2K7N3jAd1fUFoRcrsr3ziQCfdum7UdR4ameavRdWPxXcrthxdpduxY24hzFAAfzz",
  "key4": "5Ret27UDPBXTzWaR8Rfxavj28hWfyKMp2ufj5P2vFJQKEGD3Ai48v52NFFzUFZKyPogejs4XHYQtweWbSXYD11cx",
  "key5": "5TqxJEqR55G5pFoxfH6EYN5H63fbfBQMPk3Vj9zjsMmRQWHVYU5xh2AKR55S6YzEh65iBpZ8d54WXd2Soocvuhwd",
  "key6": "4KjMQCKMRkczRVVFcvS3vvSVZJjekqYiGUuY2cZMNWxz7HBiW5dqfJ34pR1xhcftDDouzztzdPbonRY4qkvtDpMc",
  "key7": "5rjSRS7Fu9pXRQNy4EKUnuuTvto36FXvJ1uHNkQVLkva4n1CMiYqNjhqQGWDbo6dNVGaAHnq9stXwjy1NBPsZqjB",
  "key8": "fDcVkHfHGeCgzs9ix567aRjSY26ouHUhCe77UY4vq7ftsYgDLp6vABwFiWg7GY75YVXA6V6nBjzTcgasPGN1oyF",
  "key9": "4Gv14ywBfsAcf63eNAqe3EyzCZhAjwSPn5EVczECA2TQBKirCNxfPvFvB9EUyH4HVT9bW1gLmJbX2CdSSp5HHFJC",
  "key10": "3BmaPHT7PjxtzbFgKCUqDr5ejNqmk7hfuU9yujgkHxG4WU4nhqRQHVEtFyGnUvdRS7ttNYZppQHfRNjwRJFesHT9",
  "key11": "31eSM3zZd9PuZiD55ZNW3rf6hd6gChCW6JguDLi5tmD3d9XDeRRcVzD5BTJJwymLvL2GDoZkDnnEKhUU9XsvLwkC",
  "key12": "4KLQH5JBG6xmFdBnF1JLuEAiM6mQgn5HBbjYH69CDGs7v8fUSZG1zUWrcHDrvuMwTm5Z1MByitA7LwMcvEqegWL5",
  "key13": "hzx9HtfoNBGFZtBCUvg6CXDbTL5qhqC8Ex5YfDvPvtCYp82MpbFfBFDoSpcPgw39EAc9zGwNB8k9ikCj1BLe9Rw",
  "key14": "66L71CjD1AHeXcotuEaBuvYVscJjdmqssY1RiZj1z2ijwcFEXEKdrd8SyN3ypAToCWEMfAq4jKx5jSCdJwaLaihh",
  "key15": "2fJcgNzJSDhkwgH5HNi6GkC7CZ9xHtrvhh21DmTFSp3bEAT6TBb9RiioNLuNyGjoydbmZf3r9e4D5MximdMsjwJ4",
  "key16": "4GDs46r628KqzxAyNFEDprX8mDfyNmYVi2xGLFD1qL2jm6ikgHpxMSfNxn8uys8Q2RtDQ1KA7YWgNoQbRadMFNke",
  "key17": "4YJhPX3mcL8AZE8qNtfxdpMG2gvnPwouM7nSJhc5AiEsZEwUaUZveK4Nxgnuh8ktLc5oXHnXhg4xdQVn2oN8LpC1",
  "key18": "3iPmfv9xSKcJYqq1qHkMcSf2BsAs5JzZasJmdpY5yoqvfAEQnUvunKxyTuiuNTpTNY47RQVZy3Z1vmwgRNzVhSNz",
  "key19": "53x3GKHnhynJMA9WpqgoEStZAbs6z6v5dseG9whAjCzuwqNqRHnCR2Mkzi6b2UqtwS3EGcPkNzAX7kyUz7WvHL85",
  "key20": "6qyX22DZ1myx7QRtrEiXXofqm28dsG5tmjZ8qCwYAETsigaamB9FrU9nBNsPAhV8a6Ucfsm8Wn9N2nqcBudBnnn",
  "key21": "3e6PCq4N59w8toXrwQUfFFBNJ1x4VWpVHiHr1oSGamV7bUjjbiotkERbvJsTHHk22BAz5dV39Xb5WLS6DHpkjQGN",
  "key22": "4J6F7sojs5Hg2Jt5UxL2ZGvbqq9Rm8eFJ9daLnvbcXxfesb7ycGEAmrJqkMu222TuoVGpoLRqdfFaAisN4XeD9tB",
  "key23": "woMPgrVxZoxLrhGTNBJyjepEdZQ7up29dMRxoznLKPhXAKKsJsrK9ZP3Qufz6g6bKtjLc2s4gFFvCnj81AgXzsP",
  "key24": "3AWSwmJKHFBKm9f2A3MLGYWU1gMkge2hnLbHixDmRe1Sdj53KmS5mzQoLHpWYJERA6j24YVF3anqt7MaHxftSa8X",
  "key25": "5ExgeFDZY5eVh5zpgQQGCFDKqTXEdpvBP3zqEtYQUahfQD6JHg7Ek63DyZn5mX8xm3pAq4Pr8hgSXcGxH9FTAyfh",
  "key26": "29zafNrRrczoB756S8ssgYq3xUmXvxgrD6QZAQPGTdF1eVwYDvXYCoSXsrzN4nRgHBfgrYysWtDzEgdcwVdbzG7g",
  "key27": "3NN6vRUX7kZFvRn2f6FrdcVyFF9nDpKhDkGQi3aucKgwrryRR8bz8RBbjVVjudFEdCmsNbLaougYEjntiDy6V8G3",
  "key28": "3Axu73P2X1SVjX6en8Br2wghyQkgXnHNDRToyZqkoK8WDM18hZQqYcnCcQiCgkGRAC1dPWKwWa5Bf9wE6oD4LZUD",
  "key29": "3CLXXqto5yAEENmpkrS25isVbLBzH4tAhAhqie2jwYMqjCVwe2xgNhdmq9XeTp1fHPbz3KtX2pM6WneeUp5DLEAP",
  "key30": "2igEHxjtw4KgMRHDrNd9M1j4UX2weED2D7KjY6hz5NeBvG3TPpYdcnxyV5jzUVrc85e5HqFcezSbDXJBcYughpNk",
  "key31": "4RCoVd7Xop5DBrQcb6rdMqYRTWqwqWHTG2XpBHmmLXmXxr7XvtDUxT8r1GRtUjhxvqUmeEV3KMDaDLR5pMvtRAvC",
  "key32": "41VQNaRDwbZVmB7is6rGBUvoEhDza63aBgR9u8CAxvrMaZBXLX4eX2W7g1GFMjyWevw4UKonNfQLrNUxc3USRx5B",
  "key33": "3oQXV7GQN5C1nNeKMWqkxfRUjxgbnAutxqEAkUpLs8ZvTgT6fKuQgKJVqsQG5twTrNb591oYLzFLYjF5Es2HhWWz",
  "key34": "4JEENDVo6Nde9pUneHV3TJ5HNA5u6VxRqUkUaAsNoBGYaHSAPoXW6itjPiKY1TaVUKJKZsjMNzaz8APCeo2teCsM",
  "key35": "5axHydAKSqMDnvNQwXxD4caeYNfpykjKdE5UkxNDmE5P98EZeSY774ZoSkydH7z9FkpamYeqaA48AxNqrrAaFDft",
  "key36": "MXtvMuuBSoPtqsZyJpRcjujKwSkp7mNvsAffkBm99ufHNPqLdQsAPyfvEWFfLkvZ699nnjnNWb9xhpRE8cDTZ11",
  "key37": "dfrN94C4dQPvxHgWHuSfHrAehx8woNWMHEh3LqVFN5xwWa1HzFW51jbRfFvGcd4C9Y41gKupDFNcLJhZiQTAYLV",
  "key38": "22zLtimoNvJFDB1GczxZFZyGgUbu2S7tqymmjFbMToReUQnmqae8xGH68V9C8kshTcUgUVFgiivv62jK7zxkHfio",
  "key39": "4QWQL3Jp7a7xdym7G5KAQg9Pkk62yGX7yPWWQPBV4i5yRLtx5tBFYWpAHygiCrZ9UBxu1EUDsHjA8cARPsv1CBDM",
  "key40": "gJRX3tzvhUnTx2uDj95qY7PWXJuSyWfd2P5FwjKLcvVtnD227k4EY3Hb8cHcAoeiAdna46B9AUk2FSr9m6gbUMK",
  "key41": "2augV7h8R32nbbRDj5Kc3Qj4LjojLupWCdhEiK9FQTf5xUqTYeo6psdAQ79cBfThHt6AFAQrUkBzYNmtE8mDB5tS",
  "key42": "5E5ZdnxVMRLJx1DdHoTP3uHv2MKZiCk363J3NbBUR31YQp7WqcMjZTpp7mNBa5CqUsVjbrJY4RuGmkHyrsj7WzyH",
  "key43": "54LXsfTZ4MUYNADzryv3vLK7Xkjy3pBvLKahQarHNdi13EMamkdeA1o98zYVVqjXPqaJjtiwq4796UuF4M9zgLRQ",
  "key44": "4CxWUjsTALruTL4R3QvqGBRAuSuDHXjMfgwzzawgAJHJ4e2wt7qjAfjgb33c7VN13rAPTcskfL5jUoTzzYzePJ6p",
  "key45": "4cuSJf66uVpPn3HmD4kND5NvGoZBtm4zBREaZLJ4x4AwHvCACyH5zrghRBaD6Ceaqe3Ae7XSRHseVWqH9PGkcfSm",
  "key46": "2h2nCygHnuFgtDF8YXDQ8D7cwGA99X1J4JVd64zNhxdTtxXDr1v1uEiJBw5U4bACHjwFqqBSmWqgCVH1pF72WCPz",
  "key47": "nTsEP1Te8NhqeQ7KNwYLBWCyggkB7xg5zdxMME4z5oAuEarxpVLNjLiGHjynMJ1NRrpNcY32Ee5A8TfHSzaj6yr",
  "key48": "4j9u11zZ8osBCEELjM6kYAfbn4HEB19tU3dirbvAaNwurXSsoeBPhsE8czLRJDeqvjgqBTLvayAfvnbhThtZZ4rC",
  "key49": "5iXfBAEwKkQwbG35FwhKcypMLEGEsRfd4aNU6vwMRSnV3X7DDoJgXDoChWwzP8JF6mt8JaK2m2hs9W4zqTwzNHTF"
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
