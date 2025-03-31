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
    "3DanjgyVQoLKwr8Qf7pTW1CdK6Jee1ap7mBLAes9ttiNbhkM82uBX67GB78UbbRBnEfdi7TKij1fvctuY7Cc38wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VWLfz8TZgfoqsvDGAru2RmzRyGv9r23owt3CaFrHm2L1AMXEhkcgUC11ydRD5hALhPtPYqA2kRKBkJWm9bDP3g4",
  "key1": "2KzzCM853F9zoXjpSCxJ3BG9GLT8znqjZjwRVSGw6Xbg2mTLVf8V6Lj1jTgmQJjLGHv85hTxM2a1d8q6UYDds8tx",
  "key2": "5zrGKu7Ki92ddJGUyYeruP1VmDNQYooU9d2HrixgdTwxtLdyogFW5ZD1p6s9vq8ckq8fQRcGwLfUZrwNiGxMjvwP",
  "key3": "27iVsNhXgWNyoExE8m7Yi6Spj5rQMcxXr4aSskZYfdtVoqWYN9AQykPdM1iwmuKzKAwbxTe1fasN6dKEgCjV9En6",
  "key4": "49722W78LLda96MJKN5UAA1uhogu9aDYi7kHV7WKVs36jvwtVXqDt3fDFQ7brRVp6Muyag8ioA7iwSFKQDFSfGUg",
  "key5": "5GhCAwvNLqxq9M5dt8oDfWsj5w8XpMhmdKYBVTZ68MJV7e5MZFDsTHfRZVJgTTPtBM7KpfEefEJvdp4vdwFstmeh",
  "key6": "5GzCUNLkdcJLjFfqDinGWoTEog4XevQeXZmLQddXrhGQUBqiYEX7mAausWTfsGVYQjwieJL1LZ2Mdgea7pSWU6tm",
  "key7": "5ipTxEfwgTAmQh7zowGEsVRWEBDmJMBsvTHYXdKpNSKBLTQqYRD3qzXjknYobgssHLzeNNU1Ejt7mrSKw8PmuVoc",
  "key8": "5SEVnTGB56HUNiEZnNQQ4ccNYoR6vuETVWdhWvN3TezmaT1jZ5vzPmn2uMiG6v88vzWv5THuuH9rzzgSA7bwerBt",
  "key9": "oBKPJeTKMLTMhSL7DTgdWxYpuUwpAbvD2WQ5pn8GWUNJybT475kMREw7nKahFifweCFqdaQSNaALCsm212mrKE5",
  "key10": "2XvMBfHVSZEL1EVAHMbLroJj1QHKW8kxRhLHZBYU1SfMtQdKddKsE3gAYCU6jiJMDcojLHcLKFaBnmFsr7zHffiL",
  "key11": "5Ac1QLNT5VnUdCFUBqAUoT6wWsy4zFbY9fqycE89BtKJ85189hH6wLQNRZasTTSrPMhP5rrnwcyy3kUbPRnef7oo",
  "key12": "4VF5PUaoP4z2i8UNqMsJ2jMhTfU2caHag1sicvQa5AngeLZDodpuvPzQCwBaEUYsdAnGYCRYE3A9ErVxZstNtdSb",
  "key13": "4fcVLZuSEVrHVKyT4hZXftmPF3XSGBrVrz1Rzs8UdBX31XHzh7zNRS9A21Gxq7YLoT2n3PjxLyzJZSRbKSPY6cis",
  "key14": "dEepqhzrMp59BpcZ5a9ubtuMnrKxDV4giX4fLkib8VaRtjY8Qy5FW35TLU1VTQpLdqA3QAWxXwDw3Ng3zss14ez",
  "key15": "3rZHNGvtaBMUJ7MTg6zfgieu2onSWcn2zhFBfxUuibQKGtVYzz3ZVW89GHBiahNh9QPTRVkkvAVzYCWFSPkV5egx",
  "key16": "2TdVzeUsgUGAVny8KUFzYsTrLk1o3cM47Prk5pTb5am31nD787gtAHL73bWWQzViEc8nEfNTXv3MqoMoufNVzXRC",
  "key17": "2QVGQ2tsZ4KNzis4bbtrsDxWPzhunvv8WEfiFKjwaW8t3FeSHrRoD2MRxCeaZNDfzVrTSb5SxWGtUWxF4ALBqgWm",
  "key18": "kodcPjk9vMgz7675G9VpKtrBZUPYZkLeZ9tXVRLqSq9dugYzFZAQdQ1rYWfLiE2oxqfy2aW7xJQn95grHDKg5ap",
  "key19": "61MZ2gRKTFEbhgYWiKz1VwKshWfWR7ofmxYtLLeEwiMnk8Nqfywrr5DfbCJR26VyLPzG1UwzxqReDocfn94zSmxh",
  "key20": "4UFF7tbYjepmNUX9SGiSV9dW3aPrTMviYsMJHDF1ZuDY14DPiB7NCRqmahhWJnWjAPbX7Rh9VL312GjKU43TD79K",
  "key21": "uQKFgyYoL8uFEBjBXtZJ5pYrjdxDZZr1VaeVEmCxVFbQCQRCkMPx7ZvZvCJK624FHLCqWvyfpzU1tXrj7wjrXXT",
  "key22": "2z9vgwTg96VUqnBBhiydRhDc28KsNfj7N7FQmMjsewDvBB5z8vUtCuDcqTagv1aCZ4C9xEnFVWfCbH7d2CbUf1yv",
  "key23": "3e26fcdVub3cXAo9FXJkAMF4gwUhu2qGne9Rz4UN8JG8QdfDB1eMN3PdTkmgarnzsmrPfuT4TfVCY71G2K2FLiUd",
  "key24": "52sgwhujc8yLeSyM4RQQeUH5FqWP7g3gkZeS3YqbmRHPNq8V17qfVgXNachNeZE3qd9UEioD9pzq8X28PVSkcQpw",
  "key25": "5rSV1Cj1LsFvY3rfzQQSZhHS7APqgDtayLpGgLiEEAWuV4PY5Ujuy2tJNG33vnCFu14EqxER6bwFWdb8VwLS9SRq",
  "key26": "4HXVyBZNecxcZQzKChGP8s9DMGUKzzq7T7cGiPupFcmthZKH1Zjh3m7xswRFRqrnj2EsbS2TmkAcpLR8gPkPfYjV",
  "key27": "LASaY9W8HCmPXmBKMRYyNjZRh7FkZAxDevvCtwdX3gMtsDnzSn59Yn2as8otMS5SnwU8FZzKY43yXBjyh3gbWcC",
  "key28": "pwwDQkxYbUcpqCkZrguuCuRf3W6U2L4JMEBcNp5gShCSRMq6zkvmPUDRsxywJKyYSh8otyhhEivN8a1QpiPvmvq",
  "key29": "5e5iUCESEEBzHSjseionP1YkVfV2PG9JxgJdxxdBgUuc7Ts2THeDM68uKSjcYCxi9PModyCwkYsttMBGwP9wfJP1",
  "key30": "5rhqYu8MRjydw8qB4yDUqjWY2KrEgwRXMK431QPnZrY2v1PrtSzDcZd2bdKFurRFThcZUvfPkpAYsjHtNS3mqFuN",
  "key31": "4o4iDLqt5rKgqa3q3U5HQKqvCX1ZBKdKRJbY3ee6w2X19hkv27g7vfkH3ihWAwy7LXpQSf2maUKXEs2GvKqPShpX",
  "key32": "33m4SgsejQfJa85zMXpwY4A8kQFDLbP6Vz3oaMcCkNoJcapUXRKMBj8q7toqQ1my9rk5aBwFu6PLCp9Ny7u1GW6X",
  "key33": "isjHBARVG5QVyg2tKA2aSeQf4ghGXb1B7LUhVj1h4DnuFx17vJd2oux66t4vshoyA6yF6oLQ5ae5G9JkutjxkdF",
  "key34": "aGpBTLJ8BT9ZZDtfrNzfyW9wK83An49J4o3HaeeAY7xxiCuVgaPTr23QtHMeAEkB3GTmvRg4KZtG6MvNxyTQFe8",
  "key35": "3fHfkhPrqounaYii3rTUAs9CBHFLxYWWLkgnWa7CTQQztFG7czs4mLfAcZobPcDaytmHjiwKJ9ppz9c1pntFUQXk",
  "key36": "5LeJxpQrzGgntfbbHswKxri851mgM7mZbi1gecv6s7meBxvfZ25ZgB55Bg5btTCkjNnEd4B8DYDtJx8QnmKmAu8A",
  "key37": "3a6hsrRqQUfacCMeQWLDZHA22u2ixcUNEFmeJbCs8gCQYyYExujq8s2X9ZLBbciRRze1eaLimSqQU2N9rgZZNfBQ",
  "key38": "2HXtu4PDdwJJf1t7muZmrBvAiN9HAE8hfWXSJwarT5LcnbpUXUGc8PxGiMcGaRZ868AEAqEjquzzJBPd9T2k4Lkr"
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
