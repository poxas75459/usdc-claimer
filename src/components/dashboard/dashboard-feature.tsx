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
    "38ZpMw3GqDp5PJ5b7gxRVnbWFd4XCNeC1MrJuznSxa1tmMsPbPYHskPoiW6DCctaea9eDQngZyQeaZCdSYzfuUis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8ngUMvo2aWopKdL19t4DHrh4ZjRv4AVXrpMwFHgkp2QYoz25tky7KUQfNdtiZecsc6A4MuRssa82VRnrfJajAN",
  "key1": "5Rpc5rsXQxr3xRGE4XtCBYq5te1byWvJNpvuoreFBV8DQmGEsBHeppC8Jx3UXkvvtXeZKrQmqZEwEPJiYh6MmCFV",
  "key2": "574rx5YR74Z4J5W6pd5LbHXu1LAnzMgMBTCTYfitT7sd9UYzAhn8BDMqd6ZJiHnumkx7Hk2keNxD9vZSfd3yMp9X",
  "key3": "3AdUyLFRkB2hGrsPvCyZgAmym35e83TV6qxumhYhbvEHHPaC23AFwKQrdQJPYh6JgCjiX8yzFfBuPue5zfKwqFmQ",
  "key4": "4pLkvqgr7Vn6CgzC9zu8F4n5npSAnYTc3fmdzea8rYU26jQkcFkVjwiwaRKm47aeN8cU1adKsA7k4rsQmUv2Hyy3",
  "key5": "2dLgkbrB69SamACdMyjsxtk7Cj8VgpHW91DMhy5KixLYtQdESQzWexfBt3cnMt7kS1yAvr3gXZ8oefuMGS89bFBS",
  "key6": "3Rcg76EUL9i4UqWZx56WB7M66DCUEwswZTYmDxwFdRawP1MzZREEBkF5vbiY5vhhgZhsXYBWyCr9jnCTTxyZ9yie",
  "key7": "4KLvvXaExJ2z8xctvHUguWt4TKhD2543CaHYdYxhM7wCst5uCwTfTDp84fgE7myxMZ3w9KSahSVhXvQ3RekGaWkZ",
  "key8": "2XjCxhQe9iEzbSeGK2i4oFteuYdHxhGHCu7JCvzHUbsEtT4PkFFb4R4xbJKhfRphuyNcsfmpqx9DLY4fbvxb3Rty",
  "key9": "4NJHbV9dDy98yRS6muVerYhtCFJA9ghuC1THSeGw6HRKisVcabYiLXnwMaJuCfBdBgcDUW7XkfkCtfQTrphNrDnm",
  "key10": "2WEJsqBLascpB47tF2KqPwfTnaqEntfTJGu7F2Ma4KWDGASixwtAN5c76YBqwUW64RfMmsmEoCMjJzWURoKeT2g4",
  "key11": "5YJ6qXgGuzp4kXHhL5jbSs8f6dpK2TrH6iXmiRacQsqXmagt3b8c4HBwVcSLABLnLVF7W1Lv6uRAfNxmt4Hv5cUy",
  "key12": "35wWDCJFyoheU6HpCqoFNBUH21S64NCddBYuHwdCu2sHeCAHoUQzB7WUYG7dPiF3kj4juMMhZ2d9eEhLFqvFYzpM",
  "key13": "2pBLWppWYeL5AcuxJzZ6y6DpcWRa9uFYW65zfq2U69db2jdAa5tKNA26yDUA9bzztakCvdphQTTbQ4syysurdqzG",
  "key14": "8nSiZZriXRAnQmwj918wDQpGYFwzaitwgLc3KqAAqXkYiDyewo8hL51KjJdvbE545NEL5x9hMYvK5tuEu9Nrtby",
  "key15": "27E7DX983JpshJonjbN9pJFeKBuRjGTWQvfrPmxP8Wyrb8FJKcs2vFxv3nBTp2FjMPdC7Teaavvq92i3YaxdUndz",
  "key16": "2xJaPVD1do74RU8KKoeagjpZfrFYexDvvGE94gMfmyps93jptARvG3R399ZjZvzCj32QkVb283DdjFY1RZbKj8Kv",
  "key17": "KeS83uz9WwuWTgLZUQwts1qZ97SxJNgwkWguc5XNt6Voy7cVSmHjgfbEZpfT9C4orvD7B2w8sr8XtmndGhyMSz7",
  "key18": "2jQtiBPSLgGN85T1xj1FdSCxpSnHmcdWJtk9jwDUYEvXBNg6zZ2fWegYYKgKMa5Z89UG7qQJa6xSqizssCkfQLdj",
  "key19": "4GSeiJouGHWfhdh2o28AtiWAvA7CrR6QaXfpP98rjk1MzsuavFgak8rimVijTa6mjuVfgXBn3iiPAwS6qK3QG7nV",
  "key20": "123ft79vs8eJBP3nV9tnivkYvNBZYZbbP2vTudeitYqe5JiGpbSyCbweR1LG9bH9VnSyUPYgjtfVMUPZujaE5Evm",
  "key21": "2DAGGieTEWovgvab3E2xhbhrRepoNDPFKBcCwiv4KytVsT1pMZVo9SEGnxn3mv3GtLNkST2ao9uXdSm3eg45hNz6",
  "key22": "5JL6YqBdiWLWHYigYt2pbj7iVV4r6PKokxFMgku3hKWg7Ki6N8Faq1Te3gxjbkypxdiC3VsFgskWXCoUWWJ6kwrW",
  "key23": "2vjkTynb9wLk4bpopGb1zBtEYFYz4FVVDhJucchL4cma9D1akrCZ5sEeqKTfZ3bpZXYzM2tbCStxGGDNR3zvVMMr",
  "key24": "BTyjcShYQbdhFwKzuKuc7g1bvD4zfwWkDxeymc9Zxtj9qMzGcxNGagMkKHH1MUxXKzuHL7FzCRVxdkaP5cdjE5R",
  "key25": "5Jvua5mNy4Q6g2Tki9LcnuqCvf1oWaR4evGeDWs8hSPJKT4vYjgg3NHzCn4Ua9YVV6UgfFENiZipu1uurW3GRDMK",
  "key26": "3SGvA2fhyrb12yjVuxfF6rwSwxoWejLpFg91RLx4bTLw33eQey8gZkQhwVab3rtapx6NbSxwMTKPcYPKyW8uRkDs",
  "key27": "2mVc68BMywKmzUk4keM1F5WpTmWNsvQZE8sFYvnrfY6Ri1ikXSjhkKmA1n2uVFnee5nLw6PuvmJrZPDfHPMcGgon",
  "key28": "4BALB1BMPqGCisuUNUHbwGs6CDuz5XwqhWg3p9UhUqV89zTzZbZ2CjnVjDoSc9D2AwjJh26y4Di1MRUBwsEcBNJU",
  "key29": "3TBoyuoSi4oNxFGwXCLk8RyQvmuMHdTZob64fxvbfGPKWTJWbFF1ivfFej6brJgkiSi7HRnRK2VFyhs3RkqtFhbp",
  "key30": "5xrPJNFEL1Wxs3de1mpuuUwZRsji6wfB9brRSExxFgyfDZWHJaj2WehTrnvk7oZqaRupdchL9B17nAGoNnSmfsaE",
  "key31": "BxJPHTUrERorgjhFktBgfue91TNcp5aNqr62TbsGT14x1NzfbPdqt9eYkuQVnVK94myoNBUiAs1tYGbevCx1Djx",
  "key32": "3MLdm4neJfHPNu5KVfHEgjqbNqwLVBv4nhi4QhbMTQpFsThBf28tng8T9nZytCktfxPAMc2r93KKknA2NNoxdR3C",
  "key33": "wxQRojEBMwa7wAZi7Dr5MbKikaf4dvuMVBBN5GU3EGracfj4bQ1DkTGWjLdd2HqKADYSGpDPqMZ4mouTpEYkZ8o",
  "key34": "3kiLKWqEQwNEXfej3okQt7eStAQvsxaxk8whncjUs1BE4iWDWCSaDoyACp1TVDYNbAT32yWkDAPB8vPWADWPdmTe",
  "key35": "426QTbRsB8nfcxAyGaMJATA2UNwGU1D2k6VhzVXswLHwThoy6waxasGbtJQjfymf4zv3w1oHiXXePSQQrwoHwXPm",
  "key36": "4GUoB4bFsMSZxkjKTd6N5rN4PcqzRw5VCRSMhCeGMWP2HnNXcXnqsFFhWZaSnKQ37pw3VLNTEeuw7ifBxLAVokV2",
  "key37": "4itwkwytVXwWrK2xFzyPJux53B4EykZMsKSyjUvWGNNdYM1vbsw2edNPfdNjyNEGzudQDBvXUZ9XpLc51jszZQyn",
  "key38": "5uuWcrJMCHqnW41KB4sW34aFBv1oQMwavLd1P6x6vEqEnmBZ3qpMiunXtZpREJuZK1To1MvWnSTaZGWfFynCSYG8",
  "key39": "4XCpj3DzFLcbSJU6ZkpAWJao9JNf2BtFasH1f2hHzvdfzhbDq3KPB6m3659hYPFFNnuWABV1FuxXu7GUoEbw1gnC",
  "key40": "2kkShqF665fCJeTjKqmknrSjhnJrVJU2bXJL9p5nk241tcNQRorDPsWqPS6aQx15LJyavUAvtEFAkSEaqPmhWBk9",
  "key41": "4Rbdw35y7XyhH2f261axiSo3zdfL7xjMJXWPG5uMZpxZPgPa8udJB4FPSavSxRcKrU115Y1zn4vvWfB8fpK2sVyH",
  "key42": "5LwLpfMkopSpFyhhUN3dTWB6qixRXFpXEd43GQPDoBRGMQEfEbUQyvmjxCoCk4Kn2h2unmeDMJ2ovdHRs9zMUYmL",
  "key43": "26uDifqq8x5jLYjcY2Bx1cDHqUCNgC9h1FpNCFxYqxWAqzejfvrMbyXEinKvxsKdJcHVyZ4zBch9NkAyRzD9c9TH",
  "key44": "2c9FuFi7nGWuBLL9XhbVQ5QpAWWi2pt2bbUb7QB5kAg4jtfpXGghUMhFcNpcByfPyDtTfTyyMoBC5FBW3jMxMKVL",
  "key45": "54DfSBm8FcPhQFSXMnSKceoL2SFmWzr483YiQF7ES7gTZzBVGFDMziBYd88SAvDNowmXumX76y1cUcap7BBeejgi",
  "key46": "2efDungzr6kcgCjE7dknNfVrFjzzraP5RWABfzLLAcsAsYvjZyym4Zn8ymbZMV1MLrHJtZAd5af3ijq3DuvqoDPU",
  "key47": "mP1NTD1F3ZqwY1Aa9cRceUHQ2yAuGM2jNpSLJmbugg3d3HLpGpatrmPsTdwf1PPLPNrvwFtRbiTacTHWSFZcpbo",
  "key48": "9G7KnL8xabuZTJdAp2VG5iRKoAuTXmAXyLKuCmysV1tLQJSAarbMkaBUWemWnar9J8JwpfrHUwAvAmuY8ur9qAD"
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
