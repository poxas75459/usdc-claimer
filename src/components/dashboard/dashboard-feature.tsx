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
    "wur4qTVDKW4grqwcc1BMBtMGLczBhP3YiaDBDgTAnCLKLaMm55StoVuVqW2MgLW5Aiz3wkBJC1yQ6og2emQRsSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kYAUkfgUmMqXX1g4MLyDoFegjYkCZLwWimEV39ttarCp7bUoQXSipNgbhymL2KztbMwCUZD25sAXu9DM4u3HBTf",
  "key1": "EmfT2qzsqDz6oNbgNpdXc2xV146RVNXHfEJsejn81qc9Ax9JKnxdJzajYNJcYh8vUp4xTCSphQQhhk5rKjfnvZ2",
  "key2": "5rF2mC8jCKZSeDfwcG8R2VuSobMW3efUFc33ieX19XqHTisaG4Xak5oGU1NbShVwHv1qGkV8CpxsEghVRw7pYV7Q",
  "key3": "5LekSjgVTDCZsj8uDG4cNcrV46es3GYJgYoqUmXiu9cQzPEe3Qe7DyzMmsBM5qMaaojWs4Tq2mFppguKEUtj9TND",
  "key4": "3hQitoEmwR5k7Mn3jQXUXUmnZ3AZwJ2G9tHVS2dH1G2rWamL5wTYpmk8Uxf5XUP9vDAFdh2uhSz4qxN8U7NZfbyY",
  "key5": "3MQjrEEqMuAujMQgpC2hZxFru1EBbqmyY2Sdj9GDYNoNGdyf4WYX1txQWVwbV5ejuhK1jbgmiyE7hkioWaSN5GU6",
  "key6": "4Y3qwUh9vmfp58DYPpCCzrCfB8Mu7wQvCrsiQEiWhtQFzjkstZzi1TXaSsFkBiCFUkMvTaoUxNwz93iDr3RDyniA",
  "key7": "2gPNzSob7ma8MvEjCcH8fHJqxFDF62SL5Uo7t5tucsQxsrbkiHc6FzwcioBUbTftCM6idMHbUSqqHrSAaouHFwAs",
  "key8": "5igWtx67ZPB94XCHR4n4KXKFxfKoxvmSZTfUc7hanJ2rtifT5UDDGvkAG684PuPrv2DmRrQcNTKYgNRFzF9GXt9T",
  "key9": "3me8MARMnkheqzsxv1xG9jv58QLXQvgqB9CRf3kW5QJKZ3qs1QWH6UFRy46dMjao64KhrToyhGnfJLG8guBCDG9n",
  "key10": "5nJhkQY8PwKjFDVrvrAdMmyM5U9itvyfUGXP2ujxeQJTaWjoqX323aKtDE7xrzB1Ts7ipRZSWJEUEzebFKJUDA2S",
  "key11": "5Q3jJd73FkkmuXLdjqLHyFEz4ym1Qq1Suu7JzcLMXvgwTWLWYjAcuTfMGD5xwnvwb393GSJXXdX8NWFibpee3WAq",
  "key12": "HZcPAjQti2GFFk6CKjSJKsY8RaUAwMc2MsqCPxidn29P65PDCWWZLQ3VPi8yazzWfU8o2XmFP74FB19fagseRZC",
  "key13": "4kWF7r1HjwdkyBLr1PHoAtjdknMeRHVuzvdKjV8rMZcu7SSZUVDmi43hJbbpDJgyDdzWiotJ9sfrzi139UWQb7kG",
  "key14": "4A4WSpr4tDDc759p62JSBwykRCKdaYR4dyZrUrdtd1BFf3s8pA3zeYoXdjo5d2oCdiXGouidypdQN7xoiRP1dyus",
  "key15": "3v63wGcSnpgdpoVh1VXJadZaLQFCsYCNoqctTEsYvrtSU6WyQsrXCDi1acWUB4UuL32UaH99LFHyzKuCTsAwNSgf",
  "key16": "26jQkCGD76r3YWoiPoSeuQmuUkHZTATZzWnJpFrMDed3c6VmktPF9nTDMx59EfjEVV9rchUeLtdpcYY6nrx3uAC6",
  "key17": "AWfmBmtUwMBvRoWtJ4AztYoU6AdS2F65RiHDvNyJvDT8TX626UWJj8MAAWedTqMfU1yiJz4XQq42Ee8fikcPthG",
  "key18": "5k8dkuvydaVS6u67kwF9rDCtqcbrJzKSSRRdWD5WcNij7c7aoDbBSpz6AciQoyRd3mzzAfVo6YTH7yPGa5CHWBwq",
  "key19": "WJqHVbrpYYnUM3vrGkHoxPxTpso9WPUSBwkN1vLfPHvnUBVae6odbfSWETLtaRheSe8a5YCP7j6fz6UFhyHBuwU",
  "key20": "4xti1pGgDiZoHP4vthSJe9Ei9QfvHrG9XiMwjYvyPMRxHnnUywVMD1kTMrfZ8FB5r2Xt9cNwMBUDTDDCLAVb7sH7",
  "key21": "2o5hFKhnNqT9WoKj3U7gtp4719xYq6oQ3sxehAf8MxdjPqVs6dNse11cyYVKf2w7Z8J9GVPZTLKume9kr5SdPBev",
  "key22": "2Bh1AzHDos985STNXv1WM2oM1b5TywxwyMYaLsZqEsGRw7MwLZb9fgnHCy8RkYotjfkZQSr67ffhVQHrj9hSGA12",
  "key23": "5jEbqDEf1cCw6PfsnDnUFukkVMsTXfbbxut8XKuAmBiUcQno9QnewmirpnRox7BaMJakXmKooDW6YLPnyNNxpJmy",
  "key24": "QHkPBtLNH253b1xHsjD17fdcu7AsfpCKHkFQnbYW8U4uMHdT1YtTTVUjWS4W7XGXgCpTCVKskt356rSQvuR1teu",
  "key25": "2qd5swn6NhkVA9t442V8M8t2w6nP3gcWcCR9M21GYRdHcEeqifechis2wbHFph3QbmQfdczafa5oBhYJGtCH7r7C",
  "key26": "24uPfQkK4wP8DpMaXL5T26g4JkfAJvc4hVaB1FqxuXMBWXfxSVGnHYRkLKv2WLcBHqFnkiwjwPSmxFjoRL4nHqa4",
  "key27": "5dTZDXe7BSeiZoQLqKLVyuQFhyqt3r1hS9PAErQxVd45y9i5ViAiBAVkABYzkd6eS1Jq4n2nUP6UCbon5Nydohdu",
  "key28": "5aHivJhmfNEgnFcNpQmtQSXFe9xm1A2SGM7k6sCcpsGQwcLMvqx5Ap4fG1gF47wG9RvyphjQtPdQSnysH7844yjJ",
  "key29": "hGn1Zw5MKAsNECdpK9q3m4uigU3E3jr1cTGFSXjiKyHQ8cExAAAnfqdKvyTtvaqv735qEyDHGe5VK7cAskw9cqH"
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
