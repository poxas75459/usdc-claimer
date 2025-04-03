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
    "9FVLnA9yNYSJgN32tbP6YqbbKo6VAiA2BfifxroNepZzfbafGfXR1jvPo4UK6cnNh8XkrKqaQ5tbNY6Y7qdHnEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UbMcTcydZxewWrNyPonVD5yY4igQrXPUcS7j6ujBmj8GYoRzsk5bkNxVrxeedtaABLrpbKrkB4mDLYMU4DG9Bve",
  "key1": "63BMtJYkvsc3yUmsCMG4mH6efNzEsKwyQmYeGGcZhWc375cjvdvVWXmLYXwh4w4Ys6ivZr9QHgyX4qydFVa6qw2M",
  "key2": "4gVuPzfKthSLUBBuA1BDop7Fmcn5tkaJTQyGcQJ9MBbsvRmCRTavGZo2WR1dJgm3c4gy7U1aniuCxPaM9dpcdXWg",
  "key3": "3vfSpNUQca5AZk7rEgrT7HRHH2n2BBVZYeoofBf8xRqzyeuAR6q6CTx7ad7EhPd6NMUwpk6Jmmu1P74BWi88qxd",
  "key4": "2hKL2W2r9RpBeN3WY2u4DKdW8GrTmNQQWWe9nNuguNWbo1MYpKH8aXx9cL4sq49zyYhXLBhfTZkAE3QkwKVDDv1D",
  "key5": "5GdvMqTFSeXQJDk6LBBvbkNf4ni5aLdWaKZu6W6qie3fcp6ap9pEziQbYbJyAPc1aHfhPdeBHKYrFZER6PNER5DL",
  "key6": "28fH6y982ANf4WaP2ARUFDwRBFkS7V5WxmYNvwFb28FR5fCKTkCPLp5yk51ooQExvBrojVEvR9hE1geEFHMydGtu",
  "key7": "5XfCKGnfrxHLTMH44mjrrxWUZwUoiSsRCLgJjS7nrkDcZzzZBSMQuwqNLSmkE78wpuVTV89Yw6rQ1a8paEqHZXaS",
  "key8": "2kappJswa2d7eucbwhYF1eRzGNafFWfZirqDCz1uyEnjotz597wYpLgTGmGttQC83dxQDVXVNXzzGDzBQXGd9Joy",
  "key9": "EG65nx2VWQfFFyX3qZUQhWgiJD9SgzgHaCjxtULJh3U35Ppt3Wqrw1NA3jg3nME2LutaARDzK8eoAjgTbEtRkfK",
  "key10": "2bJ2heHV4zCpn9dBuit7ioFmf9q9DgYtKtDMzG2PeWF8hw3cnVrA46AMv2N8TFFJqPBDQB71S2hskvmuuGr1hayD",
  "key11": "5ibPkLVxqSzrG7iPeKDLiUL8TiGR6eofR7CkDDNB3ZTVn5ZDMquzoxLYbujMrodQHM2D9xkf9XXfxUZChJ4jDEFQ",
  "key12": "4LMBGGDipfHKzfxVcmDd8W2ZaVuKs9mwSgZSbtGPxmboB6Ypw23vwDTwMAt8oChaAEs7U8gtsqCeg64VCkzuuo2q",
  "key13": "31YJLh4jmDPn2Yinn74FwWKEtNdk7hKD5yN263Js2rpKKANDcmExavr6yDkSRSDsG5hmqXjHH6kJSZS6TsD9bR1B",
  "key14": "48JKv6Xx3w53ezCdh1LYtAjkLGUf6VjxZrLoVMabTxdBN32xyEtXoR7pGUQKrVd1vrsaEseekJGFgFu2ccYJLV6y",
  "key15": "2acjsZjDre1yAX4k6ARcFLoHqRD2TGVBmyrayhjrPTYWCEk9NNxmhE3HMsNrTFnfFv24BjZ1g2fnbUupqjthazJ7",
  "key16": "2dnxJ6PD4i7uCtmeHj53UseNiZC48HGpDVbp4qEVSBKR7q5svPee8fqjdRGNuKTZ17sN6y2hRYG744n5wfGm4Rmj",
  "key17": "3uUBbw2SYm3k2ZUEWJGmC3vRPCHCmcMc8yihNELLy5zYu5kwCYox11Gi8UytYgppreQKSVbASLt2xW66CCdpwqni",
  "key18": "15Vvnt2m65DJS7xHTkZpFNpsrsbXSYy2go6ijJ7FkmxPQJ1Yc6tmHP6js3jAhchww9SFJzozFh4Dr36n6qFE3Tj",
  "key19": "4tqjhDXAsa9SM5R4ptarUx6ZXhsB2tRC9MqRUza53CAKdHtQSS4Q6ZC6ry6yVyqFZKvmCin5QabVcezmyrn8FHug",
  "key20": "5ANMnY16geHCBxHAa94JnmBdY84KWUxs25vT1y1w8zpewf3PeyC6FJFDGRrZgUA4CM2yLSg2kVZHhSUQoNX5HUmA",
  "key21": "4GwTP3oHD9uGPiezqyqYXTdr8gBECFwywpNGEgfqEk4YyovAAWCio3Bv6z5NmhQhsNPmgEvG6rCXP9Zy22iZEnuu",
  "key22": "3UEEa5qkBN1aEzK9DijBu392yYAypDVbuMJ9iFLff1UGubev2UNDNjxTT8rTJSnfCMadYmdRjWay3HkGK7Jc62r6",
  "key23": "RKf4ytfRnZQYNwsYToNEZEWaWjgGW27Pg6MCgeTuBCH8rweK58HAzBytN2yq7XqiNNbjSBvsfeGpZf1V27GGkk6",
  "key24": "2jUu4QvPp6MMaFVMikZfebc6LJhLeB7EEbr1TbiYWqv4nSP2mSAZnrAvmgjK8ZCnaRpwv2wD1AhpPAV9SusQixay",
  "key25": "219kfkkSbMMb9Fe2YzdtfxFnRs3eVESUngrVHMGZFACQXnfbpLzfsxY4JtYbK4EBRkxo2ddHgHgzvz5cGckMauHe",
  "key26": "3S1v2KisePonT1WxDYjTwcsFa3GuR5J5Tyvza1VFnpWSFPqcvc8Q2zfJ3TQxTgGuCEmKrjy2W2gVMNEGbr8VsfwL",
  "key27": "3evusvSAbvB9DstTPEr2cqTK8ox7CX88D2pZHhhFZxwkqBWrq7mxUP4s52qx8VaPWpRFEVDXzzbRHe9HBxZvV2Wh",
  "key28": "3ifhmxx8auFLRqgohnKNc6RuLGSgMC7W4HivRvtockxWygjmCznfoBniCz17ZQVuqijEK4cRegpz1CdfmY4oMzYG",
  "key29": "5vufw4De184YzyAZmkFPNdRtvviQidPewRDqbYTKQWsfrx7BQuxwLwFxwHFrNATGdih6uwUEkY1mQSnf1cyibp9k",
  "key30": "5wibi9rkYsUyxzcN6ojVxBfGaMvuLU6V7kcvzE5y33FXvKecXdxMg7G5HJgjpL285Emds3QW6E9fEWgs3mQkoXir",
  "key31": "5475RDJJLP62War3hrVBt9VVkGeLimiMeGRqiPXLnRVFC1qz4Jm9aNUsEMdqm8DwEZz857qda5yt4BQ2P43dNYht",
  "key32": "2rxJQb1arXbJhQBE4MnzLrz8FNW5ebo1G7sn19mBgnzRDvSr3gtBGJaF8yeGWK62kv4QVxBYZqyfeKr1ECtvAzwn",
  "key33": "4NBKjnDKYHSFpxwqpcQihwpoBs7hd93KCgna2yxFavTK4Bx5irAy1fJ1fYKHZXcT34VWxvCNMEhuuWFRf7zqkvgs",
  "key34": "yiqaj8FqWHgsVQfEG85H81zFvXEkLSpknxmAF2RuYMVFh15zQoVF8HXwvWZg8t4JsNpwf9rhftMQ1PUZGZFEakg",
  "key35": "64EPa4u1FQm1QzeEv2XAJtDMbpDnftVL4xDD1mHRYoj6r4x1WnrQQYuPoUYXYmyuqFUAUziMvMgeMnRXGAhNZHwJ",
  "key36": "3a2PRquk2LfQudJnjfJainG6dQ9a2RwP5n713rq8rr9m1egiAL5tpjb3TCZKM5YryWNQ7fSgr3UgFTF4e4PH8G2n",
  "key37": "3z1HqP1QMUdWb6fuQqPCVyKq43RzxdoMzG4BzYAiErcjAF3f3dmsH1TCP9SrnPmMDYA3w8m8KUEWqxKMmuyPYNzH",
  "key38": "4uJVJeYaJUsEYWuu5pyefg6LVQDZTBmScXdXiYSVrZMekgWjdjVhd4w5BF5VEKNpvoYYS3LJoLMnAKkGBtgD6nWJ",
  "key39": "4KtnXC2KKM5gVvGoADhrM5rmposmQ7STigPpbRmF2da39so9aNufQ9kYGBwXd5B3PiLhfWEjtS8FstfRVzCFPk1H",
  "key40": "3A8PfzqN6gqxJnBr65ZD1BKBGV31GPNercjjZd4f5jANdsq8rkpsJAPczZgzn7f9BGtYT21TuNDZAM4biYsgBFiM",
  "key41": "5aAF7eLJeYusakfsVwXM3v1Bm8s3PfyYHCuMHwvUWvnwMnCr5TJyTQUMagEA8dBgK3uBMS2an4SvhpzzMxAQVTAK",
  "key42": "3AfDUNPKvE7AsqwgqXoFHZc6BxMj29jeMRsnTGKPe3oh6jd6AQmWBzpFn5osZEKc85ZYKE8rpH4XZ8RMoHWv9zjE",
  "key43": "J5qXbw1K49D5XKUu5SvDGpXsx6iW2qZLA6oFTXPYeJhnGH6d88GXYeMrBtGrCt7uDVjQtbZfDVfxnu6DHdz8LMV",
  "key44": "4WAthPjmANRqRBYBMwks5dE344sxbQuy12KLKiwVpobkYXEaTypseU75BVjQ9tnKoBoMDDKVRGzh45mo3LcHEvzG",
  "key45": "an8bocjPnJjp6SUTywU9rgpGEsTiavxj14a6Ah8zbgVAhige5vng1XBUMbKE8RU8r7eravd6jcKgZfzshqKQfUZ",
  "key46": "4V5vFqzqgjfZJkEfKiw4bfGwzSAgbuC3iNwHWWnJ5qAAbdcMS3V825Ud7sdj1TBWV9R5LHQAk7JdauL792Tsb1tD",
  "key47": "5VnKgo6oBEwTjqeosqKqcscoCKN9F9m9UK1z9pgVTudzoh6seDgqc63GzSYEbiY9h6kKLWG2tQVw4n7rRkQgqcQV",
  "key48": "5zyeUfxSyvNSZwVRLVW8vAUCgTT57uR91xKzwbACZCNnwG4SP6B5UkWwWhhKbJ7mXQxecnUUNj9crtnL2FpBiZNf"
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
