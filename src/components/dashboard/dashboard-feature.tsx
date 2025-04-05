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
    "sdyN3Ceb9vAYjMYkDZRwzxwsnsKDNoaM8bwXzsgGFM7CgWZNEqR7LbxyHM8D3cf1sZDPYgwoZUEQkvJrd2XYPZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibcfE47K5hBRo7v97AEx3Mus9sqUonsBfyay8FW1fmCZBX76fj568ipKEAsibZCRkYTRbwyw5iFqrpnzvtTs6i5",
  "key1": "4ejyg9ccnmqq373ZjYMjEewc3w7UBspS5aruhHmzPkpbDdSf6nwXYx9UfVXwpBkPkmh1gNaG9KBynUG1EsuLbb7v",
  "key2": "5onAWBNkXSWeksWdy8hUDahjezA2AWicMyeqwh55zntwZFiSicq2xQvev9cUhtxT7Ek8cm3xeEktsFaR3TnEqHZh",
  "key3": "5kZ2nMwBFfDCTj2g8Ndw7kYtpQhpPEpYcz6JCGoC5EqFuXsdRapd3NnpnAyc6F33ZUQQPVTkp1nPxYwrtYr5hV6u",
  "key4": "bk2ro475nQLuodNhKPE85gup8FNBAwrrashLnw68mBTH3aLyFoPeArRR3uLV285swAE5epiUxPiW99j7ETkwuod",
  "key5": "2PQv2Z8jjDrc76UvU6Uzy3FsK5kLo55k6JSBofJ3E7SNA6Sk3rGytmTnqCSujuPmmT49YD5oA5jefpTLmyfUpRzC",
  "key6": "3JZDkeJYX26vK2X68CauihD5RgCe1gEW5wK4njHSu8nbegnHCxfFwQMFcaA5Sh7SD4i5PEteT5SidDkvwk7UXgJo",
  "key7": "27SyEZjwsPK3UUCB5swEmPcQZV4sy3qxvdBqST5vLUG4n7BCDgQpN1BNgAF3QaMGnbQfyndg8aoux9Q6xhPkhKhV",
  "key8": "39jiEvQPR1TZX1X3aF2RsVPTime1hVYjCV1E7yDJYdLd7z4shNBEABnStUYfc1kWSMoHECLtdf8XacCYVBnLfK9o",
  "key9": "4nwNLkr47DRj6bvnQjYaHct8sfreVdMWo6GYtF1tH4ruwkPid5edHpNMwr8Gh27DHWah1yZyrws5iYvJwfjQDaJ4",
  "key10": "jnRfjVFkqdt3kACi8fk1BCfwfoczc4ACjUm5bGHc71EY4wm8bkQrYWjAb5axaGaDxvGea8b6NQFthDZZHqoHxVy",
  "key11": "744Te16sXQUuEZuyHZcHmRnXDGj2CNgfLMRAAp4dWbjEeatHXzSkuPjdbENMHYVyrL2Ai51FP5NBu3V3zzQGvQ3",
  "key12": "7ZFV2pRGQuVFdZymB1wFhBEndrasUhjNNwAHCpbUXNEzBEFNrKbpSXj8yDrcqgRicQpPi9ZGbKd8wDrZeExRCW6",
  "key13": "4QEJi1ks8NtszCwxxPuiYpY2jobQEwJ6UqGDcqDRpCJFLx3PfSsPQy8Rq64xoBifTMH9212epoFxc7CSFmhtXb5A",
  "key14": "3H6hsZGyoL5xH3yJ331eMNyRTaK5uVSyhJTnxJpmCWeke8FJ1aN3LyzpeTEVZCW54goRnQisUfCyvrfQzbepGKHJ",
  "key15": "4KWPvU5mUafa3kLJh7eP34PrfjWdZRfRVaQMHzfpp2Un3aCGhEvwUJCwS8KaWHy3PsyaaBtmkAhL2EB1gk3WhFo",
  "key16": "3qX9XzkGEBjUDEuTGG5dCU4snPEFAEttMDe5BwSD1GwueMernKJsLLCUho49YeGJ4bwKFDRH2FGQ5HxA5oKtjLjm",
  "key17": "5zPGFkFmAJoxF4RhjQHCEdbHFYYFSnDvgdnJtM2YqqWWvUUQujxgmFuKd1MhjKQRu4HtpJL4LjGoms3kYR6pzLWx",
  "key18": "aYgDdhSn3J2LdPWGVmhX5tYTW7Cm9kAJC8asa4ck3uKSBM9eJZbTSqEPSM54Pag97v86rPobf6ceL1yrxLBrVQB",
  "key19": "4vYpXHPUFP84kLrVdQLrLEwAakQ5vSwH1uEs1ocRVEHiCCUfxyEdhMQuk1gkPHyRnqriUTB2euzMroYzJ2kShx4j",
  "key20": "6T2PJft5G7Zpgj5Ex5rzzmGYjDRDM8RxPfiUw8AQRWJVndXtVKT4R6mVt1Per3ELnk1CqBQ8GYfGbrGjbapJCxd",
  "key21": "33hy8u9SDDfHdqEER4egs6Ay68eYtzvALTtA5tUZGGsoBp3obYunVUX1sDztAcQ4DW5PzyiyhzFqJa9hX2hD1SFY",
  "key22": "ipq9KiYaxEfcHeuZK8rryCkFV5KXaxPa6i5m1QicuDHfQQxC1xwtjo9vLHi19AdBm15ampTx8rUBWoigS9pwuig",
  "key23": "2bqvywFQwoWuw28L5EGEZbSTBeU5FZKaCgBWbEspjS4z43i4Hv1ekMeEQYfYpi5Zdfn7yjqPQi76Xk1PCYdoLuTE",
  "key24": "43jjuX9wjHkHxrvuHMz7LVbWyG8R7pT82Yfv7CUfkaRpxAVxi9jQkgSTZxpt9Kymisxas3AYBhXqXMx17gDezxRr",
  "key25": "4b18d2Qu3ET1MgR4esWzcZFcCU9E4hBSW5CPeUC5fv1ZyqigvtjahsWpKkMSYhFbN4GWP4EZwvzNA1dfWdHbw6P8",
  "key26": "2Qhouqp1UjmVsvXKQuYoecsJVaVc1n3Z4AGqE3suWGznHGRepd7vPsG2uQdYugQpsGHTpgp1d26jA678x6yBaE8M",
  "key27": "2csGt1BofF7iamKR4cyumFTLWyM5TrsNTK5VoUxiAoirW76am4Qpp9vQrkmop7uY9k5zFN1syXGGshNjrouhi4xB"
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
