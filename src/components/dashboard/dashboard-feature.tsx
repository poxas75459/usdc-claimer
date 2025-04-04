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
    "5Vam1vxa32aaH43drPutsRRKhW5tpZ33mDRuyjAuxW8PpZQ38VsoAsFfJqK1TgQJJ7p2jHvSbMLTjoRF6KRcqafc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TUvi5ZmYnDNjikySDPqze95parcomxwV1wcEYkc9bL2jrKc5cibMizeUMf4yqnUiKDtUt3ttq5ZiRQemV5aQ9dM",
  "key1": "5pgKaj3aWhisnYKtoxn4fEUF6QEfUZkSj1RFPYC6dv1KtCzhzhggv5Yz9Tq4iAHhv8H8k3tW4WXB63NecagocRHx",
  "key2": "3KPM4udkCLJXj1PZQiVFdCL3Jr2PUxeX497iZ9FXnRUyme6LeZuLbdjYMyesT6YDMsKxoctC9S7S81tdLQh7BLZM",
  "key3": "48qMc7vjrYKXfPahmykCemecXqACdA9EwKtGBCTY3oKVxPSW1SGSa6Rp25dib3EX4zV5aoSgkcNaKYCYhPcWSvGa",
  "key4": "fBLQc1C4q11N7inxJ3iVPkvbqzTXkAp9HFzfLN6MUTJXzG2PzjWjL2Z46S4AJJ28wAMhM4rcLr8D2B5WczzYvA6",
  "key5": "4YzmQePXtdoHkNFhMPUne6uUejZFaRi3VwqiSZJJ5nDpYXJAFqd5jHR24mkKffhitZusjdTL1Bjbctv2Pgr1eR9Y",
  "key6": "LXxdH7zncZn5PZcVEMtuzr5EsFSvVoEr4QgAa5Ktd6NaDnJEDqvL79fP1168dz9Nfa9dZeJc6UuoUVFnjATJuTB",
  "key7": "4hNPDNqdo2CGC8Z9zeMYC9KSuMWDdEUFyG3sDRmsWPAs2aAr5bz7jttEgHGgVe85WezcFSoeLAAHyM2cgKgWnD3d",
  "key8": "KFWY6jinaDqoSnjSP521ZUkBqUFvWNzmxsfBWWRyiG9HFJbP4KW9SBbketgB5onMgsQyTvSieMeac5DSYHnJCfm",
  "key9": "5UNa2MDtsXKj8fDojchV9x64KxFuWRD2asnhGrLv1YFDZH7PBDSQAi9e4obTxNuRAHNiYNmdiHK23qh1QAN1s35T",
  "key10": "2r8uvGSEBZbTr9KV382vPQk1CVGJgqeMFoMHHwvAJqQn9R7T9zda7CoC1fgZKn2UuZeJvjENHN2Y7wTfDdP4raRu",
  "key11": "5AWpdaaonCpMnqKArZjY682e1js1iPgHFYjiDFLpfaDKZNa9SnHjNFr7eu6UEgzVcmg1dusUchv9byXDoTWUy1oE",
  "key12": "Nor3VZdpVVLBSVGnWvhhGjSi7z8tSGXuCv6FJTY6pgHtntq6kyc4zzeSYA9BbFhvbAAAzTdbMURvC4i6uNjcu7r",
  "key13": "5RhrLR5iGKycaQ1uYYnvhAC8PpEj9Zvyo9KojkMdEvidtUNqWgZQPkoDAN97HWB9dMYaUhnw47aZpsDrvarQK7zF",
  "key14": "pjNdncfZiiSiemLMo1BpfMmoBMscGQSRvk5YqxGjpsNPg9HMT7iE4KhAN2chBtJ2CWqMys3hkaJR6jVSmWvCpRF",
  "key15": "DAiqdJv4PWaxXETQFgG1P3suAoJ8hhXvnJhecBBABaQjyiTX6RPmnBNbehKUZFgbF7PJ82rfaaqhpyEv6BkiYG1",
  "key16": "5Ra2shAYKToL4YEzqNCdVJ9s8VZ8ywDo1XZfmneGrM97zYho5HEfR2u47L7k9G2esyFwxtWtjoUct3Wtoq8xeZu1",
  "key17": "45EfmmJLNvYP9Qyean34i38GZHqaw1GqmQ8LhUMthbzQWhzkKM4XCRzfpbwGkChb9yCcpS6H1GA1cPX2QH4NT9zw",
  "key18": "3dSHqAto2fMXoRKiH6YJkjDjKF7DPkWtsKyWQaMfEauACwYF93UkYgchKWyRiBqVxCjMZ5tukHxHzK9U1qEEToYr",
  "key19": "32RMge1Qmk8uQdEJXBhjdaD1TYCxM1N58HYouzE4aE4FjfL2nLVqyGFkg6xDbmuhwvhczLCKNKU89sU9zg95hdk6",
  "key20": "BpJ6da6hG6QXvypFwhsDyUCbZWbZ5PBuyaNZVDwhFyL6JqHnbVCTRj9ntDV56CPPSNMUbK9kXPJFG4RBk6miX6c",
  "key21": "3EBdZ2o9bCSbWcX9NNP8KE2FmGh1S14p38bp7uuL8LN5qdCvP4o3Midg1tp1mZmuruHEqkVSna54frrsikMe4Cw7",
  "key22": "4gJW3oAPiDSkRVw9XMpxMyMU6Bmq7WRtFr6pGFWxdVVvBTZ7inqX9JKbtMNrqv4jmqKncWWAg4fkbhThWr6PWyyd",
  "key23": "21nNy4JaHzXce7cTq9uEoyW3fYdBiG7tXkS48j576hZrso998j7Zyc7Y6FraSnXd1vYP2ovXh8cRYXubt8tFLXPv",
  "key24": "3KAyTbgBzrbMB7xYKLk69aetPgrFLsbmmxnDDJWHrqZ3resQhxE3LbbgnWcuScururUCNzeJEKsVbrVMzA6Dvdbj",
  "key25": "iTXuvb5TyQeegP1X88Yza28SnPiwWFo6ZE4PXZRpnCKrqdHnn1C7hMDUZFbqgGrTHoiSbpwJwonCj9bKkSpRixq",
  "key26": "494HE6kFMdHDviKRrFCNqmzXgz2dJbDxNpqzAQoAyPS1QUzQgwaDAFWesqgbTfot1VTLSUQ4hnLk7yc5BNTHW41q",
  "key27": "55Fx1trD9vshc9hoYcURvkcVADSameQGDkGzZHKPFxBz6i7WZczZcCYMR5SpT3htE4878Zq3AGoavSLPFzRKcbpJ"
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
