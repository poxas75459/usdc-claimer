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
    "5FpjCx4PxbAMU7WVqYmKgYMmM29NQCPEcczPkCNctCHa9EncMEFTpgKVrHM1pUK6ikP83kEEq3U1RRFXBkDZcatP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7Es4YgDckaSNk5Y7AwiFB1sbPXfgyZQ5ytaA56Uu4GAmCf7v2YsQpBwufkR6Msy5KAJRvNdfHRKcjJeWounvyS",
  "key1": "3YjDxiFHbmTLTqRcmirkyJsYmmNFaFSzaBocH1ZSYjkhMoexmnSKnHgS9VdrTtCVseDR6mXj19jcgVzVb9U9Kr8f",
  "key2": "3cU34fGUDLQNoq33D1pqMQWiDTdQrAaiTyMKyaUDgaZigwkmAY1JRHLi4Z99Yv9L8yDNmBxNYCLxWeAWZGAPohrA",
  "key3": "5bsaaMQxnCajq7VLxrursDwmKTj4TPAMUCtXfQNw4hT4Yexexv8MVNaWU8ChRfHNUpxx43N3sqPqqr1LZhv8C9Fh",
  "key4": "5svj3imDit9Ko8QTvLoo1h8qrpL5GPc6ASYXMc95u5VqTBJqdd6EcxoT5zW5YSUgtuuzywzNPzdaMVMeFXEMj6ez",
  "key5": "5AsTAjW91MPB7b6X7bVFX76PTnRgexUYhrnBubfUzxain6AE7CfcKvwu96pdyFV8h4ZNLdar65vPzUntZyGW92YQ",
  "key6": "3ENV55Fd7twvjWoeghYnrsKqxpzChi4Hksd2XXLLU39KFPHdhZR2ob94k6EsUJnYKEdwLKBREnyKRHn34J9nsKWh",
  "key7": "32YkNM6KS79MxbU2NLQmLa5d4qxijnvaUG8FyBhEM9bKrhNWXkr1YDZYa1EeyeFgi7L2LAiQbdPUaChy8vxnvvti",
  "key8": "2nSKDPk2RKZHbGvDvzekWJEpapUh3VrTS6VUuCpdWgC1UyKWrQQE6SSv4YZ8yaeeEuuMcPCmiBi3FYxhMk9PL5pM",
  "key9": "4QHnLK6SeiNg7fcW31UqoZrPaQe27AA7H6b1F3pqJyLyZFXA4Sj1s1CtLgkrWm6qA961GEWHvhBVebvVaVFjPwTs",
  "key10": "DiTaXhZpU5Q9HZmVK1RRSscS1gGJsUjpJRk2huw7iTcqpociENbV2cUya6efP6hkU62ow3rfnX4yqHuHFLc3B3y",
  "key11": "xQpT21nFh7KS3AeizTs8n2WpzswiTiCwegn2rC8USp32Lps2b3jjKUbn5aikniW9HkxPFSHUeieNamAA9NrBT4D",
  "key12": "3CPLTUmK1MvFda7xx3HJMTLCk7tiv77AAsr1fJA56SsUqmrnmgjECU2uGVbVPTT9bCrySsX76fXivpMg7K7meMbq",
  "key13": "4vPW5snUgzJDDcn2gKvnGW2qNKN3WT5T89DoT8VhDMn7CZ6vhyQNL9a6BsBxegkEaSvguGXajTrAUdhA4DzpzDYn",
  "key14": "5PCevRKez5vEuJCZW52HVj5YUTfs2FqNH5SkdvvAMnnMqiWoZUXPSjr6TWRaiGm8UzwRUX5SNhWBbCjtkZWKteb8",
  "key15": "2dWAL1TNKW9tsW64eWEK2a5ruzT1bbfuaa41hNgUAJz9KsPi16jotgYS2BPZV9jTr3JkskycMCPoDV7nm54W7ptd",
  "key16": "3PxaMkWTgc7p8MEF9EA85jtXPkxzTfD31fM89qJLRFWfz7To1rbkeHLebCuknAuRxzJLLthtz2fz9Vg3ZsUhFHJv",
  "key17": "JnP9mr6tWyhvN9GWmSBeJEEFxTiUMqzGYiX5px2QZBzYf2gvYGWH5xETRHw5XE5QQuGd5P9MF5otHfG6pPW1xqU",
  "key18": "2c7Pg1ns8Gu44Jxa6tE41VeYeC38wyc8Gu48QhhqiTP6btGjXpger9defzh2yKncdbEkTyFM6DcA8DHa6BrU6nMD",
  "key19": "3mJCBmefuCAWdtkJFhkLBj3ibUTvhc8oUygZ4CwrTFUfPLZ1zHFucLqhoP6jF5MMN6cEXtgwu1tkU8N4H5fAMemE",
  "key20": "32UjAuGjdTzPSdP29Zy7QLh2CEKzUiQQLSvcM58PT7v6kAyHNRvsGuhW8yZcGmNogrLk63J47AMvKnswppxrB75H",
  "key21": "ujbmuRGuzYtziBD93qaekGCTNdPQpurYa2rSP51ncTYSZYvqfipFxv9CdwoNK522Ns8rNoKWrx8itgRxHfcptHp",
  "key22": "71q65pQ6Bk84zn57jF7j9Zhrh187UXaWyJ7V2sTsA6aEi6n4a1VncHNa6X9pWMEhPJdgVE1CcEn4FCERCvQWjej",
  "key23": "3RRsH26wD6QaMu6WKy98KJMA59Nbnh1wzkbcG4FYNPT6ecgWBoNRmt1jRTRtA7NQVxxh72uNzpraFwTRwofXXcty",
  "key24": "51LTp67zgGqyXCD8txcHi2XcgjaDx26iTtht6PhuYYggz2i6scePPcqTzqYsQtn7Gc39FnibkQHpzdoB17yqjRLE",
  "key25": "5Ve1Sn1buY5WGxTztSBzTsoQa9pA65kQAdsMRfRjA3VXvdndi2x59wFzmzkFX4akYwJ3DJAsRcpkoYmgMA23gsU3",
  "key26": "5BEt11wx46UqqxiQWm5e1cfhY5fNm6CawaoBDJGyHgoVyrpaA1FXibqU21gSAoxo9XXP7h1gEpFB7zgdUdmC7XnC",
  "key27": "4i63Wze9svpHErDCujawZr2KMAV5Hnqs8LtMtUobyMH3bMCctZxyGe1URN9Qewh6B2fsuEXsX2MCNKWHkWSoNbJi",
  "key28": "5VpA4UJKYpwWn78sAhziZqUKGKc4Q6JDiqGiPawbPx5YZsC9ZvGVyCf2GZLYnSaaouEPUJfgaMqXCnz2PyPwG8Zr",
  "key29": "2T8ZHprxM6snv945ZoGMZQmVGe8bmgyheBqDMHHXirktcjwcdC3gJeGc7LXxSU2evvkf3vJcPBrc2LaABynGdyV",
  "key30": "35HCBEbNYrTjbdnNajasNjodmwWo56Qeyw7sKMmqkCCku7GAcX896EErGrEcgrQUaTQVGttyjrgz7Damnmp4VJA6",
  "key31": "DPTxrJSebzptTiivoWe3CFCEupubfMRnHPMthnuPh4tyewHY7SKQn3wgmJ7kvpRe6BJz5S72QXMH22oJfrVhQbB",
  "key32": "51TMQAJGmJDSASrvyYsbn9zTw2aw75T86rH8DyQt4mUJAXV7bjysTsSCnnAHvsVAuQsL3PnpzdosxjossoAFJpWL",
  "key33": "3X9YaUGxHGWSXUpA1paC4kJ7gSmNktNba7FoYMwoCa2gRWUFiA9zRAzwRez9NL91FggwDvCdhNFjUhGQvMheF89V",
  "key34": "4dQFSTmAdkGCbP4s2cJY8Gk9FimcX436z67RWRxMGqYnuv1eBCpSaYJCAR7wevGei7xpLznbV4Kt18GJSd25Qk8e",
  "key35": "4BNkWwknKsrcwY79zvx9QYY9zzYDewxbHn3Xjj13Auk5YMVfycuBSaSq81AfPLu4NNBXSyRwBsBaZ9XRxt763iHY",
  "key36": "4SwkjQCgKU6qyJ3HJGqB2N3T2J8toaDfYYW6Hbrei2eoR945XKxhM27cZYA36sMGq6iRrmPJRkduUytUEzSQ1bM3",
  "key37": "2ZDoj2xNFhzA4ntiC1nNtPLmPJn83wEmD1wPemk8e3N38uCLFGNaHk1UUcZvqPo4M91WwsM8ifuRJZbvAduJnXNA",
  "key38": "3dwUsuAzv6E9Z88akU1XGk3VjxB5kewgao1YPU1HPjpMWw7zmhjFGQqVQQhHSs4stR8BXE9pc7Mycby1R54gt66Y",
  "key39": "3k4zzusRoi7oN2EwNqYmgRVUS14Ya4xwTzgf8L2eWAgWzNWpnohoE9YPxXKJSX2BZJ1SNLoocbPgrPXpfQFeiYQx",
  "key40": "DVcdM8Qv6r7f147Ca9fXXuUjarNpam8ccfSUBgQjvoQy33wUMERbTMmw5NytcPBWeGFRGijdaEwbNsZftvFtPPt",
  "key41": "m9fABRX13HragbtcfV9guh5JCh9hL9ndpFZD9yPDLMVsDsEqTLGerRek89caPdZteKKeosB5tX4GJxFcb4dezSK",
  "key42": "1ScCtFRQKostN2Y3XdVpKLX9owVJ8B6ZaeaDfaBYi8VuNbqXhGc6g3rZEFTuyCKx7ADzY4iMy2yyqxq4xoejV3U",
  "key43": "VF2TPvYgSh8Cx3Bo535knHXWfBgQt9eJUAVxUd5hihHokv5Nqxq12a3YJaV2ozqt2hEwHkpkWR3DacBmLHkX6Ui",
  "key44": "4RZrZn6zHEJi9ELkhGY1Xah8RrvuMx2GqzbJPTCJNMpPaoedXd2A2QJS2NyfNaQMRxmunGqpsxo5SC3oRduYQ4bj",
  "key45": "5xVjR6osqq9mHbKqTtgTT47Zhkoyd8MMJ6LTojqDJfKkUZhNHuvv7BUbg7eZRAsU9ruSrfVwM4U1QwV9n72gNJif",
  "key46": "5uZTRBUcmtMc9Cdg93qqbkq13N5nHnpvsWDuCVZpGGhVB66Z9ktEJo1PEfQ56FGxSYmEWByiguf3m6qpGnwqbh6n",
  "key47": "5KnrmHXFjeR3hKAET19ecAWm6tetp7MQHwCPZdPBff2dgxjP17BgkqVeuUbkVB9LWe8QzdtFwaxPuyUPq62XcttG"
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
