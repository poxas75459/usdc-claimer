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
    "29ELSycVewAd3wDKd7MaVatqSLXWopwQCL5uNf3GMCdQK95Gyk55qwV11e6BC4A37dpGGNw8cj6yDoyiz9mxsN7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27NwufPXGqYuYd7cm689B6zjdR5444Dfb4Mr9Rqg2A31vTqCrb4j2tamLhBZFajTwiYHYbpz2aPkiMJ44e6xGdU9",
  "key1": "4rFst2heuyLUpTAeU135HqMU3Ah7hKs42eLoAofcpWDZ4zogimR8J3jB8SKNrKTSRaCoeAxqeyT3iXizJX9nMFYe",
  "key2": "4S6jGacgJ8upj8a5iTHghApsQpPVfkyk5HScJ6qnodGknUmNaZLq739PvNjpvzMrgPtUvGoVxxFhHFU6J2An4Mxf",
  "key3": "4WcTQ28KhtSoBZXVmydnjFTikPK6Don7CxXNwgYFWxTfrdJUv2RoJo95xerX8dTqciAebzs2dsWRF7zbfpsrMb32",
  "key4": "4t9F4Vi99ndLGTbDtsp2ks7CTAKJC9X4jZUDtpimkjAUNwPWvGdcYuMMHfvzjWneW593fCVzF2kcca1df4uL9pYw",
  "key5": "24yLdcC8kyav5PDF4FCQQFMRWQuYgigW7bFTtvn2eztpSxpRe3Ae8XP5kQUDMttyrGbVEtB3de2gCmVdgft7ysWm",
  "key6": "36TnQw8fEXJkeCzxYufF9MHnSv6WL6R2p5vmguv6bMnY5Vm88nGaES1hhcxWutCmybZ9JSEyzd1rZjm4BvgMXEVq",
  "key7": "4aDvQzJ6AKnAp5zkQmgHg1v3UYQ9a9qLEDEbMScZxasg9ML84ucUAa7KfMHEKK75ftPVeWBGwcoenLGUdCby2XTo",
  "key8": "3J12TxcernHZeo4NB1hoQDDMi9eF3aE4Nbj7ZameabtdwbmBHVtdEuss9AXpkQoRnanPamHscPjD72C8W4TAPeQh",
  "key9": "24mwQVf4KeZd3kXK4JnxpZkLGq72cNreP9NSbQVWSqBbMTqkst8ZUpkui9XVAsRXxtzYW5wCCgo7xP1KfUHgLvGA",
  "key10": "MjYXng9AMfNJQYw2scWb8KuxCfknhv764AmLdUGnWDtUgfMUELchdAMWofGtoWJMj9zvYpQTRHhLALRX7eDVh3g",
  "key11": "2Pgte6NJYnzf957u8gEkToXhmh4JLqcDhGodw9gF8qqb63EP9sPWG8vFTWvc5MvjC4CLSy5d2GDjGY6MxTDFsq53",
  "key12": "52HvyA2fyyztKGPiUu58z7CqTJMvcR5DoM2vBtxCUByGtR2AfHVYJCMnEkTDo5xKET4DEFx12yiZDqpVppUTTKua",
  "key13": "3ZMdeMGFoAhe1y1Wi32MkpNh4w16sJv8DVS7ZvqefxJTMKYSuWvppD9YCxi7LECKhBxTcCd92XfFUs9hRndSEjYa",
  "key14": "Y2LFhysMKrAXUFZrmYVKH5D9T7Uat1imPw7X9xW3nWHRR2QqywCvzXCBWQARcfS2PfdDxrBK4WAe9s4MG8nfcM8",
  "key15": "3CUHcT9a4k98tip5fm4toRTHQtDkz8jk9U1uNNPg9rG5dRxmC9EMKpsCEcB2AUNpYL3PyJH4iGHh7Ws25PqYStri",
  "key16": "2yvPLFWmffbDMmqFs6Pc83HLhCigGDTXpoxcBAHhRSgwGzwktKFSowZ2rjRRDUy773qLKK26C29p8pHK7v1gbBjH",
  "key17": "5ebWtA2No5S3NcwYW2eKhYdanD1J6wkPRLDVaMb53vseEDcoex9t8iFHcxCbh3o6EEk2WNwevDJV2aDvtDBEYhRe",
  "key18": "2h9M4hFiknuXzGJt8AQ7JLaDedxjrv5NJBRG2KB4ez74QSk4B8WrKfSjTMKAsqPKRhbP744uSLbSeUPeNP9sRsB3",
  "key19": "3rrYsm9G3Xd2w9acLQK5FmvBF1jxaGjNfHxkTXCYHjuE12mF3URF5mBapRzavJf4qi63bxJfenVXsKhZpgUR8xyJ",
  "key20": "vyYS3kWnrSh3KVQWN1XqbZWGeDFvZ57Qdzc7VJsgyRnH9RzS9TJcE26676N8ayqK8vgyseVFWehQMpDjT5LpbfE",
  "key21": "5M7B2P1GuyWSzxweyTWfct5iSkiPqWqWzH93rcnXqDekBMBjsJ7Rsp4VARigDfM7iBotizLuYs7yxfMqNwrfEH7U",
  "key22": "5XLJCMz1GTJBfxE7ACreaPcbMmRYGKSiiGqrw2L4iipGbcCnVf8Ca26cNsuqsLuUY2EpDyRxmK699GfUTjS8qJxi",
  "key23": "4e1XzPBTLYx4D2ncSz9fpq7GaYoXoZUgC7ApCQCYWYi7W8d4VCnsQUfLtgdjmr3AGhJ12dCeUrEPy4EzbQS4r4oD",
  "key24": "4P3D1UgDgHgqrMqi4YsFJirzwEPKXVeofRvpQyrrvzQoD26uPY8dHQKJG239RvQ8QA213DiUfwvdqizzNcE61nSx",
  "key25": "5wmyG3NdFH1G1Ar3VMJtCvJnNX5mqEZSBoBHG6ed2oeaWrHxg2T7NmAsjfh4vorGXMBbnt2mcgjNHdxKcnyMVBrr",
  "key26": "2p7WshmyyTyv1jHxAFubaKW181wozdf7hXwc24zr9oVCVXvSkY6GhBtApL1xFHTpMFyebxBRiWPx6SDBCEJBQEVX",
  "key27": "zwCgX4z9appGTfr8eEwViMGEB7TE8RuB1GeQnTjXHd6afPGMGLY3ZAtynPuwqFN5kGhohS7fxZmzH4xXSPR6NW6",
  "key28": "2gJ67HPQJpEQwGSD76vMwogHr9aAqUi39UicFagFbA7ywNQ13HQ99KZpsZwfhzgDaLfWpynCL1suDH4x2TRPBp26",
  "key29": "ci23rPNrNa2uEwpQZz9WjqQLqZosmqrXya38JTtxpg8ySofW5ayZaPEzp44J7G2rsnsipXVGH7amTgQuL7pqK2n",
  "key30": "3j9LMV4sFRayFyocG3aPyhcwXJCfn3QqR9U62WMcjbYvuW3bmxUnNPtBb5AygebJric5aN6ycEXXgh6EcmkLSqbr",
  "key31": "5WeD1vZZY6TfewaJcFk6xV95WZ2BYf8g9o44ekPyZ35xqvXhMGBhm8edoUPt65Qt7ToucRKK3JC4wC2zv4BNTkKe",
  "key32": "4fcSiraHhQjz8z95BXzEn82q8UmoFtemqtQi1pSM6UhAMjHRVtfRdCfKayDkHE59Hubmq65EJzyZzn27BzYk7xzp",
  "key33": "555VBs3W6wGkFfpsWtdJe5Z2ALLBiJLpJXJSkvcFmWazo6BPvfKbjzwixUC8QtR5uEBpnw5YEGuEm67AUHf8N9Zj",
  "key34": "Mjr1jxGXprUkJiirrXryL7NKVDnk78AhW3FNm4brYgySNV2AHCknBAh6crm42WXXrzrsKAvDJaKAB2YsnTkLMhs",
  "key35": "4hiDwm3vvqr6tFC256veCN8ZKh27R6G5LUWVJDWLmqZK3LMwEYKrFsaQ176vfXLekHFbVnLyrSeWy1M1y58ye8Nn",
  "key36": "4Eds7JWBFgLfRGgY4aPtkj1BgX4g61rMm3TQYPWUHxmwPbwwzUeg1SiHCuxiPmrSubzerXQXsUstiNUVs2rmWfmf",
  "key37": "2fqaWQ3G7Fepye9zn1iinTDe96rGd6UMZ45v7WrNaz34giXVuRykPYFjJSK38ixZsXrfTwzrzJtFpqebimmJ77Zf",
  "key38": "3G1yGSztHRpWEz2upFKE16DzoJ6fxZjHVZAFXbLCM3ycuJHY411mySSeRXvdrHApo92jaN71Gx8BXewn1jJQfre3",
  "key39": "2fq6erXDKwsem72ygnmpWYw5cALnDrpybCxb4AcHYM21fsDtNwh7935S8wqbTU9h6V4wJbjav1m8eV2z5LkhNgNs",
  "key40": "3AND4MgCMa8qPx5kRKcutyDeRTpzKPERS9JNzB3UspMgmTs3mXwhtTdeGnfkxfgBQbyFt8RYjwJSapMT8yztpPvS",
  "key41": "5T5Yc9j6RYxuMuVq69irjvMBSAPMZivhxL1C3qZUryyELpCK3VFzVLBG2F5s5TKz3BUgw3cawJPPRMHVC2fQ48Jk",
  "key42": "3JL4eks7EcG8S4Thj32SZifBj5uMrjcscMXGGErc5VWSriuj26DWyNBvnABKbmiNmyH6RUHxSPq6LsAsE6J7F4b6",
  "key43": "w2x29S9Cc2bwVcRy7WZjJPBGGt3JPwzFbVQe8xfMijGKQRtXxt1ZDyv3yfZ4snrNK2de3XQgNMeQZF6DESMceTr",
  "key44": "4fuK5UQAWfCXSPca1TU7qvWYRoquzQwEbnN9b9ohJ7gv7DZTzimKwNBoidgnZM1ppDXWBJ9JN7GxzwUW6T79xu2W",
  "key45": "m39wcana3HydSvcAhMwN7YE7RBp8rFfEHNqx8PnbsyQosw3TacfwgWGAvawXNEfsTpnm7aDxVxKcYwEPQWLQxZ1"
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
