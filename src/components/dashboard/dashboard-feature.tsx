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
    "4HVb1bPTc6dwvtLKwxybFThQAGudkgMMLvZ7Ph8EvqMUFvqjr7B2bwD8bHCg2vZuizForjeoTcPAwKfsT8egAqx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5srL4zETrnmi5iZBqyMbSQkh641YXQQiV5j2CSNicork3BkDhDMeVkE7PsZEM6TtajgmNzu1QPBVFQqRkrivm6dA",
  "key1": "3MxpoAqbva4M5DdGW7av92N7dvTzTxyBWNmjLHJLzuQZmKUvnKewREqoGKx3XdD7Zc9jaUXNGmBSqqsH5ERp9kY7",
  "key2": "24aXWd1e2FnMGsUwv4vRSnwSF1NsEwgXMUrE5ewKVrZHeaqa8nWUr8Q7arfSn6Td7zZktQADgv1UC73YcqggASQL",
  "key3": "5De7sNDXxLofB1BuBCjwHwQghPPepUZsFGpm8cH4sgcam2rGPErAKW57enahjyjH4k3aLg85FamRvuj2Qs6WQsMm",
  "key4": "2pq8wqbbhu8KSQbSZpwSnKdsy6ViVpueAo31JZ2pYVUwyaa1iqKT7ex1sKdnv2p12GqTWpMAX7g5JozRyVmr3afE",
  "key5": "2WE5w4gub9ZqHTCoyERAgP2aNbMoGcTzbYSEcN6SdnaXs2PEVxoiQ8KM4V9Q2uPq21A7DShJan39Bqxpeq9ybTuM",
  "key6": "23w5N4y6AhYJ8KTm9uK2KYZFkP53w4t5wJ5njhVcYb3kgDE48LKywdPZfQcj9aRMHXQ7TCDvknwJDh4E9qDYjMnw",
  "key7": "4mnx8HeAUehyz5fJWyp5C1Ydcid4ar5fCBYeif25HrxDHm7qr1fLAqu5NPDex7i88BRN6V3pvLgBCi1TyFH6qMwm",
  "key8": "34Z81QPNAS1HExYf5gHMqKywZtFXdYkSfij1nDYk3H3mcNT1e38SxrJLUyd2pLcx4XJ7wdL7xhdGdnoAmuiZv1rK",
  "key9": "28fBfmQGzoSCSGhSGXgVb4Te7KzN8TJpYaCfyTLRoSdEkyi61kRSh4zHejoqzZMuvQNUPssYWsfP4QLJmB6wu5XH",
  "key10": "3tsBxjhrJkZp5ENBGkah22n79Pzk7o9rcFirox3BPgPJi74GLeXdQuB3qMGY7U6vf5y2Wpkp29EW8EvEctDrRm8m",
  "key11": "3AwNZDbtWjfNEMckR8MW3fQYfjEwZRCP3FRTE4jkAuQQAZhFRxfV6rbWLaZAN3y5ZfchdykzZkGvo9jQA7Nc1DPL",
  "key12": "43jVsCnVutComPQPfxXKVWB1u9otqtfKbC3g2YCh575UMGHrLVY3PbyYgwk6y1WYnyKPi7Ji2fW8qcViy4tEvzgH",
  "key13": "8GGvUPeknRtncFswNhAz46EXEcwQ3MyNuj75ZCFthb6r18oDHBCszasFaku3Lp4N8d6WbVszz1VKiXyHssxvYeP",
  "key14": "24zyxNCvyieRhH65hgiqnFByhAvc4eb6yLW3BqBrb2ZmfiuyUPjR8nPSRK978sEiCpKfxyUct5G9sMDzxCuu7Ffs",
  "key15": "4WqbwkvWzLGsKNAQhm2r7ZLNt8mssWR59QvoMnnmsHS7wFmUXhHNih5Zmpom3ju3vVVSPXFrNb6QMcv48EVcu8RW",
  "key16": "4wqpadvBf25bXhDfpeoXeqaesq5dJgzhMvVwJPADKGveka6RWgb4ksxcjwcK1XceF6KrtDMnKU59r688n5Kbnom2",
  "key17": "5zt6Ca11STxW91b7Km7Y4Go13dtVK4tYqSSoeQJdpNrZtgAyyY3j1nvHmVp7taNkCLH4Pm211f7ZMm6m5TQ7hiKY",
  "key18": "RxRwT1ZUBQJbhWtTjBgTFGjcJYNCQjf1XwdmBWVV8SDCFVh6MPsR71numWu5WziNJawRHANtuH8fByNGz5SzUqf",
  "key19": "4GeCwZQfrq3cmG6ArpG3yD5xmBomUevFJDvm5vZvZwsAFovVz5KEBEqs1yJBRJZrjEjqAEM7ZkVyxSjfd5eSuJa2",
  "key20": "2Wd9yytd5oSQBHA5fgB5VjTJyXe1eb2exd4YYwcS89SnJ6HbT2Ki8QeKjTz3zZ8Mba2QzMixzZ4nqwej6ukHrU8U",
  "key21": "jA5tgENVyXv5eGUq9oVJdsfjenySanBZvuUFVmoCZR75xfdcikD8b8sv7yXYma6hwFisDhgeShPCsKugHyApfYB",
  "key22": "27Sqp4jEYVbyyd1RAn8A978U1ETKKrVNnu5GBPAU2h8RmkF8c6hgvSNoxG5D8DyyWBunsktY9P6WR1yCCXntnAnm",
  "key23": "2tTBneBXMfKUTkSq4RohxqLGuS3q6ySCYZXFm2JtnDA2gLBPyPCGnTDEzL8uQhZrwrrGUftR6pH3wQ8hr4aadvxc",
  "key24": "YAPekpYodNZPRsHsuRYcGN5XnXcsTkkAnv79JskA6DZNTjT3sC5c1xZ2iMhi5rbaP3UeyCWKxowv62DKDfPKHQ7",
  "key25": "4s63NpQWuVDccnY2xkChHynbS69P2cWF674uNbt2eNr4JYnryMJzD4GoFLJ3UYDTEZmRKM89ZgFJQcVMoD9rgEqP",
  "key26": "2VTHcx4RcapgHmSDYwVjSUhspm5ao3vAH3o9T2JmMuCxcp8j2cd3q6EpxshYZMhGDrbQDVXRX2pNaPpzguCSMfWf",
  "key27": "2cZpRrVprtJs6pHvBdVmoGra8BqgZFdSZZUjbyhtPPqSqeAGfgoJF4McrEwbDdoe1juJUHhfnZX11mKaTPd6zQXX",
  "key28": "3FtgajpANwQNXieJpTgsQkznWtRdyxbL5mRb2qnxcQmgMpmPUzX7UT1WYzqwBEAE8DCzGt6QFJxN2j3Enc5NRSZj",
  "key29": "2skN86qKjAQgEgk15LnCaUrs8CPwqU8SEhd6s2yUHKYnfwbigA2WsUde3WGigfsPGoerJUNEBEgUv4UJchNrt5r5",
  "key30": "GhyqMrBRzEz4qYyxgoFjYrbcbqQssud8ihnuQvbrBFYedCb1FtxB4FzVUWZCw75YzNQQVUP4DxWU45d3hDT5WaZ",
  "key31": "3H2ip3Y5tGcAEr998zDia5SiqotvWRGjsR2BF1NtD2r576ADgejEowuj6kFiXNSNeAF2dzJjenkRieerNYvYMMhz",
  "key32": "5KoZzNNX8A3rQRyAjSWjLLQWt1DUN23gZXLtpDt3X7S9yz6wEwGyBNjUjjKeKGZQKS37cqtKwJceFrkSWHouxyDo",
  "key33": "3SaLjGBjSTvN81koxWvFfxujCF2UQKYKe94F7YRuZMGeR1J74SXFTnnysEREdTwVHhAYCAg7Pi4642nNpkTaEjyg",
  "key34": "dENQh6gwbn2gecoTgRFNjQ6EhVfho7vo5Hu5qoWyKGk84eyU4UZUweNuU71T1wsZn6Js4nqGzKrwpVStzJUEp5d",
  "key35": "5faRB5d9RPCifvqDbjDqPtGSXefe7s47jky5LAKy5ibeSb5RjZgZVVNGL7HR47y6nTo1B6dxukXecGsCbo6jSsBF",
  "key36": "3Rknei6tieDDbJf3U5byDKzXK7Xu457o7fEUcyrWM7xnKbuwELPQq54pmzG9gTu4fnETfoY9rDaoG3UdMkpXDWnQ",
  "key37": "4rUH6mMjS3BqBxCudnkM2oTQgbTjaV4PvH6TQLK2z62yh39ZTFNMoRt1vv6NpLicW7JYuJzdbjTQH3WYfPK4vZ77",
  "key38": "32L2xsFvGk5fTvqs9F8dJ4PDDRsQ1SvNfCsjsHqTDrq8aGj7Nu2xjfWey49FfeZ7GuKdAo44Kk2cdGXLNYqj9Jje",
  "key39": "31xkEiF5CfaxBNPFHumLHDuQtxcZruB6WtGFVjkiXhQy4pGNAzPf1K9tvythSPxDKRGr1vaPVVrtdJHFz1unJHu2",
  "key40": "pNMiAFVaV3iEtF2JxhSh4HqKR1Uc1eMckxcD3T3fTYUqBTNQthyAswqkaBFSWVkMpKdUciggkuKuvHbMJHisoU5",
  "key41": "jLb4SZ93aqwWdS4aj5TW14dddnSSZBjSjiQr55NQEBdZZpwA29Q7VzxohBXrQv4cp4oqR4sisZ3XSH7dq6wfSak",
  "key42": "5Cmfdj92vxarcdutxGFY7XNVNTRDoMYztBx4vVkqzYsdftCChstFLr8JMEhinxrFu4NeytuqNPheWsFHoskS8Hz5",
  "key43": "4u47mhy1RC5y5RbEV3HQ582vpynyXiFcJLKKydW9KdHXsByh7dfDZifhmHoxtumPaHbrahD7XNxPmYUNsXn4Jkwg",
  "key44": "5y5WPmov5DvmGBXMyjobcmgLG9y38wqd9tm4kCrYjq6Bfh1GxkjRf45YkjJmqwwMyEMQ8yfMLPkhmrgpVbzLLR3A",
  "key45": "djhBeH9s444wi8MSvL4HMXs48tUUxhaKPHxFvtNdLRgtW9spXfyKCa2vu9mfqfypvZ3RVvNArQqUKXNvPd1vs55",
  "key46": "5dMvLbj282kWGXgtM3faso7sK5AP9VZPdwSACojHYrAuCECoF84p67DzioZPoKQZoHsZkSMmUEP2CBhVkkTauTcB",
  "key47": "8eNA4mRNQpj2hSSEmcnuWWxViFubwEGYuQaAqSmQdzyHZStEsmsLWc3Rr5EsML2dk1WjVVz5Egu5Gk5HuzetjEW"
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
