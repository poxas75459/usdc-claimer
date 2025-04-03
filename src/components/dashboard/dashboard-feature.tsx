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
    "3BHuu9ogGThmm6YC95fnPpmeEe7K8j23iVexbW69DMjbYs3rgTuv6J4ZUpWurMQewSo9KgutS8uRbfJZdi7ykBDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N1m61v4pQK1UAowhNftt553uNC8gDmV4rA2nKer2ZcfsD2kr1BRXcmDcttBMEnowrTGZ9L7dxZVRhjLMPPpHMs9",
  "key1": "gU4jqwJRAiHXo4vf4UGq6d3TeT7h2xdoQH4iaqxzS8JeQQ2oxfEfLrsaMWh1evLw4nHGXB8MxZ1nViJ4hqPYPJc",
  "key2": "5feFZE18epxRa16n6bcB5E7fqnH8MGpyuecPFCxphB8Xi6DnVa27gs9ogApnSuA1FVhEB5bYHTuYAw4YV61nFn4B",
  "key3": "55HQePihCEjeRdQeSXiYVvdr79ES7krXhcejo4rNSLd4BKgj3JkxJtpKJJJFWjiaJMKEAyuVwYZDyE4cNBkbbKYX",
  "key4": "QfQ3rcuR3h4Cw6hs4p616eeswHj1SWe7HopoiveswCXFrVv2k7gsXHeVDmg1QVdMJHrab6FXd5rMYcV8TzZHaDx",
  "key5": "3r5eRtMh3Gk9gDDNDGu7KEPs4SJSNthLBXN3kvkbt5mUsQt8qHxFR8SpKNDRkahPsKJUgymnpQoZR9fymS44GNbK",
  "key6": "4SRUfE62ayhL8fn4uobHBwzDCEueSexzJJGfX1WJo1bpRfK6fQJUFrEq29j9cYfCsie3rACTBfNK6sU5wXVP9KtP",
  "key7": "qcvMhDPJMCZXoHfMAH4EnqnginUFKR6QC1xcuXoNJQuVv6NBguhC5RFuXYHDPrh8ZpoW3MuTGVm7tU9DhyeeGNo",
  "key8": "3SSNhLgYGSdy1XG7bXNs2WsREoifDKmXhVNTVGtCsJTpc3UgRu4SPpQkXPWH4e3j7bdxPiry6EpyEJT7Wdui6xrB",
  "key9": "4HErDPDY2bJvVidjQ69nAcvcm3ASgXTL5siXb9JJMBFoh2qKgFVDSyuraeBRWarFtq3iXwoAGxak4MjUF3NdMq5w",
  "key10": "5xGZb38LECFGAuCDSAPWDFUMksitFCC5s3TYpZdQR1J4h736CAQpcWfmv1GAeB6Vza5Hh9Dyn4VDsK3ctfLcb3QN",
  "key11": "3CiJfqA5jDT92paAmzqm3CHTbVqcyPYMgK4KbBd682BMvr38687piqiDPppcctiWibJS3Fv2GnXicqbLH3JuFF6q",
  "key12": "21BmaofFztE1c4Ud9ysYdJDojN7zGFiBPdvQ8W6Tdmv5HuowCHU2jP99cmJc1rrq8JpV9BfvhPURWmpvDHz1n8ER",
  "key13": "4h8gjW7atMvkPiTEcU7dKLTyiugpK9wrqLQtLDmrCRaHxn1wtvEBfsgshQUUuGk3o9wyPyuZg5SFhsHF5KsYKxhv",
  "key14": "TKTcudMUgGWTm8GifeJKsb8cVsvEqa3BC9jYGT55aaUvkcqLFLSHNvE8T16EnrnL11bEb9en7gZ9nLp8rSDeKAY",
  "key15": "4TKQHmNPLUjdBvPzyrAThzUisy14JwSv6QLm12qw2RyUXJnpryapVe3pCE8ufPH21jDbjxQGWZhjzfH4vNVbbhgh",
  "key16": "qFm2cXdvcr1xdhTXZDWwngy6U298aCZvS6zSDBg9CwXvh1NRrLXw3dqN2h1PodfACdJwpHWSX5sPvWHUyKhv45W",
  "key17": "5KbxLtEmAdi936KqZm7CuQbvTK5FcPggqBT3386gcCR8DmucWCtLuYdbEdZHdnvLrwUHof7sQuNVNdg1B2FXtiN3",
  "key18": "4v7VsZHJsMv5AgodCCorZy7HvCnGDKBzi4xHwvTUMGQoFQ91EJVjhL8cC9wSVJQ9bPbEfeFxUTr6fYSKhdvf24WS",
  "key19": "4qciKpJS5DJkCtHV9CWBcNN6Wwxk2tESyHCPDB6TpsXAG1nvxNGLS4nzFVV4MQExZRUhiytZT2Td1Ptcor7VByu2",
  "key20": "5uaB9ghRZshvsM6fy1vEzuqzvWCSZ5f61PKZusuKnNdpSy6AKGiBRBc5AXpsQcDb4c2Ei7Ars7GWQ9NdesGPf7tM",
  "key21": "4VTRTZQfZMxSYDzrdzWXa8QKmdRPQXjXKRZ44mcDW1SyGya3VVWhM7tGMtsQhLY4YTRuDJPYR8QGrm2C6s34oKYr",
  "key22": "5uWQPwq4K1akfaK58KvhXUPsEAwpT5eh8TgeYMUzBCbdDC3PZaFEp555aBQQ4Ux54TKMmUMcX5AaKaVtWv2sTjht",
  "key23": "61dDrotwanSnuvrR2C9rKFNaYQYMVwAwu2zyYuJhP6s4hKi18bg8tkeeoXpU3MX7XUXDPjQmP5ycnj2TT2xzTDYu",
  "key24": "3pW4rr4HfFNKVhmvXiHKqj6qh4oQGPqFkgnp4eFDWtXEimvVRvv8dpYnVXGqPiu4LMRy2MfKAbBPuQLjJocKpypW",
  "key25": "3Kj3Debtcgws3vyuhuDwgX8dUECsSPQnAEDLbu2g5Q3Ma44jxqmVLxKvjizizTcYxECBgAZ1DJqeRm1UqWQFguZc",
  "key26": "5CE2LZ5XyJMZcYJRPBzWoeKEZWbvuzc4Cfdmenh6Kf6tkaxNU6T4V1qGMsfLbyrxpb9Ct8qdb3kuFJkWYCZHEMsr",
  "key27": "4DFziqQz9SsuumsTKwxQZBk1ng2PqkUjX7XPa2aw4hg99i9HsBWKAgi3zZEUY4DCPc4Dcc5ARAfPqAdqvYewXcPG",
  "key28": "5QtDbNkbFQYePXCrqhtcHrf3TW8RXpaQzWyEB5CfpAqX1VP3EAmL1SK1y7BZfARqYdfZhnV8kKcqWsmEekcnMY1d",
  "key29": "5XzNsF26pUNYbzcd2Kri9XSzqPQMQDPfxEaBjkS6MJN8tHyNRaSK8BqqarxEHdZZeh1F7A8NJ22Hmon7dKXhPL9N",
  "key30": "axc15WXEbkapWJt745mQ1v2KQLNb1GNQk4xzCjffUMYQ6qqTJuQvpgBD7sAYhKY8raA2B4bTC3p2cer3RCndv61",
  "key31": "8hLn45oAU3NrTxU26ZKhfCJ6emKT9vEoQkb7ZN41wQ8yZWRrRQKhBAUuzFaaJm8AWX9GEenLL751Rcj7moQGwj5",
  "key32": "2WwHbnHtLWxtyrLDRFymbZiKf6yY7t1dboj1jeSfUpTmxSDS6KRTWThA4aDHSEBT1VJwUPZttMYegn2Qqrr1JGGZ",
  "key33": "4Wrz9qgHG3N4xb7WM3VYWasvnCyb6afiCkYRmJqAkHDsBKvLkEEotJvUqqw87M9TcGdE1K4E4bfPQ2Emzr9LyfU2",
  "key34": "2pd2kRSiCiK6aQnnfNBEQPTP9SRmpJFGsHQxZhicd23Fs6Y3ncqjJyLNM1ZYyCk442FRCdVivVz7HEHJN1WV98Yh",
  "key35": "431s1iNmwPKNu7qTHnfC9ZsPNDgs1who8DzJq9g6SgnzddoLy5CdaQG1mPdKvP3tuphfEoK1VFNGPk8WSvmiqJNG",
  "key36": "4a5gNXX7xDaBC37H8mkEh7uW3GC5Uu44bDTKcxNJ2sFpZCVVtenpZS7XPYfo1BJdtG49FTpijTpgyAwpXzqsDqVB",
  "key37": "5BNMAskaZaiwMPY62mrRQBJ6jCX1SCGrupGXNFxZnvukHA5t7dFkDTfCm5spZCbgayhHz6hXCpVrce3fY4yoZSp4",
  "key38": "5gRSfjatgvbdZ9vQznkRvmZWREmifjSeJXwZHa7GZsHSdcpEyx5jeNtnUcaGMNuXcvyTaLUNAkVbWywVtrvPukZ8",
  "key39": "Ja8e1PKMeE443jfkVtoKc7sHVQfsxuZEfU1ELXWJsbwfs4hTeYcKKUW72AkH7XpX96y2HD4YAZAWm4GqoJK68HW",
  "key40": "63KR12mxR5ZU3MuKThKnv8J8CRGRa7vYW1YJPJAXxvyfE5QLvRGV9ExQiTYwHDpcJqSrgb6LvRkXqkModuFfafjF",
  "key41": "46M8MQZ4yiuTQzBhiF4cqjukV4FDPRxwFNEyvZX6MPR2BoeWkBMCUfMqS36wW3yLUNFVuWFvXLQkLAevQMGyZagp",
  "key42": "2kN6mwJeSP324ofrFMrqGxaBxpSjJEGgchf4yT7kR57PhhqZ2eZin57s3mkwrjwge1fhtc4ja4XJm4JnVGPBe9y2",
  "key43": "56uUqV8HDWvzbcdzfLXvUKtKdUkjJoHUQuEUYShcWTNwYBe9DHox8m9WAQedxnHsbVoJk2335ppdPPBRLvUfV7uG",
  "key44": "2VjUtsMxxZditGsyNqSrpBTthuX7DutECUtwdxjwTSz25nE2TRQbomonCdg6eDXdti1324HY6TgXaNrNp8Kvvua4",
  "key45": "G2WiQXmAJBPgYffgHiAR6Pt9cVypfe1rZGp2me6Yx28USEQciiw7MPGerZWRqGq6RUdTeLucwLc8QSLKU727TyN",
  "key46": "N1zs9rnY4zdvrZ2DFVTDCYdCREajzAgGbE37a2EYeEQZUHTgCSG6zEEBzqGkQhSXoW4UWPFtdSE9VYYEWhLRQHi",
  "key47": "5n2KcQ9emgG5X5o9Ln5W1kgFCHwYzVb61L4wyiMzuGiaiwoKqDvAY7WfhcsbUA2cCeuMBEFgUijCzCDfsgPkTXTA",
  "key48": "5vupuKHaSTiqVg964qfgR7oeZFYLGbsFwnjC9kFiZQUnVXdgLMeLq6vmN4m4F16MUby7CPWVibLRuQDyb1ek2SmY"
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
