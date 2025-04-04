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
    "4ZUQLznTwPPLoXFnRGfapfu6PN9zrjapYGip5ZopDBNCjE8Yc3WTqmdtULEV7TfMcrDTXyn84fFe5aybHJYv9T4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sqa9Z8HgzzW6ddtXphXbUuHwBXvYDtSanRCUT5ecpaGEhb9VvAFy7ic4PUJfmbKsjtWVanSDLjnzMNpZuGLpaen",
  "key1": "2MpZ4MqDZFwHtHCd1w5Ht7jbeF9chG2RGhSR5T3TQuAFoQ3FXbaMuDgYMYVBxvLUm78fD69oHQdiTsrWKPX5EXwg",
  "key2": "dBTPqRogU8ftqhriT2RZrJpWUirJBP7KqN5MkUe6usTWvVDUQLamsTt276qYMQAYaSapRyCstbVDx2joGBaW2co",
  "key3": "2gLTSjrRrJFUedvBJ8FWMY6kXz4JHPmkoD4L8NfXeSNzmUPL8u1PHwaVKaRTtzJbRCA5cBBjRXFnz1QWfNQ2DaTE",
  "key4": "48fyKCQ6HaWMNZ6VHeJWzLUrZPzsnCwpExfcpVHkB8TtUFFTRZMUSDx7uMZudxdRB4DXhmHYXGmpDw8M3Qva3U8b",
  "key5": "3A4fZxpfGoxRtERYQ8fkM8788sXkDSbKEsVCywMSacWQWaD9aTRWFvpeRr6gFsFqaoLXnyhRJoHTarb23Xi8VXx1",
  "key6": "2bBhd2jZW3sb7KUuFvBYfo9biVmygqcRhaSkAfMHh9nwM86z24bd3UNCZvyp1iND91WzxfqdJ4Z67BQbSkK42Dtd",
  "key7": "626JrQp5VNQW3LxhJNaFBcAHQdwRdLNQXVNFnm8MoVsTV6YpUZf7ktr3HjVXeHdRZqs875xaRg5W8FgAp1U95HnW",
  "key8": "5WxceckGi1kHKFpEeCHxDWJvtoxKLdCrFZhBcKPPJ6iFKCj7zc51kkjapNeHiAkfTr5smKmZGBXtPYcx5dKjBaGu",
  "key9": "5pL8BVhzfQvCoDhut26jnmvuAhXXxqxwtK7Xr3L4kYnpQ611DNyqyBXBchmeSXi3u4EFmHwtETh6zRrRTNnSrDaB",
  "key10": "3VXjpApkYkMcs1GGSxF5MYAzWyViVXouN35GhZNnPVQRXYuNiazPp8bM2iqkcgmrhvwhCN1UUFsoWjDGzX8HYEsU",
  "key11": "vDfbrrzWigugPAw1JNr1agwhb16vi2H3AkrzbQu8GgUNT8LBU7amtMroDADh9JQQEsUq4GbbMLcYfSzhVcZbdY8",
  "key12": "4v4t6W4Qwkv6tmkSHmzK2jpjW1CvfkNXGCFcdGMiuykimjTN2DisS2ufFFyoSLqDwR779K8iqRgvb5LMACaqom8x",
  "key13": "5qzRP3JhXgBPWLRCsd1GvwkzrPWfQZQnBWK4634xDfGEgu5DedG1refgAqZKD6JUvVY72PVWr8A5ee4YW6j7qZfm",
  "key14": "2ySCAhCouoX53Hj1udqMjixgry3rbxgKt3TbYz8EozMXoVTfQKdknCBB3xvfCbnirpXbye8WuXhFyb5bViA7QX8U",
  "key15": "5XaP9hdVJdbkiEk58gUL4c8UjV23BTpXhEDvia83XR1AioBqoZUQgrpsqj7PvZV86E3162S1qNY7MWsLcAuKC63w",
  "key16": "n5nA8JAMbgVZ1tB5YiWQGtuAdgM2fxeaHwbsnoE5BKQVJGFJpGRcVoiRsJAUeoxtosnAq2gBqEvqnLRdCyvfm9F",
  "key17": "485FsR6XfvHbetjxLBWjpgUiwnH8GMZBba9s8mppBUnpzk7YRJNJgmKG4Q7s4nBtnnHKx3hGKQUkW3VLWU7cDGVJ",
  "key18": "2ffUmeu6sPvzp4Fye2vDogCTaUpqonaHkwWfhgKTd927PNRwS6q7p5j2goUcvA6dTZRDhLCi3qYaywQAsPwZEtcY",
  "key19": "tT21hSkAFG8w6R7aZa38SUJASNqvD6Lgz9BGgYP3HzWmDkBPs7WdqcKVcDRCFKp1WvG4rBymUJNgrhRv3sHYk7s",
  "key20": "Gq9kvaCxiWJCeeqVdfuRZphr58AbBSAtdiq7NyCCgkWSWbQJaFYzcxQ5ntxP7LMAVWD2aQYbrbnqCLhLCuVbWos",
  "key21": "2p1uMJBuf49Sqhdwio7Z6HYSGeCJCkX2M2puQScZ9AGF5f2QFzX4FvdeyPkG3bAerDRKytcub9h83UEm1415iwae",
  "key22": "rK4CXqQ1GsaBeKqSiLNJwr7Goe7cqPQyLPPyscUVPERWtcBwtJki4uYdxjLEbPZCZSKa1QB4UboFrg7D7sugHiD",
  "key23": "T69uaWwCJQ3hFhey1NcwX3Vize8RTLMk27jYddXcKPjYuVohRkgV2kBX54X7jbx5ibjb1wMjkfdRbkGN53fwswF",
  "key24": "3LJmfgFqTkh1eEaA6eXhjsbVUzZff15boczafmYTKvM84iVwXPdHY4HLEPzTCDbUeaESe94LPGx4ArDvCcHNHbo8",
  "key25": "4xRLfA1TqznFvXrqPCPja7dR1JQcDXWiEUX4BEpP4qnN7NL3JnsSEQ1wAm94dP3hntTLAZ3ZTdhBU8piHpCVZvE9",
  "key26": "3s9uRoyUo3ZecAxWZUDsaW51ADYXduL8PwpArfYWUcwsKEae5T2mc5VRwHdiUrWn1MN8X7rF9V4Uko6EN4b9fKao",
  "key27": "2jnXQSbQp5b3LRxSChiKTKSnA2HQAG7i2kVz3X3G82Xa3TDh4BfMgbZ3BciAhvto8mtDeUCJ9QvTKDLRJ6jcXEbA",
  "key28": "29D8bP2GPS9uuFZHQWaLT9JimipBd1y5LQRRET7bXJWSww7o7Zk1XjHEvNwhs1nbsKN1e9rCzimrDSCJjb2fgkgs"
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
