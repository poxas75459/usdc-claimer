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
    "81tGsHpV8yVPMTUjJtNRncmwjxBGFEd5Ni24HSPpBFTUcGGxTq2LTfuHbNPoeazRFYE8KUtR6bWkF8QdsEfh6Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zx3jr73WF34JA2VzJc4wxPkDBh1mSVU1Rnj6ZTuLwBCYVRH423CKBb4UT2pYYwwfpB1WgQjhB78moAxfUA27m6E",
  "key1": "Wp84RAb3u6eGmMKwjUgeAE3P2CWm38SnFuhaFFQfgRr5dQo6Dn4BUdjxoftzmmXXnA1Ybquz71VXioSZzwbhGUW",
  "key2": "31DB1jhpMgiVYwzHg7Hewjmogebswm1L4tyDDkAADyKJuYB4E1vVW45jyUxFLjiMMvJEvQrioeCCHuCyP1R23sPR",
  "key3": "2ssW5e3tCJ8Ft53TNYAGA8QZs6pF5Ej3YDGyEzQg3EZcUmqaUMTVb1y1RuYcuXVTEhFuBWLmCY8HrFxAQuDJs73q",
  "key4": "2KST8mxYdXzbDrvKvb82xKWA1Lw1x73Fc1dKkor1ftCUkbp6w5DVRxggtgnBCezUrCPsmjDXq3gVf3tEzyWEZsXq",
  "key5": "gocLkNaLMPTN4xbQixnqvHqKBQd89nxMXcoWAMKSnPrYGpEPAA9M4C7sFjwKTgDDux61AfK2D6WSMwTX8HdJRYB",
  "key6": "FzBcr91neoMdKydzEkQjFzSTNtZU2deisVhNcs9FqhjWUEdaLodSvYXHVcTFeMQqEkrCo7wN4ULx1ALkWQ6fMqL",
  "key7": "3eRQgXZUHXjmgcxAPkqFQKzbDJnyhpG7HYWJeU1d9NZ5gZXXW2SFoXjxdsQbJBpkkaP3QxVCjaWPxQEJzjwYRxAe",
  "key8": "4xHYkCoSPtHoXNxE6QZoR7NYSq9AwRXpdmAhUtfC31cyN5xtUXCQKLj6ZAZ26R3k1JTYeAKirR9GHnD4GkJACC8U",
  "key9": "2gfcWF5b5nc73Dpa2cn8YrdaRRMC6Rvr3jrbGeSrrWb6VmuNxp3DfmFhp1F3KkTgCjt3mRgRJv83gNrEYWqPb7XY",
  "key10": "2LWFtkRKscqwqu1TrP5Mt6UZWt6BQKrDTtQR8ZkNKYNcwFc3ooSckbt7MefXPUDHXVjAWMF5JAf7Ydy2Zj4d8ze4",
  "key11": "3P5YcgQM8xitg6FtKhp5nJ72fpcDna9EwN73ZU2kVreeNokpDF4F3ENcUL68XV241XyjNFrgLwUtMwjHWTaRqWfH",
  "key12": "5WdrsKG18vPp1VaJzwYFaZSBCPWxryEizsYZ1vYpKHH9CMZQZK9sS9XsdfQueBid5YmCAHKHc5idMkeS96LXTxte",
  "key13": "4MyHEi85qZ6UW3vDjFiTntXksaT7hxD5QMkjs721B9dCgYkaP7s7j2YRxXgdtRCcLQMdXeUR3AGomiNCnkfXLuhP",
  "key14": "47PTYW5yYAWN6pdSJAbLBxqhxvvFkr1nS7f3wvKHADQAZTLWHJLvCVy8nH2ZmiHTiKkfrezyay7k5yehKUdEDfUm",
  "key15": "5tUepyc1hPvbCTQZxAFzg1xvTui6dvb9PeQiArmT9ppmez2EbsjLKPVTgDUc9PQH2vGXHhaZyc4K3J1VnUEkamku",
  "key16": "46ErG6YHmT9ko8onzvp87hwRes3Uyz8UQ7gpFbw5Zdp5UGpTC4BVE6KaZfdzzMdvYRiw1UPuZJ18YYWrkxWE2hEa",
  "key17": "5PyRzja4FrstCcqKqQZp3FssE2YDjNNxs6pzNc91m2jaffGbCCmLRdT3KBNvTDeXDY87urF5PXATrXzN3M4VLFtV",
  "key18": "5a4ihjZVjmqQkB8imnoTpLQ5WckavEZAwuHRaFghK8sqYNcYwydYc1YLhkUCpCZ8FaixgaSzHX6jcjBB2VE1wNju",
  "key19": "thEHB5FhXDw3fRc3YjteU4h58N8bBC4325hZQHduEqWCHJqMBwnJjJh7kmhjU5z6mDcCKtRR8zGNHk75LZeSGkW",
  "key20": "4waAb9dMbrjbXG5iQU3h7Vr3QC71vSd3kaZsNBLLr71qxyvRpYdSufaSgPd1vAYLYvFYsxYCqtYHAweMxJLygL24",
  "key21": "6zez8ntj8zdnsvZeNfAVxXQ8RWih2PbjBFHXzEhbxFMntkmxSxF1JAQzuQR9MEeA66hjVhHXGHYUhEzmz9LDin7",
  "key22": "5qHTqzSakzXrLzqcWprXb5uPF3ECgiVaX2uF9q9rc8oreVQqfJ3gEJSiA5uCu62SjKKR9Hqb7NLubghY6QMdNPWc",
  "key23": "q5inAYiY4P9U8co68wS6YLwCJViVn4hyRWQ7JCxPtkuPVnjDYTZZxUUBwKNCFcdWXEmokVLs9jErPi1FBgXXMhr",
  "key24": "5u9xmTtiirrk38SwzKV6bqF8tbTT9T4VTXdpNsGgLor1zQicY8onURi1STi5NaqDhCngN9cJSdDL8ggeeinqj6Vq",
  "key25": "N6dPjgBXYbF2RGHMBYSU2V4bajyhGJqHBSyKPf2UbWnXZE2Sx13a4gFHme7tEppPix4VhMjX7gLQrbCxoLZu3b5",
  "key26": "Pivwexp19qXo9uH2LyqnsKH6Dt6hDjy1dysfd9Aw9cRPgbv3ZhUGno9E6rRYDEx6VU8iZAcpXM9kV9ZAjGbVbY3",
  "key27": "4eZ2pS3eqHAXCsLtpityBr2KMNRLajdHRyoZc5cNFEivoTmcyfZUrb8YymkdkZ2pu3Hvo1oJpXNypedDNhfx9aA9",
  "key28": "5B33wmMAD1Rv7eNJJECfWEDcANzzN8GZof1DHLBT82NXNovEkLWyDkxpyckrMdgCuCMtRTqqC5GLmuBKw2kaZNkF",
  "key29": "3mKcYWwdMKNA7eDrQp78z2X8UHaSTBzoJ9MjJi9dq5NYFoevEG4tD7MRahzaxityvZpo6CkavUZTjDAVZLGYAApU",
  "key30": "2XpZXvPMVgyuEt9mpCZTAeBogijWZKanQmGi9XHArgoVEM5BUH3SjS5m9NExEHky3UnLaD58AuXVa1BwJAXD9VNE",
  "key31": "67mDPSQAfgWpwcUmg73A2sQqNLkRvPym7TiyAdGjexoLWwwAjnxL24mCMWAVLCU9gKsK7zqqMvshJVoEpXEAWBAp",
  "key32": "x1kt3pQhuzJosmTLc85uLLT1NQ8p63FQhYaSy8KH2s5oRJBUo4a8hSKnZwA1RGoUoCiWtP7m2TAjydyJYDhhp7V",
  "key33": "3oh2ciFQrDz7okwjWqQhHqA65M3gxeBQYcjjeTADEH3vTYqUfgva9WLjC9SwCg9BViV7tmHmoWNJtd3wH5tFwBdN",
  "key34": "2Ti8fQioTohLuxRTxWcUUxu5sSicKK8fAuCtLqU2njWtLgej5kERk62bw2d9qNh28pkN3kzD3U4DjGPjZ5fXf7SK",
  "key35": "2wqtuZ9M7ThE2B3WKYxSBrKA4jbmwegRpLzmvjTNFMD6gA7kAjVpkYxNErsj8CA9E7mD1TVQbuUBX1KiiNTZ9WtG",
  "key36": "4rq1vUnwyQE8aRpSN8AvHhZo22wwjbmvQwtc1YaH29LJZ24Hd3kYQYvSULCZedJrHUVRXbyRsBiguW38xQGJhFot",
  "key37": "2ej5ir2acRQqZdj5by94b6zfDKcG3TqQuZqLFj89pKXPPxtRSzVZ12NN3enP4QuZWTyoJwqAVhdWLMJbrmEazL26",
  "key38": "27C3VfGb4XC8TAFvXLnkjCt9TevhtjxWQ2mN5ncLXUkcW4dZfZdJS7ZAciEzBiNkEFimsw9sT3zid9AenJXqMhxk",
  "key39": "5gYAhMANnfhvATdGFAaSihK5rwZxurcVsxiLkqZariDCYNAP1ALaSk6iN4t33DjRC34L1dsY3GAq9RXh2nAZSJLf",
  "key40": "h7RC5QcNcNmjrh8Zx9WDz7b2p8yUavqBBcLAXHJj1hxnmpnBwqFjn5Ss2AewoGKGJ9dVmzfuVC9vEaYez7Uzekm",
  "key41": "499HzuVAMrCgUudfb9nXKF6CD6PJLzugUz6kF2jYProVNXuL1XSaYoCJD2C7RTngWcvmHLYCEWZ4xU4goqazUtsj",
  "key42": "HymaK4jtdg4H8gwNfgHvQwBXyVzxZLaAszErG5tsbLtJUXJ6fx8UxHQBgnZvsxbuvJFrkpgk6QiZoJJG6UekU6o",
  "key43": "5Edeggj54JJdVwhZdPQEGaJzgEjMJEh6q1uVsSaSMqyQnW5bRZZc7rcnGjQzrp9kYv4GymUeKipLw2J7fj87UYiv"
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
