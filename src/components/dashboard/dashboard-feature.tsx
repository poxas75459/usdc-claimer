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
    "3j47hqUdMwWhhbN3wbJScE4PS3pVKjwHdDp1kCXE31gN57pFE53UqMGAjHKam4ocWmFLQA4xTTo39A435PD9TAxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDKa4qvttPWGvJgUc2bBbGvP4w3Z46PfhCLAtfzNaVYgfWY4CXgBxRSfr8hNYG3tU8CWyqAx5c7Ft3GAWiXTmMt",
  "key1": "4Z7nRC4GPksngEGhLPTMPKgWxbVWkVC1M3pHS4Af1miLHEgou7xDQ2YzmuxKq8LReTC8y99dHZgc8iMcRSfXfygQ",
  "key2": "38tzEkKZVnhznhPWTCqo7uEuoYKn2qAoZS8as99Go3x8DAz7oQVDhWfhhgcRrqjB4jbn3xhDqm2dcG4RP8uGcw4V",
  "key3": "EBFvvzudZEDUnyn3UbkwveP6rGwZEtaboKrLdSkEarow7tK1eLbasRFtXxY9TxQutTMXawNtjUXypd8LdfibisW",
  "key4": "3Ps5mvbqVWmmEVwe7bcK2fRXQmf9wNWsWvuBo11XxzQZRGHFvu32nVCZns7Kv78NqvcsAhjAJomnykywgD86rRTJ",
  "key5": "432wArxYk2nmb8nbdD6ubRxvTPgvbdqFBf2FqtwWa8f827pLs2csMZfvPQka9tgosLrU3XFcsr7PNynyxHU5Ct3D",
  "key6": "5CV7qAwjhGwdisCnUz7VpQM7qNms6dwnV26yNKL3AmJa3qT9SeEEnLMuVrQZAFNX42DqpGxC6vgcABaHdz54je11",
  "key7": "75hTwrb8kqA4nJmiSXxVVCcrjWpRYbC5KHCCUB3fKrwAcDogVDdaqX12TEK3x4XC1D72a9D3zeDqKZexAGzm7Dn",
  "key8": "3iLPEYb9NDnrp5M31PLaFUoRii9xf1upmTzdXAHCCLhvkfipGTZLGVmDDUGmDsKkou6H2gFu9J4aVcMp6cZSZ6a6",
  "key9": "3vccGARkduam7ZsygBmKjUpupvxbyqY3XGPL3FAvg1U5tN8AM52uMp5dkMU46oEs3jxQx6RXK769udwgxP6iiyof",
  "key10": "4rWUFBwPcdm4E3H2ADBCPG3WNWBLxUobc1qrMbP2W8Ysn1Qd5wAHnzid6Q3WBSvcAacQ7yExSFxnw1VxdBd6SgBX",
  "key11": "3A97SUVfTnH2hJyYukeaz9rUY3imVTcfaj8GPkEUiEmWJYoTbwhwGm3555MvFHZCuNxfKE5snPbGySas2ijZbGng",
  "key12": "2kCCVoLg35au4RVfZtZg4BtnsGHBJJSw8fJK34rwmhULkSgwmFk8tXDVR96W8t4YpQz7fPsVmF26NWDLS623HuKA",
  "key13": "33awjTsZ12cTJ8RWPjos4NDCLMmQUG7YAdU5VvbRThTmK9vJdPUqbnujwktsoqCNcKX51dbr9QVJdVomZnZupwDB",
  "key14": "AuwBuwCm1aVeWhVXtDJjdCg1enc4gfSCy7BcHP2YUk4A88Z8ZsBbY4jqAHmdnyHXmrcmxH4DW9v8MSv4k7bXoe7",
  "key15": "56ATTcyBEqVDugbZw7jqbfh79DD8Xh23RRuGCwKw3m3JbKpbsb4iG1g6iyZp3kBdvK8kUrZKw6cj1Y89FakEVx52",
  "key16": "3t9kHVj31WJjou3jUQZWacgcWDRC42Kpc4mZPDWVWNHSUvX3MTG8LWKCumchbFhz9om8hoTL2Q3oiVQ4UDBUniUJ",
  "key17": "5ucb55QyfbD5nA1Tw3JEaUuNr8t1EDXMUbBQZN3G4JB6EfKn7QoXuZ6zkJeEQV8cbYrF9y2GmKMQkBeCGBgxjVJ8",
  "key18": "ogBGJwvssvzZRvRo3wydWdrG7pfS9re7HcDdSoHCVkbrqnAv8KLTpQoo538HjvBdqjgYwCED8KiB1z2remcoDHZ",
  "key19": "4DMMTRPjZ61ZJJ7ybMHS9JSkJyhYbcGqBLtuKmQH2G9AaQ6EFtWaootCoY1zsc1yWYdap3hPVi9psBa8gGzaYEAw",
  "key20": "25MERymuKJdvVTWNYL2TioLUFVeDpgFq1f1ZFiXRrWiwsLzUkoxHuaPPNEcWedXZjNqZJc9fBe3TWvQo3joCmPY9",
  "key21": "5JQG64TsjrLfnePVDXmjXVoDFxuTjXA5m5oiGSshmH4GW8VmfJqd1ASQ4bG7CpBapCQzvba8s4TSBkaN5QHQGwdy",
  "key22": "2LjeKyhVctWJGiTtFmGTRxrUNofzpHkRjSZfdnh3Jo76wchH3qBz3w4svwEWuGTfKqAZtbGKVtfKuM5QpkWp7VXj",
  "key23": "5NojHoa5Zu3ngs2FZQYCfFHpkxLxLpuDHcgeYVbLLkUYddeBjaFMQ5YBrEgXgfAMaHNj4aZd4bwUAcupfYtiM1FW",
  "key24": "3PJjR6q9u6xBCBpF1nkLEJ7MbB6hJrgiqFh7Q515J6EarXt5LDsDqnjs6DvuJNvbDiA5qMCs8WmstRDd48QkRanS"
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
