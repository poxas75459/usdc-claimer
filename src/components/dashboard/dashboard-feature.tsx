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
    "3ujFNDes9C6Kyqehk8STnCMVfXFvVkpGFxq5NhcApRicSQPGkMQJckUGW8U5xmLwZwVCHMENujRLGE4VVhB2oXRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G3dKeVZzSYwxntaYYSSyBmuDUNS6EuHDZvmThyNAYonuCAWXComAAyANDyLqFskTZDJGnZTAzYb2B4NZjAhdNxv",
  "key1": "5a4GPVUvvPxphHxt1NFck4UtFnAU9DiG7unF8BGQAqFWmfYG7kGQ7Qux4A555yQAQHtWSNCiMMQTUvseGXvcUg5Q",
  "key2": "4einJ4iyogvHxUvQB2WrtZvBc6cuui4v9Z9dNL3ufAu5KgCKxvvABNf9pBT8asiLtxp3pAwm5MRZkg3CRT1xioYJ",
  "key3": "2rbhahNYHxLN4f9f9oycHcfUkDHrTU6MBgkz6mNPGFu9MTrckeXXb2GxjLgmrzE9zGiNR1QLk1TL5LdneF6zKxrs",
  "key4": "5mGdzwKe93Yr7exqSGgk1CLnqRvaZEZ3Z7UpdFfSbAgwCSAqVQq7ZH4oSFBQ4DCVp2Jt3qKtuJTz5Vbw9Lizh28h",
  "key5": "5fzCqgymQ3Q9x67ByLvwih2T3ykHhkTApjW4KkQwBSZEBjZsNrMePiAZU8eJG2YFtgVYAMQvBEAiyTeQBpE4MTmT",
  "key6": "36TSFEj7ZeWThyzAMUt7QgKayRsbfVCHZiq71bvQHhRM1CyTHnskUQzotQVPVrJQXBJbt4zzu8iB4fpAPs85D5eZ",
  "key7": "2TuGn5patfXxeFcXtbetxPv5B6mKcFNLQHXkocwGmhTWXV7STgDMVNNWDr6wKR8uK3X4ynxw7gjXePicH9vgkNte",
  "key8": "25c8x5iMPEeFSd3e3ALo148Xw8oQzQ3Ee4sftostrDgWJrZ1KwB2DmtfY9XJKcJL1RSgpw4umSvpAGZ8CeVxoJR4",
  "key9": "4Sq1K9hA9ve14myPboEhXBrLvVMP8tAyS4b177VzxX5jG6jq2XwGvdYfDgS5do9eeY4bbp3RtPPqznvK8qax7HbS",
  "key10": "JojpssZ4uqK55bg7yZjBANw8n26UnFFj3eyeoKo8SoJjYAyqNPkZreDzxwqAb4kJwJ1XrTmZVMU7r3fTnF6QXwT",
  "key11": "2BEv1bzXS1hn3zf4ZmPHXyBftBXBvt7KtGSxzqQJLWSoo6wK5yWmTHUfSAv7eM8hH1ZKnnXcsit8orkahaYr3M3q",
  "key12": "5jAdBJgXjdwywWTf9XhjWu7Vs3aSQSzduu6bSwcY2htbUhwM1P7QmyGVBJvFQeMeKYGtX2kpAQFpVMGsh3FCQf7y",
  "key13": "CX7b4nr2Q73FDfNwyA1k2wyq8uqRkynKQM1K9ryALuxBoFu52FRBxp5tx7y6gAAwQhPsLMWQeSvrjWxACLwhx1y",
  "key14": "4jEuvkgAYXed4RXGKKUEPmEcXvkq3u5oasucFfqnv7EDWZkFxuDjybehDXPvRFLWSfonfjX3zqTjVxfoRYBoB66t",
  "key15": "Zw2rgKTppRYpEnD6CUxxMn5yi6WYbZBkzL662v3WsiroLL9LKCBeMG1Qs6dd2uk5XJzJqw8GADH8qH3Yk6sd8G8",
  "key16": "29i1XMWVVGNq5BhNEiWngqsjKSNiYC1Mi4VPg7NY3zentzr83RAsWAD7bTGb4Enafoq5Er2SyNQEXy9XVQ3GxhPv",
  "key17": "23gVfhJSC92Stmq4zXjFm7ez57QcV7Lm66x2Q3XytFKLtKaZ6L9QkwdCV3EQoi4kk18Gcydgwy8inBt7mkF23U4L",
  "key18": "2MqnL3dBHz2NAYFsQVKE754RNLmBCfJPqku185YHEEJUjwiArT8PqQHXppmdvnrm9CmqBCKTvjwkmgDtbC6Cwg9Q",
  "key19": "4GXXTrR4grZgAhrqcjfcv9Ps1nWpnu7NYsAWGZ7dCcNPYcKmoShL6pL2Rt4RTZqEgjn9NCFkbhdS6NSNooRKmoFh",
  "key20": "3spdxqkgPFjsUAdf8wACVj4oyJ19jgsSQ6twfSjhptutAbUj5SkGMqEY6NtVxSYvAU1VLoL4ZVFdk6UGJqoMFGQD",
  "key21": "pFNiUWW8y86D7ciGPFeqHBv4YGdpJpXBp6PXGRD4a8CSRjGmr2VhTYLhVCUhJr7gJjpCT9m6mSj45e3QuJv4F7d",
  "key22": "R7Sp3sfDVdbRFomghZtWP5MC72sUnXJBxmneqbZCMXKFNXM8vDTPeprE6F6iMrsKa4TPXRzyQkBXxffg1gAis3q",
  "key23": "65LjavZtdgZKvEBXDuBVoLDa39r4uaHMCYWKozYhmdH1qARcdZB2P5Xnp33zBJp2UjKMeNXqXpMwXwn2yZgDG4A9",
  "key24": "39ci9HXosEjPgeUrigbQmCLTwZdiBpG9fWYqsw5ggaEr99H5kyjR8G81SxS95ZTnXKqjyf4fxVNUdgmTRs4YPSa2",
  "key25": "2dV4havs3McpvUANHYN5HthvnjZttV5fnbtTRTLruBw2QcMR3NYHVQYhDFnRmLkJUA6qkhxsnoRBEVxXhX6j9oQY",
  "key26": "4R6eNiJNmjBrnpfa5eqjGDh756MskexSoxfTm3z6aBHs548xkN73pVu9YhoziUbbtXEDon6vHqwu3yZ2b83qTiNc",
  "key27": "5njtBJeAtne7mgTNg61Knhbniv7Ztci2tTm6gHPMXZSXnGYnFiaG9oh36uoxCa9UmngXwttvaNLLZ6hV1AuA9RKt",
  "key28": "4vtP86HaijvueZ54qNXy86Cbm77FAYZ7MdWGdJMyYVJEqFqSbpp5ND1WQvsBADXEs282ompWU53Hg38W8uFAka2j",
  "key29": "2WmsASvXkkF9zk3F2whBqe3Lr2HpLCV2To6PsrWXzSM54NPpddBBRhCtdfypLxDLLfHu542WT5R3kWCDL9djBV5w",
  "key30": "4ffqewJVjAPqmhdRwUUQZcP16Ge5VPpVFg91JGxH8MD6DmhgRpYmg3UWnhVBjCC2QTTGG2z7iR8X23GDrHPRYGuU",
  "key31": "3BuSYWusDSQ4bpinoSG5N85afYea2TExofxHge9mjXvL2dknmVDiTgRMFqihKpPXvckAUK7uxcmn2eWVNmbNUn4Q",
  "key32": "2TQBrfXJwfwkvLBAMDFMa7VNyemESthzPT5EuuHN3QXnuCbH5HyNF3B1fcGt3LNHRVSYTCnGr5zsCR467dFnDf2y",
  "key33": "37KYHtW2rkhE8gxTdqUqxGLGm5Av5uh2YxkM9V5Z4rnamhBiV4aeoAc6LkbUZrz7cExwRcV7khS1guFYwie6Kdfj",
  "key34": "53htY9hTRTcprfrjp8f3eVdciqgVEDo4WJoj3pHzz5ttyoVMhQ8oTS5Z1REAMXT9jrBKaRUZbamH74CtskBXncUf",
  "key35": "51zrajVhNKbqCGPBSVEz91ojfsrepcZvuboG7W8B6fumJ9EcePrCUHRniqHRNwhsAdME7cqw94FM4J4UUmQdJaYi"
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
