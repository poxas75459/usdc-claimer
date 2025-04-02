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
    "EU8zR7qMA67yrrkgJzV9eazbK6mJwF8qdyK2YBwh2zd2xAfXGinD9Ria85ndU5vfEFvYoaHWbCA2z6Ri7fF6uZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WGFd5pUkMr2TcjCnt8dJW7osdb2he1cQ2qq8UeYvi8KSBCcsaoHQrZwfYpVk2eCPTfvN3iYD552UYMeQtuSiCpZ",
  "key1": "4LqjydVBcy9uK2H1cUUJXek5jkjrV6oZgmn2nyrJS4ibMFuXoGBgYucRE8kpweVffsfU1qebUeZ77anwyDFVHpAv",
  "key2": "2XBAt61PMbFYCVUm77AcoyYgx6ZgKHD51avHA9M3m79FabvE5sxfjm56t2SWywi7sZJd23CzscdqQfxUP5pQHMpS",
  "key3": "2ndMC1Vvqj4V3yuDtX8GMndeUUnjZPcck4cNZMGvoFt5Jr9Jw2zUNDZDSMzuCr7DU8cgeZNRc2tTxW49WSfoQoLQ",
  "key4": "U18BEWqapLRWoyArF5hqtKmpm9HiTYafgv2boak16AmGD8T45pVrF5av9r4JpdUhhXiyV2PBxCySgqB5qWerPkf",
  "key5": "tvjrHVCh1TFQLkE1ubHrcViac3zZWbyAuaTxCntYJTZvFeVEeWpKRVPcjsbwJa4Nq7BLCjzZ6HBfSUULFUHM15Q",
  "key6": "2L9WJFQUXHCvNEPgKnJSoyLuCjcyiuEAkNGuEWZ4uWNhsHzaH1ncwgPy9JQD78jwP8HMszWCXzj1WDtiL318XSjt",
  "key7": "3fmrKcnH16PHopZyvvGkgZhrS2zCYkvQan9wMQU5kSxyCofa7u2wQQpk7Sv2CzhWjvHauMZYZ3FtmowyLDh7koGR",
  "key8": "qKbTsQnmgRHnvwtguZ4xVQYVHNNAyGU3KCAt7XpdCVeCjeCbt6q2z6cBwjzmLeES2H69gZvCv3Z7DZx6SHrzYgL",
  "key9": "GyrUpWrNmQ8vLaUquW1FMLoAuNT6eFvnWw7zTHTa6GX9nv6hbjSbUug6f16h3eLHYTfDv9tjcny7RJ2KCStUKEv",
  "key10": "3G77HAq5ydqhyNzQTQ8pbZr2w7SgnsuM8svBm4J6xRwSNFhqwMA34V66UNzHfE16V89TUGMDr91BC1oFjqNB1C2F",
  "key11": "2dfCpzEs6Nqg4MPzfTtb91wnM3LnNCpCGJUhALJGqoQ7MucEAX4ng5WFiPdFqpDZwf2VpwmAyAJ9zhfpdJQ8McWE",
  "key12": "5mkzgNxBLg458ZaAZRacwSLRzutLyS1duT477fdq1bvhxGiZw5ZTWqMMwwQRPLxYQ9Mbu1nxfEwMJuxCcRNqjBH6",
  "key13": "43a8K9ajmM9DPvzLtEE4VLSAXk8kbK4b3dAZD2EQSGeCRBqJThXytz4Son34cgLzADFortJTkiY2ZLXDg7nN7nno",
  "key14": "5ENN5d2az94824fghesrQ43UzHFPvGfMz5Zg4WAqgiM1bg4SpJAerXpd8tnug9zNrXoiXnVdiExeDqJroHP4ZEow",
  "key15": "dprn6eABT9CiW9oHjgbvaCUG29iPgT1JtK62pni4bWjuXhtm1VkhuswApTE7XsXnY3pRCApggyrMMGQ96LfKTqA",
  "key16": "3m5hy1wRQ9znv3CCwpYqDMHphktLiV7UraX37YZM9eDKd6QN74tzEh8sTewM9TQ7n5usEqyFWNjMPTSUwNrFUwyW",
  "key17": "4uRmC8yFpy7jaqw73ftZ5rAaRvzHRmmdLcGBvAvbAkUnuA6QRhXaMH65j95P8AFazaFAmyFn2qxocPG1M76KLUUE",
  "key18": "4wP6WGLn38t9abyaKw4neUic4A2iPDmEHGpCmQusuFcErJf4LFG9NsYrfMfk4spsPXN6RtwAf6Ew6YxTLqrPoyC2",
  "key19": "vKJuVbMARFajKKrjw398nqeDvxhsrHG1picmZcdRNe1U25WvxxUDKmhsh2vTJtsPU5s4FASYkpXsGxFcSMFtabY",
  "key20": "2MeN9nbvBcJ5UFuanzuQiEfRL56CbTZxLGBPLQbBrsboNtSLSWADBDCdjxAEzvGxx7BFyC72uV1ZCxmF14smJZLd",
  "key21": "4jZJrFrkr1TygMVqyKesQ8pCQE4mCAxU9BqbtuBvedjbj7y4VifWe9WYecegUYQqU4chUFuyxz8QnaHNBSNu7pjR",
  "key22": "4F3aFPSsWrNpV8ttErqDhTj2TuosDPFEfYqUQ7zitWqtvhPyQL6cp6LLDD6BNjPF7psVQ9bMfD51HRzvNbMDqSEg",
  "key23": "uPDJrLVXn5691rG9CyVfuALLUzsziG2UmL6rRYMEA3JMcMMvftj5c9wq8SMjmhZqEEQvw89teyaYojHXYTystz7",
  "key24": "3AhsHSoDX96nBqdJQSkoJ5wRpJ1PCRL1EJtQTY2mfQBAL1SV7rbB3vMqqacxJCBCpdPyrPYzFdgMeoDviu8rq6UQ",
  "key25": "2Mrxp4kvFpn87iHvxH4F5LnhdeaYTb6Q7iJR5YyacQf1yQaapLBhiyqv29QcVT4EuymPTPcDhLBXgiyZJrxZvDh6",
  "key26": "QKDxXVc9r9HiqkfsCbkPH6CjLcLNHBthbgSodYDJVMJ9pURgUGycRQWT4ZXjeBhxEhkZYd8rc88RSrjrtJBaD3q",
  "key27": "4KLpNjDtzEAT7EFZXqvfqZwbiSyNo8mCwasYVLAinShy6e5BHNPURvubfkzNoz7FutgixmCSu5zHMrDUWTDw9rLw",
  "key28": "2mT8nUdmW4MG6bA5JPtdkPVnaVWbmkwnkD61Pz6EWgdDw5VxLikKeT6m4apFUC9Ae4nDdKogKHWyBd8jDy1SLW1N",
  "key29": "P2Fg8ikHna6nKmQeCHHA72qFwGL3N8pA7dSTzncgTP5jp8W3dBufwUW5HEoMC7Mm3h176sMwQib7YySuBueGdC4",
  "key30": "5qKagzmdofuADuhaz9J58K2Ccj5CnLCnXeWtcZpWJRdZMV3Yc6ThXZdcAGu3fj8Eng8ogY6DEW9D5xkRomWdXjsL",
  "key31": "3wrWfC7AvCwkBmvjv8Gf2UW6N1PZco2MknKcFiMV5UpSgN9zDNPYL9MJmRN1Uj31bumLEV87t6bteSE4CUx2RRQi",
  "key32": "4WkunnaxoYnCLrvS3iu9is9FSZduHY25RSWz4jS4xo9MX5Jb6Ci2pW35ksfjMRD9vUBfwPW4dh92Fbfy6LRVdCoY",
  "key33": "5YwGQzqKJ4u2bjKgyQZAYoKZRWY3Lf4Sydbvp6EprGyagUibZeRTgDDoMfDUZ1iJPuM83CZgFPszwdjXJA1Ap3iy",
  "key34": "2mLbHRtvD8BmXwMePCvwg9BpjgwaooyzbM4KGexzyHBPVdkoQRpF1kntJVsnqFekMdfFdkYAep2asHAMX1VoVXHp",
  "key35": "4wGTTsmNjkN4964tcy1ThRo36yFchWGUNgAzMMxHXL4okspa7aoiPXhNULdzTEY1xjMj1Q8bB7B3tRWPHVjHjpmq",
  "key36": "5g1Xudc3SyDzWFm43hVJoG3xx3ywLCynSqhuStATkB9hgjuWdDLupihpA1S9fPwnhiD9FsbondDKkigo99755eak",
  "key37": "3PTmKqGpDzKYrLqu89mozvspUXfutzLGfTrL7a8VFQmt1VgCaffRj1Lt7hZKEBqkg44bCG96s7JexnCTE5MT293R",
  "key38": "4RggSk2fJaUwMJ1sXfQZmEyZEtvG9JZqZHJhDE1BXwj4QhJ6EQM1MpVKizknZTDcBX2xFmVSDc7TM2e8akpsqUya",
  "key39": "3qG6uB8ntcjZYsNj2CSr3pCS5FLWLJ4GbZFChgrdWoXhyRA2s5st6EitF3U789w89LM6yumLt4nbUohtfDTFPSH1",
  "key40": "3Zm81EipiWF4nqB1pSyTBr9qsTmUC76ekoiohyjAQoWnDxanooRdPCdbcmFyw61QAvRZdEbdQ2A7aqoTdU9kRZHD",
  "key41": "v2GcMLLPV1sS6FGjvJcHEoLAQcN7XUTVp5Cfdan9mWGUnSjzAxHPotq7Bb99wSPuSqWeyRGTBT5e3XpBeDsYVLy",
  "key42": "3a675aAovCdkrxLEkd47hyLJen8pQJwxHvAF5N9vS7haorBnoNZMhrNz9meYhzd27CDY1gpm6sY5twtLtU67nCV4"
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
