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
    "4DJ8RWmFBzDDjA1LTvLrTmfM4VdhHa3vkTFBnwNihpNAexxrro9CGiVgvSybZZ1h31xA7iB8VnXeNE9iLSvDM7nU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMWKjTaTqbiJSgoAnb34oVfQzPpA2Quw53Um9bNZWoY5vKLYmVGyynFtL6cRiuZfX7mJAjkgqsQsYqZSsE6oDqe",
  "key1": "2Bzm4H6tNCQfZc3oQjih2BWse2VvthzEPsTmUmsuS52vXxbEerY5QdQnRkVQPJnki4xjLYqk1oTV2p4vJ8gRM99j",
  "key2": "3iQY28H3pya9sBEB5zRZfvw9GVcMNyrTK2PNvBsSqJNoxdGrH2CStPGX5ocBoMr7ohdVyEG1UfP3DHWG19BdzJVN",
  "key3": "2wgorDVPeFUtwsKdoGvmSKHEwd1qtbC4V1xJbpYs1zcCX7UPsi4jCTzFjJ299REbBERWEKx9tGHRPkBzezcHWwuF",
  "key4": "5KPhLmUzRVpTi3uQFCYDhQEXSRCqFwRnY4vAXubtpRn43VbGPw3D2BsPjQpDoHc9rKwoPnpd31RDhWse5WUaYhx2",
  "key5": "44Msw3t2zueEL8f2F84MPtDqv3QEmn93cDCp15KD8Cs415aLUqXGGcePTphuxyrgJj6z2b5qvTWqzBEGtJU3HPM",
  "key6": "4nMXWaK3NCSW2wFMf2pCPos138psou3y3GUTHuD7W7ytvqTDtyJ81i1ZEfEUSC6K6teaU1tnUfn7xTmFUqktdBHU",
  "key7": "2ZKgs9KK5bGgwFdb8YTNBSt6ELy3AftNTxvnVCFfrrUBidvG6eQUDZihWGMxNJzp7k3TEP3GdwHGdVRjdY2D8kuS",
  "key8": "2WaM9T28QLHAWfiMXR4USftKgdyuhDiZaF9BWU6VgKrt6K3Ad3UcAZvNvGYo4uEXt7KrAFCfZU378dS5R9veXnGd",
  "key9": "3aY8Nht2NNNAMMXeMcGPp2KMdQ16DgTFW5FBhhsEiHY5mfPFavQDWeyf6f8TyjaGfmLoFUDUK59DMoqVgxKdwJ7p",
  "key10": "3sQ3uNMGBVDrjWpEXfrFVTnx55Y8Luv4S4bKagGXg7VPa78shkrc4fg8SEaEe2GEhY7Wm4qgjCq867ikV9RGLZNE",
  "key11": "3NDaPqvKET4s3YwLj8iJDbc48en4UvX6nZwe3nSnFHibJyzF5iCCJjxi3h6kfrX3TuCbWPXQPWHzENTJqj2VGUN4",
  "key12": "64AWcqMasoQ6BP9UmDiLi7MYscbqdoDPo3WRgCHxY3Eb1DG69oEePRsTJTFxfHJFmquoUTPwHD9GYSFKV2Bx1dJL",
  "key13": "4c4tsXAAbE6ruiXmYWo2facS8GeL3Gp8aDVaiPWCoP7zNjsZzewAyiCdh949R295TRYTEcvN4yWxozvX4e8DbUAK",
  "key14": "2ShQi5RmXLhtK3EJ4cH8ExM67mzh5GmrRHfAGMrjoW38LkcBucS1DSQmh87AKkvQWKitc2dBYYGhpSc3wfSrGYVm",
  "key15": "4pbFYagwbNiVPDbp1FFVHuLKbQPzVRk4AQz5cmVC7EMKUumTH5L4KRjERau3pu4FmbstytFiBfKmBxd51CAhusaC",
  "key16": "2JStouirrWMUHyiP889b3ALCssDcrnCiuMBW7Cz2FbSuoVhVoQdhzhGbrsZj5hzsaC8KCvQ6LT522Qhuzac5bpqq",
  "key17": "2DJAeh8SqPzdvbFX7q8WC2w4iXkRUBYCFyaAus9dajNoNSBNyFaStZygNeMBN696Lr2ia2HeYHjbTUeRcrCAPuQ",
  "key18": "5VZ9jG5XQnojALsYthCtUhgQLMXAWEaBTbjCh1AVq6DZw9iQKMw8dKP6BorYusBvdGAuviyUmGFR2wRAwKGC2Sf3",
  "key19": "9vKTGP6yzRvwTPyE7DjugzYyAVBUF5TwNCkAnG8eEL7sCY3qMyypeWJ4CP2ZKbWNgRTLGRe1H4uPoV13Q5VhQob",
  "key20": "QJRNHPNwJdq5zhMwpLtSC1PpfEQT994yGdS5Ts82zAWHwN3K9foKCtLts28emytfmRZWtxMJVv5SU1jWCma23zE",
  "key21": "4ZBdAhvw2F4rZAohwEh5YdHQRw8NsfY8d978NHLYrug6R6dN5BiukniioPiYLLSaJwJDaamB7zg1h9fn6D7VrKdB",
  "key22": "6338AnefKz6wMAkE7WnLaUeLywMbJBCYVp6sX8ad5CL2x2CAFSwu6wu2S1iX3CXmnaFDSEBfoKuf4KWKuVCNggdx",
  "key23": "5FNAN9XJtmrWeZF94WfBzRayEzCYKXwcz4arHzfxXP7QG8QWbMwBWbkf7qHPkq3P9P1mq3Xb9u2abRJm8qLojCtn",
  "key24": "5zAm2wxG8BfiujqR76pSQFRGduyZUze5zxqp7qCpsHSFvP8bpidDRy3Tre3ZgdFBMZab8YLirmqJPT7JkJXfVxnc",
  "key25": "cuh6htaTxghknEV7jsysHks7MTCvXAkPrmd1SdAf5rZ2gHYeQAKizuoVYMN7P94jLQsRwLu5nudu5nGjoUTXsd7",
  "key26": "W2wFhNWiEVNKeuoeWMa8wjQu1rPbkbAwK3WLQszp3GSRmc7okyG4dV3eExBkfrgjhxMAmTHcfxYGsMjGM8eFvWB",
  "key27": "2MZFHAWs84ReXQ5eFqX9RLmti2MneAqbRP5UfZjq4gPGnYRMLEFUqV2uhXP6voZs4PeyKcwtAPpZFTVBw2c2gvNw",
  "key28": "Z9a4gdaCYsvnbjioXhmwkvhV6ayNGtMyejzxJZmZWvBcMcussZiHurqpE5ni5ZahEYWh9zAef8tz2sBXRgRUhTY",
  "key29": "2zbu2aEJfJwCjRqoECYWaBL1pRq7jz7JoPfov1vLgiuh4hvYjfZxZg6VzpQBuHd7baoy8fHgbntgM8jffbA1xkPq",
  "key30": "SJcTAbvqD5KGWkm8Y7ErG15h2kTxqu1cosXMEE2xBbFRQBxtehAJ6zFpnGXRKjC9MzsyP2AbRwsBJJAj9qbM5Z3",
  "key31": "23DcbY64JTxa1uMdtE5LqYPdCHPbqRMnsk9ncowoANvpTsY7ssbWcipj34DG95AB8CuTfTLF3x49qKmLWJ1i2hTT",
  "key32": "fQbzXakGf5LYc5ojt44giZX6h2Bh1XRj4ubPtvh7XN6rztJd1DZS8SRmEUoaeUP3sfdpFmNJrrpGPFQvq7uizT1",
  "key33": "4UELo1o7GaDFbEQcwUfrg6o67837M2gA7qt7rFroZV4P5mwSwusEkXEfXb6Kp2T5H21aTR9tGGfqLZAG37P7fW46",
  "key34": "SWSuCix9CbEowBHRbPBqdUJ6fHjBH7Woypz75vZ7WCyQJtRUh3LJZwM9yScuwq3txzxYe11S7zCRgb4P6zmnSB6",
  "key35": "5pjBR6uYUZVmfeQpji4w5JqkAXkEu63rEs5qY3GK8goxMwds6nVJUvY8azX1oqYHrzYFf9MBQMEQjqhpyvWMi329",
  "key36": "5Xn4UDwsqp9WBn9s2LbbLCXZWdx49kFwmfCEGPi812ozX5PT1opf4bdtvaEbvr1xFdqhwEn9xPakSnLAydXLr7aZ",
  "key37": "3pBzCXKQcKyyrjSwUgRbLA261uZcLJVdApHA8RzQFLWfvQk2eWfjoPot8hqB2ZYqo72ZCAWcWx67vGzG7iKFSrsi",
  "key38": "4srzBBLQhiNCG84xTWFYbN6MZmWeEnXfdX6N2P5hi5gsMF15ukU81ZTEh9SBtUAbdCaEspDL78QDPJwAiqrnPNpK",
  "key39": "53gbutBGt65PryhVKJG24H9zeNXq7DyfNAJFmWdrAN5hCSeuEnY8WDxaQWevbbqDd5RVzx9wKDMfAdP5E2vTddfF",
  "key40": "5eSV68EFAtZt44ELfNUQSQVFTW68NgUy1yLsvHLt2sTV3GANaKKuBsv6KTHysSMcx924NZaesyRjoDkdLMNsRtTT",
  "key41": "KDTCpJD49d4PhnmZptNfnjpb66FFuoMRSTTg92FoWj5dVGyrcaVub4Cxvvd82AXtXkcbFDtNWHxsSsobUMXRe2M",
  "key42": "66SysMUaGHG6rcvrSZYEKHoe81kU91t1aDdtk7w9kR6QDJBoW2pDAsHdJt12dFGcf9GcWD95dW4sG98GDDTCH9Ud",
  "key43": "2bqywYTqGZ8giujkbT7y9ik8sFUudenMNXphqZg3xKuJk21CkydVW4ci5jhXdbV22orNcWgF7hpdqoV7jS5tXGXG",
  "key44": "2J5YqNLiZAhMoz58vyWQuvrpAAEa7rP8m8ShYjHbqG747XVQSC6N4y734Vb8zqwCPu3gqgUQYAMCUKESsk3bQp2u",
  "key45": "2oNyKUX6kBMjrkXX3LcpzcpPPdENU5dyuQJcEdjxiNW6spkJyXW6jiorW9jdEZvdmkNRJHuRLF2uzjiodRU8S82H",
  "key46": "7eLADeuVHC65UeyeFYPCnrg2FahZ7kxyfXjyiX85McG1yske32uBzwQJdD5jPTQr47EXHEm78gwbjR1TQgfRV2Z",
  "key47": "GvEmJLoHw5MY374EigEpdzYfFjbA7zRFPfiujgsDw7vxfv9vM6wYiu1Czg88boCfTmsnBozo7rcPLhTmmsD4Abb",
  "key48": "3rbUGcK32M2cp1HT9iNoR6u7UGziAapGexTod3zFL4s8S2pzTY7FYUVFthbfT52eX9NdLSFyPbbCTSPtcwQbEytd",
  "key49": "5kSnmL7XvmebrAXd9Ka5jMhyw2EVfgg6enjJYNfMAjzQi2atnfVWuTrhZ8ebbEz6yCVTyWCzuY8Nj8dAFHRA7z9f"
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
