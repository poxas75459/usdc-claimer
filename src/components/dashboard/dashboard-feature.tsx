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
    "2uucVrLSkMrzoNA2kyojcJQvzy49XFE548ewiV9d6Z45F352JsZHK5XgaJXa7C9jd2cb5EQVnEGAUh24BtBbPFEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SeUTHiW3JdRLryTVCqLu5q5Abn2HXfaZpye6tEQELASyWjgFhkkGNiuE3fgvcnDqe5k9VbgaM8F8Sp3YC4bJREA",
  "key1": "5xWqG3U9dSryAJce2RLmZDNTcx2GMfuXbHyFyVquZVjfiRXhQ4SHCkF3xhMQaQKkhSQLooAPQwxPwcXiRf1ZUN5T",
  "key2": "3bfi9BsP52uR6ysgBsZqoMZQG899ggEegz48Cp8kJwzi7qjxZGzkEtF1LiiuLqqaLeYHvooDHCGjHjcCuGqmvNTb",
  "key3": "23SjgMQ6tQKaT1u88QJogigTbqDyJEUK8FFVmDUFVdMbxYaptPeUk1uXuia83H4sz4daVMnmTPZd27pqzVuy22Do",
  "key4": "3DPHw1L4enttEj8mBkMXRJPV53Pn4BoXYAhpxJmHhZ8M8ozbUixtdW9TrCLqJFSw4YwmHBvNsDaDY5fYw7qped65",
  "key5": "UEgeaX8WhvP8EsX2XRf1Z9HtD1vy7jsksxWtvgjNrVjC1CCjZ83nQGyANevvThoHeD8P4RAjMCKXEc4aTxb7iKV",
  "key6": "3PqDnNaQXPY343kWX5i7K9L9VynTFdQPwXKEyo7KNxDSgjAXqvGW9E9BtK6dR4Xcg8Bfhy12XXjbiwmbTLVCpy7f",
  "key7": "2tYcHYLrx2amS52UqFEPjtK6TA3m4yc4TXZXJ7YT6M1XipmSEP2oMtbAv5m1p3MYWsuWjEbhpDyiB1KcgJpa48Dq",
  "key8": "6525vYkyj9CyBj1Q8m56bNyZvEM1MBpVqLFbbWyCn13vS6KspwmR1QRizxPFt4633EENaM9Anqt4qTpNiga4zYkH",
  "key9": "YzzyD1WG1t2r6PG8mZdME3FFbm5gcGaFz2UexNA5kTRe3hUFzW6khwFGjrLwyY9anjT6gNthBndXNkqgZ5JpdFQ",
  "key10": "2UV1bSVRYxbGArepzTXAhdZPjxdDrCSESVtAx59yBpifo4exNXJFH2J83D1Ud6twvNGKyT3ojVF35dkSFMt8fGAA",
  "key11": "5kPdiBHK7mqMrz1pxa7Er75zUYCX2gmAoaaKTjiHtnVzaYHwhWYMiZDXMbwEVXLs39kz8HsGuKsa3wHt1EUQxnTv",
  "key12": "2QeDGV2g21Z6GzNFEUTRPYhPX587Xo2WqGyfFgcpf55XV7cnnkn9w9Sfv3d3kGHxESNgwcZGKh31pWP4Vb1LrAU7",
  "key13": "2wBAu1cMNsFYHiZMkvy9JWz8nwxhXAxcB3VvQkRrbyqdynH4GBMv8CTMbeQ88eq2pEJ1RGvjhDckuX3CWwNyyaJL",
  "key14": "3sQk39YZVHfoqhyUSYPsvuUfb7WtDK17Rxon48NBCHf2i2jc7khUi99ULBjKvJS2wSEHg8VfkSQXMsSyWZwY3tcQ",
  "key15": "5p8SqaNhKb12Gxjis4odQsd3w1R4jqV1F9VPAyCDfeNEhSt6nvQvJ17aEhoz7hPEUYNRw8Zz5ss2VSs5RqcsJktz",
  "key16": "22ifxnGsSQWTdRwQnCvU9cKvUZcenEjwJMherV2q5mQDVDxk7uzdgyCxHnzxGztRjgfi6NPBALm5yXvtppPWPU2z",
  "key17": "3FxaDgUJ37z8FnqaCm4Kp4GEjq2DrRVTzt7g3wsLT34cWhUtQqEqyurcydQtHZJsttEaSE52BhXomzQA7a69yzRd",
  "key18": "3JSqUEz2B7pFWefNhpmK6aH93msjVNQ7Tx7syV8U5dy7cxt2Z9MGRVUnXGZuePXwZtXXnfn2rFTVSr2KP9fyRXmQ",
  "key19": "2GXpWy31aAoccFqfM4zRmuYgswB1boyVwuKrUgv8zVmyFMni6zSXPzMmg8A3aMfieL2j3pcY7DeUhVGLC6VGzmiA",
  "key20": "36CbJnSX2imq55H8DFUtnMWFM5SDzvm1JQ2EMtHAHcNPbJfQCJi1UQA5XTvyN5taYxyVwXkK6oqjm4J5PxvyF4VS",
  "key21": "2sSgWZVwKgj2oLWMaFB55CBDTsGAqTGhWqgT7b2t7zwCKiuu4RgmfJT5ArQNXEW6u32bc9BQL927LNK9j3CwXQo9",
  "key22": "49sfHjmnBSzYqCXMaYwMtDKA5jUkwNqpitjBH1a3BDt82EMZJEuFnPeD72LnpQ56EVSbvg41z3pQc9CiCgTLVRiA",
  "key23": "2rnQgDUNyKA9j7yYNsJBf8WoGyTYgq5KKansHtwFXKJ6CvZVT7Nj4W6EShXJhYEgC2UydbbykNKNDWX6x5egoLAp",
  "key24": "3Saa7pTRnv4HceAg2X1ao61EJhD7fq9w4xdQQTDB2geeLuj5zhTQSBEuosJBgvWqjJe3C4KsKP7a6XywUbi1a4gR",
  "key25": "FKUmDQzfZ3WGCSfXG1F4aVMVhEhNfmZhLR81k7hG68f6umK9yuXjsLjPJ7YXm14go4UnuhPQ2PWfmirzHrZM8A8",
  "key26": "54CE2iEz9xsUN7fmKKHgWQquyYXJBZHXv8zvRQeWajXEtjv3cS7wFVajGjq461hcHVoaHkCWmRZj8SLk73PxJb6J",
  "key27": "4eHjVrq34pySbRrNvT3ZKa66AEngfqxU3Txz5P5rRzrGYjA7ykKEZPqjwhg8sGfdACts7WvDRtgR5cZQUBSEDCAi",
  "key28": "4fKmtmsCkaspH8MZU2LuF6kJNBreR6bypexxGgqt6ZQ2s4VAowTRfyCZ9jk1e6rAi43P3KjVSPLb6DaU8nMvoUHo",
  "key29": "3poEqSCp79kq11iQ2tAhssHArUqmD4jKoujP1R9xZBXpqMc1j3F8RfX4K9en3j7ZDzJcLKC9d1o2kWBcHp1YUdwS",
  "key30": "3pyVrkQ4TZyHrVgYTGwJLh24HEdQa1AJz67gcHAhraAf5dHQ7rPzJbxqbAWdir1hbRResXjt6AnNBSKf1x8hByZp",
  "key31": "2UoEY8WCeTV63qtuV3HwFGdhSGVcycrU4xm23muzypK14pACTgddNJ2jLfwjhfgLU7kRJzSohZBuw2TwMmv56NrU",
  "key32": "5Xjj3aBb5LEPBXko7i3F9nDaZUaYm1zUkvku1azqbeLfKXHk5vKoyXmKexzMxPCa9siG64nLbVmfW3GENP2tJWe",
  "key33": "4CiUAr7bZVqZdeMnXAeuCwz52xLbnUu2yHpECe8is4LtUr1VRKNYajbo3VRVh8pxkXUENS7k7v46vD4m2yydbKKQ",
  "key34": "3jXhAAxpgam1WChC9ebLw3bhVFgFvWvXgMQLDjEVDknVRxY72VbHtcZwjShMGRQwkHJNWTH1BrFkDqEgqkenuEG8",
  "key35": "2YoP5VeJJvkuAgbp6GAyqztiEjtac3txMxo6tzGed76yuiHcPWEh4F79U4ox8Q9UeeE5UKfxFoKLd12aeRomjQwv",
  "key36": "6asPyBicA2rzGvkEGsvfP2xysfwNAygzHHRbSXVXjJuDsvv1v2R6HeQn64pGXezLb9bfQathYf6VniWmwF1JDG5",
  "key37": "3Q7bsEQpEDr5aPggv6utxSumS5f8SEzidddy91iTdxLpeTKzZz5JviA8C9ZEM8X8ZWFDKEJgHffd3T7D2ypwVSW1",
  "key38": "3mLzio9sZZK4UfuigBELvbrJCqiTarJJjh2ZXCdJK62QCVKpsAqQCNcHZdZjdYpNS1XLmZ79ng6TyFV6zs6Waxhu",
  "key39": "4vJSJAeRs1gLk5cTbsuhzPGX9bQLKKuzrTB9mFRvnrv3tYBp3NTLesJAZcjkNANqhmgpZRhhYjhoX29sRYd8ad78",
  "key40": "5sC9u5XE11eyu7vKZ2JzaABGuJBoMX7ZKyLD1pTa2qtfwnsm2V3Nta6BwZGnH5zvdcoENgA58uDskA5mcQuyrG5L",
  "key41": "3W6kG6hRu6mLkoZovG6RvWYkTM5yJLBevCM41DPS9WtSshpXrJ6xehG7ACLmiVPNxenWkCqo2D3EtjP8UpqVJKad",
  "key42": "CRazva3w6RimN2TdAABVbfRDvPrqBAfeTSSURYD3AAFewK9S6cTDXhzSbQ5Ndgo76xFtg2zmsBiWRyCYU75DZzC"
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
