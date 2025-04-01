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
    "2ejvnH8nQPVZdcVWrK7NcfMMnmXovSNCfj9KjZd4PE46KTqGhbqqw2FqhWuDvGx5A9L5ucPY248M1hDv1UJR2JJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCjZHfSrrPeRosHRr4eiPJrpWGatPwTSGYpwaNbDGXuTatr93mEhEHtzLW3Yr993vVzMuUm5sAcrPyEx8ubSkVV",
  "key1": "5nBTMDvznJkCgewx5mK31RoM81SXjEDB1PZ5cUecffdTcpTK8Nbufx1DY9zNiDwExgKbeM9KqY6Qxj2QJZCFQEo3",
  "key2": "5fMUdw1mMghqZU4HhmTkGXMaFu2BP3GU2xMC79WYZbz82FeVVHXKxwqXjTgaRy8cydbScWdkRQ6Je62GVxKkYBPZ",
  "key3": "5vod2ZgiJmhcK1DE1SwbwgTvR7sMCPQrrrTV6PR6ZMzVdoSVp7ZcVLmyhRbTweCaNJgL9oQUNnmSZxWQB6eLZTN1",
  "key4": "4DYEaDCJqH5Z1UccFNMhhrETYaNmWHx39N9gYRf4Y8PyfmY6cFJ3dZyUnZiRtn77bNuzn85c2PLo2TW6Pv2tDySm",
  "key5": "5fGkibspps6UycisBSAtX33TvryDRJ413fe888MyZp7F8SoKxNEAZyU4Fx9KJ6DEXrLkUNZ1PSNkmnfhiPCZ9Aub",
  "key6": "4sKkRtmrZ4QrUSEiPrVronpCD7UmTE9egTwp1KNdCp21wbocXDjq8n4BpezU94FuhpVivbnHabu1QFsh3vNZbAda",
  "key7": "4hBG8hpRPvSU1J2AfgWScYE7tmQCLMJV11awYYFH5C91V9d9NHP9WsCyLwKSbev4jT6kBVpvE9LNfxmvRigPUEkz",
  "key8": "4iMfJaCgogLhrqW85wabxzmiPrBYmksPKARkcQRF3GBCHL5g7hhAkGFqoDvAJ17WuiG1BcRYBrbVUSHEY152yPA1",
  "key9": "617yaiNkkBmHMTnva6dprNDAMvRheJJoH76X8E78MviamBQU7Ls4kfZdw7vpty8Wb6wFi3LrUM4TzCP5WgYmSUd1",
  "key10": "5StiMXndwLnZjCckVophNtvX1KRu8UqAem4c2AyAwidiPs3sjE2wBn7tmdHitYpLhWdkSLTLvsZqSjZ9C9J2v88B",
  "key11": "23Ydikse27Fi8dvc2YLohoZ34YoYY2R6mEvsk9ThmBs7D92o9au8xYerVdbePeivdSAH2jSRUrHzdVX86zADm6zv",
  "key12": "4WPzLVdgQ1NdarqEBWD5PZBLDEuxU19TZ7oLmNKkRnuQacYszRNgVSyFNxPy6wwrLPSk4QQBs27V4rswGjFAhXvm",
  "key13": "4tEtPELyqEU96a2Ym7GsSJLyoQX8PJ7AHSizbSsBQLEGXouiZhDgmpQYAYysHPrePGTLe5bK1sihUYpxGzanEyW3",
  "key14": "tcPqAHKAmZAFAXRFSst6iSLtAzBSBHr87sjCF6hqDh7CixVE7iBrnHrDmZjBpCjoUJCyZBdMEDiD2ujwY1HAvN7",
  "key15": "8ofBqEyjrnR6CnAqsoxV66FLeYyNWqrpS2JugSDJ65DqJT4xoD9a4uqHmMkqt5DELprP8WVyqmRqGjTkWW9yfUT",
  "key16": "N8udAkHPb41uu9uMSMCbjgyNsCDcdjBjyVa6afwhCpVEucddxV7sf8Pqyoc3TF4NEK7cTvaBjiDht8JpFtAqjbY",
  "key17": "3cQJnVUr6PXrfL5w8UNCdfGJjsNXxND2Sz5jZa5hCJTfKcpe8fYUgrgyi66ZGzL2Bi3a1uyt4dzrZEx77Xk1GLFb",
  "key18": "2QqfK2L7dmxcM1TU34D3t61THeAtHXUfN5415L8GS56ds2v7HBsDyy2Zf6JNbzDQzEZgCR3w8YfzQM7mkwMvkng3",
  "key19": "5UsYkjJQfQBZNeN1trLKDoXp1duFidZ77fVBH4JJTb1372oVBSGLgXzi5KMYgYEJL3KhACDJ4nZ9N7ymCbxXt7tM",
  "key20": "MydkoC3NkNnjQjbG69RALvavNQt5nXRBy9X1bc2fFHWiihq77RtY6dU1jeJFY9ESBBJCf8mJGYawYgGfDg6zzN6",
  "key21": "39YEzVFFawTMqnqJuza9TA6Xycw2KG1rtNhNrz1jT2yVyRVDMJMjgNmP36hYdHrdoewSvUpursKJ5rDKsBwBZcqc",
  "key22": "2m5ePRE9NGT2xfbWEtnpUfq2XkcbvaDKXEqHTTtaxsJzSFPDrqPwRMhmuhe6z7qPNnRqNscYobJ5LYMGuMuy3rSq",
  "key23": "3bDSiJPYokavdjqhtaTXm33oHWeFx4wdMDr61jxbPu7jMBhdHrsrKSDyZC1z2iALQTngXQWwhkkcqD4mavdLMWyh",
  "key24": "HGb2rUYcdNpMXrfdB6pyvxhJGKzEH3BhYyygY9FBS8mKoRM39tTmT3GcG6phWAbnrpPafHJBoCxEj3yZ2BKAdqV",
  "key25": "4kZhVT9oXV58wTY9Z9Eu5oMUWDvEYWhNfyzFHEn69PtozeUA5pjSK8KsmdrkfKYXuSFpTagdEsykCyzGMYHxZ3xt",
  "key26": "2Ve5vf71XMAgxQ5XjDtV5cxZu7EhJje9BGnUc8mHkvnwG6NVhcVsPjnfs9fqY1jmLHXHmQFdJdsxyHQKZgmKLaQx",
  "key27": "2Wgjb7n9MvKBWhQtXsMdxziiKsVfZmJJ7u4xHVn6XmqsYU7NaLEhdD8Jmmh74LjjsFycQCGy8SPBotkfmkhQ5SPs",
  "key28": "4xACJsbkFU4qNtxcAHuWUwKJhFY5BwgaKDyJ22HVBCztX3XjQsrbQChQfgr93j3iY4P6Djrjbid6GNUBcK7HCQVw",
  "key29": "5S6wfim6mNgo8N5ShDfiR2JiZqujrPHh4RQyhjcuUEGYMrtfibGmG53i3pPNXpeGMVeveDrDquWY3YS6jQiaqLJ3",
  "key30": "H1q2oh3v8LE1UtSxwY8KSEFWk9k2WGQTBNBnjWZ3oBdpkhhPf2LMCAWfskc4xY8J1Ftf55q1CQEfZhCP3vqhY2C",
  "key31": "4XA8Vze1qm46Uik7rhHbg7tfW7tJXmTtUWz78Cqe4XrhswEttyAfNwsLsvGxXwn23XeAmisDHUjY6kmeXBDS8iZD",
  "key32": "4gpcqBLwpvwF1KQie8Z15C9mYjSxkYDhFBdwn6sDrfJv57GUgGBcdn4hB7dZGq9FRRLTvsijuD2M9mHmB1tWAgef",
  "key33": "5BJPFkmy8tszUAXvbKt5ArMwzWFuyA18UmxPbLKNURVng4R92dbbWmcKb9UgRXCzz1YmP4h1H3M6EPEJ8ezwAFML"
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
