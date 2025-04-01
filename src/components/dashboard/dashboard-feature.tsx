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
    "4C6KNhgxs1dfob3KoXswzGSSHnq2wjmTB5H9G3HKYn8phtpRgYA1Rrj27tDy672Vcf2Y9r3EX2HUduXEyYcJSh7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpt7jDYWAAkyRJ1DRmX7FdWhYt9Rkm94UCrjEPkViAYPhQekGQKftEYMcmaxFfzGU9D2pmFvckKKzYj233ctW9M",
  "key1": "4VBshZwuiEmsLTeY5HEzvDZD7puzp5bV3GYzGHRLA92y1UACv24W62dPAgRmHtdcib9vBuBA95sGPaQMdh1x8V9E",
  "key2": "2vBKLT7x8EuGMVyoDf4WE5ZsDGZmYUWopmb5JhRNPy3UHt18RpYme4Fjr4Qr6oqtNtGuGNqSASCy6Pi8VEvHEJQv",
  "key3": "4XX5HoS4MzAano8CBkP54C7L2Beq57Bg8vuWULv8w37nLxmPezECYbgQJbbVbmjdZ1ZsHydpntXRudtKHEoWnUZj",
  "key4": "4PHZHWBYiEJcYyyPbkRcfJn3ntmLVPeVoit9ZvNNYETFUcNeWZpGzXvEfzNX4V21cmSayRa14XmPSzHpHU9d1RFG",
  "key5": "4eVV3i7WGefM8vtMzu8j4CTNPoQKn6sputbkqeYru1BGprfEovk5Sxg98kAep2MPd7LeCAmr9CSo6v9U4EzcJyCq",
  "key6": "3tSrauN1cqQzkxeX9HLFisTTwQYFaDnYiZDAk49E28mnihodjLyT3djn2xUdgp7vr6KS8AyKYgE1tof8U7GUJMNR",
  "key7": "2aJ3drPMVLabnJqbMhEUFf876NxziHX5fB7fNED313e83nxLn2gPuaZhHPZayWCd4SpFoEsspmxtrHMKetKXtYFy",
  "key8": "3qMgtkA5VRM5EZXXjpC4X4CkpoFmBj6BsXQ7EVgbTpNEoA5YcX5r6AaeWpLP6sRodR3JkH7HgZSaRGGMKvdkpcfq",
  "key9": "2yZZvXvvNZdec8DiSqaiRoDJ4tbAjVCT2KLwW9kvG8keprJ3cgdpA9ATQiaKRdLagAbp5uZsyFa795YQw9A5b9ED",
  "key10": "3BFK7KB4htTdEXNmJPVvoq6ENRjeWoU3diJ4EMQ1bNbPmLYyBATGaKKFCQnnsu7LChgatYLhx7ELCuuWKEapRyF5",
  "key11": "3QsTVRFmZAQAwyapdQ64sD3p5VEsCX6ZPCm287CFnGV6bX2i6go9QjK1HRL7Z7KHZhzfwLywfTQouh1mu3F1jziP",
  "key12": "2XSJLi7NwTUVAyLhv6VraWLqzyG9ZQMutRXsVq8NFMcSgUQmJqCpkscAjHMiKmG99iCWGxB4kfDpHD2cFMexNTQP",
  "key13": "3ktuRJoBm8Lwj58Xxb7ToVDrU9pQ8FBtZhno63igmKMTvtrt7pJdSa6SQPQ1zUEpdP6bdPMnnRVagVd6yiQMGyc5",
  "key14": "4eeenxm41viYm34FbhbEcpC2EYrAeGJK9KofiSVBruT4ZavoB39X9go9HECHeeZ6hhxXsoJTzifimcoQSspr8sHe",
  "key15": "5mkydXDxgk8TG9Jzy9gVADgtcWwVhexijpF3JqqyfCQyvteC46M2LWgCdcByrNWmd5my2dgzCU5n4jjrdRFiku9b",
  "key16": "22hBycfTzk8JoTwhqdjch6rgQiY7MgDijqY43FCW7S1nN9FjcK2G2Fb56bJo4VfLcoLuPsHgyqwW6dzYwLUvJkMp",
  "key17": "2MvqeCf6KkyVWTdL6AmoaGSLzZCfpDH5gTyf4yeYv9gHe958wJBRGfaeQ3h2XL2bi45gZhQQQDEC8hjR5LEQ4cV5",
  "key18": "SrEiuWAPiZUQsrgsjoeQnJPT2BqUiUR22yJtFhp8nHADvqipWDjgdTNRdXfFUawm4ZFz3C63FSjv5648ZfAmrx2",
  "key19": "4AM9wHf9Yhw3KZbv39K6GbrYNzBQ6T9amEoYiP6K2Vd2FjYPXZpQ7aBv97Uf7MgHz5RrWVRjmqSKZE6nwdXjLVFf",
  "key20": "2siTtkkUM2h1AhzqDS3bJnLcTV1BwA6GiSm2HMUqi6boKJzhaEiY1bWLLwuHHAdeDTr5FNcbHKGBgetYe3xaP1bw",
  "key21": "3PQfzCh6XuD3H5UAiauCfYoiURuvEGoAwLGMBMvTKQaSDF5FMXTUTugVcqiSpvYsKAxFm2E1vDjBr2UnuUBfAsqH",
  "key22": "5DxELKkunsysxieUvVN3pEkfg3ZEiqhga7aE8fV3hBNmqJNRiNN7kkgmEKrpnePbLhwPRR8sqfRLrdwnvn4ZjfpU",
  "key23": "WCN8bUGWxudDGLZSrEn1G6iA42zK9bL8pfYH8Y9waZvabbWFGYgRdxvQ7x6dukvJngkrThMSt47yLe4w3snuA89",
  "key24": "5QHuwjZhvMieic94tXnBnBKHginZhMTsFFasnAsyKsoZgnwBhJaqq8NdN9kdd9r6r4FjA8EtAE5Zac7KSY98D5JR",
  "key25": "2zpgGNTu8ogT6x8WAAsEPGHCA1Ak1mLrwbmKHKz1Y27ihno4r2fwje2ZRcWz1ZMCrCZsfk2uxge6PKg9jNBQx6VH",
  "key26": "3qvjrhhucPS7gpntghMvxgQbgoKUSSQKdh16DUrNcn8A6ZDHMTxF4Bgtev3CLyPRUULnvWhMnGwL6qCV3Bfj8CZb",
  "key27": "2MBBLT6fJ2vM1m5J7B4bStYXvEVMsxi2FjT4FY3dw1wGY4EoV8rE6oMinF3kk2JT9s8Mmw9cqo9ZFGWK55jknj4h",
  "key28": "6FQLkXXVpPHWuvC1xqiZwWrF7KXoaPpVEmbDEny6PTaMrLVbzZk1gGUmzGg1hBahVenY68MgTjLTnPtCviRrjPP",
  "key29": "4gasWMRW1Arts8aQjizZbYF9Wwo1zfiePKzxv7bQFJrf8Ey1s3zx12k4MTegnawd7ZjHPd3RAXTbMUPEXydRTXMo",
  "key30": "2kg7AjpqJXuNUy6zmPvBFTYdypzWyf4V1Kf7zcjKeeYxR3Q3cBE1WW5nt8FYB5qDJ2s9uFkfnWWz8Lg7AmDTW5SM",
  "key31": "xdvRL79R68763MtjKgPinfBMuwRXQinJgWrDmhV7UAz9Khi7oUF2Bm9WDPto3dn9HF8yZMXsGbzoXjABNgYjkrS",
  "key32": "5RbU6FHXvjjCDpMGdix8EVavtSeWDs9BW9qYESYtv3xkfb31XGTsiG9QScy9AkMxVHu1hRu62EyXvbxQ7RRcNw4q",
  "key33": "3U6ftKeWYtfGCUpVmfMDPywMXXvVK5WHojZef2c44D2GTcdcXqu6HrbqhCNQhc8eSdMyqeyE2LGtVXJwhiAAkiHT",
  "key34": "32Hp2AsZ3EiPA7ap8abetLp4PtvMqdE9jtDAqeZiYkcGe4XQXq7zG97S6NvS4z47eGU3tNgRfBfEUy6h9fTn7Qca",
  "key35": "5mwVKNXsjZR9ds753znF55zC91VW4eV3z8BWyuK2D1ihuxr6A9uTNEMd1RoJBJLLePvLnSdiX9yRYuLCDR6QvPZd",
  "key36": "4JjDVtorq7DjS76cdWV1f6NYTmUxfuKfTo8bBck6rUSjpScigUdzEPTp77BRYKpyB871yFKyNheGVEwPSzCXRqbS",
  "key37": "63vb1GEG8rQNHdZF2p5QmgHpJenDPQMiuKnaNzSubM7FiHquswkSt9KPefZx1Mn8BqSA5WZs1eKZnruZZWQ5KY89",
  "key38": "ufZG3A4ofKrotpnEtSHqrRbd6dNWVegMpWhfThyVdWjuz97CyvUrzfKoEThA7BYCvwqA8oZbWU1ty2Q1WvpT1a3",
  "key39": "2u6Kvcxkx829HCvBYVP3jHQDD46oKmT5FJwphGyx1LFCWtMMFmdkXsCQZF6uRAhr4un8kyuiZNAX4Pxb2zyVsCqG",
  "key40": "4FEkvRxZYrVv6Hofsy9gW4UrqdUdzBzjJUML9cCiJf2v1XfYDQLn234yzyBnAqLzPWD3sbxDVEmNZhTJ6T6RzvHQ",
  "key41": "571PTnmRP653AV3EGJUkGr9gX3tkrCqYX7Z8k5ZoC3WToQUDkRVQ8kd3NHSYUZxBdpc28u75qRXPBYV6eUnc9PGS",
  "key42": "3dAuvKkiyzi3aCun9DsnMHCtgnEobGpfzawx54Sv9Q8FUZBFYq87MNc7kAopeuRJPhY1HQswGhMNBCgLd6KLTy7C"
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
