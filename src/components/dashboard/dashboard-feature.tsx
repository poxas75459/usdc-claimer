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
    "2x8Wz2kZAv1ZhgMiBAXoLwdFSBGpSnVk3n5AJj9Trk35CkFp82BtSUF57oyscMDJJGt2Aw7pprK1YaCYia3t5gwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WqikE3ksrArUC7yEKHqGwNcLnfdNBuJs9UQDHMhx79cRmiwkfyFaR8RvV3jdfmibkAiCugzkSnJMYsRrzkAT8RW",
  "key1": "5cxm4H484MNrqXPgijiAB2TYF8FyFNZuVYrwSqM7Dmp4bDnkZsB9gfsu5fUTD6GVJRNMSmTbwcw5TzUVAS9XoPot",
  "key2": "2Vh9Shdr8xaAkXorghGYpHp6EHraHxsYkT6QisfqUzGK2V7FpqU5giFXNDvkggmajdXbcrdsgRHq5q5E6SWxS5AM",
  "key3": "4Z5LFmfUCNdKD3FB1dAWWz5cPaoL9cd5HzRAtPAvLxLeujQVhWKVCPtfVSb2GaLMYX7N1fzGCgjQ5WbUS2EeHNXf",
  "key4": "5uJpsuAtLjvAmyEsZyYxJi98RaKi2Xh2zjoVe5e91qfsS6DpEQtiELcYMWiXcgBM3hXtvT11R1mbvAbGn5CyDt8M",
  "key5": "3NGno9FUmXsQwJrj6yZ8VU8kDNy37HkxPWhR6votgG6sT7TjY4RJU3SiqaswW72tRCmTygN2uj4pDHKFM95PysJ2",
  "key6": "TUviNTrXtvuVbe87rcrBQ6AZBNsWycPskzjPCjJubTDvPwWKBVggB2QyQWzurovLhKMyRuCQc8uC4r3rAo9RW7G",
  "key7": "Xyb1Js8SmkfQ35WbFTNVSKtxdd8bsiQCbCXJNsnGUEWe9Wo4dbSygtRfpRmX5oGr5wkyrUHBnRsexZfmJ11YZi9",
  "key8": "ecGdzpr716MRTM5wn67GtBWN8Pe5vRdW1WDdwwco2XEPS8dgPBS2wajwnNU6q1tCK9YetKBfacW4pcBF3c1Dtg8",
  "key9": "2TsivYWKkkqbmnJKxRVfGcBTPgFuRYT1QeniPHZt97wMYGmCBC23KxTAtNQuypmZyTVgekp2HLy7Uy55KPxYfqFq",
  "key10": "5fEuZb5CjKRjrsU9KTsuFGrSLfRANUeDjfpkepQzdAPJmcpuUqi4MYBCcM3QwDPn5kEQgeYSTYRPz9PT7eJT3sah",
  "key11": "34Jthrm6JMpNCPMWsni5nrNi2xJMX33JoEBtqGAtpZo3vqpzkvf81Uo3V5NbogR4XHNPXueLUzpaqicjiYfHnUHC",
  "key12": "2KqrzsXsPDr8jfW2LXCRpPWqxX3Wbe452iafSVFpL1acQqcJ6P85UCrGyfE3F3T3FE8yJonAG6x9owmRpsByHaVg",
  "key13": "3hvuw5pizbhJVUzdsBtMq5RUcLZKRABv4SbATrTDXt1c7bLdmz6kv7C2akfzvmVfXEGXjFkRREHaQB4Hxch7vTdt",
  "key14": "2hBHZQBVf89XWTaqH7ksUmh8p3LA3tC1WjzSYzufpgYJoELiKNKhY4w6T62FAgV1PkGZzGtZdZ6Qs4mLnJ8DoT3B",
  "key15": "2dRKd2c4jEPJJ3wx2yAPcBZFuHJg9udAtpfCvoxMwojJfGiiwkXkPnfZevbMZEDg6PiHiVmySJ6i5cCyJ7D6ni7X",
  "key16": "4eweFBdsLueS82DWhvw1te19iDfAGyJtswDkJzMWKDcqj6BpxeqXeVwcDKikkhzXuZ33PV87dauzyTMfManXrW1D",
  "key17": "4zXpNU2Hsz7x2Zc4CDXYu4JaGvWVYVTHvtYsrwGaZEKG1nZeb97xttEmWUVwQK5EJL4EdpjymmZFwY5qp9CitKQt",
  "key18": "28UfDA3mcbSbUCCTYQHQJ6VHKuH86YCNvWRLUkU6qi9psk2QYuWFfd4N2oHQGqQsJqpSXe9qFoR8gD2ZzmHvudt4",
  "key19": "64iecDivk73yrXRCuxcRYXDpYiVhy6BmZcGHD23wGVzj1gL74zA6QXdM7dnN3s5NfQL6Q3iEhmhwd3pSZdndzt1Q",
  "key20": "53jLW8wJrLFbHdXU94dEfbog7L2jHoZzyhPB5GGEt85WobgGgSUfvfwpTUJsifLwmEN5rQcjwQckscVDxYHX9NMM",
  "key21": "2FKNcSPQiUu8nmKFxcq4yzvRQA8ctDrngGQg1vMZBsoLPTcDtX2mekPdLhBWt93KsiQCYPKAeBYmmqTxoxycR7Vk",
  "key22": "tQEAMfei4nKg4uFfSxHfvJf9oa9thvvMXHLYASuES7Tv8Txs1vWTnsSHeezQo9P69Y1zhtbNk4jjCGj5WyepJFD",
  "key23": "EyNmevMLpXcJVnQgnBfvruVFeferrXd6vRWFybBgRcACeSLimhKfZjkRVRL3gQ81BVR6wGtoK9RskmrBVfK3xP7",
  "key24": "3BU327fVVwNcpBXBwCAT9mWLaBZvFDe298hgK7GhQJuGKSorHGW2zpcPY3kKfjdJt1cV3whxHY6dxjSoka78iweD",
  "key25": "48CSYyzwDTAwUd6WtnQrjbsKkEykPAzNFPv3HcPJChXNY1K1VxgsCazvXwPLxSFngTWBCrzQVfT67qncMnzb2FP1",
  "key26": "5LtAMWBfVRpkuwdnp6uMC4YuXq8CvjegyQQ5mfGtx5YantdCZ1KEp2pvkfwHAgNsf9aKXpM8axRd79KBWnNezZDM",
  "key27": "3edK5gNE67UL2xQVYxXCujoqZRan8fcNbpLEn3W7MFX26znVch5bT5BcPoSrReTRMzaGithhXi4YQsFAjutE4QXJ",
  "key28": "3rEH2Mb8BScJEpB2XBXT3hgaxi7dhwouN4u36eaPUCrGWz1YGcTFAXj6YeDVev5sMC4e1nMmQxK53H8peY7RYS6z",
  "key29": "MVBuJJNegMn3xjU83z3VR5yUqPapA88JVJGTPdj1MFPuJ9TBXGodx3ohykB482nB4jmU6B3XWG3MKifeWBa8rgp",
  "key30": "61jysS1rMeEGsD9AaTkxvEVBAbqVmRosmytpCcqGAWZ13rWzV78DTFHWXU1BzxdgwyNCuUiVgP8A8cfetDboXytW",
  "key31": "4Pt7KJYrwHdjGEoyzWy9SAVd6gQKUJ89V2mKyvxEzkQyMtcjoux3pzHPuXE8HrSFjj1KNFETsGRggWZStRj5oKeL",
  "key32": "n3QFcTwLomUgkhFM4gzUwBi2pY93sKwMZJVZ6Z1KNn4pUQ216oHe8zFMUCXJfDJ2V1xiKidD2oXRUBg9Gi1S7DG",
  "key33": "5aKfhYdsfh6YbCJmqvSrePHP5mcjy3AkvxxvgofMdXaUYQu24ndoCbhHJn2XxYfPeei4qXFg4CEzDzESbHqZweMc",
  "key34": "4w1LgRguhna6X6qpUL4GPGcSCRhT3zBpMjuvoE8KLS23hRwnPDUw9iZdChYYyv3he4iUSujDFkpSXqEqvWMVypfF",
  "key35": "3RkxoCxbxJVJ5hbfx6rPyK8GyuMYJRWDes19A74dRAvKE6RzmbnzhzVu66zCDLKZuxVAcSkDgeE2Jhy2CLFGJooo"
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
