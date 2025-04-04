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
    "4NtWBZ1SdmgBZFb5jwSNBgeDUe8YgCZPBVnqHmHRFXjad1kxoZCiuAReTAmHWWXJre4rNVL22HzeVQqWwJdaYvME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqTpYKd9DLkZdafh7rPKHo7VAc5KRSBxnYXTGq6jQJzZGwwaL2oazBasU9tGG9SQH2PixkDGjjCtMq1x58N2H4Z",
  "key1": "4PKEkDMoro9smY3NTcA8r7g3vLL2kzaCPnZYW24jvRMXvoDfDnCSNck2sGd86vcDdCbVMHc95W85SadcJd68WaCb",
  "key2": "uMk8EVAFMfjWyJcEYVc1fjTEu1xSbGmGDmTFHKjjdNR3LVhPr4CtcKZ4gaz7jco2TRd5DnjXdMnvhqcwZTMRHxf",
  "key3": "4H7qrpVRyBppymi85USLyZ7pTqZruJNDqANQ9HPnPxufLMnsJGCxKmVtQDg8Bm2GhhzvGev5wnpYxPR32T3ZuoZZ",
  "key4": "7TzrD67hHLs6k8CY7K9Qw4DCMnyFXeWkKVRoYsPtyp3jv9aSDx1E17c52ST5V6RSZ8ZnXFRnvqtDMczEPfrSmBn",
  "key5": "2ngdTCKiPFktsKkSFaH1DhohvyymdUrevcZu7khafoy5UzYgRjwatHSwqzDCFXifUMm7xBUxGjevkt7VCBoXLxD8",
  "key6": "t6nZD8AA9rrueYm9MQ1jTkMLRiYxgArpgQDoaFMGYtspDzXZmWPxxFa8sJNzZ69GfniYmZinBB8RTeipN58tjtq",
  "key7": "3Tp7MwgFNzvLVaBJ7k7CV9wCL5yDFquZj6JWiZX8QcxwkvNvHdcYhcrmhTDFhiMsaBYa2SsdrzQXNqZcHDgU5VwA",
  "key8": "2Te6YWocJyjJCJ88xLiPj8BgukA5u6LpD7ybvtjW99Wnmc8mcMWGN9DnxcCFeFryu5hvjqXBhMhpwVNa6gVtt2ff",
  "key9": "2uoxrZwypkLnGKUzaTGXWiBREBpkb1hu5TmRa3gfhFtaL48SWSNfMG5CQ38ueZHjkvP7Rzzu8ayy8eNjpZxdHekc",
  "key10": "2ecjNbG454FjwRz5mP31L664Qo7NbBdboBBdfhXeaEKWewx9625xcpDg75N2wx5Hgqbbj5iQUVw2p8WP1LWqX9cQ",
  "key11": "4SobfY6v2sNq8cMf6Csp8dtpiwuzuQdKuQyVjRL6KDjnhZjT9W84NPLu3dnYJ7aq6B9d8kwys4tNzNtkwiNHa37E",
  "key12": "4FZnjUGwwTgah4WPwbcsvrU55A2zN94ZoBJKoazF5V1y8WBnqqM6J2b1rqgYLJdYEhe6YD5r1kwRHys4UEyXf86s",
  "key13": "3cDThjHbvaf1jmRCBZbTqSjJbDMiA5KXNPwPRnfugnV2N1wkSiXpatTzLkcVWKqdEvYS5Ejcbt7dpfr99CSE67vb",
  "key14": "61sP8acrmNsDA6SViYWMgiBZb6BUGBhxtXnGMNNnMD5DVqGgn47BbtWN7Mhbtico8w97m4oSDycFRSZ8tMXDzgnr",
  "key15": "2HA2SFWRKGHwHjeAxPeWtxGwYBCRUGUmHuavF55vbNebWrWQvx7zdzcZD49QcSpqKFgxb17zDVKX1nTRYjBQgT6C",
  "key16": "3d16U7XJbauCqbfpjZHzymLrg2P8pjQKBFZZTETVTZqrbo6SSgYpK7sysjCp2Qob2p8wr75T9ZUVquoM23k38muZ",
  "key17": "26REnvPLKEzdPdpH3EVmZBUML7w8ZxPp5oHXE8Xpfd9eaA83hskvXdmnhyf5D3exwuX3C4dQmj4a9Cf18kJQbTLA",
  "key18": "VEx252oWiHEJRYi7o7DAZcYBaDn2tCMvJELLUxbw133APfrfXvSdKVdtVaiXJ8YAudpph1cjRo5yvaCitjHSebP",
  "key19": "5gbXFaF5SEfkhkjriBqUpN6XUfMe4nU7ZALKiLpWbxg6PqcWhqCSYr8FRFbrQNkAgV8i8ZVoAyXcdMNzvQGnyEr",
  "key20": "4A3TXhhvCys1FwX9bdq7GhCEjmkpwZmYS6QrxDDdwgxAnveXsGDzJsh2YdhsGefhv48Vu8bAkxwtoQnnfUepQ4ra",
  "key21": "3PMS7SCuFJadBLafdRkfknFYMsWBijS29ix8dJ6U96edGDQbuJkgvAhKujGSApQjgDc5xDv92VSAdXVPfiXzCwQA",
  "key22": "65pntDFNkjBLisv3UM1jYcBtP8nuBbhJvLNUukWBiu9owCF5mwVWBAsmW1Qmq2RmqhU8KKbcUbv5UoKRrhBYkpFu",
  "key23": "51mgewZSj92THc1VaeRPfbWD9L2Gr6c5pdV6Jc74caMj4b3kXk6cqDT86pheAHpm4u7kkXg49yN8pMsbQjkBM4Cf",
  "key24": "2GSGvRMYMcu6aPMJA6JiQYssheKp7Gi2o7KT3GVABRN6PWdWWGkEZCTm3c5ajiCuVmC2Q1xqDYYocDmKJ4tBLAfP",
  "key25": "2SGwS93wsG15QPr2gtW6DrA1cSS9ZzaMwFUAvRH6xXHBR3tV56uAhavYTVYyKHJccnten1AQXKzTNFshaKJR4M6M",
  "key26": "5bf6oCY4omp2JDUW5wsEBNQtfYVfaiqUZPHhZr6HRwvHDsQrEn7YxpbxHj2XekcvrBQXBMLzB3tsvdNpERXdkENS",
  "key27": "2JmeuyEXnFVoS5o6TF4i73xP5Ef2tVTDMxPbRpugrHJ5ZBmstAFYJTZLXBu5A83VsjtwtY6gDhF9qLjZeBrtfo2s",
  "key28": "3s21N6kcvYHx3MKic8Pz2hQ7aJfEve2mnXJvEKc2vSzYRkrxmUwey3gGVrjxbE3B3Jn5PXnMmGPxY14g69cj8qCX",
  "key29": "2LcsRkXJEwu9aFtLQcF5ZzM52uxQEFcvWmXHB5r3pxbbBRJV1RA14npDiYPnWi9BpBrv2tmQ8h8xyTkjdVw9C1U4",
  "key30": "3zhyuM1LA67exjozQ1qMMJE3JozAXnWt52gx3YcqV1Rzr5u7HsGSM6jWvKiwC3PR9gSeu39qQDqDKeaFiLWYLvv3",
  "key31": "XpA6LBowZhGC2GhFYTHXvJbGCSHPiBrDz65nvuyQk46QZr6Nuef75PkB4R9PB1m9E1Yc8ojzxGaMGTi5evCJEU8",
  "key32": "5HkczatenAevTUfdGqPqTxqYAzgEHsQhRcw9UFKhaZCJiMTPmYsNcG3wnQNBKEKoNVwkN35DuM4GCHet2TqSAizo",
  "key33": "52NB1f5qGeyCaWKqUR8S8GkWvV4sgziJvSms8NAyEeWz7Sv4XywBzufCs9A1BvcsmJ1XbPPLHZzhHtov1cJ2TfUo",
  "key34": "baLW1U9zBYc2nkppY3Yo1wqBDL1t9XzocMKVL1wHxyRhdMpBWVh8We4emKRWUe5NXVzYkWa5wsh3aCD93gRszkL",
  "key35": "6njdJgp39DhuRMGxHPKqmFwFZGGkKm765tktc1eobZnD2ULhCA3js1EFtkw3ugFUM6Zj2zi8GQdR4iVUjhCXuqt",
  "key36": "4FUoHWawbrMRzXhFCkdiVJVNZPk4AWy7TNMpz4B8eKogAtZdU1uRCgZYijwsDWw9gNxUd7DRWTHzvsr3nTGhgY6e"
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
