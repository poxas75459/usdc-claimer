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
    "zZUqLeTuQv1goUTGBrQATHbDyjRUo8Jn2CGQg4wZFEtiRmek3vtK25qJcSobdfhnB7KcQjYYNppxGP6j3ErDWSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YA2DkB8uzsJHWj31zcEVt1Hq7AbtV47tweV2jsoSDhcS4UEinfJ4S94ijn5PytP6TQ7r77TVdnuwEmTHi4Jw8i",
  "key1": "3L4i7UGZyvc2UQwisXNbZ7fzQTfjUFZtpt3FRu9iQnuRVQL7N9bSBsd4YQCdxnbeJv1XJ5EH5YPMivn9qt9MnzyN",
  "key2": "4tfAYqsu9fA8aqXSjM1XGoVdV6uzsunoeyWNSLf1exYpNeYXkZHuhWm1fKBtHPF85VswkiWcbc8trGonTBVUVJtc",
  "key3": "3K8EzPEJxqtUF7ja6i6qfd8wYDiwMyafVMxJKZaiKREcY6Ubh7W8QrRhPU9wf8dbY8ak3YKTVHm5wpxLu1fkxX8f",
  "key4": "31qZs4QbDJACpYeZ3Xw8TQrKDAiRLK6xZ2QYe3xSkRk1FhS8pjQLLdx2dwUGZqmjTZForHyhsmNoDU71JbrjqA4X",
  "key5": "aCRx2Wac6nP9sS8Ej4V643H6DDCexeP3MXkar1NrjzPMS1Dgv7jqV4tGCWTLdts7RZ3bRDw12o6UnAtfAMU8tqp",
  "key6": "tsc3UdLrAP6aVfEFMaus9EEPgRRveCrcAR3Br5SJ4Mq7P6xRZy3J9ewJRxoZnfpQxXW15bYCBpoJYLnkPKDcpog",
  "key7": "5TEKFDhXX9F51p6xyJyAoQFVcPqnmHZ693HSHpSWESv6AdbNdWrafHUkxNP3dRDru48aAqFWmb15U8VwrfkcPugU",
  "key8": "4kuUDHemYddCNxj7Hduv6DL8BEPv68yBXPHvTyahggnGUwuxhFMNUBRrcSk9rcgF78h9VdZgj6cAwopfC5F8QXeU",
  "key9": "MjwMoQ92J22pMfSmiPEPJjaMCLzUhp9sjpFyt6o6heqCVTJctoWmBMYwBHfmfYAVeVNwyfcha2aRgAkDyNapyGn",
  "key10": "4nQ4EvQtenmkjYvf1GZF3ZQ2KKTheTMb2o3tvkred4NGMeabGN72CYLZuewtmQkS5ZeExpMMRipxttn1hbrdou7t",
  "key11": "2GVEoNQXB53SgyrV1FzSWDhNbEUqpnnzJV6L2BocW2kjTJ4wihDPkrVcHnx8Md4aXY3kLjJWTxPyG4g9nQFwFEKh",
  "key12": "361pwbeFktSjSs5z5wu3rfh3E8JXfSRaiPJz1kPk2byG7S58kgRP7X9kvZdBMvgJQmYCgN9Eqf1CLkWW1Ue5H1sV",
  "key13": "4SWUj1SFRJPM8HPvQra6SBrQBq88DYwnZJJDGmP6WeGxFWqgSXspk3a2ba9RodkKsnoVCeqrtU23WryS69cy8k4T",
  "key14": "32fijRibVD1p1knTSU87P3xvyK3chqYhRKTqKMyCxoAb3X8v21LKtT9T1GMqB7WEBryFYYoBzGG5Jz4PPcMFayft",
  "key15": "2M7B3ZbPgn2Q1z8wNZriVpzJxsGraK3rMJ3wdcWZiSy3t5kTMuBHtb9wkAsv3d54PjWJbSWdoJHHoF1fPyttXR79",
  "key16": "2AfJwxpZpDVWvW6hLoV39cEEtoW2WspZXXCJjpFfHQ2a1Mz6eptgiXUUNxc2ES1gR8ZZUgV16sXD35h2x5eYQRex",
  "key17": "5EZ6pp9n5w11QtLiG7TqcVSpc5zmdgKmCRLx8srS52K8rYPCdf8Y5pxsnsfpzYLxhC1Z6bELA1ij5FiY67LsmeVz",
  "key18": "2f4VgHWRgS46STtstnj4pJRCX4xnnMxjeeLwKnybBMWyAr84XgcFYjZ1kWXvmb44mdBhVRFUBd9adXBeqYTfwpQj",
  "key19": "52F66ZdE3bf67CDcgFStLvyZEry2TXCfkEkypP63y9o4pDnTZGFEcoRkBANf1wpRwTPgu8Q5QuQ4AR6GSjEJxkEo",
  "key20": "WN8CyS6R3ND4RKcJLrALeRspEJi6iaQj1ZzMFW9YUKnP4u9T1LKaSW5KW516nEe6voVJP8Rt1hwd5QuGAG1BpZq",
  "key21": "463N2cCXXE3AcusfuU9VJevdYBkGn1fjH7pu3fb9AMbjcndYEs9kCEkom6oXHE183ii3SumDq5w8dgHQTs9JDdgQ",
  "key22": "4drQtsVTzh4LD9vSALpZgPG4UDxujzakjLRpVhn2yBfJpntpXUea7i2Pz3xW18AWiUmskf2ef8MVt8rp39AgHerP",
  "key23": "2Jx6pfX5oMqjXybq7zB33Tr7RrY4qm5kwg33yerrdvfFanWFFhSbnrNkjyVuaQAjbiH2kixPv66LRsfrA1n6cPmy",
  "key24": "pMRPTkqVJ5fihEo9tZ22uM3T4iQYyattqiSPZGBhSQ81QgueJxKSMCSnN6e3Hx7YYRtGxa2hW1Bkux5WhhzSwjx",
  "key25": "4LwV5vfy7CEwSr458enE5pZstLwnRZx56TynV3GSvBrqJM4LAUy5uKpoNWYReB2At7iWiZfDKYnLqjxzfTY5joSa",
  "key26": "zGh1FdHpFcb6HztEyLjxTfThegbP4DsPLHq55CzMmy8MUrHEywDLqVv9pjRepJNnfbL7sxe3r67RwTEERuAdooy",
  "key27": "HsEihFbGrWd6yzeacp3NAo4p2mXanYf12EJVxqLUVYZtYwXyogGQ3SHsoxHuyD5ywK3w7z4oAeKhUs6TN68QdgH",
  "key28": "3RwcNKjxKuYGdPSXwH5tMdntFcPb5HZpaFJSiExmQ9pYwJf6aLs9pkA5kU4nWX8B9bAvT2dyvK75FnvV9rS7sv76",
  "key29": "2NnbNG8buu6R8PJDt9U3NdM5HUM1rmMXfNk72tVLVXWWEKXQgRcux4giHuyZ2f8KPTzTYycL3ko15QcFYrYxr5zi",
  "key30": "4djAjkpLxVU3swbsqso6xDcRadgu24vUMcYmRQq1DnFM4Hec92LcNzhtqRb4FwCDosyANE3kuxtK6X1MWKY7ng7W",
  "key31": "5hnPBeQBJ1VN59DhuD7dbp5RFb2zygcaupcn8eMVnT3mdnpJwTyUZcZpsjuoqR9NstLYkoFmfBYHDsFiuj5Zjh5y",
  "key32": "5h7jiWF54QS5ib9t6qUBm5x9AMHYVeRHZqGXx3CXqPAdeHFyJf1sRn4P5YUyJk13XPDNeR3UpiBinsWSa8xgp5Pc",
  "key33": "o1iqRKwQtZRqzoqJiAX8BTmRZj6dJj57oixLekPZtHXgh4RrzHS3E7iAs2pgaFSiywhdmyfZRfHZjPBRSrhphRr"
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
