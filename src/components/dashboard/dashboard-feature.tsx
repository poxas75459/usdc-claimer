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
    "54uCrRafGe79Rqzg8sYiMrdAkum7LdHTHamau8K7gC38xqxZ3FW7HUUoQg2ygPxTn4aLjPeNPAsnKfFhuW5nPrj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537NvLW1exPg4n8PGUE87d9HQcuWVCxqeqQPu3FwjVLez72qTbf4TSSWJ5hbLpXtvB822VZruyUpeFHiwbAFk9ga",
  "key1": "4aLFUi3SDZC4VwSxMEcefwCSri8NTQuREwUzf7a72HBKHtjuomXLseqLcqhTnZ5C1J19bTqSX8oK7LemCjTQNRdJ",
  "key2": "5kkqAurWCYP7Pqt6vjUYoysTpVJP2CsjDPfR7jNrMp7sU2CqbSBikKy4WPAR8yNVvDVcttsbg5RGPiDS4RHRaprQ",
  "key3": "GjjtWL2Cigjc4MisBjeZW61LH8gSHfmdQpyMtquW5WjSpL4HLwxpQUuwwCrkzvg81tD4xpDz4zUbFAfMijDYvgu",
  "key4": "397KQELTFN7Wije88fpW9raaumbQsqzHLXUmdyULorvXRwZFjuvxtiU8ujdyYyttTEJn8L8CLkcR8bzmRivgqVrL",
  "key5": "4teyST3s94AeCNKKYbQeveAitLtX9PhRk6Vjd6hLr3n9yC2zUb44CtTmgA5osqb5X7X6nmHGubCW81Dp7NtJk84p",
  "key6": "29mTu3gKsu3amMjKbyp4GnyKnJdJX8tHuS97sy3XnjTZkrpKusLVsESqxmV6ttg82UnzaFXTrtbRqGp6bFtN583b",
  "key7": "XAvp8A5i4nNYMh67A72k6Au2gJFQ952rZXV4syVbwA7v6tXHG5ch3tQXJykj4r7BykzYaCboTeeBvnxXRuuRKkc",
  "key8": "yxpomWWwGUxWLJvFc7WjYn25NaJZfwoTC7kZufbxaS2zkfY2DBT6jnsqLiwGus84raZggaHJ7rPzoE51BJCV4iN",
  "key9": "2B4xBDRAmUuTuafvwnMzbgqC4zY7VzeHw9BjHGe1KDP3yEkbNT85DG3t4vZeUQMb7CD86wW6o9ztfWbCYA5qWzzL",
  "key10": "3J4uMcS8Zsrr62KYzrEUm9GYqQwnb1YiQiPhpMzn6P7A4srnAoCua8xPqwmt2mcCbjjYpUKFiZsppk4pVmmmtHS2",
  "key11": "21kwD6Js5QHRKs1gdbBocbGW3EEMBLDKQHDvAmxoEfsv1EJY78rfqhuFtiNdwZWs4aSMJ5MYAYQVyvoj48AsWFSF",
  "key12": "LZGichc2XCsjs3pW7ANLkYTeVu27qWquAuhUXyKTydPx49bmwdaPXWrY55H4cSHxAR7U1YW2fCFtUPUDmzGBwdi",
  "key13": "4qKBhFZPGDTa8eH1AEdoxs2mQvBvCJpbTSRkoAqo6N1AjK3TmMeShvD5WwgCQYFNTFYtJWm29N1H2SLoD8dWYp4G",
  "key14": "2qFTUGJY9EWQ7XMkt3E8V7VtMwYy16rqoUDwrUrtcJSN6fVLKYt1qdszEcDNEWuuiZZ35StppuDYQnQHmH3pqi1j",
  "key15": "dxBr6zpG2wp2C9GA9f5qFVQJgZqFwsoCFYNTjuTAExPw87QyyL1soHKD7o6kmeikqevLToPCuCHjKTepLGXGqPK",
  "key16": "4P8wb3LDjX2WtzZCFxD7N9FNrZkyUcHtGxN8NTxoDK2YipKpXptWapaaegXuMH78vKAmwfwDqfH9QGqqu4YCFeVN",
  "key17": "R7zGB5VfSJAqNKAXsjpa1Cr5PXo6x2AxXzH1Ec82kqTEGNr8AHFMt4EoZ46nkW5dx7ReNuchsf2bgTqD6iD7juC",
  "key18": "f5neuatd19C2dESD418myZhUsSJuWTzGNj43U2fXUJGZUG2mCvnSems84jadFTw2xbbNoT6BzAa71Lsd8arzHw7",
  "key19": "2DsAdHqc9bUCyjdWcHP5tgwTb32s5CoQ8thfDWFGEuydv56gcTdNcmNMgDddnMXdYrzxChsRgtAdJcfAQRcZsuyD",
  "key20": "2KRxrMkRXJBtYcDC4RXcYCuXYC31yEBSXqmLU65J24Hb6QcAYm9Na7DXVAhZq1psh8xoKL8rqmHppYQsbGBML9Eo",
  "key21": "2s89LtyBm9sqvAgZYcqNjnKT91Kuwq4nYMd4CYeFZHSAXY72SRD4iaj46MBiMWGtUNnayDHyPWzdbGZ1WEjBLFB",
  "key22": "fRhxUDBLWeFrMDvXg27nX4ZDB2PHoiLf7y8EK8YTXJEpm2S77L2JjDotEwT2nX1foAXgs3148KiRVp8ouuu9r7g",
  "key23": "5Dnyrpivt5eECAmNkTZih66vNueFp8APB1PfzXg5gvqpxu4zk1MSeSxDwppXhqUUSQeNwcZqK6emtAJZsGj1gDqR",
  "key24": "3Fe4VDbQfSaxiT97aMQus14yExf14HvzdCNHBZqSFKmAiS1sUCX73Q1rLEixRPckjSs8DdZNAhuVKune3PueQYJz",
  "key25": "GsWbYpHh9aUszJHPF5FNWtPdpUbd3xofmjku2hYBzRTFPsaVPnJBsP5sZnbM9MrLfiaiFn3cPWbHTsWe1Lx9s9J",
  "key26": "5WPhXw6TDbfWYhfwkvT8oFcwYN6MTBJ3CMTDK6t3b9xC9ijPSiuejv4xaxgpUxCtHefaWfiPNC1oozuuFupKhU2a",
  "key27": "2VHDoH5nbHxWLhFmuoTQ9yQLJWCbBFaLVxNgisvXpASaFMtGvg8FAgMdhjwuMz8Np8ZmAnAfT9yoveEyTHYWKi8G",
  "key28": "37gpMxxLC9p512VSimjS9AURevTWGqZWA5JHThog2iGpeHqLTj86JW32RTCSMbgTzMo9LAARuwGe9DinYzHjE3AB",
  "key29": "3napFidgEnfgt3tyS29EBFiLysNbR9g1685C3aBGvHzxsSfXmvVT6DnVTX4t7WQARKw7QpB6AhWAArPn5QZLFZnY",
  "key30": "CiDh25h4fqoUGMcyjFUqgMcZZDCd8sMyENfeVKCxWYhq6t2PrxzZ9rAVCwUibdPvQaYdaxeVWVv6YExNqRyC1H6",
  "key31": "4Lem4WZZDQ4ocennyCWqF8ypXv3eyW8zZkP2KmPpi7HDr22Jqb6u8bj2eJ3jLA9eqo37oSReVpUnksLaBEa7F8FT",
  "key32": "Y8oMELW9EeyNrj7YXwP81enNktUxc114uczkZtpPDx4FKBr9SwU36jnMS5soXtW3j1WCuWoTfPbphF8zxkdcRqR",
  "key33": "3PZ9YNgeKwC88zep3mZfJLJBN2mLiTjNeQSREK1fJL3M9a6Uik5HuWRDMVkPnGWd8udKT4vKePD7gzK6PEfDaqrQ",
  "key34": "2D5q2EMmWSaA72M8Kgii5Nv8wFjTsshF6oH4MWNW6HBSeTac9GNHwsu2x4BCTeDH8m9UtXkSaYxAP5tT5rxLKsNX",
  "key35": "2W3FcjsnESjeiyvJhtxqdRnRgaezKodFz8AfGKANTmpSeMCqRbYFpaeG9E1HPpX9um7J5trSsg2UtyB9R6m3g3b8",
  "key36": "yL5spPJMXCSQ925KAwdMuYfaV2MT4dUHGzEeGvdoP49y7bDg3AVsPzTbnCxHRGyyFokt6ooKWPwsVxeTkmPwuKR",
  "key37": "8W4aRq7kDh2eNeLdFTxcxdsDYZRheGzqASnrfULtv2u1pbXVTWmoejB56w6bB9je4YvvER7MrtaqWiNhAmLXvQN",
  "key38": "5Q73W8Ek89hYXUrxazvnrHMS9ir4rhfWzaoW1S8A9T1FYGsDbsRb9GQ9KuDN3ArBjuBt3QRpZ25vt7APpNpkJSZD"
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
