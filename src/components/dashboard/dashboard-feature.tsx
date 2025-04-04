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
    "2BDnMSZXhMQiW8oobLrnNtAUuNCeMqoqkgaw2zs4wU6NNkcLJkK1M9BrxSP7DBWHXLzQBW7AmhGyVx4pDu6DpZy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ibE3vQmbKFdoa9NgKxMXSj7ihQQXLyq29tAZPEbeFtS6rbP9hDhNChP8NEiQvk4QywCb5JibLvcqKGEpW9L5eEx",
  "key1": "zJMrN4YroYTufBMQLm4K8mBR7cVbwHmvn2SZh15zeyuVthsnEcVTxSN8JnJZSHWGoeWYQHvp83ov82GqkmGRfL2",
  "key2": "4ePvWCj9L5Khe7iUU3QHTs9AqkCaczCKByusLdbJq1eATXTMLmkaWJzDVkptfjbZLVMzNu4gRkMvgm34McUX7xen",
  "key3": "2797kJxzggXdAsGxUHTQCNQSfr16wzGREqGx6dVi3VpGfPB1VtMKnrMooB5zLEouBLwiJ2fBN4sKu3Uju2YqsuaH",
  "key4": "5w5y6CjYetyQzAiTjsw1mKF4BRAupmbdsP9K72nSMSzSMcEDbfDVPbZfEGETyewM9Yhidx4NiFFkaqzwnd4MYmgs",
  "key5": "63pAPqeLpmzjVeULep1nETVFY5C1HsRkqUN8DDJS5KVNL7AusXGEiGpHWFU31YaEQmQ4MyUna1WzxvaVhSwjC4e",
  "key6": "tWRcmNEB6HShGpG2dMKEQBZBknZ4CFKpto1mSkKigckEJCLWZ53ArgBME8gFq1evQMb83r4226dbCM2Wp2YWY8e",
  "key7": "jFzH1nUype2HRicJg8sKe8Za1LG3YgizeJRH2PvZvmCcPAjMZtTmzbshJYgF6pTPGm2F24rUPDamnDXA2kBvA9Q",
  "key8": "nboExDkzKGjDE9Smz7ZhkAoNsEpAMxHxDSWAMRSS9wz4qf1N3ZA9ZtJz5zxvnMmCn9Dn4enBMEgSqpnZcJpbyXF",
  "key9": "XA1PzBLkynJodTn12BkMUrf1TVdeXoEQHcMQVD1RxuAgYunSYZXZrwW1USbC2urqu7BeQDvTEdntJwzjCB65SBA",
  "key10": "36PCv2qdzJJSrXbmD67AtAcvAUmdfnS5ySu13Tf99rXjbwCnrL625heGjLSfKsHyFDki7iSgVsbirzSiYPANjR9n",
  "key11": "4xWkDiXSsuGbSo8hBrrQCWB7aXe7TMDqMWvwCuYPZ2Kj64hjDC8vLRzUqPSpBfU5Yvp8SHrwt2rUCFDW3taahYgB",
  "key12": "33ELMnmpLwc5XwBi9SCVXT6exCVPprVC8xk84z5CfhTEicyjzqWonUPuqwD5GnQdxVLGonusPw1RcpX42Nroht1F",
  "key13": "tiKSvXY4h6QV26wP7zAUcKFRk3Wa2YSYhCzeBSPPjdA9vrnVu5jBgmsorpwYqZoHeamGEuzdakVWEaq7PUYpKWe",
  "key14": "2PgETws4smMZGyNkfqmgQrbXM9iJPhEiK4SH5oiUpNg1dRm9swgKPVK4g1sXwLxwDSMY3SDtgy51TLsUra2bCpgS",
  "key15": "3h2XDirpNcMFWqX7JkMyAEPieKJN12f7WaSnApBGE652QTu1qBXV28XEHLoxMfTcGmgd7iM4goseQ8Fev5szBGp6",
  "key16": "33d1Mcw7LUPujQf6rjPuz2Qmq3UsZYQK3usXx5HLMgoFwZAKJqcwbXf4vkkLvHZ9xPwgmTHVThynk2D1zykZst6V",
  "key17": "4ZTSGKf4aZiXsFiQc9aSbDwNgDzcsWVhM4WshwSTuJ3379sfLFbc9ZshsFzpEmz2wHmwBgbpJe2jgT669ikut2jh",
  "key18": "r49B6nRJMfeFMQ6r2YzztAr2GeYXabWYGZtiexfqrgKwN55oQmbN5fV8Zmro3vTBNCps26LDNkgPtPdmsBP2h4o",
  "key19": "31E4SWhMdahvc4idF5pg6Z12quxAjvvaB83S53vytDe4cyGVxvepnVqyMw6SycZ4H8ciBLemPanTp9KTVeq3X9Et",
  "key20": "2ZGA1ZGtNPftrf92rH11uwADxxSDubC37tEGb34PdcVdkThW1NDvEFt1rAmtppKSrzz16evcFD9n9ud4hC2SQQKo",
  "key21": "HTDWufjjeqoa9rKp2qnkGRUb7VtFw7dT8s61gjQByVaxzgk9thi4x2R3vKBgDxeMjeBokaFywkyv9B6tbFieNzG",
  "key22": "2taq9ZS4Wtst1ioFDq9p8Lf43AjJCxyLVswHiHY2EcXeZDPdPfnoDWPGSV9Xdadq4mv9xaS22M5PRXHDA8Lbxp1Q",
  "key23": "jVZvHhnXPGpxA4rYcqhNsbtzkBESMTZTv1CHXdFXmYyWTJKwLq1nrWGdmJqzh93K8GPFKVw7FWZvWT54imLS5ur",
  "key24": "38BoLvPSRB5cK2NAsoKKhwzUyfufKwQh43zidqSeRpbkE82hMP2FcVv5kLRQ8FdXEKdf4FWVs2kzJd84UWeF7WMG",
  "key25": "4Ahtw7rvb2nAngjFTicZMfvnHGYTrrbfJUUswnME3PWzG9xNFVJJJ5VVKTUbLP8ytz7Bn4TXoPHtbtVQu7GH9hme",
  "key26": "2MtoutVpsqQamcCnMpC14rMyBWwU7twuYQCWfmHeurUy1qcBFNqW8r378ctUrtR4qL6GkzLP13wj4G8NFPd48VP"
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
