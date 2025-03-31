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
    "2h5dct9LcPYFNdiccb1rzS2Skmpasd82fSMPyq8TYDRFz2RrzsGuE1CFvWMrHzm2kAwysQgKnbgp6TTfzaJ1S1zN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h15au9BKJLyzXeHjVHiqpxepNx5X5NTvi5ZBpqDtdLaqckaETvFcRFmWv8SAc1GQz59YJUVmS7wfwyKzb8CtDWq",
  "key1": "bhpQswUWPAmAWKvpsCrH1STW7Y9jTkjZnt1EtZHBqTEb7TbscSuLUqF3QgdZRpgzjXPmo4DJetjZqECz68M2pkJ",
  "key2": "215EVerUiWLjDUc4RFUXrk5ruo98h7ebPSEXNeZ9EY8N1UjT8YEM2QzvoCGbxArFrPedF38CxDSBa2WjFqNBuvrd",
  "key3": "QV1Dc493xiBPNei8rHbJNDiPEeKQLDLtfy7j8FvLJevjCMoT6jX18FgQ6R4QRcRwjZY78FK7QBDVyAennVvyumv",
  "key4": "4io4YpUPhwfUFKWK5AuxGgKrkg25sG3cni4SEcdGqfzPULiFw875CAGMox7Z6VZSyCyxji2W9YfYAjgWGtg6dRvm",
  "key5": "5gJfCqXtPTb7A8Ai9D2HKxTBaPtwuUBGVRttWJVyt62Fmtvd6EnqFqUDdspx9fUU3gW8fPe6rGQQzZp6GjnsyN3X",
  "key6": "hgXUU4DUzTMCW61GswazpZwqfQ1PByrB52A9tXA8MccE6cStCqjBpdYs8dyMpVZqXKkSL5bLxjCZvMacHHyq8wh",
  "key7": "5qmtDCiAVa5WikZVsjMbHmzskMFAhNftsk3Pv6PdvCGgoVWMud3QQfSZhKCNGB9SzZzHAt9h2SNceoLBV9FkgvNM",
  "key8": "5pvKghdtprRVJnYJ52GrXC2LWqCTdX9Ava3akH9rE72vx4Ujgan5rLE9D2eExEZgCLowZ8NNEtdRLSVzECbnto4k",
  "key9": "5v7beCDuSFK1jB8ZRxX6UHmKpfkW35TD9LJjdNGmyoMtuY9X2emqRdnkpRnATHAmGRW2eEFRqD5jy1GQywsiCEEp",
  "key10": "4nedn34zjFpSwnDx6F1H22n8i8qEh3p7t7NMjkdc3s5zC9KJA28iBxdqsKM8QK2qiZzK7uLxw6WefMoLTZETuJuC",
  "key11": "5LB1mtWSomfYELCtW2Fj7ASbcZheq7UfgBmnYd98mKu7hHHsiYCWyCUqVpANY5qfzZkaaLddVwVWL2zeKzpdWYuM",
  "key12": "4HxPN6tAouGyUXL7mT5jpW7ytecTf4WoEq2k6uwbWNi9mYqTDe1coMQmzGD3sJdWBZsxnafyuaH1Bi7Gy2CCbArJ",
  "key13": "4qPnV4WCH1tQBuTCbs5oK8Ei4LJj4QTNTe4KyNcffH7JXkh8EoC63DA1S9mvYb75ZTby1jy1BMrWZR7Ypo1wGRhP",
  "key14": "4oaAwjk2pRco6JsGXpxqWLrU8quCzg9c1TBcDGW5gU1Mp9wgr547pKb5mHuztyfS8xSj8hRekwrnQni181Vv1aGt",
  "key15": "5gy4u8J3CAWc9LirRXPbuVcUTWUvGhgazSyiZ7wDorLz5Tb4HaDGNNdJmGkRSkA5GaZpKDqnMAoSHxDiTvVJQquS",
  "key16": "2Tb7FQQNxMhykHvbyXNQaLqjMzXnAT4V9MVNFDDbKG3u3eq6CtRbuowTULnUoXGGqoEZ3od7BJ4ay1Phu8UyZ1SJ",
  "key17": "5y5hC6UHciskNdWrvLdfh3PttWRjLA9GqsbrYRuyUkunaJMJpTfksNabdXikk8pNem1yEvoEhzf9zhW2nbK4Xjtn",
  "key18": "3k4XQ8PdgpA7T37UV58jHhneDVmdRZASDU7Fqtuugdr7XpJLhDFR8DeCDFCASXnwinRBkhivUKQifRnD4sWS45St",
  "key19": "5i1WYx2rwAzjWPxa31wMZxpxMUuGnrQjWDrXWzi8A1uUieHJqBkYpH3mdb9q44hC6iagnaSxcr5Np7hQVN555Q2T",
  "key20": "5AG4XAvqNEqgMjtQ3gB3KLi6kNS7o62a1Kv8WzJeP4dm5gR1sbPuD52Z52PY1ufCuy6BSMX2syJURef6fTYr9uP",
  "key21": "3eTAyzCF1Q6iFdHrk6cWiFosrq5HHazZxjfGSFYwfyRdnra6YSKQLt3tPqghFRGZgce2GiDhfLwR3r4eaxxHbMhp",
  "key22": "an5yWm9YMKPoj7fT3udkXCgxFM6DtMMzYXnLBUbLfmXmyGvrPENVoN86vTm85jcLKF79VptNS5Mt2kR8txWq5HB",
  "key23": "5EA7rG8DjNzq3D3ziegcewmy6znM5CBCRzHM4PLi3gEjEBuKHCJdLrYsYxnMdfC7WetmPYR59C6795xR1ca2zCDV",
  "key24": "2mnU9jcVZ5suTWeZhVy2oad7Fx5zRAhP14z5EJqNGa453T6N9Gcu4JuHe4qd5qZ3VjWtmG9kJgNW7WnkszgxhtVB",
  "key25": "3tZE2oWfBZDGsd389ZUNHhVCaT2K8WKrYqfbB4RLfKS8kipPDqM97BURGWAbDcQqWEDkeT5CUfZQ8rwCkupVu8V3",
  "key26": "3YW5KG8bAS4uoSTr15XjxmJtJkneMG6Af79HmQ9sdCTAvUEoC351b9Rn8T59QebnRo9avqRFADmbbdNXVK1asKHw",
  "key27": "2HtXzbv2Ub8G7gTJ7VnKWGUpABwpX5PuWPmp1GesprdvYW3aeG2pqfUfkEMB8mtQEFm37i7WUvxTnBMoUd6qSnBZ",
  "key28": "411B6ksXaYGaFMps9X9TxbSMdTJCDZdp5HTpqt4UKVzczuFvhqRFrP46FojqLR6eGydfacYr2YfZeweuMCpPWeok",
  "key29": "4yT7HVfv4A9BSF6wC26qfSLegmWPPcpKP5EUC2wf9uKqbGwDPmkTGkdQK1Lb7K81rLvP6XrrXZnBFhWurpjFR2De",
  "key30": "2mBaHdgrAd6C3JpDyonvqYUZ7HKb4TwpW67P6gzJ1LRLs82fJMGaWtcWdjyqqTf75U9n4s425LHc4koqW6FmEKFP",
  "key31": "3WVnWeXGixheKRzTmKwUtDc8Tb9DMYSKJizY3kJ1tPJHfLQL9aXuVSQrsu93Usikx1Q11BUbX1NwxbdWbW4QfUHG",
  "key32": "2j4LKiRzabW4Fr9dmYdix49Bavdh5bMkZbdCN2SewKcV1BLakZuSFMAr6KkoEAj2aPSTsj75HJDs2QW3di3vafZ8"
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
