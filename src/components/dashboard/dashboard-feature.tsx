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
    "4Q5vrrCwjJf3gbeX7uSphYvsXGgBCQa8FFd2M43JPtxq1HwznUAYnXqr2k7DcrR1EsY2G3CwpRKvuYXB9JmjSCsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314K8px4RNqYoMuXeh6rLSVXDMZdWTaLf6sdSt52DRqoMuxH4zkpfks34Pz4Tk64mG3vEriNc94qjuYWWfRBSLXE",
  "key1": "3WFXKA12u2VufgzpV3CaHJu1pgSAf85yJzNcCEPyoH2Htf6H8yxbwMV9XYVxpuA4GUv8zuAz1oJYz8oVtLw6Guvy",
  "key2": "2QxoFxmCfUwCmUUxTxK2s5THGsm3cjuG9FLjhJX4d3CncgpSgL9B1ajfRANVw6koFzS9HnjTEn6MPh5tzuJsfxTm",
  "key3": "3XXG4SFoTCJSi3hccAEKYEF8fGSKBHXMmVHZ1MGU49NCy94kkUSXWUk6WUxPZvYJhe6hZWV5UKGAEqBv2LhULtxg",
  "key4": "46TnwAbmKkEnBbABXudz3EPAYEzL4unaHd3h6t142pJZTpEaVRvcrRwdFBb75MQefJEUZfHwQdjmmxvbxxZAx5cL",
  "key5": "4DNqUv26ueT6yqWepzotAafjJM6aQUvwXvpRDszNtN1d7qvxm9YHc7FpVePfdLy66bcjE3vkHvpQG32qok7KPNVD",
  "key6": "3BmtDqQ1UUJvaksQrUHBU7G9gYACqqd2vnnCZb9y1wNeyCTni4vh2UR2F448gMwRgLBJ68aquH6myCygdcimwuf6",
  "key7": "4zoUzC64S2JmeYGEqpkf1i8R2fSQodSMHPEDYkSPAZZ48QxiJuemNXtTTfq61gboap3XuL8EPEKiBNjMbAxUj9Sw",
  "key8": "2Ukj5LxzookoVh7uGAzim3c4fXrtffvsog2ASxeMfFXF9uzXuyxeuQsJo2eAdegWo2K8rnf6TDVam3QjWcqRT84K",
  "key9": "4p4bwbE5fnboxNspcLXtf2ZXGwxwbHrqhRwmCFT4733VmZUctcLSXMkAvwFnZpvXknKCrTrQd2BXhfYdUjSkbGRs",
  "key10": "1JYBKD3hCwCqw23Ri82m3aARd1qJLZMk5eGGWsyXmc8uriQp75zBUCJxpvDBsn9n29wAFykkGnmoWDkb3PwG4UN",
  "key11": "3dMcmhmKtA3SnjwdgKSoCeDKDxW4tLYoA1Q6D6g7ywgz3X9gbxfoqNsSnpxypkdccfNbnLfPZj1YA7wZR9EpKbNK",
  "key12": "3wgvMYN4PwwgbK1CPaGjd5q6tfGwDut1KPzFeTTP5Rx6cqcvEVvPZD6DsDe59vQgSFVcxnb1EFM6kCR6Wg5ytEr7",
  "key13": "5NX17bhGMLKk23Bx99X2bRFnvzEm4Km54PvjtGXTACyVFwTYEF341VMToUmzYaXTCZerzDLi1P5QcRc5NKhK729S",
  "key14": "5uompMxp6hYrZXmUy6bsJqJpAbHoncruFehMDQfQU2P4vc2pq8zrqRkUB9SJGygAiXrHAvg7XmKGsa1qjSnSiv1f",
  "key15": "eXrzyGjs7VApCkmz8v2FefgxyG7nmX6pBcCyHwiGzkBFymEKo4ggbs2uqRzGgVPeGRTYJeaikm5NMtdjJtJPtig",
  "key16": "4eGrzooqxMJ5qYcQbXKvh97t1Dc7FBY3g1oCPxAC9nCawkhcMpJdfB74G4SiHemB9TrEpQxxJM28ZWmAgV2uaivV",
  "key17": "3EJFFZamF6h97CdCFC6RUBRWprhEzNeVhjAVJZwtJzwczv9Y9Hs9MWMpgDWsMRxYCDrsh51i1Siy5JFURf9nJW9D",
  "key18": "5b3ALprA1MKjuPYmT13QmKXmtj2qby7R9xVkeWpiMUe6UfpoVe2tjAsVnUg7mAttjd1htySBtZeUxJ614FspqJ7M",
  "key19": "4n26EEQL7G915Lwt2yxtFr8EUKCbcKxjdZqimVrBeUwnedHhgFMn9Cesk6vGQarnQZaUAa9ihZpRGaK1bhcMBmaN",
  "key20": "2XAoUv52Q9JvP7vEJm2J4NZ4jLw59Y3kf462f4MuBRiDs5FHu7T2Xi6m51HEkH35NPcfJNTx9QNBWXGiS6KBfny2",
  "key21": "2255MrwaBmBdEirHeWKg7xG4wYvLbJcqGiVkaGainVaNaqqo8i76zDfZcRnLcRBYJSZ98vFZfn2HsJ76CrxjVChq",
  "key22": "36wxJWakVNPP8Z8C6gd25SWfDfspq963ceFFKEQHTReBJevxvd7fZTPN4Rar9vUShWJXPnBiCGUrFG9MwmcP8fk1",
  "key23": "4uopHSbQ6qPpGjJBzXpqe5R9mWcVWsjLEHUhwYE22jioG6KkcABxqV6DTPTcMwT5ZfBVNm5BHVQdqjjHoPWxjhcY",
  "key24": "5A9eTCbXYHHnyzkJe6d2iM6LVsrNVCjyrcJmcWNk9ChQ9HwZJhkaoBUF7G4e9yXP3ojsGGsh9CZC6iBuij98U1bo",
  "key25": "2fomjzui4VYuc156dzDJrKcKzXqqbrpdE4M2mNMzRabDDkgcLApat7hhzE5RhiXHnLCYH8mGjeujkMhztkgpMv9y",
  "key26": "jUTu7QoG1c44qoAeVB5bnpYwhdrmKwQespEJVqk9736mYi79JVXYi5VyApsYszhZEeojf3BZK3rfP7HiT2Rck12",
  "key27": "T71Zi4RMhAFqN8b8wTznUtJs6EVumSyMGtrqHCz7aAJfzEnwnpK1B4Ky5UptLUp2QU79U23v5bWRc9EpRhWzoaG",
  "key28": "3WCyQtubThW5EN3T4pvp54gxEjaQhaDgTxynf1RXFVmCkAtkZtCwSEc3VhGHUiJm1DmaxMQWaFfokdjAJBEiDBCf",
  "key29": "2kZVjFXhbPQCjQwFam93VMbpgk737rXbEKXHX9sFqw5NXtLjHap1r2mWYrjm9HHFXeLdnc94c6xUqqQV1YLJZVMe",
  "key30": "4JRovTEq9hrfdFd3p9zyhNmY84pLzFBLAHt3HrDC6QjXiAfMJJvLBjrz4xorMgZcykyH6ot9ReMn2Uh46SMBnSrV",
  "key31": "39vMgqhTm2eR3sVGBFAqFrf44Phn5RTmVVjaGinaGY6rZVBAK9LwPnEshTiD8R3teYGjnJLX9WgusP7SsZFWdAGG",
  "key32": "3WViDQmSkk69XVZ5pFcU4YiQh5FEce4smX3SSp35eBDLHwDCxaB7XqYTNRbJUkt1CYgT3K3ndnfTAsv4xsDLoei3",
  "key33": "2Qxsfd9vwVaRaqhFMQEA9rjCP4uPqFYHrk98VDRj79nGzU3MCQYFKXJjSTKQnFSyMnFvuJmq1ey6uArXSxcJX2sL",
  "key34": "2uW2q4Sad22FNfyY1p454w4ZUFDR9TobgB9wwQVMrN5LaedpPULq23smRVS84zpzZ7TsohfvFq2t8coJfCxvdAQG",
  "key35": "3CLyG3Wq52dShivtCjYyetii6WwcbATLCVeCARiRMRQD2PPmVTCL1QSeF9uGUDnPrNoZnoZTk4MzwDNf937Akvuh",
  "key36": "3GDcTzyHtVf9cBu5yhDevRsUzqwtPjoZvRHqHRykS92khNSopYe3uFgh4TJ7ZSyF6swMLdGFkVaWpn9neagGpZQA"
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
