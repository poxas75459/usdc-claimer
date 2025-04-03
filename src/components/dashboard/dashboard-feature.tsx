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
    "4CHwMWhr2koChZXtwYLPQRycM2v15YtEVNm47yJRCFxoPfCZGTWj4ce9SGzweo3qBEsCHNFWJtbtZNiwdXH1cGnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTshyFHfdJw2ns7wAiykNVh5jqBNyGAqQimaFwJPcDYZEzABvpDPLszZaPzD85SkRoAtmrSt9bLiGykykhehHyY",
  "key1": "fT7viEE15vv3UFr7c4eR7E7gNLLd131UYip6dxT5WEBkAdaDhsMwT5Y7EPNiGKVdPkHxgphtcq4Wcdb39UCpbdN",
  "key2": "57Cc2NwiDYf7gqaugJDA8XaP78nfpo4snaCJdhtJHdmSPjhbX8u69Ejs1WzbaVMVegT1V7UsCie7nrgiUh8D7rMk",
  "key3": "5v3YYd2vkbXqFHuZGoaXCFMGxLv7JS955SUSgNz8xHf7A9wiFnr1xrnNJqn5hqB9DiAnxBKrgEWRa8xWQt5R5Xaf",
  "key4": "4gn2jfg3oz6cvX5BTbQWSpuv3MDom5g9xvTrhBE5DeXL3AkJJKZe7b4bHnu8GjAUaw29zWz3QpdRA6HwD7Z3owBR",
  "key5": "4ki5D8mB9WZ6oUd5oM2ZTUAsJLQf1BCZdBd6L8L1p2BSD6NX4X2Bsxky7F3LNtCHGs6yy9vpFregYv5MiHvuhcDv",
  "key6": "opqMgxn9hnLnWGcigig4J8A4FxQMLgddkSLwGLkag4DCmjcsxk8YdNFdJNunt1y9NtVyASqaqcYqL5MqNY23TCn",
  "key7": "4wWzT6gJqswXqreXyc988mLPCiRg5snq5c1P7B2gFAwmGJGseKcW9sjuL9rgmk3uJ162CX8gjSUpCHjDrWDmS51e",
  "key8": "2xR8fDBfz8h9J9bhnLnQpGdrnmPXXxebvqGYLVAvF7Qsmq2YrDLJBh5Kv6sAJ1bx9o2pBHknUhqDqTLebxGPADLC",
  "key9": "3PUpAeiBrxU9geKV5Ni1nXsumKvA9rwCXQY2r8gNwJJhKskXs5oPNYS6FxyVfHgfB4JP94jQ9UEtpboTXmRiZn85",
  "key10": "5v5H3XBPRtiNpJ9H9NfSwdz29Yxb78sspyQsPBMjZLrwtjTXJ7QhVn7LJEmBmEDR4qcJjkE8gDHESzJatr46wgvy",
  "key11": "51x4Vbbr5EXWtCGtWWoMtEQ59185xNR7ppntPGMmZKEm2ExmmwWDyn5syzWkQQWFimScGztLeYgj9qQ4hGzFwnoN",
  "key12": "3DeeunF7749SBk88ABvCAUHxsu3bHGyfB1sfDktqNEJpxaTrpWdpmgKZD2DeP6uaHWDnAmPf7oqyVzT796fNFsyZ",
  "key13": "3fchd6zaUyP8YM86dRD8ocue8jbqZ8K3Cx4hQAQRm6sNNbAVYhjWPHNKMpQ1edZC1uPyWYb1RcDZR2GZ44sohZG5",
  "key14": "37wLG6BeJX8MnjKasKNDHhgQREbjU7ngcqtndjVH2bBY7BGMZ2kyNQxdUKw7LzaLWiyPimUNjDQRa9PiHeNAXgtV",
  "key15": "3JKhKw9occefGf3XcgTGQL2PvUiH8SSdJrCfbMnRA6GGmtvvQd2MM5XSuyRAn4vdWrZbrAed8VnxE5reCnV9xjPH",
  "key16": "wXctbDmiMrQhSHDZ3Lw5Q1t5F6txHEFz2MHSSYN3wJSn5MhZfcQyr6r1J1epmxKLjLiquw3c9zXNMtvL3H2zCeX",
  "key17": "5AYJ19TyXa8uU3CezBufV9hWXYtiRd3oKfj9G2L9iER7xX7xdMWq5Q3tHw6JqQezkYkReoYE9LGPCt2vnbSGxWth",
  "key18": "68tWhb2A3kK1WKr4bPXWvJoxn7J66Y2QYDe3Rhgy3NtWDdHFb57VFrwzUSPmcodWxnL6CFiT6Aa3JuzMcyAeLFD",
  "key19": "3JRgWwJsxdj7AvWGYZ5NehbJxQpg6GVvdPsxHjb5MJcqZin9P7XDcBNkDAj5wSxwgQDoPBbxVoXKGxAZn3oXABJS",
  "key20": "2YGAj8A7iELR48fsPLwr9kqRjoejFXmCop4gzeLhzpFXKDerZna5D4R8EqAnwEGpzzyjTEsF68CQSJRxsjQhPCXn",
  "key21": "5RNLUdeJ2eTUCbkTpq1VUdcKojX9bpBLPzeJn4mFC3SSsW7r93nhgJZ6APkRriDawatEyde8MESFoJZy4RYiTrBU",
  "key22": "C55sszat2PSVdQV7hLa4mRKaDcngJ3yzH4RpkiqsM3ZPJwiy4VsStfoRQkUiCnqE6YroRsnN2w7iYqyb5JfMwcp",
  "key23": "38Nw6goQPu3pZMMh7jB2nY579eqTc9apAMAhEcV3DLk9zDTKZpfmCjD5aQXgQtNhrfCTJs5ChM4jcMVJxv4wx8Xs",
  "key24": "4rojVovmPAHgz7kj7NUknPvkBPXTxkcLxMjeHw9d7ovDnMm4k2QPYyUEL8Jj5m4FhsCwrVrpWCFTvSNhxp76gzVL",
  "key25": "5PPm1MSjZS8wrnu7Wyep8PXvU1tj8nmZWvM6vutQ7z68MnAWSLn3xmDXmcd4CE4gwK2ovwXDBPrjQW82nf6Pnuso",
  "key26": "5jYpxFcYKMQ77Xdxn8juTUE4CZiHkDm8n2QVpJkGuvpzNC55PvZ56LmAJDZRa8818HUPwSVMySHDx9rqgsvyFj2k",
  "key27": "TcsEghaDf2nDjJgZbVzLiRNVHhysxe9N8pjVAcxkPic4oXhqMLwqutZpowKCn36Rn6Js6cgb6VyjmEdYBMsF4cV",
  "key28": "3454HnGBJEPGswvCBx7qXUoiXepSyPuxZQEFjGoW6TrotW5Uj8KjiWqyC5uo59ZCPpfa8t1Yvuwc8cJikdLUyKyf",
  "key29": "67F56n68cSmdRkfhqTcpph1jsaT5MMPre8Tv3r221o8u9TTmxDy9GB4KGLReRLrN5mqr7T8uGdp66AMVoUNnEJcw",
  "key30": "whiLods5ndJHXKhK2xvWGRGMMUeP5f8farVpB4PorkT2i7WEdR9uhAHhtbbP1ATZLdkbtNXfEDu1iZ7mjhFrSc8",
  "key31": "5e47v2aDgaYr9tLYLBvGnEeWEdacgyreeseWquHQCE1rY7Fs19KeVo6HcAu87aztAkD6JBQN7L7tWs293MN4voPo",
  "key32": "3s7YKNx2RTr2AjMepFoHqkDhLBdEq5h5X3wHDMtiAGs9adVBT7vH4tC1xW3MX3ppiNxNWKewThbZQaT6B1Gs8tQA",
  "key33": "5qLqGDCczRjRuZycuqStvmws9GJZcH1FrdYQSTHbUNH28giGWJsRuQvcDXStGPWdeJZNLQBXKHzRSoizSHbYyoD8",
  "key34": "3wiz92viSMqDSZF6KJghqkkVsTvENVLtkJTozmHnJY3FhKCubbm8xuukfNq1raSeqQf6q87v2yNXUdHNZPcXbuZu",
  "key35": "2Bcx2THvxJv6phe2RVywhKfub774ZKf2Giwqu4ZKXCYgXAU2huuz3xZxcA5u2uaQAfN4K77HUKsZARCpiJEu8uF9",
  "key36": "4cXyFLp8nyVarX2pqz3zwgRxCrQ4xMhnyTD3iCN5ECnA7jPqQ8EJQyc5E41FPBC1ebgV8wrqQVvHRqopi4gBDN7H"
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
