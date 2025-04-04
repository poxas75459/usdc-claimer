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
    "2H2QLD3UHXREpu4BPzdzkgPGxHTF4FykNEZHPKSL7TEiZpQ3Vezc671hP4p4uasc1nJsngxNL7Q6UQuX13PgxmM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zH2UVmv74vBkUNzrnYEdLN7Qt8rbjGydsgdqM8xgFUxX5eHLie2Y1AtJgLwCx2wAdcjqF8XuL6C8c25rvKeWRMS",
  "key1": "5BQNpd9M9CiUmvLPGPKLn6Rq2ZdCJaoBYUG2XCDPfWjBPhpJRS2bxMxWVymZPMAJyKmoRLsbrefDCCKt5UqECPes",
  "key2": "2oS8LxAnQ4K1mvHzjSe9nvyUK1xgcrBpzXupCYUHmv3HHuvHg6eoCRLc1xccspfcWmwyVCeVskurNNiksvFdSSni",
  "key3": "2togh7Jzy4oMhqf5uTraEP42zcKNhyudqZCv38JBE3TjWnsJMd6aDRxPqq8CnKg3f3EvFFY6XeTZ3wj9iBLGJnzc",
  "key4": "5ae8pW78WD7QXDd6vZ6TdCFzwgzkEwZiKyUWJZrzTimKeM7Bv3v2sLWLZxM6XjQNdgXmKG4JDzwUmuQcymKXSrbb",
  "key5": "53xrMaTSuj75WWgZMtPA8xjLFkjpwkLjkXTLWDmgZHnUmWd2cATK5RN1ND3t1sHoQWpdP6PXz5AJAF6Z5sbsaoKG",
  "key6": "macTc1YPV7N1fyrngMRGn86Kw4dQTNXpkmkrKALkr483VSCc1kg1hiWGf5sGh784L5ZuUjS7VsDmivG1sDANrz3",
  "key7": "3NdyuNB74BFirZ6hHNujxofQaCN1zwWWTiruENcyKxbrzeFy5rz75FvxKGJ7Fwhuuh1UCAQZucq2K1QucFMQzJN",
  "key8": "38RATXdVDMNrg4rWoahFVpYV9i1Q8aMA9ohLsJ941dqkLbioKiVBoqegBnDSAY2Wo6KhBQseS1afaB87zz7JsBgd",
  "key9": "2aMEUGMyzbuivZG8VL4KK2MEabeSkcgkWo6pvHcCLfwd5LF3ngUNKkkzxw1LyQ9bjB3hAVUSgp8kbhXjPrfv3Rx5",
  "key10": "4trpNJPtNCuFq9DSHH96m8QwAC542FLvbWFMJbHdALKDjC3gn84Y4d5xNdBYegQWeFHQoohTyX4ZT8viixwNUhMy",
  "key11": "en3e6KX9Y7ACooC9TdypS1U3TXZBamDZx8UVu5kXUaVTpeJiD13tTZ9z1dc6PCkqtMt4yisy7iZRcmY2PVWkcLC",
  "key12": "3N9KP7G3fZ42F86um2WX5cjsFqm8fpoD2DVdbZBjUxwztRim2C3Uw57wkz1NTHwnuSqg3VYec34bUsLTTSNUFf4s",
  "key13": "2VQmm8c6564u2PFTDQULCgjvzQ39y3jxmjgfDaE9PuUZuwEdWbBysp9tMEVExTf8o7FRubJWw94AUL16xARhcYhH",
  "key14": "3QaZ5Z8Meh3mQX2mGYv2f56t3Zbimup15ASZTgDVEBSaS3cFFxEroUi41TEdu39t6zVAf6pnkdZKmUbkxkce8grs",
  "key15": "3BC3aERXMHLbFs7yo5ZS41SxCufhmxxvbgN5vPhcix53uo5SqhGx4MJtz28uttGg58bdoNNjzyAWjapXgjUTWjiY",
  "key16": "5QU88t66mAsPokg4m9D8hP1Ne5mYuDJgfcxZM7ZnZCbyj8WVLZYWY1FLnepPiG2omedWrEZ9opAGA8eVfrkFZZS1",
  "key17": "4MKV3U8ipAdyaiSxsmscbchy1zVRGdq3w6ELiDHdV9KBrm7UAJmDzEa2Td1dRErsyasrVEiaUkLaz92hd186tvQB",
  "key18": "5cMsxcwgFqSM5UeEXWuGjhgAwfcj5pk4GYXMNeDAG4AJnWniXgTGyxJpzMFvR27zX4ANq6TkPujs1Kg1WMFg8Nie",
  "key19": "7wNxDg5N7KQxQuywSuVyL2VjpSWiVvwgThVCrSjnaXx2T9qir9rNvb5wgamYFNBFkCCUQjpiVcC5PJkRdR6bjJ8",
  "key20": "5ckc3ypnnybtifG6JUXqMj7MkMshmewZVgofistmV3Cd2uG5pNvcH7efFhofuRoiCuNpAwitRsY2BDGuUFr5mHD7",
  "key21": "4w4ZBqcGqukFqMvRStBFZqqBKgd4iindmsYzCa65wYsCnrG85Xxe56HrCun7tooed5Gvua6VBuQZXJs1oSENFPwq",
  "key22": "2ypeEDhSDHe5RR84YdimCj4ru6bPmvhFs45FexsZMWSi87MxXPykVZm717wBGkUqBoUVy33pPHtTjxaajBfJ45EW",
  "key23": "4VoMFjVwr65w3AtP8KPhi32SHQz6DDBn6WDRJymZ9F7v4LwcFCRVj8Hr2nqGKki9fEWzan8oR3rGCKQdRMRMkspD",
  "key24": "5JmhLYs9z1LxRJ6DH2kTGvgZfBQ8P6jshsZbaMAFEZHqLgUQNsw6MokjTtZxGcrVGpMc8BW1ksyx1mg4Z1vjbBaj",
  "key25": "JSyAFMnY8hH1cmad5kRFb5HGiSWHT5Ds8HCKgVwxLhbN1n2Uaa7n9fqNXKRXA15JGGy8CVzMLEDjhXT6MF3hh3u",
  "key26": "2RTGmT7RRyPrXSJKiH1z1VfsaQNPzVV1ioswsQ8xj88SycBroRneisJkNFfVR6dimrsv1fEGnp8hdoSL8ntUyg7y",
  "key27": "2PGe4fL6pPyEJCgseVv1qi1yh97YQPGQTkH3a2s34RLtxht7cv5bkMXLm8ofAdRrZzkbkUJNiiLbWfx22JYMrTQi",
  "key28": "3rPGAM3SaEVYEqDhHPv6N4F3UuxQvMfaWoK7RUx6TXBrNu7rNCsNaBqJvpiqboQr4QkWfs8RaMdupr4iDLiD9RAf",
  "key29": "41fr85NrAzibB6WBwZiQdgQHt29VYbx3fKqLRm3MrwXvtPgy5qRVqVuPMSuo8KbFNVFZxgXpGpKtQHSzcFUyko8d",
  "key30": "VPjhCCqHrYTJmiLBGwSQ7q2ABbjE4LE8aFDyBZgTbkTMfRjw4BLVmj8mLHwgM92wQZBtZkAr87nJ1fkGZbW2o1o",
  "key31": "53ULDkzfPTdo17RwZhLwEsJbKnGAESMznuxon2di7eSBg7sLynJK5T9kyLBfeK4cXWb4UuUNSChAbrQHQHeYFEcQ",
  "key32": "5NQ7Z3dQDJbzzpYNTKiwYkDQ5xWMmckZDotPohLAsqh7HSRYfMSVGzrw1SJgFBSU9kA7jjuMHdA9tv6EvHnZQns8",
  "key33": "2xynM3yGxVVH3SvgbZs8gaVRKZvf7SA7cvtyLxjA7KJzugs8MFNnpv6HptihEHajs97Veg2ss89o5GTa7xDzWFau",
  "key34": "2L4Gqoztechxp43zVWEZ9GaH7GcPqCZR7ThW2V4LaMgjPo23xubnnuHpaNQvGH6pKtn4kdSYp3zTXMk9YE4PYDeP",
  "key35": "umXZDP3iJuhctxPkNbrq92P9vEMXiDMdL2PVMBNZEi5xiVvDhmhhvLG8YEXLjRyhKQjUNDevCknYHXa7nBzQ2bH",
  "key36": "525ip4Wes32HDAHtE5TLHxSsJiAkANarcvsgrirv7QpDyWQJb3JX4WCEgRpfoRadC5SZAJ1RSnQmd8dAzeKm7vQy",
  "key37": "5oXwdHC3EM3jp7B2mBbAvL31h1JpewmiZETRNESQaWKrurDBzw2VxYQb2sqmLrrZ81ZTSshty83KZqLzjNHvYU8A"
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
